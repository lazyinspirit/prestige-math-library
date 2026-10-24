---
id: lem-lz78-distinct-parse-ziv-inequality
kind: lemma
title: "Distinct-phrase count and Ziv inequality"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - alg-lz78-incremental-prefix-code
  - thm-lz78-prefix-code-lossless
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

**Given:** A finite word $y_0^{m-1}$ over a finite alphabet $\mathcal B$, any parsing $y_1,\ldots,y_N$ into distinct nonempty phrases, and a fixed context $s\in\mathcal B^k$. The empty word may have the empty parsing. In the LZ78 specialization, include the terminator in $\mathcal B$. An order-$k$ Markov kernel consists of probability rows $Q(\cdot\mid u)$ on $\mathcal B$ for every $u\in\mathcal B^k$; $Q(y\mid u)$ denotes the product of its successive row probabilities while reading $y$ from context $u$ and updating the context with each symbol.

[F1] [[thm-lz78-prefix-code-lossless]]: ordinary complete LZ78 phrases are distinct, and the terminal phrase contains the unique marker.

[F2] [[def-finite-block-information-and-entropy]]: finite words have ordinary finite-alphabet probability laws.

## Proof

**Given:** The distinct parsing, order-$k$ kernel and fixed initial context.

1.1 For each phrase start $i$, let $u_i\in\mathcal B^k$ be its preceding context, using $s$ for the initial boundary; write $\ell_i=|y_i|$. For each pair $(\ell,u)$ let $c_{\ell,u}$ count phrases of that length and context. Markov factorization gives $Q(y_0^{m-1}\mid s)=\prod_iQ(y_i\mid u_i)$. [F1, F2, given, algebra]

2.1 Group the logarithm by $(\ell,u)$ with $c_{\ell,u}>0$; groups of count zero contribute zero. Concavity of $\log_2$ gives $$\sum_{i:(\ell_i,u_i)=(\ell,u)}\log_2Q(y_i\mid u)\le c_{\ell,u}\log_2\left(\frac1{c_{\ell,u}}\sum_iQ(y_i\mid u)\right).$$ Within this group the phrase strings are distinct by the given parsing hypothesis (supplied by [F1] for the LZ78 specialization), so their conditional probabilities sum to at most one; therefore the group contribution is at most $-c_{\ell,u}\log_2c_{\ell,u}$. [F1, step 1.1, algebra]

3.1 Summing all groups and negating yields the Ziv inequality $$-\log_2Q(y_0^{m-1}\mid s)\ge\sum_{\ell,u}c_{\ell,u}\log_2c_{\ell,u}.$$ For the augmented LZ78 specialization, the terminal phrase has the unique symbol $\#$ and cannot equal any ordinary phrase; [F1] supplies distinctness of the remaining phrases. For the empty parsing, both sides are zero. Zero kernel probabilities on an observed word make the left side $+\infty$, and the inequality is then immediate. [F2, step 2.1, algebra] ∎
