---
id: cor-a-second-proof-that-adjoints-are-unique
kind: corollary
title: "A second proof that adjoints are unique"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
deps: [thm-a-dual-object-in-the-endofunctor-category-is-an-adjoint-functor, thm-duals-are-unique-up-to-a-unique-compatible-isomorphism]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Proposition 4.2.4"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Proposition 2.10.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

If an endofunctor $F$ has two left adjoints $L_1$ and $L_2$, then there is a
unique natural isomorphism $L_1\cong L_2$ compatible with the two adjunction
structures. The corresponding statement for right adjoints is also true.

## Facts & Assumptions

**Given:** Endofunctors $L_1,L_2,F:\mathcal C\to\mathcal C$ and adjunctions
$L_1\dashv F$ and $L_2\dashv F$.

[L1] An adjunction to $F$ is the same thing as a dual object of $F$ in the
composition monoidal category ([[thm-a-dual-object-in-the-endofunctor-category-is-an-adjoint-functor]]).

[L2] Duals of a fixed object are unique up to a unique compatible isomorphism
([[thm-duals-are-unique-up-to-a-unique-compatible-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the two adjunctions $L_1\dashv F$ and $L_2\dashv F$ make $L_1$ and $L_2$ into two left duals of the same object $F$ in the endofunctor composition monoidal category. [given, L1]

2.1 Applying [L2] to those two duals yields a unique compatible isomorphism $L_1\cong L_2$. Compatibility with the duality data is exactly compatibility with the units and counits of the two adjunctions by [L1]. [step 1.1, L1, L2]

3.1 Hence left adjoints of a fixed functor are unique up to unique compatible natural isomorphism. The right-adjoint statement is the same argument with right duals. [step 2.1] ∎
