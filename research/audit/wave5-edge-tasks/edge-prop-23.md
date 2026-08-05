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

# Citation-precision audit — everything that cites `lem-sequential-closure-inside-closure`

## The target, as it actually stands on disk

`items/lem-sequential-closure-inside-closure.md` — lemma — The sequential closure is contained in the closure, continuity implies sequential continuity, and sequential limits need not be unique

#### Statement

Let $X$ and $Y$ be topological spaces, with convergence, sequential closure and
sequential continuity as in [[def-sequence-convergence-top]]. Then:

1. $A \subseteq \operatorname{seqcl}(A) \subseteq \overline{A}$ for every
   $A \subseteq X$.
2. If $f : X \to Y$ is continuous at $p \in X$ ([[def-continuous-map-top]]) then
   $f$ is sequentially continuous at $p$.
3. **Sequential limits need not be unique.** In the indiscrete topology on a set
   $X$ with at least two points ([[def-standard-topologies]]), every sequence in
   $X$ converges to every point of $X$.

Claim 3 is why this library never writes $\lim_k x_k$ for a sequence in a general
topological space: the symbol would not denote.

## The 2 citing use(s), quoted verbatim from the citing items

### `def-frechet-urysohn-and-sequential-spaces` (published-backward, page nets-and-filters)

Title: Fréchet–Urysohn spaces and sequential spaces

- A topological space $X$ is **Fréchet–Urysohn** if, whenever $p\in\overline A$, there is a sequence in $A$ converging to $p$. Equivalently, $\operatorname{seqcl}(A)=\overline A$ for every $A\subseteq X$, since sequential closure is always contained in closure ([[lem-sequential-closure-inside-closure]]).

### `thm-first-countable-frechet-urysohn-sequential-hierarchy` (published-backward, page nets-and-filters)

Title: Assuming countable choice, every first countable space is Fréchet–Urysohn; in ZF every Fréchet–Urysohn space is sequential

- [L2] $A\subseteq\operatorname{seqcl}(A)\subseteq\overline A$ for every $A$ ([[lem-sequential-closure-inside-closure]]).


---

# Citation-precision audit — everything that cites `lem-sup-epsilon`

## The target, as it actually stands on disk

`items/lem-sup-epsilon.md` — lemma — Epsilon characterisation of the supremum

#### Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded above, and let $u$ be an
upper bound of $S$ ([[def-complete-ordered-field]]). Then

$$u = \sup S \quad \Longleftrightarrow \quad \text{for every } \varepsilon > 0 \text{ there exists } s \in S \text{ with } u - \varepsilon < s.$$

In words: among the upper bounds of $S$, the supremum is exactly the one that
cannot be lowered by any positive amount and still bound $S$.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-monotone-convergence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nondecreasing sequence bounded above converges to the supremum of its range, and a nonincreasing sequence bounded below to the infimum

- [L3] Epsilon characterisation of the supremum: if $u$ is an upper bound of a nonempty $S$, then $u = \sup S$ exactly when for every $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s$ ([[lem-sup-epsilon]]).
- identification is what [[lem-sup-epsilon]] supplies and it is the useful part


---

# Citation-precision audit — everything that cites `cex-nested-unbounded-closed-empty`

## The target, as it actually stands on disk

`items/cex-nested-unbounded-closed-empty.md` — counterexample — The nested closed unbounded sets $[k, \\infty)$ have empty intersection, so boundedness cannot be dropped

#### Statement refuted

**Refuted claim:** a nested sequence of nonempty **closed** intervals has
nonempty intersection, boundedness being unnecessary
([[thm-nested-interval-property]], [[def-interval]]).

The witness is $I_k = [k, \infty)$ for $k \in \mathbb{N}$, where $k$ denotes the
canonical natural of $\mathbb{R}$. Each is a nonempty closed interval, the family
is nested, and

$$\bigcap_{k \in \mathbb{N}} [k, \infty) = \emptyset .$$

[[thm-nested-interval-property]] therefore cannot be improved by deleting
"bounded" from its hypotheses. Together with the open-interval
counterexample on this page, which deletes "closed" instead, this shows
that the two hypotheses are independent and that neither is an artefact of the
proof.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-nested-interval-property` (forward, page monotone-sequences-and-cauchy-completeness)

Title: A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$

- closedness, and [[cex-nested-unbounded-closed-empty]], which keeps closedness


---

# Citation-precision audit — everything that cites `lem-bernoulli-inequality`

## The target, as it actually stands on disk

`items/lem-bernoulli-inequality.md` — lemma — Bernoulli's inequality $(1+x)^n \\ge 1 + nx$

#### Statement

Let $\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let
$x \in \mathbb{R}$ with $x \ge -1$, and let $n \in \mathbb{N}$, with powers as in
[[def-integer-power]] and with $n$ also denoting the canonical natural
$\iota(n) \in \mathbb{R}$ ([[lem-of-naturals-positive]], [[lem-of-q-embeds]]).
Then

$$(1+x)^n \ge 1 + nx,$$

and equality holds if and only if $n \le 1$ or $x = 0$.

## The 1 citing use(s), quoted verbatim from the citing items

### `lem-geometric-sequence-null` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- Both claims come from Bernoulli's inequality ([[lem-bernoulli-inequality]]) and
- [L3] Bernoulli's inequality: $(1+x)^n \ge 1 + nx$ for $x \ge -1$ and $n \in \mathbb{N}$ ([[lem-bernoulli-inequality]]).
