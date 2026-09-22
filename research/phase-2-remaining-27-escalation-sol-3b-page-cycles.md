# Escalation sol-3b: page-cycle repair evidence

Run: `phase-2-remaining-27`

Role: `alpha-adjudicate`

Dispatch: `escalation-sol-3b`

## Scope and method

I reconstructed the relevant page graph from the `requires` arrays in batches
11--13 and from every changed item's `deps` array.  The `requires` arrays were
not changed.  An arrow below points from the consumer page or item to its
supplier.

Abbreviations used only in this report:

- `HW`: `highest-weight-theory-for-complex-semisimple-lie-algebras`
- `RS`: `root-systems-dynkin-diagrams-and-cartan-killing-classification`
- `CG`: `compact-lie-groups-maximal-tori-and-peter-weyl-theory`
- `RF`: `real-forms-and-real-semisimple-lie-algebras`
- `RFE`: `real-forms-and-real-semisimple-lie-algebras-examples`

## Cycle 1: highest weight and root systems

### Before

The complete two-page cycle was:

1. `HW -> RS`, supplied by the established `HW.requires` entry (and by the
   ordinary highest-weight item dependencies on root-system results).
2. `RS -> HW`, newly supplied by both of these item dependencies:
   - `thm-serre-presentation-theorem -> prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system`
   - `thm-cartan-killing-classification-of-complex-simple-lie-algebras -> prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system`

Thus the closing page edge was `RS -> HW`.  Because two item edges supplied
that page edge, both had to change; removing only one would leave the same
two-page cycle.

### Repair and proof use

- The Serre proof really uses the root decomposition, root spanning,
  reducedness, reflection invariance, and integrality.  Those facts are stated
  by the earlier, same-frontier theorem
  `thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system`.
  Its existing simple-root supplier also gives the basis property and the
  existing finite-type Cartan-matrix supplier gives nonsingularity.  The later
  `HW` proposition was therefore replaced by the exact earlier suppliers.
- The Cartan--Killing classification proof uses the same semisimple-root
  facts, so its later `HW` citation was replaced by the same earlier theorem.

### After

- `HW -> RS` remains, including the unchanged `requires` entry.
- `RS -> HW` is absent: no item on `RS` depends on an item of `HW`.

The Step-7 Serre semisimplicity repair and the Step-7 separation of
root-system existence from Cartan--Killing classification are unchanged.

## Cycle 2: compact groups and real forms

### Before

The full directed edge set among the three pages in the reported strongly
connected component was:

1. `CG -> RF`, newly supplied by four item dependencies:
   - `thm-analytic-and-root-system-weyl-groups-agree -> prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero`
   - `thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems -> thm-existence-of-a-compact-real-form`
   - `thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems -> thm-conjugacy-of-compact-real-forms`
   - `thm-compact-connected-lie-groups-are-classified-by-root-data -> prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero`
2. `RF -> CG`, supplied by the established `RF.requires` entry (and established
   real-form item dependencies on compact-group results).
3. `RF -> RFE`, newly supplied by
   `fs-global-cartan-and-iwasawa-decompositions-hold-for-every-nonlinear-cover-without-modified-k -> ex-polar-cartan-decomposition-of-sl-n-r`.
