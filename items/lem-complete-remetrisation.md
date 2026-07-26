---
id: lem-complete-remetrisation
kind: lemma
title: "Complete metrizability: admitting a topologically equivalent complete metric is preserved by homeomorphism and by closed subspaces, and $(0,\\infty)$ has it without being complete"
status: published
origin: session
deps: [def-complete-metric-space, def-equivalent-metrics, def-metric-topology, def-metric-space,
       def-metric-continuity, thm-metric-continuity-characterisations,
       def-isometry-and-metric-embedding, lem-isometry-is-an-embedding,
       thm-complete-subspace-iff-closed, thm-metric-sequential-closure,
       def-cauchy-in-metric, def-metric-convergence, lem-metric-nonnegativity,
       def-injection-surjection-bijection, lem-real-line-is-a-metric-space, def-interval,
       thm-cauchy-criterion-via-lub, lem-limit-unique, thm-algebra-of-limits,
       lem-limit-preserves-order, cor-archimedean-reciprocal, lem-of-inverse-positive,
       prop-of-reciprocal-order, lem-of-abs-value, def-real-limit]
justified_by: []
aliases: [lem-completely-metrizable, def-completely-metrizable-topology]
landmark: true
short: "complete metrizability: invariance, closed subspaces, $(0,\\infty)$"
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
    - title: "Completely metrizable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Completely_metrizable_space"
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "Equivalence of metrics (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_of_metrics"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $\mathcal{T}_d$ be
its metric topology ([[def-metric-topology]]). Call $\mathcal{T}_d$ **completely
metrizable** if some metric $\rho$ on $X$ is topologically equivalent to $d$,
that is $\mathcal{T}_\rho = \mathcal{T}_d$ ([[def-equivalent-metrics]]), and
makes $(X,\rho)$ complete ([[def-complete-metric-space]]). Then:

1. **Homeomorphism invariance.** Let $(Y,e)$ be a metric space and let
   $h : X \to Y$ be a bijection ([[def-injection-surjection-bijection]]) such
   that $h$ and $h^{-1}$ are continuous ([[def-metric-continuity]]). If
   $\mathcal{T}_d$ is completely metrizable then so is $\mathcal{T}_e$.
2. **Closed subspaces.** If $\mathcal{T}_d$ is completely metrizable and
   $A \subseteq X$ is closed in $(X,d)$, then $\mathcal{T}_{d_A}$ is completely
   metrizable, $d_A$ being the subspace metric
   ([[def-isometry-and-metric-embedding]]).
3. **The property is strictly weaker than completeness.** Let
   $P := (0,\infty) \subseteq \mathbb{R}$ ([[def-interval]]) carry
   $d(x,y) := |x-y|$ ([[lem-real-line-is-a-metric-space]]). Then $(P,d)$ is
   **not** complete, while
   $$\rho_P(x,y) \;:=\; |x-y| \;+\; \left| \frac{1}{x} - \frac{1}{y} \right|$$
   is a complete metric on $P$ with $\mathcal{T}_{\rho_P} = \mathcal{T}_d$. So
   $\mathcal{T}_d$ is completely metrizable although no completeness assumption
   holds for $d$ itself.

Complete metrizability is a condition on the *collection of open sets* alone:
the metric is quantified over and does not survive into the statement. That is
exactly what completeness fails to be, and claim 3 shows the two conditions are
genuinely different rather than merely stated differently.

## Facts & Assumptions

**Given:** A metric space $(X,d)$; a metric space $(Y,e)$ and a bijection $h : X \to Y$ with $h$ and $h^{-1}$ continuous; a subset $A \subseteq X$ closed in $(X,d)$ and carrying the subspace metric $d_A$; the set $P := (0,\infty)$ with $d(x,y) = |x-y|$; a real $\varepsilon > 0$.

[A1] $\mathcal{T}_d$ is completely metrizable: there is a metric $\rho$ on $X$ with $\mathcal{T}_\rho = \mathcal{T}_d$ and $(X,\rho)$ complete ([[def-equivalent-metrics]], [[def-complete-metric-space]], [[def-metric-topology]]).

