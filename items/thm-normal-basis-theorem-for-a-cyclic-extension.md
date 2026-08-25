---
id: thm-normal-basis-theorem-for-a-cyclic-extension
kind: theorem
title: "Every finite cyclic extension has a normal basis"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-normal-basis, thm-dedekind-linear-independence-of-characters, def-annihilator-ideal-and-minimal-polynomial-of-an-endomorphism, thm-minimal-polynomial-is-well-defined-and-controls-annihilators, cor-minimal-polynomial-divides-characteristic-polynomial, thm-cyclic-vector-criterion-by-minimal-and-characteristic-polynomials, def-cyclic-subspace-vector-and-vector-annihilator, prop-vector-annihilator-is-well-defined, thm-cyclic-subspace-power-basis-and-companion-matrix, def-characteristic-polynomial-of-an-operator, lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients, def-polynomial-evaluation-at-an-endomorphism, def-finite-galois-extension-and-galois-group, thm-finite-galois-extension-characterizations, def-linear-basis, def-extension-degree-and-finite-extension]
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
    - title: "P. L. Clark, Field Theory (course notes/monograph), Proposition 8.22"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
    - title: "K. Conrad, Linear Independence of Characters (expository blurb), Theorem 3.7"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/linearchar.pdf"
pipeline_run: null
---

## Statement

Let $K/F$ be a finite Galois extension whose Galois group is cyclic, say
$\operatorname{Gal}(K/F)=\langle\sigma\rangle$ of order $n=[K:F]$. Then $K/F$ has
a normal basis ([[def-normal-basis]]): there is $\alpha\in K$ for which

$$\bigl(\alpha,\ \sigma\alpha,\ \dots,\ \sigma^{n-1}\alpha\bigr)$$

is an ordered $F$-basis of $K$ ([[def-linear-basis]]).

## Facts & Assumptions

**Given:** A finite Galois extension $K/F$ with $\operatorname{Gal}(K/F)=\langle\sigma\rangle$ cyclic of order $n$; by [L6] $\dim_FK=[K:F]=n$, and $\sigma$ is an $F$-linear endomorphism of the $F$-vector space $K$, written $T$ when regarded as such. Evaluation of a polynomial at $T$ is that of [[def-polynomial-evaluation-at-an-endomorphism]].

[L1] Let $G$ be a group and $K$ a field. Every finite family of distinct group homomorphisms $G\to K^{\times}$ is linearly independent over $K$ as a family of functions ([[thm-dedekind-linear-independence-of-characters]]).

[L2] For every endomorphism $T$ of a finite-dimensional $F$-vector space, $\operatorname{Ann}(T)=\{p\in F[x]:p(T)=0\}$ is a nonzero ideal with a unique monic generator $\mu_T$, and $p(T)=0$ if and only if $\mu_T\mid p$ ([[thm-minimal-polynomial-is-well-defined-and-controls-annihilators]], [[def-annihilator-ideal-and-minimal-polynomial-of-an-endomorphism]]).

[L3] For $A\in M_n(F)$ the polynomial $\chi_A$ is monic of degree $n$ ([[lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients]]); $\chi_T$ is defined as $\chi_{[T]_{\mathcal B}}$ for any ordered basis $\mathcal B$ and is independent of it ([[def-characteristic-polynomial-of-an-operator]]).

[L4] $\mu_T\mid\chi_T$ for every endomorphism $T$ of a finite-dimensional vector space ([[cor-minimal-polynomial-divides-characteristic-polynomial]]).

[L5] An endomorphism $T$ of a finite-dimensional vector space has a cyclic vector if and only if $\mu_T=\chi_T$ ([[thm-cyclic-vector-criterion-by-minimal-and-characteristic-polynomials]]); $v$ is a cyclic vector when $Z(v;T)=\{p(T)v:p\in F[x]\}$ is all of $V$ ([[def-cyclic-subspace-vector-and-vector-annihilator]]).

