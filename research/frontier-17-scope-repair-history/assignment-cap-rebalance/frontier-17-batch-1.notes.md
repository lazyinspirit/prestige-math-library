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
