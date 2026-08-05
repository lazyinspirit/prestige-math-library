# Citation-precision audit — everything that cites `thm-countable-union-of-countable`

## The target, as it actually stands on disk

`items/thm-countable-union-of-countable.md` — theorem — Countable unions of at most countable sets, assuming $\\mathrm{AC}_\\omega$

#### Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let
$(A_n)_{n \in \mathbb{N}}$ be a family of at most countable sets
([[def-countable]]) indexed by $\mathbb{N}$. Then

$$U = \bigcup_{n \in \mathbb{N}} A_n$$

is at most countable.

**The hypothesis $\mathrm{AC}_\omega$ is not decoration and it is not removable.**
It is spent at exactly one step, step 3.1 below, where one surjection
$\mathbb{N} \to A_n$ is selected for every $n$ at once. Each $A_n$ has such
surjections, in general many of them, and the countability assumption provides no
rule for singling one out. Without some choice principle the theorem is not
available at all: ZF alone does not prove it, **conditionally on the consistency
of ZF**, as recorded among this page's false statements and discussed in the
remarks below, where that item is named and linked. The
consistency hypothesis is not a formality and cannot be dropped: the separation
rests on an external independence result that this library quotes rather than
proves, and it cannot be stated without it.

## The 8 citing use(s), quoted verbatim from the citing items

### `ex-the-cocountable-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cocountable topology on $\\mathbb{R}$ is $T_1$, has unique sequential limits, and is neither Hausdorff nor regular nor normal

- [L3] A union of two at most countable sets is at most countable: this is the two-set instance of [[thm-countable-union-of-countable]] padded with copies of $\varnothing$, and it needs no choice principle, as [[def-standard-topologies]] records.

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- at step 5.1, through [[thm-countable-union-of-countable]]
- [L8] Assuming the Axiom of Countable Choice, a union over $\mathbb{N}$ of at most countable sets is at most countable; a subset of an at most countable set is at most countable; and $\mathbb{R}$ is uncountable ([[thm-countable-union-of-countable]], [[def-countable-choice]], [[lem-subset-of-countable]], [[thm-r-uncountable]], [[def-countable]]).

### `fs-unique-sequential-limits-imply-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: a space in which every sequence has at most one limit is Hausdorff

- [L2] A union of two at most countable sets is at most countable; this is the two-set instance of [[thm-countable-union-of-countable]], padded with copies of $\varnothing$, and it needs no choice principle, exactly as [[def-standard-topologies]] records for the cocountable topology itself.

### `lem-uncountable-delta-system-for-finite-sets` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, the uncountable $\\Delta$-system lemma for finite sets

- [L1] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable]]).

### `thm-countable-products-of-first-countable-spaces` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, a countable product of first countable spaces is first countable

- [L1] A product of two at most countable sets is at most countable, and under countable choice a countable union of at most countable sets is at most countable ([[thm-product-of-countable]], [[thm-countable-union-of-countable]]).

### `thm-countable-products-of-second-countable-spaces` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, a countable product of second countable spaces is second countable

- [L1] A product of two at most countable sets is at most countable, and under countable choice a countable union of at most countable sets is at most countable ([[thm-product-of-countable]], [[thm-countable-union-of-countable]]).

### `thm-metric-countability-equivalences` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, a metrizable space is second countable if and only if it is separable if and only if it is Lindelöf

- [L2] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]]).

### `thm-unordered-summability-of-real-families` (published-backward, page nets-and-filters-examples)

Title: Assuming countable choice, a real family is summable as a finite-subset net if and only if it has at most countable support and its nonzero terms are absolutely summable; its sum is independent of the enumeration

- [L1] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable-choice]]).
