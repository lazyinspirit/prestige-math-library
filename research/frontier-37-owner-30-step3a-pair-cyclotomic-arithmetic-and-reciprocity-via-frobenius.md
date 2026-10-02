# Step 3a scope review — cyclotomic-arithmetic-and-reciprocity-via-frobenius

- Run `frontier-37-owner-30` (batch 4), role alpha, label
  `step3a-pair-cyclotomic-arithmetic-and-reciprocity-via-frobenius-011422d20ed746be`.
- A page `cyclotomic-arithmetic-and-reciprocity-via-frobenius` (order 365.921,
  category `number-theory`, 21 manifest items).
- B page `cyclotomic-arithmetic-and-reciprocity-via-frobenius-examples`
  (order 365.922, 10 items); companion pointers A↔B consistent.
- Decision: **sufficient**, recorded as a non-owner review with
  `node tools/step3-decisions.mjs record-scope --run frontier-37-owner-30
  --page cyclotomic-arithmetic-and-reciprocity-via-frobenius --decision sufficient`.
  Receipt:
  `research/frontier-37-owner-30-step3a-review-cyclotomic-arithmetic-and-reciprocity-via-frobenius.json`.
- Scope only: this review decides whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval, and it
  edits no scaffold, item, plan row or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-37-owner-30-batch-4.pages.json` | Current A inventory (21 items) and B inventory (10 items): every statement, kind, `deps`, source locators, dependency level; page `requires`; companion pairing |
| `research/frontier-37-owner-30-batch-4.coverage.json` | Three source records (Milne v3.08; Conrad–Landesman Math 154; Reed Math 361 Lecture 9) with locators, 36 result-level dispositions, item destinations and fetch stamps |
| `research/frontier-37-owner-30-batch-4.notes.md` | Step-1 scaffold record: no plan/design conflict, the four local prerequisite additions, dependency and axiom audit, check results |
| `research/frontier-37-owner-30-batch-4.cross-batch-dependencies.json` (`[]`) plus a scan of all 30 batch manifests | No in-run edge enters or leaves this pair; the pair's 20 in-run `deps` all stay inside its own 31 items; no pair consumes its pages or items |
| `research/plan-number-theory-track.md` §NT-24 (lines 2019–2099), §7.11 (2598–2612), §7.14 (2677–2705) | Controlling prose design: role, required interface, exclusions, A/B tables, conventions, source locators |
| `research/plan-spec.json` rows 365.921/365.922 | Identity, order, kind, category, companion, `requires`; empty item lists, so the manifest controls inventory |
| `research/frontier-37-owner-30-scope-ledger.json`, `research/frontier-37-owner-30-drift-evidence.json` | Both pages owed in batch 4; declared `requires` `decomposition-inertia-and-frobenius`; 276-page prerequisite page closure, all published |
| `research/published-consumer-supplier-ledger.md` §18 (NT-24 A 17 / B 10 planned ids, zero published consumers) and §19 (Galois Algebra owns the cyclotomic structure; `rem-kronecker-weber` not a prerequisite; the abelian ramification corollary is withdrawn) | Role in the library and inventory reconciliation |
| Published pages: `library/number-theory/decomposition-inertia-and-frobenius.md`, `library/abstract-algebra/finite-fields-and-cyclotomic-extensions.md`, `library/number-theory/{number-fields-rings-of-integers-and-discriminants,prime-ideal-decomposition-ramification-and-the-different,quadratic-residues-and-the-legendre-symbol,quadratic-reciprocity-and-the-jacobi-symbol}.md` | All `status: published`; interface used by this pair (arithmetic-Frobenius coset and unique unramified Frobenius, order = residue degree, trivial-Frobenius splitting criterion, inertia group; cyclotomic polynomial/degree/Galois group/composita/unique quadratic subfield/factorisation modulo $q$) |
| Re-fetched sources `/tmp/alpha37-{milne,conrad,reed}.pdf` | Byte-for-byte match to the coverage stamps (see below); load-bearing arguments read at the stamped bytes |

## Inventory against the prose design

All 17 designed A items are present in design order with the designed kinds:
the conductor definition; ring of integers; discriminant; prime-power total
ramification; the prime-factorisation law ($e=\varphi(\ell^a)$,
$d=\operatorname{ord}_m(\ell)$, $g=\varphi(m)/d$, $edg=\varphi(f)$); the
ramification criterion; the conductor theorem; unramified decomposition;
complete splitting; Gauss-sum definition; Galois action; Gauss-sum square;
quadratic subfield; Frobenius-restriction identity; quadratic reciprocity; and
both supplements. All 10 designed B items are present in design order and kind
(nine examples plus the sign counterexample). No designed item was dropped,
renamed or re-kinded.

The four manifest additions are proof-local decompositions of designed
claims, each inside the sources the design already cites, and each placed
immediately before its consumers: `lem-prime-power-cyclotomic-integral-structure`
(Milne Prop. 6.2(b)–(d)), `lem-coprime-discriminant-compositum-integral-basis`
(Milne Lemma 6.5 and Remark 6.6(c); Conrad–Landesman Theorem 11.9),
`lem-monogenic-prime-factorisation-by-polynomial-reduction` (Milne Theorem
3.41, the route that replaces the published choice-qualified
ideal-factorisation supplier), and `lem-arithmetic-frobenius-on-a-cyclotomic-field`
(Milne Example 8.18). These are prerequisite splits, not scope expansion. The
design's zero-based ZF claim, the withdrawn
`cor-ramification-support-of-an-abelian-number-field`, and the excluded
Kronecker–Weber/Chebotarev/higher-reciprocity material are all absent from
the manifest, as designed.

The B page is a dependency leaf: every B `deps` entry is an A item or a
published item (`def-inertia-group-of-a-prime`), there are no A→B or B→B
edges, and nothing in the run depends on any B item. Convention checks against
the design: arithmetic Frobenius ($\zeta\mapsto\zeta^\ell$) throughout,
reduced indices ($f$ odd or $4\mid f$) in every ramification/decomposition/
conductor statement, signed field discriminant distinguished from the positive
ideal/different norm, and the Gauss-sum sign kept convention-dependent with
the B counterexample.

## Source coverage assessment

- `coverage-checklist --require-destination` on the owned coverage file:
  **1 page, 36 harvested results, 0 errors, 0 warnings** (re-run).
  `source-fetch-check`: **3/3 sources fetch-verified, 0 documented drops**.
- I re-downloaded all three sources and their SHA-256 prefixes match the
  coverage stamps exactly: Milne v3.08 `24b83c789a89f25a` (1,296,815 bytes,
  166 pp.), Conrad–Landesman `231296574f8fd357` (763,973 bytes), Reed
  `9bf0a31cfa75084c` (299,552 bytes). Cited spans read at those bytes:
  Milne Prop. 6.2 and its proof, Thm. 6.4 with Lemma 6.5 and Remarks 6.3/6.6
  (printed pp. 95–101), Examples 8.18–8.19 (pp. 143–144), and Theorem 3.41;
  Conrad–Landesman Thm. 11.6, Remark 11.7, Lemma 11.8, Thm. 11.9,
  Warning 11.10 and Examples 24.1/24.3; Reed Lecture 9 §§2–3 and the §4
  opening.
- Load-bearing statements match the manifest: Milne Thm. 6.4(b) integer ring,
  Thm. 6.4(c) exponent $\varphi(p^r)$ with residue degree from Example 8.18's
  order condition, Remark 6.6(a) the $2\cdot$odd exception, Remark 6.6(c) the
  general discriminant formula; Conrad–Landesman Remark 11.7 the exact
  reduced-index warning and Thm. 11.9 the coprime-discriminant compositum
  interface; Reed §§2–3 the definition, $\tau_p^2=p^*$, the unique quadratic
  subfield, $\mathrm{Frob}_q(\zeta_p)=\zeta_p^q$ and
  $(p^*/q)=(q/p)$.
- Adversarial check of the design's correction: Milne Example 8.18 states
  “if $p\mid n$ then $p$ ramifies”, which is false at $n=6$, $p=2$; the
  scaffold's reduced-index form (conductor $n$, or $n/2$ when
  $n\equiv2\bmod4$) is the correct standard statement and is what the manifest
  formalises ($\mathbb Q(\zeta_6)=\mathbb Q(\zeta_3)$, discriminant $-3$,
  $2$ unramified).
- Both declines are correct and specific: Chebotarev (outside the pair; the
  pair treats the Frobenius of a specified unramified prime) and the analytic
  Gauss-sum sign under a fixed embedding (§4; not needed for the square or the
  reciprocity comparison, and its non-canonicity is the B counterexample's
  subject).
- Observation, no scope consequence: the plan's auxiliary treatments
  (Stevenhagen Chs. 3/8, UCSB 225A Lecture XVII, plan §§7.11/7.14) were not
  re-harvested at run level. Their designated content — quadratic/cyclotomic
  number rings and the Frobenius symbol — is fully covered by the three
  verified treatments above, and every designed result has run-level backing.

## Role in the library

The pair is NT-24: it requires only `decomposition-inertia-and-frobenius`
(published), whose inventory supplies the decomposition/inertia definitions,
the unique unramified Frobenius element, the order-equals-residue-degree
theorem and the trivial-Frobenius splitting criterion this pair consumes. Its
other suppliers are published GA-3/NT-2/NT-3/NT-19–NT-21 items (30 resolved
published `deps`, 0 unresolved). The pair sits after NT-23 in the pathway,
has no in-run consumers and no published consumers (§18: direct 0, transitive
0), so its B page being a leaf is compliant. The build-level record and the
published ledger agree with the manifest on title, order, kinds and the
$2\cdot$odd-avoiding conventions.

## Observations for the owner/authoring stage (not scope findings)

- Axiom budget: the design claims the arguments are finite ZF algebra; the
  batch-4 notes record that 26 of 31 items presently inherit
  `def-axiom-of-choice` through older published proof chains, and that the
  run avoids the ZF-defective published
  `thm-number-field-integral-ideal-factorisation-in-zf`. This is a recorded
  proof-cost/ledger matter, not an omitted topic.
- Dependency annotations to reconcile at authoring: the designed proof of
  `thm-conductor-of-a-full-cyclotomic-field` compares ramification indices in
  an inclusion, for which the published tower statement
  `thm-decomposition-and-inertia-in-towers` is the natural supplier but is not
  listed in the item's `deps`. Flagged for the author's dependency audit;
  scope is unaffected.
- The B example `ex-arithmetic-of-q-zeta-five` partially overlaps the
  published `ex-frobenius-in-a-small-cyclotomic-field` on the behaviour of 2;
  the new example is broader (ring, discriminant, ramification of 5, splitting
  of 11) and load-bearing for its page, so no duplication remedy is proposed.

## Uncertainty

I verified the load-bearing statements and all pair-critical conventions
directly at the stamped source bytes, but did not re-read every one of the 36
harvested rows line-by-line (e.g. Conrad–Landesman Lemmas 10.5–10.6 and
12.2–12.3, which the notes treat as inline support), nor the two auxiliary
plan sources not re-harvested at run level (UCSB 225A Lecture XVII;
Stevenhagen Chs. 3/8). Nothing found suggests an omitted result or an
inadequate definition/example set; the uncertainty is limited to those
unre-read auxiliary spans.

Decision: **sufficient** — the planned definitions, results and examples
cover the intended subject of cyclotomic arithmetic and reciprocity via
Frobenius, with verified source backing and consistent library placement. No
enrichment or merger is needed; the owner may proceed.
