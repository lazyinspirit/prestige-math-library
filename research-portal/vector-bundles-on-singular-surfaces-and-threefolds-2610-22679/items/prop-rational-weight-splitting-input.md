---
id: prop-rational-weight-splitting-input
kind: proposition
title: Rational splitting of the motivic tower
status: published
domain: mathematics
external_input: true
deps:
  - math:def-axiom-of-choice
  - def-nonconnective-k-spectrum-interface
  - def-decreasing-filtered-spectrum
  - def-valuative-dimension-and-boundedness
  - lem-author-9f61e4df2141-split-spectral-cofiber
  - lem-author-9f61e4df2141-tail-splitting
  - lem-author-9f61e4df2141-split-tower-boundaries
  - lem-author-9f61e4df2141-split-couple-degeneration
  - lem-author-9f61e4df2141-split-image-filtration
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  def-decreasing-filtered-spectrum: mathematical-premise
  def-valuative-dimension-and-boundedness: mathematical-premise
  lem-author-9f61e4df2141-split-spectral-cofiber: mathematical-premise
  lem-author-9f61e4df2141-tail-splitting: mathematical-premise
  lem-author-9f61e4df2141-split-tower-boundaries: mathematical-premise
  lem-author-9f61e4df2141-split-couple-degeneration: mathematical-premise
  lem-author-9f61e4df2141-split-image-filtration: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Motivic cohomology of equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: September 2023 PDF v1, Theorems 4.12(1)–(3) and 4.27(1)–(3), printed
        pp. 22 and 29; Section 2.2, pp. 11–12; proof of Lemma 7.1, p. 49
      statement: For a qcqs Q-scheme, respectively qcqs F_p-scheme, of finite
        valuative dimension, the motivic filtration on K is bounded and
        naturally rationally equivalent, as a filtered spectrum, to the direct
        sum of its nonnegative weight-graded pieces; its spectral sequence
        degenerates rationally.
      hypotheses: X is quasi-compact and quasi-separated, is a scheme over Q or over
        F_p for a prime p, and has finite valuative dimension.
      reading_limits: This assignment read the web-served PDF text extraction of
        arXiv:2309.08463v1, dated September 18, 2023, at Section 2.2, Theorems
        4.12 and 4.27 and their boundedness paragraphs, the opening proof of
        Lemma 7.1, the statement of Theorem 5.14, the introductory comparison
        following (1.1), and Theorem 1.1(2). Only qualitative boundedness and
        the stated splitting are imported; the erroneous numerical homological
        estimates and introductory reversed K-index are not used. The splitting
        construction and its deep prerequisites were not reconstructed or
        independently validated. Four PDF screenshot requests failed with cache
        misses; no visual inspection is claimed.
dependency_level: 10
---

## Statement
Assume the Axiom of Choice and use the universes of the supplied perfect-complex $K$-theory interface. Let $X$ be a quasi-compact quasi-separated scheme over $\mathbb Q$ or over $\mathbb F_p$ for a prime $p$, of finite valuative dimension in the supplied convention. Let $F^\bullet_{\mathrm{mot}}K(X)$ be the Elmanto–Morrow motivic filtration on that nonconnective $K$-theory spectrum. Rationalization means smashing each stage with the rational sphere spectrum. There is a natural equivalence of augmented filtered spectra from this rationalized tower to the tail tower

$$q\longmapsto\bigoplus_{j\geq q}\mathbb Q(j)^{\mathrm{mot}}(X)[2j] \quad(q\geq0),$$

extended constantly for $q\leq0$. Here $\mathbb Q(j)^{\mathrm{mot}}(X)$ denotes the rationalization of Elmanto–Morrow's weight-$j$ motivic cohomology spectrum, and $[2j]$ is its $2j$-fold suspension. In particular, the associated motivic spectral sequence has zero differentials after rationalization. The induced image filtration has successive quotients given by the homotopy groups of the corresponding rational weight pieces.

## Statement references

[[def-valuative-dimension-and-boundedness]]

[[def-nonconnective-k-spectrum-interface]]

## External input
The existence, boundedness and natural rational filtered splitting of the Elmanto–Morrow tower are imported from the cited theorems. Their construction and proof are not reconstructed here. In characteristic zero the cited theorem additionally asserts multiplicativity of its equivalence; no multiplicativity of the splitting is asserted here in positive characteristic. The splitting by itself is not a terminal-edge isomorphism: a particular edge comparison also requires the appropriate graded identification and high-filtration vanishing.

## Facts & Assumptions
**Given:** Choice, the fixed universes, $X$ as in the statement and the cited Elmanto–Morrow motivic filtration.

**Goal:** Obtain the stated splitting and its formal spectral-sequence and image-filtration consequences.

[A1] Choice is inherited from the specified perfect-category and nonconnective $K$-theory interface and is used when invoking that model of $K(X)$. The formal consequences of a supplied split tower introduce no additional selection step. [[math:def-axiom-of-choice]]

[F1] The external input in Elmanto–Morrow, Theorems 4.12 and 4.27, supplies the natural rational filtered splitting under the stated respective hypotheses. The decreasing-filtration convention is Section 2.2; the proof of Lemma 7.1 explicitly writes the split stage $q$ as the sum over weights $j\geq q$ (there for affine schemes). This is the stagewise meaning of the filtered splitting in the two theorems, not an affine restriction on those theorems.

[F2] [[lem-author-9f61e4df2141-split-spectral-cofiber]] and [[lem-author-9f61e4df2141-tail-splitting]] identify the graded pieces and zero connecting maps of the tail tower.

[F3] [[lem-author-9f61e4df2141-split-tower-boundaries]] transports those zero boundaries across a tower equivalence, and [[lem-author-9f61e4df2141-split-couple-degeneration]] gives zero differentials in its tower spectral sequence.

[F4] [[lem-author-9f61e4df2141-split-image-filtration]] identifies the successive image-filtration quotients for such a splitting.

## Proof
1.1 If $X$ is a $\mathbb Q$-scheme, apply Theorem 4.12; if it is an $\mathbb F_p$-scheme, apply Theorem 4.27. In either case the qcqs and finite-valuative-dimension hypotheses are exactly those in [F1]. The imported equivalence gives the displayed natural augmented tail splitting, with graded pieces as in [F2]. [A1, F1, F2, given]

2.1 Apply [F3] to the rationalized tower and the equivalence from step 1.1: all differentials in the associated tower spectral sequence vanish. Apply [F4] to the same equivalence to obtain the stated successive image-filtration quotients. These are formal consequences of the imported splitting and do not reconstruct it or supply a separate edge comparison. [F3, F4, step 1.1] ∎
