---
id: lem-braid-isotopic-closed-braids-are-conjugate
kind: lemma
title: "Braid-isotopic closed braids are conjugate"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-closure-of-a-geometric-braid, lem-free-homotopy-classes-of-loops-are-conjugacy-classes,
       thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations,
       def-unordered-configuration-space, def-based-loops-and-fundamental-group,
       def-braid-group-by-the-artin-presentation,
       thm-the-artin-presentation-is-complete-for-geometric-braids,
       thm-choice-implies-dependent-implies-countable-choice, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 2.2 and the remark attributed there to Morton, printed pp. 18-19"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
---

## Statement

Assume the Axiom of Choice. Let $\beta,\beta'$ be $n$-braids and suppose
$\widehat\beta$ and $\widehat{\beta'}$ are isotopic through closed $n$-braids
about the standard axis (an isotopy of the closed braids through braids in the
complement of the axis). Then $\beta'$ is conjugate to $\beta$ in $B_n$.

## Facts & Assumptions

**Given:** AC, two $n$-braids $\beta,\beta'$ based at $Q$, and an isotopy of their closures through closed $n$-braids about the standard axis $A$.

[F1] Every closed $n$-braid about $A$ meets each page in exactly $n$ points, and the closure of a braid based at $Q$ is obtained from its strand images by the fixed diffeomorphism $\varphi$ of the closure construction ([[def-closure-of-a-geometric-braid]]).

[F2] The unordered configuration space $C_n(D^\circ)$ of $n$ points in the open disk is the quotient of the ordered configuration space by the label permutations, with basepoint the orbit $[Q]$ of the base configuration; its points are $n$-element subsets ([[def-unordered-configuration-space]]).

[F3] Raw slicing induces a bijection $S$ from the geometric braid group $G_n$ to $\pi_1(C_n(D^\circ),[Q])$, and the map $\Phi\colon G_n\to\pi_1(C_n(D^\circ),[Q])$, $[\beta]\mapsto(\iota^C_*[S(\beta)])^{-1}$, is a group isomorphism ([[thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations]]).

[F4] Assume AC: the published surjection $B_n^{\mathrm{Artin}}\to G_n$ is an isomorphism, so the Artin braid group $B_n$ of [[def-braid-group-by-the-artin-presentation]] is identified with the geometric braid group ([[thm-the-artin-presentation-is-complete-for-geometric-braids]]).

[F5] Two loops in a path-connected space are freely homotopic if and only if their classes in the fundamental group are conjugate; free homotopy classes correspond bijectively to conjugacy classes ([[lem-free-homotopy-classes-of-loops-are-conjugacy-classes]], [[def-based-loops-and-fundamental-group]]).


[F6] AC implies countable choice, so the general continuous braid's chosen smooth closure model is available under the Given hypothesis ([[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 **The loop of a closed braid.** Fix a page $P_\theta$ of the closure construction and identify it with the open disk $D^\circ$; a closed $n$-braid about $A$ meets each page in exactly $n$ points by [F1], and as the page turns once about the axis these points trace a continuous loop $c\colon S^1\to C_n(D^\circ)$ in the unordered configuration space of [F2]. For a general continuous braid use the selected smooth model of [F1], available by [F6]. It is endpoint-fixed braid-isotopic to the given braid, so raw slicing of [F3] sends its geometric class to the class of this closure loop. The group isomorphism in [F3] is instead $\Phi(\beta)=(\iota^C_*[c])^{-1}$. Apply that fixed induced map and inversion when transporting conjugacy; both carry conjugate classes to conjugate classes. Composing $\Phi$ with [F4] gives the fixed group isomorphism used below. [F1, F2, F3, F4, F6]

1.2 **Isotopy of closed braids gives a homotopy of the loops.** An isotopy of $\widehat\beta$ to $\widehat{\beta'}$ through closed $n$-braids about $A$ gives, by reading the $n$ intersection points with the turning page at each stage, a homotopy of the loops $c$ and $c'$ in $C_n(D^\circ)$: the intersection points depend continuously on the isotopy parameter because the isotopy is continuous and the page meets every intermediate closed braid transversely in exactly $n$ points. Hence $c$ and $c'$ are freely homotopic loops. [F1, F2, given]

2.1 **Conclusion.** By [F5] the free homotopy of step 1.2 makes the classes of $c$ and $c'$ conjugate in $\pi_1(C_n(D^\circ),[Q])$; first applying $\iota^C_*$ and inversion, and then transporting through the fixed isomorphisms of step 1.1 gives that $[\beta]$ and $[\beta']$ are conjugate in $B_n$, so $\beta'$ is conjugate to $\beta$ in $B_n$. The axiom of choice is used exactly in [F4], through the completeness of the Artin presentation. ∎ [F4, F5, step 1.1, step 1.2]
