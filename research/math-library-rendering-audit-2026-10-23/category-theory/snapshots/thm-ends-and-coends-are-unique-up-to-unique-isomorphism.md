---
id: thm-ends-and-coends-are-unique-up-to-unique-isomorphism
kind: theorem
title: "An end and a coend are unique up to a unique isomorphism compatible with every component"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-end-and-coend, def-wedge-and-cowedge, thm-initial-and-terminal-objects-are-unique-up-to-unique-isomorphism]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Definition 1.1.6 and Remark 1.1.5"
      url: "https://arxiv.org/pdf/1501.02503"
pipeline_run: null
---

## Statement

Let $T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$ be a functor.

If $(e,\omega)$ and $(e',\omega')$ are ends of $T$ ([[def-end-and-coend]]),
there is exactly one isomorphism $u:e\to e'$ satisfying
$\omega'_c\circ u=\omega_c$ for every object $c$ of $\mathcal C$. If $(q,\rho)$
and $(q',\rho')$ are coends of $T$, there is exactly one isomorphism
$v:q\to q'$ satisfying $v\circ\rho_c=\rho'_c$ for every $c$.

An end and a coend of $T$ are therefore unique up to a unique isomorphism
compatible with every component.

## Facts & Assumptions

**Given:** A functor $T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$, together with two ends of $T$ and two coends of $T$.

[L1] Any two initial objects in a category are joined by a unique isomorphism. Any two terminal objects are likewise joined by a unique isomorphism ([[thm-initial-and-terminal-objects-are-unique-up-to-unique-isomorphism]]).

[F1] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge ([[def-end-and-coend]]).

[F2] A morphism of wedges $(d,\omega)\to(d',\omega')$ is a morphism $h:d\to d'$ with $\omega'_c\circ h=\omega_c$ for every $c$, a morphism of cowedges $(d,\rho)\to(d',\rho')$ is a morphism $h:d\to d'$ with $h\circ\rho_c=\rho'_c$ for every $c$, and wedges over $T$ and their morphisms form a category $\operatorname{Wd}(T)$, cowedges under $T$ and their morphisms the category $\operatorname{Cwd}(T)$ ([[def-wedge-and-cowedge]]).

## Proof

**Proof technique:** direct.

1.1 The two ends $(e,\omega)$ and $(e',\omega')$ are two terminal objects of the one category $\operatorname{Wd}(T)$, and the two coends are two initial objects of the one category $\operatorname{Cwd}(T)$. [F1, F2]

2.1 Applying the terminal clause of [L1] in $\operatorname{Wd}(T)$ gives a unique isomorphism $(e,\omega)\to(e',\omega')$ of wedges. [L1, F1, step 1.1]

2.2 Applying the initial clause of [L1] in $\operatorname{Cwd}(T)$ gives a unique isomorphism $(q,\rho)\to(q',\rho')$ of cowedges. [L1, F1, step 1.1]

3.1 An isomorphism of $\operatorname{Wd}(T)$ is by [F2] an isomorphism $u:e\to e'$ of $\mathcal D$ with $\omega'_c\circ u=\omega_c$ for every $c$, and an isomorphism of $\operatorname{Cwd}(T)$ is an isomorphism $v:q\to q'$ with $v\circ\rho_c=\rho'_c$ for every $c$; so the two isomorphisms produced in steps 2.1 and 2.2 are exactly the ones the Statement asserts, and their uniqueness is the uniqueness given there. [F2, step 2.1, step 2.2] ∎

## Remarks

The compatibility clause is not an extra verification: it is what being a morphism in $\operatorname{Wd}(T)$ or $\operatorname{Cwd}(T)$ means, so the published uniqueness of terminal and initial objects delivers it already. This is why the definition of an end is stated as a universal property in a category of wedges rather than as a family of morphisms with an ad hoc uniqueness clause.

An isomorphism of wedges is in particular an isomorphism of $\mathcal D$: its inverse in $\operatorname{Wd}(T)$ is a morphism of $\mathcal D$ satisfying the displayed equation, and the two composites are the identities of $e$ and $e'$.
