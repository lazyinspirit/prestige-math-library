---
id: lem-fiberwise-semiabelian-model-comparison-over-perfect-residue-dvr
kind: lemma
title: "Comparison of semistable group models over a perfect-residue DVR"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-arith-strict-henselization-and-smooth-sections
  - lem-strict-henselian-semiabelian-model-identity-comparison
  - lem-nonaffine-connected-group-geometrically-connected
  - lem-filtered-colimit-fp-scheme-stage
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
proof_strategy: direct
sources:
  references:
    - title: "Bosch, Lütkebohmert, Raynaud, Néron Models"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
      locator: "§7.4 Proposition 3 and Corollary 4, printed pp. 182–183."
---

## Statement

Assume AC and DC. Let $R$ be a DVR with perfect residue field $k$ and fraction field $K$. Let $G,\mathcal A$ be smooth separated commutative finite-type $R$-group schemes with connected fibres and abelian-variety generic fibres. Suppose the geometric special fibre $G_{\bar k}$ is an extension of an abelian variety by a torus, and let $f:G\to\mathcal A$ be an $R$-group homomorphism inducing an isomorphism on generic fibres. Then $f$ is an isomorphism.

## Facts & Assumptions

**Given:** AC, DC, $R,k,K,G,\mathcal A,f$ as stated.

[A1] AC and DC are assumed. [[def-axiom-of-choice]], [[def-dependent-choice]]

[F1] The strict henselization $R^{\mathrm{sh}}$ is a faithfully flat strictly henselian DVR with residue field $k^s$ and is a filtered colimit of pointed étale $R$-neighbourhoods of finite presentation. [[lem-arith-strict-henselization-and-smooth-sections]]

[F2] The strict-henselian version of the present comparison is valid over an algebraically closed residue field. [[lem-strict-henselian-semiabelian-model-identity-comparison]]

[F3] Smooth connected groups over a perfect field are geometrically connected. [[lem-nonaffine-connected-group-geometrically-connected]]

[F4] For a filtered colimit of rings, morphisms between finite-presentation stage schemes descend to a finite stage, and equalities after base change become equalities at a later stage. [[lem-filtered-colimit-fp-scheme-stage]]

[F5] Morphisms descend uniquely along faithfully flat quasi-compact locally finite-presentation covers when the two pullbacks agree. [[lem-nonaffine-fppf-descent-of-scheme-morphisms]]

## Proof

**Proof technique:** apply the strict-henselian comparison and descend its inverse from a finite étale stage.

1.1 Choose a uniformizer and a separable closure $k^s$. Since $k$ is perfect, $k^s$ is algebraically closed. By F1 the strict henselization $R^{\mathrm{sh}}$ is a DVR with residue field $k^s$. The base changes of $G$ and $\mathcal A$ remain smooth, separated, commutative and finite type. Their generic fibres remain abelian varieties, and their special fibres remain connected by F3. The specified semiabelian presentation of $G_{\bar k}$ is the required presentation over $k^s=\bar k$. Thus F2 applies to $f_{R^{\mathrm{sh}}}$ and makes it an isomorphism. [A1, F1, F2, F3, given]

2.1 The group schemes are of finite presentation over the Noetherian DVR $R$. By F1 write $R^{\mathrm{sh}}=\varinjlim R_i$ for pointed étale $R$-neighbourhoods of finite presentation. F4 descends the inverse of $f_{R^{\mathrm{sh}}}$ to a morphism at some stage and descends both inverse identities after passing to one later stage $R_j$. Consequently $f_{R_j}$ is an isomorphism. The étale map $R\to R_j$ is flat and has open image containing the closed point of $\operatorname{Spec}R$, hence its image is all of $\operatorname{Spec}R$ and it is faithfully flat. It is quasi-compact and locally of finite presentation. [F1, F4, step 1.1, algebra]

3.1 The inverse of $f_{R_j}$ has equal pullbacks to $R_j\otimes_RR_j$, since both are inverses to the same base-changed map. Apply F5 to descend this inverse to an $R$-morphism $\mathcal A\to G$. The two inverse identities descend by the uniqueness in F5, so this morphism is inverse to $f$. Thus $f$ is an isomorphism. [F5, step 2.1, algebra] ∎
