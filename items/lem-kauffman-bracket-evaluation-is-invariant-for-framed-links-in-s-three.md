---
id: lem-kauffman-bracket-evaluation-is-invariant-for-framed-links-in-s-three
kind: lemma
title: "Kauffman bracket evaluation of framed links in the three-sphere"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-countable-choice
  - def-kauffman-bracket-skein-module-of-a-three-manifold
  - def-kauffman-bracket-smoothing-and-loop-value
  - lem-framed-link-diagram-calculus
  - lem-kauffman-bracket-r2-r3-identities
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assumes ACω only through framed diagram equivalence; state expansion and module-relation checks are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Józef H. Przytycki, Fundamentals of Kauffman Bracket Skein Modules, arXiv:math/9809113 (1998), §2, Theorem 2.3(a)"
      url: "https://arxiv.org/pdf/math/9809113"
    - title: "Sean Pohorence, 3-manifold Invariants and TQFTs (January 2016), §3.1, pp. 11–12"
      url: "https://categorified.net/RTinvariants/Jan29-Feb3.pdf"
    - title: "Thang T. Q. Le, A Crash Course in Quantum Invariants of Knots and 3-Manifolds (2016), §6.2, Example 6.4, p. 30"
      url: "https://letu.math.gatech.edu/Papers/Lectures_Luminy_2014_new.pdf"
---

## Statement

Assume the Axiom of Countable Choice and let $R=\mathbb Z[A^{\pm1}]$ and
$\delta=-A^2-A^{-2}$. For a nonempty framed unoriented link $L$ in $S^3$,
choose a regular planar diagram $D$ of its core. Let $m_j\in\mathbb Z$ be
the full-twist correction on the $j$th component from the blackboard framing
of $D$ to the specified framing of $L$, counting an A-type twist positively
and its inverse negatively as in the framed diagram calculus, and put
$m=\sum_jm_j$. For a state
$S$ of $D$, let $a(S)$ and $b(S)$ be its numbers of A- and B-smoothings and
$|S|$ its number of resulting circles. The assignment
$$E(\varnothing)=1,\qquad E(L)=\delta(-A^3)^m\sum_{S}A^{a(S)-b(S)}\delta^{|S|-1}$$
is independent of the diagram and twist corrections and extends
$R$-linearly to a map $E:\mathcal K_A(S^3)\to R$ satisfying
$E([\varnothing])=1$.

## Statement references

[[def-kauffman-bracket-skein-module-of-a-three-manifold|Kauffman bracket skein module]]

[[def-kauffman-bracket-smoothing-and-loop-value|Kauffman bracket smoothing and loop value]]

[[lem-framed-link-diagram-calculus|Framed diagram calculus]]

[Józef H. Przytycki, *Fundamentals of Kauffman Bracket Skein Modules* (1998), §2, Theorem 2.3(a)](https://arxiv.org/pdf/math/9809113)

[Sean Pohorence, *3-manifold Invariants and TQFTs* (2016), §3.1](https://categorified.net/RTinvariants/Jan29-Feb3.pdf)

## Facts & Assumptions

**Given:** Countable choice, a framed unoriented link in $S^3$, and its regular diagram and framing corrections.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] For a nonempty regular diagram $D$, the Kauffman bracket is the finite sum $\langle D\rangle=\sum_S A^{a(S)-b(S)}\delta^{|S|-1}$ with $\delta=-A^2-A^{-2}$ ([[def-kauffman-bracket-smoothing-and-loop-value]]).

[F2] The raw bracket is unchanged by every local Reidemeister II and III replacement in the fixed source-chart convention ([[lem-kauffman-bracket-r2-r3-identities]]).

[F3] Framed isotopies in $S^3$ admit finite planar-isotopy/Reidemeister sequences; a type-I move changes the blackboard framing by one signed twist ([[lem-framed-link-diagram-calculus]]).

[F4] The skein module imposes $[L_\times]=A[L_A]+A^{-1}[L_B]$ and $[L\sqcup O]=\delta[L]$ for a zero-framed trivial circle ([[def-kauffman-bracket-skein-module-of-a-three-manifold]]).

## Proof


1.1 The state sum in [F1] is invariant under planar isotopy because that isotopy bijects crossings, states, and state circles. By [F3], diagrams of the same framed link are connected by a finite move sequence. For RII and RIII, [F2] leaves the raw bracket unchanged and the framing correction is unchanged. For an A-type R1 kink, the local state contribution is $A\delta+A^{-1}=-A^3$; for the opposite B-type kink it is $A+A^{-1}\delta=-A^{-3}$. For the A-type kink [F3] decreases the correction by one and for the B-type kink it increases the correction by one, so the product $(-A^3)^m\langle D\rangle$ is unchanged. Hence $E(L)$ is independent of diagram and framing correction. [A1, F1, F2, F3, given, algebra]

2.1 At a crossing, partition the finite state set by whether that crossing is smoothed A or B. This gives $\langle D_\times\rangle=A\langle D_A\rangle+A^{-1}\langle D_B\rangle$. In a framed skein triple the exterior framed strips agree; place the same twist marks on those common arcs and none on the blackboard-framed local tangles. Their total correction $m$ is the same for the crossing and both smoothings. Multiplying the state identity by $\delta(-A^3)^m$ proves that $E$ sends the crossing relation in [F4] to zero. [F1, F3, F4, step 1.1, algebra]

3.1 If $L$ is nonempty, adjoining a disjoint zero-framed trivial circle adds one circle to every state and multiplies the bracket by $\delta$. Thus $E(L\sqcup O)=\delta E(L)$. For the empty link, its one-circle diagram has bracket $1$, so the defining assignment gives $E(O)=\delta E(\varnothing)$. The evaluation therefore annihilates every trivial-circle relation in [F4]. Its $R$-linear extension to the free module factors through the quotient $\mathcal K_A(S^3)$ and sends the empty class to $1$. [F1, F4, step 1.1, step 2.1, algebra] ∎

