---
id: lem-triangular-borel-maps-scale-euclidean-volume
kind: lemma
title: "Triangular Borel maps scale Euclidean volume"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-lebesgue-measure-under-dilations-and-reflections
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Ben Green, Additive Combinatorics, Lecture 3 §3.7"
      url: "https://people.maths.ox.ac.uk/greenbj/papers/addcomb2009-3.pdf"
      locator: "Lecture 3 §3.7 pp.27-28, triangular map in Theorem 3.3."
    - title: "Brian Conrad and Aaron Landesman, Math 154 Algebraic Number Theory"
      url: "https://people.math.harvard.edu/~landesman/assets/undergraduate-number-theory.pdf"
      locator: "§27 volume of a fundamental domain, pp.139-140, as an independent account of rectangular volume scaling."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge1$, let
$a_1,\dots,a_n>0$ be real numbers, and for $i=1,\dots,n$ let
$\psi_i:\mathbb R^{\,n-i}\to\mathbb R$ be a Borel function, where
$\mathbb R^{\,0}$ is a one-point space so that $\psi_n$ is a constant. Define
the **triangular map**

$$T:\mathbb R^n\longrightarrow\mathbb R^n,\qquad T(x)_i=a_i x_i+\psi_i(x_{i+1},\dots,x_n)\quad (i=1,\dots,n).$$

Then $T$ is a bijection, $T$ and $T^{-1}$ are Borel maps, $T(E)$ is a Borel
set for every Borel $E\subseteq\mathbb R^n$, and

$$\operatorname{vol}\bigl(T(E)\bigr)=\Bigl(\prod_{i=1}^n a_i\Bigr)\operatorname{vol}(E).$$

Equivalently, the inverse triangular map scales volume by
$\bigl(\prod_i a_i\bigr)^{-1}$, and both identities hold with $+\infty$
allowed.

## Facts & Assumptions

**Given:** The Axiom of Choice, an integer $n\ge1$, positive reals
$a_1,\dots,a_n$, Borel functions $\psi_i$ as in the statement, and a Borel set
$E\subseteq\mathbb R^n$. Put $\varphi_i:=\psi_i/a_i$ and
$S_i(x):=x+\varphi_i(x_{i+1},\dots,x_n)e_i$ for $i=1,\dots,n$, and let
$A(x)_i:=a_i x_i$ be the diagonal scaling.

[A1] The Axiom of Choice implies the Axiom of Countable Choice
([[thm-choice-implies-dependent-implies-countable-choice]]), so the
countable-choice hypotheses of [F2] and [F4] are discharged for the whole
argument; no further choice is used.

