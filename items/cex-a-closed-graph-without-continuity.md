---
id: cex-a-closed-graph-without-continuity
kind: counterexample
title: "Refuted: a function into a Hausdorff space whose graph is closed is continuous. The function equal to $1/x$ off $0$ and to $0$ at $0$ has a closed graph, is discontinuous at $0$ alone, and has a Hausdorff codomain"
status: draft
origin: session
deps: [fs-a-function-with-closed-graph-is-continuous,
       thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain,
       def-continuity-real, thm-algebra-of-continuous-functions,
       lem-real-and-metric-notions-agree, def-product-topology,
       lem-product-topology-on-rn, def-metrizable-space,
       lem-real-line-is-a-metric-space, def-hausdorff-space, def-continuous-map-top,
       def-compact-space]
justified_by: []
aliases: []
landmark: true
short: "closed graph, Hausdorff codomain, still discontinuous"
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Closed graph theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_graph_theorem"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "L. Steen and J. Seebach, Counterexamples in Topology"
      url: "https://en.wikipedia.org/wiki/Counterexamples_in_Topology"
pipeline_run: null
---

## Statement refuted

**False claim:** if $X$ is a topological space, $Y$ is **Hausdorff**
([[def-hausdorff-space]]) and $f : X \to Y$ has graph closed in $X \times Y$
with the product topology ([[def-product-topology]]), then $f$ is continuous
([[def-continuous-map-top]]).

This is the sharpening of [[fs-a-function-with-closed-graph-is-continuous]] that
adds to the codomain the hypothesis under which the *other* half of the
closed-graph criterion holds. It is still false, and the same witness refutes it:

$$f : \mathbb{R} \to \mathbb{R}, \qquad f(x) = \frac{1}{x} \ \ (x \ne 0), \qquad f(0) = 0 ,$$

with $\mathbb{R}$ carrying its usual topology, which is metrizable and hence
Hausdorff. Its graph is closed in $\mathbb{R}^2$, it is continuous at every
$c \ne 0$, and it is not continuous at $0$; so its set of discontinuities is
exactly $\{0\}$.

What the criterion of
[[thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain]] asks of the
codomain in the direction "closed graph implies continuous" is **compactness**,
and the Hausdorff condition contributes nothing there.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology, $\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$ with the product topology, and the function $f$ above with graph $G_f$.

[A1] $\mathbb{R}$ with its usual topology is metrizable and hence Hausdorff ([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]], [[def-hausdorff-space]]); $\mathbb{R}^2$ carries the product topology ([[def-product-topology]], [[lem-product-topology-on-rn]]).

[L1] The function $f$ above has graph closed in $\mathbb{R}^2$ and is not continuous at $0$ ([[fs-a-function-with-closed-graph-is-continuous]]).

[L2] The reciprocal $x \mapsto 1/x$ is continuous at every $c \ne 0$ as a function on $\{\, x \in \mathbb{R} : x \ne 0 \,\}$ ([[thm-algebra-of-continuous-functions]], claims 4 and 5), continuity being the $\varepsilon$-$\delta$ condition of [[def-continuity-real]]; and for a real function that condition at a point is continuity at that point as a map of topological spaces ([[lem-real-and-metric-notions-agree]], claim 1, [[def-metrizable-space]], [[def-continuous-map-top]]).

[L3] If the codomain is compact and the graph is closed then the map is continuous ([[thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain]], claim 1, [[def-compact-space]]).

## Counterexample

**Proof technique:** constructive.

1.1 Take $f : \mathbb{R} \to \mathbb{R}$ with $f(x) = 1/x$ for $x \ne 0$ and $f(0) = 0$, and give $\mathbb{R}$ its usual topology; the codomain is then Hausdorff. [A1, construct]

1.2 $G_f$ is closed in $\mathbb{R}^2$ and $f$ is not continuous at $0$. [L1]

2.1 $f$ is continuous at every $c \ne 0$: given a real $\varepsilon > 0$, [L2] supplies a real $\delta > 0$ such that $x \ne 0$ and $|x - c| < \delta$ imply $|1/x - 1/c| < \varepsilon$; put $\delta' := \min\{\delta, |c|\} > 0$, and then every $x \in \mathbb{R}$ with $|x - c| < \delta'$ satisfies $x \ne 0$, hence $|f(x) - f(c)| = |1/x - 1/c| < \varepsilon$. So $f$ is continuous at $c$ in the sense of [[def-continuity-real]], hence at $c$ as a map of topological spaces. [step 1.1, L2]

3.1 By steps 1.1, 1.2 and 2.1 the map $f$ has a closed graph and a Hausdorff codomain and is not continuous, its set of discontinuities being exactly $\{0\}$; so the claim is false. [step 1.1, step 1.2, step 2.1]

4.1 By [L3] the same three facts show that $\mathbb{R}$ with its usual topology is not compact, so the hypothesis the claim should have carried is compactness of the codomain and not any separation property of it. [step 1.2, step 2.1, step 3.1, L3, discharge-construct] ∎

## Remarks

- **Adding a separation hypothesis to the codomain cannot repair the claim, and this is why.** In [[thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain]] the Hausdorff condition is what makes a *continuous* map have closed graph, and compactness is what makes a *closed-graph* map continuous. The two hypotheses belong to opposite directions, and the witness above has the first without the second.

- **The failure is a single point, and it is not removable by redefining $f$ there.** No value at $0$ makes $f$ continuous, because $|f(x)|$ exceeds every bound as $x$ approaches $0$; and no value at $0$ destroys the closedness of the graph. The example is therefore not a matter of a badly chosen value: it is the behaviour of the reciprocal near $0$, and a compact codomain is exactly what would forbid that behaviour.

- **Where this sits relative to the functional-analytic closed graph theorem.** That theorem replaces compactness of the codomain by completeness of both spaces and linearity of the map, and neither hypothesis is available or claimed here; the witness above is not linear, and nothing on this page bears on the functional-analytic statement.
