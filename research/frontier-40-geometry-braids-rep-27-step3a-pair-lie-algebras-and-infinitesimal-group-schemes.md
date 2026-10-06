# Step 3a dispatch report — `lie-algebras-and-infinitesimal-group-schemes`

- Run: `frontier-40-geometry-braids-rep-27` (batch 14, orders 875/876, `scheme-theory`).
- Pair: A `lie-algebras-and-infinitesimal-group-schemes` / B
  `lie-algebras-and-infinitesimal-group-schemes-examples` (A: 10 items; B: 3 items).
- Role: alpha scope review of this pair only. No scaffold was edited; this report and the
  `record-scope` receipt are the only outputs.
- **Decision: `sufficient`** for the promised scope (all design claims present, source coverage
  adequate including the design's bracket second-source gate, no unmet prerequisite). Three
  boundary notes (§5) and one Step-4 edge observation (§4) are recorded; none is a content omission.

## 1. Inputs read

- Manifests: `research/frontier-40-geometry-braids-rep-27-batch-14.pages.json` (full text of both
  pages, all 13 items, statements/strategies/sources) and `...-batch-14.coverage.json`;
  `research/plan-spec.json` rows 875/876 (id, order, kind, category, companion, `requires`).
- Design/prose: `research/plan-algebraic-geometry-expansion-track.md` §“Field group schemes, Hopf
  algebras, and infinitesimal structure”, row **AG-GS-3** (L204; summary row L31), and the AG-GS-1/2
  rows that fix the supplier seam.
- Run records: `...-scope-ledger.json` (pair owed at batch 14), `...-selection.json`,
  `...-alpha-groups.json` (lane a owns batches 1/14/20), `...-drift-evidence.json` entry for the A
  page (declared requires closure = 200 pages), `...-alpha-step1-drift.md` §lie-algebras
  (“no-drift”), `...-batch-14.notes.md`, `...-batch-14.cross-batch-dependencies.json` (9 rows),
  and the 13 `...-step1-<item>.json` readiness records (13/13 `ready`).
- Supplier/consumer records: `...-batch-13.pages.json` statements of the five consumed batch-13
  items and `thm-affine-group-scheme-faithful-finite-dimensional-representation`; batch-19 item
  `lem-lie-functor-exactness-fixed-points-and-generation`; batch-20 items
  `lem-lie-algebra-of-the-stabilizer-of-a-subspace-and-lie-stable-subspaces` and
  `lem-lie-algebra-of-a-semisimple-group-in-characteristic-zero-is-semisimple`;
  `research/frontier-40-geometry-braids-rep-27-cross-batch-dependencies.json` rows for the pair.
- Published items read at statement level (all `status: published`): `def-group-scheme-over-a-field`,
  `def-morphism-and-closed-subgroup-scheme`, `def-relative-cotangent-space`,
  `thm-tangent-vectors-dual-numbers`, `thm-cotangent-space-maximal-ideal-quotient`,
  `def-dual-numbers-scheme`, `thm-affine-schemes-determined-by-functor-of-points`,
  `thm-yoneda-lemma-is-natural-in-both-variables`, `def-lie-algebra-over-a-field`,
  `def-smooth-morphism-schemes`, `thm-differentials-smooth-locally-free`, plus the library home
  pages of every other out-of-pair dependency (used in the resolution script of §4).
- Sources re-fetched by me and byte/hash-checked against the coverage stamps (see §3).

## 2. Design ∶ scaffold comparison (scope only)

The design's exact inventories are preserved item-for-item:

| design promise (AG-GS-3) | batch-14 item(s) |
|---|---|
| A `def-lie-algebra-of-a-group-scheme` — tangent-at-identity construction | `def-lie-algebra-of-a-group-scheme` (cotangent and dual-number descriptions; vector-space structure isolated in the well-definedness lemma) |
| A `thm-lie-bracket-and-adjoint-action-from-infinitesimals` — bracket by the commutator over dual numbers | `thm-lie-bracket-and-adjoint-action-from-infinitesimals` (ad = Lie(Ad); `e^{tX}e^{t'Y}e^{-tX}e^{-t'Y}=e^{tt'[X,Y]}`; functoriality; GL_n case; uniqueness) |
| A `thm-cartier-smoothness-for-affine-groups-in-characteristic-zero` — Cartier char 0 only | `thm-cartier-smoothness-for-affine-groups-in-characteristic-zero` (affine, finite type, char 0; char-p failure stated) |
| B `ex-lie-algebras-of-alpha-p-mu-p-and-gl-n` | same id (one-dimensional Lie algebras of `G_a`, `G_m`, `alpha_p`, `mu_p`, `gl_n`) |
| B `cex-lie-algebra-does-not-detect-nonsmooth-group-scheme` | same id (`Lie(alpha_p) = Lie(G_a)` contrasts with non-smoothness; same for `mu_p`/`G_m`) |

Eight local helper items are added, each consumed inside the pair: the tangent-space
vector-structure/functoriality lemma (well-definedness of the definition; functoriality for the
adjoint and bracket items), the adjoint-representation lemma and the GL_n computation (both used by
the bracket theorem and its GL_n clause), the invariant-differentials lemma (Cartier), the
free-direct-summand/nonzerodivisor and char-0 regularity lemmas (feeding
`thm-smoothness-over-characteristic-zero-via-free-differentials` → Cartier), and the explicit
construction `ex-additive-and-infinitesimal-group-schemes` (consumed by both other B items). No
promised claim is weakened and no inventory is padded.

Page-level checks: both rows match `plan-spec.json` on order, kind, category, companion and
`requires`; A has 10 items and B has 3 (well inside the 100-item ceiling, no split); the B page is a
dependency leaf for its own items only and is not consumed outside the pair; `manifest-deps` →
`13 item(s), 0 normalized, 0 error(s)`; `coverage-checklist` → `2 page(s), 51 harvested result(s),
0 error(s), 0 warning(s)`.

Two recorded scaffold decisions, both scope-preserving on inspection (batch-14 notes
“Design versus plan”):

- **Cartier route.** The design's source note names M22 Theorem 3.23 (Oort-style nilpotent proof);
  the local proof instead follows Stacks Groupoid Schemes Lemma 8.2 [047N] through the
  invariant-differentials lemma and the characteristic-zero smoothness criterion, with Milne
  1.28/1.37, 3.19–3.22, 3.23 read and recorded as the independent complete alternative. I verified
  Milne Theorem 3.23 and its proof (printed pp. 70–71) and the Stacks route; the design's exact
  scope (affine, finite type, characteristic zero) is preserved, and the general locally-algebraic
  Stacks form is deliberately not claimed.
- **Positive characteristic.** No smoothness is asserted in characteristic `p`; char p appears in
  the B examples (`alpha_p`, `mu_p`) and in the Cartier item's failure note, exactly as the design
  directs.

## 3. Source coverage

The coverage record has 8 source entries, comprising 5 distinct files; all 8 stamps resolved and I
re-fetched every distinct file, matching bytes and SHA-256 prefixes exactly:

| source | bytes | sha256_16 | coverage stamp |
|---|---|---|---|
| Milne, *Algebraic Groups* (2022) `iAG2022.pdf` | 4 838 013 | `f2ddd8fa4d263085` | matches (659 pp) |
| SGA 3, Exposé II (Demazure), 14 Oct 2024 redaction, `Exp2-14oct24.pdf` | 504 805 | `b1bcc804e4c1e610` | matches (52 pp) |
| Stacks, Groupoid Schemes | 635 545 | `4506a39201063afc` | matches (55 pp) |
| Stacks, Varieties | 997 886 | `ed339c312c86721e` | matches (113 pp) |
| Stacks, Commutative Algebra | 2 828 052 | `b035a1f02104906a` | matches (469 pp) |

I read the complete relevant arguments for the load-bearing claims:

- **Milne Ch. 10 (printed pp. 186–196, PDF 197–207):** 10.6 (`Lie(G)=ker(G(k[ε])→G(k)) ≅
  Hom_k(I_G/I_G²,k)`), 10.7 (GL_n and the ε²-commutator), 10.11 (`e^{εX}`), 10.14 (functoriality
  on finite inverse systems), 10.18–10.22 (conjugation action, `ad = Lie(Ad)`,
  `[x,y]=ad(x)y`) and **Theorem 10.23** (uniqueness of the functor Lie via a faithful
  representation; bracket on `gl_n` the matrix commutator).
- **Milne Theorem 3.23 (printed pp. 70–71):** “Every affine algebraic group over a field of
  characteristic zero is smooth”, with the Oort-style nilpotent proof; matches the design's stated
  Cartier scope.
- **SGA 3 Exposé II §4.7–4.9 (printed pp. 85–88, read in full):** Definition 4.7.2
  (`[x,y]=ad(x)·y` via `Ad: G → Aut(Lie(G/S))`), statement 4.7.3 with note (79) (bracket as the
  commutator of independent lifts, functoriality (i), skew-symmetry (ii)), Proposition 4.8
  (`Ad(g)Y=g∘Y∘g^{-1}`, `[X,Y]=X∘Y−Y∘X`), Corollaire 4.8.1 (Jacobi), Corollaire 4.8.2
  (representation law) and Scholie 4.9. This is the independent treatment the design's
  “second-source gate remains for the bracket” required, and it is genuinely present; the pair's
  bracket theorem uses exactly this route together with Milne 10.18–10.23. (SGA 3's note (83) that
  `[x,x]=0` is not automatic for arbitrary “good” group functors over a general base does not
  affect the pair: representable groups are “très bons” by Exemples 4.10.1, and the pair's theorem
  is stated for affine group schemes of finite type over a field.)
- **Stacks:** Groupoid Schemes Lemmas 6.3 [047I] (invariant differentials `Ω_{G/S} ≅ f*e*Ω_{G/S}`,
  free over a field), 6.4 [0BF5] (multiplication induces addition of tangent vectors) and 8.2
  [047N] (Cartier); Varieties Lemma 25.1 [04QN] (locally finite type + locally free `Ω` + char 0 ⇒
  smooth); Commutative Algebra Lemmas 10.140.4 [00TU] (separable residue ⇒ injective
  `m/m² → Ω⊗κ`), 10.140.6 [00TW] (`θ(df)=1` ⇒ `f` not nilpotent/nonzerodivisor) and 10.140.7
  [00TX] (char 0: smooth ⇔ free `Ω` ⇔ regular at a prime). Statements and proofs read at the
  cited tags.
- **B-page construction:** Milne §§2.4–2.5 (printed p. 40): `O(mu_n)=k[T]/(T^n−1)`,
  `alpha_{p^m}(R)={r: r^{p^m}=0}` with `O(alpha_{p^m})=k[T]/(T^{p^m})`, and the isomorphism
  `k[T]/(T^{p^m}) ≅ k[U]/(U^{p^m}−1)` “as schemes (but not as algebraic groups)”; matches the B
  items.

Coverage dispositions agree with the design: the 51 harvested headings name the item that absorbs
each; the declinations (Milne 3.24, 10.8–10.10, 10.15–10.17 and §10(e)–(h); Stacks 39.8.1/39.8.3/
39.8.4, Varieties 25.2, Algebra 10.140.3/10.140.5; SGA 3 §4.2–4.3 relative derived morphisms) each
carry a specific reason. The design's warning that Stacks 39.6.3/39.6.4 support the tangent module
and not the bracket/adjoint proof is respected: those lemmas appear only in the tangent-space and
invariant-differentials items, while the bracket and adjoint items cite Milne 10.18–10.23 and SGA 3
§4.

## 4. Prerequisite audit

Mechanical resolution of the pair's declared graph: 70 distinct item `deps` = 54 published items
(each `items/<id>.md` present with `status: published`) + 5 in-run batch-13 items + 11 in-pair
items; 0 unresolved. All 42 distinct `[[…]]` wikilinks in the 13 statements/strategies resolve
(published or in-run). The A page's declared `requires` are `group-schemes-of-finite-type-over-a-field`
(published, order 871), `affine-group-schemes-hopf-algebras-and-rational-representations` (in-run
batch 13, order 873) and `kahler-differentials-conormal-sequences-and-infinitesimal-lifting`
(published, order 366.0583); the B page declares its own A page. The five batch-13 supplier
statements were read and match their uses (GL_n coordinate ring and comorphisms; Hopf-ideal
kernels/quotients; commutative Hopf algebra; surjective ring map ⇒ closed immersion; faithful
finite-dimensional representation), and the unified cross-batch ledger carries this batch's 9
reviewed rows (1 page + 8 item edges), all `open` pending the supplier proofs — the expected
pre-authoring state, not an absent claim.

**Finding: no unmet prerequisite.** No consuming item of this pair needs a claim absent from both
the published library and the current scaffold. Consumers of the pair (batch 19
`lem-lie-functor-exactness-fixed-points-and-generation`; batch 20
`lem-lie-algebra-of-the-stabilizer-of-a-subspace-and-lie-stable-subspaces` and
`lem-lie-algebra-of-a-semisimple-group-in-characteristic-zero-is-semisimple`; the batch-19 page
`requires`) take exactly the definition, the tangent-space/functoriality lemma, the GL_n lemma, the
adjoint representation and Cartier's theorem — all present and stated in the needed generality
(finite type over a field; affine for the bracket-adjoint items).

**Observation (not a gap; Step-4 splice/plan matter).** Eight dep instances reach published,
strictly earlier items whose home pages lie outside the 200-page `requires` closure of the A page:

| consumer item | dep | home page (order) |
|---|---|---|
| `thm-lie-bracket-and-adjoint-action-from-infinitesimals` | `def-lie-algebra-over-a-field`, `def-derivation-of-a-lie-algebra` | `lie-algebra-representations-enveloping-algebras-and-pbw` (495) |
| `thm-smoothness-over-characteristic-zero-via-free-differentials` | `def-smooth-morphism-schemes`, `thm-differentials-smooth-locally-free` | `flat-smooth-and-etale-morphisms` (366.073) |
| `thm-cartier-smoothness-for-affine-groups-in-characteristic-zero` | `def-smooth-morphism-schemes` | `flat-smooth-and-etale-morphisms` (366.073) |
| `ex-lie-algebras-of-alpha-p-mu-p-and-gl-n` (B) | `def-lie-algebra-over-a-field` | `lie-algebra-representations-enveloping-algebras-and-pbw` (495) |
| `cex-lie-algebra-does-not-detect-nonsmooth-group-scheme` (B) | `def-smooth-morphism-schemes` | `flat-smooth-and-etale-morphisms` (366.073) |
| `cex-lie-algebra-does-not-detect-nonsmooth-group-scheme` (B) | `def-regular-local-ring-geometric-point` | `zariski-tangent-spaces-regular-points-smoothness-and-bertini` (366.059) |

Every target is published and earlier, so this is not an unmet prerequisite; a simulation of the
post-splice plan (items copied from batch 14 into a `/tmp` copy of `plan-spec.json`) yields exactly
the `undeclared-prereq` class for this pair — 2 findings on the A page and 3 on the B page — which
the run routes to the Step-4 edge adjudication lane (`validate-plan` check 15; the documented
“apply a backward edge the item genuinely consumes” decision). Minimal alignment: add
`lie-algebra-representations-enveloping-algebras-and-pbw` and `flat-smooth-and-etale-morphisms` to
the A page's `requires` (the second transits `zariski-tangent-spaces-regular-points-smoothness-and-bertini`,
verified; both additions have lower orders).

