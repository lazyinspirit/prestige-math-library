---
id: cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars
kind: corollary
title: "Over an algebraically closed field, every endomorphism of an irreducible representation is scalar"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-endomorphisms-over-an-algebraically-closed-field-are-triangularisable, cor-schurs-lemma-for-irreducible-representations, def-algebraically-closed-field]
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
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Corollary 1.17"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Statement

Let $k$ be an algebraically closed field, let $G$ be a group, and let $V$ be an
irreducible representation of $G$ over $k$. Then every $T \in \operatorname{End}_G(V)$
is of the form $T=\lambda \operatorname{id}_V$ for some $\lambda \in k$.

## Facts & Assumptions

**Given:** An algebraically closed field $k$, a group $G$, an irreducible representation $V$ of $G$ over $k$, and an endomorphism $T \in \operatorname{End}_G(V)$.

[L1] Every finite-dimensional endomorphism over an algebraically closed field is triangularisable ([[cor-endomorphisms-over-an-algebraically-closed-field-are-triangularisable]]).

[L2] For an irreducible representation, every nonzero $G$-endomorphism is an isomorphism and $\operatorname{End}_G(V)$ is a division ring ([[cor-schurs-lemma-for-irreducible-representations]]).

## Proof

**Proof technique:** direct.

1.1 The representation $V$ is nonzero because it is irreducible, so [L1] applies to $T$ and yields a basis in which $T$ is upper triangular. Let $\lambda$ be one diagonal entry. Then $T-\lambda \operatorname{id}_V$ is upper triangular with a zero diagonal entry, hence is not invertible. [L1, given]

2.1 For every $g \in G$, the identity map commutes with the action of $g$, so $T-\lambda \operatorname{id}_V$ is still a $G$-endomorphism. By [L2], a nonzero $G$-endomorphism of an irreducible representation must be invertible. Therefore the noninvertible endomorphism $T-\lambda \operatorname{id}_V$ is zero. [step 1.1, L2, given, algebra]

3.1 Hence $T=\lambda \operatorname{id}_V$, as required. [step 2.1] ∎
