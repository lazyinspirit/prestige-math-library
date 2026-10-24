---
id: thm-green-function-from-equilibrium-potential
kind: theorem
title: "Green function at infinity from the equilibrium potential"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-logarithmic-potential-and-energy
  - def-logarithmic-capacity-compact-set
  - def-polar-set-and-quasi-everywhere
  - def-green-function-with-pole-at-infinity
  - def-complex-domain
  - def-plane-harmonic-function
  - def-plane-subharmonic-function
  - def-probability-measure
  - def-support-of-a-borel-measure
  - def-metric-interior-closure-boundary
  - thm-complement-of-a-compact-plane-set-has-one-unbounded-component
  - thm-equilibrium-measure-existence-and-uniqueness
  - thm-frostman-equilibrium-theorem
  - lem-logarithmic-potential-distributional-laplacian
  - lem-compact-polar-sets-and-subharmonic-minus-infinity-loci
  - thm-maximum-principle-for-plane-subharmonic-functions
  - thm-maximum-and-minimum-principles-for-plane-harmonic-functions
  - thm-c-two-characterization-of-plane-subharmonicity
  - thm-borel-probability-measures-on-polish-spaces-are-inner-regular
  - thm-euclidean-space-complete
  - lem-rat-embeds-dense
  - thm-rationals-countable
  - thm-product-of-countable
  - lem-metrics-on-rn
  - def-polish-space
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-heine-borel-rn
  - thm-extreme-value-metric
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §3"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§3, Theorem 3.2, Definitions 3.3 and 3.4 and the following paragraph, printed pp. 184-185"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §3"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§3, the equilibrium potential and Green functions of the exterior of a compact set"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $K\subseteq\mathbb C$ be compact with
$\operatorname{cap}(K)>0$, let $\Omega$ be the unbounded connected component of
$\mathbb C\setminus K$, let $\mu_K$ be the equilibrium measure of $K$, and let
$V_K=\log\frac1{\operatorname{cap}(K)}$ be the Robin constant. Define

$$g(z):=V_K-U^{\mu_K}(z),\qquad z\in\Omega .$$

Then:

1. **Existence, uniqueness and the notation $g_\Omega(\cdot,\infty)$.** $g$
   satisfies properties 1-4 of [[def-green-function-with-pole-at-infinity]],
   and every function $\tilde g:\Omega\to\mathbb R$ satisfying properties 1-4
   equals $g$. In particular the Green function with pole at infinity exists,
   is unique, and
   $$g_\Omega(z,\infty)=V_K-U^{\mu_K}(z)\qquad(z\in\Omega).$$
2. $g(z)>0$ for every $z\in\Omega$, and $g$ is harmonic on the complex domain
   $\Omega$.
3. $g(z)-\log|z|\to V_K$ as $|z|\to\infty$ with $z\in\Omega$.
4. For every $\xi\in\partial\Omega$ there is a real $r>0$ with
   $\sup\{g(z):z\in\Omega,\ |z-\xi|<r\}<+\infty$.
5. Call $\xi\in\partial\Omega$ **regular** when $U^{\mu_K}(\xi)=V_K$ and
   **irregular** otherwise, the convention of Saff, Definition 3.3. Then
   $$\lim_{\Omega\ni z\to\xi}g(z)=0\qquad\text{for every regular }\xi\in\partial\Omega,$$
   no value being imposed at irregular points; the irregular points of
   $\partial\Omega$ form a Borel capacity-polar subset of $K$, so $g$ has
   boundary limit $0$ quasi-everywhere on $\partial\Omega$ in the sense of
   [[def-polar-set-and-quasi-everywhere]] and property 4 of
   [[def-green-function-with-pole-at-infinity]].

The Axiom of Choice is spent through the equilibrium-measure theorem and
Frostman's theorem; by
[[thm-choice-implies-dependent-implies-countable-choice]] these also supply
Dependent Choice for the Evans-measure supplier and Countable Choice for the
distributional-Riesz supplier, while the potential, harmonicity and barrier
estimates themselves are choice-free.

## Facts & Assumptions

