# frontier-34 batch 4 scaffold and audit

Status: BLOCKED; not a sufficient-scaffold verdict. Only the owned manifest, coverage, and these notes are writable. Published items and canonical plan are unchanged.

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, the generated batch task and generic Step 1 task. Active state is .autopilot/frontier-34; git HEAD at entry was 4501527a0. Historical run artifacts are evidence only.


## Policy-fix-1-b4 verification — 2026-09-08

Reported subject: the 49 batch-item-already-exists diagnostics in the original owned-policy evidence. These no longer reproduce at HEAD 63957468e. The current validator checks canonical same-page homes before rejecting an existing item. Verified plan inventories remain 41/8/0/0 against manifest 56/11/45/7; every reused ID remains on its canonical page. No manifest dependency, claim, source disposition, or item identity was changed for this repair. No new prerequisite pair is needed to resolve this identity-policy finding. Coverage remains blocked, with all 142 harvested results preserved. No mathematical claim or source text is newly approved by this policy verification.

Changes: replaced the stale live collision obligation with its verified closure and removed that obsolete conflict from the next-work list. Earlier check tables and diagnostic dumps remain historical evidence. All other fatal obligations remain open, including the incomplete semantic transitive audit; previous graph counts are historical, not a refreshed semantic certificate.

Current input fingerprints: plan-spec.json 7c49c68b8da41a09b47e4184e65e5d971c71faf4384c70e61431e54c8ef26ec3; owned pages e9717f08b5ad7bbeeb5f0bf7c6e68734d41e415027e812e3f4bdcd0809df2def; owned coverage 2898f0eb065b4f6dc8645ce12d848e38f4962450d2be812020c08374d6b02150.

Checks actually run in this dispatch:

| Command | Result |
|---|---|
| node tools/content-policy.mjs research/frontier-34-batch-4.pages.json --manifest-only --json | PASS: 119 scoped items, zero errors/warnings |
| node tools/coverage-checklist.mjs research/frontier-34-batch-4.coverage.json --require-destination | PASS: 2 pages, 142 harvested results, zero errors/warnings |
| node tools/manifest-deps.mjs research/frontier-34-batch-*.pages.json | PASS: 876 items, zero normalized/errors; explicit-array check only |
| node tools/content-policy.mjs --manifest-only research/frontier-34-batch-*.pages.json | FAIL: 876 scoped items, 51 errors, zero warnings; remaining missing-dependency subjects belong to other batches |
| node tools/validate-plan.mjs research/plan-spec.json | PASS with advisories: 892 populated pages, 579 without inventories; does not certify unmerged additions or published proof adequacy |
| node tools/extcheck.mjs | PASS with advisories: 15416 items, 161 recorded results, 63 dependent results |
| node tools/source-fetch-check.mjs --coverage research/frontier-34-batch-4.coverage.json | FAIL: all 6 source entries unstamped |
| node tools/source-fetch-check.mjs --coverage research/frontier-34-batch-4.coverage.json --stamp --timeout-sec 5 | FAIL: EAI_AGAIN for all 6 entries, zero newly stamped |

Additional affected source checks run: `node tools/url-sweep.mjs --coverage research/frontier-34-batch-4.coverage.json --out /tmp/frontier34-b4-policy-urls.json --recover --fail-on-dead --timeout-ms 5000` failed (0/5 live, DNS failures, no recovery obtained). `node tools/source-backing.mjs --coverage research/frontier-34-batch-4.coverage.json --liveness /tmp/frontier34-b4-policy-urls.json` failed for 49 result identities. These observations establish local fetch failure, not disappearance of the texts or successful archive inspection.

The source-byte failure is reproduced, not resolved; no fetch verification was fabricated. The batch remains BLOCKED / UNPUBLISHABLE for the previously documented mathematical and full-text obligations even though the reported owned policy finding is closed. Shared plan, published content, other batches, and workflow state were not edited.

## Handoff verdict and writable-scope boundary

**BLOCKED / UNPUBLISHABLE.** This is an audited draft scaffold, not a sufficient-scaffold certificate. The final inventory is Tor A/B **56/11**, spectral A/B **45/7**, total **119** items, with explicit deps arrays. The current plan has **41/8/0/0** respectively; its page metadata and requires are retained. The authorized plan writer must integrate the additions and proof-order repairs. This dispatch changed only this notes file and its sibling pages/coverage JSON files; scratch computations were under /tmp/f34b4. No published content, prose design, canonical plan, or driver state was changed by this dispatch.

The final corrections near the end supersede earlier draft interfaces. In particular the regular-element and two-ideal Tor formulas retain the full arbitrary-ring handed hypotheses, and all source headings in the final coverage ledger were checked against the displayed source text. There is no new prerequisite A/B pair proposal: the required local repairs and source harvest fit in this pair under the actual 60-item A-page limit. No result was renamed to evade an existing-ID collision.

Fatal obligations:

1. **Same-page identity reuse — policy finding closed.** All original 41 Tor A and 8 Tor B IDs already have published item files and the canonical plan homes them on these exact pages. Commit `63957468e` permits this reuse. The policy-fix-1-b4 rerun passes all 119 owned items without renaming or removing any identity. This closes only the reported collision finding; the published mathematical defects below remain outside this dispatch's writable files.
2. **Inadequate arbitrary-ring dependencies and undeclared proof inputs.** Published degree-zero Tor uses the commutative-only right-exactness theorem. Published arbitrary-ring projective-flatness uses the commutative-only tensor/direct-sum theorem. The added arbitrary-ring tensor lemmas and changed manifest edges repair the proposed scaffold, but cannot repair the published bodies. The two published torsion-free/PID flatness proofs also need the finitely generated PID theorem, tensor-colimit interchange and module AB5 explicitly; those suppliers are now in the scaffold.
3. **Axiom propagation.** The projective-comparison theorem explicitly assumes DC and supplied resolutions, but published `prop-each-tor-construction-is-covariant-in-both-variables` does not state that cost. Propagate DC and the resolution datum through every consumer using that comparison proof, rather than claim choice-free functoriality. The published integer-global-dimension supplier assumes AC, while `thm-higher-tor-over-the-integers-vanishes`, `prop-the-integers-have-weak-and-global-dimension-one`, and the corresponding B example omit the inherited cost. Either expose the existing proof's AC upper bound or separately prove a lower-cost replacement. New character-dual/ideal-test claims explicitly assume AC; the finite filtered spectral construction uses supplied subobjects and finite member calculus, not an implicit embedding or infinite coproduct exactness.
4. **Upstream proof order.** Current published deps differ from the plan and historical scaffolds. The custom graph finds confirmed same-page later suppliers, including homology additivity, member-calculus exactness, cones, and resolution existence. Canonical validate-plan does not see these published-frontmatter differences. The complete flagged-edge inventory is below. This dispatch cannot reorder their published pages or edit their proofs.
5. **Full source text and bytes.** The web reader opens all five distinct PDF URLs, but extracted text has missing displayed equations/diagrams, and rendered screenshots were not returned as inspectable images. Therefore full rendered relevant-text verification is NOT certified. Local URL recovery and byte fetching fail at DNS (curl code 6 / EAI_AGAIN). Six source entries remain unstamped; no hash or fetch receipt was fabricated or borrowed. The original URLs remain in the ledger. This is an environment/read-completeness blocker, not evidence the source texts have disappeared.
6. **Complete semantic transitive closure not established.** The mechanical traversal covers all reachable page requires and item dependencies and compares all historical manifests; it is not a semantic certificate for thousands of upstream proof bodies. Exact owned claims and selected load-bearing interfaces were read, and concrete fatal gaps were found. The remaining upstream statement/hypothesis/direction/axiom audit must be completed before a sufficient-scaffold verdict. A resolving ID, a historical judge pass or a green plan gate is not enough.

## Design authority and conflicts

Tor: read HA-10, lines 2001–2170, including the assigned L2133 example block. The current plan has 41 A and 8 B items, already present as published items under a draft page. Reuse these identities. The design directly requires Ext, Yoneda, tensor products and semisimple modules; the plan instead requires the Yoneda B companion and flatness-and-faithful-flatness. Keep plan edges. The earlier arbitrary-ring flatness definition/lemma in the plan correct the design assumption that the commutative MOD-3 statements suffice. The published balance proof uses finite kernel elimination, not an application of the cochain-only HA-8 assembly lemmas. The tensor-total definition on disk now allows arbitrary direct-sum diagonals, while its plan title still says finite diagonals; only the two-resolution balance uses first-quadrant finite diagonals. Preserve this distinction.

Spectral sequences: HA-15 L2905–3067 controls the mathematics: it is the dedicated homological-algebra design with the current page identity and an explicit bounded-convergence boundary. The plan controls category, order 365.065 and requires derived-categories-examples rather than the design direct chain-complex prerequisite. AT §3.7 at L237–250 is a downstream convention agreement, not an alternative construction. CC HA-6 L3463–3514 is the older category-theory/order-321 design: its ext-and-tor requirement, double complexes, exact couples, unbounded convergence and optional Grothendieck sequence do not override HA-15. Those subjects belong to double-complexes-exact-couples-and-convergence and grothendieck-spectral-sequences-and-computations. The old exhaustive-plus-Hausdorff convergence assertion is not accepted without additional hypotheses. Its five-term edge sequence fits here and is retained as an added result. No mathematical scope is removed to satisfy a gate. Current validator ceiling is 60 A items, not the historical 30 advisory.

### Reused `def-tensor-product-total-complex-of-chain-complexes`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 7e7741cf5352384b014b1c6436afc442becd629944a30147da447df0cf2a4d5c.

Declared deps: def-chain-complex-in-an-abelian-category, def-tensor-product-of-modules-by-generators-and-relations.

## Definition

Let $R$ be a ring, $P$ a chain complex of right $R$-modules and $Q$ a chain complex of left $R$-modules. Define $(P\otimes_RQ)_n=\bigoplus_{p+q=n}P_p\otimes_RQ_q$, the direct sum over the degree-$n$ diagonal, and $d(p\otimes q)=d_Pp\otimes q+(-1)^pp\otimes d_Qq$.

### Reused `lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 6be50d91630d781e35d5d44a0c2ad3cb452cdf50f33325ca620733f0448cdeb1.

Declared deps: def-tensor-product-total-complex-of-chain-complexes, def-balanced-and-bilinear-maps.

## Statement

Let $P$ be a chain complex of right $R$-modules and $Q$ a chain complex of left $R$-modules.  On the finite-diagonal total module $\operatorname{Tot}(P\otimes_RQ)$, the formula $d(p\otimes q)=d_Pp\otimes q+(-1)^pp\otimes d_Qq$ is balanced and satisfies $d^2=0$.

### Reused `def-tor-by-resolving-the-left-module`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 a2bac242b85044cc959f64df3a72815f299bdbc3ee322b3639c96427540031fe.

Declared deps: def-tensor-product-total-complex-of-chain-complexes, def-projective-resolution-in-an-abelian-category.

## Definition

For a right $R$-module $N$ and a left $R$-module $M$ with projective resolution $P\to M$, set $\operatorname{Tor}^R_n(N,M)=H_n(N\otimes_RP)$.

### Reused `def-tor-by-resolving-the-right-module`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 f6c759a32291227c16c2a8da2a6f67400989ae43947b25d7b0b479e7ce8c7958.

Declared deps: def-tensor-product-total-complex-of-chain-complexes, def-projective-resolution-in-an-abelian-category.

## Definition

For a right $R$-module $N$ with a specified projective resolution
$Q_\bullet\twoheadrightarrow N$ and a left $R$-module $M$, define the
right-resolution construction
$$\operatorname{Tor}^{R,Q}_n(N,M):=H_n(Q_\bullet\otimes_RM).$$
The datum $Q$ remains in the notation until the balance and change-of-resolution
results prove that it may be suppressed.

### Reused `prop-tor-zero-is-the-tensor-product-in-either-construction`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 27c7a415306ccc9a9ae3b5045109fc98140f4f9143ccb6fb0d07d962d51ecaab.

Declared deps: def-tor-by-resolving-the-left-module, def-tor-by-resolving-the-right-module, thm-right-exactness-of-tensor-products.

## Statement

For a right $R$-module $N$ and a left $R$-module $M$, both resolution constructions give $\operatorname{Tor}^R_0(N,M)\cong N\otimes_RM$.

### Reused `prop-each-tor-construction-is-covariant-in-both-variables`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 6902b4fae8c0a99251f51917ef8481e3cdc00dd255cb8e36abdf324e9ea386f5.

Declared deps: def-tor-by-resolving-the-left-module, def-tor-by-resolving-the-right-module, thm-projective-comparison-map-exists, thm-projective-comparison-maps-are-unique-up-to-chain-homotopy.

## Statement

The homology groups obtained by resolving either variable define covariant functors of the right module $N$ and the left module $M$.

### Reused `prop-positive-tor-vanishes-when-the-resolved-variable-is-projective`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 10a64799ace4ef708cb882375f4a85f8e247e871993edcd2e0acfd10cc94de0f.

Declared deps: def-tor-by-resolving-the-left-module, def-tor-by-resolving-the-right-module.

## Statement

If the variable being resolved is projective, its resolution-defined $\operatorname{Tor}^R_i$ vanishes for every $i>0$.

### Reused `def-tensor-double-complex-of-two-projective-resolutions`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 b3904e49179b69038ce7fe2f6eba941a992b2b90d7015901a8f9e3a7597770b7.

Declared deps: def-tensor-product-total-complex-of-chain-complexes, def-projective-resolution-in-an-abelian-category.

## Definition

Let $Q_\bullet\twoheadrightarrow N$ be a projective resolution of a right
$R$-module and $P_\bullet\twoheadrightarrow M$ a projective resolution of a
left $R$-module.  Their tensor double complex is
$K_{p,q}=Q_p\otimes_RP_q$ for $p,q\geq0$, with horizontal differential
$d_Q\otimes1$ and vertical differential $(-1)^p1\otimes d_P$ on the
$p$th column.  Its total complex uses
$\operatorname{Tot}_nK=\bigoplus_{p+q=n}K_{p,q}$; every diagonal is finite.

### Reused `def-left-and-right-flat-modules-over-an-arbitrary-ring`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 6aefe27fb353df1e4dd100ec8a8808e631c9ac6f817055735a2c682ff6054f5c.

Declared deps: def-exact-and-short-exact-sequences-of-modules, def-tensor-product-of-modules-by-generators-and-relations.

## Definition

A left $R$-module $M$ is flat when $-\otimes_RM$ is exact on right $R$-modules; a right $R$-module $N$ is flat when $N\otimes_R-$ is exact on left $R$-modules.

### Reused `lem-projective-modules-are-flat-over-an-arbitrary-ring`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 da4dd1ab538d041549bf066bb2519a08a5f013b8d64f2be2bf555e6902178950.

Declared deps: def-left-and-right-flat-modules-over-an-arbitrary-ring, thm-projective-module-characterizations, thm-tensor-products-commute-with-arbitrary-direct-sums.

## Statement

Every projective left or right module over an arbitrary ring is flat on its appropriate side.

### Reused `rem-projective-modules-are-flat-is-supplied-by-mod-three`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 df5e63ae8dd3f6c23fdc9108873add21e4956f6953e2dab2f8875c5647140d90.

Declared deps: def-flat-and-faithfully-flat-modules-and-ring-maps, thm-projective-modules-are-flat, lem-projective-modules-are-flat-over-an-arbitrary-ring.

## Definition

The earlier flatness result treats modules over a commutative ring, where the
two handedness conventions coincide.  The balance argument here instead needs
both statements: a projective right module makes $Q\otimes_R-$ exact, and a
projective left module makes $-\otimes_RP$ exact.  The preceding lemma records
that arbitrary-ring version; this remark adds no second proof of it.

### Reused `lem-the-rows-of-the-augmented-tensor-double-complex-are-exact`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 e2133c5de949e653d70449cfaac444c190430f2b28f8521d6609127d62036da5.

Declared deps: def-tensor-double-complex-of-two-projective-resolutions, lem-projective-modules-are-flat-over-an-arbitrary-ring.

## Statement

If $Q_\bullet\twoheadrightarrow N$ and $P_\bullet\twoheadrightarrow M$ are projective resolutions, every augmented row $Q_p\otimes_RP_\bullet\to Q_p\otimes_RM$ is exact.

### Reused `lem-the-columns-of-the-augmented-tensor-double-complex-are-exact`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 8f40498bf6e5b2a13fc3595dd8258858a1e9d27059facd1cbfc198a26b4ff302.

Declared deps: def-tensor-double-complex-of-two-projective-resolutions, lem-projective-modules-are-flat-over-an-arbitrary-ring.

## Statement

For the same two projective resolutions, every augmented fixed-$q$ row
$Q_\bullet\otimes_RP_q\to N\otimes_RP_q$ is exact.

### Reused `thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 874984c76ba418ddf4a310a73112b55494f3b3ce7f0d169778b273faf4799d93.

Declared deps: def-tor-by-resolving-the-left-module, def-tor-by-resolving-the-right-module, lem-the-rows-of-the-augmented-tensor-double-complex-are-exact, lem-the-columns-of-the-augmented-tensor-double-complex-are-exact, def-tensor-double-complex-of-two-projective-resolutions, thm-projective-comparison-map-exists, thm-projective-comparison-maps-are-unique-up-to-chain-homotopy, thm-long-exact-sequence-in-homology.

## Statement

Assume the Axiom of Dependent Choice. For every right $R$-module $N$ and left
$R$-module $M$ with supplied projective resolutions $Q_\bullet\to N$ and
$P_\bullet\to M$, there is a natural isomorphism
$H_i(N\otimes_RP_\bullet)\cong H_i(Q_\bullet\otimes_RM)$.

### Reused `prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 999d65fcd63e7722ca69fea739e5de6f8f53819e7aa8338096b9b6d00db88f8f.

Declared deps: thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic, thm-projective-comparison-maps-are-unique-up-to-chain-homotopy.

## Statement

The balance isomorphisms for Tor commute with maps of modules and with replacement of either projective resolution.

### Reused `def-balanced-tor-bifunctor`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 1175a669508d73d73f7181b25901e494e898176463aec1e4c4429cbff232ee18.

Declared deps: thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic, prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions.

## Definition

For a right $R$-module $N$, a left $R$-module $M$, and $i\geq0$, define
$\operatorname{Tor}_i^R(N,M)$ to be either $H_i(N\otimes_RP_\bullet)$ for a
projective resolution of $M$ or $H_i(Q_\bullet\otimes_RM)$ for a projective
resolution of $N$, identified by the preceding natural balance isomorphism.
On maps it uses the homology maps induced by comparison maps; coherence makes
this a well-defined covariant bifunctor.

### Reused `thm-long-exact-tor-sequence-in-the-left-module-variable`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 fa127e77ed5983b9d36811a7db3adeed5a69e088e751c9d3fe56a455fcf46eb7.

Declared deps: def-balanced-tor-bifunctor, thm-horseshoe-lemma-for-projective-resolutions, thm-long-exact-sequence-in-homology.

## Statement

Assume the Axiom of Dependent Choice.
For $0\to M^\prime\to M\to M^{\prime\prime}\to0$ of left $R$-modules and a right module $N$, there is the natural long exact sequence $\cdots\to\operatorname{Tor}_i(N,M^\prime)\to\operatorname{Tor}_i(N,M)\to\operatorname{Tor}_i(N,M^{\prime\prime})\to\operatorname{Tor}_{i-1}(N,M^\prime)\to\cdots$.

### Reused `thm-long-exact-tor-sequence-in-the-right-module-variable`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 ca53be2f4915615fca2ae2bc6c4465af154fb831013650b96190c2c35fa1ea34.

Declared deps: def-balanced-tor-bifunctor, thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic, thm-long-exact-tor-sequence-in-the-left-module-variable.

## Statement

For $0\to N^\prime\to N\to N^{\prime\prime}\to0$ of right modules and a left module $M$, there is the corresponding natural long exact Tor sequence.

### Reused `prop-tor-dimension-shifting`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 ba195fe253598027ca34dc1d79d52c316fbbbe76d207129a99bc587c32ab907f.

Declared deps: thm-long-exact-tor-sequence-in-the-left-module-variable, thm-long-exact-tor-sequence-in-the-right-module-variable, prop-positive-tor-vanishes-when-the-resolved-variable-is-projective.

## Statement

If $0\to K\to P\to M\to0$ is exact with $P$ projective, then for $i\ge1$, $\operatorname{Tor}_{i+1}^R(N,M)\cong\operatorname{Tor}_i^R(N,K)$; similarly in the right variable.

### Reused `thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 0a47d6825d6ac36e520115d8e9e483a491d76cecd04bb495bfe4c9836c9dbe84.

Declared deps: def-left-and-right-flat-modules-over-an-arbitrary-ring, def-tor-by-resolving-the-right-module, thm-horseshoe-lemma-for-projective-resolutions, thm-long-exact-sequence-in-homology, def-balanced-tor-bifunctor, thm-universal-property-of-module-tensor-products.

## Statement

Assume the Axiom of Dependent Choice and supplied projective-resolution data.
A left $R$-module $M$ is flat if and only if $\operatorname{Tor}_1^R(N,M)=0$ for every right $R$-module $N$.

### Reused `thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 338eab531d7de685051b3e8706717c32cdf3b698318f6926af663377f132de04.

Declared deps: def-left-and-right-flat-modules-over-an-arbitrary-ring, def-tor-by-resolving-the-left-module, thm-long-exact-tor-sequence-in-the-left-module-variable, def-balanced-tor-bifunctor, thm-universal-property-of-module-tensor-products.

## Statement

Assume the Axiom of Dependent Choice and supplied projective-resolution data.
A right $R$-module $N$ is flat if and only if $\operatorname{Tor}_1^R(N,M)=0$ for every left $R$-module $M$.

### Reused `cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 cd652fb9597b73053b88eb597abc46dda063fa06eab25bed5a39a19bfc0ead7d.

Declared deps: thm-long-exact-tor-sequence-in-the-left-module-variable.

## Statement

For $0\to A\to B\to C\to0$ of left modules and a right module $N$, the sequence $0\to N\otimes A\to N\otimes B\to N\otimes C\to0$ is exact exactly when the boundary map $\operatorname{Tor}_1^R(N,C)\to N\otimes_RA$ is zero.

### Reused `thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 185d8f94f3240ddcc5a63d2900471598f3372ca0a480aebc2665128bcff5419a.

Declared deps: def-balanced-tor-bifunctor, def-projective-resolution-in-an-abelian-category.

## Statement

For an abelian group $M$ and $n\ge1$, $\operatorname{Tor}^{\mathbb Z}_1(\mathbb Z/n,M)\cong\{m\in M:nm=0\}$.

### Reused `thm-tor-of-two-cyclic-abelian-groups`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 80fbbd8c997ede30bc82f93c3feabdc95852f94e77f3e604f323d310bf8fea79.

Declared deps: thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion.

## Statement

For positive integers $m,n$, $\operatorname{Tor}^{\mathbb Z}_1(\mathbb Z/m,\mathbb Z/n)\cong\mathbb Z/\gcd(m,n)$.

### Reused `thm-higher-tor-over-the-integers-vanishes`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 89da9b23166415ae2a86e9cb8143c61ad6350552395c4865a476b9d140e3ceb1.

Declared deps: def-balanced-tor-bifunctor, thm-the-integers-have-global-dimension-one.

## Statement

For abelian groups $A,B$, $\operatorname{Tor}^{\mathbb Z}_i(A,B)=0$ for $i\ge2$.

### Reused `prop-torsion-free-abelian-groups-are-flat`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 4a8c40d80bbfaa490db532b5ab0173d39f417ce93f666d34ba76d03968e934d3.

Declared deps: def-left-and-right-flat-modules-over-an-arbitrary-ring, thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes, thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion.

## Statement

Every torsion-free abelian group is a flat $\mathbb Z$-module.

### Reused `thm-over-a-pid-flat-is-equivalent-to-torsion-free`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 f5588749b82e5bc7582419bab44e5f5bb74206af51739d3a12eabf1d5ece853f.

Declared deps: def-principal-ideal-domain, prop-torsion-free-abelian-groups-are-flat, def-left-and-right-flat-modules-over-an-arbitrary-ring.

## Statement

Over a principal ideal domain $R$, an $R$-module is flat if and only if it is torsion-free.

### Reused `thm-tor-symmetry-over-a-commutative-ring`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 d7dd199cfcaa197a271df4ecde9fb33bf361223598216ae48febccf5983575ed.

Declared deps: def-balanced-tor-bifunctor, def-tor-by-resolving-the-left-module, def-tor-by-resolving-the-right-module, thm-symmetry-and-associativity-over-a-commutative-ring.

## Statement

If $R$ is commutative and $M,N$ are $R$-modules, then $\operatorname{Tor}^R_i(M,N)\cong\operatorname{Tor}^R_i(N,M)$ naturally.

### Reused `def-flat-dimension-of-a-module`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 fa62b6832d4324feeefce1c40499c3a336e0cd6c232caf333a6b00c8625f0c89.

Declared deps: def-left-and-right-flat-modules-over-an-arbitrary-ring.

## Definition

For a left $R$-module $M$, its flat dimension $\operatorname{fd}_R M$ is the
least $n\geq0$ for which there is an exact sequence
$$0\to F_n\to\cdots\to F_0\to M\to0$$
with every $F_j$ flat; it is $\infty$ if no such $n$ exists.  The right flat
dimension is defined with right modules and the same convention.

### Reused `thm-flat-dimension-at-most-n-iff-higher-tor-vanishes`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 c69be35d7f964fcb0da8384de68f224c7050704a820cb190a862bcc155106aab.

Declared deps: def-flat-dimension-of-a-module, prop-tor-dimension-shifting, def-balanced-tor-bifunctor, thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes, thm-long-exact-tor-sequence-in-the-left-module-variable.

## Statement

Assume the Axiom of Dependent Choice and supplied projective-resolution data.
For a left $R$-module $M$ and $n\ge0$, $\operatorname{fd}_R M\le n$ if and only if $\operatorname{Tor}^R_i(N,M)=0$ for every right module $N$ and every $i>n$.

### Reused `def-left-and-right-weak-global-dimension`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 55fc9a2b0d6190ec2f9aa3e7f963baefec524811feccebf269a79aceb898ade0.

Declared deps: def-flat-dimension-of-a-module.

## Definition

The left weak global dimension of $R$ is
$\sup\{\operatorname{fd}_R M:M\text{ a left }R\text{-module}\}$, and the
right weak global dimension is the analogous supremum over right modules.
The supremum is allowed to be $\infty$.

### Reused `prop-weak-global-dimension-is-at-most-corresponding-global-dimension`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 32e7b5345655cfe90e4e139280efea7e07b52e4ec734aaea06873aa86ef60727.

Declared deps: def-left-and-right-weak-global-dimension, lem-projective-modules-are-flat-over-an-arbitrary-ring, def-left-and-right-global-dimension-of-a-ring.

## Statement

The left and right weak global dimensions of a ring are at most the corresponding global dimensions.

### Reused `thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 5f138ecd4eaae2f32b7ebdd19c8c64824fb7813a23f4350b054378301ad4e60d.

Declared deps: def-left-and-right-weak-global-dimension, thm-flat-dimension-at-most-n-iff-higher-tor-vanishes, thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic, def-balanced-tor-bifunctor, def-opposite-ring, thm-universal-property-of-module-tensor-products.

## Statement

Assume Dependent Choice, and fix supplied projective resolution data for all left and right modules over the unital ring $R$. Then
$$\operatorname{w.gl.dim}_{\mathrm{left}}R=\operatorname{w.gl.dim}_{\mathrm{right}}R=\sup\{i\geq0:\operatorname{Tor}_i^R(N,M)\ne0\text{ for some right }N\text{ and left }M\}.$$
All suprema are taken in $\mathbb N\cup\{\infty\}$; in particular the supremum of the empty set is $0$.

