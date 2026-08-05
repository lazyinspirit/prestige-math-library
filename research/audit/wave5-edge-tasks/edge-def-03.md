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

# Citation-precision audit — everything that cites `def-max-min`

## The target, as it actually stands on disk

`items/def-max-min.md` — definition — Maximum and minimum of a set

#### Definition

Let $S \subseteq \mathbb{R}$ and $m \in \mathbb{R}$.

- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \in S$ and $s \le m$
  for every $s \in S$.
- $m$ is a **minimum** (or *least element*) of $S$ if $m \in S$ and $m \le s$
  for every $s \in S$.

A set has at most one maximum: if $m_1$ and $m_2$ are both maxima then
$m_1 \in S$ gives $m_1 \le m_2$ and $m_2 \in S$ gives $m_2 \le m_1$, so
$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy
axiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).
The same argument applies to minima, so we may write $\max S$ and $\min S$.

## The 26 citing use(s), quoted verbatim from the citing items

### `cex-compact-convergence-without-uniform-convergence` (published-backward, page function-space-topologies-examples)

Title: Refuted: convergence uniformly on every compact subset of $\\mathbb{R}$ implies uniform convergence. The maps $x \\mapsto x/(n+1)$ separate the two

- [L6] $\bar d \le d$; $\bar d(u,v) = |u-v|$ whenever $|u-v| \le 1$; $\bar\rho(f,h)$ is the least upper bound of $\{\, \bar d(f(x),h(x)) : x \in \mathbb{R} \,\}$; and convergence in $\bar\rho$ is uniform convergence ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-uniform-convergence-in-the-uniform-metric]], [[lem-finite-set-has-max]], [[def-max-min]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

### `cex-pointwise-bounded-but-not-equicontinuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: a pointwise bounded family of continuous functions is equicontinuous. The spikes are bounded by $1$ everywhere and are not equicontinuous at $0$

- [L2] $0 \le f_k(t) \le 1$ for every $t \in I$ and every $k$: the three formulas take values $t/a_k \in [0,1]$, $2 - t/a_k \in [0,1]$ and $0$ respectively on their pieces ([[def-max-min]], [[lem-finite-set-has-max]], [[def-abs-value]]).

### `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: $C(X,Y)$ is closed in the topology of pointwise convergence. The ramps on $[0,1]$ converge pointwise to a discontinuous limit

- [L7] A two-element set of reals has a maximum and a minimum, each of which is one of the two elements ([[lem-finite-set-has-max]], [[def-max-min]]).

### `def-topology-of-compact-convergence` (published-backward, page function-space-topologies)

Title: The topology of compact convergence on $C(X,Y)$ for metric $X$ and $Y$: uniform convergence on each compact subset of $X$

- [[def-max-min]]) gives $|\varphi(x)-\varphi(a)| < \varepsilon$ whenever
- [[def-max-min]]). Then $h \in B_K(h,\delta)$, and

### `ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets` (published-backward, page separation-axioms-examples)

Title: Every nonempty closed subset $A$ of $\\mathbb{R}$ is the zero set of $x \\mapsto d(x, A)$ and the intersection of the open sets $\\{x : d(x,A) < 1/(n+1)\\}$, worked for $[0,1]$ and for $\\{0\\}$

- [L4] $[0,1] = \{\, t : 0 \le t \le 1 \,\}$ and $(u,v) = \{\, t : u < t < v \,\}$; a two-element set of reals has a minimum ([[def-interval]], [[def-max-min]]).

### `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (published-backward, page function-space-topologies-examples)

Title: $C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology

- [L4] $\bar d \le d$ and $\bar d \le 1$; if $\bar d(u,v) < 1$ then $\bar d(u,v) = d(u,v)$; $\bar\rho(f,g) = \sup\{\, \bar d(f(t),g(t)) : t \in I \,\}$ is an upper bound of that set and the least one ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-finite-set-has-max]], [[def-max-min]]).

### `ex-dini-on-the-unit-interval` (published-backward, page function-space-topologies-examples)

Title: Dini's theorem applied to a nondecreasing sequence of piecewise linear approximations on $[0,1]$, and what fails when the limit is not continuous

- [L9] The maximum and the minimum of a two-element set of reals exist and are among its elements ([[lem-finite-set-has-max]], [[def-max-min]]).

### `ex-the-compact-open-topology-on-the-continuous-functions-of-the-line` (published-backward, page function-space-topologies-examples)

Title: On $C(\\mathbb{R}, \\mathbb{R})$ the compact-open topology has the sets $\\{g : \\sup_{[-m,m]} |f-g| < \\varepsilon\\}$ as a neighbourhood base, and $\\mathbb{R}$ is locally compact so evaluation is continuous

- [L7] The maximum of a two-element set of reals exists and is one of them ([[lem-finite-set-has-max]], [[def-max-min]]).

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- [L1] The product topology on $\mathbb{R} \times \mathbb{R} = \prod_{k<2}\mathbb{R}$ is the metric topology of $d_\infty\big((x,z),(x',z')\big) = \max\{|x-x'|, |z-z'|\}$ ([[lem-product-topology-on-rn]], [[lem-metrics-on-rn]], [[def-product-topology]], [[def-metric-topology]], [[def-metrizable-space]], [[def-max-min]], [[lem-finite-set-has-max]]).

### `ex-the-moving-spike-family-in-the-three-topologies` (published-backward, page function-space-topologies-examples)

Title: The moving spikes on $[0,1]$ converge pointwise to $0$, do not converge uniformly, and do not converge in the topology of compact convergence

- [L2] $0 \le f_k(t) \le 1$ for every $t \in I$: on $[0,a_k]$ the value $t/a_k$ lies between $0$ and $1$, on $[a_k,2a_k]$ the value $2 - t/a_k$ does, and on $[2a_k,1]$ it is $0$ ([[def-max-min]], [[lem-finite-set-has-max]]).
- [L3] $\bar d(u,v) = \min\{|u-v|, 1\}$ equals $|u-v|$ whenever $|u-v| \le 1$, and $\bar\rho(g,h)$ is the least upper bound of $\{\, \bar d(g(t),h(t)) : t \in I \,\}$ ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-finite-set-has-max]], [[def-max-min]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

### `fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets` (published-backward, page function-space-topologies)

Title: FALSE: a pointwise convergent sequence of continuous functions converges uniformly on every compact set

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L9] The minimum of a two-element set of reals exists, is one of them, and is at most each of them ([[lem-finite-set-has-max]], [[def-max-min]]).

### `lem-cauchy-sequence-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every Cauchy sequence of reals is bounded

- [L2] Every nonempty finite list of reals has a maximum, so $\max\{a_0, \dots, a_n\}$ is a well-determined real that dominates each listed value ([[lem-finite-set-has-max]], [[def-max-min]]).

### `lem-compact-closed-balls-in-a-locally-compact-metric-space` (published-backward, page function-space-topologies)

Title: In a locally compact metric space every point has arbitrarily small compact closed balls, hence a neighbourhood base of compact sets

- [L7] The minimum of a two-element set of reals exists and is one of the two elements ([[lem-finite-set-has-max]], [[def-max-min]]).

### `lem-convergence-in-the-pointwise-topology` (published-backward, page function-space-topologies)

