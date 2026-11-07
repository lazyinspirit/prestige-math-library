---
id: ex-idele-with-a-single-nonunit-component
kind: example
title: "An idele with exactly one nonunit finite component"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-idele-group-of-a-global-field
  - def-global-field
  - def-place-of-a-global-field
  - def-local-field-valuation-ring-uniformizer-and-residue-field
dependency_level: 6
proof_strategy: direct
axiom_use: This explicit tuple uses no choice principle.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter V §4, definition and examples of ideles, printed pp.169–170."

---

## Example

Let $F=\mathbb Q$. Define an idele $x=(x_v)_v$ by $x_\infty=1$, $x_2=2$, and $x_p=1$ for every finite prime $p\ne2$. Then $x$ belongs to $\mathbb A_{\mathbb Q}^\times$, and its $2$-adic component is a nonunit while every other finite component is a unit.

## Example references

[[def-idele-group-of-a-global-field|Restricted-product definition of the idele group]]

[[def-place-of-a-global-field|Prime places and normalized valuations]]

[Milne, Class Field Theory, Chapter V §4](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** The rational field, its real and prime places, and the tuple in the Example.

[F1] An idele is a tuple of nonzero local components that are local units at all but finitely many finite places. ([[def-idele-group-of-a-global-field]])

[F2] At the place $2$, the normalized valuation of $2$ is $1$, so $2$ is nonzero but is not a unit in $\mathbb Z_2$. At every place $p\ne2$, the component $1$ is a unit. ([[def-place-of-a-global-field]], [[def-local-field-valuation-ring-uniformizer-and-residue-field]])

## Proof


**Given:** The tuple $x$ and facts above.

1.1 Every coordinate of $x$ is nonzero, and only the finite place $2$ can fail to be a unit. Thus the restricted-product condition in [F1] holds, so $x$ is an idele. [F1, given]

2.1 By [F2], $v_2(x_2)=v_2(2)=1$, whereas a local unit has valuation zero. Hence exactly one finite component is a nonunit; all other finite components equal $1$ and are units. [F2, step 1.1] ∎

