# frontier-33 batch 19 — scaffold checkpoint

Authorized outputs: this notes file, frontier-33-batch-19.pages.json, frontier-33-batch-19.coverage.json only. No published items, plan structure, or workflow state edits.

Read CLAUDE.md and README.md fully, SCHEMA.md fully, task files beta-19 and beta-batch, design SET-1/SET-4 and current spec records. Design sections state no numeric orders or prerequisite lists; no conflict with spec 655/656 and 661/662 found. Use unchanged spec requirements.

Verified prerequisite scope: thm-recursion is set-valued natural recursion; thm-transfinite-recursion is a schema on set well-orders, not yet class recursion. thm-mostowski-collapse (alias mostowski-collapse) is ONLY unique ordinal order type of well-orders; the new general extensional collapse is not a duplicate. lem-ordinal-basics supplies ordinal successor and set suprema. Do not depend on later computability finite-code items merely because their names look suitable.

Source reading completed: Moschovakis, Lecture Notes in Logic (2014), https://www.math.ucla.edu/~ynm/lectures/lnl.pdf, §§1B–1C; Weiss, https://www.math.toronto.edu/~weiss/Set_Theory.pdf, chapter 1 and chapter 10, plus chapter 11 opening; Marks, https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf, §§6–7. Marks UCLA URL https://www.math.ucla.edu/~marks/notes/set_theory_notes.pdf fails web fetch (404); Berkeley is an author-hosted different edition, faithfully reharvested with original_url preserved, NOT treated as matching section numbering. Browser fetched full PDFs (319, 157, 106 pages respectively); exact read ranges are recorded in coverage.

Conventions: ZF metatheory unless expressly weakened or supplemented; no class objects. Arbitrary SET signatures, finite arities, nonempty carriers, literal equality. Pure membership-language terms are variables. Finite strings are finite maps with natural domains, not a claim of effective natural-number coding for arbitrary uncountable signatures. Capture-free substitution by free-for condition first, then canonical fresh-variable renaming. Set satisfaction via recursion into a set of truth tables. No uniform universe truth predicate. Tarski full undefinability belongs to SET-3; B-page false statement gives the directly verified truth-with-parameters diagonal argument; the sentence-only arithmetized theorem remains on SET-3.

Hierarchy: pred_R(x)={y:yRx}; arrows in an accessible pointed graph go from node to its R-predecessors. TC(x) is least transitive superset of x (not least transitive set containing x as member). Setlike class recursion needs finite predecessor closure and compatible local attempts. Foundation is not needed for a supplied well-founded relation. Marks Exercise 6.9 silently uses choice for the reverse descending-chain implication; isolate that implication with explicit supplied choice function instead of asserting it in ZF. H_kappa needs a choice-free convention (TC({x}) injects into an ordinal below kappa); never silently assert that every set has well-orderable hereditary size in ZF.

Scaffold status: source sections, all 59 item records, APG and Grothendieck orientation, and 101 harvested headings are complete. Required validators were run; exact outcomes and remaining external blockers are recorded below. Terminal curl fails DNS and pdftotext is unavailable; browser access works. Never invent fetch stamps. Next action: resolve the recorded external gates in a network-enabled validator environment; authoring remains step 5.

## def-set-signature-and-finite-syntax-strings

Claim/conventions: A signature is a disjoint set of constants, function symbols and relation symbols with positive finite arities; words are maps n to the tagged alphabet. Equality and variables are distinct logical symbols.

Dependencies: def-natural-numbers. These supply the objects or induction used below.

Source: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — 1B.1–1B.2, pp.4–5.

Proof/construction: Use Separation on P(omega cross alphabet) for all finite words; concatenation is the explicit shifted graph. No cardinal countability claim.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## def-set-coded-terms-and-formulas

Claim/conventions: Terms and formulas are the least finite-constructor closures inside the word set; primitive connectives negation, conjunction and existential quantification; others abbreviations. In the pure membership signature all terms are variables.

Dependencies: def-set-signature-and-finite-syntax-strings, thm-recursion. These supply the objects or induction used below.

Source: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — 1B.3; Appendix app3, pp.2–3.

Proof/construction: Iterate the one-stage closure map on the powerset of words with natural recursion; take union. Include sort tags to distinguish term/formula constructors.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## lem-unique-parsing-of-set-coded-syntax

Claim/conventions: Every term or formula has precisely one outer constructor and uniquely determined immediate subexpressions.

Dependencies: def-set-coded-terms-and-formulas, thm-strong-induction. These supply the objects or induction used below.

Source: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — 1B.4–1B.5 and x1.1–x1.2, pp.6,48.

Proof/construction: Fully delimit constructors; prove balanced-parenthesis prefix lemma and unique argument boundaries by length induction. Do not rely on a parser without proving boundaries.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## thm-structural-recursion-on-set-coded-syntax

Claim/conventions: Induction on constructors and recursion into a specified set with prescribed constructor operations are valid, unique and parameter-uniform.

Dependencies: lem-unique-parsing-of-set-coded-syntax, thm-recursion, thm-strong-induction. These supply the objects or induction used below.

Source: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — Appendix app3–app5, pp.2–3.

Proof/construction: Build compatible partial evaluations for words of length at most n in a powerset of word cross target; successor extends uniquely, union gives evaluation.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## def-free-variables-and-syntactic-substitution

Claim/conventions: Define free occurrences, finite FV, sentences, and substitution replacing free occurrences only; free-for means no variable in replacement becomes bound. Distinguish sequential and simultaneous substitution.

Dependencies: thm-structural-recursion-on-set-coded-syntax. These supply the objects or induction used below.

Source: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — 1B.6–1B.9, pp.7–9.

Proof/construction: Recursive occurrence-position sets; free-for is checked at each crossed binder. Bound-variable renaming comes after semantic free-for lemma.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## def-set-structures-and-variable-assignments

Claim/conventions: An L-structure has a nonempty set carrier, total interpreted functions, relations and constants; assignments are functions omega to carrier. Define updates, homomorphisms, strong homomorphisms, embeddings, isomorphisms, substructures, reducts and expansions.

Dependencies: def-set-signature-and-finite-syntax-strings. These supply the objects or induction used below.

Source: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — 1C.1–1C.5, 1C.11, pp.9–14.

Proof/construction: Use literal equality; functions remain total on their declared finite powers; all collections used are sets.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## def-term-denotation-in-a-set-structure

Claim/conventions: Evaluate variables, constants and function applications recursively in a structure under an assignment.

Dependencies: def-set-structures-and-variable-assignments, thm-structural-recursion-on-set-coded-syntax. These supply the objects or induction used below.

Source: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — 1C.7, p.11.

Proof/construction: Recurse into the set of functions from assignments to carrier, so operations act uniformly on assignments.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## thm-set-structure-satisfaction-recursion

Claim/conventions: There is a unique subset Sat_M of Formula_L cross M^omega satisfying atomic, negation, conjunction and existential Tarski clauses. The construction is uniformly first-order definable from L and M.

Dependencies: def-term-denotation-in-a-set-structure. These supply the objects or induction used below.

Source: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — 1C.7–1C.8, pp.11–12; Appendix app4.

Proof/construction: Recurse into P(M^omega): atomic truth sets, complement, intersection, existential projection by updates. Collect the pairs by Separation/Replacement. State finite-tuple variant after coincidence; no proper-class assignment domain.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## lem-satisfaction-coincidence

Claim/conventions: Assignments agreeing on free variables give the same value or truth; reducts preserve values of expressions in the smaller signature.

Dependencies: thm-set-structure-satisfaction-recursion, def-free-variables-and-syntactic-substitution. These supply the objects or induction used below.

Source: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — 1C.9, p.13.

Proof/construction: Structural induction; in quantified case update both assignments at the binder with the same value.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## lem-term-substitution-denotation

Claim/conventions: Evaluation of a term after substitution t for x equals evaluation under assignment updated at x by the value of t.

Dependencies: def-term-denotation-in-a-set-structure, def-free-variables-and-syntactic-substitution. These supply the objects or induction used below.

Source: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — x1.3.1, p.48 (term case).

Proof/construction: Induct on the term; total functions transport the inductive equalities.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## lem-formula-substitution-satisfaction

Claim/conventions: For t free for x in phi, M,s satisfies phi[t/x] iff M,s[x:=value(t,s)] satisfies phi.

Dependencies: lem-term-substitution-denotation, lem-satisfaction-coincidence. These supply the objects or induction used below.

Source: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — x1.3.1, p.48 (formula case).

Proof/construction: Induct on formulas; split binder x, binder not in FV(t), and x not free in quantified body. Use coincidence to justify commuting updates.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## lem-fresh-bound-variable-renaming

Claim/conventions: Replacing a binder and its bound occurrences by a variable absent from the whole formula preserves truth; a least unused variable always exists.

Dependencies: lem-formula-substitution-satisfaction. These supply the objects or induction used below.

Source: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 1 pp.16–18.

Proof/construction: Choose index above finite variable set (or least unused). Use free-for substitution lemma under the quantified assignments; handle shadowed occurrences, never globally replace all occurrences.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## prop-capture-avoiding-substitution

Claim/conventions: Renaming obstructing binders with the least unused variable yields a total substitution operation satisfying the semantic substitution identity.

Dependencies: lem-fresh-bound-variable-renaming. These supply the objects or induction used below.

Source: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 1 pp.17–18.

Proof/construction: Finite syntax recursion with a finite forbidden-variable set; renaming correctness plus free-for substitution. Prove termination via recursive descent, not length after renaming.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## cor-semantic-equivalence-under-substitution

Claim/conventions: Logically equivalent formulas remain equivalent under the same capture-avoiding substitution; equal parameter values are interchangeable.

Dependencies: prop-capture-avoiding-substitution. These supply the objects or induction used below.

Source: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — x1.3.3 p.48; Weiss chapter 1 Equality Principle p.18.

Proof/construction: Apply substitution identity to every structure and updated assignment, not merely one assignment where formulas happen to agree.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## def-theories-models-and-semantic-consequence

Claim/conventions: A theory is a set of sentences; models satisfy each sentence; T semantically entails phi if every set model of T satisfies phi. Define logical validity, equivalence and universal closure.

Dependencies: lem-satisfaction-coincidence. These supply the objects or induction used below.

Source: https://philippschlicht.github.io/teaching/files/mathematicallogic2021.pdf — 1.4 opening and Definition 1.4.1 p.10; Moschovakis 1C.10 p.13.

Proof/construction: Sentence truth independent of assignment by coincidence; universal quantification over set structures is a first-order class description.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## prop-isomorphism-invariance-of-satisfaction

Claim/conventions: Homomorphisms preserve term evaluations. Isomorphisms preserve every formula under transported assignments; surjective strong homomorphisms preserve equality-free formulas.

Dependencies: thm-set-structure-satisfaction-recursion, def-set-structures-and-variable-assignments. These supply the objects or induction used below.

Source: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — 1C.12(a)–(c), p.14.

Proof/construction: Term induction first; formula induction uses injectivity for equality and surjectivity for the existential reverse implication.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## def-relativization-to-a-definable-class

Claim/conventions: For a fixed pure membership formula and a class C defined by delta(x,p), replace quantifiers by guards delta, renaming binders away from p. Class terms are eliminable abbreviations, not additional objects.

