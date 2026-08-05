# Citation-precision audit — everything that cites `thm-schroder-bernstein`

## The target, as it actually stands on disk

`items/thm-schroder-bernstein.md` — theorem — The Schröder-Bernstein theorem

#### Statement

Let $A$ and $B$ be sets with $A \preceq B$ and $B \preceq A$
([[def-equinumerous]]). Then $A \approx B$.

Equivalently: if there is an injection $A \to B$ and an injection $B \to A$, then
there is a bijection $A \to B$ ([[def-injection-surjection-bijection]]).

**The proof uses no choice principle.** The bijection is written down explicitly
from the two given injections, and the only "selections" it makes are of the
unique preimage of a point under an injection, which is determined, not chosen.
The single infinite construction is an application of the recursion theorem
([[thm-recursion]]), whose data are a set, a starting point and one function.

## The 2 citing use(s), quoted verbatim from the citing items

### `lem-cellularity-is-well-defined` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, $c(X)$ is a well-defined cardinal

- [L2] Cardinals are initial ordinals, a set of ordinals has union as its least upper bound, and mutual injections give a bijection ([[def-cardinal]], [[lem-ordinal-basics]], [[thm-schroder-bernstein]]).

### `lem-character-is-well-defined` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, $\\chi(x,X)$ and $\\chi(X)$ are well-defined cardinals

- [L3] Cardinals are initial ordinals, a set of ordinals has union as its least upper bound, and mutual injections give a bijection ([[def-cardinal]], [[lem-ordinal-basics]], [[thm-schroder-bernstein]]).
