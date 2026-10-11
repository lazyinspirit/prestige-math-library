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
  - thm-long-exact-sequence-of-a-pair-in-singular-homology
  - thm-simplicial-and-singular-homology-agree-for-simplicial-complexes
  - prop-singular-homology-of-a-disjoint-union-is-the-direct-sum
  - thm-monotone-convergence-for-the-integral
  - lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals
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
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Statement

Assume the Axiom of Choice. Let $M$ be a compact oriented smooth boundaryless
$m$-manifold and let $\alpha\in\Omega^m(M)$ be a smooth real or complex top form.
Let $J_M:H^m_{\mathrm{dR}}(M)\to H^m_{\mathrm{sing}}(M;\mathbb R)$ be the de Rham
comparison of [[thm-de-rham-theorem]] for real forms, extended
complex-linearly with codomain $H^m_{\mathrm{sing}}(M;\mathbb C)$ for complex
forms. Use the smooth-orientation normalization: a positively oriented affine
$m$-simplex represents the positive local homology generator at each interior
point. Let $[M]\in H_m(M;\mathbb R)$ be the real fundamental class of
[[def-fundamental-class-of-a-compact-oriented-manifold]], and let
$\langle\,,\rangle$ be the Kronecker evaluation pairing
([[def-kronecker-evaluation-pairing]]). Then

$$\langle J_M[\alpha],[M]\rangle=\int_M\alpha .$$

Consequently, if $c_1,\dots,c_r\in H^*_{\mathrm{dR}}(M)$ with
$\sum_i\deg c_i=m$ are represented by closed smooth forms $\alpha_i$, then

$$\langle J_M(c_1)\smile\cdots\smile J_M(c_r),[M]\rangle=\int_M\alpha_1\wedge\cdots\wedge\alpha_r .$$

## Facts & Assumptions

**Given:** The oriented manifold, the top form and the normalization of AC; by [[thm-choice-implies-dependent-implies-countable-choice]] the Axiom of Choice supplies the countable choice $\mathrm{AC}_\omega$ used by the de Rham comparison and by smooth partitions of unity.

[F1] $J_M=r_M^{-1}I_M$ on each degree, where $I_M(\omega)(\sigma)=\int_\sigma\omega$ is the integration cocycle of [[def-de-rham-integration-cochain-map]] and $r_M$ restricts continuous to smooth singular cochains; $J_M$ is a unital graded algebra isomorphism ([[thm-de-rham-theorem]]).

[F2] Smooth singular chains compute singular homology, naturally for smooth maps ([[thm-smooth-singular-chains-compute-singular-homology]]), and the Kronecker evaluation $\langle[\varphi],[c]\rangle=\varphi(c)$ is independent of cocycle and cycle representatives ([[def-kronecker-evaluation-pairing]], [[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]]).

[F3] The fundamental class restricts at every point to the local orientation class ([[def-fundamental-class-of-a-compact-oriented-manifold]]); a smooth germ with invertible differential multiplies local orientation classes by $\operatorname{sgn}(dF_p)$ ([[lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier]], [[def-local-orientation-sign-of-a-regular-preimage]]); and excision identifies the relative groups after removing a closed set contained in the complement of a point ([[thm-excision-for-singular-homology]]).

[F4] Sard's theorem gives null critical value sets for Euclidean chart expressions ([[thm-morse-sard-for-euclidean-maps]]), and the inverse function theorem gives local inverse branches at invertible differentials ([[thm-euclidean-inverse-function-theorem]]).

[F5] Change of variables for orientation-preserving or reversing diffeomorphisms ([[thm-change-of-variables-for-oriented-manifold-diffeomorphisms]]), smooth partitions of unity subordinate to countable locally finite covers ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]), monotone convergence for nonnegative measurable functions ([[thm-monotone-convergence-for-the-integral]]), the equality of bounded Borel Riemann and Lebesgue integrals on boxes ([[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]]), and the definition of the manifold integral including dimension zero ([[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]]).

