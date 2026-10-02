# Boundary peak owner repair — frontier-37-owner-30

## Objective, authority and writer guard

Complete the owner-held `frontier-37-owner-30-5a-e-peak-collar-cutoff-open` repair after native Alpha e drained at 13:25:44 UTC. Before edits, process inspection found Alpha h and d, but no Alpha e writer. Scope: the peak lemma, necessary local prerequisites on the existing batch-29 A page, their manifest/coverage/contracts, batch-29 risk evidence, the one escalated Alpha-e decision, and its open defect row. No gate, independent judge, engine transition or self-certification was attempted.

Both branches of the peak Statement were retained verbatim. In particular, branch 1 remains a bounded **open set**, possibly disconnected, defined by a smooth negative set with strict psh near the boundary; it still imposes **no** nonzero-gradient hypothesis. Branch 2 remains the smooth strongly pseudoconvex boundary case.

## Complete mathematical route

1. A single full Levi polynomial (linear plus pure quadratic Taylor terms) gives `Re f <= -c |z-p|^2` on the nearby closure, including when the linear term vanishes. This avoids any regular-boundary assumption at `p`.
2. New `lem-positive-smooth-collar-for-a-strictly-psh-negative-set` proves the missing exterior positivity and compact collar. Enumerated rational-ball bumps cover the complement of the closed set; coefficients `2^-j/(1+M_j)` control every derivative, proving smoothness and flatness across the closed set rather than merely local finiteness on its complement. Adding a small positive multiple to rho preserves its negative set and strict boundary Levi form, while becoming positive everywhere outside the closure. Compact exclusion minima and a small regular positive value produce finitely many outer smooth strongly pseudoconvex components covering the closure. A maximum of the collar `-log(epsilon-psi)` with a constant, plus squared norm, gives a continuous psh exhaustion on each component.
3. A radial cutoff is one near p and supported inside the separator ball. Its derivative support lies in a fixed compact annulus. The annular zero set of f is disjoint from the closure; prescribe an outer neighborhood excluding that set before applying the collar lemma. Then `(dbar chi)/f`, extended by zero, is smooth, closed and bounded on the larger domain. No separator-modulus sublevel is asserted to fit inside a ball, and the data are not falsely claimed to be compactly supported inside each outer component.
4. Existing `lem-smooth-regularization-of-psh-exhaustion` supplies a smooth psh exhaustion. New `lem-smooth-psh-exhaustion-implies-hartogs-pseudoconvexity` supplies the exact solver premise. Its complete proof follows Demailly 7.2(c)→(d): continue a two-disc holomorphic map using maximum-principle bounds for the exhaustion. Continuous harmonic majorants are first dilated inward and raised by an arbitrarily small constant, so their conjugates and the maps extend past the base-disc boundary. For the actual library convention, `delta_infinity = inf_{||xi||_infinity=1} directional_radius_xi`; the continuous negative logarithm satisfies line submean by taking the supremum of directional inequalities. Euclidean distance is never substituted for the polydisc radius.
5. Existing `thm-hormander-l2-dbar-existence`, smooth-data branch, applies on each outer component with weight squared norm, Levi eigenvalues all one, and finite energy from bounded coefficients and bounded domain. The smooth correction is bounded on the compact closure and holomorphic near p. The holomorphic denominator `Q=(c+v)f-chi` gives a corrected quotient `g=f/Q`, glued with `1/(c+v)` where the cutoff is locally zero. `Q(p)=-1` proves extension at p; the real-part estimate proves no denominator zero on the closure. The existing exponential modulus identity gives the peak `exp(-g)` on an open neighborhood of the closure.
6. New `lem-global-smooth-strictly-psh-defining-function` completes branch 2. A finite partition near the compact boundary glues the smooth local defining functions; outward conormals are positive multiples, so their weighted sum stays nonzero. Weight derivatives disappear from the tangential Levi form. A cutoff and sign-constant interior/exterior term extend the defining function smoothly. The explicit tangent/normal absorption estimate makes `exp(Cr)-1` strictly psh near the boundary; dimension one is treated separately. Smoothness comes from the constructed smooth r, not an upgrade of Jabbari's C2 conclusion.

## Exact reading and supplier limits

Read complete Boas §3.3.2 peak discussion, printed pp. 76–77, from the author-hosted 2019 PDF using its actual text, including the outside-domain correction and removable quotient. Read Demailly's complete Theorem 7.2(c)→(d) proof and following norm implications, printed pp. 54–55. Read Jabbari §3.6.4 Theorem 64(1) and its proof, printed p. 74. The repaired items give full local proofs for the collar, norm-matched Hartogs bridge and smooth globalization; no external peak theorem is imported as a citation-only proof.

The published items whose names suggest reverse pseudoconvexity equivalences actually state only Hartogs→exhaustion and Hartogs→Levi. They do not license the converse used here, so the needed bridge is proved explicitly. The published closed-zero-set corollary's current proof relies on local finiteness established only on the complement of the closed set; it is not used. This observation is a supplier caveat, not a completed audit or repair of that outside-scope published item.

## Integration and direct consumers

The three new lemmas are placed before the peak item on the existing `hormander-estimates-and-the-levi-problem` A page and in batch-29 manifest/coverage/contracts; no new page or pair was created. The peak manifest dependency level is now 5 because it genuinely uses the level-4 smooth Hörmander theorem, instead of reproducing a direct source solvability import. The three new lemmas are level 0 relative to the current run. The manifest has 28 items, formerly 25.

Searching direct item consumers found no current item depending on the peak lemma; its only current library use is its placement on this A page. Its Statement is unchanged. The page prose now names the proved collar, globalization and Hartogs bridge. The shared plan and unified dependency ledger are left to the owner's serial integration; actual batch-29 deps and page placements are synchronized.

## Local evidence and remaining work

- Four proof prechecks pass.
- Strict targeted proof-contract check: 4/4, zero errors and warnings.
- Four sources plus the A page render/YAML/KaTeX check: pass.
- Batch-29 manifest-deps check: 28 items, zero errors.
- Focused dependency check: selected sources and complete global page/cycle checks pass, with existing global multi-home warnings.
- The modified peak defect row passes standalone schema validation. Run-wide defect-ledger validation reports 12 unrelated current Alpha-h rows whose `location` values are outside the schema enum; those rows are outside this repair. The generated ledger view was refreshed.
- Full batch-29 `risk-report --require-reviewed`: 28 routed items, no errors. The peak and all three prerequisite risk notes record this local owner review, not an independent audit.

The original finding and sources remain in the defect ledger; only its open disposition is closed with the new repair evidence. Only the peak's escalated Alpha-e decision changes to amended repair. No mathematical uncertainty remains in this local route after the checks above. Central plan/dependency reconciliation and any engine recertification remain the parent owner's work; no gate closure is claimed.
