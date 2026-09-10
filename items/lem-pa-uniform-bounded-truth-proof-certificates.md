---
id: lem-pa-uniform-bounded-truth-proof-certificates
kind: lemma
title: "PA verifies proof certificates for bounded arithmetic truth"
status: draft
origin: pipeline
deps: [lem-q-numeral-calculation-and-bounded-cases, lem-godel-beta-coding-and-q-remainder, thm-primitive-recursive-numeralwise-representability, lem-primitive-recursive-syntax-and-proof-checking, def-arithmetic-provability-and-consistency]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) — Proposition 4C.13(2), proof pp155–156, with all bounded constructor cases supplied locally"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---


## Statement

For each fixed bounded arithmetic formula $\delta(\bar x)$, PA proves that $\delta(\bar x)$ yields a certified Q-proof of $\delta(\overline{\bar x})$, and that $\neg\delta(\bar x)$ yields a certified Q-proof of its negation. Substitution of numerals in this assertion is the numerical syntax operation, not literal substitution of a variable into a numeral. Consequently, for each fixed syntactic $\Sigma_1$ sentence $\sigma$, PA proves $\sigma\to\operatorname{Prov}_Q(\ulcorner\sigma\urcorner)$.

## Facts & Assumptions

[F1] [[lem-primitive-recursive-syntax-and-proof-checking]]: For the fixed effective signature and sentinel encoding, term/formula recognition, free-variable and free-for tests, capture-free substitution, numeral formation, negation, and certified derivation checking are primitive recursive. Invalid inputs return zero or false.

[F2] [[thm-primitive-recursive-numeralwise-representability]]: Every primitive-recursive function has a numeralwise unique-value representing formula in Q, and every primitive-recursive relation has positive and negative numeral proofs. The representations can simultaneously be chosen PA-provably total and single-valued, with PA-provably equivalent syntactic $\Sigma_1$ graphs. No Q equivalence to those syntactic forms is asserted.

[F3] [[def-arithmetic-provability-and-consistency]]: For a fixed effective theory T, let $\operatorname{Prf}_T(p,a)$ be the chosen numeralwise arithmetic representation of certified proof checking, with proof code first. Use lem-primitive-recursive-syntax-and-proof-checking and the strengthened representation constructed in thm-primitive-recursive-numeralwise-representability. Retain also the finite PA proof of equivalence to its syntactic $\Sigma_1$ computation form. Thus “Sigma1” for this chosen predicate may mean PA-Sigma1; it does not assert Q equivalence.

Put $\operatorname{Prov}_T(a):=\exists p\operatorname{Prf}_T(p,a)$ and $\operatorname{Con}(T):=\neg\operatorname{Prov}_T(\ulcorner\bot\urcorner)$, where $\bot=\exists v_0\neg(v_0=v_0)$ is in the appropriate signature and corner brackets denote the numeral of a code. External consistency means that there is no actual finite T-refutation; the displayed Con is an arithmetic formula.

For theories extending Q, $0=1$ may replace the fixed contradiction: Q proves $0\ne S0$, so from $0=S0$ explosion gives $\bot$; conversely reflexivity refutes $\bot$ and explosion gives $0=S0$. Appending these fixed finite proof blocks gives primitive-recursive transformations between refutation certificates, verified in PA. We use the fixed $\bot$ throughout. Correctness only on standard numerals is insufficient to replace this predicate in a derivability or second-incompleteness theorem.

[F4] [[lem-q-numeral-calculation-and-bounded-cases]]: Q decides every closed arithmetic atomic formula and every closed bounded formula. For every external $n$, it proves $x\le\bar n\to\bigvee_{i=0}^n x=\bar i$ and $x\le\bar n\lor\overline{n+1}\le x$. These are metatheoretic schemes; induction on $n$ here is not an induction axiom in Q.

## Proof

**Given:** A fixed bounded formula and the standard certified Q predicate; the claimed verification of constructors takes place in PA.

