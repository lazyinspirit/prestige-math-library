# Step 3a scope review — unbounded self-adjoint operators and Stone's theorem

- Run: `phase-2-remaining-27` (role: alpha; batch 6; this pair only)
- A page: `unbounded-self-adjoint-operators-and-stones-theorem` (plan order 288.087)
- B page: `unbounded-self-adjoint-operators-and-stones-theorem-examples` (plan order 288.088)
- Scope decision: **sufficient** (recorded with `tools/step3-decisions.mjs record-scope`;
  receipt `research/phase-2-remaining-27-step3a-review-unbounded-self-adjoint-operators-and-stones-theorem.json`)
- Scope is judged here, not proof correctness. No scaffold item, contract, plan,
  page or owner record was edited.

## Evidence read

| Artifact | Use |
|---|---|
| `research/phase-2-remaining-27-batch-6.pages.json` | Current A inventory (41 items, in order), B inventory (7 items, in order), page `requires`, companion pairing |
| `research/phase-2-remaining-27-batch-6.coverage.json` | Source record: 7 fetch-verified rows over 4 treatments, 54 harvested headings disposed (37 `included`, 15 `inline`, 2 `out-of-scope`, 0 `deferred`) |
| `research/phase-2-remaining-27-batch-6.notes.md` | Scaffolder record: design/spec conflicts, sign conventions, min–max source typo, choice audit, gate results |
| `research/phase-2-remaining-27-batch-6.cross-batch-dependencies.json` and `research/phase-2-remaining-27-cross-batch-dependencies.json` | 20 reviewed `verified` rows for batch 6; unified ledger shows 15/15 batches reviewed, 263 edges, 0 unreviewed, 0 orphaned |
| `research/phase-2-remaining-27-alpha-step1-drift.md` and `research/phase-2-remaining-27-drift-evidence.json` | FA-21 drift verdict `no-drift`; declared edge `spectral-measures-and-borel-functional-calculus`; closure includes FA-6, FA-12–13, FA-17, FA-19 |
| `research/plan-functional-analysis-track.md` | Prose design §5 FA-21, lines 1582–1664 (A items 1–38, B items 1–8, hard proof/domain plan) and binding §14.4 FA-21 bullet, lines 3216–3224; §6 obligations lines 1978–1982; index line 72; source matrix line 2809 |
| `research/plan-spec.json` | Page identity, orders, companions, exact `requires` for both pages; both `items` arrays empty (inventory lives in the batch manifest) |
| `research/phase-2-remaining-27-owner-authoring-direction.md` | Binding run direction: §§14.4–14.5 of the FA plan supersede stale FA-13–FA-21 inventories; complete local proofs required |
| Step-1 readiness records for the FA-21 items (e.g. `...-step1-thm-min-max-principle-below-essential-spectrum.json`) | All recorded `ready` with exact dependencies; no escalation or source drop |
| Williams §7, Teschl, Schnaubelt PDFs, re-fetched | Independent re-verification of hashes and of every load-bearing numbered result (below) |
| `library/functional-analysis/schwartz-space-and-the-plancherel-theorem-examples.md` and `items/ex-momentum-operator-under-the-fourier-transform.md` | Confirms the §14.4 rehoming is applied and the momentum example is published on FA-23 B |

## Role in the library

FA-21 is the terminal page of the functional-analysis spectral-theory block
FA-19 → FA-20 → FA-21: it consumes FA-20's PVM and bounded Borel calculus
(verified page edge plus 5 item edges) and extends it to unbounded
self-adjoint operators, Cayley/resolvent theory, deficiency indices and
Stone's theorem. Its A page requires exactly
`spectral-measures-and-borel-functional-calculus` (plan-spec and drift
evidence agree), whose closure contains the design's older FA-6, FA-12–13,
FA-17 and FA-19 names.

In-run consumers were checked on current manifests: only the B companion
requires the A page; scanning all 15 batch manifests for item deps on any of
the 41 A ids returned nothing, and the unified ledger holds no
page- or item-level edge with FA-21 as supplier. The B page is a leaf. The
planned external consumers in `plan-spec.json` are SC-6
`hormander-estimates-and-the-levi-problem` (complex analysis; consumes the
densely-defined-adjoint interface) and the representation-theory track's
orientation-only use of Stone's theorem; both are unbuilt, and no published
library page or article names this page. The pair completes the FA block and
owes nothing to published content.

