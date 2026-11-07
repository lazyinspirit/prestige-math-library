---
id: thm-stable-faltings-height-independent-of-semistable-extension
kind: theorem
title: "Stable Faltings height is independent of the chosen semistable extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-stable-faltings-height-of-an-abelian-variety
  - lem-semistable-neron-identity-components-commute-with-number-field-base-change
  - thm-neron-model-existence-in-stated-class
  - thm-normalized-rank-one-height-invariant-under-finite-extension
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "G. Faltings, “Endlichkeitssätze für abelsche Varietäten über Zahlkörpern,” §2"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf"
      locator: "Printed pp. 355–357, independence of the finite semistable extension."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC, DC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Statement

Assume AC and DC. Let $A/K$ be an abelian variety over a number field. If $K_1/K$ and $K_2/K$ are finite extensions over which $A$ has semistable reduction at every finite place, then the normalized Faltings heights computed from the corresponding fiberwise semiabelian Néron identity components are equal. Thus the stable Faltings height is independent of the chosen semistable extension.

## Statement references

[[def-stable-faltings-height-of-an-abelian-variety]]

[[thm-normalized-rank-one-height-invariant-under-finite-extension]]

[[lem-semistable-neron-identity-components-commute-with-number-field-base-change]]

[Faltings 1983, §2](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf)

[Faltings–Wüstholz, *Rational Points*, Chapter IV, §1](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** AC and DC; a number field $K$, an abelian variety $A/K$, and two finite semistable extensions $K_1,K_2$.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A2] [[def-dependent-choice]]: DC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[F1] [[def-stable-faltings-height-of-an-abelian-variety]]: each height is computed from the invariant top-differential module of a fiberwise semiabelian Néron identity component.

[F2] [[thm-normalized-rank-one-height-invariant-under-finite-extension]]: normalized rank-one module height is unchanged by finite base extension.

[F3] The identity component of a semistable Néron model and its invariant top-differential line commute with finite number-field base extension. [[lem-semistable-neron-identity-components-commute-with-number-field-base-change]]

## Proof

**Proof technique:** compare both semistable models over one common finite extension.

1.1 Let $L$ be a finite extension of $K$ containing both $K_1$ and $K_2$. For each $i=1,2$, the given semistability over $K_i$ and F3 identify the Néron identity component over $\mathcal O_L$ with the base change of that over $\mathcal O_{K_i}$. In particular, the invariant top-differential line $M_L$ of $A_L$ is the base change of each corresponding line $M_i$. These identifications extend the generic identity, so the complex fibres and the Faltings integral norms are the same base-changed norms at every archimedean place of $L$. [A1, A2, F1, F3, given]

2.1 Apply F2 to the finite extension $L/K_i$ and the rank-one normed module $M_i$. It gives $h_L(M_L)=h_{K_i}(M_i)$ for each $i$. Both heights therefore equal the one common value $h_L(M_L)$. By F1 these are the stated Faltings heights computed from the two supplied semistable extensions. Their equality proves the asserted independence. The two semistable extensions are part of the Statement; this proof does not invoke a separate theorem asserting their existence. [F1, F2, step 1.1, algebra] ∎