### Reused `prop-semisimple-rings-have-vanishing-positive-tor-and-ext`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 fc32e21d41f254997baf9bc9ea40c30bf03db5fe3f9188fdbc7feadcc6d8830d.

Declared deps: def-balanced-tor-bifunctor, thm-equivalent-characterizations-of-semisimple-rings, def-balanced-ext-bifunctor.

## Statement

If $R$ is semisimple, then $\operatorname{Tor}^R_i(N,M)=0$ and $\operatorname{Ext}^i_R(M,X)=0$ for every $i>0$.

### Reused `prop-the-integers-have-weak-and-global-dimension-one`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 9b4a2d7bedeb4a37666be2d48cd5b45a113eaf8ef45cc76382efe45a4bb1d700.

Declared deps: thm-the-integers-have-global-dimension-one, thm-higher-tor-over-the-integers-vanishes, thm-over-a-pid-flat-is-equivalent-to-torsion-free.

## Statement

Both weak global dimension and global dimension of $\mathbb Z$ are $1$.

### Reused `fs-tor-takes-two-left-modules-over-an-arbitrary-ring`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 cd1dacd06096449c77b1979e72a409473bc1fe6781bde3ac7b94819476218379.

Declared deps: def-tor-by-resolving-the-left-module.

## Statement

False claim: for every noncommutative ring $R$, $\operatorname{Tor}^R_i(M,N)$ is defined for two left $R$-modules $M,N$.

### Reused `fs-the-two-tor-constructions-are-equal-by-definition`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 df52dc89b087bfb4165ba04b9b9024af59eece2e0b6529bd12c5962ebda8745d.

Declared deps: thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic.

## Statement

False claim: resolving the left and resolving the right variable produce literally equal Tor complexes by definition.

### Reused `fs-flat-modules-have-projective-dimension-zero`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 a0a33eb32240d1186b3fe359f2d56d6b5bbc6450b36baa90130cc461e349cc6e.

Declared deps: def-left-and-right-flat-modules-over-an-arbitrary-ring, def-projective-dimension-of-an-object.

## Statement

False claim: every flat module has projective dimension zero.

### Reused `fs-tor-one-vanishes-only-when-one-module-is-projective`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 8b39fbf9952e93a2384fa38a06feb5841cbd08bc59cc6cb14cafa3daf9715244.

Declared deps: thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes.

## Statement

False claim: $\operatorname{Tor}_1^R(N,M)=0$ can occur only when $N$ or $M$ is projective.

### Reused `fs-tor-is-symmetric-over-every-noncommutative-ring`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 a72f12fe31f7b95a0e2443802a3ddac8ce9b2a737fbba2ccaa5764cef4e85485.

Declared deps: thm-tor-symmetry-over-a-commutative-ring, def-tor-by-resolving-the-left-module.

## Statement

False claim: Tor is a symmetric bifunctor of two left modules over every ring.

### Reused `fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 d4f07fa6e4cd5b3a60aedb3a445da37446966fc02b4a60cccf8157d02a374cba.

Declared deps: thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion, def-balanced-tor-bifunctor.

## Statement

False claim: for every ideal $I\triangleleft R$, $\operatorname{Tor}_1^R(R/I,M)$ equals $\{m\in M:Im=0\}$.

### Reused `ex-tor-of-two-cyclic-groups-from-a-two-term-resolution`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 85b99d37cd71ad19ff6d5e3699f0bb9effdf8d0a35911d0507b04fb493c07e1a.

Declared deps: thm-tor-of-two-cyclic-abelian-groups.

## Example

Compute $\operatorname{Tor}^{\mathbb Z}_1(\mathbb Z/12,\mathbb Z/18)\cong\mathbb Z/6$.

### Reused `ex-tor-detects-n-torsion`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 5bffad91967905bcdf8ebbae9b138b2866b65a25d3f7eedd3d266367f820e72d.

Declared deps: thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion.

## Example

For $M=\mathbb Z/12$ and $n=8$, $\operatorname{Tor}^{\mathbb Z}_1(\mathbb Z/8,M)\cong\mathbb Z/4$.

### Reused `ex-a-flat-nonprojective-module`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 26011d30be1d683e73a29e12953c19c00f61cc69dc529d033e89ed4f79828278.

Declared deps: def-left-and-right-flat-modules-over-an-arbitrary-ring, fs-flat-modules-have-projective-dimension-zero.

## Example

The $\mathbb Z$-module $\mathbb Q$ is flat but not projective.

### Reused `ex-localization-is-flat-and-has-vanishing-positive-tor`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 07fdc1f3592b44364069d4d67eba0805fc3efd8f62d05d23f9713729644ffcd1.

Declared deps: thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes, def-left-and-right-flat-modules-over-an-arbitrary-ring.

## Example

For $S=\{2^k:k\ge0\}$, the localization
$S^{-1}\mathbb Z=\mathbb Z[1/2]$ is flat and, for every abelian group $N$,
$\operatorname{Tor}^{\mathbb Z}_i(N,\mathbb Z[1/2])=0$ for every $i>0$.

### Reused `ex-the-tensor-double-complex-in-low-degrees`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 43b60726fd064549c317d72d560c0766da858df7382124798bb58d18d2aa291b.

Declared deps: def-tensor-double-complex-of-two-projective-resolutions.

## Example

Let $m,n\geq1$ be integers. Label the resolutions $Q$ and $P$, respectively, in the order $0\to\mathbb Z\xrightarrow m\mathbb Z\to\mathbb Z/m\to0$ and $0\to\mathbb Z\xrightarrow n\mathbb Z\to\mathbb Z/n\to0$. Their tensor double complex has $K_{0,0}=K_{1,0}=K_{0,1}=K_{1,1}=\mathbb Z$ and all other terms zero.

### Reused `ex-tor-symmetry-over-a-commutative-ring`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 6c7ad90f25f677aa2fe6c83670c5c9e0f7525495a28ef85504715f7b249fbc38.

Declared deps: thm-tor-symmetry-over-a-commutative-ring.

## Example

Over $R=\mathbb Z$, $\operatorname{Tor}^{\mathbb Z}_1(\mathbb Z/4,\mathbb Z/6)\cong\operatorname{Tor}^{\mathbb Z}_1(\mathbb Z/6,\mathbb Z/4)\cong\mathbb Z/2$.

### Reused `cex-a-noncommutative-handedness-error-in-tor`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 6d39c0a19a4b5ec4c5f4baeb7de57f3be9255b5ca11ff23ecf97f3caa0944840.

Declared deps: fs-tor-takes-two-left-modules-over-an-arbitrary-ring.

## Statement refuted

Let $R=M_2(k)$ and let $V=k^2$ be supplied only as the usual left column
$R$-module. Two copies of the supplied left module ${}_RV$ do not by themselves
provide an expression ${}_RV\otimes_R{}_RV$ or
$\operatorname{Tor}^R_i({}_RV,{}_RV)$.

### Reused `ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers`

Published interface retained; no permission to alter its statement, hypotheses, proof or status. SHA-256 20debac84c83288ce6414bd1a8bad1aeb0632cb8829cd68dd2ee809b2f060257.

Declared deps: prop-the-integers-have-weak-and-global-dimension-one, thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric.

## Example

For a field $k$, both dimensions are $0$; for $\mathbb Z$, both weak and global dimension are $1$.

### Planned `def-increasing-and-decreasing-filtration-of-an-object`

In an abelian category supply monomorphisms F_p A into A increasing in p; decreasing filtrations use F^p and F^p=F_{-p}. Indexing is by the set Z; all constructions are on supplied objects, not chosen representatives of every subobject class.

Deps: def-subobject-and-quotient-object, def-abelian-category.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `def-exhaustive-separated-bounded-and-finite-filtration`

Exhaustive means the union is A and separated means the intersection is zero, whenever these exist. Bounded means F_a A=0 and F_b A=A for some integers a<b. For complexes these bounds may depend on degree; uniform bounds are a stronger condition. Finite filtration includes both endpoint conditions, not merely finitely many distinct subobjects.

Deps: def-increasing-and-decreasing-filtration-of-an-object.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `def-associated-graded-object-of-a-filtered-object`

gr_p A=F_p A/F_{p-1} A; quotient as cokernel of the specified inclusion. No implicit infinite direct sum in an arbitrary abelian category.

Deps: def-increasing-and-decreasing-filtration-of-an-object, def-the-quotient-of-an-object-by-a-subobject.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `lem-associated-graded-quotients-are-well-defined-subquotients`

Show F_{p-1}→F_p is monic by the given inclusions into A; its cokernel defines gr_p independently up to the unique compatible isomorphism.

Deps: def-associated-graded-object-of-a-filtered-object, thm-the-quotient-is-independent-of-the-representing-monomorphism.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `def-filtered-chain-complex`

Each F_p C is a subcomplex; in modules d(F_p C_n) is contained in F_p C_{n-1}. Degree of d is -1.

Deps: def-increasing-and-decreasing-filtration-of-an-object, def-chain-complex-in-an-abelian-category.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `def-filtered-chain-map`

A chain map f:C→D with f(F_p C_n) contained in F_p D_n for every p,n. Composition and identities retain these inclusions.

Deps: def-filtered-chain-complex, def-chain-map.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `prop-the-associated-graded-of-a-filtered-complex-is-a-bigraded-complex`

The quotient differential d^0 acts on E^0_{p,q}=gr_p C_{p+q}, with bidegree (0,-1). Factor through the quotient and use d²=0.

Deps: lem-associated-graded-quotients-are-well-defined-subquotients, def-filtered-chain-complex.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `def-induced-filtration-on-homology`

F_p H_n(C)=image(H_n(F_p C)→H_n(C)). Prove the images are increasing; do not identify the image with the source.

Deps: def-filtered-chain-complex, thm-a-chain-map-induces-a-well-defined-map-on-homology.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `lem-the-associated-graded-of-filtered-homology-is-a-subquotient-of-chain-level-data`

Writing Z_n=ker d_n and B_n=im d_{n+1}, gr_p H_n is canonically (F_p C_n∩Z_n)/[(F_{p-1} C_n∩Z_n)+(F_p C_n∩B_n)]. Use the image/quotient isomorphisms and modular subobject law.

Deps: def-induced-filtration-on-homology, def-homology-object-of-a-chain-complex, thm-third-isomorphism-theorem-in-an-abelian-category, thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex`

Use the RAW convention A^r_{p,n}=F_p C_n∩d_n^{-1}(F_{p-r} C_{n-1}) for r≥0, so A^0=F_p C_n. Define Z^0=F_p C_n, B^0=F_{p-1} C_n. For r≥1 set Z^r_{p,q}=A^r_{p,p+q} and B^r_{p,q}=A^{r-1}_{p-1,p+q}+d(A^{r-1}_{p+r-1,p+q+1}). All are subobjects of F_p C_{p+q}. This is the chain-level quotient form of Weibel 5.4.6 and the reindexing of Sharifi 4.2.2; their Z,B inside gr are different notation. Print the correspondence.

Deps: def-filtered-chain-complex, thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice, def-the-direct-image-and-inverse-image-of-a-subobject.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `lem-r-boundaries-embed-in-r-cycles`

For r≥1 the first denominator summand differentiates into F_{p-r}; the second consists of actual boundaries in F_p and has differential zero. Thus B^r⊆Z^r. Handle r=0 by filtration inclusion. No quotient is formed before this check.

Deps: def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `def-r-page-of-the-spectral-sequence-of-a-filtered-complex`

E^r_{p,q}=Z^r_{p,q}/B^r_{p,q}, using the preceding RAW convention. State r=0 separately. Supply the quotient maps and identify the formula with the graded-subobject convention; never put raw and graded Z,B in one formula.

Deps: lem-r-boundaries-embed-in-r-cycles, lem-associated-graded-quotients-are-well-defined-subquotients.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `lem-the-filtered-differential-induces-d-r-on-the-r-page`

d sends A^r_{p,n} into A^r_{p-r,n-1}. It sends A^{r-1}_{p-1,n} into the target denominator summand d A^{r-1}_{p-1,n}, and kills d A^{r-1}_{p+r-1,n+1}. Hence it descends; r=0 uses the quotient differential.

Deps: def-r-page-of-the-spectral-sequence-of-a-filtered-complex, thm-chasing-rule-exactness-detected-by-members.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `prop-the-rth-differential-has-bidegree-minus-r-r-minus-one`

d^r:E^r_{p,q}→E^r_{p-r,q+r-1}. Verify total degree drops by one, including r=0.

Deps: lem-the-filtered-differential-induces-d-r-on-the-r-page.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `lem-the-rth-differential-squares-to-zero`

The induced square is zero because it is induced by d²; use the epimorphism from representatives to the quotient to conclude equality of morphisms.

Deps: lem-the-filtered-differential-induces-d-r-on-the-r-page.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `thm-the-next-page-is-the-homology-of-the-current-page`

Construct the natural isomorphism E^{r+1}→ker d^r/im d^r via inclusion A^{r+1}⊆A^r. Surjectivity: if dx=dz+u with z∈A^{r-1}_{p-1,n} and u∈A^{r-1}_{p-r-1,n-1}, replace x by x-z. Kernel: if x=v+dw+dy is a boundary modulo B^r, combine w∈A^r_{p+r,n+1} with y∈A^{r-1}_{p+r-1,n+1}; x∈A^{r+1} forces v∈A^r_{p-1,n}. The kernel is A^r_{p-1,n}+d A^r_{p+r,n+1}=B^{r+1}. Treat r=0 directly by kernels and images of d^0. Use finite epic covers for representatives in a general abelian category, rather than an unproved module embedding.

Deps: lem-the-rth-differential-squares-to-zero, thm-third-isomorphism-theorem-in-an-abelian-category, thm-chasing-rule-exactness-detected-by-members.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `prop-e-zero-is-the-associated-graded-complex`

At page zero the definition is exactly the associated graded complex; no d-lowering hypothesis beyond filtration preservation.

Deps: prop-the-associated-graded-of-a-filtered-complex-is-a-bigraded-complex, def-r-page-of-the-spectral-sequence-of-a-filtered-complex.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `prop-e-one-is-homology-of-the-associated-graded-complex`

E^1_{p,q}=H_{p+q}(gr_p C), naturally, from the r=0 case of the next-page theorem.

Deps: thm-the-next-page-is-the-homology-of-the-current-page, prop-e-zero-is-the-associated-graded-complex.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `def-limiting-cycles-boundaries-and-e-infinity`

For raw A^r at a fixed p,n, under degreewise boundedness take the eventual value. Alternatively define graded cycles as images of A^r in gr_p and graded boundaries as images of d A^{r-1}_{p+r-1} in gr_p; these are nested. Define limiting intersection/union only when they exist as subobjects; bounded cases are eventually finite. Do not take union of RAW B^r, which need not be increasing.

Deps: def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex, def-r-page-of-the-spectral-sequence-of-a-filtered-complex, def-exhaustive-separated-bounded-and-finite-filtration.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `def-homological-spectral-sequence`

An abstract homological spectral sequence starts at a supplied r0≥0 and consists of bigraded objects, square-zero d^r of degree (-r,r-1), and specified isomorphisms H(E^r)→E^{r+1}. Isomorphisms are data, not merely existence statements.

Deps: def-homology-object-of-a-chain-complex.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `def-cohomological-spectral-sequence`

Cohomological d_r has degree (r,1-r), with the same next-page data; reindex E_r^{p,q}=E^r_{-p,-q}.

Deps: def-homological-spectral-sequence.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `def-morphism-of-spectral-sequences`

Maps specified from a declared page r1 onward commute with differentials and the chosen next-page isomorphisms; identities and compositions are componentwise.

Deps: def-homological-spectral-sequence, def-cohomological-spectral-sequence.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences`

A filtered chain map preserves both numerator and denominator and hence all pages. It commutes with d^r and with the representative-based next-page isomorphisms. Include identity/composition and naturality of induced homology filtrations.

Deps: def-filtered-chain-map, thm-the-next-page-is-the-homology-of-the-current-page, def-morphism-of-spectral-sequences.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `def-spectral-sequence-stabilization-at-a-bidegree`

At a fixed bidegree both incoming and outgoing differentials vanish for all sufficiently large r; use the specified next-page data for stable identifications. Abstractly isomorphic page groups alone do not ensure stabilization.

Deps: def-homological-spectral-sequence.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `def-collapse-at-a-page`

Collapse (also called degeneration here) at r0 means every d^r for r≥r0 is zero in every bidegree. Distinguished from one zero differential and from Weibel 5.2.7’s narrower single-line terminology.

Deps: def-spectral-sequence-stabilization-at-a-bidegree.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `prop-degree-reasons-force-stabilization-in-a-bounded-region`

If E^{r0} has finite support on every total-degree diagonal, each fixed (p,q) stabilizes: incoming/outgoing endpoints run through the finite supports of degrees p+q+1 and p+q-1. First- and third-quadrant support are special cases. This is pointwise in bidegree, not a uniform page across all degrees, and uses finite reasoning only.

Deps: def-spectral-sequence-stabilization-at-a-bidegree.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `prop-a-spectral-sequence-supported-in-one-row-or-column-collapses`

A single column on a page r0≥1 collapses from r0. A single row on r0≥2 collapses from r0. A single row on E^1 may support d^1 and is only forced to collapse at E^2. Include the analogous cohomological statement by reindexing.

Deps: def-collapse-at-a-page, prop-degree-reasons-force-stabilization-in-a-bounded-region.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `def-abutment-to-a-filtered-object`

A bounded abutment includes a degreewise finite filtration F on H and supplied isomorphisms E^∞_{p,q}≅gr_p H_{p+q}. This does not identify E^∞ with H. Define compatibility of a morphism with filtered targets when discussing naturality.

Deps: def-associated-graded-object-of-a-filtered-object, def-limiting-cycles-boundaries-and-e-infinity.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`

For every degreewise bounded filtered chain complex in an abelian category, the sequence stabilizes at each bidegree and E^∞_{p,q}≅gr_p H_{p+q}(C), naturally. At n=p+q, bound n-1 to stabilize A^r, bound n+1 above to stabilize actual boundaries, and bound n to stabilize the lower filtration summand. Then apply item 9. No infinite convergence assertion and no uniform r across all n.

Deps: lem-the-associated-graded-of-filtered-homology-is-a-subquotient-of-chain-level-data, thm-the-next-page-is-the-homology-of-the-current-page, def-limiting-cycles-boundaries-and-e-infinity, prop-degree-reasons-force-stabilization-in-a-bounded-region, def-abutment-to-a-filtered-object.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence`

For a first-quadrant homological sequence from E^2, with normalized finite target filtration 0=F_{-1}H_n⊆...⊆F_n H_n=H_n, define E^2_{0,n}→E^∞_{0,n}=F_0H_n→H_n and H_n→H_n/F_{n-1}H_n=E^∞_{n,0}→E^2_{n,0}. The first is not generally onto H_n and the second not generally injective. Explain the source and target edge subquotients.

Deps: def-abutment-to-a-filtered-object, prop-degree-reasons-force-stabilization-in-a-bounded-region.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `lem-edge-homomorphisms-are-natural`

For a morphism of spectral sequences compatible with a supplied filtered target map, the two edge squares commute by naturality of the quotient and inclusion. Do not infer a target map from an abstract page map.

Deps: prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences, def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `def-extension-problem-of-a-convergent-spectral-sequence`

The successive graded pieces determine short exact extension problems; reconstructing H requires their classes. A vector-space splitting exists under the usual basis/choice convention, but is not canonical.

