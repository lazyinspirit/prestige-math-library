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

# Citation-precision audit — everything that cites `fs-compact-implies-sequentially-compact`

## The target, as it actually stands on disk

`items/fs-compact-implies-sequentially-compact.md` — false-statement — FALSE: every compact space is sequentially compact

#### Statement

**False claim:** every compact topological space ([[def-compact-space]]) is
sequentially compact ([[def-compactness-variants]]).

**Where the claim comes from, and what is actually true.** For a metric space the
two conditions are equivalent, and the claim above is that equivalence
transplanted to an arbitrary topological space. The refutation builds its own
witness out of Tychonoff's theorem ([[thm-tychonoff]]): the product

$$Y \;:=\; \prod_{x \in D} \{0,1\}, \qquad D := \{0,1\}^{\mathbb{N}},$$

of one copy of the two-point discrete space for every $0$-$1$ sequence, together
with the sequence $(F_n)$ in $Y$ whose $n$-th term reads off the $n$-th
coordinate, $F_n(x) := x_n$. The Axiom of Choice is assumed, since
[[thm-tychonoff]] carries it.

## The 1 citing use(s), quoted verbatim from the citing items

### `ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence` (published-backward, page nets-and-filters-examples)

Title: The coordinate-reading sequence in a compact binary cube has a convergent subnet but no convergent subsequence

- [L1] The published refutation [[fs-compact-implies-sequentially-compact]] defines this cube and sequence as a compact nonsequentially compact witness.
