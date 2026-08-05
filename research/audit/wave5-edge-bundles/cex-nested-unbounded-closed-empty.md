# Citation-precision audit — everything that cites `cex-nested-unbounded-closed-empty`

## The target, as it actually stands on disk

`items/cex-nested-unbounded-closed-empty.md` — counterexample — The nested closed unbounded sets $[k, \\infty)$ have empty intersection, so boundedness cannot be dropped

#### Statement refuted

**Refuted claim:** a nested sequence of nonempty **closed** intervals has
nonempty intersection, boundedness being unnecessary
([[thm-nested-interval-property]], [[def-interval]]).

The witness is $I_k = [k, \infty)$ for $k \in \mathbb{N}$, where $k$ denotes the
canonical natural of $\mathbb{R}$. Each is a nonempty closed interval, the family
is nested, and

$$\bigcap_{k \in \mathbb{N}} [k, \infty) = \emptyset .$$

[[thm-nested-interval-property]] therefore cannot be improved by deleting
"bounded" from its hypotheses. Together with the open-interval
counterexample on this page, which deletes "closed" instead, this shows
that the two hypotheses are independent and that neither is an artefact of the
proof.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-nested-interval-property` (forward, page monotone-sequences-and-cauchy-completeness)

Title: A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$

- closedness, and [[cex-nested-unbounded-closed-empty]], which keeps closedness
