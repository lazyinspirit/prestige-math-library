# Citation-precision audit — everything that cites `lem-ordinal-basics`

## The target, as it actually stands on disk

`items/lem-ordinal-basics.md` — lemma — Basic closure properties of ordinals

#### Statement

Let $\alpha$ and $\beta$ be ordinals ([[def-ordinal]]). Then:

**(a)** every element of $\alpha$ is an ordinal;

**(b)** $\alpha \notin \alpha$;

**(c)** $\alpha^{+} = \alpha \cup \{\alpha\}$ is an ordinal;

**(d)** if $A$ is a **nonempty** set of ordinals then $\bigcap A$ is an ordinal;

**(e)** if $A$ is any set of ordinals then $\bigcup A$ is an ordinal;

**(f)** $\alpha \subseteq \beta$ if and only if $\alpha \in \beta$ or
$\alpha = \beta$;

**(g)** any two ordinals are comparable under inclusion: $\alpha \subseteq \beta$
or $\beta \subseteq \alpha$.

Everything here is a theorem of ZF and uses no choice principle.

## The 6 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [L2] For ordinals exactly one of $\xi < \eta$, $\xi = \eta$, $\eta < \xi$ holds, and every nonempty set of ordinals has a least element ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-ordinal]]).

### `def-order-topology-on-an-ordinal` (published-backward, page separation-axioms)

Title: The order topology on an ordinal, with the half-open intervals $(\\alpha, \\beta]$ and the initial segments $[0, \\beta]$ as a basis

- transitive and $\beta \in \gamma$ ([[def-ordinal]], [[lem-ordinal-basics]]).
- of ZF ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).

### `ex-the-ordinal-spaces-omega-plus-one-and-omega-one` (published-backward, page separation-axioms-examples)

Title: $\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment

- [L1] $\omega$ is an ordinal and a limit ordinal, every element of $\omega$ is $0$ or a successor, and $m \in n$ is $m < n$ for naturals ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[lem-ordinal-basics]]).
- [L6] For ordinals exactly one of $\xi < \eta$, $\xi = \eta$, $\eta < \xi$ holds; $\alpha^{+}$ is an ordinal, and $\alpha^{+} = \{\, \xi : \xi \le \alpha \,\}$ ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-ordinal]]).

### `lem-cellularity-is-well-defined` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, $c(X)$ is a well-defined cardinal

- [L2] Cardinals are initial ordinals, a set of ordinals has union as its least upper bound, and mutual injections give a bijection ([[def-cardinal]], [[lem-ordinal-basics]], [[thm-schroder-bernstein]]).

### `lem-character-is-well-defined` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, $\\chi(x,X)$ and $\\chi(X)$ are well-defined cardinals

- [L3] Cardinals are initial ordinals, a set of ordinals has union as its least upper bound, and mutual injections give a bijection ([[def-cardinal]], [[lem-ordinal-basics]], [[thm-schroder-bernstein]]).

### `lem-ordinal-order-topology-is-t3` (published-backward, page separation-axioms)

Title: Every ordinal with its order topology has a basis of clopen sets, and is $T_1$, Hausdorff and regular

- [L1] For ordinals exactly one of $\zeta < \eta$, $\zeta = \eta$, $\eta < \zeta$ holds, and $<$ is transitive; every element of an ordinal is an ordinal ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-ordinal]]).
- - **No choice principle is used**, every ingredient being a theorem of ZF ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).
