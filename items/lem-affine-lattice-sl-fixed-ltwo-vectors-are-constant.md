---
dependency_level: 1
id: lem-affine-lattice-sl-fixed-ltwo-vectors-are-constant
kind: lemma
title: "Standard affine quotient measure and no extra SLd fixed vectors"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - lem-sl-integer-lattice-has-finite-covolume
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - lem-complex-lp-completeness-density-and-inner-product
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - def-countable-choice
proof_strategy: direct
sources:
  references:
    - title: "Kleinbock, Badly approximable systems of affine forms"
      url: "https://arxiv.org/pdf/math/9808057v2"
      locator: "§§1.7 and 4.2; invariant-fibre proof supplied here instead of importing the general mixing-transfer criterion"
---

## Statement

Assume Countable Choice and $d\ge2$. Put $G_0=\operatorname{SL}_d(\mathbb R)$, $\Gamma_0=\operatorname{SL}_d(\mathbb Z)$, $G=G_0\ltimes\mathbb R^d$ and $\Gamma=\Gamma_0\ltimes\mathbb Z^d$. The full affine quotient $\Omega=G/\Gamma$ has a smooth invariant probability measure. Its left translation action gives a strongly continuous unitary representation on the complex Hilbert space $L^2(\Omega)$. Its vectors fixed by the subgroup $G_0\times\{0\}$ are exactly the constants.

The subset $\Omega_0$ of affine lattices containing the origin is closed and null. It is retained in the full quotient; its complement is a distinct conull $G_0$-invariant subspace. In coordinates $(g,u)\mapsto(g,gu)$, $u\in\mathbb T^d$, the probability disintegrates into base quotient probability and normalized torus measure. Changing a base section acts on the fibre by an integer determinant-one linear map.

## Statement references

