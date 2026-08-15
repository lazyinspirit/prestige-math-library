# frontier-14 batch 5 — Beta scaffold notes

## Scope and owned artifacts

Run frontier-14, batch 5 owns only:

- research/frontier-14-batch-5.pages.json
- research/frontier-14-batch-5.coverage.json
- research/frontier-14-batch-5.proof-contracts.json
- research/frontier-14-batch-5.notes.md

The scaffold contains the A page quadratic-residues-and-the-legendre-symbol at order 57.003 and its B companion at order 57.004. The A page has 16 items; the B page has 9. Nothing here depends on a B-page item. The declared edge to primitive-roots-and-unit-groups-modulo-n-examples is used only to reach that pair's A page and its prerequisite closure.

No split is proposed. Sixteen A items are far below the size threshold, and the mathematical cut is coherent: the two supplements end this page, while quadratic reciprocity begins quadratic-reciprocity-and-the-jacobi-symbol.

## Design corrections and additions

The NT-2 prose design was harvested rather than transcribed.

The proposed thm-power-residue-criterion-modulo-prime was not minted. The published thm-eulers-criterion-for-binomial-congruences is stronger: for every modulus admitting a primitive root it gives the iff test with exponent phi(n)/gcd(m,phi(n)). Its exact hypotheses are preserved whenever it is specialised to n=p.

The proposed cor-number-of-nth-roots-modulo-prime was not minted. The published cor-number-of-solutions-of-a-binomial-congruence is stronger and gives exactly gcd(phi(n),m) solution classes under the same primitive-root and solubility hypotheses. Every specialisation also cites cor-primitive-roots-modulo-prime and cor-totient-at-one-and-at-a-prime; neither hypothesis is hidden.

The source harvest added ex-unique-cube-root-of-two-modulo-twenty-nine. Mascot's selected range through PDF p. 10 contains this named computation, and it gives a useful direct test of the retained unique-root corollary.

The Gauss half-system permutation remains a separate lemma because equal-sign injectivity, opposite-sign exclusion, and finite self-injectivity are independently auditable moves used by Gauss's lemma. No smaller microlemma is needed.

A prerequisite overlay initially found that lem-integer-part, although published, is homed outside this page's declared closure. The second supplement therefore does not cite it. Instead write p=8q+r with r=1,3,5,7 and list the crossing indices explicitly. Their counts are respectively 2q, 2q+1, 2q+1, and 2q+2. This proves the required parity using only the division algorithm and congruence definition already in closure.

## Source ledger and locator verification

### Hackman

Source: H. Hackman, Elementary Number Theory,
https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf

Read range: Chapter D, §D.I “The Legendre Symbol,” printed pp. 107–117 and §D.IV “Gauß' Lemma,” printed pp. 123–127. In the 415-page cached PDF at /tmp/src/hackman.pdf these are PDF pages 119–129 and 135–139. Text was extracted with pdftotext, not inferred from an HTTP response. The range contains the D.I.1–D.I.15 and D.IV.1–D.IV.6 headings enumerated in the coverage file.

Harvest use: general quadratic-residue and Legendre conventions; Euler's criterion; multiplicativity; both supplements; the signed half-system permutation; Gauss's lemma; and the (3/11) computation. D.I.12–D.I.15 were read and explicitly routed rather than silently omitted.

### Stein

Source: William Stein, Elementary Number Theory: Primes, Congruences, and Secrets,
https://wstein.org/ent/ent.pdf

Read range: Chapter 4, §§4.1–4.3, printed pp. 69–76, corresponding to PDF pages 76–83 of the 172-page cached file /tmp/src/stein.pdf. Text was extracted with pdftotext. The extracted range contains Definitions 4.1.1–4.1.2, Lemma 4.1.4, Remarks 4.1.5–4.1.6, Theorem 4.1.7, Proposition 4.2.1, Corollary 4.2.3, Examples 4.2.4–4.2.5, and Lemma 4.3.1.

Harvest use: the square subgroup and character structure; Euler's criterion; exact root count; the modulo-11 table; the large-prime computation; and Gauss's lemma. The reciprocity and Jacobi clauses in the same range are explicitly deferred to their named page.

