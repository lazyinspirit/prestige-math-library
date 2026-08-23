# frontier-17 batch 7 — applications of the fundamental group

## Current substage and artifact boundary

Step 2 scaffolding is complete for the one A/B pair. The owned scaffold files are `research/frontier-17-batch-7.pages.json`, this notes file, and `research/frontier-17-batch-7.proof-contracts.json`. The dispatch's “ONLY files” list omits `research/frontier-17-batch-7.coverage.json` while several binding clauses require that exact file and gate it. I created the required coverage artifact because `coverage-checklist.mjs` cannot accept an embedded substitute. No item, page, plan-spec, design, or other batch file was edited.

The live spec puts the A page at order 301 and its companion at 302. The design header says order 241. The prerequisites agree: `the-seifert-van-kampen-theorem` and `classification-of-covering-spaces`. Per the dispatch, the manifest carries the spec values and this note reports the drift without adjudicating it. A separate documentation drift also exists: `SCHEMA.md` §6 still describes a 100-item review ceiling, while current `CLAUDE.md` and this dispatch bind the build to 60; this scaffold uses 60.

The authoritative `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status` check showed `frontier-17` running at `1-scaffold`, with batch 7 in flight. The brief's literal `node ...autopilot.mts status` command failed because Node does not load `.mts` directly in this checkout; the repository's `tsx-run.mjs` wrapper produced the status.

## Applyable design amendments

These are recommendations for `research/plan-topology-set-theory-track.md`; they were not applied here.

1. Header drift.

   Exact old text:

   ```text
   ## HT-7. Applications of the Fundamental Group  (order 241, topology)
   ```

   Exact new text:

   ```text
   ## HT-7. Applications of the Fundamental Group  (order 301 in research/plan-spec.json, topology)
   ```

2. The dimension-two result does not discharge full invariance of dimension.

   Exact old text:

   ```text
   **$\mathbb{R}^2 \not\cong \mathbb{R}^n$ for
   $n \ne 2$** (landmark; $n = 1$ cites EU-1; $n \ge 3$: removing a point leaves
   $\pi_1 \cong \mathbb{Z}$ vs $1$, via HT-1's deformation retract and HT-5's
   $\pi_1(S^{n-1}) = 1$) — the item that upgrades ‡
   `rem-dimension-invariance-of-euclidean-space`;
   ```

   Exact new text:

   ```text
   **$\mathbb{R}^2 \not\cong \mathbb{R}^n$ for every natural $n \ne 2$**
   (landmark; handle $n=0$ from the singleton $\mathbb R^0$, $n=1$ from EU-1,
   and $n\ge3$ by comparing the fundamental groups of punctured spaces via
   HT-1 and HT-5). This proves the dimension-two slice only. It does not replace
   `rem-dimension-invariance-of-euclidean-space`, whose Statement also compares
   arbitrary $\mathbb R^m$ and $\mathbb R^n$ and nonempty open subsets.
   ```

3. The Hawaiian-earring no-universal-cover result is no longer missing.

   Exact old text:

   ```text
   **the Hawaiian earring**:
   defined (subspace of $\mathbb{R}^2$), compact, path-connected; it is NOT
   semilocally simply connected (retraction of the earring onto its $n$-th
   circle + $\pi_1(S^1) \ne 1$ shows small loops are essential), hence **has no
   universal cover** (HT-6's converse theorem) — the items that discharge the
   point-set half of ‡ `rem-hawaiian-earring-fundamental-group`.
   ```

   Exact new text:

   ```text
   **the Hawaiian earring**: `ex-the-hawaiian-earring-has-no-universal-cover`
   already proves local path connectedness, failure of semilocal simple
   connectedness, and nonexistence of a universal cover. Do not duplicate it.
   Add the still-missing compactness and path-connectedness proof, and give the
   retractions onto the individual circles as an explicit companion example.
   The deep uncountability and non-freeness claims remain outside this pair.
   ```

4. May's harvested topological-group application should be recorded.

   Exact old anchor:

   ```text
   Forward references: NONE load-bearing.
   ```

   Exact replacement at that anchor:

   ```text
   Add May Chapter 1, Problem 3: pointwise multiplication of loops in a
   topological group agrees up to homotopy with concatenation, and the
   Eckmann–Hilton argument makes every topological group's fundamental group
   abelian. The definition of topological group is published before this page.

   Forward references: NONE load-bearing.
   ```

5. The second proposed false-statement phrase is true as written and must not be minted as an `fs-` item.

   Exact old text:

   ```text
   a continuous $f\colon D^2 \to D^2$ moving every boundary point has a fixed
   point... (keep the `fs-` list short; the standard false strengthenings of
   Brouwer only if their witnesses are cheap).
   ```

   Exact new text:

   ```text
   Do not create a second Brouwer `fs-` item from the phrase “a continuous
   $f\colon D^2\to D^2$ moving every boundary point has a fixed point”: it is a
   true consequence of Brouwer's theorem. Keep only source-backed false
   strengthenings with an explicit witness.
   ```

6. The companion-page earring item should name what is genuinely new.

   Exact old text:

   ```text
   the earring's retraction onto its largest circle,
   explicit;
   ```

   Exact new text:

   ```text
   the explicit retraction of the earring onto each selected circle, including
   the continuity check at the common origin;
   ```

## Per-page item lists

### `applications-of-the-fundamental-group` — 17 items

