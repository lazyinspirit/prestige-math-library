---
id: ex-logarithmic-capacity-of-a-real-interval
kind: example
title: "Arcsine equilibrium measure and capacity of a segment"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-logarithmic-potential-and-energy
  - def-logarithmic-capacity-compact-set
  - def-probability-measure
  - def-measure
  - def-distribution-function-of-a-borel-measure-on-r
  - def-principal-inverse-sine-and-cosine
  - lem-logarithmic-energy-strict-positivity-for-zero-mass-charges
  - thm-equilibrium-measure-existence-and-uniqueness
  - ex-logarithmic-capacity-of-disc-and-equilibrium-circle
  - def-complex-exponential
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-nth-roots-and-roots-of-unity
  - lem-complex-conjugation-and-modulus-laws
  - thm-monotone-convergence-for-the-integral
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-principal-inverse-sine-and-cosine-derivatives
  - thm-ftc-second-part
  - thm-lebesgue-stieltjes-correspondence-with-distribution-functions
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §§1–3"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§1, Example 1.11 (the interval and the arcsine distribution), printed p. 174; §3, Example 3.6, the Joukowski potential"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §§3 and 5"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§3, equilibrium measure of an interval; §5, capacity of a segment"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $a<b$ and let $K=[a,b]$. The unique
equilibrium measure of $K$ has the density

$$d\mu_K(x)=\frac{dx}{\pi\sqrt{(x-a)(b-x)}}\qquad(a<x<b),$$

that is, $\mu_K$ is the pushforward of $dx/(\pi\sqrt{1-x^2})$ on $(-1,1)$
under $x\mapsto\frac{a+b}2+\frac{b-a}2x$, and its potential is

$$U^{\mu_K}(x)=\log\frac4{b-a}\ \ (a\le x\le b),\qquad U^{\mu_K}(z)=\log\frac4{b-a}-\log\bigl|w_+(z)\bigr|\ \ (z\notin K),$$

where $w_+(z)$ is the root of $w^2-2\frac{2z-a-b}{b-a}w+1=0$ of modulus at
least $1$. In particular $\operatorname{cap}(K)=(b-a)/4$ and
$V_K=\log\frac4{b-a}$. For $[a,b]=[-1,1]$ this says
$d\mu=\frac{dx}{\pi\sqrt{1-x^2}}$, $U^\mu=\log2$ on $[-1,1]$ and
$\operatorname{cap}([-1,1])=\frac12$.

The Axiom of Choice enters through the equilibrium identification, through
Dependent Choice for the normalized-arclength harmonic-measure interface [F5],
and through Countable Choice for strict energy positivity [F4] and the
Lebesgue–Stieltjes identification [F9]. The Joukowski and scaling calculations
are choice-free.

## Facts & Assumptions

**Given:** real numbers $a<b$, the segment $K=[a,b]$, the logarithmic kernel and potential conventions of [[def-logarithmic-potential-and-energy]], the Robin constant and capacity of [[def-logarithmic-capacity-compact-set]], and the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] $U^\nu(z)=\int\log\frac1{|z-w|}\,d\nu(w)\in(-\infty,+\infty]$ for finite positive Borel $\nu$ of compact support, and for $R>\operatorname{diam}\operatorname{supp}\nu$ one has $I(\nu)=\iint(k+\log R)\,d\nu\,d\nu-\nu(\mathbb C)^2\log R$, independently of $R$; the mixed energy $I(\nu,\rho)=\iint k\,d\nu\,d\rho$ is symmetric ([[def-logarithmic-potential-and-energy]]).

[F2] For nonempty compact $F$, $V_F=\inf_{\rho\in P(F)}I(\rho)$ and $\operatorname{cap}(F)=e^{-V_F}$ when $V_F<+\infty$ and $0$ otherwise; a Borel probability measure on $F$ is a finite positive measure carried by $F$ ([[def-logarithmic-capacity-compact-set]], [[def-probability-measure]]).

[F3] Assume the Axiom of Choice: a compact nonpolar $F$ has exactly one equilibrium measure, the unique minimizer of $I$ over $P(F)$ ([[thm-equilibrium-measure-existence-and-uniqueness]]).