Deps: def-abutment-to-a-filtered-object, def-extension-of-an-object-by-an-object-in-an-abelian-category.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects`

Use Z/4 with 0⊂2Z/4⊂Z/4 and (Z/2)^2 with its first summand. Each has two graded pieces Z/2, but only the former has an element of order four. Place both in chain degree zero to obtain identical collapsed pages with different homology.

Deps: def-associated-graded-object-of-a-filtered-object, def-quotient-group.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `prop-collapse-does-not-in-general-split-the-abutment`

The preceding degree-zero complexes have every differential zero, so collapse cannot force the abutment filtration to split. Explicitly no section Z/2→Z/4 of reduction exists.

Deps: thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology, def-extension-problem-of-a-convergent-spectral-sequence, cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `thm-the-cohomological-filtered-complex-construction`

For a decreasing filtered cochain complex (C^n,F^p), set D_n=C^{-n} and G_pD_n=F^{-p}C^{-n}. Transport the entire construction: E_r^{p,q}=E^r_{-p,-q}, d_r degree (r,1-r), E_0=gr^p C^{p+q}, E_1=H^{p+q}(gr^p C), and bounded gr^p H^{p+q} abutment.

Deps: def-filtered-chain-complex, thm-the-next-page-is-the-homology-of-the-current-page, def-cohomological-spectral-sequence, thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology, def-cochain-complex-in-an-abelian-category.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `prop-shifting-a-filtered-complex-reindexes-its-spectral-sequence`

For the published chain shift C[k]_n=C_{n-k} with differential (-1)^k d and filtration G_p C[k]_n=F_{p-a}C_{n-k}, obtain E^r_{p,q}(C[k],G)≅E^r_{p-a,q+a-k}(C,F) with differential transported as (-1)^k d^r. Specify this as a reindexing with sign, not an unsigned spectral-sequence isomorphism; check next-page compatibility.

Deps: prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences, thm-the-cohomological-filtered-complex-construction, def-shift-of-a-chain-complex.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `fs-e-infinity-is-the-abutment-object`

Refute identifying E^∞ as the target by the order-four versus elementary-abelian filtered groups; it records only the graded pieces.

Deps: thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology, cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `fs-e-r-plus-one-is-literally-equal-to-the-homology-of-e-r`

Use tagged copies of the groups on successive pages with supplied isomorphisms. Literal equality of underlying sets is not forced by an isomorphism in the definition.

Deps: def-homological-spectral-sequence.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `fs-a-spectral-sequence-collapses-when-one-differential-is-zero`

Use the new A-page d² witness: C_1=Z x, C_0=Z y, dx=y, with filtration degree x=2 and y=0. d^0=d^1=0 but d^2 sends [x] to [y] isomorphically.

Deps: def-collapse-at-a-page.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `fs-collapse-solves-all-extension-problems`

Use the nonsplit order-four extension from the structural A-page counterexample; do not cite the B companion as a dependency.

Deps: prop-collapse-does-not-in-general-split-the-abutment.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `fs-the-filtration-on-homology-is-h-n-of-the-filtered-subcomplex`

Use C_1=Z x→C_0=Z y by identity with filtration degree x=1,y=0. H_0(F_0 C)=Z but H_0(C)=0 and F_0H_0=0. Write this witness inline, not by a cross-page B dependency.

Deps: def-induced-filtration-on-homology.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Planned `fs-e-zero-and-e-one-page-conventions-are-universal-across-sources`

Compare the declared E^0 associated-graded start with the convention that presents the first homology page as its initial data. A start index must be specified; this is a convention warning, not a claim that correctly reindexed sequences disagree mathematically.

Deps: prop-e-zero-is-the-associated-graded-complex, prop-e-one-is-homology-of-the-associated-graded-complex, def-homological-spectral-sequence.

Source: Weibel chapter 5 §§5.2, 5.4–5.5 (bounded part), with Sharifi §§4.1–4.2.3 control; exact harvest below. Statement literature-derived/ai-altered; proof ai-altered (definitions not-applicable). General-abelian arguments must use finite subobject calculus, and every infinite operation carries existence hypotheses.

### Additional source-harvested results

`lem-spectral-sequence-isomorphism-on-one-page-persists`: take homology of an isomorphism of complexes and use the supplied transition isomorphisms; induct on the page (Weibel Mapping Lemma 5.2.4; Sharifi Lemma 4.1.4).

`cex-filtered-two-term-complex-with-first-nonzero-differential-d-two`: use C_1=Z x→Z y=C_0 with dx=y, filtration weights 2,0. Only E^r_{2,-1} and E^r_{0,0} are Z through page 2, and d² is identity. E³=0. This is bounded, not first quadrant: the negative q is intentional. It licenses the A-page zero-differential warning without a B dependency. Explicit adaptation of the filtered construction, not a quoted example.

`thm-five-term-exact-sequence-of-a-first-quadrant-homological-spectral-sequence`: for a first-quadrant homological sequence starting at or before E² and normalized bounded abutment H, prove H_2→E²_{2,0}→E²_{0,1}→H_1→E²_{1,0}→0. The middle arrow is d². Identify E∞_{2,0}=ker d², E∞_{0,1}=coker d², E∞_{1,0}=E²_{1,0}; use the degree-one filtration short exact sequence and the top quotient of H_2. Weibel Exercise 5.1.3 and Sharifi Lemma 4.1.18, with cohomological-to-homological translation.

### Planned `ex-the-two-step-filtration-and-its-spectral-sequence`

Two-step filtered degree-zero Z/4; show all pages and the nonsplit two graded pieces.

Deps: thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology. Source: explicit specialization of Weibel 5.4.6/5.5.1 and Sharifi 4.2.2–4.2.3; source-derived/ai-altered, not a new theorem.

### Planned `ex-a-filtered-complex-collapsing-at-e-one`

Zero-differential complex Z in degrees 0,1 with filtration weights 0,1: E¹=E∞ and identify both homology groups.

Deps: prop-e-one-is-homology-of-the-associated-graded-complex, def-collapse-at-a-page. Source: explicit specialization of Weibel 5.4.6/5.5.1 and Sharifi 4.2.2–4.2.3; source-derived/ai-altered, not a new theorem.

### Planned `ex-a-nonzero-d-two-differential-in-a-small-filtered-complex`

Recompute the A-page weights-2,0 example; d² identity and acyclic abutment.

Deps: cex-filtered-two-term-complex-with-first-nonzero-differential-d-two. Source: explicit specialization of Weibel 5.4.6/5.5.1 and Sharifi 4.2.2–4.2.3; source-derived/ai-altered, not a new theorem.

### Planned `ex-edge-maps-from-a-first-quadrant-spectral-sequence`

Use a first-quadrant zero-differential complex with C_1=Z², one generator in filtration 0, the other in 1, and C_0=Z in filtration 0. Print both inclusion/projection edges and its five-term sequence.

Deps: thm-five-term-exact-sequence-of-a-first-quadrant-homological-spectral-sequence. Source: explicit specialization of Weibel 5.4.6/5.5.1 and Sharifi 4.2.2–4.2.3; source-derived/ai-altered, not a new theorem.

### Planned `ex-two-filtered-abelian-groups-with-the-same-associated-graded`

Compute the degree-zero order-four and elementary-abelian associated graded groups explicitly.

Deps: cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects. Source: explicit specialization of Weibel 5.4.6/5.5.1 and Sharifi 4.2.2–4.2.3; source-derived/ai-altered, not a new theorem.

### Planned `cex-collapse-with-a-nonsplit-extension-problem`

The order-four filtration has no splitting: every homomorphism Z/2→Z/4 lands in 2Z/4 and reduction kills it.

Deps: prop-collapse-does-not-in-general-split-the-abutment. Source: explicit specialization of Weibel 5.4.6/5.5.1 and Sharifi 4.2.2–4.2.3; source-derived/ai-altered, not a new theorem.

### Planned `ex-the-cohomological-reindexing-of-a-homological-spectral-sequence`

Translate the d² example by (p,q)→(-p,-q): nonzero cohomological d_2 from (-2,1) to (0,0), total degrees -1 and 0.

Deps: thm-the-cohomological-filtered-complex-construction. Source: explicit specialization of Weibel 5.4.6/5.5.1 and Sharifi 4.2.2–4.2.3; source-derived/ai-altered, not a new theorem.

## Required Tor repairs within the authorized scaffold

The following six additions fit before their consumers (47 A items total). They require canonical-plan insertion by its authorized writer. Manifest deps now describe the repaired intended scaffold; the earlier reproduced published interfaces remain the evidence of current defects. No published item has been repaired by this dispatch. Thus consumers remain BLOCKED until the changed dependencies and explicit axiom hypotheses are incorporated and reviewed. No additional A/B pair is required for these six repairs.

### Added `lem-tensor-over-an-arbitrary-ring-preserves-cokernels-in-both-variables`

For a unital ring R, fixed right N, and left A→B→C→0 exact, N⊗A→N⊗B→N⊗C→0 is exact in Ab; also with the sides reversed. Balanced maps out of N×B which kill N×im(A) factor uniquely through N×C. Thus the tensor cokernel has exactly the same universal property. No commutativity or choice. This replaces the inadequate commutative right-exactness supplier.

Deps: thm-universal-property-of-module-tensor-products.

### Added `lem-tensor-over-an-arbitrary-ring-commutes-with-direct-sums`

For set-indexed left modules M_i and right N, N⊗(⊕M_i)≅⊕(N⊗M_i), and the right-variable analogue. Construct inverse balanced maps by finite support and show both composites fix pure tensors. No commutativity, basis choice, or exactness of arbitrary coproducts in a general abelian category is assumed.

Deps: thm-universal-property-of-module-tensor-products.

### Added `lem-tensor-over-an-arbitrary-ring-commutes-with-filtered-colimits`

For a small filtered module diagram and a fixed module on the opposite side, the natural map colim(N⊗M_i)→N⊗colim(M_i) is an isomorphism. Compatible balanced maps at each stage are exactly balanced maps on the colimit. State the analogous right-variable assertion; target is Ab. This proves existence and uniqueness without silently importing a commutative theorem.

Deps: thm-universal-property-of-module-tensor-products.

### Added `lem-filtered-colimits-of-flat-modules-are-flat`

Tensor any short exact sequence of oppositely handed modules with the diagram of flat modules, then take its filtered colimit. Module AB5 supplies exactness; the preceding tensor-colimit lemma identifies the resulting three terms. Repeat for the other hand. No Tor or selected resolutions are needed.

Deps: lem-tensor-over-an-arbitrary-ring-commutes-with-filtered-colimits, thm-module-categories-are-grothendieck-categories, def-left-and-right-flat-modules-over-an-arbitrary-ring.

### Added `thm-supplied-flat-resolutions-compute-tor-in-either-variable`

Assume DC and supplied projective-resolution data. For a supplied nonnegative flat resolution F→M, Tor_i(N,M)≅H_i(N⊗F), and similarly resolving N flatly. Show positive Tor against a flat variable vanishes by resolving the other side and exactness. Degree zero is the cokernel lemma. For K=ker(F_0→M), the LES identifies Tor_1(N,M) with ker(N⊗K→N⊗F_0); right exactness expresses N⊗K as coker(N⊗F_2→N⊗F_1). For i≥2 use LES dimension shifting and induction on the tail. Naturality is for supplied maps of augmented flat resolutions, and canonical comparison with the fixed Tor bifunctor. Sources: Weibel Lemma 3.2.8; Sharifi Remark 3.5.11.

Deps: def-balanced-tor-bifunctor, thm-long-exact-tor-sequence-in-the-left-module-variable, thm-long-exact-tor-sequence-in-the-right-module-variable, thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes, thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes, prop-tor-dimension-shifting, lem-tensor-over-an-arbitrary-ring-preserves-cokernels-in-both-variables.

### Added `cor-flat-dimension-is-detected-by-tor-in-degree-n-plus-one`

Assume DC and supplied projective resolutions for the modules under discussion. For n≥0 and a left M, fd(M)≤n iff Tor_{n+1}(N,M)=0 for every right N; equivalently the nth syzygy in every supplied length-n partial flat resolution is flat (K_0=M). Both implications use repeated LES shifts against the flat middle terms; the converse truncates a supplied projective resolution at its flat nth syzygy. Repeat over R-op. This retains the single-degree and arbitrary-flat-syzygy clauses of Weibel Lemma 4.1.10 omitted from the published all-higher-degree statement.

Deps: thm-flat-dimension-at-most-n-iff-higher-tor-vanishes, prop-tor-dimension-shifting, thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes, thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes.

## Further retained source harvest

Three A results and three B computations preserve useful source calculations (Tor A now 50, B 11; spectral A 45, B 7). The ideal-restricted weak-dimension strengthening remains blocked on the prerequisite pair proposed below.

### Added `thm-tor-of-a-regular-principal-quotient`

For commutative unital R, a non-zero-divisor x, and any R-module M, the supplied resolution 0→R --x→R→R/(x)→0 yields Tor_0=M/xM, Tor_1=ker(x:M→M), and Tor_i=0 for i≥2. Identify both maps under R⊗M≅M using balanced universality; finite free terms are projective. The conclusion is natural in M; carry DC for the comparison with balanced Tor. Weibel Calculation 3.1.7.

Deps: def-balanced-tor-bifunctor, lem-tensor-over-an-arbitrary-ring-preserves-cokernels-in-both-variables.

### Added `thm-tor-one-of-two-ideal-quotients`

For commutative R and ideals I,J, assume DC and resolution data. The LES for 0→I→R→R/I→0 gives Tor_1(R/I,R/J)=ker(I⊗R/J→R/J). Prove I⊗R/J≅I/IJ by balanced universality and the cokernel lemma; the kernel is (I∩J)/IJ. All isomorphisms are natural for compatible ideal maps. This is Weibel Exercise 3.1.3, and supplies the nonprincipal-ideal warning.

Deps: thm-long-exact-tor-sequence-in-the-right-module-variable, prop-tor-zero-is-the-tensor-product-in-either-construction, prop-positive-tor-vanishes-when-the-resolved-variable-is-projective.

### Added `thm-tor-one-of-fraction-field-mod-ring-detects-torsion`

For a commutative domain R with fraction field K and module M, the LES for 0→R→K→K/R→0 identifies Tor_1(K/R,M) with ker(M→K⊗M), hence with elements killed by some nonzero scalar. Use the earlier published A theorem thm-localisations-are-flat. Explicitly use the localized zero criterion: m/1=0 iff some nonzero s kills m. In the integer case this gives Tor_1(Q/Z,M)=torsion(M). DC and supplied resolutions apply. Weibel Calculation 3.1.3 and Exercise 3.1.2.

Deps: thm-long-exact-tor-sequence-in-the-right-module-variable, thm-localisations-are-flat.

### Added `ex-periodic-tor-over-the-integers-modulo-m`

For m≥2 and a positive divisor d of m, put e=m/d and R=Z/m. The supplied resolution of R/(d) alternates multiplication by d and e, with d_1=d,d_2=e. Exactness follows from ann_R(d)=eR and ann_R(e)=dR by integer divisibility. For any R-module M, Tor_0=M/dM, Tor_{2j+1}=ker(d)/eM for j≥0, Tor_{2j}=ker(e)/dM for j≥1. For m=p²,d=p,M=F_p every tensor differential is zero; every Tor_i=F_p. Thus fd(F_p)=∞ and weak/global dimension of R is infinite (use the dimension criterion and fd≤pd). Weibel Calculation 3.1.6, Example 4.1.4 and 4.1.7.

Deps: def-balanced-tor-bifunctor, def-flat-dimension-of-a-module, thm-flat-dimension-at-most-n-iff-higher-tor-vanishes, prop-weak-global-dimension-is-at-most-corresponding-global-dimension.

### Added `ex-zero-divisors-correct-the-principal-quotient-tor-formula`

For commutative R and x, use 0→(x)→R→R/(x)→0. Since (x)≅R/ann(x), Tor_1(R/(x),M)=ker(x:M/ann(x)M→M)=M[x]/ann(x)M. Here ann(x)M⊆M[x]. For x=0 this is zero, although M[x]=M. For R=Z/p² and M=R, multiplication by p has nonzero kernel but Tor_1(R/(p),R)=0. DC plus supplied resolutions. Weibel Exercise 3.1.1; explicit finite presentation proof.

Deps: thm-long-exact-tor-sequence-in-the-right-module-variable, prop-tor-zero-is-the-tensor-product-in-either-construction.

### Added `ex-a-torsion-free-nonflat-ideal-in-a-polynomial-ring`

For a field k, R=k[x,y], I=(x,y), the sequence 0→R --(-y,x)→R² --(x,y)→R→k→0 is exact. To check the middle kernel, ax+by=0 implies x divides b (reduce modulo x), so b=xc and a=-yc; injectivity follows because R is a domain. Tensor with k kills both matrices. Thus Tor_2(k,k)=k, Tor_1(k,k)=k² and Tor_1(I,k)=k by LES shifting; I is torsion-free as a submodule of R but not flat. DC plus supplied finite resolution. Weibel Exercise 3.2.3 and Sharifi Example 3.5.13. The same explicit computation must be inline in the A-page nonprincipal-annihilator false statement, which cannot depend on this B item.

Deps: def-balanced-tor-bifunctor, prop-tor-dimension-shifting, thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes.

## Complete ideal-test strengthening within this pair

The following four additions bring Tor A to 54 items, so no prerequisite split or new A/B pair is needed for the harvested arbitrary-ring ideal test. They supersede the earlier open ideal-test obligation. They still require insertion in the canonical plan and normal authoring review.

### Added `def-character-dual-of-a-one-sided-module`

For a left R-module M let M⁺=Hom_Z(M,Q/Z), with right action (fr)(m)=f(rm); for a right M use (rf)(m)=f(mr). Verify associativity, unit and additivity directly. Character duality here is algebraic, without a topology. Weibel Definition 3.2.3.

Deps: def-opposite-ring.

### Added `lem-the-rational-circle-is-an-injective-cogenerator-of-abelian-groups`

Assume AC. Q/Z is divisible by rational division, hence injective over Z. For 0≠a∈A, define a nonzero homomorphism on its cyclic subgroup: send a to 1/n mod Z if its finite order is n, or to 1/2 mod Z if its order is infinite. Extend to A by injectivity. Thus A=0 iff Hom(A,Q/Z)=0, and applying this exact contravariant functor to kernel/image sequences shows a map is monic iff its character dual is epic; a sequence is exact iff its dual is exact. This supplies the full proof obligation cited in Weibel Lemma 3.2.5 and Exercise 3.2.4; the AC upper bound is explicit.

Deps: thm-injective-modules-over-a-pid-are-exactly-divisible, def-character-dual-of-a-one-sided-module.

### Added `thm-flatness-is-equivalent-to-character-dual-injectivity-and-the-one-sided-ideal-test`

Assume AC. For a left M over an arbitrary unital R, equivalent: M flat; M⁺ injective as a right module; I⊗M→M is injective for every right ideal I (its image is IM). Prove the natural bijection Hom_Z(N⊗M,Q/Z)≅Hom_{R-op}(N,M⁺) by evaluation on n⊗m; check the balancing relation and both inverse maps. The cogenerator lemma identifies tensor preservation of monomorphisms with surjectivity of the corresponding Hom restriction. Baer over R-op reduces injectivity to right ideal inclusions. Tensor right exactness finishes the equivalence. Repeat with hands reversed. Weibel Proposition 3.2.4, complete proof; no commutativity is assumed.

Deps: lem-the-rational-circle-is-an-injective-cogenerator-of-abelian-groups, thm-baer-criterion-for-injective-modules, thm-universal-property-of-module-tensor-products, lem-tensor-over-an-arbitrary-ring-preserves-cokernels-in-both-variables, def-left-and-right-flat-modules-over-an-arbitrary-ring.

### Added `cor-weak-dimension-can-be-tested-on-one-sided-ideal-quotients`

Assume AC and supplied projective-resolution data. LES for 0→I→R→R/I→0 gives M flat iff Tor_1(R/I,M)=0 for every right ideal I, and the reversed-hand version. If d bounds fd(R/I) for all right I, take any left M and its dth projective syzygy K; shifting makes Tor_1(R/I,K)=0 for every I, hence K flat. Therefore every left M has fd≤d. The reverse inequality and the infinity case are immediate from the all-module supremum; repeat over R-op. The empty nonzero-Tor supremum is 0, so the zero ring is covered. This retains all five suprema in Weibel Theorem 4.1.3.

Deps: thm-flatness-is-equivalent-to-character-dual-injectivity-and-the-one-sided-ideal-test, cor-flat-dimension-is-detected-by-tor-in-degree-n-plus-one, thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric, thm-long-exact-tor-sequence-in-the-left-module-variable, thm-long-exact-tor-sequence-in-the-right-module-variable.

## Final full-statement source corrections

These replace the narrower draft wording above, preserving the source's actual hypotheses. Tor A now has 56 items; B has 11. No split is needed (ceiling 60).

- `thm-tor-of-a-regular-principal-quotient`: use an arbitrary unital R, r with ann_right(r)=0, right module R/rR, and left M. Left multiplication by r is a right-linear map R→R. The same two-term calculation holds in Ab. No commutativity is necessary. Weibel calls this **Example** 3.1.7, p.68.
- `thm-tor-one-of-two-ideal-quotients`: use a right ideal I and a left ideal J in arbitrary R. The natural identification in Ab is (I∩J)/IJ, where IJ is the additive subgroup generated by products ij. Right exactness gives I⊗(R/J)=I/IJ. The special case of a two-sided I gives Tor_1(R/I,R/I)=I/I². This retains the full Exercise 3.1.3, p.68.
- `ex-zero-divisors-correct-the-principal-quotient-tor-formula`: with arbitrary R and A=ann_right(r), rR≅R/A as right modules. Tor_1(R/rR,M)=ker(r:M→M)/AM. Also Tor_2(R/rR,M)=ker(A⊗M→M), and Tor_n(R/rR,M)≅Tor_{n-2}(A,M) for n≥3, by the two short exact sequences. Include these higher clauses of Exercise 3.1.1, not only the commutative counterexample. Add prop-tor-dimension-shifting as an explicit manifest dependency.
- `lem-tor-commutes-with-filtered-colimits-in-either-variable`: DC and supplied projective resolution of the fixed opposite-hand module. Resolve that fixed module, commute degreewise tensor past the filtered colimit, then commute homology past it by module AB5: apply exact colimit to the two short exact sequences defining cycles, boundaries and homology. Balance gives the other hand; no compatible choice of resolutions of every diagram object is needed. Weibel Corollary 2.6.17, p.58.
- `prop-tor-one-of-abelian-groups-is-a-torsion-group`: write the first group as the filtered union of its finitely generated subgroups. Finite invariant-factor decomposition, the finite sum tensor identity and the cyclic calculation make each Tor_1 group torsion; filtered colimits of torsion groups are torsion since each element comes from one stage. Carry DC and supplied resolutions, with the same explicit choice cost as the preceding machinery. This restores the other clause of Weibel **Proposition** 3.1.2, p.66.

The final coverage file uses source-native headings and page numbers, including Sharifi Definition 4.1.2 (terminology, not homological reindexing). Sharifi's actual comparison is cohomological; homological reindexing is independently verified against Weibel 5.2.3.

## Source comparison and limitations

Two independent treatments were used for each A page: Weibel's textbook and Sharifi's full lecture-note set. Separate Weibel chapter PDFs are one treatment, not independent sources. The sibling coverage ledger contains exact URLs, original URLs, source-native named-result locators and dispositions (142 entries). Named mathematical claims remain in the scaffold even where byte verification failed. Supplemental Stacks §12.24, Definition 12.24.1 and Lemma 12.24.2, was opened for comparison of general-abelian versus countable-direct-sum constructions (https://stacks.math.columbia.edu/tag/012K); it is orientation only and no local proof depends on it or on a deferred catalogue result. The Stacks flatness page 00LY was opened but not harvested or used as evidence.

Sharifi corrections: Remark 4.1.9 interchanges complete/cocomplete roles for unions and intersections; use explicit existence of the relevant subobjects, with bounded cases eventually finite. Definition 4.1.14 reverses the endpoints of a decreasing filtration; use the correct endpoints from 4.2.1 and Weibel 5.2.5. Remark 4.1.16 overstates edge maps as epimorphisms/monomorphisms of the entire abutment; Weibel 5.2.6 gives the correct inclusion/quotient composites. Lemma 3.5.14's proof improperly cancels a localization denominator: equality of fractions means an additional scalar kills the cross-difference, and vanishing after localization does not imply the original numerator was zero. Use the local exact-localization theorem and its annihilating-scalar test instead. The representative formulas in Sharifi 4.2.2 are graded images of raw cycles/boundaries; the notes explicitly translate them before forming quotients. These errors are not adopted as proof steps.

The integer and order-four examples are explicit adaptations of the local quotient and filtered-complex construction. The new d² witness is bounded with a negative second index, so it is not falsely labelled first quadrant. The five-term proof is the bounded edge/filtration proof with the specified homological direction.

## Transitive graph audit evidence

Method: parse current plan page order and requires, all research/*.pages.json inventories, and published YAML frontmatter. For the prospective graph, override the owned rows with this manifest; preserve current published interfaces in the evidence above. Follow deps and body-load-bearing forward_refs (outside a ## Remarks section) for proof cycles. Check justified_by and even orientation forward_refs conservatively in a separate target-ledger screen, because justified_by has an intentionally reverse deps edge and cannot be treated as an ordinary proof cycle. Compare historical edge sets without treating stale variants as current suppliers. This is an over-approximation where a remark uses a singular heading; flagged forward edges need their intended role classified, while actual declared deps and same-page late suppliers are concrete order defects.

Input plan SHA-256: `7c49c68b8da41a09b47e4184e65e5d971c71faf4384c70e61431e54c8ef26ec3`. Owned manifest SHA-256: `e9717f08b5ad7bbeeb5f0bf7c6e68734d41e415027e812e3f4bdcd0809df2def`. Parsed 376 historical/current manifests and 15415 item files. The unrelated item parse failure was [['items/rem-jordan-rectifiable-terminology.md', 'while scanning a quoted scalar\n  in "<unicode string>", line 21, column 12:\n          url: "https://studylib.net/doc/281706 ... \n               ^\nfound unexpected end of stream\n  in "<unicode string>", line 21, column 93:\n     ... nifolds--advanced-books-classics\n                                         ^']]. No newly proposed ID collides with a historical item inventory; the 49 reused published identities are deliberate.

- `tor-flatness-and-global-dimension`: 162 pages, 3890 page-root item entries, 4038 distinct transitive items; 0 unresolved IDs, 0 proof cycles, 31 order flags, 6 A-to-B flags. 1338 reachable item identities have at least one historical deps variant differing from current/proposed deps. These are differences requiring current-interface selection, not 1338 automatically proven defects.
- `spectral-sequences`: 176 pages, 4266 page-root item entries, 4410 distinct transitive items; 0 unresolved IDs, 0 proof cycles, 31 order flags, 6 A-to-B flags. 1365 reachable item identities have at least one historical deps variant differing from current/proposed deps. These are differences requiring current-interface selection, not 1365 automatically proven defects.

Current conservative target-ledger screening (includes the actual 22 catalogue item IDs from library/not-proved-here/deferred-set-theory-beyond-choice.md):

```json
{
  "tor-flatness-and-global-dimension": {
    "items": 4201,
    "forbidden_paths": []
  },
  "spectral-sequences": {
    "items": 4573,
    "forbidden_paths": []
  }
}
```

Historical forbidden supplier paths MUST NOT be imported. `research/zfc-batch-1.pages.json` makes the Foundations ZFC page require the deferred catalogue; `research/frontier-5-batch-1.pages.json` does the same for filters-and-ultrafilters. Current plan edges are respectively [] and [order-zorn-and-the-axiom-of-choice], so these stale edges are rejected, not approved by the current extcheck pass. `research/level9-batch-1.pages.json` gives rem-baire-in-r-is-choice-free a dependency on rem-baire-category-choice-strength; the current published remark instead supplies a canonical least-rational-interval proof and has removed that edge. Each old route is fatal if reintroduced. Historical union routes below are evidence of those stale violations, not a claim that the current plan still has them.

```json
{
  "tor-flatness-and-global-dimension": {
    "historical_page_closure": 163,
    "conservative_item_closure": 4210,
    "forbidden_paths": [
      [
        "tor-flatness-and-global-dimension",
        "yoneda-extensions-and-homological-dimension-examples",
        "yoneda-extensions-and-homological-dimension",
        "ext-and-balanced-resolutions-examples",
        "ext-and-balanced-resolutions",
        "delta-functors-and-universality-examples",
        "delta-functors-and-universality",
        "derived-functors-examples",
        "derived-functors",
        "projective-and-injective-resolutions-examples",
        "projective-and-injective-resolutions",
        "long-exact-sequences-in-homology-examples",
        "long-exact-sequences-in-homology",
        "the-diagram-lemmas-in-an-abelian-category",
        "exactness-and-the-member-calculus-examples",
        "exactness-and-the-member-calculus",
        "subobject-lattices-generators-and-the-grothendieck-axioms",
        "chains-antichains-sperner-and-dilworth",
        "finite-counting-and-binomial-coefficients",
        "countability-and-uncountability",
        "relations-functions-and-quotients",
        "the-zfc-axioms-and-basic-set-constructions",
        "deferred-set-theory-beyond-choice"
      ],
      [
        "rem-baire-in-r-is-choice-free",
        "rem-baire-category-choice-strength"
      ]
    ]
  },
  "spectral-sequences": {
    "historical_page_closure": 177,
    "conservative_item_closure": 4581,
    "forbidden_paths": [
      [
        "spectral-sequences",
        "derived-categories-examples",
        "derived-categories",
        "triangulated-categories-examples",
        "triangulated-categories",
        "group-cohomology-as-a-derived-functor-examples",
        "group-cohomology-as-a-derived-functor",
        "the-group-algebra-and-representations",
        "the-fundamental-theorem-of-algebra",
        "solvability-by-radicals-and-kummer-theory",
        "composition-series-and-solvable-groups",
        "group-homomorphisms-and-the-isomorphism-theorems",
        "normal-subgroups-and-quotient-groups",
        "cosets-and-lagranges-theorem",
        "monoids-groups-and-subgroups",
        "countability-and-uncountability",
        "relations-functions-and-quotients",
        "the-zfc-axioms-and-basic-set-constructions",
        "deferred-set-theory-beyond-choice"
      ],
      [
        "rem-baire-in-r-is-choice-free",
        "rem-baire-category-choice-strength"
      ]
    ]
  }
}
```

All 31 prospective graph order flags (source, target, source page, target page), followed by all six A-to-B flags. Same-page target indices are later in the current plan; cross-page remark references require the classification noted above.

```json
{
  "forward_edges": [
    [
      "thm-homology-is-an-additive-functor",
      "thm-the-category-of-complexes-in-an-additive-category-is-additive",
      "chain-complexes-and-homology",
      "chain-complexes-and-homology"
    ],
    [
      "thm-the-subobject-inequalities-underlying-exactness",
      "def-exactness-at-a-node",
      "exactness-and-the-member-calculus",
      "exactness-and-the-member-calculus"
    ],
    [
      "thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible",
      "prop-cones-preserve-chain-homotopy-equivalences-of-arrows",
      "mapping-cones-cylinders-and-chain-triangles",
      "mapping-cones-cylinders-and-chain-triangles"
    ],
    [
      "rem-sup-conventions",
      "def-extended-reals",
      "suprema-and-infima",
      "limsup-and-subsequential-limits"
    ],
    [
      "rem-integral-conventions-and-scope",
      "cex-spikes-with-integral-one-converging-pointwise-to-zero",
      "properties-of-the-integral-and-the-working-ftc",
      "properties-of-the-integral-and-the-working-ftc-examples"
    ],
    [
      "rem-integral-conventions-and-scope",
      "cex-an-integrable-function-with-no-primitive",
      "properties-of-the-integral-and-the-working-ftc",
      "properties-of-the-integral-and-the-working-ftc-examples"
    ],
    [
      "rem-integral-conventions-and-scope",
      "cex-a-function-with-a-primitive-that-is-not-integrable",
      "properties-of-the-integral-and-the-working-ftc",
      "properties-of-the-integral-and-the-working-ftc-examples"
    ],
    [
      "rem-real-exponents-deferred",
      "def-real-power",
      "roots-and-rational-powers",
      "the-logarithm-and-general-powers"
    ],
    [
      "rem-real-exponents-deferred",
      "thm-real-power-laws",
      "roots-and-rational-powers",
      "the-logarithm-and-general-powers"
    ],
    [
      "rem-rearrangement-in-higher-dimensions",
      "thm-steinitz-polygonal-confinement",
      "absolute-convergence-and-rearrangement",
      "rn-as-a-normed-space"
    ],
    [
      "rem-rearrangement-in-higher-dimensions",
      "thm-rearrangement-sums-lie-in-an-affine-subspace",
      "absolute-convergence-and-rearrangement",
      "rn-as-a-normed-space"
    ],
    [
      "rem-extended-real-conventions",
      "cex-zero-times-infinity-indeterminate",
      "limsup-and-subsequential-limits",
      "limsup-and-subsequential-limits-examples"
    ],
    [
      "thm-compact-hausdorff-space-has-a-unique-compatible-uniformity",
      "def-uniformizable-space",
      "uniform-spaces",
      "uniform-spaces"
    ],
    [
      "thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each",
      "thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses",
      "exactness-and-the-member-calculus",
      "exactness-and-the-member-calculus"
    ],
    [
      "cor-every-module-admits-an-injective-resolution",
      "thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings",
      "projective-and-injective-resolutions",
      "projective-and-injective-resolutions"
    ],
    [
      "cor-every-module-admits-a-projective-resolution",
      "prop-the-iterated-free-module-resolution-is-canonical-in-zf",
      "projective-and-injective-resolutions",
      "projective-and-injective-resolutions"
    ],
    [
      "cor-radical-ideals-as-intersections-of-minimal-primes-noetherian",
      "def-dependent-choice",
      "associated-primes-and-primary-decomposition",
      "compactness-in-metric-spaces"
    ],
    [
      "thm-lasker-noether-primary-decomposition",
      "def-dependent-choice",
      "associated-primes-and-primary-decomposition",
      "compactness-in-metric-spaces"
    ],
    [
      "lem-noetherian-ring-maximal-element-annihilator-exists",
      "def-dependent-choice",
      "associated-primes-and-primary-decomposition",
      "compactness-in-metric-spaces"
    ],
    [
      "lem-affine-domain-chain-dimension-formula-step",
      "thm-dimension-formula-for-affine-domains",
      "krull-dimension-and-height-theorems",
      "krull-dimension-and-height-theorems"
    ],
    [
      "thm-hilbert-samuel-dimension-theorem",
      "thm-dimension-and-parameters-for-modules",
      "rees-modules-artin-rees-and-hilbert-samuel-theory",
      "rees-modules-artin-rees-and-hilbert-samuel-theory"
    ],
    [
      "thm-hilbert-samuel-dimension-theorem",
      "thm-additivity-of-hilbert-samuel-multiplicity",
      "rees-modules-artin-rees-and-hilbert-samuel-theory",
      "rees-modules-artin-rees-and-hilbert-samuel-theory"
    ],
    [
      "rem-r-native-topology-scope",
      "cex-closed-bounded-in-q-not-compact",
      "topology-of-r",
      "topology-of-r-examples"
    ],
    [
      "rem-r-native-topology-scope",
      "def-topological-space",
      "topology-of-r",
      "topological-spaces-and-continuity"
    ],
    [
      "rem-r-native-topology-scope",
      "def-metrizable-space",
      "topology-of-r",
      "topological-spaces-and-continuity"
    ],
    [
      "rem-which-axiom-each-construction-uses",
      "def-axiom-of-choice",
      "the-zfc-axioms-and-basic-set-constructions",
      "relations-functions-and-quotients"
    ],
    [
      "rem-where-a-choice-principle-would-be-needed",
      "rem-choice-ledger",
      "relations-functions-and-quotients",
      "ordinals-and-transfinite-recursion"
    ],
    [
      "rem-counting-conventions-and-scope",
      "def-cardinal",
      "finite-counting-and-binomial-coefficients",
      "ordinals-and-transfinite-recursion"
    ],
    [
      "rem-counting-conventions-and-scope",
      "def-monoid-finite-product",
      "finite-counting-and-binomial-coefficients",
      "monoids-groups-and-subgroups"
    ],
    [
      "rem-counting-conventions-and-scope",
      "def-ring",
      "finite-counting-and-binomial-coefficients",
      "rings-subrings-and-integral-domains"
    ],
    [
      "rem-counting-conventions-and-scope",
      "def-symmetric-group",
      "finite-counting-and-binomial-coefficients",
      "monoids-groups-and-subgroups"
    ]
  ],
  "a_to_b_edges": [
    [
      "rem-integral-conventions-and-scope",
      "cex-spikes-with-integral-one-converging-pointwise-to-zero",
      "properties-of-the-integral-and-the-working-ftc",
      "properties-of-the-integral-and-the-working-ftc-examples"
    ],
    [
      "rem-integral-conventions-and-scope",
      "cex-an-integrable-function-with-no-primitive",
      "properties-of-the-integral-and-the-working-ftc",
      "properties-of-the-integral-and-the-working-ftc-examples"
    ],
    [
      "rem-integral-conventions-and-scope",
      "cex-a-function-with-a-primitive-that-is-not-integrable",
      "properties-of-the-integral-and-the-working-ftc",
      "properties-of-the-integral-and-the-working-ftc-examples"
    ],
    [
      "rem-extended-real-conventions",
      "cex-zero-times-infinity-indeterminate",
      "limsup-and-subsequential-limits",
      "limsup-and-subsequential-limits-examples"
    ],
    [
      "fs-any-sequence-of-functors-with-long-exact-sequences-is-a-delta-functor",
      "ex-a-degreewise-split-sequence-with-nonzero-connecting-map",
      "delta-functors-and-universality",
      "long-exact-sequences-in-homology-examples"
    ],
    [
      "rem-r-native-topology-scope",
      "cex-closed-bounded-in-q-not-compact",
      "topology-of-r",
      "topology-of-r-examples"
    ]
  ]
}
```

Confirmed dependency-use paths:

- spectral-sequences → derived-categories-examples → derived-categories → triangulated-categories-examples → triangulated-categories → group-cohomology-as-a-derived-functor-examples → group-cohomology-as-a-derived-functor → universal-coefficients-and-kunneth-theorems-examples → universal-coefficients-and-kunneth-theorems → tor-flatness-and-global-dimension-examples → tor-flatness-and-global-dimension. Thus the Tor defects block the spectral page even though its construction does not call Tor directly.
- prop-tor-zero-is-the-tensor-product-in-either-construction → thm-right-exactness-of-tensor-products (published edge): arbitrary unital R at the consumer versus commutative R at the supplier; the new arbitrary-ring cokernel lemma is the proposed replacement.
- lem-projective-modules-are-flat-over-an-arbitrary-ring → thm-tensor-products-commute-with-arbitrary-direct-sums (published edge): same commutative/arbitrary mismatch; use the new finite-support balanced-map construction.
- prop-each-tor-construction-is-covariant-in-both-variables → thm-projective-comparison-map-exists → def-dependent-choice. The supplied theorem lifts a given morphism between given resolutions by DC; it does not assert choice-free selection of resolutions for an entire category.
- thm-higher-tor-over-the-integers-vanishes → thm-the-integers-have-global-dimension-one: the latter's statement assumes AC. The assertion remains mathematically useful, but the present proof's cost must be stated.
- lem-spectral-sequence-isomorphism-on-one-page-persists → thm-homology-is-an-additive-functor → thm-the-category-of-complexes-in-an-additive-category-is-additive. The last supplier is later in the plan's same-page item order, although already published. Its exact additive-category hypothesis and degreewise biproduct proof are adequate; its placement is not earlier. Reordering that upstream scaffold is outside this task.

The complete scanned page closure is recorded below for reproducibility. Historical manifests are fingerprinted, not trusted as proof evidence.

```json
{
  "tor-flatness-and-global-dimension": [
    "abelian-categories",
    "abelian-categories-examples",
    "absolute-convergence-and-rearrangement",
    "adjunctions-units-and-counits",
    "adjunctions-units-and-counits-examples",
    "algebraic-closure-embeddings-and-separability",
    "algebraic-closure-embeddings-and-separability-examples",
    "algebraic-extensions-degree-and-finite-fields",
    "algebraic-extensions-degree-and-finite-fields-examples",
    "artinian-rings-and-length",
    "artinian-rings-and-length-examples",
    "associated-primes-and-primary-decomposition",
    "associated-primes-and-primary-decomposition-examples",
    "cantor-set-baire-and-measure-zero",
    "cardinal-arithmetic-and-cofinality",
    "categories-functors-and-natural-transformations",
    "chain-complexes-and-homology",
    "chain-complexes-and-homology-examples",
    "chain-conditions-and-semisimple-modules",
    "chain-homotopy-and-the-homotopy-category",
    "chain-homotopy-and-the-homotopy-category-examples",
    "chains-antichains-sperner-and-dilworth",
    "compactness",
    "compactness-in-metric-spaces",
    "completeness-and-uniform-continuity",
    "composition-series-and-solvable-groups",
    "congruences-and-the-chinese-remainder-theorem",
    "conjugacy-and-simplicity-in-the-symmetric-groups",
    "connectedness",
    "construction-of-r-via-cauchy-sequences",
    "construction-of-r-via-dedekind-cuts",
    "construction-of-the-natural-numbers",
    "continuity-ivt-evt-and-uniform-continuity",
    "cosets-and-lagranges-theorem",
    "countability-and-uncountability",
    "cyclic-groups-and-direct-products",
    "dedekind-domains-and-ideal-classes",
    "dedekind-domains-and-ideal-classes-examples",
    "delta-functors-and-universality",
    "delta-functors-and-universality-examples",
    "derived-functors",
    "derived-functors-examples",
    "determinants-of-matrices-over-a-commutative-ring",
    "diagonalisation-and-the-minimal-polynomial",
    "divisibility-gcd-and-bezout",
    "dual-spaces-bilinear-forms-and-inertia",
    "eigenvalues-eigenvectors-and-the-characteristic-polynomial",
    "ends-coends-and-weighted-limits",
    "ends-coends-and-weighted-limits-examples",
    "euclidean-domains-pids-and-unique-factorisation",
    "exactness-and-the-member-calculus",
    "exactness-and-the-member-calculus-examples",
    "ext-and-balanced-resolutions",
    "ext-and-balanced-resolutions-examples",
    "field-extensions-and-the-complex-numbers",
    "filters-and-ultrafilters",
    "finite-counting-and-binomial-coefficients",
    "finite-fields-and-cyclotomic-extensions",
    "finite-fields-and-cyclotomic-extensions-examples",
    "flatness-and-faithful-flatness",
    "foundations-of-the-real-numbers",
    "free-groups-and-presentations",
    "free-modules-and-exact-sequences",
    "gaussian-elimination-and-row-reduction",
    "group-actions-and-cayleys-theorem",
    "group-homomorphisms-and-the-isomorphism-theorems",
    "hausdorff-via-the-diagonal",
    "hereditary-and-productive-separation",
    "homotopy-and-homotopy-equivalence",
    "ideals-and-quotient-rings",
    "inclusion-exclusion-and-the-pigeonhole-principle",
    "integral-extensions-and-going-up",
    "integral-extensions-and-going-up-examples",
    "kan-extensions-density-and-the-free-cocompletion",
    "kan-extensions-density-and-the-free-cocompletion-examples",
    "krull-dimension-and-height-theorems",
    "krull-dimension-and-height-theorems-examples",
    "limits-and-colimits",
    "limits-and-colimits-examples",
    "limits-of-real-functions",
    "limsup-and-subsequential-limits",
    "linear-independence-bases-and-dimension",
    "linear-maps-rank-nullity-and-quotient-spaces",
    "localisation-of-modules-and-support",
    "localisation-of-modules-and-support-examples",
    "long-exact-sequences-in-homology",
    "long-exact-sequences-in-homology-examples",
    "mapping-cones-cylinders-and-chain-triangles",
    "mapping-cones-cylinders-and-chain-triangles-examples",
    "matrices-and-the-matrix-of-a-linear-map",
    "metric-spaces",
    "modules-and-module-homomorphisms",
    "modules-over-a-pid-and-canonical-forms",
    "modules-over-a-pid-and-canonical-forms-examples",
    "monadicity-and-becks-theorem",
    "monadicity-and-becks-theorem-examples",
    "monads-comonads-and-their-algebras",
    "monads-comonads-and-their-algebras-examples",
    "monoids-groups-and-subgroups",
    "monotone-functions-and-discontinuities",
    "monotone-sequences-and-cauchy-completeness",
    "nets-and-filters",
    "noether-normalisation-and-nullstellensatz",
    "noether-normalisation-and-nullstellensatz-examples",
    "noetherian-rings-and-hilbert-basis",
    "noetherian-rings-and-hilbert-basis-examples",
    "normal-subgroups-and-quotient-groups",
    "order-zorn-and-the-axiom-of-choice",
    "ordinal-arithmetic",
    "ordinals-and-transfinite-recursion",
    "polynomial-rings-and-roots",
    "preadditive-and-additive-categories-and-biproducts",
    "preadditive-and-additive-categories-and-biproducts-examples",
    "prime-spectra-and-radicals",
    "prime-spectra-and-radicals-examples",
    "primes-and-the-fundamental-theorem-of-arithmetic",
    "projective-and-injective-resolutions",
    "projective-and-injective-resolutions-examples",
    "properties-of-the-integral-and-the-working-ftc",
    "rees-modules-artin-rees-and-hilbert-samuel-theory",
    "rees-modules-artin-rees-and-hilbert-samuel-theory-examples",
    "reflective-subcategories-and-the-adjoint-functor-theorems",
    "reflective-subcategories-and-the-adjoint-functor-theorems-examples",
    "relations-functions-and-quotients",
    "rings-subrings-and-integral-domains",
    "rn-as-a-normed-space",
    "roots-and-rational-powers",
    "separation-axioms",
    "sequences-and-limits",
    "series-and-nonnegative-tests",
    "solvability-by-radicals-and-kummer-theory",
    "splitting-fields",
    "subobject-lattices-generators-and-the-grothendieck-axioms",
    "subspaces-products-and-quotients",
    "suprema-and-infima",
    "symmetric-groups-and-the-sign-homomorphism",
    "symmetric-polynomials",
    "tensor-products-of-modules",
    "the-derivative-and-mean-value-theorems",
    "the-determinant-of-a-linear-operator",
    "the-diagram-lemmas-in-an-abelian-category",
    "the-field-of-fractions-and-localisation",
    "the-fundamental-group",
    "the-galois-correspondence",
    "the-galois-correspondence-examples",
    "the-riemann-integral",
    "the-structure-of-finite-abelian-groups",
    "the-topology-of-euclidean-space",
    "the-zfc-axioms-and-basic-set-constructions",
    "topological-spaces-and-continuity",
    "topology-of-r",
    "tor-flatness-and-global-dimension",
    "triangularisation-and-jordan-canonical-form",
    "tychonoff-embedding-and-stone-cech",
    "uniform-spaces",
    "universal-properties-and-the-yoneda-lemma",
    "urysohn-lemma-and-tietze",
    "valuation-rings-and-discrete-valuation-rings",
    "valuation-rings-and-discrete-valuation-rings-examples",
    "vector-spaces-and-subspaces",
    "yoneda-extensions-and-homological-dimension",
    "yoneda-extensions-and-homological-dimension-examples"
  ],
  "spectral-sequences": [
    "abelian-categories",
    "abelian-categories-examples",
    "absolute-convergence-and-rearrangement",
    "adjunctions-units-and-counits",
    "adjunctions-units-and-counits-examples",
    "algebraic-closure-embeddings-and-separability",
    "algebraic-closure-embeddings-and-separability-examples",
    "algebraic-extensions-degree-and-finite-fields",
    "algebraic-extensions-degree-and-finite-fields-examples",
    "artinian-rings-and-length",
    "artinian-rings-and-length-examples",
    "associated-primes-and-primary-decomposition",
    "associated-primes-and-primary-decomposition-examples",
    "cantor-set-baire-and-measure-zero",
    "cardinal-arithmetic-and-cofinality",
    "categories-functors-and-natural-transformations",
    "chain-complexes-and-homology",
    "chain-complexes-and-homology-examples",
    "chain-conditions-and-semisimple-modules",
    "chain-homotopy-and-the-homotopy-category",
    "chain-homotopy-and-the-homotopy-category-examples",
    "chains-antichains-sperner-and-dilworth",
    "compactness",
    "compactness-in-metric-spaces",
    "completeness-and-uniform-continuity",
    "composition-series-and-solvable-groups",
    "congruences-and-the-chinese-remainder-theorem",
    "conjugacy-and-simplicity-in-the-symmetric-groups",
    "connectedness",
    "construction-of-r-via-cauchy-sequences",
    "construction-of-r-via-dedekind-cuts",
    "construction-of-the-natural-numbers",
    "continuity-ivt-evt-and-uniform-continuity",
    "cosets-and-lagranges-theorem",
    "countability-and-uncountability",
    "cyclic-groups-and-direct-products",
    "dedekind-domains-and-ideal-classes",
    "dedekind-domains-and-ideal-classes-examples",
    "delta-functors-and-universality",
    "delta-functors-and-universality-examples",
    "derived-categories",
    "derived-categories-examples",
    "derived-functors",
    "derived-functors-examples",
    "determinants-of-matrices-over-a-commutative-ring",
    "diagonalisation-and-the-minimal-polynomial",
    "divisibility-gcd-and-bezout",
    "dual-spaces-bilinear-forms-and-inertia",
    "eigenvalues-eigenvectors-and-the-characteristic-polynomial",
    "ends-coends-and-weighted-limits",
    "ends-coends-and-weighted-limits-examples",
    "euclidean-domains-pids-and-unique-factorisation",
    "exactness-and-the-member-calculus",
    "exactness-and-the-member-calculus-examples",
    "ext-and-balanced-resolutions",
    "ext-and-balanced-resolutions-examples",
    "field-extensions-and-the-complex-numbers",
    "filters-and-ultrafilters",
    "finite-counting-and-binomial-coefficients",
    "finite-fields-and-cyclotomic-extensions",
    "finite-fields-and-cyclotomic-extensions-examples",
    "flatness-and-faithful-flatness",
    "foundations-of-the-real-numbers",
    "free-groups-and-presentations",
    "free-modules-and-exact-sequences",
    "gaussian-elimination-and-row-reduction",
    "group-actions-and-cayleys-theorem",
    "group-cohomology-as-a-derived-functor",
    "group-cohomology-as-a-derived-functor-examples",
    "group-homomorphisms-and-the-isomorphism-theorems",
    "hausdorff-via-the-diagonal",
    "hereditary-and-productive-separation",
    "homotopy-and-homotopy-equivalence",
    "ideals-and-quotient-rings",
    "inclusion-exclusion-and-the-pigeonhole-principle",
    "integral-extensions-and-going-up",
    "integral-extensions-and-going-up-examples",
    "kan-extensions-density-and-the-free-cocompletion",
    "kan-extensions-density-and-the-free-cocompletion-examples",
    "krull-dimension-and-height-theorems",
    "krull-dimension-and-height-theorems-examples",
    "limits-and-colimits",
    "limits-and-colimits-examples",
    "limits-of-real-functions",
    "limsup-and-subsequential-limits",
    "linear-independence-bases-and-dimension",
    "linear-maps-rank-nullity-and-quotient-spaces",
    "localisation-of-modules-and-support",
    "localisation-of-modules-and-support-examples",
    "long-exact-sequences-in-homology",
    "long-exact-sequences-in-homology-examples",
    "mapping-cones-cylinders-and-chain-triangles",
    "mapping-cones-cylinders-and-chain-triangles-examples",
    "matrices-and-the-matrix-of-a-linear-map",
    "metric-spaces",
    "modules-and-module-homomorphisms",
    "modules-over-a-pid-and-canonical-forms",
    "modules-over-a-pid-and-canonical-forms-examples",
    "monadicity-and-becks-theorem",
    "monadicity-and-becks-theorem-examples",
    "monads-comonads-and-their-algebras",
    "monads-comonads-and-their-algebras-examples",
    "monoids-groups-and-subgroups",
    "monotone-functions-and-discontinuities",
    "monotone-sequences-and-cauchy-completeness",
    "nets-and-filters",
    "noether-normalisation-and-nullstellensatz",
    "noether-normalisation-and-nullstellensatz-examples",
    "noetherian-rings-and-hilbert-basis",
    "noetherian-rings-and-hilbert-basis-examples",
    "normal-subgroups-and-quotient-groups",
    "order-zorn-and-the-axiom-of-choice",
    "ordinal-arithmetic",
    "ordinals-and-transfinite-recursion",
    "polynomial-rings-and-roots",
    "preadditive-and-additive-categories-and-biproducts",
    "preadditive-and-additive-categories-and-biproducts-examples",
    "prime-spectra-and-radicals",
    "prime-spectra-and-radicals-examples",
    "primes-and-the-fundamental-theorem-of-arithmetic",
    "projective-and-injective-resolutions",
    "projective-and-injective-resolutions-examples",
    "properties-of-the-integral-and-the-working-ftc",
    "rees-modules-artin-rees-and-hilbert-samuel-theory",
    "rees-modules-artin-rees-and-hilbert-samuel-theory-examples",
    "reflective-subcategories-and-the-adjoint-functor-theorems",
    "reflective-subcategories-and-the-adjoint-functor-theorems-examples",
    "relations-functions-and-quotients",
    "rings-subrings-and-integral-domains",
    "rn-as-a-normed-space",
    "roots-and-rational-powers",
    "semidirect-products-and-automorphism-groups",
    "separation-axioms",
    "sequences-and-limits",
    "series-and-nonnegative-tests",
    "solvability-by-radicals-and-kummer-theory",
    "spectral-sequences",
    "splitting-fields",
    "subobject-lattices-generators-and-the-grothendieck-axioms",
    "subspaces-products-and-quotients",
    "suprema-and-infima",
    "sylow-theorems-and-nilpotent-groups",
    "symmetric-groups-and-the-sign-homomorphism",
    "symmetric-polynomials",
    "tensor-products-of-modules",
    "the-derivative-and-mean-value-theorems",
    "the-determinant-of-a-linear-operator",
    "the-diagram-lemmas-in-an-abelian-category",
    "the-field-of-fractions-and-localisation",
    "the-fundamental-group",
    "the-fundamental-theorem-of-algebra",
    "the-galois-correspondence",
    "the-galois-correspondence-examples",
    "the-group-algebra-and-representations",
    "the-riemann-integral",
    "the-structure-of-finite-abelian-groups",
    "the-topology-of-euclidean-space",
    "the-zfc-axioms-and-basic-set-constructions",
    "topological-spaces-and-continuity",
    "topology-of-r",
    "tor-flatness-and-global-dimension",
    "tor-flatness-and-global-dimension-examples",
    "triangularisation-and-jordan-canonical-form",
    "triangulated-categories",
    "triangulated-categories-examples",
    "tychonoff-embedding-and-stone-cech",
    "uniform-spaces",
    "universal-coefficients-and-kunneth-theorems",
    "universal-coefficients-and-kunneth-theorems-examples",
    "universal-properties-and-the-yoneda-lemma",
    "urysohn-lemma-and-tietze",
    "valuation-rings-and-discrete-valuation-rings",
    "valuation-rings-and-discrete-valuation-rings-examples",
    "vector-spaces-and-subspaces",
    "yoneda-extensions-and-homological-dimension",
    "yoneda-extensions-and-homological-dimension-examples"
  ]
}
```

Exact changes to reused dependency arrays (published files untouched):

```json
[
  {
    "item": "prop-tor-zero-is-the-tensor-product-in-either-construction",
    "published_deps": [
      "def-tor-by-resolving-the-left-module",
      "def-tor-by-resolving-the-right-module",
      "thm-right-exactness-of-tensor-products"
    ],
    "proposed_deps": [
      "def-tor-by-resolving-the-left-module",
      "def-tor-by-resolving-the-right-module",
      "lem-tensor-over-an-arbitrary-ring-preserves-cokernels-in-both-variables"
    ]
  },
  {
    "item": "lem-projective-modules-are-flat-over-an-arbitrary-ring",
    "published_deps": [
      "def-left-and-right-flat-modules-over-an-arbitrary-ring",
      "thm-projective-module-characterizations",
      "thm-tensor-products-commute-with-arbitrary-direct-sums"
    ],
    "proposed_deps": [
      "def-left-and-right-flat-modules-over-an-arbitrary-ring",
      "thm-projective-module-characterizations",
      "lem-tensor-over-an-arbitrary-ring-commutes-with-direct-sums"
    ]
  },
  {
    "item": "prop-torsion-free-abelian-groups-are-flat",
    "published_deps": [
      "def-left-and-right-flat-modules-over-an-arbitrary-ring",
      "thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes",
      "thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion"
    ],
    "proposed_deps": [
      "def-left-and-right-flat-modules-over-an-arbitrary-ring",
      "thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes",
      "thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion",
      "cor-finitely-generated-torsion-free-modules-over-a-pid-are-free",
      "lem-filtered-colimits-of-flat-modules-are-flat",
      "lem-projective-modules-are-flat-over-an-arbitrary-ring"
    ]
  },
  {
    "item": "thm-over-a-pid-flat-is-equivalent-to-torsion-free",
    "published_deps": [
      "def-principal-ideal-domain",
      "prop-torsion-free-abelian-groups-are-flat",
      "def-left-and-right-flat-modules-over-an-arbitrary-ring"
    ],
    "proposed_deps": [
      "def-principal-ideal-domain",
      "prop-torsion-free-abelian-groups-are-flat",
      "def-left-and-right-flat-modules-over-an-arbitrary-ring",
      "cor-finitely-generated-torsion-free-modules-over-a-pid-are-free",
      "lem-filtered-colimits-of-flat-modules-are-flat",
      "lem-projective-modules-are-flat-over-an-arbitrary-ring"
    ]
  }
]
```

## Checks actually run

All commands ran from the repository root, without broader access. No --write plan/dependency mutation, no extcheck --ledger, and no driver transition was run. Whole-run manifests changed concurrently: the first format check saw 771 items; the final one saw 874. Results are snapshots, not a claim about later external edits.

| Check | Command | Result |
|---|---|---|
| Coverage | node tools/coverage-checklist.mjs research/frontier-34-batch-4.coverage.json --require-destination | PASS: 2 pages, 142 harvested entries, 0 errors/warnings |
| Whole-run deps format | node tools/manifest-deps.mjs research/frontier-34-batch-*.pages.json | PASS: final snapshot 874 items, 0 normalized, 0 errors; checks shape, not semantic sufficiency |
| Whole-run manifest policy | node tools/content-policy.mjs --manifest-only research/frontier-34-batch-*.pages.json | FAIL: 874 scoped items, 100 errors, 0 warnings |
| Owned manifest policy | node tools/content-policy.mjs --manifest-only research/frontier-34-batch-4.pages.json | FAIL: 119 items, 49 already-published collisions; no other owned-policy error |
| Canonical plan | node tools/validate-plan.mjs research/plan-spec.json | PASS with advisories: 892 pages with item lists, 579 without; does not incorporate this unmerged scaffold or published-frontmatter drift |
| External/recorded results | node tools/extcheck.mjs | PASS with advisories: 15416 items, 161 recorded-not-proved, 63 resting on them; no current Foundations catalogue violation reported |
| URL liveness/recovery | node tools/url-sweep.mjs --coverage research/frontier-34-batch-4.coverage.json --out /tmp/f34b4/url-liveness.json --recover --fail-on-dead --timeout-ms 5000 | FAIL: 0/5 live, 5 DNS failures, no recovery obtained |
| Source backing | node tools/source-backing.mjs --coverage research/frontier-34-batch-4.coverage.json --liveness /tmp/f34b4/url-liveness.json | FAIL: 49 source-backed result identities unavailable according to local liveness |
| Source-byte stamping | node tools/source-fetch-check.mjs --coverage research/frontier-34-batch-4.coverage.json --stamp --timeout-sec 10 | FAIL: 0/6 entries, EAI_AGAIN; no stamp written |
| Source-byte gate | node tools/source-fetch-check.mjs --coverage research/frontier-34-batch-4.coverage.json | FAIL: six unstamped entries |
| Custom closure/IDs | Python traversal described above, including all research/*.pages.json and current item frontmatter | Mechanical results above; not a completed semantic audit |

Exact failure output follows, so handoff does not depend on ephemeral /tmp logs. The URL tool's “no archived snapshot” means no recovery was obtained in this DNS-restricted environment; it does not prove that no archive exists.

### policy-final

```text
ERROR batch-item-already-exists [def-tensor-product-total-complex-of-chain-complexes]: def-tensor-product-total-complex-of-chain-complexes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero]: lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-tor-by-resolving-the-left-module]: def-tor-by-resolving-the-left-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-tor-by-resolving-the-right-module]: def-tor-by-resolving-the-right-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-tor-zero-is-the-tensor-product-in-either-construction]: prop-tor-zero-is-the-tensor-product-in-either-construction already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-each-tor-construction-is-covariant-in-both-variables]: prop-each-tor-construction-is-covariant-in-both-variables already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-positive-tor-vanishes-when-the-resolved-variable-is-projective]: prop-positive-tor-vanishes-when-the-resolved-variable-is-projective already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-tensor-double-complex-of-two-projective-resolutions]: def-tensor-double-complex-of-two-projective-resolutions already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-left-and-right-flat-modules-over-an-arbitrary-ring]: def-left-and-right-flat-modules-over-an-arbitrary-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-projective-modules-are-flat-over-an-arbitrary-ring]: lem-projective-modules-are-flat-over-an-arbitrary-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [rem-projective-modules-are-flat-is-supplied-by-mod-three]: rem-projective-modules-are-flat-is-supplied-by-mod-three already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-the-rows-of-the-augmented-tensor-double-complex-are-exact]: lem-the-rows-of-the-augmented-tensor-double-complex-are-exact already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-the-columns-of-the-augmented-tensor-double-complex-are-exact]: lem-the-columns-of-the-augmented-tensor-double-complex-are-exact already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic]: thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions]: prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-balanced-tor-bifunctor]: def-balanced-tor-bifunctor already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-long-exact-tor-sequence-in-the-left-module-variable]: thm-long-exact-tor-sequence-in-the-left-module-variable already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-long-exact-tor-sequence-in-the-right-module-variable]: thm-long-exact-tor-sequence-in-the-right-module-variable already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-tor-dimension-shifting]: prop-tor-dimension-shifting already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes]: thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes]: thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes]: cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion]: thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-tor-of-two-cyclic-abelian-groups]: thm-tor-of-two-cyclic-abelian-groups already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-higher-tor-over-the-integers-vanishes]: thm-higher-tor-over-the-integers-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-torsion-free-abelian-groups-are-flat]: prop-torsion-free-abelian-groups-are-flat already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-over-a-pid-flat-is-equivalent-to-torsion-free]: thm-over-a-pid-flat-is-equivalent-to-torsion-free already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-tor-symmetry-over-a-commutative-ring]: thm-tor-symmetry-over-a-commutative-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-flat-dimension-of-a-module]: def-flat-dimension-of-a-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-flat-dimension-at-most-n-iff-higher-tor-vanishes]: thm-flat-dimension-at-most-n-iff-higher-tor-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-left-and-right-weak-global-dimension]: def-left-and-right-weak-global-dimension already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-weak-global-dimension-is-at-most-corresponding-global-dimension]: prop-weak-global-dimension-is-at-most-corresponding-global-dimension already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric]: thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-semisimple-rings-have-vanishing-positive-tor-and-ext]: prop-semisimple-rings-have-vanishing-positive-tor-and-ext already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-the-integers-have-weak-and-global-dimension-one]: prop-the-integers-have-weak-and-global-dimension-one already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-takes-two-left-modules-over-an-arbitrary-ring]: fs-tor-takes-two-left-modules-over-an-arbitrary-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-the-two-tor-constructions-are-equal-by-definition]: fs-the-two-tor-constructions-are-equal-by-definition already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-flat-modules-have-projective-dimension-zero]: fs-flat-modules-have-projective-dimension-zero already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-one-vanishes-only-when-one-module-is-projective]: fs-tor-one-vanishes-only-when-one-module-is-projective already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-is-symmetric-over-every-noncommutative-ring]: fs-tor-is-symmetric-over-every-noncommutative-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m]: fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-tor-of-two-cyclic-groups-from-a-two-term-resolution]: ex-tor-of-two-cyclic-groups-from-a-two-term-resolution already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-tor-detects-n-torsion]: ex-tor-detects-n-torsion already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-a-flat-nonprojective-module]: ex-a-flat-nonprojective-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-localization-is-flat-and-has-vanishing-positive-tor]: ex-localization-is-flat-and-has-vanishing-positive-tor already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-the-tensor-double-complex-in-low-degrees]: ex-the-tensor-double-complex-in-low-degrees already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-tor-symmetry-over-a-commutative-ring]: ex-tor-symmetry-over-a-commutative-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [cex-a-noncommutative-handedness-error-in-tor]: cex-a-noncommutative-handedness-error-in-tor already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers]: ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers already has an item file and cannot be minted by this future batch
ERROR batch-dependency-missing [fs-weak-mixing-implies-strong-mixing]: fs-weak-mixing-implies-strong-mixing depends on thm-chacon-transformation-is-weakly-mixing-but-not-mixing, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on def-schwartz-space-and-its-seminorms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on def-tempered-distribution, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on thm-fourier-translation-modulation-dilation-and-reflection-laws, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-ltwo-fourier-multiplier-bound]: lem-ltwo-fourier-multiplier-bound depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-ltwo-fourier-multiplier-bound]: lem-ltwo-fourier-multiplier-bound depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on thm-l-one-l-two-agreement-of-fourier-transform, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on def-fourier-transform-on-l-one-of-rn, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on thm-tempered-distributions-embed-continuously-in-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on def-weak-derivative-of-a-locally-integrable-function, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on def-sobolev-space-wkp-and-its-norm, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on def-hk-and-hk-zero-notation, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on def-real-order-bessel-potential-sobolev-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on thm-bessel-potential-completions-embed-in-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on lem-japanese-bracket-powers-preserve-schwartz-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-bessel-potentials-shift-sobolev-order-isometrically]: lem-bessel-potentials-shift-sobolev-order-isometrically depends on lem-japanese-bracket-powers-preserve-schwartz-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-bessel-potentials-shift-sobolev-order-isometrically]: lem-bessel-potentials-shift-sobolev-order-isometrically depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces]: lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces depends on lem-japanese-bracket-powers-preserve-schwartz-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces]: lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fractional-hilbert-sobolev-difference-quotient-characterisation]: thm-fractional-hilbert-sobolev-difference-quotient-characterisation depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fractional-hilbert-sobolev-difference-quotient-characterisation]: thm-fractional-hilbert-sobolev-difference-quotient-characterisation depends on thm-fourier-translation-modulation-dilation-and-reflection-laws, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fractional-hilbert-sobolev-difference-quotient-characterisation]: thm-fractional-hilbert-sobolev-difference-quotient-characterisation depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [cex-translation-multiplier-need-not-satisfy-mihlin-derivative-bounds]: cex-translation-multiplier-need-not-satisfy-mihlin-derivative-bounds depends on thm-fourier-translation-modulation-dilation-and-reflection-laws, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [ex-negative-sobolev-order-containing-a-dirac-mass]: ex-negative-sobolev-order-containing-a-dirac-mass depends on thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [cor-birkhoff-strong-law-for-iid-coordinate-shifts]: cor-birkhoff-strong-law-for-iid-coordinate-shifts depends on thm-birkhoff-ergodic-theorem, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-topological-kunneth-short-exact-sequence-for-homology]: thm-topological-kunneth-short-exact-sequence-for-homology depends on thm-pid-kunneth-exactness-from-cycle-boundary-presentations, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [prop-the-homology-kunneth-sequence-splits-nonnaturally]: prop-the-homology-kunneth-sequence-splits-nonnaturally depends on thm-pid-kunneth-splitting-from-cycle-boundary-presentations, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-jacobian-criterion-affine-variety]: thm-jacobian-criterion-affine-variety depends on thm-ag-perfect-field-jacobian-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-regular-locus-is-open-variety]: thm-regular-locus-is-open-variety depends on thm-ag-perfect-field-jacobian-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-separating-hypersurface-chart-variety]: lem-separating-hypersurface-chart-variety depends on thm-ag-separating-transcendence-basis-perfect-field, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-nonempty-regular-locus-reduced-variety-perfect-field]: thm-nonempty-regular-locus-reduced-variety-perfect-field depends on thm-ag-perfect-field-jacobian-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-smooth-morphism-to-field-classical]: def-smooth-morphism-to-field-classical depends on thm-ag-field-extension-of-schemes, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-regular-equals-smooth-over-perfect-field]: thm-regular-equals-smooth-over-perfect-field depends on thm-ag-geometric-regularity-perfect-base, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-hypersurface-smooth-iff-multiplicity-one]: lem-hypersurface-smooth-iff-multiplicity-one depends on thm-ag-standard-smooth-geometric-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-smoothness-stable-under-product-classical]: lem-smoothness-stable-under-product-classical depends on thm-ag-standard-smooth-base-change-composition, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-smooth-morphism-classical]: def-smooth-morphism-classical depends on def-ag-standard-smooth-algebra, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-smooth-morphism-classical]: def-smooth-morphism-classical depends on thm-ag-standard-smooth-geometric-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-smooth-map-tangent-surjectivity-criterion]: lem-smooth-map-tangent-surjectivity-criterion depends on thm-ag-submersion-criterion-standard-smooth, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-dominant-map-generic-differential-surjectivity-char-zero]: lem-dominant-map-generic-differential-surjectivity-char-zero depends on thm-ag-field-differentials-separable-rank, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [cex-generic-target-smoothness-needs-smooth-source]: cex-generic-target-smoothness-needs-smooth-source depends on thm-ag-standard-smooth-geometric-regularity, which is neither declared by this batch nor an item on disk
content-policy: 874 scoped item(s), 100 error(s), 0 warning(s)
```

### owned-policy-final

```text
ERROR batch-item-already-exists [def-tensor-product-total-complex-of-chain-complexes]: def-tensor-product-total-complex-of-chain-complexes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero]: lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-tor-by-resolving-the-left-module]: def-tor-by-resolving-the-left-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-tor-by-resolving-the-right-module]: def-tor-by-resolving-the-right-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-tor-zero-is-the-tensor-product-in-either-construction]: prop-tor-zero-is-the-tensor-product-in-either-construction already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-each-tor-construction-is-covariant-in-both-variables]: prop-each-tor-construction-is-covariant-in-both-variables already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-positive-tor-vanishes-when-the-resolved-variable-is-projective]: prop-positive-tor-vanishes-when-the-resolved-variable-is-projective already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-tensor-double-complex-of-two-projective-resolutions]: def-tensor-double-complex-of-two-projective-resolutions already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-left-and-right-flat-modules-over-an-arbitrary-ring]: def-left-and-right-flat-modules-over-an-arbitrary-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-projective-modules-are-flat-over-an-arbitrary-ring]: lem-projective-modules-are-flat-over-an-arbitrary-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [rem-projective-modules-are-flat-is-supplied-by-mod-three]: rem-projective-modules-are-flat-is-supplied-by-mod-three already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-the-rows-of-the-augmented-tensor-double-complex-are-exact]: lem-the-rows-of-the-augmented-tensor-double-complex-are-exact already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-the-columns-of-the-augmented-tensor-double-complex-are-exact]: lem-the-columns-of-the-augmented-tensor-double-complex-are-exact already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic]: thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions]: prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-balanced-tor-bifunctor]: def-balanced-tor-bifunctor already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-long-exact-tor-sequence-in-the-left-module-variable]: thm-long-exact-tor-sequence-in-the-left-module-variable already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-long-exact-tor-sequence-in-the-right-module-variable]: thm-long-exact-tor-sequence-in-the-right-module-variable already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-tor-dimension-shifting]: prop-tor-dimension-shifting already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes]: thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes]: thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes]: cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion]: thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-tor-of-two-cyclic-abelian-groups]: thm-tor-of-two-cyclic-abelian-groups already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-higher-tor-over-the-integers-vanishes]: thm-higher-tor-over-the-integers-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-torsion-free-abelian-groups-are-flat]: prop-torsion-free-abelian-groups-are-flat already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-over-a-pid-flat-is-equivalent-to-torsion-free]: thm-over-a-pid-flat-is-equivalent-to-torsion-free already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-tor-symmetry-over-a-commutative-ring]: thm-tor-symmetry-over-a-commutative-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-flat-dimension-of-a-module]: def-flat-dimension-of-a-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-flat-dimension-at-most-n-iff-higher-tor-vanishes]: thm-flat-dimension-at-most-n-iff-higher-tor-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-left-and-right-weak-global-dimension]: def-left-and-right-weak-global-dimension already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-weak-global-dimension-is-at-most-corresponding-global-dimension]: prop-weak-global-dimension-is-at-most-corresponding-global-dimension already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric]: thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-semisimple-rings-have-vanishing-positive-tor-and-ext]: prop-semisimple-rings-have-vanishing-positive-tor-and-ext already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-the-integers-have-weak-and-global-dimension-one]: prop-the-integers-have-weak-and-global-dimension-one already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-takes-two-left-modules-over-an-arbitrary-ring]: fs-tor-takes-two-left-modules-over-an-arbitrary-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-the-two-tor-constructions-are-equal-by-definition]: fs-the-two-tor-constructions-are-equal-by-definition already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-flat-modules-have-projective-dimension-zero]: fs-flat-modules-have-projective-dimension-zero already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-one-vanishes-only-when-one-module-is-projective]: fs-tor-one-vanishes-only-when-one-module-is-projective already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-is-symmetric-over-every-noncommutative-ring]: fs-tor-is-symmetric-over-every-noncommutative-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m]: fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-tor-of-two-cyclic-groups-from-a-two-term-resolution]: ex-tor-of-two-cyclic-groups-from-a-two-term-resolution already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-tor-detects-n-torsion]: ex-tor-detects-n-torsion already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-a-flat-nonprojective-module]: ex-a-flat-nonprojective-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-localization-is-flat-and-has-vanishing-positive-tor]: ex-localization-is-flat-and-has-vanishing-positive-tor already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-the-tensor-double-complex-in-low-degrees]: ex-the-tensor-double-complex-in-low-degrees already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-tor-symmetry-over-a-commutative-ring]: ex-tor-symmetry-over-a-commutative-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [cex-a-noncommutative-handedness-error-in-tor]: cex-a-noncommutative-handedness-error-in-tor already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers]: ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers already has an item file and cannot be minted by this future batch
content-policy: 119 scoped item(s), 49 error(s), 0 warning(s)
```

### urls

```text
url-sweep: 0/5 live; 5 failed; 0 recoverable from the archive; 0 suspect -> /tmp/f34b4/url-liveness.json
FAIL 0 https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf — curl: (6) Could not resolve host: math.mit.edu
  no archived snapshot under any host variant — re-sourcing is justified here
