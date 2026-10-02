---
id: thm-riesz-decomposition-subharmonic-plane
kind: theorem
title: "Local Riesz decomposition of a plane subharmonic function"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-dependent-choice
  - cor-components-of-open-subsets-of-rn-are-polygonally-connected
  - cor-second-countable-lch-locally-finite-borel-measures-are-regular
  - lem-dependent-choice-implies-countable-choice
  - def-plane-subharmonic-function
  - def-plane-harmonic-function
  - def-riesz-measure-subharmonic-function
  - def-radon-measure-on-an-lch-space
  - def-restriction-of-a-measure
  - def-locally-integrable-function-as-a-regular-distribution
  - thm-plane-subharmonic-functions-are-locally-integrable
  - thm-riesz-measure-is-positive-radon
  - lem-logarithmic-potential-distributional-laplacian
  - thm-weyl-lemma-for-the-laplacian
  - thm-locally-integrable-functions-embed-in-distributions
  - thm-distributional-differentiation-is-continuous-and-commutes
  - lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity
  - thm-c-two-characterization-of-plane-subharmonicity
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. Kuehn, Introduction to Potential Theory via Applications, §2.3"
      url: "https://arxiv.org/pdf/0804.4689"
      locator: "§2.3, Riesz decomposition and Weyl's lemma, PDF pp. 13–16"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §5"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§5, the Riesz decomposition of a subharmonic function"
verification:
  precheck: pass
---

## Statement

Assume Dependent Choice. Let $\Omega\subseteq\mathbb C$ be a complex domain,
let $u$ be subharmonic on $\Omega$ in the sense of
[[def-plane-subharmonic-function]], and let $D\subseteq\Omega$ be open with
$\overline D$ compact and $\overline D\subseteq\Omega$. Let
$\mu_u=(2\pi)^{-1}\Delta u$ be the Riesz measure of
[[def-riesz-measure-subharmonic-function]] and let
$M$ be the restriction $\mu_u|_D$ of [[def-restriction-of-a-measure]],
extended by zero to $\mathbb C$: explicitly,
$M(A):=\mu_u(A\cap D)$ for $A\in\mathcal B(\mathbb C)$. Then $M$ is a finite positive Borel measure
carried by $D$, and there is a function $h$ harmonic on $D$ with

$$u(z)=h(z)+\int_{\mathbb C}\log|z-w|\,dM(w)\qquad\text{for every }z\in D,$$

the integral $\int\log|z-w|\,dM(w)$ being an element of $[-\infty,+\infty)$
whose value $-\infty$ is allowed. Moreover the pair is unique: if $M'$ is a
finite positive Borel measure carried by $D$ and $h'$ is harmonic on $D$ with
$u(z)=h'(z)+\int_{\mathbb C}\log|z-w|\,dM'(w)$ for every $z\in D$, then
$M'=M$ and $h'=h$.

Dependent Choice is used by the positive Radon representation and uniqueness
supplier [F4]. It also supplies Countable Choice for the potential,
regularity, Weyl, distribution-embedding and polar-coordinate suppliers
[F5]–[F7], [F10] and [F13], and for the selection of radii in step 8.1.
The potential and averaging estimates themselves are choice-free.

## Facts & Assumptions

**Given:** a complex domain $\Omega$, a subharmonic $u:\Omega\to[-\infty,\infty)$ on $\Omega$, the Riesz functional $\mu_u$ of [[def-riesz-measure-subharmonic-function]], an open $D$ with $\overline D$ compact and $\overline D\subseteq\Omega$, and Dependent Choice ([[def-dependent-choice]]).

[F1] A function $v:\Omega\to[-\infty,\infty)$ on a complex domain is subharmonic when it is upper semicontinuous, is not identically $-\infty$ on any component, and satisfies the circle mean inequality $v(a)\le(2\pi)^{-1}\int_0^{2\pi}v(a+re^{it})\,dt$ for every closed disc $\overline{D(a,r)}\subseteq\Omega$ ([[def-plane-subharmonic-function]]).

[F2] The Riesz functional is $\mu_u(\varphi)=(2\pi)^{-1}\int_\Omega u\,\Delta\varphi\,dA$ for $\varphi\in C_c^\infty(\Omega)$, real when $\varphi$ is real-valued and complex in general; equivalently $\Delta T_u=2\pi\mu_u$, where $T_u$ is the regular distribution of $u$ ([[def-riesz-measure-subharmonic-function]]).

