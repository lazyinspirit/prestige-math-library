# Frontier 17, batch 1 — assignment-cap rebalance

This batch now owns the sums-of-two-squares and Frattini/Burnside pairs.
Both complete pre-rebalance note files are preserved below and separately in
`research/frontier-17-scope-repair-history/assignment-cap-rebalance/`.
No page, harvested result, proof contract, or mathematical disposition was removed.

## Sums-of-two-squares scaffold record

# Frontier 17, batch 1 — Beta-1 scaffold notes

## Continuity checkpoint

- Current substage: source-scouting repair complete; all scaffold artifacts and batch-scoped checks are recorded.
- Owned artifact paths: `research/frontier-17-batch-1.pages.json`, `research/frontier-17-batch-1.notes.md`, `research/frontier-17-batch-1.proof-contracts.json`, and the separately required gated harvest `research/frontier-17-batch-1.coverage.json`.
- Completed checks: all normative documents and exemplars named in the dispatch; the NT-4 design and plan-spec entries; both source treatments in full over their recorded ranges; the official Conrad note cited by the design; every proposed published dependency’s actual Definition or Statement, status, provenance, and page home; exact-id and semantic collision searches; both richness passes; the proof-obligation/boundary pass; content policy, coverage, prose, JSON, dependency-order, quote, arithmetic, notation, and whitespace checks; and the current unspliced global plan gates.
- Open mechanical constraint: none for this batch. The local Node transport still returns `EAI_AGAIN` on fresh outbound requests, but both coverage entries now carry genuine mechanical full-text stamps and the batch check exits zero.
- Exact next action: return the repaired coverage ledger and this source-scout record to the engine; no further URL scouting is owed for batch 1.

## Scope, order, and artifact boundary

This batch owns `sums-of-two-squares` at order 57.007 and `sums-of-two-squares-examples` at order 57.008. The design and `research/plan-spec.json` agree on both orders and on the A page’s sole declared prerequisite, `quadratic-reciprocity-and-the-jacobi-symbol-examples`. No design/spec drift is present.

The A page has 18 items and the companion has 8. The A page is well below the current 60-item split ceiling, so no split is proposed. Nothing was pruned to avoid the ceiling.

The four batch artifacts are the page manifest, coverage harvest, proof-contract file, and these notes. The dispatch’s three-file sentence omits the separately mandatory coverage artifact, while its canonical-harvest section and stage gate explicitly require that file. The most recently completed batch-1 notes record the same prompt defect and the same four-artifact resolution.

## Applyable amendments to `plan-number-theory-track.md`

### Amendment NT4-1 — correct the Conrad source description

Recommendation: approve. The official Keith Conrad note linked from his expository-paper index is a two-page note. It states Fermat’s theorem with uniqueness and proves uniqueness by a lattice plus Pick’s theorem. It has no §§2–4, no lattice-pigeonhole existence proof, and no product criterion.

Target section: NT-4 primary backing, final sentence.

Exact old text:

```text
Independent check: Keith Conrad,
  *Sums of Two Squares and Lattices*, §§2--4, the lattice-pigeonhole proof and
  the product criterion (exact heading disposition below).
```

Exact new text:

```text
Supplemental uniqueness check: Keith Conrad, *Sums of Two Squares and
Lattices*, the complete two-page note, Theorems 1--2.  Theorem 1 records
Fermat's prime criterion and uniqueness up to signs and order; the note proves
the uniqueness clause by a lattice and Pick's theorem.  It does not contain
numbered §§2--4, a pigeonhole proof of existence, or the product criterion.
Hackman §§E.I--E.II and Stein §5.7 remain the two independent full treatments.
```

If declined, the design continues to make three mechanically checkable false claims about the cited source’s structure and contents. The two-page PDF is not placed in the coverage artifact because `source-fetch-check` rejects every countable PDF shorter than four pages even when it is the complete note; Hackman and Stein independently satisfy the pair’s backing requirement.

### Amendment NT4-2 — expose the factorisation lemma behind prime uniqueness

Recommendation: approve. Hackman E.I.3 proves a factorisation result for any odd integer with two essentially different representations; prime uniqueness is its immediate consequence. Keeping only the theorem row would hide the independently nameable argument that the companion example is supposed to compute.

Target row: the current `thm-uniqueness-of-two-square-representation-of-a-prime` row.

Exact old text:

```text
| `thm-uniqueness-of-two-square-representation-of-a-prime` | `thm` | If \(p\equiv1\pmod4\) is prime, there are unique positive integers \(x\) odd and \(y\) even with \(p=x^2+y^2\); all ordered signed representations arise from this one by signs and interchange. | L/A; Hackman Thm. E.I.3.  Its factorisation argument shows that two essentially different representations force a nontrivial factorisation of the odd integer. |
```

Exact new text:

```text
| `lem-two-essentially-different-two-square-representations-factor-an-odd-integer` | `lem` | If an odd integer has two normalized positive representations \(N=x^2+y^2=u^2+v^2\), with \(x,u\) odd, \(y,v\) even, and \(0<x<u\), then \(N=(e^2+f^2)(g^2+h^2)\) for positive integers \(e,f,g,h\); in particular both factors exceed \(1\). | A/A; Hackman Thm. E.I.3, narrowed to the normalized form used by the uniqueness proof and companion computation. |
| `thm-uniqueness-of-two-square-representation-of-a-prime` | `thm` | If \(p\equiv1\pmod4\) is prime, there are unique positive integers \(x\) odd and \(y\) even with \(p=x^2+y^2\); all ordered signed representations arise from this one by signs and interchange. | L/A; Hackman Thm. E.I.3; Fermat existence followed by the preceding factorisation lemma. |
```

If declined, the uniqueness theorem becomes a monolithic proof and the B-page factor-recovery example has no focused theorem to cite.

### Amendment NT4-3 — add the two missing primitive-representation lemmas

Recommendation: approve. The designed primitive characterisation says its sufficiency proof combines primitive prime-power representations while preserving coprimality, but neither fact had an item slot. Hackman names them E.II.5 and E.II.6.

Target: insert immediately before `thm-primitive-sum-of-two-squares-characterisation`.

Exact old text:

```text
| `thm-primitive-sum-of-two-squares-characterisation` | `thm` | A positive integer has a primitive two-square representation iff \(v_2(n)\le1\) and no prime \(q\equiv3\pmod4\) divides \(n\). | L/A; Hackman Thm. E.II.4 and Lemmas E.II.5--E.II.6.  Necessity is local; sufficiency combines primitive prime-power representations while preserving coprimality. |
```

Exact new text:

```text
| `lem-coprime-primitive-two-square-products-remain-primitive` | `lem` | If \(P=a^2+b^2\) and \(Q=c^2+d^2\) are primitive representations and \(\gcd(P,Q)=1\), then \((ac-bd,ad+bc)\) is a primitive representation of \(PQ\). | L/A; Hackman Lemma E.II.5; prove primitivity through the four linear combinations with \(a,b,c,d\). |
| `lem-prime-one-mod-four-powers-have-primitive-two-square-representations` | `lem` | Every natural power of a prime \(p\equiv1\pmod4\) has a primitive two-square representation. | L/A; Hackman Lemma E.II.6; induct using the two sign variants and prove that at least one product candidate is not coordinatewise divisible by \(p\). |
| `thm-primitive-sum-of-two-squares-characterisation` | `thm` | A positive integer has a primitive two-square representation iff \(v_2(n)\le1\) and no prime \(q\equiv3\pmod4\) divides \(n\). | L/A; Hackman Thm. E.II.4 and the two preceding lemmas.  Necessity is local; sufficiency combines primitive representations of the pairwise-coprime canonical prime-power factors. |
```

If declined, the theorem’s sufficiency direction rests on two unstated load-bearing results.

### Amendment NT4-4 — retain Hackman E.II.8’s immediate corollaries

Recommendation: approve. The primary-backing sentence explicitly names Corollary E.II.8, but the item table omitted both of its clauses.

Target: insert after `thm-primitive-sum-of-two-squares-characterisation`.

Exact old text:

```text
| `cor-squarefree-sum-of-two-squares-characterisation` | `cor` | A squarefree positive integer is a sum of two squares iff none of its odd prime factors is \(3\pmod4\); every such representation is primitive. | L/A; immediate specialisation of Hackman E.II.2 and E.II.4, with squarefree \(v_2(n)\le1\). |
```

Exact new text:

```text
| `cor-primitive-sums-of-two-squares-closed-under-products` | `cor` | The product of two positive primitively represented integers is primitively represented provided the two factors are not both even. | L/A; Hackman Cor. E.II.8(a); apply the primitive characterisation and valuation additivity. |
| `cor-divisors-of-primitively-two-square-representable-integers` | `cor` | Every divisor \(d>1\) of a positive primitively represented integer is primitively represented. | L/A; Hackman Cor. E.II.8(b); canonical prime exponents can only decrease on passing to a divisor. |
| `cor-squarefree-sum-of-two-squares-characterisation` | `cor` | A squarefree positive integer is a sum of two squares iff none of its odd prime factors is \(3\pmod4\); every such representation is primitive. | A/G; immediate source-backed specialisation of Hackman E.II.2 and E.II.4; prove universal primitivity by excluding a common prime square. |
```

If declined, the canonical harvest would cite E.II.8 while silently dropping every claim it contains.

### Amendment NT4-5 — retain two source exercises that close cheaply

Recommendation: approve. Hackman E.II Exercises 2 and 4 are self-contained, useful, and require only already published finite counting and divisibility.

Target: insert the first row after product closure and the second after the three-mod-four divisibility lemma.

Exact new rows:

```text
| `prop-odd-two-square-representations-correspond-under-doubling` | `prop` | For odd positive \(m\), \((x,y)\mapsto(x+y,x-y)\) is a bijection from ordered signed representations of \(m\) to those of \(2m\), with inverse half-sums; it restricts to primitive representations. | L/A; Hackman E.II Exercise 2; parity makes the inverse integral and a common-prime argument proves primitivity. |
| `prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares` | `prop` | For an odd prime \(p\) and \(p\nmid a\), there are integers \(x,y\) with \(x^2+y^2\equiv a\pmod p\). | L/A; Hackman E.II Exercise 4; two subsets of \(\mathbb Z/p\), each of size \((p+1)/2\), must intersect. |
```

If declined, two named source results with short in-scope proofs would be dropped despite the harvest rule’s instruction to build missing elementary machinery.

### Amendment NT4-6 — add the source’s Extended-Euclid construction

Recommendation: approve. The source and the design both emphasize explicit construction. The companion already demonstrates the pigeonhole collision; the new example uses a genuinely different Euclidean route to the same source-backed witness.

Target: insert after `ex-thue-lemma-produces-a-two-square-representation`.

Exact new row:

```text
| `ex-two-square-representation-of-seventy-three-by-extended-euclid` | `ex` | Starting from \(27^2\equiv-1\pmod{73}\), use \(73=2\cdot27+19\) and \(27=19+8\) to obtain \(8=3\cdot27-73\), hence \(73=3^2+8^2\). |
```

If declined, the page remains mathematically complete, but it loses the named E.I.4 algorithmic example and the distinct constructive route the source actually develops.

## Web research ledger and convention audit

### Recorded coverage sources

1. Peter Hackman, *Elementary Number Theory*: https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf
   - Read Chapter E, §§E.I–E.II in full, including every numbered result, example, and exercise through E.II Exercise 7.
   - Supports Thue’s lemma, Fermat’s prime theorem, factorisation and uniqueness, the product identity, the full positive-integer criterion, primitive representations, both primitive-representation lemmas, Corollary E.II.8, and the exact companion witnesses 73, 221, 539, 289, 34, 833, and 68.
   - Convention: Hackman writes “proper” where this library writes “primitive”. Both mean coordinate gcd one.
2. William Stein, *Elementary Number Theory: Primes, Congruences, and Secrets*: https://wstein.org/ent/ent.pdf
   - Read §5.7 in full, ending before §5.8.
   - Independently supports the general prime-exponent criterion, the primitive definition, the three-mod-four obstruction, and the product identity.
   - Convention disagreement: Stein defines \(\mathbb N=\{1,2,\ldots\}\). This library’s \(\mathbb N\) contains \(0\); every exponent statement therefore includes exponent zero explicitly, and the representation theorem includes \(n=1\) through the empty factorisation.
   - Proof-route difference: Stein’s sufficiency proof uses continued-fraction approximation. The design fixes Hackman’s Thue/pigeonhole proof at this order, so Stein’s Lemma 5.7.5, continued-fraction proof, and efficient algorithm are explicitly deferred to `regular-continued-fractions-and-diophantine-approximation` and its companion.

### Supplemental source inspected but not recorded as coverage backing

Keith Conrad, *Sums of Two Squares and Lattices*: https://kconrad.math.uconn.edu/blurbs/ugradnumthy/Picksumofsq.pdf

The complete official PDF is two pages. It states the odd-prime criterion and uniqueness up to signs and order, then proves uniqueness using a lattice and Pick’s theorem. This supports the uniqueness convention but not the design’s claimed §§2–4, pigeonhole existence proof, or product criterion. It is omitted from `coverage.json` because `source-fetch-check.mjs` mechanically rejects countable PDFs of fewer than four pages as extracts; it is not used as a Step-5 `sources.references` URL.

### URL-stamp result

The first source-scout retry of

```text
node tools/source-fetch-check.mjs --coverage research/frontier-17-batch-1.coverage.json --stamp
```

