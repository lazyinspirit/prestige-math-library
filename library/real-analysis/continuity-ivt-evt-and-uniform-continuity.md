---
page: continuity-ivt-evt-and-uniform-continuity
title: "Continuity, IVT, EVT, and Uniform Continuity"
status: published
items: [def-continuity-real, thm-sequential-criterion-for-continuity,
        thm-algebra-of-continuous-functions,
        thm-composition-of-continuous-functions,
        thm-continuity-preimage-characterisation,
        thm-continuous-image-of-a-compact-set-r, cor-boundedness-theorem-r,
        thm-extreme-value-r, thm-intermediate-value,
        cor-continuous-image-of-an-interval-is-an-interval,
        thm-one-dimensional-fixed-point,
        lem-monotone-with-interval-image-is-continuous,
        def-uniform-continuity-real, lem-real-and-metric-notions-agree,
        thm-heine-cantor-r, cor-continuous-extension-from-a-dense-subset-r,
        thm-holder-exponent-above-one-forces-constancy,
        thm-compactness-is-necessary-for-evt-and-uniform-continuity]
examples: [fs-continuity-implies-uniform-continuity,
           fs-continuous-image-of-a-closed-set-is-closed,
           fs-evt-holds-on-every-bounded-domain]
---

**Objective.** This page defines continuity of a real function on a subset of
$\mathbb{R}$, proves the toolkit that makes the notion usable, and then proves
the four theorems that continuity exists for: the image of a compact set is
compact, the extreme value theorem, the intermediate value theorem, and
Heine-Cantor. Along the way it states the dictionary that
reconciles the vocabulary of this page with the metric-space vocabulary of the
earlier topology track, and it closes with counterexamples showing that
compactness is needed for the extreme-value and uniform-continuity conclusions;
the intermediate value theorem instead rests on the interval/connectedness
hypothesis.

**The definition, and the clause that is easy to get wrong.**
[[def-continuity-real]] says that $f : A \to \mathbb{R}$ is continuous at
$c \in A$ when for every real $\varepsilon > 0$ there is a real $\delta > 0$
with $|f(x) - f(c)| < \varepsilon$ for every $x \in A$ satisfying
$|x - c| < \delta$. Note the two differences from the limit of the previous
page: the point $c$ is required to lie in $A$, and the condition is
**unpunctured**, so $x = c$ is allowed. Three clauses follow, and all three are
part of the definition. At a limit point of $A$, continuity at $c$ is exactly
$\lim_{x \to c} f(x) = f(c)$; at an **isolated** point of $A$ every function is
continuous, because the only admissible $x$ is $c$ itself; and continuity on $A$
is continuity at each point of $A$. The second clause is not the vacuous formula
that [[fs-limit-unique-at-every-point-of-the-domain]] warns about: there the
punctured formula was satisfied by every real $L$ at once and so defined
nothing, whereas here the condition names one well-defined property, and the
symbol $\lim_{x \to c} f(x)$ simply does not exist at an isolated point.

**Choice hygiene, and why it shapes the page.**
[[thm-sequential-criterion-for-continuity]] proves that $f$ is continuous at $c$
if and only if $f(x_k) \to f(c)$ for every sequence in $A$ converging to $c$ —
sequences that may hit $c$, which is the difference from
[[thm-sequential-criterion-for-function-limits]] and what makes the criterion
meaningful at an isolated point. The direction from continuity to sequences is a
theorem of ZF; the converse inherits the single use of countable choice made on
the previous page, and [[rem-heine-criterion-choice-cost]] records exactly what
is and is not claimed about that. As on that page, everything provable from
$\varepsilon$ and $\delta$ is proved that way: the algebra of continuous
functions, composition, the preimage characterisation and the intermediate value
theorem spend no choice at all. The two items that do spend it,
[[thm-heine-cantor-r]] and the converse direction of the sequential criterion,
say so in their own statements.

**The toolkit.** [[thm-algebra-of-continuous-functions]] proves that sums,
scalar multiples, products, absolute values, maxima, minima and quotients with
nonvanishing denominator of continuous functions are continuous, and adds the
clause the rest of the page uses constantly: constants, the identity, every
power $x \mapsto x^{n}$ and every polynomial function are continuous on every
subset of $\mathbb{R}$. [[thm-composition-of-continuous-functions]] proves that
a composite of continuous functions is continuous with **no** side hypothesis —
in contrast with [[thm-composition-of-function-limits]], which needs one of two
extra conditions and is false without both
([[fs-naive-composition-of-limits]]). The reason is visible in one line: the
unpunctured quantifier of [[def-continuity-real]] controls $f$ at the very value
the limit version cannot see. [[thm-continuity-preimage-characterisation]] then
gives the topological form: $f$ is continuous on $A$ exactly when the preimage
of every open set is the trace on $A$ of an open subset of $\mathbb{R}$, and
dually for closed sets. The preimage lives in $A$, not in $\mathbb{R}$, so this
does not say that preimages of open sets are open; and the witnessing open set
is built as a single union over a family cut out by a property, so no choice
function on an arbitrary subset of $\mathbb{R}$ is needed.

**Compactness, and the two theorems it buys.**
[[thm-continuous-image-of-a-compact-set-r]] proves that the image of a compact
subset of $\mathbb{R}$ under a continuous function is compact, by an
$\mathbb{R}$-native cover argument in which the only selection is from a finite
list. [[cor-boundedness-theorem-r]] reads off boundedness, and
[[thm-extreme-value-r]] reads off attainment: on a nonempty compact $K$ a
continuous $f$ satisfies $\sup f[K] = f(p)$ and $\inf f[K] = f(q)$ for some
$p, q \in K$. The two ingredients are kept apart in that proof — compactness
enters only through compactness of the image, order-completeness only through
the existence of $\sup$ and $\inf$, and closedness of the image is the bridge.

