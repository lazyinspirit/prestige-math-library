---
id: def-fd-periodic-leray-hopf
kind: definition
title: Unforced periodic Leray–Hopf solution
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps: [ def-fd-periodic-solenoidal-spaces, def-fd-weak-time-continuity, def-distributional-derivative ]
dependency_roles:
  def-fd-periodic-solenoidal-spaces: mathematical-premise
  def-fd-weak-time-continuity: mathematical-premise
  def-distributional-derivative: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Leonid Ryzhik, Math 256B Lecture Notes, version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§5.5, printed pp. 48–49."
    - title: "L. C. Berselli and S. Spirito, On the Existence of Leray–Hopf Weak
        Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "Definition 1, §3, printed p. 6."
---

## Definition

Let $d\ge2$, $L>0$, $\nu>0$, $u_0\in H$, and use the spaces and weak-time
conventions of Periodic solenoidal Fourier spaces and
Weak time continuity and energy spaces. A **global unforced periodic Leray–Hopf
solution** with data $(\nu,u_0)$ is a map
$u:[0,\infty)\to H$ such that its restriction to each finite interval is in
$C_w([0,T];H)$ and its Bochner equivalence classes satisfy
$u\in L^\infty(0,\infty;H)\cap L^2_{\rm loc}(0,\infty;V)$. All clauses
involving $u(t)$ at a specified time, including the initial trace and energy
inequalities, refer to this weakly continuous map. By the uniqueness result in
Weak time continuity and energy spaces, it is the unique weakly continuous
representative of those Bochner classes. It must satisfy $u(0)=u_0$ in $H$,
$\|u(t)-u_0\|_H\to0$ as $t\downarrow0$, and for
every smooth real periodic divergence-free test field
$\phi:[0,\infty)\times\mathbb T_L^d\to\mathbb R^d$ compactly supported in
time,
$$\int_0^\infty\!\big[(u,\partial_t\phi)+(u\otimes u,\nabla\phi)-\nu(\nabla u,\nabla\phi)\big]dt+(u_0,\phi(0))=0.$$
It must also satisfy, for every $t\ge0$,
$$\|u(t)\|_2^2+2\nu\int_0^t\|\nabla u(s)\|_2^2ds\le\|u_0\|_2^2,$$
and there must be a full-measure set $S\subset(0,\infty)$ such that for
every $s\in S\cup\{0\}$ and every $t\ge s$,
$$\|u(t)\|_2^2+2\nu\int_s^t\|\nabla u(\tau)\|_2^2d\tau\le\|u(s)\|_2^2.$$
For a matrix field $A$, $(\operatorname{div}A)_i=\sum_j\partial_jA_{ij}$. The tensor pairing means $(u\otimes u):\nabla\phi=\sum_{i,j}u_i u_j\partial_j\phi_i$;
the gradient pairing means $\nabla u:\nabla\phi=\sum_{i,j}\partial_j u_i\partial_j\phi_i$.
All derivatives in the weak identity are distributional; the definition
asserts neither uniqueness nor smoothness.

## Definition references

[[def-fd-periodic-solenoidal-spaces|Periodic solenoidal Fourier spaces]]

[Leonid Ryzhik, *Math 256B Lecture Notes*, §5.5, pp. 48–49](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf).

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions*, Definition 1, §3, p. 6](https://www.mdpi.com/2311-5521/6/1/42/pdf).

## Facts & Assumptions

**Given:** The parameters and spaces in the Definition, with the distributional derivative convention of [[def-distributional-derivative]].

[F1] [[def-fd-weak-time-continuity]]: $C_w$ consists of actual maps with continuous fixed $H$ pairings; Bochner memberships are almost-everywhere equivalence classes, and a weakly continuous representative is unique when it exists.

[F2] [[def-distributional-derivative]]: distributional derivatives are defined by transferring derivatives to compactly supported smooth tests with the sign $\langle\partial_tu,\phi\rangle=-\langle u,\partial_t\phi\rangle$.

[F3] [[def-fd-periodic-solenoidal-spaces]]: $H$ is the real solenoidal subspace of normalized $L^2(\mathbb T_L^d)$, $V=H\cap H^1$, and its weak gradients have coefficients $i\kappa_{k,j}\widehat u(k)$. Spatial pairings and norms in the Definition use $d\mu=L^{-d}dx$.

## Proof

1.1 The $L^\infty_tH$ and $L^2_{\rm loc}V$ clauses and the weak identity depend only on the Bochner equivalence classes; the tensor term is integrable because $u\in L^\infty_tL^2_x$, and the gradient term is integrable by $u\in L^2_{\rm loc}V$. The requirement $u\in C_w$ selects an actual map, unique within its almost-everywhere class by [F1]. The initial value, strong initial trace, and energy inequalities are predicates on that representative, not on an arbitrary representative of the Bochner class. [given, F1, F3]

2.1 The sign and initial term in that identity agree with the distributional derivative convention in [F2]; the all-time energy clause and the almost-everywhere restart clause are additional explicit requirements, and neither implies a smoothness or uniqueness clause. Thus the definition is unambiguous under the stated conventions. [given, F1, F2, step 1.1] ∎

