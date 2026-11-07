---
id: lem-s-three-local-intersection-signs-determine-normalized-maslov-parity
kind: lemma
title: "Local intersection signs determine normalized three-sphere Maslov parity"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-geometric-strip-linearization-frame-and-fredholm-index
  - lem-finite-ended-cauchy-riemann-relative-index-is-compact-determinant-winding
  - lem-countable-choice-hilbert-parametrices-and-index-stability
  - thm-balanced-s-three-knot-generators-admit-consistent-relative-gradings
  - lem-relative-s-three-maslov-gradings-have-a-unique-hat-homology-normalization
  - thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the actual finite-ended index and Floer homology suppliers. The signed determinant, Euler characteristic and matrix rank calculations are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Section3.2, the parity of relative Maslov index and intersection orientations; the normalization and finite top-sector formula are derived below."
---

## Statement

Assume Countable Choice. Supply an actual finite, transverse, singly based or doubly pointed genus-$g$ Heegaard diagram of the oriented three-sphere and its actual zero-$w$ hat differential. In the doubly pointed case retain all positive $z$ terms in this total differential. Orient and order its alpha and beta circles, and write $I_{ij}=\alpha_i\cdot\beta_j$ for their signed algebraic surface intersections. Choose the circle orientations so that $\det I=+1$.

For a generator $\mathbf x$, let $\sigma_{\mathbf x}$ match its ordered alpha circles to its beta circles, and put
$$q(\mathbf x)=\operatorname{sgn}(\sigma_{\mathbf x})\prod_{i=1}^g\operatorname{sgn}_{\Sigma}(\alpha_i',\beta_{\sigma_{\mathbf x}(i)}')(x_i).$$
Then $q(\mathbf x)=(-1)^{M(\mathbf x)}$, where $M$ is the actual Maslov grading normalized by placing total $\widehat{HF}(S^3)$ in degree zero. Thus $q=+1$ is the normalized EVEN parity. The convention includes the universal factor $(-1)^{g(g-1)/2}$ relating ordered-product intersection orientation to complex orientation; it is not silently omitted. For $g=0$ the empty determinant and product are one and the point generator is even.

In particular, after an actual absolute Alexander sector has been geometrically identified, its even knot Floer rank is computed solely from its actual sector differential matrix:
$$\dim H^{\mathrm{even}}=\dim V^{\mathrm{even}}-\operatorname{rank}(d:V^{\mathrm{even}}\to V^{\mathrm{odd}})-\operatorname{rank}(d:V^{\mathrm{odd}}\to V^{\mathrm{even}}).$$
This assertion does not assign an Alexander origin, use a partial-pattern diagram as though it were a closed three-sphere diagram, or prove any absolute rational-degree formula for other three-manifolds.

## Facts & Assumptions

**Given:** The actual closed three-sphere diagram, its finite generator set and differential, the ordered circle orientations, and the actual three-sphere Maslov normalization.

[F1] The actual strip frame construction has orientation signs $\sigma_0,\sigma_1$, integer $\ell=p-2k$ with $(-1)^p=\sigma_0\sigma_1$, and actual Fredholm index $-\ell$. Arbitrary transverse-angle caps have the same finite-ended determinant interpretation. A norm-continuous Fredholm family has locally constant index by the finite Hilbert parametrix proof. [[lem-geometric-strip-linearization-frame-and-fredholm-index]] [[lem-finite-ended-cauchy-riemann-relative-index-is-compact-determinant-winding]] [[lem-countable-choice-hilbert-parametrices-and-index-stability]]

[F2] Three-sphere generators admit actual Whitney classes joining every pair, with consistent relative $M(\mathbf x)-M(\mathbf y)=\mu-2n_w$. Their actual total hat homology is one-dimensional; shifting its sole nonzero degree to zero gives the unique normalization. [[thm-balanced-s-three-knot-generators-admit-consistent-relative-gradings]] [[lem-relative-s-three-maslov-gradings-have-a-unique-hat-homology-normalization]] [[thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant]]

## Proof

