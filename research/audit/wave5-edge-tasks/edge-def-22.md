# Citation-precision audit — do these citing items state their target correctly?

You are reading a **published legacy corpus** of this library. Below are one or
more TARGET items, each quoted as it actually stands on disk, followed by every
place in this audit wave that cites it.

**The one question for every citing line:** does the citing text state the
target's own proposition — same domain, same quantifiers, same hypotheses, same
direction, same strength — or does it state something the target does not
actually give? A fact that quietly drops a hypothesis, flips an implication,
promotes an implication to a biconditional, or widens a domain is a **FATAL**
defect of the incorrect-dependency-citation class. It is this library's single
most common confirmed defect, and it is only visible by reading the two texts
against each other, which is what this file lets you do.

Do NOT report: a concise but faithful shortening (that is the required house
style); a paraphrase that preserves content; wording you would have chosen
differently; missing URLs; prose style. A citing line reading as a shortened
but faithful version of the target is CORRECT and must not be flagged.

Where a citing line says a dependency is declared but never cited in the body,
say whether that looks like a stale declaration or a use that lost its citation
— that one is NONFATAL either way.

For every finding use the block format from the brief, and finish with the
`N fatal, M nonfatal` line. If every citation is faithful, say so plainly and
name the targets you checked.

---

# Citation-precision audit — everything that cites `def-separable-space`

## The target, as it actually stands on disk

`items/def-separable-space.md` — definition — Separability: the existence of an at most countable dense subset

#### Definition

A topological space $X$ is **separable** if some at most countable subset $D\subseteq X$ is dense in $X$ ([[def-dense-top]], [[def-countable]]). Equivalently, every nonempty open subset of $X$ meets $D$.

## The 1 citing use(s), quoted verbatim from the citing items

### `def-separated-sets` (forward, page separation-axioms)

Title: Separated sets: $\\overline{A} \\cap B = A \\cap \\overline{B} = \\varnothing$

- subset", is unrelated and is defined later in [[def-separable-space]].


---

# Citation-precision audit — everything that cites `def-neighbourhood-r`

## The target, as it actually stands on disk

`items/def-neighbourhood-r.md` — definition — The $\\varepsilon$-neighbourhood and the punctured $\\varepsilon$-neighbourhood of a point of $\\mathbb{R}$

#### Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]) and its absolute value ([[def-abs-value]]).

Let $x \in \mathbb{R}$ and let $\varepsilon \in \mathbb{R}$ with
$\varepsilon > 0$. The **$\varepsilon$-neighbourhood of $x$** is

$$N_\varepsilon(x) \;:=\; \{\, y \in \mathbb{R} : |y - x| < \varepsilon \,\},$$

and the **punctured $\varepsilon$-neighbourhood of $x$** is

$$N^{*}_\varepsilon(x) \;:=\; N_\varepsilon(x) \setminus \{x\} \;=\; \{\, y \in \mathbb{R} : 0 < |y - x| < \varepsilon \,\}.$$

The two descriptions of $N^{*}_\varepsilon(x)$ agree because $|y - x| = 0$ holds
exactly when $y = x$ ([[lem-of-abs-value]]).

**A neighbourhood is an open interval.** For every $x$ and every
$\varepsilon > 0$,

$$N_\varepsilon(x) \;=\; (x - \varepsilon,\ x + \varepsilon),$$

the interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for
$\varepsilon > 0$, the equivalence $|y - x| < \varepsilon \iff -\varepsilon <
y - x < \varepsilon$, and adding $x$ throughout turns the right-hand side into
$x - \varepsilon < y < x + \varepsilon$ ([[def-ordered-field]]).

**The centre lies in its own neighbourhoods.** $x \in N_\varepsilon(x)$, since
$|x - x| = |0| = 0 < \varepsilon$ ([[lem-of-abs-value]]).

**Punctured neighbourhoods are never empty.** The element
$y := x + \varepsilon/2$ satisfies $|y - x| = \varepsilon/2$, which is
$> 0$ and $< \varepsilon$, so $y \in N^{*}_\varepsilon(x)$
([[lem-of-abs-value]], [[def-ordered-field]]).

**Monotonicity in the radius.** If $0 < \delta \le \varepsilon$ then
$N_\delta(x) \subseteq N_\varepsilon(x)$, because $|y - x| < \delta \le
\varepsilon$ ([[def-ordered-field]]).

**Nesting at an interior point.** If $y \in N_\varepsilon(x)$ and
$0 < \delta \le \varepsilon - |y - x|$, then

$$N_\delta(y) \;\subseteq\; N_\varepsilon(x).$$

Indeed for $z \in N_\delta(y)$ the triangle inequality
([[lem-of-triangle-inequality]]) gives
$|z - x| = |(z - y) + (y - x)| \le |z - y| + |y - x| < \delta + |y - x| \le
\varepsilon$. Note that $\varepsilon - |y - x| > 0$ precisely because
$y \in N_\varepsilon(x)$, so such a $\delta$ always exists.

## The 1 citing use(s), quoted verbatim from the citing items

