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

# Citation-precision audit — everything that cites `def-countable-choice`

## The target, as it actually stands on disk

`items/def-countable-choice.md` — definition — The Axiom of Countable Choice ($\\mathrm{AC}_\\omega$)

#### Definition

The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following
statement.

> For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by
> $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that
> $f(n) \in X_n$ for every $n \in \mathbb{N}$.

Equivalently, in the vocabulary of [[def-choice-function]]: every at most
countable family of nonempty sets ([[def-countable]]) has a choice function.

## The 16 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- **Assuming the Axiom of Countable Choice** ([[def-countable-choice]]). The cost
- [L3] Assuming $\mathrm{AC}_\omega$, every at most countable subset of $\omega_1$ has an upper bound $\alpha \in \omega_1$, and no such subset is cofinal in $\omega_1$ ([[thm-countable-subsets-of-omega-one-are-bounded]], [[def-cofinal-subset-of-an-ordinal]], [[def-countable-choice]]).

### `cor-euclidean-compactness-equivalence-chart` (published-backward, page the-topology-of-euclidean-space)

Title: Assuming $\\mathrm{AC}_\\omega$ and $\\mathrm{DC}$, compactness, sequential compactness, countable compactness, limit point compactness, completeness and total boundedness, pseudocompactness, closedness and boundedness, and the extreme-value property are equivalent for nonempty subsets of $\\mathbb{R}^n$ with $n\\ge1$

- **Given:** $\mathrm{AC}_\omega$ ([[def-countable-choice]]), $\mathrm{DC}$ ([[def-dependent-choice]]), an integer $n\ge1$, and a nonempty Euclidean subset $A$.

### `ex-the-ordinal-spaces-omega-plus-one-and-omega-one` (published-backward, page separation-axioms-examples)

Title: $\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment

- ([[def-countable-choice]]):
- [L4] Assuming $\mathrm{AC}_\omega$, every at most countable subset of $\omega_1$ is bounded below $\omega_1$: there is $\alpha \in \omega_1$ with $\xi \le \alpha$ for every $\xi$ in the subset ([[thm-countable-subsets-of-omega-one-are-bounded]], [[def-countable-choice]]).

### `fs-lindelofness-is-productive` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, refuted: Lindelöfness is productive

- [A1] Countable choice selects from every nonempty family indexed by an at most countable set ([[def-countable-choice]]).

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- ([[def-countable-choice]]).
- [L8] Assuming the Axiom of Countable Choice, a union over $\mathbb{N}$ of at most countable sets is at most countable; a subset of an at most countable set is at most countable; and $\mathbb{R}$ is uncountable ([[thm-countable-union-of-countable]], [[def-countable-choice]], [[lem-subset-of-countable]], [[thm-r-uncountable]], [[def-countable]]).

### `lem-uncountable-delta-system-for-finite-sets` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, the uncountable $\\Delta$-system lemma for finite sets

- [A1] The Axiom of Choice implies countable choice and Zorn's lemma ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-zorn]]).

### `rem-separation-axiom-conventions` (published-backward, page separation-axioms)

Title: Conventions on this page, and the one implication of the classical chain that is not available at this point in the reading order

- Countable Choice ([[def-countable-choice]]) and spends it at one step, selecting

### `thm-countable-products-of-first-countable-spaces` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, a countable product of first countable spaces is first countable

- [A1] Countable choice selects a countable local base in every coordinate ([[def-countable-choice]]).

### `thm-countable-products-of-second-countable-spaces` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, a countable product of second countable spaces is second countable

- [A1] Countable choice selects a countable basis in each factor ([[def-countable-choice]]).

### `thm-first-countable-frechet-urysohn-sequential-hierarchy` (published-backward, page nets-and-filters)

Title: Assuming countable choice, every first countable space is Fréchet–Urysohn; in ZF every Fréchet–Urysohn space is sequential

- [L1] Under countable choice, first countability gives $\operatorname{seqcl}(A)=\overline A$ for every $A\subseteq X$ ([[thm-first-countable-sequences-suffice]], [[def-countable-choice]]).

### `thm-metric-countability-equivalences` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, a metrizable space is second countable if and only if it is separable if and only if it is Lindelöf

- [A1] Countable choice selects one object from each nonempty family in a sequence ([[def-countable-choice]]).

### `thm-perfectly-normal-implies-completely-normal` (published-backward, page separation-axioms)

Title: Assuming countable choice, every perfectly normal space is completely normal: separated sets in a normal space whose open sets are all $F_\\sigma$ can be separated by disjoint open sets

- **Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let
- [A3] $\mathrm{AC}_\omega$: for a family of nonempty sets indexed by $\mathbb{N}$ there is a function choosing a member of each ([[def-countable-choice]]).

### `thm-second-countable-implies-lindelof` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, every second countable space is Lindelöf

- [A1] Countable choice selects from the nonempty families indexed by the eligible basis members ([[def-countable-choice]]).

### `thm-second-countable-implies-separable` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, every second countable space is separable

