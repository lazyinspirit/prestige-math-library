# Batch 13 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-13`; role: Alpha.

## Completed level 3 review

`def-emx-coherency-matrix`: accepted reader repair, repair confidence 1. The preserved baseline `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-baseline/items/def-emx-coherency-matrix.md` hashes exactly to the pre snapshot (989b0df79449009a763476d3d40abeb9dc289e7edf42745c215891ba5ac3955f); current bytes hash exactly to the post snapshot (3b9028e2ad86ea52c05f7743e57926f3d660ec507914c344af382b52d9ed4d8b). The diff introduces explicit coordinate random-variable maps, Borel target, adjoints and pointwise domains and supplies the polynomial measurability argument. This closes the definition precision defect without changing the ensemble construction or its physical scope. The cross-product integrability bound and conjugation of real integrals justify every entry and Hermitian symmetry. The HIGH risk review is complete in the owning contract. No item edit by Alpha is needed.

Direct suppliers opened: `cor-expectation-linearity-monotonicity-and-modulus-bound`, `def-cm-covariance-matrix-of-a-random-vector`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `def-em-polarization-definition`, `def-em-si-conventions`, `pthm-emx-paraxial-error`. The first three supply exact expectation, real-coordinate square-integrability and complex-arithmetic interfaces. The paraxial consumer uses the positive cone and per-mode qualification only; no scalar Fourier error or countable-choice conclusion enters this pointwise definition. The real-plane-wave, laboratory chart, SI and polarization conventions were also opened at their actual uses.

The ordered consumer dispositions, source-label findings and final checks are completed below.

## pthm-emx-stokes-positivity

Checked all four steps against the current coherency and expectation suppliers. Finite L² linear sums justify v†Γv=E|v†Z|²≥0. For Γ=[[a,c],[conj(c),b]], v=(-c/a,1) when a>0 gives b-|c|²/a≥0; when a=0, v=(-tc,1) forces c=0. Thus the determinant is nonnegative, the Stokes difference is four times that determinant, and equality is exactly rank zero or one (both directions). S0=0 forces a=b=c=0 and normalization is explicitly undefined; S0>0 gives P in [0,1]. A fixed finite-dimensional M preserves L² by finite-sum bounds and expectation linearity gives MΓM†; random correlated matrices are excluded. No AC, eigenvector choice, empirical premise or detector claim is needed. Gil §§2.1–2.3 eqs (8)–(21) supports the second-moment and cone context; signs are fixed locally. Reader excerpt enrichment is sound and no refuter finding is routed.

The item bytes are identical in pre/post/current snapshots. The routed touch is supplier-excerpt audit enrichment: `reviewed_no_defect`, `change_kind: audit_enrichment`, no defect IDs. Alpha also synchronized the legacy `citations.quote` for the coherency Definition with the already-current `supplier_excerpts` entry. This is contract evidence maintenance only; no public interface changed.

## cex-emx-zero-intensity-degree

Checked the one-point probability-one zero witness: every outer product and Stokes coordinate vanishes, and 0/0 is undefined. This refutes only the unrestricted normalization claim; it reports no detector observation.

The item bytes are identical in pre/post/current snapshots. The routed touch is supplier-excerpt audit enrichment: `reviewed_no_defect`, `change_kind: audit_enrichment`, no defect IDs. Alpha also synchronized the legacy `citations.quote` for the coherency Definition with the already-current `supplier_excerpts` entry. This is contract evidence maintenance only; no public interface changed.

## pthm-emx-classical-visibility

Checked all three proof steps and all four actual supplier interfaces. The common-unit L² channel amplitudes have integrable cross terms; expansion yields I(ζ)=S+2Re(ζc) with c=E[A1 conjugate(A2)]. For c≠0, ζ0=conjugate(c)/|c| has unit modulus and attains +|c|, while -ζ0 attains -|c|; for c=0 every phase is an extremum. The squared real-coordinate identity bounds all phases. PSD gives |c|²≤I1 I2, hence 2|c|≤S, nonnegative minimum, and denominator 2S>0 under the explicit positive-total condition. Both dark channels give undefined V; one dark channel forces c=0 and V=0; equal perfectly correlated channels give V=1. All phase witnesses are explicit, without choice. Oxford §§3.2–3.3 and Hemmerich Part III coherence/visibility formulas were checked; their time-average interpretations are not silently identified with the adopted ensemble detector model. Finite samples, calibration and noise remain excluded. No refuter finding.

The item bytes are identical in pre/post/current snapshots. The routed touch is supplier-excerpt audit enrichment: `reviewed_no_defect`, `change_kind: audit_enrichment`, no defect IDs. Alpha also synchronized the legacy `citations.quote` for the coherency Definition with the already-current `supplier_excerpts` entry. This is contract evidence maintenance only; no public interface changed.

## ex-emx-unpolarized-nonzero-field

Checked the two equally weighted nonzero phasor outcomes: their diagonal outer products average to |a|² I₂/2; trace |a|²>0 and all three other coordinates vanish. Each phasor amplitude remains nonzero, without claiming the real oscillating field is nonzero at every instant or that empirical frequencies equal model probabilities.

