# Step 3b — pair `monomial-characters-and-m-groups` (dispatch report)

Run `frontier-35-ten-categories`, role `alpha-high`, batch 9, shared with the
sibling pair `projective-extensions-and-the-little-group-method` /
`…-examples`, whose shared-file rows were preserved untouched (verified below).
A page `monomial-characters-and-m-groups` (order 510.041, 10 items); B page
`monomial-characters-and-m-groups-examples` (order 510.042, 4 items).

**Status: complete.** All 14 items are authored, checked and decided
(`accept`, confidence 1, 14/14); both library pages are written; the 12
proof-bearing items carry complete proof contracts with boundary worksheets;
the batch manifest, coverage, contracts and the cross-batch dependency input
are reconciled. No escalation is open.

## Scope and owner direction

The Step 3a scope review `sufficient`
(`research/frontier-35-ten-categories-step3a-review-monomial-characters-and-m-groups.json`,
scope hash `a1bf7bff…`) is current: `step3-decisions check --phase scope` lists
only `the-ip-equals-pspace-theorem` open run-wide, not this pair. No owner scope
amendment was needed and none was made.

`research/frontier-35-ten-categories-owner-authoring-direction.md` **does
exist** (an earlier draft of this report wrongly said it did not); it was read
in full. Its two deferrals are batch 8's smooth-projective Serre-duality /
flag-variety pair and batch 13's
`thm-pseudointersection-number-equals-tower-number`. Neither touches this pair:
none of the 14 items cites, or reaches, any deferred id (checked against
`frontier-35-ten-categories-deferred-items.json` and by direct grep), and no
unresolved owner obligation enters this repair workload. The direction's
closing sentence — normal source, dependency and mathematical checks still
required — is exactly what the checks below record.

## Inventory (all 14 authored this run)

A page (10): the definition, the coset-basis matrix model, the faithful-irrep
proper-inertia lemma, the supersolvable noncentral-abelian-normal-subgroup
lemma, the induction–inflation lemma, the supersolvable ⇒ M-group theorem, the
Brauer virtual-character theorem, the sharp induced-kernel lemma, Taketa's
theorem (M-groups are solvable) and the boundary remark. B page (4): dihedral
groups, the order-$p^3$ unitriangular group, the binary-tetrahedral
counterexample, and the trivial/one-dimensional/abelian boundaries. Promised
ids and order are unchanged from the Step 1 scaffold; nothing was dropped,
added or re-homed.

