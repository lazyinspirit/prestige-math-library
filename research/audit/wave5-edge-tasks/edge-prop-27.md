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

# Citation-precision audit — everything that cites `thm-squeeze`

## The target, as it actually stands on disk

`items/thm-squeeze.md` — theorem — The squeeze theorem

#### Statement

Let $(a_k)$, $(x_k)$ and $(b_k)$ be sequences of reals ([[def-sequence]]) with

$$a_k \le x_k \le b_k \quad \text{eventually},$$

and suppose $(a_k)$ and $(b_k)$ both converge to the same real $L$
([[def-real-limit]]). Then $(x_k)$ converges to $L$.

The middle sequence is not assumed to converge; that is the point of the
theorem, and it is why the squeeze is a tool for *establishing* convergence
rather than for computing a limit already known to exist.

## The 1 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- [L7] Squeeze theorem ([[thm-squeeze]]) and the algebra of limits ([[thm-algebra-of-limits]]); a constant sequence converges to its value ([[def-sequence]], [[def-real-limit]]).


---

# Citation-precision audit — everything that cites `thm-zorn`

## The target, as it actually stands on disk

`items/thm-zorn.md` — theorem — Zorn's lemma

#### Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(P, \le)$ be a
nonempty poset in which **every chain has an upper bound**. Then $P$ has a
maximal element ([[def-maximal-element]]).

Note the hypothesis asks only for an upper bound, not a least upper bound, and
the conclusion asserts only that a maximal element exists, never that a greatest
one does.

## The 1 citing use(s), quoted verbatim from the citing items

### `lem-uncountable-delta-system-for-finite-sets` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, the uncountable $\\Delta$-system lemma for finite sets

- [A1] The Axiom of Choice implies countable choice and Zorn's lemma ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-zorn]]).


---

# Citation-precision audit — everything that cites `lem-lower-limit-line-is-regular-and-lindelof`

## The target, as it actually stands on disk

`items/lem-lower-limit-line-is-regular-and-lindelof.md` — lemma — The lower-limit line has a clopen basis, is regular, and is Lindelöf under countable choice

#### Statement

The lower-limit line has a basis of clopen sets and is regular. Assuming the Axiom of Countable Choice, it is Lindelöf.

## The 1 citing use(s), quoted verbatim from the citing items

### `ex-cardinal-functions-of-the-lower-limit-line` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: For the lower-limit line, $\\chi=d=L=c=\\aleph_0$ and $w=2^{\\aleph_0}$ under choice

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.


---

# Citation-precision audit — everything that cites `ex-the-cardinality-of-the-continuum`

## The target, as it actually stands on disk

`items/ex-the-cardinality-of-the-continuum.md` — example — $\\mathbb{R} \\approx \\mathcal{P}(\\mathbb{N})$ in ZF, by the Cantor set for one injection and by the cuts $\\{q \\in \\mathbb{Q} : q < x\\}$ for the other; so $\\lvert \\mathbb{R} \\rvert = 2^{\\aleph_0}$ under the Axiom of Choice

#### Example

Write ${}^{\omega}2$ for the set of functions $\omega \to 2 = \{0,1\}$, the
$2$ here being the von Neumann natural number, and $\mathcal{P}(\mathbb{N})$ for
the power set of $\mathbb{N} = \omega$ ([[def-natural-numbers]]). Then:

**(a) In ZF, with no choice principle:**

$$\mathbb{R} \;\approx\; {}^{\omega}2 \;\approx\; \mathcal{P}(\mathbb{N})$$

([[def-equinumerous]], [[def-real-numbers]]).

**(b) Assuming the Axiom of Choice** ([[def-axiom-of-choice]]):

$$\lvert \mathbb{R} \rvert \;=\; 2^{\aleph_0} \;=\; \lvert \mathcal{P}(\mathbb{N}) \rvert$$

([[def-cardinal-arithmetic]], [[def-aleph-and-beth-hierarchies]]).

The two injections are the classical ones and neither uses a binary expansion.
One direction is the Cantor set: [[thm-cantor-set-ternary-description]] already
supplies a bijection from the sequences with values in $\{0,1\}$ onto the Cantor
set $C \subseteq \mathbb{R}$ ([[def-cantor-set]]). The other is the cut map
$x \mapsto \{q \in \mathbb{Q} : q < x\}$, injective because $\mathbb{Q}$ is dense
in $\mathbb{R}$ ([[lem-of-q-dense]]), and $\mathcal{P}(\mathbb{Q})$ is a copy of
$\mathcal{P}(\mathbb{N})$ because $\mathbb{Q}$ is countable
([[thm-rationals-countable]]). [[thm-schroder-bernstein]] closes the loop, and it
is choice free, which is what makes clause (a) a theorem of ZF.

## The 1 citing use(s), quoted verbatim from the citing items

### `ex-cardinal-functions-of-the-lower-limit-line` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: For the lower-limit line, $\\chi=d=L=c=\\aleph_0$ and $w=2^{\\aleph_0}$ under choice

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.
