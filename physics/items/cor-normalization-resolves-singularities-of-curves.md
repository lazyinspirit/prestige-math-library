---
id: cor-normalization-resolves-singularities-of-curves
kind: corollary
title: Normalization resolves the singularities of a projective curve
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 2
proof_strategy: direct
justified_by: []
aliases: []
deps: [thm-integral-closure-finite-finite-type-domain-over-field, lem-finite-normalization-compatible-with-principal-opens, thm-gluing-affine-schemes, thm-lying-over, thm-affine-domain-dimension-transcendence-degree, def-integral-scheme, thm-normal-curve-is-nonsingular, lem-av7-finite-morphism-projective-over-projective-base, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for cor-normalization-resolves-singularities-of-curves and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-1; completed reader repair plus item-specific Alpha disposition. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"b59e47eedc019f9c4db9d1922a782ac396b011d1c9f8493e3c922910ce927725","evidence":["research/frontier-38-owner-30-reader-1.md","research/frontier-38-owner-30-reader-findings-1.json","research/frontier-38-owner-30-dispatch/reader-reader-1.result.json","research/frontier-38-owner-30-step5-hash-1-post-5a.json","research/frontier-38-owner-30-alpha-batch-1-5a-decisions.json","research/frontier-38-owner-30-dispatch/alpha-5a-batch-1.result.json"],"historical_binding":{"commit":"d90f26208","file":"items/cor-normalization-resolves-singularities-of-curves.md","historical_raw_sha256":"2bd46c4ff5f7609465588bd5510c70bc0fddec2c3f313490b89ace09d126144b","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:41:54.938Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §b: normalization of curves and nonsingular projective models"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice. Let $C$ be an integral projective curve over a
perfect field $k$. Then its normalization $C^{\nu}$ is a nonsingular projective
curve, and $\nu\colon C^{\nu}\to C$ is a finite birational morphism.
Consequently every integral projective curve over a perfect field admits a
nonsingular projective model.

## Facts & Assumptions

**Given:** AC, the perfect field $k$, the integral projective curve $C$ over $k$, and its normalization $\nu\colon C^{\nu}\to C$.

[F1] A finite-type domain over any field has finite integral closure in its fraction field, and that closure commutes with localization at a nonzero element ([[thm-integral-closure-finite-finite-type-domain-over-field]], [[lem-finite-normalization-compatible-with-principal-opens]]).

[F2] Compatible affine schemes glue along their open overlaps. Integral schemes have affine domains and a common function field; lying over gives surjectivity for integral extensions, and the dimension of a finite-type domain is the transcendence degree of its fraction field ([[thm-gluing-affine-schemes]], [[def-integral-scheme]], [[thm-lying-over]], [[thm-affine-domain-dimension-transcendence-degree]]).

[F3] A normal integral finite-type curve over a perfect field is nonsingular ([[thm-normal-curve-is-nonsingular]]).

[F4] A finite morphism over a projective finite-type $k$-scheme has projective source, for any field $k$ ([[lem-av7-finite-morphism-projective-over-projective-base]]).

[F5] The Axiom of Choice is assumed and is inherited by the normal-curve and projectivity suppliers ([[def-axiom-of-choice]]).

## Proof

1.1 Regard the projective curve $C$ as an integral closed subscheme of $\mathbf P^r_k$. Its nonempty standard affine charts are $C_i=\operatorname{Spec}A_i$, where the $A_i$ are finite-type domains with common function field $K=k(C)$. Put $B_i$ equal to the integral closure of $A_i$ in $K$. By [F1], $B_i$ is finite over $A_i$. On $C_i\cap C_j=D(x_j/x_i)$ these closures localize to the same subring of $K$. Thus their affine spectra glue by [F2] to a scheme $C^\nu$ with a finite morphism $\nu:C^\nu\to C$. Each $B_i$ is a finite algebra over the finite-type $k$-algebra $A_i$, hence finite type over $k$; the finite chart cover makes $C^\nu$ a finite-type $k$-scheme. This is the normalization: its affine rings and their localizations are exactly the integral closures in $K$. [F1, F2, F5, given, construct]

2.1 Each $B_i$ is a normal domain with fraction field $K$. Lying over makes $\nu$ surjective. Clearing the denominators in $K$ of a finite set of $A_i$-module generators of $B_i$ gives a nonzero $a_i\in A_i$ with $(B_i)_{a_i}=(A_i)_{a_i}$, so $\nu$ is birational. Moreover $\dim B_i=\operatorname{trdeg}_k K=1$ by [F2]; hence $C^\nu$ is an integral normal curve. By [F4] it is projective, and by [F3] the perfectness of $k$ makes it nonsingular. [F1, F2, F3, F4, step 1.1, algebra]

3.1 The scheme $C^\nu$ therefore supplies the required nonsingular projective model with its finite birational normalization map. The construction uses affine integral closure over the actual field $k$, so it applies to every perfect field, not only the algebraically closed classical case. [step 1.1, step 2.1] ∎
