# frontier-18 — group Alpha `d`, step-3 re-check before the splice

Batches **2** (`extraspecial-p-groups-and-central-products`,
`cayley-graphs-word-metrics-and-quasi-isometry`) and **9**
(`ends-coends-and-weighted-limits`).

Read: `research/frontier-18-alpha-d-step3-scaffold-review.md`, the
`## Step-3 fix pass` sections at `research/frontier-18-batch-2.notes.md` line 919
and `research/frontier-18-batch-9.notes.md` line 659, and then every file the two
Betas claim to have changed — both manifests, both proof-contract files, both
coverage files. Nothing below is taken from a notes claim: each line names what
was opened.

All three pairs were `sufficient` at step 3 and none was routed to a Beta at
`3-fix`; the fix passes exist because my two step-3 repairs (B2-1 on batch 2,
B9-1/B9-2 on batch 9) left derived obligations in files that are the Betas' to
write and not mine. That makes the failure mode this stage exists for the live
one here: an `applied` entry whose derived half never landed. It did land, in
every case, and one residual mismatch that neither of us had caught is repaired
below.

## Per finding

### Batch 2 — extraspecial

- **B2-1** — *confirmed*, in all four parts.
  - My manifest repair is intact and untouched: `def-square-map-of-an-extraspecial-two-group`
    and `lem-the-square-map-is-well-defined-and-refines-the-commutator-pairing`
    are items 44 and 45, immediately after `cor-the-exponent-of-an-extraspecial-p-group`,
    and item 48's strategy is the coset-counting route with its rewritten `deps`.
    `frontier-18-batch-2.pages.json` mtime is my own edit in this dispatch, not the
    Beta's.
  - The item-48 contract **was** rewritten and is not stale prose: 19 citations, all
    of the counting route, and **none** of the five dependencies I removed from the
    item (`lem-dedekind-modular-law-for-subgroups`, `def-centralizer-of-a-subgroup`,
    `def-quaternion-group-of-order-eight`,
    `lem-a-central-product-of-two-quaternion-groups-is-a-central-product-of-two-dihedral-groups`,
    `prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial`)
    survives as a citation source. Every one would have been
    `citation-undeclared-dependency` after step 5; the Beta found that itself.
  - The square-map lemma has a contract and a `scope` row; `scope` is 114, and its
    twelve citations and six derivations are real.
    `def-square-map-of-an-extraspecial-two-group` correctly has neither, being a
    definition.
  - I re-derived the counting argument a third time from the page's own lemmas
    before confirming it, since the Beta authors it at step 5 and neither my report
    nor its re-derivation is a proof. It closes: with $|\bar E|=2^k$ totally
    isotropic and $q|_{\bar E}=0$, maximality forces $q\equiv1$ on each of the
    $2^{2n-2k}-1$ non-trivial cosets inside $\bar E^{\perp}$ and exactly half of
    each of the $2^{2n-k}-2^{2n-2k}$ cosets outside it, giving
    $2^{2n-1}+2^{k}-2^{2n-k-1}$ classes and $2^{2n}+2^{k+1}-2^{2n-k}$ elements with
    $x^2=1$; against $2^{2n}\pm2^{n}$ this is $2^{k}-2^{2n-k-1}=\pm2^{n-1}$, strictly
    increasing in $k$, so $k=n$ and $k=n-1$ uniquely. The Beta's $n=1$ boundary check
    is the right one to have run and it is correct: at $k=0$ the outside-$\bar E^\perp$
    case is vacuous and $Q_8$ has exactly two elements with $x^2=1$, its centre being
    the unique maximal elementary abelian subgroup, of order $2^n$.
  - **The source addition is real and I verified it against the document, not the
    row.** I fetched `https://arxiv.org/pdf/1510.06583` in this dispatch — 246050
    bytes, matching the Beta's stamp exactly — and extracted its text. §2 reads
    "the map $b_q:V\times V\to W$ defined by $b_q(v,w)=q(v+w)-q(v)-q(w)$ is
    bilinear. The bilinear map $b_q$ is called the polar map associated to the
    quadratic map $q$", and §2.1 reads "the map $q:G/Z(G)\to Z(G)$ defined by
    $q(xZ(G))=x^2$ ... is a well defined quadratic map and its polar map
    $b_q:V\times V\to W$ is given by $b_q(xZ(G),yZ(G))=xyx^{-1}y^{-1}$". Both
    harvest rows quote the source correctly, and together they back exactly the two
    items I inserted. Remark 2.4 is also verbatim as harvested, including the
    $D_4$/$Q_2$ notation and the "for each $n\in\mathbb N$ there are exactly two
    extraspecial $2$-groups of order $2^{2n+1}$" whose $n\ge1$ reading the Beta
    flagged — a real convention trap, correctly caught.
  - Component provenance for both new items is recorded in the notes' provenance
    section, not only in the fix pass: `[LN]` for the definition, `[LA]` for the
    lemma, with the reason that the source declares the polarization identity where
    the page derives it inside the group. Neither is `ai-generated`, which is what
    the lemma's being a `deps` target of item 48 requires.

