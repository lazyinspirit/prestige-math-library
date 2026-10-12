# Batch 23 — Level-One Fock Space and Residue Crystals

Run: `frontier-44-special-representation-examples-28`. Owned pair:
`level-one-fock-space-and-residue-crystals` (A, order 1576) and
`level-one-fock-space-and-residue-crystals-examples` (B, order 1577), category
`special-topics-in-representation-theory`. The scaffold holds **5 A items and 3
B items**, all recorded `ready`, with in-run dependency levels 14–23 on the A
page and 21–22 on the B page (no cycle). Construction is scaffold planning and
readiness, not authored-proof acceptance; Step 3 owns the proofs and the full
gate battery.

## Scope and governing texts

The owner direction
`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`
was read before constructing any item: all 24 planned pairs of the category are
retained with their claims, sources and proof obligations, suppliers before
consumers, no new pairs, no publication. The final-quantum-interface section is
the binding route decision for the QG side (QG2–QG5 normalizations; the
future-9/16 consumers must use the exact interfaces; lower and upper global
bases must not be conflated; the unrestricted general integral tensor-bar
statement is false and is not claimed here).

**Which design controls.** The two listed design locations were located and
read. `research/plan-quantum-groups-track.md` L507 lies in section 6
("Phase-2 boundary, published impact, and planned consumers"), whose sentence
"The only external planned consumers are KL-6 ... SYMR-10
`level-one-fock-space-and-residue-crystals` (QG-6) ..." fixes the *seam*: this
page consumes QG-6 and must not re-author the quantum affine relations, the
semi-infinite wedge construction or the Misra–Miwa crystal.
`research/plan-symmetric-group-representations-track.md` L45 is the SYMR-10 row
of the page table ("symmetric-group convention bridge to QG-6's
Fock/crystal/global-basis theory"), whose binding item inventory is the SYMR-10
section of `research/symmetric-group-planning/proposed-inventory.md` (4 A items,
3 B items). The **symmetric-group design controls the item inventory and the
symmetric-group convention content; the QG design controls the seam** (which
quantum facts must be imported and which must be left with QG-6). Both were
followed; the plan-spec controls page identity/order/requires only.

**Plan versus design.** `research/plan-spec.json` carries the two page shells
with `"items": []` for orders 1576 and 1577, so there is **no item-level
plan-versus-design conflict**: the design's inventory is the item source and the
plan's page objects (title, companion, category, orders, `requires`) are
preserved verbatim in the manifest. The plan gate (`validate-plan`) passes with
all 46 populated pages.

## Recorded deviations from the design (all conservative, none weakening)

1. **Local closure lemma added.** The design's item 2 compares the two reduced
   signatures "term by term"; that comparison is only a theorem once the node
   orders are related. `lem-level-one-node-order-and-conjugation-dictionary` is
   a new local item proving (i) for addable/removable nodes of one residue, the
   top-to-bottom order is the reverse of the column-increasing order and the
   content increases along it; (ii) the mirror relation between the two
   reductions; (iii) the conjugation order reversal. Everything else in the
   design is preserved verbatim in claim content.
2. **Item 2 made precise.** The design says "the Kashiwara arrows ... are
   exactly SYMR-9 good-node deletion and cogood-node addition". As stated
   without qualification this cannot hold literally: the QG-6 Fock crystal is
   realized on the $e$-*regular* labels (Leclerc Prop. 14, Misra–Miwa), the
   modular crystal on the $e$-*restricted* labels (Kleshchev Thm. 8.2(ii),
   Example 3.2(i)), and the two vertex sets are exchanged by conjugation with
   residue negation (design item 1's "transpose/sign conversion"). The item
   therefore states the agreement **through the conjugation dictionary**:
   $(\tilde e_i\lambda)'=\tilde e_{-i}^{\mathrm{Fock}}(\lambda')$ and
   $(\tilde f_i\lambda)'=\tilde f_{-i}^{\mathrm{Fock}}(\lambda')$, which is the
   exact content of "the arrows agree" and preserves the design's claim.
3. **Design item 3's $e=0$ clause.** Read as Kleshchev's $e=0$ (no non-trivial
   $e$-th root of unity) convention, where the defining inequalities are
   vacuous for $l=1$ (Example 3.2(ii)); the library's affine Cartan datum only
   exists for $e\ge2$, and the item says so.
