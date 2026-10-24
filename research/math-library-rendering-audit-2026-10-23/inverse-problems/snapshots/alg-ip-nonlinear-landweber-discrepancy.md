---
id: alg-ip-nonlinear-landweber-discrepancy
kind: algorithm
title: Nonlinear Landweber iteration with discrepancy stopping
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-nonlinear-forward-map
  - def-ip-tangential-cone-condition
  - def-frechet-derivative-between-banach-spaces
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-hilbert-space-adjoint
  - thm-hilbert-adjoint-properties
  - def-countable-choice
  - def-operator-norm
justified_by: [thm-ip-nonlinear-landweber-fejer-and-finite-stopping]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Chapter 11"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
    - title: "S. Hubmer, E. Sherina, S. Kindermann, and K. Raik, A numerical comparison of some heuristic stopping rules for nonlinear Landweber iteration, §2.1"
      url: "https://epub.oeaw.ac.at/0xc1aa5576_0x003dd6da.pdf"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $X,Y$ be real Hilbert spaces, let $U\subseteq X$ be open, and let $F:U\to Y$ be Fréchet differentiable at every point with a derivative map $F':U\to\mathcal B(X,Y)$ that is continuous in operator norm. This is the real-Hilbert forward-map convention. Assume Countable Choice, so every bounded derivative $F'(x)$ has the Hilbert adjoint $F'(x)^*:Y\to X$ characterized by $\langle F'(x)u,v\rangle_Y=\langle u,F'(x)^*v\rangle_X$.

An **admissible local instance** consists of an initial point $x_0\in U$, a radius $r>0$, an exact solution $x^\dagger\in\overline B_r(x_0):=\{x\in X:\|x-x_0\|_X\le r\}$ with exact datum $y=F(x^\dagger)$, a noise level $\delta\ge0$, noisy datum $y^\delta\in Y$ with $\|y^\delta-y\|_Y\le\delta$, a constant $0\le\eta<1/2$, a discrepancy parameter $\tau>2(1+\eta)/(1-2\eta)$, and a finite update budget $M\in\mathbb N_0$. The closed outer ball $\overline B_{2r}(x_0)$ is contained in $U$; $\|F'(x)\|\le1$ for every $x\in\overline B_{2r}(x_0)$; and the uniform two-point tangential-cone inequality

$$
\|F(x)-F(\widetilde x)-F'(x)(x-\widetilde x)\|_Y\le\eta\|F(x)-F(\widetilde x)\|_Y
$$

holds for every $x,\widetilde x\in\overline B_{2r}(x_0)$. This is the uniform family of the one-basepoint local tangential-cone inequality; the shared constant and pair domain are part of the admissibility hypothesis. The exact solution and the bounds are analysis data and need not be available to the computational loop.

**Inputs:** $F$, $x_0$, $y^\delta$, $\delta$, $\tau$, and $M$ from an admissible local instance.

**Output:** Either `stopped` with an index $k$, iterate $x_k^\delta$, and residual $\|y^\delta-F(x_k^\delta)\|_Y$, or `budget_exhausted` with the last iterate and its residual.

**Procedure:** Set $x_0^\delta:=x_0$. For $k=0,1,\ldots,M$, compute $r_k^\delta:=\|y^\delta-F(x_k^\delta)\|_Y$. If $r_k^\delta\le\tau\delta$, return `stopped` with $(k,x_k^\delta,r_k^\delta)$. If $k=M$, return `budget_exhausted` with $(k,x_k^\delta,r_k^\delta)$. Otherwise set

$$
x_{k+1}^\delta:=x_k^\delta+F'(x_k^\delta)^*(y^\delta-F(x_k^\delta))
$$

and continue at the next index. Each update is evaluated at a current point in $U$, where the derivative and its Hilbert adjoint are defined.

## Definition references

[[def-ip-nonlinear-forward-map|Real-Hilbert forward-map and exact-data interface]]

[[def-frechet-derivative-between-banach-spaces|Fréchet derivatives are bounded linear operators, with the derivative map defined pointwise]]

[[def-hilbert-space|Completeness and real-Hilbert-space convention]]

[[def-real-and-complex-inner-product-space|Inner-product convention, linear in the first argument]]

[[def-ip-tangential-cone-condition|One-basepoint local tangential-cone inequality]]

[[def-operator-norm|Operator norm of each derivative]]

[[def-hilbert-space-adjoint|Hilbert adjoints under Countable Choice]]

[[thm-hilbert-adjoint-properties|Adjoint identity and norm equality]]

[[def-countable-choice|Axiom of Countable Choice]]

[Christian Clason, *Regularization of Inverse Problems*, Chapter 11](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

[S. Hubmer, E. Sherina, S. Kindermann, and K. Raik, *A numerical comparison of some heuristic stopping rules for nonlinear Landweber iteration*, §2.1](https://epub.oeaw.ac.at/0xc1aa5576_0x003dd6da.pdf)
