---
id: thm-compact-picture-of-the-sl2-principal-series
kind: theorem
title: The compact picture of the SL2(R) principal series
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 2
deps:
  - def-iwasawa-and-minimal-parabolic-data-for-sl2-r
  - thm-iwasawa-decomposition-for-sl2-r
  - def-normalized-principal-series-i-epsilon-nu
  - def-covariant-function-model-of-unitary-induction
  - def-rho-function-for-a-closed-subgroup
  - thm-the-modular-function-is-a-continuous-homomorphism
  - lem-closed-subgroup-quotient-averaging-and-compact-lifts
  - thm-compactness-under-continuous-maps
  - thm-rmk-positive-functional-is-integration-against-its-representing-measure
  - def-left-haar-integral-and-left-haar-measure
  - def-modular-function-of-a-locally-compact-group
  - thm-weil-quotient-integration-formula-with-rho-function
  - thm-unitary-induction-from-a-closed-subgroup
  - lem-radon-nikodym-cocycle-of-a-homogeneous-measure
  - def-fourier-coefficients-and-trigonometric-polynomials
  - cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions
  - lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori
  - def-countable-choice
  - def-axiom-of-choice
  - thm-lebesgue-measure-is-a-radon-measure-on-rn
  - cor-normalized-haar-measure-on-a-compact-lie-group
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Lemma 7.4.4(2), proof, and Lemma 7.4.7, printed pp. 294–296"
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, (2.2)–(2.4) and Exercise 2.3(ii), printed pp. 7–9"
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757 lecture notes, Fall 2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "§9.2, printed p. 50, the right-P-covariant V-plus/minus(s) models and their S1 compact realization; s=-nu under inversion"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$\varepsilon\in\{0,1\}$, $\nu\in\mathbb C$, and let
$I_{\varepsilon,\nu}$ be as in
[[def-normalized-principal-series-i-epsilon-nu]]. Write
$$C^\infty_\varepsilon(K)=\{f\in C^\infty(K):f(k_{\theta+\pi})=(-1)^\varepsilon f(k_\theta)\},$$
and define $L^2_\varepsilon(K)$ by the same parity condition in $L^2(K,dk)$.

**(1) Smooth compact picture.** Restriction $\varphi\mapsto\varphi|_K$ is a
linear isomorphism from the smooth covariant functions of $I_{\varepsilon,\nu}$
onto $C^\infty_\varepsilon(K)$. For any factorization $g=pk$ with
$p=m_pa_tn_x\in P$ and $k\in K$, its inverse is
$$\varphi(g)=|\alpha(p)|^{1+\nu}\sigma_\varepsilon(m_p)f(k).$$
The parity condition makes this independent of the $M=P\cap K$ ambiguity.
The unique positive-diagonal factorization $g=a_tn_xk$ gives the canonical
formula $\varphi(g)=e^{(1+\nu)t/2}f(k)$. This isomorphism intertwines right
translation with the Iwasawa-cocycle action
$$(g_0\cdot f)(k)=|\alpha(p(k,g_0))|^{1+\nu}\sigma_\varepsilon(m_{p(k,g_0)})f(\kappa(k,g_0)),$$
where $kg_0=p(k,g_0)\kappa(k,g_0)$ is the unique $AN\times K$
factorization; in this canonical factorization $p(k,g_0)\in AN$ and
$m_{p(k,g_0)}=I$.

**(2) Unitary case.** If $\nu\in i\mathbb R$, the inducing character
$\sigma_\varepsilon e^\nu$ is unitary. Restriction carries the normalized
induced inner product to
$$\langle f,h\rangle=\int_K f(k)\overline{h(k)}\,dk$$
on $L^2_\varepsilon(K)$. The resulting representation is strongly continuous
and unitary, and is equivalent to the right-covariant model of
$$\operatorname{Ind}_P^G(\sigma_\varepsilon\otimes e^\nu)$$
in [[thm-unitary-induction-from-a-closed-subgroup]]. Under inversion and the
rho half-density, the parameter remains $\nu$ in that unitary model.

## Facts & Assumptions

