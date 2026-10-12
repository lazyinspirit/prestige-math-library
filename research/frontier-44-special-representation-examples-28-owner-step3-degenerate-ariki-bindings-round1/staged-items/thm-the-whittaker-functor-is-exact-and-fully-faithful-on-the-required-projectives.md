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

[F1] Highest-weight structure: $\mathcal O_c^d$ is a highest-weight category with standard objects $M(A)$, simple objects $L(A)$ and enough projectives; $P_c$ is the ground projective-injective ([[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]], [[thm-parabolic-category-o-is-a-highest-weight-category]]).

[F2] $V$ is exact on the relevant objects and $V(P_c)=\mathbb C_c$, $V(T)=V_c^{\otimes d}$; the standard labels and the vanishing off the standard set are as in [[def-the-whittaker-functor-from-the-relevant-parabolic-o-summand]].

[F3] The tensor space model and Skryabin's equivalence identify the $W$-module structure and the Hecke image; the progenerator and Morita statements under admissibility are [[thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer]] (the statement used here is its admissibility clause, whose proof is supplied there).

[F4] Specht-to-permutation dominance and the length-cutoff decomposition control the column symmetric powers and the standard flags of the copresentations ([[thm-specht-to-permutation-homomorphism-dominance]], [[thm-schur-weyl-decomposition-with-length-cutoff]], [[def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category]], [[thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o]]).



## Proof

**Proof technique:** direct.

**Given:** The category $\mathcal O_c^d$, the objects $P_c$, $T$ and the functor $V$.

1.1 The genuine full-projective result uses two-term prinjective copresentations, not a false full-generator assertion about T. The finite p modules Z_A=⊗_i Sym^(a_i)(V_col(i)) embed into V^tensor d by characteristic-zero symmetrization; PBW induction is exact. Their quotients have finite generalized-standard flags by their finite positive-radical/Levi filtration. Here is the projectivity construction in full. Split the last column, with g'=gl_(N−q_l), g''=gl_(q_l), and let R be parabolic induction with the scalar normalization beta=(0 on g', N−q_l on g'') compensating the two rho shifts. PBW transitivity makes R(N'(B')⊗N''(B''))=N(B). Append the last-column ground entries c_l+q_l−n,…,c_l+1−n to B'. For any polynomial label C whose physical highest weight dominates B, the prefix at the first N−q_l coordinates has at least B's sum. The total trace is fixed, so C's last-column sum is at most B's. But each sorted last-column entry is bounded below by its ground entry; hence that sum is at least B's, equality forces every entry ground, and C has exactly the same column split. This is the precise maximal-prefix argument; comparisons are integer differences, not an order on C. [F1, F4, construct, algebra]

