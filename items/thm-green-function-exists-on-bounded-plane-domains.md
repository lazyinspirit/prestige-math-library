---
id: thm-green-function-exists-on-bounded-plane-domains
kind: theorem
title: "Green functions exist on all bounded plane domains"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - cor-nonnegative-harmonic-function-with-an-interior-zero-vanishes
  - def-barrier-and-regular-boundary-point
  - def-complex-domain
  - def-countable-choice
  - def-distributional-harmonicity-and-poisson-equation-in-rn
  - def-green-function-plane-domain
  - def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
  - def-perron-envelope-for-the-plane-dirichlet-problem
  - def-perron-family-for-the-plane-dirichlet-problem
  - def-plane-harmonic-function
  - def-plane-subharmonic-function
  - lem-log-modulus-is-harmonic-off-its-centre
  - lem-perron-family-is-nonempty-and-bounded
  - lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity
  - thm-c-two-characterization-of-plane-subharmonicity
  - thm-conformal-invariance-of-plane-harmonicity
  - thm-distributional-differentiation-is-continuous-and-commutes
  - thm-heine-borel-rn
  - thm-locally-integrable-functions-embed-in-distributions
  - thm-minus-laplacian-of-the-fundamental-solution-is-dirac
  - thm-perron-envelope-is-harmonic
sources:
  references:
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I, Appendix 1, Sections 10.1-10.9"
      url: https://www.math.stonybrook.edu/~mlyubich/book.pdf
      locator: "Section 10.3, printed pp. 164-166: existence of the logarithmic Green correction on a bounded domain"
    - title: "Axler, Bourdon and Ramey, Harmonic Function Theory, 2nd ed., Chapter 11"
      url: https://www.axler.net/HFT.pdf
      locator: "Chapter 11, printed pp. 223-237: Perron solutions and the harmonic correction of a logarithmic pole"
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, Section 3"
      url: https://arxiv.org/pdf/1010.3760
      locator: "Section 3, PDF pp. 19-25: Green functions with a logarithmic pole for bounded domains"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb C$ be a bounded complex
domain and let $a\in\Omega$. Put $F_a(z):=-\log|z-a|$, let
$b_a:=F_a|_{\partial\Omega}$ be the boundary datum it induces, and let
$h_a:=H_{b_a}$ be the regularized Perron envelope of
[[def-perron-envelope-for-the-plane-dirichlet-problem]] with datum $b_a$. Then
$$g_\Omega(z,a):=F_a(z)-h_a(z)\qquad(z\in\Omega\setminus\{a\})$$
is the canonical positive Green kernel of [[def-green-function-plane-domain]]:
it is harmonic on $\Omega\setminus\{a\}$, the function
$g_\Omega(\cdot,a)+\log|\cdot-a|=-h_a$ extends harmonically across $a$, it is
strictly positive off $a$, it is bounded on $\{z\in\Omega:|z-a|\ge\delta\}$
for every $\delta>0$, and
$$\lim_{\substack{z\to\zeta\\ z\in\Omega}}g_\Omega(z,a)=0$$
at every regular boundary point $\zeta\in\partial\Omega$
([[def-barrier-and-regular-boundary-point]]); no boundary value is prescribed
at an irregular boundary point. Moreover $-\Delta_zT_{g_\Omega(\cdot,a)}=2\pi\delta_a$
as distributions on $\Omega$. Countable Choice is used for the cited
distributional Poisson identity; the cited Perron envelope theorem has a
choice-free directed-supremum proof. The boundary values of $g_\Omega$ at
regular points are the only boundary information.

## Facts & Assumptions

**Given:** A bounded complex domain $\Omega\subseteq\mathbb C$ ([[def-complex-domain]]), a point $a\in\Omega$, and Countable Choice ([[def-countable-choice]]). Perron families and envelopes are those of [[def-perron-family-for-the-plane-dirichlet-problem]] and [[def-perron-envelope-for-the-plane-dirichlet-problem]], the Perron datum is $b_a=F_a|_{\partial\Omega}$ with $F_a(z)=-\log|z-a|$, harmonicity and subharmonicity are those of [[def-plane-harmonic-function]] and [[def-plane-subharmonic-function]], distributions are those of [[def-distributional-harmonicity-and-poisson-equation-in-rn]], and the kernel candidate for $-\Delta$ is $\Phi$ from [[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]].