### Gorodnik

Source: Alexander Gorodnik, Number Theory, Lecture 9,
https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf

Read range: §1 “Basic properties,” pp. 1–3, stopping before §2 Quadratic Reciprocity. Browser PDF text extraction exposed Definition 1.1, Theorem 1.2, Example 1.3, Definition 1.4, Theorems 1.5–1.6, and the two unnumbered consequences after Theorem 1.6.

Harvest use: independent verification of the general power criterion, the fourth-power example modulo 17, the Legendre definition including zero, Euler's criterion including p|a, multiplicativity and class-independence, the first supplement, the formula 1+(a/p), and its quadratic-discriminant form.

### Mascot

Source: Nicolas Mascot, Legendre Symbols and Quadratic Reciprocity,
https://www.maths.tcd.ie/~mascotn/teaching/2020/MAU23101/3%20Legendre.pdf

Read range: Chapter 3, “k-th roots mod p,” PDF pp. 8–10. The extracted range exposes the named theorem counting the kth-power image, its gcd(k,p-1)-to-one corollary, the unique kth-root theorem for gcd(k,p-1)=1, and the cube-root-of-two modulo 29 example on p. 10.

Harvest use: the count and two-root clause of thm-count-of-quadratic-residues-modulo-prime, the statement and constructive inverse-exponent formula for cor-unique-kth-root-modulo-prime-for-coprime-exponent, and the worked cube-root example.

The prescribed creation of a fresh pypdf virtual environment was attempted. Package installation could not resolve the package host in the shell sandbox. No permission prompt or escalation was requested. This was not a source blocker because text-bearing cached copies of Hackman and Stein were available for exact extraction, and the browser PDF reader extracted Gorodnik and Mascot. All four cited URLs were live when opened.

## Canonical coverage yield

The coverage artifact records 70 source or canonical headings:

- included: 37
- inline: 12
- already-published: 6
- deferred: 8
- out-of-scope: 7

The six already-published dispositions include the stronger power-residue criterion, the stronger general solution count, Hackman's Freshman's Dream result, the Gorodnik occurrence of the same general criterion, and the two required duplicate checks ex-unit-group-modulo-one-hundred-decomposition and ex-units-modulo-eight-are-not-cyclic.

Declines most likely to be challenged:

- Quadratic reciprocity and reciprocity computations are deferred to quadratic-reciprocity-and-the-jacobi-symbol and its examples companion. This cut is explicit in the dispatch.
- Prime-power and composite-modulus square-root criteria are deferred to quadratic-reciprocity-and-the-jacobi-symbol, whose NT-3 remit includes square roots modulo n.
- The two modulo-13 table computations and the SAGE enumeration examples are declined because the companion retains independent hand computations that exercise the same mechanism without duplicating a table or software transcript.
- The two unnamed exercise-section headings are not treated as named results. Their retained pre-reciprocity computations are on this companion; reciprocity and composite-modulus exercises are routed to quadratic-reciprocity-and-the-jacobi-symbol-examples.

Every decline names the licensing page id. The assertions about prime powers, Jacobi symbols, and reciprocity were checked against the on-disk plan before routing. The duplicate examples and all stated prerequisite items were checked on disk.

## Published dependencies opened and confidence routes

All 32 external dependencies in the final manifest were opened on disk, including their actual Definition or Statement. None is legacy-unclassified. The component provenance shown below is therefore the primary classification; the confidence route is recorded additionally as requested.

Source-checked exact statements and conventions:

