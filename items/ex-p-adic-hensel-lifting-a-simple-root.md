---
id: ex-p-adic-hensel-lifting-a-simple-root
kind: example
title: "Hensel lifting a simple root of X squared minus 2 in Z_7"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-p-adic-simple-root-lifting, thm-p-adic-newton-criterion]
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
    - title: "Keith Conrad, Hensel's Lemma"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/hensel.pdf"
pipeline_run: null
---

## Example

The congruence $x^2 \equiv 2 \pmod 7$ lifts to a root of $X^2-2$ in
$\mathbb Z_7$.

## Facts & Assumptions

**Given:** The polynomial $f(X)=X^2-2$ over $\mathbb Z_7$.

[L1] Simple roots lift uniquely, and Newton iteration computes the lifted root
([[cor-p-adic-simple-root-lifting]], [[thm-p-adic-newton-criterion]]).

## Verification

**Proof technique:** direct.

1.1 The residue class $3$ satisfies $3^2-2 = 7 \equiv 0 \pmod 7$, and $f'(3)=6 \not\equiv 0 \pmod 7$. By [L1], there is a unique root $a \in \mathbb Z_7$ with $a \equiv 3 \pmod 7$. [L1, given, algebra]

2.1 The Newton step from $a_0=3$ is $$a_1 = 3 - \frac{7}{6},$$ which is well defined in $\mathbb Q_7$ and already lies in the same residue class modulo $7$; iterating stays in that class and converges to the lifted root from step 1.1. [L1, step 1.1, algebra] ∎
