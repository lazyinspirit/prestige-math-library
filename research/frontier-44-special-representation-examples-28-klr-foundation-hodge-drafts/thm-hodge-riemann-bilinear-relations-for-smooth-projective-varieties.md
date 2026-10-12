---
id: "thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties"
kind: "theorem"
title: "Hodge–Riemann bilinear relations for smooth projective varieties"
status: "draft"
origin: "session"
deps: ["lem-de-rham-top-integral-is-fundamental-class-evaluation", "lem-smooth-projective-analytification-has-rational-kahler-polarization", "def-compact-kahler-manifold-and-hodge-polarization-conventions", "lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity", "thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms", "thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz", "lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds", "lem-first-chern-form-agrees-with-the-topological-line-class", "thm-general-stokes-theorem"]
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Christian Schnell, Complex Manifolds, MAT 545, Fall 2024, classes 16–18", "url": "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"}]}
proof_strategy: direct
---

## Statement

Let $X$ be a compact Kähler $n$-fold and $0\le k\le n$. On primitive $P^k$ set
$$Q_k(a,b)=\epsilon(k)\int_Xa\wedge b\wedge\omega^{n-k}.$$
This is $(-1)^k$-symmetric, pairs $P^{p,q}$ only with $P^{q,p}$, and for nonzero $a\in P^{p,q}$,
$$i^{p-q}Q_k(a,\bar a)=(n-k)!\|a_{\mathrm{harm}}\|_{L^2}^2>0.$$
If $[\omega]=\ell\in H^2(X;\mathbb Q)$, $Q_k$ is a rational polarization of $P^k$. Full $H^k$ is polarized by the orthogonal direct sum form that on $L^rP^{k-2r}$ is $(-1)^rQ_k$; degrees $k>n$ are polarized by transporting the polarization of $H^{2n-k}$ along $L^{k-n}$, with Tate shift. In particular this applies to smooth closed complex projective submanifolds with a hyperplane polarization, and hence to smooth projective complex varieties through their smooth projective analytifications. More generally it applies to every real Kähler class, including $\ell+\varepsilon\eta$ when represented by a positive closed form. For any continuous family of Kähler classes the primitive kernels vary continuously as subspaces; rational primitive spaces are asserted only at rational classes.

## Facts & Assumptions

**Given:** The data and hypotheses of the Statement.

[F1] The star/Weil proof is [[lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity]], harmonic identification is [[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]], and rational primitive decomposition is [[thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz]]. Projective integrality is [[lem-first-chern-form-agrees-with-the-topological-line-class]].

## Proof

1.1 Stokes proves representative independence of the integral: replacing $a$ by $a+du$ changes the integrand by $d(u\wedge b\wedge\omega^{n-k})$ when $b$ is closed, and similarly for $b$. Wedge signs give $Q_k(b,a)=(-1)^kQ_k(a,b)$. Type $(p,q)$ and $(a,b)$ can pair only if $p+a+n-k=q+b+n-k=n$, namely $(a,b)=(q,p)$. Hard Lefschetz identifies primitive classes with primitive harmonic forms. The pointwise Weil star identity applied to $\bar a$ gives $*\bar a=\epsilon(k)i^{p-q}L^{n-k}\bar a/(n-k)!$. Integrating $a\wedge *\bar a$ proves the displayed positive norm equality and nondegeneracy, because $Q_k(Ca,\bar a)$ is positive on every type and different types are Hermitian orthogonal. If $\ell$ is rational, the top-integral/fundamental-evaluation lemma and de Rham/cup comparison identify $Q_k$ with $\epsilon(k)\langle a\smile b\smile\ell^{n-k},[X]\rangle$, a rational number on rational classes. Thus the definition of polarization is satisfied. [given, algebra]

2.1 For degree $k\le n$, let $a=L^ru$, $b=L^rv$ with primitive degree $t=k-2r$. Since $\epsilon(k)=(-1)^r\epsilon(t)$, one has $Q_k(L^ru,L^rv)=(-1)^rQ_t(u,v)$. Distinct string summands are orthogonal: for $r<s$, the integral contains $L^{n-k+r+s}u=L^{n-t+s-r}u=0$, since $u$ is primitive. Thus changing $Q_k$ by $(-1)^r$ on the $r$th rational summand makes its Weil Hermitian form positive on every summand. Rational decomposition from hard Lefschetz makes this a rational bilinear form. For $k>n$, transport the low-degree form along the rational isomorphism $L^{k-n}$; this shifts both Hodge indices by $k-n$, preserving their difference and the symmetry parity. This proves a polarization of every degree. [step 1.1, given, algebra]

3.1 On the affine chart of $\mathbb P^N$ define $\omega_{FS}=\frac{i}{2\pi}\partial\bar\partial\log(1+\sum|z_j|^2)$. The Hermitian matrix is $( (1+|z|^2)\delta_{jl}-\bar z_jz_l)/(2\pi(1+|z|^2)^2)$; for nonzero $v$, Cauchy–Schwarz gives numerator at least $|v|^2>0$. Changes of chart add logarithms of the squared modulus of a nowhere-zero holomorphic function; their $\partial\bar\partial$ vanishes, so these forms glue and are closed. Restriction to a smooth complex submanifold remains positive and closed. The local metric of $\mathcal O(1)$ has weight $(1+|z|^2)^{-1}$; its Chern connection has curvature $\Omega=\partial\bar\partial\log(1+|z|^2)$ and normalized first Chern form $-\Omega/(2\pi i)=\omega_{FS}$. The published first-Chern comparison therefore identifies its class with the integral hyperplane class. Compactness supplies the compact Kähler hypotheses, so steps 1.1–2.1 apply to projective embeddings, and any ample line bundle is handled by the embedding from a positive tensor power, scaling its form by that power. [step 1.1, step 2.1, given, algebra, construct]

4.1 In fixed finite-dimensional cohomology, $A(\omega)=L^{n-k+1}:H^k\to H^{2n-k+2}$ has constant rank among Kähler classes: the primitive decomposition gives its rank as $\dim H^{k-2}$ (zero when $k<2$), a topological constant. Near any chosen parameter select a nonvanishing maximal minor of its continuous matrix. That minor stays invertible nearby; solving the corresponding pivot equations expresses the kernel as the graph of a continuously varying matrix over the remaining coordinate subspace. Thus primitive kernels vary continuously, with no rationality claimed at irrational parameters. Positivity for each real Kähler class follows directly from step 1.1 for that metric; continuity alone is not used to infer strict positivity at a limiting non-Kähler class. [step 1.1, given, algebra] ∎