**Given:** a compact set $K\subseteq\mathbb C$ with
$\operatorname{cap}(K)>0$, its equilibrium measure $\mu_K$, the exterior domain
$\Omega$ (the unbounded connected component of $\mathbb C\setminus K$) with
boundary $\partial\Omega$, the Robin constant $V_K$, the Axiom of Choice, and
the conventions of [[def-logarithmic-potential-and-energy]],
[[def-logarithmic-capacity-compact-set]],
[[def-polar-set-and-quasi-everywhere]],
[[def-green-function-with-pole-at-infinity]] and
[[def-complex-domain]].

[F1] For a finite positive Borel measure $\mu$ of compact support,
$U^\mu(z)=\int_{\mathbb C}k(z,w)\,d\mu(w)\in(-\infty,+\infty]$ with
$k(z,w)=\log\frac1{|z-w|}$, the diagonal value being $+\infty$, and
$p_\mu=-U^\mu=\int\log|z-w|\,d\mu(w)\in[-\infty,+\infty)$
([[def-logarithmic-potential-and-energy]]).

[F2] For nonempty compact $F$ one has
$V_F=\inf_{\nu\in P(F)}I(\nu)\in(-\infty,+\infty]$ and
$\operatorname{cap}(F)=\exp(-V_F)$ when $V_F<+\infty$ and
$\operatorname{cap}(F)=0$ when $V_F=+\infty$; hence
$\operatorname{cap}(K)>0$ is equivalent to $V_K<+\infty$
([[def-logarithmic-capacity-compact-set]]).

[F3] Assume the Axiom of Choice: every nonempty compact $K$ with
$\operatorname{cap}(K)>0$ has exactly one equilibrium measure $\mu_K$, and
$I(\mu_K)=V_K=\inf_{\mu\in P(K)}I(\mu)<+\infty$
([[thm-equilibrium-measure-existence-and-uniqueness]]); the Axiom of Choice
implies Dependent Choice, which implies Countable Choice
([[thm-choice-implies-dependent-implies-countable-choice]]).

[F4] Assume the Axiom of Choice: for compact $K$ with
$\operatorname{cap}(K)>0$ the equilibrium potential satisfies
$U^{\mu_K}(z)\le V_K$ for every $z\in\mathbb C$, and $U^{\mu_K}(z)=V_K$ on $K$
outside a Borel capacity-polar set which is a countable union of compact sets
of capacity zero ([[thm-frostman-equilibrium-theorem]]).

[F5] Assume Countable Choice: for a finite positive Borel measure $\mu$ of
compact support, $p_\mu$ is locally integrable on $\mathbb C$, subharmonic on
the domain $\mathbb C$, and harmonic on $\mathbb C\setminus\operatorname{supp}\mu$
([[lem-logarithmic-potential-distributional-laplacian]]).

[F6] If $K\subseteq\mathbb C$ is compact, then $\mathbb C\setminus K$ has
exactly one unbounded connected component and every other component is bounded;
whenever $R>0$ satisfies $K\subseteq\{z:|z|\le R\}$, the exterior
$\{z:|z|>R\}$ is contained in that component
([[thm-complement-of-a-compact-plane-set-has-one-unbounded-component]]), which
is therefore a complex domain ([[def-complex-domain]]).

[F7] A set is capacity-polar when every compact subset of it has capacity
zero; a property holds quasi-everywhere on a compact conductor when it holds
outside a Borel capacity-polar subset, and a set contained in a capacity-polar
set is capacity-polar ([[def-polar-set-and-quasi-everywhere]]).

[F8] A subharmonic function on a complex domain which attains a finite maximum
at an interior point is constant on the domain
([[thm-maximum-principle-for-plane-subharmonic-functions]]); a harmonic
function on a complex domain with an interior local maximum or minimum is
constant ([[thm-maximum-and-minimum-principles-for-plane-harmonic-functions]]).

[F9] A real-valued function is harmonic when it is $C^2$ with vanishing
Laplacian ([[def-plane-harmonic-function]]); a $C^2$ function is subharmonic
exactly when its Laplacian is $\ge0$
([[thm-c-two-characterization-of-plane-subharmonicity]],
[[def-plane-subharmonic-function]]). Consequently harmonic functions are
subharmonic, real linear combinations of harmonic functions are harmonic, and
the negative of a harmonic function is harmonic.

[F10] Assume Dependent Choice, hence Countable Choice. Let $(E_m)_{m\ge1}$ be
a specified sequence of compact subsets of $\mathbb C$ with
$\operatorname{cap}(E_m)=0$ for every $m$ and $E=\bigcup_{m\ge1}E_m$. If
$E\ne\varnothing$ there is a finite positive Borel measure $\sigma$ carried by
$E$ with $U^\sigma(z)=+\infty$ for every $z\in E$
([[lem-compact-polar-sets-and-subharmonic-minus-infinity-loci]]).