[L1] A map between metric spaces has open preimages of open sets exactly when it is $\varepsilon$-$\delta$ continuous at every point ([[thm-metric-continuity-characterisations]], [[def-metric-continuity]], [[def-metric-topology]]).

[L2] The subspace metric is the restriction, $d_A = d \restriction (A \times A)$; so a sequence in $A$ is $d_A$-Cauchy exactly when it is $d$-Cauchy, and converges to $a \in A$ in $(A,d_A)$ exactly when it converges to $a$ in $(X,d)$ ([[def-isometry-and-metric-embedding]], [[def-cauchy-in-metric]], [[def-metric-convergence]]).

[L3] A complete subspace of any metric space is closed, and a closed subspace of a complete space is complete ([[thm-complete-subspace-iff-closed]]).

[L4] An isometric embedding $f$ satisfies $d_Y(f(u),f(v)) = d_X(u,v)$, and a subset $U$ of its source is open exactly when $f[U]$ is open in the image with its subspace metric ([[def-isometry-and-metric-embedding]], [[lem-isometry-is-an-embedding]]).

[L5] The metric axioms (M1), (M2), (M3) and nonnegativity ([[def-metric-space]], [[lem-metric-nonnegativity]]); the absolute value is symmetric and satisfies the triangle inequality ([[lem-of-abs-value]]).

[L6] $\mathbb{R}$ under $|x-y|$ is a metric space ([[lem-real-line-is-a-metric-space]]); every Cauchy sequence of reals converges ([[thm-cauchy-criterion-via-lub]], [[def-cauchy-in-metric]]) and the limit of a real sequence is unique ([[lem-limit-unique]], [[def-real-limit]]).

[L7] Limits of reals preserve non-strict inequalities, are additive and are multiplicative ([[lem-limit-preserves-order]], [[thm-algebra-of-limits]]); and $1/(k+2) \to 0$ ([[cor-archimedean-reciprocal]]).

[L8] A subset of a metric space is closed exactly when it is sequentially closed ([[thm-metric-sequential-closure]]).

[L9] For $x > 0$ the reciprocal $1/x$ is positive, $1/x = 1/y$ forces $x = y$, and $y > a/2 > 0$ gives $1/(ay) < 2/a^2$ ([[lem-of-inverse-positive]], [[prop-of-reciprocal-order]]).

[L10] A bijection $h$ satisfies $h[U] = (h^{-1})^{-1}[U]$ and $h^{-1}[h[U]] = U$ for every $U$ in its source ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 If $\sigma$ and $\sigma'$ are metrics on one set $Z$, then $\mathcal{T}_\sigma = \mathcal{T}_{\sigma'}$ holds exactly when both of the following do: for every $z \in Z$ and real $\varepsilon > 0$ there is a real $\delta > 0$ with $\sigma'(z,w) < \varepsilon$ whenever $\sigma(z,w) < \delta$, and the same with $\sigma$ and $\sigma'$ interchanged. Indeed the two conditions say that the two identity maps are $\varepsilon$-$\delta$ continuous, which by [L1] says that each topology is contained in the other. [L1]

1.2 For claim 1 let $\rho$ be as in [A1] and put $\rho'(y,y') := \rho(h^{-1}(y), h^{-1}(y'))$ for $y,y' \in Y$. This is a metric on $Y$: (M2) and (M3) are inherited pointwise from $\rho$, and (M1) holds because $h^{-1}$ is injective, so $\rho'(y,y') = 0$ gives $h^{-1}(y) = h^{-1}(y')$ and hence $y = y'$. By construction $\rho'(h(x),h(x')) = \rho(x,x')$, so $h : (X,\rho) \to (Y,\rho')$ is a bijective isometric embedding. [A1, L5, L10, construct]

1.3 For claim 3 put $\sigma(x,y) := |1/x - 1/y|$ for $x,y \in P$. This is a metric on $P$: it is nonnegative and symmetric, it satisfies the triangle inequality because the absolute value does, and $\sigma(x,y) = 0$ gives $1/x = 1/y$ and hence $x = y$. [L5, L9, construct]

