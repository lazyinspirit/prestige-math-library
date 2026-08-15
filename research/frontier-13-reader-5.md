# frontier-13 — Step 6a independent reader 5

## Scope and coverage

I opened and read all 49 assigned item files: 38/38 on `tensor-products-of-modules` and 11/11 on `tensor-products-of-modules-examples`. I also opened both page files and each on-disk item cited by an `[F#]`, `[A#]`, or `[L#]` fact before assessing the citation. Dependency-item opens are not included in the assigned-item count.

All 49 assigned mathematical-content items have both `provenance.statement` and `provenance.proof`. None has `provenance.statement: ai-generated`, so there is no AI-generated Statement acting as a load-bearing premise in this batch.

## Findings

### 1. `ex-matrix-algebra-extension-of-scalars`

- **Exact location:** `items/ex-matrix-algebra-extension-of-scalars.md`, [L4] at line 43 and Verification step 2.1 at line 53.
- **What is wrong:** [L4] says that if `(u_i)` is an $F$-basis, then $1\otimes u_i$ is the induced $K$-basis after scalar extension, and attributes this to `thm-tensor-product-basis-from-bases`. The cited theorem's actual Statement (lines 27–31) only says that, for two free modules over the same commutative ring $R$ with specified $R$-bases, the product tensors form an $R$-basis of their tensor product. It does not state the scalar-extension basis result, supply an $F$-basis of $K$, or turn the resulting product $F$-basis into the asserted $K$-basis.
- **Why it matters:** Step 2.1 uses the inflated restatement as its entire justification that $1\otimes E_{ij}$ is a $K$-basis, hence that the displayed entrywise map is an isomorphism. The conclusion is true, but the cited item does not license this step. A direct inverse $B=(b_{ij})\mapsto\sum b_{ij}\otimes E_{ij}$ would repair the proof.
- **Severity:** **fatal** — load-bearing inaccurate citation.

### 2. `ex-extension-of-scalars-of-coordinate-modules`

- **Exact location:** `items/ex-extension-of-scalars-of-coordinate-modules.md`, [L3] at line 43 and Verification steps 1.1–2.1 at lines 49–51.
- **What is wrong:** [L3] attributes the assertion that $(1\otimes e_j)_{j<n}$ is a $K$-basis of $K\otimes_F F^n$ to `thm-tensor-product-basis-from-bases`. The cited theorem instead gives an $F$-basis of a tensor product from specified $F$-bases of both factors. The displayed “in particular” is not an instance of that Statement: no basis of $K$ over $F$ is in the inputs, and even choosing one would produce a product $F$-basis, not directly the claimed $K$-basis.
- **Why it matters:** Step 2.1 relies on this inaccurate restatement to prove bijectivity. Step 1.1 also invokes descent of the balanced formula without a tensor universal-property fact among its inputs. The claimed isomorphism is true and can be proved directly using the inverse $(k_j)_{j<n}\mapsto\sum_{j<n}k_j\otimes e_j$, but the proof as contracted is not licensed.
- **Severity:** **fatal** — load-bearing inaccurate citation.

### 3. `thm-tensor-product-basis-from-bases`

- **Exact location:** `items/thm-tensor-product-basis-from-bases.md`, [L1] at line 37 and Proof step 2.1 at line 51.
- **What is wrong:** Step 2.1 applies [L1] “in each variable.” The cited `thm-tensor-products-commute-with-arbitrary-direct-sums` Statement (lines 29–35) only proves
  
  \[
  \bigoplus_i(M_i\otimes_R N)\cong(\bigoplus_iM_i)\otimes_RN,
  \]
  
  with the direct sum in the first variable. The second-variable application needs tensor symmetry, but `thm-symmetry-and-associativity-over-a-commutative-ring` is absent from this item's dependencies and Facts & Assumptions.
- **Why it matters:** The product-basis conclusion is true; inserting the symmetry isomorphism before and after the one-sided direct-sum theorem closes the gap immediately.
- **Severity:** **polish** — a sub-30-second missing symmetry bridge.

### 4. `cor-tensor-product-with-a-quotient-ring`

- **Exact location:** `items/cor-tensor-product-with-a-quotient-ring.md`, [L1] at line 39 and Proof step 1.1 at line 53.
- **What is wrong:** The cited right-exactness theorem tensors an exact sequence in its first variable, yielding $I\otimes_RM\to R\otimes_RM\to(R/I)\otimes_RM\to0$. Step 1.1 instead claims $M\otimes_RI\to M\otimes_RR\to M\otimes_R(R/I)\to0$. No cited fact supplies the symmetry needed to reverse every tensor factor.
- **Why it matters:** The asserted quotient isomorphism is correct, and tensor symmetry over the commutative ring repairs the step immediately.
- **Severity:** **polish** — a sub-30-second missing symmetry bridge.

### 5. `thm-projective-modules-are-flat`

- **Exact location:** `items/thm-projective-modules-are-flat.md`, [L2] at line 36 and Proof step 1.1 at line 48.
- **What is wrong:** The proof identifies $u\otimes1_F$ for $F=\bigoplus_XR$ with a direct sum of copies of $u$. Here the direct sum is in the second tensor variable $A\otimes_R F$, whereas the cited direct-sum theorem only states preservation for a direct sum in the first tensor variable.
- **Why it matters:** The proof becomes licensed after inserting the already-developed tensor symmetry, but symmetry is not among this item's inputs.
- **Severity:** **polish** — a sub-30-second missing symmetry bridge.

### 6. `cor-free-modules-are-projective-and-flat`

- **Exact location:** `items/cor-free-modules-are-projective-and-flat.md`, [L3] at line 42 and Proof step 1.2 at line 52.
- **What is wrong:** Step 1.2 says tensoring an exact sequence with $F=\bigoplus_XR$ gives the direct sum of copies of the original sequence. This again uses direct-sum preservation in the second tensor variable, while [L3]'s cited theorem states only the first-variable version.
- **Why it matters:** Tensor symmetry supplies the omitted bridge, so the unconditional flatness conclusion remains correct.
- **Severity:** **polish** — a sub-30-second missing symmetry bridge.

### 7. `cor-flat-modules-preserve-intersections-of-ideals`

- **Exact location:** `items/cor-flat-modules-preserve-intersections-of-ideals.md`, [L2] at line 36 and Proof steps 2.1–3.1 at lines 50–52.
- **What is wrong:** [L2] accurately cites $M\otimes_R(R/I)\cong M/IM$, but the tensor sequence in step 2.1 contains $(R/I)\otimes_RM$. Step 3.1 applies [L2] to that reversed tensor product without citing symmetry.
- **Why it matters:** The kernel computation is correct once the canonical symmetry isomorphism is inserted.
- **Severity:** **polish** — a sub-30-second missing symmetry bridge.

## Page verdicts

- **`tensor-products-of-modules`: PASS WITH POLISH.** Opened 38/38 items. Five polish findings, no fatal or nonfatal defects. The page title and summary do not overstate the proved mathematical scope. The other 33 items read cleanly, including their stated boundary cases and both directions of their equivalences.
- **`tensor-products-of-modules-examples`: FAIL.** Opened 11/11 items. Two fatal, load-bearing citation inflations; the other nine items read cleanly. The page file has no prose body beyond its item list, and its page title is accurate.

**Total assigned items actually opened: 49/49.**