[F11] A Green function of $\Omega$ with pole at infinity and Robin constant
$V_K$ is a function $g:\Omega\to\mathbb R$ that is positive and harmonic on
$\Omega$, satisfies $g(z)-\log|z|\to V_K$ as $|z|\to\infty$, is locally bounded
near every point of $\partial\Omega$, and has boundary limit $0$ outside a
Borel capacity-polar subset of $\partial\Omega$; when existence and uniqueness
hold the function is written $g_\Omega(\cdot,\infty)$, and the outer boundary
$\partial\Omega$ is a compact subset of $K$
([[def-green-function-with-pole-at-infinity]]).

[F12] A Borel probability measure on $K$ is carried by $K$, and the support of
a finite positive Borel measure is closed, carries the measure and is contained
in $K$ when the measure is carried by the compact $K$
([[def-probability-measure]], [[def-support-of-a-borel-measure]]).

[F13] A point $x$ lies in the boundary $\partial A$ exactly when every ball
about $x$ meets both $A$ and its complement, and
$\partial A=\partial(X\setminus A)$ ([[def-metric-interior-closure-boundary]]).

[F14] A subset of $\mathbb R^2$ is compact exactly when it is closed and
bounded ([[thm-heine-borel-rn]]), and a continuous real function on a nonempty
compact metric space is bounded and attains its extrema
([[thm-extreme-value-metric]]).

[F15] Assume Countable Choice. The space $\mathbb R^2$ with the Euclidean
metric $d_2$ is complete ([[thm-euclidean-space-complete]]) and separable,
since $\mathbb Q^2$ is at most countable ([[thm-rationals-countable]],
[[thm-product-of-countable]]) and dense: for $x\in\mathbb R^2$ and
$\varepsilon>0$ the density of $\mathbb Q$ in $\mathbb R$
([[lem-rat-embeds-dense]]) gives rationals $q_1,q_2$ with
$|x_j-q_j|<\varepsilon/\sqrt2$, and $d_2(x,q)\le\sqrt2\max_j|x_j-q_j|<\varepsilon$
([[lem-metrics-on-rn]]); hence $\mathbb R^2$, and therefore $\mathbb C$ under
the identification $\mathbb C\cong\mathbb R^2$ used in
[[def-logarithmic-potential-and-energy]], is Polish ([[def-polish-space]]).
Moreover, if $P$ is Polish and $\mu$ is a Borel probability measure on $P$,
then for every Borel $A\subseteq P$ and every $\varepsilon>0$ there is a
compact $K\subseteq A$ with $\mu(A\setminus K)<\varepsilon$
([[thm-borel-probability-measures-on-polish-spaces-are-inner-regular]]).

## Proof

**Proof technique:** direct.

1.1 By [F3] the equilibrium measure $\mu:=\mu_K$ is a Borel probability measure on $K$ with $I(\mu)=V_K<+\infty$ and $\mu\ne0$; by [F12] it is carried by $K$, and its support $S:=\operatorname{supp}\mu$ is a nonempty compact subset of $K$ with $\mu(\mathbb C\setminus S)=0$. By [F2], $V_K=\log\frac1{\operatorname{cap}(K)}<+\infty$. By [F6] $\Omega$ is the unique unbounded connected component of $\mathbb C\setminus K$, every other component is bounded, and $\{|z|>R_0\}\subseteq\Omega$ whenever $K\subseteq\{z:|z|\le R_0\}$; by [F11] $\Omega$ is a nonempty complex domain with $\partial\Omega\subseteq K$ compact and $\Omega\cap K=\varnothing$, so $\operatorname{dist}(z,K)>0$ for every $z\in\Omega$. [F2, F3, F6, F11, F12, given]

1.2 Let $\nu$ be a finite positive Borel measure of compact support $S_\nu\subseteq K$. By [F5], whose Countable Choice hypothesis is available by [F3], the function $p_\nu$ is harmonic on $\mathbb C\setminus S_\nu$; by [F9] the function $U^\nu=-p_\nu$ is harmonic there too. Since $\Omega\subseteq\mathbb C\setminus K\subseteq\mathbb C\setminus S_\nu$, every such $U^\nu$ is harmonic on $\Omega$; in particular $U^\mu$ is harmonic on $\Omega$. [F3, F5, F9, given]

