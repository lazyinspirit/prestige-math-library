---
page: metric-spaces-examples
title: "Metric Spaces: Examples and Counterexamples"
status: published
items: []
examples: [ex-p-metrics-on-rn, ex-discrete-metric, ex-sup-metric-on-bounded-functions,
           ex-p-adic-ultrametric, ex-post-office-metric, ex-bounded-remetrisation-of-r,
           cex-closure-of-ball-smaller-than-closed-ball,
           cex-sphere-is-not-the-boundary-of-the-ball,
           cex-set-distance-is-not-a-metric,
           cex-topologically-not-uniformly-equivalent,
           cex-uniformly-not-lipschitz-equivalent,
           cex-boundedness-is-not-topological]
---

**Objective.** This page is the worked companion to the Metric Spaces page,
linked under Prerequisites above. That page fixes the axioms and proves the
general theory; this one exhibits it. Six examples carry out a full verification
on a concrete space, and six counterexamples supply the witnesses behind the
false statements and the strictness claims that the general page deliberately did
not assert.

**The examples span the range of what a metric can look like.** On
$\mathbb{R}^n$, for every $n \ge 1$, the three metrics $d_1$, $d_2$ and
$d_\infty$ are Lipschitz equivalent with explicit constants, so the choice among
them never affects a topological question ([[ex-p-metrics-on-rn]]). The discrete metric sits at the
opposite extreme, making every subset clopen ([[ex-discrete-metric]]). The
supremum metric on the bounded real-valued functions contains an isometric copy
of the real line and has a supremum that is not attained
([[ex-sup-metric-on-bounded-functions]]). The $2$-adic absolute value on
$\mathbb{Q}$ is an ultrametric, in which every triangle is isosceles and every
point of a ball is a centre ([[ex-p-adic-ultrametric]]); it is fixed at $p = 2$
because the general $p$-adic valuation needs unique factorisation, and this
library has no number theory, whereas parity is available. The post-office metric
on $\mathbb{R}^n$ isolates every point except the origin
([[ex-post-office-metric]]), and $\min\{|x-y|,1\}$ on $\mathbb{R}$ has the usual
topology with diameter exactly $1$ ([[ex-bounded-remetrisation-of-r]]).

**The counterexamples answer four questions the names invite.** Is the closure of
an open ball the closed ball? No: in $\{0\} \cup [1,2]$ with the metric of
$\mathbb{R}$ the closure of $B(0,1)$ is $\{0\}$ while the closed ball is
$\{0,1\}$ ([[cex-closure-of-ball-smaller-than-closed-ball]]). Is the sphere the
boundary of the ball? No: in the discrete metric the boundary is empty and the
sphere is everything but the centre
([[cex-sphere-is-not-the-boundary-of-the-ball]]). Is the set-to-set distance a
metric? No: $\mathbb{Z}$ and $\{n + 1/n : n \ge 2\}$ are disjoint closed subsets
of $\mathbb{R}$ at distance $0$, even though every individual point-to-set
distance among them is strictly positive
([[cex-set-distance-is-not-a-metric]]). Is boundedness topological? No: the real
line carries a bounded and an unbounded metric with the same open sets
([[cex-boundedness-is-not-topological]]).

**Two of the counterexamples pay a debt of the general page.** The equivalence
hierarchy proved there asserts only that Lipschitz equivalence implies uniform
equivalence implies topological equivalence, without claiming that either
implication is strict, because the witnesses live here. They are $|x-y|$ against
$|1/x - 1/y|$ on $(0,\infty)$, which share a topology and are not uniformly
equivalent ([[cex-topologically-not-uniformly-equivalent]]), and $|x-y|$ against
$\min\{|x-y|,1\}$ on $\mathbb{R}$, which are uniformly but not Lipschitz
equivalent ([[cex-uniformly-not-lipschitz-equivalent]]).

As on every examples page, **nothing is asserted by inspection**: each ball,
closure, boundary, diameter and equivalence constant below is computed, and the
hypothesis that makes the computation legitimate is named at the step that uses
it.
