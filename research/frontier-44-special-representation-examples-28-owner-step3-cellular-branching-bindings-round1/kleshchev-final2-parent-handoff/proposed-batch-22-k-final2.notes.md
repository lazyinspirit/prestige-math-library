# Batch 22 — Modular Branching and the Good-Node Crystal

Run: `frontier-44-special-representation-examples-28`. Owned pair:
`modular-branching-and-the-good-node-crystal` (A, order 1573) and
`modular-branching-and-the-good-node-crystal-examples` (B, order 1574),
category `special-topics-in-representation-theory`. The stable scaffold holds
**13 A items and 2 B items**, all recorded `ready`, with in-run dependency
levels 0–10 on the A page and 3–10 on the B page (no cycle). Construction is
scaffold planning and readiness, not authored proof acceptance; Step 3 owns the
proofs and the full gate battery.

## Scope and governing texts

The owner direction
`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`
was read before constructing any item: all 24 planned pairs of the category are
retained with their claims, sources and proof obligations, suppliers before
consumers, no new pairs, no publication. The pair keeps the design route of
`research/plan-symmetric-group-representations-track.md` (the SYMR-9 row at
L44, whose binding item inventory is the SYMR-9 section of
`research/symmetric-group-planning/proposed-inventory.md`): the residue
signature with normal/good/conormal/cogood nodes, the modular
Jucys–Murphy primary idempotents and the residue-summand functors $E_i,F_i$,
Kleshchev's first-level branching multiplicity, the Schur-functor comparison,
the normal- and conormal-node composition multiplicities, the finite-group
induction/coinduction biadjunction, the good- and cogood-node socle/head
theorems, the uncoloured socle corollary, the good/cogood crystal operators and
the reachability of every restricted partition, and on the B companion
Brundan's large-partition signature example and a full cogood-addition path.

`research/plan-spec.json` carries only the planned page shells for this pair
(`"items": []` for orders 1573 and 1574), so there is **no plan-vs-design
inventory conflict at item level**; the design's proposed inventory is the item
source and the plan's page objects (title, companion, category, orders,
`requires`) are preserved verbatim in the manifest. The only plan-level outputs
for this page are the advisory `redundant-prereq` rows of the shared canonical
`requires` chain (`integral-specht-modules-and-modular-simple-modules`,
`the-branching-rule-and-the-young-graph`, `jucys-murphy-elements-and-seminormal-forms`
and `type-a-hecke-specht-modules-and-cellular-bases` are already reached through
`cores-quotients-and-blocks-of-symmetric-groups`); the shared list was not
edited here. Note that **no item of this page consumes an item of
`cores-quotients-and-blocks-of-symmetric-groups`** — the SYMR-9 design table
does not use it either, and the block theory is not needed for the branching
statements as sourced — so that declared require is currently unreferenced at
item level; recorded for owner/Alpha reconciliation.

### Design/plan reconciliation recorded for the owner

1. **Item 3 is the source theorem, item 4 its comparison input.** The design's
   `thm-kleshchev-first-level-branching-multiplicity` was scoped in the
   manifest as the group-side p-regular multiplicity theorem (Kleshchev 1997
   Theorem 1.4 and its in-words reformulation), which is the content of the
   design's own claim text; the SL-side first level and its multiplicity
   Theorem 9.3 live inside that item's proof route. Consequently the design's
   dependency direction for
   `prop-schur-functor-compares-first-level-branching-with-hecke-restriction`
   is reversed: the comparison is an input to the proof of Theorem 1.4
   (§11, Proposition 11.2), not a consumer of it. No claim was weakened.
2. **Hypotheses and conventions made explicit.** The residue of a node is
   fixed as $c-r\bmod p$, with the warning that this is the negative of
   Brundan's $r-c$ and that the transposed/negated dictionary must not be
   mixed silently; the normal/good nodes are the topmost surviving $-$ of the
   reduced signature and the cogood node the bottommost surviving $+$. The
   design's `thm-normal-node-...` retains its caveat that the
   Specht-to-restriction Hom criterion is a *distinct* statement. The
   `p`-dependent hypotheses ($p$-regular vs $p$-restricted labels, the
   $q=1$/$e=p$ specialization) are stated on each item that needs them.