1.3 **Far-field expansion.** Let $\nu$ be a finite positive Borel measure of compact support $S_\nu$; the case $\nu=0$ is trivial, so assume $S_\nu\ne\varnothing$ and put $\rho:=\max\{|u|:u\in S_\nu\}$. For $|z|\ge2\rho$ and $u\in S_\nu$ one has $|u/z|\le1/2$ and therefore $\bigl|\log\frac1{|1-u/z|}\bigr|=|\log|1-u/z||\le2|u/z|\le\frac{2\rho}{|z|}$; integrating against $\nu$ gives $$\Bigl|U^\nu(z)+\nu(\mathbb C)\log|z|\Bigr|=\Bigl|\int\log\frac1{|1-u/z|}\,d\nu(u)\Bigr|\le\frac{2\rho\,\nu(\mathbb C)}{|z|},$$ so in particular $U^\nu(z)=-\nu(\mathbb C)\log|z|+o(1)$ as $|z|\to\infty$. [F1, algebra]

1.4 **Finite-energy measures annihilate Borel polar sets.** Let $E\subseteq\mathbb C$ be a Borel capacity-polar set and let $\rho$ be a finite positive Borel measure of compact support with $I(\rho)<+\infty$; then $\rho(E)=0$. Indeed, suppose $\rho(E)>0$, put $m:=\rho(\mathbb C)>0$ and apply [F15] to the Borel probability measure $\rho/m$ on the Polish space $\mathbb C$, the Borel set $E$ and $\varepsilon:=\rho(E)/(2m)>0$: there is a compact $K\subseteq E$ with $(\rho/m)(E\setminus K)<\rho(E)/(2m)$, so $t:=\rho(K)>\rho(E)/2>0$. Put $\nu:=\rho|_K/t\in P(K)$ and choose a real $R>\max\{1,\operatorname{diam}(\operatorname{supp}\rho\cup K)\}$; then $k_R\ge0$ on $(\operatorname{supp}\rho\cup K)\times(\operatorname{supp}\rho\cup K)$ and $\operatorname{supp}\nu\subseteq K$, so by [F1] and $k_R\ge0$, $\int\!\!\int k_R\,d\nu\,d\nu=t^{-2}\int\!\!\int k_R\,d(\rho|_K)\,d(\rho|_K)\le t^{-2}\int\!\!\int k_R\,d\rho\,d\rho=t^{-2}\bigl(I(\rho)+m^2\log R\bigr)<+\infty$, whence $I(\nu)=\int\!\!\int k_R\,d\nu\,d\nu-\log R<+\infty$. By [F2] $V_K=\inf_{\sigma\in P(K)}I(\sigma)\le I(\nu)<+\infty$, so $\operatorname{cap}(K)=\exp(-V_K)>0$ by [F2], contradicting $\operatorname{cap}(K)=0$, which holds because $K$ is a compact subset of the capacity-polar set $E$ by [F7]. [F1, F2, F7, F15, algebra]

2.1 Applying step 1.3 to $\nu:=\mu$ and $\nu(\mathbb C)=1$ from step 1.1, together with $g=V_K-U^\mu$, gives $$g(z)-\log|z|=V_K-\bigl(U^\mu(z)+\log|z|\bigr)\longrightarrow V_K\qquad(|z|\to\infty).$$ [step 1.3, step 1.1, F1]

2.2 The function $g=V_K-U^\mu$ is harmonic on $\Omega$, because the constant $V_K$ and $U^\mu$ are harmonic there by step 1.2 and [F9]. [step 1.2, F9]

2.3 By [F4], $U^\mu\le V_K$ on all of $\mathbb C$; hence $g\ge0$ on $\Omega$, and also $U^\mu(\xi)\le V_K$ for every $\xi\in\partial\Omega$. [step 1.1, F4]

