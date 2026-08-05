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

# Citation-precision audit — everything that cites `def-f-sigma-g-delta`

## The target, as it actually stands on disk

`items/def-f-sigma-g-delta.md` — definition — $F_\\sigma$ and $G_\\delta$ subsets of $\\mathbb{R}$

#### Definition

Let $A \subseteq \mathbb{R}$, with open and closed sets as in
[[def-open-and-closed-in-r]].

- $A$ is an **$F_\sigma$ set** when there is a sequence $(F_n)_{n \in \mathbb{N}}$
  of closed subsets of $\mathbb{R}$ with
  $$A \;=\; \bigcup_{n \in \mathbb{N}} F_n .$$
- $A$ is a **$G_\delta$ set** when there is a sequence $(V_n)_{n \in \mathbb{N}}$
  of open subsets of $\mathbb{R}$ with
  $$A \;=\; \bigcap_{n \in \mathbb{N}} V_n .$$

The letters are the traditional ones: $F$ for *fermé* with $\sigma$ for *somme*,
$G$ for *Gebiet* with $\delta$ for *Durchschnitt*.

**The two classes are exchanged by complementation.** $A$ is $F_\sigma$ if and
only if $\mathbb{R} \setminus A$ is $G_\delta$. If $A = \bigcup_n F_n$ with each
$F_n$ closed, then $\mathbb{R} \setminus A = \bigcap_n (\mathbb{R} \setminus F_n)$
by De Morgan, and each $\mathbb{R} \setminus F_n$ is open by the definition of
closedness ([[def-open-and-closed-in-r]]); the converse is the same computation
read backwards, using that the complement of an open set is closed, which is
again [[def-open-and-closed-in-r]].

**Every closed set is $F_\sigma$ and every open set is $G_\delta$**, by the
constant sequence $F_n := A$, respectively $V_n := A$. As with
[[def-nowhere-dense-meager]], an at most countable family ([[def-countable]]) may
always be presented as a sequence: a finite list $F_0, \dots, F_m$ of closed sets
is extended by $F_n := F_m$ for $n > m$, and a finite list of open sets likewise,
so nothing is lost by indexing over $\mathbb{N}$.

## The 2 citing use(s), quoted verbatim from the citing items

### `def-g-delta-and-f-sigma-in-a-topological-space` (published-backward, page separation-axioms)

Title: $G_\\delta$ and $F_\\sigma$ subsets of a topological space, agreeing with the real-line notion

- same name would be a defect.** [[def-f-sigma-g-delta]] defines $F_\sigma$ and
- sense of [[def-f-sigma-g-delta]]; and likewise for $F_\sigma$. **There is one
- with $\delta$ for *Durchschnitt*, as [[def-f-sigma-g-delta]] records.

### `ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets` (published-backward, page separation-axioms-examples)

Title: Every nonempty closed subset $A$ of $\\mathbb{R}$ is the zero set of $x \\mapsto d(x, A)$ and the intersection of the open sets $\\{x : d(x,A) < 1/(n+1)\\}$, worked for $[0,1]$ and for $\\{0\\}$

- $G_\delta$ subset of $\mathbb{R}$ in the sense of [[def-f-sigma-g-delta]], the
- [L2] The topological notions of $G_\delta$ and $F_\sigma$ for $\mathbb{R}$ with its usual topology coincide with those of [[def-f-sigma-g-delta]], the two collections of open subsets of $\mathbb{R}$ being one collection ([[def-g-delta-and-f-sigma-in-a-topological-space]], [[def-open-and-closed-in-r]]).


---

# Citation-precision audit — everything that cites `def-open-and-closed-in-r`

## The target, as it actually stands on disk

`items/def-open-and-closed-in-r.md` — definition — Open subset of $\\mathbb{R}$ (every point has a neighbourhood inside it), closed subset (complement open), and clopen

#### Definition

Let $U, F \subseteq \mathbb{R}$, with neighbourhoods as in
[[def-neighbourhood-r]].

