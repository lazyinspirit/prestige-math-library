---
page: separation-axioms
title: "Separation Axioms: the Hierarchy"
status: draft
items: [def-t0-and-t1-spaces, thm-t1-iff-singletons-are-closed, def-separated-sets,
        def-g-delta-and-f-sigma-in-a-topological-space, def-regular-and-t3-spaces,
        lem-regularity-via-closed-neighbourhoods, def-urysohn-space,
        lem-urysohn-sits-between-hausdorff-and-regular-plus-t1,
        def-zero-sets-and-cozero-sets, def-completely-regular-and-tychonoff-spaces,
        thm-completely-regular-implies-regular, def-normal-and-t4-spaces,
        lem-normality-via-shrinking, thm-t4-implies-t3,
        def-completely-normal-and-perfectly-normal-spaces,
        thm-completely-normal-implies-normal, thm-perfectly-normal-implies-completely-normal,
        thm-metric-spaces-are-completely-normal,
        thm-metric-spaces-are-tychonoff-and-perfectly-normal,
        thm-the-separation-implication-chain, def-order-topology-on-an-ordinal,
        lem-ordinal-order-topology-is-t3, lem-the-k-topology-is-hausdorff-and-not-regular,
        rem-separation-axiom-conventions]
examples: [fs-every-t1-space-is-hausdorff, fs-every-normal-space-is-hausdorff,
           fs-every-hausdorff-space-is-regular, fs-unique-sequential-limits-imply-hausdorff]
---

**Objective.** [[def-topological-space]] assumes no separation at all: distinct
points need not lie in disjoint open sets, and singletons need not be closed.
Every separation property used earlier in this library was therefore stated as a
hypothesis at its point of use, and only one of them, the Hausdorff condition,
was even given a name ([[def-hausdorff-space]]). This page defines the graded
family those hypotheses belong to and proves the implications between its
members.

**The two conventions that decide how this page reads.** First, *regular*,
*completely regular*, *normal*, *completely normal* and *perfectly normal* name
separation conditions on sets alone, and the numerals $T_3$, $T_{3\frac12}$,
$T_4$, $T_5$ and $T_6$ name their conjunctions with $T_1$. Munkres builds $T_1$
into the adjectives; Kelley, Willard and Engelking do not, and this page follows
them, writing the $T_1$ hypothesis out wherever it is used. Second, *Urysohn
space* means separation of points by neighbourhoods with disjoint closures, not
separation by a function, and it is unrelated to *Urysohn's lemma*. Both forks,
and everything else settled here, are recorded in
[[rem-separation-axiom-conventions]].

**The bottom of the hierarchy.** [[def-t0-and-t1-spaces]] introduces $T_0$ and
$T_1$ and discharges $T_1 \Rightarrow T_0$ inline.
[[thm-t1-iff-singletons-are-closed]] then gives the four-way equivalence that
every later use of $T_1$ goes through: a space is $T_1$ exactly when every
singleton is closed, exactly when every finite subset is closed, and exactly when
its topology contains the cofinite topology on the same set. The last clause
identifies the cofinite topology as the coarsest $T_1$ topology on a set, which
is why it is the standard place to look for a $T_1$ space that fails everything
above.

**Two pieces of vocabulary the upper axioms need.** [[def-separated-sets]]
defines $A$ and $B$ to be *separated* when $\overline{A} \cap B = A \cap
\overline{B} = \varnothing$, records that separated sets are disjoint and that
the converse fails, and shows that separation does not depend on the ambient
space, so no subspace needs naming when the notion is used.
[[def-g-delta-and-f-sigma-in-a-topological-space]] carries the $G_\delta$ and
$F_\sigma$ classes over from the real line to an arbitrary space, and states the
dictionary explicitly: for $\mathbb{R}$ with its usual topology the definition
here and [[def-f-sigma-g-delta]] name the same two classes, the two collections
of open subsets of $\mathbb{R}$ being one collection. There is one notion of
$G_\delta$ in this library, not two.

**Regularity, and what it really says.** [[def-regular-and-t3-spaces]] defines
regularity as the separation of a point from a closed set missing it, and $T_3$
as regularity together with $T_1$. [[lem-regularity-via-closed-neighbourhoods]]
gives the two working forms: an open set around a point can be shrunk so that
even its closure stays inside, and every point has a neighbourhood base of closed
neighbourhoods. The second form is what makes a space with a clopen basis regular
for free, and it is the route used for the ordinal spaces later on the page.

**Between Hausdorff and $T_3$.** [[def-urysohn-space]] defines the Urysohn
condition, $T_{2\frac12}$, and
[[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]] proves the three
descending steps at the bottom of the chain: Urysohn implies Hausdorff, Hausdorff
implies $T_1$ and hence $T_0$, and regular together with $T_1$ implies Urysohn.
The last of these applies regularity twice, and the $T_1$ hypothesis is what
supplies the closed set it starts from.