4. **Extra dependencies, each a genuine use.** Two published definitions
   (conjugate partition; addable/removable nodes) on item 1/lemma 2;
   `def-cyclic-affine-type-a-cartan-datum` on item 1 for the weight lattice;
   `def-the-node-order-and-n-i-exponents-for-fock-space` on lemma 2 and the B
   example for the content order and exponents; `def-axiom-of-choice` where the
   AC-using batch-9 theorem is consumed; and
   `thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible` (batch-8
   QG-5) because the design's item 4 explicitly defines the dual coefficients by
   the perfect pairing.
5. **Residue index of the modular socle in James's labels.** Item 4(iii) records
   the index exactly: the sign twist $D^{\lambda'}=D(\lambda)\otimes\operatorname{sgn}$
   negates the Jucys--Murphy eigenvalue ($J_d$ acts on $\operatorname{sgn}\otimes V$
   as $-J_d$ on $V$), so in the $e$-regular (James) labelling the relevant functor
   is $E_{-i}$, where $-i$ is the residue of the node transposed to the deleted
   good node of the $e$-restricted label; the deleted node itself has residue
   $i$ in the restricted reading. This is the same residue negation as the
   conjugation dictionary and was checked on the $S_3$ example
   ($\operatorname{Res}\operatorname{sgn}=\operatorname{sgn}_{S_2}$, $J_3$ eigenvalue
   $2\equiv-1$, remaining node $(1,2)$ of $(2,1)$ of residue $1$).
5. **Axiom of choice.** Items 1, lemma 2, item 2 and the B example are
   choice-free. Item 4 (A theorem) and item 5 (definition) inherit AC exactly
   through `thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero`
   / `thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis`;
   the single use is identified and the choice-free route (Misra–Miwa Thm. 4.7,
   Fayers Thm. 2.1, Kleshchev Thm. 8.2(ii)) is recorded. No item reaches
   `deferred-set-theory-beyond-choice` through any proof or prerequisite path.

## Supplier findings recorded for the canonical ledger and Step 3

These are scaffold-level defects in **in-run suppliers** (batch-9 QG-6), not
published items; they do not block this pair because the affected clauses are not
load-bearing here, but the batch-9 crystal theorem must not be certified while
its printed rule contradicts its own module action.

1. `def-level-one-partition-fock-space-and-node-residues` (batch 9, level 13):
   the gloss "a partition is [...] $e$-restricted when no column has length $e$"
   is wrong; the correct equivalent is $\lambda_a-\lambda_{a+1}<e$ (no $e$ equal
   column *heights*, equivalently $\lambda'$ $e$-regular). Counterexample:
   $(1,1,1)$ at $e=3$ has a column of length $3$ but is $3$-restricted; $(2,1)$
   is $2$-restricted but has a column of length $2=e$. Consumer item 1 states the
   correct definition; the gloss must be repaired or deleted at Step 3.
2. `def-good-and-cogood-nodes-by-residue-signature-reduction` (batch 9, level
   18): the bracket recipe (order by increasing content, "cancel adjacent pairs
   `)(`", good $=$ leftmost uncancelled opening, cogood $=$ rightmost uncancelled
   closing) computes the **restricted** reading and contradicts the level-one
   Fock module action. Counterexample: $\lambda=(2,1)$, $e=3$, $i=2$: the word in
   content order is `)(`, which cancels, so the printed rule returns no arrow in
   either direction, while $F_2|2,1\rangle=|3,1\rangle$ (Leclerc (38)) and the
   true Fock (regular) crystal has $\tilde f_2(2,1)=0$, $\tilde e_2(2,1)=0$;
   more decisively, the printed rule's own escape hatch "the leftmost uncancelled
   opening" is not the minimizer of $N^r$ (e.g. $(2)$, $e=3$, $i=2$: the word is
   `((`, the leftmost opening is $(2,1)$ while the correct node is $(1,3)$).
   Corrected recipe used here: read by content $=$ top-to-bottom $=$ decreasing
   columns, cancel a `+` before a `-`, select the *last* surviving `+` for
   $\tilde f$ and the *first* surviving `-` for $\tilde e$. Source: Fayers sec. 2
   (Theorem 2.1 and the $n$-regular counterpart) and sec. 4 (the $\pm$-sequence
   reduction); Leclerc (38)–(39).
3. `thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph`
   (batch 9, level 19): the vertex-set and empty-component statements
   ($e$-regular partitions, the induced good-node graph) are correct and are
   consumed here; the identification of the arrows with the "good node" of the
   defective item 18 must be re-derived with finding 2 before certification.
4. `def-regular-partition-label-convention-and-mullineux-crystal-involution`
   (batch 9, level 21): calling conjugation-plus-residue-negation "the Mullineux
   sign involution" conflates the model-comparison map with Kleshchev's sign
   twist (survey Thm. 11.8, printed p. 54), which negates the residues of a
   good-node path *inside* one and the same restricted crystal. The comparison
   map used by this pair is conjugation (verified); future consumers must not
   identify the two maps without a proof.
5. No published item was found defective. The published
   `prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality`
   was read on disk; its $D^\mu\cong D(\mu^{t})\otimes\operatorname{sgn}$
   dictionary matches Kleshchev's Remark 5.5 and is used exactly as stated.

## Mathematical closure and dependency verification

- **Interfaces read.** The statements of every declared supplier were read on
  disk: batch-9 `def-cyclic-affine-type-a-cartan-datum`,
  `def-level-one-partition-fock-space-and-node-residues`,
  `def-the-node-order-and-n-i-exponents-for-fock-space`,
  `def-good-and-cogood-nodes-by-residue-signature-reduction`,
  `thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations`,
  `thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph`,
  `thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero`,
  `thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis`;
  batch-22 `def-residue-signature-normal-good-conormal-and-cogood-nodes`,
  `def-good-node-and-cogood-node-crystal-operators`,
  `prop-every-p-restricted-partition-is-reached-by-cogood-node-additions`;
  batch-8 `thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible`;
  published `def-removable-and-addable-nodes-of-a-partition`,
  `def-partition-young-diagram-and-conjugate-partition`,
  `prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality`,
  `def-axiom-of-choice`. Residues ($c-r$), direction of every cancellation,
  addable/removable polarity and the $e$-core constraints were checked to match
  the uses here.
- **Independent computational verification of the seam.** Two crystal models
  were implemented from the sources: Kleshchev's rule (top-to-bottom, cancel
  `-+`, good $=$ leftmost surviving $-$, cogood $=$ rightmost surviving $+$) and
  Fayers' restricted model (increasing columns, cancel `+...-`, good $=$ last
  surviving $-$, cogood $=$ first surviving $+$): they agree for every partition
  of size $\le8$ at $e=3$ (zero mismatches), each is closed on its label class
  ($e$-restricted, resp. $e$-regular, zero closure failures on valid inputs),
  satisfies the crystal inverse axiom (zero failures) and has the empty
  partition as its unique source. Conjugation with residue negation was checked
  to intertwine the restricted model on $\lambda$ with the regular model on
  $\lambda'$ for every partition of size $\le8$ (zero mismatches, both
  directions and null sets). The rank-four component list and every arrow of
  the B example, the six coefficients of $E_i,F_i$ on $|2,1\rangle$, and the
  two witnesses of the counterexample were recomputed independently. The
  standard-basis-versus-crystal-basis warning in the B example is forced by
  $F_1|2,1\rangle=q^{-1}|2,1,1\rangle$ against the no-residue-1-arrow of the
  symmetric-group crystal.