[F3] Dependent Choice implies Countable Choice ([[def-dependent-choice]], [[lem-dependent-choice-implies-countable-choice]]), which discharges the choice hypotheses of [F5], [F6], [F7], [F10] and [F13].

[F4] Under Dependent Choice, $\mu_u$ is a positive Radon measure on $\Omega$ ([[thm-riesz-measure-is-positive-radon]]).

[F5] Assume Countable Choice and let $\rho$ be a finite positive Borel measure of compact support on $\mathbb C$. Then $p_\rho(z)=\int\log|z-w|\,d\rho(w)$, with the diagonal value $-\infty$, is locally integrable and subharmonic on $\mathbb C$, and $\Delta p_\rho=2\pi\rho$ distributionally, that is, $(2\pi)^{-1}\int p_\rho\Delta\varphi\,dA=\int\varphi\,d\rho$ for every $\varphi\in C_c^\infty(\mathbb C)$ ([[lem-logarithmic-potential-distributional-laplacian]]).

[F6] Under Countable Choice the map $f\mapsto T_f$ from $L^1_{\mathrm{loc}}$ modulo almost-everywhere equality into distributions is injective ([[thm-locally-integrable-functions-embed-in-distributions]], [[def-locally-integrable-function-as-a-regular-distribution]]); and for $g\in C^2$ on an open set one has $\Delta T_g=T_{\Delta g}$, while differentiation is linear on distributions ([[thm-distributional-differentiation-is-continuous-and-commutes]]).

[F7] Assume Countable Choice: if $T\in\mathcal D'(D)$ with $\Delta T=0$, there is a unique smooth harmonic $h$ on $D$ with $T=T_h$ ([[thm-weyl-lemma-for-the-laplacian]]).

[F8] A finite nonnegative linear combination of subharmonic functions on a domain is subharmonic, in particular the sum of two of them; a $C^2$ function with $\Delta g\ge0$ is subharmonic, and a harmonic function is $C^2$ with $\Delta h=0$, hence subharmonic ([[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]], [[thm-c-two-characterization-of-plane-subharmonicity]], [[def-plane-harmonic-function]]).

[F9] Every subharmonic function on a plane domain is locally integrable ([[thm-plane-subharmonic-functions-are-locally-integrable]]).

[F10] The polar-coordinate formula (under Countable Choice) and Tonelli's theorem give, for a Borel function $f\ge0$ and a disc $B(a,R)$, $\int_{B(a,R)}f\,dA=\int_0^Rr\int_0^{2\pi}f(a+re^{it})\,dt\,dr$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F11] A Radon measure on an LCH space is finite on compact sets ([[def-radon-measure-on-an-lch-space]]), and restriction to a Borel set defines a measure on the ambient sigma-algebra ([[def-restriction-of-a-measure]]). Its zero extension here is $M(A)=\mu_u(A\cap D)$ for $A\in\mathcal B(\mathbb C)$; $A\cap D$ is Borel in $\Omega$, disjoint countable unions stay disjoint under intersection with $D$, and hence countable additivity passes to $M$. Thus $M$ is a Borel measure on $\mathbb C$ carried by $D$.

[F12] Every connected component of an open subset of $\mathbb R^n$ is open and polygonally connected ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]]); in particular every component of the open set $D$ is a complex domain and satisfies $\overline{D_0}\subseteq\overline D\subseteq\Omega$.

