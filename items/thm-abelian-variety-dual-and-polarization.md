---
id: thm-abelian-variety-dual-and-polarization
kind: theorem
title: "The dual abelian variety, the Poincare bundle and polarizations"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-rigidified-relative-picard-functor-and-dual-abelian-variety
  - def-abelian-variety-over-a-field
  - def-polarization-of-an-abelian-variety
  - lem-theorem-of-the-square-and-mumford-homomorphism
  - lem-arith-dual-and-poincare-bundle-finite-field-descent
  - lem-arith-dual-isogeny-kernel-and-abelian-biduality
  - lem-arith-symmetric-homomorphism-is-a-mumford-map
  - lem-arith-polarization-and-picard-twist-ampleness
  - lem-arith-mumford-map-degree-is-euler-characteristic-square
  - thm-abelian-variety-is-projective
  - thm-nonaffine-group-scheme-normal-subgroup-quotient
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "B. Edixhoven, G. van der Geer, B. Moonen, Abelian Varieties (2012), Chapters 6, 8, 9 and 11 (dual abelian variety, Poincare bundle, Mumford maps and polarizations)"
      url: "https://www.van-der-geer.nl/~gerard/AV.pdf"
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models (1990), 8.1 (rigidified relative Picard functor and dual abelian variety)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from projectivity and the supplied cohomology machinery. Let $A$ be an abelian variety over a field $k$, of dimension $g$. Then:

(a) [existence and duality] the degree-zero part of the rigidified relative Picard functor of $A/k$ ([[def-rigidified-relative-picard-functor-and-dual-abelian-variety]]) is representable by an abelian variety $\hat A$, the dual abelian variety, of dimension $g$, with universal Poincare sheaf $\mathcal P$ on $A\times_k\hat A$; the canonical homomorphism $A\to\hat{\hat A}$ is an isomorphism;

(b) [functoriality] $A\mapsto\hat A$ is a contravariant functor on abelian varieties over $k$, and for every isogeny $f:A\to B$ the dual $f^\vee:\hat B\to\hat A$ is an isogeny with kernel the Cartier dual of $\ker f$ and degree $\deg f^\vee=\deg f$;

(c) [Mumford maps] for every invertible sheaf $\mathcal L$ on $A$ the Mumford homomorphism $\varphi_{\mathcal L}:A\to\hat A$ exists; if $\mathcal L$ is ample then $\varphi_{\mathcal L}$ is a symmetric isogeny with finite kernel $K(\mathcal L)$; every symmetric homomorphism $A\to\hat A$ is $\varphi_{\mathcal L}$ for some invertible sheaf $\mathcal L$ after base change to a separably closed field;

(d) [polarizations] an ample $\mathcal L$ makes $\varphi_{\mathcal L}$ a polarization, every abelian variety admits a polarization, the degree of a polarization is a perfect square, and $A$ is projective.

## Facts & Assumptions

**Given:** AC and DC, an abelian variety $A$ of dimension $g$ over a field $k$, and the rigidified relative Picard functor of [[def-rigidified-relative-picard-functor-and-dual-abelian-variety]].

[F1] The algebraically trivial rigidified Picard subfunctor is represented by an abelian variety $A^\vee$ of dimension $g$ with a normalized Poincare bundle on $A\times_kA^\vee$, and the formation and universal property are compatible with field extension ([[lem-arith-dual-and-poincare-bundle-finite-field-descent]]).

[F2] Duality is contravariantly functorial on homomorphisms: for composable homomorphisms $f:A\to B$ and $g:B\to C$, $(g\circ f)^\vee=f^\vee\circ g^\vee$; it is additive for parallel homomorphisms $f,g:A\to B$, so $(f+g)^\vee=f^\vee+g^\vee$. If $f$ is an isogeny, then $f^\vee$ is an isogeny with kernel $(\ker f)^D$ and degree $\deg f^\vee=\deg f$. The canonical biduality morphism $\kappa_A:A\to A^{\vee\vee}$ is an isomorphism and is natural in $A$ ([[lem-arith-dual-isogeny-kernel-and-abelian-biduality]], [[thm-nonaffine-group-scheme-normal-subgroup-quotient]]).

[F3] The theorem of the square makes $\varphi_{\mathcal L}$ a homomorphism into the degree-zero part for every invertible sheaf $\mathcal L$ ([[lem-theorem-of-the-square-and-mumford-homomorphism]]); ample bundles give symmetric isogenies and every symmetric homomorphism is a Mumford map over a separably closed field, with finite separable realization in general ([[lem-arith-polarization-and-picard-twist-ampleness]], [[lem-arith-symmetric-homomorphism-is-a-mumford-map]]).

[F4] Every abelian variety is projective and therefore carries an ample invertible sheaf; the degree of any polarization equals $\chi(A,\mathcal L)^2$ for an ample $\mathcal L$ realizing it ([[thm-abelian-variety-is-projective]], [[lem-arith-mumford-map-degree-is-euler-characteristic-square]], [[def-polarization-of-an-abelian-variety]]).

## Proof

**Proof technique:** direct: assemble the commissioned clauses from the constructed dual, the dual-isogeny calculus, the symmetric-map realization and the square-degree computation.

1.1 Clause (a) is [F1]: the degree-zero rigidified Picard subfunctor is represented by an abelian variety $\hat A=A^\vee$ of dimension $\dim A=g$ with universal normalized Poincare sheaf $\mathcal P$ on $A\times_kA^\vee$, and the formation is compatible with field extension. The canonical morphism $\kappa_A:A\to A^{\vee\vee}$ is an isomorphism by [F2], which is the biduality statement of (a). [F1, F2, given, construct]

1.2 Clause (b) is [F2]: pullback of rigidified bundles defines the dual homomorphism for every homomorphism. Composition is contravariant for composable homomorphisms $f:A\to B$, $g:B\to C$, and additivity $(f+g)^\vee=f^\vee+g^\vee$ is for parallel homomorphisms $f,g:A\to B$. When $f$ is an isogeny, $f^\vee$ is an isogeny with kernel $(\ker f)^D$ and degree $\deg f$. Thus $A\mapsto\hat A$ is a contravariant functor, and the duality identities used here have the required domains. [F2, given, algebra]

1.3 Clause (c): for an invertible sheaf $\mathcal L$ the Mumford map $\varphi_{\mathcal L}$ is a homomorphism into $\hat A$ by [F3]; if $\mathcal L$ is ample, [F3] gives that $\varphi_{\mathcal L}$ is a symmetric isogeny with finite kernel $K(\mathcal L)$. Conversely, if $\lambda:A\to\hat A$ is symmetric, then over a separably closed extension field [F3] realizes $\lambda$ as $\varphi_{\mathcal L}$ for an invertible $\mathcal L$; over an arbitrary field the realization exists after a finite separable extension in general, as stated. [F3, given, construct]

2.1 Clause (d): if $\mathcal L$ is ample, [F3] shows that $\varphi_{\mathcal L}$ is a symmetric isogeny with $(\operatorname{id},\varphi_{\mathcal L})^*\mathcal P$ ample, so it is a polarization by definition; every $A$ is projective by [F4] and hence carries an ample $\mathcal L$, giving a polarization. For any polarization $\lambda$ realized by an ample $\mathcal L$ over an algebraic closure, [F4] gives $\deg\lambda=\chi(A_{\bar k},\mathcal L)^2$, a perfect square, and the degree is unchanged by field extension. Projectivity of $A$ is [F4]. [F3, F4, given, algebra] ∎ 
