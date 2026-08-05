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

# Citation-precision audit — everything that cites `def-locally-compact-space`

## The target, as it actually stands on disk

`items/def-locally-compact-space.md` — definition — Locally compact topological space: every point has a compact neighbourhood; and what this says in a metric space

#### Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is **locally
compact** when

> every point of $X$ has a compact neighbourhood:

that is, for every $x \in X$ there is a neighbourhood $N$ of $x$
([[def-neighbourhood-top]]) that is a compact subset of $X$
([[def-compact-space]], [[def-subspace-topology-top]]).

**A neighbourhood need not be open here**, and that is what makes the condition
the weak one it is meant to be: $N$ is required only to contain some open set
containing $x$. Writing "compact **open** neighbourhood" instead would define a
strictly stronger property, satisfied by no space in which a point has no compact
open neighbourhood, $\mathbb{R}$ among them; and requiring the compact set merely
to *contain* $x$ would define a property so weak that every space with a
singleton has it, singletons being compact.

**Every compact space is locally compact**, since $X$ itself is a neighbourhood
of each of its points and is a compact subset of itself. The converse fails, and
$\mathbb{R}^n$ is the standard witness.

**What the condition says in a metric space.** Let $(X,d)$ be a metric space
carrying its metric topology ([[def-metric-topology]], [[def-metrizable-space]]),
with balls as in [[def-metric-ball]], and let $x \in X$. Then

> $x$ has a compact neighbourhood **if and only if** there are a real $r > 0$ and
> a compact $K \subseteq X$ with $B(x,r) \subseteq K$.

*Both directions are immediate and are discharged here.* If $N$ is a compact
neighbourhood of $x$, fix an open $U$ with $x \in U \subseteq N$; by
[[def-metric-topology]] there is $r > 0$ with $B(x,r) \subseteq U \subseteq N$, so
$K := N$ serves. Conversely, if $B(x,r) \subseteq K$ with $K$ compact, then $K$
contains the open set $B(x,r)$, which contains $x$, so $K$ is a neighbourhood of
$x$ and is compact. Compactness of a subset of $(X,d)$ means the same thing read
metrically and read topologically
([[thm-compactness-agrees-with-metric-compactness]]), so the criterion may be
applied with either development's theorems.

**$\mathbb{R}^n$ is locally compact for every $n \ge 1$.** Give $\mathbb{R}^n$
the product topology, which is the metric topology of the Euclidean metric $d_2$
([[lem-metrics-on-rn]], [[cor-heine-borel-in-the-product-topology]]). For
$p \in \mathbb{R}^n$ the set

$$Q_p \;:=\; \{\, x \in \mathbb{R}^n : d_2(x,p) \le 1 \,\}$$

is closed, being the complement of the union of the open balls $B(y, d_2(y,p) - 1)$
over the points $y$ with $d_2(y,p) > 1$, and it is bounded
([[def-metric-bounded-diameter]]), lying inside $B(p, 2)$; so $Q_p$ is compact by
[[cor-heine-borel-in-the-product-topology]]. It contains the open ball $B(p,1)$,
which contains $p$, so it is a compact neighbourhood of $p$. The space
$\mathbb{R}^n$ is not compact, so local compactness is strictly weaker than
compactness.

## The 2 citing use(s), quoted verbatim from the citing items

### `cor-rn-is-locally-compact-and-sigma-compact` (published-backward, page the-topology-of-euclidean-space)

Title: $\\mathbb{R}^n$ is locally compact and $\\sigma$-compact

- [L2] A space is locally compact when every point has a compact neighbourhood, and it is $\sigma$-compact when it is a countable union of compact subsets ([[def-locally-compact-space]], [[def-compactness-variants]]).

### `fs-lindelofness-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: Lindelöfness is hereditary

- [F1] A space is locally compact when every point has a compact neighbourhood, and Hausdorff when distinct points have disjoint open neighbourhoods ([[def-locally-compact-space]], [[def-hausdorff-space]]).


---

# Citation-precision audit — everything that cites `def-finite-cardinality`

## The target, as it actually stands on disk

`items/def-finite-cardinality.md` — definition — The cardinality $\\lvert A\\rvert$ of a finite set

#### Definition

Throughout this page $\mathbb{N}$ is the set of von Neumann naturals
([[def-natural-numbers]]): $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$, and
$n = \{\, m \in \mathbb{N} : m < n \,\}$ is itself the set of its predecessors,
the order being the additive order of [[def-nat-order]] identified with
membership in [[lem-nat-order-is-membership]]. Write $A \approx B$ when a
bijection $A \to B$ exists ([[def-equinumerous]],
[[def-injection-surjection-bijection]]). A set $A$ is **finite** when
$A \approx n$ for some $n \in \mathbb{N}$ ([[def-countable]]).

