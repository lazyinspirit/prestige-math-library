---
id: cex-cg-inversion-sets-do-not-compute-meets-and-joins
kind: counterexample
title: "Meets and joins are not intersection and union of inversion sets: the $A_2$ counterexample"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 20
deps:
  - def-cg-left-right-weak-order-and-descents
  - lem-cg-weak-order-is-a-graded-partial-order
  - thm-cg-weak-order-meet-semilattice-and-finite-lattice
  - def-cg-geometric-inversion-set
  - ex-cg-s3-weak-order-meets-and-joins
justified_by: []
proof_strategy: "explicit A2 computation refuting both equalities and stating the containment correction"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 3.1, Proposition 3.1.3 and Corollary 3.1.4, printed pp. 68-69 (the reflection-set containment criterion and order-/rank-preserving embedding); Section 3.2, Theorem 3.2.1 with proof, printed pp. 70-71 (complete meet-semilattice). The specific $A_2$ failures and the corrected inversion-set containments are computed locally from the companion example. BB does not claim that meets are intersections of inversion sets."
    - title: "Nathan Reading and David E. Speyer, Cambrian fans (J. Eur. Math. Soc. 11 (2009) 407-447; arXiv:math/0606201v2)"
      url: "https://arxiv.org/pdf/math/0606201v2"
      locator: "Section 2, arXiv pp. 5-6 (for finite $W$, the weak order is induced by containment of inversion sets of reflections)"
---

## Statement refuted

**Statement refuted.** For every finite Coxeter system $(W,S)$, every
$u,v\in W$ for which $u\wedge v$ and $u\vee v$ exist satisfy

$$N((u\wedge v)^{-1})=N(u^{-1})\cap N(v^{-1}),\qquad N((u\vee v)^{-1})=N(u^{-1})\cup N(v^{-1})$$

(with $N$ the inversion sets of [[def-cg-geometric-inversion-set]]), i.e.
meets and joins are computed by intersection and union of inversion sets.

**Counterexample (type $A_2$, $W=S_3$).** Let $S=\{s,t\}$, $m(s,t)=3$, and
let $\alpha_s,\alpha_t,\alpha_s+\alpha_t$ be the positive roots of $A_2$, so
that
$N(w^{-1})\in\{\varnothing,\{\alpha_s\},\{\alpha_t\},\{\alpha_s,\alpha_s+\alpha_t\},\{\alpha_t,\alpha_s+\alpha_t\},\Phi_+\}$
for $w\in W=\{1,s,t,st,ts,w_0\}$ as in
[[ex-cg-s3-weak-order-meets-and-joins]]. Then:

(i) $s\vee t=w_0$ and
$N(w_0^{-1})=\Phi_+=\{\alpha_s,\alpha_t,\alpha_s+\alpha_t\}$, while
$N(s^{-1})\cup N(t^{-1})=\{\alpha_s\}\cup\{\alpha_t\}=\{\alpha_s,\alpha_t\}\subsetneq\Phi_+$;
the union is not even the inversion set of an element of $W$, and in
particular the join is strictly larger than the union.

(ii) $st\wedge ts=1$ and $N(1)=\varnothing$, while
$N((st)^{-1})\cap N((ts)^{-1})=\{\alpha_s,\alpha_s+\alpha_t\}\cap\{\alpha_t,\alpha_s+\alpha_t\}=\{\alpha_s+\alpha_t\}\ne\varnothing$;
the intersection is not the inversion set of an element of $W$, and in
particular the meet is strictly smaller than the intersection.

**Correct statement.** By [[lem-cg-weak-order-is-a-graded-partial-order]]
(4), $w\le_R u,v$ if and only if
$N(w^{-1})\subseteq N(u^{-1})\cap N(v^{-1})$; hence $u\wedge v$ is the
greatest element whose inversion set is *contained* in the intersection, and
dually $u\vee v$ is the least element whose inversion set *contains* the
union. Containment, and not equality, is the correct order-theoretic
relation.

## Facts & Assumptions

**Given:** The Coxeter matrix of type $A_2$: $S=\{s,t\}$, $m(s,t)=3$; the
presented group $W$ with length $\ell$, the weak orders $\le_R,\le_L$ as in
[[def-cg-left-right-weak-order-and-descents]]; the reflection representation
$\rho$ on $V=\mathbb R^S$ with simple roots $\alpha_s=e_s$,
$\alpha_t=e_t$ and root system $\Phi=\Phi_+\sqcup\Phi_-$; and
$w_0=sts=tst$.

[F1] [[def-cg-geometric-inversion-set]] (1):
$N(w)=\{\alpha\in\Phi_+:\rho(w)\alpha\in\Phi_-\}$.

