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

# Citation-precision audit — everything that cites `thm-ultrafilter-characterisation`

## The target, as it actually stands on disk

`items/thm-ultrafilter-characterisation.md` — theorem — Characterisation of ultrafilters: every set or its complement

#### Statement

Let $X$ be a set and $\mathcal{U}$ a filter on $X$ ([[def-filter]]). The following
are equivalent:

1. $\mathcal{U}$ is an ultrafilter on $X$ ([[def-ultrafilter]]);
2. for every $A \subseteq X$, either $A \in \mathcal{U}$ or
   $X \setminus A \in \mathcal{U}$.

Moreover, for any filter the two alternatives are exclusive: never both
$A \in \mathcal{U}$ and $X \setminus A \in \mathcal{U}$. So an ultrafilter decides
every subset of $X$, containing exactly one of $A$ and $X \setminus A$.

## The 4 citing use(s), quoted verbatim from the citing items

### `ex-free-ultrafilter-converging-in-a-convergent-sequence-space` (published-backward, page nets-and-filters-examples)

Title: Assuming the ultrafilter lemma, a free ultrafilter on $\\mathbb{N}$ converges to the added point in the one-point convergent-sequence space

- [L5] A filter is an ultrafilter exactly when for every subset it contains that subset or its complement ([[def-ultrafilter]], [[thm-ultrafilter-characterisation]]).

### `lem-every-net-has-a-universal-subnet` (published-backward, page nets-and-filters)

Title: Assuming the ultrafilter lemma, every net has a universal subnet

- [L2] An ultrafilter contains every subset or its complement ([[thm-ultrafilter-characterisation]]).

### `lem-ultrafilter-cluster-points-are-limits` (published-backward, page nets-and-filters)

Title: Every cluster point of an ultrafilter is a limit of that ultrafilter

- [A2] For every subset $S$, an ultrafilter contains $S$ or its complement ([[thm-ultrafilter-characterisation]]).

### `thm-universal-nets-and-ultrafilters-correspond` (published-backward, page nets-and-filters)

Title: A net is universal exactly when its tail filter is an ultrafilter, and the canonical net of an ultrafilter is universal

- [A2] A filter is an ultrafilter exactly when, for every $S\subseteq X$, it contains $S$ or $X\setminus S$ ([[thm-ultrafilter-characterisation]]).


---

# Citation-precision audit — everything that cites `thm-ultrafilter-lemma`

## The target, as it actually stands on disk

`items/thm-ultrafilter-lemma.md` — theorem — The ultrafilter lemma, from the Axiom of Choice: every filter extends to an ultrafilter

#### Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]). Let $X$ be a set and let
$\mathcal{F}_0$ be a filter on $X$ ([[def-filter]]). Then there is an ultrafilter
$\mathcal{U}$ on $X$ ([[def-ultrafilter]]) with $\mathcal{F}_0 \subseteq \mathcal{U}$.

The hypothesis is spent exactly once, through Zorn's lemma at step 4.1; the rest
of the argument is a theorem of ZF.

In particular, every set that carries a filter carries an ultrafilter. The proof
uses Zorn's lemma ([[thm-zorn]]) and therefore the Axiom of Choice. That some
choice principle is unavoidable here, if ZF is consistent, is an external
independence result, not proved in this library; see the remarks below.

## The 4 citing use(s), quoted verbatim from the citing items

### `ex-free-ultrafilter-converging-in-a-convergent-sequence-space` (published-backward, page nets-and-filters-examples)

Title: Assuming the ultrafilter lemma, a free ultrafilter on $\\mathbb{N}$ converges to the added point in the one-point convergent-sequence space

- [L2] The ultrafilter lemma extends that filter to an ultrafilter ([[thm-ultrafilter-lemma]]).

### `lem-every-net-has-a-universal-subnet` (published-backward, page nets-and-filters)

Title: Assuming the ultrafilter lemma, every net has a universal subnet

- [L1] The ultrafilter lemma extends $\mathcal F_x$ to an ultrafilter $\mathcal U$ ([[thm-ultrafilter-lemma]]).

### `rem-tychonoff-choice-strengths` (published-backward, page nets-and-filters)

