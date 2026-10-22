# Literature resolution of the exceptional endpoint

This is the requested literature/plan note after the user pivot. It makes no
new repair to the frozen candidate and grants no original or annular closure.

## Exact primary and actual reading

J. C. Cantrell and C. H. Edwards, Jr., **Almost locally polyhedral curves in
Euclidean n-space**, *Transactions of the AMS* 107(3) (1963), 451–457,
DOI `10.1090/S0002-9947-1963-0149453-9`.

The durable seven-page primary is
`annular-primary/cantrell-edwards1963-curves.pdf`, with matching full text.
All pages 451–457 were read in that text. The actual PDF images of 451–453
were additionally inspected, including the complete annular matching
formula on 453. Metadata has been checked against the title/page content
and Crossref; this is the actual paper, not an abstract or a substitute.

## Does it resolve the exceptional endpoint?

**Yes, its Lemma 2 is the exact classical isolated-point taming result needed
in dimension five, after the punctured curve is actually locally polyhedral.**
It is stated on 451 and proved completely across 452–453. Its input is a
simple closed curve C in Euclidean n-space, n>3, and an isolated point p
of the set at which C fails to be locally polyhedral. For every ε>0 it gives
an ambient homeomorphism h, identity off S(p,ε), locally semilinear except
possibly at p, making h(C) locally polyhedral at h(p). The proof fixes p.

This is a local result with support control. It does not require the
transfinite/countable-bad-set theorem on 455–457. That stronger theorem is
unnecessary for one exceptional endpoint and need not enter the dependency
or choice scope.

“Locally flat off p” is not its literal hypothesis. The finite compact-arc
operation already adopted by root, followed by an actual shrinking-support
assembly, must first make the punctured curve locally polyhedral in the
chosen Euclidean chart. The frozen reconstruction's first section is
intended to do this; the one-overlap/support bookkeeping identified in the
first review should be stated at its actual declared contract. It is not
legitimate simply to rename local flatness as local polyhedrality.

## Actual source mechanism, including whole charts and inverse continuity

1. Choose two fixed points on C outside the small exceptional neighborhood.
   Lemma 1 and inverse-parameter continuity choose shrinking coordinate cubes
   N_i about p. All non-distinguished excursions outside N_(2i) are inside
   N_(2i−1). The remote component is deliberately retained.
2. The finite disk/simplicial operations on 452 produce f_i supported in
   `int(N_(2i−1)−N_(2i+1))`, fixing both bounding cubes and the other curve
   components. They leave exactly the two first-entering points a_i,b_i on
   ∂N_(2i). These support annuli have disjoint interiors for distinct i.
   Their piecewise union f is therefore an actual homeomorphism, with both
   f and its inverse continuous at p because source and target odd-cube
   annuli shrink there. The target intermediate cube need not be fixed
   pointwise during its excursion cleanup.
3. Fix the two reference rays a_1p,b_1p. On each ∂N_(2i) choose a **whole
   ambient semilinear motion** φ_i, supported in its surrounding odd annulus,
   preserving that cube boundary setwise and sending a_i,b_i to the two ray
   intersections x_i,y_i. One may take φ_1=id. This is more than a pair of
   endpoint assignments.
4. In the actual standard even annulus `N_(2i)−int N_(2i+2)`, the two finite
   disk moves ψ_i straighten the marked subarcs to the reference ray
   segments, fixing its whole boundary. The actual annulus map is
   `ψ_i φ_(i+1) φ_i`, with rightmost map applied first.
5. On the shared entire boundary ∂N_(2i+2), both adjacent formulas restrict
   to φ_(i+1). This is the source's explicit chart-matching proof. Each
   map preserves its source/target even annulus setwise. Thus their pasted
   g, and g^−1, are continuous at p by the diameters of those annuli. Outside
   N_2 use identity. The composition h=gf fixes the remote curve and sends
   the two branches near p to the fixed straight rays.

