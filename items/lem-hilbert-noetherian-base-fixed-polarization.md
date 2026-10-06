---
id: lem-hilbert-noetherian-base-fixed-polarization
kind: lemma
title: "Fixed-polarization Hilbert construction over a Noetherian base"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-hilbert-functor-of-flat-projective-subschemes
  - lem-hilbert-projective-space-construction
  - lem-hilbert-family-vanishing-locus
  - lem-hilbert-valuative-flat-closure
  - lem-hilbert-proper-relative-ample-projectivity
  - lem-hilbert-families-fpqc-descent
  - lem-hilbert-relative-regularity-and-base-change
  - thm-valuative-criterion-properness
  - thm-ample-powers-very-ample-proper-base
  - def-dependent-choice
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-29.md"
      - "research/frontier-38-owner-30-alpha-batch-29-5a.md"
      - "research/frontier-38-owner-30-step5-hash-29-post.json"
    reviewed_raw_sha256: "cee2815b67692d0d7c97f72933b262cebfb85682b210e8f7d065f3663d697d4e"
    content_sha256: "bd8cadae7ae6c398caadd3946b66cd04c376c0fe1bea97e39bf2fd3565c30182"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Nitin Nitsure, Construction of Hilbert and Quot Schemes, Sections 2–5"
      url: "https://arxiv.org/pdf/math/0504590"
    - title: "Alexander Grothendieck, Les schémas de Hilbert, Bourbaki 221, Sections 2–3"
      url: "https://www.numdam.org/item/SB_1960-1961__6__249_0.pdf"
---

## Statement

Assume AC and DC. Let $S$ be Noetherian, $X\to S$ projective of finite presentation, $L$ relatively ample, and $P$ fixed. The fixed-polynomial Hilbert functor on all $S$-schemes is represented by a proper finitely presented scheme with a universal closed finitely presented flat family, and that scheme admits a closed immersion into a coherent projective bundle over $S$. A specified global $X\hookrightarrow\mathbb P^n_S$ inducing $L$ gives a global H-projective embedding of the representative.

## Facts & Assumptions

**Given:** The hypotheses in the statement and AC and DC, inherited from the scheme, cohomology, and finite-module suppliers ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F1] The projective-space construction is [[lem-hilbert-projective-space-construction]]. Vanishing of a homomorphism into a flat family has a universal closed scheme locus ([[lem-hilbert-family-vanishing-locus]]).

[F2] Flat closure exists uniquely over every valuation ring ([[lem-hilbert-valuative-flat-closure]]). The properness criterion for finite-type quasi-separated morphisms uses all valuation rings ([[thm-valuative-criterion-properness]]). Properness with a relatively ample line bundle gives the coherent-projective-bundle embedding ([[lem-hilbert-proper-relative-ample-projectivity]]).

[F3] Families have effective descent and locally constant polynomial ([[lem-hilbert-families-fpqc-descent]]). Relative regularity gives finite locally free sections and arbitrary base change ([[lem-hilbert-relative-regularity-and-base-change]]). Over an affine base sufficiently high powers of a relatively ample bundle give projective-space embeddings ([[thm-ample-powers-very-ample-proper-base]]).

## Proof

1.1 On an affine open $U$ of $S$, choose a power $L^d$ giving an embedding $X_U\hookrightarrow\mathbb P^n_U$ as in [F3]. A polynomial-$P$ family for $L$ has polynomial $Q(t)=P(dt)$ for the ambient $\mathcal O(1)$; conversely equality of these substituted polynomials forces equality of the original polynomials. In the ambient representing scheme from [F1], require its universal quotient $\mathcal O\to\mathcal O_{\mathcal Z}$ to kill the pullback of the ideal of $X_U$. The zero locus in [F1] is a closed subscheme and universally imposes exactly $\mathcal Z\subseteq X_U$. It therefore represents the required functor on all $U$-schemes. The local representatives and universal ideals agree uniquely on overlaps through their functorial descriptions, and hence glue to $H^{P,L}_{X/S}$ and its family. These schemes are of finite presentation locally on $S$, and the finite cover gives finite presentation globally; separatedness likewise follows from their Grassmannian embeddings on each base open. [F1, F3, construct]

2.1 A valuative diagram for this scheme is a generic-fibre family inside $X_R$ for some arbitrary valuation ring $R$. The map $\operatorname{Spec}R\to S$ factors through an affine open containing the image of its closed point, since the remaining images are generizations of that point. Use the local embedding of step 1.1 and [F2] to extend the generic family by flat schematic closure. It lies in $X_R$: every local section of the ideal of $X_R$ maps to zero generically, and torsion-freeness of the flat closure's structure sheaf forces it to vanish already over $R$. Uniqueness is that of flat closure. All hypotheses of the properness criterion in [F2] hold by step 1.1, so $H^{P,L}_{X/S}\to S$ is proper. [F2, step 1.1, algebra]

3.1 For projectivity, use a finite affine cover as in step 1.1, take a common positive multiple $d$ of its embedding powers, and then a single sufficiently large regularity degree $r$ on that finite cover. The universal family's section bundle $V=\pi_*(\mathcal O_{\mathcal Z}\otimes L^{dr})$, is finite locally free by [F3]. Its determinant is relatively ample: on each base open it is the restriction of the Grassmannian Plücker bundle in the construction, hence relatively very ample there. Apply [F2] to obtain a closed embedding in a coherent projective bundle. For a specified global $X\subseteq\mathbb P^n_S$ with induced $L$, the same ambient construction is global: properness turns its locally closed Grassmannian immersion into a closed immersion, and its further closed vanishing locus gives the H-projective embedding. [F1, F2, F3, step 1.1, step 2.1, algebra] ∎
