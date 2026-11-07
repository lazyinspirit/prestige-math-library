---
id: ex-base-change-stable-faltings-height
kind: example
title: "Stable height and finite base extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-stable-faltings-height-of-an-abelian-variety
  - thm-normalized-rank-one-height-invariant-under-finite-extension
  - thm-stable-faltings-height-independent-of-semistable-extension
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Faltings, “Endlichkeitssätze für abelsche Varietäten über Zahlkörpern,” §2"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf"
      locator: "Finite-extension normalization of the stable height."
    - title: "J.S. Milne, *Abelian Varieties*, v2.00"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
      locator: "Chapter IV §6, pp. 151–153; Lemma 6.3 and the stable Faltings-height definition."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC, DC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Example

Assume AC and DC. Let $K'/K$ be a finite extension of number fields and let $A/K$ be an abelian variety that has semistable reduction over $K$. The normalized stable Faltings height computed over $K'$ equals the one computed over $K$: $h_{K'}(A_{K'})=h_K(A)$.

## Example references

[[thm-normalized-rank-one-height-invariant-under-finite-extension]]

[[thm-stable-faltings-height-independent-of-semistable-extension]]

[Faltings 1983, §2](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf)

## Facts & Assumptions

**Given:** AC and DC and a finite extension $K'/K$ and a semistable abelian variety $A/K$.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A2] [[def-dependent-choice]]: DC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[F1] [[thm-normalized-rank-one-height-invariant-under-finite-extension]]: normalized rank-one module height is invariant under finite extension.

[F2] [[thm-stable-faltings-height-independent-of-semistable-extension]]: the stable height agrees with the value from any semistable extension, subject to its model-comparison hypotheses.

## Proof

**Proof technique:** apply normalized height invariance to the invariant differential module.

**Given:** [F1]–[F2] and the semistable model of $A/K$.

1.1 Base change the semistable model and its invariant differential module from $\mathcal O_K$ to $\mathcal O_{K'}$. The resulting rank-one normed module is the module used to compute the height over $K'$, under the model comparison in [F2]. [F2, given, base]

1.2 Apply [F1] to that rank-one module. Its normalized height is unchanged, so $h_{K'}(A_{K'})=h_K(A)$. [F1, step 1.1] ∎


## Proof status

The two-step calculation is complete conditional on [F2]. The stable-height independence supplier is explicitly escalated because its Néron-model base-change comparison is not proof-closed; this example remains escalated with that exact supplier.