[F6] The long exact sequence of a pair has connecting map induced by the chain boundary ([[thm-long-exact-sequence-of-a-pair-in-singular-homology]]). The affine simplex chain map induces the canonical simplicial-to-singular homology isomorphism ([[thm-simplicial-and-singular-homology-agree-for-simplicial-complexes]]), and homology of a disjoint union is the direct sum ([[prop-singular-homology-of-a-disjoint-union-is-the-direct-sum]]).

## Proof

1.1 Assume first that $\alpha$ is real and $m\ge1$. By [F2] choose a smooth singular cycle $z=\sum_{j=1}^Na_j\sigma_j$ representing the image of $[M]$ in $H_m(M;\mathbb R)$, and choose a continuous cocycle $\varphi$ representing the class $J_M[\alpha]=r_M^{-1}[I_M\alpha]$ with $r_M\varphi-I_M\alpha=\delta\psi$ for a smooth cochain $\psi$; evaluating on the smooth cycle $z$ gives $\langle J_M[\alpha],[M]\rangle=\varphi(z)=I_M\alpha(z)+\psi(\partial z)=I_M\alpha(z)=\sum_{j=1}^Na_j\int_{\Delta^m}\sigma_j^*\alpha$ by [F1] and the definition of $I_M$. It therefore remains to prove $\sum_ja_j\int_{\Delta^m}\sigma_j^*\alpha=\int_M\alpha$ for this smooth cycle. [F1, F2, given]

1.2 Each $\sigma_j$ extends smoothly to an open neighbourhood of $\Delta^m$. Applying [F4] in finitely many charts covering the compact images, the critical values of all $\sigma_j$ and the images of all faces of all $\Delta^m$ form a set $N\subseteq M$ that is null in every smooth chart. For $y\notin N$ every preimage $x\in\sigma_j^{-1}(y)$ is an interior regular point of $\sigma_j$, and there are only finitely many of them, because a regular point has a neighbourhood on which $\sigma_j$ is injective and $\Delta^m$ is compact; put $\mu_j(y)=\sum_{x\in\sigma_j^{-1}(y)}\operatorname{sgn}(d\sigma_j(x))$ and $\mu(y)=\sum_ja_j\mu_j(y)$ for $y\notin N$. [F4, given, algebra]

2.1 The orientation normalization can be computed on the standard simplex. For an interior point $x\in\Delta^m$, radial projection from $x$ retracts $\Delta^m\setminus\{x\}$ onto $\partial\Delta^m$. Since $\Delta^m$ contracts, [F6] identifies $H_m(\Delta^m,\Delta^m\setminus\{x\};\mathbb Z)$ with $\widetilde H_{m-1}(\partial\Delta^m;\mathbb Z)$ and sends the identity simplex to its alternating boundary. In the simplicial boundary complex this alternating boundary generates top reduced homology: there are no $m$-simplices, and the cycle equations at each codimension-two face force the signed coefficients of adjacent facets to agree. For $m=1$ the generator is the endpoint difference. The simplicial comparison in [F6] therefore makes the identity simplex a local generator, whose sign fixes the positive Euclidean generator used in [F3]. Fix now $y\notin N$ and $F_j=\sigma_j^{-1}(y)$, a finite interior set by step 1.2. The identity simplex is a relative cycle for $(\Delta^m,\Delta^m\setminus F_j)$, and $\sigma_j$ is a map from this pair to $(M,M\setminus\{y\})$. Excision and the disjoint-union formula [F3, F6], using disjoint small neighbourhoods of the points of $F_j$, identify its relative class with the tuple of positive local generators just computed. The local multiplier formula [F3] consequently sends its class to $\mu_j(y)\mu_y$. If $F_j$ is empty its relative class is zero. Summing with $a_j$ shows that the point restriction of $[z]$ is $\mu(y)\mu_y$. The restriction of $[M]$ is $\mu_y$, so their equality in the one-dimensional real local homology group forces $\mu(y)=1$. [F3, F6, step 1.2, given, algebra]

