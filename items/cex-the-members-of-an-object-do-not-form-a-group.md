---
id: cex-the-members-of-an-object-do-not-form-a-group
kind: counterexample
title: "The members of an object do not form a group"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-each-object-has-a-zero-member-and-each-member-has-a-negative,
       thm-abelian-groups-form-an-abelian-category]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement refuted

For every object in an abelian category, its members modulo equivalence form an
group under the ambient addition of arrows.

## Facts & Assumptions

**Given:** The abelian category $\mathbf{Ab}$ and the identity member
$1_{\mathbb Z}:\mathbb Z \to \mathbb Z$.

[L1] The category $\mathbf{Ab}$ is abelian
([[thm-abelian-groups-form-an-abelian-category]]).

[L2] Every member has a negative, and equivalence to zero is literal equality
to the zero morphism
([[prop-each-object-has-a-zero-member-and-each-member-has-a-negative]]).

## Counterexample

**Proof technique:** direct.

1.1 In $\mathbf{Ab}$, the identity member satisfies $1_{\mathbb Z} \equiv -1_{\mathbb Z}$ because $1_{\mathbb Z}(-1_{\mathbb Z}) = (-1_{\mathbb Z})1_{\mathbb Z}$ and the automorphism $-1_{\mathbb Z}$ is epic. [L1, L2, algebra]

1.2 If member classes carried a group law induced from arrow addition, then $[1_{\mathbb Z}] + [1_{\mathbb Z}] = [1_{\mathbb Z}] + [-1_{\mathbb Z}] = [0]$. But the left-hand class is represented by $2 \cdot 1_{\mathbb Z}:\mathbb Z \to \mathbb Z$, and [L2] says $2 \cdot 1_{\mathbb Z} \equiv 0$ would force $2 \cdot 1_{\mathbb Z} = 0$, which is false in $\mathbf{Ab}$. [L2, assume-hyp, algebra]

2.1 Therefore the member classes of an object need not carry an induced group law. [step 1.1, step 1.2] ∎
