---
id: lem-arith-picard-representation-by-generic-quotient-and-translates
kind: lemma
title: "Picard representation by generic quotient and translates"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-abelian-variety-over-a-field
  - lem-arith-rigidified-line-bundle-descent
  - lem-arith-hilbert-divisor-charts-and-picard-diagonal
  - thm-nonaffine-generic-scheme-quotient-flat-equivalence-relation
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
  - thm-gluing-affine-schemes
  - cor-weak-nullstellensatz-algebraically-closed-coordinate-form
  - def-rigidified-relative-picard-functor-and-dual-abelian-variety
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "B. Edixhoven, G. van der Geer, B. Moonen, Abelian Varieties (2012), Chapters 6-9; local closure in owner-arithmetic-models/dual-source/proof-closure-packet.md"
      url: "https://www.van-der-geer.nl/~gerard/AV.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied scheme and cohomology results. Let $A$ be an abelian variety over an algebraically closed field $k$. Then the rigidified relative Picard functor of $A$ ([[def-rigidified-relative-picard-functor-and-dual-abelian-variety]]) is represented by a separated locally finite-type $k$-group scheme, with a universal rigidified invertible sheaf, on every test scheme, including nonreduced tests.

## Facts & Assumptions

**Given:** AC and DC, an abelian variety $A$ over an algebraically closed field $k$, and the rigidified Picard sheaf $\mathcal P$ of $A$.

[F1] The rigidified functor is an fppf sheaf, normalization identifies classes with $\operatorname{Pic}(A_T)/p_T^*\operatorname{Pic}(T)$, and rigidified bundles have no nontrivial automorphisms ([[lem-arith-rigidified-line-bundle-descent]], assuming AC and DC).

[F2] The Hilbert divisor charts give an open positive chart $D^+$ mapping to $\mathcal P$ as a relatively projective-space bundle, with a represented flat finite-type linear-equivalence relation and a saturated quotientable open $W$ whose quotient $Y$ is an open subfunctor of $\mathcal P$ ([[lem-arith-hilbert-divisor-charts-and-picard-diagonal]], [[thm-nonaffine-generic-scheme-quotient-flat-equivalence-relation]]).

[F3] Represented fppf sheaves glue along open subfunctors, and closed subsets of finite-type $k$-schemes are detected on closed points with residue field $k$ by the Nullstellensatz ([[lem-nonaffine-fppf-descent-of-scheme-morphisms]], [[thm-gluing-affine-schemes]], [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]).

## Proof

**Proof technique:** direct: open subfunctor from the generic quotient, translations cover all classes, and the open pieces glue to a global representation.

1.1 Let $V$ be the image of the saturated open $W$ of the divisor chart in $\mathcal P$; by [F2] $V$ is an open subfunctor, not merely a set of geometric classes. For a test $T\to\mathcal P$, restrict to the open $T^+$ on which the pullback has the fixed Hilbert polynomial and the finite positive-regularity conditions of the chart; polynomial local constancy and the finite-cohomology vanishing conditions make $T^+$ open, and finite-presentation descent handles arbitrary tests. Over $T^+$ the divisor map is the faithfully flat open projective-space bundle of sections of [F2], and saturation makes the preimage of $W$ invariant under its kernel pair, so it descends to an open of $T^+$ and hence of $T$; on that open the pullback is represented by the quotient $Y\times_{\mathcal P}T$. The fppf sheaf quotient equality identifies $V$ with $Y$, giving an open immersion of represented functors $V\hookrightarrow\mathcal P$. [F1, F2, given, algebra]

2.1 Translate $V$ by every rigidified class over $k$, i.e. consider the subfunctors $V\cdot x$ for $x\in\mathcal P(k)$; every $k$-valued class lies in such a translate because choosing $v\in V(k)$ (nonempty since $V$ is a nonempty locally finite-type open) gives $x=(x-v)+v$. For an arbitrary test, pull the union of the translates back to each finite-type positive divisor chart of [F2] for every polynomial and sufficiently high twist: this pullback is open and contains every closed point of the chart, since closed points have residue field $k$; its closed complement is therefore empty by the Nullstellensatz [F3]. The positive divisor charts, with twists reversed, cover $\mathcal P$ fppf-locally on every test: locally a sufficiently positive twist has locally free nonzero sections, and a fibrewise nonzero section exists after the projective-space cover of [F2]. Hence every test pulls back to the union of the translates. [F2, F3, step 1.1, algebra]

3.1 The represented open overlaps of the translates with identity transition maps glue along the open cover of step 2.1 to a scheme representing the full functor $\mathcal P$ on all tests, including nonreduced and non-Noetherian tests, by the gluing and descent statements of [F3]; the universal rigidified invertible sheaf is obtained by gluing the universal bundles of the chart quotients, and separatedness was proved on the divisor charts in [F2]. This chart argument does not assume that every geometric class descends to $k$. [F2, F3, step 2.1, algebra] ∎ 