3. **Dependency repairs relative to the design table (all additions are
   genuine direct uses).** (a) The first-level theorem now depends on the
   comparison item and on the published Specht-head classification; the
   Kleshchev I §2.12(v) citation is replaced by the comparison item exactly as
   the SYMR-9 evidence report requires. (b) The normal/conormal multiplicity
   theorems depend on the batch's signature definition and on the published
   conjugate/sign dictionary; the conormal theorem additionally depends on the
   new finite-group biadjunction lemma (the report's replacement for
   `cor-frobenius-reciprocity-for-complex-characters`, which is deliberately
   **not** used). (c) The socle corollary now also carries the residue-summand
   refinement of the JM idempotent item; the design's own route ("sum the exact
   residue-primary summands") is retained in its strategy. (d) The design's dep
   `def-quantum-characteristic-of-an-invertible-hecke-parameter` was removed
   from the JM idempotent definition, because the group-level primary
   decomposition does not use a Hecke parameter; the Hecke parameter and the
   quantum characteristic are used where they belong, in the comparison item.
   (e) The reachability proposition's proof is completed as an explicit
   induction using the freeness of $kS_d$ over $kS_{d-1}$ (the design's
   "induct via nonzero restrictions" was made precise).
4. **Source handling for Kleshchev II (1995).** The design and the SYMR-9
   evidence report cite Kleshchev's *Branching rules II* (J. reine angew. Math.
   459, 1995) as the original statement source for the socle/head theorem. The
   complete GDZ scan is registered in the research cache with a verified hash,
   but it has no text layer and was not relied on here for any statement or
   proof: the statements are disposed through the Kleshchev survey's
   Theorems 11.6–11.7 (the survey attributes them to [120,123]) and the
   proof-bearing treatment is Brundan 1998, Theorems 2.6 and 5.4 with the
   §5.5–5.7 Schur-functor transfer and the Remark 2.4(II) convention
   translation. The 1997 author manuscript *was* fetched, hash-checked,
   rendered and read at the locators recorded in the coverage file.
5. **B-page calibration.** The path example was fixed to a concrete,
   hand-verified partition (∅ → (1) → (1,1) → (1,1,1) → (2,1,1) → (3,1,1) at
   p = 3, residues 0,2,1,1,2), replacing the design's unspecified "one full
   path"; Brundan's (6,4,4,3,2) example keeps the source's printed table at
   ℓ = 3 and ℓ = 4 with the source's decomposability conclusion.

## Mathematical closure and dependency verification

Every item was checked against the actual statements of its suppliers; the
published items were read on disk, the batch-20 suppliers were read in their
manifest form (they are scaffolded, not authored), and the source treatments
were read at the exact locators recorded in the coverage file. Key
verifications performed while constructing this scaffold:

- **Brundan's conventions and Example 2.8.** The definitions of the index sets
  $B_{i,j}(\lambda)=\{k\in[i..j):\operatorname{res}(i,\lambda_i)=\operatorname{res}(k+1,\lambda_{k+1}+1)\}$
  and $C_{i,j}(\lambda)=\{k\in(i..j):\operatorname{res}(i,\lambda_i)=\operatorname{res}(k,\lambda_k)\}$,
  the lattice orders, $R^{normal}$ and $R^{good}$ were read (author
  manuscript, pp. 3–4) and the printed table for $\lambda=(6,4,4,3,2)$ was
  recomputed row by row: for $\ell=3$,
  $(B\cap R,C\cap R)=(\varnothing,\{4\}),(\{4,5\},\varnothing),(\varnothing,\varnothing),(\varnothing,\varnothing)$
  giving $R^{normal}=\{1,4,5\}$, $R^{good}=\{1,5\}$; for $\ell=4$,
  $(\varnothing,\{3,5\}),(\varnothing,\{5\}),(\{5\},\varnothing),(\varnothing,\varnothing)$
  giving $R^{normal}=\{1,3,5\}$, $R^{good}=\{1\}$. Both the row-by-row values
  and the two good-node sets were reproduced independently.
