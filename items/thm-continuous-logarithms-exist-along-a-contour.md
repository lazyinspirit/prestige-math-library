---
id: thm-continuous-logarithms-exist-along-a-contour
kind: theorem
title: "Every contour missing a point admits a continuous logarithm, unique up to a constant in $2\\pi i\\mathbb{Z}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuous-argument-and-holomorphic-logarithm-branches, lem-contour-subdivision-into-discs-missing-a-point, lem-logarithm-branch-for-a-linear-factor-on-a-disc, thm-kernel-and-fibres-of-complex-exponential, thm-complex-exponential-surjects-onto-the-punctured-plane, thm-complex-exponential-addition-and-real-extension, thm-continuous-image-of-a-connected-space, cor-connected-subsets-of-the-line, thm-induction-principle, lem-continuity-is-local-and-pastes, def-complex-conjugate-real-imaginary-part-and-modulus, cor-complex-differentiability-implies-continuity, def-integers, thm-int-comm-ring, thm-int-ordered-ring, lem-integer-part, def-interval]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.1, Exercise 2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.1"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $\gamma:[a,b]\to\mathbb C$ be a complex contour and let $p\in\mathbb C$ with
$p\notin\gamma^\ast$. Then:

1. there is a continuous logarithm $\lambda$ of $\gamma-p$ along $\gamma$
   ([[def-continuous-argument-and-holomorphic-logarithm-branches]]);
2. if $\lambda_1$ and $\lambda_2$ are two of them, then $\lambda_1-\lambda_2$ is
   a constant function with value in $2\pi i\mathbb Z$;
3. for each $v\in\mathbb C$ with $\exp v=\gamma(a)-p$ there is exactly one
   continuous logarithm $\lambda$ of $\gamma-p$ along $\gamma$ with
   $\lambda(a)=v$.

In particular the increment $\lambda(b)-\lambda(a)$, and the increment
$\theta(b)-\theta(a)$ of the associated continuous argument, are the same for
every choice of $\lambda$. No differentiability of $\gamma$ is used.

## Facts & Assumptions

**Given:** A complex contour $\gamma:[a,b]\to\mathbb C$ and a point $p\notin\gamma^\ast$.

[L1] A continuous logarithm of $\gamma-p$ along $\gamma$ is a continuous $\lambda:[a,b]\to\mathbb C$ with $\exp(\lambda(t))=\gamma(t)-p$ for every $t$; a holomorphic logarithm branch of $z-p$ on an open $V$ missing $p$ is a holomorphic $L$ on $V$ with $\exp(L(z))=z-p$ ([[def-continuous-argument-and-holomorphic-logarithm-branches]]).

[L2] For a complex contour $\gamma$ and $p\notin\gamma^\ast$, the distance $d=\inf\{|w-p|:w\in\gamma^\ast\}$ is positive and there is $\delta>0$ such that every partition $a=t_0<\dots<t_r=b$ of mesh below $\delta$ has $\gamma([t_i,t_{i+1}])\subseteq D(\gamma(t_i),d)$ and $p\notin D(\gamma(t_i),d)$ for every $i<r$; at least one such partition exists ([[lem-contour-subdivision-into-discs-missing-a-point]]).

[L3] If $D(c,\rho)$ is an open disc with $\rho>0$ and $p\notin D(c,\rho)$, there is a holomorphic $L$ on $D(c,\rho)$ with $\exp(L(z))=z-p$ there ([[lem-logarithm-branch-for-a-linear-factor-on-a-disc]]).

[L4] $\ker(\exp)=2\pi i\mathbb Z$, and $\exp z=\exp w$ exactly when $z-w\in2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[L5] The complex exponential maps $\mathbb C$ onto $\mathbb C\setminus\{0\}$ ([[thm-complex-exponential-surjects-onto-the-punctured-plane]]).

[L6] $\exp(z+w)=\exp z\exp w$ for all $z,w\in\mathbb C$ ([[thm-complex-exponential-addition-and-real-extension]]).

[L7] The continuous image of a connected subset is a connected subset ([[thm-continuous-image-of-a-connected-space]]).

[L8] A subset $E\subseteq\mathbb R$ is connected exactly when it is order-convex ([[cor-connected-subsets-of-the-line]]); a closed bounded interval is order-convex ([[def-interval]]).

[L9] If a property holds at $0$ and passes from $n$ to $n+1$, it holds for every natural number ([[thm-induction-principle]]).

[L10] A composite of continuous maps is continuous, and a function whose restrictions to the members of a finite closed cover are continuous is continuous ([[lem-continuity-is-local-and-pastes]]).

[L11] For $z=a+bi$ with $a,b$ real, $\operatorname{Im}z=b$ and $|z|=\sqrt{a^2+b^2}$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[L12] A function complex differentiable at a point is continuous there ([[cor-complex-differentiability-implies-continuity]]).

