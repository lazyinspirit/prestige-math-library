# Anonymous-invocation pilot: six historical consumers

Six complete current consumer texts were read, together with every declared
supplier contract and the pertinent implicit supplier contracts. All six were
published at baseline `52bba95d9bd8ede09e96f4b024d634cca38b0100` and were
outside the active classification index when selected. Exact hashes, passages,
supplier checks and individual dispositions are in
[anonymous-pilot.json](anonymous-pilot.json). The bounded result is one U-P
candidate and five no-candidate receipts.

## U-P candidate: finite-type descent over a finite principal cover

`lem-finite-type-local-on-source-and-target` invokes the following direct step:

> If a source cover already verifies local finite type, quasi-compactness of
> $U$ and the principal-open refinement lemma give a finite distinguished cover
> $U=\bigcup_{i=1}^nD(a_i)$ for which every $A_{a_i}$ is a finite-type
> $R$-algebra. Choose finitely many localized generators on each member and
> clear their finitely many denominators. Since $(a_1,\ldots,a_n)=A$, the
> standard finite-localization criterion then shows that $A$ is finite type
> over $R$.

The criterion is a nontrivial finite patching lemma: for a ring map $R\to A$,
if finitely many $a_i$ generate the unit ideal and each $A_{a_i}$ is of finite
type over $R$, then $A$ is of finite type over $R$. Clearing denominators gives
local generators but does not by itself prove that the resulting finitely
generated subalgebra equals all of $A$.

The five declared dependencies provide the definitions, quasi-compactness and
the principal-open refinement. None states the ring descent lemma. Targeted
searches of all current items and the complete Phase-2 supplier catalogue found
no adequate supplier. The cited Stacks Project Tag `01T2` points to Algebra
Lemma Tag [`00EP`](https://stacks.math.columbia.edu/tag/00EP), which states the
needed result exactly. This identifies a potentially unmet direct prerequisite;
it does not allege that the consumer's conclusion is false. An equivalent local
supplier under substantially different terminology remains possible.

## Five bounded no-candidate receipts

- `prop-zero-and-split-triangles-are-distinguished` uses exactness of
  representable Hom sequences, a five-lemma argument and Yoneda. Exact
  published local suppliers exist for all three facts:
  `thm-long-exact-hom-sequences-of-a-distinguished-triangle`,
  `thm-five-lemma-for-a-morphism-of-long-exact-sequences`, and
  `thm-yoneda-embedding-is-fully-faithful`. Their omission from `deps` is not an
  unmet mathematical prerequisite. The triangulated five-lemma corollary was
  not used as support because it assumes a morphism of distinguished triangles,
  while this proof is establishing that the biproduct triangle is distinguished.
- `thm-ext-is-hom-in-the-derived-category` uses “classical Ext construction”
  as the name of its two declared definitions. F1–F7 cover roof removal,
  K-projective/K-injective input under DC, Hom-complex cohomology, and the two
  Ext constructions. The proof supplies the sign and mixed-complex comparison.
- `cor-relative-homology-of-a-single-handle-pair` identifies its
  “standard-pair result” as F2. That supplier explicitly includes $k=0$ and
  $S^{-1}=\varnothing$; the other declared facts supply the handle model,
  collar, excision and pair-homotopy steps.
- `prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs`
  constructs the pair boundary and cone suspension maps in its preceding steps.
  The final “usual pair boundary” phrase refers back to those constructions;
  the declared unreduced/reduced axioms and CW cofibration fact cover the direct
  inputs.
- `thm-nine-lemma-variants-by-which-rows-are-assumed-exact` uses “standard
  variants” only as a conclusion label. Cases 1 and 2 follow directly from L1,
  and case 3 is proved in steps 1.3–1.5 using L2/L3. The wording “after swapping
  the top and bottom rows” in step 1.2 is unnecessary, but L1 directly gives
  the claimed implication; it does not expose an unmet prerequisite.

Each no-candidate disposition is limited to the recorded direct use. It is not
an independent proof certification or a clearance of the dependency closure.
