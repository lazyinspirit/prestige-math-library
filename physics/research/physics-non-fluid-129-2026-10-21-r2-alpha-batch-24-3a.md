# Batch 24 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-24`.

Scope: exactly two touched obligations, no reader/refuter/page findings; five required risk reviews, in generated dependency order. No judging, stamping or dispatching is performed.

## Level 0: affine connection sector

Reviewed `prop-emg-fx-affine-connection-sector`, its seven cited suppliers and their relevant proofs, reader/refuter evidence, and the current contract. Overlap cancellation and arbitrary global translation give the affine structure; curvature subtraction gives `f'-f=d alpha`. Compact boundaryless surface integration uses smooth pullback and compact Stokes, including the empty surface. The pushforward distribution uses inverse pullback on connection forms and therefore the stated minus sign. The sole TikZ square commutes with precisely this curvature translation. The inherited countable-choice assumption is explicit and no extra selection is made. No defect found; risk review complete. This untouched item owes no decision.

Sources actually read: retained batch-24 PDFs, Morrison §5.1 (PDF p. 9), §§7.1–7.3 (PDF pp. 14–16), and Tong §1.1.2 (PDF pp. 17–19). These support the connection conventions; the local proof supplies the formulas. Tong's quantum phase premise is excluded. Morrison was also opened at https://tqft.net/papers/ConnectionsAndBundles.pdf. No full-source or transitive-closure audit is claimed.

Initial risk-report on the owning contract: exit 0, five HIGH/CRITICAL items routed. Remaining work: finite coisotropic carrier, circle example, current definition, boundary lemma, then final checks and decisions.

## Level 0: finite coisotropic pairing

`touched:24:prop-emg-fx-finite-coisotropic-pairing`: **accepted_repair**, confidence 1. The owner-step2-baseline carrier matches the frozen pre-reader raw hash `6dc8b127e9fd9fff81350ec0d9f65ac428c7f04546e3bca189b6391e191f93a1`; current bytes match post hash `0d066c6843f65ddf2be9d1233f3f9172d2e677b4d2bfad8d9556250fa8aec6b4`. The sole Statement expansion explicitly defines the form, orthogonal and cosets; the conclusion and proof are preserved. This is a nonfatal explicit-definition repair. The direct suppliers and earlier symplectic-space/orthogonal definitions were read. Skew symmetry removes representative changes; the radical is precisely W^omega, including the zero quotient and V=0. No infinite-dimensional claim is made. Retained Meinrenken PDF §2.4 Proposition 2.20, pp. 11–12, was read directly and agrees with the local proof.

A search of items and library for this ID finds only its carrier and assigned A-page placement; there is no dependency or reference consumer to repair. Manifest claim remains mathematically identical. Risk review complete. Closed ledger row to be appended for this nonfatal repair: `pnf129-r2-b24-coisotropic-explicit-definitions`. Next: circle example.

## Level 1: flat holonomy circle

`touched:24:ex-emg-fx-flat-holonomy-circle`: **amended_repair**, confidence 1. Reversing only the reader title reproduces frozen pre hash `5e057d7863fddd900cc5f801c74d3b69cc3e33b89676dadecb8a44a18cc65c36`; before the present repair the current carrier matched post hash `56da03c1643c8f7e286b607e983bb9886dd0a936d68ddf12075b4af78035dab9`. The reader correctly removed the title's unconditional nontriviality claim: integer theta has unit holonomy and Wilson variable.

Independent review found a second defect in Verification 2.1: w->w^n does not have inverse w->w^(-n), e.g. n=0 is constant and n=2 is two-to-one. Repaired precisely this false assertion by explicitly extending h(q)=w^n to the base and giving the smooth inverse of the actual bundle map Phi_h(q,z)=(q,h(q)z). No assumption that h is a diffeomorphism is needed. The statement and all other proof steps are unchanged. The corresponding contract derivation and risk review are synchronized. There was no judge stamp to invalidate.

Reviewed the nine direct suppliers, with the circle part of the published flux/holonomy lemma (steps 1.2, 2.3, 3.2, 4.1), the full gauge definition and exponential-kernel proof. Directly z(phi)=z0 exp(-i theta phi) supplies the horizontal lift without any global angle assumption. Equivariance preserves its multiplier; exp(-2 pi i theta)=1 iff theta is integer. Cases theta=0,1,-1,2,1/2 check both signs and the exact criterion; the bundle inverse works also when h is constant or has multiple preimages. The metric and units are explicit mathematical conventions, not observations. No public-interface change or consumer propagation is triggered by this proof correction. Risk review complete. Closed ledger rows: `pnf129-r2-b24-holonomy-title`, `pnf129-r2-b24-gauge-map-inverse`. Next: current definition.

## Level 2: Maxwell current definition

