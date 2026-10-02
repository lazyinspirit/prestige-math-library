---
id: lem-the-induced-action-is-strongly-continuous
kind: lemma
title: "Strong continuity of unitary induction"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, lem-the-induced-action-is-unitary, lem-compactly-supported-covariant-generators-are-dense, lem-closed-subgroup-quotient-averaging-and-compact-lifts, thm-weil-quotient-integration-formula-with-rho-function]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bekka–de la Harpe–Valette, Kazhdan’s Property (T), Appendices B and E"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Chapters 1 and 7"
      url: "https://ncatlab.org/nlab/files/Bruhat-LecturesOnLie.pdf"
    - title: "David Vogan, Unitary Representations of Locally Compact Groups and Induced Representations"
      url: "https://math.mit.edu/~dav/ind.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume AC. The induced unitary action $\Pi_\rho$ is strongly continuous: $\|\Pi_\rho(g)F-F\|_2\to0$ as $g\to e$ for every vector in the induced Hilbert space.

## Facts & Assumptions

**Given:** AC and the induced representation constructed from $H\le G$, $\sigma$, $\rho$, and $\mu_\rho$.

[F1] Each $\Pi_\rho(g)$ is unitary ([[lem-the-induced-action-is-unitary]]).

[F2] Continuous compact-quotient-support sections are dense in the induced Hilbert space ([[lem-compactly-supported-covariant-generators-are-dense]]).

[F3] Compact quotient sets have compact lifts, the quotient is LCH, and its Radon measure is finite on compact sets ([[lem-closed-subgroup-quotient-averaging-and-compact-lifts]], [[thm-weil-quotient-integration-formula-with-rho-function]]).

[A1] AC is assumed for the density and compact-lift construction ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Fix $F\in C_c(G,H;V)$ and let $K$ be its compact quotient support. Choose a compact identity neighborhood $C\subset G$ and put $Q=K\cup CK$, a compact subset of $G/H$. For $g\in C$ both $F$ and $\Pi_\rho(g)F$ vanish off $Q$. [F2, F3, choose]

2.1 Choose a compact lift $K_0\subset G$ of $Q$ using [F3] and [A1]. On $C\times K_0$, joint continuity of $(g,x)\mapsto D_g(xH)^{1/2}F(g^{-1}x)$ and compactness imply uniform convergence to $F(x)$ as $g\to e$. The fiber norm of the difference is right-$H$ invariant, so this gives uniform convergence on $Q$. Since $\mu_\rho(Q)<\infty$, its $L^2$ norm is at most $\mu_\rho(Q)^{1/2}$ times that uniform bound, and tends to zero. [A1, F1, F3, step 1.1]

3.1 For arbitrary $u$ in the completion and $\epsilon>0$, choose $F\in C_c(G,H;V)$ with $\|u-F\|_2<\epsilon$ by [F2]. Unitarity gives $$\|\Pi_\rho(g)u-u\|_2\le2\epsilon+\|\Pi_\rho(g)F-F\|_2.$$ Step 2.1 makes the last term tend to zero; then let $\epsilon\downarrow0$. This proves strong continuity for every vector. ∎ [A1, F1, F2, step 2.1, choose]
## Sources

Bekka–de la Harpe–Valette, *Kazhdan’s Property (T)*, Appendix E §E.1, Proposition E.1.4, PDF pp. 413–414. Full relevant proof was inspected.