[Kleinbock, §§1.7 and 4.2](https://arxiv.org/pdf/math/9808057v2) — all translates belong to the affine quotient; the specialization is proved by fibre Fourier coefficients below.

## Facts & Assumptions

**Given:** Countable Choice and $d,G_0,\Gamma_0,G,\Gamma$ as stated, with affine multiplication $(g,v)(h,w)=(gh,v+gw)$.

[F1] Under Countable Choice, $G_0/\Gamma_0$ has finite positive smooth invariant quotient measure; its null sets lift to Haar-null sets, and its $L^2$ action is strongly continuous. The proof constructs countable quotient charts and the smooth invariant density. [[lem-sl-integer-lattice-has-finite-covolume]]

[F2] Under Countable Choice complex $L^2$ is a complete Hilbert space with first-variable-linear integral pairing. Finite simple functions are dense, and Euclidean compactly supported smooth functions are dense for finite exponents. [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[lem-complex-lp-completeness-density-and-inner-product]]

[F3] The coordinate characters on $\mathbb T^d$ form an orthonormal basis of $L^2(\mathbb T^d)$ under Countable Choice. In particular finite Bessel inequalities hold and zero Fourier coefficients imply a function is zero in $L^2$. [[thm-fourier-basis-and-parseval-on-the-n-torus]]

[F4] Fubini applies on sigma-finite smooth coordinate measures to integrable functions; localization to compact charts also permits the usual nonnegative null-set argument. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[A1] Countable Choice is assumed for the conditional Lie, integration, measure or dimension suppliers actually invoked below. No stronger Choice axiom is adopted. [[def-countable-choice]]

## Proof

**Proof technique:** explicit quotient coordinates and invariant fibre Fourier coefficients.

1.1 A Borel section of $G_0/\Gamma_0$ can be specified without a general section theorem. On each orbit $g\Gamma_0$ minimize the proper height $H(g)=\|g\|_F^2+\|g^{-1}\|_F^2$, and among the finitely many minimizers choose the lexicographically least matrix-entry tuple. The minimum exists: a bounded height bounds the integer matrix $\gamma$ in $g\gamma$, leaving finitely many possibilities. The selected set is Borel, expressed by countably many inequalities against the enumerated integer matrices. Right multiplication in affine fibre coordinates gives $(g,u)\sim(g\gamma,\gamma^{-1}(u+n))$ for $\gamma\in\Gamma_0,n\in\mathbb Z^d$. Thus the fibre is the torus, and every section change is $u\mapsto\gamma^{-1}u$, preserving its normalized measure. [F1, given, construct, algebra, A1]

2.1 Use the section and the product of normalized base measure and torus measure to define probability on $\Omega$. It does not depend on the section by step 1.1. Left multiplication by $(h,w)$ sends the base to $hg$ and, before section adjustment, the fibre to $u+g^{-1}h^{-1}w$; base invariance and torus translation invariance prove full affine invariance. In local base charts this is the product of a positive smooth base density and torus density. Its pullback to $G$ is smooth Haar volume: $(g,u)\mapsto(g,gu)$ has translation-coordinate Jacobian $\det g=1$. The integer affine subgroup is discrete, so countably many injective quotient charts cover it, exactly as in F1. Hence quotient-null sets lift to Haar-null sets. The zero section $u=0$ in each local torus bundle chart describes $\Omega_0$, so it is closed and null; these descriptions agree on overlaps, and the $G_0$ action preserves the zero section. [F1, F4, step 1.1, algebra]

3.1 The invariant action is unitary, and its $L^2$ space is Hilbert by F2. For a compactly supported continuous function, translation tends to the identity in $L^2$ by uniform continuity on a fixed compact neighbourhood of its support. Such functions are dense: use a countable chart exhaustion, approximate finite-measure simple indicators in charts, cut off inside compact subsets, and apply the Euclidean density in F2; on each compact chart the smooth positive density is bounded above and below. Finite sums of these approximations approximate an arbitrary $L^2$ function. Unitarity and the triangle inequality extend strong continuity to every vector. This uses the actual Countable Choice chart and integration framework, not a general Haar-continuity theorem with a stronger Choice premise. [F1, F2, step 2.1, algebra]

4.1 Let a vector be fixed by every element of $G_0$, and lift a representative to $f(g,u)$, locally $L^2$ on $G_0\times\mathbb T^d$. For $k\in\mathbb Z^d$ its fibre coefficient $c_k(g)=\int f(g,u)e(-k\cdot u)\,du$ is locally $L^2$ by Cauchy–Schwarz and F4. For every fixed $h\in G_0$ invariance gives $c_k(hg)=c_k(g)$ for almost every $g$. A measurable scalar function $c$ with this property is constant almost everywhere: the set $c(hg)\ne c(g)$ is null in the product $(h,g)$ by F4, and the smooth change of variables $(h,g)\mapsto(z=hg,g)$ preserves null sets on compact charts. Thus $c(z)=c(g)$ for almost every pair; one more application of F4 gives a fixed $g$ for which $c(z)=c(g)$ almost everywhere. Representatives may be taken Borel on countably many charts by approximating their measurable level sets by Borel sets modulo null sets. Therefore $c_k(g)=b_k$ almost everywhere. [F4, step 2.1, step 3.1, algebra]

5.1 The countable frequency set gives a common conull set on which all these coefficient identities hold and the fibre is $L^2$. Quotient compatibility says $f(g\gamma,\gamma^{-1}u)=f(g,u)$, and torus substitution gives $c_k(g\gamma)=c_{\gamma^{-T}k}(g)$. Since Haar right translation preserves null sets, the almost-everywhere constants satisfy $b_{\gamma^Tk}=b_k$. For $k\ne0$, take an index $i$ with $k_i\ne0$ and an index $j\ne i$. The matrices $\gamma_n=I+n e_{ij}$ give the distinct frequencies $\gamma_n^Tk=k+n k_i e_j$. Finite Bessel in F3 at one typical fibre forces $b_k=0$: otherwise arbitrarily many equal nonzero squared coefficients would exceed its finite $L^2$ norm. [F3, F4, step 1.1, step 4.1, algebra]

6.1 The zero-frequency coefficient is the constant $b_0$, and all other coefficients vanish by step 5.1. Completeness in F3 gives $f(g,\cdot)=b_0$ for almost every $g$; F4 and the quotient-null lift property then give the original function equal to $b_0$ almost everywhere on $\Omega$. Constants are plainly fixed. Together with steps 2.1–3.1 this proves every stated measure, continuity and invariant-vector assertion on the full quotient. [F3, F4, step 2.1, step 3.1, step 5.1, algebra] ∎

