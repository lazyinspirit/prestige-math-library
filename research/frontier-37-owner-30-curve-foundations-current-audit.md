# Frontier 37 owner 30: current curve-foundations audit

Report-only independent audit of five B6 foundations and the separately
repaired rational-map extension supplier. This records mathematical review
findings, not Step 3 receipts, scope decisions, closure, or publication. The
five B6 targets remain `draft`. The normalization, function-field
equivalence, and geometric-genus proof routes have now been repaired and are
ready for ordinary review once root synchronizes B6 scope. The birational
corollary remains ready subject to stable inputs. The delta item has changed
since this report's independent audit; root separately reviewed its current
interface and synchronized its B6 carrier, as recorded below. This report
does not claim an independent review of the changed delta bytes. The
current dependency lists for the other four foundations resolved to existing
files; I did not independently check the changed delta dependency list. No
unresolved missing-file obligation was found among the currently audited
targets.

## Exact item hashes and review disposition

Hashes are SHA-256 of the current raw item bytes. Dependency counts are from
the current YAML `deps` lists.

| Item | Raw SHA-256 | Direct deps | Disposition |
|---|---|---:|---|
| `thm-normalization-glues-integral-finite-type-curves` | `67bd875ee0b1a553b845ba7de495e75a617b83f883c00137d98b1ca6ba25f18c` | 27 | Repaired proof route; ready for ordinary review after B6 scope sync. |
| `thm-curves-function-fields-equivalence` | `60fe43e71d2237f6d4daf26ca2276535ef671c64875500a2659b02bb7a6c661b` | 54 | Repaired proof route, including both object directions; ready for ordinary review after B6 scope sync. |
| `cor-birational-smooth-proper-curves-isomorphic` | `c202a8b94e26e7b8d81eaa642401cf156ff623733c498e7a047fb62844b6d1de` | 6 | No independent mathematical gap found; ready for ordinary review after its field-equivalence and extension inputs are stable and B6 scope is synced. |
| `def-geometric-genus-singular-curve` | `bccb8f6d70204f1890698a75e9ae2c2e64dd876fc7e89ec0d519e20f7ef7aeed` | 32 | Repaired dimension, geometric-integrality, and smoothness route; ready for ordinary review after B6 scope sync. |
| `def-delta-invariant-curve-singularity` | `df39092149216890ab9b9038b2ff43cc7eb7927c27ae30b98e6b28f9e5447338` | 38 | Root reports separate review of this current interface and B6 carrier sync; this report's independent findings are for the prior hash only. |

## Findings by target

### `thm-normalization-glues-integral-finite-type-curves`

I read the complete repaired proof and its load-bearing interfaces, including
the finite normalization theorem, localization compatibility, affine gluing,
finite-morphism affine criterion, integral-closure results, normality
locality, and scheme normality.

The former [F5] paraphrase has been corrected to the actual
`thm-separatedness-gluing-overlap-criterion` interface: for affine opens over
an affine base, the overlap is affine and the map from the tensor product of
the two chart rings to overlap sections is surjective. The proof uses the
affineness conclusion and no longer asserts that base constants generate the
overlap ring.

Step 1.2 now proves each normalization chart normal: its ring is integral
closure, hence integrally closed by the cited integral-closure result; the
Noetherian hypothesis and normality-locality route identify this with
integrally closed local rings and scheme normality. The finite-type/Noetherian
conditions and actual scheme-local criterion are cited. In the reverse
comparison, Step 1.5 first makes each finite chart ring `D_i` Noetherian using
the finite-algebra-over-Noetherian result, then applies the reverse direction
of normality-locality to pass from normal local rings to integral closure of
`D_i`. The two inclusions `D_i⊆B_i` and `B_i⊆D_i` are then justified by the
integrality and integral-closure properties.

The initiality construction now occurs after the glued normalization and its
finite birational morphism have been constructed. After proving `D_i=B_i`,
the chart identities give morphisms both `C^nu→Z` and `Z→C^nu`; they are
inverse, and uniqueness in both directions is checked over `C`. This gives
the claimed initial arrow with the stated direction. The general Given
remains an integral separated finite-type scheme of chain dimension one; no
geometric-integrality premise was added. Target-only precheck, rendercheck,
and citation checks passed on this raw hash. It is ready for ordinary review
after B6 scope sync.

### `thm-curves-function-fields-equivalence`

I read the complete current proof and the actual function-field,
rational-map-extension, normalization, projective properness, normality,
regularity, global-functions, and base-change interfaces used. The extension
supplier has been repaired separately (see below). The corrected Step 2.2
uses [F9]: projective space is proper over the field and its closed
subscheme `Xbar` is proper. The affine normal model is proved Noetherian and
normal using the integral-closure-is-integrally-closed and normality-locality
routes. Its application of normalization uses the exact general premise
integral, separated, finite-type, dimension one; it does not presuppose
geometric integrality.

