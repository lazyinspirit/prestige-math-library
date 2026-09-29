---
id: lem-associated-sheaf-sections-basic-open
kind: lemma
title: Sections of the associated sheaf on basic opens
status: draft
origin: pipeline
deps:
  - thm-associated-module-sheaf-exists
  - def-associated-sheaf-module-affine-scheme
  - def-localisation-of-a-module
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Assume the Axiom of Choice, inherited from the existence theorem for the
associated sheaf. Let $A$ be a commutative ring, $M$ an $A$-module and
$X=\operatorname{Spec}A$; let $\widetilde M$ be the $\mathcal O_X$-module
associated to $M$, so that $\widetilde M$ is the sheaf whose distinguished-open
sections are the localisations $M_f$.

Then for every $f\in A$ there is a canonical identification
$$\Gamma(D(f),\widetilde M)=\widetilde M(D(f))\;\cong\;M_f,$$
natural in $f$ and in $M$: for $D(g)\subseteq D(f)$ the restriction
$\Gamma(D(f),\widetilde M)\to\Gamma(D(g),\widetilde M)$ is the canonical
localisation $M_f\to M_g$, and an $A$-linear map $u:M\to N$ induces the
morphism of sheaves $\widetilde u:\widetilde M\to\widetilde N$ whose component
at $D(f)$ is the localisation $u_f:M_f\to N_f$. In particular, for $f=1$,
$\Gamma(X,\widetilde M)\cong M$, and for $f=0$ the open set is empty and the
identification reads $\Gamma(\varnothing,\widetilde M)=0=M_0$.

## Facts & Assumptions

**Given:** The Axiom of Choice; a commutative ring $A$; an $A$-module $M$; the
associated sheaf $\widetilde M$ of $M$.

[F1] $\widetilde M$ is a sheaf of $\mathcal O_X$-modules whose distinguished
open sections are the data $M_f$ with restriction maps $\rho_{fg}$, and it is
unique up to unique isomorphism compatible with that data
([[thm-associated-module-sheaf-exists]]).

[F2] The maps $\rho_{fg}$ are functorial and are the canonical localisations
compatible with the canonical maps $M\to M_f$; an $A$-linear $u:M\to N$
induces $u_f:M_f\to N_f$ compatible with the $\rho$'s
([[def-associated-sheaf-module-affine-scheme]],
[[def-localisation-of-a-module]]).

## Proof

**Proof technique:** direct, comparing the canonical identifications delivered by the existence theorem.

1.1 By [F1] the extension $\widetilde M$ is unique up to unique isomorphism over the distinguished-open data, and the identification $\widetilde M(D(f))\cong M_f$ it provides is canonical: on the basis-family description of $\widetilde M$ of [F1] the inverse is evaluation of a family at the member $D(f)$, and the forward map sends $s\in M_f$ to the family $(\rho_{fg}(s))_{D(g)\subseteq D(f)}$. Consequently a morphism of $\mathcal O_X$-modules out of $\widetilde M$ is determined by its components on distinguished opens, and a family of compatible maps on distinguished opens extends uniquely to a morphism. [F1]

1.2 The identifications are natural in $f$: for $D(g)\subseteq D(f)$ the restriction $\widetilde M(D(f))=M_f\to M_g=\widetilde M(D(g))$ is $\rho_{fg}$, the canonical localisation, by [F1] and [F2]. [F1, F2, given]

2.1 They are natural in $M$: an $A$-linear $u:M\to N$ gives localisations $u_f:M_f\to N_f$ compatible with the restriction maps $\rho$ by [F2], hence a compatible family of $\mathcal O_{D(f)}$-linear maps between the distinguished-open data, which extends uniquely to a morphism $\widetilde u:\widetilde M\to\widetilde N$ with component $u_f$ on $D(f)$; this assignment preserves identities and compositions because each $u\mapsto u_f$ does. [F2, step 1.1]

3.1 In particular $\Gamma(X,\widetilde M)=\widetilde M(D(1))=M_1=M$ and more generally $\Gamma(D(f),\widetilde M)=M_f$ for every $f$, with the stated restriction maps; for $f=0$ one has $D(0)=\varnothing$, $M_0=0$ and $\Gamma(\varnothing,\widetilde M)=0$ by the sheaf axiom for the empty cover, so the degenerate case is included; the Axiom of Choice is inherited from [F1] and no further choice is made. [F1, given, step 1.2, step 2.1] ∎
