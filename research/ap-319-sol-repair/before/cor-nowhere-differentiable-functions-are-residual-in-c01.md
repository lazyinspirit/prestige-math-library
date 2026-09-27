---
id: cor-nowhere-differentiable-functions-are-residual-in-c01
kind: corollary
title: "Under Dependent Choice, nowhere differentiable functions form a residual subset of $C([0,1],\\mathbb R)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nowhere-dense-meagre-and-residual-subsets, lem-pointwise-lipschitz-sets-in-c01-are-closed, lem-steep-polygonal-functions-are-dense-in-c01, thm-nowhere-differentiable-functions-are-dense-in-c01, prop-meagre-subsets-form-a-sigma-ideal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "David Marker, Descriptive Set Theory, §§1–2"
      url: "https://www.math.uic.edu/~marker/math512/dst.pdf"
    - title: "Michael Kunzinger, General Topology, §§11.3–11.4"
      url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
    - title: "MFF General Topology course summary, §4.3"
      url: "https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf"
pipeline_run: null
---

## Statement

Assume Dependent Choice. The nowhere differentiable functions form a residual subset of $C([0,1],\mathbb R)$ with the uniform metric, where differentiability at an endpoint means the corresponding one-sided derivative.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Let $X$ be a topological space and let $A\subseteq X$. The set $A$ is **nowhere dense** when $\operatorname{int}(\overline A)=\varnothing$ (def-interior-closure-boundary-top). It is **meagre** when there is a sequence $(N_n)_{n\in\mathbb N}$ of nowhere dense subsets of $X$ with $A\subseteq\bigcup_nN_n$. It is **residual**, or **comeagre**, when $X\setminus A$ is meagre. The empty union shows that $\varnothing$ is meagre, including when $X=\varnothing$. ([[def-nowhere-dense-meagre-and-residual-subsets]]).

[F2] For $p,q\in\mathbb N_{>0}$, let $E_{p,q}$ be the functions $f\in C([0,1],\mathbb R)$ for which some $a\in[0,1]$ satisfies $|f(t)-f(a)|\le p|t-a|$ whenever $t\in[0,1]$ and $|t-a|<1/q$. Then $E_{p,q}$ is closed in the supremum metric. ([[lem-pointwise-lipschitz-sets-in-c01-are-closed]]).

[F3] For every $f\in C([0,1],\mathbb R)$, every $\varepsilon>0$, and every $M>0$, there is a piecewise-affine $h$ with finitely many vertices such that $\lVert f-h\rVert_\infty<\varepsilon$ and every slope on a nonvertex affine piece has absolute value greater than $M$. ([[lem-steep-polygonal-functions-are-dense-in-c01]]).

[F4] Assume the Axiom of Dependent Choice ($\mathrm{DC}$). Then the set of continuous functions $[0,1]\to\mathbb R$ having no finite two-sided derivative at an interior point and no finite one-sided derivative at either endpoint is dense in $C([0,1],\mathbb R)$ for the supremum metric. ([[thm-nowhere-differentiable-functions-are-dense-in-c01]]).

[F5] For every topological space $X$, the meagre subsets of $X$ contain $\varnothing$, are closed under taking subsets, and are closed under countable unions ([[prop-meagre-subsets-form-a-sigma-ideal]]).

## Proof

**Proof technique:** direct.

1.1 Use the published closed pointwise-Lipschitz sets and the dense steep-polygonal perturbations to show every such closed set has empty interior. [given, F3, F1, F2]

2.1 Their countable union $M$ is meagre by step 1.1 and contains every function with a finite derivative at some point, so the complement of $M$ is residual and consists of nowhere differentiable functions. The set $N$ of nowhere differentiable functions contains that residual complement, so its own complement is a subset of $M$; meagre sets are closed downward under subsets, being a sigma-ideal [F5], hence the complement of $N$ is meagre and $N$ is residual. One-sided endpoint derivatives are included. [step 1.1, F4, F1, F3, F5]

3.1 The preceding construction and implications establish the assertion. [step 2.1] ∎
