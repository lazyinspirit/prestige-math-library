---
id: thm-bgg-reciprocity
kind: theorem
title: BGG reciprocity
status: published
origin: pipeline
deps:
- def-axiom-of-choice
- def-standard-and-costandard-objects-in-category-o
- lem-hom-from-projectives-counts-simple-composition-factors
- lem-hom-to-costandards-counts-verma-flag-factors
- lem-simple-highest-weight-modules-are-restricted-self-dual
- prop-restricted-duality-is-an-exact-involution-on-category-o
- thm-projectives-in-category-o-have-verma-flags
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for thm-bgg-reciprocity and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-7; completed reader repair plus item-specific Alpha disposition. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"b4edb3ce0b9b35aa318ecac2082e5ae65758a78b36999d651f7fff719b53253e","evidence":["research/frontier-38-owner-30-reader-7.md","research/frontier-38-owner-30-reader-findings-7.json","research/frontier-38-owner-30-dispatch/reader-reader-7.result.json","research/frontier-38-owner-30-step5-hash-7-post-5a.json","research/frontier-38-owner-30-alpha-batch-7-5a-decisions.json","research/frontier-38-owner-30-dispatch/alpha-5a-batch-7.result.json"],"historical_binding":{"commit":"d90f26208","file":"items/thm-bgg-reciprocity.md","historical_raw_sha256":"4962108431215aced3c9b3ebf8171ddccead10a1bd817530cc0ac92303ad2c62","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:44:13.402Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Lin Chen, lecture notes (Spring 2024), Lecture 9, Theorem 2.2 and its proof
    url: https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    locator: §2, Theorem 2.2 with proof via Proposition-Definition 2.1 and Corollary 4.9 of Lecture
      8, printed p. 4 (full text read at harvest)
  - title: Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Theorem 20.6 (BGG reciprocity)
    url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
    locator: §20.3, Theorem 20.6 and its complete proof, printed p. 102.
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For all weights
$\lambda$ and $\mu$,
$$(P(\lambda):\Delta(\mu))=[\Delta(\mu):L(\lambda)]=[M(\mu):L(\lambda)],$$
where $P(\lambda)$ is the projective cover of $L(\lambda)$, the left-hand
multiplicity is the Verma-flag multiplicity of
[[thm-projectives-in-category-o-have-verma-flags]], and the right-hand
multiplicity is the simple composition multiplicity of the Verma module
$M(\mu)$ ([[def-standard-and-costandard-objects-in-category-o]]).

## Facts & Assumptions

**Given:** The Axiom of Choice, weights $\lambda,\mu$, the projective cover $P(\lambda)$ of $L(\lambda)$, and the costandard object $\nabla(\mu)=D(M(\mu))$.

[F1] $P(\lambda)$ is Verma-filtered, so $\dim_{\mathbb C}\operatorname{Hom}_{\mathcal O}(P(\lambda),\nabla(\mu))=(P(\lambda):\Delta(\mu))$ and $\operatorname{Ext}^1_{\mathcal O}(P(\lambda),\nabla(\mu))=0$ ([[thm-projectives-in-category-o-have-verma-flags]], [[lem-hom-to-costandards-counts-verma-flag-factors]]).

[F2] For every finite-length object $X$ one has $\dim_{\mathbb C}\operatorname{Hom}_{\mathcal O}(P(\lambda),X)=[X:L(\lambda)]$ ([[lem-hom-from-projectives-counts-simple-composition-factors]]).

[F3] Restricted duality $D$ is an exact contravariant involution preserving composition multiplicities and $D(L(\lambda))\cong L(\lambda)$; hence $[\nabla(\mu):L(\lambda)]=[D(M(\mu)):L(\lambda)]=[M(\mu):L(\lambda)]$ ([[prop-restricted-duality-is-an-exact-involution-on-category-o]], [[lem-simple-highest-weight-modules-are-restricted-self-dual]]).

## Proof

**Proof technique:** direct: convert the flag multiplicity into a Hom dimension, then count with the projective-cover Hom formula and duality.

1.1 By [F1], $(P(\lambda):\Delta(\mu))=\dim_{\mathbb C}\operatorname{Hom}_{\mathcal O}(P(\lambda),\nabla(\mu))$. [F1, given]

1.2 Since $\nabla(\mu)=D(M(\mu))$ is an object of $\mathcal O$ of finite length, [F2] gives $\dim_{\mathbb C}\operatorname{Hom}_{\mathcal O}(P(\lambda),\nabla(\mu))=[\nabla(\mu):L(\lambda)]$, and by [F3] this equals $[M(\mu):L(\lambda)]$. [F2, F3, given]

2.1 Combining steps 1.1 and 1.2 gives $(P(\lambda):\Delta(\mu))=[M(\mu):L(\lambda)]$; since $\Delta(\mu)=M(\mu)$, the middle and right multiplicities agree, so all three quantities are equal. [step 1.1, step 1.2] ∎
