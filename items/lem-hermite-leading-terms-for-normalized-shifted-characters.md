---
id: lem-hermite-leading-terms-for-normalized-shifted-characters
kind: lemma
title: "Hermite leading terms for normalized shifted characters"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
proof_strategy: direct
deps: [def-normalized-shifted-character-basis-elements, lem-shifted-character-multiplication-by-p-k, prop-plancherel-expectations-of-shifted-character-observables, def-monic-probabilists-hermite-polynomials, thm-shifted-character-basis-and-weight-filtration, def-shifted-character-observables-and-profile-moments]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vladimir Ivanov and Grigori Olshanski, Kerov's central limit theorem for the Plancherel measure on Young diagrams, arXiv:math/0304010; survey-paper version in Symmetric Functions 2001, NATO Science Series II 74 (2002), 93-151"
      url: "https://arxiv.org/pdf/math/0304010"
      locator: "Prop. 6.3 and its proof, printed pp. 30-31 (equations (6.6)-(6.7) and the comparison with the Hermite recurrence); Props. 4.11-4.12 and Cor. 4.13, pp. 23-25"
---

## Statement

For every partition $\rho$ with $m_1(\rho)=0$ and every $n\ge\max\{1,|\rho|\}$, the normalized observables satisfy
$$\prod_{k\ge2}H_{m_k(\rho)}\bigl(\eta_k^{(n)}\bigr)=\eta_\rho^{(n)}+R_\rho^{(n)}\qquad\text{on }Y_n,$$
where the remainder admits a finite expansion $R_\rho^{(n)}=\sum_{\sigma,j}c_{\sigma,j}\,n^{-j/2}\eta_\sigma^{(n)}$ with real constants $c_{\sigma,j}$ and $j\ge1$ such that the total degree $|\sigma|_1-j$ is strictly smaller than $|\rho|_1$, and $\sigma$ runs over partitions with $m_1(\sigma)=0$. Consequently
$$\Bigl|\mathbb E_{P_n}\Bigl[\prod_{k\ge2}H_{m_k(\rho)}(\eta_k^{(n)})\Bigr]-\mathbb E_{P_n}[\eta_\rho^{(n)}]\Bigr|=O\bigl(n^{-1/2}\bigr).$$
In particular, if $\rho\ne\emptyset$ then the expectation of the Hermite product is $O(n^{-1/2})$, and if $\rho=\emptyset$ it is $1$.

## Facts & Assumptions

**Given:** a partition $\rho$ with $m_1(\rho)=0$; the observables $\eta_\sigma^{(n)}=p_\sigma^\#/(n^{|\sigma|_1/2}\prod_{k\ge2}k^{m_k(\sigma)/2})$ of [[def-normalized-shifted-character-basis-elements]] and the Hermite polynomials $H_m$ of [[def-monic-probabilists-hermite-polynomials]].

