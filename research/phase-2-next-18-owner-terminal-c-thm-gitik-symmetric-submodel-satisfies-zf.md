# Owner terminal review: `thm-gitik-symmetric-submodel-satisfies-zf`

**Decision:** `repaired`.

Terra correctly found that the old proof attributed the canonical selection of ambient names and witnesses to AC even though the construction’s definability requires the fixed class well-order $W_O$.  The repair assigns those selections to F1, the declared Gitik ambient setup with definable global well-order and predicate Replacement.  The AC fact is narrowed to the upstream measure, name, and finite-support choices that actually use it.

I checked the symmetric-model closure scheme against Schürz, *Gitik’s model*, Lemmas 6 and 13–16 on printed pages 9–19, https://repositum.tuwien.at/bitstream/20.500.12708/5394/2/Schuerz%20Johannes%20Philipp%20-%202018%20-%20Gitiks%20model%20or%20a%20model%20of%20ZF%20where%20all...pdf.  Replacement and Separation now cite the correct definability resource.

Exact frozen pre-review item SHA-256: `f53ba4226a30c3c3567d2a491cca3bb27d17deb957929d1796ea12c2423c2727`.  Current raw item SHA-256: `0da3ab3dcaae0975ca95cccfe303040f3c04f855e36893d556fda3ccef3445b4`.