The item bytes are identical in pre/post/current snapshots. The routed touch is supplier-excerpt audit enrichment: `reviewed_no_defect`, `change_kind: audit_enrichment`, no defect IDs. Alpha also synchronized the legacy `citations.quote` for the coherency Definition with the already-current `supplier_excerpts` entry. This is contract evidence maintenance only; no public interface changed.

## Public-interface consumer review

A reference search of current `items/` and `library/` found exactly the four owned item consumers and the A page for the coherency definition. Each was checked as above; no outside consumer needs repair, and no consumer Statement/Definition changed. Page frontmatter order is definition → positivity → visibility, with the two B witnesses on their own page; no page obligation is owed. No TikZ/tikzcd diagram is present or required for these explicit finite-dimensional arguments. Imports and all published suppliers remain unchanged.

## Reader findings and sources

`reader:13:1`–`reader:13:4`: `confirmed_nonfatal`. The four current published items retain the unsupported Tong 2026 revision/printing attribution. The linked PDF cover says “Lent Term, 2015”; its current author course page supplies no 2026 version attribution. This is a bibliographic evidence defect, not a claim that a 2015-labelled PDF cannot have later revisions. Each finding has its own closed `nonfatal-recorded` defect row; the published maintenance itself remains OPEN in `research/published-consumer-supplier-ledger.md`. The owner should remove the unsupported version label and record any retrieval date separately. No published repair or new audit is claimed.

Sources independently opened in this adjudication:

- [Tong, Electromagnetism](https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf), cover and §§4.3.1–4.3.2, printed pp. 84–88: real-part monochromatic encoding, Maxwell amplitude constraints, and polarization convention. [Author course page](https://davidtong.org/teaching/electromagnetism/) checked for the claimed version date.
- [Gil, author-revised February 2020](https://arxiv.org/pdf/2002.04105), §§2.1–2.4, equations (8)–(23): second moments, conditional time/ensemble interpretation, nonnegative coherency matrices and Stokes/purity context. The local construction adopts ensemble expectation directly and fixes its own sign convention. No zero mean or ergodicity hypothesis is silently imported.
- [Oxford Optics Lectures](https://users.physics.ox.ac.uk/~Foot/C2/pdf/optics-lectures-2012.pdf), §§3.2–3.3, PDF pp. 9–11: scalar cross term, time averages, full phase extrema and unequal-intensity visibility.
- [Hemmerich, Classical Optics Part III (2023)](https://www.physik.uni-hamburg.de/en/iqp/hemmerich/teaching-hemmerich/pdfs/opticspart3.pdf), PDF pp. 3–4, coherence and visibility: pair-correlation formula and phase extrema. These time-average models motivate the local adopted ensemble detector response; no measured data are supplied.

The corrected refuter artifact `research/physics-non-fluid-129-2026-10-21-r2-refute-13.json` reports complete routed coverage and no finding. Its off-scope observation remains owner-routed context; this adjudicator neither closes it nor edits that supplier. Source review used extracted web PDF passages; attempted PDF screenshots had cache failures and local `pdftotext` was unavailable. No complete-book reading or successful image inspection is asserted. The actual claims above are also proved directly from the opened item interfaces. All five items concern conditional models or constructed ensembles, not reported observations or statistical estimates; no uncertainty value or empirical certainty is invented.

## Checks and handoff

Initial risk report routed two HIGH and one CRITICAL item; their specific complete reviews are in the owning proof contract. Final focused check results follow below. Engine-owned stamping, judgment and gate battery have not been run. No mathematical blocker or unresolved escalation remains; published bibliographic maintenance remains open as explicitly recorded.

Final local results:

- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-13.proof-contracts.json --require-reviewed`: exit 0, all three mandatory risk reviews complete, zero errors.
- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-13.proof-contracts.json --strict`: exit 0, 5/5 items, zero errors or warnings.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` on the five explicit owned item paths: exit 0, 5 checked, zero failing.
- `node tools/physics-support/rendercheck.mjs` on those five items and both explicit page paths: exit 0, 7 files, YAML and KaTeX clean.
- Final batched `node tools/physics-support/proof-layout.mjs items/def-emx-coherency-matrix.md items/pthm-emx-stokes-positivity.md items/cex-emx-zero-intensity-degree.md items/pthm-emx-classical-visibility.md items/ex-emx-unpolarized-nonzero-field.md`: exit 0, 5 items, 13 steps, zero defects. An earlier run completed but its output was omitted from the returned batch; this final run recovered a visible result.
- Explicit JSON/ledger/hash check: exactly 9/9 owed obligations, every referenced defect row closed (`fixed` or `nonfatal-recorded`) at `3a-adjudicate`, and all five current item hashes equal the post-reader snapshot. No source item or page was changed by Alpha.
- Native defect-ledger append succeeded: five rows, with generated ledger view refreshed. Published maintenance ledger was reread and merged under this writer's lock, then only this writer's lock was released. The SI supplier's existing classification entry was enriched, preserving its separate prior publication-evidence concern.

The initial attempt to locate a plural `proof-contracts.mjs` failed because the actual validator is singular `proof-contract.mjs`; the actual singular strict command above passed. No mechanical failure was entered as a scientific defect. No judge, stamp, self-certification, dispatch, transition or full gate battery was initiated.
