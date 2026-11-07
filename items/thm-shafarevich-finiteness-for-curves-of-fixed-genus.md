---
id: thm-shafarevich-finiteness-for-curves-of-fixed-genus
kind: theorem
title: Shafarevich finiteness for curves of fixed genus
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 25
deps:
  - def-number-field
  - def-algebraic-curve-over-field
  - def-genus-euler-characteristic-curve
  - def-finite-cardinality
  - thm-subset-of-a-finite-set
  - def-natural-numbers
  - def-nat-addition
  - thm-induction-principle
  - thm-well-ordering-principle
  - def-injection-surjection-bijection
  - def-image-and-preimage-under-a-relation
  - def-good-reduction-of-smooth-proper-curve-at-a-finite-place
  - thm-shafarevich-finiteness-for-abelian-varieties
  - lem-finite-principal-polarization-classes-on-fixed-abelian-variety
  - thm-jacobian-good-reduction-from-smooth-proper-curve-model
  - thm-jacobian-has-canonical-principal-polarization
  - thm-rational-torelli-for-genus-at-least-two-curves
  - lem-finite-choice
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
justified_by: []
proof_strategy: "reduce to finitely many principally polarized Jacobians and then use rational Torelli"
axiom_use: "The present supplier route is conditional on AC, DC, and Countable Choice through abelian-variety finiteness, and on AC/DC through the canonical Jacobian polarization; no necessity of these axioms for the curve theorem is asserted."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, version 2.0, Chapter IV §4, Theorem 4.3 and proof, printed pp. 144–145"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
    - title: "G. Faltings, G. Wüstholz et al., Rational Points, 2nd ed. (1986), Chapter V §§4.1–4.2, Theorems 4.2 and 4.4, printed pp. 185–187"
      url: "https://yhzhumath.github.io/Mordell2024/RP.pdf"
---

## Statement

Let $K$ be a number field, let $g\ge2$ be an integer, and let $S$ be a finite
set of nonzero prime ideals of the ring of integers of $K$. There are only
finitely many $K$-isomorphism classes of smooth, proper, geometrically
connected curves of genus $g$ over $K$ that have good reduction at every
finite place outside $S$. Here a finite place of $K$ means a nonzero prime
ideal of its ring of integers, and $K$-isomorphic means isomorphic as
$K$-schemes.

## Statement references

[[def-number-field]]

[[def-algebraic-curve-over-field]]

[[def-genus-euler-characteristic-curve]]

[[def-finite-cardinality]]

[[def-natural-numbers]]

[[def-nat-addition]]

[[thm-induction-principle]]

[[thm-well-ordering-principle]]

[[def-injection-surjection-bijection]]

[[def-good-reduction-of-smooth-proper-curve-at-a-finite-place]]

