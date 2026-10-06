---
id: lem-eilenberg-maclane-spaces-of-torsion-abelian-groups-are-rationally-acyclic
kind: lemma
title: "Torsion Eilenberg–Mac Lane spaces are rationally acyclic"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - lem-rationalization-is-exact-and-commutes-with-singular-homology
  - lem-weak-join-classifying-model-is-a-cw-k-g-one
  - thm-covering-space-lifting-criterion
  - thm-uniqueness-of-lifts-from-a-connected-space
  - lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice
  - thm-cellular-homology-computes-singular-homology
  - prop-cellular-maps-induce-cellular-chain-maps
  - thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces
  - thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology
  - thm-mapping-path-factorization
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-cw-approximation-of-an-arbitrary-space
  - thm-homological-serre-spectral-sequence
  - cor-contractible-nonempty-spaces-have-the-homology-of-a-point
  - def-axiom-of-choice
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§3.G, Transfer Homomorphisms, printed pp.321–322; lift-sum identities rederived locally"
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.2 Theorem 4.41, printed pp.375–377, and §5.1 Theorem 5.3, printed pp.526–532"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. If T is any torsion abelian group and n≥1, every CW K(T,n) has H_0(K(T,n);Q)=Q and H_j(K(T,n);Q)=0 for j>0. No cardinality or finite-type restriction is imposed.

## Facts & Assumptions

**Given:** AC; a torsion abelian group $T$ and an integer $n\ge1$; a CW model $K(T,n)$; the weak-join model $B_wF$ for finite subgroups $F\le T$; and the actual path fibration $\Omega K(T,n)\to PK(T,n)\to K(T,n)$ with contractible total space.

[F1] Rationalization is exact and identifies integral homology tensored with $\mathbb Q$ with rational homology, so vanishing of rational homology tests acyclicity ([[lem-rationalization-is-exact-and-commutes-with-singular-homology]]).

[F2] The weak-join construction gives CW models $B_wF$ with discrete covering $J(F)\to B_wF$ and weakly contractible total space ([[lem-weak-join-classifying-model-is-a-cw-k-g-one]]); covering maps have unique path and homotopy lifting ([[thm-covering-space-lifting-criterion]], [[thm-uniqueness-of-lifts-from-a-connected-space]]), and cellular maps induce cellular chain maps ([[prop-cellular-maps-induce-cellular-chain-maps]], [[thm-cellular-homology-computes-singular-homology]]).

[F3] Weak equivalences induce integral homology isomorphisms and homotopy equivalences induce homology isomorphisms ([[lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice]], [[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]]); the mapping-path factorization and fibration exact sequence compute the strict loop fiber of the path fibration ([[thm-mapping-path-factorization]], [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[F4] CW approximation attaches to a prescribed based vertex and marked Eilenberg–Mac Lane models are unique ([[thm-cw-approximation-of-an-arbitrary-space]], [[thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces]]); the rational Serre sequence of a fibration over a simply connected base converges to the abutment ([[thm-homological-serre-spectral-sequence]]) and a contractible nonempty space has the homology of a point ([[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]]).

[F5] AC chooses the finite subgroups, their generators, the CW models and the approximations ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 A finitely generated subgroup F of T is finite: if its generators have orders d_1,...,d_r, the product of those cyclic groups surjects onto F. For finite F, the covering J(F)→B_wF has |F| sheets. For each singular simplex, sum all its lifts to obtain a chain map τ. Existence and uniqueness of based lifts apply because a simplex is simply connected; restriction to a face bijects its lift set with that face's lift set. Thus ∂τ=τ∂ and p_#τ=|F| id, including degree zero. These are exactly the lift-sum identities proved in the published transfer supplier. On rational homology, τ_* is injective because p_*τ_*=|F| id. The map J(F)→* is a weak equivalence by the weak-join $K(G,1)$ lemma; the published weak-equivalence/homology lemma and the rationalization lemma give zero positive rational homology of J(F). Therefore B_wF has zero positive rational homology. A rational cellular cycle in B_wT has finite support. Row 3 places all its cells in B_wF for one finitely generated, hence finite, subgroup F. The cellular differential agrees with that in B_wF, and the inclusion of cellular chain groups is injective, so the same chain is a cycle in B_wF. It bounds there by the preceding paragraph, hence bounds in B_wT. Cellular/singular comparison proves positive rational acyclicity. Marked CW uniqueness identifies B_wT with every chosen K(T,1), and homotopy invariance transfers the result. [given, F1, F2, F5]

2.1 Take the actual path fibration ΩK(T,n)→PK(T,n)→K(T,n), with contractible total, from the mapping-path supplier. Its exact sequence shows its loop fiber is path-connected and has T as its only positive homotopy group, in degree n−1. Apply the relative version of CW approximation with a prescribed vertex mapping to the constant loop, obtaining a based weak equivalence L→ΩK(T,n). L is a marked CW K(T,n−1). Its rational homology is that of the loop fiber by the published weak-equivalence/homology lemma and the rationalization lemma, and is acyclic by the induction hypothesis. The base K(T,n) is simply connected. In the rational Serre sequence only the row b=0 remains, with E^2_{a,0}=H_a(K(T,n);Q). No differential can enter that row, and every outgoing target is zero. Strong convergence and contractibility of the total force H_a(K(T,n);Q)=0 for a>0. Path-connectedness gives H_0=Q. This is a finite induction for each specified n, and requires no homotopy equivalence from a CW complex to the strict loop fiber. [step 1.1, F3, F4, F5] ∎
