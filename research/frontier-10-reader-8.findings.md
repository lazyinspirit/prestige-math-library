# Frontier-10 independent step-6 reader — batch 8

**Reader role:** independent step-6a adversarial refuter  
**Scope:** 31 draft items for group-actions-and-cayleys-theorem and 16 draft
items for group-actions-and-cayleys-theorem-examples  
**Disposition:** submitted for Alpha adjudication; this reader does not certify
its own repairs

## Outcome

I read all 47 assigned item files in full: title, Statement/Definition/Example,
Facts & Assumptions, every numbered proof step, provenance, dependencies, and
boundary cases. I also opened and read the actual on-disk Statement, Definition,
or Example of every cited dependency before assessing citation strength.

I found **no false Statement, false construction, missing theorem hypothesis,
title stronger than its content, or fatal proof defect**. I found 22 items with
concrete nonfatal defects: 7 proof-licensing defects and 19 inaccurate external
source locators, with 4 items in both groups. Every one is a competent-reader
sub-30-second gap or bibliographic correction under Alpha's rule. I repaired all
of them and reconciled the 7 affected proof contracts. Alpha must independently
confirm or reject those classifications and repairs.

All 47 assigned items remain status: draft. None has
provenance.statement: ai-generated; the nine diagnostic B items instead have
AI-generated proof/verification components. I nevertheless attempted to refute
each concrete witness. The two published page files were not edited, and no
status was flipped.

## Concrete findings and repairs

### F01 — thm-orbit-stabilizer — nonfatal, fixed

The Brosnan locator called result 3.107 a “Proposition”; the source labels it
**Theorem 3.107**. I corrected the reference title. The theorem and proof were
mathematically sound.

### F02 — thm-left-coset-action-and-its-kernel — nonfatal, fixed

The Brosnan locator pointed to “Example 3.99”, but 3.99 is the definition of an
equivariant map. The coset action and stabilizers occur at Proposition 3.102 and
Corollary 3.104; the separate Conrad 6.8 reference supplies the core/kernel
application. I corrected the Brosnan locator.

### F03 — thm-finite-index-core-bound-and-finite-overgroups — nonfatal, fixed

The original step 1.2 called \(G/N\) finite before original step 2.1 established
that \(G/N\cong\operatorname{im}\rho\) has order dividing \(n!\). It also asserted
\(K=\pi^{-1}[\pi[K]]\) without deriving the reverse inclusion from \(N\le K\).
I moved the overgroup argument after the index argument, inserted the elementwise
coset proof, canonically restratified the steps as 1.1/2.1/3.1/4.1, removed the
unused def-order-in-a-group dependency, and updated the contract.

### F04 — thm-transitive-actions-are-coset-actions — nonfatal, fixed

The Brosnan locator named “Proposition 3.105”; the source has Lemma 3.105 and
the required orbit/coset isomorphism at Theorem 3.107. I corrected the locator.

### F05 — thm-conjugacy-class-cardinality — nonfatal, fixed

The Brosnan locator named “Example 3.110”. The conjugacy-class/centralizer
cardinality result is Corollary 3.109. I corrected the locator.

### F06 — thm-conjugate-subgroups-are-counted-by-the-normalizer — nonfatal, fixed

The general normalizer count was attributed to Example 3.111, which is only the
\(S_3\) example. The general result is Corollary 3.110. I corrected the locator.

### F07 — thm-conjugates-of-proper-subgroup-do-not-cover-finite-group — nonfatal, fixed

Fact [L2] claimed \(H\le N_G(H)\) while citing only the normalizer Definition,
whose on-disk text defines \(N_G(H)=\{g:gHg^{-1}=H\}\) but does not state that
containment. Fact [L6] also omitted the cited finite-subset theorem's equality
criterion even though step 2.2 uses properness to infer an index at least two.
I made [L2] an exact definition restatement, derived \(H\le N_G(H)\) from
subgroup closure in step 1.1, and restored the equality clause in [L6].

### F08 — thm-class-equation — nonfatal, fixed

Conrad Theorem 5.1 is the nontrivial-center theorem for finite \(p\)-groups, not
the class equation. Judson 14.2 already directly supports this item, so I
removed the inaccurate Conrad reference.

### F09 — def-finite-p-group — nonfatal, fixed

The Conrad locator said Section 5, while the definition of a \(p\)-group occurs
at the start of Section 4. I corrected the section.

### F10 — lem-subgroups-of-finite-p-groups-are-p-groups — nonfatal, fixed

