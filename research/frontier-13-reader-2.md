# frontier-13 — Step 6a independent reader 2, batch 2

## Scope and method

I opened and read all **77/77 assigned authored items** in full: 28 + 11 on the primitive-roots pair and 23 + 15 on the semidirect-products pair. I also opened the four page files, all four batch artifacts, and the exact on-disk Definition or Statement of every cited target. There were **111 unique wikilink targets**, of which 41 are authored in this batch and 70 are earlier published dependencies; all 70 earlier dependencies were opened, with the full body read where a citation appeared stronger than the target Statement.

I checked every numbered proof/verification/refutation step, every `[L#]`/`[A#]` citation, titles and Statements, the boundary dispositions, and both provenance axes. I also opened the six external treatments used by the batch. The six `provenance.statement: ai-generated` items are B-page leaves and have no reverse citation in the batch or corpus search. I independently recomputed their finite claims: the decomposition/order check for $U(240)$, $\lambda(561)=80$ and $\varphi(561)=320$, the primitive-root moduli below $20$ (including $n=1$ under the local convention), trivial inversion on $C_2^2$, $U(8)\cong C_2^2$, and the two integer-array products/inverses. I found no counterexample.

## Findings — `primitive-roots-and-unit-groups-modulo-n`

### PR-1 — `lem-direct-product-of-finite-cyclic-groups-is-cyclic-iff-orders-are-coprime`

- **Location:** frontmatter `provenance.statement` and `sources.references` (lines 7–21), against the Statement at line 27.
- **What is wrong:** the Statement is tagged `literature-derived` and cites Stein, Lemma 2.5.7. That lemma says that two *commuting elements* of coprime orders have product order equal to the product. It does not state the displayed iff for $C_m\times C_n$; the coverage artifact itself records the Stein result as `inline` for this item.
- **Why:** the local Statement is true and its proof closes, but it is a material abstraction and converse derived from the cited result, not a cosmetic restatement. Under SCHEMA §3 its statement provenance should be `ai-altered`, or an exact literature source for this iff should replace the present locator.
- **Classification:** **nonfatal**.

### PR-2 — `cor-power-congruence-solution-count-modulo-a-prime`

- **Location:** frontmatter `provenance.statement` / source locator (lines 7–21), against the Statement at line 27.
- **What is wrong:** Stein, Proposition 2.5.5 assumes $d\mid(p-1)$ and concludes that $x^d-1$ has exactly $d$ roots. The item asserts the stronger all-$d\ge1$ formula $\gcd(d,p-1)$ and then recovers Stein's result as a special case.
- **Why:** the stronger claim is correctly proved, but extending the source theorem's domain and conclusion is material. `literature-derived` is inaccurate; `ai-altered` is the evidence-supported label unless an exact source for the gcd formula is supplied.
- **Classification:** **nonfatal**.

### PR-3 — `cor-number-of-solutions-of-a-binomial-congruence`

- **Location:** frontmatter `provenance.statement` and Hackman C.III.1 reference (lines 7–21), against the Statement at lines 27–31.
- **What is wrong:** Hackman C.III.1 states the solvability biconditional for $x^m\equiv a\pmod n$; it does not state the separate exact solution count $\gcd(\varphi(n),m)$. The count follows from the linear-congruence count used in Hackman's proof and is correctly derived locally in steps 2.1–3.1, but the batch notes' claim that C.III.1 “states the exact count” is inaccurate.
- **Why:** this is a source-based derived corollary, not a cosmetically copied source Statement. Its statement provenance should be `ai-altered` (and the notes/coverage rationale should stop saying C.III.1 itself states the count).
- **Classification:** **nonfatal**.

### PR-4 — `def-carmichael-function`

