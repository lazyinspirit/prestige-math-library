---
id: thm-integral-complex-projective-bundle-theorem
kind: theorem
title: Integral complex projective bundle theorem
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-complex-projective-bundle-and-tautological-complex-line, lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator, thm-leray-hirsch-module-isomorphism, thm-numerable-fiber-bundles-are-hurewicz-fibrations, lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type, thm-homotopic-maps-induce-equal-maps-in-singular-cohomology, def-partition-of-unity-subordinate-to-a-cover, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the numerable-bundle and Thom suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, section 3.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Projective-bundle theorem and its relation, printed pp.77-82"
    - title: "Miller, MIT 18.906 Algebraic Topology II, Lecture 35"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Splitting by the projective bundle theorem, printed pp.130-132"
---

## Statement

Assume AC. Let $E\to B$ be a numerable complex rank-$n$ bundle with $n\geq1$
over a path-connected CW complex $B$, let $p:P(E)\to B$ be its projective
bundle and let $x=x_E\in H^2(P(E);\mathbb Z)$ be the class of the tautological
line. For $R=\mathbb Z$ and for every field $\mathbb F_p$ the cohomology
$H^*(P(E);R)$ is a free $H^*(B;R)$-module with basis
$1,x_R,x_R^2,\dots,x_R^{n-1}$, where $x_R$ is the coefficient reduction of $x$
and the module structure is $a\cdot b=p^*a\smile b$.

Integrally the expansion of $x^n$ in this basis is unique: there are unique
classes $a_i\in H^{2i}(B;\mathbb Z)$, $1\leq i\leq n$, with
$$x^n-a_1x^{n-1}+a_2x^{n-2}-\cdots+(-1)^na_n=0\quad\text{in }H^{2n}(P(E);\mathbb Z),$$
and this monic relation generates every polynomial relation: if
$P\in H^*(B;\mathbb Z)[t]$ satisfies $P(x)=0$, then $P$ is divisible by
$t^n-a_1t^{n-1}+\cdots+(-1)^na_n$ in $H^*(B;\mathbb Z)[t]$.

The same statements hold for a base that is a paracompact Hausdorff CGWH space
of CW homotopy type, in particular for the total spaces of projective bundles
occurring in the iterated construction below.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited by the numerable-bundle, Leray-Hirsch and Euler-class suppliers ([[def-axiom-of-choice]]).

[F1] The projective bundle $P(E)$ uses the same base trivializing cover as $E$, has fiber $\mathbb{CP}^{n-1}$ and tautological line $\gamma_E$, and $x=e((\gamma_E)_{\mathbb R})$ ([[def-complex-projective-bundle-and-tautological-complex-line]]). A bundle atlas is numerable when its cover has a subordinate partition of unity ([[def-partition-of-unity-subordinate-to-a-cover]]).

[F2] On every fiber the restrictions of $1,x,\dots,x^{n-1}$ are a $\mathbb Z$-basis of the fiber cohomology, and their reductions are an $\mathbb F_p$-basis ([[lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator]]).

[F3] Leray-Hirsch: for a Serre fibration over a path-connected CW complex whose finitely many specified classes restrict to an $R$-basis on every fiber, the map $\bigoplus_iH^{*-|e_i|}(B;R)\to H^*(E;R)$, $(a_i)\mapsto\sum_ip^*a_i\smile e_i$, is an $H^*(B;R)$-module isomorphism, natural in maps of such fibrations ([[thm-leray-hirsch-module-isomorphism]]).

