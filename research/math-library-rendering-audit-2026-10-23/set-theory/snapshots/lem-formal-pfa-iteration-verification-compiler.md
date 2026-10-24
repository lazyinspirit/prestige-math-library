---
id: lem-formal-pfa-iteration-verification-compiler
kind: lemma
title: "Finite-fragment compiler for the PFA iteration"
status: published
origin: pipeline
deps: [thm-a-supercompact-cardinal-can-be-forced-to-give-pfa, lem-forcing-transfer-for-finite-zfc-fragments, thm-formal-consistency-transfer-by-forcing, lem-primitive-recursive-syntax-and-proof-checking, lem-certified-syntax-coding-operations-are-primitive-recursive, thm-primitive-recursive-numeralwise-representability]
justified_by: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
sources:
  references:
    - title: "Cummings, Iterated Forcing and Elementary Embeddings, Theorem 24.11"
      url: https://www.math.cmu.edu/users/jcumming/papers/repaper_finished_june_2008.pdf
---

## Statement

Fix certified presentations of the source theory
$S=\mathrm{ZFC}+\text{“there is a supercompact cardinal”}$ and the target
$T=\mathrm{ZFC}+\mathrm{PFA}$, together with certified formal versions of the
preceding Laver-guided forcing proof. Require these fixed data to include
checker-certified, formula-parametric proof templates for the forcing
translations of Separation and Replacement, the nonschematic ZFC axioms and
logical rules, together with their PA correctness derivations, as well as the
one fixed PFA forcing block. PA then verifies total primitive-recursive
constructors which take every certified finite target fragment to source
proofs of the finite ground and forcing facts needed for that fragment, and
which take every certified $T$-refutation to a certified $S$-refutation. No
countable transitive model of either full theory is inferred from consistency.

## Facts & Assumptions

**Given:** The fixed certified calculi, code-parametric templates, PA correctness derivations, and formal proof blocks in the statement. A certificate for a Separation or Replacement axiom includes its defining formula, and the PFA axiom has one fixed tag. All malformed codes use the stipulated zero or empty-list defaults. The uniform templates are explicit input data here; they are not inferred from F2's externally indexed assertion.

[F1] The semantic Laver-guided construction proves in ZFC plus a supercompact that its nonempty iteration forces PFA and preserves ZFC. [[thm-a-supercompact-cardinal-can-be-forced-to-give-pfa]]

[F2] For each externally fixed finite target fragment whose formal forcing verification is supplied, the verification expands to finitely many formula-specific truth, valuation, Separation, Replacement, parameter, and preorder proofs; this interface asserts no uniform arithmetic constructor. [[lem-forcing-transfer-for-finite-zfc-fragments]]

[F3] A formal forcing transfer requires verified total support extraction, proof construction, composition, and soundness operations; semantic correctness alone is insufficient. [[thm-formal-consistency-transfer-by-forcing]]

[F4] Formula recognition, free-variable and free-for tests, capture-free substitution, numeral formation, negation, and certified derivation checking are primitive recursive, with defaults on malformed inputs. [[lem-primitive-recursive-syntax-and-proof-checking]]

[F5] Validity, length, coordinates, append, concatenation, fixed-register iteration, and finite-history recursion for the certified sentinel list coding are primitive recursive. [[lem-certified-syntax-coding-operations-are-primitive-recursive]]

[F6] Primitive-recursive functions have representations whose totality and uniqueness PA proves. [[thm-primitive-recursive-numeralwise-representability]]

## Proof

1.1 Fix the source and target proof predicates. Let $\operatorname{Good}(P)$ be the fixed source formula saying that some supercompact $\kappa$ and Laver function $\ell$ witness that $P$ is the recursively defined Laver-guided iteration. The stored formalization of F1 proves $\exists P\,\operatorname{Good}(P)$ and proves from $\operatorname{Good}(P)$ the nonemptiness and forcing conclusions of F1. Define by recursion on a parsed membership formula $\varphi$ the code $\operatorname{Forc}_P(\varphi)$ of “$1_P$ forces $\varphi$,” leaving $P$ as the one displayed free parameter. Atomic clauses insert the two fixed forcing-relation formulas; Boolean connectives and quantifiers insert the corresponding fixed clauses with fresh variables. F4 supplies parsing and capture-free substitution; fresh indices are obtained by a bounded scan above the largest parsed index, and F5 supplies the bounded syntax-tree traversal and output-list recursion. Alongside the formula code, the recursion emits the fixed logical derivations showing that forcing respects each logical axiom and inference rule. Invalid formula codes return the fixed tautology proof. [F1, F4, F5, Given]