- [A1] Countable choice selects one element from every nonempty member of a countable family ([[def-countable-choice]]).

### `thm-the-separation-implication-chain` (published-backward, page separation-axioms)

Title: The implications proved on this page: perfectly normal gives completely normal under countable choice, and completely normal gives normal; normal with $T_1$ gives $T_3$; completely regular gives regular; regular with $T_1$ gives Urysohn, hence Hausdorff, hence $T_1$, hence $T_0$; and metrizable gives every one of them

- Countable Choice ([[def-countable-choice]]).
- [L1] Assuming $\mathrm{AC}_\omega$, every perfectly normal space is completely normal ([[thm-perfectly-normal-implies-completely-normal]], [[def-countable-choice]]).

### `thm-unordered-summability-of-real-families` (published-backward, page nets-and-filters-examples)

Title: Assuming countable choice, a real family is summable as a finite-subset net if and only if it has at most countable support and its nonzero terms are absolutely summable; its sum is independent of the enumeration

- [L1] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable-choice]]).


---

# Citation-precision audit — everything that cites `def-metric-bounded-diameter`

## The target, as it actually stands on disk

`items/def-metric-bounded-diameter.md` — definition — Bounded subset, diameter, distance from a point to a set, and distance between two sets in a metric space

#### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let
$A, B \subseteq X$.

**Bounded subset.** $A$ is **bounded** if $A = \emptyset$ or there are $x_0 \in X$
and a real $r > 0$ with $A \subseteq B(x_0, r)$ ([[def-metric-ball]]). The space
$(X,d)$ is a **bounded metric space** if $X$ is a bounded subset of itself.

**Diameter, for nonempty bounded $A$ only.** Suppose $A$ is nonempty and
bounded, and put

$$D(A) := \{\, d(a,b) : a, b \in A \,\} \subseteq \mathbb{R}.$$

Then $D(A)$ is nonempty, since $A$ is, and it is bounded above: fixing $x_0$ and
$r$ with $A \subseteq B(x_0,r)$, every $a, b \in A$ satisfy
$d(a,b) \le d(a,x_0) + d(x_0,b) < r + r$ by the triangle inequality, symmetry
([[def-metric-space]]) and addition of inequalities ([[lem-of-add-order]],
[[def-ordered-field]]), so $r + r$ is an upper bound of $D(A)$
([[def-bounded-set]]). Hence $D(A)$ has a least upper bound in $\mathbb{R}$ by
the least-upper-bound property ([[def-complete-ordered-field]]), and that bound
is unique ([[lem-sup-unique]]). Define

$$\operatorname{diam}(A) := \sup D(A).$$

**Distance from a point to a set, for nonempty $A$ only.** Let $x \in X$ and let
$A$ be nonempty, and put $E(x,A) := \{\, d(x,a) : a \in A \,\}$. Then $E(x,A)$ is
nonempty and bounded below by $0$, since a metric is nonnegative
([[lem-metric-nonnegativity]], [[def-bounded-set]]), so it has a greatest lower
bound ([[thm-infimum-property]], [[def-infimum]]), unique by [[lem-sup-unique]].
Define

$$d(x,A) := \inf E(x,A).$$

**Distance between two sets, for nonempty $A$ and $B$ only.** Put
$E(A,B) := \{\, d(a,b) : a \in A,\ b \in B \,\}$, again nonempty and bounded
below by $0$, and define

$$d(A,B) := \inf E(A,B).$$

**Every one of the three scope restrictions is load bearing.** In this library
$\sup$ and $\inf$ denote real numbers and are written only after existence has
been established; the extended real line is introduced on a later page and is
not used for the suprema and infima taken here, and no convention
$\sup \emptyset = -\infty$ is in force in this development
([[rem-sup-conventions]]). Accordingly:

- $\operatorname{diam}(A)$ is defined exactly when $A$ is nonempty **and**
  bounded. It is not defined for $A = \emptyset$, and it is not defined, not even
  as an infinite value, for an unbounded $A$.
- $d(x,A)$ is defined exactly when $A \ne \emptyset$, and $d(A,B)$ exactly when
  both $A$ and $B$ are nonempty. No boundedness is needed for these two, because
  $0$ is always a lower bound.

## The 16 citing use(s), quoted verbatim from the citing items

### `cex-closed-unbounded-euclidean-subset-not-compact` (published-backward, page the-topology-of-euclidean-space-examples)

Title: $\\mathbb{R}^n$ is closed and unbounded and is not compact for $n\\ge1$

- [L4] The empty set is open, so the whole space is closed; a metric subset is bounded exactly when it lies in some ball about some centre ([[def-topological-space]], [[def-metric-bounded-diameter]]).

### `cex-compact-convergence-without-uniform-convergence` (published-backward, page function-space-topologies-examples)

Title: Refuted: convergence uniformly on every compact subset of $\\mathbb{R}$ implies uniform convergence. The maps $x \\mapsto x/(n+1)$ separate the two

