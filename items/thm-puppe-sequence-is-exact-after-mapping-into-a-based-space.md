---
id: thm-puppe-sequence-is-exact-after-mapping-into-a-based-space
kind: theorem
title: Puppe sequence is exact after mapping into a based space
deps: ["def-reduced-cone-suspension-and-cofiber-sequence", "lem-iterated-cofibers-rotate-with-suspension-reflection", "lem-suspension-homotopy-classes-have-natural-group-structures", "thm-quotient-universal-property"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 8 §4 theorem pp.59–60
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

For a based map $f:X\to Y$ of well-pointed CGWH spaces and based CGWH Z, the contravariant Puppe sequence
$$\cdots\longrightarrow[\Sigma C_f,Z]_*\longrightarrow[\Sigma Y,Z]_*\longrightarrow[\Sigma X,Z]_*\longrightarrow[C_f,Z]_*\longrightarrow[Y,Z]_*\longrightarrow[X,Z]_*$$
is exact at terms with both adjacent arrows, as pointed sets. The arrows use the cofiber reflection convention. The terms with at least one suspension have their natural group structures; precomposition by an unreflected suspension is a homomorphism, while precomposition by a reflected suspension is an antihomomorphism. In abelian degrees both are homomorphisms. Omitting the reflection signs gives an exact sequence of groups in the suspended portion. Terms with at least two suspensions are abelian. No covariant cofiber exact sequence of homotopy groups is asserted.

## Facts & Assumptions

[F1] The cofiber attaches CX to Y by f. [[def-reduced-cone-suspension-and-cofiber-sequence]]

[F2] Compatible maps descend through the attaching quotient. [[thm-quotient-universal-property]]

[F3] Successive cofibers rotate up to homotopy with reflected suspension arrows. [[lem-iterated-cofibers-rotate-with-suspension-reflection]]

[F4] Suspended mapping classes are groups and double suspensions are abelian. [[lem-suspension-homotopy-classes-have-natural-group-structures]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 At $[Y,Z]_*$, if $g:Y\to Z$ extends to $G:C_f\to Z$, the cone formula $G([x,t])$ is a based nullhomotopy of gf. Conversely a based nullhomotopy $H(x,t)$ of gf is constant on the cone tip and basepoint track, so it defines $CX\to Z$. It agrees with g at the attaching base. F2 pastes them to $G:C_f\to Z$ with G|Y=g. Thus the image of restriction is exactly the distinguished fibre of precomposition with f. [F1, F2]

2.1 The same argument applies to every map h followed by its cofiber inclusion. F3 identifies each consecutive pair in the iterated cofiber sequence, up to based homotopy equivalences and its specified reflection, with such a pair. Precomposition by a based homotopy equivalence has inverse on mapping classes given by its homotopy inverse, since composing either inverse homotopy with a map preserves its basepoint. Transporting step 1.1 across those bijections proves exactness at every displayed eligible term. [F1, F3, step 1.1]

3.1 F4 gives the group and abelian ranges. Precomposition by an unreflected suspension is a homomorphism. Parameter reflection sends every class to its inverse, by the reversal homotopy in F4, so a reflected arrow is an antihomomorphism: $T(ab)=T(b)T(a)$. On abelian groups it is a homomorphism. Removing a reflection does not change the distinguished fibre, because inversion fixes only the identity over the identity; it does not change the image, because the image of the unreflected homomorphism is a subgroup and is closed under inverses. Thus removing all reflection signs preserves each kernel and image, yielding the asserted exact sequence of groups on the suspended portion. No nonabelian inversion map is claimed to be a homomorphism. [F3, F4, step 2.1] ∎
