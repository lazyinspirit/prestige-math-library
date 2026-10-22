# Batch 24 source reading — emg-fx09

Run: physics-non-fluid-129-2026-10-21-r2

The source bodies below were retrieved as complete documents and inspected at
the listed ranges. Five raw PDFs are retained in this batch's raw/ directory;
the Iyer–Wald, Harlow–Wu and Compère–Fiorucci byte copies match the already
retrieved full texts in this run's batch-40 source harvest. The Tong PDF matches
the earlier full-text Einstein–Maxwell geometry harvest. Morrison and Meinrenken
were retrieved for this batch. source-fetch-check --stamp freshly verified
all eight page/source records (six A-page sources and the two independent B-page
sources); every local raw hash prefix matches its new fetch stamp. There were no
retrieval failures, recovery retries, source drops, or alternative proofs, so no
source_resolution record is required.

## Connection sectors and the circle example

### David Tong, Gauge Theory, Cambridge Part III lecture notes (2018)

Full 457-page notes. Read §1.1.2, “A Patchwork of Gauge Fields,” printed
pp. 6–8 (PDF pp. 17–19), including the north/south local potentials, their
overlap gauge relation, and the single-valuedness discussion. Checked the
preceding §1.1.1 only to identify its quantum charged-particle phase premise.

Supports prop-emg-fx-affine-connection-sector and
ex-emg-fx-flat-holonomy-circle. The local proposition rederives the relevant
fixed-atlas cancellation and computes its sign from the chosen pushforward
action. The quantum Dirac charge condition is out of scope: this batch makes
no quantum matter-phase, magnetic-monopole, empirical, or charge-quantization
claim. Tong's local gauge-potential relation is used only as a comparison of
patch conventions.

### Scott Morrison, Connections on Principal Fibre Bundles (2000)

Full 18-page paper. Read §§3.1–3.3 on bundle charts and principal actions, §5.1
on horizontal subspaces and connection forms, and §§7.1–7.3 on connection
forms, local representatives, curvature, and the Bianchi identity.

Supports prop-emg-fx-affine-connection-sector and
ex-emg-fx-flat-holonomy-circle. The local items prove the U(1) formulas they
use; source pointers for the general connection-form reconstruction are not
substituted for a local argument. The source's general nonabelian curvature
formula is not applied to the abelian Einstein–Maxwell model.

## Fixed-background Maxwell current and boundary term

### Vivek Iyer and Robert M. Wald, “Some Properties of Noether Charge…” (1994)

Full 31-page paper. Read §3, equations (44)–(47), printed pp. 8–9 (PDF
pp. 9–10), for the symplectic current order, its integral on a Cauchy surface,
and the boundary ambiguity. The following convergence discussion was read as
a scope warning only.

Supports def-emg-fx-maxwell-presymplectic-current and
lem-emg-fx-symplectic-current-boundary. The batch proves its Maxwell
fixed-metric identities directly and assumes no gravitational Noether-charge
formula or asymptotic falloff theorem.

### Daniel Harlow and Jie-qiang Wu, Covariant phase space with boundaries (2020)

Full 61-page paper. Read the complete Maxwell boundary-charge example in §3.3,
equations (3.18)–(3.25), printed pp. 26–27 (PDF pp. 27–28): variation of the
Maxwell Lagrangian, the pre-symplectic form, the gauge direction, and its
boundary electric-charge term.

Supports def-emg-fx-maxwell-presymplectic-current and
lem-emg-fx-symplectic-current-boundary. The local definition fixes the
connection normalization and does not import Harlow–Wu's action prefactor or
Dirichlet boundary conditions. The local lemma retains the boundary flux
instead of declaring every gauge direction degenerate.

### Geoffrey Compère and Adrien Fiorucci, Advanced Lectures on General Relativity

Full 125-page lecture notes. The batch-40 source-reading record in this same
run documents inspection of Lecture 1, §§1.3.1–1.3.3. The copied PDF's raw
SHA-256 is unchanged from that record. Those sections support the general
current and field-space conventions and provide the second full-lecture-notes
treatment of presymplectic current used by the A page.

Convention check: Compère–Fiorucci's contracted current order is opposite to
Iyer–Wald's. The local definition explicitly writes its own antisymmetrized
Maxwell current, so no sign is inferred from a source's name alone. The
gravitational surface-charge identity and Hamiltonian construction are out of
scope.

## Finite coisotropic quotient

### Eckhard Meinrenken, Symplectic Geometry, University of Toronto lecture notes

The complete lecture-note PDF was retrieved. Read §2.4, Proposition 2.20 and
the surrounding definitions on pp. 11–12: the quotient of a subspace by the
kernel of the restricted symplectic form inherits a symplectic form. The
coisotropic assertion is the direct special case F-orthogonal contained in F.
Proposition 2.22, reduction of Lagrangian subspaces, was inspected and marked
out of scope because this batch makes no Lagrangian-subspace reduction claim.

Supports prop-emg-fx-finite-coisotropic-pairing; its complete finite-
dimensional proof is also present in the imported published item
prop-symplectic-reduction-of-a-coisotropic-vector-subspace. No infinite-
dimensional topology or closed-range result is inferred.

## Source coverage and dispositions

The exact source URLs, locators, per-heading dispositions, raw file hashes,
retrieval attempts, and fetch_verified records are in
research/physics-non-fluid-129-2026-10-21-r2-batch-24.coverage.json.
The A page has six independent sources, including Tong and
Compère–Fiorucci's full lecture notes; the B page has the independent Tong and
Morrison connection treatments. Every harvested source heading is marked
included, already-published, or out of scope with its item or reason.

The historical design's positive phase is recorded as the inverse Wilson-loop
convention. With the actual product connection form eta+theta nu and
horizontal-lift definition, principal holonomy is exp(-2 pi i theta); both
phases are trivial exactly for integer theta. The quantum phase argument in
Tong and any physical identification between the connection-normalized
curvature and the geometric Einstein–Maxwell field are not used.
