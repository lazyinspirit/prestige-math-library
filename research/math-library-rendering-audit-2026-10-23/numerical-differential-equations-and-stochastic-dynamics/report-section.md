## Numerical Differential Equations and Stochastic Dynamics

Completed visual review of **667 items across 78 pages**, with **988 image tiles**. Findings: 1 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/numerical-differential-equations-and-stochastic-dynamics/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/numerical-differential-equations-and-stochastic-dynamics/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/numerical-differential-equations-and-stochastic-dynamics/category-review-receipt.json).

### Confirmed rendering defects

#### numerical-differential-equations-and-stochastic-dynamics / confirmed 001: `lem-rosenbrock-stage-residual-certificate`

- Location: **Facts & Assumptions**; source lines 50.
- Pages: `rosenbrock-and-linearly-implicit-methods`.
- Visible defect: The linked F2 title is displayed as plain text containing raw ASCII mathematical notation (for example |delta_i| <= u, prod(1+delta_i), and gamma_d) rather than typeset notation. Neighboring formula-bearing source lines render as math. The issue is in the linked title presentation, not the F2 claim itself.
- Future repair: Retitle the cited result using concise prose or a renderer-supported math title, e.g. “A product of rounded factors differs from one by at most gamma_d.” Recheck the title against the exact statement before adopting it.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-differential-equations-and-stochastic-dynamics/screenshots/lem-rosenbrock-stage-residual-certificate--01.png), [tile 02](math-library-rendering-audit-2026-10-23/numerical-differential-equations-and-stochastic-dynamics/screenshots/lem-rosenbrock-stage-residual-certificate--02.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-differential-equations-and-stochastic-dynamics/snapshots/lem-rosenbrock-stage-residual-certificate.md).

Exact frozen source lines:

```text
50: [F2] [[lem-product-of-one-plus-deltas-gives-theta-n]]: a product of $d$ factors $1+\delta_j$ with $|\delta_j|\le u$ and $du<1$ differs from one by at most $\gamma_d=du/(1-du)$.
```

