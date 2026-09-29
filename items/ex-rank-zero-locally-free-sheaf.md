---
id: ex-rank-zero-locally-free-sheaf
kind: example
title: The rank-zero bundle
status: draft
origin: pipeline
deps:
  - def-locally-free-sheaf-finite-rank
  - def-vector-bundle-scheme
  - def-symmetric-algebra-qc-module
  - lem-relative-spec-glues-affine-algebras
  - thm-affine-morphism-relative-spec-characterization
  - def-fibre-of-module-at-point
  - def-residue-field-scheme-point
  - def-module-on-ringed-space
  - def-scheme-over-base
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
generation:
  role: example
pipeline_run: frontier-36-complete
---

## Example

Let $X$ be a scheme ([[def-scheme-over-base]]) and let $0$ denote the zero
$\mathcal O_X$-module ([[def-module-on-ringed-space]]). Then:

1. $0$ is finite locally free of rank $0$
   ([[def-locally-free-sheaf-finite-rank]]).
2. Its geometric total space is
   $$\mathbb V(0)=\operatorname{Spec}_X\operatorname{Sym}(0)=X,$$
   the identity $X$-scheme, of rank $0$ ([[def-vector-bundle-scheme]]).
3. Above each point $x\in X$ the total space has exactly one point, the zero
   vector, and the module fibre $0(x)$ is the zero $\kappa(x)$-vector space,
   with exactly one element ([[def-fibre-of-module-at-point]],
   [[def-residue-field-scheme-point]]).

Thus rank $0$ is a legitimate value of the rank function: the zero module is
not excluded from the equivalence between finite locally free sheaves and
geometric vector bundles, and it corresponds to the bundle whose total space
is the base itself.

## Facts & Assumptions

**Given:** A scheme $X$ and the zero $\mathcal O_X$-module $0$.

[F1] Finite local freeness and rank ([[def-locally-free-sheaf-finite-rank]]):
$\mathcal O_X^0=0$ and the zero sheaf is locally free of rank $0$; a locally
free sheaf is quasi-coherent, its rank is well defined and locally constant,
and restriction to an open subscheme preserves local freeness with the same
rank.

[F2] Geometric vector bundles ([[def-vector-bundle-scheme]]): a geometric
vector bundle is an affine $X$-scheme with a normalised grading on its
relative coordinate algebra, locally graded-isomorphic to
$\operatorname{Sym}(\mathcal O_U^r)$; its rank is the rank of the degree-one
part $\mathcal A_1$; the total space of a finite locally free $\mathcal E$ is
$\mathbb V(\mathcal E)=\operatorname{Spec}_X\operatorname{Sym}(\mathcal
E^\vee)$, and for $\mathcal E=0$ one has $\operatorname{Sym}(0)=\mathcal O_X$
and $\mathbb V(0)=\operatorname{Spec}_X\mathcal O_X=X$ with the identity
structure morphism.

[F3] Symmetric algebras ([[def-symmetric-algebra-qc-module]]):
$\operatorname{Sym}^0(\mathcal F)=\mathcal O_X$,
$\operatorname{Sym}^1(\mathcal F)=\mathcal F$, and
$\operatorname{Sym}(\mathcal F)$ is generated in degree one, so for
$\mathcal F=0$ all positive graded parts vanish and
$\operatorname{Sym}(0)=\mathcal O_X$; also
$\operatorname{Sym}(\mathcal O_X^r)\cong\mathcal O_X[T_1,\dots,T_r]$ with
degree-one generators, the case $r=0$ being $\mathcal O_X$ itself.

[F4] Relative spectra ([[lem-relative-spec-glues-affine-algebras]],
[[thm-affine-morphism-relative-spec-characterization]]): for an affine-locally
module-associated algebra sheaf the relative spectrum has
$\pi^{-1}(U)\cong\operatorname{Spec}\Gamma(U,\mathcal A)$ on affine
$U\subseteq X$, these charts are compatible under restriction, and the
structure morphism is affine with pushforward $\mathcal A$; for
$\mathcal A=\mathcal O_X$ each chart is
$\operatorname{Spec}\Gamma(U,\mathcal O_X)=U$, so the relative spectrum is
$X$ with the identity morphism.

[F5] Fibres at a point ([[def-fibre-of-module-at-point]],
[[def-residue-field-scheme-point]]): the fibre of an $\mathcal O_X$-module
$\mathcal F$ at $x$ is the $\kappa(x)$-vector space
$\mathcal F(x)=\mathcal F_x\otimes_{\mathcal O_{X,x}}\kappa(x)$; for
$\mathcal F=0$ the stalk and the fibre are $0$, the zero vector space with
exactly one element.

[F6] Choice accounting: the only Axiom of Choice is the one inherited from
the relative-spectrum and symmetric-algebra constructions of [F2] to [F4]
([[def-axiom-of-choice]]).

**Proof technique:** direct; compute the local freeness, the symmetric
algebra, the relative spectrum and the fibres of the zero module.



## Proof

1.1 Local freeness. On every open $U\subseteq X$ the restriction of the zero module is the zero $\mathcal O_U$-module, and $0=\mathcal O_U^0$; hence the single chart $U=X$ with $r=0$ satisfies the definition of finite local freeness, so $0$ is finite locally free of rank $0$ and quasi-coherent, with locally constant rank function $0$. [F1]

1.2 The symmetric algebra. $\operatorname{Sym}(0)$ has $\operatorname{Sym}^0(0)=\mathcal O_X$ and $\operatorname{Sym}^1(0)=0$ and is generated in degree one; hence all its positive graded parts vanish and $\operatorname{Sym}(0)=\mathcal O_X$ with degree-one part $0$, the case $r=0$ of $\operatorname{Sym}(\mathcal O_X^r)=\mathcal O_X[T_1,\dots,T_r]$. [F3]

1.3 The total space. The dual of the zero module is again $0$, so $\mathbb V(0)=\operatorname{Spec}_X\operatorname{Sym}(0)=\operatorname{Spec}_X\mathcal O_X$; on an affine chart $U=\operatorname{Spec}R\subseteq X$ the relative spectrum of $\mathcal O_X$ has $\pi^{-1}(U)=\operatorname{Spec}\Gamma(U,\mathcal O_X)=\operatorname{Spec}R=U$, with the identity transition maps on inclusions, so the glued structure morphism is the identity of $X$ and $\mathbb V(0)=X$. [F2, F4]

1.4 Rank. The relative coordinate algebra of $\mathbb V(0)$ is $\mathcal O_X$ with degree-one part $(\mathcal O_X)_1=0=\mathcal O_X^0$, so the rank function of this geometric vector bundle is identically $0$, and dually its sheaf of sections is $0^\vee=0$. [F2, F3]

2.1 Fibres. Since the structure morphism of $\mathbb V(0)$ is the identity, the preimage of a point $x\in X$ is the one-point set $\{x\}$: the fibre of the bundle contains exactly one point, the zero vector, above $x$. On the module side the fibre of $0$ at $x$ is $0(x)=0_x\otimes_{\mathcal O_{X,x}}\kappa(x)=0$, the zero $\kappa(x)$-vector space with exactly one element, so the geometric and linear descriptions of the rank-zero fibre agree. [F5, step 1.3]

3.1 Conclusion and choice. The zero sheaf is finite locally free of rank $0$, its total space is $\mathbb V(0)=X$ with the identity structure morphism, of rank $0$, and every fibre contains exactly the zero vector; the construction uses the single chart $X=U$ and canonical maps, so no choice beyond the inherited Axiom of Choice of [F6] is made. [F6, step 1.1, step 1.3, step 1.4, step 2.1] ∎
