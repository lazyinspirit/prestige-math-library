# Frontier-22 published core analysis and probability audit

Date: 2026-09-11

This bounded audit covers eleven published direct suppliers of the active
22-pair frontier. Before classification, the canonical ledger was searched by
every exact ID, all aliases, the derivative/power-series, exponential Cauchy
product, conditional-expectation existence/uniqueness, strict-order,
independence-extension, indefinite-integral and weighted-measure mechanisms,
and the supplying IDs named below. None of the eleven had a classification
row. Each current file says `status: published`; the three older analytic
items with alias fields have empty alias lists. This audit adds one bounded
clear row per ID and no defect row.

## Trigonometric and complex-exponential interfaces

- `thm-sine-and-cosine-derivatives`, SHA-256
  `769096677446e7e81c4e162f33fbacc546ba018cd36829e371955f9affbb60bb`.
  The two defining series have infinite radius. Termwise differentiation
  cancels `2n+1` or `2n` against the factorial and reindexes to cosine or
  negative sine; evaluation at zero gives the stated initial values. The
  complete target and all three direct suppliers were read. This supplies the
  exact component derivatives used by the characteristic-function, Levy,
  sine-integral and Schwartz drafts.
- `thm-complex-exponential-addition-and-real-extension`, SHA-256
  `20e2cadd4febb232bef34dae213e5eb46e60c6c3a9d7a6cc48aca3a3ce4ed4a7`.
  Absolute convergence licenses the complex Cauchy product; the finite
  binomial coefficient identity gives the coefficient `(z+w)^n/n!`; and the
  embedded real series agrees termwise with the real exponential. The
  separately recorded `n=0` wording defect in
  `lem-binomial-theorem-over-complex-numbers` does not affect its correct
  displayed identity or this use.
- `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`,
  SHA-256
  `e7de7772f36b35fa2d289d55d6c533182a3786e84e7ba52fd0ed07416fe10ce2`.
  Addition plus Euler's formula gives the Cartesian form. Multiplicativity of
  modulus, the Pythagorean identity and real-exponential positivity give
  modulus `e^x`; the published quarter-turn values give Euler's identity.
  Every exact used supplier clause was read. Active consumers use precisely
  the Cartesian form, unit modulus or exponential addition established here.

These dispositions do not audit every downstream complex-analysis item or
every transitive real-power-series theorem.

## Conditional expectation

- `lem-conditional-expectation-is-unique-almost-surely`, SHA-256
  `792cdca32a38693f44a654ceabf44c2ab7e4429a8011e065d33d2102c02c4d1b`.
  Applying the common event-integral identity to the positive and negative
  discrepancy sets makes both discrepancy parts vanish almost everywhere.
- `thm-conditional-expectation-exists-by-radon-nikodym`, SHA-256
  `2893a5870c378f045737f04950c0284d7983d993c15edb6d1481c04b71442ca2`.
  Under its explicit AC assumption, the positive and negative indefinite
  integrals are finite measures absolutely continuous with respect to the
  restricted probability measure. The already A-R RN theorem supplies finite
  real densities; their difference has exactly the defining event integrals.
- `def-conditional-expectation-as-an-ae-class`, SHA-256
  `f873d9d0d87a400cd914a115d2998b60331f57a274b130e5f261b8b6bf920a12`.
  The preceding existence and uniqueness results give one `L^1` class, and
  almost-everywhere invariance makes it independent of the input
  representative. AC is explicit and declared.
- `thm-basic-algebra-and-order-properties-of-conditional-expectation`,
  SHA-256
  `a1444a1037fc9dfa351defaf54b287336346f7b0c8c5af5f29f5970bde67ac1c`.
  Finite linear combinations satisfy the defining event identities;
  discrepancy-set tests prove positivity and order. For the strict clause,
  if `W>0` almost surely and `T=E[W|G]`, then the `G`-event `{T=0}` has zero
  integral of `W`, hence zero probability. This validates the potentially
  delicate strict-order assertion.
- `lem-conditioning-a-known-variable-and-an-independent-variable`, SHA-256
  `5209ff5b8bd9530c73c74bcb41d2b4fac2661540c3fb83bdf420234659569cfd`.
  A known integrable variable itself meets the version definition. The stated
  rectangle independence extends from Borel indicators to nonnegative Borel
  functions by simple approximation and monotone convergence, then to an
  integrable real variable by positive/negative parts. This gives the constant
  version `EX`.

The active martingale and conditional-law drafts use exactly existence,
uniqueness, linearity/order and known-variable clauses. They explicitly state
AC where the published interface requires it. This is not an audit of all
conditional convergence, Jensen or tower suppliers.

## Measure constructions

- `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, SHA-256
  `06deb902fd37f4c946fb72f926107cb0a95c74764a6d0caee87b469548b22c05`.
  For disjoint sets, finite unions increase to the countable union;
  pointwise monotone convergence and finite additivity identify the limit with
  the nonnegative extended series. This supplies the exact density-measure
  clause used by conditional expectation and density inversion.
- `thm-finite-and-countable-subadditivity-of-measures`, SHA-256
  `b4bdad91d385448aebfac02a8226cfff4767b574e70a6b7e55f026a348d8268d`.
  First-occurrence disjointification uses the least natural index and preserves
  the union. Countable additivity plus termwise monotonicity proves the stated
  inequality, including the empty finite case. Active uses are null-union and
  finite-union bounds.
- `thm-nonnegative-weighted-sums-of-measures`, SHA-256
  `74b3c6d1f988b8cfe74f315f02a42ecc2fb1a3ed0ab973dd98559e1fffd5239c`.
  The definition separates zero, finite-positive and positive-infinity scalar
  branches, avoiding undefined extended multiplication. Each is countably
  additive; nonnegative double-series Tonelli then interchanges the measure
  and weight sums. The active discrete-law examples use this exact clause.

No arbitrary selection occurs in these three proofs. This bounded result does
not certify every construction of the underlying Lebesgue integral.
