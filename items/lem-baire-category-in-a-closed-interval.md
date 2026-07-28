---
id: lem-baire-category-in-a-closed-interval
kind: lemma
title: "Baire category inside a closed bounded interval: if $[a,b]$ with $a < b$ is covered by a sequence of closed sets, then one of them contains a nondegenerate closed subinterval of $[a,b]$; no choice principle is used"
status: published
origin: session
deps: [def-open-and-closed-in-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, thm-open-set-algebra-r, thm-baire-category-r, def-limit-point-r, def-interval, def-neighbourhood-r]
justified_by: []
aliases: [lem-baire-in-an-interval]
landmark: false
short: "Baire category inside $[a,b]$"
proof_strategy: contradiction
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a < b$ and let $(F_n)_{n \in \mathbb{N}}$ be a
sequence of closed subsets of $\mathbb{R}$ ([[def-open-and-closed-in-r]]) with

$$[a,b] \;\subseteq\; \bigcup_{n \in \mathbb{N}} F_n$$

([[def-interval]]). Then there are $n \in \mathbb{N}$ and reals $u < v$ with

$$[u,v] \;\subseteq\; F_n \cap [a,b].$$

**No choice principle is used.** The only category input is
[[thm-baire-category-r]], whose own proof selects nothing: it fixes one
enumeration of the rationals and takes least indices. Nothing further is chosen
below, the argument being a direct application of that theorem to the
complements of the $F_n$.

## Facts & Assumptions

**Given:** Reals $a < b$ and a sequence $(F_n)_{n \in \mathbb{N}}$ of closed subsets of $\mathbb{R}$ with $[a,b] \subseteq \bigcup_{n} F_n$.

[L1] A countable intersection of dense open subsets of $\mathbb{R}$ is dense in $\mathbb{R}$ ([[thm-baire-category-r]]); *dense* means that the closure is $\mathbb{R}$ ([[def-limit-point-r]]).

[L2] $\overline{S} = \mathbb{R}$ if and only if $N_\varepsilon(y) \cap S \ne \varnothing$ for every real $y$ and every real $\varepsilon > 0$ ([[thm-closure-characterisations-r]], claim 1, [[def-interior-closure-boundary-r]], [[def-neighbourhood-r]]).

[L3] An intersection of two closed sets is closed, and the complement of a closed set is open ([[thm-open-set-algebra-r]], claim 3, [[def-open-and-closed-in-r]]).

[L4] $[a,b]$ is closed: its complement $\{x : x < a\} \cup \{x : x > b\}$ is open, since $x < a$ gives $N_{a-x}(x) \subseteq \{z : z < a\}$ and $x > b$ gives $N_{x-b}(x) \subseteq \{z : z > b\}$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]], [[def-interval]]).

[L5] $N_\varepsilon(y) = (y - \varepsilon, y + \varepsilon)$, and for $a < b$ the midpoint $y := (a+b)/2$ and radius $\varepsilon := (b-a)/2 > 0$ give $N_\varepsilon(y) = (a,b) \subseteq [a,b]$ ([[def-neighbourhood-r]], [[def-interval]]).

## Proof

**Proof technique:** contradiction.

1.1 Put $G_n := F_n \cap [a,b]$ for $n \in \mathbb{N}$. Each $G_n$ is closed, being an intersection of two closed sets, and $[a,b] = \bigcup_{n} G_n$, since $[a,b]$ is contained in the union of the $F_n$ and each $G_n$ is contained in $[a,b]$. [L3, L4]

1.2 Suppose, for contradiction, that no $G_n$ contains a nondegenerate closed interval, that is, that there are no $n$ and no reals $u < v$ with $[u,v] \subseteq G_n$. [assume-contra]

2.1 Each $V_n := \mathbb{R} \setminus G_n$ is open, and it is dense. Openness is the complement of a closed set. For density, let $y$ be real and $\varepsilon > 0$ real; if $N_\varepsilon(y) \cap V_n$ were empty then $N_\varepsilon(y) \subseteq G_n$, and then $[y - \varepsilon/2,\ y + \varepsilon/2]$ would be a nondegenerate closed interval inside $G_n$, contrary to step 1.2. [step 1.1, step 1.2, L2, L3, L5]

3.1 By the Baire category theorem the intersection $\bigcap_{n} V_n$ is dense in $\mathbb{R}$, so it meets the neighbourhood $N_{(b-a)/2}\bigl((a+b)/2\bigr) = (a,b)$: there is $x \in (a,b)$ with $x \notin G_n$ for every $n$. [step 2.1, L1, L2, L5]

4.1 But $x \in (a,b) \subseteq [a,b] = \bigcup_{n} G_n$, so $x \in G_n$ for some $n$, contradicting step 3.1. The assumption of step 1.2 is therefore false, and some $G_n = F_n \cap [a,b]$ contains a nondegenerate closed interval $[u,v]$. [step 1.1, step 1.2, step 3.1, discharge-contradiction] ∎

## Remarks

- **Why the statement is about $[a,b]$ and not about $\mathbb{R}$.**
  [[thm-baire-category-r]] says that $\mathbb{R}$ is not a countable union of
  nowhere dense sets. What is needed for Baire's theorem on functions of the
  first class ([[thm-baire-one-continuity-points]]) is the same statement
  *localised* to a closed bounded interval, and the localisation is not formal:
  a closed set may be nowhere dense in $\mathbb{R}$ and yet fill an interval, so
  the conclusion has to be stated as "contains a nondegenerate closed
  subinterval" rather than "has nonempty interior in $\mathbb{R}$". The two are
  in fact the same condition here, which is what step 2.1 uses.

- **The hypothesis $a < b$ is not decoration.** For $a = b$ the set $[a,b]$ is a
  single point, it is covered by the constant sequence $F_n = \{a\}$, and no
  $F_n$ contains a nondegenerate closed interval; the conclusion fails, and the
  proof breaks at step 3.1, where $(a,b)$ is empty.
