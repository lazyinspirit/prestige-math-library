---
id: rem-the-published-typewriter-sequence-shows-why-riesz-fischer-only-promises-a-subsequence
kind: remark
title: "The published typewriter sequence shows why Riesz-Fischer only promises a subsequence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-riesz-fischer-completeness-of-l-p, cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences, fs-l-one-convergence-implies-almost-everywhere-convergence]
sources:
  scraped: []
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 2.4, Example (iv)"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Terence Tao, 245A Notes 4: Modes of convergence, Example 7"
      url: "https://terrytao.wordpress.com/2010/10/02/245a-notes-4-modes-of-convergence/"
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
---

The published false statement
[[fs-l-one-convergence-implies-almost-everywhere-convergence]] records the
typewriter sequence: it converges in $L^1$ but has no pointwise limit anywhere.
So the subsequence clause in
[[thm-riesz-fischer-completeness-of-l-p]] and
[[cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]]
is not cosmetic. Without it, the theorem would be false already on $[0,1]$.
