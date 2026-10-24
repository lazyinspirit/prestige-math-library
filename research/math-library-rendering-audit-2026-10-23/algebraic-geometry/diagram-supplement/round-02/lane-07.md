# Round 02, lane 07: contracted curve negativity

**Item:** `thm-negativity-for-exceptional-curves-on-smooth-surfaces`  
**Finding:** An optional schematic diagram is warranted as an editorial aid. The source proof's sign and map relations are consistent; this is not a mathematical repair.

The assignment's bound snapshot SHA-256 matches `caee1827052b5b7f263505cf60fd56ea2f4e4056e7532f57d593170ea3282bed`. I viewed all three assigned local screenshot tiles at original resolution. They render the statement, facts, proof, and remarks; no rendering issue affects this candidate.

## Exact claims and source locations

The statement at lines 42–50 assumes a proper birational morphism `f:X→Y` and an integral curve `E⊂X` whose image is a single closed point `y`. Lines 46–48 state that `E` is an effective Cartier divisor, its conormal line bundle `O_X(-E)|_E` has positive degree, and `E·E<0`, equivalently the normal line bundle `O_X(E)|_E` has negative degree. Lines 50 and 86 explicitly disclaim a result for non-contracted curves and negative definiteness of the full intersection matrix of a reducible exceptional divisor.

Proof lines 80, 82, and 84 respectively establish Cartierness, apply the positive conormal-degree lemma, and use the restriction-degree identity plus additivity for inverse line bundles. In detail:

- With `i:E↪X`, the composition `f∘i:E→Y` factors through `{y}↪Y`.
- Since `E` is Cartier, its ideal is `I_E=O_X(-E)`, and its conormal bundle is `I_E/I_E² ≅ O_X(-E)|_E`.
- The normal bundle is its dual, `O_X(E)|_E`. Thus its degree is the negative of the conormal degree.
- `E·E=deg_E(O_X(E)|_E)=−deg_E(O_X(-E)|_E)<0`.

The domains and codomains are consistent: `i:E↪X`, `f:X→Y`, and the contraction identifies the composite image with the point `y`. No map or sign error was found.

## Diagram proposal

Use a small schematic contraction map with a sign ledger for the two restricted line bundles. Show `E` mapping to `y`, label the conormal bundle and its positive degree, show the normal bundle as its dual with negative degree, and connect that degree to `E·E`.

Draw `E` simply as an integral curve, without implying smoothness. Keep the diagram about this one contracted curve. Do not add a component-intersection matrix or suggest negative definiteness for a reducible exceptional divisor. The statement and proof remain responsible for the argument; the diagram only makes the map and sign conversion easier to follow.

The complete structured finding, screenshot hashes, and checks are in the companion JSON file.
