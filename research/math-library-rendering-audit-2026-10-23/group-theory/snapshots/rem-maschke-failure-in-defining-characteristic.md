---
id: rem-maschke-failure-in-defining-characteristic
kind: remark
title: "When the characteristic divides the group order, Maschke can fail and kG need not be semisimple"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [cor-group-algebra-is-not-semisimple-when-char-k-divides-group-order]
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Remark

Maschke's theorem is not the ambient mechanism on this page. When
$\operatorname{char}k$ divides $|G|$, the group algebra $k[G]$ can fail to be
semisimple, as recorded in
[[cor-group-algebra-is-not-semisimple-when-char-k-divides-group-order]]. The
replacement structure here is the radical/projective-cover package rather than
ordinary complete reducibility.
