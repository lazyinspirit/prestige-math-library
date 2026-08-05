# Citation-precision audit — everything that cites `lem-ordinal-trichotomy`

## The target, as it actually stands on disk

`items/lem-ordinal-trichotomy.md` — lemma — Trichotomy and well-ordering of the ordinals

#### Statement

For ordinals $\alpha$ and $\beta$ ([[def-ordinal]]), **exactly one** of

$$\alpha \in \beta, \qquad \alpha = \beta, \qquad \beta \in \alpha$$

holds. Moreover every nonempty **set** $A$ of ordinals has an $\in$-least
element, and consequently $A$ ordered by
$\alpha \le \beta :\iff \alpha \subseteq \beta$ is a well-order
([[def-well-order]]) whose strict part is membership.

So the ordinals are linearly ordered by $\in$, every set of them is well
ordered, and [[thm-transfinite-induction]] is available on any such set. No
choice principle is used.

## The 8 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [L2] For ordinals exactly one of $\xi < \eta$, $\xi = \eta$, $\eta < \xi$ holds, and every nonempty set of ordinals has a least element ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-ordinal]]).

### `def-order-topology-on-an-ordinal` (published-backward, page separation-axioms)

Title: The order topology on an ordinal, with the half-open intervals $(\\alpha, \\beta]$ and the initial segments $[0, \\beta]$ as a basis

- *(B2), intersections.* By trichotomy of the ordinals ([[lem-ordinal-trichotomy]])
- of ZF ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).

### `ex-the-ordinal-spaces-omega-plus-one-and-omega-one` (published-backward, page separation-axioms-examples)

Title: $\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment

- [L6] For ordinals exactly one of $\xi < \eta$, $\xi = \eta$, $\eta < \xi$ holds; $\alpha^{+}$ is an ordinal, and $\alpha^{+} = \{\, \xi : \xi \le \alpha \,\}$ ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-ordinal]]).

### `lem-character-is-well-defined` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, $\\chi(x,X)$ and $\\chi(X)$ are well-defined cardinals

- [L2] Every nonempty set of ordinals, and hence every nonempty set of cardinals, has a least member ([[lem-ordinal-trichotomy]]).

### `lem-density-is-well-defined` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, $d(X)$ is a well-defined cardinal

- [L1] Every nonempty set of ordinals, and hence every nonempty set of cardinals, has a least member; this is a theorem of ZF ([[lem-ordinal-trichotomy]]).

### `lem-lindelof-degree-is-well-defined` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, $L(X)$ is a well-defined cardinal

- [L1] Every nonempty set of ordinals, and hence every nonempty set of cardinals, has a least member; this is a theorem of ZF ([[lem-ordinal-trichotomy]]).

### `lem-ordinal-order-topology-is-t3` (published-backward, page separation-axioms)

Title: Every ordinal with its order topology has a basis of clopen sets, and is $T_1$, Hausdorff and regular

- [L1] For ordinals exactly one of $\zeta < \eta$, $\zeta = \eta$, $\eta < \zeta$ holds, and $<$ is transitive; every element of an ordinal is an ordinal ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-ordinal]]).
- - **No choice principle is used**, every ingredient being a theorem of ZF ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).

### `lem-weight-is-well-defined` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, $w(X)$ is a well-defined cardinal

- [L1] Every nonempty set of ordinals, and hence every nonempty set of cardinals, has a least member; this is a theorem of ZF ([[lem-ordinal-trichotomy]]).
