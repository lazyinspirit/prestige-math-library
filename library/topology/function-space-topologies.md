---
page: function-space-topologies
title: "Function Space Topologies and the Exponential Law"
status: published
items: [def-topology-of-pointwise-convergence, lem-convergence-in-the-pointwise-topology,
        def-locally-compact-metric-space,
        lem-compact-closed-balls-in-a-locally-compact-metric-space,
        lem-tube-lemma-for-a-compact-metric-factor, def-compact-open-topology,
        lem-uniform-metric-on-a-function-space, def-topology-of-uniform-convergence,
        lem-uniform-convergence-in-the-uniform-metric, def-topology-of-compact-convergence,
        thm-compact-open-equals-compact-convergence,
        thm-comparison-of-the-three-function-space-topologies, thm-uniform-limit-theorem,
        thm-function-space-is-complete-for-a-complete-target, def-evaluation-map,
        thm-evaluation-is-continuous-on-a-locally-compact-metric-domain,
        thm-exponential-correspondence-is-continuous, thm-the-exponential-law,
        def-equicontinuity, thm-dini, rem-function-space-conventions]
examples: [fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets,
           fs-the-compact-open-topology-is-always-metrizable,
           fs-the-evaluation-map-is-always-continuous]
---

**Objective.** A set of functions is a set, and there is no one topology on it.
This page puts four topologies on the continuous maps $X \to Y$, says exactly what
each one measures, proves how they compare, and then uses the best behaved of them
to reach the exponential law. The four are the topology of *pointwise convergence*,
the topology of *uniform convergence*, the topology of *compact convergence*, and
the *compact-open* topology; the third and the fourth turn out to be the same
topology whenever both are defined, which is what makes the theory usable.

**The standing hypotheses, and why they are what they are.** The page's standing
convention is that the domain $X$ is a **metric space**, but each item carries
only the hypothesis its own proof uses, and several need much less. Where the
domain must be metric, that is forced rather than chosen: an item quantifying over
the *compact* subsets of the domain needs a notion of compactness, and the only
one this library has at this point in the reading order is
[[def-metric-compactness]], defined for metric spaces. That covers the
compact-open topology, compact convergence, the evaluation map, the exponential
law and Dini's theorem. The pointwise and uniform constructions do not: they are
stated for a bare set, or a nonempty set, and the uniform limit theorem is stated
for an arbitrary topological domain, no distance in $X$ being used in its proof.
The target $Y$ is an arbitrary topological space wherever open sets suffice, and
is required to be metric exactly where a distance $d(f(x),g(x))$ is written.
[[rem-function-space-conventions]] collects the standing hypotheses, records the
two places where this page deliberately mints a new object rather than reusing a
published one, and states plainly what the page does not do.

**Pointwise convergence, and why it is not enough.**
[[def-topology-of-pointwise-convergence]] identifies $Y^{X}$ with the product
$\prod_{x \in X} Y$ and gives it the product topology, so a basic neighbourhood
constrains a function at finitely many points.
[[lem-convergence-in-the-pointwise-topology]] justifies the name: a sequence
converges in it exactly when it converges at every point. That topology is too
coarse for analysis, and the companion page shows why with a sequence of
continuous functions whose pointwise limit is discontinuous.

**Uniform convergence.** [[lem-uniform-metric-on-a-function-space]] mints the
**uniform metric** $\bar\rho(f,g) = \sup_x \min\{d(f(x),g(x)),1\}$ on $Y^{X}$ for
a nonempty set $X$ and a metric target. It is a genuinely new object, not the
published supremum metric: [[lem-sup-metric-is-a-metric]] is stated for the
*bounded real-valued* functions on a nonempty set, so it can carry neither an
arbitrary metric target nor an unbounded function. Truncating at $1$ removes the
boundedness hypothesis at no topological cost.
[[def-topology-of-uniform-convergence]] defines uniform convergence and the metric
topology of $\bar\rho$, and
[[lem-uniform-convergence-in-the-uniform-metric]] proves that convergence in that
metric is exactly uniform convergence, which is what entitles the topology to its
name. The companion page checks that on $C([0,1],\mathbb{R})$, where the published
supremum metric is also defined, the two metrics induce the same topology.

