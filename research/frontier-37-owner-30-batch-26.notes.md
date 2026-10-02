# Batch 26 Step-1 scaffold notes — Nevanlinna's Second Main Theorem and Defects

Run `frontier-37-owner-30`, beta batch 26, complex-analysis pages 841–842. I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the assigned task, the current plan, its batch evidence, and the complete CA-NV-2 design section before construction. The binding file `research/frontier-37-owner-30-owner-authoring-direction.md` did not exist. The live `.autopilot/` status was Step 1 scaffold; concluded `*RESUME.md` claims were not used as run state.

## Design and plan

The CA-NV-2 design at `research/plan-complex-analysis-track.md` lines 3798–3829 and `research/plan-spec.json` agree on the A/B page IDs, title, complex-analysis placement and the CA-NV-1 plus measure prerequisites. The plan spells the latter out as `measures-and-their-basic-properties`, `lebesgue-measure-on-euclidean-space`, and `jensen-theory-and-nevanlinnas-first-main-theorem`. The A order is 841 and B order is 842. The plan's item inventories remain empty because this beta cannot edit the shared plan.

There is one chronology/dependency conflict. The design calls CA-23 a *later* forward reference and says it consumes this pair. In the current plan, `bloch-schottky-and-picard` is already published at order 347, precedes this pair, and has no CA-NV-2 page prerequisite. The plan controls that chronology. Its published Picard result is an agreement seam only and supplies no proof step here. No selected pair or page prerequisite was changed.

## Inventory, construction order and outcomes

The A manifest has 13 items: the seven named design targets and six necessary local suppliers (one definition and five lemmas). The B manifest has five examples. The manifest order is topological; each item was appended once and immediately received a `step1-decisions record` outcome before construction continued. All 18 items carry explicit `deps` and a computed `dependency_level` (range 0–5). A later clarification to the five-value proof covered a possible constant difference, and the ready records of that theorem and its dependent four-value example were refreshed. Unchanged ready items were preserved.

| Outcome | Exact item IDs |
| --- | --- |
| A ready | `def-nevanlinna-exceptional-radius-notation`, `def-nevanlinna-truncated-and-ramification-counts`, `lem-borel-nevanlinna-growth-increment`, `lem-nevanlinna-poisson-jensen-derivative-bound`, `lem-nevanlinna-ramification-counting-identity`, `lem-nevanlinna-logarithmic-derivative`, `lem-nevanlinna-growth-dominates-logarithm`, `thm-nevanlinna-second-main-theorem`, `def-nevanlinna-deficiency-and-ramification-index`, `thm-nevanlinna-defect-relation`, `thm-nevanlinna-five-value-theorem` |
| A escalated | `lem-nevanlinna-exterior-three-value-extension`, `cor-nevanlinna-picard-theorems` |
| B ready | `ex-truncated-counts-for-power-map`, `ex-exponential-defects-and-sharp-second-main-theorem`, `ex-sine-deficiency-ramification-saturation`, `ex-hayman-lacunary-counterexample-to-uniform-s-estimate`, `ex-five-value-bound-is-sharp` |

The local dependency chain for the hard theorem is separated-radius Poisson–Jensen derivative bound plus finite-measure Borel growth increment → logarithmic-derivative lemma → full ramified SMT → truncated SMT → defect relation and five-value theorem. The ramification identity supplies the precise subtraction needed for truncation. The exponential and sine calculations test sharpness and the ramification budget. The Hayman lacunary example explains why an unrestricted all-radius error claim would be false. Rational functions receive an actual all-large-radius `O(1)` logarithmic-derivative estimate; finite-order functions receive `O(log r)` at all large radii. The general `S(r,f)` retains its finite-linear-measure exceptional set in every dependent use.

### Escalation for finite-puncture Great Picard

The complete assigned Picard corollary includes arbitrary isolated essential singularities, not just the entire-plane assertion. The three examined treatments prove the plane Second Main Theorem and its plane Picard consequence. Their full-disc hypotheses do not imply the needed estimate on an exterior domain `|w|>R`, where an inner boundary remains after inversion of a finite puncture. The local A-page supplier `lem-nevanlinna-exterior-three-value-extension` is placed before `cor-nevanlinna-picard-theorems`; its proposed route needs a verified annular/exterior Poisson–Jensen formula, control of the inner-boundary contribution in a logarithmic-derivative/SMT estimate, and an exterior characteristic growth criterion that forces meromorphic extension at infinity. I could not verify those complete steps from the read arguments, so the supplier is **escalated**, and its consumer corollary is **escalated**. The plane part of the corollary is supported, but the full item was not marked ready. These are local A-page items; there is no new prerequisite pair or cross-batch placement request. An owner can either supply and audit this exterior chain or explicitly reconcile the Picard route with the binding design; no published CA-23 result was consumed to fill the gap.

