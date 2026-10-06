# Step 3a scope review — `primitive-ideals-and-duflo-theorem`

- **Run:** `frontier-39-analysis-30` (batch 24) · **role:** Alpha, Step 3a scope review · **date:** 2026-10-05
- **A page:** `primitive-ideals-and-duflo-theorem` (order 510.019) · **B page:** `primitive-ideals-and-duflo-theorem-examples` (order 510.02)
- **Decision:** `sufficient` for the A page. Scope hash at recording:
  `7b24199cdbd9bd507bbb6dacd2d88d175a1a999bd77d5081e4b309e0f3c1a56a`
  (`tools/step3-decisions.mjs record-scope`, review receipt
  `research/frontier-39-analysis-30-step3a-review-primitive-ideals-and-duflo-theorem.json`).
- **Inputs read:** `research/frontier-39-analysis-30-batch-24.pages.json` (2 pages, 20 items: 15 A + 5 B),
  `.coverage.json` (8 source entries, 41 harvested rows), `.notes.md`,
  `.cross-batch-dependencies.json` (`[]`); `research/plan-representation-theory-lie-track.md`
  §RL-10 and its companion matrices and held-target notes (lines 119, 525–547, 616, 785–825,
  1158–1193, 1715, 1943); `research/plan-algebraic-geometry-track.md` binding paragraph
  (lines 3436–3447); `research/plan-spec.json` entries for both pages; the published item
  files of all consumed suppliers. No owner record exists for this pair (no
  `research/frontier-39-analysis-30-step3a-owner-*.json`, no run owner-authoring-direction file).

## 1. Scope vs. the prose design

The controlling prose is RL-10, "Primitive ideals and Duflo's theorem". Its **A-page role** is
explicit: *"Develop only the algebraic annihilator and central-reduction prefix. Duflo surjectivity
and its localisation architecture are prose targets, not planned items … No later RL proof may cite
those targets as established."* Its table commissions 11 A ids and 5 B ids; the AG-track paragraph
binds the page's `requires` list and records that *"The Duflo localization theorem remains a
prose-only held target, so no nonexistent D-module supplier is asserted."*

Programmatic design/manifest diff (extracting the ids of the RL-10 tables):

- 16/16 design ids are scaffolded; `design-only = []`.
- `manifest-only` is exactly the four disclosed local lemmas:
  `lem-dixmiers-lemma-for-countable-dimensional-algebras`,
  `lem-adjoint-action-preserves-the-associated-graded-of-a-two-sided-ideal`,
  `lem-every-central-character-of-the-enveloping-algebra-arises-from-a-weight`,
  `lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters`.
  Each is consumed by a design row (respectively `prop-a-primitive-ideal-determines-a-central-character`;
  `prop-associated-variety-of-a-primitive-ideal-is-conical-and-g-invariant`; the corollary
  `cor-primitive-ideals-are-partitioned-by-dot-orbit-central-character`; the B example
  `ex-primitive-ideals-of-usl2-at-a-generic-central-character`), and each is absent from the
  published library under its own name (searched `items/`): they are prerequisites, not padding.
  In particular the published `cor-central-characters-are-dot-weyl-orbits` only compares given
  `χ_λ, χ_μ` (statement read), so the added "every central character arises from a weight" lemma
  is genuinely needed before an arbitrary primitive ideal can be placed over a dot orbit.
- The A page's `requires` is exactly the seven published pages fixed by the AG-track paragraph
  (RL-1, RL-2, RL-3 linkage, RL-4 blocks, RL-5 BGG reciprocity, DG-27 PBW, and the classical-affine
  interface); the B page requires only the A page. All seven page ids exist as published library
  pages (`library/**/<page>.md`); the A id itself is intentionally not yet published (frontier pair).
  Orders, companions and `plan-spec.json` agree.

**Held targets.** Duflo's Theorem 25.4, the Barbasch §2.1/Fadeev Thm 2.2/Stanciu Thm 1.1 statements
of Duflo surjectivity, the Kazhdan–Lusztig/Joseph fibre theory, the Borho–Brylinski nilpotent-orbit
theorem for associated varieties, and the whole localisation architecture are disposed
`out-of-scope` in the coverage with specific reasons, exactly matching the design holds. No item
consumes them and there is no dependency edge to any held target. Two prose allusions exist and are
recorded for honesty: `rem-highest-weights-can-have-the-same-primitive-ideal` and the B example
`ex-primitive-ideals-of-usl2-at-a-generic-central-character` name "Duflo surjectivity"/"Duflo
annihilator" while asserting only self-contained $\mathfrak{sl}_2$ content (distinct primitive
ideals over one central character; the generic central reduction being simple). They do not state
or use the held theorem as established.

## 2. Source coverage

Eight stamped source entries / six distinct documents; `source-fetch-check` (check mode, no network)
reports 8/8 fetch-verified, 8/8 resolved, 0 documented drops. I re-fetched three key documents and
matched the coverage's byte counts and `sha256_16` exactly, then read the decisive passages in the
extracted text:

| source | coverage stamp | re-fetch result | passage verified |
|---|---|---|---|
| Etingof, 18.757 full notes | 3494075 / 162 pp / `421fa52f61680e63` | same bytes and digest | §7.2 Lemma 7.2 (Dixmier, printed p.38); §14.1–14.2 (HC isomorphism and $U_\chi=U(\mathfrak g)/(z-\chi(z))$, printed pp.76–77); §18.1 "linear maps of finite type" (confirms the stale design locator); §22 "Projective functors – I", §22.1 projective θ-functors (printed pp.110–111); §24.2 Thm 24.4 / Cor 24.5 (pp.120–122); §25.1 Defs 25.1–25.2, Thm 25.4 + non-uniqueness note (pp.123–124) |
| Block, Adv. Math. 39 (1981) | 2389412 / 42 pp / `7342ea0aa0d0b649` | same bytes and digest | Introduction (pp.69–74): $U_s(c-\gamma)$ are precisely the minimal primitive ideals, the other primitive ideals have finite codimension $n^2$; §5.2 (pp.99–102): $U_{s,\gamma}$ simple except $\gamma=n^2+2n$, where it has a unique proper ideal of codimension $(n+1)^2$ |
| Gaddis, arXiv:2305.01609 | 330852 / 20 pp / `6643fe13d5946ea6` | same bytes and digest | §2: Joseph's criterion ($J(a)$ simple iff no pair of roots differs by a positive integer), the isomorphism $U_\lambda\cong J(a)$, Casimir $\Omega=4fe+h^2+2h$ |
| Barbasch, Fadeev, Stanciu | stamped in coverage | spot-checked section headings only | §3.3 (associated variety definition/invariance), §§2.6–2.7, introduction + disposal of §§2–7 |

Observed defects in the coverage record (none changes scope; no claim rests on the wrong locator):

1. **Design locator defect (already recorded by the batch notes; I confirmed it against the PDF).**
   The design cites "E757 §§18, 22, pp.92–95, 110–113" for the annihilator/primitive-ideal
   material. §18 is *maps of finite type / Duflo–Joseph*, §22 is *projective functors*. The scaffolded
   material is at §7.2, §14.2, §24.2, §25.1. Amend the design at the next design touch.
2. **One stale coverage locator (new).** The row backing
   `lem-every-central-character-of-the-enveloping-algebra-arises-from-a-weight` is recorded as
   "Section 22.1, printed pp.110–111 — infinite-dimensional characters are parametrised by
   $\mathfrak h^*/W$ and $U_\theta=U(\mathfrak g)/(\ker\theta)U(\mathfrak g)$ is the central
   reduction". §22.1 is projective functors; the parametrisation and the $U_\chi$ definition are
   §14.1–14.2 (HC isomorphism; printed pp.76–77). The item's proof uses the published HC theorem
   plus a local determinant-trick argument, so this is a locator-record repair, not a gap.
3. **Vogan citations without a coverage row or fetch stamp (new).** Four items cite
   *D. A. Vogan, The orbit method and primitive ideals for semisimple Lie algebras, CMS Conf. Proc.
   1986*: `lem-adjoint-action-preserves-the-associated-graded-of-a-two-sided-ideal`,
   `def-associated-graded-variety-of-a-two-sided-ideal`,
   `prop-associated-variety-of-a-primitive-ideal-is-conical-and-g-invariant`, and the B example
   `ex-associated-variety-of-a-finite-dimensional-simple-annihilator`. The paper is not in
   `batch-24.coverage.json`; its URL is live (HTTP 200, `application/pdf`, 26,643,076 bytes, 48 pp,
   checked 2026-10-05). The associated-variety content is independently covered by the stamped
   Barbasch §3.3 and Fadeev §§2.6–2.7 rows, so no harvested result is unbacked; the workflow rule
   "source-backed claims need recorded full-text retrieval" suggests either adding a stamped row or
   dropping/replacing the pointer.
4. **Eight items carry no per-item coverage row.** `def-annihilator-ideal-of-a-lie-algebra-module`,
   `prop-annihilators-of-simple-highest-weight-modules-are-primitive`,
   `def-central-reduction-of-the-enveloping-algebra`,
   `prop-verma-annihilator-contains-the-central-character-ideal`,
   `lem-adjoint-action-preserves-the-associated-graded-of-a-two-sided-ideal`,
   `cor-primitive-ideals-are-partitioned-by-dot-orbit-central-character`, and the two B rows
   `ex-associated-variety-of-a-finite-dimensional-simple-annihilator` (references Barbasch/Vogan)
   and `cex-an-intersection-of-two-primitive-ideals-need-not-be-primitive` (ai-generated, empty
   references). Six are definitional or elementary consequences of declared published suppliers;
   `coverage-checklist` passes structurally (0 errors; its only warning is the expected low yield
   13/34, explained by the design's held targets). If the Step-1 contract is read as "every item
   traces to a disposed harvest row", these eight need rows (e.g. §25.1 Def 25.2 covers the
   annihilator notion; §14.2 covers the central reduction). Recommended record repair only.

