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

# Citation-precision audit — everything that cites `lem-limit-abs`

## The target, as it actually stands on disk

`items/lem-limit-abs.md` — lemma — The absolute value is compatible with limits

#### Statement

Let $(x_k)$ be a sequence of reals converging to $x \in \mathbb{R}$
([[def-sequence]], [[def-real-limit]]). Then $(|x_k|)$ converges to $|x|$.

In the single case $x = 0$ the implication reverses: $|x_k| \to 0$ if and only if
$x_k \to 0$. Whether the implication can be reversed for $x \ne 0$ is taken up in
the remarks below; it is no part of what the proof establishes.

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-two-subsequential-limits` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $(-1)^k(1 + 1/k)$ is bounded with subsequential limit set exactly $\\{-1, 1\\}$

- [L6] Algebra of limits ([[thm-algebra-of-limits]]); subsequences inherit the limit ([[lem-subsequence-inherits-limit]]); the absolute value is compatible with limits ([[lem-limit-abs]]); limits are unique ([[lem-limit-unique]]).

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- [L14] Limits: a sequence and each of its tails converge to the same limit ([[lem-limit-of-tail]]); the algebra of limits ([[thm-algebra-of-limits]]); compatibility of the absolute value with limits ([[lem-limit-abs]]); and preservation of non-strict inequalities in the limit ([[lem-limit-preserves-order]]).


---

# Citation-precision audit — everything that cites `lem-cardinality-of-a-well-orderable-set`

## The target, as it actually stands on disk

`items/lem-cardinality-of-a-well-orderable-set.md` — lemma — A set equinumerous with some ordinal has a least such ordinal, that ordinal is a cardinal, and equinumerous sets get the same one; no choice principle is used

#### Statement

Call a set $X$ **well-orderable** when some relation well-orders it
([[def-well-order]]). Work in ZF, with no choice principle. Then:

**(a)** $X$ is well-orderable if and only if $X \approx \alpha$
([[def-equinumerous]]) for some ordinal $\alpha$ ([[def-ordinal]]).

**(b)** If $X$ is well-orderable there is a **least** ordinal equinumerous with
$X$. It is written $\lvert X \rvert$ and called the **cardinality** of $X$.

**(c)** $\lvert X \rvert$ is a cardinal ([[def-cardinal]]).

**(d)** If $X \approx Y$ and $X$ is well-orderable, then $Y$ is well-orderable
and $\lvert Y \rvert = \lvert X \rvert$.

**(e)** $\lvert \alpha \rvert \le \alpha$ for every ordinal $\alpha$, and
$\lvert \alpha \rvert = \alpha$ exactly when $\alpha$ is a cardinal.

Assuming the Axiom of Choice ([[def-axiom-of-choice]]) every set is
well-orderable ([[thm-well-ordering-theorem]]), so $\lvert X \rvert$ is then
defined for every set and is exactly the cardinality of [[def-cardinal]].

**Why this item exists.** [[def-cardinal]] introduces $\lvert X \rvert$ under the
hypothesis "Assume the Axiom of Choice", and it needs that hypothesis only to
know that $X$ carries a well-order at all. Everything below is about
well-orderable sets and is a theorem of ZF, which is what makes it possible to
state Hessenberg's theorem and Tarski's theorem, one of which is choice-free and
the other of which is precisely about the gap between ZF and ZFC.

## The 2 citing use(s), quoted verbatim from the citing items

### `lem-cellularity-is-well-defined` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, $c(X)$ is a well-defined cardinal

- [L1] Under choice every family has a cardinality ([[thm-well-ordering-theorem]], [[lem-cardinality-of-a-well-orderable-set]]).

### `lem-character-is-well-defined` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, $\\chi(x,X)$ and $\\chi(X)$ are well-defined cardinals

- [L1] Under choice every set can be well ordered and therefore has a cardinality ([[thm-well-ordering-theorem]], [[lem-cardinality-of-a-well-orderable-set]]).


---

# Citation-precision audit — everything that cites `thm-schroder-bernstein`

## The target, as it actually stands on disk

`items/thm-schroder-bernstein.md` — theorem — The Schröder-Bernstein theorem

#### Statement

Let $A$ and $B$ be sets with $A \preceq B$ and $B \preceq A$
([[def-equinumerous]]). Then $A \approx B$.

Equivalently: if there is an injection $A \to B$ and an injection $B \to A$, then
there is a bijection $A \to B$ ([[def-injection-surjection-bijection]]).

**The proof uses no choice principle.** The bijection is written down explicitly
from the two given injections, and the only "selections" it makes are of the
unique preimage of a point under an injection, which is determined, not chosen.
The single infinite construction is an application of the recursion theorem
([[thm-recursion]]), whose data are a set, a starting point and one function.

## The 2 citing use(s), quoted verbatim from the citing items

### `lem-cellularity-is-well-defined` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, $c(X)$ is a well-defined cardinal

- [L2] Cardinals are initial ordinals, a set of ordinals has union as its least upper bound, and mutual injections give a bijection ([[def-cardinal]], [[lem-ordinal-basics]], [[thm-schroder-bernstein]]).

### `lem-character-is-well-defined` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, $\\chi(x,X)$ and $\\chi(X)$ are well-defined cardinals

- [L3] Cardinals are initial ordinals, a set of ordinals has union as its least upper bound, and mutual injections give a bijection ([[def-cardinal]], [[lem-ordinal-basics]], [[thm-schroder-bernstein]]).


---

# Citation-precision audit — everything that cites `cor-cardinal-absorption`

## The target, as it actually stands on disk

`items/cor-cardinal-absorption.md` — corollary — Absorption: for cardinals $\\kappa, \\lambda$ with $\\kappa$ infinite and $\\lambda \\le \\kappa$, $\\kappa \\oplus \\lambda = \\kappa$, and $\\kappa \\otimes \\lambda = \\kappa$ when $\\lambda \\ne 0$

#### Statement

Let $\kappa$ be an infinite cardinal and $\lambda$ a cardinal with
$\lambda \le \kappa$ ([[def-cardinal]]). Then

$$\kappa \oplus \lambda = \kappa, \qquad \text{and} \qquad \kappa \otimes \lambda = \kappa \ \text{ whenever } \lambda \ne 0$$

([[def-cardinal-arithmetic]]). The exception at $\lambda = 0$ is not an artefact:
$\kappa \otimes 0 = 0$.

**This is a theorem of ZF**, inherited from [[thm-hessenberg]], which is
choice free. In particular the ordinary arithmetic of infinite cardinals collapses
completely for $\oplus$ and $\otimes$: below the level of exponentiation, the
larger argument simply swallows the smaller one.

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-cardinal-functions-of-the-lower-limit-line` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: For the lower-limit line, $\\chi=d=L=c=\\aleph_0$ and $w=2^{\\aleph_0}$ under choice

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-metric-weight-equals-density` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, every metrizable space has $w(X)=d(X)$

- [L3] If $\kappa$ is infinite, then $\kappa\cdot\aleph_0=\kappa$ ([[def-cardinal-arithmetic]], [[cor-cardinal-absorption]]).
