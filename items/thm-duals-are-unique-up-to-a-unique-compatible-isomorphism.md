---
id: thm-duals-are-unique-up-to-a-unique-compatible-isomorphism
kind: theorem
title: "Duals are unique up to a unique compatible isomorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-dual-and-right-dual-object, def-the-zig-zag-identities]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Proposition 2.10.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 1.5"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Statement

If $X_1^\vee$ and $X_2^\vee$ are two left duals of the same object $X$, then
there is a unique isomorphism $\phi:X_1^\vee\to X_2^\vee$ compatible with both
evaluation and coevaluation:

$$\operatorname{ev}_2\circ(\phi\otimes1_X)=\operatorname{ev}_1,\qquad (1_X\otimes\phi)\circ\operatorname{coev}_1=\operatorname{coev}_2.$$

The corresponding statement for right duals is also true.

## Facts & Assumptions

**Given:** Two left duals $(X_1^\vee,\operatorname{ev}_1,\operatorname{coev}_1)$
and $(X_2^\vee,\operatorname{ev}_2,\operatorname{coev}_2)$ of $X$.

[L1] Each pair satisfies the left-dual zig-zag identities
([[def-left-dual-and-right-dual-object]], [[def-the-zig-zag-identities]]).

## Proof

**Proof technique:** direct.

1.1 Define $\phi:X_1^\vee\to X_2^\vee$ by the composite $$X_1^\vee\xrightarrow{\rho^{-1}}X_1^\vee\otimes\mathbf 1\xrightarrow{1\otimes\operatorname{coev}_2}X_1^\vee\otimes(X\otimes X_2^\vee)\xrightarrow{\alpha^{-1}}(X_1^\vee\otimes X)\otimes X_2^\vee\xrightarrow{\operatorname{ev}_1\otimes1} \mathbf 1\otimes X_2^\vee\xrightarrow{\lambda}X_2^\vee,$$ and define $\psi:X_2^\vee\to X_1^\vee$ by the same formula with the subscripts interchanged. [given, L1, construct]

2.1 Postcomposing the definition of $\phi$ with $\operatorname{ev}_2$ and precomposing it with $\operatorname{coev}_1$, then using the zig-zag identities from [L1], yields the two compatibility equations in the statement. The same calculation with $\psi$ gives the analogous equations for $\psi$. [step 1.1, L1]

3.1 The composite $\psi\phi$ is the unique morphism $X_1^\vee\to X_1^\vee$ compatible with $\operatorname{ev}_1$ and $\operatorname{coev}_1$, and the identity morphism has that same compatibility by [L1]. Expanding one copy of $\phi$ and one copy of $\psi$ and then straightening with the zig-zag identities shows that $\psi\phi=1_{X_1^\vee}$; similarly $\phi\psi=1_{X_2^\vee}$. Thus $\phi$ is an isomorphism with inverse $\psi$. [step 2.1, L1]

4.1 If $\chi:X_1^\vee\to X_2^\vee$ is any other morphism satisfying the two compatibility equations, insert $\chi$ into the formula of step 1.1 and use those compatibilities to collapse the same zig-zag composites; the result is $\chi=\phi$. Hence the compatible isomorphism is unique. The right-dual statement is the mirror argument. [step 1.1, step 2.1, step 3.1] ∎
