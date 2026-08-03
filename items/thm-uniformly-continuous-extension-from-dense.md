---
id: thm-uniformly-continuous-extension-from-dense
kind: theorem
title: "A uniformly continuous map from a dense subspace into a complete metric space extends uniquely to a uniformly continuous map on the whole space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cantor-intersection-metric, def-complete-metric-space,
       def-metric-interior-closure-boundary, thm-metric-sequential-closure,
       def-metric-uniform-continuity, def-countable-choice, lem-metric-limits-unique,
       def-metric-convergence, thm-metric-continuity-characterisations,
       def-isometry-and-metric-embedding, def-metric-bounded-diameter,
       def-metric-ball, def-metric-topology, def-metric-space,
       thm-metric-closure-characterisation, cor-archimedean-reciprocal,
       def-metric-continuity, thm-metric-regularity-hierarchy,
       def-complete-ordered-field, lem-of-inverse-positive]
justified_by: []
forward_refs: [ex-lipschitz-extension-from-the-rationals]
aliases: []
landmark: true
short: "extension from a dense subspace"
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "Continuous linear extension (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_linear_extension"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d_X)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$ be
dense in $X$ ([[def-metric-interior-closure-boundary]]) and carry the subspace
metric ([[def-isometry-and-metric-embedding]]), let $(Y,d_Y)$ be a **complete**
metric space ([[def-complete-metric-space]]), and let $f : A \to Y$ be uniformly
continuous ([[def-metric-uniform-continuity]]). Then:

1. There is a uniformly continuous $g : X \to Y$ with $g(a) = f(a)$ for every
   $a \in A$.
2. $g$ is the **only** continuous map $X \to Y$ extending $f$
   ([[def-metric-continuity]]).

The map $g$ is constructed explicitly below, as the unique point common to the
closures of the images of the shrinking balls around $x$; no value of $g$ is
selected, each is determined.

## Facts & Assumptions

**Given:** A metric space $(X,d_X)$, a dense $A \subseteq X$, a complete metric space $(Y,d_Y)$, a uniformly continuous $f : A \to Y$, and a real $\varepsilon > 0$. For $x \in X$ and $n \in \mathbb{N}$ write $U_n(x) := B_X\big(x, 1/(n+1)\big) \cap A$, $S_n(x) := f[U_n(x)]$ and $T_n(x) := \overline{S_n(x)}$, the closure taken in $Y$.

[A1] Density: $\overline{A} = X$, so $B_X(x,r) \cap A \ne \emptyset$ for every $x \in X$ and every real $r > 0$ ([[def-metric-interior-closure-boundary]], [[def-metric-ball]]).

