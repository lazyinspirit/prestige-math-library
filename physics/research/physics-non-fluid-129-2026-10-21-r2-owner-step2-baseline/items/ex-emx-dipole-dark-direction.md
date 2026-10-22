---
id: ex-emx-dipole-dark-direction
kind: example
title: "A dipole node does not control the relative multipole error"
domain: physics
status: draft
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
---

## Example

There are jointly smooth charge and current densities of compact support in both space and time for which the electric dipole acceleration is parallel to $n=e_3$, so the electric-dipole radiation amplitude at $n$ vanishes, while the exact retarded radiation amplitude at $n$ is nonzero. Thus an absolute source-scale error bound for the multipole expansion gives no relative error bound at a dipole node.

## Example references

[[pthm-emx-controlled-dipole-power]]

[[def-em-electric-moments]]

## Facts & Assumptions

**Given:** Countable Choice; $a,c>0$; a nonnegative smooth function $f$ supported in a smaller ball and equal to one on a still smaller ball; compactly supported smooth time cutoffs; and the source formulas in the Verification below.

[A1] Assume $\mathrm{AC}_\omega$ for the framework's Lebesgue and surface measures. ([[def-countable-choice]])

[F1] For $0<r_0<R_0$ there is a smooth $\eta:\mathbb R^3\to[0,1]$ equal to one on $\overline B_{r_0}(0)$ and supported in $B_{R_0}(0)$. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

[F2] For a compact set contained in an open set there is a smooth compactly supported cutoff equal to one on a neighborhood of the compact set. ([[lem-test-function-cutoffs-and-euclidean-localization]])

[F3] The time-dependent dipole moment is the fixed-time charge moment about the laboratory chart origin; for the source class of the preceding theorem, $p''(u)=\int_{B_a}J_t(y,u)\,dy$. ([[def-em-electric-moments]], [[pthm-emx-controlled-dipole-power]])

[F4] Mixed partial derivatives of a smooth function commute, and the divergence theorem applies to a smooth compactly supported vector field on a ball containing its support. ([[thm-clairaut-schwarz-mixed-partials]], [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]])

[F5] A Euclidean ball has positive finite Lebesgue measure; a nonnegative function equal to one on such a ball has strictly positive integral. ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

[F6] The exact radiation vector for this source is $E_{\mathrm{rad}}(n,u)=\frac{\mu_0}{4\pi}n\times(n\times V(n,u))$. ([[pthm-emx-transverse-radiation-data]])

## Verification

**Proof technique:** construct one smooth electric-current pulse and one smooth divergence-free circulating pulse, then evaluate their dipole and shifted-current moments in the axial direction.

1.1 Choose $0<r_0<R_0<a$ and apply [F1] to obtain $f\in C^\infty(\mathbb R^3)$ with $0\le f\le1$, $f=1$ on $\overline B_{r_0}(0)$ and $\operatorname{supp}f\subset B_{R_0}(0)$. By [F5], $F:=\int_{\mathbb R^3}f(y)\,dy\ge\lambda_3(B_{r_0})>0$. By [F2], choose $\chi_G,\chi_H\in C_c^\infty(\mathbb R)$ with $\chi_G=1$ near $u$ and $\chi_H=1$ on a neighborhood of $[u-a/c,u+a/c]$. Define $G(t):=\chi_G(t)(t-u)^2$ and $H(t):=\chi_H(t)(t-u)^3$. Then $G''(u)=2$ and $H'''(s)=6$ for every $s\in[u-a/c,u+a/c]$. [given, F1, F2, F5, construct, A1]

2.1 Let $e_1=(1,0,0)$ and $e_3=(0,0,1)$, and define $\displaystyle \rho(y,t):=-G(t)\partial_3f(y),\qquad J(y,t):=G'(t)f(y)e_3+H'(t)\bigl(-\partial_3f(y)e_1+\partial_1f(y)e_3\bigr).$ These maps are jointly smooth and supported in $\operatorname{supp}f\times(\operatorname{supp}G\cup\operatorname{supp}G'\cup\operatorname{supp}H')$, a compact subset of $B_a\times\mathbb R$. Their derivatives satisfy $\displaystyle \partial_t\rho+\operatorname{div}_yJ=-G'(t)\partial_3f+G'(t)\partial_3f+H'(t)(-\partial_1\partial_3f+\partial_3\partial_1f)=0$ by [F4], so the source is admissible for the controlled multipole theorem. [step 1.1, F4, algebra, A1]

3.1 The current derivative is $J_t=G''f e_3+H''(-\partial_3f\,e_1+\partial_1f\,e_3)$. Each integral $\int_{\mathbb R^3}\partial_i f\,dy$ is zero by the divergence theorem applied to $f e_i$ on a ball containing $\operatorname{supp}f$, since its boundary flux vanishes. Thus [F3] gives $p''(u)=\int J_t(y,u)\,dy=G''(u)F e_3=2F e_3$, which is nonzero and parallel to $n=e_3$. Therefore $n\times(n\times p''(u))=0$. [step 1.1, step 2.1, F3, F4, algebra, A1]

3.2 For $n=e_3$, the $e_1$ component of the exact shifted current moment is $\displaystyle V_1(e_3,u)=-\int_{B_a}H''(u+y_3/c)\partial_3f(y)\,dy=\frac1c\int_{B_a}f(y)H'''(u+y_3/c)\,dy=\frac{6F}{c}>0.$ The middle equality is integration by parts in $y_3$; the boundary term vanishes because $f$ has compact support, and $|y_3|\le a$ on its support, so $H'''=6$ there by step 1.1. The term $G''f e_3$ contributes no $e_1$ component. Hence $V(e_3,u)$ has a nonzero component perpendicular to $e_3$. [step 1.1, step 2.1, F1, F2, F5, algebra, A1]

4.1 By [F6], $E_{\mathrm{rad}}(e_3,u)=\frac{\mu_0}{4\pi}e_3\times(e_3\times V(e_3,u))\ne0$, whereas the dipole coefficient $\frac{\mu_0}{4\pi}e_3\times(e_3\times p''(u))$ is zero by step 3.1. Therefore the absolute multipole remainder is nonzero at a direction where the dipole reference amplitude vanishes; no finite uniform relative-error bound with that dipole amplitude as denominator can hold. [step 3.1, step 3.2, F3, F6, algebra, A1] ∎
