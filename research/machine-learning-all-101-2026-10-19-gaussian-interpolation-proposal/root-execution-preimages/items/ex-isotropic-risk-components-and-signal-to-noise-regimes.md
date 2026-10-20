---
id: ex-isotropic-risk-components-and-signal-to-noise-regimes
kind: example
title: Bias, variance, and signal-to-noise regimes of the isotropic risk curve
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 11
deps:
  - lem-isotropic-minimum-norm-risk-components
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hastie, Montanari, Rosset, and Tibshirani, Surprises in High-Dimensional Ridgeless Least Squares Interpolation"
      url: "https://arxiv.org/pdf/1903.08560"
      locator: "Section 3.2 and Figure 8 discussion of signal-to-noise-dependent overparameterized risk."
---

## Example

For fixed signal norm $r\ge0$, noise standard deviation $\sigma\ge0$, and
aspect ratio $\gamma>0$, $\gamma\ne1$, the limiting risk has bias and variance
components
$$
\begin{array}{c|cc}
&\text{bias}&\text{variance}\\
0<\gamma<1&0&\displaystyle\frac{\sigma^2\gamma}{1-\gamma}\\[5pt]
\gamma>1&\displaystyle r^2\left(1-\frac1\gamma\right)&
\displaystyle\frac{\sigma^2}{\gamma-1}.
\end{array}
$$
When $\sigma>0$, the underparameterized branch increases from limit $0$ as
$\gamma\downarrow0$ to $+\infty$ as $\gamma\uparrow1$. On the
overparameterized side its variance decreases to $0$, and its bias increases
to $r^2$. When $\sigma>0$, the total overparameterized risk is strictly
decreasing if $r\le\sigma$, and if $r>\sigma$ it has a unique minimum at
$\gamma_*=r/(r-\sigma)$. If $\sigma=0$, the underparameterized risk is $0$;
the overparameterized risk is $r^2(1-1/\gamma)$ and is strictly increasing
when $r>0$. The one-sided risk curves diverge at $\gamma=1$ only when
$\sigma>0$; no risk limit at $\gamma=1$ is asserted. For $\sigma>0$ the
global infimum over $\gamma\ne1$ is $0$, approached as $\gamma\downarrow0$
and not attained; if $r=0$, it is also approached as $\gamma\to\infty$. For
$\sigma=0$, the minimum $0$ is attained throughout $0<\gamma<1$.

## Example references

[[lem-isotropic-minimum-norm-risk-components]]

[[thm-isotropic-ridgeless-risk-across-interpolation-threshold]]

[Hastie, Montanari, Rosset, and Tibshirani, §3.2](https://arxiv.org/pdf/1903.08560)

## Facts & Assumptions

**Given:** $r\ge0$, $\sigma\ge0$, and $\gamma>0$ with $\gamma\ne1$.

[F1] The limiting bias and variance components are the two displayed branches
([[lem-isotropic-minimum-norm-risk-components]]).

## Verification

1.1 Summing the two components in [F1] gives the total risk
$R(\gamma)=\sigma^2\gamma/(1-\gamma)$ for $0<\gamma<1$ and
$R(\gamma)=r^2(1-1/\gamma)+\sigma^2/(\gamma-1)$ for $\gamma>1$.
Differentiating the first expression gives
$R'(\gamma)=\sigma^2/(1-\gamma)^2$, so it is strictly increasing for
$\sigma>0$ and is identically zero for $\sigma=0$. [given, F1, algebra]

2.1 For $\gamma>1$,
$$R'(\gamma)=\frac{r^2}{\gamma^2}-\frac{\sigma^2}{(\gamma-1)^2}.$$
If $\sigma>0$ and $r\le\sigma$, then
$r/\gamma\le\sigma/\gamma<\sigma/(\gamma-1)$, so $R'<0$. If
$r>\sigma>0$, the derivative vanishes exactly when
$r(\gamma-1)=\sigma\gamma$, namely at
$\gamma_*=r/(r-\sigma)>1$; it is negative before this point and positive
after it, giving the unique minimum. If $\sigma=0$, the derivative is
$r^2/\gamma^2$, which is positive for $r>0$ and zero for $r=0$.
[given, F1, algebra]

3.1 The limits at $\gamma\downarrow0$, $\gamma\uparrow1$, and
$\gamma\to\infty$ follow directly from the formulas in [F1]. In particular,
the singular terms at $\gamma=1$ vanish when $\sigma=0$ and diverge when
$\sigma>0$. For $\sigma>0$ every finite-domain risk value is positive while
the underparameterized branch tends to zero as $\gamma\downarrow0$, proving
that its global infimum is $0$ and is not attained. When $\sigma=0$, the
underparameterized branch equals $0$ identically. [given, F1, step 1.1, algebra] ∎
