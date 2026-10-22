---
id: def-qftx-distributions-on-smooth-manifolds
kind: definition
title: Scalar distributions on smooth manifolds
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-smooth-manifold
  - def-test-function-space-d-of-an-open-set
  - def-test-function-topology
  - def-distribution
dependency_roles:
  def-smooth-manifold: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-test-function-topology: mathematical-premise
  def-distribution: mathematical-premise
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, Appendix A
      url: https://arxiv.org/html/1208.1428
      locator: Full-text Appendix A, especially the definition of distributions in local coordinates; the density convention on manifolds is specified here.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

In positive dimension use the Euclidean test-function spaces and their topology from the suppliers below. In dimension zero put $\mathbb R^0=\{*\}$ and declare every complex-valued function on either open subset smooth. Define $\mathcal D(\{*\})=\mathbb C$ by evaluation at $*$, with its usual absolute-value norm topology, and $\mathcal D(\varnothing)=\{0\}$ with its unique topology. Define $\mathcal D'(\Omega)$ in this dimension as the continuous complex-linear dual of $\mathcal D(\Omega)$: on $\{*\}$ its elements are exactly $f\mapsto cf(*)$, $c\in\mathbb C$, and on the empty set there is only zero. The unique zero-dimensional multi-index has order zero and its derivative is the identity; an empty determinant and the density symbol $|dx^1\cdots dx^0|$ both equal one.

Let $M$ be a Hausdorff, second-countable smooth $n$-manifold without boundary. In a smooth chart $x=(x^1,\ldots,x^n)$, a smooth density is written $\phi_x(x)|dx^1\cdots dx^n|$. On a coordinate change $y=\psi(x)$ its coefficient transforms by
$$ \phi_y(y)=\phi_x(\psi^{-1}(y))\,|\det D\psi^{-1}(y)|. $$
A compactly supported smooth density is one whose support (the closure of the set where its coefficient is nonzero) is compact in $M$. For compact $K\subset M$, let $\mathcal D_K(M;|\Lambda^nT^*M|)$ be the complex vector space of smooth densities supported in $K$. For every chart $x:U\to\Omega$, compact $L\subset U$, and integer $r\ge0$, give this space the seminorm
$$p_{x,L,r}(\omega)=\max_{|\alpha|\le r}\sup_{z\in x(L)}|\partial^\alpha\phi_x(z)|.$$
An empty supremum is zero. These seminorms define the fixed-support locally convex topology. On the union $\mathcal D(M;|\Lambda^nT^*M|)=\bigcup_{K\text{ compact}}\mathcal D_K(M;|\Lambda^nT^*M|)$, take all seminorms whose restriction to every fixed-support space is continuous; their finite intersections of open seminorm balls and translates define the test-density topology. Thus it is the finest locally convex topology making every fixed-support inclusion continuous, as in the Euclidean test-function topology. This specifies the locally convex inductive limit without choosing an exhaustion.

A scalar distribution on $M$ is a continuous complex-linear functional on this space, with bilinear pairing $\langle u,\omega\rangle$. Write $\mathcal D'(M)$ for these distributions. The support of $u$ is the complement of the union of open sets on which it annihilates every supported test density; $\mathcal E'(M)$ denotes those with compact support. For $x:U\to\Omega$, its coordinate representative is defined for $f\in C_c^\infty(\Omega)$ by
$$\langle u_x,f\rangle=\langle u,\widetilde{x^*(f|dz^1\cdots dz^n|)}\rangle,$$
where the tilde extends the density by zero outside $U$. This extension is smooth because the support is compact in $U$. On each fixed support its derivatives in any other chart are bounded by finitely many derivatives of $f$, by the chain and product rules on compact sets; hence the extension map is continuous for the specified topologies and $u_x$ is a Euclidean distribution. In dimension zero derivatives have order zero and the density determinant is one. On a product manifold use the same definition with product densities. For a smooth diffeomorphism $f:N\to M$, define $f_*\omega=(f^{-1})^*\omega$ for test densities, using the displayed absolute-Jacobian rule. Define its distributional pullback by $\langle f^*u,\omega\rangle=\langle u,f_*\omega\rangle$. Compact supports are mapped to compact supports, and the same compact derivative estimates prove continuity. This includes coordinate changes and interchange of factors of a product.

## Definition references

[[def-smooth-manifold]]

[[def-test-function-space-d-of-an-open-set]]

[[def-test-function-topology]]

[[def-distribution]]

