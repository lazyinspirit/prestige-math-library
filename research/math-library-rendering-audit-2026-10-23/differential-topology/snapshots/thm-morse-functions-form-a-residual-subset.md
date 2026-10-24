---
id: thm-morse-functions-form-a-residual-subset
kind: theorem
title: "In the strong $C^\\infty$ topology on $C^\\infty(M,\\mathbb R)$, the Morse functions form a residual subset"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-morse-functions-are-transverse-differentials, thm-morse-functions-are-dense-by-relative-jet-transversality, thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 10"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf"
    - title: "Shintaro Fushida-Hardy, Morse theory"
      url: "https://www.scribd.com/document/488533132/morse"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M$ be a smooth manifold. In the strong $C^\infty$ topology on
$C^\infty(M,\mathbb R)$, the set of Morse functions is residual.

## Facts & Assumptions

**Given:** A smooth manifold $M$ and the Axiom of Choice.

[F1] A smooth function is Morse exactly when its differential section is transverse to the zero section ([[lem-morse-functions-are-transverse-differentials]]).

[L1] Under countable choice, every smooth manifold admits a smooth proper exhaustion function ([[thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function]]). The assumed Axiom of Choice supplies countable choice.

[L2] Under the Axiom of Choice, every strong neighbourhood of a smooth function contains a Morse perturbation, and that perturbation can be chosen to agree with the original function near any prescribed closed region where transversality already holds ([[thm-morse-functions-are-dense-by-relative-jet-transversality]]).

[A1] For a fixed compact set $K$, the condition that a differential section be transverse to the zero section on a neighbourhood of $K$ is open in the strong topology, because only finitely many first derivatives on a compact neighbourhood of $K$ are involved.

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a smooth proper exhaustion $h:M\to[0,\infty)$ and write $K_n:=h^{-1}([0,n])$. For each $n\ge1$, let $\mathcal O_n$ be the set of smooth functions $g$ such that $dg$ is transverse to the zero section on some open neighbourhood of $K_n$. If $g$ is Morse, then [F1] gives $g\in\mathcal O_n$ for every $n$. Conversely, if $g\in\bigcap_n\mathcal O_n$, then every point of $M$ lies in some $K_n$, so $dg$ is transverse near that point; [F1] then makes $g$ Morse. Thus the Morse functions are exactly $\bigcap_{n\ge1}\mathcal O_n$. [F1, L1, given, construct]

2.1 Each $\mathcal O_n$ is open by [A1]. [A1, step 1.1]

2.2 Each $\mathcal O_n$ is dense. Indeed, given any smooth function $f$ and any strong neighbourhood $\mathcal U$ of $f$, [L2] produces a Morse function $g\in\mathcal U$, and step 1.1 shows that every Morse function belongs to every $\mathcal O_n$. [L2, step 1.1]

3.1 Step 1.1 identifies the Morse functions with a countable intersection of the open dense sets $\mathcal O_n$ from steps 2.1 and 2.2. Therefore the Morse functions form a residual subset of $C^\infty(M,\mathbb R)$ in the strong topology. [step 1.1, step 2.1, step 2.2] ∎
