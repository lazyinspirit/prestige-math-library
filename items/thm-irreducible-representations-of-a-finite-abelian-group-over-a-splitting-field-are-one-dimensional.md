---
id: thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional
kind: theorem
title: "Every irreducible representation of a finite abelian group over a splitting field is one-dimensional"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-endomorphisms-of-an-irreducible-over-a-splitting-field-are-scalars, def-subrepresentation-and-irreducible-representation, thm-group-ring-is-commutative-iff-the-group-is-abelian]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Corollary 2.1.7"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Corollary 1.18"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a finite abelian group and let $k$ be a splitting field for $G$. Then
every irreducible representation of $G$ over $k$ has degree $1$.

## Facts & Assumptions

**Given:** A finite abelian group $G$, a splitting field $k$ for $G$, and an irreducible representation $\rho:G \to \operatorname{GL}(V)$ over $k$.

[L1] Over a splitting field, every endomorphism of an irreducible representation is scalar ([[cor-endomorphisms-of-an-irreducible-over-a-splitting-field-are-scalars]]).

[L2] A representation is irreducible exactly when every nonzero invariant subspace is the whole space ([[def-subrepresentation-and-irreducible-representation]]).

## Proof

**Proof technique:** direct.

1.1 Because $G$ is abelian, for every $g,h \in G$ one has $\rho(g)\rho(h)=\rho(gh)=\rho(hg)=\rho(h)\rho(g)$. So each operator $\rho(g)$ commutes with every $\rho(h)$ and therefore lies in $\operatorname{End}_G(V)$. [L1, L2, given, algebra]

2.1 By [L1], each $\rho(g)$ is a scalar operator. Hence for every nonzero $v \in V$, the line $kv$ is stable under every $\rho(g)$ and is therefore a nonzero subrepresentation. [step 1.1, L1, L2, given]

3.1 Irreducibility from [L2] forces that nonzero line to be all of $V$. Therefore $V$ is one-dimensional. [step 2.1, L2] ∎