Dependencies: prop-capture-avoiding-substitution. These supply the objects or induction used below.

Source: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 1 pp.19–21.

Proof/construction: Define formula-by-formula recursively, preserving atoms. Set case uses delta(x)=x in M. State nonempty-domain convention separately from syntactic empty-class relativization.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## thm-relativization-and-set-satisfaction

Claim/conventions: For any nonempty set M, membership structure (M,in restricted to M squared), fixed formula phi and parameters in M, satisfaction equals phi relativized to M. No transitivity hypothesis.

Dependencies: def-relativization-to-a-definable-class, thm-set-structure-satisfaction-recursion. These supply the objects or induction used below.

Source: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 1 pp.20–21; chapter 11 opening p.103.

Proof/construction: Induct on phi; the existential witness ranges exactly over M. Definable-class case remains a schema, not a uniform satisfaction predicate.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## rem-tarski-truth-definition-interface

Claim/conventions: Uniform set satisfaction is available; universe truth is only formula-by-formula notation. Truth-with-parameters means a proposed formula T(code,r,s,t) obeying all biconditionals for two-free-variable formulas. Sentence-only arithmetized undefinability is the later SET-3 theorem.

Dependencies: thm-relativization-and-set-satisfaction. These supply the objects or induction used below.

Source: https://philippschlicht.github.io/teaching/files/mathematicallogic2021.pdf — 2.4 pp.37–38.

Proof/construction: Explain the interface and exact scheme; no proof of arithmetic representability or sentence diagonal lemma is claimed here.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## ex-membership-formula-parsing-and-assignment

Claim/conventions: In M={empty,{empty}}, compute FV and satisfaction of exists v1(v1 in v0): false at v0=empty, true at v0={empty}.

Dependencies: lem-satisfaction-coincidence. These supply the objects or induction used below.

Source: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 1 pp.17–18, nonempty-set formula.

Proof/construction: Unfold the two possible witnesses explicitly; code uses the chosen finite-string convention.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## cex-variable-capture-changes-satisfaction

Claim/conventions: Naively replacing free v1 by v2 in exists v2(v2 in v1) yields exists v2(v2 in v2); fresh renaming instead gives exists v3(v3 in v2). In the two-element membership structure at v2={empty}, the latter is true and the former false.

Dependencies: prop-capture-avoiding-substitution. These supply the objects or induction used below.

Source: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 1 worked substitution pp.17–18.

Proof/construction: Evaluate each relation pair in the finite carrier; no global Foundation needed.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## ex-relativizing-to-the-empty-class

Claim/conventions: The relativization of exists x(x=x) to the empty class is false while that of forall x(x=x) is true; the empty class is not an admitted structure.

Dependencies: def-relativization-to-a-definable-class. These supply the objects or induction used below.

Source: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 1 pp.20–21.

Proof/construction: Expand existential and universal guards.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## cex-truth-at-one-assignment-does-not-survive-substitution

Claim/conventions: In the two-element equality structure with constant c=1 and s(x)=s(y)=0, x=y agrees with y=y, but substitution c for x makes the first false and second true.

Dependencies: lem-formula-substitution-satisfaction. These supply the objects or induction used below.

Source: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — x1.3.2 p.48, adapted from arithmetic to a finite structure.

Proof/construction: Direct evaluation; contrast with equivalence at every assignment, precisely the corollary hypothesis.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## fs-v-has-a-definable-truth-predicate

Claim/conventions: False in the explicitly stated truth-with-parameters sense: no T(w,x,y,z) and set t satisfy psi(r,s) iff T(code(psi),r,s,t) for every two-variable pure set formula psi and all r,s.

Dependencies: rem-tarski-truth-definition-interface, prop-capture-avoiding-substitution. These supply the objects or induction used below.

Source: https://philippschlicht.github.io/teaching/files/mathematicallogic2021.pdf — Theorem 2.4.1 and complete proof pp.37–38.

Proof/construction: For a proposed T take psi(x,y)=not T(x,x,y,y), with capture avoided, r=code(psi), s=t. Its one required biconditional contradicts the definition. Do not assert this is the sentence-only arithmetized theorem.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## def-well-founded-setlike-relations

Claim/conventions: For a definable relation R on a definable class X, pred_R(x)={y in X:yRx}; setlike means each predecessor collection is a set; well-founded means each nonempty set subset has an R-minimal member. Sets are the special case.

Dependencies: def-ordinal. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 6.1 and 6.3 p.30.

Proof/construction: Class notation is a schema with fixed parameters. No transitivity, totality, or Foundation assumption on a supplied R.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## def-accessible-pointed-membership-graphs

Claim/conventions: An APG is a set of nodes with root r and arrows x to y (meaning yRx), every node reachable from r by a finite path. A decoration satisfies d(x)={d(y):yRx}.

Dependencies: def-well-founded-setlike-relations. These supply the objects or induction used below.

Source: https://lmcs.episciences.org/1168/pdf — section 6 opening p.10, APG definition.

Proof/construction: Define finite paths as finite maps explicitly. Well-foundedness is the minimal-element definition, not an unqualified descending-path equivalence.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## lem-finite-predecessor-closure-is-a-set

Claim/conventions: Each point of a setlike relation belongs to a set closed under predecessors, obtained by iterating predecessor union from its singleton.

Dependencies: def-well-founded-setlike-relations, thm-transfinite-recursion. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — Lemma 6.4 p.30.

Proof/construction: Recursion on omega, successor Replacement and Union, final Replacement and Union. This closure lemma needs no well-foundedness.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## thm-induction-on-well-founded-relations

Claim/conventions: A definable progressive subclass equals X; includes set induction and the parameterized class schema.

Dependencies: lem-finite-predecessor-closure-is-a-set. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — Lemma 6.2 and Theorem 6.5 p.30.

Proof/construction: Take a counterexample, intersect its predecessor closure with the counterexample class by Separation, choose a minimal member.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## lem-compatible-well-founded-recursion-attempts

Claim/conventions: For a fixed definable functional rule G(x,h), attempts on predecessor-closed set domains agree on overlap. Compatible attempts covering pred(x) assemble to an attempt at x.

Dependencies: thm-induction-on-well-founded-relations. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — Theorem 6.6 proof p.31.

Proof/construction: Uniqueness by induction. For extension use canonical finite predecessor cones and their unique attempts; Replacement collects these unique functions, so no choice of arbitrary attempts is hidden.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## thm-recursion-on-well-founded-setlike-relations

Claim/conventions: For any definable rule assigning a unique set G(x,h) to every predecessor-indexed set function h, there is a unique definable F on X with F(x)=G(x,F restricted to pred(x)).

Dependencies: lem-compatible-well-founded-recursion-attempts. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — Theorem 6.6 p.31.

Proof/construction: Define graph by existence of a set-domain attempt. Prove totality by induction with canonical cones and the assembly lemma; restrictions to sets are sets by Replacement.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## def-transitive-closure-of-a-set

Claim/conventions: TC(a) is union of a_0=a, a_(n+1)=a_n union union(a_n); least transitive superset convention.

Dependencies: lem-finite-predecessor-closure-is-a-set. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 7.5 p.34; Weiss p.97.

Proof/construction: Natural recursion can be on a set of finite attempts; invoke already read transfinite recursion on omega with definable rule, which need not have a predetermined target set.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## prop-transitive-closure-minimality

Claim/conventions: TC(a) is a transitive set containing a as subset and is included in every transitive superset. TC is monotone and idempotent; TC({x}) contains x.

Dependencies: def-transitive-closure-of-a-set. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 7.6 and 7.9 pp.34–35.

Proof/construction: Induction on finite stages; transitivity at the union. Prove the basic transitive-set union criterion locally.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## def-rank-of-a-well-founded-relation

Claim/conventions: rank_R(x)=sup{rank_R(y)+1:yRx}; all values are ordinals; membership rank is available under Foundation.

Dependencies: thm-recursion-on-well-founded-setlike-relations, lem-ordinal-basics. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 6.7 p.31.

Proof/construction: Use a totalized rule (return empty for nonordinal inputs), then induction proves only ordinal inputs occur.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## prop-ordinal-ranking-characterizes-well-foundedness

Claim/conventions: For setlike R, existence of an ordinal-valued strictly increasing ranking characterizes well-foundedness; rank_R is pointwise least among rankings.

Dependencies: def-rank-of-a-well-founded-relation. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — Exercise 6.8 p.31.

Proof/construction: Forward recursion; converse pick least ordinal value on any nonempty set; minimality by R-induction and ordinal suprema.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## prop-well-foundedness-and-descending-sequences

Claim/conventions: Well-founded R has no omega-descending sequence. Conversely for a relation on a set X supplied with a choice function on nonempty subsets of X, absence of such sequences implies well-foundedness.

Dependencies: thm-induction-on-well-founded-relations, thm-transfinite-recursion. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — Exercise 6.9 p.31 (choice made explicit).

Proof/construction: If nonminimal subset Y exists, choose each next predecessor inside Y with the supplied choice function and recurse on omega. Do not claim converse in bare ZF.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## def-cumulative-hierarchy-stages

Claim/conventions: V_0=empty, V_(alpha+1)=P(V_alpha), V_lambda=union_(beta<lambda)V_beta; every stage is a set, uniformly definable in alpha.

Dependencies: thm-transfinite-recursion, lem-ordinal-basics, def-limit-ordinal. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 7.1 p.34.

Proof/construction: Construct each ordinal-length history with published set recursion; overlap uniqueness glues the class schema. Replacement gathers histories at limits; Power Set at successors.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## prop-cumulative-hierarchy-transitivity-and-growth

Claim/conventions: Each V_alpha is transitive; alpha<=beta implies V_alpha subset V_beta; V_alpha intersect Ord=alpha; alpha and V_alpha belong to V_(alpha+1) but not V_alpha. No Foundation used.

Dependencies: def-cumulative-hierarchy-stages, thm-transfinite-induction. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 7.2 p.34.

Proof/construction: Transfinite induction proves transitivity and nesting jointly. Ordinal intersection identifies alpha; the source rank-free argument proves V_alpha notin V_alpha.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## thm-foundation-equivalent-to-hierarchy-exhaustion

Claim/conventions: Over ZF without Foundation: Foundation, the membership induction schema, and every set belonging to some V_alpha are equivalent.

Dependencies: prop-cumulative-hierarchy-transitivity-and-growth, prop-transitive-closure-minimality, thm-induction-on-well-founded-relations. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 7.7 pp.34–35; Weiss Theorem 38 p.98.

Proof/construction: Foundation to induction via TC({x}). Induction to Foundation apply induction to property x notin A if A has no minimal member. Foundation to exhaustion use minimal counterexample in TC({x}), least stage witnesses and Replacement. Exhaustion to Foundation minimize hierarchy height, defined without membership recursion.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## def-membership-rank-of-a-set

Claim/conventions: In ZF rank(x) is the membership rank, with rank(x)=sup_(y in x)(rank(y)+1).

Dependencies: def-rank-of-a-well-founded-relation, thm-foundation-equivalent-to-hierarchy-exhaustion. These supply the objects or induction used below.

Source: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 10 p.99.

Proof/construction: Foundation makes membership well-founded and setlike; apply general recursion. Explicitly separate this from Foundation-free hierarchy construction.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## thm-membership-rank-and-hierarchy-levels