Title: A sequence converges in the topology of pointwise convergence exactly when it converges at every point

- [L6] For $n \ge 1$ and natural numbers $k_0, \dots, k_{n-1}$ there is an index $j^{\ast} < n$ with $k_j \le k_{j^{\ast}}$ for every $j < n$: the nonempty finite set of reals $\{\iota(k_0), \dots, \iota(k_{n-1})\}$ has a maximum, attained at some index, and $\iota$ is strictly increasing on $\mathbb{N}$, hence reflects the order ([[lem-finite-set-has-max]], [[def-max-min]], [[lem-of-naturals-positive]], [[def-canonical-natural]]).

### `lem-the-k-topology-is-hausdorff-and-not-regular` (published-backward, page separation-axioms)

Title: The $K$-topology on $\\mathbb{R}$, generated by the open intervals together with their complements of $K = \\{1/(n+1) : n \\in \\mathbb{N}\\}$, is $T_1$ and Hausdorff but not regular

- [L5] A two-element set of reals has a maximum and a minimum, each of which is one of the two elements ([[def-max-min]], [[lem-finite-set-has-max]]).

### `lem-uniform-convergence-in-the-uniform-metric` (published-backward, page function-space-topologies)

Title: Convergence in the uniform metric is exactly uniform convergence: one $N$ serving every point

- [L1] $\bar d(u,v) \le d(u,v)$ and $\bar d(u,v) \le 1$ for all $u,v \in Y$, the minimum of a two-element set of reals being a lower bound of both elements and one of them ([[lem-bounded-remetrisation]], [[lem-finite-set-has-max]], [[def-max-min]]).
- [L2] If $\bar d(u,v) < 1$ then $\bar d(u,v) = d(u,v)$: the minimum $\min\{d(u,v),1\}$ is one of its two arguments, and it is not $1$, so it is $d(u,v)$ ([[lem-finite-set-has-max]], [[def-max-min]], [[lem-bounded-remetrisation]]).
- [L5] The minimum of two positive reals is positive, and halving a positive real gives a positive real strictly below it ([[lem-finite-set-has-max]], [[def-max-min]], [[def-ordered-field]], [[def-complete-ordered-field]]).

### `lem-uniform-metric-on-a-function-space` (published-backward, page function-space-topologies)

Title: For a nonempty set $X$ and a metric space $(Y,d)$ the uniform metric $\\bar\\rho(f,g) = \\sup_{x} \\min\\{d(f(x),g(x)), 1\\}$ is a metric on $Y^{X}$

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- [L9] The minimum of a two-element set of reals exists and is one of the two elements; balls are open and $y \in B(y,s)$ ([[lem-finite-set-has-max]], [[def-max-min]], [[thm-metric-open-set-algebra]], [[def-metric-ball]], [[def-metrizable-space]]).

### `thm-comparison-of-the-three-function-space-topologies` (published-backward, page function-space-topologies)

Title: On $C(X,Y)$ with $X$ and $Y$ metric, uniform convergence is finer than compact convergence, which is finer than pointwise convergence

- [L7] $\bar d \le d$ and $\bar d \le 1$; if $\bar d(u,v) < 1$ then $\bar d(u,v) = d(u,v)$; and $\bar d(g(x),h(x)) \le \bar\rho(g,h)$ for every $x$ ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-finite-set-has-max]], [[def-max-min]]).

### `thm-dini` (published-backward, page function-space-topologies)

Title: Dini's theorem: on a compact metric space a nondecreasing sequence of continuous real functions converging pointwise to a continuous limit converges uniformly

- [L7] For $n \ge 1$ and natural numbers $k_0, \dots, k_{n-1}$ there is $j^{\ast} < n$ with $k_j \le k_{j^{\ast}}$ for every $j < n$: the nonempty finite set of reals $\{\iota(k_0), \dots, \iota(k_{n-1})\}$ has a maximum, attained at some index, and $\iota$ is strictly increasing on $\mathbb{N}$, hence reflects the order ([[lem-finite-set-has-max]], [[def-max-min]], [[lem-of-naturals-positive]], [[def-canonical-natural]]).

### `thm-evaluation-is-continuous-on-a-locally-compact-metric-domain` (published-backward, page function-space-topologies)

Title: If $X$ is a locally compact metric space then the evaluation map is continuous for the compact-open topology

- [L6] The minimum of a two-element set of reals exists, is one of the two elements and is at most each of them ([[lem-finite-set-has-max]], [[def-max-min]]).

### `thm-function-space-is-complete-for-a-complete-target` (published-backward, page function-space-topologies)

Title: If $(Y,d)$ is complete then $Y^{X}$ is complete in the uniform metric, and so is $C(X,Y)$