## 3. Prerequisites

- Declared-dependency transitive closure from the 20 batch-24 items: **71 nodes = 20 in-batch +
  51 published items; 0 unresolved ids; 0 cross-batch dependency edges.** Every published id
  resolves to an `items/*.md` file; the in-run supplier for the B page is the A page itself.
- Reverse scan: **no in-run page or item outside batch 24 consumes any batch-24 id or page**, so
  the pair is self-contained within the frontier (the design's zero-published-consumer declaration
  is consistent; future RL-11/Joseph–KL consumers are planned, not asserted).
- All seven `requires` pages are published. The closure actually consumes items from
  `harish-chandra-isomorphism-casimir-and-central-characters` (15 items),
  `verma-modules-and-shapovalov-forms` (2), `homomorphisms-between-verma-modules-and-linkage` (1),
  `lie-algebra-representations-enveloping-algebras-and-pbw` (1), and the classical-affine interface
  (4: the zero-locus/vanish/coordinate-ring prefix, as the AG paragraph states). The blocks and BGG
  pages are declared context with no item-level consumption — a `requires`-vs-use observation for
  Step 4, not an unmet prerequisite.
- Hypothesis matching checked for the four additions: Dixmier's lemma needs countable dimension
  (finite-dimensional $\mathfrak g$); the central-character proposition is stated for
  finite-dimensional complex $\mathfrak g$; the parametrisation lemma and the corollary carry
  semisimple $\mathfrak g$, Cartan, positive system and AC; the sl2 lemma and the B example are
  stated over $\mathfrak{sl}_2(\mathbb C)$ with the same AC; the associated-variety items carry
  finite-dimensional complex $\mathfrak g$ and the PBW filtration.
- The delicate sl2 criterion was re-derived against the fetched texts: with the declared generator
  $\Omega=ef+fe+\tfrac12 h^2$ (four times the library Casimir, whose eigenvalue is $\lambda(\lambda+2)/8$,
  so consistent) one has $fe=p(h)=\tfrac12(\chi(\Omega)-h-\tfrac12h^2)$ with roots
  $-1\pm\sqrt{1+2\chi(\Omega)}$; the double root occurs exactly at $\chi(\Omega)=-\tfrac12$ (the
  coalesced-root case, $\lambda=-1$, not finite-dimensional), and the exceptional finite-dimensional
  values are $\chi(\Omega)=\tfrac12 n(n+2)$ with roots $n$ and $-n-2$. Since Block's
  $c=4fe+h^2+2h=2\Omega$ has $n^2+2n=2\cdot\tfrac12 n(n+2)$, this matches Block §5.2 and Joseph's
  criterion in Gaddis §2 (no root pair differing by a positive integer). The previously recorded
  "coalesced-root" correction is therefore consistent, and the four added lemmas are the right
  local prerequisites.
- **Unmet prerequisites: none confirmed.** Uncertainty: the closure check follows declared `deps`
  only; an undeclared-but-published supplier used in a proof would be a Step-4/splice edge defect,
  not an unmet prerequisite, and none was spotted in the strategies of the four additions or the
  corollary. The batch's transitive-AC-carrier convention (flagged in the notes) is a contract
  question for the owner, not a missing claim.

## 4. Checks run (this review)

| check | result |
|---|---|
| `manifest-deps.mjs` batch-24 pages | 20 items, 0 normalized, 0 errors |
| `content-policy.mjs --manifest-only` | 20 scoped, 0 errors, 0 warnings |
| `coverage-checklist.mjs … --require-destination` | 2 pages, 41 results, 0 errors, 1 warning (low yield 13/34 A, explained) |
| `source-fetch-check.mjs` (check mode) | 8/8 fetch-verified, 8/8 resolved, 0 drops |
| `step1-decisions.mjs check` | 899/899 ready, closed |
| `item-dependency-levels.mjs check` | 899 items / 60 pages, no batch-24 error |
| design-vs-manifest id diff | design-only `[]`; manifest-only = the four disclosed lemmas |
| closure and reverse-consumer scans | 0 unresolved ids, 0 cross-batch edges, 0 outside consumers |
| independent re-fetch of Etingof / Block / Gaddis | byte counts and `sha256_16` match the stamps; decisive passages read |

## 5. Decision

**`sufficient`.** Against the controlling prose (RL-10), the pair covers the intended subject — the
algebraic annihilator, primeness, central-character, central-reduction, Verma-inclusion,
associated-variety and dot-orbit prefix — with the design's full 11+5 inventory plus four genuine
local prerequisites, and the B page supplies the intended finite checks and counterexamples. The
page title's "Duflo theorem" is deliberately prose-only per the design, and no item consumes the
held targets. Source coverage is stamped and re-verified; the prerequisite closure is complete.
The four coverage-record observations above (design/coverage locator corrections, the unstamped
Vogan pointer, missing per-item rows for eight items) are record repairs that do not change the
scope hash and do not block authoring; they are left to the owner/authoring lane.
