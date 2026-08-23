---
id: cex-a-conservative-functor-that-is-not-monadic
kind: counterexample
title: "Torsion-free abelian groups give a conservative right adjoint that is not monadic"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-conservative-functor, def-monadic-and-strictly-monadic-functor, thm-torsion-free-abelian-groups-are-reflective-in-abelian-groups, thm-the-free-module-functor-is-left-adjoint-to-the-underlying-set-functor, thm-the-free-module-monad-and-its-algebras-are-modules, def-annihilator-and-torsion-of-a-module, prop-integers-modulo-n-as-a-quotient-group]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "D. Mehrle, Category Theory Part III, Example 5.20(d)"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
    - title: "E. Riehl, Category Theory in Context, 2nd ed., monadicity examples in Section 5.5"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement refuted

The assertion that every conservative right adjoint is monadic is false. Torsion-free abelian groups give a conservative right adjoint that is not monadic.

## Facts & Assumptions

**Given:** The category $\mathbf{TFAb}$ of torsion-free abelian groups and group homomorphisms, with underlying-set functor $U:\mathbf{TFAb}\to\mathbf{Set}$.

[L1] The full subcategory of torsion-free abelian groups is reflective in $\mathbf{Ab}$ ([[thm-torsion-free-abelian-groups-are-reflective-in-abelian-groups]]).

[L2] For $R=\mathbb Z$, the Eilenberg–Moore category of the free-module monad is isomorphic over $\mathbf{Set}$ to the category of abelian groups ([[thm-the-free-module-monad-and-its-algebras-are-modules]]).

[L3] A $\mathbb Z$-module is torsion-free when no nonzero integer annihilates a nonzero element ([[def-annihilator-and-torsion-of-a-module]]).

[L4] The quotient group $(\mathbb Z,+)/2\mathbb Z$ is $(\mathbb Z/2,+)$ on the same underlying congruence classes ([[prop-integers-modulo-n-as-a-quotient-group]]).

## Counterexample

**Proof technique:** direct.

1.1 Free abelian groups are torsion-free, so the usual free-abelian-group functor lands in $\mathbf{TFAb}$ and is left adjoint to $U$. Equivalently, this adjunction is obtained by combining the free-abelian adjunction with the reflective inclusion in [L1]. [L1, construct]

1.2 A bijective homomorphism of torsion-free abelian groups has an inverse that preserves addition, so it is an isomorphism. Hence $U$ reflects isomorphisms and is conservative. [given, algebra]

2.1 The induced monad is the usual free-abelian-group monad: applying the torsion-free reflector to a free abelian group changes nothing. By [L2], its full Eilenberg–Moore category is $\mathbf{Ab}$ over $\mathbf{Set}$. [step 1.1, L2]

3.1 The comparison from $\mathbf{TFAb}$ to $\mathbf{Ab}$ is the inclusion and misses the group $\mathbb Z/2\mathbb Z$ in [L4]. The nonzero class of $1$ is killed by the nonzero integer $2$, so this group is not torsion-free by [L3]. [step 2.1, L3, L4, construct]

4.1 Thus the comparison is not essentially surjective and is not an equivalence, so $U$ is not monadic, while step 1.2 shows it is conservative. [step 1.2, step 3.1] ∎
