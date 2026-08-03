---
id: fs-quotient-of-a-hausdorff-space-is-hausdorff
kind: false-statement
title: "FALSE: a quotient of a Hausdorff space is Hausdorff"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-hausdorff-space, def-quotient-topology, def-disjoint-union-topology,
       thm-coproduct-universal-property, def-metrizable-space,
       lem-real-line-is-a-metric-space, def-interval, def-max-min,
       lem-of-abs-value, lem-of-triangle-inequality, def-topological-space]
justified_by: []
forward_refs: [cex-line-with-two-origins]
aliases: []
landmark: false
short: "a quotient of a Hausdorff space need not be Hausdorff"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Line with two origins (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Line_with_two_origins"
    - title: "Quotient space (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quotient_space_(topology)"
pipeline_run: null
---

## Statement

**False claim:** if $X$ is Hausdorff ([[def-hausdorff-space]]) and
$q : X \to Y$ is a quotient map ([[def-quotient-topology]]), then $Y$ is
Hausdorff.

The refutation is the **line with two origins**. Let

$$S \;:=\; \mathbb{R} \sqcup \mathbb{R} \;=\; \bigsqcup_{i < 2} \mathbb{R}$$

be the disjoint union of two copies of $\mathbb{R}$ with its usual topology
([[def-disjoint-union-topology]], [[lem-real-line-is-a-metric-space]],
[[def-metrizable-space]]), whose points are the pairs $(x,i)$ with
$x \in \mathbb{R}$ and $i < 2$. Let $\sim$ be the equivalence relation on $S$
whose classes are

$$\{(x,0), (x,1)\} \ \ (x \ne 0), \qquad \{(0,0)\}, \qquad \{(0,1)\} ,$$

and let $L := S/\!\sim$ with the quotient topology and canonical projection $q$.
Then $S$ is Hausdorff and $L$ is not: the two classes $q(0,0)$ and $q(0,1)$, the
"two origins", cannot be separated by disjoint open sets.

## Facts & Assumptions

**Given:** The space $S = \bigsqcup_{i<2}\mathbb{R}$ with the disjoint union topology, the relation $\sim$ above, the quotient $L = S/\!\sim$ with its canonical projection $q$, and the two points $a := q(0,0)$ and $b := q(0,1)$ of $L$.

[A1] $U \subseteq S$ is open exactly when both traces $U_i = \{\, x \in \mathbb{R} : (x,i) \in U \,\}$ are open in $\mathbb{R}$; each set $\mathbb{R} \times \{i\}$ is open in $S$; and $\kappa_i[V] = V \times \{i\}$ is open in $S$ whenever $V$ is open in $\mathbb{R}$ ([[def-disjoint-union-topology]], [[thm-coproduct-universal-property]]).

[A2] The classes listed in the statement are pairwise disjoint and cover $S$, so $\sim$ is an equivalence relation; $q$ is a surjection and $V \subseteq L$ is open exactly when $q^{-1}[V]$ is open in $S$ ([[def-quotient-topology]]).

[A3] A space is Hausdorff when distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]], [[def-topological-space]]).

[L1] $(a,b) = \{t : a < t < b\}$ is open in the usual topology of $\mathbb{R}$; a set is open there exactly when each of its points has a bounded open interval around it inside the set; and $a < (a+b)/2 < b$ whenever $a < b$ ([[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

[L2] The order of $\mathbb{R}$ is total, so a two-element set of reals has a minimum, which lies in the set and is a lower bound for it ([[def-max-min]]); $|s| \ge 0$, and $|s| > 0$ when $s \ne 0$ ([[lem-of-abs-value]]); and $|s - u| \le |s - t| + |t - u|$ ([[lem-of-triangle-inequality]]).

## Refutation

**Proof technique:** direct.

1.1 $S$ is Hausdorff. Let $(x,i) \ne (y,j)$ in $S$. If $i \ne j$ then $\mathbb{R} \times \{i\}$ and $\mathbb{R} \times \{j\}$ are disjoint open sets containing them, by [A1]. If $i = j$ then $x \ne y$; put $r := |x-y|/2 > 0$ by [L2], and take $(x-r,x+r) \times \{i\}$ and $(y-r,y+r) \times \{i\}$, which are open by [A1] and [L1] and are disjoint, since a common point $t$ would give $|x-y| \le |x-t| + |t-y| < 2r = |x-y|$. [A1, A3, L1, L2]

1.2 $a \ne b$: the classes $\{(0,0)\}$ and $\{(0,1)\}$ are distinct members of the partition in [A2], and $q$ sends $(0,i)$ to the class of $(0,i)$. [A2]

1.3 For $t \ne 0$ one has $q(t,0) = q(t,1)$, the two points lying in the common class $\{(t,0),(t,1)\}$. [A2]

2.1 Suppose $U, V \subseteq L$ are open with $a \in U$, $b \in V$ and $U \cap V = \varnothing$. Then $q^{-1}[U]$ and $q^{-1}[V]$ are open in $S$ by [A2], with $(0,0) \in q^{-1}[U]$ and $(0,1) \in q^{-1}[V]$. [step 1.2, A2, assume-hyp]

3.1 By [A1] the trace of $q^{-1}[U]$ at index $0$ is an open subset of $\mathbb{R}$ containing $0$, so by [L1] there is $\varepsilon > 0$ with $(-\varepsilon,\varepsilon) \times \{0\} \subseteq q^{-1}[U]$; likewise there is $\delta > 0$ with $(-\delta,\delta) \times \{1\} \subseteq q^{-1}[V]$. [step 2.1, A1, L1]

4.1 Put $t := \min\{\varepsilon,\delta\}/2$. Then $0 < t < \varepsilon$ and $t < \delta$ by [L1] and [L2], so $t \ne 0$, $(t,0) \in q^{-1}[U]$ and $(t,1) \in q^{-1}[V]$. [step 3.1, L1, L2]

5.1 By step 1.3 and step 4.1 the point $q(t,0) = q(t,1)$ lies in $U$ and in $V$, contradicting $U \cap V = \varnothing$. So no such $U$ and $V$ exist. [step 1.3, step 2.1, step 4.1]

6.1 By step 1.1 the space $S$ is Hausdorff, by [A2] the map $q$ is a quotient map, and by steps 1.2 and 5.1 the two distinct points $a$ and $b$ of $L$ have no disjoint open neighbourhoods, so $L$ is not Hausdorff by [A3]. The claim is therefore false. [step 1.1, step 1.2, step 5.1, A2, A3] ∎

## Remarks

- **The source is not merely Hausdorff but metrizable**, so strengthening the
  separation and countability properties of the source is not by itself what
  rescues the claim; what decides the matter is the relation being collapsed. A metric inducing the topology of $S$ is exhibited on the companion
  page, where the same witness is worked as [[cex-line-with-two-origins]], and
  the quotient map there is shown to be open as well.

- **The identification is as mild as it can be.** Exactly one pair of points is
  left unidentified, and every other pair is glued; the failure is caused by two
  points that are not identified and yet have no disjoint saturated open
  neighbourhoods, since every neighbourhood of either origin contains a punctured
  interval that the other's neighbourhoods also contain.

- **What does survive is one direction of separation for the source.** Nothing
  above says that a quotient of a Hausdorff space is badly behaved in general,
  and nothing here asserts which extra hypothesis on $q$ or on the relation
  restores the Hausdorff condition; that question belongs with the separation
  axioms, which are not available at this point in the reading order
  ([[rem-constructions-this-page-stops-short-of]]).
