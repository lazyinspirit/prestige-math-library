---
id: "ex-product-martingale-from-independent-mean-one-factors"
kind: "example"
title: "Product martingale from independent mean one factors"
deps: ["def-martingale-submartingale-and-supermartingale", "def-natural-filtration-of-a-process", "thm-generated-sigma-algebra-exists-and-is-minimal", "thm-factorization-of-expectations-for-independent-variables", "thm-grouping-independent-sigma-algebras", "lem-conditioning-a-known-variable-and-an-independent-variable", "thm-taking-out-what-is-known", "thm-arithmetic-and-lattice-operations-preserve-measurability", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
status: published
origin: "pipeline"
---

## Example

Assume AC. For given independent real integrable $(Y_k)_{k\ge1}$ with $EY_k=1$, the products $M_0=1$ and $M_n=\prod_{k=1}^nY_k$ form a martingale for $\mathcal F_0=\{\varnothing,\Omega\}$ and $\mathcal F_n=\sigma(Y_1,\ldots,Y_n)$. Factors may be signed.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the example.

[F1] Generated sigma-algebras exist and are minimal. [[thm-generated-sigma-algebra-exists-and-is-minimal]].

[F2] Finite real arithmetic preserves measurability. [[thm-arithmetic-and-lattice-operations-preserve-measurability]].

[F3] Finite products of integrable functions of independent variables are integrable, and expectations factor. [[thm-factorization-of-expectations-for-independent-variables]].

[F4] The sigma-algebra of a finite past is independent of the next variable sigma-algebra. [[thm-grouping-independent-sigma-algebras]].

[F5] An integrable variable independent of a sigma-algebra has constant conditional mean equal to its expectation. [[lem-conditioning-a-known-variable-and-an-independent-variable]].

[F6] A finite measurable factor may be taken out when its product with the integrable input is integrable. [[thm-taking-out-what-is-known]].

[F7] AC supplies the inherited conditional-expectation existence and any stated choice of versions. [[def-axiom-of-choice]].

## Verification

**Proof technique:** direct.

1.1 The generated finite-history sigma-algebras form a filtration; finite products are adapted. Apply factorization to the Borel functions $t\mapsto|t|$ to get $E|M_n|=\prod_{k=1}^nE|Y_k|<\infty$ for $n\ge1$; at $n=0$ it equals one. Group independence separates $\sigma(Y_{n+1})$ from the finite past, so $E[Y_{n+1}\mid\mathcal F_n]=EY_{n+1}=1$ (also for the trivial past at zero). [given, F1, F2, F3, F4, F5]

2.1 The variable $M_n$ is finite and $\mathcal F_n$-measurable. Both $Y_{n+1}$ and $M_nY_{n+1}=M_{n+1}$ are integrable by step 1.1. The unbounded taking-out clause therefore gives $E[M_{n+1}\mid\mathcal F_n]=M_nE[Y_{n+1}\mid\mathcal F_n]=M_n$. This proves the martingale assertion [[def-martingale-submartingale-and-supermartingale]]. AC is inherited from CE; neither positivity nor identical distribution of factors was used. If one adjoins the deterministic factor $Y_0=1$, the displayed filtration is exactly the natural filtration of the resulting zero-based factor process [[def-natural-filtration-of-a-process]], not necessarily that of the products. [F6, F7, step 1.1]

3.1 For example take $\Omega=\{-1,3\}^2$ with four equal masses, let $Y_1,Y_2$ be its coordinates and $Y_k=1$ for $k\ge3$. Each first factor has mean $(-1+3)/2=1$ and absolute mean $2$; coordinate rectangle counting proves independence. The four values of $M_2$ are $1,-3,-3,9$, so $EM_2=1$ and $E|M_2|=4=2\cdot2$. Conditional on $Y_1=-1$ the product averages $(1-3)/2=-1$, and conditional on $Y_1=3$ it averages $(-3+9)/2=3$. [step 1.1, step 2.1] ∎
