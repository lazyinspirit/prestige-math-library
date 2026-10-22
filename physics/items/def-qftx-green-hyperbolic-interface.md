---
id: def-qftx-green-hyperbolic-interface
kind: definition
title: Green-hyperbolic free scalar interface
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-countable-choice
  - def-gr-causal-conditions-and-global-hyperbolicity
  - def-gr-causal-curves-and-reachability
  - def-gr-inverse-metric-and-musical-isomorphisms
  - def-gr-smooth-lorentzian-objects
  - def-gr-spacelike-hypersurfaces-and-cauchy-sets
  - def-qftx-distributions-on-smooth-manifolds
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-qftx-distributions-on-smooth-manifolds: mathematical-premise
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Christian Bär, Nicolas Ginoux, and Frank Pfäffle, Wave Equations on Lorentzian Manifolds and Quantization
      url: https://arxiv.org/pdf/0806.1036
      locator: Chapter 3, §§3.2–3.4, Theorem 3.2.11, Theorem 3.3.1, Definition 3.4.1, and Corollary 3.4.3, printed pp. 76–90.
    - title: Christopher J. Fewster and Katarzyna Rejzner, Algebraic Quantum Field Theory—an introduction
      url: https://arxiv.org/pdf/1904.04051v2
      locator: §4.2, free scalar field, causal propagator, test-function quotient and local Weyl generators, printed pp. 14–18.
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]), as used to form the time-oriented Lorentzian geometric data below. At each $p$ in a smooth four-manifold $M$, declare two ordered bases of $T_pM$ equivalent exactly when the change-of-basis determinant is positive; the two equivalence classes are the orientations of $T_pM$. A **smooth orientation** of $M$ chooses one of these two classes at every $p$, locally constantly in smooth local frames; an **oriented manifold** is $M$ equipped with a chosen smooth orientation. Fix an orientation on $M$. Let $(M,g,N)$ be a Hausdorff, second-countable, oriented and time-oriented smooth Lorentzian four-manifold without boundary, with signature $(-,+,+,+)$, and assume it is globally hyperbolic in the convention of [[def-gr-causal-conditions-and-global-hyperbolicity]]: strongly causal and with compact causal diamonds. Curves and the causal sets $J^\pm(K)$ use the locally absolutely continuous causal-curve convention of [[def-gr-causal-curves-and-reachability]].

Write the positive metric density in a chart as $\mu_g=|\det(g_{ab})|^{1/2}|dx^0dx^1dx^2dx^3|$. This is a coordinate-independent smooth density: if $y=\psi(x)$, then $g_y=(D\psi^{-1})^Tg_xD\psi^{-1}$, so $|\det(g_y)|^{1/2}=|\det D\psi^{-1}|\,|\det(g_x)|^{1/2}$, the test-density transformation rule of [[def-qftx-distributions-on-smooth-manifolds]]. Let $\mathcal D_g(M):=C_c^\infty(M;\mathbb R)$ have the real test-function topology transported by $f\mapsto f\mu_g$ from that supplier's compactly supported smooth test densities. Give $C^\infty(M;\mathbb R)$ its usual topology of uniform convergence of every coordinate derivative on each compact subset.

For a real $V\in C^\infty(M;\mathbb R)$ define the scalar Klein–Gordon-type operator $P=-\Box_g+V$, where $\Box_g f:=\mu_g^{-1}\partial_a(\mu_g g^{ab}\partial_b f)$ in a chart. Its principal symbol is $-g^{ab}\xi_a\xi_b$. No physical units are assigned; this is a mathematical differential operator. The Green-data interface below requires formal self-adjointness with respect to $\mu_g$, meaning $\int_M f(Pu)\,\mu_g=\int_M (Pf)u\,\mu_g$ for every $f\in\mathcal D_g(M)$ and $u\in C^\infty(M;\mathbb R)$; these integrals are finite because $P$ is local. The real solution space with spacelike-compact support is

$$\operatorname{Sol}_{\mathrm{sc}}(M):=\{u\in C^\infty(M;\mathbb R): Pu=0\text{ and }\operatorname{supp}u\subseteq J^+(K)\cup J^-(K)\text{ for some compact }K\subset M\}.$$

A **Green-data interface** for $(M,g,N,P)$ consists of continuous real-linear maps $E_+,E_-:\mathcal D_g(M)\to C^\infty(M;\mathbb R)$, called respectively retarded and advanced Green maps, such that for each $f\in\mathcal D_g(M)$,

$$PE_+f=E_+Pf=f,\qquad PE_-f=E_-Pf=f,$$

$$\operatorname{supp}(E_+f)\subseteq J^+(\operatorname{supp}f),\qquad \operatorname{supp}(E_-f)\subseteq J^-(\operatorname{supp}f).$$

The interface also includes uniqueness of the smooth Cauchy problem for $P$. For a smooth spacelike Cauchy hypersurface $\Sigma$ as defined in [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]], let $\nu$ denote its unique future-directed unit timelike normal, characterized by orthogonality to $T\Sigma$, $g(\nu,\nu)=-1$ and $g(\nu,N)<0$; the Cauchy data of a smooth $u$ are $u|_\Sigma$ and the normal derivative $\nu(u)|_\Sigma$. The uniqueness condition is that a smooth solution of $Pu=0$ with both data zero on $\Sigma$ is zero.

## Definition references

[[def-qftx-distributions-on-smooth-manifolds]]

[[def-gr-smooth-lorentzian-objects]]

[[def-gr-causal-curves-and-reachability]]

[[def-gr-causal-conditions-and-global-hyperbolicity]]

[[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]

[[def-gr-inverse-metric-and-musical-isomorphisms]]

[[def-countable-choice]]

## Remarks

This is an interface definition, with no existence axiom. Under Countable Choice and Dependent Choice, [[thm-qftx-green-hyperbolic-existence]] constructs and uniquely determines its continuous Green maps for every smooth globally hyperbolic background and arbitrary smooth real potential specified here. Its proof reconstructs Cauchy evolution from the local symmetric-hyperbolic suppliers.