## Mathematical dependency and axiom audit

I read the statements and relevant proof steps of the published Poisson–Jensen formula, centre-regularized Nevanlinna counts, First Main Theorem, characteristic laws, Ahlfors–Shimizu identity, rational-characteristic criterion, local zero/pole factorization, and Lebesgue measure theorem. Their directions and hypotheses match the ready strategies: the Ahlfors–Shimizu identity gives exact convexity after an additive constant, while the rational criterion turns a hypothetical `T=O(log r)` into rationality. The finite target partial-fraction map has degree `q`; its poles are exactly the chosen target divisors. The derivative-divisor formula includes poles and the central regularization. The five-value proof handles a nonzero constant difference separately from its First Main Theorem case. A read-only declared-dependency closure at construction covered 18 local and 954 published item IDs with zero missing IDs, cycles, forward edges or recorded/unproved proof suppliers. The only inadequate actual local prerequisite is the exterior lemma already escalated; no ready item depends on it.

Countable Choice, `def-countable-choice`, is assumed and declared in the exceptional-radius and analytic results that use the published complete Lebesgue measure interface; the defect relation also uses it to state countability from a countable union of finite threshold sets. This is **not** full AC. `def-countable-choice` mentions `def-axiom-of-choice` in its definitional metadata, but no proof step spends full AC. The power-map count calculation remains choice-free. No incompatible-axiom branch or Foundations path to `deferred-set-theory-beyond-choice` was introduced.

No defective published prerequisite was confirmed in this batch. The published CA-23 Picard page is earlier in the current plan, but its independent proof was not used as an actual prerequisite. There is no unrelated published consumer debt blocking any of the 16 ready suppliers.

## Sources and harvest

Three independent complete treatments were fetched, stamped and inspected, rather than inferred from previews:

- [Eremenko, *Lectures on Nevanlinna Theory*](https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf), §§4–6, printed/PDF pp. 6–14: 18-page PDF, 337,053 bytes, stamp `a0de520912ea9817`. This supports the Borel increment, log-derivative and SMT routes and the plane Picard consequence.
- [Goldberg–Ostrovskii, *Value Distribution of Meromorphic Functions*](https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf), Ch. 3 §§1–2, printed pp. 87–98, and Ch. 4 §3, pp. 121–122: 495-page monograph PDF, 4,847,869 bytes, stamp `57977e671d5bf1b8`. This supplies the complete separated-radius estimate, exceptional-radius example, ramification count and defect-relation arguments.
- [Laine, *Complex Analysis III*](https://integraali.com/courses/lecture_notes/Laine_Complex_analysis_3_notes.pdf), §§5–6.1, printed/PDF pp. 35–43: 62-page lecture-note PDF, 1,488,600 bytes, stamp `07e3e6c50805821f`. This independently checks the log-derivative/SMT/defect route and the five-value theorem.

The coverage file records 41 harvested source or canonical results, each included/inline with an item ID or out of scope with a specific reason. It retains the plane-only qualification on source Picard statements and records the unresolved exterior supplier explicitly. All three selected sources were fully accessible, so no `source_resolution` drop or retry waiver is used. An exploratory, unselected Picard PDF location returned HTTP 403; accessible authoritative treatments were located and read, and no claim relies on that failed location. The source stamps were made by `source-fetch-check --stamp` after actual PDF inspection.

## Checks and remaining owner work

- `coverage-checklist --require-destination`: pass, 1 A page, 41 results, zero errors/warnings. `source-fetch-check` after stamping: 3/3 fetch-verified and resolved.
- Whole-run `manifest-deps`: pass, 552 scoped items, zero errors. Whole-run `content-policy --manifest-only`: pass, 552 scoped items, zero errors/warnings.
- Local `dependencyLevels` on this batch: 18 items across two pages, maximum level 5, zero errors. The required whole-run `item-dependency-levels check --run frontier-37-owner-30` exits 1 solely because 14 *other* A/B pages still have empty inventories; it reports no batch-26 label mismatch. Re-run after those suppliers are scaffolded.
- `validate-plan research/plan-spec.json`: pass for page order and the current shared item lists; 319 planned pages still have empty item lists at this check. A read-only `/tmp` simulation inserting only this batch's manifests into the plan passed without undeclared prerequisites, cycles, forward edges or B-page dependencies. The shared plan was not edited.
- `extcheck` and `fwdcheck`: both pass. `extcheck` lists 40 existing global recorded-result consumer warnings, none on this batch's actual ready proof paths.
- `step1-decisions check --run frontier-37-owner-30`: this batch has exactly the two intentional escalations above and no stale ready record after the final refresh. The whole run remains open during concurrent batches (553 scoped items, 477 ready and 90 work rows on the last read).
- `research/frontier-37-owner-30-batch-26.cross-batch-dependencies.json` is `[]`; `frontier-dependency-ledger refresh --run frontier-37-owner-30` completed. No new cross-batch supplier or page prerequisite is requested.

The two escalated items require owner reconciliation; the 16 ready records certify Step-1 construction only. They are not independent mathematical approval, and Step 3 must author and review the full arguments. No published content, shared plan, selected pair, engine state or verdict was edited in this dispatch.

## Step 3a scope repair — local punctured-disc Second Main Theorem

The original Step-1 escalation above is superseded for the current scope repair: the exterior extension lemma now has a complete Schottky route, and the binding punctured-disc SMT has a separate exterior-characteristic proof route. The lemma remains a valid independent proof of the local Picard consequence; it is not being used in place of the required SMT.

### Frozen batch inventory and changed IDs

The repaired manifest contains 14 A items and 7 B items. It adds the binding A item `thm-local-second-main-theorem-on-a-punctured-disc`, with the exact title “The local Second Main Theorem on a punctured disc,” immediately before the Picard corollary. Its statement fixes the inversion, the normalized exterior characteristic, the truncated counts, the (O(\log^+T_{\rm ext}+\log R)) error, the exceptional set in exterior radius (R), and the exact map (s=\rho/R). No ID, kind, title, or statement in the frozen 14A/7B interface should change without notifying the owner.

The six plan-listed B IDs are present. The old power-map example is now `ex-truncated-versus-full-nevanlinna-counting`; the exponential example is split between `ex-nevanlinna-omitted-values-of-exponential` and `ex-sharpness-of-nevanlinna-q-minus-two`; the exponential and sine deficiency computations are retained together under `ex-nevanlinna-deficiencies-of-elementary-functions`; and the Hayman example is now the counterexample `cex-nevanlinna-error-bound-without-exceptional-radii`. `ex-nevanlinna-and-normal-family-picard-proofs` compares the two local Great Picard routes. The prior `ex-five-value-bound-is-sharp` claim is retained as a seventh B item because it is valid existing material even though it is absent from the six-name plan inventory.

The Picard corollary now directly depends on the local SMT and its proof strategy derives the local Great Picard implication from that theorem. It also retains the independent exterior Schottky lemma. The proof explicitly does not import the plane SMT estimate into the punctured domain.

### Exterior SMT proof route and exact boundary accounting

After the immutable pre-author baseline, root authorized the local SMT statement’s explicit Countable Choice qualifier. No ID, kind, or title changed; the exact old and current statements are reproduced in the scope-repair report.

Fix a regular circle (|z-z_0|=\rho) inside the punctured disc, put (F(w)=f(z_0+\rho/w)), and use (R=\rho/|z-z_0|). Then (F) is meromorphic on a neighborhood of (|w|\ge1), and the puncture radius (s) corresponds exactly to exterior radius (R=\rho/s). For a finite target (a), annular Jensen on the fixed inner circle is

\[
M_a(R)-M_a(1)=k_a\log R+N_{\rm ext}(R,a;F)-N_{\rm ext}(R,\infty;F),
\qquad
k_a=\frac1{2\pi i}\int_{|w|=1}\frac{F'(w)}{F(w)-a}\,dw.
\]

Here (M_a(R)=(2\pi)^{-1}\int_0^{2\pi}\log|F(Re^{i\theta})-a|\,d\theta), and (k_a) is the winding integer. The fixed inner mean and the (k_a\log R) term are kept. They give an (O(\log R)) boundary error in the exterior First Main Theorem; they are not discarded as an (O(1)) plane-origin term. The annular Jensen identity is derived locally from the existing argument-principle winding and preimage-counting suppliers.

For the exterior logarithmic derivative, after finite-target Möbius normalization, Lund–Ye Theorem A2 applies to (G) and each (G-c_j): for a function meromorphic in a neighborhood of a genuine one-sided exterior domain {\(|w|\ge r_0>0\)}, the logarithmic-derivative proximity is (O(\max(\log^+T_1(R),\log R))) outside a set of finite linear measure in the exterior radius (R). A finite union of these sets remains finite. The local proof reuses only the partial-fraction/ramification reduction recorded in the proof of the in-run plane SMT and the pointwise derivative-divisor identity; neither plane-domain theorem is transported to the puncture. Integrating the divisor identity from the fixed inner circle gives the local truncation correction. Combining it with the directly derived annular FMT and Lund–Ye A2 yields the displayed 
\((q-2)T_{\rm ext}\le\sum_j\bar N_{\rm ext}(a_j)+O(\log^+T_{\rm ext}+\log R)\)
for (q\ge3), outside a finite-linear-measure exceptional set in (R).

If (E\subset[R_0,\infty)) is the exceptional set in exterior radius, its image in puncture radii is (E_s=\{\rho/R:R\in E\}), with
\[
|E_s|=\int_E\frac{\rho}{R^2}\,dR\le\rho R_0^{-2}|E|<\infty.
\]
The proof never identifies these variables without this change of variables.

For the finite-target reduction, after choosing regular rho, choose finite b outside both the target set and the compact inner-circle image F({|w|=1}), then choose a Möbius map M with pole preimage b and put G=M∘F, so each selected image target c_j is finite. The pole divisor of G is the b-divisor of F; m_ext(R,∞;G)=m_ext(R,b;F)+O(1), and the derived exterior FMT gives T_ext(R,G)=T_ext(R,F)+O(log R). It also gives T_ext(R,G-c_j)=T_ext(R,G)+O(log R). Target multiplicities are preserved. Apply Lund–Ye A2 to G and each G-c_j, with all errors and exceptional sets measured in exterior radius R. No plane rational-composition law is used.

For the Great Picard implication, shrink the puncture so three targets are omitted throughout it, then normalize them to (0,1,\infty). The resulting exterior map (G) is holomorphic and zero-free. The local SMT gives (T_{\rm ext}(R,G)\le C(\log^+T_{\rm ext}(R,G)+\log R)) outside (E), hence (T_{\rm ext}=O(\log R)) on good radii. Annular Jensen with its fixed inner term yields a fixed (C_0) for which (T_{\rm ext}(R,G)+C_0\log R) is nondecreasing. Since the tail measure of (E) is eventually less than one, every interval ([R,R+1]) contains a good radius; the monotonicity transfers the (O(\log R)) bound to all large radii.

On the exterior, (G/w^m) has winding zero for the integer (m) given by a regular inner circle, so it has a single-valued logarithm. Split its Laurent series as (H_++H_-), with (H_+) entire and (H_-) analytic at infinity. Then
\[
G(w)=\Phi(w)u(w),\qquad u(w)=w^m e^{H_+(w)},\qquad \Phi(w)=e^{H_-(w)},
\]
where (u) is meromorphic on the plane and \(\Phi\) is nonzero and holomorphic at infinity. Their exterior characteristics differ by (O(\log R)), so (T(R,u)=O(\log R)). The existing plane growth-characterization item makes (u) rational; thus (G) extends meromorphically at infinity, contradicting essentiality. This growth bridge is specific to the standard circular exterior characteristic.

The Picard corollary now declares `thm-laurent-expansion-annulus`, `thm-laurent-coefficient-formula-and-uniqueness`, `thm-laurent-regular-principal-decomposition`, `thm-termwise-differentiation-of-complex-power-series`, `thm-complex-exponential-is-entire-with-derivative-itself`, `thm-complex-exponential-surjects-onto-the-punctured-plane`, and `thm-zero-derivative-on-connected-open-euclidean-set-iff-constant` for its Laurent/log construction. If W=G/w^m, its winding is zero, so the w^(-1) coefficient of W'/W vanishes; termwise integration yields H=H_++H_-; differentiation shows W exp(-H) is constant, the connected-domain criterion makes that constant nonzero, and exponential surjectivity absorbs it into H. The resulting G=w^m exp(H_+)exp(H_-) has plane characteristic T(r,u)=T_ext(r,G)+O(log r). The constant-u case gives extension directly; for nonconstant u the declared rational-characteristic criterion applies.

### Full-text source checks and distinctions

- Lund and Ye, *Nevanlinna theory of meromorphic functions on annuli*, *Science China Mathematics* 53(3) (2010), pp. 547–554, DOI 10.1007/s11425-010-0037-3, full 8-page PDF `/tmp/lund-ye-annuli.pdf`. Definition A (printed p. 549) and Theorem A1 (p. 551) describe the exterior characteristic and fixed-inner-boundary (O(\log R)) FMT error; Theorem A2 (p. 552) gives the one-sided exterior logarithmic-derivative estimate with finite linear measure in (R). The review does not print a standalone exterior SFT; the local SFT is derived by the partial-fraction/ramification proof above.
- The printed Definition A proximity integral visibly has no (1/(2\pi)) factor, while the integrated count is unscaled. The local item therefore states its normalized mean explicitly and derives the needed FMT from annular Jensen with the boundary winding term. A1 is used as corroboration for the (O(\log R)) fixed-inner-boundary scale, not as a normalization black box. A2’s (O(\cdot)) estimate is unchanged by a fixed normalization factor.
- Kondratyuk, *Meromorphic functions with several essential singularities*, arXiv:0807.1247v1, full 13-page PDF `/tmp/frontier-37-annular-nevanlinna.pdf`: Theorem 1 and its two-parameter Jensen/FMT setup include punctured-disc annuli, but this paper does not supply an SMT.
- Quang, *Meromorphic functions on annuli sharing finite sets with truncated multiplicity*, arXiv:2202.09523v2, full 17-page PDF `/tmp/arxiv-2202.09523.pdf`, Theorem 2.2 printed p. 5: the domain is the symmetric annulus (A(R_0)=\{1/R_0<|z|<R_0\}), not the one-sided exterior after inversion. Its error/exceptional-set theorem is therefore not used for the local claim.
- Eremenko, *Lectures on Nevanlinna Theory*, §5 printed pp. 12–13: the unit-disc SMT assumes a map on the full disc near its boundary. It does not handle an interior essential singularity and is kept explicitly out of scope for the local theorem.
- Goldberg–Ostrovskii, *Value Distribution of Meromorphic Functions*, full text `/tmp/nevanlinna-GO.pdf` (text extraction `/tmp/nevanlinna-GO.txt`), Ch. 1 §5 printed pp. 23–28 and Ch. 3 §3 pp. 108–112: Tsuji theory gives an alternate SMT on the logarithmic cover with its characteristic, error, and exceptional set in the Tsuji covering radius. No conversion to the Euclidean puncture radius or O(log R) circular-exterior characteristic is asserted.
- Simonič, *The Ahlfors lemma and Picard’s theorems*, arXiv:1506.07019v1, full 18-page PDF `/tmp/simonic-ahlfors-picard.pdf`: §5.3 Theorem 11 (printed p. 13) supplies the Schottky bound used by the already-valid exterior extension lemma; §5.4 Theorems 13–14 (pp. 14–15) give the normal-family comparison. The lemma’s actual diagonal extraction is reconstructed explicitly and does not import the AC-dependent general Montel/Arzelà–Ascoli suppliers. This valid route remains separate from the local SMT.

### Requirements, coverage, and checks

The batch’s direct A-page `requires` lists `the-riemann-sphere-and-mobius-transformations`, `bloch-schottky-and-picard`, and `normal-families-and-montels-theorem` for target normalization and the independent Schottky route, plus `isolated-singularities-and-laurent-series`, `complex-power-series-and-analytic-functions`, `complex-differentiability-and-cauchy-riemann`, `the-complex-exponential-and-eulers-formula`, and `the-inverse-function-theorem-completed` for the Picard Laurent/log suppliers. The item graph also declares the argument-principle winding and preimage-counting suppliers, the local use of the global ramification identity, the Möbius normalization suppliers, and the plane SMT’s partial-fraction reduction strictly as a proof template. No new cross-batch supplier is needed; `batch-26.cross-batch-dependencies.json` remains `[]`.

Checks after the repair:

- `coverage-checklist --require-destination`: 58 harvested results, 0 errors, 0 warnings.
- `source-fetch-check --stamp`: 7/7 full sources fetch-verified and resolved.
- `manifest-deps`: 21 items, 0 missing dependencies, 0 errors.
- `content-policy --manifest-only`: 21 items, 0 errors, 0 warnings.
- Whole-run `item-dependency-levels check --run frontier-37-owner-30`: 808 items / 60 pages, max level 31, 0 label errors; no batch-26 dependency level changed.

The remaining source uncertainty is narrow: the inspected peer-reviewed survey supplies exterior FMT/logarithmic-derivative tools rather than printing a separate exterior SFT theorem; the stated local SFT is the explicit in-run algebraic reduction with those one-sided exterior suppliers and local Jensen identity. The independently assigned source researcher did not retrieve the Kondratyuk–Laine 2006 report and therefore could not confirm whether it states a direct exterior SFT; the cited paper itself provides no SMT. That unverified report is not needed to establish the current proof route. No shared plan, readiness record, engine state, cross-batch ledger, published content, or other batch was edited; no retry or dispatch was issued.

## Step 3b authoring checkpoint — all 21 items written and checked

All 14 A-page and 7 B-page items are authored as drafts under
`items/`, with both library pages created and the batch proof contracts,
coverage and manifest dependency rows reconciled. Authoring order followed the
dispatch dependency-level order; no item is justified by a later one.

- A page: `def-nevanlinna-exceptional-radius-notation`,
  `def-nevanlinna-truncated-and-ramification-counts`,
  `lem-nevanlinna-exterior-three-value-extension`,
  `lem-nevanlinna-growth-dominates-logarithm`,
  `lem-nevanlinna-poisson-jensen-derivative-bound`,
  `def-nevanlinna-deficiency-and-ramification-index`,
  `lem-borel-nevanlinna-growth-increment`,
  `lem-nevanlinna-ramification-counting-identity`,
  `lem-nevanlinna-logarithmic-derivative`,
  `thm-nevanlinna-second-main-theorem`,
  `thm-local-second-main-theorem-on-a-punctured-disc`,
  `thm-nevanlinna-defect-relation`,
  `thm-nevanlinna-five-value-theorem`,
  `cor-nevanlinna-picard-theorems`.
- B page: `ex-nevanlinna-omitted-values-of-exponential`,
  `cex-nevanlinna-error-bound-without-exceptional-radii`,
  `ex-truncated-versus-full-nevanlinna-counting`,
  `ex-sharpness-of-nevanlinna-q-minus-two`,
  `ex-five-value-bound-is-sharp`,
  `ex-nevanlinna-deficiencies-of-elementary-functions`,
  `ex-nevanlinna-and-normal-family-picard-proofs`.

Repairs made while authoring (all local to this batch):

- `lem-borel-nevanlinna-growth-increment`: the two cover displays had been
  interleaved after the wrong steps and `m_0` was defined only in step 3.1
  after being used in step 1.3; `m_0:=\lceil u(r_0)\rceil` now sits in step
  1.1, the lambda(E) estimate is inside step 1.3 and the cover inclusion inside
  step 3.1, and step 4.1 was rewritten to use r>s_{m_0} directly.
- `lem-nevanlinna-exterior-three-value-extension` step 6.1: the uniform
  chordal modulus was min{1, ...}, but the library's chordal metric has
  diameter two (step 5.1 and step 8.2 use the diameter-two normalisation);
  changed to min{2, ...}.
- `cex-nevanlinna-error-bound-without-exceptional-radii` step 3.2: the later
  derivative terms carry exponent m*lambda_{nu+m}, not m*(lambda_{nu+m}-1);
  corrected the display so that the stated summand bound 2^{-m} is valid.
- `lem-nevanlinna-poisson-jensen-derivative-bound` step 1.2: the angular
  integral of |log|h|| was written as an equality with m(s,0)+m(s,infty); it is
  an inequality (chordal proximities dominate the log-positive parts), now
  stated as <= with the pointwise comparison.
- `ex-nevanlinna-deficiencies-of-elementary-functions` steps 1.2 and 3.1: the
  lattice-count displays had Re and Im interchanged; corrected to
  |v+2 pi k| <= sqrt(t^2-u^2) and |2 pi k + Im c| <= sqrt(t^2-(Re c)^2).
- `cor-nevanlinna-picard-theorems` step 4.3 now records that the winding
  number of G about 0 is constant on 1<|w|<infty (G holomorphic and zero-free
  there), and step 5.3 evaluates the Laurent coefficient c_{-1} by the
  coefficient formula at |w|=2, inside the licensed range.
- The five prose examples originally used a `## Proof` heading
  (`ex-nevanlinna-omitted-values-of-exponential`,
  `ex-truncated-versus-full-nevanlinna-counting`,
  `ex-sharpness-of-nevanlinna-q-minus-two`,
  `ex-five-value-bound-is-sharp`,
  `ex-nevanlinna-deficiencies-of-elementary-functions`); renamed to
  `## Verification` per SCHEMA's example convention. The counterexample keeps
  `## Statement refuted`/`## Counterexample`.
- Earlier in the dispatch: the Hayman counterexample recurrence was
  strengthened to lambda_{n+1}=4n lambda_n 2^{n lambda_n}+n+1 so that the
  cited Goldberg–Ostrovskii hypothesis lambda_n=o(log lambda_{n+1}) and the
  block estimates hold; the deficiencies example's non-existent wikilink was
  repaired; `def-nevanlinna-counting-proximity-and-characteristic` was added
  to the frontmatter deps of `lem-nevanlinna-logarithmic-derivative` and
  `thm-nevanlinna-second-main-theorem`; `[F1]` was added to step 2.2 of
  `def-nevanlinna-deficiency-and-ramification-index`; misplaced multiline
  displays were joined in six items.

Checks actually run after the final edits (2026-09-30):

- `precheck` explicit path list (21 items): 20 checked (the definition item
  carries no proof body and is skipped by design), 0 failing.
- `rendercheck` (21 items + 2 pages): OK, 23 files.
- `content-policy` on the batch manifest: 21 items, 0 errors, 0 warnings.
- `manifest-deps`: 21 items, 0 normalized, 0 errors.
- `item-dependency-levels check --run frontier-37-owner-30`: 812 items /
  60 pages, no label errors.
- `proof-contract --strict` on the regenerated batch contract: 21/21 checked,
  0 errors, 0 warnings.
- `coverage-checklist`: 1 page, 58 harvested results, 0 errors, 0 warnings;
  `source-fetch-check`: 7/7 fetch-verified and 7/7 resolved.
- `validate-plan` passes for page order and the current item lists; the plan's
  pages 841/842 still carry empty item inventories, which is a Step-4 splice
  edit, not a batch defect (reported to the owner).
- Global `depcheck`/`fwdcheck` exit 1 only on unrelated published
  algebraic-geometry missing ids (`def-invertible-sheaf-of-cartier-divisor`,
  `thm-line-bundle-rational-section-cartier-divisor`,
  `thm-elliptic-cubic-chord-tangent-group-law`, ...); no failure line names a
  batch-26 item. `extcheck` exits 0 with unrelated published recorded-result
  warnings.

Resume re-check (same day, after compaction; no item text edited):

- `author-check.mts frontier-37-owner-30 26` -> `ok: true` (precheck 0
  failing, rendercheck 23 files OK, content-policy 0/0, proof-contract
  `--strict` 21/21); `dispatch-author-artifacts` 25/25 carriers present;
  `step3-decisions check --phase final` shows none of the 21 ids as work.
- `coverage-checklist` 0 errors (also under `--require-destination`),
  `manifest-deps` 0 errors, `item-dependency-levels` no errors,
  `validate-plan` unchanged, `source-fetch-check` 7/7 resolved,
  `prosecheck`/`depsource`/`pathcheck`/`extcheck` clean for this pair.
- `frontier-dependency-ledger refresh` still blocked by the sibling
  `items/lem-roots-of-unity-in-a-number-field-are-finite.md`
  (`justified_by:` empty, not an array); batch-26 input stays `[]` with the
  batch reviewed.
- Author-level re-derivations (SMT target separation and the
  `m(r,0;f')+N_1` identity, local SMT Jensen/ramification/Möbius steps,
  logarithmic-derivative branches, ramification weight comparison, the
  Hayman counterexample recurrence and block estimates, the five-value
  sharpness preimages) found no defect requiring an edit.