- **B2-1 residual — NOT APPLIED, and repaired by me in this dispatch.** The new
  square-map lemma's contract cites `prop-equivalent-characterisations-of-an-extraspecial-p-group`
  (L1) and `def-special-and-extraspecial-p-groups` (L2) at step 1.1, and neither
  was in the item's `deps` in `research/frontier-18-batch-2.pages.json`. That is
  `citation-undeclared-dependency` under `proof-contract --strict` — the exact
  defect the Beta repaired one line up for item 48, reintroduced at the seam
  between its contract and my manifest, because I wrote the item and it wrote the
  contract. Both citations are genuinely load-bearing: step 1.1 is "every square
  lies in $Z(P)$", which is precisely the elementary-abelian-quotient clause of
  item 5. I added both ids to the item's `deps`; both are items 4 and 5 on the same
  page, so no forward reference is introduced. A sweep of **every** contract in
  both batches against its manifest item now reports 0 undeclared citations and 0
  unresolvable citation sources.

- **B2-2** — *confirmed*. The decline of the Arf invariant stands and the
  restoration of design items 13–14 is absorbed into the coverage harvest. I
  checked the new source against the concern rather than accepting the Beta's
  corroboration: the only two case-insensitive `arf` matches in Kaur–Kulshrestha
  are the extraction artifacts `pol**arf**orm` and `line**arf**aithful`. The
  source contains no Arf invariant, so it does not reopen the design item I
  upheld the decline of.

- **B2-3** — *confirmed*. The rank–nullity seam warning for
  `lem-orthogonal-complement-counting-for-the-commutator-pairing` is written into
  the notes as a step-5 authoring obligation, which is the right home for it: my
  report is not read at step 5 and the notes are. The new item-48 contract cites
  that lemma, which raises the cost of the drift, as the Beta says.

- **B2-4** — *confirmed*, re-verified independently rather than by grep count. I
  swept **all 172 external dependencies** of both batches after every edit in this
  dispatch: every one exists on disk, every one is `status: published`, none has
  `provenance.statement: ai-generated`, and none is legacy-unclassified.

- **B2-5** — *confirmed*. `items/cor-dihedral-groups-as-semidirect-products.md`
  line 38 reads "This group is written $D_n$ here and called the dihedral group of
  order $2n$", so `\operatorname{Dih}(C_4)` is the correct name for the order-eight
  group and every design id containing `d-eight` would have named a different one.

- **B2-6** — *confirmed*. The Beta lets Finding 10 stand as the record of what it
  argued at step 2 and records the correction separately, which is the honest
  shape. The conclusion rests on the two grounds that survive.