1.4 A sum of two metrics on one set is again a metric, since symmetry and the triangle inequality add, the sum of two nonnegative reals is nonnegative, and the sum vanishes exactly when both summands do. Hence $\rho_P = d + \sigma$ is a metric on $P$, and $d(x,y) \le \rho_P(x,y)$ and $\sigma(x,y) \le \rho_P(x,y)$ for all $x,y \in P$. [L5]

1.5 Let $a \in P$ and let $\varepsilon > 0$ be real; put $\delta := \min\{\, a/2,\ \varepsilon/(1 + 2/a^2) \,\}$, a positive real. For $y \in P$ with $|a - y| < \delta$ one has $y > a - a/2 = a/2$, hence $ay > a^2/2$ and $\sigma(a,y) = |a-y|/(ay) < 2|a-y|/a^2$, so $\rho_P(a,y) < |a-y| \cdot (1 + 2/a^2) < \varepsilon$. [L5, L9, algebra]

1.6 The sequence $x_k := 1/(k+2)$ has all its terms in $P$ and converges in $\mathbb{R}$ to $0$, which is not in $P$; so $P$ is not sequentially closed in $\mathbb{R}$ and therefore not closed in $(\mathbb{R}, |x-y|)$. [L6, L7, L8, L9]

1.7 For claim 2 let $\rho$ be as in [A1]. Since $\mathcal{T}_\rho = \mathcal{T}_d$ and $A$ is closed in $(X,d)$, the set $A$ is closed in $(X,\rho)$ as well, so $(A, \rho_A)$ is complete by [L3], $\rho_A$ being the restriction of $\rho$ to $A \times A$. [A1, L2, L3]

2.1 Claim 1, completeness: let $(y_k)$ be a $\rho'$-Cauchy sequence in $Y$. By step 1.2 the sequence $(h^{-1}(y_k))$ is $\rho$-Cauchy, so by [A1] it converges in $(X,\rho)$ to some $x \in X$, and then $\rho'(y_k, h(x)) = \rho(h^{-1}(y_k), x) \to 0$, that is $y_k \to h(x)$ in $(Y,\rho')$. So $(Y,\rho')$ is complete. [step 1.2, A1, L5]

2.2 Claim 1, topology: by [L4] applied to the bijective isometric embedding $h$ of step 1.2, whose image is all of $Y$ with $\rho'$ itself as subspace metric, a set $U \subseteq X$ is $\rho$-open exactly when $h[U]$ is $\rho'$-open. And $U$ is $d$-open exactly when $h[U]$ is $e$-open, since $h[U] = (h^{-1})^{-1}[U]$ is $e$-open for $d$-open $U$ by continuity of $h^{-1}$, and conversely $U = h^{-1}[h[U]]$ is $d$-open for $e$-open $h[U]$ by continuity of $h$. As $\mathcal{T}_\rho = \mathcal{T}_d$ by [A1], the two equivalences give $\mathcal{T}_{\rho'} = \mathcal{T}_e$. [step 1.2, A1, L1, L4, L10]

2.3 Claim 2, topology: apply step 1.1 to $\rho$ and $d$ on $X$, which is legitimate by [A1], and restrict the two resulting $\varepsilon$-$\delta$ conditions to points of $A$; since $\rho_A$ and $d_A$ are the restrictions of $\rho$ and $d$, the same $\delta$s witness the two conditions of step 1.1 for $\rho_A$ and $d_A$ on $A$, whence $\mathcal{T}_{\rho_A} = \mathcal{T}_{d_A}$. [step 1.1, step 1.7, A1, L2]

2.4 Claim 3, topology: by step 1.4 the identity $(P,\rho_P) \to (P,d)$ satisfies the first condition of step 1.1 with $\delta := \varepsilon$, and by step 1.5 the identity $(P,d) \to (P,\rho_P)$ satisfies the second; so $\mathcal{T}_{\rho_P} = \mathcal{T}_d$. [step 1.1, step 1.4, step 1.5]

2.5 Claim 3, failure of completeness for $d$: were $(P,d)$ complete, [L3] would make $P$ closed in $(\mathbb{R}, |x-y|)$, contradicting step 1.6. So $(P,d)$ is not complete. [step 1.6, L2, L3, L6]

2.6 Claim 3, completeness of $\rho_P$: let $(x_k)$ be a $\rho_P$-Cauchy sequence in $P$. By the two inequalities of step 1.4 both $(x_k)$ and $(1/x_k)$ are Cauchy sequences of reals, so by [L6] they converge, say $x_k \to L$ and $1/x_k \to c$; and $L \ge 0$ and $c \ge 0$, all terms being positive. [step 1.3, step 1.4, L2, L6, L7]

3.1 Claim 1 is established: $\rho'$ is a complete metric on $Y$ with $\mathcal{T}_{\rho'} = \mathcal{T}_e$, so $\mathcal{T}_e$ is completely metrizable. [step 2.1, step 2.2]