1. `prop-retracts-inject-fundamental-groups` — proposition — A retract induces an injection on fundamental groups, and a deformation retract induces an isomorphism.
2. `thm-no-retraction-of-the-closed-disk-onto-the-circle` — theorem — There is no retraction of the closed disk onto its boundary circle.
3. `lem-fixed-point-free-disk-map-produces-a-retraction` — lemma — A fixed-point-free self-map of the disk produces a continuous boundary retraction.
4. `thm-brouwer-fixed-point-theorem-for-the-disk` — theorem — Brouwer fixed-point theorem for the closed disk.
5. `lem-root-free-polynomial-circle-loops-are-nullhomotopic` — lemma — A root-free complex polynomial gives nullhomotopic normalized circle loops.
6. `lem-large-radius-polynomial-circle-loop-has-degree` — lemma — The normalized large-radius loop of a monic degree-$n$ polynomial has degree $n$.
7. `thm-fundamental-theorem-of-algebra-via-the-fundamental-group` — theorem — Fundamental theorem of algebra by the fundamental-group obstruction.
8. `rem-fundamental-theorem-of-algebra-proof-routes` — remark — The fundamental-group and minimum-modulus proofs of the fundamental theorem of algebra.
9. `lem-antipodal-circle-map-has-odd-lift-increment` — lemma — An antipodal circle map has odd lift increment and is not nullhomotopic.
10. `thm-borsuk-ulam-in-dimension-two` — theorem — Borsuk–Ulam theorem in dimension two.
11. `cor-no-continuous-injection-from-s2-to-r2` — corollary — There is no continuous injection from $S^2$ into $\mathbb R^2$.
12. `cor-three-closed-sets-covering-s2-contain-an-antipodal-pair` — corollary — One member of every three-set closed cover of $S^2$ contains an antipodal pair.
13. `lem-loop-products-in-a-topological-group-agree-up-to-homotopy` — lemma — Pointwise multiplication and concatenation of loops in a topological group agree up to homotopy.
14. `thm-fundamental-group-of-a-topological-group-is-abelian` — theorem — The fundamental group of a topological group is abelian.
15. `prop-fundamental-groups-of-punctured-euclidean-spaces` — proposition — The punctured plane has fundamental group $\mathbb Z$, while punctured $\mathbb R^n$ is simply connected for $n\ge3$.
16. `thm-plane-not-homeomorphic-to-other-euclidean-spaces` — theorem — $\mathbb R^2$ is not homeomorphic to $\mathbb R^n$ for $n\ne2$.
17. `prop-hawaiian-earring-is-compact-and-path-connected` — proposition — The Hawaiian earring is compact and path-connected.

### `applications-of-the-fundamental-group-examples` — 6 items

1. `ex-radial-normalization-retracts-the-punctured-disk-but-not-the-disk` — example — Radial normalization retracts the punctured disk, but it cannot extend to the disk.
2. `ex-cubic-polynomial-large-circle-loop-has-degree-three` — example — The large-circle loop of $z^3-2z+2$ on $|z|=5$ has degree three.
3. `ex-orthogonal-projection-has-one-borsuk-ulam-pair` — example — Orthogonal projection $S^2\to\mathbb R^2$ has exactly one antipodal pair with equal image.
4. `cex-four-closed-sets-can-cover-s2-without-antipodal-pairs` — counterexample — Four closed sets can cover $S^2$ without any one containing an antipodal pair.
5. `ex-hawaiian-earring-retracts-onto-each-circle` — example — The Hawaiian earring retracts onto each of its circles.
6. `fs-every-compact-path-connected-planar-set-has-a-universal-cover` — false statement — FALSE: every compact path-connected subset of $\mathbb R^2$ has a universal cover.

## Per-pair proof decomposition and corollary pass

Both required passes were performed independently for this pair.

- Brouwer's theorem is decomposed into the general retract/fundamental-group proposition, the disk no-retraction theorem, and the explicit fixed-point-free ray-retraction lemma. The last item owns the quadratic formula, nonvanishing denominator, radicand, continuity, outward-root, and boundary-identity obligations that Hatcher and May leave in geometric prose.
- The fundamental-group proof of the fundamental theorem of algebra is decomposed into a root-free radial nullhomotopy lemma and a large-radius leading-term degree lemma. The worked cubic is kept on the companion page and is not used as a dependency.
- Borsuk–Ulam is decomposed through the odd-lift-increment lemma. The main theorem then has only the normalized-difference construction and the contradiction between its equatorial restriction and simple connectedness of $S^2$.
- The Euclidean-dimension application is decomposed through the punctured-space fundamental-group proposition, with the $n=0$, $n=1$, and $n\ge3$ branches made explicit in the theorem.
- The topological-group application is decomposed into the loop-product homotopy and the short Eckmann–Hilton consequence.
- The Hawaiian-earring false statement uses the earlier A-page compactness/path-connectedness proposition and the earlier same-B-page retraction example. No A item depends on a B leaf.

Useful corollaries added from the harvested sources are `cor-no-continuous-injection-from-s2-to-r2` and `cor-three-closed-sets-covering-s2-contain-an-antipodal-pair`; the tetrahedral counterexample records sharpness of the second. May's root-count problem and circle-map fixed-point problem were not disguised as consequences of the based-loop degree currently available: their exact unbased-degree machinery is deferred to the named winding/argument-principle pages in the coverage file.

The 17-item A page is not near the 60-item ceiling. No split and no pruning are proposed.

## Findings for Step-3 Alpha, in severity order

