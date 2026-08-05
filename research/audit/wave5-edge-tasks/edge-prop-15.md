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

# Citation-precision audit — everything that cites `cex-strictly-decreasing-gaps-no-limit`

## The target, as it actually stands on disk

`items/cex-strictly-decreasing-gaps-no-limit.md` — counterexample — $x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists

#### Statement refuted

**Refuted claim:** a sequence whose consecutive gaps are strictly decreasing,

$$|x_{k+2} - x_{k+1}| < |x_{k+1} - x_k| \quad \text{for every } k,$$

is contractive, or at least converges ([[def-contractive-sequence]],
[[thm-contractive-implies-cauchy]]).

The witness is $x_1 = 1$, $x_{k+1} = x_k + 1/x_k$. Its gaps are
$x_{k+1} - x_k = 1/x_k$, strictly decreasing because $(x_k)$ is strictly
increasing; and the sequence **diverges to $+\infty$**
([[def-divergence-to-infinity]]). Since a contractive sequence converges
([[thm-contractive-implies-cauchy]]), no contraction constant $c < 1$ can exist
for it: the ratios of consecutive gaps are all below $1$ but have no bound below
$1$ that works at every index.

**Indexing.** Written on $\mathbb{N}$ the sequence is $(g_j)$ with $g_0 = 1$ and
$g_{j+1} = g_j + 1/g_j$, and $x_k := g_{k-1}$ for $k \ge 1$ ([[def-sequence]]).

## The 3 citing use(s), quoted verbatim from the citing items

### `def-contractive-sequence` (forward, page monotone-sequences-and-cauchy-completeness)

Title: Contractive sequence: $|x_{k+2} - x_{k+1}| \\le c\\,|x_{k+1} - x_k|$ for a fixed $0 < c < 1$

- [[cex-strictly-decreasing-gaps-no-limit]]: its consecutive gaps strictly

### `fs-consecutive-differences-null-implies-cauchy` (forward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: if $|x_{k+1} - x_k| \\to 0$ then $(x_k)$ is Cauchy

- [[cex-strictly-decreasing-gaps-no-limit]].

### `thm-contractive-implies-cauchy` (forward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- fails outright ([[cex-strictly-decreasing-gaps-no-limit]]).


---

# Citation-precision audit — everything that cites `lem-power-difference-factorisation`

## The target, as it actually stands on disk

`items/lem-power-difference-factorisation.md` — lemma — Factorisation of $b^n - a^n$, and the resulting Lipschitz estimate

#### Statement

Let $a, b \in \mathbb{R}$ and let $n \in \mathbb{N}$ with $n \ge 1$, with powers
as in [[def-integer-power]] and finite sums as in [[def-finite-sum]]. Then

$$b^n - a^n = (b - a)\sum_{k=0}^{n-1} a^k b^{\,n-1-k}.$$

**Lipschitz estimate.** If $0 \le a \le b \le M$ then

$$0 \le b^n - a^n \le n M^{\,n-1} (b - a),$$

where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$
([[lem-of-naturals-positive]], [[lem-of-q-embeds]]). This estimate is the form in
which the factorisation is used, later on this page, to prove that $n$-th roots
exist.

## The 3 citing use(s), quoted verbatim from the citing items

### `cex-sqrt-k-differences-null-not-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_k = \\sqrt{k}$ has $x_{k+1} - x_k \\to 0$ and is not Cauchy

- [L2] Square roots, and the factorisation $b^2 - a^2 = (b-a)(b+a)$ ([[thm-of-square-roots]], [[lem-power-difference-factorisation]], [[def-integer-power]]).

### `fs-consecutive-differences-null-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: if $|x_{k+1} - x_k| \\to 0$ then $(x_k)$ is Cauchy

- [L3] Factorisation at $n = 2$: $b^2 - a^2 = (b-a)(b+a)$ ([[lem-power-difference-factorisation]]); and $(uv)^n = u^n v^n$, so $(1/t)^2 = 1/t^2$ for $t \ne 0$ ([[lem-power-laws]]).

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- [L10] Factorisation: $1 - c^{\,n} = (1 - c)\sum_{i<n} c^{\,i}$, the case $b = 1$, $a = c$ of $b^n - a^n = (b-a)\sum_{i=0}^{n-1} a^i b^{\,n-1-i}$ together with $1^m = 1$; at $n = 0$ both sides are $0$ ([[lem-power-difference-factorisation]], [[lem-power-monotone]]).


---

# Citation-precision audit — everything that cites `lem-limit-preserves-order`

## The target, as it actually stands on disk

`items/lem-limit-preserves-order.md` — lemma — Limits preserve non-strict inequalities

#### Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to
$x$ and $y$ respectively ([[def-real-limit]]). If $x_k \le y_k$ eventually, that
is for all $k$ from some index on, then

$$\lim_{k} x_k \;\le\; \lim_{k} y_k .$$