Claim/conventions: x in V_alpha iff rank(x)<alpha; x subset V_alpha iff rank(x)<=alpha. Thus x subset V_rank(x) and rank(x) is the least such ordinal.

Dependencies: def-membership-rank-of-a-set, prop-cumulative-hierarchy-transitivity-and-growth. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 7.3 p.34; Weiss Exercise 33 p.100.

Proof/construction: Induct on alpha, use membership-rank recursion at successors and ordinal limit condition; subset version follows from the pointwise membership version.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## cor-universe-is-the-class-union-of-its-stages

Claim/conventions: Every set x belongs to V_(rank(x)+1). The notation V=union_(alpha in Ord)V_alpha is a schema abbreviation, never a set-indexed union.

Dependencies: thm-membership-rank-and-hierarchy-levels. These supply the objects or induction used below.

Source: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — Theorem 40 p.100.

Proof/construction: Specialize rank characterization at successor rank.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## prop-ranks-of-ordinals-and-hierarchy-stages

Claim/conventions: rank(alpha)=alpha and rank(V_alpha)=alpha for each ordinal alpha.

Dependencies: thm-membership-rank-and-hierarchy-levels. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 7.4 p.34.

Proof/construction: For ordinals use transfinite induction in rank formula; for stages use strict level membership already proved.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## def-extensional-relation-and-collapse-map

Claim/conventions: R is extensional when equal predecessor sets imply equal nodes. Its collapse map is pi(x)={pi(y):yRx}, defined for any well-founded setlike R.

Dependencies: thm-recursion-on-well-founded-setlike-relations. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 6.10–6.11 pp.31–32.

Proof/construction: Recursion and Replacement collect predecessor images. A collapse need not be injective without extensionality.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## lem-extensional-collapse-is-injective

Claim/conventions: For well-founded setlike extensional R, pi(x)=pi(y) implies x=y.

Dependencies: def-extensional-relation-and-collapse-map, def-rank-of-a-well-founded-relation. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 6.11 proof p.32.

Proof/construction: Induct on max(rank_R(x),rank_R(y)); equal images match predecessor images and the lower-rank induction gives equal predecessor sets.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## thm-mostowski-collapse-for-extensional-relations

Claim/conventions: Every well-founded setlike extensional relation on a definable class is uniquely isomorphic to membership on a transitive class. For a set domain its collapse and image are sets.

Dependencies: lem-extensional-collapse-is-injective. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — Theorem 6.11 p.32.

Proof/construction: Range transitivity follows from recursive images; injectivity gives reflection of relation. Any transitive-target isomorphism obeys the same recursion, proving both uniqueness claims. Includes the published ordinal order-type theorem as a special case only.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## cor-well-founded-pointed-graphs-have-unique-decorations

Claim/conventions: A well-founded APG has a unique decoration; if extensional its range is TC({d(root)}) and it is the unique membership picture on that set.

Dependencies: def-accessible-pointed-membership-graphs, def-extensional-relation-and-collapse-map, prop-transitive-closure-minimality, thm-mostowski-collapse-for-extensional-relations. These supply the objects or induction used below.

Source: https://lmcs.episciences.org/1168/pdf — section 6 APG paragraph p.10; Marks 6.11 p.32.

Proof/construction: General recursion gives decoration, collapse gives injectivity in extensional case; finite root reachability gives equality of image with hereditary root closure.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## prop-minimum-rank-selection-and-collection

Claim/conventions: Every nonempty definable class has a nonempty set of all members of its least rank. In ZF, Replacement implies Collection; conversely Separation plus Collection implies Replacement.

Dependencies: thm-membership-rank-and-hierarchy-levels. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — section 7 Scott trick and Exercise 7.8 p.35.

Proof/construction: Bound minimal-rank members by V_(alpha+1). For each x in a set choose its unique least witness rank, apply Replacement to ranks, bound all witnesses in one stage, then Separation; reverse direction collect witnesses and separate unique values.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## def-hereditary-size-and-h-kappa

Claim/conventions: For infinite initial ordinal kappa, H_kappa consists of x such that TC({x}) injects into some ordinal lambda<kappa. Hereditary cardinality is the cardinal of TC({x}) when that set is well-orderable; under AC always defined.

Dependencies: prop-transitive-closure-minimality, def-cardinal. These supply the objects or induction used below.

Source: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 10 pp.100–101 (explicit choice-free adaptation).

Proof/construction: TC({x}) rather than TC(x) includes the root; for infinite kappa the two membership conventions agree, including finite exception by finite enlargement. Define via injections, not cardinality of an arbitrary set.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## lem-small-transitive-sets-have-small-ranks

Claim/conventions: If a transitive set T injects into an ordinal lambda<infinite cardinal kappa, then rank(t)<kappa for every t in T.

Dependencies: def-hereditary-size-and-h-kappa, def-membership-rank-of-a-set. These supply the objects or induction used below.

Source: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — Exercise 34(2), p.101.

Proof/construction: The rank image of T is an ordinal: any least missing beta below an attained rank is contradicted by a least attained rank above beta and the rank recursion. Well-order T via its injection and choose least preimages of ranks; the rank-image ordinal injects into lambda, hence is below kappa. No regularity or AC.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## thm-h-kappa-is-a-transitive-set

Claim/conventions: For any infinite cardinal kappa, H_kappa is a set, transitive, and contained in V_kappa. If kappa<=mu then H_kappa subset H_mu.

Dependencies: lem-small-transitive-sets-have-small-ranks, thm-membership-rank-and-hierarchy-levels. These supply the objects or induction used below.

Source: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — Theorem 41(1), Exercise 34(1)–(3), p.101.

Proof/construction: Rank bound places class inside V_kappa; Separation gives set. If y in x, TC({y}) subset TC({x}), so restrict witnessing injection.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## cor-hereditary-size-exhausts-the-universe-under-choice

Claim/conventions: Under AC each set belongs to H_kappa for some infinite cardinal kappa.

Dependencies: thm-h-kappa-is-a-transitive-set, thm-well-ordering-theorem, thm-hartogs. These supply the objects or induction used below.

Source: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — Theorem 41(2), p.101.

Proof/construction: Well-order TC({x}), then take an infinite initial ordinal larger than its cardinal via Hartogs. State AC explicitly.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## prop-hereditarily-finite-sets-are-v-omega

Claim/conventions: H_omega=V_omega; these are exactly the hereditarily finite sets.

Dependencies: thm-h-kappa-is-a-transitive-set, def-cumulative-hierarchy-stages. These supply the objects or induction used below.

Source: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — Theorem 42, omega case pp.101–102.

Proof/construction: Prove each V_n finite by induction (power set of n-element set encoded by length-n binary strings). Finite transitive superset gives hereditary finiteness; reverse inclusion follows H_kappa bound. Include finite-set coding proof locally.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## def-grothendieck-universe-closure-convention

Claim/conventions: A universe is a nonempty transitive set U closed under pairs, power sets and unions of U-indexed families of its members; containing omega is an additional convention stated when required.

Dependencies: prop-transitive-closure-minimality. These supply the objects or induction used below.

Source: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 10 p.102; Shulman p.16.

Proof/construction: Define closure only. Do not assume existence of a universe containing any prescribed set or invoke inaccessible-cardinal equivalence.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## rem-grothendieck-universe-orientation

Claim/conventions: Small relative to U means member of U; hereditary rank and cardinality are different measures. Large-cardinal characterizations and universe existence axioms belong to the planned large-cardinal page.

Dependencies: def-grothendieck-universe-closure-convention, prop-ranks-of-ordinals-and-hierarchy-stages. These supply the objects or induction used below.

Source: https://arxiv.org/pdf/0810.1279 — p.16 paragraphs on universes and relative smallness.

Proof/construction: Orientation only; no unproved equivalence as a prerequisite. Warn convention omitting omega permits V_omega, so uncountable-inaccessible equivalence needs its extra hypothesis.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## ex-first-hierarchy-stages-and-ranks

Claim/conventions: Compute V_0, V_1, V_2 and rank(empty), rank({empty}), rank({{empty}}); distinguish singleton nesting from ordinal successor.

Dependencies: prop-ranks-of-ordinals-and-hierarchy-stages. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 7.1 and 7.4 p.34.

Proof/construction: Unfold three powersets and the rank recursion; finite calculations.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## ex-collapse-of-a-nontransitive-well-founded-relation

Claim/conventions: On nodes a,b,c with aRb and bRc only, collapse is a->empty, b->{empty}, c->{{empty}}. The image is transitive but the relation R itself is not transitive.

Dependencies: thm-mostowski-collapse-for-extensional-relations. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 6.11 and Figure 6 p.32, reduced worked instance.

Proof/construction: List predecessor sets and recursive images; note aRc fails despite aRbRc.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## cex-extensionality-is-needed-for-injective-collapse

Claim/conventions: Two distinct isolated nodes both collapse to empty, so well-foundedness alone does not give an isomorphism.

Dependencies: def-extensional-relation-and-collapse-map. These supply the objects or induction used below.

Source: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 6.10–6.11 pp.31–32, sharpness instance.

Proof/construction: Predecessor sets equal empty and recursion fixes both values.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## ex-singleton-rank-and-hereditary-size

Claim/conventions: For an infinite ordinal alpha, rank({alpha})=alpha+1 although {alpha} is a singleton; TC({{alpha}}) includes every ordinal below alpha.

Dependencies: def-hereditary-size-and-h-kappa, prop-ranks-of-ordinals-and-hierarchy-stages. These supply the objects or induction used below.

Source: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 10 cardinality example p.101; Shulman p.16 singleton example.

Proof/construction: Rank equation and TC definition, without an assertion about non-well-orderable sizes.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## fs-v-is-a-set

Claim/conventions: False: the class of every set cannot be a set.

Dependencies: cor-universe-is-the-class-union-of-its-stages, def-membership-rank-of-a-set. These supply the objects or induction used below.

Source: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — Appendix app6 p.3; Marks hierarchy rank formula.

Proof/construction: Assume V is a set; then V in V contradicts rank(V)<rank(V). Also explain why Replacement and Union only collect set-indexed families.

Status: scaffold complete; prose and proof remain for step 5. Batch validation outcomes and next actions are in the final checkpoint below.

## Final scaffold checkpoint — 2026-09-07

Four pages contain 59 unique items, each with an explicit deps array: syntax A 19/B 5; hierarchy A 30/B 5. Both A pages remain below 60 without dropping required intermediate results; no split proposed. Coverage contains 101 harvested headings/results across eight source records (six distinct verified web URLs). Every included/inline target resolves to a scaffolded item, and no item ID collides with another current frontier-33 batch. All manifest deps are closed against published prerequisites or earlier items here; the in-memory plan validation checks their admissibility through the unchanged prerequisite graph.

### Axiom audit for step 5

Syntax word sets and the assignment/function spaces use Power Set and Separation; finite constructor closure uses natural recursion and Union. Set satisfaction recurses into the power set of the assignment set; Replacement collects term evaluations and the relevant recursive graphs. No Choice is used: signatures can be arbitrary sets, variables have a fixed natural order, and nonempty carriers supply a constant assignment from any given element. Definable-class relativization is a separate formula for each input formula, not one universe satisfaction predicate.

