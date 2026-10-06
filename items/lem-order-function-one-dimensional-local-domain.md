---
id: lem-order-function-one-dimensional-local-domain
kind: lemma
title: "The order function of a one-dimensional Noetherian local domain"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
  - cor-length-is-additive-in-short-exact-sequences
  - def-axiom-of-choice
  - def-composition-series-and-length-of-a-module
  - def-discrete-valuation-ring
  - def-field-of-fractions
  - def-krull-dimension-of-a-ring
  - def-local-ring
  - def-noetherian-ring
  - def-prime-and-maximal-ideals
  - def-zero-divisor-and-integral-domain
  - thm-artinian-ring-characterisation-by-primes
  - thm-artinian-ring-has-finite-length
  - thm-equivalent-characterisations-of-a-dvr
  - thm-noetherian-ring-quotients-and-localisations
  - thm-one-dimensional-regular-local-rings-are-dvrs
  - thm-prime-spectrum-of-a-quotient-bijection
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Sections 42.2-42.6 and 42.17 (order functions and the Key Lemma, tag 0EAX)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Sections 42.17-42.19: order functions of rational functions on one-dimensional Noetherian local domains; the cycle of a rational function"
    - title: "Ravi Vakil, Math 245 Topics in Algebraic Geometry: Introduction to Intersection Theory, Class 2"
      url: "https://math.stanford.edu/~vakil/245/245class2.pdf"
      locator: "Class 2, orders of vanishing along codimension-one points"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), used through the
finite-length suppliers in (1) and the regular-local-to-DVR supplier in (4). Let $A$ be a one-dimensional Noetherian
local domain with maximal ideal $\mathfrak m$ and fraction field
$K=\operatorname{Frac}(A)$ ([[def-local-ring]], [[def-noetherian-ring]],
[[def-krull-dimension-of-a-ring]], [[def-field-of-fractions]]). For a nonzero
$A$-module $M$ of finite length write $\ell_A(M)$ for its length
([[def-composition-series-and-length-of-a-module]]). For $0\ne r\in K$ choose
$a,b\in A\setminus\{0\}$ with $r=a/b$ and set
$$\operatorname{ord}_A(r):=\ell_A(A/aA)-\ell_A(A/bA)\in\mathbb Z.$$
Then:

1. $A/aA$ and $A/bA$ have finite length, so $\operatorname{ord}_A(r)$ is
   defined. For either nonzero element $x=a$ or $b$, if $x$ is a unit then
   $A/xA=0$ has length $0$; otherwise $A/xA$ is Noetherian and its unique
   prime is $\mathfrak m/xA$, so it has dimension $0$ and, by the
   Noetherian dimension-zero finite-length theorem (using AC), finite length.
2. The value $\operatorname{ord}_A(r)$ does not depend on the presentation
   $r=a/b$: if $a/b=c/d$ with $a,b,c,d\ne0$, then $ad=bc$, and the two exact
   sequences $0\to A/aA\xrightarrow{\,d\,}A/adA\to A/dA\to0$ and
   $0\to A/cA\xrightarrow{\,b\,}A/bcA\to A/bA\to0$, together with additivity
   of length in short exact sequences
   ([[cor-length-is-additive-in-short-exact-sequences]]), give
   $\ell(A/aA)-\ell(A/bA)=\ell(A/cA)-\ell(A/dA)$.
3. $\operatorname{ord}_A(rs)=\operatorname{ord}_A(r)+\operatorname{ord}_A(s)$
   and $\operatorname{ord}_A(r^{-1})=-\operatorname{ord}_A(r)$ for
   $r,s\in K^*$; $\operatorname{ord}_A(r)=0$ for $r\in A^*$;
   $\operatorname{ord}_A(r)\ge0$ for $r\in A\setminus\{0\}$, with equality if and only if
   $r\in A^*$.
4. If $A$ is a discrete valuation ring with normalized valuation $v_A$
   ([[def-discrete-valuation-ring]]), then $\operatorname{ord}_A=v_A$; if $A$
   is regular of dimension one, $\operatorname{ord}_A$ is the normalized
   valuation of the discrete valuation ring $A$
   ([[thm-equivalent-characterisations-of-a-dvr]]).

## Facts & Assumptions

**Given:** the Axiom of Choice ([[def-axiom-of-choice]]); a one-dimensional Noetherian local domain $A$ with maximal ideal $\mathfrak m$ and fraction field $K=\operatorname{Frac}(A)$; and elements $a,b,c,d\in A\setminus\{0\}$ together with the quotients $A/aA$, $A/bA$, $A/cA$, $A/dA$, $A/adA=A/bcA$ and $A/rsA$ for $r,s\in A\setminus\{0\}$.

