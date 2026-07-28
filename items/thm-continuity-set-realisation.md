---
id: thm-continuity-set-realisation
kind: theorem
title: "Every $G_\\delta$ subset of $\\mathbb{R}$ is the set of continuity points of some $f : \\mathbb{R} \\to \\mathbb{R}$, so the $G_\\delta$ sets are exactly the continuity sets"
status: draft
origin: session
deps: [def-f-sigma-g-delta, thm-discontinuity-set-is-f-sigma, def-open-and-closed-in-r, thm-open-set-algebra-r, thm-well-ordering-principle, lem-q-and-irrationals-dense-r, cor-archimedean-reciprocal, def-continuity-real, def-canonical-natural, lem-of-naturals-positive, def-neighbourhood-r, lem-rat-embeds-dense, thm-closure-characterisations-r]
justified_by: []
aliases: []
landmark: true
short: "the continuity sets are exactly the $G_\\delta$ sets"
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gdelta set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G%CE%B4_set"
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
pipeline_run: null
---

## Statement

Let $G \subseteq \mathbb{R}$ be a $G_\delta$ set ([[def-f-sigma-g-delta]]). Then
there is a function $f : \mathbb{R} \to \mathbb{R}$ whose set of continuity
points ([[def-continuity-real]]) is exactly $G$.

Together with [[thm-discontinuity-set-is-f-sigma]], which says that the
continuity set of every $f : \mathbb{R} \to \mathbb{R}$ is a $G_\delta$ set, this
identifies the two classes:

$$\{\, \text{continuity sets of functions } \mathbb{R} \to \mathbb{R} \,\} \;=\; \{\, G_\delta \text{ subsets of } \mathbb{R} \,\} .$$

**The construction.** Write $G = \bigcap_{n \in \mathbb{N}} V_n$ with each $V_n$
open and put $W_n := V_0 \cap \dots \cap V_n$, so that the $W_n$ are open and
decreasing with $\bigcap_n W_n = G$. For $x \notin G$ let $n(x)$ be the least $n$
with $x \notin W_n$, and set

$$f(x) := 0 \ \text{ for } x \in G, \qquad f(x) := \frac{1}{\iota(n(x)+1)} \ \text{ for } x \notin G,\ x \in \mathbb{Q}, \qquad f(x) := -\frac{1}{\iota(n(x)+1)} \ \text{ for } x \notin G,\ x \notin \mathbb{Q}.$$

The sign carries the whole of the discontinuity: near a point outside $G$ there
are points of the opposite rationality, where $f$ has the opposite sign or is
$0$, and the values cannot come close.

## Facts & Assumptions

**Given:** A $G_\delta$ set $G = \bigcap_{n \in \mathbb{N}} V_n \subseteq \mathbb{R}$ with each $V_n$ open.

[L1] A finite intersection of open subsets of $\mathbb{R}$ is open ([[thm-open-set-algebra-r]], claim 2); a set $U$ is open exactly when every point of it has a neighbourhood $N_\rho(x) \subseteq U$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L2] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L3] Both $\mathbb{Q}$ and $\mathbb{R} \setminus \mathbb{Q}$ are dense in $\mathbb{R}$, so every neighbourhood of every real contains a rational and an irrational ([[lem-q-and-irrationals-dense-r]], [[thm-closure-characterisations-r]], [[lem-rat-embeds-dense]]).