Two proof gaps found in the independent review are now closed. First, the
maps in Step 1.2 agree at the generic point, but that alone is not the cited
dense-open agreement hypothesis. The proof now forms their equalizer as the
pullback of the closed diagonal. It is closed and contains the generic point,
so its underlying space is the whole irreducible overlap; reducedness of the
source makes the equalizer ideal zero, proving equality of the morphisms.
Second, the object direction now proves that every curve in the geometric
category has a function field in the field category. The curve dimension
interface gives transcendence degree one. If an element `α` of its function
field were algebraic over `k` but not in `k`, then for the finite simple
extension `L=k(α)`, `L⊗_k\bar{k}` is not a domain because the minimal
polynomial splits with more than one distinct root. Flatness embeds this
algebra into `K⊗_k\bar{k}`, which is a domain by the actual geometric
function-field lemma, a contradiction. Thus `k` is relatively algebraically
closed in `K`. The field-category arrows are now specified as `k`-embeddings.

The first part remains over arbitrary `k`; the second retains its perfect
field hypothesis and uses the existing normalization, regularity/smoothness,
and proper-curve interfaces. The proof establishes geometric integrality
after normalization before calling the geometric-curve interface. This item
is ready for ordinary review after B6 scope sync.

### `cor-birational-smooth-proper-curves-isomorphic`

I read the complete proof and its actual field-equivalence, rational-map
extension, separatedness, and dense-open equality interfaces. Its inverse
construction and cancellation by pullback are valid; no independent math gap
was found. Ordinary review is appropriate after B6 scope sync and stable
review of `thm-curves-function-fields-equivalence` plus the repaired
extension supplier.

### `def-geometric-genus-singular-curve`

I read the complete current definition and its normalization, dimension,
function-field, flatness, separated-overlap, finite/proper, DVR,
perfect-field regularity/smoothness, and arithmetic-genus interfaces. The
proof now establishes the hypotheses before applying the curve and genus
definitions. The original curve's function field has transcendence degree one
by the curve-dimension interface. The normalization is finite type, shares
that function field, and its integral affine charts have dimension one by the
affine-domain dimension/trdeg result; the finite birational normalization
map transfers chain dimension one. The finite map to the proper curve makes
the normalization proper, and the normalization route establishes
separatedness and normality.

Geometric integrality is proved directly rather than inferred from
normalization. The geometric clause of
`lem-integral-finite-type-scheme-function-field` gives that
`K⊗_k\bar{k}` is a domain. For every normalization chart `Spec(B)`, flatness
of `\bar{k}/k` preserves the injection `B→K`, so
`B⊗_k\bar{k}→K⊗_k\bar{k}` is injective and the base-changed chart is an
integral nonempty affine scheme. For two charts, separatedness makes their
overlap affine; its coordinate ring injects into `K`, and the same flatness
argument shows the base-changed overlap is nonempty. These integral charts
cover and pairwise intersect, so their union is irreducible and reduced, hence
integral. This proves geometric integrality and connectedness. The proof
then uses the perfect-field regularity-to-smoothness route and applies the
proper-curve genus interfaces with their hypotheses in place.

The direct dependencies now include the sources for dimension/trdeg,
function-field domain, flat tensor injection, separated affine overlaps, and
prime/nonempty-spectrum steps, alongside normalization, properness,
Noetherianity, DVR, and perfect-field smoothness interfaces. The definition
preserves its perfect-field scope and adds no DC premise. This item is ready
for ordinary review after B6 scope sync.

### `def-delta-invariant-curve-singularity`

The findings below are from my complete read at the prior raw SHA-256
`224a528ce9805b0876459edfc1daa0e11963fb7b77dd177ce6e9a8a74e08d916` (11
direct dependencies). The current item is a different 38-dependency file at
`df39092149216890ab9b9038b2ff43cc7eb7927c27ae30b98e6b28f9e5447338`; I did
not reread those changed bytes, so these findings do not determine their
current mathematical status. Root separately reports a full review of the
current interface and synchronization of its B6 carrier. This attribution
records root's operator finding, not an independent reread by this report. At
the prior hash, I read the complete definition
and the actual normalization, finite-to-proper,
proper-pushforward-coherent, curve-finiteness, residue-extension,
one-dimensional local-ring, and support/annihilator interfaces.

- **Premises/dependencies at the prior hash:** the target then stated no choice
  assumption, but used normalization and curve-finiteness suppliers that
  assume AC. A repair to those bytes would add `def-axiom-of-choice`. If
  retaining the `thm-proper-pushforward-coherent` route, that old version
  would also need to state DC and cite
  `def-dependent-choice`; that supplier requires both AC and DC. A more
  economical existing-library route would avoid that extra premise: since
  normalization is finite it is affine; on each affine target chart
  `Spec(A)`, its preimage is `Spec(B)` with `B` finite over `A`, and on every
  principal open `D(f)` the pushforward sections are `B_f`. The associated
  sheaf has those same sections, so `nu_*O` is quasi-coherent of finite type.
  The base curve is Noetherian, so
  `thm-coherent-sheaves-abelian-noetherian-scheme` makes this sheaf coherent;
  its cokernel with `O_X` is coherent as well. This route needs AC for the
  coherence supplier but not DC, and does not need `cor-finite-morphism-proper`
  merely to define the delta quotient. These are recommendations about the
  prior bytes only, not instructions about the root-reviewed current item.