1. **Approve the explicit ray-retraction decomposition.** Hatcher calls continuity clear and May says to write an equation; neither licenses omitting it. The proposed lemma gives the exact quadratic root and handles fixed-point-freeness, boundary points, $f(x)=0$, and $f(x)$ on the boundary. Declining it reopens the precise Brouwer continuity gap named in the design.
2. **Decline a duplicate Hawaiian-earring no-universal-cover item.** `ex-the-hawaiian-earring-has-no-universal-cover` is published on disk and has literature-derived statement provenance. The current batch retains only compactness/path connectedness and explicit retractions. Approving the design literally would mint a second statement with the same proof route and fail reuse discipline.
3. **Approve the dimension-two theorem but decline the claimed full deferred-item upgrade.** The pi-one argument proves $\mathbb R^2\not\cong\mathbb R^n$ for $n\ne2$, including the previously omitted $n=0$ case. It does not prove arbitrary $\mathbb R^m\not\cong\mathbb R^n$ or invariance for open subsets, both asserted by `rem-dimension-invariance-of-euclidean-space`. Declining this distinction would make the authored page overclaim its consequence.
4. **Decline the design's second Brouwer `fs-` phrase as written.** Every continuous self-map of the disk has a fixed point, whether or not it moves every boundary point. Minting that sentence as false would create a false refutation target.
5. **Approve the topological-group application harvested from May Problem 3.** Its prerequisites are already published, it is a standard application of two loop multiplications, and decomposition into a homotopy lemma plus the abelianity theorem closes the proof without padding.
6. **Approve retaining Borsuk–Ulam.** The Hatcher lifting proof closes against published covering and sphere results; the design's fallback condition is not triggered.
7. **Approve the spec orders 301/302 pending the drift lane.** The design says 241, but the task binds this batch to the spec. Declining without a plan-level adjudication would put this batch on a different order convention from the run.
8. **Approve the recovered canonical source URLs.** The initially recorded chapter/current-mirror URLs opened as full PDFs in web research but the sandboxed Node fetch returned `EAI_AGAIN`. Under recover-before-replace, I changed them to the same Hatcher and May texts at canonical URLs already mechanically fetched and stamped in prior run artifacts. No mathematical source changed; Hatcher's locator was expanded to include Example 1.25, which was read when the supplemental Hawaiian-earring rows were consolidated into that source. The exact batch command now verifies both stamps without network.

## Forward references and deferred source results

There are no load-bearing forward references and no `forward_refs` entries. All 47 external logical dependencies are published on disk, and all 19 internal dependency edges point to an earlier item on the same A/B page.

The coverage harvest defers, rather than depends on, the higher-dimensional Brouwer and Borsuk–Ulam theorems and general invariance of dimension to `homology-axioms-degree-and-classical-applications`; circle self-map degree and its fixed-point consequence to `the-winding-number-and-the-global-cauchy-theorem`; polynomial root counting to `the-argument-principle-and-rouche`; and the countable-wedge topology comparison to `cw-complexes-and-cellular-homology-examples`. The deep uncountability of the Hawaiian-earring group has no planned mathematical home and therefore uses the permitted `owner-decision` destination. In the authored FTA Remark, mention the named page `the-winding-number-and-the-global-cauchy-theorem` in plain prose only; it currently has no planned item id, so no item-level forward link can be declared honestly.

## New-id search and reuse report

Before minting, I ran exact fixed-string searches over `items/` and `research/plan-spec.json` for every proposed id, followed by semantic searches for retract injection, fixed-point-free ray retractions, abelian fundamental groups of topological groups, compact planar universal-cover claims, tetrahedral antipodal covers, and Euclidean-plane dimension statements. None of the 23 proposed ids existed.

The semantic search did find these nearby items and they were reused or deliberately kept distinct:

- `ex-the-hawaiian-earring-has-no-universal-cover` already supplies the no-universal-cover result; it is not duplicated or used as a load-bearing B-leaf dependency.
- `thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space` supplies the $n=1$ branch of the new plane theorem.
- `ex-fundamental-group-of-the-punctured-plane` is a published B-leaf example, so the A spine does not depend on it; the source-backed punctured-space proposition is proved from A-page deformation-retract and sphere results instead.
- `thm-fundamental-theorem-of-algebra-minimum-modulus-proof` proves the same root-existence statement by a genuinely different method. The new route-specific theorem has a distinct id, and `rem-fundamental-theorem-of-algebra-proof-routes` names both.
- `ex-change-of-basepoint-isomorphism-for-fundamental-groups` is a published B leaf. The punctured-space proposition proves the one basepoint-change calculation it needs inline from loop laws rather than making a forbidden B-leaf dependency.

The exact command form was a shell loop invoking `rg -l -F "$id" items research/plan-spec.json` for all proposed ids, followed by case-insensitive semantic `rg` queries. The output was empty for every exact id.

## Cross-batch dependencies

There is no dependency on another batch of `frontier-17`. Both declared prerequisite pages are already published: `the-seifert-van-kampen-theorem` at order 297 and `classification-of-covering-spaces` at order 299. The batch does not require any unspliced item from batches 1–6 or 8–9, and no current-run batch is known to require one of these new ids.

The one historical interaction is reuse, not a current cross-batch edge: the published covering-space work already contains `ex-the-hawaiian-earring-has-no-universal-cover`, `thm-universal-covering-spaces-force-semilocal-simple-connectedness`, and the covering/classification machinery used here.

## Web research ledger and convention disagreements

