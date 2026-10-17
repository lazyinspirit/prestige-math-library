---
id: thm-scaled-taylor-exponential-action-error-and-work
kind: theorem
title: "Scaled Taylor action has a finite normwise truncation and roundoff certificate"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-scaled-taylor-exponential-action
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - def-phi-functions-by-everywhere-convergent-series
  - lem-exponential-series-of-a-bounded-operator
  - lem-phi-series-converges-absolutely
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Awad H. Al-Mohy and Nicholas J. Higham, Computing the action of the matrix exponential, with an application to exponential integrators"
      url: "https://eprints.maths.manchester.ac.uk/1536/3/paper16.pdf"
      locator: "Section 3, truncated Taylor action (3.3), and Section 4, Lemma 4.1 roundoff analysis, printed pp. 492–499."
    - title: "Nicholas J. Higham and Lijing Lin, Functions of Matrices: A Short Course"
      url: "https://eprints.maths.manchester.ac.uk/2067/01/covered/MIMS_ep2013_73.pdf"
      locator: "Section 7.4, Taylor action and scaling discussion, printed p. 24."
---

## Statement

Let $A\in M_n(\mathbb C)$, $n\ge1$, $v\in\mathbb C^n$, $t\in\mathbb R$, and choose $s\ge1$, $p\ge0$, and rational $R\in[0,1]$ with $|t|\|A\|_2/s\le R$. Put $\delta=t/s$, $P:=\sum_{j=0}^p(\delta A)^j/j!$, and

$$Q_p(R):=\frac{R^{p+1}}{(p+1)!\left(1-R/(p+2)\right)}.$$

Suppose each computed substep $\widehat w_\ell$ has local term and summation certificates $\alpha_{\ell j},\zeta_{\ell j}\ge0$ as in [[alg-scaled-taylor-exponential-action]], and define $d_{\ell0}:=0$, $d_{\ell j}:=(R/j)d_{\ell,j-1}+\alpha_{\ell j}$, and $\epsilon_\ell:=\sum_{j=1}^p(d_{\ell j}+\zeta_{\ell j})$ (empty sums are zero). Then

$$\|e^{tA}v-\widehat w_s\|_2\le s\,3^{s-1}Q_p(R)\|v\|_2+\sum_{\ell=1}^s3^{s-\ell}\epsilon_\ell.$$

If the algorithm has rational upper bound $\rho_v\ge\|v\|_2$ and returns `success`, its reported certificate is valid and at most the requested tolerance. A completed recurrence uses exactly $sp$ calls to $A$. A return before the recurrence makes zero such calls; an early stop during it makes at most $sp$ calls.

## Facts & Assumptions

**Given:** A finite complex matrix $A$, vector $v$, real time $t$, integers $s\ge1,p\ge0$, a rational upper bound $R\in[0,1]$ for $|t|\|A\|_2/s$, and successful local arithmetic certificates as specified by [[alg-scaled-taylor-exponential-action]].

[F1] [[def-phi-functions-by-everywhere-convergent-series]] and [[lem-phi-series-converges-absolutely]]: $e^{tA}=\varphi_0(tA)=\sum_{j\ge0}(tA)^j/j!$.

[F2] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: the operator $2$-norm is submultiplicative and homogeneous.

[F3] [[lem-exponential-series-of-a-bounded-operator]]: the matrix exponential satisfies $e^{tA}e^{sA}=e^{(t+s)A}$.

[F4] [[alg-scaled-taylor-exponential-action]]: each computed Taylor term and partial sum has the supplied local normwise error certificate, and the loop performs one $A$ call for each pair $(\ell,j)$.

## Proof

**Proof technique:** direct.

1.1 Let $R_*:=|\delta|\|A\|_2\le R$. For $j\ge p+1$, consecutive scalar tail terms have ratio $R_* /(j+1)\le R/(p+2)<1$. The tail is therefore bounded by the geometric series beginning at $R^{p+1}/(p+1)!$, giving $\|e^{\delta A}-P\|_2\le\sum_{j\ge p+1}R^j/j!\le Q_p(R)$. [given, F1, F2, algebra]

1.2 For $0\le R\le1$, $e^R=\sum_{j\ge0}R^j/j!\le\sum_{j\ge0}1/j!\le3$: for $j\ge1$, the $j-1$ factors $2,\ldots,j$ in $j!$ are each at least $2$, so $j!\ge2^{j-1}$ and $\sum_{j\ge1}2^{-(j-1)}=2$. Thus $\|e^{\delta A}\|_2\le3$ and $\|P\|_2\le\sum_{j=0}^pR^j/j!\le3$. [F1, F2, algebra]

1.3 Fix substep $\ell$ and let $z^*_{\ell0}:=\widehat w_{\ell-1}$ and $z^*_{\ell j}:=(\delta/j)A z^*_{\ell,j-1}$. The local provider certificate gives $\|z_{\ell j}-z^*_{\ell j}\|_2\le (R/j)\|z_{\ell,j-1}-z^*_{\ell,j-1}\|_2+\alpha_{\ell j}$; induction on $j$ yields the bound $d_{\ell j}$. The partial-sum certificate adds at most $\zeta_{\ell j}$ at stage $j$, so $\|\widehat w_\ell-P\widehat w_{\ell-1}\|_2\le\epsilon_\ell$. [given, F2, F4, algebra, induction]

2.1 Write $X:=e^{\delta A}$. The algebraic telescoping identity $X^s-P^s=\sum_{j=0}^{s-1}X^{s-1-j}(X-P)P^j$ holds by cancellation of adjacent terms. By step 1.2 every summand has norm at most $3^{s-1}Q_p(R)$, so $\|X^sv-P^sv\|_2\le s3^{s-1}Q_p(R)\|v\|_2$. By [F3], $X^s=e^{tA}$. [step 1.1, step 1.2, F2, F3, algebra]

2.2 Set $e_\ell:=\widehat w_\ell-P\widehat w_{\ell-1}$. Repeated substitution gives $\widehat w_s-P^sv=\sum_{\ell=1}^sP^{s-\ell}e_\ell$. By step 1.2, $\|P^{s-\ell}\|_2\le3^{s-\ell}$, hence $\|\widehat w_s-P^sv\|_2\le\sum_{\ell=1}^s3^{s-\ell}\epsilon_\ell$. [step 1.2, step 1.3, algebra]

3.1 The triangle inequality applied to steps 2.1 and 2.2 gives the stated total error certificate. The algorithm declares success only when its outward rational bound is at most the tolerance. [step 2.1, step 2.2, F4, algebra]

4.1 If the recurrence completes, its nested loops make one call to $A$ for each $1\le\ell\le s$ and $1\le j\le p$, giving exactly $sp$ calls, including zero when $p=0$. No other step calls $A$, so a return before the recurrence makes zero calls and an early stop during it makes at most $sp$ calls. [given, F4] ∎

## Remarks

The certificate is for the specified finite matrix, time, budgets, norm bounds, and local arithmetic certificates. It asserts no mesh-uniform estimate from finite-dimensional exactness and returns an inconclusive status if any bound cannot be certified.
