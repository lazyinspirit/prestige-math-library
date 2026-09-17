# Step 3a scope review — `cartan-subalgebras-and-root-space-decompositions`

Run: `phase-2-remaining-27` · Batch: 11 (DG-30) · Role: alpha (scope only; no
item or proof approvals, no owner records)

Pair under review:

- A page `cartan-subalgebras-and-root-space-decompositions` (43 items: 2
  remarks, 10 definitions, 2 lemmas, 12 theorems, 7 propositions, 4
  corollaries, 6 false statements),
- B page `cartan-subalgebras-and-root-space-decompositions-examples` (11 items:
  10 examples, 1 counterexample).

**Decision: `sufficient`.** No merger and no scaffold enrichment recommended
(two non-blocking observations for the owner are recorded below, one of them
shared with the sibling DG-31 pair that this batch's other reviewer recorded
`insufficient`).

## Review basis

I read the current batch-11 manifest and coverage
(`research/phase-2-remaining-27-batch-11.pages.json`,
`research/phase-2-remaining-27-batch-11.coverage.json`), the binding prose
design `research/plan-differential-geometry-track.md` lines 7550–7782 (the
complete DG-30 section) together with the DG-31 opening at line 7783, the
binding owner direction
`research/phase-2-remaining-27-owner-authoring-direction.md` (no restricted
roots on DG-30, AC declared item by item, every example locally proved), the
plan entries in `research/plan-spec.json` (orders 501/502; identical ids,
titles, categories, companions and `requires`; empty item inventories), the
Step-1 drift review `research/phase-2-remaining-27-alpha-step1-drift.md`
(this page: `no-drift`), `research/phase-2-remaining-27-batch-11.notes.md`,
the batch-11 cross-batch ledger (`[]`), the run-wide
`research/phase-2-remaining-27-cross-batch-dependencies.json`, the run scope
ledger (both pages listed, nothing else owed for this pair), and the relevant
DG ownership and Phase-3 sections of `research/published-consumer-supplier-ledger.md`.
No owner `proceed`/`merge`/`enrich` receipt exists for this pair, so nothing
was assumed. I edited no scaffold, item, page or other pair.

## Inventory versus the design

- The A inventory contains all 36 numbered design items in design order plus
  the design's six `fs-` items, and exactly one addition:
  `lem-jordan-chevalley-parts-agree-under-adjoint-representation`, placed
  between the abstract Jordan-decomposition definition and the internal
  Jordan theorem, with its two framing remarks. The batch notes document this
  addition; it is the compatibility statement that makes the X-2 operator
  theorem and the Lie-algebra version interderivable, and it carries the AC
  declaration. No design item is missing, renamed or re-kinded.
- The B inventory is the design's 11 items verbatim, in design order.
- Page headers match `plan-spec.json` exactly; the B page requires only its A
  companion.

## Subject coverage

The planned chain covers the intended subject end to end, and each stage is
explicitly separated from the definition it does not smuggle in: abstract
Jordan decomposition and its compatibility lemma; the general
nilpotent-self-normalizing Cartan definition beside toral/maximal-toral and
regular element/rank; centralizer of a regular semisimple element; existence;
Cartan = maximal toral; conjugacy (hence rank independence); the root-space
decomposition with the zero eigenspace identified as the Cartan; root-space
brackets, Killing orthogonality, the opposite-root pairing, the Killing-dual
vector, the bracket line and the nonvanishing Killing length; coroots and
root `sl_2` triples; finite-dimensional `sl_2` modules; root strings and
integral Cartan integers; one-dimensionality, reducedness, reflections and
their inner-automorphism realization; the reduced crystallographic
root-system theorem; and the consequences (dimension formula, center as
common root kernel, root hyperplanes, centralizer dimension, dense Zariski
open regular locus). The six false statements mirror exactly the traps the
design names (maximal-abelian confusion, all-elements-semisimple,
arbitrary-dimensional root spaces, sums of roots, integer multiples,
complex-data-classifies-real-forms).

Boundaries are deliberate and owned elsewhere, not omissions: abstract root
systems, Weyl group, Positive systems, Cartan matrices, Dynkin diagrams and
the Serre/Cartan–Killing classification (DG-31, same batch); highest-weight
representation theory (DG-32); compact groups and maximal tori (DG-33); real
forms, restricted roots and the nonreduced `BC_n` example (DG-34, and the
owner direction forbids that material here). The general (non-semisimple)
Cartan definition is used definitionally and negatively only, with the
counterexample `cex-a-maximal-abelian-subalgebra-that-is-not-a-cartan-subalgebra-in-a-nonsemisimple-algebra`
(checked: in $[x,y]=y$, $\mathbb Cy$ is maximal abelian and
$\mathfrak g$ is its own normalizer, so it is not Cartan).