## 5. Boundary notes for the owner (not blockers)

1. **Derivations/hyperalgebra descriptions.** The design's source note says “M22 Def. 10.6, Thm.
   10.23 … distributions Ch. 10”. The scaffold reads Milne Ch. 10 §10(a)–(e) fully and uses the
   cotangent/dual-number route; the equivalent description by left-invariant derivations
   (10.28–10.29, §10(e)) is dispositioned out-of-scope in the coverage file with a reason, while
   Milne §10(l) “The algebra of distributions (hyperalgebra)” (printed p. 207 ff., PDF p. 218 ff.)
   lies outside the read range entirely. Neither is consumed by any promised item, so this does
   not make the scope insufficient; if the owner intends the hyperalgebra/restricted-structure
   viewpoint as content, it is an enrichment (or successor pair) beyond the commissioned inventory.
2. **Restricted structure in characteristic `p`.** The pair's char-p content is the `alpha_p`/`mu_p`
   examples and the failure of smoothness, as designed; no `p`-operation on `Lie(G)` is claimed,
   and no consuming item of this run requires one. Recorded for owner awareness only.
3. **Axiom of Choice.** The six AC-declaring items name their inheritance exactly; I traced the
   bracket theorem's AC to the batch-13 faithful-representation item (which uses AC only through
   `lem-affine-finite-type-scheme-coordinate-ring-finitely-generated`), consistent with the
   supplier's stated hypotheses. No hypothesis mismatch found.