- [L4] A compact subset of $\mathbb{R}$ is closed and bounded, and a bounded subset lies in some ball $B(0,r)$, so $|x| < r$ for all its points ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-bounded-diameter]], [[def-metric-ball]], [[def-metric-topology]], [[def-interval]]).

### `cex-pointwise-bounded-but-not-equicontinuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: a pointwise bounded family of continuous functions is equicontinuous. The spikes are bounded by $1$ everywhere and are not equicontinuous at $0$

- [L3] A family $\mathcal{F}$ is pointwise bounded when for each $t$ the set $\{\, f(t) : f \in \mathcal{F} \,\}$ lies in some ball of the target, and equicontinuous at $a$ when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(t)-f(a)| < \varepsilon$ for every $f \in \mathcal{F}$ and every $t$ with $|t-a| < \delta$ ([[def-equicontinuity]], [[def-metric-bounded-diameter]], [[def-metric-ball]], [[def-metric-continuity]]).

### `cor-euclidean-closed-balls-and-spheres-are-compact` (published-backward, page the-topology-of-euclidean-space)

Title: For $n\\ge1$, every Euclidean closed ball and every Euclidean sphere of positive radius is compact

- [L4] Euclidean open sets are the metric-open sets, and metric boundedness means containment in a ball ([[def-metric-topology]], [[def-metric-bounded-diameter]]).

### `def-equicontinuity` (published-backward, page function-space-topologies)

Title: Equicontinuity at a point, uniform equicontinuity, and pointwise boundedness of a family of maps between metric spaces

- $Y$ ([[def-metric-bounded-diameter]]).

### `ex-a-uniformly-equicontinuous-family-of-lipschitz-functions` (published-backward, page function-space-topologies-examples)

Title: The $1$-Lipschitz maps of a metric space into $\\mathbb{R}$ form a uniformly equicontinuous family, and the distance functions $x \\mapsto d(x,A)$ all belong to it

- $\varphi_A(x) := d(x,A)$ ([[def-metric-bounded-diameter]]) belongs to
- [L2] A family $\mathcal{F}$ is uniformly equicontinuous when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - f(x')| < \varepsilon$ for every $f \in \mathcal{F}$ and all $x,x'$ with $d(x,x') < \delta$; and $\mathcal{F}$ is pointwise bounded when each set $\{\, f(x) : f \in \mathcal{F} \,\}$ is bounded ([[def-equicontinuity]], [[def-metric-uniform-continuity]], [[def-metric-bounded-diameter]]).
- [L3] For nonempty $A \subseteq X$ the function $x \mapsto d(x,A)$ is defined and satisfies $|d(x,A) - d(x',A)| \le d(x,x')$ ([[lem-distance-to-set-is-lipschitz]], [[def-metric-bounded-diameter]]).
- [L4] A subset $S \subseteq \mathbb{R}$ is bounded exactly when it lies in some ball of $\mathbb{R}$, so an unbounded set of reals lies in no ball ([[def-metric-bounded-diameter]], [[lem-real-line-is-a-metric-space]]).

### `ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets` (published-backward, page separation-axioms-examples)

Title: Every nonempty closed subset $A$ of $\\mathbb{R}$ is the zero set of $x \\mapsto d(x, A)$ and the intersection of the open sets $\\{x : d(x,A) < 1/(n+1)\\}$, worked for $[0,1]$ and for $\\{0\\}$

- ([[def-metric-bounded-diameter]]). Then, as the general metric theorem
- [A1] $d(x,A) = \inf\{\, |x-a| : a \in A \,\}$ exists for nonempty $A$, is a lower bound of that set, and is $\le |x-a|$ for every $a \in A$; and any real that is a lower bound of the set is $\le d(x,A)$ ([[def-metric-bounded-diameter]], [[def-infimum]]).

### `ex-the-compact-open-topology-on-the-continuous-functions-of-the-line` (published-backward, page function-space-topologies-examples)

Title: On $C(\\mathbb{R}, \\mathbb{R})$ the compact-open topology has the sets $\\{g : \\sup_{[-m,m]} |f-g| < \\varepsilon\\}$ as a neighbourhood base, and $\\mathbb{R}$ is locally compact so evaluation is continuous

- [L1] A subset of $\mathbb{R}$ is a compact subset exactly when it is closed in $\mathbb{R}$ and bounded, and a bounded subset lies in a ball $B(0,r)$, so $|t| < r$ for each of its points ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-bounded-diameter]], [[def-metric-ball]]).

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- [L5] $[-m,m]$ is a compact subset of $\mathbb{R}$ for every natural $m \ge 1$, and every compact subset of $\mathbb{R}$ lies in some $[-m,m]$; the sets $B_K(g,\varepsilon)$ centred at $g$ are a neighbourhood base at $g$ in the compact-open topology on $C(\mathbb{R},\mathbb{R})$ ([[thm-heine-borel-rn]], [[def-metric-compactness]], [[def-metric-bounded-diameter]], [[thm-compact-open-equals-compact-convergence]], [[def-topology-of-compact-convergence]], fact (U4), [[def-compact-open-topology]]).

### `fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets` (published-backward, page function-space-topologies)

