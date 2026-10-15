# Step 3a reader report — batch 1

Run: hopf-hecke-unfinished-15-2026-10-15  
Reader: reader-1

## Opened inventory

Assigned pages:

- A page: coalgebras-counits-and-the-fundamental-coalgebra-theorem
- B page: coalgebras-counits-and-the-fundamental-coalgebra-theorem-examples

Assigned A-page items:

- def-hh-coalgebra-and-coalgebra-map
- lem-hh-finite-spanning-list-contains-a-basis
- lem-hh-counit-uniqueness-and-finite-sweedler-calculus
- def-hh-subcoalgebras-coideals-and-quotient-coalgebras
- lem-hh-finite-comatrix-coalgebra-exists
- def-hh-group-like-and-primitive-elements
- thm-hh-coalgebra-quotient-and-kernel-descent
- thm-hh-fundamental-theorem-of-coalgebras

Assigned B-page items:

- ex-hh-group-like-elements-in-finite-set-coalgebra
- ex-hh-relative-primitive-elements-in-two-dimensional-coalgebra
- ex-hh-counital-coideal-quotient-of-comatrix-coalgebra
- cex-hh-coideal-with-nonzero-counit-does-not-give-quotient-map

Direct published suppliers opened to verify the assigned items:

- def-hh-scalar-and-tensor-conventions
- lem-hh-tensor-coherence-on-elementary-tensors
- prop-functoriality-of-module-tensor-products
- def-linear-combination-and-span
- def-linear-independence
- def-linear-basis
- def-dimension
- def-field
- thm-induction-principle
- lem-hh-tensor-injections-quotients-and-kernels-over-a-field
- def-axiom-of-choice
- def-quotient-module
- thm-quotient-module-laws
- thm-universal-property-of-free-modules
- lem-hh-coefficient-extension-and-finite-tensor-separation
- thm-unique-coordinates-with-respect-to-an-ordered-basis
- thm-tensor-product-basis-from-bases

I also opened the batch coverage, cross-batch dependency record, notes, and proof contracts as evidence, not as verdicts.

## Mathematical review and evidence

The coalgebra and coalgebra-map equations have matching tensor types, with the associator and unit maps made explicit. The counit-uniqueness contraction is a well-defined tensor map and evaluates to both candidate counits. Sweedler notation is treated as a finite tensor presentation.

The subcoalgebra definition distinguishes the structure-map definition from the AC-dependent image criterion. The coideal definition retains the counit-zero condition and uses tensor-map images where injectivity is unavailable. The finite comatrix coalgebra calculation verifies coassociativity and both counit equations on the basis. The group-like and relative-primitive definitions state their normalizations explicitly.

The quotient/kernel theorem proves the quotient maps are well defined, checks the coalgebra identities, proves the quotient universal property and kernel coideal assertion, and treats empty sums. Its uses of AC are covered by the stated tensor-injection and quotient-kernel supplier. The fundamental coalgebra theorem handles the finite-dimensional ambient case without Choice and proves the arbitrary-dimensional case under AC. Its coefficient regrouping, tensor-separation step, finite coefficient subspace, comatrix map, quotient transport, finite sums, and empty subset case are justified by the listed suppliers and earlier steps. I found no mathematical defect in these proofs.

The B-page computations also check out: the finite-set coalgebra classification includes the empty set; the two-dimensional example computes the group-like and relative-primitive elements; the E2 quotient checks the coideal condition, quotient basis, induced structure maps, and projection; and the counterexample proves the counit obstruction without assuming multiplication on the coalgebra.

Source checks:

- Sheldon Axler, Linear Algebra Done Right, fourth edition, §2B, Theorem 2.30 and proof, printed pp. 40–41 / PDF pp. 53–54, official PDF: https://linear.axler.net/LADR4e.pdf. The source states that every spanning list can be reduced to a basis and gives the deletion procedure. This supports the finite-list basis lemma.
- UCSD Math 207A Hopf Algebras notes, Spring 2020, Proposition 1.21, printed pp. 15–16, and Theorem 1.28 with proof, printed pp. 19–20 / PDF pp. 20–22: https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf. Proposition 1.21 states quotient, kernel, image, and factorization claims but leaves details as an exercise. Theorem 1.28 states that every finite-dimensional subspace lies in a finite-dimensional subcoalgebra; its proof uses an ambient basis. The assigned proofs supply the missing quotient details and state the Choice use.
- Benedikt Stufler, Hopf Algebras lecture notes, §3.1, Definition 3.1, Examples 3.2(1), 3.2(2), 3.2(4), Definitions 3.3–3.4, and Definition 3.19, printed pp. 12–17: https://www.dmg.tuwien.ac.at/stufler/doc/lec/2018hopf.pdf. These passages give the coalgebra equations, finite-set and comatrix examples, Sweedler evaluation through induced multilinear maps, coalgebra-map equations, and coideal/quotient terminology.
- William Chin, A Brief Introduction to Coalgebra Representation Theory, §§2, 2.1, and 2.4, printed pp. 2–5: https://condor.depaul.edu/~wchin/crt.pdf. These passages give subcoalgebra/coideal conditions and group-like/skew-primitive terminology. The assigned definition states the counit-one normalization explicitly.

## Edits and validation

I inserted blank lines between numbered proof steps in these eight in-flight items:

- lem-hh-finite-spanning-list-contains-a-basis
- lem-hh-finite-comatrix-coalgebra-exists
- thm-hh-coalgebra-quotient-and-kernel-descent
- thm-hh-fundamental-theorem-of-coalgebras
- ex-hh-group-like-elements-in-finite-set-coalgebra
- ex-hh-relative-primitive-elements-in-two-dimensional-coalgebra
- ex-hh-counital-coideal-quotient-of-comatrix-coalgebra
- cex-hh-coideal-with-nonzero-counit-does-not-give-quotient-map

These were formatting-only repairs; I did not change mathematical text, citations, or step labels. Reflow reported each item unchanged. Precheck passed for all eight items. The required final proof-layout command covered all eight changed paths: 8 items, 37 steps, 0 defects.

I updated the 17 hash-bound boundary-review item hashes in batch-1 proof-contracts.json to bind those unchanged boundary rows to the formatting-only item bytes. None of the changed items had a verification.judge record to remove.

## Uneditable defects

None found in the direct published suppliers or other dependencies reviewed for this batch. No assigned page or item defect remains.

## Page verdicts

- coalgebras-counits-and-the-fundamental-coalgebra-theorem: summary and item order accurately describe the reviewed results and their stated AC qualifications. No page defect.
- coalgebras-counits-and-the-fundamental-coalgebra-theorem-examples: summary accurately describes the four computations and the counit obstruction. No page defect.

## Blocker

None.

## Coverage limitation

I reviewed all assigned items, pages, and direct dependencies listed by the batch, along with the cited source passages needed to check the arguments. I did not conduct a separate audit of every lower-level transitive prerequisite proof outside that direct supplier set.

