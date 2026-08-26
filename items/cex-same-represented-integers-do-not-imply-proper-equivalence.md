---
id: cex-same-represented-integers-do-not-imply-proper-equivalence
kind: counterexample
title: "Distinct reduced forms can represent the same integers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-reduced-positive-definite-binary-quadratic-form, thm-unique-reduced-positive-definite-binary-quadratic-form, def-integer-represented-by-binary-quadratic-form]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Example 9.3.4"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
pipeline_run: null
---

## Statement refuted

Two binary quadratic forms can represent exactly the same integers and still
fail to be properly equivalent. The forms

$$f=(2,1,3)\qquad\text{and}\qquad g=(2,-1,3)$$

have this property.

## Facts & Assumptions

**Given:** The forms $f=(2,1,3)$ and $g=(2,-1,3)$.

[L1] Reducedness is defined by $|b|\le a\le c$ together with the boundary sign condition ([[def-reduced-positive-definite-binary-quadratic-form]]).

[L2] Each proper-equivalence class of positive-definite forms contains exactly one reduced form ([[thm-unique-reduced-positive-definite-binary-quadratic-form]]).

[L3] A form represents an integer when it takes that value at some integer pair ([[def-integer-represented-by-binary-quadratic-form]]).

## Counterexample

**Proof technique:** direct.

1.1 Both forms are reduced: for each one, $|\,\pm1\,|\le2\le3$, and no boundary clause is violated because $|b|<a<c$. [L1, given, algebra]

1.2 For every integers $x,y$, one has $g(x,y)=2x^2-xy+3y^2=f(x,-y)$. Thus $g$ represents exactly the integers that $f$ represents, and conversely. [L3, given, algebra]

2.1 The reduced triples are distinct because $(2,1,3)\ne(2,-1,3)$. Therefore [L2] forbids proper equivalence between $f$ and $g$. [L2, step 1.1, algebra] ∎
