# Residue and projective-line duality examples: repair route

Date: 2026-10-01  
Run: `frontier-37-owner-30`, batch 8  
Scope: report only, as released by root; no item, carrier, receipt, or gate was
edited.

## Scope and exact B8 IDs

The three audited items are:

- `ex-residue-projective-line`
- `ex-serre-duality-projective-line-twists`
- `ex-residue-pairing-one-cocycle`

The batch-8 page manifest names the third item exactly as
`ex-residue-pairing-one-cocycle` (title: “One cocycle carried through the
residue realization of Serre duality”); the shorthand
`ex-one-cocycle-duality-pairing` is not its item ID.

I read the complete bodies of all three examples, the B8 manifest row for the
third item, the current global residue theorem after its released repair, the
local coefficient-trace residue definition and uniformizer basis lemma, the
principal-parts presentation, the residue-pairing definition and its descent
lemma, the projective-space twist cohomology theorem, and the canonical and
twisting-sheaf interfaces. The root-owned line-bundle duality theorem and trace
normalization remark are still under repair, so I did not treat their live
files as stable or rewrite them. The sign route below uses the exact interface
root supplied for that work:
`tau_C(delta(a/u du)) = -Tr(a)`, hence the normalized trace on
`H^1(C, omega_C)` is the negative of the positive residue-sum functional.

## Findings and concrete repair routes

### `ex-residue-projective-line`

The calculations for a rational point, for `t^n dt` at infinity, and for the
two finite residues of `dt/(t(t-1))` are sound. Two proof routes and one
infinity expansion need correction.

At a finite closed point `p=V(g)` for a monic irreducible `g`, the local
parameter is `u=g(t)`, but the differential is `dt`, not `du`. Since `k` is
perfect, `g` is separable and `g'(t)` is a unit at `p`; the chain rule gives
`du=g'(t)dt`. If `f` is expanded in `u`, the correct formula is

```text
res_p(f(t) dt) = Tr_{k[t]/(g) / k}([u^(-1)] (f(t)/g'(t))).
```

Here `1/g'(t)` is expanded as a unit series in `u`. For a simple pole
`f=c/u + regular`, this reduces to
`Tr(c/g'(bar t))`; for higher-order poles the positive terms of the unit
series can also contribute to the `u^(-1)` coefficient. Thus the displayed
`Tr(a_-1)` in the current item is generally wrong. For example, over
`k=Q`, take `g=t^2-2` and `f=1/g`. The stated formula gives
`Tr_{Q(sqrt(2))/Q}(1)=2`, while the correct residue is
`Tr(1/(2 sqrt(2)))=0`.

Step 3.1's claim that every rational differential is a finite linear
combination of `t^n dt` plus exact differentials is not valid. Rational
functions do not have finite Laurent support, and in positive characteristic
some Laurent differentials are not exact (for instance `u^(-3)du` in
characteristic two). The shortest valid route already exists in the item's
direct dependency [F7]: retain the verified monomial calculations as examples
and invoke `thm-global-residue-theorem-algebraic-curve` for arbitrary rational
differentials. If an independent elementary proof is desired, extend to an
algebraic closure and use partial fractions in linear factors; the finite
closed-point trace is the sum over the separable embeddings of the geometric
residues, and for each term `c/(t-alpha)^m dt` the finite residue is `c` for
`m=1` and zero otherwise, while the infinity residue is `-c` for `m=1` and
zero for `m>1`. This works in every characteristic without an exactness claim.

In Verification 4.1, for `omega=dt/(t(t-1))`, the infinity substitution must
keep the differential's minus sign:

```text
f(1/s)=s^2/(1-s),  -f(1/s)s^(-2)ds = -(1-s)^(-1)ds
                         = -(1+s+s^2+...)ds.
```

There is no `s^(-1)` term, so the infinity residue is still zero. The current
line drops the minus sign and writes an expansion with the wrong exponent.
The finite residues remain `-1` at `0` and `+1` at `1`.

The principal-part class `[t^(-1)dt]` remains nonzero: the positive residue
functional on it is `+1`, and the global residue theorem makes that positive
functional descend. Under the fixed normalized trace, however, its Serre trace
is `-1`, not `+1`. Keep the generator and one-dimensionality claims; distinguish
the positive residue functional from the normalized Serre trace. In
characteristic two the values coincide because `-1=1`.