| # | item (page) | claim / work | sources | deps |
|---|---|---|---|---|
| 1 | `def-monomial-representation-and-m-group` (A) | monomial representation/character, M-group, linear character; object vs character formulations tied by the determination theorem; anti-padding remark separating honest irreducibles from Brauer-type virtual statements | tom Dieck §4.3 pp. 57–58, §4.6 pp. 64–65; Li Def. 12.5.1/Thm 12.5.6 pp. 146–148; SLMath slides 375–378 | 8 published |
| 2 | `lem-monomial-representation-has-a-monomial-matrix-model` (A) | $f_t(th')=\lambda(h')^{-1}$ basis of $\operatorname{Ind}_H^G\lambda$; exactly one nonzero entry per row/column, all values of $\lambda$; converse recovers $V\cong\operatorname{Ind}_H^G\lambda$ from a permuted-line basis | tom Dieck §4.3 p. 57; Li p. 146 | 5 |
| 3 | `lem-faithful-irrep-with-a-noncentral-abelian-normal-subgroup-is-properly-induced` (A) | for **every** constituent $\lambda$ of $V|_A$: $I_G(\lambda)$ proper and $V\cong\operatorname{Ind}_{I_G(\lambda)}^G W$ | tom Dieck Prop. 4.3.2 pp. 57–58; Li Lem. 12.5.2–12.5.3 | 8 |
| 4 | `lem-nonabelian-supersolvable-group-has-the-required-abelian-normal-subgroup` (A) | complete centre-quotient proof of tom Dieck 4.3.3 (least noncentral term is abelian), plus the quotient form | tom Dieck Lem. 4.3.3 p. 58; Li Lem. 12.5.2 | 5 |
| 5 | `lem-induction-commutes-with-inflation` (A) | $\operatorname{Infl}(\operatorname{Ind}W)\cong\operatorname{Ind}(\operatorname{Infl}W)$ by explicit covariant-function isomorphism; inflation of a monomial irreducible is monomial irreducible | tom Dieck Lem. 4.3.4 p. 58; Li Ex. 12.5.4 | 6 |
| 6 | `thm-supersolvable-groups-are-m-groups` (A) | induction on $\lvert G\rvert$: kernel case descends to $G/K$, faithful case uses the noncentral abelian normal subgroup + proper inertia + induction–inflation; $I$ inherits the series | tom Dieck Thm. 4.3.1 with 4.3.3–4.3.4 pp. 57–59; Li Thm. 12.5.6 | 12 |
| 7 | `thm-monomial-induction-for-virtual-characters` (A) | every virtual character is an integral combination of monomial characters induced from $p$-elementary subgroups; Brauer's consequence, kept apart from the M-group property | tom Dieck 4.6.2–4.6.5 pp. 64–65; Li §14.3 | 13 |
| 8 | `lem-kernel-of-an-induced-character-lies-in-the-inducing-subgroup` (A) | sharp form $\ker(\operatorname{Ind}_H^GW)=\bigcap_g g(\ker W)g^{-1}\le\operatorname{Core}_G(H)\le H$; $W=\mathbf 1_H$ gives the coset-permutation kernel | SLMath pp. 374–404 (weaker $\ker\subseteq H$); Isaacs Ch. 5 p. 67 | 9 |
| 9 | `cor-m-groups-are-solvable` (A) | Taketa: $G^{(k)}\le\ker\chi$ for $\chi(1)=f_k$, hence $G^{(r)}=1$ and $\mathrm{dl}(G)\le\lvert\mathrm{cd}(G)\rvert$ | SLMath slides 391–404; tom Dieck §4.6 p. 65 | 15 |
| 10 | `rem-m-group-converses-and-boundary` (A) | supersolvable ⇒ M-group ⇒ solvable; second arrow strict via the binary tetrahedral group; Brauer separation spelled out; `forward_refs` to item 13 | tom Dieck Problem 1 pp. 58–59; SLMath 391–404, 408 | 7 |
| 11 | `ex-dihedral-groups-are-m-groups` (B) | $\operatorname{Dih}(C_n)$: $2f$ linear characters ($f=\gcd(2,n)$), $(n-f)/2$ degree-2 inductions from $A$; degenerate $n=1,2$ included | tom Dieck 4.2.4–4.2.7 pp. 55–57, §4.3; Li §12.5 | 15 |
| 12 | `ex-unitriangular-group-of-order-p-cubed-is-an-m-group` (B) | $\operatorname{UT}_3(\mathbb F_p)$: $p^2$ linear characters + $p-1$ characters $\operatorname{Ind}_H^U\mu_{c,d}$ of degree $p$; sum of squares closes the list; all $p$, including $p=2$ | Garrett §§1–2 pp. 1–3; tom Dieck 4.2.4–4.2.7, §4.3 | 10 |
| 13 | `cex-solvable-group-need-not-be-an-m-group` (B) | binary tetrahedral $T=Q_8\rtimes C_3\le\mathbb H^\times$, order 24: solvable ($T'=Q_8$, $T''=\{\pm1\}$, $T'''=1$), faithful irreducible degree 2 via $a\cdot x:=xa$ on $\mathbb C'=\mathbb R+\mathbb Ri$; no index-2 subgroup since $T/T'\cong C_3$; so $T$ is not an M-group | tom Dieck Problem 1 pp. 58–59; Li §12.5 | 23 |
| 14 | `ex-one-dimensional-and-trivial-monomial-boundaries` (B) | $\operatorname{Ind}_G^G\lambda\cong\lambda$ by evaluation at 1; trivial group is an M-group (sum of squares = 1); finite abelian groups are M-groups | tom Dieck §4.3 pp. 57–58, §4.6 | 11 |

