# Frontier-22 published real-power and convexity-calculus audit

Date: 2026-09-11

## Scope and deduplication

This bounded audit closes the exact calculus, order, continuity and Borel
supplier chain deferred from conditional `L^p` contraction. Complete targets
were read from real powers and convexity through secant slopes, one-sided
derivatives, supporting lines, derivative monotonicity, Caratheodory continuity,
elementary absolute-value continuity and Borel preimages. It is not a census of
all real-analysis consumers.

Before classification, the whole canonical ledger and bounded index were
searched by every exact ID, title, alias, the real-power/convexity mechanisms,
and all supplier IDs below. `def-real-power` and
`thm-real-power-continuity-and-derivatives` each had exactly one U-P row; they
move rather than duplicate and retain that prior impact history. The other 22
items were unclassified. The A-P row for `thm-algebra-of-derivatives` concerns
only its colliding alias `thm-product-rule`; these proofs cite its exact ID and
use its sound constant/product derivative clauses. No published item or
workflow state was edited.

## Bounded no-repair-needed dispositions

| Item | SHA-256 | Exact disposition |
|---|---|---|
| `def-real-power` | `0f3bdf4d66c00b46e227ed87538536a89ce7cc11d3cf3b3cb8238029db02c0e3` | Positive bases use `exp(x log a)` and the zero-base convention is restricted to positive exponents, leaving the genuinely undefined cases out. U-P to clear. |
| `thm-real-power-continuity-and-derivatives` | `9597fe1cf0d47bec377fff76e3e748de9e542e948445b844e8b436c298961478` | Chain rule gives both derivatives on their stated domains; the usual exponential quotient identity gives `alpha x^(alpha-1)`. The exact derivative-algebra ID is used, so its alias collision is irrelevant. U-P to clear. |
| `def-convex-concave-and-midpoint-convex-functions` | `4b7b0994262f983e5f5f7ea24555ec5c84eafbba272fd663de9c9c70c18f0d9d` | The interval, endpoint-weight and strictness conventions are coherent. New clear. |
| `lem-three-slope-inequality-for-convex-functions` | `f185b4fdfd0a8e741bb4962f38e555fdfeb021a53ef8e888af9de86e6a019028` | Substituting the middle point as a convex combination and rearranging positive factors yields both secant inequalities. New clear. |
| `thm-convex-functions-are-locally-lipschitz-and-continuous` | `0c2ec0093d5dc21f6c98ce2c6dfb3bde7a02af39ed7f0abe15ab64e829f2c351` | Two exterior secants bound every interior secant; their finite absolute maximum gives the Lipschitz constant, including the zero case. New clear. |
| `def-one-sided-derivatives-of-real-functions` | `95ae2a50dd528459dfe61dc3d1764307bae9ddaccbe9b74510260fd2edb84b8d` | Left/right difference-quotient limits and their agreement with the ordinary derivative are stated on the correct one-sided domains. New clear. |
| `thm-monotone-one-sided-limits-exist` | `bc008588843af49d59fe1efd194a73892a60b68313fc64f2ed394cebb79652b9` | Order-convexity makes each nonempty side accumulate at the point; completeness supplies the bounded supremum/infimum and the epsilon characterization proves the limits. New clear. |
| `thm-one-sided-derivatives-of-convex-functions` | `d489f512973e7bf951cbaae0671727b25eae3622ec75c5710c41e09932f5b470` | Monotone secant functions have finite locally bounded one-sided limits, and the three-slope inequalities give the full displayed derivative chain. New clear. |
| `def-supporting-line-for-a-real-function` | `8e6443cb7b0af17b2e8ba4bdcf8847c05a602f3862258c61febfdc3514bbc8c3` | The global affine lower-support convention at an interior point is precise. New clear. |
| `thm-supporting-lines-for-convex-functions` | `37ec7cfe96d06cd5cdd5567f3843c0f7916cc14785aee04cf89680beaba75cd5` | Left and right secant inequalities separately give the affine lower bound on both sides of the contact point. New clear. |
| `thm-differentiable-convex-functions-and-monotone-derivatives` | `f2358ee248cb55792c9b5add6f35d98af4f2f089d634e575b7317e82b2e61147` | Convex derivative order proves one direction; subtracting the tangent slope and applying derivative monotonicity on each side proves the supporting inequality and converse. New clear. |
| `cor-second-derivative-characterises-convexity` | `0444d571d3b4ba975fe411bbb21d0b54d42bf5b77a85276b7fa81983394e8235` | Monotonicity of the first derivative is equivalent to convexity, and differentiability converts that monotonicity exactly to nonnegative second derivative. New clear. |
| `thm-monotonicity-from-the-derivative` | `21a0d966012626c6142b772ab9ebebf60678d78e3ee3c12fa9e0f2c9859bf035` | The MVT proves all four forward sign clauses on arbitrary order-convex intervals; signed difference quotients prove only the correct weak converse. New clear. |
| `thm-natural-logarithm-laws` | `1ed9090c067d692276c30502c1d5a2ffbd4413e6fd3e18c0aef93f631581b5f8` | The continuous increasing exponential inverse gives order/range/continuity, while injectivity and the addition/reciprocal identities give the logarithm laws. New clear. |
| `thm-squeeze-for-function-limits` | `b4f08abff559f7c4f9fa8e73b759e4c4e6f2f76e29fe8b9865a3650d2e00612f` | The minimum of the two outer radii and the local-order radius gives the direct epsilon-delta proof with no sequence or choice. New clear. |
| `lem-of-triangle-inequality` | `70679548cdd18bfbdd3151535273fa9065fc6b886e8c6f59eed1f6bcc3cf73fb` | Adding the two absolute-value order intervals and considering the two signs of the sum proves the ordered-field triangle inequality. New clear. |
| `cor-of-reverse-triangle` | `3312c9fae90494d0e90bed23987d3feb1aa9d1e33e58d77d444bdbf311ff59a1` | Applying triangle twice bounds both signs of the difference of moduli. New clear. |
| `thm-algebra-of-continuous-functions` | `084fdbf21bbc9d6d2aced1a88012b246080c37b6da09768ae0ac70622684711e` | Isolated and limit points are separated; limit algebra proves sums/products/quotients, reverse triangle proves modulus, and the exact affine formulas prove max/min. New clear. |
| `thm-caratheodory-characterisation` | `0950ab2da48e0bd236c03d895dab259b40efd6857388fbb78ebd9ab0b8bf6510` | Extending the difference quotient by its limit produces the continuous factor; conversely the factorization identifies the quotient off the point. Continuity gives uniqueness at the point. New clear. |
| `cor-differentiable-implies-continuous` | `80649276f125ef975b7f8fa9ba27ba516f135d08a74f0c0e0fb8e40f8304c0dd` | The Caratheodory factor times `x-c` is continuous and reconstructs the function. New clear. |
| `def-borel-sigma-algebra` | `671d9575301358f50a36faa3085d06165d8ac63212d6c8d051bea14031cc7e6c` | The generated sigma-algebra of open sets is well defined by the supplied minimal generated-sigma-algebra theorem. New clear. |
| `thm-continuity-characterisations-top` | `7123f83646583c58beb422052e0d8c12ea28128a5f32181045619c0606082538` | Pointwise/open/closed/subbasis/closure characterizations are connected by preimage algebra, finite subbasic intersections and the neighbourhood characterization of closure. New clear. |
| `thm-continuous-preimages-of-borel-sets-are-borel` | `c41e8aea7b5b305843026fdfb7a57ae1e1b9955298adc35b7a18dac722a5459a` | Borel sets whose preimages are Borel form a sigma-algebra containing every open set, so generated-sigma-algebra minimality applies. New clear. |
| `lem-absolute-real-powers-are-convex` | `91ea1566bc7808b394fe636a3d50c62377f85f9f64a20e43f5484bd7ccee7e51` | Positive-base derivatives prove convexity for `p>1`, continuity at zero closes the half-line, the ordinary triangle inequality handles signs and `p=1`, and continuity gives Borel measurability. New clear. |

## Frontier impact and limits

This completes the deferred supplier audit for the real-power convexity clause
used by conditional `L^p` contraction. It changes no earlier A-P propagation:
conditional contraction still awaits the common integral/RN repair. No new
frontier blocker or repair pair was found.

No external source retrieval was needed because the complete local proofs and
exact interfaces settle the used clauses. This audit does not claim to cover
every consumer of these general calculus and topology results.
