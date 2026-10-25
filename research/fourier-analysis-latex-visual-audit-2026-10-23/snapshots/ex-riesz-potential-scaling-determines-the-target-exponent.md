---
id: ex-riesz-potential-scaling-determines-the-target-exponent
kind: example
title: "Dilation determines the Riesz-potential target exponent"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-riesz-potential-of-order-alpha, def-complex-lp-and-euclidean-test-function-conventions, lem-smooth-bump-between-concentric-euclidean-balls, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, def-countable-choice, thm-polar-coordinates-formula-for-lebesgue-measure, lem-euclidean-balls-have-positive-finite-lebesgue-measure, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-integral-over-a-measurable-set, def-integral-of-a-nonnegative-simple-function, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, def-real-power, thm-real-power-laws, def-natural-logarithm, def-ck-euclidean-maps-and-diffeomorphisms, thm-determinant-of-a-triangular-matrix, cor-continuous-functions-are-borel-measurable, def-borel-and-lebesgue-measurable-function-on-rn]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Eleonor Harboure, Spaces of Smooth Functions, remark following Theorem 1, printed p. 2"
      url: "https://congreso.us.es/cidama/activos/cursos/EHarbourefull.pdf"
      locator: "§1, printed p. 2: applying a supposed norm inequality to $f(x)=g(\\lambda x)$ gives $\\lambda^{-\\alpha-n/q}\\le C\\lambda^{-n/p}$ for all $\\lambda>0$, hence $\\alpha+n/q=n/p$."
    - title: "Larry Guth, Hardy–Littlewood–Sobolev Inequality, Proposition 0.1, printed p. 1"
      url: "https://ocw.mit.edu/courses/18-s997-the-polynomial-method-fall-2012/214a7e215cfb9c3bdd3507e528b8db3c_MIT18_S997F12_lec30.pdf"
      locator: "Proposition 0.1: the scaling test on ball indicators forces the exponent relation between $p$ and $q$."
---

## Example

Assume the Axiom of Countable Choice. Fix $n\ge1$ and $0<\alpha<n$. Suppose
that for some exponents $1\le p,q<\infty$ there is a constant $C<\infty$ with
$$\|I_\alpha f\|_q\le C\|f\|_p$$
for every complex $f\in C_c^\infty(\mathbb R^n)$, where $I_\alpha$ is the unit
Riesz potential of [[def-riesz-potential-of-order-alpha]]. Then necessarily
$$1/q=1/p-\alpha/n .$$
For a nonnegative nonzero test function $f$ and its dilates
$f_\lambda(x):=f(\lambda x)$, $\lambda>0$, the two norms scale as
$\|f_\lambda\|_p=\lambda^{-n/p}\|f\|_p$ and
$\|I_\alpha f_\lambda\|_q=\lambda^{-\alpha-n/q}\|I_\alpha f\|_q$, so applying
the same bound at every scale forces the exponent identity. The strict-range
Hardy-Littlewood-Sobolev theorem of this pair is not used: only a hypothetical
uniform bound and the homogeneity of the kernel are used.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $0<\alpha<n$, exponents $1\le p,q<\infty$, and the hypothesis that $\|I_\alpha f\|_q\le C\|f\|_p$ holds for every complex $f\in C_c^\infty(\mathbb R^n)$ with a constant $C$ independent of $f$.

[F1] For measurable complex $f$, $I_\alpha f(x)=\int K_\alpha(x-y)f(y)\,dy$ is defined at exactly those $x$ where $\int K_\alpha(x-y)|f(y)|\,dy<\infty$, with $K_\alpha(z)=|z|^{\alpha-n}$ for $z\neq0$ and $K_\alpha(0)=0$. Changing the assigned value at the diagonal point $y=x$ does not affect the integral.
([[def-riesz-potential-of-order-alpha]])

[F2] Complex $L^p$ classes and their norms for $1\le p<\infty$, the conventions for complex $C_c^\infty(\mathbb R^n)$, and the fact that $x\mapsto\lambda x$ and $x\mapsto\lambda x$ composed with $f$ give again a function of the same class.
([[def-complex-lp-and-euclidean-test-function-conventions]])

[F3] For $0<r<R$ and $n\ge1$ there is a smooth $\rho:\mathbb R^n\to[0,1]$ with $\rho=1$ on $\overline B_r(0)=\overline B(0,r)$ and $\operatorname{supp}\rho\subseteq B_R(0)=B(0,R)$.
([[lem-smooth-bump-between-concentric-euclidean-balls]])

