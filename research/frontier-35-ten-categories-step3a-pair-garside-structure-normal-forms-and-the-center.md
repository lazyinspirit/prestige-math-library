# Step 3a scope review — garside-structure-normal-forms-and-the-center

- Run: `frontier-35-ten-categories` (batch 15), role alpha, label
  `step3a-pair-garside-structure-normal-forms-and-the-center-7dee0d5b15f135f6`.
- A page: `garside-structure-normal-forms-and-the-center` (order 741, category
  `braid-groups`, 24 planned items: 4 definitions, 12 lemmas, 6 theorems,
  1 corollary, 1 proposition).
- B page: `garside-structure-normal-forms-and-the-center-examples` (order 742,
  4 planned items: 3 examples, 1 counterexample), companion pointer A↔B
  consistent in both manifests and both `research/plan-spec.json` rows.
- Decision: **sufficient**, recorded with
  `node tools/step3-decisions.mjs record-scope --run frontier-35-ten-categories
  --page garside-structure-normal-forms-and-the-center --decision sufficient`.
  Receipt: `research/frontier-35-ten-categories-step3a-review-garside-structure-normal-forms-and-the-center.json`
  (non-owner review, bound to the current scope hash).
- Scope only. This review decides whether the planned definitions, results and
  examples cover the intended subject; it is not item or proof approval, and it
  edits no scaffold, item, plan row, coverage row or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-35-ten-categories-batch-15.pages.json` | Current A inventory (24 items) and B inventory (4 items) with every title, proof strategy, `deps` and page `requires`; companion pairing |
| `research/frontier-35-ten-categories-batch-15.coverage.json` | The A page's 3 source records and 26 disposed rows (10 GM, 8 Birman–Brendle, 8 Dehornoy) with locators, item destinations, out-of-scope reasons and fetch stamps |
| `research/frontier-35-ten-categories-batch-15.notes.md` | Step-1 construction record: the BG-1/BG-6 seam, the closed "conditional-lcm" circularity, the 5 local additions, the Δ-word convention note, dependency traversal, the two reported published defects |
| `research/frontier-35-ten-categories-batch-15.cross-batch-dependencies.json` (`[]`) and `research/frontier-35-ten-categories-cross-batch-dependencies.json` (no edge mentions this pair) | No in-run supplier/consumer edge touches the pair |
| `research/plan-braid-groups-track.md` BG-7 (lines 393–433; summary line 45; binding-ownership lines 59–68) | Controlling prose design: role, boundary, 19 designed A rows in design order, 4 designed B rows, per-row content column and source locators |
| `research/plan-spec.json` rows 741/742 and consumer rows 745/747 | Page identity/order/kind/category/companion/`requires`; empty item lists, so the manifest controls item order; planned consumers |
| `research/frontier-35-ten-categories-drift-evidence.json` entry 23 and `research/frontier-35-ten-categories-alpha-step1-drift.md` lines 155–159 | Drift verdict `no-drift`; 108-page declared prerequisite closure containing `braided-and-symmetric-monoidal-categories`, `free-groups-and-presentations` and `conjugacy-and-simplicity-in-the-symmetric-groups` |
| `research/frontier-35-ten-categories-owner-authoring-direction.md`, `…-deferred-pairs.json`, `…-deferred-items.json` | No binding owner direction, deferral or item-level removal names this pair |
| Published suppliers: `items/def-braid-group-by-the-artin-presentation.md`, `items/thm-adjacent-transpositions-generate-the-symmetric-group.md`, `items/thm-reduced-words-form-the-free-group.md` and their library pages | Dependency availability and publication status |
| `research/published-consumer-supplier-ledger.md` | Current dispositions of the pair's published suppliers (line 30623: `thm-reduced-words-form-the-free-group` carries a 2026-09-11 bounded clear; the other two have no ledger row) |
| Freshly fetched `/tmp/f35b15-gm.pdf`, `/tmp/f35b15-bb.pdf`, `/tmp/f35b15-dehornoy.pdf` | Locator re-verification at the exact bytes the coverage stamps: sha256 prefixes `8fef987df3601d1e`, `22f52d9961a3f0fc`, `f33620adecd8e5cb` — all three match byte-for-byte |

## Inventory against the prose design

All 19 designed A rows are present, in design order, with the design kinds and
the design subject: positive-braid monoid and homogeneous length, cancellativity,
left/right divisibility, atomic complements, positive gcd/lcm lattice, Δ and
simple braids, Δ index reversal, Δ-power multiples, Ore fraction group, lattice
orders on $B_n$, permutation lifts of simple braids, left Garside normal form
uniqueness, word-problem decidability, torsion-freeness, the central-positive-braid
lemma, the centre theorem for $n>2$, and the $B_2$ exception. All 4 designed B
rows are present, in design order, with kinds `example`/`counterexample`. No
designed claim was dropped, renamed, re-kinded or weakened.

The 5 manifest items beyond the design are local prerequisites of designed
claims, each placed before its consumers and each named in the batch notes:

- `def-artin-right-complements-and-word-reversing` and
  `lem-artin-right-complements-satisfy-the-cube-condition` (Dehornoy et al.
  Example 4.4/(4.5), Definition 4.14, Example 4.20) — the machinery the design
  cites for the cancellation step;
- `lem-artin-positive-word-reversing-is-complete` (Dehornoy et al. Proposition
  4.16, Proposition 4.51, Appendix Lemma II.4.62) — the design's cancellation
  route needs this criterion stated and proved in-page;
- `lem-each-artin-atom-divides-delta-on-both-sides` (GM §4, p. 27) — factors
  $\Delta=\sigma_iR_i$ used by the Δ-power-common-multiple step;
- `lem-reduced-adjacent-transposition-words-have-well-defined-positive-lifts`
  (Dehornoy et al. Chapter IX §1) — the type-$A$ reduced-word statement the
  design requires in place of an imported Coxeter theorem.

Boundary clauses of the design are preserved. The centre theorem is stated for
$n>2$ with $B_2$ as a separate proposition (never folded into the theorem);
left and right divisibility and the two orders are kept distinct (the B page
exhibits $a\wedge_Lb\ne a\wedge_Rb$); "simple" is defined as a left divisor of
$\Delta$ and the coincidence of left/right divisor sets is proved, not built
into the definition; the general Garside-group axioms, the conjugacy problem and
summit sets are excluded, each with a specific recorded reason in the coverage
file. The design's conditional-lcm gap (general positive lcms cannot be assumed
before common multiples exist) is closed in the owned order: explicit atom
factors, Δ index reversal, common Δ powers, then unconditional gcds/lcms.

## Source coverage assessment

`coverage-checklist --require-destination` on the batch coverage file reports
2 pages, 39 harvested rows, 0 errors, 0 warnings; `manifest-deps` on the batch
manifest reports 42 items, 0 errors. I re-read the load-bearing passages in the
three stamped full texts:

- GM, *Basic results on braid groups* (45 pp.): §4 printed pp. 26–29 —
  $B_n^+$ and homogeneous length, atom lcms $\sigma_i\vee\sigma_j$, Garside's
  cancellativity, induction on length giving unique gcds/lcms for all positive
  pairs, $\Delta=\sigma_1(\sigma_2\sigma_1)\cdots$, $\sigma_i\Delta=\Delta\sigma_{n-i}$,
  $\Delta^2$ central, $a\preccurlyeq\Delta^m$ and $\Delta^m\succcurlyeq a$,
  Ore embedding $B_n^+\hookrightarrow B_n$, extension of the partial orders to
  $B_n$, the unique $\Delta^pA$ form with maximal $p$, and the EliRifai–Morton
  greedy left normal form $a_i=(\cdots)\wedge\Delta$ with
  $(a_ia_{i+1})\wedge\Delta=a_i$; §4.2 Proposition 4.1 (torsion-free via
  $d=1\wedge x\wedge\cdots\wedge x^{n-1}$); §4.3 Theorem 4.2 ("if $n>2$, the
  centre of $B_n$ equals $\langle\Delta^2\rangle$") with the even/odd exponent
  propagation along the connected type-$A$ graph, and the preceding sentence
  "$B_2\simeq\mathbb Z$, so the centre of $B_2$ is equal to
  $\langle\Delta\rangle=\langle\sigma_1\rangle$".
- Birman–Brendle, *Braids: A Survey*: §5.1 (G1)–(G6), printed/PDF pp. 61–64 —
  positive monoid embedding and homogeneous length (G1), Δ and
  "the square of $\Delta_n$ (a full twist of all the braid strands) generates
  the infinite cyclic center" with the index-reversing automorphism (G2),
  complements $\Delta=L_i\sigma_i=\sigma_iR_i$ and $\Delta^rT$ reduction (G3),
  maximal exponent $\inf$ (G4), coincidence of left and right divisor sets of
  Δ (G5), $n!$ permutation braids in bijection with endpoint permutations and
  the unique left greedy normal form (G6). Note: (G2)'s "infinite cyclic center"
  phrasing does not exclude $n=2$; GM and the scaffold treat $B_2$ separately,
  which is the correct reading.
- Dehornoy et al., *Foundations of Garside Theory*: Chapter II §4.1 (printed
  pp. 63–68) — right-complemented presentations, the braid complement (4.5)
  $\theta(\sigma_i,\sigma_j)=\varepsilon,\ \sigma_j,\ \sigma_j\sigma_i$ for
  $i=j$, $|i-j|\ge2$, $|i-j|=1$, Lemma 4.6's extension $\theta^*$,
  Definition 4.14's cube condition, Proposition 4.16 (i)–(iii)
  (left-cancellativity, conditional right-lcms, $u=v$ iff both reverse
  complements are empty) and Example 4.20, which checks exactly the
  consecutive/distant-triple patterns and records that the sharp cube condition
  fails for $n\ge4$; §4.4 (printed pp. 79–83, PDF pp. 95–99) — the right-reversing
  definition, Proposition 4.51 (completeness from the cube condition on
  generators), Lemma 4.55 and the derivation of Proposition 4.16; Appendix
  Lemma II.4.62 (printed pp. 659–661, PDF pp. 675–677) — the Noetherian nested
  induction that proves completeness; Chapter IX §1 (printed pp. 438–443) —
  Lemma 1.22 (reduced words give a well-defined injective lift $W\to B^+$
  that is a section of $\pi$), Proposition 1.29 ($(B^+,\Delta)$ is a Garside
  monoid, Δ is the right-lcm of the atoms, $\operatorname{Div}(\Delta)$ is the
  smallest Garside family) and Lemmas 1.30–1.31 (divisors of Δ = image of the
  lift; left and right divisors coincide).

Every clause the pair plans to prove is present at the recorded locator, and
the three source records together cover both a lecture-note treatment and a
monograph treatment of the reversing machinery, as the sources rule requires.

Two coverage-record observations, both non-blocking:

1. Birman–Brendle §5.3 ("The new presentation and multiple Garside structures",
   printed pp. 69–71, the Birman–Ko–Lee dual structure) has no disposition row
   in the coverage file — neither `included`, `deferred` nor `out-of-scope` with
   a reason. The design bounds the pair to the classical structure
   (`braided-and-symmetric-monoidal-categories` supplies the classical Artin
   presentation; the §5.2 row already records that the general Garside-group
   axioms are out of scope), and no planned claim or consumer needs the dual
   structure, so this is a source-map gap, not a subject omission. Recommend the
   owner's reconciling role add an explicit §5.3 out-of-scope row.
2. Coverage rows name 15 of the 24 A items; 9 designed items share a row with a
   neighbouring item (e.g. homogeneous length and divisibility under the
   "§4 positive monoid"/"§4 positive gcd/lcm lattice" rows, the word-problem
   corollary under the "§4.1 left greedy normal form" row, the $B_2$ exception
   under the "Theorem 4.2 center and B2 exception" row). The design table gives
   a per-row locator for each of these items, and `source-backing` passed, so
   nothing is unbacked; Step 3b should confirm each item's source line while
   authoring.

## Role in the library

- Prerequisites: the single declared `requires` page,
  `braided-and-symmetric-monoidal-categories`, is published and owns
  `def-braid-group-by-the-artin-presentation`. The drift closure for this page
  (108 pages) contains it and also contains `free-groups-and-presentations` and
  `conjugacy-and-simplicity-in-the-symmetric-groups`.
- Declared dependencies: 24 distinct ids across the pair — 21 are the pair's own
  items, 3 are published (`def-braid-group-by-the-artin-presentation`,
  `thm-adjacent-transpositions-generate-the-symmetric-group`,
  `thm-reduced-words-form-the-free-group`). None is missing, none is a B-item,
  none is a Recorded/`proved_here: false` item, and none points forward in page
  order; the three published items this pair declares were re-checked at
  frontmatter level (all `status: published`, no `proved_here: false`). The 5
  added items are dependencies of designed items only through the pair.
- No in-run consumer: no other batch-15/16/17 page declares this A page in
  `requires`, and no in-run item outside the pair depends on any of the pair's
  28 items; the empty batch cross-batch input matches the run-wide ledger.
- Planned consumers (outside this run, `plan-spec`): `the-burau-representations`
  (745) and `lawrence-krammer-bigelow-and-linearity` (747) both require this A
  page; the interfaces they need — Δ and its index reversal, simple/permutation
  factors, the left normal form and the full twist $\Delta^2$ generating the
  centre — are exactly what the A page supplies. The later BG-8 example
  `ex-the-full-twist-acts-by-boundary-conjugation` defines "the full twist" as
  $(\sigma_1\cdots\sigma_{n-1})^n$ and identifies it with $\Delta^2$; this page
  should therefore fix "full twist $:=\Delta^2$" in the centre theorem's
  statement (the B page verifies $(\sigma_1\sigma_2)^3=\Delta^2$ only for
  $n=3$, and the general-n identity belongs to BG-8).
- The B page is a clean leaf: every B dependency is an A item, there are no
  A→B edges, and no B id is used as a dependency anywhere in the run.
- The pair's published suppliers are not defective-dependent: the two defects
  reported in the batch-15 notes (`thm-the-two-strand-braid-group-is-infinite-cyclic`
  proof step 2.1; `thm-the-symmetric-group-has-the-coxeter-presentation` step 1.1
  citing [F1]) are not dependencies of this pair, and the scaffold deliberately
  replaces the design's Coxeter-presentation/surjection supplier edges with the
  local exchange lemma plus `thm-adjacent-transpositions-generate-the-symmetric-group`.

## Findings for the owner (no scope omission, no merger proposed)

1. **Batch-15 manifest contracts lack stated claims.** All 42 batch-15 items
   (including this pair's 28) carry only `id`, `kind`, `title`, `strategy`,
   `deps`: 0/42 have `statement`, `sources` or `provenance`, and the key is
   `strategy` rather than the `proof_strategy` used elsewhere. Every other batch
   in this run carries all three fields for every item (597/597 items in the
   other 15 batches; run total 597/639). Consequences: (a) the scope receipt's
   `sha256` binds ids/kinds/titles only, so the claim text is not frozen by this
   decision; (b) Step 4's splice will hydrate thinner item objects into
   `plan-spec.json`; (c) Step 3b must author the claims from the design's
   "exact content" column, which is present and specific for all 23 designed
   rows. Owner options: accept the design-plus-strategy contract as the binding
   scope (my review was performed on that basis and found the subject fully
   covered), or direct an enrichment of the 28 items with statements and
   per-item sources before authoring — an enrichment changes the scope hash, so
   it requires re-review and an owner `proceed` for the resulting scope. I did
   not edit the manifest.
2. **"Full twist" terminology.** Fix full twist $:=\Delta^2$ in the centre
   theorem, and consider stating that $\langle\Delta^2\rangle$ is infinite
   cyclic (immediate from the page's own torsion-freeness together with
   $\Delta^2\ne1$), so the BG-8/BG-9 consumers inherit an unambiguous interface.
3. **Degenerate centre cases.** The theorem covers $n>2$ and the proposition
   covers $n=2$; $B_0,B_1$ are trivial by the published Artin definition but are
   not mentioned. A one-line remark would close the domain; no mathematical
   content is missing.
4. **Definitional hygiene for Step 3b.** The page uses the left/right orders
   $\preccurlyeq_L,\preccurlyeq_R$ and their lcm/gcd $\wedge_L,\vee_L,\wedge_R,\vee_R$;
   the pair should define these where first used (the published lattice items
   cover poset meet/join, not monoid lcm under left/right divisibility). The
   exchange/lift lemma also uses inversion number, $w_0$ and permutation
   notation, which the published symmetric-group items own.
5. **Outstanding reconciliation, not a scope issue.** The two published defects
   in the batch-15 notes are not yet in
   `research/published-consumer-supplier-ledger.md`; neither is a dependency of
   this pair, so they do not block it. The pair's three published suppliers have
   no open ledger row (the free-group item carries a bounded clear at line
   30623).

## Uncertainty statement

I verified the pair inventory against the design row by row, the page identity
and companion pointers against `plan-spec`, the dependency availability and
prerequisite closure, the (empty) in-run consumer interface, the B-leaf shape,
the coverage rows and fetch stamps, and the load-bearing source passages listed
above at the recorded locators. I did not re-derive the 24 proof strategies and
did not audit the proofs of the published suppliers; that is Step 3b/Step 5
work. The only substantive limitation is finding 1: because no item statement
exists in this batch's manifest, my coverage judgement rests on the design's
exact-content column, the item titles and the detailed proof strategies, not on
verbatim claims. That limitation is reported to the owner with its consequences;
the mathematics of the intended subject is covered, with no omitted topic,
result or example that would need an enrichment or a pair merger.

## Decision

**sufficient** for the pair. The planned definitions, results and examples
realise all 19 designed A items and all 4 designed B examples, the 5 additions
are source-backed prerequisites of designed claims, the three independent
treatments cover every clause at the promised locators (classical Garside
structure, cancellation/reversing, normal form, word problem, torsion and the
centre with the $B_2$ exception), the single declared prerequisite page and all
three published item suppliers are available, and the pair's role as the
supplier of the Garside/normal-form/centre interface to the later Burau,
Lawrence–Krammer–Bigelow and Artin-action pages is preserved. No pair merger is
proposed and no topic is named as omitted. The manifest-contract finding (1)
and observations (2)–(5) are for the owner and the pair's Step 3b author; they
do not change the scope verdict.
