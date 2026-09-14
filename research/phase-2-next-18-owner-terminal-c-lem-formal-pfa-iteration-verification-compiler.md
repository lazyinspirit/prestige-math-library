# Owner terminal review: `lem-formal-pfa-iteration-verification-compiler`

**Decision:** `repaired`.

Terra correctly found that the old F4 attributed primitive-recursive list parsing and coding operations to a supplier whose stated interface gave only injectivity of syntax codes.  The repair adds `lem-certified-syntax-coding-operations-are-primitive-recursive` as a direct dependency and splits the facts: coding injectivity remains with its original supplier, primitive-recursive parsing/list operations use the new exact supplier, and derivation verification uses the proof-checking supplier.

The mathematical reduction is standard finite syntactic compilation; I verified every load-bearing operation against the current local statements rather than relying on an external metatheoretic slogan.  The proof now uses only the separately declared interfaces and preserves the same formal PFA iteration output.

Exact frozen pre-review item SHA-256: `4476097b76cbed9d932dbd8ebcc94ecde3b00421d237aad388035b7c1dfcfcbe`.  Current raw item SHA-256: `e91df9e1a39c03d1fb567b99f78957a92217e3601f69e3ad2b7e35cc4796ec78`.
