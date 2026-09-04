---
id: cor-adapted-classes-compute-derived-functors
kind: corollary
title: "Adapted classes compute derived functors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-f-acyclic-resolution, thm-acyclic-resolution-theorem-for-right-derived-functors, thm-acyclic-resolution-theorem-for-left-derived-functors]
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
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Statement

Assume the Axiom of Dependent Choice.

1. Let $I$ be a supplied injective resolution datum on a class $\mathcal D$,
   and let $F$ be an additive left exact functor. Suppose
   $\mathcal C\subseteq\mathcal D$ is made of $F$-acyclic objects, is closed
   under cokernels of monomorphisms between objects of $\mathcal C$, and every
   object of $\mathcal D$ admits a monomorphism into an object of
   $\mathcal C$. Then any coaugmented resolution of an object $A\in\mathcal D$
   obtained by iterating monomorphisms
   $$Z^q\hookrightarrow C^q,\qquad C^q\in\mathcal C,\qquad Z^{q+1}:=\operatorname{coker}(Z^q\hookrightarrow C^q)\in\mathcal D,$$
   computes $R_I^nF(A)$.
2. Dually, let $P$ be a supplied projective resolution datum on a class
   $\mathcal D$, let $F$ be additive and right exact, and suppose
   $\mathcal C\subseteq\mathcal D$ is made of $F$-acyclic objects, is closed
   under kernels of epimorphisms between objects of $\mathcal C$, and every
   object of $\mathcal D$ admits an epimorphism from an object of
   $\mathcal C$. Then any augmented resolution of an object $A\in\mathcal D$
   obtained by iterating epimorphisms
   $$C_q\twoheadrightarrow Z_q,\qquad C_q\in\mathcal C,\qquad Z_{q+1}:=\ker(C_q\twoheadrightarrow Z_q)\in\mathcal D,$$
   computes $L_n^PF(A)$.
## Facts & Assumptions

**Given:** One of the two clause-wise hypotheses from the statement.

[L1] Once the relevant supplied datum is fixed, an $F$-acyclic resolution is exactly a resolution whose terms are $F$-acyclic and whose orientation matches the side being derived ([[def-f-acyclic-resolution]]).

[L2] Such resolutions compute right derived functors ([[thm-acyclic-resolution-theorem-for-right-derived-functors]]).

[L3] Such resolutions compute left derived functors ([[thm-acyclic-resolution-theorem-for-left-derived-functors]]).

## Proof

**Proof technique:** direct.

1.1 In the left exact case, start with $Z^0=A$. By hypothesis, every object of $\mathcal D$ admits a monomorphism into an object of $\mathcal C$, so we may choose monomorphisms $Z^q\hookrightarrow C^q$ with $C^q\in\mathcal C$ and define $Z^{q+1}$ to be the cokernel, still in $\mathcal D$. This produces an exact coaugmented resolution by objects of $\mathcal C$. Because every object of $\mathcal C$ is $F$-acyclic, [L1] identifies the result as an $F$-acyclic resolution relative to $I$. [L1, given, construct]

1.2 The right exact case is dual: start with $Z_0=A$, repeatedly choose epimorphisms $C_q\twoheadrightarrow Z_q$ with $C_q\in\mathcal C$, and define $Z_{q+1}$ to be the kernel, still in $\mathcal D$. The resulting exact augmented resolution has all terms in $\mathcal C$, hence is an $F$-acyclic resolution relative to $P$ by [L1]. [L1, given, construct]

2.1 Apply [L2] to the resolution from step 1.1 and [L3] to the resolution from step 1.2. This proves both clauses. [L2, L3, step 1.1, step 1.2] ∎
