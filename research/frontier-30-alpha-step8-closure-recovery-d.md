# Frontier 30 — Step 8 closure recovery, group d, rejudge round 1

## Outcome

Handled all nine exact current rejection tuples owned by group d. All nine are
confirmed_fatal; none is confirmed_nonfatal or false_positive. Each
adjudication was appended with its pre-edit guard hash to
research/frontier-30-judge-adjudications.jsonl, and exactly those nine items
were repaired. Matching defect rows frontier-30-A8R1-d-001 through
frontier-30-A8R1-d-009 were appended through the defect-ledger interface.

There were no incoming alerts, outgoing cross-group findings, published-item
repairs, or blockers.

## Rows handled

| item | context SHA-256 | pre-edit guard SHA-256 | outcome | decision |
|---|---|---|---|---|
| def-elliptic-hyperbolic-and-parabolic-principal-symbols | 18eade62185cadf52e5a6b34bdcbc77f988ed4d9e96b527782fc21aff3822ef3 | 018e1d32cfcd58ac7fc7ba7622e4b484692a3c8959a59884799a3042db48518b | confirmed_fatal (logic) | The semidefinite clause included the zero spatial form and therefore classified a genuinely first-order equation as second-order parabolic. |
| def-leaf-of-a-regular-foliation | 5a65816b0f45fd805900fa45c0036fab46f43bb2361e28ce03fe27a2fdbe56b7 | 494122a7de57ac712dc3150f2a069502342cca9f2a4d8d1a28954827127049c9 | confirmed_fatal (dependency_citation) | The atlas definition supplied only a plaque-chain subset, not the asserted intrinsic smooth structure and immersion. |
| def-two-variable-second-order-discriminant | 888aa3185404c014495adbcc656ae8d9d25682cae0bc4461630ba7445d73e159 | d2dc06105ec9d3fa343fb28b5241fd0f23580e8cc414b98f13fa586b77b3d29a | confirmed_fatal (dependency_citation) | Its correct rank-one binary-form use of “parabolic” was not licensed by a dependency defining only heat-type space-time parabolicity. |
| fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold | 8e80240b02830ab4d2263c9e3e95a399425b65a3922c8c9fc3cb76ae0d27a0f2 | 7cdf9070bbee6d42891c51f92d29b0ce9a5537858e1fbce48a0bb296509c1b71 | confirmed_fatal (logic) | Fact A1 described every leaf by the origin-based curve, although other leaves are translates. |
| prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution | ac9bf996968564dbd752aff7a7708c4f05d3275ce0f360dc12073939790d81ad | a36a714fd990fe9d93a9fcff3bbec0607eda0401d9e09a625b97f7911143eaa5 | confirmed_fatal (logic) | The title omitted the connected-source and meets-the-leaf hypotheses; the judge's disconnected two-leaf map refutes that title literally. |
| thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds | 7c7bd7c78718b51fef37eeb165372500768f489f90457a382b419fc49fc8b98f | ce1fcd36e652520f2036599e3630149b0d831925f040289f75e477fba2ec0b65 | confirmed_fatal (dependency_citation) | Step 1.3 replaced components of i^{-1}(U) by components of the immersed image's intersection with U; those topologies need not agree. |
| thm-homogeneous-linear-transport-by-the-flow | 1f3aacc579c82cbbaf07ebe04139fb20a9bde24a2b83ada2ccabf5bd6b2c7e4d | c811917b784e87f627f3aac621e244d84f82127e1d87174935eb353dd5258eb4 | confirmed_fatal (dependency_citation) | The converse applied a one-way lemma that assumes the PDE in order to infer the PDE. |
| thm-inhomogeneous-linear-transport-formula | acac1649e347108e445e2194191f15b7c5e70146566bdd11af9371162d0138f4 | 615cb10ccc2efd66ec302ec7128fbf894fbc5e632e8064b7f97bd0c59f456abb | confirmed_fatal (logic) | The characteristic hypothesis imposed no continuity on c or f, so the displayed integrals and the cited scalar ODE theorem were not licensed. |
| thm-local-linear-transport-cauchy-problem | 6f481df71f6a843545ec019d4ba451babf1e747a5f760ecb4e7fa72a0c5e71dd | e94516da7fb9c528aee9b6944417416eba38ac9a16894533d0887e6d4d25fbd8 | confirmed_fatal (dependency_citation) | The cited transport formula is tied to time-zero data and physical-time parametrization, not arbitrary data on a transverse hypersurface with a new flow parameter. |