Predecessor cones and transitive closures use Replacement to collect finite iterates and Union to take their closure. Well-founded induction uses the supplied well-founded relation on each set cone, not Foundation for all sets. The compatible-attempt proof uses Separation for restrictions, Replacement for the uniquely specified predecessor attempts and their values, and Union to assemble them; it uses no arbitrary choices. Relation ranks use Replacement and ordinal suprema. Hierarchy successor stages use Power Set, limit stages Replacement and Union, and transitivity/growth use transfinite induction. These constructions precede and do not assume Foundation. Foundation is used exactly when membership is asserted well-founded on every transitive closure and hence when every set is assigned a membership rank and captured by a hierarchy stage. The converse uses hierarchy height, not the membership rank being justified. Rank-bounded class selection and H_kappa sethood use Separation inside an already constructed stage. Collapse images on set domains use Replacement; proper-class notation throughout is definable shorthand. Choice is required only in the expressly qualified hereditary-exhaustion corollary; the descending-sequence converse takes its own choice function as a hypothesis. The universe orientation does not assert existence of inaccessible cardinals.

### Validation results

- PASS (exit 0): `node tools/coverage-checklist.mjs research/frontier-33-batch-19.coverage.json --require-destination` — two pages, 101 harvested results, zero errors/warnings.
- PASS (exit 0): `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-19.pages.json` — 59 items, zero errors/warnings.
- PASS (exit 0): `node tools/validate-plan.mjs research/plan-spec.json` — existing plan, 844 populated pages; existing redundant-prerequisite warnings. This alone does not validate the new unmerged scaffold.
- PASS (exit 0): same validator on `/dev/stdin`, supplied by Python loading the current spec and replacing ONLY the four matching page records in memory with this manifest — 848 populated pages, 14,259 planned items, no hard errors. The spec file was not modified. This checks actual new dependency resolution, cycles, forward references, prefixes, size and prerequisite closure.
- BLOCKED (exit 1): required whole-run `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-*.pages.json` — 677 scoped items, six missing dependencies outside this batch. Exact failures are listed below.
- BLOCKED (exit 1): `node tools/url-sweep.mjs --coverage research/frontier-33-batch-19.coverage.json --recover --fail-on-dead --timeout-ms 1000 --out /dev/stdout` — six distinct URLs, zero command-line live, six DNS failures (`curl: (6) Could not resolve host`), zero recovered, zero suspect, one superseded URL. Each failure occurred in 6–10 ms, before the timeout. Recovery was attempted; with DNS unavailable its absence of snapshots is not evidence that the documents or archives are unavailable. All six final URLs were fetched and read via web PDF extraction. No source or harvested result was removed to suppress this gate.
- BLOCKED (exit 1): `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-19.coverage.json --stamp --timeout-sec 10` — all eight source records returned `EAI_AGAIN`, 0/8 verified, zero stamps written. No byte counts or hash stamps were fabricated from browser extraction.

Exact fetch-blocked source records: syntax — Moschovakis https://www.math.ucla.edu/~ynm/lectures/lnl.pdf, Weiss https://www.math.toronto.edu/~weiss/Set_Theory.pdf, Schlicht https://philippschlicht.github.io/teaching/files/mathematicallogic2021.pdf; hierarchy — Marks https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf, Weiss https://www.math.toronto.edu/~weiss/Set_Theory.pdf, Kozen/Ruozzi https://lmcs.episciences.org/1168/pdf, Shulman https://arxiv.org/pdf/0810.1279, Moschovakis https://www.math.ucla.edu/~ynm/lectures/lnl.pdf. Exact read ranges and result support remain in coverage.

The UCLA Marks original URL is preserved as original_url, and is not attributed the Berkeley edition's headings. The author-hosted Berkeley edition was independently re-read and indexed. A focused search for the original UCLA filename returned no results. No claim of identical editions or of archive absence is made.

### Whole-run blockers outside owned scope

- `thm-kernel-range-annihilator-identities` depends on unresolved `def-weak-star-topology`; owner artifact `research/frontier-33-batch-2.pages.json`.
- `thm-kernel-range-annihilator-identities` depends on unresolved `thm-bipolar-closure-for-linear-subspaces`; owner artifact `research/frontier-33-batch-2.pages.json`.
- `thm-regular-local-rings-are-domains-and-cohen-macaulay` depends on unresolved `def-cohen-macaulay-module-and-ring`; owner artifact `research/frontier-33-batch-7.pages.json`.
- `lem-polynomial-local-regularity-fibre-step` depends on unresolved `thm-euclidean-domain-implies-pid`; owner artifact `research/frontier-33-batch-7.pages.json`.
- `def-normal-noetherian-ring` depends on unresolved `def-integrally-closed-domain`; owner artifact `research/frontier-33-batch-7.pages.json`.
- `def-total-ring-of-fractions` depends on unresolved `def-localisation-of-a-commutative-ring`; owner artifact `research/frontier-33-batch-7.pages.json`.

No independent reviews or exact-hash gates existed in these initially empty batch artifacts; none was altered. Only the three authorized batch artifacts were written. This scaffold is mathematically scoped and passes its local structural checks, but is NOT declared ready while the required run-wide policy and source gates fail. Next action: rerun source-fetch stamping and URL recovery with working command-line DNS, and have the owners resolve the six run-wide missing dependencies. Then rerun the required gates before step 5. No published content has been authored by this dispatch.

## Step-3 fix pass — 2026-09-07

### H-1 — pushed back as outside batch 19

Disposition: no batch-19 scaffold repair is applicable. H-1 is the review's
already-applied batch-20 repair: it adds the published home
`compactness-in-metric-spaces` to
`weak-choice-principles-and-sierpinskis-theorem`, because four SET-6 items use
`def-dependent-choice`. Neither page nor item belongs to this batch.

Evidence: `research/frontier-33-alpha-h-step3-scaffold-review.md`, “H-1”,
identifies the affected artifact as `research/frontier-33-batch-20.pages.json`
and separately judges both batch-19 A pages sufficient. The SET-1/SET-4 design
continues to require only the published natural-number and
ordinal/transfinite-recursion routes. Batch 19's four records therefore retain
their verified prerequisites: `construction-of-the-natural-numbers`, its B
companion, `ordinals-and-transfinite-recursion`, and its B companion. The
underlying source harvest is unchanged; all eight recorded source records
re-fetched successfully through `node tools/source-fetch-check.mjs --coverage
research/frontier-33-batch-19.coverage.json --timeout-sec 30` (8/8), with the
exact URLs and locators retained in the coverage file.

Changed scaffold record: none. `frontier-33-batch-19.pages.json` and
`frontier-33-batch-19.coverage.json` are intentionally unchanged; adding the
batch-20 prerequisite here would be an unlicensed cross-batch edit rather than
a dependency repair.

Validation on the unchanged batch-19 records:

- `node tools/coverage-checklist.mjs research/frontier-33-batch-19.coverage.json --require-destination` — PASS: 2 pages, 101 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-*.pages.json` — PASS: 923 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items 60` — PASS: no item-level cycles, forward references, B-page dependencies, or unresolved ids among 844 populated planned pages; existing global redundant-prerequisite advisories remain nonfatal.
- The same validator on an in-memory `/dev/stdin` overlay replacing only the four batch-19 page records — PASS: 14,259 planned items and 848 populated planned pages, with no item-level cycle, forward reference, B-page dependency, unresolved id, or page-size error. The canonical plan was not written.

Next action: preserve the reviewed batch-19 manifest and coverage unchanged for
the later splice and authoring stages. No plan, published item, library page,
workflow-state, review, or batch-20 artifact was edited in this fix pass.

## Step-5 authoring

Current dispatch authorizes the 59 planned items, four draft pages, proof contracts and this report. Source sections reread through browser PDF extraction on 2026-09-07; terminal download failed DNS, so no new fetch stamps claimed. Existing scaffold reviews and manifests preserved. All new proofs are independently written explanations, not copied source proofs. Exact dependency statements read from current items. No judge records written.

### Authored `def-set-signature-and-finite-syntax-strings`

Claim and conventions: A set signature $L=(C,F,P,a)$ has pairwise disjoint sets of constants, function symbols and relation symbols, with $a:F\cup P\to\omega\setminus\{0\}$. Its alphabet $\Sigma_L$ is a tagged disjoint union of these sets, variables $v_i$ for $i\in\omega$, constructor tags $\mathsf{var},\mathsf{const},\mathsf{fun},\mathsf{rel},\mathsf{eq},\mathsf{neg},\mathsf{and},\mathsf{exists}$, and punctuation $\mathtt{(},\mathtt{)},\mathtt{,}$. Equality is a logical symbol.

A word is a function $w:n\to\Sigma_L$ for a natural number $n$, its length. The set $W_L$ of words is obtained by Separation inside $\mathcal P(\omega\times\Sigma_L)$. The empty word has domain $0$. Concatenation of $u:m\to\Sigma_L$ and $w:n\to\Sigma_L$ is the function on $m+n$ whose value at $i<m$ is $u(i)$ and whose value at $m+j$ is $w(j)$ for $j<n$. Signatures may be empty or uncountable; finite words here are set codes, not necessarily natural-number codes.

Source reread: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — 1B.1–1B.2, pp.4–5.. Dependencies: def-natural-numbers. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); no separate proof supplied or required for this definition/orientation. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `def-set-coded-terms-and-formulas`

Claim and conventions: Use the following fully delimited words over $W_L$. A leaf term is $(\mathsf{var},v_i)$ or $(\mathsf{const},c)$. A composite term is $(\mathsf{fun},f,t_1,\ldots,t_n)$ with $a(f)=n$. Atomic formulas are $(\mathsf{eq},s,t)$ and $(\mathsf{rel},R,t_1,\ldots,t_n)$, with $a(R)=n$. Formula constructors are $(\mathsf{neg},\phi)$, $(\mathsf{and},\phi,\psi)$ and $(\mathsf{exists},v_i,\phi)$. Parentheses and commas in these displays are actual punctuation tokens; the tag and symbol fields are single tokens, and subexpression fields are entire words.

Formally, start with the leaf terms and no formulas, repeatedly add all licensed constructors to the current pair of subsets of $W_L$, and take the two unions over $\omega$. The one-stage map is a function on the set $\mathcal P(W_L)^2$, so natural recursion applies. Each finite list of arguments appears by a common finite stage; hence the union is closed. Induction on stages puts it inside any constructor-closed pair containing the leaves. These are the least term and formula sets, denoted $\operatorname{Term}_L$ and $\operatorname{Form}_L$.

We print the familiar abbreviations $f(t_1,\ldots,t_n)$, $s=t$, $R(t_1,\ldots,t_n)$, $\neg\phi$, $\phi\land\psi$ and $\exists v_i\phi$. Define $\phi\lor\psi:=\neg(\neg\phi\land\neg\psi)$, $\phi\to\psi:=\neg(\phi\land\neg\psi)$ and $\forall v_i\phi:=\neg\exists v_i\neg\phi$. In the pure membership signature there is just one binary relation symbol $\in$ and every term is a variable.

Source reread: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — 1B.3; Appendix app3, pp.2–3.. Dependencies: def-set-signature-and-finite-syntax-strings, thm-recursion. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); no separate proof supplied or required for this definition/orientation. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `lem-unique-parsing-of-set-coded-syntax`

