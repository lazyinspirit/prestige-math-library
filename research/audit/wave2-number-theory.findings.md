# Wave 2 number-theory — Audit-Beta findings

## Context-continuity checkpoint — 2026-08-03

- Substage: A1/A2 evidence collection complete; artifact construction and validation in progress.
- Scope frozen from `wave2-number-theory.pages.json`: 2 pages, 33 mathematical-content items (23 on the article page and 10 on the examples page), all untagged legacy content.
- Reading completed: both page files, all 33 item files, every numbered proof step, every `Fact` row, and the canonical mathematical section of every direct dependency target.
- Proof scope: 29 proof-bearing items; the four definition-only items are `def-congruence-modulo-an-integer`, `def-integers-modulo-n`, `def-addition-and-multiplication-modulo-n`, and `def-unit-group-modulo-n-and-euler-totient`.
- Dependency check: every displayed `Fact` row is used by at least one numbered proof step. The two dependencies not represented in the `Fact` table of `thm-euler-totient-product-formula` are cited only in its alternate-proof remark, not used by the displayed proof.
- Mathematical pass: statements, worked arithmetic, counterexamples, and proof arguments have been checked. No false theorem or incorrect numerical result has surfaced.
- Citation-precision candidates retained for final disposition: the prime-modulus totient corollary's zero representative, the gcd-reduction lemma's cancellation step, and the finite CRT proof's product-factor step. These are being tested against the exact dependency clauses before deciding whether they require A3 proposals under the binding triage rule.
- Source work: recoverable literature sources have been located for all families in scope; only successfully opened source URLs will be recorded. No item will be labelled `ai-generated` merely because an exact textual antecedent was not found.
- Authorized files touched so far: this findings file only. No repair has been applied and no library/item file has been modified.
- Exact next action: build the 33-row provenance ledger and 29 complete proof contracts, resolve the three citation-precision candidates, write the A3 proposal inventory, then run schema, scope, proof-contract, URL, and coverage checks.

## A1 — provenance determinations and class-(c) proposals

The ledger contains one row for each of the 33 in-scope items. The statement census is 14 `literature-derived` / `exact-source` and 19 `ai-altered` / `semantic-source`. The proof census is 17 `ai-altered`, 12 `ai-generated`, and 4 `not-applicable` definitions. There are no `ai-generated` statements, no `none` or `trivial` evidence rows, no established-knowledge waiver, and no unresolved provenance classification for Alpha.

Each item below is an A3 class-(c) proposal: at A4, write the listed component provenance, remove a legacy one-axis `authorship` field if present, retain or add the cited working references, and leave all mathematical text unchanged. Disk inspection found no `authorship` line on these 33 items, so decision D5 required no deletion in this batch. The complete falsifiable rationale is repeated here as evidence and is also the corresponding JSONL ledger rationale.

### Verified external sources