**Compact convergence and the compact-open topology.**
[[def-topology-of-compact-convergence]] takes the sets
$B_K(f,\varepsilon) = \{\, g : d(f(x),g(x)) < \varepsilon$ for every $x \in K \,\}$
as a basis and discharges the basis conditions in full; along the way it proves
three facts reused across the page, that a union of two compact sets is compact,
that $x \mapsto d(f(x),g(x))$ is continuous, and that on a nonempty compact set it
attains a maximum. [[def-compact-open-topology]] is the topology generated by the
sets $S(K,V) = \{\, f : f[K] \subseteq V \,\}$ for $K$ compact and $V$ open, and it
needs no metric on the target at all.
[[thm-compact-open-equals-compact-convergence]] proves that for a metric domain
and a metric target these are the same topology, and
[[thm-comparison-of-the-three-function-space-topologies]] arranges the three named
topologies in order: uniform is finer than compact convergence, which is finer than
pointwise. No strictness is claimed there, and the companion page supplies witnesses
separating each pair.

**What uniform convergence buys.** [[thm-uniform-limit-theorem]] proves the
$\varepsilon/3$ criterion — a function uniformly approximated by continuous
functions is continuous — and deduces that $C(X,Y)$ is a **closed** subset of
$Y^{X}$ in the uniform metric. It is stated for an arbitrary topological domain,
since no distance in $X$ is used, and its proof of closedness is arranged to spend
no choice principle. [[thm-function-space-is-complete-for-a-complete-target]] then
gives completeness: if $(Y,d)$ is complete so is $(Y^{X}, \bar\rho)$, and so is
$C(X,Y)$, being closed in it.

**Evaluation, and the exponential law.** [[def-evaluation-map]] introduces
$e(f,x) = f(x)$ and observes that continuity in each variable separately is
immediate while *joint* continuity is not.
[[thm-evaluation-is-continuous-on-a-locally-compact-metric-domain]] supplies the
hypothesis that makes it true. That hypothesis is
[[def-locally-compact-metric-space]], minted here as the metric special case of a
notion the library also defines for arbitrary topological spaces, and carrying a
dictionary remark recording that agreement;
[[lem-compact-closed-balls-in-a-locally-compact-metric-space]] upgrades
it to a neighbourhood base of compact closed balls.
[[lem-tube-lemma-for-a-compact-metric-factor]] is the other half of the machinery,
and [[thm-exponential-correspondence-is-continuous]] uses it to show that the
transpose of a continuous $f : X \times Z \to Y$ is a continuous map
$Z \to C(X,Y)$, with no hypothesis on $X$ beyond being metric.

[[thm-the-exponential-law]] assembles the two halves. **It is a bijection**
between $C(X \times Z, Y)$ and $C(Z, C(X,Y))$ for a locally compact metric $X$ and
arbitrary spaces $Z$ and $Y$ — an assertion about two sets of continuous maps and a
correspondence between them. **It is not a homeomorphism, and the page never says
it is**: no topology is placed on either side, and the theorem's own remark states
exactly what the homeomorphism form would additionally require. It is not a
missing notion of compactness: compactness for an arbitrary topological space, and
the tube lemma for a compact factor of an arbitrary product, are both developed
earlier in the reading order, so "compact subset" has meaning on both sides. What
is missing is the topology itself — [[def-compact-open-topology]] is stated for a
*metric* domain, whereas $Z$ here is an arbitrary topological space and
$X \times Z$ carries no metric. None of that is done here, and nothing above
assumes it.

**Dini's theorem, and one definition for a later page.** [[thm-dini]] proves that
on a compact metric space a nondecreasing sequence of continuous real functions
converging pointwise to a *continuous* limit converges uniformly, and records where
each of its four hypotheses is spent. [[def-equicontinuity]] defines equicontinuity
at a point, uniform equicontinuity and pointwise boundedness; it is placed here
solely so that the page proving the Ascoli-Arzelà theorem has the vocabulary
earlier in the reading order. **Neither Ascoli-Arzelà nor Stone-Weierstrass is
stated or proved on this page.**

**Three false statements are recorded with explicit witnesses**, and each names a
hypothesis that cannot be dropped: pointwise convergence does not give uniform
convergence on compact sets, the compact-open topology is not always metrizable —
the witness is $\mathbb{R}$ with the discrete metric, where the topology is the
product topology on $\mathbb{R}^{\mathbb{R}}$ and is not first countable — and the
evaluation map is not continuous for every metric domain, the witness being
$\mathbb{Q}$, which has no compact neighbourhoods at all.

**Choice bookkeeping.** Every item on this page states which choice principle it
spends. Only one spends anything: the failure of metrizability uses the Axiom of
Countable Choice once, at the step where countably many finite sets are united.
Everything else here, including the tube lemma, completeness and closedness of
$C(X,Y)$, is a theorem of ZF.
