---
id: def-left-folner-net-for-a-locally-compact-group
kind: definition
title: Left Følner nets for locally compact groups
status: draft
origin: pipeline
dependency_level: 0
deps:
  - def-left-haar-integral-and-left-haar-measure
  - def-directed-set-and-net
proof_strategy: direct
axiom_use: No choice principle is used.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G, Theorem G.5.1(ii), the Borel-set Følner condition (printed pp. 466–468); Remark G.5.3 on Følner sequences (printed p. 469)"
    - title: "Anne Thomas, The Banach-Tarski Paradox and Amenability, Lecture 19: Reiter's Property and the Følner Condition"
      url: "https://www.maths.usyd.edu.au/u/athomas/amenability/Lecture19_2012_Reiter.pdf"
      locator: "Theorem (Følner, Greenleaf) and Følner-condition discussion (PDF pp. 2–3); the notes use left translates and uniform compact-set estimates"
---

## Definition

Fix a left Haar measure $\mu$ on a locally compact Hausdorff group $G$. For
a Borel set $F\subseteq G$ with $0<\mu(F)<\infty$ and a compact set
$Q\subseteq G$, put
$$\Delta_Q(F):=\sup\bigl(\{0\}\cup\{\mu(gF\mathbin\triangle F)/\mu(F):g\in Q\}\bigr).$$
The value is $0$ when $Q=\varnothing$. The group $G$ satisfies the **left
Følner condition** if for every compact $Q\subseteq G$ and every
$\varepsilon>0$ there is such a set $F$ with $\Delta_Q(F)\le\varepsilon$.

A **left Følner net** is a net $(F_i)_{i\in I}$ of Borel sets with
$0<\mu(F_i)<\infty$ such that for every compact $Q\subseteq G$ and every
$\varepsilon>0$ there is $i_0\in I$ for which
$\Delta_Q(F_i)\le\varepsilon$ whenever $i\succeq i_0$. This is uniform
convergence to zero on compact subsets. The left Følner condition holds if
and only if a left Følner net exists. In the single-set condition it is
equivalent to test only compact sets containing the identity. Only left
translates $gF$ occur.

## Facts & Assumptions

**Given:** A locally compact Hausdorff group $G$ with a fixed left Haar measure $\mu$.

[A1] Left translation is a homeomorphism, carries Borel sets to Borel sets, and preserves $\mu$; $\mu$ is finite on compact sets ([[def-left-haar-integral-and-left-haar-measure]]).

[F1] A net is a function from a nonempty directed preorder; antisymmetry is not required ([[def-directed-set-and-net]]).

## Proof

**Proof technique:** direct.

1.1 For every $g\in G$, [A1] gives $\mu(gF)=\mu(F)$, so $\mu(gF\mathbin\triangle F)\le\mu(gF)+\mu(F)=2\mu(F)$. Thus each ratio in $\Delta_Q(F)$ is in $[0,2]$ and the displayed supremum is a finite real; including $0$ also defines it when $Q$ is empty. If the condition has been checked for compact sets containing $e$, then for arbitrary compact $Q$ apply it to $Q\cup\{e\}$, which is compact as a finite union of compact sets; the resulting estimate restricts to $Q$. The reverse implication is immediate. [A1, given, algebra]

1.2 If $(F_i)_{i\in I}$ is a left Følner net, then for any compact $Q$ and $\varepsilon>0$ its defining uniform-convergence condition supplies an index $i_0$ with $\Delta_Q(F_i)\le\varepsilon$ for every $i\succeq i_0$. In particular $F_{i_0}$ is Borel, has finite positive measure, and satisfies the single-set Følner estimate. [F1, given]

2.1 Conversely, assume the single-set condition. Let $I$ be the set of all triples $(Q,\varepsilon,F)$ with $Q$ compact, $\varepsilon>0$, $F$ Borel, $0<\mu(F)<\infty$, and $\Delta_Q(F)\le\varepsilon$. Order these triples by $(Q,\varepsilon,F)\preceq(Q',\varepsilon',F')$ exactly when $Q\subseteq Q'$ and $\varepsilon'\le\varepsilon$. This is a directed preorder: for two indices apply the condition to the compact union of their test sets and the positive minimum of their tolerances, obtaining a witness that gives a common upper bound. By [F1], the third-coordinate map $i\mapsto F_i$ is a net. Given any compact $Q$ and $\varepsilon>0$, the condition supplies an index $i_0=(Q,\varepsilon,F_0)$; every $i\succeq i_0$ then satisfies $\Delta_Q(F_i)\le\Delta_{Q_i}(F_i)\le\varepsilon_i\le\varepsilon$. This proves uniform convergence on compact sets. The witness-indexed set contains every possible witness, so this construction uses no global choice function. [A1, F1, construct, algebra] ∎
