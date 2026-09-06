# FA terminal evidence — item 10

Decision: repaired. Independently inspected the current statement/proof, original
six dependency items and the six published dependencies added below, Perron A/B
page context, batch-7 manifest/coverage/notes, proof contract and risk/boundary
record, reader warning, original Terra rejection, Sol adjudication/repair and
final Terra rejection. The final rejection correctly identifies that the
residue ledger does not evaluate zeta'(0)/zeta(0). The assertion is true, but the
current two-step proof did not establish this constant or its contour limits.

Exact claim/conventions: 1<x<y, cutoff equal to one through x and zero from y,
linear between them, Mellin integral initially Re s>0. Nontrivial zeros carry
multiplicities. Both resulting zero sums converge absolutely without pairing.
The apparent Mellin pole at -1 is removable; its value is -log(y/x)/(y-x).

The independent repair computes zeta(1-s)=-1/s+gamma+O(s) from the published
fractional-part integral and the identity integral_1^N {u}/u^2=log N-H_N+1.
The reciprocal Gamma product gives Gamma(1)=1 and Gamma'(1)=-gamma by a
telescoping logarithmic derivative. In the sine-Gamma functional equation the
two Euler constants cancel, giving zeta(0)=-1/2 and
zeta'(0)=-log(2pi)/2, hence the required negative logarithmic-derivative residue.

The inversion is established directly with the absolutely integrable kernel
z^s/[s(s+1)]; residues give J(z)=max(1-1/z,0). Continuity covers z=1 and thus
both cutoff endpoints. The Dirichlet-series exchange is dominated by
sum (log n)/n^2 times an integrable vertical kernel. Unit-band counts and the
critical strip give a summable O(log j/j^2) majorant for nontrivial zeros;
trivial terms have geometric decay x^(1-2k)/k^2. An explicit finite grid
selects separated heights. For each fixed odd R, horizontal integrals vanish
as O_R,x,y(log^2 T/T^2). Then the line Re s=-R vanishes as
O_x,y(x^(1-R)log(R+2)/R). Taking these limits successively proves the full
stated range without an extra relation between x and y.

Verified sources (complete relevant sections read, not search snippets):

- https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf — Nick Andersen,
  Analytic Number Theory, Lemma 12.1 and complete section 12.2 through
  Proposition 12.2, printed pp. 44–46. Supports the Mellin transform,
  separated-height contour, four residue families and left-plane bound.
  Andersen writes the upper cutoff as x plus a width; our y is the upper
  cutoff itself. The successive limits above independently remove any need
  for the later quantitative restriction on that width.
- https://dlmf.nist.gov/25.6#E1 — NIST DLMF equation 25.6.1 verifies zeta(0)=-1/2.
- https://dlmf.nist.gov/25.6#E11 — NIST DLMF equation 25.6.11 verifies
  zeta'(0)=-log(2pi)/2. Both values are also proved locally in the repair.

Dependency IDs retained: def-von-mangoldt-function,
lem-local-logarithmic-derivative-zeta,
lem-logarithmic-derivative-zeta-left-half-plane,
lem-von-mangoldt-explicit-formula-residues,
cor-zeta-zero-count-unit-interval, thm-trivial-zeros-and-critical-strip.
Added published dependencies: thm-riemann-zeta-continuation-to-the-right-half-plane,
thm-gamma-weierstrass-product,
thm-euler-mascheroni-constant-and-harmonic-asymptotic,
thm-riemann-zeta-functional-equation,
thm-von-mangoldt-logarithmic-derivative-zeta,
thm-residue-theorem-null-homologous-cycle.

Updated only this item's manifest edges and proof-contract derivations,
endpoint/finite-selection evidence and risk review. Preserved the independent
empty-case contract audit. No dependency item bytes changed; no prerequisite
repair licence is needed. Focused precheck and rendercheck pass. Strict batch-7
contracts pass: 43/43, zero warnings/errors. Repository depcheck exits zero:
no cycles or unresolved references; it reports 475 repository warnings.

Queue checkpoint: items 1–9 were independently repaired, checked and recorded
before this review began. Item 10 is now repaired and checked. No mathematical
obligation remains. Next action: record item 10, refreshing any earlier exact
context receipts as required, then verify all ten current receipt hashes.
No judge call or pass stamp was created.

Final checkpoint: recorder accepted item 10. Read-only context-hash audit then
verified all ten latest terminal receipts against current item and context
bytes (10/10). Queue is complete; every disposition is repaired. No further
FA action remains for this dispatch.
