# Citation-precision audit — everything that cites `thm-r-uncountable`

## The target, as it actually stands on disk

`items/thm-r-uncountable.md` — theorem — $\\mathbb{R}$ is uncountable (Cantor's nested intervals, 1874)

#### Statement

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).
Then $\mathbb{R}$ is **uncountable** ([[def-countable]]): there is no surjection
$\mathbb{N} \to \mathbb{R}$, so $\mathbb{R}$ is neither finite nor countably
infinite.

The proof is Cantor's original argument of 1874, not the decimal diagonal.
Assuming a surjection $f : \mathbb{N} \to \mathbb{R}$, one builds nested closed
intervals $[a_n, b_n]$ with $a_n < b_n$ and $f(n) \notin [a_{n+1}, b_{n+1}]$, and
then $\sup\{a_n\}$ is a real number that $f$ misses. **The decimal diagonal is
deliberately avoided**: decimal expansions are infinite series, which this
library has not yet constructed, so a diagonal proof here would rest on machinery
that does not exist. The diagonal argument survives in its non-circular form, on
power sets, as Cantor's theorem earlier on this page; see the remarks below.

**The construction uses no choice, and that is what the thirds are for.** Given
$[a_n, b_n]$ of length $d$, its three closed thirds
$[a_n, a_n + d/3]$, $[a_n + d/3, a_n + 2d/3]$, $[a_n + 2d/3, b_n]$ cannot all
contain $f(n)$, because the first and the third are disjoint; the rule takes the
**first one in that fixed order** which does not contain $f(n)$. That is a
definition by cases, so the whole construction is a single application of the
recursion theorem ([[thm-recursion]]) to one explicitly given function. A version
of the argument that says "pick a third avoiding $f(n)$" would be using dependent
choice, silently and unnecessarily.

## The 12 citing use(s), quoted verbatim from the citing items

### `ex-cardinal-functions-of-a-one-point-compactification` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: The one-point compactification of the discrete real line is compact and Lindelöf but is neither first countable nor separable

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-cardinal-functions-of-the-lower-limit-line` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: For the lower-limit line, $\\chi=d=L=c=\\aleph_0$ and $w=2^{\\aleph_0}$ under choice

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-countability-profile-of-the-lower-limit-plane` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: Assuming choice, the lower-limit plane is first countable, separable, and ccc, but not second countable or Lindelöf

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-the-cocountable-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cocountable topology on $\\mathbb{R}$ is $T_1$, has unique sequential limits, and is neither Hausdorff nor regular nor normal

- [L4] $\mathbb{R}$ is uncountable ([[thm-r-uncountable]]), so in particular it has at least three distinct points.

### `fs-every-t1-space-is-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: every $T_1$ space is Hausdorff

- [L3] $\mathbb{R}$ is uncountable ([[thm-r-uncountable]]), and every finite set is at most countable ([[def-countable]]); so $\mathbb{R}$ is not finite.
- - **Any infinite set would do.** $\mathbb{R}$ is chosen because its infinitude is already a theorem here ([[thm-r-uncountable]]); nothing in the argument uses the order or the arithmetic of $\mathbb{R}$.

### `fs-first-countable-spaces-are-second-countable` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: every first countable space is second countable

- [L3] The real line is uncountable ([[thm-r-uncountable]]).

### `fs-lindelofness-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: Lindelöfness is hereditary

- [L3] The real line is uncountable and every subset of a discrete space is open ([[thm-r-uncountable]], [[def-standard-topologies]]).

### `fs-lindelofness-is-productive` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, refuted: Lindelöfness is productive

- [L2] The rationals are at most countable and dense in the real line, the real line is uncountable, and a set injecting into an at most countable set is at most countable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[thm-r-uncountable]], [[lem-countable-iff-surjection-from-n]]).

### `fs-separability-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: separability is hereditary

- [L2] The rational numbers are at most countable and dense in the real line, and the real line is uncountable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[thm-r-uncountable]]).

### `fs-separable-spaces-are-second-countable` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: every separable space is second countable

- [L1] The rational numbers are at most countable and dense in the real line, and the real line is uncountable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[thm-r-uncountable]]).

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- [L8] Assuming the Axiom of Countable Choice, a union over $\mathbb{N}$ of at most countable sets is at most countable; a subset of an at most countable set is at most countable; and $\mathbb{R}$ is uncountable ([[thm-countable-union-of-countable]], [[def-countable-choice]], [[lem-subset-of-countable]], [[thm-r-uncountable]], [[def-countable]]).

### `fs-unique-sequential-limits-imply-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: a space in which every sequence has at most one limit is Hausdorff

- [L3] $\mathbb{R}$ is uncountable ([[thm-r-uncountable]]).
