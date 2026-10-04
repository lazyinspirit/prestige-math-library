---
id: cex-divergent-blaschke-sum
kind: counterexample
title: "A divergent Blaschke sum: no nonzero Hardy function has these zeros"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-blaschke-product, thm-blaschke-product-boundary-values-and-zeros, thm-hardy-zero-set-blaschke-condition, def-analytic-hardy-space-disc, thm-zero-divisor-theorem-on-plane-domains, thm-identity-theorem-holomorphic-functions, thm-p-series-rational, lem-complex-conjugation-and-modulus-laws]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.8 and Remark 5.18"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "Lemma 5.17 and the Blaschke condition, printed pp. 35-37: divergent sums $(1-|\\lambda_n|)$ and the failure of the Blaschke product."
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §2"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "printed pp. 51-52: the equivalence between convergence of the Blaschke product and the Blaschke condition on the zero sequence."
---

## Statement refuted

"Every sequence $(a_n)$ of distinct points of $\mathbb D$ without accumulation
point in $\mathbb D$ is the zero sequence of some nonzero function in $H^p(\mathbb D)$,
$0<p\le\infty$, and its formal Blaschke product $\prod_nb_{a_n}$ converges
normally on $\mathbb D$."

## Facts & Assumptions

**Given:** The sequence $a_n:=1-\frac1n$ for $n\ge2$, the normalized Blaschke factors $b_{a_n}$, and the partial products $B_N=\prod_{n=2}^N b_{a_n}$.

[F1] For a nonzero $f\in H^p(\mathbb D)$, $0<p\le\infty$, the zero sequence satisfies the Blaschke condition $\sum_n(1-|a_n|)<+\infty$ ([[thm-hardy-zero-set-blaschke-condition]], [[def-analytic-hardy-space-disc]]).

[F2] Normal convergence of a product on $\mathbb D$ means that for every compact $K\subseteq\mathbb D$ there is $N$ with $b_{a_n}$ zero-free on $K$ for $n\ge N$ and $\sum_{n\ge N}\sup_{K}|1-b_{a_n}|<+\infty$; the zeros of $b_a$ are exactly $a$, and $|b_a(z)|=|a-z|/|1-\overline az|$ for every $a\in\mathbb D$ and $z\in\mathbb D$ ([[def-blaschke-product]], [[thm-blaschke-product-boundary-values-and-zeros]]).

[F3] For $a,z\in\mathbb D$, $1-|b_a(z)|^2=\dfrac{(1-|a|^2)(1-|z|^2)}{|1-\overline az|^2}$; moreover $|1-\overline az|\le1+|z|$ and $1-|b_a|\ge\frac12(1-|b_a|^2)$ because $1+|b_a|\le2$ ([[def-blaschke-product]], [[lem-complex-conjugation-and-modulus-laws]]).

[F4] For rational $p>0$ the $p$-series $\sum_{k\ge1}1/k^{p}$ converges if and only if $p>1$; in particular the harmonic series $\sum_{k\ge1}1/k$ diverges at $p=1$ ([[thm-p-series-rational]]).

[F5] For every set $A\subseteq\Omega$ whose intersection with each compact subset of a plane domain $\Omega$ is finite, and with prescribed positive finite integer multiplicities, there is a nonzero holomorphic function on $\Omega$ with exactly those zeros and multiplicities ([[thm-zero-divisor-theorem-on-plane-domains]], [[thm-identity-theorem-holomorphic-functions]]).

Take the distinct points $a_n=1-\frac1n\in\mathbb D$, $n\ge2$, with assigned multiplicity one; they are discrete in $\mathbb D$ with the only accumulation point $1$ on the boundary.

## Counterexample

1.1 The Blaschke sum diverges. Here $1-|a_n|=1/n$, so by [F4] $\sum_{n\ge2}(1-|a_n|)=\sum_{n\ge2}1/n=+\infty$; thus $(a_n)$ is not a Blaschke sequence. [given, F4, algebra]

1.2 The formal Blaschke product is not normally convergent. Fix a nonempty compact $K\subseteq\mathbb D$ and let $\rho:=\sup_{z\in K}|z|<1$. For every $z\in K$ and $n\ge2$, [F3] gives $$1-|b_{a_n}(z)|^2=\frac{(1-|a_n|^2)(1-|z|^2)}{|1-\overline{a_n}z|^2}\ge\frac{(1/n)(1-\rho^2)}{4},$$ because $1-|a_n|^2=(1-|a_n|)(1+|a_n|)\ge1/n$ and $|1-\overline{a_n}z|^2\le(1+\rho)^2\le4$; hence $1-|b_{a_n}(z)|\ge(1-\rho^2)/(8n)$ uniformly on $K$. Since $|1-b_{a_n}(z)|\ge1-|b_{a_n}(z)|$, the series $\sum_n\sup_K|1-b_{a_n}|$ diverges, so the normal-convergence criterion of [F2] fails. [given, F2, F3, algebra]

2.1 No nonzero $H^p$ function has these zeros. Suppose $f\in H^p(\mathbb D)$, $0<p\le\infty$, is nonzero with zero sequence $(a_n)$. By [F1] its zeros satisfy $\sum_n(1-|a_n|)<+\infty$, contradicting step 1.1. Hence no such $f$ exists, refuting the first half of the quoted statement. [step 1.1, F1]

2.2 The partial products converge locally uniformly to $0$. If $z$ equals one of the prescribed zeros, the products are eventually zero. Otherwise, for fixed $z\in\mathbb D$, using $\log t\le t-1$ for $t>0$ and step 1.2 with $K=\{z\}$, $$\log|B_N(z)|=\sum_{n=2}^N\log|b_{a_n}(z)|\le-\sum_{n=2}^N(1-|b_{a_n}(z)|)\le-\frac{1-|z|^2}{8}\sum_{n=2}^N\frac1n\longrightarrow-\infty,$$ so $B_N(z)\to0$; the bound $\frac{1-|z|^2}{8}\ge\frac{1-\rho^2}{8}$ uniform on a compact $K$ makes the convergence locally uniform on $\mathbb D$. Hence the partial products converge to the zero function, and the formal product has no nonzero holomorphic limit; combined with step 1.2 this refutes the second half of the quoted statement. [step 1.2, F2, F4, algebra]

3.1 A holomorphic function with exactly these zeros nevertheless exists. The set $A=\{a_n:n\ge2\}$ is locally finite in the plane domain $\mathbb D$: for a nonempty compact $K\subseteq\mathbb D$, set $\rho=\max_K|z|<1$; the condition $a_n\in K$ implies $1-1/n\le\rho$, hence $n\le1/(1-\rho)$, so only finitely many terms meet $K$. Thus by [F5] with multiplicity one there is a holomorphic $f$ on $\mathbb D$ whose zeros are exactly the points $a_n$, all simple, and which has no other zeros. By step 2.1 this $f$ lies in no $H^p(\mathbb D)$, $0<p\le\infty$: it exhibits the failure of the Blaschke factorization and of the $H^p$ zero-set condition outside the Blaschke regime. [step 2.1, F5] ∎
