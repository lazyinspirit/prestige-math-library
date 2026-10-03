---
id: prop-oriented-boundaries-have-zero-pontryagin-numbers
kind: proposition
title: Oriented boundaries have zero Pontryagin numbers
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-null-cobordant-closed-manifold
  - def-pontryagin-number-of-a-closed-oriented-manifold
  - lem-fundamental-class-of-a-boundary-pushes-forward-to-zero
  - lem-boundary-stable-tangent-splits-off-a-trivial-line
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
  - def-pontryagin-classes-by-complexification
  - thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes
  - lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives
  - def-kronecker-evaluation-pairing
  - def-fundamental-class-of-a-compact-oriented-manifold
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Section 16, boundary vanishing of Pontryagin numbers by the method of Section 4.9, printed pp.185-187; Lemma 17.3, printed p.202"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, 2016)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf
      locator: "Section 8.2, printed pp.243-247"
---

## Statement

Assume AC ([[def-axiom-of-choice]]), used only through the Pontryagin class
construction, CW-type transport, admissibility input, and the inward field
used in the boundary tangent splitting (which requires $\mathrm{AC}_\omega$). Let $M$ be a closed oriented smooth
$4k$-manifold that is the boundary of a compact oriented smooth
$(4k+1)$-manifold $W$, in the orientation convention of the null-cobordism
definition ([[def-null-cobordant-closed-manifold]]), with fundamental class
$[M]\in H_{4k}(M;\mathbb Z)$ and inclusion $i:M\hookrightarrow W$. Then
$$p_I[M]=\langle p_{i_1}\cdots p_{i_r},[M]\rangle=0$$
for every partition $I=(i_1,\dots,i_r)$ of $k$. Hence a closed oriented
$4k$-manifold with a nonzero Pontryagin number is not an oriented boundary.
The proof uses neither the signature nor the Hirzebruch signature theorem.

## Facts & Assumptions

**Given:** A closed oriented smooth $4k$-manifold $M$ occurring as an oriented boundary of a compact oriented $(4k+1)$-manifold $W$, the inclusion $i:M\to W$, and the partitions $I$ of $k$. AC is assumed.

[F1] $TW|_M\cong TM\oplus\varepsilon^1$; the splitting is available under $\mathrm{AC}_\omega$, which AC implies ([[lem-boundary-stable-tangent-splits-off-a-trivial-line]], [[def-axiom-of-choice]]).

[F2] On path-connected CW complexes, Pontryagin classes are natural and stable ([[thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes]]). The paragraph “Naturality and stability on CW-type bases” in [[def-pontryagin-number-of-a-closed-oriented-manifold]] derives the same identities for admissible CW-type bases and finite disjoint unions. Both $W$ and $M$ are admissible smooth bases with numerable tangent bundles under AC ([[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]). Thus $p_i(i^*TW)=i^*p_i(TW)$ and $p_i(TM\oplus\varepsilon^1)=p_i(TM)$ apply here, including disconnected and empty cases.

[F3] The integral Kronecker pairing is natural and additive: $\langle i^*\alpha,z\rangle=\langle\alpha,i_*z\rangle$ ([[def-kronecker-evaluation-pairing]], [[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]]).

[F4] For the induced boundary orientation, whose fundamental class is the negative of $[M]$ by the null-cobordism convention, the boundary pushforward vanishes: $i_*(-[M])=0$ in $H_{4k}(W;\mathbb Z)$ ([[lem-fundamental-class-of-a-boundary-pushes-forward-to-zero]], [[def-fundamental-class-of-a-compact-oriented-manifold]], [[def-null-cobordant-closed-manifold]]).

[F5] The Pontryagin numbers are defined by $p_I[M]=\langle p_{i_1}\cdots p_{i_r},[M]\rangle$ for partitions $I$ of $k$ ([[def-pontryagin-number-of-a-closed-oriented-manifold]]).

## Proof

1.1 (The Pontryagin classes of $M$ are restrictions from $W$.) By [F1] and stability in [F2], $$p(TM)=p(TM\oplus\varepsilon^1)=p(TW|_M)=p(i^*TW)=i^*p(TW),$$ so $p_{i_1}\cdots p_{i_r}(TM)=i^*\bigl(p_{i_1}\cdots p_{i_r}(TW)\bigr)$ for every partition. [F1, F2]

2.1 (The evaluations vanish.) Let $I$ be a partition of $k$. Naturality of the integral Kronecker pairing [F3], step 1.1, and the vanishing pushforward [F4] give $$p_I[M]=\langle p_I(TM),[M]\rangle=\langle i^*p_I(TW),[M]\rangle=\langle p_I(TW),i_*[M]\rangle=0,$$ the last step because $i_*[M]=0$, which follows from [F4] and linearity of $i_*$. [F3, F4, step 1.1]

3.1 (All numbers vanish; the boundary obstruction.) Since the partition $I$ of $k$ was arbitrary, every Pontryagin number of the closed oriented boundary $M$ vanishes. Contrapositively, if a closed oriented $4k$-manifold has some nonzero Pontryagin number, it cannot occur as such a boundary. The argument uses only the class naturality and stability, the Kronecker naturality and the boundary pushforward; neither the signature nor the Hirzebruch signature theorem is used. [F5, step 2.1] ∎