[L6] For a finite Galois extension $K/F$ with $G=\operatorname{Gal}(K/F)$ one has $|G|=[K:F]$ ([[thm-finite-galois-extension-characterizations]], [[def-finite-galois-extension-and-galois-group]], [[def-extension-degree-and-finite-extension]]).

[L7] With $m_{T,v}$ the unique monic generator of $\operatorname{Ann}_T(v)=\{p:p(T)v=0\}$ ([[prop-vector-annihilator-is-well-defined]]) and $d=\deg m_{T,v}$, the list $(v,Tv,\dots,T^{d-1}v)$ is an ordered basis of $Z(v;T)$ ([[thm-cyclic-subspace-power-basis-and-companion-matrix]]).

## Proof

**Proof technique:** direct.

1.1 $T^{n}=\mathrm{id}_K$, because $\sigma$ has order $n$ in $\operatorname{Gal}(K/F)$; so the polynomial $x^{n}-1$ lies in $\operatorname{Ann}(T)$ and $\mu_T\mid x^{n}-1$ by [L2]. In particular $\deg\mu_T\le n$. [L2, given]

1.2 The maps $\mathrm{id},\sigma,\sigma^{2},\dots,\sigma^{n-1}$ are pairwise distinct elements of $\operatorname{Gal}(K/F)$, and their restrictions to $K^{\times}$ are pairwise distinct group homomorphisms $K^{\times}\to K^{\times}$, since two field automorphisms of $K$ agreeing on $K^{\times}$ agree on $K$. [L1, given]

2.1 If $p=\sum_{i<n}a_ix^{i}$ with $a_i\in F$ satisfies $p(T)=0$, then $\sum_{i<n}a_i\sigma^{i}$ is the zero function on $K$, hence on $K^{\times}$, so [L1] applied to the family of step 1.2 forces every $a_i$ to be $0$; thus no nonzero polynomial of degree less than $n$ annihilates $T$, and $\deg\mu_T\ge n$. [step 1.2, L1, L2]

3.1 Combining steps 1.1 and 2.1, $\deg\mu_T=n$, and since $\mu_T$ is monic and divides the monic $x^{n}-1$ of the same degree, $\mu_T=x^{n}-1$. [step 1.1, step 2.1, L2, algebra]

4.1 By [L3] the polynomial $\chi_T$ is monic of degree $\dim_FK=n$, and $\mu_T\mid\chi_T$ by [L4]; two monic polynomials of the same degree, one dividing the other, are equal, so $\mu_T=\chi_T$. [step 3.1, L3, L4, given]

5.1 By [L5] there is a cyclic vector $\alpha\in K$ for $T$, that is $Z(\alpha;T)=K$. [step 4.1, L5]

6.1 Let $d=\deg m_{T,\alpha}$. By [L7] the list $(\alpha,T\alpha,\dots,T^{d-1}\alpha)$ is an ordered basis of $Z(\alpha;T)=K$, which has dimension $n$, so $d=n$ and $(\alpha,\sigma\alpha,\dots,\sigma^{n-1}\alpha)$ is an ordered $F$-basis of $K$. [step 5.1, L6, L7, given]

7.1 Since $\operatorname{Gal}(K/F)=\{\mathrm{id},\sigma,\dots,\sigma^{n-1}\}$, that list is exactly the family of conjugates of $\alpha$, so it is a normal basis. [step 1.2, step 6.1, given] ∎

## Remarks

- **Why the minimal polynomial is forced to be $x^{n}-1$.** The divisibility $\mu_T\mid x^{n}-1$ is cheap; the content is the lower bound on its degree, and that is exactly Dedekind's independence of characters. Without it the minimal polynomial could be a proper divisor of $x^{n}-1$ and no cyclic vector would be available.

- **The hypothesis is on the group, not on the base field.** No finiteness or infiniteness of $F$ is used, so this proof also covers cyclic extensions of infinite fields, for which [[thm-normal-basis-theorem-over-an-infinite-base-field]] gives a second and quite different argument.
