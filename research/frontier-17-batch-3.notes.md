# Frontier 17, batch 3 — Beta-3 scaffold notes

## Continuity checkpoint

- Current substage: Step-3 Beta fix pass complete; B3-1 is evidenced already correct and B3-2 through B3-5 are applied in the owned scaffold artifacts.
- Owned artifacts: `research/frontier-17-batch-3.pages.json`, `research/frontier-17-batch-3.coverage.json`, `research/frontier-17-batch-3.proof-contracts.json`, and this notes file. The coverage artifact is separately mandatory even though the dispatch's three-file list omitted it.
- Completed checks: the authoritative Alpha-b report; full-source re-harvests for Conrad §§4–5 and Brussel §§1–5.4/7.1–7.4; exact-id and semantic reuse scans; all 108 published external dependencies' actual clauses and provenance; the maximal-bad-principal-ideal and abelian-group/integer-module proof routes; 80 proof contracts; coverage checklist; source fetch stamps; manifest-only content policy; current unspliced plan validation; prosecheck; contract citation/boundary consistency; and scoped diff hygiene.
- Open mathematical or source constraint: none. The two A pages contain 30 and 37 items, remain below the split ceiling, and have no load-bearing forward reference or external fallback.
- Open stage constraint: authoritative item-level `validate-plan`/`depsource` classification of the 94 new ids remains impossible until Step 4 mechanically splices this manifest. The current unspliced plan itself passes validation.
- Exact next action: Alpha rechecks B3-1 through B3-5 from disk; after a sufficient verdict, the engine may splice at Step 4. On return at Step 5, author from the exact clauses, source routes, and boundary contracts in these files.

## Scope, current spec, and the engine's drift adjudication

This batch owns `the-galois-correspondence` at order 100, its companion at 101, `modules-over-a-pid-and-canonical-forms` at order 110, and its companion at 111. The A pages contain 30 and 37 items after the Step-3 dictionary repair. Neither approaches the 60-item split ceiling, so no split or pruning is proposed.

While this Beta was running, the stage-1 drift unit wrote `research/frontier-17-alpha-step0-drift.md` and changed `research/plan-spec.json`. The owned manifest was synchronized to the adjudicated spec:

- `the-galois-correspondence.requires` is now `algebraic-closure-embeddings-and-separability-examples`, `symmetric-polynomials`;
- `modules-over-a-pid-and-canonical-forms.requires` is now `chain-conditions-and-semisimple-modules`, `euclidean-domains-pids-and-unique-factorisation`, `the-field-of-fractions-and-localisation`, `triangularisation-and-jordan-canonical-form`, `the-structure-of-finite-abelian-groups`.

The first added edge closes the discriminant and resolvent dependency. The second discharges the later MOD-5 enrichment's instruction to compare free rank with dimension after extending scalars to the fraction field. The design's old module order 106 still differs from the spec's 110; no batch artifact attempts to renumber it.

`SCHEMA.md` §6 still says a 100-item scaffold review ceiling, while `CLAUDE.md`, this dispatch, and the current workflow enforce 60. Both A pages are below either value, so this batch makes no normative-doc recommendation.

## Source-fetch status

The Step-2 Beta's three local attempts at the following command failed with
`EAI_AGAIN`, as recorded in the continuity checkpoint:

```text
node tools/source-fetch-check.mjs --coverage research/frontier-17-batch-3.coverage.json --stamp
```

Alpha's subsequent step-3 review reran the fetcher successfully. All six
coverage sources now carry full-document PDF stamps with byte counts and
content hashes, and Alpha recorded 6/6 verified for this batch. The Step-3 fix
pass changes only locators and harvested dispositions, not any source URL or
document. Its final gate record below supersedes the Step-2 transport blocker.

## Applyable amendments to the prose designs

### GA2-1 — synchronize the Galois prerequisite text with the adjudicated spec

Recommendation: approve. The drift unit has already applied the spec edge, so the prose should name the same immediate closure rather than the earlier A page alone.

Target: `research/plan-algebra-track.md`, GA-2 header.

Exact old text:

```text
- **`requires`** `algebraic-closure-embeddings-and-separability`,
  `symmetric-polynomials`
```

Exact new text:

```text
- **`requires`** `algebraic-closure-embeddings-and-separability-examples`,
  `symmetric-polynomials`
```

If declined, the design and current spec name different immediate predecessors even though their transitive mathematical closure is now the same.

### GA2-2 — correct the normal-field count in the $S_3$ lattice

Recommendation: approve. The design's count is mathematically false. The $S_3$ lattice has three strict cubic fields fixed by the three order-two subgroups and one strict quadratic field fixed by $A_3$.

Target: `research/plan-algebra-track.md`, GA-2 `**B page.**` paragraph.

Exact old text:

```text
with $S_3$, its full subgroup lattice, and the two normal / four non-normal
intermediate fields identified;
```

Exact new text:

```text
with $S_3$ and its full subgroup lattice: among the strict intermediate fields,
$\mathbb Q(\omega)$ is Galois over $\mathbb Q$, while the three cubic root
fields are not normal; the base and splitting fields are included as the two
endpoints;
```

If declined, Step 5 would be directed to label a six-node field lattice with an impossible normal/non-normal partition. Counting all nodes, the base, quadratic, and top fields are normal and the three cubic fields are not; counting only strict intermediates gives one normal and three nonnormal.

### GA2-3 — make the Artin proof decomposition explicit

Recommendation: approve. The current prose names two different bounds inside one theorem but does not name the focused lemmas the author must prove first.

Target: `research/plan-algebra-track.md`, GA-2 `*Fixed fields.*` paragraph.

Exact old text:

```text
**Artin's theorem: for a finite group $G$ of automorphisms of $K$,
$[K : K^G] = \lvert G\rvert$** (landmark) — decomposed into the lower bound
(from Dedekind: more than $\lvert G\rvert$ independent elements would give a
dependence among the $\sigma \in G$) and the upper bound (any $\lvert G\rvert+1$
elements satisfy a nontrivial homogeneous linear system over $K$, and a minimal
nonzero solution is $G$-stable), because these are two genuinely different
arguments;
```

Exact new text:

```text
**Artin's theorem: for a finite group $G$ of automorphisms of $K$,
$[K:K^G]=\lvert G\rvert$ and $\operatorname{Aut}(K/K^G)=G$** (landmark).
First prove `lem-artin-fixed-field-lower-degree-bound` from Dedekind independence,
then `lem-artin-fixed-field-upper-degree-bound` from the homogeneous system and
minimal-support solution. `thm-artin-fixed-field-degree-theorem` combines the
opposite inequalities and recovers the full automorphism group.
```

If declined, the prose remains authorable, but the durable item list and proof contracts will be more precise than the design that is meant to govern them.

### MOD5-1 — insert the missing PID-to-UFD bridge and the aligned-basis route

Recommendation: approve. The declared prerequisite page is titled for unique factorisation but on disk proves only Euclidean domain implies PID and prime implies irreducible. Elementary divisors and Conrad's aligned-basis proof need factorisation in a general PID.

Target: `research/plan-algebra-track-expansion.md`, MOD-5 `**THMS.**` opening.

Exact old text:

```text
**THMS.** a submodule of a free module of rank $n$ over a PID is free of rank
$\le n$ (landmark; the induction on $n$, choice-free); a f.g. torsion-free
module over a PID is free; **$M \cong M_{\mathrm{tors}} \oplus R^r$** with $r$
well defined; **the structure theorem, invariant factor form** (landmark,
**#22**);
```

Exact new text:

```text
**THMS.** A PID is Noetherian, every irreducible in a PID is prime, and every
PID is a UFD. Conrad's maximal-value-ideal lemma then yields simultaneous
aligned bases for a submodule of a finite free module, with nonzero factors
$a_1\mid\cdots\mid a_r$; in particular the submodule is free of rank at most
the ambient rank. Quotienting aligned bases gives the invariant-factor
decomposition, hence a f.g. torsion-free PID module is free and
$M\cong M_{\mathrm{tors}}\oplus R^r$. Uniqueness is then proved through the
$R/(p)$-dimensions of the $p$-power torsion layers, not assumed from existence.
```

If declined, the elementary-divisor proof silently assumes the very PID-to-UFD theorem absent from the published prerequisite, and the design's mandated choice-free structure route remains unnamed.

### MOD5-2 — distinguish PID existence from the Euclidean Smith algorithm

Recommendation: approve. This carries the later normative enrichment into the local MOD-5 block.

Target: `research/plan-algebra-track-expansion.md`, MOD-5 Smith-normal-form sentence.

Exact old text:

```text
**Smith normal form**: existence over a PID by the ideal-theoretic (gcd)
argument, and **uniqueness** via the gcds of the $k\times k$ minors
```

Exact new text:

```text
**Smith normal form**: a nonconstructive existence theorem over every PID,
obtained from aligned bases and splitting over the free image; **uniqueness**
via the determinantal divisors generated by the $k\times k$ minors. The B page
separately proves that Euclidean row and column reduction terminates and
computes the form. Never present that Euclidean algorithm as the proof over an
arbitrary PID.
```

If declined, a Step-5 author could again put a PID hypothesis over a proof that only works with a Euclidean function.

### MOD5-3 — record the fraction-field rank dictionary required by the drift unit

Recommendation: approve.

Target: `research/plan-algebra-track-expansion.md`, §II.6 paragraph beginning `Trap (i) is discharged.`

Exact old text:

```text
MOD-5 should nonetheless take the choice-free induction route for the structure
theorem and use $\operatorname{Frac}(R)$ only for the rank, because the induction
is what gives the invariant factors
```

Exact new text:

```text
MOD-5 takes the choice-free aligned-basis induction route for the structure
theorem. After uniqueness defines the free rank $r$, a separate dictionary
proposition proves
$\dim_{\operatorname{Frac}(R)}(\operatorname{Frac}(R)\otimes_R M)=r$:
extension of scalars kills every torsion cyclic summand and carries $R^r$ to
$\operatorname{Frac}(R)^r$.
```

If declined, the newly adjudicated direct prerequisite remains declared but its promised load-bearing rank seam is absent from the item scaffold.

### MOD5-4 — retain order 110 from the current spec

Recommendation: approve the non-action. The design header says order 106; the current spec and dispatch say 110. This batch uses 110 everywhere and makes no prose or spec edit.

Exact old design text:

```text
- **order 106**
```

Proposed replacement only if the lead Alpha elects to synchronize prose after confirming no global renumbering consequence:

```text
- **order 110**
```

If the replacement is declined, keep the discrepancy in the drift ledger; do not change this batch's manifest away from the current spec.

## Web research ledger and convention decisions

Source abbreviations used in the provenance tables below:

- **M** — J. S. Milne, *Fields and Galois Theory*, v5.10: `https://www.jmilne.org/math/Books/FT0.pdf`. Read the selected Chapter 3 fixed-field/Galois/correspondence sections, Chapter 4 through quartics, and Theorem 5.14.
- **KC** — Keith Conrad, *The Galois Correspondence*: `https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf`. Read §§4–5 in full.
- **KCQ** — Keith Conrad, *Galois Groups of Cubics and Quartics (Not in Characteristic 2)*: `https://kconrad.math.uconn.edu/blurbs/galoistheory/cubicquartic.pdf`. Read §§1–3 through Example 3.10.
- **KM** — Keith Conrad, *Modules over a PID*: `https://kconrad.math.uconn.edu/blurbs/linmultialg/modulesoverPID.pdf`. Read §§1–2.14, §4 through Remark 4.10, and §5 through Theorem 5.7 and Examples 5.8–5.10.
- **KMI** — Keith Conrad, *Introductory Notes on Modules*: `https://kconrad.math.uconn.edu/blurbs/linmultialg/moduleintro.pdf`. In the Step-3 fix pass, read §4, “Abelian groups vs. modules” (printed pp. 11–13): uniqueness of the integer action, equality of group homomorphisms with integer-linear maps, and the subgroup/cyclic/finitely-generated dictionary. The browser transport opened the complete 18-page PDF; KMI corroborates the new dictionary proposition, while KM and CP remain the pair's mechanically stamped canonical treatments.
- **CP** — M. Brussel, *Finitely Generated Modules over a PID*: `https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf`. Read §§1–5.4 and §§7.1–7.4.
- **WA** — A. Apisa, Wisconsin Math 542, *Modules and Fields*: `https://people.math.wisc.edu/~apisa/notes542.pdf`. Read the exact Lecture 10 matrix problem, Lectures 11–12, and the dimension-four similarity counterexample.

Convention decisions:

