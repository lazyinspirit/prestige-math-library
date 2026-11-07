---
id: thm-mobius-sums-on-arithmetic-progressions
kind: theorem
title: Möbius sums on arithmetic progressions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - thm-mobius-character-sum-zero-free-log-saving
  - thm-dirichlet-character-orthogonality
  - def-number-theoretic-mobius-function
  - thm-fundamental-theorem-of-arithmetic
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - def-real-power
  - thm-real-power-laws
  - thm-logarithm-slower-than-every-positive-power
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Ben Green and Terence Tao, The Möbius function is strongly orthogonal to nilsequences
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p03-p.pdf
      locator: Propositions A.1–A.2, printed p. 565
    - title: Terence Tao, 254A Notes 2, Complex-analytic multiplicative number theory
      url: https://terrytao.wordpress.com/2014/12/09/254a-notes-2-complex-analytic-multiplicative-number-theory/
      locator: Exercise 66, Siegel–Walfisz for the Möbius function
---

## Statement

For every $A>0$ there is an ineffective constant $C_A$ such that, for every
integer $q\geq1$, every $q$-periodic function $f:\mathbb N\to\mathbb C$
with $|f(n)|\leq1$, and real $N\geq2$,
$$\left|\frac1N\sum_{1\leq n\leq N}\mu(n)f(n)\right|\leq C_A q(\log N)^{-A}.$$
In particular, this estimate holds for the indicator of every residue
class $a\pmod q$.

## Statement references

[Green and Tao, Proposition A.2](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p03-p.pdf)

