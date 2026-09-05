# frontier-30 — Step 8 closure recovery, group b

## Summary

All three exact current rejection tuples assigned to group b were adjudicated:
two are `confirmed_fatal` and one is a `false_positive`. The two fatal items
received minimal repairs, have distinct matching defect-ledger rows, and are
the only rejudge targets. The false-positive item was not changed.

There were no incoming alerts, outgoing cross-group findings, published-item
repairs, or group-b blockers.

## Sources consulted

- The Stacks Project,
  [Definition 6.26.1](https://stacks.math.columbia.edu/tag/0094), gives the
  pullback formula
  $\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}\mathcal G$, specifies that
  its scalar map is the map corresponding to $f^\sharp$, and states the
  resulting $\mathcal O_X$-module structure. This exactly supports the current
  pullback definition.
- The Stacks Project,
  [Section 17.16](https://stacks.math.columbia.edu/tag/01CA), defines the
  tensor product of two modules over the structure sheaf of an arbitrary
  ringed space. It therefore applies to the ringed space
  $(X,f^{-1}\mathcal O_Y)$ once the current pullback item has constructed
  $\mathcal O_X$ and $f^{-1}\mathcal G$ as modules over that sheaf of rings.
- J. S. Milne,
  [Algebraic Geometry, Propositions 3.26 and 3.32](https://www.jmilne.org/math/CourseNotes/AG.pdf),
  gives the coordinate-function test for regular maps and identifies a
  nonempty principal open with an affine variety having the localized
  coordinate ring. The local interface cited by the example exposes the
  localization of regular functions, but not the latter object-level
  identification required by the narrow affine anti-equivalence. The repair
  avoids that mismatch by checking the inverse regular maps directly.
- The Stacks Project,
  [Section 10.9](https://stacks.math.columbia.edu/tag/00CM), defines elements
  of a localization as equivalence classes of pairs, and
  [Section 10.18](https://stacks.math.columbia.edu/tag/07BH) identifies
  $R_{\mathfrak p}$ as localization at the denominators outside
  $\mathfrak p$. Thus denominator nonvanishing is a condition on an admitted
  presentation, not on every presentation of the same rational function.

## Exact adjudications

| item | context | outcome | disposition |
|---|---|---|---|
| `def-pullback-module-ringed-spaces` | `b708bc62ecdbfae156056f3946a6e44dac4eea055294e1ce336446db8c666647` | `false_positive` | The repaired definition already constructs $f^{-1}\mathcal O_Y$ as a sheaf of rings, $f^{-1}\mathcal G$ as its module, and the scalar map to $\mathcal O_X$. Applying the generic tensor-sheaf definition to $(X,f^{-1}\mathcal O_Y)$ makes the displayed tensor well typed. No edit and no rejudge. |
| `ex-hyperbola-is-multiplicative-group-variety` | `1f1602933e54e7efd6fb73c5e615f481aaebf22c91d0befb7ad0f09b2a332628` | `confirmed_fatal` | `defect_type: dependency_citation`. The example invoked the affine anti-equivalence without a supplied result establishing the principal open as an object of that theorem's narrow category. The repair removes that inference and verifies directly that both maps are regular, land in their stated targets, and are inverse. Defect `frontier-30-A8R1-b-001`; rejudge. |
| `ex-local-ring-affine-line-at-origin` | `c3ce1ef0238b175e60d2b117cd667c8b255ac0b152a54b8f902364c921ca290e` | `confirmed_fatal` | `defect_type: logic`. The phrase “its denominator” was false because a rational function has many presentations; for example, $1=t/t$ as well as $1=1/1$. The repair states the correct existence of a presentation with denominator nonzero at the origin and synchronizes the maximal-ideal description. Defect `frontier-30-A8R1-b-002`; rejudge. |

The three ledger rows use the exact pre-edit item hashes
`3202dfc6792b68714d32b80b77bc27f8311e3129f493032cc9d52ef40d75dcef`,
`5ab67cc6a379105f6e4a2eadfb1e44e29e268be288cd5c17ba1ffbbe1bef5d5b`,
and
`1180e3eea7c947deda6212153263fe8f055c2878b151ec9025172bc30edce07a`,
respectively.

## Licensed repairs

1. `ex-hyperbola-is-multiplicative-group-variety`
   - Removed the out-of-scope affine anti-equivalence dependency and prose
     inference, and used the coordinate-ring domain criterion to type the
     hyperbola itself as a classical affine variety.
   - Added the missing target check $u u^{-1}=1$ and the two explicit inverse
     computations.
   - Post-repair file hash:
     `ec7373682dbe7fb419f695e788a3c1881ddb91a0675b34d2a10d42272ac11020`.
2. `ex-local-ring-affine-line-at-origin`
   - Replaced presentation-dependent “its denominator” language by the
     existence of $f/g$ with $g(0)\ne0$.
   - Expressed both the localization and its maximal ideal in the same
     presentation-safe form.
   - Post-repair file hash:
     `8fde9d2b36ed31e8aae803ac1fa0a602e81ac59fcbbaa6a65d30c0e22cc3d140`.

No verification judge record was present on either repaired item, so no stamp
record required removal.

## Rejudge targets

1. `ex-hyperbola-is-multiplicative-group-variety`
2. `ex-local-ring-affine-line-at-origin`

## Cross-group alerts and blockers

- Incoming alerts: none.
- Cross-group findings raised: none.
- Published-item repairs: none.
- Group-b blockers: none.
- The whole-run defect-ledger check was still waiting on 17 fatal-linkage rows
  owned by other groups when run. The exact group-b linkage was separately
  verified as 2/2, so this is concurrent stage residue rather than a group-b
  blocker.

## Checks

- Exact tuple join: one and only one adjudication row exists for each of the
  three assigned contexts; outcomes are two fatal and one false positive.
- Exact fatal linkage: both group-b fatal tuples have one distinct
  `frontier-30-A8R1-b-*` defect-ledger row with the matching pre-edit guard
  hash.
- Defect append interface: both new rows passed schema validation and were
  appended; the rendered defect-ledger view was refreshed.
- Focused precheck: exit 0; neither repaired prose example has a proof-format
  section, so 0 proof bodies were checked.
- Focused render check: exit 0 for both repaired files; YAML, wikilinks, math
  delimiters, and KaTeX all pass.
- Content policy: exit 0 for all 103 group-b items, with zero errors and zero
  warnings.
- Dependency check: exit 0 with 433 standing whole-corpus warnings.
- Step-8 guard: exit 0; all 176 current changes from the `pre-step8` baseline
  were licensed.
- Step-8 scope check: exit 0; seven groups and 694 items partitioned, 17
  then-open rejections routed, and zero cross-group alert dispositions.