[F1] $A$ is a local ring: it has exactly one maximal ideal, namely $\mathfrak m$; it is Noetherian; it is a domain, so its zero ideal is prime and multiplication by a nonzero element of $A$ is injective; and $\dim A=1$, its Krull dimension as the supremum of lengths of strict chains of prime ideals ([[def-local-ring]], [[def-noetherian-ring]], [[def-zero-divisor-and-integral-domain]], [[def-prime-and-maximal-ideals]], [[def-krull-dimension-of-a-ring]]). Consequently the only prime ideals of $A$ are $(0)$ and $\mathfrak m$.

[F2] For every ideal $I\subseteq A$, contraction along the quotient map induces an inclusion-preserving bijection $\operatorname{Spec}(A/I)\to V(I)$ from the primes of $A/I$ to the primes of $A$ containing $I$, inverse to $\mathfrak p\mapsto\mathfrak p/I$ ([[thm-prime-spectrum-of-a-quotient-bijection]]); and $A/I$ is Noetherian ([[thm-noetherian-ring-quotients-and-localisations]]).

[F3] Assume AC. A commutative Noetherian ring is Artinian if and only if every prime ideal is maximal ([[thm-artinian-ring-characterisation-by-primes]]); a commutative ring is Artinian if and only if its regular module has finite length ([[thm-artinian-ring-has-finite-length]], [[def-composition-series-and-length-of-a-module]]). The submodule lattice of $A/xA$ as an $A$-module is that of the ring $A/xA$ over itself, so the two lengths agree.

[F4] Length is additive in short exact sequences: if $0\to N\to M\to Q\to0$ is exact, then $M$ has finite length if and only if $N$ and $Q$ do, and then $\ell(M)=\ell(N)+\ell(Q)$ ([[cor-length-is-additive-in-short-exact-sequences]]). By [[def-composition-series-and-length-of-a-module]], the zero module has length $0$ and a module of finite length $0$ is zero, so a nonzero module of finite length has length at least $1$.

[F5] A discrete valuation ring $V$ is the valuation ring of a discrete valuation $v$ on its fraction field, and $v:K^\times\to\mathbb Z$ is normalized to be surjective ([[def-discrete-valuation-ring]]); a uniformizer is an element of value $1$. A nonzero Noetherian local ring of dimension one is regular if and only if it is a discrete valuation ring, and the one-dimensional Noetherian local domain $A$ is a discrete valuation ring if and only if it is integrally closed, equivalently a local principal ideal domain with nonzero maximal ideal ([[thm-one-dimensional-regular-local-rings-are-dvrs]], [[thm-equivalent-characterisations-of-a-dvr]]).

## Proof

**Proof technique:** direct; compute the two exact sequences and read off well-definedness, multiplicativity and the valuation comparison.

1.1 Finiteness and the cases $x$ unit or nonunit. Let $x\in A$ be nonzero. If $x$ is a unit, then $A/xA=0$, its spectrum is empty, and its length as an $A$-module is $0$. If $x$ is a nonunit, then $xA\subsetneq A$ and $x\in\mathfrak m$. A prime of $A/xA$ corresponds by [F2] to a prime of $A$ containing $x$; the primes of $A$ are $(0)$ and $\mathfrak m$ by [F1], and $x\notin(0)$ because $x\ne0$ while $A$ is a domain. Thus the only prime of $A/xA$ is $\mathfrak m/xA$, which is proper and maximal since $xA\subseteq\mathfrak m$. By [F2], $A/xA$ is Noetherian; every one of its prime ideals is maximal, so it is Artinian and its regular module has finite length by [F3]. Applying these two cases to $x=a,b,c,d$ and $xy$ for nonzero $x,y$ shows that $\ell_A(A/aA)$ and $\ell_A(A/bA)$, and likewise $\ell_A(A/cA)$, $\ell_A(A/dA)$ and $\ell_A(A/xyA)$, are defined natural numbers. [F1, F2, F3, given]

2.1 Additivity of the length of $A/xyA$. For $x,y\ne0$ the sequence $$0\longrightarrow A/xA\xrightarrow{\ y\ }A/xyA\longrightarrow A/yA\longrightarrow0$$ is exact: multiplication by $y$ is well defined because $y(x)\subseteq(xy)$, it is injective because $y$ is a nonzerodivisor of the domain $A$, its image is the submodule $(y)/(xy)$ of $A/xyA$, and the reduction $A/xyA\to A/yA$ is well defined with kernel exactly $(y)/(xy)$. Since all three modules have finite length by step 1.1, [F4] gives $\ell_A(A/xyA)=\ell_A(A/xA)+\ell_A(A/yA)$. [F1, F4, step 1.1, algebra]

