---
id: thm-cantor-intersection-metric
kind: theorem
title: "In a complete metric space nested nonempty closed sets whose diameters tend to $0$ meet in exactly one point, and this property characterises completeness"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complete-metric-space, def-metric-bounded-diameter,
       thm-metric-closure-characterisation, def-cauchy-in-metric, def-countable-choice,
       thm-metric-sequential-closure, def-metric-topology, def-real-limit,
       def-metric-interior-closure-boundary, def-metric-convergence,
       lem-metric-cauchy-bounded, lem-limit-preserves-order, lem-metric-nonnegativity,
       def-metric-ball, def-metric-space, thm-induction-principle,
       def-complete-ordered-field, lem-rat-embeds-dense]
justified_by: []
forward_refs: [cex-cantor-intersection-needs-vanishing-diameters]
aliases: []
landmark: true
short: "Cantor intersection theorem"
proof_strategy: direct
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
    - title: "Cantor's intersection theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_intersection_theorem"
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]). Call a sequence
$(F_k)_{k \in \mathbb{N}}$ of subsets of $X$ a **Cantor chain** if every $F_k$ is
nonempty, closed ([[def-metric-topology]]) and bounded, $F_{k+1} \subseteq F_k$
for every $k$, and $\operatorname{diam}(F_k) \to 0$ in $\mathbb{R}$
([[def-metric-bounded-diameter]], [[def-real-limit]]). Then:

1. If $(X,d)$ is complete ([[def-complete-metric-space]]), every Cantor chain in
   $X$ has an intersection $\bigcap_{k \in \mathbb{N}} F_k$ with **exactly one**
   element.
2. Conversely, if every Cantor chain in $X$ has nonempty intersection, then
   $(X,d)$ is complete.

Boundedness of each $F_k$ is part of the definition of a Cantor chain because
$\operatorname{diam}$ is defined for nonempty bounded sets only in this library
([[def-metric-bounded-diameter]]); it is not an extra hypothesis but the
precondition for writing the diameter condition down.

## Facts & Assumptions

**Given:** A metric space $(X,d)$; a Cantor chain $(F_k)$ in $X$; a real $\varepsilon > 0$.

[A1] Completeness of $(X,d)$: every Cauchy sequence in $X$ converges to a point of $X$ ([[def-complete-metric-space]], [[def-cauchy-in-metric]]).

[A2] The converse hypothesis: every Cantor chain in $X$ has nonempty intersection.

[L1] For nonempty bounded $A \subseteq X$, $\operatorname{diam}(A) = \sup\{ d(a,b) : a,b \in A \}$, so $d(a,b) \le \operatorname{diam}(A)$ for all $a,b \in A$, and $\operatorname{diam}(A) \ge 0$; a set of reals bounded above has a least upper bound, and any upper bound of that set dominates it ([[def-metric-bounded-diameter]], [[def-complete-ordered-field]]).

[L2] Closure by adherent points: $x \in \overline{A}$ means $B(x,r) \cap A \ne \emptyset$ for every real $r > 0$; $A \subseteq \overline{A}$; $\overline{A}$ is closed and is the smallest closed superset of $A$, and $A$ is closed exactly when $A = \overline{A}$ ([[def-metric-interior-closure-boundary]], [[thm-metric-closure-characterisation]], [[def-metric-ball]]).

[L3] A closed set is sequentially closed: a sequence in it that converges in $X$ has its limit in it ([[thm-metric-sequential-closure]]).

[L4] Countable choice: a family $(A_k)_{k \in \mathbb{N}}$ of nonempty sets admits $k \mapsto a_k$ with $a_k \in A_k$ ([[def-countable-choice]]).

[L5] Triangle inequality (M3), symmetry (M2) and separation (M1) of a metric, and nonnegativity of a metric ([[def-metric-space]], [[lem-metric-nonnegativity]]).

[L6] Limits of reals preserve non-strict inequalities, and a constant sequence converges to that constant ([[lem-limit-preserves-order]], [[def-real-limit]]).

