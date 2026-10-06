---
id: "lem-refined-giraud-maximal-contact"
kind: "lemma"
title: "Refined maximal-contact statement via the coefficient ideal"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 9
deps:
  - "def-axiom-of-choice"
  - "def-coefficient-ideal"
  - "def-dimension-noetherian-topological-space"
  - "def-field"
  - "def-maximal-order-and-tangent-directions"
  - "def-multiple-test-blowup-and-controlled-transform"
  - "def-strict-transform-closed-subscheme"
  - "lem-coefficient-ideal-restriction-support"
  - "lem-tangent-direction-contains-the-support"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
---

## Statement

Assume AC ([[def-axiom-of-choice]]), inherited from the blowup and strict-transform suppliers throughout.

Let $(\mathcal I,\varnothing,\mu)$ be a marked ideal of maximal order with $\mu\ge1$ whose support has codimension at least two at a point $x\in\operatorname{supp}(\mathcal I,\mu)$, and let $U\ni x$ be an open neighbourhood on which a tangent direction $u\in T(\mathcal I)(U)$ exists and $\operatorname{supp}(\mathcal I,\mu)\cap U$ has codimension at least two throughout $U$ ([[def-maximal-order-and-tangent-directions]]). Let $V(u)$ be the regular hypersurface defined by $u$ ([[def-strict-transform-closed-subscheme]]).
For every multiple test blow-up $(U_i)$ of $(\mathcal I|_U,\mu)$, write $\mathcal I_i$ for its controlled transforms on $U_i$. Then (1) the support $\operatorname{supp}(\mathcal I_i,\mu)$ is contained in the strict transform $V(u)_i$ as a proper subset.
If $K$ has characteristic zero or perfect characteristic $p>\mu$ ([[def-field]]), then in addition:
(2) the sequence $(V(u)_i)$ is a multiple test blow-up of $C(\mathcal I,\mu)|_{V(u)}$;
(3) $\operatorname{supp}(\mathcal I_i,\mu)\cap V(u)_i=\operatorname{supp}[C(\mathcal I,\mu)|_{V(u)}]_i$;
(4) every multiple test blow-up of $C(\mathcal I,\mu)|_{V(u)}$ defines a multiple test blow-up of $(\mathcal I|_U,\mu)$ with centers in the strict transforms of $V(u)$.

## Facts & Assumptions

**Given:** Assume AC throughout. A field $K$, a maximal-order marked ideal $(\mathcal I,\varnothing,\mu)$ with $\mu\ge1$ whose support has codimension at least $2$ at a point $x\in\operatorname{supp}(\mathcal I,\mu)$, an open neighbourhood $U\ni x$ admitting a tangent direction $u\in T(\mathcal I)(U)$ with $\operatorname{supp}(\mathcal I,\mu)\cap U$ of codimension at least $2$, the regular hypersurface $V(u)$, and a multiple test blow-up $(U_i)$ of $(\mathcal I|_U,\mu)$. For clauses (2)-(4), assume also the safe characteristic range of the Statement.

[F1] [[lem-tangent-direction-contains-the-support]]: for every $i$ the support $\operatorname{supp}(\mathcal I_i,\mu)$ is contained in the strict transform $V(u)_i$ of $V(u)$.

[A1] [[def-axiom-of-choice]]: AC is inherited for clause (1) through the blowup and strict-transform suppliers and for clauses (2)-(4) through the coefficient-restriction supplier [F2].

[F2] [[lem-coefficient-ideal-restriction-support]]: under AC and characteristic zero or perfect characteristic $p>\mu$, for a regular $S$ with SNC with $E$ whose support is not contained in $\operatorname{supp}(\mathcal I,\mu)$, the restrictions along centers in $S_i$ give $\operatorname{supp}(\mathcal I_i,\mu)\cap S_i=\operatorname{supp}[C(\mathcal I,\mu)|_S]_i$, and every multiple test blow-up of the restriction defines one of $(\mathcal I,\mu)$ with centers in the $S_i$.

[F4] [[def-strict-transform-closed-subscheme]], [[def-dimension-noetherian-topological-space]]: a hypersurface $V(u)$ is of codimension one, so it is not contained in the codimension-at-least-two support; the strict transform $V(u)_i$ is again a hypersurface.


## Proof

1.1 The support stays a proper subset of the hypersurface in every characteristic. By [F1], $\operatorname{supp}(\mathcal I_i,\mu)\subseteq V(u)_i$ for every $i$. At $i=0$ this inclusion is proper because the support has codimension at least two throughout $U$ while $V(u)$ is a hypersurface [F4]. If it is proper at stage $i$, then $V(u)_i\setminus\operatorname{supp}(\mathcal I_i,\mu)$ is a nonempty open subset disjoint from the next center, since every center lies in the marked support. The blow-up is an isomorphism over this open set, and the controlled transform agrees there with the unchanged ideal, so this nonempty open subset persists inside $V(u)_{i+1}$ and remains outside $\operatorname{supp}(\mathcal I_{i+1},\mu)$. Thus the inclusion is proper at every stage. [F1, F4, given]

2.1 Assume now that $K$ has characteristic zero or perfect characteristic $p>\mu$. Since $V(u)$ is a regular hypersurface containing the initial support and is not contained in that support, it satisfies the hypotheses of [F2]. Applying [F2] to $S=V(u)$ proves that $(V(u)_i)$ is a multiple test blow-up of $C(\mathcal I,\mu)|_{V(u)}$ and gives the support identity of clause (3) at every stage. [A1, F2, given, step 1.1]

3.1 Under AC and the same characteristic condition, the converse clause of [F2] says that every multiple test blow-up of $C(\mathcal I,\mu)|_{V(u)}$ is induced by a multiple test blow-up of $(\mathcal I|_U,\mu)$ with centers in the strict transforms of $V(u)$. The equality in clause (3) follows at every stage from [F2]. [A1, F2, step 2.1] ∎
