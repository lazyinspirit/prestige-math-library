---
id: def-continuous-time-stopping-time
kind: definition
title: "Continuous-time stopping times and stopped sigma-algebras"
status: draft
origin: pipeline
deps: [def-continuous-time-filtration-and-all-pairs-martingale]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.3"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "Perla Sousi, Advanced Probability, Section 6.4"
      url: "http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
---

## Definition

Let $(\Omega,\mathcal F,P)$ be a probability space and let
$(\mathcal F_t)_{t\ge0}$ be a continuous-time filtration
[[def-continuous-time-filtration-and-all-pairs-martingale]].

1. A map $\tau:\Omega\to[0,\infty]$ (infinite values allowed) is a **stopping
   time** for $(\mathcal F_t)$ when
   $$\{\tau\le t\}\in\mathcal F_t\qquad\text{for every }t\ge0 .$$
2. For a stopping time $\tau$ its **stopped sigma-algebra** is
   $$\mathcal F_\tau:=\{A\in\mathcal F:A\cap\{\tau\le t\}\in\mathcal F_t \text{ for every }t\ge0\}.$$

The following facts are used below, and each is a direct set computation.

(a) $\mathcal F_\tau$ is a sigma-algebra: $\emptyset\cap\{\tau\le
    t\}=\emptyset\in\mathcal F_t$; for $A\in\mathcal F_\tau$ one has
    $A^c\cap\{\tau\le t\}=\{\tau\le t\}\setminus(A\cap\{\tau\le t\})\in\mathcal
    F_t$; and for a sequence $A_n\in\mathcal F_\tau$ the union satisfies
    $\bigl(\bigcup_nA_n\bigr)\cap\{\tau\le t\}=\bigcup_n(A_n\cap\{\tau\le
    t\})\in\mathcal F_t$. All operations are literal, not modulo null sets, and
    no completeness of the filtration is assumed.
(b) If $\tau\equiv t_0$ is deterministic, then
    $A\cap\{\tau\le t\}$ is $A$ for $t\ge t_0$ and $\emptyset$ for $t<t_0$, so
    $\mathcal F_\tau=\bigcap_{t\ge t_0}\mathcal F_t$. When the filtration is
    right-continuous this is $\mathcal F_{t_0}$, and the deterministic-time case
    of every later computation may use $\mathcal F_{t_0}$.
(c) Suppose the filtration is right-continuous. Then $\tau$ is a stopping time
    if and only if $\{\tau<t\}\in\mathcal F_t$ for every $t>0$. Indeed
    $$\{\tau<t\}=\bigcup_{n\ge1}\{\tau\le t-\tfrac1n\}$$
    (with the terms for $t-\tfrac1n<0$ read as the empty set, since
    $\tau\ge0$), which gives the forward implication; conversely
    $$\{\tau\le t\}=\bigcap_{n\ge1}\{\tau<t+\tfrac1n\},$$
    and $\bigcap_n\mathcal F_{t+1/n}=\bigcap_{s>t}\mathcal F_s=\mathcal F_t$ by
    right-continuity together with monotonicity of the filtration.
(d) Under the same right-continuity assumption, for $A\in\mathcal F$ one has
    $A\in\mathcal F_\tau$ if and only if $A\cap\{\tau<t\}\in\mathcal F_t$ for
    every $t>0$: the forward implication follows from
    $A\cap\{\tau<t\}=\bigcup_n(A\cap\{\tau\le t-\tfrac1n\})$ and the converse
    from $A\cap\{\tau\le t\}=\bigcap_n(A\cap\{\tau<t+\tfrac1n\})$ together with
    $\bigcap_n\mathcal F_{t+1/n}=\mathcal F_t$.

Because the two versions of each test are interchangeable exactly when the
filtration is right-continuous, the convention is recorded here once: the
Brownian strong Markov theorem is stated for the usual augmentation, which is
right-continuous, and the raw-filtration statements use the non-strict test
directly. No choice principle is used by this definition.

## Source notes

Durrett, Section 7.3, and Sousi, Section 6.4, define stopping times by
$\{\tau\le t\}\in\mathcal F_t$ and record the strict-test form for
right-continuous filtrations. The stopped sigma-algebra convention is fixed
here because the strong Markov theorem and the dyadic ceiling argument both
consume the containment $\mathcal F_\tau\subseteq\mathcal F_{\tau_n}$ for
$\tau_n\downarrow\tau$.
