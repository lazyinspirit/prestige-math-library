---
id: thm-mutually-generic-cohen-coordinate-reals
kind: theorem
title: Cohen coordinates are distinct and mutually generic
status: published
origin: pipeline
deps: [def-cohen-collapse-and-levy-collapse-forcings, thm-forcing-theorem, lem-forcing-monotonicity-density-and-decision, def-dense-open-sets-and-model-generic-filters, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Cohen forcing and product factorization", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

Let $M$ be a transitive ZFC model and $G$ be $M$-generic for $\operatorname{Add}(\omega,\lambda)$. For $\xi<\lambda$, $c_\xi(n)=(\bigcup G)(\xi,n)$ is a total real; distinct coordinates give distinct reals. For every partition $\lambda=I\mathbin{\dot\cup}J$ in $M$, the restrictions $G_I$ and $G_J$ are mutually generic and
$M[G]=M[G_I][G_J]=M[G_J][G_I]$.

## Facts & Assumptions

**Given:** The stated transitive ZFC model, forcing, generic, and ground-model partition.

[F1] [[def-cohen-collapse-and-levy-collapse-forcings]] identifies the order with finite partial binary functions.

[F2] [[def-dense-open-sets-and-model-generic-filters]] gives dense-set meeting.

[F3] [[thm-forcing-theorem]] supplies the truth and name interpretation statements.

[F4] [[lem-forcing-monotonicity-density-and-decision]] supplies forcing persistence, dense decision, and generic meeting of a set dense below a condition in the generic.

## Proof

1.1 For fixed $(\xi,n)$, conditions defining that bit are dense, so $c_\xi$ is total. For $\xi\ne\eta$, below any condition choose a fresh $n$ and assign opposite bits at $(\xi,n)$ and $(\eta,n)$; this dense set proves $c_\xi\ne c_\eta$. [F1, F2]

1.2 Restriction is an order isomorphism $\operatorname{Add}(\omega,\lambda)\cong\operatorname{Add}(\omega,I)\times\operatorname{Add}(\omega,J)$, with inverse union, so each projection is ground-model generic. Let $D=\dot D_{G_I}$ be dense open in the second factor in $M[G_I]$. Choose $p\in G_I$ forcing that $\dot D$ is dense. Below $(p,1)$, pairs $(r,t)$ for which $r\Vdash\check t\in\dot D$ are dense: below any $(r,s)$, forced density supplies an extension $t\le s$ in $\dot D$, and one may strengthen $r$ to decide a witnessing ground-model $t$. Adjoining all pairs whose first coordinate is incompatible with $p$ makes this a ground-model dense subset of the full product. The product generic meets it, and directedness with $p\in G_I$ excludes the incompatible branch; its second coordinate is the actual $t\in G_J\cap D$. Thus $G_J$ is generic over $M[G_I]$, and symmetry gives the reverse direction. If $I$ or $J$ is empty, its factor is the one-condition forcing, its projection gives the unique filter, and the same statement is literal. [F1, F2, F3, F4]

2.1 Evaluation of a product name can be performed successively in either coordinate, and the full generic is recovered as $G_I\times G_J$. The three extension models are therefore equal. No choice beyond the stated ZFC background is hidden in the coordinate construction. [F3, step 1.2] ∎
