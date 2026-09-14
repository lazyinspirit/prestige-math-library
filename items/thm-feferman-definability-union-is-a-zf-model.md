---
id: thm-feferman-definability-union-is-a-zf-model
kind: theorem
title: The tail-flip hereditary-symmetric interpretation is a model of ZF
status: published
origin: pipeline
deps: [def-feferman-tail-flip-definability-model, thm-hereditarily-symmetric-interpretations-form-a-zf-model]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Solomon Feferman, Some applications of the notions of forcing and generic sets, ramified-model Theorem 4.9 and tail argument Theorem 4.12, printed pp. 341–344", url: "https://bibliotekanauki.pl/articles/1381977.pdf"}
---

## Statement

The tail-flip hereditary-symmetric interpretation $\mathsf F_{\mathrm{tf}}$
is a transitive inner model of ZF of the generic extension $V[G]$.

## Facts & Assumptions

**Given:** The tail-flip symmetric system over the transitive ground $V\models\mathrm{ZFC}+V=L$ and a $V$-generic $G$.

[F1] [[def-feferman-tail-flip-definability-model]] defines $\mathsf F_{\mathrm{tf}}$ to be the hereditary-symmetric interpretation of that exact system and proves that each individual HS name is fixed by some $H_m$. It expressly disclaims the former fixed-stage definability union.

[F2] [[thm-hereditarily-symmetric-interpretations-form-a-zf-model]] proves that the hereditary-symmetric interpretation of any symmetric system over a transitive ZF ground is a transitive ZF model between the ground and the full generic extension.

## Proof

**Proof technique:** direct application of the general symmetric-model theorem.

1.1 By F1, $(P,\mathscr G,\mathcal F)$ is a symmetric system and $\mathsf F_{\mathrm{tf}}=\mathrm{HS}_{\mathcal F}^{G}$. The definition also supplies the exact finite-support fact later used by the tail argument; no finite-predicate presentation or equality of two model constructions is used in this step. [F1]

2.1 Apply F2 to this system. It gives $V\subseteq\mathsf F_{\mathrm{tf}}\subseteq V[G]$, transitivity, and every ZF axiom and schema instance. Hence $\mathsf F_{\mathrm{tf}}$ is the claimed inner model of ZF. [F1, F2, step 1.1]

3.1 The legacy identifier records why this symmetric model appears on the Feferman page: its infinite coordinate-tail automorphism is the transform used in Feferman's tail-complement theorem. Feferman's ZF-model theorem concerns his different ramified hierarchy. The present ZF conclusion comes solely from F2 and does not identify the two models or revive the false literal union from F1. [F1, F2, step 2.1] ∎
