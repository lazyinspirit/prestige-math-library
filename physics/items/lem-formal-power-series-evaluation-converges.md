---
id: lem-formal-power-series-evaluation-converges
kind: lemma
title: "Formal power-series substitution converges in a complete local algebra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-separated-and-complete-filtered-module, def-local-ring]
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
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem 22.32"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "Melvin Hochster, The structure theory of complete local rings"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Structure.pdf"
pipeline_run: null
---

## Statement

Let $(A,\mathfrak m)$ be a complete local ring, let $k \to A$ be a ring map,
and let $x_1,\ldots,x_n \in \mathfrak m$. For a formal series
$$F=\sum_\alpha a_\alpha X^\alpha \in k\llbracket X_1,\ldots,X_n\rrbracket,$$
the partial sums ordered by total degree,
$$S_N=\sum_{|\alpha|<N} a_\alpha x^\alpha,$$
form an $\mathfrak m$-adically Cauchy sequence in $A$ and hence converge.

## Facts & Assumptions

**Given:** A complete local ring $(A,\mathfrak m)$, a ring map $k \to A$, and elements $x_1,\ldots,x_n \in \mathfrak m$.

[L1] Completeness means that every $\mathfrak m$-adically Cauchy sequence in $A$ converges ([[def-separated-and-complete-filtered-module]]).

## Proof

**Proof technique:** degree-$N$ tails land in $\mathfrak m^N$.

1.1 If $M>N$, then $$S_M-S_N=\sum_{N \le |\alpha|<M} a_\alpha x^\alpha.$$ Every monomial $x^\alpha$ appearing here is a product of $|\alpha| \ge N$ elements of $\mathfrak m$, so by the definition of the ideal power $\mathfrak m^N$ one has $x^\alpha \in \mathfrak m^N$. Hence $S_M-S_N \in \mathfrak m^N$. [given, algebra]

2.1 Step 1.1 is exactly the $\mathfrak m$-adic Cauchy condition for $(S_N)$. By [L1], the partial sums therefore converge in $A$. [L1, step 1.1]

3.1 Thus substitution of maximal-ideal elements into a multivariable formal power series converges in a complete local ring. [step 2.1] ∎
