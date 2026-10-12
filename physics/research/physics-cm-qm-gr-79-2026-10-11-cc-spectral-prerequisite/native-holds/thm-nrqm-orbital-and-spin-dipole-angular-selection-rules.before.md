---
id: thm-nrqm-orbital-and-spin-dipole-angular-selection-rules
aliases: [nrqm-orbital-and-spin-dipole-angular-selection-rules]
kind: theorem
domain: mathematics
title: "Dipole angular selection rules"
status: draft
origin: pipeline
dependency_level: 9
deps: [thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension, thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain, thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators, thm-nrqm-orbital-and-spin-associated-polynomial-normalization, thm-nrqm-orbital-and-spin-sphere-onb, lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates, def-homogeneous-polynomial-and-homogeneous-ideal, def-monomials-multidegree-and-total-degree, def-laplacian-of-a-c2-function, def-directional-and-partial-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, def-self-adjoint-and-normal-endomorphism, def-orthogonality-and-orthogonal-complement, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-hilbert-space, def-inner-product-space, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-complex-exponential, def-sine-and-cosine-by-power-series, def-linear-map, def-linear-subspace, def-countable-choice]
dependency_roles:
  thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain: mathematical-premise
  thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators: mathematical-premise
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
  def-homogeneous-polynomial-and-homogeneous-ideal: mathematical-premise
  def-monomials-multidegree-and-total-degree: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  def-orthogonality-and-orthogonal-complement: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  def-linear-map: mathematical-premise
  def-linear-subspace: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9 'Angular Momentum', §3 'Comments on spherical harmonics' (angular-momentum quantum numbers of spherical harmonics, multiplication by coordinates and selection rules)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2fd50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 7, §7.5 'The spherical harmonics' and §7.6 'Selection rules' region (dipole selection rules with the angular integral over products of spherical harmonics)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Use the notation of
[[thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension]]: $S^2=\{x\in\mathbb R^3:|x|=1\}$ with polar measure
$\sigma$ ([[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]],
[[def-complex-lp-and-euclidean-test-function-conventions]]), the Hilbert space $L^2(S^2,\sigma)$ with inner
product linear in the first argument, the complete orthonormal family $(Y_{lm})$
([[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]],
[[thm-nrqm-orbital-and-spin-sphere-onb]]), the blocks $V_l=\operatorname{span}\{Y_{l,-l},\dots,Y_{ll}\}$ and
the finite span $H$, the spaces $H_l^{\mathrm{pol}}$ of complex harmonic homogeneous polynomials of degree $l$,
and the polynomial representatives $h_{lm}\in H_l^{\mathrm{pol}}$ of the $Y_{lm}$, characterized by
$\mathrm{res}_l(h_{lm})=Y_{lm}$ where $\mathrm{res}_l(p)$ is the class of $p|_{S^2}$
([[def-homogeneous-polynomial-and-homogeneous-ideal]], [[def-monomials-multidegree-and-total-degree]],
[[def-laplacian-of-a-c2-function]]). Put $H_{-1}^{\mathrm{pol}}:=\{0\}$, fix $l\ge0$ and $m\in\{-l,\dots,l\}$,
write $\mathcal H:=h_{lm}$, and define the three polynomial multipliers
$$Q_0:=x_3,\qquad Q_\pm:=\frac{x_1\pm ix_2}{\sqrt2},$$
so that $Q_q=\sum_{i=1}^3c_{q,i}x_i$ with $c_{0,i}=\delta_{i3}$ and $c_{\pm,i}=(\delta_{i1}\pm
i\,\delta_{i2})/\sqrt2$. Let $D_i$ and $L_z,L_3$ be as in
[[thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators]], where $L_3=L_z$ and $L_zY_{lm}=\hbar mY_{lm}$
([[thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain]]). Then, for each $q\in\{-1,0,1\}$:

(a) (harmonic decomposition) the polynomial $G_q:=\dfrac{\sum_ic_{q,i}\,\partial_i\mathcal H}{2l+1}$ lies in
$H_{l-1}^{\mathrm{pol}}$ and
$$Q_q\,\mathcal H=R_q+r^2G_q,\qquad R_q:=Q_q\mathcal H-r^2G_q\in H_{l+1}^{\mathrm{pol}},$$
where $r^2(x)=x_1^2+x_2^2+x_3^2$; for $l=0$ one has $G_q=0$ and $R_q=Q_q\mathcal H$;

