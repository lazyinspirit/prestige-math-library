---
id: thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment
kind: theorem
title: "The integral of $dz/(z-p)$ along a contour is the increment of a continuous logarithm"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-continuous-argument-and-holomorphic-logarithm-branches, thm-continuous-logarithms-exist-along-a-contour, lem-contour-subdivision-into-discs-missing-a-point, lem-logarithm-branch-for-a-linear-factor-on-a-disc, thm-fundamental-theorem-for-complex-line-integrals, thm-invariance-of-complex-line-integrals-under-increasing-reparametrization, prop-reversal-and-concatenation-of-complex-line-integrals, thm-existence-of-complex-line-integrals-on-rectifiable-paths, thm-arc-length-is-additive-over-subintervals, def-complex-primitive, def-complex-contours-reversal-concatenation-and-closedness, def-piecewise-c1-path-operations-and-oriented-reparametrizations, thm-kernel-and-fibres-of-complex-exponential, thm-continuous-image-of-a-connected-space, cor-connected-subsets-of-the-line, thm-induction-principle, lem-finite-sum-laws, lem-continuity-is-local-and-pastes, cor-complex-differentiability-implies-continuity, def-complex-conjugate-real-imaginary-part-and-modulus, def-integers, thm-int-comm-ring, thm-int-ordered-ring, lem-integer-part, thm-algebra-of-complex-derivatives]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Weber, Complex Analysis (Indiana University), Ch. 4 §4.1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $\gamma:[a,b]\to\mathbb C$ be a complex contour, let $p\in\mathbb C$ with
$p\notin\gamma^\ast$, and let $\lambda$ be a continuous logarithm of $\gamma-p$
along $\gamma$ ([[def-continuous-argument-and-holomorphic-logarithm-branches]]).
Then

$$\int_\gamma\frac{dz}{z-p}=\lambda(b)-\lambda(a).$$

The contour need not be closed, and the right-hand side is the same for every
continuous logarithm of $\gamma-p$ along $\gamma$.

## Facts & Assumptions

**Given:** A complex contour $\gamma:[a,b]\to\mathbb C$, a point $p\notin\gamma^\ast$, and a continuous logarithm $\lambda$ of $\gamma-p$ along $\gamma$.

[L1] A continuous logarithm of $\gamma-p$ along $\gamma$ is a continuous $\lambda:[a,b]\to\mathbb C$ with $\exp(\lambda(t))=\gamma(t)-p$ for every $t$ ([[def-continuous-argument-and-holomorphic-logarithm-branches]]).

[L2] For a complex contour $\gamma$ and $p\notin\gamma^\ast$ there is a continuous logarithm of $\gamma-p$ along $\gamma$, and any two of them differ by a constant lying in $2\pi i\mathbb Z$ ([[thm-continuous-logarithms-exist-along-a-contour]]).

[L3] For a complex contour $\gamma$ and $p\notin\gamma^\ast$, the distance $d=\inf\{|w-p|:w\in\gamma^\ast\}$ is positive and some partition $a=t_0<\dots<t_r=b$ satisfies $\gamma([t_i,t_{i+1}])\subseteq D(\gamma(t_i),d)$ and $p\notin D(\gamma(t_i),d)$ for every $i<r$ ([[lem-contour-subdivision-into-discs-missing-a-point]]).

[L4] If $D(c,\rho)$ is an open disc with $\rho>0$ and $p\notin D(c,\rho)$, there is a holomorphic $L$ on $D(c,\rho)$ with $\exp(L(z))=z-p$ there, and every such $L$ satisfies $L'(z)=1/(z-p)$ ([[lem-logarithm-branch-for-a-linear-factor-on-a-disc]]).

[L5] If $F$ is a primitive of a continuous $f$ on an open set containing the trace of a rectifiable contour $\gamma:[a,b]\to\mathbb C$ and $F'=f$ is continuous, then $\int_\gamma f(z)\,dz=F(\gamma(b))-F(\gamma(a))$ ([[thm-fundamental-theorem-for-complex-line-integrals]], [[def-complex-primitive]]).

[L6] If $\phi:[c,d]\to[a,b]$ is a strictly increasing continuous bijection and $f$ is continuous on the trace of the rectifiable $\gamma$, then $\int_{\gamma\circ\phi}f\,dz=\int_\gamma f\,dz$ ([[thm-invariance-of-complex-line-integrals-under-increasing-reparametrization]]).

[L7] For composable rectifiable contours $\alpha,\beta$, $\int_{\alpha*\beta}f\,dz=\int_\alpha f\,dz+\int_\beta f\,dz$ ([[prop-reversal-and-concatenation-of-complex-line-integrals]]); concatenation of $\alpha,\beta:[0,1]\to\mathbb C$ with $\alpha(1)=\beta(0)$ is $(\alpha*\beta)(s)=\alpha(2s)$ for $s\le\tfrac12$ and $\beta(2s-1)$ for $s\ge\tfrac12$ ([[def-complex-contours-reversal-concatenation-and-closedness]], [[def-piecewise-c1-path-operations-and-oriented-reparametrizations]]).

[L8] For a rectifiable $\gamma$ and $f$ continuous on its trace, $\int_\gamma f\,dz$ exists ([[thm-existence-of-complex-line-integrals-on-rectifiable-paths]]).

[L9] Arc length is additive across a split of the parameter interval, and $\gamma$ is rectifiable exactly when both restrictions are ([[thm-arc-length-is-additive-over-subintervals]]).