- `\operatorname{Gal}` is used only after the extension has been proved finite Galois. Arbitrary finite extensions use `\operatorname{Aut}(K/F)`.
- The polynomial Galois group is defined for a separable polynomial, so its splitting field is already Galois. No inseparable splitting field is mislabeled `Gal`.
- The discriminant-square criterion and the cubic/quartic tables explicitly require characteristic not two. Characteristic two's Berlekamp discriminant is deferred to `finite-fields-and-cyclotomic-extensions`, not silently generalized.
- The quartic resolvent uses roots $r_1r_2+r_3r_4$, $r_1r_3+r_2r_4$, $r_1r_4+r_2r_3$ and formula $y^3-by^2+(ac-4d)y-(a^2d+c^2-4bd)$ for $x^4+ax^3+bx^2+cx+d$. Conrad records an alternate resolvent; the page names this convention once.
- A PID proof is not called a row-reduction algorithm. The aligned-basis and Smith existence proofs are choice-free but nonalgorithmic; the Euclidean algorithm is a distinct B-page proposition.
- Invariant factors omit unit factors; elementary divisors are prime powers up to associates; the free rank is separate data. For an endomorphism the invariant factors are made monic in $F[x]$.
- The library's Jordan blocks have ones on the superdiagonal. The $(x-\lambda)$-power basis is reversed when necessary so the module-theoretic block uses that published convention.
- Rational canonical form means the field-independent companion-block form; “rational” does not mean the base field is necessarily $\mathbb Q$.
- `thm-relative-automorphism-group-and-separable-degree-bound` and the Galois-closure construction must state the adopted Choice cost in Facts when they invoke the published algebraic-embedding/algebraic-closure results. The Step-3 repair replaces the PID-to-UFD recursive factor chain by a maximal-bad-principal-ideal argument. Its only dependent-choice cost is inherited transparently from `thm-equivalent-characterizations-of-noetherian-modules`, whose ACC-to-maximal-condition implication records that cost; no recursive choice is made in the local proof. The aligned-basis induction itself remains choice-free.

## Dependency closure and published-item confidence routes

Every one of the 108 external dependency ids was opened from `items/` and its actual Definition, Statement, Example, or Statement-refuted clause was read. Every one is `status: published`; every one carries component provenance; none is legacy-unclassified and none has `provenance.statement: ai-generated`. The actual library-home audit finds every external dependency on a page of strictly smaller order, no B-leaf target, no unhomed target, and no planned-later target. The Step-3 additions were checked separately: the Noetherian maximal-condition theorem is on `chain-conditions-and-semisimple-modules` at order 108; the module and quotient definitions are on published pages of order at most 102; and the integer-domain suppliers are published on the two construction-of-the-reals pages, both strictly earlier than order 110.

After the drift-unit edges were synchronized, every external dependency lies in the declared prerequisite closure. Before that synchronization, the only out-of-closure targets were the six symmetric-polynomial/discriminant edges now covered by `symmetric-polynomials`.

Source-checked because their exact hypotheses or conventions are load-bearing:

- all field embedding, separable degree, normality, splitting-field, and finite normal-closure items were checked against M and KC;
- `thm-sign-is-a-homomorphism`, `def-alternating-group`, the symmetric-polynomial theorem, Vandermonde, and discriminant clauses were checked against M and KCQ;
- the Noetherian, PID, irreducible/prime, free-module, quotient-module, splitting-lemma, fraction-field, and tensor-extension clauses were checked against KM and CP;
- the unique abelian-group/integer-module action, equality of morphisms, and agreement of subgroup, cyclic, and finite-generation notions were checked against KMI §4, with CP §4 and KM Example 4.2 supplying the structure-theorem specialization;
- characteristic/minimal polynomial, companion-matrix, similarity, and Jordan clauses were checked against CP and WA;
- both published finite-abelian-group classifications and their exact trivial-group conventions were checked before planning the agreement proposition.

Established-from-knowledge after exact on-disk inspection: elementary group definitions, integer-power laws, and intersection/generated-subgroup laws, including the exact statement that every subgroup of an abelian group is normal; matrix multiplication and determinant multilinearity; vector-space dimension and rank-nullity; the integer and rational field structures; induction; and the module submodule/direct-sum definitions. The few eligible `ai-altered` targets in this class state standard exact identities, and their domains and endpoint conventions were verified from disk rather than inferred from titles.

No published dependency contains an unambiguous load-bearing falsehood, so no Step-5 published-dependency repair is proposed. The published Lagrange theorem still writes the natural embedding as applied notation in its own legacy text, but no new item repeats that notation and no repair is authorized by this scaffold.

There is no external fallback, no `proved_here: false` item, and no load-bearing forward reference.

## Planned component provenance and Step-5 source rationale

No planned Statement or construction is `ai-generated`. Consequently no `generation` block is planned and no generated-Statement dependency target exists. The `ai-altered` rows below are direct adaptations, comparisons, or concrete instantiations of the named source results; they are not unsupported inventions. Several local proofs or verifications are `ai-generated`, which does not change the literature-backed or AI-adapted Statement provenance.

Every source abbreviation resolves to the exact working URL in the web ledger and coverage file. Step 5 must place the stated source URL in `sources.references` for every source-backed component.

### `the-galois-correspondence`

| Item | Statement | Proof | Source/edit rationale |
|---|---|---|---|
| `def-relative-field-automorphism-group` | literature-derived | not-applicable | M/KC relative automorphism convention; cite M and KC. |
| `thm-relative-automorphism-group-and-separable-degree-bound` | literature-derived | ai-altered | M/KC automorphism bound, sharpened against the published separable-degree count; cite M and KC. |
| `def-fixed-field-of-an-automorphism-group` | literature-derived | not-applicable | M §3 and KC §4 fixed-field definition; cite both. |
| `thm-dedekind-linear-independence-of-characters` | literature-derived | ai-altered | M Theorem 5.14, rewritten in phase form; cite M. |
| `lem-artin-fixed-field-lower-degree-bound` | literature-derived | ai-altered | The Dedekind half of M/KC Artin; cite M and KC. |
| `lem-artin-fixed-field-upper-degree-bound` | literature-derived | ai-altered | The homogeneous-system/minimal-support half required by the design; cite M and KC. |
| `thm-artin-fixed-field-degree-theorem` | literature-derived | ai-altered | M Theorem 3.4/Corollary 3.5 and KC Theorems 5.2–5.3; cite M and KC. |
| `cor-fixed-field-map-is-injective-on-finite-automorphism-groups` | literature-derived | ai-altered | Immediate named fixed-field consequence of Artin in both treatments; cite M and KC. |
| `cor-relative-automorphism-order-divides-extension-degree` | literature-derived | ai-altered | KC Corollary 4.2 and M Exercise 3-5/Artin route; cite KC and M. |
| `def-finite-galois-extension-and-galois-group` | literature-derived | not-applicable | M Definition 3.9 and KC Definition 4.4; cite both. |
| `thm-finite-galois-extension-characterizations` | literature-derived | ai-altered | M Theorem 3.10 and KC Theorem 4.1; cite both. |
| `cor-finite-galois-over-every-intermediate-field` | literature-derived | ai-altered | M Corollary 3.13; cite M. |
| `def-galois-closure-of-a-finite-separable-extension` | literature-derived | not-applicable | M Remark 3.18, joined to the published normal-closure object; cite M. |
| `thm-galois-closures-exist-and-are-minimal` | literature-derived | ai-altered | M Corollary 3.12 and KC Theorem 4.8, with minimality from the published normal closure; cite M and KC. |
| `thm-fundamental-theorem-of-finite-galois-theory` | literature-derived | ai-altered | M Theorem 3.17 and KC Theorem 5.6; cite both. |
| `thm-normal-subgroups-and-quotients-in-the-galois-correspondence` | literature-derived | ai-altered | Normality/conjugation/quotient clauses of the same two theorems, separated as the design requires; cite M and KC. |
| `cor-finite-galois-extension-has-finitely-many-intermediate-fields` | literature-derived | ai-altered | Standard finite-group corollary of M/KC correspondence; cite both. |
| `prop-galois-correspondence-converts-composita-and-intersections` | literature-derived | ai-altered | KC Theorem 5.13 and M correspondence discussion; cite KC and M. |
| `thm-galois-translation-theorem` | literature-derived | ai-altered | M Proposition 3.19; cite M. |
| `thm-galois-group-of-a-compositum-as-a-fibre-product` | literature-derived | ai-altered | M Proposition 3.21; cite M. |
| `def-galois-group-of-a-separable-polynomial` | literature-derived | not-applicable | M unnumbered definition and KCQ §1; cite M and KCQ. |
| `thm-galois-group-embeds-in-the-symmetric-group-on-the-roots` | literature-derived | ai-altered | M polynomial-group section and KCQ Theorem 1.1 context; cite both. |
| `thm-irreducible-separable-polynomial-iff-galois-group-transitive` | literature-derived | ai-altered | M Proposition 4.5 and KCQ Theorem 1.1; cite both. |
| `prop-vandermonde-transforms-by-sign-under-the-galois-action` | literature-derived | ai-altered | M Proposition 4.1; cite M. |
| `thm-discriminant-square-criterion-for-an-alternating-galois-group` | ai-altered | ai-altered | M Corollary 4.2 and KCQ Theorem 1.3; Step 6 narrowed the Statement to monic polynomials so it stays within the on-disk discriminant definition. |
| `thm-galois-group-of-an-irreducible-cubic-by-discriminant` | ai-altered | ai-altered | M Example 4.7 and KCQ Theorem 2.1; Step 6 narrowed the Statement to monic cubics to preserve the preceding local domain. |
| `def-resolvent-cubic-of-a-monic-quartic` | literature-derived | not-applicable | KCQ Definition 3.1 and M quartic section; cite both. |
| `prop-resolvent-cubic-formula-and-discriminant` | literature-derived | ai-altered | M Lemma 4.9 and KCQ Theorem 3.4; cite both. |
| `lem-transitive-subgroups-of-s-four-and-the-resolvent-action` | literature-derived | ai-altered | KCQ Table 3 and M quartic subgroup analysis; cite both. |
| `thm-galois-group-of-an-irreducible-quartic-by-its-resolvent` | literature-derived | ai-altered | KCQ Theorem 3.6/Corollary 3.8 and M quartic table, with the M irreducibility-over-resolvent-field discriminator; cite both. |

### `the-galois-correspondence-examples`

| Item | Construction/statement | Verification/proof | Source/edit rationale |
|---|---|---|---|
| `ex-biquadratic-galois-correspondence-lattice` | literature-derived | ai-altered | KC's biquadratic examples and the M correspondence; full lattice calculated locally; cite KC and M. |
| `ex-s-three-galois-correspondence-for-x-cubed-minus-two` | literature-derived | ai-altered | KC Examples 4.6/5.8 and M's examples; cite KC and M. |
| `ex-d-four-galois-correspondence-for-x-four-minus-two` | literature-derived | ai-altered | KC Examples 4.7/5.9; exact ten-field coefficient calculation retained; cite KC. |
| `cex-separable-nonnormal-extension-with-trivial-automorphism-group` | literature-derived | ai-altered | M Example 3.3 and KC introductory example; cite both. |
| `cex-normal-inseparable-extension-with-trivial-automorphism-group` | literature-derived | ai-altered | M/KC exact positive-characteristic witness; cite both. |
| `ex-cubic-x-cubed-minus-three-x-plus-one-has-galois-group-a-three` | literature-derived | ai-altered | M Example 4.7 and KCQ Example 2.2; cite both. |
| `ex-cubic-x-cubed-minus-two-has-galois-group-s-three` | literature-derived | ai-altered | KC Example 4.6 and the M/KCQ cubic criterion; cite KC and KCQ. |
| `ex-quartic-x-four-minus-x-minus-one-has-galois-group-s-four` | literature-derived | ai-altered | KCQ Example 3.2, exact polynomial and calculations; cite KCQ. |
| `ex-quartic-x-four-plus-eight-x-plus-twelve-has-galois-group-a-four` | literature-derived | ai-altered | KCQ Example 3.3, exact modular factorization, resolvent, and discriminant; cite KCQ. |
| `ex-cyclotomic-quartic-has-galois-group-c-four` | ai-altered | ai-altered | Standard cyclic quartic adapted to the source table and proved without later cyclotomic theory; cite M and KCQ. |
| `ex-biquadratic-quartic-has-galois-group-v-four` | ai-altered | ai-altered | Concrete primitive element for the source-backed biquadratic $V_4$ extension; cite KC and KCQ. |
| `fs-extension-degree-equals-number-of-automorphisms` | literature-derived | ai-altered | KC Corollary 4.3 and exact cube-root witness; cite KC. |
| `fs-every-galois-subgroup-corresponds-to-a-normal-subextension` | literature-derived | ai-altered | KC Theorem 5.6/Example 5.8; cite KC. |
| `fs-polynomial-degree-determines-the-galois-group` | literature-derived | ai-altered | KCQ cubic table supplies same-degree $A_3/S_3$ witnesses; cite KCQ. |
| `fs-galois-correspondence-is-inclusion-preserving` | literature-derived | ai-altered | M/KC state and illustrate inclusion reversal; cite both. |

