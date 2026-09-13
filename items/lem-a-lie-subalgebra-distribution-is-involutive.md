---
id: lem-a-lie-subalgebra-distribution-is-involutive
kind: lemma
title: A Lie-subalgebra distribution is involutive
status: draft
origin: pipeline
deps: [def-countable-choice, def-left-translated-distribution-associated-to-a-lie-subalgebra, prop-local-frame-characterization-of-a-smooth-distribution, prop-involutivity-can-be-checked-on-a-local-frame, prop-the-lie-bracket-of-left-invariant-fields-is-left-invariant]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Lemma 19.24 and proof, printed page 506
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $\mathfrak h$ be a Lie subalgebra of $\mathfrak g=\operatorname{Lie}(G)$.
The left-translated distribution $\mathcal D^{\mathfrak h}$ is involutive.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Lie group $G$ and a Lie subalgebra
$\mathfrak h\subseteq\mathfrak g=\operatorname{Lie}(G)$.

[A1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F1] Under $\mathrm{AC}_\omega$, left translation makes $\mathcal D^{\mathfrak h}$ a smooth
constant-rank distribution. [[def-left-translated-distribution-associated-to-a-lie-subalgebra]].

[F2] Involutivity can be checked on any smooth local frame.
[[prop-involutivity-can-be-checked-on-a-local-frame]].

[F3] Under $\mathrm{AC}_\omega$, the bracket of left-invariant vector fields is left invariant.
[[prop-the-lie-bracket-of-left-invariant-fields-is-left-invariant]].

## Proof

**Proof technique:** direct.

1.1 Choose one finite basis $E_1,\ldots,E_r$ of $\mathfrak h$, using the empty basis if $r=0$, and let $E_i^L(g)=d(L_g)_eE_i$. By [F1], the fields $E_1^L,\ldots,E_r^L$ form a global smooth frame for $\mathcal D^{\mathfrak h}$. [F1, construct]

2.1 By [F3], $[E_i^L,E_j^L]$ is left invariant. Its value at $e$ is the Lie-algebra bracket $[E_i,E_j]$, which belongs to $\mathfrak h$ because $\mathfrak h$ is a subalgebra. If $[E_i,E_j]=\sum_k c_{ij}^kE_k$, left invariance gives $[E_i^L,E_j^L]=\sum_k c_{ij}^kE_k^L$, a section of $\mathcal D^{\mathfrak h}$. [F3, step 1.1, algebra]

3.1 The frame criterion [F2] applied to step 2.1 proves involutivity. When $r=0$, every local section is zero and the same conclusion is vacuous; when $r=\dim G$, the distribution is $TG$. The hypothesis [A1] is used through [F1]'s smooth tangent-bundle trivialization and [F3]'s invariant-bracket result; choosing the single finite basis in step 1.1 adds no choice. [A1, F1, F2, F3, step 1.1, step 2.1] ∎
