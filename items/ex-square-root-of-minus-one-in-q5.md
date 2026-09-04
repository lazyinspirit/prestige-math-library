---
id: ex-square-root-of-minus-one-in-q5
kind: example
title: "A square root of minus one in Q_5"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-p-adic-simple-root-lifting, thm-p-adic-newton-criterion, thm-square-criterion-in-qp-for-odd-p]
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
    - title: "Keith Conrad, Hensel's Lemma, Examples 4.3 and 4.4"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/hensel.pdf"
pipeline_run: null
---

## Example

The element $-1$ is a square in $\mathbb Q_5$.

## Facts & Assumptions

**Given:** The polynomial $f(X)=X^2+1$ over $\mathbb Z_5$.

[L1] For odd $p$, a unit of $\mathbb Z_p$ is a square in $\mathbb Q_p$ exactly
when its residue class is a square in $\mathbb F_p^\times$
([[thm-square-criterion-in-qp-for-odd-p]]).

[L2] Simple roots lift uniquely, and Newton iteration gives the same root
([[cor-p-adic-simple-root-lifting]], [[thm-p-adic-newton-criterion]]).

## Verification

**Proof technique:** direct.

1.1 Modulo $5$ one has $2^2 \equiv -1$. Since $-1$ is a unit, [L1] shows that $-1$ is a square in $\mathbb Q_5$. [L1, given, algebra]

2.1 Concretely, $f(2)=5 \equiv 0 \pmod 5$ and $f'(2)=4 \not\equiv 0 \pmod 5$, so [L2] produces a unique $5$-adic root congruent to $2$ modulo $5$. [L2, step 1.1, algebra] ∎
