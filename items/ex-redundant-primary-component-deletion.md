---
id: ex-redundant-primary-component-deletion
kind: example
title: 'A redundant four-term decomposition cleans up to $(x)\cap(x,y)^2$'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [lem-primary-decomposition-delete-redundant-components, lem-primary-decomposition-combine-equal-radicals]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §18"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §19"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Example

In $R=k[x,y]$, the ideal
$$ I=(x)\cap(x^2,y)\cap(x,y)^2\cap(x,y)^2 $$
cleans up to the minimal decomposition
$$ I=(x)\cap(x,y)^2=(x^2,xy). $$

## Facts & Assumptions

**Given:** The polynomial ring $R=k[x,y]$ and the displayed decomposition of $I$.

[L1] A finite primary decomposition can be stripped of redundant components ([[lem-primary-decomposition-delete-redundant-components]]).

[L2] In a finite primary decomposition of a submodule of a finitely generated module over a Noetherian commutative ring, equal-radical primary components can be combined into one primary component ([[lem-primary-decomposition-combine-equal-radicals]]).

## Verification

**Proof technique:** direct.

1.1 The ideal $(x)$ is prime because $R/(x)\cong k[y]$. The quotients $R/(x^2,y)\cong k[x]/(x^2)$ and $R/(x,y)^2$ are local rings whose maximal ideals are square-zero, so every zero divisor is nilpotent. Hence $(x^2,y)$ and $(x,y)^2$ are $(x,y)$-primary, while $(x)$ is $(x)$-primary. Thus the displayed intersection is a primary decomposition. [given, algebra]

2.1 Since $(x,y)^2=(x^2,xy,y^2)\subseteq (x^2,y)$, the factor $(x^2,y)$ is redundant, and the repeated copy of $(x,y)^2$ is redundant as well. Fact [L1] therefore cleans the four-term intersection down to $$ I=(x)\cap(x,y)^2. $$ [L1, step 1.1, algebra]

3.1 The two surviving radicals are $(x)$ and $(x,y)$, already distinct. If one first combines the two equal-radical components $(x,y)^2$ and $(x,y)^2$, [L2] replaces them by their intersection, which is again $(x,y)^2$. Hence both cleanup orders lead to the same two-term presentation. [L2, step 1.1, step 2.1, algebra]

3.2 Finally, $$ (x)\cap(x,y)^2=(x)\cap(x^2,xy,y^2)=(x^2,xy), $$ because an element in the intersection has the form $xf$ with $f \in (x,y)$. The decomposition is irredundant: $x\in(x)\setminus(x,y)^2$ and $y^2\in(x,y)^2\setminus(x)$. Together with the distinct radicals, this proves minimality. [step 2.1, algebra]

4.1 This example isolates the two routine cleanup moves in a primary decomposition: deletion of redundant components and combination of equal radicals. [step 3.1, step 3.2] ∎