[F2] [[ex-cg-s3-weak-order-meets-and-joins]]: $W=\{1,s,t,st,ts,w_0\}$ with
$\ell(1)=0$, $\ell(s)=\ell(t)=1$, $\ell(st)=\ell(ts)=2$, $\ell(w_0)=3$;
and $w_0=sts=tst$.

[F3] [[ex-cg-s3-weak-order-meets-and-joins]]: the six inversion sets
$N(w^{-1})$ for $w=1,s,t,st,ts,w_0$ are $\varnothing$,
$\{\alpha_s\}$, $\{\alpha_t\}$, $\{\alpha_s,\alpha_s+\alpha_t\}$,
$\{\alpha_t,\alpha_s+\alpha_t\}$ and
$\Phi_+=\{\alpha_s,\alpha_t,\alpha_s+\alpha_t\}$.

[F4] [[ex-cg-s3-weak-order-meets-and-joins]]: $s\vee t=w_0$ and
$st\wedge ts=1$, with their universal bound properties recorded there.

[F5] [[lem-cg-weak-order-is-a-graded-partial-order]] (4): for all $u,v$,
$u\le_R v\iff N(u^{-1})\subseteq N(v^{-1})$.

[F6] [[thm-cg-weak-order-meet-semilattice-and-finite-lattice]] (2): if $W$ is
finite, every subset has a meet and a join.

[F7] [[def-cg-left-right-weak-order-and-descents]] (3): a right meet is a
greatest lower bound in $\le_R$.

[F8] [[def-cg-left-right-weak-order-and-descents]] (3): a right join is a
least upper bound in $\le_R$.

## Counterexample

1.1 The $A_2$ data: $W=\{1,s,t,st,ts,w_0\}$ with the lengths of Fact [F2], and the six inversion sets $N(w^{-1})$ of Fact [F3]; in particular, no other subset of $\Phi_+$ displayed below occurs as an inversion set $N(w^{-1})$. [F1, F2, F3, given, algebra]

2.1 Failure of the join equality: $s\vee t=w_0$ by [F4] and $N(w_0^{-1})=\Phi_+=\{\alpha_s,\alpha_t,\alpha_s+\alpha_t\}$ by step 1.1, while $N(s^{-1})\cup N(t^{-1})=\{\alpha_s\}\cup\{\alpha_t\}=\{\alpha_s,\alpha_t\}$. The union $\{\alpha_s,\alpha_t\}$ is not among the six sets of step 1.1, so it is not the inversion set $N(w^{-1})$ of any element $w\in W$; in particular $N((s\vee t)^{-1})=\Phi_+\ne\{\alpha_s,\alpha_t\}=N(s^{-1})\cup N(t^{-1})$, refuting the join half of the displayed statement. [F1, F4, F8, step 1.1, given, algebra]

2.2 Failure of the meet equality: $st\wedge ts=1$ by [F4] and $N(1)=\varnothing$ by step 1.1, while $N((st)^{-1})\cap N((ts)^{-1})=\{\alpha_s,\alpha_s+\alpha_t\}\cap\{\alpha_t,\alpha_s+\alpha_t\}=\{\alpha_s+\alpha_t\}$ is nonempty; this intersection is not among the six sets of step 1.1 either, so it is not the inversion set $N(w^{-1})$ of any element, and $N((st\wedge ts)^{-1})=\varnothing\ne\{\alpha_s+\alpha_t\}=N((st)^{-1})\cap N((ts)^{-1})$, refuting the meet half of the displayed statement. [F1, F4, F7, step 1.1, given, algebra]

3.1 The corrected containment statement: by the criterion [F5], for every $w\in W$, $w\le_R u$ and $w\le_R v$ if and only if $N(w^{-1})\subseteq N(u^{-1})$ and $N(w^{-1})\subseteq N(v^{-1})$, equivalently $N(w^{-1})\subseteq N(u^{-1})\cap N(v^{-1})$. Since $W$ is finite, [F6] guarantees that $u\wedge v$ and $u\vee v$ exist; by [F7], the meet is the greatest such lower bound. Dually, [F5] gives $w\ge_R u,v$ if and only if $N(w^{-1})\supseteq N(u^{-1})\cup N(v^{-1})$, and [F8] makes the join the least such upper bound. Thus the meet inversion set is the greatest inversion set contained in the intersection, and the join inversion set is the least inversion set containing the union; steps 2.1 and 2.2 show both containments can be strict. No Choice is used. [F5, F6, F7, F8, step 2.1, step 2.2, given, algebra] ∎