2.1 Define the target-axiom constructor $A$ from the certified templates in Given. For each of the finitely many nonschematic ZFC axioms it returns the corresponding stored forcing proof. On a certified Separation instance for $\varphi$, it substitutes $\operatorname{Forc}_P(\rho\in\sigma\land\varphi)$ into the supplied name-and-Separation template; on a Replacement instance it substitutes into the supplied least-witness-rank template and its bounding name. The Power Set branch inserts the stored subname construction, and the Choice branch inserts the stored ground-well-order and least-fibre construction. The PFA tag returns the one stored formalization of F1, including the forced-proper name normalization, image factor, lifted-embedding formula, image-generated filter, and elementarity reflection. Each branch is weakened by the antecedent $\operatorname{Good}(P)$ and finishes with the supplied checker-certified derivation of $\operatorname{Good}(P)\to\operatorname{Forc}_P(\delta)$ for its input axiom $\delta$. F4 verifies the displayed substitutions and certificate tags, while F5 supplies the finite template and list assembly. No truth evaluator, proof search, or uniformity inference from F2 occurs. [F1, F4, F5, step 1.1, Given]

3.1 Traverse a certified finite fragment $\Delta$, apply $A$ to each entry, rename bound and proof-line variables above the current maxima, concatenate the blocks, and collect the nonlogical source-axiom certificates actually appearing. The resulting finite list $\Gamma(\Delta)$ contains the supercompact axiom because this compiler uniformly uses the PFA iteration, and it contains exactly the finitely many ZFC schema instances used by the emitted derivations. It also contains the parameter, preorder, forcing-recursion, proper-iteration, factorization, master-condition, and forcing-truth instances occurring in that fixed block, together with the fixed proof of $\exists P\,\operatorname{Good}(P)$. Thus the output proves every finite ground fact and every conditional $\operatorname{Good}(P)\to\operatorname{Forc}_P(\delta)$ for $\delta\in\Delta$, not merely a citation to the semantic theorem. For each particular output fragment, F2 identifies these finite proof roles; it does not construct the traversal. [F1, F2, F4, F5, step 2.1, Given]

4.1 Every loop in steps 1.1–3.1 is bounded by a decoded formula, proof, or fragment length; every update is one of F4's primitive-recursive syntax operations or F5's primitive-recursive list recursions. Hence their composition is primitive recursive. PA proves the following simultaneous invariant by induction first on formula-tree size and then on the fragment position: every returned line reference is earlier than its use, every substitution passes the free-for test, each source axiom line carries its supplied certificate, and the last line of the block is the advertised forcing formula. Constant branches reduce to checking fixed finite numerals; the two schematic branches use the constructor tags and annotations that F4's checker recomputes. F6 supplies PA-provably total single-valued graphs for the composite functions. This verifies totality and checker acceptance rather than inferring either from F1 or F2. [F3, F4, F5, F6, step 1.1, step 2.1, step 3.1]

5.1 Now define $R$ on a proposed target proof $p$. If F4 rejects $p$ or its conclusion is not the fixed contradiction, put $R(p)=0$. Otherwise scan its lines. For a target-axiom line append the block supplied by $A$. For a logical-axiom line append the corresponding forcing-logic block from step 1.1, weakened by $\operatorname{Good}(P)$. For modus ponens, generalization, or existential elimination, append the fixed block deriving $\operatorname{Good}(P)\to\operatorname{Forc}_P(\varphi)$ for the conclusion $\varphi$ from the already emitted conditional translations of the cited earlier lines, after renumbering its references. Maintain the table sending each input line to its output concluding line. The final target contradiction therefore yields $\operatorname{Good}(P)\to 1_P\Vdash\bot$. Append the fixed derivation that nonemptiness of $P$ implies $1_P\not\Vdash\bot$; since $\operatorname{Good}(P)$ includes nonemptiness, obtain $\forall P\,\neg\operatorname{Good}(P)$. Combining this with F1's stored source proof of $\exists P\,\operatorname{Good}(P)$ gives an $S$-refutation without adding a witness constant to the source language. [F1, F4, F5, step 1.1, step 2.1, step 4.1]

6.1 PA induction on the decoded line number proves the precise loop invariant $$\text{if the first }i\text{ target lines check, the output prefix checks and ends each line block with its forcing translation.}$$ The axiom, logical, and inference cases are exactly the branches in step 5.1, and malformed references take only the rejected-input branch. F4 checks the input and every emitted annotation; F5 supplies the bounded output-list and table recursions, and F6 proves the composite functions total. PA therefore verifies $$\forall p\bigl(\operatorname{Prf}_{T}(p,\ulcorner\bot\urcorner)\longrightarrow\operatorname{Prf}_{S}(R(p),\ulcorner\bot\urcorner)\bigr).$$ This supplies all constructor verifications demanded by F3, including the zero-occurrence case in which no PFA block is emitted. [F3, F4, F5, F6, step 4.1, step 5.1]

7.1 Steps 1.1–4.1 give the promised compiler on every finite target fragment, and steps 5.1–6.1 give its verified refutation-reduction form. The construction manipulates finite codes only. F2 is used only after an output is fixed, to identify the finite semantic proof roles that output must realize; the uniform templates and their PA correctness derivations are the explicit certified data in Given. F1 supplies the one fixed object-theoretic PFA block. No step asserts that consistency creates a generic extension or a countable transitive model of full $S$ or full $T$. [F1, F2, F3, Given, step 3.1, step 4.1, step 6.1] ∎
