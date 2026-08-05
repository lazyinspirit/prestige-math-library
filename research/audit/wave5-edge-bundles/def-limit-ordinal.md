# Citation-precision audit — everything that cites `def-limit-ordinal`

## The target, as it actually stands on disk

`items/def-limit-ordinal.md` — definition — Successor and limit ordinals

#### Definition

Let $\alpha$ be an ordinal ([[def-ordinal]]).

- $\alpha$ is a **successor ordinal** when $\alpha = \beta^{+} = \beta \cup \{\beta\}$
  for some ordinal $\beta$, which is then an ordinal by [[lem-ordinal-basics]];
- $\alpha$ is a **limit ordinal** when $\alpha \ne 0$ and $\alpha$ is not a
  successor ordinal.

Every ordinal is therefore exactly one of: $0$, a successor ordinal, or a limit
ordinal. The three cases are the three clauses of a definition or a proof by
transfinite recursion or induction over the ordinals.

## The 3 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [L1] $\alpha + 1 = \alpha^{+}$; $\omega$ and $\omega_1$ are limit ordinals; $\omega_1$ is uncountable and every ordinal below it is at most countable ([[def-ordinal-addition]], [[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-first-uncountable-ordinal]], [[def-countable]]).

### `def-order-topology-on-an-ordinal` (published-backward, page separation-axioms)

Title: The order topology on an ordinal, with the half-open intervals $(\\alpha, \\beta]$ and the initial segments $[0, \\beta]$ as a basis

- limit ([[def-limit-ordinal]]). If $\xi = 0$ then $\{\xi\} = [0,0]$ is basic open;

### `ex-the-ordinal-spaces-omega-plus-one-and-omega-one` (published-backward, page separation-axioms-examples)

Title: $\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment

- [L1] $\omega$ is an ordinal and a limit ordinal, every element of $\omega$ is $0$ or a successor, and $m \in n$ is $m < n$ for naturals ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[lem-ordinal-basics]]).
