---
id: op-ip-function-space-flow-matching-error-theory
kind: open-problem
title: Dimension-uniform conditional flow error for function-valued Bayesian posteriors
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-ip-misfit-evidence-and-posterior-law
  - thm-ip-function-space-posterior-propriety
  - thm-ip-hellinger-data-stability
  - thm-ip-posterior-potential-discretization-error
  - def-ip-posterior-computation-error-budget
  - prop-ip-bounded-posterior-functional-error
  - lem-ip-lipschitz-ode-triangular-flow-and-c1-density
  - thm-ip-exact-triangular-transport-disintegrates-to-posterior
  - alg-ip-conditional-flow-matching
justified_by: []
forward_refs: []
axiom_use: >-
  Assume AC for standard-Borel posterior disintegration and the conditional-
  expectation versions in the formulation; AC implies Dependent Choice and
  Countable Choice, the choice prerequisites of the finite-dimensional ODE
  supplier. This is an open problem, not a proved supplier or an axiom branch
  used to establish another item.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jan Blechschmidt, Oliver G. Ernst, Moritz Poguntke, and Björn Sprungk, Flow Matching for Fast Posterior Sampling in Bayesian Inverse Problems"
      url: "https://arxiv.org/pdf/2610.02377"
      locator: "Theorem 3.1 and §§3.2–3.4; §5, especially the discussion that function-space TV/KL diagnostics can degenerate and that Wasserstein error analysis in function space is future work. The paper has finite-dimensional theory and function-valued experiments."
    - title: "Percy S. Zhai, So Won Jeong, and Veronika Ročková, Conditional Flow Matching for Bayesian Posterior Inference"
      url: "https://arxiv.org/pdf/2510.09534"
      locator: "§3.1, Theorem 1 and Assumptions 1–2; §3.2, Theorem 2 and Assumptions 3–4. These give finite-dimensional expected-Wasserstein error and uniform-in-data consistency under smooth-flow, bounded-domain and Sobolev assumptions."
    - title: "Lennon J. Shikhman, Discretization and Statistical Consistency of Functional Flow Matching"
      url: "https://arxiv.org/pdf/2608.04531"
      locator: "Theorem 23 in §8 and Assumption 25, Theorem 26, and Corollary 27 in §8.1 (PDF pp. 20–22) give Hilbert-space sensor, learned-risk, solver, and endpoint terms; Theorem 18 (PDF pp. 16–17) gives the approximate-ERM, sample, and optimizer excess-risk bound; §1.2 (PDF p. 2) excludes infinite-dimensional likelihoods and arbitrary refinement."
    - title: "Jannis Chemseddine, Paul Hagemann, Gabriele Steidl, and Christian Wald, Conditional Wasserstein Distances with Applications in Bayesian OT Flow Matching, Journal of Machine Learning Research 26(141) (2025)"
      url: "https://www.jmlr.org/papers/volume26/24-0586/24-0586.pdf"
      locator: "§2 and Proposition 1: finite-dimensional conditional Wasserstein distance equals expected conditional Wasserstein distance and supports Bayesian OT flow-matching constructions."
---

## Open problem

Assume the Axiom of Choice. Its implications supply Dependent Choice and Countable Choice for the finite-dimensional ODE flow assumptions.

