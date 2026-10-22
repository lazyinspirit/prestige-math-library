# Batch 42 source reading record

Run `physics-non-fluid-129-2026-10-21-r2`; batch 42, assigned pair
`gr-fx14-holonomy-and-discrete-geometric-interface` and its examples page.
The raw full texts and extracted relevant text are retained in this directory.
The coverage JSON records the source locators, each harvested heading/result,
its disposition and item support. Fetch stamps are added by the required
`source-fetch-check --stamp` command after the coverage record is written.

## Read sources and harvested results

### David Tong, *General Relativity*, Cambridge Part III lecture notes

- Full source URL: <https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html>
- Local copy: `raw/tong-gr-s3.html`; extracted text:
  `text/tong-gr-s3.txt`; local SHA-256
  `33723a4bf8ef4fcc6c55000213f942eeb3f43c210eba3cb671362219e4139f80`.
- Read the opening of §3.3 through equations (3.117)–(3.119), including the
  component transport ODE and its initial-value uniqueness statement; read
  §3.3.3 equations (3.124)–(3.127) and its curvature/holonomy conclusion; and
  read the relevant §3.4.2 subsections “Vielbeins,” “The Connection One-Form,”
  and “The Curvature Two-Form.”
- Harvest: the §3.3 transport equation supports the ODE interface in
  `prop-gr-fx-connection-path-transport-exists`; §3.3.3 supports the curvature
  interpretation in `prop-gr-fx-small-loop-curvature`; §3.4.2’s vielbein and
  connection-form discussion is inline support for
  `def-gr-fx-connection-path-transport` and
  `prop-gr-fx-path-functor-and-gauge`; its curvature-form result supports the
  local curvature convention used in `prop-gr-fx-small-loop-curvature`.
  Torsion and geodesic results in the surrounding chapter are out of scope for
  this pair and are not imported as claims.

### S. M. Carroll, *Lecture Notes on General Relativity*, Chapter 3

- Full source URL: <https://arxiv.org/pdf/gr-qc/9712019>
- Local complete PDF: `raw/carroll-gr-1997.pdf`; local SHA-256
  `d4cbfeed3a18370cb7e1a256da6fa7de722982ad7f6a146b4fc0fe14a6bebf6c`.
  This byte-identical full PDF was already retrieved and inspected in batch 41;
  its hash was checked before copying it into this batch's source directory.
  Relevant extracted pages are in `text/carroll-ch3-pdf95-102.txt`.
- Read Chapter 3, tetrads and non-coordinate bases, printed pp. 88–95
  (PDF pp. 95–102), including equations (3.114)–(3.144): orthonormal coframes,
  the local Lorentz change, the connection transformation law, the curvature
  two-form and the metric-compatibility condition.
- Harvest: the tetrad/coframe convention is recorded as inline context for
  `def-gr-fx-connection-path-transport`; the local Lorentz law supports
  `prop-gr-fx-path-functor-and-gauge`; the matrix curvature equation supports
  `prop-gr-fx-small-loop-curvature`. The torsion-free structure equation and
  Bianchi discussion are out of scope; no torsion or Bianchi assertion is added
  to this pair.

### Urs Schreiber and Konrad Waldorf, *Parallel Transport and Functors*,
arXiv:0705.0452

- Full source URL: <https://arxiv.org/pdf/0705.0452>
- Local complete PDF: `raw/schreiber-waldorf-parallel-transport-functors-0705.0452.pdf`;
  local SHA-256 `985c1325a9b9e3023211af9ef83d6fce06c32d21abe28651b8bb6b79eea7ed90`.
  Extracted full text is in `text/schreiber-waldorf-parallel-transport-functors.txt`.
- Read §2.1, Definitions 2.1–2.2, Lemma 2.3 and Definition 2.4 (PDF pp. 6–7):
  paths, thin homotopy, the quotient, groupoid laws and the path groupoid. Also
  read Appendix B.3, proof of Proposition 4.3 (PDF pp. 61–63), including the
  curvature variation formula and its thin-homotopy consequence.