[F4] Under Countable Choice a $C^1$ diffeomorphism $T$ satisfies $\int h(T(x))|\det DT(x)|\,dx=\int h(y)\,dy$ for every nonnegative Lebesgue measurable $h$; the maps $x\mapsto\lambda x$ and $x\mapsto x-z$ are $C^1$ diffeomorphisms of $\mathbb R^n$ with determinants $\lambda^n$ and $1$.
([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-determinant-of-a-triangular-matrix]])

[F5] Polar coordinates express radial integrals against Lebesgue measure, with finite nonzero surface factor: for every nonnegative Borel $h$, $\int_{\mathbb R^n}h\,d\lambda=\int_0^\infty\int_{S^{n-1}}h(r\omega)r^{n-1}d\sigma(\omega)dr$, and $\sigma(S^{n-1})=n\lambda(B(0,1))>0$.
([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]])

[F6] The nonnegative Lebesgue integral is monotone and homogeneous for nonnegative scalars; the integral of the indicator of a measurable set is its measure; a nonnegative measurable function has integral zero if and only if it vanishes almost everywhere.
([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[def-integral-over-a-measurable-set]], [[def-integral-of-a-nonnegative-simple-function]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[F7] For $a>0$ and $r,s\in\mathbb R$, $a^{r+s}=a^ra^s$ and $(a^r)^s=a^{rs}$, and $a^1=a$ under the definition $a^x=\exp(x\log a)$ with $\log$ the natural logarithm.
([[def-real-power]], [[thm-real-power-laws]], [[def-natural-logarithm]])

[F8] Continuous functions and smooth functions on Euclidean space are Borel measurable, hence Lebesgue measurable.
([[cor-continuous-functions-are-borel-measurable]], [[def-borel-and-lebesgue-measurable-function-on-rn]])

[F9] Countable Choice is the choice principle assumed by the change-of-variables and polar interfaces used here.
([[def-countable-choice]])



## Verification

**Proof technique:** direct; select a nonzero nonnegative smooth bump, prove its potential has finite positive norm, transfer the hypothesized bound along the exact dilation identities, and force the exponent to vanish.

1.1 The bump. By [F3] choose $0<r<R$ and a smooth $\rho:\mathbb R^n\to[0,1]$ with $\rho=1$ on $\overline B(0,r)$ and support in $B(0,R)$; then $\rho\in C_c^\infty(\mathbb R^n)$ is real, nonnegative and nonzero, and it is Lebesgue measurable by [F8]. [F3, F8]

2.1 The norm of the bump is finite and positive. Since $0\le\rho\le1$ and $\rho$ vanishes off the measurable ball $B(0,R)$, monotonicity and the scalar rule of [F6] together with $\int_{B(0,R)}1\,d\lambda=\lambda(B(0,R))<\infty$ give $\|\rho\|_p^p=\int\rho^p\le\lambda(B(0,R))<\infty$. For the lower bound, $\rho=1$ on $B(0,r)$, so again by [F6] $\|\rho\|_p^p\ge\int_{B(0,r)}\rho^p=\lambda(B(0,r))>0$. Hence $0<\|\rho\|_p<\infty$. [F6, F8, step 1.1, algebra]

2.2 The potential of the bump is finite and strictly positive everywhere. Fix $x$ and put $S:=|x|+R+1$, so that $B(0,R)\subseteq B(x,S)$. As $\rho$ vanishes off $B(0,R)$ and $0\le\rho\le1$, monotonicity in [F6], the change-of-variables formula [F4] applied to the substitution $y\mapsto x-y$ (determinant $1$) and the polar formula [F5] give $$\int K_\alpha(x-y)\rho(y)\,dy\le\int_{B(0,R)}K_\alpha(x-y)\,dy\le\int_{B(0,S)}K_\alpha(z)\,dz=\sigma(S^{n-1})\frac{S^{\alpha}}{\alpha}<\infty .$$ In particular $I_\alpha\rho(x)$ is defined by [F1]. On the other hand, for every $y\in B(0,r)\setminus\{x\}$ one has $0<|x-y|\le|x|+r$, so $K_\alpha(x-y)\ge(|x|+r)^{\alpha-n}$. The omitted singleton has Lebesgue measure zero, and changing the assigned diagonal value does not affect the integral by [F1]. Since $\rho=1$ on $B(0,r)$, [F6] and [F5] give $$I_\alpha\rho(x)\ge\int_{B(0,r)}(|x|+r)^{\alpha-n}dy=(|x|+r)^{\alpha-n}\lambda(B(0,r))>0,$$ where positivity of the ball measure is [F5]. Thus $0\le I_\alpha\rho(x)<\infty$ and $I_\alpha\rho(x)>0$ for every $x$. [F1, F4, F5, F6, step 1.1, algebra]

3.1 Positivity and finiteness of the target norm. The hypothesis applied to $\rho$ gives $\|I_\alpha\rho\|_q\le C\|\rho\|_p<+\infty$, and since $I_\alpha\rho>0$ everywhere by step 2.2 the function $(I_\alpha\rho)^q$ is nonnegative and strictly positive on the ball $B(0,r)$ of positive measure; if $\int(I_\alpha\rho)^q$ were zero then [F6] would make $(I_\alpha\rho)^q$ vanish almost everywhere, contradicting strict positivity on a set of positive measure. Hence $0<\|I_\alpha\rho\|_q<\infty$. [F5, F6, step 2.1, step 2.2]

4.1 The scaling identities. For $\lambda>0$ define $\rho_\lambda(x):=\rho(\lambda x)$; it is again a complex smooth compactly supported function, and $I_\alpha\rho_\lambda$ is finite everywhere by the computation of step 2.2 applied to the support of $\rho_\lambda$. The change-of-variables formula [F4] applied to the linear map $x\mapsto\lambda x$, whose determinant is $\lambda^n$ and whose inverse is $x\mapsto\lambda^{-1}x$, gives $$\|\rho_\lambda\|_p^p=\int\rho(\lambda x)^p\,dx=\lambda^{-n}\int\rho(z)^p\,dz=\lambda^{-n}\|\rho\|_p^p,$$ that is $\|\rho_\lambda\|_p=\lambda^{-n/p}\|\rho\|_p$. For the potential, the same substitution $z=\lambda y$ in the defining integral and the homogeneity $K_\alpha(x-\lambda^{-1}z)=\lambda^{n-\alpha}K_\alpha(\lambda x-z)$ give $$I_\alpha\rho_\lambda(x)=\int K_\alpha(x-y)\rho(\lambda y)\,dy=\lambda^{-n}\int K_\alpha(x-\lambda^{-1}z)\rho(z)\,dz=\lambda^{-\alpha}\int K_\alpha(\lambda x-z)\rho(z)\,dz=\lambda^{-\alpha}(I_\alpha\rho)(\lambda x),$$ so applying [F4] once more yields $\|I_\alpha\rho_\lambda\|_q=\lambda^{-\alpha-n/q}\|I_\alpha\rho\|_q$. [F1, F2, F4, step 2.2, step 3.1, algebra]

5.1 The scale inequality. The hypothesis applied to the legitimate test function $\rho_\lambda$ gives $\|I_\alpha\rho_\lambda\|_q\le C\|\rho_\lambda\|_p$; substituting step 4.1, $$\lambda^{-\alpha-n/q}\|I_\alpha\rho\|_q\le C\lambda^{-n/p}\|\rho\|_p\qquad(\lambda>0).$$ Dividing the positive quantities by $\|I_\alpha\rho\|_q$, which is finite and nonzero by step 3.1, and multiplying by $\lambda^{\alpha+n/q}$ gives $$\lambda^{\beta}\le C':=\frac{C\|\rho\|_p}{\|I_\alpha\rho\|_q}<\infty\qquad(\lambda>0),\qquad \beta:=\frac np-\alpha-\frac nq .$$ [F2, step 2.1, step 3.1, step 4.1, algebra]

6.1 The exponent vanishes. Suppose $\beta\neq0$. Then $1/\beta\in\mathbb R$ and $C'+1>0$, so $\lambda:= (C'+1)^{1/\beta}$ is a positive real number; by the real-power laws [F7] applied with $a=C'+1$, $r=1/\beta$ and $s=\beta$, $$\lambda^{\beta}=\bigl((C'+1)^{1/\beta}\bigr)^{\beta}=(C'+1)^{(1/\beta)\beta}=C'+1>C',$$ contradicting $\lambda^\beta\le C'$ for every $\lambda>0$ as established in step 5.1. Therefore $\beta=0$, which is precisely $n/p-\alpha-n/q=0$, equivalently $1/q=1/p-\alpha/n$. [F7, step 5.1, algebra]

7.1 Conclusion. A uniform bound $\|I_\alpha f\|_q\le C\|f\|_p$ over the complex smooth compactly supported functions forces $1/q=1/p-\alpha/n$; the argument uses only the homogeneity of the kernel, a nonzero nonnegative bump, and the exact dilation identities, so the strict-range Hardy-Littlewood-Sobolev theorem is not a premise of this necessity statement. Countable Choice enters only through the change-of-variables and polar interfaces [F4], [F5] and [F9]. [F9, step 2.1, step 3.1, step 5.1, step 6.1] ∎
