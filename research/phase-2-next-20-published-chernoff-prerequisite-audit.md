# Published prerequisite audit: finite-space Chernoff bound

Date: 2026-09-11

## Scope and deduplication

This bounded audit reads the published calculus, exponential/logarithm,
finite-expectation and Markov interfaces used by the active finite-space
Chernoff proof. It follows the mean-value theorem through Cauchy MVT, Rolle and
the real extreme-value theorem specifically to test for an inherited choice
assumption. It does not certify unused transitive closures or the draft proof.
Published files were read only.

Before disposition, the whole canonical ledger was searched by exact IDs,
listed aliases, the derivative-sign/mean-value and finite-expectation
mechanisms, and supplier IDs. Three targets had one U-P row. Two targets were
already bounded clear and are only reconfirmed. Nineteen targets were outside
the index. One U-P target has a genuine alias collision and moves to A-P; the
other two move to bounded clear. No record is duplicated.

## Confirmed published interface defect

### `thm-algebra-of-derivatives`

Frozen SHA-256:
`546602fabd72f8285c6acfa5215aac2f6f27e048383f9339bd7778b61a99da2a`.

The theorem's Caratheodory-factor proofs of the sum, scalar, product and
restricted-domain quotient rules are mathematically sound and choice-free.
Its alias list, however, includes `thm-product-rule`. That is already the exact
ID of a different published theorem, the finite-cardinality result
`|A x B|=|A||B|` (SHA-256
`4afc1dc1544f53001032f3652518188b042147f751d9f8d91645756cfd6af27f`).
The collision makes alias lookup ambiguous and can redirect a dependency to a
theorem of the wrong type. The finite-sum/Fubini lemma actually depends on the
cardinality theorem under that exact ID.

Repair by deleting the conflicting alias or replacing it with an unused name
such as `thm-derivative-product-rule`. The aliases
`thm-differentiation-rules` and `thm-quotient-rule` do not collide in the
current published inventory. The active Chernoff item cites the exact
`thm-algebra-of-derivatives` ID, so the alias defect does not block it. No new
Phase-2 pair is needed.

## Mean-value and elementary-function chain

The mean-value direction used to turn a derivative sign into monotonicity does
not inherit countable choice:

| Published item | SHA-256 | Bounded proof receipt |
|---|---|---|
| `cor-mean-value-theorem` | `dc6c6f5c91dca7c44a594a0b6d6b1be6f3ab67661f57487383b215731fc6a596` | Substituting the identity function into Cauchy MVT gives the exact equation; aliases `thm-mean-value-theorem` and `thm-lagrange-mean-value` have no classification-ID collision. |
| `thm-cauchy-mean-value` | `0edb30be95188d8dc57bdfb3d713dbc954ea74ed9004312390d3270eee31a9a2` | The auxiliary linear combination has equal endpoint values and Rolle yields the product-form conclusion without division; alias `thm-extended-mean-value-theorem` has no collision. |
| `thm-rolle` | `07ce0c8cef8890e0ba3b27b4cb193b687367d416f4b78c4f6ab0de60308b5585` | The attained max/min case split forces an interior extremum or a constant function. Only finitely many witnesses are used. |
| `thm-extreme-value-r` | `eddb6b6f59841438f78cc37e54ccea1532ad3875b3993836978338d98598cf83` | Reconfirmed existing bounded clear: compact image, real sup/inf and closedness prove attainment directly, with no sequential compactness or CC. |
| `thm-chain-rule` | `28827465de1652f5f3817189715463cb07b645a9a4b0ddccf31a16d01336e9f6` | Reconfirmed existing bounded clear; its Caratheodory-factor proof is the exact choice-free composition rule used. |
| `thm-continuous-inverse` | `0aec01ea253cbce02195941da9a33d1502056a5e9bb0a6e403bb442bebe5c5b3` | Strict monotonicity, interval image and the monotone interval-image criterion give the inverse and its continuity, including the decreasing reduction. |
| `thm-derivative-of-an-inverse` | `a11cc22d8fa608b0bf33be8bd6a830cbd7d84fd84624fb05f4fe87b3deddc325` | The inverse increment factor is continuous when the derivative is nonzero; the zero-derivative branch is excluded by the derivative of the identity. Alias `thm-inverse-function-rule` has no collision. |

The exact exponential and logarithm clauses are also coherent:

