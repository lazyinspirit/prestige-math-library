# FA evidence — queue b/1

Item: `cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable`.
Decision: repaired. Source status: familiar.

The comparison-of-resolutions argument is familiar elementary homological algebra; no external verification was needed. I independently checked the current item, all three original direct dependencies, the supplied-injective-datum definition, and the published comparison-existence and comparison-uniqueness theorems. Their Dependent Choice hypothesis is explicitly retained. The batch-8 notes and manifest place this corollary on the A page after balance; the A/B carriers retain the supplied-resolution convention, and no examples-page dependency is introduced. The original refuter record concerned placeholder text, which is no longer present. The current manifest gives no separate item risk_review. The batch and merged proof contracts retained an obsolete two-step proof and have been updated for this item only.

Both Terra rejections concern naturality in the resolved variable. Sol added the correct hypotheses but did not provide the required comparison-square argument or direct citations. I therefore uphold the substantive final rejection and independently repair it. The definition of Ext_I identifies the source cohomology, not two constructions with each other; the repaired wording makes this distinction explicit.

For each N, a comparison a_N extending its identity has an inverse on cohomology because reverse comparisons compose to maps homotopic to the identity. Hom(M,-) sends a-b=dh+hd to exactly the same homotopy identity. For u:N→N', the maps J(u)a_N and a_N'I(u) extend the same u and hence are homotopic. This establishes naturality in N. Precomposition by M'→M commutes literally with postcomposition by a_N and gives naturality in M. Comparison uniqueness proves independence and functor laws without a class-wide choice of comparison maps. The argument covers degree zero and zero objects without exception; individual resolution data give an objectwise canonical comparison.

Dependencies: `def-balanced-ext-bifunctor`, `def-ext-via-an-injective-resolution-of-the-second-variable`, `thm-injective-resolutions-of-the-same-object-are-homotopy-equivalent-under-that-object`, plus newly explicit `thm-injective-comparison-map-exists` and `thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy`. No dependency file was edited, so no prerequisite-repair licence is required. The owned manifest dependency list and both local/merged contract entries were synchronized.

Validation: focused precheck passed (1 checked, 0 failing); depcheck exited 0 (475 repository warnings, no cycles or unresolved references). No judge verdict or pass stamp was created. The first precheck requested canonical phase numbering, which was adopted before the successful check.

Current obligation: record the exact bytes with the prescribed terminal recorder. Only after it accepts may queue position 2 begin.

Context refresh after position 15: the peer vanishing statement now explicitly fixes the abelian category, supplied I on D, and both arguments in D. This does not change any comparison, variance, or projective-vanishing argument used here; it is not a direct dependency of this item. Rechecked the unchanged proof against the same local conventions. Reseal the same decision because page-peer statement hashing changed.

Position 16 peer-context refresh: the projective Ext bifunctor now explicitly assumes its datum on all objects of A. This only supplies the missing domain hypothesis of an existing peer statement; the comparison/vanishing arguments reviewed here already use supplied resolutions for their arguments and are unchanged. Own item bytes are unchanged. Reseal the same decision.

Context refresh after position 17: The peer balance/LES assertion now explicitly supplies the common resolution hypotheses and identifies the horseshoe connecting maps. The earlier comparison, variance and positive-vanishing proofs do not use this proposition; their arguments remain valid under the previously checked hypotheses. Own item bytes are unchanged. Reseal the same decision.
