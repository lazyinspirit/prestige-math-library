---
id: ex-a-one-power-weight-range
kind: example
title: The A_1 range of a power weight
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [ex-power-weight-a-p-range, def-muckenhoupt-a-p-and-a-one-weights, lem-a-one-cube-average-and-maximal-function-forms-agree, def-weight-and-weighted-lp-space, lem-a-p-weights-are-doubling, thm-polar-coordinates-formula-for-lebesgue-measure, thm-real-power-continuity-and-derivatives, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "The p=1 paragraph closing Example 7.1.7, printed p. 506"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Example 4.17 and Remark 5.4, printed pp. 75 and 102"
verification:
  precheck: pass
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

For $\alpha>-n$ the power weight $w(x)=|x|^\alpha$ belongs to $A_1$ if and only
if
$$-n<\alpha\le0.$$
For $-n<\alpha\le0$ the function is radially nonincreasing and locally
integrable and satisfies $M(|x|^\alpha)\le C_{n,\alpha}|x|^\alpha$ almost
everywhere; for $\alpha>0$ it is continuous with value $0$ at the origin and
fails the cube-average/essential-infimum form of $A_1$ on cubes centred at the
origin; for $\alpha\le-n$ it is not locally integrable. Thus the $A_1$ exponent
interval is the interval obtained as the limit of the ranges at
$p\downarrow1$, and it is a strict subset of the doubling range $\alpha>-n$.

## Facts & Assumptions

**Given:** Countable Choice; $n\ge1$, $\alpha\in\mathbb R$, and $w(x)=|x|^\alpha$.

[F1] For $\alpha>-n$, $w$ is a weight, and by [[lem-a-one-cube-average-and-maximal-function-forms-agree]] the condition $w\in A_1$ is equivalent to $M(|x|^\alpha)\le C|x|^\alpha$ a.e. for some $C<\infty$ ([[ex-power-weight-a-p-range]], [[def-muckenhoupt-a-p-and-a-one-weights]], [[def-weight-and-weighted-lp-space]]).

[F2] For $\alpha>-n$ the radial integral over a ball is $\int_{B(0,\rho)}|z|^\alpha dz=|\mathbb S^{n-1}|\rho^{n+\alpha}/(n+\alpha)$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]), the ball $B(y,r)\ni x$ with $|x|\ge4r$ satisfies $|z|\ge|x|/2$ for all $z\in B(y,r)$, and $B(y,r)\subseteq B(0,|x|+2r)$ whenever $|x|<4r$ (elementary triangle inequality, [[thm-real-power-continuity-and-derivatives]] for the monotonicity of $t\mapsto t^\alpha$).

## Verification

**Proof technique:** direct.

1.1 Let $-n<\alpha\le0$ and let $B(y,r)\ni x\ne0$. If $|x|\ge4r$, then $|z-x|<2r$ for $z\in B(y,r)$, so $|z|\ge|x|/2$ and $|z|^\alpha\le2^{-\alpha}|x|^\alpha$. If $|x|<4r$, then $B(y,r)\subseteq B(0,|x|+2r)\subseteq B(0,6r)$; [F2] bounds its integral by $C_{n,\alpha}r^{n+\alpha}$ and $r^\alpha\le4^{-\alpha}|x|^\alpha$. Dividing by the ball volume gives an average bounded by $C'_{n,\alpha}|x|^\alpha$ in both cases. Taking the supremum gives the uncentred bound, hence also the centred bound and $A_1$ membership. [F1, F2, given, algebra]

1.2 For $\alpha>0$ and a cube $Q$ centred at the origin, $\operatorname{ess\,inf}_Q|x|^\alpha=0$ because every positive threshold has a subball around the origin on which $|x|^\alpha$ lies below it; that subball has positive Lebesgue measure, while $\langle|x|^\alpha\rangle_Q>0$; hence the cube-average/essential-infimum form of $A_1$ fails on $Q$, and by [F1] the pointwise form fails as well. [F1, given, algebra]

2.1 For $\alpha\le-n$ the function is not locally integrable, hence not a weight, by [[ex-power-weight-a-p-range]]. Together with steps 1.1 and 1.2 this shows that $A_1$ membership holds exactly for $-n<\alpha\le0$, while the doubling range for the measure $|x|^\alpha dx$ is the strictly larger interval $\alpha>-n$ (the direct doubling computation in [[ex-power-weight-a-p-range]], the final verification step). [step 1.1, step 1.2, given] ∎