**Definition.** Let $A$ be a finite set. Then there is **exactly one**
$n \in \mathbb{N}$ with $A \approx n$, and we write

$$\lvert A\rvert := \text{that } n,$$

the **cardinality**, or number of elements, of $A$. The notation $\lvert A\rvert$
is defined for finite $A$ only, and its value is a natural number.

**Why exactly one, which is the whole content of the definition.** At least one
such $n$ exists: that is literally what "$A$ is finite" says. At most one exists:
if $A \approx n$ and $A \approx m$ with $n, m \in \mathbb{N}$, then $n \approx A$,
because the inverse of a bijection is a bijection, and hence $n \approx m$,
because a composition of bijections is a bijection
([[def-injection-surjection-bijection]]); and $n \approx m$ forces $n = m$ by
claim 3 of [[lem-pigeonhole]]. So $\lvert A\rvert$ names a single natural number
and not a family of choices.

**Four consequences, proved here because everything on this page uses them.**

**(a) $\lvert n\rvert = n$ for every $n \in \mathbb{N}$.** The identity map
$\mathrm{id}_n$ is a bijection $n \to n$, so $n \approx n$; thus $n$ is finite and
the unique natural equinumerous with it is $n$ itself.

**(b) $\lvert\varnothing\rvert = 0$, and a finite $A$ satisfies
$\lvert A\rvert = 0$ if and only if $A = \varnothing$.** Since $0 = \varnothing$,
part (a) gives $\lvert\varnothing\rvert = 0$. Conversely, if $\lvert A\rvert = 0$
then there is a bijection $f : A \to \varnothing$; were some $a \in A$, the value
$f(a)$ would be an element of $\varnothing$, and $\varnothing$ has none, so
$A = \varnothing$.

**(c) Transport along a bijection.** If $A$ is finite and $f : A \to B$ is a
bijection, then $B$ is finite and $\lvert B\rvert = \lvert A\rvert$. Indeed
$B \approx A$ through $f^{-1}$ and $A \approx \lvert A\rvert$, so
$B \approx \lvert A\rvert$ by transitivity.

**(d) Equality of cardinalities is equinumerosity.** For finite $A$ and $B$:
$\lvert A\rvert = \lvert B\rvert$ if and only if $A \approx B$. If the
cardinalities agree then $A \approx \lvert A\rvert = \lvert B\rvert \approx B$;
conversely $A \approx B$ gives $\lvert B\rvert = \lvert A\rvert$ by (c).

## The 2 citing use(s), quoted verbatim from the citing items

### `def-polygonal-path-and-polygonal-connectedness` (published-backward, page the-topology-of-euclidean-space)

Title: Polygonal paths and polygonally connected subsets of $\\mathbb{R}^n$

- The formula uses only scalar multiplication and vector addition in $\mathbb{R}^n$ ([[def-vector-space]]). The finite list is indexed by a natural number ([[def-finite-cardinality]]).

### `ex-finite-subset-net-for-unordered-real-summation` (published-backward, page nets-and-filters-examples)

Title: Finite partial sums of a real family form a net directed by inclusion

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.


---

# Citation-precision audit — everything that cites `def-connected-space`

## The target, as it actually stands on disk

`items/def-connected-space.md` — definition — Separation of a topological space, connected and disconnected spaces, clopen sets, and connected subsets

#### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- A **separation** of $X$ is an ordered pair $(U, V)$ of **open**, **nonempty**,
  **disjoint** subsets of $X$ with $U \cup V = X$.
- $X$ is **disconnected** when a separation of $X$ exists, and **connected** when
  none does.
- A subset $A \subseteq X$ is a **connected subset** of $X$ when the space
  $(A, \mathcal{T}_A)$ is connected, $\mathcal{T}_A$ being the subspace topology
  ([[def-subspace-topology-top]]). "Disconnected subset" is read the same way.

Since $U$ and $V$ are complementary in $X$, each of them is closed as well as
open; so a separation is the same thing as a partition of $X$ into two nonempty
clopen pieces ([[def-topological-space]]). The **clopen** subsets of $X$ are
those that are both open and closed, and $\varnothing$ and $X$ are always among
them.

**The empty space and the one-point space are connected in this library.**
Neither admits a separation: a separation requires two nonempty disjoint sets
whose union is the whole space, and neither $\varnothing$ nor a singleton can be
written as such a union. So both are connected under the definition above,
without any special clause. **This is a live convention fork** and the competing
choice is recorded in [[rem-connectedness-conventions]]; nothing on this page
depends on which is taken except the reading of the word "connected" applied to
those two spaces.