[A2] Uniform continuity of $f$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $d_Y(f(a),f(a')) < \varepsilon$ for all $a,a' \in A$ with $d_X(a,a') < \delta$; distances inside $A$ are those of $X$ ([[def-metric-uniform-continuity]], [[def-isometry-and-metric-embedding]]).

[A3] Completeness of $(Y,d_Y)$ ([[def-complete-metric-space]]).

[L1] Cantor's intersection theorem in a complete space: a sequence of nonempty closed bounded sets, nested and with diameters tending to $0$, has exactly one common point ([[thm-cantor-intersection-metric]]).

[L2] Closure by adherent points: $u \in \overline{S}$ means every ball around $u$ meets $S$; $S \subseteq \overline{S}$; $\overline{S}$ is closed and is the smallest closed superset of $S$ ([[def-metric-interior-closure-boundary]], [[thm-metric-closure-characterisation]], [[def-metric-topology]]).

[L3] Diameter: for nonempty bounded $S$, $\operatorname{diam}(S) = \sup\{d(u,v) : u,v \in S\}$, so any upper bound of those distances dominates the diameter; a nonempty set all of whose pairwise distances are below a real $\beta$ lies in a ball of radius $\beta + 1$ around any of its points, hence is bounded ([[def-metric-bounded-diameter]], [[def-complete-ordered-field]], [[def-metric-ball]]).

[L4] Reciprocals of naturals: $1/(n+1)$ is a positive real, decreasing in $n$, and below every positive real from some index on ([[cor-archimedean-reciprocal]], [[lem-of-inverse-positive]]).

[L5] A point lies in the closure of $A$ exactly when some sequence in $A$ converges to it; this direction spends $\mathrm{AC}_\omega$ ([[thm-metric-sequential-closure]], [[def-countable-choice]], [[def-metric-convergence]]).

[L6] A continuous map is sequentially continuous ([[thm-metric-continuity-characterisations]]), limits in a metric space are unique ([[lem-metric-limits-unique]]), and a uniformly continuous map is continuous ([[thm-metric-regularity-hierarchy]]).

[L7] Triangle inequality (M3) and symmetry (M2) of a metric ([[def-metric-space]]).

## Proof

**Proof technique:** constructive.

1.1 For every $x \in X$ and $n \in \mathbb{N}$ the set $U_n(x)$ is nonempty by [A1], so $S_n(x)$ is nonempty and $T_n(x)$ is a nonempty closed subset of $Y$. [A1, L2, construct]

1.2 The radii decrease, so $U_{n+1}(x) \subseteq U_n(x)$ and $S_{n+1}(x) \subseteq S_n(x)$; since $T_n(x)$ is a closed superset of $S_{n+1}(x)$, minimality of the closure gives $T_{n+1}(x) \subseteq T_n(x)$. [L2, L4]

1.3 Fix a real $\varepsilon > 0$, let $\delta > 0$ be as in [A2] for $\varepsilon/3$, and let $N$ be a natural with $2/(N+1) < \delta$; note that $N$ depends on $\varepsilon$ alone and not on $x$. [A2, L4, choose]

1.4 Towards uniform continuity, let $\varepsilon > 0$ be real, let $\delta > 0$ be as in [A2] for $\varepsilon/3$, and put $\delta' := \delta/3 > 0$. Fix a natural $m$ with $1/(m+1) < \delta/3$. [A2, L4, choose]

1.5 For claim 2, let $h : X \to Y$ be continuous with $h(a) = f(a)$ for all $a \in A$, and let $x \in X$. Since $\overline{A} = X$ there is a sequence $(a_k)$ in $A$ with $a_k \to x$ in $X$. [A1, L5]

2.1 Let $n \ge N$ and $a, a' \in U_n(x)$. Then $d_X(a,a') \le d_X(a,x) + d_X(x,a') < 2/(n+1) \le 2/(N+1) < \delta$, so $d_Y(f(a),f(a')) < \varepsilon/3$. Hence all pairwise distances in $S_n(x)$ are below $\varepsilon/3$, so $S_n(x)$ is bounded and $\operatorname{diam}(S_n(x)) \le \varepsilon/3$. [step 1.3, A2, L3, L4, L7]

3.1 Let $n \ge N$, let $u,v \in T_n(x)$ and let $\eta > 0$ be real. The balls $B_Y(u,\eta)$ and $B_Y(v,\eta)$ meet $S_n(x)$, so there are $s,s' \in S_n(x)$ with $d_Y(u,s) < \eta$ and $d_Y(v,s') < \eta$, whence $d_Y(u,v) \le d_Y(u,s) + d_Y(s,s') + d_Y(s',v) < \varepsilon/3 + 2\eta$. As $\eta > 0$ was arbitrary, $d_Y(u,v) \le \varepsilon/3$: were $d_Y(u,v) > \varepsilon/3$, the value $\eta := (d_Y(u,v) - \varepsilon/3)/3$ would be positive and would give $d_Y(u,v) < d_Y(u,v)$. [step 2.1, L2, L3, L7]

4.1 So for $n \ge N$ the set $T_n(x)$ is nonempty, closed and bounded with $\operatorname{diam}(T_n(x)) \le \varepsilon/3 < \varepsilon$. [step 1.1, step 3.1, L3]

5.1 Apply steps 1.3 to 4.1 with $\varepsilon = 1$ to get a natural $N_1$ such that $T_n(x)$ is nonempty, closed and bounded for every $n \ge N_1$ and every $x \in X$. Then $\big(T_{N_1+j}(x)\big)_{j \in \mathbb{N}}$ is nested by step 1.2, and its diameters tend to $0$: given a real $\varepsilon > 0$, the $N$ of step 1.3 satisfies $\operatorname{diam}(T_{N_1+j}(x)) < \varepsilon$ for every $j \ge N$, since then $N_1 + j \ge N$. [step 1.2, step 4.1]