- thm-eulers-criterion-for-binomial-congruences — literature-derived/ai-altered; checked against Gorodnik Theorem 1.2 and the exact on-disk phi(n) formulation.
- cor-number-of-solutions-of-a-binomial-congruence — ai-altered/ai-altered; checked against the cyclic-exponent count in Hackman/Gorodnik and the exact on-disk solubility hypothesis.
- cor-primitive-roots-modulo-prime — literature-derived/ai-altered; the exact existence statement was opened and matched the primitive-root use in the sources.
- cor-totient-at-one-and-at-a-prime — ai-altered/ai-generated; the exact statement phi(p)=p-1 was opened and independently checked by the standard representative count.
- cor-unit-group-modulo-prime-is-cyclic — literature-derived/ai-altered; its exact order p-1 and cyclicity statement was opened.
- thm-linear-congruence-solvability-and-solution-count — literature-derived/ai-altered; its iff and exact d-solution clause were opened.
- thm-fermats-little-theorem — literature-derived/ai-altered; both the unit and all-integer clauses were opened.
- thm-root-bound-for-polynomials-over-a-domain — literature-derived/ai-altered; the exact nonzero-degree-n bound was opened.
- thm-unit-criterion-modulo-n — literature-derived/ai-altered; both the iff and representative-independence consequence were opened.
- thm-z-mod-p-is-a-field — literature-derived/ai-altered; the exact all-primes field statement was opened.
- def-congruence-modulo-an-integer — literature-derived/not-applicable; the divisibility definition and modulus conventions were opened.
- def-kernel-and-image-of-group-homomorphism — literature-derived/not-applicable; the exact kernel, image, and surjectivity clauses were opened.

Established-from-knowledge after exact on-disk statement inspection:

- def-common-divisor-and-gcd — ai-altered/not-applicable.
- def-generated-subgroup — ai-altered/not-applicable.
- def-group-homomorphism — ai-altered/not-applicable.
- def-group-power — ai-altered/not-applicable.
- def-index — ai-altered/not-applicable.
- def-integers-modulo-n — ai-altered/not-applicable.
- def-monoid-finite-product — ai-altered/not-applicable.
- def-symmetric-group — ai-altered/not-applicable.
- def-unit-group-modulo-n-and-euler-totient — ai-altered/not-applicable.
- lem-cyclic-subgroup-is-the-set-of-powers — ai-altered/ai-generated.
- lem-field-is-a-commutative-ring — ai-altered/ai-generated.
- lem-group-homomorphism-basic-properties — ai-altered/ai-generated.
- lem-group-power-laws — ai-altered/ai-generated.
- lem-prime-not-dividing-is-coprime — ai-altered/ai-generated; its exact last clause discharges every conversion from a nonzero prime residue to the gcd hypothesis of the published binomial criterion.
- lem-symmetric-group-is-a-group — ai-altered/ai-generated.
- thm-division-algorithm-in-z — ai-altered/ai-generated.
- thm-integers-modulo-n-basic-algebra — ai-altered/ai-generated.
- thm-lagrange — ai-altered/ai-altered; only the exact cardinality formula is quoted, not its legacy embedding consequence.
- thm-standard-representatives-modulo-n — ai-altered/ai-generated.
- thm-subset-of-a-finite-set — ai-altered/ai-generated; only finite self-injection implies bijection is used.
- lem-group-power-laws — its commuting hypothesis on (gh)^n is preserved and the companion supplies the nonabelian counterexample.
- lem-field-is-a-commutative-ring — only the exact field-implies-integral-domain clause is used.

The last two bullets restate entries already in the group to make their load-bearing clause explicit; they are not additional dependencies. No published dependency was found false. No AI-generated Statement is used as a dependency. Some published proofs are ai-generated, but every cited component is a non-generated Definition or Statement whose exact clause was independently checked.

The required duplicate checks were also opened directly: ex-unit-group-modulo-one-hundred-decomposition and ex-units-modulo-eight-are-not-cyclic. They are coverage dispositions only and are not dependencies.

## Planned component provenance and rationale

A-page provenance:

