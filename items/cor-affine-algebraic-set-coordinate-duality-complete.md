---
id: cor-affine-algebraic-set-coordinate-duality-complete
kind: corollary
title: "The affine algebraic-set dictionary is contravariantly full and faithful on classical affine varieties"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-affine-algebraic-sets-coordinate-duality, thm-affine-morphisms-coordinate-ring-anti-equivalence]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Proposition 3.25"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, Theorem 3.2.1 together with the affine dictionary of Chapter 1"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Over an algebraically closed field $k$, the object assignment
$$ X\longmapsto k[X] $$
from affine algebraic sets to reduced affine $k$-algebras restricts on
classical affine varieties to a contravariant full and faithful functor.

## Facts & Assumptions

**Given:** An algebraically closed field $k$.

[L1] Affine algebraic sets correspond to reduced affine $k$-algebras at the object level ([[thm-affine-algebraic-sets-coordinate-duality]]).

[L2] Morphisms of classical affine varieties correspond contravariantly to $k$-algebra homomorphisms of coordinate rings ([[thm-affine-morphisms-coordinate-ring-anti-equivalence]]).

## Proof

**Proof technique:** direct.

1.1 Fact [L1] supplies the object assignment $X\mapsto k[X]$ for affine algebraic sets. [L1, given]

2.1 Let $X$ and $Y$ be classical affine varieties. Fact [L2] gives a bijection $$ \operatorname{Mor}(X,Y)\cong \operatorname{Hom}_{k\text{-alg}}(k[Y],k[X]) $$ that respects identities and composition in the contravariant order. Therefore, on the full subcategory of classical affine varieties, the assignment of step 1.1 is contravariantly full and faithful. [L2, step 1.1]

3.1 This is exactly the claimed morphism-level completion of the affine algebraic-set dictionary on classical affine varieties. [step 2.1] ∎