2.4 **Countable unions of Borel polar sets are polar.** Let $(E_j)_{j\ge1}$ be a sequence of Borel capacity-polar sets and let $F$ be compact with $F\subseteq\bigcup_{j\ge1}E_j$; if $\operatorname{cap}(F)>0$ then by [F2] there is a Borel probability measure $\sigma$ on $F$ with $I(\sigma)<+\infty$ (choose $\sigma$ with $I(\sigma)<V_F+1$), while step 1.4 gives $\sigma(E_j)=0$ for every $j$, so $\sigma\bigl(\bigcup_{j\ge1}E_j\bigr)=0$ by countable additivity, contradicting $1=\sigma(F)\le\sigma\bigl(\bigcup_{j\ge1}E_j\bigr)$; hence $\operatorname{cap}(F)=0$, and $\bigcup_{j\ge1}E_j$ is capacity-polar in the sense of [F7]. [step 1.4, F2, F7]

3.1 $g>0$ on $\Omega$. Indeed, if $g(z_0)=0$ for some $z_0\in\Omega$, then $z_0$ is an interior minimum point of the harmonic function $g$ on the domain $\Omega$, so $g$ is constant on $\Omega$ by [F8]; but step 2.1 gives $g(z)=\log|z|+V_K+o(1)\to+\infty$ as $|z|\to\infty$ along $\Omega$, a contradiction. [step 2.1, step 2.2, step 2.3, F8]

3.2 **Local boundedness.** Let $\xi\in\partial\Omega\subseteq K$. By [F1] and steps 1.1 and 2.3, $c:=U^\mu(\xi)$ satisfies $-\infty<c\le V_K<+\infty$; by [F5] the function $U^\mu=-p_\mu$ is lower semicontinuous, so $\{U^\mu>c-1\}$ is an open set containing $\xi$ and there is a real $r>0$ with $U^\mu(z)>c-1$ for all $z\in B(\xi,r)$. For $z\in\Omega\cap B(\xi,r)$ we then have $g(z)<V_K-c+1<+\infty$ and $g(z)\ge0$ by step 2.3, so the supremum in property 3 of [F11] is finite. [step 1.1, step 2.3, F1, F5, F11]

3.3 **Regular points and the quasi-everywhere boundary limit.** Let $\xi\in\partial\Omega$ with $U^\mu(\xi)=V_K$. By [F5] $U^\mu$ is lower semicontinuous, so $\liminf_{\Omega\ni z\to\xi}U^\mu(z)\ge V_K$, while step 2.3 gives $\limsup_{\Omega\ni z\to\xi}U^\mu(z)\le V_K$; hence $U^\mu(z)\to V_K$ and $g(z)\to0$ as $\Omega\ni z\to\xi$. By [F4] there is a Borel capacity-polar set $E\subseteq K$ which is a countable union of compact sets of capacity zero with $U^\mu=V_K$ on $K\setminus E$; since $\partial\Omega\subseteq K$ by [F11], every point of $\partial\Omega\setminus E$ is regular, so $g$ has boundary limit $0$ outside the set $\partial\Omega\cap E$, which is Borel and, being a subset of the capacity-polar set $E$, capacity-polar by [F7]. [step 2.3, F4, F5, F7, F11]

4.1 **The difference of two candidates.** Let $\tilde g:\Omega\to\mathbb R$ satisfy properties 1-4 of [F11] and put $w:=\tilde g-g$. Then: (i) $w$ is harmonic on $\Omega$, by property 1 for $\tilde g$, step 2.2 and [F9]; (ii) $w(z)\to0$ as $|z|\to\infty$ with $z\in\Omega$, because property 2 for $\tilde g$ and step 2.1 give $\tilde g(z)-\log|z|\to V_K$ and $g(z)-\log|z|\to V_K$; (iii) for every $\xi\in\partial\Omega$ there are $r>0$ and a real $M$ with $|w(z)|\le M$ for all $z\in\Omega\cap B(\xi,r)$: by property 3 for $\tilde g$ and step 3.2 choose $r$ with $\tilde g\le M_1$ and $g\le M_2$ on $\Omega\cap B(\xi,r)$; then $w=\tilde g-g\le\tilde g\le M_1$ using $g\ge0$ from step 2.3, and $-w=g-\tilde g\le g\le M_2$ using $\tilde g>0$ from property 1, so $|w|\le\max\{M_1,M_2\}$; (iv) writing $E=\bigcup_{j\ge1}E_j$ as in step 3.3 and $E'$ for the exceptional set of property 4 for $\tilde g$, the set $E_0:=(\partial\Omega\cap E)\cup E'$ satisfies $E_0=\bigcup_{j\ge1}(\partial\Omega\cap E_j)\cup E'$, a countable union of Borel capacity-polar sets, because each $\partial\Omega\cap E_j$ is a compact subset of the capacity-polar set $E_j$ (a compact set with $\operatorname{cap}(E_j)=0$) and $E'$ is Borel capacity-polar; hence $E_0$ is capacity-polar by step 2.4, and $w(z)\to0$ as $\Omega\ni z\to\xi$ for every $\xi\in\partial\Omega\setminus E_0$, because then $\xi\notin E'$ gives $\tilde g(z)\to0$ by property 4 and $\xi\notin\partial\Omega\cap E$ gives $g(z)\to0$ by step 3.3. [step 2.4, step 3.2, step 3.3, F4, F7, F9, F11]

