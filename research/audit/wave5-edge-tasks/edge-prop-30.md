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

# Citation-precision audit — everything that cites `lem-tube-lemma-for-a-compact-factor`

## The target, as it actually stands on disk

`items/lem-tube-lemma-for-a-compact-factor.md` — lemma — Tube lemma: if $K$ is compact and an open $N \\subseteq X \\times Z$ contains $K \\times \\{z_0\\}$, then $N$ contains $K \\times W$ for some open $W \\ni z_0$

#### Statement

Let $(X, \mathcal{T}_X)$ and $(Z, \mathcal{T}_Z)$ be topological spaces
([[def-topological-space]]) and give $X \times Z$ the product topology
([[def-product-topology]]). Let $K \subseteq X$ be a compact subset
([[def-compact-space]]), let $z_0 \in Z$, and let $N \subseteq X \times Z$ be open
with

$$K \times \{z_0\} \;\subseteq\; N .$$

Then there is an open $W \subseteq Z$ with $z_0 \in W$ and

$$K \times W \;\subseteq\; N .$$

The set $K \times W$ is the **tube** of the name. The case $K = \varnothing$ is
included and is settled by $W = Z$. **No choice principle is used at all**: the
cover produced below is indexed by *pairs* of open sets, so the indexed form of
the ambient compactness criterion ([[lem-compactness-of-a-subspace-is-ambient]],
claim 2) returns the second entries together with the indices and nothing has to
be selected afterwards.

## The 1 citing use(s), quoted verbatim from the citing items

### `lem-tube-lemma-for-a-compact-metric-factor` (published-backward, page function-space-topologies)

Title: Tube lemma: if $K$ is a compact subset of a metric space $X$, $Z$ is a topological space and $N$ is open in $X \\times Z$ with $K \\times \\{z_0\\} \\subseteq N$, then $K \\times W \\subseteq N$ for some open $W \\ni z_0$

- - **The general tube lemma, for a compact factor in an arbitrary topological product, is now available in this library, on an earlier page** ([[lem-tube-lemma-for-a-compact-factor]]). The proof above is the metric special case of that general lemma, narrowed to a metric factor $X$ and written independently of it: nothing above cites the general statement, and nothing needs to, since compactness of a metric-space subset is the same notion under either reading ([[lem-compactness-is-intrinsic]]).


---

# Citation-precision audit — everything that cites `lem-metric-reverse-triangle`

## The target, as it actually stands on disk

`items/lem-metric-reverse-triangle.md` — lemma — The reverse triangle inequality $|d(x,z) - d(y,z)| \\le d(x,y)$ in any metric space

#### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let
$x, y, z \in X$. Then

$$|d(x,z) - d(y,z)| \le d(x,y),$$

where $|\cdot|$ is the absolute value of $\mathbb{R}$ ([[def-abs-value]]).

## The 1 citing use(s), quoted verbatim from the citing items

### `def-topology-of-compact-convergence` (published-backward, page function-space-topologies)

Title: The topology of compact convergence on $C(X,Y)$ for metric $X$ and $Y$: uniform convergence on each compact subset of $X$

- ([[lem-metric-reverse-triangle]]) applied twice, the second time after using the


---

# Citation-precision audit — everything that cites `lem-metric-ball-neighbourhood-base`

## The target, as it actually stands on disk

`items/lem-metric-ball-neighbourhood-base.md` — lemma — The balls $B(x, 1/n)$, $n \\ge 1$, form a countable neighbourhood base at $x$, so every metric space is first countable

#### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $x \in X$. For a
natural $n \ge 1$ write $1/n$ for the inverse of the canonical natural
$n \cdot 1_{\mathbb{R}}$, a positive real, and put

$$\beta_n := B\big(x, 1/n\big), \qquad \mathcal{B}_x := \{\, \beta_n : n \in \mathbb{N},\ n \ge 1 \,\}.$$

Then:

1. $\mathcal{B}_x$ is at most countable ([[def-countable]]).
2. Every $\beta_n$ is an open subset of $X$ containing $x$.
3. For every open $U \subseteq X$ with $x \in U$ there is $n \ge 1$ with
   $\beta_n \subseteq U$.

**The two names used in the title are introduced by this statement, not cited
from elsewhere.** A family of open sets each containing $x$, such that every open
set containing $x$ contains a member of the family, is a **neighbourhood base at
$x$**; a space in which every point has an at most countable neighbourhood base
is **first countable**. Claims 1 to 3 say that $\mathcal{B}_x$ is an at most
countable neighbourhood base at $x$, so **every metric space is first
countable**.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-uniform-limit-theorem` (published-backward, page function-space-topologies)

Title: A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

- [L2] In a metric space the balls $B(p,\varepsilon)$, $\varepsilon > 0$, are open and form a neighbourhood base at $p$: an open $V$ with $p \in V$ contains some $B(p,\varepsilon)$ ([[def-metric-topology]], [[def-metric-ball]], [[lem-metric-ball-neighbourhood-base]], [[def-metrizable-space]]).


---

# Citation-precision audit — everything that cites `thm-metric-sequential-closure`

## The target, as it actually stands on disk

`items/thm-metric-sequential-closure.md` — theorem — A point lies in the closure of $A$ iff some sequence in $A$ converges to it, and a set is closed iff it is sequentially closed

#### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$, let
$x \in X$ and let $F \subseteq X$. Call $F$ **sequentially closed** when every
sequence in $F$ that converges in $X$ has its limit in $F$. Then:

1. $x \in \overline{A}$ ([[def-metric-interior-closure-boundary]]) if and only if
   there is a sequence $(a_k)$ with $a_k \in A$ for every $k$ and $a_k \to x$ in
   $(X,d)$ ([[def-metric-convergence]]).
2. $F$ is closed ([[def-metric-topology]]) if and only if $F$ is sequentially
   closed.

**The Axiom of Countable Choice is used, once.** The direction of claim 1 that
manufactures a sequence out of adherence makes one choice per natural number, and
that is exactly $\mathrm{AC}_\omega$ ([[def-countable-choice]]). The converse
direction, and the direction of claim 2 that goes from closed to sequentially
closed, are choice free. This is flagged at the step that spends it.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-uniform-limit-theorem` (published-backward, page function-space-topologies)

Title: A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

- argument through [[thm-metric-sequential-closure]] would spend the Axiom of
- - **Why the choice-free route was taken.** The usual proof of claim 3 shows that $C(X,Y)$ is sequentially closed and then invokes [[thm-metric-sequential-closure]] to conclude closedness; that item's forward direction spends the Axiom of Countable Choice, since it manufactures a sequence out of adherence. The argument above instead works with the distance to the set directly and instantiates a single $g$ at each $\varepsilon$, so claim 3 is a theorem of ZF.
