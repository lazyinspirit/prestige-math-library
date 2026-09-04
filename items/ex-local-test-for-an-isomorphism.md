---
id: ex-local-test-for-an-isomorphism
kind: example
title: "Assuming the Axiom of Choice, the Chinese-remainder map Z/6Z -> Z/2Z direct-sum Z/3Z is an isomorphism by local tests"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [thm-local-criterion-for-zero-modules-and-maps, thm-integers-modulo-n-basic-algebra, def-module-homomorphism-kernel-image-and-cokernel]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Corollary 5.17"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Example

Assume the Axiom of Choice.

Consider the $\mathbb Z$-module homomorphism
$$ \phi:\mathbb Z/6\mathbb Z \longrightarrow \mathbb Z/2\mathbb Z \oplus \mathbb Z/3\mathbb Z, \qquad [a]_6 \longmapsto ([a]_2,[a]_3). $$
This map is an isomorphism because every prime localisation of $\phi$ is an isomorphism.

## Facts & Assumptions

**Given:** The $\mathbb Z$-module homomorphism $\phi:\mathbb Z/6\mathbb Z \to \mathbb Z/2\mathbb Z \oplus \mathbb Z/3\mathbb Z$, $[a]_6 \mapsto ([a]_2,[a]_3)$.

[L1] A module homomorphism is an isomorphism exactly when all of its prime localisations are isomorphisms ([[thm-local-criterion-for-zero-modules-and-maps]]).

[L2] The arithmetic of $\mathbb Z/n\mathbb Z$ is the usual modular arithmetic ([[thm-integers-modulo-n-basic-algebra]]).

## Verification

**Proof technique:** direct.

1.1 At the prime $(2)$, the localisation of $\mathbb Z/6\mathbb Z$ is $\mathbb Z/2\mathbb Z$, while the localisation of $\mathbb Z/2\mathbb Z \oplus \mathbb Z/3\mathbb Z$ is $\mathbb Z/2\mathbb Z \oplus 0$, because $3$ becomes a unit. The localised map is therefore the identity on the surviving $\mathbb Z/2\mathbb Z$ summand. [L2, algebra]

1.2 At the prime $(3)$, the same computation gives the identity $\mathbb Z/3\mathbb Z \to 0 \oplus \mathbb Z/3\mathbb Z$. [L2, algebra]

1.3 At every other prime $(q)$, both $\mathbb Z/6\mathbb Z$ and $\mathbb Z/2\mathbb Z \oplus \mathbb Z/3\mathbb Z$ localise to $0$ because both $2$ and $3$ become units. [L2, algebra]

2.1 Steps 1.1, 1.2, and 1.3 show that every prime localisation of $\phi$ is an isomorphism, so [L1] gives that $\phi$ is an isomorphism. [L1, step 1.1, step 1.2, step 1.3] ∎
