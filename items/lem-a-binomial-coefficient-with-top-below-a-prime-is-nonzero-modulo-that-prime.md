---
id: lem-a-binomial-coefficient-with-top-below-a-prime-is-nonzero-modulo-that-prime
kind: lemma
title: "If $p$ is prime and $0\\le k\\le m<p$ then $p\\nmid\\binom{m}{k}$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-binomial-closed-formula, def-binomial-coefficient, def-p-adic-valuation, lem-p-adic-valuation-basic, lem-p-adic-valuation-additive, thm-euclids-lemma, def-prime, def-factorial-and-falling-factorial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "N. Alon, Combinatorial Nullstellensatz, proof of Theorem 3.2"
      url: "https://www.tau.ac.il/~nogaa/PDFS/null.pdf"
pipeline_run: null
---

## Statement

Let $p$ be prime. If $0\le k\le m<p$, then

$$p\nmid\binom{m}{k}.$$

## Facts & Assumptions

**Given:** a prime number $p$ and integers $k,m$ with $0\le k\le m<p$.

[F1] The closed formula gives $$\binom{m}{k}\,k!\,(m-k)!=m!.$$ ([[thm-binomial-closed-formula]])

[F2] For a nonzero integer $a$, $v_p(a)=0$ exactly when $p\nmid a$ ([[lem-p-adic-valuation-basic]]).

[F3] The $p$-adic valuation is additive on products of nonzero integers ([[lem-p-adic-valuation-additive]]).

## Proof

**Proof technique:** direct.

1.1 The identity of [F1] gives $$v_p\!\binom{m}{k}+v_p(k!)+v_p((m-k)!)=v_p(m!).$$ [F1, F3]

1.2 Every factor in each of $m!$, $k!$, and $(m-k)!$ lies strictly between $0$ and $p$, so [F2] gives valuation $0$ for each factor. Repeated additivity from [F3] therefore gives $$v_p(m!)=v_p(k!)=v_p((m-k)!)=0.$$ [F2, F3]

2.1 Substituting step 1.2 into step 1.1 gives $v_p\!\binom{m}{k}=0$, which is exactly the statement that $p\nmid\binom{m}{k}$. [F3, step 1.1, step 1.2] ∎