[F1] For a proper plane domain $D$ and $b\in D$, the canonical Green function $g_D(\cdot,b)$, when it exists, is the pointwise least nonnegative function that is harmonic on $D\setminus\{b\}$ and satisfies: $g_D(\cdot,b)+\log|\cdot-b|$ extends harmonically across $b$ ([[def-green-function-plane-domain]]).

[F2] For a continuous datum $\varphi$ on the boundary of a bounded complex domain, the Perron family $\mathcal P(\varphi,\Omega)$ is nonempty, every $v\in\mathcal P(\varphi,\Omega)$ satisfies $v\le M:=\max_{\partial\Omega}\varphi$, the constant $m:=\min_{\partial\Omega}\varphi$ lies in the family, and $m\le U_\varphi\le M$ ([[lem-perron-family-is-nonempty-and-bounded]]).

[F3] The regularized Perron envelope $H_\varphi$ is harmonic on $\Omega$ ([[thm-perron-envelope-is-harmonic]]), and by definition $H_\varphi(z)=\lim_{\rho\downarrow0}\sup\{U_\varphi(w):w\in\Omega,\ |w-z|<\rho\}$, so $U_\varphi\le H_\varphi$ ([[def-perron-envelope-for-the-plane-dirichlet-problem]]).

[F4] A harmonic function is $C^2$ with $\Delta u=0$, a $C^2$ function with $\Delta u\ge0$ is subharmonic, and a sum of a subharmonic function and a harmonic function is subharmonic ([[def-plane-harmonic-function]], [[thm-c-two-characterization-of-plane-subharmonicity]], [[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]], [[def-plane-subharmonic-function]]).

[F5] The function $\log|\cdot|$ is harmonic on $\mathbb C\setminus\{0\}$ ([[lem-log-modulus-is-harmonic-off-its-centre]]), and composition with translations and other holomorphic maps preserves harmonicity ([[thm-conformal-invariance-of-plane-harmonicity]]).

[F6] A nonnegative harmonic function on a domain in $\mathbb R^n$, $n\ge2$, is either identically zero or strictly positive everywhere ([[cor-nonnegative-harmonic-function-with-an-interior-zero-vanishes]]).

[F7] Assume Countable Choice. $\Phi_2(x)=-\frac1{2\pi}\log|x|$ for $x\ne0$ ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]); the associated regular distribution satisfies $-\Delta T_{\Phi(\cdot-y)}=\delta_y$ in $\mathcal D'(\mathbb R^n)$ for every $y$ ([[thm-minus-laplacian-of-the-fundamental-solution-is-dirac]]); the map $f\mapsto T_f$ from $L^1_{\mathrm{loc}}$ modulo almost-everywhere equality to distributions is linear ([[thm-locally-integrable-functions-embed-in-distributions]]); and distributional differentiation extends classical differentiation of $C^k$ functions and is linear ([[thm-distributional-differentiation-is-continuous-and-commutes]]).

[F8] A regular boundary point $\zeta$ of a bounded complex domain is one at which the regularized Perron envelope of every continuous datum has limit equal to the datum at $\zeta$ ([[def-barrier-and-regular-boundary-point]]).

[F9] $\partial\Omega$ is compact because $\Omega$ is bounded ([[thm-heine-borel-rn]]).

## Proof

**Proof technique:** direct.

1.1 Since $a$ is an interior point of the bounded domain $\Omega$, the distance $\delta_0:=d(a,\partial\Omega)$ is positive, and $|z-a|$ is bounded above on $\Omega$ by the diameter of $\Omega$; by [F9] the continuous function $b_a$ attains finite extrema $m:=\min_{\partial\Omega}b_a$ and $M:=\max_{\partial\Omega}b_a$ on $\partial\Omega$. Also $b_a$ is continuous: $z\mapsto|z-a|$ is continuous and takes values bounded away from $0$ on $\partial\Omega$, and $t\mapsto-\log t$ is continuous and real on positive $t$. [F5, F9, given]

