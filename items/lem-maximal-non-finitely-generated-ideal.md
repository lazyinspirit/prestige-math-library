---
id: lem-maximal-non-finitely-generated-ideal
kind: lemma
title: "If some ideal is not finitely generated, there is one maximal among the ideals that are not"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-noetherian-ring-ideal-characterisations, def-left-right-and-two-sided-ideal, def-generated-and-principal-ideals, thm-generated-ideal-description-in-a-commutative-ring, lem-ideal-criterion-and-intersections, def-chain, def-maximal-element, thm-zorn]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., (16.10)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §3"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and suppose at least one ideal of $R$ is not
finitely generated. Let

$$\Sigma:=\{\,\mathfrak a\trianglelefteq R\;:\;\mathfrak a\ \text{is not finitely generated}\,\}$$

be ordered by inclusion. Then $\Sigma$ has a maximal element
([[def-maximal-element]]): an ideal that is not finitely generated and that no
ideal of $\Sigma$ strictly contains.

**This uses Zorn's lemma, hence the axiom of choice** ([[thm-zorn]]). No
Noetherian hypothesis is available: by
[[thm-noetherian-ring-ideal-characterisations]], $\Sigma$ is nonempty exactly
because $R$ is not Noetherian, so the maximal element cannot come from a maximal condition.
Maximal here means maximal in $\Sigma$, not maximal among the proper ideals of
$R$.

## Facts & Assumptions

**Given:** A commutative ring $R$ with at least one ideal that is not finitely generated, and the set $\Sigma$ of its non-finitely-generated ideals, ordered by inclusion.

[L1] An additive subgroup $I\le(R,+)$ is a left ideal when $ri\in I$ for every $r\in R$ and $i\in I$; in a commutative ring the left, right and two-sided notions agree ([[def-left-right-and-two-sided-ideal]]).

[L2] For $S\subseteq R$, $(S)$ is the intersection of all two-sided ideals of $R$ containing $S$; in particular $S\subseteq(S)$, and $(\{a\})$ is written $(a)$ ([[def-generated-and-principal-ideals]]).

[L3] In a commutative ring, $(S)$ consists of finite sums $\sum r_is_i$, and $(a)=Ra$; the empty sum is included and equals $0$ ([[thm-generated-ideal-description-in-a-commutative-ring]]).

[L4] A nonempty subset $I\subseteq R$ is a two-sided ideal exactly when it is closed under $x-y$ and under $rx,xr$ for all $r\in R$, $x,y\in I$ ([[lem-ideal-criterion-and-intersections]]).

[L5] A subset $C$ of a poset is a **chain** when any two of its elements are comparable; the empty set is a chain ([[def-chain]]).

[L6] An element $m$ of a poset is **maximal** when no element is strictly above it ([[def-maximal-element]]).

[L7] Assuming the Axiom of Choice, a nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]]).

## Proof

**Proof technique:** direct.

1.1 Inclusion partially orders $\Sigma$, and $\Sigma$ is nonempty by hypothesis. The empty chain is bounded in $\Sigma$: its upper bounds are all the elements of $\Sigma$, and there is at least one. [L1, L2, L6, given]

2.1 Let $\mathcal C\subseteq\Sigma$ be a nonempty chain and put $U:=\bigcup\mathcal C$. Then $U$ is an ideal of $R$. It is nonempty, since some $I\in\mathcal C$ contains $0$. For $x,y\in U$ pick $I,J\in\mathcal C$ with $x\in I$ and $y\in J$; the two are comparable, so both lie in the larger one, whose being an ideal gives $x-y$ there and hence in $U$. For $r\in R$ and $x\in U$, choosing $I\in\mathcal C$ with $x\in I$ gives $rx\in I\subseteq U$. The ideal criterion applies. [L1, L4, L5, step 1.1]

3.1 $U$ is not finitely generated, so $U\in\Sigma$ and $U$ is an upper bound of $\mathcal C$. Suppose instead $U=(u_1,\ldots,u_k)$ with $k\in\mathbb N$; each $u_i$ lies in $U$, hence in some member of $\mathcal C$. A nonempty finite subset of a chain has a greatest member, by induction on its size using comparability of any two elements, so there is $I\in\mathcal C$ containing every $u_i$; when $k=0$ take any $I\in\mathcal C$, which exists because $\mathcal C$ is nonempty. Then $U=(u_1,\ldots,u_k)\subseteq I\subseteq U$, so $I=U$ is finitely generated, contradicting $I\in\Sigma$. [L2, L3, L5, step 2.1]

4.1 Every chain in $\Sigma$, empty or not, therefore has an upper bound in $\Sigma$, and $\Sigma$ is nonempty; Zorn's lemma gives a maximal element of $\Sigma$. This is the one place the argument leaves ZF, and it uses the full axiom of choice rather than a countable or dependent form. [L6, L7, step 1.1, step 3.1] ∎

## Remarks

- **Maximal in $\Sigma$, not maximal in $R$.** The ideal produced is maximal among those that fail to be finitely generated. A maximal ideal of $R$ in the usual sense may perfectly well be finitely generated, and nothing here says the two notions meet.

- **No chain condition is used or available.** The hypothesis is the opposite of a chain condition, so the maximal element has to be bought with Zorn's lemma; that is the whole reason this lemma is separated from the criterion it serves.
