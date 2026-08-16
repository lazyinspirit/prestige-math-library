# Frontier 15 — independent reader 7 (batch 7)

## Scope and method

Complete. I opened all 72 scoped items: 59 on monads-comonads-and-their-algebras and 13 on monads-comonads-and-their-algebras-examples. Fifty-five items are proof-bearing and seventeen are definitions or remarks without a phase-format proof. I read every numbered proof step, opened every item cited by an [F#], [A#], or [L#], compared every title and Statement with its proof, reviewed all 440 boundary rows, and checked the Statement/proof provenance of every item. I also read both page bodies independently of the item proofs.

The audit found three fatal defects, two nonfatal defects, and one polish defect. All six are repaired. No finding remains open.

## Fatal findings

### R7-1 — thm-a-distributive-law-makes-the-composite-a-monad, original Proof step 3.1 — fatal

The original step replaced the entire associativity verification by saying that the multiplication axioms for the distributive law “move the two occurrences of $S$ past the two occurrences of $T$ in the same order” and that associativity of the two monads then identifies the results. Facts [L1] and [L2] supplied the four axioms and the monad laws, but the step gave neither a typed equality chain nor commutative cells showing that the two composites $TSTSTS\to TS$ agree. This was the theorem's load-bearing inference and was not closable in 30 seconds.

**Disposition:** repaired. The proof now lifts $T$ to the category of $S$-algebras by

$$\widetilde T(A,a)=\bigl(TA,T(a)\lambda_A\bigr),$$

checks the lifted algebra law and the algebra-homomorphism equations for $\eta^T$ and $\mu^T$ by typed calculations, obtains a monad on $\mathcal C^S$, and composes the two Eilenberg–Moore adjunctions. Expanding their counits gives

$$\mu^T S\circ TT\mu^S\circ T\lambda S
=T\mu^S\circ\mu^TSS\circ T\lambda S,$$

where the equality is naturality of $\mu^T$ at $\mu^S$. The general adjunction-to-monad theorem then licenses both unit laws and associativity. I added the five direct dependencies used by this repair, changed the proof strategy and proof provenance, and replaced the old three-row contract by eight derivation rows with seven exact citations.

### R7-2 — thm-algebras-for-the-covariant-power-set-monad-are-posets-with-all-small-suprema, Fact [L1] and deps — fatal

[L1] said that a power-set algebra is a map $a:\mathcal P(X)\to X$ satisfying the displayed singleton and flattening equations, but cited only thm-the-covariant-power-set-monad and def-eilenberg-moore-category. The first source states the unit and multiplication of the power-set monad; the second says only that Eilenberg–Moore objects are $T$-algebras. Neither source states the algebra unit/multiplication equations or the algebra-homomorphism equation used in steps 1.1–3.1. Those clauses occur in def-t-algebra-and-algebra-homomorphism.

**Disposition:** repaired. Fact [L1] now separates the exact power-set unit/multiplication citation from the exact algebra-law and homomorphism citation. I added def-t-algebra-and-algebra-homomorphism to the item and batch-manifest dependencies and replaced the inaccurate proof-contract citation. The proof provenance is now ai-altered.

### R7-3 — ex-the-interior-comonad-on-a-topological-space, Fact [L1] and step 1.1 — fatal

[L1] attributed “Interior is monotone, contractive, and idempotent” directly to def-interior-closure-boundary-top. The cited Definition states that $\operatorname{int}(A)$ is the largest open subset of $A$, gives $\operatorname{int}(A)\subseteq A$, and says that an open set equals its interior. It does not state monotonicity and idempotence as the cited clause. The properties are true, but the restatement was wider than its source.

**Disposition:** repaired. [L1] now quotes only the largest-open-subset, containment, and open-fixed-point clauses. Step 1.1 derives monotonicity from maximality and idempotence from openness, explicitly including the empty subset and empty ambient space. The contract derivation and boundary evidence now match the repaired proof, and proof provenance is ai-altered.

## Nonfatal findings

### R7-4 — thm-eilenberg-moore-creates-base-colimits-preserved-by-the-monad-and-its-square, Proof step 3.1 — nonfatal

The algebra-homomorphism equation compares arrows $TQ\to X$, so it must be checked after precomposition with the jointly epic legs $T(i_j):TU^TDj\to TQ$. Step 3.1 instead said “precomposition with every $i_j$”, which was ill-typed. The intended correction follows immediately from preservation of the colimit by $T$, so this is nonfatal under the 30-second rule.

**Disposition:** repaired to $T(i_j)$ in the proof and matching contract derivation. The proof provenance is now ai-altered.

### R7-6 — three empty-set boundary rows in frontier-15-batch-7.proof-contracts.json — nonfatal

The rows at .contracts["lem-ultrafilter-pushforward-is-an-ultrafilter-and-is-functorial"].boundaries[case="empty"], .contracts["lem-the-principal-ultrafilter-and-ultrafilter-flattening-maps-are-natural"].boundaries[case="empty"], and .contracts["thm-the-ultrafilter-monad-is-a-monad"].boundaries[case="empty"] cited observations that their numbered steps do not make. In particular, step 1.1 of the pushforward lemma does not observe that no proper filter exists on $\varnothing$, and steps 1.1–2.1 of the other two items do not explicitly use $\beta\varnothing=\varnothing$ or separately calculate $X=\varnothing$.

The mathematical dispositions are nevertheless correct: a proper filter cannot exist on $\varnothing$, so $\beta\varnothing=\varnothing$, and consequently all the relevant unit, multiplication, and associativity components have empty domain and are unique.

**Disposition:** repaired all three rows with the actual empty-set argument and honest anchors. The new text explicitly distinguishes a vacuous Statement case from content proved in a numbered step.

## Polish

### R7-5 — def-t-algebra-and-algebra-homomorphism, Definition display — polish

The first algebra axiom rendered as 1_A,qquad rather than 1_A,\qquad; the missing backslash left malformed literal text between the equations.

**Disposition:** repaired the display and synchronized every proof-contract quotation of that Definition.

## Changes made

- Rewrote thm-a-distributive-law-makes-the-composite-a-monad with the lifted-monad/composite-adjunction proof and canonical proof-phase numbering.
- Repaired the power-set algebra dependency/citation, the interior citation and derivation, the colimit proof's typed precomposition, and the algebra-definition display.
- Updated research/frontier-15-batch-7.pages.json only for the distributive-law strategy/dependencies and the missing power-set-algebra dependency.
- Updated research/frontier-15-batch-7.proof-contracts.json for every changed citation, quotation, proof step, step number, input, and boundary disposition.
- Updated the batch notes' component-provenance rows for the four materially repaired proofs.
- Added no item and deleted no item. I did not touch research/plan-spec.json, another batch, or any published item.
- None of the materially rewritten items had a verification.judge field, so there was no stale judge result to delete. I did not run a judge.

## Boundary and provenance results

I actively instantiated the empty category, empty diagram, empty family, empty set, empty carrier, $\beta\varnothing$, singleton/identity degeneracies, finite $n=0$ and $n=1$ cases, and both directions of each actual iff. All 440 contract rows were reviewed. boundary-audit.mjs found no template cluster at four or more members. Its two contradicted-disposition candidates are lexical false positives on fs-the-kleisli-and-eilenberg-moore-categories-are-equivalent-for-every-monad: “equivalent” there names the categorical predicate being refuted, not a logical biconditional; both rows already record that exact reason.

Every scoped item has Statement and proof provenance appropriate to its mathematical components. The six ai-generated Statements are permitted examples or counterexamples with recorded truth-risk checks, and none is a dependency of another scoped item. No published dependency falsehood was found.

## Validation

- tools/reflow.mts was run on all five changed items.
- Scoped tools/precheck.mts: four proof-bearing changed items passed; the changed Definition is correctly not proof-bearing.
- proof-contract.mjs --strict: 55/55 items, 0 errors, 0 warnings.
- citation-fidelity.mjs --fail-on-missing-quote: 126 citations; no missing quotation and no widening candidate.
- boundary-audit.mjs: 440 rows, 287 not_applicable, no template cluster; the two lexical candidates described above were manually rejected.
- content-policy.mjs: 72 scoped items, 0 errors, 0 warnings.
- Scoped prosecheck.mjs --warnings: seven changed-item/page files, 0 errors, 0 warnings.
- JSON parsing and git diff --check passed for the changed manifest, contract, items, notes, and this report.

## Per-page verdicts

- monads-comonads-and-their-algebras: 59/59 items opened. R7-1, R7-2, R7-4, R7-5, and the three A-page boundary rows grouped as R7-6 were repaired. No defect remains.
- monads-comonads-and-their-algebras-examples: 13/13 items opened. R7-3 was repaired. No defect remains.

**Items actually opened: 72 of 72. Final verdict: batch 7 is clean after the recorded repairs.**
