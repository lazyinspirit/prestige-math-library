---
id: ex-the-snake-lemma-applied-to-multiplication-by-an-integer
kind: example
title: "The snake lemma applied to multiplication by an integer"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-snake-lemma-in-an-abelian-category,
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
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Lemma VIII.4.5"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-24
---

## Example

Fix $n \ge 1$ and apply multiplication by $n$ to the short exact sequence
$$0 \to \mathbb Z \xrightarrow{\times n} \mathbb Z \to \mathbb Z/n \to 0.$$
The snake lemma produces
$$0 \to 0 \to 0 \to \mathbb Z/n \xrightarrow{\delta} \mathbb Z/n \xrightarrow{0} \mathbb Z/n \xrightarrow{1} \mathbb Z/n \to 0,$$
so the connecting morphism is an isomorphism, and under the standard
identifications it is the identity.

## Facts & Assumptions

**Given:** The multiplication-by-$n$ endomorphism of the short exact sequence above.

[L1] Abelian groups form an abelian category ([[thm-abelian-groups-form-an-abelian-category]]).

[L2] The snake lemma gives the exact sequence attached to that ladder ([[thm-snake-lemma-in-an-abelian-category]]).

## Verification

1.1 Multiplication by $n$ on $\mathbb Z$ has zero kernel and cokernel $\mathbb Z/n$, while the induced map on the quotient term $\mathbb Z/n$ is zero. The induced map $\operatorname{coker}(\times n)\to \operatorname{coker}(\times n)$ is multiplication by $n$ on $\mathbb Z/n$, hence is $0$, and the induced map $\operatorname{coker}(\times n)\to\operatorname{coker}(0)$ is the identity of $\mathbb Z/n$. [L1, algebra]

2.1 Substituting those terms into [L2] gives the displayed exact sequence. Exactness at the first copy of $\mathbb Z/n$ forces $\delta$ to be an isomorphism. In the standard snake construction, the class of $1$ in $\ker(0)=\mathbb Z/n$ lifts to $1\in\mathbb Z$ and then maps to the class of $1$ in $\operatorname{coker}(\times n)=\mathbb Z/n$, so under these standard identifications $\delta$ is the identity. [L2, step 1.1, algebra]

3.1 This is the concrete snake sequence for multiplication by an integer. [step 2.1] ∎