3.2 Claim 2 is established: $\rho_A$ is a complete metric on $A$ with $\mathcal{T}_{\rho_A} = \mathcal{T}_{d_A}$, so $\mathcal{T}_{d_A}$ is completely metrizable. [step 1.7, step 2.3]

3.3 Continuing step 2.6: $x_k \cdot (1/x_k) = 1$ for every $k$, so $L c = 1$ by multiplicativity of limits; hence $L \ne 0$, so $L > 0$ and $L \in P$, and $c = 1/L$. [step 2.6, L7, L9]

4.1 Hence $\rho_P(x_k, L) = |x_k - L| + |1/x_k - 1/L| \to 0$ by additivity of limits, that is $x_k \to L$ in $(P, \rho_P)$ with $L \in P$; every $\rho_P$-Cauchy sequence in $P$ therefore converges in $P$, and $(P,\rho_P)$ is complete. [step 2.6, step 3.3, L7]

5.1 Claim 3 is established by step 2.4, step 2.5 and step 4.1, and claims 1 and 2 by step 3.1 and step 3.2. [step 2.4, step 2.5, step 3.1, step 3.2, step 4.1] ∎

## Remarks

- **What claim 3 decides, and what it leaves open.** It settles that "carries a complete metric" is strictly weaker than "this metric is complete", on the cheapest example available here. It does **not** characterise the topologies that are completely metrizable. The classical characterisation is Alexandroff's theorem — a subspace of a complete metric space is completely metrizable exactly when it is a $G_\delta$ subset — and it is out of reach at this point in the library, needing countable intersections of open sets, the Baire category theorem, and a metric built as a convergent series of terms $|1/\operatorname{dist}(x, X \setminus U_n) - 1/\operatorname{dist}(y, X \setminus U_n)|$. None of that is available here.

- **The one-sided reading of claim 2.** A closed subspace of a completely metrizable space is completely metrizable. An *open* one is too, and so is any countable intersection of open sets, but that is Alexandroff's theorem and is not proved here, so nothing on this page licenses either. Nor does anything here decide a subspace that is neither open nor closed: $(0,1]$ inside $\mathbb{R}$ is completely metrizable and $\mathbb{Q}$ is not, and both facts need machinery this page does not have.

- **Where the term is fixed.** This item introduces "completely metrizable" as a property of a metric topology, since a topology here is a collection of subsets ([[def-metric-topology]]) rather than an abstract space. A later page of this library restates it for a general topological space; that restatement is a transfer of this definition along the identification of the two developments, not a second notion.

- **Claim 1 is what makes the property topological at all.** Read literally, the definition already refers to $\mathcal{T}_d$ alone, so the content of claim 1 is that the property travels between *different* underlying sets: a homeomorphism transports one complete metric to another, by making itself an isometry ([[lem-isometry-is-an-embedding]]). Completeness itself does not travel that way, since a homeomorphism need not be an isometry for the given metrics, and that is the whole difference.