### `modules-over-a-pid-and-canonical-forms`

| Item | Statement | Proof | Source/edit rationale |
|---|---|---|---|
| `def-primary-component-of-a-module-over-a-domain` | literature-derived | not-applicable | KM/CP primary-component convention, namespaced from the finite-group definition; cite KM and CP. |
| `prop-torsion-and-primary-components-are-submodules-over-a-domain` | literature-derived | ai-altered | Required by the design enrichment and standard in KM; cite KM. |
| `cor-principal-ideal-domains-are-noetherian` | literature-derived | ai-altered | Standard PID/Noetherian bridge used in KM's divisor argument; cite KM. |
| `lem-irreducibles-are-prime-in-a-principal-ideal-domain` | literature-derived | ai-altered | Standard PID lemma underlying KM/CP prime powers; cite KM and CP. |
| `thm-principal-ideal-domains-are-unique-factorisation-domains` | literature-derived | ai-altered | Missing published bridge, source-backed by KM/CP; cite both. |
| `lem-maximal-divisor-pivot-for-pid-submodules` | literature-derived | ai-altered | KM Theorem 2.14 Steps 1–4 isolated for auditability; cite KM. |
| `thm-simultaneous-basis-theorem-for-pid-submodules` | literature-derived | ai-altered | KM Theorem 2.14; cite KM. |
| `cor-submodules-of-finite-free-pid-modules-are-free` | literature-derived | ai-altered | KM Theorem 2.2 and CP Theorem 1.0.1; cite both. |
| `def-invariant-factors-and-elementary-divisors-of-a-pid-module` | literature-derived | not-applicable | KM/CP, namespaced from the finite-group definitions; cite both. |
| `thm-invariant-factor-decomposition-over-a-pid` | literature-derived | ai-altered | KM Theorem 4.1 and CP §3; cite both. |
| `cor-finitely-generated-torsion-free-modules-over-a-pid-are-free` | literature-derived | ai-altered | KM Corollary 2.6; cite KM. |
| `cor-torsion-splits-from-the-free-part-over-a-pid` | literature-derived | ai-altered | KM Theorem 4.1 and discussion of canonical torsion/noncanonical complement; cite KM. |
| `lem-coprime-cyclic-pid-quotients-split` | literature-derived | ai-altered | CP §3.5 Chinese-remainder route; cite CP. |
| `thm-primary-decomposition-and-elementary-divisor-form-over-a-pid` | literature-derived | ai-altered | CP §3.5 and WA §11; cite CP and WA. |
| `lem-p-power-torsion-dimensions-recover-elementary-divisors` | ai-altered | ai-altered | KM Theorem 5.7's intrinsic residue-field layers strengthened to recover every exponent; source and local cyclic calculation both recorded; cite KM. |
| `thm-uniqueness-of-invariant-factors-and-elementary-divisors-over-a-pid` | literature-derived | ai-altered | CP §3.6, WA §11, and KM §5 intrinsic data; cite all three. |
| `def-free-rank-of-a-finitely-generated-pid-module` | ai-altered | not-applicable | Unique free summand in KM/CP, stated only after uniqueness; cite KM and CP. |
| `prop-fraction-field-dimension-recovers-pid-module-rank` | literature-derived | ai-altered | Standard fraction-field rank seam in KM Lemma 1.2, recast through the published extension-of-scalars machinery; cite KM. |
| `def-matrix-equivalence-and-smith-normal-form-over-a-pid` | literature-derived | not-applicable | CP Definitions 2.0.1 and 2.1.1; cite CP. |
| `def-determinantal-divisors-of-a-matrix-over-a-pid` | literature-derived | not-applicable | CP §2.1 and WA §§8–9; cite CP and WA. |
| `thm-smith-normal-form-existence-over-a-pid` | literature-derived | ai-altered | CP Theorem 2.1.2, proved through the page's aligned-basis route; cite CP and KM. |
| `thm-smith-normal-form-uniqueness-via-determinantal-divisors` | literature-derived | ai-altered | CP Theorem 2.1.6 and WA Theorem 27; cite CP and WA. |
| `prop-abelian-groups-are-z-modules` | literature-derived | ai-altered | KMI §4 gives the unique integer action and exact object/morphism/subgroup/cyclic/finitely-generated dictionary; the local proof realizes the action through the published additive integer-power laws and adds quotient agreement from the published quotient definitions. Cite KMI, with CP §4 as the specialization context. |
| `cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules` | literature-derived | ai-altered | KM Example 4.2 and CP §4, now specialized only after the KMI dictionary and the published integer-domain bridge; cite KM, CP, and KMI. |
| `prop-pid-module-classification-agrees-with-finite-abelian-group-classification` | ai-altered | ai-altered | Mandatory comparison of the source-backed PID theorem with the two published group theorems; cite KM/CP and the published sources. |
| `def-companion-matrix-of-a-monic-polynomial` | literature-derived | not-applicable | CP §7 and WA §11; cite CP and WA. |
| `def-polynomial-module-of-an-endomorphism` | literature-derived | not-applicable | CP §5 and WA §11; cite both. |
| `prop-polynomial-module-is-finitely-generated-torsion-with-minimal-annihilator` | literature-derived | ai-altered | CP §5.2 and WA §§11–12, joined to the published minimal polynomial; cite CP and WA. |
| `def-invariant-factors-and-elementary-divisors-of-an-endomorphism` | literature-derived | not-applicable | CP §§5.2–5.3 and WA §11; cite both. |
| `thm-rational-canonical-form-existence-and-uniqueness` | literature-derived | ai-altered | CP Theorem 7.2.1 and WA §11; cite both. |
| `cor-largest-invariant-factor-is-the-minimal-polynomial` | literature-derived | ai-altered | WA Lemma 34 and CP §5.2; cite both. |
| `cor-product-of-invariant-factors-is-the-characteristic-polynomial` | literature-derived | ai-altered | WA Lemma 33 and CP §5.2; cite both. |
| `thm-cayley-hamilton-from-pid-module-structure` | literature-derived | ai-altered | WA Corollary 35; genuinely different route from the published adjugate proof; cite WA. |
| `lem-linear-primary-companion-block-is-similar-to-a-jordan-block` | literature-derived | ai-altered | WA Lemma 37 and CP §7.4; cite both. |
| `thm-jordan-canonical-form-from-pid-module-structure` | literature-derived | ai-altered | WA Corollary 38 and CP §7.4; cite both. |
| `prop-module-and-jordan-string-block-data-agree` | ai-altered | ai-altered | Mandatory dictionary between the source module route and published rank-of-powers route; cite WA/CP and the published Jordan theorem. |
| `thm-matrices-are-similar-iff-their-invariant-factors-agree` | literature-derived | ai-altered | CP §5.4/§7.2 and WA §11; cite both. |

### `modules-over-a-pid-and-canonical-forms-examples`

| Item | Construction/statement | Verification/proof | Source/edit rationale |
|---|---|---|---|
| `prop-smith-normal-form-algorithm-over-a-euclidean-domain` | literature-derived | ai-altered | CP Theorem 2.1.2's Euclidean clause, separated from PID existence; cite CP. |
| `ex-smith-normal-form-of-an-explicit-integer-matrix` | literature-derived | ai-altered | Exact WA Lecture 10 matrix and result, with determinantal cross-check added; cite WA. |
| `ex-abelian-groups-of-order-three-hundred-sixty-in-both-canonical-forms` | ai-altered | ai-generated | Design-selected order 360, obtained by a direct checkable specialization of the published/source classifications; cite KM/CP and published finite-group theorems. |
| `ex-z-squared-modulo-two-diagonal-relations-is-cyclic-of-order-six` | ai-altered | ai-generated | Design-selected quotient, direct Smith/CRT calculation; cite CP. |
| `ex-rational-canonical-form-of-an-explicit-four-by-four-matrix` | ai-altered | ai-generated | Dimension-four adaptation of CP/WA companion-block examples; cite CP and WA. |
| `ex-rational-and-jordan-forms-of-one-matrix-over-q-and-c` | ai-altered | ai-generated | Source-backed scalar-extension comparison applied to the preceding explicit matrix; cite CP and WA. |
| `ex-real-quarter-turn-has-rational-form-but-no-real-jordan-form` | literature-derived | ai-altered | WA Remark 39 and CP diagonalization discussion; cite both. |
| `ex-polynomial-module-of-a-two-by-two-operator` | ai-altered | ai-generated | Exact-sized adaptation of WA/CP cyclic-module examples; cite WA and CP. |
| `fs-characteristic-and-minimal-polynomials-determine-similarity` | literature-derived | ai-altered | Exact WA Lecture 12 witness and design pin; cite WA. |
| `fs-finitely-generated-modules-over-domains-split-into-cyclic-modules` | ai-altered | ai-altered | Standard nonprincipal-ideal witness aligned with KM Example 4.9/Remark 4.10 and the design's `(2,x)` pin; cite KM. |
| `fs-torsion-free-modules-over-pids-are-free-without-finite-generation` | literature-derived | ai-altered | KM's exact $\mathbb Q$ over $\mathbb Z$ warning; cite KM. |
| `fs-elementary-divisors-determine-free-rank` | ai-altered | ai-generated | Direct checkable comparison of free modules with empty torsion data, forced by the source theorem's separate rank datum; cite KM/CP. |

The three examples with locally generated verification (`order 360`, the diagonal relation quotient, and the canonical-form matrices) are bounded symbolic calculations. Their proof contracts record every multiplication, factor alignment, dimension sum, or matrix invariant needed to check them. There is no concrete truth doubt requiring an external counterexample search, and none is a dependency target unless its Statement is `ai-altered`, never `ai-generated`.

## Exact Step-5 clauses bound by same-batch citations

The following strings must occur verbatim in the named authored section. They are the same-batch `quote` values in the proof contracts; changing one requires changing every consuming contract entry at Step 5. Fragment clauses must be embedded in grammatical full Statements or Examples.

