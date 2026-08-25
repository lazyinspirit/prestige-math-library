---
id: thm-winding-number-chain-laws
kind: theorem
title: "Chain integration and the index are additive in the chain, and reverse with it"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integration-and-index-of-complex-chain, def-complex-chain-and-cycle, prop-winding-number-under-reversal-and-concatenation, prop-reversal-and-concatenation-of-complex-line-integrals, prop-linearity-of-complex-line-integrals, lem-finite-sum-reindexing-and-fubini, def-finite-sum-in-a-commutative-monoid, thm-complex-numbers-form-a-field, thm-existence-of-complex-line-integrals-on-rectifiable-paths, def-complex-contours-reversal-concatenation-and-closedness, thm-arc-length-is-invariant-under-monotone-reparametrization]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §4.4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $\Gamma$, $\Gamma_1$, $\Gamma_2$ be complex chains
([[def-complex-chain-and-cycle]]). Then:

1. $(\Gamma_1+\Gamma_2)^\ast=\Gamma_1^\ast\cup\Gamma_2^\ast$,
   $(-\Gamma)^\ast=\Gamma^\ast$ and $(\Gamma^-)^\ast=\Gamma^\ast$;
2. $\partial(\Gamma_1+\Gamma_2)=\partial\Gamma_1+\partial\Gamma_2$,
   $\partial(-\Gamma)=-\partial\Gamma$ and $\partial(\Gamma^-)=-\partial\Gamma$
   as functions on $\mathbb C$; consequently a sum of cycles is a cycle, and the
   negative and the reversal of a cycle are cycles;
3. for $f$ continuous on $\Gamma_1^\ast\cup\Gamma_2^\ast$,
   $$\int_{\Gamma_1+\Gamma_2}f\,dz=\int_{\Gamma_1}f\,dz+\int_{\Gamma_2}f\,dz,$$
   and for $f$ continuous on $\Gamma^\ast$,
   $$\int_{-\Gamma}f\,dz=-\int_\Gamma f\,dz,\qquad \int_{\Gamma^-}f\,dz=-\int_\Gamma f\,dz;$$
4. for $p\notin\Gamma_1^\ast\cup\Gamma_2^\ast$,
   $n(\Gamma_1+\Gamma_2,p)=n(\Gamma_1,p)+n(\Gamma_2,p)$, and for
   $p\notin\Gamma^\ast$, $n(-\Gamma,p)=-n(\Gamma,p)=n(\Gamma^-,p)$;
5. the empty chain is a cycle, its integral of every function is $0$, and its
   index is $0$ at every point of $\mathbb C$.

## Facts & Assumptions

**Given:** Complex chains $\Gamma=\sum_{k<r}m_k\gamma_k$, $\Gamma_1=\sum_{k<r_1}m^1_k\gamma^1_k$ and $\Gamma_2=\sum_{k<r_2}m^2_k\gamma^2_k$, and integrands continuous on the traces named in each clause.

[L1] $\int_\Gamma f\,dz=\sum_{k<r,\,m_k\ne0}m_k\int_{\gamma_k}f\,dz$ and, for $p\notin\Gamma^\ast$, $n(\Gamma,p)=(2\pi i)^{-1}\int_\Gamma dz/(z-p)$ ([[def-integration-and-index-of-complex-chain]]).

[L2] A complex chain is a finite list of pairs $(m_k,\gamma_k)$; its trace is the union of the $\gamma_k^\ast$ with $m_k\ne0$; its boundary is $\partial\Gamma(q)=\sum\{m_k:\gamma_k(b_k)=q\}-\sum\{m_k:\gamma_k(a_k)=q\}$; it is a cycle when that vanishes identically; $\Gamma_1+\Gamma_2$ is list concatenation, $-\Gamma$ negates every coefficient, and $\Gamma^-$ reverses every contour ([[def-complex-chain-and-cycle]]).

[L3] For a rectifiable contour $\gamma$, $\int_{\gamma^-}f\,dz=-\int_\gamma f\,dz$ ([[prop-reversal-and-concatenation-of-complex-line-integrals]]); the reversal of a closed contour is a closed contour with the same trace and $n(\gamma^-,p)=-n(\gamma,p)$ ([[prop-winding-number-under-reversal-and-concatenation]]).

[L4] For continuous $f,g$ on the trace of a rectifiable contour and $\alpha,\beta\in\mathbb C$, $\int_\gamma(\alpha f+\beta g)\,dz=\alpha\int_\gamma f\,dz+\beta\int_\gamma g\,dz$ ([[prop-linearity-of-complex-line-integrals]]).