The source locator said Section 5; the relevant \(p\)-group orbit/index setup is
in Section 4. I corrected the section. The on-disk Lagrange and unique-prime-
factorisation dependencies license the stated proof.

### F11 — thm-p-group-fixed-point-congruence — nonfatal, fixed

The Conrad locator said Theorem 5.3, which is the normal-subgroup/center
intersection theorem. The fixed-point congruence is Theorem 4.1. I corrected
the locator.

### F12 — cor-p-group-action-has-a-fixed-point — nonfatal, fixed

The broad “Section 5” locator was wrong; the stated corollary is Conrad
Corollary 4.2. I corrected it.

### F13 — thm-nontrivial-center-of-a-finite-p-group — nonfatal, fixed

The Conrad locator said Corollary 5.4. The source states this result as Theorem
5.1. I corrected it.

### F14 — lem-cyclic-quotient-by-center-implies-abelian — nonfatal, fixed

Two defects occurred. First, step 1.1 passed from
\(xZ(G)=a^mZ(G)\) to \(x=a^mz\) without citing a coset-equality criterion.
Second, Conrad Remark 5.5 concerns the Cauchy congruence and does not support
this lemma. I added lem-coset-membership-and-equality, wrote the representative
extraction explicitly, reconciled the contract, and replaced the reference with
the exact argument in Judson Corollary 14.16's proof.

### F15 — cor-groups-of-order-p-squared-are-abelian — nonfatal, fixed

Step 1.1 applied the subgroup-of-a-\(p\)-group lemma to \(Z(G)\) without an
explicit result saying that the center is a subgroup. Step 2.1 inferred
\(Z(G)=G\) from equal finite cardinalities without citing the finite-subset
equality theorem. The external locator also said Conrad Remark 5.5 rather than
Corollary 5.2. I added lem-center-is-normal and
thm-subset-of-a-finite-set, cited them at the exact steps, updated the
contract, and corrected the source locator.

### F16 — thm-normal-subgroups-of-finite-p-groups-meet-the-center — nonfatal, fixed

The Conrad locator said Theorem 5.6. The exact result is Theorem 5.3. I
corrected it.

### F17 — thm-cauchys-theorem-for-finite-groups — nonfatal, fixed

Step 3.2 converted a congruence into divisibility, but [L5] cited only the
definition of divisibility and the item did not depend directly on the
definition of congruence. The Conrad locator also said Theorem 5.7; the result
and the displayed cyclic-rotation proof are Theorem 5.4. I added
def-congruence-modulo-an-integer to [L5] and the contract, and corrected the
source locator.

### F18 — thm-cauchy-frobenius-orbit-counting — nonfatal, fixed

Step 2.1 regrouped \(\sum_{x\in X}|G_x|\) along the orbit partition while citing
only the definition of a finite-index-set sum. That definition does not license
partition splitting; clause 3 of thm-sum-rule does. The Conrad locator also
named Theorem 4.1, which is the fixed-point congruence, rather than orbit
counting Theorem 3.29. I added and cited thm-sum-rule, reconciled the
contract, and corrected the locator.

### F19 — ex-nonfaithful-coset-action-of-z-six — nonfatal, fixed

The Brosnan locator said Example 3.99, which is an equivariant-map definition.
Proposition 3.102 is the relevant coset-action result. I corrected the locator;
the special \(\mathbb Z/6\) kernel computation remains the item's own
verification.

### F20 — ex-conjugate-subgroups-and-normalizers-in-s-three — nonfatal, fixed

Step 3.1 used \(|S_3|=6\) without a cited fact that supplies it. The earlier
same-B item ex-class-equation-of-s-three explicitly enumerates all six
elements. I added that legal backward dependency and Fact [L5], cited it in
step 3.1, and updated the contract.

### F21 — ex-fixed-point-congruence-for-an-action-of-z-two — nonfatal, fixed

The locator said Conrad Section 5, while its governing result is fixed-point
congruence Theorem 4.1 in Section 4. I corrected the locator. The five-point
example itself is independently verified on disk.

### F22 — cex-fixed-point-congruence-fails-without-p-group-hypothesis — nonfatal, fixed

The locator said Conrad Section 5. Theorem 4.1 and the immediately following
discussion both state the \(p\)-group restriction and warn that a group of order
six need not give a congruence modulo two or three. I corrected the locator.
The item's particular \(S_3\)-on-three-points witness is independently checked
from its on-disk dependencies.

