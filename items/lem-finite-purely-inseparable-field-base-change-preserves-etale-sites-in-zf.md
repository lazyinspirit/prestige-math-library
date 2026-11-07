---
id: lem-finite-purely-inseparable-field-base-change-preserves-etale-sites-in-zf
kind: lemma
title: Finite purely inseparable field base change preserves étale sites in ZF
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-small-etale-site-of-a-scheme
  - def-etale-morphism-schemes
  - lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf
proof_strategy: direct
axiom_use: No choice or algebraic closure is assumed. The finite exponent and all local finite-type field-chart calculations are explicit.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, Topological Invariance of the Small Étale Site
      url: https://stacks.math.columbia.edu/tag/04DY
      locator: Background only; the finite-exponent Frobenius argument below is reconstructed locally.
---

## Statement

In ZF, let $L/k$ be a specified finite purely inseparable field extension and let $X$ be a finite-type $k$-scheme. Base change along $X_L\to X$ induces an equivalence of their small étale topoi. Consequently, for every étale set or abelian sheaf $F$ on $X$, the natural pullback map $\Gamma(X,F)\to\Gamma(X_L,F_L)$ is a bijection. No algebraic closure, choice principle or higher-cohomology assertion is used.

## Statement references

[[def-small-etale-site-of-a-scheme]]

[[def-etale-morphism-schemes]]

## Facts & Assumptions

**Given:** The specified finite purely inseparable extension, the scheme, and the sheaf in the corresponding clause.

[F1] Étale maps have local standard-étale charts and are universally open without choice. [[lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf]]

[F2] The small étale site has the stated objects and jointly surjective covering families. [[def-small-etale-site-of-a-scheme]]

## Proof

**Proof technique:** exhibit a finite Frobenius inverse on the étale sites.

1.1 In characteristic zero a finite purely inseparable extension is the identity. In characteristic $p>0$, choose $q=p^e$ such that $L^q\subseteq k$: a finite generating list of $L/k$ has finitely many exponents, and their maximum works. For any $k$-algebra $A$, the formula $a\otimes\ell\mapsto a^q\ell^q$ defines a ring map $A\otimes_kL\to A$ compatible with localizations. It therefore glues to a morphism $\sigma:X\to X_L$. If $p_X:X_L\to X$ is the projection, the composites $p_X\sigma$ and $\sigma p_X$ are the absolute $q$-power Frobenius morphisms of $X$ and $X_L$, respectively. [given, construct, algebra]

2.1 For an étale morphism $V\to T$ with $T$ locally of finite type over the specified characteristic-$p$ field, its relative $q$-power Frobenius $V\to V\times_{T,F_T^q}T$ is an isomorphism, naturally in $V$. It suffices by [F1] to work on one standard chart. The relative Frobenius is integral because each chart generator satisfies $T^q-b^q=0$ over its image; after every base change it is radicial and bijective on points, since $q$-powers determine primes and a specified finite residue algebra has its unique purely inseparable prime by finite linear algebra. Both source and target are étale over $T$, so this map between them is étale: standard simple-root charts give the relative Jacobian and finite-presentation equations. At a point its residue extension is both separable and purely inseparable, hence trivial. A radicial étale map is locally a degree-one standard chart, hence an open immersion; its bijectivity makes it an isomorphism. All chart algebras here are finite type over the given field: any nonzero quotient has a point by finite Noether normalization, so the local ring and cover certificates do not invoke an arbitrary-ring prime-ideal principle. These are finite chart, root and prime calculations; no arbitrary geometric point or algebraic closure is selected. The construction commutes with every morphism of étale $T$-schemes, giving naturality. [F1, step 1.1, construct, algebra]

3.1 Pullback along the two composites in step 1.1 is naturally isomorphic to the identity on their étale categories by step 2.1. Thus pullback along $p_X$ has pullback along $\sigma$ as a quasi-inverse. The relative Frobenius isomorphisms identify fibre products, and [F1] shows that the pointwise bijective base maps preserve and reflect jointly surjective étale families. Hence this is an equivalence of the sites and, by transporting the sheaf condition and its functorial equalizers, of the small étale topoi. The equivalence preserves the terminal object, so it identifies global sections of any set sheaf, and in particular of any abelian sheaf. [F1, F2, step 1.1, step 2.1, given, construct, algebra] ∎
