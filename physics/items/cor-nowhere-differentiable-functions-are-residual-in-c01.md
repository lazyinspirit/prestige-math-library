---
id: cor-nowhere-differentiable-functions-are-residual-in-c01
kind: corollary
title: "Under Dependent Choice, nowhere differentiable functions form a residual subset of $C([0,1],\\mathbb R)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nowhere-dense-meagre-and-residual-subsets, lem-pointwise-lipschitz-sets-in-c01-are-closed, lem-steep-polygonal-functions-are-dense-in-c01, thm-n-cross-n-countable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-08-receipts.jsonl (cor-nowhere-differentiable-functions-are-residual-in-c01). No independent judge or whole-closure certification.
    delegated_by: owner
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

[F4] The pairs of natural numbers have a specified countable enumeration ([[thm-n-cross-n-countable]]).

## Proof

**Proof technique:** direct.

1.1 Fix positive integers $p,q$. By the now choice-free proof of [F2], $E_{p,q}$ is closed. Given any uniform open ball, [F3] supplies within it a polygonal function $h$ whose slopes on all nonvertex pieces have absolute value greater than $p$. At any $a\in[0,1]$, at least one side of $a$ contains arbitrarily close points on one such affine piece; the corresponding difference quotients have absolute value greater than $p$. Hence $h\notin E_{p,q}$. Every open ball meets the complement of $E_{p,q}$, so $E_{p,q}$ has empty interior and is nowhere dense. [F2, F3, F1]

2.1 Enumerate the positive-integer pairs $(p,q)$ using [F4], and let $M=\bigcup_{p,q\ge1}E_{p,q}$. Step 1.1 and [F1] make $M$ a countable union of nowhere dense sets. If $f$ has a finite derivative at some $a$ (one-sided at an endpoint), the difference quotient is bounded near $a$; choose positive integers $p$ above that bound and $q$ so that $1/q$ is within the neighborhood. Then $f\in E_{p,q}$. Thus the complement of the set $N$ of nowhere differentiable functions is a subset of $M$, and this same explicitly given countable family witnesses that the complement of $N$ is meagre. Hence $N$ is residual. [step 1.1, F1, F2, F4]

3.1 The preceding construction and implications establish the assertion. [step 2.1] ∎
