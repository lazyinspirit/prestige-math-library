---
id: thm-winding-number-of-a-cycle-is-integer
kind: theorem
title: "The index of a cycle about a point off its trace is an integer"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-chain-and-cycle, def-integration-and-index-of-complex-chain, thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment, thm-continuous-logarithms-exist-along-a-contour, def-continuous-argument-and-holomorphic-logarithm-branches, thm-kernel-and-fibres-of-complex-exponential, thm-complex-exponential-surjects-onto-the-punctured-plane, lem-finite-sum-reindexing-and-fubini, def-finite-sum-in-a-commutative-monoid, thm-complex-numbers-form-a-field, def-finite-cardinality, lem-finite-choice, def-integers, thm-int-comm-ring]
justified_by: []
aliases: []
landmark: true
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

Let $\Gamma=\sum_{k<r}m_k\gamma_k$ be a complex chain which is a cycle, that is
$\partial\Gamma$ vanishes identically ([[def-complex-chain-and-cycle]]), and let
$p\in\mathbb C$ with $p\notin\Gamma^\ast$. Then

$$n(\Gamma,p)\in\mathbb Z.$$

The individual contours $\gamma_k$ need not be closed; what is used is that the
endpoint counts cancel. The empty cycle gives $n(\Gamma,p)=0$.

## Facts & Assumptions

**Given:** A complex chain $\Gamma=\sum_{k<r}m_k\gamma_k$ with $\gamma_k:[a_k,b_k]\to\mathbb C$, whose boundary function vanishes identically, and a point $p\notin\Gamma^\ast$.

[L1] A complex chain is a finite list of pairs $(m_k,\gamma_k)$, its trace is the union of the $\gamma_k^\ast$ with $m_k\ne0$, its boundary is $\partial\Gamma(q)=\sum\{m_k:\gamma_k(b_k)=q\}-\sum\{m_k:\gamma_k(a_k)=q\}$, and it is a cycle when that function vanishes identically ([[def-complex-chain-and-cycle]]).

[L2] $\int_\Gamma f\,dz=\sum_{k<r,\,m_k\ne0}m_k\int_{\gamma_k}f\,dz$, and $n(\Gamma,p)=(2\pi i)^{-1}\int_\Gamma dz/(z-p)$ for $p\notin\Gamma^\ast$ ([[def-integration-and-index-of-complex-chain]]).

[L3] For a complex contour $\gamma:[a,b]\to\mathbb C$, a point $p\notin\gamma^\ast$ and a continuous logarithm $\lambda$ of $\gamma-p$ along $\gamma$, $\int_\gamma dz/(z-p)=\lambda(b)-\lambda(a)$ ([[thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment]]).

[L4] For a complex contour $\gamma$ and $p\notin\gamma^\ast$ there is a continuous logarithm of $\gamma-p$ along $\gamma$ ([[thm-continuous-logarithms-exist-along-a-contour]]), a continuous $\lambda$ with $\exp(\lambda(t))=\gamma(t)-p$ throughout ([[def-continuous-argument-and-holomorphic-logarithm-branches]]).

[L5] $\ker(\exp)=2\pi i\mathbb Z$, and $\exp z=\exp w$ exactly when $z-w\in2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[L6] The complex exponential maps $\mathbb C$ onto $\mathbb C\setminus\{0\}$ ([[thm-complex-exponential-surjects-onto-the-punctured-plane]]).

[L7] Finite sums in the additive commutative group of $\mathbb C$ are additive and telescope, and complex-field distributivity permits scaling term by term ([[def-finite-sum-in-a-commutative-monoid]], [[thm-complex-numbers-form-a-field]]).

[L8] For disjoint finite index sets $S,T$, $\sum_{u\in S\cup T}a_u=\sum_{s\in S}a_s+\sum_{t\in T}a_t$ ([[lem-finite-sum-reindexing-and-fubini]]); sums over finite index sets are well posed and the empty sum is $0$ ([[def-finite-sum-in-a-commutative-monoid]], [[def-finite-cardinality]]).

[L9] A natural-number-indexed finite list of nonempty sets admits a choice function, provably in ZF ([[lem-finite-choice]]).

[L10] The integers form a commutative ring ([[thm-int-comm-ring]]).

## Proof

**Proof technique:** direct.

1.1 Write $K=\{k<r:m_k\ne0\}$ and let $Q=\{\gamma_k(a_k):k\in K\}\cup\{\gamma_k(b_k):k\in K\}$, a finite subset of $\Gamma^\ast$ by [L1]; in particular $q-p\ne0$ for every $q\in Q$, since $p\notin\Gamma^\ast$. [given, L1, L8]

1.2 For each $k\in K$ the point $p$ lies off $\gamma_k^\ast\subseteq\Gamma^\ast$, so [L4] provides a continuous logarithm $\lambda_k$ of $\gamma_k-p$ along $\gamma_k$; finitely many such choices are made, which is legitimate in ZF by [L9]. Likewise [L6] and [L9] provide, for each $q\in Q$, a complex number $\mu(q)$ with $\exp(\mu(q))=q-p$. [given, L4, L6, L9]

2.1 By [L2] and [L3], $n(\Gamma,p)=\frac1{2\pi i}\sum_{k\in K}m_k\bigl(\lambda_k(b_k)-\lambda_k(a_k)\bigr)$. [step 1.2, L2, L3]

2.2 Fix $k\in K$. Since $\exp(\lambda_k(a_k))=\gamma_k(a_k)-p=\exp(\mu(\gamma_k(a_k)))$ and similarly at $b_k$, [L5] gives integers $u_k,v_k$ with $\lambda_k(a_k)=\mu(\gamma_k(a_k))+2\pi iu_k$ and $\lambda_k(b_k)=\mu(\gamma_k(b_k))+2\pi iv_k$; hence $\lambda_k(b_k)-\lambda_k(a_k)=\mu(\gamma_k(b_k))-\mu(\gamma_k(a_k))+2\pi i(v_k-u_k)$. [step 1.1, step 1.2, L5]

3.1 Substituting step 2.2 into step 2.1 and using [L7], one gets $n(\Gamma,p)=\frac{S}{2\pi i}+\sum_{k\in K}m_k(v_k-u_k)$, where $S=\sum_{k\in K}m_k\mu(\gamma_k(b_k))-\sum_{k\in K}m_k\mu(\gamma_k(a_k))$. The second summand is an integer by [L10]. [step 2.1, step 2.2, L7, L10]

4.1 The index set $K$ is the disjoint union over $q\in Q$ of $\{k\in K:\gamma_k(b_k)=q\}$, so [L8] and [L7] give $\sum_{k\in K}m_k\mu(\gamma_k(b_k))=\sum_{q\in Q}\mu(q)\sum\{m_k:k\in K,\ \gamma_k(b_k)=q\}$, and likewise with $a_k$ in place of $b_k$; since a term with $m_k=0$ contributes $0$ to the boundary sums of [L1], subtracting the two gives $S=\sum_{q\in Q}\mu(q)\,\partial\Gamma(q)$, which is $0$ because $\Gamma$ is a cycle. [step 1.1, step 3.1, L1, L7, L8]

5.1 Step 4.1 makes $S=0$, so step 3.1 gives $n(\Gamma,p)=\sum_{k\in K}m_k(v_k-u_k)$, an integer by [L10]. For the empty cycle $K$ is empty and the sum of step 2.1 is $0$ by [L8], giving $n(\Gamma,p)=0$. [step 3.1, step 4.1, L8, L10] ∎
