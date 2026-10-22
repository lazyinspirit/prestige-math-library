# Batch 19 authoring notes — Charged photon trapping and extremal scaling

Run: `physics-non-fluid-129-2026-10-21-r2`  
Dispatch: beta / batch 19  
Pages: `emg-fx04` (A, order 735), `emg-fx04-examples` (B)

## Plan and scope

The assigned design section (frontier expansion track, line 187 and its complete
section) and the dispatch agree on both page IDs, titles, library, order,
requirements, and the intended physics scope. The design specifies two A-page
propositions—outer RN circular-null trapping and the extremal throat scaling—and
one B-page counterexample to a uniform positive lower bound for subextremal
surface gravity. The corresponding entries in `research/plan-spec.json` have an
empty `items` inventory. This is an unpopulated inventory, not an alternative
mathematical claim; the assigned detailed design controls the item placement.
The shared plan was left unchanged.

The design warnings are preserved. The photon result is an exact RN null-ray
calculation and implies no wave-decay or Morawetz estimate. It uses nonzero
angular momentum for circular orbits, treats radial null rays separately, and
does not give the smaller algebraic root a universal exterior-orbit meaning.
The extremal scaling fixes the mass, pulls back the Maxwell two-form by the same
coordinate map as the metric, and proves derivative convergence only on compact
subsets with scaled radius `R>0`; it asserts neither full-exterior control nor a
decoupled theory. The photon proposition includes the requested TikZ radial-line
schematic, with its conventions and limits explained in its Remarks; the proof
does not rely on it.

Fresh A/B page bodies are empty per the current compact-layout policy. Page
content is carried by the page metadata and item statements; the counterexample
is listed under the B page's `examples` inventory.

## Carrier and dependency inventory

| Item | Carrier | Direct dependencies | In-run item level |
|---|---|---|---:|
| `prop-emg-fx-rn-photon-trapping` | A proposition | `def-emg-xs-rn-data`; `ex-the-round-metric-on-the-sphere-as-an-induced-metric`; `prop-emg-xs-rn-horizon-data`; `def-geodesic-of-an-affine-connection`; `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`; `def-emg-explicit-power-regimes`; `def-countable-choice` | 0 |
| `prop-emg-fx-throat-scaling` | A proposition | `def-emg-xs-rn-data`; `thm-emg-xs-rn-near-horizon` | 0 |
| `cex-emg-fx-nonuniform-extremal-limit` | B counterexample | `def-emg-xs-rn-data`; `prop-emg-xs-rn-horizon-data`; `def-emg-explicit-power-regimes`; `def-complete-ordered-real-field`; `cor-archimedean-reciprocal` | 0 |

Each direct item prerequisite is an inspected, published mathematical carrier;
none is a batch-19 item. The photon proof explicitly adopts `AC_omega` because
the published metric-connection theorem assumes it. Its zero-charge case is
proved directly because the RN horizon supplier has a strict `Q^2>0` hypothesis.
The throat proof directly derives the dyonic pullback and uses the near-horizon
theorem only in its exact positive-electric specialization
`M=q_e=L>0, q_m=0`. No supplier is treated as proved merely because of a draft
label.

Batch 19 has batch dependency level 1, requiring batch 18 through page
`emg-fx03`. That page's six current batch-18 item readiness records were checked
with `loadStep1Record` and `step1Decision`; all six are closed `ready` with
current hashes. The scoped page dependency is recorded in
`physics-non-fluid-129-2026-10-21-r2-batch-19.cross-batch-dependencies.json`.
That status verifies the declared interface check only; it is not independent
proof approval. Other requirements of the assigned A/B pages are recorded in
their frontmatter. The A/B link is within this batch and is not a cross-batch
edge.

## Sources read and harvested results

Full texts were inspected, not inferred from abstracts. The source list,
retrieval records, searches, item-by-item dispositions, and resolution history
are retained in
`physics-non-fluid-129-2026-10-21-r2-batch-19.coverage.json`.