| Item | Statement | Proof | Rationale |
|---|---|---|---|
| def-quadratic-residue-modulo-n | literature-derived | not-applicable | Hackman D.I.1, Stein Definition 4.1.1, Gorodnik Definition 1.1; general-modulus unit convention retained |
| prop-quadratic-residue-is-representative-independent | ai-altered | ai-altered | Canonical bridge derived from the residue definition, quotient-class equality, the unit criterion, and quotient-ring multiplication; Gorodnik's class-invariance theorem concerns the later Legendre symbol and is not used as provenance for this proposition |
| cor-unique-kth-root-modulo-prime-for-coprime-exponent | literature-derived | ai-altered | Mascot pp. 8–10, with uniqueness supplied by the stronger published root-count corollary |
| thm-quadratic-residues-subgroup-modulo-prime | literature-derived | ai-altered | Stein Lemma 4.1.4 and Remark 4.1.5; intrinsic squaring image separated from a chosen generator |
| thm-count-of-quadratic-residues-modulo-prime | literature-derived | ai-altered | Mascot p. 8 gives the named kth-power count and fiber-size corollary; the local proof specialises to k=2 and uses Lagrange plus the published root count |
| def-legendre-symbol | literature-derived | not-applicable | Hackman, Stein, and Gorodnik; explicit zero branch |
| prop-legendre-symbol-well-defined | literature-derived | ai-altered | Hackman/Gorodnik class invariance with an explicit divisible branch |
| prop-legendre-symbol-on-units-is-homomorphism | literature-derived | ai-altered | Stein Lemma 4.1.4; uniqueness derived from local cyclic generation |
| thm-eulers-criterion-for-legendre-symbol | literature-derived | ai-altered | Hackman D.I.4, Stein Proposition 4.2.1, Gorodnik Theorem 1.5; zero case added first |
| thm-legendre-symbol-multiplicativity | literature-derived | ai-altered | Hackman D.I.6/D.I.8 and Gorodnik Theorem 1.6; zero cases separated |
| cor-number-of-solutions-to-quadratic-congruence-modulo-prime | literature-derived | ai-altered | Stein Corollary 4.2.3 and Gorodnik's consequence |
| cor-quadratic-congruence-discriminant-criterion | literature-derived | ai-altered | Gorodnik's completed-square consequence, with the affine bijection proved |
| lem-gauss-half-system-permutation | literature-derived | ai-altered | Hackman D.IV.1–D.IV.2 and Stein's proof of Lemma 4.3.1 |
| thm-gauss-quadratic-residue-lemma | literature-derived | ai-altered | Hackman D.IV.4 and Stein Lemma 4.3.1 |
| thm-first-supplement-to-quadratic-reciprocity | literature-derived | ai-altered | Hackman D.I.9, Stein Theorem 4.1.7(b), Gorodnik Theorem 1.6(iv) |
| thm-second-supplement-to-quadratic-reciprocity | literature-derived | ai-altered | Hackman D.I.11/D.IV.6 and Stein Theorem 4.1.7(c); four residue cases replace an unavailable floor dependency |

B-page provenance:

| Item | Statement | Proof | Rationale |
|---|---|---|---|
| ex-quadratic-residues-and-nonresidues-modulo-eleven | literature-derived | ai-altered | Stein Example 4.2.4, expanded to include roots, zero, and the full symbol table |
| ex-power-residues-modulo-seventeen | literature-derived | ai-altered | Gorodnik Example 1.3, expanded through the published fourth/eighth-power tests and counts |
| cex-product-of-two-quadratic-nonresidues-modulo-a-composite | literature-derived | ai-altered | Hackman D.I.7; explicit modulo-15 failure of the prime product rule |
| ex-unique-cube-root-of-two-modulo-twenty-nine | literature-derived | ai-altered | Mascot's worked example on PDF p. 10 |
| ex-euler-criterion-with-a-large-prime | literature-derived | ai-altered | Stein Example 4.2.5, with repeated squaring displayed |
| ex-gauss-lemma-for-three-modulo-eleven | literature-derived | ai-altered | Hackman D.IV.3/D.IV.5 |
| ex-quadratic-congruence-from-its-discriminant | ai-altered | ai-generated | Checkable specialisation of Gorodnik's discriminant formula to a locally chosen polynomial |
| cex-squaring-on-units-is-not-a-homomorphism-nonabelian-warning | ai-altered | ai-generated | Checkable S3 witness licensed by the published group-power warning |
| cex-quadratic-residue-definition-excludes-nonunits | ai-altered | ai-generated | Direct zero witness built from the literature-derived definitions and root count |

