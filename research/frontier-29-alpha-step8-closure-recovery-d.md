# Step 8 closure recovery — group d, rejudge round 1

Run `frontier-29`; batches 11, 12, and 17.

## Summary

All ten exact current tuples owned by group d were adjudicated: nine
`confirmed_fatal`, one `confirmed_nonfatal`, and no `false_positive`. The nine
fatal items were repaired and have matching defect rows
`frontier-29-A8R1-d-001` through `frontier-29-A8R1-d-009`. The nonfatal
simplicial-boundary item was not changed. There were no incoming alerts,
outgoing cross-group findings, published-item repairs, or blockers.

The exact adjudications, including each tuple and pre-edit guard hash, are
append-only rows in `research/frontier-29-judge-adjudications.jsonl`.

## Sources consulted

- Charles Weibel, [*An Introduction to Homological Algebra*, Chapter 2:
  Derived Functors](https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf),
  Comparison Theorem 2.2.6 and Lemma 2.4.1: comparison lifts are unique up to
  chain homotopy, so their induced homology maps are choice-independent; the
  resulting change-of-resolution map is the canonical objectwise comparison.
  This supports the explicit definitions of the projective and injective
  `theta` maps and their identity/cocycle proofs.
- The same chapter, sections 2.4–2.5: an object is acyclic when its positive
  derived functors vanish; right-derived objects are obtained by applying the
  functor to an injective resolution and taking cohomology; positive degrees
  vanish on injective objects. This supports the repaired occurrence of
  `F(I(A)_del)` in the injective-vanishing proof.
- The same chapter, Theorem 2.7.6 and Definition 2.7.7: agreement of
  derivations in different variables is established by extra double-complex
  and exactness hypotheses. This supports treating balance as additional data
  relative to specified resolutions, not as an automatic consequence of the
  existence of the two candidates.