Title: FALSE: a pointwise convergent sequence of continuous functions converges uniformly on every compact set

- [L5] A subset of $\mathbb{R}$ is a compact subset exactly when it is closed in $\mathbb{R}$ and bounded ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-bounded-diameter]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L4] For nonempty $A$ the closure is $\overline{A} = \{\, x : d(x,A) = 0 \,\}$, a closed set equals its closure and contains it, and $d(x,A) \ge 0$ with $d(x,A) \le d(x,a)$ for every $a \in A$; $d(x,A) = 0$ when $x \in A$ ([[thm-metric-closure-characterisation]], [[def-metric-bounded-diameter]], [[def-infimum]]).

### `lem-pseudocompact-euclidean-subset-is-bounded` (published-backward, page the-topology-of-euclidean-space)

Title: A pseudocompact subset of $\\mathbb{R}^n$ is bounded

- [L3] A subset of a metric space is bounded when it is empty or lies in some open ball ([[def-metric-bounded-diameter]]); a bounded set of reals has an upper bound ([[def-bounded-set]]).

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- [L5] For nonempty $A \subseteq Y$ the distance $y \mapsto d(y,A)$ is defined, is $1$-Lipschitz and hence continuous, and satisfies $d(y,A) \le d(y,z)$ for every $z \in A$ ([[def-metric-bounded-diameter]], [[lem-distance-to-set-is-lipschitz]], [[thm-metric-regularity-hierarchy]], [[def-lipschitz-holder-contraction]], [[def-infimum]]).
- - **The cases $K = \varnothing$ and $V = Y$ are disposed of first for a reason.** In both, $S(K,V)$ is the whole space and the distance $d(f[K], Y \setminus V)$ is not defined — in the first because there is no point of $K$ to measure from, in the second because $Y \setminus V$ is empty and this library defines the distance to a set only for a nonempty set ([[def-metric-bounded-diameter]]).

### `thm-metric-spaces-are-completely-normal` (published-backward, page separation-axioms)

Title: In a metric space any two separated sets have disjoint open neighbourhoods, so every metrizable space is completely normal

- [L1] For nonempty $S \subseteq X$ and $x \in X$ the distance $d(x,S) = \inf\{\, d(x,s) : s \in S \,\}$ exists in $\mathbb{R}$, is a lower bound of that set, and satisfies $d(x,S) \ge 0$ ([[def-metric-bounded-diameter]], [[def-infimum]], [[thm-infimum-property]], [[lem-metric-nonnegativity]]).

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal` (published-backward, page separation-axioms)

Title: In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal

- $f(x) = d(x,C)$ ([[def-metric-bounded-diameter]]), and for $C = \varnothing$
- [L1] For nonempty $S \subseteq X$ the distance $d(x,S)$ is defined, is $\ge 0$, and $\overline{S} = \{\, x : d(x,S) = 0 \,\}$ ([[def-metric-bounded-diameter]], [[thm-metric-closure-characterisation]], claim 1).
- - **The empty closed set is not a nuisance to be waved away.** $d(x,\varnothing)$ is undefined in this library, there being no infimum of the empty set ([[def-metric-bounded-diameter]]), so each of the three claims is discharged separately at $C = \varnothing$ by a constant function or by openness.

### `thm-uniform-limit-theorem` (published-backward, page function-space-topologies)

Title: A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

- [L5] For nonempty $A \subseteq Y^{X}$ the closure in $(Y^{X},\bar\rho)$ is $\overline{A} = \{\, u : \bar\rho(u,A) = 0 \,\}$, a set is closed exactly when it equals its closure, and $\varnothing$ is closed ([[thm-metric-closure-characterisation]], [[def-metric-bounded-diameter]], [[def-metric-topology]]).


---

# Citation-precision audit — everything that cites `def-canonical-natural`

## The target, as it actually stands on disk

`items/def-canonical-natural.md` — definition — The canonical natural $\\iota(n) = n \\cdot 1_F$ of a field

#### Definition

Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and
multiplicative identity $1_F$. Define
$\iota : \mathbb{N} \to F$ by recursion on $\mathbb{N}$
([[def-natural-numbers]], [[thm-recursion]]):

$$\iota(0) \;:=\; 0_F, \qquad \iota(n+1) \;:=\; \iota(n) + 1_F .$$

$\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written
$n \cdot 1_F$, and for $n \ge 1$ it is $1_F$ added to itself $n$ times.

**Why the notation is needed at all.** A natural number in this library is a von
Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an
element of $F$. So $1/n$, $n^{\alpha}$ and $x/n$ are not expressions of $F$ when
$n$ is a natural: what they mean is $1/\iota(n)$, $\iota(n)^{\alpha}$ and
$x/\iota(n)$. The map $\iota$ is what carries a counting number into the field,
and writing it is the whole reason a reader meets $1/\iota(k+1)$ where an
informal text would write $1/(k+1)$.

## The 16 citing use(s), quoted verbatim from the citing items

### `cex-compact-convergence-without-uniform-convergence` (published-backward, page function-space-topologies-examples)

Title: Refuted: convergence uniformly on every compact subset of $\\mathbb{R}$ implies uniform convergence. The maps $x \\mapsto x/(n+1)$ separate the two

- $\iota$ being the canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]),
- [L1] $\iota$ is strictly increasing on $\mathbb{N}$ with $\iota(n) > 0$ for $n \ge 1$, and $0 < u \le v$ gives $0 < 1/v \le 1/u$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

### `cex-pointwise-bounded-but-not-equicontinuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: a pointwise bounded family of continuous functions is equicontinuous. The spikes are bounded by $1$ everywhere and are not equicontinuous at $0$

