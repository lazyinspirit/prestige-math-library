---
id: lem-canonical-resolution-over-nonclosed-fields
kind: lemma
title: Canonical resolutions over non-algebraically-closed ground fields
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 14
deps:
- def-axiom-of-choice
- def-canonical-resolution-invariants
- def-algebraically-closed-field
- def-closed-immersion-schemes
- def-equivalence-of-marked-ideals
- def-etale-morphism-schemes
- def-field-extension-generated-subfields-and-simple-extension
- def-finite-galois-extension-and-galois-group
- def-marked-ideal
- def-smooth-morphism-schemes
- lem-canonical-resolution-commutes-with-ambient-embeddings
- lem-canonical-resolution-commutes-with-smooth-morphisms
- lem-canonical-resolution-under-field-isomorphisms
- prop-canonical-resolution-of-marked-ideals
- thm-prime-subfield-classification
- lem-galois-fixed-points-recover-a-finite-dimensional-scalar-extension
- thm-algebraic-embedding-extension
- lem-ag-geometric-regularity-field-tests
- thm-ag-standard-smooth-geometric-regularity
- thm-blowup-base-change-flat
- lem-derivative-ideals-have-the-same-support
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)
    url: https://arxiv.org/pdf/math/0401401
---

## Statement

Assume AC ([[def-axiom-of-choice]]).

Let $K$ be a field of characteristic zero, $\overline K$ an algebraic closure ([[def-algebraically-closed-field]]), $X$ a smooth $K$-scheme of finite type and $(\mathcal I,E,\mu)$ a marked ideal on $X$ with $\mu\ge1$ and $\mathcal I$ not identically zero on any irreducible component ([[def-marked-ideal]]).
Then $(\mathcal I,E,\mu)$ admits a canonical resolution over $K$: base changing to $\overline K$ and taking the canonical resolution of $(\mathcal I_{\overline K},E_{\overline K},\mu)$ gives a $\operatorname{Aut}_K(\overline K)$-equivariant resolution, where $\operatorname{Aut}_K(\overline K)$ denotes the automorphisms fixing $K$, which descends to a resolution of $(\mathcal I,E,\mu)$ over $K$.
This resolution commutes with smooth morphisms and, for mark-one inputs with empty boundary, has the ambient-embedding comparison of [[lem-canonical-resolution-commutes-with-ambient-embeddings]], and is natural under isomorphisms of the ground field.

## Facts & Assumptions

**Given:** A marked ideal $(\mathcal I,E,\mu)$ with $\mu\ge1$ and generic nonvanishing on every component of a smooth finite-type $K$-scheme $X$, with $K$ of characteristic zero, an algebraic closure $\overline K$ of $K$, the base change $(\overline X,\overline{\mathcal I},\overline E,\mu)$ over $\overline K$, and the Galois group $G=\operatorname{Aut}_K(\overline K)$.

[A1] [[def-axiom-of-choice]]: AC is assumed for the canonical-resolution consumer clauses and their cited AC-dependent construction suppliers.

[F1] [[prop-canonical-resolution-of-marked-ideals]]: over the algebraically closed field $\overline K$ the marked ideal $(\overline{\mathcal I},\overline E,\mu)$ admits a canonical resolution $(\overline X_i)_{0\le i\le m}$ with invariants satisfying the conditions of [[def-canonical-resolution-invariants]].

[F2] [[lem-canonical-resolution-under-field-isomorphisms]]: the canonical resolution is natural under semilinear isomorphisms of the ground field and schemes; for every $\sigma\in G=\operatorname{Aut}_K(\overline K)$, the induced semilinear automorphism of $\overline X$ transports the canonical resolution of $(\overline{\mathcal I},\overline E,\mu)$ to that of its pullback, which equals the same marked ideal because the original data are defined over $K$. Thus $\sigma$ acts on the canonical resolution.

[F3] For a $G$-stable ideal on $X_{\overline K}$, the finite-dimensional argument in step 2.1 below proves ideal descent. No quasi-coherent sheaf-descent theorem is inferred from the definitions of fields or Galois groups.

[F4] [[lem-canonical-resolution-commutes-with-smooth-morphisms]], [[lem-canonical-resolution-commutes-with-ambient-embeddings]]: the canonical resolution over $\overline K$ commutes with smooth morphisms; the closed-ambient-embedding comparison applies to the mark-one empty-boundary inputs of the cited embedding lemma.

[F5] [[lem-galois-fixed-points-recover-a-finite-dimensional-scalar-extension]]: a finite-dimensional semilinear space over a finite Galois extension $L/K$ is $L$-spanned by its invariant vectors; for the canonical scalar extension of a finite-dimensional $K$-space, the fixed vectors are exactly that $K$-space.

