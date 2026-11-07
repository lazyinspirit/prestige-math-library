---
id: lem-global-hilbert-symbol-product-finite-support
kind: lemma
title: "The global Hilbert-symbol product has finite support"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - def-number-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-roots-of-unity-in-a-field
  - def-local-hilbert-symbol-over-field-containing-roots-of-unity
  - def-local-artin-reciprocity-map
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - thm-global-field-element-integral-at-all-but-finitely-many-places
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - lem-unramified-local-unit-norms-and-cohomology
  - thm-local-artin-reciprocity-and-norm-index
proof_strategy: direct
axiom_use: >-
  AC is inherited from global-place classification; DC and Countable Choice
  are required by the local Artin, completion and unramified-unit suppliers.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter III §1, local Artin map on units for unramified extensions; printed pp.97–99."
    - title: "Andrew V. Sutherland, MIT 18.785 Number Theory I, Fall 2021"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
      locator: "Lecture 10, unramified local extensions and arithmetic Frobenius."
verification: {}
---

## Statement

Assume AC, Countable Choice and DC. Let $K$ be a number field, let $n\ge1$
with $|\mu_n(K)|=n$, and let $a,b\in K^\times$. At each finite
place $v$, define
$$H_{v,n}(a,b)=\operatorname{rec}_{K_v}(b)(\alpha_v)/\alpha_v,\qquad
\alpha_v^n=a,$$
using the arithmetic local Artin map. At a complex place put $H_{v,n}=1$;
at a real place put $H_{v,1}=1$ and, for $n=2$, put $H_{v,2}(a,b)=-1$
exactly when $a<0$ and $b<0$, and put it equal to $1$ otherwise. Then
$H_{v,n}(a,b)=1$ for all but finitely many places $v$.

## Statement references

[[def-number-field]]

[[def-place-of-a-global-field]]

[[def-completion-of-a-global-field-at-a-place]]

[[def-roots-of-unity-in-a-field]]

[[def-local-hilbert-symbol-over-field-containing-roots-of-unity]]

[[def-local-artin-reciprocity-map]]

## Facts & Assumptions

**Given:** AC, Countable Choice and DC; the number field, $n$, roots of unity,
$a,b$, and the local reciprocity data in the Statement.

[A1] AC supplies number-field place classification; Countable Choice supplies
the metric completions, and DC is assumed by the local reciprocity and
unramified-unit cohomology interfaces. [[def-axiom-of-choice]]
[[def-countable-choice]] [[def-dependent-choice]]

[F1] At a finite place the arithmetic local Hilbert symbol is defined by
$\operatorname{rec}_{K_v}(x)(\beta)/\beta$ for $\beta^n=y$; hence the
displayed factor is that local symbol with arguments $(b,a)$.
[[def-local-hilbert-symbol-over-field-containing-roots-of-unity]]
[[def-local-artin-reciprocity-map]]

[F2] Every element of a number field is a unit at all but finitely many finite
places: apply the integrality theorem to $x$ and $x^{-1}$ to obtain both
$v(x)\ge0$ and $v(x)\le0$ away from a finite set.
[[thm-global-field-element-integral-at-all-but-finitely-many-places]]

[F3] A finite unramified extension is determined by its finite residue-field
extension, and a simple residue root lifts uniquely by Hensel's lemma.
[[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]
[[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F4] In a finite unramified extension of complete discretely valued fields
with finite residue fields, every base-field unit is a field norm.
[[lem-unramified-local-unit-norms-and-cohomology]]

[F5] The local Artin map on a finite abelian extension has kernel exactly the
field-norm subgroup. [[thm-local-artin-reciprocity-and-norm-index]]

## Proof

**Proof technique:** remove a finite set of places and use the local norm
kernel at every remaining unramified place.

**Given:** The data above.

1.1 By [F2], there is a finite set of finite places containing every place
where $v(n)\ne0$, $v(a)\ne0$, or $v(b)\ne0$. Fix a finite place outside
this set and write $K_v$ for its completion, $\mathcal O_v$ for its valuation
ring, and $k_v$ for its finite residue field. The reduction of $X^n-a$ is
separable: its root is nonzero and its derivative $nX^{n-1}$ is nonzero in
$k_v$. Its roots therefore lie in a finite extension of $k_v$; the
corresponding finite unramified extension of $K_v$ contains their Hensel
lifts. Hence $K_v(\alpha_v)/K_v$ is unramified. [A1, F2, F3, given,
construct]

1.2 The element $b$ is a unit in $\mathcal O_v$, so [F4] makes it a norm
from $K_v(\alpha_v)$. By [F5], $\operatorname{rec}_{K_v}(b)$ restricts to
the identity on that extension, and therefore fixes $\alpha_v$. Thus
$H_{v,n}(a,b)=1$ at every finite place outside the finite set from step 1.1.
[A1, F1, F4, F5, step 1.1]

2.1 The set of archimedean places of a number field is finite. Step 1.2
shows that all but finitely many finite-place factors are $1$, so the full
family of factors has finite support. [step 1.2, algebra] ∎