- **Location:** frontmatter `provenance.statement` and Hackman C.V.3 reference (lines 7–20), Definition lines 26–30.
- **What is wrong:** Hackman C.V.3 defines $\lambda(n)$ as the **maximal order of an invertible class**. This item instead defines it as the **group exponent**. The following local proposition proves that these descriptions coincide for the unit groups in question.
- **Why:** replacing one definition with a non-definitionally-equivalent formulation whose equivalence requires a theorem is a material reformulation. The Definition is mathematically sound, but `provenance.statement: literature-derived` should be `ai-altered` unless a source defining Carmichael's function exactly as the group exponent is cited.
- **Classification:** **nonfatal**.

### PR-5 — `lem-primitive-roots-pass-between-odd-n-and-twice-n`

- **Location:** frontmatter `provenance.statement` / Hackman C.I.6 reference (lines 7–21), Statement line 27.
- **What is wrong:** Hackman C.I.6 states the forward representative-level result: an **odd primitive root** modulo odd $n$ remains primitive modulo $2n$. The item asserts an iff of *existence* for $n$ and $2n$, adding the reverse direction and handling parity through an isomorphism argument.
- **Why:** the strengthened Statement is correct, but the change is material rather than cosmetic. Its statement provenance should be `ai-altered`.
- **Classification:** **nonfatal**.

### PR-6 — `thm-classification-of-moduli-with-primitive-roots`

- **Location:** frontmatter `provenance.statement` / Hackman C.IV.10 reference (lines 7–21), title and Statement lines 27–31.
- **What is wrong:** Hackman C.IV.10 lists $2,4,p^k,2p^k$ and does not include $n=1$. This item deliberately repairs/extends that theorem to include $1$ under the library's primitive-root convention.
- **Why:** adding a boundary case omitted by the cited theorem is a material extension, even though it is correct and proved here. The Statement should be `ai-altered`, not `literature-derived`.
- **Classification:** **nonfatal**.

### PR-7 — `thm-structure-of-the-unit-group-modulo-n`

- **Location:** Facts [L4]–[L5] (lines 47–49), proof steps 1.1 and 2.2 (lines 57 and 61).
- **What is wrong:** [L4] says `thm-canonical-prime-factorisation` proves that every positive integer has a canonical prime-power factorisation, but the cited on-disk Statement is conditional on an already supplied finite injective covering list of primes; existence is not its conclusion. Also [L5] states only $\varphi(2)=1$ and $\varphi(4)=2$, while step 2.2 uses those values as the orders of the corresponding unit groups without citing `def-unit-group-modulo-n-and-euler-totient`, which is the item that defines $\varphi(n)=|(\mathbb Z/n)^\times|$.
- **Why:** the theorem's Given already supplies the displayed factorisation, and the totient/cardinality bridge is immediate. Thus the mathematics is unaffected, but the restatements are not faithful to their cited Statements and the step input is incomplete.
- **Classification:** **polish** (both bridges close well inside 30 seconds).

### PR-8 — `lem-primitive-roots-pass-between-odd-n-and-twice-n`

- **Location:** Fact [L3] and step 1.2 (lines 37 and 45).
- **What is wrong:** [L3] attributes “the unit group modulo $2$ has $\varphi(2)=1$ element” solely to `cor-totient-at-one-and-at-a-prime`. Its Statement gives only $\varphi(2)=1$; the cardinality interpretation of $\varphi$ is in `def-unit-group-modulo-n-and-euler-totient`, which is not a dependency of this item.
- **Why:** the conclusion that the factor is trivial is correct, but [L3] inflates the cited corollary and step 1.2 needs the omitted definition.
- **Classification:** **polish** (a one-citation repair).

### PR-9 — `thm-carmichael-function-formula`

- **Location:** Statement display, line 31.
- **What is wrong:** the first spacing command lacks its backslash: `\lambda(2)=1,qquad\lambda(4)=2`. KaTeX therefore treats `qquad` as mathematical letters rather than spacing, visibly corrupting the displayed formula.
- **Why:** the intended values and proof are correct; this is a literal Statement typo.
- **Classification:** **polish**.