[F1] Tonelli's theorem: for sigma-finite measure spaces and a product-measurable
$f\ge0$, the integral over the product equals either iterated integral
([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F2] Under the identification $\mathbb R^{m+n}=\mathbb R^m\times\mathbb R^n$,
the product measure $\lambda_m\times\lambda_n$ agrees with Lebesgue measure
$\lambda_{m+n}$ on every Borel set
([[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]).

[F3] Lebesgue measure is translation invariant: $\lambda_n(E+h)=\lambda_n(E)$
for every Lebesgue measurable $E$, and $E$ is measurable if and only if $E+h$
is ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F4] For nonzero real $c$, $\lambda_n(cE)=|c|^n\lambda_n(E)$ for every
Lebesgue measurable $E$, and $E$ is measurable if and only if $cE$ is
([[thm-lebesgue-measure-under-dilations-and-reflections]]).

## Proof

1.1 The factors satisfy $T=A\circ S$ for the shear $S$ given by $S(x)_i=x_i+\varphi_i(x_{i+1},\dots,x_n)$: indeed $A(S(x))_i=a_iS(x)_i=a_ix_i+\psi_i(x_{i+1},\dots,x_n)$. [given]

1.2 For points written as $(u,t,v)\in\mathbb R^{i-1}\times\mathbb R\times\mathbb R^{n-i}$, the shear is $S_i(u,t,v)=(u,t+\varphi_i(v),v)$, a bijection whose inverse $(u,t,v)\mapsto(u,t-\varphi_i(v),v)$ is Borel because $\varphi_i$ is Borel; hence $S_i(F)$ is Borel for every Borel $F$, and for a Borel set $F$ the $t$-section at fixed $(u,v)$ is the translate of the section of $F$ by $\varphi_i(v)$. [given]

1.3 The sections of a Borel set $F\subseteq\mathbb R^{i-1}\times\mathbb R\times\mathbb R^{n-i}$ are Borel sets, because they are the preimages of $F$ under the continuous maps $t\mapsto(u,t,v)$; in particular they are Lebesgue measurable and [F3] applies to them. [given]

1.4 The diagonal scaling factors as $A=D_1\circ\cdots\circ D_n$ with $D_i$ multiplying only the $i$-th coordinate by $a_i$, and each $D_i$ is an invertible linear bijection whose inverse is Borel, so $D_i(F)$ is Borel for every Borel $F$. [given]

2.1 For each $i$ and every Borel $F\subseteq\mathbb R^n$ one has $\operatorname{vol}(S_i(F))=\operatorname{vol}(F)$: writing $f=1_{S_i(F)}$ and using [F2] and [F1], the volume is the iterated integral $\int\int\int f(u,t,v)\,du\,dt\,dv$, whose $t$-integrand at fixed $(u,v)$ equals $1_F(u,t-\varphi_i(v),v)$, and its integral over $t$ equals the $t$-length of the section of $F$ at $(u,v)$ by [F3] and step 1.3; integrating the unchanged section lengths over $(u,v)$ with [F1] returns $\operatorname{vol}(F)$. [F1, F2, F3, step 1.2, step 1.3]

2.2 For each $i$ and every Borel $F\subseteq\mathbb R^n$, with $f=1_{D_i(F)}$ the $t$-integrand at fixed $(u,v)$ equals $1_F(u,t/a_i,v)$, whose integral over $t$ is the length of the section of $F$ scaled by $a_i$ by [F4] in dimension one; the countable-choice hypothesis is supplied by [A1]. [A1, F4, step 1.4]

2.3 The shear $S=S_n\circ\cdots\circ S_1$: applying $S_1,\dots,S_n$ in that order changes the $i$-th coordinate by $\varphi_i(x_{i+1},\dots,x_n)$ while the higher coordinates are still the original ones, and $S$ is a Borel bijection with Borel inverse. [step 1.2, step 1.1]

3.1 Integrating the section identity of step 2.2 over the remaining coordinates with [F1] and [F2] gives $\operatorname{vol}(D_i(F))=a_i\operatorname{vol}(F)$ for every Borel $F$. [F1, F2, step 2.2]

3.2 For every Borel $F$ one has $\operatorname{vol}(S(F))=\operatorname{vol}(F)$ and $S(F)$ Borel, by applying step 2.1 to the factors of the composition in step 2.3. [step 2.1, step 2.3]

4.1 Consequently $T=A\circ S$ satisfies $\operatorname{vol}(T(E))=\operatorname{vol}(A(S(E)))=\bigl(\prod_i a_i\bigr)\operatorname{vol}(S(E))=\bigl(\prod_i a_i\bigr)\operatorname{vol}(E)$, and $T(E)$ is Borel, by steps 1.4, 3.1, 3.2 and the factorization of step 1.1. [step 1.1, step 1.4, step 3.1, step 3.2]

5.1 The backward recursion $x_i=a_i^{-1}(y_i-\psi_i(x_{i+1},\dots,x_n))$, run from $i=n$ down to $i=1$, exhibits $T^{-1}$ as a composition of Borel functions, so $T$ is a bijection with Borel inverse; applying the identity of step 4.1 to $T^{-1}$, which is again a triangular map with coefficients $a_i^{-1}$ and Borel data from the same recursion, gives $\operatorname{vol}(T^{-1}(F))=\bigl(\prod_i a_i\bigr)^{-1}\operatorname{vol}(F)$ for Borel $F$, and $T$ and $T^{-1}$ being Borel in both directions makes each a Borel isomorphism. [step 4.1, algebra] ∎
