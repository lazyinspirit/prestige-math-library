# Citation-precision audit — everything that cites `def-first-uncountable-ordinal`

## The target, as it actually stands on disk

`items/def-first-uncountable-ordinal.md` — definition — The first uncountable ordinal $\\omega_1 := \\aleph(\\omega)$

#### Definition

The **first uncountable ordinal** is

$$\omega_1 \;:=\; \aleph(\omega),$$

the Hartogs number of $\mathbb{N} = \omega$ ([[thm-hartogs]],
[[def-natural-numbers]]): the least ordinal ([[def-ordinal]]) that admits no
injective function into $\mathbb{N}$. Equivalently, by that theorem,
$\omega_1$ is the set of order types of the well-ordered subsets of
$\mathbb{N}$.

**Existence is a theorem of ZF.** [[thm-hartogs]] is choice free, so $\omega_1$
is available without any choice principle, and its defining property needs
none either.

**"Uncountable" is [[def-countable]]'s word**, meaning "not at most countable",
and it is not redefined here. That $\omega_1$ deserves the name — that it is
uncountable, that every ordinal below it is at most countable, that it is a
cardinal and a limit ordinal — is proved in
[[thm-omega-one-is-the-least-uncountable-ordinal]], which is what discharges the
naming obligation of this definition.

## The 2 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [L1] $\alpha + 1 = \alpha^{+}$; $\omega$ and $\omega_1$ are limit ordinals; $\omega_1$ is uncountable and every ordinal below it is at most countable ([[def-ordinal-addition]], [[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-first-uncountable-ordinal]], [[def-countable]]).

### `ex-the-ordinal-spaces-omega-plus-one-and-omega-one` (published-backward, page separation-axioms-examples)

Title: $\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment

- ordinal ([[def-first-uncountable-ordinal]]), so that $\omega_1$ is a limit
- [L3] $\omega_1$ is uncountable, is a limit ordinal, and every ordinal below it is at most countable ([[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-first-uncountable-ordinal]], [[def-countable]]).
