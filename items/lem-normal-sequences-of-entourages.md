---
id: lem-normal-sequences-of-entourages
kind: lemma
title: "Assuming dependent choice, every entourage admits a normal symmetric sequence subordinate to it"
status: published
origin: session
deps: [def-uniform-space-by-entourages, lem-symmetric-entourages-form-a-base, def-dependent-choice]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

Assuming dependent choice, for every entourage $U$ there are symmetric
entourages $(E_n)_{n\in\mathbb N}$ such that $E_0=X\times X$,
$E_1\subseteq U$, the sequence is decreasing, and
$E_{n+1}^{\circ3}\subseteq E_n$ for every $n\in\mathbb N$.

## Facts & Assumptions

**Given:** A uniformity $\mathcal U$, an entourage $U$, and dependent choice.

[L1] Every entourage has a symmetric square root ([[lem-symmetric-entourages-form-a-base]]).

[L2] Dependent choice produces a sequence following any serial relation ([[def-dependent-choice]]).

## Proof

**Proof technique:** constructive.

1.1 Given a symmetric entourage $E$, choose a symmetric $R$ with $R^{\circ2}\subseteq E$, and then a symmetric $D$ with $D^{\circ2}\subseteq R$. Since every entourage contains the diagonal, $D\subseteq R$, and hence $$ D^{\circ3}\subseteq R^{\circ2}\subseteq E. $$ Thus there exists a symmetric $D\subseteq E$ with $D^{\circ3}\subseteq E$. [L1, construct]

2.1 The relation $E\mathrel R D$ meaning that $D$ is symmetric, $D\subseteq E$, and $D\circ D\circ D\subseteq E$ is serial by step 1.1. [step 1.1]

3.1 Choose a symmetric entourage $E_1\subseteq U$ using [L1]. Dependent choice applied to the serial relation of step 2.1 starting at $E_1$ gives $E_1,E_2,\ldots$. Adjoin $E_0=X\times X$; then $E_1^{\circ3}\subseteq X\times X=E_0$, and all the required properties hold. [step 2.1, L1, L2, discharge-construct] ∎
