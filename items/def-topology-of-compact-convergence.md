---
id: def-topology-of-compact-convergence
kind: definition
title: "The topology of compact convergence on $C(X,Y)$ for metric $X$ and $Y$: uniform convergence on each compact subset of $X$"
status: published
origin: session
deps: [def-metric-compactness, lem-compactness-is-intrinsic, def-metric-space,
       def-metric-ball, def-isometry-and-metric-embedding, def-topology-basis-subbasis,
       thm-basis-criterion, def-max-min, lem-finite-set-has-max,
       def-continuous-map-top, def-metrizable-space, def-metric-continuity,
       lem-metric-reverse-triangle, thm-extreme-value-metric,
       lem-of-triangle-inequality, def-metric-topology, lem-real-line-is-a-metric-space,
       def-abs-value, def-ordered-field, def-complete-ordered-field,
       def-topology-of-uniform-convergence, def-compact-open-topology,
       def-neighbourhood-top]
justified_by: []
aliases: [def-compact-convergence]
landmark: true
short: "topology of compact convergence"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Compact convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_convergence"
    - title: "J. Munkres, Topology, 2nd ed., §46"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X,d_X)$ and $(Y,d)$ be metric spaces ([[def-metric-space]]), each carrying
its metric topology ([[def-metric-topology]], [[def-metrizable-space]]), and let
$C(X,Y)$ be the set of continuous maps $X \to Y$ ([[def-continuous-map-top]]).
For a compact subset $K \subseteq X$ ([[def-metric-compactness]]), a function
$f \in C(X,Y)$ and a real $\varepsilon > 0$ put

$$B_K(f,\varepsilon) \;:=\; \{\, g \in C(X,Y) \;:\; d\big(f(x), g(x)\big) < \varepsilon \text{ for every } x \in K \,\} .$$

No supremum appears in this definition, deliberately: for $K = \varnothing$ the
condition is vacuous and $B_{\varnothing}(f,\varepsilon) = C(X,Y)$, whereas a
supremum over the empty set does not exist in this library.

**The family $\mathcal{B}_{\mathrm{cc}} := \{\, B_K(f,\varepsilon) : K \subseteq X
\text{ compact},\ f \in C(X,Y),\ \varepsilon > 0 \,\}$ is a basis for a unique
topology on $C(X,Y)$** ([[thm-basis-criterion]], claim 1); that topology is the
**topology of compact convergence** (also called the topology of uniform
convergence on compact sets). The verification is carried out below.

### Three facts, discharged here and reused on this page

**(U1) A union of two compact subsets of $X$ is compact.** Let $K_1, K_2 \subseteq X$
be compact and let $(U_i)_{i \in I}$ be open subsets of $X$ with
$K_1 \cup K_2 \subseteq \bigcup_{i \in I} U_i$. If $K_1 \cup K_2 = \varnothing$
there is nothing to prove. Otherwise each $K_m$ is covered by the same family, so
by [[lem-compactness-is-intrinsic]] (claim 3) either $K_m = \varnothing$, and we
take the empty list for it, or there are finitely many indices whose sets cover
$K_m$; concatenating the two lists gives finitely many indices whose sets cover
$K_1 \cup K_2$, and that list is nonempty because $K_1 \cup K_2$ is. By
[[lem-compactness-is-intrinsic]] again, $K_1 \cup K_2$ is compact. Nothing is
selected: the indices are returned by the indexed form of compactness.

**(U2) For $f, g \in C(X,Y)$ the function $\varphi(x) := d(f(x),g(x))$ is a
continuous map $X \to \mathbb{R}$**, $\mathbb{R}$ carrying its usual metric
([[lem-real-line-is-a-metric-space]]). Indeed for $x, x' \in X$,

