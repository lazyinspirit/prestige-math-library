---
id: thm-jordan-decomposition-lies-inside-a-complex-semisimple-lie-algebra
kind: theorem
title: Jordan decomposition lies inside a complex semisimple Lie algebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-abstract-jordan-decomposition-in-a-lie-algebra, thm-additive-jordan-chevalley-decomposition, lem-jordan-chevalley-parts-agree-under-adjoint-representation, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 19, Proposition 19.3"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Every element $x$ of a finite-dimensional complex
semisimple Lie algebra $\mathfrak g$ has a unique abstract Jordan
decomposition $x=x_s+x_n$, and $\operatorname{ad}_{x_s}$,
$\operatorname{ad}_{x_n}$ are the additive Jordan–Chevalley parts of
$\operatorname{ad}_x$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, and an element $x\in\mathfrak g$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it is used only through [L1].

[L1] Under the Axiom of Choice, every endomorphism of a finite-dimensional vector space over a perfect field has a unique additive Jordan–Chevalley decomposition into commuting semisimple and nilpotent parts ([[thm-additive-jordan-chevalley-decomposition]]).

[L2] If $\operatorname{ad}_x=S+N$ is that additive decomposition, there are unique $y_s,y_n\in\mathfrak g$ with $S=\operatorname{ad}_{y_s}$ and $N=\operatorname{ad}_{y_n}$; they give the unique abstract Jordan decomposition of $x$. Conversely, any abstract Jordan decomposition has adjoints $S,N$ ([[lem-jordan-chevalley-parts-agree-under-adjoint-representation]]).

[L3] An abstract Jordan decomposition is a decomposition $x=x_s+x_n$ with commuting parts whose adjoints are semisimple, respectively nilpotent ([[def-abstract-jordan-decomposition-in-a-lie-algebra]]).

## Proof

**Proof technique:** direct.

1.1 The endomorphism $\operatorname{ad}_x$ of the finite-dimensional complex vector space $\mathfrak g$ has an additive Jordan–Chevalley decomposition by [L1]. Applying clause (ii) of [L2] to it produces elements $y_s,y_n\in\mathfrak g$ such that $x=y_s+y_n$, $[y_s,y_n]=0$, $\operatorname{ad}_{y_s}$ is semisimple and $\operatorname{ad}_{y_n}$ is nilpotent, and such that $\operatorname{ad}_{y_s}$, $\operatorname{ad}_{y_n}$ are the additive parts of $\operatorname{ad}_x$. By [L3] this is an abstract Jordan decomposition of $x$. [A1, L1, L2, L3]

2.1 Let $x=u+v$ be any abstract Jordan decomposition. Clause (i) of [L2] identifies $\operatorname{ad}_u$ and $\operatorname{ad}_v$ with the additive Jordan–Chevalley parts of $\operatorname{ad}_x$, which are the parts $\operatorname{ad}_{y_s}$ and $\operatorname{ad}_{y_n}$ produced in step 1.1; uniqueness of the abstract decomposition in [L2] then gives $u=y_s$ and $v=y_n$. For $\mathfrak g=0$ the only element is $0$ and the decomposition $0=0+0$ satisfies the definition vacuously; the Axiom of Choice enters only through [L1] and [L2]. [A1, L1, L2, L3, step 1.1] ∎
