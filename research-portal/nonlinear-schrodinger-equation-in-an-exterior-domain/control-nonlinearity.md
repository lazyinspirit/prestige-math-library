---
title: Control duality and nonlinear estimates
description: Develop the real Hilbert observation-to-control chain and endpoint
  feedback construction alongside polynomial, time-integrability and exterior
  algebra bounds needed for nonlinear endpoint and trajectory control.
status: published
dependency_level: 1
---

**Purpose:** Develop the real Hilbert observation-to-control chain and endpoint feedback construction alongside polynomial, time-integrability and exterior algebra bounds needed for nonlinear endpoint and trajectory control.

## Published prerequisite

[math:cor-sobolev-algebra-above-the-critical-index](https://alphabetamath.cc/item/cor-sobolev-algebra-above-the-critical-index)

## Published prerequisite

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Published prerequisite

[math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)

## Published prerequisite

[math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)

## Published prerequisite

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Published prerequisite

[math:def-hilbert-space-adjoint](https://alphabetamath.cc/item/def-hilbert-space-adjoint)

## Published prerequisite

[math:def-realification-of-a-complex-vector-space](https://alphabetamath.cc/item/def-realification-of-a-complex-vector-space)

## Published prerequisite

[math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure)

## Published prerequisite

[math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality)

## Published prerequisite

[math:lem-complex-norm-realification-is-a-real-norm](https://alphabetamath.cc/item/lem-complex-norm-realification-is-a-real-norm)

## Published prerequisite

[math:lem-schwartz-dense-in-fourier-bessel-potential-space](https://alphabetamath.cc/item/lem-schwartz-dense-in-fourier-bessel-potential-space)

## Published prerequisite

[math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization)

## Published prerequisite

[math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor)

## Published prerequisite

[math:lem-weak-product-rule-for-bounded-sobolev-functions](https://alphabetamath.cc/item/lem-weak-product-rule-for-bounded-sobolev-functions)

## Published prerequisite

[math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point)

## Published prerequisite

[math:thm-extension-theorem-for-bounded-smooth-domains](https://alphabetamath.cc/item/thm-extension-theorem-for-bounded-smooth-domains)

## Published prerequisite

[math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces)

## Published prerequisite

[math:thm-fourier-inversion-on-schwartz-space](https://alphabetamath.cc/item/thm-fourier-inversion-on-schwartz-space)

## Published prerequisite

[math:thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis](https://alphabetamath.cc/item/thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis)

## Published prerequisite

[math:thm-higher-order-sobolev-embedding](https://alphabetamath.cc/item/thm-higher-order-sobolev-embedding)

## Published prerequisite

[math:thm-hilbert-adjoint-properties](https://alphabetamath.cc/item/thm-hilbert-adjoint-properties)

## Published prerequisite

[math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)

## Published prerequisite

[math:thm-kernel-of-the-trace-is-w-one-p-zero](https://alphabetamath.cc/item/thm-kernel-of-the-trace-is-w-one-p-zero)

## Published prerequisite

[math:thm-lax-milgram](https://alphabetamath.cc/item/thm-lax-milgram)

## Published prerequisite

[math:thm-riesz-representation-for-hilbert-space](https://alphabetamath.cc/item/thm-riesz-representation-for-hilbert-space)

## Published prerequisite

[math:thm-sharp-trace-theorem-for-w-one-p](https://alphabetamath.cc/item/thm-sharp-trace-theorem-for-w-one-p)

## Published prerequisite

[math:thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions](https://alphabetamath.cc/item/thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions)

## Published prerequisite

[math:thm-young-convolution-inequality](https://alphabetamath.cc/item/thm-young-convolution-inequality)

## Reachability and observation vocabulary for controlled evolutions

[Open item](item-def-se-foundation-control-language) · level 0


### Definition

Fix $T>0$. All normed spaces below are over a specified scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$; completeness is required only when stated. Let $X$ and $U$ be Banach spaces over the same scalar field, with $X$ the state space and $U$ the control space; a Banach space is a normed vector space complete in its norm metric. A specified controlled evolution supplies a set $E\subseteq X$ of admissible endpoints and a relation $\mathcal R_T\subseteq E\times U\times E$. The assertion $(x_0,h,x_1)\in\mathcal R_T$ means that an admissible solution for control $h$ starts at $x_0$ and ends at $x_1$ at time $T$. The equation, solution class, control restrictions and endpoint traces are part of the specified evolution, not consequences of this definition.

The evolution is **exactly controllable at time $T$** on $E$ if for every $x_0,x_1\in E$ there is $h\in U$ with $(x_0,h,x_1)\in\mathcal R_T$. If $0\in E$, it is **null controllable at time $T$** on $E$ if for every $x_0\in E$ there is $h\in U$ with $(x_0,h,0)\in\mathcal R_T$.

For a prescribed admissible reference solution $w$ with endpoints $w(0),w(T)\in E$, **local exact controllability near $w$ at time $T$** means that some $\delta>0$ has the following property: every $x_0,x_1\in E$ satisfying $\|x_0-w(0)\|_X<\delta$ and $\|x_1-w(T)\|_X<\delta$ admits an $h\in U$ with $(x_0,h,x_1)\in\mathcal R_T$.

When $E=X$, a **bounded linear endpoint-to-control operator** is a linear map $G:X\times X\to U$ such that $(x_0,G(x_0,x_1),x_1)\in\mathcal R_T$ for every pair and, for some $C\ge0$, $\|G(x_0,x_1)\|_U\le C(\|x_0\|_X+\|x_1\|_X)$ for every pair. Thus the product is equipped with the sum norm. This is a selection of steering controls; its existence is an additional assertion about the evolution.

For a specified adjoint evolution, let $Z$ be the normed space of its admissible initial states, let $Y$ be a normed observation space, and let $\mathcal O:Z\to Y$ send an initial state to its observation. An **observability inequality** is an estimate $\|z\|_Z\le C\|\mathcal O z\|_Y$ for every $z\in Z$, with a constant $C>0$ independent of $z$. The adjoint evolution and observation map are supplied by the application; the term alone asserts neither their existence nor a relation to controllability.

For a specified damped evolution with solutions $u(t)$ in a normed state space $X$ for all $t\ge0$, **exponential stabilization to zero** on a specified class of initial data means that there are constants $C,c>0$, uniform over that class and over $t\ge0$, such that $\|u(t)\|_X\le C e^{-ct}\|u(0)\|_X$. This terminology asserts no decay estimate for an unspecified equation and no equivalence with observability.

The following are local terminology conventions for comparison remarks, not assertions that any equation has the stated properties. For an evolution on a specified spatial set $D$ and a specified region $\omega\subseteq D$, **internal control in $\omega$** means that the actuator enters the equation as a source $f_h(t,x)$ which is zero for $x\in D\setminus\omega$; any boundary data are prescribed independently of the control $h$. The solution class specifies the meaning of equality and of localization. This definition does not assert that such a source steers any endpoints.

A control or stabilization statement is called **semi-global in the state norm** here when it holds on each prescribed bounded set of admissible states, with its stated parameters permitted to depend on that bound. More explicitly, put $E_R=\{x\in E:\|x\|_X\le R\}$ for $R>0$. For a family of controlled evolutions specified at positive times, semi-global exact controllability means that for every $R>0$ there is a time $T_R>0$ such that every $x_0,x_1\in E_R$ admits an admissible control with $(x_0,h,x_1)\in\mathcal R_{T_R}$; any asserted control estimates and their constants must also be specified on $E_R$. A semi-global stabilization statement similarly specifies its decay assertion on each bounded set of admissible initial states, with the asserted constants allowed to depend on $R$. Additional hypotheses remain those of the specified statement. No time, control bound or decay constant uniform over all $R$ is implied.

For a specified damped or feedback evolution with normed state space $X$ and solution time domain $[0,\infty)$, an **equilibrium** is a state $x_\ast\in X$ for which the constant trajectory $u(t)=x_\ast$ for all $t\ge0$ is an admissible solution of that same evolution. Admissibility includes the specified equation, boundary conditions and fixed damping or feedback law. This definition does not assert the existence of an equilibrium.

For that evolution and an equilibrium $x_\ast\in X$, **stabilization toward $x_\ast$** on an admissible class means that every solution in that class satisfies $\|u(t)-x_\ast\|_X\to0$ as $t\to\infty$. A quantitative stabilization statement must specify its decay estimate and the class over which the estimate is uniform. The exponential stabilization condition below is one such quantitative assertion when $x_\ast=0$.

For a specified equation and a specified class $\mathcal S$ of solutions on a domain $Q$, with a specified observation subset $O\subseteq Q$, a **unique-continuation implication from $O$** means $u|_O=0\Longrightarrow u=0$ on $Q$ for every $u\in\mathcal S$. The equation and solution class must specify the meaning of vanishing and restriction, including any time interval and any equivalence-class convention. This defines the implication as a property; it does not assert that it holds for an unspecified equation or solution class.

### Definition references

[math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)

[math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)

[math:def-norm-and-normed-space](https://alphabetamath.cc/item/def-norm-and-normed-space)

[math:def-complex-norm-and-complex-normed-space](https://alphabetamath.cc/item/def-complex-norm-and-complex-normed-space)

### Justification

The state and control spaces are definite normed spaces with complete norm metrics by [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space). Once the evolution specifies $E$ and $\mathcal R_T$, exact and null controllability are predicates with explicit quantifiers over those sets; the local version uses the specified reference endpoints and the norm balls in $X$. No uniqueness of solutions or choice of a solution map is required.

The sum of the two endpoint norms is a norm on $X\times X$: positivity and homogeneity follow componentwise, and the triangle inequality follows by adding the two component inequalities. Hence the displayed condition on $G$ is exactly boundedness of a linear operator for this product norm, in the sense of [math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator). The steering condition is separately imposed and is not implied by boundedness.

The observation inequality and stabilization condition are definite predicates once their respective normed spaces, maps, solution classes and constants are specified. The general real and complex normed spaces used here and in the equilibrium and qualitative stabilization clauses are understood in the sense of [math:def-norm-and-normed-space](https://alphabetamath.cc/item/def-norm-and-normed-space) and [math:def-complex-norm-and-complex-normed-space](https://alphabetamath.cc/item/def-complex-norm-and-complex-normed-space), respectively; these uses impose no completeness requirement. Their inequalities make the dependence on the data and the required uniformity explicit. None of these definitions proves existence, well-posedness, a steering operator, an observation estimate, or a decay theorem.

The added internal-control and unique-continuation clauses are local definitions with their spatial sets, solution classes, sources and equality conventions supplied as data. They invoke no continuation theorem and no controllability theorem. The semi-global convention restricts the already specified endpoint relation to the explicitly defined norm-bounded subsets $E_R$; its quantifier order permits different parameters for different bounds. The equilibrium convention tests whether a specified constant trajectory is admissible for the supplied evolution on $[0,\infty)$; it needs no solution uniqueness or independent existence theorem. The qualitative stabilization convention uses the same state norm and an equilibrium in this sense. These conventions add no existence assertion or equivalence with observability.


## Observation lower bounds give Hilbert control right inverses

[Open item](item-lem-se-observation-gramian-right-inverse) · level 0


### Statement

Assume Countable Choice. Let $E$ and $U$ be real or complex Hilbert spaces over the same field, and let $O:E\to U$ be bounded and linear. Suppose that $\|Ox\|_U\ge c\|x\|_E$ for every $x\in E$, where $c>0$. Let $O^*:U\to E$ be the Hilbert adjoint and set $Q=O^*O$. Then $Q:E\to E$ has a bounded two-sided inverse, and $R=OQ^{-1}:E\to U$ is a bounded linear right inverse of $O^*$, meaning $O^*R=I_E$, with $\|R\|\le c^{-1}$.

For the stronger trajectory conclusion, let $Y$ be a normed space over the same field and $T>0$. Write $C([0,T];Y)$ for the continuous $Y$-valued functions with supremum norm. Suppose that a bounded linear map $J:E\to C([0,T];Y)$ and a linear map $i:C([0,T];Y)\to U$ satisfy $iJ=O$. Then $R_C=JQ^{-1}$ is bounded into $C([0,T];Y)$, $iR_C=R$, and $\|R_C\|\le\|J\|c^{-2}$. In particular, when $O$ itself has values in both spaces with the same representatives and is bounded as a map $E\to C([0,T];Y)$, one may take $J=O$ and $i$ to be the inclusion or the map to the corresponding equivalence class.

### Facts & Assumptions

[A1] Countable Choice means that every countable family of nonempty sets admits a choice function; it is assumed for the adjoint and Lax–Milgram interfaces below ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F1] A Hilbert space is a complete inner-product space. The inner products here are linear in the first variable; the bounded Hilbert adjoint is characterized by $\langle Ox,u\rangle_U=\langle x,O^*u\rangle_E$ ([math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space), [math:def-hilbert-space-adjoint](https://alphabetamath.cc/item/def-hilbert-space-adjoint), [math:thm-hilbert-adjoint-properties](https://alphabetamath.cc/item/thm-hilbert-adjoint-properties)).

[F2] Cauchy–Schwarz gives $|\langle x,y\rangle|\le\|x\|\|y\|$, and the norm of a bounded operator is the supremum of its output norm on the unit ball ([math:thm-cauchy-schwarz-in-an-inner-product-space](https://alphabetamath.cc/item/thm-cauchy-schwarz-in-an-inner-product-space), [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)).

[F3] Under Countable Choice, Lax–Milgram gives a unique solution $z$ to $a(z,v)=F(v)$ for all $v$ when $a$ is a bounded coercive real bilinear or complex sesquilinear form and $F$ is a bounded functional conjugate-linear in the test variable. If the coercivity constant is $\alpha$, then $\|z\|\le\alpha^{-1}\|F\|$ ([math:thm-lax-milgram](https://alphabetamath.cc/item/thm-lax-milgram), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F4] A norm on a vector space over $\mathbb R$ or $\mathbb C$ is nonnegative, separates zero, is absolutely homogeneous, and satisfies the triangle inequality; its metric is $d(y,z)=\|y-z\|_Y$ ([math:def-normed-vector-space-over-an-absolutely-valued-field](https://alphabetamath.cc/item/def-normed-vector-space-over-an-absolutely-valued-field)), using the usual absolute value or complex modulus.

[F5] In a real or complex normed space, vector addition and scalar multiplication are continuous, and $|\|y\|_Y-\|z\|_Y|\le\|y-z\|_Y$, so the norm map is continuous ([math:lem-vector-operations-are-continuous-in-a-normed-space](https://alphabetamath.cc/item/lem-vector-operations-are-continuous-in-a-normed-space), [math:lem-reverse-triangle-inequality-in-a-normed-space](https://alphabetamath.cc/item/lem-reverse-triangle-inequality-in-a-normed-space)). For a complex space, the reverse-triangle estimate also follows on its underlying real normed space, with the same metric and norm.

[F6] Every continuous real-valued function on a closed real interval $[a,b]$, $a\le b$, is bounded and attains its maximum and minimum ([math:lem-extreme-value-theorem-from-compactness](https://alphabetamath.cc/item/lem-extreme-value-theorem-from-compactness)).

[F7] A linear map $A:X\to Z$ between normed spaces over the same real or complex field is bounded when there is a real $M\ge0$ such that $\|Ax\|_Z\le M\|x\|_X$ for every $x\in X$ ([math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)).

[F8] A map $g:(X,d_X)\to(Z,d_Z)$ is continuous at $x_0$ when for every $\varepsilon>0$ there is $\delta>0$ such that $d_X(x,x_0)<\delta$ implies $d_Z(g(x),g(x_0))<\varepsilon$; it is continuous when this holds at every point ([math:def-metric-continuity](https://alphabetamath.cc/item/def-metric-continuity)). For the trajectories here, $[0,T]$ carries the metric $|t-r|$ and $Y$ carries $\|y-z\|_Y$; real-valued norm functions use the usual absolute-value metric.

### Proof

[A1] Countable Choice means that every countable family of nonempty sets admits a choice function; it is assumed for the adjoint and Lax–Milgram interfaces below ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F1] A Hilbert space is a complete inner-product space. The inner products here are linear in the first variable; the bounded Hilbert adjoint is characterized by $\langle Ox,u\rangle_U=\langle x,O^*u\rangle_E$ ([math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space), [math:def-hilbert-space-adjoint](https://alphabetamath.cc/item/def-hilbert-space-adjoint), [math:thm-hilbert-adjoint-properties](https://alphabetamath.cc/item/thm-hilbert-adjoint-properties)).

[F2] Cauchy–Schwarz gives $|\langle x,y\rangle|\le\|x\|\|y\|$, and the norm of a bounded operator is the supremum of its output norm on the unit ball ([math:thm-cauchy-schwarz-in-an-inner-product-space](https://alphabetamath.cc/item/thm-cauchy-schwarz-in-an-inner-product-space), [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)).

[F3] Under Countable Choice, Lax–Milgram gives a unique solution $z$ to $a(z,v)=F(v)$ for all $v$ when $a$ is a bounded coercive real bilinear or complex sesquilinear form and $F$ is a bounded functional conjugate-linear in the test variable. If the coercivity constant is $\alpha$, then $\|z\|\le\alpha^{-1}\|F\|$ ([math:thm-lax-milgram](https://alphabetamath.cc/item/thm-lax-milgram), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).



**Given:** The spaces, maps and lower bound in the statement, with Countable Choice.

**Goal:** Prove the invertibility, right-inverse identity and bounds, including the conditional trajectory lift.

1.1 Define $a(z,v)=\langle Oz,Ov\rangle_U$. It is linear in $z$ and conjugate-linear in $v$ (bilinear in the real case). By Cauchy–Schwarz and boundedness of $O$, $|a(z,v)|\le\|O\|^2\|z\|_E\|v\|_E$, while $\operatorname{Re}a(z,z)=\|Oz\|_U^2\ge c^2\|z\|_E^2$. For each $f\in E$, the functional $F_f(v)=\langle f,v\rangle_E$ is bounded and conjugate-linear, with $\|F_f\|\le\|f\|_E$. Lax–Milgram therefore gives a unique $z\in E$ with $a(z,v)=\langle f,v\rangle_E$ for all $v$, and $\|z\|_E\le c^{-2}\|f\|_E$. [given, A1, F1, F2, F3, F7]

1.2 Under the trajectory hypotheses, give $C([0,T];Y)$ pointwise addition and scalar multiplication. The zero function is continuous. For continuous $g,h$ and a fixed scalar $a$, the continuity of the vector operations gives continuity of $g+h$ and $ag$. Explicitly, at $t_0$ the increments satisfy $\|(g+h)(t)-(g+h)(t_0)\|_Y\le\|g(t)-g(t_0)\|_Y+\|h(t)-h(t_0)\|_Y$ and $\|ag(t)-ag(t_0)\|_Y=|a|\|g(t)-g(t_0)\|_Y$, which tend to zero as $t\to t_0$ within $[0,T]$. All vector-space identities hold pointwise, so this is a vector space over the same field. [given, F4, F5, F8]

2.1 The adjoint identity and conjugate symmetry give $a(z,v)=\langle O^*Oz,v\rangle_E=\langle Qz,v\rangle_E$. Thus the solution in step 1.1 satisfies $Qz=f$, since an inner product with every $v$ vanishes only for the zero vector. Uniqueness also gives injectivity of $Q$. Hence $Q$ is bijective; its inverse is linear because $Q$ is linear, and the estimate in step 1.1 gives $\|Q^{-1}\|\le c^{-2}$. [step 1.1, F1, F2, F7]

2.2 For $g\in C([0,T];Y)$, the reverse triangle inequality gives $|\|g(t)\|_Y-\|g(t_0)\|_Y|\le\|g(t)-g(t_0)\|_Y$, so $t\mapsto\|g(t)\|_Y$ is continuous. The extreme value theorem on $[0,T]$ makes $\|g\|_\infty=\sup_{0\le t\le T}\|g(t)\|_Y$ a finite nonnegative real number, attained at some $t$. This quantity vanishes exactly for the zero function. Pointwise absolute homogeneity gives $\|ag\|_\infty=|a|\|g\|_\infty$, including $a=0$; the pointwise triangle inequality gives $\|g+h\|_\infty\le\|g\|_\infty+\|h\|_\infty$. Thus the stated supremum norm makes $C([0,T];Y)$ a normed space, without any completeness assumption on $Y$. [given, F4, F5, F6, step 1.2, F8]

3.1 Set $R=OQ^{-1}$. It is bounded and linear, and $O^*R=QQ^{-1}=I_E$. For $f\in E$ put $z=Q^{-1}f$. Then $\|Rf\|_U^2=\langle Qz,z\rangle_E=\langle f,z\rangle_E\le\|f\|_E\|z\|_E$, while $c\|z\|_E\le\|Rf\|_U$. If $Rf=0$ the desired estimate is immediate; otherwise combine the two inequalities and divide by $\|Rf\|_U$ to obtain $\|Rf\|_U\le c^{-1}\|f\|_E$. Taking the unit-ball supremum proves $\|R\|\le c^{-1}$. [given, F1, F2, step 2.1, F7]

4.1 Under the additional trajectory hypotheses, define $R_C=JQ^{-1}$. For every $f\in E$, $iR_Cf=iJQ^{-1}f=OQ^{-1}f=Rf$. Also $\|R_Cf\|_{C([0,T];Y)}\le\|J\|\|Q^{-1}f\|_E\le\|J\|c^{-2}\|f\|_E$, which gives the asserted operator bound. No identification of $O^*$ with an evolution endpoint map is used. [given, F2, step 2.1, step 3.1, step 2.2, F7] ∎


## Complex polynomial weak derivatives and zero boundary preservation

[Open item](item-lem-se-complex-polynomial-energy-rule) · level 0


### Statement

Assume the Axiom of Choice. Let $\Omega\subseteq\mathbb R^n$ be open, $n\ge1$, let $m\in\{3,5\}$, and let $\lambda\in\mathbb R$. Set $a=(m+1)/2$, $b=(m-1)/2$, and $g(z)=\lambda z^a\bar z^b=\lambda|z|^{m-1}z$. Write $H^1(\Omega)=W^{1,2}(\Omega;\mathbb C)$, with norm $\|u\|_{H^1}^2=\|u\|_2^2+\sum_{j=1}^n\|D_j u\|_2^2$, and write $H^1_0(\Omega)$ for the closure of $C_c^\infty(\Omega;\mathbb C)$ in this norm. All $L^p$ norms use Lebesgue measure and almost-everywhere classes.

For $u\in H^1(\Omega)\cap L^\infty(\Omega)$, $g(u)\in H^1(\Omega)$ and $D_jg(u)=\lambda\{a u^{a-1}\bar u^bD_ju+b u^a\bar u^{b-1}\overline{D_ju}\}$ almost everywhere. This is the real differential of $g:\mathbb C\simeq\mathbb R^2\to\mathbb C$ applied to $D_ju$. There is a constant $C_m$ depending only on $m$ such that $\|g(u)\|_{H^1}\le C_m|\lambda|\|u\|_\infty^{m-1}\|u\|_{H^1}$.

For $u,v\in H^1(\Omega)\cap L^\infty(\Omega)$, $\|g(v)-g(u)\|_{H^1}\le C_m|\lambda|[(\|u\|_\infty^{m-1}+\|v\|_\infty^{m-1})\|v-u\|_{H^1}+(\|u\|_\infty^{m-2}+\|v\|_\infty^{m-2})(\|u\|_{H^1}+\|v\|_{H^1})\|v-u\|_\infty]$. If additionally $u\in H^1_0(\Omega)$, then $g(u)\in H^1_0(\Omega)$.

### Statement references

[math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)

[math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Facts & Assumptions

**Given:** The Axiom of Choice, open $\Omega\subseteq\mathbb R^n$, $n\ge1$, $m\in\{3,5\}$, $\lambda\in\mathbb R$, and the functions and notation in the statement.

[F1] The Sobolev space consists of $L^2$ classes with $L^2$ weak derivatives, defined by the signed identity against compactly supported smooth tests; the complex convention is componentwise. Its norm is the displayed sum-of-squares norm ([math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)).

[F2] The space $H^1_0(\Omega)$ is the $H^1$ norm closure of $C_c^\infty(\Omega;\mathbb C)$, without assuming a boundary trace theorem ([math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure)).

[F3] Under Choice, if two complex $H^1$ functions are essentially bounded, their product is in $H^1$ and satisfies the weak product rule ([math:lem-weak-product-rule-for-bounded-sobolev-functions](https://alphabetamath.cc/item/lem-weak-product-rule-for-bounded-sobolev-functions)).

[F4] Under Choice, a real globally Lipschitz function $F$ with $F(0)=0$ acts on real $H^1$ functions and obeys its weak chain rule, with the stated level-set convention ([math:thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions](https://alphabetamath.cc/item/thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions)).

[F5] Under Countable Choice, an $L^2$-convergent sequence has a subsequence converging almost everywhere ([math:cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences](https://alphabetamath.cc/item/cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences)). The assumed Axiom of Choice implies Countable Choice ([math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration](https://alphabetamath.cc/item/lem-ac-supplies-countable-and-dependent-choice-for-banach-integration)), supplying the hypotheses of [F1], [F2] and this subsequence result.

[F6] On an arbitrary measure space, almost-everywhere convergence with one integrable dominating function implies convergence of integrals ([math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence)).

[F7] There is a smooth compactly supported real cutoff on $\mathbb R$ equal to one on $[-1,1]$ ([math:lem-schwartz-cutoffs-from-the-standard-smooth-step](https://alphabetamath.cc/item/lem-schwartz-cutoffs-from-the-standard-smooth-step)).

### Proof

**Given:** The Axiom of Choice, open $\Omega\subseteq\mathbb R^n$, $n\ge1$, $m\in\{3,5\}$, $\lambda\in\mathbb R$, and the functions and notation in the statement.

[F1] The Sobolev space consists of $L^2$ classes with $L^2$ weak derivatives, defined by the signed identity against compactly supported smooth tests; the complex convention is componentwise. Its norm is the displayed sum-of-squares norm ([math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)).

[F2] The space $H^1_0(\Omega)$ is the $H^1$ norm closure of $C_c^\infty(\Omega;\mathbb C)$, without assuming a boundary trace theorem ([math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure)).

[F3] Under Choice, if two complex $H^1$ functions are essentially bounded, their product is in $H^1$ and satisfies the weak product rule ([math:lem-weak-product-rule-for-bounded-sobolev-functions](https://alphabetamath.cc/item/lem-weak-product-rule-for-bounded-sobolev-functions)).

[F4] Under Choice, a real globally Lipschitz function $F$ with $F(0)=0$ acts on real $H^1$ functions and obeys its weak chain rule, with the stated level-set convention ([math:thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions](https://alphabetamath.cc/item/thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions)).

[F5] Under Countable Choice, an $L^2$-convergent sequence has a subsequence converging almost everywhere ([math:cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences](https://alphabetamath.cc/item/cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences)). The assumed Axiom of Choice implies Countable Choice ([math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration](https://alphabetamath.cc/item/lem-ac-supplies-countable-and-dependent-choice-for-banach-integration)), supplying the hypotheses of [F1], [F2] and this subsequence result.

[F6] On an arbitrary measure space, almost-everywhere convergence with one integrable dominating function implies convergence of integrals ([math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence)).

[F7] There is a smooth compactly supported real cutoff on $\mathbb R$ equal to one on $[-1,1]$ ([math:lem-schwartz-cutoffs-from-the-standard-smooth-step](https://alphabetamath.cc/item/lem-schwartz-cutoffs-from-the-standard-smooth-step)).



**Proof technique:** direct.

**Goal:** Prove the conclusions in the statement under its stated hypotheses.

1.1 By the weak test identity in [F1], taking complex conjugates shows $D_j\bar u=\overline{D_ju}$: the test functions may be taken real, and the identity then extends by linearity to complex tests. The same applies to $v$. Repeatedly apply [F3] to the bounded factors $u$ and $\bar u$; every intermediate positive-degree product is bounded and lies in $H^1$. This gives the displayed formula for $D_jg(u)$ and $g(u)\in H^1$. The value and derivative satisfy $|g(u)|\le|\lambda||u|^m$ and $|D_jg(u)|\le m|\lambda||u|^{m-1}|D_ju|$. Taking $L^2$ norms proves the first estimate. [F1, F3, given, algebra]

1.2 Suppose now $u\in H^1_0(\Omega)\cap L^\infty(\Omega)$. By [F2] choose $\phi_k\in C_c^\infty(\Omega;\mathbb C)$ converging to $u$ in $H^1$. Choose $R>\|u\|_\infty+1$, take the cutoff $\chi$ from [F7], and put $T(t)=t\chi(t/R)$. Thus $T$ is smooth and globally Lipschitz, $T(0)=0$, $T(t)=t$ and $T'(t)=1$ for $|t|\le R$, and both $T$ and $T'$ are bounded. Define $w_k=T(\operatorname{Re}\phi_k)+iT(\operatorname{Im}\phi_k)$. Each $w_k$ is smooth and compactly supported in $\Omega$, and the sequence is uniformly bounded in $L^\infty$. By [F5], after taking a subsequence, both components of $\phi_k$ converge almost everywhere to the corresponding components of $u$. Since $T$ is Lipschitz and fixes these components almost everywhere, $w_k\to u$ in $L^2$. For either real component $q$ of $u$ and corresponding $q_k$ of $\phi_k$, [F4] gives $D_jT(q_k)=T'(q_k)D_jq_k$ and $D_jT(q)=D_jq$. The difference is $T'(q_k)(D_jq_k-D_jq)+(T'(q_k)-1)D_jq$. The first term tends to zero in $L^2$; the square of the second tends to zero almost everywhere and is dominated by a constant times $|D_jq|^2$, so [F6] makes its $L^2$ norm tend to zero. Consequently $w_k\to u$ in $H^1$. [F2, F4, F5, F6, F7, given, algebra, choose]

2.1 Put $M=\|u\|_\infty+\|v\|_\infty$ and $h=v-u$. Telescoping the $m$ factors in $v^a\bar v^b-u^a\bar u^b$ gives $|g(v)-g(u)|\le m|\lambda|M^{m-1}|h|$. The coefficients of $D_jv$ and $\overline{D_jv}$ in step 1.1 are polynomials of degree $m-1$ in $v,\bar v$; telescoping their factors gives coefficient differences bounded by $C_m|\lambda|M^{m-2}|h|$. Subtract the derivative formulas using $D_jv-D_ju=D_jh$: $|D_jg(v)-D_jg(u)|\le C_m|\lambda|(M^{m-1}|D_jh|+M^{m-2}|h||D_ju|)$. Taking $L^2$ norms, using essential suprema for $u,v,h$, and bounding $M^r$ by a constant depending only on $r$ times $\|u\|_\infty^r+\|v\|_\infty^r$ for $r=m-1,m-2$, yields the stated symmetric estimate after enlarging $C_m$. [F1, step 1.1, given, algebra]

3.1 Each $g(w_k)$ lies in $C_c^\infty(\Omega;\mathbb C)$ because $g$ is a polynomial with $g(0)=0$. The uniform bound on $w_k$ and the almost-everywhere convergence from step 1.2 imply $g(w_k)\to g(u)$ in $L^2$ by the pointwise polynomial difference bound. In the derivative formula of step 1.1, subtract and add the coefficients at $w_k$ multiplying $D_ju$: the terms containing $D_jw_k-D_ju$ tend to zero in $L^2$ by the uniform coefficient bounds and step 1.2. Each remaining coefficient difference tends to zero almost everywhere, is uniformly bounded, and multiplies $D_ju$ or its conjugate; [F6] applied to its squared modulus gives convergence to zero in $L^2$. Hence $g(w_k)\to g(u)$ in $H^1$, and [F2] proves $g(u)\in H^1_0(\Omega)$. This uses no boundary regularity or trace characterization. [F2, F6, step 1.1, step 2.1, step 1.2, algebra] ∎


## Uniform localized H2 algebra on a smooth exterior domain

[Open item](item-lem-se-exterior-h2-uniform-algebra) · level 0


### Statement

Assume the Axiom of Choice. Let $n\in\{2,3\}$ and let $\Omega=\mathbb R^n\setminus\Theta$ be connected, where $\Theta$ is compact and has smooth boundary in the local graph sense. Let $H^2(\Omega)=W^{2,2}(\Omega;\mathbb C)$, with norm given by the square root of the sum of the squared $L^2$ norms of all weak derivatives through order two. Then there is a constant $C$ depending on $n$ and the fixed obstacle such that, for all $u,v\in H^2(\Omega)$, $$\|u\|_{L^\infty(\Omega)}\le C\|u\|_{H^2(\Omega)},\qquad \|uv\|_{H^2(\Omega)}\le C\|u\|_{H^2(\Omega)}\|v\|_{H^2(\Omega)}.$$

For $m\in\{3,5\}$ and $\lambda\in\mathbb R$, put $g(z)=\lambda |z|^{m-1}z$. There is $C_m$ depending also on $m$ such that $$\|g(u)\|_{H^2(\Omega)}\le C_m|\lambda|\|u\|_{H^2(\Omega)}^m$$ and $$\|g(u)-g(v)\|_{H^2(\Omega)}\le C_m|\lambda|(\|u\|_{H^2(\Omega)}+\|v\|_{H^2(\Omega)})^{m-1}\|u-v\|_{H^2(\Omega)}.$$

The obstacle trace of an $H^2(\Omega)$ function means the restriction to $\partial\Theta$ of its bounded-domain $H^1$ trace on $G=\Omega\cap B_R$, for any sufficiently large $R$ with $\Theta\subset B_R$. Its values are classes in $L^2(\partial\Theta,dS;\mathbb C)$, where $dS$ is chart-independent surface measure on the compact smooth hypersurface $\partial\Theta$; zero trace means equality to zero $dS$-almost everywhere. If that trace of $u$ is zero, then the obstacle trace of $g(u)$ is zero.

### Statement references

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)

[Bounded $C^k$ domains and boundary charts](https://alphabetamath.cc/item/def-bounded-c-k-domain-and-boundary-charts)

[math:thm-lp-trace-operator-on-a-bounded-c-one-domain](https://alphabetamath.cc/item/thm-lp-trace-operator-on-a-bounded-c-one-domain)

[math:def-surface-integral-on-a-compact-c-one-hypersurface](https://alphabetamath.cc/item/def-surface-integral-on-a-compact-c-one-hypersurface)

[math:lem-surface-integral-is-independent-of-c-one-boundary-charts](https://alphabetamath.cc/item/lem-surface-integral-is-independent-of-c-one-boundary-charts)

[math:def-l-p-space-as-a-quotient-by-null-functions](https://alphabetamath.cc/item/def-l-p-space-as-a-quotient-by-null-functions)

### Facts & Assumptions

**Given:** The Axiom of Choice, the stated smooth compact obstacle and connected exterior, $n\in\{2,3\}$, and $u,v\in H^2(\Omega)$.

**Goal:** Prove the uniform exterior embedding and multiplication estimates, their polynomial consequences, and preservation of zero obstacle trace.

[F1] A bounded smooth domain is an $H^2$ extension domain by [Bounded $C^k$ domains admit integer-order Sobolev extension](https://alphabetamath.cc/item/thm-extension-theorem-for-bounded-smooth-domains). On every bounded $H^2$ extension domain, $H^2$ embeds continuously into bounded continuous functions and is an algebra when $n\in\{2,3\}$, since $4>n$; see [math:thm-higher-order-sobolev-embedding](https://alphabetamath.cc/item/thm-higher-order-sobolev-embedding) and [math:cor-sobolev-algebra-above-the-critical-index](https://alphabetamath.cc/item/cor-sobolev-algebra-above-the-critical-index). The same constants work on translates of one fixed ball.

[F2] Smooth cutoffs with prescribed compact inclusion exist by [math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization). Multiplication by a smooth function with bounded derivatives through order two is bounded on $H^2$ by [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor). The $H^2$ norm and weak derivatives are those of [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm).

[F3] On a bounded $C^1$ domain the $H^1$ trace is bounded, agrees with the boundary values of a representative continuous on the closure, and is defined chartwise; see [math:thm-lp-trace-operator-on-a-bounded-c-one-domain](https://alphabetamath.cc/item/thm-lp-trace-operator-on-a-bounded-c-one-domain). The local graph convention is [Bounded $C^k$ domains and boundary charts](https://alphabetamath.cc/item/def-bounded-c-k-domain-and-boundary-charts).

[F4] For a compact $C^1$ hypersurface, $dS$ is the chartwise surface measure of [math:def-surface-integral-on-a-compact-c-one-hypersurface](https://alphabetamath.cc/item/def-surface-integral-on-a-compact-c-one-hypersurface), independent of charts and subordinate partitions by [math:lem-surface-integral-is-independent-of-c-one-boundary-charts](https://alphabetamath.cc/item/lem-surface-integral-is-independent-of-c-one-boundary-charts). On the obstacle component of $\partial G$, its restriction agrees with the measure constructed from the same obstacle charts. An $L^2$ boundary class is zero exactly when a representative is zero $dS$-almost everywhere, using [math:def-l-p-space-as-a-quotient-by-null-functions](https://alphabetamath.cc/item/def-l-p-space-as-a-quotient-by-null-functions).

### Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Establish every assertion of the Statement under the stated hypotheses.

**Proof technique:** Construct a uniformly locally finite bounded-domain cover and sum the local estimates.

1.1 Put $r=2\sqrt n$ and choose $R$ so large that $\Theta\subset B_{R-4r}$. Set $G=\Omega\cap B_R$ and $A=\{a\in\mathbb Z^n:|a|\ge R-3r\}$. Each $B(a,r)$ with $a\in A$ misses $\Theta$. The sets $G$ and $B(a,r)$ cover $\Omega$: outside $B_{R-2r}$ a nearest lattice point is at distance at most $r/4$ and belongs to $A$, while points inside $B_R$ belong to $G$. Their overlap is bounded by a constant depending only on $n$, since the lattice points within distance $r$ of any point lie in a fixed-size cube. The boundary of $G$ consists of the separated smooth obstacle boundary and sphere. It is connected: an exterior path from any point of $G$ to a point outside $B_R$, stopped at its first sphere crossing, joins it within $G$ to the connected outer annulus; open connected Euclidean sets are path connected. Thus $G$ is a bounded smooth domain. [F3, given, construct]

2.1 The cover also admits a smooth partition with uniformly bounded derivatives. Choose $\chi_0$ equal to one on $B_{R-2r}$ and supported in $B_{R-r}$. Take a nonnegative smooth bump $\rho$ supported in $B(0,r)$ and positive on $\overline{B(0,r/2)}$, and set $S(x)=\sum_{a\in A}\rho(x-a)$. The preceding nearest-lattice argument gives a positive uniform lower bound for $S$ where $1-\chi_0$ is nonzero. Define $\chi_a=(1-\chi_0)\rho(x-a)/S(x)$ there and extend it by zero elsewhere. The locally finite sum is $\chi_0+\sum_a\chi_a=1$ on $\Omega$; finite overlap, the lower bound for $S$, and the fixed bump give uniform bounds on derivatives through order two. Hence the associated localized $H^2$ norms are controlled by bounded overlap and the weak cutoff rule. [F2, step 1.1, construct]

3.1 Restrict $u$ and $v$ to $G$ and to each exterior ball. By [F1], the local algebra and embedding constants are bounded by one fixed constant: use the constant for $G$ and the translation-invariant constant for $B(0,r)$. If $D_j$ denotes these domains and $a_j=\|u\|_{H^2(D_j)}$, $b_j=\|v\|_{H^2(D_j)}$, bounded overlap gives $\sum_j a_j^2\le N\|u\|_{H^2(\Omega)}^2$ and $\sup_j b_j\le\|v\|_{H^2(\Omega)}$. Local weak derivatives agree on overlaps, so the local products define the global weak derivatives. Consequently $$\|uv\|_{H^2(\Omega)}^2\le C^2\sum_j a_j^2b_j^2\le C^2N\|u\|_{H^2(\Omega)}^2\|v\|_{H^2(\Omega)}^2.$$ The local supremum estimates and the cover likewise give $\|u\|_{L^\infty(\Omega)}\le C\|u\|_{H^2(\Omega)}$. [F1, F2, step 1.1, step 2.1]

4.1 Complex conjugation commutes with real weak differentiation, as follows by conjugating the test-function identities, and preserves the $H^2$ norm. Since $m$ is odd, $g(u)=\lambda u^{(m+1)/2}\overline u^{(m-1)/2}$. Repeated multiplication gives the stated power bound. Replacing the factors one at a time in the difference of the two products gives a sum of $m$ products, each containing either $u-v$ or its conjugate and $m-1$ factors chosen from $u,v$ and their conjugates; the same algebra estimate proves the stated Lipschitz bound. [F2, step 3.1, algebra]

5.1 By [F1], $u|_G$ has a continuous representative on $\overline G$; the same is true of $g(u)|_G$, whose representative is the polynomial applied to that of $u$. By [F3] and [F4], their obstacle traces are the corresponding boundary values as $L^2(\partial\Theta,dS;\mathbb C)$ classes. If the trace of $u$ vanishes $dS$-almost everywhere, then $g(0)=0$ shows that the trace of $g(u)$ does also. The chartwise trace is local, so enlarging $R$ does not change its restriction to $\partial\Theta$. This proves all assertions. [F1, F3, F4, step 4.1] ∎


## Realification of Hilbert pairings and conjugate-linear coefficients

[Open item](item-lem-se-real-hilbert-dualization) · level 0


### Statement

Assume the Axiom of Countable Choice. Let $H$ be a complex Hilbert space with inner product linear in the first variable. Its realification $H_{\mathbb R}$ is the same additive group with scalar multiplication restricted to real scalars. With $(u,v)_{\mathbb R}=\operatorname{Re}\langle u,v\rangle_H$, it is a real Hilbert space with the same norm and metric as $H$. Every bounded real-linear functional $f:H_{\mathbb R}\to\mathbb R$ has a unique representative $y\in H$ such that $f(u)=(u,y)_{\mathbb R}$ for all $u$, and $\|f\|=\|y\|$. Here $\|f\|:=\sup\{|f(u)|:\|u\|\le1\}$ is the norm in the real normed dual of $H_{\mathbb R}$.

In particular, let $(X,\mathcal A,\mu)$ be a measure space and $H=L^2(\mu;\mathbb C)$, the space of square-integrable measurable complex functions modulo equality almost everywhere, with $\langle z,v\rangle=\int_X z\overline v\,d\mu$. Let $a,b$ be measurable essentially bounded complex functions, with $a$ real almost everywhere. Write $\|c\|_\infty:=\||c|\|_{\infty,\mu}$ for $c\in\{a,b\}$, where the right-hand side is the essential supremum norm of the real-valued measurable function $|c|$. Define the bounded real-linear operator $L$ by $Lz=i(az+b\overline z)$. Its real Hilbert adjoint, defined by $(Lz,v)_{\mathbb R}=(z,L_{\mathbb R}^*v)_{\mathbb R}$ for every $z,v$, is $L_{\mathbb R}^*v=-iav+ib\overline v$. Consequently $(Lz,v)_{\mathbb R}+(z,-L_{\mathbb R}^*v)_{\mathbb R}=0$ for every $z,v\in H$.

### Statement references

[math:def-realification-of-a-complex-vector-space](https://alphabetamath.cc/item/def-realification-of-a-complex-vector-space)

[math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space)

[math:def-inner-product-norm](https://alphabetamath.cc/item/def-inner-product-norm)

[math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[math:lem-l-two-with-the-integral-pairing-is-a-hilbert-space](https://alphabetamath.cc/item/lem-l-two-with-the-integral-pairing-is-a-hilbert-space)

[math:def-hilbert-space-adjoint](https://alphabetamath.cc/item/def-hilbert-space-adjoint)

[math:def-dual-space-of-a-normed-space](https://alphabetamath.cc/item/def-dual-space-of-a-normed-space)

[math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)

[math:def-measure-space](https://alphabetamath.cc/item/def-measure-space)

[math:def-essential-supremum-with-respect-to-a-measure](https://alphabetamath.cc/item/def-essential-supremum-with-respect-to-a-measure)

[math:def-complex-lp-and-euclidean-test-function-conventions](https://alphabetamath.cc/item/def-complex-lp-and-euclidean-test-function-conventions)

### Facts & Assumptions

[F1] Realification preserves the underlying set and addition and restricts scalar multiplication to real scalars; it preserves the original norm and induced metric ([math:def-realification-of-a-complex-vector-space](https://alphabetamath.cc/item/def-realification-of-a-complex-vector-space), [math:lem-complex-norm-realification-is-a-real-norm](https://alphabetamath.cc/item/lem-complex-norm-realification-is-a-real-norm)).

[F2] The complex inner product is linear in its first variable, conjugate symmetric and positive definite, and its norm is the square root of its diagonal value. A Hilbert space is complete for the metric induced by this norm ([math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space), [math:def-inner-product-norm](https://alphabetamath.cc/item/def-inner-product-norm), [math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)).

[F3] Under Countable Choice, every bounded linear functional on a real Hilbert space has a unique representing vector with equal norm ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [math:thm-riesz-representation-for-hilbert-space](https://alphabetamath.cc/item/thm-riesz-representation-for-hilbert-space)).

[F4] Under Countable Choice, complex $L^2(\mu)$ is a Hilbert space with the stated integral pairing; products of two $L^2$ functions are integrable and the pairing is independent of representatives ([math:lem-l-two-with-the-integral-pairing-is-a-hilbert-space](https://alphabetamath.cc/item/lem-l-two-with-the-integral-pairing-is-a-hilbert-space)).

[F5] For a real-valued measurable function $r$ with finite essential supremum norm, $|r|\le\|r\|_{\infty,\mu}$ almost everywhere ([math:def-essential-supremum-with-respect-to-a-measure](https://alphabetamath.cc/item/def-essential-supremum-with-respect-to-a-measure), [math:prop-essential-supremum-is-attained-as-the-least-essential-bound](https://alphabetamath.cc/item/prop-essential-supremum-is-attained-as-the-least-essential-bound)). Applying this to $r=|a|$ and $r=|b|$ gives $|a|\le\|a\|_\infty$ and $|b|\le\|b\|_\infty$ almost everywhere, with the coefficient norms specified in the Statement.

[F6] The real Hilbert adjoint of a bounded real-linear operator is uniquely characterized by its pairing identity ([math:def-hilbert-space-adjoint](https://alphabetamath.cc/item/def-hilbert-space-adjoint)).

[F7] Bounded real-linear functionals on $H_{\mathbb R}$ form its real normed dual, with norm $\|f\|=\sup_{\|u\|\le1}|f(u)|$ ([math:def-dual-space-of-a-normed-space](https://alphabetamath.cc/item/def-dual-space-of-a-normed-space)). A real-linear operator $T$ is bounded when $\|Tu\|\le C\|u\|$ for all $u$ and some real $C\ge0$ ([math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)).

[F8] On a measure space, complex measurability is componentwise; moduli, conjugates and products of measurable complex functions are measurable. Complex $L^2$ consists of square-integrable such functions modulo equality almost everywhere, with norm determined by the integral of the squared modulus ([math:def-complex-lp-and-euclidean-test-function-conventions](https://alphabetamath.cc/item/def-complex-lp-and-euclidean-test-function-conventions)).

[F9] On an arbitrary measure space the nonnegative integral is monotone, is homogeneous for positive finite scalars and has value zero on the zero function, and is additive on nonnegative measurable functions ([math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral), [math:cor-additivity-of-the-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/cor-additivity-of-the-nonnegative-lebesgue-integral)).

[F10] A nonnegative measurable function has integral zero if and only if it vanishes almost everywhere, without any finiteness assumption on its integral beforehand ([math:thm-nonnegative-integral-zero-iff-zero-almost-everywhere](https://alphabetamath.cc/item/thm-nonnegative-integral-zero-iff-zero-almost-everywhere)).

### Proof

[F1] Realification preserves the underlying set and addition and restricts scalar multiplication to real scalars; it preserves the original norm and induced metric ([math:def-realification-of-a-complex-vector-space](https://alphabetamath.cc/item/def-realification-of-a-complex-vector-space), [math:lem-complex-norm-realification-is-a-real-norm](https://alphabetamath.cc/item/lem-complex-norm-realification-is-a-real-norm)).

[F2] The complex inner product is linear in its first variable, conjugate symmetric and positive definite, and its norm is the square root of its diagonal value. A Hilbert space is complete for the metric induced by this norm ([math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space), [math:def-inner-product-norm](https://alphabetamath.cc/item/def-inner-product-norm), [math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)).

[F3] Under Countable Choice, every bounded linear functional on a real Hilbert space has a unique representing vector with equal norm ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [math:thm-riesz-representation-for-hilbert-space](https://alphabetamath.cc/item/thm-riesz-representation-for-hilbert-space)).

[F4] Under Countable Choice, complex $L^2(\mu)$ is a Hilbert space with the stated integral pairing; products of two $L^2$ functions are integrable and the pairing is independent of representatives ([math:lem-l-two-with-the-integral-pairing-is-a-hilbert-space](https://alphabetamath.cc/item/lem-l-two-with-the-integral-pairing-is-a-hilbert-space)).

[F5] For a real-valued measurable function $r$ with finite essential supremum norm, $|r|\le\|r\|_{\infty,\mu}$ almost everywhere ([math:def-essential-supremum-with-respect-to-a-measure](https://alphabetamath.cc/item/def-essential-supremum-with-respect-to-a-measure), [math:prop-essential-supremum-is-attained-as-the-least-essential-bound](https://alphabetamath.cc/item/prop-essential-supremum-is-attained-as-the-least-essential-bound)). Applying this to $r=|a|$ and $r=|b|$ gives $|a|\le\|a\|_\infty$ and $|b|\le\|b\|_\infty$ almost everywhere, with the coefficient norms specified in the Statement.

[F6] The real Hilbert adjoint of a bounded real-linear operator is uniquely characterized by its pairing identity ([math:def-hilbert-space-adjoint](https://alphabetamath.cc/item/def-hilbert-space-adjoint)).

[F7] Bounded real-linear functionals on $H_{\mathbb R}$ form its real normed dual, with norm $\|f\|=\sup_{\|u\|\le1}|f(u)|$ ([math:def-dual-space-of-a-normed-space](https://alphabetamath.cc/item/def-dual-space-of-a-normed-space)). A real-linear operator $T$ is bounded when $\|Tu\|\le C\|u\|$ for all $u$ and some real $C\ge0$ ([math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)).

[F8] On a measure space, complex measurability is componentwise; moduli, conjugates and products of measurable complex functions are measurable. Complex $L^2$ consists of square-integrable such functions modulo equality almost everywhere, with norm determined by the integral of the squared modulus ([math:def-complex-lp-and-euclidean-test-function-conventions](https://alphabetamath.cc/item/def-complex-lp-and-euclidean-test-function-conventions)).

[F9] On an arbitrary measure space the nonnegative integral is monotone, is homogeneous for positive finite scalars and has value zero on the zero function, and is additive on nonnegative measurable functions ([math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral), [math:cor-additivity-of-the-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/cor-additivity-of-the-nonnegative-lebesgue-integral)).

[F10] A nonnegative measurable function has integral zero if and only if it vanishes almost everywhere, without any finiteness assumption on its integral beforehand ([math:thm-nonnegative-integral-zero-iff-zero-almost-everywhere](https://alphabetamath.cc/item/thm-nonnegative-integral-zero-iff-zero-almost-everywhere)).

**Given:** Countable Choice, a complex Hilbert space $H$ with first-variable-linear inner product, and, for the coefficient assertion, the measure space and functions $a,b$ in the statement.

**Goal:** Establish the real Hilbert and representation assertions and compute the real adjoint on $L^2(\mu;\mathbb C)$.

1.1 Restriction of scalars gives a real vector space. Taking real parts of the complex inner-product identities gives real linearity in the first variable and symmetry; symmetry then gives linearity in the second. Moreover $(u,u)_{\mathbb R}=\langle u,u\rangle_H\ge0$, with equality only for $u=0$. Thus this is a real inner product and its induced norm is the original norm. [F1, F2]

1.2 On complex $L^2$, conjugation preserves measurability and the $L^2$ norm. For $c\in\{a,b\}$, put $M=\|c\|_\infty$ and let $u\in L^2$ have a finite-valued measurable representative. The function $q=\max\{|cu|^2-M^2|u|^2,0\}$ is nonnegative measurable and vanishes almost everywhere by the essential bound. Thus $\int q\,d\mu=0$ by F10, before assuming integrability of $|cu|^2$. The pointwise inequality $|cu|^2\le M^2|u|^2+q$, followed by monotonicity, additivity and homogeneity, gives $\int|cu|^2\,d\mu\le M^2\int|u|^2\,d\mu<\infty$; when $M=0$, the zero-function clause gives the same inequality, and $\int|u|^2$ is finite. Hence $\|cu\|_2\le M\|u\|_2$. Taking $u=z,\overline z,v,\overline v$ as needed shows that $az$, $b\overline z$, $av$ and $b\overline v$ belong to $L^2$. The triangle inequality now gives $\|Lz\|_2\le(\|a\|_\infty+\|b\|_\infty)\|z\|_2$, and the same bound holds for the proposed adjoint applied to $v$. These operations respect equality almost everywhere; $L$ and the proposed adjoint are bounded and real-linear. [F4, F5, F7, F8, F9, F10, algebra]

2.1 The induced metric is therefore the original metric, so every realified Cauchy sequence converges because $H$ is complete. The realification is a real Hilbert space. Applying real Riesz representation gives the unique vector $y$ and the norm equality for every bounded real-linear $f$. [F1, F2, F3, F7, step 1.1]

2.2 For arbitrary $z,v\in L^2$, the integrands below are integrable. Since $a=\overline a$ almost everywhere and a complex number and its conjugate have the same real part, $\operatorname{Re}\int iaz\overline v=\operatorname{Re}\int z\overline{(-iav)}$ and $\operatorname{Re}\int ib\overline z\,\overline v=\operatorname{Re}\int z\overline{(ib\overline v)}$. Adding the identities gives $(Lz,v)_{\mathbb R}=(z,-iav+ib\overline v)_{\mathbb R}$. [F4, step 1.2, algebra]

3.1 By the defining uniqueness of the real adjoint, the vector on the right in step 2.2 is $L_{\mathbb R}^*v$. Moving that pairing to the other side gives the cancellation identity. [F6, step 1.2, step 2.2, algebra] ∎

### Remarks

The coefficient calculation is an identity for bounded operators on $L^2$; it makes no assertion about the domain of a Laplacian, evolution, or extensions of pairings to other spaces.


## Endpoint maps and exact steering from a null-control operator

[Open item](item-lem-se-endpoint-control-factorization) · level 1


### Statement

Assume the Axiom of Choice. Let $E$ and $U$ be real Hilbert spaces, with $U$ separable, and let $T>0$. An evolution here is a family of bounded real-linear maps $W(t,r):E\to E$ for $t,r\in[0,T]$ such that $W(t,t)=I$, $W(t,s)W(s,r)=W(t,r)$, and $(t,r)\mapsto W(t,r)x$ is continuous for each $x\in E$. Assume $M=\sup_{0\le r\le T}\|W(T,r)\|<\infty$ and that $B(r):U\to E$ is real-linear, $K=\sup_r\|B(r)\|<\infty$, and $r\mapsto B(r)u$ is continuous for each $u\in U$.

Let $Z=L^2((0,T);U)$ be the space of strongly measurable functions modulo almost-everywhere equality with square-integrable norm, equipped with its integral real inner product. Define $L:Z\to E$ by $Lh=\int_0^T W(T,r)B(r)h(r)\,dr$. Assume, in addition, that for each $v\in E$ the function $r\mapsto B(r)^*W(T,r)^*v$ is strongly measurable. Then $L$ is bounded, and its real Hilbert adjoint is $(L^*v)(r)=B(r)^*W(T,r)^*v$ almost everywhere.

If $\|L^*v\|_Z\ge c\|v\|_E$ for every $v\in E$, where $c>0$, set $Q=LL^*$ and $R=L^*Q^{-1}$. Then $LR=I_E$ and $\|R\|\le c^{-1}$. For the controlled endpoint $u(T)=W(T,0)x_0+Lh$, the bounded linear selection $G(x_0,x_T)=R(x_T-W(T,0)x_0)$ steers $x_0$ to $x_T$.

For continuous controls, suppose that a bounded linear map $J:E\to C([0,T];U)$ represents the observation: its equivalence-class map $iJ$ equals $L^*$. Then $R_C=JQ^{-1}$ is a bounded continuous-control selection with $LR_C=I_E$, where $L$ acts on a continuous function through its class in $Z$. Thus $G_C(x_0,x_T)=R_C(x_T-W(T,0)x_0)$ steers the endpoints. Independently, if a bounded linear null-control selection $N:E\to C([0,T];U)$ satisfies $W(T,0)x+LNx=0$ for every $x\in E$, then $G_N(x_0,x_T)=N(x_0-W(0,T)x_T)$ also steers $x_0$ to $x_T$.

For a complex state space treated as real, multiplication by $-i$ is a real-linear operation. In particular, if multiplication by a coefficient $\varphi$ defines a bounded real-linear map $M_\varphi:U\to E$, the Schrödinger control action may be chosen as $B=-iM_\varphi$, so its contribution is $\int_0^T W(T,r)(-i\varphi h(r))\,dr$. No commutation of $i$ with a real-linear evolution is assumed.

### Statement references

[def-se-foundation-control-language](item-def-se-foundation-control-language)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-hilbert-space-adjoint](https://alphabetamath.cc/item/def-hilbert-space-adjoint)

[math:lem-bochner-time-l2-is-separable-hilbert](https://alphabetamath.cc/item/lem-bochner-time-l2-is-separable-hilbert)

[math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)

[math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)

[math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)

### Facts & Assumptions

[F1] Under Choice, the Bochner $L^2$ space over a separable real Hilbert space, with the Borel sigma-algebra on $(0,T)$ and restricted Lebesgue measure, is a Hilbert space with the integral pairing; finite-valued interval-step functions are dense ([math:lem-bochner-time-l2-is-separable-hilbert](https://alphabetamath.cc/item/lem-bochner-time-l2-is-separable-hilbert), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)). This is the Borel-time supplier statement; step 1.2 transfers its conclusions to the completed Lebesgue time convention used here.

[F2] A strongly measurable Banach-valued function with integrable norm is Bochner integrable; its integral obeys the norm estimate and is linear. Bounded linear maps commute with this integral ([math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion), [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality), [math:lem-linearity-of-the-bochner-integral](https://alphabetamath.cc/item/lem-linearity-of-the-bochner-integral), [math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration)).

[F3] The Hilbert adjoint is defined by the pairing identity in [math:def-hilbert-space-adjoint](https://alphabetamath.cc/item/def-hilbert-space-adjoint). Under Countable Choice, the Hilbert-adjoint identities in [math:thm-hilbert-adjoint-properties](https://alphabetamath.cc/item/thm-hilbert-adjoint-properties) give bounded linear adjoints with $\|T^*\|=\|T\|$ and $T^{**}=T$ for bounded operators between real or complex Hilbert spaces. The assumed Axiom of Choice supplies Countable Choice. We use the real-field case for $E$, $U$ and the Hilbert time space $Z$ established in step 1.2. Inner products satisfy Cauchy–Schwarz ([math:thm-cauchy-schwarz-in-an-inner-product-space](https://alphabetamath.cc/item/thm-cauchy-schwarz-in-an-inner-product-space)).

[F4] For a bounded observation operator with lower bound $c$, its Gramian is invertible and the observation composed with its inverse is a right inverse of the observation adjoint with norm at most $c^{-1}$. A bounded continuous representative map gives the corresponding continuous lift ([lem-se-observation-gramian-right-inverse](item-lem-se-observation-gramian-right-inverse)).

[F5] Exact steering and bounded endpoint-to-control selections have the meanings specified in [def-se-foundation-control-language](item-def-se-foundation-control-language); the endpoint relation in this lemma is the displayed affine formula.

[F6] Strong measurability means pointwise norm convergence of measurable finite-range simple functions outside a measurable null set. A measurable simple function has a finite range and measurable level sets; finite intersections of measurable partition cells give another such function ([math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function), [math:def-banach-valued-simple-function-and-integral](https://alphabetamath.cc/item/def-banach-valued-simple-function-and-integral)).

[F7] The space $C([0,T];U)$ consists of norm-continuous paths with pointwise vector operations and finite supremum norm $\|f\|_\infty=\sup_{0\le r\le T}\|f(r)\|_U$ ([def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)). Time-space classes and time integrals here use restricted Lebesgue measure on its Lebesgue sigma-algebra, as in that supplier.

[F8] Under Countable Choice, [math:cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure](https://alphabetamath.cc/item/cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure) identifies Lebesgue measure with the completion of its Borel restriction. At dimension one, intersecting its decomposition with $(0,T)$ shows that every Lebesgue measurable time set agrees with a relative Borel set outside a relative Borel null set; every Lebesgue null time set is contained in such a Borel null set. The measures agree on Borel sets. [math:thm-finite-and-countable-subadditivity-of-measures](https://alphabetamath.cc/item/thm-finite-and-countable-subadditivity-of-measures) makes a countable union of Borel null sets Borel and null. The assumed Axiom of Choice supplies the countable selections and the Countable Choice hypothesis of the completion supplier.

[F9] On any measure space, Hölder's inequality at $p=q=2$ gives $\int|fg|\le(\int|f|^2)^{1/2}(\int|g|^2)^{1/2}$ for measurable real-valued $f,g$ with finite square integrals; the product is integrable ([math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals), Statement, clause 1).

[F10] A real Hilbert space is a complete real inner-product space with its induced norm ([math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)). A real-linear map between real normed spaces is bounded when $\|Ax\|\le C\|x\|$ for some finite $C\ge0$ ([math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)). Its operator norm is $\|A\|=\sup_{\|x\|\le1}\|Ax\|$, and rescaling gives $\|Ax\|\le\|A\|\|x\|$, including the zero-space case ([math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)).

### Proof

**Given:** The evolution, control action, measurability hypotheses, and Choice in the statement, together with the additional hypotheses for each conditional conclusion.

**Goal:** Identify the endpoint adjoint and construct the asserted bounded steering selections, retaining the real-linear placement of $-i$.

1.1 Put $A(r)=W(T,r)B(r)$. By F10, $\|A(r)u\|\le\|W(T,r)\|\|B(r)u\|\le MK\|u\|$, and taking the unit-ball supremum gives $\|A(r)\|\le MK$. For fixed $u\in U$, the increment of $A(r)u$ at $r_0$ is bounded by $M\|B(r)u-B(r_0)u\|+\|(W(T,r)-W(T,r_0))B(r_0)u\|$. Both terms tend to zero by the stated strong continuity hypotheses. Thus $r\mapsto A(r)u$ is continuous for every fixed $u$, without a separability hypothesis on $E$. [given, F10]

1.2 Let $Z_B$ denote the Borel-time space of F1 and let $Z$ use the completed time measure of F7. A Borel-strongly-measurable representative is also Lebesgue-strongly-measurable. Conversely, let $h$ be a representative in $Z$, and choose finite-range Lebesgue simple approximants $s_n$ converging to $h$ outside a Lebesgue null set, as in F6. Apply F8 to their countably many level sets and choose relative Borel replacements. Disjointifying each finite family, and putting zero on any remainder, gives finite-range Borel simple functions $t_n$ equal to $s_n$ off Borel null sets. Choose also a Borel null cover of the original exceptional set. Their countable union $N$ is Borel and null by F8. Define $\widetilde h=h$ off $N$ and $\widetilde h=0$ on $N$. The Borel simple functions $t_n\mathbf1_{N^c}$ converge pointwise in norm to $\widetilde h$ everywhere, so $\widetilde h$ is Borel-strongly-measurable and represents the original Lebesgue class. Two Borel-time representatives which agree Lebesgue-almost everywhere agree outside a Borel null set by F8, so this class map is also injective. It preserves sums and real scalar multiples. Scalar norm and inner-product integrals agree by simple approximation, since the completed measure agrees with the Borel measure on Borel sets; exceptional sets can be assigned zero before taking these integrals. Thus the class map is an onto real-linear isometry preserving the integral inner product. Transporting F1 through this map proves that the specified $Z$ is Hilbert and that the same finite-valued interval-step controls are dense in $Z$. No restriction of the admissible Lebesgue control classes is imposed. [given, F1, F6, F7, F8, choose, construct]

2.1 For $n\ge1$, partition $[0,T)$ into the $2^n$ intervals $I_{n,k}=[kT2^{-n},(k+1)T2^{-n})$ and put $q_n(r)=kT2^{-n}$ on $I_{n,k}$, with $q_n(T)=T$. Then $|q_n(r)-r|\le T2^{-n}$. If $f:[0,T]\to Y$ is a continuous curve in any Banach space $Y$, the function $f(q_n(r))$ is finite-valued and measurable: its level sets are unions of these measurable interval cells, possibly with the singleton $\{T\}$. Continuity gives $f(q_n(r))\to f(r)$ for every $r$. These are explicit simple approximants, so $f$, and its restriction to $(0,T)$, are strongly measurable by F6. In particular this applies to every curve $A(r)u$ from step 1.1. [given, F6, step 1.1, construct]

3.1 For a strongly measurable representative $h$ of a class in $Z$, F6 supplies measurable finite-range simple functions $s_n$ with $s_n(r)\to h(r)$ off a measurable null set. Define $g_n(r)=A(q_n(r))s_n(r)$ on $(0,T)$. If $s_n$ takes the value $u_j$ on a measurable cell $H_{n,j}$, then $g_n$ takes the constant value $A(kT2^{-n})u_j$ on $H_{n,j}\cap I_{n,k}$; merging coincident values gives a measurable finite-range simple function. At each $r$ outside the exceptional null set, $\|g_n(r)-A(r)h(r)\|\le MK\|s_n(r)-h(r)\|+\|(A(q_n(r))-A(r))h(r)\|\to0$. The second term tends to zero by step 1.1 applied to the fixed vector $h(r)$, while the first tends to zero by the chosen approximation. Therefore $r\mapsto A(r)h(r)$ is strongly measurable directly by F6, even when $E$ is not separable. [given, F6, step 1.1, step 2.1, construct]

3.2 For $f\in C([0,T];U)$, step 2.1 gives strong measurability of its restriction to $(0,T)$, while F7 gives $\int_0^T\|f(r)\|_U^2\,dr\le T\|f\|_\infty^2<\infty$. Hence $if=[f|_{(0,T)}]$ defines a map $i:C([0,T];U)\to Z$ with $\|if\|_Z\le\sqrt T\|f\|_\infty$. Restriction and passage to equivalence classes preserve pointwise sums and real scalar multiples, so $i$ is bounded and real-linear. Every occurrence of $Lf$ for a continuous control consequently means $L(if)$. [given, F1, F6, F7, step 2.1, step 1.2]

4.1 Choose the representative $h$ to be zero on the exceptional null set of its strong simple approximation, as allowed by F6. The scalar function $f(r)=\|h(r)\|_U$ is measurable: the norms of the simple approximants, also set to zero on that set, are measurable scalar simple functions converging pointwise to $f$. By the definition of $Z$, $\int_0^T f(r)^2\,dr=\|h\|_Z^2<\infty$. The constant function $g(r)=1$ is measurable with $\int_0^T g(r)^2\,dr=T<\infty$ for the time measure in F7. Apply F9 to $f,g$ on this restricted Lebesgue measure space, with conjugate exponents $p=q=2$, to obtain $\int_0^T\|h(r)\|_U\,dr\le\sqrt T\|h\|_Z$. By step 1.1 and F10, $\|A(r)h(r)\|_E\le MK\|h(r)\|_U$; together with step 3.1, this gives the strong measurability and integrable norm needed in F2. Hence the endpoint integrand is Bochner integrable and $\|Lh\|\le MK\sqrt T\|h\|_Z$. Linearity follows from the integral's linearity. If $h$ and $\widetilde h$ agree almost everywhere, their endpoint integrands also agree there; the integral norm bound applied to their difference gives $Lh=L\widetilde h$. Thus $L$ is a well-defined bounded real-linear map on $Z$. [given, F1, F2, F6, F7, F9, F10, step 1.1, step 1.2, step 3.1]

5.1 Put $Ov(r)=B(r)^*W(T,r)^*v$. By F3, both adjoints are bounded and real-linear, with $\|B(r)^*\|=\|B(r)\|\le K$ and $\|W(T,r)^*\|=\|W(T,r)\|\le M$. Thus $\|Ov(r)\|\le MK\|v\|$. The assumed strong measurability gives $Ov\in Z$, and pointwise real linearity and this estimate make $O:E\to Z$ bounded and real-linear. For a finite-valued step control $h$, commute the bounded functional $x\mapsto(x,v)_E$ with the Bochner integral and use the defining adjoint identities pointwise to get $(Lh,v)_E=\int_0^T(h(r),Ov(r))_U\,dr=(h,Ov)_Z$. Density of such controls and the bounds for $L$ and $O$ extend this equality to every $h\in Z$. Uniqueness of the Hilbert adjoint therefore gives $O=L^*$. [given, F1, F2, F3, F6, step 1.2, step 4.1]

5.2 The evolution identities give $W(T,0)W(0,T)=I_E$. With $y=x_0-W(0,T)x_T$, the null-control hypothesis gives $LNy=-W(T,0)y$. Consequently $W(T,0)x_0+LN(y)=W(T,0)W(0,T)x_T=x_T$. The composition defining $G_N$ is bounded and real-linear. [given, F5, step 4.1, step 3.2]

6.1 Apply [F4] with observation $O=L^*$ and observation space $Z$. Its adjoint is $L$, because the identity in step 5.1 also characterizes $O^*$ by symmetry of the real inner products. Thus $Q=O^*O=LL^*$ is invertible, $R=OQ^{-1}$ obeys $LR=I_E$, and $\|R\|\le c^{-1}$. Substitution into the endpoint formula gives $W(T,0)x_0+LG(x_0,x_T)=x_T$; boundedness follows from the bound for $R$ and boundedness of $W(T,0)$. [F3, F4, F5, step 1.2, step 5.1]

7.1 If $J$ is supplied, [F4] gives $R_C=JQ^{-1}$, a bounded map into $C([0,T];U)$ with $iR_C=R$. Step 3.2 supplies the bounded linear class map $i$ required in F4, so $LR_C=L(iR_C)=LR=I_E$. The same substitution proves continuous-control steering and boundedness of $G_C$. [given, F4, F5, step 3.2, step 6.1]

8.1 If $B=-iM_\varphi$, the endpoint formula in step 4.1 has integrand $W(T,r)(-i\varphi h(r))$ by substitution. The proof used only real linearity, so it does not move $i$ through $W(T,r)$. This proves the stated conditional Schrödinger formulation. [given, step 4.1] ∎

### Remarks

The observation measurability, the lower bound, and any continuous representative map are hypotheses to verify in an application. The lemma does not assert them from strong continuity of $W$ alone. The evolution and control action may be realifications of complex-linear operators; all conclusions stated here are real-linear.


## Cubic and quintic time bounds from L4 Linfinity control

[Open item](item-lem-se-power-time-integrability) · level 1


### Statement

Assume the Axiom of Choice. Let $\Omega\subseteq\mathbb R^n$ be open, $n\ge1$, and $T>0$. Let $H^1(\Omega)=W^{1,2}(\Omega;\mathbb C)$ have its usual norm including the function and all first weak derivatives, and let $H^1_0(\Omega)$ be the closure of $C_c^\infty(\Omega;\mathbb C)$ in that norm. Put $X_T=C([0,T];H^1_0(\Omega))\cap L^4_tL^\infty_x$, with norm $\|v\|_{X_T}=\sup_{0\le t\le T}\|v(t)\|_{H^1}+\|v\|_{L^4_tL^\infty_x}$. Here the mixed space uses measurable spatial sections and the $L^4$ norm of their essential suprema; it does not require strong measurability into $L^\infty(\Omega)$. The continuous path and the mixed representative are required to agree as spatial almost-everywhere classes for almost every time.

For $m\in\{3,5\}$ and $\lambda\in\mathbb R$, define $g(z)=\lambda|z|^{m-1}z$. Then $t\mapsto g(v(t))$ is an element of $L^1(0,T;H^1_0(\Omega))$ for each $v\in X_T$, and there is a constant $C_m$ depending only on $m$ such that

$$\|g(v)\|_{L^1_tH^1_0}\le C_m|\lambda|T^{(5-m)/4}\|v\|_{X_T}^m.$$

For every $u,v\in X_T$,

$$\|g(v)-g(u)\|_{L^1_tH^1_0}\le C_m|\lambda|T^{(5-m)/4}(\|u\|_{X_T}^{m-1}+\|v\|_{X_T}^{m-1})\|v-u\|_{X_T}.$$

The exponent of $T$ is zero when $m=5$; no positive small-time power is asserted in that case.

### Statement references

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)

[math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure)

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

### Facts & Assumptions

**Given:** The Choice assumption, domain, time interval, exponents, functions and norms in the statement.

**Goal:** Prove strong measurability and time integrability of the nonlinear terms and both estimates.

[F1] For bounded $H^1$ functions, the polynomial rule gives $g(w)\in H^1$, preserves $H^1_0$, and supplies the pointwise-in-time growth and difference estimates displayed in [lem-se-complex-polynomial-energy-rule](item-lem-se-complex-polynomial-energy-rule).

[F2] A strongly measurable Banach-valued map is an almost-everywhere norm limit of measurable finite-range simple maps. Such a map is Bochner integrable exactly when its norm is integrable. Mixed time-space norms use measurable section norms and need not be Bochner norms into $L^\infty$ ([math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function), [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion), [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)).

[F3] Hölder's integral inequality holds for conjugate exponents, including the $1,\infty$ endpoints ([math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)).

[F4] A real globally Lipschitz map fixing zero acts on real $H^1$ functions by the weak chain rule. An $L^2$-convergent sequence has an almost-everywhere convergent subsequence, and dominated convergence applies to integrable scalar majorants ([math:thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions](https://alphabetamath.cc/item/thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions), [math:cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences](https://alphabetamath.cc/item/cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences), [math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence)).

[F5] A smooth compactly supported real cutoff exists that is one on $[-1,1]$. The $H^1$ norm and $H^1_0$ closure are as stated ([math:lem-schwartz-cutoffs-from-the-standard-smooth-step](https://alphabetamath.cc/item/lem-schwartz-cutoffs-from-the-standard-smooth-step), [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm), [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure)). Full Choice supplies the choice hypotheses of these inputs ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

[F6] Under the stated Axiom of Choice, $W^{1,2}(\Omega;\mathbb C)$ with the stated Sobolev norm is Banach ([math:thm-sobolev-spaces-are-banach-spaces](https://alphabetamath.cc/item/thm-sobolev-spaces-are-banach-spaces), applied with $k=1$, $p=2$ and $\mathbb K=\mathbb C$). Every closed linear subspace of a Banach space, equipped with the restricted norm, is Banach ([math:lem-closed-subspace-of-a-banach-space-is-banach](https://alphabetamath.cc/item/lem-closed-subspace-of-a-banach-space-is-banach)).

### Proof

**Given:** The Choice assumption, domain, time interval, exponents, functions and norms in the statement.

**Goal:** Prove strong measurability and time integrability of the nonlinear terms and both estimates.

[F1] For bounded $H^1$ functions, the polynomial rule gives $g(w)\in H^1$, preserves $H^1_0$, and supplies the pointwise-in-time growth and difference estimates displayed in [lem-se-complex-polynomial-energy-rule](item-lem-se-complex-polynomial-energy-rule).

[F2] A strongly measurable Banach-valued map is an almost-everywhere norm limit of measurable finite-range simple maps. Such a map is Bochner integrable exactly when its norm is integrable. Mixed time-space norms use measurable section norms and need not be Bochner norms into $L^\infty$ ([math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function), [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion), [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)).

[F3] Hölder's integral inequality holds for conjugate exponents, including the $1,\infty$ endpoints ([math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)).

[F4] A real globally Lipschitz map fixing zero acts on real $H^1$ functions by the weak chain rule. An $L^2$-convergent sequence has an almost-everywhere convergent subsequence, and dominated convergence applies to integrable scalar majorants ([math:thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions](https://alphabetamath.cc/item/thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions), [math:cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences](https://alphabetamath.cc/item/cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences), [math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence)).

[F5] A smooth compactly supported real cutoff exists that is one on $[-1,1]$. The $H^1$ norm and $H^1_0$ closure are as stated ([math:lem-schwartz-cutoffs-from-the-standard-smooth-step](https://alphabetamath.cc/item/lem-schwartz-cutoffs-from-the-standard-smooth-step), [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm), [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure)). Full Choice supplies the choice hypotheses of these inputs ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

[F6] Under the stated Axiom of Choice, $W^{1,2}(\Omega;\mathbb C)$ with the stated Sobolev norm is Banach ([math:thm-sobolev-spaces-are-banach-spaces](https://alphabetamath.cc/item/thm-sobolev-spaces-are-banach-spaces), applied with $k=1$, $p=2$ and $\mathbb K=\mathbb C$). Every closed linear subspace of a Banach space, equipped with the restricted norm, is Banach ([math:lem-closed-subspace-of-a-banach-space-is-banach](https://alphabetamath.cc/item/lem-closed-subspace-of-a-banach-space-is-banach)).



**Proof technique:** direct.

1.1 By [F6], $H^1(\Omega)=W^{1,2}(\Omega;\mathbb C)$ is Banach under the already assumed Axiom of Choice. The test functions form a complex linear subspace. Their norm closure $H^1_0(\Omega)$ is also linear: for $u,v$ in that closure and $a,b\in\mathbb C$, approximate $u,v$ by test functions with errors less than $\varepsilon/(1+|a|+|b|)$ and use the norm triangle inequality to approximate $au+bv$. The closure is closed: if $w$ is in its ambient closure, choose an element $u\in H^1_0$ within $\varepsilon/2$ of $w$, then a test function within $\varepsilon/2$ of $u$; hence $w$ itself belongs to the test-function closure. Its norm is the restriction of the $H^1$ norm, so the closed-subspace result in [F6] makes $H^1_0(\Omega)$ Banach. This verifies the target-space hypothesis of the time spaces and the Banach-valued inputs in [F2]. [F2, F5, F6, given, algebra]

1.2 Choose the cutoff $\chi$ in [F5] and set $T_R(s)=s\chi(s/R)$ for positive integers $R$. It is smooth, globally Lipschitz, fixes zero and agrees with $s$ on $[-R,R]$. Apply it to the real and imaginary parts of $w\in H^1_0$ and call the resulting complex function $w_R$. By [F4], $w_R\in H^1$. It lies in $H^1_0$: apply the same smooth zero-fixing operation to compactly supported smooth approximants of $w$. Their images are compactly supported and smooth. For convergence in $H^1$, use the Lipschitz bound for the functions and the chain rule for derivatives; after taking an almost-everywhere convergent subsequence, subtract the derivatives as $T_R'(q_k)(Dq_k-Dq)+(T_R'(q_k)-T_R'(q))Dq$ and use boundedness and continuity of $T_R'$ and dominated convergence. The same argument, applied to any convergent sequence, proves that $w\mapsto w_R$ is continuous in $H^1$. Here the subsequence argument gives convergence of the whole sequence because every subsequence admits a further convergent subsequence. [F4, F5, given, construct]

2.1 The functions $w_R$ have a spatial essential bound depending only on $R$. On any uniformly bounded sequence converging in $H^1$, the polynomial map $g$ is continuous into $H^1$: take an almost-everywhere convergent subsequence, use the polynomial value and weak-derivative formulas in [F1], subtract the derivative terms by adding the coefficient at the approximating function times the limiting derivative, and apply dominated convergence to the bounded coefficient differences times that limiting derivative. The other derivative terms tend to zero in $L^2$ by their uniform coefficient bounds. The subsequence criterion again gives full sequential convergence. Consequently $t\mapsto g(v_R(t))$ is a continuous $H^1_0$-valued path, where $v_R(t)$ is the componentwise truncation of $v(t)$; [F1] supplies zero-boundary preservation. [F1, F4, step 1.2, given]

3.1 Each continuous path on the compact interval is a uniform limit of finite-range measurable time-step functions, obtained from sufficiently fine finite partitions. Thus each path $g(v_R)$ is strongly measurable. For almost every $t$, the mixed-norm hypothesis gives $\|v(t)\|_\infty<\infty$ and the continuous and mixed representatives agree as spatial classes; for all sufficiently large integers $R$, $v_R(t)=v(t)$ in $H^1$, so $g(v_R(t))=g(v(t))$. Diagonal approximation of the countably many strongly measurable paths, or equivalently choosing simple approximants with errors at most $1/R$ outside null sets, shows that their pointwise limit is strongly measurable. This uses only the measurable mixed section norm, not strong measurability into $L^\infty$. The same reasoning applies to $u$, and differences of the resulting strongly measurable maps are strongly measurable by subtracting simple approximants. [F1, F2, step 1.1, step 2.1, given, construct]

4.1 Write $A_v(t)=\|v(t)\|_\infty$, $B_v=\sup_t\|v(t)\|_{H^1}$ and $a_v=\|A_v\|_{L^4(0,T)}$. By [F1], $\|g(v(t))\|_{H^1}\le C_m|\lambda|A_v(t)^{m-1}B_v$ for almost every $t$. Apply [F3] to $A_v^{m-1}$ and $1$ with reciprocal exponents $(m-1)/4$ and $(5-m)/4$, interpreting reciprocal exponent zero as $L^\infty$. This gives $\int_0^T A_v^{m-1}\,dt\le T^{(5-m)/4}a_v^{m-1}$, including the $m=5$ endpoint. Thus the nonlinear norm is integrable; [F2] gives Bochner integrability and the first displayed bound since $a_v,B_v\le\|v\|_{X_T}$. [F1, F2, F3, step 1.1, step 3.1, given, algebra]

5.1 Put $h=v-u$ and use the difference estimate in [F1]. Its first part is bounded in time by $C_m|\lambda|B_h(A_u^{m-1}+A_v^{m-1})$, whose integral is controlled as in step 4.1. For the second part use $C_m|\lambda|(B_u+B_v)(A_u^{m-2}+A_v^{m-2})A_h$. Repeated Hölder gives $\int_0^T A_w^{m-2}A_h\,dt\le T^{(5-m)/4}a_w^{m-2}a_h$: the reciprocal exponents are $(m-2)/4$, $1/4$, and $(5-m)/4$, with the last factor interpreted as $L^\infty$ for $m=5$. Since every $a$ and $B$ is bounded by the corresponding $X_T$ norm, and $x^{m-2}y+xy^{m-2}\le x^{m-1}+y^{m-1}$ for nonnegative $x,y$, the second displayed bound follows after enlarging $C_m$. The integrable bound and step 3.1 also give the asserted $L^1$ membership of the difference. [F1, F2, F3, step 3.1, step 4.1, given, algebra] ∎


## A bounded endpoint selector yields small nonlinear exact steering

[Open item](item-lem-se-endpoint-feedback-contraction) · level 2


### Statement

Assume the Axiom of Choice and fix $T>0$. Let $E$, $U$ and $X$ be real Banach spaces, meaning complete real normed vector spaces. Write $C_T(E)=C([0,T];E)$ for norm-continuous paths with the supremum norm, and similarly for $U$. Suppose $X$ is continuously embedded in $C_T(E)$, with $\sup_{0\le t\le T}\|v(t)\|_E\le e\|v\|_X$ for some $e\ge0$. Let $A:E\to X$ and $D_c:C_T(U)\to X$ be bounded real-linear maps. The associated controlled linear solution is $Ax+D_ch$; the same maps are used throughout this statement. Suppose a bounded real-linear selector $G:E\times E\to C_T(U)$ satisfies $\|G(x,y)\|_{C_T(U)}\le g(\|x\|_E+\|y\|_E)$ and that $Ax+D_cG(x,y)$ has initial value $x$ and terminal value $y$ for every $x,y\in E$.

Let $m\in\mathbb R$ satisfy $m>1$, and let $C\ge0$. Powers of nonnegative norms use $0^\alpha=0$ for real $\alpha>0$. Suppose $N:X\to X$ satisfies $N(0)=0$, $N(v)(0)=0$ for every $v\in X$, $\|N(v)\|_X\le C(\|v\|_X^2+\|v\|_X^m)$, and $\|N(v)-N(u)\|_X\le C(\|u\|_X+\|v\|_X+\|u\|_X^{m-1}+\|v\|_X^{m-1})\|v-u\|_X$ for all $u,v\in X$. For endpoints $x_0,x_T\in E$, define $h_v=G(x_0,x_T-N(v)(T))$ and $\mathcal T(v)=Ax_0+N(v)+D_ch_v$.

There are $r>0$ and $\delta>0$, depending only on the displayed constants and maps for the fixed time interval, such that whenever $\|x_0\|_E+\|x_T\|_E\le\delta$, the map $\mathcal T$ takes the closed radius-$r$ ball of $X$ into itself and is a contraction there with constant at most $1/2$. Its unique fixed point in that ball has initial value $x_0$ and terminal value $x_T$. Its selected control is $h_v\in C_T(U)$. No uniqueness outside that ball is asserted.

### Statement references

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[def-se-foundation-control-language](item-def-se-foundation-control-language)

[math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[lem-se-endpoint-control-factorization](item-lem-se-endpoint-control-factorization)

[math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point)

[math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)

[math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)

[math:def-real-power](https://alphabetamath.cc/item/def-real-power)

### Facts & Assumptions

[F1] A Banach space is complete in its norm metric. The continuous-path notation and supremum norm are as in [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces); that definition assumes countable choice, available under [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)

[F2] A bounded endpoint-to-control selector is a bounded linear map for the sum norm on endpoint pairs and is required separately to steer the specified linear evolution. The continuous-control construction of [lem-se-endpoint-control-factorization](item-lem-se-endpoint-control-factorization) supplies such a selector when its own real-Hilbert, evolution, observation and continuous-lift hypotheses hold and the present solution maps satisfy $(Ax)(0)=x$, $(D_ch)(0)=0$, $(Ax)(T)=W(T,0)x$ and $(D_ch)(T)=Lh$ for every $x\in E$ and $h\in C_T(U)$. Here $W$ and $L$ are that supplier's evolution and endpoint operator, with $L$ acting on continuous controls through their $L^2$ classes. Its identity $W(T,0)x+LG(x,y)=y$ then gives the required terminal trace, while the first two trace identities give the initial trace. [def-se-foundation-control-language](item-def-se-foundation-control-language)

[F3] A contraction of a nonempty complete metric space into itself has a unique fixed point in that space. [math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point)

[F4] Bounded linear operators and their least bounds have the meanings in [math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator) and [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm). In particular $\|Av\|\le\|A\|\|v\|$ and $\|D_ch\|\le\|D_c\|\|h\|$ in the appropriate norms.

[F5] Real powers use the positive-base exponential definition and the zero-base positive-exponent convention of [math:def-real-power](https://alphabetamath.cc/item/def-real-power). The exponent and iterated-power identities are supplied by [math:thm-real-power-laws](https://alphabetamath.cc/item/thm-real-power-laws). The logarithm is strictly increasing with $\log1=0$ by [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws), and the exponential is strictly increasing by [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing). Thus positive powers preserve order on nonnegative bases, including zero by the convention.

### Proof

[F1] A Banach space is complete in its norm metric. The continuous-path notation and supremum norm are as in [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces); that definition assumes countable choice, available under [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)

[F2] A bounded endpoint-to-control selector is a bounded linear map for the sum norm on endpoint pairs and is required separately to steer the specified linear evolution. The continuous-control construction of [lem-se-endpoint-control-factorization](item-lem-se-endpoint-control-factorization) supplies such a selector when its own real-Hilbert, evolution, observation and continuous-lift hypotheses hold and the present solution maps satisfy $(Ax)(0)=x$, $(D_ch)(0)=0$, $(Ax)(T)=W(T,0)x$ and $(D_ch)(T)=Lh$ for every $x\in E$ and $h\in C_T(U)$. Here $W$ and $L$ are that supplier's evolution and endpoint operator, with $L$ acting on continuous controls through their $L^2$ classes. Its identity $W(T,0)x+LG(x,y)=y$ then gives the required terminal trace, while the first two trace identities give the initial trace. [def-se-foundation-control-language](item-def-se-foundation-control-language)

[F3] A contraction of a nonempty complete metric space into itself has a unique fixed point in that space. [math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point)

[F4] Bounded linear operators and their least bounds have the meanings in [math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator) and [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm). In particular $\|Av\|\le\|A\|\|v\|$ and $\|D_ch\|\le\|D_c\|\|h\|$ in the appropriate norms.

[F5] Real powers use the positive-base exponential definition and the zero-base positive-exponent convention of [math:def-real-power](https://alphabetamath.cc/item/def-real-power). The exponent and iterated-power identities are supplied by [math:thm-real-power-laws](https://alphabetamath.cc/item/thm-real-power-laws). The logarithm is strictly increasing with $\log1=0$ by [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws), and the exponential is strictly increasing by [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing). Thus positive powers preserve order on nonnegative bases, including zero by the convention.



**Given:** The spaces, maps, selector, endpoint identities and nonlinear estimates in the statement, under Choice.

**Goal:** Construct a closed invariant ball on which the feedback is a strict contraction, and verify the fixed point's endpoints.

1.1 Replace the displayed selector bound $g$ by $\max\{g,0\}$; this is still a valid bound because $\|x\|_E+\|y\|_E\ge0$. Henceforth $g\ge0$ denotes this bound. Set $d=\|D_c\|$, $P=1+\|A\|+dg$, and $K=1+dge$, so $P\ge1$ and $K\ge1$. For $a=\|x_0\|_E+\|x_T\|_E$, the selector bound, the terminal evaluation bound and the nonlinear size estimate give $\|\mathcal T(v)\|_X\le Pa+KC(\|v\|_X^2+\|v\|_X^m)$. Indeed, the control term is bounded by $dg(a+e\|N(v)\|_X)$, and the remaining terms are bounded by $\|A\|\|x_0\|_E+\|N(v)\|_X$. [given, F1, F2, F4]

1.2 Real-linearity of $G$ and $D_c$ gives $h_v-h_u=-G(0,N(v)(T)-N(u)(T))$. Therefore $\|\mathcal T(v)-\mathcal T(u)\|_X\le K\|N(v)-N(u)\|_X$. This uses the same selector and controlled solution map as in the endpoint hypothesis. [given, F1, F2, F4]

2.1 Put $\eta=(8K(C+1))^{-1}$ and choose $r=\min\{1,\eta,\eta^{1/(m-1)}\}>0$. By [F5], $r\le\eta$ and $r^{m-1}\le\eta$, hence $2KC(r+r^{m-1})\le4KC\eta\le1/2$. Let $\delta=r/(2P)>0$. If $a\le\delta$ and $\|v\|_X\le r$, then $Pa\le r/2$ and $KC(r^2+r^m)\le r/4$, so step 1.1 gives $\|\mathcal T(v)\|_X\le3r/4\le r$. If $u$ and $v$ both lie in the radius-$r$ ball, step 1.2 and the difference estimate give $\|\mathcal T(v)-\mathcal T(u)\|_X\le2KC(r+r^{m-1})\|v-u\|_X\le\frac12\|v-u\|_X$. [given, F5, step 1.1, step 1.2, choose]

3.1 The radius-$r$ ball is nonempty because it contains zero. It is complete: a Cauchy sequence in the ball converges in $X$ by completeness, and the norm inequality $\|v\|_X\le\|v-v_n\|_X+\|v_n\|_X$ keeps its limit in the ball. By step 2.1 and the fixed-point theorem, $\mathcal T$ has exactly one fixed point $v$ in this ball. [F1, F3, step 2.1]

4.1 Put $y=x_T-N(v)(T)$. By the selector hypothesis, $Ax_0+D_cG(x_0,y)$ starts at $x_0$ and ends at $y$. Since $v=Ax_0+D_cG(x_0,y)+N(v)$ and $N(v)(0)=0$, evaluation gives $v(0)=x_0$ and $v(T)=y+N(v)(T)=x_T$. The control $h_v=G(x_0,y)$ belongs to $C_T(U)$ by the stated codomain. Thus the fixed point and its control have the asserted properties, with uniqueness only in the chosen ball. [given, F2, step 3.1] ∎

### Remarks

The argument also applies to complex Banach spaces regarded as real spaces, provided all maps satisfy the stated real-linear hypotheses. By [math:lem-complex-norm-realification-is-a-real-norm](https://alphabetamath.cc/item/lem-complex-norm-realification-is-a-real-norm), realification preserves the norm and its metric; consequently the Cauchy sequences and their limits are unchanged, so completeness is preserved. In an evolution with a bounded real-linear forcing map $D:L^1(0,T;E)\to X$ and a bounded real-linear control-to-forcing map $B:C_T(U)\to L^1(0,T;E)$, one may take $D_c=DB$ after verifying the endpoint identity for that same composition. The composition is bounded and real-linear, with $\|DB\|\le\|D\|\|B\|$, by [math:lem-composition-operator-norm-inequality](https://alphabetamath.cc/item/lem-composition-operator-norm-inequality). For a real-linear Schrödinger evolution, any factor $-i$ belongs in $B$; no commutation with the evolution is used.


## Tame bounds for the quadratic-cubic trajectory remainder

[Open item](item-lem-se-trajectory-polynomial-tame-bound) · level 2


### Statement

Assume the Axiom of Choice ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)), let $T>0$ and $\lambda\in\mathbb R$, and define $F(w,z)=\lambda(2w|z|^2+\overline w z^2+|z|^2z)$. Sobolev spaces use their full weak-derivative norms ([math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)), and $H^1_0$ is the $H^1$ closure of $C_c^\infty$ ([math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure)). Time spaces and scalar mixed norms have the convention of [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces). In particular, the $L^4_tL^\infty_x$ representative is jointly scalar measurable and agrees with the continuous $H^1_0$ path as a spatial almost-everywhere class for almost every time; it need not be a strongly measurable $L^\infty$-valued map.

**Energy case.** On any open $\Omega\subset\mathbb R^n$, $n\ge1$, let $X_1=C([0,T];H^1_0(\Omega))\cap L^4_tL^\infty_x$, with the sum norm, and let $w\in C([0,T];W^{1,\infty}(\Omega))$. Here $W^{1,\infty}$ means an essentially bounded function with essentially bounded first weak derivatives, with norm $\|w\|_\infty+\sum_j\|D_jw\|_\infty$. Thus $w$ need not belong to $L^2(\Omega)$. Put $M_1=\sup_t\|w(t)\|_{W^{1,\infty}}$. Then $F(w,z)$ is strongly measurable and Bochner integrable into $H^1_0$ for every $z\in X_1$, and, for $d=z-q$, $$\|F(w,z)\|_{L^1_tH^1_0}\le C|\lambda|\bigl(M_1T^{3/4}\|z\|_{X_1}^2+T^{1/2}\|z\|_{X_1}^3\bigr),$$ $$\|F(w,z)-F(w,q)\|_{L^1_tH^1_0}\le C|\lambda|\bigl(M_1T^{3/4}(\|z\|_{X_1}+\|q\|_{X_1})+T^{1/2}(\|z\|_{X_1}^2+\|q\|_{X_1}^2)\bigr)\|d\|_{X_1}.$$ The cubic input is [lem-se-power-time-integrability](item-lem-se-power-time-integrability); the quadratic terms use the local bounded-coefficient weak product rule [math:lem-weak-product-rule-for-bounded-sobolev-functions](https://alphabetamath.cc/item/lem-weak-product-rule-for-bounded-sobolev-functions) with the closure and measurability constructions below.

**Order-two case.** Suppose instead that $n\in\{2,3\}$ and $\Omega$ is the connected smooth compact-obstacle exterior of [lem-se-exterior-h2-uniform-algebra](item-lem-se-exterior-h2-uniform-algebra). Put $V_2=H^2(\Omega)\cap H^1_0(\Omega)$ with its $H^2$ norm, $X_2=C([0,T];V_2)$, and let $w\in C([0,T];H^2(\Omega))$, with $M_2=\sup_t\|w(t)\|_{H^2}$. No zero trace of $w$ is required. The function $F(w,z)$ belongs to $C([0,T];V_2)$, hence to $L^1(0,T;V_2)$, and $$\|F(w,z)\|_{L^1_tV_2}\le C_\Omega|\lambda|T\bigl(M_2\|z\|_{X_2}^2+\|z\|_{X_2}^3\bigr),$$ $$\|F(w,z)-F(w,q)\|_{L^1_tV_2}\le C_\Omega|\lambda|T\bigl(M_2(\|z\|_{X_2}+\|q\|_{X_2})+\|z\|_{X_2}^2+\|q\|_{X_2}^2\bigr)\|z-q\|_{X_2}.$$ Its obstacle trace vanishes, using the trace convention and algebra of [lem-se-exterior-h2-uniform-algebra](item-lem-se-exterior-h2-uniform-algebra). Consequently, in either case, the approved bounds $\|F(w,z)\|_{L^1_tV_s}\le C_w(\|z\|_{X_s}^2+\|z\|_{X_s}^3)$ and $\|F(w,z)-F(w,q)\|_{L^1_tV_s}\le C_w(\|z\|_{X_s}+\|q\|_{X_s}+\|z\|_{X_s}^2+\|q\|_{X_s}^2)\|z-q\|_{X_s}$ hold, where $V_1=H^1_0$ and the constant depends only on the fixed domain/dimension, $T$, $\lambda$ and the displayed coefficient norm.

### Facts & Assumptions

[F1] The authored [lem-se-power-time-integrability](item-lem-se-power-time-integrability) gives cubic strong measurability and the $T^{1/2}$ energy growth/difference estimates in the scalar mixed-norm convention. The authored [lem-se-complex-polynomial-energy-rule](item-lem-se-complex-polynomial-energy-rule) supplies its bounded complex weak-polynomial calculus and the bounded compact-approximation construction used in its zero-boundary proof. We reproduce the needed quadratic closure argument below rather than assuming a trace characterization on an arbitrary open set.

[F2] The bounded weak Sobolev product rule is [math:lem-weak-product-rule-for-bounded-sobolev-functions](https://alphabetamath.cc/item/lem-weak-product-rule-for-bounded-sobolev-functions). Smooth cutoff multiplication and its weak Leibniz formula are [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor). For local calculations, compactly supported cutoffs are available by [math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization), and smooth $H^1$ functions are dense on any open set by [math:thm-meyers-serrin-density-on-an-arbitrary-open-set](https://alphabetamath.cc/item/thm-meyers-serrin-density-on-an-arbitrary-open-set). These statements are used with their actual local or finite-$p$ hypotheses.

[F3] The $H^1$ and $H^2$ spaces are Banach ([math:thm-sobolev-spaces-are-banach-spaces](https://alphabetamath.cc/item/thm-sobolev-spaces-are-banach-spaces)); closed subspaces are Banach ([math:lem-closed-subspace-of-a-banach-space-is-banach](https://alphabetamath.cc/item/lem-closed-subspace-of-a-banach-space-is-banach)). The norm and closure conventions are [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm) and [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure). Thus $H^1_0$ is Banach, and $V_2$ is Banach because $H^2\hookrightarrow H^1$ continuously and $H^1_0$ is closed in $H^1$.

[F4] There is a real smooth compactly supported cutoff $\chi$ equal to one on $[-1,1]$ ([math:lem-schwartz-cutoffs-from-the-standard-smooth-step](https://alphabetamath.cc/item/lem-schwartz-cutoffs-from-the-standard-smooth-step)). The scalar $C^1$ chain rule with bounded derivative and a zero-fixing composition is [math:thm-sobolev-chain-rule-for-c-one-lipschitz-compositions](https://alphabetamath.cc/item/thm-sobolev-chain-rule-for-c-one-lipschitz-compositions). Almost-everywhere subsequences of $L^2$ convergent sequences and scalar dominated convergence are [math:cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences](https://alphabetamath.cc/item/cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences) and [math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence).

[F5] Time Holder is [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals). Strong measurability means almost-everywhere approximation by finite-range measurable maps ([math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)), and an integrable norm then gives Bochner integrability ([math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)). The compatible scalar mixed and continuous path conventions are [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces).

[F6] The authored [lem-se-exterior-h2-uniform-algebra](item-lem-se-exterior-h2-uniform-algebra) gives the actual global exterior $H^2$ multiplication and $L^\infty$ bounds for $n=2,3$, conjugation invariance, and the obstacle-trace convention. For a sufficiently large $R$ with $\Theta\Subset B_R$, the truncation $G=\Omega\cap B_R$ has separated smooth obstacle and spherical boundary components, so is a bounded $C^2$ domain. By [Bounded $C^k$ domains admit integer-order Sobolev extension](https://alphabetamath.cc/item/thm-extension-theorem-for-bounded-smooth-domains) with $k=2$, $p=2$ and complex scalars, $G$ is a $W^{2,2}$-extension domain. By [math:thm-higher-order-sobolev-embedding](https://alphabetamath.cc/item/thm-higher-order-sobolev-embedding), assertion (3), with $k=2$, $p=2$, $m=0$ and $\alpha=1/4$, each $H^2(G)$ class has a representative in $C^{0,1/4}(\overline G)$: indeed $4>n$ and $0<1/4<2-n/2$ for both $n=2$ and $n=3$. On $G$, the $H^1$ trace is bounded and agrees with continuous boundary values by [math:thm-lp-trace-operator-on-a-bounded-c-one-domain](https://alphabetamath.cc/item/thm-lp-trace-operator-on-a-bounded-c-one-domain) with $p=2$. These extension, embedding and trace inputs are applied only on the bounded truncation, not asserted as global exterior theorems.

[F7] The Axiom of Choice in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) supplies the choice assumptions of [F1]–[F6]. All subsequent claims are mathematical consequences under those hypotheses, without any physical premises.

### Proof

**Given:** The spaces, norms, time interval, polynomial and coefficient assumptions in the two parts of the Statement.

**Goal:** Prove the quadratic-cubic bounds, actual $H^1_0$ closure, strong measurability and the order-two zero-trace application, allowing energy coefficients without global $L^2$ membership.

1.1 First, multiplication by $a\in W^{1,\infty}(\Omega)$ is bounded on $H^1$, with $\|av\|_{H^1}\le C\|a\|_{W^{1,\infty}}\|v\|_{H^1}$ and $D_j(av)=aD_jv+(D_ja)v$. To prove this without assuming $a\in L^2$, start with smooth $v\in H^1$. Around the compact support of any test function, multiply $a$ and $v$ by a compactly supported smooth cutoff equal to one there. Both localized functions are bounded $H^1$ functions on a bounded neighborhood, so [F2] gives the weak product formula on that test support. The global coefficient bounds make the displayed derivative and value square integrable, proving the asserted global norm bound. For general $v$, approximate it in $H^1$ by smooth $H^1$ functions using [F2]; the same bound makes their products Cauchy in $H^1$. Their $L^2$ limit is $av$, so completeness and the weak-derivative norm identify the same formula and bound. Also every $H^1$ function supported in a compact $K\Subset\Omega$ lies in $H^1_0$: choose $\eta\in C_c^\infty(\Omega)$ equal to one near $K$, approximate the function by smooth $H^1$ functions, and multiply those approximants by $\eta$. The weak cutoff bound gives convergence in $H^1$ to $\eta v=v$, while the approximants are in $C_c^\infty(\Omega)$. [F2, F3, F7, given]

1.2 Put $T_R(s)=s\chi(s/R)$ and $S_Rv=T_R(\operatorname{Re}v)+iT_R(\operatorname{Im}v)$ for positive integers $R$. The functions $T_R$ are smooth, fix zero and have bounded continuous derivatives. The map $S_R:H^1\to H^1$ is continuous. Indeed, along an $H^1$ convergent sequence take an almost-everywhere convergent subsequence; the derivative difference of a real component has the form $T_R'(v_k)(D_jv_k-D_jv)+(T_R'(v_k)-T_R'(v))D_jv$. The first term tends to zero in $L^2$ by its bounded coefficient, and dominated convergence gives the same for the second. The value difference is controlled by the Lipschitz bound. Applying this argument to every subsequence proves continuity of the full sequence. Since $T_R(0)=0$, its operation on $C_c^\infty$ stays in $C_c^\infty$; continuity and closure give $S_R(H^1_0)\subset H^1_0$. Each $S_Rv$ has an essential bound depending only on $R$. If $u\in H^1_0\cap L^\infty$, fix $R>\|u\|_\infty+1$ and apply $S_R$ to compactly supported smooth approximants to $u$. This produces $u_k\in C_c^\infty$, uniformly bounded in $L^\infty$, converging in $H^1$ to $u=S_Ru$ and, after a subsequence, almost everywhere. This is also the bounded approximation used in [F1]. [F1, F3, F4, F7, given]

2.1 If $u\in H^1_0\cap L^\infty$ and $v\in H^1\cap L^\infty$, then $uv\in H^1_0$. Choose $u_k$ from step 1.2. Each $u_kv$ is compactly supported and in $H^1$ by [F2], so belongs to $H^1_0$ by step 1.1. Its value converges to $uv$ in $L^2$ by $\|v\|_\infty\|u_k-u\|_2$. The derivative difference is $v(D_ju_k-D_ju)+(u_k-u)D_jv$; the first term converges in $L^2$, and the second does so by the uniform bound, almost-everywhere convergence and dominated convergence. Closure proves the claim. Conjugation preserves weak derivatives and $H^1_0$ by conjugating the test identities and approximants. Finally, any $a\in W^{1,\infty}$ preserves $H^1_0$, without being in $L^2$: for $\varphi_k\in C_c^\infty$ converging to $u\in H^1_0$, each $a\varphi_k$ is compactly supported $H^1$, and the multiplier estimate in step 1.1 gives convergence to $au$ in $H^1$. Thus all quadratic terms with the energy coefficient have zero-boundary closure. [F2, F3, F4, step 1.1, step 1.2]

2.2 For bounded $H^1$ functions define $A_u=\|u\|_\infty$ and $B_u=\|u\|_{H^1}$. The weak product formula gives $\|uv\|_{H^1}\le C(A_u B_v+A_v B_u)$. With $d=z-q$, the identities $z^2-q^2=dz+qd$ and $|z|^2-|q|^2=d\overline z+q\overline d$ therefore give, for either quadratic expression $Q$, $\|Q(z)\|_{H^1}\le C A_zB_z$ and $\|Q(z)-Q(q)\|_{H^1}\le C((A_z+A_q)B_d+(B_z+B_q)A_d)$. Apply the multiplier estimate to $2w|z|^2+\overline w z^2$ to obtain the same bounds times $CM_1$. This calculation uses only the value and first derivative bounds of $w$, not its global $L^2$ norm. The cubic term and its pointwise-in-time difference estimate are already supplied by [F1]. [F1, F2, step 1.1, algebra]

3.1 To justify energy measurability, $t\mapsto S_Rz(t)$ is continuous in $H^1_0$ by step 1.2 and is uniformly spatially bounded for fixed $R$. On uniformly bounded $H^1$ sets, the maps $v\mapsto v^2$ and $v\mapsto|v|^2$ are continuous into $H^1$: for a convergent sequence, subtract the product derivative formulas by adding the approximating coefficient times the limiting derivative; the terms with derivative differences converge by the uniform bound, and the other terms converge by an almost-everywhere subsequence and dominated convergence. The subsequence criterion gives convergence of the whole sequence. Since $w$ is norm-continuous into $W^{1,\infty}$, the two truncated quadratic expressions with $w$ are continuous $H^1_0$ paths by the multiplier bound and step 2.1. Each continuous path on a compact interval admits uniform finite-valued time-step approximations. For almost every $t$, compatibility of the scalar mixed representative gives $\|z(t)\|_\infty<\infty$, so $S_Rz(t)=z(t)$ for every sufficiently large integer $R$. Thus the quadratic expression is a pointwise almost-everywhere limit of these strongly measurable paths, and hence strongly measurable; one may choose each path's finite-valued approximant with uniform error at most $1/R$. The cubic term is strongly measurable by [F1]. Differences of the resulting maps are strongly measurable as well. No strong measurability into spatial $L^\infty$ is needed. [F1, F4, F5, step 1.2, step 2.1, step 2.2]

3.2 In the order-two setting [F6] gives $H^2\subset H^1\cap L^\infty$ and its global algebra bound. Every quadratic-cubic summand in $F$ has at least one factor $z\in H^1_0$, while every remaining factor, including $w$ and its conjugate, lies in $H^1\cap L^\infty$. Repeatedly apply step 2.1 to obtain actual $H^1_0$ membership, with no zero trace assumption on $w$. Repeated multiplication in the exterior $H^2$ algebra gives $\|F(w,z)\|_{H^2}\le C_\Omega|\lambda|(\|w\|_{H^2}\|z\|_{H^2}^2+\|z\|_{H^2}^3)$. Telescoping the factors in $z^2-q^2$, $|z|^2-|q|^2$, and $z^2\overline z-q^2\overline q$ gives the pointwise difference bound $C_\Omega|\lambda|[\|w\|_{H^2}(\|z\|_{H^2}+\|q\|_{H^2})+\|z\|_{H^2}^2+\|q\|_{H^2}^2]\|z-q\|_{H^2}$. Continuous multiplication and conjugation in this algebra show that $t\mapsto F(w(t),z(t))$ is continuous in $H^2$, and its values are in the closed subspace $V_2$, hence the path is continuous into that Banach space. [F2, F3, F6, step 2.1, algebra]

4.1 For the energy bounds write $a_z=\|\|z(t)\|_\infty\|_{L^4_t}$ and $b_z=\sup_t\|z(t)\|_{H^1}$. Holder gives $\int_0^T\|z(t)\|_\infty\,dt\le T^{3/4}a_z$. Thus step 2.2 bounds the quadratic growth by $C|\lambda|M_1T^{3/4}a_zb_z$. Its quadratic difference is bounded after integration by $C|\lambda|M_1T^{3/4}((a_z+a_q)b_d+(b_z+b_q)a_d)$. Every $a$ and $b$ is bounded by the corresponding $X_1$ norm. The $m=3$ case of [F1] supplies the remaining cubic estimates with $T^{1/2}$. These yield both displayed energy inequalities. In view of step 3.1 the norms are integrable norms of strongly measurable $H^1_0$ maps, so they are the claimed Bochner $L^1$ quantities by [F5]. [F1, F5, step 2.2, step 3.1, algebra]

4.2 Integrating the pointwise bounds in step 3.2 over the finite interval gives the order-two estimates with factor $T$. The continuous path there is strongly measurable by uniform time-step approximation and has bounded $V_2$ norm, so Bochner integrability follows from [F3] and [F5]. To identify its obstacle trace, choose $R$ with $\Theta\Subset B_R$ and let $G=\Omega\cap B_R$, the bounded smooth truncation in [F6]. Restrict any $H^1_0(\Omega)$ approximating sequence from $C_c^\infty(\Omega)$ to $G$. Each approximant has zero obstacle trace and convergence in $H^1(G)$; boundedness of the trace in [F6] gives zero obstacle trace for the limit. For any $u\in H^2(\Omega)$, restriction gives $u|_G\in H^2(G)$. Apply the bounded-domain extension theorem of [F6] with $k=p=2$ to make $G$ an $H^2$ extension domain, and then the higher-order embedding there with $m=0$, $\alpha=1/4$; its strict supercritical hypotheses hold since $0<1/4<2-n/2$. This produces a representative of $u|_G$ continuous on $\overline G$, to which the bounded $H^1(G)$ trace theorem applies and identifies the boundary values with the trace. Applying this to $u=F(w(t),z(t))\in V_2$ from step 3.2, for each $t$, proves the claimed continuous-boundary-value interpretation of its zero obstacle trace, without requiring a zero trace of $w$ or a global exterior trace theorem. [F3, F5, F6, step 3.2]

5.1 Finally, in the energy case absorb $C|\lambda|M_1T^{3/4}$ and $C|\lambda|T^{1/2}$ into $C_w$; in the order-two case absorb $C_\Omega|\lambda|T(M_2+1)$. The sharper estimates then imply exactly the two approved quadratic-cubic tame inequalities for $s=1,2$, with the stated dependence and all membership and measurability assertions proved above. This completes the proof. ∎ [step 4.1, step 4.2, algebra]


## Simultaneous Sobolev extension and localization

[Open item](item-lem-se-sobolev-extension-retraction) · level 9


### Statement

Assume AC. For a bounded smooth domain $G$ there is one linear extension $E_G$, agreeing with the input on $G$, bounded $H^s(G)\to H^s(\mathbb R^n)$ for every $0\le s\le2$, with output supported in a fixed compact neighborhood. Here $H^s(G)$ is the restriction of the Bessel-potential space with quotient norm. In this range $[L^2(G),H^2(G)]_{s/2}=H^s(G)$ with equivalent norms. Finite smooth boundary charts, cutoffs and restriction give the same order-0-to-2 Sobolev localization/retraction for a smooth exterior domain (a bounded collar plus a free-space tail).

Here the whole-space $H^s(\mathbb R^n)$ uses the weighted Fourier distribution convention, $H^s(G)$ is its restriction quotient, and a retraction/coretraction pair consists of bounded linear maps $J,P$ with $PJ=I$. Complex interpolation is over complex scalars. For a compatible complex Banach couple $(X_0,X_1)$, give $X_0+X_1$ the sum norm $\|x\|_{X_0+X_1}=\inf_{x=x_0+x_1}(\|x_0\|_{X_0}+\|x_1\|_{X_1})$. On $S=\{z\in\mathbb C:0\le\operatorname{Re}z\le1\}$, the bounded-strip class $\mathcal F_b(X_0,X_1)$ consists of bounded, sum-norm continuous functions $f:S\to X_0+X_1$ that are norm-holomorphic in the interior and whose boundary maps $t\mapsto f(j+it)$ are bounded and continuous in the $X_j$ norm, $j=0,1$. Give this class the boundary norm $\|f\|_{\mathcal F_b}=\max_{j=0,1}\sup_{t\in\mathbb R}\|f(j+it)\|_{X_j}$. For $0<\theta<1$, $[X_0,X_1]_\theta$ consists of the values $f(\theta)$, with norm $\inf_{f(\theta)=u}\|f\|_{\mathcal F_b}$. At $\theta=0,1$, the brackets denote the respective endpoint spaces with their given norms, rather than endpoint evaluation quotients. In this Hilbert setting the claimed Sobolev identifications include equivalence of norms.

### Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice); in particular its countable and dependent instances are available.

[F2] [lem-se-author-891dd21c27d6-bounded-common-endpoint-extension](item-lem-se-author-891dd21c27d6-bounded-common-endpoint-extension) constructs one $E_G$ on $L^2(G)$ and weak $W^{2,2}(G)$ with $r_GE_G=I$ and output in a fixed compact subset of a chosen neighborhood.

[F3] [lem-se-author-891dd21c27d6-whole-space-er-interpolation](item-lem-se-author-891dd21c27d6-whole-space-er-interpolation) interpolates the one whole-space map $E_Gr_G$ and infimizes over ambient extensions; [lem-se-author-891dd21c27d6-quotient-interpolation-retraction](item-lem-se-author-891dd21c27d6-quotient-interpolation-retraction) gives the domain interpolation/quotient identity with equivalent norms, including equivalence of the integer weak endpoint.

[F4] [lem-se-author-891dd21c27d6-exterior-collar-tail-retraction](item-lem-se-author-891dd21c27d6-exterior-collar-tail-retraction) constructs one exterior endpoint extension and the explicit compatible $J,P$ maps with $PJ=I$ and two-sided collar/tail norm equivalence through order two.

[F5] [lem-se-author-ccbb64dfef2c-strip-model-well-defined](item-lem-se-author-ccbb64dfef2c-strip-model-well-defined) supplies the compatible complex Banach-couple sum and the decaying strip class $\mathcal F_d(X_0,X_1)$: it has exactly the regularity and boundedness conditions of $\mathcal F_b$ in the Statement and additionally $\|f(j+it)\|_{X_j}\to0$ as $|t|\to\infty$, $j=0,1$. Its norm is the same maximum boundary norm. The quotient/interpolation supplier in F3 uses this decaying class. The comparison with the bounded class is proved locally below.

### Proof

**Goal:** Establish every assertion of the Statement under the stated hypotheses.

**Given:** The hypotheses and data in the Statement.

1.1 For bounded smooth $G$, take the common compactly supported endpoint extension from the first fact. It is defined already on $L^2(G)$ and is bounded at the second weak-derivative endpoint. The whole-space $Er$ lemma therefore applies with $D=G$: for each $0\le s\le2$ and each ambient $H^s$ extension $F$ of $u$, $E_Gu=(E_Gr_G)F$ and $\|E_Gu\|_{H^s}\le C_s\|F\|_{H^s}$. The value is independent of $F$ because it is the original $L^2$ map applied to $u$. Infimizing gives the bounded quotient extension for every order. Its support remains in the same fixed compact set because the formula on positive-order inputs is unchanged. [F2, F3, given]

1.2 For any compatible complex Banach couple, denote the evaluation norms from $\mathcal F_b$ and $\mathcal F_d$ by $N_b$ and $N_d$. Fix $0<\theta<1$, $f\in\mathcal F_b$ and $\varepsilon>0$, and put $f_\varepsilon(z)=\exp(\varepsilon(z-\theta)^2)f(z)$ and $c_\theta=\max\{\theta^2,(1-\theta)^2\}$. For $z=x+it\in S$, the scalar factor has modulus $\exp(\varepsilon((x-\theta)^2-t^2))\le\exp(\varepsilon c_\theta)\exp(-\varepsilon t^2)$. Multiplication by this entire scalar function preserves sum-norm continuity and norm-holomorphy: the latter follows directly from the product difference quotient. The displayed bound preserves boundedness on $S$ and makes each continuous $X_j$ boundary map decay in its endpoint norm. Hence $f_\varepsilon\in\mathcal F_d$, $f_\varepsilon(\theta)=f(\theta)$, and $\|f_\varepsilon\|_{\mathcal F_d}\le e^{\varepsilon c_\theta}\|f\|_{\mathcal F_b}$. Thus the two classes have identical sets of values at $\theta$. The inclusion $\mathcal F_d\subseteq\mathcal F_b$ gives $N_b(u)\le N_d(u)$, while the damped representatives give $N_d(u)\le e^{\varepsilon c_\theta}N_b(u)$ after infimizing over all $f$ representing $u$. Letting $\varepsilon\downarrow0$ proves $N_d(u)=N_b(u)$. No convergence of $f_\varepsilon$ in either strip norm is needed. [F5, given, construct, algebra]

2.1 For $0<s<2$, apply the quotient/interpolation lemma with $\theta=s/2$. Its decaying-strip interpolation space is $H^s(G)$ with equivalent norms; step 1.2 identifies that evaluation space isometrically with the bounded-strip convention of the Statement. At $s=0,2$ the brackets are the specified endpoint spaces, and the endpoint identifications are supplied directly by F2 and F3, without an endpoint strip-evaluation argument. Quotient completeness, definiteness and independence of the chosen ambient extension are supplied by the whole-space $Er$ lemma in F3. Consequently the domain interpolation identity and the common extension have precisely the asserted restriction-quotient meaning. [F2, F3, F5, step 1.1, step 1.2]

3.1 For the smooth exterior domain, use the final helper’s bounded collar $G=\Omega\cap B_L$, its finite-reflection collar extension and its independently justified identity tail. That helper proves the common $L^2/W^{2,2}$ endpoint bounds and then applies the same whole-space and quotient arguments; it also gives explicit maps $J,P$ with $PJ=I$ and equivalent collar/tail norms for each $0\le s\le2$. Thus both the bounded compact-output assertion and the exterior localization/retraction in the Statement hold in exactly the restriction-quotient Bessel convention. [F3, F4, step 1.1, step 2.1] ∎

### Source notes

Five local intermediate items supply the second-order reflection, common compact bounded-domain extension, whole-space Er interpolation, quotient/interpolation retraction, and exterior collar/free-tail construction. The exact existing half-space weak matching and authored spectral interpolation interfaces are used; no Rychkov theorem or unread external extension theorem is cited. This is an authoring candidate, not an independent proof or scaffold review.


## Fractional Hilbert Sobolev algebra on a smooth exterior domain

[Open item](item-lem-se-exterior-fractional-hilbert-algebra) · level 10


### Statement

Assume the Axiom of Choice. Let $n\in\{2,3\}$, $n/2<s\le2$, and let $\Omega$ be the complement of a compact obstacle with smooth boundary. Write $H^s(\Omega)$ for restrictions to $\Omega$ of whole-space Bessel-potential functions, with the infimum of the whole-space $H^s$ norms over extensions as its norm. Then there is a constant $C$ depending on $n,s,\Omega$ such that $\|u\|_{L^\infty(\Omega)}\le C\|u\|_{H^s(\Omega)}$ and $\|uv\|_{H^s(\Omega)}\le C\|u\|_{H^s(\Omega)}\|v\|_{H^s(\Omega)}$.

For a complex polynomial $P(z,\bar z)$ of degree at most five with $P(0,0)=0$, there is a constant $C_P$ such that $\|P(u,\bar u)\|_{H^s}\le C_P\sum_{j=1}^5\|u\|_{H^s}^j$ and $\|P(u,\bar u)-P(v,\bar v)\|_{H^s}\le C_P\|u-v\|_{H^s}\sum_{j=1}^5(\|u\|_{H^s}+\|v\|_{H^s})^{j-1}$. In particular this covers cubic and quintic nonlinearities. The Dirichlet trace means the $H^1$ trace on the obstacle boundary, defined using a bounded smooth collar. If both factors have zero Dirichlet trace, their product has zero Dirichlet trace. No endpoint assertion at $s=n/2$ is made.

### Facts & Assumptions

**Given:** The hypotheses, spaces and conventions in the Statement.

[F1] The Axiom of Choice supplies the countable-choice assumptions of the Fourier and convolution inputs. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F2] Whole-space $H^s$ is the completion of Schwartz functions with norm $\|\langle\xi\rangle^s\widehat f\|_2$, where $\langle\xi\rangle=(1+|\xi|^2)^{1/2}$ and the Fourier transform uses the negative-sign $2\pi$ convention. Schwartz functions are dense in this norm for the present $s$. [math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces) [math:lem-schwartz-dense-in-fourier-bessel-potential-space](https://alphabetamath.cc/item/lem-schwartz-dense-in-fourier-bessel-potential-space)

[F3] For Schwartz functions Fourier inversion is absolutely convergent, and the transform of their product is the convolution of their transforms. Holder's inequality and Young's $L^1*L^2\to L^2$ inequality apply to the indicated nonnegative functions. [math:thm-fourier-inversion-on-schwartz-space](https://alphabetamath.cc/item/thm-fourier-inversion-on-schwartz-space) [math:thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis](https://alphabetamath.cc/item/thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis) [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals) [math:thm-young-convolution-inequality](https://alphabetamath.cc/item/thm-young-convolution-inequality)

[F4] On the smooth exterior, restriction-quotient spaces have the compatible collar and free-tail extension/retraction described by [lem-se-sobolev-extension-retraction](item-lem-se-sobolev-extension-retraction). For a bounded smooth collar $G\subset\Omega$ whose boundary contains the obstacle boundary $B=\partial\Omega$, the $p=2$, $\mathbb K=\mathbb C$ instance of [math:thm-lp-trace-operator-on-a-bounded-c-one-domain](https://alphabetamath.cc/item/thm-lp-trace-operator-on-a-bounded-c-one-domain) gives a bounded $T_G:W^{1,2}(G;\mathbb C)\to L^2(\partial G;\mathbb C)$ agreeing with classical restriction on continuous Sobolev functions. Restrict its output to $B$ and write $Tu=(T_G(u|_G))|_B$; restriction to these boundary components does not increase the $L^2$ norm. This is the same trace operator appearing in [math:thm-sharp-trace-theorem-for-w-one-p](https://alphabetamath.cc/item/thm-sharp-trace-theorem-for-w-one-p).

[F5] Fourier transformation is unitary on $L^2$, and distributional differentiation corresponds to multiplication by $2\pi i\xi_j$. [math:thm-plancherel](https://alphabetamath.cc/item/thm-plancherel) [math:lem-weak-derivatives-are-polynomial-fourier-multipliers](https://alphabetamath.cc/item/lem-weak-derivatives-are-polynomial-fourier-multipliers)

[F6] Schwartz functions are actual smooth complex functions $f$ for which $\sup_{x\in\mathbb R^n}|x^\alpha\partial^\beta f(x)|<\infty$ for every pair of multi-indices $\alpha,\beta$. [math:def-schwartz-space-and-its-seminorms](https://alphabetamath.cc/item/def-schwartz-space-and-its-seminorms)

[F7] For any open set $D$, the weak $H^1(D)$ notation means $W^{1,2}(D;\mathbb C)$, consisting of $L^2$ classes with first weak derivatives in $L^2$, with norm $\|h\|_{W^{1,2}(D)}=(\|h\|_2^2+\sum_{k=1}^n\|\partial_k h\|_2^2)^{1/2}$. Under the assumed AC this space is complete. [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm) [math:thm-sobolev-spaces-are-banach-spaces](https://alphabetamath.cc/item/thm-sobolev-spaces-are-banach-spaces)

### Proof

**Given:** The hypotheses, spaces and conventions in the Statement.

[F1] The Axiom of Choice supplies the countable-choice assumptions of the Fourier and convolution inputs. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F2] Whole-space $H^s$ is the completion of Schwartz functions with norm $\|\langle\xi\rangle^s\widehat f\|_2$, where $\langle\xi\rangle=(1+|\xi|^2)^{1/2}$ and the Fourier transform uses the negative-sign $2\pi$ convention. Schwartz functions are dense in this norm for the present $s$. [math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces) [math:lem-schwartz-dense-in-fourier-bessel-potential-space](https://alphabetamath.cc/item/lem-schwartz-dense-in-fourier-bessel-potential-space)

[F3] For Schwartz functions Fourier inversion is absolutely convergent, and the transform of their product is the convolution of their transforms. Holder's inequality and Young's $L^1*L^2\to L^2$ inequality apply to the indicated nonnegative functions. [math:thm-fourier-inversion-on-schwartz-space](https://alphabetamath.cc/item/thm-fourier-inversion-on-schwartz-space) [math:thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis](https://alphabetamath.cc/item/thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis) [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals) [math:thm-young-convolution-inequality](https://alphabetamath.cc/item/thm-young-convolution-inequality)

[F4] On the smooth exterior, restriction-quotient spaces have the compatible collar and free-tail extension/retraction described by [lem-se-sobolev-extension-retraction](item-lem-se-sobolev-extension-retraction). For a bounded smooth collar $G\subset\Omega$ whose boundary contains the obstacle boundary $B=\partial\Omega$, the $p=2$, $\mathbb K=\mathbb C$ instance of [math:thm-lp-trace-operator-on-a-bounded-c-one-domain](https://alphabetamath.cc/item/thm-lp-trace-operator-on-a-bounded-c-one-domain) gives a bounded $T_G:W^{1,2}(G;\mathbb C)\to L^2(\partial G;\mathbb C)$ agreeing with classical restriction on continuous Sobolev functions. Restrict its output to $B$ and write $Tu=(T_G(u|_G))|_B$; restriction to these boundary components does not increase the $L^2$ norm. This is the same trace operator appearing in [math:thm-sharp-trace-theorem-for-w-one-p](https://alphabetamath.cc/item/thm-sharp-trace-theorem-for-w-one-p).

[F5] Fourier transformation is unitary on $L^2$, and distributional differentiation corresponds to multiplication by $2\pi i\xi_j$. [math:thm-plancherel](https://alphabetamath.cc/item/thm-plancherel) [math:lem-weak-derivatives-are-polynomial-fourier-multipliers](https://alphabetamath.cc/item/lem-weak-derivatives-are-polynomial-fourier-multipliers)

[F6] Schwartz functions are actual smooth complex functions $f$ for which $\sup_{x\in\mathbb R^n}|x^\alpha\partial^\beta f(x)|<\infty$ for every pair of multi-indices $\alpha,\beta$. [math:def-schwartz-space-and-its-seminorms](https://alphabetamath.cc/item/def-schwartz-space-and-its-seminorms)

[F7] For any open set $D$, the weak $H^1(D)$ notation means $W^{1,2}(D;\mathbb C)$, consisting of $L^2$ classes with first weak derivatives in $L^2$, with norm $\|h\|_{W^{1,2}(D)}=(\|h\|_2^2+\sum_{k=1}^n\|\partial_k h\|_2^2)^{1/2}$. Under the assumed AC this space is complete. [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm) [math:thm-sobolev-spaces-are-banach-spaces](https://alphabetamath.cc/item/thm-sobolev-spaces-are-banach-spaces)



**Given:** The hypotheses and conventions in the Statement.

**Goal:** Prove the embedding, multiplication and polynomial estimates, and the trace assertion.

1.1 Since $2s>n$, polar integration gives $A=\|\langle\xi\rangle^{-s}\|_2<\infty$. For Schwartz $f$, Holder gives $\|\widehat f\|_1\le A\|f\|_{H^s}$, and inversion gives $\|f\|_\infty\le A\|f\|_{H^s}$. Moreover $\langle\xi\rangle^s\le C_s(\langle\eta\rangle^s+\langle\xi-\eta\rangle^s)$: use $\langle\xi\rangle\le\langle\eta\rangle+\langle\xi-\eta\rangle$ and the elementary inequality for positive powers. The product formula and Young's inequality therefore give $\|fg\|_{H^s}\le C_s(\|\langle\cdot\rangle^s\widehat f\|_2\|\widehat g\|_1+\|\widehat f\|_1\|\langle\cdot\rangle^s\widehat g\|_2)\le 2C_sA\|f\|_{H^s}\|g\|_{H^s}$. [F2, F3, F6, given]

2.1 For arbitrary whole-space $H^s$ elements choose Schwartz approximating sequences. The preceding estimates make them Cauchy both uniformly and in the product norm. The uniform limits represent the original $L^2$ classes, since $\|h\|_2\le\|h\|_{H^s}$; consequently the limiting product is their pointwise product almost everywhere. Bilinearity and the difference identity $f_jg_j-f_kg_k=(f_j-f_k)g_j+f_k(g_j-g_k)$ give the same estimates for all whole-space factors. Complex conjugation preserves the norm because its Fourier transform is the conjugate reflected transform. [F2, F3, F6, step 1.1]

3.1 For $u,v\in H^s(\Omega)$ choose whole-space extensions $U,V$. Restriction of $UV$ is $uv$, so the quotient norm and step 2.1 give $\|uv\|_{H^s(\Omega)}\le C\|U\|_{H^s(\mathbb R^n)}\|V\|_{H^s(\mathbb R^n)}$. Taking infima independently over the two nonempty extension classes gives the product estimate. The same infimum argument gives the $L^\infty$ estimate, and conjugating extensions shows $\|\bar u\|_{H^s(\Omega)}=\|u\|_{H^s(\Omega)}$. [F2, F4, step 2.1, given]

3.2 Let $U_j,V_j$ be Schwartz approximations to extensions $U,V$ of $u,v$. In the weak Sobolev convention of [F7], the Fourier derivative and Plancherel identities give $\|h\|_{W^{1,2}(\mathbb R^n)}^2=\|\widehat h\|_2^2+4\pi^2\sum_{k=1}^n\|\xi_k\widehat h\|_2^2\le C\|h\|_{H^s(\mathbb R^n)}^2$ for Schwartz $h$, because $s>1$. This bound and step 2.1 make $U_j,V_j,U_jV_j$ Cauchy in $W^{1,2}(\mathbb R^n;\mathbb C)$. Completeness from [F7] gives limits in that space, and their $L^2$ limits identify them with $U,V,UV$, respectively. Restriction decreases the integrals defining the weak Sobolev norm, so the restrictions and products converge in weak $H^1$ on a bounded smooth collar containing the obstacle boundary. They also converge uniformly by steps 1.1 and 2.1. [F2, F5, F6, F7, step 1.1, step 2.1, given]

4.1 Apply the product estimate repeatedly to each monomial $u^a\bar u^b$, where $1\le a+b\le5$. For differences telescope the $a+b$ factors, replacing one factor at a time; each difference is either $u-v$ or its conjugate. Summing the finitely many monomials gives both displayed polynomial inequalities, with a constant depending on the coefficients and the algebra constant. The zero constant term is needed because the exterior has infinite measure. [step 3.1, algebra]

4.2 Apply the bounded-domain $L^2$ trace operator $T_G$ from F4 to the collar $G$ and restrict its values to the obstacle boundary $B$. Step 3.2 and its boundedness give $T(U_j|_\Omega)\to Tu$, $T(V_j|_\Omega)\to Tv$ and $T((U_jV_j)|_\Omega)\to T(uv)$ in $L^2(B)$. Here $T(U_j|_\Omega)=(T_G(U_j|_G))|_B$, with the analogous notation for the other factors and products. Since the smooth restrictions belong to $C(\overline G)\cap W^{1,2}(G;\mathbb C)$, the classical-restriction property in F4 gives $T(U_jV_j)=T(U_j)T(V_j)$ on $B$. Uniform convergence on the compact boundary and convergence of the other trace in $L^2$ show that these products converge to $(Tu)(Tv)$ in $L^2$. Hence $T(uv)=(Tu)(Tv)$; in particular it vanishes if both traces vanish. The bounded-collar definition is independent of the chosen collar because smooth restrictions agree on the common obstacle boundary and are dense in the relevant approximations. [F4, step 3.2]

5.1 Steps 3.1 and 4.1 establish the embedding, algebra and polynomial estimates, and step 4.2 establishes the zero-trace consequence. The integrability used in step 1.1 requires $2s>n$, so the proof makes no endpoint claim. [step 1.1, step 3.1, step 4.1, step 4.2] ∎