For bibliographic comparison, the relevant source locations are visible in
Brosnan's [G-sets and orbit-stabilizer notes](https://www.math.umd.edu/~pbrosnan/notes/ugalg/sect0035.html),
Conrad's [Group Actions](https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf),
and Judson's [class-equation section](https://judsonbooks.org/aata-files/aata-html/actions-section-class-equation.html).

## Per-item reading ledger

“Full” means I read the complete item and each dependency's actual on-disk
Statement/Definition/Example, not merely its identifier or contract quotation.

### A — group-actions-and-cayleys-theorem (31/31)

| Item | Read | Result |
|---|---|---|
| def-equivariant-map-of-group-actions | Full | No concrete defect. |
| def-free-group-action | Full | No concrete defect. |
| def-fixed-point-sets-of-a-group-action | Full | No concrete defect; empty acted-on sets and global/elementwise fixed sets agree with the definitions. |
| thm-orbit-stabilizer | Full | F01; fixed. No mathematical defect. |
| cor-orbit-stabilizer-cardinality | Full | No concrete defect; finite cardinality conclusion has the correct hypotheses and direction. |
| lem-stabilizers-in-one-orbit-are-conjugate | Full | No concrete defect; both inclusions/equality are licensed by conjugation and the action law. |
| def-core-of-a-subgroup | Full | No concrete defect. |
| lem-core-is-largest-normal-subgroup-contained | Full | No concrete defect; normality, containment, and maximality directions were all checked. |
| thm-left-coset-action-and-its-kernel | Full | F02; fixed. The action, stabilizer, and core/kernel calculation are sound. |
| thm-finite-index-core-bound-and-finite-overgroups | Full | F03; fixed. |
| thm-transitive-actions-are-coset-actions | Full | F04; fixed. The equivariant-bijection direction is sound. |
| cor-faithful-transitive-actions-are-core-free-coset-actions | Full | No concrete defect; faithfulness is correctly equivalent to trivial action kernel/core. |
| def-conjugacy-class-and-centralizer | Full | No concrete defect. |
| def-normalizer-of-a-subgroup | Full | No concrete defect. |
| lem-centralizers-and-normalizers-are-subgroups | Full | No concrete defect; subgroup criteria and inverse closure were checked. |
| thm-conjugacy-class-cardinality | Full | F05; fixed. No mathematical defect. |
| thm-conjugate-subgroups-are-counted-by-the-normalizer | Full | F06; fixed. No mathematical defect. |
| thm-conjugates-of-proper-subgroup-do-not-cover-finite-group | Full | F07; fixed; the shared-identity union bound is correct. |
| thm-class-equation | Full | F08; fixed. The partition, central singleton classes, and noncentral terms are correct. |
| def-finite-p-group | Full | F09; fixed. The \(n=0\) trivial-group boundary is explicit. |
| lem-subgroups-of-finite-p-groups-are-p-groups | Full | F10; fixed. The \(k=0\) subgroup boundary is handled. |
| cor-index-p-subgroups-of-finite-p-groups-are-normal | Full | No concrete defect; the core-index divisibility argument excludes the \(p!\) alternative correctly. |
| thm-p-group-fixed-point-congruence | Full | F11; fixed. Singleton and non-singleton orbit contributions are correct. |
| cor-p-group-action-has-a-fixed-point | Full | F12; fixed. The contradiction at zero fixed points is licensed by congruence and \(p\nmid |X|\). |
| thm-nontrivial-center-of-a-finite-p-group | Full | F13; fixed. The identity and \(p\mid |Z(P)|\) boundary imply a nonidentity central element. |
| lem-cyclic-quotient-by-center-implies-abelian | Full | F14; fixed. |
| cor-groups-of-order-p-squared-are-abelian | Full | F15; fixed. |
| thm-normal-subgroups-of-finite-p-groups-meet-the-center | Full | F16; fixed. The conjugation action preserves \(N\) exactly because \(N\trianglelefteq P\). |
| thm-cauchys-theorem-for-finite-groups | Full | F17; fixed. The \(p\)-tuple rotation, constant fixed tuples, and order-\(p\) conclusion were checked. |
| thm-cauchy-frobenius-orbit-counting | Full | F18; fixed. Empty \(X\) gives both sides zero. |
| thm-jordans-derangement-theorem | Full | No concrete defect; the transitive singleton case is excluded and the averaging contradiction is valid. |

### B — group-actions-and-cayleys-theorem-examples (16/16)