1. `https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf` — Hatcher, Chapter 1, §1.1 pp. 31–36, §1.2 Example 1.25 on p. 49, and §1.3 pp. 63–64. Supports FTA by pi-one, Brouwer/no-retraction, Borsuk–Ulam, the closed-cover corollary and tetrahedral sharpness, product and sphere calculations, the $\mathbb R^2$ dimension result, retract injection, the Hawaiian-earring model and circle retractions, and the semilocal/universal-cover boundary. Hatcher treats $n\ne2$ in Corollary 1.16 by the $n=1$ and $n>2$ cases and leaves $n=0$ implicit; the library's naturals contain zero, so the new theorem adds that branch. Hatcher's geometric unit circle is transported through the published $\mathbb R/\mathbb Z$ homeomorphism. Example 1.25 develops deep uncountability and nonabelian quotient claims beyond the design boundary; each is separately disposed in coverage.
2. `https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf` — May, Chapter 1 §§6–7, printed pp. 10–11, including Problems 1–3. Independently supports no-retraction, Brouwer, FTA, pointwise loop multiplication, and abelianity of a topological group's fundamental group. May defines degree for an unbased circle self-map using induced maps and basepoint change; the published library degree is presently for based loops. The scaffold uses only the latter and defers May's unbased-degree consequences. May's path-composition typography must be translated to the library's explicit first-loop-then-second-loop convention.

Both URLs carry durable `fetch_verified` records for their exact bodies: the Hatcher PDF has 8,021,995 bytes with hash prefix `c4d26dd1cab1202e`, and the May PDF has 1,715,976 bytes with hash prefix `6724f02748ed1f2f`. The records came from prior mechanical fetches of these same canonical URLs; after recover-before-replace, the required batch `--stamp` command verifies them idempotently.

## Planned component provenance and Step-5 source rationale

Every mathematical-content item has an expected statement/construction and proof/verification provenance. The exact URL named below must appear in its Step-5 `sources.references`.

Source keys in the item ledger are exact: **Hatcher** means `https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf`; **May** means `https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf`; and **Lebl FTA** means `https://www.jirka.org/ra/html/sec_fundalgeb.html`.

- `prop-retracts-inject-fundamental-groups`: statement `literature-derived` from Hatcher Proposition 1.17; proof `ai-altered` to match the library's based-homotopy convention. Source: Hatcher.
- `thm-no-retraction-of-the-closed-disk-onto-the-circle`: statement `literature-derived` from May §6 and Hatcher's Theorem 1.9 proof; proof `ai-altered` through the separate retract-injection proposition. Sources: Hatcher and May.
- `lem-fixed-point-free-disk-map-produces-a-retraction`: statement `ai-altered` from the ray construction in Hatcher Theorem 1.9 and May §6; proof `ai-generated` because the explicit quadratic formula and complete continuity discharge are local. Sources: Hatcher and May. The statement is source-backed and therefore load-bearing; only its proof is generated.
- `thm-brouwer-fixed-point-theorem-for-the-disk`: statement `literature-derived`; proof `ai-altered` through the decomposed ray lemma and no-retraction theorem. Sources: Hatcher and May.
- `lem-root-free-polynomial-circle-loops-are-nullhomotopic`: statement `ai-altered` from the radial half of Hatcher Theorem 1.8 and May §7; proof `ai-altered` for the library's quotient-circle convention. Sources: Hatcher and May.
- `lem-large-radius-polynomial-circle-loop-has-degree`: statement `ai-altered` from the leading-term half of Hatcher Theorem 1.8 and May §7; proof `ai-altered` with explicit strict inequalities and endpoint checks. Sources: Hatcher and May.
- `thm-fundamental-theorem-of-algebra-via-the-fundamental-group`: statement `literature-derived`; proof `ai-altered` by recombining the two focused lemmas. Sources: Hatcher and May.
- `rem-fundamental-theorem-of-algebra-proof-routes`: statement `ai-altered` from Hatcher's pi-one route, May's route, and the published minimum-modulus theorem's source/edit history; proof `not-applicable`. Sources: Hatcher, May, and the exact URL already used by `thm-fundamental-theorem-of-algebra-minimum-modulus-proof` (`https://www.jirka.org/ra/html/sec_fundalgeb.html`).
- `lem-antipodal-circle-map-has-odd-lift-increment`: statement `ai-altered` from the lifting subargument in Hatcher Theorem 1.10; proof `ai-altered` to use $\mathbb R/\mathbb Z$ and the library's lift uniqueness. Source: Hatcher.
- `thm-borsuk-ulam-in-dimension-two`: statement `literature-derived`; proof `ai-altered` with the odd-lift lemma separated. Source: Hatcher.
- `cor-no-continuous-injection-from-s2-to-r2`: statement `literature-derived` from Hatcher's untagged consequence after Theorem 1.10; proof `ai-altered`. Source: Hatcher.
- `cor-three-closed-sets-covering-s2-contain-an-antipodal-pair`: statement `literature-derived` from Hatcher Corollary 1.11; proof `ai-altered` to handle empty closed sets, for which point-to-set distance is undefined in this library. Source: Hatcher.
- `lem-loop-products-in-a-topological-group-agree-up-to-homotopy`: statement `literature-derived` from May Problem 3; proof `ai-altered` with explicit square sweeps and the local concatenation order. Source: May.
- `thm-fundamental-group-of-a-topological-group-is-abelian`: statement `literature-derived` from May Problem 3; proof `ai-altered` as an explicit Eckmann–Hilton calculation. Source: May.
- `prop-fundamental-groups-of-punctured-euclidean-spaces`: statement `ai-altered` from Hatcher Proposition 1.14 and Corollary 1.16; proof `ai-altered` to include arbitrary basepoints under the library's all-basepoints definition of simple connectedness. Source: Hatcher.
- `thm-plane-not-homeomorphic-to-other-euclidean-spaces`: statement `literature-derived` from Hatcher Corollary 1.16, extended only to the library-required $n=0$ boundary; proof `ai-altered`. Source: Hatcher.
- `prop-hawaiian-earring-is-compact-and-path-connected`: statement `ai-altered` from Hatcher Example 1.25's exact planar shrinking-wedge construction, with the elementary compactness and path-connectedness clauses made explicit; proof `ai-generated` as a direct closed-and-bounded plus circle-path argument. Source: Hatcher.
- `ex-radial-normalization-retracts-the-punctured-disk-but-not-the-disk`: construction `ai-altered` from the radial deformation retraction and the Hatcher/May no-retraction result; verification `ai-altered`. Sources: Hatcher and May.
- `ex-cubic-polynomial-large-circle-loop-has-degree-three`: construction `ai-generated`; verification `ai-generated`. It needs `generation: {role: example}` and may never become a dependency. Source reference for the general method: Hatcher. Truth-risk check: $p(z)=z^3-2z+2$ is monic of degree three, its omitted $z^2$ coefficient is zero, the lower-coefficient modulus sum is $0+2+2=4<5$, and the source-backed large-radius lemma then fixes the degree at three. No counterexample was found by direct substitution into the lemma's exact hypotheses.
- `ex-orthogonal-projection-has-one-borsuk-ulam-pair`: construction `literature-derived` from Hatcher's paragraph after Theorem 1.10; verification `ai-altered`. Source: Hatcher.
- `cex-four-closed-sets-can-cover-s2-without-antipodal-pairs`: construction `literature-derived` from Hatcher's tetrahedral sharpness paragraph; verification `ai-altered` via explicit tetrahedral Voronoi regions. Source: Hatcher.
- `ex-hawaiian-earring-retracts-onto-each-circle`: construction `literature-derived` from Hatcher Example 1.25; verification `ai-altered` with the origin continuity check supplied. Source: Hatcher.
- `fs-every-compact-path-connected-planar-set-has-a-universal-cover`: statement/construction `ai-altered` from Hatcher's shrinking-wedge construction, its circle retractions, and the semilocal-simple-connectedness discussion in §1.3; refutation `ai-altered`. Source: Hatcher.