[Tao, 254A Notes 2, Exercise 66](https://terrytao.wordpress.com/2014/12/09/254a-notes-2-complex-analytic-multiplicative-number-theory/)

## Facts & Assumptions

**Given:** A real $A>0$, integer $q\ge1$, a $q$-periodic complex function $f$ with $|f|\le1$, and real $N\ge2$. No choice axiom is assumed.

[F1] The Möbius function is zero on nonsquarefree integers and equals $(-1)^r$ on a product of $r$ distinct primes; unique prime factorization holds ([[def-number-theoretic-mobius-function]], [[thm-fundamental-theorem-of-arithmetic]]).

[F2] The two finite Dirichlet-character orthogonality identities hold on the unit group $G=(\mathbb Z/q\mathbb Z)^\times$. The supplier's proof also gives exactly $\varphi(q)=|G|$ characters, including one character at $q=1$ ([[thm-dirichlet-character-orthogonality]]).

[F3] For every $B>0$ and real $y\ge2$, every character modulo its actual modulus $q$ satisfies $|\sum_{n\le y}\mu(n)\chi(n)|\le C_B\sqrt q\,y(\log y)^{-B}$ with an ineffective constant depending only on $B$, without choice hypotheses ([[thm-mobius-character-sum-zero-free-log-saving]]).

[F4] Natural logarithms obey their order/product/integral laws; positive powers have their usual algebra; and $\log u=o(u^\eta)$ for every $\eta>0$. These give the harmonic-sum bounds and fixed-exponent thresholds below ([[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]], [[def-real-power]], [[thm-real-power-laws]], [[thm-logarithm-slower-than-every-positive-power]]).

## Proof

**Proof technique:** finite squarefree decomposition and character orthogonality.

1.1 By [F1], the normalized correlation is at most $1$. If $q\ge(\log N)^A$, this proves the bound. Otherwise suppose first that $N$ exceeds a threshold $N_A$ depending only on $A$, chosen by [F4] so that $(\log N)^A\le\sqrt N$ and $N/q\ge2$. Thus $q<(\log N)^A\le\sqrt N$. All smaller $N$ will be handled uniformly at the end. [F1, F4, given, construct, algebra]

2.1 For a term with $\mu(n)\ne0$, put $d=(n,q)$ and $m=n/d$. By prime factorization, $d\mid\operatorname{rad}(q)$, $(m,q)=1$ and $\mu(n)=\mu(d)\mu(m)$, where $\operatorname{rad}(q)$ is the product of its distinct prime divisors and $\operatorname{rad}(1)=1$. Conversely, if $d\mid\operatorname{rad}(q)$, $(m,q)=1$ and $\mu(m)\ne0$, then $dm$ is squarefree and $(dm,q)=d$. Hence the decomposition is unique and $$\sum_{n\le N}\mu(n)f(n)=\sum_{d\mid\operatorname{rad}(q)}\mu(d)\sum_{m\le N/d}\mu(m)g_d(m),\qquad g_d(m)=f(dm)\mathbf1_{(m,q)=1}.$$ Each $g_d$ is $q$-periodic: replacing $m$ by $m+q$ preserves both factors. No period $q/d$ is asserted. [F1, step 1.1, algebra]

3.1 Put $h=\varphi(q)\ge1$. For $d\mid\operatorname{rad}(q)$ define $\widehat g_d(\chi)=h^{-1}\sum_{u\in G}g_d(u)\overline{\chi(u)}$. Interchanging finite sums in the two identities of [F2] gives $$g_d(m)=\sum_{\chi\bmod q}\widehat g_d(\chi)\chi(m),\qquad\sum_\chi|\widehat g_d(\chi)|^2=h^{-1}\sum_{u\in G}|g_d(u)|^2\le1.$$ The first identity holds on units by column orthogonality and on nonunits because both sides vanish. There are $h$ coefficients by [F2]. For a nonnegative real list $b_1,\ldots,b_h$, $h\sum b_j^2-(\sum b_j)^2=\sum_{i<j}(b_i-b_j)^2\ge0$; applying this to their absolute values proves $\sum_\chi|\widehat g_d(\chi)|\le\sqrt h\le\sqrt q$. Now $y=N/d\ge N/q\ge2$, so [F3] with exponent $A+1$ and the triangle inequality give $$\left|\sum_{m\le N/d}\mu(m)g_d(m)\right|\le C_A q\frac Nd(\log(N/d))^{-A-1}.$$ As $d\le q\le\sqrt N$, $\log(N/d)\ge\tfrac12\log N$. These are finite Fourier identities, not an imported infinite Parseval theorem. [F2, F3, F4, step 1.1, step 2.1, algebra]

4.1 Sum step 3.1 over $d\mid\operatorname{rad}(q)$ and use $$\sum_{d\mid\operatorname{rad}(q)}\frac1d\le\sum_{1\le d\le q}\frac1d\le1+\log q\le1+A\log\log N.$$ After dividing by $N$, the bound is $C_A q(\log N)^{-A-1}(1+A\log\log N)\le C'_A q(\log N)^{-A}$ on the large-$N$ range. The last ratio is bounded there by [F4]; no positivity claim for it at every $N\ge2$ is needed. For $2\le N\le N_A$, the trivial bound $1$ is at most $(\log N_A)^A q(\log N)^{-A}$ uniformly in $q$ and $f$. This completes all real endpoints and $q=1$; taking $f=\mathbf1_{n\equiv a\pmod q}$ gives every residue class, without a coprimality assumption. The constant is ineffective only through [F3]. [F1, F3, F4, step 1.1, step 2.1, step 3.1, algebra] ∎

## Source notes

Green–Tao Appendix A.2 prints the claim that $m\mapsto f(dm)\mathbf1_{(m,q)=1}$ has period $q/d$. For $q=p$ prime, $d=p$ and $f\equiv1$, this is $\mathbf1_{p\nmid m}$, whose period is $p$, not $1$. The proof above avoids that defect, retaining period $q$ and deriving the finite inversion, Parseval identity and coefficient bound explicitly. Its only analytic input is the independently accepted unqualified character estimate, proved directly by reciprocal finite Perron. The former IK proof route is not imported; its six failed retrieval attempts and root's documented source-drop decision remain preserved in the coverage history.