- **B2-7, B2-10, B2-13, B2-14, B2-15** — *confirmed*, each opened. The two
  under-mapped van Beek rows are unchanged and both partners are scaffolded;
  `fs-a-finitely-generated-group-with-a-word-metric-is-a-geodesic-metric-space`
  and `fs-nonisomorphic-groups-cannot-have-isomorphic-cayley-graphs` are on the
  Cayley **B** page, which is where B2-6 puts every `fs-` item of this batch, so my
  step-3 sentences about them are true of the pair and not of the A page —
  recorded here so the step-6 reader does not re-derive it. The Cayley B page
  carries six `fs-` and three `cex-` items across nineteen; it is real.

- **B2-8, B2-9** — *confirmed*. The `owner-decision` row for Craven Theorem 3.16
  is unchanged, and the plus/minus recording requirement is written into the notes
  as a step-5 obligation naming both source notations.

- **B2-11 — pushback ACCEPTED, and my report was wrong.** The Beta accepts the
  decline without pushing back on it, and separately corrects my reason 2. It is
  right and I verified it from the code rather than from its note.
  `tools/content-policy.mjs` line 238 guards `batch-a-pair-cap` behind
  `!auditMode` only, and `tools/autopilot/stages/mathlib.mts` wires content-policy
  at exactly four stages: `policyGates` at **`1-scaffold`** (line 993) and
  **`3-fix`** (1111), `policyItemGate` at **`5-author`** (1348) and **`6c-cross`**
  (1526). Both forms pass the batch manifests, so the cap fires at all four. My
  step-3 list — `3-review`, `3-fix`, `3-recheck`, `4-splice`, `5-author` — was
  wrong on three of five entries. The decision is unchanged and better supported:
  the cap would have failed at `3-fix`, the stage that has just run.
  I separately re-verified the claim my *reason 3* and the binding constraint rest
  on, which the Beta did not challenge: `planGate()` runs at `1-drift`,
  `1-scaffold`, `3-review`, `3-fix`, `3-recheck`, `4-splice` and `5-author`, and at
  **no stage after `5-author`** — I had written `2-assign` where the code says
  `1-drift`, which is the only error and does not touch the conclusion. So the
  ceiling is unguarded from step 6 onward and the no-sixty-first-item constraint
  binds exactly as recorded. It is in the Beta's notes as well as in my report,
  which is what makes it binding on the author.

- **B2-12** — *confirmed* live, not from the note. The A page declares the spec's
  four `requires` edges and the B page declares only its A page, byte-identical to
  `plan-spec.json`; `splice-plan.mjs --run frontier-18 --batch 2 --dry-run`
  reports 4 pages spliced, 143 items, no withholding. The Beta correctly declined
  to undo the `[redundant-prereq]` advisory, which is a recorded drift verdict.

- **Minor, not a finding.** The notes' finite-smoke paragraph still reads "Eight of
  the one hundred and thirteen proof-bearing items" where `scope` is now 114. The
  eight is right — I counted eight contracts carrying a non-empty `finite_smoke` —
  and only the denominator is stale, from the contract the same pass added. It is
  prose, no gate reads it, and it is the same class the batch-9 Beta self-corrected;
  fix it at step 5.

### Batch 9 — ends, coends and weighted limits

