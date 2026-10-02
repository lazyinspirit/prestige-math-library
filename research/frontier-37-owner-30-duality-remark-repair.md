# General Serre duality remark: claim and citation repair

Date: 2026-10-01  
Run: `frontier-37-owner-30`, batch 8  
Target: `items/rem-general-serre-duality-deferred.md`  
Write scope: the target and this report only.

## Claim impact

The old item incorrectly identified the dual of `H^1(C,F)` with
`Ext^1(F,omega_C)`. The current coherent-curve theorem instead gives the two
canonical, functorial isomorphisms

- `Hom_O_C(F, omega_C) ≅ H^1(C,F)^*`, and
- `Ext^1_O_C(F, omega_C) ≅ H^0(C,F)^*`.

The remark now states both and describes their pairings using the same fixed
normalized trace: the first is induced by `H^1(alpha)` for
`alpha:F -> omega_C`; the second evaluates an Ext class on a global section
`s:O_C -> F` by pullback to `Ext^1(O_C,omega_C) ≅ H^1(C,omega_C)` and then
applies the trace. This preserves the coherent theorem's arbitrary-field,
all-coherent-sheaf scope, including torsion sheaves.

The three intended forms remain: the line-bundle pairing, the finite locally
free pairing, and the coherent Ext/cohomology duality. The first two now link
the actual curve line-bundle and vector-bundle theorem pages and their direct
dependencies are declared. The global Ext paragraph follows the actual
`def-sheaf-ext-for-coherent-modules` interface: global Ext is cohomology of
global Hom into an injective resolution of the second argument; it is distinct
from the sheaf `Ext` objects and is not generally their global sections.

The proof summary now reflects the coherent theorem's actual curve resolution:
for an ample invertible `L`, a sufficiently large `F tensor L^m` is globally
generated; finite-dimensional global sections give a finite locally free
surjection onto `F`; the kernel is coherent and torsion-free, hence finite
locally free on the smooth curve. The displayed sequence is
`0 -> E' -> E -> F -> 0`. The unused projective-space finite-resolution lemma
was removed as a direct dependency.

The summary retains AC, the arbitrary-field curve duality claims, and the
fixed trace. The separate residue-sum identification is marked as having the
line-bundle theorem's perfect-field hypothesis. The higher-dimensional and
relative-duality topics remain explicitly deferred. No new theorem claim was
introduced.

## Dependency and impact record

Direct dependency changes:

- Removed `lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space`;
  it does not supply the curve-specific resolution used by the coherent
  theorem.
- Added `thm-serre-duality-curves-line-bundles` and
  `thm-serre-duality-curves-vector-bundles`, which are the actual linked
  suppliers for items 1 and 2. Both currently have draft status; the coherent
  curve theorem is also draft. The smooth-projective locally free theorem and
  fixed-trace definition remain cited as the underlying duality input and
  trace interface.

A read-only search of `items/` found no other item directly linking to this
remark, so no direct consumer text was changed. Shared B8 carriers, receipts,
certifications, and gates were not edited.

## Hash and check record

Target raw SHA256 before repair:
`0a2d2fc1fd0373899ca62c1fbf16360b202e007f3ab5c76ec5ab4ed673abb42b`

Target raw SHA256 after repair:
`78adb77beb3a6468b28313c514cc2948e50d092e152c1b15d686088a191e9998`

This remark has no `Statement` section; its claim impact is recorded above.
No precheck or rendercheck was rerun, consistent with the released narrow scope
instruction; the edit uses the item's existing Markdown/KaTeX conventions.

## Root integration

Root read the complete repaired remark and report, synchronized only its batch-8 claim/dependency/strategy row and actual in-run dependency edges. The contract has no facts or numbered derivations and was retained. No check, independent audit or gate was repeated. Pair scope will be reconciled on the final stable corrected claim inventory; fixed-trace residue comparison remains open.
