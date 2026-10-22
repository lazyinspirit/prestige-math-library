# Review 3: six original Step4 concerns

Research-only confirmation; no source changes applied. All six concerns are confirmed defects: one deterministic-procedure gap, three required diagram presentation defects, one fixed-diagram domain defect, and one inaccurate supplier attribution. No mathematical claim is narrowed and no new dependency is proposed.

Exact case/capture hashes and unique literal replacement proposals are in `report-3.json`. Captures are the six supplied 2026-10-21T18:02:39Z versions. This is current-capture review, not historical native byte or native execution coverage. Root must revalidate exact current sources/context at the paused, drained 5.1 boundary.

## alg-kauffman-polynomial-from-bmw-braid-closure

confirmed_defect; `keep_true: true`; metadata-only: no.

The code labels label original polygonal segments, not the multiple pieces left when a smoothing deletes a crossing neighborhood. One segment can cross other segments more than once and its fragments can acquire different continuations/components. Retaining its old label and endpoints does not select a unique start piece or direction. The asserted deterministic procedure therefore lacks required instructions; procedure-properties Proof 1.2 explicitly relies on that missing choice. This does not refute the skein value or justify narrowing the algorithm/output.

Finite generic polygonal crossings admit such rational boxes. The retained outside portions connect box ports and original vertices/endpoints. Replacing a box pairing cannot create a component wholly inside one box, so every child component has a unique least-labelled portion. Switching preserves all connectivity and traversal, lowering bad-crossing count by exactly one. Smoothing can change traversal but reduces crossing count; the existing lexicographic termination proof and all three skein terms remain valid. No new prerequisite is required.

Consumer scope: Focused proof wording update proposed; Statement/input/output and all supplier dependencies unchanged. No mathematical consumer repair needed. Identity braid examples and curl calculation do not depend on segment names. Separate diagram repair below. No repair caused by algorithm bookkeeping: property theorem Statement unchanged, so no further interface propagation. Separate original diagram-choice concern below.

## lem-bmw-closure-pairing-independence

confirmed_defect; `keep_true: true`; metadata-only: no.

Confirmed required presentation defect: the promised schematic is raw center/tikzpicture text. Current ItemBody.withDiagrams extracts only fenced tikz/tikzcd in ordinary sections; FactsBlock passes directly to MathMarkdown. MathMarkdown has no raw-TikZ compiler. SCHEMA requires diagram fences outside Facts and proof-like sections. The mathematical claims and proofs do not rely on this picture and remain unchanged.

The blue matching is (1,4),(2,5),(3,6); red matching is (1,2),(3,4),(5,6). Every vertex has one edge of each color; the abstract union is the single alternating cycle 1-4-3-6-5-2-1. Interior drawn line intersections are not matching vertices. This supports precisely the accompanying component-count interpretation, independent of determinant argument.

Consumer scope: Uniform unchanged-predicate argument: no consumer may require a new hypothesis or formula. No consumer proof rereading is claimed for these diagram-only replacements.

## cex-knot-kt-30-boundary-case

confirmed_defect; `keep_true: true`; metadata-only: no.

Confirmed required presentation defect: the promised schematic is raw center/tikzpicture text. Current ItemBody.withDiagrams extracts only fenced tikz/tikzcd in ordinary sections; FactsBlock passes directly to MathMarkdown. MathMarkdown has no raw-TikZ compiler. SCHEMA requires diagram fences outside Facts and proof-like sections. The mathematical claims and proofs do not rely on this picture and remain unchanged.

One circle has one component and no crossings; F1 fixes w=0,c=1,D=L=1. The false formula gives -1. Fencing the same circle changes neither statement nor arithmetic.

Consumer scope: Uniform unchanged-predicate argument: no consumer may require a new hypothesis or formula. No consumer proof rereading is claimed for these diagram-only replacements.

## ex-knot-kt-30-worked-cases

confirmed_defect; `keep_true: true`; metadata-only: no.

Confirmed required presentation defect: the promised schematic is raw center/tikzpicture text. Current ItemBody.withDiagrams extracts only fenced tikz/tikzcd in ordinary sections; FactsBlock passes directly to MathMarkdown. MathMarkdown has no raw-TikZ compiler. SCHEMA requires diagram fences outside Facts and proof-like sections. The mathematical claims and proofs do not rely on this picture and remain unchanged.

The two circles are disjoint (center separation 1.65 exceeds diameter 1.10) and have no crossings. They depict the identity two-braid closure used in Proof 3.1; P=d^2, D=d, tau_2=1 and corrected output -d are unaffected.

Consumer scope: Uniform unchanged-predicate argument: no consumer may require a new hypothesis or formula. No consumer proof rereading is claimed for these diagram-only replacements.

## thm-kauffman-and-dubrovnik-conversion

confirmed_defect; `keep_true: true`; metadata-only: no.

The literal Statement quantifies an oriented link and then assigns it writhe and a regular-isotopy D value. Both depend on a chosen diagram; adding a type-I curl changes w and D although their corrected product is invariant. The exact local conventions and conversion supplier quantify diagrams. The required precision is to quantify that diagram explicitly while retaining braid independence, the full conversion, AC, and every boundary/smoothing case. This is a domain/notation defect, not an incorrect conversion formula.

Entire def-kauffman-regular-isotopy-and-dubrovnik-conventions, lem-kauffman-dubrovnik-writhe-component-conversion and thm-bmw-markov-trace-gives-dubrovnik-invariant read. Definition defines D,L,F for a diagram. Conversion supplier fixes regular diagrams and proves type-I compensation; trace theorem Proof 3.1 explicitly distinguishes the closure diagram from its link type. These exact interfaces prove the revised statement without weakening it.

Consumer scope: No affected mathematical item consumer found. Its own Proof 1.1 uses the represented link, Proof 1.2 uses the fixed diagram, and Proof 2.1 uses curls of that diagram. These remain valid with exactly the proposed domain wording; no proof edit required. Page only lists theorem. Root must recheck current/frozen graph at hold.

## lem-essential-annulus-in-seifert-piece-isotopic-to-vertical

confirmed_defect; `keep_true: true`; metadata-only: no.

F3 has an objectively false attribution: the named Definition defines compressibility/essentiality, Seifert local models, and regular/exceptional fibers, but does not define vertical/horizontal surfaces. The essential-surface supplier explicitly defines both in its Statement, and the source already declares it in deps and F1. Correcting this required supplier attribution preserves the entire proof and all branches; no new dependency or foundation work is needed.

Entire current def-incompressibility-seifert-fibration-and-jsj-system and lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal read. For this original concern, the precise uses are F3/Proof 1.1 and 2.1 terminology; the latter supplier Statement actually supplies the meanings. Its substantial proof was read but not independently re-certified; no assertion that all classification foundations were audited.

Consumer scope: No Statement/Definition delta, hence no changed consumer predicate. Existing deps already name both actual suppliers. No downstream proof rereading claimed or required for this exact attribution repair.

The algorithm proposal pre-subdivides once outside fixed crossing boxes; switches preserve the traversal and each smoothing lowers crossing count. The same reviewer read its three discovered item consumers and proposes the actual Proof 1.2 update in the procedure-properties theorem. The trace output predicate is unchanged, so the worked example and final conversion require no bookkeeping-driven repair.

All six captured source bodies were read in full, with focused actual suppliers and renderer routing as recorded in JSON. No external full-text or new classification-foundation coverage is claimed. Proposed diagrams were checked mathematically but not compiled. No new gates, certification, ledger/admission records, or canonical source/hash writes were made.