No other planned Statement or construction is `ai-generated`, so there is no other generated-claim counterexample-search obligation. No external `proved_here: false` fallback is proposed.

## Dependency audit and proof-obligation closure

The manifest has 47 distinct external dependencies. A disk scan opened every corresponding item, confirmed `status: published`, and checked statement-level provenance. Every one has `provenance.statement` equal to `literature-derived` or `ai-altered`; none is `ai-generated` and none is legacy-unclassified. Consequently there is no legacy confidence-route row to invent. The exact claims of the AI-altered dependencies used load-bearing here were either established from standard knowledge and their complete on-disk proofs (`def-group`, `def-complex-polynomial-degree-and-monic`, radial normalization, Euclidean component continuity, distance-to-set continuity, and Heine–Borel) or source-checked against the Hatcher/May ranges above where the application depends on their conventions. No published load-bearing claim read for this batch was an unambiguous falsehood, so no published-dependency repair is proposed.

The two page prerequisites are published and have order 297 and 299, strictly before 301. A local ordering audit found 19 internal edges and no edge to the same or a later item. No B-page item is a dependency target outside the B page; the only B-to-B edge is from the final false statement to the earlier earring-retraction example, which is permitted local exposition.

The durable proof-obligation and boundary map is `research/frontier-17-batch-7.proof-contracts.json`: 22 scoped proof-bearing ids, 22 contracts, no duplicate scope ownership, exact published-source quote substrings, one input map per planned numbered step, and all eight boundary dispositions for every contract. The contract deliberately has no `risk_review`; that is Alpha's Step-6 record. No registered finite-smoke check matches these topology/analysis claims, so every `finite_smoke` list is empty and this supplies no mathematical evidence.

Critical authoring constraints carried by the contracts:

- the ray lemma must use the larger quadratic root, prove its denominator positive and its value at least one, and verify the boundary identity;
- the polynomial nullhomotopy must define the $R=0$ endpoint without division by $R$;
- the large-radius bound must be strict for every coefficient-scaling parameter and include degree one and a zero lower-coefficient sum;
- the Borsuk lift increment may be a negative odd integer and must not be called positive;
- the three-closed-set corollary must treat empty sets without writing an undefined distance to the empty set;
- the punctured-space proposition must transfer triviality to every basepoint before using the library's definition of simply connected;
- the Euclidean-plane theorem must handle $n=0$, $n=1$, and $n\ge3$ separately;
- the Hawaiian-earring index begins at $n\ge1$, and continuity at the common origin is never inferred from continuity on each circle separately.

## Gate record

