# Citation-precision audit — everything that cites `thm-omega-one-is-the-least-uncountable-ordinal`

## The target, as it actually stands on disk

`items/thm-omega-one-is-the-least-uncountable-ordinal.md` — theorem — $\\omega_1$ is uncountable, every ordinal below it is at most countable, it is a cardinal and a limit ordinal, and its existence is a theorem of ZF

#### Statement

Let $\omega_1 = \aleph(\omega)$ ([[def-first-uncountable-ordinal]]). Then:

**(a) The bridge.** An ordinal $\alpha$ ([[def-ordinal]]) injects into
$\mathbb{N}$ if and only if $\alpha$ is at most countable
([[def-countable]]).

**(b)** $\omega_1$ is **uncountable**.

**(c)** Every ordinal $\alpha \in \omega_1$ is at most countable; so $\omega_1$
is the least uncountable ordinal.

**(d)** $\omega_1$ is a **cardinal**, that is an initial ordinal
([[def-cardinal]]): no $\alpha \in \omega_1$ is equinumerous with $\omega_1$.

**(e)** $\omega_1$ is a **limit ordinal** ([[def-limit-ordinal]]).

**All of this is a theorem of ZF and uses no choice principle.** That matters
here and is stated deliberately: [[thm-hartogs]] is choice free,
[[lem-subset-of-countable]] and [[lem-countable-iff-surjection-from-n]] are
choice free, so $\omega_1$ and every property listed above exist in ZF alone.
The cost begins two items later on this page, at the boundedness theorem for at
most countable subsets of $\omega_1$, which genuinely needs countable choice.

## The 2 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [L1] $\alpha + 1 = \alpha^{+}$; $\omega$ and $\omega_1$ are limit ordinals; $\omega_1$ is uncountable and every ordinal below it is at most countable ([[def-ordinal-addition]], [[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-first-uncountable-ordinal]], [[def-countable]]).

### `ex-the-ordinal-spaces-omega-plus-one-and-omega-one` (published-backward, page separation-axioms-examples)

Title: $\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment

- uncountable ([[thm-omega-one-is-the-least-uncountable-ordinal]]). As a set,
- [L3] $\omega_1$ is uncountable, is a limit ordinal, and every ordinal below it is at most countable ([[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-first-uncountable-ordinal]], [[def-countable]]).