FAIL 0 https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf — curl: (6) Could not resolve host: math.mit.edu
  no archived snapshot under any host variant — re-sourcing is justified here
FAIL 0 https://math.mit.edu/~hrm/palestine/weibel/04-homological_dimension.pdf — curl: (6) Could not resolve host: math.mit.edu
  no archived snapshot under any host variant — re-sourcing is justified here
FAIL 0 https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf — curl: (6) Could not resolve host: math.mit.edu
  no archived snapshot under any host variant — re-sourcing is justified here
FAIL 0 https://math.ucla.edu/~sharifi/homalg.pdf — curl: (6) Could not resolve host: math.ucla.edu
  no archived snapshot under any host variant — re-sourcing is justified here
```

### backing-final

```text
source-backing: 49 authored result(s) have no openable source left
ERROR backing-lost: tor-flatness-and-global-dimension: lem-tor-commutes-with-filtered-colimits-in-either-variable — backed only by https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
    "Corollary 2.6.17 (filtered colimits of Tor)" via Weibel, An Introduction to Homological Algebra @ Corollary 2.6.17, p.58; §2.7, 2.7.1–2.7.3, pp.58–60
ERROR backing-lost: tor-flatness-and-global-dimension: def-tensor-product-total-complex-of-chain-complexes — backed only by https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
    "Tensor Product of Complexes 2.7.1" via Weibel, An Introduction to Homological Algebra @ Corollary 2.6.17, p.58; §2.7, 2.7.1–2.7.3, pp.58–60
