---
id: "thm-abelian-sheaves-have-enough-injectives"
kind: "theorem"
title: "Enough injective abelian sheaves"
status: published
origin: pipeline
deps: [def-global-sections-functor-sheaves, lem-abelian-sheaves-form-a-grothendieck-category, thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings, cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution, def-injective-resolution-in-an-abelian-category, def-supplied-injective-resolution-datum, lem-one-step-extension-of-a-partial-injective-resolution, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
    - title: "The Stacks Project, Injectives (tag 01DF)"
      url: https://stacks.math.columbia.edu/tag/01DF
---

## Statement

Assume the Axiom of Choice, and let $X$ be a topological space. Then
$\mathrm{Ab}(X)$ has enough injectives, every abelian sheaf on $X$ admits an
injective resolution ([[def-injective-resolution-in-an-abelian-category]]), and
the embeddings below supply one injective resolution datum
([[def-supplied-injective-resolution-datum]]) on the whole category
$\mathrm{Ab}(X)$: for every abelian sheaf $\mathcal F$ the datum assigns one
specific injective resolution
$$0\to\mathcal F\to I^0(\mathcal F)\to I^1(\mathcal F)\to\cdots,$$
built functorially from $\mathcal F$ with no further selection.

## Facts & Assumptions

[F1] $\mathrm{Ab}(X)$ is a locally small Grothendieck category ([[lem-abelian-sheaves-form-a-grothendieck-category]]).

[F2] Under AC every locally small Grothendieck abelian category admits a functorial monomorphism $\eta_M:M\rightarrowtail E(M)$ of each object into an injective object ([[thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings]]).

[F3] Under AC every locally small Grothendieck category has enough injectives and every object of it admits an injective resolution ([[cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution]]).

[F4] If a coaugmented complex is exact everywhere except possibly at its last term $I^n$ and $j:C^n\rightarrowtail I^{n+1}$ is a monomorphism from the cokernel $C^n$ into an injective object, then composing the quotient map with $j$ extends the complex by one term and makes it exact at $I^n$ ([[lem-one-step-extension-of-a-partial-injective-resolution]]).

[F5] A supplied injective resolution datum on a class of objects assigns to each object of that class one specific injective resolution, and this assignment is part of the input data ([[def-supplied-injective-resolution-datum]]).

## Proof

**Given:** The Axiom of Choice and a topological space $X$.

1.1 By [F1] the category $\mathrm{Ab}(X)$ is a locally small Grothendieck category; applying [F2] and [F3], whose only hypothesis is AC, gives a functorial monomorphism $\eta_M:M\rightarrowtail E(M)$ into an injective object for every object $M$ of $\mathrm{Ab}(X)$, and shows that $\mathrm{Ab}(X)$ has enough injectives and that every abelian sheaf admits an injective resolution. [F1, F2, F3, given]

2.1 Fix an abelian sheaf $\mathcal F$. Set $I^0(\mathcal F):=E(\mathcal F)$ and $\eta^0:=\eta_{\mathcal F}$. Suppose a coaugmented complex $0\to\mathcal F\xrightarrow{\eta}I^0\to\cdots\to I^n$ has been constructed which is exact at every displayed term except possibly at $I^n$, with all $I^j$ injective. Let $C^n:=\operatorname{coker}(I^{n-1}\to I^n)$ for $n\ge1$ and $C^0:=\operatorname{coker}(\eta)$. Put $I^{n+1}(\mathcal F):=E(C^n)$ and $j:=\eta_{C^n}:C^n\rightarrowtail I^{n+1}(\mathcal F)$, which is a monomorphism into an injective object by step 1.1. By [F4] the composite $I^n\twoheadrightarrow C^n\xrightarrow{j}I^{n+1}(\mathcal F)$ extends the complex by one term and makes it exact at $I^n$; all displayed terms of the extended complex are injective. [F4, step 1.1, construct] [F4, construct]

3.1 Recursing the construction of step 2.1 over $n=0,1,2,\dots$ (each step uses only the already constructed complex, so no simultaneous choices are made) produces an injective resolution $0\to\mathcal F\to I^0(\mathcal F)\to I^1(\mathcal F)\to\cdots$ of $\mathcal F$: it is exact at $\mathcal F$ because $\eta^0$ is a monomorphism, and exact at each $I^n$ by construction. [step 2.1, construct] [construct]

3.2 The recursion of step 2.1 is a rule depending only on the object $\mathcal F$: at every stage it applies the fixed functorial embedding $E$ of [F2] to the canonical cokernel of the previously constructed map, so it selects no resolutions, no embeddings and no representatives. Hence $\mathcal F\mapsto I^\bullet(\mathcal F)$ is one specific assignment of an injective resolution to each abelian sheaf, i.e. a supplied injective resolution datum on all of $\mathrm{Ab}(X)$ in the sense of [F5]. [F2, F5, step 2.1] [F2, F5]

4.1 Together, step 1.1 gives enough injectives and that every abelian sheaf admits an injective resolution, step 3.1 gives the resolutions of this construction, and step 3.2 exhibits them as a single supplied functorial datum; the Axiom of Choice is used only through the functorial embedding [F2] and the corollary [F3], and nowhere else. [F2, F3, step 3.1, step 3.2] ∎
