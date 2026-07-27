---
id: lem-real-and-metric-notions-agree
kind: lemma
title: "Dictionary: for $A \\subseteq \\mathbb{R}$ with the metric $d(x,y) = |x-y|$, continuity and uniform continuity of $f : A \\to \\mathbb{R}$ agree with the metric-space notions, the Lipschitz and Hölder conditions are the metric ones instantiated, and a subset of $\\mathbb{R}$ is compact in the open-cover sense of $\\mathbb{R}$ exactly when it is a compact metric subspace"
status: published
origin: session
deps: [def-continuity-real, def-uniform-continuity-real, def-metric-continuity, def-metric-uniform-continuity, def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy, thm-uniform-continuity-preserves-cauchy, lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding, def-metric-space, def-metric-ball, def-metric-topology, def-metric-compactness, lem-compactness-is-intrinsic, def-metric-compactness-variants, def-metric-convergence, def-cauchy-in-metric, def-open-cover-r, def-open-and-closed-in-r, def-real-limit, def-sequence, def-rational-power, lem-of-abs-value, lem-metric-nonnegativity]
justified_by: []
aliases: [lem-metric-dictionary-for-r]
forward_refs: [ex-x-to-the-beta-separates-the-holder-classes, cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]
landmark: true
short: "real and metric notions agree"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 and Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ carry the subspace metric of the usual metric
$d_{\mathbb{R}}(x,y) = |x-y|$ of $\mathbb{R}$, that is
$d_A(x,y) = |x - y|$ for $x, y \in A$
([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]),
and let $f : A \to \mathbb{R}$, regarded also as a map of metric spaces
$(A, d_A) \to (\mathbb{R}, d_{\mathbb{R}})$. Then the $\mathbb{R}$-native
notions of this page and the metric-space notions of the earlier pages are the
**same notions**, in the following five senses.

1. **Continuity.** For every $c \in A$: $f$ is continuous at $c$ in the sense of
   [[def-continuity-real]] if and only if $f$ is continuous at $c$ in the sense
   of [[def-metric-continuity]]. Consequently $f$ is continuous on $A$ if and
   only if it is continuous as a map of metric spaces.
2. **Uniform continuity.** $f$ is uniformly continuous on $A$ in the sense of
   [[def-uniform-continuity-real]] if and only if it is uniformly continuous as
   a map of metric spaces ([[def-metric-uniform-continuity]]).
