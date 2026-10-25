## Statistical Models and Experiments

Completed visual review of **518 items across 124 pages**, with **803 image tiles**. Findings: 2 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/statistical-models-and-experiments/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/statistical-models-and-experiments/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/statistical-models-and-experiments/category-review-receipt.json).

### Confirmed rendering defects

#### statistical-models-and-experiments / confirmed 001: `thm-order-two-field-variogram-is-conditionally-negative-definite`

- Location: **Proof**; source lines 76.
- Pages: `random-fields-covariance-and-variograms`.
- Visible defect: In the original-resolution tile the aligned equation renders as a centered display inserted mid-sentence: the lead-in remains at the left, the display occupies the center, and the explanatory sentence resumes to its right and below. The formula itself is legible, but the prose/equation order is visually broken.
- Future repair: Move the aligned display onto its own Markdown paragraph, with the explanatory sentence in a following paragraph; retain the same identity.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/statistical-models-and-experiments/screenshots/thm-order-two-field-variogram-is-conditionally-negative-definite--01.png); [frozen source](math-library-rendering-audit-2026-10-23/statistical-models-and-experiments/snapshots/thm-order-two-field-variogram-is-conditionally-negative-definite.md).

Exact frozen source lines:

```text
76: 2.1 Expanding the finite sum from step 1.2 and using $\sum_i a_i=0$ yields $$\begin{aligned} \sum_{i,j}a_i a_j\gamma(s_i-s_j) &=\frac12\sum_{i,j}a_i a_j\mathbb E[Y_i^2+Y_j^2-2Y_iY_j]\\ &=-\mathbb E\!\left[\left(\sum_i a_iY_i\right)^2\right]\le0. \end{aligned}$$ The two sums containing $Y_i^2$ or $Y_j^2$ vanish because each contains the factor $\sum_i a_i$; the remaining term is the negative expectation of a square. No choice principle is used. [step 1.2, given, algebra] ∎
```

#### statistical-models-and-experiments / confirmed 002: `thm-reduced-second-factorial-moment-palm-identity`

- Location: **Proof**; source lines 64.
- Pages: `spatial-point-process-summaries-and-palm-laws`.
- Visible defect: The cases expression renders as a centered display inserted into the middle of a prose sentence. The opening text stops at the left edge, the cases formula occupies the center, and “This is nonnegative...” resumes after it, disrupting the sentence flow.
- Future repair: Put the cases definition on its own Markdown paragraph and continue the measurability explanation in a separate paragraph.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/statistical-models-and-experiments/screenshots/thm-reduced-second-factorial-moment-palm-identity--01.png); [frozen source](math-library-rendering-audit-2026-10-23/statistical-models-and-experiments/snapshots/thm-reduced-second-factorial-moment-palm-identity.md).

Exact frozen source lines:

```text
64: 1.2 Define on the product of location and configuration spaces $$h(x,\mu)=\begin{cases}\mathbf1_Q(x)\bigl(\mu(D)-\mathbf1_D(0)\bigr),&\mu(\{0\})\ge1,\\0,&\mu(\{0\})=0.\end{cases}$$ This is nonnegative and product measurable: the two cases are measurable by the configuration evaluation sigma-algebra, and on the first case $\mu-\delta_0$ is a counting measure. For every counted occurrence $x=X_i$, [F2] puts $\theta_x\eta$ in the first case, and $h(x,\theta_x\eta)=\mathbf1_Q(x)(\theta_x\eta-\delta_0)(D)$. [F2, F3, F4, construct]
```