- S1 — [Keith Conrad, Modular Arithmetic (Short Version)](https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf)
- S2 — [Jonathan Poritz, Euler’s phi Function](https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function)
- S3 — [UW Oshkosh, Number Theory Notes 3](https://www.uwosh.edu/faculty_staff/pennistd/ntn3.pdf)
- S4 — [Keith Conrad, The Chinese Remainder Theorem](https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf)
- S5 — [Carnegie Mellon, number-theory lecture notes](https://www.cs.cmu.edu/~goyal/15356/lecture_notes.pdf)
- S6 — [Jonathan Poritz, Linear Congruences](https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.02%3A_Linear_Congruences)
- S7 — [MIT, Chinese Remainder Theorem notes](https://math.mit.edu/~roed/courses/magic/CRT.pdf)
- S8 — [J. J. P. Veerman, sum of Euler phi over divisors](https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/An_Introduction_to_Number_Theory_%28Veerman%29/04%3A_Number_Theoretic_Functions/4.04%3A_New_Page)
- S9 — [MIT 18.783 Lecture Notes 3](https://math.mit.edu/classes/18.783/2022/LectureNotes3.pdf)
- S10 — [Jonathan Poritz, Wilson’s Theorem](https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/03%3A_Primes_Numbers/3.02%3A_Wilson%27s_Theorem)
- S11 — [University of Southampton, Simultaneous Linear Congruences](https://www.southampton.ac.uk/~wright/1001/simultaneous-linear-congruences.html)
- S12 — [UPC, Modular Arithmetic notes](https://www.cs.upc.edu/~mjserna/docencia/gm-aic/2021/10-AiC-modular.pdf)
- S13 — [University of Washington, Solutions for Assignment 2](https://sites.math.washington.edu/~greenber/MATH403-2019-PS2-Sols.pdf)
- S14 — [University of Colorado, proof practice on zero divisors](https://math.colorado.edu/~kstange/teaching-resources/crypto/proofs-practice-2.pdf)
- S15 — [CSUSM, Polynomials over residue rings](https://public.csusm.edu/aitken_html/m372/polynomials.pdf)

At A3 the orchestrator found that the Utah worksheet URL recorded in the initial ledger timed out at 60 seconds. Before A4, the Utah URL was removed: the working UW Oshkosh alternate remains for the modulo-12 example, and S13 is now the University of Washington PDF for the modulo-8 example. Both replacement/retained PDFs and the corrected Wilson page were live-opened successfully before they were written to item frontmatter. Candidate URLs that did not return readable content were excluded.

### Item-by-item retag proposals

- `def-congruence-modulo-an-integer` — statement `literature-derived`; proof `not-applicable`; evidence `exact-source` (S1). The source gives the same divisibility definition of a congruence class for an integer modulus. The item makes the n=0 and sign-of-modulus consequences explicit; these are consequences, not changes to the definition.
- `lem-congruence-is-an-equivalence-relation` — statement `ai-altered`; proof `ai-altered`; evidence `semantic-source` (S1). The source treats congruence as equality of residue classes and proves the standard congruence laws. The item packages reflexivity, symmetry, and transitivity uniformly for every integer modulus, including zero, and adapts the elementary divisibility proof.
- `lem-congruence-respects-integer-arithmetic` — statement `ai-altered`; proof `ai-altered`; evidence `semantic-source` (S1). The source states compatibility of congruence with addition, multiplication, and powers. The item expands the package to negation and subtraction and makes the natural exponent-zero boundary explicit; the proof adapts the same divisibility and induction arguments.
- `def-integers-modulo-n` — statement `ai-altered`; proof `not-applicable`; evidence `semantic-source` (S1). The source defines residue classes and the quotient modulo a nonzero modulus. The item extends the quotient-set notation to every integer modulus and records the singleton-class behavior at modulus zero.
- `thm-standard-representatives-modulo-n` — statement `ai-altered`; proof `ai-generated`; evidence `semantic-source` (S1). The source gives unique standard representatives for nonzero moduli. The item specializes the finite-cardinality clause to positive n and separately identifies the n=0 quotient with Z; its dependency-indexed proof is local.
- `def-addition-and-multiplication-modulo-n` — statement `ai-altered`; proof `not-applicable`; evidence `semantic-source` (S1). The source defines addition and multiplication of residue classes and states representative independence. The item presents the same operations for arbitrary integer moduli and includes additive inverse, zero, and one conventions.
- `thm-integers-modulo-n-basic-algebra` — statement `ai-altered`; proof `ai-generated`; evidence `semantic-source` (S1). The source records the usual arithmetic laws in residue-class notation. The item gathers them as a commutative-ring-style algebra statement valid also for modulus zero; the displayed transfer proof is local.
- `def-unit-group-modulo-n-and-euler-totient` — statement `ai-altered`; proof `not-applicable`; evidence `semantic-source` (S2). The source defines the reduced residue classes and Euler's phi function by coprimality. The item identifies those classes with the unit group of Z/n and fixes the n=1 convention explicitly.
- `thm-unit-criterion-modulo-n` — statement `literature-derived`; proof `ai-altered`; evidence `exact-source` (S3). The source states exactly that a residue class modulo positive n is invertible iff its representative is coprime to n. The item adapts the standard Bezout proof and records representative independence.
- `cor-totient-at-one-and-at-a-prime` — statement `ai-altered`; proof `ai-generated`; evidence `semantic-source` (S2, S3). The sources give phi(1)=1 and phi(p)=p-1 for prime p. The item combines the two boundary/formula claims and derives them from its local unit criterion and finite-cardinality machinery.
- `lem-multiples-below-a-prime-power` — statement `ai-altered`; proof `ai-generated`; evidence `semantic-source` (S4, S5). The sources count residues divisible by p when deriving phi(p^k). The item isolates that count as a precise bijection between a finite ordinal and the multiples of p below p^k; its bijection proof is local.
- `thm-totient-of-a-prime-power` — statement `ai-altered`; proof `ai-generated`; evidence `semantic-source` (S4, S5). The sources state phi(p^k)=p^k-p^(k-1) and characterize the excluded residues as multiples of p. The item includes both clauses with explicit k>=1 and representative conventions; its dependency-indexed counting proof is local.
- `lem-linear-congruence-reduction-by-the-gcd` — statement `ai-altered`; proof `ai-generated`; evidence `semantic-source` (S6). The source reduces a solvable linear congruence by gcd(a,n) to a coprime-coefficient congruence modulo n/d. The item states the equivalence with explicit quotient notation, positivity, and coprimality; its cancellation proof is local.
- `thm-linear-congruence-solvability-and-solution-count` — statement `literature-derived`; proof `ai-altered`; evidence `exact-source` (S6). The source states the same iff criterion gcd(a,n)|b, the exact number gcd(a,n) of incongruent solutions, and their arithmetic progression. The item adapts the standard Bezout construction and uniqueness argument.
- `lem-pairwise-coprime-divisibility` — statement `ai-altered`; proof `ai-generated`; evidence `semantic-source` (S4). The source uses that pairwise-coprime moduli have coprime partial products and that their product divides a common multiple. The item isolates both facts for finite indexed lists and adds the empty-list boundary; its induction proof is local.
- `lem-chinese-remainder-two-moduli` — statement `literature-derived`; proof `ai-altered`; evidence `exact-source` (S7). The source gives the two-modulus generalized CRT: solvability iff the residues agree modulo the gcd and uniqueness modulo the lcm. Under coprimality this is exactly the item's existence and uniqueness modulo mn; the item adapts the Bezout construction.
- `thm-chinese-remainder-theorem` — statement `ai-altered`; proof `ai-altered`; evidence `semantic-source` (S4). The source proves the finite pairwise-coprime CRT and the bijection with the product of residue rings. The item formalizes arbitrary finite lists, includes the empty product, and explicitly records preservation of ring operations; the induction proof adapts the sourced construction.
- `cor-euler-totient-is-multiplicative` — statement `literature-derived`; proof `ai-altered`; evidence `exact-source` (S4, S2). The sources state phi(mn)=phi(m)phi(n) for coprime positive m,n. The item derives the same formula from the CRT bijection and adapts the usual unit-pair correspondence.
- `thm-euler-totient-product-formula` — statement `ai-altered`; proof `ai-generated`; evidence `semantic-source` (S4, S5). The sources give phi(n)=n product_{p|n}(1-1/p), equivalently the prime-power product formula. The item expresses this for a finite distinct-prime factorization, adds n=1 as the empty-product case, and supplies a local inclusion-exclusion proof.
- `thm-sum-of-totients-over-divisors` — statement `literature-derived`; proof `ai-altered`; evidence `exact-source` (S8). The source states the same identity sum_{d|n} phi(d)=n for positive n and proves it by partitioning residues according to a gcd-derived divisor. The item adapts that partition to the library's representative and finite-sum conventions.
- `thm-z-mod-p-is-a-field` — statement `literature-derived`; proof `ai-altered`; evidence `exact-source` (S9). The source states that Z/pZ is a field for prime p and proves nonzero classes invertible using Bezout. The item adapts that argument to the library's field and residue-class definitions.
- `lem-wilson-inverse-pairing` — statement `ai-altered`; proof `ai-altered`; evidence `semantic-source` (S10). The source proves that the only self-inverse nonzero residues modulo a prime are ±1 and then pairs all remaining residues with distinct inverses. The item isolates that argument as a finite-unit-group lemma and makes the p=2 coincidence explicit.
- `thm-wilsons-theorem` — statement `literature-derived`; proof `ai-altered`; evidence `exact-source` (S10). The source states Wilson's theorem in the same factorial-congruence form and proves the prime direction by pairing inverses. The item adapts that direction to its preceding pairing lemma and explicitly includes the p=2 coincidence.
- `ex-chinese-remainder-system-worked` — statement `literature-derived`; proof `ai-altered`; evidence `exact-source` (S11). The source uses the exact system x=2 mod3, x=3 mod5, x=2 mod7 and obtains x=23 mod105. The item presents the equivalent representative 233 and verifies each congruence and uniqueness.
- `ex-linear-congruence-worked` — statement `literature-derived`; proof `ai-altered`; evidence `exact-source` (S12). The source works the exact congruence 14x=30 mod100 and lists the two solution classes 45 and 95. The item expands the gcd reduction and direct checks.
- `ex-units-and-totient-modulo-twelve` — statement `literature-derived`; proof `ai-altered`; evidence `exact-source` (S3). The UW Oshkosh notes identify U(12)={1,5,7,11}, its order four, and the self-inverse behavior of these classes. The item expands the gcd and product checks in the library's notation.
- `ex-chinese-remainder-map-modulo-twelve` — statement `ai-altered`; proof `ai-generated`; evidence `semantic-source` (S4). The source gives the CRT ring bijection for coprime factors, covering Z/12 -> Z/3 x Z/4. The item specializes it to a complete twelve-row residue table and directly checks addition and multiplication; that tabulation is local.
- `ex-units-modulo-eight-are-not-cyclic` — statement `literature-derived`; proof `ai-altered`; evidence `exact-source` (S13). The University of Washington solutions identify U(8)={1,3,5,7}, compute that every element has order one or two, and conclude that the order-four group is not cyclic. The item expands the same four modular products and order argument.
- `ex-euler-totient-product-formula-worked` — statement `ai-altered`; proof `ai-generated`; evidence `semantic-source` (S4, S5). The sources give the prime-product formula used to compute phi(360). The item combines a direct inclusion-exclusion computation with the product-formula computation and the numerical cross-check 96; the worked arithmetic is local.
- `cex-chinese-remainder-without-coprimality` — statement `ai-altered`; proof `ai-generated`; evidence `semantic-source` (S7). The source states the generalized CRT compatibility criterion modulo gcd(m,n). The item supplies the concrete incompatible system x=1 mod2 and x=2 mod4 and verifies the contradiction directly.
- `ex-zero-divisors-modulo-composites` — statement `literature-derived`; proof `ai-altered`; evidence `exact-source` (S14). The source states and proves exactly that Z/n has a nonzero zero divisor iff n is composite. The item adapts the factor witness and the prime-modulus converse to its residue-class conventions.
- `fs-zero-product-property-modulo-n` — statement `ai-altered`; proof `ai-generated`; evidence `semantic-source` (S14). The source establishes the zero-divisor/composite-modulus criterion that refutes the universal zero-product property. The item isolates the claim as false and supplies the concrete witness [2][3]=[0] in Z/6.
- `cex-z-mod-one-is-not-a-field` — statement `literature-derived`; proof `ai-altered`; evidence `exact-source` (S15). The source states that Z/mZ is a field exactly for prime m and explicitly excludes the trivial modulus-one ring because zero equals one. The item expands that exact boundary counterexample under the library's field convention.

## A2 — mathematical, proof, and citation audit

The proof-contract scope contains all 29 proof-bearing items. It classifies all 117 numbered proof, verification, refutation, or counterexample steps exactly once, contracts 184 fact-to-source citation pairs from 123 displayed fact rows, and completes all eight boundary dispositions for every proof. Each citation quote is the exact complete canonical `Statement`, `Statement refuted`, `Definition`, or `Example` section of its dependency target, avoiding a shortened quote that could silently drop a hypothesis or direction.

The strict repository gate reports:

```text
proof-contract: 0 error(s), 0 warning(s), 29/29 item(s) checked
```

The structural risk report routes 16 items as critical, 9 as high, 3 as moderate, and 1 as ordinary. The 25 high/critical contracts retain `risk_review.status: pending` for the required independent Alpha proof-refuter disposition; Audit-Beta has not self-certified that later stage.

### Accuracy result

No mathematical falsehood, invalid implication, incorrect theorem hypothesis, or incorrect worked value was found. In particular:

- the worked CRT construction gives 233 congruent to 23 modulo 105 with the required residues and a unique class modulo 105;
- 14x congruent to 30 modulo 100 reduces correctly and has exactly the classes 45 and 95;
- the unit sets modulo 12 and 8, the noncyclicity of U(8), the complete CRT table modulo 12, and both computations of phi(360)=96 check entry by entry;
- the incompatible system x congruent to 1 modulo 2 and x congruent to 2 modulo 4, the zero-divisor criterion, the [2][3]=[0] refutation modulo 6, and the modulus-one field counterexample are all correct;
- both A-page summary paragraphs are mathematically accurate and make no stale count, position, or corpus-wide claim.

### Class-(b) citation-precision proposals

Two item records contain the same stale LibreTexts URL:

- `lem-wilson-inverse-pairing`
- `thm-wilsons-theorem`

Proposed repair for both at A4:

- old: `https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/03%3A_Prime_Numbers/3.02%3A_Wilsons_Theorem`
- new: `https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/03%3A_Primes_Numbers/3.02%3A_Wilson%27s_Theorem`
- evidence: the old path has a stale chapter slug and omits the apostrophe encoding. S10 is the working current page and states the self-inverse lemma, Wilson’s theorem, and the inverse-pairing proof used by the two items.

This is metadata-only citation repair. No proof or statement text changes, id changes, deletions, or reading-order changes are proposed.

### Triage dispositions that are not repair proposals

Three points were rechecked against the exact target sections and fall under the brief’s explicit minor-citational-quirk / under-30-seconds allowance:

- In `cor-totient-at-one-and-at-a-prime` step 1.2, the inference from p dividing 0 to the zero class being nonunit uses the cited unit criterion plus the elementary fact gcd(0,p)=p>1. The target of L1 states the full two-case gcd formula, and step 2.1 cites it where the nonzero direction is needed.
- In `lem-linear-congruence-reduction-by-the-gcd` step 2.1, cancellation by d is licensed by step 1.1, which established d>0 and cited the cancellation-bearing quotient lemma. There is no hidden zero cancellation.
- In `thm-chinese-remainder-theorem` step 1.3, each n_i divides N immediately from the cited finite-product definition and commutative regrouping theorem; the load-bearing common-multiple direction is separately supplied by L1 in the uniqueness step.

No cited dependency states a weaker, differently quantified, or reversed proposition than the proof needs. These points require no A3 action.

## A3 proposal census

- Class (a), unambiguous falsehood: none.
- Class (b), citation precision: 2 metadata-only URL corrections, listed above.
- Class (c), provenance retag: 33 proposals, one for every ledger row.
- Class (d), debatable restatement: none.
- Alpha escalation for undecidable provenance: none.
- A10 owner-only queue: none.

## A1/A2 stop boundary

No repair has been applied. No item file or page under `library/` has been changed. The two class-(b) corrections and all 33 class-(c) retags remain proposals pending orchestrator approval at A3.

## Coverage statement

Coverage is complete, with no exception. I read every numbered proof step (117/117), every displayed fact row and every one of its dependency targets (184 fact-to-source pairs), every `deps` / `justified_by` edge (199 edges to 75 unique targets, including all 53 targets outside this batch), every other dependency citation in the statements and remarks, every worked table and arithmetic check, both published-page summaries, and every existing external source reference. The stale Wilson URL was followed to and checked against its verified current S10 destination. Every proof step and every dependency citation in the pair was read.

## A4 — approved repairs applied

### Blocker-first URL disposition

- `ex-units-and-totient-modulo-twelve` — class (c) provenance-source correction. Old ledger evidence: Utah worksheet plus UW Oshkosh, where the Utah URL timed out at 60 seconds. New ledger and item evidence: UW Oshkosh only, <https://www.uwosh.edu/faculty_staff/pennistd/ntn3.pdf>. The mathematical text is unchanged.
- `ex-units-modulo-eight-are-not-cyclic` — class (c) provenance-source correction. Old ledger evidence: the unreachable Utah worksheet only. New ledger and item evidence: University of Washington assignment solutions, <https://sites.math.washington.edu/~greenber/MATH403-2019-PS2-Sols.pdf>, which explicitly list the four units, compute their orders as one or two, and conclude that the order-four group is not cyclic. The mathematical text is unchanged.

### Applied class-(c) provenance retags

For every row below, the old item frontmatter had no component `provenance` block and no legacy `authorship` line. The new text is the stated two-axis block; every ledger URL is present under `sources.references`. These are pure retags: bodies, titles, dependencies, `verification`, and `verification.audited` are byte-for-byte unchanged.

- `def-congruence-modulo-an-integer` — class (c). Old: no component provenance. New: `statement: literature-derived`, `proof: not-applicable`. Source: <https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf>.
- `lem-congruence-is-an-equivalence-relation` — class (c). Old: no component provenance. New: `statement: ai-altered`, `proof: ai-altered`. Source: <https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf>.
- `lem-congruence-respects-integer-arithmetic` — class (c). Old: no component provenance. New: `statement: ai-altered`, `proof: ai-altered`. Source: <https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf>.
- `def-integers-modulo-n` — class (c). Old: no component provenance. New: `statement: ai-altered`, `proof: not-applicable`. Source: <https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf>.
- `thm-standard-representatives-modulo-n` — class (c). Old: no component provenance. New: `statement: ai-altered`, `proof: ai-generated`. Source: <https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf>.
- `def-addition-and-multiplication-modulo-n` — class (c). Old: no component provenance. New: `statement: ai-altered`, `proof: not-applicable`. Source: <https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf>.
- `thm-integers-modulo-n-basic-algebra` — class (c). Old: no component provenance. New: `statement: ai-altered`, `proof: ai-generated`. Source: <https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf>.
- `def-unit-group-modulo-n-and-euler-totient` — class (c). Old: no component provenance. New: `statement: ai-altered`, `proof: not-applicable`. Source: <https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function>.
- `thm-unit-criterion-modulo-n` — class (c). Old: no component provenance. New: `statement: literature-derived`, `proof: ai-altered`. Source: <https://www.uwosh.edu/faculty_staff/pennistd/ntn3.pdf>.
- `cor-totient-at-one-and-at-a-prime` — class (c). Old: no component provenance. New: `statement: ai-altered`, `proof: ai-generated`. Source: <https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function>, <https://www.uwosh.edu/faculty_staff/pennistd/ntn3.pdf>.
- `lem-multiples-below-a-prime-power` — class (c). Old: no component provenance. New: `statement: ai-altered`, `proof: ai-generated`. Source: <https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf>, <https://www.cs.cmu.edu/~goyal/15356/lecture_notes.pdf>.
- `thm-totient-of-a-prime-power` — class (c). Old: no component provenance. New: `statement: ai-altered`, `proof: ai-generated`. Source: <https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf>, <https://www.cs.cmu.edu/~goyal/15356/lecture_notes.pdf>.
- `lem-linear-congruence-reduction-by-the-gcd` — class (c). Old: no component provenance. New: `statement: ai-altered`, `proof: ai-generated`. Source: <https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.02%3A_Linear_Congruences>.
- `thm-linear-congruence-solvability-and-solution-count` — class (c). Old: no component provenance. New: `statement: literature-derived`, `proof: ai-altered`. Source: <https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.02%3A_Linear_Congruences>.
- `lem-pairwise-coprime-divisibility` — class (c). Old: no component provenance. New: `statement: ai-altered`, `proof: ai-generated`. Source: <https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf>.
- `lem-chinese-remainder-two-moduli` — class (c). Old: no component provenance. New: `statement: literature-derived`, `proof: ai-altered`. Source: <https://math.mit.edu/~roed/courses/magic/CRT.pdf>.
- `thm-chinese-remainder-theorem` — class (c). Old: no component provenance. New: `statement: ai-altered`, `proof: ai-altered`. Source: <https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf>.
- `cor-euler-totient-is-multiplicative` — class (c). Old: no component provenance. New: `statement: literature-derived`, `proof: ai-altered`. Source: <https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf>, <https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function>.
- `thm-euler-totient-product-formula` — class (c). Old: no component provenance. New: `statement: ai-altered`, `proof: ai-generated`. Source: <https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf>, <https://www.cs.cmu.edu/~goyal/15356/lecture_notes.pdf>.
- `thm-sum-of-totients-over-divisors` — class (c). Old: no component provenance. New: `statement: literature-derived`, `proof: ai-altered`. Source: <https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/An_Introduction_to_Number_Theory_%28Veerman%29/04%3A_Number_Theoretic_Functions/4.04%3A_New_Page>.
- `thm-z-mod-p-is-a-field` — class (c). Old: no component provenance. New: `statement: literature-derived`, `proof: ai-altered`. Source: <https://math.mit.edu/classes/18.783/2022/LectureNotes3.pdf>.
- `lem-wilson-inverse-pairing` — class (c). Old: no component provenance. New: `statement: ai-altered`, `proof: ai-altered`. Source: <https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/03%3A_Primes_Numbers/3.02%3A_Wilson%27s_Theorem>.
- `thm-wilsons-theorem` — class (c). Old: no component provenance. New: `statement: literature-derived`, `proof: ai-altered`. Source: <https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/03%3A_Primes_Numbers/3.02%3A_Wilson%27s_Theorem>.
- `ex-chinese-remainder-system-worked` — class (c). Old: no component provenance. New: `statement: literature-derived`, `proof: ai-altered`. Source: <https://www.southampton.ac.uk/~wright/1001/simultaneous-linear-congruences.html>.
- `ex-linear-congruence-worked` — class (c). Old: no component provenance. New: `statement: literature-derived`, `proof: ai-altered`. Source: <https://www.cs.upc.edu/~mjserna/docencia/gm-aic/2021/10-AiC-modular.pdf>.
- `ex-units-and-totient-modulo-twelve` — class (c). Old: no component provenance. New: `statement: literature-derived`, `proof: ai-altered`. Source: <https://www.uwosh.edu/faculty_staff/pennistd/ntn3.pdf>.
- `ex-chinese-remainder-map-modulo-twelve` — class (c). Old: no component provenance. New: `statement: ai-altered`, `proof: ai-generated`. Source: <https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf>.
- `ex-units-modulo-eight-are-not-cyclic` — class (c). Old: no component provenance. New: `statement: literature-derived`, `proof: ai-altered`. Source: <https://sites.math.washington.edu/~greenber/MATH403-2019-PS2-Sols.pdf>.
- `ex-euler-totient-product-formula-worked` — class (c). Old: no component provenance. New: `statement: ai-altered`, `proof: ai-generated`. Source: <https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf>, <https://www.cs.cmu.edu/~goyal/15356/lecture_notes.pdf>.
- `cex-chinese-remainder-without-coprimality` — class (c). Old: no component provenance. New: `statement: ai-altered`, `proof: ai-generated`. Source: <https://math.mit.edu/~roed/courses/magic/CRT.pdf>.
- `ex-zero-divisors-modulo-composites` — class (c). Old: no component provenance. New: `statement: literature-derived`, `proof: ai-altered`. Source: <https://math.colorado.edu/~kstange/teaching-resources/crypto/proofs-practice-2.pdf>.
- `fs-zero-product-property-modulo-n` — class (c). Old: no component provenance. New: `statement: ai-altered`, `proof: ai-generated`. Source: <https://math.colorado.edu/~kstange/teaching-resources/crypto/proofs-practice-2.pdf>.
- `cex-z-mod-one-is-not-a-field` — class (c). Old: no component provenance. New: `statement: literature-derived`, `proof: ai-altered`. Source: <https://public.csusm.edu/aitken_html/m372/polynomials.pdf>.

### Applied class-(b) stale-URL repairs

- `lem-wilson-inverse-pairing` — class (b), metadata-only. Old: `<https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/03%3A_Prime_Numbers/3.02%3A_Wilsons_Theorem>` (404). New: `<https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/03%3A_Primes_Numbers/3.02%3A_Wilson%27s_Theorem>` (live-opened successfully; A3 records old 404/new 200). No mathematical text or verification stamp changed.
- `thm-wilsons-theorem` — class (b), metadata-only. Old: `<https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/03%3A_Prime_Numbers/3.02%3A_Wilsons_Theorem>` (404). New: `<https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/03%3A_Primes_Numbers/3.02%3A_Wilson%27s_Theorem>` (live-opened successfully; A3 records old 404/new 200). No mathematical text or verification stamp changed.

### Touchlog and gate record

- `research/audit/wave2-touches.json` contains one dedicated `pre-<id>` label for each of all 33 number-theory items. Concurrent full-file writers briefly produced truncated JSON and overwrote some labels; no item edit began until its own snapshot command had succeeded. After all five Betas settled, the shared ledger parsed cleanly with 262 snapshots and all 33 number-theory labels present exactly once. The inflated multi-touch report is an interleaving artifact of per-item whole-corpus snapshots, not evidence of repeated number-theory mathematical repair.
- `node tools/reflow.mts <29 proof files>`: PASS; all 29 reported `unchanged`.
- `node --import /root/Projects/prestige-intelligence/worker/node_modules/tsx/dist/loader.mjs tools/precheck.mts <29 proof files>`: PASS, 29 checked, 0 failing, no REPAIR output.
- `node tools/proof-contract.mjs research/audit/wave2-number-theory.proof-contracts.json --strict`: PASS, 29/29, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --audit --ledger research/audit/wave2-number-theory.provenance.jsonl research/audit/wave2-number-theory.pages.json`: PASS, 33 scoped, 0 errors, 0 warnings.
- Scoped `citecheck`: PASS, 33 scanned. Scoped `rendercheck`: PASS, 33 files and all math parsed. Scoped `prosecheck`: PASS, 33 files, 0 errors, 0 warnings.
- Scoped diff audit: PASS, all 141 changed item-diff lines match the approved provenance/reference/Wilson-URL metadata patterns; `git diff --check` is clean.
- Global `fwdcheck`: PASS. Global `extcheck`: PASS with the standing 83 `unproved-on-published` warnings. Global `depsource`: PASS, 0 unresolved (its 33-item Archimedean-reciprocal worklist is triage-only).
- Global `depcheck`: expected in-flight exit 1 from 15 `published-unaudited` material repairs owned by sibling batches and awaiting A6; there are zero number-theory errors and no other error class.

### A4 coverage statement

Applied exactly the 33 approved number-theory retags and the approved Wilson URL repair in both published items. No item id, title, body, dependency, reading order, or page file changed; no item was removed. All 33 existing `verification.audited: 2026-07-31` stamps were retained, and no `verification.judge` block was deleted or added. The complete changed-item set is the 33-item list under “Applied class-(c) provenance retags”; the Wilson changes are a metadata subset of that same set.