found Stein already stamped and returned `EAI_AGAIN` for the unstamped Hackman URL. A control Node fetch of Stein also returned `EAI_AGAIN`, establishing that the failure was the sandbox's outbound DNS path rather than a Hackman-specific dead link. The web reader concurrently fetched the original LiU Hackman PDF as the complete 415-page November 1, 2009 HHH Productions text, including the recorded Chapter E headings and locators.

The same exact LiU URL had already been downloaded and mechanically stamped in `research/frontier-15-batch-1.coverage.json` on 2026-08-16: 1,374,489 bytes, SHA-256 prefix `4d920e4b310c824d`, PDF, 415 pages. That genuine exact-URL stamp was reused verbatim here; its timestamp is deliberately retained and is not represented as a new fetch. The current web fetch independently confirms that the URL still delivers the complete document. No replacement URL was needed, so `original_url` is inapplicable.

Two same-source alternates were nevertheless tested and rejected rather than recorded: the author's `https://hackmat.se/kurser/TATM54/booktot.pdf` also hit the local `EAI_AGAIN` transport failure, and the CiteSeerX PDF indexed under DOI key `d345c68fcb70874805be1f100a82d6a0c8256b6d` returned a web-side 502 as well as local `EAI_AGAIN`. The final exact command now exits zero with:

```text
source-fetch-check: 2/2 source(s) fetch-verified (0 newly stamped)
```

## Canonical coverage yield

The coverage artifact records 47 source section or named-result rows. The structural checklist reports one page, 47 harvested results, zero errors, and zero warnings with destination enforcement enabled.

No definition, theorem, lemma, or corollary was declined merely because an elementary prerequisite was missing. Deferred rows concern other binary quadratic forms, Pell equations, continued fractions, or the later representation-count function \(r_2\). The Mordell-type equation in Hackman E.II Exercise 5 is out of scope because it belongs to elliptic and higher Diophantine geometry, a whole subject area not developed by this elementary pair.

## Published dependency closure

The final manifest has 23 distinct external dependency ids. Every item file was opened from `items/`; every item has `status: published`; 7 have `provenance.statement: literature-derived` and 16 have `provenance.statement: ai-altered`. None is `ai-generated` or legacy-unclassified. Every item is homed on a published page at order at most 57.003, strictly below the A page’s order 57.007, and every home lies in the transitive prerequisite ancestry of `quadratic-reciprocity-and-the-jacobi-symbol-examples`.

The exact source clauses, domains, hypotheses, and directions were checked for:

- `thm-first-supplement-to-quadratic-reciprocity`, `def-legendre-symbol`, and `thm-z-mod-p-is-a-field`: the odd-prime, unit, and square-root-of-minus-one conventions used in the three-mod-four obstruction and Fermat proof;
- `thm-the-strong-pigeonhole-principle`, `thm-product-rule`, `thm-standard-representatives-modulo-n`, `lem-finite-set-has-max`, and `thm-of-square-roots`: the finite pair count, quotient cardinality, nonempty maximum, and strict real square-root bounds used in Thue’s lemma;
- `thm-count-of-quadratic-residues-modulo-prime`, `thm-sum-rule`, `thm-subset-of-a-finite-set`, and `thm-integers-modulo-n-basic-algebra`: the exact \((p-1)/2\) nonzero-square count and finite-set comparison used for the residue proposition;
- `thm-euclids-lemma`, `lem-coprime-divides-product`, `def-common-divisor-and-gcd`, and `lem-every-integer-above-one-has-a-prime-divisor`: every common-prime and coprime-divisibility step in the uniqueness and primitivity lemmas;
- `thm-canonical-prime-factorisation`, `lem-p-adic-valuation-basic`, `lem-p-adic-valuation-additive`, `lem-pairwise-coprime-divisibility`, and `thm-induction-principle`: the empty factorisation at one, exponent uniqueness, exact valuation drop by two, pairwise-coprime product induction, and all exponent inductions;
- `def-squarefree-positive-integer`: squarefree means that no prime square divides the positive integer and explicitly includes one.

The coverage-only `already-published` disposition for Hackman E.II Exercise 6 was checked against `thm-unit-square-criterion-modulo-n`, which is published and states the complete local prime-power criterion, including the modulus-one boundary.

All AI-altered published statements above were also confirmed established from mathematical knowledge after exact on-disk inspection; no convention doubt remained. No published dependency contains an unambiguous load-bearing falsehood, so no Step-5 published-dependency repair is proposed.

Every load-bearing dependency is an earlier item on the same page, an A-page item used by the B companion, or one of these published earlier items. There is no external fallback, `proved_here: false` dependency, forward reference, or cross-batch dependency.

## Planned component provenance and Step-5 source rationale

The labels below are expected frontmatter values. “Statement” means the Definition, Statement, or exact example/counterexample construction; “Proof” means the local proof, verification, or refutation.

Every reference to Hackman or Stein in the item rows means the exact coverage URL recorded above. Those are the URLs Step 5 must place in the item’s `sources.references`; no unlisted landing page or substitute edition is licensed.

### `sums-of-two-squares`

| Item | Statement | Proof | Source/edit rationale |
|---|---|---|---|
| `def-sum-of-two-squares-representation` | literature-derived | not-applicable | Hackman E.I opening, E.II.4, and Stein Definition 5.7.3; ordered pairs make sign/order counting unambiguous; cite Hackman and Stein. |
| `lem-brahmagupta-fibonacci-two-square-identity` | literature-derived | literature-derived | Hackman E.II.1 and Stein identity (5.7.1); the second sign variant is the standard substitution \(d\mapsto-d\); cite both. |
| `cor-sums-of-two-squares-closed-under-products` | literature-derived | ai-altered | Hackman E.II.1 and Stein’s discussion after (5.7.1); the proof is recast with the zero boundary explicit; cite both. |
| `prop-odd-two-square-representations-correspond-under-doubling` | literature-derived | ai-altered | Hackman E.II Exercise 2, including the primitive restriction; cite Hackman. |
| `lem-three-mod-four-prime-dividing-two-square-sum` | literature-derived | ai-altered | Hackman proof of E.II.2 and Stein Lemma 5.7.4; the local coordinate-divisibility form is isolated for reuse; cite both. |
| `prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares` | literature-derived | ai-altered | Hackman E.II Exercise 4; finite-intersection proof written in the library’s quotient-set language; cite Hackman. |
| `lem-thue-small-representatives` | literature-derived | ai-altered | Hackman E.I.1, restricted to a prime modulus and rewritten without floor notation; cite Hackman. |
| `thm-fermat-two-square-theorem-for-primes` | literature-derived | ai-altered | Hackman E.I.2 and Stein Theorem 5.7.1; local proof follows Hackman’s Thue route rather than Stein’s later continued fractions; cite both. |
| `lem-two-essentially-different-two-square-representations-factor-an-odd-integer` | ai-altered | ai-altered | Hackman E.I.3 narrowed to positive normalized coordinates and separated from its prime corollary; cite Hackman. |
| `thm-uniqueness-of-two-square-representation-of-a-prime` | literature-derived | ai-altered | Hackman E.I.3; the factorisation proof is decomposed through the preceding lemma; cite Hackman. |
| `lem-two-square-representations-of-prime-powers` | ai-altered | ai-altered | Bundles the prime-power cases used inside Hackman E.II.2 and Stein Theorem 5.7.1; cite both. |
| `thm-sum-of-two-squares-characterisation` | literature-derived | ai-altered | Hackman E.II.2 and Stein Theorem 5.7.1; necessity explicitly iterates the local coordinate divisibility; cite both. |
| `lem-coprime-primitive-two-square-products-remain-primitive` | literature-derived | ai-altered | Hackman E.II.5; complex notation is replaced by the same four real linear combinations; cite Hackman. |
| `lem-prime-one-mod-four-powers-have-primitive-two-square-representations` | literature-derived | ai-altered | Hackman E.II.6; the local induction uses the two sign candidates and no Gaussian-integer factorisation; cite Hackman. |
| `thm-primitive-sum-of-two-squares-characterisation` | literature-derived | ai-altered | Hackman E.II.4–E.II.6; cite Hackman. |
| `cor-primitive-sums-of-two-squares-closed-under-products` | literature-derived | ai-altered | Hackman E.II.8(a), reproved from the exact local characterisation; cite Hackman. |
| `cor-divisors-of-primitively-two-square-representable-integers` | literature-derived | ai-altered | Hackman E.II.8(b), reproved through canonical exponent inheritance; cite Hackman. |
| `cor-squarefree-sum-of-two-squares-characterisation` | ai-altered | ai-generated | Source-backed direct specialization of Hackman E.II.2/E.II.4, with the stronger “every representation” clause proved locally; cite Hackman. |

### `sums-of-two-squares-examples`

| Item | Construction/statement | Verification/proof | Source/edit rationale |
|---|---|---|---|
| `ex-thue-lemma-produces-a-two-square-representation` | ai-altered | ai-altered | Hackman E.I.4 supplies \(p=73\), root \(27\), and coordinates \(3,8\); the collision presentation is adapted from E.I.1; cite Hackman. |
| `ex-two-square-representation-of-seventy-three-by-extended-euclid` | literature-derived | ai-altered | Exact E.I.4 Euclidean computation; cite Hackman. |
| `ex-two-square-representations-from-prime-factorisation` | literature-derived | ai-altered | Exact two representations of 221 from Hackman E.II.3(a); cite Hackman. |
| `cex-an-odd-three-mod-four-valuation-obstructs-two-squares` | literature-derived | ai-altered | Exact 539 witness from Hackman E.II.3(b); cite Hackman. |
| `ex-two-essentially-different-representations-force-compositeness` | ai-altered | ai-altered | Applies Hackman E.I.3 to the source’s two representations of 221 and computes the factors; cite Hackman. |
| `ex-primitive-two-square-representation-criterion` | literature-derived | ai-altered | Exact 289, 34, and 833 examples from Hackman E.II.7(a)–(c); cite Hackman. |
| `cex-four-dividing-n-forces-a-nonprimitive-two-square-representation` | literature-derived | ai-altered | Exact 68 witness and mod-four argument from Hackman E.II.7(d); cite Hackman. |
| `ex-squarefree-sums-of-two-squares` | ai-generated | ai-generated | The bounded interval and complete witness list were selected locally from the source-backed squarefree corollary; this item must carry `generation: {role: example}` and must never become a dependency target. |

No theorem, proposition, definition, lemma, false statement, or remark has an AI-generated Statement. The only generated construction is the final bounded example.

### Generated-construction truth-risk check

For `ex-squarefree-sums-of-two-squares`, the exact squarefree positive integers at most \(30\) were independently enumerated:

```text
1, 2, 3, 5, 6, 7, 10, 11, 13, 14, 15, 17, 19, 21, 22, 23, 26, 29, 30.
```

Removing those with an odd prime factor congruent to \(3\pmod4\) leaves

```text
1, 2, 5, 10, 13, 17, 26, 29.
```

The Step-5 verification must display and check

```text
1=1^2+0^2, 2=1^2+1^2, 5=1^2+2^2, 10=1^2+3^2,
13=2^2+3^2, 17=1^2+4^2, 26=1^2+5^2, 29=2^2+5^2.
```

These computations are the completed counterexample search for an omitted or falsely retained integer in the stated finite interval. The item is non-load-bearing and no manifest item depends on it.

## Exact Step-5 clauses bound by same-batch proof citations

The following substrings must occur verbatim in the authored source section named by the proof contract:

- `def-sum-of-two-squares-representation`, Definition:
  - `A representation of a nonnegative integer $n$ as a sum of two squares is an ordered pair $(x,y)\in\mathbb Z^2$ such that $n=x^2+y^2$.`
  - `It is **primitive** when $\gcd(x,y)=1$.`
- `lem-brahmagupta-fibonacci-two-square-identity`, Statement:
  - `$(a^2+b^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2=(ac+bd)^2+(ad-bc)^2.$`
- `cor-sums-of-two-squares-closed-under-products`, Statement:
  - `The product of two nonnegative integers representable as sums of two squares is again representable as a sum of two squares.`
- `lem-three-mod-four-prime-dividing-two-square-sum`, Statement:
  - `If $q\equiv3\pmod4$ is prime and $q\mid x^2+y^2$, then $q\mid x$ and $q\mid y$.`
- `lem-thue-small-representatives`, Statement:
  - `there are nonzero integers $r,s$ with $|r|,|s|<\sqrt p$ and $ra\equiv s\pmod p$.`
- `thm-fermat-two-square-theorem-for-primes`, Statement:
  - `A prime $p$ is a sum of two integer squares if and only if $p=2$ or $p\equiv1\pmod4$.`
- `lem-two-essentially-different-two-square-representations-factor-an-odd-integer`, Statement:
  - `two essentially different normalized representations force a factorisation $N=PQ$ with $P,Q>1$.`
- `lem-two-square-representations-of-prime-powers`, Statement:
  - `Every power of $2$ and every power of a prime $p\equiv1\pmod4$ is a sum of two squares; a power of $q\equiv3\pmod4$ is representable exactly when its exponent is even.`
- `thm-sum-of-two-squares-characterisation`, Statement:
  - `A positive integer $n$ is a sum of two squares if and only if every prime $q\equiv3\pmod4$ occurs to an even exponent in its canonical prime factorisation.`
- `lem-coprime-primitive-two-square-products-remain-primitive`, Statement:
  - `If $P=a^2+b^2$ and $Q=c^2+d^2$ are primitive representations with $\gcd(P,Q)=1$, then the Brahmagupta–Fibonacci construction gives a primitive representation of $PQ$.`
