---
page: continuity-ivt-evt-and-uniform-continuity-examples
title: "Continuity, IVT, EVT, and Uniform Continuity: Examples and Counterexamples"
status: published
items: []
examples: [ex-distance-to-the-integers-is-1-lipschitz,
           cex-dirichlet-is-nowhere-continuous,
           ex-x-times-dirichlet-is-continuous-exactly-at-zero,
           cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval,
           cex-x-squared-is-not-uniformly-continuous-on-r,
           ex-x-to-the-beta-separates-the-holder-classes,
           cex-product-of-uniformly-continuous-functions-need-not-be-uniformly-continuous,
           cex-evt-fails-on-the-open-interval-and-on-the-half-line,
           ex-ivt-gives-nth-roots,
           ex-fixed-point-from-the-ivt]
---

**Objective.** This is the worked companion to the page on continuity, the
intermediate and extreme value theorems and uniform continuity, linked under
Prerequisites above. It introduces no definition and proves no general theorem:
every item here is either a computation carried out in full, or a witness that
some hypothesis on that page cannot be dropped. As an examples page it is a leaf
of the dependency graph — nothing anywhere in the library rests on an item
listed here.

**A uniformly continuous function that is not a formula in the field
operations.** [[ex-distance-to-the-integers-is-1-lipschitz]] takes
$\psi(x) = d(x, \mathbb{Z})$, the distance from a real to the integers, and
proves that it is $1$-Lipschitz, hence uniformly continuous and continuous, that
its infimum is attained at a nearest integer and equals
$\min\{t, 1-t\}$ with $t = x - \lfloor x \rfloor$, that its values lie in
$[0, 1/2]$, and that it vanishes exactly on $\mathbb{Z}$. The Lipschitz property
is not recomputed: it is [[lem-distance-to-set-is-lipschitz]] applied in the
metric space $\mathbb{R}$ and transported by
[[lem-real-and-metric-notions-agree]]. The same function is computed, by the
same device, in [[ex-distance-to-the-integers]] on the companion page of the
previous section; that item is on an examples page, so nothing may depend on it,
and the verification here is self-contained for exactly that reason.

**How badly continuity can fail, and how narrowly it can hold.**
[[cex-dirichlet-is-nowhere-continuous]] shows that the indicator of
$\mathbb{Q}$ is continuous at no point of $\mathbb{R}$, refuting the claim that
every real function is continuous somewhere. The argument is a two-line density
argument and spends no choice at all: it uses
[[lem-q-and-irrationals-dense-r]] only in the form "every neighbourhood of every
point meets the set", never to build a sequence.
[[ex-x-times-dirichlet-is-continuous-exactly-at-zero]] then damps that function
by a factor $x$ and shows that the set of points of continuity becomes exactly
$\{0\}$: the two branches of the function agree at $0$ and nowhere else, so the
discrepancy is at most $|x|$ near $0$ and at least $|c|/2$ near any other $c$.

**Continuity is strictly weaker than uniform continuity, in two independent
ways.** [[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]]
takes $1/x$ on the **bounded, not closed** set $(0,1)$ and defeats every
$\delta$ with the pairs $1/(k+2)$ and $1/(k+3)$, whose values differ by exactly
$1$. [[cex-x-squared-is-not-uniformly-continuous-on-r]] takes $x^{2}$ on the
**closed, not bounded** set $\mathbb{R}$ and defeats every $\delta$ with the
pairs $k+1$ and $k+1+1/(k+1)$, whose values differ by more than $2$. Since
$\mathbb{N}$ contains $0$ here, the index shifts are not cosmetic: $1/k$ is
undefined at the first index and $1/(k+1)$ would leave $(0,1)$ there. Together
the two witnesses show that neither half of "closed and bounded" can be dropped
from [[thm-heine-cantor-r]].
[[cex-product-of-uniformly-continuous-functions-need-not-be-uniformly-continuous]]
draws the algebraic consequence: the identity is uniformly continuous on
$\mathbb{R}$ and its square is not, so uniform continuity, unlike continuity, is
not preserved by products.

**The Hölder classes are strictly nested.**
[[ex-x-to-the-beta-separates-the-holder-classes]] proves that on $[0,1]$ the
function $x^{\beta}$, for rational $0 < \beta \le 1$, is $\beta$-Hölder with
constant $1$ and is $\alpha$-Hölder for no rational $\alpha$ with
$\beta < \alpha \le 1$; and that on $[0,1]$ every $\alpha$-Hölder function is
$\beta$-Hölder when $\beta < \alpha$. So the inclusion of classes is proper at
every rational step, and at $\alpha = 1$ this exhibits a uniformly continuous
function that is not Lipschitz. This item and the $1/x$ counterexample above are
the two witnesses named in the remarks of [[lem-real-and-metric-notions-agree]],
where [[thm-metric-regularity-hierarchy]] asserts the implications and claims no
converse.

**The extreme value theorem needs both halves of compactness.**
[[cex-evt-fails-on-the-open-interval-and-on-the-half-line]] runs the identity on
$(0,1)$, where it is bounded, its supremum exists and equals $1$, and no point
attains it; and on $[0,\infty)$, where it is continuous and unbounded. The two
domains are exactly the two minimal ways to fail compactness, and the item is
the worked witness for [[fs-evt-holds-on-every-bounded-domain]].

**Two computations that the intermediate value theorem makes possible.**
[[ex-ivt-gives-nth-roots]] applies [[thm-intermediate-value]] to $x \mapsto x^n$
on $[0, a+1]$ and recovers the existence of $n$-th roots in three lines. It is a
second proof of [[thm-nth-roots-exist]], not a new theorem: that item is already
published and is what the library cites, and no second identifier is minted for
the same statement. [[ex-fixed-point-from-the-ivt]] applies
[[thm-one-dimensional-fixed-point]] to $x \mapsto (x + 2/x)/2$ on $[1,2]$,
verifies by an order estimate rather than by differentiation that the map sends
$[1,2]$ into itself, and identifies the fixed point as $\sqrt{2}$, uniquely. The
same map appears as a contraction in
[[ex-banach-fixed-point-for-square-roots]], where the Banach fixed point theorem
adds an error bound; here only the intermediate value theorem is used, and no
derivative, since the mean value theorem is not available at this point in the
reading order.