**Given:** AC, $\varepsilon\in\{0,1\}$, $\nu\in\mathbb C$, and the normalized
principal series from part (1).

[F1] The subgroups, characters, modular conventions, normalized Haar measure
$dk$, and coordinates on $K,A,N$ are fixed by
[[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]].

[F2] Multiplication gives unique smooth $KAN$ and $NAK$ coordinates; the Haar
density in $KAN$ coordinates is $e^t\,dk\,dt\,dx$, and $G$ is unimodular
([[thm-iwasawa-decomposition-for-sl2-r]]).

[F3] The smooth model has left $P$-covariance by
$\chi_{\varepsilon,\nu}=\delta_P^{1/2}\sigma_\varepsilon e^\nu$ and
right-translation action; $\sigma_\varepsilon e^\nu$ is unitary for
$\nu\in i\mathbb R$ ([[def-normalized-principal-series-i-epsilon-nu]]).

[F4] The unitary induction model uses continuous right-$P$-covariant functions,
the rho quotient norm, and its Hilbert completion
([[def-covariant-function-model-of-unitary-induction]]).

[F5] A rho-function satisfies
$\rho(xp)=\Delta_P(p)\Delta_G(p)^{-1}\rho(x)$
([[def-rho-function-for-a-closed-subgroup]]).

[F6] The group modular functions are continuous homomorphisms; their convention
is fixed by [[def-modular-function-of-a-locally-compact-group]] and
[[thm-the-modular-function-is-a-continuous-homomorphism]].

[F7] For closed $P$, $G/P$ is locally compact Hausdorff, the quotient map is
continuous, and subgroup averaging sends $C_c(G)$ to $C_c(G/P)$
([[lem-closed-subgroup-quotient-averaging-and-compact-lifts]]).

[F8] A continuous image of a compact space is compact
([[thm-compactness-under-continuous-maps]]).

[F9] A positive functional on $C_c(G/P;\mathbb R)$ is integration against a
Radon measure ([[thm-rmk-positive-functional-is-integration-against-its-representing-measure]]).

[F10] For fixed left Haar measures and a rho-function, the Weil formula gives a
unique Radon quotient measure ([[thm-weil-quotient-integration-formula-with-rho-function]]).

[F11] If the inducing character is unitary, the completed covariant model with
its cocycle action is a strongly continuous unitary representation
([[thm-unitary-induction-from-a-closed-subgroup]]).

[F12] The quotient Radon–Nikodym cocycle is
$D_g(xP)=\rho(g^{-1}x)/\rho(x)$, and its square root corrects the left action
([[lem-radon-nikodym-cocycle-of-a-homogeneous-measure]]).

[F13] Trigonometric polynomials are finite linear combinations of the circle
characters ([[def-fourier-coefficients-and-trigonometric-polynomials]]).

[F14] Trigonometric polynomials are uniformly dense in continuous functions on
the circle ([[cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions]]).

[F15] Continuous functions are dense in $L^2$ on the finite torus with
normalized Haar measure
([[lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori]]).

[F16] Normalized Haar measure on a compact Lie group is right-translation and
inversion invariant ([[cor-normalized-haar-measure-on-a-compact-lie-group]]).

[F17] A left Haar measure is a nonzero left-invariant Borel Radon measure finite
on compact sets, and Lebesgue measure on $\mathbb R^2$ is Radon under
$\mathrm{AC}_\omega$
([[def-left-haar-integral-and-left-haar-measure]],
[[thm-lebesgue-measure-is-a-radon-measure-on-rn]]).

[A1] The Axiom of Choice supplies the normalized Haar measure and is assumed by
the Weil, cocycle, and unitary-induction suppliers
([[def-axiom-of-choice]]).

[A2] AC implies the countable-choice hypothesis used by the Fourier-density
suppliers ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 By [F2], write each $g\in G$ uniquely as $g=n_xa_tk$. Since $n_xa_t=a_tn_{e^{-t}x}$, this is also the unique smooth factorization $g=a_tn_{e^{-t}x}k$ with $a_tn_{e^{-t}x}\in AN$. Thus restriction to $K$ is injective on the induced function model, because covariance determines $\varphi$ on every $g=pk$. [F1, F2, algebra]

