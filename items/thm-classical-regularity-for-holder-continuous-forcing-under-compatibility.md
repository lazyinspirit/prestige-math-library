---
id: thm-classical-regularity-for-holder-continuous-forcing-under-compatibility
kind: theorem
title: Classical regularity for Holder-continuous forcing under initial compatibility
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [lem-generator-of-the-contour-semigroup-is-the-sectorial-operator, thm-exponential-bound-for-a-c-zero-semigroup, lem-analytic-duhamel-cancellation-removes-the-generator-singularity, thm-analytic-semigroup-smoothing-estimates, thm-variation-of-constants-formula, def-classical-strong-and-mild-abstract-cauchy-solutions, def-infinitesimal-generator-of-a-c-zero-semigroup, lem-semigroup-generator-commutes-with-orbits-on-its-domain, lem-integrated-semigroup-orbits-belong-to-the-generator-domain, lem-variation-of-constants-integral-is-continuous-for-lone-time-forcing, def-sectorial-operator-with-the-semigroup-sign-convention, def-bounded-linear-operator, def-operator-norm, def-bochner-integrable-function, lem-bochner-integral-norm-inequality, lem-linearity-of-the-bochner-integral, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: 'Chapter 2 Section 2.3, Theorem 2.31 and Remark 2.32, printed pp. 69-71'
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: 'Chapter 11 Section 11.3, Lemma 11.12 and the strong-solution construction, printed pp. 258-261'
verification:
  precheck: pass
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]) for the cited integral and semigroup suppliers.

Let $A$ be sectorial of angle $\delta\in(0,\pi/2]$ in the $e^{tA}$ convention
on a complex Banach space $X$, with generated analytic semigroup
$(T(t))_{t\ge0}$
([[def-sectorial-operator-with-the-semigroup-sign-convention]],
[[thm-analytic-semigroup-smoothing-estimates]]). Let $b>0$, $x\in D(A)$, and
$f\in C^\alpha([0,b],X)$ for some $\alpha\in(0,1)$. Define
$$u(t):=T(t)x+\int_0^tT(t-s)f(s)\,ds,\qquad 0\le t\le b.$$
Then $u$ is a classical solution of $u'=Au+f$ on $[0,b]$ in the sense of
[[def-classical-strong-and-mild-abstract-cauchy-solutions]]:
$u\in C^1([0,b],X)$, $u(t)\in D(A)$ for every $t\in[0,b]$, $u(0)=x$, and
$u'(t)=Au(t)+f(t)$ for every $t\in[0,b]$. Moreover $Au\in C([0,b],X)$ and
$Au(0)=Ax$. Set $c_0:=\sup_{0\le t\le b}\|T(t)\|$ and
$c_1:=\sup_{0<t\le b}t\|AT(t)\|$. For every $0<t\le b$,
$$Au(t)-Ax=(T(t)-I)\bigl(Ax+f(0)\bigr)+R_f(t),$$
where
$$R_f(t):=\int_0^tAT(t-s)\bigl(f(s)-f(t)\bigr)\,ds+(T(t)-I)\bigl(f(t)-f(0)\bigr),$$
and $\|R_f(t)\|\le\bigl(\frac{c_1}{\alpha}+c_0+1\bigr)[f]_\alpha t^\alpha$.
Thus the endpoint modulus includes the semigroup orbit of $Ax+f(0)$; the stated
hypotheses alone give no Hölder modulus for $Au$ in terms of $[f]_\alpha$
alone.

## Facts & Assumptions

**Given:** A sectorial operator $A$ of angle $\delta$ with its analytic semigroup $T$ on the complex Banach space $X$, constants $c_0,c_1$ as above, $b>0$, $x\in D(A)$, $f\in C^\alpha([0,b],X)$ with Hölder constant $[f]_\alpha$ and $\alpha\in(0,1)$, and $u(t):=T(t)x+\int_0^tT(t-s)f(s)ds$ with $v(t):=u(t)-T(t)x$.

[L1] $v\in C([0,b],D(A))$ in the graph norm, $Av\in C([0,b],X)$ with $v(0)=0$ and $Av(0)=0$, and $Av(t)=Av_1(t)+Av_2(t)$ with $Av_1(t)=\int_0^tAT(t-s)(f(s)-f(t))ds$, $\|Av_1(t)\|\le\frac{c_1}{\alpha}[f]_\alpha t^\alpha$ and $Av_2(t)=(T(t)-I)f(t)$ ([[lem-analytic-duhamel-cancellation-removes-the-generator-singularity]]).

[L2] The variation-of-constants formula makes $u$ the unique integral solution of $u'=Au+f$, and the integral-solution identity together with $A\int_0^tT(s)x\,ds=T(t)x-x$ gives $v(t)=A\int_0^tv(s)\,ds+\int_0^tf(s)\,ds$ for $t\in[0,b]$ ([[thm-variation-of-constants-formula]], [[def-classical-strong-and-mild-abstract-cauchy-solutions]], [[lem-integrated-semigroup-orbits-belong-to-the-generator-domain]]); moreover $AT(t)y=T(t)Ay$ for $y\in D(A)$ and $T(t)X\subseteq D(A)$ for $t>0$ ([[lem-semigroup-generator-commutes-with-orbits-on-its-domain]], [[thm-analytic-semigroup-smoothing-estimates]]).

