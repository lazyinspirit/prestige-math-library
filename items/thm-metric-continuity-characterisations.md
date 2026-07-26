---
id: thm-metric-continuity-characterisations
kind: theorem
title: "For a map of metric spaces the following agree: $\\varepsilon$-$\\delta$ continuity everywhere, preimages of open sets are open, preimages of closed sets are closed, sequential continuity, and $f(\\overline{A}) \\subseteq \\overline{f(A)}$"
status: draft
origin: session
deps: [def-metric-continuity, def-metric-topology, thm-metric-sequential-closure,
       thm-metric-closure-characterisation, def-metric-convergence, def-countable-choice,
       def-metric-ball, thm-metric-open-set-algebra, def-metric-interior-closure-boundary,
       def-injection-surjection-bijection, def-metric-space, lem-rat-embeds-dense,
       def-real-limit, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "four faces of continuity"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "Sequential continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function_(topology)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be a function, with images and preimages written $f[\,\cdot\,]$
and $f^{-1}[\,\cdot\,]$ ([[def-injection-surjection-bijection]]). The following
five statements are equivalent.

- **(a)** $f$ is continuous at every point of $X$ in the $\varepsilon$-$\delta$
  sense ([[def-metric-continuity]]).
- **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \subseteq Y$
  ([[def-metric-topology]]).
- **(c)** $f^{-1}[G]$ is closed in $X$ for every closed $G \subseteq Y$.
- **(d)** $f$ is **sequentially continuous**: whenever $x_k \to x$ in $(X,d_X)$,
  also $f(x_k) \to f(x)$ in $(Y,d_Y)$ ([[def-metric-convergence]]).
- **(e)** $f[\overline{A}] \subseteq \overline{f[A]}$ for every $A \subseteq X$
  ([[def-metric-interior-closure-boundary]]).

**Where choice is used.** Only the implication (d) $\Rightarrow$ (e) uses a
choice principle, and it uses it only through
[[thm-metric-sequential-closure]], whose forward direction spends the Axiom of
Countable Choice ([[def-countable-choice]]). The cycle
(a) $\Rightarrow$ (b) $\Rightarrow$ (c) $\Rightarrow$ (e) $\Rightarrow$ (a) and
the implication (a) $\Rightarrow$ (d) are choice free.

## Facts & Assumptions

**Given:** Metric spaces $(X,d_X)$, $(Y,d_Y)$ and a function $f : X \to Y$; a point $a \in X$, a real $\varepsilon > 0$, subsets $A \subseteq X$, $V \subseteq Y$ open and $G \subseteq Y$ closed, and a sequence $(x_k)$ in $X$.

[A1] Continuity at $a$: for every real $\varepsilon > 0$ there is $\delta > 0$ with $f[B_X(a,\delta)] \subseteq B_Y(f(a),\varepsilon)$ ([[def-metric-continuity]], [[def-metric-ball]]).

[A2] Open and closed: $U$ is open when every point of $U$ has a ball around it inside $U$; $G$ is closed when its complement is open ([[def-metric-topology]]).

[L1] Preimages respect complements: $f^{-1}[Y \setminus G] = X \setminus f^{-1}[G]$, since $f(x) \in Y \setminus G$ holds exactly when $f(x) \notin G$ ([[def-injection-surjection-bijection]]).

[L2] Closure: $\overline{A}$ consists of the points every ball around which meets $A$; it is closed, contains $A$, and is contained in every closed superset of $A$ ([[def-metric-interior-closure-boundary]], [[thm-metric-closure-characterisation]]).

[L3] Sequential description of the closure: $x \in \overline{A}$ if and only if some sequence in $A$ converges to $x$; the direction producing the sequence uses countable choice ([[thm-metric-sequential-closure]], [[def-countable-choice]]).

[L4] Convergence: $x_k \to x$ means that for every rational $\varepsilon > 0$ there is $K$ with $d_X(x_k,x) < \varepsilon$ for $k \ge K$, and producing such a $K$ for every REAL $\varepsilon > 0$ is equivalent, since below any positive real lies a positive rational ([[def-metric-convergence]], [[def-real-limit]], [[lem-rat-embeds-dense]]).

[L5] Balls are open and contain their centres ([[thm-metric-open-set-algebra]], [[def-metric-ball]]); and trichotomy of the order of $\mathbb{R}$, so the negation of $t < \varepsilon$ is $t \ge \varepsilon$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 (a) implies (b): let $V \subseteq Y$ be open and $x \in f^{-1}[V]$; since $f(x) \in V$ there is $\varepsilon > 0$ with $B_Y(f(x),\varepsilon) \subseteq V$, and continuity at $x$ supplies $\delta > 0$ with $f[B_X(x,\delta)] \subseteq B_Y(f(x),\varepsilon) \subseteq V$, that is $B_X(x,\delta) \subseteq f^{-1}[V]$; as $x$ was arbitrary, $f^{-1}[V]$ is open. [A1, A2]

1.2 (b) implies (c): let $G \subseteq Y$ be closed; then $Y \setminus G$ is open, so $f^{-1}[Y \setminus G]$ is open by (b), and that set is $X \setminus f^{-1}[G]$, so $f^{-1}[G]$ is closed. [A2, L1]

1.3 (c) implies (e): let $A \subseteq X$; the set $\overline{f[A]}$ is closed in $Y$, so $G_0 := f^{-1}\big[\overline{f[A]}\big]$ is closed in $X$ by (c), and $A \subseteq G_0$ because $f[A] \subseteq \overline{f[A]}$; hence $\overline{A} \subseteq G_0$ by minimality of the closure, which says exactly $f[\overline{A}] \subseteq \overline{f[A]}$. [L2]

1.4 (e) implies (a): fix $a \in X$ and a real $\varepsilon > 0$, put $A_\varepsilon := \{x \in X : d_Y(f(x),f(a)) \ge \varepsilon\}$, and suppose no $\delta > 0$ satisfies the continuity condition at $a$ for this $\varepsilon$, that is every ball $B_X(a,\delta)$ contains a point of $A_\varepsilon$; then $a \in \overline{A_\varepsilon}$, so (e) gives $f(a) \in f[\overline{A_\varepsilon}] \subseteq \overline{f[A_\varepsilon]}$, so the ball $B_Y(f(a),\varepsilon)$ meets $f[A_\varepsilon]$ and there is $x \in A_\varepsilon$ with $d_Y(f(x),f(a)) < \varepsilon$, contradicting the definition of $A_\varepsilon$; hence some $\delta > 0$ works, and since $a$ and $\varepsilon$ were arbitrary $f$ is continuous everywhere. [assume-hyp, A1, L2, L5]

1.5 (a) implies (d): let $x_k \to x$ and let a real $\varepsilon > 0$ be given; continuity at $x$ supplies $\delta > 0$ with $f[B_X(x,\delta)] \subseteq B_Y(f(x),\varepsilon)$, and convergence supplies $K$ with $d_X(x_k,x) < \delta$, that is $x_k \in B_X(x,\delta)$, for all $k \ge K$; then $d_Y(f(x_k),f(x)) < \varepsilon$ for all $k \ge K$, so $f(x_k) \to f(x)$. [A1, L4, L5]

1.6 (d) implies (e): let $A \subseteq X$ and let $y \in f[\overline{A}]$, say $y = f(x)$ with $x \in \overline{A}$; by [L3] there is a sequence $(a_k)$ in $A$ with $a_k \to x$, by (d) $f(a_k) \to f(x)$, and $f(a_k) \in f[A]$ for every $k$, so [L3] applied in $Y$ gives $f(x) \in \overline{f[A]}$. [L3]

2.1 Steps 1.1, 1.2, 1.3 and 1.4 close the cycle (a), (b), (c), (e), (a), so those four are equivalent; step 1.5 gives (a) implies (d) and step 1.6 gives (d) implies (e), which is one of the four, so (d) is equivalent to them as well; hence all five statements are equivalent. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6] ∎

## Remarks

- **(b) is the definition of continuity in general topology**, and the theorem is
  what makes the metric $\varepsilon$-$\delta$ definition agree with it. Once (b)
  is available, continuity can be discussed without ever mentioning a metric,
  which is what the later topology pages do.
- **(d) owes its strength to first countability.** Sequential continuity
  implies continuity here only because metric spaces are first countable
  ([[lem-metric-ball-neighbourhood-base]]), which is what
  [[thm-metric-sequential-closure]] rests on. Nothing above should be read as
  saying that sequential continuity always suffices.
- **Preimages, not images.** Nothing here says that $f[U]$ is open for open $U$;
  that is openness of the map, a different condition, which continuity does not
  imply: a constant map is continuous and its image of any nonempty open set is
  a single point. The
  image condition that does hold is the closure inclusion (e), and even that is
  an inclusion and not an equality.
