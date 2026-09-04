---
id: fs-maschkes-theorem-still-gives-semisimplicity-when-p-divides-the-group-order
kind: false-statement
title: "If the field has characteristic p and p divides |G|, then Maschke's theorem still makes kG semisimple"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [rem-maschke-failure-in-defining-characteristic]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
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

## Statement

If $\operatorname{char}k=p$ and $p\mid |G|$, then Maschke's theorem still
implies that $k[G]$ is semisimple.

## Facts & Assumptions

**Given:** A finite group $G$ and a field $k$ with $\operatorname{char}k=p\mid |G|$.

[L1] In defining characteristic, Maschke can fail and $k[G]$ need not be
semisimple ([[rem-maschke-failure-in-defining-characteristic]]).

## Refutation

**Proof technique:** direct.

1.1 The remark [L1] records precisely that the defining-characteristic situation is the failure regime for Maschke's theorem. [L1, given]

2.1 Therefore the claimed semisimplicity conclusion does not hold in general when $p$ divides $|G|$. [step 1.1]

3.1 So the statement is false. [step 1.1, step 2.1] ∎
