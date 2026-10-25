---
id: lem-global-residue-pairing-dimension-balance
kind: lemma
title: "The two sides of the residue pairing have the same dimension"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-projective-embedding-every-smooth-proper-curve
  - def-axiom-of-choice
  - def-canonical-line-bundle-curve
  - def-invertible-sheaf
  - def-locally-free-sheaf-finite-rank
  - def-residue-pairing-principal-parts
  - def-sheaf-tensor-product
  - lem-global-residue-pairing-injective-left
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Tate, Residues of differentials on curves, Ann. Sci. E.N.S. (4) 1 (1968) 149-159"
      url: "http://www.numdam.org/article/ASENS_1968_4_1_1_149_0.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "MIT 18.725 Algebraic Geometry (Fall 2015) course notes, Lectures 24-25"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the duality suppliers. Let $C$
be a smooth proper geometrically integral curve over a perfect field $k$ and
let $\mathcal L$ be an invertible sheaf on $C$. Then
$$\dim_kH^1(C,\mathcal L)=\dim_kH^0(C,\omega_C\otimes\mathcal L^{-1});$$
both spaces are finite-dimensional and the equality is the numerical form of
Serre duality for $\mathcal L$, obtained from the published duality theorem
for smooth projective varieties after
[[cor-projective-embedding-every-smooth-proper-curve]] makes $C$ projective.
Combined with [[lem-global-residue-pairing-injective-left]] this shows that
the residue pairing of [[def-residue-pairing-principal-parts]] is a perfect
pairing over perfect $k$.

## Facts & Assumptions

**Given:** the Axiom of Choice; a perfect field $k$; a smooth proper
geometrically integral curve $C$ over $k$; and an invertible
$\mathcal O_C$-module $\mathcal L$.

[F1] The Axiom of Choice: every family of nonempty sets has a choice function
([[def-axiom-of-choice]]).

[F2] $\omega_C=\Omega^1_{C/k}$ is the canonical bundle, an invertible
$\mathcal O_C$-module; and $C$ is a smooth curve over $k$, so it is a
$k$-scheme of finite type whose underlying space has chain dimension one, with
smooth structure morphism, and it is proper over $k$
([[def-canonical-line-bundle-curve]], [[def-invertible-sheaf]]).

[F3] An invertible $\mathcal O_X$-module $\mathcal L$ is locally free of rank
one; its dual
$\mathcal L^\vee=\mathcal Hom_{\mathcal O_X}(\mathcal L,\mathcal O_X)$ is again
invertible of rank one, and
$\mathcal L^\vee\otimes_{\mathcal O_X}\mathcal L$ is canonically
$\mathcal O_X$. The sheaf $\mathcal L^{-1}$ is the dual $\mathcal L^\vee$, and
the tensor product of $\mathcal O_X$-modules is the sheafification of the
componentwise tensor presheaf
([[def-invertible-sheaf]], [[def-locally-free-sheaf-finite-rank]],
[[def-sheaf-tensor-product]]).

[F4] The residue pairing
$\langle-,-\rangle\colon H^1(C,\mathcal L)\times
H^0(C,\omega_C\otimes\mathcal L^{-1})\to k$ of
[[def-residue-pairing-principal-parts]] is $k$-bilinear, and the induced
$k$-linear map
$\Phi\colon H^0(C,\omega_C\otimes\mathcal L^{-1})\to H^1(C,\mathcal L)^*$,
$s\mapsto(c\mapsto\langle c,s\rangle)$, is injective; equivalently, whenever
the two sides are finite-dimensional of equal dimension, $\Phi$ is an
isomorphism ([[lem-global-residue-pairing-injective-left]]).

[F5] Let $X$ be a smooth projective $k$-scheme of pure dimension $n$ and let
$E$ be a finite locally free $\mathcal O_X$-module. With
$\omega_X=\bigwedge^n\Omega^1_{X/k}$ there is a normalized trace
$t_X\colon H^n(X,\omega_X)\to k$, independent of a projective embedding, such
that for every $0\le q\le n$ the cup product, contraction and trace give a
functorial perfect pairing of finite-dimensional $k$-vector spaces
$$H^q(X,E)\times H^{n-q}(X,E^\vee\otimes\omega_X)\longrightarrow H^n(X,\omega_X)\xrightarrow{t_X}k;$$ outside $0\le q\le n$ the relevant
cohomology groups vanish
([[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]).

[F6] Every smooth proper geometrically integral curve $C$ over a field $k$
admits a closed immersion $i\colon C\to\mathbf P^N_k$ over $k$; equivalently
the structure morphism $C\to\operatorname{Spec}k$ is projective in the
H-projective convention
([[cor-projective-embedding-every-smooth-proper-curve]]).

## Proof
**Proof technique:** direct; apply the published smooth-projective duality
theorem to the curve and the rank-one module $\mathcal L$ in degree $q=1$, and
combine injectivity with equal finite dimensions.

1.1 By [F6] the curve $C$ is projective over $k$, and it is smooth over $k$ with underlying space of dimension one, so $X=C$ satisfies the hypotheses of the duality theorem [F5] with pure dimension $n=1$; moreover $\omega_C=\bigwedge^1\Omega^1_{C/k}$ agrees with the canonical bundle of [F2]. [F2, F5, F6]

1.2 The invertible sheaf $\mathcal L$ is locally free of rank one, hence a finite locally free $\mathcal O_C$-module of rank $r=1$ as required for the module $E=\mathcal L$ in [F5]. [F3]

2.1 Apply the duality theorem [F5] to $X=C$, $n=1$, $E=\mathcal L$ and $q=1$: the cup product, contraction and normalized trace $t_C\colon H^1(C,\omega_C)\to k$ give a perfect $k$-bilinear pairing $$H^1(C,\mathcal L)\times H^0(C,\mathcal L^\vee\otimes\omega_C)\longrightarrow H^1(C,\omega_C) \xrightarrow{t_C}k,$$ and both $k$-vector spaces are finite-dimensional; perfectness makes the induced map to the dual an isomorphism, so their $k$-dimensions are equal. [F5, step 1.1, step 1.2]

3.1 The dual $\mathcal L^\vee$ is the inverse $\mathcal L^{-1}$ of $\mathcal L$ in the Picard group of invertible sheaves, so the invertible sheaves $\mathcal L^\vee\otimes\omega_C$ and $\omega_C\otimes\mathcal L^{-1}$ are canonically isomorphic; consequently their spaces of global sections are $k$-linearly isomorphic. [F3, step 2.1]

4.1 Combining steps 2.1 and 3.1, $\dim_kH^1(C,\mathcal L)=\dim_kH^0(C,\omega_C\otimes\mathcal L^{-1})$, both spaces finite-dimensional: this is the numerical form of Serre duality for the invertible sheaf $\mathcal L$ on the curve. [F5, step 2.1, step 3.1]

5.1 The map $\Phi\colon H^0(C,\omega_C\otimes\mathcal L^{-1})\to H^1(C,\mathcal L)^*$ induced by the residue pairing is $k$-linear and injective by [F4], and step 4.1 exhibits its source and target as finite-dimensional $k$-vector spaces of the same dimension; an injective linear map between such spaces is an isomorphism, hence every nonzero class in $H^1(C,\mathcal L)$ is detected by a global section and the residue pairing is perfect. The only choice-theoretic input is the Axiom of Choice inherited through the duality and residue suppliers [F1]. [F1, F4, step 4.1] ∎
