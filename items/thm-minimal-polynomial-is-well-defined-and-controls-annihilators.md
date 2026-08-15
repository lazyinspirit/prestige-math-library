---
id: thm-minimal-polynomial-is-well-defined-and-controls-annihilators
kind: theorem
title: "The annihilator ideal is nonzero and has a unique monic generator; $p(T)=0$ if and only if $\\mu_T\\mid p$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-annihilator-ideal-and-minimal-polynomial-of-an-endomorphism, cor-polynomial-ring-over-a-field-is-a-pid, thm-cayley-hamilton, lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients, def-characteristic-polynomial-of-an-operator, def-polynomial-degree-leading-coefficient-and-monic]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, The Minimal Polynomial and Some Applications, §4, Theorem 4.4'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/minpolyandappns.pdf'
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §5B'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

For every endomorphism $T$ of a finite-dimensional $F$-vector space, $\operatorname{Ann}(T)$ is a nonzero ideal of $F[x]$ and has a unique monic generator $\mu_T$. For every $p\in F[x]$,

$$p(T)=0\quad\Longleftrightarrow\quad \mu_T\mid p.$$

For the zero space, $\mu_T=1$.

## Facts & Assumptions

**Given:** An endomorphism $T:V\to V$ of a finite-dimensional vector space over a field $F$, and the annihilator set of [[def-annihilator-ideal-and-minimal-polynomial-of-an-endomorphism]].

[L1] For every field $F$, every ideal of $F[x]$ is principal ([[cor-polynomial-ring-over-a-field-is-a-pid]]).

[L2] Cayley–Hamilton states $\chi_T(T)=0$ for every finite-dimensional endomorphism $T$ ([[thm-cayley-hamilton]]).

[L3] For $A\in M_n(F)$ the polynomial $\chi_A$ is monic of degree $n$, and $\chi_A=1$ when $n=0$ ([[lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients]]); and $\chi_T$ is by definition $\chi_{[T]_{\mathcal B}^{\mathcal B}}$ for any ordered basis $\mathcal B$, independently of the choice ([[def-characteristic-polynomial-of-an-operator]]).

[L4] Every nonzero polynomial has a leading coefficient and is monic exactly when that coefficient is $1$ ([[def-polynomial-degree-leading-coefficient-and-monic]]).

## Proof

**Proof technique:** direct.

1.1 The zero polynomial lies in $\operatorname{Ann}(T)$. If $p(T)=q(T)=0$, then $(p-q)(T)=0$; and if $h\in F[x]$ and $p(T)=0$, distributivity of the finite polynomial sums and associativity of composition give $(hp)(T)=h(T)p(T)=0$. Hence $\operatorname{Ann}(T)$ is an ideal. [given, algebra]

1.2 By [L2], $\chi_T\in\operatorname{Ann}(T)$. Fix an ordered basis $\mathcal B$ of the $n$-dimensional $V$; by [L3], $\chi_T=\chi_{[T]_{\mathcal B}^{\mathcal B}}$ with $[T]_{\mathcal B}^{\mathcal B}\in M_n(F)$, so $\chi_T$ is monic of degree $n$ and in particular nonzero. Thus the ideal is nonzero, including when $V=0$, where $\chi_T=1$. [L2, L3]

1.3 If $u$ and $v$ are monic generators of this nonzero ideal, then $u=av$ and $v=bu$ for some polynomials $a,b$. Degrees force $a,b$ to be nonzero constants, and monicity forces both constants to be $1$; hence $u=v$. [L4, algebra]

2.1 By [L1], write $\operatorname{Ann}(T)=(g)$ with $g\ne0$. Multiplying $g$ by the inverse of its leading coefficient gives a monic generator $\mu_T$ by [L4], and step 1.3 shows that this monic generator is unique. [step 1.2, step 1.3, L1, L4, choose]

3.1 Finally, $p(T)=0$ means $p\in\operatorname{Ann}(T)=(\mu_T)$, which is equivalent to $p=\mu_Tq$ for some $q\in F[x]$, that is, $\mu_T\mid p$. When $V=0$, step 1.2 gives $(1)=F[x]$, so its monic generator is $1$. [step 1.2, step 2.1, given] ∎
