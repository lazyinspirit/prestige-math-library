---
id: ex-emx-dipole-dark-direction
kind: example
title: "A dipole node does not control the relative multipole error"
domain: physics
status: published
origin: pipeline
dependency_level: 4
deps:
  - def-countable-choice
  - def-em-electric-moments
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - lem-smooth-bump-between-concentric-euclidean-balls
  - lem-test-function-cutoffs-and-euclidean-localization
  - pthm-emx-controlled-dipole-power
  - pthm-emx-transverse-radiation-data
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - thm-clairaut-schwarz-mixed-partials
dependency_roles:
  def-countable-choice: mathematical-premise
  def-em-electric-moments: formulation-prerequisite
  lem-euclidean-balls-have-positive-finite-lebesgue-measure: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  pthm-emx-controlled-dipole-power: physical-result
  pthm-emx-transverse-radiation-data: physical-result
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A constructed smooth compact-source example in the retarded classical Maxwell model: at one direction the electric-dipole radiation vanishes while a higher source moment gives nonzero radiation. It is a conditional model example, not a measured antenna pattern or empirical claim."
sources:
  references:
    - title: "Niklas Beisert, Elektrodynamik, Vorlesungsskript, ETH Zürich 2024 FS, complete 176-page course script"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§11.3, printed pp. 11.10–11.13 (PDF pp. 130–133): the electric-dipole angular node, higher electric and magnetic multipoles, and the warning that the expansion is controlled by source-size and derivative assumptions."
    - title: "Richard Fitzpatrick, Classical Electromagnetism: An intermediate level course, University of Texas at Austin, complete author-hosted HTML lecture notes"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node94.html"
      locator: "Chapter 9, node 94, “The Hertzian dipole”: the short-source far-field and angular radiation pattern."
    - title: "Steven Errede, UIUC Physics 436 EM Fields & Sources II, Lecture Notes 14.5, complete 44-page PDF"
      url: "https://hep.physics.illinois.edu/home/serrede/P436/Lecture_Notes/P436_Lect_14p5.pdf"
      locator: "Printed pp. 6–8 (PDF pp. 5–7): E1 dipole angular power proportional to sin² of the angle from the dipole axis, the axis-angle definition, and the retarded-time dipole term; the constructed smooth source adds a nonzero higher retarded-current moment."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

There are jointly smooth charge and current densities of compact support in both space and time for which the electric dipole acceleration is parallel to $n=e_3$, so the electric-dipole radiation amplitude at $n$ vanishes, while the exact retarded radiation amplitude at $n$ is nonzero. Thus an absolute source-scale error bound for the multipole expansion gives no relative error bound at a dipole node.

## Example references

[[pthm-emx-controlled-dipole-power]]

[[def-em-electric-moments]]

## Facts & Assumptions

**Given:** Countable Choice and the SI retarded Maxwell model with no independent homogeneous field; $a,c>0$ with units $\mathrm m$ and $\mathrm m\,\mathrm s^{-1}$; $u\in\mathbb R$ a fixed retarded time in seconds; independent positive amplitudes $\alpha,\beta$ with units $\mathrm C\,\mathrm m^{-2}\,\mathrm s^{-2}$ and $\mathrm C\,\mathrm m^{-1}\,\mathrm s^{-3}$; a dimensionless nonnegative smooth spatial function $f$ supported in a smaller ball and equal to one on a still smaller ball; dimensionless compactly supported smooth time cutoffs; and the source formulas in the Verification below.

[A1] Assume $\mathrm{AC}_\omega$ for the framework's Lebesgue and surface measures. ([[def-countable-choice]])

[F1] For $0<r_0<R_0$ there is a smooth $\eta:\mathbb R^3\to[0,1]$ equal to one on $\overline B_{r_0}(0)$ and supported in $B_{R_0}(0)$. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

[F2] For a compact set contained in an open set there is a smooth compactly supported cutoff equal to one on a neighborhood of the compact set. ([[lem-test-function-cutoffs-and-euclidean-localization]])

[F3] At each time the dipole moment about the laboratory chart origin is $p(t)=\int_{B_a}y\rho(y,t)\,dy$, with units $\mathrm C\,\mathrm m$. Its time dependence here is that of the controlled-dipole theorem: for jointly smooth conserved sources supported in a fixed ball, $p''(u)=\int_{B_a}J_t(y,u)\,dy$. ([[def-em-electric-moments]], [[pthm-emx-controlled-dipole-power]])

[F4] Mixed partial derivatives of a smooth function commute, and the divergence theorem applies to a smooth compactly supported vector field on a ball containing its support. ([[thm-clairaut-schwarz-mixed-partials]], [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]])

[F5] A Euclidean ball has positive finite Lebesgue measure; a nonnegative function equal to one on such a ball has strictly positive integral. ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

