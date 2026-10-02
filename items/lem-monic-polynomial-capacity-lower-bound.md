---
id: lem-monic-polynomial-capacity-lower-bound
kind: lemma
title: "Monic polynomial lower bounds for the Chebyshev constant and capacity"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-chebyshev-constant-compact-set
  - thm-nth-roots-exist
  - def-complex-polynomial-degree-and-monic
  - def-logarithmic-potential-and-energy
  - def-logarithmic-capacity-compact-set
  - def-probability-measure
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - thm-nonnegative-weighted-sums-of-measures
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
  - lem-complex-conjugation-and-modulus-laws
  - prop-reciprocity-inequality-for-logarithmic-potential
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §1"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§1, Lemma 1.14 and Proposition 1.13, printed pp. 172-176"
verification:
  audited: 2026-10-02
---

## Statement

Assume the Axiom of Choice. Let $K\subseteq\mathbb C$ be nonempty and compact.
Then for every monic complex polynomial $p$ of degree $n\ge1$,

$$\|p\|_K\ \ge\ \operatorname{cheb}(K)^n\qquad\text{and}\qquad \|p\|_K\ \ge\ \operatorname{cap}(K)^n,$$

and consequently $\operatorname{cap}(K)\le\operatorname{cheb}(K)$.

The first lower bound and the argument at capacity zero are choice-free; the
Axiom of Choice is used only through the reciprocity inequality
([[prop-reciprocity-inequality-for-logarithmic-potential]]), hence through the
equilibrium theory of [[def-logarithmic-capacity-compact-set]].

## Facts & Assumptions

**Given:** A nonempty compact set $K\subseteq\mathbb C$, a monic complex polynomial $p$ of degree $n\ge1$, the Axiom of Choice, and the conventions of [[def-chebyshev-constant-compact-set]], [[def-complex-polynomial-degree-and-monic]], [[def-logarithmic-potential-and-energy]] and [[def-logarithmic-capacity-compact-set]].

[F1] For nonempty compact $K$, $\|p\|_K=\sup_{z\in K}|p(z)|\in[0,\infty)$ is finite and attained, and for every integer $n\ge1$ the number $t_n(K)=\inf\{\|q\|_K:q\text{ monic of degree }n\}$ is a real number with $0\le t_n(K)<\infty$; the Chebyshev constant is $\operatorname{cheb}(K)=\inf_{n\ge1}t_n(K)^{1/n}\in[0,\infty)$ with nonnegative $n$-th roots, and $\operatorname{cheb}(\varnothing)=0$ ([[def-chebyshev-constant-compact-set]], [[thm-nth-roots-exist]]).

[F2] A monic polynomial of degree $n$ has leading coefficient $1$; if $p$ is monic of degree $n$ then $p$ belongs to the class whose infimum defines $t_n(K)$ ([[def-complex-polynomial-degree-and-monic]], [[def-chebyshev-constant-compact-set]]).

