---
id: thm-primary-decomposition-for-an-endomorphism
kind: theorem
title: "Primary decomposition: the irreducible-power factors of $\\mu_T$ split $V$ into their invariant kernels"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-minimal-polynomial-is-well-defined-and-controls-annihilators, lem-coprime-kernel-decomposition, thm-polynomial-ring-over-a-field-is-a-ufd]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Anthony W. Knapp, Basic Algebra, 2nd ed., Ch. V, §5, Theorem 5.19'
      url: 'https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf'
pipeline_run: null
---

## Statement

Let $T:V\to V$ be an endomorphism of a finite-dimensional vector space over $F$, and factor its minimal polynomial in the UFD $F[x]$ as

$$\mu_T=\prod_{i<r}q_i^{e_i},$$

where the $q_i$ are distinct monic irreducibles and $e_i\ge1$. Then the subspaces $V_i:=\ker q_i(T)^{e_i}$ are $T$-invariant and

$$V=\bigoplus_{i<r}V_i.$$

Moreover, the minimal polynomial of $T|_{V_i}$ is exactly $q_i^{e_i}$. If $V=0$, then $r=0$ and this is the empty direct sum.

## Facts & Assumptions

**Given:** A finite-dimensional endomorphism $T$ and the displayed irreducible factorisation of $\mu_T$.

[L1] Every polynomial ring over a field is a unique factorisation domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

[L2] If coprime $f,g$ satisfy $(fg)(T)=0$, then $V=\ker f(T)\oplus\ker g(T)$ ([[lem-coprime-kernel-decomposition]]).

[L3] A polynomial annihilates an endomorphism exactly when it is divisible by its minimal polynomial ([[thm-minimal-polynomial-is-well-defined-and-controls-annihilators]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the distinct powers $f_i=q_i^{e_i}$ are pairwise coprime. Since $(\prod_i f_i)(T)=\mu_T(T)=0$, repeated application of [L2] gives $V=\bigoplus_{i<r}\ker f_i(T)$. [L1, L2, L3]

2.1 Each summand is $T$-invariant because $T$ commutes with $f_i(T)$. The restriction $T_i=T|_{V_i}$ is annihilated by $f_i$, so [L3] gives $\mu_{T_i}\mid f_i$. [step 1.1, L3, algebra]

3.1 Suppose for some $i$ that $\mu_{T_i}$ is a proper divisor of $f_i$. Put $h=\mu_{T_i}\prod_{j\ne i}f_j$. On $V_i$, the first factor annihilates; on $V_j$ with $j\ne i$, the factor $f_j$ annihilates. Step 1.1 therefore gives $h(T)=0$. [step 1.1, step 2.1, algebra]

4.1 The polynomial $h$ has smaller degree than $\mu_T$ and so cannot be divisible by $\mu_T$, contradicting [L3]. Hence $\mu_{T_i}=f_i$ by monicity. If $r=0$, then $\mu_T=1$, [L3] gives $I_V=0$, and $V=0$, which is precisely the empty direct sum. [step 3.1, L3] ∎
