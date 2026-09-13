# Step-7 terminal owner-review draft: `prop-commuting-lie-algebra-elements-have-multiplicative-exponentials`

**Status:** DRAFT — mathematical owner review only; no judge verdict or terminal disposition recorded.

**Current Terra context SHA-256:** `d002cfa0afbd03e4811ec72fc66bb8dfe1035959df4352db83e982489b46422f`  
**Current item SHA-256:** `a04694f43a385ddfaa739a48d0a2f1598dcd0d34e355e0798362170a48771f2d`  
**Proposed disposition:** `accepted-after-review`

## Mathematical review

F4 only gives local-flow commutation on common domains, so Step 1.1 calls it “global” too early. Step 2.1 then establishes independently, via F5/F6 and left translation, that both local flows extend to all (t,g) as g exp(tX) and g exp(tY). Applying the already obtained F4 identity to those now-global domains yields commutation for every s,t, precisely what the evaluation at e needs. No step establishing globality relies on the premature global assertion, so the reasoning can be sequenced without circularity.

## Repair disposition

No mathematical repair needed; editorially move the word “global” from Step 1.1 to the end of Step 2.1.
