---
id: cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives
kind: corollary
title: One-dimensional $W^{1,p}$ functions have unique absolutely continuous representatives
status: published
origin: pipeline
deps: [thm-acl-characterisation-of-w-one-p, def-sobolev-space-wkp-and-its-norm, def-l-infinity-on-a-measure-space, def-absolute-continuity-on-almost-every-coordinate-line, lem-weak-derivative-linearity-locality-and-commutation, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-the-lebesgue-integral-respects-almost-everywhere-equality, cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous, thm-first-fundamental-theorem-of-calculus-for-l-one, thm-finite-measure-l-r-includes-into-l-p-for-p-less-r, thm-lebesgue-measure-of-a-box-of-every-kind, thm-lebesgue-measure-is-a-complete-measure, prop-measure-monotonicity, thm-holder-inequality-for-integrals, thm-integral-triangle-inequality, thm-absolute-continuity-of-the-integral, prop-indefinite-integral-of-an-integrable-function-is-countably-additive, def-complex-lp-and-euclidean-test-function-conventions, def-continuity-real, def-vector-valued-functions-limits-and-continuity, def-complex-metric-convergence-and-continuity, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-axiom-of-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Chapters 1-2
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 2 §2.6 (ACL characterisation) and Chapter 1 §1.1 for the one-dimensional picture
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (2011), Chapter 8 §8.2
      url: https://www.math.utoronto.ca/almut/Brezis.pdf
      locator: the one-dimensional Sobolev space W^{1,p}(I) (Chapter 8 §8.2) and the absolute-continuity representation of its elements; Chapter 9 §9.1 is the n-dimensional analogue
---

## Statement

Assume the Axiom of Choice for the ACL and absolutely-continuous
fundamental-theorem interfaces. Let $I\subseteq\mathbb R$ be a nonempty open
interval, let $1\le p\le\infty$, let $\mathbb K\in\{\mathbb R,\mathbb C\}$,
and let $u\in W^{1,p}(I;\mathbb K)$, with weak derivative class $Du$. Then
there is exactly one continuous representative $u^*$ of the class of $u$ on
$I$ that is locally absolutely continuous, that is, absolutely continuous on
every compact interval contained in $I$, and satisfies
$$u^*(x)-u^*(y)=\int_y^xDu(t)\,dt\qquad\text{for every }x,y\in I,$$
where for $x<y$ the right-hand side denotes $-\int_x^yDu$, equivalently
$u^*(y)-u^*(x)=\int_x^yDu$ whenever $x\le y$.

If $I=(a,b)$ has finite endpoints, then $Du\in L^1(a,b)$, the representative
$u^*$ extends uniquely to an absolutely continuous function on $[a,b]$, and
the extension satisfies
$$u^*(x)=u^*(a)+\int_a^xDu(t)\,dt\qquad\text{for every }x\in[a,b].$$

The scalar field is arbitrary, $p=1$ and $p=\infty$ are included, and the
one-dimensional interval may be bounded or unbounded. The Axiom of Choice is
used only through the Countable-Choice and Dependent-Choice hypotheses of the
cited characterisation, fundamental-theorem and completeness interfaces.

## Facts & Assumptions

**Given:** The Axiom of Choice; a nonempty open interval $I\subseteq\mathbb R$; an exponent $1\le p\le\infty$; a field $\mathbb K\in\{\mathbb R,\mathbb C\}$; and a class $u\in W^{1,p}(I;\mathbb K)$ with weak derivative class $Du=D^1u$.

[F1] $W^{1,p}(I;\mathbb K)$ consists of the classes $u\in L^p(I;\mathbb K)$ whose first weak derivative class $Du$ exists in $L^p(I;\mathbb K)$ ([[def-sobolev-space-wkp-and-its-norm]]); for $p=\infty$ the underlying measurable classes are the essentially bounded ones, $L^\infty(\mu)=\{f:f\text{ measurable and }\|f\|_\infty<\infty\}$ ([[def-l-infinity-on-a-measure-space]]).

[F2] Assume the Axiom of Choice. For an open set and $1\le p<\infty$, a class lies in $W^{1,p}$ exactly when it lies in $L^p$ and has one measurable ACL representative $u^*$ whose classical coordinate derivative exists almost everywhere, is measurable and lies in $L^p$; in that case that derivative represents $D u$ almost everywhere ([[thm-acl-characterisation-of-w-one-p]]).

[F3] For $n=1$ the ACL condition means that the representative is absolutely continuous on every compact interval contained in the open interval; for complex-valued functions absolute continuity means that real and imaginary parts are both absolutely continuous ([[def-absolute-continuity-on-almost-every-coordinate-line]]).

[F4] If $v=D u$ weakly on $I$ and $J\subseteq I$ is open, then $v|_J=D(u|_J)$ weakly on $J$ ([[lem-weak-derivative-linearity-locality-and-commutation]]).

[F5] Assume Countable and Dependent Choice. A real function $F:[c,d]\to\mathbb R$ is absolutely continuous if and only if $F'$ exists almost everywhere, $F'\in L^1[c,d]$, and $F(x)-F(c)=\int_c^xF'$ for every $x\in[c,d]$ ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]).

[F6] If two integrable functions agree almost everywhere, then their integrals over every measurable set agree; in particular the integral of a class over an interval is independent of the representative ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

[F7] For $f\in L^1[c,d]$ the indefinite integral $x\mapsto\int_c^xf$ is absolutely continuous ([[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]]).

[F8] Assume Countable Choice. If $f\in L^1[c,d]$ and $F(x)=\int_c^xf$, then $F'=f$ almost everywhere on $(c,d)$ ([[thm-first-fundamental-theorem-of-calculus-for-l-one]]).

[F9] On a finite-measure space, $L^\infty$ is contained in $\mathcal L^p$ for every $1\le p<\infty$, with $\|f\|_p\le\mu(X)^{1/p}\|f\|_\infty$ ([[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]]).

[F10] Every box between its open and closed forms is Lebesgue measurable with measure the product of the side lengths; in one dimension an interval with endpoints $c\le d$ has measure $d-c$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F11] Under Countable Choice, Lebesgue measure is a measure on the Lebesgue sigma-algebra ([[thm-lebesgue-measure-is-a-complete-measure]]).

