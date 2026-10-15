---
id: ex-obrien-fleming-spending-two-look
kind: example
title: Two-look O’Brien–Fleming-type spending
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-group-sequential-alpha-spending-design
  - alg-group-sequential-alpha-spending-boundary-calibration
  - thm-group-sequential-alpha-spending-calibration
  - def-standard-normal-and-normal-laws
  - lem-normal-density-has-total-mass-one
  - thm-continuity-from-below-for-measures
  - thm-intermediate-value
  - def-axiom-of-choice
justified_by: []
strategy: "Check the two-sided O’Brien–Fleming-type spending curve, determine its first symmetric threshold, and apply the calibration theorem to the joint-law final boundary."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "David L. DeMets and K. K. Gordon Lan, Interim Analysis: The Alpha Spending Function Approach, Statistics in Medicine 13 (1994), PDF pp. 6–7"
      url: "https://eclass.uoa.gr/modules/document/file.php/MATH301/PracticalSession3/LanDeMets.pdf"
    - title: "Michael J. Grayling, James M. S. Wason, and Adrian P. Mander, Group Sequential Clinical Trial Designs for Normally Distributed Outcome Variables, The Stata Journal 18(2) (2018), PDF pp. 2–4"
      url: "https://arxiv.org/pdf/1710.03127"
    - title: "Giorgos Minas, Multivariate Global Testing and Adaptive Designs, PhD thesis, Chapter 5 §§5.3–5.3.1, printed pp. 72–73"
      url: "https://wrap.warwick.ac.uk/id/eprint/58321/7/WRAP_THESIS_Minas_2013.pdf"
---

## Example

Assume AC, take $K=2$, $t_1=1/2$, $t_2=1$, and $\alpha=0.05$. Let
$\Phi(x)=P_0(Z_1\le x)$ be the standard normal CDF, and write $z_p$ for the
unique real number with $\Phi(z_p)=p$. Use the two-sided
O’Brien–Fleming-type spending curve
$$A_{OF}(0)=0,\qquad A_{OF}(t)=2\left[1-\Phi\left(\frac{z_{0.975}}{\sqrt t}\right)\right]\quad(0<t\le1).$$
Its first spend is $a_1=2[1-\Phi(z_{0.975}\sqrt2)]$. The first symmetric
two-sided boundary is $c_1=z_{1-a_1/2}$. The second boundary is the unique
finite $c_2\ge0$ satisfying
$$P_0(|Z_1|\ge c_1\ \text{or}\ |Z_2|\ge c_2)=0.05,$$
where $\operatorname{Corr}_0(Z_1,Z_2)=1/\sqrt2$. The two-sided boundaries
come from this absolute-value crossing equation, not from doubling the
one-sided boundaries.

## Facts & Assumptions

**Given:** AC, $K=2$, $t_1=1/2,t_2=1$, $\alpha=0.05$, the canonical Gaussian
null law, and the displayed O’Brien–Fleming-type spending curve. Verify the
spending conditions and identify the two symmetric boundaries.

[F1] [[def-group-sequential-alpha-spending-design]]: An admissible spending function is nondecreasing from $[0,1]$ into $[0,\alpha]$, with endpoint values $0$ and $\alpha$; the symmetric two-sided crossing event at look $j$ is $\{|Z_j|\ge c_j\}$.

[F2] [[alg-group-sequential-alpha-spending-boundary-calibration]]: At a positive increment the symmetric two-sided boundary solves $P_0(R_{k-1}\cup\{|Z_k|\ge c_k\})=A(t_k)$.

[F3] [[thm-group-sequential-alpha-spending-calibration]]: Every positive spending increment has a unique finite boundary and $P_0(R_k)=A(t_k)$ at each look.

[F4] [[def-standard-normal-and-normal-laws]]: The standard normal law is the probability measure with density $\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$.

[F5] [[lem-normal-density-has-total-mass-one]]: The density $\phi$ is positive and has integral one.

[F6] [[thm-continuity-from-below-for-measures]]: For an increasing sequence of measurable sets, the measure of their union is the supremum of their measures.

[F7] [[thm-intermediate-value]]: A continuous real function on a closed bounded interval takes every value between its endpoint values.

[A1] [[def-axiom-of-choice]]: Assume the Axiom of Choice.

## Verification

1.1 Define $\Phi(x)=\int_{-\infty}^{x}\phi(s)\,ds$. For $x<y$, positivity in [F5] gives $\Phi(y)-\Phi(x)>0$, while $\phi(s)\le1/\sqrt{2\pi}$ gives $\Phi(y)-\Phi(x)\le(y-x)/\sqrt{2\pi}$. Thus $\Phi$ is strictly increasing and continuous. [F4, F5, A1, algebra]

2.1 The density $\phi$ is even, so $\Phi(0)=1/2$. Applying [F6] to the increasing upper half-lines $(-n,\infty)$ gives $\Phi(x)\to0$ as $x\to-\infty$; applying it to the increasing lower half-lines $(-\infty,n]$ gives $\Phi(x)\to1$ as $x\to+\infty$. Hence [F7] gives a unique quantile $z_p$ for each $p\in(0,1)$, and $z_{0.975}>0$. [F4, F5, F6, F7, step 1.1, algebra]

3.1 For $0<t\le1$, $z_{0.975}/\sqrt t$ decreases as $t$ increases; since $\Phi$ increases, $A_{OF}(t)$ is nondecreasing. Its values are positive and at most $2[1-\Phi(z_{0.975})]=0.05$, and its limit at $0$ is $0$ by the upper-tail limit in step 2.1. Thus the declared $A_{OF}(0)=0$ makes it admissible. At $t_1=1/2$, its value is $a_1=2[1-\Phi(z_{0.975}\sqrt2)]$, with $0<a_1<0.05$. [given, F1, step 1.1, step 2.1, algebra]

4.1 By symmetry of the density in [F4], $P_0(|Z_1|\ge c)=2[1-\Phi(c)]$ for $c\ge0$. Therefore $c_1=z_{1-a_1/2}$ has first-look crossing probability $a_1$. The canonical covariance matrix is $\Sigma=\begin{pmatrix}1&1/\sqrt2\\1/\sqrt2&1\end{pmatrix}$, so its determinant is $1/2>0$ and the correlation is $1/\sqrt2$. Applying [F2]–[F3] at the second look gives the unique finite $c_2$ satisfying the displayed cumulative two-sided crossing equation, with total probability $A_{OF}(1)=0.05$. [given, F1, F2, F3, F4, step 2.1, step 3.1, algebra] ∎