- `lem-prime-one-mod-four-powers-have-primitive-two-square-representations`, Statement:
  - `Every natural power of a prime congruent to $1$ modulo $4$ has a primitive two-square representation.`
- `thm-primitive-sum-of-two-squares-characterisation`, Statement:
  - `A positive integer $n$ has a primitive two-square representation if and only if $v_2(n)\le1$ and no prime $q\equiv3\pmod4$ divides $n$.`
- `cor-squarefree-sum-of-two-squares-characterisation`, Statement:
  - `A squarefree positive integer is a sum of two squares if and only if none of its odd prime factors is congruent to $3$ modulo $4$; every such representation is primitive.`

The factorisation-lemma clause is a concise sentence that must sit inside a complete normalized-coordinate Statement; it is not permission to publish only the quoted summary.

## Exact A-page summary for Step 5

Quadratic reciprocity and its first supplement determine exactly when \(-1\) is a square modulo an odd prime. Canonical prime factorisation and \(p\)-adic valuations record the multiplicity of every prime divisor, while finite counting and the strong pigeonhole principle produce small congruent representatives. The existence and order properties of real square roots turn their integer bounds into strict inequalities.

A two-square representation is defined together with its primitive form, and the Brahmagupta–Fibonacci identity controls products. Thue’s lemma yields Fermat’s theorem for primes, while a factorisation lemma gives uniqueness up to signs and order. Prime-power analysis and the local obstruction at primes congruent to three modulo four lead to the full characterisation. Separate primitive-product and primitive-prime-power lemmas then give the primitive criterion and its product, divisor, and squarefree consequences.

The B page must have no authored summary body.

## Landmarks for Step 5

Set `landmark: true` on:

- `def-sum-of-two-squares-representation`;
- `lem-brahmagupta-fibonacci-two-square-identity`;
- `lem-thue-small-representatives`;
- `thm-fermat-two-square-theorem-for-primes`;
- `thm-uniqueness-of-two-square-representation-of-a-prime`;
- `thm-sum-of-two-squares-characterisation`;
- `thm-primitive-sum-of-two-squares-characterisation`.

All other batch items should remain `landmark: false`.

## Proof obligations and boundary closure

The version-1 proof-contract file gives every planned proof-bearing item an exact numbered-step input map, direct fact-source clauses, all eight boundary dispositions, and an explicit empty `finite_smoke` array. No registered finite-smoke model matches these integer-representation claims.

The high-risk obligations carried into authoring are:

- Thue’s lemma: prove the finite search set is nonempty; exclude \((h+1)^2=p\); use \((h+1)^2>p\), not \(\ge p\); prove both coordinate differences are nonzero; and keep all bounds strict.
- Fermat’s theorem: isolate \(p=2\); translate the Legendre value into existence of a square root through the definition; and use positivity plus the strict \(2p\) bound to identify the multiple.
- The odd-doubling bijection: prove both inverse half-sums are integers and prove primitivity in both directions, including a zero coordinate.
- Prime uniqueness: prove nonzero coordinates and opposite parity before normalization; do not list the sign/order orbit until equality and zero-coordinate degeneracies are excluded.
- The general characterisation: remove the entire \(q\)-valuation two factors at a time and exclude the exponent-one endpoint; handle \(n=1\) by the empty factorisation.
- Primitive prime powers: show any common prime of either product candidate must equal \(p\), then show the two candidates cannot both be coordinatewise divisible by \(p\).
- The primitive characterisation: prove both local necessities, establish pairwise coprimality of distinct canonical prime-power factors, and include the empty factor list at one.
- Every iff: keep the forward and reverse proofs separate. In particular, the three-mod-four valuation theorem and primitive theorem must not rely on a converse merely suggested by a cited item.

No proof uses Gaussian-integer factorisation, unique factorisation in \(\mathbb Z[i]\), continued fractions, a floor function, an infinite choice, or a load-bearing result from a later page.

## Per-pair richness report

Both required passes were performed for this A/B pair.

Long-proof decomposition:

- Fermat’s sufficiency proof is decomposed through `lem-thue-small-representatives`.
- Prime uniqueness is decomposed through `lem-two-essentially-different-two-square-representations-factor-an-odd-integer`.
- The positive-integer criterion is decomposed through the local three-mod-four divisibility lemma and the prime-power representation lemma.
- The primitive criterion is decomposed through `lem-coprime-primitive-two-square-products-remain-primitive` and `lem-prime-one-mod-four-powers-have-primitive-two-square-representations`.
- The companion presents the source-backed representation \(73=3^2+8^2\) by two genuinely different routes: a finite collision and Extended Euclid.

Useful consequences retained or added by the corollary pass:

- closure of two-square representations under products;
- the odd-doubling bijection, including primitive representations;
- representation of every nonzero residue modulo an odd prime by two squares;
- primitive product closure when the factors are not both even;
- inheritance of primitive representability by positive divisors;
- the squarefree criterion and universal primitivity of its representations.

No further cheap consequence survived the no-restatement and generated-claim checks. The A page has 18 items and needs no split.

## Per-page item list

### `sums-of-two-squares` — 18 items

1. `def-sum-of-two-squares-representation` — definition — Representations and primitive representations as sums of two squares
2. `lem-brahmagupta-fibonacci-two-square-identity` — lemma — The Brahmagupta–Fibonacci two-square identity
3. `cor-sums-of-two-squares-closed-under-products` — corollary — Sums of two squares are closed under products
4. `prop-odd-two-square-representations-correspond-under-doubling` — proposition — Representations of an odd integer correspond to representations of twice that integer
5. `lem-three-mod-four-prime-dividing-two-square-sum` — lemma — A prime congruent to \(3\) modulo \(4\) divides both coordinates of a divisible two-square sum
6. `prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares` — proposition — Every nonzero residue modulo an odd prime is a sum of two squares
7. `lem-thue-small-representatives` — lemma — Thue’s lemma on small nonzero representatives
8. `thm-fermat-two-square-theorem-for-primes` — theorem — Fermat’s two-square theorem for primes
9. `lem-two-essentially-different-two-square-representations-factor-an-odd-integer` — lemma — Two essentially different two-square representations factor an odd integer
10. `thm-uniqueness-of-two-square-representation-of-a-prime` — theorem — A prime congruent to \(1\) modulo \(4\) has one two-square representation up to signs and order
11. `lem-two-square-representations-of-prime-powers` — lemma — Prime powers represented as sums of two squares
12. `thm-sum-of-two-squares-characterisation` — theorem — Characterisation of positive integers that are sums of two squares
13. `lem-coprime-primitive-two-square-products-remain-primitive` — lemma — Coprime primitively represented factors have a primitive product representation
14. `lem-prime-one-mod-four-powers-have-primitive-two-square-representations` — lemma — Powers of primes congruent to \(1\) modulo \(4\) have primitive two-square representations
15. `thm-primitive-sum-of-two-squares-characterisation` — theorem — Characterisation of primitive sums of two squares
16. `cor-primitive-sums-of-two-squares-closed-under-products` — corollary — Primitive sums of two squares are closed under products unless both factors are even
17. `cor-divisors-of-primitively-two-square-representable-integers` — corollary — Positive divisors of primitively represented integers are primitively represented
18. `cor-squarefree-sum-of-two-squares-characterisation` — corollary — Squarefree sums of two squares

### `sums-of-two-squares-examples` — 8 items

1. `ex-thue-lemma-produces-a-two-square-representation` — example — Thue’s collision argument gives \(73=3^2+8^2\)
2. `ex-two-square-representation-of-seventy-three-by-extended-euclid` — example — Extended Euclid gives \(73=3^2+8^2\) from the root \(27\) of \(-1\)
3. `ex-two-square-representations-from-prime-factorisation` — example — Prime factorisation gives two representations of \(221\) as a sum of two squares
4. `cex-an-odd-three-mod-four-valuation-obstructs-two-squares` — counterexample — \(539=7^2\cdot11\) is not a sum of two squares
5. `ex-two-essentially-different-representations-force-compositeness` — example — The representations \(221=5^2+14^2=11^2+10^2\) recover the factors \(13\) and \(17\)
6. `ex-primitive-two-square-representation-criterion` — example — The primitive two-square criterion distinguishes \(289\), \(34\), and \(833\)
7. `cex-four-dividing-n-forces-a-nonprimitive-two-square-representation` — counterexample — \(68=8^2+2^2\) is representable but has no primitive two-square representation
8. `ex-squarefree-sums-of-two-squares` — example — Squarefree sums of two squares up to \(30\)

## New-id and reuse report

Before writing the manifest, a fixed-string `rg` search over `items/` and `research/plan-spec.json` was run for every final id. All 26 reported `NEW`. Semantic searches for sums-of-two-squares criteria, primitive two-square representations, the Brahmagupta–Fibonacci identity, Thue’s lemma, and factorisation from two representations found no existing item with the same Statement.

The search did find and reuse all relevant published general machinery rather than re-minting it, including the first supplement, finite counting and pigeonhole theorems, canonical factorisation and valuations, the unit-square criterion modulo \(n\), and the squarefree definition.

## Forward references and cross-batch dependencies

There are no forward references.

This batch needs no item from another frontier-17 batch, and no other frontier-17 batch is expected to need a new item from this pair. The later number-theory pages named in coverage destinations are planned in `research/plan-spec.json`, not concurrent batch inputs.

## Findings for Step-3 Alpha

1. Approve NT4-1, correcting the Conrad source description. The design’s current locator and contents are false of the official source; declining leaves a citation-honesty defect.
2. Approve NT4-3, adding the two primitive-representation lemmas. They are load-bearing named results in Hackman, and declining leaves the primitive theorem’s sufficiency proof unlicensed.
3. Approve NT4-2, separating Hackman’s odd-integer factorisation lemma from prime uniqueness. Declining hides the central proof move and leaves the companion factor-recovery calculation without a focused dependency.
4. Approve NT4-4, retaining both clauses of Hackman E.II.8. Declining makes the design cite a corollary while scaffolding none of it.
5. Approve NT4-5, retaining the odd-doubling bijection and the nonzero-residue proposition. Both have short, source-backed, dependency-closed proofs; declining drops valuable harvested results for no mathematical constraint.
6. Approve NT4-6, adding the source’s Extended-Euclid construction of \(73\). Declining is mathematically safe but removes a genuinely different constructive route.

These are independent recommendations, ordered by citation correctness, proof closure, source completeness, and then expository richness. The former source-stamp blocker is resolved and requires no Alpha decision.

## Confidence and unverified work

Mathematical confidence is high. I checked the strict Thue bounds and nonzero differences; both directions of Fermat’s criterion; the normalized E.I.3 factorisation algebra; all prime-power boundary exponents; the repeated valuation drop in the general theorem; the two-candidate induction for primitive prime powers; pairwise-coprime multiplication in the primitive theorem; both clauses of E.II.8; parity and gcd preservation in the odd-doubling bijection; the finite-set intersection proof modulo an odd prime; and every numerical companion witness.

Every proposed published dependency was opened from disk, and every load-bearing dependency is internal to the pair or published on a strictly earlier page. There is no exception.

What was not verified: the current Hackman bytes and hash were not recomputed through the source-scout sandbox because every fresh Node network request returned `EAI_AGAIN`; the exact-URL mechanical stamp from frontier-15 was reused and the current full document was separately opened through the web reader. `validate-plan` and `depsource` cannot authoritatively classify these new ids until Step 4 splices the manifest into `research/plan-spec.json`; the proof-contract strict gate cannot compare planned numbered steps or same-batch quote text until Step 5 creates the item files. No Step-6 independent audit, Step-7 judge, publication, or status change has occurred.

## Final Step-2 checks

- All three JSON artifacts parse.
- content-policy in manifest-only mode reports 26 scoped items, zero errors, and zero warnings.
- coverage-checklist with destination enforcement reports one page, 47 harvested results, zero errors, and zero warnings.
- The batch consistency audit reports 26 unique items, 25 proof-bearing scope entries, 25 contracts, no internal forward dependency, no missing or draft external target, and all eight boundary dispositions in every contract.
- Every external proof-contract quote is an exact normalized substring of its declared source section. Every same-batch quote appears in the durable Step-5 clause ledger above.
- The generated squarefree example was independently recomputed: the squarefree list through 30, the retained list, all eight primitive witness pairs, both representations of 221, the factors 13 and 17, the root and collision modulo 73, and the 289, 34, 833, and 68 arithmetic all check.
- The fixed-string new-id scan reports zero collisions in items/ or research/plan-spec.json.
- prosecheck reports zero errors and 22 warnings: 21 count-in-prose heuristics and one count-of-this-page heuristic, all in this required audit report or in source result numbers inside coverage.json; it reports no positional contradiction.
- The owned artifacts contain no applied canonical embedding and no trailing whitespace.
- validate-plan passes on the current unspliced research/plan-spec.json. This is not a claim that it classified the 26 new ids; Step 4 must splice them first.
- depsource passes on the current unspliced plan with zero unresolved dependencies. This is likewise a baseline result, not the authoritative post-splice classification.
- source-fetch-check exits zero with both coverage sources stamped; the Hackman evidence is the prior exact-URL mechanical stamp corroborated by the current 415-page web fetch.

## Frattini/Burnside scaffold record

# Frontier 17, batch 2 — Beta-2 scaffold notes

## Scope and design control

This batch owns `frattini-subgroups-and-the-burnside-basis-theorem` at order 71.001 and its companion at order 71.002. The A page has 24 items and the B page has 12 items. The A page is below the current 60-item split ceiling, so no split is proposed and no result was pruned for size.

