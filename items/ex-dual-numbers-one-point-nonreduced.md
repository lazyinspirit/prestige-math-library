---
id: ex-dual-numbers-one-point-nonreduced
kind: example
title: "Dual numbers give a one-point nonreduced affine scheme"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dual-numbers-scheme, def-reduced-affine-scheme, cor-prime-spectrum-insensitive-to-nilpotents, def-residue-field-scheme-point]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "James S. Milne, Algebraic Geometry, 10.28"
      url: "https://www.jmilne.org/math/CourseNotes/AG10.pdf"
---
## Example

Let $k$ be a field and $R=k[\epsilon]/(\epsilon^2)$. Then
$\operatorname{Spec}R$ has one point $(\epsilon)$, its residue field is $k$,
and it is not reduced.

## Facts & Assumptions

**Given:** A field $k$ and $R=k[\epsilon]/(\epsilon^2)$.

[F1] Passing from a ring to its quotient by the nilradical does not change the underlying prime spectrum ([[cor-prime-spectrum-insensitive-to-nilpotents]]).

## Verification

**Proof technique:** direct.

1.1 Every element of $R$ has the form $a+b\epsilon$. If $a\ne0$, then $a+b\epsilon$ is a unit with inverse $a^{-1}-a^{-2}b\epsilon$; while $(b\epsilon)^2=0$. Thus $\operatorname{Nil}(R)=(\epsilon)$, and $R/(\epsilon)\cong k$. Since the field $k$ has exactly one prime ideal, $(0)$, [F1] identifies $\operatorname{Spec}R$ with its one-point spectrum; its sole prime is $(\epsilon)$. [F1, given, algebra]

1.2 The nonzero class of $\epsilon$ squares to zero, so $R$ is not reduced. [given]

2.1 Every element outside $(\epsilon)$ is a unit by step 1.1, so $R_{(\epsilon)}=R$. The residue-field definition therefore gives $\kappa((\epsilon))=R_{(\epsilon)}/(\epsilon)R_{(\epsilon)}\cong R/(\epsilon)\cong k$. [step 1.1]

3.1 This is the asserted one-point nonreduced scheme. [step 2.1, step 1.2] ∎
 