5.1 **The bad set.** For $\xi\in\partial\Omega$ put $L(\xi):=\limsup_{\Omega\ni z\to\xi}|w(z)|\in[0,+\infty)$ and put $P:=\{\xi\in\partial\Omega:L(\xi)>0\}$, so that $P=\bigcup_{m\ge1}E_m$ with $E_m:=\{\xi\in\partial\Omega:L(\xi)\ge1/m\}$. The function $L$ is upper semicontinuous on $\partial\Omega$: if $L(\xi_0)<c$ pick $c'$ with $L(\xi_0)<c'<c$ and $r>0$ with $|w(z)|<c'$ for all $z\in\Omega$ with $0<|z-\xi_0|<r$; then for $\xi\in\partial\Omega$ with $|\xi-\xi_0|<r/2$ and $z\in\Omega$ with $0<|z-\xi|<r/2$ one has $|z-\xi_0|<r$, so $L(\xi)\le c'<c$ and $\{L<c\}$ is relatively open in $\partial\Omega$. Hence each $E_m$, the intersection of the closed set $\{L\ge1/m\}$ with the compact set $\partial\Omega$, is compact by [F14]. Finally $E_m\subseteq E_0$ for the capacity-polar set $E_0$ of step 4.1: if $\xi\in\partial\Omega\setminus E_0$ then $w\to0$ at $\xi$ by step 4.1(iv), so $L(\xi)=0$ and $\xi\notin E_m$; hence $\operatorname{cap}(E_m)=0$ for every $m$ by [F7]. [step 4.1, F7, F14]

6.1 Since $(E_m)_{m\ge1}$ is a specified sequence of compact sets with $\operatorname{cap}(E_m)=0$ and union $P$, [F10] applies with its Dependent Choice hypothesis supplied by [F3]: if $P\ne\varnothing$ there is a finite positive Borel measure $\sigma$ carried by $P$ with $U^\sigma(\xi)=+\infty$ for every $\xi\in P$; if $P=\varnothing$ take $\sigma:=0$. Put $m_\sigma:=\sigma(\mathbb C)\ge0$, so that $m_\sigma>0$ exactly when $P\ne\varnothing$. [step 5.1, F3, F10]

7.1 **The barrier.** Put $\rho_K:=\max\{|\zeta|:\zeta\in K\}$ and choose $R_0>1+\rho_K$; then $K\subseteq\{z:|z|\le R_0\}$ and $S_\sigma:=\operatorname{supp}\sigma\subseteq\overline P\subseteq\partial\Omega\subseteq K$ is compact with $|\zeta|\le\rho_K$ for $\zeta\in S_\sigma$. The function $V:=U^\sigma+m_\sigma g$ is bounded below on $\Omega$ and finite at every point of $\Omega$ (where $z\notin S_\sigma$): for $z\in\Omega$ with $|z|\le R_0$ and $\zeta\in S_\sigma$ one has $|z-\zeta|\le R_0+\rho_K$, so by [F1] $U^\sigma(z)\ge-m_\sigma\log(R_0+\rho_K)$, while $m_\sigma g\ge0$ by step 2.3; and for $|z|\ge R_0$ step 1.3 applied to $\sigma$ (trivially when $\sigma=0$), together with $g(z)-\log|z|\to V_K$ from step 2.1 multiplied by $m_\sigma$, gives $V(z)=m_\sigma V_K+o(1)\ge m_\sigma V_K-1$ for all sufficiently large $|z|$. Put $c:=1-\inf_\Omega V\in\mathbb R$ and $$Q:=U^\sigma+m_\sigma g+c=V+c\ \ge1\quad\text{on }\Omega .$$ Then $Q$ is harmonic on $\Omega$ by steps 1.2 and 2.2 and [F9]; $Q(z)\to m_\sigma V_K+c\ge1$ as $|z|\to\infty$ by steps 1.3 and 2.1; and for every $\xi\in P$ one has $\liminf_{\Omega\ni z\to\xi}Q(z)=+\infty$, because $U^\sigma$ is lower semicontinuous by [F5] with $U^\sigma(\xi)=+\infty$ and $m_\sigma g+c\ge c$ is bounded below. [step 1.2, step 1.3, step 2.1, step 2.2, step 2.3, step 6.1, F1, F5, F9]