The two dispatched design locations are both inside `research/plan-group-theory-track.md` GT-1. Lines 451–530 are the A-page design and lines 531–567 are its companion inventory, sources, proof route, and explicit no-forward-reference decision. I treated the complete GT-1 block as controlling mathematical intent. The B subsection is not a later amendment that supersedes the A subsection; it completes the same design. The live `research/plan-spec.json` remains controlling for order and `requires`, as the dispatch directs.

The mandatory coverage artifact is `research/frontier-17-batch-2.coverage.json`. The dispatch's “ONLY files” list accidentally omits it while separately requiring and gating it. The most recently completed batch-1 notes record the same prompt defect. I wrote the namespaced coverage artifact and touched no shared prose, plan, item, or library file.

### Design/spec drift held for the engine

Exact design text:

```text
**`requires`** `sylow-theorems-and-nilpotent-groups`,
`composition-series-and-solvable-groups`
```

Exact dispatched plan-spec value:

```json
"requires": [
  "sylow-theorems-and-nilpotent-groups-examples"
]
```

I did not choose between them. The manifest preserves the spec value. The needed composition-series facts are already in the transitive dependency closure of the published Sylow/nilpotence page, so the mathematics closes without a load-bearing forward reference, but the direct page edge remains a stage-1 drift decision.

`SCHEMA.md` §6 still mentions a 100-item scaffold review ceiling, whereas current `CLAUDE.md` and this dispatch impose 60. This A page is below both values, so the drift does not affect the batch.

## Applyable amendments to `research/plan-group-theory-track.md`

### Amendment GT1-1 — start from the material that is now published

Recommendation: approve. The original GT-1 design predates the preceding pair's expansion and now re-mints immutable ids for the p-core, Fitting subgroup, Frattini definition, nongenerator characterization, and solvable Fitting-centralizer theorem.

Exact old text, GT-1 opening through item 10:

```text
The page starts with normal $p$-cores and consequences of the already-owned
Fitting subgroup, then isolates the finite $p$-group generation theory carried
by $P/\Phi(P)$. This is genuinely above Sylow: neither Sylow existence nor
nilpotence is repeated.

### A-page items, in dependency order

1. `def-p-core-of-a-finite-group` — **definition** `[LN]`.
   $O_p(G)$ is the subgroup generated by all normal $p$-subgroups of finite
   $G$; the notation is not introduced until item 2 proves this product is a
   normal $p$-subgroup.
2. `lem-products-of-normal-p-subgroups-are-normal-p-subgroups` — **lemma**
   `[LL]`, by the finite product formula and normality.
3. `prop-p-core-is-the-largest-normal-p-subgroup-and-is-characteristic` —
   **proposition** `[LA]`.
4. `thm-fitting-subgroup-is-the-product-of-the-p-cores` — **theorem** `[LA]`,
   $F(G)=\prod_{p\mid |G|}O_p(G)$, citing the AG-4 definition and its Fitting
   product theorem.
5. `thm-centralizer-of-the-fitting-subgroup-in-a-finite-solvable-group` —
   **theorem** `[LL]`, $C_G(F(G))\le F(G)$; “solvable” is load-bearing and a
   counterexample without it is on the B page.
6. `def-frattini-subgroup-of-a-finite-group` — **definition** `[LN]`, the
   intersection of all maximal proper subgroups, with $\Phi(1)=1$ fixed.
7. `lem-frattini-subgroup-is-characteristic` — **lemma** `[LL]`.
8. `def-nongenerator-of-a-group` — **definition** `[LN]`: $x$ is a
   nongenerator if $\langle S,x\rangle=G$ implies $\langle S\rangle=G$ for
   every $S\subseteq G$.
9. `thm-frattini-subgroup-is-the-set-of-nongenerators-for-finite-groups` —
   **theorem** `[LL]`; both inclusions use existence of a maximal overgroup only
   in the finite case.
10. `cor-generation-is-detected-modulo-the-frattini-subgroup` — **corollary**
    `[LA]`, $S$ generates $G$ iff its image generates $G/\Phi(G)$.
The general finite-group results “$\Phi(G)$ is nilpotent”,
$\Phi(G)\le F(G)$, nilpotence lifts from $G/\Phi(G)$, and
$F(G/\Phi(G))=F(G)/\Phi(G)$ are amendments owed to AG-4, which owns the
Fitting/nilpotence page. They are cited here when needed and are not re-minted.
```

Exact new text:

```text
The published pair `sylow-theorems-and-nilpotent-groups` now owns the
$p$-core, the Fitting subgroup and its maximality, the Frattini definition and
nongenerator characterization, Frattini lifting of nilpotence, and Philip
Hall's self-centralization theorem for finite solvable groups. GT-1 cites those
immutable items rather than re-minting them. It begins by isolating the still
missing characteristicity lemma and the generation criterion modulo
$\Phi(G)$, then develops the finite-$p$-group theory carried by
$P/\Phi(P)$.
```

If declined, Step 5 is directed to duplicate published ids or to leave the first genuinely new dependency—characteristicity—without a focused Statement.

### Amendment GT1-2 — replace the unavailable later linear-algebra dependency by a native finite dictionary

Recommendation: approve. The design's item 15 says to cite an elementary-abelian/vector-space dictionary, but `def-vector-space` is on order 72 and dimension/basis items are at order 74, later than order 71.001. A load-bearing citation to them is forbidden.

Exact old text:

```text
14. `cor-frattini-quotient-is-elementary-abelian` — **corollary** `[LL]`.
15. `lem-frattini-quotient-has-a-canonical-fp-vector-space-structure` —
    **lemma** `[LA]`, citing the elementary-abelian/vector-space dictionary.
16. `def-generator-rank-of-a-finite-p-group` — **definition** `[LN]`,
    $d(P)=\dim_{\mathbb F_p}P/\Phi(P)$; well-definedness is item 15.
```

Exact new text:

```text
Define elementary abelian $p$-groups, prove directly that exponentiation by
residue classes gives their canonical $\mathbb F_p$-linear structure, define
spanning, independence and bases in that finite multiplicative setting, and
prove finite basis existence, extension, extraction and equality of basis
sizes without a choice principle. Then prove that $P/\Phi(P)$ is the largest
elementary abelian quotient and define
$d(P)=\dim_{\mathbb F_p}P/\Phi(P)$ using the locally established finite
dimension. Do not cite the order-72/74 general vector-space pages.
```

If declined, the central Burnside theorem acquires a load-bearing forward reference or silently assumes all of finite-dimensional linear algebra.

### Amendment GT1-3 — state Burnside basis with its missing injectivity clause

Recommendation: approve. For a subset $X\subseteq P$, saying only that its image set in the quotient is a basis loses repeated cosets: distinct $x,y\in X$ can have $x\Phi(P)=y\Phi(P)$, making the image a basis even though one of $x,y$ is redundant.

Exact old text:

```text
17. `thm-burnside-basis-theorem` — **theorem** `[LL]`: a subset of $P$ is a
    minimal generating set precisely when its image is a basis of
    $P/\Phi(P)$. LANDMARK.
```

Exact new text:

```text
17. `thm-burnside-basis-theorem` — **theorem** `[LL]`: a subset
$X\subseteq P$ is a minimal generating set precisely when the quotient map
restricts to a bijection from $X$ onto a basis of $P/\Phi(P)$. Equivalently,
the indexed family $(x\Phi(P))_{x\in X}$ is a basis. LANDMARK.
```

If declined, the designed theorem is false for any generating set containing two distinct lifts of the same basis vector.

### Amendment GT1-4 — expose the source's Frattini laws and automorphism decomposition

Recommendation: approve.

Exact old text, items 11–21:

```text
11. `lem-maximal-subgroups-of-a-finite-p-group-are-normal-of-index-p` —
    **lemma** `[LA]`, citing the normalizer condition from AG-4.
12. `def-power-subgroup-of-a-group` — **definition** `[LN]`,
    $G^p=\langle g^p:g\in G\rangle$; it is characteristic.
13. `thm-frattini-subgroup-formula-for-a-finite-p-group` — **theorem** `[LL]`,
    $\Phi(P)=P'P^p$.
14. `cor-frattini-quotient-is-elementary-abelian` — **corollary** `[LL]`.
15. `lem-frattini-quotient-has-a-canonical-fp-vector-space-structure` —
    **lemma** `[LA]`, citing the elementary-abelian/vector-space dictionary.
16. `def-generator-rank-of-a-finite-p-group` — **definition** `[LN]`,
    $d(P)=\dim_{\mathbb F_p}P/\Phi(P)$; well-definedness is item 15.
17. `thm-burnside-basis-theorem` — **theorem** `[LL]`: a subset of $P$ is a
    minimal generating set precisely when its image is a basis of
    $P/\Phi(P)$. LANDMARK.
18. `cor-minimal-generating-sets-of-a-finite-p-group-have-equal-size` —
    **corollary** `[LA]`, and every generating set contains one of size $d(P)$.
19. `cor-maximal-subgroups-of-a-finite-p-group-are-kernels-of-nonzero-linear-forms` —
    **corollary** `[LA]`, identifying maximal subgroups with hyperplanes of the
    Frattini quotient.
20. `thm-hall-burnside-automorphism-theorem` — **theorem** `[LL]`: if a
    $p'$-subgroup $A\le\operatorname{Aut}(P)$ acts trivially on
    $P/\Phi(P)$, then $A=1$.
21. `cor-kernel-of-the-action-on-the-frattini-quotient-is-a-p-group` —
    **corollary** `[LA]` for finite $P$.
```

Exact new text:

```text
Reuse the published theorem that maximal subgroups of finite nilpotent groups
are normal of prime index; Lagrange specializes the index to $p$. Define
$G^p$, prove that $P/\Phi(P)$ is the largest elementary abelian quotient, and
then prove $\Phi(P)=P'P^p$. Record separately the source-backed laws
$\Phi(H)\le\Phi(P)$ for $H\le P$,
$\Phi(P/N)=\Phi(P)N/N$,
$\Phi(P\times Q)=\Phi(P)\times\Phi(Q)$, and
$\Phi(P)=P^2$ for finite $2$-groups, followed by the criterion
$\Phi(P)=1$ iff $P$ is elementary abelian. After Burnside basis, record equal
minimal-generator sizes and extraction, extension of every element outside
$\Phi(P)$ to a minimal generating set, the cyclicity criterion $d(P)=1$, and
the maximal-subgroup/hyperplane correspondence. Finally construct the linear
action $\rho_P$ explicitly, prove Hall–Burnside for $p'$-subgroups, and deduce
that $\ker\rho_P$ is a $p$-group.
```

If declined, the page omits all four named clauses of van Beek Lemma 3.6 and leaves the automorphism theorem without its induced-action prerequisite.

### Amendment GT1-5 — make the unitriangular example legal at this order

Recommendation: approve. General matrix interfaces begin at order 78, so the designed example cannot cite them. Conrad Example 6.11 supplies the coordinate $3\times3$ family, and Harpaz–Wittenberg gives its general unitriangular derived-subgroup context.

Exact old text:

```text
`ex-generator-rank-of-upper-unitriangular-groups` `[LA]`
```

Exact new text:

```text
`ex-generator-rank-of-upper-unitriangular-groups` `[LA]` — for each prime
$p$, construct the $3\times3$ upper-unitriangular group natively as
$(a,b,c)(a',b',c')=(a+a',b+b',c+c'+ab')$, prove that its Frattini subgroup is
the central $c$-axis, and conclude that its generator rank is two. Do not cite
the order-78/82 matrix pages.
```

If declined, the example either carries a forbidden later dependency or assumes matrix-group closure and commutator computations that are not available.

## Web research ledger and conventions

1. David A. Craven, *The Theory of p-Groups*: https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf
   - Read §1.1 Theorems 1.1–1.2 and Proposition 1.3, Definition 2.6, and §2.2 from Definition 2.16 through Theorem 2.30.
   - Supports the Fitting-solvability boundary, elementary abelian convention, nongenerator theory, largest elementary abelian quotient, Frattini formula, Burnside basis, and Hall–Burnside.
   - Convention/text issue: Proposition 2.25's surrounding prose slips from “generated by $p$th powers” to “containing all elements of order $p$.” The displayed definition and formula use $p$th powers; this scaffold follows those, not the stray phrase.
   - Terminology: Craven writes “soluble”; the library consistently writes “solvable.”
2. Keith Conrad, *Generating Sets*: https://kconrad.math.uconn.edu/blurbs/grouptheory/genset.pdf
   - Read Definition 6.8 through Theorem 6.12 and its immediate consequences.
   - Independently supports the canonical scalar action, cyclic and quaternion examples, the coordinate upper-unitriangular example, generation modulo $\Phi$, equal minimal-generator sizes, and extraction from a generating set.
   - Convention: Conrad first defines $d(G)$ as the minimum generator number for any finite group. This page defines $d(P)$ through the Frattini quotient only after Burnside basis proves the two meanings agree for finite $p$-groups.
3. Martin van Beek, *Topics in Finite p-Groups*: https://martinvanbeek.github.io/uploads/LectureNotes.pdf
   - Read Chapter 3 §3.1 from Definition 3.2 through the remark after Theorem 3.7, and Proposition 4.10.
   - Independently supports the largest elementary quotient, formula, four subgroup/quotient/product/square laws, equal basis size, extension of a non-Frattini element, and the automorphism kernel theorem.
   - Notation: van Beek uses the Agemo symbol $\mho_1(P)$ where this page uses the more reader-familiar $P^p$.