Claim and conventions: Every term and every formula in the delimited coding has exactly one outer constructor, with uniquely determined symbol fields and immediate subexpressions. Each immediate subexpression is shorter than its parent.

Source reread: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — 1B.4–1B.5 and x1.1–x1.2, pp.6,48.. Dependencies: def-set-coded-terms-and-formulas, thm-strong-induction. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `thm-structural-recursion-on-set-coded-syntax`

Claim and conventions: Constructor induction is valid for the term and formula sets: a property true of leaves and preserved by each licensed constructor holds of every expression. For a specified set $A$, supplied leaf values in $A$, and supplied operations into $A$ for all constructors on the appropriate finite powers of $A$, there is a unique evaluation $E:\operatorname{Term}_L\cup\operatorname{Form}_L\to A$ obeying those rules. The construction is uniform in the supplied parameters. Operations may also depend on the constructor's symbol fields.

Source reread: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — Appendix app3–app5, pp.2–3.. Dependencies: lem-unique-parsing-of-set-coded-syntax, thm-recursion, thm-strong-induction. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `def-free-variables-and-syntactic-substitution`

Claim and conventions: An occurrence is a token position in the parsed finite word. A variable occurrence is free when it is in a term field and no ancestor quantifier binds that variable. The variable field of a quantifier is a binder, not a free occurrence. Write $\operatorname{FV}(e)$ for the finite set of variables with free occurrences in $e$, and $\operatorname{Var}(e)$ for all variables appearing anywhere. A sentence is a formula with empty $\operatorname{FV}$.

The recursive rules are $\operatorname{FV}(v)=\{v\}$, $\operatorname{FV}(c)=\varnothing$, union over the arguments for function and atomic relation/equality expressions, unchanged under negation, union for conjunction, and $\operatorname{FV}(\exists y\psi)=\operatorname{FV}(\psi)\setminus\{y\}$. Structural recursion justifies these set-valued definitions, with targets $\mathcal P(\omega)$ after identifying variables with their indices.

Raw substitution $e[t/x]$ replaces just the free occurrences of variable $x$ by term $t$. On terms it replaces $x$ by $t$, keeps other variables and constants, and acts on each argument. It commutes with atoms and Boolean constructors. At $\exists y\psi$ it leaves the whole expression unchanged if $y=x$; otherwise it gives $\exists y(\psi[t/x])$.

The term $t$ is **free for $x$ in $e$** if, at every replaced occurrence, the path to the root crosses no binder for a member of $\operatorname{FV}(t)$. Thus at $\exists y\psi$ with $y\ne x$ and $x\in\operatorname{FV}(\psi)$ it requires both $y\notin\operatorname{FV}(t)$ and that $t$ be free for $x$ in $\psi$. If no free $x$ occurs, the condition is vacuous. Simultaneous substitution replaces the original free occurrences once; it does not perform substitutions inside inserted terms. It need not equal sequential substitution.

Source reread: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — 1B.6–1B.9, pp.7–9.. Dependencies: thm-structural-recursion-on-set-coded-syntax. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); no separate proof supplied or required for this definition/orientation. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `def-set-structures-and-variable-assignments`

Claim and conventions: An $L$-structure $\mathcal M$ has a nonempty set carrier $M$, values $c^{\mathcal M}\in M$, total functions $f^{\mathcal M}:M^{a(f)}\to M$, and relations $R^{\mathcal M}\subseteq M^{a(R)}$, supplied as set-indexed interpretation data. Logical equality is literal equality on $M$. An assignment is a function $s:\omega\to M$, also written $s(v_i)=s(i)$. The update $s[x:=b]$ changes only the value at variable $x$ to $b\in M$.

For structures in the same signature a homomorphism $h:M\to N$ preserves constants and function values and takes related tuples to related tuples. It is strong if it also reflects every nonlogical relation. An embedding is an injective strong homomorphism; an isomorphism is a surjective embedding. A substructure has a nonempty subcarrier containing all constants, closed under all functions, with functions and relations restricted from the larger structure. A reduct keeps the carrier and only the interpretations for a smaller signature; an expansion is the reverse relationship. All finite powers and the assignment set $M^\omega$ are sets.

Source reread: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — 1C.1–1C.5, 1C.11, pp.9–14.. Dependencies: def-set-signature-and-finite-syntax-strings. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); no separate proof supplied or required for this definition/orientation. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `def-term-denotation-in-a-set-structure`

Claim and conventions: For an $L$-structure $\mathcal M$ and assignment $s\in M^\omega$, define $\llbracket v_i\rrbracket_s=s(i)$, $\llbracket c\rrbracket_s=c^{\mathcal M}$ and

$$\llbracket f(t_1,\ldots,t_n)\rrbracket_s=f^{\mathcal M}(\llbracket t_1\rrbracket_s,\ldots,\llbracket t_n\rrbracket_s).$$

This is a simultaneous definition for all assignments: recurse on terms into the set $M^{(M^\omega)}$ of functions from assignments to $M$. Variable leaves are projections, constant leaves are constant maps, and each function operation acts pointwise. Structural recursion gives a unique evaluation. The operations are total because the interpreted functions are total. Superscripts $\mathcal M$ on brackets will distinguish structures when needed.

Source reread: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — 1C.7, p.11.. Dependencies: def-set-structures-and-variable-assignments, thm-structural-recursion-on-set-coded-syntax. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); no separate proof supplied or required for this definition/orientation. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `thm-set-structure-satisfaction-recursion`

Claim and conventions: For every set signature $L$ and $L$-structure $\mathcal M$ there is a unique set $\operatorname{Sat}_{\mathcal M}\subseteq\operatorname{Form}_L\times M^\omega$. Writing $\mathcal M,s\models\phi$ for membership, its clauses are

$$\mathcal M,s\models u=v\iff\llbracket u\rrbracket_s=\llbracket v\rrbracket_s,$$
$$\mathcal M,s\models R(t_1,\ldots,t_n)\iff(\llbracket t_1\rrbracket_s,\ldots,\llbracket t_n\rrbracket_s)\in R^{\mathcal M},$$
$$\mathcal M,s\models\neg\phi\iff\text{not }\mathcal M,s\models\phi,$$
$$\mathcal M,s\models\phi\land\psi\iff(\mathcal M,s\models\phi\text{ and }\mathcal M,s\models\psi),$$
$$\mathcal M,s\models\exists x\phi\iff\exists b\in M\ (\mathcal M,s[x:=b]\models\phi).$$

The set is uniformly first-order definable from $L$ and the structure data.

Source reread: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — 1C.7–1C.8, pp.11–12; Appendix app4.. Dependencies: def-term-denotation-in-a-set-structure. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `lem-satisfaction-coincidence`

Claim and conventions: Assignments agreeing on $\operatorname{FV}(e)$ give equal denotations when $e$ is a term and the same truth value when $e$ is a formula. Also, passage to a reduct preserves denotations and satisfaction for expressions in the smaller signature. In particular sentence truth is independent of assignment; the truth of a formula can be specified by any tuple assigning all its free variables.

Source reread: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — 1C.9, p.13.. Dependencies: thm-set-structure-satisfaction-recursion, def-free-variables-and-syntactic-substitution. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `lem-term-substitution-denotation`

Claim and conventions: For any terms $u,t$, variable $x$, structure $\mathcal M$ and assignment $s$, put $b=\llbracket t\rrbracket_s$. Then $\llbracket u[t/x]\rrbracket_s=\llbracket u\rrbracket_{s[x:=b]}$.

Source reread: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — x1.3.1, p.48 (term case).. Dependencies: def-term-denotation-in-a-set-structure, def-free-variables-and-syntactic-substitution. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `lem-formula-substitution-satisfaction`

Claim and conventions: If $t$ is free for $x$ in $\phi$, then for every structure $\mathcal M$ and assignment $s$,

$$\mathcal M,s\models\phi[t/x]\iff\mathcal M,s[x:=\llbracket t\rrbracket_s]\models\phi.$$

Source reread: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — x1.3.1, p.48 (formula case).. Dependencies: lem-term-substitution-denotation, lem-satisfaction-coincidence. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `lem-fresh-bound-variable-renaming`

Claim and conventions: If $z\ne y$ is absent from $\operatorname{Var}(\psi)$, then $z$ is free for $y$ in $\psi$, and $\exists y\psi$ and $\exists z(\psi[z/y])$ have the same truth in every structure and assignment. Here raw substitution replaces only occurrences free in $\psi$, hence only those bound by the displayed outer binder. A least fresh variable exists outside any specified finite set of variables.

Source reread: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 1 pp.16–18.. Dependencies: lem-formula-substitution-satisfaction. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `prop-capture-avoiding-substitution`

Claim and conventions: There is a canonical total capture-avoiding substitution $\phi\langle t/x\rangle$ on formulas, obtained by renaming obstructing binders using least unused variable indices. It replaces the original free occurrences of $x$ and satisfies

$$\mathcal M,s\models\phi\langle t/x\rangle\iff\mathcal M,s[x:=\llbracket t\rrbracket_s]\models\phi.$$

Canonicity refers to the specified coding and traversal, not to literal invariance under other fresh-variable conventions.

Source reread: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 1 pp.17–18.. Dependencies: lem-fresh-bound-variable-renaming. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `cor-semantic-equivalence-under-substitution`

Claim and conventions: If $\phi$ and $\psi$ have the same truth at every assignment in every $L$-structure, then so do $\phi\langle t/x\rangle$ and $\psi\langle t/x\rangle$. Moreover, in any fixed structure and assignment, terms $t,u$ of equal value give the same truth for $\phi\langle t/x\rangle$ and $\phi\langle u/x\rangle$.

Source reread: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — x1.3.3 p.48; Weiss chapter 1 Equality Principle p.18.. Dependencies: prop-capture-avoiding-substitution. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `def-theories-models-and-semantic-consequence`

Claim and conventions: An $L$-theory $T$ is a set of $L$-sentences, without any requirement that it be deductively closed. A structure $\mathcal M$ is a model of $T$ if it satisfies every sentence of $T$. By coincidence this does not depend on the chosen assignment. Write $T\models\phi$ if for every set $L$-structure $\mathcal M$ which is a model of $T$ and every assignment $s$, one has $\mathcal M,s\models\phi$. Thus if $T$ has no models the consequence condition is vacuous.

Validity means truth in every structure at every assignment; semantic equivalence means equality of truth under all such choices. The universal closure of $\phi$ binds its finitely many free variables in increasing index order (and is $\phi$ if none occur). Repeated use of the universal truth clause shows that a structure satisfies this closure exactly when $\phi$ holds at every assignment. Quantification over all set structures is a first-order class description, not a set of all structures.

Source reread: https://philippschlicht.github.io/teaching/files/mathematicallogic2021.pdf — 1.4 opening and Definition 1.4.1 p.10; Moschovakis 1C.10 p.13.. Dependencies: lem-satisfaction-coincidence. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); no separate proof supplied or required for this definition/orientation. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `prop-isomorphism-invariance-of-satisfaction`

Claim and conventions: For any homomorphism $h:\mathcal M\to\mathcal N$, term $t$ and assignment $s$, $\llbracket t\rrbracket^{\mathcal N}_{h\circ s}=h(\llbracket t\rrbracket^{\mathcal M}_s)$. If $h$ is a surjective strong homomorphism, then $\mathcal M,s\models\phi$ iff $\mathcal N,h\circ s\models\phi$ for every equality-free formula $\phi$. If $h$ is an isomorphism, the equivalence holds for all formulas, including equality.