### `ex-serre-duality-projective-line-twists`

The cohomology dimensions, Laurent-tail range `1 <= j <= d+1`, monomial
indices `0 <= m <= d`, and nondegeneracy argument are correct. Step 2.1's
regularity check omits the frame of `L^(-1)=O(d+2)`: `t^m dt` by itself has a
pole at infinity and is only the local coefficient of a section on `U_0`.

Write the global dual-twist section with its frame as
`sigma_m = t^m dt tensor x_0^(d+2)` on `U_0`. For `s=1/t`,
`x_0^(d+2)=s^(d+2)x_1^(d+2)` and `dt=-s^(-2)ds`, so the actual transition is

```text
sigma_m = -s^(d-m) ds tensor x_1^(d+2) on U_1.
```

This is regular exactly for the advertised range `m <= d`. Under
`omega_{P^1} ~= O(-2)`, using `dt -> x_0^(-2)` and `ds -> -x_1^(-2)`, this
section corresponds to the standard monomial `x_0^(d-m)x_1^m`.

The definition `def-residue-pairing-principal-parts` gives the positive
pairing `sum_p res_p(c_p s)`. Keep its value on these bases as
`delta_{j,m+1}`. The Serre duality pairing with root's fixed normalized trace
is its negative, so the pairing claimed to realize Serre duality has matrix
`-delta_{j,m+1}`, not the anti-diagonal identity. It is still perfect; the
dual basis is obtained by negating one of the paired bases. At `d=0`, the
normalized value on `[t^(-1)]` and `dt` is `-1`; in characteristic two it is
`1`. Fact [F6] must not identify the positive residue sum with the normalized
trace.

### `ex-residue-pairing-one-cocycle`

The finite-support principal parts and the class range `1 <= j <= d+1` are
valid. The same frame omission appears in the claim that `t^m dt` is itself a
global section of `O(d)`. State the section as
`sigma_m=t^m dt tensor x_0^(d+2)` on `U_0`; its expression on `U_1` is
`-s^(d-m)ds tensor x_1^(d+2)`, so it is regular for `0 <= m <= d` and maps to
`x_0^(d-m)x_1^m` under the canonical-bundle identification above.

With the positive pairing of `def-residue-pairing-principal-parts`, the
principal part `t^(-j) tensor x_0^(-d-2)` pairs with `sigma_m` by
`res_0(t^(m-j)dt)=delta_{j,m+1}`. The normalized Serre pairing is the
negative of this: its matrix is `-delta_{j,m+1}`. Preserve perfectness and the
range of all indices, but state that the class is detected with value `-1`
by `sigma_{j-1}`; for `d=0` the normalized trace is `-1` (which equals `1`
in characteristic two). The current equality to `+1` cannot also be called
the normalized trace under the fixed convention.

## Supplier interfaces and impact

- `def-residue-rational-differential-curve-point` defines residue using the
  coefficient of `u^(-1)du` in a local uniformizer `u`; it does not allow
  replacing `du` by `dt` at a nonlinear irreducible point. The chain-rule
  factor `1/g'` follows from `u=g(t)` and separability.
- `lem-principal-parts-cech-h1-presentation` makes each finite-support Laurent
  tail a representative of a cohomology class modulo rational principal
  parts. `def-residue-pairing-principal-parts` and
  `lem-residue-pairing-descends-cohomology` define/descent-prove the **positive**
  sum-of-residues pairing. This remains distinct from the normalized Serre
  trace fixed as its negative.
- `thm-global-residue-theorem-algebraic-curve` supplies the arbitrary
  rational-differential sum-zero claim and the descent step; the repaired
  projective-line item can invoke this existing direct dependency instead of
  asserting a false monomial-plus-exact decomposition.
- `thm-cohomology-projective-space-twisting-sheaves` supplies the dimensions
  and monomial bases. The twisting-sheaf frame convention and the displayed
  `omega_C ~= O(-2)` frame maps give the missing tensor transition. The
  `h^1` dimension corollary does not set the trace sign.