ERROR backing-lost: tor-flatness-and-global-dimension: thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic — backed only by https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf, https://math.ucla.edu/~sharifi/homalg.pdf
    "Theorem 2.7.2 (balance), including proof" via Weibel, An Introduction to Homological Algebra @ Corollary 2.6.17, p.58; §2.7, 2.7.1–2.7.3, pp.58–60
    "Proposition 3.5.9, both proofs" via Romyar Sharifi, Homological Algebra @ §3.5, 3.5.1–3.5.14, pp.65–69
ERROR backing-lost: tor-flatness-and-global-dimension: thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion — backed only by https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
    "Calculation 3.1.1" via Weibel, An Introduction to Homological Algebra @ §§3.1–3.2, pp.66–73 (through 3.2.13)
ERROR backing-lost: tor-flatness-and-global-dimension: thm-higher-tor-over-the-integers-vanishes — backed only by https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
    "Proposition 3.1.2, higher-degree vanishing clause" via Weibel, An Introduction to Homological Algebra @ §§3.1–3.2, pp.66–73 (through 3.2.13)
ERROR backing-lost: tor-flatness-and-global-dimension: prop-tor-one-of-abelian-groups-is-a-torsion-group — backed only by https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
    "Proposition 3.1.2, torsion clause" via Weibel, An Introduction to Homological Algebra @ §§3.1–3.2, pp.66–73 (through 3.2.13)
ERROR backing-lost: tor-flatness-and-global-dimension: thm-tor-one-of-fraction-field-mod-ring-detects-torsion — backed only by https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf, https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
    "Proposition 3.1.3 (Q/Z)" via Weibel, An Introduction to Homological Algebra @ §§3.1–3.2, pp.66–73 (through 3.2.13)
    "Exercise 3.1.2 (torsion over a domain)" via Weibel, An Introduction to Homological Algebra @ §§3.1–3.2, pp.66–73 (through 3.2.13)
ERROR backing-lost: tor-flatness-and-global-dimension: prop-torsion-free-abelian-groups-are-flat — backed only by https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
    "Proposition 3.1.4 (torsion-free implies positive Tor vanishing)" via Weibel, An Introduction to Homological Algebra @ §§3.1–3.2, pp.66–73 (through 3.2.13)
ERROR backing-lost: tor-flatness-and-global-dimension: thm-over-a-pid-flat-is-equivalent-to-torsion-free — backed only by https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf, https://math.ucla.edu/~sharifi/homalg.pdf
    "Corollary 3.1.5" via Weibel, An Introduction to Homological Algebra @ §§3.1–3.2, pp.66–73 (through 3.2.13)
    "Lemma 3.5.12 and following PID paragraph" via Romyar Sharifi, Homological Algebra @ §3.5, 3.5.1–3.5.14, pp.65–69
ERROR backing-lost: tor-flatness-and-global-dimension: thm-tor-symmetry-over-a-commutative-ring — backed only by https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf, https://math.ucla.edu/~sharifi/homalg.pdf
    "Remark (Balancing Tor)" via Weibel, An Introduction to Homological Algebra @ §§3.1–3.2, pp.66–73 (through 3.2.13)
    "Corollary 3.5.10" via Romyar Sharifi, Homological Algebra @ §3.5, 3.5.1–3.5.14, pp.65–69
ERROR backing-lost: tor-flatness-and-global-dimension: ex-periodic-tor-over-the-integers-modulo-m — backed only by https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf, https://math.mit.edu/~hrm/palestine/weibel/04-homological_dimension.pdf
    "Calculation 3.1.6 (periodic resolution over Z/m)" via Weibel, An Introduction to Homological Algebra @ §§3.1–3.2, pp.66–73 (through 3.2.13)
    "Example 4.1.4, non-squarefree Z/m; Example 4.1.7" via Weibel, An Introduction to Homological Algebra @ §4.1, pp.91–95 through proof of 4.1.3
ERROR backing-lost: tor-flatness-and-global-dimension: thm-tor-of-a-regular-principal-quotient — backed only by https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
    "Example 3.1.7 (one-sided regular element)" via Weibel, An Introduction to Homological Algebra @ §§3.1–3.2, pp.66–73 (through 3.2.13)
ERROR backing-lost: tor-flatness-and-global-dimension: ex-zero-divisors-correct-the-principal-quotient-tor-formula — backed only by https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
    "Exercise 3.1.1 (zero divisor)" via Weibel, An Introduction to Homological Algebra @ §§3.1–3.2, pp.66–73 (through 3.2.13)
ERROR backing-lost: tor-flatness-and-global-dimension: thm-tor-one-of-two-ideal-quotients — backed only by https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
    "Exercise 3.1.3 (two quotient ideals)" via Weibel, An Introduction to Homological Algebra @ §§3.1–3.2, pp.66–73 (through 3.2.13)
ERROR backing-lost: tor-flatness-and-global-dimension: def-left-and-right-flat-modules-over-an-arbitrary-ring — backed only by https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
    "Definition 3.2.1; projective implies flat and Q nonprojective" via Weibel, An Introduction to Homological Algebra @ §§3.1–3.2, pp.66–73 (through 3.2.13)
ERROR backing-lost: tor-flatness-and-global-dimension: ex-localization-is-flat-and-has-vanishing-positive-tor — backed only by https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf, https://math.ucla.edu/~sharifi/homalg.pdf
    "Theorem 3.2.2 (central localization)" via Weibel, An Introduction to Homological Algebra @ §§3.1–3.2, pp.66–73 (through 3.2.13)
    "Lemma 3.5.14, statement; corrected localization proof required" via Romyar Sharifi, Homological Algebra @ §3.5, 3.5.1–3.5.14, pp.65–69
ERROR backing-lost: tor-flatness-and-global-dimension: thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes — backed only by https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
    "Exercise 3.2.1 (flatness criteria)" via Weibel, An Introduction to Homological Algebra @ §§3.1–3.2, pp.66–73 (through 3.2.13)
ERROR backing-lost: tor-flatness-and-global-dimension: ex-a-torsion-free-nonflat-ideal-in-a-polynomial-ring — backed only by https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf, https://math.ucla.edu/~sharifi/homalg.pdf
    "Exercise 3.2.3 (torsion-free nonflat ideal)" via Weibel, An Introduction to Homological Algebra @ §§3.1–3.2, pp.66–73 (through 3.2.13)
    "Example 3.5.13" via Romyar Sharifi, Homological Algebra @ §3.5, 3.5.1–3.5.14, pp.65–69
ERROR backing-lost: tor-flatness-and-global-dimension: thm-flatness-is-equivalent-to-character-dual-injectivity-and-the-one-sided-ideal-test — backed only by https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
    "Definition 3.2.3 and Proposition 3.2.4 (character dual and ideal tests)" via Weibel, An Introduction to Homological Algebra @ §§3.1–3.2, pp.66–73 (through 3.2.13)
ERROR backing-lost: tor-flatness-and-global-dimension: lem-the-rational-circle-is-an-injective-cogenerator-of-abelian-groups — backed only by https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
    "Lemma 3.2.5 and Exercise 3.2.4 (dual detects monomorphisms/exactness)" via Weibel, An Introduction to Homological Algebra @ §§3.1–3.2, pp.66–73 (through 3.2.13)
ERROR backing-lost: tor-flatness-and-global-dimension: thm-supplied-flat-resolutions-compute-tor-in-either-variable — backed only by https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf, https://math.ucla.edu/~sharifi/homalg.pdf
    "Flat Resolution Lemma 3.2.8, complete induction proof" via Weibel, An Introduction to Homological Algebra @ §§3.1–3.2, pp.66–73 (through 3.2.13)
    "Remark 3.5.11" via Romyar Sharifi, Homological Algebra @ §3.5, 3.5.1–3.5.14, pp.65–69
ERROR backing-lost: tor-flatness-and-global-dimension: def-flat-dimension-of-a-module — backed only by https://math.mit.edu/~hrm/palestine/weibel/04-homological_dimension.pdf
    "Definition 4.1.1, flat-dimension clause" via Weibel, An Introduction to Homological Algebra @ §4.1, pp.91–95 through proof of 4.1.3
ERROR backing-lost: tor-flatness-and-global-dimension: thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric — backed only by https://math.mit.edu/~hrm/palestine/weibel/04-homological_dimension.pdf
    "Tor-dimension Theorem 4.1.3, left/right all-module and Tor suprema" via Weibel, An Introduction to Homological Algebra @ §4.1, pp.91–95 through proof of 4.1.3
ERROR backing-lost: tor-flatness-and-global-dimension: cor-weak-dimension-can-be-tested-on-one-sided-ideal-quotients — backed only by https://math.mit.edu/~hrm/palestine/weibel/04-homological_dimension.pdf
    "Tor-dimension Theorem 4.1.3, cyclic ideal tests" via Weibel, An Introduction to Homological Algebra @ §4.1, pp.91–95 through proof of 4.1.3
ERROR backing-lost: tor-flatness-and-global-dimension: ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers — backed only by https://math.mit.edu/~hrm/palestine/weibel/04-homological_dimension.pdf
    "Example 4.1.4, field and integer cases; fd≤pd" via Weibel, An Introduction to Homological Algebra @ §4.1, pp.91–95 through proof of 4.1.3
ERROR backing-lost: tor-flatness-and-global-dimension: cor-flat-dimension-is-detected-by-tor-in-degree-n-plus-one — backed only by https://math.mit.edu/~hrm/palestine/weibel/04-homological_dimension.pdf
    "fd Lemma 4.1.10, all four clauses" via Weibel, An Introduction to Homological Algebra @ §4.1, pp.91–95 through proof of 4.1.3
ERROR backing-lost: tor-flatness-and-global-dimension: def-tor-by-resolving-the-left-module — backed only by https://math.ucla.edu/~sharifi/homalg.pdf
    "Definitions 3.5.1–3.5.2; Remarks 3.5.3–3.5.4" via Romyar Sharifi, Homological Algebra @ §3.5, 3.5.1–3.5.14, pp.65–69
ERROR backing-lost: tor-flatness-and-global-dimension: ex-tor-detects-n-torsion — backed only by https://math.ucla.edu/~sharifi/homalg.pdf
    "Example 3.5.5" via Romyar Sharifi, Homological Algebra @ §3.5, 3.5.1–3.5.14, pp.65–69
ERROR backing-lost: tor-flatness-and-global-dimension: thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes — backed only by https://math.ucla.edu/~sharifi/homalg.pdf
    "Definition 3.5.6; Lemma 3.5.7" via Romyar Sharifi, Homological Algebra @ §3.5, 3.5.1–3.5.14, pp.65–69
ERROR backing-lost: tor-flatness-and-global-dimension: lem-projective-modules-are-flat-over-an-arbitrary-ring — backed only by https://math.ucla.edu/~sharifi/homalg.pdf
    "Lemma 3.5.8" via Romyar Sharifi, Homological Algebra @ §3.5, 3.5.1–3.5.14, pp.65–69
ERROR backing-lost: spectral-sequences: thm-five-term-exact-sequence-of-a-first-quadrant-homological-spectral-sequence — backed only by https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf, https://math.ucla.edu/~sharifi/homalg.pdf
    "Exercise 5.1.3 (five-term sequences)" via Weibel, An Introduction to Homological Algebra @ Exercise 5.1.3; §5.2 through Exercises 5.2.1–2; §5.4; §5.5 through Example 5.5.4, pp.121–124,131–136
    "Lemma 4.1.18; Terminology 4.1.19 (five-term exact sequence)" via Romyar Sharifi, Homological Algebra @ §4.1 and §4.2 through Theorem 4.2.3, pp.77–81
ERROR backing-lost: spectral-sequences: def-homological-spectral-sequence — backed only by https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    "Definition 5.2.1 (homology spectral sequence and morphism)" via Weibel, An Introduction to Homological Algebra @ Exercise 5.1.3; §5.2 through Exercises 5.2.1–2; §5.4; §5.5 through Example 5.5.4, pp.121–124,131–136
ERROR backing-lost: spectral-sequences: prop-degree-reasons-force-stabilization-in-a-bounded-region — backed only by https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf, https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf, https://math.ucla.edu/~sharifi/homalg.pdf
    "Example 5.2.2 (first quadrant stabilization)" via Weibel, An Introduction to Homological Algebra @ Exercise 5.1.3; §5.2 through Exercises 5.2.1–2; §5.4; §5.5 through Example 5.5.4, pp.121–124,131–136
    "Example 5.4.3 (canonical bounds)" via Weibel, An Introduction to Homological Algebra @ Exercise 5.1.3; §5.2 through Exercises 5.2.1–2; §5.4; §5.5 through Example 5.5.4, pp.121–124,131–136
    "Definition 4.1.10; Lemma 4.1.11; Remark 4.1.12 (quadrants and stabilization)" via Romyar Sharifi, Homological Algebra @ §4.1 and §4.2 through Theorem 4.2.3, pp.77–81
ERROR backing-lost: spectral-sequences: def-cohomological-spectral-sequence — backed only by https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf, https://math.ucla.edu/~sharifi/homalg.pdf, https://math.ucla.edu/~sharifi/homalg.pdf
    "Dual Definition 5.2.3" via Weibel, An Introduction to Homological Algebra @ Exercise 5.1.3; §5.2 through Exercises 5.2.1–2; §5.4; §5.5 through Example 5.5.4, pp.121–124,131–136
    "Definition 4.1.1" via Romyar Sharifi, Homological Algebra @ §4.1 and §4.2 through Theorem 4.2.3, pp.77–81
    "Definition 4.1.2 (page terms, differential and total degree)" via Romyar Sharifi, Homological Algebra @ §4.1 and §4.2 through Theorem 4.2.3, pp.77–81
ERROR backing-lost: spectral-sequences: lem-spectral-sequence-isomorphism-on-one-page-persists — backed only by https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf, https://math.ucla.edu/~sharifi/homalg.pdf
    "Mapping Lemma 5.2.4" via Weibel, An Introduction to Homological Algebra @ Exercise 5.1.3; §5.2 through Exercises 5.2.1–2; §5.4; §5.5 through Example 5.5.4, pp.121–124,131–136
    "Lemma 4.1.4" via Romyar Sharifi, Homological Algebra @ §4.1 and §4.2 through Theorem 4.2.3, pp.77–81