[F13] Assume Countable Choice: every Borel measure on a second-countable LCH space that is finite on compact sets is regular, that is, Radon in the sense of [[def-radon-measure-on-an-lch-space]] ([[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]).

## Proof

**Proof technique:** direct.

1.1 Since $\overline D$ is compact and contained in $\Omega$, [F4] and [F11] give $\mu_u(\overline D)<+\infty$; hence the restriction $M=\mu_u|_D$ is a finite positive Borel measure carried by $\overline D\subseteq\Omega$, and in particular carried by $D$. [F4, F11, given]

1.2 Let $D_0$ be a connected component of $D$, let $v$ be subharmonic on the complex domain $D_0$, and let $a\in D_0$. Then $v(a)\le A_r(v)(a)$ for every $r$ with $\overline{D(a,r)}\subseteq D_0$ by [F1]. For every real $N>v(a)$, upper semicontinuity gives $v\le N$ on $\overline{D(a,\delta)}\subseteq D_0$ for some $\delta>0$, hence $A_r(v)(a)\le N$ for $0<r\le\delta$. Thus $\lim_{r\downarrow0}A_r(v)(a)=v(a)$, including $v(a)=-\infty$, when every real $N$ works. [F1, F12]

1.3 By [F3] Dependent Choice yields Countable Choice, so the choice hypotheses of the suppliers [F5], [F6], [F7], [F10] and [F13] are discharged for the whole argument. [F3, given]

2.1 Put $p:=p_M=\int\log|z-w|\,dM(w)$ with the diagonal value $-\infty$; by [F5] (with $\rho=M$) the function $p$ is locally integrable and subharmonic on $\mathbb C$ and satisfies $\Delta p=2\pi M$ distributionally, that is, $(2\pi)^{-1}\int p\Delta\varphi\,dA=\int\varphi\,dM$ for every $\varphi\in C_c^\infty(\mathbb C)$. [step 1.1, F5]

2.2 For uniqueness of the measure let $M'$ be a finite positive Borel measure carried by $D$ and $h'$ harmonic on $D$ with $u=h'+p_{M'}$ pointwise on $D$, and set $p':=p_{M'}$, locally integrable and subharmonic with $\Delta p'=2\pi M'$ by [F5]. For every $\varphi\in C_c^\infty(D)$, [F2], [F5], [F6] and the representation clause of [F4] give $2\pi\int\varphi\,dM'=\int p'\Delta\varphi\,dA=\langle\Delta T_{p'},\varphi\rangle=\langle\Delta T_{h'+p'},\varphi\rangle=\langle\Delta T_u,\varphi\rangle=2\pi\mu_u(\varphi)=2\pi\int\varphi\,dM$, so $M$ and $M'$ define the same functional $\Phi(\varphi):=\int\varphi\,dM$ on $C_c^\infty(D)$. [step 1.1, F2, F4, F5, F6, given]

3.1 Let $T_u$ and $T_p$ be the regular distributions of the locally integrable functions $u$ and $p$. For every $\varphi\in C_c^\infty(D)$ one has $\langle\Delta T_u,\varphi\rangle=T_u(\Delta\varphi)=\int_\Omega u\Delta\varphi\,dA=2\pi\mu_u(\varphi)=2\pi\int_\Omega\varphi\,d\mu_u=2\pi\int_\Omega\varphi\,dM=\int_\Omega p\Delta\varphi\,dA=\langle\Delta T_p,\varphi\rangle$, where the third equality is [F2], the fifth uses that $\varphi$ is supported in $D$ and $M=\mu_u|_D$, and the sixth is step 2.1 and [F6]; hence $\Delta(T_u-T_p)=0$ in $\mathcal D'(D)$. [step 2.1, F2, F6, F9]

3.2 Now let $D_0$ be a connected component of the open set $D$; by [F12] it is open, hence a complex domain, contained in $\Omega$ with $\overline{D_0}\subseteq\overline D\subseteq\Omega$ compact, and $q:=p'|_{D_0}$ is subharmonic on $D_0$ with Riesz functional $\varphi\mapsto(2\pi)^{-1}\int_{D_0}q\,\Delta\varphi\,dA=\int\varphi\,dM'$ for every $\varphi\in C_c^\infty(D_0)$ by [F5]. Both $M'|_{D_0}$ and $M|_{D_0}$ are finite Borel measures on the second-countable LCH space $D_0$, hence Radon by [F13] under the Countable Choice of step 1.3, and $M|_{D_0}$ represents the same functional because $\int\varphi\,d(M|_{D_0})=\Phi(\varphi)=(2\pi)^{-1}\int_{D_0}q\,\Delta\varphi\,dA$ for every $\varphi\in C_c^\infty(D_0)$ by step 2.2; the uniqueness clause of [F4] applied on the domain $D_0$ therefore gives $M'|_{D_0}=M|_{D_0}$. Since $D$ is second countable and its components are pairwise disjoint nonempty open sets, each containing a member of a countable base, there are at most countably many components; they partition $D$, so countable additivity gives $M'=M$ on every Borel subset of $D$, and both measures are carried by $D$, hence $M'=M$ on $\mathcal B(\mathbb C)$. [step 1.3, step 2.2, F4, F5, F12, F13]

4.1 By [F7] applied to the distribution $T:=(T_u-T_p)|_D\in\mathcal D'(D)$ of step 3.1, there is a unique smooth harmonic $h$ on $D$ with $T=T_h$, that is, $\langle T_u-T_p,\varphi\rangle=\int_Dh\varphi\,dA$ for every $\varphi\in C_c^\infty(D)$. [step 3.1, F7]

5.1 The function $u-p$ is locally integrable on $D$ by [F9] and step 2.1, and $h$ is locally integrable; step 4.1 says that their regular distributions agree. By the injectivity of [F6], $u-p=h$ almost everywhere on $D$. [step 2.1, step 4.1, F6, F9]

6.1 On each connected component $D_0$ of $D$, the function $g:=h+p$ is subharmonic: $h|_{D_0}$ is harmonic and hence subharmonic by [F8], and $p|_{D_0}$ inherits upper semicontinuity and the circle inequality from step 2.1 and cannot be identically $-\infty$ because it is locally integrable. The sum is subharmonic by [F8]. Likewise $u|_{D_0}$ is subharmonic by [F1] and its local integrability [F9]. Step 5.1 gives $u=g$ almost everywhere on $D$. [step 2.1, step 5.1, F1, F8, F9, F12]

7.1 For fixed $a\in D$ choose $R>0$ with $\overline{D(a,R)}\subseteq D$. By step 2.1 and [F9], $u,g\in L^1_{\rm loc}(D)$. Replace their values $-\infty$ by $0$ to obtain finite Borel representatives $\tilde u,\tilde g$; they agree with $u,g$ almost everywhere and satisfy $\tilde u=\tilde g$ almost everywhere by step 6.1. Thus $q:=|\tilde u-\tilde g|$ is a nonnegative Borel function with $q=0$ almost everywhere. Applying [F10] to $q+|\tilde u|+|\tilde g|$ on $B(a,R)$ shows that for almost every $r\in(0,R)$ the restrictions of $\tilde u,\tilde g$ to the circle are integrable and agree almost everywhere in angle. Since the representatives differ from the subharmonic functions only on planar null sets, [F10] also makes those exceptional sets arclength-null for almost every $r$. Hence $A_r(u)(a)=A_r(g)(a)$ for almost every $r\in(0,R)$, where $A_r(v)(a):=(2\pi)^{-1}\int_0^{2\pi}v(a+re^{it})\,dt$. [step 6.1, F9, F10]
8.1 Let $S\subseteq(0,R)$ be the full-measure set of radii from step 7.1 for which the circle means agree. Each $S\cap(0,\min(R/2,1/(n+1)))$ is nonempty, so Countable Choice [F3] gives $r_n\in S\cap(0,\min(R/2,1/(n+1)))$ for every $n$; then $r_n\to0$. By step 1.2, applied to the subharmonic functions $u$ and $g$ at $a$, $u(a)=\lim_nA_{r_n}(u)(a)=\lim_nA_{r_n}(g)(a)=g(a)$. Since $a\in D$ was arbitrary, $u=h+p$ everywhere on $D$, which is the asserted decomposition. [step 7.1, step 1.2, F3]

9.1 With $M'=M$ from step 3.2 we have $h'+p=h+p$ everywhere on $D$ by the decomposition of step 8.1, and $p$ is finite almost everywhere because $p\in L^1_{\mathrm{loc}}(D)$ by step 2.1; hence $h'=h$ almost everywhere on $D$. The difference $h'-h$ is harmonic, hence continuous, on the open set $D$, and an almost-everywhere-vanishing continuous function on $D$ vanishes everywhere, since a set of full measure in a nonempty open set is dense; therefore $h'=h$, and the decomposition is unique in both entries. [step 2.1, step 8.1, step 3.2, F6, F9] ∎

## Remarks

**The integral is finite or $-\infty$, never $+\infty$.** On the compact carrier of $M$ the integrand $\log|z-w|$ is bounded above, so the integral converges in the extended sense with value in $[-\infty,+\infty)$; the value $-\infty$ occurs exactly when the negative part of the kernel is not $M$-integrable at $z$, and at such a point the decomposition forces $u(z)=-\infty$.

**The kernel normalization is what makes h unique.** The measure in the decomposition is the restriction of the normalized Riesz measure $\mu_u=(2\pi)^{-1}\Delta u$ of [[def-riesz-measure-subharmonic-function]]; the factor $2\pi$ is the same one that makes $\Delta\log|z-a|=2\pi\delta_a$, so the potential $\int\log|z-w|\,dM(w)$ has distributional Laplacian exactly $2\pi M$.