[L3] For a continuous curve $g:[0,b]\to X$ the primitive $G(t)=\int_0^tg$ is differentiable with $G'=g$ and is $C^1$ when $g$ is continuous ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]).

[L4] For a sectorial operator $B$ with vertex $0$, the contour semigroup $S$ is bounded on positive real times, has generator $B$, is unique among exponentially bounded semigroups with that generator, and satisfies $S(t)X\subseteq D(B)$ and $\|BS(t)\|\le K_1/t$ ([[lem-generator-of-the-contour-semigroup-is-the-sectorial-operator]], [[thm-analytic-semigroup-smoothing-estimates]]). Every strongly continuous semigroup has an exponential bound under DC ([[thm-exponential-bound-for-a-c-zero-semigroup]]).

## Proof

**Proof technique:** direct.

1.1 Finite-interval smoothing. Choose a sectorial vertex $\omega$ for $A$ and set $B=A-\omega I$ on $D(A)$. The identity $R(\lambda,B)=R(\lambda+\omega,A)$ makes $B$ sectorial with vertex $0$. The strongly continuous semigroup $S(t)=e^{-\omega t}T(t)$ has generator $B$ on exactly $D(A)$, because $(S(h)y-y)/h=e^{-\omega h}(T(h)y-y)/h+(e^{-\omega h}-1)y/h$. By [L4] it is exponentially bounded and equals the contour semigroup of $B$. Writing $K_0=\sup_{t\ge0}\|S(t)\|$ and using $AT(t)=e^{\omega t}(BS(t)+\omega S(t))$ gives $T(t)X\subseteq D(A)$ for $t>0$, $c_0\le e^{\max\{\omega,0\}b}K_0$ and $c_1\le e^{\max\{\omega,0\}b}(K_1+|\omega|bK_0)<\infty$. These finite-interval bounds meet the Duhamel cancellation hypotheses and supply the positive-time domain inclusion for the given vertex. [L4, given, algebra]

2.1 The Duhamel data. By [L1] the function $v$ is continuous in the graph norm and $Av$ is continuous on $[0,b]$ with $Av(0)=0$, so $s\mapsto Av(s)+f(s)$ is a continuous $X$-valued curve; moreover by [L1] the decomposition $Av=Av_1+Av_2$ holds with $\|Av_1(t)\|\le\frac{c_1}{\alpha}[f]_\alpha t^\alpha$ and $\|Av_2(t)\|\le(c_0+1)\|f\|_\infty$, and $\|(T(t)-I)(f(t)-f(0))\|\le(c_0+1)[f]_\alpha t^\alpha$. [L1, L2, step 1.1, given]

3.1 The integral identity. By [L2] one has $v(t)=A\int_0^tv(s)\,ds+\int_0^tf(s)\,ds$; since $v$ and $Av$ are continuous on $[0,b]$, the graph-norm integral $\int_0^tv(s)ds$ lies in $D(A)$ with $A\int_0^tv(s)ds=\int_0^tAv(s)\,ds$, because $A$ is closed and the Riemann sums of the $D(A)$-valued continuous curve $s\mapsto v(s)$ converge in the graph norm. Hence $v(t)=\int_0^t\bigl(Av(s)+f(s)\bigr)ds$ with a continuous integrand. [step 2.1, L1, L2, L3, given, algebra]

4.1 Classicality. The fundamental theorem [L3] applied to the continuous curve $s\mapsto Av(s)+f(s)$ shows $v\in C^1([0,b],X)$ with $v'=Av+f$ and $v(0)=0$. For $t>0$ the orbit $T(t)x$ has derivative $AT(t)x=T(t)Ax$ by [L2] and this derivative extends continuously to $0$ with value $Ax$ because $x\in D(A)$ and $T$ is strongly continuous; hence $u=T(\cdot)x+v\in C^1([0,b],X)$ with $u(0)=x$ and $u'(t)=AT(t)x+Av(t)+f(t)=Au(t)+f(t)$ for every $t\in[0,b]$, and $u(t)\in D(A)$ because both $T(t)x$ and $v(t)$ lie in the domain. Thus $u$ is a classical solution in the sense of the cited definition, and $Au\in C([0,b],X)$ with $Au(0)=Ax$. [step 2.1, step 3.1, L1, L2, L3, given, algebra]

5.1 Endpoint identity, modulus and caveat. Subtracting $Ax$ from $Au(t)=AT(t)x+Av_1(t)+Av_2(t)$ and writing $Av_2(t)=(T(t)-I)f(t)=(T(t)-I)f(0)+(T(t)-I)(f(t)-f(0))$ gives $Au(t)-Ax=(T(t)-I)(Ax+f(0))+R_f(t)$ with $R_f$ as displayed, and the bounds of [step 2.1] give $\|R_f(t)\|\le(\frac{c_1}{\alpha}+c_0+1)[f]_\alpha t^\alpha$. The term $(T(t)-I)(Ax+f(0))$ tends to $0$ by strong continuity but admits no uniform power modulus as stated, so the hypotheses give continuity and classicality of $u$ but not Hölder continuity of $Au$ in terms of $[f]_\alpha$ alone. The argument used only the Duhamel cancellation, the variation-of-constants identity and the fundamental theorem, so no choice principle beyond Dependent Choice was used. [step 2.1, step 4.1, L1, L2, given] ∎