1.1 Construct positive/negative proof-code functions simultaneously by external induction on the fixed bounded formula. The operations on codes and proof lists are primitive recursive by F1, and F2 makes their graphs PA-provably total; F3 fixes the actual certified proof predicate. Maintain the invariant in PA: when the formula has truth value e, the e-constructor is a Q certificate for the corresponding signed numeral instance. Off the relevant truth-value case return the fixed code of the proof of $0=0$; no correctness for a wrong-sign output is asserted. Each Boolean truth-value evaluator for a fixed bounded formula is primitive recursive by nested numerical bounded loops. [F1, F2, F3, given]

2.1 For terms, form an evaluation certificate $t(\overline{\bar x})=\overline{t(\bar x)}$. At zero and variables this is reflexivity. At a successor append equality congruence. For addition, recursively define A(a,0) as the instance $\bar a+0=\bar a$; A(a,b+1) concatenates A(a,b), the axiom $\bar a+S\bar b=S(\bar a+\bar b)$, and equality substitution to conclude $\bar a+\overline{b+1}=\overline{a+b+1}$. For multiplication, at zero use the zero axiom; at b+1 append the multiplication recursion axiom, the preceding multiplication certificate and A(ab,a). PA induction on b verifies these certificate recursions line by line, including shifted premise indices. For unequal values cancel the common successor prefix by repeated injectivity and finish with $Sx\ne0$; the loop bound is the smaller value. Equal values use transitivity of the evaluation equalities. Thus atomic equalities have verified positive/negative certificate constructors. [F1, step 1.1]

3.1 For an order atom at values a,b, if a<=b insert the numeral b-a as left-addend witness and the addition certificate. If a>b use the finite bounded-case proof for bound b and refute each equality a=i. To generate that finite-case proof uniformly, start with the zero-bound derivation in F4 (predecessor, successor-not-zero); at the successor bound concatenate the preceding case proof with the fixed derivation taking $x=0$ or $x=Sy$ and cancelling a successor in the witness equation. The analogous repeated-predecessor proof generates the other order split. Each update substitutes numerals into fixed proof templates and concatenates lists, hence is primitive recursive. PA induction on the bound verifies the final formula and all annotations. Thus this is a proof generator for F4, not an assumption that a metatheoretic scheme is already uniform. Strict order adds a negated equality. [F1, F4, step 2.1]

4.1 For negation exchange the two constructors and append double negation when needed. For conjunction, its true constructor concatenates the two positive certificates and conjunction introduction; its false constructor uses the first false conjunct and the tautological implication from its negation to the negated conjunction. Disjunction is its Boolean expansion. Since the truth test selects only among these finite cases, the induction hypotheses and checking of each fixed Boolean proof block establish the invariant in PA. [step 1.1, step 2.1, step 3.1]

5.1 Consider $\exists u\le t(\bar x)\,\epsilon(u,\bar x)$ and let $b=t(\bar x)$. On truth, bounded search below b+1 returns the first true matrix value k; concatenate its positive certificate, the bound certificate k<=b, the term-evaluation proof and existential introduction. On falsity, recursively concatenate negative matrix certificates for k=0,...,b. Combine them with the uniformly generated case theorem $u\le\bar b\to\bigvee_{k\le b}u=\bar k$ and equality substitution to derive $\forall u\le\bar b\neg\epsilon(u,\overline{\bar x})$, then negate the existential. The list invariant after k iterations is that exactly the first k signed instances have valid certificates with earlier premise indices. PA induction on k proves it; at b+1 the finite case proof yields the desired formula. Bounded universals are handled by the negated existential of the negated matrix. At an empty strict bound the universal certificate is the zero-case bound proof and the existential is refuted with no matrix list. [F1, F4, step 2.1, step 4.1]

6.1 For $\sigma=\exists\bar x\,\delta(\bar x)$, a witness tuple in PA satisfies the bounded matrix, so the invariant just proved supplies a Q certificate for its numeral instance. Append one existential introduction per witness coordinate to obtain a certificate ending with the fixed sentence sigma, and existentially quantify the certificate code. This proves the concluding implication. If another formula chi is only PA-equivalent to sigma, this conclusion gives Q proofs of sigma; a target extending PA must embed those proofs and append the fixed equivalence proof to get chi. No Q proof of that equivalence is inferred. [F3, step 5.1] ∎

