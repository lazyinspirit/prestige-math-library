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

# Citation-precision audit — everything that cites `def-real-order`

## The target, as it actually stands on disk

`items/def-real-order.md` — definition — Order on the reals

#### Definition

A real $x$ is **positive** when it has a representative $(a_n)$ together
with a rational $\delta > 0$ and an index $N$ such that $a_n > \delta$
for all $n \ge N$. Define

$$x \le y \iff x = y \;\text{ or }\; y - x \text{ is positive},$$

and $|x| = x$ if $x \ge 0$, $|x| = -x$ otherwise.

## The 5 citing use(s), quoted verbatim from the citing items

### `def-contractive-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Contractive sequence: $|x_{k+2} - x_{k+1}| \\le c\\,|x_{k+1} - x_k|$ for a fixed $0 < c < 1$

- ([[def-real-order]], [[lem-of-abs-value]]). Such a $c$ is called a **contraction

### `def-interval` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length

- ([[def-real-order]]).

### `def-monotone-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences

- as in [[def-real-order]] and [[def-complete-ordered-field]], and with

### `lem-alternating-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- [L5] Absolute value and field arithmetic: $|-u| = |u|$ ([[lem-of-abs-value]]); $|v| = v$ whenever $v \ge 0$ ([[def-abs-value]], [[def-real-order]]); and $-(-u) = u$ ([[def-field]]).

### `lem-peak-monotone-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every real sequence has a monotone subsequence (the peak / rising-sun lemma)

- [L8] Trichotomy in $\mathbb{R}$: for reals $s, t$ exactly one of $s < t$, $s = t$, $s > t$ holds, so the failure of $x_m \le x_n$ is $x_m > x_n$, and $x_n > x_n$ is impossible ([[def-real-order]], [[def-complete-ordered-field]], [[def-ordered-field]]).


---

# Citation-precision audit — everything that cites `def-compact-space`

## The target, as it actually stands on disk

`items/def-compact-space.md` — definition — Open cover, subcover, and compact topological space; a compact subset is a subspace that is compact in its own right

#### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- An **open cover** of $(X,\mathcal{T})$ is a family
  $\mathcal{U} \subseteq \mathcal{T}$ of open sets with $X = \bigcup \mathcal{U}$,
  where $\bigcup \mathcal{U} = \{\, x \in X : x \in U \text{ for some } U \in \mathcal{U} \,\}$.
- A **subcover** of $\mathcal{U}$ is a subfamily $\mathcal{V} \subseteq \mathcal{U}$
  that is itself an open cover.
- A family $\mathcal{V}$ of sets is **finite** when $\mathcal{V} = \varnothing$ or
  there are $n \in \mathbb{N}$ and sets $V_0, \dots, V_n$ with
  $\mathcal{V} = \{V_0, \dots, V_n\}$; repetitions in the list are allowed and
  harmless.
- $(X,\mathcal{T})$ is **compact** when every open cover of it has a finite
  subcover: for every open cover $\mathcal{U}$, either $X = \varnothing$ and the
  empty subfamily covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$X = U_0 \cup \dots \cup U_n .$$
- A subset $A \subseteq X$ is a **compact subset** of $X$ when the subspace
  $(A, \mathcal{T}_A)$ is a compact topological space, $\mathcal{T}_A$ being the
  subspace topology ([[def-subspace-topology-top]]).

**Compactness of a subset is defined intrinsically, and only intrinsically.**
The last clause speaks about the subspace $(A, \mathcal{T}_A)$ and its own open
sets, not about families of open subsets of the ambient $X$. The two readings do
agree, but that is a theorem and not a convention: it is
[[lem-compactness-of-a-subspace-is-ambient]], and no item of this library may use
the ambient reading without citing it. Taking the intrinsic reading makes
compactness a property of the topological space $(A, \mathcal{T}_A)$ alone.
Hence it is preserved when $A$ is embedded homeomorphically as a subspace, or
when another ambient space induces the same topology on $A$; it need not be
preserved if the induced topology changes. This is exactly the convention already fixed for
metric spaces by [[def-metric-compactness]], and the agreement of that
definition with this one is [[thm-compactness-agrees-with-metric-compactness]].

