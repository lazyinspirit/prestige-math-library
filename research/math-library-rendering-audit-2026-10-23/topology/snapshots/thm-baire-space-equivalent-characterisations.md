---
id: thm-baire-space-equivalent-characterisations
kind: theorem
title: "Equivalent forms of the Baire property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nowhere-dense-meagre-and-residual-subsets, def-baire-space, thm-de-morgan-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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
    - title: "Jesse Peterson, Real Analysis, §§3.6–3.7"
      url: "https://math.vanderbilt.edu/peters10/teaching/fall2016/RealAnalysis.pdf"
pipeline_run: null
---

## Statement

For a topological space $X$, the following are equivalent: every countable intersection of dense open sets is dense; every countable union of closed sets with empty interior has empty interior; no nonempty open subset is meagre in $X$; and every residual subset meets every nonempty open set. The equivalence includes the empty space.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Let $X$ be a topological space and let $A\subseteq X$. The set $A$ is **nowhere dense** when $\operatorname{int}(\overline A)=\varnothing$ (def-interior-closure-boundary-top). It is **meagre** when there is a sequence $(N_n)_{n\in\mathbb N}$ of nowhere dense subsets of $X$ with $A\subseteq\bigcup_nN_n$. It is **residual**, or **comeagre**, when $X\setminus A$ is meagre. The empty union shows that $\varnothing$ is meagre, including when $X=\varnothing$. ([[def-nowhere-dense-meagre-and-residual-subsets]]).

[F2] A topological space $(X, \mathcal{T})$ (def-topological-space) is a **Baire space** when for every sequence $(U_n)_{n \in \mathbb{N}}$ of subsets of $X$ that are open and dense in $X$ (def-dense-top, def-sequence-convergence-top, def-natural-numbers), the intersection $\bigcap_{n \in \mathbb{N}} U_n$ is dense in $X$. ([[def-baire-space]]).

[F3] For all sets $X$, $a$ and $b$, $$X \setminus (a \cup b) = (X \setminus a) \cap (X \setminus b), \qquad X \setminus (a \cap b) = (X \setminus a) \cup (X \setminus b).$$ Let $F$ be a set with $F \neq \varnothing$. Then $\{\, X \setminus a : a \in F \,\}$ is a nonempty set and $$X \setminus \bigcup F = \bigcap \{\, X \setminus a : a \in F \,\}, \qquad X \setminus \bigcap F = \bigcup \{\, X \setminus a : a \in F \,\}.$$ ([[thm-de-morgan-laws]]).

## Proof

**Proof technique:** direct.

1.1 Apply complements and De Morgan's laws to pass between dense intersections of open sets and unions of closed nowhere dense sets. [given, F1, F2, F3]

2.1 Then localise to a nonempty open set to prove equivalence with no nonempty open subset being meagre; keep the empty-space convention visible. [step 1.1, F1, F2, F3]

3.1 The preceding construction and implications establish the assertion. [step 2.1] ∎
