---
id: thm-variation-of-constants-formula
kind: theorem
title: "Variation of constants for the inhomogeneous abstract Cauchy problem"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps:
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-laplace-transform-formula-for-the-semigroup-resolvent
  - thm-exponential-bound-for-a-c-zero-semigroup
  - thm-heine-cantor-metric
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - def-dependent-choice
  - def-classical-strong-and-mild-abstract-cauchy-solutions
  - lem-variation-of-constants-integral-is-continuous-for-lone-time-forcing
  - lem-semigroup-generator-commutes-with-orbits-on-its-domain
  - lem-integrated-semigroup-orbits-belong-to-the-generator-domain
  - lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
  - lem-linearity-of-the-bochner-integral
  - lem-bochner-integral-norm-inequality
  - def-bochner-integrable-function
  - thm-generators-are-closed-and-densely-defined
  - lem-average-convergence-of-a-continuous-banach-valued-function
  - def-infinitesimal-generator-of-a-c-zero-semigroup
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.3, Lemma 11.12 and Example 11.3, printed pp. 258-260"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, Universitext, Springer 2011 (complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "Comments on Chapter 7, Theorem 7.10, printed p. 198"
    - title: "Mathew A. Johnson, Math 951 Lecture Notes, Chapter 6: Introduction to Semigroup Methods, University of Kansas (complete 37-page chapter)"
      url: "https://matjohn.ku.edu/sites/matjohn/files/files/Math951Notes_Ch6A.pdf"
      locator: "Chapter 6 Section 3.1, formula (15) and the classical representation, printed pp. 19-20"
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 6, Propositions 6.2-6.4, printed pp. 145-147"
verification:
  precheck: pass
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]). Let $(T(t))_{t\ge0}$ be a strongly continuous semigroup on a Banach space $X$ with generator $A$ ([[def-infinitesimal-generator-of-a-c-zero-semigroup]]), let $T_0>0$, $x\in X$, and let $f:(0,T_0)\to X$ be Bochner integrable with $\int_0^{T_0}\|f(s)\|\,ds<\infty$. Then: (1) (Duhamel rigidity) every classical solution $u$ of $u'=Au+f$, $u(0)=x$ on $[0,T_0]$ satisfies $$u(t)=T(t)x+\int_0^tT(t-s)f(s)\,ds\qquad(0\le t\le T_0).$$ (2) The formula defines a continuous $u$, which is the unique mild solution and the unique integral solution of the problem in the sense of [[def-classical-strong-and-mild-abstract-cauchy-solutions]]: if $v$ is an integral solution, then $v=u$. (3) (classical upgrade) If in addition $x\in D(A)$ and $f$ extends to $[0,T_0]$ either as a $C^1$ curve or in the form $f(t)=f(0)+\int_0^t g(s)\,ds$ for some Bochner integrable $g:(0,T_0)\to X$, then $u$ is a classical solution: $u\in C^1([0,T_0];X)$, $u(t)\in D(A)$ for all $t$, $u(0)=x$ and $u'(t)=Au(t)+f(t)$ pointwise. Mere continuity, or mere Lipschitz continuity on an arbitrary Banach space, is not asserted to give a classical solution. A Lipschitz curve is covered by (3) when it additionally has the displayed Bochner derivative representation.

## Facts & Assumptions

**Given:** Dependent Choice; A strongly continuous semigroup $(T(t))_{t\ge0}$ on a Banach space $X$ with generator $A$ ([[def-infinitesimal-generator-of-a-c-zero-semigroup]]); $T_0>0$, $x\in X$, and a Bochner integrable $f:(0,T_0)\to X$ with $\int_0^{T_0}\|f\|<\infty$; the continuous function $u(t):=T(t)x+\int_0^tT(t-s)f(s)\,ds$ ([[def-classical-strong-and-mild-abstract-cauchy-solutions]], [[lem-variation-of-constants-integral-is-continuous-for-lone-time-forcing]]).