- `def-relative-field-automorphism-group` Definition: `An $F$-automorphism of $K$ is an $F$-isomorphism $K\to K$.`
- `thm-dedekind-linear-independence-of-characters` Statement: `Every finite family of distinct group homomorphisms $G\to K^\times$ is linearly independent over $K$ as a family of functions.`
- `lem-artin-fixed-field-lower-degree-bound` Statement: `If $G$ is a finite group of automorphisms of $K$, then $[K:K^G]\ge |G|$.`
- `lem-artin-fixed-field-upper-degree-bound` Statement: `If $G$ is a finite group of automorphisms of $K$, then $[K:K^G]\le |G|$.`
- `thm-artin-fixed-field-degree-theorem` Statement must contain all variable-compatible forms consumed later: `If $G$ is a finite group of automorphisms of $K$, then $[K:K^G]=|G|$ and $\operatorname{Aut}(K/K^G)=G$.` The same Statement must make the substitutions `H` for `G` and `E` for `K` readable without changing its proposition; the Step-5 contract should normalize those quotes to the single canonical clause once the Facts labels are final.
- `thm-fundamental-theorem-of-finite-galois-theory` Statement: `The assignments $H\mapsto K^H$ and $E\mapsto\operatorname{Gal}(K/E)$ are mutually inverse inclusion-reversing bijections.` It must also contain `$[K:K^H]=|H|$ and $[K^H:F]=[G:H]$.`
- `thm-finite-galois-extension-characterizations` Statement: `A finite extension is Galois if and only if it is the splitting field of a separable polynomial.` This clause sits inside the full four-condition equivalence, not in place of the other conditions.
- `thm-galois-translation-theorem` Statement: `$\operatorname{Gal}(EL/L)\cong\operatorname{Gal}(E/E\cap L)$ by restriction.`
- `prop-vandermonde-transforms-by-sign-under-the-galois-action` Statement: `$\sigma(\delta)=\operatorname{sgn}(\sigma)\delta$ for the Vandermonde product of an ordered root list.`
- `thm-irreducible-separable-polynomial-iff-galois-group-transitive` Statement: `A positive-degree separable polynomial is irreducible if and only if its Galois group acts transitively on its roots.`
- `thm-discriminant-square-criterion-for-an-alternating-galois-group` Statement: `For a monic separable polynomial in characteristic not two, the Galois group lies in $A_n$ exactly when the discriminant is a square in the base field.`
- `lem-transitive-subgroups-of-s-four-and-the-resolvent-action` Statement: `The transitive subgroups of $S_4$ are $S_4,A_4,D_4,C_4$, and $V_4$, with the stated action on the three pairings.`
- `prop-resolvent-cubic-formula-and-discriminant` Statement: `A monic quartic and its resolvent cubic have the same discriminant.`
- `thm-normal-subgroups-and-quotients-in-the-galois-correspondence` Statement: `An intermediate field $E/F$ is Galois exactly when its corresponding subgroup is normal.`
- `thm-galois-group-of-an-irreducible-cubic-by-discriminant` Statement must contain the monic clauses: a monic irreducible separable cubic in characteristic not two has group $A_3$ for square discriminant and $S_3$ for nonsquare discriminant.
- `thm-galois-group-of-an-irreducible-quartic-by-its-resolvent` Statement must contain the five rows, including: `An irreducible separable quartic with irreducible resolvent and nonsquare discriminant has Galois group $S_4$.`, `An irreducible separable quartic with irreducible resolvent and square discriminant has Galois group $A_4$.`, and `In the unique-root resolvent branch, irreducibility over the resolvent splitting field distinguishes $D_4$ from $C_4$.`
- `ex-biquadratic-galois-correspondence-lattice` Example: `$\mathbb Q(\sqrt2,\sqrt3)/\mathbb Q$ is Galois with group $V_4$.` It must also state: `The trivial subgroup fixes the whole biquadratic extension, while each order-two subgroup fixes a quadratic field.`
- `cex-separable-nonnormal-extension-with-trivial-automorphism-group` Counterexample: `$\mathbb Q(\sqrt[3]{2})/\mathbb Q$ has degree three and trivial automorphism group.`
- `ex-s-three-galois-correspondence-for-x-cubed-minus-two` Example: `The three order-two subgroups correspond to three cubic fields that are not normal over $\mathbb Q$.`
- `ex-cubic-x-cubed-minus-three-x-plus-one-has-galois-group-a-three` Example: `$x^3-3x+1$ has Galois group $A_3$ over $\mathbb Q$.`
- `ex-cubic-x-cubed-minus-two-has-galois-group-s-three` Example: `$x^3-2$ has Galois group $S_3$ over $\mathbb Q$.`
- `cor-principal-ideal-domains-are-noetherian` Statement: `Every principal ideal domain is Noetherian.`
- `lem-irreducibles-are-prime-in-a-principal-ideal-domain` Statement: `Every irreducible element of a principal ideal domain is prime.`
- `thm-principal-ideal-domains-are-unique-factorisation-domains` Statement: `Every principal ideal domain is a unique factorisation domain.`
- `lem-maximal-divisor-pivot-for-pid-submodules` Statement: `A nonzero submodule of a finite free PID module admits a primitive pivot splitting both the ambient module and submodule.`
- `thm-simultaneous-basis-theorem-for-pid-submodules` Statement must contain: `For a submodule $N$ of a finite free PID module, aligned bases have nonzero factors $a_1\mid\cdots\mid a_r$.` and `There is a basis $a_1e_1,\ldots,a_re_r$ of the submodule with $r\le n$.`
- `thm-invariant-factor-decomposition-over-a-pid` Statement: `Every finitely generated PID module is a finite free module direct-summed with cyclic torsion quotients.` It must explicitly give the direct sum and divisibility chain.
- `lem-coprime-cyclic-pid-quotients-split` Statement: `$R/(ab)\cong R/(a)\oplus R/(b)$ when $a$ and $b$ are coprime.`
- `thm-primary-decomposition-and-elementary-divisor-form-over-a-pid` Statement: `The $p$-primary component is a finite direct sum of modules $R/(p^e)$.` and `A finitely generated torsion PID module is the direct sum of its prime-power cyclic elementary-divisor summands.`
- `lem-p-power-torsion-dimensions-recover-elementary-divisors` Statement: `The dimensions of $p^{k-1}M[p^k]$ recover every elementary-divisor exponent multiplicity.`
- `thm-uniqueness-of-invariant-factors-and-elementary-divisors-over-a-pid` Statement: `A finitely generated PID module is classified by its free rank and invariant factors, equivalently its elementary divisors.` It must also state uniqueness up to associates and order.
- `prop-fraction-field-dimension-recovers-pid-module-rank` Statement: `$\dim_{\operatorname{Frac}(R)}(\operatorname{Frac}(R)\otimes_R M)$ equals the free rank of $M$.`
- `thm-smith-normal-form-existence-over-a-pid` Statement: `Every rectangular matrix over a PID is equivalent to a Smith diagonal matrix.`
- `thm-smith-normal-form-uniqueness-via-determinantal-divisors` Statement: `Smith normal form is unique and its entries are recovered from successive determinantal divisors.`
- `prop-abelian-groups-are-z-modules` Statement: `Abelian groups and $\mathbb Z$-modules have the same objects and morphisms; their subgroups, generated subobjects, cyclic objects, finite generation, and quotients agree.` The proof must derive the action from the published additive integer powers and prove its uniqueness before using any part of this dictionary.
- `prop-pid-module-classification-agrees-with-finite-abelian-group-classification` Statement: `For a finite abelian group, the PID-module elementary divisors and invariant factors agree with the published group-theoretic data.`
- `prop-polynomial-module-is-finitely-generated-torsion-with-minimal-annihilator` Statement: `The annihilator of $V_T$ is generated by the minimal polynomial $\mu_T$.`
- `thm-rational-canonical-form-existence-and-uniqueness` Statement: `Every square matrix over a field is similar to the unique rational canonical form determined by its invariant factors.` It must also say: `In rational canonical form, the blocks are the companion matrices of the invariant factors.`
- `cor-largest-invariant-factor-is-the-minimal-polynomial` Statement: `On a nonzero finite-dimensional space, the largest invariant factor is the minimal polynomial.` The zero-space sentence must say the list is empty, not call $1$ its largest factor.
- `cor-product-of-invariant-factors-is-the-characteristic-polynomial` Statement: `The product of the invariant factors is the characteristic polynomial.`
- `lem-linear-primary-companion-block-is-similar-to-a-jordan-block` Statement: `$C((x-\lambda)^e)$ is similar to $J_e(\lambda).`
- `thm-matrices-are-similar-iff-their-invariant-factors-agree` Statement: `Two matrices are similar exactly when their invariant factors agree.`
- `ex-rational-canonical-form-of-an-explicit-four-by-four-matrix` Example: `The invariant factors are $x-1$ and $(x-1)(x^2+1)$.`

## Exact A-page summaries for Step 5

### `the-galois-correspondence`

Finite extensions, splitting fields, embeddings into algebraic closures, normality, and separability provide the field-theoretic background. Separable degree bounds the number of relative automorphisms, while the sign homomorphism and symmetric-polynomial theorem control the Vandermonde product, discriminant, and quartic resolvent. The tower law and quotient-group isomorphism theorem supply the degree and restriction calculations.

Relative automorphism groups and fixed fields lead through Dedekind independence to Artin's fixed-field theorem. The equivalent Galois conditions then support the inclusion-reversing subgroup–field correspondence, its normality and quotient clause, translation, and compositum formulas. Finally the action on roots relates irreducibility to transitivity; discriminants classify monic separable irreducible cubics in characteristic not two, and the resolvent gives the five possible transitive quartic Galois groups under the same characteristic hypothesis.

### `modules-over-a-pid-and-canonical-forms`

Modules, free modules, exact sequences, Noetherian conditions, principal ideals, determinants, and fraction fields supply the algebraic setting. The published finite-abelian-group classification provides the comparison target, while polynomial evaluation, minimal and characteristic polynomials, cyclic subspaces, similarity, and Jordan strings provide the operator language used by the canonical forms.

Principal ideal domains are first shown to be unique-factorisation domains, after which aligned bases produce invariant factors, primary components, elementary divisors, and their uniqueness. Determinantal divisors give Smith normal form, and scalar extension identifies free rank with fraction-field dimension. Applying the structure theorem to $V_T$ yields rational canonical form, the minimal- and characteristic-polynomial dictionaries, a module-theoretic Cayley–Hamilton proof, and a second Jordan-form construction whose blocks agree with the published Jordan-string classification.

Both B pages must have no authored summary body.

## Authoring-time exact lattice and computation data

For `ex-s-three-galois-correspondence-for-x-cubed-minus-two`, use $L=\mathbb Q(a,\omega)$, $a^3=2$, $\omega^2+\omega+1=0$, with $r(a)=\omega a$, $r(\omega)=\omega$, $s(a)=a$, and $s(\omega)=\omega^2$. The fixed fields are:

- $1\leftrightarrow L$;
- $\langle r\rangle=A_3\leftrightarrow\mathbb Q(\omega)$;
- the three order-two subgroups $\leftrightarrow\mathbb Q(a),\mathbb Q(\omega a),\mathbb Q(\omega^2a)$;
- $S_3\leftrightarrow\mathbb Q$.

Among strict intermediate fields, only $\mathbb Q(\omega)/\mathbb Q$ is normal. Including endpoints, $\mathbb Q$, $\mathbb Q(\omega)$, and $L$ are normal, while the three cubic fields are not.

For `ex-d-four-galois-correspondence-for-x-four-minus-two`, use $a^4=2$, $i^2=-1$, $r(a)=ia$, $r(i)=i$, $s(a)=a$, $s(i)=-i$. With composition in the library's convention, verify $r^4=s^2=1$ and $srs=r^{-1}$. The subgroup/fixed-field table is:

| Subgroup | Fixed field |
|---|---|
| $1$ | $\mathbb Q(a,i)$ |
| $\langle r^2\rangle$ | $\mathbb Q(a^2,i)$ |
| $\langle s\rangle$ | $\mathbb Q(a)$ |
| $\langle rs\rangle$ | $\mathbb Q(a(1+i))$ |
| $\langle r^2s\rangle$ | $\mathbb Q(ia)$ |
| $\langle r^3s\rangle$ | $\mathbb Q(a(1-i))$ |
| $\langle r\rangle$ | $\mathbb Q(i)$ |
| $\langle r^2,s\rangle$ | $\mathbb Q(a^2)$ |
| $\langle r^2,rs\rangle$ | $\mathbb Q(ia^2)$ |
| $D_4$ | $\mathbb Q$ |

The four reflection subgroups are nonnormal and give the four nonnormal quartic subfields. The center, cyclic order-four subgroup, both Klein four subgroups, trivial subgroup, and full group are normal and give normal endpoints or strict subextensions.

For the order-360 example, the invariant-factor forms are exactly:

```text
Z/360
Z/3  ⊕ Z/120
Z/2  ⊕ Z/180
Z/6  ⊕ Z/60
Z/2  ⊕ Z/2 ⊕ Z/90
Z/2  ⊕ Z/6 ⊕ Z/30
```

Their elementary-divisor forms are obtained by independently choosing one of $\mathbb Z/8$, $\mathbb Z/4\oplus\mathbb Z/2$, $\mathbb Z/2^{\oplus3}$ and one of $\mathbb Z/9$, $\mathbb Z/3^{\oplus2}$, then adjoining $\mathbb Z/5$. Every row must show the exact column alignment rather than only asserting CRT.

For the $A_4$ quartic use KCQ's exact proof: no integer divisor of 12 is a root of $x^4+8x+12$; modulo 5,

```text
x^4+8x+12 = (x-4)(x^3+4x^2+x+2),
```

with the cubic irreducible and only one linear factor. Gauss's lemma rules out rational quadratic factors. The resolvent is $y^3-48y-64$, irreducible modulo 5, and the discriminant is $331776=576^2$.

## Per-pair proof decomposition, corollary pass, and size review

Both required passes were performed separately for both A/B pairs.

### Galois pair

Long-proof decomposition:

- Artin's theorem is decomposed into Dedekind independence, a lower-degree lemma, an upper-degree lemma, and the final equality/group-recovery theorem.
- The finite Galois equivalence is separate from Artin and proves each of its four conditions through an explicit implication cycle.
- The fundamental theorem is separated from its normality/conjugation/quotient clause; the latter has distinct proof blocks for the conjugation formula, the normality biconditional, and the restriction quotient.
- Lattice operations, translation, and the fibre-product compositum theorem are separate results rather than clauses hidden in the correspondence proof.
- Polynomial computations are decomposed through faithful root action, transitivity, Vandermonde sign, the discriminant criterion, the cubic classification, resolvent definition/formula, the transitive-subgroup lemma, and the final quartic table.
- The $S_3$ and $D_4$ examples each prove the automorphism presentation before solving fixed-field equations and checking degrees.

Useful corollaries added by the corollary pass:

- fixed fields distinguish finite automorphism groups;
- the automorphism-group order divides the finite extension degree;
- a finite Galois extension is Galois over every intermediate field;
- a finite Galois extension has finitely many intermediate fields.

The converse/boundary pass retains the four designed false statements and gives both a separable-nonnormal and a normal-inseparable trivial-automorphism witness. The A page has 30 items, so no split is proposed.

### PID-module pair

Long-proof decomposition:

- The missing PID-to-UFD backbone is separated into PID Noetherianity, irreducible-implies-prime, and UFD.
- The choice-free structure route is decomposed into the maximal-divisor pivot, simultaneous aligned bases, submodule freeness, invariant-factor existence, primary/elementary conversion, intrinsic $p$-power dimensions, and uniqueness.
- The torsion-subset well-definedness appears before any theorem calls it a submodule; torsion-free freeness and torsion/free splitting are separate corollaries.
- Smith form is decomposed into matrix equivalence/definition, determinantal divisors, PID existence, determinantal uniqueness, and a distinct Euclidean algorithm on the B page.
- The finite-abelian specialization is now preceded by `prop-abelian-groups-are-z-modules`, which separately proves the unique integer action and the object/morphism/subobject/generation/quotient dictionary. The specialization and the mandatory agreement with the published group classification remain separate later items.
- The operator route is decomposed into $V_T$, its torsion/annihilator theorem, operator invariant data, rational canonical form, the minimal and characteristic polynomial dictionaries, the second Cayley–Hamilton proof, the linear-primary companion/Jordan bridge, the second Jordan proof, the agreement proposition, and unconditional similarity classification.
- Fraction-field rank is a separate dictionary after uniqueness, so the aligned-basis proof does not silently become a fraction-field proof.

Useful corollaries added by the corollary pass:

- submodules of finite free PID modules are free with bounded rank;
- finitely generated torsion-free PID modules are free;
- torsion splits from a finite free complement;
- finitely generated abelian groups receive the full free-plus-torsion classification;
- the largest invariant factor and product of invariant factors give the minimal and characteristic polynomials.

The B page retains all four designed false statements, the Euclidean algorithm, and the requested Smith, group, rational/Jordan, real nonsplitting, and $V_T$ examples. The A page has 37 items, so no split is proposed.

## Per-page item list

### `the-galois-correspondence` — 30 items

1. `def-relative-field-automorphism-group` — definition — Relative field automorphisms and $\operatorname{Aut}(K/F)$
2. `thm-relative-automorphism-group-and-separable-degree-bound` — theorem — $\operatorname{Aut}(K/F)$ is a group and $|\operatorname{Aut}(K/F)|\le [K:F]_s\le [K:F]$
3. `def-fixed-field-of-an-automorphism-group` — definition — The fixed field $K^G$ of a group of field automorphisms
4. `thm-dedekind-linear-independence-of-characters` — theorem — Dedekind's linear independence theorem for distinct characters
5. `lem-artin-fixed-field-lower-degree-bound` — lemma — Artin's fixed-field lower bound $[K:K^G]\ge |G|$
6. `lem-artin-fixed-field-upper-degree-bound` — lemma — Artin's fixed-field upper bound $[K:K^G]\le |G|$
7. `thm-artin-fixed-field-degree-theorem` — theorem — Artin's fixed-field theorem: $[K:K^G]=|G|$ and $\operatorname{Aut}(K/K^G)=G$
8. `cor-fixed-field-map-is-injective-on-finite-automorphism-groups` — corollary — Distinct finite automorphism groups have distinct fixed fields
9. `cor-relative-automorphism-order-divides-extension-degree` — corollary — For a finite extension, $|\operatorname{Aut}(K/F)|$ divides $[K:F]$
10. `def-finite-galois-extension-and-galois-group` — definition — Finite Galois extensions and $\operatorname{Gal}(K/F)$
11. `thm-finite-galois-extension-characterizations` — theorem — Equivalent characterizations of a finite Galois extension
12. `cor-finite-galois-over-every-intermediate-field` — corollary — A finite Galois extension is Galois over every intermediate field
13. `def-galois-closure-of-a-finite-separable-extension` — definition — The Galois closure of a finite separable extension
14. `thm-galois-closures-exist-and-are-minimal` — theorem — Finite separable extensions have finite minimal Galois closures
15. `thm-fundamental-theorem-of-finite-galois-theory` — theorem — The fundamental theorem of finite Galois theory
16. `thm-normal-subgroups-and-quotients-in-the-galois-correspondence` — theorem — Normal subgroups, conjugate fields, and quotient groups in the Galois correspondence
17. `cor-finite-galois-extension-has-finitely-many-intermediate-fields` — corollary — A finite Galois extension has finitely many intermediate fields
18. `prop-galois-correspondence-converts-composita-and-intersections` — proposition — The Galois correspondence exchanges composita with subgroup intersections and field intersections with generated subgroups
19. `thm-galois-translation-theorem` — theorem — The Galois translation theorem
20. `thm-galois-group-of-a-compositum-as-a-fibre-product` — theorem — The Galois group of a compositum is a fibre product of Galois groups
21. `def-galois-group-of-a-separable-polynomial` — definition — The Galois group of a separable polynomial
22. `thm-galois-group-embeds-in-the-symmetric-group-on-the-roots` — theorem — A polynomial Galois group acts faithfully on its roots
23. `thm-irreducible-separable-polynomial-iff-galois-group-transitive` — theorem — A separable polynomial is irreducible exactly when its Galois group is transitive on the roots
24. `prop-vandermonde-transforms-by-sign-under-the-galois-action` — proposition — The Vandermonde product transforms by the sign of the root permutation
25. `thm-discriminant-square-criterion-for-an-alternating-galois-group` — theorem — For a monic separable polynomial in characteristic not two, the Galois group lies in $A_n$ exactly when the discriminant is a square
26. `thm-galois-group-of-an-irreducible-cubic-by-discriminant` — theorem — A monic irreducible separable cubic in characteristic not two has Galois group $A_3$ or $S_3$ according to its discriminant
27. `def-resolvent-cubic-of-a-monic-quartic` — definition — The resolvent cubic of a monic quartic
28. `prop-resolvent-cubic-formula-and-discriminant` — proposition — The coefficient formula and discriminant of the quartic resolvent
29. `lem-transitive-subgroups-of-s-four-and-the-resolvent-action` — lemma — The transitive subgroups of $S_4$ and their action on the three pairings
30. `thm-galois-group-of-an-irreducible-quartic-by-its-resolvent` — theorem — The five-case resolvent classification of an irreducible quartic Galois group

### `the-galois-correspondence-examples` — 15 items

1. `ex-biquadratic-galois-correspondence-lattice` — example — The complete Galois correspondence for $\mathbb Q(\sqrt2,\sqrt3)/\mathbb Q$
2. `ex-s-three-galois-correspondence-for-x-cubed-minus-two` — example — The full $S_3$ correspondence for the splitting field of $x^3-2$
3. `ex-d-four-galois-correspondence-for-x-four-minus-two` — example — The ten-field $D_4$ correspondence for the splitting field of $x^4-2$
4. `cex-separable-nonnormal-extension-with-trivial-automorphism-group` — counterexample — $\mathbb Q(\sqrt[3]{2})/\mathbb Q$ is separable and nonnormal with trivial automorphism group
5. `cex-normal-inseparable-extension-with-trivial-automorphism-group` — counterexample — $\mathbb F_p(t)/\mathbb F_p(t^p)$ is normal and inseparable with trivial automorphism group
6. `ex-cubic-x-cubed-minus-three-x-plus-one-has-galois-group-a-three` — example — $x^3-3x+1$ has discriminant $81$ and Galois group $A_3$ over $\mathbb Q$
7. `ex-cubic-x-cubed-minus-two-has-galois-group-s-three` — example — $x^3-2$ has discriminant $-108$ and Galois group $S_3$ over $\mathbb Q$
8. `ex-quartic-x-four-minus-x-minus-one-has-galois-group-s-four` — example — $x^4-x-1$ has Galois group $S_4$ over $\mathbb Q$
9. `ex-quartic-x-four-plus-eight-x-plus-twelve-has-galois-group-a-four` — example — $x^4+8x+12$ has Galois group $A_4$ over $\mathbb Q$
10. `ex-cyclotomic-quartic-has-galois-group-c-four` — example — $x^4+x^3+x^2+x+1$ has Galois group $C_4$ over $\mathbb Q$
11. `ex-biquadratic-quartic-has-galois-group-v-four` — example — $x^4-10x^2+1$ has Galois group $V_4$ over $\mathbb Q$
12. `fs-extension-degree-equals-number-of-automorphisms` — false statement — FALSE: every degree-$n$ extension has exactly $n$ automorphisms
13. `fs-every-galois-subgroup-corresponds-to-a-normal-subextension` — false statement — FALSE: every subgroup in the Galois correspondence gives a normal subextension
14. `fs-polynomial-degree-determines-the-galois-group` — false statement — FALSE: the degree of a polynomial determines its Galois group
15. `fs-galois-correspondence-is-inclusion-preserving` — false statement — FALSE: the Galois correspondence preserves inclusion

### `modules-over-a-pid-and-canonical-forms` — 37 items

1. `def-primary-component-of-a-module-over-a-domain` — definition — The $p$-primary component of a module over a domain
2. `prop-torsion-and-primary-components-are-submodules-over-a-domain` — proposition — Torsion elements and $p$-primary elements form submodules over a domain
3. `cor-principal-ideal-domains-are-noetherian` — corollary — Every principal ideal domain is Noetherian
4. `lem-irreducibles-are-prime-in-a-principal-ideal-domain` — lemma — Every irreducible element of a principal ideal domain is prime
5. `thm-principal-ideal-domains-are-unique-factorisation-domains` — theorem — Every principal ideal domain is a unique factorisation domain
6. `lem-maximal-divisor-pivot-for-pid-submodules` — lemma — A nonzero PID submodule has a maximal coordinate ideal and a primitive pivot
7. `thm-simultaneous-basis-theorem-for-pid-submodules` — theorem — Simultaneous bases for a submodule of a finite free module over a PID
8. `cor-submodules-of-finite-free-pid-modules-are-free` — corollary — A submodule of a free module of finite rank over a PID is free of no larger rank
9. `def-invariant-factors-and-elementary-divisors-of-a-pid-module` — definition — Invariant factors and elementary divisors of a finitely generated module over a PID
10. `thm-invariant-factor-decomposition-over-a-pid` — theorem — Invariant-factor decomposition of a finitely generated module over a PID
11. `cor-finitely-generated-torsion-free-modules-over-a-pid-are-free` — corollary — Every finitely generated torsion-free module over a PID is free
12. `cor-torsion-splits-from-the-free-part-over-a-pid` — corollary — A finitely generated PID module is its torsion submodule direct-summed with a finite free module
13. `lem-coprime-cyclic-pid-quotients-split` — lemma — Coprime cyclic quotients over a PID split by the Chinese remainder map
14. `thm-primary-decomposition-and-elementary-divisor-form-over-a-pid` — theorem — Primary decomposition and elementary-divisor form for finitely generated PID modules
15. `lem-p-power-torsion-dimensions-recover-elementary-divisors` — lemma — $p$-power torsion dimensions recover the elementary divisors of a PID module
16. `thm-uniqueness-of-invariant-factors-and-elementary-divisors-over-a-pid` — theorem — Uniqueness of invariant factors and elementary divisors over a PID
17. `def-free-rank-of-a-finitely-generated-pid-module` — definition — The free rank of a finitely generated module over a PID
18. `prop-fraction-field-dimension-recovers-pid-module-rank` — proposition — Extension to the fraction field recovers the free rank of a finitely generated PID module
19. `def-matrix-equivalence-and-smith-normal-form-over-a-pid` — definition — Matrix equivalence and Smith normal form over a PID
20. `def-determinantal-divisors-of-a-matrix-over-a-pid` — definition — Determinantal divisors from the minors of a matrix over a PID
21. `thm-smith-normal-form-existence-over-a-pid` — theorem — Every matrix over a PID has a Smith normal form
22. `thm-smith-normal-form-uniqueness-via-determinantal-divisors` — theorem — Smith normal form is unique through the gcds of its minors
23. `prop-abelian-groups-are-z-modules` — proposition — Abelian groups and $\mathbb Z$-modules have the same objects and morphisms
24. `cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules` — corollary — The fundamental theorem of finitely generated abelian groups from PID modules
25. `prop-pid-module-classification-agrees-with-finite-abelian-group-classification` — proposition — The PID-module and finite-abelian-group classifications have the same canonical data
26. `def-companion-matrix-of-a-monic-polynomial` — definition — The companion matrix of a monic polynomial
27. `def-polynomial-module-of-an-endomorphism` — definition — The $F[x]$-module $V_T$ of an endomorphism
28. `prop-polynomial-module-is-finitely-generated-torsion-with-minimal-annihilator` — proposition — For finite-dimensional $V$, $V_T$ is finitely generated and torsion, with annihilator generated by the minimal polynomial
29. `def-invariant-factors-and-elementary-divisors-of-an-endomorphism` — definition — Invariant factors and elementary divisors of an endomorphism
30. `thm-rational-canonical-form-existence-and-uniqueness` — theorem — Existence and uniqueness of rational canonical form
31. `cor-largest-invariant-factor-is-the-minimal-polynomial` — corollary — On a nonzero finite-dimensional space, the largest invariant factor is the minimal polynomial
32. `cor-product-of-invariant-factors-is-the-characteristic-polynomial` — corollary — The product of the invariant factors is the characteristic polynomial
33. `thm-cayley-hamilton-from-pid-module-structure` — theorem — Cayley-Hamilton by the PID-module structure theorem
34. `lem-linear-primary-companion-block-is-similar-to-a-jordan-block` — lemma — A companion block for $(x-\lambda)^e$ is similar to the Jordan block $J_e(\lambda)$
35. `thm-jordan-canonical-form-from-pid-module-structure` — theorem — Jordan canonical form from the elementary divisors of $V_T$
36. `prop-module-and-jordan-string-block-data-agree` — proposition — The elementary-divisor and Jordan-string constructions give the same Jordan blocks
37. `thm-matrices-are-similar-iff-their-invariant-factors-agree` — theorem — Two matrices are similar exactly when their invariant factors agree

