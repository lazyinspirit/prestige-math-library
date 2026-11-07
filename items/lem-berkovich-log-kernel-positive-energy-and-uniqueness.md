---
dependency_level: 8
id: lem-berkovich-log-kernel-positive-energy-and-uniqueness
kind: lemma
title: "Positive energy and uniqueness for the rooted Berkovich log kernel"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - lem-berkovich-rooted-tree-finite-retractions-and-laplacian
  - thm-monotone-convergence-for-the-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-finite-measure-uniqueness-on-a-pi-system
  - lem-positive-c-zero-functionals-have-finite-regular-representing-measures
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Robert Rumely and Matthew Baker, Analysis and dynamics on the Berkovich projective line, §§3.2–3.3, §4 potential regularity, and §7.7 energy minimization; rooted-tree reconstruction"
      url: "https://arxiv.org/pdf/math/0407433v1"
verification: {}
---
## Statement

Assume the Axiom of Choice. Let $L$ be complete, algebraically closed, nontrivially nonarchimedean and have a countable dense subfield. Let $X$ be its Berkovich line and $J=-\log\delta$. If $\mu$ is a regular Borel probability with finite continuous potential $u_\mu(x)=\int J(x,y)\,d\mu(y)$, then for every regular Borel probability $\nu$,
$$\mathcal E_\mu(\nu):=\iint J(x,y)\,d\nu(x)d\nu(y)-2\int u_\mu\,d\nu+\int u_\mu\,d\mu\ge0,$$
with equality if and only if $\nu=\mu$. The first integral may be $+\infty$; the two remaining terms are finite, so no $\infty-\infty$ is used. In particular a probability is uniquely determined by its finite continuous $J$-potential.

## Statement references

[[def-axiom-of-choice]]

[[lem-berkovich-rooted-tree-finite-retractions-and-laplacian]]

## Facts & Assumptions

**Given:** The field, compact metrizable tree, kernel and probabilities in the statement.

[F1] Increasing finite rooted subtrees $\Gamma_n$ admit continuous retractions $r_n$ tending uniformly to the identity, with $J(r_nx,r_ny)\uparrow J(x,y)$. On a finite tree the kernel is common root-path length. ([[lem-berkovich-rooted-tree-finite-retractions-and-laplacian]])

[F2] Monotone convergence and Tonelli apply to nonnegative measurable functions on the finite measure products used below. ([[thm-monotone-convergence-for-the-integral]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[F3] Finite measures agreeing on a generating pi-system agree everywhere, and finite regular measures are uniquely determined by integrals of continuous functions. ([[lem-finite-measure-uniqueness-on-a-pi-system]], [[lem-positive-c-zero-functionals-have-finite-regular-representing-measures]])

[A1] Full Choice is inherited from the retraction and measure constructions and implies the Dependent Choice assumed by the local Riesz representation supplier. ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]])

## Proof

1.1 On a finite rooted tree $\Gamma$, orient each edge away from the root. For a point at coordinate $t$ in an edge $e$, let $B_{e,t}$ be the part strictly beyond that point. These edge-tail indicators are jointly Borel in the cut parameter and the point, by their finite edge-coordinate descriptions. The common-path formula gives
$$J(x,y)=\sum_e\int_0^{\ell_e}\mathbf1_{B_{e,t}}(x)\mathbf1_{B_{e,t}}(y)\,dt.$$
For two probabilities $\alpha,\beta$ on $\Gamma$, let $\sigma=\alpha-\beta$. Expanding the four positive product integrals and using [F2], all finite because $J$ is bounded on $\Gamma^2$, yields
$$\iint J\,d\sigma\,d\sigma=\sum_e\int_0^{\ell_e}\sigma(B_{e,t})^2\,dt\ge0.$$
If it is zero, every edge-tail difference vanishes almost everywhere in $t$, hence for every interior $t$ by continuity of measures on increasing tails as nearby cut parameters decrease to $t$. Limits toward vertices then determine all branch and vertex masses. The tails, together with the whole tree, form a generating pi-system, so [F3] gives $\alpha=\beta$. [F1, F2, F3, algebra]

1.2 Put $\sigma=\nu-\mu$, and $\sigma_n=(r_n)_*\sigma$ on $\Gamma_n$. Its energy $E_n$ is nonnegative by step1.1. These energies are nondecreasing: extending a rooted subtree adds only new portions of edges to the common-path formula, and each added contribution is the integral of the square of the corresponding signed branch mass. Existing edge contributions remain the same because retraction preserves their branch masses. [F1, step 1.1, algebra]

2.1 On compact metrizable $X$, the Borel sigma-algebra of the product is the product Borel sigma-algebra, since a countable base expresses every product-open set as a countable union of basic rectangles. The continuous nonnegative kernels $J(r_nx,r_ny)$ increase to $J(x,y)$, so [F2] applied separately to $\nu\otimes\nu$, $\nu\otimes\mu$ and $\mu\otimes\mu$ shows
$$\lim_n E_n=\iint J\,d\nu\,d\nu-2\iint J\,d\nu\,d\mu+\iint J\,d\mu\,d\mu=\mathcal E_\mu(\nu).$$
The cross term is $\int u_\mu\,d\nu$ and is finite because $u_\mu$ is bounded; the last term is finite for the same reason. Thus the limit is well defined, even when the first term is infinite, and it is nonnegative. [F1, F2, step 1.2, given, algebra]

2.2 If the limit is zero, monotonicity and nonnegativity give $E_n=0$ for every $n$. Step1.1 then gives $(r_n)_*\nu=(r_n)_*\mu$. For any continuous $f$ on compact metric $X$, uniform convergence $r_n\to\operatorname{id}$ implies $f\circ r_n\to f$ uniformly; their integrals under the two probabilities agree at every $n$, hence agree in the limit. By [F3], $\nu=\mu$. Conversely equal measures make all terms cancel. Finally, if two probabilities have the same finite continuous potential, Tonelli in [F2] makes their cross and self energies all equal, so $\mathcal E$ is zero and they coincide. [F1, F2, F3, step 1.1, step 2.1, algebra] ∎