4. Yonatan Harpaz and Olivier Wittenberg, *The Massey Vanishing Conjecture for Number Fields*: https://www.math.univ-paris13.fr/~wittenberg/globalmassey.pdf
   - Read the unitriangular setup at the start of §2, before Notation 2.1.
   - Supports the description of the derived subgroup as the zero-first-superdiagonal subgroup and the adjacent-transvection basis of the abelianization.
   - Index convention: the paper uses $(n+1)\times(n+1)$ matrices indexed from $0$ to $n$; the retained companion example is the $3\times3$ case in coordinate triples.

The coverage file has 45 harvested rows across these treatments. `coverage-checklist` reports no error or warning.

### URL stamp status

The required command

```text
node tools/source-fetch-check.mjs --coverage research/frontier-17-batch-2.coverage.json --stamp
```

was run. All four URLs failed with the same local DNS error `EAI_AGAIN`; no source returned an HTTP response and no stamp was fabricated. Same-text mirrors were scouted immediately: Conrad has a CiteSeerX mirror, and Harpaz–Wittenberg has both the author's alternate copy and arXiv:1904.06512. Craven and van Beek currently expose their texts on the author sites already recorded. Because the failure is resolver-wide rather than host-specific, changing authoritative URLs would not repair the stamp gate. Exact retry command is the command above.

## Dependency closure and order audit

The manifest has 53 distinct published external dependencies. Every one was opened from `items/`, every one has `status: published`, 35 have `provenance.statement: literature-derived`, and 18 have `provenance.statement: ai-altered`. None is `ai-generated` or legacy-unclassified.

Every external dependency is homed on a non-examples published page of order at most 70. Every same-batch dependency is earlier on its own page or on the A page before the companion. A direct home/order audit reports 53 external dependencies and 0 bad homes, later orders, B-leaf targets, statuses, or provenance labels.

The order audit found and removed the tempting but illegal dependencies on `def-vector-space` at order 72, basis/dimension at order 74, matrices at orders 78/82, and algebraic duals at order 92. The finite $\mathbb F_p$ dictionary and coordinate Heisenberg construction are local replacements. There is no forward reference, cross-batch input, `proved_here: false` item, or external fallback.

The 18 AI-altered published dependencies were confirmed established-from-knowledge after exact on-disk inspection: modular arithmetic and finite counting; generated subgroups, powers, quotients, and Lagrange; normality of commutators; solvability and symmetric-group normal-subgroup interfaces. Their exact domains, finiteness hypotheses, directions, and boundary clauses are standard and match their use. No published load-bearing falsehood was found.

## Planned component provenance

| Item | Statement/construction | Proof/verification | Source/edit rationale |
|---|---|---|---|
| `lem-frattini-subgroup-is-characteristic` | literature-derived | ai-altered | Craven §2.2 and Conrad Definition 6.8 state characteristicity; the local proof makes the permutation-of-maximals argument explicit. |
| `cor-generation-is-detected-modulo-the-frattini-subgroup` | literature-derived | ai-altered | Craven Proposition 2.18 and Conrad Theorem 6.12; the proof removes finitely many nongenerators. |
| `def-elementary-abelian-p-group` | literature-derived | not-applicable | Craven Definition 2.6, with the trivial group included. |
| `lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces` | literature-derived | ai-altered | Conrad's paragraph after Definition 6.8 gives the exponentiation scalar action; the proof verifies the axioms natively because general vector spaces occur too late. |
| `def-fp-basis-of-an-elementary-abelian-p-group` | ai-altered | not-applicable | Finite-basis terminology from Conrad and Craven, specialized to the native multiplicative presentation needed at this order. |
| `lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension` | ai-altered | ai-altered | The basis consequences after Conrad Theorem 6.12 and van Beek Theorem 3.7, reformulated as a finite choice-free lemma. |
| `def-pth-power-subgroup-of-a-group` | literature-derived | not-applicable | Craven Definition 2.26 and Conrad's definition of G^n. |
| `thm-frattini-quotient-is-the-largest-elementary-abelian-quotient` | literature-derived | ai-altered | Craven Proposition 2.24 and van Beek Lemma 3.4; the local hyperplane separation is written using the native finite basis lemma. |
| `thm-frattini-subgroup-formula-for-a-finite-p-group` | literature-derived | ai-altered | Craven Proposition 2.25 and van Beek Proposition 3.5. |
| `prop-frattini-subgroup-monotonicity-for-subgroups-of-finite-p-groups` | literature-derived | ai-altered | van Beek Lemma 3.6(i), proved locally from the Frattini formula. |
| `prop-frattini-subgroup-of-a-quotient-finite-p-group` | literature-derived | ai-altered | van Beek Lemma 3.6(ii), proved by quotient images of commutators and powers. |
| `prop-frattini-subgroup-of-a-direct-product-of-finite-p-groups` | literature-derived | ai-altered | van Beek Lemma 3.6(iii), proved componentwise. |
| `cor-frattini-subgroup-of-a-finite-two-group-is-the-square-subgroup` | literature-derived | ai-altered | van Beek Lemma 3.6(iv), with the exponent-two quotient argument supplied. |
| `cor-frattini-free-finite-p-groups-are-elementary-abelian` | literature-derived | ai-altered | Immediate two-way consequence of Craven Proposition 2.24 and van Beek Lemma 3.4. |
| `def-minimal-generating-set-of-a-group` | literature-derived | not-applicable | The definition immediately before van Beek Theorem 3.7 and in Conrad §6. |
| `def-generator-rank-of-a-finite-p-group` | literature-derived | not-applicable | Craven Theorem 2.28/Definition 2.29 and Conrad's dimension convention. |
| `thm-burnside-basis-theorem` | ai-altered | ai-altered | Craven Theorem 2.28, Conrad Theorem 6.12, and van Beek Theorem 3.7; the Statement is repaired to require a restricted bijection onto a basis, closing the repeated-coset defect. |
| `cor-minimal-generating-sets-of-a-finite-p-group-have-equal-size` | literature-derived | ai-altered | Conrad's consequences after Theorem 6.12 and van Beek Theorem 3.7. |
| `cor-every-nonfrattini-element-belongs-to-a-minimal-generating-set` | literature-derived | ai-altered | The remark after van Beek Theorem 3.7. |
| `cor-nontrivial-finite-p-group-is-cyclic-iff-generator-rank-one` | literature-derived | ai-altered | Conrad's d(G)=1 cyclic observation combined with Burnside basis. |
| `cor-maximal-subgroups-of-a-finite-p-group-are-frattini-hyperplanes` | ai-altered | ai-altered | The maximal-quotient statements in Craven and van Beek combined with finite coordinate kernels; no later dual-space theorem is cited. |
| `thm-automorphisms-act-linearly-on-the-frattini-quotient` | literature-derived | ai-altered | The induced quotient action preceding Craven Theorem 2.30 and van Beek Proposition 4.10. |
| `thm-hall-burnside-automorphism-theorem` | literature-derived | ai-altered | Craven Theorem 2.30, with each fixed-coset and finite-choice step explicit. |
| `cor-kernel-of-the-action-on-the-frattini-quotient-is-a-p-group` | literature-derived | ai-altered | van Beek Proposition 4.10; derived from Hall–Burnside and Cauchy's theorem. |
| `ex-frattini-subgroup-of-a-cyclic-p-group` | literature-derived | ai-altered | Conrad Example 6.9. |
| `ex-frattini-subgroup-of-an-elementary-abelian-p-group` | literature-derived | ai-altered | Craven Definition 2.6 and Conrad's quotient-vector-space discussion, made explicit for the Cartesian powers. |
| `ex-frattini-subgroups-of-dihedral-and-quaternion-groups` | ai-altered | ai-altered | Conrad Example 6.10 supplies Q8; the D8 computation is the matching square-subgroup calculation from the established dihedral normal form. |
| `ex-generator-rank-of-upper-unitriangular-groups` | ai-altered | ai-altered | Conrad Example 6.11 and Harpaz–Wittenberg §2; narrowed to the 3×3 coordinate family that can be built at this order. |
| `ex-maximal-subgroups-as-frattini-hyperplanes` | ai-altered | ai-altered | Concrete D8 instance of the source-backed hyperplane correspondence. |
| `cex-frattini-image-under-a-nonsurjective-homomorphism` | ai-altered | ai-altered | The design's C4-to-S5 witness, checked from the source-backed cyclic Phi computation and the published S5 normal-subgroup classification. |
| `cex-fitting-centralizer-without-solvability` | ai-altered | ai-altered | Craven's observation after Theorem 1.2, instantiated by the published simplicity and nonsolvability of A5. |
| `ex-hall-burnside-detects-a-nontrivial-coprime-automorphism` | ai-generated | ai-generated | Direct checkable illustration: inversion on C3 has order two, Phi(C3)=1, and its quotient action is nonidentity. |
| `fs-the-frattini-subgroup-is-the-union-of-the-maximal-subgroups` | ai-altered | ai-altered | The source definition says intersection; the explicit Klein-four witness verifies the failed union claim. |
| `fs-the-frattini-subgroup-is-functorial-for-all-homomorphisms` | ai-altered | ai-altered | The standard surjective image inclusion contrasted with the checked C4-to-S5 failure. |
| `fs-every-minimal-generating-set-of-an-arbitrary-finite-group-has-the-same-size` | literature-derived | ai-altered | Conrad §6 explicitly says the general claim fails; the local C6 witness is checked residue by residue. |
| `fs-centralizer-of-the-fitting-subgroup-is-always-contained-in-the-fitting-subgroup` | literature-derived | ai-altered | Craven Theorem 1.2 and its immediate warning that solubility cannot be omitted. |

Only `ex-hall-burnside-detects-a-nontrivial-coprime-automorphism` has an AI-generated construction. It is a permitted non-load-bearing example and must carry `generation.role: example`. The truth-risk check is complete at scaffold time: inversion on $C_3$ is nonidentity, has order two, $\Phi(C_3)=1$, and therefore remains nonidentity on the quotient. No item depends on this example. No other planned Statement or construction is AI-generated.

Every literature-derived or AI-altered component will cite the exact applicable URL above in `sources.references`; the A5 and $S_5$ boundary items also retain the reader-visible authoritative URLs already used by their published simplicity, normal-subgroup, and solvability dependencies.

## Exact Step-5 source clauses for same-batch citations

These clauses must appear verbatim in the authored source section named by the proof contracts:

- `lem-frattini-subgroup-is-characteristic`: `For every finite group $G$, the subgroup $\Phi(G)$ is characteristic in $G$ and hence normal.`
- `cor-generation-is-detected-modulo-the-frattini-subgroup`: `A subset $S$ of a finite group $G$ generates $G$ if and only if its image generates $G/\Phi(G)$.`
- `def-elementary-abelian-p-group`: `An elementary abelian $p$-group is a finite abelian $p$-group in which every nonidentity element has order $p$; the trivial group is permitted.`
- `lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces`: `The rule $\bar a\cdot x=x^a$ gives every elementary abelian $p$-group its canonical $\mathbb F_p$-vector-space structure.`
- `def-fp-basis-of-an-elementary-abelian-p-group`: `A basis of an elementary abelian $p$-group is an independent spanning subset for its canonical $\mathbb F_p$-linear structure.`
- `lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension`: `Every finite elementary abelian $p$-group has a basis; every independent subset extends to a basis, every spanning subset contains a basis, and all bases have the same finite size.`
- `def-pth-power-subgroup-of-a-group`: `For a group $G$ and a prime $p$, the $p$th-power subgroup is $G^p=\langle g^p:g\in G\rangle$.`
- `thm-frattini-quotient-is-the-largest-elementary-abelian-quotient`: `For a finite $p$-group $P$, the quotient $P/\Phi(P)$ is elementary abelian, and for $N\trianglelefteq P$ the quotient $P/N$ is elementary abelian if and only if $\Phi(P)\le N$.`
- `thm-frattini-subgroup-formula-for-a-finite-p-group`: `For every finite $p$-group $P$, the subgroup $P^p$ is characteristic and $\Phi(P)=P'P^p$.`
- `prop-frattini-subgroup-monotonicity-for-subgroups-of-finite-p-groups`: `If $H\le P$ are finite $p$-groups, then $\Phi(H)\le\Phi(P)$.`
- `prop-frattini-subgroup-of-a-quotient-finite-p-group`: `If $N\trianglelefteq P$ and $P$ is a finite $p$-group, then $\Phi(P/N)=\Phi(P)N/N$.`
- `prop-frattini-subgroup-of-a-direct-product-of-finite-p-groups`: `For finite $p$-groups $P$ and $Q$, $\Phi(P\times Q)=\Phi(P)\times\Phi(Q)$.`
- `cor-frattini-subgroup-of-a-finite-two-group-is-the-square-subgroup`: `For every finite $2$-group $P$, $\Phi(P)=P^2$.`
- `cor-frattini-free-finite-p-groups-are-elementary-abelian`: `A finite $p$-group has trivial Frattini subgroup if and only if it is elementary abelian.`
- `def-minimal-generating-set-of-a-group`: `A subset $X$ of a group is a minimal generating set when it generates and no proper subset of $X$ generates.`
- `def-generator-rank-of-a-finite-p-group`: `For a finite $p$-group $P$, the generator rank $d(P)$ is the common size of a basis of $P/\Phi(P)$.`
- `thm-burnside-basis-theorem`: `A subset $X$ of a finite $p$-group $P$ is a minimal generating set if and only if the quotient map restricts to a bijection from $X$ onto a basis of $P/\Phi(P)$.`
- `cor-minimal-generating-sets-of-a-finite-p-group-have-equal-size`: `Every minimal generating set of a finite $p$-group $P$ has size $d(P)$, and every generating set contains one of that size.`
- `cor-every-nonfrattini-element-belongs-to-a-minimal-generating-set`: `Every element of $P\setminus\Phi(P)$ belongs to a minimal generating set of the finite $p$-group $P$.`
- `cor-nontrivial-finite-p-group-is-cyclic-iff-generator-rank-one`: `A nontrivial finite $p$-group $P$ is cyclic if and only if $d(P)=1$, while $d(1)=0$.`
- `cor-maximal-subgroups-of-a-finite-p-group-are-frattini-hyperplanes`: `The maximal subgroups of a finite $p$-group are exactly the inverse images of codimension-one subgroups of $P/\Phi(P)$, equivalently kernels of nonzero linear homomorphisms to $\mathbb Z/p$.`
- `thm-automorphisms-act-linearly-on-the-frattini-quotient`: `Every automorphism of a finite $p$-group induces an $\mathbb F_p$-linear automorphism of $P/\Phi(P)$, and these form a homomorphism $\rho_P$.`
- `thm-hall-burnside-automorphism-theorem`: `If a $p'$-subgroup $A\le\operatorname{Aut}(P)$ acts trivially on $P/\Phi(P)$, then $A=1$.`
- `cor-kernel-of-the-action-on-the-frattini-quotient-is-a-p-group`: `The kernel of $\rho_P:\operatorname{Aut}(P)\to\operatorname{Aut}_{\mathbb F_p}(P/\Phi(P))$ is a finite $p$-group.`
- `ex-frattini-subgroup-of-a-cyclic-p-group`: `If $P=\langle g\rangle$ has order $p^n$ with $n\ge1$, then $\Phi(P)=\langle g^p\rangle$ and $d(P)=1$.`
- `ex-frattini-subgroup-of-an-elementary-abelian-p-group`: `For every prime $p$ and $n\in\mathbb N$, $\Phi((\mathbb Z/p)^n)=1$ and the generator rank is $n$.`
- `ex-frattini-subgroups-of-dihedral-and-quaternion-groups`: `For $D_8$ and $Q_8$, the Frattini subgroup has order two and the Frattini quotient is $(\mathbb Z/2)^2$.`
- `cex-frattini-image-under-a-nonsurjective-homomorphism`: `The embedding $C_4\hookrightarrow S_5$ sending a generator to a $4$-cycle does not carry $\Phi(C_4)$ into $\Phi(S_5)$.`
- `cex-fitting-centralizer-without-solvability`: `For $A_5$, one has $F(A_5)=1$ and $C_{A_5}(F(A_5))=A_5$.`

