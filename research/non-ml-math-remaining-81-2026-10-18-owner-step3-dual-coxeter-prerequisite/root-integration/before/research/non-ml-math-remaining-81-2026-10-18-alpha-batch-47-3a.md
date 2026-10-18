# Batch 47 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-47`.

The authoritative scope has no touched items, changed pages, reader findings or refuter findings. No routed decisions are owed. The reader report and findings and the refuter artifact were read; their absence of findings is evidence, not a substitute for the risk reviews below.

## Dependency-ordered risk review

### lem-adjoint-casimir-is-positive-scalar (level 0)

Reviewed both proof steps and F1–F5 against current suppliers. Simplicity makes the adjoint eigenspace all of the nonzero finite-dimensional complex algebra, so the scalar is unique. On the given compact real form Q=-B is positive definite; skew-adjointness gives a sum of squared brackets, strictly positive for nonzero X because the center of a nonabelian simple algebra vanishes. Zero/abelian and degenerate-form cases are excluded. Only finite basis choice is used; compact-form existence is not asserted by this conditional lemma. No reader/refuter findings; no defect found.

Sources: current items named by F1–F5, including the full inverse-tensor/Casimir proof; Haine, *The Segal–Sugawara construction*, §3.2.1(3), pp. 8–9, https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/12-11-19.pdf, checked for normalization.


### def-dual-coxeter-number-for-normalized-form (level 1)

Reviewed Definition, both proof steps and F1–F4. The previously reviewed unique scalar gamma_B defines h-dual=gamma_B/2>0. The B-dual of a Q-orthonormal compact basis is -X_i, giving exactly -sum ad(X_i)^2=2h-dual I. No integrality or classification assertion is required; zero/degenerate/abelian cases are excluded, and finite basis choice adds no AC premise. Haine §3.2.2–3.2.4 agrees with the factor two. No reader/refuter finding or defect.

Dependencies: def-compact-real-form-of-a-complex-semisimple-lie-algebra, def-residue-two-cocycle-on-a-loop-algebra, def-casimir-operator-relative-to-an-invariant-form, lem-adjoint-casimir-is-positive-scalar.

### lem-sugawara-quadratic-modes-well-defined (level 1)

Reviewed Statement, steps 1.1–2.1 and all five cited suppliers. For fixed v a finite maximum of eventual cutoffs kills the r>=0 rightmost x_a(r) tail and the r<0 rightmost x^a(m-r) tail. The r=0 branch is reversed as specified. At each r the fixed-order bilinear map contracts the basis-independent inverse tensor, so finite sums on each v agree. This works without grading/unitarity and at k=0 and critical level because Q has no denominator. Zero vector and empty surviving sum are harmless; only finite choices occur. No reader/refuter finding or defect.

Dependencies: def-positive-energy-affine-module, def-loop-algebra-of-a-simple-lie-algebra, def-casimir-operator-relative-to-an-invariant-form, lem-the-casimir-operator-is-basis-independent-and-intertwining, def-residue-two-cocycle-on-a-loop-algebra.


### def-sugawara-modes (level 2)

Reviewed the entire Definition and its seven actual suppliers. L_m=Q_m/(k+h-dual) uses the proved locally finite basis-independent Q; the compact-basis minus sign follows from dual basis -X_i. All integer m and the r=0 reversed branch are specified. Critical level is explicitly excluded; k=0 remains allowed since h-dual>0. No Hilbert completion, grading or unitarity is silently required. Haine §3.3.4–3.3.6 agrees with normalization and caveat. No reader/refuter finding or defect.

### lem-irreducible-affine-module-has-irreducible-ground-space (level 2)

Reviewed both steps, full unitary-module Definition, degree convention and affine bracket. Nonzero finite-dimensional H_0 has an invariant complex subspace V of minimal positive dimension, hence V is irreducible. Skew-adjointness preserves its orthogonal complement. Finite word reordering terminates by word length and sign inversions, with shorter current/central commutators. Positive modes kill V; any negative factor in an ordered surviving word has strictly positive energy, while zero modes preserve V. Thus the algebraic generated submodule has intersection H_0 exactly V, and current irreducibility makes H_0=V. The argument uses no topological closure, no converse, and covers level zero and one-dimensional ground space. No reader/refuter finding or defect.


### lem-sugawara-commutator-on-all-restricted-modules (level 3)

Independently checked steps 1.1–4.1 and F1–F5. Complex B-orthonormal basis exists by the supplied finite induction, without a module inner product. Product-rule expansions stabilize on v and J_x(n)v; their rightmost tails have indices r,r+n or m-r,m-r+n. Reindexing gives exactly a=(1_{alpha<n}+1_{beta>=0})/2 and b=(1_{alpha<0}+1_{beta>=n})/2. Invariance yields D=-A; f_n has signed finite support and sum n for positive, zero and negative n. Exchanging indices turns A into the commutator with no central correction because B([x,e_a],e_a)=0, and adjoint Casimir gives nh-dual J_x(m+n). Both central contractions give nk J; division by nonzero q and reversal give the stated -n. Coincident indices and zero module are valid. No grading/unitarity premise is imported from Haine; the local calculation proves the stronger eventual-annihilation version. No reader/refuter finding or defect.

### lem-sugawara-mode-one-commutator (level 3)

Checked steps 1.1–2.1 and all eight supplier statements. The compact invariant tensor cancels zero-mode action termwise. For mode one, the coefficient difference is half the two indicators alpha=0,beta=0. Tensor invariance converts the boundary sum to half sum [[X,X_i],X_i]=-h-dual X, with correct compact-basis sign. Two central product-rule terms contribute -k/2 each, also when both original modes equal -1; q=m+1=0 retains both endpoint halves. Tail cutoffs justify expansions on each vector and its current image. Since k>=0 and h-dual>0 the denominator is nonzero, including k=0. Reversing and multiplying -1/(k+h-dual) gives [L_m,X(1)]=-X(m+1). No reader/refuter finding or defect.


