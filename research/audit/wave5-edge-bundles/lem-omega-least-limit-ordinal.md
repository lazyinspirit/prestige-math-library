# Citation-precision audit — everything that cites `lem-omega-least-limit-ordinal`

## The target, as it actually stands on disk

`items/lem-omega-least-limit-ordinal.md` — lemma — $\\omega$ is the least limit ordinal

#### Statement

Let $\mathbb{N} = \omega$ be the natural numbers ([[def-natural-numbers]]) with
their usual order ([[def-nat-order]]). Then:

**(i)** for all $m, n \in \mathbb{N}$, $m \in n$ if and only if $m < n$;

**(ii)** every natural number is an ordinal ([[def-ordinal]]), and $\omega$ is an
ordinal;

**(iii)** $\omega$ is a limit ordinal ([[def-limit-ordinal]]);

**(iv)** every ordinal $\alpha \in \omega$ is $0$ or a successor ordinal, and
consequently $\omega$ is the **least** limit ordinal: $\omega \subseteq \gamma$,
that is $\omega \le \gamma$, for every limit ordinal $\gamma$.

So the natural numbers are exactly the ordinals below $\omega$, and $\omega$ is
the first ordinal at which induction acquires a limit clause.

**Everything here is a theorem of ZF, and no choice principle is used.** The
only axiom beyond the basic ones that any of it needs is Infinity, which is what
makes $\omega$ a set at all ([[lem-omega-smallest-inductive]]).

## The 3 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [L1] $\alpha + 1 = \alpha^{+}$; $\omega$ and $\omega_1$ are limit ordinals; $\omega_1$ is uncountable and every ordinal below it is at most countable ([[def-ordinal-addition]], [[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-first-uncountable-ordinal]], [[def-countable]]).

### `def-order-topology-on-an-ordinal` (published-backward, page separation-axioms)

Title: The order topology on an ordinal, with the half-open intervals $(\\alpha, \\beta]$ and the initial segments $[0, \\beta]$ as a basis

- $\omega$, the least limit ordinal ([[lem-omega-least-limit-ordinal]]), is the

### `ex-the-ordinal-spaces-omega-plus-one-and-omega-one` (published-backward, page separation-axioms-examples)

Title: $\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment

- ([[lem-omega-least-limit-ordinal]]). Then:
- [L1] $\omega$ is an ordinal and a limit ordinal, every element of $\omega$ is $0$ or a successor, and $m \in n$ is $m < n$ for naturals ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[lem-ordinal-basics]]).