## Licensed repairs

- The two parabolic definitions now separate the nonzero rank-one binary
  quadratic-form classification from the heat-type space-time convention, and
  neither treats a vanished second-order part as parabolic.
- The foliation definition now defines only the plaque-chain leaf subset. The
  false statement uses the single origin leaf as its witness rather than
  falsely identifying all translated leaves, and the tangent-map proposition's
  title now states its connectedness and incidence hypotheses.
- The maximal-integral-manifold theorem now applies plaque containment to
  components of i^{-1}(U), proves containment by a clopen argument on the
  connected source, and proves uniqueness of the intrinsic leaf structure with
  a local inverse-function argument.
- The homogeneous transport converse now uses flow consistency and the chain
  rule directly. The inhomogeneous theorem explicitly assumes a is C^1 and
  c,f are continuous, treats t=0 separately, and uses oriented integrals for
  either time direction.
- The arbitrary-surface Cauchy theorem now constructs the scalar
  integrating-factor solution in characteristic coordinates and uses the chain
  rule to prove the PDE and uniqueness. It no longer invokes the time-zero
  transport theorem outside that theorem's domain.
- The affected batch-7 and batch-15 proof-contract entries were synchronized,
  including downstream citation text changed by the repaired parabolic
  definition. The merged proof contract was regenerated mechanically.

## Authoritative sources consulted

- Victor Ivrii, Partial Differential Equations,
  https://www.math.toronto.edu/courses/apm346h1/20169/PDE-textbook/Chapter1/S1.3.html:
  the two-variable second-order classification has the rank-one normal form
  u_xx as its parabolic case and expressly requires a remaining second
  derivative; without one the equation is first order. This supports both
  parabolic repairs and their distinction.
- John Andersson, First Order PDE: The Method of Characteristics,
  https://www.kth.se/social/files/55e71f41f2765418b2f4c28d/Lectures_Method_of_Characteristics.pdf:
  the local construction flows from the initial curve, locally inverts the
  characteristic-coordinate map, and verifies the PDE by the chain rule. This
  supports the direct arbitrary-surface construction and confirms that the
  time-zero representation theorem is not the required interface.
- Keith Conrad, Local and global Frobenius theorems,
  https://math.stanford.edu/~conrad/diffgeomPage/handouts/frobthm.pdf,
  Theorems 2.1 and 2.3: local Frobenius charts contain connected integral
  manifolds in unique slices; globally there is a unique maximal integral
  submanifold, maps landing in it factor smoothly, and a connected tangent
  submanifold lies in one maximal leaf. This supports the corrected
  inverse-image-component, connectedness, and intrinsic-structure arguments.

## Rejudge targets

The exact rejudge target set is:

- def-elliptic-hyperbolic-and-parabolic-principal-symbols
- def-leaf-of-a-regular-foliation
- def-two-variable-second-order-discriminant
- fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold
- prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution
- thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds
- thm-homogeneous-linear-transport-by-the-flow
- thm-inhomogeneous-linear-transport-formula
- thm-local-linear-transport-cauchy-problem

The engine owns the durable cycle decision and targeted judgment; this dispatch
did not start a judge sweep.

## Cross-group alerts

None. Reading the complete group and the dependencies touched by these
rejections exposed no defect owned by another group.

## Checks

- Focused precheck: all six repaired proof-bearing items passed in stored
  direct phase form.
- Focused render check: all nine repaired items passed YAML, delimiter,
  wikilink-in-math, and KaTeX validation.
- Full strict batch proof-contract checks: batch 7 and batch 15 passed with
  zero errors and warnings. The six repaired proof-bearing entries also passed
  against the regenerated merged contract.
- Dependency check: exited successfully with no cycles, unresolved references,
  or draft items on published pages; it retained 433 pre-existing advisory
  warnings.
- Step-8 scope check: seven groups and 694 items partitioned; zero open
  rejection tuples and zero cross-group alert dispositions at check time.
- Step-8 guard: 176 whole-run changes, all 176 licensed; zero creations,
  deletions, errors, or warnings.
- Defect-ledger exact coverage check: 542 frontier-30 rows checked with zero
  errors at check time.

## Blockers

None.