- [L1] $\bar d \le d$ and $\bar d \le 1$; if $\bar d(u,v) < 1$ then $\bar d(u,v) = d(u,v)$; and $\bar d(u(x),v(x)) \le \bar\rho(u,v)$ for every $x \in X$, while any real bounding all the values $\bar d(u(x),v(x))$ above bounds $\bar\rho(u,v)$ ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-finite-set-has-max]], [[def-max-min]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

### `thm-metric-spaces-are-completely-normal` (published-backward, page separation-axioms)

Title: In a metric space any two separated sets have disjoint open neighbourhoods, so every metrizable space is completely normal

- [L6] A two-element set of reals has a maximum, which is one of the two and is at least the other ([[def-max-min]]).

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal` (published-backward, page separation-axioms)

Title: In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal

- [L6] A two-element set of reals has a maximum and a minimum, each of which is one of the two elements ([[def-max-min]], [[lem-finite-set-has-max]]); and $[0,1]$ is the set of reals $t$ with $0 \le t \le 1$ ([[def-interval]]).

### `thm-uniform-limit-theorem` (published-backward, page function-space-topologies)

Title: A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

- [L7] $\bar d \le d$ and $\bar d \le 1$; if $\bar d(u,v) < 1$ then $\bar d(u,v) = d(u,v)$; and $\bar d(u(x),v(x)) \le \bar\rho(u,v)$ for every $x \in X$ ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-finite-set-has-max]], [[def-max-min]]).


---

# Citation-precision audit — everything that cites `def-standard-topologies`

## The target, as it actually stands on disk

`items/def-standard-topologies.md` — definition — The discrete, indiscrete, cofinite, cocountable, particular-point and Sierpinski topologies

#### Definition

Throughout, a topology is as in [[def-topological-space]], and *finite*,
*at most countable* and *uncountable* are as in [[def-countable]], so that
"countable" always means "at most countable" and every finite set is countable.
Let $X$ be a set. The six families below are topologies on $X$; that each really
satisfies (T1), (T2) and (T3) is discharged in full after the list.

1. **Discrete topology.** $\mathcal{T}_{\mathrm{disc}} := \mathcal{P}(X)$: every
   subset is open, hence every subset is closed, hence every subset is clopen.
2. **Indiscrete topology.** $\mathcal{T}_{\mathrm{ind}} := \{\varnothing, X\}$.
   Its closed sets are again $\varnothing$ and $X$.
3. **Cofinite topology.**
   $\mathcal{T}_{\mathrm{cof}} := \{\varnothing\} \cup \{\, U \subseteq X : X \setminus U \text{ is finite} \,\}$.
   Its closed sets are $X$ together with the finite subsets of $X$.
4. **Cocountable topology.**
   $\mathcal{T}_{\mathrm{coc}} := \{\varnothing\} \cup \{\, U \subseteq X : X \setminus U \text{ is at most countable} \,\}$.
   Its closed sets are $X$ together with the at most countable subsets of $X$.
5. **Particular-point topology.** Fix $p \in X$ and put
   $\mathcal{T}_p := \{\varnothing\} \cup \{\, U \subseteq X : p \in U \,\}$: the
   open sets are $\varnothing$ and the sets containing $p$. Its closed sets are
   $X$ together with the sets **not** containing $p$.
6. **Sierpinski topology.** On a two-point set $S = \{a, b\}$ with $a \ne b$,
   $\mathcal{T}_{\mathrm{Sier}} := \{\varnothing, \{b\}, S\}$. The pair
   $(S, \mathcal{T}_{\mathrm{Sier}})$ is **Sierpinski space**; $b$ is its open
   point and $a$ its closed point. This is exactly the particular-point topology
   of item 5 on a two-point set with particular point $b$, listed separately
   because it is quoted so often.

**Two elementary facts about finite sets are used below, and both are proved
here.**

*(i) A subset of a finite set is finite.* Let $F \approx n$ with $n \in \mathbb{N}$
([[def-equinumerous]], [[def-natural-numbers]]), witnessed by a bijection
$\varphi : F \to n$, and let $B \subseteq F$. Then $\varphi$ restricts to a
bijection of $B$ onto $\varphi[B] \subseteq n$
([[def-injection-surjection-bijection]]). Every element of the von Neumann natural
$n$ is a natural number strictly smaller than $n$
([[lem-nat-order-is-membership]]), so $\varphi[B]$ is a subset of $\mathbb{N}$
bounded above by $n$, hence finite by the sharper form of
[[lem-subset-of-countable]] ("a subset $S \subseteq \mathbb{N}$ is finite if it is
bounded above"). Since $\approx$ is symmetric and transitive, $B$ is finite.

*(ii) A union of two finite sets is finite.* First, if $H$ is finite and $g$ is
any object then $H \cup \{g\}$ is finite: if $g \in H$ there is nothing to prove,
and otherwise a bijection $u : H \to k$ extends to a bijection
$H \cup \{g\} \to k \cup \{k\} = \sigma(k)$ by setting $u(g) := k$, which is
injective because $k \notin k$ ([[lem-nat-transitive-irreflexive]]). Now fix a
finite set $F$ and argue by induction ([[thm-induction-principle]]) on
$m \in \mathbb{N}$ over the statement "for every $G$ with $G \approx m$, the union
$F \cup G$ is finite". At $m = 0$ we have $G = \varnothing$ and $F \cup G = F$. At
$m = \sigma(j)$, a bijection $\psi : G \to \sigma(j)$ gives $g := \psi^{-1}(j)$
and $G' := G \setminus \{g\} \approx j$ (restrict $\psi$), so
$F \cup G = (F \cup G') \cup \{g\}$ is finite by the induction hypothesis and the
previous sentence.

**Discharge of the topology axioms.**

*Discrete.* Every subset of $X$ lies in $\mathcal{P}(X)$, so (T1), (T2) and (T3)
hold with nothing to check.

*Indiscrete.* (T1) is the definition. For (T2), a subfamily of
$\{\varnothing, X\}$ has union $\varnothing$ (if it is empty or $\{\varnothing\}$)
or $X$ (otherwise). For (T3), $\varnothing \cap A = \varnothing$ and
$X \cap X = X$.

*Cofinite.* (T1): $\varnothing$ is listed, and $X \setminus X = \varnothing$ is
finite. (T2): let $\mathcal{S} \subseteq \mathcal{T}_{\mathrm{cof}}$. If every
member is $\varnothing$ the union is $\varnothing$. Otherwise fix
$U_0 \in \mathcal{S}$ with $U_0 \ne \varnothing$; then
$X \setminus \bigcup \mathcal{S} \subseteq X \setminus U_0$, which is finite, so
the left side is finite by (i). (T3): for nonempty $U, V$ with finite
complements, $X \setminus (U \cap V) = (X \setminus U) \cup (X \setminus V)$ is
finite by (ii); and if either of $U, V$ is empty so is $U \cap V$. The closed sets
are the complements of the open ones, that is $X = X \setminus \varnothing$
together with the finite sets.

*Cocountable.* Identical to the cofinite case with "at most countable" in place of
"finite": (i) is replaced by [[lem-subset-of-countable]] itself, and (ii) by the
statement that a union of two at most countable sets is at most countable, which
is the two-set instance of [[thm-countable-union-of-countable]] applied to the
family $A_0 := U, A_1 := V, A_k := \varnothing$ for $k \ge 2$.

*Particular point.* (T1): $\varnothing$ is listed and $p \in X$. (T2): a
subfamily whose members are all $\varnothing$ has union $\varnothing$; otherwise
some member contains $p$, hence so does the union. (T3): if $U$ and $V$ both
contain $p$ then so does $U \cap V$; and if either is $\varnothing$ then so is the
intersection.

*Sierpinski.* The special case $X = \{a,b\}$, $p = b$ of the previous paragraph:
the sets containing $b$ are $\{b\}$ and $S$, so
$\mathcal{T}_b = \{\varnothing, \{b\}, S\} = \mathcal{T}_{\mathrm{Sier}}$.

## The 25 citing use(s), quoted verbatim from the citing items

### `cex-pseudocompact-noncompact-particular-point-space` (published-backward, page the-topology-of-euclidean-space-examples)

Title: An infinite particular-point space is pseudocompact and not compact

- [L1] The particular-point topology is a topology and has exactly the stated open sets ([[def-standard-topologies]]).

### `def-completely-regular-and-tychonoff-spaces` (published-backward, page separation-axioms)

Title: Completely regular spaces and Tychonoff ($T_{3\\frac{1}{2}}$) spaces

- on a two-point set ([[def-standard-topologies]]) is completely regular, its only

### `def-normal-and-t4-spaces` (published-backward, page separation-axioms)

Title: Normal spaces and $T_4$ spaces, with the source disagreement over whether normality includes $T_1$ stated explicitly

- indiscrete topology on a two-point set ([[def-standard-topologies]]) is normal,

### `def-order-topology-on-an-ordinal` (published-backward, page separation-axioms)

Title: The order topology on an ordinal, with the half-open intervals $(\\alpha, \\beta]$ and the initial segments $[0, \\beta]$ as a basis

- carries the discrete topology ([[def-standard-topologies]]).

### `def-regular-and-t3-spaces` (published-backward, page separation-axioms)

Title: Regular spaces and $T_3$ spaces, with the source disagreement over whether regularity includes $T_1$ stated explicitly

- ([[def-standard-topologies]]), and the cofinite topology on an infinite set is

### `def-t0-and-t1-spaces` (published-backward, page separation-axioms)

Title: $T_0$ (Kolmogorov) and $T_1$ (Frechet) spaces

- $(\{a,b\}, \{\varnothing, \{b\}, \{a,b\}\})$ of [[def-standard-topologies]] the

### `ex-cardinal-functions-of-a-one-point-compactification` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: The one-point compactification of the discrete real line is compact and Lindelöf but is neither first countable nor separable

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-cardinal-functions-of-an-uncountable-discrete-space` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: Under choice, for an infinite discrete space of cardinality $\\kappa$, $w=d=L=c=\\kappa$ while $\\chi=1$

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-cocountable-closure-detected-by-a-net-not-a-sequence` (published-backward, page nets-and-filters-examples)

Title: In the cocountable topology on $\\mathbb{R}$, a closure point outside $[0,1]$ is reached by a net in $[0,1]$ but by no sequence in $[0,1]$

- [L1] Nonempty cocountable opens have at most countable complements ([[def-standard-topologies]], [[def-countable]]).

### `ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence` (published-backward, page nets-and-filters-examples)

Title: The coordinate-reading sequence in a compact binary cube has a convergent subnet but no convergent subsequence

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-sierpinski-space-is-t0-normal-and-not-regular` (published-backward, page separation-axioms-examples)

Title: Sierpinski space is $T_0$ and normal but neither $T_1$ nor regular: normality without $T_1$ implies nothing

- ([[def-standard-topologies]]), so that $b$ is the open point and $a$ the closed
- [A1] $\mathcal{T}_{\mathrm{Sier}}$ is a topology on $S$ and its members are exactly $\varnothing$, $\{b\}$ and $S$ ([[def-standard-topologies]], [[def-topological-space]]).
- - **Why "the closed point" is the right name for $a$.** $\{a\}$ is closed and $\{b\}$ is not, so the two points of $S$ are not interchangeable even though the set has only two elements; the labelling is fixed once and for all in [[def-standard-topologies]].

### `ex-the-cocountable-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cocountable topology on $\\mathbb{R}$ is $T_1$, has unique sequential limits, and is neither Hausdorff nor regular nor normal

- ([[def-standard-topologies]]), whose closed sets are $\mathbb{R}$ together with
- [A1] $U \in \mathcal{T}_{\mathrm{coc}}$ exactly when $U = \varnothing$ or $\mathbb{R} \setminus U$ is at most countable; the closed sets are $\mathbb{R}$ and the at most countable subsets ([[def-standard-topologies]], [[def-topological-space]], [[def-interior-closure-boundary-top]]).
- [L3] A union of two at most countable sets is at most countable: this is the two-set instance of [[thm-countable-union-of-countable]] padded with copies of $\varnothing$, and it needs no choice principle, as [[def-standard-topologies]] records.
- - **On an at most countable set the cocountable topology is discrete** ([[def-standard-topologies]]), so the uncountability of $\mathbb{R}$ is doing real work here and not merely supplying a familiar underlying set.

### `ex-the-cofinite-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cofinite topology on an infinite set is $T_1$ but neither Hausdorff nor regular nor normal

- ([[def-standard-topologies]]), whose closed sets are $X$ together with the finite
- [A1] $U \in \mathcal{T}_{\mathrm{cof}}$ exactly when $U = \varnothing$ or $X \setminus U$ is finite; the closed sets are $X$ and the finite subsets of $X$; and a union of two finite sets is finite ([[def-standard-topologies]], facts (i) and (ii) of that item, [[def-topological-space]]).
- [L3] A set with at most one element is finite, being equinumerous with $0$ or with $1$; so an infinite set has at least three distinct points, since a set with at most two elements is finite as a union of two sets each with at most one ([[def-countable]], [[def-standard-topologies]], fact (ii)).
- - **The hypothesis that $X$ is infinite is necessary.** On a finite set the cofinite topology is the discrete one ([[def-standard-topologies]]), which satisfies every axiom on the main page.

### `ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy` (published-backward, page separation-axioms-examples)

Title: A discrete space satisfies every axiom in the chain; an indiscrete space with two points is regular, completely regular, normal, completely normal and perfectly normal, and fails $T_0$

- $\mathcal{T}_{\mathrm{ind}} = \{\varnothing, Y\}$ ([[def-standard-topologies]]).
- [A1] In $(X,\mathcal{T}_{\mathrm{disc}})$ every subset is open and every subset is closed ([[def-standard-topologies]], [[def-topological-space]]).
- [A2] In $(Y,\mathcal{T}_{\mathrm{ind}})$ the open sets are $\varnothing$ and $Y$, and so are the closed sets ([[def-standard-topologies]], [[def-topological-space]]).
- - **The two extremes bracket the whole page.** Every topology on a set lies between the indiscrete and the discrete one in the comparison order ([[def-standard-topologies]]), and the two ends of that order sit at opposite ends of the separation hierarchy: the discrete topology satisfies everything, the indiscrete topology on two points satisfies every unnumbered adjective and no numbered axiom at all.

### `ex-the-particular-point-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The particular-point topology is $T_0$ and not $T_1$, it is not regular once the set has at least two points, and it is not normal once the set has at least three

- ([[def-standard-topologies]]), whose closed sets are $X$ together with the
- [A1] $U \in \mathcal{T}_p$ exactly when $U = \varnothing$ or $p \in U$; the closed sets are $X$ and the subsets not containing $p$ ([[def-standard-topologies]], [[def-topological-space]]).
- - **Sierpinski space is the case of two points.** With $X = \{p, x\}$ the open sets are $\varnothing$, $\{p\}$ and $X$, which is [[def-standard-topologies]]'s Sierpinski topology with the open point named $p$; so clause 4 genuinely needs its extra hypothesis.

### `fs-every-normal-space-is-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: every normal space is Hausdorff, so the $T_1$ hypothesis in $T_4$ is redundant

- $X = \{a, b\}$ with $a \ne b$ ([[def-standard-topologies]]). It is normal,
- [L1] The closed sets of $\mathcal{T}_{\mathrm{ind}}$ are $\varnothing$ and $X$ ([[def-standard-topologies]], [[def-topological-space]]).

### `fs-every-subnet-of-a-sequence-is-a-subsequence` (published-backward, page nets-and-filters)

Title: FALSE: every subnet of a sequence is a subsequence

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `fs-every-t1-space-is-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: every $T_1$ space is Hausdorff

- $\mathbb{R}$ ([[def-standard-topologies]]), whose open sets are $\varnothing$
- [L1] $\mathcal{T}_{\mathrm{cof}}$ consists of $\varnothing$ together with the sets whose complement is finite; a union of two finite sets is finite ([[def-standard-topologies]], facts (i) and (ii) of that item).

### `fs-first-countable-spaces-are-second-countable` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: every first countable space is second countable

- [L1] Every subset of a discrete space is open ([[def-standard-topologies]]).

### `fs-lindelofness-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: Lindelöfness is hereditary

- [L3] The real line is uncountable and every subset of a discrete space is open ([[thm-r-uncountable]], [[def-standard-topologies]]).

### `fs-second-countability-is-arbitrarily-productive` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming choice and countable choice, refuted: arbitrary products of second countable spaces are second countable

- [L1] The two-point discrete space is second countable, and the product topology on the family of those factors is the Cantor cube $2^I$ ([[def-standard-topologies]], [[def-product-topology]]).

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- [L2] A map out of a space in which every subset is open is continuous, every preimage being open ([[def-continuous-map-top]], [[def-standard-topologies]], [[def-topological-space]]).

### `fs-unique-sequential-limits-imply-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: a space in which every sequence has at most one limit is Hausdorff

- $\mathbb{R}$ ([[def-standard-topologies]]), whose open sets are $\varnothing$
- [A1] $\mathcal{T}_{\mathrm{coc}}$ consists of $\varnothing$ together with the sets whose complement in $\mathbb{R}$ is at most countable; its closed sets are $\mathbb{R}$ and the at most countable sets ([[def-standard-topologies]]).
- [L2] A union of two at most countable sets is at most countable; this is the two-set instance of [[thm-countable-union-of-countable]], padded with copies of $\varnothing$, and it needs no choice principle, exactly as [[def-standard-topologies]] records for the cocountable topology itself.

### `thm-cantor-cubes-are-ccc` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, every Cantor cube $2^I$ satisfies ccc

- [F1] A basic cylinder specifies values in only finitely many coordinates, and these cylinders form a basis for the product topology ([[def-product-topology]], [[def-standard-topologies]]).

### `thm-t1-iff-singletons-are-closed` (published-backward, page separation-axioms)

Title: A space is $T_1$ if and only if every singleton is closed, if and only if every finite subset is closed, if and only if its topology contains the cofinite topology

- ([[def-standard-topologies]]). The following four conditions are equivalent.
- [L3] The cofinite topology on $X$ consists of $\varnothing$ together with the sets whose complement in $X$ is finite; its closed sets are $X$ together with the finite subsets of $X$ ([[def-standard-topologies]]).


---

# Citation-precision audit — everything that cites `def-interval`

## The target, as it actually stands on disk

`items/def-interval.md` — definition — Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length

#### Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]).

A subset $I \subseteq \mathbb{R}$ is **order-convex** when

$$x, y \in I \text{ and } x \le z \le y \;\Longrightarrow\; z \in I .$$

The **intervals** of $\mathbb{R}$ are the sets of the following nine forms, where
$a, b \in \mathbb{R}$:

| | bounded forms | | one-sided and full forms |
|---|---|---|---|
| $(a,b)$ | $\{x : a < x < b\}$ | $(a,\infty)$ | $\{x : a < x\}$ |
| $[a,b]$ | $\{x : a \le x \le b\}$ | $[a,\infty)$ | $\{x : a \le x\}$ |
| $[a,b)$ | $\{x : a \le x < b\}$ | $(-\infty,b)$ | $\{x : x < b\}$ |
| $(a,b]$ | $\{x : a < x \le b\}$ | $(-\infty,b]$ | $\{x : x \le b\}$ |
| | | $(-\infty,\infty)$ | $\mathbb{R}$ |

An interval is **open** when both of its written endpoints are excluded, that is
for the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)$; it is
**closed** when both written endpoints are included, that is for $[a,b]$,
$[a,\infty)$, $(-\infty,b]$ and $(-\infty,\infty)$. The forms $[a,b)$ and
$(a,b]$ are **half-open**.