- Romyar Sharifi, [*Homological
  Algebra*](https://math.ucla.edu/~sharifi/homalg.pdf), Definition 3.4.9 and
  the following construction of right-derived functors: the formula is
  `R^iF(A)=H^i(F(I^bullet))`, and morphisms are induced by comparison maps.
  This independently confirms the repaired right-derived formula.
- Allen Hatcher, [*Algebraic
  Topology*](https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf), Lemma 2.1 and
  the immediately following chain-complex convention: the alternating double
  boundary cancels in positive dimensions, while `partial_0=0`. Thus the
  current theorem's `n=1` case follows immediately from its definition even
  though the generic codimension-two expansion begins at `n=2`.

## Rows handled

| item | context | pre-edit guard hash | outcome | decision |
|---|---|---|---|---|
| `cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor` | `25496a55a6f08f4554ec95ea481ba9934a393d865c846d7860a340c2ab90b9f7` | `ac7d2a0e8a677beed231ca834491f3943faf94ba7aa31aeecb45a3c80d998116` | `confirmed_fatal` (`other`) | The relative construction had no supplied datum and used undefined `L_0F` notation. |
| `def-acyclic-object-for-a-left-exact-functor` | `dc40b9f8962c813e924636a526e1e2984cce693244bb3a64bf0f8aa1eef6aa73` | `e96a1d60f2c4b78defcb52d35a5c41edf202a65faaf996348b2ef5567d58b544` | `confirmed_fatal` (`dependency_citation`) | The local cited theorem states a natural isomorphism but the definition called that identification canonical. |
| `def-balanced-derived-bifunctor` | `ca55825414d03b7c0fd75912d5fd0276248f6cacf7c566189c984e5f3229b732` | `b01f92a747b9bbec5efd922ab28315102bd8607bfb7f54a900372e5104348c4d` | `confirmed_fatal` (`other`) | Condition 3 referred to unquantified alternative resolution data and therefore imposed no determinate condition. |
| `fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself` | `da5852f9df9157dd220d4450bbd48df3bdf971ebd2f179709b20b7911b46d6dd` | `3c69732bf013ac34069caf7082c082a0c64676cd5406c070a6df00f1d6221f9d` | `confirmed_fatal` (`dependency_citation`) | Fact L1 changed the cited sufficient right-exactness hypothesis into a false necessity claim. |
| `fs-derived-functors-in-two-variables-are-automatically-balanced` | `fa285e6e9f9e44344d8faf16b90c58d67109b4666d5ce63003b72983dd867e33` | `2137406c5660033dc3df05b6e751d1c1670f4f3b771bc6f7fab556d131f482e5` | `confirmed_fatal` (`other`) | The refutation invoked the local balance definition without its Dependent Choice hypothesis. |
| `prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws` | `674cc58302a3867eff89114667ea9bf7cbbc2eded90db89fac692adf7f1322fd` | `365aa3874ae52ccd6e736876657594e580b7f226677733cbba71b8cc78c85586` | `confirmed_fatal` (`dependency_citation`) | The cited theorem asserted existence of a natural isomorphism but did not, in its statement, define the named `theta` maps used by the proof. |
| `prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws` | `05e1668a040552436a3d501ea62ea18818fe83a1c2edec91d5e4cf9eda2c0aeb` | `bdbbc996c0b361d3a8384b4d16a282eb27fbcb42a3af4799aeeb3386386061a9` | `confirmed_fatal` (`dependency_citation`) | The cited theorem asserted existence but did not supply the specific comparison-induced `theta` maps to which the proof applied homotopy uniqueness. |
| `prop-positive-right-derived-functors-vanish-on-injective-objects` | `1e146c2c81c5f42b43911401c9654cdf83055e6d0924f7af480a7d82246c2857` | `851f572eca1d3d76f7a51c24802614d9b56bf416989d3fdcff169a0101f3dcac` | `confirmed_fatal` (`dependency_citation`) | Fact L4 and the proof omitted the application of `F` from the cochain complex computing `R_I^nF`. |
| `rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data` | `be446e0128a2dbc88e3b8a3fc2e5bae466d9e53e5e6f85073323b0273b32c187` | `7e47c2b7da3e431f39631b7e74fd1cb35edbd80bcfbe2f0030d2376968f43e4d` | `confirmed_fatal` (`dependency_citation`) | Parts 2 and 3 had no dependency stating comparison existence or lift independence. |
| `thm-the-simplicial-boundary-squares-to-zero` | `7b4e6d772e39d7927d9e986771baf9a12e00d183455c9bb116bbffe6da335d4d` | `587cb114880cd28ce9e9a65047e5dfea76f2667fac0f6c8a4a6d2b36eedf7ccb` | `confirmed_nonfatal` | The generic cancellation expansion begins at `n=2`, but the omitted `n=1` case is immediate from the cited definition `partial_0=0`; this is the repository's explicitly nonfatal one-line proof-gap class. No edit. |

## Licensed repairs

- `cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor`
  now fixes supplied data `P` assigning the displayed resolution and writes
  `L_0^PF` throughout.
- `def-acyclic-object-for-a-left-exact-functor` now states exactly the natural
  isomorphisms supplied by its local dependency, which suffice for
  resolution-independent vanishing.
- `def-balanced-derived-bifunctor` is explicitly relative to the displayed
  pair `(P,I)` and no longer contains an unquantified alternative-data clause.
- `fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself` now
  records right exactness only as a sufficient recovery hypothesis; its
  concrete calculation proves additivity alone is insufficient.
- `fs-derived-functors-in-two-variables-are-automatically-balanced` now carries
  Dependent Choice in its Given block and restates the repaired relative
  balance definition exactly.
- The two change-of-resolution propositions now define each named `theta`
  component using a comparison map or extension. The injective proposition
  proves choice independence, invertibility, and naturality before the two
  laws; the projective proposition cites the exact earlier construction and
  naturality lemmas.
- `prop-positive-right-derived-functors-vanish-on-injective-objects` now uses
  the one-term complex with `F(J)` in degree zero, as the cited definition
  requires.
- `rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data`
  now declares and links the exact comparison-existence and
  lift-independence results, and links the remaining summary clauses to their
  exact page results.

## Documentary synchronization

- Regenerated six repaired proof-bearing batch-11 entries.
- Regenerated the batch-11 entry for
  `thm-acyclic-resolution-theorem-for-right-derived-functors`, whose exact
  quote of the repaired acyclic-object definition became stale.
- Rebuilt `research/frontier-29-proof-contracts.json` from all 19 batch
  contract files.

## Rejudge targets

The nine changed items above are the exact current-text closure targets:

- `cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor`
- `def-acyclic-object-for-a-left-exact-functor`
- `def-balanced-derived-bifunctor`
- `fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself`
- `fs-derived-functors-in-two-variables-are-automatically-balanced`
- `prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws`
- `prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws`
- `prop-positive-right-derived-functors-vanish-on-injective-objects`
- `rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data`

No judge run or stage transition was initiated by this dispatch; the engine
owns the bounded-cycle/terminal routing.

## Checks

- Read all 114 items and all six page files in the assigned group, together
  with the dependencies used by the ten rejections.
- Focused precheck: 6 proof-bearing repaired items checked, 0 failures.
- Focused render check: 9 repaired files, 0 YAML, delimiter, wikilink-in-math,
  or KaTeX errors.
- Focused strict proof contract: 7 synchronized entries, 0 errors. One
  nonblocking pre-existing shotgun-bracket warning remains on the unchanged
  `thm-acyclic-resolution-theorem-for-right-derived-functors` proof.
- Batch-11 citation fidelity: 166 citations, no missing quotes and no widening
  candidates.
- Focused risk review: 7 proof-bearing affected entries routed, 0 errors.
- Batch-11 boundary audit: 320 rows, no template-reuse or contradicted
  disposition finding.
- Content policy: 114 group-d items, 0 errors and 0 warnings.
- Dependency check: no cycles, all references resolve, and no draft item lies
  on a published page; its 375 legacy whole-library warnings were outside this
  repair scope.
- Step-8 guard: all 126 whole-level changes since `pre-step8` licensed, 0
  errors.
- Step-8 scope: 7 groups and 755 items partitioned, 0 open rejection routed,
  and 0 cross-group alerts.
- Defect-ledger validation and exact closure linkage: 497 run rows checked, 0
  errors. Each fatal tuple here has exactly one matching round-one defect row;
  the nonfatal item retains its exact pre-edit guard hash and was unchanged.
- Scoped trailing-whitespace check: clean.

## Cross-group alerts and blockers

None.
