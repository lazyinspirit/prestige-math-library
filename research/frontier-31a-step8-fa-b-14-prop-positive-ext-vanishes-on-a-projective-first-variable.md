# FA evidence — queue b/14

Decision: accepted-after-review. Source status: familiar.
Item: `prop-positive-ext-vanishes-on-a-projective-first-variable`.

I read both direct dependencies fully, current proof, both Terra rejections, Sol adjudication and the current batch-8 proof contract including its exact L1/L2 citations. The current item is expressly about supplied projective-resolution Ext_P, not balanced Ext, and correctly assumes DC. The final rejection treats L2 as if its vanishing conclusion were insufficient because the proof also mentions its length-zero comparison. In fact L2's interface directly proves the desired vanishing after passage to the opposite category. Its full proof explicitly makes the stated length-zero comparison, so the additional explanation is accurate too.

Independent verification: Hom_A(-,N) is an additive covariant functor A^op→Ab. A projective object of A is injective in A^op by reversal of the lifting property. Reversing arrows in its supplied projective resolution produces an injective resolution in A^op. Applying this Hom functor yields exactly Hom_A(P_bullet,N) with the cochain differential f↦f d_P of L1. Thus Ext_P^q(P,N) is R_I^qF(P) in the opposite category. L2 directly says it is zero for q>0, for arbitrary supplied I, under DC. No enough-injectives hypothesis for all of A or balance theorem is needed. Alternatively, the length-zero injective resolution used in L2 gives the one-term Hom complex described by this proof. The zero projective object and all positive degrees are included; degree zero is deliberately excluded.

This is familiar additive opposite-category homological algebra and needed no external verification. Exact source locators: `def-ext-via-a-projective-resolution-of-the-first-variable`, Definition; `prop-positive-right-derived-functors-vanish-on-injective-objects`, Statement and Proof steps 1.1–2.1. Batch-8 A-page notes keep the separate resolution construction at this position, which the repaired title/subscript respect. The contract is consistent with the current argument and no separate risk_review is prescribed.

No item/dependency bytes changed, no licence required, and no judge verdict or pass stamp created. Next action: focused precheck, record acceptance, then position 15 only after recorder acceptance.

Context refresh after position 15: the peer vanishing statement now explicitly fixes the abelian category, supplied I on D, and both arguments in D. This does not change any comparison, variance, or projective-vanishing argument used here; it is not a direct dependency of this item. Rechecked the unchanged proof against the same local conventions. Reseal the same decision because page-peer statement hashing changed.

Position 16 peer-context refresh: the projective Ext bifunctor now explicitly assumes its datum on all objects of A. This only supplies the missing domain hypothesis of an existing peer statement; the comparison/vanishing arguments reviewed here already use supplied resolutions for their arguments and are unchanged. Own item bytes are unchanged. Reseal the same decision.

Context refresh after position 17: The peer balance/LES assertion now explicitly supplies the common resolution hypotheses and identifies the horseshoe connecting maps. The earlier comparison, variance and positive-vanishing proofs do not use this proposition; their arguments remain valid under the previously checked hypotheses. Own item bytes are unchanged. Reseal the same decision.