Source reread: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — 1C.12(a)–(c), p.14.. Dependencies: thm-set-structure-satisfaction-recursion, def-set-structures-and-variable-assignments. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `def-relativization-to-a-definable-class`

Claim and conventions: Fix a pure membership formula $\delta(z,\vec p)$ defining a class $C=\{z:\delta(z,\vec p)\}$. This is eliminable notation for a predicate, not a class object. For a fixed pure membership formula $\phi$, first rename its binders away from the parameter variables $\vec p$. Define $\phi^C$ by keeping atoms, commuting with Boolean constructors, and setting

$$(\exists x\psi)^C=\exists x(\delta(x,\vec p)\land\psi^C),\qquad (\forall x\psi)^C=\forall x(\delta(x,\vec p)\to\psi^C).$$

Copies of $\delta(x,\vec p)$ are inserted by capture-avoiding substitution and fresh internal bound variables. In the set case $C=M$ use the predicate $z\in M$, with a fresh parameter variable for $M$. This operation is meaningful even for an empty class. It does not make the empty class an admitted structure: carriers of structures remain nonempty. For proper classes, evaluation of $\phi^C$ means a separate ambient formula for each fixed $\phi$, not a uniform universe satisfaction relation.

Source reread: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 1 pp.19–21.. Dependencies: prop-capture-avoiding-substitution. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); no separate proof supplied or required for this definition/orientation. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `thm-relativization-and-set-satisfaction`

Claim and conventions: For every nonempty set $M$, let $\mathcal M=(M,\in\!\restriction M^2)$ be its membership structure. For every fixed pure membership formula $\phi$ and assignment $s:\omega\to M$, its set satisfaction agrees with the ambient evaluation of $\phi^M$ at those free-variable values and parameter $M$. No transitivity of $M$ is required. For a definable proper class the corresponding relativized expression is only a formula-by-formula schema.

Source reread: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 1 pp.20–21; chapter 11 opening p.103.. Dependencies: def-relativization-to-a-definable-class, thm-set-structure-satisfaction-recursion. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `rem-tarski-truth-definition-interface`

Claim and conventions: Set satisfaction and relativization must be distinguished. Set satisfaction is uniform in the code of a formula and the data of a set structure. Relativization to a definable proper class supplies an ambient formula separately for each fixed input formula. Writing $V\models\phi(\vec a)$ in this latter sense merely abbreviates $\phi(\vec a)$.

For the truth-with-parameters interface, a proposed pure membership formula $T(w,x,y,z)$ and a set parameter $t$ would have to satisfy, for every pure membership formula $\psi$ with free variables among $x,y$ and all sets $r,s$, the biconditional $\psi(r,s)\leftrightarrow T(\ulcorner\psi\urcorner,r,s,t)$. Here $\ulcorner\psi\urcorner$ is its finite set code. This is a scheme of requirements, not a single first-order assertion quantifying over ambient truths. The companion refutation tests this exact scheme by one formula built from the proposed $T$. No sentence-only arithmetized diagonal lemma or representability theorem is asserted here.

Source reread: https://philippschlicht.github.io/teaching/files/mathematicallogic2021.pdf — 2.4 pp.37–38.. Dependencies: thm-relativization-and-set-satisfaction. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); no separate proof supplied or required for this definition/orientation. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `ex-membership-formula-parsing-and-assignment`

Claim and conventions: In the membership structure on $M=\{0,1\}$, where $0=\varnothing$ and $1=\{0\}$, let $\phi=\exists v_1(v_1\in v_0)$. Then $\operatorname{FV}(\phi)=\{v_0\}$. It is false when $s(v_0)=0$ and true when $s(v_0)=1$.

Source reread: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 1 pp.17–18, nonempty-set formula.. Dependencies: lem-satisfaction-coincidence. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `cex-variable-capture-changes-satisfaction`

Claim and conventions: False claim: replacing free occurrences by a variable without first avoiding capture always has the intended substitution semantics. In $\phi=\exists v_2(v_2\in v_1)$, naively substitute $v_2$ for $v_1$.

Source reread: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 1 worked substitution pp.17–18.. Dependencies: prop-capture-avoiding-substitution. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `ex-relativizing-to-the-empty-class`

Claim and conventions: For $C=\{z:z\ne z\}$, the relativization of $\exists x(x=x)$ is false and that of $\forall x(x=x)$ is true. The empty class is not an admitted structure.

Source reread: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 1 pp.20–21.. Dependencies: def-relativization-to-a-definable-class. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `cex-truth-at-one-assignment-does-not-survive-substitution`

Claim and conventions: False claim: if two formulas agree at one assignment, they still agree there after the same free-for substitution. Use the two-element equality structure $M=\{0,1\}$ with constant $c^{\mathcal M}=1$, distinct variables $x,y$, and $s(x)=s(y)=0$.

Source reread: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — x1.3.2 p.48, adapted from arithmetic to a finite structure.. Dependencies: lem-formula-substitution-satisfaction. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `fs-v-has-a-definable-truth-predicate`

Claim and conventions: False statement, in the truth-with-parameters sense: there is a pure membership formula $T(w,x,y,z)$ and a set $t$ such that for every pure membership formula $\psi$ with free variables among $x,y$ and every pair of sets $r,s$,

$$\psi(r,s)\iff T(\ulcorner\psi\urcorner,r,s,t).$$

The displayed universal demand is a scheme of biconditionals for the proposed $T,t$.

Source reread: https://philippschlicht.github.io/teaching/files/mathematicallogic2021.pdf — Theorem 2.4.1 and complete proof pp.37–38.. Dependencies: rem-tarski-truth-definition-interface, prop-capture-avoiding-substitution. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `def-well-founded-setlike-relations`

Claim and conventions: Let $X$ be a definable class and $R$ a definable binary relation on $X$, with fixed set parameters. Write $\operatorname{pred}_R(x)=\{y\in X:yRx\}$. The relation is setlike if this predecessor collection is a set for every $x\in X$. It is well-founded if every nonempty set $A\subseteq X$ has an $R$-minimal member $x$, meaning $\operatorname{pred}_R(x)\cap A=\varnothing$.

These are schemes in first-order set theory: a class is notation for a defining formula. No transitivity or totality of $R$ is required. Every relation on a set is setlike. An ordinal carries a well-founded membership relation by its definition; ambient Foundation does not make every arbitrary relation well-founded. All results concerning a supplied well-founded setlike relation are valid in ZF without Foundation unless stated otherwise.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 6.1 and 6.3 p.30.. Dependencies: def-ordinal. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); no separate proof supplied or required for this definition/orientation. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `def-accessible-pointed-membership-graphs`

Claim and conventions: An accessible pointed graph consists of a set $X$ of nodes, a root $r\in X$, and a relation $R\subseteq X^2$. Draw an arrow $x\to y$ precisely when $yRx$. Accessibility means that for every $x\in X$ there are $n\in\omega$ and a function $p:n+1\to X$ with $p(0)=r$, $p(n)=x$, and $p(i+1)Rp(i)$ for $i<n$. The path of length zero reaches the root.

A decoration is a set function $d$ on $X$ such that $d(x)=\{d(y):yRx\}$ for each node. A well-founded graph means that $R$ has the minimal-element property, not an unqualified no-infinite-path characterization. Extensionality is not part of the graph definition. No axiom of anti-foundation is assumed.

Source reread: https://lmcs.episciences.org/1168/pdf — section 6 opening p.10, APG definition.. Dependencies: def-well-founded-setlike-relations. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); no separate proof supplied or required for this definition/orientation. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `lem-finite-predecessor-closure-is-a-set`

Claim and conventions: For every setlike relation $R$ on a definable class $X$ and $x\in X$, there is a least predecessor-closed set $C(x)\subseteq X$ containing $x$. It consists exactly of nodes reachable from $x$ by a finite sequence of predecessor steps. Well-foundedness is not needed.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — Lemma 6.4 p.30.. Dependencies: def-well-founded-setlike-relations, thm-transfinite-recursion. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `thm-induction-on-well-founded-relations`

Claim and conventions: Let $R$ be well-founded and setlike on a definable class $X$. If a definable property $P$ is progressive, meaning that for every $x\in X$, $[\forall yRx\ P(y)]\Rightarrow P(x)$, then $P(x)$ holds for all $x\in X$. Set parameters in $P$ are allowed. This holds without Foundation.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — Lemma 6.2 and Theorem 6.5 p.30.. Dependencies: lem-finite-predecessor-closure-is-a-set. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `lem-compatible-well-founded-recursion-attempts`

Claim and conventions: Let $R$ be well-founded and setlike on $X$, and let a definable rule $G(x,h)$ assign a unique set whenever $x\in X$ and $h$ is a set function on $\operatorname{pred}_R(x)$. An attempt is a set function $f$ on a predecessor-closed set $D\subseteq X$ satisfying $f(z)=G(z,f\restriction\operatorname{pred}_R(z))$ for every $z\in D$.

Any two attempts agree on the intersection of their domains. If for every $yRx$ an attempt exists on the canonical cone $C(y)$, there is a unique attempt on $C(x)$.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — Theorem 6.6 proof p.31.. Dependencies: thm-induction-on-well-founded-relations. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `thm-recursion-on-well-founded-setlike-relations`

Claim and conventions: In ZF without Foundation, let $R$ be a well-founded setlike relation on a definable class $X$. For any definable rule assigning a unique set $G(x,h)$ to every $x\in X$ and every set function $h$ on $\operatorname{pred}_R(x)$, there is a unique definable function $F$ on $X$ satisfying

$$F(x)=G(x,F\restriction\operatorname{pred}_R(x)).$$

Every restriction of $F$ to a set subset of $X$ is a set function. Parameters in $R,X,G$ are allowed; the assertion is a schema, not quantification over class objects.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — Theorem 6.6 p.31.. Dependencies: lem-compatible-well-founded-recursion-attempts. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `def-transitive-closure-of-a-set`

Claim and conventions: For a set $a$, form $a_0=a$ and $a_{n+1}=a_n\cup\bigcup a_n$ by recursion on $\omega$. Set

$$\operatorname{TC}(a)=\bigcup_{n\in\omega}a_n.$$

This is a set by the same recursion, Replacement and Union construction as finite predecessor closure, now starting from $a$ rather than a singleton and using membership as the setlike relation. The convention is the least transitive **superset** of $a$; to include $a$ itself as an element, use $\operatorname{TC}(\{a\})$. This construction does not assume Foundation.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 7.5 p.34; Weiss p.97.. Dependencies: lem-finite-predecessor-closure-is-a-set. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); no separate proof supplied or required for this definition/orientation. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `prop-transitive-closure-minimality`

Claim and conventions: For every set $a$, $\operatorname{TC}(a)$ is transitive, contains $a$ as a subset, and is contained in every transitive set $T$ with $a\subseteq T$. Moreover $a\subseteq b$ implies $\operatorname{TC}(a)\subseteq\operatorname{TC}(b)$, and $\operatorname{TC}(\operatorname{TC}(a))=\operatorname{TC}(a)$. In particular $a\in\operatorname{TC}(\{a\})$.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 7.6 and 7.9 pp.34–35.. Dependencies: def-transitive-closure-of-a-set. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `def-rank-of-a-well-founded-relation`