No B item is load-bearing, and no item depends on a B item. There are no ai-generated Statements or Constructions. The three generated B proofs are finite computations with explicit witnesses and cannot become dependency targets.

## Convention disagreements and authoring instructions

- “Quadratic residue modulo n” is restricted to gcd(a,n)=1 with n at least two. A soluble congruence with nonunit target does not enter the residue/nonresidue dichotomy.
- The Legendre symbol is defined for every integer numerator and has value zero exactly when p divides it. It is never described or manipulated as a quotient.
- Stein works at odd prime modulus from the outset; Hackman and Gorodnik give broader residue terminology. The page uses the general unit definition, then restricts the character to odd primes.
- Euler's criterion is a congruence for every integer numerator. Only in the unit case are both sides identified with the same element of {1,-1}.
- The squaring map is used inside the abelian unit group. The B-page S3 witness prevents accidental generalisation to arbitrary groups.
- Gauss's N(a,p) counts least positive residues exceeding p/2; equivalently it counts negative signs after reduction to the signed half-system. Strictness at p/2 is harmless because p is odd, but it must be stated.
- A primitive root may be selected for the one fixed prime inside a proof. No family of primitive roots over all primes is formed. The development remains in ZF.
- Quadratic reciprocity is not proved or used. Both supplements are retained before the explicit cut.

## Exact A-page summary for step 5

For a prime modulus, the nonzero residue classes form a cyclic unit group of order p-1. Congruence and quotient-ring algebra translate integer equations into equations in that group, while the power-congruence criterion counts their roots and the polynomial root bound controls equations over the field of prime residue classes. These facts make squaring a finite group operation whose image can be studied without choosing representatives.

A unit is a quadratic residue when its class is a square, and for an odd prime the square classes form an index-two subgroup. The Legendre symbol extends this dichotomy by a separate zero value, becomes the unique nontrivial sign character on the unit group, and satisfies Euler's criterion and multiplicativity. Exact solution counts follow for quadratic and general quadratic congruences. A signed permutation of the prime half-system yields Gauss's lemma, from which the formula for (2/p) follows; Euler's criterion gives the corresponding formula for (-1/p).

The B page must have no authored summary body.

## Context checkpoint — approximately 60 percent

Owned artifacts are the four batch-5 files listed at the top. The pages scaffold, coverage harvest, and 23 proof contracts are written. Source extraction, collision checks, direct dependency reads, duplicate checks, the coverage gate, the ordinary plan gate, and the in-memory prerequisite overlay have been completed. The overlay's only mathematical dependency issue was the out-of-closure floor lemma, now removed.

Current substage: final consistency and gate pass. Open mathematical question: none; the second-supplement count is closed by the explicit four cases p=8q+r. Exact next action: run JSON/dependency consistency checks, rerun coverage-checklist and validate-plan, run prose and notation scans on the owned artifacts, then append exact final gate results and blocker status below.

## Final report

The final scaffold has one A/B pair: 16 A items and 9 B items. The source harvest records 70 headings: 37 included, 12 inline, 6 already published, 8 deferred, and 7 out of scope. The declines most likely to be challenged are the duplicate modulo-13/SAGE computations and the grouped exercise headings; their result-specific reasons and licensing page ids are recorded above. The reciprocity, Jacobi, prime-power, and composite-modulus declines follow the dispatch's exact NT-2/NT-3 cut. Hackman's composite-modulus counterexample is retained rather than absorbed into the prime character theorem.

No split is proposed. All 32 published external dependencies were opened and are listed above with their component provenance and confidence route. The ordinary plan gate cannot yet inspect this pair's item edges because plan-spec still carries zero-item placeholders; the in-memory overlay of this manifest against the plan closure checked all 25 new items and 45 distinct dependencies and found no undeclared prerequisite, local forward edge, or B-item dependency. That overlay found and caused removal of the out-of-closure floor lemma before this final pass.

The two important scaffold corrections are durable: the general power criterion and root-count result reuse stronger published NT-1 items, and Mascot's example is correctly recorded as the unique cube root $-3$ of $2$ modulo $29$ because $(-3)^3=-27\equiv2\pmod{29}$. The conventions remain unit-only quadratic residue terminology, an explicit zero branch for every Legendre claim, symbol notation that is never a quotient, odd-prime hypotheses for the character and supplements, strict half-system endpoints, and only local primitive-root choices in ZF.

