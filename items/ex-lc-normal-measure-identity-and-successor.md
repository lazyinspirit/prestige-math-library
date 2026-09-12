---
id: "ex-lc-normal-measure-identity-and-successor"
kind: "example"
title: "Identity and successor in a normal ultrapower"
deps: ["thm-lc-measurability-normal-measures-and-embeddings", "lem-lc-ultrapower-critical-point", "thm-lc-los-schema-for-universe-ultrapowers"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Marks Lemma 23.8 and Exercise 23.9 p.94
      url: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

In ZFC, assume U is a normal measure on kappa and write Scott classes through their transitive collapse. For every alpha<kappa,

$$[c_\alpha]_U=\alpha,\qquad [\mathrm{id}]_U=\kappa,\qquad [\xi\mapsto\xi+1]_U=\kappa+1<j_U(\kappa).$$

## Facts & Assumptions

**Given:** ZFC. Computed constant, identity and successor classes and verified the strict bound from all coordinate successors remaining below kappa.

[F1] [[thm-lc-measurability-normal-measures-and-embeddings]]: Normality identifies the collapsed identity class with kappa.

[F2] [[lem-lc-ultrapower-critical-point]]: Constant ordinal classes below kappa are fixed.

[F3] [[thm-lc-los-schema-for-universe-ultrapowers]]: Universe Los transfers each fixed first-order membership formula to the Scott ultrapower and hence through its collapse.

## Verification

1.1 F2 gives [c_alpha]=j(alpha)=alpha for alpha<kappa; F1 gives [id]=kappa. At every coordinate xi, the ordinal xi+1 is the set xi union {xi}, namely the successor of xi. F3 transfers this fixed defining formula, so the collapsed class of xi maps to xi+1 is the successor of [id], exactly kappa+1. [F1, F2, F3]

2.1 An infinite cardinal kappa is a limit ordinal: any infinite successor ordinal beta+1 is equinumerous with beta by shifting a countably infinite subset, so cannot be an initial ordinal. Therefore xi+1<kappa for every xi<kappa. The successor representative takes its values in kappa at all coordinates, so its class belongs to j(kappa) by coordinate membership. Step 1.1 identifies this member with kappa+1, proving the strict inequality. [F2, step 1.1] ∎
