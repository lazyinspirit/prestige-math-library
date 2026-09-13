# Step 7 terminal owner review — prop-commuting-lie-algebra-elements-have-multiplicative-exponentials

Disposition: accepted-after-review. Frozen Terra rejection: Step 1.1 misstates F4: it yields commutation of local flows only where both compositions are defined, not that global flows commute. Completeness/globality is established only later in 2.1, yet 2.1 invokes the unsupported global commutation assertion.

Current raw item SHA-256: a04694f43a385ddfaa739a48d0a2f1598dcd0d34e355e0798362170a48771f2d. The current item, its batch manifest and strict proof contract have been reconciled. This is owner mathematical evidence for the single paid-cycle closure, not a new judge verdict.

## Mathematical basis

The following completed specialist review and repair note is adopted as the item-specific owner mathematical basis; its earlier DRAFT label refers only to the prior absence of an owner terminal record.

# Step-7 terminal owner-review draft: `prop-commuting-lie-algebra-elements-have-multiplicative-exponentials`

**Status:** DRAFT — mathematical owner review only; no judge verdict or terminal disposition recorded.

**Current Terra context SHA-256:** `d002cfa0afbd03e4811ec72fc66bb8dfe1035959df4352db83e982489b46422f`  
**Current item SHA-256:** `a04694f43a385ddfaa739a48d0a2f1598dcd0d34e355e0798362170a48771f2d`  
**Proposed disposition:** `accepted-after-review`

## Mathematical review

F4 only gives local-flow commutation on common domains, so Step 1.1 calls it “global” too early. Step 2.1 then establishes independently, via F5/F6 and left translation, that both local flows extend to all (t,g) as g exp(tX) and g exp(tY). Applying the already obtained F4 identity to those now-global domains yields commutation for every s,t, precisely what the evaluation at e needs. No step establishing globality relies on the premature global assertion, so the reasoning can be sequenced without circularity.

## Repair disposition

No mathematical repair needed; editorially move the word “global” from Step 1.1 to the end of Step 2.1.


## Owner conclusion

The exact rejected defect is either repaired in the current item or, for an unchanged item, rejected after a concrete source-level review documented above. The current item remains subject to the run's structural gates; any later mathematical change invalidates this hash-bound owner resolution.