[F4] Assume Countable Choice: for finite positive compactly supported $\nu,\rho$ with equal mass and finite energy, $I(\nu,\rho)$ is finite, $I(\nu-\rho)=I(\nu)-2I(\nu,\rho)+I(\rho)$ is real, $I(\nu-\rho)\ge0$, and $I(\nu-\rho)=0$ only for $\nu=\rho$ ([[lem-logarithmic-energy-strict-positivity-for-zero-mass-charges]]); the Axiom of Choice implies Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F5] With $\mu_1$ the normalized arclength measure on the unit circle, i.e. the harmonic measure at the centre of the unit disc, $U^{\mu_1}(c)=\log\frac1{|c|}$ for $|c|\ge1$ and $U^{\mu_1}(c)=0$ for $|c|\le1$, and $I(\mu_1)=0$, with $\operatorname{cap}\overline{D(0,1)}=1$ ([[ex-logarithmic-capacity-of-disc-and-equilibrium-circle]]).

[F6] **Image measures.** If $\nu$ is a Borel probability measure on a measurable space $X$ and $\varphi:X\to Y$ is Borel measurable, then $\varphi_*\nu(E):=\nu(\varphi^{-1}(E))$ is a Borel probability measure on $Y$ and $\int f\,d\varphi_*\nu=\int f\circ\varphi\,d\nu$ for every nonnegative Borel $f$; for continuous $\varphi$ on a metric space the preimages of Borel sets are Borel, indicators give the identity by definition, simple functions by linearity, and general $f$ by monotone convergence ([[def-measure]], [[def-probability-measure]], [[thm-monotone-convergence-for-the-integral]]).

[F7] The complex exponential has $|e^{it}|=1$, $(e^{it}+e^{-it})/2=\cos t$, and the modulus is multiplicative: $|uv|=|u||v|$ and $|u/v|=|u|/|v|$ for $v\ne0$ ([[def-complex-exponential]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[lem-complex-conjugation-and-modulus-laws]]); every complex number has a square root, and more generally every nonzero complex number has an $n$-th root ([[thm-complex-nth-roots-and-roots-of-unity]]).

[F8] The arcsine density defines a measure: for a nonnegative Borel function $h$ on $\mathbb R$, the set function $E\mapsto\int_Eh(x)\,dx$ is a measure ([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]); the derivatives $(\arcsin y)'=1/\sqrt{1-y^2}$ and $(\arccos y)'=-1/\sqrt{1-y^2}$ hold for $-1<y<1$ ([[thm-principal-inverse-sine-and-cosine-derivatives]], [[def-principal-inverse-sine-and-cosine]]), and a function with a continuous derivative on $[u,v]$ is the derivative of its primitive there ([[thm-ftc-second-part]]).

[F9] Assume Countable Choice: a Borel measure on $\mathbb R$ that is finite on compacts is determined by its distribution function $F_\mu(x)=\mu((0,x])$ for $x\ge0$, $F_\mu(x)=-\mu((x,0])$ for $x<0$: two such measures with equal distribution functions coincide, and $F_\mu(b)-F_\mu(a)=\mu((a,b])$ for $a<b$ ([[def-distribution-function-of-a-borel-measure-on-r]], [[thm-lebesgue-stieltjes-correspondence-with-distribution-functions]]).



## Verification

**Proof technique:** direct.

1.1 Put $\mu_1:=\omega_{D(0,1)}^{0}$, the normalized arclength measure on the unit circle of [F5], and let $\varphi(t):=\cos t$; define $\nu:=\varphi_*\lambda$ where $\lambda$ is normalized Lebesgue measure on $[0,\pi]$, that is, $\nu(E)=\lambda(\{t\in[0,\pi]:\cos t\in E\})$ for Borel $E\subseteq\mathbb R$. By [F6] the set function $\nu$ is a Borel probability measure concentrated on $[-1,1]$, and $\int f\,d\nu=\frac1\pi\int_0^\pi f(\cos t)\,dt$ for every nonnegative Borel $f$. [F6, given]

1.2 **The Joukowski factorization.** Let $z\in\mathbb C$ and let $s$ satisfy $s^2=z^2-1$ with $s=0$ when $z=\pm1$, which exists by [F7]; put $w_+:=z+s$ and $w_-:=z-s$, so that $w_++w_-=2z$, $w_+w_-=z^2-s^2=1$, and $w^2-2zw+1=(w-w_+)(w-w_-)$ for all $w$. Interchanging the two roots if necessary, $|w_+|\ge1\ge|w_-|$, because $|w_+||w_-|=1$. [F7, algebra]