3. **Lipschitz.** For a real $L \ge 0$: $f$ is Lipschitz with constant $L$ as a
   map of metric spaces ([[def-lipschitz-holder-contraction]]) if and only if
   $$|f(x) - f(x')| \le L\,|x - x'| \qquad \text{for all } x, x' \in A .$$
   This displayed condition is what "$f$ is Lipschitz with constant $L$" means
   for a real function on $A$ in this library; no second definition is made.
4. **Hölder.** For a rational $\alpha$ with $0 < \alpha \le 1$ and a real
   $C \ge 0$: $f$ is $\alpha$-Hölder with constant $C$ as a map of metric spaces
   if and only if
   $$|f(x) - f(x')| \le C\,|x - x'|^{\alpha} \qquad \text{for all } x, x' \in A ,$$
   the power being the rational power of a nonnegative base
   ([[def-rational-power]]).
5. **Compactness, in both senses used in this library.** For $K \subseteq
   \mathbb{R}$ with the subspace metric $d_K$:
   - $K$ is compact in the open-cover sense of [[def-open-cover-r]] — every
     family of open subsets of $\mathbb{R}$ covering $K$ has a finite subfamily
     covering $K$ — if and only if the metric space $(K, d_K)$ is compact
     ([[def-metric-compactness]]);
   - $K$ is sequentially compact in the sense of [[def-open-cover-r]] if and
     only if $(K, d_K)$ is sequentially compact as a metric space
     ([[def-metric-compactness-variants]]).

Two consequences are recorded, since they are the reason the dictionary is
stated as a lemma rather than as a remark.

6. **The regularity hierarchy transfers verbatim.** By clauses 1 to 4 and
   [[thm-metric-regularity-hierarchy]]: a Lipschitz $f : A \to \mathbb{R}$ is
   uniformly continuous on $A$; an $\alpha$-Hölder $f$ with rational
   $0 < \alpha \le 1$ is uniformly continuous on $A$; a uniformly continuous $f$
   is continuous on $A$; and if $A$ is nonempty and bounded, a Lipschitz $f$ is
   $\alpha$-Hölder for every rational $\alpha$ with $0 < \alpha \le 1$. No
   strictness is claimed here, and none is claimed there.
7. **Cauchy sequences transfer.** A sequence $(x_k)$ with terms in $A$ is Cauchy
   in $(A, d_A)$ ([[def-cauchy-in-metric]]) if and only if it is Cauchy as a
   sequence of reals ([[def-real-limit]]); so by clause 2 and
   [[thm-uniform-continuity-preserves-cauchy]], a uniformly continuous
   $f : A \to \mathbb{R}$ carries Cauchy sequences of $A$ to Cauchy sequences of
   $\mathbb{R}$.

**Why this lemma exists, and why it is a lemma.** Three results of this page —
[[thm-continuous-image-of-a-compact-set-r]], [[thm-extreme-value-r]] and
[[thm-heine-cantor-r]] — are stated a second time here, having already been
proved metric-generally as
[[thm-continuous-image-of-a-compact-space-is-compact]],
[[thm-extreme-value-metric]] and [[thm-heine-cantor-metric]]. The duplication is
deliberate: the $\mathbb{R}$-native proofs run through
[[thm-heine-borel-characterisation-r]] and
[[thm-compact-iff-sequentially-compact-r]], which are order-based, while the
metric proofs run through the cover machinery of metric spaces. **This item is
the single place in the library where that duplication is acknowledged**, and
clauses 1 and 5 are what make the two families of statements literally the same
statements. It is a lemma, and not a remark, precisely so that later pages can
cite it and move between the two vocabularies.

**Clause 5 closes a second seam.** The phrase *compact subset of $\mathbb{R}$*
is defined twice in this library — metrically, as compactness of the metric
subspace ([[def-metric-compactness]]), and $\mathbb{R}$-natively, by covers by
open subsets of $\mathbb{R}$ ([[def-open-cover-r]]) — and until this clause no
item asserted that the two agree.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$ with the subspace metric $d_A(x,y) = |x-y|$, a function $f : A \to \mathbb{R}$, and a set $K \subseteq \mathbb{R}$ with the subspace metric $d_K$.

[L1] The usual metric: $d_{\mathbb{R}}(x,y) = |x-y|$ is a metric on $\mathbb{R}$; its open balls are the intervals $B(x,r) = (x-r, x+r)$; and a set $U \subseteq \mathbb{R}$ is open in the metric topology of $d_{\mathbb{R}}$ exactly when it is open in the sense of [[def-open-and-closed-in-r]] ([[lem-real-line-is-a-metric-space]], [[def-metric-space]], [[def-metric-ball]], [[def-metric-topology]]).

[L2] Subspace metric: for $S \subseteq \mathbb{R}$ the restriction $d_S$ of $d_{\mathbb{R}}$ to $S \times S$ is a metric on $S$, so $d_S(x,y) = |x-y|$ for $x, y \in S$ ([[def-isometry-and-metric-embedding]]).

[L3] Metric continuity at $a \in X$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in X$ with $d_X(x,a) < \delta$ satisfies $d_Y(f(x), f(a)) < \varepsilon$ ([[def-metric-continuity]]).

[L4] Metric uniform continuity: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that all $x, x' \in X$ with $d_X(x,x') < \delta$ satisfy $d_Y(f(x), f(x')) < \varepsilon$ ([[def-metric-uniform-continuity]]).

[L5] Continuity and uniform continuity of a real function on $A$, in the forms of [[def-continuity-real]] and [[def-uniform-continuity-real]].

[L6] Lipschitz and Hölder for a map of metric spaces: $d_Y(f(x),f(x')) \le L\,d_X(x,x')$, respectively $d_Y(f(x),f(x')) \le C\,d_X(x,x')^{\alpha}$ for a rational $\alpha$ with $0 < \alpha \le 1$, the power being that of [[def-rational-power]] with the convention $0^{\alpha} = 0$ ([[def-lipschitz-holder-contraction]]).

[L7] The regularity hierarchy for maps of metric spaces: Lipschitz implies uniformly continuous, uniformly continuous implies continuous, $\alpha$-Hölder implies uniformly continuous, and on a nonempty bounded space Lipschitz implies $\alpha$-Hölder for every rational $\alpha \in (0,1]$ ([[thm-metric-regularity-hierarchy]]).

[L8] Intrinsic character of compactness: a subset $K$ of a metric space $X$ is a compact metric space in its own right, with the subspace metric, exactly when every family of open subsets of $X$ whose union contains $K$ has a finite subfamily whose union contains $K$ ([[lem-compactness-is-intrinsic]], [[def-metric-compactness]]).

[L9] Compactness and sequential compactness of $K \subseteq \mathbb{R}$ in the $\mathbb{R}$-native sense ([[def-open-cover-r]]), and sequential compactness of a metric space ([[def-metric-compactness-variants]]).

[L10] Metric convergence: $x_k \to p$ in $(X,d)$ means $d(x_k,p) \to 0$ in $\mathbb{R}$ ([[def-metric-convergence]]); convergence and the Cauchy condition for real sequences are those of [[def-real-limit]] and [[def-sequence]]; a metric is nonnegative ([[lem-metric-nonnegativity]]); and $|u| \ge 0$ with $\bigl||u|\bigr| = |u|$ ([[lem-of-abs-value]]).

[L11] Cauchy in a metric space: $(x_k)$ is Cauchy in $(X,d)$ when for every rational $\varepsilon > 0$ there is $N$ with $d(x_m,x_n) < \varepsilon$ for all $m,n \ge N$ ([[def-cauchy-in-metric]]).

[L12] A uniformly continuous map of metric spaces sends Cauchy sequences to Cauchy sequences ([[thm-uniform-continuity-preserves-cauchy]]).

## Proof

**Proof technique:** direct.

1.1 **The two distances are the two absolute values.** By [L1] and [L2], for $x, x' \in A$ we have $d_A(x,x') = |x - x'|$, and for $u, v \in \mathbb{R}$ we have $d_{\mathbb{R}}(u,v) = |u - v|$; in particular $d_{\mathbb{R}}(f(x), f(x')) = |f(x) - f(x')|$. [L1, L2]

1.2 **Clause 5, the cover half.** Take the ambient metric space to be $(\mathbb{R}, d_{\mathbb{R}})$ and $K \subseteq \mathbb{R}$ with $d_K$. By [L8], $(K,d_K)$ is a compact metric space exactly when every family of sets open in $(\mathbb{R}, d_{\mathbb{R}})$ whose union contains $K$ has a finite subfamily whose union contains $K$. By [L1] the sets open in $(\mathbb{R}, d_{\mathbb{R}})$ are exactly the open subsets of $\mathbb{R}$ in the sense of [[def-open-and-closed-in-r]]. So the displayed condition is word for word the definition of compactness of $K$ in [L9]. [L1, L8, L9]

2.1 **Clause 1.** Fix $c \in A$. Substituting the identities of step 1.1 into [L3], with $X := (A,d_A)$, $Y := (\mathbb{R}, d_{\mathbb{R}})$ and $a := c$, turns metric continuity at $c$ into: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|f(x) - f(c)| < \varepsilon$. That is verbatim the condition of [L5] defining continuity of $f$ at $c$ in the sense of [[def-continuity-real]]. The two conditions are therefore the same condition, and each holds at every point of $A$ exactly when the other does. [step 1.1, L3, L5]

2.2 **Clause 2.** The same substitution in [L4] turns metric uniform continuity into: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that all $x, x' \in A$ with $|x - x'| < \delta$ satisfy $|f(x) - f(x')| < \varepsilon$, which is verbatim [[def-uniform-continuity-real]] as recorded in [L5]. [step 1.1, L4, L5]

2.3 **Clauses 3 and 4.** The same substitution in [L6] turns the Lipschitz condition into $|f(x) - f(x')| \le L\,|x-x'|$ for all $x,x' \in A$, and the $\alpha$-Hölder condition into $|f(x) - f(x')| \le C\,|x-x'|^{\alpha}$, the power being that of [[def-rational-power]] and defined at $x = x'$ by the convention $0^{\alpha} = 0$ recorded in [L6]. Since this library gives no other definition of the two conditions for a real function on $A$, the displayed inequalities are what those words mean here. [step 1.1, L6]

2.4 **Clause 5, the sequential half: convergence first.** Let $(x_j)$ be a sequence with terms in $K$ and let $p \in K$. By [L10] and step 1.1, convergence of $(x_j)$ to $p$ in $(K,d_K)$ says $d_K(x_j,p) = |x_j - p| \to 0$ in $\mathbb{R}$; and $|x_j - p| \to 0$ says that for every rational $\varepsilon > 0$ there is $J$ with $\bigl||x_j - p| - 0\bigr| = |x_j - p| < \varepsilon$ for $j \ge J$, which is verbatim the statement $x_j \to p$ of [L10]. So the two convergences are the same relation. [step 1.1, L10]

3.1 **Clause 5, the sequential half.** A sequence in $(K,d_K)$ is exactly a sequence of reals with all terms in $K$, and by step 2.4 a subsequence of it converges to a point of $K$ in $(K,d_K)$ exactly when it converges to that point in $\mathbb{R}$. Hence "every sequence in $K$ has a subsequence converging in $(K,d_K)$ to a point of $K$" and "every sequence of reals with terms in $K$ has a subsequence converging in $\mathbb{R}$ to a point of $K$" are the same statement, which is the assertion of [L9] and [[def-metric-compactness-variants]]. [step 2.4, L9, L10]

3.2 **Clause 6.** By clauses 1 to 4, the four $\mathbb{R}$-native conditions are the corresponding metric conditions for the map $(A,d_A) \to (\mathbb{R},d_{\mathbb{R}})$, so the implications of [L7] hold between them verbatim; the boundedness hypothesis in the last of them is boundedness of the metric space $(A,d_A)$, which for $A \subseteq \mathbb{R}$ is boundedness of $A$ as a set of reals, since $d_A(x,x') = |x-x'|$. [step 2.1, step 2.2, step 2.3, L7]

3.3 **Clause 7.** By step 1.1 and [L11], a sequence $(x_k)$ with terms in $A$ is Cauchy in $(A,d_A)$ exactly when for every rational $\varepsilon > 0$ there is $N$ with $|x_m - x_n| < \varepsilon$ for all $m,n \ge N$, which is verbatim the Cauchy condition of [L10] for a sequence of reals. Combining this with clause 2 and [L12] gives that a uniformly continuous $f : A \to \mathbb{R}$ carries Cauchy sequences of $A$ to Cauchy sequences of reals. [step 1.1, step 2.2, L10, L11, L12]

4.1 Clauses 1 to 7 are proved, each by rewriting one definition into the other along the identity $d_A(x,x') = |x-x'|$ or, for clause 5, along [L8] and the agreement of the two notions of open subset of $\mathbb{R}$. [step 2.1, step 2.2, step 2.3, step 1.2, step 3.1, step 3.2, step 3.3] ∎

## Remarks

- **Nothing here is a new theorem, and that is the point.** Every clause is an identification of two forms of words, and the only clause with any content beyond substitution is 5, which needs [[lem-compactness-is-intrinsic]] to move between covers by relatively open sets and covers by open subsets of $\mathbb{R}$, and needs [[lem-real-line-is-a-metric-space]] to know that the metric topology of $\mathbb{R}$ is the topology of [[def-open-and-closed-in-r]]. A reader who takes those two identifications for granted is taking for granted exactly what this library refuses to leave unsaid.

- **The hierarchy of clause 6 is not strict by fiat, and the witnesses live on the companion page.** [[thm-metric-regularity-hierarchy]] asserts the four implications and claims no converse. That none of them reverses for real functions is witnessed here: [[ex-x-to-the-beta-separates-the-holder-classes]] gives, for rationals $0 < \beta < \alpha \le 1$, a function on $[0,1]$ that is $\beta$-Hölder and not $\alpha$-Hölder, and in particular ($\alpha = 1$) is uniformly continuous and not Lipschitz; and [[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]] gives a continuous function that is not uniformly continuous. Those two items are links, not dependencies: they are examples on the companion page, and nothing on this page rests on them.

- **What the dictionary does *not* say.** It does not say that the two proofs of a duplicated theorem are the same proof, and they are not: the $\mathbb{R}$-native ones use the order of $\mathbb{R}$ and spend no choice beyond what is named in each item, while the metric ones use covers and, where the equivalence of the compactness variants is invoked, countable or dependent choice. What the dictionary establishes is that the two *statements* coincide, so that a later page may use whichever proof it prefers and cite whichever form it needs.
