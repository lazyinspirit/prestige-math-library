---
id: lem-arith-coherent-kunneth-and-proper-image-dual
kind: lemma
title: "Coherent Kunneth, the tangent bound and the proper-image dual"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-abelian-variety-over-a-field
  - lem-arith-picard-representation-by-generic-quotient-and-translates
  - lem-theorem-of-the-square-and-mumford-homomorphism
  - lem-nonaffine-theorem-of-the-cube-for-abelian-variety
  - thm-differentials-smooth-locally-free
  - lem-nonaffine-connected-group-geometrically-connected
  - thm-nonempty-regular-locus-reduced-variety-perfect-field
  - thm-regular-equals-smooth-over-perfect-field
  - lem-proper-flat-fp-cohomology-perfect-complex
  - thm-cohomology-and-base-change
  - thm-noetherian-topological-space-dimension-vanishing
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - cor-kunneth-over-a-field
  - thm-cup-product-graded-associative-natural
  - thm-leray-spectral-sequence-for-sheaf-cohomology
  - thm-abelian-variety-is-projective
  - thm-ample-powers-very-ample-proper-base
  - lem-ample-stable-positive-power
  - lem-ample-pullback-finite-morphism
  - thm-global-functions-proper-integral-variety
  - thm-segre-line-bundle-external-tensor
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "B. Edixhoven, G. van der Geer, B. Moonen, Abelian Varieties (2012), 2.17-2.19 and Chapter 6 (Picard tangent and ampleness); closure in owner-arithmetic-models/dual-source/proof-closure-packet.md"
      url: "https://www.van-der-geer.nl/~gerard/AV.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied scheme and cohomology results. Let $A$ be an abelian variety of dimension $g$ over an algebraically closed field $k$. Then:

(a) $\dim_kH^1(A,\mathcal O_A)\le g$, and the tangent space of the Picard functor at the origin is $H^1(A,\mathcal O_A)$;

(b) the identity component $B=\operatorname{Pic}^0$ is a smooth proper connected group scheme of dimension $g$;

(c) every ample invertible sheaf $\mathcal L$ on $A$ gives a Mumford isogeny $\varphi_{\mathcal L}:A\to B$ with finite scheme-theoretic kernel.

## Facts & Assumptions

**Given:** AC and DC, an abelian variety $A$ of dimension $g$ over an algebraically closed field $k$, and an ample invertible sheaf $\mathcal L$ on $A$.

[F1] Coherent cohomology over a field is computed by the double Cech complex of two finite separated affine covers, with the Kunneth formula and the vanishing of higher cohomology on affine opens; the cup product makes $H^*(A,\mathcal O_A)$ a graded commutative algebra, and the addition law makes it a connected graded Hopf algebra ([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]], [[cor-kunneth-over-a-field]], [[thm-cup-product-graded-associative-natural]], [[thm-leray-spectral-sequence-for-sheaf-cohomology]], [[thm-noetherian-topological-space-dimension-vanishing]]).

[F2] The Picard functor is represented by a separated locally finite-type group scheme with universal rigidified bundle ([[lem-arith-picard-representation-by-generic-quotient-and-translates]]); the Mumford map and the theorem of the square are [[lem-theorem-of-the-square-and-mumford-homomorphism]] and [[lem-nonaffine-theorem-of-the-cube-for-abelian-variety]].

[F3] Invariant differentials trivialize $\Omega_A$: translation identifies the cotangent space at every point with that at the identity ([[thm-differentials-smooth-locally-free]]); the identity component of a smooth group over a perfect field is geometrically connected, regular points form a dense open, and regular equals smooth over a perfect field ([[lem-nonaffine-connected-group-geometrically-connected]], [[thm-nonempty-regular-locus-reduced-variety-perfect-field]], [[thm-regular-equals-smooth-over-perfect-field]]); ample powers are very ample after a proper morphism and amplify under tensor products and pullback along finite morphisms ([[thm-abelian-variety-is-projective]], [[thm-ample-powers-very-ample-proper-base]], [[lem-ample-stable-positive-power]], [[lem-ample-pullback-finite-morphism]], [[thm-segre-line-bundle-external-tensor]], [[thm-global-functions-proper-integral-variety]]).

## Proof

