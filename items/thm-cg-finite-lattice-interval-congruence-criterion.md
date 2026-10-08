---
id: thm-cg-finite-lattice-interval-congruence-criterion
kind: theorem
title: "The interval criterion for a lattice congruence: interval classes with monotone endpoints"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 2
deps: [def-cg-finite-lattice-congruence-and-interval-projections, lem-cg-lattice-quotient-descent-and-class-intervals, def-lattice-distributive-lattice-and-order-ideal, def-poset-interval-and-finiteness-conditions, def-equivalence-relation, lem-equivalence-classes-partition, def-partial-order]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Nathan Reading, Lattice congruences of the weak order: algebra, combinatorics, and geometry, Triangle Lectures in Combinatorics (2019), slides on the order-theoretic characterization of a lattice congruence"
      url: "https://nreadin.math.ncsu.edu/papers/TLC.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $L$ be a finite lattice and let $\theta$ be an equivalence relation on $L$ whose classes are intervals: for every $x\in L$ there are elements $d(x)\le u(x)$ of the class $[x]_\theta$ with $[x]_\theta=\{z\in L:d(x)\le z\le u(x)\}$ ([[def-cg-finite-lattice-congruence-and-interval-projections]], [[def-poset-interval-and-finiteness-conditions]]). Then $\theta$ is a lattice congruence if and only if the endpoint maps $d:L\to L$ and $u:L\to L$ are order-preserving. Explicitly:

(i) **(necessity)** if $\theta$ is a lattice congruence then $d$ and $u$ are order-preserving; this is [[lem-cg-lattice-quotient-descent-and-class-intervals]](iv), with $d=\pi_\downarrow$ and $u=\pi_\uparrow$;

(ii) **(sufficiency)** if $d$ and $u$ are order-preserving then $x\equiv_\theta y$ implies $x\vee z\equiv_\theta y\vee z$ and $x\wedge z\equiv_\theta y\wedge z$ for every $z\in L$; hence $\theta$ is a lattice congruence, and the quotient operations of [[def-cg-finite-lattice-congruence-and-interval-projections]] are well defined.

## Facts & Assumptions

**Given:** A finite lattice $L$ with meet $\wedge$ and join $\vee$, an equivalence relation $\theta$ on $L$ whose classes are intervals, and for every $w\in L$ elements $d(w)\le u(w)$ of $[w]_\theta$ with $[w]_\theta=\{z\in L:d(w)\le z\le u(w)\}$.

[F1] $\theta$ is a lattice congruence when $x\equiv_\theta x'$ and $y\equiv_\theta y'$ imply $x\wedge y\equiv_\theta x'\wedge y'$ and $x\vee y\equiv_\theta x'\vee y'$ ([[def-cg-finite-lattice-congruence-and-interval-projections]]).

[F2] Interval hypothesis: the class of $w$ equals $\{z:d(w)\le z\le u(w)\}$, and $d(w),u(w)$ lie in it; hence $d(w)\le z\le u(w)$ for every $z\equiv_\theta w$, and $d(w)\le w\le u(w)$ ([[def-poset-interval-and-finiteness-conditions]]).

[F3] Monotonicity hypothesis in (ii): if $x\le y$ then $d(x)\le d(y)$ and $u(x)\le u(y)$.

[F4] For a lattice congruence each class has a least member $\pi_\downarrow(w)$ and a greatest member $\pi_\uparrow(w)$, both in the class, and the class is the interval between them ([[lem-cg-lattice-quotient-descent-and-class-intervals]] (ii)).

[F5] For a lattice congruence the endpoint maps $\pi_\downarrow$ and $\pi_\uparrow$ are order-preserving ([[lem-cg-lattice-quotient-descent-and-class-intervals]] (iv)).

[F6] Meet and join are the greatest lower and the least upper bound of a pair: $x\wedge y\le x$, $x\wedge y\le y$, and $z\le x\wedge y$ whenever $z\le x$ and $z\le y$; dually $x\le x\vee y$, $y\le x\vee y$, and $x\vee y\le z$ whenever $x\le z$ and $y\le z$ ([[def-lattice-distributive-lattice-and-order-ideal]]).

[F7] $\theta$ is reflexive, symmetric and transitive; $[a]_\theta=\{b:a\equiv_\theta b\}$; and $a\equiv_\theta b$ if and only if $[a]_\theta=[b]_\theta$ ([[def-equivalence-relation]], [[lem-equivalence-classes-partition]]).

[F8] Antisymmetry: $m\le m'$ and $m'\le m$ imply $m=m'$ ([[def-partial-order]]).

## Proof

**Proof technique:** direct.

1.1 (i) Assume $\theta$ is a lattice congruence. For $w\in L$ the element $d(w)$ lies in the class of $w$ and satisfies $d(w)\le z$ for every $z$ in that class by [F2], so $d(w)$ is a least member of the class; by [F4] the class has a least member $\pi_\downarrow(w)$, and two least members of one set are equal by [F8], so $d(w)=\pi_\downarrow(w)$. Symmetrically $u(w)=\pi_\uparrow(w)$. Hence $d=\pi_\downarrow$ and $u=\pi_\uparrow$ are order-preserving by [F5]. [F2, F4, F5, F8]