[F6] For jointly smooth conserved SI sources $\rho,J$ on $\mathbb R^3\times\mathbb R$ supported in a fixed spatial ball, in the adopted retarded Maxwell model, $E_{\mathrm{rad}}(n,u)=\lim_{r\to\infty}rE(rn,u+r/c)=\frac{\mu_0}{4\pi}n\times(n\times V(n,u))$, where $V(n,u)=\int_{B_a}J_t(y,u+n\cdot y/c)\,dy$ and $|n|=1$. The limit is uniform on every nondegenerate compact retarded-time interval and in direction. Here $\mu_0>0$ has units $\mathrm N\,\mathrm A^{-2}$, $\varepsilon_0=(\mu_0c^2)^{-1}$, $E:\mathbb R^3\times\mathbb R\to\mathbb R^3$ is smooth with units $\mathrm V\,\mathrm m^{-1}$, and $E_{\mathrm{rad}}$ has units $\mathrm V$. ([[pthm-emx-transverse-radiation-data]])

## Verification

**Proof technique:** construct one smooth electric-current pulse and one smooth divergence-free circulating pulse, then evaluate their dipole and shifted-current moments in the axial direction.

1.1 Choose $0<r_0<R_0<a$ and apply [F1] to obtain a dimensionless $f\in C^\infty(\mathbb R^3)$ with $0\le f\le1$, $f=1$ on $\overline B_{r_0}(0)$ and $\operatorname{supp}f\subset B_{R_0}(0)$. By [F5], $F:=\int_{\mathbb R^3}f(y)\,dy\ge\lambda_3(B_{r_0})>0$. By [F2], choose dimensionless $\chi_G,\chi_H\in C_c^\infty(\mathbb R)$ with $\chi_G=1$ near $u$ and $\chi_H=1$ on a neighborhood of $[u-a/c,u+a/c]$. Define $G(t):=\alpha\chi_G(t)(t-u)^2$ and $H(t):=\beta\chi_H(t)(t-u)^3$, with units $\mathrm C\,\mathrm m^{-2}$ and $\mathrm C\,\mathrm m^{-1}$, respectively. Then $G''(u)=2\alpha$ and $H'''(s)=6\beta$ for every $s\in[u-a/c,u+a/c]$. [given, F1, F2, F5, construct, A1]

2.1 Let $e_1=(1,0,0)$ and $e_3=(0,0,1)$, and define $\displaystyle \rho(y,t):=-G(t)\partial_3f(y),\qquad J(y,t):=G'(t)f(y)e_3+H'(t)\bigl(-\partial_3f(y)e_1+\partial_1f(y)e_3\bigr).$ These maps $\rho:\mathbb R^3\times\mathbb R\to\mathbb R$ and $J:\mathbb R^3\times\mathbb R\to\mathbb R^3$ have units $\mathrm C\,\mathrm m^{-3}$ and $\mathrm A\,\mathrm m^{-2}$: both $G'f$ and $H'\partial_i f$ have the latter units. They are jointly smooth and supported in $\operatorname{supp}f\times(\operatorname{supp}G\cup\operatorname{supp}G'\cup\operatorname{supp}H')$, a compact subset of $B_a\times\mathbb R$. Their derivatives satisfy $\displaystyle \partial_t\rho+\operatorname{div}_yJ=-G'(t)\partial_3f+G'(t)\partial_3f+H'(t)(-\partial_1\partial_3f+\partial_3\partial_1f)=0$ by [F4], so the source is admissible for the controlled multipole theorem on any nondegenerate compact interval containing $u$. [step 1.1, F4, algebra, A1]

3.1 The current derivative is $J_t=G''f e_3+H''(-\partial_3f\,e_1+\partial_1f\,e_3)$. Each integral $\int_{\mathbb R^3}\partial_i f\,dy$ is zero by the divergence theorem applied to $f e_i$ on a ball containing $\operatorname{supp}f$, since its boundary flux vanishes. Thus [F3] gives $p''(u)=\int J_t(y,u)\,dy=G''(u)F e_3=2\alpha F e_3$, which is nonzero and parallel to $n=e_3$. Therefore $n\times(n\times p''(u))=0$. [step 1.1, step 2.1, F3, F4, algebra, A1]

3.2 For $n=e_3$, the $e_1$ component of the exact shifted current moment is $\displaystyle V_1(e_3,u)=-\int_{B_a}H''(u+y_3/c)\partial_3f(y)\,dy=\frac1c\int_{B_a}f(y)H'''(u+y_3/c)\,dy=\frac{6\beta F}{c}>0.$ For the middle equality, apply [F4] to $f(y)H''(u+y_3/c)e_3$ on a ball containing its support. Its boundary flux is zero and its divergence is $H''(u+y_3/c)\partial_3f+fH'''(u+y_3/c)/c$. Also $|y_3|\le a$ on the support of $f$, so $H'''=6\beta$ there by step 1.1. The term $G''f e_3$ contributes no $e_1$ component. Hence $V(e_3,u)$ has a nonzero component perpendicular to $e_3$. [step 1.1, step 2.1, F4, F5, F6, algebra, A1]

4.1 By [F6], $E_{\mathrm{rad}}(e_3,u)=\frac{\mu_0}{4\pi}e_3\times(e_3\times V(e_3,u))\ne0$, whereas the dipole coefficient $\frac{\mu_0}{4\pi}e_3\times(e_3\times p''(u))$ is zero by step 3.1. Therefore the absolute multipole remainder is nonzero at a direction where the dipole reference amplitude vanishes; no finite uniform relative-error bound with that dipole amplitude as denominator can hold. [step 3.1, step 3.2, F3, F6, algebra, A1] ∎