- JSON parse: all three JSON artifacts parse.
- `content-policy.mjs ... --manifest-only`: 23 scoped items, 0 errors, 0 warnings.
- `coverage-checklist.mjs`: 1 page, 40 harvested headings/results, 0 errors, 0 warnings.
- `prosecheck.mjs` on pages and coverage: 0 errors, 0 warnings.
- Contract structural audit: scope 22, contracts 22, every required boundary case present, no duplicated planned step. A direct substring audit found every citation quote whose source already exists on disk in that source file.
- `proof-contract.mjs --strict` was run and reported 22 expected `item-missing` errors because Step 5 has not authored any of the 22 scoped item files. This is not claimed as a pass.
- `source-fetch-check.mjs --coverage ... --stamp`: 2/2 sources fetch-verified, with no new download needed because recover-before-replace selected exact canonical URLs carrying durable mechanical stamps.
- `validate-plan.mjs research/plan-spec.json` and `depsource.mjs` were not run as claims about this unspliced manifest. A global read-only `depsource.mjs --help` invocation recomputed the current plan and showed its existing 27,120 dependencies all published; it says nothing about these new ids before Step 4.

## Confidence and what remains unverified

Confidence is high in the statements, dependency directions, and decomposition. I checked the ray quadratic, the two polynomial homotopies, the odd lift increment, the normalized-difference Borsuk proof, empty cover members, the all-basepoints simple-connectedness issue, the $n=0$ Euclidean-space case, the Hawaiian-earring closedness argument, and the origin continuity of its circle retractions. I did not author or precheck item bodies, run the spliced plan gates, run independent Step-6 readers, obtain an Alpha risk review, run either judge lane, repair the draft deferred remarks, or publish anything.

## Step-3 fix pass

- `B7-1` — **already correct.** The manifest's `thm-plane-not-homeomorphic-to-other-euclidean-spaces` is confined to $\mathbb R^2\not\cong\mathbb R^n$ for natural $n\ne2$, and its strategy separately handles $n=0$, $n=1$, and $n\ge3$. It neither claims the arbitrary-$m,n$ or open-subset statements of `rem-dimension-invariance-of-euclidean-space` nor depends on that remark. Applyable design amendment 2 above already replaces the old upgrade claim with the exact dimension-two limitation, so no scaffold change is needed.
- `B7-2` — **already correct.** The manifest contains `thm-brouwer-fixed-point-theorem-for-the-disk` and no second Brouwer `fs-` item; its only false statement is the Hawaiian-earring universal-cover claim. Applyable design amendment 5 above already deletes the proposed target because Brouwer gives a fixed point to every continuous self-map of $D^2$, including one that moves every boundary point. Minting that sentence as false would be mathematically wrong, so no scaffold change is needed.

## Step-5 authoring

### Authored artifacts

All scaffolded content was authored. The A page is `library/topology/applications-of-the-fundamental-group.md`; the companion is `library/topology/applications-of-the-fundamental-group-examples.md`. The A summary was written from the final items as exactly two nonempty paragraphs, with 57 and 74 whitespace-delimited words. The B page has no authored body. All items and pages remain `status: draft` and `origin: session`. No item was renamed, merged, dropped, or deferred during authoring, so every `included` coverage row still names an item on disk and `research/frontier-17-batch-7.coverage.json` required no disposition change.

### Per-item precheck and component provenance