**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.** They
mark which side carries no endpoint condition at all; the five forms in the right
column are defined by the displayed conditions on $x$ alone, and no arithmetic is
ever performed with $\infty$. This is the same refusal to extend $\mathbb{R}$
silently that [[rem-sup-conventions]] records for suprema.

**Every one of the nine forms is order-convex.** Each is defined by a conjunction
of at most two conditions, each of the shape $a < x$, $a \le x$, $x < b$ or
$x \le b$, and each such condition is inherited by an intermediate point: if
$a < x$ and $x \le z$ then $a < z$, and if $z \le y$ and $y < b$ then $z < b$,
by transitivity of the order ([[def-ordered-field]]). Applying this to whichever
one or two conditions define the form in question gives $z \in I$ whenever
$x, y \in I$ and $x \le z \le y$.

**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly
when it is of one of the four forms in the left column: for those, $a$ is a lower
bound and $b$ an upper bound. The other five forms are unbounded, on the side or
sides written with $\infty$; the verification is in the remarks below.

**Nondegeneracy.** An interval is **degenerate** when it has at most one element,
and **nondegenerate** when it has at least two. For the four bounded forms with
endpoints $a$ and $b$:

- $[a,b]$ is nonempty exactly when $a \le b$, and it is nondegenerate exactly
  when $a < b$. It is the singleton $\{a\}$ when $a = b$.
- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each
  is nondegenerate.

The only assertion here that is not immediate from the defining conditions is
that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because
$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to
both sides and halving ([[def-ordered-field]]); repeating the halving inside
$(a, (a+b)/2)$ produces a second point.

**Closed bounded intervals.** These are the sets $[a,b]$ with $a \le b$, which is
exactly the condition making them nonempty. They are the intervals the nested
interval property is stated for, and the phrase *closed bounded interval* always
carries the hypothesis $a \le b$ in this library.

**Length.** The **length** of a bounded interval presented by its endpoints
$a \le b$ is

$$\ell = b - a \;\ge\; 0 .$$

Length is attached to the presentation by endpoints and is not recovered from the
set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is
$(c,c)$ for any other $c$, while each of these presentations has length $0$, so
nothing inconsistent arises; but the endpoints are named explicitly at every
point where a length is used in this library, and never inferred from the set.
Unbounded intervals are assigned no length.

## The 24 citing use(s), quoted verbatim from the citing items

### `cex-compact-convergence-without-uniform-convergence` (cross-batch, page function-space-topologies-examples)

Title: Refuted: convergence uniformly on every compact subset of $\\mathbb{R}$ implies uniform convergence. The maps $x \\mapsto x/(n+1)$ separate the two

- [L4] A compact subset of $\mathbb{R}$ is closed and bounded, and a bounded subset lies in some ball $B(0,r)$, so $|x| < r$ for all its points ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-bounded-diameter]], [[def-metric-ball]], [[def-metric-topology]], [[def-interval]]).

### `cex-pointwise-bounded-but-not-equicontinuous` (cross-batch, page function-space-topologies-examples)

Title: Refuted: a pointwise bounded family of continuous functions is equicontinuous. The spikes are bounded by $1$ everywhere and are not equicontinuous at $0$

- **Given:** $I = [0,1]$ with the metric $d(s,t) = |s-t|$ inherited from $\mathbb{R}$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-interval]]), the target $\mathbb{R}$ with the same metric, the reals $a_k = 1/\iota(k+2)$, the spikes $f_k$ displayed above and the family $\mathcal{F} = \{\, f_k : k \in \mathbb{N} \,\}$.

### `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous` (cross-batch, page function-space-topologies-examples)

Title: Refuted: $C(X,Y)$ is closed in the topology of pointwise convergence. The ramps on $[0,1]$ converge pointwise to a discontinuous limit

- **Given:** $I = [0,1]$ with the metric $d(s,t) = |s-t|$ inherited from $\mathbb{R}$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-interval]]), the target $\mathbb{R}$ with the same metric, the reals $a_k = 1/\iota(k+2)$, the ramps $r_k$ and the indicator $\chi$ displayed above.

### `def-completely-regular-and-tychonoff-spaces` (cross-batch, page separation-axioms)

