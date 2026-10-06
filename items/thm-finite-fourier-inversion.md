---
id: thm-finite-fourier-inversion
kind: theorem
title: "Finite Fourier inversion for the unitary transform on $\\mathbb Z/N\\mathbb Z$"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
justified_by: []
aliases: []
deps: [def-finite-sum-in-a-commutative-monoid,
       def-function-space,
       def-injection-surjection-bijection,
       def-integers-modulo-n,
       def-rational-power,
       def-unitary-discrete-fourier-transform-on-z-mod-n,
       lem-finite-sum-reindexing-and-fubini,
       lem-orthogonality-of-characters-on-a-finite-cyclic-group,
       lem-rational-power-laws,
       thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse,
       thm-complex-exponential-addition-and-real-extension,
       thm-complex-numbers-form-a-field,
       thm-integers-modulo-n-basic-algebra,
       thm-kernel-and-fibres-of-complex-exponential,
       thm-standard-representatives-modulo-n]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§11, Proposition 11.1 and formula (11.4): the inversion formula for $\\Phi_n$, with inverse (11.2)"
    - title: "MIT 18.310 lecture 23, The Finite Fourier Transform and the Fast Fourier Transform Algorithm (course page)"
      url: "https://math.mit.edu/~djk/18.310/18.310F04/23_finite_fourier.html"
      locator: "heading 3: the inverse transformation by multiplying each $p_k$ by $z^{-sk}$ and summing, giving $a_s=(1/n)\\sum_kp_kz^{-sk}$"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $N\ge1$ and $f\in\mathbb C^{\mathbb Z/N}$. Then for every $x\in\mathbb Z/N\mathbb Z$

$$f(x)=N^{-1/2}\sum_{k=0}^{N-1}(\mathcal F_Nf)(k)\,e^{2\pi ikx/N},$$

the right-hand side being independent of the chosen integer representative of the class $x$. Consequently $\mathcal F_N$ is bijective with inverse the positive-sign transform

$$(\mathcal G_Ng)(x):=N^{-1/2}\sum_{k=0}^{N-1}g(k)\,e^{2\pi ikx/N},\qquad g\in\mathbb C^{\mathbb Z/N},\ x\in\mathbb Z/N\mathbb Z,$$

and there is no convergence, regularity or support hypothesis anywhere.

## Facts & Assumptions

**Given:** A natural number $N\ge1$, a function $f\in\mathbb C^{\mathbb Z/N}$, classes $x,y\in\mathbb Z/N\mathbb Z$, and integers $j,\ell$.

[F1] $(\mathcal F_Nh)(k)=N^{-1/2}\sum_{x=0}^{N-1}h([x]_N)e^{-2\pi ikx/N}$ for every $h\in\mathbb C^{\mathbb Z/N}$ and integer $k$ ([[def-unitary-discrete-fourier-transform-on-z-mod-n]]).

[F2] For all integers $a,b$, $\sum_{q=0}^{N-1}e^{2\pi i(a-b)q/N}=N$ if $a\equiv b\pmod N$ and $0$ otherwise ([[lem-orthogonality-of-characters-on-a-finite-cyclic-group]]).

[F3] Finite sums over $\mathbb Z/N\mathbb Z$: computed from any enumeration, invariant under reindexing along a bijection, additive over disjoint unions, Fubini, and scalars move through them ([[def-finite-sum-in-a-commutative-monoid]], [[lem-finite-sum-reindexing-and-fubini]]); the classes $[0]_N,\dots,[N-1]_N$ enumerate $\mathbb Z/N\mathbb Z$ without repetition ([[thm-standard-representatives-modulo-n]]).

[L1] $\exp(u+v)=\exp u\,\exp v$, and $\exp w=1$ exactly when $w\in2\pi i\mathbb Z$ ([[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]]).

[L2] Classes: $[u]_N=[v]_N$ exactly when $u\equiv v\pmod N$ ([[def-integers-modulo-n]]), and $-[u]_N=[-u]_N$ with $-(-x)=x$ in the abelian group $\mathbb Z/N\mathbb Z$ ([[thm-integers-modulo-n-basic-algebra]]).

[L3] Rational powers: $N^{-1/2}N^{-1/2}=N^{-1}$ and $N^{-1}N=1$ ([[def-rational-power]], [[lem-rational-power-laws]]).

[L4] Field laws of $\mathbb C$ ([[thm-complex-numbers-form-a-field]]); two functions in $\mathbb C^{\mathbb Z/N}$ are equal exactly when they agree at every class ([[def-function-space]]).

[L5] A function with a two-sided inverse is a bijection and its two-sided inverse is unique, written $h^{-1}$ ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

## Proof

**Proof technique:** direct.