2.2 Fix $j$ and let $R_j$ be the regular set in the interior of $\Delta^m$, with its standard orientation. The pullback coefficient of $\alpha$ vanishes on the critical set because it contains the factor $\det D\sigma_j$, and the boundary of the simplex has measure zero, so $\int_{\Delta^m}\sigma_j^*\alpha=\int_{R_j}\sigma_j^*\alpha$. Using a countable Euclidean basis and [F4], cover $R_j$ by connected relatively compact open inverse-branch neighbourhoods $V_i$ and choose a locally finite smooth partition $(\rho_i)$ subordinate to them by [F5]. Each $\rho_i$ has compact support in $V_i$. Put $f_i=\rho_i\circ(\sigma_j|_{V_i})^{-1}$ on $\sigma_j(V_i)$, extended by zero, and let $\varepsilon_i$ be the constant differential sign on $V_i$. The change-of-variables formula gives $\int_{V_i}\rho_i\sigma_j^*\alpha=\varepsilon_i\int_M f_i\alpha$. To bound the series, construct a smooth positive top form $\nu$ by patching positive chart volume forms with [F5], and choose $B$ with $|\alpha/\nu|\le B$ on compact $M$. Put $\beta=B\nu$. Smooth signed change of variables gives $\int_M f_i\beta=\varepsilon_i\int_{V_i}\rho_i\sigma_j^*\beta=\int_{V_i}\rho_i|\sigma_j^*\beta|$. Monotone convergence [F5] sums the latter nonnegative coefficients to $\int_{R_j}|\sigma_j^*\beta|<\infty$, since the pullback coefficient is bounded on the compact simplex. Therefore $\sum_i\int_M|f_i\alpha|\le\sum_i\int_M f_i\beta<\infty$. The Riemann–Lebesgue comparison in [F5] identifies the continuous compact-simplex coefficient integrals with these Lebesgue integrals. Thus positive and negative parts may be summed under the integral. For $y\notin N$, the pointwise signed weight is $\sum_i\varepsilon_i f_i(y)=\sum_{x\in F_j}\sum_{i:x\in V_i}\operatorname{sgn}(d\sigma_j(x))\rho_i(x)=\mu_j(y)$, since the partition sums to one at each preimage. Therefore $\int_{\Delta^m}\sigma_j^*\alpha=\int_M\mu_j\alpha$, with arbitrary values on the null set $N$. [F4, F5, step 1.2, given, algebra]

3.1 Summing the identity of step 2.2 with the coefficients $a_j$ and using $\mu=1$ outside $N$ from step 2.1 gives, for real $\alpha$ and $m\ge1$, $$\sum_{j=1}^Na_j\int_{\Delta^m}\sigma_j^*\alpha=\int_M\mu(y)\alpha(y)=\int_M\alpha(y),$$ which combined with step 1.1 proves $\langle J_M[\alpha],[M]\rangle=\int_M\alpha$. For complex $\alpha$ apply the real case to $\operatorname{Re}\alpha$ and $\operatorname{Im}\alpha$ and use the complex-linear extension of $J_M$, of the Kronecker pairing and of the integral. For $m=0$ the manifold is a finite set of points with orientation signs $\varepsilon(p)$, the fundamental class is $[M]=\sum_p\varepsilon(p)[p]$, the degree-zero comparison sends the class of a function $f$ to the evaluation classes $[f]=\sum_pf(p)[p]^*$, and both sides of the identity are $\sum_p\varepsilon(p)f(p)$ by the zero-dimensional convention in [F5]; the empty manifold gives $0=0$. The multiplicative consequence follows from the algebra isomorphism property of [F1] applied to the closed representatives. AC enters only through the $\mathrm{AC}_\omega$ recorded in the Given, which the de Rham comparison, smooth partitions of unity, smooth-chain comparison, manifold integration and Riemann–Lebesgue comparison require; Sard, excision, change of variables, monotone convergence and the local multiplier computation are choice-free. [step 1.1, step 2.1, step 2.2, F1, F5, given] ∎
