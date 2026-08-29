---
id: ex-members-of-an-abelian-group-correspond-to-its-subgroups
kind: example
title: "Members of an abelian group correspond to its subgroups"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-members-modulo-equivalence-correspond-to-subobjects,
       thm-abelian-groups-form-an-abelian-category]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Example

In $\mathbf{Ab}$, a member $x:X \to A$ corresponds exactly to the subgroup
$\operatorname{im}(x) \le A$. Two members are equivalent exactly when they have
the same image subgroup. Thus the member-calculus bijection of
[[thm-members-modulo-equivalence-correspond-to-subobjects]] becomes the usual
identification of subgroup data with image subgroups.

## Facts & Assumptions

**Given:** An abelian group $A$ and a homomorphism $x:X \to A$.

[L1] The category $\mathbf{Ab}$ is abelian
([[thm-abelian-groups-form-an-abelian-category]]).

[L2] Member-equivalence classes correspond to subobjects
([[thm-members-modulo-equivalence-correspond-to-subobjects]]).

## Verification

**Proof technique:** direct.

1.1 In $\mathbf{Ab}$, subobjects of $A$ are exactly subgroup inclusions into $A$, so [L2] identifies the class of $x$ with the subgroup represented by its image inclusion. [L1, L2]

2.1 Therefore the abstract member-subobject correspondence is, in this category, the ordinary rule $x \mapsto \operatorname{im}(x)$. [step 1.1] ∎