[F1] The formula defines a continuous $X$-valued function on $[0,T_0]$, and the norm inequality, linearity and Bochner framework of the integral apply; the exponential bound gives a local bound $K=\sup_{0\le r\le T_0}\|T(r)\|$ ([[lem-variation-of-constants-integral-is-continuous-for-lone-time-forcing]], [[lem-linearity-of-the-bochner-integral]], [[lem-bochner-integral-norm-inequality]], [[def-bochner-integrable-function]]).

[F2] For $x\in D(A)$ the orbit is differentiable with $T(s)x\in D(A)$, $AT(s)x=T(s)Ax$, and the primitive of an orbit satisfies $A\int_0^tT(s)y\,ds=T(t)y-y$ for every $y\in X$ ([[lem-semigroup-generator-commutes-with-orbits-on-its-domain]], [[lem-integrated-semigroup-orbits-belong-to-the-generator-domain]]); the fundamental theorem of calculus applies to continuous curves with continuous derivative ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]).



[F3] DC supplies the local operator bound by [[thm-exponential-bound-for-a-c-zero-semigroup]]. A continuous graph-valued curve has a graph-valued integral by sampled step approximation and closedness, as proved in [[thm-laplace-transform-formula-for-the-semigroup-resolvent]]. Uniform continuity of a continuous curve on a compact interval is [[thm-heine-cantor-metric]].

## Proof

**Proof technique:** direct: the product rule for $s\mapsto T(t-s)u(s)$ gives Duhamel's formula; the integral solution identity is verified for simple forcing and transferred by closedness; uniqueness follows from a vanishing integral.

1.1 **Duhamel rigidity.** Let $u$ be a classical solution and fix $t\in[0,T_0]$. The curve $g(s):=T(t-s)u(s)$ on $[0,t]$ is differentiable: $g'(s)=T(t-s)u'(s)-AT(t-s)u(s)=T(t-s)\bigl(u'(s)-Au(s)\bigr)=T(t-s)f(s)$, where $u(s)\in D(A)$ and [F2] was used. The classical conditions make $u\prime-Au$ continuous on $[0,T_0]$, so $f$ agrees on the interior with this continuous extension. Its product with $T(t-s)$ is continuous: an increment is bounded by $K\|f(s)-f(s_0)\|+\|(T(t-s)-T(t-s_0))f(s_0)\|$, which tends to zero. Thus $g\prime$ extends continuously to the endpoints, and by the fundamental theorem of calculus [F2], $u(t)=g(t)=g(0)+\int_0^tg'(s)\,ds=T(t)x+\int_0^tT(t-s)f(s)\,ds$. [F2]

1.2 **The formula is continuous and well defined.** By [F1] $u$ is a well-defined continuous function on $[0,T_0]$; this is the mild solution of the problem in the sense of [[def-classical-strong-and-mild-abstract-cauchy-solutions]]. [F1]

1.3 First take $f(s)=x_0\mathbf1_E(s)$. Put $J_r y=\int_0^rT(q)y\,dq$. The needed exchange of vector integrals is justified directly: on the compact triangle $0\le s\le r\le t$, the curve $T(r-s)x_0$ is uniformly continuous. On a fine square grid approximate it uniformly by finitely valued functions sampled at points of the intersecting triangle cells, and multiply by $\mathbf1_E(s)\mathbf1_{s\le r}$. Scalar Fubini ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]) applies to each indicator coefficient. Both iterated integral errors are at most $t^2$ times the uniform approximation error by [F1], so exchange remains valid in the limit. Consequently $\int_0^tu(r)\,dr=J_t x+\int_{E\cap(0,t)}J_{t-s}x_0\,ds$. The latter integral lies in $D(A)$ and its $A$-image is $\int_{E\cap(0,t)}(T(t-s)x_0-x_0)\,ds$: the pair $(J_{t-s}x_0,AJ_{t-s}x_0)$ is continuous by [F2], and sampled step approximations, multiplied by $\mathbf1_E$, have graph-valued integrals; closedness of $A$ retains the limiting pair. Thus $A\int_0^tu=u(t)-x-\int_0^tf$. Finite linearity proves this for every integrable simple $f_n$. For general $f$, take defining simple $f_n$ with $\int\|f-f_n\|\to0$. The local bound $K$ gives $\sup_t\|u_n(t)-u(t)\|\le K\int\|f-f_n\|\to0$, so both coordinates of the graph pair converge: $\int_0^tu_n\to\int_0^tu$ and $A\int_0^tu_n\to u(t)-x-\int_0^tf$. Closedness proves the integral-solution identity for $u$. [F1, F2, F3, given]