### `def-g-delta-and-f-sigma-in-a-topological-space` (published-backward, page separation-axioms)

Title: $G_\\delta$ and $F_\\sigma$ subsets of a topological space, agreeing with the real-line notion

- ([[def-neighbourhood-r]]); [[def-metric-topology]] calls $U$ open in


---

# Citation-precision audit — everything that cites `def-order-topology-on-a-linearly-ordered-set`

## The target, as it actually stands on disk

`items/def-order-topology-on-a-linearly-ordered-set.md` — definition — The order topology of a linearly ordered set, with the open rays as a subbasis; order-convex sets, order-density, the least upper bound property, and linear continua

#### Definition

Let $(L, \le)$ be a **linearly ordered set** ([[def-partial-order]]): a poset in
which any two elements are comparable. Write $<$ for the associated strict order.

### Rays, intervals, and the order topology

For $a \in L$ the **open rays** at $a$ are

$$L_{<a} \;:=\; \{\, t \in L : t < a \,\}, \qquad L_{>a} \;:=\; \{\, t \in L : a < t \,\},$$

and $\mathcal{S}_L := \{\, L_{<a} : a \in L \,\} \cup \{\, L_{>a} : a \in L \,\}$
is the family of all of them. The **order topology** on $L$ is

$$\mathcal{T}_{<} \;:=\; \langle \mathcal{S}_L \rangle,$$

the topology generated by $\mathcal{S}_L$ ([[def-topology-basis-subbasis]],
[[def-topological-space]]). A **linearly ordered topological space** is a
linearly ordered set carrying its order topology. For $a, b \in L$ write

$$(a,b) := \{\, t \in L : a < t < b \,\}, \quad [a,b] := \{\, t \in L : a \le t \le b \,\},$$
$$[a,b) := \{\, t \in L : a \le t < b \,\}, \quad (a,b] := \{\, t \in L : a < t \le b \,\},$$

so that $(a,b) = L_{>a} \cap L_{<b}$.

**A basis, and the obligation is discharged here.** By [[thm-basis-criterion]]
claim 2 the intersections of finitely many members of $\mathcal{S}_L$ form a
basis for $\mathcal{T}_{<}$. This library takes the empty intersection to be $L$,
so $L$ itself is among them. An intersection of finitely many rays is computed by
collecting the lower cuts and the upper cuts separately: since $\le$ is linear,
a finite nonempty set of elements of $L$ has a greatest and a least member, so
$L_{<a_1} \cap \dots \cap L_{<a_m} = L_{<a}$ with $a$ the least of the $a_i$, and
$L_{>b_1} \cap \dots \cap L_{>b_k} = L_{>b}$ with $b$ the greatest of the $b_j$.
Hence every finite intersection is $L$, an open ray, or an open interval
$(b,a) = L_{>b} \cap L_{<a}$, and

$$\mathcal{B}_L \;:=\; \{L\} \;\cup\; \mathcal{S}_L \;\cup\; \{\, (a,b) : a, b \in L \,\}$$

is a basis for $\mathcal{T}_{<}$ ([[def-topology-basis-subbasis]]).

**What a basic neighbourhood of a point looks like.** Let $x \in L$. If $x$ is
neither the least nor the greatest element of $L$ ([[def-maximal-element]]), then
some $a < x$ and some $b > x$ exist and $x \in (a,b)$; if $x$ is least, the sets
$L_{<b}$ with $b > x$ are the basic sets containing $x$ apart from $L$ itself;
if $x$ is greatest, they are the sets $L_{>a}$ with $a < x$. These three cases
are the only ones, and every proof below that argues at a point splits along
them.

**Order-convex sets.** A subset $C \subseteq L$ is **order-convex** when

$$x, z \in C \text{ and } x \le w \le z \;\Longrightarrow\; w \in C .$$

Every ray and every one of the four interval forms above is order-convex, by
transitivity of $\le$; so are $\varnothing$, every singleton, and $L$.

**A convention that is fixed once here.** A subset $C \subseteq L$ inherits two
topologies that need not agree: the subspace topology from $(L, \mathcal{T}_{<})$
([[def-subspace-topology-top]]) and the order topology of the restricted order on
$C$. **In this library "a subspace of a linearly ordered topological space"
always means the subspace topology**, and the phrase "the order topology of $C$"
is written in full whenever the second is meant. The two do agree when $C$ is
order-convex, which is the only case used here: for order-convex $C$ the trace
$L_{<a} \cap C$ is $C$ if $a$ is above every element of $C$, is $\varnothing$ if
$a$ is below or equal to every element of $C$, and is otherwise the ray
$C_{<a}$ when $a \in C$, and $C_{<c}$ for any $c \in C$ above $a$ has the same
trace description; in every case the trace of a subbasic set of $L$ is a
subbasic set of $C$ or is $\varnothing$ or $C$, and conversely every ray of $C$
is such a trace. The general statement, for a subset that is not order-convex, is
**not asserted here**.

### Order-density and the least upper bound property