Consumers are all served at declared ids: DG-31 consumes four A items
(`thm-finite-dimensional-representations-of-sl-two`,
`thm-root-string-property`, `thm-root-sl-two-triple`,
`thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional`,
`thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system`,
`prop-dimension-formula-from-roots`); DG-32 consumes fourteen of its items
through the root decomposition, root/coroot data, root `sl_2` triples and the
`sl_2` module theorem; DG-33 consumes three; DG-34 five. Every consumed id
exists on the A page, and every page edge is recorded `verified` in the
run-wide ledger. Both DG-32 triangular-decomposition items need only the
bracket *inclusion* `prop-brackets-of-root-spaces`, so the sharper equality
$[\mathfrak g_\alpha,\mathfrak g_\beta]=\mathfrak g_{\alpha+\beta}$ is
correctly outside this page's interface. No B item is consumed outside the
pair; B dependencies are A items plus one intra-page example edge.

## Source coverage

Two independent full treatments back the A page, and I re-verified both now
against byte-identical cached copies rather than the ledger text:

- Anthony W. Knapp, *Lie Groups Beyond an Introduction*, 2nd ed. — sha256
  `bd7e983a2389349b…`, 5,060,066 bytes, 838 pp. At the recorded locator
  (Ch. II §§2–4) I confirmed Theorem 2.9 (existence),
  Theorem 2.9′ and Proposition 2.13, Theorem 2.15 (conjugacy by
  $\operatorname{Int}\mathfrak g$ plus rank well-defined), Lemma 2.18,
  Proposition 2.21 (one-dimensionality and reducedness), Corollary 2.25,
  Proposition 2.29 (root strings and
  $p-q=2\langle\beta,\alpha\rangle/\langle\alpha,\alpha\rangle$),
  Corollary 2.38 (positive definiteness on the real span), Proposition 2.41
  and Theorem 2.42 (reduced abstract root system).
- Pavel Etingof, MIT 18.745 — sha256 `d72256c3f42f0406…`, 3,442,724 bytes,
  142 pp. At the recorded locator (Lectures 19–20) I confirmed Proposition
  19.3, Theorem 19.10, Proposition 19.11, Lemma 19.15, Lemma 19.16
  (including its Lie-theorem route, which is exactly the strategy recorded
  for `lem-killing-length-of-a-root-is-nonzero`), Corollary 19.18(i)–(ii),
  Lemma 20.5, Proposition 20.6, Theorem 20.8, Corollary 20.9 and Theorem
  20.10 (conjugacy via $\operatorname{Ad}(G)$ for a connected $G$ with Lie
  algebra $\mathfrak g$).

`node tools/coverage-checklist.mjs … --require-destination` reports 2 pages,
36 harvested results, 0 errors, 0 warnings; every harvested row is
`included` or `inline`; both source URLs answered 200 in the run's liveness
sweep and both rows carry fetch-verified byte counts and hashes and
`reading_evidence`. The B page has no coverage rows, which is this run's
convention (coverage files cover A pages; verified against other batches and
an earlier run); each B item carries its own reference and locator in the
manifest.

Honest note: the design's further named sources (Kirillov; Erdmann–Wildon
Ch. 10 Lemmas 10.5–10.6; Humphreys Chs. 7–10) have no coverage rows. The
two-treatment rule is met, and the specific control the design assigned to
Erdmann–Wildon — the nonzero Killing length proved before coroot
normalization — is in fact exercised by Etingof Lemma 19.16, whose complete
proof I read in the fetched text.

## Dependencies and contracts

The pair declares 16 published dependencies (all present with
`status: published` in `items/`) and 34 in-run dependencies, all on its own
two pages; no dependency fails to resolve run-wide (0 unresolvable ids over
all 290 manifested items), and none of the 54 pair ids collides with an
existing published item file. The AC seam enters through the declared page
prerequisite X-2 (`the-spectral-theorem-and-singular-value-decomposition`
hosts `thm-additive-jordan-chevalley-decomposition`, checked), and the
choice-sensitive items declare `def-axiom-of-choice` and name the use, as the
owner direction requires. Axiom bases are consistent: 45 ZFC / 9 ZF, with no
item declaring ZF whose dependencies carry ZFC; the regular-semisimple
centralizer theorem and the `sl_2` module theorem are kept choice-free.

