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

# Citation-precision audit — everything that cites `thm-complete-subspace-iff-closed`

## The target, as it actually stands on disk

`items/thm-complete-subspace-iff-closed.md` — theorem — A subspace of a complete metric space is complete iff it is closed, and a complete subspace of any metric space is closed

#### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $A \subseteq X$
carry the subspace metric $d_A$ ([[def-isometry-and-metric-embedding]]). Then:

1. If $(A,d_A)$ is complete ([[def-complete-metric-space]]), then $A$ is closed
   in $(X,d)$ ([[def-metric-topology]]). **No hypothesis on $X$ is needed.**
2. If $(X,d)$ is complete and $A$ is closed in $(X,d)$, then $(A,d_A)$ is
   complete.

Consequently, for a complete $(X,d)$ a subset $A \subseteq X$ is complete if and
only if it is closed.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-function-space-is-complete-for-a-complete-target` (published-backward, page function-space-topologies)

Title: If $(Y,d)$ is complete then $Y^{X}$ is complete in the uniform metric, and so is $C(X,Y)$

- [L7] A closed subset of a complete metric space is complete in the subspace metric ([[thm-complete-subspace-iff-closed]], claim 2, [[def-isometry-and-metric-embedding]]).


---

# Citation-precision audit — everything that cites `lem-metric-limits-unique`

## The target, as it actually stands on disk

`items/lem-metric-limits-unique.md` — lemma — A sequence in a metric space has at most one limit

#### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $(x_k)$ be a
sequence in $X$ ([[def-metric-convergence]]). If $x_k \to p$ and $x_k \to q$,
then $p = q$.

So a convergent sequence in a metric space has exactly one limit, and the
notation $\lim_k x_k$ is unambiguous.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-function-space-is-complete-for-a-complete-target` (published-backward, page function-space-topologies)

Title: If $(Y,d)$ is complete then $Y^{X}$ is complete in the uniform metric, and so is $C(X,Y)$

- ([[lem-metric-limits-unique]]), so $x \mapsto \lim_k f_k(x)$ is a function, and
- [L3] Completeness of $(Y,d)$: every $d$-Cauchy sequence in $Y$ converges in $(Y,d)$, and its limit is unique ([[def-complete-metric-space]], [[lem-metric-limits-unique]], [[def-metric-convergence]]).


---

# Citation-precision audit — everything that cites `thm-compact-subset-is-closed-and-bounded`

## The target, as it actually stands on disk

`items/thm-compact-subset-is-closed-and-bounded.md` — theorem — A compact subset of a metric space is closed and bounded

#### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $K \subseteq X$ be a
compact subset ([[def-metric-compactness]]). Then $K$ is closed in $X$
([[def-metric-topology]]) and bounded ([[def-metric-bounded-diameter]]).

No choice principle is used: both covers below are given by a rule, and the
indexed form of [[lem-compactness-is-intrinsic]] returns indices rather than
sets.

**The converse is false in general.** A closed and bounded subset of an arbitrary
metric space need not be compact
([[fs-closed-and-bounded-implies-compact-in-every-metric-space]]); it is exactly
in $\mathbb{R}^n$ that the converse holds ([[thm-heine-borel-rn]]).

## The 1 citing use(s), quoted verbatim from the citing items

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L1] A compact subset of a metric space is closed in it and bounded; compactness of a subset is a property of the subspace metric alone, so a compact subset of $\mathbb{Q}$ is a compact subset of $\mathbb{R}$ ([[thm-compact-subset-is-closed-and-bounded]], [[def-metric-compactness]], [[lem-compactness-is-intrinsic]], [[def-isometry-and-metric-embedding]]).


---

# Citation-precision audit — everything that cites `thm-metric-equivalence-hierarchy`

## The target, as it actually stands on disk

`items/thm-metric-equivalence-hierarchy.md` — theorem — Lipschitz equivalence implies uniform equivalence implies topological equivalence

#### Statement

Let $d$ and $d'$ be metrics on the same set $X$ ([[def-metric-space]]), with the
three equivalences as in [[def-equivalent-metrics]]. Then:

1. If $d$ and $d'$ are Lipschitz equivalent, they are uniformly equivalent.
2. If $d$ and $d'$ are uniformly equivalent, they are topologically equivalent.

**Strictness is not claimed here.** The theorem asserts the two implications and
nothing more; that neither reverses is witnessed by explicit pairs of metrics on
the companion page, and those witnesses are not prerequisites of this theorem.
See the first remark below.

## The 1 citing use(s), quoted verbatim from the citing items

### `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (published-backward, page function-space-topologies-examples)

Title: $C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology

- ([[def-equivalent-metrics]], [[thm-metric-equivalence-hierarchy]]);
- [L5] Uniform equivalence of two metrics on one set, and the implication uniform $\Rightarrow$ topological ([[def-equivalent-metrics]], [[thm-metric-equivalence-hierarchy]], claim 2).