Let $(L, \le)$ be linearly ordered.

- $L$ is **order-dense** (or **densely ordered**) when for all $x, y \in L$ with
  $x < y$ there is $z \in L$ with $x < z < y$. Equivalently, no element of $L$
  has an immediate successor above it: there is no pair $x < y$ with $(x,y) =
  \varnothing$.
- $L$ has the **least upper bound property** when every nonempty $S \subseteq L$
  that has an upper bound in $L$ has a least upper bound in $L$
  ([[def-upper-bound]]). A least upper bound is unique when it exists, by
  antisymmetry: two of them bound each other, and antisymmetry of $\le$
  ([[def-partial-order]]) forces them equal. We write $\sup S$ for it.

**A linear continuum** is a linearly ordered set with **at least two elements**
that is order-dense and has the least upper bound property.

**The two-element requirement is not decoration.** Without it the empty ordered
set and every one-point ordered set would qualify vacuously, and the theorems
about linear continua elsewhere in this library would have degenerate instances
whose statements say nothing. A linear continuum in the sense above is
automatically infinite: two elements $x < y$ produce $z_1$ strictly between them,
then $z_2$ strictly between $x$ and $z_1$, and so on, and each is new because the
order is strict.

**$\mathbb{R}$ is a linear continuum, and its order topology is its usual
topology.** The order of $\mathbb{R}$ ([[def-real-order]], [[def-ordered-field]])
is linear; $\mathbb{R}$ has at least two elements, namely $0$ and $1$; it is
order-dense because $x < (x+y)/2 < y$ whenever $x < y$
([[def-ordered-field]]); and it has the least upper bound property, which is
exactly the completeness axiom ([[def-complete-ordered-field]],
[[lem-sup-unique]], [[def-infimum]], [[def-bounded-set]]). Its order topology is
the usual topology, that is the metric topology of $d_{\mathbb{R}}(s,t) = |s-t|$
([[lem-real-line-is-a-metric-space]], [[def-metric-topology]],
[[def-metrizable-space]]): the ball $B(x,r)$ is the interval $(x - r, x + r)$
([[def-metric-ball]], [[def-interval]], [[def-neighbourhood-r]]), which is a
basic set of $\mathcal{T}_{<}$, so every set open for the metric is open for the
order; and conversely $L_{<b}$ and $L_{>a}$ are open for the metric
([[def-open-and-closed-in-r]]), so every subbasic set of $\mathcal{T}_{<}$ is
metric-open and $\mathcal{T}_{<} \subseteq \mathcal{T}_{d_{\mathbb{R}}}$ by
minimality of the generated topology ([[def-topology-basis-subbasis]]). The two
topologies therefore coincide, and **no second topology on $\mathbb{R}$ is being
introduced**.

## The 1 citing use(s), quoted verbatim from the citing items

### `def-order-topology-on-an-ordinal` (published-backward, page separation-axioms)

Title: The order topology on an ordinal, with the half-open intervals $(\\alpha, \\beta]$ and the initial segments $[0, \\beta]$ as a basis

- ([[def-order-topology-on-a-linearly-ordered-set]]), by open intervals together


---

# Citation-precision audit — everything that cites `rem-urysohn-lemma-not-a-zf-theorem`

## The target, as it actually stands on disk

`items/rem-urysohn-lemma-not-a-zf-theorem.md` — remark — Urysohn's lemma is not a theorem of ZF, nor of ZF plus countable choice

#### Statement

**Urysohn's lemma (UL).** If $X$ is a $T_4$ space and $A, B \subseteq X$ are
disjoint closed sets, there is a continuous $f : X \to [0,1]$ with
$A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$.

The following are all relative to the consistency of ZF.

**(a) UL is not a theorem of ZF.** Läuchli (1962/63) builds a permutation model
of ZF with atoms in which the set of atoms is densely linearly ordered, of the
order type of the rationals of the ground model, and in which that set with its
order topology is a $T_4$ space on which **every continuous real-valued function
is constant**; UL fails there. Since the negation of UL is a boundable statement,
the Jech-Sochor first embedding theorem transfers the failure to ZF proper.

**(b) UL is not a theorem of ZF + countable choice.** Tachtsis (2019) produces a
model of ZF in which $\mathrm{AC}_\omega$ holds and UL fails, and hence in which
the Tietze extension theorem fails as well.

**(c) What does suffice.** Dependent choice implies UL by the usual dyadic
construction. Blass (1979) proves the stronger statement that **dependent
multiple choice implies UL**. Whether UL implies DMC is open.

**(d) The Boolean prime ideal theorem does not suffice.** Brunner (1983) shows UL
fails in the Mostowski linearly ordered model, where BPI holds; Pincus's transfer
theorems carry this to ZF.

## The 1 citing use(s), quoted verbatim from the citing items

### `rem-separation-axiom-conventions` (published-backward, page separation-axioms)

Title: Conventions on this page, and the one implication of the classical chain that is not available at this point in the reading order

- [[rem-urysohn-lemma-not-a-zf-theorem]], which this remark mentions without
