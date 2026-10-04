---
id: def-calderon-zygmund-kernel-and-principal-value-operator
kind: definition
title: "Calderón–Zygmund kernels and their associated operators"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-complex-lp-and-euclidean-test-function-conventions, def-locally-integrable-function-on-r-n, def-schwartz-space-and-its-seminorms, def-tempered-distribution]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "§5.3.2, conditions (5.3.4) and (5.3.12) and the setup (5.3.7)–(5.3.9), printed pp. 358–359"
    - title: "Terence Tao, Math 247A Lecture Notes 4"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "§2, Definitions 2.1 and 2.4, printed pp. 6–7"
---

## Definition

Fix an integer $n\ge1$; Lebesgue measure, the Euclidean norm, and the complex
test-function conventions are those of
[[def-complex-lp-and-euclidean-test-function-conventions]]. A **Calderón–Zygmund
kernel** with constants $A_1,A_2$ is a pair consisting of a measurable function
$k:\mathbb R^n\setminus\{0\}\to\mathbb C$ that is integrable on compact subsets of
$\mathbb R^n\setminus\{0\}$ ([[def-locally-integrable-function-on-r-n]]) and finite
numbers $0\le A_1,A_2<\infty$ such that
$$\sup_{R>0}\int_{R\le|x|\le2R}|k(x)|\,dx\le A_1 \qquad (1)$$
and
$$\sup_{y\ne0}\int_{|x|\ge2|y|}|k(x-y)-k(x)|\,dx\le A_2. \qquad (2)$$
Condition (1) is an annular **size condition**: it bounds the $L^1$ mass of every
dyadic annulus $R\le|x|\le2R$ by $A_1$, uniformly in the scale $R>0$. It is an
integral, not a pointwise, bound: the pointwise estimate $|k(x)|\le A|x|^{-n}$
implies (1) with $A_1=A\,|S^{n-1}|\log 2$, and not conversely. Since every compact
subset of $\mathbb R^n\setminus\{0\}$ lies in $\{a\le|x|\le b\}$ with
$0<a\le b<\infty$, and the latter is covered by the finitely many annuli
$2^ja\le|x|\le2^{j+1}a$ for $0\le j\le m$ with $2^ma\ge b$, condition (1) also
implies the local integrability listed above. Condition (2) is **Hörmander's
condition**: an integral smoothness bound at scale $|y|$. It is translation
invariant, in that substituting $x-c$ for $x$ and leaving $y$ unchanged leaves the
value of the integral unchanged, so it may be applied with the origin replaced by
any centre $c$.

A linear map $T:L^2(\mathbb R^n)\to L^2(\mathbb R^n)$ with finite operator norm
$B=\|T\|_{L^2\to L^2}$ is a **Calderón–Zygmund operator with kernel $k$** when for
every compactly supported $f\in L^2(\mathbb R^n)$ the integral
$\int_{\mathbb R^n}k(x-y)f(y)\,dy$ converges absolutely for almost every
$x\notin\operatorname{supp}f$ and satisfies
$$Tf(x)=\int_{\mathbb R^n}k(x-y)f(y)\,dy \qquad\text{for almost every }x\notin\operatorname{supp}f. \qquad (3)$$
Here $\operatorname{supp}f=\operatorname{ess\,supp}f$ is the essential support
defined in [[def-complex-lp-and-euclidean-test-function-conventions]]; compact
support means that this closed set is compact. These conditions depend only on
the almost-everywhere class of $f$. Thus the
only link between the operator and the kernel is the off-support representation
(3): the action of $T$ on $L^1$ functions, on general bounded functions, or off
the diagonal is not presupposed, and $T$ need not be convolution with any
distribution. In the mean-zero applications below the absolute convergence in (3)
is recovered from Hörmander's condition (2) by Tonelli's theorem; it is automatic
whenever $k$ is locally square-integrable on $\mathbb R^n\setminus\{0\}$.

A **principal-value distribution for $k$** is a tempered distribution $W$ on
$\mathbb R^n$ ([[def-tempered-distribution]],
[[def-schwartz-space-and-its-seminorms]]) that agrees with $k$ on
$\mathbb R^n\setminus\{0\}$, in the sense that
$\langle W,\varphi\rangle=\int_{\mathbb R^n}k(x)\varphi(x)\,dx$ for every
$\varphi\in\mathcal S(\mathbb R^n)$ supported in $\mathbb R^n\setminus\{0\}$, and
for which some sequence $\delta_j\downarrow0$ satisfies
$$\langle W,\varphi\rangle=\lim_{j\to\infty}\int_{|x|\ge\delta_j}k(x)\varphi(x)\,dx$$
for every $\varphi\in\mathcal S(\mathbb R^n)$.

Neither the existence of a principal-value distribution nor the existence of any
truncation limit is part of the definition of a Calderón–Zygmund kernel: a kernel
may fail to have one, and the operator $T$ of (3) need not arise from one. Only
the annular size condition (1), Hörmander's condition (2), the $L^2$ bound, and
the off-support representation (3) are assumed. No choice principle is used in
this definition.