**Connectedness is a property of a space, not of an ambient pair.** The condition
above mentions only $(X,\mathcal{T})$. When it is applied to $A \subseteq X$ it
is applied to the space $(A, \mathcal{T}_A)$, so it does not change if $A$ is
regarded as a subspace of some other space inducing the same topology on $A$; in
particular a subset of $A$ is connected as a subset of $A$ exactly when it is
connected as a subset of $X$, by transitivity of the subspace topology
([[def-subspace-topology-top]]). This is why "connected" may be used of a subset
with no ambient space named.

**Spelled out for a subset.** $A \subseteq X$ is disconnected exactly when there
are open $U, V \subseteq X$ with

$$A \subseteq U \cup V, \qquad U \cap A \ne \varnothing, \qquad V \cap A \ne \varnothing, \qquad U \cap V \cap A = \varnothing,$$

because the open sets of $(A,\mathcal{T}_A)$ are precisely the traces $U \cap A$.
Note the last condition: it asks $U$ and $V$ to be disjoint **on $A$**, not in
$X$. Requiring $U \cap V = \varnothing$ outright is a strictly stronger demand
and is a different notion.

**The two-point discrete space.** Write $\mathbf{2} := \{0,1\}$ with the discrete
topology ([[def-standard-topologies]]), in which every subset is open. A
separation of $X$ is the same datum as a surjective continuous map
$X \to \mathbf{2}$ ([[def-continuous-map-top]]): given $(U,V)$, the map sending
$U$ to $0$ and $V$ to $1$ is continuous because the preimage of each of the four
open subsets of $\mathbf{2}$ is one of $\varnothing$, $U$, $V$, $X$; given a
surjective continuous $\chi : X \to \mathbf{2}$, the pair
$(\chi^{-1}[\{0\}], \chi^{-1}[\{1\}])$ is a separation. This reformulation is
proved as a theorem on this page and is recorded here only to name $\mathbf{2}$.

**Separated sets.** Two subsets $A_1, A_2 \subseteq X$ are **separated in $X$**
when

$$\overline{A_1} \cap A_2 = \varnothing \qquad \text{and} \qquad A_1 \cap \overline{A_2} = \varnothing,$$

closures taken in $X$ ([[def-interior-closure-boundary-top]],
[[thm-closure-characterisation-top]]). Separated sets are disjoint, since
$A_1 \subseteq \overline{A_1}$; the converse fails. This is verbatim the
condition [[def-connected-r]] uses on the real line, transported to an arbitrary
space, and the theorem relating it to the definition above is the next lemma on
this page.

**Totally disconnected spaces, and the empty case.** The vocabulary for a space
all of whose connected subsets are single points is fixed later on this page,
together with the components; it is not defined here because it is stated in
terms of components.

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-punctured-line-versus-punctured-plane` (published-backward, page the-topology-of-euclidean-space-examples)

Title: $GL_1(\\mathbb{R})=\\mathbb{R}\\setminus\\{0\\}$ is disconnected, whereas $\\mathbb{R}^2\\setminus\\{0\\}$ is polygonally connected

- The invertible $1\times1$ real matrices are the nonzero real numbers, so $GL_1(\mathbb R)=\mathbb R\setminus\{0\}$. This set is disconnected: it contains $-1$ and $1$ but not the intermediate point $0$, so it is not order-convex and cannot be connected by [[cor-connected-subsets-of-the-line]]. In contrast, [[lem-punctured-rn-is-polygonally-connected]] gives polygonal connectedness of $\mathbb R^2\setminus\{0\}$. Connectedness is understood through [[def-connected-space]].

### `thm-open-connected-subsets-of-rn-are-polygonally-connected` (published-backward, page the-topology-of-euclidean-space)

Title: For an open subset of $\\mathbb{R}^n$, connectedness, path-connectedness and polygonal connectedness are equivalent

- [L3] A connected space has no nonempty proper clopen subset ([[def-connected-space]]).


---

# Citation-precision audit — everything that cites `rem-sup-conventions`

## The target, as it actually stands on disk

`items/rem-sup-conventions.md` — remark — Conventions: $\\sup \\emptyset$, unbounded sets, and the extended reals

_(no Statement/Definition section)_

## The 2 citing use(s), quoted verbatim from the citing items

### `lem-uniform-metric-on-a-function-space` (published-backward, page function-space-topologies)

Title: For a nonempty set $X$ and a metric space $(Y,d)$ the uniform metric $\\bar\\rho(f,g) = \\sup_{x} \\min\\{d(f(x),g(x)), 1\\}$ is a metric on $Y^{X}$

- extended real line ([[rem-sup-conventions]]). Truncating $d$ at $1$ is what makes

### `rem-function-space-conventions` (published-backward, page function-space-topologies)

Title: Standing hypotheses on this page: a metric domain, where the target must be metric, and why the compact-open topology is built from metric compactness

- convention $\sup \varnothing = -\infty$ ([[rem-sup-conventions]]). So