## Inventory against the prose design and the binding amendment

A page: all 38 design items of §5 FA-21 are present, in design order. The only
items beyond the design are the three helpers the binding §14.4 bullet orders
— `lem-laplace-resolvents-of-a-unitary-group`,
`lem-resolvent-star-algebra-is-dense-in-c-zero`,
`lem-spectral-form-domain-and-core-of-a-semibounded-operator` — each placed
before its consumers; `thm-min-max-principle-below-essential-spectrum` is
stated for a self-adjoint operator bounded below and uses the spectral form
domain, exactly as §14.4 requires. No design item was dropped, weakened or
moved to another page.

B page: 7 of the 8 design items, in design order. The absent
`ex-momentum-operator-under-the-fourier-transform` is **not** scope loss:
§14.4 rehomes it to FA-23 B ("preferable to duplicating a 13-item
one-dimensional Fourier theory"), and it is already published there
(`library/functional-analysis/schwartz-space-and-the-plancherel-theorem-examples`,
status `published`, item `items/ex-momentum-operator-under-the-fourier-transform.md`
status `published`). The remaining B ids match the design verbatim.

Ordering and interfaces hold on disk: the three helpers precede their
consumers, the extension-parameterization theorem precedes the existence
corollary, and the B statements consume only this pair's A items plus two
published suppliers (`def-l-p-space-as-a-quotient-by-null-functions`,
`thm-closed-graph-theorem`). All 48 items carry complete statements, proof
strategies and source locators.

## Source coverage and independent re-check

The coverage disposes every harvested heading and keeps the subject's
deliberate boundaries: Williams's spectrum-realisation remark (any closed
subset of $\mathbb C$ is a spectrum) and Bühler–Salamon's unbounded normal
operators (§6.3.3) are the two `out-of-scope` rows; the latter matches the
plan's explicit exclusion of unbounded normal operators (line 266) and of
general $C_0$-semigroup generation (line 265). No source was dropped and no
row is `deferred`.

I re-fetched the three principal PDFs and reproduced the recorded stamps
exactly: Williams `12aa6e2ceb0a4f8c`, Teschl `ee2cfd1c9fdc41ef`, Schnaubelt
`5451d43af7b32941`. Then I read the load-bearing results in full:

- Williams §7, printed pp. 28–39 — Definitions 7.3, 7.6, 7.8, 7.11, 7.15,
  7.26, 7.29; Examples 7.5, 7.7, 7.9, 7.23 (the $T_3\subset T_2\subset T_1$
  chain with $T_1^*=T_3$, $T_2^*=T_2$, $T_3^*=T_1$), Remarks 7.10, 7.14,
  7.24, 7.27, 7.33; Lemma 7.12, 7.16; Proposition 7.20 with proof, Corollary
  7.21, Proposition 7.22; Theorem 7.30, Theorem 7.34 (six equivalent range
  criteria with estimate (7.6)), Theorem 7.35 (multiplication form),
  Corollary 7.36 and Theorem 7.37 (Stone, both directions). Every item claim
  I checked has a matching numbered result.