[F1] The degrees $\deg_1(p_\tau^\#)=|\tau|+m_1(\tau)$ form an algebra filtration, and the partial-permutation structure constants count pairs on supports whose union has size $|\nu|\le|\sigma|+|\tau|$ ([[thm-shifted-character-basis-and-weight-filtration]]). The exact identities and the single-cycle top-degree expansion are [[lem-shifted-character-multiplication-by-p-k]]. Its equality-case argument also gives the distinct-size rule: if $\sigma,\tau$ have no common part, then $p_\sigma^\#p_\tau^\#=p_{\sigma\cup\tau}^\#+(\text{lower }\deg_1)$, because an overlap of equal degree must consist of common nontrivial cycles, impossible here. This is Ivanov--Olshanski Corollary 4.13, printed p. 25, whose full proof is the same support-count argument. No arbitrary unique-top-term rule is asserted for $\deg_1$.

[F2] Hermite recurrence: $xH_m(x)=H_{m+1}(x)+mH_{m-1}(x)$ with $H_0=1$, $H_1=x$ ([[def-monic-probabilists-hermite-polynomials]]).

[F3] Expectations: $\mathbb E_{P_n}[\eta_\sigma^{(n)}]=0$ whenever $m_1(\sigma)=0$, $\sigma\ne\emptyset$, and $\mathbb E_{P_n}[\eta_\sigma^{(n)}]=O(1)$ uniformly in $n$ in every case ([[def-normalized-shifted-character-basis-elements]], [[prop-plancherel-expectations-of-shifted-character-observables]]).

## Proof

**Proof technique:** direct.

1.1 Exact removal of ones. For any partition $\tau$ with no ones and $q\ge0$, repeated use of the exact $p_1^\#$ identity in [F1], together with $p_1^\#=n$, gives $p_{\tau\cup1^q}^\#=p_\tau^\#\prod_{h=0}^{q-1}(n-|\tau|-h)$ on every $Y_n$ with $n\ge1$. Dividing by the normalization gives $\eta_{\tau\cup1^q}^{(n)}=\eta_\tau^{(n)}\prod_{h=0}^{q-1}(1-(|\tau|+h)/n)$. Thus every normalized term with ones is a finite polynomial in $1/n$ times the corresponding observable without ones; its constant coefficient is one. These identities also hold below the partition size, because either $p_\tau^\#=0$ or the product contains a zero factor. [F1, given, algebra]

2.1 Negative-degree remainders. Write a term as $c\,n^{a/2}p_\nu^\#$ and assign it degree $a+|\nu|_1$. The algebra-filtration inequality in [F1] makes degrees subadditive under multiplication, and $n=p_1^\#$ has degree two. Each $\eta_\nu$ has degree zero. If a term has negative degree, dividing by the normalization rewrites it as $c' n^{-j/2}\eta_\nu$ with an integer $j\ge1$. Removing its ones by step 1.1 produces finitely many terms $c'' n^{-j'/2}\eta_\tau$ with $j'\ge j\ge1$ and no ones in $\tau$. This rule is algebraic and exact, rather than a pointwise bound on the observables. [F1, step 1.1, algebra]

3.1 A single cycle size. Fix $k\ge2$ and put $f_m=\eta_{(k^m)}$, with $f_0=1$ and $f_1=\eta_k$. Divide the single-cycle multiplication formula of [F1] by $\sqrt{k}^{\,m+1}n^{k(m+1)/2}$. It gives $f_m\eta_k=f_{m+1}+m\eta_{(k^{m-1},1^k)}+r_m$, where $r_m$ has negative degree. Step 1.1 replaces the middle observable by $f_{m-1}$ plus negative-degree terms, so $f_m\eta_k=f_{m+1}+mf_{m-1}+r'_m$ with $r'_m$ of negative degree. Comparing with the recurrence [F2] proves by induction $f_m=H_m(\eta_k)+E_m$, where $E_0=E_1=0$ and $E_{m+1}=\eta_kE_m-mE_{m-1}-r'_m$ has negative degree by step 2.1. In particular the contraction coefficient is $m$; no extra power of $n$ remains. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Combining distinct sizes. Group the parts of $\rho$ into the blocks $(k^{m_k(\rho)})$ with distinct $k$. Successive applications of the distinct-size rule in [F1], with normalization denominators multiplying exactly, give $\prod_k\eta_{(k^{m_k})}=\eta_\rho+(\text{negative-degree terms})$. Substituting step 3.1 and expanding the finite product, every correction includes a negative-degree $E_m$ and other factors of degree at most zero. Therefore $\prod_kH_{m_k}(\eta_k)=\eta_\rho+R_\rho$ with $R_\rho$ of negative degree. Step 2.1 writes it exactly as a finite sum $\sum_{\sigma,j}c_{\sigma,j}n^{-j/2}\eta_\sigma$ with $j\ge1$ and $m_1(\sigma)=0$. The support-union bound in [F1] shows that every partition in a product of cycle observables has size at most the sum of the cycle sizes; every Hermite monomial has that sum at most $|\rho|$. Removing ones only decreases size, so $|\sigma|\le|\rho|$, and hence $|\sigma|_1-j<|\rho|_1$. All constants are independent of $n$. [F1, step 1.1, step 2.1, step 3.1, algebra]

5.1 Expectations. The finite remainder expansion in step 4.1 and [F3] give $|\mathbb E[R_\rho^{(n)}]|=O(n^{-1/2})$: each term has $j\ge1$ and uniformly bounded expectation, indeed zero for nonempty $\sigma$ without ones. For nonempty $\rho$ its own expectation is zero by [F3], so the Hermite-product expectation is $O(n^{-1/2})$. For $\rho=\emptyset$ both empty products equal one and the remainder vanishes. This proves the exact expansion and all stated consequences. [F3, step 4.1, algebra] ∎

