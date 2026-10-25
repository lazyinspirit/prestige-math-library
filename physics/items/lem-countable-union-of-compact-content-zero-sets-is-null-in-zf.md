---
id: lem-countable-union-of-compact-content-zero-sets-is-null-in-zf
kind: lemma
title: "A countable union of compact content-zero subsets of the line is null in ZF"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-measure-zero-and-content-zero, def-rationals, lem-of-q-dense, thm-n-cross-n-countable, thm-well-ordering-principle, thm-geometric-series, lem-finite-sum-laws]
proof_strategy: direct
sources:
  references:
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 11"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical new_item review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-08-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

In ZF, let $(K_n)_{n\in\mathbb N}$ be a sequence of compact subsets of
$\mathbb R$, each of content zero in the sense of
[[def-measure-zero-and-content-zero]]. Then
$\bigcup_{n\in\mathbb N}K_n$ has measure zero. No countable choice is
required.

## Facts & Assumptions

**Given:** A sequence $(K_n)$ as in the Statement and a real $\varepsilon>0$.

[L1] Content zero gives, for each positive budget, a finite closed-interval cover with total length at most that budget; nullity asks for one countable closed-interval cover whose partial length sums are at most $\varepsilon$ ([[def-measure-zero-and-content-zero]]).

[L2] Between two distinct reals lies a rational ([[lem-of-q-dense]]), so finitely many closed real intervals can be enlarged to open intervals with rational endpoints at arbitrarily small extra total length.

[L3] The explicit bijection $J:\mathbb N^2\to\mathbb N$ from [[thm-n-cross-n-countable]] codes finite sequences recursively by $C(())=0$ and $C((a_0,\ldots,a_{k-1}))=1+J(a_0,C((a_1,\ldots,a_{k-1})))$. This is injective: code $0$ means empty, and for positive valid codes $J^{-1}$ uniquely recovers the first entry and tail code, and that tail code is smaller than the whole code because $J(a,b)\ge b$. Integers have the explicit coding $z\mapsto 2z$ for $z\ge0$ and $z\mapsto-2z-1$ for $z<0$; rationals are integer fractions ([[def-rationals]]), so fractions $m/k$ with $k>0$ admit natural codes. Decoding invalid codes as zero gives an explicit surjection $r:\mathbb N\to\mathbb Q$. Together these codes enumerate every finite list of pairs of rational endpoints.

[L4] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

[L5] There is an explicit bijection $J:\mathbb N\times\mathbb N\to\mathbb N$ ([[thm-n-cross-n-countable]]). For $b_n=\varepsilon 2^{-n-1}$, every finite partial sum $\sum_{n\le N}b_n$ is at most $\varepsilon$ ([[thm-geometric-series]], [[lem-finite-sum-laws]]).

## Proof

**Proof technique:** direct.

1.1 Fix $n$ and put $b_n=\varepsilon 2^{-n-1}>0$. By [L1], $K_n$ has a finite closed-interval cover with total length at most $b_n/2$. Enlarge each of its finitely many intervals using [L2], spending in total less than $b_n/2$ in extra length. The resulting finite family of rational open intervals covers $K_n$ and has total length less than $b_n$. Closing those rational intervals preserves their lengths and still covers $K_n$. [L1, L2, L5, choose]

2.1 By [L3], let $C_c$ be the finite list of rational closed intervals decoded from $c\in\mathbb N$ when it is a valid list code, and let invalid codes decode to the one-term list $[0,0]$. The set $$S_n=\{c\in\mathbb N:K_n\subseteq\bigcup C_c\text{ and the total length of }C_c\text{ is }<b_n\}$$ is nonempty by step 1.1. Define $c_n:=\min S_n$ by [L4]. The formula for $S_n$ and least-number selection define the entire sequence $(c_n)$ in ZF; no independent choice of covers is made. [L3, L4, step 1.1, construct]

3.1 Write $C_{c_n}=([a_{n,0},d_{n,0}],\ldots,[a_{n,l_n-1},d_{n,l_n-1}])$. Extend each finite list to all $j\in\mathbb N$ by $[a_{n,j},d_{n,j}]=[0,0]$ for $j\ge l_n$. For $k=J(n,j)$, set $[A_k,D_k]=[a_{n,j},d_{n,j}]$. Because $J$ is a bijection, this defines a sequence of closed intervals covering every $K_n$, hence their union. [L3, L5, step 2.1, construct]

4.1 Fix any finite partial list $k<t$. Its inverse $J$-coordinates lie in some finite rectangle $n,j\le N$. All lengths are nonnegative, so its total length is at most the sum of the full finite list lengths for $n\le N$. Each such length is $<b_n$ by step 2.1, whence the partial total is at most $\sum_{n\le N}b_n\le\varepsilon$ by [L5]. [L5, step 2.1, step 3.1, algebra]

5.1 Steps 3.1 and 4.1 meet the covering and partial-sum conditions of [L1] for the given $\varepsilon$. As $\varepsilon>0$ was arbitrary, $\bigcup_nK_n$ is null. The only selections were finite choices in step 1.1 and least natural-number codes in step 2.1, both available in ZF. [L1, step 3.1, step 4.1] ∎

## Source notes

Hunter, §11.8, pp. 238–239, states the Lebesgue criterion and uses geometric
$\varepsilon/2^k$ cover budgets. It states the criterion without proof and does
not give the least-code construction above. The choice-free coding argument is
proved here from the listed local suppliers.
