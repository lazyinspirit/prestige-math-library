# Owner repair: B/44 — the skeletal pairing lemma and the multiplicative AHSS

Run: `phase-2-remaining-27`

Dispatch: `alpha-adjudicate`, label `owner-b44-multiplicativity`.

Queue position resolved: group B, position 44,
`lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss` (below, "the
lemma"), and its only draft consumer
`thm-multiplicative-ahss-for-a-multiplicative-generalized-theory` (below, "the
theorem"). The owner escalation and the complete counterexample were read from
`research/phase-2-remaining-27-owner-residual-ab.md`, section "B/44", together
with the final adjudicator's terminal receipt for position 44 in
`research/phase-2-remaining-27-step7-terminal-resolutions.jsonl` (line 413,
`disposition: escalated-to-owner`, escalated bytes
`b5a875568d9028a0518300117d7f42935ec220df30793d2902de9b59d026892d`).

## 1. The defect

The escalated claim was that pulling the external product back along an
**arbitrary** cellular approximation of the diagonal makes every page of the
cohomological AHSS, $E_1$ included, an associative bigraded ring. The terminal
receipt states the failure exactly: "Therefore (a·a)·z=2z, while a·(a·z)=4z.
These differ in E1^(1,0)=Z. The claimed first-page multiplication is not
associative."

The counterexample is ordinary integral cohomology of $X=[0,1]$ with vertices
$v_0,v_1$ and oriented edge $e$. The cellular path
$$(0,0)\to(0,1)\to(1,1)\to(1,0)\to(0,0)\to(0,1)\to(1,1),$$
parameterized linearly on its six segments, is homotopic to the diagonal
relative to the endpoints and is therefore an admitted cellular approximation;
on oriented one-chains it induces
$$\Delta_*[e]=2(v_0\times e)+2(e\times v_1)-(v_1\times e)-(e\times v_0).$$
For the degree-zero cochain $a$ with $a(v_0)=1$, $a(v_1)=0$ and the degree-one
cochain $z$ with $z(e)=1$ the induced first-page product is
$\mu_1(a,a)=a$ and $\mu_1(a,z)=2z$, so
$\mu_1(\mu_1(a,a),z)=2z\neq 4z=\mu_1(a,\mu_1(a,z))$ in
$E_1^{1,0}\cong\mathbb Z$. I re-derived this witness from the item's own
construction: for the product of $E_1^{0,0}$ with $E_1^{1,0}$ the collapse map
of step 1.1 keeps the single block
$X^0/X^{-1}\wedge X^1/X^0$, whose cells are $v_0\times e$ and $v_1\times e$, so
the terms $2(v_0\times e)$ and $-(v_1\times e)$ contribute and the
$(1,0)$-block terms $2(e\times v_1)$ and $-(e\times v_0)$ do not.

Two further defects in the escalated bytes, both from the terminal receipt:

* step 1.1 paired classes on $(X,X^{p-1})$ while $E_1$ contains arbitrary
  classes on $(X^p,X^{p-1})$, and no typed pairing of the $D$-terms was
  exhibited;
* the cited
  `lem-spectral-sequence-subquotient-and-local-lifting-calculus` "supplies
  neither a typed exact-couple pairing nor the missing product identities" —
  the same misused citation that the closed fatal row
  `phase-2-remaining-27-step7-b-075` had already recorded for this item.

## 2. What the repaired items assert

### Lemma

The Statement is now split into three numbered claims with explicit types.

* **(a)** the relative products of skeletal pairs, the collapse to the
  $(p,r)$-summand of the product filtration quotient and $\Delta$ give a typed
  bilinear pairing
  $\mu_1^{p,q;r,s}:E_1^{p,q}\times E_1^{r,s}\to E_1^{p+r,q+s}$ with
  $E_1^{p,q}=h^{p+q}(X^p,X^{p-1})$, and the same construction pairs the
  relative groups $h^m(X,X^{p-1})$ with $h^n(X,X^{r-1})$ into
  $h^{m+n}(X,X^{p+r-1})$, so the $D$-terms are paired with one another. The
  text says explicitly that no associativity, graded commutativity or unitality
  is asserted for $\mu_1$, and that each can fail for an admitted $\Delta$;
* **(b)** for $d_1=jk$ ($k$ the pair map, $j$ the connecting map) the Leibniz
  rule $d_1(\mu_1(x,y))=\mu_1(d_1x,y)+(-1)^{p+q}\mu_1(x,d_1y)$ holds, and
  $\mu_1$ descends to a bilinear $\mu_2$ on $E_2=H(E_1,d_1)$;
* **(c)** from $E_2$ on the products make each page a unital associative
  graded-commutative bigraded ring on which $d_r$ is a derivation, with
  $E_{r+1}\cong H(E_r,d_r)$ an isomorphism of bigraded rings and the $E_2$
  product the graded cup product under $E_2^{p,q}\cong H^p(X;h^q(*))$ of the
  library's cohomological AHSS; the filtration is multiplicative,
  $F^pF^q\subseteq F^{p+q}$, and $E_\infty\cong\operatorname{gr}_Fh^*(X)$ as
  graded rings.

Proof steps: 1.1 (block collapse), 2.1 (the typed $\mu_1$), 2.2 (the relative
$D$-term pairing), 3.1 (the couple's maps are multiplicative), 3.2
(multiplicative filtration), 4.1 (Leibniz for $d_1=jk$ from the assumed
relative connecting-map Leibniz identities), 4.2 (the stable product is the
associated-graded product), 5.1 (descent to $E_2$), 6.1 (the ring structure
from $E_2$ on), 7.1 (summary), 7.2 (the interval witness), 8.1 (conclusion).
Steps 1.1–5.1 are proved locally from the item's stated hypotheses; the only
cited content is [F3], the standard multiplicative structure of a pairing of
filtering towers, used for the ring structure, the derivations and the ring
isomorphism from $E_2$ on.

Frontmatter changes: the dependency on
`lem-spectral-sequence-subquotient-and-local-lifting-calculus` was deleted and
the misused citation removed; `deps` is now
`[thm-cohomological-atiyah-hirzebruch-spectral-sequence, thm-cellular-approximation-for-maps-of-cw-pairs, def-exact-couple, def-skeletal-filtration-for-generalized-cohomology]`.
The source list is Dugger, Miller and Ji with the locators in section 4.

Two corrections beyond the escalated clause were made while checking the text
as written:

* [F3] previously said that the induced page products *are* "the pairing of
  filtering towers of Dugger §3.1". It now states what each source contains
  (Dugger's tower pairing and diagonal-case ring isomorphism for a ring
  spectrum; Miller's list of page properties for the cohomological case,
  together with his remark that the construction from a CW filtration "requires
  us to choose a skeletal approximation of the diagonal"), and only then
  applies the standard multiplicative structure to the pairing constructed in
  steps 1.1–3.1. The Source notes record that neither source states the
  cohomological AHSS of an abstract theory with external-product data verbatim.
* Step 7.2 and the Source notes had explained the disappearance of the witness
  on $E_2$ by "$z$ is not a $d_1$-cycle". That is wrong: $d_1z=0$ because
  $E_1^{2,0}=h^2(X,X)=0$, and $z$ is a $d_1$-**boundary** (up to sign,
  $z=d_1a$). The corrected text says that $z$ and $\mu_1(a,z)=2z$ vanish in
  $E_2$, that $a$ is not a $d_1$-cycle, and that
  $E_2^{1,0}=H^1(X;\mathbb Z)=0$, so the failure is invisible from $E_2$ on.
  The arithmetic $2z\neq4z$ in $E_1^{1,0}$ is untouched.

### Theorem

The Statement now claims multiplicativity **from the second page on**: the
first-page pairing, its Leibniz rule and the descent to $E_2$ are stated as
such, the ring products, the derivation identity
$d_r(xy)=d_r(x)y+(-1)^{p+q}x\,d_r(y)$, $E_{r+1}\cong H(E_r,d_r)$ as rings and
the cup-product identification of the $E_2$ product (hence independence of the
diagonal from $E_2$ on) are asserted from $E_2$ on, and the theorem records
that the first page "carries the pairing and its Leibniz rule but is not a ring
in general", citing the lemma's witness. Fact [A3] was rewritten accordingly;
steps 1.1, 1.2, 2.1 and 3.1 and the Source notes were synchronized, and Dugger
was added to the source list for the $E_2$-on structure.

### Second-order draft consumers (checked, not changed)

Two further draft items cite the theorem:
`lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions`
([A4]: "The $K$-AHSS is multiplicative, its differentials are derivations and
its stable page is the associated graded ring") and
`ex-complex-k-ahss-for-real-projective-space` ([A3]: collapse determines only
the associated graded). Both use exactly the $E_2$-on structure that the
repaired theorem still supplies and neither uses an $E_1$ ring, so no downstream
edit and hence no additional impact licence was needed.

## 3. Artifacts changed

| Artifact | Change |
|---|---|
| `items/lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss.md` | Statement (a)/(b)/(c), [F3], steps 4.1–8.1, step 7.2 witness, Source notes, deps, sources |
| `items/thm-multiplicative-ahss-for-a-multiplicative-generalized-theory.md` | Statement, [A3], steps, Source notes, sources |
| `research/phase-2-remaining-27-batch-9.pages.json` | both manifest entries: deps, statement, proof_plan, sources.references (two stale Ji locators and a mistyped Miller URL corrected) |
| `research/phase-2-remaining-27-batch-9.proof-contracts.json` | citations/derivations regenerated for both items; stale boundary evidence rewritten; the lemma's pre-repair `risk_review` (which attests to the pre-repair bytes) removed |
| `research/phase-2-remaining-27-proof-contracts.json` | the same two entries synchronized |
| `research/phase-2-remaining-27-batch-9.coverage.json` | Ji row corrected to the negative §1.3 remark; new Dugger and Miller source entries with harvested contents and fetch stamps |
| `research/phase-2-remaining-27-step7-owner-prerequisite-repairs.jsonl` | two owner licence rows appended (exact hashes in section 5) |
| `research/phase-2-remaining-27-cross-batch-dependencies.json` | refreshed by `tools/frontier-dependency-ledger.mjs` after the edits; neither item occurs in a batch input, so no input row changed |

Not touched: published items, judge and adjudication ledgers, terminal
resolutions, queues, pass stamps, engine state, `tools/`, and groups A, C, D, E.

## 4. Sources read

* Daniel Dugger, *Multiplicative structures on homotopy spectral sequences II*,
  https://pages.uoregon.edu/ddugger/multb.pdf — §2.2 (singular-cohomology sign
  conventions), §3.1 (the pairings
  $(A\times B)/(A\times B)_{q+t-1}\to A/A_{q-1}\wedge B/B_{t-1}$ and
  $(A\times B)_{q+t}/(A\times B)_{q+t-1}\to A_q/A_{q-1}\wedge B_t/B_{t-1}$
  and the induced pairing of spectral sequences), §3.3 (the $E_1$/$d_1$
  identification for CW skeleta) and Theorem 3.4 with its proof (the Koszul
  sign $(-1)^{sq}$ and, in the diagonal case, "there is a natural isomorphism
  of rings $\bigoplus_{p,q}E_2^{p,q}(A,E)\cong\bigoplus_{p,q}H^q(A;E_{-p-q})$"),
  printed pp. 2–5 of the 19-page paper. The paper proves the homological case
  for a ring spectrum.
* Haynes Miller, *MIT 18.906 Algebraic Topology II*, Lecture 29,
  https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
  — printed pp. 100–101: the list of page properties (commutative bigraded
  algebras, $d_r(xy)=(d_rx)y+(-1)^{|x|}x(d_ry)$, $E_{r+1}\cong H(E_r)$ of
  bigraded algebras, $E_2^{*,*}=H^*(B;H^*(p^{-1}(-)))$ of bigraded algebras,
  $F^sH^n\cdot F^{s'}H^{n'}\subseteq F^{s+s'}H^{n+n'}$,
  $E_\infty\cong\operatorname{gr}H^*$ of algebras), the remark that the
  construction from a CW filtration "requires us to choose a skeletal
  approximation of the diagonal", and his explicit refusal to justify the
  multiplicative behaviour further.
* Caleb Ji, *The Atiyah–Hirzebruch Spectral Sequence*,
  https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf — §1.3,
  printed p. 4: the AHSS as stated gives no information about multiplicative
  structure. This negative remark is why the lemma cites Ji only as a bound on
  what may be claimed, and why the old "Discussion following Theorem 1.4 and
  §3.1" coverage row could not stand.
* Library items read for the conventions the lemma uses:
  `thm-cohomological-atiyah-hirzebruch-spectral-sequence` (the exact couple
  $D_{p,q}=h^{-p-q-1}(X^{-p-1})$, $i$ restriction, $j$ the connecting map of
  the pair, $k$ the pair map, and the reindexing that gives
  $E_2^{p,q}=H^p(X;h^q(*))$ with $d_r$ of bidegree $(r,1-r)$),
  `def-exact-couple`, `def-skeletal-filtration-for-generalized-cohomology`,
  `lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients` and
  `lem-spectral-sequence-subquotient-and-local-lifting-calculus` (the deleted,
  misused dependency).

Both newly added sources carry fetch stamps written by
`node tools/source-fetch-check.mjs --coverage ... --stamp`: Dugger, 356115
bytes, sha256 prefix `eb35ac937eb07bd3`, 19 pages, at
`2026-09-21T03:44:47.134Z`; Miller, 1467813 bytes, sha256 prefix
`6fb68a6d53af20b4`, 162 pages, at `2026-09-21T03:44:47.247Z`.

## 5. Exact-hash licences

Appended to `research/phase-2-remaining-27-step7-owner-prerequisite-repairs.jsonl`
(rows 39 and 40), guard-form hashes with the whole `verification:` block
excluded.

| Item | Kind | Binding | Pre-Step-7 SHA-256 | Post SHA-256 |
|---|---|---|---|---|
| lemma | `owner-preflight-repair` | `found_via` = the lemma itself, `defect_id` = `phase-2-remaining-27-step7-b-075` | `b428551f92a638154247387e1e914db789e13c5eeb4a0b76a90bc33b94cfc2b2` | `e24d2e950f3163b648307649d2378e61f6a3a419e5b25b285e140907b6fcdc18` |
| theorem | `owner-impact-repair` | `found_via` = lemma, `dependency_path` = [lemma, theorem] | `78b3e1285cd702527421df5a7921440c6af59b6d21cbfd550c359e6b6e30a2d4` | `4d939bf9e1ed3f6062ffd91b3f8a6094d944e34920bbbc28d7ca9bf56adee6c8` |

Why this shape. The lemma's escalated defect was found and left unrepaired by
the Step-7 final adjudicator ("This is a draft-only mathematical finding, not a
published-supplier defect. No published ledger entry, new lemma, judge verdict
or pass stamp was created"), so there is no judge rejection of the escalated
bytes to license the edit; the lemma has no draft consumer with a fatal
adjudication either, which blocks the `owner-prerequisite-repair` route. The
guard's self-licensing kind is `owner-preflight-repair`, and the only closed
fatal defect-ledger rows for this item are
`phase-2-remaining-27-step7-b-075` (misused citation and unsupported
diagonal-independence step — the material this repair removes and replaces) and
`phase-2-remaining-27-5a-b-008` (the Leibniz rule misassigned to $k$, already
repaired). The row binds the repair to `phase-2-remaining-27-step7-b-075`. The
theorem needs its own licence because it is a separate item; its path root has
the baseline fatal licence from the judge adjudication for
`lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss`
(`confirmed_fatal`, item hash `b428551f…`, judge-adjudications row 310) and the
edge lemma → theorem is declared in the theorem's `deps`.

## 6. Validation

* `node tools/tsx-run.mjs tools/precheck.mts items/lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss.md`
  — `PASS` (direct); the theorem likewise passes precheck.
* `node tools/tsx-run.mjs tools/prosecheck.mjs <lemma> <theorem> --warnings` —
  2 files, 0 errors, 0 warnings.
* `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-9.proof-contracts.json --strict --items <lemma>,<theorem>`
  — 2/2 checked, 0 errors, 0 warnings; the same command on
  `research/phase-2-remaining-27-proof-contracts.json` — 2/2 checked, 0 errors,
  0 warnings.
* `node tools/coverage-checklist.mjs research/phase-2-remaining-27-batch-9.coverage.json`
  — 4 pages, 138 harvested results, 0 errors, 0 warnings.
* `node tools/source-fetch-check.mjs --coverage research/phase-2-remaining-27-batch-9.coverage.json`
  — 19/19 sources fetch-verified (2 newly stamped); the `--stamp` run recorded
  the stamps listed in section 4.
* `node tools/step7-guard.mjs --touches research/phase-2-remaining-27-touches.json --baseline pre-step7 --judge-ledger research/phase-2-remaining-27-judge.jsonl --adjudications research/phase-2-remaining-27-judge-adjudications.jsonl --scope research/phase-2-remaining-27-step7-scope.json --terminal-resolutions research/phase-2-remaining-27-step7-terminal-resolutions.jsonl --published-repairs research/phase-2-remaining-27-step7-published-repairs.jsonl --owner-prerequisite-repairs research/phase-2-remaining-27-step7-owner-prerequisite-repairs.jsonl`
  — 20088 items at baseline (2026-09-19T09:15:55.598Z), 695 changed, 695
  licensed, 0 created, 0 deleted, 0 errors, 0 warnings. The two appended rows
  are accepted and the lemma is in the changed set with no error.
* `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`
  — "refreshed and deduplicated"; no batch cross-batch input file names either
  item.
* `node tools/depcheck.mjs` — exit 0, "OK — no cycles, all references resolve,
  no draft items on published pages"; 20088 items (19002 published), 1196 pages,
  273 warnings, 0 errors; no line names the lemma or the theorem.
* `node tools/audit-manifest.mjs research/phase-2-remaining-27-batch-*.pages.json`
  — 9146 relationships over 1032 items in 15 batches, 0 defects; the lemma's new
  dependencies resolve as published-backward (`thm-cellular-approximation-for-maps-of-cw-pairs`,
  `def-exact-couple`, `def-skeletal-filtration-for-generalized-cohomology`) plus
  the in-run `thm-cohomological-atiyah-hirzebruch-spectral-sequence`. (Passing
  only the batch-9 manifest produces spurious `unresolved` rows for targets that
  live in batch 10; that is a tooling artefact of the single-batch invocation,
  not a finding.)
* `git diff --check` over every file listed in section 3 — clean (exit 0).
* Every changed JSON/JSONL file parses; the manifest, coverage and contract
  files still round-trip at their on-disk style
  (`json.dumps(..., ensure_ascii=False, indent=2)`), and the batch-9
  proof-contract file is now in the same two-space style as the unified file
  and as written by `tools/regen-contract-entries.mjs`.

The large raw diffs on the two proof-contract files are pre-existing: the
working tree already carried other batches' edits and a one-space convention for
part of the batch-9 file. A parsed comparison against `HEAD` shows that the
regeneration changed only the lemma's and the theorem's entries plus the
intentional boundary/risk-review edits above; no other contract entry differs
except for the run's own earlier writes.

## 7. Unresolved uncertainty (recorded, not hidden)

1. Whether an associative product can be made to start at $E_1$ for a *stricter*
   diagonal model (filtered coassociativity, a filtered differential-graded
   model, or a coherent homotopy-coherent diagonal) is not settled here. The
   failure above is an artifact of an arbitrary admitted $\Delta$ and disappears
   from $E_2$ on; the item therefore asserts only the standard page structure
   and does not claim that no stricter model exists.
2. Citation scope. Dugger's theorem is stated for the homotopy spectral sequence
   of a ring spectrum (homological case, dual to the cohomological statement
   used here), and Miller's list is stated for the cohomological spectral
   sequence of a fibration, with an explicit refusal to justify the
   multiplicative behaviour of the CW-filtration construction. Neither source
   states the cohomological AHSS of an abstract generalized cohomology theory
   with external-product data verbatim. The lemma therefore proves the
   first-page pairing, its Leibniz rule and the descent to $E_2$ from the stated
   hypotheses, and cites the standard multiplicative structure of a pairing of
   filtering towers only for the ring structure from $E_2$ on; the Source notes
   and the coverage rows say this in the same words. A reviewer who requires a
   source stating the cohomological AHSS verbatim would be asking for a further
   owner decision, not for a silent strengthening of this citation.
3. The ring structure from $E_2$ on is cited, not proved locally: a local proof
   would need the filtered/homotopy-coherent diagonal machinery that the
   escalated bytes lacked. This is the deliberate boundary of the repair.
4. The predicted pre-existing `reader-warning-fatal-licence-stale` error for
   `rem-choice-strength-ledger-baire-urysohn-stone-tychonoff` did not appear in
   this dispatch's guard run, which ended with 0 errors; that alert ledger is
   outside this dispatch's write scope and was neither inspected further nor
   edited.

## 8. Unrelated failures

`node tools/depcheck.mjs` reports 273 pre-existing warnings (dominated by
`cited-not-in-deps` rows across the library) and no errors; none names the lemma
or the theorem. The seven `b-leaf-content` errors listed in
`research/phase-2-remaining-27-owner-residual-ab.md` no longer appear in the
current tool output. No unrelated failure was introduced by this dispatch.