| Published item | SHA-256 | Bounded proof receipt |
|---|---|---|
| `def-real-exponential-function-and-e` | `2fa39e65aef0583a6b440f5749c0e71fa99b3b8e9cbebb313a38eb779c61005a` | The all-real power-series supplier makes the definition total and gives `exp(0)=1`. |
| `thm-exponential-addition-formula` | `84a23a1208fbd5ad930c27006d2c11c8f8509e1a0a450c40cc2826bc383c9a83` | The all-radius Cauchy product and binomial coefficient identity give the coefficient of `exp(x+y)`. |
| `cor-exponential-reciprocal-and-positivity` | `2ab7f256462b7d8b572cb3b230cfe30b18cd08079720b0efbbfa773e33ebd5f5` | Addition at `x,-x`, the square at `x/2`, and nonzero-square positivity give positivity and the reciprocal formula. |
| `thm-derivative-of-exponential` | `c593d1f1e812a4013f921b2051fd124972f83827c8c9f4c72a5c42407afd7116` | Termwise differentiation and factorial cancellation give `exp'=exp`; infinite radius permits iteration. |
| `thm-exponential-is-strictly-increasing` | `fc162f9dd3d013b423daa5062cb9cfce0151b493f05d7693dce2206c496994c5` | The choice-free MVT chain and positivity give strict increase; power-series continuity gives continuity. |
| `def-natural-logarithm` | `814abdbfc557c35b8e8864348eb3b4ff61d00f6287aee9f35485716deac29529` | The published exponential bijection makes the inverse on positive reals well defined. |
| `thm-logarithm-derivative-and-integral` | `63c8f1d3f5928a812fa5a7acc9610725c05b9cd6ccb7f93a3750a24bf2461c81` | In the used clause, the inverse derivative theorem and positivity give `log'(x)=1/x`; the integral clause was read and is coherent but is not needed by this consumer. |

## Finite expectation and Markov chain

All sets of outcomes and attained values below are finite. The expectation
identities therefore use only finite sums and introduce no choice principle.

| Published item | SHA-256 | Bounded proof receipt |
|---|---|---|
| `def-bernoulli-and-binomial-random-variables` | `a44b4944c05900911c6d926a147090b5666005c7724441fa7c55c3426afe626b` | The Bernoulli probabilities, independent finite sum and empty-sum convention are coherent, including deterministic endpoints. |
| `def-independence-of-finite-random-variables` | `bda40cb6bc70190bb7534ffd60a45a299ae3d276f3ba80a416f01d217e557365` | Mutual independence is stated on every nonempty subfamily and every attained-value tuple; empty and singleton families are explicit. |
| `lem-finite-sum-reindexing-and-fubini` | `9041b1e2dcc2a0d4d44ca7b42385a7b0bff21f7f253d9d40f05df63f5de70adb` | Enumeration independence, disjoint concatenation and row/column enumerations establish all finite reindexing clauses. Its exact `thm-product-rule` edge correctly names the cardinal theorem. |
| `thm-product-rule` | `4afc1dc1544f53001032f3652518188b042147f751d9f8d91645756cfd6af27f` | Slicing proves finite binary products and induction proves finite indexed products, with the empty product computed. The theorem itself is sound; the collision belongs to the derivative theorem's alias. |
| `lem-expectation-by-distribution` | `e15b7c1ce76a60eb7e0711368d1b9333ba0d6b64f2c78d7a42c46c29fb8eb329` | Partitioning the finite outcome space into attained-value fibres and reindexing the finite sum gives the formula. |
| `thm-expectation-of-products-of-independent-random-variables` | `0883c7bf65e602f0e34b30fe0318ccf80035c9a850523a3be1dc36e2b93b2cb7` | Joint attained-value grouping, the mutual-independence formula and finite Fubini factor the product expectation; the empty family is explicit. |
| `thm-expectation-monotonicity-and-bounds` | `c45f46b0e9591457011653eca756103edddfb9c92281d39e7ef79f2b20174c04` | Nonnegative finite weights preserve pointwise order and constants give the min/max bounds. |
| `lem-indicator-expectation-and-products` | `1c2c486c6d4e0d74c19343f1a14068b9429ba1d9aebdac63b9a998150b72606d` | Direct finite expansion gives indicator expectation, intersection products and event counts, including empty conventions. |
| `thm-markov-inequality` | `4b57c113b5ab02eba82f2178840832b116ccbba4fffef61b7d42f85b6a442be1` | The pointwise bound `X >= a 1_{X>=a}`, expectation monotonicity and positive division give the weak-threshold inequality exactly used. |

## Reconciliation and live impact

`thm-algebra-of-derivatives` moves from U-P to A-P for the alias collision.
`def-real-exponential-function-and-e` and `thm-continuous-inverse` move from
U-P to bounded clear. Nineteen fully read IDs enter the bounded-clear census.
The already-clear real EVT and chain rule are reconfirmed without new rows.

The active Chernoff proof names the derivative algebra theorem by exact ID and
uses finite probability spaces throughout. The published-interface defect is
therefore not load-bearing for it, and no unavailable prerequisite or new
Phase-2 pair was found in this bounded chain.
