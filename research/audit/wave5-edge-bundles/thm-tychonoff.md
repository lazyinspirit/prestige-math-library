# Citation-precision audit — everything that cites `thm-tychonoff`

## The target, as it actually stands on disk

`items/thm-tychonoff.md` — theorem — Tychonoff's theorem: an arbitrary product of compact spaces is compact in the product topology, assuming the Axiom of Choice

#### Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]).

Let $I$ be a set and let $(X_i, \mathcal{T}_i)_{i \in I}$ be a family of compact
topological spaces ([[def-compact-space]], [[def-topological-space]]). Then the
product

$$P \;:=\; \prod_{i \in I} X_i$$

with the product topology ([[def-product-topology]]) is compact.

**The Axiom of Choice is spent twice, and both uses are flagged below.** Once
inside [[thm-alexander-subbase-lemma]], through Zorn's lemma ([[thm-zorn]]), and
once directly at step 2.1, to produce a point of a product of nonempty sets.

## The 1 citing use(s), quoted verbatim from the citing items

### `rem-tychonoff-choice-strengths` (published-backward, page nets-and-filters)

Title: The compact Hausdorff product theorem uses the ultrafilter lemma, while the published arbitrary compact product theorem assumes the full Axiom of Choice

- The proof of [[thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma]] spends the ultrafilter lemma at the universal-subnet step. The published [[thm-tychonoff]] asserts compactness for arbitrary compact factors under the full Axiom of Choice ([[def-axiom-of-choice]]). These are distinct stated hypotheses; this page makes no claim about their exact relative strength.
