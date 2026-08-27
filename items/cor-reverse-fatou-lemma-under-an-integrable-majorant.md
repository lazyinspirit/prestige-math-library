---
id: cor-reverse-fatou-lemma-under-an-integrable-majorant
kind: corollary
title: "Reverse Fatou's lemma under an integrable majorant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-fatou-lemma, cor-additivity-of-the-nonnegative-lebesgue-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-closure-properties-of-measurable-functions-used-by-the-integral, thm-monotone-convergence-for-the-integral]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., §2.2"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $(f_n)$ be nonnegative measurable functions and let $g$ be a nonnegative
measurable function with $\int g\,d\mu<+\infty$ and $f_n\le g$ for every $n$.
Then
$$\limsup_{n\to\infty}\int f_n\,d\mu\le\int \limsup_{n\to\infty}f_n\,d\mu.$$

## Facts & Assumptions

**Given:** Nonnegative measurable functions $f_n$ dominated by a nonnegative measurable function $g$ with finite integral.

[L1] Fatou's lemma applies to every sequence of nonnegative measurable functions ([[thm-fatou-lemma]]).

[L2] The nonnegative integral is additive ([[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

[L3] The nonnegative integral is monotone ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[L4] Truncations of nonnegative measurable functions and pointwise limsups of measurable sequences are measurable ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]]).

[L5] Monotone convergence holds for the nonnegative integral ([[thm-monotone-convergence-for-the-integral]]).

## Proof

**Proof technique:** direct.

1.1 For each $m\ge1$, put $g_m:=g\wedge m$ and $u_{n,m}:=f_n\wedge m$. Then $g_m$ and $u_{n,m}$ are measurable, $0\le u_{n,m}\le g_m\le m$, and $g_m-u_{n,m}$ is a nonnegative measurable function. [L4, given, construct]

2.1 Apply [L1] to the sequence $g_m-u_{n,m}$. Since $g_m$ is finite-valued, $$\liminf_n(g_m-u_{n,m})=g_m-\limsup_n u_{n,m},$$ $$\int(g_m-u_{n,m})\,d\mu=\int g_m\,d\mu-\int u_{n,m}\,d\mu,$$ and $$\int\bigl(g_m-\limsup_n u_{n,m}\bigr)\,d\mu =\int g_m\,d\mu-\int\limsup_n u_{n,m}\,d\mu.$$ Rearranging Fatou's inequality therefore gives $$\limsup_n\int u_{n,m}\,d\mu\le\int\limsup_n u_{n,m}\,d\mu \le\int\limsup_n f_n\,d\mu.$$ [step 1.1, L1, L2, L3, L4, algebra]

3.1 Since $0\le f_n-u_{n,m}\le g-g_m$, [L2] and [L3] give $$\int f_n\,d\mu=\int u_{n,m}\,d\mu+\int(f_n-u_{n,m})\,d\mu \le\int u_{n,m}\,d\mu+\int(g-g_m)\,d\mu.$$ Taking $\limsup_n$ and using step 2.1 yields $$\limsup_n\int f_n\,d\mu \le\int\limsup_n f_n\,d\mu+\int(g-g_m)\,d\mu.$$ [step 2.1, L2, L3, algebra]

4.1 Because $g_m\uparrow g$, [L5] gives $\int g_m\,d\mu\uparrow\int g\,d\mu$. Applying [L2] to $g=(g-g_m)+g_m$ shows $$\int(g-g_m)\,d\mu=\int g\,d\mu-\int g_m\,d\mu\longrightarrow0.$$ Letting $m\to\infty$ in step 3.1 proves $$\limsup_n\int f_n\,d\mu\le\int\limsup_n f_n\,d\mu.$$ [step 3.1, L2, L5, algebra] ∎