1.2 Every Perron lower function is dominated by $F_a$: let $v\in\mathcal P(b_a,\Omega)$ and put $w:=v-F_a$ on the bounded complex domain $\Omega\setminus\{a\}$. Then $w$ is subharmonic by [F4], since $v$ is subharmonic and $F_a=-\log|\cdot-a|$ is harmonic on $\Omega\setminus\{a\}$ by [F5]. At every boundary point of $\Omega\setminus\{a\}$ the boundary limsup of $w$ is at most $0$: at $\eta\in\partial\Omega$ the function $F_a$ is continuous with value $b_a(\eta)$, so $\limsup_{z\to\eta}w\le\limsup_{z\to\eta}v-F_a(\eta)\le b_a(\eta)-b_a(\eta)=0$; at the puncture $z=a$ one has $v\le M$ on $\Omega$ by [F2] while $F_a(z)\to+\infty$, so $\limsup_{z\to a}w\le M-\infty<0$. Since $\Omega\setminus\{a\}$ is a bounded complex domain and the datum $\psi\equiv0$ is continuous on its boundary, $w\in\mathcal P(0,\Omega\setminus\{a\})$, and [F2] applied to that domain gives $w\le0$ on $\Omega\setminus\{a\}$. [F2, F4, F5, given]

1.3 Leastness among all candidates: let $k$ be any nonnegative logarithmic-pole candidate at $a$ on $\Omega$. Near $a$ the function $k+\log|\cdot-a|$ agrees with a harmonic function $\phi$ on some disc $B(a,r)\subseteq\Omega$ by [F1], so on $B(a,r)\setminus\{a\}$ one has $F_a-k=(F_a+\log|\cdot-a|)-(k+\log|\cdot-a|)=-\bigl(k+\log|\cdot-a|\bigr)=-\phi$, since $F_a+\log|\cdot-a|=0$; gluing the harmonic functions $F_a-k$ on $\Omega\setminus\{a\}$ and $-\phi$ on $B(a,r)$ along their agreement on the connected set $B(a,r)\setminus\{a\}$ produces a harmonic extension $\widetilde V$ of $F_a-k$ to all of $\Omega$. [F1, F4, given, algebra]

1.4 Boundary behaviour: at a regular boundary point $\zeta\in\partial\Omega$ one has $\lim_{z\to\zeta}h_a(z)=b_a(\zeta)$ by [F8], while $F_a$ is continuous at $\zeta$ with $F_a(\zeta)=b_a(\zeta)$; hence $\lim_{z\to\zeta}g_\Omega(z,a)=b_a(\zeta)-b_a(\zeta)=0$. At an irregular boundary point no limit is asserted, and none was used: the construction of $g_\Omega$ involved only $F_a$ and the Perron envelope of $b_a$. [F8, given]

2.1 Let $h_a:=H_{b_a}$. By [F3] the function $h_a$ is harmonic on $\Omega$, and since $m\le U_{b_a}\le M$ while $H_{b_a}$ is the limit of suprema of values of $U_{b_a}$ over shrinking discs, $m\le h_a\le M$ on $\Omega$; so $h_a$ is bounded. [F2, F3, step 1.1]

2.2 Consequently $U_{b_a}(z)=\sup\{v(z):v\in\mathcal P(b_a,\Omega)\}\le F_a(z)$ for every $z\in\Omega\setminus\{a\}$ by [F2] and step 1.2, and then, since $F_a$ is continuous at every $z\ne a$, [F3] gives $$h_a(z)=\lim_{\rho\downarrow0}\sup\{U_{b_a}(w):|w-z|<\rho\}\le\lim_{\rho\downarrow0}\sup\{F_a(w):|w-z|<\rho\}=F_a(z).$$ Hence $g_\Omega(z,a):=F_a(z)-h_a(z)\ge0$ for $z\in\Omega\setminus\{a\}$. [F2, F3, step 1.2]

2.3 The extension $\widetilde V$ of step 1.3 belongs to $\mathcal P(b_a,\Omega)$: it is harmonic, hence subharmonic, on $\Omega$ by [F4], and at each $\eta\in\partial\Omega$ its boundary limsup is $\limsup(F_a-k)\le b_a(\eta)-\liminf k\le b_a(\eta)$, because $k\ge0$. Therefore $U_{b_a}\ge\widetilde V$ on $\Omega$ by [F2] and [F3], so $h_a\ge U_{b_a}\ge\widetilde V$; restricting to $\Omega\setminus\{a\}$, where $\widetilde V=F_a-k$, gives $F_a-h_a\le k$, that is $g_\Omega(z,a)\le k(z)$. [F1, F2, F3, F4, step 1.3]