(b) (degree selection) the function $Q_q|_{S^2}\cdot Y_{lm}$ lies in $V_{l+1}\oplus V_{l-1}$ (with
$V_{-1}:=\{0\}$); consequently, for all $l'\ge0$ and $m'\in\{-l',\dots,l'\}$,
$$\langle Q_q|_{S^2}\,Y_{lm},\ Y_{l'm'}\rangle=0\qquad\text{whenever } l'\notin\{l-1,\,l+1\};$$

(c) (weight selection) as elements of $H\subset L^2(S^2,\sigma)$ one has
$$L_z\bigl(Q_q|_{S^2}\,Y_{lm}\bigr)=\hbar(m+q)\,\bigl(Q_q|_{S^2}\,Y_{lm}\bigr),$$
because $\partial_\varphi Q_q=iq\,Q_q$ on $S^2$ ([[def-sine-and-cosine-by-power-series]],
[[def-complex-exponential]]); hence in addition
$$\langle Q_q|_{S^2}\,Y_{lm},\ Y_{l'm'}\rangle=0\qquad\text{whenever } m'\ne m+q;$$

(d) (selection rules) combining (b) and (c): the angular matrix element
$\langle Y_{l'm'},\,Q_q|_{S^2}\,Y_{lm}\rangle$ can be nonzero only if
$$l'=l+1\ \text{and } m'=m+q,\qquad\text{or}\qquad l'\ge1,\ l'=l-1\ \text{and } m'=m+q;$$
in particular only $\Delta l=\pm1$ and $\Delta m\in\{0,\pm1\}$ occur with the component-dependent shift
$\Delta m=q$ for the multiplier $Q_q$. These are necessary conditions on the angular integrals only: no
assertion is made that an allowed pair has a nonzero integral, and no absorption, emission or transition
probability is asserted or computed.

## Facts & Assumptions

**Given:** the family $(Y_{lm})$ with representatives $h_{lm}$, the multipliers $Q_q$, the fixed indices $l,m$, and the polynomial $\mathcal H=h_{lm}$.

[F1] The restriction map $\mathrm{res}_l:H_l^{\mathrm{pol}}\to V_l$ is a $\mathbb C$-linear isomorphism; $(Y_{lm})_m$ is an orthonormal basis of $V_l$; $V_l\perp V_k$ for $l\ne k$; $(Y_{lm})$ is complete in $L^2(S^2,\sigma)$ and $H$ is dense ([[thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension]] (b),(c), [[thm-nrqm-orbital-and-spin-sphere-onb]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[def-inner-product-space]]).

[F2] $\Delta$ is linear, satisfies the product rule $\Delta(fg)=f\Delta g+2\nabla f\cdot\nabla g+g\Delta f$, commutes with each $\partial_i$, and annihilates the coordinate functions $x_i$; $r^2$ has $\Delta r^2=6$ and $\nabla r^2=2x$; Euler's identity $x\cdot\nabla q=kq$ holds for homogeneous $q$ of degree $k$; hence for homogeneous $p$ of degree $l$ and $q$ of degree $l-1$: $\Delta(x_ip)=2\partial_ip$ and $\Delta(r^2q)=(4l+2)q+r^2\Delta q$ ([[def-laplacian-of-a-c2-function]], [[def-directional-and-partial-derivatives]], [[thm-algebra-of-derivatives]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[thm-total-derivative-computes-directional-and-partial-derivatives]], [[def-homogeneous-polynomial-and-homogeneous-ideal]]).

[F3] $Y_{lm}(\theta,\varphi)=b_{lm}w_{l|m|}(\cos\theta)e^{im\varphi}/\sqrt{2\pi}$ for $m\ge0$ and $Y_{l,-m}=(-1)^m\overline{Y_{lm}}$; in particular $\partial_\varphi Y_{lm}=im\,Y_{lm}$ in the angular chart, and $Y_{lm}$ is continuous ([[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]] (a),(c), [[def-complex-exponential]], [[def-sine-and-cosine-by-power-series]]).

