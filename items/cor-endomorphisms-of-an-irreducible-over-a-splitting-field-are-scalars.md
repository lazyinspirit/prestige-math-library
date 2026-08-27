---
id: cor-endomorphisms-of-an-irreducible-over-a-splitting-field-are-scalars
kind: corollary
title: "Over a splitting field, every $G$-endomorphism of an irreducible representation is scalar"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-schurs-lemma-for-irreducible-representations, def-splitting-field-for-a-finite-group]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Proposition 9.2.5"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a finite group, let $k$ be a splitting field for $G$, and let $V$ be
an irreducible representation of $G$ over $k$. Then every endomorphism in
$\operatorname{End}_G(V)$ has the form $\lambda \operatorname{id}_V$ with
$\lambda \in k$.

## Facts & Assumptions

**Given:** A finite group $G$, a splitting field $k$ for $G$, and an irreducible representation $V$ of $G$ over $k$.

[L1] For an irreducible representation, $\operatorname{End}_G(V)$ is a division ring ([[cor-schurs-lemma-for-irreducible-representations]]).

[L2] By definition, a splitting field for $G$ is a field over which every irreducible representation has endomorphism ring exactly $k$ ([[def-splitting-field-for-a-finite-group]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the endomorphism ring $\operatorname{End}_G(V)$ is exactly the scalar copy of $k$ inside $\operatorname{End}_k(V)$. [L2, given]

2.1 Therefore every $G$-endomorphism of $V$ is $\lambda \operatorname{id}_V$ for a unique $\lambda \in k$. Step 1.1 is compatible with the division-ring conclusion of [L1], which is why the scalar copy is a field. [step 1.1, L1] ∎
