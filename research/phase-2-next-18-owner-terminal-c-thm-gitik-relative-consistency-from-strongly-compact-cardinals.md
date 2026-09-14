# Owner terminal review: `thm-gitik-relative-consistency-from-strongly-compact-cardinals`

**Decision:** `repaired`.

Terra correctly observed that the forcing setup assumes the strongly compact class has no regular limit point, while the original finite-fragment argument had not arranged this.  The proof now follows Gitik’s opening reduction: if the ambient universe has a regular limit cardinal, take the least one $\lambda$ and work in $V_\lambda$; otherwise retain the universe.  Reflect the finite formula family, including the no-regular-limit assertion and the required strongly compact witnesses, inside that reduced model before collapsing and applying the forcing construction.

This reduction is stated explicitly in Schürz, *Gitik’s model*, opening discussion on printed page 4 and used through the final theorem on page 20, https://repositum.tuwien.at/bitstream/20.500.12708/5394/2/Schuerz%20Johannes%20Philipp%20-%202018%20-%20Gitiks%20model%20or%20a%20model%20of%20ZF%20where%20all...pdf.  The repair adds the missing hypothesis without assuming a stronger consistency premise.

Exact frozen pre-review item SHA-256: `ba1e49f3ece111fc43b04556e557c02faf9e5f3612b836836c9914f0372a0b83`.  Current raw item SHA-256: `f9151c308f585d520d7bc9b7b38b71478f1e22cd61d126c0ba67c58223b74dd0`.