[L13] The integers form an ordered commutative ring, and their canonical image in $\mathbb R$ is discrete; hence if $m<n$ then $m+\tfrac12$ lies strictly between them and is not an integer ([[thm-int-comm-ring]], [[thm-int-ordered-ring]], [[lem-integer-part]]).

## Proof

**Proof technique:** direct.

1.1 Since $p\notin\gamma^\ast$, the number $\gamma(a)-p$ is nonzero, so [L5] supplies $v\in\mathbb C$ with $\exp v=\gamma(a)-p$; more generally, for every such $v$ the set of complex numbers with that exponential is $v+2\pi i\mathbb Z$ by [L4]. [given, L4, L5]

1.2 If $\lambda_1,\lambda_2$ are continuous logarithms of $\gamma-p$ along $\gamma$, then $\exp(\lambda_1(t))=\exp(\lambda_2(t))$ for every $t$, so $\lambda_1(t)-\lambda_2(t)\in2\pi i\mathbb Z$ by [L4]; the real-valued function $g=\operatorname{Im}(\lambda_1-\lambda_2)/(2\pi)$ is continuous by [L10] and [L11] and takes values in $\mathbb Z$, so by [L7] and [L8] its image is an order-convex subset of $\mathbb R$ inside $\mathbb Z$, which by [L13] can only be a single point. Hence $\lambda_1-\lambda_2$ is a constant in $2\pi i\mathbb Z$, and it is $0$ when $\lambda_1(a)=\lambda_2(a)$. [L1, L4, L7, L8, L10, L11, L13]

1.3 Assume $a<b$. By [L2] there are $d>0$ and a partition $a=t_0<t_1<\dots<t_r=b$ with $\gamma([t_i,t_{i+1}])\subseteq D_i:=D(\gamma(t_i),d)$ and $p\notin D_i$ for every $i<r$. [given, L2]

2.1 By [L3] each $D_i$ carries a holomorphic $L_i$ with $\exp(L_i(z))=z-p$ for $z\in D_i$, and $L_i$ is continuous on $D_i$ by [L12]. [step 1.3, L3, L12]

2.2 Define $c_0:=v$ and, for each $i<r$, define $c_{i+1}:=c_i+L_i(\gamma(t_{i+1}))-L_i(\gamma(t_i))$; this determines the finite list $c_0,\dots,c_r$. Now define $\lambda$ on $[t_i,t_{i+1}]$ by $\lambda(t)=c_i+L_i(\gamma(t))-L_i(\gamma(t_i))$. The two formulas available at a shared point $t_i$ with $0<i<r$ agree, the $i$th giving $c_i$ and the $(i-1)$st giving $c_{i-1}+L_{i-1}(\gamma(t_i))-L_{i-1}(\gamma(t_{i-1}))=c_i$, so $\lambda:[a,b]\to\mathbb C$ is a well-defined function with $\lambda(a)=v$ and $\lambda(t_i)=c_i$ for every $i\le r$. [step 1.1, step 1.3]

3.1 Each restriction $\lambda|_{[t_i,t_{i+1}]}$ is continuous, being a constant plus the composite of $\gamma$ with $L_i$ of step 2.1; the intervals $[t_i,t_{i+1}]$ form a finite closed cover of $[a,b]$, so $\lambda$ is continuous by [L10]. [step 2.1, step 2.2, L10]

3.2 For every $i<r$ and $t\in[t_i,t_{i+1}]$, [L6] gives $\exp(\lambda(t))=\exp(c_i)\exp(L_i(\gamma(t)))\exp(L_i(\gamma(t_i)))^{-1}$, and $\exp(L_i(\gamma(t)))=\gamma(t)-p$ by step 2.1, so $\exp(c_i)=\gamma(t_i)-p$ forces $\exp(\lambda(t))=\gamma(t)-p$ and, at $t=t_{i+1}$, $\exp(c_{i+1})=\gamma(t_{i+1})-p$. Since $\exp(c_0)=\exp(v)=\gamma(a)-p$, an induction on $i$ ([L9]) gives $\exp(\lambda(t))=\gamma(t)-p$ for every $t\in[a,b]$. [step 1.1, step 2.1, step 2.2, L6, L9]

4.1 Steps 3.1 and 3.2 make $\lambda$ a continuous logarithm of $\gamma-p$ along $\gamma$ with $\lambda(a)=v$, which proves claims 1 and 3 when $a<b$; when $a=b$ the constant function with value $v$ does the same, since its only value satisfies $\exp v=\gamma(a)-p$. Claim 2 is step 1.2, which also gives the uniqueness in claim 3, and it makes $\lambda(b)-\lambda(a)$ and its imaginary part independent of the choice by [L1] and [L11]. [step 1.2, step 3.1, step 3.2, L1, L11] ∎