[Milne, Theorem 4.3 and proof](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Faltings–Wüstholz et al., Theorem 4.4 and proof](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** AC, DC, Countable Choice, a number field $K$, an integer $g\ge2$,
a finite set $S$ of finite places of $K$, and the conditional supplier
interfaces below. The proof body records the reduction route; it is not
proof-closed until the explicitly listed supplier proofs are supplied.

[A1] [[def-axiom-of-choice]]: AC says every family of nonempty sets has a choice function.

[A2] [[def-dependent-choice]]: DC says an entire relation on a nonempty set admits an infinite sequence from any prescribed starting point.

[A3] [[def-countable-choice]]: Countable Choice gives a choice function for every sequence of nonempty sets indexed by the natural numbers.

[F1] [[def-number-field]]: a number field is a finite extension $K/\mathbb Q$.

[F2] [[def-algebraic-curve-over-field]]: a curve over a field is geometrically integral, separated, finite type, and one-dimensional; smoothness and properness are separate morphism conditions.

[F3] [[def-genus-euler-characteristic-curve]]: for a smooth proper geometrically integral curve, its genus is $\dim_K H^1(C,\mathcal O_C)$.

[F4] [[def-good-reduction-of-smooth-proper-curve-at-a-finite-place]]: good reduction at a finite place means existence of a proper smooth curve model over the localized ring of integers, with geometrically connected curve fibres and generic fibre the given curve.

[F5] [[thm-shafarevich-finiteness-for-abelian-varieties]]: under AC, DC, and Countable Choice, for fixed number field $K$, dimension $g\ge1$, and finite $S$, there are finitely many $K$-isomorphism classes of dimension-$g$ abelian varieties with good reduction outside $S$.

[F6] [[thm-jacobian-good-reduction-from-smooth-proper-curve-model]]: under AC and DC, a smooth proper model of a curve over the local ring at a finite place induces an abelian-scheme model of its Jacobian. Only its explicitly conditional argument is used here.

[F7] [[thm-jacobian-has-canonical-principal-polarization]]: under AC and DC, a smooth proper geometrically connected genus-$g$ curve has a Jacobian with a canonical principal polarization independent of a geometric base point.

[F8] [[lem-finite-principal-polarization-classes-on-fixed-abelian-variety]]: under the current polarization convention and AC, a fixed abelian variety has only finitely many principal-polarization classes up to pullback by its automorphisms.

[F9] [[thm-rational-torelli-for-genus-at-least-two-curves]]: for genus at least two over a number field, a principally polarized Jacobian determines the curve up to isomorphism over that number field.

[F10] [[lem-finite-choice]]: a finite family of nonempty sets admits a choice function by finite induction in ZF.

[F11] [[def-finite-cardinality]]: a set is finite when it is bijective with some natural number.

[F12] [[thm-subset-of-a-finite-set]]: every subset of a finite set is finite, and a bijection transports finiteness.

[F13] [[def-nat-addition]]: addition maps $\mathbb N\times\mathbb N$ to $\mathbb N$ and is defined by $m+0=m$, $m+\sigma(n)=\sigma(m+n)$.

[F14] [[thm-induction-principle]]: if a property holds at zero and is preserved by successor, it holds for every natural number.

[F15] [[thm-well-ordering-principle]]: every nonempty subset of $\mathbb N$ has a least element.

[F16] [[def-injection-surjection-bijection]]: a function is bijective if and only if it is both injective and surjective.

[F17] [[def-image-and-preimage-under-a-relation]]: the image $f[P]$ consists exactly of the values $f(i)$ for $i\in P$, so $f:P\to f[P]$ is surjective.

[L1] [[thm-shafarevich-finiteness-for-abelian-varieties]]: the current abelian-variety carrier itself records a required fixed-isogeny-class finiteness input whose proof is not supplied and is not proof-closed.

[L2] [[lem-finite-principal-polarization-classes-on-fixed-abelian-variety]]: the required finite-polarization statement has no complete local proof; its source reduces it to arithmetic-group orbit finiteness.

[L3] [[thm-jacobian-good-reduction-from-smooth-proper-curve-model]]: the existing relative Picard theorem now supplies the DVR construction, and the good-reduction implication has a local AC/DC-conditional proof. Its original unqualified choice scope remains held; this reduction already assumes AC and DC.

[L4] [[thm-rational-torelli-for-genus-at-least-two-curves]]: geometric strong Torelli and rational descent now have complete AC/DC-conditional local arguments; the original unqualified choice scope remains held. The present proof assumes AC/DC and may use only that conditional argument, without inferring unqualified acceptance.

## Proof

**Given:** The data and conditional supplier interfaces stated above.

1.1 Let $C/K$ be any curve in the target family. At every finite place outside $S$, its smooth proper model and [F6] give good reduction of $J_C$. By [F7], $(J_C,\lambda_C)$ is a principally polarized abelian variety of dimension $g$. [given, A1, A2, F4, F6, F7]

2.1 By [F5], the underlying abelian varieties $J_C$ range over a finite set of $K$-isomorphism classes. By [F11], list these classes as $A_0,\ldots,A_{n-1}$. Each class is a nonempty set of representatives, so [F10] gives one representative $B_i$ for each $A_i$ without an unrestricted choice principle. For each $B_i$, [F8] gives a finite set $P_i$ of principal-polarization classes up to automorphism; these are exactly the principally polarized abelian-variety classes whose underlying class is $A_i$. Each finite $P_i$ has at least one listing by some natural number, so the finite-choice lemma [F10] chooses such listings for the finitely many $i$; write their lengths as $m_i$. If $n=0$, the target set is empty. Otherwise, repeated concatenation gives a list of length $N=\sum_{i<n}m_i$ by the recursive definition of addition and finite induction [F13, F14]. Forgetting the tags maps this list onto the set $P$ of all possible principally polarized Jacobian classes. For each class in $P$, the set of its list positions is nonempty; [F15] gives its least position. Distinct classes have distinct least positions, so this defines an injection of $P$ into $N$. Its image is a subset of the finite set $N$, hence finite by [F12]. By [F17], the same least-position map is surjective onto its image; with its injectivity and [F16], it is a bijection onto that image. Hence $P$ is finite. Pullback along a $K$-isomorphism $J_C\cong B_i$ puts its canonical polarization in $P_i$. [given, A1, A2, A3, F5, F8, F10, F11, F12, F13, F14, F15, F16, F17, step 1.1]

3.1 By [F9], the map from the target curve classes to the principally polarized Jacobian classes is injective. Step 2.1 leaves only finitely many possible target classes, so the target family is finite. This is the claimed reduction route, conditional on the unresolved supplier proofs. [given, F9, step 2.1] ∎

## Proof status

Escalated. Steps 1.1–3.1 give the conditional Jacobian/polarization/Torelli
reduction, but [F5] and [F8] still require supplier proofs. The present AV
supplier [F5] depends on unresolved Faltings inputs, and [F8] needs
arithmetic-group orbit reduction. Both [F6] and [F9] now have local arguments
under the AC/DC hypotheses of this reduction; their original unqualified
choice scopes remain held. The original unqualified curve theorem is also
held. No acceptance is inferred from either cited source.

## Axiom use

This draft route assumes AC, DC, and Countable Choice because the current
abelian-variety finiteness supplier [F5] assumes all three and the current
canonical Jacobian polarization supplier [F7] assumes AC and DC. The
finite-representative step uses only finite choice [F10], which is proved in
ZF. These are proof-route hypotheses; the statement is preserved without an
axiom qualification, and no claim that the curve theorem requires these
axioms is made.