Phase-3 role: this A inventory is the designated DG supplier for the
published defective items the canonical ledger lists (the published
root-space decomposition, Cartan conjugacy, reduced-root-system theorem, the
regular-element lemmas and the Killing-dual/opposite-bracket chain), and its
ids match the ledger's repointing plan.

## Observations and uncertainty (non-blocking, owner-held)

1. **Classical matrix models (shared seam with DG-31).** The B item
   `ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras` names
   $\mathfrak{so}_5(\mathbb C)$ and $\mathfrak{sp}_4(\mathbb C)$ and their
   standard Cartans, but no manifested item defines the complex classical
   matrix Lie algebras — the corpus has only B-page examples
   (`ex-standard-representations-of-classical-matrix-lie-algebras`,
   `ex-classical-simple-lie-algebras-and-their-killing-forms`) and the real
   model `ex-the-real-symplectic-matrix-group`. I nevertheless judge the
   example authorable without new scope: the statement can fix the matrix
   models inline exactly as the published real-symplectic example does,
   bracket-closure is a direct computation, Cartan-ness follows from
   `def-cartan-subalgebra-of-a-lie-algebra` (or from this page's regular
   centralizer theorem) by a self-normalizing check, the root sets follow
   from the commutator formula, and the $B_2\cong C_2$ claim has the explicit
   witness $\varphi(e_1)=e_1+e_2$, $\varphi(e_2)=e_1-e_2$. This differs from
   the sibling finding: the other reviewer of this batch recorded
   `insufficient` because DG-31's A-page proposition
   `prop-classical-types-correspond-to-sl-so-and-sp` *asserts* the
   $A_n/B_n/C_n/D_n$ identifications with no supplier, and recommended
   adding complex classical-algebra definitions to the DG-31 A page. Owner
   note: if that enrichment is applied on DG-31, this earlier B item still
   cannot consume it; a shared home on DG-30 A would serve both pages, but
   the placement is the owner's decision.
2. **Inner-automorphism formalism.** The conjugacy theorem names "the
   connected adjoint group" and `prop-root-reflections-are-induced-by-inner-automorphisms`
   uses $\exp(\operatorname{ad}e_\alpha)$; no item defines
   $\operatorname{Int}\mathfrak g$ or the exponential of an endomorphism.
   The in-closure published
   `cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra`
   (on the declared DG-29 prerequisite page) supplies $\operatorname{Aut}(\mathfrak g)$
   as a Lie group with Lie algebra $\operatorname{ad}\mathfrak g$, and
   `def-conjugation-and-the-adjoint-representation-of-a-lie-group` defines
   $\operatorname{Ad}$; the published Malcev conjugacy item uses
   $\exp(\operatorname{ad}x)$ the same way. Authoring should name the
   supplier explicitly; no new item is strictly required.
3. **Forward terminology avoided.** The landmark root-system theorem states
   its conclusion in expanded form (finite, spanning, reflection-stable,
   reduced, integral Cartan integers, only $\pm\alpha$ per line) and declares
   no dependency on the abstract root-system definition, which is planned
   later on DG-31. DG-31's isomorphism theorem consumes it and must bridge to
   the abstract axioms in its own proof; the interface is well defined.
4. **Deliberate boundaries, recorded for completeness.** The general
   (non-semisimple) existence theorem (Knapp Theorem 2.9 in full generality),
   the equality form of the root-space bracket (Knapp Corollary 2.35) and the
   irreducible-iff-simple correspondence (Knapp Proposition 2.44) are not
   planned here; no consumer in this run needs them, so I do not treat their
   absence as a gap, but the owner may enrich if desired.
5. **B-page illustration gap (cosmetic).** No example explicitly exhibits two
   distinct conjugate Cartan subalgebras although conjugacy is an A-page
   landmark; this matches the design's B inventory, which I do not override.
6. Scope only: I did not audit proofs, contract wording or harvest
   faithfulness — that is Step 3b and Step 5. My confidence in the scope
   verdict is high; the one point where a stricter reading could differ from
   mine is observation 1, which I have stated with its evidence so the owner
   can overrule.

## Decision

`sufficient` (A43/B11). The planned definitions, results, examples and
counterexample cover the intended subject — Cartan subalgebras and root-space
decompositions of complex semisimple Lie algebras, from Jordan decomposition
through the reduced crystallographic root-system theorem and its regular-locus
consequences — with every exclusion named as a boundary owned by a specified
page and both recorded sources independently re-verified. Recommend neither a
merger nor enrichment; Step 3b may author this pair as a scope.
