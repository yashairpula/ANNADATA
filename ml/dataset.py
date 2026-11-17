"""
ANNADATA - Agricultural Dataset Generator & Loader
Standard 22-Crop Benchmark (N, P, K, Temperature, Humidity, pH, Rainfall)
Includes regional Telangana & Jharkhand crop profiles.
"""
import numpy as np
import pandas as pd
import os

# Agricultural crop profiles with ideal mean and std deviation parameters
CROP_PROFILES = {
    "rice": {"N": (80, 15), "P": (48, 10), "K": (40, 8), "temp": (24, 3), "humidity": (82, 6), "ph": (6.4, 0.5), "rainfall": (236, 35)},
    "maize": {"N": (78, 12), "P": (48, 8), "K": (20, 5), "temp": (22, 3), "humidity": (65, 8), "ph": (6.2, 0.4), "rainfall": (85, 15)},
    "cotton": {"N": (118, 15), "P": (46, 9), "K": (19, 5), "temp": (24, 2), "humidity": (79, 5), "ph": (6.9, 0.5), "rainfall": (80, 12)},
    "redgram": {"N": (20, 6), "P": (67, 10), "K": (20, 5), "temp": (27, 4), "humidity": (48, 10), "ph": (5.7, 0.6), "rainfall": (149, 30)},
    "bengalgram": {"N": (40, 8), "P": (67, 9), "K": (79, 10), "temp": (19, 3), "humidity": (17, 4), "ph": (7.3, 0.4), "rainfall": (80, 15)},
    "groundnut": {"N": (22, 6), "P": (58, 8), "K": (50, 7), "temp": (28, 3), "humidity": (56, 8), "ph": (6.5, 0.4), "rainfall": (92, 18)},
    "chillies": {"N": (100, 14), "P": (55, 8), "K": (50, 8), "temp": (26, 3), "humidity": (70, 7), "ph": (6.6, 0.4), "rainfall": (110, 20)},
    "turmeric": {"N": (90, 12), "P": (50, 8), "K": (80, 10), "temp": (28, 3), "humidity": (80, 6), "ph": (6.3, 0.4), "rainfall": (180, 30)},
    "blackgram": {"N": (40, 8), "P": (67, 8), "K": (19, 5), "temp": (30, 3), "humidity": (65, 8), "ph": (7.1, 0.4), "rainfall": (68, 12)},
    "mungbean": {"N": (21, 6), "P": (47, 8), "K": (20, 5), "temp": (28, 3), "humidity": (85, 5), "ph": (6.7, 0.4), "rainfall": (48, 10)},
    "pomegranate": {"N": (19, 5), "P": (19, 5), "K": (40, 7), "temp": (22, 3), "humidity": (90, 4), "ph": (6.4, 0.5), "rainfall": (108, 15)},
    "banana": {"N": (100, 12), "P": (75, 10), "K": (50, 7), "temp": (27, 2), "humidity": (80, 5), "ph": (5.9, 0.4), "rainfall": (105, 18)},
    "mango": {"N": (20, 5), "P": (27, 6), "K": (30, 6), "temp": (31, 3), "humidity": (50, 6), "ph": (5.7, 0.5), "rainfall": (95, 15)},
    "grapes": {"N": (23, 6), "P": (132, 15), "K": (200, 18), "temp": (24, 5), "humidity": (82, 5), "ph": (6.0, 0.5), "rainfall": (69, 12)},
    "watermelon": {"N": (99, 12), "P": (17, 5), "K": (50, 7), "temp": (25, 3), "humidity": (85, 4), "ph": (6.5, 0.4), "rainfall": (51, 10)},
    "muskmelon": {"N": (100, 12), "P": (18, 5), "K": (50, 7), "temp": (28, 3), "humidity": (92, 4), "ph": (6.3, 0.4), "rainfall": (24, 6)},
    "apple": {"N": (21, 5), "P": (134, 15), "K": (200, 15), "temp": (22, 3), "humidity": (92, 4), "ph": (5.9, 0.4), "rainfall": (112, 15)},
    "orange": {"N": (20, 5), "P": (16, 4), "K": (10, 3), "temp": (22, 4), "humidity": (92, 4), "ph": (7.0, 0.4), "rainfall": (110, 15)},
    "papaya": {"N": (50, 10), "P": (59, 8), "K": (50, 7), "temp": (33, 4), "humidity": (92, 4), "ph": (6.7, 0.4), "rainfall": (142, 25)},
    "coconut": {"N": (22, 5), "P": (17, 4), "K": (30, 6), "temp": (27, 2), "humidity": (95, 3), "ph": (5.9, 0.4), "rainfall": (175, 30)},
    "jute": {"N": (78, 12), "P": (46, 8), "K": (40, 7), "temp": (25, 3), "humidity": (80, 5), "ph": (6.7, 0.4), "rainfall": (175, 25)},
    "coffee": {"N": (101, 12), "P": (29, 6), "K": (30, 6), "temp": (25, 3), "humidity": (58, 6), "ph": (6.8, 0.4), "rainfall": (158, 25)}
}

def generate_agricultural_dataset(samples_per_crop=120, random_seed=42):
    """
    Generates balanced, realistic agricultural training dataset
    aligned with ICAR standards and regional soil distributions.
    """
    np.random.seed(random_seed)
    rows = []

    for crop, prof in CROP_PROFILES.items():
        n_vals = np.clip(np.random.normal(prof["N"][0], prof["N"][1], samples_per_crop), 0, 180)
        p_vals = np.clip(np.random.normal(prof["P"][0], prof["P"][1], samples_per_crop), 5, 160)
        k_vals = np.clip(np.random.normal(prof["K"][0], prof["K"][1], samples_per_crop), 5, 220)
        temp_vals = np.clip(np.random.normal(prof["temp"][0], prof["temp"][1], samples_per_crop), 8, 48)
        hum_vals = np.clip(np.random.normal(prof["humidity"][0], prof["humidity"][1], samples_per_crop), 10, 100)
        ph_vals = np.clip(np.random.normal(prof["ph"][0], prof["ph"][1], samples_per_crop), 3.5, 9.5)
        rain_vals = np.clip(np.random.normal(prof["rainfall"][0], prof["rainfall"][1], samples_per_crop), 20, 350)

        for i in range(samples_per_crop):
            rows.append({
                "N": round(float(n_vals[i]), 2),
                "P": round(float(p_vals[i]), 2),
                "K": round(float(k_vals[i]), 2),
                "temperature": round(float(temp_vals[i]), 2),
                "humidity": round(float(hum_vals[i]), 2),
                "ph": round(float(ph_vals[i]), 2),
                "rainfall": round(float(rain_vals[i]), 2),
                "label": crop
            })

    df = pd.DataFrame(rows)
    # Shuffle dataset
    df = df.sample(frac=1.0, random_state=random_seed).reset_index(drop=True)
    return df

if __name__ == "__main__":
    os.makedirs("ml/data", exist_ok=True)
    df = generate_agricultural_dataset()
    save_path = "ml/data/crop_dataset.csv"
    df.to_csv(save_path, index=False)
    print(f"Generated dataset with {len(df)} samples across {df['label'].nunique()} crops at {save_path}")
