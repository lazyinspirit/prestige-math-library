---
id: thm-laplace-approximation-under-unique-interior-maximum
kind: theorem
title: Laplace asymptotic under a unique nondegenerate interior maximum
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - cor-second-order-taylor-expansion-with-the-hessian
  - def-cholesky-factorisation-with-positive-diagonal
  - def-countable-choice
  - def-convex-subset-of-euclidean-space
  - def-ck-and-multi-index-notation-in-several-variables
  - def-euclidean-inner-product
  - def-hessian-and-euclidean-critical-point
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-nonnegative-lebesgue-integral
  - def-measurable-function-between-measurable-spaces
  - lem-closed-subset-of-a-compact-space-is-compact
  - lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets
  - lem-positive-definite-gaussian-integral
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-borel-sets-are-lebesgue-measurable
  - thm-borel-sigma-algebra-of-a-subspace-is-the-trace
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-compact-subset-is-closed-and-bounded
  - thm-composition-of-continuous-functions
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-dominated-convergence
  - thm-exponential-is-strictly-increasing
  - thm-extreme-value-metric
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-multivariable-taylor-formula-with-lagrange-remainder
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited from lem-positive-definite-gaussian-integral and is also used through the cited Lebesgue measure, measurable-set preservation under C^1 diffeomorphisms, and change-of-variables results. No full Axiom of Choice is used."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Laplace method for integrals, PHYS 2400, University of Connecticut"
      url: "https://www.phys.uconn.edu/~rozman/Courses/P2400_23S/downloads/laplace-method-integrals.pdf"
      locator: "Complete 7-page PDF inspected, pp. 1–7; heuristic derivations and endpoint/nonquadratic examples are context, not a proof of this theorem."
    - title: "NIST Digital Library of Mathematical Functions, §2.3(iii), Laplace's Method"
      url: "https://dlmf.nist.gov/2.3"
      locator: "Equations (2.3.13)–(2.3.18) and conditions (a)–(c); its one-dimensional endpoint formulation differs from the local compact multidimensional contract."
    - title: "Francis Bach, Approximating Integrals with Laplace's Method"
      url: "https://francisbach.com/laplace-method/"
      locator: "Opening compact-domain multidimensional formula and its Hessian/Jacobian derivation; this local proof supplies domination and the off-mode bound."
---

## Statement

Let $d\ge1$ and let $K\subseteq\mathbb R^d$ be compact, Lebesgue measurable,
and of positive Lebesgue measure. Let $a:K\to[0,+\infty]$ be measurable with
$\int_K a\,d\lambda_d<\infty$. Let $h:K\to\mathbb R$ be continuous and have
a unique maximizer $\hat\theta$ in the interior of $K$. Assume $a$ is
continuous at $\hat\theta$ with $0<a(\hat\theta)<\infty$. Suppose $h$ is $C^3$ on an
open neighborhood $U\subseteq K$ of $\hat\theta$, and put
$H:=-D^2h(\hat\theta)$ using the Hessian convention of
[[def-hessian-and-euclidean-critical-point]]. Assume $H$ is symmetric positive
definite in the sense of
[[def-cholesky-factorisation-with-positive-diagonal]].
For $x\in\mathbb R^d$ and $r>0$, write
$B(x,r):=\{\theta\in\mathbb R^d:\|\theta-x\|_2<r\}$ and
$\overline B(x,r):=\{\theta\in\mathbb R^d:\|\theta-x\|_2\le r\}$.
Assume there are
$r_0,c,r_1,\eta>0$ such that $\overline B(\hat\theta,r_0)\subseteq U\cap K$,
$$
h(\theta)\le h(\hat\theta)-c\|\theta-\hat\theta\|_2^2
\quad(\theta\in\overline B(\hat\theta,r_0)),
$$
and
$$
h(\theta)\le h(\hat\theta)-\eta
\quad(\theta\in K\setminus B(\hat\theta,r_1)).
$$
All integrals are the nonnegative Lebesgue integral of
[[def-nonnegative-lebesgue-integral]].
For $I_n:=\int_K a(\theta)e^{nh(\theta)}\,d\lambda_d(\theta)$, as the
positive integer $n\to\infty$,
$$
I_n\sim a(\hat\theta)e^{nh(\hat\theta)}\left(\frac{2\pi}{n}\right)^{d/2}\frac{1}{\sqrt{\det H}},
$$
where $u_n\sim v_n$ means $u_n/v_n\to1$. No relative $O(n^{-1})$ remainder
is asserted.

## Facts & Assumptions

**Given:** Countable Choice; the compact measurable set $K$, amplitude $a$, continuous phase $h$, unique interior maximizer $\hat\theta$, open $C^3$ neighborhood $U$, positive-definite Hessian $H$, and the two displayed local and global gap bounds.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function.

[F1] [[def-ck-and-multi-index-notation-in-several-variables]]: $C^3$ means the partial derivatives through order three exist and are continuous on the open neighborhood; [[def-hessian-and-euclidean-critical-point]] defines $D^2h$ as the matrix of second partial derivatives and the gradient as the vector of first partial derivatives.

