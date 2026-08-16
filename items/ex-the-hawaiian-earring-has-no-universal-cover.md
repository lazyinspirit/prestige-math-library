---
id: ex-the-hawaiian-earring-has-no-universal-cover
kind: example
title: "The Hawaiian earring is locally path-connected but has no universal cover"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-the-unit-loop-in-real-line-mod-integers-is-essential, thm-universal-covering-spaces-force-semilocal-simple-connectedness, def-semilocally-simply-connected-space, def-quotient-topology]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, §1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Marco Gualtieri, MAT1300 Week 4 Term 2, §1.6"
      url: "https://www.math.toronto.edu/mgualt/MAT1300/Week%204%20Term%202.pdf"
    - title: "Omar Antolín Camarena, Proper local homeomorphisms and covering maps"
      url: "https://www.matem.unam.mx/~omar/notes/propetale.html"
pipeline_run: null
---

## Example

The Hawaiian earring is locally path-connected but is not semilocally simply connected at its wedge point. Consequently it has no universal cover.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] The loop $t\mapsto[t]$ in $\mathbb R/\mathbb Z$ is not nullhomotopic. ([[ex-the-unit-loop-in-real-line-mod-integers-is-essential]]).

[F2] If a space admits a universal covering, then it is semilocally simply connected. No local path-connectedness hypothesis is required. ([[thm-universal-covering-spaces-force-semilocal-simple-connectedness]]).

[F3] A space $X$ is **semilocally simply connected at $x\in X$** when there is a neighbourhood $U$ of $x$ and a basepoint-preserving inclusion $(U,x)\hookrightarrow(X,x)$ whose induced map on fundamental groups is trivial (def-neighbourhood-top, def-induced-homomorphism-on-fundamental-groups, def-based-loops-and-fundamental-group). It is semilocally simply connected when this holds at every point. The neighbourhood need not itself be simply connected. ([[def-semilocally-simply-connected-space]]).

[F4] **The quotient topology.** Let $(X, \mathcal{T})$ be a topological space (def-topological-space), let $Y$ be a set and let $q : X \to Y$ be a surjection (def-injection-surjection-bijection). The **quotient topology** on $Y$ induced by $q$ is the final topology of the one-element family $(q)$ (def-initial-and-final-topology): $$\mathcal{T}_q \;:=\; \{\, V \subseteq Y : q^{-1}[V] \in \mathcal{T} \,\} .$$ That this is a topology is discharged in def-initial-and-final-topology, where every final topology is verified to satisfy (T1), (T2) and (T3). Dually, $C \subseteq Y$ is closed in $\mathcal{T}_q$ exactly when $q^{-1}[C]$ is closed in $X$, because $q^{-1}[Y \setminus V] = X \setminus q^{-1}[V]$. ([[def-quotient-topology]]).

## Verification

**Proof technique:** direct.

1.1 Model the earring as countably many copies of $\mathbb R/\mathbb Z$ with diameters tending to zero and all zero classes identified, using the standard shrinking-wedge metric. [given, F1]

2.1 Away from the wedge point, sufficiently short open arcs are path-connected neighbourhoods. [step 1.1, F3, F2]

3.1 At the wedge point, every open neighbourhood contains a smaller metric ball whose intersection with each circle is an arc through the wedge point and which contains every sufficiently small circle, so that ball is path-connected. [step 2.1, F3, F2, F4]

4.1 Retraction to one such small circle and the essential unit loop show its inclusion carries a nontrivial loop, so semilocal simple connectedness fails at the wedge point. [step 3.1, F1, F2, F3]

5.1 The necessity theorem then rules out a universal cover. [step 4.1, F2]

6.1 The preceding construction and implications establish the assertion. [step 5.1] ∎