- **B9-1** — *confirmed*, both halves. My manifest repair is intact (both clauses
  in the title, the colimit clause as a separate numbered part of the strategy,
  `def-small-locally-small-and-large-category` in `deps`), and the contract half
  the Beta owed is real: the one-line "the dual statement … is written out in the
  same way" is gone, replaced by **4.1** (matching a cocone under $F\pi$ to a
  natural transformation $W\Rightarrow\mathcal M(F-,m)$), **4.2** (transporting the
  universal property) and **5.1** (the smallness count, moved out of 3.1's tail),
  with five new facts F8–F12 for the dual half. Thirteen citations, every source in
  the item's `deps`.
- **The Beta's variance note is right and I record my agreement, because it is the
  kind of thing a step-6 reader "corrects" into a defect.** `def-category-of-elements`
  defines $\int P$ for a presheaf directly, with $(c,x)\to(d,y)$ given by
  $f:c\to d$ satisfying $x=P(f)(y)$, so its projection is already covariant and
  $W\star F$ is the colimit over $\int W$ itself. Kelly (3.34)'s word "opposite"
  refers to his own formation of the category of elements, not to the published
  definition. Inserting an $\mathrm{op}$ to match Kelly literally would invert the
  variance — this page's designated fatal error.

- **B9-2** — *confirmed*. The corollary is item 37 on disk (§1 numbers it 36a and
  says why 37–49 are not renumbered), and its contract is not a stub: seven facts,
  four derivations, and **all eight boundary rows dispositioned with substantive
  reasons** — the three `not_applicable` rows each say why (no numerical index, no
  parametrised range, no converse asserted, the last adding that smallness and
  completeness are not necessary), so none is the templated row the brief names.
  `finite_smoke` is empty for the same reason item 12's is. Provenance is
  `ai-altered`/`ai-altered` in the notes' §9, and §9's blanket "every one of these
  is a `deps` target" is corrected to name 36a as the exception — an honest
  correction, since a terminal corollary that is nobody's dependency is exactly
  what may carry the weaker label.
- **One seam for step 6, from the Beta's own finding.** It records that
  $\mathcal M$ locally small is a hypothesis the Statement must carry, and wrote it
  into contract steps 2.1 and 3.1 — but the corollary's *title* does not say it,
  and neither does item 36's. That is correct only if
  `def-set-weighted-limit-and-weighted-colimit` states local smallness as the
  standing hypothesis of the whole weighted half, which is the Beta's argument and
  is sound, since a weighted limit is defined as a representation of
  $m\mapsto[\mathcal J,\mathbf{Set}](W,\mathcal M(m,F-))$. It cannot be checked at
  step 3, because the definition's Statement does not exist yet. **Step 6 must
  open that definition and confirm the hypothesis is in it**; if it is not, three
  titles assert existence more generally than their route gives.

- **B9-3, B9-4, B9-5, B9-6** — *confirmed*, each opened. The Loregian 1.13 row and
  its reason are untouched, which is right: `destination` must resolve to a page
  that owns the result, and my routing to `kan-extensions-density-and-the-free-cocompletion`
  is step 9's decision, not a coverage edit. The dinaturality witness is on the A
  page as `thm-dinatural-transformations-do-not-compose-in-general` with
  `fs-dinatural-transformations-compose` restating it, and the B page carries nine
  substantive examples and no `cex-`, which is the drop I approved.

- **Self-found tally** — *confirmed correct*. The by-kind line now reads 8
  definitions, 3 propositions, 1 lemma, 23 theorems, 7 corollaries, 2 remarks, 6
  false statements. I recounted from `pages.json`: `{definition:8, proposition:3,
  theorem:23, corollary:7, lemma:1, remark:2, false-statement:6}`, total 50, and the
  six `false-statement` items are the six `fs-` ids. It sums to 50 and matches the
  manifest.

- **Not a finding, recorded so step 6 does not read it as one.** Batch 9 keeps its
  two `rem-` items out of the contract `scope` where batch 2 keeps its remarks in.
  Neither is wrong at step 3: `level-coverage.mjs` computes proof-bearing from the
  authored **body**, not the kind, so the obligation is decided at step 5. If either
  remark is authored with a proof, its contract is owed then.

## Gates run in this dispatch, after my repair

```
node tools/content-policy.mjs --manifest-only research/frontier-18-batch-2.pages.json \
  research/frontier-18-batch-9.pages.json
  -> 202 scoped item(s), 0 error(s), 0 warning(s)

node tools/coverage-checklist.mjs --require-destination \
  research/frontier-18-batch-2.coverage.json research/frontier-18-batch-9.coverage.json
  -> 3 page(s), 345 harvested result(s), 0 error(s), 0 warning(s)   [was 331; +14 Kaur-Kulshrestha]

node tools/splice-plan.mjs --run frontier-18 --batch 2 --dry-run
  -> 4 page(s) spliced, 0 already correct, 143 item(s)
node tools/splice-plan.mjs --run frontier-18 --batch 9 --dry-run
  -> 2 page(s) spliced, 0 already correct, 59 item(s)

node tools/url-sweep.mjs --coverage <both> --recover --fail-on-dead
  -> 9/9 live; 0 failed; 0 recoverable; 0 suspect
node tools/source-backing.mjs --coverage <both> --liveness … --reharvest-plan …
  -> 132 authored result(s) across 2 file(s), every one still backed by an openable source
node tools/source-fetch-check.mjs --coverage <both>
  -> 9/9 source(s) fetch-verified
```

Plus two checks no gate performs, written for this dispatch: every contract
citation source in both batches is declared in its item's `deps` (0 violations
after my repair, 2 before), and every citation source resolves to an item on the
batch's own pages or a published item on disk (0 unresolvable).