2.2 Values on $A$ and units. If $r=u\in A^\times$, then $\operatorname{ord}_A(u)=\ell_A(A/uA)-\ell_A(A/A)=\ell_A(0)-0=0$ by [F4]. If $r=x\in A\setminus\{0\}$, then $\operatorname{ord}_A(x)=\ell_A(A/xA)-\ell_A(A/A)=\ell_A(A/xA)\ge0$ by [F4], and equality holds if and only if $\ell_A(A/xA)=0$, if and only if $A/xA=0$ by [F4], if and only if $x$ is a unit of $A$. [F4, step 1.1, algebra]

3.1 Independence of the presentation. Suppose $a/b=c/d$ with $a,b,c,d\ne0$; then $ad=bc$ by the usual fraction comparison in the domain $A$. The sequence $0\to A/aA\xrightarrow{d}A/adA\to A/dA\to0$ is exact by the argument of step 2.1, so by additivity $\ell_A(A/adA)=\ell_A(A/aA)+\ell_A(A/dA)$; likewise the sequence $0\to A/cA\xrightarrow{b}A/bcA\to A/bA\to0$ gives $\ell_A(A/bcA)=\ell_A(A/cA)+\ell_A(A/bA)$. Since $A/adA=A/bcA$ as $ad=bc$, subtracting the two identities yields $\ell_A(A/aA)-\ell_A(A/bA)=\ell_A(A/cA)-\ell_A(A/dA)$. Hence $\operatorname{ord}_A(r)$ is independent of the chosen presentation of $r$. [step 2.1, algebra]

3.2 Multiplicativity and inverse. Let $r=a/b$ and $s=c/d$ with $a,b,c,d\ne0$, so that $rs=ac/bd$. By step 2.1, $\ell_A(A/acA)=\ell_A(A/aA)+\ell_A(A/cA)$ and $\ell_A(A/bdA)=\ell_A(A/bA)+\ell_A(A/dA)$. Therefore $$\operatorname{ord}_A(rs)=\ell_A(A/acA)-\ell_A(A/bdA)=\bigl(\ell_A(A/aA)-\ell_A(A/bA)\bigr)+\bigl(\ell_A(A/cA)-\ell_A(A/dA)\bigr)=\operatorname{ord}_A(r)+\operatorname{ord}_A(s).$$ Applying this with $rs=1$ and taking $r=a/b$, $s=b/a$ gives $\operatorname{ord}_A(r^{-1})=\operatorname{ord}_A(b/a)=-\operatorname{ord}_A(a/b)=-\operatorname{ord}_A(r)$. [step 2.1, algebra]

4.1 The discrete valuation ring case. Suppose $A$ is a discrete valuation ring with normalized valuation $v_A$ ([[def-discrete-valuation-ring]]). Choose a uniformizer $\pi$ of $A$, an element with $v_A(\pi)=1$; it exists because $v_A$ is normalized. Every $0\ne x\in A$ has $v_A(x)=n\ge0$ and can be written $x=u\pi^{n}$ with $u\in A^\times$, because $x\pi^{-n}$ has value $0$ and is therefore a unit of $A$. Multiplication by $u$ is an automorphism of $A$ carrying $(x)$ to $(\pi^n)$, so $A/xA\cong A/\pi^nA$, and the chain $A\supsetneq(\pi)\supsetneq\cdots\supsetneq(\pi^n)$ exhibits $A/\pi^nA$ as an iterated extension of the field $A/\pi A$, of length $n$: indeed each successive quotient $(\pi^i)/(\pi^{i+1})$ is isomorphic to $A/\pi A$, a field, hence simple. Thus $\ell_A(A/xA)=n=v_A(x)$ for every $0\ne x\in A$, and for $r=a/b$ with $a,b\ne0$ we get $\operatorname{ord}_A(r)=v_A(a)-v_A(b)=v_A(r)$, since $v_A$ is a group homomorphism $K^\times\to\mathbb Z$ and $v_A(b^{-1})=-v_A(b)$. If $A$ is regular of dimension one, then the same argument applies because $A$ is a discrete valuation ring by [F5]. [F5, step 1.1, algebra] ∎ 