- Teschl — Theorem 2.26 and 2.27 with (2.105)–(2.108) (Cayley transform,
  deficiency spaces, exact extension domain/action); Theorem 3.1 and 3.2 with
  (3.26)–(3.33) (PVM integral, unbounded calculus, domains, adjoints,
  products); (3.86)–(3.88) and Lemma 3.18 (the $H_{pp}\oplus H_{ac}\oplus
  H_{sc}$ decomposition and the three spectra); Theorem 4.12 (max–min) and
  Theorem 4.14 with Problem 4.11 and the printed $V(\psi_1,\dots,\psi_n)$
  mismatch (the trial-dimension typo the scaffold corrects by stating both
  standard formulae); Theorem 5.1 and Theorem 5.3 (Stone — Teschl's sign
  $U(t)=e^{-itA}$, equivalent to the page's $e^{itT}$ after $T=-A$);
  Theorem 6.4 with proof (Kato–Rellich); Lemma 6.17 (Weyl criterion);
  Theorem 6.19 with proof and Lemma 6.21 (relative compactness, Weyl's
  theorem); Theorem 6.31 with proof, Corollaries 6.32–6.33 and Lemma 6.34
  (resolvent convergence and unitary-group convergence).
- Schnaubelt §1.1 — Remark 1.2 and the following paragraph (norm continuity
  forces a bounded generator), Propositions 1.10, 1.19 and 1.20 with proofs
  (closed generator, Laplace-transform resolvents).

The Bühler–Salamon Chapter 6 row is statement-level only, as the coverage and
the batch notes state; every item it cross-checks also has a full-text
treatment in Williams or Teschl, so no item rests on that row alone. With that
declared limit, I found no coverage overclaim and no topic of the intended
subject without a verified treatment.

## Observations for the Step 3b author and owner (not item approvals)

1. **Overlapping base example, differentiated content.** The A-page
   `cex-symmetric-need-not-be-self-adjoint` computes the minimal derivative's
   adjoint, while the B-page
   `cex-the-minimal-derivative-is-symmetric-not-self-adjoint` adds the
   deficiency spaces $\mathbb C e^{\mp x}$, $d_+=d_-=1$ and the
   $f(1)=e^{i\theta}f(0)$ extension family. Both are design-mandated (A item 8,
   B item 5); the overlap is redundancy, not duplication of the claim.
2. **Forward wording.** That B item says "the previous counterexample" although
   the preceding B item is the periodic example; its declared dependency is the
   A-page counterexample. The author may tighten the reference to the A item.
3. **Coverage row label.** The out-of-scope Williams row bundles Remark 7.27
   with the realisation remark that is actually Remark 7.33; the disposition is
   correct (the closedness clause of 7.27 is built into the resolvent
   definition item), but a precise locator for a future reader would cite 7.33.
4. **Cross-batch sign convention.** Batch 5's
   `thm-stone-resolvent-formula-for-spectral-projections` uses
   $(T-(t\pm i\varepsilon))^{-1}$ while this batch fixes
   $R_T(z)=(z-T)^{-1}$; the batch notes record the translation
   `(2πi)^{-1}∫(R_T(t-iε)-R_T(t+iε))dt`, and no FA-21 item consumes the
   batch-5 formula. Not a defect; recorded for notation alignment only.

## Limits of this review

I judged scope, not proofs: item-level proof correctness, choice accounting
and dependency adequacy remain Step 3b/5 duties. My source reading covered
every load-bearing numbered result and its immediate proof context in the
three full-text treatments (including the complete Williams §7 and the
complete proofs used for the spectral theorem, Stone's theorem, Kato–Rellich,
Weyl's theorem, resolvent convergence and min–max), not every page of every
cited range; the one statement-level treatment is declared. No owner scope
receipt for this pair existed before this review (the stopped
`phase-2-remaining-26` run left only an undispatched task file, and the
duplicate run-27 task with hash `98b369c05ce41fa4` is not in the dispatch
table). No unresolved scope uncertainty remains.

## Decision

`sufficient`: the A page carries every planned definition, theorem, lemma and
counterexample of the intended subject (domains, graphs, closure, adjoints,
symmetric/self-adjoint/essentially self-adjoint operators, resolvent and
spectrum, range criterion, Cayley transform and correspondence, PVM integral,
unbounded spectral theorem, Borel calculus, unitary groups, Stone's theorem,
deficiency indices and self-adjoint extensions, spectral types, relative
boundedness and Kato–Rellich, discrete and essential spectrum with Weyl's
criterion and invariance, resolvent convergence, and the min–max principle
below the essential spectrum) together with the three binding §14.4 helpers;
the B page delivers the planned examples and counterexamples, with the
momentum example rehomed and published on FA-23 B as the binding amendment
requires; and the coverage is backed by hash-verified full treatments with
every harvested result disposed. No enrichment, merger or pair change is
requested.