The Burnside clause deliberately says “the quotient map restricts to a bijection”; Step 5 must not shorten it to “its image is a basis.”

## Exact A-page summary for Step 5

Finite $p$-groups are nilpotent, so their maximal proper subgroups are normal of prime index; Lagrange specializes that index to $p$. The published Frattini subgroup is the intersection of maximal proper subgroups and consists of the nongenerators, while the published Fitting theory records its nilpotence and the solvable-group centralizer boundary. These results supply the finite-group generation and normal-subgroup framework used below.

Elementary abelian $p$-groups receive their canonical $\mathbb F_p$-linear structure, and the Frattini quotient is identified as the largest elementary abelian quotient. The formula $\Phi(P)=P'P^p$ leads to subgroup, quotient, direct-product, and square-subgroup laws. Burnside basis then identifies minimal generators with quotient bases and yields generator-rank and hyperplane consequences. The induced automorphism action on the quotient culminates in Hall–Burnside and the $p$-group kernel theorem.

The B page must have no authored summary body.

## Proof-obligation map and boundary pass

The version-1 contract contains 31 proof-bearing ids and 31 contracts. Each planned numbered step is mapped once, every direct planned fact citation has a source clause and uses, and every contract has explicit dispositions for empty, zero, one, degenerate, endpoint, nonempty-choice, and both iff directions.

The highest-risk obligations are:

- `thm-frattini-quotient-is-the-largest-elementary-abelian-quotient`: derive index $p$ from prime index plus Lagrange; prove both directions of the normal-kernel equivalence; separate every nonzero coset by a finite basis hyperplane; include $P=1$ and $N=P$.
- `thm-burnside-basis-theorem`: prove quotient-map injectivity on a minimal generating set, not merely that its image set is a basis; prove both directions and the empty-basis case.
- `thm-hall-burnside-automorphism-theorem`: justify that each Frattini coset has $p$-power cardinality, use $q\ne p$, choose only finitely many fixed representatives, and show that fixing the lifted basis fixes all of $P$.
- `ex-generator-rank-of-upper-unitriangular-groups`: verify the coordinate group law, commutator formula, all $p$th powers for odd $p$, squares for $p=2$, both inclusions in the central-axis derived subgroup, and the two-coordinate quotient basis.
- `cex-frattini-image-under-a-nonsurjective-homomorphism`: verify the homomorphism, the nonidentity image of $g^2$, normality and nilpotence of $\Phi(S_5)$, and exclusion of $A_5,S_5$ from the normal-subgroup list by nonsolvability.
- `cex-fitting-centralizer-without-solvability`: use simplicity only after establishing that $F(A_5)$ is normal, and use nilpotent-implies-solvable to exclude $F(A_5)=A_5$.

No registered `finite-smoke` model matches these claims; every contract honestly carries an empty `finite_smoke` array. This is not machine evidence for the group-theoretic statements.

## Per-pair richness report

Both required passes were performed separately for the A and B pages.

Long-proof decomposition:

- The finite linear-algebra route is decomposed into the elementary-abelian definition, canonical scalar-action lemma, native basis definition, and the finite basis existence/extension/size lemma.
- The Frattini formula is decomposed through the largest elementary abelian quotient and then through four focused subgroup, quotient, product, and $2$-group consequences.
- Burnside basis is preceded by generation detection and the minimal-generator and rank definitions; its repeated-coset boundary is explicit.
- The automorphism development is decomposed into the induced linear action, Hall–Burnside for $p'$-subgroups, and the kernel-is-a-$p$-group corollary.
- The upper-unitriangular example keeps its coordinate group law, commutator axis, power calculation, Frattini formula, and quotient basis as distinct planned proof blocks.
- The nonsurjective-image and nonsolvable-Fitting failures are constructed before the corresponding false statements reuse them.

Useful corollaries added:

- the four Frattini subgroup laws from van Beek Lemma 3.6;
- trivial Frattini subgroup iff elementary abelian;
- equal size and extraction of minimal generating sets;
- extension of every non-Frattini element to a minimal generating set;
- nontrivial cyclic iff generator rank one;
- maximal subgroups as Frattini hyperplanes;
- the automorphism-action kernel is a $p$-group.

The A page has 24 items, does not approach the 60-item ceiling, and needs no split. No pruning was performed.

## Per-page item list

### `frattini-subgroups-and-the-burnside-basis-theorem` — 24 items

1. `lem-frattini-subgroup-is-characteristic` — lemma — The Frattini subgroup of a finite group is characteristic
2. `cor-generation-is-detected-modulo-the-frattini-subgroup` — corollary — Generation of a finite group is detected modulo its Frattini subgroup
3. `def-elementary-abelian-p-group` — definition — Elementary abelian $p$-groups
4. `lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces` — lemma — An elementary abelian $p$-group has a canonical $\mathbb F_p$-vector-space structure
5. `def-fp-basis-of-an-elementary-abelian-p-group` — definition — $\mathbb F_p$-spanning sets, independence, and bases in an elementary abelian $p$-group
6. `lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension` — lemma — Finite elementary abelian $p$-groups have bases, basis extension, and a well-defined dimension
7. `def-pth-power-subgroup-of-a-group` — definition — The $p$th-power subgroup $G^p$
8. `thm-frattini-quotient-is-the-largest-elementary-abelian-quotient` — theorem — The Frattini quotient is the largest elementary abelian quotient of a finite $p$-group
9. `thm-frattini-subgroup-formula-for-a-finite-p-group` — theorem — $\Phi(P)=P'P^p$ for a finite $p$-group
10. `prop-frattini-subgroup-monotonicity-for-subgroups-of-finite-p-groups` — proposition — If $H\le P$ are finite $p$-groups, then $\Phi(H)\le\Phi(P)$
11. `prop-frattini-subgroup-of-a-quotient-finite-p-group` — proposition — $\Phi(P/N)=\Phi(P)N/N$ for a normal subgroup of a finite $p$-group
12. `prop-frattini-subgroup-of-a-direct-product-of-finite-p-groups` — proposition — $\Phi(P\times Q)=\Phi(P)\times\Phi(Q)$ for finite $p$-groups
13. `cor-frattini-subgroup-of-a-finite-two-group-is-the-square-subgroup` — corollary — $\Phi(P)=P^2$ for a finite $2$-group
14. `cor-frattini-free-finite-p-groups-are-elementary-abelian` — corollary — A finite $p$-group has trivial Frattini subgroup exactly when it is elementary abelian
15. `def-minimal-generating-set-of-a-group` — definition — Minimal generating sets of a group
16. `def-generator-rank-of-a-finite-p-group` — definition — The generator rank $d(P)$ of a finite $p$-group
17. `thm-burnside-basis-theorem` — theorem — Burnside Basis Theorem
18. `cor-minimal-generating-sets-of-a-finite-p-group-have-equal-size` — corollary — Minimal generating sets of a finite $p$-group have size $d(P)$
19. `cor-every-nonfrattini-element-belongs-to-a-minimal-generating-set` — corollary — Every element outside $\Phi(P)$ belongs to a minimal generating set of $P$
20. `cor-nontrivial-finite-p-group-is-cyclic-iff-generator-rank-one` — corollary — A nontrivial finite $p$-group is cyclic exactly when $d(P)=1$
21. `cor-maximal-subgroups-of-a-finite-p-group-are-frattini-hyperplanes` — corollary — Maximal subgroups of a finite $p$-group are the inverse images of Frattini hyperplanes
22. `thm-automorphisms-act-linearly-on-the-frattini-quotient` — theorem — Automorphisms act linearly on the Frattini quotient
23. `thm-hall-burnside-automorphism-theorem` — theorem — Hall–Burnside: coprime automorphisms are detected on the Frattini quotient
24. `cor-kernel-of-the-action-on-the-frattini-quotient-is-a-p-group` — corollary — The kernel of the automorphism action on $P/\Phi(P)$ is a $p$-group

### `frattini-subgroups-and-the-burnside-basis-theorem-examples` — 12 items

1. `ex-frattini-subgroup-of-a-cyclic-p-group` — example — The Frattini subgroup of a nontrivial cyclic $p$-group
2. `ex-frattini-subgroup-of-an-elementary-abelian-p-group` — example — The Frattini subgroup of $(\mathbb Z/p)^n$ is trivial
3. `ex-frattini-subgroups-of-dihedral-and-quaternion-groups` — example — The Frattini subgroups of $D_8$ and $Q_8$
4. `ex-generator-rank-of-upper-unitriangular-groups` — example — The $3\times3$ upper-unitriangular groups have generator rank two
5. `ex-maximal-subgroups-as-frattini-hyperplanes` — example — The maximal subgroups of $D_8$ as Frattini hyperplanes
6. `cex-frattini-image-under-a-nonsurjective-homomorphism` — counterexample — A nonsurjective homomorphism need not carry the Frattini subgroup into the target Frattini subgroup
7. `cex-fitting-centralizer-without-solvability` — counterexample — The Fitting subgroup of $A_5$ does not contain its centralizer
8. `ex-hall-burnside-detects-a-nontrivial-coprime-automorphism` — example — Inversion on $C_3$ is detected on its Frattini quotient
9. `fs-the-frattini-subgroup-is-the-union-of-the-maximal-subgroups` — false-statement — FALSE: the Frattini subgroup is the union of the maximal subgroups
10. `fs-the-frattini-subgroup-is-functorial-for-all-homomorphisms` — false-statement — FALSE: every homomorphism carries the Frattini subgroup into the target Frattini subgroup
11. `fs-every-minimal-generating-set-of-an-arbitrary-finite-group-has-the-same-size` — false-statement — FALSE: all minimal generating sets of a finite group have the same size
12. `fs-centralizer-of-the-fitting-subgroup-is-always-contained-in-the-fitting-subgroup` — false-statement — FALSE: the Fitting subgroup always contains its centralizer

## New-id and reuse report

The exact collision scan searched `items/` and `research/plan-spec.json` for every final id. All 36 ids are new. Semantic searches covered Frattini characteristicity, elementary-abelian vector structure, power subgroups, the largest elementary quotient, the Frattini formula and its subgroup/quotient/product laws, generator rank, Burnside basis, hyperplanes, the automorphism action and kernel, the cyclic/dihedral/quaternion/unitriangular examples, and both designed counterexamples.

The search found and reused these published results instead of minting duplicates:

- `def-p-core-of-a-finite-group`, `def-fitting-subgroup-of-a-finite-group`, and `thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup`;
- `def-frattini-subgroup-of-a-finite-group` and `lem-frattini-subgroup-nongenerator-characterization`;
- `thm-frattini-subgroup-is-nilpotent`, `cor-frattini-subgroup-is-contained-in-the-fitting-subgroup`, `thm-nilpotence-is-detected-modulo-the-frattini-subgroup`, and `thm-fitting-subgroup-of-the-frattini-quotient`;
- `thm-fitting-subgroup-contains-its-centralizer-in-a-finite-solvable-group`;
- `thm-maximal-subgroups-of-finite-nilpotent-groups`, rather than the designed duplicate finite-$p$ lemma.