ERROR backing-lost: spectral-sequences: def-abutment-to-a-filtered-object — backed only by https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf, https://math.ucla.edu/~sharifi/homalg.pdf
    "Bounded Convergence 5.2.5" via Weibel, An Introduction to Homological Algebra @ Exercise 5.1.3; §5.2 through Exercises 5.2.1–2; §5.4; §5.5 through Example 5.5.4, pp.121–124,131–136
    "Definition 4.1.14; Remark 4.1.15 (bounded abutment, endpoints corrected)" via Romyar Sharifi, Homological Algebra @ §4.1 and §4.2 through Theorem 4.2.3, pp.77–81
ERROR backing-lost: spectral-sequences: def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence — backed only by https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf, https://math.ucla.edu/~sharifi/homalg.pdf
    "Example 5.2.6 (edge maps)" via Weibel, An Introduction to Homological Algebra @ Exercise 5.1.3; §5.2 through Exercises 5.2.1–2; §5.4; §5.5 through Example 5.5.4, pp.121–124,131–136
    "Remark 4.1.16; Terminology 4.1.17 (edge maps, epimorphism/monomorphism error corrected)" via Romyar Sharifi, Homological Algebra @ §4.1 and §4.2 through Theorem 4.2.3, pp.77–81
ERROR backing-lost: spectral-sequences: prop-a-spectral-sequence-supported-in-one-row-or-column-collapses — backed only by https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    "Definition 5.2.7 (single-line collapse)" via Weibel, An Introduction to Homological Algebra @ Exercise 5.1.3; §5.2 through Exercises 5.2.1–2; §5.4; §5.5 through Example 5.5.4, pp.121–124,131–136
ERROR backing-lost: spectral-sequences: def-filtered-chain-complex — backed only by https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf, https://math.ucla.edu/~sharifi/homalg.pdf
    "Filtration and exhaustiveness; Construction Theorem 5.4.1" via Weibel, An Introduction to Homological Algebra @ Exercise 5.1.3; §5.2 through Exercises 5.2.1–2; §5.4; §5.5 through Example 5.5.4, pp.121–124,131–136
    "Definition 4.2.1" via Romyar Sharifi, Homological Algebra @ §4.1 and §4.2 through Theorem 4.2.3, pp.77–81
ERROR backing-lost: spectral-sequences: def-exhaustive-separated-bounded-and-finite-filtration — backed only by https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf, https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    "Definition 5.4.2 (boundedness)" via Weibel, An Introduction to Homological Algebra @ Exercise 5.1.3; §5.2 through Exercises 5.2.1–2; §5.4; §5.5 through Example 5.5.4, pp.121–124,131–136
    "Definition 5.4.4, Hausdorff clause" via Weibel, An Introduction to Homological Algebra @ Exercise 5.1.3; §5.2 through Exercises 5.2.1–2; §5.4; §5.5 through Example 5.5.4, pp.121–124,131–136
ERROR backing-lost: spectral-sequences: def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex — backed only by https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf, https://math.ucla.edu/~sharifi/homalg.pdf
    "Construction 5.4.6 (approximate cycles, graded Z and B)" via Weibel, An Introduction to Homological Algebra @ Exercise 5.1.3; §5.2 through Exercises 5.2.1–2; §5.4; §5.5 through Example 5.5.4, pp.121–124,131–136
    "Remark 4.1.5; Notation 4.1.6 (nested graded cycles and boundaries)" via Romyar Sharifi, Homological Algebra @ §4.1 and §4.2 through Theorem 4.2.3, pp.77–81
ERROR backing-lost: spectral-sequences: thm-the-next-page-is-the-homology-of-the-current-page — backed only by https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    "Lemma 5.4.7, full kernel/image proof" via Weibel, An Introduction to Homological Algebra @ Exercise 5.1.3; §5.2 through Exercises 5.2.1–2; §5.4; §5.5 through Example 5.5.4, pp.121–124,131–136
ERROR backing-lost: spectral-sequences: thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology — backed only by https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    "Classical Convergence Theorem 5.5.1, bounded case and proof" via Weibel, An Introduction to Homological Algebra @ Exercise 5.1.3; §5.2 through Exercises 5.2.1–2; §5.4; §5.5 through Example 5.5.4, pp.121–124,131–136
ERROR backing-lost: spectral-sequences: lem-edge-homomorphisms-are-natural — backed only by https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    "Example 5.5.2 and Definition 5.5.3 (canonical edge images)" via Weibel, An Introduction to Homological Algebra @ Exercise 5.1.3; §5.2 through Exercises 5.2.1–2; §5.4; §5.5 through Example 5.5.4, pp.121–124,131–136
ERROR backing-lost: spectral-sequences: def-morphism-of-spectral-sequences — backed only by https://math.ucla.edu/~sharifi/homalg.pdf
    "Definition 4.1.3 (morphisms)" via Romyar Sharifi, Homological Algebra @ §4.1 and §4.2 through Theorem 4.2.3, pp.77–81
ERROR backing-lost: spectral-sequences: def-limiting-cycles-boundaries-and-e-infinity — backed only by https://math.ucla.edu/~sharifi/homalg.pdf
    "Definition 4.1.7; Terminology 4.1.8; Remark 4.1.9 (limits, with correction)" via Romyar Sharifi, Homological Algebra @ §4.1 and §4.2 through Theorem 4.2.3, pp.77–81
ERROR backing-lost: spectral-sequences: def-collapse-at-a-page — backed only by https://math.ucla.edu/~sharifi/homalg.pdf
    "Definition 4.1.13 (degeneration)" via Romyar Sharifi, Homological Algebra @ §4.1 and §4.2 through Theorem 4.2.3, pp.77–81
ERROR backing-lost: spectral-sequences: def-r-page-of-the-spectral-sequence-of-a-filtered-complex — backed only by https://math.ucla.edu/~sharifi/homalg.pdf
    "Notation 4.2.2" via Romyar Sharifi, Homological Algebra @ §4.1 and §4.2 through Theorem 4.2.3, pp.77–81
ERROR backing-lost: spectral-sequences: thm-the-cohomological-filtered-complex-construction — backed only by https://math.ucla.edu/~sharifi/homalg.pdf
    "Theorem 4.2.3 with full proof" via Romyar Sharifi, Homological Algebra @ §4.1 and §4.2 through Theorem 4.2.3, pp.77–81