### `modules-over-a-pid-and-canonical-forms-examples` — 12 items

1. `prop-smith-normal-form-algorithm-over-a-euclidean-domain` — proposition — Euclidean row and column reduction computes Smith normal form
2. `ex-smith-normal-form-of-an-explicit-integer-matrix` — example — Smith normal form of an explicit three-by-three integer matrix
3. `ex-abelian-groups-of-order-three-hundred-sixty-in-both-canonical-forms` — example — The abelian groups of order $360$ in elementary-divisor and invariant-factor form
4. `ex-z-squared-modulo-two-diagonal-relations-is-cyclic-of-order-six` — example — $\mathbb Z^2/\langle(2,0),(0,3)\rangle$ is cyclic of order six
5. `ex-rational-canonical-form-of-an-explicit-four-by-four-matrix` — example — Rational canonical form of an explicit four-by-four matrix
6. `ex-rational-and-jordan-forms-of-one-matrix-over-q-and-c` — example — One matrix in rational form over $\mathbb Q$ and Jordan form after adjoining its roots
7. `ex-real-quarter-turn-has-rational-form-but-no-real-jordan-form` — example — The real quarter-turn has rational canonical form but no real Jordan form
8. `ex-polynomial-module-of-a-two-by-two-operator` — example — The polynomial module of a two-by-two operator
9. `fs-characteristic-and-minimal-polynomials-determine-similarity` — false statement — FALSE: characteristic and minimal polynomials determine similarity
10. `fs-finitely-generated-modules-over-domains-split-into-cyclic-modules` — false statement — FALSE: every finitely generated module over a domain is a direct sum of cyclic modules
11. `fs-torsion-free-modules-over-pids-are-free-without-finite-generation` — false statement — FALSE: every torsion-free module over a PID is free
12. `fs-elementary-divisors-determine-free-rank` — false statement — FALSE: elementary divisors determine the free rank

## New-id and reuse report

The exact collision scan checked every final manifest id against `items/<id>.md` and every exact `"id": "<id>"` occurrence in the current `research/plan-spec.json`. It reports 94 new ids and zero collisions. The Step-3 addition `prop-abelian-groups-are-z-modules` was checked by exact id and by semantic searches for abelian-group/integer-module dictionaries; the only semantic matches were proof steps or later examples, not an earlier load-bearing Statement. A semantic `rg` pass for Dedekind independence, Artin fixed fields, the fundamental theorem of Galois theory, resolvent cubics, simultaneous PID bases, Smith normal form, PID-to-UFD, rational canonical form, and operator elementary divisors found no differently named published Statement that duplicates a new backbone item.

The semantic pass found and reused these existing objects instead of re-minting them:

- `def-f-homomorphisms-and-embeddings-of-field-extensions`, including the existing notion of an $F$-automorphism;
- `def-normal-algebraic-extension`, `def-separable-elements-and-separable-extensions`, `def-normal-closure-of-an-algebraic-extension`, and the complete embedding/separable-degree apparatus;
- `def-vandermonde-polynomial`, `def-discriminant-of-a-monic-polynomial`, and the full symmetric-polynomial theorem;
- `def-annihilator-and-torsion-of-a-module`, which defines the torsion subset but does not prove it is a submodule;
- the published finite-abelian elementary-divisor and invariant-factor definitions and classifications;
- `def-annihilator-ideal-and-minimal-polynomial-of-an-endomorphism`, the cyclic-vector/companion theorem, `thm-cayley-hamilton`, and the complete published Jordan-string development.

The search also found the abelian-group/`\mathbb Z`-module dictionary only inside proof steps of `thm-universal-property-of-module-tensor-products` and `thm-character-duals-of-flat-modules-are-injective`, and inside the later example `ex-the-free-abelian-group-monad`. None states the dictionary as an earlier dependency-eligible interface, so `prop-abelian-groups-are-z-modules` is a new spine proposition rather than a duplicate.

The native false statement `fs-characteristic-and-minimal-polynomials-determine-similarity` deliberately restates the published B-leaf claim `fs-equal-characteristic-and-minimal-polynomials-imply-similarity` under the design's explicit B-leaf exception. It uses the pinned $J_2\oplus J_2$ versus $J_2\oplus J_1\oplus J_1$ witness and adds an agreement Remark, with no dependency edge to the earlier B item.

## Forward references and cross-batch dependencies

There are no forward references and no external fallbacks.

This batch consumes no item from another `frontier-17` batch. The drift-unit prerequisites and all item dependencies are published or internal to the pair.

Expected consumers in other batches:

- `finite-fields-and-cyclotomic-extensions` follows the Galois companion page and should reuse the finite Galois characterization, fundamental theorem, normality quotient, polynomial root action, and compositum results rather than minting them again;
- `solvability-by-radicals-and-kummer-theory` should reuse the Galois closure, polynomial Galois group, and normal-subgroup quotient items;
- `noetherian-rings-and-hilbert-basis` follows the PID companion and may reuse PID Noetherianity, free rank, Smith form, and the PID-to-UFD theorem.

No downstream batch is assumed to have created anything needed here.

## Findings for Step-3 Alpha

1. Approve GA2-2, correcting the $S_3$ lattice's normal-field count. The current prose's “two normal / four non-normal intermediate fields” is impossible; declining directs Step 5 to write false mathematics.
2. Approve MOD5-1, retaining the local PID-to-UFD and aligned-basis backbone. The published prerequisite does not prove PID implies UFD; declining leaves elementary divisors and the maximal-divisor pivot with an unstated load-bearing theorem.
3. Approve the characteristic-not-two hypotheses on the discriminant, cubic, and quartic classification items. Declining makes the alternating-group square criterion false in characteristic two and invalidates the five-case table as stated.
4. Approve MOD5-2, keeping PID Smith existence and the Euclidean computation algorithm as distinct items. Declining risks a general PID Statement with a Euclidean-only proof.
5. Approve MOD5-3, retaining `prop-fraction-field-dimension-recovers-pid-module-rank`. The drift unit added the fraction-field prerequisite on the design's promise that rank uses it; declining leaves that direct edge mathematically unused.
6. Approve GA2-3, retaining both focused Artin bound lemmas. Declining compresses two independent arguments into the page's main engine and weakens the durable proof-obligation map.
7. Approve the one-way-new-content cross-reference implementation for the second Cayley–Hamilton proof and the Jordan agreement item, or escalate the reverse-link requirement separately. New items will link the published proofs, and the Jordan agreement proposition names both routes; this batch cannot edit a correct published item merely to add a backlink under the published-dependency-repair protocol. Declining without a separate authorized published edit means the owner rule “cross-reference each way” cannot literally be met.
8. Keep order 110 in the batch and let the lead Alpha decide whether to update the old design header from 106. Declining this non-action would put the batch out of sync with the current spec.
9. Treat the six missing `fetch_verified` stamps as a mechanical blocker requiring an escalation-free engine retry. All six full PDFs were opened through web research, but local Node DNS returned `EAI_AGAIN`; declining the retry leaves the source-fetch stage red.

These are independent recommendations ordered by mathematical correctness, dependency closure, proof validity, workflow authorization, and source mechanics. No finding proposes a page split, a load-bearing forward reference, an external fallback, or a published mathematical repair.

## Confidence and verification limits

Mathematical confidence is high in the scaffolded Statements and proof routes. I independently checked:

- both Artin bounds and the fixed-field group recovery;
- all four implications in the finite Galois characterization;
- both inverse identities and both degree formulas in the correspondence;
- the conjugation formula, normality biconditional, restriction kernel, and quotient isomorphism;
- translation and fibre-product image conditions, including coincident and trivial extensions;
- the Vandermonde sign, characteristic-two exclusion, cubic alternatives, resolvent coefficient/discriminant calculation, and all five quartic rows;
- the complete $S_3$ and $D_4$ subgroup/fixed-field data;
- PID-to-UFD, maximal pivot, aligned-basis induction, invariant/elementary conversion, and the intrinsic $p$-power dimension formula at $k=1$ and beyond the largest exponent;
- zero modules, empty bases, unit invariant factors, rank-deficient and zero-sized matrices, $k=0$ determinantal divisors, and both directions of the uniqueness/classification results;
- fraction-field killing of torsion, the companion/Jordan basis orientation, the zero-space absence of a largest invariant factor, and the dimension-four similarity counterexample;
- all six order-360 canonical forms and the Smith invariants $1,2,6$ of the Wisconsin matrix.

Every external dependency was opened from disk and every direct published contract quote is an exact normalized substring of the cited primary section. Every load-bearing dependency is internal to the pair or published on a smaller-order page in the current declared prerequisite closure. There is no exception.

What was not verified: local Node transport could not fetch and stamp any source; the batch ids are not yet spliced, so `validate-plan` and `depsource` have not classified them; the strict proof-contract tool correctly reports `item-missing` before Step 5 authors the files and therefore did not pass; no precheck, Step-6 reader, Alpha risk review, paired judge, publication, audit stamp, commit, or push has occurred. No registered finite-smoke model applies to these field/module classification claims, and no smoke pass is offered as evidence.

## Final Step-2 checks

- `coverage-checklist`: 2 pages, 159 harvested headings, 0 errors, 0 warnings.
- `content-policy --manifest-only`: 93 scoped items, 0 errors, 0 warnings.
- Manifest item counts: 30/15 for the Galois pair and 36/12 for the PID-module pair; each internal dependency is earlier on its own page or on the earlier A page.
- External home/order/closure audit: 0 unhomed, 0 nonpublished, 0 B-leaf, 0 planned-later, 0 AI-generated dependency targets, and 0 targets outside current prerequisite ancestry.
- Proof-contract consistency: 79 proof-bearing ids, 79 contracts, all eight boundary dispositions per contract, no undeclared citation source, no citation use pointing to an absent planned step, and 0 exact published-quote misses.
- Exact id scan: 93 new ids, 0 `items/` or current-plan collisions.
- Current unspliced `validate-plan research/plan-spec.json`: pass. This validates the current plan and drift edges, not the unspliced batch item lists.
- Current unspliced `depsource`: 0 unresolved, 0 planned-later. This does not classify the 93 new ids before Step 4.
- `prosecheck --warnings`: 0 errors and count heuristics only in this required audit report; no positional contradiction.
- Applied-canonical-embedding notation scan: no forbidden application occurs in an owned artifact.
- Scoped `git diff --check`: clean.
- `source-fetch-check --stamp`: 0/6 stamped, all six failed with `EAI_AGAIN`; exact retry recorded above.