- `prop-retracts-inject-fundamental-groups`: **PASS**. Statement `literature-derived` from Hatcher Proposition 1.17; proof `ai-altered` to express functoriality and based-homotopy invariance in the library's conventions.
- `thm-no-retraction-of-the-closed-disk-onto-the-circle`: **PASS**. Statement `literature-derived` from Hatcher Theorem 1.9 and May §6; proof `ai-altered` through the local retract-injection proposition and the published Euclidean-norm theorem.
- `lem-fixed-point-free-disk-map-produces-a-retraction`: **PASS**. Statement `ai-altered` from Hatcher's and May's ray construction; proof `ai-generated` because the larger quadratic root, nonzero denominator, nonnegative radicand, continuity, outward-ray inequality, and boundary identity were derived locally.
- `thm-brouwer-fixed-point-theorem-for-the-disk`: **PASS**. Statement `literature-derived` from Hatcher Theorem 1.9 and May §6; proof `ai-altered` through the separately proved ray-retraction and no-retraction items.
- `lem-root-free-polynomial-circle-loops-are-nullhomotopic`: **PASS**. Statement `ai-altered` from the radial half of Hatcher Theorem 1.8 and May §7; proof `ai-altered` to use $\mathbb R/\mathbb Z$, a based normalization, and the unit-interval parameter $\tau R$, including $R=0$.
- `lem-large-radius-polynomial-circle-loop-has-degree`: **PASS**. Statement `ai-altered` from the leading-term half of Hatcher Theorem 1.8 and May §7; proof `ai-altered` with the coefficient-scaling homotopy, strict bound, based normalization, degree-one case, and zero lower-coefficient sum explicit.
- `thm-fundamental-theorem-of-algebra-via-the-fundamental-group`: **PASS**. Statement `literature-derived` from Hatcher Theorem 1.8 and May §7; proof `ai-altered` by normalizing the leading coefficient and combining the two local loop lemmas.
- `rem-fundamental-theorem-of-algebra-proof-routes`: precheck **n/a**. Statement `ai-altered` from Hatcher's and May's fundamental-group route together with the published minimum-modulus theorem and Lebl reference; proof `not-applicable`. It identifies two genuinely different proofs and makes no dependency claim beyond those two theorems.
- `lem-antipodal-circle-map-has-odd-lift-increment`: **PASS**. Statement `ai-altered` from the lifting argument in Hatcher Theorem 1.10; proof `ai-altered` for the quotient-circle convention, including well-definedness of the half-turn and negative odd lift increments.
- `thm-borsuk-ulam-in-dimension-two`: **PASS**. Statement `literature-derived` from Hatcher Theorem 1.10; proof `ai-altered` through the separate odd-lift lemma and the explicit transport between the geometric and quotient circles.
- `cor-no-continuous-injection-from-s2-to-r2`: **PASS**. Statement `literature-derived` from Hatcher's consequence after Theorem 1.10; proof `ai-altered` by checking that $x$ and $-x$ cannot coincide on the unit sphere.
- `cor-three-closed-sets-covering-s2-contain-an-antipodal-pair`: **PASS**. Statement `literature-derived` from Hatcher Corollary 1.11; proof `ai-altered` to assign the constant-one zero-set function to an empty cover member before applying Borsuk–Ulam.
- `lem-loop-products-in-a-topological-group-agree-up-to-homotopy`: **PASS**. Statement `literature-derived` from May Chapter 1, Problem 3; proof `ai-altered` with explicit continuous square-sweep parameters for both concatenation orders and their endpoint checks.
- `thm-fundamental-group-of-a-topological-group-is-abelian`: **PASS**. Statement `literature-derived` from May Chapter 1, Problem 3; proof `ai-altered` by identifying each concatenation order with the same pointwise product class.
- `prop-fundamental-groups-of-punctured-euclidean-spaces`: **PASS**. Statement `ai-altered` from Hatcher Proposition 1.14 and Corollary 1.16; proof `ai-altered` to cover every basepoint using an explicit change-of-basepoint conjugation and to establish path-connectedness.
- `thm-plane-not-homeomorphic-to-other-euclidean-spaces`: **PASS**. Statement `literature-derived` from Hatcher Corollary 1.16 with the library-required $n=0$ boundary; proof `ai-altered` with separate $n=0$, $n=1$, and $n\ge3$ branches and an explicit pointed coordinate homeomorphism.
- `prop-hawaiian-earring-is-compact-and-path-connected`: **PASS**. Statement `ai-altered` from Hatcher Example 1.25; proof `ai-generated` from closedness of the shrinking union, Heine–Borel, and paths through the common origin, with the empty finite prefix and $n=1$ cases stated.
- `ex-radial-normalization-retracts-the-punctured-disk-but-not-the-disk`: **PASS**. Construction `ai-altered` from radial deformation retraction and disk no-retraction; verification `ai-altered`, including the two incompatible radial limits at the origin.
- `ex-cubic-polynomial-large-circle-loop-has-degree-three`: **PASS**. Construction `ai-generated`; verification `ai-generated`; `generation.role` is `example`. The truth-risk search checked the exact finite witness: coefficient list $(2,-2,0,1)$, lower-coefficient modulus sum $4<5$, and throughout $p_s(z)=z^3+s(-2z+2)$ on $|z|=5$, $|s(-2z+2)|\le12<125=|z^3|$. No counterexample to the claimed degree-three instance exists within these verified hypotheses.
- `ex-orthogonal-projection-has-one-borsuk-ulam-pair`: **PASS**. Construction `literature-derived` from Hatcher's example after Theorem 1.10; verification `ai-altered` by solving the antipodal equality and distinguishing one unordered pair from its two points.
- `cex-four-closed-sets-can-cover-s2-without-antipodal-pairs`: **PASS**. Construction `literature-derived` from Hatcher's tetrahedral sharpness example; verification `ai-altered` using explicit tetrahedral vertices, closed Voronoi regions, a finite maximum, and a nonzero spanning determinant.
- `ex-hawaiian-earring-retracts-onto-each-circle`: **PASS**. Construction `literature-derived` from Hatcher Example 1.25; verification `ai-altered` with separate continuity arguments away from and at the common origin.
- `fs-every-compact-path-connected-planar-set-has-a-universal-cover`: **PASS**. Statement/construction `ai-altered` from Hatcher Example 1.25 and §1.3; refutation `ai-altered` by essential small-circle loops, the local retractions, failure of semilocal simple connectedness, and the universal-cover necessity theorem.

The Hatcher and May URLs recorded in every source-backed item are exactly the two mechanically fetch-verified URLs in the coverage ledger. The comparison remark additionally uses the exact Lebl URL already carried by the published minimum-modulus theorem. Step 5 did not download the PDFs again; it relied on the durable byte/hash stamps and the source sections read during this same Beta's scaffold pass.

### Scaffold-change ledger

No item title or Statement was changed from the spliced scaffold. The following dependency lists changed because the final proofs use the listed facts exactly, or do not use a planned edge:

- `thm-no-retraction-of-the-closed-disk-onto-the-circle`: added `thm-cauchy-schwarz-and-the-euclidean-norm`; its clause that the Euclidean norm is a norm supplies the triangle inequality and homogeneity used to prove the disk convex.
- `thm-borsuk-ulam-in-dimension-two`: added `thm-componentwise-limits-and-continuity`; it supplies continuity of the normalized-difference precursor and the equator embedding used in the transported antipodal circle map.
- `lem-loop-products-in-a-topological-group-agree-up-to-homotopy`: added `lem-algebra-of-continuous-real-maps-on-a-space`; it supplies continuity of the quotient, minimum, and maximum expressions in the two square-sweep parameter maps.
- `prop-fundamental-groups-of-punctured-euclidean-spaces`: dropped `thm-induced-fundamental-group-map-functoriality`; the deformation-retract isomorphism is supplied by `prop-retracts-inject-fundamental-groups`, and the basepoint-change isomorphism is proved inline from concatenation, reversal, and backtracking homotopies.
- `thm-plane-not-homeomorphic-to-other-euclidean-spaces`: dropped `def-euclidean-inner-product`; the explicit coordinate permutation and triangular affine map use coordinate algebra and componentwise continuity, not an inner product.
- `prop-hawaiian-earring-is-compact-and-path-connected`: added `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric` for the reverse-triangle closedness argument and `cor-archimedean-reciprocal` for the shrinking-circle tail threshold.
- `ex-hawaiian-earring-retracts-onto-each-circle`: added `cor-archimedean-reciprocal` for the tail of circles lying in a prescribed ball about the origin and `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric` to isolate a nonorigin point from the finitely many remaining circles.
- `fs-every-compact-path-connected-planar-set-has-a-universal-cover`: added `def-subspace-topology-top` to pass from a neighbourhood in the earring to an ambient Euclidean ball trace, and `cor-archimedean-reciprocal` to place a full small circle inside that trace.

