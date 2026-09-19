---
id: def-the-one-dimensional-torus-and-normalized-haar-integral
kind: definition
title: The one-dimensional torus and its normalized Haar integral
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-finite-products-of-compact-spaces, thm-lebesgue-measure-is-the-unique-normalised-translation-invariant-borel-measure, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, def-quotient-topology, lem-integer-part, def-borel-sigma-algebra, def-restriction-of-a-measure, prop-restriction-is-a-measure, thm-borel-sets-are-lebesgue-measurable, thm-lebesgue-measure-of-a-box-of-every-kind, cor-continuous-functions-are-borel-measurable, thm-composition-with-borel-functions-preserves-measurability, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, thm-monotone-convergence-for-the-integral, def-integrable-real-and-complex-functions-and-their-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, def-measure-preserving-transformation-and-system, thm-integrals-are-invariant-under-measure-preserving-maps, def-countable-choice, def-integers, def-measure, def-topological-space, def-continuous-map-top, thm-continuous-preimages-of-borel-sets-are-borel, thm-quotient-universal-property, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-product-measure-on-sigma-finite-spaces, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, def-product-topology, thm-compactness-under-continuous-maps, def-real-numbers, thm-lebesgue-measure-is-a-complete-measure, def-measure-space]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.5, pp.63–64"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — Example 2.66, pp.87–88"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Definition

Throughout, **assume the Axiom of Countable Choice**
([[def-countable-choice]]). Lebesgue measure on $\mathbb R^n$ is written
$\lambda_n$ ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]), and
$\mathbb Z\subseteq\mathbb R$ is the copy of the integers
([[def-integers]]).

**The torus.** Let $q:\mathbb R\to\mathbb T:=\mathbb R/\mathbb Z$ be the
canonical projection of the quotient of the additive group $\mathbb R$ by its
subgroup $\mathbb Z$, carrying the quotient topology
([[def-quotient-topology]], [[def-topological-space]]); we write
$[t]:=q(t)=t+\mathbb Z$. Thus $[s]=[t]$ exactly when $s-t\in\mathbb Z$. The map
$q$ is continuous ([[def-continuous-map-top]]), and $\mathbb T$ is a compact
Hausdorff space homeomorphic to the Euclidean unit circle.

**Fundamental domain.** Every class has exactly one representative in $[0,1)$:
for $t\in\mathbb R$ the integer part $n=\lfloor t\rfloor$ satisfies
$n\le t<n+1$, so $t-n\in[0,1)$ represents $[t]$ ([[lem-integer-part]]); and if
$s,t\in[0,1)$ satisfy $s-t\in\mathbb Z$, then $|s-t|<1$ forces $s=t$.
Consequently the map $[0,1)\to\mathbb T$, $t\mapsto[t]$, is a bijection.

**The measure.** For a Borel set $E\in\mathcal B(\mathbb T)$
([[def-borel-sigma-algebra]]) the preimage $q^{-1}[E]$ is a Borel subset of
$\mathbb R$, because $q$ is continuous
([[thm-continuous-preimages-of-borel-sets-are-borel]]), hence Lebesgue
measurable ([[thm-borel-sets-are-lebesgue-measurable]]). Define

$$m_{\mathbb T}(E):=\lambda_1\bigl(q^{-1}[E]\cap[0,1)\bigr) ,$$

the value at $\mathbb T$ of the restriction of $\lambda_1$ to $[0,1)$
([[def-restriction-of-a-measure]]).

This is a measure on $\mathcal B(\mathbb T)$ by [[prop-restriction-is-a-measure]]:
the assignment $E\mapsto\lambda_1(q^{-1}[E]\cap[0,1))$ is the composition of the
restriction measure with the inverse image along $q$, and inverse images preserve
the empty set, complements and countable unions, while countable additivity is
that of $\lambda_1$. It is a **probability measure**:
$m_{\mathbb T}(\mathbb T)=\lambda_1([0,1))=1$
([[thm-lebesgue-measure-of-a-box-of-every-kind]]). Thus
$(\mathbb T,\mathcal B(\mathbb T),m_{\mathbb T})$ is a probability measure space
([[def-measure-space]], [[def-measure]]).

**The integral.** For a Borel measurable $F:\mathbb T\to[0,+\infty]$, define

$$\int_{\mathbb T}F\,dm_{\mathbb T}:=\int_{[0,1)}F\circ q\,d\lambda_1 .$$