8.1 **Nonpositive boundary behaviour.** Let $A>0$ and put $w_A:=w-AQ$, harmonic on $\Omega$ by steps 4.1 and 7.1 and [F9]. Then: (a) for $\xi\in P$, $\limsup_{\Omega\ni z\to\xi}w_A(z)\le\limsup w+\limsup(-AQ)=-\infty$, because $\limsup(-AQ)=-A\liminf Q=-\infty$ by step 7.1 and $\limsup w$ is finite by step 4.1(iii); (b) for $\xi\in\partial\Omega\setminus P$, $\limsup_{\Omega\ni z\to\xi}w_A(z)\le\limsup w+\limsup(-AQ)\le0-A\cdot1<0$, because $L(\xi)=0$ forces $w\to0$ at $\xi$ and $Q\ge1$ by step 7.1; (c) as $|z|\to\infty$ with $z\in\Omega$, $\limsup w_A\le0-A(m_\sigma V_K+c)<0$, because $w\to0$ by step 4.1(ii) and $Q\to m_\sigma V_K+c\ge1$ by step 7.1. [step 4.1, step 7.1, F9, algebra]

9.1 **Maximum principle.** Fix $A>0$ and choose $R>R_0$ large enough that $w_A(z)<0$ whenever $z\in\Omega$ and $|z|\ge R$, possible by step 8.1(c) and the fact that $\Omega$ is unbounded so $\Omega\cap\{z:|z|>R\}\ne\varnothing$. By step 8.1 and compactness of $\partial\Omega$, finitely many boundary neighborhoods cover $\partial\Omega$ on which $w_A\le1$; the set $(\overline\Omega\cap\overline B(0,R))$ outside their union is compact and lies in $\Omega$, so continuity bounds $w_A$ there. Together with the negative tail this proves $s:=\sup_\Omega w_A<+\infty$. Since $\Omega$ is nonempty and $w_A$ is real-valued, $s\in\mathbb R$. Assume for contradiction that $s>0$. For each $\zeta\in\partial\Omega$ step 8.1 gives $\limsup_{\Omega\ni z\to\zeta}w_A(z)\le0<s/2$, so there is $r_\zeta>0$ with $w_A\le s/2$ on $\Omega\cap B(\zeta,r_\zeta)$; since $\partial\Omega$ is compact by [F11], finitely many of these balls cover $\partial\Omega$, and their union $W$ is an open neighbourhood of $\partial\Omega$ with $w_A\le s/2$ on $\Omega\cap W$. The set $S:=(\Omega\cap\{z:|z|\le R\})\setminus W$ equals $(\overline\Omega\cap\{z:|z|\le R\})\setminus W$, is closed and bounded, hence compact by [F14], and satisfies $S\subseteq\Omega$ because $W\supseteq\partial\Omega$ and every point of $\overline\Omega\setminus\partial\Omega$ lies in $\Omega$ by [F13]. Every point of $\Omega\setminus S$ lies in $\Omega\cap W$ or satisfies $|z|\ge R$, and at such points $w_A\le s/2<s$; hence $\sup_S w_A=s$, and the continuous function $w_A$ attains the value $s$ at some $x^*\in S\subseteq\Omega$ by [F14]. Since $w_A$ is harmonic, hence subharmonic, on the domain $\Omega$ by [F9], [F8] forces $w_A$ to be constant on $\Omega$, contradicting $w_A(z)<0$ for $|z|\ge R$; therefore $\sup_\Omega w_A\le0$, that is $w_A\le0$ on $\Omega$. [step 8.1, F8, F9, F11, F13, F14]