$$|\varphi(x) - \varphi(x')| \le \big|d(f(x),g(x)) - d(f(x'),g(x))\big| + \big|d(f(x'),g(x)) - d(f(x'),g(x'))\big| \le d\big(f(x),f(x')\big) + d\big(g(x),g(x')\big),$$

the first inequality by the triangle inequality for the absolute value
([[lem-of-triangle-inequality]], [[def-abs-value]]) applied after inserting and
removing $d(f(x'),g(x))$, and the second by the reverse triangle inequality
([[lem-metric-reverse-triangle]]) applied twice, the second time after using the
symmetry of $d$. Given $a \in X$ and a real $\varepsilon > 0$, continuity of $f$
and of $g$ at $a$ ([[def-metric-continuity]], [[def-metrizable-space]]) supplies
reals $\delta_1, \delta_2 > 0$ with $d(f(x),f(a)) < \varepsilon/2$ for
$d_X(x,a) < \delta_1$ and $d(g(x),g(a)) < \varepsilon/2$ for $d_X(x,a) < \delta_2$;
then $\delta := \min\{\delta_1,\delta_2\} > 0$ ([[lem-finite-set-has-max]],
[[def-max-min]]) gives $|\varphi(x)-\varphi(a)| < \varepsilon$ whenever
$d_X(x,a) < \delta$.

**(U3) For $f, g \in C(X,Y)$ and a nonempty compact $K \subseteq X$ the value
$\max_{x \in K} d(f(x),g(x))$ exists.** The restriction of $\varphi$ to the metric
subspace $(K, d_K)$ ([[def-isometry-and-metric-embedding]]) is continuous, the
$\varepsilon$-$\delta$ condition at a point of $K$ being the condition for
$\varphi$ read for the points of $K$ only; $(K,d_K)$ is a nonempty compact metric
space ([[def-metric-compactness]]); so [[thm-extreme-value-metric]] gives a point
of $K$ at which $\varphi$ attains a greatest value.

### Discharge of the basis conditions

**(B1)** Every $f \in C(X,Y)$ lies in $B_{\varnothing}(f,1) \in \mathcal{B}_{\mathrm{cc}}$,
so $\bigcup \mathcal{B}_{\mathrm{cc}} = C(X,Y)$.

**(B2)** Let $h \in B_{K_1}(f_1,\varepsilon_1) \cap B_{K_2}(f_2,\varepsilon_2)$.
For $m \in \{1,2\}$ put $\delta_m := \varepsilon_m$ if $K_m = \varnothing$, and
otherwise $\delta_m := \varepsilon_m - M_m$ where
$M_m := \max_{x \in K_m} d(f_m(x),h(x))$, which exists by (U3) and satisfies
$M_m < \varepsilon_m$ because $h \in B_{K_m}(f_m,\varepsilon_m)$; either way
$\delta_m > 0$. Put $K := K_1 \cup K_2$, compact by (U1), and
$\delta := \min\{\delta_1,\delta_2\} > 0$ ([[lem-finite-set-has-max]],
[[def-max-min]]). Then $h \in B_K(h,\delta)$, and
$B_K(h,\delta) \subseteq B_{K_m}(f_m,\varepsilon_m)$ for $m \in \{1,2\}$: for
$g \in B_K(h,\delta)$ and $x \in K_m \subseteq K$,

$$d\big(f_m(x), g(x)\big) \le d\big(f_m(x), h(x)\big) + d\big(h(x), g(x)\big) < M_m + \delta \le M_m + \delta_m = \varepsilon_m$$

when $K_m \ne \varnothing$, and the condition is vacuous when $K_m = \varnothing$.
So $B_K(h,\delta) \in \mathcal{B}_{\mathrm{cc}}$ contains $h$ and lies inside the
intersection, which is (B2).

By [[thm-basis-criterion]] the family $\mathcal{B}_{\mathrm{cc}}$ is therefore a
basis for exactly one topology on $C(X,Y)$, and the open sets of that topology are
exactly the unions of members of $\mathcal{B}_{\mathrm{cc}}$
([[def-topology-basis-subbasis]]).

**(U4) For each $f \in C(X,Y)$ the sets $B_K(f,\varepsilon)$ *centred at $f$* form
a neighbourhood base at $f$** ([[def-neighbourhood-top]]). Indeed a neighbourhood
of $f$ contains a basic set $B_{K_1}(f_1,\varepsilon_1)$ containing $f$, and the
(B2) computation above run with $h := f$, $K_2 := \varnothing$ and
$\varepsilon_2 := 1$ produces $\delta > 0$ with
$f \in B_{K_1}(f,\delta) \subseteq B_{K_1}(f_1,\varepsilon_1)$. This is the form in
which the topology is used in practice: convergence to $f$ in it is exactly uniform
convergence to $f$ on each compact subset of $X$.

## Remarks

- **Why the name.** $B_K(f,\varepsilon)$ says that $g$ is within $\varepsilon$ of
  $f$ **uniformly on $K$**. So a neighbourhood of $f$ in this topology controls $g$
  uniformly on one compact set at a time, which is uniform convergence on each
  compact subset rather than on all of $X$
  ([[def-topology-of-uniform-convergence]]).

- **Both spaces are metric here, and for different reasons.** The domain must be
  metric because *compact subset* is defined only there
  ([[def-metric-compactness]]); the target must be metric because a distance
  $d(f(x),g(x))$ is written. The compact-open topology of
  [[def-compact-open-topology]] needs only the first, and that is why it, and not
  this one, is the definition that survives to an arbitrary target.

- **The three auxiliary facts are stated here rather than proved three times.**
  (U2) and (U3) together are the statement that two continuous maps into a metric
  space are uniformly close on a compact set by a *maximum* and not merely by a
  supremum, and that is what every interior-point argument on this page consumes.