Consequently the source supplies the exact global-annulus matching logic
missing from the frozen reconstruction's last sentences. There is no need
to invent a new arbitrary annulus theorem for these **coordinate-cube**
annuli: their product parameters are explicitly the standard radial ones.

## Finite PL imports and what is not self-contained

The proof of Lemma 2 is not a proof from no prerequisites. Printed452 cites:

- Gugenheim, *Piecewise linear isotopy and embedding of elements and spheres
  (I)*, Proc. London Math. Soc. (3) 3 (1953), 29–53, specifically p.32, for
  the polyhedral circle bounding an appropriate polyhedral two-cell in
  Euclidean n-space, n>3.
- Zeeman, *Unknotting spheres*, Annals of Mathematics (2) 72 (1960), 350–361,
  specifically Lemma 3, for the ambient space homeomorphism realizing the
  simplicial arc moves across that finite disk.

These two primary proofs were **not read in this task**. A self-contained
library reconstruction must either import them at independently justified
exact Statements or read and supply those finite PL operations. The current
new four-dimensional circle-exchange reconstruction is one possible route,
but it is not necessary to treat that route as the only literature solution.

The disk-exchange on 452 chooses the new cap on the opposite side from the
removed innermost disk and performs a semilinear seam deformation. It does
not say to replace every innermost disk on a permanently selected outside
side, which is the defect in the frozen new draft. In dimension five the
strict ambient inequalities for two-dimensional avoidance are available;
one must still carry the actual side/collar and finite support data. No
four-dimensional Whitney theorem is a legitimate substitute for the cited
finite PL arc move.

For a Countable Choice refinement, isolate Lemma 2 rather than the later
transfinite theorem. The construction uses a countable cubical sequence and
finite PL choices at each level. Predetermined shrinking moduli/least-index
choices and independently supported finite annular data are the appropriate
ledger to verify. The source's classical prose alone does not automatically
certify a formal choice-strength reduction of any imported supplier.

## Exact endpoint and ball reduction

For **local endpoint flatness**, take an actual Euclidean chart around p in
the ambient five-manifold. A sufficiently short terminal arc lies in it.
After punctured polyhedralization, add a ray avoiding that arc and a finite
polygonal connector, making a simple closed curve C whose only possible
nonpolyhedral point in that neighborhood is p. Choose ε small enough to
protect the connector and all other prescribed germs. Lemma 2 makes C, and
therefore the original endpoint arc, locally polyhedral at p. This local
application needs no global closed five-ball or arbitrary global annulus.

For the draft's **global boundary-attached arc standardization**, additional
input remains the actual parametrized TOP five-ball K and the actual straight
boundary-normal collar at q. If the Lemma 2 support lies in intK it restricts
to a homeomorphism of K and preserves that collar. After the arc is PL
everywhere, the final finite PL straightening is the ordinary finite
boundary-relative arc operation in that actual ball. Its product collars
must be retained; an arbitrary boundary parametrization does not supply
them automatically.

This argument does **not** prove that a region bounded by a sphere with an
exceptional point is already a ball. It does not produce the boundary-normal
germ required by that global relative statement, identify a general pair
of boundary spheres as a product annulus, or identify the meridional cap's
quotient with a standard ball. Those are logically separate inputs. In
particular the almost-sphere/cap construction cannot assume a global ball
or annulus that its own desired conclusion is meant to establish.

## Bounded next plan, before any patching

Use the adopted finite arc contract for the punctured conversion, import or
prove the two exact finite PL operations named above, and instantiate
Cantrell–Edwards **Lemma 2 with its displayed f/g chart matching**. That
resolves the exceptional endpoint at its real local scope. Separately record
which actual K/collar/meridional-cap hypotheses are already supplied, and
which are still missing, before resuming detailed cap authoring. No accepted
union/frontier proof needs reopening and no isolated-point theorem should be
inferred merely from the abstract of this paper.