10.1 **Uniqueness.** Step 9.1 gives $w\le AQ$ on $\Omega$ for every $A>0$, hence $w\le0$ on $\Omega$; the same argument with the roles of $g$ and $\tilde g$ interchanged gives $-w\le0$ on $\Omega$, because $g$ satisfies properties 1-4 of [F11] by steps 2.1, 2.2, 3.1, 3.2 and 3.3 (with the Borel capacity-polar exceptional set $\partial\Omega\cap E$ of step 3.3), while $\tilde g$ satisfies them by hypothesis, so steps 4.1, 5.1, 6.1, 7.1, 8.1 and 9.1 apply verbatim to $w'=-w$ with the same set $E_0$ and the same barrier $Q$. Hence $w=0$ and $\tilde g=g$ on $\Omega$: a Green function with pole at infinity is unique, and it equals $V_K-U^{\mu_K}$. [step 2.1, step 2.2, step 3.1, step 3.2, step 3.3, step 4.1, step 5.1, step 6.1, step 7.1, step 8.1, step 9.1]

11.1 **Assembly.** Step 3.1 gives positivity and step 2.2 harmonicity, so $g$ has property 1 of [F11]; step 2.1 gives property 2; step 3.2 gives property 3; step 3.3 gives property 4, with exceptional set $\partial\Omega\cap E$ that is Borel (intersection of the compact set $\partial\Omega$ with the Borel set $E$ of [F4]) and capacity-polar as a subset of $E$ by [F7]. Step 10.1 shows that every $\tilde g$ with properties 1-4 equals $g$, so the notation $g_\Omega(\cdot,\infty)$ of [F11] is licensed with $g_\Omega(z,\infty)=V_K-U^{\mu_K}(z)$ on $\Omega$. Assertions 1-5 of the Statement are exactly these conclusions. [step 2.1, step 2.2, step 3.1, step 3.2, step 3.3, step 10.1, F4, F7, F11] ∎

## Remarks

**The meaning of "regular".** The word is used in the potential-theoretic
sense of Saff, Definition 3.3: $\xi\in\partial\Omega$ is regular for $\Omega$
exactly when $U^{\mu_K}(\xi)=V_K$. This is not the barrier/Perron notion of
regularity of [[def-barrier-and-regular-boundary-point]], which is stated for
bounded domains; the classical identification of the two notions for exterior
domains is not used or claimed here. What is proved is the implication from
$U^{\mu_K}(\xi)=V_K$ to the boundary limit $0$, together with the statement
that the remaining points of $\partial\Omega$ are capacity-polar. No value is
asserted at the irregular points, and in particular no claim is made that the
Dirichlet problem for $\Omega$ is solvable there.

**Where the boundary regularity of $g$ comes from.** The two ingredients are
the global inequality $U^{\mu_K}\le V_K$ of Frostman's theorem, which bounds
the potential from above everywhere, and lower semicontinuity, which bounds it
from below at every point. Their combination is what makes $g$ continuous at
every point where the upper and lower bounds meet, and it is also what makes
the potential of the Evans measure a barrier at the exceptional set in the
uniqueness proof.

**Why the barrier is needed for uniqueness.** Local boundedness of a candidate
near $\partial\Omega$ alone does not let the maximum principle act directly on
$\Omega$: the difference of two candidates is in general only bounded, not
continuous, at an irregular boundary point, where both candidates may fail to
have the limit $0$. The Evans measure of step 6.1 produces a harmonic function
$Q\ge1$ whose limit is $+\infty$ at every boundary point where the
difference fails to tend to $0$. Its limit may also be $+\infty$ at other
boundary points: there the difference tends to $0$ and $Q\ge1$ suffices for
step 8.1(b). The logarithmic growth of $U^\sigma$ is cancelled by
$m_\sigma g$, so $Q$ has a finite limit at infinity; the maximum principle can then be applied to
$w-AQ$ for every $A>0$. The subtle point in step 4.1(iv) is that the union of
the two exceptional sets need not be presented as a union of compact sets: it
is shown to be capacity-polar through the annihilation lemma of step 1.4 and
the countable-union closure of step 2.4, which is what licenses feeding the
compact cluster sets $E_m$ of step 5.1 to the Evans construction.

**Choice.** The Axiom of Choice enters through the equilibrium measure and
Frostman's theorem; it yields Dependent Choice for the Evans-measure supplier
of [F10] and Countable Choice for the distributional-Riesz supplier [F5] and
the inner-regularity fact [F15]. The harmonicity, far-field and barrier
computations are choice-free.
