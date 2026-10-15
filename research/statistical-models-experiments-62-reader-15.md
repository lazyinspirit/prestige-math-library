# Step 3a reader report — batch 15

Run: `statistical-models-experiments-62`  
Role: reader  
Review date: 2026-10-15

## Verdict

The assigned items and both page summaries are mathematically sound. I found no defect requiring repair or routing. No item or page content was changed. The required proof-layout check reported 5 items, 16 steps, and 0 defects.

## Opened inventory

- Assignment evidence: `research/statistical-models-experiments-62-batch-15.pages.json`, `research/statistical-models-experiments-62-batch-15.proof-contracts.json`, and `research/statistical-models-experiments-62-batch-15.cross-batch-dependencies.json`.
- A-page `fractional-factorial-aliasing-and-foldover`: `library/statistical-models-and-experiments/fractional-factorial-aliasing-and-foldover.md`; items, read in supplier order: `def-regular-fractional-factorial-defining-relation-and-resolution`, `thm-regular-fractional-factorial-aliasing-criterion`, `thm-factorial-column-aliases-prevent-separate-identification`, and `thm-factorial-foldover-separates-opposite-parity-aliases`.
- B-page `fractional-factorial-aliasing-and-foldover-examples`: `library/statistical-models-and-experiments/fractional-factorial-aliasing-and-foldover-examples.md`; examples: `ex-two-three-minus-one-alias-class` and `ex-resolution-three-foldover-and-targeted-followup`.
- Direct supplier `def-two-level-full-factorial-design` at `items/def-two-level-full-factorial-design.md` was opened read-only. The Step 3 batch manifests identify it as a batch 14 item, outside this assignment. Its two-level sign cube and subset-product column convention support the assigned definition.
- Required page context opened: `library/statistical-models-and-experiments/full-factorial-contrasts-and-interactions.md` and `library/linear-algebra/inner-product-spaces-and-orthogonality.md`. The assigned claims use the full-factorial sign-cube convention; they do not rely on the orthogonality or variance results summarized by those pages.

## Mathematical review

- `def-regular-fractional-factorial-defining-relation-and-resolution`: the independence hypothesis gives a rank-$p$ system over $\mathbb F_2$, so every sign vector has solutions; the claimed run count and nonempty case follow. The signed multiplication rule matches evaluation of signed monomials. The resolution minimum is defined over a finite, nonempty set of nonidentity words; independence prevents a nonidentity generator product with empty factor set. The `justified_by` alias theorem is the well-definedness result and, as required by the schema, that theorem depends on this definition.
- `thm-regular-fractional-factorial-aliasing-criterion`: the row-reduction proof correctly counts the solutions, identifies constant monomials with the row space of the generator matrix, and transfers the resulting signed words to the exact equal/opposite column criterion. The argument also covers $p=k$ (one run and no free coordinates). Both directions preserve the sign convention: $x_A=\sigma x_B$ iff $\sigma x_{A\triangle B}=+1$.
- `thm-factorial-column-aliases-prevent-separate-identification`: when $c_A=\sigma c_B$, the pair contributes through $\sigma\beta_A+\beta_B$. The direction $(t,-\sigma t)$ leaves the fitted vector unchanged, and the stated parameter-independent error law then gives the same response distribution. The unrestricted-parameter qualification is essential and present.
- `thm-factorial-foldover-separates-opposite-parity-aliases`: sign reversal multiplies each word by $(-1)^{|A\cap J|}$. A relation on the augmented design must hold on the original block, so the residual subgroup is exactly the even-parity subset of $H$. The pairwise alias conclusion follows from the signed alias criterion; a relation absent from the original block cannot appear after stacking.
- `ex-two-three-minus-one-alias-class`: the four displayed runs satisfy $I=ABC$ and exhaust its solutions. The defining subgroup has $I,ABC$ only, yielding exactly the four complementary equal-column pairs. The coefficient sums and the warning that sparsity/hierarchy is an added modeling assumption follow from the nonidentifiability theorem.
- `ex-resolution-three-foldover-and-targeted-followup`: the initial generators $ABD,CDE$ are independent; their product is $ABCE$, giving initial resolution III. The full mirror retains $I,ABCE$ and has 16 runs in $ABCE=+1$; reversing $A$ retains $I,CDE$ and has 16 runs in $CDE=+1$. The asserted residual pairs, $C=DE$ in the partial follow-up, and remaining coefficient ambiguity are correct. The example explicitly avoids claiming the targeted follow-up clears every main-effect alias.
- The current proof contracts were checked against the actual proofs. Their cited facts, derivation steps, and boundary entries align with the local arguments; no contract repair was needed. The assigned page summaries accurately state the scope and limitations of their items.

