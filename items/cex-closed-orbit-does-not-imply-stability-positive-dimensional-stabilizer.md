---
id: cex-closed-orbit-does-not-imply-stability-positive-dimensional-stabilizer
kind: counterexample
title: "A closed orbit need not be stable: the trivial multiplicative-group action on a point"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
deps: [def-reductive-and-linearly-reductive-over-c, def-stable-points-of-an-affine-action, def-rational-action-on-affine-variety, def-axiom-of-choice]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
---

## Statement refuted

Assume the Axiom of Choice inherited from the named suppliers. The assertion
'every point of a complex affine $G$-variety whose orbit is closed is stable'
is false. Counterexample: $G=\mathbf G_m$ acts trivially on the one-point
affine algebraic set $X=\{0\}=\operatorname{Spec}\mathbb C$; the unique orbit
is closed, but the stabilizer $G_0=G$ is positive-dimensional, so the point is
not stable ([[def-stable-points-of-an-affine-action]],
[[def-reductive-and-linearly-reductive-over-c]]).

## Facts & Assumptions

**Given:** the multiplicative group $G=\mathbf G_m=\mathbb C^\times$ acting
trivially on the one-point affine algebraic set $X=\{0\}$, so that
$t\cdot0=0$ for every $t$.

[F1] *Stable points.* A point $x$ of an affine algebraic set with an algebraic
$G$-action is stable if its orbit $Gx$ is closed in $X$ and its stabilizer
$G_x$ is finite ([[def-stable-points-of-an-affine-action]]); by the same
definition, $G_x$ is finite exactly when $\dim G_x=0$, so a
positive-dimensional stabilizer is infinite.

[F2] *The trivial action is algebraic.* An algebraic left action on an affine
algebraic set is a morphism $G\times X\to X$ satisfying the identity and
associativity laws; the constant map $G\times\{0\}\to\{0\}$ is a morphism and
satisfies both
([[def-rational-action-on-affine-variety]]).

## Verification

**Proof technique:** direct.

1.1 The trivial action of $G=\mathbf G_m$ on $X=\{0\}$ is algebraic by [F2]; its unique orbit is $\{0\}$, which is closed in $X$ because every subset of the one-point space is closed, and the stabilizer of $0$ is $G_0=G$. [F1, F2]

2.1 The group $\mathbf G_m=\mathbb C^\times$ is infinite, since it contains $t$ for every nonzero complex number $t$; hence the stabilizer $G_0$ is not finite and the point $0$ is not stable by [F1], although its orbit is closed. This refutes the displayed assertion. [F1, step 1.1] ∎

## Remarks

- This is Brion's Example 1.27(1) in its simplest form: the closedness of an
  orbit does not suffice for stability, and the finite-stabilizer hypothesis of
  the stable-locus theorem cannot be dropped.
- The counterexample is the one prescribed by the AG-ACT-3 design; the
  companion B-page example `ex-gm-quotient-of-affine-plane` records the same
  phenomenon inside a positive-dimensional computation.