| Item | Read | Result |
|---|---|---|
| ex-left-regular-action-is-free-and-transitive | Full | No concrete defect. |
| cex-faithful-transitive-action-need-not-be-free | Full | No concrete defect; the natural \(S_3\)-action is faithful/transitive and a transposition fixes one point. |
| cex-free-action-need-not-be-transitive | Full | No concrete defect; the second coordinate is an orbit invariant and each slice is one free orbit. |
| ex-rotations-of-a-square-on-its-vertices | Full | No concrete defect; the stabilizers, orbit, and faithfulness calculation agree. |
| ex-nonfaithful-coset-action-of-z-six | Full | F19; fixed. The three cosets and kernel \(H=\{0,3\}\) are correct. |
| ex-class-equation-of-s-three | Full | No concrete defect; all six permutations and the \(1+2+3\) classes are correct. |
| cex-s-three-has-trivial-center | Full | No concrete defect; both nonidentity cycle types fail to commute with a displayed permutation. |
| ex-class-equation-of-the-dihedral-group-of-order-eight | Full | No concrete defect; the constructed subgroup has eight elements and class sizes \(1,1,2,2,2\). |
| cex-groups-of-order-p-cubed-need-not-be-abelian | Full | No concrete defect; the preceding \(D_4\) construction is a nonabelian group of order \(2^3\). |
| ex-conjugate-subgroups-and-normalizers-in-s-three | Full | F20; fixed. |
| ex-fixed-point-congruence-for-an-action-of-z-two | Full | F21; fixed. The orbit split gives \(5\equiv3\pmod2\). |
| cex-fixed-point-congruence-fails-without-p-group-hypothesis | Full | F22; fixed. The witness gives \(3\not\equiv0\pmod2\). |
| cex-cauchys-theorem-does-not-extend-to-composite-divisors | Full | No concrete defect; \(A_4\) has order 12 and no subgroup, hence no element, of order 6. |
| ex-two-colourings-of-a-square-up-to-dihedral-symmetry | Full | No concrete defect; the eight fixed-colouring counts are \(16,2,2,4,8,8,4,4\), summing to 48 and giving six orbits. |
| ex-binary-necklaces-of-length-four | Full | No concrete defect; rotation fixed counts \(16,2,4,2\) sum to 24 and give six necklaces. |
| cex-orbit-count-is-not-set-size-divided-by-group-order | Full | No concrete defect; the trivial action on a singleton has one orbit while \(1/2\) is not an orbit count. |

## Boundary and adversarial checks

- I explicitly checked empty acted-on sets in fixed-point congruence and
  Cauchy-Frobenius, the trivial \(p\)-group convention, index-one/core cases,
  singleton orbits, proper-subgroup strictness, and the nonempty choices of
  generators, orbit representatives, and nonidentity witnesses.
- I recomputed the finite witnesses rather than accepting their titles:
  \(\mathbb Z/6\) cosets and kernel; \(S_3\) center/classes/normalizers; the
  order-eight dihedral group; the \(S_3\) fixed-point failure; the \(A_4\)
  order-six obstruction; and both square-colouring counts.
- Conrad's separate
  [A4 note](https://kconrad.math.uconn.edu/blurbs/grouptheory/A4noindex2.pdf)
  states that \(A_4\) has no index-two subgroup, matching the on-disk dependency
  used by the composite-divisor counterexample.

## Files changed by this reader

- 22 assigned draft item files: the 7 proof-licensing repairs and 19 source-
  locator repairs listed above (4 items received both).
- research/frontier-10-batch-8.proof-contracts.json: reconciled the seven
  proof-bearing repairs.
- This findings file.

I did **not** edit either published page file, the staged amendment file, any
status, or any out-of-batch item.

## Checks

- Batch-scoped precheck: 40/40 proof-bearing items pass; the seven definitions
  are correctly non-proof-bearing.
- Strict batch proof contract: 40/40 checked, 0 errors, 0 warnings.
- Renderer check: all 47 item files parse under YAML and KaTeX with balanced
  delimiters and valid wikilink placement.
- Prose check: 48 files (47 items plus this report), 0 errors and 4 deliberate
  count-in-prose heuristic warnings.
- Content policy: 47 scoped items, 0 errors, 0 warnings.
- Repository dependency check: no cycles, every reference resolves, and no
  draft item is on a published page; its pre-existing corpus advisories do not
  name a batch-8 defect.
- git diff --check on the reader-owned changes: clean.

## Limits

No assigned item or cited on-disk dependency remained unread. I did not run or
act as either paired judge, and I did not inspect unpublished judge prompts or
verdicts. External-source checking was limited to mathematical result identity
and locator accuracy in the listed Brosnan, Conrad, Judson, and Conrad \(A_4\)
sources; I did not audit hosting metadata, edition history, or licensing.