- Harvest: Definitions 2.1–2.2 support `def-gr-fx-thin-paths`; Lemma 2.3
  supports `prop-gr-fx-thin-path-quotient-groupoid`; Definition 2.4 supports
  `def-gr-fx-thin-path-groupoid`; Appendix B.3 supports
  `prop-gr-fx-thin-transport-invariance` as a curvature-variation treatment.
  The local matrix ODE calculation is supplied in that item; its finite-cell
  closure step also consumes the exact current-ready finite-CW presentation
  theorem from batch 78, recorded as an additional cross-batch dependency.
  The paper uses smooth paths with
  sitting instants and globally smooth thin homotopies. The local items instead
  state a piecewise-smooth path convention and finite curvilinear-triangle
  subdivisions. This is an explicit convention adaptation, not a claim that
  Schreiber–Waldorf proves the local definitions verbatim; all local quotient
  and transport arguments are supplied in full.

### John C. Baez, *Spin Network States in Gauge Theory*, arXiv:gr-qc/9411007

- Full source URL: <https://arxiv.org/pdf/gr-qc/9411007>
- Local complete PDF: `raw/baez-spin-network-states-9411007.pdf`; local SHA-256
  `78b5113fe30d5d11660c8456f815a980a4d7c910d813c77b9ae66b212fafe063`.
  Extracted text is in `text/baez-spin-network-states.txt`.
- Read §2, “Gauge Theory on a Graph,” including its finite directed graph,
  edge variables, vertex gauge action, Lemma 2 on vertex representation
  factors, and Lemma 3 on the quotient Hilbert-space decomposition.
- Harvest: the graph data and vertex action support
  `def-gr-fx-discrete-holonomy-model`, `prop-gr-fx-discrete-wilson-trace`,
  and `ex-gr-fx14-2`; its invariant tensor discussion supports
  `prop-gr-fx-vertex-haar-projection` and `ex-gr-fx14-3`. Baez writes the
  gauge action on functions and consequently uses outgoing representation
  factors and incoming dual factors in its coefficient decomposition. The
  assigned design uses incoming $V_e$ and outgoing $V_e^*$ for direct matrix
  coefficients under $g_e\mapsto h_{t(e)}g_eh_{s(e)}^{-1}$. The local items
  retain the design convention and prove their action directly; the two slot
  conventions are not silently identified. Lemma 3's full quotient Hilbert
  decomposition and spin-network basis are out of scope.

### Emmanuel Kowalski, *An Introduction to the Representation Theory of
Groups*, 2025 manuscript

- Official author source URL:
  <https://people.math.ethz.ch/~kowalski/representation-theory-2025.pdf>
- Local full PDF: `raw/kowalski-representation-theory-2025.pdf`; local SHA-256
  `3aaf2c15f9a1b756947b1e11c4ed183a1688f1f57cd937b4cec4be9505c045f9`.
  Extracted text is in `text/kowalski-representation-theory-2025.txt`.
- Read §2.5 “Matrix representations,” §3.4 “Unitary representations,”
  Theorem 5.2.1 and its compact-group normalization/invariance proof, and
  Theorem 5.2.11 and its averaging-inner-product proof.
- Harvest: §§2.5 and 3.4 are inline support for the explicitly defined finite
  unitary representation in `def-gr-fx-discrete-holonomy-model` and both SU(2)
  examples; Theorem 5.2.1 supports the normalized compact Haar context of
  `prop-gr-fx-vertex-haar-projection`. The unitarization result in Theorem
  5.2.11 is recorded out of scope: the assigned graph statement takes unitary
  representations as input and does not construct inner products for arbitrary
  representations. The exact averaging hypotheses and projection conclusion
  are taken from the inspected local imported Haar definition and theorem, whose
  full-AC hypothesis is preserved in the local statement.

## Retrieval alternatives and source-resolution history

Several older candidate routes failed before the available alternatives above
were selected: a Rossmann 2004 landing-page route returned a 404 and its direct
PDF route timed out; a Harvard `diffgeom.pdf` candidate returned a 404; and a
Michor `dgbook.pdf` candidate returned a 502. The prior handoff retained these
source names and outcomes but not every full URL or exact timestamp, so no URL
or time is reconstructed here. The attempts stopped once accessible full-text
alternatives were found; no candidate is marked `dropped`, and no source
resolution escalation is asserted. Coverage retains the resolved-alternative
history with the local arguments and exact dependencies supported by the
selected full-text sources. There is no mathematical coverage waiver.