In particular, if $x_k \ge 0$ eventually then $\lim_k x_k \ge 0$, and if
$a \le x_k \le b$ eventually then $a \le \lim_k x_k \le b$.

The conclusion is **not** strict, and cannot be made strict; see the remarks
below and the false statement at the end of this page.

## The 3 citing use(s), quoted verbatim from the citing items

### `ex-babylonian-sqrt-two` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The Babylonian sequence $x_1 = 2$, $x_{k+1} = (x_k + 2/x_k)/2$ decreases to $\\sqrt{2}$

- [L8] Algebra of limits, including the quotient case when the denominators and the limit are nonzero ([[thm-algebra-of-limits]]); limits preserve non-strict inequalities ([[lem-limit-preserves-order]]); a sequence and its tails have the same limits ([[lem-limit-of-tail]]); limits are unique ([[lem-limit-unique]]).

### `ex-recursive-sqrt-two-plus-x` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_1 = 1$, $x_{k+1} = \\sqrt{2 + x_k}$ increases to $2$

- [L8] Algebra of limits ([[thm-algebra-of-limits]]); limits preserve non-strict inequalities ([[lem-limit-preserves-order]]); a sequence and its tails have the same limits ([[lem-limit-of-tail]]); limits are unique ([[lem-limit-unique]]).

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- [L14] Limits: a sequence and each of its tails converge to the same limit ([[lem-limit-of-tail]]); the algebra of limits ([[thm-algebra-of-limits]]); compatibility of the absolute value with limits ([[lem-limit-abs]]); and preservation of non-strict inequalities in the limit ([[lem-limit-preserves-order]]).


---

# Citation-precision audit — everything that cites `thm-countable-subsets-of-omega-one-are-bounded`

## The target, as it actually stands on disk

`items/thm-countable-subsets-of-omega-one-are-bounded.md` — theorem — Assuming countable choice: every at most countable subset of $\\omega_1$ is bounded below $\\omega_1$, so no at most countable subset of $\\omega_1$ is cofinal in it, and a supremum of at most countably many at most countable ordinals is at most countable

#### Statement

**Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$**
([[def-countable-choice]]). Let $\omega_1$ be the first uncountable ordinal
([[def-first-uncountable-ordinal]]). Then:

**(a) Boundedness.** Every at most countable ([[def-countable]]) subset
$A \subseteq \omega_1$ is bounded below $\omega_1$: the ordinal
$\sup A = \bigcup A$ lies in $\omega_1$ and satisfies $\alpha \le \sup A$ for
every $\alpha \in A$.

**(b) No small cofinal set.** No at most countable subset of $\omega_1$ is
cofinal in $\omega_1$ ([[def-cofinal-subset-of-an-ordinal]]).

**(c) Suprema stay countable.** If $A$ is an at most countable set of at most
countable ordinals, then $\sup A = \bigcup A$ is an at most countable ordinal.

**The hypothesis is not decoration.** $\mathrm{AC}_\omega$ is spent at exactly
one step, step 1.2 below, and it is spent there only through
[[thm-countable-union-of-countable]], whose own statement carries the same
hypothesis. Everything else on this page, including the existence of $\omega_1$
and all of [[thm-omega-one-is-the-least-uncountable-ordinal]], is a theorem of
ZF. The ledger is the choice-ledger remark at the end of this page.

## The 3 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- is inherited from [[thm-countable-subsets-of-omega-one-are-bounded]], which is
- [L3] Assuming $\mathrm{AC}_\omega$, every at most countable subset of $\omega_1$ has an upper bound $\alpha \in \omega_1$, and no such subset is cofinal in $\omega_1$ ([[thm-countable-subsets-of-omega-one-are-bounded]], [[def-cofinal-subset-of-an-ordinal]], [[def-countable-choice]]).
- - **The ordinals $\alpha_n$ are defined, not chosen.** Taking the *least* $\alpha$ that works is what keeps the construction free of dependent choice; the only choice principle in the argument is the countable one inside [[thm-countable-subsets-of-omega-one-are-bounded]], and it is declared in the statement.

### `ex-countability-profile-of-omega-one` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: Assuming countable choice, $\\omega_1$ is first countable and countably compact but is not separable or Lindelöf

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-the-ordinal-spaces-omega-plus-one-and-omega-one` (published-backward, page separation-axioms-examples)

Title: $\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment

- [L4] Assuming $\mathrm{AC}_\omega$, every at most countable subset of $\omega_1$ is bounded below $\omega_1$: there is $\alpha \in \omega_1$ with $\xi \le \alpha$ for every $\xi$ in the subset ([[thm-countable-subsets-of-omega-one-are-bounded]], [[def-countable-choice]]).
- - **Clause 3 is where the countable choice enters and where it stays.** It is inherited from [[thm-countable-subsets-of-omega-one-are-bounded]] and from nothing else on this page; clauses 1, 2 and the $T_3$ property of both spaces are theorems of ZF ([[lem-ordinal-order-topology-is-t3]]).
