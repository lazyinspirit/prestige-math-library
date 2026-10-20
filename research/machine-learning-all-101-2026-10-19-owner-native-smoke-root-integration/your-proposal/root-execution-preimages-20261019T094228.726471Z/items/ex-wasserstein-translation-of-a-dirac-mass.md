---
id: "ex-wasserstein-translation-of-a-dirac-mass"
kind: example
title: "Translation of a Dirac mass"
status: draft
dependency_level: 7
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: ["def-wasserstein-two-space-and-couplings", "thm-wasserstein-two-is-a-metric", "def-continuity-equation-with-finite-action", "thm-ac2-curve-admits-minimal-velocity", "def-dirac-measure", "def-axiom-of-choice", "thm-chain-rule-for-total-derivatives", "thm-ftc-second-part"]
justified_by: []
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
axiom_use: "AC is inherited from the minimum-velocity theorem; the explicit calculation itself is choice-free."
sources:
  references:
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures, Theorem 8.3.1, PDF pp. 183–186"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
    - title: "Filippo Santambrogio, Optimal Transport for Applied Mathematicians, Chapter 5, §5.3, PDF pp. 176–178"
      url: "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
---
## Example

Assume AC. Let $T>0$ and $a,b\in\mathbb R^d$. The curve $\mu_t=\delta_{a+tb}$ belongs to $AC^2([0,T];\mathcal P_2(\mathbb R^d))$, has constant metric speed $|b|$, and the Borel field $v_t(x)=b$ solves the continuity equation. Its action is $T|b|^2$, equal to the minimum action among fields solving that equation for this curve.

## Example references

[[def-wasserstein-two-space-and-couplings]]

[[thm-wasserstein-two-is-a-metric]]

[[def-continuity-equation-with-finite-action]]

[[thm-ac2-curve-admits-minimal-velocity]]

[[def-dirac-measure]]

[[def-axiom-of-choice]]

[[thm-chain-rule-for-total-derivatives]]

[[thm-ftc-second-part]]

[Ambrosio, Gigli, and Savaré, *Gradient Flows*, Theorem 8.3.1](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

[Santambrogio, *Optimal Transport for Applied Mathematicians*, Chapter 5, §5.3](https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf)

## Facts & Assumptions

**Given:** AC, $T>0$, and $a,b\in\mathbb R^d$.

[F1] A coupling of two Dirac laws is forced to put all mass at the sole pair of support points, so the quadratic Wasserstein distance is $W_2(\delta_x,\delta_y)=|x-y|$. [[def-wasserstein-two-space-and-couplings]] [[def-dirac-measure]]

[F2] For a continuously differentiable scalar function, the total-derivative chain rule and fundamental theorem identify the integral of its derivative with its endpoint difference. [[thm-chain-rule-for-total-derivatives]] [[thm-ftc-second-part]]

[F3] The minimum-velocity theorem says the least action of any admissible velocity for an $AC^2$ curve is the integral of its squared metric speed. [[thm-ac2-curve-admits-minimal-velocity]]

## Proof
1.1 For $s,t\in[0,T]$, any coupling of $\delta_{a+sb}$ and $\delta_{a+tb}$ is concentrated at $((a+sb),(a+tb))$, hence [F1] gives $W_2(\mu_s,\mu_t)=|t-s||b|$. For every bounded continuous f, $f(a+tb)$ is continuous, so the curve is narrowly continuous. Thus it is $AC^2$ with constant metric derivative $|b|$ (the endpoint difference quotient is exactly $|b|$ at every interior time). [given, F1]

2.1 For $\varphi\in C_c^\infty((0,T)\times\mathbb R^d)$, the chain rule gives $\frac d{dt}\varphi(t,a+tb)=\partial_t\varphi(t,a+tb)+\nabla_x\varphi(t,a+tb)\cdot b.$ The left side integrates to zero over $[0,T]$ because the test vanishes near both time endpoints; this is exactly the weak continuity-equation identity for $\mu_t=\delta_{a+tb}$ and $v_t=b$. Its action is $\int_0^T|b|^2dt=T|b|^2$. By [F3] and step 1.1, this equals $\int_0^T|\dot\mu_t|^2dt$, the minimum action. [F2, F3, step 1.1] ∎