Title: Completely regular spaces and Tychonoff ($T_{3\\frac{1}{2}}$) spaces

- $\mathbb{R}$ ([[def-interval]], [[def-subspace-topology-top]],

### `def-g-delta-and-f-sigma-in-a-topological-space` (cross-batch, page separation-axioms)

Title: $G_\\delta$ and $F_\\sigma$ subsets of a topological space, agreeing with the real-line notion

- ([[def-interval]], [[lem-real-line-is-a-metric-space]], claim 3). Complementing,

### `def-polygonal-path-and-polygonal-connectedness` (cross-batch, page the-topology-of-euclidean-space)

Title: Polygonal paths and polygonally connected subsets of $\\mathbb{R}^n$

- Let $A\subseteq\mathbb{R}^n$. A **polygonal path in $A$** from $x$ to $y$ is a path $\gamma:[0,1]\to A$ ([[def-path-connected]], [[def-interval]]) for which there are a finite list of vertices $v_0,\ldots,v_m\in A$ and a partition $0=t_0<t_1<\cdots<t_m=1$ such that $v_0=x$, $v_m=y$, and

### `def-zero-sets-and-cozero-sets` (cross-batch, page separation-axioms)

Title: Zero sets and cozero sets of continuous real-valued functions

- one. Where the target is written $[0,1]$ ([[def-interval]]) with its subspace
- $\mathbb{R} \setminus \{0\}$ ([[def-interval]], [[lem-real-line-is-a-metric-space]],

### `ex-cardinal-functions-of-the-lower-limit-line` (cross-batch, page countability-axioms-and-cardinal-functions-examples)

Title: For the lower-limit line, $\\chi=d=L=c=\\aleph_0$ and $w=2^{\\aleph_0}$ under choice

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets` (cross-batch, page separation-axioms-examples)

Title: Every nonempty closed subset $A$ of $\\mathbb{R}$ is the zero set of $x \\mapsto d(x, A)$ and the intersection of the open sets $\\{x : d(x,A) < 1/(n+1)\\}$, worked for $[0,1]$ and for $\\{0\\}$

- - **$A = [0,1]$** ([[def-interval]]). Here
- [L4] $[0,1] = \{\, t : 0 \le t \le 1 \,\}$ and $(u,v) = \{\, t : u < t < v \,\}$; a two-element set of reals has a minimum ([[def-interval]], [[def-max-min]]).

### `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (cross-batch, page function-space-topologies-examples)

Title: $C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology

- [L1] $I$ is a nonempty compact metric space: it is bounded, lying in $B(0,2)$, and closed in $\mathbb{R}$, so it is a compact subset of $\mathbb{R}$ ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-topology]], [[def-metric-ball]], [[def-interval]]).

### `ex-dini-on-the-unit-interval` (cross-batch, page function-space-topologies-examples)

Title: Dini's theorem applied to a nondecreasing sequence of piecewise linear approximations on $[0,1]$, and what fails when the limit is not continuous

- **Given:** $I = [0,1]$ with $d(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-interval]]), the reals $a_k = 1/\iota(k+2)$, the functions $s_k$ displayed above, and the identity $\mathrm{id}_I$ of $I$.

### `ex-the-compact-open-topology-on-the-continuous-functions-of-the-line` (cross-batch, page function-space-topologies-examples)

Title: On $C(\\mathbb{R}, \\mathbb{R})$ the compact-open topology has the sets $\\{g : \\sup_{[-m,m]} |f-g| < \\varepsilon\\}$ as a neighbourhood base, and $\\mathbb{R}$ is locally compact so evaluation is continuous

- ([[def-interval]], [[def-canonical-natural]]). Then:

### `ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy` (cross-batch, page separation-axioms-examples)

Title: A discrete space satisfies every axiom in the chain; an indiscrete space with two points is regular, completely regular, normal, completely normal and perfectly normal, and fails $T_0$

- [L5] A map out of a discrete space is continuous, every preimage being open; a constant map is continuous; $[0,1]$ carries the subspace topology of $\mathbb{R}$ ([[thm-continuity-characterisations-top]], clause (b), [[def-continuous-map-top]], [[def-zero-sets-and-cozero-sets]], [[def-interval]]).

### `ex-the-exponential-law-worked-on-the-line` (cross-batch, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- **Given:** $\mathbb{R}$ with $d(s,t) = |s-t|$; the product $\mathbb{R} \times \mathbb{R}$ with the product topology; the map $f(x,z) = xz$ and its transpose $F$; and for a natural $m \ge 1$ the interval $[-m,m] = \{\, t : -\iota(m) \le t \le \iota(m) \,\}$ ([[def-interval]], [[def-canonical-natural]]).

### `ex-the-moving-spike-family-in-the-three-topologies` (cross-batch, page function-space-topologies-examples)

Title: The moving spikes on $[0,1]$ converge pointwise to $0$, do not converge uniformly, and do not converge in the topology of compact convergence

- [L1] Each $f_k$ is a well-defined continuous function $I \to \mathbb{R}$, $(f_k)$ converges pointwise to $\mathbf{0}$, $f_k(a_k) = 1$, and $0 < a_k \le 1/2$ ([[fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets]], steps of its refutation, [[lem-continuity-is-local-and-pastes]], [[def-canonical-natural]], [[cor-archimedean-reciprocal]], [[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]], [[def-isometry-and-metric-embedding]]).

