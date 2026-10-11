---
id: lem-de-rham-top-integral-is-fundamental-class-evaluation
kind: lemma
title: "Top de Rham integration equals fundamental-class evaluation"
status: draft
origin: pipeline
dependency_level: 8
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-euclidean-inverse-function-theorem
  - thm-excision-for-singular-homology
  - thm-monotone-convergence-for-the-integral
  - thm-de-rham-theorem
  - thm-smooth-singular-chains-compute-singular-homology
  - def-fundamental-class-of-a-compact-oriented-manifold
  - thm-morse-sard-for-euclidean-maps
  - thm-change-of-variables-for-oriented-manifold-diffeomorphisms
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - def-kronecker-evaluation-pairing
  - lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives
  - def-de-rham-integration-cochain-map
  - lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier
  - def-local-orientation-sign-of-a-regular-preimage
  - def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Cambridge University Press (author-hosted electronic version, 560 pp.); §3.1 printed pp. 190-197 (Lemma 3.1, Theorem 3.2, Corollaries 3.3-3.4, Theorem 3.5) and §3.3 printed pp. 241-243 (fundamental class, Theorem 3.26)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Christian Schnell, Complex Manifolds, MAT 545 (Stony Brook, Fall 2024), Class 18 'The Hodge decomposition' (October 31), 6 pp.; Corollaries 18.1-18.4, Theorem 18.5 (18.6), Corollary 18.7, Proposition 18.12 (∂∂̄-lemma), cohomological Lefschetz decomposition"
      url: "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter VI (Hodge Theory), §5.1-§5.3 and §6.1, printed pp. 300-306; (5.1)-(5.17) operators of Hermitian geometry, primitive elements and hard Lefschetz; (6.3)-(6.7) Kähler commutation identities"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $M$ be a compact oriented smooth boundaryless
$m$-manifold and let $\alpha\in\Omega^m(M)$ be a smooth real or complex top form.
Let $J_M:H^m_{\mathrm{dR}}(M)\to H^m_{\mathrm{sing}}(M;\mathbb R)$ be the de Rham
comparison of [[thm-de-rham-theorem]], let
$[M]\in H_m(M;\mathbb R)$ be the real fundamental class of
[[def-fundamental-class-of-a-compact-oriented-manifold]], and let
$\langle\,,\rangle$ be the Kronecker evaluation pairing
([[def-kronecker-evaluation-pairing]]). Then

$$\langle J_M[\alpha],[M]\rangle=\int_M\alpha .$$

Consequently, if $c_1,\dots,c_r\in H^*_{\mathrm{dR}}(M)$ with
$\sum_i\deg c_i=m$ are represented by closed smooth forms $\alpha_i$, then

$$\langle J_M(c_1)\smile\cdots\smile J_M(c_r),[M]\rangle=\int_M\alpha_1\wedge\cdots\wedge\alpha_r .$$

## Facts & Assumptions

**Given:** The oriented manifold, the top form and the normalization of AC; by
[[thm-choice-implies-dependent-implies-countable-choice]] the Axiom of Choice
supplies the countable choice $\mathrm{AC}_\omega$ used by the de Rham
comparison and by smooth partitions of unity.

[F1] $J_M=r_M^{-1}I_M$ on each degree, where
$I_M(\omega)(\sigma)=\int_\sigma\omega$ is the integration cocycle of
[[def-de-rham-integration-cochain-map]] and $r_M$ restricts continuous to smooth
singular cochains; $J_M$ is a unital graded algebra isomorphism
([[thm-de-rham-theorem]]).

[F2] Smooth singular chains compute singular homology, naturally for smooth maps
([[thm-smooth-singular-chains-compute-singular-homology]]), and the Kronecker
evaluation $\langle[\varphi],[c]\rangle=\varphi(c)$ is independent of cocycle and
cycle representatives ([[def-kronecker-evaluation-pairing]],
[[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]]).

[F3] The fundamental class restricts at every point to the local orientation
class ([[def-fundamental-class-of-a-compact-oriented-manifold]]); a smooth germ
with invertible differential multiplies local orientation classes by
$\operatorname{sgn}(dF_p)$ ([[lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier]],
[[def-local-orientation-sign-of-a-regular-preimage]]); and excision identifies
the relative groups after removing a closed set contained in the complement of a
point ([[thm-excision-for-singular-homology]]).

[F4] Sard's theorem gives null critical value sets for Euclidean chart
expressions ([[thm-morse-sard-for-euclidean-maps]]), and the inverse function
theorem gives local inverse branches at invertible differentials
([[thm-euclidean-inverse-function-theorem]]).

[F5] Change of variables for orientation-preserving or reversing
diffeomorphisms ([[thm-change-of-variables-for-oriented-manifold-diffeomorphisms]]),
smooth partitions of unity subordinate to countable locally finite covers
([[thm-smooth-partitions-of-unity-exist-on-manifolds]]), monotone convergence for
nonnegative measurable functions ([[thm-monotone-convergence-for-the-integral]]),
and the definition of the manifold integral including dimension zero
([[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]]).

## Proof

1.1 Assume first that $\alpha$ is real and $m\ge1$. By [F2] choose a smooth singular cycle $z=\sum_{j=1}^Na_j\sigma_j$ representing the image of $[M]$ in $H_m(M;\mathbb R)$, and choose a continuous cocycle $\varphi$ representing the class $J_M[\alpha]=r_M^{-1}[I_M\alpha]$ with $r_M\varphi-I_M\alpha=\delta\psi$ for a smooth cochain $\psi$; evaluating on the smooth cycle $z$ gives $\langle J_M[\alpha],[M]\rangle=\varphi(z)=I_M\alpha(z)+\psi(\partial z)=I_M\alpha(z)=\sum_{j=1}^Na_j\int_{\Delta^m}\sigma_j^*\alpha$ by [F1] and the definition of $I_M$. It therefore remains to prove $\sum_ja_j\int_{\Delta^m}\sigma_j^*\alpha=\int_M\alpha$ for this smooth cycle. [F1, F2, given]

