---
page: "central-limit-theorems"
title: "Central Limit Theorems"
status: "draft"
items: ["lem-characteristic-function-of-a-normal-law", "lem-second-order-characteristic-function-expansion", "lem-product-of-near-one-characteristic-factors", "thm-lindeberg-levy-iid-central-limit-theorem", "lem-ac-supplies-sequential-choices-for-probability-constructions", "cor-de-moivre-laplace-central-limit-theorem", "def-row-wise-independent-centered-triangular-array", "def-total-row-variance-and-lindeberg-condition", "lem-lindeberg-condition-implies-feller-negligibility", "thm-lindeberg-feller-central-limit-theorem-sufficiency", "thm-feller-converse-to-lindeberg-feller", "cor-lyapunov-central-limit-theorem", "def-multivariate-normal-law", "lem-characteristic-function-of-a-multivariate-normal-law", "thm-multivariate-iid-central-limit-theorem", "rem-clt-convergence-is-only-in-distribution"]
examples: []
---

Central limit theorems describe the laws of normalized sums. The scalar argument begins with an explicit normal transform and a second-order expansion requiring only a finite second moment. A finite-product estimate controls the accumulated error when the number of factors grows.

A local AC-to-countable-choice and dependent-choice lemma supplies the choices used in probability-product constructions. The iid theorem leads to de Moivre–Laplace. Triangular arrays then allow the distributions to change within each row. Lindeberg's tail condition implies that no individual variance dominates and gives a Gaussian limit. Conversely, when maximal summand variance tends to zero and total variance is one, a normal limit forces Lindeberg: the proof uses a nonnegative cosine deficit and a fixed frequency chosen for each tail threshold. Lyapunov's higher-moment condition is a convenient sufficient condition.

Multivariate normal laws are constructed by a positive semidefinite matrix square root. Their projection characterization includes singular covariance matrices, so the multivariate iid theorem separates positive-variance projections from those that vanish almost surely. Cramer–Wold then combines these scalar conclusions.

The results state their choice assumptions. AC covers the published Gaussian, independent-copy, uniqueness and weak-convergence machinery where used; the scalar remainder and finite-product arguments are choice-free. The final remark distinguishes convergence of laws from convergence in probability or almost surely on a common space. No quantitative approximation rate is asserted.