- Direct consumers in this three-item scope are exact: `ex-residue-projective-line`
  depends on the normalization remark; `ex-serre-duality-projective-line-twists`
  and `ex-residue-pairing-one-cocycle` depend on both the normalization remark
  and line-bundle duality theorem. The current direct consumers of the
  normalization remark are exactly these three examples. The theorem also has
  direct consumers `cor-h0-canonical-differentials-genus`,
  `thm-canonical-map-nonhyperelliptic-curve`, `ex-genus-one-rr-degree-positive`,
  `rem-general-serre-duality-deferred`, and
  `cor-h1-line-bundle-dual-sections`, in addition to the two duality examples
  and the remark itself. Those other theorem consumers were not in this audit
  scope, so this report makes no claim that their bodies require edits. The
  three audited example proofs/statements must distinguish the positive
  pairing from normalized Serre duality.


## Released example-repair follow-up

Date: 2026-10-01. Root released the three exact example files listed above and
this report only. I reread the complete current
`thm-serre-duality-curves-line-bundles` statement/proof and the complete
`rem-duality-trace-normalization` before editing. Their stable interface is:
the fixed Gysin trace and Serre pairing exist over an arbitrary field, while
the positive coefficient-trace residue comparison is stated over perfect
fields and has sign `t_C = - t_C^res`. In the local Cartier computation the
positive boundary has fixed trace `-Tr(a)`; the positive residue value is
`+Tr(a)`. Characteristic two makes these scalar values equal without changing
the sign convention.

For the arbitrary-field projective-line twist example, I checked the exact
published base-change interfaces instead of applying the perfect-field
residue statement over an imperfect field:

- `lem-proper-cohomology-field-extension` gives the natural cohomology
  isomorphism after any field extension, including extension to an algebraic
  closure.
- `lem-smooth-projective-embedding-gysin-trace-compatibility` states that the
  fixed Gysin trace and cup/evaluation pairing commute with extension of the
  base field.
- The tails at the rational origin and the framed sections in this example
  are explicit coordinate expressions over the original field, so their
  pullbacks are the same tail and section over the algebraic closure. There
  the field is perfect and the residue theorem gives matrix `-delta` for the
  fixed Serre pairing. Injectivity of the field extension descends each scalar
  entry as `-delta` over the original field. No perfectness of the original
  field or global residue formula at its inseparable closed points is used.

The three released repairs make these item-specific corrections:

- `ex-residue-projective-line`: at `p=V(g)`, with parameter `u=g(t)`, the
  coefficient is `[u^(-1)](f(t)/g'(t))`, since `du=g'(t)dt`; the whole unit
  expansion is retained. The former formula omitted `1/g'` and fails, for
  example, for `k=Q`, `g=t^2-2`, `f=1/g` (correct trace zero, former value two).
  The false monomial-plus-exact proof was removed; the existing global residue
  theorem proves the assertion for arbitrary rational differentials. The
  example `dt/(t(t-1))` now has the infinity expansion
  `-(1-s)^(-1)ds`, with no `s^(-1)` term. Its tail's positive residue value
  remains `+1`, while its fixed trace is `-1`.
- `ex-serre-duality-projective-line-twists`: the dual-twist sections are
  written with frames as `sigma_m=t^m dt tensor x_0^(d+2)` and
  `-s^(d-m)ds tensor x_1^(d+2)`. The arbitrary field qualifier is retained.
  The local positive coefficient matrix is `delta_(j,m+1)`; in the displayed
  ascending `j,m` orders this is diagonal identity. Reversing the section order
  to `m=d,...,0` displays it anti-diagonally. The normalized Serre matrix is
  the negative of either ordering. The finite-tail classes are proved to be a
  basis from this descended invertible fixed-pairing matrix and the cohomology
  dimension; no global residue formula at inseparable closed points is used.
- `ex-residue-pairing-one-cocycle`: the same actual tensor frames are shown;
  the positive residue matrix is diagonal in ascending orders and
  anti-diagonal only when the monomial sections are reversed. The fixed Serre
  matrix has entries `-delta_(j,m+1)`. Both examples retain the full ranges
  `1<=j<=d+1`, `0<=m<=d`, including `d=0`.