[L7] Convergence and Cauchyness may be tested with real $\varepsilon > 0$ rather than rational ([[def-metric-convergence]], [[def-cauchy-in-metric]], [[lem-rat-embeds-dense]]).

[L8] The range of a Cauchy sequence is bounded ([[lem-metric-cauchy-bounded]]), and a subset of a bounded set is bounded ([[def-metric-bounded-diameter]]).

[L9] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 Nestedness propagates: for $k \le l$ one has $F_l \subseteq F_k$, by induction on $l$ from $F_{l+1} \subseteq F_l$ and transitivity of inclusion. [L9]

1.2 Assume [A1] and let $(F_k)$ be a Cantor chain. Every $F_k$ is nonempty, so [L4] supplies a sequence $(x_k)$ with $x_k \in F_k$ for every $k$. [A1, L4, choose]

1.3 A preliminary about closures, used in claim 2: let $A \subseteq X$ be nonempty and bounded, let $u, v \in \overline{A}$ and let $\eta > 0$ be real; then $B(u,\eta)$ and $B(v,\eta)$ meet $A$, so there are $a, b \in A$ with $d(u,a) < \eta$ and $d(v,b) < \eta$, whence $d(u,v) \le d(u,a) + d(a,b) + d(b,v) < \operatorname{diam}(A) + 2\eta$. [L1, L2, L5]

1.4 If $x, y \in \bigcap_k F_k$ then $d(x,y) \le \operatorname{diam}(F_k)$ for every $k$ by [L1]; the constant sequence with value $d(x,y)$ converges to $d(x,y)$ and $\operatorname{diam}(F_k) \to 0$, so $d(x,y) \le 0$, and $d(x,y) \ge 0$ forces $d(x,y) = 0$ and $x = y$. [L1, L5, L6]

1.5 For claim 2 assume [A2] and let $(x_k)$ be a Cauchy sequence in $X$; put $A_k := \{\, x_j : j \ge k \,\}$ and $F_k := \overline{A_k}$. [A2, construct]

2.1 Since $d(u,v) < \operatorname{diam}(A) + 2\eta$ for every real $\eta > 0$, we get $d(u,v) \le \operatorname{diam}(A)$: were $d(u,v) > \operatorname{diam}(A)$, the value $\eta := (d(u,v) - \operatorname{diam}(A))/3$ would be positive and would give $d(u,v) < \operatorname{diam}(A)/3 + 2d(u,v)/3 < d(u,v)$. [step 1.3, algebra]

2.2 Back to claim 1: for any $K \in \mathbb{N}$ and all $m, n \ge K$ we have $x_m \in F_m \subseteq F_K$ and $x_n \in F_n \subseteq F_K$, so $d(x_m,x_n) \le \operatorname{diam}(F_K)$. [step 1.1, step 1.2, L1]

2.3 $A_{k+1} \subseteq A_k$, and $\overline{A_k}$ is a closed superset of $A_{k+1}$, so $F_{k+1} \subseteq F_k$ by minimality of the closure. [step 1.5, L2]

3.1 Hence $\operatorname{diam}(A)$ is an upper bound of $\{ d(u,v) : u,v \in \overline{A} \}$; fixing $u \in \overline{A}$, which exists since $A \ne \emptyset$ and $A \subseteq \overline{A}$, gives $\overline{A} \subseteq B(u, \operatorname{diam}(A) + 1)$, so $\overline{A}$ is nonempty and bounded and $\operatorname{diam}(\overline{A}) \le \operatorname{diam}(A)$. And $\{d(a,b) : a,b \in A\} \subseteq \{d(u,v) : u,v \in \overline{A}\}$ gives $\operatorname{diam}(A) \le \operatorname{diam}(\overline{A})$, so the two diameters are equal. [step 2.1, L1, L2]

