# Step 3a scope review — fundamental solutions, Newtonian potentials and Green functions

- Run: `frontier-36-complete`, batch 11.
- A page: `fundamental-solutions-newtonian-potentials-and-green-functions`.
- B page: `fundamental-solutions-newtonian-potentials-and-green-functions-examples`.
- Decision: **insufficient**.
- Scope only: this is not a proof-correctness judgment or item approval.

## Scope evidence

The current batch-11 manifest contains the 15 A-page and 7 B-page items listed in the base design, `research/plan-pde-track.md` §PDE-5 (lines 960–1012). The coverage file has 22 canonical included rows and 41 source-harvest rows. This base scope covers the planned fundamental-solution conventions, compact-source Newtonian potentials, Green-function construction and representation, and the companion examples and boundary cases.

However, plan §12 says it is an “additive, authoritative overlay” whose rows are inserted at build time (lines 3243–3248). Its §12.4 PDE-5 table (lines 3440–3451) plans eight more rows for this pair. None is a standalone row in the current manifest or coverage. Six are represented in other ways: local integrability is established inside the Dirac theorem; the convolution-derivative lemma is already published as `thm-convolution-with-a-test-function-is-smooth`; zero-Dirichlet representation and the two Neumann results are covered by the base representation/uniqueness content; and the B flux example includes the two-dimensional normalization. Two planned topics remain absent:

1. A-page `thm-decay-of-the-newtonian-potential-of-compactly-supported-data`. Coverage labels Hunter §2.7’s compact-source exterior asymptotic `out-of-scope`. Hunter treats compactly supported integrable data, derives the n ≥ 3 total-charge asymptotic by dominated convergence, and notes logarithmic growth in n = 2; the overlay additionally asks for the zero-mass improvement. The relevant argument is in [Hunter, *Notes on Partial Differential Equations*, §2.7, printed pp. 36–37](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf). The overlay’s strengthening needs an explicit proof route or source disposition.
2. B-page `ex-adding-a-harmonic-function-preserves-a-fundamental-solution`. The current examples do not state that adding an entire harmonic function preserves the fundamental-solution identity.

The coverage otherwise draws on Hunter §§2.5–2.7, Teschl §§5.3–5.4, and Schmidt §§2.1, 2.8 and 2.11. Its source rows have dispositions, but Hunter’s `out-of-scope` label conflicts with the authoritative overlay’s planned far-field theorem.

## Library role and owner state

This is the PDE potential-theory page after PDE-4 and before PDE-6. Batch 26’s planned Green-functions/harmonic-measure page consumes the A page and uses its fundamental-solution identity, Green symmetry and representation; those dependency records remain open pending authoring and review. Batch 11 itself has no cross-batch supplier edges.

No owner direction or run record found for this review suspends §12. The existing reviewer receipt, `research/frontier-36-complete-step3a-review-fundamental-solutions-newtonian-potentials-and-green-functions.json`, records `insufficient` and its scope hash matches the current pair; the checker holds it for owner action. No page-specific owner receipt exists. A duplicate `record-scope` write is rejected while this insufficient review is owner-held, so the current receipt is retained. A separate scope discrepancy is noted in the batch-11 Step-1 notes: the design gives the Green representation item the class C²(Ω) ∩ C¹(Ω̄), while the scaffold records a narrower C²(Ω̄) case. The owner should reconcile that intended range; this review does not judge its proof.

## Recommended owner action

Enrich the batch-11 manifest and coverage with the missing far-field theorem and harmonic-correction example, provide a source/proof route for the planned zero-mass strengthening, and reconcile the inline/published dispositions with §12.4. Resolve the Green-representation range discrepancy at the same scope review. No pair merger is warranted. After applying the enrichment, the owner must record `proceed` for the resulting scope. If the owner instead rules that §12 is intentionally suspended for this run, the owner must record `proceed` on the current scope; this report makes no such owner decision.
