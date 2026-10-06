---
id: lem-arith-rigidified-line-bundle-descent
kind: lemma
title: "Rigidification and effective descent of line bundles"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-abelian-variety-over-a-field
  - def-rigidified-relative-picard-functor-and-dual-abelian-variety
  - lem-abelian-scheme-universal-structure-sheaf-sections
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
  - lem-nonaffine-global-sections-flat-field-base-change
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "S. Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 8.1 (rigidified line bundles and fppf descent)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied scheme and cohomology results. Let $A$ be an abelian variety over a field $k$ with identity $e$ ([[def-abelian-variety-over-a-field]]) and let $T$ be a $k$-scheme, with $A_T=A\times_kT$, unit section $e_T$, and projection $p_T:A_T\to T$. Then the rigidified line-bundle functor of [[def-rigidified-relative-picard-functor-and-dual-abelian-variety]] is an fppf sheaf on all $k$-schemes, rigidified line bundles have no nontrivial automorphisms, and the normalization $\mathcal L\mapsto\mathcal L\otimes p_T^*e_T^*\mathcal L^{-1}$ identifies the rigidified classes over $T$ with $\operatorname{Pic}(A_T)/p_T^*\operatorname{Pic}(T)$.

## Facts & Assumptions

**Given:** AC and DC, an abelian variety $A/k$ with identity $e$, a $k$-scheme $T$, and the base-changed abelian scheme $A_T\to T$.

[F1] For every $T$ the unit map $\mathcal O_T\to p_{T,*}\mathcal O_{A_T}$ is an isomorphism with inverse evaluation along $e_T$; in particular every global function comes from the test base ([[lem-abelian-scheme-universal-structure-sheaf-sections]], assuming AC and DC).

[F2] Global sections are compatible with flat field base change, so the computation of $H^0$ may be done after extending the base field ([[lem-nonaffine-global-sections-flat-field-base-change]]); faithfully flat descent of modules and algebras is effective ([[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]).

## Proof

**Proof technique:** direct: normalize to remove constants, observe automorphism-freeness, and descend along an fppf cover.

1.1 For an affine test $T=\operatorname{Spec}R$ the universal-sections statement [F1] gives $\Gamma(A_T,\mathcal O)=R$ compatibly with base change; on a finite affine Cech cover of $A_T$ the cohomology complex computing $H^0$ is obtained by tensoring the field cohomology complex, whose $H^0$ is $k$, and hence has $H^0=R$. It follows that the normalization $\mathcal L\mapsto\mathcal L\otimes p_T^*e_T^*\mathcal L^{-1}$ is well defined on isomorphism classes and identifies rigidified classes with $\operatorname{Pic}(A_T)/p_T^*\operatorname{Pic}(T)$: tensoring by constants is exactly the ambiguity removed by the trivialisation along $e_T$. [F1, F2, given, algebra]

2.1 A rigidified line bundle has no nontrivial automorphism: an automorphism of $(\mathcal L,\alpha)$ is a unit of $\mathcal O_T$ acting on $\mathcal L$, and compatibility with the rigidification forces it to restrict to $1$ along $e_T$; since $e_T$ is a section, the unit is $1$. Consequently isomorphism data on overlaps of an fppf cover are unique and therefore automatically satisfy the cocycle condition. [F1, step 1.1, algebra]

3.1 Let $T'\to T$ be an fppf cover and suppose a rigidified line bundle is given on $A_{T'}$ together with an isomorphism of its two pullbacks to $A_{T'\times_TT'}$; by step 2.1 this isomorphism is unique and satisfies the cocycle condition, so the usual effective descent for invertible modules [F2] produces an invertible sheaf on $A_T$; the rigidification descends because it is a morphism whose pullbacks agree. Hence the rigidified functor is already an fppf sheaf, without invoking representability, and the identification of step 1.1 is compatible with the sheaf structure. [F2, step 2.1, algebra]

4.1 For general $k$ one first verifies the assertions over an algebraic closure using the field-compatibility of global sections in [F2] and then descends the resulting identifications along the faithfully flat field extension; the rigidification data are defined over $k$ and descend by [F2]. No representability of the Picard functor is used anywhere. [F2, step 3.1, algebra] ∎ 