- $a_k := 1/\iota(k+2)$ ([[def-canonical-natural]]),
- [L1] Each $f_k$ is a well-defined continuous function $I \to \mathbb{R}$, $f_k(0) = 0$, $f_k(a_k) = 1$, and $0 < a_k \le 1/2$, so $a_k \in I$ ([[fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets]], [[lem-continuity-is-local-and-pastes]], [[def-canonical-natural]], [[def-metrizable-space]], [[def-metric-space]]).
- [L4] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/\iota(m) < \eta$; $\iota$ is strictly increasing with $\iota(n) > 0$ for $n \ge 1$; and $0 < u \le v$ gives $0 < 1/v \le 1/u$ ([[cor-archimedean-reciprocal]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[def-canonical-natural]]).

### `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: $C(X,Y)$ is closed in the topology of pointwise convergence. The ramps on $[0,1]$ converge pointwise to a discontinuous limit

- $a_k := 1/\iota(k+2)$ ([[def-canonical-natural]]), so that $0 < a_k \le 1/2$,
- [L1] $\iota$ is strictly increasing on $\mathbb{N}$ with $\iota(n) > 0$ for $n \ge 1$, and $0 < u \le v$ gives $0 < 1/v \le 1/u$; hence $0 < a_k \le 1/\iota(2) = 1/2$ and $1/2 \le 1 - a_k < 1$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

### `def-g-delta-and-f-sigma-in-a-topological-space` (published-backward, page separation-axioms)

Title: $G_\\delta$ and $F_\\sigma$ subsets of a topological space, agreeing with the real-line notion

- [[def-canonical-natural]]); and $\{0\}$ is not open because every bounded open

### `def-zero-sets-and-cozero-sets` (published-backward, page separation-axioms)

Title: Zero sets and cozero sets of continuous real-valued functions

- canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]), so that $1/(n+1)$

### `ex-a-uniformly-equicontinuous-family-of-lipschitz-functions` (published-backward, page function-space-topologies-examples)

