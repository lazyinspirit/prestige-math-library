---
id: thm-the-root-set-is-a-reduced-crystallographic-root-system
kind: theorem
title: "The root set is a reduced crystallographic root system"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras, lem-finite-semisimple-cartan-root-and-string-structure, def-killing-dual-vector-attached-to-a-root]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-03-receipts.jsonl (thm-the-root-set-is-a-reduced-crystallographic-root-system). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For a finite-dimensional
complex semisimple Lie algebra and any Cartan subalgebra $\mathfrak h$ in the
nilpotent self-normalizing sense, with the bilinear form induced on
$\mathfrak h^*$ by the Killing form, its root set $\Phi$ is a finite reduced
crystallographic root system.
Moreover, every root space $\mathfrak g_\alpha$ is one-dimensional.

## Facts & Assumptions

**Given:** The Axiom of Choice; a finite-dimensional complex semisimple Lie
algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and its root set
$\Phi\subseteq\mathfrak h^*$.

[F0] Under Choice, every Cartan subalgebra of $\mathfrak g$ in the nilpotent
self-normalizing sense is maximal toral
([[thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras]]).

[F1] For a maximal toral $\mathfrak h$, the finite semisimple Cartan/root/string
theorem proves that the Killing form is nondegenerate on $\mathfrak h$, every
root space is one-dimensional, and $\Phi$ is a finite reduced crystallographic
root system for its positive real dual form
([[lem-finite-semisimple-cartan-root-and-string-structure]]).

[F2] The Killing-dual vector $H_\alpha$ is the vector corresponding to $\alpha$ under the restricted Killing form ([[def-killing-dual-vector-attached-to-a-root]]).

## Proof

**Proof technique:** direct.

1.1 By [F0], the supplied Cartan subalgebra is maximal toral, so [F1] applies. Its Killing-form restriction is nondegenerate, and its real form is positive definite. Thus its induced bilinear form on the real span of roots agrees with the dual form used in [F1]; [F2] identifies the corresponding root vectors with the Killing-dual notation of this page. [F0, F1, F2]

2.1 The remaining assertions are exactly the conclusions of [F1]: $\Phi$ is finite, spans the real dual, is reduced and crystallographic, and every $\mathfrak g_\alpha$ is one-dimensional. The empty root system when $\mathfrak g=0$ is included there. [F1, step 1.1] ∎