The only open Step-2 blocker is the missing mechanical source stamp. No mathematical, dependency-order, id-collision, page-size, cross-batch-input, external-fallback, or published-falsehood blocker remains in the batch artifacts.

## Step-3 fix pass

The entries below use the stable finding ids from `research/frontier-17-alpha-b-step3-scaffold-review.md`; none is renumbered.

- **B3-1 — already correct.** The manifest still omits the false “two normal / four non-normal” count. `ex-s-three-galois-correspondence-for-x-cubed-minus-two` instead identifies the single normal strict intermediate field and the three nonnormal cubic fields, and GA2-2 retains the exact applyable design correction. No Step-3 scaffold edit was needed.
- **B3-2 — applied.** Conrad's locator is narrowed to the exact source span from §4 at PDF p. 11 through the end of §5 at PDF p. 24, so §6 is no longer falsely claimed. The same pass re-harvested every named §4–5 result omitted from the earlier checklist, including Example 4.9, Corollary 4.10, Theorem 4.11, Remark 4.12, Theorem 4.13, Example 5.1, and Examples 5.10–5.11. The primitive-element Theorem 6.1 and Examples 6.2–6.3 are outside the corrected locator rather than undisposed.
- **B3-3 — applied.** `thm-principal-ideal-domains-are-unique-factorisation-domains` now depends on `thm-equivalent-characterizations-of-noetherian-modules`. Its strategy and contract use the published maximal condition to choose a maximal bad principal ideal, then contradict maximality with the two strictly larger factor ideals. The recursive factor-chain sentence and its local dependent-choice consumption are removed; only the published equivalence's recorded choice cost remains.
- **B3-4 — applied.** The new source-backed `prop-abelian-groups-are-z-modules` precedes the specialization and proves the unique integer action, equality of group homomorphisms with integer-linear maps, and agreement of subgroups, generated objects, cyclicity, finite generation, and quotients. Its exact id and semantic statement were absent from `items/` and the current plan; the only matches were proof steps or a later example. The dictionary's quotient clause cites `cor-subgroups-of-abelian-groups-are-normal`; the finite-abelian corollary then cites the dictionary together with `thm-int-comm-ring`, `lem-int-cancellation`, `lem-subgroups-of-z-are-cyclic`, and the PID definition before invoking module classification. Its proof contract maps the integer-domain, principal-ideal, dictionary, specialization, and finite-torsion obligations separately.
- **B3-5 — applied.** Brussel's claimed full ranges were re-read and expanded to 73 source-owned section or named-result rows. Explicit dispositions now include Remark 1.0.2, Example 2.1.3, §2.1.4, Definition 2.1.5, Remark 2.1.7, Definition 3.3.1, Remark 3.3.2, Corollary 3.4.1, Definitions/Theorems 3.5.1–3.6.1, the named §4 examples and lattice result, every named result in §§5.1–5.4, and every named result in §§7.1–7.4. Declined numerical or geometric applications have result-specific reasons; nothing was dropped from the manifest to satisfy the harvest.

### Current gate and closure record

- `coverage-checklist`: 2 pages, 206 harvested rows, 0 errors, 0 warnings.
- `source-fetch-check --stamp`: 6/6 canonical sources fetch-verified, 0 newly stamped; the existing full-document stamps remain current because no URL changed.
- `content-policy --manifest-only`: 94 scoped items, 0 errors, 0 warnings.
- `validate-plan research/plan-spec.json`: pass on the current unspliced spec. This command does not classify the batch's item lists before Step 4.
- `prosecheck --warnings`: 0 errors; the warnings are count phrases required by this audit report and per-page inventory, with no positional contradiction.
- Contract consistency: 80 proof-bearing ids, 80 scope entries, and 80 contracts; all eight boundary cases occur in every contract, every citation source is declared in the owning item's dependencies, and normalized exact-clause checking reports no published-source quote miss.
- Current page counts are 30/15 for the Galois pair and 37/12 for the PID-module pair. Both decomposition and corollary passes remain complete, and neither A page needs a split.

All five Alpha findings are closed in the owned artifacts. Mathematical confidence is high in the two repaired dependency routes and in the new dictionary proposition. I verified every new published dependency from disk, the maximal-bad-ideal proof including strictness of both ideal containments, positive/zero/negative integer scalars, both directions of the morphism and subobject dictionaries, the trivial-group and zero-ideal endpoints, and every newly disposed source heading against the full browser-extracted PDFs. I did not splice the manifest, author any item, run precheck on unwritten items, or claim item-level `depsource` coverage before Step 4.

## Continuity checkpoint

- Current substage: Step-5 authoring. The complete `the-galois-correspondence` A/B pair is authored on disk; all 39 proof-bearing items in that pair pass scoped precheck after canonical renumbering. The six definitions correctly use `precheck: n/a`.
- Owned artifacts: the 45 Galois item paths declared in `research/frontier-17-batch-3.pages.json`; the still-unwritten 49 PID-module item paths; both eventual page files under `library/abstract-algebra/`; and the batch notes, coverage, and proof-contract files.
- Completed gates: Step-3 Alpha-b recheck is sufficient; current spliced `validate-plan` passes; manifest-only content policy passes for 94 ids; coverage checklist passes for 206 harvested rows; Galois reflow is unchanged and Galois precheck reports 39 checked, 0 failing.
- Frozen-text state: no text is judge-frozen and no judge was run. Galois proofs have adopted precheck's canonical phases. Their proof-contract step maps and citation-use arrays are not yet synchronized, so no strict contract pass is claimed.
- Open mathematical constraints: author the PID-to-UFD maximal-bad-ideal route without a local recursive choice; prove aligned bases before invariant-factor existence; keep general-PID Smith existence separate from the Euclidean algorithm; discharge the abelian-group/integer-module dictionary before specialization; retain zero modules and matrices; and orient the companion/Jordan basis to the published superdiagonal convention.
- Dependency ledger pending: the Galois prose genuinely adds `thm-algebraic-embedding-extension` to the normality theorem, `thm-normal-subgroups-and-quotients-in-the-galois-correspondence` to the compositum theorem, orbit/Lagrange facts to the cubic theorem, and orbit/Sylow facts to the transitive-$S_4$ lemma; it drops the unused tower-law edge from the translation theorem. The endomorphism invariant-data definition adds the already earlier module-classification and torsion-module results.
- Exact next action: author `prop-torsion-and-primary-components-are-submodules-over-a-domain` through the PID structure and uniqueness chain, then the Smith, abelian-group, and canonical-form blocks, and only afterward synchronize all 80 proof contracts from final disk text.

## Step-5 authoring

All four page compositions and all 94 declared item files were authored as `status: draft`, `origin: session`. No scaffold item was dropped, merged, renamed, narrowed, or deferred, so the coverage dispositions remain true of disk. The two A summaries use the exact final two-paragraph text recorded above; both B pages have no authored body. No judge, Alpha risk review, audit stamp, publication, commit, or push was performed.

### Per-item precheck and component provenance

The source/edit rationales in the four component-provenance tables under `## Planned component provenance and Step-5 source rationale` are now the final ledger: every disk value below matches its row there, and each source-backed component carries the listed working reference URL. No Statement or construction is `ai-generated`; therefore there was no generated-claim counterexample search to perform. The locally generated verifications are the bounded symbolic calculations identified in that earlier ledger.

#### `the-galois-correspondence`

- `def-relative-field-automorphism-group` — `n/a` — `literature-derived` / `not-applicable`.
- `thm-relative-automorphism-group-and-separable-degree-bound` — `pass` — `literature-derived` / `ai-altered`.
- `def-fixed-field-of-an-automorphism-group` — `n/a` — `literature-derived` / `not-applicable`.
- `thm-dedekind-linear-independence-of-characters` — `pass` — `literature-derived` / `ai-altered`.
- `lem-artin-fixed-field-lower-degree-bound` — `pass` — `literature-derived` / `ai-altered`.
- `lem-artin-fixed-field-upper-degree-bound` — `pass` — `literature-derived` / `ai-altered`.
- `thm-artin-fixed-field-degree-theorem` — `pass` — `literature-derived` / `ai-altered`.
- `cor-fixed-field-map-is-injective-on-finite-automorphism-groups` — `pass` — `literature-derived` / `ai-altered`.
- `cor-relative-automorphism-order-divides-extension-degree` — `pass` — `literature-derived` / `ai-altered`.
- `def-finite-galois-extension-and-galois-group` — `n/a` — `literature-derived` / `not-applicable`.
- `thm-finite-galois-extension-characterizations` — `pass` — `literature-derived` / `ai-altered`.
- `cor-finite-galois-over-every-intermediate-field` — `pass` — `literature-derived` / `ai-altered`.
- `def-galois-closure-of-a-finite-separable-extension` — `n/a` — `literature-derived` / `not-applicable`.
- `thm-galois-closures-exist-and-are-minimal` — `pass` — `literature-derived` / `ai-altered`.
- `thm-fundamental-theorem-of-finite-galois-theory` — `pass` — `literature-derived` / `ai-altered`.
- `thm-normal-subgroups-and-quotients-in-the-galois-correspondence` — `pass` — `literature-derived` / `ai-altered`.
- `cor-finite-galois-extension-has-finitely-many-intermediate-fields` — `pass` — `literature-derived` / `ai-altered`.
- `prop-galois-correspondence-converts-composita-and-intersections` — `pass` — `literature-derived` / `ai-altered`.
- `thm-galois-translation-theorem` — `pass` — `literature-derived` / `ai-altered`.
- `thm-galois-group-of-a-compositum-as-a-fibre-product` — `pass` — `literature-derived` / `ai-altered`.
- `def-galois-group-of-a-separable-polynomial` — `n/a` — `literature-derived` / `not-applicable`.
- `thm-galois-group-embeds-in-the-symmetric-group-on-the-roots` — `pass` — `literature-derived` / `ai-altered`.
- `thm-irreducible-separable-polynomial-iff-galois-group-transitive` — `pass` — `literature-derived` / `ai-altered`.
- `prop-vandermonde-transforms-by-sign-under-the-galois-action` — `pass` — `literature-derived` / `ai-altered`.
- `thm-discriminant-square-criterion-for-an-alternating-galois-group` — `pass` — `ai-altered` / `ai-altered` after the Step-6 monic-domain repair.
- `thm-galois-group-of-an-irreducible-cubic-by-discriminant` — `pass` — `ai-altered` / `ai-altered` after the Step-6 monic-domain repair.
- `def-resolvent-cubic-of-a-monic-quartic` — `n/a` — `literature-derived` / `not-applicable`.
- `prop-resolvent-cubic-formula-and-discriminant` — `pass` — `literature-derived` / `ai-altered`.
- `lem-transitive-subgroups-of-s-four-and-the-resolvent-action` — `pass` — `literature-derived` / `ai-altered`.
- `thm-galois-group-of-an-irreducible-quartic-by-its-resolvent` — `pass` — `literature-derived` / `ai-altered`.

#### `the-galois-correspondence-examples`

- `ex-biquadratic-galois-correspondence-lattice` — `pass` — `literature-derived` / `ai-altered`.
- `ex-s-three-galois-correspondence-for-x-cubed-minus-two` — `pass` — `literature-derived` / `ai-altered`.
- `ex-d-four-galois-correspondence-for-x-four-minus-two` — `pass` — `literature-derived` / `ai-altered`.
- `cex-separable-nonnormal-extension-with-trivial-automorphism-group` — `pass` — `literature-derived` / `ai-altered`.
- `cex-normal-inseparable-extension-with-trivial-automorphism-group` — `pass` — `literature-derived` / `ai-altered`.
- `ex-cubic-x-cubed-minus-three-x-plus-one-has-galois-group-a-three` — `pass` — `literature-derived` / `ai-altered`.
- `ex-cubic-x-cubed-minus-two-has-galois-group-s-three` — `pass` — `literature-derived` / `ai-altered`.
- `ex-quartic-x-four-minus-x-minus-one-has-galois-group-s-four` — `pass` — `literature-derived` / `ai-altered`.
- `ex-quartic-x-four-plus-eight-x-plus-twelve-has-galois-group-a-four` — `pass` — `literature-derived` / `ai-altered`.
- `ex-cyclotomic-quartic-has-galois-group-c-four` — `pass` — `ai-altered` / `ai-altered`.
- `ex-biquadratic-quartic-has-galois-group-v-four` — `pass` — `ai-altered` / `ai-altered`.
- `fs-extension-degree-equals-number-of-automorphisms` — `pass` — `literature-derived` / `ai-altered`.
- `fs-every-galois-subgroup-corresponds-to-a-normal-subextension` — `pass` — `literature-derived` / `ai-altered`.
- `fs-polynomial-degree-determines-the-galois-group` — `pass` — `literature-derived` / `ai-altered`.
- `fs-galois-correspondence-is-inclusion-preserving` — `pass` — `literature-derived` / `ai-altered`.