## Findings — `primitive-roots-and-unit-groups-modulo-n-examples`

No findings. I checked all 11 examples/counterexamples, including every residue table, order calculation, Carmichael/totient value, the four roots modulo $128$, and the exhaustive list below $20$. The three AI-generated Statements on this page are true under the stated conventions and are not load-bearing.

## Findings — `semidirect-products-and-automorphism-groups`

### SD-1 — `thm-internal-external-semidirect-product-equivalence`

- **Location:** frontmatter source locator and `provenance.statement` (lines 7–21), Statement lines 27–35.
- **What is wrong:** the reference names “Keith Conrad, Semidirect Products, Theorem 3.1”, but Conrad 3.1 is a **Definition** of the external semidirect product. The supporting recognition result is Conrad **Theorem 4.1**. Moreover, Conrad 4.1 states the forward recognition theorem; this item packages that with the reverse transport of the canonical factors into an iff.
- **Why:** the current locator is inaccurate, and the iff packaging is a material reformulation. The locator should be corrected to Theorem 4.1 (with the canonical-factor result for the reverse direction), and the Statement should be `ai-altered` unless an exact iff source is provided. The local proof itself is correct.
- **Classification:** **nonfatal**.

### SD-2 — `prop-holomorph-as-a-permutation-group`

- **Location:** frontmatter `provenance.statement` / Cameron reference (lines 7–21), formula and Statement lines 27–31.
- **What is wrong:** Cameron's cited exercise uses the convention in which the normal copy of $G$ acts by **right multiplication**. This batch chose the opposite external-product convention and proves the faithful **left-affine** formula $x\mapsto g\alpha(x)$.
- **Why:** the result is correct, but changing the action convention and displayed formula is material, not cosmetic. The Statement should be `ai-altered`.
- **Classification:** **nonfatal**.

### SD-3 — `cor-dihedral-groups-as-semidirect-products`

- **Location:** frontmatter `provenance.statement` / Conrad reference (lines 7–21), title and Statement lines 27–35.
- **What is wrong:** Conrad's corresponding construction treats $D_n$ for $n\ge3$ (Milne's analogous example starts at $n\ge2$), while this item asserts it for every $n\ge1$. The proof constructs $\operatorname{Dih}(C_n)$ but never defines the convention $D_n:=\operatorname{Dih}(C_n)$ at the degenerate $n=1$ boundary.
- **Why:** the abstract group $C_n\rtimes C_2$ is correctly constructed for $n=1$, but extending the name $D_n$ to that boundary is a material convention not supplied by the cited source. Either state the convention in the item (and tag the Statement `ai-altered`) or restrict the sourced claim to the source's range.
- **Classification:** **nonfatal**.

### SD-4 — `thm-automorphisms-of-a-finite-cyclic-group`

- **Location:** Fact [L1] and proof step 1.1 (lines 37 and 51).
- **What is wrong:** [L1] says `thm-classification-of-cyclic-groups` states both the cyclic-group classification and that a homomorphism from a cyclic group is determined by the image of a generator. Its on-disk Statement states only the classification. Step 1.1 uses the added homomorphism fact to enumerate all endomorphisms.
- **Why:** the missing fact is elementary and is effectively illustrated in the cited theorem's proof, but it is not the cited theorem's stated conclusion. A direct citation to the cyclic universal-property/power lemma, or an inline one-sentence derivation, is needed for exact citation discipline.
- **Classification:** **polish**.

### SD-5 — `lem-groups-of-order-pq-have-a-normal-q-subgroup`