**The empty space is compact**, since the empty subfamily of any family covers
it; this is the reason the clause above is written with the two cases. Every
space listed as $\{x_0, \dots, x_n\}$ is compact too: given a cover, each $x_i$
lies in some member, and finitely many members named in this way already cover.
So every finite space is compact, whatever its topology, and in particular the
discrete topology on a finite set is compact while the discrete topology on an
infinite set is not ([[def-standard-topologies]]).

**The finiteness convention.** "Finite" above is the listing form. It agrees with
the definition of finiteness by equinumerosity with a natural number
([[def-countable]]), in both directions, and the agreement is the one already
discharged in [[def-metric-compactness]]: a nonempty set equinumerous with
$m \ge 1$ is listable, and a set listed as $\{a_0, \dots, a_n\}$ injects into
$\sigma(n)$ by sending $x$ to the least $i \le n$ with $a_i = x$. Neither
direction uses a choice principle; the second selects nothing, taking a least
index instead.

**Quasicompact is not used here.** Some authors, following Bourbaki, reserve
*compact* for a space that is both compact in the above sense and Hausdorff, and
call the open-cover condition alone *quasicompact*. This library follows the more
widely adopted convention: **compact** means the open-cover condition and nothing
more, and a Hausdorff hypothesis is always written out. The fork is recorded in
[[rem-compactness-conventions-and-choice-ledger]].

## The 5 citing use(s), quoted verbatim from the citing items

### `cex-pseudocompact-noncompact-particular-point-space` (published-backward, page the-topology-of-euclidean-space-examples)

Title: An infinite particular-point space is pseudocompact and not compact

- [L3] A continuous map pulls back open sets to open sets, and compactness means that every open cover has a finite subcover ([[def-continuous-map-top]], [[def-compact-space]]).