**Separation by functions.** [[def-zero-sets-and-cozero-sets]] introduces the
zero set $Z(f)$ and the cozero set of a continuous real-valued function, and
proves that a zero set is closed and is a $G_\delta$, the presentation being
$\bigcap_n f^{-1}[(-1/(n+1), 1/(n+1))]$ with the index starting at $0$.
[[def-completely-regular-and-tychonoff-spaces]] then asks for a continuous
$f : X \to [0,1]$ with $f(x_0) = 1$ and $f \equiv 0$ on the closed set, and
[[thm-completely-regular-implies-regular]] converts such a function into two
disjoint open sets by cutting at the value $1/2$. Complete regularity is a strong
hypothesis: it asserts that a space has many continuous real-valued functions,
and a space may have almost none.

**Normality and the top of the chain.** [[def-normal-and-t4-spaces]] separates
two disjoint closed sets, and [[lem-normality-via-shrinking]] gives the shrinking
form together with the corollary actually used later: disjoint closed $A$ and $D$
admit an open $V \supseteq A$ with $\overline{V} \cap D = \varnothing$.
[[thm-t4-implies-t3]] spends the $T_1$ hypothesis in one line, turning a point
into a closed set. [[def-completely-normal-and-perfectly-normal-spaces]] then
defines the two axioms above normality — separation of every *separated* pair,
and normality together with every closed set being a $G_\delta$ — and
[[thm-completely-normal-implies-normal]] records that both imply normality.

**The arrow that was nearly lost.**
[[thm-perfectly-normal-implies-completely-normal]] proves that perfect normality
implies complete normality, and it does so **without any Urysohn function**. Each
of the two open sets $X \setminus \overline{B}$ and $X \setminus \overline{A}$ is
$F_\sigma$, and normality shrinks each of the countably many closed pieces; the
two unions are then interleaved, each stage subtracting the closures of the
earlier stages of the other side, and the comparison of two indices is what makes
them disjoint. The proof assumes the Axiom of Countable Choice, spent at exactly
one step in selecting one open set per stage, and that hypothesis is written into
the theorem's own statement. The route through "every closed set is a zero set",
which *would* need Urysohn's lemma, is not taken.

**Metric spaces sit at the top.**
[[thm-metric-spaces-are-completely-normal]] separates any two separated sets by
the unions of the balls $B(a, d(a,B)/2)$ and $B(b, d(b,A)/2)$, a construction
that selects nothing and so uses no choice principle at all.
[[thm-metric-spaces-are-tychonoff-and-perfectly-normal]] then exhibits every
nonempty closed $C$ as the zero set of $x \mapsto d(x,C)$ and as the
$G_\delta$ $\bigcap_n \{x : d(x,C) < 1/(n+1)\}$, and separates a point from a
closed set by $\min\{1, d(x,C)/d(x_0,C)\}$; the empty closed set is handled
separately in each case, since the distance to it is not defined.

**What the page proves, assembled and delimited.**
[[thm-the-separation-implication-chain]] collects every implication above into
one statement and asserts nothing else. Against the classical chain it is short
by exactly **one** arrow: a normal $T_1$ space is completely regular, which is
Urysohn's lemma and is not available at this point in the reading order. That
absence, and the fact that Urysohn's lemma is not even a theorem of ZF, is
recorded in [[rem-separation-axiom-conventions]] together with the other results
this page deliberately does not contain — compactness, and a regular space that
is not normal.

**Two spaces are built here rather than on the companion page**, because later
pages will need them and an examples page is a leaf that nothing may cite.
[[def-order-topology-on-an-ordinal]] gives an ordinal the basis of half-open
intervals $(\alpha,\beta]$ together with the initial segments $[0,\beta]$, states
that this is the ordinal case only and not the general order topology, and
identifies the isolated points as $0$ and the successors.
[[lem-ordinal-order-topology-is-t3]] shows that basis is clopen, whence $T_1$,
Hausdorff and regular. [[lem-the-k-topology-is-hausdorff-and-not-regular]] builds
the $K$-topology on $\mathbb{R}$ from the bounded open intervals together with
their differences by $K = \{1/(n+1) : n \in \mathbb{N}\}$, and shows it is
Hausdorff, that $K$ is closed in it, and that $0$ and $K$ cannot be separated —
the non-separation being closed by exhibiting an explicit point of the overlap in
the gap between consecutive members of $K$.

**Four false statements** mark the arrows that do not reverse:
[[fs-every-t1-space-is-hausdorff]] (the cofinite topology on $\mathbb{R}$),
[[fs-every-normal-space-is-hausdorff]] (the indiscrete topology on two points,
which also shows the $T_1$ hypothesis in $T_4$ is not redundant),
[[fs-every-hausdorff-space-is-regular]] (the $K$-topology) and
[[fs-unique-sequential-limits-imply-hausdorff]] (the cocountable topology on
$\mathbb{R}$, where every convergent sequence is eventually constant). The
witnesses are worked in full on the companion page.