- **Modular branching cross-checks.** The good-node socle statement was checked
  against the explicit small cases: $S_3$ in characteristic $3$ has
  $D^{(3)}=\mathrm{triv}$, $D^{(2,1)}=\operatorname{sgn}$,
  $\operatorname{Res}\operatorname{sgn}=\operatorname{sgn}_{S_2}$, and the
  $J_3$-eigenvalue $2\equiv-1$ of the removed node; the Kleshchev picture
  removes the node $(3,1)$ of $(1,1,1)$ with residue $-2\equiv1$ and the James
  picture removes $(1,2)$ of $(2,1)$ with residue $1$, and the two label sets
  are exchanged by the transpose/sign dictionary. This is what fixes the
  residue bookkeeping of item 1(iii)-(v) and of item 4(iii).
- **Axiom strength.** The only AC in the closure is the batch-9/8 inheritance
  declared on items 4–5 and the B counterexample; every supplier on this page is
  otherwise finite combinatorics, finite-dimensional linear algebra or the
  crystal formalism, and the choice-free alternative routes are recorded.

## Sources and fetch evidence

Six complete treatments back the pair, three of them primary-kind
(survey/lecture-notes):

1. A. Kleshchev, *Representation Theory of Symmetric Groups and Related Hecke
   Algebras*, Bull. AMS 47 (2010) (survey) — https://arxiv.org/pdf/0909.4844.
   Read: sec. 3.4 (pp. 18–19), Example 3.2 (p. 20), Remark 5.5 (p. 25),
   Theorem 8.2 (pp. 37–39), sec. 11.4–11.5 (pp. 53–54).
