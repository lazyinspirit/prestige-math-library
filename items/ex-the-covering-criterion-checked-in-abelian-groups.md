---
id: ex-the-covering-criterion-checked-in-abelian-groups
kind: example
title: "The covering criterion checked in abelian groups"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-covering-criterion-for-exactness,
       thm-abelian-groups-form-an-abelian-category]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.15"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-23
---

## Example

For the short exact sequence
$$0 \to 2\mathbb Z \xrightarrow{i} \mathbb Z \xrightarrow{q} \mathbb Z/2 \to 0,$$
the covering criterion says that every homomorphism $h:W \to \mathbb Z$ with
$q h = 0$ factors through $i$ after the trivial epic cover $1_W:W \to W$.

## Facts & Assumptions

**Given:** The displayed short exact sequence in $\mathbf{Ab}$.

[L1] The covering criterion is equivalent to exactness
([[thm-the-covering-criterion-for-exactness]]).

[L2] The category $\mathbf{Ab}$ is abelian
([[thm-abelian-groups-form-an-abelian-category]]).

## Verification

**Proof technique:** direct.

1.1 If $q h = 0$, then every value of $h$ is even, so $h(W) \subseteq 2\mathbb Z$. Therefore there is a unique homomorphism $l:W \to 2\mathbb Z$ with $h = i l$. [L2, algebra, construct]

2.1 This realizes the cover in [L1] with $V = W$ and $k = 1_W$. So the exactness criterion is visible here without any nontrivial refinement of domains. [L1, step 1.1] ∎