3.1 The function $g_\Omega(\cdot,a)$ is harmonic on $\Omega\setminus\{a\}$, being the difference of the harmonic functions $F_a$ and $h_a$ there by [F4] and steps 2.1, 2.2. Moreover $$g_\Omega(z,a)+\log|z-a|=F_a(z)+\log|z-a|-h_a(z)=-h_a(z)\qquad(z\in\Omega\setminus\{a\}),$$ and the right-hand side is harmonic on all of $\Omega$ by step 2.1; so $g_\Omega(\cdot,a)+\log|\cdot-a|$ extends harmonically across $a$ and $g_\Omega(\cdot,a)$ is a nonnegative logarithmic-pole candidate at $a$ in the sense of [F1]. [F1, F4, step 2.1, step 2.2]

3.2 Boundedness away from the pole: fix $\delta>0$. On the set $\{z\in\Omega:|z-a|\ge\delta\}$ the function $F_a$ satisfies $|F_a(z)|\le\max\{|\log\delta|,|\log R|\}$ where $R$ is the diameter of $\Omega$, and $|h_a|\le\max\{|m|,|M|\}$ by step 2.1; hence $|g_\Omega(z,a)|\le|F_a(z)|+|h_a(z)|$ is bounded there. [step 2.1, step 2.2, given, algebra]

4.1 The candidate is strictly positive off the pole: if $g_\Omega(w,a)=0$ for some $w\ne a$, then the nonnegative harmonic function $g_\Omega(\cdot,a)$ on the complex domain $\Omega\setminus\{a\}$ would be identically zero by [F6]; but $g_\Omega(z,a)\ge F_a(z)-M\to+\infty$ as $z\to a$ by steps 2.1 and 2.2, so $g_\Omega(\cdot,a)$ is unbounded and not identically zero. Hence $g_\Omega(z,a)>0$ for every $z\in\Omega\setminus\{a\}$. [F6, step 2.1, step 2.2, step 3.1]

4.2 Distributional normalization: on $\Omega\setminus\{a\}$ one has $F_a=2\pi\Phi_2(\cdot-a)$ by the two-dimensional branch of [F7], and $h_a\in C^2(\Omega)$ with $\Delta h_a=0$; extend $g_\Omega(\cdot,a)$ arbitrarily at the single point $a$. By the linearity of the embedding $f\mapsto T_f$ in [F7], $T_{g_\Omega(\cdot,a)}=T_{F_a}-T_{h_a}=2\pi T_{\Phi_2(\cdot-a)}-T_{h_a}$, and by the linearity of distributional differentiation and its agreement with classical differentiation on $C^2$ functions, $$-\Delta T_{g_\Omega(\cdot,a)}=-2\pi\Delta T_{\Phi_2(\cdot-a)}+\Delta T_{h_a}=2\pi\delta_a-T_{\Delta h_a}=2\pi\delta_a,$$ because $-\Delta T_{\Phi_2(\cdot-a)}=\delta_a$ by [F7] and $\Delta T_{h_a}=T_{\Delta h_a}=T_0=0$ by [F7] and [F4]. This is the sense in which $-\Delta_zg_\Omega(z,a)=2\pi\delta_a$ on $\Omega$. [F4, F7, step 2.1, step 3.1]

5.1 Since $k$ was an arbitrary nonnegative logarithmic-pole candidate, steps 3.1, 4.1 and 2.3 show that $g_\Omega(\cdot,a)$ is the pointwise least such candidate and is strictly positive; by [F1] it is the canonical Green kernel $g_\Omega(\cdot,a)$ of $\Omega$ at $a$. [F1, step 3.1, step 4.1, step 2.3]

6.1 The stated Countable Choice is used exactly in the cited distributional identity and classical-differentiation comparison of [F7]. The cited Perron envelope theorem [F3] now uses a choice-free directed-supremum argument, and the construction of $b_a$, the comparison of Perron lower functions and the boundary limits at regular points require no additional choice principle. [F3, F7, given] ∎
