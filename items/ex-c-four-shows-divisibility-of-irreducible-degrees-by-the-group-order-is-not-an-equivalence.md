---
id: ex-c-four-shows-divisibility-of-irreducible-degrees-by-the-group-order-is-not-an-equivalence
kind: example
title: "$C_4$ shows that divisibility of irreducible degrees by $|G|$ is not an equivalence"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-classification-of-cyclic-groups, thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional, thm-the-degree-of-an-irreducible-complex-character-divides-the-group-order]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 3.5"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
verification:
  precheck: pass
---

## Example

The divisor $2$ of $|C_4|=4$ is not the degree of any irreducible complex
character of $C_4$. So the theorem $\chi(1)\mid |G|$ is a necessary condition
for irreducible degrees, not a characterization.

## Facts & Assumptions

**Given:** The cyclic group $C_4$.

[F1] A cyclic group of order $4$ exists and is finite
([[thm-classification-of-cyclic-groups]]).

[F2] Every irreducible representation of a finite abelian group over a splitting
field is one-dimensional
([[thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional]]).

[F3] Irreducible complex character degrees divide the group order
([[thm-the-degree-of-an-irreducible-complex-character-divides-the-group-order]]).

## Verification

**Proof technique:** direct.

1.1 By [F1], $C_4$ is a finite cyclic group of order $4$, hence finite abelian. [F1, given]
2.1 Over $\mathbb C$, every irreducible representation of the finite abelian group $C_4$ has degree $1$ by [F2]. Therefore no irreducible complex character of $C_4$ has degree $2$, even though $2\mid 4$. [F2, step 1.1, algebra]
3.1 This shows that [F3] is not an equivalence: a divisor of $|G|$ need not occur as an irreducible degree. [F3, step 2.1] ∎