6.1 By [L1] and [A3] the intersection $\bigcap_{j \in \mathbb{N}} T_{N_1+j}(x)$ has exactly one element; and because the family $(T_n(x))_n$ is nested this intersection equals $\bigcap_{n \in \mathbb{N}} T_n(x)$, a set defined without reference to $N_1$. Define $g(x)$ to be its unique element; this determines a function $g : X \to Y$, and no choice is made, since the value is unique. [step 1.2, step 5.1, A3, L1, construct]

7.1 $g$ extends $f$: for $a \in A$ and every $n$ we have $a \in U_n(a)$, so $f(a) \in S_n(a) \subseteq T_n(a)$; hence $f(a) \in \bigcap_n T_n(a)$, and by uniqueness $g(a) = f(a)$. [step 6.1, L2]

7.2 Let $x,x' \in X$ with $d_X(x,x') < \delta'$. Since $g(x) \in T_m(x) = \overline{S_m(x)}$, the ball $B_Y(g(x), \varepsilon/3)$ meets $S_m(x)$, so there is $a \in U_m(x)$ with $d_Y(g(x), f(a)) < \varepsilon/3$; likewise there is $a' \in U_m(x')$ with $d_Y(g(x'), f(a')) < \varepsilon/3$. [step 6.1, step 1.4, L2]

8.1 Then $d_X(a,a') \le d_X(a,x) + d_X(x,x') + d_X(x',a') < \delta/3 + \delta/3 + \delta/3 = \delta$, so $d_Y(f(a),f(a')) < \varepsilon/3$, and therefore $d_Y(g(x),g(x')) \le d_Y(g(x),f(a)) + d_Y(f(a),f(a')) + d_Y(f(a'),g(x')) < \varepsilon$. [step 1.4, step 7.2, A2, L7]

9.1 The real $\delta'$ depended on $\varepsilon$ alone, so $g$ is uniformly continuous; together with step 7.1 this establishes claim 1. [step 7.1, step 1.4, step 8.1]

10.1 The map $g$ is continuous, being uniformly continuous, so $g(a_k) \to g(x)$ and $h(a_k) \to h(x)$; but $g(a_k) = f(a_k) = h(a_k)$ for every $k$, so one sequence in $Y$ converges to both $g(x)$ and $h(x)$, whence $g(x) = h(x)$ by uniqueness of limits. As $x$ was arbitrary, $h = g$. [step 7.1, step 9.1, step 1.5, L6]

11.1 The map $g$ of step 6.1 is a uniformly continuous extension of $f$ and is the only continuous one, which is claims 1 and 2. [step 9.1, step 10.1, discharge-construct] ∎

## Remarks

- **Why the construction avoids the Axiom of Choice, and where choice reappears.** The obvious construction sets $g(x) := \lim_k f(a_k)$ for a sequence $(a_k)$ in $A$ converging to $x$. That defines $g$ only after a sequence has been selected at every point of $X$ at once, which is a choice over a set that need not be countable. The construction above never selects: $g(x)$ is defined as the unique element of a set built from $x$ by a formula. Choice does appear, twice, and both times only inside a proof: $\mathrm{AC}_\omega$ is spent by [[thm-cantor-intersection-metric]] in step 6.1, and again by [[thm-metric-sequential-closure]] in step 1.5, which produces one sequence for one point at a time.
- **Completeness of the target is what makes the intersection nonempty**, and it cannot be weakened. Without it the shrinking closed sets $T_n(x)$ can have empty intersection, and there is then nothing to define $g(x)$ to be; the inclusion $\mathbb{Q} \hookrightarrow \mathbb{Q}$ read as a uniformly continuous map from the dense subspace $\mathbb{Q}$ of $\mathbb{R}$ into $\mathbb{Q}$ has no continuous extension to $\mathbb{R}$ for exactly that reason.
- **Uniform continuity of $f$ is what makes the diameters shrink**, and ordinary continuity does not suffice: step 1.3 chooses one $\delta$ before any point $x$ is fixed, and step 5.1 needs that same $\delta$ at every $x$ simultaneously. This is the same pressure point as in [[thm-uniform-continuity-preserves-cauchy]].
- **The extension inherits the modulus, not the constants.** The proof produces $\delta' = \delta/3$ from the $\delta$ that $f$ supplies for $\varepsilon/3$, so a Lipschitz $f$ extends to a uniformly continuous $g$; that $g$ is in fact Lipschitz with the same constant is a separate argument, carried out for a concrete case in [[ex-lipschitz-extension-from-the-rationals]].
