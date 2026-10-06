---
id: lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy
kind: lemma
title: "First rational Hurewicz after killing lower torsion homotopy"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - lem-rationalization-is-exact-and-commutes-with-singular-homology
  - lem-eilenberg-maclane-spaces-of-torsion-abelian-groups-are-rationally-acyclic
  - thm-cw-approximation-of-an-arbitrary-space
  - lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice
  - thm-absolute-hurewicz-theorem
  - def-hurewicz-homomorphism
  - thm-topological-universal-coefficient-short-exact-sequence-for-cohomology
  - thm-eilenberg-maclane-spaces-represent-singular-cohomology
  - thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces
  - thm-mapping-path-factorization
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-homological-serre-spectral-sequence
  - prop-serre-edge-maps-are-induced-by-projection-and-fiber-inclusion
  - def-axiom-of-choice
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.2 Theorem 4.32, printed pp.366–367, and Theorem 4.41, printed p.376; ordinary Hurewicz and fibration sequence"
    - title: "Allen Hatcher, Spectral Sequences, Chapter 1"
      url: "https://pi.math.cornell.edu/~hatcher/SSAT/SSch1.pdf"
      locator: "§1.1 Theorem 1.8 and Lemmas 1.9–1.10, printed pp.14–17; mod-torsion Hurewicz comparison, with the connected-cover proof supplied locally"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. Let Y be a simply connected space and n≥2. If π_j(Y) is torsion for 2≤j<n, then H_j(Y;Q)=0 for 0<j<n and actual Hurewicz induces an isomorphism π_n(Y)⊗Q→H_n(Y;Q). CW type is not required.

## Facts & Assumptions

**Given:** AC; a simply connected space $Y$ and $n\ge2$ with $\pi_j(Y)$ torsion for $2\le j<n$; the weak-join models $K(T_j,j)$; and actual mapping-path fibrations over them.

[F1] A based weak CW approximation induces isomorphisms on homotopy, integral homology and rational homology ([[thm-cw-approximation-of-an-arbitrary-space]], [[lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice]], [[lem-rationalization-is-exact-and-commutes-with-singular-homology]]); CW approximations can be chosen with a prescribed basepoint ([[thm-cw-approximation-of-an-arbitrary-space]]).

[F2] The absolute Hurewicz theorem computes the first nonzero integral homology, and the cohomological universal coefficient theorem identifies $H^j(Y_j;T_j)$ with $\operatorname{Hom}(H_j(Y_j;\mathbb Z),T_j)$ ([[thm-absolute-hurewicz-theorem]]); Eilenberg–Mac Lane representability supplies the classifying map and the identity evaluation naturality ([[thm-eilenberg-maclane-spaces-represent-singular-cohomology]]).

[F3] The mapping-path factorization gives the actual homotopy fiber with its exact sequence, and the homological Serre sequence of a fibration over a simply connected rationally acyclic base has only its column $a=0$ ([[thm-mapping-path-factorization]], [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]], [[thm-homological-serre-spectral-sequence]]); rational acyclicity of torsion Eilenberg–Mac Lane spaces in all degrees ([[lem-eilenberg-maclane-spaces-of-torsion-abelian-groups-are-rationally-acyclic]]).

[F4] AC chooses the CW approximations, models and representing maps ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 A based weak CW approximation L→Y induces isomorphisms on homotopy, integral homology and rational homology. Hurewicz naturality therefore reduces the claim to L. Choose its prescribed vertex as basepoint. It is simply connected. We describe a finite sequence of CW spaces Y_2=L, Y_3,...,Y_n with Y_j (j−1)-connected, and maps Y_{j+1}→Y_j inducing isomorphisms on π_i for i>j and on rational homology in every degree. [given, F1, F4]

2.1 Suppose Y_j has been constructed for 2≤j<n. Its group T_j=π_j(Y_j) is the original π_j(L), because all earlier maps preserve higher homotopy; it is torsion. Integral Hurewicz gives H_j(Y_j;Z)≅T_j and H_{j−1}(Y_j;Z)=0. The cohomological UCT therefore identifies H^j(Y_j;T_j) with Hom(H_j(Y_j;Z),T_j). Take the class corresponding to the Hurewicz inverse. Represent it by a based map f_j:Y_j→K(T_j,j). The universal class evaluates as identity on T_j. Naturality of evaluation and integral Hurewicz shows (f_j)_*:π_j(Y_j)→π_j(K(T_j,j)) is the identity under the chosen markings. Let F_j be its strict homotopy fiber in the actual mapping-path fibration. Its exact sequence shows F_j is j-connected and that F_j→Y_j is an isomorphism on π_i for i>j. Indeed K(T_j,j) has no higher groups, its degree-j map is an isomorphism, and both spaces have zero groups below j. The component segment shows F_j is path-connected. The base is simply connected and rationally acyclic by the torsion-acyclicity lemma. For any rational vector space V, the rationalization lemma makes H_a(K(T_j,j);V) zero for a>0 and equal to V for a=0. Therefore the Serre sequence of F_j→E_{f_j}→K(T_j,j) has only column a=0. Its fiber edge is an isomorphism in every degree. Compose it with the deformation retraction E_{f_j}→Y_j: the projection F_j→Y_j is a rational homology isomorphism. Take a based weak CW approximation Y_{j+1}→F_j preserving a chosen fiber point. It transfers both homotopy and homology, and its composite into Y_j has exactly the properties promised. This finishes the construction. The case T_j=0 uses a CW K(0,j) and works with the same argument. [step 1.1, F2, F3, F4]

3.1 After the finite sequence j=2,...,n−1, Y_n is (n−1)-connected. The composite Y_n→L induces an isomorphism on π_n and on all rational homology. Integral Hurewicz on Y_n, the rationalization lemma, and naturality give the claimed isomorphism on L and then on Y; lower vanishing transfers as well. If n=2 the construction is empty and integral first Hurewicz on L suffices. Every comparison is induced by an actual continuous map. No use of a generalized Whitehead theorem modulo torsion has been concealed. [step 2.1, F1, F2] ∎