The three item contracts now list `def-axiom-of-choice` and state that choice
is inherited through their actual duality/cohomology/residue suppliers; the
arbitrary-field twist additionally declares the two base-change dependencies
used above. Their direct item-to-item consumer is the examples page
`library/scheme-theory/residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem-examples.md`,
which only places the examples. The example edits do not alter an item
Statement or Definition interface, so no consumer prose edit is indicated.

The earlier section's sign route was conditional on root's active trace
carrier; this follow-up supersedes that caveat after full stable-text reread.
No page, carrier, plan, receipt, certification, gate, or other item was edited.

## Final repair evidence

The final focused checks were run once on all three stable example files:

- `node tools/tsx-run.mjs tools/precheck.mts items/ex-residue-projective-line.md items/ex-serre-duality-projective-line-twists.md items/ex-residue-pairing-one-cocycle.md` — pass, 3 checked, 0 failing.
- `node tools/rendercheck.mjs items/ex-residue-projective-line.md items/ex-serre-duality-projective-line-twists.md items/ex-residue-pairing-one-cocycle.md` — pass; YAML and KaTeX checks passed, with no multiline display block.

Raw SHA-256 before → after, final bytes, and hash of the literal `## Example`
section (from its heading through the line before `## Facts & Assumptions`):

| Item | Before raw SHA-256 | After raw SHA-256 | Bytes | Example section SHA-256 |
|---|---|---|---:|---|
| `ex-residue-projective-line` | `cbfc5ddb437221f504f8bff2672fba4f9c7aebf277afd9b408d5aa0cb5c506cd` | `b0b2ae8b438832717ba6becd14e487fb3605d9c268728ea312dadc696def22e8` | 7863 | `1e0ffff00376b95ccc683acaa0b4e81a94b7274bbdd41a7a70df0ea698fb8562` |
| `ex-serre-duality-projective-line-twists` | `c66f7874130e4108ef1d18df4ffabf85ef1a3bd3e2394ba5a13a479a00ecf08c` | `099245403afaf9945c5ce227f9525836242eba73e431fca7709750228d02aaa3` | 7742 | `9609fb0b05a02377e1788cfcc1e8b6de1b71a88e452970ae37e65948e0f55e94` |
| `ex-residue-pairing-one-cocycle` | `3f01732cd79409a9baafb4987caba35d164c9f45bf7fe9d339a6b9cf8dde8aea` | `61d5bef17a8b5bc2423f646b58a50cf86ee141a30406354262cef423a5c61813` | 6562 | `187fd8c33430bcefb01632ed4010a35f7a5b47d1ae246a89ed470edd880c2294` |

No broad dependency, certification, or workflow gate was run. The three
example edits and this report are the complete write scope; writer is drained.

## Final selected B8 source-quote synchronization

After the principal-parts supplier stabilized at SHA-256
`04092852d61ac5a1fcd31466f1e550f0122a7676481dc952476bdc6657829993`, the
selected contracts were compared against their current `source_section` text.
Three actual stale quotes were refreshed, one in each selected example, for
`lem-principal-parts-cech-h1-presentation`: its current Statement inherits
Choice through the flasque-acyclicity supplier, rather than the old
coherent-cohomology qualifier. A fourth stale quote in
`ex-residue-projective-line` was refreshed to match the stabilized
`lem-residue-independent-uniformizer` Statement (current SHA-256
`aa8bacfbb19e45c73f7cd5c1a4bd67e09668032245a8915160da6ba7b830cda7`); the
source has `κ(p)[[t]]`, while the contract retained a stale extra bracket.
No other source quotes or rows were regenerated. A direct post-edit comparison
using the proof-contract checker's whitespace normalization found no selected
quote mismatch.

The selected strict command was run once after the three principal-parts quote
updates but before the last uniformizer quote update. It checked 3/3 items and
reported one `citation-quote-mismatch` for the stale uniformizer quote. That
exact quote was then corrected. I did not rerun the strict command under the
one-run instruction, so this report does not claim a passing strict result;
the final strict result remains for root's integration lane to record if it
chooses to make a post-correction invocation.

At handoff, the batch-8 page manifest SHA-256 is
`c8c3fc524e629cdf14473648fb02b28707cee9ccda8b459ded891bc386e229ec` and the
batch-8 proof-contracts SHA-256 is
`ca6a9f21033a12f10af18f52a70fa3315fe17fce9bf4997a56c50f3b8e38a244`. The
manifest was not changed in this final synchronization. No item, receipt,
scope, gate, or baseline was changed. This B8 carrier writer is drained.