- **The signature reduction and the transposed dictionary.** The survey's
  §3.4 rule (nodes ordered top to bottom, $-$/+ cancellation, good = leftmost
  surviving $-$) was checked against the verified Brundan example and against
  the edge cases $(2,2)$, $(1,1,1)$, $(2,1,1)$ and $(3,3,2,1,1)$ at
  $p=3$: in every case the reduced signature, the normal nodes and the
  good/cogood nodes agree with Brundan's $B \downarrow C$ criterion under the
  transpose/negation dictionary of Remark 2.4(II). This includes the
  $p=2$ situation, where the sign twist is trivial but the transpose and the
  order reversal are essential.
- **Kleshchev 1997 Theorem 1.4 against the survey.** The source's reformulation
  ("$1+$ the number of normal nodes $B$ above $A$ with $\operatorname{res}B=\operatorname{res}A$,
  and $0$ otherwise") was read on manuscript p. 5 and recomputed for the
  source's own examples: for $p=3$, $\lambda=(5,3,2)$ the removable nodes
  $(1,5),(2,3),(3,2)$ have multiplicities $1,2,0$; transposing to
  $\mu=(3,3,2,1,1)$ gives the normal $i=2$ nodes $(3,2),(5,1)$ and the survey's
  counts "normal nodes weakly below $A$" equal to $2$ and $1$, matching the
  source. The second source example ($\lambda=(3,2,2,1,1)$-side count $3$) was
  also reproduced.
- **The first-level route.** The paper's §8 statements (Theorems 8.6, 8.8,
  8.9, Corollary 8.10: dimension and three bases of the weight space), §9
  (Definition 9.1, Lemma 9.2, Theorem 9.3 with the Corollary 5.8 recurrence)
  and §11 (Propositions 11.1–11.3 and the pp. 64–65 deduction of Theorem 1.4)
  were read at the manuscript level; the numerical instance
  $\lambda=(5,3,2)$, $p=3$ was checked through the recurrence. Caveat: the
  author PostScript renders the mathematics as Type3 bitmap glyphs whose
  inequality symbols are not machine-extractable, so the exact printed
  conventions of Definitions 1.5–1.6 and 3.1 must be re-read page-wise by
  Step 3 while authoring; the group-side statement used by this page does not
  depend on those definitions once the comparison item and Theorem 1.4 are
  read, and both were read in words.
- **Brundan's comparison and branching proofs.** §5.5–5.7 (pp. 30–32) with
  Lemma 5.6(i)–(ii), Lemma 5.7, the displayed first-level identity
  $f_{n-1,r-1}(L_n(\lambda)^1)=f_{n,r}(L_n(\lambda))\downarrow_{H(r-1)}$ and
  the deduction of Theorems 2.5–2.6 were read; the criterion statements of
  Theorems 5.3–5.4 and part of the proof of 5.4 were read. The complete proof
  architecture of §§3–4 (integral quantum hyperalgebra, $q$-Schur
  standards/costandards, lowering operators) is the genuine proof machinery
  invoked by those theorems and is left to Step 3 as the coverage file
  records.
