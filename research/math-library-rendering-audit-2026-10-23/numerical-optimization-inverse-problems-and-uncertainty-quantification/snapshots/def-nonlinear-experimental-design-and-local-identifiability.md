---
id: def-nonlinear-experimental-design-and-local-identifiability
kind: definition
title: "Finite nonlinear observation designs, local identifiability, and weighted information"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-approximate-linear-model-design-and-optimality-criteria
  - def-c-one-map-and-local-inverse
  - def-euclidean-inner-product
  - def-jacobian-matrix-and-gradient
  - def-matrix-product-and-identity-matrix
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, §§7.5.1–7.5.2"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "The complete book was retrieved and §7.5.1–7.5.2, printed pp. 385–390, inspected for finite design weights, the exact integer distinction, and D-optimality."
    - title: "Leah R. McLean et al., Estimability Analysis and Optimal Design in Dynamic Multi-scale Models of Cardiac Electrophysiology"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4906545/"
      locator: "Full article retrieved and inspected, §§2.1–2.3 and §5: local/global identifiability, stacked sensitivities, information matrix, and the distinction between nonlinear local identifiability and linearized rank."
    - title: "Henrik Madsen, Optimal Experimental Design for Grey-box Models"
      url: "https://henrikmadsen.org/wp-content/uploads/2014/10/Ph.D._thesis_-_2008_-_Optimal_experimental_design_for_grey-box_models.pdf"
      locator: "Complete 246-page thesis retrieved; §§1.2.3–1.2.4 and Ch. 3 §§3.2.2–3.2.3 inspected for nonlinear parameter identifiability, kinetic models, and qualitative versus quantitative experiment design."
---

## Definition

Let $p\ge1$, let $\Theta\subseteq\mathbb R^p$ be open, and let $\mathcal X$ be a finite nonempty set of experimental conditions. For each $x\in\mathcal X$, let $q_x\ge1$, let $F_x:\Theta\to\mathbb R^{q_x}$ be $C^1$ in the sense of [[def-c-one-map-and-local-inverse]], and let $W_x\in\mathbb R^{q_x\times q_x}$ be a symmetric positive-definite weight matrix, meaning $z^T W_x z>0$ for every nonzero $z\in\mathbb R^{q_x}$.

An **approximate design** is a function $\xi:\mathcal X\to[0,1]$ with $\sum_{x\in\mathcal X}\xi_x=1$, as in [[def-approximate-linear-model-design-and-optimality-criteria]]. Its support is $\operatorname{supp}(\xi)=\{x\in\mathcal X:\xi_x>0\}$. Define the joint observation map by
$$F_\xi(\theta)=(F_x(\theta))_{x\in\operatorname{supp}(\xi)},$$
where the finite product is ordered by any fixed listing of $\operatorname{supp}(\xi)$. Its **stacked sensitivity Jacobian** at $\theta$ is the vertical concatenation $J_\xi(\theta)$ of the matrices $J_x(\theta)=DF_x(\theta)$ for $x\in\operatorname{supp}(\xi)$. The associated **weighted information matrix** is
$$M_\theta(\xi)=\sum_{x\in\mathcal X}\xi_x J_x(\theta)^T W_x J_x(\theta).$$
The matrix is symmetric positive semidefinite because each summand has nonnegative quadratic form.

Because the support is finite, $F_\xi$ is $C^1$ with derivative $J_\xi(\theta)$: the finite collection of component first-order remainders has a stacked Euclidean norm that is still $o(\|h\|_2)$, and the stacked derivative is continuous because each $DF_x$ is continuous.

For a fixed design $\xi$, the observation map is **locally identifiable at $\theta_0\in\Theta$** if it is injective on some open neighborhood of $\theta_0$ in $\Theta$. It is **globally identifiable on $\Theta$** if it is injective on all of $\Theta$. A matrix $J:\mathbb R^p\to\mathbb R^m$ has full column rank when $Jv=0$ implies $v=0$. Its smallest singular value is $\sigma_{\min}(J)=\inf_{\|v\|_2=1}\|Jv\|_2$; thus $\sigma_{\min}(J)\ge\mu$ means $\|Jv\|_2\ge\mu\|v\|_2$ for every $v$.

## Remarks

The approximate design uses real weights. An exact $n$-run design instead restricts weights to multiples $n_x/n$ with integer counts, and is a separate finite allocation problem in [[def-approximate-linear-model-design-and-optimality-criteria]].