1.4 **Uniqueness among integral solutions.** Let $v$ be an integral solution of $u'=Au+f$, $u(0)=x$, and put $d:=v-u$, which is continuous with $\int_0^td\in D(A)$ and satisfies $d(t)=A\int_0^td(r)\,dr$ for all $t$. For fixed $t$ define $h(s):=T(t-s)\int_0^sd(r)\,dr$; then $h$ is differentiable with $h'(s)=T(t-s)\bigl(d(s)-A\int_0^sd\bigr)=0$ by [F2] and the equation for $d$, so $h$ is constant and $\int_0^td(r)\,dr=h(t)-h(0)=0$ (using $T(0)=I$ and the primitive's value $0$ at $s=0$). Hence $\int_0^td=0$ for every $t$; differentiating in $t$ with the fundamental theorem of calculus gives $d(t)=0$ for all $t$, so $v=u$. [F2]

2.1 Assume $x\in D(A)$ and $f(t)=f(0)+\int_0^tg(s)\,ds$ with $g$ Bochner integrable; the $C^1$ case is $g=f\prime$. Write $v(t)=\int_0^tT(r)f(t-r)\,dr$ (reflecting equal partitions under $s=t-r$ gives the same sampled sums, hence the same Bochner integral, for this continuous integrand). Substituting the primitive representation and exchanging the triangle integrals gives $v(t)=\int_0^t[T(r)f(0)+\int_0^rT(r-s)g(s)\,ds]\,dr$. This exchange follows by the same grid argument as step 1.3 for simple $g$, and by $L^1$ approximation for general $g$: both errors are at most $KT_0\int\|g-g_n\|$. The integrand is continuous by [F1] applied to $g$, so the FTC gives $v\prime(t)=T(t)f(0)+\int_0^tT(t-s)g(s)\,ds$, continuously on $[0,T_0]$. Since $T(t)x$ is $C^1$ by [F2], $u=T(\cdot)x+v$ is $C^1$. [F1, F2, step 1.3]

3.1 Since $u$ is an integral solution by [step 1.3], subtraction gives $A\int_t^{t+h}u(r)\,dr=u(t+h)-u(t)-\int_t^{t+h}f(r)\,dr$ for all $0\le t<t+h\le T_0$; at $t=T_0$ use the corresponding backward difference. Divide by $h$: on the right, $\frac{u(t+h)-u(t)}{h}\to u'(t)$ and $\frac1h\int_t^{t+h}f\to f(t)$ by average convergence for the continuous $f$, so the right side tends to $u'(t)-f(t)$; on the left, $\frac1h\int_t^{t+h}u\to u(t)$ by average convergence for the continuous $u$. Since $A$ is closed, the limit pair $\bigl(u(t),u'(t)-f(t)\bigr)$ lies in the graph of $A$; hence $u(t)\in D(A)$ and $Au(t)=u'(t)-f(t)$, that is $u'(t)=Au(t)+f(t)$ pointwise, and $u$ is a classical solution. [F2, step 1.3, step 2.1, given]

4.1 Claims (1), (2) and (3) are [step 1.1], [steps 1.2-1.4] and [steps 2.1, 3.1]; the classical upgrade holds for the stated $C^1$ or Bochner-primitive forcing. [step 1.1, step 1.4, step 3.1] ∎