Claim and conventions: For a well-founded setlike relation $R$ on $X$, its ordinal rank is the definable function determined by

$$\rho_R(x)=\sup\{\rho_R(y)+1:yRx\}=\bigcup\{\rho_R(y)\cup\{\rho_R(y)\}:yRx\}.$$

To justify the definition, apply well-founded recursion to the total rule which returns this union if every value of its input function is an ordinal and returns $0$ otherwise. Well-founded induction shows that every actual value is an ordinal: predecessor values are ordinals by the induction hypothesis, their successors are ordinals, Replacement collects them, and their union is an ordinal, including the empty union $0$. Thus the default case never occurs. For $yRx$ the rank equation gives $\rho_R(y)<\rho_R(x)$. The definition requires no ambient Foundation for a supplied well-founded $R$.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 6.7 p.31.. Dependencies: thm-recursion-on-well-founded-setlike-relations, lem-ordinal-basics. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); no separate proof supplied or required for this definition/orientation. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `prop-ordinal-ranking-characterizes-well-foundedness`

Claim and conventions: A definable setlike relation $R$ on $X$ is well-founded if and only if there is a definable ordinal-valued function $r$ on $X$ with $yRx\Rightarrow r(y)<r(x)$. For well-founded $R$, its rank $\rho_R$ is pointwise least among such functions. No choice or Foundation is needed.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — Exercise 6.8 p.31.. Dependencies: def-rank-of-a-well-founded-relation. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `prop-well-foundedness-and-descending-sequences`

Claim and conventions: A well-founded relation $R$ on a definable class $X$ admits no sequence $f:\omega\to X$ with $f(n+1)Rf(n)$ for every $n$. Conversely, if $X$ is a set supplied with a choice function $c$ on all its nonempty subsets, absence of such a sequence implies well-foundedness. The converse is asserted with this extra hypothesis, not in bare ZF.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — Exercise 6.9 p.31 (choice made explicit).. Dependencies: thm-induction-on-well-founded-relations, thm-transfinite-recursion. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `def-cumulative-hierarchy-stages`

Claim and conventions: In ZF without Foundation define the cumulative hierarchy by

$$V_0=\varnothing,\qquad V_{\alpha+1}=\mathcal P(V_\alpha),\qquad V_\lambda=\bigcup_{\beta<\lambda}V_\beta\quad(\lambda\text{ a nonzero limit ordinal}).$$

For each ordinal $\theta$, use the set well-order recursion schema on $\theta+1$. On histories of domain $0$ return $\varnothing$; on domain $\beta+1$ return the power set of the last value; on nonzero limit domains return the union of the range. Each is a unique set. Recursions on different ordinal intervals agree on overlaps by the uniqueness clause applied to the smaller interval. Hence the definition of $V_\alpha$ as the value at $\alpha$ is uniform and independent of the chosen interval. Power Set is used at successors and Replacement and Union at limits. The notation $\langle V_\alpha:\alpha\in\operatorname{Ord}\rangle$ denotes a definable class function, not a set sequence.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 7.1 p.34.. Dependencies: thm-transfinite-recursion, lem-ordinal-basics, def-limit-ordinal. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); no separate proof supplied or required for this definition/orientation. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `prop-cumulative-hierarchy-transitivity-and-growth`

Claim and conventions: In ZF without Foundation, every $V_\alpha$ is transitive and $\alpha\le\beta$ implies $V_\alpha\subseteq V_\beta$. Also $V_\alpha\cap\operatorname{Ord}=\alpha$, and both $\alpha$ and $V_\alpha$ belong to $V_{\alpha+1}\setminus V_\alpha$.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 7.2 p.34.. Dependencies: def-cumulative-hierarchy-stages, thm-transfinite-induction. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `thm-foundation-equivalent-to-hierarchy-exhaustion`

Claim and conventions: Over ZF without Foundation the following are equivalent: (i) every nonempty set $a$ has a member disjoint from $a$ (Foundation); (ii) the membership induction schema, that every definable progressive property holds of every set; (iii) every set belongs to some cumulative-hierarchy stage. All schemas allow set parameters.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 7.7 pp.34–35; Weiss Theorem 38 p.98.. Dependencies: prop-cumulative-hierarchy-transitivity-and-growth, prop-transitive-closure-minimality, thm-induction-on-well-founded-relations. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `def-membership-rank-of-a-set`

Claim and conventions: Now assume ZF, including Foundation. Membership on the universe is well-founded and setlike, so its ordinal rank is defined for every set. Write

$$\operatorname{rank}(x)=\sup\{\operatorname{rank}(y)+1:y\in x\}.$$

The empty supremum is $0$, so $\operatorname{rank}(\varnothing)=0$. If $y\in x$, then $\operatorname{rank}(y)<\operatorname{rank}(x)$. This is the Foundation-dependent special case of relation rank. The earlier construction of $V_\alpha$ did not require Foundation.

Source reread: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 10 p.99.. Dependencies: def-rank-of-a-well-founded-relation, thm-foundation-equivalent-to-hierarchy-exhaustion. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); no separate proof supplied or required for this definition/orientation. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `thm-membership-rank-and-hierarchy-levels`

Claim and conventions: In ZF, for every set $x$ and ordinal $\alpha$,

$$x\in V_\alpha\iff\operatorname{rank}(x)<\alpha,\qquad x\subseteq V_\alpha\iff\operatorname{rank}(x)\le\alpha.$$

Thus $\operatorname{rank}(x)$ is the least $\alpha$ with $x\subseteq V_\alpha$, and $\operatorname{rank}(x)=\alpha$ iff $x\in V_{\alpha+1}\setminus V_\alpha$.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 7.3 p.34; Weiss Exercise 33 p.100.. Dependencies: def-membership-rank-of-a-set, prop-cumulative-hierarchy-transitivity-and-growth. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `cor-universe-is-the-class-union-of-its-stages`

Claim and conventions: In ZF every set $x$ belongs to $V_{\operatorname{rank}(x)+1}$. Consequently $V=\bigcup_{\alpha\in\operatorname{Ord}}V_\alpha$ in the class sense: every set lies in a stage. This is not a union indexed by a set of all ordinals.

Source reread: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — Theorem 40 p.100.. Dependencies: thm-membership-rank-and-hierarchy-levels. Statement provenance: literature-derived (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `prop-ranks-of-ordinals-and-hierarchy-stages`

Claim and conventions: In ZF, for every ordinal $\alpha$, $\operatorname{rank}(\alpha)=\alpha$ and $\operatorname{rank}(V_\alpha)=\alpha$.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 7.4 p.34.. Dependencies: thm-membership-rank-and-hierarchy-levels. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `def-extensional-relation-and-collapse-map`

Claim and conventions: A setlike relation $R$ on $X$ is extensional when $\operatorname{pred}_R(x)=\operatorname{pred}_R(y)$ implies $x=y$ for $x,y\in X$. If $R$ is also well-founded, its collapse map is the unique definable function

$$\pi(x)=\{\pi(y):yRx\}.$$

Existence and uniqueness follow from well-founded recursion with $G(x,h)=\operatorname{ran}(h)$, a set by Replacement. A collapse map is defined even without extensionality; injectivity is a further conclusion requiring extensionality. The construction for a supplied well-founded relation uses no ambient Foundation.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 6.10–6.11 pp.31–32.. Dependencies: thm-recursion-on-well-founded-setlike-relations. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); no separate proof supplied or required for this definition/orientation. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `lem-extensional-collapse-is-injective`

Claim and conventions: For a well-founded setlike extensional relation $R$ on a definable class $X$, its collapse map $\pi$ is injective.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 6.11 proof p.32.. Dependencies: def-extensional-relation-and-collapse-map, def-rank-of-a-well-founded-relation. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `thm-mostowski-collapse-for-extensional-relations`

Claim and conventions: Every well-founded setlike extensional relation $R$ on a definable class $X$ is isomorphic to membership on a unique transitive definable class $Y$, by a unique definable isomorphism $\pi:X\to Y$. For a set domain $X$, the isomorphism and its image are sets. This holds without ambient Foundation.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — Theorem 6.11 p.32.. Dependencies: lem-extensional-collapse-is-injective. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `cor-well-founded-pointed-graphs-have-unique-decorations`

Claim and conventions: Every well-founded accessible pointed graph $(X,R,r)$ has a unique decoration $d$. Its range is $\operatorname{TC}(\{d(r)\})$. If $R$ is extensional, $d$ is the unique isomorphism from $(X,R)$ onto membership on that transitive set.

Source reread: https://lmcs.episciences.org/1168/pdf — section 6 APG paragraph p.10; Marks 6.11 p.32.. Dependencies: def-accessible-pointed-membership-graphs, def-extensional-relation-and-collapse-map, prop-transitive-closure-minimality, thm-mostowski-collapse-for-extensional-relations. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `prop-minimum-rank-selection-and-collection`

Claim and conventions: In ZF every nonempty definable class $C$ has a least member-rank $\alpha$, and $\{x\in C:\operatorname{rank}(x)=\alpha\}$ is a nonempty set. Replacement yields the Collection schema: if $\forall x\in a\ \exists y\ \phi(x,y)$, a set $b$ exists with $\forall x\in a\ \exists y\in b\ \phi(x,y)$. Conversely, Separation and Collection yield Replacement for functional formulas.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — section 7 Scott trick and Exercise 7.8 p.35.. Dependencies: thm-membership-rank-and-hierarchy-levels. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `def-hereditary-size-and-h-kappa`

Claim and conventions: Let $\kappa$ be an infinite initial ordinal. In ZF set

$$H_\kappa=\{x:\exists\lambda<\kappa\ \exists j\ (j:\operatorname{TC}(\{x\})\hookrightarrow\lambda)\}.$$

This initially defines a class. Its root-inclusive transitive closure contains $x$ as an element. When $\operatorname{TC}(\{x\})$ is well-orderable its hereditary cardinality means the least ordinal equinumerous with it; under Choice this exists for every set. The injection formulation above is used without Choice.

For infinite $\kappa$, replacing $\operatorname{TC}(\{x\})$ by $\operatorname{TC}(x)$ gives the same class. Indeed $\operatorname{TC}(\{x\})=\{x\}\cup\operatorname{TC}(x)$ by the finite-stage formula. Adding one point to a set injecting into finite $\lambda$ gives an injection into $\lambda+1<\kappa$; for infinite $\lambda$, keep indices at least $\omega$, shift natural indices by one, and use index zero for the added point, obtaining an injection into $\lambda$. Restriction gives the converse. We retain the root-inclusive convention throughout.

Source reread: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 10 pp.100–101 (explicit choice-free adaptation).. Dependencies: prop-transitive-closure-minimality, def-cardinal. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); no separate proof supplied or required for this definition/orientation. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `lem-small-transitive-sets-have-small-ranks`

Claim and conventions: In ZF, if a transitive set $T$ injects into an ordinal $\lambda<\kappa$, where $\kappa$ is an infinite initial ordinal, then $\operatorname{rank}(t)<\kappa$ for every $t\in T$. No regularity or Choice is assumed.

