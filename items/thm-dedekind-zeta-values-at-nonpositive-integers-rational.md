---
id: thm-dedekind-zeta-values-at-nonpositive-integers-rational
kind: theorem
title: "Rationality of Totally Real Dedekind Zeta Values at Nonpositive Integers"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 22
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-number-field
  - def-dedekind-zeta-function
  - thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
  - thm-totally-real-dedekind-zeta-at-zero-rational
  - thm-dedekind-zeta-values-of-q-at-nonpositive-integers-rational
  - def-totally-real-ray-class-group-and-norm-character
  - def-schwartz-functions-on-the-total-real-ideal-space
  - thm-siegel-rationality-of-totally-real-abelian-l-values
  - thm-tychonoff
  - thm-identity-theorem-holomorphic-functions
  - thm-functional-equation-for-total-real-ideal-space-l-series
justified_by: []
aliases: []
axiom_use: >-
  The k=1 branch uses AC; the K=Q branch uses AC and countable choice; the
  K != Q, k >= 2 Deligne-Ribet branch uses AC, countable choice, and DC.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Pierre Deligne and Kenneth A. Ribet, Values of Abelian L-functions at Negative Integers over Totally Real Fields"
      url: "https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf"
      locator: "The special-value theorem for the trivial character; exact local supplier hypotheses and proof use remain to be checked against batch 104."
    - title: "Helmut Klingen, Über die Werte der Dedekindschen Zetafunktion"
      url: "https://link.springer.com/article/10.1007/BF01435763"
      locator: "The Klingen–Siegel rationality theorem for Dedekind zeta values of totally real fields; a complete local proof is not supplied here."
verification: {}
---

## Statement

Let $K$ be a totally real number field and let $k\ge1$ be an integer. If $k=1$, assume the Axiom of Choice. If $k\ge2$ and $K=\mathbb Q$, assume the Axiom of Choice and countable choice. If $k\ge2$ and $K\ne\mathbb Q$, assume the Axiom of Choice, countable choice, and dependent choice. Under the corresponding branch assumptions, the meromorphic continuation of the Dedekind zeta function satisfies

$$\zeta_K(1-k)\in\mathbb Q.$$

## Statement references

[[def-number-field]]

[[def-dedekind-zeta-function]]

[[def-countable-choice]]

[[def-dependent-choice]]

[[thm-siegel-rationality-of-totally-real-abelian-l-values]]

[[thm-totally-real-dedekind-zeta-at-zero-rational]]

[[thm-dedekind-zeta-values-of-q-at-nonpositive-integers-rational]]

[Pierre Deligne and Kenneth A. Ribet, *Values of Abelian L-functions at Negative Integers over Totally Real Fields*](https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf)

[Helmut Klingen, *Über die Werte der Dedekindschen Zetafunktion*](https://link.springer.com/article/10.1007/BF01435763)


## Facts & Assumptions

**Given:** A totally real number field $K$, an integer $k\ge1$, and the corresponding branch assumptions in the unchanged Statement.

[F1] Under AC, $\zeta_K(0)$ is rational for every totally real $K$. [[thm-totally-real-dedekind-zeta-at-zero-rational]]

[F2] Under AC and Countable Choice, $\zeta_{\mathbb Q}(1-k)$ is rational for every $k\ge1$. [[thm-dedekind-zeta-values-of-q-at-nonpositive-integers-rational]]

[F3] Under AC, Countable Choice and Dependent Choice, $L(1-k,\phi)$ is rational for $K\ne\mathbb Q$ and every rational-valued Schwartz function on its ideal space. [[thm-siegel-rationality-of-totally-real-abelian-l-values]]

[F4] The ideal space is the inverse limit of strict ideal-congruence quotients, with its integral submonoid $\mathcal A_K$; on any bounded-denominator piece each finite-conductor reduction is finite. A rational-valued Schwartz function is locally constant and compactly supported. [[def-totally-real-ray-class-group-and-norm-character]] [[def-schwartz-functions-on-the-total-real-ideal-space]]

[F5] Arbitrary products of compact spaces are compact under AC, and the holomorphic identity theorem holds on connected domains. [[thm-tychonoff]] [[thm-identity-theorem-holomorphic-functions]]

[F6] The Dedekind zeta function is the meromorphic continuation of the Dirichlet series over nonzero integral ideals. [[def-dedekind-zeta-function]]

[F7] An ideal-space Schwartz function of specified sign parity has a meromorphic L-series continuation. [[thm-functional-equation-for-total-real-ideal-space-l-series]]

[A1] The three branches retain exactly the assumptions stated in the original theorem. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** Use the existing branch results and identify the zeta function with the ideal-space L-function of the integral-locus indicator.

1.1 If $k=1$, [F1] gives $\zeta_K(0)\in\mathbb Q$ under the stated AC hypothesis, for every totally real $K$. [F1, A1, given]

1.2 If $K=\mathbb Q$ and $k\ge2$, [F2] gives the conclusion under the stated AC and Countable Choice hypotheses. [F2, A1, given]

1.3 Suppose $K\ne\mathbb Q$ and $k\ge2$. Let $\mathcal A_K$ be the integral ideal submonoid in [F4]. Each of its conductor reductions is finite by the bounded-denominator assertion of [F4]; hence its inverse limit is a closed subspace of a product of finite discrete sets and is compact by [F5]. It is open in the full ideal space: if $\mathfrak a=(\alpha)\mathfrak b$ and $(\alpha-1)\mathfrak b\subseteq\mathcal O_K$, then integrality of $\mathfrak b$ implies $\mathfrak a\subseteq\mathcal O_K$; symmetry gives the converse. Thus integrality is detected by the modulus-one coordinate, and $\mathcal A_K$ is the inverse image of a finite subset of that discrete quotient. Its indicator $1_{\mathcal A_K}$ is rational-valued, locally constant and compactly supported, hence is a Schwartz function in the exact scope of [F3]–[F4]. [F3, F4, F5, A1, given, construct, algebra]

2.1 For $\operatorname{Re}(s)>1$, every nonzero integral ideal lies in $\mathcal A_K$, so the defining ideal series of $L(s,1_{\mathcal A_K})$ is exactly the defining series for $\zeta_K(s)$ in [F6]. The sign classes act by units of $\mathcal A_K$ and preserve it, so $1_{\mathcal A_K}$ has even parity in every coordinate. Thus [F7] supplies its meromorphic continuation, while [F6] supplies that of $\zeta_K$. On a connected open set avoiding their discrete poles the difference is holomorphic and vanishes on the right half-plane; [F5] gives equality there and hence equality as meromorphic functions. Apply [F3] to the admissible function constructed in step 1.3 to conclude $\zeta_K(1-k)=L(1-k,1_{\mathcal A_K})\in\mathbb Q$. [F3, F5, F6, F7, step 1.3, algebra]

3.1 The cases $k=1$, $K=\mathbb Q$ with $k\ge2$, and $K\ne\mathbb Q$ with $k\ge2$ are exhaustive. Steps 1.1, 1.2 and 2.1 prove the conclusion using only the original assumptions for their respective branches. [F1, F2, A1, step 1.1, step 1.2, step 2.1, cases] ∎
