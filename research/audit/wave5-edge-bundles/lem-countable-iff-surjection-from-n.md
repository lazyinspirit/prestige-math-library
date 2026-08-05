# Citation-precision audit — everything that cites `lem-countable-iff-surjection-from-n`

## The target, as it actually stands on disk

`items/lem-countable-iff-surjection-from-n.md` — lemma — A nonempty set is at most countable iff it is a surjective image of $\\mathbb{N}$

#### Statement

Let $A$ be a nonempty set. Then $A$ is at most countable ([[def-countable]]) if
and only if there is a surjection $s : \mathbb{N} \to A$
([[def-injection-surjection-bijection]]).

Moreover, from any such surjection an injection $A \to \mathbb{N}$ is obtained
explicitly, without any choice, by

$$j(a) := \min\{\, k \in \mathbb{N} : s(k) = a \,\}.$$

This is the working form of countability used everywhere below: to prove a
nonempty set countable it suffices to list its elements, repetitions and all.

**No choice principle is used.** The backward direction is where an appeal to
choice would be natural ("for each $a$ pick some $k$ with $s(k) = a$") and it is
avoided outright, because $\min$ is canonical: every nonempty set of naturals has
a *least* element ([[thm-well-ordering-principle]]), so $j(a)$ is determined by
$a$ and $s$ alone.

## The 9 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [L4] The image of $\mathbb{N}$ under a function is nonempty and at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

### `ex-the-cocountable-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cocountable topology on $\\mathbb{R}$ is $T_1$, has unique sequential limits, and is neither Hausdorff nor regular nor normal

- [L2] The range of a sequence is nonempty and at most countable, and a subset of an at most countable set is at most countable ([[lem-countable-iff-surjection-from-n]], [[lem-subset-of-countable]]).

### `ex-the-ordinal-spaces-omega-plus-one-and-omega-one` (published-backward, page separation-axioms-examples)

Title: $\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment

- [L5] The range of a sequence is nonempty and at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

### `fs-lindelofness-is-productive` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, refuted: Lindelöfness is productive

- [L2] The rationals are at most countable and dense in the real line, the real line is uncountable, and a set injecting into an at most countable set is at most countable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[thm-r-uncountable]], [[lem-countable-iff-surjection-from-n]]).

### `fs-separable-spaces-are-second-countable` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: every separable space is second countable

- [L4] Every nonempty at most countable set can be enumerated by a surjection from $\mathbb N$ ([[lem-countable-iff-surjection-from-n]]).

### `fs-unique-sequential-limits-imply-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: a space in which every sequence has at most one limit is Hausdorff

- [L1] The range $\{\, x_k : k \in \mathbb{N} \,\}$ of a sequence is nonempty and at most countable, the sequence itself being a surjection of $\mathbb{N}$ onto it; and a subset of an at most countable set is at most countable ([[lem-countable-iff-surjection-from-n]], [[lem-subset-of-countable]], [[def-countable]]).

### `lem-countable-local-bases-can-be-open-and-decreasing` (published-backward, page countability-axioms-and-cardinal-functions)

Title: A countable local base can be chosen open and decreasing

- [L2] Every nonempty at most countable set is a surjective image of $\mathbb N$ ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

### `lem-large-cantor-cubes-are-not-separable` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, if $|I|>2^{\\aleph_0}$, then the Cantor cube $2^I$ is not separable

- [L1] Every nonempty at most countable set is a surjective image of $\mathbb N$ ([[lem-countable-iff-surjection-from-n]]).

### `prop-separable-spaces-are-ccc` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Every separable space satisfies the countable chain condition

- [L1] A nonempty countable set can be enumerated by natural numbers ([[lem-countable-iff-surjection-from-n]]).
