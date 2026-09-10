---
id: lem-primitive-recursive-syntax-and-proof-checking
kind: lemma
title: "Primitive-recursive syntax and certified proof checking"
status: published
verification:
  audited: 2026-09-10
origin: pipeline
deps: [def-effective-theory-and-certified-godel-numbering, lem-certified-syntax-coding-operations-are-primitive-recursive]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) — Lemma 4A.3 pp140–141 and Lemma 4A.9 p144"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---


## Statement

For the fixed effective signature and sentinel encoding, term/formula recognition, free-variable and free-for tests, capture-free substitution, numeral formation, negation, and certified derivation checking are primitive recursive. Invalid inputs return zero or false.

## Facts & Assumptions

[F1] [[lem-certified-syntax-coding-operations-are-primitive-recursive]]: In ZF the sentinel list encoding is injective. Validity, total length, coordinates, append, concatenation and every fixed-arity encoder are primitive recursive, with the stipulated defaults. A recursion on a fixed finite register tuple with primitive-recursive updates, and a recursion retaining its finite history, are primitive recursive. No universal evaluator or unbounded minimization is assumed.

[F2] [[def-effective-theory-and-certified-godel-numbering]]: Fix an effectively presented countable finite-arity signature whose symbol-kind and arity tests are primitive recursive in the sense of def-bounded-arithmetic-formula. Fix a primitive-recursive certificate predicate $E(a,w)$; the nonlogical axioms are the sentences $a$ for which $\exists w\,E(a,w)$. A certified proof is a derivation of def-set-coded-formal-derivation together with an $E$-certificate at each nonlogical axiom line. A c.e. enumeration can be presented this way by including a finite computation history; no decision procedure for axiom membership is assumed.

For a binary word $w$, put $c(w)=1^{|w|}0w$. Let $\operatorname{bin}(0)=0$, and otherwise use the canonical binary numeral. The code of $(a_0,\ldots,a_{k-1})$ is the natural number whose binary word is

$$1\,1^k0\,c(\operatorname{bin}(a_0))\cdots c(\operatorname{bin}(a_{k-1})).$$

The empty-list code is $2$. Tokens, annotations and lists of lines are encoded by iterating this list convention. Invalid codes have validity false, length zero and all coordinates zero. An out-of-range coordinate is zero. Append and concatenation return the empty code $2$ if an input list is invalid.

The initial sentinel prevents leading-zero ambiguity. The following well-definedness lemma proves unique decoding and primitive-recursive operations; these are not consequences of the bare phrase “effective coding.”

## Proof

**Given:** The effective signature tests, finite constructor syntax, E-certified axioms, and the six-scheme/three-rule calculus.

1.1 By F1 list coordinates and lengths, comparisons, append, and fixed-register iterations are primitive recursive. For a token word of length l, compute expression status for every interval [i,j) in increasing interval length, using at most $(l+1)^2$ intervals. A constructor test checks its punctuation and tag, and splits the interior at commas of parenthesis depth zero using a stack or depth counter of at most l entries. At a function/relation node compare the actual number of children to the supplied primitive-recursive arity. The children have strictly shorter intervals; the stored table therefore decides their term/formula status before the parent. Induction on interval length proves the table recognizes exactly the prescribed constructors, including nullary symbols and rejecting ill-formed words. [F1, given]

2.1 At a variable leaf store its singleton free-variable list; at other leaves use the empty list. At a function, relation, equality or conjunction node take the union of the child lists; at negation retain its list; at $\exists v_i$ delete i. These finite loops have bounds l or the stored child-list lengths. To test whether a term t is free for x, scan each free x occurrence in the formula and test that no binder above it has an index in FV(t). The parse stack lists exactly those binders. This proves correctness of the free-for test and supplies its primitive-recursive bound. [F1, step 1.1]

3.1 For capture-free substitution, first traverse the binder nodes and rename them to distinct indices above every index in the input formula and term. Updating their bound occurrences uses their scope intervals and excludes subscopes rebinding that variable. There are at most l binders. Rebuild the parsed expression, replacing free x leaves by t and leaving other leaves unchanged. The traversal performs at most l node updates; each update is a primitive-recursive list construction and may increase the code without increasing the number of nodes processed. Structural induction proves the result is substitution with no capture. When t was already free for x, also provide the exact unrenamed free-for substitution by the same rebuild without the preliminary renaming; this is the version tested in the Hilbert axiom annotations. Negation adds its constructor; numeral formation iterates the successor constructor n times from the zero term. [F1, step 1.1, step 2.1]

4.1 A proof line contains its formula, a scheme/rule tag and its finite annotation. For scheme 1, the annotation gives the Boolean skeleton and substituted formulas; check the rebuilt formula and all at most $2^l$ Boolean valuations of its l-or-fewer skeleton letters. For schemes 2 and 4, the annotation supplies formula, variable and term; check free-for and exact substitution, then the instantiation/introduction template. For scheme 3 check its distribution template and that x is absent from the antecedent free list. Scheme 5 is term reflexivity. Scheme 6 checks both free-for conditions and the two exact substituted formulas in equality substitution. Thus every one of the six schemes is checked by steps 1.1–3.1 and bounded finite tests. An axiom instance always has such finite annotation; annotations never replace a test of validity. [F1, step 1.1, step 2.1, step 3.1]

5.1 For MP check the two earlier premise indices and the implication shape; for generalization check the earlier premise and bound variable; for restricted existential elimination check the earlier implication, the resulting quantified antecedent, and absence of the eliminated variable from the consequent free list. At a nonlogical axiom line check sentencehood and E(a,w) from the supplied certificate (F2), rather than searching for w. A loop over the decoded number of lines checks every line and the final conclusion; reject an empty derivation, malformed annotation or non-earlier premise. Induction on lines gives soundness of acceptance for the specified calculus, and conversely each certified derivation meets these tests. All bounds are input lengths, explicit exponentials for Boolean valuations, or bounds of already constructed primitive-recursive loops, proving the claim. [F1, F2, step 4.1] ∎