Title: The $1$-Lipschitz maps of a metric space into $\\mathbb{R}$ form a uniformly equicontinuous family, and the distance functions $x \\mapsto d(x,A)$ all belong to it

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets` (published-backward, page separation-axioms-examples)

Title: Every nonempty closed subset $A$ of $\\mathbb{R}$ is the zero set of $x \\mapsto d(x, A)$ and the intersection of the open sets $\\{x : d(x,A) < 1/(n+1)\\}$, worked for $[0,1]$ and for $\\{0\\}$

- ([[def-canonical-natural]]). Let $A \subseteq \mathbb{R}$ be nonempty and closed,
- - **The index starts at $n = 0$**, where the radius is $1/(0+1) = 1$, so the first set in each intersection is $(-1, 2)$ for $[0,1]$ and $(-1,1)$ for $\{0\}$. Writing $1/n$ instead would divide by zero ([[def-canonical-natural]]).

### `ex-dini-on-the-unit-interval` (published-backward, page function-space-topologies-examples)

Title: Dini's theorem applied to a nondecreasing sequence of piecewise linear approximations on $[0,1]$, and what fails when the limit is not continuous

- $a_k := 1/\iota(k+2)$ ([[def-canonical-natural]]), so $0 < a_k \le 1/2$ and
- [L1] $\iota$ is strictly increasing on $\mathbb{N}$ with $\iota(n) > 0$ for $n \ge 1$, and $0 < u \le v$ gives $0 < 1/v \le 1/u$; hence $0 < a_{k+1} \le a_k \le 1/2$ and $1/2 \le 1 - a_k \le 1 - a_{k+1} < 1$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

### `ex-the-compact-open-topology-on-the-continuous-functions-of-the-line` (published-backward, page function-space-topologies-examples)

Title: On $C(\\mathbb{R}, \\mathbb{R})$ the compact-open topology has the sets $\\{g : \\sup_{[-m,m]} |f-g| < \\varepsilon\\}$ as a neighbourhood base, and $\\mathbb{R}$ is locally compact so evaluation is continuous

- ([[def-interval]], [[def-canonical-natural]]). Then:
- [L3] For every real $x$ there is a natural $m \ge 1$ with $x < \iota(m)$, and $\iota$ is strictly increasing with $\iota(m) > 0$ for $m \ge 1$ ([[thm-of-archimedean]], [[lem-of-naturals-positive]], [[def-canonical-natural]]).

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- **Given:** $\mathbb{R}$ with $d(s,t) = |s-t|$; the product $\mathbb{R} \times \mathbb{R}$ with the product topology; the map $f(x,z) = xz$ and its transpose $F$; and for a natural $m \ge 1$ the interval $[-m,m] = \{\, t : -\iota(m) \le t \le \iota(m) \,\}$ ([[def-interval]], [[def-canonical-natural]]).
- [L6] For every real $x$ there is a natural $m \ge 1$ with $|x| + 1 < \iota(m)$, and $\iota(m) \ge 1 > 0$ for $m \ge 1$ ([[thm-of-archimedean]], [[lem-of-naturals-positive]], [[cor-archimedean-reciprocal]], [[def-canonical-natural]]).

### `ex-the-moving-spike-family-in-the-three-topologies` (published-backward, page function-space-topologies-examples)

Title: The moving spikes on $[0,1]$ converge pointwise to $0$, do not converge uniformly, and do not converge in the topology of compact convergence

- $a_k := 1/\iota(k+2)$ for $k \in \mathbb{N}$ ([[def-canonical-natural]]), and let
- [L1] Each $f_k$ is a well-defined continuous function $I \to \mathbb{R}$, $(f_k)$ converges pointwise to $\mathbf{0}$, $f_k(a_k) = 1$, and $0 < a_k \le 1/2$ ([[fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets]], steps of its refutation, [[lem-continuity-is-local-and-pastes]], [[def-canonical-natural]], [[cor-archimedean-reciprocal]], [[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]], [[def-isometry-and-metric-embedding]]).

### `fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets` (published-backward, page function-space-topologies)

Title: FALSE: a pointwise convergent sequence of continuous functions converges uniformly on every compact set

- **Given:** The interval $X := [0,1] = \{\, t \in \mathbb{R} : 0 \le t \le 1 \,\}$ ([[def-interval]]) with the metric $d(s,t) = |s-t|$ inherited from $\mathbb{R}$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]), the target $Y := \mathbb{R}$ with the same metric, the reals $a_k := 1/\iota(k+2)$ for $k \in \mathbb{N}$ ([[def-canonical-natural]]), and the constant function $\mathbf{0} : X \to \mathbb{R}$ with value $0$.
- [L1] $\iota$ is strictly increasing on $\mathbb{N}$ and $\iota(n) > 0$ for $n \ge 1$, so $0 < a_k \le 1/\iota(2) = 1/2$ and $0 < 2a_k \le 1$ for every $k \in \mathbb{N}$, and $m \le n$ gives $a_n \le a_m$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

### `lem-convergence-in-the-pointwise-topology` (published-backward, page function-space-topologies)

Title: A sequence converges in the topology of pointwise convergence exactly when it converges at every point

- **Given:** A set $X$, a topological space $(Y,\mathcal{T}_Y)$, the space $Y^{X}$ with the topology of pointwise convergence, a sequence $(f_k)$ in $Y^{X}$ and a point $f \in Y^{X}$; $\iota$ is the canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]).
- [L6] For $n \ge 1$ and natural numbers $k_0, \dots, k_{n-1}$ there is an index $j^{\ast} < n$ with $k_j \le k_{j^{\ast}}$ for every $j < n$: the nonempty finite set of reals $\{\iota(k_0), \dots, \iota(k_{n-1})\}$ has a maximum, attained at some index, and $\iota$ is strictly increasing on $\mathbb{N}$, hence reflects the order ([[lem-finite-set-has-max]], [[def-max-min]], [[lem-of-naturals-positive]], [[def-canonical-natural]]).

### `lem-the-k-topology-is-hausdorff-and-not-regular` (published-backward, page separation-axioms)

Title: The $K$-topology on $\\mathbb{R}$, generated by the open intervals together with their complements of $K = \\{1/(n+1) : n \\in \\mathbb{N}\\}$, is $T_1$ and Hausdorff but not regular

- ([[def-canonical-natural]]), so that $1/(n+1)$ abbreviates the inverse of
- - **The index shift is not cosmetic.** $\mathbb{N}$ contains $0$ ([[def-canonical-natural]]), so the set is written $\{1/(n+1) : n \in \mathbb{N}\}$ and its largest element is $1$; writing $\{1/n : n \in \mathbb{N}\}$ would divide by zero.

### `thm-dini` (published-backward, page function-space-topologies)

Title: Dini's theorem: on a compact metric space a nondecreasing sequence of continuous real functions converging pointwise to a continuous limit converges uniformly

- **Given:** A compact metric space $(X,d)$, continuous functions $f_k : X \to \mathbb{R}$ with $f_k(x) \le f_{k+1}(x)$ for all $k$ and $x$, a continuous $f : X \to \mathbb{R}$ with $f_k(x) \to f(x)$ for every $x \in X$, and $\iota$ the canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]).
- [L7] For $n \ge 1$ and natural numbers $k_0, \dots, k_{n-1}$ there is $j^{\ast} < n$ with $k_j \le k_{j^{\ast}}$ for every $j < n$: the nonempty finite set of reals $\{\iota(k_0), \dots, \iota(k_{n-1})\}$ has a maximum, attained at some index, and $\iota$ is strictly increasing on $\mathbb{N}$, hence reflects the order ([[lem-finite-set-has-max]], [[def-max-min]], [[lem-of-naturals-positive]], [[def-canonical-natural]]).

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal` (published-backward, page separation-axioms)