1.2 For a simple g highest module L(C), invariants of the positive outside radical are exactly its top Levi simple L'(C')⊗L''(C''). A nonzero invariant in positive outside degree would be orthogonal to every vector in that degree: PBW writes all such vectors with a negative outside factor, whose transpose kills the invariant. The simple's nondegenerate contravariant form then forces the invariant zero. The top Levi form is the corresponding simple Levi quotient. Thus adjunction makes R(P'(B')⊗C_ground) have the single head L(B), with multiplicity one. Its standard flag multiplicities are the Levi BGG multiplicities. On each possible physical label C≥B the last column was proved ground, so the exact top block-centre weight section of N(C) counts [N(C):L(B)] as [N'(C'):L'(B')]. Indeed lower outside degrees strictly increase the last block's trace, while all target simple factors at its ground trace are exactly the top Levi factors. Therefore the standard flag character of this induced object equals that of P(B) by BGG. Lift the projective cover P(B) through its simple head; the lift surjects because the target has that single head (finite-module Nakayama). Equality of finite-length characters makes it an isomorphism. This proves the necessary induction preserves this projective, without asserting arbitrary parabolic induction preserves projectives. [F1, F4, construct, algebra]

1.3 Now induction on the number of columns gives every Z_A projective. Removing the last column gives the smaller Z_A'; induction decomposes it into prefix projectives, appending ground gives the just-proved projectives, and the tensor identity with the remaining full-g Sym factors produces Z_A. Such finite tensoring preserves projectivity by the actual biadjunction. For its leading standard, sort the nonnegative powers in each column into the partition mu. Schur–Weyl identifies tensor products of its row symmetric powers with Young-subgroup invariants; the declared Specht-to-permutation dominance theorem says only shapes dominating mu occur and mu occurs once. Moving a cumulative-column factor into an earlier column also increases a physical prefix. Hence the standard N(B) occurs once and every other standard physically dominates B. Projective BGG triangularity forces P(B) to occur once as a summand. Every polynomial B is obtained by its nonnegative column differences from ground, so these Z_A collectively contain all projective covers. The typed coset equivalence supplies the same BGG/projective assertions for admissible nonintegral origins; no all-origin integral supplier is silently generalized. [F1, F4, construct, algebra]

1.4 Inducing Z_A⊂V^tensor d gives 0→Z_A^g→T→L_A→0. The finite p quotient's positive-radical/Levi filtration gives L_A a genuine standard flag. Its socle labels are Std by the standard-socle criterion proved in the declared parabolic-tilting supplier, so its injective hull belongs to add(T). Consequently 0→Z_A^g→T→T_2 is exact with T_2 in add(T). Taking finite sums and summands gives a two-term copresentation of the FULL projective generator Q by add(T), which is the exact two-term copresentation used below.
 [F1, F4, construct, algebra]

2.1 Full faithfulness on projectives. Let $G=\operatorname{Hom}_B(eA,-)$ be the corner right adjoint of the Hecke quotient (with $e$ the idempotent cutting the tensor module). For the corner, the unit on $T$ is injective, splits because $T$ is injective, and its torsion complementary summand vanishes by adjunction; applying the left-exact $G$ to a copresentation of steps 1.1–1.4 give unit isomorphisms on every projective. Hence the quotient is fully faithful on all projectives, and $T$ is prinjective rather than a full generator: the rank-one dominant Verma maps to a nonprojective simple over $\mathbb C[x]/x^2$, while $\operatorname{add}(T)$ maps to projectives. [F4, step 1.1, algebra]

3.1 The natural isomorphism $\gamma$. Morita and the counit factorization of [F3] identify $\operatorname{Hom}_{\mathfrak g}(T,-)$ with $\operatorname{Hom}_W(V_c^{\otimes d},V(-))$ on the nose; naturality is the naturality of the unit and counit of the adjunction. [F3, step 2.1, algebra]

3.2 **Tilting faithfulness.** A standard-filtered object has only standard-labelled simples in its socle: a simple submodule injects into its first nonzero standard section, and the standard-socle criterion of the tilting supplier applies. A tilting has the same property for its head by restricted duality. For the corner right adjoint $G$, the unit $N\to G(eN)$ has kernel and cokernel killed by $e$. If $N$ has standard socle its kernel is zero. If $M$ has standard head, every map from $M$ to an $e$-torsion object vanishes, because a nonzero quotient of $M$ has a standard simple quotient. Thus, writing $C$ for the unit cokernel, $\operatorname{Hom}(M,C)=0$ and the left-exact Hom sequence gives $\operatorname{Hom}(M,N)=\operatorname{Hom}(M,G(eN))=\operatorname{Hom}_B(eM,eN)$. Apply this to tiltings. No exactness of the left adjoint is assumed. [F4, step 2.1, algebra]

4.1 The Serre quotient. The kernel of $V$ is the Serre subcategory generated by the off-standard simples, by the vanishing statement of [F2]; the composite of $V$ with the Morita equivalence of [F3] is therefore the Serre quotient killing exactly those simples, and $V$ preserves projectivity on $\operatorname{add}(T)$ while not sending every $\mathcal O$-projective to a projective $W$-module (the rank-one witness). [F2, F3, step 2.1, algebra] ∎

## Remarks

- The division of labour is: exactness and the values on $P_c,T$, standard objects and off-standard vanishing come from the Whittaker functor definition; the copresentation and corner arguments give full faithfulness; Morita plus the kernel identification give the Serre quotient.

- The rank-one example in the companion page shows that "projective in $\mathcal O$" is strictly weaker than membership in $\operatorname{add}(T)$, so the preservation clause must be read on $\operatorname{add}(T)$ only.