- **Coherent quotient and support:** let
  `Q=coker(O_X→nu_*O_{X^nu})`. The normalization chart inclusions in the
  common function field make the map injective. The finite-affine route above
  makes `nu_*O` coherent over the locally Noetherian curve, so `Q` is coherent
  and each `Q_x` is finite over `O_{X,x}`.
- **Finite set of singular points:** `def-singular-and-regular-loci-variety`
  defines the locus but explicitly asserts no closedness. Since `k` is
  algebraically closed and hence perfect,
  `thm-regular-locus-is-open-variety` makes the regular locus open, so the
  singular locus is closed. The generic point of the integral curve is
  regular, so this is a proper closed subset; then
  `lem-curve-closed-subsets-finite` makes it finite. Add both locus/open
  sources to the direct dependency list.
- **Finite dimension of each delta:** the generic stalk of `Q` vanishes by
  birationality. For a closed point `x`, `Q_x` therefore has support only at
  the maximal ideal of the one-dimensional local domain `O_{X,x}`.
  `thm-support-and-annihilator-of-a-finite-module` identifies this support
  with the primes containing `Ann(Q_x)`; hence the radical of the annihilator
  is the maximal ideal. Noetherianity and finite generation of that maximal
  ideal give some power of it in `Ann(Q_x)`. A finite filtration by its powers
  has finite-dimensional quotients over the residue field, which is `k` by
  algebraic closedness and the finite-residue-field theorem. Thus `Q_x` has
  finite `k`-dimension.
- The prior proof cited `thm-local-ring-smooth-curve-dvr`, which is not
  applicable to possibly singular `X`. A corrected route for those bytes
  would use the one-dimensional regular-local/DVR criterion for regular
  points and the equivalent DVR characterization for the integrally-closed
  condition. This route also proves
  `delta_x=0` iff `x` is regular, and the finite singular locus proves the
  total sum is finite.

These were proof and premise gaps at the prior hash, not blanket review
concerns. Root's current-interface review is separate from those historical
findings; no current-body conclusion is attributed to this report.

## Released rational-map extension supplier

The current raw item SHA-256 is
`0c1970f10b83353c1644b608480d9ef9bb056d9282ca03383814dfc85fbbc0b3`.
Its extension and uniqueness claims are preserved. The proof now orders the valuative lift before
spreading it out: choose a target affine chart containing the closed-point
image, obtain `B→A_m`, choose finite `k`-algebra generators of `B`, clear
their denominators with one `s∉m`, and use the injection `A_s→A_m` to see
that every defining relation already vanishes in `A_s`. The affine ring map
then gives a morphism `D(s)→Y` through the existing affine-morphism and
localization interfaces. Generic agreement is proved using the diagonal; its
equalizer contains the dense generic point, hence has all of the underlying
space, and reducedness forces the equalizer ideal to vanish. The later gluing
and uniqueness arguments retain the original claim.

The proof/dependency repair added the finite-type algebra, affine morphism,
localization, and Noetherian inputs. A final premise provenance correction
also names the AC-dependent curve-finiteness, smoothness, affine local-dimension,
DVR, valuative, and dense-open equality inputs; Step 1.3 now cites [F14] for
the new finite-type-Noetherian/localization route. Target-only precheck and
rendercheck passed after the structural proof/dependency repair. The last
change only corrected the AC prose and one fact tag; per root direction those
checks were not rerun.

The literal Statement did change: it now states the inherited AC provenance
through the curve closed-subset, affine local-dimension, smoothness, DVR,
valuative, and separated-target agreement routes. The mathematical extension
and uniqueness claims and their overall AC premise are preserved, but this
literal provenance change creates a Statement-level API/quote synchronization
obligation. The proof and dependency bytes also changed; the four direct item
consumers whose review inputs are affected are:

- `cex-rational-map-singular-curve-not-extend-uniquely`
- `cor-birational-smooth-proper-curves-isomorphic`
- `ex-smooth-conic-is-projective-line-with-point`
- `thm-curves-function-fields-equivalence`

Root owns synchronizing the changed Statement quotes and downstream impact
integration, as well as ordinary receipts. No item, receipt, scope, plan, or
gate file was changed here. The B6 carrier JSON update is recorded below.
The five B6 targets above remain draft and this audit does not mark any target
closed.

## B6 carrier synchronization record

After root released the carrier-only scope, the two B6 JSON carriers were
updated for the three final proof versions. The pages manifest now carries
the exact current Statement/Definition text and direct dependencies; the
dependency-level labels were preserved from root's global refresh. The proof
contracts now match all numbered derivations and fact/source/use mappings for
the two proof-bearing targets. Exactly eight selected-source excerpts that
no longer matched current supplier sections were refreshed; all other quotes
were preserved. This carrier update is not a receipt, judgment, or gate
result.
