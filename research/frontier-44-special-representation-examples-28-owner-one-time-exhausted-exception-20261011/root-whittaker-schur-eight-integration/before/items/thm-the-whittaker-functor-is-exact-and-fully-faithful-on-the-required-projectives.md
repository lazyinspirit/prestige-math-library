---
id: thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives
kind: theorem
title: "The Whittaker functor is exact and fully faithful on the required projectives"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 32
deps: [def-the-whittaker-functor-from-the-relevant-parabolic-o-summand,
       def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality,
       thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o,
       def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category,
       thm-specht-to-permutation-homomorphism-dominance,
       thm-schur-weyl-decomposition-with-length-cutoff,
       thm-parabolic-category-o-is-a-highest-weight-category,
       def-deformed-tensor-space-for-the-type-a-finite-w-algebra,
       def-the-type-a-finite-w-algebra-and-whittaker-category,
       thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer,
       def-classical-complex-matrix-lie-algebras, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Sections 5.2-5.4, Theorems 5.10, 5.13, 5.14, 5.17 and Corollary 5.15, printed pp. 29-36: exactness of the Whittaker functor on the finitely generated parabolic objects, the two-term add(T) copresentations of projectives, full faithfulness on all projectives, and the tilting statement."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Section 3.5, (3.27)-(3.31) and Theorem 3.6, printed pp. 29-31: the projective generator T^Lambda, the endomorphism isomorphism and the quotient identification used here for the fully faithful statements."
verification:
  precheck: pass
---

## Statement

For admissible origins $c$ the genuine Whittaker functor $V$ of
[[def-the-whittaker-functor-from-the-relevant-parabolic-o-summand]] is exact
on $\mathcal O_c^d$, and
$$\gamma\colon\operatorname{Hom}_{\mathfrak g}(T,-)\to\operatorname{Hom}_{W}(V_c^{\otimes d},V(-))$$
is a natural isomorphism, where $T=P_c\otimes V^{\otimes d}$. Both $V$ and the
Hecke quotient $\operatorname{Hom}_{\mathfrak g}(T,-)$ are fully faithful on
all projective objects of the relevant summand, and the quotient is also fully
faithful on tiltings. $T$ is a self-dual prinjective detecting object
containing all standard-labelled projective-injective covers, but it is not a
generator of the entire category-$\mathcal O$ summand. $V(T)=V_c^{\otimes d}$
is a projective generator of $W_d$-mod, and $V$ preserves projectivity on
$\operatorname{add}(T)$; it need not send every projective of $\mathcal O$ to
a projective $W$-module. The composite of $V$ with the Morita equivalence is
the Serre quotient killing exactly the off-standard simples.

## Facts & Assumptions

**Given:** Admissible origins $c$, the summand $\mathcal O_c^d$, the ground object $P_c$, the tensor object $T$, and the functor $V$.

[F1] Highest-weight structure: $\mathcal O_c^d$ is a highest-weight category with standard objects $K(A)$, simple objects $L(A)$ and enough projectives; $P_c$ is the ground projective-injective ([[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]], [[thm-parabolic-category-o-is-a-highest-weight-category]]).

[F2] $V$ is exact on the relevant objects and $V(P_c)=\mathbb C_c$, $V(T)=V_c^{\otimes d}$; the standard labels and the vanishing off the standard set are as in [[def-the-whittaker-functor-from-the-relevant-parabolic-o-summand]].

[F3] The tensor space model and Skryabin's equivalence identify the $W$-module structure and the Hecke image; the progenerator and Morita statements under admissibility are [[thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer]] (the statement used here is its admissibility clause, whose proof is supplied there).

[F4] Specht-to-permutation dominance and the length-cutoff decomposition control the column symmetric powers and the standard flags of the copresentations ([[thm-specht-to-permutation-homomorphism-dominance]], [[thm-schur-weyl-decomposition-with-length-cutoff]], [[def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category]], [[thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o]]).



## Proof

**Proof technique:** direct.

**Given:** The category $\mathcal O_c^d$, the objects $P_c$, $T$ and the functor $V$.

1.1 The two-term copresentations. Work in the highest-weight summand of [F1], whose standard and simple objects are $K(A),L(A)$. Construct the objects $Z_A$ from finite column symmetric powers: embed $Z_A$ into $V^{\otimes d}$ by symmetrization and PBW induction, split the last column and append its ground label. Maximal physical-prefix inequalities force every possible larger polynomial label to retain the same ground column; positive-radical invariants of a simple are its top Levi simple by the nondegenerate contravariant form; adjunction gives a single head; exact top-centre sections and Levi BGG identify the lifted cover, so the lifted cover is an isomorphism. Inducting over the columns and tensoring the remaining finite symmetric powers shows that the quotients $T/Z_A$ have standard flags, and by [F4] every projective has a two-term copresentation with terms in $\operatorname{add}(T)$ and its injective hull. [F1, F4, algebra, construct]

2.1 Full faithfulness on projectives. Let $G=\operatorname{Hom}_B(eA,-)$ be the corner right adjoint of the Hecke quotient (with $e$ the idempotent cutting the tensor module). For the corner, the unit on $T$ is injective, splits by injectivity of the target, and its torsion complementary summand vanishes by adjunction; applying the left-exact $G$ to a copresentation of step 1.1 gives unit isomorphisms on every projective. Hence the quotient is fully faithful on all projectives, and $T$ is prinjective rather than a full generator: the rank-one dominant Verma maps to a nonprojective simple over $\mathbb C[x]/x^2$, while $\operatorname{add}(T)$ maps to projectives. [F4, step 1.1, algebra]

3.1 The natural isomorphism $\gamma$. Morita and the counit factorization of [F3] identify $\operatorname{Hom}_{\mathfrak g}(T,-)$ with $\operatorname{Hom}_W(V_c^{\otimes d},V(-))$ on the nose; naturality is the naturality of the unit and counit of the adjunction. [F3, step 2.1, algebra]

3.2 Tilting faithfulness. Modules with standard head and targets with standard socle satisfy the same Hom argument: by the standard/socle polarity of [F4] the relevant Hom spaces are computed on the standard filtration, where the quotient is faithful by step 2.1, so the quotient is fully faithful on tiltings. [F4, step 2.1, algebra]

4.1 The Serre quotient. The kernel of $V$ is the Serre subcategory generated by the off-standard simples, by the vanishing statement of [F2]; the composite of $V$ with the Morita equivalence of [F3] is therefore the Serre quotient killing exactly those simples, and $V$ preserves projectivity on $\operatorname{add}(T)$ while not sending every $\mathcal O$-projective to a projective $W$-module (the rank-one witness). [F2, F3, step 2.1, algebra] ∎

## Remarks

- The division of labour is: exactness and the values on $P_c,T$, standard objects and off-standard vanishing come from the Whittaker functor definition; the copresentation and corner arguments give full faithfulness; Morita plus the kernel identification give the Serre quotient.

- The rank-one example in the companion page shows that "projective in $\mathcal O$" is strictly weaker than membership in $\operatorname{add}(T)$, so the preservation clause must be read on $\operatorname{add}(T)$ only.
