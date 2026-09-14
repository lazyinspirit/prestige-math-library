# Owner terminal review: `lem-gitik-strong-compact-support-homogenization`

**Decision:** `repaired`.

Terra correctly found that the old two-coloring invoked “the comparison color” for pairs of trunks on which that comparison was not defined.  Step 5 now uses the substantive color only when the trunks are compatible and reachable from the fixed stem, and assigns color $2$ otherwise.  Homogeneity is then applied to a total finite coloring, after which the proof works inside the compatible homogeneous alternative needed for amalgamation.

I compared the repair with Schürz, *Gitik’s model*, the strong-compactness homogenization used in Lemmas 15–17 on printed pages 16–20, https://repositum.tuwien.at/bitstream/20.500.12708/5394/2/Schuerz%20Johannes%20Philipp%20-%202018%20-%20Gitiks%20model%20or%20a%20model%20of%20ZF%20where%20all...pdf.  The default color adds no mathematical conclusion.

Exact frozen pre-review item SHA-256: `85c5d9a677d0dee4df3fdfaf066eb1802fbfde3a3157cdb97e76998b55c91950`.  Current raw item SHA-256: `96131f17aedf4df06a7fb1ba5d3f9c9b116505a80b58cf5e02ac6babb80f26be`.
