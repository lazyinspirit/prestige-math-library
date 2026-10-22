# Relative controlled five-dimensional h-cobordism: fresh source record

Date: 2026-10-20. This record is mathematical work in progress, not supplier acceptance, native workflow coverage, or permission to attempt gates. It neither edits nor rechecks accepted supplier proofs.

## Authoritative text actually read

Freedman–Quinn, *Topology of 4-manifolds*, shared scanned full text `../renewed-annular-end/sources/freedman-quinn.pdf`. Scanned PDF page number is printed page plus 6 for the relevant body. Fresh sequential OCR outputs and page renders are retained in `sources/`; OCR is an aid; the actual 7.2C statement on PDF116 and the neighborhood definition on PDF115 were visually checked. Superscripts in the scan are ε and 2ε, which OCR incorrectly reads as asterisks. Read printed 101–111 (PDF 107–117), printed 89–91 (PDF 95–97), and bibliography printed 254–255 (PDF 260–261). No accepted local disk-embedding supplier proof was opened.

## Exact 7.2 setup (printed 108–110)

Control space X is metric. A positive continuous function δ:X→(0,∞) bounds the radii of the tracks of both deformation retractions of a five-dimensional cobordism W to its incoming/outgoing faces. The map W→X must be proper. A controlled product has small tracks measured in both directions. This two-sided condition is essential for extension of the inverse at a compactified end.

A simplicial neighborhood deformation retract p:E→X specifies local fundamental groups. The δ-1-connectedness hypothesis on W→E is a relative lifting property for maps of relative two-complexes: an extension K→W of the given L→W is required whose E-image is δ-close to the initial K→E. A statement about the abstract fundamental group alone does not establish this controlled property.

For V⊂U⊂X open, an existing product over an ε-enlargement V^ε may be restricted to V and extended over U. The result can change the given structure only over U^{2ε} minus V. A product over U means an open incoming set D⊂M0 containing r^{-1}(U)∩M0, with an open embedding D×I→W, identity on D×{0}, whose image contains r^{-1}(U). It is not the unsupported assertion that r^{-1}(U) itself is a product cobordism.

Theorem 7.2C additionally assumes: the immersion lemma is already valid in a category M; an M-handlebody structure relative to the incoming face of diameter <δ has been supplied; this structure has no handles over V^{2ε}; the cobordism and connectivity hypotheses hold over U^{2ε}. If the relative controlled torsion in locally finite homology H_1^{lf}(U^ε−V^ε;S(p)) vanishes, the theorem produces a topological handlebody of diameter <ε with no handles over U, agreeing with the input outside U^{2ε}−V. It also localizes its failure to be an M-isomorphism in small neighborhoods of specified complexes. That latter refinement is not required merely to obtain a TOP normal neighborhood.

## What the source proof actually does

Printed 110 explicitly calls the proof a sketch. It has three mathematically different parts:

1. Controlled handle algebra changes the small M-handlebody to one with only indices 2 and 3 over U, and then changes the based intersection matrix to the identity when controlled torsion vanishes. This invokes Quinn, *Ends of maps I*, §6.3, and *Ends of maps II*, §6.2 and §3. This is a controlled algebra theorem, not the ordinary equality Wh(π)=0.
2. In the intermediate four-manifold, the attaching 2-spheres A_i of the 3-handles and belt 2-spheres B_i of the 2-handles have intersection matrix the identity. The modifications of 7.1D give small transverse spheres and small framed immersed Whitney disks for extra A∩B intersections. Controlled embedding theorem 5.4 gives small disjoint embedded Whitney disks. This uses controlled fundamental groups and controlled nullhomotopies.
3. Push the attaching spheres across these disks, then geometrically cancel the 2/3-handle pairs. With control chosen in advance this has small product tracks and retains the product on V. The defect-of-smoothness refinement is obtained by the regular-neighborhood analysis in 7.1D.

Printed 103 explicitly prevents a circular reading: the DIFF/PL immersion lemma and handlebodies are independently available; the smooth/PL controlled theorem is used in Chapter 9 to prove the corresponding TOP facts. Starting this normal-bundle application by assuming TOP immersion and TOP small handlebodies would reverse that dependency.

## Exact unfilled local proof obligations

As of this record, neither of the following has been supplied locally by this work:

* controlled handle algebra with relative support, including locally finite control and matrix reduction in the 0/Z local-group case;
* the controlled disk construction 5.4, whose printed proof uses controlled separation 2.10, group reduction 2.9, controlled tower construction 3.6, and the finite controlled grope-building procedure.

The accepted ordinary good-group disk-embedding theorem may be used only at its retained interface. A global disk embedding does not by itself promise a disk whose projection stays in a prescribed small control neighborhood. In particular a sentence asserting that all moves can be made arbitrarily small does not fill either obligation above.

The bibliography identifies Quinn [2] as *Ends of maps I*, Annals of Mathematics 110 (1979), 275–331, and Quinn [3] as *Ends of maps II*, Inventiones Mathematicae 68 (1982), 353–424. Further source acquisition is in progress. This is an established-theorem local-authoring obligation, not a newly identified open mathematical problem.


## Later source acquisition and actual progress

The true full text of Quinn, *Ends of maps I*, was obtained from `https://www.maths.ed.ac.uk/~v1ranick/papers/ends1.pdf`, retained as `sources/quinn-ends-I.pdf` (58 PDF pages including the JSTOR cover). Its first article page, printed275/PDF2, was visually checked. Fresh sequential OCR/render outputs cover printed308–314 (PDF35–41) and printed321–331 (PDF48–58), plus introductory pages. Sections6.1–6.3 and8.1–8.7 have now been read, and the key completion/cancellation matrices on printed324 and328 were visually checked.

The source now exposes the controlled algebra construction rather than merely naming it: finite partial inverses are completed over punctured tori; deck-periodic matrices are factored after identity stabilization; bounded but initially uncontrolled factors are modified outside a large ball, compressed radially, and truncated; disc splitting and a backwards subdivision/control induction give the geometric-module theorem. The local ring hypothesis for the general theorem is Wh(π×Z^n)=0 for every n. For our three-dimensional control manifold, the manifold proof uses only torus dimensions at most3, hence ranks at most4 when π=Z. A separate agent owns that ring-theoretic supplier.

The local algebra derivations completed here are in `completed-controlled-algebra-steps.md`. The geometric punctured-torus immersion used by the source is not proved in those derivations: it is a further explicit ingredient, and no retained local acceptance of it has yet been identified. A full controlled algebra proof is therefore still not claimed. A separate agent now owns the independent controlled disk construction5.4; this file's earlier list of unfilled obligations records the actual earlier state and is preserved as history.