- $U$ is **open** when for every $x \in U$ there is a real $\varepsilon > 0$
  with $N_\varepsilon(x) \subseteq U$.
- $F$ is **closed** when its complement $\mathbb{R} \setminus F$ is open.
- A set is **clopen** when it is both open and closed.

The whole of the topology of $\mathbb{R}$ developed on this page rests on this
one definition: closedness is *defined* as openness of the complement, and every
other description of a closed set on this page is a theorem
([[thm-closure-characterisations-r]], [[lem-sequential-characterisation-of-closure-r]]).

**$\varnothing$ and $\mathbb{R}$ are clopen.** The condition defining openness
quantifies over the elements of the set, so it holds vacuously for
$\varnothing$; and for $x \in \mathbb{R}$ one has $N_1(x) \subseteq \mathbb{R}$,
so $\mathbb{R}$ is open. Since each of the two is the complement of the other,
each is also closed.

**Every neighbourhood is open.** Let $y \in N_\varepsilon(x)$ and put
$\delta := \varepsilon - |y - x|$, which is $> 0$ because
$y \in N_\varepsilon(x)$. The nesting property of [[def-neighbourhood-r]] gives
$N_\delta(y) \subseteq N_\varepsilon(x)$. So every point of $N_\varepsilon(x)$
has a neighbourhood inside it.

**The four open forms of [[def-interval]] are open sets.** Let $a, b \in
\mathbb{R}$.

- $(a,b)$: for $x$ with $a < x < b$, both $x - a > 0$ and $b - x > 0$, so
  $\delta := \min\{x - a,\ b - x\}$ is a positive real (the minimum of a
  two-element set of reals exists, [[lem-finite-set-has-max]], [[def-max-min]]).
  If $|y - x| < \delta$ then $y > x - \delta \ge x - (x - a) = a$ and
  $y < x + \delta \le x + (b - x) = b$, so $y \in (a,b)$; hence
  $N_\delta(x) \subseteq (a,b)$.
- $(a,\infty)$: for $x > a$ take $\delta := x - a > 0$; then $|y - x| < \delta$
  gives $y > x - \delta = a$.
- $(-\infty,b)$: for $x < b$ take $\delta := b - x > 0$; then $|y - x| < \delta$
  gives $y < x + \delta = b$.
- $(-\infty,\infty) = \mathbb{R}$: already treated above.

**The four closed forms of [[def-interval]] are closed sets.** In each case the
complement is shown open directly.

- $[a,b]$: if $x \notin [a,b]$ then $x < a$ or $x > b$ by trichotomy
  ([[def-ordered-field]]). If $x < a$, take $\delta := a - x > 0$; every
  $y \in N_\delta(x)$ has $y < x + \delta = a$, hence $y \notin [a,b]$. If
  $x > b$, take $\delta := x - b > 0$; every $y \in N_\delta(x)$ has
  $y > x - \delta = b$, hence $y \notin [a,b]$. So
  $\mathbb{R} \setminus [a,b]$ is open.
- $[a,\infty)$: its complement is $(-\infty,a)$, which is open by the previous
  paragraph.
- $(-\infty,b]$: its complement is $(b,\infty)$, which is open.
- $(-\infty,\infty) = \mathbb{R}$: its complement is $\varnothing$, which is
  open.

## The 2 citing use(s), quoted verbatim from the citing items

### `def-g-delta-and-f-sigma-in-a-topological-space` (published-backward, page separation-axioms)

Title: $G_\\delta$ and $F_\\sigma$ subsets of a topological space, agreeing with the real-line notion

- "open" and "closed" read in the sense of [[def-open-and-closed-in-r]]. Those two
- [[def-open-and-closed-in-r]] calls $U$ open when every $x \in U$ admits

### `ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets` (published-backward, page separation-axioms-examples)

Title: Every nonempty closed subset $A$ of $\\mathbb{R}$ is the zero set of $x \\mapsto d(x, A)$ and the intersection of the open sets $\\{x : d(x,A) < 1/(n+1)\\}$, worked for $[0,1]$ and for $\\{0\\}$

