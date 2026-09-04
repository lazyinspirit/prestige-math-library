# Frontier 29 — Step 8 closure recovery, group a, rejudge round 1

## Summary

Across group `a`'s Step-8 recovery work, all 14 assigned exact tuples have been
handled: 7 `confirmed_fatal`, 1 `confirmed_nonfatal`, and 6 `false_positive`.
This dispatch handled the newly live Drinfeld-morphism tuple. Only the seven
fatal items were edited, and each fatal outcome has one exact defect-ledger
row. The first six completed their bounded rejudge and terminal-resolution
routing; the newly repaired Drinfeld theorem is the current rejudge target.

No incoming alert, unowned tuple, published-item repair, or cross-group finding
occurred in the assigned set.

One workflow blocker remains: the Step-8 guard does not compose the exact
baseline-to-intermediate owner-prerequisite repair with this new
intermediate-to-current fatal repair. Preserving both shared ledgers as
append-only leaves that mechanical failure outside this group's licensed write
scope.

## Exact rows handled

| item | context_sha256 | pre-edit guard hash | outcome | disposition |
|---|---|---|---|---|
| `cex-not-every-monoidal-category-is-rigid` | `c2c972ef4de1e06d74985d2a63dd5bdc2ba83f77e6e95a91e9be32e7bbf0e602` | `427eb7babda42e5736ecb034e8a96b1b4211337a71e1dbc071cdfcefed06e980` | `false_positive` | The Given block explicitly fixes `k[x]` as infinite-dimensional, and the proof cites that stated hypothesis. Independently, the monomials give the immediate elementary verification. No edit. |
| `def-pro-p-completion-of-an-abstract-group` | `89958a316bfa50f50b96b15a585d8b14a1512bb4f835d67a9ba33f94b4585873` | `214ec55ca9d37972658215bf6bb9891c83191c7a70483e28236655414369ab02` | `confirmed_fatal` | The definition used finite `p`-groups without fixing `p` as prime. It now fixes a prime before forming the inverse system. Defect type: `other`. |
| `def-relative-projectivity` | `ebd96bb2311862ef0aed1d7e14149df76805b841be18102d0b8e731d514605b6` | `ede4b58cd4228fdb67d0dd674d25659bfc6cd111becf5d177c870ce2e4d77c96` | `confirmed_fatal` | The closing recovery claim lacked the finite-group, field, and Choice boundaries needed for its basis/free-module argument. The definition now fixes finite `G` and a field `k`, and the `H=1` comparison states Choice and proves both directions through the exact free-summand characterization. Defect type: `other`. |
| `ex-the-dimension-of-a-vector-space-is-its-linear-dimension` | `c472fffd419c926827200eb17ffef5e1393976d6e92bbffdd6b6f4f833ac6f5e` | `a8b6edbb845f697e0892254103df5bbb4f18a49c64e4c168282114ed8d73008d` | `confirmed_fatal` | The body was correctly typed, but the title still equated a ground-field scalar with a natural number. The title now says that categorical dimension is the scalar image of linear dimension. Defect type: `other`. |
| `ex-the-regular-module-of-cp-in-characteristic-p` | `add0c3f8002c6b3f77cef2c9036ee630f3bbd5d6edeaf2b978a74265b86c9aca` | `0d45fe15a702b5de99f9eb5ff9403133aab0c0f4f531270e29941ec29cc5361f` | `confirmed_fatal` | The cited regular-module decomposition requires a splitting field, absent from this example. The proof now uses arbitrary-field localness directly: nontrivial module decompositions give nontrivial idempotents, and the unique maximal left ideal is the augmentation ideal. Defect type: `dependency_citation`. |
| `fs-a-braiding-suffices-to-define-a-trace` | `f591905d8feb3cbd3db5cba388978987f646d22675627ea2abca03f71c1ae201` | `be5f828d7861cb861dcce368cacfbf85468202b07b2a209bc8326adf7fb0af9a` | `false_positive` | The full cited counterexample explicitly constructs all vector spaces with the infinite-dimensional object `k[x]` and proves that object has no categorical dual. The rejection read only its shortened statement-refuted surface. No edit. |
| `fs-left-and-right-duals-of-an-object-are-isomorphic` | `aceb991e3e5f8eeac72c84f358a59791472fe59581843ff51db02932e8cb8edd` | `8b4102f74c4871c4515690835f61a95d6ac46c349c4c35f81114a8e4474d3028` | `false_positive` | The full cited counterexample constructs the composition-closed rigid endofunctor category and computes the nonisomorphic adjoints `L` and `R`. The shortened surface omitted that proof. No edit. |
| `fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure` | `cf93756a55dbe739f894a467c5a32ece56c0904e000959a13522f9561a0a56e1` | `a28cda9b654bcb9cfe8b403db34e41a6b42ea540b862a7fc85c637a9822c7829` | `false_positive` | The full cited refutation defines the degreewise `q^n` pivotal structure and computes the dimensions on the degree-one line; the target also fixes `q` and that line in its own Given block. No edit. |
| `fs-zp-is-cyclic-as-an-abstract-group` | `4c60cafa3fe386eaaac3a72f21be0543060db8551cec6d119f5a7cb6211a2ac1` | `998c0fe6ba096362a6e4468924a44e4341debb94a6a73210fe5fcc89e7059967` | `false_positive` | The cited proposition's proof injects binary sequences into `Z_p` and uses Cantor diagonalization, explicitly proving the uncountability used here. The shortened proposition surface omitted that proof. No edit. |
| `rem-what-is-needed-before-a-trace-can-be-written` | `3128cbf29c8abce10064d44843ed1dc8078e09dcd574be6fb25eb8bb55a09c82` | `5b5eced432a7ff983af40ea2a0200e721534d372f25efa3fd07b5411ce791cf9` | `confirmed_fatal` | A Drinfeld morphism in a braided autonomous category is already a natural isomorphism, although generally not monoidal. The remark now states that distinction and carries the exact primary source. Defect type: `logic`. |
| `thm-a-braided-rigid-category-has-a-drinfeld-morphism` | `a6aebdf047e8a1bf3ef7a9f9c858bbed448509739640f0ecef56b67ce3dff65a` | `1a5c08348e1589ab7035d1d621f306d8372d7da21ff716076c0e31b18bbb69d6` | `confirmed_fatal` | The tensor identity compared maps into `X^{vee vee} tensor Y^{vee vee}` and `(X tensor Y)^{vee vee}` as though those chosen objects were equal. It now names the double-dual monoidal comparison and inserts it into the relation, making both sides well typed. Defect type: `logic`. |
| `thm-green-vertex-source-existence-and-conjugacy` | `5ad1a47580a1cc07a78900bcb77cc13a47c938b95fedb765a7e717b686f607fd` | `8070866c9e25cd1806dfbfcf7241255d90cfd050692754b84737e3094c0c2b31` | `false_positive` | The opened Krull-Schmidt dependency proves in its step 2.1, using stabilized kernels and images, exactly that an indecomposable finite-length module has local endomorphism ring. No edit. |
| `thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras` | `c66fd133975505c46d865ceec6d6ee216e3c1e1df38dd1efb8e1b4bbd0557e3c` | `0a6105ff616754ef923c994306cbb1a6e8d65cacb27e9ea2dfd9272ea0cdc08e` | `confirmed_nonfatal` | The cited general free-summand equivalence has a Choice boundary, but the ambient module here is the explicitly finite free `A^r`. Finite free modules satisfy lifting directly, and direct summands inherit it. This is an immediate bridge; no edit. |
| `thm-schur-zassenhaus-existence` | `e4ba9e945a5e4392f2dd2c78e0343de1582349d2ee596734870c93c9cf8f1c13` | `71fc5694215ff262a5a8ee5693ed3dd449cdae2c0168c7e6b6a7c76a8c49ee21` | `confirmed_fatal` | The `N=1` base case incorrectly named `1` as the complement. It now uses `G`, whose intersection with `N` is trivial and whose product with `N` is all of `G`. Defect type: `logic`. |