Reviewed complete `def-emg-fx-maxwell-presymplectic-current`, all eight direct suppliers, and the current draft linearized-electrovac Definition and full Hodge-variation proof. At h=0 only star f remains; closure is separately imposed by the operator equation. The normalized potential, geometric electrovac field and coupled metric sector are explicitly distinguished. Positive induced metric plus supplied orientation makes the volume nonvanishing and hence the coefficient function unique and smooth. Absolute L1 integrability supplies a finite signed value and exhaustion independence. Units cancel to a dimensionless normalized integral and scale by kappa0 squared for physical potential variations. Empty/zero cases cause no difficulty. No defect found; risk review complete; no decision owed for this untouched carrier.

Source sections read from retained PDFs: Harlow–Wu §3.3 (3.18)–(3.25), PDF pp. 27–28; Iyer–Wald (44)–(47), PDF pp. 9–10; Compère–Fiorucci §§1.3.1–1.3.3, PDF pp. 14–22. The two contracted current orderings differ; this definition states its own sign explicitly. No boundary conditions or falloff theorem are silently imported. The density-integration theorem's full local proof was read for its L1 and chart-independence clauses, under the explicitly inherited countable-choice assumption. This is scoped use review, not a new supplier audit.

Next: boundary lemma and final bookkeeping/checks.

## Level 3: current boundary identity

Reviewed `lem-emg-fx-symplectic-current-boundary` in full and all five direct suppliers, including complete Stokes and monotone-convergence proofs. Graded differentiation has the stated signs; the two-form pairing is symmetric, so closure follows from the two imposed equations. The exact gauge shift is d(chi star d beta), and d squared chi=0 preserves admissibility. Finite-chain Stokes gives the boundary term and includes zero chains/cycles. Both pairings being absolutely integrable ensures their difference coefficient is L1. Applying monotone convergence separately to its nonnegative parts proves exhaustion convergence without subtracting infinities. Smooth-chain representatives of compact sets are an explicit additional hypothesis; no universal triangulation result or falloff is claimed. On Sigma the ambient forms in integrals mean their embedding pullbacks. The limit and both degeneracy equivalences follow exactly from the same identity. No defect found; risk review complete; no decision owed for this untouched carrier.

All five mathematical carriers preserve the distinction between model mathematics and empirical observations. There are no reported data or statistical inference claims here. The sole diagram was reviewed at level 0; no missing diagram is required by the remaining arguments. No defective published supplier was found in the uses reviewed; no published-supplier ledger entry or lock is needed. Supplier use review does not certify transitive closure or publication status.

## Final disposition and local validation

Both routed obligations are complete: finite pairing `accepted_repair`; circle example `amended_repair`, each with repair confidence 1. Exactly two decisions are recorded in the task-named decisions JSON. Three confirmed defects have separate closed (`fixed`) ledger rows owned at `3a-adjudicate` and referenced by those decisions. There are no reader/refuter findings, outside consumer repairs, proposed withdrawals or unresolved escalations.

The owning manifest now mirrors the finite pairing's expanded Statement (using its existing escaped-mathematics convention) and the corrected circle title. The only item edited during this adjudication is the circle example's Verification 2.1. The finite pairing's reader repair is retained unchanged. The example's statement, prerequisites, provenance classification and page inventory are preserved. All five risk reviews now record this Alpha's independent current-content checks, rather than relying on author self-review.

Maintained the three batch-owned cross-batch rows for the current definition's linearized suppliers and the A-page prerequisite, retaining the exact actual-use limitations; refreshed the derived frontier ledger. The finite-pairing consumer search found no logical/reference consumers beyond its A-page placement. Both assigned pages are frontmatter-only, retain the same inventories and prerequisites, and need no edit. No evidence is promoted to a new judge or publication stamp.

Actual local checks (all exit 0):

- Initial `risk-report.mjs` on the owning batch contract: five HIGH/CRITICAL items routed; after completed reviews, rerun with `--require-reviewed`: zero errors, five items.
- `proof-contract.mjs` on the owning batch contract with `--strict`: 5/5 checked, zero errors/warnings.
- `reflow.mts` on the edited circle example: unchanged.
- `precheck.mts` on both touched item paths: 2 checked, 0 failing.
- `rendercheck.mjs` on both touched paths: both parse successfully with the real YAML and KaTeX parsers.
- Final `proof-layout.mjs` batched both touched paths after the last item edit and reflow: 2 items, 6 steps, 0 defects.
- Defect-ledger append: three rows accepted. Frontier-dependency ledger refresh: refreshed and deduplicated.

No judge, decision stamping, engine gate battery, publication or stage transition was initiated. The engine retains those duties. These checks validate the stated local scope, not the entire library or supplier closures.

Final record consistency check: the decisions JSON contains exactly the two frozen touched obligations; every referenced ledger row is fixed at 3a-adjudicate. The generated defect-ledger view was refreshed. Final circle raw SHA256: `bd5c91a0dddda8b1e62da1c3d1182d3be8ca7735f45841eabd6e82b019260aba`; all other batch item bytes remain identical to the frozen post-reader snapshot.