## Local suppliers and mathematics added on the A page

Everything below is on the assigned A page, before its consumers, and is
registered in the manifest, coverage, contracts and page inventory.

- `lem-nonabelian-supersolvable-group-has-the-required-abelian-normal-subgroup`
  replaces the published `lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup`
  (defect 2 below) with the complete least-index/prime-cyclic argument and the
  quotient form used in step 2.1 of the theorem.
- `lem-induction-commutes-with-inflation` supplies the compatibility of
  induction with quotient inflation that published
  `lem-monomiality-lifts-along-a-quotient` asserts unproved (defect 1 below);
  the theorem descends through it instead of through that published lemma.
- `lem-kernel-of-an-induced-character-lies-in-the-inducing-subgroup` supplies
  the sharp core form $\ker\subseteq\operatorname{Core}_G(H)$ required by
  `cor-m-groups-are-solvable`; the published SLMath route proves only
  $\ker\subseteq H$.
- The statements of items 4, 5, 6 and 7 spell out the supersolvable convention
  ("terms normal in the whole group"), which is the convention under which the
  published `def-supersolvable-groups-and-monomial-characters` is intended but
  not unambiguous (defect 3 below).

No axiom of choice is used anywhere on the pair: all groups, transversals,
bases and representation spaces are finite, and every choice made in a proof is
a canonical selection (least index, stabilizer, isotypical component, explicit
basis). No item consumes a recorded result, and `extcheck` confirms the pair
introduces no recorded-not-proved material.

## Proof contracts

The 12 proof-bearing items have contract entries in
`research/frontier-35-ten-categories-batch-9.proof-contracts.json`
(`citations` regenerated from the on-disk items by
`tools/regen-contract-entries.mjs`, one `derivation` per numbered step, and a
full 8-row boundary worksheet per item: empty, zero, one, degenerate,
endpoints, nonempty-choice, iff-forward, iff-reverse — 96 item-specific rows,
no template reuse). The definition and the remark are outside the contract
scope, as they carry no proof steps.

Two contract defects found and repaired in this dispatch, and one rendering
defect class:

- `thm-supersolvable-groups-are-m-groups` declared `def-supersolvable-groups-and-monomial-characters`
  as a fact and never cited it; step 1.2 now cites it to fix the terminology of
  the induction hypothesis (a real use, not a token citation).
- `lem-induction-commutes-with-inflation` declared `def-normal-subgroup` and
  never cited it; step 1.1 now cites it for "$H/K$ is a group and
  $h\mapsto\bar h$ is a homomorphism because $K\trianglelefteq G$ and
  $K\le H$" — the well-definedness point that fact is there for.
- Three Statement display blocks spanning source lines
  (`lem-induction-commutes-with-inflation`,
  `thm-monomial-induction-for-virtual-characters`,
  `lem-kernel-of-an-induced-character-lies-in-the-inducing-subgroup`) were
  joined onto one source line each; `rendercheck` now passes on all 16 files.

## Checks actually run (results as observed)