**Proof technique:** direct: bound $H^1$ by a Hopf-algebra primitivity argument, identify the Picard tangent space, then control the image of $\varphi_{\mathcal L}$ and its kernel.

1.1 By [F1] compute $H^*(A,\mathcal O_A)$ by the double Cech complex of two finite separated affine covers: on products of affine intersections the sections are tensor products, the two augmented Cech directions compute cohomology because affine quasi-coherent higher cohomology vanishes, and field Kunneth gives $H^*(A\times_kA,\mathcal O)=H^*(A,\mathcal O)\otimes_kH^*(A,\mathcal O)$ with Koszul signs. The addition law makes $H^*(A,\mathcal O_A)$ a connected graded Hopf algebra in which every element of $H^1$ is primitive. If $v_1,\dots,v_r\in H^1$ are linearly independent, apply the $r$-fold coproduct to $v_1\cdots v_r$ and project to $(H^1)^{\otimes r}$: the result is the signed sum over permutations of the independent tensors $v_{\sigma(1)}\otimes\cdots\otimes v_{\sigma(r)}$, all coefficients being $\pm1$, so it is nonzero even in characteristic two. Hence $H^r(A,\mathcal O_A)\ne0$ and therefore $r\le g$ by the vanishing above dimension $g$; no Borel structure theorem is needed. [F1, given, algebra]

2.1 The exponential sequence $1\to1+\varepsilon\mathcal O_A\to\mathcal O^*_{A[\varepsilon]}\to\mathcal O_A^*\to1$ on the dual numbers identifies the rigidified Picard tangent space with $H^1(A,\mathcal O_A)$, so its dimension is at most $g$ by step 1.1. [F1, F2, step 1.1, algebra]

3.1 It remains to justify finiteness of $K=\ker\varphi_{\mathcal L}$. The kernel is represented by the Picard scheme just constructed, and the normalized family $\Lambda(\mathcal L)$ is trivial on $A\times_kK$ by the universal property of the kernel. Over the algebraic closure, $Y=K^0_{\mathrm{red}}$ is a smooth connected proper subgroup, hence an abelian subvariety: a reduced finite-type group over a perfect field is smooth by translating its nonempty smooth locus. Restricting $\Lambda(\mathcal L)$ to $Y\times_kY$ and pulling back by $(\operatorname{id},-1)$ makes $\mathcal L|_Y\otimes[-1]^*\mathcal L|_Y$ trivial; it is ample because $\mathcal L|_Y$ is ample, inversion is an automorphism and tensor products of ample sheaves are ample. A trivial ample line bundle on a proper integral variety forces dimension zero: a high power embeds it, but all sections of the trivial bundle are scalars, so the embedding is constant. Hence $\dim Y=0$, so $K$ is zero-dimensional proper finite type and therefore finite, including its nonreduced structure. This is the EGM argument of the cited chapter; no pre-existing ample-kernel theorem is presumed. [F2, F3, step 2.1, algebra]

4.1 For an ample $\mathcal L$, the square and cube theorems [F2] with the kernel argument of step 3.1 define $\varphi_{\mathcal L}:A\to B=\operatorname{Pic}^0$ with finite scheme-theoretic kernel, hence image of dimension $g$. Since $A$ is proper and $B$ separated, the image of $\varphi_{\mathcal L}$ is closed, connected and of dimension $g$; at the identity $\dim\mathcal O_{B,0}\ge g$, while its embedding dimension is bounded by $g$ by step 2.1. Thus $\mathcal O_{B,0}$ is regular of dimension $g$, and translation makes $B$ smooth. The closed image has the same local dimension, so its defining ideal in this regular local domain is zero. It is therefore open and closed in the connected group $B$, hence $B$ itself, and $B=\operatorname{Pic}^0$ is a smooth proper connected group of dimension $g$; $\varphi_{\mathcal L}$ is an isogeny. The identity component represents precisely algebraically trivial classes on all tests: a connected family of line bundles maps into one connected component of the Picard scheme, so differences of its fibres lie in $B$; conversely the universal bundle on the connected finite-type scheme $B$ connects every geometric point to the identity. Since $B$ is open, a classifying map factors through it exactly when every geometric fibre class lies there, including on nonreduced tests. Invariant differentials trivialize $\Omega_A$ by [F3]. [F1, F2, F3, step 3.1, algebra] ∎ 