[F2] [[def-euclidean-inner-product]]: $\|v\|_2^2=v^{\mathsf T}v$ on $\mathbb R^d$; [[def-cholesky-factorisation-with-positive-diagonal]] defines real positive definiteness by symmetry and $v^{\mathsf T}Hv>0$ for every nonzero $v$.

[F3] [[cor-second-order-taylor-expansion-with-the-hessian]]: for a $C^2$ scalar field, $h(\hat\theta+v)=h(\hat\theta)+\nabla h(\hat\theta)\cdot v+\tfrac12v^{\mathsf T}D^2h(\hat\theta)v+o(\|v\|_2^2)$.

[F4] [[thm-multivariable-taylor-formula-with-lagrange-remainder]] and [[def-convex-subset-of-euclidean-space]]: on an open convex neighborhood, a $C^{k+1}$ scalar field equals its Taylor polynomial of degree $k$ plus the stated Lagrange remainder along the segment.

[F5] [[lem-closed-subset-of-a-compact-space-is-compact]] and [[thm-extreme-value-metric]]: a closed subset of compact metric $K$ is compact, and a continuous real-valued function on a nonempty compact metric space attains its maximum.

[F6] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $\|\cdot\|_2$ is a norm and satisfies the triangle inequality, so $x\mapsto\|x-\hat\theta\|_2$ is continuous.

[F7] [[thm-lebesgue-measure-is-a-complete-measure]]: under Countable Choice, $\lambda_d$ is a complete measure on the Lebesgue measurable sets.

[F8] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: under Countable Choice, an affine $C^1$ diffeomorphism changes a nonnegative Lebesgue integral by its absolute Jacobian determinant.

[F9] [[thm-dominated-convergence]]: almost-everywhere convergence under one integrable majorant permits passage of the limit through the Lebesgue integral.

[F10] [[lem-positive-definite-gaussian-integral]]: under Countable Choice, $\int_{\mathbb R^d}e^{-u^{\mathsf T}Hu/2}\,d\lambda_d=(2\pi)^{d/2}/\sqrt{\det H}$ for every real symmetric positive-definite $H$.

[F11] [[thm-exponential-is-strictly-increasing]]: the real exponential is continuous and strictly increasing; for fixed $n$, $t\mapsto nt$ is continuous, so $t\mapsto e^{nt}$ is continuous.

[F12] [[thm-compact-subset-is-closed-and-bounded]], [[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-borel-sigma-algebra-of-a-subspace-is-the-trace]], and [[thm-borel-sets-are-lebesgue-measurable]]: $K$ is closed, its relative Borel sets are traces of ambient Borel sets, and continuous $h$ is Borel on $K$; under Countable Choice these sets are Lebesgue measurable.

[F13] [[def-measurable-function-between-measurable-spaces]], [[lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets]], [[thm-composition-of-continuous-functions]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]], and [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]: measurability is tested by measurable preimages; under Countable Choice, a $C^1$ diffeomorphism and its inverse preserve Lebesgue measurability, so the affine pullback $g_n$ in step 3.3 is measurable; $e^{nh}$ and its product with $a$ are measurable, and extension by zero off a measurable set preserves measurability.

[F14] [[def-nonnegative-lebesgue-integral]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], and [[cor-additivity-of-the-nonnegative-lebesgue-integral]]: the nonnegative integral is the supremum of the simple integrals of its nonnegative simple minorants, is monotone, homogeneous for nonnegative finite scalars, and additive on nonnegative measurable functions.

## Proof

1.1 Put $h_0:=h(\hat\theta)$. By [F12], $h$ is Lebesgue measurable on $K$; by [F11] and [F13], $a e^{nh}$ is nonnegative and measurable for each $n$. Since $h\le h_0$ and the exponential is increasing, $0\le a e^{nh}\le e^{nh_0}a$. Thus [F14] and $\int_Ka<\infty$ show that $I_n$ is finite. [A1, given, F11, F12, F13, F14]

2.1 Choose $0<\delta<\min\{r_0,r_1\}$ small enough that $a(\theta)\le a(\hat\theta)+1$ whenever $\|\theta-\hat\theta\|_2<\delta$; this is possible by continuity of $a$ at $\hat\theta$. Then $\overline B(\hat\theta,\delta)\subseteq U\cap K$, and the local quadratic bound holds there. [given, step 1.1, choose]

3.1 The set $A:=K\cap\{\theta:\delta\le\|\theta-\hat\theta\|_2\le r_1\}$ is closed in $K$ by [F6], hence compact by [F5]. If $A$ is nonempty, [F5] gives a maximizer of $h$ on $A$; it is not $\hat\theta$, so uniqueness of the maximizer on $K$ gives $\sup_A h<h_0$. Combining this gap with the assumed gap on $K\setminus B(\hat\theta,r_1)$ yields some $\eta'>0$ such that $h\le h_0-\eta'$ throughout $K\setminus B(\hat\theta,\delta)$; if $A$ is empty, take $\eta'=\eta$. [given, step 2.1, F5, F6]