[L5] Finite sums in the additive commutative monoid of $\mathbb C$ are additive, and complex-field distributivity permits scaling term by term ([[def-finite-sum-in-a-commutative-monoid]], [[thm-complex-numbers-form-a-field]]).

[L6] For disjoint finite index sets $S,T$ and $a:S\cup T\to M$ in a commutative monoid, $\sum_{u\in S\cup T}a_u=\sum_{s\in S}a_s+\sum_{t\in T}a_t$ ([[lem-finite-sum-reindexing-and-fubini]]); a sum over a finite index set is well posed and the sum over the empty set is $0$ ([[def-finite-sum-in-a-commutative-monoid]]).

[L7] For a rectifiable contour and a continuous integrand on its trace, the complex line integral exists ([[thm-existence-of-complex-line-integrals-on-rectifiable-paths]]).

[L8] The reversal of $\gamma:[a,b]\to\mathbb C$ is $\gamma^-(t)=\gamma(a+b-t)$, so its endpoints are exchanged ([[def-complex-contours-reversal-concatenation-and-closedness]]), and arc length is unchanged by a monotone reparametrization ([[thm-arc-length-is-invariant-under-monotone-reparametrization]]).

## Proof

**Proof technique:** direct.

1.1 The list $\Gamma_1+\Gamma_2$ has as its terms exactly the terms of $\Gamma_1$ followed by those of $\Gamma_2$, so the set of indices with nonzero coefficient splits as a disjoint union and [L2] gives $(\Gamma_1+\Gamma_2)^\ast=\Gamma_1^\ast\cup\Gamma_2^\ast$. Negating a coefficient does not change whether it is zero, and reversing a contour does not change its trace by [L8], so $(-\Gamma)^\ast=(\Gamma^-)^\ast=\Gamma^\ast$. This is claim 1. [given, L2, L8]

1.2 For each $q$, the two defining sums of $\partial(\Gamma_1+\Gamma_2)(q)$ run over the disjoint union of the corresponding index sets for $\Gamma_1$ and $\Gamma_2$, so [L6] splits each of them and gives $\partial(\Gamma_1+\Gamma_2)(q)=\partial\Gamma_1(q)+\partial\Gamma_2(q)$. Replacing every $m_k$ by $-m_k$ multiplies both sums by $-1$ by [L5], giving $\partial(-\Gamma)=-\partial\Gamma$; and by [L8] the reversal exchanges the roles of the two endpoint sums, giving $\partial(\Gamma^-)=-\partial\Gamma$. Hence if $\partial\Gamma_1$ and $\partial\Gamma_2$ vanish identically so does $\partial(\Gamma_1+\Gamma_2)$, and likewise for $-\Gamma$ and $\Gamma^-$; this is claim 2. [given, L2, L5, L6, L8]

1.3 The empty chain has empty trace, both its boundary sums are empty and therefore $0$ by [L6], and its integral is the empty sum, which is $0$ by [L1] and [L6]; hence its index is $0$ at every $p\in\mathbb C$, all of which lie off its empty trace. This is claim 5. [L1, L2, L6]

2.1 Let $f$ be continuous on $\Gamma_1^\ast\cup\Gamma_2^\ast$, which by step 1.1 is the trace of $\Gamma_1+\Gamma_2$, so all three integrals exist by [L1] and [L7]. The defining sum for $\int_{\Gamma_1+\Gamma_2}f\,dz$ runs over the disjoint union of the two index sets, so [L6] splits it into $\int_{\Gamma_1}f\,dz+\int_{\Gamma_2}f\,dz$. [step 1.1, L1, L6, L7]

3.1 Let $f$ be continuous on $\Gamma^\ast$. Replacing each $m_k$ by $-m_k$ multiplies each summand of [L1] by $-1$, so [L5] gives $\int_{-\Gamma}f\,dz=-\int_\Gamma f\,dz$; and replacing each $\gamma_k$ by $\gamma_k^-$ negates each $\int_{\gamma_k}f\,dz$ by [L3], so $\int_{\Gamma^-}f\,dz=-\int_\Gamma f\,dz$ as well. Together with step 2.1 this is claim 3. [step 1.1, step 2.1, L1, L3, L5]

4.1 Applying steps 2.1 and 3.1 to $f(z)=1/(z-p)$, which is continuous on the traces involved whenever $p$ lies off them, and dividing by $2\pi i$ using [L4] gives claim 4: $n(\Gamma_1+\Gamma_2,p)=n(\Gamma_1,p)+n(\Gamma_2,p)$ and $n(-\Gamma,p)=-n(\Gamma,p)=n(\Gamma^-,p)$. [step 1.3, step 2.1, step 3.1, L1, L3, L4] ∎