`node tools/scaffold-verdicts.mjs --run frontier-18 --require-sufficient` reports
14/14 A pages reviewed and 4 insufficient — **none of them mine**. The four are
`lattice-paths-and-catalan-numbers`, `modules-substitution-and-prime-graphs`,
`the-divergence-theorem-and-classical-stokes` and
`lebesgue-measure-on-euclidean-space`, owned by groups `b`, `b`, `a` and `a`.

## Verdicts

| pair | verdict |
|---|---|
| `extraspecial-p-groups-and-central-products` | **ready for splice** |
| `cayley-graphs-word-metrics-and-quasi-isometry` | **ready for splice** |
| `ends-coends-and-weighted-limits` | **ready for splice** |

`research/frontier-18-alpha-d-step3-verdicts.json` is updated to what I verified
from disk in this dispatch: all three `sufficient`, each row carrying the
re-check attestation. Nothing in my group blocks `3-recheck`; the stage is held
by the four pairs above, in other groups.

## What I changed in this dispatch

`research/frontier-18-batch-2.pages.json` — added
`def-special-and-extraspecial-p-groups` and
`prop-equivalent-characterisations-of-an-extraspecial-p-group` to the `deps` of
`lem-the-square-map-is-well-defined-and-refines-the-commutator-pairing`, so its
contract's L1 and L2 are declared dependencies. No other file of either batch was
edited; no coverage, notes, contract, `plan-spec.json` or item file was touched.

## Carried forward

- **For the lead Alpha at step 4.** Batch 2 has no dedicated prose-scaffold
  amendment section; its §GT-14 amendment — `simplicial-trees-and-group-actions`
  cites this page's `def-cycles-trees-and-forests-in-a-simple-graph` and
  `thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path`
  rather than re-minting them — lives inside Finding 7 (notes line 275) and is
  restated in the fix pass (line 1132). Batch 9's amendment A1 is in its §10, where
  it is easy to find. Take both.
- **For step 6.** Open `def-set-weighted-limit-and-weighted-colimit` and confirm it
  states $\mathcal M$ locally small; three weighted-half titles rely on it silently.
  Read `lem-orthogonal-complement-counting-for-the-commutator-pairing` for the
  rank–nullity drift. Both are seams, not defects.
- **For step 9 and the owner report**, unchanged from my step-3 review: Craven
  Theorem 3.16 has no page in `plan-spec.json` (B2-8); Loregian Exercise 1.13's
  forward half should be offered to `kan-extensions-density-and-the-free-cocompletion`
  (B9-3); the Cayley split is a `frontier-19` planning decision with the cut
  already verified (B2-11).
- **D-1 stands.** `SCHEMA.md` §6 states a 100-item review ceiling where
  `tools/validate-plan.mjs` defaults to 60 and `CLAUDE.md` says 60. Still a doc
  bug, still not fixed by anyone, and a Beta reading §6 would scaffold to the
  wrong ceiling.