| Full-text source and locator inspected | Items / harvested result | Disposition |
|---|---|---|
| David Tong, *General Relativity*, complete 290-page author-hosted notes, [PDF](https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf). Photon method: PDF pp. 50–51; extremal RN throat: §6.2.5, printed pp. 266–268 (PDF pp. 273–275). | Photon proposition: Schwarzschild effective-potential maximum and radial instability are contextual method only; charged polynomial, exterior inequality, and instability are derived locally. Throat proposition: independent positive-electric extremal throat geometry. | Included for throat; inline context for photon item. Tong's charge convention is not imported. Fetch-stamped and inspected. |
| Max Weissenbacher, *Decay and non-decay for the massless Vlasov equation on subextremal and extremal Reissner–Nordström black holes*, [arXiv:2303.15338v2 full PDF](https://arxiv.org/pdf/2303.15338). Inspected §2.1, eqs. (35), (46)–(48), and §§2.3.1–2.3.5; the article's complete 74-page text was opened. | Photon proposition: exact outer photon radius, conserved geodesic quantities, and trapping context, independently checked against the local derivation. Counterexample: RN roots and surface-gravity formula; the fixed-mass sequence and no-uniform-bound argument are proved locally. | Included for both items; fetched and stamped. The paper's Vlasov decay conclusions are not imported. |
| Lars Aalsma, Jan Pieter van der Schaar, and Manus R. Visser, *Extremal black hole decay in de Sitter space*, [arXiv:2311.13742 full PDF](https://arxiv.org/pdf/2311.13742). Inspected §2.1, eqs. (2.4)–(2.11), PDF pp. 4–5. | Throat proposition: independent extremal RN scaling coordinates and `AdS2 x S2` metric limit. Dyonic field pullback and compact-set all-derivative convergence are proved locally. | Included; full-text fetched/stamped and inspected. Its units and charge convention are not imported. |

The version-of-record Springer PDF URL for the Weissenbacher paper
(`https://link.springer.com/content/pdf/10.1007/s00205-024-02060-1.pdf`) first
returned a short HTML response, then a cookie-consent interstitial on five
recovery retries. The six attempts and their timestamps/outcomes are preserved
in coverage. After the failure, title/author/journal and DOI searches found the
same paper's complete arXiv v2 and a DNB-hosted version. The full arXiv v2 was
opened and its relevant sections inspected; it was selected as the accessible
copy, so no mathematical coverage was dropped. The unusable Springer URL is
recorded as a certain URL-level drop, not a dropped article or result. The
`source-fetch-check --stamp` evidence records 3/4 source entries fetch-verified
and all 4/4 resolved, with the documented Springer URL drop.

## Checks and readiness

Final scoped checks reported: all three proof prechecks passed; `proof-layout`
reported 3 items, 12 steps, 0 defects; `rendercheck` passed the three items and
two pages; `content-policy` reported 3 scoped items, 0 errors, 0 warnings;
strict proof-contract validation reported 0 errors and 0 warnings for all three
items; coverage-checklist reported 1 A page, 7 harvested results, 0 errors, and
0 warnings; and source-fetch-check reported 3/4 fetch-verified and 4/4 resolved.
The scoped batch-19 dependency calculation gives level 0 for each of its three
items, with no in-batch item suppliers. Recomputing the current full run graph
gives batch 19 level 1 with `requires: ["18"]`, matching the recorded level and
edge. The run-wide `batch-dependency-levels.mjs check` nevertheless reports a
stale graph hash because current manifest bytes changed since the recorded
scheduling snapshot; the graph is shared run state and was left for the owner to
refresh. Similarly,
`item-dependency-levels.mjs check --run` reports empty scaffold inventories in
other batches. The scoped batch-19 item calculation is clean. Every item
contract lists its actual proof steps, exact supplier excerpts, inputs,
boundary cases, and finite checks. Readiness records bind the final
item/dependency hashes. These Step 1 records report authoring readiness; they
do not certify independent acceptance.