1.3 **The arcsine density of $\nu$.** Define the nonnegative Borel function $\rho(x):=\frac{1}{\pi\sqrt{1-x^2}}$ for $-1<x<1$ and $\rho(x):=0$ otherwise, and let $\eta:=E\mapsto\int_E\rho\,dx$ be the measure of [F8]. For $-1<x<1$ its distribution function is $F_\eta(x)=\frac1\pi\int_0^x\frac{dy}{\sqrt{1-y^2}}=\frac1\pi\arcsin x$ for $x\ge0$, and $F_\eta(x)=-\frac1\pi\int_x^0\frac{dy}{\sqrt{1-y^2}}=\frac1\pi\arcsin x$ for $x<0$, the primitive being [F8]; hence $F_\eta(x)=\frac1\pi(\frac\pi2-\arccos x)$ on $(-1,1)$ with $\eta$ a probability because $\arcsin1-\arcsin(-1)=\pi$. [F8, algebra]

2.1 For real $t$ with $w=e^{it}$ the identity $z-\cos t=(2zw-w^2-1)/(2w)=-\frac{(w-w_+)(w-w_-)}{2w}$ holds, and taking moduli with $|w|=1$ gives $|z-\cos t|=\frac12|e^{it}-w_+|\,|e^{it}-w_-|$; both sides vanish simultaneously, and if $z\notin[-1,1]$ then $w_+\ne w_-$ and neither root lies on the unit circle. [step 1.2, F7, algebra]

2.2 The distribution function of $\nu$ of step 1.1 is the same: for $0\le x<1$, $F_\nu(x)=\frac1\pi|\{t\in[0,\pi]:0<\cos t\le x\}|=\frac1\pi(\frac\pi2-\arccos x)$ because $\cos$ decreases on $[0,\pi]$, and for $-1<x<0$ the same computation of $\{t:\cos t\in(x,0]\}=[\frac\pi2,\arccos x)$ gives $F_\nu(x)=\frac1\pi(\frac\pi2-\arccos x)$; both distributions equal $-\frac12$ for $x\le-1$ and $\frac12$ for $x\ge1$. [step 1.1, step 1.3, F9, algebra]

3.1 **The potential of $\nu$.** By [F6] and step 2.1, applied to the positive and negative parts of the logarithmic kernel separately, the symmetry of $\cos t$ gives $$U^\nu(z)=\frac1\pi\int_0^\pi\log\frac1{|z-\cos t|}\,dt=\frac1{2\pi}\int_0^{2\pi}\log\frac1{|z-\cos t|}\,dt=\log2+U^{\mu_1}(w_+)+U^{\mu_1}(w_-).$$ Indeed, step 2.1 writes $\log\frac1{|z-\cos t|}=\log2-\log|e^{it}-w_+|-\log|e^{it}-w_-|$, and each negative logarithm has circle average equal to the corresponding unit-circle potential. [step 2.1, F1, F5, F6, algebra]

3.2 By step 2.2 the two Borel probability measures $\nu$ and $\eta$ on $\mathbb R$, both finite on compacts, have equal distribution functions; by [F9] they coincide, so $\nu$ has the density $\rho(x)=\frac{1}{\pi\sqrt{1-x^2}}$ on $(-1,1)$, as claimed for $[a,b]=[-1,1]$. [step 1.3, step 2.2, F9]

4.1 Since $|w_+|\ge1\ge|w_-|$, [F5] gives $U^{\mu_1}(w_+)=\log\frac1{|w_+|}$ and $U^{\mu_1}(w_-)=0$, so step 3.1 yields $U^\nu(z)=\log2-\log|w_+|$ for $z\notin[-1,1]$; if $z\in[-1,1]$ then $z=\cos\tau$ and $s$ is purely imaginary with $|w_+|=|w_-|=1$, so the same identity gives $U^\nu(z)=\log2$. In particular $U^\nu=\log2$ on $[-1,1]$. [step 3.1, F1, F5, F7, algebra]

4.2 **Scaling.** Let $\alpha:=\frac{a+b}2$, $\beta:=\frac{b-a}2>0$ and $T(x):=\alpha+\beta x$, so $T$ maps $[-1,1]$ bijectively onto $[a,b]$. Put $\mu:=T_*\nu$; by [F6] the measure $\mu$ is a Borel probability on $[a,b]$, and for finite positive compactly supported measures the identities $k(Tu,Tv)=k(u,v)-\log\beta$, hence, writing $M:=\rho(\mathbb C)$, $I(T_*\rho)=I(\rho)-M^2\log\beta$ and $U^{T_*\rho}(Tx)=U^\rho(x)-M\log\beta$, follow by substituting $|Tu-Tv|=\beta|u-v|$ and the shift convention of [F1]. For probabilities $M=1$, which is the case used in steps 7.1 and 8.1; the density transforms by $dx=d(T^{-1}y)=\frac{dy}{\beta}$ and $\sqrt{1-x^2}=\frac1\beta\sqrt{(y-a)(b-y)}$, so $d\mu=dy/\bigl(\pi\sqrt{(y-a)(b-y)}\bigr)$ on $(a,b)$. [step 3.2, F1, F6, algebra]