The defining integral is meaningful because $F\circ q$ is Borel
([[thm-composition-with-borel-functions-preserves-measurability]],
[[cor-continuous-functions-are-borel-measurable]]). The assignment agrees with
$E\mapsto m_{\mathbb T}(E)$ on indicators, and it is additive and homogeneous on
finite nonnegative simple functions; for a sequence $0\le F_1\le F_2\le\cdots$
with $F_n\uparrow F$ pointwise the identity passes to the limit because
$F_n\circ q\uparrow F\circ q$ and monotone convergence holds for $\lambda_1$
([[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]],
[[thm-monotone-convergence-for-the-integral]]). For real or complex integrable
$F$ the integral is defined by decomposition into nonnegative parts or into real
and imaginary parts, and it is linear
([[def-integrable-real-and-complex-functions-and-their-integrals]],
[[thm-linearity-of-the-lebesgue-integral-on-l-one]]). In particular
$\int_{\mathbb T}1\,dm_{\mathbb T}=1$, and the same formula holds with $[0,1)$
replaced by any half-open interval $[a,a+1)$ or $(a,a+1]$, by the periodicity of
$q^{-1}[E]$ and the translation invariance of $\lambda_1$
([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

**Translation invariance.** For $y\in\mathbb R$ the map
$\tau_y:\mathbb T\to\mathbb T$, $\tau_y([t]):=[t+y]$, is well defined (if
$s-t\in\mathbb Z$ then $(s+y)-(t+y)\in\mathbb Z$) and continuous, because it is
induced by the continuous map $t\mapsto t+y$ of $\mathbb R$, which is constant on
the fibres of $q$ ([[thm-quotient-universal-property]]). It preserves
$m_{\mathbb T}$: write $y=n+r$ with $n=\lfloor y\rfloor$ and $r\in[0,1)$, put
$A:=q^{-1}[E]$ and use that $A-n=A$ and that
$A\cap[0,1)=\bigl(A\cap[0,r)\bigr)\cup\bigl(A\cap[r,1)\bigr)$ while
$A\cap[r,r+1)=\bigl(A\cap[r,1)\bigr)\cup\bigl((A\cap[0,r))+1\bigr)$, so that

$$m_{\mathbb T}(\tau_y^{-1}E)=\lambda_1\bigl((A-y)\cap[0,1)\bigr)=\lambda_1\bigl(A\cap[r,r+1)\bigr)=\lambda_1\bigl(A\cap[0,1)\bigr)=m_{\mathbb T}(E),$$

the middle equality by translation invariance of $\lambda_1$. Hence
$(\mathbb T,\mathcal B(\mathbb T),m_{\mathbb T},\tau_y)$ is a measure-preserving
system for every $y$, and the published integral-invariance theorem gives
$\int_{\mathbb T}F\circ\tau_y\,dm_{\mathbb T}=\int_{\mathbb T}F\,dm_{\mathbb T}$
for every measurable $F\ge0$ and every integrable $F$
([[def-measure-preserving-transformation-and-system]],
[[thm-integrals-are-invariant-under-measure-preserving-maps]]). This is the
**normalized Haar integral** of $\mathbb T$; abstract Haar theory is not
invoked.

**The finite torus.** For a natural $n\ge1$ put
$\mathbb T^n:=\mathbb R^n/\mathbb Z^n$ with the quotient topology of the
canonical projection $q_n$, and define

$$m_{\mathbb T^n}(E):=\lambda_n\bigl(q_n^{-1}[E]\cap[0,1)^n\bigr),\qquad \int_{\mathbb T^n}F\,dm_{\mathbb T^n}:=\int_{[0,1)^n}F\circ q_n\,d\lambda_n .$$

The same four checks apply with $\mathbb R^n$ and $\mathbb Z^n$ in place of
$\mathbb R$ and $\mathbb Z$: $\mathbb T^n$ is compact Hausdorff, the fundamental
domain is $[0,1)^n$, $m_{\mathbb T^n}$ is a translation-invariant probability
Borel measure, and the integral is represented on $[0,1)^n$ and on every
translate of it. The coordinate projections induce a continuous bijection
$\Phi:\mathbb T^n\to(\mathbb R/\mathbb Z)^n$ by the universal property. Its
domain is compact by the preceding check, while its codomain is a finite
product of Hausdorff spaces and hence Hausdorff; the continuous-bijection
theorem therefore makes $\Phi$ a homeomorphism. Thus $\mathbb T^n$ carries the
finite product topology ([[def-product-topology]],
[[thm-finite-products-of-compact-spaces]],
[[thm-compactness-under-continuous-maps]]), and its characters
$x\mapsto\exp(2\pi i\,k\cdot x)$, $k\in\mathbb Z^n$, are defined on this compact
Hausdorff space. On a product $A_0\times\cdots\times A_{n-1}$ of Borel subsets
of the factors, the defining fundamental-domain formula gives
$m_{\mathbb T^n}(A_0\times\cdots\times A_{n-1})=\prod_jm_{\mathbb T}(A_j)$, so
$m_{\mathbb T^n}$ agrees on every measurable rectangle with the product measure
$m_{\mathbb T}\times\cdots\times m_{\mathbb T}$
([[def-product-measure-on-sigma-finite-spaces]]); both are probability measures,
and uniqueness of the product measure on sigma-finite spaces identifies them
wherever both are defined
([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]).
Fubini's theorem then computes iterated integrals of $L^1$ functions on
$\mathbb T^n$
([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).
