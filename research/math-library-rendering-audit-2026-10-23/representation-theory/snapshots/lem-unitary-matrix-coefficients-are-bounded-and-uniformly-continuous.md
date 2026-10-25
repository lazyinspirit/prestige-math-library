---
id: lem-unitary-matrix-coefficients-are-bounded-and-uniformly-continuous
kind: lemma
title: "Bounds and two-sided uniform continuity of unitary coefficients"
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-matrix-coefficient-of-a-unitary-representation, def-left-and-right-uniformities-of-a-topological-group, def-complex-metric-convergence-and-continuity, def-real-and-complex-inner-product-space, def-strongly-continuous-unitary-representation, def-topological-group, def-uniformly-continuous-map, lem-metric-uniformity-dictionary, thm-cauchy-schwarz-in-an-inner-product-space]
landmark: false
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Definition A.1.1, Appendix A printed pp. 305–306, and the left/right uniform-continuity convention in §A.3 printed pp. 318–319"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Neeb, An Introduction to Unitary Representations of Lie Groups, §§3.4, 4.2 and 5.3"
      url: "https://www.math.fau.de/wp-content/uploads/2024/01/rep.pdf"
axiom_audit: choice-free
---

## Statement

Let $G$ be a topological group and let $\pi:G\to U(H)$ be a strongly
continuous unitary representation on a complex Hilbert space, with the inner
product linear in its first argument. For $\xi,\eta\in H$, define
$c_{\xi,\eta}(g)=\langle\pi(g)\xi,\eta\rangle$. Then

$$|c_{\xi,\eta}(g)|\le \|\xi\|\,\|\eta\|\qquad(g\in G),$$

and $c_{\xi,\eta}:G\to\mathbb C$ is uniformly continuous for each of the
left and right uniformities defined by
$L_U=\{(x,y):x^{-1}y\in U\}$ and
$R_U=\{(x,y):yx^{-1}\in U\}$, with the usual metric uniformity on $\mathbb C$.

## Facts & Assumptions

[A1] The coefficient is $c_{\xi,\eta}(g)=\langle\pi(g)\xi,\eta\rangle$ ([[def-matrix-coefficient-of-a-unitary-representation]]).

[A2] The representation is a group homomorphism $\pi:G\to U(H)$, where $U(H)$ consists of bijective complex-linear isometries ([[def-strongly-continuous-unitary-representation]]).

[A3] Every orbit map $g\mapsto\pi(g)v$ is norm-continuous ([[def-strongly-continuous-unitary-representation]]).

[A4] The pairing is linear in its first argument, conjugate-linear in its second, conjugate symmetric, and induces the norm by $\langle v,v\rangle=\|v\|^2$ ([[def-real-and-complex-inner-product-space]]).

[A5] For all $u,v\in H$, $|\langle u,v\rangle|\le\|u\|\,\|v\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A6] The left and right group uniformities have basic entourages $L_U=\{(x,y):x^{-1}y\in U\}$ and $R_U=\{(x,y):yx^{-1}\in U\}$ for identity neighbourhoods $U$ ([[def-left-and-right-uniformities-of-a-topological-group]]).

[A7] Inversion $h\mapsto h^{-1}$ is continuous on $G$ ([[def-topological-group]]).

[A8] The usual complex metric is $d_{\mathbb C}(z,w)=|z-w|$ ([[def-complex-metric-convergence-and-continuity]]).

[A9] For a metric space, the usual metric uniformity has basic entourages $\{(z,w):d_{\mathbb C}(z,w)<\varepsilon\}$, $\varepsilon>0$ ([[lem-metric-uniformity-dictionary]]).

[A10] A map between uniform spaces is uniformly continuous when each target entourage contains the image of some source entourage ([[def-uniformly-continuous-map]]).

## Proof

**Proof technique:** direct.

**Given:** $G,\pi,H,\xi,\eta$ as in the statement. All inner products below are linear in the first variable.

1.1 Every complex-linear norm isometry $U:H\to H$ preserves the inner product. For $z=\langle u,v\rangle$, expansion using [A4] gives $\|u+v\|^2-\|u-v\|^2=4\operatorname{Re}z$ and $\|u+iv\|^2-\|u-iv\|^2=4\operatorname{Im}z$. Since $U$ is complex-linear and preserves norms, these identities give equality of the real and imaginary parts of $\langle Uu,Uv\rangle$ and $\langle u,v\rangle$. In particular, for every $h\in G$, $$\langle\pi(h)u,v\rangle=\langle u,\pi(h^{-1})v\rangle,$$ because $\pi(h^{-1})$ is the inverse of $\pi(h)$. [A2, A4, algebra]

1.2 Cauchy–Schwarz and the isometry property give, for every $g\in G$, $$|c_{\xi,\eta}(g)|=|\langle\pi(g)\xi,\eta\rangle| \le\|\pi(g)\xi\|\,\|\eta\|=\|\xi\|\,\|\eta\|.$$ If either vector is zero, this also says directly that the coefficient is identically zero. [A1, A2, A5]

1.3 Fix $\varepsilon>0$. By orbit continuity at $e$, choose an identity neighbourhood $U$ such that $\|\pi(h)\xi-\xi\|<\varepsilon/(1+\|\eta\|)$ for every $h\in U$. If $(x,y)\in L_U$, then $h=x^{-1}y\in U$ and $y=xh$. The homomorphism law, linearity in the first argument, and [A5] give $$|c_{\xi,\eta}(y)-c_{\xi,\eta}(x)| =|\langle\pi(x)(\pi(h)\xi-\xi),\eta\rangle| \le\|\pi(h)\xi-\xi\|\,\|\eta\|<\varepsilon.$$ The same $U$ works for every $x$, so this is uniform continuity for the left uniformity $L_U$. [A1, A2, A3, A4, A5, A6]

2.1 Again fix $\varepsilon>0$. Orbit continuity for $\eta$ gives an identity neighbourhood $V$ such that $\|\pi(k)\eta-\eta\|<\varepsilon/(1+\|\xi\|)$ for every $k\in V$. By [A7], shrink to an identity neighbourhood $U$ such that $h\in U$ implies $h^{-1}\in V$. If $(x,y)\in R_U$, put $h=yx^{-1}\in U$, so $y=hx$. By step 1.1 and [A5], $$|c_{\xi,\eta}(y)-c_{\xi,\eta}(x)| =|\langle\pi(x)\xi,\pi(h^{-1})\eta-\eta\rangle| \le\|\xi\|\,\|\pi(h^{-1})\eta-\eta\|<\varepsilon.$$ This $U$ works for every $x$, proving uniform continuity for the right uniformity $R_U$. [A1, A2, A3, A4, A5, A6, A7, step 1.1]

3.1 Steps 1.3 and 2.1 give the entourage condition in [A9] for every metric entourage of $\mathbb C$, hence both asserted uniform continuities by [A10]. If $H=\{0\}$, or if either coefficient vector is zero, the function is identically zero and all conclusions hold. No commutativity, local compactness, Haar measure, or choice is used. [A8, A9, A10, step 1.2, step 1.3, step 2.1] ∎