All added published targets were opened. Each is `status: published` with Statement provenance `ai-altered`, not legacy-unclassified or `ai-generated`. Their exact on-disk claims were read: the Euclidean norm theorem states that $\lVert\cdot\rVert_2$ is a norm, the reverse-triangle lemma states the needed norm estimate, the reciprocal Archimedean corollary supplies $1/N<\varepsilon$, the subspace definition identifies relative opens as ambient traces, componentwise continuity licenses Euclidean-valued maps through their coordinates, and the algebra-of-continuous-maps lemma supplies sums, quotients on cozero sets, minima, and maxima. No published dependency appeared false, so no published-dependency repair was made.

### Contract, boundary, and risk record

`research/frontier-17-batch-7.proof-contracts.json` now matches the final facts and canonical step numbering: 22 scoped proof-bearing items, 111 direct citation entries, one derivation entry for every numbered step, and all 176 boundary rows. `proof-contract --strict` reports 0 errors and 0 warnings. `boundary-audit` reports no contradicted dispositions or repeated templates after changing the large-radius empty-family and loop-sweep zero-denominator rows from `not_applicable` to explicit checked cases. `citation-fidelity` found every quote in its source and reported no widening candidate after the punctured-space fact was rewritten in the exact conditional form of its source.

No registered finite-smoke implementation models these topology and analysis claims: `finite-smoke` ran 0 checks over 0 selected obligations, which is recorded as no evidence rather than a pass on the mathematics. The Step-5 risk report routes the following high or critical items for Alpha's required extra read: `thm-no-retraction-of-the-closed-disk-onto-the-circle`, `lem-fixed-point-free-disk-map-produces-a-retraction`, `lem-root-free-polynomial-circle-loops-are-nullhomotopic`, `lem-large-radius-polynomial-circle-loop-has-degree`, `thm-fundamental-theorem-of-algebra-via-the-fundamental-group`, `lem-antipodal-circle-map-has-odd-lift-increment`, `thm-borsuk-ulam-in-dimension-two`, `cor-three-closed-sets-covering-s2-contain-an-antipodal-pair`, `lem-loop-products-in-a-topological-group-agree-up-to-homotopy`, `thm-plane-not-homeomorphic-to-other-euclidean-spaces`, `prop-hawaiian-earring-is-compact-and-path-connected`, `ex-radial-normalization-retracts-the-punctured-disk-but-not-the-disk`, `ex-orthogonal-projection-has-one-borsuk-ulam-pair`, `cex-four-closed-sets-can-cover-s2-without-antipodal-pairs`, and `fs-every-compact-path-connected-planar-set-has-a-universal-cover`. No `risk_review` was written because that is Alpha's Step-6 field.

### Gate record, escalations, and confidence

- `reflow`: all 23 item files unchanged after the final run.
- `precheck`: all 22 proof-bearing items pass; the mathematical remark is correctly `n/a`.
- `validate-plan research/plan-spec.json`: pass on the spliced plan.
- `content-policy research/frontier-17-batch-7.pages.json`: 23 scoped items, 0 errors, 0 warnings.
- `coverage-checklist`: 1 page, 40 harvested results, 0 errors, 0 warnings.
- `proof-contract --strict`: 0 errors, 0 warnings over 22 contracts.
- `boundary-audit`: no contradicted dispositions and no template reuse at the reporting threshold.
- `rendercheck` on the 23 items and two page files: pass, including real YAML and KaTeX parsing.
- `citecheck` on the 23 items: pass with no missing elementary-move home.
- `fwdcheck`: global pass; this batch declares no forward references.
- `extcheck`: global pass; this batch uses no `proved_here: false` fallback or external mention.
- `prosecheck --warnings`: 0 errors and two heuristic warnings on the mathematical phrase “one of them” in the three-set corollary and four-set counterexample; neither is a page-item count or a claim about the library.
- `depcheck`: run, but the whole-tree gate is currently red from unrelated concurrently authored batches and one pre-existing published citation-check stamp. A full-output filter found no error naming any batch-7 item. This author did not edit another batch's files or the published item to clear a global concurrent-work failure.

There is no mathematical escalation or missing prerequisite in this batch. Confidence is high in the statements, boundary handling, dependency fidelity, and the explicit constructions. I did not run either judge, obtain an independent reader or Alpha risk review, re-download the already stamped source PDFs, verify claims deferred by the coverage ledger, inspect the deep structure of the Hawaiian-earring fundamental group, or publish any file. The whole-tree `depcheck` remains the only required gate not currently green, for the unrelated live-work reasons just recorded.
