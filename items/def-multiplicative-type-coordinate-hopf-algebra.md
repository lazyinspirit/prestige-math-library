---
id: def-multiplicative-type-coordinate-hopf-algebra
kind: definition
title: "Coordinate Hopf algebras for multiplicative type"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for def-multiplicative-type-coordinate-hopf-algebra and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-25; unchanged reader mathematics. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"ba47e9d5f7031e632091c8a47b832062fb8e1977373a995bca5a7be040ff0ad8","evidence":["research/frontier-38-owner-30-reader-25.md","research/frontier-38-owner-30-reader-findings-25.json","research/frontier-38-owner-30-dispatch/reader-reader-25.result.json","research/frontier-38-owner-30-step5-hash-25-pre.json"],"historical_binding":{"commit":"d90f26208","file":"items/def-multiplicative-type-coordinate-hopf-algebra.md","historical_raw_sha256":"a47d6e1d43d9c343708d939cd8f3a40698733cbace2a4ebcd8af7f47abd395fa","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:26:26.494Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups, corrected 2022 edition"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "SGA 3, Expose VIII, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp8-8nov09.pdf
    - title: "SGA 3, Expose X, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Expo10-8nov09.pdf
deps: ["def-group-scheme-over-a-field"]
---

## Definition

For an affine $k$-group scheme $G$, its coordinate algebra $A$ has maps $\Delta:A\to A\otimes_k A$, $\epsilon:A\to k$, and $S:A\to A$ obtained by reversing multiplication, identity, and inverse. A commutative Hopf $k$-algebra means a commutative unital algebra with these algebra maps satisfying coassociativity, counit, and inverse identities. The inverse identity is $m(S\otimes1)\Delta=m(1\otimes S)\Delta=\eta\epsilon$, where $m$ is algebra multiplication and $\eta:k\to A$ is the unit. A Hopf map respects all three maps. A group-like element is $a$ with $\Delta(a)=a\otimes a$ and $\epsilon(a)=1$.

Group schemes and their morphisms have the convention of [[def-group-scheme-over-a-field]]. In particular the term group here refers to the whole scheme, including nilpotents, rather than only its points over a field.