### lem-sugawara-modes-act-on-currents (level 4)

Reviewed both proof steps and the exact general commutator supplier just completed at level 3. The modules, noncritical complex level, indices, current x and r<0 normal-order convention match verbatim. Restrictedness supplies everywhere-defined L_m, so application yields an endomorphism identity with no extra limiting assumption. n=0 gives zero, negative n is covered by the signed supplier sum, and level zero and the zero module cause no exception. The unitary subclass adds no stronger claim. No reader/refuter finding or defect.


### thm-sugawara-modes-satisfy-virasoro (level 5)

Reviewed all three proof steps and F1–F5, including the local Virasoro definition and cubic-cocycle argument. Cutoffs on v and L_m v identify the commutator, and F2 makes the expanded rightmost tails have indices r,m+r or n-r,m+n-r. Reindexing s=m+r leaves the coefficient m-n and the finite order correction f_m(s)[a_s,a_{m+n-s}]. Same-basis brackets have no Lie part and central part sk delta_{m+n,0}. Direct summation gives sum s(m-s)f_m(s)=(m^3-m)/6 for positive m and, with s=-t, for negative m; m=0 and m=+/-1 vanish. Dividing by 2q yields exactly c=k dim(g)/(k+h-dual) and the 1/12 factor. Thus the whole restricted class, including zero V and k=0, is covered without grading or Schur arguments; critical level is excluded. Haine §3.3.2–3.3.6 confirms normalization, while the local proof supplies its own finiteness argument. No reader/refuter finding or defect.


### ex-sl2-level-one-sugawara-central-charge (level 6)

Reviewed both verification steps and F1–F4. The h adjoint eigenvalues 2,-2,0 are distinct; polynomial projections preserve any ideal, and bracketing any resulting basis vector yields all of sl2. For the given normalized invariant form the dual basis is (h/2,f,e), and the adjoint Casimir on e is 2e+2e=4e; hence h-dual=2. The brackets also directly verify invariance and nondegeneracy of the displayed normalization. At k=1, c=3/(1+2)=1 and critical k=-2 is excluded. The claim is conditional on a restricted level-one module and asserts no existence/classification or integrability. No reader/refuter finding or defect.

### ex-sl2-level-zero-trivial-sugawara (level 6)

Reviewed both verification steps and the four current suppliers. The all-zero current and central action is a Lie representation, with eventual cutoff on every vector. H=C is an algebraic orthogonal degree-zero module with finite H_0, no proper nonzero complex subspace, and the zero adjoint relation. k=0 is admitted in the selected unitary branch. All quadratic products vanish, h-dual>0 keeps the denominator nonzero, and c=0 gives precisely the zero Virasoro bracket. The claim concerns this one trivial module and does not classify all level-zero modules. No reader/refuter finding or defect.


## Scope, sources, and consumer dispositions

The pre/post snapshot item, contract and manifest records are identical for all 19 items; page records are identical for both pages. A raw SHA-256 comparison confirms all 19 current item carriers and both current pages still match their post-reader source hashes. The scope binds the structured reader-findings JSON (not the prose report); that binding and the refuter JSON binding match. No acceptance/reversion of a reader change is applicable.

The eleven risk reviews are audit enrichment in the existing batch proof contracts only. No item, page, manifest, provenance or verification stamp was edited. No defect-ledger row was created because no defect was confirmed. The decisions array is intentionally empty, with no invented obligations.

All cited local item statements/definitions for the eleven reviewed items were read, with the inverse-tensor/Casimir proof read in full. The Virasoro definition, Witt construction and cubic cocycle proof were also read. The two owned page summaries and the three prerequisite page summaries were checked as context; the compact-form existence theorem's exact AC-qualified Statement was checked for the A-page claim. The two existing cross-batch dependency records remain unchanged as navigation/reading interfaces, not imported Sugawara proof premises. No Statement or Definition changed; no outside consumer propagation or owner supplier repair is needed. The owned frontier-dependency ledger entry preserves all stable IDs and proposed withdrawals.

External convention check: [Peter Haine, *The Segal–Sugawara construction*](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/12-11-19.pdf), §3.2.1–3.2.4 (printed pp. 8–9) and §3.3.1–3.3.6 (printed pp. 9–11), read for Casimir normalization, quadratic formula, central normalization and critical-level caveat. This reference corroborates conventions; independent local finite-cutoff and signed-boundary calculations support the full written restricted-module claims. Bibliographies in upstream items were not audited in full, nor were unrelated prerequisite-page inventories or every ancestral supplier proof.

Published content remained read-only. No defective published item was identified, so no published-consumer ledger edit or lock acquisition was needed. No unresolved mathematical uncertainty, missing historical carrier obligation, escalation or blocker remains in this dispatch.

## Local checks

- Initial `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-47.proof-contracts.json`: exit 0, 19 items routed; eleven HIGH/CRITICAL items identified and reviewed above.
- Raw item/page hash comparisons: all 19 items and two pages match immutable post-reader source hashes; pre/post records agree.
- Final `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-47.proof-contracts.json --require-reviewed`: exit 0, `risk-report: 0 error(s), 19 item(s) routed`; all eleven required reviews complete.

No changed item paths exist, so reflow, precheck and proof-layout are not applicable to this handoff. No judge, stamp, certification, engine gate battery or scheduling transition was initiated. The engine owns subsequent hashing and gates.
