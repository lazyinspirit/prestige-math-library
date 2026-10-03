---
id: cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary
kind: corollary
title: "A cycle has zero algebraic intersection with a bounding cycle"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-boundary-of-a-compact-one-manifold-has-even-cardinality, lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count, thm-transverse-preimage-for-manifolds-with-boundary, def-local-oriented-intersection-sign, def-oriented-intersection-number, lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs, cor-oriented-intersection-reduces-to-mod-two-intersection, def-induced-boundary-orientation, def-transverse-embedded-submanifolds, def-embedded-smooth-submanifold-with-boundary, lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign, def-countable-choice, lem-preimage-orientation-agrees-with-the-local-intersection-sign, def-mod-two-intersection-number]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 §4, printed p. 80 (Boundary Theorem: $X=\\partial W$ and $g$ extends implies $I_2(g,Z)=0$) and Ch. 3 §3, printed p. 108 (the oriented version)"
    - title: "John Milnor, Topology from the Differentiable Viewpoint (Princeton University Press; complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
      locator: "§5, printed p. 28 (Lemma 1)"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a closed oriented $n$-manifold, $A^a\subseteq M$ a closed oriented embedded submanifold, and $W^{b+1}\subseteq M$ a compact oriented embedded submanifold with boundary, with $a+b=n$ and $B:=\partial W$ oriented outward-normal-first. Assume the inclusion of $A$ is transverse to $W$ and to $\partial W$. Then $$I(A,B)=0\qquad\text{and}\qquad I_2(A,B)=0.$$ The same vanishing holds for the mod 2 number without orientability hypotheses, provided the intersection is transverse. The compactness of $W$ is essential: an extension over a noncompact trace, or an intersection escaping at infinity, need not preserve the count.

## Facts & Assumptions

**Given:** A closed oriented $A^a\subseteq M^n$, a compact oriented $W^{b+1}\subseteq M$ with boundary $B=\partial W$, $a+b=n$, and transversality of the inclusion of $A$ to $W$ and to $\partial W$.

[F1] Since $A$ is closed in the closed manifold $M$ and $W$ is compact, the inclusion $i_W:W\to M$ is transverse to $A$, and its boundary restriction is transverse to $A$; hence $W\cap A$ is a compact embedded submanifold with boundary of $W$, neat, of dimension $b+1-b=1$, with $\partial(W\cap A)=W\cap A\cap\partial W=A\cap B$ ([[thm-transverse-preimage-for-manifolds-with-boundary]], [[def-embedded-smooth-submanifold-with-boundary]], [[def-transverse-embedded-submanifolds]]).

[F2] Orient $S=W\cap A$ by the normal-first quotient $Q=TM/TA$ and kernel-first convention $\det TW=\det TS\otimes\det Q$, and orient $\partial S$ outward-normal-first ([[lem-preimage-orientation-agrees-with-the-local-intersection-sign]], [[def-induced-boundary-orientation]]).

[F3] Local intersection signs compare the written factor order; swapping blocks of dimensions $a,b$ multiplies the sign by $(-1)^{ab}$ ([[lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign]], [[def-local-oriented-intersection-sign]]).

[F4] The signed boundary sum of the compact oriented $1$-manifold $W\cap A$ vanishes ([[lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count]]), and its boundary has even cardinality ([[lem-boundary-of-a-compact-one-manifold-has-even-cardinality]]); both rest on the classification of compact $1$-manifolds, so this corollary inherits $\mathrm{AC}_\omega$ through them and steps 1.1-3.1 add no further choice ([[def-countable-choice]]).

[F5] $I(A,B)$ is the finite sum of the local signs over $A\cap B$, and $I_2(A,B)$ is its cardinality modulo two ([[def-oriented-intersection-number]], [[def-mod-two-intersection-number]]).

## Proof

**Proof technique:** direct; count the boundary of the compact oriented $1$-manifold $W\cap A$.

1.1 By [F1] the set $W\cap A$ is a compact oriented $1$-manifold with boundary $A\cap B$, oriented as in [F2]; its boundary is finite by [F4], so $A\cap B$ is a finite transverse intersection and both $I(A,B)$ and $I_2(A,B)$ are defined. [F1, F2, F4, F5, given]

2.1 At $p\in A\cap B$, the map $TB\to Q$ is an isomorphism. Choose an outward vector $r$ tangent to $S$; its existence follows from neatness, and let $u$ be a positive determinant of $TB$. Then $(r,u)$ is positive for $TW$ by the boundary convention. The sign of $d i_B(u)$ in $Q$ is the local sign $\varepsilon_{(B,A)}$, since quotient lifts precede $TA$. The kernel-first convention therefore assigns the outward $r$ that same sign in $TS$, so the boundary point sign is $\varepsilon_{(B,A)}=(-1)^{ab}\varepsilon_{(A,B)}$. This determinant-element argument also covers $b=0$. Summing over $\partial S=A\cap B$ gives $\sum\varepsilon_{\partial S}=(-1)^{ab}I(A,B)$. The sum vanishes by [F4], hence $I(A,B)=0$. [F2, F3, F4, F5, step 1.1, algebra]

3.1 Independently of orientations, [F4] says that the boundary of the compact $1$-manifold $W\cap A$ has even cardinality; that boundary is $A\cap B$ by [F1], so $\#(A\cap B)$ is even and $I_2(A,B)=0$ by [F5]. This mod 2 statement assumes no orientability of $A$, $W$ or $M$. [F1, F4, F5, step 1.1, algebra] ∎
