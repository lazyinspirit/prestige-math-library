---
id: thm-basic-cohen-generic-real-set-has-no-countably-infinite-subset
kind: theorem
title: The basic Cohen set has no countably infinite subset
status: draft
origin: pipeline
deps: [lem-basic-cohen-generic-reals-form-a-symmetric-set, lem-symmetry-lemma-for-forcing-automorphisms]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Theorem 10.25", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

Every map from $\omega$ into $A$ in the basic Cohen model has finite range; therefore no injection $\omega\to A$, no countably infinite subset, and no enumeration of $A$ exists.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[lem-basic-cohen-generic-reals-form-a-symmetric-set]] states the exact coordinate action $\pi\dot a_n=\dot a_{\pi n}$, pairwise distinctness, and infinitude of $A$.

[F2] [[lem-symmetry-lemma-for-forcing-automorphisms]] transports decisions under swaps.

## Proof

1.1 Let $p\Vdash\dot f:\check\omega\to\dot A$, and enlarge a finite support $E$ of $\dot f$ to support $p$. If some $q\le p$ forces $\dot f(i)=\dot a_n$ with $n\notin E$, choose $m$ outside $E\cup\{n\}$ and outside the first-coordinate support of $q$. Let $\pi$ swap $n,m$. Then $\pi\dot f=\dot f$, $\pi p=p$, and F2 gives $\pi q\Vdash\dot f(i)=\dot a_m$. [F1, F2]

2.1 The conditions $q$ and $\pi q$ agree wherever both are defined: the $m$ coordinate was fresh and all other moved coordinates are fixed. Their union is a common extension forcing $\dot a_n=\dot a_m$, contradicting F1. Hence no extension of $p$ can put a value outside $\{a_n:n\in E\}$, and density of decisions yields $p\Vdash\operatorname{ran}\dot f\subseteq\{\dot a_n:n\in E\}$. [F1, step 1.1]

3.1 Thus every such map has finite range, so none is injective or enumerates the infinite set $A$. A countably infinite subset would, by its meaning in ZF, carry a bijection from $\omega$ and hence an injection into $A$, also impossible. Fresh indices were chosen only from explicit complements of finite sets; no AC is used. [step 2.1] ∎
