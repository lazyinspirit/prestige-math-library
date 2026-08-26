---
id: ex-growth-of-free-abelian-groups
kind: example
title: "Free abelian groups have polynomial growth of the expected degree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-polynomial-subexponential-exponential-and-intermediate-growth, thm-growth-type-is-independent-of-the-finite-generating-set]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 5.1-5.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "C. Drutu and M. Kapovich, Lectures on Geometric Group Theory, Chapter 5"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
pipeline_run: null
---

## Example

For the standard generating set of $\mathbb Z^n$, the growth function is
equivalent to $m^n$. Hence every free abelian group of rank $n$ has
polynomial growth of degree $n$.

## Facts & Assumptions

**Given:** The standard generators $\pm e_1,\dots,\pm e_n$ of $\mathbb Z^n$.

[L1] Polynomial growth means comparison with $m^d$ for some integer $d \ge 0$ ([[def-polynomial-subexponential-exponential-and-intermediate-growth]]).

[L2] Growth type is independent of the chosen finite generating set ([[thm-growth-type-is-independent-of-the-finite-generating-set]]).

## Verification

**Proof technique:** direct.

1.1 In the standard word metric on $\mathbb Z^n$, the radius-$m$ ball is $\{a \in \mathbb Z^n : |a_1|+\cdots+|a_n| \le m\}$. It is contained in the cube $\{-m,\dots,m\}^n$, so its cardinality is at most $(2m+1)^n$. [given, algebra]

2.1 For each $k \in \mathbb N$, the cube $\{-k,\dots,k\}^n$ is contained in the radius-$nk$ ball, because $|a_1|+\cdots+|a_n| \le nk$ there. So $\beta_{\mathbb Z^n}(nk) \ge (2k+1)^n$. Together with step 1.1, this shows the growth function is equivalent to $m^n$. [step 1.1, algebra]

3.1 Step 2.1 gives polynomial growth of degree $n$ for the standard generators, and [L2] transports the same growth type to every finite generating set. [L1, L2, step 2.1] ∎
