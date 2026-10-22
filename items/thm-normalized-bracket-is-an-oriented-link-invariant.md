---
id: thm-normalized-bracket-is-an-oriented-link-invariant
kind: theorem
title: "The normalized bracket is an oriented link invariant"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-kauffman-bracket-smoothing-and-loop-value
  - lem-kauffman-bracket-r2-r3-identities
  - lem-kauffman-bracket-curl-and-writhe-correction
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-oriented-reidemeister-moves
  - thm-oriented-reidemeister-equivalence-theorem
  - lem-every-oriented-link-admits-a-regular-projection
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assumes ACω exactly for the oriented Reidemeister equivalence theorem; local bracket identities are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §§III and VI, printed pp. 430–432 and 466–469"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
    - title: "Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial, arXiv:2204.12104v2, §2"
      url: "https://arxiv.org/pdf/2204.12104v2"
    - title: "Justin Roberts, Knots Knotes, §§4.1–4.4, printed pp. 21–26"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
    - title: "François Funar, A Crash Course in Quantum Invariants of Knots and 3-Manifolds, Chapter 3, §§1.1–2.3"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~funar/quantum.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $A$ be an indeterminate and let $D$
be a nonempty regular oriented link diagram in an oriented $3$-sphere. Fix a
unit viewing normal $n$ and orient the projection plane $P$ so $(u,v)$ is
positive exactly when $(n,u,v)$ is positive in the ambient $3$-space. At each
crossing define $\operatorname{sgn}(c)=\operatorname{sgn}\det_P(v_{\rm over},
v_{\rm under})$ from the oriented projected tangents and set
$\operatorname{wr}(D)=\sum_c\operatorname{sgn}(c)$. At each crossing use the
local source chart in which the over-strand runs southwest to northeast; the
A-smoothing joins the left endpoints and the right endpoints with weight $A$,
and the B-smoothing joins the top endpoints and the bottom endpoints with
weight $A^{-1}$. Labels are transported by orientation-preserving changes of
local coordinates. Let $C(D)$ be the finite crossing set. A state is a map
$S:C(D)\to\{A,B\}$; let $a(S)$ and $b(S)$ count its A- and B-smoothings, and
let $|S|$ be the number of circles after all crossings are smoothed. Set
$$\langle D\rangle= \sum_{S:C(D)\to\{A,B\}}A^{a(S)-b(S)}(-A^2-A^{-2})^{|S|-1}.$$
Define
$$f_D(A)=(-A^3)^{-\operatorname{wr}(D)}\langle D\rangle,$$
where $\operatorname{wr}(D)$ is the sum of the determinant signs of its
oriented crossings. If two such diagrams represent ambient-isotopic
oriented links, their $f_D(A)$ values are equal. Thus $f_D$ defines an
invariant of nonempty oriented links.

## Statement references

[[def-kauffman-bracket-smoothing-and-loop-value|Kauffman bracket state sum]]

[[def-oriented-crossing-sign-writhe-and-blackboard-framing|Crossing sign and writhe]]

[[thm-oriented-reidemeister-equivalence-theorem|Oriented Reidemeister theorem]]

[Kauffman, *An Invariant of Regular Isotopy* (1990), §§III and VI](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial* (2022), §2](https://arxiv.org/pdf/2204.12104v2)

[Roberts, *Knots Knotes* (1999), §§4.1–4.4](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

[Funar, *A Crash Course in Quantum Invariants of Knots and 3-Manifolds*, Chapter 3, §§1.1–2.3](https://www-fourier.univ-grenoble-alpes.fr/~funar/quantum.pdf)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and two nonempty regular oriented
diagrams of ambient-isotopic oriented links.

[A1] The Axiom of Countable Choice is the assumption $\mathrm{AC}_\omega$
([[def-countable-choice]]).

[F1] The normalized bracket is unchanged by planar isotopy and every oriented
R1, R2, or R3 move ([[lem-kauffman-bracket-curl-and-writhe-correction]]).

[F2] Under $\mathrm{AC}_\omega$, two ambient-isotopic regular oriented link
diagrams are connected by a finite sequence of planar isotopies and oriented
Reidemeister moves ([[thm-oriented-reidemeister-equivalence-theorem]]).

[F3] Every oriented link may be moved off the point at infinity into $\mathbb R^3$,
and the directions giving regular projections are dense in $S^2$
([[def-oriented-link-in-s-three-and-ambient-isotopy]],
[[lem-every-oriented-link-admits-a-regular-projection]]).

## Proof
1.1 By [F1], each planar isotopy and each oriented Reidemeister move in a finite sequence preserves the normalized bracket value. Repeated equality along a finite sequence therefore preserves $f_D(A)$. [F1, induction]

2.1 By [A1] and [F2], the two given diagrams are joined by such a finite sequence. Applying step 1.1 to that sequence gives equal normalized bracket values. By [F3], every nonempty oriented link has a regular diagram. Hence $f_D$ defines a value on every nonempty oriented link type. [A1, F2, F3, given, step 1.1] ∎