5.1 **The energy and minimality.** Choose $R>2$; by [F1] and step 4.1 with $z\in[-1,1]$, $I(\nu)=\int U^\nu\,d\nu=\log2$, a finite real number. For any Borel probability $\sigma$ on $[-1,1]$ with $I(\sigma)<+\infty$, the support of $\sigma$ lies in $[-1,1]$, so $U^\nu=\log2$ on $\operatorname{supp}\sigma$ by step 4.1, and [F1] gives $I(\nu,\sigma)=\int U^\nu\,d\sigma=\log2=I(\nu)$. [step 4.1, F1, F2, given]

6.1 By [F4], whose Countable Choice hypothesis is supplied by the Axiom of Choice of the statement, the pair $\nu,\sigma$ of step 5.1 satisfies $I(\sigma-\nu)=I(\sigma)-2I(\nu,\sigma)+I(\nu)=I(\sigma)-\log2\ge0$, with equality if and only if $\sigma=\nu$; hence every $\sigma\in P([-1,1])$ has $I(\sigma)\ge\log2=I(\nu)$ with equality only for $\sigma=\nu$, so $V_{[-1,1]}=\log2$, $\operatorname{cap}([-1,1])=\frac12$, and $\nu$ is the unique equilibrium measure of $[-1,1]$, with $U^\nu=\log2$ on $[-1,1]$. [step 5.1, F2, F3, F4, given]

7.1 Applying steps 6.1 and 4.1 to $\mu=T_*\nu$ with the identities of step 4.2 gives $I(\mu)=I(\nu)-\log\beta=\log\frac2\beta=\log\frac4{b-a}$, $U^\mu(x)=\log2-\log\beta=\log\frac4{b-a}$ for $x\in[a,b]$, and $U^\mu(y)=\log\frac4{b-a}-\log|w_+(z)|$ for $y\notin[a,b]$ with $z=(2y-a-b)/(b-a)$ and $w_+$ the root of modulus at least $1$ of $w^2-2zw+1=0$. [step 4.1, step 6.1, step 4.2, algebra]

8.1 Every Borel probability $\sigma$ on $[a,b]$ is the pushforward $T_*\rho$ of the Borel probability $\rho:=T^{-1}_*\sigma$ on $[-1,1]$, and step 4.2 applied to $\rho$ gives $I(\sigma)=I(\rho)-\log\beta\ge\log2-\log\beta=\log\frac4{b-a}=I(\mu)$, with equality if and only if $\rho=\nu$, that is, if and only if $\sigma=\mu$; hence $V_K=\log\frac4{b-a}$, $\operatorname{cap}(K)=e^{-V_K}=\frac{b-a}4$, and $\mu$ is the unique equilibrium measure of $K=[a,b]$. [step 6.1, step 4.2, step 7.1, F2, F3]

9.1 Steps 4.2, 7.1 and 8.1 give the stated density, potential, capacity and uniqueness, with the case $[a,b]=[-1,1]$ recovered by $\alpha=0$, $\beta=1$. The Axiom of Choice enters through [F3], supplies Dependent Choice for [F5], and supplies Countable Choice for [F4] and [F9]; the Joukowski factorization and scaling computation are choice-free. [step 4.2, step 7.1, step 8.1, F4, given] ∎

## Remarks

**Why the Joukowski variable appears.** The quadratic $w^2-2zw+1$ has the two roots $w_\pm$ with $w_+w_-=1$, so one lies inside and one outside the unit circle (both on it when $z\in[-1,1]$). The identity of step 2.1 turns the logarithm of $|z-\cos t|$ into a sum of two logarithms of the form $\log|e^{it}-c|$, whose circle average is known from the disc example; that is exactly the point at which the interval computation uses [[ex-logarithmic-capacity-of-disc-and-equilibrium-circle]].

**The density is identified, not assumed.** Step 1.3 defines the arcsine density measure independently, and step 3.2 identifies it with the pushforward $\nu$ through the Lebesgue–Stieltjes correspondence, using the arcsin primitive; no change-of-variables formula with a vanishing derivative at the endpoints is invoked.

**Choice.** The Axiom of Choice is used in [F3] to identify the energy minimizer as the equilibrium measure, and it supplies Dependent Choice for [F5] and Countable Choice for [F4] and [F9]. The image-measure construction, Joukowski factorization, and scaling computation are choice-free.
