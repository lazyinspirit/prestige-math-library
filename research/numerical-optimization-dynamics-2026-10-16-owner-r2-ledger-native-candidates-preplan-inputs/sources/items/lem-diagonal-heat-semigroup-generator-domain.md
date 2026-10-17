---
id: lem-diagonal-heat-semigroup-generator-domain
kind: lemma
title: "The diagonal heat semigroup has the stated generator domain"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-dirichlet-sine-mode-heat-splitting-model
  - def-square-summable-family-on-an-arbitrary-index-set
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-is-strictly-increasing
  - thm-exponential-addition-formula
  - thm-derivative-of-exponential
  - thm-chain-rule-for-total-derivatives
  - cor-mean-value-theorem
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations, complete 120-page graduate lecture notes"
      url: "https://arxiv.org/pdf/1203.2344"
      locator: "Chapter 2, §One dimension, interval Dirichlet case, printed p. 15: sine modes and their heat eigenvalues; the sequence-space generator-domain argument is supplied here."
---

## Statement

Let $\mathcal H$, $A$, and $E_t$ be as in [[def-dirichlet-sine-mode-heat-splitting-model]]. The maps $E_t$ for $t\ge0$ satisfy $E_0=I$ and $E_{t+s}=E_tE_s$, are contractions in $\ell^2$, and are strongly continuous at $t=0$. Define the generator domain to consist of those $u\in\mathcal H$ for which the right limit
$$\lim_{t\downarrow0}\frac{E_tu-u}{t}$$
exists in $\mathcal H$. This domain is exactly $D(A)=\{u:\sum_{k\ge1}k^4|u_k|^2<\infty\}$, and the limit equals $Au=(-k^2u_k)_{k\ge1}$.

## Facts & Assumptions

**Given:** The sequence space, diagonal operator, and maps in the Statement.

[F1] [[def-dirichlet-sine-mode-heat-splitting-model]] and [[def-square-summable-family-on-an-arbitrary-index-set]]: $u\in\mathcal H$ means $\sum_{k\ge1}|u_k|^2<\infty$, and $(E_tu)_k=e^{-k^2t}u_k$.

[F2] [[thm-exponential-addition-formula]]: $e^{x+y}=e^xe^y$ and $e^0=1$.

[F3] [[cor-exponential-reciprocal-and-positivity]] and [[thm-exponential-is-strictly-increasing]]: $e^x>0$, and $x\le y$ implies $e^x\le e^y$.

[F4] [[thm-derivative-of-exponential]], [[thm-chain-rule-for-total-derivatives]], and [[cor-mean-value-theorem]]: the scalar exponential is differentiable with derivative $e^x$, its compositions obey the chain rule, and a differentiable scalar function on an interval obeys the mean-value theorem.

## Proof

1.1 Coordinatewise, [F2] gives $e^{-k^2(t+s)}=e^{-k^2t}e^{-k^2s}$ and $E_0u=u$, so $E_{t+s}=E_tE_s$. If $t\ge0$, [F3] gives $0<e^{-k^2t}\le1$; hence $\sum_k|(E_tu)_k|^2\le\sum_k|u_k|^2$, proving that $E_t$ maps $\mathcal H$ to itself and is a contraction. [F1, F2, F3, algebra]

1.2 For every $x\ge0$, [F4] applied to $s\mapsto e^{-s}$ on $[0,x]$ gives $0\le1-e^{-x}\le x$: the difference is $xe^{-\xi}$ for some $\xi\in[0,x]$, and [F3] bounds $e^{-\xi}$ by $1$. For $u\in D(A)$, the $k$th coordinate of $(E_tu-u)/t$ tends to $-k^2u_k$ by the chain rule and exponential derivative in [F4]. Its difference from that limit has absolute value at most $2k^2|u_k|$, by the same bound. The squared tail of these differences is therefore at most $4\sum_{k>K}k^4|u_k|^2$, which tends to zero; on every finite head the coordinate limits give norm convergence. Hence the right limit exists in $\mathcal H$ and equals $Au$. [F1, F3, F4, algebra]

2.1 Fix $u\in\mathcal H$ and $\varepsilon>0$. By convergence of its square sum, choose $K$ so that $\sum_{k>K}|u_k|^2<\varepsilon^2/4$. The squared norm of the tail of $E_tu-u$ is at most this tail because $|e^{-k^2t}-1|\le1$ by [F3]; for the finitely many indices $k\le K$, continuity of the exponential at zero from [F4] makes their squared sum less than $\varepsilon^2/4$ for all sufficiently small $t>0$. Thus $\|E_tu-u\|_2<\varepsilon$, proving strong continuity at zero. [F1, F3, F4, step 1.1, algebra, choose]

3.1 Conversely, suppose $(E_tu-u)/t$ converges in $\mathcal H$ to $v$. For each $k$, coordinate evaluation is continuous since $|w_k|\le\|w\|_2$; therefore its limit is $v_k=-k^2u_k$, using [F4]. Since $v\in\mathcal H$, $\sum_k k^4|u_k|^2=\sum_k|v_k|^2<\infty$, so $u\in D(A)$. Together with step 1.2 this identifies the generator domain and its value. [F1, F4, step 1.2, algebra] ∎