[L10] $\ker(\exp)=2\pi i\mathbb Z$, and $\exp z=\exp w$ exactly when $z-w\in2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[L11] The continuous image of a connected subset is connected ([[thm-continuous-image-of-a-connected-space]]), and a connected subset of $\mathbb R$ is order-convex ([[cor-connected-subsets-of-the-line]]).

[L12] If a property holds at $0$ and passes from $n$ to $n+1$, it holds for every natural number ([[thm-induction-principle]]).

[L14] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]]), and a function complex differentiable at a point is continuous there ([[cor-complex-differentiability-implies-continuity]]).

[L15] For $z=a+bi$ with $a,b$ real, $\operatorname{Im}z=b$ and $|z|=\sqrt{a^2+b^2}$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[L16] The integers form an ordered commutative ring, and their canonical image in $\mathbb R$ is discrete; hence if $m<n$ then $m+\tfrac12$ lies strictly between them and is not an integer ([[thm-int-comm-ring]], [[thm-int-ordered-ring]], [[lem-integer-part]]).

[L17] Nonvanishing quotients of functions complex differentiable at a point are complex differentiable there ([[thm-algebra-of-complex-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 The function $z\mapsto1/(z-p)$ is defined and continuous on $\gamma^\ast$ by [L14] and [L17], since $p\notin\gamma^\ast$, so the integral $\int_\gamma dz/(z-p)$ exists by [L8]. [given, L8, L14, L17]

1.2 By [L2] any two continuous logarithms of $\gamma-p$ along $\gamma$ differ by a constant, so the increment $\lambda(b)-\lambda(a)$ is the same for all of them. [L2]

1.3 Assume $a<b$. By [L3] fix $d>0$ and a partition $a=t_0<\dots<t_r=b$ with $\gamma([t_i,t_{i+1}])\subseteq D_i:=D(\gamma(t_i),d)$ and $p\notin D_i$ for $i<r$, and by [L4] fix a holomorphic $L_i$ on $D_i$ with $\exp(L_i(z))=z-p$ and $L_i'(z)=1/(z-p)$ there. By [L9] each restriction $\gamma_i:=\gamma|_{[t_i,t_{i+1}]}$ is rectifiable. [given, L3, L4, L9]

2.1 Fix $i<r$. For $t\in[t_i,t_{i+1}]$ both $\exp(\lambda(t))$ and $\exp(L_i(\gamma(t)))$ equal $\gamma(t)-p$, so $\lambda(t)-L_i(\gamma(t))\in2\pi i\mathbb Z$ by [L10]; that difference is continuous by [L14], its scaled imaginary part is a continuous integer-valued real function by [L15], and [L11] with [L16] forces it to be constant on the interval. Hence $\lambda(t_{i+1})-\lambda(t_i)=L_i(\gamma(t_{i+1}))-L_i(\gamma(t_i))$. [given, step 1.3, L1, L10, L11, L14, L15, L16]

2.2 Fix $i<r$. The trace of $\gamma_i$ lies in the open disc $D_i$, on which $L_i$ is a primitive of the continuous function $1/(z-p)$, so [L5] gives $\int_{\gamma_i}dz/(z-p)=L_i(\gamma(t_{i+1}))-L_i(\gamma(t_i))$. [step 1.3, L4, L5, L14, L17]

2.3 For $a\le u<v<w\le b$ the increasing affine reparametrisations $\alpha(s)=\gamma(u+s(v-u))$ and $\beta(s)=\gamma(v+s(w-v))$ of $[0,1]$ satisfy $\alpha(1)=\beta(0)$ and $\alpha*\beta=\gamma|_{[u,w]}\circ\phi$ for the strictly increasing continuous bijection $\phi:[0,1]\to[u,w]$ that is affine on $[0,\tfrac12]$ and on $[\tfrac12,1]$ with $\phi(\tfrac12)=v$, so [L6] and [L7] split the integral at $v$; applying this at $t_1$, then to $\gamma|_{[t_1,b]}$ at $t_2$, and so on, an induction on the number of partition points ([L12]) gives $\int_\gamma dz/(z-p)=\sum_{i<r}\int_{\gamma_i}dz/(z-p)$. [step 1.1, step 1.3, L6, L7, L12]

3.1 Substituting step 2.2 into step 2.3 and then step 2.1, the integral equals $\sum_{i<r}\bigl(\lambda(t_{i+1})-\lambda(t_i)\bigr)$. Expanding this finite sum, every intermediate value $\lambda(t_i)$ with $0<i<r$ appears once with sign $+$ and once with sign $-$, so the sum telescopes to $\lambda(t_r)-\lambda(t_0)=\lambda(b)-\lambda(a)$. [step 2.1, step 2.2, step 2.3, algebra]

4.1 If instead $a=b$, choose $\rho>0$ with $p\notin D(\gamma(a),\rho)$; [L4] gives a holomorphic $L$ on that disc with $L'(z)=1/(z-p)$. The trace of the constant contour $\gamma$ lies in that disc, so [L5] gives $\int_\gamma dz/(z-p)=L(\gamma(a))-L(\gamma(a))=0$, while $\lambda(b)-\lambda(a)=0$. Thus the identity also holds when $a=b$; and by step 1.2 the value asserted is independent of which continuous logarithm is used. [step 1.2, L4, L5] ∎
