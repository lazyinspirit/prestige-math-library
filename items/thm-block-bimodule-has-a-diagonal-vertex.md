---
id: thm-block-bimodule-has-a-diagonal-vertex
kind: theorem
title: Block bimodule has a diagonal vertex
deps: [lem-group-algebra-bimodule-is-induced-from-the-diagonal, lem-relative-projectivity-mackey-intersections-for-finite-modules, thm-green-vertex-source-existence-and-conjugacy]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Webb, A Course in Finite Group Representation Theory, §§5.2, 11.3, 11.6, 12.3–12.5; especially Lemma 12.4.4 and Theorem 12.4.5, pp.240–241
      url: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf
proof_strategy: direct
---

## Statement

For every block $b$ of $kG$, a vertex of its indecomposable double module $kGb$ is conjugate in $G\times G$ to $\Delta D$ for some $p$-subgroup $D\le G$.

## Facts & Assumptions

**Given:** A block bimodule over the residue field of a splitting $p$-modular system.

[F1] The whole bimodule $kG$ is induced from $\Delta G$. ([[lem-group-algebra-bimodule-is-induced-from-the-diagonal]])

[F2] A vertex of an indecomposable relatively $H$-projective module is conjugate into $H$. ([[lem-relative-projectivity-mackey-intersections-for-finite-modules]])

[F3] An indecomposable finite-dimensional module has a vertex. ([[thm-green-vertex-source-existence-and-conjugacy]])

## Proof

**Proof technique:** direct.

1.1 The nonzero indecomposable block bimodule is a direct summand of $kG$, so [F1] makes it relatively $\Delta G$-projective. Choose a vertex $Q$ by [F3]; [F2] conjugates it into $\Delta G$. [F1, F2, F3]

2.1 Projection of this conjugate vertex onto the first factor is a subgroup $D\le G$; every element of $\Delta G$ has the form $(d,d)$, so the conjugate vertex equals $\Delta D$. Projection is an isomorphism there, hence $D$ is a $p$-subgroup. The subgroup obtained is a vertex, since conjugation preserves relative projectivity and inclusion-minimality. [step 1.1] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§5.2, 11.3, 11.6, 12.3–12.5; especially Lemma 12.4.4 and Theorem 12.4.5, pp.240–241. Local argument and conventions as displayed above.
