---
id: lem-diagonal-set-at-each-level
kind: lemma
title: "A diagonal set at each arithmetical level"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-relative-computability-and-enumerability, thm-posts-theorem]
proof_strategy: contradiction
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, §§4.5–4.6"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

For every $n\ge0$, there is a $\Sigma_{n+1}^0$ set which is not
$\Pi_{n+1}^0$; its complement is $\Pi_{n+1}^0$ and not $\Sigma_{n+1}^0$.

## Facts & Assumptions

**Given:** a finite level $n\ge0$.

## Proof

**Proof technique:** contradiction.

1.1 Enumerate the $0^{(n)}$-c.e. sets as $(W_e^{0^{(n)}})_e$ and set $D_n=\{e:e\notin W_e^{0^{(n)}}\}$. If $D_n$ were itself $0^{(n)}$-c.e., say $D_n=W_d^{0^{(n)}}$, substituting $e=d$ gives $d\in D_n\iff d\notin D_n$. [given, assume-contra]

2.1 Hence $D_n$ is not $0^{(n)}$-c.e., while its complement is. Post's theorem identifies the complement as $\Sigma_{n+1}^0$ and $D_n$ as $\Pi_{n+1}^0$; exchanging them gives the claimed pair. [step 1.1, discharge-contradiction] ∎