[F6] [[thm-algebraic-embedding-extension]]: under AC each automorphism of a finite Galois subextension of $\overline K/K$ extends to a $K$-automorphism of $\overline K$. The extension embedding is onto because its image is algebraically closed and $\overline K$ is algebraic over that image.

[F7] [[lem-ag-geometric-regularity-field-tests]], clause (3), and [[thm-ag-standard-smooth-geometric-regularity]], field case: a finite-type $K$-algebra whose extension to $\overline K$ is geometrically regular is geometrically regular, hence smooth over $K$.

## Proof

1.1 Galois equivariance. The positive marking is unchanged by base change, and generic nonvanishing persists: the field extension $K\subseteq\overline K$ is flat, and each generic point of a component of $X_{\overline K}$ lies over a generic point of a component of $X$, where $\mathcal I$ is the unit ideal. Thus the base-changed marked ideal satisfies the proposition's hypotheses. By [F2] each $\sigma\in G$ maps the canonical resolution $(\overline X_i)$ with its centers $\overline C_i$ to the canonical resolution of the same marked ideal; by uniqueness of the canonical resolution (its invariants are intrinsic) this conjugate resolution agrees with the original one, so the centers $\overline C_i$ and the invariant strata are $G$-stable. [A1, F1, F2]

2.1 Prove descent on an affine $\operatorname{Spec}A\subseteq X_i$ defined over $K$, with ideal $J_{\overline K}$ of the invariant center. For $f\in J_{\overline K}$ choose a finite-dimensional $K$-subspace $V\subseteq A$ containing its finitely many coefficient vectors, and a finite Galois subextension $L/K$ containing its scalar coefficients (adjoin the finitely many roots of their minimal polynomials). The space $W=J_{\overline K}\cap(V\otimes_KL)$ is stable under $\operatorname{Gal}(L/K)$ by [F6]. By [F5], $f$ is an $L$-linear combination of vectors in $W^{\operatorname{Gal}(L/K)}\subseteq V\subseteq A$. These invariant vectors belong to $J:=J_{\overline K}\cap A$, so $J_{\overline K}=J(A\otimes_K\overline K)$. The ideal $J$ is finitely generated because $A$ is Noetherian. Intersections with $A$ commute with localization: if a localized class lies in the extended ideal, some power of its denominator multiplies its numerator into that ideal and hence into $J$. Thus these affine ideals glue uniquely. By [F7] their quotient rings define smooth centers $C_i$ whose scalar extensions are the original $\overline C_i$. [A1, F2, F5, F6, F7, step 1.1, algebra]


3.1 The resolution over $K$. The blowup construction commutes with the faithfully flat base change $K\to\overline K$ ([[thm-blowup-base-change-flat]]), so the sequence $X_{i+1}=\operatorname{Bl}_{C_i}X_i$ over $K$ base changes to $\overline X_{i+1}$; by construction the supports satisfy $\operatorname{supp}(\mathcal I_i,\mu)_{\overline K}=\operatorname{supp}(\overline{\mathcal I}_i,\mu)$ by the derivative-support equality in characteristic zero, since derivative ideals commute with separable algebraic scalar extension; at the last stage both are empty, hence $\operatorname{supp}(\mathcal I_m,\mu)=\varnothing$ over $K$ and the sequence is a resolution of $(\mathcal I,E,\mu)$ over $K$. The closed superlevels of $\operatorname{inv}$ and the lexicographic pairs $(\operatorname{inv},\nu)$ and $(\operatorname{inv},\rho)$ are $G$-stable by step 1.1 and descend by the same ideal argument in step 2.1. Their finite ranges reconstruct unique functions over $K$: finite differences of primary superlevels determine $\{\operatorname{inv}=a\}$, and restricting the descended pair thresholds $(a,b)$ to this stratum gives its auxiliary superlevels. These sets determine each auxiliary value, are relatively closed on that stratum, and pull back to the original level sets. The descended primary and pair superlevels are closed, preserving the center maxima and every pointwise descent comparison. Thus the resolution is canonical, determined by the intrinsic resolution over $\overline K$; and it commutes with smooth morphisms and embeddings over $K$ by applying [F4] after base change to $\overline K$ and descending the equal center ideals by step 2.1. The blowups and their natural comparison maps are then defined over $K$ by their Rees-algebra constructions. SNC of the boundary and center descends as well: the individual divisors and their intersection quotients are smooth after scalar extension, and the exact codimensions are preserved by field extension, giving the strict normal crossings criterion (Stacks, tag 0BIA). [A1, F1, F2, F4, step 2.1] ∎ 