#### `modules-over-a-pid-and-canonical-forms`

- `def-primary-component-of-a-module-over-a-domain` — `n/a` — `literature-derived` / `not-applicable`.
- `prop-torsion-and-primary-components-are-submodules-over-a-domain` — `pass` — `literature-derived` / `ai-altered`.
- `cor-principal-ideal-domains-are-noetherian` — `pass` — `literature-derived` / `ai-altered`.
- `lem-irreducibles-are-prime-in-a-principal-ideal-domain` — `pass` — `literature-derived` / `ai-altered`.
- `thm-principal-ideal-domains-are-unique-factorisation-domains` — `pass` — `literature-derived` / `ai-altered`.
- `lem-maximal-divisor-pivot-for-pid-submodules` — `pass` — `literature-derived` / `ai-altered`.
- `thm-simultaneous-basis-theorem-for-pid-submodules` — `pass` — `literature-derived` / `ai-altered`.
- `cor-submodules-of-finite-free-pid-modules-are-free` — `pass` — `literature-derived` / `ai-altered`.
- `def-invariant-factors-and-elementary-divisors-of-a-pid-module` — `n/a` — `literature-derived` / `not-applicable`.
- `thm-invariant-factor-decomposition-over-a-pid` — `pass` — `literature-derived` / `ai-altered`.
- `cor-finitely-generated-torsion-free-modules-over-a-pid-are-free` — `pass` — `literature-derived` / `ai-altered`.
- `cor-torsion-splits-from-the-free-part-over-a-pid` — `pass` — `literature-derived` / `ai-altered`.
- `lem-coprime-cyclic-pid-quotients-split` — `pass` — `literature-derived` / `ai-altered`.
- `thm-primary-decomposition-and-elementary-divisor-form-over-a-pid` — `pass` — `literature-derived` / `ai-altered`.
- `lem-p-power-torsion-dimensions-recover-elementary-divisors` — `pass` — `ai-altered` / `ai-altered`.
- `thm-uniqueness-of-invariant-factors-and-elementary-divisors-over-a-pid` — `pass` — `literature-derived` / `ai-altered`.
- `def-free-rank-of-a-finitely-generated-pid-module` — `n/a` — `ai-altered` / `not-applicable`.
- `prop-fraction-field-dimension-recovers-pid-module-rank` — `pass` — `literature-derived` / `ai-altered`.
- `def-matrix-equivalence-and-smith-normal-form-over-a-pid` — `n/a` — `literature-derived` / `not-applicable`.
- `def-determinantal-divisors-of-a-matrix-over-a-pid` — `n/a` — `literature-derived` / `not-applicable`.
- `thm-smith-normal-form-existence-over-a-pid` — `pass` — `literature-derived` / `ai-altered`.
- `thm-smith-normal-form-uniqueness-via-determinantal-divisors` — `pass` — `literature-derived` / `ai-altered`.
- `prop-abelian-groups-are-z-modules` — `pass` — `literature-derived` / `ai-altered`.
- `cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules` — `pass` — `literature-derived` / `ai-altered`.
- `prop-pid-module-classification-agrees-with-finite-abelian-group-classification` — `pass` — `ai-altered` / `ai-altered`.
- `def-companion-matrix-of-a-monic-polynomial` — `n/a` — `literature-derived` / `not-applicable`.
- `def-polynomial-module-of-an-endomorphism` — `n/a` — `literature-derived` / `not-applicable`.
- `prop-polynomial-module-is-finitely-generated-torsion-with-minimal-annihilator` — `pass` — `literature-derived` / `ai-altered`.
- `def-invariant-factors-and-elementary-divisors-of-an-endomorphism` — `n/a` — `literature-derived` / `not-applicable`.
- `thm-rational-canonical-form-existence-and-uniqueness` — `pass` — `literature-derived` / `ai-altered`.
- `cor-largest-invariant-factor-is-the-minimal-polynomial` — `pass` — `literature-derived` / `ai-altered`.
- `cor-product-of-invariant-factors-is-the-characteristic-polynomial` — `pass` — `literature-derived` / `ai-altered`.
- `thm-cayley-hamilton-from-pid-module-structure` — `pass` — `literature-derived` / `ai-altered`.
- `lem-linear-primary-companion-block-is-similar-to-a-jordan-block` — `pass` — `literature-derived` / `ai-altered`.
- `thm-jordan-canonical-form-from-pid-module-structure` — `pass` — `literature-derived` / `ai-altered`.
- `prop-module-and-jordan-string-block-data-agree` — `pass` — `ai-altered` / `ai-altered`.
- `thm-matrices-are-similar-iff-their-invariant-factors-agree` — `pass` — `literature-derived` / `ai-altered`.

#### `modules-over-a-pid-and-canonical-forms-examples`

- `prop-smith-normal-form-algorithm-over-a-euclidean-domain` — `pass` — `literature-derived` / `ai-altered`.
- `ex-smith-normal-form-of-an-explicit-integer-matrix` — `pass` — `literature-derived` / `ai-altered`.
- `ex-abelian-groups-of-order-three-hundred-sixty-in-both-canonical-forms` — `pass` — `ai-altered` / `ai-generated`.
- `ex-z-squared-modulo-two-diagonal-relations-is-cyclic-of-order-six` — `pass` — `ai-altered` / `ai-generated`.
- `ex-rational-canonical-form-of-an-explicit-four-by-four-matrix` — `pass` — `ai-altered` / `ai-generated`.
- `ex-rational-and-jordan-forms-of-one-matrix-over-q-and-c` — `pass` — `ai-altered` / `ai-generated`.
- `ex-real-quarter-turn-has-rational-form-but-no-real-jordan-form` — `pass` — `literature-derived` / `ai-altered`.
- `ex-polynomial-module-of-a-two-by-two-operator` — `pass` — `ai-altered` / `ai-generated`.
- `fs-characteristic-and-minimal-polynomials-determine-similarity` — `pass` — `literature-derived` / `ai-altered`.
- `fs-finitely-generated-modules-over-domains-split-into-cyclic-modules` — `pass` — `ai-altered` / `ai-altered`.
- `fs-torsion-free-modules-over-pids-are-free-without-finite-generation` — `pass` — `literature-derived` / `ai-altered`.
- `fs-elementary-divisors-determine-free-rank` — `pass` — `ai-altered` / `ai-generated`.

### Step-5 scaffold-change ledger

No title or top-level mathematical claim was changed from the scaffold. The following dependency lists changed so that the final metadata says exactly what the prose uses:

- `thm-finite-galois-extension-characterizations`: dropped `thm-isomorphisms-extend-to-splitting-fields`; the final embedding-count implication uses root preservation directly and never invokes extension of an isomorphism.
- `cor-finite-galois-over-every-intermediate-field`: dropped `thm-tower-law-for-finite-field-extensions`; a finite $F$-basis directly spans over the intermediate field.
- `thm-normal-subgroups-and-quotients-in-the-galois-correspondence`: added `thm-algebraic-embedding-extension`; both normality of the intermediate field and surjectivity of restriction extend embeddings.
- `thm-galois-translation-theorem`: dropped `thm-tower-law-for-finite-field-extensions`; fixed fields and Artin supply the isomorphism without a degree computation.
- `thm-galois-group-of-a-compositum-as-a-fibre-product`: added `thm-normal-subgroups-and-quotients-in-the-galois-correspondence`; it supplies an extension of the second compatible automorphism before translation adjusts the first restriction.
- `def-galois-group-of-a-separable-polynomial`: added `thm-isomorphisms-extend-to-splitting-fields`; it discharges independence from the chosen splitting field.
- `thm-galois-group-of-an-irreducible-cubic-by-discriminant`: added `cor-orbit-stabilizer-cardinality` and `thm-lagrange`; they reduce a transitive subgroup of $S_3$ to orders three and six.
- `lem-transitive-subgroups-of-s-four-and-the-resolvent-action`: added `cor-orbit-stabilizer-cardinality` and `thm-sylow-second-theorem`; they license the possible subgroup orders and the order-eight conjugacy class.
- `ex-biquadratic-galois-correspondence-lattice`: dropped the simple-extension embedding theorem; the final verification constructs all sign automorphisms and fixed fields directly.
- `ex-s-three-galois-correspondence-for-x-cubed-minus-two`: dropped the cubic discriminant theorem; the final verification constructs and exhausts the six automorphisms directly.
- `ex-d-four-galois-correspondence-for-x-four-minus-two`: dropped the quartic resolvent theorem; the final verification constructs the dihedral group and complete fixed-field table directly.
- `cex-separable-nonnormal-extension-with-trivial-automorphism-group`: dropped the finite-Galois definition; the witness separately checks separability, nonnormality, and automorphisms.
- `lem-coprime-cyclic-pid-quotients-split`: dropped the module first-isomorphism theorem; the final proof explicitly proves the residue map injective and surjective.
- `def-invariant-factors-and-elementary-divisors-of-an-endomorphism`: added the torsion-module proposition and PID-module uniqueness theorem; they discharge existence and uniqueness of the defined endomorphism data.
- `ex-z-squared-modulo-two-diagonal-relations-is-cyclic-of-order-six`: dropped the general Smith-existence and invariant-factor theorems; explicit operations and the coprime quotient isomorphism establish the computation.
- `fs-finitely-generated-modules-over-domains-split-into-cyclic-modules`: added integer cancellation and the polynomial-ring domain theorem; they establish that the witness module really lies over a domain.
- `fs-torsion-free-modules-over-pids-are-free-without-finite-generation`: added the integer ring, cancellation, cyclic-subgroup, and PID definitions; they explicitly verify that the base ring of the rational witness is a PID.

### Gates and escalations

- `reflow`: all 94 item files unchanged after final prose.
- `precheck`: 80 proof-bearing items checked, 0 failing; all 14 definitions correctly use `n/a`.
- `proof-contract --strict`: 80/80 items, 0 errors, 0 warnings.
- `citation-fidelity --fail-on-missing-quote`: all 124 citations have exact excerpts; no widening candidate remains.
- `boundary-audit --fail-on-contradicted --fail-on-template`: 640 rows, no repeated template cluster and no contradicted disposition.
- `coverage-checklist`: 2 pages, 206 harvested rows, 0 errors, 0 warnings.
- `content-policy`: 94 scoped items, 0 errors, 0 warnings.
- `validate-plan`: pass on the current spliced plan.
- `rendercheck`: 98 scoped item/page files, no delimiter, KaTeX, wikilink-in-math, or YAML error.
- `prosecheck --warnings`: 98 scoped files, 0 errors, 0 warnings.
- `finite-smoke`: 0 registered checks apply; this is not evidence for any theorem.
- `risk-report`: all 80 proof-bearing items were scored and routed; high and critical rows await Alpha's required Step-6 `risk_review` and are not author-certified.
- `fwdcheck` and `extcheck`: repo-wide passes; this batch has no forward reference or external fallback.
- `citecheck`: repo-wide heuristic warnings were triaged; the only batch-local warning was the phrase “transitivity of similarity”, which was replaced by the explicit composition of conjugating basis changes.
- Repo-wide `depcheck` was run but remains red solely because the out-of-scope published item `rem-sine-period-arc-length-integrand-is-nonelementary` has `proved_here: false` without `verification.sources_checked`. This batch neither depends on nor cites that item, and the published-dependency-repair exception does not authorize editing it. No batch-local dependency, cycle, B-leaf, missing-item, page-order, or publication error was reported.

There is no mathematical escalation within the owned pairs, no suspected false published dependency used here, and no external fallback. Confidence is high in the final Statements, computations, and dependency citations after a full proof-obligation and boundary reread. The aligned-basis proof was additionally reopened against Conrad Theorem 2.14 during authoring, and its maximal-value-ideal, primitive-basis, and $a_1\mid a_2$ steps now follow that exact route. I did not independently formalize the general theorems in a proof assistant, run a paired judge, perform the Step-6 independent-reader or Alpha audit, or verify any claim beyond the declared source ranges and local derivations.