[F4] The chart is $\Phi(\theta,\varphi)=(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$; on $S^2$ one has $Q_0=\cos\theta$, $Q_\pm=e^{\pm i\varphi}\sin\theta/\sqrt2$ as chart functions, so $\partial_\varphi Q_q=iq\,Q_q$ on $S^2$; and a product of chart functions is differentiated by the product rule ([[thm-algebra-of-derivatives]], [[def-directional-and-partial-derivatives]], [[def-complex-exponential]], [[def-sine-and-cosine-by-power-series]], [[thm-chain-rule-for-total-derivatives]]).

[F5] $L_z$ is self-adjoint on $L^2(S^2,\sigma)$ with $L_zY_{lm}=\hbar mY_{lm}$, and for $F\in H$ the chart values of $L_zF$ are $-i\hbar\partial_\varphi F$; eigenvectors of $L_z$ for distinct eigenvalues are orthogonal, because $\langle L_zF,G\rangle=\langle F,L_zG\rangle$ for $F,G$ in the domain of the self-adjoint $L_z$ ([[thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain]] (a),(c), [[def-self-adjoint-and-normal-endomorphism]], [[def-orthogonality-and-orthogonal-complement]]).

[F6] $L_3=L_z$ (equal self-adjoint operators) by [[thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators]] (c).



## Proof

1.1 [(a), the two harmonic pieces] By [F2] and $\Delta\mathcal H=0$, $\Delta(Q_q\mathcal H)=\sum_ic_{q,i}\Delta(x_i\mathcal H)=\sum_ic_{q,i}\,2\partial_i\mathcal H$. Since $\partial_i$ commutes with $\Delta$ and $\Delta\mathcal H=0$, each $\partial_i\mathcal H$ lies in $H_{l-1}^{\mathrm{pol}}$, so $G_q=\sum_ic_{q,i}\partial_i\mathcal H/(2l+1)\in H_{l-1}^{\mathrm{pol}}$; by [F2] and Euler's identity for the homogeneous polynomial $G_q$ of degree $l-1$, $\Delta(r^2G_q)=6G_q+4(l-1)G_q+r^2\Delta G_q=(4l+2)G_q+r^2\Delta G_q$, and here $\Delta G_q=0$, so $\Delta(r^2G_q)=(4l+2)G_q=2\sum_ic_{q,i}\partial_i\mathcal H$. Hence $\Delta R_q=\Delta(Q_q\mathcal H)-\Delta(r^2G_q)=0$: $R_q\in H_{l+1}^{\mathrm{pol}}$, and $R_q$ is homogeneous of degree $l+1$ as the difference of two such polynomials; for $l=0$ the derivative terms vanish because $\mathcal H$ is constant, so $G_q=0$ and $R_q=Q_q\mathcal H$. [F2, algebra]

2.1 [(b), degree selection] Restricting the identity of step 1.1 to $S^2$, where $r^2=1$, gives $Q_q|_{S^2}\cdot Y_{lm}=\mathrm{res}_{l+1}(R_q)+\mathrm{res}_{l-1}(G_q)$, an element of $V_{l+1}+V_{l-1}$, using $\mathcal H|_{S^2}=Y_{lm}$ ([F1]) and $Q_q\mathcal H|_{S^2}=(Q_q|_{S^2})Y_{lm}$; the sum is direct and each summand lies in the corresponding block, so orthogonality $V_{l+1}\perp V_{l'}$ and $V_{l-1}\perp V_{l'}$ for $l'\notin\{l-1,l+1\}$ ([F1]) gives $\langle Q_q|_{S^2}Y_{lm},Y_{l'm'}\rangle=0$ for such $l'$. [step 1.1, F1, algebra]

3.1 [(c), weight selection] Let $F:=Q_q|_{S^2}\cdot Y_{lm}\in H$ by step 2.1. On the chart, by [F3] and [F4], $\partial_\varphi F=(\partial_\varphi Q_q)Y_{lm}+Q_q\,\partial_\varphi Y_{lm}=iq\,F+im\,F=i(m+q)F$; hence by [F5] $L_zF=-i\hbar\partial_\varphi F=\hbar(m+q)F$ in $H$. If now $m'\ne m+q$, then using the self-adjointness of $L_z$ ([F5]) and $L_zY_{l'm'}=\hbar m'Y_{l'm'}$, $\hbar(m+q)\langle F,Y_{l'm'}\rangle=\langle L_zF,Y_{l'm'}\rangle=\langle F,L_zY_{l'm'}\rangle=\hbar m'\langle F,Y_{l'm'}\rangle$, so $\langle F,Y_{l'm'}\rangle=0$. [step 2.1, F3, F4, F5, algebra]

4.1 [(d), the rules] Clause (d) restates steps 2.1 and 3.1 for the multiplier $Q_q$: a nonzero angular integral requires $l'\in\{l-1,l+1\}$ and $m'=m+q$; the case $l'=l-1$ presupposes $l\ge1$ because $-l'\le m'\le l'$ with $l-1\ge0$; and by [F6] the weight $m$ is the $L_3$-eigenvalue in units $\hbar$, so the multiplier $Q_q$ shifts the $L_3$-eigenvalue by $\hbar q$. [step 2.1, step 3.1, F6] ∎