1.2 By [F2], write uniquely $g=ka_tn_x$ and set $\rho(g)=e^{-t}$. For $p_0=ma_sn_y$, direct multiplication using centrality of $M$ gives $gp_0=km\,a_{t+s}n_{e^{-s}x+y}$; hence $\rho(gp_0)=e^{-s}\rho(g)=\Delta_P(p_0)\Delta_G(p_0)^{-1}\rho(g)$ by [F1], [F2], and [F6]. Thus $\rho$ is a positive continuous rho-function by [F5], and $\rho(k)=1$ for $k\in K$. The continuous map $q:K\to G/P$, $q(k)=kP$, is onto because $G=KAN$; therefore $G/P$ is compact by [F7] and [F8]. Define $\Lambda(\psi)=\int_K\psi(kP)\,dk$ on $C_c(G/P;\mathbb R)$. This is positive and $\Lambda(1)=1$, so [F9] represents it by a Radon probability $\bar{dk}$, the pushforward of $dk$. Give $P=M\times AN$ left Haar measure $dp$ by normalized counting on $M$ and $dt\,dx$ on $AN$; left multiplication by $a_sn_y$ sends $(t,x)$ to $(s+t,x+e^{-t}y)$ with Jacobian $1$, and $M$ is central. The Radon property follows from [F17] and finite disjoint union over $M$. For $h\in C_c(G)$, subgroup averaging [F7] makes $kP\mapsto\int_P h(kp)\rho(kp)^{-1}\,dp$ a member of $C_c(G/P)$. The Weil formula [F10], applied to $h/\rho$, gives $\int_G h(g)\,dg=\int_{G/P}\int_P h(kp)\rho(kp)^{-1}\,dp\,d\mu_\rho(kP)$. With $\bar{dk}$ instead, the right side is $\int_K\frac12\sum_{m\in M}\int_{\mathbb R^2}h(km a_sn_y)e^s\,dy\,ds\,dk=\int_K\int_{\mathbb R^2}h(ka_sn_y)e^s\,dy\,ds\,dk$, since $dk$ is right-$M$-invariant by [F16]. This is the KAN Haar integral [F2], so uniqueness in [F10] gives $\bar{dk}=\mu_\rho$. [A1, F1, F2, F5, F6, F7, F8, F9, F10, F16, F17, A2, algebra]

1.3 Identify $K$ with the circle by $k_\theta\leftrightarrow[\theta/(2\pi)]$. On continuous functions the projection $P_\varepsilon f(k)=\tfrac12(f(k)+(-1)^\varepsilon f(-k))$ has norm at most $1$ and range $C_\varepsilon(K)$. By [F14], trigonometric polynomials approximate each continuous function uniformly; applying $P_\varepsilon$ gives parity trigonometric polynomials approximating each continuous parity function uniformly. By [F15], continuous functions are dense in $L^2(K)$; applying the same bounded projection, which is an $L^2$ contraction by [F16], shows continuous parity functions are dense in $L^2_\varepsilon(K)$. Therefore parity trigonometric polynomials, which are $K$-finite by [F13], are dense in $L^2_\varepsilon(K)$. [F13, F14, F15, F16, A2, algebra]

2.1 If $\varphi\in I_{\varepsilon,\nu}$, its $M$-covariance gives $f(-k)=(-1)^\varepsilon f(k)$ for $f=\varphi|_K$. Conversely, for $f\in C^\infty_\varepsilon(K)$ define $\varphi(a_tn_xk)=e^{(1+\nu)t/2}f(k)$ in the unique $ANK$ coordinates. Left multiplication by $a_sn_y$ changes $t$ to $s+t$ and the $K$ factor remains fixed; left multiplication by $m\in M$ replaces $k$ by $mk$ and multiplies $f$ by $\sigma_\varepsilon(m)$. Thus $\varphi(pg)=\chi_{\varepsilon,\nu}(p)\varphi(g)$ and $\varphi$ is smooth. For any factorization $g=pk$ with $p=ma_tn_x$, centrality of $m$ gives the same canonical factorization $g=a_tn_x(mk)$, so $e^{(1+\nu)t/2}\sigma_\varepsilon(m)f(k)=e^{(1+\nu)t/2}f(mk)$; this proves the inverse formula and shows its independence of the $M$-ambiguity. [F1, F2, F3, step 1.1, algebra]