### `fs-lindelofness-is-productive` (cross-batch, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, refuted: Lindelöfness is productive

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets` (cross-batch, page function-space-topologies)

Title: FALSE: a pointwise convergent sequence of continuous functions converges uniformly on every compact set

- **Given:** The interval $X := [0,1] = \{\, t \in \mathbb{R} : 0 \le t \le 1 \,\}$ ([[def-interval]]) with the metric $d(s,t) = |s-t|$ inherited from $\mathbb{R}$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]), the target $Y := \mathbb{R}$ with the same metric, the reals $a_k := 1/\iota(k+2)$ for $k \in \mathbb{N}$ ([[def-canonical-natural]]), and the constant function $\mathbf{0} : X \to \mathbb{R}$ with value $0$.

### `fs-separability-is-hereditary` (cross-batch, page countability-axioms-and-cardinal-functions)

Title: Refuted: separability is hereditary

- [F1] The half-open intervals $[a,b)$, $a<b$, satisfy the basis criterion, and products of their members form a basis for the product topology ([[def-interval]], [[thm-basis-criterion]], [[def-product-topology]]).

### `fs-separable-spaces-are-second-countable` (cross-batch, page countability-axioms-and-cardinal-functions)

Title: Refuted: every separable space is second countable

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `fs-the-compact-open-topology-is-always-metrizable` (cross-batch, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- [L9] $(-1,1) = \{\, t \in \mathbb{R} : -1 < t < 1 \,\}$ is open in $\mathbb{R}$ and contains $0$ but not $2$ ([[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metric-continuity]]).

### `fs-the-evaluation-map-is-always-continuous` (cross-batch, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- **Given:** The rationals $\mathbb{Q}$ inside $\mathbb{R}$ with the metric $d(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]), the target $\mathbb{R}$ with the same metric, the constant function $z : \mathbb{Q} \to \mathbb{R}$ with value $0$, and the open interval $V := (-1,1)$ ([[def-interval]]).
- [L8] Balls of the subspace $\mathbb{Q}$ are traces of balls of $\mathbb{R}$: $B_{\mathbb{Q}}(q,r) = (q-r, q+r) \cap \mathbb{Q}$; and a subset of a metric space is open exactly when each of its points has a ball around it inside the set ([[def-isometry-and-metric-embedding]], [[def-metric-ball]], [[def-metric-topology]], [[def-metrizable-space]], [[def-interval]]).

### `lem-the-k-topology-is-hausdorff-and-not-regular` (cross-batch, page separation-axioms)

Title: The $K$-topology on $\\mathbb{R}$, generated by the open intervals together with their complements of $K = \\{1/(n+1) : n \\in \\mathbb{N}\\}$, is $T_1$ and Hausdorff but not regular

- the bounded open intervals of $\mathbb{R}$ ([[def-interval]]) together with those
- [A1] $(a,b) = \{\, t \in \mathbb{R} : a < t < b \,\}$, and for $a < b$ the midpoint satisfies $a < (a+b)/2 < b$, so $(a,b) \ne \varnothing$ ([[def-interval]]).

### `thm-completely-regular-implies-regular` (cross-batch, page separation-axioms)

Title: Every completely regular space is regular, and every Tychonoff space is $T_3$

- [L1] A map into the subspace $[0,1]$ of $\mathbb{R}$ is continuous exactly when it is continuous as a map into $\mathbb{R}$, and the open subsets of $[0,1]$ are the traces on $[0,1]$ of the open subsets of $\mathbb{R}$ ([[def-subspace-topology-top]], [[def-interval]]).
- [L3] The sets $(1/2, \infty)$ and $(-\infty, 1/2)$ are open in the usual topology of $\mathbb{R}$, they are disjoint, and $0 < 1/2 < 1$ ([[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal` (cross-batch, page separation-axioms)

Title: In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal

- [L6] A two-element set of reals has a maximum and a minimum, each of which is one of the two elements ([[def-max-min]], [[lem-finite-set-has-max]]); and $[0,1]$ is the set of reals $t$ with $0 \le t \le 1$ ([[def-interval]]).


---

# Citation-precision audit — everything that cites `def-hausdorff-space`

## The target, as it actually stands on disk

`items/def-hausdorff-space.md` — definition — Hausdorff space: distinct points have disjoint open neighbourhoods; every metrizable space is Hausdorff and the indiscrete topology on two points is not

#### Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**Hausdorff** when any two distinct points are separated by disjoint open sets:
for all $x, y \in X$ with $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \qquad y \in V, \qquad U \cap V = \varnothing .$$

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), the condition reads: distinct points have disjoint
open neighbourhoods. Nothing is asserted about points that are equal, and the
condition is vacuous for a space with at most one point, so every such space is
Hausdorff.

**Every metrizable space is Hausdorff.** This is not proved here, because it is
already discharged: [[def-metrizable-space]] records it among the two things
every metrizable space has, deriving it from
[[thm-metric-hausdorff-separation]], which separates $p \ne q$ in a metric space
by the disjoint open balls $B(p,r)$ and $B(q,r)$ with $r = d(p,q)/2 > 0$. In
particular $\mathbb{R}$ with its usual topology, every $\mathbb{R}^n$, and every
subspace of a metrizable space are Hausdorff.

**Not every space is Hausdorff.** The indiscrete topology
$\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$ on a set $X = \{a,b\}$ with
$a \ne b$ ([[def-standard-topologies]]) is not: the only open set containing $a$
is $X$, the only one containing $b$ is $X$, and $X \cap X = X \ne \varnothing$.
This is the same two-point space that [[def-metrizable-space]] uses to exhibit a
topology induced by no metric, and the reason is the same one: failure of the
Hausdorff condition is an obstruction to metrizability.

**Being Hausdorff is a topological property** ([[def-homeomorphism-and-open-maps]]).
If $h : X \to Z$ is a homeomorphism and $X$ is Hausdorff, then for $z \ne z'$ in
$Z$ the points $h^{-1}(z)$ and $h^{-1}(z')$ are distinct, so they have disjoint
open $U, V$; the images $h[U]$ and $h[V]$ are open, disjoint, and contain $z$ and
$z'$ respectively, a homeomorphism carrying the open sets of one space
bijectively onto those of the other. So no space homeomorphic to a Hausdorff
space fails the condition.

**Scope of this item.** Only the definition, the metrizable case and the
two-point failure are recorded here, because that is all this page uses. The
Hausdorff condition is one of a graded family of separation axioms; that family,
its ordering, and the questions of which of its members are hereditary or
preserved by products, are not available at this point in the reading order and
nothing here anticipates them. What this page does use is a single negative
result: a quotient of a Hausdorff space need not be Hausdorff, which is recorded
below as a false statement and witnessed on the companion page.

## The 24 citing use(s), quoted verbatim from the citing items

### `cex-pseudocompact-noncompact-particular-point-space` (published-backward, page the-topology-of-euclidean-space-examples)

Title: An infinite particular-point space is pseudocompact and not compact

- [L2] The usual topology on $\mathbb R$ is Hausdorff, so distinct real numbers have disjoint open neighbourhoods ([[lem-real-line-is-a-metric-space]], [[def-hausdorff-space]]).

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- with the subspace topology. Then $T$ is Hausdorff ([[def-hausdorff-space]]) and
- [L6] Normality: two disjoint closed sets have disjoint open supersets. Hausdorff: distinct points have disjoint open neighbourhoods. A set is closed exactly when its complement is open ([[def-normal-and-t4-spaces]], [[def-hausdorff-space]], [[def-topological-space]], [[def-interior-closure-boundary-top]], [[thm-closure-characterisation-top]]).

### `def-regular-and-t3-spaces` (published-backward, page separation-axioms)

Title: Regular spaces and $T_3$ spaces, with the source disagreement over whether regularity includes $T_1$ stated explicitly

- $T_1$ or Hausdorff ([[def-hausdorff-space]]): in the indiscrete topology on a set

### `def-urysohn-space` (published-backward, page separation-axioms)

Title: Urysohn ($T_{2\\frac{1}{2}}$) space: distinct points have neighbourhoods with disjoint closures

- ([[def-hausdorff-space]]). That implication is proved as the next item, together

### `ex-sierpinski-space-is-t0-normal-and-not-regular` (published-backward, page separation-axioms-examples)

Title: Sierpinski space is $T_0$ and normal but neither $T_1$ nor regular: normality without $T_1$ implies nothing

- ([[def-hausdorff-space]]) either, and for an independent reason rather than
- [L3] Hausdorff: distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]]).

### `ex-the-cocountable-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cocountable topology on $\\mathbb{R}$ is $T_1$, has unique sequential limits, and is neither Hausdorff nor regular nor normal

- Hausdorff** ([[def-hausdorff-space]]), **not regular**
- [L5] Hausdorff, regular and normal are as in [[def-hausdorff-space]], [[def-regular-and-t3-spaces]] and [[def-normal-and-t4-spaces]].

### `ex-the-cofinite-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cofinite topology on an infinite set is $T_1$ but neither Hausdorff nor regular nor normal