Title: The compact Hausdorff product theorem uses the ultrafilter lemma, while the published arbitrary compact product theorem assumes the full Axiom of Choice

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-compactness-via-nets-filters-and-ultrafilters` (published-backward, page nets-and-filters)

Title: Assuming the ultrafilter lemma, compactness is equivalent to every net having a cluster point, every net having a convergent subnet, every filter having a cluster point, and every ultrafilter converging

- [L4] Every filter extends to an ultrafilter ([[thm-ultrafilter-lemma]]), and every cluster point of an ultrafilter is its limit ([[lem-ultrafilter-cluster-points-are-limits]]).


---

# Citation-precision audit — everything that cites `thm-infimum-property`

## The target, as it actually stands on disk

`items/thm-infimum-property.md` — theorem — Every nonempty set bounded below has an infimum

#### Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded below. Then $S$ has a
greatest lower bound in $\mathbb{R}$ ([[def-infimum]]), and it is given by

$$\inf S = -\sup(-S), \qquad \text{where } -S = \{-s : s \in S\}.$$

In particular the complete ordered field $\mathbb{R}$ has the
greatest-lower-bound property, which is therefore not an extra axiom: it is a
consequence of the least-upper-bound property.

## The 3 citing use(s), quoted verbatim from the citing items

### `thm-metric-spaces-are-completely-normal` (published-backward, page separation-axioms)

Title: In a metric space any two separated sets have disjoint open neighbourhoods, so every metrizable space is completely normal

- [L1] For nonempty $S \subseteq X$ and $x \in X$ the distance $d(x,S) = \inf\{\, d(x,s) : s \in S \,\}$ exists in $\mathbb{R}$, is a lower bound of that set, and satisfies $d(x,S) \ge 0$ ([[def-metric-bounded-diameter]], [[def-infimum]], [[thm-infimum-property]], [[lem-metric-nonnegativity]]).

### `thm-monotone-convergence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nondecreasing sequence bounded above converges to the supremum of its range, and a nonincreasing sequence bounded below to the infimum

- first and [[thm-infimum-property]] the second, and each is unique
- [L2] Greatest-lower-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ that is bounded below has a unique infimum, which is a lower bound of it ([[thm-infimum-property]], [[lem-sup-unique]]).
- $\inf T = -\sup(-T)$ ([[thm-infimum-property]]). The direct argument is written

### `thm-nested-interval-property` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$

- [L3] Greatest-lower-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ bounded below has a unique infimum; the infimum is a lower bound and is $\ge$ every lower bound ([[thm-infimum-property]], [[lem-sup-unique]]).


---

# Citation-precision audit — everything that cites `prop-of-reciprocal-order`

## The target, as it actually stands on disk

`items/prop-of-reciprocal-order.md` — proposition — Reciprocals and order: $1/r$ against $1$

#### Statement

Let $F$ be an ordered field and let $r \in F$ with $r > 0$. Then:

$$0 < r < 1 \iff \tfrac{1}{r} > 1, \qquad r > 1 \iff 0 < \tfrac{1}{r} < 1, \qquad r = 1 \iff \tfrac{1}{r} = 1.$$

Here $\tfrac{1}{r}$ denotes the multiplicative inverse $r^{-1}$.

## The 3 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- [L5] Order: $10 > 1 > 0$, so $0 < 1/10 < 1$ ([[prop-of-reciprocal-order]], [[lem-of-inverse-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]); and $|t| = t$ for $t \ge 0$ ([[lem-of-abs-value]]).

### `ex-contractive-sequence-fixed-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_{k+1} = (x_k + 1)/3$ is contractive with $c = 1/3$ and converges to $1/2$

- [L2] Order and arithmetic: $1 > 0$, so $3 = 1+1+1 > 1 > 0$; a positive has a positive inverse; and $0 < r < 1$ exactly when $1/r > 1$, so $0 < 1/3 < 1$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[prop-of-reciprocal-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

### `lem-geometric-sequence-null` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- [L6] Reciprocals: $a > 0$ gives $a^{-1} > 0$; $0 < a < b$ gives $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]); and $0 < t < 1$ exactly when $1/t > 1$ ([[prop-of-reciprocal-order]]).
