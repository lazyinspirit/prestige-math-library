---
id: ex-tgrmath-null-landau-obstruction
kind: example
title: "Null tensor has no timelike Landau frame"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - lem-tgr-fluid-frame-projection
  - def-gr-smooth-lorentzian-objects
  - def-countable-choice
dependency_roles:
  lem-tgr-fluid-frame-projection: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "Eric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "PDF pp. 16–20, §§4.3 and 5.2–5.4: perfect-stress and observer-frame conventions; the null-dust calculation here is local."
    - title: "Paul Romatschke, Relativistic Viscous Fluid Dynamics and Non-Equilibrium Entropy, arXiv:0906.4787v2"
      url: "https://arxiv.org/pdf/0906.4787"
      locator: "PDF p. 7, §3: Landau and Eckart frame definitions; its printed Landau sign is not used."
---

## Example

Take $M=\mathbb R^4$ with Minkowski metric
$g=\operatorname{diag}(-1,1,1,1)$ and its standard future cone. Let
$\ell=(1,1,0,0)$, which is future-directed null, let $\rho>0$, and define the
symmetric tensor $T^{ab}=\rho\,\ell^a\ell^b$. A **Landau frame** for this
tensor means a future unit timelike vector $u$ for which the projected energy
flux $Q^a=-\Delta^a{}_cT^{cd}u_d$ vanishes. The current frame convention of
[[lem-tgr-fluid-frame-projection]] gives the unique stress decomposition; when
$Q=0$, contracting it with $u_b$ gives
$$T^a{}_bu^b=-\epsilon_u u^a,\qquad \epsilon_u=T^{ab}u_a u_b.$$
This explicit tensor has no Landau frame.

## Facts & Assumptions

**Given:** Minkowski space with signature $(-,+,+,+)$; the future-directed null
vector $\ell=(1,1,0,0)$; $\rho>0$; and an arbitrary candidate future unit
timelike vector $u$.

[A1] The geometric supplier carries only Countable Choice
$\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] [[lem-tgr-fluid-frame-projection]] (current batch-53 draft): its clause 2
states the unique decomposition
$\mathsf T^{ab}=\varepsilon_u u^au^b+u^aQ^b+Q^au^b+P^{ab}$, with
$Q^a=-\Delta^a{}_c\mathsf T^{cd}u_d$ and $u_aQ^a=u_aP^{ab}=0$. Contracting
the decomposition on its first index with $u_a$ gives
$u_a\mathsf T^{ab}=-\varepsilon_u u^b-Q^b$; symmetry of $\mathsf T$ then
gives $\mathsf T^a{}_bu^b=-\varepsilon_u u^a$ when
$Q=0$, where $\varepsilon_u=\mathsf T^{ab}u_a u_b$. This example proves its null-tensor case directly;
the supplier's separate clause 5 is not used. Its current input hash is stale,
so this use remains conditional.

[F2] [[def-gr-smooth-lorentzian-objects]]: timelike vectors have negative norm,
null vectors are nonzero and have zero norm, and future direction is fixed by
the chosen time orientation.

## Verification

1.1 Write $u=(u^0,u^1,u^2,u^3)$. Future timelikeness gives $u^0>0$ and
$-(u^0)^2+(u^1)^2+(u^2)^2+(u^3)^2=-1$, so
$|\mathbf u|^2=(u^0)^2-1<(u^0)^2$. Consequently
$\ell_bu^b=-u^0+u^1<0$, since $u^1\le|\mathbf u|<u^0$. Hence
$\epsilon_u=\rho(\ell_bu^b)^2>0$. [A1, F2, given, algebra]

2.1 Contract the stress decomposition in [F1] on its first index with $u_a$.
Using $u_au^a=-1$, $u_aQ^a=0$, and $u_aP^{ab}=0$ gives
$u_aT^{ab}=-\epsilon_u u^b-Q^b$. Since $T$ is symmetric, this means
$T^a{}_bu^b=-\epsilon_u u^a$ if $Q=0$. By the definition of $T^a{}_b$ and
the metric, the left side is $\rho\ell^a(\ell_bu^b)$, a nonzero null vector
by step 1.1.
The right side is nonzero timelike because $\epsilon_u>0$ and $u$ is timelike.
Equality is impossible because equal vectors have equal quadratic norm, while
these norms are respectively zero and negative. Hence $Q\ne0$ for every
candidate future unit timelike $u$, and the tensor has no Landau frame.
[F1, F2, step 1.1, algebra] ∎
