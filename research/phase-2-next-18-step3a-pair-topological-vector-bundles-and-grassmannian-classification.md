# Step 3a scope review — topological vector bundles and Grassmannian classification

- Run: `phase-2-next-18`
- Role: `alpha`
- A page: `topological-vector-bundles-and-grassmannian-classification`
- B page: `topological-vector-bundles-and-grassmannian-classification-examples`
- Decision: **insufficient**

## Evidence reviewed

I read the live 20-item A / 7-item B inventory and contracts in
`research/phase-2-next-18-batch-4.pages.json`, its complete pair-specific source
coverage in `research/phase-2-next-18-batch-4.coverage.json`, the construction
notes, the current empty plan objects in `research/plan-spec.json`, the AT-15
prose design and track-boundary/downstream sections in
`research/plan-algebraic-topology-track.md`, the scope ledger and drift report,
and the Batch-3 / canonical frontier dependency records. There is no current
Step-3a owner decision for this pair.

The present inventory covers the advertised unoriented core well: local
trivializations and cocycles; bundle maps, sections and subbundles; pullbacks
and the standard algebraic operations; metrics, splitting and finite
complements; homotopy invariance; frame/associated bundles; finite and stable
Stiefel and Grassmann spaces; embedding, existence and uniqueness in the
numerable classification theorem; Schubert cells; and clutching with its real
and complex low-dimensional qualifications. The B page gives useful concrete,
degenerate and boundary cases. These suppliers also match the live uses by
same-batch complex K-theory and by the seven item edges from the Thom/Gysin
pair in Batch 3.

I independently checked the cited core arguments in Allen Hatcher,
*Vector Bundles & K-Theory*, Chapter 1 §§1.1–1.2, especially the clutching
argument and real/complex distinction on printed pp. 22–27 and the universal
Grassmannian classification on pp. 27–31
(https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf), and the numerability,
metric/splitting and Gauss-map treatment in Haynes Miller's MIT 18.906 notes,
Lectures 16–21, printed pp. 53–72
(https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf).

## Scope defect

The pair omits the oriented real-bundle branch of Grassmannian
classification. No planned item defines an ordinary orientation of a real
vector bundle, orientation-preserving bundle isomorphisms or the oriented
frame bundle; defines the oriented Grassmannian/universal oriented bundle; or
states the numerable classification
`Vect_n^+(X) ~= [X, Gr_n^+(R^infinity)] = [X, BSO(n)]`. The clutching theorem
also stops short of the corresponding oriented formulation through
`GL_n^+(R) ~= SO(n)`.

This is a material library interface rather than optional extra depth.
AT-18's current `def-r-oriented-vector-bundle-and-orientation-local-system`
introduces a cohomological orientation only after Thom-space machinery; it
does not supply the missing topological orientation, oriented frame bundle or
classifying-space theorem. AT-19 then refers to reduction to `SO(n)` and its B
page proposes the universal oriented two-plane over `BSO(2)`, but no current
page supplies that bridge. Hatcher's same cited §1.2 explicitly develops
oriented bundles and oriented clutching (printed pp. 25–27), then the oriented
Grassmannian classifier after Theorem 1.16 (printed p. 31). The coverage file
neither includes nor gives a reasoned deferral for this source material; it
defers only characteristic classes from later chapters.

## Recommended owner action

Enrich this A page, rather than merge pairs, with the ordinary oriented
real-bundle and orientation-preserving-map conventions, oriented frames / the
`SO(n)` reduction, the oriented Grassmannian and tautological oriented bundle,
and the numerable classification by `BSO(n)`. Extend clutching to the oriented
case or add an equivalent result. Add one B-page calculation such as oriented
real 2-plane bundles over `S^2` being indexed by the winding number, with
orientation reversal sending `m` to `-m`. Update source coverage to include
these passages. The owner must apply the enrichment and record `proceed` for
the resulting scope before Step 3b can continue on this pair.

Characteristic classes, K-theory and smooth tangent/normal-bundle applications
remain correctly assigned to their later AT, DG and DT pages; they are not
additional objections here. I made no item-level proof approval and found no
separate published-item defect requiring a canonical-ledger entry during this
scope review.