Title: In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal

- natural $\iota(n+1)$ of $\mathbb{R}$ ([[def-canonical-natural]]). Then:
- [L5] For every real $\varepsilon > 0$ there is a natural $k \ge 1$ with $1/k < \varepsilon$, and every nonzero natural is a successor, so $k = n+1$ for some $n \in \mathbb{N}$ ([[cor-archimedean-reciprocal]], [[lem-nat-nonzero-is-successor]], [[def-canonical-natural]]).


---

# Citation-precision audit — everything that cites `def-interior-closure-boundary-top`

## The target, as it actually stands on disk

`items/def-interior-closure-boundary-top.md` — definition — Interior, closure, boundary, exterior, derived set and isolated point in a topological space

#### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), let
$A \subseteq X$ and let $x \in X$. Neighbourhoods are as in
[[def-neighbourhood-top]], so a neighbourhood need not be open.

- The **interior** of $A$ is
  $\operatorname{int}(A) := \bigcup \{\, U \in \mathcal{T} : U \subseteq A \,\}$.
- The **closure** of $A$ is
  $\overline{A} := \bigcap \{\, F \subseteq X : F \text{ closed and } A \subseteq F \,\}$.
- The **exterior** of $A$ is $\operatorname{ext}(A) := \operatorname{int}(X \setminus A)$.
- The **boundary** of $A$ is $\partial A := \overline{A} \setminus \operatorname{int}(A)$.
- $x$ is a **limit point** (accumulation point) of $A$ if every neighbourhood $N$
  of $x$ satisfies $N \cap (A \setminus \{x\}) \ne \varnothing$. The set of limit
  points of $A$ is the **derived set** $A'$.
- $x$ is an **isolated point of $A$** if $x \in A$ and some neighbourhood $N$ of
  $x$ satisfies $N \cap A = \{x\}$.

**Both operators are well posed, and the two names are justified rather than
asserted.** The interior is a union of open sets, hence open by (T2), it is
contained in $A$, and it contains every open $U \subseteq A$: so
$\operatorname{int}(A)$ is *the largest open subset of $A$*. The family being
intersected in the definition of $\overline{A}$ is nonempty, since $X$ is closed
and contains $A$, so the intersection is a set; it is closed by (C2) of
[[def-topological-space]], it contains $A$, and it is contained in every closed
$F \supseteq A$: so $\overline{A}$ is *the smallest closed superset of $A$*. In
particular

$$\operatorname{int}(A) \subseteq A \subseteq \overline{A},$$

and $A$ is open if and only if $A = \operatorname{int}(A)$, and closed if and
only if $A = \overline{A}$, in each case because one inclusion is automatic and
the other says exactly that $A$ belongs to the family in question.

**Interior and closure are exchanged by complementation.** For every
$A \subseteq X$,

$$X \setminus \operatorname{int}(A) = \overline{X \setminus A}, \qquad X \setminus \overline{A} = \operatorname{int}(X \setminus A) = \operatorname{ext}(A).$$

Indeed $U \mapsto X \setminus U$ is a bijection between the open subsets of $A$
and the closed supersets of $X \setminus A$, and it turns unions into
intersections ([[def-topological-space]]); applying complementation to the first
identity gives the second. So $\operatorname{ext}(A) = X \setminus \overline{A}$,
and every statement about interiors has a mirror statement about closures.

**The pointwise description of the interior.** $x \in \operatorname{int}(A)$ if
and only if $A$ is a neighbourhood of $x$. If $x \in \operatorname{int}(A)$ then
$\operatorname{int}(A)$ is an open set with $x \in \operatorname{int}(A) \subseteq A$;
conversely a neighbourhood relation $x \in U \subseteq A$ with $U$ open puts $x$
in the union defining $\operatorname{int}(A)$. The corresponding description of
the closure is proved as the next item, because it is the statement that does the
work in every later proof.

**$X$ is the disjoint union of the three regions.** Since
$\operatorname{int}(A) \subseteq \overline{A}$, the three sets
$\operatorname{int}(A)$, $\partial A = \overline{A} \setminus \operatorname{int}(A)$
and $\operatorname{ext}(A) = X \setminus \overline{A}$ are pairwise disjoint and
their union is $X$. This is recorded again, with the identities for interior and
closure of unions and intersections, in the lemma two items below.

## The 15 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [L6] Normality: two disjoint closed sets have disjoint open supersets. Hausdorff: distinct points have disjoint open neighbourhoods. A set is closed exactly when its complement is open ([[def-normal-and-t4-spaces]], [[def-hausdorff-space]], [[def-topological-space]], [[def-interior-closure-boundary-top]], [[thm-closure-characterisation-top]]).