3.2 For each coordinate vector $e_j$, the one-variable function $t\mapsto h(\hat\theta+t e_j)$ has a local maximum at $t=0$ and is differentiable there. Its right difference quotients are nonpositive and its left difference quotients are nonnegative, so the derivative is zero. Thus every component of $\nabla h(\hat\theta)$ vanishes. [given, F1, step 1.1, step 2.1]

3.3 Define $F_n(\theta):=a(\theta)e^{n(h(\theta)-h_0)}$ on $K\cap B(\hat\theta,\delta)$ and $F_n(\theta):=0$ elsewhere in $\mathbb R^d$, and put $g_n(u):=F_n(\hat\theta+u/\sqrt n)$. By [F13], $F_n$ and $g_n$ are nonnegative measurable. The affine change of variables $\theta=\hat\theta+u/\sqrt n$ is a $C^1$ diffeomorphism with Jacobian $n^{-d/2}$, so [F8] gives $n^{d/2}e^{-nh_0}\int_{K\cap B(\hat\theta,\delta)}a(\theta)e^{nh(\theta)}\,d\lambda_d(\theta)=\int_{\mathbb R^d}g_n(u)\,d\lambda_d(u)$. Equivalently, $g_n(u)=a(\hat\theta+u/\sqrt n)e^{n[h(\hat\theta+u/\sqrt n)-h_0]}$ when $\|u\|_2<\delta\sqrt n$ and $g_n(u)=0$ otherwise. For all $u,n$, [given] and step 2.1 give $0\le g_n(u)\le(a(\hat\theta)+1)e^{-c\|u\|_2^2}$. This majorant is integrable by [F10] with $H=2cI$, which is positive definite by [F2] and $c>0$. [A1, F2, F8, F10, F13, given, step 2.1, algebra]

4.1 Fix $u\in\mathbb R^d$ and put $v_n:=u/\sqrt n$. Eventually $\|v_n\|_2<\delta/2$. By [F3] and step 3.2, $n(h(\hat\theta+v_n)-h_0)\to-\tfrac12u^{\mathsf T}Hu$, because $n\,o(\|v_n\|_2^2)=o(1)$. For the stronger remainder bound, the finitely many third partial derivatives are bounded on the compact set $K\cap\overline B(\hat\theta,\delta/2)$ by [F5]; apply [F4] on the open convex ball $B(\hat\theta,\delta/2)$ with $k=2$ to get a remainder $O(\|v_n\|_2^3)$, which also vanishes after multiplication by $n$. Continuity of $a$ gives $a(\hat\theta+v_n)\to a(\hat\theta)$. [given, F3, F4, F5, step 2.1, step 3.2]

4.2 On $K\setminus B(\hat\theta,\delta)$, step 3.1 gives $0\le n^{d/2}e^{-nh_0}\int_{K\setminus B(\hat\theta,\delta)}a e^{nh}\,d\lambda_d\le n^{d/2}e^{-n\eta'}\int_K a\,d\lambda_d\longrightarrow0$. Indeed, the ratio of consecutive terms $n^{d/2}e^{-n\eta'}$ tends to $e^{-\eta'}<1$, so the sequence is eventually bounded by a geometric sequence tending to zero. [given, step 1.1, F11, F13, F14, step 3.1, algebra]

5.1 Steps 4.1 and 3.3 show pointwise convergence of $g_n$ to $a(\hat\theta)e^{-u^{\mathsf T}Hu/2}$ and provide an integrable majorant. Applying dominated convergence [F9] and then [F10] yields $n^{d/2}e^{-nh_0}\int_{K\cap B(\hat\theta,\delta)}a e^{nh}\,d\lambda_d\longrightarrow a(\hat\theta)(2\pi)^{d/2}/\sqrt{\det H}$. [A1, step 4.1, step 3.3, F7, F9, F10]

6.1 By [F13] the two indicator-restricted integrands are measurable, and by [F14] the integral over $K$ is the sum of its integrals over $K\cap B(\hat\theta,\delta)$ and $K\setminus B(\hat\theta,\delta)$. Adding the local limit in step 5.1 and the vanishing off-mode term in step 4.2 gives $n^{d/2}e^{-nh_0}I_n\longrightarrow a(\hat\theta)(2\pi)^{d/2}/\sqrt{\det H}>0$. Dividing by this positive limit proves the stated asymptotic equivalence. The argument establishes only the leading relative equivalent; it gives no $O(n^{-1})$ remainder. [A1, given, F10, F13, F14, step 5.1, step 4.2, algebra] ∎

## Remarks

- The compactness and explicit gap assumptions localize the mass. For a noncompact domain, an additional integrable-tail argument is required before applying this proof.
- The proof gives a leading equivalent and does not claim a relative error rate.