Let $\mathcal H$ be a separable real Hilbert space, let $K\subseteq\mathbb R^m$ be compact, and let $y\mapsto\Pi^y$ be the pointwise potential posterior of a proper Bayesian inverse model, with positive finite evidence and finite second moment for every $y\in K$. Let $P_n$ be finite-rank orthogonal projections on $\mathcal H$ with $P_nx\to x$ for every $x\in\mathcal H$, let $\mathcal H_n=P_n\mathcal H$, and let $\Pi_n^y$ be proper posteriors defined by declared finite-rank forward/potential approximations on $\mathcal H_n$, with finite second moments for every $y\in K$. Write $i_n:\mathcal H_n\hookrightarrow\mathcal H$ for inclusion and define the posterior model error
$$e_{\mathrm{post},n}:=\sup_{y\in K}W_{2,\mathcal H}(i_{n\#}\Pi_n^y,\Pi^y),$$
where $W_{2,\mathcal H}(\mu,\nu)$ is the infimum, over joint laws with marginals $\mu,\nu$, of the square root of the expected squared Hilbert distance. This term includes both posterior-potential and finite-rank model error; the known Hellinger potential/discretization estimates would need an explicit moment or tail argument to control it in $W_2$.

Let $\pi$ be the prior-predictive joint law of $(X_1,Y)$ and assume the global prior-predictive moment condition
$$\int_{\mathcal H\times\mathbb R^m}\|x_1\|_{\mathcal H}^2\,\pi(dx_1,dy)<\infty.$$
Let $\eta$ be an independent reference probability on $\mathcal H$ with finite second moment, and use the product training law $\operatorname{Unif}[0,1]\otimes\eta\otimes\pi$. Let $X_t=(1-t)X_0+tX_1$ and let $v^*(t,X_t,Y)=\mathbb E[X_1-X_0\mid\sigma(t,X_t,Y)]$ be a chosen continuum conditional regression version. For projected endpoints, define
$$v_n^*(t,P_nX_t,Y)=\mathbb E[P_n(X_1-X_0)\mid\sigma(t,P_nX_t,Y)]$$
and the finite-rank conditional-target discrepancy
$$e_{\mathrm{target},n}:=\sup_{y\in K}\left(\int_0^1\mathbb E\!\left[\left\|P_nv^*(t,X_t,y)-v_n^*(t,P_nX_t,y)\right\|_{\mathcal H}^2\mid Y=y\right]dt\right)^{1/2}.$$
The conditional expectation versions at $Y=y$ must be chosen on all $y\in K$ for these suprema. For a measurable vector field $v:\,[0,1]\times\mathcal H_n\times K\to\mathcal H_n$, define its pointwise conditional population loss by
$$\mathcal L_{n,y}(v):=\int_0^1\mathbb E\!\left[\left\|v(t,P_nX_t,y)-P_n(X_1-X_0)\right\|_{\mathcal H}^2\mid Y=y\right]dt,$$
using the selected conditional-law version. For a finite training sample of size $N$, let $\bar v_{n,N}$ be an empirical-risk minimizer in the specified vector-field class, when it exists. On realizations where the declared optimizer returns a field (status **criterion-met** or **budget-exhausted**), let $\widehat v_{n,N}$ be that field; the optimizer-failed case has no learned field and is outside this formulation. Define the uniform conditional statistical and optimizer excess-risk terms by
$$e_{\mathrm{stat},n,N}^2:=\sup_{y\in K}\left[\mathcal L_{n,y}(\bar v_{n,N})-\inf_{v\in\mathcal V_n}\mathcal L_{n,y}(v)\right],\qquad e_{\mathrm{opt},n,N}^2:=\sup_{y\in K}\left[\mathcal L_{n,y}(\widehat v_{n,N})-\mathcal L_{n,y}(\bar v_{n,N})\right]_+$$
where $\mathcal V_n$ is the chosen class and $\mathcal L_{n,y}$ is its population conditional squared regression loss at datum $y$. Let $e_{\mathrm{solver},n,N,h}$ be a certified $W_2$ coupling bound between the numerical endpoint law at solver budget $h$ and the exact learned-flow endpoint law. Finally, let $\Lambda$ be a proposed bound, uniform in $n$ and $y\in K$, for the time-integrated spatial Lipschitz constants of the learned drifts.

Find checkable assumptions under which the learned finite-rank flow defines a posterior sampler $\widehat\Pi_{n,N,h}^y$ and, for each training realization satisfying explicit risk certificates (or with a stated probability over training data), satisfies a dimension-uniform bound of the form
$$\sup_{y\in K}W_{2,\mathcal H}(i_{n\#}\widehat\Pi_{n,N,h}^y,\Pi^y)\le e_{\mathrm{post},n}+e_{\mathrm{solver},n,N,h}+C e^{\Lambda}\bigl(e_{\mathrm{target},n}+e_{\mathrm{stat},n,N}+e_{\mathrm{opt},n,N}\bigr),$$
with $C$ independent of $n$. The result should derive usable bounds for the posterior model term from the Bayesian potential and discretization hypotheses, establish the uniform-in-$y$ training terms from prior-predictive data, and state the required flow regularity and numerical coupling assumptions. It must not assume that a finite-sample learned field or numerical solver already has the exact joint pushforward property; that property is the conclusion to be certified through the displayed error terms.

## Open problem references

[[thm-choice-implies-dependent-implies-countable-choice|The Axiom of Choice implies the choice principles required by the finite-dimensional ODE flow supplier.]]

[[thm-ip-hellinger-data-stability|The fixed-data posterior result controls Hellinger changes under its common envelope and data-Lipschitz assumptions.]]

[[thm-ip-posterior-potential-discretization-error|The potential discretization result gives a Hellinger posterior bound under a pointwise potential error envelope.]]

[[def-ip-posterior-computation-error-budget|The posterior ledger is a six-term telescoping identity and does not itself estimate its components.]]

[[alg-ip-conditional-flow-matching|Finite conditional flow matching trains by regression on prior-predictive samples and returns optimizer and numerical solver statuses.]]

[Blechschmidt et al., Theorem 3.1 and §§3.2–3.4, 5](https://arxiv.org/pdf/2610.02377)

[Zhai et al., §§3.1–3.2](https://arxiv.org/pdf/2510.09534)

[Shikhman, Theorems 23 and 26 and §1.2 scope](https://arxiv.org/pdf/2608.04531)

[Chemseddine et al., §2 and Proposition 1](https://www.jmlr.org/papers/volume26/24-0586/24-0586.pdf)

## Status

Status reviewed 2026-10-19 against the inspected full texts. The older broad wording that function-space flow-matching error theory is simply open is stale: Blechschmidt et al. give finite-dimensional inverse-problem CFM theory and function-valued numerical experiments; Zhai, Jeong, and Ročková prove finite-dimensional posterior Wasserstein accuracy in expectation and uniform-in-data consistency under compact-domain, bounded-velocity, smooth-flow and Sobolev assumptions; Shikhman proves generic Hilbert-space functional-flow discretization and end-to-end Wasserstein bounds with sensing, excess-risk, optimizer and solver terms under controlled reconstruction and stability assumptions. Shikhman's stated scope excludes infinite-dimensional likelihoods and arbitrary refinement, while Blechschmidt et al. identify a function-space Wasserstein error analysis as future work. The precise combined posterior-potential, function-space, finite-rank and uniform-conditional result formulated above is not supplied by these inspected sources. This is a bounded source review, not an exhaustive proof that no resolution exists.
