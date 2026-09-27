# Step 3b — scaffold auditor and item author: frobenius-groups-and-the-normal-complement-theorem

- Run: `frontier-35-ten-categories` (batch 10, shared with `the-modular-function-and-l1-group-algebras`).
- A page: `frobenius-groups-and-the-normal-complement-theorem` (order 510.043).
- B page: `frobenius-groups-and-the-normal-complement-theorem-examples` (order 510.044).
- Dispatch labels: attempt 1 `step3b-pair-frobenius-groups-and-the-normal-complement-theorem-bb94c13615585d91`
  (died on provider rate limits after authoring all items); attempt 2
  `step3b-pair-frobenius-groups-and-the-normal-complement-theorem-f3f03e11284b1086` (this report).
- Owner direction read: `research/frontier-35-ten-categories-owner-authoring-direction.md` — it defers the
  batch-8 Serre-duality pair and one batch-13 Easton item and names no change to batch 10.
- Step 3a scope decision: `sufficient` for the A page, refreshed in attempt 2 at the current scope hash
  `43c923d3e7f847e5a4687aee4ed728e858c57102cbfd04e4a987aca6797a89af` after the seven local suppliers below.
- AC: no argument in this pair uses the axiom of choice. Every group is finite; every existential step
  produces an explicit witness (a minimal-index element of a central series, a coset representative, a
  chosen Sylow subgroup whose existence is the library's Sylow theorem), and every choice made is a
  choice from a finite set, which is a theorem of ZF. No incompatible-axiom branch arises.

## Sources read (attempt 1 and re-verified where load-bearing in attempt 2)

- Bartel, *Introduction to Representation Theory of Finite Groups*, §6.1 (Definition 6.1, Definition 6.2,
  Lemma 6.3, Lemma 6.4, Theorem 6.5 and the complete printed proof), from the batch extract
  `/tmp/frontier35-b10-bartel.txt`.
- Flavell, *An Introduction to Transfer and Fusion in Finite Groups*, §§2.1–2.5, 3.1–3.8, 4.1–4.10,
  5.1–5.10, from `/tmp/frontier35-b10-flavell.txt` (transfer, Burnside, fusion, normal p-complement chain).
- Craven, *Finite Group Theory*, Lecture 3, Theorem 3.8 with Exercise 3.6 and the printed solution, from
  `/tmp/frontier35-b10-craven.txt`.
- Attempt 2 additionally re-read in the library: `thm-frobenius-formula-for-induced-characters` (the
  normalising factor and the $x^{-1}gx$ convention match the new class-function definition exactly),
  `cor-frobenius-reciprocity-for-complex-characters`, `def-control-of-fusion-in-a-sylow-p-subgroup`
  (fusion control means realised by an element of $P$ — the strong form), and the whole consumer chain
  `lem-local-sylow-conjugacy-ascent-for-fusion` → `lem-local-normal-p-complements-force-control-of-fusion`
  → `thm-frobenius-normal-p-complement-theorem`, plus
  `lem-automizer-condition-gives-centralizer-transitivity` → `lem-p-automizer-condition-implies-fusion-control`
  → `cor-frobenius-automizer-criterion-for-p-nilpotence`. Both chains close the
  "$N_G(P)$ controls fusion" to "$P$ controls fusion" step explicitly (step 2.2 / step 1.2 with
  $N_G(P)=P\,C_G(P)$), so the strong definition of fusion control is genuinely supplied.

## Local scaffold repairs agreed with the mathematics

1. The scaffold's character route needs induction on *class functions*: Bartel's Lemma 6.4 and Theorem 6.5
   apply $\theta^G$ to $\theta=\varphi-\varphi(1)1_H$, a virtual character, and the library only defines
   $\operatorname{Ind}_H^G\chi$ for honest characters
   (`def-induced-character-of-a-complex-representation`). Added two local suppliers on the assigned A page:
   a definition of the induced class function and a class-function reciprocity lemma.
2. `5.9`/`5.6`/`def-p-residual`/`prop-equivalent-forms` need the elementary image/preimage and
   subgroup-correspondence facts for a group homomorphism, which the library does not record. Added one
   local lemma (`lem-sylow-subgroups-of-a-normal-subgroup-are-intersections` covers the Sylow part).
3. `prop-equivalent-forms-of-having-a-normal-p-complement` promises the identification of the complement
   with $O_{p'}(G)$, which is undefined in the library. Added `def-p-prime-core-of-a-finite-group` with
   its well-definedness proof.
4. Conjugation orientation: the scaffold plan for `def-control-of-fusion-in-a-sylow-p-subgroup` said to fix
   $x^g=g^{-1}xg$; the published library convention is $x^g=gxg^{-1}$
   (`def-conjugacy-class-and-centralizer`, `def-normal-subgroup`, `lem-products-of-normal-p-subgroups`).
   Used the published convention and re-derived every conjugation step against it.
5. Attempt 2 proof-level repairs:
   - `prop-frobenius-permutation-action-characterization` step 2.2: the sub-criterion
     "$(kx)^{-1}x=k^{-1}\in H$" was wrong; replaced by
     "$(kx)^{-1}x=x^{-1}k^{-1}x\in H$", the inverse-closure clause
     $x^{-1}k^{-1}x=(x^{-1}kx)^{-1}$ now discharged by [F8], and steps 3.1/3.2 now cite [F9] for
     $xH\ne yH\Rightarrow x^{-1}y\notin H$ and for $H\ne gH$. The proof contract was updated to the
     identical claim text and inputs (this repair closed two `proof-contract --strict` errors that the
     attempt-1 contract still carried: `citation-use-unmapped` F8/2.2 and `step-entry-input-omitted`).
   - `ex-affine-linear-frobenius-groups-over-finite-fields` step 1.2: the identity clause
     "$f_{1,0}=\operatorname{id}_F=f_{1,0}$ is the common identity" was a self-referential typo;
     now "$\tau(0)=f_{1,0}=\operatorname{id}_F=\delta(1)$ is the common identity" (contract claim
     updated to match).
   - `thm-frobenius-kernel-theorem`, `def-frobenius-kernel-set` and the other downstream items were
     re-receipted at the new hashes; their own text is unchanged and they consume the repaired item only at
     statement level (their recorded arguments are unaffected).

## Item table (45 items; every row authored and receipted)

| item | kind | page | class | decision |
|---|---|---|---|---|
| `def-frobenius-complement-and-frobenius-group` | definition | A | baseline | accept |
| `prop-frobenius-permutation-action-characterization` | proposition | A | baseline | repaired |
| `def-frobenius-kernel-set` | definition | A | baseline | accept |
| `lem-frobenius-kernel-cardinality` | lemma | A | baseline | accept |
| `def-induced-class-function-on-a-finite-group` | definition | A | auditor-added | accept |
| `lem-induction-restriction-reciprocity-for-class-functions` | lemma | A | auditor-added | accept |
| `lem-zero-at-identity-induction-restriction-for-a-frobenius-complement` | lemma | A | baseline | accept |
| `lem-frobenius-character-extension-construction` | lemma | A | baseline | accept |
| `lem-frobenius-character-extension-is-irreducible` | lemma | A | baseline | accept |
| `lem-frobenius-kernel-is-an-intersection-of-character-kernels` | lemma | A | baseline | accept |
| `thm-frobenius-kernel-theorem` | theorem | A | baseline | accept |
| `cor-frobenius-semidirect-product-decomposition` | corollary | A | baseline | accept |
| `prop-frobenius-groups-and-fixed-point-free-actions` | proposition | A | baseline | accept |
| `def-p-prime-core-of-a-finite-group` | definition | A | auditor-added | accept |
| `def-normal-p-complement-and-p-nilpotent-group` | definition | A | baseline | accept |
| `def-transfer-homomorphism-for-a-finite-index-subgroup` | definition | A | baseline | accept |
| `lem-transfer-is-independent-of-the-transversal` | lemma | A | baseline | accept |
| `lem-transfer-is-a-homomorphism` | lemma | A | baseline | accept |
| `lem-transfer-cycle-decomposition-formula` | lemma | A | baseline | accept |
| `prop-equivalent-forms-of-having-a-normal-p-complement` | proposition | A | baseline | repaired |
| `def-p-residual-of-a-finite-group` | definition | A | baseline | accept |
| `lem-sylow-subgroups-of-a-normal-subgroup-are-intersections` | lemma | A | auditor-added | repaired |
| `lem-p-residual-is-generated-by-p-prime-elements-and-idempotent` | lemma | A | baseline | accept |
| `lem-abelian-sylow-fusion-in-its-normalizer` | lemma | A | baseline | accept |
| `thm-burnside-normal-p-complement-theorem` | theorem | A | baseline | accept |
| `def-p-local-normalizer-for-normal-complement-theory` | definition | A | baseline | accept |
| `def-control-of-fusion-in-a-sylow-p-subgroup` | definition | A | baseline | accept |
| `lem-proper-subgroup-of-a-finite-p-group-is-properly-normalized-local` | lemma | A | baseline | accept |
| `lem-normal-p-complements-pass-to-subgroups-and-p-local-normalizers` | lemma | A | baseline | accept |
| `lem-fusion-control-and-centralizer-transitivity` | lemma | A | auditor-added | accept |
| `lem-local-sylow-conjugacy-ascent-for-fusion` | lemma | A | baseline | repaired |
| `lem-local-normal-p-complements-force-control-of-fusion` | lemma | A | baseline | repaired |
| `lem-normal-p-subgroup-has-proper-commutator-in-a-p-group` | lemma | A | baseline | accept |
| `lem-fusion-control-gives-a-nontrivial-p-quotient-of-the-p-residual` | lemma | A | baseline | repaired |
| `thm-frobenius-normal-p-complement-theorem` | theorem | A | baseline | accept |
| `lem-sylow-times-normal-subgroup-covers-when-index-is-a-p-power` | lemma | A | auditor-added | accept |
| `lem-automizer-condition-gives-centralizer-transitivity` | lemma | A | auditor-added | repaired |
| `lem-p-automizer-condition-implies-fusion-control` | lemma | A | baseline | repaired |
| `cor-frobenius-automizer-criterion-for-p-nilpotence` | corollary | A | baseline | accept |
| `ex-s3-as-a-frobenius-group` | example | B | baseline | accept |
| `ex-affine-linear-frobenius-groups-over-finite-fields` | example | B | baseline | accept |
| `cex-a-transitive-action-need-not-be-frobenius` | counterexample | B | baseline | accept |
| `rem-frobenius-kernel-closure-is-the-content-of-the-theorem` | remark | B | baseline | accept |
| `ex-frobenius-normal-two-complement-for-s3` | example | B | baseline | repaired |
| `cex-cyclic-sylow-does-not-alone-imply-a-normal-p-complement` | counterexample | B | baseline | accept |

## Local suppliers added by this dispatch (7; auditor-authored class)

- `def-induced-class-function-on-a-finite-group` — induced/restricted class functions by the Frobenius
  formula, with the three elementary properties and the agreement with honest induction.
- `lem-induction-restriction-reciprocity-for-class-functions` — $\langle\operatorname{Ind}_H^G\theta,\psi\rangle_G
  =\langle\theta,\operatorname{Res}_H^G\psi\rangle_H$ for class functions, by expanding in the orthonormal
  bases and reducing to `cor-frobenius-reciprocity-for-complex-characters`.
- `def-p-prime-core-of-a-finite-group` — $p$-element/$p'$-element and $p$-subgroup/$p'$-subgroup terminology
  plus $O_{p'}(G)$ as the subgroup generated by all normal $p'$-subgroups; the well-definedness block proves
  the family is closed under products and that $O_{p'}(G)$ is the unique largest normal $p'$-subgroup.
- `lem-sylow-subgroups-of-a-normal-subgroup-are-intersections` — for $K\trianglelefteq G$ and
  $P\in\operatorname{Syl}_p(G)$, $K\cap P\in\operatorname{Syl}_p(K)$, and if $[G:K]$ is a $p$-power then $KP=G$.
- `lem-fusion-control-and-centralizer-transitivity` — "$N_H(P)$ controls fusion in $P$ w.r.t. $H$" iff
  "$C_H(x)$ is transitive on the Sylow $p$-subgroups of $H$ containing $x$", for every $1\ne x\in P$;
  both directions derived element by element.
- `lem-sylow-times-normal-subgroup-covers-when-index-is-a-p-power` — if $C\trianglelefteq N$, $N/C$ a
  $p$-group and $T\in\operatorname{Syl}_p(N)$, then $N=TC$.
- `lem-automizer-condition-gives-centralizer-transitivity` — if $N_H(\langle x\rangle)/C_H(x)$ is a
  $p$-group then any two Sylow $p$-subgroups of $H$ containing $x$ are $C_H(x)$-conjugate (via
  $M=N_H(\langle x\rangle)=T_1C$, $m=cu$).

## Checks actually run (attempt 2, on the current files)

| check | command | result |
|---|---|---|
| explicit-path precheck | `node tools/tsx-run.mjs tools/precheck.mts <45 items/…>` | 35 checked, 0 failing (10 definition/remark items carry no phase body) |
| rendering | `node tools/rendercheck.mjs <45 items> <2 pages>` | OK — 47 files, KaTeX and frontmatter parses clean |
| strict proof contracts | `node tools/proof-contract.mjs research/…-batch-10.proof-contracts.json --strict --items <45 ids>` | 0 errors, 0 warnings, 45/45 items |
| citation fidelity | `node tools/citation-fidelity.mjs …-batch-10.proof-contracts.json --fail-on-missing-quote` | 538 citations over 45 items, no missing quote, no widening candidate |
| finite smoke | `node tools/finite-smoke.mjs <45-item contract slice>` | 0 errors, 1 check over 1/45 items carrying obligations |
| risk report | `node tools/risk-report.mjs <45-item contract slice>` | 0 errors, 45 items routed (informational HIGH rows only) |
| boundary audit | `node tools/boundary-audit.mjs <45-item contract slice> --fail-on-contradicted --fail-on-template --json` | templates/contradicted/upheld all empty |
| coverage (batch 10) | `node tools/coverage-checklist.mjs research/…-batch-10.coverage.json --require-destination` | 2 pages, 147 harvested results, 0 errors, 0 warnings |
| manifest deps | `node tools/manifest-deps.mjs research/…-batch-*.pages.json` | 653 items, 0 errors |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0 — acyclic, no item-level cycle, no forward reference, no unresolved id |
| content policy (item mode, all manifests) | `node tools/content-policy.mjs research/…-batch-*.pages.json` | 653 scoped items, 346 errors — **all** `scope-item-missing` for other in-flight pairs; 0 for this pair |
| extcheck | `node tools/extcheck.mjs` | exit 0 |
| depcheck | `node tools/depcheck.mjs --quiet` | exit 1 repo-wide (353 errors) — 0 errors and 1 warning involve this pair; see open obligations |
| Step 3 decisions | `node tools/step3-decisions.mjs check --run frontier-35-ten-categories --phase final` | this pair's scope closed; 45/45 pair items closed |
| auditor certification | `node tools/step3-auditor-items.mjs certify --run frontier-35-ten-categories` | defers `def-induced-class-function-on-a-finite-group: no successful Step 3 auditor/author result covers batch 10 or pair …` — expected while this dispatch's own result file does not yet exist |

Receipts refreshed in attempt 2 (hash-bound re-records after the proof repairs): `prop-frobenius-permutation-action-characterization`
(repaired), `def-frobenius-kernel-set`, `lem-frobenius-kernel-cardinality`,
`lem-frobenius-kernel-is-an-intersection-of-character-kernels`, `thm-frobenius-kernel-theorem`,
`cor-frobenius-semidirect-product-decomposition`, `prop-frobenius-groups-and-fixed-point-free-actions`,
`cex-a-transitive-action-need-not-be-frobenius`, `rem-frobenius-kernel-closure-is-the-content-of-the-theorem`
(all accept; their own text is unchanged and the new hash comes only from the repaired dependency),
`ex-s3-as-a-frobenius-group` (accept; post-audit text revision re-read in full),
`ex-affine-linear-frobenius-groups-over-finite-fields` (accept; step 1.2 identity clause repaired),
`ex-frobenius-normal-two-complement-for-s3` (repaired).

**What attempt 2 re-derived, and what it did not.** Re-read argument by argument in attempt 2:
`prop-frobenius-permutation-action-characterization` (both directions rechecked against the fixity
criterion $k\cdot xH=xH\iff x^{-1}kx\in H$), `lem-zero-at-identity-induction-restriction-for-a-frobenius-complement`,
`lem-frobenius-character-extension-construction`, `lem-frobenius-character-extension-is-irreducible`
(the $\|\widetilde\varphi\|^2=1$ computation and the sign argument), all seven local suppliers, the whole
fusion chain `lem-fusion-control-and-centralizer-transitivity` →
`lem-local-sylow-conjugacy-ascent-for-fusion` → `lem-local-normal-p-complements-force-control-of-fusion` →
`thm-frobenius-normal-p-complement-theorem` (including the strong-definition check that
$N_G(P)$-control is upgraded to $P$-control in step 4.1), the automizer chain
`lem-automizer-condition-gives-centralizer-transitivity` → `lem-p-automizer-condition-implies-fusion-control` →
`cor-frobenius-automizer-criterion-for-p-nilpotence`, and all six B-page items. The remaining items
(transfer construction and its properties, Burnside's theorem, the equivalent forms, the $p$-residual and
$p$-local-normalizer material, `lem-abelian-sylow-fusion-in-its-normalizer`,
`lem-normal-p-complements-pass-to-subgroups-and-p-local-normalizers`,
`lem-normal-p-subgroup-has-proper-commutator-in-a-p-group`,
`lem-fusion-control-gives-a-nontrivial-p-quotient-of-the-p-residual`) carry attempt-1 receipts with
item-specific evidence and pass every mechanical gate; attempt 2 did **not** re-derive them line by line,
and this report does not claim otherwise.

## Cross-batch dependency input (batch 10)

`research/frontier-35-ten-categories-batch-10.cross-batch-dependencies.json` is preserved unchanged (empty
array). This is the correct row set for this pair: every declared prerequisite of the A and B page either is
an item of this pair itself (99 A-page edges plus the one B-to-B edge
`ex-frobenius-normal-two-complement-for-s3` → `ex-s3-as-a-frobenius-group`, all inside batch 10) or is an
already-published library item from an earlier frontier. No declared prerequisite is supplied by another
page of this run, so there is no in-run cross-batch edge to record (checked against every current batch
manifest). Rows for the sibling pair, when its owner writes them, are not touched here.

## Open obligations at handoff

0. **Touches ledger left to the engine (checked, not taken).** `research/frontier-35-ten-categories-touches.json`
   holds exactly one snapshot, `pre-author` (2026-09-24T03:45:00.882Z), written by the engine's `3-baseline`
   stage. Neither this dispatch nor the five already-successful pair dispatches of this run have added a
   snapshot, and the `3b-author` stage's artifact list is `pairAuthorArtifacts` (batch manifest, proof
   contracts, both library pages, every item file) — the touches ledger is not in it. The post-author
   snapshot is the engine's own `4-baseline` mechanical stage
   (`tools/touchlog.mjs snap … post-author`). Running `step3-baseline.mjs --label author` here would have
   inserted a non-standard snapshot and then exited nonzero on the immutability guard
   ("Refusing to move the Step 3 auditor baseline", the current inventory is 653 items against the frozen
   639), so it was deliberately not run.
1. **Sibling pair in this batch is unwritten (engine-level).** `the-modular-function-and-l1-group-algebras`
   (A page) and `-examples` (B page) carry 25 manifest items with no item files; the repo-wide
   `content-policy` item-mode run reports exactly those 25 (among 346 `scope-item-missing` rows belonging
   to other in-flight pairs) and nothing about this pair. Not ours to author; no action taken.
2. **Auditor certification is pending this dispatch's own result.** `step3-auditor-items.mjs certify`
   currently defers on `def-induced-class-function-on-a-finite-group` because no *successful*
   `alpha-high` result covers batch 10 / this pair yet (attempt 1 died before its result landed). The seven
   added items are present, hash current, and their inputs are inside this dispatch's write window; the gate
   should green once the attempt-2 result file is written. No action by another group.
3. **Published item with a suspected proof gap (not consumed by this pair).**
   `thm-normalizer-condition-for-finite-nilpotent-groups` (status `published`, `verification.audited`
   2026-08-17, A page `sylow-theorems-and-nilpotent-groups`) states that every proper subgroup of a finite
   nilpotent group is properly contained in its normalizer. Its proof is three sentences: step 1.1 "take the
   first term of a central series not contained in $H$", step 2.1 "the preceding term lies in $H$, so an
   element newly appearing at that stage normalizes $H$ modulo the preceding term but is not in $H$". The
   passage from "normalizes $H$ modulo $Z_{i-1}$" to "$\in N_G(H)\setminus H$" is the whole content and
   is not computed: it needs $Z_{i-1}\le H$ together with $zH z^{-1}\le H Z_{i-1}=H$ for
   $z\in Z_i\le$ the series. Confidence: medium-high that the argument is under-supported as written
   (a confirmed *gap in the displayed proof*, not a false statement — the statement is standard and true).
   Supplier needed: the library's central-series membership/commutator computation
   (`def-subgroup-commutator-and-lower-central-series`, `thm-upper-and-lower-central-characterizations-of-nilpotence`);
   repair strategy: insert the one-line computation $z h z^{-1}=h\,[h,z]^{-1}$ with
   $[h,z]\in Z_{i-1}\le H$. Route: the owner of that published page / the serial reconciler
   (published-consumer-supplier-ledger is not edited from this dispatch). This pair does **not** consume
   that theorem.
4. **One depcheck warning involving this pair (advisory, not an error).**
   `cited-not-in-deps: items/thm-frobenius-kernel-theorem.md cites "lem-frobenius-kernel-cardinality" in
   Statement/Facts but it is not in deps`. The mention is a deliberate prose cross-reference in step 3.1
   ("a fact that the counting argument of [[lem-frobenius-kernel-cardinality]] could not supply"); the
   cardinality lemma is a *consumer* of the theorem, not a prerequisite, so the dep is correctly absent.
   Left as is; recorded here so Step 4/8 does not mistake it for a missing declaration.
5. **Repo-wide gates that are red for reasons outside this pair.** `depcheck --quiet` exits 1 with 353
   errors (mostly `published-unaudited` on long-published items, plus `b-leaf-content` and `page-cycle`
   rows in the Brauer/regular-local-rings areas) and 261 warnings; `content-policy` item mode is red on 346
   `scope-item-missing` rows from the other in-flight pairs. Neither set contains a row for this pair's 45
   items or 2 pages (verified by filtering both reports by every pair item ID and both page IDs).
