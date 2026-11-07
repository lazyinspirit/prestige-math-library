---
id: lem-function-field-model-local-metric-variation-in-all-dimensions-in-zf
kind: lemma
title: Local metric variation of function-field model intersections in all dimensions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - lem-function-field-model-intersection-sums-in-all-dimensions-in-zf
  - lem-function-field-mixed-model-measures-and-refinement-invariance-in-zf
  - lem-function-field-model-point-measures-and-height-normalization-in-zf
  - lem-finite-type-normal-domain-codimension-one-test-in-zf
justified_by: []
proof_strategy: direct
axiom_use: Work in ZF; each comparison uses finite normal refinements, finite vertical Cartier supports and finite atomic integrals.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields
      url: https://arxiv.org/pdf/1810.06342v2
      locator: Sections 2.1–2.4 local metric variation convention; all-dimensional model proof supplied here, not imported.
---

## Statement

Work in ZF with $k$ algebraically closed, $K=k(B)$ for a smooth projective integral curve, and $Y/K$ integral projective of dimension $r$. Fix generic line bundles $L_0,\ldots,L_r$ and admissible rational sections for their local model-intersection recursion. For two model metrics on one fixed $L_i$, write
$$\phi_{i,v}=-\log\left(\|\cdot\|_{\bar L_i,v}/\|\cdot\|_{\bar L'_i,v}\right).$$
This quotient potential is bounded at each place and zero at all but finitely many places. For arbitrary signed model tuples and every $i\in\{0,\ldots,r\}$ there is the exact formula
$$\lambda_v(\bar L_0,\ldots,\bar L_i,\ldots,\bar L_r)-\lambda_v(\bar L_0,\ldots,\bar L'_i,\ldots,\bar L_r)=\int\phi_{i,v}\,d\mu_{\bar L_0,\ldots,\widehat{\bar L_i},\ldots,\bar L_r;v}.$$
The omitted-index mixed measure is the actual signed finite model measure. In particular the absolute difference is at most its total variation times $\|\phi_{i,v}\|_\infty$. Replacing several metrics gives the sum of these bounds over the finitely many intermediate tuples.

For metrics induced directly by invertible sheaves extending the fixed generic line bundles, all the displayed local terms are integers. Therefore any such finite telescoping bound strictly below one forces equality of the two local terms at that place. This integrality consequence is not asserted for norms divided by arbitrary tensor exponents. No positivity hypothesis on the model bundles, uniform total-variation bound across varying models, or existence of a continuous-limit pairing is included as an unproved premise.

## Facts & Assumptions

**Given:** The function-field scheme, fixed generic bundles, admissible sections and actual model metrics in the Statement, with their specified generic identifications.

[F1] All-dimensional signed model local terms exist by finite recursion, have finite place support, and sum to the symmetric tensor-multilinear global model Euler intersection. Common normal refinements preserve the model pairings and norms. [[lem-function-field-model-intersection-sums-in-all-dimensions-in-zf]]

[F2] All-dimensional mixed model measures are finite signed atomic Radon measures, symmetric, tensor multilinear and dependent only on the local metrics. For a vertical Cartier divisor $D=\sum a_VV$, its potential at a component point is $a_V/b_V$, and its integral is the corresponding finite mixed degree pairing. [[lem-function-field-mixed-model-measures-and-refinement-invariance-in-zf]]

[F3] For a directly induced point model norm, $e_{w/v}(-\log\|s\|_w)$ is an integer section order, and the unnormalized point term is their finite sum. [[lem-function-field-model-point-measures-and-height-normalization-in-zf]]

[F4] On normal finite-type field charts and their localizations, nonnegative Cartier orders imply effectivity. [[lem-finite-type-normal-domain-codimension-one-test-in-zf]]

## Proof

1.1 Pass to one common normal model of the normalized generic $Y$ by [F1]. The quotient of the two model bundles on the same $L_i$ has canonical generic section $1$, with a vertical Cartier divisor $D$. Its finite support lies over finitely many places. Its part $D_v$ at a single fibre is Cartier: retain its equations on the complement of the other supporting fibres and glue with the zero divisor on the complement of this fibre; on the intersection the canonical section is a unit. The quotient metrics for $D_v$ agree with those for $D$ at $v$, and are trivial at the other places. If $F_v$ is the whole Cartier fibre, then $\phi_{F_v}=1$. A finite integer $N$ makes every vertical order of $NF_v+D_v$ and $NF_v-D_v$ nonnegative, since every fibre multiplicity $b_V$ is positive. Their horizontal orders are zero. By [F4] both divisors are effective. At any analytic point their local equations belong to the model valuation ring at its centre, hence have absolute value at most one. Their potentials are nonnegative, so $|\phi_{D_v}|\le N$. The model centres and norms here are the finite projective-coordinate constructions of [F2]. This proves the asserted boundedness and finite place support without analytic compactness. [F1, F2, F4, given, construct, algebra]

2.1 Compare the primed tuple, whose $i$th metric is $\mathcal L'_i$, with the hybrid tuple whose $i$th model bundle is $\mathcal L'_i\otimes O(D_v)$ and whose other entries are unchanged. At $v$ this has the original metric on $L_i$, and at every other place it has the primed metric. The fixed generic sections stay the same and stay admissible, because only their metrics changed. Local terms at any place $w$ depend only on their metrics at $w$: this follows directly by induction in the recursion [F1], starting with the point norms [F3] and using local metric independence of the measures [F2]. Therefore the hybrid global sum minus the primed global sum is exactly the desired local difference at $v$. Global tensor multilinearity [F1] identifies it with the global model pairing having $O(D_v)$ in position $i$ and all the other original bundles in their unchanged positions. [F1, F2, F3, step 1.1, algebra]

3.1 Global symmetry [F1] puts that vertical bundle first. Choose its canonical generic section $1$; it is nowhere zero on the generic scheme, so its generic divisor-cycle term is empty. The local recursion of [F1] is then precisely $\int\phi_{D_v}\,d\mu$ at $v$, and zero at every other place, since its model metric there is trivial. All the remaining sections can be chosen admissibly for that reordered pairing, and global section independence in [F1] justifies this choice. Thus the global pairing in step 2.1 equals this one finite integral. Step 1.1 identifies $\phi_{D_v}$ with $\phi_{i,v}$, proving the exact formula for every index $i$, without assuming symmetry of a local recursion as a separate theorem. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Write the finite signed measure in step 3.1 as $\sum_\xi c_\xi\delta_\xi$, combining coincident atoms. Then its integral has absolute value at most $\|\phi_{i,v}\|_\infty\sum_\xi|c_\xi|$. The last sum is its actual finite total variation. Replacing several metrics one at a time and applying the triangle inequality gives the asserted finite telescoping estimate, with the other entries at each intermediate tuple. No assertion of a uniform bound over a sequence of different models is being inferred from mere finiteness of each individual sum. [step 3.1, algebra]

5.1 Prove integrality by induction on $r$ using the original fixed admissible sections. For $r=0$, it is exactly [F3]. At higher $r$, the horizontal divisor-cycle term is a finite integer combination of integral lower-dimensional terms by [F1]. At each divisorial atom of the other term, $-\log\|s_0\|=\operatorname{ord}_V(s_0)/b_V$, while its measure coefficient is $b_V$ times an integer mixed Euler intersection by [F2]. Multiplication cancels $b_V$ and leaves an integer. The entire atomic sum and hence the local term is an integer. A difference of two such local terms has absolute value either zero or at least one, so any strict bound below one in step 4.1 makes it zero. This uses directly induced model norms; division by an auxiliary tensor exponent would remove the integrality argument and is not silently included. The zero-dimensional, zero-measure and empty-cycle cases all satisfy these same finite calculations. [F1, F2, F3, step 4.1, induction, algebra] ∎
