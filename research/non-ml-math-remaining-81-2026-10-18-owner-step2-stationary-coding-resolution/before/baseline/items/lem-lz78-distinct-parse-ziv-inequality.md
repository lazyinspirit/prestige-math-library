---
id: lem-lz78-distinct-parse-ziv-inequality
kind: lemma
title: "Distinct-phrase count and Ziv inequality"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - alg-lz78-incremental-prefix-code
  - def-finite-block-information-and-entropy
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Stanford EE376C, Lempel-Ziv Compression lecture notes"
      url: "https://web.stanford.edu/class/ee376a/files/EE376C_lecture_LZ.pdf.pdf"
      locator: "§1.3, within §§1.3–1.5, PDF pp.4–9: the distinct-phrase parsing and Ziv inequality argument."
---
## Statement

For any distinct finite parsing over a finite alphabet and any order-k Markov kernel, proves the finite-block likelihood inequality grouped by phrase length and preceding context.

## Facts & Assumptions

**Given:** A finite word $y_0^{m-1}$ over a finite alphabet $\mathcal B$, its distinct LZ78 parsing $y_1,\ldots,y_N$, and an order-$k$ Markov kernel $Q$ on $\mathcal B$; prepend a fixed context $s\in\mathcal B^k$.

[F1] [[alg-lz78-incremental-prefix-code]]: complete LZ78 phrases are distinct.

[F2] [[def-finite-block-information-and-entropy]]: finite words have ordinary finite-alphabet probability laws.

## Proof

**Given:** The distinct parsing, order-$k$ kernel and fixed initial context.

1.1 For each phrase start $i$, let $u_i\in\mathcal B^k$ be its preceding context, using $s$ for the initial boundary; write $\ell_i=|y_i|$. For each pair $(\ell,u)$ let $c_{\ell,u}$ count phrases of that length and context. Markov factorization gives $Q(x_0^{n-1}\mid s)=\prod_iQ(y_i\mid u_i)$. [F1, F2, given, algebra]

2.1 Group the logarithm by $(\ell,u)$. Concavity of $\log_2$ gives $$\sum_{i:(\ell_i,u_i)=(\ell,u)}\log_2Q(y_i\mid u)\le c_{\ell,u}\log_2\left(\frac1{c_{\ell,u}}\sum_iQ(y_i\mid u)\right).$$ Within this group the phrase strings are distinct by [F1], so their conditional probabilities sum to at most one; therefore the group contribution is at most $-c_{\ell,u}\log_2c_{\ell,u}$. [F1, step 1.1, algebra]

3.1 Summing all groups and negating yields the Ziv inequality $$-\log_2Q(x_0^{n-1}\mid s)\ge\sum_{\ell,u}c_{\ell,u}\log_2c_{\ell,u}.$$ For the augmented terminal phrase the symbol $\#$ occurs only once, so it cannot equal any ordinary phrase; all phrases are distinct. Zero kernel probabilities on an observed word make the left side $+\infty$, and the inequality is then immediate. [F2, step 2.1, algebra] ∎