4. `RFE -> RF`, supplied by the established `RFE.requires` entry (and the
   examples' ordinary dependencies on real-form results).
5. `RFE -> CG`, newly supplied by
   `ex-hyperbolic-space-as-so-zero-n-one-mod-so-n -> cor-normalized-haar-measure-on-a-compact-lie-group`.

Edges 1, 3, and 5 form the printed walk `CG -> RF -> RFE -> CG`.  Edges 1--2
also form a nested `CG <-> RF` cycle, and edges 3--4 form a nested
`RF <-> RFE` cycle.  Consequently the minimum authorized feedback set needed
to make this subgraph acyclic was all four item dependencies supplying
`CG -> RF` plus the one item dependency supplying `RF -> RFE`; leaving any of
those page directions would retain a two-page cycle.  The Haar dependency is
the literal closing edge of the printed three-page walk.  It ceased to be
needed for acyclicity after the nested cycles were removed, but it was also an
unnecessary cross-page citation and was replaced under the owner's explicit
instruction.

### Repair and proof use

- The analytic/root-system Weyl proof uses the conjugation on the explicitly
  displayed complexification.  It now defines
  `sigma(U+iV)=U-iV` and checks conjugate linearity, bracket preservation,
  involutivity, and the fixed algebra directly.  Its compact-root `SU(2)` and
  sign argument are unchanged.
- The semisimple compact classification proof did use compact-form existence
  and compatibility.  It now obtains uniqueness for existing compact groups
  from compact-normalized Serre triples, and constructs the compact real form
  for realization directly from the Serre presentation, the conjugation on
  generators, and positivity of `-B(X,kappa Y)`.  This preserves rather than
  weakens the realization and isogeny claims.
- The root-data proof needs compact conjugations compatible with marked Serre
  generators.  Its already-present analytic Weyl supplier carries that exact
  normalization, so the later generic complexification proposition was
  removed.
- The nonlinear-cover counterexample did use the polar decomposition of
  `SL_2(R)`.  It now proves connectedness by an elementary QR path, verifies
  the hypotheses of its already-cited global Cartan theorem, and obtains the
  needed diffeomorphism from that theorem rather than from `RFE`.
- The hyperbolic-space example needs maximal compactness, not Haar integration.
  Its proof establishes the connected semisimple, finite-center, global-Cartan
  hypotheses and now cites the exact same-page maximal-compact corollary.

### After

The page directions among these three pages are now:

- `RF -> CG` remains; `CG -> RF` is absent.
- `RFE -> RF` remains; `RF -> RFE` is absent.
- `RFE -> CG` from the Haar dependency is absent.

Thus the remaining order is `RFE -> RF -> CG`; it has no directed cycle.
No `requires` array changed.

The Step-7 justifications that remain intact are:

- the analytic Weyl theorem's corrected compact-conjugation sign;
- the semisimple compact classification theorem's finite-kernel/common-cover
  correction;
- the root-data theorem's character-lattice and central-quotient correction;
- the hyperbolic example's direct Killing-form trace computation, including
  the `n=3` case;
- the nonlinear-cover counterexample's universal-cover and integral-weight
  nonlinearity corrections.

Together with the two Cycle-1 entries above, all seven touched items retain the
mathematical purpose of their Step-7 repair.

## Validation

The cross-batch frontier ledger was refreshed with:

```text
frontier-dependency-ledger: refreshed and deduplicated
```

Focused phase precheck:

```text
PASS thm-serre-presentation-theorem
PASS thm-cartan-killing-classification-of-complex-simple-lie-algebras
PASS thm-analytic-and-root-system-weyl-groups-agree
PASS thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems
PASS thm-compact-connected-lie-groups-are-classified-by-root-data
PASS ex-hyperbolic-space-as-so-zero-n-one-mod-so-n
PASS fs-global-cartan-and-iwasawa-decompositions-hold-for-every-nonlinear-cover-without-modified-k
7 checked, 0 failing -- all clean
```

Focused proof contracts:

```text
batch 11: proof-contract: 0 error(s), 0 warning(s), 2/2 item(s) checked
batch 12: proof-contract: 0 error(s), 1 warning(s), 3/3 item(s) checked
batch 13: proof-contract: 0 error(s), 0 warning(s), 2/2 item(s) checked
```

The batch-12 warning is the existing `shotgun-bracket` warning on step 2.2 of
`thm-compact-connected-lie-groups-are-classified-by-root-data`; it is not a
contract error and is unrelated to the repaired page edge.

Focused prose check:

```text
7 file(s) checked. 0 error(s), 0 warning(s).
OK -- no positional claim contradicts the spec.
```

`node tools/depcheck.mjs` no longer reports either `CIRCULAR PAGES` error.  Its
current repository-wide result is nevertheless `FAIL` with seven errors, all
outside this dispatch's five pages and all owned by other active groups:

```text
[b-leaf-content] def-chern-character-of-a-complex-vector-bundle
[b-leaf-content] ex-complex-k-ahss-for-complex-projective-space
[b-leaf-content] ex-euler-class-of-the-universal-oriented-two-plane
[b-leaf-content] lem-ma-produces-an-uncountable-q-set
[b-leaf-content] ex-standard-inner-products-on-kn-ell-two-and-l-two
[b-leaf-content] ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection
[b-leaf-content] ex-ito-formula-for-brownian-powers
7 ERROR(s)
FAIL
```

Those errors are not repaired here because the dispatch expressly confines
content edits to the five named pages.  The owner-prerequisite licence rows for
all seven changed items match the current guard hashes; a full Step-7 guard
run reports no error or warning on any of these seven ids (the shared run still
has unrelated errors in other lanes).

`git diff --check` restricted to this dispatch's tracked files exits
successfully with no output; the untracked report was checked separately for
trailing whitespace and its final newline.  The repository-wide command is
currently blocked by three whitespace defects outside this dispatch:

```text
items/lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space.md:69: new blank line at EOF.
items/thm-locally-compact-gelfand-duality.md:81: new blank line at EOF.
items/thm-naturality-orientation-sign-and-whitney-product-for-euler-classes.md:36: trailing whitespace.
```