3.2 Given a real $\varepsilon > 0$, the convergence $\operatorname{diam}(F_k) \to 0$ supplies $K$ with $\operatorname{diam}(F_K) < \varepsilon$, so $d(x_m,x_n) < \varepsilon$ for all $m,n \ge K$; hence $(x_k)$ is Cauchy, and by [A1] it converges to some $x \in X$. [step 2.2, A1, L6, L7]

4.1 Fix $K \in \mathbb{N}$. For every $k \ge K$ we have $x_k \in F_k \subseteq F_K$, and the tail $(x_{K+j})_{j \in \mathbb{N}}$ converges to $x$ because $(x_k)$ does; since $F_K$ is closed it is sequentially closed, so $x \in F_K$. As $K$ was arbitrary, $x \in \bigcap_k F_k$. [step 1.1, step 3.2, L3, L7]

4.2 Each $A_k$ is nonempty and is contained in the bounded range of $(x_k)$, hence bounded; so each $F_k$ is nonempty, closed and, by step 3.1, bounded with $\operatorname{diam}(F_k) = \operatorname{diam}(A_k)$. [step 3.1, step 1.5, L2, L8]

5.1 Claim 1 is established: the intersection contains $x$ by step 4.1 and no second point by step 1.4. [step 4.1, step 1.4]

5.2 Given a real $\varepsilon > 0$, Cauchyness supplies $K$ with $d(x_m,x_n) < \varepsilon/2$ for all $m,n \ge K$; then $\varepsilon/2$ is an upper bound of $\{d(a,b) : a,b \in A_k\}$ for every $k \ge K$, so $0 \le \operatorname{diam}(A_k) \le \varepsilon/2 < \varepsilon$ for $k \ge K$. Hence $\operatorname{diam}(F_k) \to 0$ and $(F_k)$ is a Cantor chain. [step 4.2, step 2.3, L1, L5, L7]

6.1 By [A2] there is $x \in \bigcap_k F_k$. Given a real $\varepsilon > 0$, take $K$ as in step 5.2 for $\varepsilon$; since $x \in F_K = \overline{A_K}$, the ball $B(x,\varepsilon/2)$ meets $A_K$, so there is $j \ge K$ with $d(x,x_j) < \varepsilon/2$, and then for every $k \ge K$ we get $d(x,x_k) \le d(x,x_j) + d(x_j,x_k) < \varepsilon/2 + \varepsilon/2 = \varepsilon$. [step 5.2, A2, L2, L5]

7.1 So $x_k \to x$ with $x \in X$, every Cauchy sequence in $X$ converges, and $(X,d)$ is complete; this is claim 2, and claim 1 is step 5.1. [step 5.1, step 6.1, L7] ∎

## Remarks

- **The diameter hypothesis cannot be dropped**, and neither can it be weakened to "the diameters are bounded". On $\mathbb{N}$ with a metric taking values just above $1$ the tails $\{n, n+1, \dots\}$ are nested, closed, bounded and complete with empty intersection ([[cex-cantor-intersection-needs-vanishing-diameters]]); what fails there is exactly $\operatorname{diam}(F_k) \to 0$.
- **Why the equality $\operatorname{diam}(\overline{A}) = \operatorname{diam}(A)$ is proved and not assumed.** Claim 2 builds its Cantor chain out of the tails of a Cauchy sequence, which are almost never closed, so it must close them; and closing a set could in principle enlarge its diameter. Steps 1.3, 2.1 and 3.1 are the proof that it cannot, and they are the only place in this item where the definition of the closure by adherent points is used at full strength.
- **Where choice enters.** Only at step 1.2, which picks one point from each $F_k$; that is $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Claim 2 is choice free apart from what [[thm-metric-sequential-closure]] is not asked to supply here: step 6.1 uses the definition of the closure directly rather than a sequence extracted from it.
- **Relation to the nested interval property.** For $X = \mathbb{R}$ and $F_k = [a_k,b_k]$ this is the nested interval property with the extra hypothesis that the lengths tend to $0$, which is what buys uniqueness of the common point. The general statement replaces "interval" by "closed set" and "length" by "diameter", and completeness is what replaces the least-upper-bound property.