1.1 Compute the actual intersection signs. In a product chart order the roots by their alpha labels. The real tangent columns of the ordered two tori are the $g$ alpha vectors followed by the $g$ beta vectors, with the latter in beta-label order. Reordering these beta vectors to the matching alpha slots contributes $\operatorname{sgn}\sigma_{\mathbf x}$. Interleaving the two blocks into the oriented complex two-plane order contributes $c_g=(-1)^{g(g-1)/2}$. The remaining two-by-two determinants are precisely the local surface signs in the Statement. Therefore the actual oriented-torus intersection sign is $\epsilon(\mathbf x)=c_gq(\mathbf x)$. The symmetric quotient adds no further sign: permuting two complex coordinate factors preserves its real orientation, and each labelled product torus is embedded off the diagonal. Expanding the determinant of $I$ by matchings, and then expanding each product of signed intersection sums, gives $\sum_{\mathbf x}q(\mathbf x)=\det I$. The matrix is unimodular: cutting the two supplied handlebodies gives the finite cellular presentation $H_1(S^3)=\mathbb Z^g/I\mathbb Z^g$, with $H_2(S^3)=0$, so it is an integral isomorphism. Reverse one circle orientation if needed to make its determinant one. This proves the claimed signed sum and explicitly accounts for the complex-product factor. [given, construct, algebra]

2.1 For an actual Whitney model from $\mathbf x$ to $\mathbf y$, orient the two pulled-back real boundary bundles by the global product-circle orientations. First use orthogonal constant end caps. In [F1]'s real-frame construction the transported lower and upper frames have terminal orientation signs $\sigma_0,\sigma_1$ relative to the chosen positive-end complex chart. Their product is the ratio of the two actual oriented intersection signs: complex changes of frame preserve real orientation, and the only remaining signs are the two real boundary-basis comparisons. Thus $\sigma_0\sigma_1=\epsilon(\mathbf x)\epsilon(\mathbf y)=q(\mathbf x)q(\mathbf y)$. The same construction gives $(-1)^\mu=(-1)^\ell=(-1)^p=\sigma_0\sigma_1$. This remains true at arbitrary constant product angles. Rotate each end upper line to $i\mathbb R$ inside its actual positive-angle interval and freeze the domain by the explicit scalar angle gauge. Its end spectral gaps stay positive on this compact rotation path, the finite-ended cutoff parametrices remain Fredholm, and [F1]'s actual index stability preserves the index. No intersection sign changes on a transverse path. Compact-core zeroth-order changes also leave the capped determinant parity unchanged. Thus the parity identity applies to the actual operators and smooth Whitney models used for the relative grading, without assuming that an integrable chart can holomorphically make arbitrary angles right. [F1, step 1.1, construct, algebra]

3.1 By [F2] every pair of generators can be joined, and $2n_w$ is even. Hence steps 1.1–2.1 show that $q(\mathbf x)$ differs from $(-1)^{M(\mathbf x)}$ by ONE global sign, independent of the generator. The actual differential has $\mu=1,n_w=0$, so it reverses $q$. Its signed Euler characteristic is $\sum q=1$. For a finite parity complex Euler characteristic equals that of homology: choose bases of its two image spaces, lift them to the opposite parity source, and pair those image/lift vectors; each such pair cancels in the alternating dimension sum, leaving the homology dimensions. The actual total homology has one generator. Since its normalized Maslov degree is zero, it is even, so its Euler characteristic in normalized Maslov parity is one. The global sign must therefore be positive. This proves $q=(-1)^M$ without locating a preferred total cycle or computing its rational map degree. For the point diagram it is the direct one-dimensional zero complex, agreeing with the empty determinant convention. [F2, step 1.1, step 2.1, construct, algebra]

4.1 In any actual Alexander sector the sector differential preserves that sector and reverses this already normalized parity. Its even cycle dimension is $\dim V^{\mathrm{even}}-\operatorname{rank}d_{\mathrm{even}}$, and its even boundary dimension is $\operatorname{rank}d_{\mathrm{odd}}$. Since $d^2=0$ those boundaries are contained in those cycles; subtraction gives the stated formula. This computation needs only the actual sector differential, its full-diagram local signs and the actual absolute Alexander sector admission. It does not replace any one of them by a partial pattern's matching signs or an unsupported centering choice. [step 3.1, algebra] ∎