## Source checks

The cited authoritative sections were opened and checked for the conventions used; the local proofs establish the stronger general claims where the sources provide examples or design guidance rather than the full algebraic theorem.

- [Oehlert, *A First Course in Design and Analysis of Experiments*](https://users.stat.umn.edu/~gary/book/fcdae.pdf), Chapter 18 §18.2, printed pp. 472–478 / PDF pp. 491–497: a fraction fixes signs of generator words; the defining relations include products of generators with their induced signs. The rendered PDF text at pp. 473–474 states that each generator is either $I=W$ or $I=-W$ and products inherit constant signs. §18.4, printed pp. 482–484 / PDF pp. 501–503, classifies resolution by which effect orders can alias. §18.6, printed pp. 485–486 / PDF pp. 504–505, exhibits unresolved alias interpretations and says additional data or external information are needed to choose among them. §18.7, printed pp. 487–488 / PDF pp. 506–507, reverses all signs in the appended foldover and records sign changes for odd-length generators.
- [NIST/SEMATECH §5.3.3.4.1](https://www.itl.nist.gov/div898/handbook/pri/section3/pri3341.htm), paras. on the four-run half fraction: the selected four runs form a $2^{3-1}$ design. [§5.3.3.4.2](https://www.itl.nist.gov/div898/handbook/pri/section3/pri3342.htm), discussion and Tables 3.13–3.15: a factor column is constructed by multiplying existing columns, with a negative alternative. [§5.3.3.4.3](https://www.itl.nist.gov/div898/handbook/pri/section3/pri3343.htm), “Notation and Method” and “Defining relation” at lines 12–17: multiplying the signed relation generates the alias set, and sparsity is an additional assumption. [§5.3.3.4.4](https://www.itl.nist.gov/div898/handbook/pri/section3/pri3344.htm), lines 18–21: the complete defining relation contains generator products and resolution is the shortest word.
- [NIST/SEMATECH §5.3.3.3.1](https://www.itl.nist.gov/div898/handbook/pri/section3/pri3331.htm), lines 9–27, and [§5.3.3.3.2](https://www.itl.nist.gov/div898/handbook/pri/section3/pri3332.htm), lines 20–36, support the full two-level sign cube, its $2^k$ runs, and the coded factorial model used by the batch 14 supplier.
- [NIST/SEMATECH §5.3.3.8.1](https://www.itl.nist.gov/div898/handbook/pri/section3/pri3381.htm), lines 8–9 and 24–36, describes the all-sign mirror foldover and its sign changes. [§5.3.3.8.2](https://www.itl.nist.gov/div898/handbook/pri/section3/pri3382.htm), lines 8–10 and 23–42, gives a one-factor foldover with its residual alias pattern and shows that other main-effect aliases can remain.

## Edits, uneditable defects, and blockers

- Edits: none. No mathematical or metadata changes were necessary; no proof-contract update, judge-record removal, reflow, or precheck was required.
- Uneditable defects: none. No defect was found in the read-only batch 14 supplier or other opened prerequisites.
- Blocker: none.

## Page verdicts

- `fractional-factorial-aliasing-and-foldover` (A): sound. The summary accurately describes generator equations, signed aliases, resolution, nonidentifiability, and the residual parity rule for both full and partial foldovers.
- `fractional-factorial-aliasing-and-foldover-examples` (B): sound. Its summary matches the four alias classes and the full/targeted foldover calculations in the two examples.
