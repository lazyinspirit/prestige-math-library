---
id: lem-kauffman-bracket-curl-and-writhe-correction
kind: lemma
title: "Kauffman bracket curl and writhe correction"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-kauffman-bracket-smoothing-and-loop-value
  - lem-kauffman-bracket-r2-r3-identities
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-oriented-reidemeister-moves
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The local calculations are choice-free; only the crossing-sign supplier's separate framing clause assumes ACω, which is not used here."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, §§III and VI, printed pp. 430–432 and 466–469"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
    - title: "Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial, arXiv:2204.12104v2, §2"
      url: "https://arxiv.org/pdf/2204.12104v2"
    - title: "Justin Roberts, Knots Knotes, §§4.1 and 4.3, printed pp. 21–22 and 24–25"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
    - title: "François Funar, A Crash Course in Quantum Invariants of Knots and 3-Manifolds, Chapter 3, §1.1"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~funar/quantum.pdf"
---

## Statement

Let $A$ be an indeterminate and let $D$ be a nonempty regular oriented link
diagram in an oriented $3$-sphere. Fix a unit viewing normal $n$ and orient its
projection plane $P$ so $(u,v)$ is positive exactly when $(n,u,v)$ is positive
in the ambient $3$-space. At each crossing define
$\operatorname{sgn}(c)=\operatorname{sgn}\det_P(v_{\rm over},v_{\rm under})$
from the oriented projected tangents, and set
$\operatorname{wr}(D)=\sum_c\operatorname{sgn}(c)$. With
$\delta=-A^2-A^{-2}$, adding a positive type-I kink multiplies the
raw bracket by $-A^3$ and increases writhe by $1$; adding a negative type-I
kink multiplies it by $-A^{-3}$ and decreases writhe by $1$. Deleting either
kink multiplies by the reciprocal factor. Consequently
$$f_D(A):=(-A^3)^{-\operatorname{wr}(D)}\langle D\rangle$$
is unchanged by every oriented type-I, type-II, and type-III Reidemeister move
and by planar isotopy.

## Statement references

[Kauffman, *An Invariant of Regular Isotopy* (1990), §§III and VI](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial* (2022), §2](https://arxiv.org/pdf/2204.12104v2)

[Roberts, *Knots Knotes* (1999), §§4.1 and 4.3](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

[Funar, *A Crash Course in Quantum Invariants of Knots and 3-Manifolds*, Chapter 3, §1.1](https://www-fourier.univ-grenoble-alpes.fr/~funar/quantum.pdf)

## Facts & Assumptions

**Given:** A nonempty regular oriented link diagram $D$ and a type-I, type-II,
or type-III move applied to it.

[F1] A crossing contributes $A$ for its A-smoothing and $A^{-1}$ for its
B-smoothing, a state with $k$ circles contributes the factor
$\delta^{k-1}$, and $\delta=-A^2-A^{-2}$
([[def-kauffman-bracket-smoothing-and-loop-value]]).

[F2] The total writhe is the sum of the signs
$\operatorname{sgn}(c)=\operatorname{sgn}\det_P(v_{\rm over},v_{\rm under})$;
the positive Artin half twist has sign $+1$
([[def-oriented-crossing-sign-writhe-and-blackboard-framing]]).

[F3] A type-I kink creates or deletes one crossing of either sign; type II
creates or deletes two crossings of opposite signs; type III preserves the
signs of its three crossings ([[def-oriented-reidemeister-moves]]).

[F4] The raw bracket is unchanged under every R2 and R3 local replacement
([[lem-kauffman-bracket-r2-r3-identities]]).

## Proof

1.1 In the positive curl chart, the A-smoothing is the original through arc with one additional trivial circle, and the B-smoothing is the original through arc. The state-sum formula [F1] therefore multiplies the bracket of the uncurlled diagram by $A\delta+A^{-1}=-A^3$. [F1, F3, algebra]

1.2 In the negative curl chart, the A-smoothing is the original through arc, and the B-smoothing is that arc with one additional trivial circle. Its factor is $A+A^{-1}\delta=-A^{-3}$. Deleting either curl reverses its multiplication factor. [F1, F3, algebra]

2.1 By [F2] and [F3], the positive curl changes writhe from $w$ to $w+1$, so $$(-A^3)^{-(w+1)}(-A^3)\langle D\rangle=(-A^3)^{-w}\langle D\rangle.$$ The negative curl changes it from $w$ to $w-1$, and $$(-A^3)^{-(w-1)}(-A^{-3})\langle D\rangle=(-A^3)^{-w}\langle D\rangle.$$ Thus the writhe-normalized bracket is unchanged under type I. [F1, F2, F3, step 1.1, step 1.2, algebra]

3.1 A type-II move contributes two opposite crossing signs, and a type-III move preserves its three signs, so [F2] and [F3] leave the writhe unchanged under both moves. Their raw bracket is unchanged by [F4]. Planar isotopy transports crossings, signs, states, and state-circle counts bijectively, so it preserves both factors in $f_D$. Combining this with step 2.1 proves the claim for all listed moves. [F1, F2, F3, F4, step 2.1, algebra] ∎