### `def-separated-sets` (published-backward, page separation-axioms)

Title: Separated sets: $\\overline{A} \\cap B = A \\cap \\overline{B} = \\varnothing$

- ([[def-interior-closure-boundary-top]]). Then $A$ and $B$ are **separated** when

### `def-t0-and-t1-spaces` (published-backward, page separation-axioms)

Title: $T_0$ (Kolmogorov) and $T_1$ (Frechet) spaces

- ([[def-interior-closure-boundary-top]]); that equivalence is the next item and

### `def-urysohn-space` (published-backward, page separation-axioms)

Title: Urysohn ($T_{2\\frac{1}{2}}$) space: distinct points have neighbourhoods with disjoint closures

- closures as in [[def-interior-closure-boundary-top]]. Then $X$ is an **Urysohn

### `ex-sierpinski-space-is-t0-normal-and-not-regular` (published-backward, page separation-axioms-examples)

Title: Sierpinski space is $T_0$ and normal but neither $T_1$ nor regular: normality without $T_1$ implies nothing

- [A2] A set is closed exactly when its complement is open ([[def-topological-space]], [[def-interior-closure-boundary-top]]).

### `ex-the-cocountable-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cocountable topology on $\\mathbb{R}$ is $T_1$, has unique sequential limits, and is neither Hausdorff nor regular nor normal

- [A1] $U \in \mathcal{T}_{\mathrm{coc}}$ exactly when $U = \varnothing$ or $\mathbb{R} \setminus U$ is at most countable; the closed sets are $\mathbb{R}$ and the at most countable subsets ([[def-standard-topologies]], [[def-topological-space]], [[def-interior-closure-boundary-top]]).

### `ex-the-cofinite-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cofinite topology on an infinite set is $T_1$ but neither Hausdorff nor regular nor normal

- [L4] A set is closed exactly when its complement is open ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

### `ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy` (published-backward, page separation-axioms-examples)

Title: A discrete space satisfies every axiom in the chain; an indiscrete space with two points is regular, completely regular, normal, completely normal and perfectly normal, and fails $T_0$

- [L3] $\overline{A} = A$ when $A$ is closed, and $\overline{A}$ is the smallest closed superset of $A$ ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

### `ex-the-particular-point-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The particular-point topology is $T_0$ and not $T_1$, it is not regular once the set has at least two points, and it is not normal once the set has at least three

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `lem-normality-via-shrinking` (published-backward, page separation-axioms)

Title: A space is normal if and only if every closed $A$ inside an open $U$ admits an open $V$ with $A \\subseteq V \\subseteq \\overline{V} \\subseteq U$

- closures as in [[def-interior-closure-boundary-top]]. The following two
- [L1] $\overline{V}$ is the smallest closed superset of $V$: it is closed, contains $V$, and is contained in every closed set containing $V$ ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

### `lem-ordinal-order-topology-is-t3` (published-backward, page separation-axioms)

Title: Every ordinal with its order topology has a basis of clopen sets, and is $T_1$, Hausdorff and regular

- [L6] A closed neighbourhood of a point is a neighbourhood of it that is closed, and $\overline{K} = K$ for such a $K$ ([[def-interior-closure-boundary-top]]).

### `lem-regularity-via-closed-neighbourhoods` (published-backward, page separation-axioms)

Title: A space is regular if and only if every point has a neighbourhood base of closed neighbourhoods, if and only if $x \\in U$ open gives an open $V$ with $x \\in V \\subseteq \\overline{V} \\subseteq U$

- closures as in [[def-interior-closure-boundary-top]] and neighbourhoods as in
- [L2] $\overline{V}$ is the smallest closed superset of $V$: it is closed, contains $V$, and is contained in every closed set containing $V$ ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).
- [L3] $\operatorname{int}(K)$ is the largest open subset of $K$, and $x \in \operatorname{int}(K)$ exactly when $K$ is a neighbourhood of $x$ ([[def-interior-closure-boundary-top]]).

### `lem-urysohn-sits-between-hausdorff-and-regular-plus-t1` (published-backward, page separation-axioms)

Title: Every Urysohn space is Hausdorff, every Hausdorff space is $T_1$ and hence $T_0$, and every regular $T_1$ space is Urysohn

- [L3] $A \subseteq \overline{A}$ for every $A \subseteq X$, and a set is closed exactly when its complement is open ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

### `thm-completely-normal-implies-normal` (published-backward, page separation-axioms)

Title: Every completely normal space is normal, and every perfectly normal space is normal

- [L2] A set is closed exactly when it equals its own closure ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

### `thm-perfectly-normal-implies-completely-normal` (published-backward, page separation-axioms)

Title: Assuming countable choice, every perfectly normal space is completely normal: separated sets in a normal space whose open sets are all $F_\\sigma$ can be separated by disjoint open sets

- [L2] $\overline{S}$ is closed and contains $S$; a set is closed exactly when it equals its closure; a set is closed exactly when its complement is open ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]], [[def-topological-space]]).