The sentence “the Frattini subgroup is characteristic” occurs inside one published proof, but no published item has that result as its Statement; the focused lemma is therefore not an id duplicate.

## Findings for Step-3 Alpha

1. Approve GT1-3, the restricted-bijection repair to Burnside basis. Without it the designed iff is false when a generating set contains two distinct representatives of one quotient basis vector.
2. Approve GT1-2, the native finite $\mathbb F_p$ dictionary. General vector spaces, bases, dimension, matrices, and duals occur after order 71.001; declining creates load-bearing forward references.
3. Approve GT1-1, removal of the p-core/Fitting/general-Frattini duplicates. Declining conflicts with immutable published ids and repeats the preceding pair.
4. Approve GT1-5, the coordinate $3\times3$ unitriangular family. Declining either imports order-78/82 matrix machinery or leaves the group and commutator calculations unstated.
5. Approve GT1-4, the four source-backed Frattini laws and explicit automorphism-action decomposition. Declining under-harvests van Beek Lemma 3.6 and hides the prerequisite of Hall–Burnside.
6. Let the stage-1 drift unit adjudicate the direct `requires` mismatch. The batch retains the spec value; independently changing it here risks divergent plans.
7. Retry the mandatory source stamp in an escalation-free engine environment. All source bodies were read through web research and the structural coverage gate is clean, but local Node DNS produced `EAI_AGAIN` for every host and no `fetch_verified` stamp exists.

These recommendations are independent and ordered by mathematical correctness, dependency legality, id immutability, source breadth, and then source-gate mechanics.

## Forward references and cross-batch dependencies

No forward reference is retained. Every load-bearing dependency is local to this A/B pair or published on a page of smaller order.

This batch needs no item from another frontier-17 batch. The batch owning `extraspecial-p-groups-and-central-products` should reuse `def-elementary-abelian-p-group`, `lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces`, `def-fp-basis-of-an-elementary-abelian-p-group`, `thm-frattini-subgroup-formula-for-a-finite-p-group`, `def-generator-rank-of-a-finite-p-group`, and `thm-burnside-basis-theorem`; it should not duplicate those ids.

## Confidence and what remains unverified

Mathematical confidence is high. I checked the finite-basis cardinality argument, the two directions of the largest elementary quotient theorem, both inclusions in $\Phi(P)=P'P^p$, every clause of the subgroup/quotient/product laws, the repeated-coset defect in Burnside basis, the finite fixed-representative proof of Hall–Burnside, the prime-divisor argument for the kernel, the $p=2$ Heisenberg power calculation, the $C_4\hookrightarrow S_5$ witness, and the $A_5$ Fitting-centralizer failure.

Every proposed published dependency was opened from disk. All 53 are published, statement-provenance eligible, on non-example pages of smaller order, and either established-from-knowledge after exact inspection or source-checked as described above. There is no exception to dependency closure.

What was not verified: `source-fetch-check --stamp` remains blocked by resolver-wide `EAI_AGAIN`; `validate-plan` and `depsource` cannot classify these new ids until Step 4 splices the manifest; proof-contract citation and numbered-step gates cannot compare planned clauses with item bodies until Step 5 authors them. No Step-6 reader, Alpha risk review, paired judge, publication, status change, shared-plan edit, or published-item repair has occurred.

## Final Step-2 checks

- `coverage-checklist`: 1 page, 45 harvested rows, 0 errors, 0 warnings.
- `content-policy --manifest-only`: 36 scoped items, 0 errors, 0 warnings.
- Planned-contract audit: 31 scoped proof-bearing items, 31 contracts, 79 declared citations, 80 uniquely mapped planned steps, 248 boundary dispositions, and 0 missing local clauses, external quote mismatches, undeclared citation sources, or malformed scopes.
- Exact dependency-home audit: 53 distinct external dependencies, all published, all statement-provenance eligible, all on non-examples pages of order at most 70; 0 bad homes. Internal-order audit: 0 later or same-page-forward dependencies.
- Exact-id collision scan: 0 hits across `items/` and `research/plan-spec.json` for all 36 final ids.
- `validate-plan research/plan-spec.json`: pass on the current unspliced plan. This does not claim that the new ids were classified before Step 4.
- `depsource`: pass on the current unspliced global spec with 0 unresolved dependencies. This likewise is not an authoritative classification of the batch before splicing.
- `prosecheck --warnings`: 0 errors and 8 count warnings, all in this required audit report; no positional contradiction. The exact A-page summary contains no count, self-ranking, survey, or reading-position claim.
- JSON parse, trailing-whitespace scan, and applied-`\iota` scan: clean.
- `source-fetch-check --stamp` was run twice. Both attempts returned resolver-wide `EAI_AGAIN` for all four source hosts, 0/4 stamped. Same-text mirrors were scouted after the first failure, and no stamp was fabricated.

The official `proof-contract --strict` gate is intentionally not claimed at Step 2: its implementation loads authored `items/*.md`, which do not exist until Step 5. The namespaced contract is structurally and citation-clause audited against the planned Step-5 clauses and the actual published source sections; Step 5 must synchronize it to final Facts labels and numbered steps before running the official gate.

## Step-3 fix pass

- **B1-1 — already correct.** The `sums-of-two-squares` manifest already places `lem-thue-small-representatives` before Fermat's theorem, `lem-two-essentially-different-two-square-representations-factor-an-odd-integer` before prime uniqueness, and both `lem-coprime-primitive-two-square-products-remain-primitive` and `lem-prime-one-mod-four-powers-have-primitive-two-square-representations` before the primitive characterisation. Their strategies and proof contracts explicitly discharge the strict $\sqrt p$ bounds, both nonzero coordinate differences, proper factorisation, primitive-product argument, prime-power induction, and the $n=1$ empty-factorisation boundary.
- **B1-2 — already correct.** The coverage harvest records Hackman E.I.1--E.I.5, E.II.1--E.II.8, and Exercises E.I.1--E.I.5 and E.II.1--E.II.7 with individual dispositions. In particular E.II.8(a) and E.II.8(b) point to their two distinct corollaries, while the companion retains both `ex-thue-lemma-produces-a-two-square-representation` and `ex-two-square-representation-of-seventy-three-by-extended-euclid` as different constructions of $73$ and retains the factor-recovery calculation for $221$.
- **B1-3 — already correct.** The strategy and proof contract for `thm-burnside-basis-theorem` require the quotient map to restrict to a bijection from the proposed generating subset onto a basis of $P/\Phi(P)$. The forward contract step explicitly rules out distinct elements with the same quotient image, and the reverse step uses the restricted bijection to prove minimality; the false image-set-only formulation is absent from the current scaffold.
- **B1-4 — already correct.** The manifest reuses the published p-core, Fitting, Frattini, nongenerator, maximal-subgroup, nilpotence, and solvability items identified in GT1-1. It introduces only the native finite elementary-abelian $\mathbb F_p$ dictionary needed at order 71.001: scalar action, spanning/independence/bases, finite basis extension and extraction, and equality of finite basis sizes. No later general vector-space, basis, dimension, matrix, or dual-space item is a load-bearing dependency.
- **B1-5 — already correct.** The A page contains the subgroup, quotient, direct-product, and finite-$2$-group Frattini laws; the induced linear automorphism action; Hall--Burnside and its kernel corollary; and the native coordinate proof for the $3\times3$ unitriangular example. The coverage artifact assigns these to the corresponding Craven, Conrad, van Beek, and Harpaz--Wittenberg headings, and the companion retains the cyclic, elementary-abelian, dihedral, quaternion, hyperplane, nonsurjective-image, nonsolvable-centralizer, coprime-action, and unitriangular boundary examples.

## Step-5 authoring

All manifest items were authored as `status: draft` and `origin: session`, together with the four draft page compositions. The A-page summaries use the approved two-paragraph text, and both B pages have no authored body. No item was dropped, merged, or renamed, so every `included` coverage row remains true of disk.

### Per-item precheck and component-provenance ledger

#### Sums of two squares

| Item | Precheck | Statement/construction | Proof/verification | Source and edit history |
|---|---|---|---|---|
| `def-sum-of-two-squares-representation` | `n/a` | `literature-derived` | `not-applicable` | Hackman E.I opening, E.II.4, and Stein Definition 5.7.3; ordered pairs make sign/order counting unambiguous; cite Hackman and Stein. |
| `lem-brahmagupta-fibonacci-two-square-identity` | `pass` | `literature-derived` | `literature-derived` | Hackman E.II.1 and Stein identity (5.7.1); the second sign variant is the standard substitution \(d\mapsto-d\); cite both. |
| `cor-sums-of-two-squares-closed-under-products` | `pass` | `literature-derived` | `ai-altered` | Hackman E.II.1 and Stein’s discussion after (5.7.1); the proof is recast with the zero boundary explicit; cite both. |
| `prop-odd-two-square-representations-correspond-under-doubling` | `pass` | `literature-derived` | `ai-altered` | Hackman E.II Exercise 2, including the primitive restriction; cite Hackman. |
| `lem-three-mod-four-prime-dividing-two-square-sum` | `pass` | `literature-derived` | `ai-altered` | Hackman proof of E.II.2 and Stein Lemma 5.7.4; the local coordinate-divisibility form is isolated for reuse; cite both. |
| `prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares` | `pass` | `literature-derived` | `ai-altered` | Hackman E.II Exercise 4; finite-intersection proof written in the library’s quotient-set language; cite Hackman. |
| `lem-thue-small-representatives` | `pass` | `literature-derived` | `ai-altered` | Hackman E.I.1, restricted to a prime modulus and rewritten without floor notation; cite Hackman. |
| `thm-fermat-two-square-theorem-for-primes` | `pass` | `literature-derived` | `ai-altered` | Hackman E.I.2 and Stein Theorem 5.7.1; local proof follows Hackman’s Thue route rather than Stein’s later continued fractions; cite both. |
| `lem-two-essentially-different-two-square-representations-factor-an-odd-integer` | `pass` | `ai-altered` | `ai-altered` | Hackman E.I.3 narrowed to positive normalized coordinates and separated from its prime corollary; cite Hackman. |
| `thm-uniqueness-of-two-square-representation-of-a-prime` | `pass` | `literature-derived` | `ai-altered` | Hackman E.I.3; the factorisation proof is decomposed through the preceding lemma; cite Hackman. |
| `lem-two-square-representations-of-prime-powers` | `pass` | `ai-altered` | `ai-altered` | Bundles the prime-power cases used inside Hackman E.II.2 and Stein Theorem 5.7.1; cite both. |
| `thm-sum-of-two-squares-characterisation` | `pass` | `literature-derived` | `ai-altered` | Hackman E.II.2 and Stein Theorem 5.7.1; necessity explicitly iterates the local coordinate divisibility; cite both. |
| `lem-coprime-primitive-two-square-products-remain-primitive` | `pass` | `literature-derived` | `ai-altered` | Hackman E.II.5; complex notation is replaced by the same four real linear combinations; cite Hackman. |
| `lem-prime-one-mod-four-powers-have-primitive-two-square-representations` | `pass` | `literature-derived` | `ai-altered` | Hackman E.II.6; the local induction uses the two sign candidates and no Gaussian-integer factorisation; cite Hackman. |
| `thm-primitive-sum-of-two-squares-characterisation` | `pass` | `literature-derived` | `ai-altered` | Hackman E.II.4–E.II.6; cite Hackman. |
| `cor-primitive-sums-of-two-squares-closed-under-products` | `pass` | `literature-derived` | `ai-altered` | Hackman E.II.8(a), reproved from the exact local characterisation; cite Hackman. |
| `cor-divisors-of-primitively-two-square-representable-integers` | `pass` | `literature-derived` | `ai-altered` | Hackman E.II.8(b), reproved through canonical exponent inheritance; cite Hackman. |
| `cor-squarefree-sum-of-two-squares-characterisation` | `pass` | `ai-altered` | `ai-generated` | Source-backed direct specialization of Hackman E.II.2/E.II.4, with the stronger “every representation” clause proved locally; cite Hackman. |

#### Sums of two squares examples

| Item | Precheck | Statement/construction | Proof/verification | Source and edit history |
|---|---|---|---|---|
| `ex-thue-lemma-produces-a-two-square-representation` | `pass` | `ai-altered` | `ai-altered` | Hackman E.I.4 supplies \(p=73\), root \(27\), and coordinates \(3,8\); the collision presentation is adapted from E.I.1; cite Hackman. |
| `ex-two-square-representation-of-seventy-three-by-extended-euclid` | `pass` | `literature-derived` | `ai-altered` | Exact E.I.4 Euclidean computation; cite Hackman. |
| `ex-two-square-representations-from-prime-factorisation` | `pass` | `literature-derived` | `ai-altered` | Exact two representations of 221 from Hackman E.II.3(a); cite Hackman. |
| `cex-an-odd-three-mod-four-valuation-obstructs-two-squares` | `pass` | `literature-derived` | `ai-altered` | Exact 539 witness from Hackman E.II.3(b); cite Hackman. |
| `ex-two-essentially-different-representations-force-compositeness` | `pass` | `ai-altered` | `ai-altered` | Applies Hackman E.I.3 to the source’s two representations of 221 and computes the factors; cite Hackman. |
| `ex-primitive-two-square-representation-criterion` | `pass` | `literature-derived` | `ai-altered` | Exact 289, 34, and 833 examples from Hackman E.II.7(a)–(c); cite Hackman. |
| `cex-four-dividing-n-forces-a-nonprimitive-two-square-representation` | `pass` | `literature-derived` | `ai-altered` | Exact 68 witness and mod-four argument from Hackman E.II.7(d); cite Hackman. |
| `ex-squarefree-sums-of-two-squares` | `pass` | `ai-generated` | `ai-generated` | The bounded interval and complete witness list were selected locally from the source-backed squarefree corollary; this item must carry `generation: {role: example}` and must never become a dependency target. |

