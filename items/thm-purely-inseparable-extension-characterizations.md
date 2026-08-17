---
id: thm-purely-inseparable-extension-characterizations
kind: theorem
title: "Pure inseparability and its conjugate, embedding, and separable-degree criteria"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-purely-inseparable-extension, thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots, thm-algebraic-embedding-extension, lem-restriction-fibres-for-embeddings-in-a-finite-tower, thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core, def-separable-degree, thm-perfect-field-characterizations, def-perfect-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $F\subseteq K\subseteq\Omega$, where $K/F$ is algebraic and $\Omega/F$ is
an algebraic closure. The following are equivalent:

1. $K/F$ is purely inseparable;
2. every $\alpha\in K$ has exactly one distinct conjugate over $F$.

If $K/F$ is finite, these are also equivalent to the inclusion
$K\hookrightarrow\Omega$ being the only $F$-embedding of $K$ into $\Omega$,
and to $[K:F]_s=1$. Assuming the Axiom of Choice, the same unique-embedding
criterion is equivalent to conditions 1 and 2 for arbitrary algebraic $K/F$. In
characteristic $p>0$, they are equivalent elementwise to the minimal polynomial
of each $\alpha$ having the form $x^{p^e}-a$, or to
$\alpha^{p^e}\in F$ for some $e\ge0$. In characteristic zero they force
$K=F$.

## Facts & Assumptions

**Given:** Fields $F\subseteq K\subseteq\Omega$, with $K/F$ algebraic and $\Omega/F$ an algebraic closure.

[L1] Pure inseparability is the elementwise $p$-power condition in characteristic $p$, and means the trivial extension in characteristic zero ([[def-purely-inseparable-extension]]).

[L2] Embeddings of $F(\alpha)$ into an algebraic closure correspond to distinct roots of the minimal polynomial ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]).

[L3] Assuming Choice, an embedding of a base field extends across every algebraic extension into an algebraically closed field ([[thm-algebraic-embedding-extension]]).

[L4] In characteristic $p$, an irreducible polynomial is uniquely $g(x^{p^e})$ with $g$ irreducible and separable ([[thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core]]).

[L5] For a finite extension, separable degree counts its embeddings into an algebraic closure ([[def-separable-degree]]).

[L6] In a finite tower, every embedding of the middle field into an algebraic closure extends to the top field ([[lem-restriction-fibres-for-embeddings-in-a-finite-tower]]).

[L7] Every field of characteristic zero is perfect ([[thm-perfect-field-characterizations]]).

[L8] Every nonconstant irreducible polynomial over a perfect field is separable ([[def-perfect-field]]).

## Proof

**Proof technique:** direct.

1.1 In characteristic $p$, if $\alpha^{p^n}=a\in F$, then the minimal polynomial of $\alpha$ divides $x^{p^n}-a=(x-\alpha)^{p^n}$ in $\Omega[x]$, so it has only the distinct root $\alpha$. Conversely, if the minimal polynomial has one distinct root, write it as $g(x^{p^e})$ by [L4]; the separable polynomial $g$ can then have only one root and must be linear, so the minimal polynomial is $x^{p^e}-a$ and $\alpha^{p^e}=a\in F$. [L1, L4, algebra]

1.2 If every element has one conjugate, [L2] shows that every $F$-embedding fixes every element, so the inclusion is the only embedding. If some $\alpha$ has a different conjugate, [L2] gives a nonidentity embedding of $F(\alpha)$ into $\Omega$. When $K/F$ is finite, [L6] extends it across the finite tower $F\subseteq F(\alpha)\subseteq K$; for arbitrary algebraic $K/F$, [L3] gives the same extension under Choice. Thus the unique-embedding criterion is equivalent in exactly the two settings stated. [L2, L3, L6]

2.1 Thus condition 1 is equivalent to condition 2 in positive characteristic. In characteristic zero [L7] and [L8] make every irreducible polynomial separable, so one distinct root forces degree one; hence condition 2 is equivalent to $K=F$, which is condition 1 by [L1]. [step 1.1, L1, L7, L8]

3.1 For finite $K/F$, [L5] says that having exactly one embedding is exactly $[K:F]_s=1$. Together with steps 2.1 and 1.2, this proves the finite equivalences; step 1.2 also proves the asserted arbitrary-extension equivalence under Choice. The trivial extension is included by $e=0$. [step 2.1, step 1.2, L5] ∎
