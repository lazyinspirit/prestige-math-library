---
id: ex-shifted-inverse-iteration-targets-a-nondominant-eigenvalue
kind: example
title: "Shifted inverse iteration can target a non-dominant eigenvalue by moving it closest to the shift"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-shifted-inverse-iteration-converges-to-the-simple-eigenvalue-nearest-the-shift]
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references: []
---

## Example

Let

$$ A=\operatorname{diag}(5,1), \qquad \mu=0.8, \qquad x_0=\frac1{\sqrt2}\begin{bmatrix}1\\1\end{bmatrix}. $$

Then shifted inverse iteration converges to the eigendirection of the smaller
eigenvalue $1$, because that eigenvalue is nearest to the shift.

## Facts & Assumptions

**Given:** The diagonal matrix $A$, the shift $\mu=0.8$, and the start vector $x_0$.

[L1] For a diagonalisable matrix, a shift outside the spectrum, a uniquely
nearest simple eigenvalue, and a start vector with nonzero component in its
eigendirection, shifted inverse iteration converges to that eigendirection
([[thm-shifted-inverse-iteration-converges-to-the-simple-eigenvalue-nearest-the-shift]]).

## Verification

**Proof technique:** computation.

1.1 Here $$ (A-\mu I)^{-1} =\operatorname{diag}\!\left(\frac5{21},5\right). $$ The transformed eigenvalue magnitudes are $5/21$ and $5$, so the eigendirection $e_2$ of the original eigenvalue $1$ becomes dominant. [algebra]
2.1 The start vector has nonzero $e_2$-component, so [L1] applies and the normalised iterates converge to the line $\mathbb Fe_2$. [L1, step 1.1] ∎
