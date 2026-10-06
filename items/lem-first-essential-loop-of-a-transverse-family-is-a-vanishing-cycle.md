---
id: lem-first-essential-loop-of-a-transverse-family-is-a-vanishing-cycle
kind: lemma
title: "The first essential loop in a transverse family is a vanishing cycle"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-vanishing-cycle-of-a-codimension-one-foliation, lem-nullhomotopy-persists-under-a-compact-transverse-deformation, lem-a-vanishing-cycle-determines-a-nontrivial-limitwise-nullhomotopy-class, def-countable-choice-principle-for-foliation-pair, lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 12
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber; complete PDF of the translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a73, printed pp. 9\u201310 ($\\Pi^j_1$); the first-essential-parameter argument is proved locally from compact nullhomotopy persistence"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $H_t:S^1\to M$, $0\le t\le1$, be a
jointly $C^2$ family whose loops lie in leaves and whose point tracks are transverse to
a $C^2$ cooriented codimension-one foliation. If $H_0$ is null-homotopic in its leaf and
$H_1$ is nontrivial in its leaf, there is a parameter $t_*\in(0,1]$ such that $H_t$ is
null-homotopic for every $t<t_*$ and $H_{t_*}$ is nontrivial. After reparametrization,
$(H_t)_{0\le t\le t_*}$ is a vanishing cycle and its endpoint determines a nonzero class
in the limitwise-nullhomotopy subgroup on the approached side.

## Facts & Assumptions

**Given:** A jointly $C^2$ family $H_t:S^1\to M$, $0\le t\le1$, whose loops lie in leaves of a $C^2$ cooriented codimension-one foliation and whose point tracks are transverse, with $H_0$ null-homotopic in its leaf and $H_1$ nontrivial in its leaf.

[F1] A vanishing cycle supported on a leaf $L_1$ is a jointly $C^2$ family of loops lying in leaves with $[\sigma_1]$ nonzero, earlier loops null-homotopic in their leaves, and transverse point tracks, and it determines a nonzero class in the appropriate limitwise-nullhomotopy subgroup. ([[def-vanishing-cycle-of-a-codimension-one-foliation]]).

## Proof

**Proof technique:** direct.

1.1 Let $S$ be the set of parameters $s$ such that every loop $H_t$ with $0\le t\le s$ is null-homotopic in its leaf; the loop $H_0$ has a compact null-homotopy, and the persistence result for compact transverse deformations (`lem-nullhomotopy-persists-under-a-compact-transverse-deformation`) transports it to nearby loops of the family, so $S$ contains a positive interval. [given]

2.1 Let $t_*=\sup S$, which lies in $(0,1]$; for every $t<t_*$ the definition of supremum gives $s\in S$ with $s>t$, hence $H_t$ is null-homotopic in its leaf. [step 1.1]

3.1 If $t_*<1$ and $H_{t_*}$ were null-homotopic, the compact-disk persistence lemma would make the loops null-homotopic on a right-hand interval of $t_*$, contradicting the supremum; if $t_*=1$ then nontriviality of $H_1$ is the hypothesis, so in either case $H_{t_*}$ is nontrivial in its leaf. [step 2.1]

4.1 After reparametrizing the restricted family $(H_t)_{0\le t\le t_*}$ one obtains a vanishing cycle in the sense of [F1], and the bridge result that a vanishing cycle determines a nontrivial limitwise-nullhomotopy class ([[lem-a-vanishing-cycle-determines-a-nontrivial-limitwise-nullhomotopy-class]]) gives the nonzero class in $\Pi^j_1$ on the approached side; only the standing countable choice is used. [F1, step 3.1] ∎