- **Location:** Facts [L1]–[L2] and proof step 1.1 (lines 33–35 and 51).
- **What is wrong:** two inputs are overstated or omitted. First, Cauchy's theorem [L1] supplies an **element** of order $q$, but step 1.1 immediately chooses a **subgroup** $Q$ of order $q$ without citing the order/size of the generated cyclic subgroup. Second, `thm-left-coset-action-and-its-kernel` states $\ker\rho=\operatorname{Core}_G(Q)$; its Statement does not include [L2]'s added conclusion that the core is contained in $Q$. That containment is stated by the target's own dependency `lem-core-is-largest-normal-subgroup-contained`, not by the cited theorem's conclusion.
- **Why:** both moves are true and immediate, but the numbered step needs facts absent from its declared inputs and [L2] is an inflated restatement.
- **Classification:** **polish** (two sub-30-second citation repairs).

### SD-6 — `lem-order-p-actions-on-a-cyclic-q-group`

- **Location:** Fact [L2], steps 1.2 and 2.1 (lines 35, 55 and 59).
- **What is wrong:** `cor-totient-at-one-and-at-a-prime` states $\varphi(q)=q-1$; it does not itself state that $(\mathbb Z/q)^\times$ has that order. [L2] adds the cardinality conclusion, and the two cited steps use it, without depending on `def-unit-group-modulo-n-and-euler-totient`.
- **Why:** the cardinality bridge is correct but absent from the inputs, so the citation restatement is stronger than its target Statement.
- **Classification:** **polish**.

### SD-7 — `prop-holomorph-recognises-regular-normal-subgroups`

- **Location:** Statement line 27, Given line 31, proof step 1.1 line 43; proof-contract boundary records `empty` and `nonempty-choice`.
- **What is wrong:** the local definition of transitive action does not require the acted-on set to be nonempty. Thus the trivial group acting on $\Omega=\varnothing$ is faithful, free and transitive under the on-disk definitions, but no $\omega_0\in\Omega$ can be chosen and the displayed identification cannot be made. The Statement says “after choosing $\omega_0$” while the proof silently upgrades this to a Given base point. The proof contract incorrectly marks both the empty and nonempty-choice cases `not_applicable`.
- **Why:** add $\Omega\ne\varnothing$ (or include a chosen $\omega_0\in\Omega$ in the hypotheses) and update the boundary record. The ordinary nonempty theorem and its proof are correct.
- **Classification:** **polish** under the 30-second rule.

### SD-8 — `thm-internal-external-semidirect-product-equivalence`

- **Location:** Statement lines 27–35.
- **What is wrong:** before the left-hand normality condition is assumed, the phrase “for the conjugation action $\alpha_h(n)=hnh^{-1}$” need not define a map $N\to N$ at all. The proof correctly establishes well-definedness only in the forward branch; the reverse branch assumes “such an isomorphism” already exists.
- **Why:** the RHS should explicitly say that conjugation restricts to an action of $H$ on $N$ and that the resulting map is an isomorphism, or the theorem should be presented as the standard forward recognition theorem plus its converse. This is a well-formedness clarification, not a failure of the intended proof.
- **Classification:** **polish**.

## Findings — `semidirect-products-and-automorphism-groups-examples`

No findings. I checked all 15 examples, counterexamples and false-statement refutations. The three AI-generated Statements on this page are correct by direct finite/algebraic computation and are not dependency targets.

## Per-page verdicts and count

| page | assigned items opened | verdict |
|---|---:|---|
| `primitive-roots-and-unit-groups-modulo-n` | 28/28 | **No fatal defect.** Six nonfatal provenance/source-label defects and three polish findings. |
| `primitive-roots-and-unit-groups-modulo-n-examples` | 11/11 | **Clean read.** No finding. |
| `semidirect-products-and-automorphism-groups` | 23/23 | **No fatal defect.** Three nonfatal provenance/source-label defects and five polish findings. |
| `semidirect-products-and-automorphism-groups-examples` | 15/15 | **Clean read.** No finding. |

**Assigned authored items actually opened: 77/77.** Additional unique earlier dependency items opened for citation verification: **70**. Fatal findings: **0**. Nonfatal findings: **9**. Polish findings: **8**.