| Check | Result |
|---|---|
| `precheck` on the 14 explicit item paths | **PASS** — 12 checked, 0 failing (definition and remark have no checkable body) |
| `rendercheck` on 14 items + 2 pages | **OK** — 16 files, no multiline display, no nested delimiters, all math parses |
| `content-policy` on `…batch-9.pages.json` | **Exit 0** — 30 scoped items, 0 errors, 0 warnings |
| `proof-contract --strict` on `…batch-9.proof-contracts.json` | **Exit 0** — 25/25 items, 0 errors, 0 warnings |
| `validate-plan research/plan-spec.json` | **Exit 0** — page order acyclic and consistent; 431 pages still lack item lists (run-wide note) |
| `depcheck` (repo-wide) | Exit 1 — 354 errors / 259 warnings run-wide. **One line concerns this pair**: a `cited-not-in-deps` *warning* on `rem-m-group-converses-and-boundary` (the forward-referenced counterexample is declared in `forward_refs`, not `deps`, because putting it in `deps` would hard-error in `extcheck`); identical warning class exists on published `thm-grouping-of-series` (119 occurrences run-wide, none in the error section) |
| `fwdcheck` | Exit 1 — 28 run-wide findings, **none on this pair**; 0 open forward references repo-wide; `rem-m-group-converses-and-boundary` appears only in the informational "carries the forward marker (direct)" list, which is what the declared `forward_refs` is for. The earlier "planned nowhere" warning is gone. |
| `extcheck` | **Exit 0** — no recorded-not-proved statement or consequence on this pair |
| `boundary-audit --fail-on-contradicted --fail-on-template` | **Exit 0** — 200 rows over the contract file, 65 `not_applicable`, no template reuse ≥ 3 members, no contradicted disposition |
| `citation-fidelity --fail-on-missing-quote` | **Exit 0** — 206 citations over 25 authored items; no quote-not-found; no widening candidates |
| `finite-smoke` | **Exit 0** — 0 errors |
| `risk-report` | **Exit 0** — 0 errors, 25 items routed (informational) |
| `coverage-checklist` | **Exit 0** — 2 pages, 83 harvested results, 0 errors, 0 warnings |
| `audit-manifest` on batch 9 | **Exit 0** — 233 relationships over 30 items (both pairs), 0 defects |
| `manifest-integrity --run frontier-35-ten-categories` | **Exit 0** — 52 pages owed, 52 in the manifests, no scope drift |
| `citecheck` (14 items) | 0 errors, 1 heuristic warning: "transitivity of induction" read as an order axiom in `thm-supersolvable-groups-are-m-groups` step 4.1 — a false positive (it is transitivity of induction, `thm-transitivity-of-induction-for-finite-groups`); no dependency was added to silence it |
| `prosecheck` (16 files) | 0 errors, 1 heuristic warning (`count-of-this-page`, "one of them", in the unitriangular example — refers to that item's own characters, not to the library) |
| `frontier-dependency-ledger refresh --run … --require-reviewed` | Exit 0, "refreshed and deduplicated"; the unified ledger is byte-identical (md5 `8925342e…` before and after) because this pair has no cross-batch edge |
| `step3-decisions record-item` × 14 | All 14 recorded `accept`, confidence 1, with the examined dependency lists; `check --phase final` reports all 14 accepted (225 run-wide; the remaining open rows belong to sibling batches) |
| `merge-proof-contracts` + run-level proof-contract | **Not run**: no run-level merged artifact exists and sibling batches (3, 8, 13, 15, …) are still in flight, so a merge would be incomplete and could race another writer. Deferred to the engine/Step 4. The batch-level strict check above is the applicable gate. |

## Sibling preservation (batch 9)

- All 16 `projective-extensions-and-the-little-group-method` manifest rows were
  re-verified identical to their on-disk item `deps`; the 13 sibling contract
  entries and their scope rows were not reordered or altered (`citation-fidelity`
  re-verified their quotes against the cited items).
- The batch file's monomial rows carry the on-disk item deps (14/14 `SAME`),
  and `research/frontier-35-ten-categories-batch-9.cross-batch-dependencies.json`
  remains `[]` — correctly, since every supplier of this pair is an
  already-published item outside the run. No sibling row was touched.

## Published concerns (for the canonical ledger; not edited here)

**Confirmed defects** (I read the published proofs on disk; confidence high;
statement truth is not in question where noted):

1. `lem-monomiality-lifts-along-a-quotient` (published; page
   `brauer-induction-and-elementary-subgroups`). Step 2.1 asserts
   "Compatibility of induction with quotient inflation gives
   $\chi=\operatorname{Ind}_H^G\lambda$" with no proof and with no supplier in
   its `deps` (which are `def-supersolvable-groups-and-monomial-characters`,
   `prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient`,
   `thm-transitivity-of-induction-for-finite-groups`, `def-quotient-group`).
   Repair: add the local supplier
   `lem-induction-commutes-with-inflation` (authored here, currently a draft on
   this pair's A page) to its `deps` once published, or insert the explicit
   covariant-function proof.
2. `lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup`
   (published; same page). Step 1.1 chooses $i$ maximal with $G_i$ abelian and
   then says "By maximality there is $g\in G$ not commuting with some
   $a\in G_i$". The needed argument is missing: $G_{i+1}/G_i$ has prime order
   (hence is generated by the image of some $x$), so $G_{i+1}=G_i\langle x\rangle$;
   if $x$ centralised $G_i$ then $G_{i+1}$ would be abelian, contradicting the
   maximality of $i$, so some $a\in G_i$ fails to commute with $x$. Repair:
   insert that two-line argument, or replace the lemma by the local
   `lem-nonabelian-supersolvable-group-has-the-required-abelian-normal-subgroup`
   (authored here, which also proves the quotient form).
3. `def-supersolvable-groups-and-monomial-characters` (published; same page).
   "has a normal series $1=G_0\triangleleft\cdots\triangleleft G_r=G$ whose
   factors have prime order" displays only adjacent normality. Under the
   weaker reading, $T=Q_8\rtimes C_3$ (item 13) would be "supersolvable"
   through $1\triangleleft\{\pm1\}\triangleleft\langle i\rangle\triangleleft Q_8\triangleleft T$
   (factors $C_2,C_2,C_2,C_3$), yet $T$ is not an M-group, so the published
   theorem would be false under that reading. tom Dieck's convention requires
   each term normal in the whole group. Repair: state the convention
   explicitly; the items authored here do.

**Consumer chain.** The published `thm-finite-supersolvable-groups-are-monomial`
depends directly on defects 1 and 2, and published `thm-brauer-induction`
reaches both through `lem-p-elementary-characters-are-induced-from-linear-characters`
→ `thm-finite-supersolvable-groups-are-monomial` (verified by declared-edge
closure from `thm-brauer-induction`: both flagged ids are reached). This pair's
theorem 6 and theorem 7 avoid that chain (they use the local replacements), so
the new suppliers are not blocked by this debt; the published chain still needs
the repairs above.

**Suspicion, not confirmed.** `prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup`
(published, the analogue of local item 3) has a terse step 2.1; I read it and
the implicit isotypicality of $V|_A$ when $G_\lambda=G$ does follow from its
step 1.1, so I record no defect — only that it would benefit from an explicit
sentence.

**Expositional note on a new item (not a defect).**
`ex-unitriangular-group-of-order-p-cubed-is-an-m-group` indexes the degree-$p$
family by the $p(p-1)$ pairs $(c,d)$, $d\ne0$, while the distinct characters
correspond to the $p-1$ orbits; step 6.1 states the orbit bijection explicitly,
so no false claim is made, but an editor may want "the characters
$\operatorname{Ind}_H^U\mu_{c,d}$ for $d\ne0$" in the Statement.

## Open obligations / handoff

- Run-level `merge-proof-contracts` and the whole-level contract gate remain
  with the engine/Step 4 (sibling batches in flight; see the checks table).
- The three published defects above are routed to the owner/serial reconciler;
  `research/published-consumer-supplier-ledger.md` was deliberately not edited
  by this dispatch.
- Heuristic warnings left unsilenced on purpose: the `citecheck`
  "order-axioms" warning (transitivity of induction) and the `depcheck`
  `cited-not-in-deps` warning for the forward-referenced counterexample.
- Step 1 note retained for the owner: the SLMath locator understates its read
  range (rows at pp. 405–406) and the M-group structure results at pp. 407–418
  are outside the declared spine (future material, no claim made).

## Decisions recorded

`record-item --decision accept --confidence 1` for all 14 items, each with its
examined dependency list and an item-specific evidence reason (claim verified
against sources, every proof step read, hypothesis/quantifier check, boundary
rows, and the exact checks run for that item). No `--owner` invocation, no
judge/audit stamps, no escalations. `step3-decisions check --phase final`
confirms all 14 are current and accepted.