[L4] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/\iota(m) < \eta$, and $\iota$ is positive and strictly increasing on the naturals $\ge 1$, so $j < k$ gives $1/\iota(k+1) < 1/\iota(j+1)$ ([[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L5] The continuity set of any $h : \mathbb{R} \to \mathbb{R}$ is a $G_\delta$ subset of $\mathbb{R}$ ([[thm-discontinuity-set-is-f-sigma]], case $A = \mathbb{R}$, [[def-f-sigma-g-delta]]).

## Proof

**Proof technique:** constructive.

1.1 Put $W_n := \bigcap_{j \le n} V_j$ for $n \in \mathbb{N}$. Each $W_n$ is open, being a finite intersection of open sets; $W_{n+1} \subseteq W_n$; and $\bigcap_{n} W_n = \bigcap_{n} V_n = G$, since a point lies in every $W_n$ exactly when it lies in every $V_j$. [L1, construct]

2.1 For $x \notin G$ the set $\{\, n \in \mathbb{N} : x \notin W_n \,\}$ is nonempty, so $n(x) := \min\{\, n : x \notin W_n \,\}$ is defined; and $x \in W_j$ for every $j < n(x)$, by minimality. [step 1.1, L2, construct]

2.2 $f$ is continuous at every $x \in G$. Let $\varepsilon > 0$ be real and take a natural $m \ge 1$ with $1/\iota(m) < \varepsilon$. Since $x \in G \subseteq W_{m}$ and $W_{m}$ is open, there is a real $\rho > 0$ with $N_\rho(x) \subseteq W_{m}$. [step 1.1, L1, L4]

3.1 Define $f : \mathbb{R} \to \mathbb{R}$ by $f(x) := 0$ for $x \in G$, $f(x) := 1/\iota(n(x)+1)$ for $x \notin G$ with $x$ rational, and $f(x) := -1/\iota(n(x)+1)$ for $x \notin G$ with $x$ irrational. Then $f(x) = 0$ exactly for $x \in G$, since $1/\iota(n+1) > 0$ for every $n \in \mathbb{N}$; moreover $f(x) > 0$ at a rational outside $G$ and $f(x) < 0$ at an irrational outside $G$. [step 2.1, L4, construct]

4.1 With $m$ and $\rho$ as in step 2.2, let $y \in N_\rho(x)$. If $y \in G$ then $f(y) = 0$. If $y \notin G$ then $y \in W_{m}$, so $n(y) \ne m$ and indeed $n(y) > m$, because $y \in W_{m}$ forces $y \in W_j$ for every $j \le m$; hence $|f(y)| = 1/\iota(n(y)+1) < 1/\iota(m) < \varepsilon$, using $n(y) + 1 > m$. In both cases $|f(y) - f(x)| = |f(y)| < \varepsilon$, since $f(x) = 0$. [step 1.1, step 2.1, step 3.1, step 2.2, L4]

4.2 $f$ is discontinuous at every $x \notin G$. Put $\varepsilon := 1/\iota(n(x)+1) > 0$, so that $|f(x)| = \varepsilon$, and let $\delta > 0$ be real. If $x$ is rational then $f(x) = \varepsilon > 0$; the neighbourhood $N_\delta(x)$ contains an irrational $y$, and $f(y) \le 0$, whether $y \in G$ or not. If $x$ is irrational then $f(x) = -\varepsilon < 0$; the neighbourhood $N_\delta(x)$ contains a rational $y$, and $f(y) \ge 0$. [step 2.1, step 3.1, L3]

5.1 In either case of step 4.2 the point $y$ satisfies $|f(y) - f(x)| \ge \varepsilon$, since $f(x)$ and $f(y)$ have opposite weak signs and $|f(x)| = \varepsilon$. So no $\delta$ witnesses the continuity condition at $x$ for this $\varepsilon$, and $f$ is discontinuous at $x$. [step 4.2]

6.1 By steps 4.1 and 5.1 the set of continuity points of the function $f$ constructed in step 3.1 is exactly $G$, which proves the theorem. Combined with the fact that every continuity set is $G_\delta$, the two classes coincide. [step 3.1, step 4.1, step 5.1, L5, discharge-construct] ∎

## Remarks

- **Why the $V_n$ are replaced by the decreasing $W_n$.** The index $n(x)$ is
  useful only because $y \in W_m$ implies $y \in W_j$ for all $j \le m$, which is
  what makes $n(y) > m$ in step 4.1. For an arbitrary sequence $(V_n)$ that
  implication fails, and $n(x)$ would carry no information about how deep $x$
  sits in the intersection. Passing to the finite intersections costs nothing,
  since they are still open and still intersect to $G$.

- **Two extreme cases.** For $G = \mathbb{R}$ the construction gives $f = 0$,
  continuous everywhere. For $G = \varnothing$, obtained as the intersection of
  the sequence constantly $\varnothing$, every $x$ lies outside $W_0 = \varnothing$, so
  $n(x) = 0$ and $f$ takes the value $1$ at every rational and $-1$ at every
  irrational; it is nowhere continuous, as the Dirichlet function is
  ([[thm-dirichlet-and-thomae-continuity-sets]]).

- **The theorem does not produce a monotone or a bounded example, and does not
  claim to.** The function built above takes values in $[-1,1]$, so it happens to
  be bounded; nothing here says anything about its behaviour beyond its
  continuity set. Whether a **monotone** function with a given continuity set
  exists is a different question, answered by [[thm-froda]] and
  [[thm-monotone-with-prescribed-discontinuity-set]] together: a monotone
  function has continuity set $G$ exactly when $\mathbb{R} \setminus G$ is at most
  countable. So $G = \mathbb{R} \setminus \mathbb{Q}$ does admit a monotone
  example, while a $G_\delta$ set with uncountable complement does not.