1.2 Each $\sigma_j$ extends smoothly to an open neighbourhood of $\Delta^m$. Applying [F4] in finitely many charts covering the compact images, the critical values of all $\sigma_j$ and the images of all faces of all $\Delta^m$ form a set $N\subseteq M$ that is null in every smooth chart. For $y\notin N$ every preimage $x\in\sigma_j^{-1}(y)$ is an interior regular point of $\sigma_j$, and there are only finitely many of them, because a regular point has a neighbourhood on which $\sigma_j$ is injective and $\Delta^m$ is compact; put $\mu_j(y)=\sum_{x\in\sigma_j^{-1}(y)}\operatorname{sgn}(d\sigma_j(x))$ and $\mu(y)=\sum_ja_j\mu_j(y)$ for $y\notin N$. [F4, given, algebra]

2.1 Fix $y\notin N$ and a small closed ball $B\subseteq M$ around $y$. By [F3], excision identifies $H_m(M,M\setminus B;\mathbb R)$ with $H_m(B,B\setminus\{y\};\mathbb R)=\mathbb R\,\mu_y$, where $\mu_y$ is the local orientation class. The restriction of $[M]$ to this group is $\mu_y$ by the pointwise restriction property in [F3], and the restriction of the class of $z$ is $\mu(y)\mu_y$: subdividing the simplices of $z$ into pieces whose images lie either in $B$ or in $M\setminus B$, the pieces avoiding $B$ are killed in the relative quotient, while near each preimage of $y$ the germ of a regular $\sigma_j$ multiplies the local class $\mu_x$ by $\operatorname{sgn}(d\sigma_j(x))$ by [F3]. Since $z$ represents $[M]$, the two restrictions agree, and because $\mu_y$ generates an infinite cyclic group this forces $\mu(y)=1$. Hence $\mu=1$ on the complement of $N$. [F3, step 1.2, given, algebra]

2.2 Fix $j$. In a positively oriented chart at a regular point $x$, the coefficient of $\sigma_j^*\alpha$ is the coefficient of $\alpha$ at $\sigma_j(x)$ times $\det D\sigma_j(x)$, so the pullback coefficient vanishes identically on the critical set of $\sigma_j$, and $\int_{\Delta^m}\sigma_j^*\alpha=\int_{R_j}\sigma_j^*\alpha$ where $R_j$ is the set of regular points of $\sigma_j$ in the interior of $\Delta^m$. Cover $R_j$ by countably many connected open sets $V_i$ on which $\sigma_j$ restricts to a diffeomorphism onto its image, choose a subordinate locally finite smooth partition of unity $(\rho_i)$ using [F5], and let $\varepsilon_i\in\{\pm1\}$ be the sign of the differential on $V_i$. The change of variables theorem [F5] applied on each $V_i$ gives $\int_{R_j}\sigma_j^*\alpha=\sum_i\varepsilon_i\int_{\sigma_j(V_i)}\rho_i\alpha$, and monotone convergence [F5] applied to the positive and negative parts of the coefficient of $\alpha$ justifies exchanging this locally finite series with the integral: both sides are finite, the source integrand being continuous on the compact simplex. At a point $y\notin N$ with preimages $x_1,\dots,x_k$, the inner weight is $\sum_{l=1}^k\sum_{i:\,x_l\in V_i}\varepsilon_i\rho_i(x_l)=\sum_{l=1}^k\operatorname{sgn}(d\sigma_j(x_l))$ because $\sum_i\rho_i=1$ near each $x_l$ and $\varepsilon_i=\operatorname{sgn}(d\sigma_j(x_l))$ on each $V_i$ containing $x_l$. Therefore $\int_{\Delta^m}\sigma_j^*\alpha=\int_M\mu_j(y)\,\alpha(y)$, the null set $N$ being immaterial for the integral. [F4, F5, step 1.2, given, algebra]

3.1 Summing the identity of step 2.2 with the coefficients $a_j$ and using $\mu=1$ outside $N$ from step 2.1 gives, for real $\alpha$ and $m\ge1$, $$\sum_{j=1}^Na_j\int_{\Delta^m}\sigma_j^*\alpha=\int_M\mu(y)\alpha(y)=\int_M\alpha(y),$$ which combined with step 1.1 proves $\langle J_M[\alpha],[M]\rangle=\int_M\alpha$. For complex $\alpha$ apply the real case to $\operatorname{Re}\alpha$ and $\operatorname{Im}\alpha$ and use real linearity of $J_M$, of the Kronecker pairing and of the integral. For $m=0$ the manifold is a finite set of points with orientation signs $\varepsilon(p)$, the fundamental class is $[M]=\sum_p\varepsilon(p)[p]$, the degree-zero comparison sends the class of a function $f$ to the evaluation classes $[f]=\sum_pf(p)[p]^*$, and both sides of the identity are $\sum_p\varepsilon(p)f(p)$ by the zero-dimensional convention in [F5]; the empty manifold gives $0=0$. The multiplicative consequence follows from the algebra isomorphism property of [F1] applied to the closed representatives. AC enters only through the $\mathrm{AC}_\omega$ recorded in the Given, which the de Rham comparison, the smooth partitions of unity and the smooth-chain comparison require; Sard, excision, change of variables, monotone convergence and the local multiplier computation are choice-free. [step 1.1, step 2.1, step 2.2, F1, F5, given] ∎
