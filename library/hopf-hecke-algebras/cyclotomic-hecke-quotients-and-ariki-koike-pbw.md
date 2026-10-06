---
page: cyclotomic-hecke-quotients-and-ariki-koike-pbw
title: "Cyclotomic Hecke Quotients and Ariki–Koike PBW"
status: draft
items: []
examples: []
---

Cyclotomic Hecke algebras quotient the affine algebra by a polynomial in X1. The polynomial alone provides neither a basis nor a dimension formula. The page proves integral spanning and then independence using explicitly constructed generic modules and a combinatorial dimension count, before transporting the basis to any specialization.

This is a prose scaffold for future item authoring. The constructions and results below are explicit proof obligations; an empty item list does not certify that they have been proved in the library. The source-grounded contracts and prerequisite audit are recorded in `research/plan-hopf-hecke-algebras-track.md`.

## Construction and proof obligations

**def-hh-multiplicative-cyclotomic-hecke-algebra.** Fix r≥1 and R=Z[Q^±1,u_1^±1,…,u_r^±1]; quotient the type-A affine algebra by ∏(X1−u_a). Unit parameters make X1 invertible in the quotient via the constant coefficient; this is the traditional multiplicative Ariki–Koike convention, not the additive degenerate presentation.

**lem-hh-cyclotomic-commuting-jucys-murphy-generators.** Define Li=Q^(1−i)Ti−1⋯T1 X1 T1⋯Ti−1, identify them with Xi by affine relations, and prove commutation. Do not claim each Li satisfies the same cyclotomic polynomial; give the actual transport identities needed for straightening.

**lem-hh-cyclotomic-straightening-spanning.** Prove integral spanning by the explicit normal-word supplier below, not by asserting identical cyclotomic polynomials for L_i. Extend coefficients to the finite free faithful ring R′=R[v,w]/(v²−Q,w^r−(−1)^(r+1)∏u_a); v,w are units. Put s_j=v^−1T_(j−1), z=w^−1X_1. Reproduce Neaime §6 Lemmas6.2–6.15 with a=v−v^−1 and the expanded cyclotomic coefficients, correcting z s_j commutation to j≥3 and retaining all quadratic coefficients. The span of Λ_1⋯Λ_n is closed under every generator by the rank-two reductions and the nine final-letter cases; it contains 1. Each Λ_n word has nonnegative total X-degree k<r. HH-15 Bernstein rewriting preserves nonnegative exponents and this total degree; finite Hecke parabolic factorization then puts it in Σ_(0≤a<r,d∈D) H_(n−1)X_n^aT_d. Induction gives the promised bounded PBW span over R′. Prove faithful-free descent locally: tensor a cokernel with a free module containing the basis element 1; if that tensor is zero, the cokernel was zero. Negative powers are polynomial expressions because the cyclotomic constant and each Hecke generator are units. Exact reduction contracts and source corrections appear in §8 below.

**def-hh-multipartitions-standard-tableaux-and-generic-contents.** Define r-multipartitions, standard multitableaux and res_t(i)=u_component Q^(column−row). Finite tableaux, their row/column orders and addable boxes are defined explicitly. Generic parameter separation and all denominators are checked in the universal fraction field. Prove the elementary finite-poset facts used later: connect two linear extensions by moving the first differing minimal available element left across incomparable neighbors; make a cover pair consecutive by contracting that cover before choosing an extension. Standard tableaux are linear extensions of row/column box order. Distinct addable boxes of a component have distinct diagonal contents. For equal-content boxes on one diagonal, the right and lower intermediary boxes are both required between their labels; therefore endpoints of three consecutive labels cannot have equal contents. These proofs justify admissible-swap connectivity and all three-content denominators.

**thm-hh-generic-cyclotomic-seminormal-models.** For a=res_t(i), b=res_t(i+1), set T_i v_t=((Q−1)b/(b−a))v_t+((Qb−a)/(b−a))v_(s_i t), where a nonstandard tableau is interpreted as zero. Prove consecutive contents differ. Diagonal Li acts by res_t(i). For same-row and same-column consecutive entries the diagonal coefficient is Q or −1 respectively. Verify quadratic, affine and cyclotomic equations; for braid, enumerate all six reorderings of the three consecutive entries subject to their row/column partial order, include every nonstandard term, and clear the three pairwise-content denominators. Prove that endpoints of three consecutive entries cannot have equal contents. This finite local calculation must be written, not replaced by an exercise citation. Prove irreducibility using connected adjacent swaps and joint spectral projectors.

**lem-hh-colored-permutation-rsk-and-tableau-square-count.** Prove a bijection between r-colored permutations and pairs of standard multitableaux of one shape by componentwise insertion with an explicit reverse algorithm. Deduce Σλ fλ²=r^n n!. The ordinary RSK theorem is proved here if no proved earlier supplier is used.

**thm-hh-ariki-koike-basis-and-generic-splitness.** The spanning bound is r^n n!. Proved generic models and the square count give at least that dimension using a proved finite-algebra density lemma/matrix units constructed from joint-eigenvalue projectors and swaps. Hence spanning monomials are independent over the fraction field and over universal R. Base-change the resulting free-basis isomorphism for all fields/rings with unit parameters.

## Reading and applications

Prerequisite pages: [[tensor-coherence-and-algebraic-descent]], [[generic-coxeter-hecke-algebras-and-the-standard-basis]], [[type-a-affine-hecke-algebras-and-bernstein-pbw]]. The companion [[cyclotomic-hecke-quotients-and-ariki-koike-pbw-examples]] develops the calculations and failures needed to test these constructions.