### `def-lindelof-degree-and-cellularity` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, Lindelöf degree $L(X)$ and cellularity $c(X)$ as raw cardinal functions

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `fs-lindelofness-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: Lindelöfness is hereditary

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `rem-separation-axiom-conventions` (published-backward, page separation-axioms)

Title: Conventions on this page, and the one implication of the classical chain that is not available at this point in the reading order

- point in the reading order ([[def-compact-space]]), and the two separation

### `thm-compactness-via-nets-filters-and-ultrafilters` (published-backward, page nets-and-filters)

Title: Assuming the ultrafilter lemma, compactness is equivalent to every net having a cluster point, every net having a convergent subnet, every filter having a cluster point, and every ultrafilter converging

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.


---

# Citation-precision audit — everything that cites `def-infimum`

## The target, as it actually stands on disk

`items/def-infimum.md` — definition — Greatest lower bound (infimum)

#### Definition

Let $S \subseteq \mathbb{R}$ and $\ell \in \mathbb{R}$. Then $\ell$ is a
**greatest lower bound**, or **infimum**, of $S$ if both of the following hold:

- $\ell$ is a lower bound of $S$ ([[def-bounded-set]]), that is, $\ell \le s$ for
  every $s \in S$;
- $\ell' \le \ell$ for every lower bound $\ell'$ of $S$.

Written out in one line:

$$\ell \text{ is an infimum of } S \iff \big[(\forall s \in S)\, \ell \le s\big] \text{ and } \big[(\forall \ell' \in \mathbb{R})\, \big((\forall s \in S)\, \ell' \le s\big) \Rightarrow \ell' \le \ell\big].$$

An infimum, when it exists, is unique ([[lem-sup-unique]]), so we may write
$\inf S$ for it.

## The 5 citing use(s), quoted verbatim from the citing items

### `ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets` (published-backward, page separation-axioms-examples)

Title: Every nonempty closed subset $A$ of $\\mathbb{R}$ is the zero set of $x \\mapsto d(x, A)$ and the intersection of the open sets $\\{x : d(x,A) < 1/(n+1)\\}$, worked for $[0,1]$ and for $\\{0\\}$

- [A1] $d(x,A) = \inf\{\, |x-a| : a \in A \,\}$ exists for nonempty $A$, is a lower bound of that set, and is $\le |x-a|$ for every $a \in A$; and any real that is a lower bound of the set is $\le d(x,A)$ ([[def-metric-bounded-diameter]], [[def-infimum]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L4] For nonempty $A$ the closure is $\overline{A} = \{\, x : d(x,A) = 0 \,\}$, a closed set equals its closure and contains it, and $d(x,A) \ge 0$ with $d(x,A) \le d(x,a)$ for every $a \in A$; $d(x,A) = 0$ when $x \in A$ ([[thm-metric-closure-characterisation]], [[def-metric-bounded-diameter]], [[def-infimum]]).

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- [L5] For nonempty $A \subseteq Y$ the distance $y \mapsto d(y,A)$ is defined, is $1$-Lipschitz and hence continuous, and satisfies $d(y,A) \le d(y,z)$ for every $z \in A$ ([[def-metric-bounded-diameter]], [[lem-distance-to-set-is-lipschitz]], [[thm-metric-regularity-hierarchy]], [[def-lipschitz-holder-contraction]], [[def-infimum]]).

### `thm-metric-spaces-are-completely-normal` (published-backward, page separation-axioms)

Title: In a metric space any two separated sets have disjoint open neighbourhoods, so every metrizable space is completely normal

- [L1] For nonempty $S \subseteq X$ and $x \in X$ the distance $d(x,S) = \inf\{\, d(x,s) : s \in S \,\}$ exists in $\mathbb{R}$, is a lower bound of that set, and satisfies $d(x,S) \ge 0$ ([[def-metric-bounded-diameter]], [[def-infimum]], [[thm-infimum-property]], [[lem-metric-nonnegativity]]).

### `thm-uniform-limit-theorem` (published-backward, page function-space-topologies)

Title: A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

- [L6] If $\inf S = 0$ and $\eta > 0$ is real, then some $s \in S$ satisfies $s < \eta$ ([[lem-inf-epsilon]], [[def-infimum]]).


---

# Citation-precision audit — everything that cites `def-nat-order`

## The target, as it actually stands on disk

`items/def-nat-order.md` — definition — Order on the natural numbers

#### Definition

For $m, n \in \mathbb{N}$, define the **order** by

$$m \le n \iff \exists k \in \mathbb{N}\ (m + k = n),$$

and the **strict order** by $m < n \iff (m \le n \text{ and } m \neq n)$, using
addition ([[def-nat-addition]]).

## The 4 citing use(s), quoted verbatim from the citing items

### `def-monotone-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences

- $\mathbb{N}$ ordered as in [[def-nat-order]]. The sequence is:

### `lem-alternating-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- [L3] Order on $\mathbb{N}$: $i < \sigma(i)$ for every $i$, since $\sigma(i) = i + 1$ gives $i \le \sigma(i)$ and $\sigma(i) \ne i$; and the order is transitive and total ([[def-nat-order]], [[def-nat-addition]], [[lem-nat-successor-neq-self]], [[thm-nat-linear-order]]).

### `lem-peak-monotone-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every real sequence has a monotone subsequence (the peak / rising-sun lemma)

- [L6] Order on $\mathbb{N}$: $m < n$ means $m \le n$ and $m \ne n$; the order is total and transitive ([[def-nat-order]], [[thm-nat-linear-order]]).

### `thm-nested-interval-property` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$

- [L9] The order on $\mathbb{N}$ is total and transitive, so any two indices $k, l$ admit an index $m$ with $k \le m$ and $l \le m$, namely the larger of the two ([[def-nat-order]], [[thm-nat-linear-order]]).
