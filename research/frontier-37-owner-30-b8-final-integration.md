# B8 final integration record

## Scope and current state

This record is limited to the B8 carriers for `frontier-37-owner-30`. The B8
page manifest contains 58 existing item IDs: 47 on its A page and 11 on its B
page. The proof-contract carrier has 58 scope IDs and entries, matching the
manifest inventory exactly.
The current page-manifest SHA-256 is
`d91d9665f58593a48d071f923f854098af5ce662be65c74868ca214768f26a38`.
The current A-page Step 3 scope hash is
`08837e28c980889f9e9221ded93c7f3cad8ca1cbe2d80e514c1c6eb9488bc698`.
The current proof-contract carrier SHA-256 is
`5249048ac95898a0cdbe225721cd75a0fe7f880c3a00f63c9682c947fac869b8`.

The manifest row for `ex-riemann-hurwitz-double-cover` is synchronized from
the current parsed item frontmatter and its `## Example` section. Its current
dependency list has 29 IDs (the previous manifest row had 13), its provenance
is `literature-derived` / `ai-altered`, and the example text records both the
abstract rational-branch case and the perfect-field polynomial-model case.

The Riemann-Hurwitz contract now covers all 33 linked fact/source pairs in its
Facts block. Its 14 derivation entries come from the 14 current Verification
steps, and the `zero`, `degenerate`, `empty`, and `nonempty-choice` worksheet
evidence follows the current two-case route.

The comparison preserved concise manifest claims when their strings differed
from expanded item sections. The inequality alone is not treated as a scope
change. Only substantive differences in hypotheses, quantifiers, or promised
conclusions are escalated for the owner's scope review.

Three other B8 manifest `sources.references` URL sets were synchronized from
their current parsed frontmatter because the source records materially differ:
`lem-residue-pairing-descends-cohomology` (removed Lipman),
`ex-plane-quartic-canonical-hyperplane` (removed the MIT notes), and
`cex-canonical-map-hyperelliptic-not-embedding` (replaced Fulton with Stacks).
For the five released item repairs below, the manifest now copies current
frontmatter dependencies and provenance and adds the actual AC/DC premise to
each compact claim. Four rows also received their materially changed source URL
sets; the fifth retained an equivalent URL set. Label or ordering differences
alone are preserved.

Three owner-directed compact-claim corrections are now in the manifest:

- `ex-genus-one-rr-degree-positive` says an arbitrary degree-one divisor is
  linearly equivalent to an effective degree-one divisor.
- `cex-degree-two-g-not-always-very-ample` retains arbitrary fields with a
  rational point; its compact route uses the degree-2g base-point-free theorem
  generally and keeps the explicit `q` computation in the algebraically
  closed case.
- `thm-adjunction-smooth-plane-curve` says every canonical divisor is
  linearly equivalent to the divisor of a nonzero rational section of
  `O_C(d-3)`.

Root authorized a local dependency-level refresh for the first 29 B8 A-page
rows, excluding `lem-residue-pairing-functorial-line-bundle`,
`thm-serre-duality-curves-coherent-sheaves`, and
`cor-h1-line-bundle-dual-sections`. I calculated levels over all 817 run items
across 60 pages with label validation disabled; the structural graph had zero
errors. Seven differing labels changed: `def-residue-pairing-principal-parts`
7→12, `lem-residue-pairing-descends-cohomology` 8→13,
`lem-local-residue-annihilator-regular-sections` 7→12,
`lem-global-residue-pairing-injective-left` 9→14,
`lem-global-residue-pairing-dimension-balance` 10→15,
`thm-serre-duality-curves-line-bundles` 9→14, and
`thm-serre-duality-curves-vector-bundles` 7→12. No other B8 level was edited.

## Contract rows integrated

The seven previously missing rows now cover these existing manifest IDs:

- `thm-full-riemann-roch-divisor`
- `cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two`
- `ex-full-rr-projective-line`
- `ex-genus-one-rr-degree-positive`
- `ex-plane-cubic-canonical-trivial`
- `cex-degree-two-g-minus-one-not-always-basepoint-free`
- `cex-degree-two-g-not-always-very-ample`

Their derivations and boundary worksheets use each item's current Facts and
numbered proof or Verification steps. Citations quote supported reader-facing
`Statement`, `Statement refuted`, `Definition`, `Example`, or `Remark` sections;
the schema does not support proof-section source quotes.

## Source and item drain

The B8 consumer review released five item-body repairs and confirmed these
hashes before the subsequent root-directed edit noted below:

| Item | Final SHA-256 |
| --- | --- |
| `ex-full-rr-projective-line` | `23ae467c4e142a856927f579ec428b006fb3e687d5db9e2c2d404f65206b81e1` |
| `ex-genus-one-rr-degree-positive` | `f11c6aeb518a4e297969f8dbb2b6bfb7bda6c5c573649dc6c3302996cb28f77b` |
| `ex-plane-cubic-canonical-trivial` | `a7da7da015d011d96ad29931177ce7b06613f0d87bd24b3294d57cd1cddbc349` |
| `cex-degree-two-g-minus-one-not-always-basepoint-free` | `514d4ac34a52601be9202cdfbcc4ee2aa2e8c6fb3b8a3cb701f97ca44bb6fe84` |
| `cex-degree-two-g-not-always-very-ample` | `49f66ad561b0fb3024278658c7f0246c0d71f5549d9827e6ee2c66bbf2496120` (superseded) |

An independent review accepted the five listed hashes at confidence 1 before
the subsequent very-ampleness edit. It made no Step 3 decisions or carrier
changes; the report is
`frontier-37-owner-30-b8-five-repairs-independent-review.md`.

The root has released one further body-only repair of
`cex-degree-two-g-not-always-very-ample`, restoring the arbitrary-field,
rational-point scope through the existing degree-2g base-point-free theorem.
The subsequent Step 7.1 degree qualification is also stable. The final SHA-256
is `ecac21fae3fc627b24e97a27567571f2731a517ea857ce2bc9e596e23ea2d028`; its
26 direct dependencies are unchanged and synchronized in the page manifest.
Its new contract row is integrated; its source quotes await the stable supplier
quote refresh.

After that review, the root released a separate Step 1.1 repair in
`cor-unramified-cover-curves-genus-complete`. The stable item hash is
`19ca657848421befa557e6cc6062898cc6905fef145d68cc3c55627e444350aa`; its
11 exact frontmatter dependencies are synchronized in the page manifest, and
the contract derivations now reflect its five current proof steps. Its source
quotes remain pending the supplier drain.

B6 integration has drained its source/carrier lane. These four selected source
bodies are stable, and 36 B8 contract quotes were refreshed from their exact
supported sections:

- `def-complete-linear-system`:
  `bd038bb6f6d11cc26260784bd50db8cb3114d37613c3741d1ac3fb1ce72fe462`
- `def-base-point-linear-system`:
  `2e168ebd37ea643e07cb8466ecb2a68e6f04c9d2eaac0df2442ef7211aaf1e2d`
- `thm-base-point-free-linear-system-morphism`:
  `187839077111fe7208ac21ed08c507dd2f65fd802d5b020152dc84cccaf029bd`
- `def-canonical-line-bundle-curve`:
  `99160ed4cfe0e30a8ca26240c11eeb69bf4f7865e12ba09dfae439b5c6d9d15d`

B7 integration's source bodies are now all stable; its carrier metadata sync
is in progress. It previously confirmed these two supplier bodies, and the
three dependent B8 quotes below were refreshed from their exact `Statement`
sections:

- `lem-add-one-point-exact-sequence-line-bundle`:
  `45abf7121b4a3b72ab08c16a18a65205307d27fdc32846dfef07fa01a745097a`
- `cor-picard-projective-line-integers`:
  `29ea0879af8e57dbc91f006d4be7416255837eaf1c070e09021365a4d1705a49`

B7 integration identified these stale B8 contract quotes; they are now
refreshed from those stable supplier bytes:

- `thm-degree-two-g-line-bundle-basepoint-free` cites
  `lem-add-one-point-exact-sequence-line-bundle` / `Statement` with an old
  2,745-character quote; the current 2,580-character quote is recorded.
- `thm-degree-two-g-plus-one-line-bundle-very-ample` cites the same source
  section with the same old/current lengths; its quote is refreshed.
- `ex-serre-duality-projective-line-twists` cites
  `cor-picard-projective-line-integers` / `Statement` with an old
  1,576-character quote; the current 456-character quote is recorded.

The final whole-carrier quote pass checked 897 supported citations and refreshed
43 stale quotes across 19 contract rows. Combined with the earlier 36 B6 and
three named B7 quote refreshes, all current B8 source quotes now match their
supported source sections. A parsed-frontmatter audit across all 58 rows found
no remaining ID, kind, title, status, provenance, dependency-set, or source-URL
set mismatch.

No proof-contract gate or other strict gate was run in this lane; root owns the
single central attempt and final Step 3 labels.

## Handoff

No B8 carrier action remains in this lane. Global dependency levels, the
central validation attempt, and final Step 3 closure remain with the root
orchestrator.