Final checks:

- validate-plan exited zero: declared page order is acyclic and consistent, with no item-level cycle, forward reference, B-page dependency, or unresolved id among pages whose item lists are already spliced.
- coverage-checklist reported: 1 page, 70 harvested results, 0 errors, 0 warnings.
- The custom scaffold consistency check reported 25 new ids, no duplicate ids, no collision with items/, and no dependency on a B-page item.
- The proof-contract structural check reported 23 proof-bearing items, 23 scoped contracts, exact published source quotes, every manifest dependency represented by a citation obligation, and all eight boundary dispositions per contract.
- prosecheck reported 0 errors and 5 heuristic count warnings in this notes report; they arise from the requested page/item/harvest counts and the modulus-29 example, so none is page prose or a defect.
- The owned artifacts contain no canonical embedding applied to a natural number.

No mathematical, dependency, citation, split, or permission blocker remains. The fresh pypdf installation could not be completed because the shell could not resolve the package host; exact extraction succeeded through existing text-bearing PDFs and the browser PDF reader, so nothing requested was left undone.

## Step-3 fix pass

### B5-1 — applied

Added the two omitted named Mascot rows from PDF p. 8 and mapped both to `thm-count-of-quadratic-residues-modulo-prime`. Added a canonical `included` row for `prop-quadratic-residue-is-representative-independent`, so every A-page item now has an explicit harvest or canonical disposition. Corrected that proposition's statement provenance from `literature-derived` to `ai-altered`: it is a canonical bridge derived from the residue definition and the published quotient-class equality, unit criterion, and quotient-ring multiplication, whereas Gorodnik Theorem 1.6(ii) establishes class invariance of the Legendre symbol rather than this earlier residuosity proposition. The proof provenance remains `ai-altered`.

### B5-2 — applied

Extended the Mascot locator from PDF pp. 8–9 to pp. 8–10. The cube-root-of-two example is on p. 10, while the kth-power count theorem and fiber-size corollary are on p. 8. The source ledger and per-item rationales now use the same corrected range.

### B5-3 — applied

Changed the manifest title to `The discriminant counts roots of $Ax^2+Bx+C\\equiv0\\pmod p$ for odd prime $p\\nmid A$`. This puts the load-bearing nonzero-leading-coefficient hypothesis in the title. The strategy and proof contract already assume and use `p\\nmid A`, so no dependency or proof-contract change was required.

### Step-3 verification and report

The pair remains one 16-item A page and one 9-item B page; no split is proposed. The repaired harvest has 70 rows: 37 `included`, 12 `inline`, 6 `already-published`, 8 `deferred`, and 7 `out-of-scope`. The likely challenged declines remain the duplicate modulo-13 and SAGE computations and the grouped exercise headings; each retains its result-specific reason and licensing page id. The list and confidence routes for all 32 opened published dependencies remain in the earlier report, with only the B5-1 canonical bridge's statement provenance corrected to `ai-altered`. The unit-only residue convention, total Legendre symbol, odd-prime hypotheses, strict Gauss-half-system endpoints, and local ZF choices are unchanged. There is no split, mathematical, dependency, citation, source, or permission blocker.

The required gates were rerun from the repository root after all three fixes:

- `coverage-checklist`: 1 page, 70 harvested results, 0 errors, 0 warnings.
- `content-policy --manifest-only`: 25 scoped items, 0 errors, 0 warnings.
- `validate-plan research/plan-spec.json`: exit 0; the declared page order remains acyclic and consistent, with no item-level cycles, forward references, B-page dependencies, or unresolved ids among pages carrying item lists.

A direct reverse coverage check additionally found all 16 A-page ids named by at least one source or canonical disposition. JSON parsing and `git diff --check` both passed. The proof-contract artifact was inspected but not edited: B5-3's `p\\nmid A` assumption was already present in the derivation map and the degenerate-case boundary disposition.
