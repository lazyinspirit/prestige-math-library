# Batch 50 scaffold notes — Ordinary Hecke Specht Polytabloids and Signed Murphy Comparison

Run: `frontier-44-special-representation-examples-28`. Role: beta, batch 50 (`covers: 50`).
Pair: `ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison` (A, order 1568.1) /
`...-examples` (B, order 1568.2), category `special-topics-in-representation-theory`.
Owned outputs: this batch's manifest, coverage, step-1 readiness records, ledger input and these notes.
No engine transition, gate stamp, publication or push was attempted; owner/operator reconciliation is separate.

## 1. Scope, design and plan conflicts

- Binding owner direction read first: `research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`
  ("Owner necessary Specht comparison prerequisite — 2026-10-10"). Design read in full:
  `research/plan-symr7p-specht-murphy-prerequisite.md` plus the build targets in
  `research/frontier-44-special-representation-examples-28-owner-cell-head-classification-repair/missing-prerequisite-design/proposed-pair.pages.json`.
- Current plan control: `research/plan-spec.json` carries the same pair at orders 1568.1/1568.2 with the nine
  planned items. **Conflict recorded:** the live manifest scaffolds **13 items (10 A + 3 B)**. The four additional A items are
  necessary local intermediate suppliers authorized by the owner direction ("Add necessary local intermediate suppliers within
  this pair") and by the step-1 instruction to add every necessary local definition/lemma before its consumers:
  `lem-dj-bridge-row-permutation-module-standard-action`,
  `lem-dj-bridge-permutation-form-invariance-and-restriction`,
  `lem-dj-bridge-murphy-cellular-basis-and-cell-form`,
  `lem-dj-bridge-theta-transport-of-the-cellular-structure`.
  **Inventory decomposition, not a claim weakening:** the planned item
  `lem-dj-bridge-integral-murphy-and-polytabloid-straightening` ("prove both integral bases independently, all dominance ideals
  and fixed-first-index cell laws, split polytabloid inclusion and base change; construct the actual cell form") is split
  across `lem-dj-bridge-murphy-cellular-basis-and-cell-form` (Murphy basis, ideals, cell law, Murphy form — now a ready
  item) and the original ID (polytabloid basis, Garnir straightening, split inclusion, DJ form interface — escalated).
  All other plan conflicts are dependency-adequacy completions: the live manifest deps for the designed items are supersets
  of the plan's deps (adding the def item, the row-module item, the Murphy item and the theta item where the statements
  actually use them). No pair identity, order, category or `requires` change.
- The A page's `requires` list (5 pages) is unchanged and all five pages are published outside this run; no in-run page
  prereq was added or removed. Page/item counts are far below the 100-item cap.

## 2. Mathematical repairs made while scaffolding

Conventions fixed (all items): right modules; $(T_i-q)(T_i+1)=0$; standard basis $T_w$; $x_\lambda=\sum_{w\in S_\lambda}T_w$,
$y_\lambda=\sum(-q)^{-\ell(w)}T_w$, $z_\lambda=x_\lambda T_{w_\lambda}y_{\lambda'}$; $D_\lambda$ the minimal-length right coset
representatives; the permutation form $\beta(x_\lambda T_d,x_\lambda T_e)=\delta_{de}q^{\ell(d)}$. These match Fayers,
§2.1 verbatim (same normalization), Ryom-Hansen §2, the Mathas manuscript §3 and the Heard–Kujawa generator
(up to HK's symmetric normalization, now stated explicitly in the def item).

1. **`lem-dj-bridge-theta-transport-of-the-cellular-structure` was defective as drafted and was repaired.**
   The draft asserted "the sets $\theta(I^{\rhd\lambda})$ and $\theta(I^{\unrhd\lambda})$ are the same two-sided ideals as
   before" and used an ill-typed formula $T_{\theta(d(s))}$ with $\theta(d(s))$ undefined (and claimed $\theta$ preserves
   the ideals "as sets"). That is **false**: for $n=2$, $\lambda=(2)$ one has $\theta(x_{(2)})=q-T_1\notin R(1+T_1)=I^{\unrhd(2)}$.
   The check in the current conventions: the Murphy basis elements of shapes $\unrhd(2)$ have span $R(1+T_1)$ (with
   $m_{t,t}=x_{(2)}=1+T_1$), and $q-T_1$ is not an $R$-multiple of $1+T_1$ over $\mathbb Z[q^{\pm1}]$. The image ideals
   $\theta(I^{\rhd\lambda})$, $\theta(I^{\unrhd\lambda})$ are nevertheless two-sided ideals (images of two-sided ideals under
   an algebra automorphism) and are exactly the spans of the transported basis elements over the same shape sets, so the
   transported family is again a cell datum with the same poset but its own ideal filtration. The manifest now states the
   correct facts (transport formula $\theta(m_{st})=\theta(T_{d(s)}^*)\theta(m_\lambda)\theta(T_{d(t)})$; image-ideal
   filtration; transported cell-datum axioms; transported form), with the $n=2$ warning clause, and the strategy carries a
   complete elementary proof. This matches the statement family of Mathas, Notes on Chapter 3, Notes 3–4 (printed pp. 34–35),
   which records $m_\lambda^\#=q^an_\lambda$ and refers the conjugate comparison to Murphy [56, Theorem 5.2]; our argument is
   self-contained and does **not** use that cited theorem.
2. **`lem-dj-bridge-sign-automorphism-and-star-dual`.** Corrected the Hoefsmit citation from the stale "Corollary 3.20" to
   the manuscript's actual **Corollary 3.22 (Hoefsmit), printed p. 26**, and corrected the arithmetic display for the scalar:
   $c=[m]_q!/[m]_{q^{-1}}!=q^{\binom m2}$ (the draft multiplied by an extra $q^{\binom m2}$). The identity
   $\theta(x_\lambda)=q^{\ell(w_0(S_\lambda))}y_\lambda$ and the generator computation $\theta(T_i)=(q-1)-T_i=-qT_i^{-1}$
   were re-verified by hand.
3. **`lem-dj-bridge-murphy-cellular-basis-and-cell-form`.** Corrected the mis-numbered citations: "Theorem 3.8 (Murphy's
   basis theorem)" is really **Theorem 3.18 (Murphy Basis Theorem)**, and "Corollary 3.9 (the cell law)" is really
   **Theorem 3.18(ii)** with **Corollary 3.17** for the two-sided ideals; "Corollary 3.7/3.9" corrected to Corollary 3.17.
   The Ryom-Hansen form formula was replaced by the source's actual statement ($\langle x_s,x_t\rangle_\lambda$ is the
   coefficient of $x_\lambda$ in $x_\lambda T_{d(s)}T_{d(t)^{-1}}x_\lambda$). Verified against the extracted manuscript
   text (objects 27–44; printed pp. 18–35).
