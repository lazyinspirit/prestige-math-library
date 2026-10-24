# Round 02, lane 08: differentials under base change and localization

## Finding

**Warranted as an optional editorial aid; mathematical classification uncertain.** A pushout square is a natural way to present the base-change statement, and a separate localization comparison can identify the rings and module isomorphism. The proof already establishes both results. The diagram should help readers keep those isomorphisms distinct from the comparison map for a general algebra homomorphism; it cannot replace the proof.

The bound snapshot SHA256 matches the assignment’s current source hash: `721d532d1dbf407fd0dd85654446a49c751549d94b3a31b589f428e5adb4148c`. Both listed local PNG tiles were inspected at original resolution and render the relevant statement and proof legibly.

## Claim and diagram details

- **Lines 26–28:** The pushout square `A→B`, `A→A'`, `B→B'=B⊗_A A'`, `A'→B'` supports the `B'`-module isomorphism `B'⊗_B Ω_{B/A}→Ω_{B'/A'}`. Its displayed map is `(b⊗a')⊗db''↦(b⊗a')d(b''⊗1)`; the inverse sends `d(b⊗a')↦a'(1⊗db)`.
- **Lines 29–30:** For multiplicative `U⊂B` and `V⊂A` whose image lies in `U`, the structure map `V^{-1}A→U^{-1}B` is defined and the stated isomorphism is `U^{-1}Ω_{B/A}≅Ω_{U^{-1}B/V^{-1}A}`. Keep this as a separate localization display: `U` can invert elements beyond those coming from `V`.
- **Lines 31–33 and 51:** An arbitrary `A`-algebra map `B→C` gives `C⊗_B Ω_{B/A}→Ω_{C/A}`; no isomorphism or injectivity is asserted. For `C=B⊗_A A'`, composing with `Ω_{C/A}→Ω_{C/A'}` gives the base-change isomorphism. For `C=U^{-1}B`, the comparison with base `A` is the special case of localization with `V={1}`.
- **Lines 47 and 49:** The proof constructs inverse base-change maps and proves the localization statement. The fraction derivation has the sign `d(b/u)=u^{-1}db−bu^{-2}du`, from `d(u^{-1})=−u^{-2}du`.

The domains, codomains, compositions, and sign all agree with the statement. The comparison for general `B→C` must not be drawn with an isomorphism marker. No mathematical defect was found.

See `lane-08.json` for the exact assignment fields, image hashes, and fuller map descriptions.
