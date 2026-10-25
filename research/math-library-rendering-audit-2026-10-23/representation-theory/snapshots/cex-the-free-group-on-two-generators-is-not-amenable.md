---
id: cex-the-free-group-on-two-generators-is-not-amenable
kind: counterexample
title: The free group on two generators is not amenable
status: published
origin: pipeline
dependency_level: 3
proof_strategy: direct
deps:
  - def-amenable-locally-compact-group
  - def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group
  - lem-counting-measure-on-a-discrete-group
  - def-complex-haar-l-infinity-space
  - def-standard-topologies
  - def-free-group
  - thm-reduced-words-form-the-free-group
  - thm-free-group-of-rank-two-is-nonamenable
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: No choice principle is used; the reduced-word sets and all finite mean calculations are explicit.
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press, 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G.2, Example G.2.4(ii), printed p. 452: the reduced-word invariant-mean contradiction"
    - title: "Anne Thomas, The Banach-Tarski Paradox and Amenability, Lecture 23: Unitary Representations and Amenability"
      url: "https://www.maths.usyd.edu.au/u/athomas/amenability/Lecture23_2012_Unitary.pdf"
      locator: "Slide 2, PDF p. 2: the corollary that a discrete group containing a rank-two free subgroup is nonamenable; corroborates the conclusion, while the proof is given here"
    - title: "Anne Thomas, The Banach-Tarski Paradox and Amenability, Lecture 3: Free Groups"
      url: "https://www.maths.usyd.edu.au/u/athomas/amenability/Lecture3_2012_FreeGroups.pdf"
      locator: "Slides 7–13, PDF pp. 7–13: reduced words and the rank-two free group model"
---

## Statement

Let $F_2=\langle a,b\rangle$ be the free group on two generators with the
 discrete topology, and let $\mu$ be counting measure, a left Haar measure by
[[lem-counting-measure-on-a-discrete-group]]. Then $F_2$ is not amenable: there
is no left-invariant mean on $L^\infty(F_2,\mu)$ in the sense of
[[def-amenable-locally-compact-group]]. The direct proof below also establishes
the published discrete nonamenability claim [[thm-free-group-of-rank-two-is-nonamenable]].

## Facts & Assumptions

**Given:** The free group $F_2=\langle a,b\rangle$ with the discrete topology
and its counting Haar measure $\mu$.

[A1] Counting measure is a left Haar measure on every discrete locally compact
group ([[lem-counting-measure-on-a-discrete-group]]).

[F1] Every subset of a discrete space is Borel. Counting measure has no
nonempty null set, so Borel measurable functions modulo almost-everywhere
equality are actual functions; their $L^\infty$ classes are exactly the bounded
complex functions, with the ordinary sup norm
([[def-standard-topologies]], [[def-complex-haar-l-infinity-space]], [A1]).

[F2] A mean is a positive complex-linear functional $m$ with $m(1)=1$; left
invariance means $m(L_g\phi)=m(\phi)$ for every $g\in F_2$ and
$\phi\in L^\infty(F_2,\mu)$ ([[def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group]]).

[F3] Every element of $F_2$ has a unique reduced word in
$a,a^{-1},b,b^{-1}$ ([[def-free-group]],
[[thm-reduced-words-form-the-free-group]]).

## Proof

**Proof technique:** paradoxical decomposition by reduced words.

1.1 Suppose a left-invariant mean $m$ exists. For each subset $E\subseteq F_2$ put $\nu(E):=m(\mathbf 1_E)$, which is defined by [F1]. Positivity gives $\nu(E)\ge0$ and monotonicity under inclusion; complex linearity gives finite additivity on disjoint sets. Since $L_g\mathbf1_E=\mathbf1_{gE}$, left invariance gives $\nu(gE)=\nu(E)$ for every $g\in F_2$, and $\nu(F_2)=m(1)=1$. [A1, F1, F2, algebra]

2.1 Let $A$ be the set of reduced words whose initial maximal block is $a^k$ for some nonzero integer $k$; the empty word is not in $A$. Every word outside $A$ is either empty or begins with a nonzero power of $b$. In the first case $a^{-1}\in A$; in the second case the reduced word $a^{-1}w$ begins with $a^{-1}$ and is in $A$. Thus $F_2=A\cup aA$. By [F2], $\nu(aA)=\nu(A)$; monotonicity and finite subadditivity from step 1.1 give $1=\nu(F_2)\le\nu(A)+\nu(aA)=2\nu(A)$, hence $\nu(A)\ge\tfrac12$. [F2, F3, step 1.1, construct]

3.1 The sets $A$, $bA$, and $b^2A$ are pairwise disjoint: their reduced words have initial maximal blocks respectively a nonzero power of $a$, exactly one $b$ followed by a nonzero power of $a$, and exactly two $b$'s followed by a nonzero power of $a$; no cancellation occurs at these joins. Therefore monotonicity, finite additivity, and left invariance from step 1.1 yield $1=\nu(F_2)\ge\nu(A)+\nu(bA)+\nu(b^2A)=3\nu(A)\ge\tfrac32$, a contradiction. Hence no invariant mean exists, and the amenability definition shows $F_2$ is not amenable. This proves the claim and its stated discrete counterpart. [F2, F3, step 1.1, step 2.1] ∎
