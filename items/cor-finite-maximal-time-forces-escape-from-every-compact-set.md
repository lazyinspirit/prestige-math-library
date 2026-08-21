---
id: cor-finite-maximal-time-forces-escape-from-every-compact-set
kind: corollary
title: "At a finite maximal time an ODE solution leaves every compact subset of the domain"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-existence-and-uniqueness-of-a-maximal-ode-solution, lem-ode-extension-from-a-compact-interior-region, def-countable-choice, thm-well-ordering-principle, thm-recursion]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Statement

Let $x:(\alpha,\beta)\to\mathbb R^n$ be the maximal solution of an IVP whose continuous vector field is locally Lipschitz in the state variable on its open ODE domain. If the positive maximal endpoint is finite, the solution must eventually leave every compact set $K$ contained in that domain: some $s<\beta$ satisfies $(t,x(t))\notin K$ for every $s<t<\beta$. The analogous assertion holds as $t\downarrow\alpha$ when $\alpha$ is finite.

At a finite maximal endpoint the solution leaves every compact subset of the ODE domain. If the positive maximal endpoint is finite, the solution must eventually leave every compact set.

## Facts & Assumptions

**Given:** A Picard–Lindelöf maximal solution with a finite endpoint and an arbitrary compact subset $K$ of the open ODE domain.

[L1] A solution of a Picard–Lindelöf ODE whose graph has a sequence approaching a compact interior endpoint state extends past that endpoint ([[lem-ode-extension-from-a-compact-interior-region]]).

[L2] Countable choice selects one member from each nonempty set in a family indexed by $\mathbb N$ ([[def-countable-choice]]).

[L3] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

[L4] Recursion on $\mathbb N$ defines a unique sequence from a specified initial value and successor rule ([[thm-recursion]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that the graph does not eventually leave $K$. For each positive integer $j$, the set of $t\in(\beta-1/j,\beta)$ with $(t,x(t))\in K$ is nonempty, so [L2] selects one $t_j$ from each set. Then $t_j\to\beta$ from below. Starting with index one, [L3] gives the least later index whose term exceeds the preceding selected term, and [L4] recursively defines these indices; the resulting increasing subsequence tends to $\beta$. [given, L2, L3, L4, assume-contra, choose]

2.1 By [L1] the solution extends past $\beta$, contradicting maximality; reflecting time gives the finite-left-endpoint assertion. [step 1.1, L1, discharge-contradiction] ∎
