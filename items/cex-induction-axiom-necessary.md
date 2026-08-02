---
id: cex-induction-axiom-necessary
kind: counterexample
title: "The induction axiom is independent of the other Peano axioms"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-peano-system, def-natural-numbers]
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Peano axioms (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Peano_axioms"
    - title: "K. Sutner, Dedekind-Peano Axioms (Carnegie Mellon)"
      url: "https://www.cs.cmu.edu/~sutner/pdf/30-Peano.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** any triple $(N, 0, \sigma)$ satisfying (P1) $0$ is not a
successor and (P2) $\sigma$ is injective automatically satisfies (P3) induction.
The witness is $N = \mathbb{N} \sqcup \mathbb{Z}$ (a disjoint union of a copy of
the naturals and a copy of the integers), with base point $0$ the zero of the
$\mathbb{N}$-copy and $\sigma$ the usual successor $n \mapsto n + 1$ on each copy
separately.

## Facts & Assumptions

**Given:** $N = \mathbb{N} \sqcup \mathbb{Z}$ with $\sigma$ acting as successor within each copy; $0 =$ the $\mathbb{N}$-copy's zero. Write $N_{\mathbb{N}}, N_{\mathbb{Z}}$ for the two copies.

[L1] The Peano axioms P1, P2, P3 ([[def-peano-system]]).

[L2] $\mathbb{N}$ itself is the standard model ([[def-natural-numbers]]).

## Counterexample

**Proof technique:** direct.

1.1 P1 holds: $\sigma$ is the successor within each copy; $0$ is the $\mathbb{N}$-copy zero, which is not the successor of any element (nothing in $N_{\mathbb{N}}$ maps to it, and $\sigma$ maps $N_{\mathbb{Z}}$ into $N_{\mathbb{Z}}$), so $\sigma(x) \neq 0$ for all $x$. [given, L1]

1.2 P2 holds: $\sigma$ is injective on $N_{\mathbb{N}}$ and on $N_{\mathbb{Z}}$ separately, and $\sigma$ maps each copy into itself, so $\sigma$ is injective on $N$. [given, L1]

1.3 P3 fails: let $S = N_{\mathbb{N}}$, the $\mathbb{N}$-copy; then $0 \in S$ and $\sigma$ maps $S$ into $S$ ($\sigma(N_{\mathbb{N}}) \subseteq N_{\mathbb{N}}$), so $S$ contains $0$ and is closed under $\sigma$; the $\mathbb{N}$-copy is the standard model [L2]. [given, L1, L2]

2.1 But $S = N_{\mathbb{N}} \neq N$, since the $\mathbb{Z}$-copy $N_{\mathbb{Z}}$ is disjoint from $S$ and nonempty. [step 1.3]

3.1 Thus $(N, 0, \sigma)$ satisfies P1 and P2 but not P3, refuting the claim: induction is independent of P1 and P2 and cannot be dropped. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
