---
id: ex-the-connecting-morphism-computed-for-a-short-exact-sequence-of-abelian-groups
kind: example
title: "The connecting morphism computed for a short exact sequence of abelian groups"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-the-connecting-morphism-exists-and-is-unique,
       thm-snake-lemma-in-an-abelian-category,
       thm-abelian-groups-form-an-abelian-category]
justified_by: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Lemma VIII.4.5"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-24
---

## Example

In $\mathbf{Ab}$, consider

```tikzcd
0 \arrow[r] & \mathbb Z \arrow[r, "\times 2"] \arrow[d, "\times 2"'] & \mathbb Z \arrow[r] \arrow[d, "\times 2"'] & \mathbb Z/2 \arrow[r] \arrow[d, "0"'] & 0 \\
0 \arrow[r] & \mathbb Z \arrow[r, "\times 2"'] & \mathbb Z \arrow[r] & \mathbb Z/2 \arrow[r] & 0.
```

The connecting morphism
$$\delta:\ker(0)\cong \mathbb Z/2 \longrightarrow \operatorname{coker}(\times 2)\cong \mathbb Z/2$$
is the identity map.

## Facts & Assumptions

**Given:** The diagram above in $\mathbf{Ab}$.

[L1] Abelian groups form an abelian category
([[thm-abelian-groups-form-an-abelian-category]]).

[L2] The connecting morphism exists, and the snake sequence is exact
([[thm-the-connecting-morphism-exists-and-is-unique]],
[[thm-snake-lemma-in-an-abelian-category]]).

## Verification

1.1 By [L1], the displayed diagram is valid snake data. Its kernel and cokernel terms are $$\ker(\times 2)=0,\qquad \ker(0)=\mathbb Z/2,\qquad \operatorname{coker}(\times 2)=\mathbb Z/2.$$ [L1, algebra]

2.1 The snake sequence from [L2] therefore reduces to $$0 \to 0 \to 0 \to \mathbb Z/2 \xrightarrow{\delta} \mathbb Z/2 \to \mathbb Z/2 \to \mathbb Z/2 \to 0.$$ Exactness at the source and target of $\delta$ forces $\delta$ to be both injective and surjective, hence the identity automorphism of $\mathbb Z/2$. [L2, step 1.1, algebra]

3.1 So in this concrete diagram the connecting morphism is the identity on $\mathbb Z/2$. [step 2.1] ∎
