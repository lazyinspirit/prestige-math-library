---
id: thm-abelian-variety-is-projective
kind: theorem
title: "Every abelian variety over a field is projective"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-abelian-variety-over-a-field, lem-nonaffine-smooth-connected-group-has-ample-line-bundle, thm-ample-powers-very-ample-proper-base]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for thm-abelian-variety-is-projective and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-24; unchanged reader mathematics. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"b4176e717a8b8d76e90e2580878f2e6d76d42eade7d17e6e418e2dc1a385070a","evidence":["research/frontier-38-owner-30-reader-24.md","research/frontier-38-owner-30-reader-findings-24.json","research/frontier-38-owner-30-dispatch/reader-reader-24.result.json","research/frontier-38-owner-30-step5-hash-24-pre.json"],"historical_binding":{"commit":"d90f26208","file":"items/thm-abelian-variety-is-projective.md","historical_raw_sha256":"efa46328b0fb1a4b279e55b791307dd9b95979b69fa20f93c50bd8efcba2ca53","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:35:18.339Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks Project, Lemma 39.9.2, with 39.8.7 and 37.50.1"
      url: https://stacks.math.columbia.edu/tag/0BFA
    - title: "Stacks Project, Lemma 37.50.1"
      url: https://stacks.math.columbia.edu/tag/0B45
---

## Statement

Assume the Axiom of Choice. Every abelian variety over every field is projective over that field. Neither perfectness of the field nor a polarization is an assumption.

## Facts & Assumptions

[F1] An abelian variety is a proper smooth geometrically integral group variety. ([[def-abelian-variety-over-a-field]])

[F2] Every smooth geometrically integral separated finite-type group scheme over a field has an ample invertible sheaf, under AC. ([[lem-nonaffine-smooth-connected-group-has-ample-line-bundle]])

[F3] On a proper finite-type scheme over a Noetherian base with an ample line bundle, sufficiently high powers define a closed immersion into projective space over that base, under AC. ([[thm-ample-powers-very-ample-proper-base]])

## Proof

**Given:** AC, a field $k$, and an abelian variety $A/k$.

1.1 By [F1], $A$ satisfies every hypothesis of [F2], so there is an ample invertible sheaf $L$ on $A$. Its construction in [F2] uses the divisor and étale parameter-family proof of Stacks 0BF7; it does not use Barsotti–Chevalley or Milne's unproved projectivity statement. [F1, F2, given]

2.1 Apply [F3] with base $\operatorname{Spec}k$, which is Noetherian and has ample structure sheaf. Properness and finite type come from [F1]. A sufficiently high tensor power $L^n$ therefore gives a closed immersion $A\hookrightarrow\mathbf P^N_k$. This is projectivity over $k$. AC is inherited from [F2] and [F3], and the construction worked over $k$ itself even when the field was imperfect. [F1, F3, step 1.1] ∎