[F3] A polynomial $f$ of degree $n\ge1$ factors as $f(x)=c\prod_{j=1}^r(x-\alpha_j)^{m_j}$ with distinct roots $\alpha_j$, positive multiplicities $m_j$ summing to $n$, and $c$ its leading coefficient; equivalently $f$ has exactly $n$ roots counted with multiplicity ([[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]).

[F4] For points $\alpha_1,\dots,\alpha_n\in\mathbb C$ the Dirac measures $\delta_{\alpha_j}$ are Borel probability measures ([[prop-dirac-measure-is-a-probability-measure]], [[def-dirac-measure]]), finite nonnegative weighted sums of measures are measures ([[thm-nonnegative-weighted-sums-of-measures]]), and $\nu=\frac1n\sum_{j=1}^n\delta_{\alpha_j}$ is thus a Borel probability measure carried by the finite set $\{\alpha_1,\dots,\alpha_n\}$, which is compact ([[def-probability-measure]]).

[F5] For a finite positive Borel measure $\nu$ of compact support, $U^\nu(z)=\int_{\mathbb C}k(z,w)\,d\nu(w)$ with $k(z,w)=\log\frac1{|z-w|}$ and diagonal value $+\infty$ ([[def-logarithmic-potential-and-energy]]).

[F6] For nonempty compact $F$, $V_F=\inf_{\mu\in P(F)}I(\mu)\in(-\infty,+\infty]$ and $\operatorname{cap}(F)=\exp(-V_F)$ when $V_F<+\infty$, while $\operatorname{cap}(F)=0$ when $V_F=+\infty$; in particular $\operatorname{cap}(K)>0$ is equivalent to $V_K<+\infty$, and then $\operatorname{cap}(K)=\exp(-V_K)$ ([[def-logarithmic-capacity-compact-set]]).

[F7] Assume the Axiom of Choice. If $K$ is compact with $\operatorname{cap}(K)>0$ and $\sigma$ is any compactly supported Borel probability measure on $\mathbb C$, then $\inf_{z\in K}U^\sigma(z)\le V_K=\log\frac1{\operatorname{cap}(K)}$ ([[prop-reciprocity-inequality-for-logarithmic-potential]]).

[F8] The modulus is multiplicative: $|\prod_j w_j|=\prod_j|w_j|$ for finitely many complex numbers, and $|w|=0$ exactly when $w=0$ ([[lem-complex-conjugation-and-modulus-laws]]).



## Proof

**Proof technique:** direct.

1.1 By [F1] and [F2] the number $t_n(K)$ is a well-defined real number with $t_n(K)\le\|p\|_K<+\infty$, since $p$ is monic of degree $n$ and all $\|q\|_K$ are nonnegative; and $\operatorname{cheb}(K)=\inf_{m\ge1}t_m(K)^{1/m}$ is a nonnegative real number, so $\operatorname{cheb}(K)\le t_n(K)^{1/n}$. [F1, F2, given]

2.1 **First lower bound.** Since raising preserves the order on nonnegative reals, $\operatorname{cheb}(K)\le t_n(K)^{1/n}$ from step 1.1 gives $\operatorname{cheb}(K)^n\le t_n(K)$; and $t_n(K)\le\|p\|_K$ because $p$ belongs to the class whose infimum is $t_n(K)$; hence $\|p\|_K\ge\operatorname{cheb}(K)^n$, the first asserted inequality. [step 1.1, F1, algebra]

2.2 **Second bound when $\operatorname{cap}(K)=0$.** If $\operatorname{cap}(K)=0$ then $\operatorname{cap}(K)^n=0$ while $\|p\|_K\ge0$, so $\|p\|_K\ge\operatorname{cap}(K)^n$ holds trivially. [step 1.1, F1, algebra]

2.3 **Second bound when $\operatorname{cap}(K)>0$.** By [F3], applied to $p$ of degree $n$ with leading coefficient $1$ (step 1.1 and [F2]), there are distinct roots $\alpha_1,\dots,\alpha_r$ with multiplicities $m_1,\dots,m_r$ summing to $n$ and $p(z)=\prod_{j=1}^r(z-\alpha_j)^{m_j}$; listing the roots with multiplicity as $\alpha_1,\dots,\alpha_n$ and putting $\nu:=\frac1n\sum_{j=1}^n\delta_{\alpha_j}$, [F4] makes $\nu$ a Borel probability measure whose finite support is compact. By [F5] and [F8], $U^\nu(z)=\frac1n\sum_{j=1}^n\log\frac1{|z-\alpha_j|}=\frac1n\log\frac1{|p(z)|}$ for every $z\in\mathbb C$, both sides being $+\infty$ exactly at the roots of $p$. By [F7], whose Axiom of Choice hypothesis is part of the Given, $\inf_{z\in K}U^\nu(z)\le V_K<+\infty$; so for each real $\varepsilon>0$ there is $z_\varepsilon\in K$ with $U^\nu(z_\varepsilon)\le V_K+\varepsilon$, and then $p(z_\varepsilon)\ne0$ and $\log\frac1{|p(z_\varepsilon)|}=nU^\nu(z_\varepsilon)\le n(V_K+\varepsilon)$, that is, $|p(z_\varepsilon)|\ge e^{-n(V_K+\varepsilon)}$. Hence $\|p\|_K\ge e^{-n(V_K+\varepsilon)}$ for every $\varepsilon>0$, and letting $\varepsilon\downarrow0$ gives $\|p\|_K\ge e^{-nV_K}=\operatorname{cap}(K)^n$ by [F6] and algebra. [step 1.1, F2, F3, F4, F5, F6, F7, F8, algebra]

3.1 **Capacity is at most the Chebyshev constant.** If $\operatorname{cap}(K)=0$ then $\operatorname{cap}(K)=0\le\operatorname{cheb}(K)$ by the nonnegativity in [F1]. If $\operatorname{cap}(K)>0$, step 2.3 gives $\|q\|_K\ge\operatorname{cap}(K)^n$ for every monic $q$ of degree $n$, so the infimum satisfies $t_n(K)\ge\operatorname{cap}(K)^n>0$ and, taking nonnegative $n$-th roots, $t_n(K)^{1/n}\ge\operatorname{cap}(K)$ for every $n\ge1$; since $\operatorname{cheb}(K)$ is the infimum of these numbers, $\operatorname{cheb}(K)\ge\operatorname{cap}(K)$. In either case $\operatorname{cap}(K)\le\operatorname{cheb}(K)$, the final assertion. [step 2.2, step 2.3, F1, algebra]

4.1 **Assembly.** Step 2.1 gives the lower bound by $\operatorname{cheb}(K)^n$ and steps 2.2 and 2.3 together give the lower bound by $\operatorname{cap}(K)^n$ for every monic $p$ of degree $n\ge1$; step 3.1 gives $\operatorname{cap}(K)\le\operatorname{cheb}(K)$. The Axiom of Choice is used only in [F7]; the factorisation, the Dirac measures, the weighted sum and all estimates are choice-free. [step 2.1, step 2.2, step 2.3, step 3.1, F7] ∎

## Remarks

**What is used from the equilibrium theory.** The second bound is the point
where the logarithmic potential of the zero-counting measure of $p$ meets the
capacity: the reciprocity inequality
([[prop-reciprocity-inequality-for-logarithmic-potential]]) says that the
potential of *any* compactly supported probability measure, including one
concentrated on the roots of $p$ outside $K$, dips to at most $V_K$ somewhere on
$K$. When $\operatorname{cap}(K)=0$ no equilibrium measure exists and the bound
degenerates to the trivial $\|p\|_K\ge0$.

**Strictness is not asserted.** The lemma only produces lower bounds; equality
$\operatorname{cap}(K)=\operatorname{cheb}(K)$ is the content of
[[thm-logarithmic-capacity-equals-transfinite-diameter]], which combines the
converse inequality obtained from Fekete points with the present lemma. No
uniqueness of an extremal monic polynomial is claimed here.