2. M. Fayers, *Partition models for the crystal of the basic
   $U_q(\mathfrak{sl}_n)$-module*, arXiv:0906.4129 — sec. 2 (pp. 2–4),
   sec. 3.1–3.2, sec. 4 (pp. 10–12).
3. B. Leclerc, *Fock space representations of $U_q(\widehat{\mathfrak{sl}}_n)$*,
   Grenoble 2008 lecture notes (author-hosted) —
   https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf — sec. 2 (pp. 6–8),
   sec. 3.9–3.14 (pp. 22–26).
4. J. Brundan, *Modular Branching Rules and the Mullineux Map for Hecke Algebras
   of Type A* (author manuscript) —
   https://pages.uoregon.edu/brundan/papers/quantum.pdf — sec. 2.1–2.4
   (pp. 2–4), Example 2.8.
5. Kashiwara–Miwa–Petersen–Yung, *Perfect crystals and q-deformed Fock spaces*,
   arXiv:q-alg/9603025 — sec. 4.1–4.3, sec. 5.2 (pp. 22–36).
6. Lascoux–Leclerc–Thibon, *Canonical bases of q-deformed Fock spaces*,
   arXiv:q-alg/9602025 — sec. 3–4 (pp. 3–5).

`node tools/source-fetch-check.mjs --coverage
research/frontier-44-special-representation-examples-28-batch-23.coverage.json
--stamp` returns **9/9 source(s) fetch-verified** (the duplicated B-page rows are
stamped separately) and check mode returns 9/9 resolved. No source drop or
recovery record was needed: every URL answered with complete full text on the
first fetch in this dispatch. Misra–Miwa's original paper is not cited directly
(the Project Euclid copy answers this session's fetches with a bot wall); its
Theorem 4.7 is consumed through Fayers' Theorem 2.1, which states it verbatim,
and through Kleshchev's Theorem 8.2(ii).

## Checks run and results

- `coverage-checklist --require-destination`: 2 pages, **40 harvested results,
  0 errors, 0 warnings**.
- `item-dependency-levels.mjs check`: my two pages contribute **no errors**;
  levels 14, 16, 20, 21, 23 (A) and 22, 21, 22 (B) match the computed values.
  The whole-run command still reports empty scaffolds for other batches
  (cyclotomic KLR, Arakawa–Suzuki, degenerate Ariki, cyclotomic Hecke, Ariki) —
  not this batch's pages.
- `content-policy.mjs --manifest-only` over all run manifests: **532 scoped
  items, 0 errors, 0 warnings**.
- `manifest-deps.mjs`: my 8 items, 0 missing.
- `validate-plan` (frontier-item-gate): passes; 46 pages carry item lists.
- `frontier-dependency-ledger.mjs refresh`: my input has **17 review rows, one
  per declared cross-batch edge** (consumers all in batch 23), no orphaned
  reviews. `--require-reviewed` is still red run-wide only because other
  batches' consumer inputs are missing; this batch's rows are complete.
- `step1-decisions.mjs check`: my 8 items each have a fresh `ready` record
  bound to the current bytes and dependency lists; the remaining run work rows
  belong to other batches.

## Status

All 8 items recorded `ready`: every claim has a complete proof strategy whose
inputs are either proved published items or scaffolded in-run suppliers with
declared interfaces, and every identified supplier defect is recorded above with
its correction. Step 3 must (a) author the proofs of the 5 A items and 3 B items
from the recorded sources, (b) repair the batch-9 findings 1–4 before that
crystal theorem is certified, and (c) keep the lower/upper global-basis
distinction of item 5 intact. Authoring, not this scaffold, is the first
independent mathematical check.