- **Published interfaces.** The statements of
  `def-p-regular-and-p-restricted-partitions`,
  `def-removable-and-addable-nodes-of-a-partition`,
  `def-jucys-murphy-elements-of-the-symmetric-group-algebra`,
  `def-restriction-induction-and-coinduction-for-group-modules`,
  `lem-the-group-ring-is-free-over-a-subgroup-ring`,
  `thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction`,
  `thm-chinese-remainder-theorem-for-comaximal-ideals`,
  `def-p-blocks-by-primitive-central-idempotents`,
  `thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads`,
  `prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality`
  and `def-module-radical-socle-head-and-loewy-series` were read on disk and
  their hypotheses, directions and conventions matched the uses here; in
  particular the Specht-head convention is the James radical-quotient
  convention used by Kleshchev's $D^\lambda$, and the dictionary item supplies
  the transpose/sign relation $D(\mu)\cong D^{\mu'}\otimes\operatorname{sgn}$
  without cutting corners at $p=2$.
- **Choice and axiom strength.** Every item on both pages is choice-free: the
  signature combinatorics, the CRT/Bézout construction inside a
  finite-dimensional algebra, the finite-coset-transversal biadjunction, the
  Schur-functor comparison and the induction arguments use only finite
  constructions and finite choices. No item reaches
  `deferred-set-theory-beyond-choice` through any proof or prerequisite path,
  and no AC branch is introduced.
- **In-run transitive closure.** The only in-run suppliers are five batch-20
  items (`def-type-a-q-schur-algebra-and-weyl-modules`,
  `def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras`,
  `thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules`,
  `def-quantum-characteristic-of-an-invertible-hecke-parameter`,
  `prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one`);
  all edges are declared in the item `deps` arrays and in the cross-batch
  input file (five item rows plus two page rows). No other batch of this run
  is consumed.

## Sources and fetch evidence

Three complete treatments back the pair, one of them of primary kind:

1. Alexander Kleshchev, *On decomposition numbers and branching coefficients
   for symmetric and special linear groups*, Proc. LMS (3) 75 (1997) 497–558;
   complete 66-page author manuscript (author PostScript). URL:
   https://darkwing.uoregon.edu/~klesh/BrIV.ps. Locators: §1 (pp. 1–14),
   Part I §§2–6, §§7–10, §11 (pp. 64–65).
2. Alexander Kleshchev, *Representation Theory of Symmetric Groups and Related
   Hecke Algebras*, Bull. AMS 47 (2010) 419–481 (survey; primary-kind
   treatment). URL: https://arxiv.org/pdf/0909.4844. Locators: §2.3–2.4
   (pp. 8–9), §2.9 (p. 11), §3.4 (pp. 18–19), §7.1–7.5 (pp. 29–31),
   §11.2–11.4 (pp. 51–54).
3. Jonathan Brundan, *Modular Branching Rules and the Mullineux Map for Hecke
   Algebras of Type A*, Proc. LMS (3) 77 (1998) 551–581; complete 34-page
   author manuscript. URL: https://pages.uoregon.edu/brundan/papers/quantum.pdf.
   Locators: §2.2–2.4 and Example 2.8 (pp. 3–5), Theorems 2.5–2.6 and
   Remark 2.7 (pp. 4–5), Theorems 5.3–5.4 (pp. 28–31), §5.5–5.7 (pp. 30–32).

`node tools/source-fetch-check.mjs --coverage
research/frontier-44-special-representation-examples-28-batch-22.coverage.json
--stamp` returns `5/5 source(s) fetch-verified` (the B-page entries are
stamped separately, so the three distinct URLs are counted twice), and check
mode returns `5/5 source(s) fetch-verified` and `5/5 source(s) resolved`.
`node tools/url-sweep.mjs --coverage <file> --out /tmp/b22/urls.json
--recover` reports `3/3 live; 0 failed`, and
`node tools/source-backing.mjs --coverage <file> --liveness /tmp/b22/urls.json
--reharvest-plan /tmp/b22/reharvest.json` reports
`12 authored result(s) ... every one still backed by an openable source`. The
coverage file disposes **29 harvested source results** (A page: 10 included,
11 inline, 1 already-published, 3 out-of-scope with reasons; B page: 2
included, 2 inline) with **0 errors and 0 warnings**.

## Cross-batch dependency input

`research/frontier-44-special-representation-examples-28-batch-22.cross-batch-dependencies.json`
holds 7 open rows: five item rows to the batch-20 q-Schur/Hecke items used by
the comparison item, one page row for the declared
`modular-branching-and-the-good-node-crystal ->
type-a-hecke-specht-modules-and-cellular-bases` edge, and one page row
recording that the declared `cores-quotients-and-blocks-of-symmetric-groups`
require is currently unreferenced at item level. The unified ledger was
refreshed with `node tools/frontier-dependency-ledger.mjs refresh --run
frontier-44-special-representation-examples-28`. The expected downstream
interface is the Fock-space pair (`level-one-fock-space-and-residue-crystals`,
order 1576), whose design consumes
`def-good-node-and-cogood-node-crystal-operators` and
`prop-every-p-restricted-partition-is-reached-by-cogood-node-additions`; both
interfaces are scaffolded here and no consumer of them exists in this batch.

## Checks run (exact results)

| check | command | result |
|---|---|---|
| manifest deps | `node tools/manifest-deps.mjs research/frontier-44-…-batch-*.pages.json` | 378 items (final run state while sibling batches are still being scaffolded), 0 normalized, **0 errors** |
| manifest policy | `node tools/content-policy.mjs --manifest-only research/frontier-44-…-batch-*.pages.json` | 378 scoped items, **0 errors, 0 warnings** |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-44-…` | no batch-22 error; this batch's labels match the computed levels (A max 10, B max 10); the remaining `empty scaffold inventory` rows and level mismatches belong to other, still-unfinished batches |
| coverage | `node tools/coverage-checklist.mjs <batch coverage> --require-destination` | 2 pages, 29 harvested results, **0 errors, 0 warnings** |
| source fetch | `node tools/source-fetch-check.mjs --coverage <batch coverage> --stamp`, then check mode | **5/5 fetch-verified**, 0 drops |
| url liveness | `node tools/url-sweep.mjs --coverage <batch coverage> --out /tmp/b22/urls.json --recover` | **3/3 live**, 0 failed, 3 citation decisions, 0 documented drops |
| source backing | `node tools/source-backing.mjs --coverage <batch coverage> --liveness /tmp/b22/urls.json --reharvest-plan /tmp/b22/reharvest.json` | 12 authored results, every one backed by an openable source |
| plan | `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-…` | **OK** (acyclic and consistent; no item-level cycles, forward references, B-page dependencies or unresolved ids); only shared-plan `redundant-prereq` advisories remain on this page's canonical `requires` chain |
| scope | `node tools/manifest-integrity.mjs --run frontier-44-…` | 56 pages owed, 56 in manifests, **no scope drift** |
| readiness | `node tools/step1-decisions.mjs check --run frontier-44-…` | all **15 batch-22 records closed** (ready, non-owner); the run is not closed because other batches are still scaffolding |
| ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-…` | refreshed and deduplicated; batch-22 input accepted |
| extcheck | `node tools/extcheck.mjs --run frontier-44-…` | **OK** — no active recorded-not-proved items or external fallback records in scope |
| fwdcheck | `node tools/fwdcheck.mjs --run frontier-44-…` | **OK** — every forward reference declared and closed |
| depcheck / depsource | `node tools/depcheck.mjs --run frontier-44-…` (and `depsource`) | whole-corpus FAIL with 2,729 pre-existing published-unaudited/adoption findings on unrelated published items; no batch-22 item exists yet on disk, so no finding concerns this batch. Recorded for the operator |

## Published defects and open obligations

No defect was confirmed in any consumed published item. The interfaces read
were the eleven published items listed above; all statements matched the uses.
Open obligations and uncertainties, honestly recorded:

- The five batch-20 suppliers of the comparison item are **scaffolded but not
  yet authored**; the seven cross-batch rows stay open until Step 3 authors
  them and Step 5 reviews them.
- The two heavy proof obligations are real and large: Kleshchev 1997
  §§2–9/§11 (the lowering-operator/essential-subset machinery behind
  Theorems 8.6–8.10 and 9.3, then Proposition 11.2 and the pp. 64–65
  deduction) and Brundan 1998 §§3–5.4 (the $q$-Schur/quantum-$GL$ criterion
  for normal and good nodes) with the §5.5–5.7 transfer. Both were located,
  fetched and read at the level recorded above; Step 3 must author them, and
  nothing on this page is a citation-sized shortcut.
- The author PostScript of Kleshchev 1997 loses its inequality glyphs in text
  extraction; Step 3 must re-read Definitions 1.5–1.6 and 3.1 from the
  rendered pages before authoring the combinatorial lemmas, and must keep the
  `c-r` vs `r-c` and `p`-regular vs `p`-restricted conventions as declared.
- The completely reducible special case (Kleshchev II Theorem 0.6) and the
  Mullineux involution (survey §§11.5, Brundan §§2.9–2.11) are deliberately
  not asserted on this page; the coverage file disposes them `out-of-scope`
  with reasons.
- The `redundant-prereq` advisories and the currently unreferenced
  `cores-quotients-and-blocks-of-symmetric-groups` require are shared-plan
  matters for owner/Alpha reconciliation; the plan was not edited.

Owner/operator reconciliation, the Step-3 authoring review and the full engine
gate still follow; a readiness record is not independent mathematical approval.

## Step 3b status (2026-10-10)

All 13 A items and both B items are authored (draft), the two library pages
`modular-branching-and-the-good-node-crystal` and `...-examples` exist, the
batch manifest statements/deps were synced to the authored text, the proof
contract and cross-batch ledger were written, and the explicit-path battery
passed except the items blocked by three unauthored batch-20 suppliers of
`type-a-hecke-specht-modules-and-cellular-bases`:
`def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras` (file
appeared mid-run but unfinished), and the missing
`thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules`
and `prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one`.
Item decisions: 13 closed (7 repaired, 6 accepted), 2 escalated
(`prop-schur-functor-compares-first-level-branching-with-hecke-restriction`,
`thm-kleshchev-first-level-branching-multiplicity`). Details, exact consuming
steps and the remaining contract residuals are in
`research/frontier-44-special-representation-examples-28-step3b-pair-modular-branching-and-the-good-node-crystal.md`.


## Current K count FINAL2 local proof instantiation

The first current authored-count repair was insufficient: its count clauses merely cited Kleshchev, and its unconditional reformulation failed at p=2, lambda=(5,3,1), A=(3,1). That history and all protected earlier counters remain unchanged. The final constructive proposal retains the full piecewise claim. Its necessary new session lemma in the existing A-home22 proves integral root-interval operators, the modular essential-subset basis, and the finite matching recurrence. The target derives first-level support, character inversion, and the normal-node count locally. Its q=1 tensor-Schur corner, cell form, radical, restricted-label survival and subgroup restriction comparison are proved inline using the actual NEW50 signed bridge and the published group nonzero-form criterion; the held generic Hecke classifier and generic first-level proposition are not premises. The direct normal-node theorem retains its Statement and instantiates this actual local count, using the same-shape NEW50 dual bridge for the central scalar action.

Exact authoritative proposals and guarded inputs are recorded in `kleshchev-final2-parent-handoff/guarded-k-final2-three-object-and-native22-handoff.json` within the current cellular branching research scope. Native item registration and actual after-binding acceptance are pending. The new lemma requires normal owner-created-item evidence, not a borrowed native author result.

Source access is retained honestly: the original 1997 PostScript has SHA-256 0bbf3d69ddf20940089045c540e3d516c542118ab06644c5d26c430bedf46558; its converted PDF has SHA-256 7042528e267a761105186e14549925a63497a01bc63ec45a4a26722e4f445184. The cached 1995 scan has SHA-256 6a7a7856d3eb8c8198920c02bdcdd16d8b350f024d39ae96215f072050bc368c. Exact per-constructor visual and normalized-text page ranges are in `kleshchev-count-constructor/final2-handoff.json` and `kleshchev-essential-combinatorics-constructor/essential-count-recurrence-proof.md`. Neither complete 51-page nor complete 66-page reading is claimed. No new fetch, recovery attempt, source resolution, or source cap reset is asserted. The actual mathematical argument is in the proposed local items; unused alternative PBW/epsilon bases and external translation machinery are not local proof premises.