[F4] Every numerable fiber bundle is a Hurewicz fibration, hence a Serre fibration, under AC ([[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]).

[F5] Totals of numerable bundles with compact Hausdorff fiber over a paracompact Hausdorff base of CW type are again paracompact Hausdorff of CW type ([[lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type]]).

[F6] Singular cohomology is homotopy invariant.

## Proof

**Proof technique:** direct.

**Given:** AC, a numerable complex rank-$n$ bundle $E\to B$ with $n\geq1$ over a path-connected CW complex $B$, and a coefficient ring $R$ equal to $\mathbb Z$ or a field $\mathbb F_p$.

1.1 Since $E$ is numerable, choose a subordinate partition of unity on a vector-bundle trivializing cover. By [F1] that same cover and the same partition trivialize and numerate $P(E)\to B$, whose fiber $\mathbb{CP}^{n-1}$ is compact Hausdorff. Thus [F4] makes $p$ a Hurewicz, hence Serre, fibration over the path-connected CW complex $B$. [F1, F4, given]

1.2 By [F2] the classes $1,x_R,\dots,x_R^{n-1}$ restrict on every fiber to an $R$-basis of $H^*(\mathbb{CP}^{n-1};R)$: for $R=\mathbb Z$ directly, and for $R=\mathbb F_p$ through the coefficient reductions. [F2, given]

2.1 Applying [F3] to the fibration of step 1.1 with the classes of step 1.2 gives the $H^*(B;R)$-module isomorphism $\bigoplus_{i=0}^{n-1}H^{*-2i}(B;R)\to H^*(P(E);R)$ sending $(a_i)$ to $\sum_ip^*a_i\smile x_R^i$. In particular $1,x_R,\dots,x_R^{n-1}$ are a basis of the free module $H^*(P(E);R)$ over $H^*(B;R)$. [F3, step 1.1, step 1.2]

3.1 The monic relation. Apply step 2.1 with $R=\mathbb Z$ to the element $x^n\in H^{2n}(P(E);\mathbb Z)$: there are unique classes $b_i\in H^{2n-2i}(B;\mathbb Z)$, $0\leq i\leq n-1$, with $x^n=\sum_{i=0}^{n-1}b_ix^i$; setting $a_j:=(-1)^{j+1}b_{n-j}$ for $1\leq j\leq n$ turns this into $x^n-a_1x^{n-1}+a_2x^{n-2}-\cdots+(-1)^na_n=0$, with $a_j\in H^{2j}(B;\mathbb Z)$ by the grading. Uniqueness of the $a_j$ is uniqueness of the coefficients $b_i$ in the basis of step 2.1. [step 2.1, algebra]

4.1 All relations. Let $f(t)=t^n-a_1t^{n-1}+\cdots+(-1)^na_n\in H^*(B;\mathbb Z)[t]$ and let $P\in H^*(B;\mathbb Z)[t]$ satisfy $P(x)=0$. Division with remainder by the monic polynomial $f$ gives $P=Qf+R$ with $\deg R<n$, and evaluating at $x$ gives $R(x)=0$, say $R(t)=\sum_{i<n}r_it^i$ with $r_i\in H^*(B;\mathbb Z)$; then $\sum_ip^*r_i\smile x^i=0$ in $H^*(P(E);\mathbb Z)$. By the basis property of step 2.1 all $r_i=0$, so $R=0$ and $P=Qf$ lies in the ideal generated by $f$. [step 2.1, step 3.1, algebra]

5.1 Bases of CW type. Let $B'$ be a paracompact Hausdorff CGWH space of CW homotopy type. By [F5] the total space $P(E)$ of a numerable complex bundle with compact fiber over such a base is again paracompact Hausdorff of CW type, and the same applies to each iterated projective bundle used below. Choose a CW complex $W$ and a homotopy equivalence $w:W\to B'$; pulling $E$ back along $w$ gives a numerable bundle over $W$ whose projective bundle is the pullback of $P(E)$, and [F6] identifies the cohomology of $P(E)$ with that of its pullback, compatibly with $w^*$ and with the class $x$. Steps 1.1-4.1 therefore transfer verbatim to $B'$, which is the asserted extension. [F5, F6, step 2.1, step 4.1]

6.1 Boundary cases. For $n\geq1$ the basis $1,x,\dots,x^{n-1}$ is nonempty and begins with the unit $1$; in the rank-one case $n=1$ the module is $H^*(B;R)$ itself and the relation reads $x-a_1=0$, so $a_1=x$ and no higher $a_i$ occurs. The zero bundle is excluded by $n\geq1$, so $P(E)$ is nonempty; a disconnected base is handled componentwise, and the coefficient rings $\mathbb Z$ and $\mathbb F_p$ are nonzero by hypothesis. The relation has leading term $x^n$ and constant term $(-1)^na_n$, with all intermediate coefficients verified in step 3.1; the ring $H^*(B;\mathbb Z)[t]$ admits monic division because $H^*(B;\mathbb Z)$ is a commutative ring, so no domain hypothesis is used. AC is used only through [A1] in the numerable-fibration supplier of step 1.1. [A1, F1, step 3.1, step 4.1] ∎

## Source notes

Hatcher, *Vector Bundles & K-Theory* section 3.1, printed pp. 77-82, proves this theorem with the Leray-Hirsch theorem: $H^*(P(E);\mathbb Z)$ is free on $1,x,\dots,x^{n-1}$ and the defining relation of the Chern classes is the unique monic relation. The statement of the module isomorphism and the generation of all relations by monic division follow the same source. The coefficientwise $\mathbb F_p$ version is Hatcher's coefficient-independence argument together with the universal coefficient theorem.