- Hausdorff** ([[def-hausdorff-space]]), **not regular**
- [L2] Hausdorff: distinct points have disjoint open neighbourhoods. Regular: a point and a closed set not containing it have disjoint open supersets. Normal: two disjoint closed sets have disjoint open supersets ([[def-hausdorff-space]], [[def-regular-and-t3-spaces]], [[def-normal-and-t4-spaces]]).

### `ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy` (published-backward, page separation-axioms-examples)

Title: A discrete space satisfies every axiom in the chain; an indiscrete space with two points is regular, completely regular, normal, completely normal and perfectly normal, and fails $T_0$

- [L1] The axioms: $T_0$ and $T_1$ ([[def-t0-and-t1-spaces]]); Hausdorff ([[def-hausdorff-space]]); Urysohn ([[def-urysohn-space]]); regular ([[def-regular-and-t3-spaces]]); completely regular ([[def-completely-regular-and-tychonoff-spaces]]); normal ([[def-normal-and-t4-spaces]]); completely normal and perfectly normal ([[def-completely-normal-and-perfectly-normal-spaces]]).

### `ex-the-particular-point-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The particular-point topology is $T_0$ and not $T_1$, it is not regular once the set has at least two points, and it is not normal once the set has at least three

- hence not Hausdorff ([[def-hausdorff-space]]).
- [L1] $T_0$: some open set contains exactly one of two distinct points. $T_1$: every singleton is closed. Every Hausdorff space is $T_1$ ([[def-t0-and-t1-spaces]], [[thm-t1-iff-singletons-are-closed]], [[def-hausdorff-space]]).

### `fs-every-hausdorff-space-is-regular` (published-backward, page separation-axioms)

Title: FALSE: every Hausdorff space is regular

- **False claim:** every Hausdorff space ([[def-hausdorff-space]]) is regular
- [L1] $(\mathbb{R}, \mathcal{T}_K)$ is Hausdorff and $T_1$; $K$ is closed in it; and there are no disjoint open $U \ni 0$ and $V \supseteq K$ ([[lem-the-k-topology-is-hausdorff-and-not-regular]], claims 2, 3 and 4, [[def-hausdorff-space]], [[def-t0-and-t1-spaces]]).

### `fs-every-normal-space-is-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: every normal space is Hausdorff, so the $T_1$ hypothesis in $T_4$ is redundant

- ([[def-hausdorff-space]]); equivalently, the $T_1$ hypothesis in the definition
- [A2] A space is Hausdorff when distinct points have disjoint open neighbourhoods, $T_1$ when each of two distinct points has an open set containing it and missing the other, and $T_0$ when some open set contains exactly one of them ([[def-hausdorff-space]], [[def-t0-and-t1-spaces]]).

### `fs-every-t1-space-is-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: every $T_1$ space is Hausdorff

- ([[def-hausdorff-space]]).
- [A1] A space is Hausdorff when any two distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]], [[def-topological-space]]).

### `fs-lindelofness-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: Lindelöfness is hereditary

- [F1] A space is locally compact when every point has a compact neighbourhood, and Hausdorff when distinct points have disjoint open neighbourhoods ([[def-locally-compact-space]], [[def-hausdorff-space]]).

### `fs-unique-sequential-limits-imply-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: a space in which every sequence has at most one limit is Hausdorff

- ([[def-hausdorff-space]]).
- [A3] A space is Hausdorff when distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]], [[def-topological-space]]).

### `lem-ordinal-order-topology-is-t3` (published-backward, page separation-axioms)

Title: Every ordinal with its order topology has a basis of clopen sets, and is $T_1$, Hausdorff and regular

- 3. $\gamma$ is Hausdorff ([[def-hausdorff-space]]).

### `lem-the-k-topology-is-hausdorff-and-not-regular` (published-backward, page separation-axioms)

Title: The $K$-topology on $\\mathbb{R}$, generated by the open intervals together with their complements of $K = \\{1/(n+1) : n \\in \\mathbb{N}\\}$, is $T_1$ and Hausdorff but not regular

- 2. $(\mathbb{R}, \mathcal{T}_K)$ is Hausdorff ([[def-hausdorff-space]]) and $T_1$
- [L6] A space is Hausdorff when distinct points have disjoint open neighbourhoods; every Hausdorff space is $T_1$; a space is regular when a point and a closed set not containing it have disjoint open neighbourhoods ([[def-hausdorff-space]], [[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]], [[def-regular-and-t3-spaces]], [[def-t0-and-t1-spaces]]).

### `lem-urysohn-sits-between-hausdorff-and-regular-plus-t1` (published-backward, page separation-axioms)

Title: Every Urysohn space is Hausdorff, every Hausdorff space is $T_1$ and hence $T_0$, and every regular $T_1$ space is Urysohn

- ([[def-hausdorff-space]]).
- [A2] $X$ is Hausdorff when distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]]).

### `rem-function-space-conventions` (published-backward, page function-space-topologies)

Title: Standing hypotheses on this page: a metric domain, where the target must be metric, and why the compact-open topology is built from metric compactness

- ([[def-hausdorff-space]]); where the target is metric it is Hausdorff for free

### `rem-separation-axiom-conventions` (published-backward, page separation-axioms)

Title: Conventions on this page, and the one implication of the classical chain that is not available at this point in the reading order

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma` (published-backward, page nets-and-filters)

Title: Assuming the ultrafilter lemma, an arbitrary product of compact Hausdorff spaces is compact

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-hausdorff-iff-net-limits-are-unique` (published-backward, page nets-and-filters)

Title: A topological space is Hausdorff if and only if every net has at most one limit

- [A1] Distinct points in a Hausdorff space have disjoint neighbourhoods ([[def-hausdorff-space]]).

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal` (published-backward, page separation-axioms)

Title: In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal

- [L7] Every metrizable space is Hausdorff, hence $T_1$ and $T_0$ ([[def-metrizable-space]], [[def-hausdorff-space]], [[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]], [[def-t0-and-t1-spaces]]).

### `thm-t4-implies-t3` (published-backward, page separation-axioms)

Title: A normal $T_1$ space is regular, hence $T_3$, hence Urysohn, Hausdorff, $T_1$ and $T_0$

- ([[def-urysohn-space]]), Hausdorff ([[def-hausdorff-space]]), $T_1$ and $T_0$.

### `thm-the-separation-implication-chain` (published-backward, page separation-axioms)

Title: The implications proved on this page: perfectly normal gives completely normal under countable choice, and completely normal gives normal; normal with $T_1$ gives $T_3$; completely regular gives regular; regular with $T_1$ gives Urysohn, hence Hausdorff, hence $T_1$, hence $T_0$; and metrizable gives every one of them

- **Given:** A topological space $(X,\mathcal{T})$, and the definitions of $T_0$, $T_1$, Hausdorff, Urysohn, regular, completely regular, normal, completely normal and perfectly normal ([[def-t0-and-t1-spaces]], [[def-hausdorff-space]], [[def-urysohn-space]], [[def-regular-and-t3-spaces]], [[def-completely-regular-and-tychonoff-spaces]], [[def-normal-and-t4-spaces]], [[def-completely-normal-and-perfectly-normal-spaces]]).