Source reread: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — Exercise 34(2), p.101.. Dependencies: def-hereditary-size-and-h-kappa, def-membership-rank-of-a-set. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `thm-h-kappa-is-a-transitive-set`

Claim and conventions: In ZF, for every infinite initial ordinal $\kappa$, $H_\kappa$ is a transitive set and $H_\kappa\subseteq V_\kappa$. For infinite initial ordinals $\kappa\le\mu$, one has $H_\kappa\subseteq H_\mu$.

Source reread: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — Theorem 41(1), Exercise 34(1)–(3), p.101.. Dependencies: lem-small-transitive-sets-have-small-ranks, thm-membership-rank-and-hierarchy-levels. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `cor-hereditary-size-exhausts-the-universe-under-choice`

Claim and conventions: Assume ZFC. For every set $x$ there is an infinite initial ordinal $\kappa$ with $x\in H_\kappa$. Hence the hereditary-size stages exhaust the universe in the class sense under Choice.

Source reread: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — Theorem 41(2), p.101.. Dependencies: thm-h-kappa-is-a-transitive-set, thm-well-ordering-theorem, thm-hartogs. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `prop-hereditarily-finite-sets-are-v-omega`

Claim and conventions: In ZF, $H_\omega=V_\omega$. These are exactly the sets whose root-inclusive transitive closure is finite, called hereditarily finite sets.

Source reread: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — Theorem 42, omega case pp.101–102.. Dependencies: thm-h-kappa-is-a-transitive-set, def-cumulative-hierarchy-stages. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `def-grothendieck-universe-closure-convention`

Claim and conventions: A Grothendieck universe, in the closure convention used here, is a nonempty transitive set $U$ such that: if $x,y\in U$ then $\{x,y\}\in U$; if $x\in U$ then $\mathcal P(x)\in U$; and if $I\in U$ and $f$ is any set function on $I$ with $f(i)\in U$ for every $i\in I$, then $\bigcup_{i\in I}f(i)\in U$. The indexing function need not itself belong to $U$.

The additional condition $\omega\in U$ is imposed only when explicitly stated. This is a definition by closure conditions, not an assertion that a universe containing any prescribed set exists. Transitivity means that every member of a member of $U$ is itself a member of $U$.

Source reread: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 10 p.102; Shulman p.16.. Dependencies: prop-transitive-closure-minimality. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); no separate proof supplied or required for this definition/orientation. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `rem-grothendieck-universe-orientation`

Claim and conventions: For a fixed universe $U$, “$U$-small” means being a member of $U$. It is relative to that specified set. Cardinal size alone does not determine it: a singleton can contain an ordinal of arbitrarily high rank, since $\operatorname{rank}(\{\alpha\})=\alpha+1$ follows immediately from the rank equation and $\operatorname{rank}(\alpha)=\alpha$.

Our closure convention does not impose $\omega\in U$. For example, $V_\omega$ satisfies the closure conditions: its members lie in finite stages; pairs and power sets raise the stage by only finitely much; and a family indexed by one of its finite members has a finite bound on the stages of its values, so its union again lies in a finite stage. It is nonempty and transitive, but $\omega\notin V_\omega$ by the ordinal-intersection formula. This explains why an uncountable-inaccessible characterization needs an additional infinity convention. Universe existence axioms and large-cardinal characterizations are not asserted here.

Source reread: https://arxiv.org/pdf/0810.1279 — p.16 paragraphs on universes and relative smallness.. Dependencies: def-grothendieck-universe-closure-convention, prop-ranks-of-ordinals-and-hierarchy-stages. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); no separate proof supplied or required for this definition/orientation. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `ex-first-hierarchy-stages-and-ranks`

Claim and conventions: The first hierarchy stages are $V_0=\varnothing$, $V_1=\{\varnothing\}$ and $V_2=\{\varnothing,\{\varnothing\}\}$. Their ranks are respectively $0,1,2$. Also $\operatorname{rank}(\{\{\varnothing\}\})=2$, even though this last singleton is not the ordinal $2$.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 7.1 and 7.4 p.34.. Dependencies: prop-ranks-of-ordinals-and-hierarchy-stages. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `ex-collapse-of-a-nontransitive-well-founded-relation`

Claim and conventions: Take distinct nodes $a,b,c$ and $R=\{(a,b),(b,c)\}$. This relation is well-founded and extensional but not transitive. Its collapse is $a\mapsto\varnothing$, $b\mapsto\{\varnothing\}$, $c\mapsto\{\{\varnothing\}\}$.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 6.11 and Figure 6 p.32, reduced worked instance.. Dependencies: thm-mostowski-collapse-for-extensional-relations. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `cex-extensionality-is-needed-for-injective-collapse`

Claim and conventions: False claim: every well-founded relation has an injective collapse. Let $X=\{a,b\}$ with $a\ne b$ and $R=\varnothing$.

Source reread: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf — 6.10–6.11 pp.31–32, sharpness instance.. Dependencies: def-extensional-relation-and-collapse-map. Statement provenance: ai-generated (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `ex-singleton-rank-and-hereditary-size`

Claim and conventions: For every infinite ordinal $\alpha$, the singleton $s=\{\alpha\}$ has rank $\alpha+1$ although it has exactly one element. Its root-inclusive closure $\operatorname{TC}(\{s\})$ contains every ordinal below $\alpha$. In particular when $\alpha=\kappa$ is an infinite initial ordinal, $s\notin H_\kappa$.

Source reread: https://www.math.toronto.edu/~weiss/Set_Theory.pdf — chapter 10 cardinality example p.101; Shulman p.16 singleton example.. Dependencies: def-hereditary-size-and-h-kappa, prop-ranks-of-ordinals-and-hierarchy-stages. Statement provenance: ai-altered (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### Authored `fs-v-is-a-set`

Claim and conventions: False statement: the class $V$ of all sets is itself a set. Equivalently, there is a set containing every set as an element.

Source reread: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf — Appendix app6 p.3; Marks hierarchy rank formula.. Dependencies: cor-universe-is-the-class-union-of-its-stages, def-membership-rank-of-a-set. Statement provenance: literature-derived (source formulation adapted to the explicit local conventions); proof newly written, ai-generated. Citation and boundary contract saved. Validation: pending focused batch checks. No claim dropped. Next action: author the next planned item, then validate the complete batch.

### All planned artifacts written

Authored all 59 manifest items and the four planned pages at library/foundations/<page.id>.md, all status draft. No manifest ids or dependency lists changed. Statement provenance is source-adapted except the literature-derived exhaustion/universal-set claims and the generated two-isolated-node counterexample (a leaf, with generation.role counterexample). All supplied proofs are ai-generated. No stale judge records existed on these new files. APG range equality was proved without requiring extensionality; the isomorphism conclusion retains extensionality. No planned claim dropped. Next action: focused precheck, canonical repairs, full plan check, content policy and strict proof-contract validation.

### Canonical format repair checkpoint

First explicit-path precheck: 41 proof-bearing items checked, six required canonical phase renumbering. Applied the checker-provided numbering and remapped all affected contract step references and boundary evidence: thm-structural-recursion-on-set-coded-syntax, lem-formula-substitution-satisfaction, prop-ordinal-ranking-characterizes-well-foundedness, prop-well-foundedness-and-descending-sequences, thm-foundation-equivalent-to-hierarchy-exhaustion, prop-hereditarily-finite-sets-are-v-omega. Mathematical claims unchanged. Strict contracts initially found one invalid plural source-section label; changed the source remark heading and citation to the supported singular Remark. Reference titles now identify the author and source as well as the locator. Content policy passed (59 items, zero errors/warnings). Bare validate-plan invocation returned usage (exit 2); explicit research/plan-spec.json invocation passed, 892 populated pages, with global redundant-prerequisite advisories. Next action: rerun focused checks and render validation.

### Final Step-5 validation and disposition

All 59 planned item ids are authored (individual claim/source/dependency checkpoints above), and all four planned pages are written directly under `library/foundations/`. All 63 content artifacts remain `status: draft`. The manifest `research/frontier-33-batch-19.pages.json` remains the output inventory with its original stable ids, kinds, page records and dependency lists. The scope audit confirmed every item dependency list exactly matches that manifest. No plan structure, workflow state, independent review, published content, or another batch's artifact was edited by this authoring work.

Final checks actually run:

- `node tools/tsx-run.mjs tools/precheck.mts` with the explicit 59 `items/ID.md` arguments obtained from this batch manifest: PASS, exit 0, 41 proof-bearing items checked and zero failing. Eighteen definitions/remarks have no phase-format proof body. The six canonical repairs described above were applied before this successful rerun.
- `node tools/validate-plan.mjs`: returned usage, exit 2, because this repository's validator requires the plan path. The operative invocation `node tools/validate-plan.mjs research/plan-spec.json`: PASS, exit 0, no item-level cycles, forward references, B-page dependencies or unresolved ids among 892 populated planned pages. Its global redundant-prerequisite advisories remain nonfatal. No plan file was changed.
- `node tools/content-policy.mjs research/frontier-33-batch-19.pages.json`: PASS on final bytes, exit 0, 59 scoped items, zero errors and zero warnings.
- `node tools/proof-contract.mjs research/frontier-33-batch-19.proof-contracts.json --strict`: PASS, exit 0, 41/41 proof-bearing items checked, zero errors and zero warnings. Exact cited source-section excerpts, actual proof-step uses, derivations, and all eight boundary axes are recorded. The initial invalid plural remark section was corrected to the supported `Remark` heading and contract label.
- Additional focused `node tools/rendercheck.mjs` with all 59 owned item paths and four owned page paths: PASS, exit 0, 63 files, with the actual KaTeX and renderer YAML parsers. No delimiter, wikilink-in-math, math-parse or frontmatter errors.
- Read-only scope audit: PASS, 59 distinct planned ids, 59 draft item files, four draft pages, exact manifest dependency lists, no judge records, and exactly all 41 proof-bearing items covered by the contracts.

Provenance rationale: standard claims are adapted from the batch's recorded sources to the explicit delimited syntax, nonempty carriers, root-inclusive hereditary size, and class-schema conventions. All written proofs/verifications are newly authored (`ai-generated` proof provenance). The two-isolated-node counterexample has a generated statement and `generation.role: counterexample`; it is not a dependency target. The class-exhaustion corollary and universal-set false statement retain literature-derived statement provenance. No literature proof is represented as copied, and no judge or publication stamp was applied.

Narrowed/dropped claims: none beyond the qualifications already required by the reviewed scaffold. In particular, the descending-sequence converse retains its supplied choice-function hypothesis, hereditary-size exhaustion retains AC, and the Tarski refutation is exactly the truth-with-parameters scheme. The APG range equality was established for all well-founded APGs; extensionality remains necessary for the separate isomorphism conclusion. No inaccessible-universe existence or sentence-only arithmetization result is claimed.

Source access: the specified passages were read through browser PDF extraction at the coverage/notes URLs and locators. The terminal's attempted PDF download failed DNS; no new byte/hash fetch stamp was invented. Existing independent source-fetch records were preserved. The completed mathematics does not rely on any unconsulted substitute source. No finite-smoke computation was presented as a proof or reported as run.

Blockers and unresolved mathematical obligations: none identified in this authoring pass. Next action belongs to the build driver's subsequent review stage; publication remains an owner action after the run closes.