[F12] If $A\subseteq B$ are measurable sets, then $\lambda(A)\le\lambda(B)$ ([[prop-measure-monotonicity]]).

[F13] Holder's inequality gives $\int_E|fg|\le\|f\|_p\|g\|_{p'}$ for conjugate exponents, so an $L^p$ class on a bounded interval is also in $\mathcal L^1$ ([[thm-holder-inequality-for-integrals]]).

[F14] $|\int f|\le\int|f|$ for every integrable $f$ ([[thm-integral-triangle-inequality]]).

[F15] For $f\in L^1(\mu)$ and $\varepsilon>0$ there is $\delta>0$ such that $\int_E|f|<\varepsilon$ for every measurable $E$ with $\mu(E)<\delta$ ([[thm-absolute-continuity-of-the-integral]]).

[F16] The complex integral is computed componentwise, $\int f=\int\operatorname{Re}f+i\int\operatorname{Im}f$, and complex $L^p$ classes use the modulus seminorm with $f\sim g$ meaning $f=g$ almost everywhere ([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F17] If $f\in L^1(\mu)$, the set function $A\mapsto\int_Af:=\int f\chi_A$ is countably additive on pairwise disjoint measurable families ([[prop-indefinite-integral-of-an-integrable-function-is-countably-additive]]).

[F18] Continuity of a real-valued function on a subset of $\mathbb R$ is the $\varepsilon$-$\delta$ condition with the absolute value ([[def-continuity-real]]).

[F19] Continuity of an $\mathbb R^m$-valued function on a metric space is the $\varepsilon$-$\delta$ condition with the Euclidean norm ([[def-vector-valued-functions-limits-and-continuity]]).

[F20] Under the identification $\mathbb C=\mathbb R^2$ the modulus metric is the Euclidean metric, so continuity of complex-valued functions is metric continuity for $d_{\mathbb C}$ ([[def-complex-metric-convergence-and-continuity]]).

[F21] In ZF the Axiom of Choice implies Countable Choice and the prescribed-start form of Dependent Choice ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[F22] The Axiom of Choice asserts a choice function for every family of nonempty sets ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 By [F21] the given Axiom of Choice [F22] yields Countable and Dependent Choice, so the choice hypotheses of the ACL characterisation [F2], of the absolutely-continuous fundamental theorem [F5], of the first fundamental theorem [F8], of the measure [F11] and of the characterisation of Lebesgue measure on boxes [F10] are available. In particular $Du$ is an $L^p$ class by [F1], and it makes sense to integrate $Du$ over intervals. [F1, F2, F10, F11, F21, F22, given]

1.2 Uniqueness claim on any nonempty open interval $J\subseteq\mathbb R$. Suppose $v$ and $w$ are representatives of one and the same almost-everywhere class on $J$ that are both absolutely continuous on every compact subinterval of $J$ and both satisfy the displayed formula with the same weak derivative class: $v(y)-v(x)=\int_x^y Du$ and $w(y)-w(x)=\int_x^y Du$ for all $x\le y$ in $J$. Then $h:=v-w$ satisfies $h(y)-h(x)=0$ for all $x\le y$, so $h$ is constant on $J$; and since $v=w$ almost everywhere on $J$, that constant is zero: otherwise $\{h\ne0\}=J$ would be a null set, whereas $J$ contains a compact interval $[x,y]$ with $x<y$, whose measure $y-x$ is positive by [F10] and which therefore has measure at most $\lambda(J)$ by [F12] with $\lambda$ the measure of [F11]. Hence $v=w$ on $J$. [F10, F11, F12, algebra, given]

2.1 The finite-exponent case $1\le p<\infty$. By [F2] applied to the class $u$ on the open interval $I$ there is a measurable ACL representative $u^*$ whose classical derivative $(u^*)'$ exists almost everywhere, is measurable, lies in $L^p(I)$, and represents $Du$ almost everywhere. By [F3] the representative $u^*$ is absolutely continuous on every compact subinterval of $I$. Fix $x\le y$ in $I$; the interval $[x,y]$ is compact in $I$. For real scalars [F5] applied to $u^*$ on $[x,y]$ gives $u^*(y)-u^*(x)=\int_x^y(u^*)'$, and $(u^*)'=Du$ almost everywhere on $[x,y]$, so [F6] replaces the integrand and yields $u^*(y)-u^*(x)=\int_x^y Du$. For complex scalars the same argument applied to the real and imaginary parts, which are absolutely continuous by [F3] and whose derivatives represent $\operatorname{Re}Du$ and $\operatorname{Im}Du$ almost everywhere, and the componentwise integration of [F16] give the same identity. [F1, F2, F3, F5, F6, F9, F16, step 1.1, given]

2.2 The case $p=\infty$. Put $J_n:=I\cap(-n,n)$ for $n\ge1$; each $J_n$ is an open interval with union $I$, and for nonempty $J_n$ the box measure formula [F10] gives $\lambda(J_n)<\infty$. By [F1], $u$ and $Du$ are essentially bounded classes on $I$, hence on $J_n$; applying [F9] to the real measurable functions $|u|$ and $|Du|$ on the finite-measure space $J_n$ shows that $|u|$ and $|Du|$ lie in $\mathcal L^1(J_n)$, and the modulus convention of [F16] converts this into $u|_{J_n}\in L^1(J_n;\mathbb K)$ and $Du|_{J_n}\in L^1(J_n;\mathbb K)$. By [F4] the class $Du|_{J_n}$ is the weak derivative of $u|_{J_n}$ on $J_n$, so [F1] gives $u|_{J_n}\in W^{1,1}(J_n;\mathbb K)$. [F1, F4, F9, F10, F16, step 1.1, given]

3.1 The case $p=\infty$, representatives. Fix $n$ with $J_n\ne\varnothing$ and apply the finite-exponent result of step 2.1 with exponent $1$ on the interval $J_n$ to the class $u|_{J_n}\in W^{1,1}(J_n;\mathbb K)$: there is a measurable representative $u_n$ of that class, absolutely continuous on every compact subinterval of $J_n$, with $u_n(y)-u_n(x)=\int_x^y Du$ for all $x\le y$ in $J_n$. The class $u|_{J_n}$ determines the set of admissible representatives $u_n$, and selecting one for each $n\ge1$ is a countable selection, licensed by Countable Choice from step 1.1. If $J_m\cap J_n\ne\varnothing$, then on that nonempty open interval the two representatives represent the same class and both satisfy the formula there, so step 1.2 gives $u_m=u_n$ on $J_m\cap J_n$. Define $u^*(x):=u_n(x)$ for the least $n$ with $x\in J_n$; the agreement on overlaps makes this well defined, and $u^*|_{J_n}=u_n$ for every $n$. Every compact interval $K\subseteq I$ is contained in some $J_n$: if $K\subseteq[x,y]$ with $x\le y$ in $I$, choose $n$ with $n>\max(|x|,|y|)$. Hence $u^*$ is absolutely continuous on every compact subinterval of $I$ and satisfies $u^*(y)-u^*(x)=\int_x^y Du$ for all $x\le y$ in $I$. [F10, step 1.2, step 2.2, given, choose]

4.1 Combining steps 2.1 and 3.1, in both the finite and the infinite case the class $u$ has a representative $u^*$ that is absolutely continuous on every compact subinterval of $I$ and satisfies $u^*(y)-u^*(x)=\int_x^yDu$ for all $x\le y$ in $I$; equivalently the displayed identity $u^*(x)-u^*(y)=\int_y^xDu$ holds for all $x,y\in I$ with the stated sign convention. Any other representative $v$ with the same two properties satisfies the hypotheses of step 1.2 on the interval $J:=I$, so $v=u^*$. Thus $u^*$ is the unique representative of the class with these properties. [step 1.2, step 2.1, step 3.1, given]

5.1 The representative $u^*$ is continuous on $I$. Fix $x\in I$ and $\varepsilon>0$, and choose $c<x<d$ with $[c,d]\subseteq I$. On the compact interval $[c,d]$ the class $Du$ lies in $\mathcal L^1$: for finite $p$ this is Holder [F13] applied to $|Du|$ and the constant function $1$, and for $p=\infty$ it is [F9] on the finite-measure interval. So [F15] applied to $Du$ on $[c,d]$ gives $\delta>0$ such that $\int_E|Du|<\varepsilon$ for every measurable $E\subseteq[c,d]$ with $\lambda(E)<\delta$. If $y\in[c,d]$ satisfies $|y-x|<\delta$, then after swapping $x$ and $y$ if necessary the interval $[x,y]\subseteq[c,d]$ has measure $|y-x|<\delta$ by [F10], and the formula of step 4.1 with [F14] gives $|u^*(y)-u^*(x)|=|\int_x^yDu|\le\int_x^y|Du|=\int_{[x,y]}|Du|<\varepsilon$. This is exactly the continuity condition at $x$: for real scalars [F18], and for complex scalars [F19] applied to $\mathbb R^2$ under the identification of [F20]. Hence $u^*$ is continuous on $I$. [F9, F10, F13, F14, F15, F18, F19, F20, step 4.1]

6.1 The finite-endpoint extension. Assume $I=(a,b)$ with $-\infty<a<b<\infty$. Then $\lambda((a,b))=b-a<\infty$ by [F10], and $Du\in\mathcal L^1(a,b)$ in the same way as in step 5.1; fix $c_0\in(a,b)$ and define $H(x):=\int_a^xDu$ for $x\in[a,b]$ and the extension $E:=H+u^*(c_0)-H(c_0)$ on $[a,b]$. By [F7] the function $H$ is absolutely continuous on $[a,b]$ (for complex scalars apply [F7] to $\operatorname{Re}Du$ and $\operatorname{Im}Du$ and use [F16]), and adding the constant $u^*(c_0)-H(c_0)$ preserves absolute continuity, so $E$ is absolutely continuous. The countable additivity of the integral over disjoint measurable sets [F17], together with the almost-everywhere agreement of the indicator of the union with the sum of the two indicators [F6], gives $H(x)-H(c_0)=\int_{c_0}^xDu$ for every $x\in[a,b]$; hence $E(x)=u^*(c_0)+\int_{c_0}^xDu=u^*(x)$ for $x\in(a,b)$ by the formula of step 4.1, so $E$ extends $u^*$. Also $E(x)-E(a)=\int_a^xDu$ for every $x\in[a,b]$. Finally, if $F$ is any absolutely continuous function on $[a,b]$ extending $u^*$, then [F5] gives $F(x)-F(a)=\int_a^xF'$ for all $x$, and $F'=E'=Du$ almost everywhere on $(a,b)$ because $F$ and $E$ agree identically there; [F6] then gives $F(x)-F(a)=\int_a^xDu=E(x)-E(a)$, so $F-E$ is constant on $[a,b]$, and that constant is $0$ because $F=E$ on $(a,b)$. Thus the extension is unique. [F5, F6, F7, F8, F16, F17, step 4.1, given, choose]

7.1 Steps 2.1 to 3.1 produce the representative $u^*$, step 4.1 states that it is the unique representative that is locally absolutely continuous and satisfies the integral formula, and step 5.1 shows that it is continuous; together these prove the "exactly one continuous representative" assertion, including $p=1$ in step 2.1 and $p=\infty$ through steps 2.2, 3.1 and 4.1. Step 6.1 proves the finite-endpoint extension and its uniqueness. If the interval is unbounded, no endpoint extension is claimed, and if the interval is a single point, the interval is not open and the statement does not apply; for the zero class $u=0$ the representative $u^*=0$ is locally absolutely continuous, the formula reads $0-0=0$, and it is the unique one by step 4.1. The Axiom of Choice is used only through [F21], which supplies the Countable and Dependent Choice hypotheses of [F2], [F5], [F8], [F10] and [F11]; the intervals $J_n$ are explicitly parameterised and the only countable selections are the representatives $u_n$ of step 3.1, licensed by Countable Choice. $\square$ [F21, step 2.1, step 4.1, step 5.1, step 6.1, given]

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 2 §2.6, Theorem 2.36 (Nikodym,
  ACL characterisation), and Chapter 1 for the one-dimensional picture: an
  $W^{1,p}$ class on an interval has an absolutely continuous representative
  whose classical derivative represents the weak derivative; the
  representative is unique because two absolutely continuous functions that
  agree almost everywhere agree everywhere.
- Haim Brezis, *Functional Analysis, Sobolev Spaces and Partial Differential
  Equations*, Chapter 8 §8.2, which treats the one-dimensional Sobolev space
  $W^{1,p}(I)$: elements are represented by absolutely continuous functions,
  and the fundamental theorem of calculus for absolutely continuous functions
  converts weak differentiation into the integral formula used here. The
  $n$-dimensional statement is Chapter 9 §9.1.
- The published interfaces used are the ACL characterisation
  [[thm-acl-characterisation-of-w-one-p]], the absolutely-continuous
  fundamental theorem
  [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]],
  the ACL definition
  [[def-absolute-continuity-on-almost-every-coordinate-line]], and the
  absolute continuity of the indefinite integral
  [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]].