**The intermediate value theorem, by a canonical bisection.**
[[thm-intermediate-value]] proves that a continuous function on $[a,b]$ takes
every value between $f(a)$ and $f(b)$. The bisection tests the left half first
and takes the right half only when the left is excluded, so the passage from one
interval to the next is a *function* of that interval and
[[thm-recursion]] applies with nothing selected;
[[thm-nested-interval-property]] then supplies the point, and only the
choice-free direction of the sequential criterion is used to pass to the limit.
[[cor-continuous-image-of-an-interval-is-an-interval]] draws the two standard
consequences: the image of an order-convex set is order-convex, hence connected
([[thm-connected-subsets-of-r-are-intervals]]), and the image of a closed
bounded interval is a closed bounded interval. [[thm-one-dimensional-fixed-point]]
is the third: a continuous map of $[a,b]$ into itself has a fixed point, because
$\varphi(x) - x$ changes sign. **The existence of $k$-th roots is not restated
here**: [[thm-nth-roots-exist]] already proves it, and the companion page's
[[ex-ivt-gives-nth-roots]] records the second proof without minting a second
name for the same statement.

**A converse worth having.**
[[lem-monotone-with-interval-image-is-continuous]] proves that a function on an
interval satisfying $f(x) \le f(y)$ whenever $x \le y$, whose image is
order-convex, is continuous. It needs no one-sided limits of monotone functions,
which are not available at this point in the reading order; the whole proof
reads the required $\delta$ off the image. It is stated as a standalone lemma so
that a later page may cite it — the classical application is a monotone function
built by a limiting construction whose image is known independently.

**Uniform continuity, and the dictionary.**
[[def-uniform-continuity-real]] asks for one $\delta$ serving every pair of
points of $A$; the whole content is that $\exists \delta$ moves to the left of
the point quantifier. [[lem-real-and-metric-notions-agree]] is then the hinge of
the page. It proves that, for $A \subseteq \mathbb{R}$ with $d(x,y) = |x-y|$,
continuity and uniform continuity in the senses defined here coincide with
[[def-metric-continuity]] and [[def-metric-uniform-continuity]]; that the
Lipschitz and Hölder conditions for a real function *are*
[[def-lipschitz-holder-contraction]] instantiated, and are not redefined here;
and — the clause that closes a seam nobody had flagged — that a subset of
$\mathbb{R}$ is compact in the open-cover sense of [[def-open-cover-r]] exactly
when it is a compact metric subspace, with the same agreement for sequential
compactness. Two consequences are recorded: the implications of
[[thm-metric-regularity-hierarchy]] transfer verbatim to real functions, and
Cauchy sequences of $A$ are the same objects in both vocabularies.

**Why three theorems are stated twice.** The continuous image of a compact set,
the extreme value theorem and Heine-Cantor appear on this page in
$\mathbb{R}$-native form and on the metric-spaces page in metric-general form,
with distinct identifiers and distinct proofs. That is deliberate. The proofs
here run through [[thm-heine-borel-characterisation-r]] and
[[thm-compact-iff-sequentially-compact-r]], which are order-based; the metric
proofs run through the cover machinery of metric spaces.
[[lem-real-and-metric-notions-agree]] is the single place in the library where
the duplication is acknowledged, and each duplicated item links it.

**Heine-Cantor, extension, and the two sharp statements.**
[[thm-heine-cantor-r]] proves that a continuous function on a compact
$K \subseteq \mathbb{R}$ is uniformly continuous, by contradiction from
sequential compactness, with countable choice used exactly once and named.
[[cor-continuous-extension-from-a-dense-subset-r]] proves that a uniformly
continuous function on a nonempty $D \subseteq \mathbb{R}$ extends uniquely to a
uniformly continuous function on $\overline{D}$; that is the statement later
pages need in order to define a function on the rationals first and pass to the
reals. [[thm-holder-exponent-above-one-forces-constancy]] explains why
[[def-lipschitz-holder-contraction]] stops at exponent $1$: on an interval, an
inequality $|f(x) - f(y)| \le C|x-y|^{\alpha}$ with rational $\alpha > 1$ forces
$f$ to be constant. Finally
[[thm-compactness-is-necessary-for-evt-and-uniform-continuity]] is the sharp
converse to everything above: on a set that is not compact there is always an
unbounded continuous function and a bounded continuous function whose supremum
is not attained, and if that set is bounded there is also a continuous function
that is not uniformly continuous. All four witness functions are exhibited
explicitly.

**The three false statements** on this page each carry their own witness,
verified in full: that continuity implies uniform continuity
([[fs-continuity-implies-uniform-continuity]], refuted by $1/x$ on $(0,1)$),
that a continuous image of a closed set is closed
([[fs-continuous-image-of-a-closed-set-is-closed]], refuted by
$1/(1+x^{2})$ on $\mathbb{R}$, whose image is $(0,1]$), and that boundedness of
the domain suffices for the extreme value theorem
([[fs-evt-holds-on-every-bounded-domain]], refuted by the identity on $(0,1)$).
The companion page works the first and the third out again in more detail and
adds the witnesses for the regularity hierarchy, the Dirichlet function, and the
two examples that turn the intermediate value theorem into a computation.
