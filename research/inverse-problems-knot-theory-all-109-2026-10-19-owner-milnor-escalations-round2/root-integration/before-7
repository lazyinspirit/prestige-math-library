---
id: lem-h2-classifying-map-is-surjective
kind: lemma
title: "Classifying maps are surjective on second homology"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - cor-classifying-space-of-a-discrete-group-is-a-k-g-one
  - thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-homological-serre-spectral-sequence
  - thm-five-term-exact-sequence-of-a-first-quadrant-homological-spectral-sequence
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - lem-diagonal-bar-coinvariants-compute-group-homology
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John McCleary, Nontrivial fundamental groups, §8bis.2"
      url: "https://pages.vassar.edu/mccleary/files/2011/04/MC08bis.fin_.pdf"
      locator: "Theorem 8bis.14 and its spectral-sequence derivation, PDF pp. 13–14"
---

## Statement

Assume AC. Let $X$ be a path-connected CW complex and let $G=\pi_1(X,x_0)$.
For any based classifying map $c:X\to BG$ inducing the identity on fundamental
groups, the induced homomorphism
$$
c_*:H_2(X;\mathbb Z)\longrightarrow H_2(BG;\mathbb Z)=H_2(G;\mathbb Z)
$$
is surjective.

## Statement references

[McCleary, §8bis.2](https://pages.vassar.edu/mccleary/files/2011/04/MC08bis.fin_.pdf)

## Facts & Assumptions

**Given:** Full AC, a path-connected CW complex $X$, a basepoint $x_0$, and
$G=\pi_1(X,x_0)$.

[A1] Full AC, written AC, is [[def-axiom-of-choice]].

[L1] Full AC implies DC: apply AC to the family of nonempty successor sets of a serial relation, choose an initial element, and iterate the resulting choice function. [[def-dependent-choice]]

[F1] Under AC, $BG$ is a connected CW model with $\pi_1(BG)\cong G$ and
$\pi_k(BG)=0$ for $k>1$. [[cor-classifying-space-of-a-discrete-group-is-a-k-g-one]]

[F2] The long exact sequence of a Serre fibration computes the homotopy groups
of its fiber. [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]

[F3] The homological Serre spectral sequence gives the exact five-term sequence
for the homology of a fibration. [[thm-homological-serre-spectral-sequence]],
[[thm-five-term-exact-sequence-of-a-first-quadrant-homological-spectral-sequence]]

[F4] A simply connected path-connected space has zero first homology by the
degree-one Hurewicz theorem. [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]

[F5] Under AC there is a connected CW model $K(G,1)$, and under DC its homology with trivial coefficients is the bar-model group homology. [[thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces]], [[lem-diagonal-bar-coinvariants-compute-group-homology]], [[def-dependent-choice]]

## Proof

**Given:** The data above and [A1].

1.1 By [F1, F5], choose a connected CW classifying-space model $BG$. Define a based map on the one-skeleton of $X$ sending its loops to
loops in $BG$ that represent the same elements of $G$. Each two-cell attaching
loop then maps to the identity in $\pi_1(BG)$, so its map extends over the disk.
For every cell of dimension at least three, its attaching sphere extends
because the corresponding higher homotopy group of $BG$ vanishes. AC supplies
the simultaneous cellwise extensions. The resulting based map $c:X\to BG$
induces the identity on $\pi_1$. [A1, F1, given, construct]

1.2 Replace $c$ by its mapping-path Serre fibration $p:E\to BG$. The total
space $E$ is homotopy equivalent to $X$. The homotopy long exact sequence [F2]
shows that the fiber $F$ is path-connected and has
$\pi_1(F)=\ker(\pi_1(c))=1$. Hence $H_1(F;\mathbb Z)=0$ by [F4]. [F1, F2,
step 1.1, algebra]

2.1 By [A1] and [L1], the DC hypothesis in [F5] holds, so $H_2(BG;\mathbb Z)=H_2(G;\mathbb Z)$. Apply [F3] to $F\to E\to BG$. Its five-term sequence has consecutive
terms
$$
H_2(E;\mathbb Z)\longrightarrow H_2(BG;\mathbb Z)
\longrightarrow H_0(BG;H_1(F;\mathbb Z)).
$$
The last group is zero by step 1.2. Exactness therefore makes the first map
surjective. Under the homotopy equivalence $E\simeq X$, this first map is
$c_*$, proving the assertion. [A1, L1, F3, F5, step 1.2, algebra] ∎