1.2 If $[x]_\theta=[y]_\theta$ then $d(x)=d(y)$ and $u(x)=u(y)$: indeed $d(x)$ lies in the class of $x$, which is $[d(y),u(y)]$, so $d(y)\le d(x)$; conversely $d(y)$ lies in $[d(x),u(x)]$, so $d(x)\le d(y)$; hence $d(x)=d(y)$ by [F8], and the same argument with $u$ in place of $d$ gives $u(x)=u(y)$. In particular $x\equiv_\theta y$ implies $d(x)=d(y)$ and $u(x)=u(y)$ by [F7]. [F2, F7, F8]

2.1 (ii) Assume the monotonicity hypothesis [F3] and let $x\equiv_\theta y$. By step 1.2, $d(x)=d(y)$ and $u(x)=u(y)$; from [F2] and [F6], $d(x)\le x\wedge y$ (since $d(x)\le x$ and $d(x)=d(y)\le y$), and $x\wedge y\le x\le u(x)=u(y)$, and also $x\wedge y\le y\le u(y)$. So $x\wedge y$ lies in $[d(x),u(x)]$, the class of $x$, and in $[d(y),u(y)]$, the class of $y$; that is, $x\wedge y\equiv_\theta x$ and $x\wedge y\equiv_\theta y$, with $x\wedge y\le x$ and $x\wedge y\le y$. [F2, F6, F7, step 1.2]

2.2 (ii) Comparable join case. Assume $x\le y$ and $x\equiv_\theta y$, and let $z\in L$. By step 1.2 and [F3] applied to $x\le x\vee z$, we have $u(x)=u(y)\le u(x\vee z)$; since $y\le u(y)$ by [F2], and $z\le x\vee z\le u(x\vee z)$ by [F6], the upper bound property of the join gives $y\vee z\le u(x\vee z)$. Together with $d(x\vee z)\le x\vee z\le y\vee z$ (from [F2] and $x\le y$), the element $y\vee z$ lies in the class $[d(x\vee z),u(x\vee z)]$ of $x\vee z$, so $x\vee z\equiv_\theta y\vee z$. [F2, F3, F6, F7, step 1.2]

2.3 (ii) Comparable meet case. Assume $x\le y$ and $x\equiv_\theta y$, and let $z\in L$. By [F3] applied to $y\wedge z\le y$ and step 1.2, $d(y\wedge z)\le d(y)=d(x)\le x$; also $d(y\wedge z)\le y\wedge z\le z$ by [F6]. Hence $d(y\wedge z)\le x\wedge z$ by the lower bound property of the meet, while $x\wedge z\le y\wedge z$ (as $x\le y$) and $y\wedge z\le u(y\wedge z)$ by [F2]. So $x\wedge z$ lies in the class $[d(y\wedge z),u(y\wedge z)]$ of $y\wedge z$, that is, $x\wedge z\equiv_\theta y\wedge z$. [F2, F3, F6, F7, step 1.2]

3.1 (ii) General equivalent pair. Assume $x\equiv_\theta y$ and let $z\in L$. By step 2.1 the element $c:=x\wedge y$ satisfies $c\equiv_\theta x$, $c\equiv_\theta y$, $c\le x$ and $c\le y$. Step 2.2 applied to the comparable equivalent pairs $(c,x)$ and $(c,y)$ gives $c\vee z\equiv_\theta x\vee z$ and $c\vee z\equiv_\theta y\vee z$; transitivity [F7] gives $x\vee z\equiv_\theta y\vee z$. Step 2.3 applied to the same two pairs gives $c\wedge z\equiv_\theta x\wedge z$ and $c\wedge z\equiv_\theta y\wedge z$; transitivity gives $x\wedge z\equiv_\theta y\wedge z$. [F7, step 2.1, step 2.2, step 2.3]

4.1 (ii) Congruence property and well-definedness. Assume $x\equiv_\theta x'$ and $y\equiv_\theta y'$. Step 3.1 applied to the pair $(x,x')$ with $z:=y$ gives $x\vee y\equiv_\theta x'\vee y$, and applied to $(y,y')$ with $z:=x'$ gives $x'\vee y\equiv_\theta x'\vee y'$; transitivity gives $x\vee y\equiv_\theta x'\vee y'$. Likewise step 3.1 applied to $(x,x')$ with $z:=y$ gives $x\wedge y\equiv_\theta x'\wedge y$, and to $(y,y')$ with $z:=x'$ gives $x'\wedge y\equiv_\theta x'\wedge y'$; transitivity gives $x\wedge y\equiv_\theta x'\wedge y'$. By [F1] the relation $\theta$ is therefore a lattice congruence. Consequently the proposed quotient operations are well defined: if $[x]_\theta=[x']_\theta$ and $[y]_\theta=[y']_\theta$ then $x\equiv_\theta x'$ and $y\equiv_\theta y'$ by [F7], so $x\vee y\equiv_\theta x'\vee y'$ and $x\wedge y\equiv_\theta x'\wedge y'$, whence $[x\vee y]_\theta=[x'\vee y']_\theta$ and $[x\wedge y]_\theta=[x'\wedge y']_\theta$ by [F7]. [F1, F7, step 3.1]

5.1 Both directions of the criterion are proved: (i) is step 1.1, where necessity is the specialisation of the quotient lemma's monotone endpoints to $d,u$; (ii) is steps 2.1 through 4.1, in which an arbitrary equivalent pair is reduced to the comparable pairs $(c,x)$ and $(c,y)$ through the meet $c=x\wedge y$, which lies in the class of $x$ and of $y$. [step 1.1, step 2.1, step 2.2, step 2.3, step 3.1, step 4.1] ∎
