---
id: "fs-zfc-proves-there-is-an-inaccessible-cardinal"
kind: "false-statement"
title: "ZFC proves there is an inaccessible cardinal"
deps: ["thm-lc-inaccessible-rank-segments-model-zfc", "thm-set-language-first-order-soundness", "thm-relativization-and-set-satisfaction"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Marks Theorem 18.16 p.79; Loewe Lent 2022 Lecture II identifies the alternative
        least-inaccessible route
      url: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

False assertion: ZFC proves that a strongly inaccessible cardinal exists.

The refutation is conditional: if ZFC is consistent, there is no such proof. This makes no assertion of Con(ZFC).

## Facts & Assumptions

**Given:** ZFC finite-proof metatheory. For a fixed purported proof, reflected its finite axiom list into the least inaccessible rank segment, checked actual cardinalhood of the internal witness, and built a contradiction without a CTM-from-consistency assumption.

[F1] [[thm-lc-inaccessible-rank-segments-model-zfc]]: An inaccessible rank segment satisfies each ZFC axiom, and small-cardinal inaccessibility is absolute.

[F2] [[thm-set-language-first-order-soundness]]: Finite derivations are sound for a set model of their finitely many axiom instances.

[F3] [[thm-relativization-and-set-satisfaction]]: Fixed-formula relativization agrees with the actual set structure satisfaction.

## Refutation

1.1 Fix, externally, a purported finite ZFC derivation p of the sentence E asserting that an inaccessible exists. Only finitely many ZFC axiom instances occur as assumptions in p; call their conjunction A_p. Soundness F2 applied to this fixed finite derivation is a theorem of ZF saying that any nonempty set structure satisfying those instances satisfies E. No assertion about a truth predicate for V is involved. [F2, F3]

2.1 Work now inside ZFC under E. Choose the least inaccessible kappa by ordinal minimization below one witness. F1 proves each of the finitely many instances in A_p relativized to V_kappa; combining these finite proofs and F3 makes its nonempty membership structure a model of A_p. Step 1.1 gives that V_kappa satisfies E. Thus some alpha in V_kappa is internally an inaccessible ordinal. Transitivity gives an actual ordinal alpha<kappa. Its internal cardinalhood is actual cardinalhood: any external bijection between alpha and a smaller ordinal has a graph of rank at most alpha plus finitely many successors, hence belongs to V_kappa, contradicting internal cardinalhood if it existed. F1's inaccessibility absoluteness now applies to this actual cardinal and makes alpha an actual inaccessible, contradicting leastness of kappa. [F1, F3, step 1.1]

3.1 The preceding construction is a finite ZFC derivation of E implies contradiction, depending on the fixed finite proof p. Append it to p, which derives E, and infer a contradiction in ZFC. Therefore the existence of such p implies inconsistency of ZFC. Contraposition yields exactly the stated conditional nonprovability. This neither extracts a transitive model from Con(ZFC) nor invokes a uniform universe satisfaction relation. [F2, step 2.1] ∎
