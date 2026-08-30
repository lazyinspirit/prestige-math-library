---
id: ex-the-short-five-lemma-chased-with-members
kind: example
title: "The short five lemma chased with members"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-short-five-lemma-in-an-abelian-category,
       thm-abelian-groups-form-an-abelian-category]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Lemma VIII.4.1"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-24
---

## Example

In $\mathbf{Ab}$, the identity morphism between the short exact sequence
$$0 \to \mathbb Z \xrightarrow{\times 2} \mathbb Z \to \mathbb Z/2 \to 0$$
and itself is the simplest concrete member chase for the short five lemma.

## Facts & Assumptions

**Given:** The identity ladder on the displayed short exact sequence.

[L1] Abelian groups form an abelian category
([[thm-abelian-groups-form-an-abelian-category]]).

[L2] The short five lemma holds in every abelian category
([[thm-short-five-lemma-in-an-abelian-category]]).

## Verification

1.1 Every member of the source sequence is carried to the identical member in the target sequence, so the outer comparison maps are isomorphisms in $\mathbf{Ab}$. [L1, algebra]

2.1 The proof of [L2] then specializes to the tautological chase that the middle identity map is both monic and epic. This example is trivial on purpose: it shows the member language in the easiest possible concrete case. [L2, step 1.1]

3.1 Hence the identity ladder on a short exact sequence of abelian groups is a concrete instance of the short five lemma. [step 2.1] ∎
