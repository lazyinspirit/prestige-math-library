---
id: thm-normality-is-not-productive
kind: theorem
title: "Assuming choice, normality is not productive: the normal lower-limit line has a nonnormal square"
status: published
origin: session
deps: [def-axiom-of-choice, def-countable-choice, cor-lower-limit-line-is-normal, lem-jones-normal-density-discrete-bound, lem-lower-limit-plane-antidiagonal, thm-cardinal-power-set-and-cantor, thm-schroder-bernstein, thm-cantor-set-ternary-description, thm-rationals-countable, lem-of-q-dense]
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "G. Gruenhage, General Topology Course Notes, Sorgenfrey plane and Jones's lemma"
      url: "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf"
pipeline_run: null
---

## Statement

Assuming the Axiom of Choice, the lower-limit line is normal but its square is not normal. Hence normality is not productive, even for a product of two factors.

## Facts & Assumptions

**Given:** The Axiom of Choice and the lower-limit line $L$.

[A1] The Axiom of Choice supplies a choice function for every family of nonempty sets, hence for every countably indexed family, which is the Axiom of Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] Under the Axiom of Countable Choice, the lower-limit line is normal ([[cor-lower-limit-line-is-normal]]).

[L1] Jones's lemma injects $\mathcal P(D)$ into $\mathcal P(E)$ when a normal space has closed discrete $D$ and dense $E$ ([[lem-jones-normal-density-discrete-bound]]).

[L2] The plane $L^2$ has $E=\mathbb Q^2$ at most countable and $D=\{(x,-x):x\in\mathbb R\}$ closed discrete with $D\approx\mathbb R$ ([[lem-lower-limit-plane-antidiagonal]]).

[L3] Cantor's theorem gives no injection $\mathcal P(\mathcal P(\mathbb N))\to\mathcal P(\mathbb N)$, and Schröder-Bernstein turns injections both ways into a bijection ([[thm-cardinal-power-set-and-cantor]], [[thm-schroder-bernstein]]).

[L4] The ternary Cantor-set coding injects $\mathcal P(\mathbb N)$ into $\mathbb R$, while $x\mapsto\{q\in\mathbb Q:q<x\}$ injects $\mathbb R$ into $\mathcal P(\mathbb Q)$; a rational between distinct reals makes the latter map injective, and $\mathbb Q\approx\mathbb N$ ([[thm-cantor-set-ternary-description]], [[lem-of-q-dense]], [[thm-rationals-countable]]).

## Proof

**Proof technique:** contradiction.

1.1 By [A1] and [F1], $L$ is normal. Suppose, for a contradiction, that $L^2$ is normal. [A1, F1, assume-contra]

1.2 Jones's lemma applied to the $D,E$ of [L2] injects $\mathcal P(D)$ into $\mathcal P(E)$. [L1, L2]

1.3 The two injections of [L4], with the fixed bijection $\mathbb Q\approx\mathbb N$, give $\mathbb R\approx\mathcal P(\mathbb N)$ by Schröder-Bernstein. Therefore $D\approx\mathcal P(\mathbb N)$, while $E\preceq\mathbb N$. [L2, L3, L4]

2.1 Taking direct images under these injections turns step 1.2 into an injection $\mathcal P(\mathcal P(\mathbb N))\to\mathcal P(\mathbb N)$. [step 1.2, step 1.3]

3.1 This contradicts Cantor's theorem in [L3]. Therefore $L^2$ is not normal, while $L$ is normal, proving nonproductivity. [L3, step 1.1, step 2.1, discharge-contradiction] ∎
