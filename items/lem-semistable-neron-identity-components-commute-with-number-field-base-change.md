---
id: lem-semistable-neron-identity-components-commute-with-number-field-base-change
kind: lemma
title: "Base change of semistable Néron identity components over number rings"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-neron-model-and-mapping-property
  - def-fiberwise-semiabelian-group-scheme
  - lem-fiberwise-semiabelian-model-comparison-over-perfect-residue-dvr
proof_strategy: direct
sources:
  references:
    - title: "Bosch, Lütkebohmert, Raynaud, Néron Models"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
      locator: "§7.4 Corollary 4, printed p. 183."
---

## Statement

Assume AC and DC. Let $K'/K$ be a finite extension of number fields, and let $A/K$ be an abelian variety. Let $\mathcal N/\mathcal O_K$ and $\mathcal N'/\mathcal O_{K'}$ be the Néron models of $A$ and $A_{K'}$. Suppose $\mathcal N^0$ is fiberwise semiabelian. Then the canonical morphism
$$\mathcal N^0\times_{\mathcal O_K}\mathcal O_{K'}\longrightarrow(\mathcal N')^0$$
extending the generic identity is an isomorphism. Consequently $A_{K'}$ is semistable and its invariant top-differential line is the base change of that of $A$.

## Facts & Assumptions

**Given:** AC, DC, $K'/K,A,\mathcal N,\mathcal N'$ and the fiberwise semiabelian identity component as stated.

[A1] AC and DC are assumed. [[def-axiom-of-choice]], [[def-dependent-choice]]

[F1] The Néron mapping property extends generic-fibre maps from smooth schemes uniquely. [[def-neron-model-and-mapping-property]]

[F2] Fiberwise semiabelian means smooth, separated, finitely presented, with connected geometric fibres and a torus–abelian extension on each geometric fibre. [[def-fiberwise-semiabelian-group-scheme]]

[F3] Over a perfect-residue DVR, a generic isomorphism from a smooth connected-fibre group model with semiabelian geometric special fibre to a smooth connected-fibre group model is an isomorphism. [[lem-fiberwise-semiabelian-model-comparison-over-perfect-residue-dvr]]

## Proof

**Proof technique:** compare the models locally by the Néron property and the perfect-residue DVR lemma.

1.1 Put $G=\mathcal N^0\times_{\mathcal O_K}\mathcal O_{K'}$. By F2, $G$ is smooth, separated and finitely presented, with connected geometric fibres, and each geometric special fibre is semiabelian. Its generic fibre is $A_{K'}$. By F1 the generic identity extends uniquely to $f:G\to\mathcal N'$. The two multiplication composites agree generically and hence agree by uniqueness in F1 applied to the smooth product $G\times G$, so $f$ is a homomorphism. Each connected special fibre of $G$ maps into the identity component of the corresponding fibre of $\mathcal N'$. Therefore $f$ factors through $(\mathcal N')^0$. [F1, F2, given, algebra]

2.1 For each nonzero prime $\mathfrak p'$ of $\mathcal O_{K'}$, localize at $\mathfrak p'$. The base is a DVR with finite, hence perfect, residue field. Its source and target are smooth separated finite-type group schemes with connected fibres, and the source has semiabelian geometric special fibre by step 1.1. Their generic fibres are abelian varieties, and $f$ is the generic identity. F3 therefore makes the localized morphism an isomorphism. At the generic point it is also an isomorphism. Since being an isomorphism is local on the base, $f$ is an isomorphism globally. [F3, step 1.1, given]

3.1 The isomorphism transports the fiberwise semiabelian property from $G$ to $(\mathcal N')^0$, proving semistability after base change. Relative differentials and exterior powers commute with base change, and pullback along the identity section commutes with base change. Applying these operations to the isomorphism gives the stated base-change identification of invariant top-differential lines. [F2, step 2.1, algebra] ∎