## 6. B-page assessment

`lie-algebras-and-infinitesimal-group-schemes-examples` carries the two design rows plus one local
construction (`ex-additive-and-infinitesimal-group-schemes`), which the design's B inventory
presupposes: explicit `G_a`, `alpha_p`, `mu_p` Hopf algebras and point descriptions (Milne 2.1–2.5,
Stacks 39.5), the one-dimensional Lie algebras with the GL_n matrix commutator, and the
counterexample that the Lie algebra does not detect non-smoothness. Each strategy exposes the
algebra-generator computations; the page is a dependency leaf (no consumer outside the pair), and
its deps are the A-page items, the batch-13 construction items, and published items already in the
A-page closure except the three homes listed in §4. Adequate for the B role.

## 7. Decision and recording

- A page `lie-algebras-and-infinitesimal-group-schemes`: **`sufficient`** — the planned
  definitions, results and examples cover AG-GS-3's promised subject (tangent-at-identity
  construction, bracket by the commutator over dual numbers, Cartier smoothness in characteristic
  zero only, with the `alpha_p`/`mu_p`/`GL_n` examples and the non-detection counterexample), with
  source coverage adequate and independently verified, and no unmet prerequisite. The §4 edge
  observation and §5 boundaries are recorded for the owner/Step-4 lane and do not make the content
  scope insufficient.
- Recorded with `node tools/step3-decisions.mjs record-scope --run
  frontier-40-geometry-braids-rep-27 --page lie-algebras-and-infinitesimal-group-schemes
  --decision sufficient --reason "<scope evidence; report path>"` → receipt
  `research/frontier-40-geometry-braids-rep-27-step3a-review-lie-algebras-and-infinitesimal-group-schemes.json`.
- Stopped at the pair boundary: no scaffold edit, no item approval, no owner record.