A replacement SOURCE is the remedy, never a dropped result: find a different
treatment carrying the same definition/theorem/example, re-read the range, and
rewrite that source's contents rows faithfully.
```

### fetch-stamp

```text
ERROR fetch-check-dead: tor-flatness-and-global-dimension: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf — EAI_AGAIN
ERROR fetch-check-dead: tor-flatness-and-global-dimension: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf — EAI_AGAIN
ERROR fetch-check-dead: tor-flatness-and-global-dimension: https://math.mit.edu/~hrm/palestine/weibel/04-homological_dimension.pdf — EAI_AGAIN
ERROR fetch-check-dead: tor-flatness-and-global-dimension: https://math.ucla.edu/~sharifi/homalg.pdf — EAI_AGAIN
ERROR fetch-check-dead: spectral-sequences: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf — EAI_AGAIN
ERROR fetch-check-dead: spectral-sequences: https://math.ucla.edu/~sharifi/homalg.pdf — EAI_AGAIN
source-fetch-check: 0/6 source(s) fetch-verified (0 newly stamped), 6 FAILED
```

### fetch-gate

```text
ERROR fetch-check-unstamped: tor-flatness-and-global-dimension: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
ERROR fetch-check-unstamped: tor-flatness-and-global-dimension: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
ERROR fetch-check-unstamped: tor-flatness-and-global-dimension: https://math.mit.edu/~hrm/palestine/weibel/04-homological_dimension.pdf
ERROR fetch-check-unstamped: tor-flatness-and-global-dimension: https://math.ucla.edu/~sharifi/homalg.pdf
ERROR fetch-check-unstamped: spectral-sequences: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
ERROR fetch-check-unstamped: spectral-sequences: https://math.ucla.edu/~sharifi/homalg.pdf
source-fetch-check: 0/6 source(s) fetch-verified, 6 FAILED
```

### Historical manifest input fingerprints

```json
[
  {
    "file": "research/erdos-cycle-1-batch-1.pages.json",
    "sha256": "1154f87534ae35563e27c437a5807009a6e7c929499a3f23df402f6375f0d814"
  },
  {
    "file": "research/erdos-cycle-1-uniform.pages.json",
    "sha256": "81c7ca77033a39aa80358b14c1a5855e5a6cf75f43574d644f347a53eb69e708"
  },
  {
    "file": "research/freegroups-1-batch-1.pages.json",
    "sha256": "50cc329aeeead93a8afdb42fbadeaaae009ec3aa208d48994cf3aa47dd3bdcc6"
  },
  {
    "file": "research/frontier-1-batch-1.pages.json",
    "sha256": "abc1cc3128ad8e538feff66ea7e6a180b1b545ec5ed529b788f08301ba3aa1be"
  },
  {
    "file": "research/frontier-1-batch-2.pages.json",
    "sha256": "691e95f1d06cf616e917e822be4c2a74b99e3a576425568e19243e14ed699132"
  },
  {
    "file": "research/frontier-10-batch-1.pages.json",
    "sha256": "84b88fa0dc28be0e1b9f0ee28eb54b2cae6c1fdcc432c374c90b28a0cf6eb6de"
  },
  {
    "file": "research/frontier-10-batch-2.pages.json",
    "sha256": "65f40fc72f43216168d87e7357ec7a5d85e435169531ab7e5e3bce93b854990a"
  },
  {
    "file": "research/frontier-10-batch-3.pages.json",
    "sha256": "42c7305fb120a2ee11bcce74ae1de955b74e1165bdbd79a062236b11c5ccb984"
  },
  {
    "file": "research/frontier-10-batch-4.pages.json",
    "sha256": "dcfb8a21ef598a58d760d7f7b042908f38381042248d1ea4d48f80e9687a6960"
  },
  {
    "file": "research/frontier-10-batch-5.pages.json",
    "sha256": "a245592ffc9296c879941fdd574239ad71a2b040f914751478f8ec36719d6b61"
  },
  {
    "file": "research/frontier-10-batch-6.pages.json",
    "sha256": "09a47c4f271aaf7e3841d7d4bfaf61342f99da992300d4200effe10f0f93cadf"
  },
  {
    "file": "research/frontier-10-batch-7.pages.json",
    "sha256": "f4cb051019e3652d32b245427114489f973fa2cf7cd1493746940649e4ba95b9"
  },
  {
    "file": "research/frontier-10-batch-8.pages.json",
    "sha256": "fe5b308e7b91a6c846179332d6eeb666bfde52ca5fcab975c2655f19b61904a1"
  },
  {
    "file": "research/frontier-10-batch-9.pages.json",
    "sha256": "402e2ea202fa8d0f8b47e65f05a80ffc9da0ab988c81feb4f03fd2458e629392"
  },
  {
    "file": "research/frontier-11-batch-1.pages.json",
    "sha256": "d5ac28b8fd3fe375eddcdb09aefacfd31d16cec068631932898852e2b5281868"
  },
  {
    "file": "research/frontier-11-batch-2.pages.json",
    "sha256": "bfaf84c7cf28a1eacba585acbb429f6f274bea5cfeb5f8034b8ef65c69fea360"
  },
  {
    "file": "research/frontier-11-batch-3.pages.json",
    "sha256": "8f63c22ddd41b5d24a267be3347a0c1cc4fff743af06d2f5c7965bc9a97765d5"
  },
  {
    "file": "research/frontier-11-batch-4.pages.json",
    "sha256": "0359e6417f168aa8c5c8e8d78564588aa4063ee591529586fc3f7abea99c6957"
  },
  {
    "file": "research/frontier-11-batch-5.pages.json",
    "sha256": "1133e781d50fadfc49fe88e1747a6be30a255480907274a013bde50d6eed5fd0"
  },
  {
    "file": "research/frontier-12-batch-1.pages.json",
    "sha256": "d853370a35ba5e5109cc9f7035e4dd16857da7d91b135df173f40a6ce41d16d0"
  },
  {
    "file": "research/frontier-12-batch-2.pages.json",
    "sha256": "26e29a3f23efc7155776490ef951a585ecb254c52c8b900017f67c6b6904580a"
  },
  {
    "file": "research/frontier-12-batch-3.pages.json",
    "sha256": "813f9459f24b33da43458ef7288d2bf3e8a8a8db63b621daaa49cdeedcf66a5a"
  },
  {
    "file": "research/frontier-12-batch-4.pages.json",
    "sha256": "598a8c5b1226d836d7f6ffddb1b32aaefe1699d5268110aa6084db1cb298ddaa"
  },
  {
    "file": "research/frontier-12-batch-5.pages.json",
    "sha256": "e0fc02296030ca1403385534ef84ba0212099eb1114cb4c1f0ef751bb6c034e0"
  },
  {
    "file": "research/frontier-12-batch-6.pages.json",
    "sha256": "3a3bf242fdfcfd4245709afbd88f1c0e2f731c6516c549968bfdefb2a0ea76c5"
  },
  {
    "file": "research/frontier-12-batch-7.pages.json",
    "sha256": "a9ba980d77ee83a9a113be2ea5ef68456d6c2688f40d3ae190aa21b3892a4050"
  },
  {
    "file": "research/frontier-13-batch-1.pages.json",
    "sha256": "1fe07c040b75ba54d292229a48253a1c2b067a5b8a16c4eff8a31bdf3808c9c0"
  },
  {
    "file": "research/frontier-13-batch-2.pages.json",
    "sha256": "7a5edccf8c3501d97f8eba66551cf16041833c1779694d150cd2a17526902460"
  },
  {
    "file": "research/frontier-13-batch-3.pages.json",
    "sha256": "3c69749ab7a29d6ae5f633d869da586ce36616ee8d265a83965ecc5065620309"
  },
  {
    "file": "research/frontier-13-batch-4.pages.json",
    "sha256": "4a2f881f3a18c88f7097caec2e66fb36cc876eaa426b57f834c79f173d4d4771"
  },
  {
    "file": "research/frontier-13-batch-5.pages.json",
    "sha256": "ee77cc50ba583c1930ed2e89b8e15a7f8577063c3e926cfbb374158ead90fe8b"
  },
  {
    "file": "research/frontier-13-batch-6.pages.json",
    "sha256": "57b4ad251539432a195e6448dea52937c9977a0424de1b22dc888e57e09662fd"
  },
  {
    "file": "research/frontier-13-batch-7.pages.json",
    "sha256": "fd5f56b47c341266229e781c57e4e92f4aff7f834ff901aca72a13d57fc246c4"
  },
  {
    "file": "research/frontier-14-batch-1.pages.json",
    "sha256": "0b5c7024f0dd7166ce00fefc3c0f57e63304fda8e950e766e0fd3c3f121dec06"
  },
  {
    "file": "research/frontier-14-batch-2.pages.json",
    "sha256": "3f7f755cbd5fdbc51c5cfdfd533d30bb89eaeea3a8073d349b3c0b47cb7d7a5b"
  },
  {
    "file": "research/frontier-14-batch-3.pages.json",
    "sha256": "2cccd85e76df734ebb11ea3dff8ce214bb09e832ca916f96846456363307a27a"
  },
  {
    "file": "research/frontier-14-batch-4.pages.json",
    "sha256": "0d24093f6ed6e75c141d8434e1ebde7b6c1d34aba42367f884a160931d0a7768"
  },
  {
    "file": "research/frontier-14-batch-5.pages.json",
    "sha256": "0af17a4edb015e57e1655b339752bbd784ee9687b883c2ef30fdb0c26c0d8fd0"
  },
  {
    "file": "research/frontier-14-batch-6.pages.json",
    "sha256": "8cffe0c19e92d15a36a3d395856b48f118703a609e65dd7268a1ad2269873a7f"
  },
  {
    "file": "research/frontier-14-batch-7.pages.json",
    "sha256": "46045e9cc41d9b916a84e4981bfffc3331bf93f4f5879238189b942240834bdf"
  },
  {
    "file": "research/frontier-15-batch-1.pages.json",
    "sha256": "ff591c85052b882e22de4ab056bfc90ce9196bba7a3df6e53aa1c41a5e5f40ab"
  },
  {
    "file": "research/frontier-15-batch-2.pages.json",
    "sha256": "4e16d246acda88e1b45c9407d42f61cfa36fe28398b984496eb25572df92eb9f"
  },
  {
    "file": "research/frontier-15-batch-3.pages.json",
    "sha256": "9b36d0a6f029940eded24e82d65c2a1e32a895c4c460f7c0940a4c489ac9a856"
  },
  {
    "file": "research/frontier-15-batch-4.pages.json",
    "sha256": "fef1e3a554ae5636d2db4984f1e82aa1858efc8bf7828c31540469fdc01bb6e1"
  },
  {
    "file": "research/frontier-15-batch-5.pages.json",
    "sha256": "81bc5b4c7ffb8ff3e814e71496c7602fb1d4db892fac30baedda58e5c890fbce"
  },
  {
    "file": "research/frontier-15-batch-6.pages.json",
    "sha256": "0a455ee185faa6cf9271185864cead949cc92dd64aac4c5becc36311bbade0ed"
  },
  {
    "file": "research/frontier-15-batch-7.pages.json",
    "sha256": "189b74596d9f3ed2b143eccb3f68de5621fc7524a743e2a4c6f0eecb6af15983"
  },
  {
    "file": "research/frontier-16-batch-1.pages.json",
    "sha256": "45f7737a45e025ead5b21f6c27c547af32c92cfbd458d56854ffaadcf196a8a7"
  },
  {
    "file": "research/frontier-16-batch-2.pages.json",
    "sha256": "58b80990ef1af3339ec7e56449a6fbf4cf0a56a4b5c414ed46e1d01a3672fd83"
  },
  {
    "file": "research/frontier-16-batch-3.pages.json",
    "sha256": "e16e98c55b652c5623dd430d2f781e8bde5bbab4ce545c7cc54c1eed56eec0b7"
  },
  {
    "file": "research/frontier-16-batch-4.pages.json",
    "sha256": "06dfdadc4cc90bef268e8cb7dbf860d51d109038ed94602428b2fc91760c7362"
  },
  {
    "file": "research/frontier-16-batch-5.pages.json",
    "sha256": "b5e72810134b73cf0f1a89390e642f1f4122615b4e1386d52ee5ebbe565c011a"
  },
  {
    "file": "research/frontier-16-batch-6.pages.json",
    "sha256": "31dffc9d782ae700f5f6540ae4c6cb8602f946b299dcf4d635faa071637bad86"
  },
  {
    "file": "research/frontier-16-batch-7.pages.json",
    "sha256": "05e69293e42228b3372dc239d428fbda758dae6355849c8a6c7cf77400e11ba7"
  },
  {
    "file": "research/frontier-17-batch-1.pages.json",
    "sha256": "63a20a14e5e5f001c7e1bc52be84713bb3a3a9039b960dcf53a24953bdab5806"
  },
  {
    "file": "research/frontier-17-batch-2.pages.json",
    "sha256": "fc9186aea0732e572c8557ca885be17cd46c75c2f10c8be434deff14bdebb940"
  },
  {
    "file": "research/frontier-17-batch-3.pages.json",
    "sha256": "3f21fda42b4949f83bbd3cc605fe3fa183b149dbdca9acb20027aa4e01c73f3b"
  },
  {
    "file": "research/frontier-17-batch-4.pages.json",
    "sha256": "05e7b3423cd25f2d815523b0d89c51a07807c5f1ac1727ed29b8f8280a187a3d"
  },
  {
    "file": "research/frontier-17-batch-5.pages.json",
    "sha256": "076b53c169424a80f1f9aa543491d382484d6a690591ddaf09509744b0186a8e"
  },
  {
    "file": "research/frontier-17-batch-6.pages.json",
    "sha256": "204e7b6e4bc9b7c35bb40d66a57d5394f1e6cf99344e56a07fc0398b2a2f62ee"
  },
  {
    "file": "research/frontier-17-batch-7.pages.json",
    "sha256": "bd1c25aecb77260b02fb5342949b5fb103289522a014f940a9f07fd2472393d1"
  },
  {
    "file": "research/frontier-17-batch-8.pages.json",
    "sha256": "1567df4d13ca55961a9f54fffe443613afaf3ee659c47e9bd73c6f8029c023eb"
  },
  {
    "file": "research/frontier-17-batch-9.pages.json",
    "sha256": "83e777cf7215de9e8746ea9777a4db441604a80796151f6110df02e6133b95d3"
  },
  {
    "file": "research/frontier-18-batch-1.pages.json",
    "sha256": "c7d670ada89e171cc2105d8fe334a8e89b225f3bd276eefc2d84323eabf65633"
  },
  {
    "file": "research/frontier-18-batch-10.pages.json",
    "sha256": "4cc11105f8f49ead78bde3c62f7b1ab7fc15d06c41073b7b7f0510af79331dfb"
  },
  {
    "file": "research/frontier-18-batch-2.pages.json",
    "sha256": "6408ca39cbb92fa9827c8678ea47491931cc3c6ffa35a4268f6c3d7aba24d459"
  },
  {
    "file": "research/frontier-18-batch-3.pages.json",
    "sha256": "01b5ec70dd9f75b7ae6623f3c138a69f4529ab896f708cd2fb1ffd3e3d73d2a6"
  },
  {
    "file": "research/frontier-18-batch-4.pages.json",
    "sha256": "37b610e106490dddbb08cb0d25f3eccb235ae4510bd507bb95d11ed11d8cfa03"
  },
  {
    "file": "research/frontier-18-batch-5.pages.json",
    "sha256": "06fd54d30badcc0dac50328d4526929b4a74d0b986f9a9f9beff00e98d751175"
  },
  {
    "file": "research/frontier-18-batch-6.pages.json",
    "sha256": "61a47695dac4a391b11fc41a65379c4c5040d84acf437c1b7a1adaac36fed089"
  },
  {
    "file": "research/frontier-18-batch-7.pages.json",
    "sha256": "23750a1d727cb4bdcf43950e5161eafdf836cac766dd0642dc16c9581a44819e"
  },
  {
    "file": "research/frontier-18-batch-8.pages.json",
    "sha256": "fb72278cdc76996f850ec07ad618896b73837c6232ac0ada983308bf277f9753"
  },
  {
    "file": "research/frontier-18-batch-9.pages.json",
    "sha256": "cee8a02d6a67ba0b27f8c8080eac39824a75e6ce7647c3ba13b6054c98ec8f4a"
  },
  {
    "file": "research/frontier-18-step9-changes.pages.json",
    "sha256": "2bcb271313cb93999d60c9b0ee50a420d61b435016f0f6010bfd3b4ac333c669"
  },
  {
    "file": "research/frontier-19-batch-1.pages.json",
    "sha256": "3b850282517658c13b0895af265de2fcc7822b341716850311e33dcbdf0a4578"
  },
  {
    "file": "research/frontier-19-batch-10.pages.json",
    "sha256": "9be77a426a4d21ba72cc924659fc8d4c08af26d2f1b606e87f3c0979a64e441a"
  },
  {
    "file": "research/frontier-19-batch-2.pages.json",
    "sha256": "6863c2d6f7c96e0aed93714c1fe6b679e8fa864766cda56c1d584a8af78f9b98"
  },
  {
    "file": "research/frontier-19-batch-3.pages.json",
    "sha256": "ed449ab72b267e02c7b9f83755a7d19f1d8a176668e1d1d9f6c002787656b5e2"
  },
  {
    "file": "research/frontier-19-batch-4.pages.json",
    "sha256": "94dda69cc21ee3149c193e7bf7c6aa567d24b26105ad07e55e20b1de61951190"
  },
  {
    "file": "research/frontier-19-batch-5.pages.json",
    "sha256": "0e802f967bc157c8174da0965526ace88aa090f3dc1aa40e3b2913d873967b1b"
  },
  {
    "file": "research/frontier-19-batch-6.pages.json",
    "sha256": "7016d0a410e5c1c53d0fb4b0aea8da379c44961e1196863e05efde7b9f764055"
  },
  {
    "file": "research/frontier-19-batch-7.pages.json",
    "sha256": "bff36cc604f01ccfcac89f209bdbf1fc10783899ed028d7bbd74f73e696ec02d"
  },
  {
    "file": "research/frontier-19-batch-8.pages.json",
    "sha256": "c837a521df34f1ca30702827eb690ffa1abfdbe8c71c86479b77de0fc0686199"
  },
  {
    "file": "research/frontier-19-batch-9.pages.json",
    "sha256": "fb30b1e7826b62ce41e89e907e65d4ea404eb5ab4301fd40f223b2ba4a637b3e"
  },
  {
    "file": "research/frontier-19-step9-changes.pages.json",
    "sha256": "2bcb271313cb93999d60c9b0ee50a420d61b435016f0f6010bfd3b4ac333c669"
  },
  {
    "file": "research/frontier-2-batch-1.pages.json",
    "sha256": "7bcaab1f0c3617435203cafb40d96d05c226871673f320676c34952129c20469"
  },
  {
    "file": "research/frontier-2-batch-2.pages.json",
    "sha256": "c31a562a2a6e93592146c4bee8f9710077f038fffbdb1928e8d2809396f302a6"
  },
  {
    "file": "research/frontier-20-batch-1.pages.json",
    "sha256": "5b0061764f226b2eaba5ea365a841deb52e8dd3c42adf2801fadff49d2ca9647"
  },
  {
    "file": "research/frontier-20-batch-10.pages.json",
    "sha256": "fbbb1f80ea1ee2fd81456d2a91b00206b25124fd5fa7377b68540b69b1e732f2"
  },
  {
    "file": "research/frontier-20-batch-2.pages.json",
    "sha256": "ebbb846d3186d8cce5300ca90c850e15bcfae2f4743acd21abe81e384584db67"
  },
  {
    "file": "research/frontier-20-batch-3.pages.json",
    "sha256": "f0f3593b7937485253617af3089c39a91fe33327f935b2c9ea566ee04f6aac10"
  },
  {
    "file": "research/frontier-20-batch-4.pages.json",
    "sha256": "7919db656de306f54b21736553b5ad110f2a14cc2d87bda775e62e144f061384"
  },
  {
    "file": "research/frontier-20-batch-5.pages.json",
    "sha256": "1637175f2e69f79d08de25992b1cc9b932ee9d0ddc2f46346b2671c43766a3fe"
  },
  {
    "file": "research/frontier-20-batch-6.pages.json",
    "sha256": "db4ec9a1a2b2b4bac0b850784122d4ca17d3f1d09bd18f12b5f82e61f9b2a415"
  },
  {
    "file": "research/frontier-20-batch-7.pages.json",
    "sha256": "5971aa505286ca43a8e40350ddcbcb024e785524861cc2bc5412442c53e22987"
  },
  {
    "file": "research/frontier-20-batch-8.pages.json",
    "sha256": "e29d663340b15971c1926568227cdbc771815d89fb5db719b9cebd7d826dfdfe"
  },
  {
    "file": "research/frontier-20-batch-9.pages.json",
    "sha256": "058762c655662817163dd9b8b5a01c83c52eb461c750886e6f66a94d39e7c990"
  },
  {
    "file": "research/frontier-20-full-batch-1.pages.json",
    "sha256": "4a3c9b71bd30d37b2177d7fdcaf9e71563049a0832d7188c6d2b4422ef0daf17"
  },
  {
    "file": "research/frontier-20-full-batch-10.pages.json",
    "sha256": "7b153700a7f17f6e45a968cf5c86201f6550470258bddbe48a7efba9a4bfd529"
  },
  {
    "file": "research/frontier-20-full-batch-2.pages.json",
    "sha256": "8411584b227a708a4ed7eeb4637b3032df83b5dd31c86f52f0e294b8b6ab31ca"
  },
  {
    "file": "research/frontier-20-full-batch-3.pages.json",
    "sha256": "4d25a0dfd952125599fb1a18f64331cbbabdb9743a4b491a11954237541eb3eb"
  },
  {
    "file": "research/frontier-20-full-batch-4.pages.json",
    "sha256": "cb2d3b47c6cf218e82c9c26771aea9f07e7d15667e0f2f82b8585b982aac48f5"
  },
  {
    "file": "research/frontier-20-full-batch-5.pages.json",
    "sha256": "ab8ac50b3bed7b7a8cbae6edc5c95fa7f00269410541a70a8f8a966e0e14f6f5"
  },
  {
    "file": "research/frontier-20-full-batch-6.pages.json",
    "sha256": "b39297b48d039b3ee873621cccd65251f1e3953b16d872ddbf60b655b60ab735"
  },
  {
    "file": "research/frontier-20-full-batch-7.pages.json",
    "sha256": "b3bfc3c0f61f3d8cc4432f3fd26f5d2711a08a710143e2dfb25eb5ab64568180"
  },
  {
    "file": "research/frontier-20-full-batch-8.pages.json",
    "sha256": "db354db377c12928ab5854f66671f5c2fd6493b5ead577b87fddbe9fb92f18c6"
  },
  {
    "file": "research/frontier-20-full-batch-9.pages.json",
    "sha256": "1f559a864e4ca1ba4a20ae77cc67d843f0110adb7140afd73cb7a2efd8ee3219"
  },
  {
    "file": "research/frontier-20-step9-changes.pages.json",
    "sha256": "2bcb271313cb93999d60c9b0ee50a420d61b435016f0f6010bfd3b4ac333c669"
  },
  {
    "file": "research/frontier-21-batch-1.pages.json",
    "sha256": "02b7f69765dce2fa6879f6576afe25d34f7a753f6a998e63865fbf8d642184a4"
  },
  {
    "file": "research/frontier-21-batch-10.pages.json",
    "sha256": "d7b3ef1a764f66e003d96a792da7e616e315bfa51df52ca18c777b4a40d74f79"
  },
  {
    "file": "research/frontier-21-batch-2.pages.json",
    "sha256": "88a594e271787c7fc8bad681ccf0716df12c326f797095f715cda52b8eac6a98"
  },
  {
    "file": "research/frontier-21-batch-3.pages.json",
    "sha256": "9d976d8b6d77736e4dec851e4ab38b1094b916c89de6f391b85f6cf125c6e574"
  },
  {
    "file": "research/frontier-21-batch-4.pages.json",
    "sha256": "3b9920bb6130d010bae0aa92065e5a380c2cfe5df7c3308fe1639f7778493943"
  },
  {
    "file": "research/frontier-21-batch-5.pages.json",
    "sha256": "f9012595c19ec9109479705ab77330393a01aabec7119ce7f77f61e66530358e"
  },
  {
    "file": "research/frontier-21-batch-6.pages.json",
    "sha256": "00c9dad301d0c7f30a4af9401fb6a740fab2f52d249c2698b8a052c51c270b60"
  },
  {
    "file": "research/frontier-21-batch-7.pages.json",
    "sha256": "084f5333430b1b85959f4a6dde1f51652dc74de47a721eaf2e85ee32a937e6e9"
  },
  {
    "file": "research/frontier-21-batch-8.pages.json",
    "sha256": "3d225bfe8f1dac4190d373a61584cc27b795d512d94b02d14168763de9bfbbf6"
  },
  {
    "file": "research/frontier-21-batch-9.pages.json",
    "sha256": "d898a52ba45c87f2c3dfcb2b7ceadf405b881dff4d6136f083880983436490de"
  },
  {
    "file": "research/frontier-21-step9-changes.pages.json",
    "sha256": "0b061661adf2a833c13e5693fb667ff63434e3991c6df9e29373868f8dea1637"
  },
  {
    "file": "research/frontier-22-batch-1.pages.json",
    "sha256": "60028efc4a18607ceafc1d625464b2f6c1682d3405d8da19091efafddcaf4c45"
  },
  {
    "file": "research/frontier-22-batch-2.pages.json",
    "sha256": "29309141d82196911530c7fc510862b8e2f5eb50b358f4d54b439bdeb8d448d6"
  },
  {
    "file": "research/frontier-22-batch-3.pages.json",
    "sha256": "0ec2c04305eabdddd93bcc8bc857250879a22a8898c33dee6579209e6a160aff"
  },
  {
    "file": "research/frontier-22-batch-4.pages.json",
    "sha256": "82a33f93a70b1455c20b7c14abacfbb71b2742633d3903e208cf6eb792a99c3a"
  },
  {
    "file": "research/frontier-22-batch-5.pages.json",
    "sha256": "d6962d3d097fe09fc6124bb7be58e8ff4ad3e9908dc9bf43bac5353dc4187d72"
  },
  {
    "file": "research/frontier-22-batch-6.pages.json",
    "sha256": "9003230a41aeb7c191754d30846ddbfa0f8090405707db1e5ce2d3dfc84339fc"
  },
  {
    "file": "research/frontier-22-batch-7.pages.json",
    "sha256": "6f109e074e954c7b9c7f9830e66c1b304f449bb7627fe5d8e32564ed8f7e7401"
  },
  {
    "file": "research/frontier-22-batch-8.pages.json",
    "sha256": "382c70b3b58ea4da350cf045b27784bf10fea28bf25c260daee2d9d63cf2bf11"
  },
  {
    "file": "research/frontier-22-batch-9.pages.json",
    "sha256": "92df99fb2a3311f272fd90bc2a53dea36d58e65eb11a9b5ca3038c790533f842"
  },
  {
    "file": "research/frontier-22-step9-changes.pages.json",
    "sha256": "2bcb271313cb93999d60c9b0ee50a420d61b435016f0f6010bfd3b4ac333c669"
  },
  {
    "file": "research/frontier-23-batch-1.pages.json",
    "sha256": "e4ba586c4158b04c136829b9891fd1addf38f241131f4c09439012e4a4ca63af"
  },
  {
    "file": "research/frontier-23-batch-10.pages.json",
    "sha256": "2658b2fab13d3ba4e342ea7dd4a7d8d1b64f73166f98419ecc2e37fb318d9514"
  },
  {
    "file": "research/frontier-23-batch-2.pages.json",
    "sha256": "831c4c49ede7109b9576b7af80830e80873f77a7f2a0b18418990e39cb1d1064"
  },
  {
    "file": "research/frontier-23-batch-3.pages.json",
    "sha256": "b82b88652f6790298e61ed4dae362969fb0663bf0279e184f8fd844b09f8ded7"
  },
  {
    "file": "research/frontier-23-batch-4.pages.json",
    "sha256": "979d7accfc6cb9e1b33ea9a6e22243a09a1134317c63cbfe3b377c43504637f9"
  },
  {
    "file": "research/frontier-23-batch-5.pages.json",
    "sha256": "a6a9bf85abb4ed896588125fc656c4724dea06ffcd3de4ac276086448d60d6b8"
  },
  {
    "file": "research/frontier-23-batch-6.pages.json",
    "sha256": "dada3aa939a51c5ed73a203540087935b039788379b06616aba42e916d073e1f"
  },
  {
    "file": "research/frontier-23-batch-7.pages.json",
    "sha256": "94dc89f21ebad3fadaf5c2cf9657c2f3176bf0f4b46474576ed41037dc20f61c"
  },
  {
    "file": "research/frontier-23-batch-8.pages.json",
    "sha256": "d4e622523c02e3ef3da039b2b5ce8afd2ee7ec2f240308a3fdc66aa7f64dcc8b"
  },
  {
    "file": "research/frontier-23-batch-9.pages.json",
    "sha256": "fd47b3e22717f9d869ec4bb92681ce4812441d593d5453756bc63b5b8149e3e8"
  },
  {
    "file": "research/frontier-23-step9-changes.pages.json",
    "sha256": "2bcb271313cb93999d60c9b0ee50a420d61b435016f0f6010bfd3b4ac333c669"
  },
  {
    "file": "research/frontier-24-batch-1.pages.json",
    "sha256": "bd4be5be1f17ce15fac2655078bfe9350452b5038052b2f3acdb7f32c0a7be4f"
  },
  {
    "file": "research/frontier-24-batch-10.pages.json",
    "sha256": "46db03c68a368ca99ceb3ef7d63199a8be41ef737c3ba4b5b1ab8153c700c018"
  },
  {
    "file": "research/frontier-24-batch-2.pages.json",
    "sha256": "94b46e8342197b412b4911154bbb7f6529fa95a8fe0b53bc764bad71d5f8f61c"
  },
  {
    "file": "research/frontier-24-batch-3.pages.json",
    "sha256": "db56bbb46eca2970142e67cf771914af607d19f2fcab61b016ba1960448b36cf"
  },
  {
    "file": "research/frontier-24-batch-4.pages.json",
    "sha256": "f1186c691d669d0d3f44bf0fc7bbd6157aa9cf6f4fc144fb215e8b5605095bf4"
  },
  {
    "file": "research/frontier-24-batch-5.pages.json",
    "sha256": "88e90bc4b4ce98bb1505d56b5850036db59723b4c9d87124e6e3fb2023f672cf"
  },
  {
    "file": "research/frontier-24-batch-6.pages.json",
    "sha256": "1c0623d733d7f28cb5f378c289fa9e11871035f6d367fac3520ef7afd09512a9"
  },
  {
    "file": "research/frontier-24-batch-7.pages.json",
    "sha256": "fe3fc165451fd40f144402ab3e96fc61f2a2d17a197b5c103d41cce9c10e978a"
  },
  {
    "file": "research/frontier-24-batch-8.pages.json",
    "sha256": "898374db61f3ac88187bdd4d4ba0b54b26e5bee214e13334998609046a4b837e"
  },
  {
    "file": "research/frontier-24-batch-9.pages.json",
    "sha256": "ae1cb8e6a25ca175b1e1fba1cfced7c25a6e3fda455f8b81c72eac5f0461dfab"
  },
  {
    "file": "research/frontier-24-step9-changes.pages.json",
    "sha256": "2bcb271313cb93999d60c9b0ee50a420d61b435016f0f6010bfd3b4ac333c669"
  },
  {
    "file": "research/frontier-25-batch-1.pages.json",
    "sha256": "4f02b011159c24b1cf62ac3267fb43d8a38558a588e4eb75058c238511b83ced"
  },
  {
    "file": "research/frontier-25-batch-10.pages.json",
    "sha256": "60adb6a13eeeaa7728f33faba13bc796d91a5c9b5b23fab9f8d215be30caf941"
  },
  {
    "file": "research/frontier-25-batch-11.pages.json",
    "sha256": "2dc60be1f663b428df1278a3914c46eba9e695f96211f8824e981d37e839968b"
  },
  {
    "file": "research/frontier-25-batch-2.pages.json",
    "sha256": "7d0b4777bc7aaa1bdf117622c9773638011beb5f1e4dfd95c705aa7951b9c10d"
  },
  {
    "file": "research/frontier-25-batch-3.pages.json",
    "sha256": "6ae1f739ecdaa1ebc0e12d06b6ea7f30ea5c09bdead11661fb4f0211ae43cb4c"
  },
  {
    "file": "research/frontier-25-batch-4.pages.json",
    "sha256": "dc07691acb4b1674f256634b4361976879042f8f5cdfaa81a0cd30d2f13e8017"
  },
  {
    "file": "research/frontier-25-batch-5.pages.json",
    "sha256": "c83ec1803cc39f1c25fb9ebae550e92891e0af4ea47636bd3d11137b0319b099"
  },
  {
    "file": "research/frontier-25-batch-6.pages.json",
    "sha256": "27b3c77f6aa93c63119a961d600a8b90b68c662ff4c42a1f9000dbb22580bb7e"
  },
  {
    "file": "research/frontier-25-batch-7.pages.json",
    "sha256": "0d4affde88e46f07e35cf0c4180f5c870dfb100cbac4e46739a88d0446721b63"
  },
  {
    "file": "research/frontier-25-batch-8.pages.json",
    "sha256": "8269c9d92d61801cd75018214362ceda08b43e09abeb23a11fad10bc24e4edba"
  },
  {
    "file": "research/frontier-25-batch-9.pages.json",
    "sha256": "1fbbabd59d0b00c2670ac105840e249b6d9ad1875ebad1de19ae6b7dc4b451a6"
  },
  {
    "file": "research/frontier-25-step9-changes.pages.json",
    "sha256": "2bcb271313cb93999d60c9b0ee50a420d61b435016f0f6010bfd3b4ac333c669"
  },
  {
    "file": "research/frontier-26-batch-1.pages.json",
    "sha256": "b51d02e41a547e36be9a4d4a4050686f74fad3c2bb4b3ac1a31adbb03a7fae81"
  },
  {
    "file": "research/frontier-26-batch-10.pages.json",
    "sha256": "8f9ecceb804f20a9995b1c05f1a7cd624c27912c487adf318fabfc312903e357"
  },
  {
    "file": "research/frontier-26-batch-11.pages.json",
    "sha256": "0bab4a26eef5e0b8937226a936ecd486157d73e7c55f5d24df762bda833e1cb2"
  },
  {
    "file": "research/frontier-26-batch-2.pages.json",
    "sha256": "7e873a7c9dbb2f7b1fdbc10ca0962b36a9cb65e8b844a74c1873500587b13ed1"
  },
  {
    "file": "research/frontier-26-batch-3.pages.json",
    "sha256": "6a9a18e60e19b9c08e975207948db285a9513a038cd2c9ceec0ab9999d4822c7"
  },
  {
    "file": "research/frontier-26-batch-4.pages.json",
    "sha256": "9b370f17eac30df6e4bb0e10b67d7dd17c34c786bda9d5ec7d5b963ee5e1a049"
  },
  {
    "file": "research/frontier-26-batch-5.pages.json",
    "sha256": "19f33d036b9cc309244ab3147d3e5b7a8c3fdbace448a9836173a7abc0d19fc0"
  },
  {
    "file": "research/frontier-26-batch-6.pages.json",
    "sha256": "ffb446790b5c78cf279b735ca99b9b932263c8155008d062201b778ef189156b"
  },
  {
    "file": "research/frontier-26-batch-7.pages.json",
    "sha256": "a70b3a615ffbaf6308991ad826346949763fe8798f046b62f3a87365f447d1c4"
  },
  {
    "file": "research/frontier-26-batch-8.pages.json",
    "sha256": "ed68e1bdbb67315726bd0104d456974b1a0eda605beae4e05a3225358c4d3722"
  },
  {
    "file": "research/frontier-26-batch-9.pages.json",
    "sha256": "16996bbc48f8622afd7f01dc19a6e42a8448fb5b51fe85f717bee7e26d420f65"
  },
  {
    "file": "research/frontier-26-step9-changes.pages.json",
    "sha256": "2bcb271313cb93999d60c9b0ee50a420d61b435016f0f6010bfd3b4ac333c669"
  },
  {
    "file": "research/frontier-27-batch-1.pages.json",
    "sha256": "82eada803ce4abf38a8416c22f8aa7263b577d1103c35c0f60337a4a65ecf832"
  },
  {
    "file": "research/frontier-27-batch-10.pages.json",
    "sha256": "5a7bd168a9313f93c345a790486184cdffd358623c60eed3de69818bd8a3d4a4"
  },
  {
    "file": "research/frontier-27-batch-2.pages.json",
    "sha256": "1eb43764709bd9f5e215902d1776bf88006710e0bab7190557c60ab652c2a444"
  },
  {
    "file": "research/frontier-27-batch-3.pages.json",
    "sha256": "4a0b86a54279aa5db86459042c36f5a9167c1af45424e83f528cad70bd4f98d7"
  },
  {
    "file": "research/frontier-27-batch-4.pages.json",
    "sha256": "4769c3afb465318734ab719c51002d8f909a2bab69a7567bd0530c93309c7039"
  },
  {
    "file": "research/frontier-27-batch-5.pages.json",
    "sha256": "94f3a2bac5ed31fa694b6649753dadd005e7e9ef6636133d3f4cfafcae48dadb"
  },
  {
    "file": "research/frontier-27-batch-6.pages.json",
    "sha256": "bd23ae8d14bbc00b5313003985ead2afb4bed5e54a1c7f2b74fd698b90427010"
  },
  {
    "file": "research/frontier-27-batch-7.pages.json",
    "sha256": "d1d8de0bd70c70e389957e2f445e4f6f16749f135f6d270fe4ca175a038533dd"
  },
  {
    "file": "research/frontier-27-batch-8.pages.json",
    "sha256": "b3d6eb8f6b190abfe7f57b5bcac95fc71d25424b9cef07e1b7641f0241831516"
  },
  {
    "file": "research/frontier-27-batch-9.pages.json",
    "sha256": "f0b6b074984140a8cf0889b576bb604a6cfbef9f90b4c873d828da6b72b76106"
  },
  {
    "file": "research/frontier-27-step9-changes.pages.json",
    "sha256": "2bcb271313cb93999d60c9b0ee50a420d61b435016f0f6010bfd3b4ac333c669"
  },
  {
    "file": "research/frontier-28-batch-1.pages.json",
    "sha256": "a5de7c63b0a3662039dd9bd5f67235795313766622127007c750f782e82f9ac0"
  },
  {
    "file": "research/frontier-28-batch-10.pages.json",
    "sha256": "1876d823bd5366eda06148cfd6aa36eabd30e0cc275530b7a1478e37bc906d5b"
  },
  {
    "file": "research/frontier-28-batch-11.pages.json",
    "sha256": "9ada23d00cf721b1086067a091f400e6f3db115ffabed5d8b50a2e75eababec0"
  },
  {
    "file": "research/frontier-28-batch-2.pages.json",
    "sha256": "14e68ac73dd626453888a2380461f0b4ae595b180b525b653ff52afe5404495b"
  },
  {
    "file": "research/frontier-28-batch-3.pages.json",
    "sha256": "d7bc5e7b1975ba2911849b162e45ba466fc10db2d78a3573341fed6a721c7354"
  },
  {
    "file": "research/frontier-28-batch-4.pages.json",
    "sha256": "82126e43565341df8e134375b0c822abb4bef6c126c4c808b3ff587447f184bd"
  },
  {
    "file": "research/frontier-28-batch-5.pages.json",
    "sha256": "bc8a9ff840e16cd68f01ec8a08190a058d5c537fa74ca6f6d54fdad25003504b"
  },
  {
    "file": "research/frontier-28-batch-6.pages.json",
    "sha256": "c4a7b120f827a3350f6985a44a0b4e21436ebe2187b91635321b20cba3999c97"
  },
  {
    "file": "research/frontier-28-batch-7.pages.json",
    "sha256": "054f8e229ad8ea23fe08e09618b29355e7a7bc22573e90e86475e396fe8d170a"
  },
  {
    "file": "research/frontier-28-batch-8.pages.json",
    "sha256": "fbb9b8e4971abcfd21d0f8e5dd650dc024ac2b36bc1e77e04e8e904ee5bd9a58"
  },
  {
    "file": "research/frontier-28-batch-9.pages.json",
    "sha256": "05fbf023e24c1604bca5f1f5c29cd937f0975beffb1fe2540abb471f94d16983"
  },
  {
    "file": "research/frontier-28-step9-changes.pages.json",
    "sha256": "2bcb271313cb93999d60c9b0ee50a420d61b435016f0f6010bfd3b4ac333c669"
  },
  {
    "file": "research/frontier-29-batch-1.pages.json",
    "sha256": "5a950941903a2d71fc941f07d55098d01c7985c2c484394f9d3a6e298b46100b"
  },
  {
    "file": "research/frontier-29-batch-10.pages.json",
    "sha256": "dff73ac93729b836557289f73d196463b6fe790dad75d986f667817607534534"
  },
  {
    "file": "research/frontier-29-batch-11.pages.json",
    "sha256": "f3f507af3738ba369ad597b568a5913bdc1386186264f40a07d98dc9ff7c583a"
  },
  {
    "file": "research/frontier-29-batch-12.pages.json",
    "sha256": "a2b39035157fca49cc354fb8efffd34a38a45639f5af87f4d80a04523d5a14aa"
  },
  {
    "file": "research/frontier-29-batch-13.pages.json",
    "sha256": "2ed133329b5887eb7b16b9274545c9ec3f1d77453a5be357f4ed8790fc9e14c6"
  },
  {
    "file": "research/frontier-29-batch-14.pages.json",
    "sha256": "426b0934231c963335e27a51999259669bce1a34c2824c07adc799ca8f644e41"
  },
  {
    "file": "research/frontier-29-batch-15.pages.json",
    "sha256": "b1d812f1e6b1b59b1fca887063d751be1ed9e92cc60b2e817f62d11577f92109"
  },
  {
    "file": "research/frontier-29-batch-16.pages.json",
    "sha256": "c078adb19ead0f4d1c57e9b6ed84bceeb4e5228dcf70847104c54d02bdf171e7"
  },
  {
    "file": "research/frontier-29-batch-17.pages.json",
    "sha256": "a729960fe1d41613501ddd503277de3b07176a70592e78bfe429e2beea5633ab"
  },
  {
    "file": "research/frontier-29-batch-18.pages.json",
    "sha256": "79d8b8b8b19bddef89b803e1176093ec753fd44668586ef189e8c6103054856e"
  },
  {
    "file": "research/frontier-29-batch-19.pages.json",
    "sha256": "229f69fdb4d338d4eab429a4fac28dc043ba898631b30a67c4fb906b4eb6f807"
  },
  {
    "file": "research/frontier-29-batch-2.pages.json",
    "sha256": "51c748c6441d2ee14bff25bb960752fc65fdcd532b0d0fcadb8893ad8e10c2da"
  },
  {
    "file": "research/frontier-29-batch-3.pages.json",
    "sha256": "2d23b3a747bd5082a18349526fb7954fcd9b382d7d3784f4191ff511e73962d5"
  },
  {
    "file": "research/frontier-29-batch-4.pages.json",
    "sha256": "7ac65243d3d983fe6f21f33d67670e00988d077ed232c7810e6191aa8a5d84cc"
  },
  {
    "file": "research/frontier-29-batch-5.pages.json",
    "sha256": "c441a82ea220b1fa0d0529247f7d3928c41d5f18539bd26b5bd5228a1cce8006"
  },
  {
    "file": "research/frontier-29-batch-6.pages.json",
    "sha256": "5eebd8c915d1f048022bce43f88e282edd9c5ac672e72354d488f31d32fa04c9"
  },
  {
    "file": "research/frontier-29-batch-7.pages.json",
    "sha256": "5b9173bf61f57559dfabd0516c0134b5341b4a3c9d42c914beee202c6d872785"
  },
  {
    "file": "research/frontier-29-batch-8.pages.json",
    "sha256": "5c698a730de3449e91ec6599accd8376e05d386c68e0289a61eeaae7b4c0efb7"
  },
  {
    "file": "research/frontier-29-batch-9.pages.json",
    "sha256": "78abcdd5f00ba73576e4878624ee48783c08862c323f46d68d8fb7d6dbf788dc"
  },
  {
    "file": "research/frontier-29-step9-changes.pages.json",
    "sha256": "2bcb271313cb93999d60c9b0ee50a420d61b435016f0f6010bfd3b4ac333c669"
  },
  {
    "file": "research/frontier-3-batch-3.pages.json",
    "sha256": "91507c010328025223fb0db6b74892f170a3077a9008e84eddf994343c1e70ab"
  },
  {
    "file": "research/frontier-30-batch-1.pages.json",
    "sha256": "dd071cbc66fcb1b12dc6959dc616f3a60f7d769e8c000927a05a544ec31df928"
  },
  {
    "file": "research/frontier-30-batch-10.pages.json",
    "sha256": "e58f528b268c49b0363851d413fd8064cda1436d21c8e5172d40003d9a23bb98"
  },
  {
    "file": "research/frontier-30-batch-11.pages.json",
    "sha256": "9da41b36558c7ef211953542bfc0e3a1168614abf6e5caf91adb4d9bdbf27afd"
  },
  {
    "file": "research/frontier-30-batch-12.pages.json",
    "sha256": "3256be9db1991539d7b34f1ad48da3e27631a71ac4fc11b645d4ee22155d1f02"
  },
  {
    "file": "research/frontier-30-batch-13.pages.json",
    "sha256": "7091b63c6b7d1dc8334489948c0f4d43020c1975ade7b00ab64a503fc99b1d20"
  },
  {
    "file": "research/frontier-30-batch-14.pages.json",
    "sha256": "73e10cb4f60bdd5c418084e52a038c7e506ff66b2cefdc66c4a230539916bfc9"
  },
  {
    "file": "research/frontier-30-batch-15.pages.json",
    "sha256": "56f3e6c6aff143f53370186a21bdc0fb190e3e2c25c95cebde0ece5066cf934d"
  },
  {
    "file": "research/frontier-30-batch-16.pages.json",
    "sha256": "3f2ab1a4b6886011a90e1fdab6417de36262e328203cf7937881f74235d9e029"
  },
  {
    "file": "research/frontier-30-batch-17.pages.json",
    "sha256": "79f3244297b3b237e6ce5b3fdbea3cc9a2d533794816d5b6f10cefec16e17012"
  },
  {
    "file": "research/frontier-30-batch-18.pages.json",
    "sha256": "b7f0abf66656687285caad2397ddbfac67d5055312d05aa1b6e747609fd08ea9"
  },
  {
    "file": "research/frontier-30-batch-19.pages.json",
    "sha256": "94f35dd85ddb0c7d0aa1df6fd2b5a02b3fedb8b61ffeffd64d319a80bcd6afc6"
  },
  {
    "file": "research/frontier-30-batch-2.pages.json",
    "sha256": "5a498587d00e0b7357317ed94b38af1bbead812d0a049fc03345944008d6a711"
  },
  {
    "file": "research/frontier-30-batch-20.pages.json",
    "sha256": "44f2a8501b92183373576bb4c6cfc390a1356ef33af719ff50587852877b21b3"
  },
  {
    "file": "research/frontier-30-batch-3.pages.json",
    "sha256": "0516eb264b522223c1a125d92919acbcfbd16482a65cf4eb04e589281ff244d1"
  },
  {
    "file": "research/frontier-30-batch-4.pages.json",
    "sha256": "af94fdd1b87fda74d23d25a83a32eb9c1d08e6bfbeb324871d30c09781cc30b8"
  },
  {
    "file": "research/frontier-30-batch-5.pages.json",
    "sha256": "b2bd2229f6f436034ad8f6271db3d8c51875927cdf219068ab827f427d3a5b9c"
  },
  {
    "file": "research/frontier-30-batch-6.pages.json",
    "sha256": "d3e20865247a68c69d43207e93c3bc11877d0866d5fd61be5da662dd4bd22aac"
  },
  {
    "file": "research/frontier-30-batch-7.pages.json",
    "sha256": "72595a8157c039d4b4adc34c18455208c7df34d105ae6f25a266e443e201cba7"
  },
  {
    "file": "research/frontier-30-batch-8.pages.json",
    "sha256": "846acf100f76ece6976d2dda8e70f0e54916308c9c0f6ba1258e0a6be71cc136"
  },
  {
    "file": "research/frontier-30-batch-9.pages.json",
    "sha256": "15cd944cd63dcfbdd2e3ceda63b7d7e017904514b49ae6e1782319f09b5a8a69"
  },
  {
    "file": "research/frontier-30-step9-changes.pages.json",
    "sha256": "20724ca2df0f371c6ff5290b8a0f67182eed63d1bb1769097dad3ca41de747b0"
  },
  {
    "file": "research/frontier-31-batch-1.pages.json",
    "sha256": "5d6cb54de95e7b0f042ab1dc00cbf847613dd35c4c01cfa7942e602b3cddbea5"
  },
  {
    "file": "research/frontier-31-batch-10.pages.json",
    "sha256": "86f71ef0ec5932cd11114a720d2f915321a78efddc10f617ba70165cbfa612ff"
  },
  {
    "file": "research/frontier-31-batch-11.pages.json",
    "sha256": "296635cf328cb3e10ddabce6f5921fe47ac34b4ecd5db57eb5ca330455950868"
  },
  {
    "file": "research/frontier-31-batch-12.pages.json",
    "sha256": "03f9405fd6b26ac88901bf819d09daf6fc40623ca9c84f623985832b71a78c72"
  },
  {
    "file": "research/frontier-31-batch-13.pages.json",
    "sha256": "ac836ca23bc61e086c86a8f2ebc52e8ccfeefc073db65606d6a7f70fbd771517"
  },
  {
    "file": "research/frontier-31-batch-14.pages.json",
    "sha256": "1a7b1650710ae7dea27d40866dd78d5af47e973a1dc7b4db98e45df2a1ffa7a1"
  },
  {
    "file": "research/frontier-31-batch-15.pages.json",
    "sha256": "f1781b18af44392c0c81bb93814c5a8aab647e1debcde6e7566de1fb838d44ab"
  },
  {
    "file": "research/frontier-31-batch-16.pages.json",
    "sha256": "a4c6d28c0bb8c8b2ee22e5a19165f4c44943ce542d0458ef76215cd42aa11215"
  },
  {
    "file": "research/frontier-31-batch-17.pages.json",
    "sha256": "7d458c124407bd6ef0fad35ac91195f15ef108038c758b2ed9a01ff9d876c87b"
  },
  {
    "file": "research/frontier-31-batch-18.pages.json",
    "sha256": "72895ba297ab0e642ffb9b0334681f7daaf2d8408d6e4f465380602ae8fdd2a0"
  },
  {
    "file": "research/frontier-31-batch-19.pages.json",
    "sha256": "05fd3ff6b75b227b9e98d961f8c7da0b7b63c2f4e5576d74fd168becda1f608b"
  },
  {
    "file": "research/frontier-31-batch-2.pages.json",
    "sha256": "3cc24188058f00f4093e579c358d54e44da6338f9cac93a5b8858099438b94cb"
  },
  {
    "file": "research/frontier-31-batch-20.pages.json",
    "sha256": "ff4281657ce44ade63723007ba04af666340c4b8338bf2dbe5d0264d103cbfa9"
  },
  {
    "file": "research/frontier-31-batch-21.pages.json",
    "sha256": "49d0820a3c1e00c42115656c67c7f7b5c5241373b6f24405c237b62f72279cc3"
  },
  {
    "file": "research/frontier-31-batch-22.pages.json",
    "sha256": "f533b5acb8b919540eded5a7ffc3d69e5b4b69172fde9163dabe594630629aa8"
  },
  {
    "file": "research/frontier-31-batch-3.pages.json",
    "sha256": "ed89535dc10e621fc63b7389e807818119ad2bbcb54d5db81186aa3981150e5b"
  },
  {
    "file": "research/frontier-31-batch-4.pages.json",
    "sha256": "67613dedbe69dfc19ef636824f07a4e0f1779afc8fdbca227b1e7960fd757f4a"
  },
  {
    "file": "research/frontier-31-batch-5.pages.json",
    "sha256": "2ed7521e4e753d91f3bd480222d2efaf5aea35f67f3dd67598d70755e8ff760a"
  },
  {
    "file": "research/frontier-31-batch-6.pages.json",
    "sha256": "5d361b6f3b7918e5b369069a079899760583bbdf137990af859d217351fb54e6"
  },
  {
    "file": "research/frontier-31-batch-7.pages.json",
    "sha256": "3259220799dd545fa273d1d13aa3ccec8f9b85dbde0588c2de2cc2e8c2e2686e"
  },
  {
    "file": "research/frontier-31-batch-8.pages.json",
    "sha256": "5c2832194e7c0846bc7a4e3887a20ac43bf6ef7ecbddbd4ed2bddf3e5f2f0374"
  },
  {
    "file": "research/frontier-31-batch-9.pages.json",
    "sha256": "0311e52756f744e818554229b412e9ad6fc3a7a4e31e41cce524bdf4726cdabf"
  },
  {
    "file": "research/frontier-31a-batch-1.pages.json",
    "sha256": "8be77efc3201b9fed183babf5d1d9ed76e9442551bad58e58d09a929c7e96acf"
  },
  {
    "file": "research/frontier-31a-batch-10.pages.json",
    "sha256": "1785f92bf5a28a664c72fc454fd324cd4ed3958e5f93f486efecdff2b85e3f65"
  },
  {
    "file": "research/frontier-31a-batch-11.pages.json",
    "sha256": "564246d7bf0af3eb1ca6f1ea27b8e02913fc834b0a9bd72af2ca13f8cb328f4d"
  },
  {
    "file": "research/frontier-31a-batch-12.pages.json",
    "sha256": "1c6748f845e610f236dc0af4059d617753bcf4dcc57a0ecb6a9ebf07a0c6155b"
  },
  {
    "file": "research/frontier-31a-batch-13.pages.json",
    "sha256": "ce564b9bcba37a844a533b0121d36ea1ea6df8a7b4c919f4e2f859c114b1fe8d"
  },
  {
    "file": "research/frontier-31a-batch-14.pages.json",
    "sha256": "f3ee57b21a9d01197076e280da6e56fb3769119e77b3eb397a74a62356f114b4"
  },
  {
    "file": "research/frontier-31a-batch-15.pages.json",
    "sha256": "b178aeddc54331225e32b7604960d6463502f508d06be498c398a01b2f3a5dab"
  },
  {
    "file": "research/frontier-31a-batch-16.pages.json",
    "sha256": "dbd137878c6c235c7110acd91b783c92904789d503be22fd482b94154f65875d"
  },
  {
    "file": "research/frontier-31a-batch-17.pages.json",
    "sha256": "743141a8f369df70774215dd0bd269dfb049b98b97137f88db25b2a436e8c41a"
  },
  {
    "file": "research/frontier-31a-batch-18.pages.json",
    "sha256": "f1fcd4e084d89d12d619ad6dcfcdd657fd0b1771056f6d0eaa00e89c39928434"
  },
  {
    "file": "research/frontier-31a-batch-19.pages.json",
    "sha256": "cc8eb01beec7664ad27c1b8b8baefb62ab951587785541930d85dc42b93f1c58"
  },
  {
    "file": "research/frontier-31a-batch-2.pages.json",
    "sha256": "a8278ba389f46863cedc1696646567dcc9a9ab095f5a9372ee82a6d5ad3a1d5e"
  },
  {
    "file": "research/frontier-31a-batch-20.pages.json",
    "sha256": "72895ba297ab0e642ffb9b0334681f7daaf2d8408d6e4f465380602ae8fdd2a0"
  },
  {
    "file": "research/frontier-31a-batch-21.pages.json",
    "sha256": "04575a8e34b9c5b119db80d07864c95dc6f8db94b2b52a1057883d667172a2c5"
  },
  {
    "file": "research/frontier-31a-batch-22.pages.json",
    "sha256": "71b6a22bbf9f9f6fa555bc7b415617b8b046ab1ec3ea1bf7e7c981c77ff4c2b6"
  },
  {
    "file": "research/frontier-31a-batch-3.pages.json",
    "sha256": "128f55d163d968d48fee5a30278913f5171e16f13b40f504130baa0d06ba0531"
  },
  {
    "file": "research/frontier-31a-batch-4.pages.json",
    "sha256": "d22ec785324dad10d43efc49cda9f80c75ecb02a6694efe0799c5ccd4b99005d"
  },
  {
    "file": "research/frontier-31a-batch-5.pages.json",
    "sha256": "e1412cbbd186e838c1af6cc0e9bad8fbacdfe16ad13f73ea0fac43e453a8dcd0"
  },
  {
    "file": "research/frontier-31a-batch-6.pages.json",
    "sha256": "fc689faed7d671595948b5ac5dcb5abea1f66f44d1d30426522e4c5f9bb0058f"
  },
  {
    "file": "research/frontier-31a-batch-7.pages.json",
    "sha256": "655604de78a90b7acfea3a258e9059c9ffd0b258c1742ef38f0b18ea009e7525"
  },
  {
    "file": "research/frontier-31a-batch-8.pages.json",
    "sha256": "ad62237563285c5d3d84a2989a11358ef9fa337abf07e6562f2b9f79ec396b4a"
  },
  {
    "file": "research/frontier-31a-batch-9.pages.json",
    "sha256": "8f886a53dc4fdee03972cef95b0febdec9927cfb31504df8dba7bae5740041e7"
  },
  {
    "file": "research/frontier-31a-step9-changes.pages.json",
    "sha256": "2bcb271313cb93999d60c9b0ee50a420d61b435016f0f6010bfd3b4ac333c669"
  },
  {
    "file": "research/frontier-32-batch-1.pages.json",
    "sha256": "3126b75322b2efa644dd87ce444b57a9cd11d2520591d4c3cd1ee60491d6c786"
  },
  {
    "file": "research/frontier-32-batch-10.pages.json",
    "sha256": "2eb3a46382577e2b166eea169d143b4627a2d06196f589a696bfce9f5e6b1f85"
  },
  {
    "file": "research/frontier-32-batch-11.pages.json",
    "sha256": "233494bd57b7858cc2717b9eec6b94095bfc75638758c58462d68c2a584d536b"
  },
  {
    "file": "research/frontier-32-batch-12.pages.json",
    "sha256": "ea78a0c59e53161b368aa285beb7f07754c063015d74d7ecf0b89dfcf4d79f97"
  },
  {
    "file": "research/frontier-32-batch-13.pages.json",
    "sha256": "208f5e0add417a23a9d4177d8a4723293a53c2996cb392844aea6cc0402dab9c"
  },
  {
    "file": "research/frontier-32-batch-14.pages.json",
    "sha256": "5c696f5f6e61361444c8f89ff685639edea4baac274b0c1912514467af4f472e"
  },
  {
    "file": "research/frontier-32-batch-15.pages.json",
    "sha256": "284338143debc3fd50855f72dbb9b31de7a6df48e1d5994959c989cc8c497795"
  },
  {
    "file": "research/frontier-32-batch-16.pages.json",
    "sha256": "3845c04d34619ee579193965290e02e498a78d1022444774e27edc84ac87a990"
  },
  {
    "file": "research/frontier-32-batch-17.pages.json",
    "sha256": "a5c0ea2e00f58ef6036f283988bb985aa2562a5f21009cb52e07825cdfa36302"
  },
  {
    "file": "research/frontier-32-batch-18.pages.json",
    "sha256": "60ebc1e777d483fafe1afdc73eb6866dfbbfb162e5988823c6cb736152f28938"
  },
  {
    "file": "research/frontier-32-batch-19.pages.json",
    "sha256": "594729338edf9047ef7e93f676e3b7bfe7d532af9f34e053d28289a567947179"
  },
  {
    "file": "research/frontier-32-batch-2.pages.json",
    "sha256": "98e8bb22c4d26f09faf1c559067d973b3ad9493f3263ade9786a72c121c35cba"
  },
  {
    "file": "research/frontier-32-batch-3.pages.json",
    "sha256": "0c3e0cdacdad479f326f075ccf289c2a5050525bf0f323f4e0e46cb6d1519f43"
  },
  {
    "file": "research/frontier-32-batch-4.pages.json",
    "sha256": "8742cfeb2838b38d0cf9ad324fe5418c02afa99290092cc13450675883cc4620"
  },
  {
    "file": "research/frontier-32-batch-5.pages.json",
    "sha256": "6d093038017c28d1f1f2307d6993442957e37a235aa3989ac10d778467aa277b"
  },
  {
    "file": "research/frontier-32-batch-6.pages.json",
    "sha256": "03f5e822bc1b4b0a550a83abd3c840ddbc444fc5425c188a758c9a58cb6e1b70"
  },
  {
    "file": "research/frontier-32-batch-7.pages.json",
    "sha256": "66ae1ba9517bda9f75de9c0ba519e3e2528f05499abf2f4590aaf13d3d293f09"
  },
  {
    "file": "research/frontier-32-batch-8.pages.json",
    "sha256": "cc2af56b97cb4ed4168af552d37b8874e0eb97d1e097a131fe2b36b1cad74b46"
  },
  {
    "file": "research/frontier-32-batch-9.pages.json",
    "sha256": "74486f6c4b6da1e3a23c8b0d752feb1ed946f1243288181fbf5351e8f8c96ef8"
  },
  {
    "file": "research/frontier-32-step9-changes.pages.json",
    "sha256": "3dff53f94552a4913345d675fa349ca831bd2d0293d6d44b91e156ce92c0356e"
  },
  {
    "file": "research/frontier-33-batch-1.pages.json",
    "sha256": "659b191956f7d69ed517c541b56a2adf0518b3acb9a214d2e822705c16529483"
  },
  {
    "file": "research/frontier-33-batch-10.pages.json",
    "sha256": "b533a01180a97fa070bd70207b4b35e8dbd78b54607c26d6189100ae4059fbd2"
  },
  {
    "file": "research/frontier-33-batch-11.pages.json",
    "sha256": "ca4842e597d077b0ebde0fdf76a712839c424b2d03802e02445f376f9b14d692"
  },
  {
    "file": "research/frontier-33-batch-12.pages.json",
    "sha256": "619f1fa8675a8daab0c3ff03d177932aef0f84ed0593d0a92f5479f8a28dae0f"
  },
  {
    "file": "research/frontier-33-batch-13.pages.json",
    "sha256": "51a478fc3c540399b773b6d327b0409aed5838a295548aa726686a89cf15dea3"
  },
  {
    "file": "research/frontier-33-batch-14.pages.json",
    "sha256": "8dfd823e006c85b4550a63c6bbd21d783858c57fec8263187f5b9daf2e6eb9c2"
  },
  {
    "file": "research/frontier-33-batch-15.pages.json",
    "sha256": "e6748deb9c67323ad6c80a49dc926c4866b4a7193b60405dfb562d4d2aaa98fb"
  },
  {
    "file": "research/frontier-33-batch-16.pages.json",
    "sha256": "8dde90e4e38bf1c1ef6b0b7dfc16992bbfbbf4e82bcb1c1512f6911b6a07666e"
  },
  {
    "file": "research/frontier-33-batch-17.pages.json",
    "sha256": "f11d13a977ff2a4b39fa3e4a477dd3d2e9412f85bf39cbcff7e9f969dfbfe539"
  },
  {
    "file": "research/frontier-33-batch-18.pages.json",
    "sha256": "7336d4eaf3f257584a7ef1a3ba68c1dc9e94fb3fa286bc48e91bb922ee842565"
  },
  {
    "file": "research/frontier-33-batch-19.pages.json",
    "sha256": "bf4980fe37ae72e82a59dba4840dd78f69b3fd6933a836d725aed73674b6b3c1"
  },
  {
    "file": "research/frontier-33-batch-2.pages.json",
    "sha256": "d28e7249a01a2094ae9870d7f777d52f9ca4cbd30521c2da850c98ac6b793368"
  },
  {
    "file": "research/frontier-33-batch-20.pages.json",
    "sha256": "59f36a5ba25d3937cb61ea7d145718707d83bbba7ae5fae0f95269082a53e75a"
  },
  {
    "file": "research/frontier-33-batch-3.pages.json",
    "sha256": "41665a3a72d2edfa15ae1e7d842ae0381df4d3652ef02df1c4a0c048626a6671"
  },
  {
    "file": "research/frontier-33-batch-4.pages.json",
    "sha256": "9bcb8aaae2d93dc29e678a211db8b2ade021d48c20b87f3de5635c54d4f995db"
  },
  {
    "file": "research/frontier-33-batch-5.pages.json",
    "sha256": "1c3d7e9ab8b962481e39558d19eeacac62197eab8a314753d2c61ca207f3b931"
  },
  {
    "file": "research/frontier-33-batch-6.pages.json",
    "sha256": "50a429ef951ea3bc7fd9a95ce0299a122c0a67d474984cbe67e08b1857d56d69"
  },
  {
    "file": "research/frontier-33-batch-7.pages.json",
    "sha256": "4de05a8d3fb068d0476d6543fbe4c878d048fe7fd489094a09f1a57cc997a875"
  },
  {
    "file": "research/frontier-33-batch-8.pages.json",
    "sha256": "df3c50697b7624bbb531efb57f036caad52ee7c145c8280ffe509ca13c703031"
  },
  {
    "file": "research/frontier-33-batch-9.pages.json",
    "sha256": "ca0982057768e8d402097e51155a8ea79ad891b727bee441ba3509f70c69ca15"
  },
  {
    "file": "research/frontier-33-step9-changes.pages.json",
    "sha256": "2bcb271313cb93999d60c9b0ee50a420d61b435016f0f6010bfd3b4ac333c669"
  },
  {
    "file": "research/frontier-34-batch-1.pages.json",
    "sha256": "e868c02773972bafd967a855380896b7c8ff9e3e790211c2a3ef2b6c7c518be4"
  },
  {
    "file": "research/frontier-34-batch-10.pages.json",
    "sha256": "8b99f57b9fd1a826018dddc25798e537418cee25586e288925f17d2894d6e65c"
  },
  {
    "file": "research/frontier-34-batch-11.pages.json",
    "sha256": "17f742bb2714b528f42fb5efee8b160e07b7ff830b21275726d191bbf0af81d7"
  },
  {
    "file": "research/frontier-34-batch-12.pages.json",
    "sha256": "19d570e912ff172da201d9c6d058b99e572492f3587b7abb1220bd57a17ee282"
  },
  {
    "file": "research/frontier-34-batch-13.pages.json",
    "sha256": "239c1d07138ccf14f4c269aefde18215f3d26ac98220780376624c65b49b753d"
  },
  {
    "file": "research/frontier-34-batch-14.pages.json",
    "sha256": "e52b85c1fdb33837e862701f69005bd0144dc1f6ac03a3b8c46d5f3f8f9b1d4f"
  },
  {
    "file": "research/frontier-34-batch-15.pages.json",
    "sha256": "9396bdb959018ffbeac2995dd76675fe515af47b85cfa6da71f409f952e7d54e"
  },
  {
    "file": "research/frontier-34-batch-16.pages.json",
    "sha256": "3a62c2b42a8fd73cce114cd75e2da2c2c205eeb191c86da709ae0e3618872d84"
  },
  {
    "file": "research/frontier-34-batch-17.pages.json",
    "sha256": "522e036c9527af14c0ee8c187909eb4bf79822a7b3a05e76845c81bd6ce8d4f9"
  },
  {
    "file": "research/frontier-34-batch-18.pages.json",
    "sha256": "edaaf24171e2851395ac3b36178ce0a7b028d5652f1c357356dd66b73463dbb7"
  },
  {
    "file": "research/frontier-34-batch-19.pages.json",
    "sha256": "509e1299c95aec05c14997cd98ba1827edb59de5410ade6fcd885efcd020d4be"
  },
  {
    "file": "research/frontier-34-batch-2.pages.json",
    "sha256": "6d97547c909f27b2c6810f1aca1d50aa3ceec473b8df819a98095958032b6c85"
  },
  {
    "file": "research/frontier-34-batch-3.pages.json",
    "sha256": "22bffe7abff786c538c152c648bdfefb7c20a3b9566d54d8a282a0f424159463"
  },
  {
    "file": "research/frontier-34-batch-4.pages.json",
    "sha256": "e9717f08b5ad7bbeeb5f0bf7c6e68734d41e415027e812e3f4bdcd0809df2def"
  },
  {
    "file": "research/frontier-34-batch-5.pages.json",
    "sha256": "07866ff937d5ecd783c499cc012c9d507f29cf7f62c3f3f575528a12505bc626"
  },
  {
    "file": "research/frontier-34-batch-6.pages.json",
    "sha256": "c5d127a5c0d999949b5787e8c96b00680d71f144b9d2fc68a49680c78dee91f4"
  },
  {
    "file": "research/frontier-34-batch-7.pages.json",
    "sha256": "d69193af0226d72203fe78741ed1fb8850f5924c7fdfa2f6bff0bdfb9f8905c3"
  },
  {
    "file": "research/frontier-34-batch-8.pages.json",
    "sha256": "506cddf116b24c0204166582411904e0beaac61c442db695bd276639f67f8b76"
  },
  {
    "file": "research/frontier-34-batch-9.pages.json",
    "sha256": "69592616d659d5f27d403175bd7f82458460a6eee81f61189a624091fc21e0b8"
  },
  {
    "file": "research/frontier-4-topology-batch-1.pages.json",
    "sha256": "a82e1e55c058a7d4fd9ee4a4bbc816f4ef5f88cdb71aa13c5ed0d0726878040b"
  },
  {
    "file": "research/frontier-4-topology-batch-2.pages.json",
    "sha256": "895dc49a864b3cd93555540116dc1473e9bf98f596356914dd25ca7bfba1e995"
  },
  {
    "file": "research/frontier-5-batch-1.pages.json",
    "sha256": "378812d4b4087c4e6e80d31040d23b651c00bbb605ee9dd695cf968917d048f5"
  },
  {
    "file": "research/frontier-5-batch-2.pages.json",
    "sha256": "30079e9a3d951cf4c21e5ac2b97bb0433b44288a87d22797126954d0f0aaecb8"
  },
  {
    "file": "research/frontier-6-batch-1.pages.json",
    "sha256": "ab825898ae92b10dd94f0d2a9f1bc7b6e2f164f1587d956f8390bdbeaeabc884"
  },
  {
    "file": "research/frontier-6-batch-2.pages.json",
    "sha256": "3c60b3ce6e80e10de4427ca395051e33e9d24ef9fa97a0828ac9b9648f3d1230"
  },
  {
    "file": "research/frontier-7-batch-1.pages.json",
    "sha256": "8b7cd2e0ef8b3391ecc62532ef39521b94b3c16f018038c388ce20b5fd25ff97"
  },
  {
    "file": "research/frontier-7-batch-2.pages.json",
    "sha256": "17e9f42370e508c34d9cd5a96f894e6c632423764ae8632c38ca0ca6c9e2d968"
  },
  {
    "file": "research/frontier-7-batch-3.pages.json",
    "sha256": "83f9462ba873705a3e7ce56d403859e958808409a54e612b2e342ec85810ad92"
  },
  {
    "file": "research/frontier-7-batch-4.pages.json",
    "sha256": "d24383513cde9d97871fbf0fca339405f26d14395c6455d9d56b0369b0b6b6c8"
  },
  {
    "file": "research/frontier-8-batch-1.pages.json",
    "sha256": "a71f5eb778e42cb11e36db5bfab57d7fc0f649c3dba58113b30ac02e7175d43d"
  },
  {
    "file": "research/frontier-8-batch-2.pages.json",
    "sha256": "f79c3f564fd479e3340567619c22dc0e542f2ec966bc01933fdc19c57c996256"
  },
  {
    "file": "research/frontier-8-batch-3.pages.json",
    "sha256": "9144d79591e1028de56b407565737446fcf3e9f0cca1b319278d97c40bd3de8f"
  },
  {
    "file": "research/frontier-8-batch-4.pages.json",
    "sha256": "80b6ff1e56379fed749be7a01375b175d0191c1a71019526b4b73c734a0f928b"
  },
  {
    "file": "research/frontier-8-batch-5.pages.json",
    "sha256": "24e86c8fa0c31d0ce48cffd638f16096924506dd310e8a293c3b061311310464"
  },
  {
    "file": "research/frontier-9-batch-1.pages.json",
    "sha256": "06abc9e0f02a16a46b6592a9053ebd4639635ae118a8a982f1d1191cdd8449b8"
  },
  {
    "file": "research/frontier-9-batch-2.pages.json",
    "sha256": "bc6c26be599e78f7b542c876b66a0bb422093ca72b5308337d29cc5149d50d36"
  },
  {
    "file": "research/frontier-9-batch-3.pages.json",
    "sha256": "4cb1b1b0bda666a00858c3b2c718e7d0b60cc24982a77feb6e14091b7b15d5a3"
  },
  {
    "file": "research/frontier-9-batch-4.pages.json",
    "sha256": "7d1629c54ba779b187b4571162daf92a829c5dfc69d3ce7ba09b296cb7f4742e"
  },
  {
    "file": "research/frontier-9-batch-5.pages.json",
    "sha256": "3e3e29410270a62f742aca7acef04212b58c206f6d30d8992f3c7f5140c23264"
  },
  {
    "file": "research/level7-algebra-batch-1.pages.json",
    "sha256": "32fb77a7561b698cf59a14d87e42fa02bf646106d87b73beaa52c13ee3c8a36a"
  },
  {
    "file": "research/level8-algebra-aborted.pages.json",
    "sha256": "c9362fa9b77b10fb194929907444a38f9565cde698d7b571ac7cbe58b5b9b296"
  },
  {
    "file": "research/level8-algebra-batch-1.pages.json",
    "sha256": "a332e2a27876b1ef071a095b4249d0a8fef95d1e649a4e1717bf24d96b7ae2b0"
  },
  {
    "file": "research/level8-batch-1.pages.json",
    "sha256": "fd1cbd03b06cdab6f46b9cea01e39964f2d7515b76b780ec5e6f149a03c1d150"
  },
  {
    "file": "research/level8-batch-2.pages.json",
    "sha256": "80452f4e631691cf00f1c8727b074944292c449548be38bbbaf9c27cc75195f2"
  },
  {
    "file": "research/level8-batch-3.pages.json",
    "sha256": "d440600959385e02d171a25d2450797e87590d187bd5bf1a721d78a5b8168c71"
  },
  {
    "file": "research/level9-batch-1.pages.json",
    "sha256": "f3032e9f32283b2c19b02e40d5aad3f11c50329225f0f446904ef18dca2a3a42"
  },
  {
    "file": "research/level9-batch-2.pages.json",
    "sha256": "079959c7886c3190a4ce8c17c89320083cd8e7366114aecf40cd37312c74592d"
  },
  {
    "file": "research/level9-mixed-batch-1.pages.json",
    "sha256": "fc16de2f538f858d994268290feb99b002d0c0c4f18d5a5673a0e73543fc0138"
  },
  {
    "file": "research/level9-mixed-batch-2.pages.json",
    "sha256": "d5b4d3aa8b84b4479522d40211de809a43efcccf2f8e3eeb267c97630fdd305d"
  },
  {
    "file": "research/zfc-batch-1.pages.json",
    "sha256": "00046396d33fa868ef6d8d8851a3aa3328e3e4ef275818cb65a0b4a46d88846d"
  }
]
```

## Required next authorized work

Integrate the explicit local additions and corrected deps into the canonical plan, repair and re-review the published Tor hypotheses and upstream proof order, obtain complete readable source pages and genuine byte-fetch receipts, and finish the semantic transitive audit. Rerun the named gates after those changes. Until then both consumers remain blocked; this report grants no publication approval.

Coverage clarification: the commutative specialization of Weibel Theorem 3.2.2 is included in the localization example. Its full central-localization theorem is separately retained with owner-decision destination and its missing construction stated explicitly in the coverage ledger; no proof on either owned page consumes that additional generality. This is a non-load-bearing harvest deferral, not an omitted prerequisite pair.