1.1 Fix a class $x$ and let $x_0\in\{0,\dots,N-1\}$ be its unique standard representative from [F3]. Substituting [F1] and using the product rule for exponentials [L1], the candidate right-hand side evaluated at $x_0$ equals $N^{-1/2}\sum_{k=0}^{N-1}\Big(N^{-1/2}\sum_{y=0}^{N-1}f([y]_N)e^{-2\pi iky/N}\Big)e^{2\pi ikx_0/N}=N^{-1}\sum_{k=0}^{N-1}\sum_{y=0}^{N-1}f([y]_N)e^{2\pi i(x_0-y)k/N}$, where $N^{-1/2}N^{-1/2}=N^{-1}$ by [L3] and the interchange of the two finite sums is the Fubini rule [F3]. [F1, F3, L1, L3]

1.2 The inner sum over $k$ is $\sum_{k=0}^{N-1}e^{2\pi i(x_0-y)k/N}=N$ when $[x]=[y]_N$ and $0$ otherwise: apply [F2] with $a=x_0$, $b=y$ and summation index $k$; the condition $x_0\equiv y\pmod N$ is exactly $[x]=[y]_N$ by [L2]. [F2, L2]

1.3 Collapsing a sum supported at one class: for any $c:\mathbb Z/N\mathbb Z\to\mathbb C$ and class $a$, $\sum_{y\in\mathbb Z/N}c(y)\cdot\big(N\text{ if }y=a,\ 0\text{ otherwise}\big)=N\,c(a)$. Split the finite index set into $\{a\}$ and its complement by [F3]; the complement contributes $0$ because every term there has the factor $0_{\mathbb C}$, and the single term over $\{a\}$ is the listed value. [F3]

1.4 The right-hand side depends only on the class of $x$: replacing its standard representative $x_0$ by any representative $x_0+jN$ changes the exponent $2\pi ikx_0/N$ to $2\pi ikx_0/N+2\pi ikj$, and $e^{2\pi ikj}=1$ by [L1] because $2\pi ikj\in2\pi i\mathbb Z$; so every summand, and hence the whole sum, is unchanged. [L1, L2]

2.1 Therefore, for every class $x$, the right-hand side of the statement equals $N^{-1}\sum_{y=0}^{N-1}f([y]_N)\big(N\text{ if }[y]_N=[x],\ 0\text{ otherwise}\big)=N^{-1}\cdot N\,f(x)=f(x)$, by steps 1.1, 1.2 and 1.3, the list $[0]_N,\dots,[N-1]_N$ containing one representative of every class by [F3]. This proves the inversion formula, and by step 1.4 the formula is a statement about the class $x$. [F3, L4, step 1.1, step 1.2, step 1.3, step 1.4]

3.1 The transform $\mathcal G_N$ of the statement is well defined by the same periodicity argument as step 1.4 (with the sign of the exponent reversed, which does not affect $e^{2\pi ik}=1$), and the computation of steps 1.1-2.1 with $(f,\mathcal F_N,e^{-2\pi i\cdot/N})$ replaced throughout by $(g,\mathcal G_N,e^{+2\pi i\cdot/N})$ gives $\mathcal F_N(\mathcal G_Ng)(k)=N^{-1}\sum_{y}g([y]_N)\big(N\text{ if }[y]=[k],0\text{ otherwise}\big)=g(k)$ for every class $k$; that is, $\mathcal F_N\circ\mathcal G_N=\mathrm{id}$, while step 2.1 with $g=\mathcal F_Nf$ is $\mathcal G_N\circ\mathcal F_N=\mathrm{id}$. [F1, F2, F3, L1, L2, L3, L4, step 1.1, step 1.2, step 1.3, step 2.1]

4.1 Since $\mathcal F_N\circ\mathcal G_N=\mathrm{id}$ and $\mathcal G_N\circ\mathcal F_N=\mathrm{id}$, the transform $\mathcal F_N$ has a two-sided inverse, namely $\mathcal G_N$; by [L5] $\mathcal F_N$ is bijective and $\mathcal G_N=\mathcal F_N^{-1}$, which is the statement. [L5, step 3.1] ∎

## Remarks

- **The exchange of signs is not a second theorem.** The two compositions in step 3.1 are the same finite computation with the roles of $x$ and $k$ exchanged: both reduce to the orthogonality sum of [F2]. Both are verified because [L5] is stated for a two-sided inverse; no dimension argument and no countability or convergence argument is used.

- **Nothing here is a limit.** All sums are finite, and the only scalar identity used beyond the orthogonality lemma is $N^{-1}N=1$. In particular the inversion formula is exact for every function in $\mathbb C^{\mathbb Z/N}$, including the zero function, and at $N=1$ it reads $f([0])=1^{-1/2}(\mathcal F_1f)(0)\cdot1=f([0])$, since $\mathcal F_1=\mathrm{id}$.