2.2 For $\nu\in i\mathbb R$, define $U\varphi(x)=\rho(x)^{-1/2}\varphi(x^{-1})$. By [F5] and [F6], $\rho(xp)^{-1/2}=\Delta_P(p)^{-1/2}\rho(x)^{-1/2}$, since $\Delta_G=1$. Also $\chi_{\varepsilon,\nu}=\delta_P^{1/2}\tau_\nu=\Delta_P^{-1/2}\tau_\nu$, so $\varphi(p^{-1}x^{-1})=\chi_{\varepsilon,\nu}(p)^{-1}\varphi(x^{-1})$ cancels the modular factor and gives $U\varphi(xp)=\tau_\nu(p)^{-1}U\varphi(x)$. The resulting continuous section has compact quotient support because $G/P$ is compact by step 1.2. For $g_0\in G$, direct substitution yields $U(\Pi_\nu(g_0)\varphi)(x)=\left(\frac{\rho(g_0^{-1}x)}{\rho(x)}\right)^{1/2}U\varphi(g_0^{-1}x)=D_{g_0}(xP)^{1/2}U\varphi(g_0^{-1}x)$ by [F12]. Hence $U$ intertwines right translation on the left-covariant model with the cocycle-corrected left action on the right-$P$-covariant model of $\operatorname{Ind}_P^G(\tau_\nu)$; the parameter remains $\nu$. [F1, F3, F4, F5, F6, F12, step 1.2, algebra]

2.3 The quotient norm of $U\varphi$ is, by [F10] and step 1.2, $\|U\varphi\|^2=\int_{G/P}|U\varphi(x)|^2\,d\mu_\rho(xP)=\int_K|U\varphi(k)|^2\,dk=\int_K|\varphi(k^{-1})|^2\,dk$. Inversion invariance of normalized Haar measure [F16] makes this $\int_K|f(k)|^2\,dk$, so restriction is isometric for the normalized induced inner product. [F3, F4, F10, F16, step 1.2, algebra]

3.1 For $g_0\in G$, factor $kg_0=a_{t(k,g_0)}n_{x(k,g_0)}\kappa(k,g_0)$ by the canonical $ANK$ coordinates. Then $(\Pi_\nu(g_0)\varphi)(k)=\varphi(kg_0)=e^{(1+\nu)t(k,g_0)/2}f(\kappa(k,g_0))$. In a general $P K$ factorization the same value is $|\alpha(p)|^{1+\nu}\sigma_\varepsilon(m_p)f(\kappa)$; the parity relation makes this independent of the $M$-choice. Since $-I$ is central, replacing $k$ by $-k$ leaves $t,x$ fixed and replaces $\kappa$ by $-\kappa$, so the formula preserves the parity-$\varepsilon$ subspace. This is the stated Iwasawa-cocycle action, with $m_p=I$ in the canonical $ANK$ coordinates. [F1, F2, F3, step 2.1, algebra]

4.1 The coordinate construction in step 2.1, together with the inverse of $U$ from step 2.2, identifies continuous right-$P$-covariant sections with continuous parity-$\varepsilon$ functions on $K$. Step 2.3 identifies their quotient norm with the $L^2(K)$ norm, and step 1.3 shows the smooth parity functions are dense in $L^2_\varepsilon(K)$; thus the compact-picture isometry extends onto the completed induced Hilbert space. By [F11], $\operatorname{Ind}_P^G(\tau_\nu)$ is strongly continuous and unitary because $\tau_\nu$ is a continuous unitary character for $\nu\in i\mathbb R$. The intertwining identity in step 2.2 transfers these properties to the compact-picture action. [A1, F3, F4, F11, step 1.3, step 2.2, step 2.3, algebra] ∎