## Licensed repairs and rejudge targets

- `def-pro-p-completion-of-an-abstract-group`
- `def-relative-projectivity`
- `ex-the-dimension-of-a-vector-space-is-its-linear-dimension`
- `ex-the-regular-module-of-cp-in-characteristic-p`
- `rem-what-is-needed-before-a-trace-can-be-written`
- `thm-a-braided-rigid-category-has-a-drinfeld-morphism`
- `thm-schur-zassenhaus-existence`

Of these seven licensed repairs, only
`thm-a-braided-rigid-category-has-a-drinfeld-morphism` is a current rejudge
target. The other six have exact terminal-resolution entries in the current
judge-closure receipt.

The exact adjudication rows are appended to
`research/frontier-29-judge-adjudications.jsonl`. The matching defect rows were
appended through the locked defect-ledger interface from
`research/frontier-29-alpha-a-step8-rejudge-round1-ledger-rows.json`.

Only records made stale by these repairs were regenerated: the affected
entries in batch contracts 1, 2, and 10, followed by the merged run contract.

## Sources consulted

- A. Bruguières and A. Virelizier, *Hopf monads*, Lemma 8.1
  (https://imag.umontpellier.fr/~bruguieres/docs/Hopf-monads.pdf): for every
  braided autonomous category, the Drinfeld natural transformation is an
  isomorphism and the lemma displays its inverse. This is the exact support for
  correcting the remark's bare braided-rigid boundary.
- P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, *Tensor Categories*,
  Proposition 8.10.6
  (https://math.mit.edu/~etingof/egnobookfinal.pdf): in their stronger braided
  tensor-category setting the same Drinfeld transformation is an isomorphism;
  this supports the existing stronger-domain clause but does not by itself
  justify a failure of invertibility in the bare autonomous setting.
- The same source, formula (8.30) and Proposition 8.9.3, defines the displayed
  Drinfeld map and gives the tensor relation in its coherent chosen-dual
  convention. On this page, where the chosen object
  `(X tensor Y)^{vee vee}` is only canonically isomorphic to
  `X^{vee vee} tensor Y^{vee vee}`, the relation requires the monoidal
  comparison supplied by the local double-dual theorem.
- Gareth Wilkes, *Profinite Groups and Group Cohomology* lecture notes, Chapter
  2 (https://www.dpmms.cam.ac.uk/~grw46/LectureNotes.pdf): the pro-`p`
  completion is the inverse limit of the quotient system indexed by normal
  subgroups with finite `p`-group quotient, with a fixed prime `p` throughout.

The remaining decisions were resolved from the complete current group read and
the opened on-disk dependencies. In particular, the full dependency proofs—not
their shortened judge surfaces—supply the four concrete counterexamples and the
Fitting/local-endomorphism argument identified above. The dependent
`absolute-values-completions-and-p-adic-numbers` page preserves the compatible
residue model and its prime and inverse-limit conventions, so no seam alert was
needed.

## Cross-group alerts

None.

## Blockers outside the exact repair envelope

The assigned closure over 14 exact rows is complete, but the mandated whole-group read
still leaves three current group-a defects without a live tuple and therefore
without a fatal repair licence in this dispatch:

- `cex-an-ordinary-irreducible-with-reducible-mod-p-reduction` still uses
  `O=Z_(3)`, which is not complete and therefore does not meet the page's
  splitting modular-system definition.
- `def-frattini-subgroup-of-a-profinite-group` displays `M<M` in its indexing
  condition instead of the well-typed subgroup condition `M<G`.
- `library/group-theory/group-extensions-complements-and-schur-zassenhaus-examples.md`
  names `D_8` in its summary despite the same page's fixed convention that
  `D_n` has order `2n`; its order-eight example is `D_4`.

None was edited because the exact rejudge envelope authorizes only its
`assigned_items` and `live_tuples`.

## Validation

- Focused precheck: 4 proof-bearing repaired items checked, 0 failures.
- Focused render check: all 7 repaired items passed YAML, delimiter, and KaTeX
  validation.
- Focused strict proof contract: 9 affected proof entries checked, 0 errors and
  0 warnings.
- Citation fidelity on batches 1, 2, and 10: 285 citations across 128 authored
  items, no missing quote and no widening candidate.
- Dependency check: passed with the repository's standing advisory warnings.
- Exact tuple join: the newly assigned tuple has exactly one outcome; all 14
  group-a recovery tuples recorded above have one outcome, and all 7 fatal
  tuples have exactly one linked defect row.
- Defect-ledger validation and linkage check: 498 current-run rows, 0 errors;
  this tuple has exactly one matching defect row.
- Step-8 guard: the repository has 128 changed items, with no creation or
  deletion. It reports 127 licensed changes and two errors for this one item:
  the existing exact owner-prerequisite row ends at the adjudicated pre-edit
  hash `1a5c08348e1589ab7035d1d621f306d8372d7da21ff716076c0e31b18bbb69d6`,
  while the new exact fatal row begins at that hash and ends at repaired hash
  `2bdd6f9e4b3772bd362079648078fdcda72e411d964c1a17c42acd0069b68e15`.
  The guard checks each licence only directly from the pre-Step-8 baseline and
  therefore rejects this valid two-edge chain as both a stale prerequisite
  receipt and an unlicensed edit.
- Step-8 scope check: 7 groups and 755 items partitioned, 0 open rejection rows
  routed, and 0 cross-group alerts dispositioned.
- `git diff --check`: passed.

The engine owns the targeted rejudge and remaining run-wide routing. Before
the guard can certify this repair, its mechanical licence check must support
the exact hash chain above or an authorised non-destructive supersession
protocol for the prerequisite receipt.
