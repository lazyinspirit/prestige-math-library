# frontier-13 Step 6a — independent reader 1, batch 1

## Scope

I opened and read all 87 dispatched items and all four page files. I also opened every dependency cited by an `[F#]`, `[A#]`, or `[L#]` fact: the proof contracts contain 96 unique cited item ids, of which 45 are outside this batch and the remainder are among the 87 dispatched items.

All 87 items have both `provenance.statement` and `provenance.proof`. The batch contains no `ai-generated` Statement or Construction, so I found no load-bearing AI-generated Statement. The page titles, summaries, and Remarks were included in the read.

Severity follows the dispatch's 30-second rule. A false Statement/title or a citation that materially attributes a needed theorem to an item that does not state it is marked `fatal`; a locally repairable omitted sentence or wrong proof instruction is `polish`.

## Findings — `symmetric-polynomials`

### 1. `cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field` — false uniqueness in the title and Statement

- **Exact location:** title at line 4; Statement lines 29–33; proof step 3.1 at line 51.
- **What is wrong:** The Statement says there is a unique polynomial `Q` satisfying only the equality after evaluation at the one coefficient tuple. Evaluation at a fixed tuple is not injective, so this uniqueness is false. The proof has uniqueness of the formal identity `P=Q(e_1,\ldots,e_n)` from `[L1]`, but step 3.1 incorrectly transfers it to uniqueness in the weaker evaluated equality.
- **Concrete counterexample:** take `R=\mathbb Z`, `n=1`, `f(t)=t`, root `\alpha_1=0`, and `P(x_1)=x_1`. Both `Q_0(T_1)=0` and `Q_1(T_1)=T_1` satisfy `P(0)=Q_i(0)=0`. More generally, any polynomial vanishing at the coefficient tuple can be added to the representing `Q`.
- **Required correction:** either require the formal identity `P=Q(e_1,\ldots,e_n)` in the Statement, or remove uniqueness from the evaluated claim and from the title.
- **Severity:** `fatal` — concrete false Statement and false title overclaim.

### 2. `lem-leading-multidegrees-of-elementary-symmetric-monomials` — zero-ring boundary makes the Statement false

- **Exact location:** title at line 4; Statement lines 27–31; Facts/Given line 35; proof steps 1.1–3.1 at lines 45–49.
- **What is wrong:** The item has no nonzero-ring hypothesis, while this library's `def-ring` explicitly permits the zero ring (lines 71–73). Over the zero ring, every `e_k` and every product `e_1^{b_1}\cdots e_n^{b_n}` is the zero polynomial because `1=0`. The cited `def-lexicographic-order-and-polynomial-multidegree` defines a leading multidegree only for a nonzero polynomial. Thus the asserted leading multidegree and leading coefficient do not exist in this allowed boundary case.
- **Why the proof does not cover it:** steps 1.1–3.1 treat the coefficient `1` as nonzero. That is precisely what fails in the zero ring. The proof-contract artifact also marks the zero boundary `not_applicable`, so it does not repair the omission.
- **Required correction:** assume `R` is a nonzero commutative ring, or split off the zero ring and formulate a conclusion that remains meaningful there.
- **Severity:** `fatal` — missing hypothesis and false Statement/title on an admitted boundary case.

### 3. `prop-elementary-and-complete-generating-series-identity` — `[L1]` cites a definition that does not state the product identity

- **Exact location:** Fact `[L1]` at line 43; its load-bearing use in proof step 3.1 at line 55.
- **What is wrong:** `[L1]` attributes
  `\sum_{i=0}^n(-1)^i e_i t^i=\prod_j(1-x_jt)`
  to `def-elementary-symmetric-polynomials`. I opened that dependency: its Definition, lines 28–32, gives the subset-sum formula for `e_k`, `e_0=1`, `e_k=0` for `k>n`, and symmetry, but it does not state the displayed product identity. Step 3.1 needs exactly the absent identity to replace the product by `E(-t)`.
- **Why this is not merely a stylistic citation:** the real on-disk result that supplies the identity is `thm-vieta-expansion-in-elementary-symmetric-polynomials` after the elementary specialization/reindexing. That result is not the cited source and is not a declared dependency of this item.
- **Severity:** `fatal` — inaccurate, inflated dependency citation licensing a proof step.

### 4. `thm-newtons-identities` — step 3.1 gives the right identity by the wrong operation

- **Exact location:** Fact `[L3]` at line 47; proof step 3.1 at line 57.
- **What is wrong:** The cited `def-formal-derivative-of-a-polynomial` defines coefficientwise differentiation only for polynomials, not formal power series. Step 3.1 applies differentiation to `E(-t)H(t)`, where `H` is an infinite formal series. Moreover, even granting the formal-series product rule, differentiating gives
  `-E'(-t)H(t)+E(-t)H'(t)=0`,
  not the identity displayed in step 3.1 after substituting step 2.1.
- **Why the conclusion still closes quickly:** multiply the identity in step 2.1 by `E(-t)` and use `E(-t)H(t)=1`; this directly yields the displayed series identity without differentiating `H`. Replacing the opening words of step 3.1 accordingly removes both problems.
- **Severity:** `polish` — a competent reader repairs the inference in under 30 seconds without changing the Statement.

### 5. `cor-discriminant-as-a-resultant-with-the-derivative` — `[L3]` inflates the derivative definition to include the product rule