- [L2] The topological notions of $G_\delta$ and $F_\sigma$ for $\mathbb{R}$ with its usual topology coincide with those of [[def-f-sigma-g-delta]], the two collections of open subsets of $\mathbb{R}$ being one collection ([[def-g-delta-and-f-sigma-in-a-topological-space]], [[def-open-and-closed-in-r]]).


---

# Citation-precision audit — everything that cites `def-first-uncountable-ordinal`

## The target, as it actually stands on disk

`items/def-first-uncountable-ordinal.md` — definition — The first uncountable ordinal $\\omega_1 := \\aleph(\\omega)$

#### Definition

The **first uncountable ordinal** is

$$\omega_1 \;:=\; \aleph(\omega),$$

the Hartogs number of $\mathbb{N} = \omega$ ([[thm-hartogs]],
[[def-natural-numbers]]): the least ordinal ([[def-ordinal]]) that admits no
injective function into $\mathbb{N}$. Equivalently, by that theorem,
$\omega_1$ is the set of order types of the well-ordered subsets of
$\mathbb{N}$.

**Existence is a theorem of ZF.** [[thm-hartogs]] is choice free, so $\omega_1$
is available without any choice principle, and its defining property needs
none either.

**"Uncountable" is [[def-countable]]'s word**, meaning "not at most countable",
and it is not redefined here. That $\omega_1$ deserves the name — that it is
uncountable, that every ordinal below it is at most countable, that it is a
cardinal and a limit ordinal — is proved in
[[thm-omega-one-is-the-least-uncountable-ordinal]], which is what discharges the
naming obligation of this definition.

## The 2 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [L1] $\alpha + 1 = \alpha^{+}$; $\omega$ and $\omega_1$ are limit ordinals; $\omega_1$ is uncountable and every ordinal below it is at most countable ([[def-ordinal-addition]], [[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-first-uncountable-ordinal]], [[def-countable]]).

### `ex-the-ordinal-spaces-omega-plus-one-and-omega-one` (published-backward, page separation-axioms-examples)

Title: $\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment

- ordinal ([[def-first-uncountable-ordinal]]), so that $\omega_1$ is a limit
- [L3] $\omega_1$ is uncountable, is a limit ordinal, and every ordinal below it is at most countable ([[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-first-uncountable-ordinal]], [[def-countable]]).


---

# Citation-precision audit — everything that cites `def-cofinal-subset-of-an-ordinal`

## The target, as it actually stands on disk

`items/def-cofinal-subset-of-an-ordinal.md` — definition — Cofinal subset of an ordinal

#### Definition

Let $\alpha$ be an ordinal ([[def-ordinal]]). A subset $C \subseteq \alpha$ is
**cofinal in $\alpha$**, equivalently **unbounded in $\alpha$**, when

$$\text{for every } \xi \in \alpha \text{ there is } \eta \in C \text{ with } \xi \le \eta.$$

A subset that is not cofinal is **bounded below $\alpha$**: there is
$\xi \in \alpha$ such that $\eta < \xi$ for every $\eta \in C$.

## The 2 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [L3] Assuming $\mathrm{AC}_\omega$, every at most countable subset of $\omega_1$ has an upper bound $\alpha \in \omega_1$, and no such subset is cofinal in $\omega_1$ ([[thm-countable-subsets-of-omega-one-are-bounded]], [[def-cofinal-subset-of-an-ordinal]], [[def-countable-choice]]).

### `ex-the-ordinal-spaces-omega-plus-one-and-omega-one` (published-backward, page separation-axioms-examples)

Title: $\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment

- ([[def-cofinal-subset-of-an-ordinal]]).
- [L7] A subset $S$ of a limit ordinal $\gamma$ is cofinal in $\gamma$ when for every $\xi \in \gamma$ there is $\sigma \in S$ with $\xi \le \sigma$ ([[def-cofinal-subset-of-an-ordinal]]).
