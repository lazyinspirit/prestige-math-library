---
id: thm-heine-cantor-metric
kind: theorem
title: "Heine-Cantor: a continuous map from a compact metric space to any metric space is uniformly continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-compactness, thm-lebesgue-number-lemma, def-metric-continuity, def-metric-uniform-continuity, def-metric-ball, def-metric-bounded-diameter, def-metric-topology, thm-metric-open-set-algebra, lem-metric-nonnegativity, def-metric-space]
justified_by: []
forward_refs: [cex-heine-cantor-fails-without-compactness]
aliases: [thm-heine-cantor]
landmark: true
short: "Heine-Cantor (metric)"
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
    - title: "Heine-Cantor theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Cantor_theorem"
    - title: "Lebesgue's number lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lebesgue%27s_number_lemma"
pipeline_run: null
---

## Statement

Let $(X,d_X)$ be a compact metric space ([[def-metric-compactness]]), let
$(Y,d_Y)$ be any metric space ([[def-metric-space]]) and let $f : X \to Y$ be
continuous ([[def-metric-continuity]]). Then $f$ is uniformly continuous
([[def-metric-uniform-continuity]]).

No choice principle is used: the cover built below is cut out by a property, and
the Lebesgue number lemma it is fed to is itself choice free
([[thm-lebesgue-number-lemma]]).

## Facts & Assumptions

**Given:** A compact metric space $(X,d_X)$, a metric space $(Y,d_Y)$ and a continuous $f : X \to Y$.

[L1] $f$ is continuous at $a$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $f[B_X(a,\delta)] \subseteq B_Y(f(a),\varepsilon)$ ([[def-metric-continuity]], [[def-metric-ball]]).

[L2] $f$ is uniformly continuous when for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that $d_X(x,x') < \delta$ implies $d_Y(f(x),f(x')) < \varepsilon$, for all $x,x' \in X$ ([[def-metric-uniform-continuity]]).

[L3] Every open cover of a compact metric space has a Lebesgue number: a real $\delta > 0$ such that every nonempty subset of diameter less than $\delta$ lies in a single member of the cover ([[thm-lebesgue-number-lemma]], [[def-metric-compactness]]).

[L4] Open balls are open ([[thm-metric-open-set-algebra]], [[def-metric-topology]]).

[L5] For nonempty bounded $A$, $\operatorname{diam}(A) = \sup\{d_X(u,v) : u,v \in A\}$; in particular $\operatorname{diam}(\{x,x'\}) = d_X(x,x')$, the set of distances being $\{0, d_X(x,x')\}$ and a metric being nonnegative ([[def-metric-bounded-diameter]], [[lem-metric-nonnegativity]]).

[L6] A metric is symmetric and satisfies the triangle inequality ([[def-metric-space]]).

## Proof

**Proof technique:** direct.

1.1 If $X = \emptyset$ the condition of uniform continuity holds vacuously, so assume $X \ne \emptyset$, and let $\varepsilon > 0$ be real. [L2]

2.1 Put $\mathcal{U} := \{\, U \subseteq X : U \text{ is open in } X \text{ and } f[U] \subseteq B_Y(z, \varepsilon/2) \text{ for some } z \in Y \,\}$, a family cut out by a property and not by a selection. [L1, step 1.1]

3.1 $\mathcal{U}$ is an open cover of $X$: given $x \in X$, continuity at $x$ supplies a real $\delta_x > 0$ with $f[B_X(x,\delta_x)] \subseteq B_Y(f(x), \varepsilon/2)$, and $B_X(x,\delta_x)$ is open and contains $x$, so it belongs to $\mathcal{U}$. [L1, L4, step 2.1]

4.1 By the Lebesgue number lemma there is a real $\delta > 0$ such that every nonempty subset of $X$ of diameter less than $\delta$ is contained in a single member of $\mathcal{U}$. [L3, step 3.1]

5.1 Let $x, x' \in X$ with $d_X(x,x') < \delta$; the set $\{x,x'\}$ is nonempty with diameter $d_X(x,x') < \delta$, so $\{x,x'\} \subseteq U$ for some $U \in \mathcal{U}$, and there is $z \in Y$ with $f[U] \subseteq B_Y(z,\varepsilon/2)$. [L5, step 2.1, step 4.1]

6.1 Then $d_Y(f(x),z) < \varepsilon/2$ and $d_Y(z,f(x')) < \varepsilon/2$, so $d_Y(f(x),f(x')) \le d_Y(f(x),z) + d_Y(z,f(x')) < \varepsilon$; as $\varepsilon > 0$ was arbitrary, $f$ is uniformly continuous. [L2, L6, step 5.1] ∎

## Remarks

**The centre $z$ is not chosen, and that is why the proof is choice free.** The family $\mathcal{U}$ is defined by the *existence* of a suitable $z$, and the argument instantiates that existential once, at step 5.1, for the single member $U$ that the Lebesgue number produced. No function assigning a centre to every member of $\mathcal{U}$ is ever needed.

**Compactness is not removable.** The map $x \mapsto 1/x$ is continuous on the interval $(0,1)$ and is not uniformly continuous there ([[cex-heine-cantor-fails-without-compactness]]); $(0,1)$ is not compact.

**The codomain is arbitrary.** Nothing is assumed about $(Y,d_Y)$ — not completeness, not boundedness, not compactness. All the work is done on the domain side, which is where the finite subcover lives.