- **Exact location:** Fact `[L3]` at line 39; load-bearing proof step 1.1 at line 45.
- **What is wrong:** `[L3]` says `def-formal-derivative-of-a-polynomial` states that formal differentiation “obeys the product rule for polynomials.” I opened the cited item: lines 27–31 only define the coefficientwise derivative; they do not state or prove the product rule. Step 1.1 differentiates the complete split product and therefore needs that rule.
- **Available correct dependency:** `prop-formal-derivative-laws`, clause 3, explicitly states `(fg)'=f'g+fg'` over a commutative ring. It is not cited or declared here.
- **Severity:** `fatal` — inaccurate, inflated citation used by a numbered proof step.

No other defect was found in the 29 items, page title, or page prose.

## Findings — `symmetric-polynomials-examples`

No findings. All nine examples/counterexamples were opened, their displayed computations were checked, and their cited dependencies were opened. This page is a clean read.

## Findings — `algebraic-extensions-degree-and-finite-fields`

### 6. `thm-finite-fields-have-prime-power-order` — the claimed uniqueness is not proved by step 3.1

- **Exact location:** uniqueness in the title and Statement lines 4 and 27–31; proof step 3.1 at line 59.
- **What is wrong:** step 3.1 says `p` is unique because it is the characteristic and `n` is unique because it is the dimension. This identifies the particular pair constructed by the proof, but it does not show that a second numerical representation `|F|=q^m` with prime `q` must have `q=p` and `m=n`. That last inference needs uniqueness of prime factorisation (and injectivity of powers for a fixed prime), neither of which is an input here.
- **Why this is short:** citing `thm-canonical-prime-factorisation`, as the later `thm-uniqueness-of-finite-fields` already does for the same inference, closes it immediately.
- **Severity:** `polish` — the missing arithmetic sentence is standard and closes in under 30 seconds.

### 7. `thm-factorization-of-x-qn-minus-x` — roots and minimal-polynomial divisibility are used without an input

- **Exact location:** proof steps 1.2–1.3 at lines 57–59 and step 2.1 at line 61.
- **What is wrong:** for an arbitrary monic irreducible `P`, step 1.2 simply says “let `\alpha` be a root,” although none of `[L1]`–`[L7]` supplies a root field for `P`. It then applies `[L5]` as though `P` has already been identified as the minimal polynomial of `\alpha`. Step 2.1 finally infers `P\mid t^{q^n}-t` from the vanishing at `\alpha`; that inference needs the theorem that the minimal polynomial divides every annihilating polynomial. Step 1.3's claim that no irreducible factor repeats likewise tacitly needs a root of such a factor to apply `[L7]`.
- **Why this is short:** adjoining a root via an irreducible quotient (or a splitting field), observing that irreducibility makes `P` the minimal polynomial, and invoking minimal-polynomial divisibility supplies the missing bridge.
- **Severity:** `polish` — standard field-theory bridge, repairable in well under 30 seconds, but absent from the stated inputs.

### 8. `cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree` — minimal polynomial is introduced before algebraicity is established

- **Exact location:** proof step 2.1 at line 51.
- **What is wrong:** the proof chooses `a\in E^\times` and immediately writes “Let `m_a` be the minimal polynomial.” Fact `[L6]` applies only to an element already known algebraic. No cited input in this item establishes that `a` is algebraic over the order-`q` subfield before `[L6]` is used.
- **Why this is short:** since `E` is finite, the powers of `a` repeat, giving a nonzero annihilating polynomial; alternatively the earlier finite-extension/algebraicity theorem can be cited after noting the extension is finite.
- **Severity:** `polish` — the missing algebraicity sentence closes in under 30 seconds.

### 9. `thm-quadratic-tower-characterization-of-algebraic-constructibility` — step 2.1 does not justify degree exactly two from `[L2]`

- **Exact location:** proof step 2.1 at line 57.
- **What is wrong:** `[L2]` says an algebraic element's simple-extension degree equals the degree of its minimal polynomial. From “`\sqrt a` satisfies `t^2-a` and is not already in the base,” step 2.1 still needs the fact that the minimal polynomial divides every annihilating polynomial. Only then is its degree at most two, and non-membership rules out degree one.
- **Why this is short:** adding that one standard minimal-polynomial sentence proves the remaining adjunction has degree two.
- **Severity:** `polish` — locally repairable in under 30 seconds.

No other defect was found in the 35 items, page title, or page prose. In particular, the uses of `cor-every-spanning-set-contains-a-basis` were checked against its explicit Axiom-of-Choice hypothesis; AC is one of the foundational axioms adopted by the repository, so those uses are licensed.

## Findings — `algebraic-extensions-degree-and-finite-fields-examples`

### 10. `ex-f-eight-as-a-polynomial-quotient` — missing backslashes in the displayed power table

- **Exact location:** Example display at line 29.
- **What is wrong:** the display contains literal `quad` four times rather than `\quad`. In math mode this renders unbound letters instead of spacing between the asserted equalities. The power calculations themselves are correct and are verified in steps 2.1–3.1.
- **Severity:** `polish` — typographical/rendering defect.

No other defect was found in the 14 examples/counterexamples/false statements or in the page title.

## Per-page verdicts

| page | items opened | verdict |
|---|---:|---|
| `symmetric-polynomials` | 29/29 | **FAIL** — 4 fatal findings and 1 polish finding |
| `symmetric-polynomials-examples` | 9/9 | **CLEAN** — no findings |
| `algebraic-extensions-degree-and-finite-fields` | 35/35 | **PASS WITH POLISH** — no fatal finding; 4 polish findings |
| `algebraic-extensions-degree-and-finite-fields-examples` | 14/14 | **PASS WITH POLISH** — no fatal finding; 1 polish finding |

**Total dispatched items actually opened: 87/87.**

**Finding count: 4 fatal, 0 nonfatal, 6 polish.**