## Released B8 carrier synchronization and citation-use follow-up

Root released exactly the three selected B8 rows and this report for carrier
synchronization. In `frontier-37-owner-30-batch-8.pages.json`, I synchronized
the full Example claims and current `deps`, source/provenance, status, and proof
strategy for `ex-residue-projective-line`,
`ex-serre-duality-projective-line-twists`, and
`ex-residue-pairing-one-cocycle`; their existing dependency-level values were
left unchanged. In the selected contract entries, I regenerated current fact
citations and derivation inputs, then manually retained/refreshed the eight
boundary worksheet rows per item to match the current proof numbering, framed
tensors, positive-residue versus negative-fixed-trace distinction, ascending
diagonal and reversed anti-diagonal orderings, and arbitrary-field descent in
the twist example.

The first selected strict check found two concrete citation-use errors:
`F1 -> def-axiom-of-choice` had no proof-step uses in the projective-line and
one-cocycle examples. I added only the missing `[F1]` tags at the steps that
invoke suppliers whose interfaces inherit choice:

- `ex-residue-projective-line`: steps 1.1 and 1.2 (local residue definition),
  2.1 (global residue theorem), and 3.1 (global residue, principal-parts, and
  duality suppliers).
- `ex-residue-pairing-one-cocycle`: steps 1.1 (projective cohomology and
  principal parts), 2.1 (projective cohomology), 3.1 (residue pairing and
  Serre duality), 4.1 (projective cohomology), and 5.1 (duality/dimension).

No mathematical claims, arguments, or Example sections changed in these tag
repairs. Regenerating the two affected contract entries removed the empty-use
citations. The next strict run identified a stale quote in the twist example's
contract: its F4 citation still contained the former principal-parts supplier
Statement wording. The selected twist contract entry was regenerated from the
current source Statement, preserving the manually maintained boundary rows.
The immediate strict result was `0 error(s), 0 warning(s), 3/3 item(s)`.
However, root then reported that the principal-parts supplier has an active
writer. Treat that result as provisional: after that supplier drains, rerun
the same selected strict check once against stable source text before closing
the carrier lane. No further regen or check is authorized while that source is
moving.

Raw SHA-256, initial selected-carrier bytes before this synchronization to
current bytes, and item bytes after the citation-use tag repair:

| File | Initial SHA-256 | Current SHA-256 |
|---|---|---|
| `research/frontier-37-owner-30-batch-8.pages.json` | `623ef485425e720cc3997a901dcfa14d29933de242636a7e24cebed8c9526cf7` | `43afcf6022a94e90949b639dff268345eed8db6f5c3f2035650b8b5fcac22126` |
| `research/frontier-37-owner-30-batch-8.proof-contracts.json` | `7163eec3d4bc51143c8640b7f1df90bc25636edde227cc4014078ecb1236072f` | `dcc2bdb8e99b8a9900fa9c0279233e1915e539e9674ad482b1b91b8b707967af` |
| `items/ex-residue-projective-line.md` | Before citation-use tags: `b0b2ae8b438832717ba6becd14e487fb3605d9c268728ea312dadc696def22e8` | `f7911473338c7bf0c455ab87788aef6ce67650bf37ff8a59a7d7334f9912a035` |
| `items/ex-serre-duality-projective-line-twists.md` | No item edit in this carrier phase: `099245403afaf9945c5ce227f9525836242eba73e431fca7709750228d02aaa3` | `099245403afaf9945c5ce227f9525836242eba73e431fca7709750228d02aaa3` |
| `items/ex-residue-pairing-one-cocycle.md` | Before citation-use tags: `61d5bef17a8b5bc2423f646b58a50cf86ee141a30406354262cef423a5c61813` | `e557ec24c872243f0a64ff547b441a3af120672650aebd2ef1581282a7defad9` |

The literal Example-section SHA-256 values remain those in the prior table;
the item changes in this phase are verification citation tags only. The writer
is paused on the principal-parts supplier's active edit. I will report the
final stable-source strict result and drained state after root's release.
