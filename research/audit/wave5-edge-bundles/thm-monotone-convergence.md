# Citation-precision audit — everything that cites `thm-monotone-convergence`

## The target, as it actually stands on disk

`items/thm-monotone-convergence.md` — theorem — A nondecreasing sequence bounded above converges to the supremum of its range, and a nonincreasing sequence bounded below to the infimum

#### Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let
$S = \{x_k : k \in \mathbb{N}\}$ be its range.

1. If $(x_k)$ is nondecreasing ([[def-monotone-sequence]]) and $S$ is bounded
   above ([[def-bounded-set]]), then $(x_k)$ converges ([[def-real-limit]]) and
   $$\lim_{k} x_k = \sup S .$$
2. If $(x_k)$ is nonincreasing and $S$ is bounded below, then $(x_k)$ converges
   and $$\lim_{k} x_k = \inf S .$$

Both suprema and infima exist under the stated hypotheses: $S$ is nonempty, so
the least-upper-bound property ([[def-complete-ordered-field]]) supplies the
first and [[thm-infimum-property]] the second, and each is unique
([[lem-sup-unique]]).

This is the first place in this track where the least-upper-bound property
produces a **limit**. Everything on the sequences page held in any Archimedean
ordered field; the theorem below does not, and the sequence of decimal
truncations of $\sqrt 2$ inside $\mathbb{Q}$ is the standard witness of its
failure there.

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-dini-on-the-unit-interval` (cross-batch, page function-space-topologies-examples)

Title: Dini's theorem applied to a nondecreasing sequence of piecewise linear approximations on $[0,1]$, and what fails when the limit is not continuous

- [L6] Dini's theorem: on a compact metric space a sequence of continuous real functions with $g_k \le g_{k+1}$ pointwise, converging pointwise to a continuous $g$, converges to $g$ uniformly ([[thm-dini]], [[def-monotone-sequence]], [[thm-monotone-convergence]]).

### `thm-dini` (cross-batch, page function-space-topologies)

Title: Dini's theorem: on a compact metric space a nondecreasing sequence of continuous real functions converging pointwise to a continuous limit converges uniformly

- [L2] A convergent sequence of reals is bounded, and a nondecreasing sequence bounded above converges to the supremum of its range; limits of real sequences are unique ([[lem-convergent-implies-bounded]], [[thm-monotone-convergence]], [[lem-limit-unique]], [[def-bounded-set]], [[def-complete-ordered-field]], [[lem-sup-unique]]).