4. **`def-dj-bridge-row-column-permutation-modules-and-polytabloids`.** Heard–Kujawa's normalization
   $(T_i-q)(T_i+q^{-1})=0$ and their $x_\lambda=\sum q^{\ell(w)}T_w$ are now stated explicitly, so HK is quoted for the
   combinatorial shape of the construction (the generator $z_\lambda=x_\lambda T_{\sigma_\lambda}y_{\lambda^{\mathsf T}}$)
   and the standard-basis indexing, not for the exact coefficients. Fayers §2.1 confirmed to contain the quoted formulas
   verbatim in the same normalization.
5. **Escalated theorems.** The Mathas Warning locator was corrected ("following the definition of the Specht module after
   Corollary 3.19, printed p. 25"); the garbled KMR quotations were repaired (Theorem 7.25: graded contragredient duality
   $S_\lambda(O)\cong S^\lambda(O)^{\sim}\langle\mathrm{def}_\Lambda\rangle$; Theorem 8.5 with Lemma 8.4: the universal
   Specht module of shape $\mu$ is the sgn-twist of the conjugate shape, the graded analogue of James
   $(S^\mu)^*\cong S^{\mu'}\otimes\mathrm{sgn}$). No statement was weakened; the unit $u_\lambda(q)$ remains an explicit
   authoring obligation.
6. Dependency adequacy: the def item, row-module item, Murphy item and theta item were added to the deps of the items whose
   statements use them; `lem-dj-bridge-sign-automorphism-and-star-dual` was added to the corollary's deps (its strategy uses
   exactness/simplicity preservation). Dependency levels were recomputed after every edit: A items 0,1,2,2,2,3,3,4,5,6 and B
   items 7,7,7; `node tools/item-dependency-levels.mjs check --run ...` passes over the whole run (853 items, 100 pages).

## 3. Dependency and cross-batch accounting

- 34 intra-batch item edges; 8 external item edges, all to **published** out-of-run suppliers:
  `def-generic-type-a-hecke-algebra`, `thm-standard-basis-of-the-generic-type-a-hecke-algebra`,
  `def-young-tableau-standard-tableau-and-shape`, `def-partition-young-diagram-and-conjugate-partition`,
  `lem-hom-from-a-finite-free-module`, `def-integral-specht-lattice-and-base-change`,
  `lem-conjugate-specht-sign-duality-over-fields`,
  `prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra`. Their statements were read and match
  their uses (interface check only; their proofs are not re-audited here). `def-integral-tabloid-bilinear-form-and-specht-gram-matrix`
  and James SLN 682 are background references only, not proof prerequisites; no dependency on any source-20 item, source-21
  translation or source-25 item exists (the owner's prohibition is respected).
- **No in-run cross-batch edge exists for batch 50** (`frontier-dependency-ledger` refresh reports 0 edges touching batch 50;
  the five `requires` pages are published outside the run). The owned ledger input
  `research/frontier-44-special-representation-examples-28-batch-50.cross-batch-dependencies.json` is therefore the valid empty
  array. After writing it, the unified refresh lists batch 50 in `reviewed_batches` with no unreviewed batch; the disjoint
  set of 87 in-run edges that still lack reviews belongs to other batches' consumer inputs and is pre-existing.
- The pair is a supplier of the source-20 consumer rebinding; that consumer check is owned by the source-20 reviewer and was
  not performed or claimed here.

## 4. Sources, harvest and dispositions

Read and fetch-verified (12/14 source stamps written; full text read in the extracted text layer):

| Source | Kind | Locator read | Notable dispositions |
|---|---|---|---|
| Mathas, Iwahori-Hecke algebras and Schur algebras, author manuscript, 79 pp. | monograph | Ch. 2 (Prop. 2.7) and Ch. 3, printed pp. 11–35 | included: row-module facts (3.2/3.3/3.4), Murphy theory (3.12/3.14/3.15/3.17/3.18/3.20), Warning (p. 25), Notes 3–4 (pp. 34–35); inline: Cor. 3.22 (Hoefsmit); out-of-scope: classification/semisimplicity 2.11/2.13/3.39/3.40 |
| Fayers, An algorithm for semistandardising homomorphisms (author version) | paper | §§2.1, 2.4 | included: notation index (x, y, w, M, S); inline: tableau homomorphisms; out-of-scope: semistandardising algorithm §§3–5 |
| Ryom-Hansen, On the denominators of Young's seminormal basis, arXiv:0904.4243v5 | paper | §2 | included: (5) standard basis/dominance ideal; inline: (6) action rules and the cell form; out-of-scope: §§3–6 |
| Heard–Kujawa, Positivity and web bases, arXiv:2207.00654v2 | paper | §§2.2–2.5 | included: z_λ generator; (2.5.1) basis quoted from DJ86 Thm 5.6; inline: Lemma 2.3.1; out-of-scope: webs §§3–6 |
| Kleshchev–Mathas–Ram, Universal graded Specht modules (Sydney preprint) | paper | (3.14), §§7.6–7.10, 8 | inline: sign automorphism (3.14); out-of-scope: the universal/graded presentation statements used only as the escalated analogue |
| Kleshchev, Representation theory of symmetric groups (survey), arXiv:0909.4844v1 | survey | §5.3 Remark 5.5 | inline: conjugate-sign simple dictionary; already-published row for the q = 1 duality |
| James, SLN 682 scan | textbook | not read | already-published for the q = 1 facts; recorded honestly as fetched but unread |

**Closed historical sources (owner escalation, not dropped).** Full records with URL, reused/fresh attempts and exact
uncertainty are in the coverage `source_resolution` entries:

- Murphy 1995, DOI 10.1006/jabr.1995.1079 (Theorem 5.2): Elsevier/ScienceDirect return 401/403/406 or text-mining metadata;
  OpenAlex and Semantic Scholar report no repository full text. The initial attempt plus five retries were consumed
  historically in `round2-historical-proof-access-attempts.json`, reused here and **not restarted**; no further body fetch was
  attempted. Uncertainty: the integral proof and the exact unit $u_\lambda(q)$ of the signed-conjugate comparison were never
  visible.
- Dipper–James 1986, DOI 10.1112/plms/s3-52.1.20 (Theorem 5.6): the DOI resolves into a Wiley/Cloudflare 403 bot wall on both
  the article and the pdfdirect endpoints; Crossref/Semantic Scholar metadata only; OpenAlex reports `oa_status: closed`.
  Six attempts are recorded fresh (initial + five recoveries, within the allowance). Uncertainty: the integral
  q-polytabloid straightening coefficients and the leading-unit triangularity were never visible.

Two independent searches for author-hosted/repository copies of both articles returned only citation records, so no
`source_resolution.status: dropped` was claimed and no alternative proof was asserted. The accessible KMR analogue is the
graded/KLR presentation and is **not** a substitute unless adapted, which was not achieved.

## 5. Readiness outcomes (all 13 items)

Ready (6): `def-dj-bridge-row-column-permutation-modules-and-polytabloids`,
`lem-dj-bridge-row-permutation-module-standard-action`, `lem-dj-bridge-sign-automorphism-and-star-dual`,
`lem-dj-bridge-permutation-form-invariance-and-restriction`, `lem-dj-bridge-murphy-cellular-basis-and-cell-form`,
`lem-dj-bridge-theta-transport-of-the-cellular-structure` (repaired, see §2.1).
Each record names the examined dependency IDs and the source evidence
(`research/frontier-44-special-representation-examples-28-step1-<id>.json`).

Escalated (7): `lem-dj-bridge-integral-murphy-and-polytabloid-straightening` (closed DJ86 Theorem 5.6),
`thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual` (needs the same-shape cross-pairing),
`thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell` (closed Murphy Theorem 5.2, unit $u_\lambda$),
`cor-dj-bridge-specialization-and-composition-multiplicity-dictionary` (conditional consumer of the theorem), and the three
B items `ex-dj-bridge-row-and-column-shapes-at-rank-three`, `ex-dj-bridge-singular-two-tableau-shape`,
`cex-dj-bridge-untwisted-conjugation-changes-the-module` (downstream of the escalated pair; their displayed computations are
complete in themselves). No `--owner` record was used and no escalation was overwritten.

Owner remediation routes for the escalation (unchanged from the design, restated precisely): (A) a local proof of the
integral q-Garnir/standard-polytabloid straightening and of the unit-scaled conjugate comparison, using the Murphy-side
argument of Mathas Chapter 3 as the template and James SLN 682 at q = 1; or (B) an owner decision to install a KLR/graded
prerequisite chain in a separate pair so that KMR Theorem 7.25/8.5 becomes applicable. Until then the batch stays
owner-held; the main build gates remain blocked, per the owner direction.

## 6. Checks actually run (results, including unresolved findings)

| Check | Result |
|---|---|
| `python3 -m json.tool` on the manifest and coverage | pass (valid JSON; no placeholder text) |
| `node tools/item-dependency-levels.mjs check --run ...` | pass — 853 items over 100 pages; labels consistent (batch 50: 0–6 A, 7 B); no cycle |
| `node tools/manifest-deps.mjs <batch-50 manifest>` | pass — 13 items, 0 missing, 0 errors |
| `node tools/content-policy.mjs --manifest-only <batch-50 manifest>` | pass — 13 scoped items, 0 errors, 0 warnings |
| `node tools/validate-plan.mjs research/plan-spec.json --run ...` | pass (exit 0) — declared order acyclic; no item cycles, forward references, B-page deps or unresolved ids among the 100 pages; the `redundant-prereq` warnings printed are pre-existing on other pages |
| `node tools/coverage-checklist.mjs <batch-50 coverage> --require-destination` | **2 errors, both intended**: `coverage-source-resolution` for DOI 10.1006/jabr.1995.1079 and DOI 10.1112/plms/s3-52.1.20 — owner escalation, unresolved source. 42 harvested results; 1 warning `coverage-low-yield` (10/32 scaffolded, the rest are structural declines and the two escalated rows) |
| `node tools/source-fetch-check.mjs --coverage <batch-50 coverage> --stamp` | 12/14 sources fetch-verified and stamped (Mathas, Fayers, Ryom-Hansen, Heard–Kujawa, KMR, Kleshchev survey, James scan); 2 FAILED = the two owner-escalation DOI sources. Check mode exits 1 on exactly those two |
| `node tools/extcheck.mjs --items-file <batch-50 ids>` | applies only after authoring: at scaffold time all 13 ids are correctly reported `focus-item-unknown` because the item files deliberately do not exist yet; re-run is owed by Step 3 |
| `node tools/step1-decisions.mjs check --run ...` | 812/853 closed; the 7 batch-50 escalations are the batch's held items (41 further open items belong to other batches) |
| `node tools/frontier-dependency-ledger.mjs refresh --run ...` | refreshed; batch 50 listed in `reviewed_batches`; 0 edges touch batch 50; 87 pre-existing unreviewed in-run edges belong to other batches' inputs |
| `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run ...` | engine still `PAUSED` at `1-scaffold` (`49/50 covered; missing 50; artifact missing for 20, 25, 50`): batch 50 remains owner-held because the seven escalated items keep the `.scaffold-incomplete` sentinel, exactly as the step-1 hold path intends. No transition was attempted |

Not run here because they are engine-owned or require authored items: the whole-run `url-liveness`/`source-backing` battery
(it reads every batch coverage and writes run-level artifacts), `--require-reviewed` ledger mode (blocked by the 87
pre-existing unreviewed edges of other batches), and `extcheck`/item-mode policy checks (they run after Step-3 authoring,
when item files exist). No gate result or approval is claimed; Step 3 review and owner reconciliation remain.

## 7. No-touch statement

Only the owned batch manifest, batch coverage, batch ledger input, batch notes and the 13 step-1 readiness records were
written. No published item, shared plan, engine state, verdict or another batch's artifact was edited; no registry or
transition was attempted. The pre-existing working-tree modifications outside these files are not mine.


## Owner independent construction successor — NEW50 round1 (proposed integration)

The native Beta sections above remain authentic historical output. Beta genuinely ended at 2026-10-10T06:15:58.386Z; the state observation is separately 06:15:58.423Z. This owner construction is independent NEW50 theory1/max2; source20 remains frozen INSUFFICIENT_FINAL2_HOLD2/2, with no third correction or counter reset.

Current proposed inventory is11A+3B, adding only the necessary early `lem-dj-bridge-parabolic-double-coset-annihilation`. The full proposal preserves original13ID/kind/title/homes. Recomputed levels run0–9. Earlier published homes `the-hook-length-formula-and-rsk-correspondence` and `modular-representations-and-projective-covers` are added to actual page prerequisites for the RSK square-basis count and finite Jacobson-radical argument.

All seven escalated construction targets now have complete local proofs in the proposed carrier: actual ordinaryP(lambda)=x_lambda T_wlambda y_lambdaPrime H is proved split free integrally, indexed Std(lambdaPrime); same-shape cross-pairing is perfect; signed-conjugate isomorphism has exact self-form unitq^{ell(w0(S_lambdaPrime))-ell(w_lambda)}. All ring/unitparameter, zeroform/radical, Jantzen and arbitrary-fieldq1 scope is retained. The basis proof uses localcoset annihilation and a transpose-standard unitminor with square-surjection determinant, not generic semisimple dimensions. The standaloneMurphy prerequisite is rebuilt by exactGarnir+finiteprefixstraightening, RSKsquareunitbasis and mixedtrace dominanceupgrade. Genericregulartrace is used only for form uniqueness AFTER integral isomorphism.

Ready-labelled prerequisite defects corrected in this same coherent construction: fulltheta-family must range over ALLshapes; permutationformcontravariance is proved by singleton/swap-orbit matrices; signlemma q1 formula is sgn(w)T_w, not sgn(w)T_winverse. Its normalization proof now uses universal coefficientrecurrence and longestword coefficient, so it has no Hoefsmit/genericsemisimplicity premise. Mathas is the sole author of math/0604108; Soriano contributes its appendix. The manuscriptp25 warning omits a twist; it is not used to prove the dictionary. Same-shape contragredient duality and conjugate-theta comparison are proved separately.

The unavailable Murphy1995 andDJ1986 sources are PROPOSED dropped as proofprerequisites only after these full alternatives; their original attempts/searches/confidence/uncertainty are retained verbatim under historical_resolution. No extra retry, cap reset, fake fetch stamp or fabricated primaryproof reading occurred. Available12sourcefetch stamps are unchanged; the2closedprimary records remain unread. Remaining body harvest is still deferred, not silently audited.

Exact proofs: owner-native50-independent-supplier-construction/integral-constructor/{constructive-proof.md,standalone-murphy-proof.md}; pairing-constructor/bridge-proof.md. Coherent hashes and actual3new25consumeruses are in native50-round1-coherent-guarded-candidate.json and round1-supplier-sufficiency-and-actual-consumer-use-review.json. All3uses have actual starleftconversion, theta/contentreflection and unitradicalcomparison; no gradedcomparison is imported from rawtheta.

No current nativeREADY, gate, state, audit or counter is written by this researchpacket. Root must integrate pages/coverage/notes together, then this same supplier reviewer examines ACTUAL bound50 andaffected25/adopted20carriers BEFORE normal readiness registration. Ordinary toolregistration must derive currenthashes, including all14new50subjects and affectedcurrentconsumer inputs. The engine owns every transition.
