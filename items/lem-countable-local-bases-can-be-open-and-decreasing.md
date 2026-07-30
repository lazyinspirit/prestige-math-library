---
id: lem-countable-local-bases-can-be-open-and-decreasing
kind: lemma
title: "A countable local base can be chosen open and decreasing"
status: published
origin: session
deps: [def-first-countable-top, def-neighbourhood-top, def-countable, lem-countable-iff-surjection-from-n]
aliases: []
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "UCR General Topology Notes", url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"}]}
pipeline_run: null
---

## Statement

If $X$ is first countable and $x\in X$, then $x$ has a countable local base $(V_n)_{n\in\mathbb N}$ of open sets with $V_{n+1}\subseteq V_n$.

## Facts & Assumptions

**Given:** A countable local base at $x$ ([[def-first-countable-top]]).

[L1] Each neighbourhood of $x$ contains an open neighbourhood of $x$ ([[def-neighbourhood-top]]).

[L2] Every nonempty at most countable set is a surjective image of $\mathbb N$ ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

## Proof

**Proof technique:** constructive.

1.1 A local base is nonempty, so enumerate it as $(B_n)$ by [L2], with repetitions allowed. Put $U_n=\operatorname{int}(B_n)$. Since $B_n$ is a neighbourhood of $x$, its interior is open, contains $x$, and is contained in $B_n$. This definition is canonical and uses no countable choice. [given, L1, L2, construct]

2.1 Put $V_n=U_0\cap\cdots\cap U_n$; each $V_n$ is open, contains $x$, and $V_{n+1}\subseteq V_n$. [step 1.1, construct]

3.1 Since $V_n\subseteq B_n$, every neighbourhood contains some $V_n$, so $(V_n)$ is the required decreasing local base. [step 2.1, discharge-construct] ∎