#### Frattini subgroups and Burnside basis

| Item | Precheck | Statement/construction | Proof/verification | Source and edit history |
|---|---|---|---|---|
| `lem-frattini-subgroup-is-characteristic` | `pass` | `literature-derived` | `ai-altered` | Craven §2.2 and Conrad Definition 6.8 state characteristicity; the local proof makes the permutation-of-maximals argument explicit. |
| `cor-generation-is-detected-modulo-the-frattini-subgroup` | `pass` | `literature-derived` | `ai-altered` | Craven Proposition 2.18 and Conrad Theorem 6.12; the proof removes finitely many nongenerators. |
| `def-elementary-abelian-p-group` | `n/a` | `literature-derived` | `not-applicable` | Craven Definition 2.6, with the trivial group included. |
| `lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces` | `pass` | `literature-derived` | `ai-altered` | Conrad's paragraph after Definition 6.8 gives the exponentiation scalar action; the proof verifies the axioms natively because general vector spaces occur too late. |
| `def-fp-basis-of-an-elementary-abelian-p-group` | `n/a` | `ai-altered` | `not-applicable` | Finite-basis terminology from Conrad and Craven, specialized to the native multiplicative presentation needed at this order. |
| `lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension` | `pass` | `ai-altered` | `ai-altered` | The basis consequences after Conrad Theorem 6.12 and van Beek Theorem 3.7, reformulated as a finite choice-free lemma. |
| `def-pth-power-subgroup-of-a-group` | `n/a` | `literature-derived` | `not-applicable` | Craven Definition 2.26 and Conrad's definition of G^n. |
| `thm-frattini-quotient-is-the-largest-elementary-abelian-quotient` | `pass` | `literature-derived` | `ai-altered` | Craven Proposition 2.24 and van Beek Lemma 3.4; the local hyperplane separation is written using the native finite basis lemma. |
| `thm-frattini-subgroup-formula-for-a-finite-p-group` | `pass` | `literature-derived` | `ai-altered` | Craven Proposition 2.25 and van Beek Proposition 3.5. |
| `prop-frattini-subgroup-monotonicity-for-subgroups-of-finite-p-groups` | `pass` | `literature-derived` | `ai-altered` | van Beek Lemma 3.6(i), proved locally from the Frattini formula. |
| `prop-frattini-subgroup-of-a-quotient-finite-p-group` | `pass` | `literature-derived` | `ai-altered` | van Beek Lemma 3.6(ii), proved by quotient images of commutators and powers. |
| `prop-frattini-subgroup-of-a-direct-product-of-finite-p-groups` | `pass` | `literature-derived` | `ai-altered` | van Beek Lemma 3.6(iii), proved componentwise. |
| `cor-frattini-subgroup-of-a-finite-two-group-is-the-square-subgroup` | `pass` | `literature-derived` | `ai-altered` | van Beek Lemma 3.6(iv), with the exponent-two quotient argument supplied. |
| `cor-frattini-free-finite-p-groups-are-elementary-abelian` | `pass` | `literature-derived` | `ai-altered` | Immediate two-way consequence of Craven Proposition 2.24 and van Beek Lemma 3.4. |
| `def-minimal-generating-set-of-a-group` | `n/a` | `literature-derived` | `not-applicable` | The definition immediately before van Beek Theorem 3.7 and in Conrad §6. |
| `def-generator-rank-of-a-finite-p-group` | `n/a` | `literature-derived` | `not-applicable` | Craven Theorem 2.28/Definition 2.29 and Conrad's dimension convention. |
| `thm-burnside-basis-theorem` | `pass` | `ai-altered` | `ai-altered` | Craven Theorem 2.28, Conrad Theorem 6.12, and van Beek Theorem 3.7; the Statement is repaired to require a restricted bijection onto a basis, closing the repeated-coset defect. |
| `cor-minimal-generating-sets-of-a-finite-p-group-have-equal-size` | `pass` | `literature-derived` | `ai-altered` | Conrad's consequences after Theorem 6.12 and van Beek Theorem 3.7. |
| `cor-every-nonfrattini-element-belongs-to-a-minimal-generating-set` | `pass` | `literature-derived` | `ai-altered` | The remark after van Beek Theorem 3.7. |
| `cor-nontrivial-finite-p-group-is-cyclic-iff-generator-rank-one` | `pass` | `literature-derived` | `ai-altered` | Conrad's d(G)=1 cyclic observation combined with Burnside basis. |
| `cor-maximal-subgroups-of-a-finite-p-group-are-frattini-hyperplanes` | `pass` | `ai-altered` | `ai-altered` | The maximal-quotient statements in Craven and van Beek combined with finite coordinate kernels; no later dual-space theorem is cited. |
| `thm-automorphisms-act-linearly-on-the-frattini-quotient` | `pass` | `literature-derived` | `ai-altered` | The induced quotient action preceding Craven Theorem 2.30 and van Beek Proposition 4.10. |
| `thm-hall-burnside-automorphism-theorem` | `pass` | `literature-derived` | `ai-altered` | Craven Theorem 2.30, with each fixed-coset and finite-choice step explicit. |
| `cor-kernel-of-the-action-on-the-frattini-quotient-is-a-p-group` | `pass` | `literature-derived` | `ai-altered` | van Beek Proposition 4.10; derived from Hall–Burnside and Cauchy's theorem. |

#### Frattini and Burnside examples

| Item | Precheck | Statement/construction | Proof/verification | Source and edit history |
|---|---|---|---|---|
| `ex-frattini-subgroup-of-a-cyclic-p-group` | `pass` | `literature-derived` | `ai-altered` | Conrad Example 6.9. |
| `ex-frattini-subgroup-of-an-elementary-abelian-p-group` | `pass` | `literature-derived` | `ai-altered` | Craven Definition 2.6 and Conrad's quotient-vector-space discussion, made explicit for the Cartesian powers. |
| `ex-frattini-subgroups-of-dihedral-and-quaternion-groups` | `pass` | `ai-altered` | `ai-altered` | Conrad Example 6.10 supplies Q8; the D8 computation is the matching square-subgroup calculation from the established dihedral normal form. |
| `ex-generator-rank-of-upper-unitriangular-groups` | `pass` | `ai-altered` | `ai-altered` | Conrad Example 6.11 and Harpaz–Wittenberg §2; narrowed to the 3×3 coordinate family that can be built at this order. |
| `ex-maximal-subgroups-as-frattini-hyperplanes` | `pass` | `ai-altered` | `ai-altered` | Concrete D8 instance of the source-backed hyperplane correspondence. |
| `cex-frattini-image-under-a-nonsurjective-homomorphism` | `pass` | `ai-altered` | `ai-altered` | The design's C4-to-S5 witness, checked from the source-backed cyclic Phi computation and the published S5 normal-subgroup classification. |
| `cex-fitting-centralizer-without-solvability` | `pass` | `ai-altered` | `ai-altered` | Craven's observation after Theorem 1.2, instantiated by the published simplicity and nonsolvability of A5. |
| `ex-hall-burnside-detects-a-nontrivial-coprime-automorphism` | `pass` | `ai-generated` | `ai-generated` | Direct checkable illustration: inversion on C3 has order two, Phi(C3)=1, and its quotient action is nonidentity. |
| `fs-the-frattini-subgroup-is-the-union-of-the-maximal-subgroups` | `pass` | `ai-altered` | `ai-altered` | The source definition says intersection; the explicit Klein-four witness verifies the failed union claim. |
| `fs-the-frattini-subgroup-is-functorial-for-all-homomorphisms` | `pass` | `ai-altered` | `ai-altered` | The standard surjective image inclusion contrasted with the checked C4-to-S5 failure. |
| `fs-every-minimal-generating-set-of-an-arbitrary-finite-group-has-the-same-size` | `pass` | `literature-derived` | `ai-altered` | Conrad §6 explicitly says the general claim fails; the local C6 witness is checked residue by residue. |
| `fs-centralizer-of-the-fitting-subgroup-is-always-contained-in-the-fitting-subgroup` | `pass` | `literature-derived` | `ai-altered` | Craven Theorem 1.2 and its immediate warning that solubility cannot be omitted. |

Definitions carry `precheck: n/a`; every proof, verification, counterexample, and refutation above carries `precheck: pass` only after the final scoped precheck succeeded. The component labels match the Step-2 plan. No `verification.judge`, `verification.verified`, or `verification.audited` field was written.

### Authored interface changes from the scaffold

- `thm-frattini-quotient-is-the-largest-elementary-abelian-quotient`: added the dependency `lem-frattini-subgroup-is-characteristic`. Forming and reasoning in $P/\Phi(P)$ requires the earlier proof that $\Phi(P)$ is normal; the planned definition alone did not establish that obligation.
- `cor-maximal-subgroups-of-a-finite-p-group-are-frattini-hyperplanes`: added `def-frattini-subgroup-of-a-finite-group`. The proof directly uses $\Phi(P)\le M$ for every maximal subgroup $M$, which is the defining intersection clause.
- `fs-the-frattini-subgroup-is-functorial-for-all-homomorphisms`: removed `thm-correspondence-theorem-groups`. The final surjective case is proved directly from maximality and surjectivity, so the planned quotient-correspondence edge would have been unused.
- `ex-frattini-subgroups-of-dihedral-and-quaternion-groups`: changed the title and displayed notation from “$D_8$” to “the dihedral group of order eight,” explicitly $D_4=\operatorname{Dih}(C_4)$ under the published convention that $D_n$ has order $2n$. The item id is unchanged.
- `ex-maximal-subgroups-as-frattini-hyperplanes`: made the same title and Statement correction to “the dihedral group of order eight.” The item id is unchanged.

No other title, Statement, dependency list, page membership, or coverage disposition differs from the approved scaffold. The dihedral corrections preserve the intended order-eight group and prevent collision with the published $D_n=\operatorname{Dih}(C_n)$ convention.

### Generated-construction checks

- `ex-squarefree-sums-of-two-squares`: the finite search recomputed every squarefree positive integer at most $30$, filtered the list by the squarefree two-square criterion, and checked the displayed primitive representation of each retained integer. The result is exactly $1,2,5,10,13,17,26,29$; no omitted or falsely retained integer was found.
- `ex-hall-burnside-detects-a-nontrivial-coprime-automorphism`: the check used the complete cyclic group $C_3$. Inversion sends a generator to its distinct inverse, has order two, $\Phi(C_3)=1$, and therefore remains nontrivial on the quotient. No counterexample to the construction was found.

Both generated constructions are examples, carry `generation.role: example`, and are not dependency targets.

### Gate record

- Reflow and the final targeted precheck exited zero; all proof-bearing items passed and the definitions are legitimately not applicable.
- `validate-plan research/plan-spec.json` exited zero on the spliced plan.
- `content-policy`: 62 scoped items, 0 errors, 0 warnings.
- `coverage-checklist`: 2 A pages, 92 harvested results, 0 errors, 0 warnings.
- Strict proof contract: 56/56 items, 217 exact citation entries, 0 errors, 0 warnings. Boundary audit checked 448 rows, found no template cluster and no contradicted disposition. Citation fidelity found no missing quote and no widening candidate.
- Finite smoke: 0 errors and 0 registered checks. This is not evidence for any theorem; no available smoke model matches these claims.
- Scoped rendercheck: 66 files, valid renderer YAML and KaTeX, with no delimiter or wikilink-in-math defect.
- Scoped prosecheck: 66 files, 0 errors, 0 warnings. Scoped citecheck: 62 items, 0 warnings.
- Global `fwdcheck` and `extcheck` exited zero. Global `citecheck` exited zero with 34 heuristic warnings, none in batch 1; the scoped run is clean.
- Global `depcheck` was run and is not green: its sole hard error is the out-of-batch published item `rem-sine-period-arc-length-integrand-is-nonelementary`, which has `proved_here: false` but no `verification.sources_checked`. The JSON result contains no batch-1 error or warning. This author did not edit that concurrently authored artifact.

### Escalations and confidence

There is no batch-scope mathematical blocker, missing item, external fallback, forward reference, published-dependency repair, or coverage change. The only checkout-wide blocker observed is the out-of-batch `depcheck` error recorded above.

Confidence is high in the authored statements, boundary cases, dependency citations, and local proofs. The high-risk proof obligations named at Step 2 were checked explicitly: strict Thue bounds and nonzero differences, both two-square characterisations and their zero/one exponents, the two-candidate primitive prime-power induction, the restricted-bijection form of Burnside basis, normality before the Frattini quotient, the finite fixed-representative Hall–Burnside argument, the $p=2$ unitriangular calculation, and both $S_5$ and $A_5$ boundary witnesses. I did not run a Step-6 independent reader, an Alpha risk review, either Step-7 judge, publication, or owner audit. I also did not freshly re-fetch every source URL at Step 5; URL evidence remains the stamped/scouted record above. No judge verdict or publication readiness beyond these authoring gates is claimed.
