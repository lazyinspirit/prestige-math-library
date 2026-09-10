---
id: thm-rosser-incompleteness-for-effective-theories
kind: theorem
title: "Rosser incompleteness from consistency"
status: draft
origin: pipeline
deps: [thm-arithmetic-diagonal-lemma, def-arithmetic-provability-and-consistency, lem-q-numeral-calculation-and-bounded-cases, lem-interpretation-translates-finite-derivations]
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
    - title: "Moschovakis, Lecture Notes in Logic (2014) — Theorem 4C.4, complete proof pp151–152"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---


## Statement

Every consistent effective theory extending Q is incomplete. The same holds for a consistent effective theory with an effective interpretation of Q, using proof predicates for translated arithmetic sentences.

## Facts & Assumptions

[F1] [[thm-arithmetic-diagonal-lemma]]: For every formula $\psi(v)$ with no other free variables in an effective signature extending arithmetic, there is a sentence $\theta$ such that Q in that signature proves $\theta\leftrightarrow\psi(\ulcorner\theta\urcorner)$. The construction is effective and requires neither consistency nor soundness.

[F2] [[def-arithmetic-provability-and-consistency]]: For a fixed effective theory T, let $\operatorname{Prf}_T(p,a)$ be the chosen numeralwise arithmetic representation of certified proof checking, with proof code first. Use lem-primitive-recursive-syntax-and-proof-checking and the strengthened representation constructed in thm-primitive-recursive-numeralwise-representability. Retain also the finite PA proof of equivalence to its syntactic $\Sigma_1$ computation form. Thus “Sigma1” for this chosen predicate may mean PA-Sigma1; it does not assert Q equivalence.

Put $\operatorname{Prov}_T(a):=\exists p\operatorname{Prf}_T(p,a)$ and $\operatorname{Con}(T):=\neg\operatorname{Prov}_T(\ulcorner\bot\urcorner)$, where $\bot=\exists v_0\neg(v_0=v_0)$ is in the appropriate signature and corner brackets denote the numeral of a code. External consistency means that there is no actual finite T-refutation; the displayed Con is an arithmetic formula.

For theories extending Q, $0=1$ may replace the fixed contradiction: Q proves $0\ne S0$, so from $0=S0$ explosion gives $\bot$; conversely reflexivity refutes $\bot$ and explosion gives $0=S0$. Appending these fixed finite proof blocks gives primitive-recursive transformations between refutation certificates, verified in PA. We use the fixed $\bot$ throughout. Correctness only on standard numerals is insufficient to replace this predicate in a derivability or second-incompleteness theorem.

[F3] [[lem-q-numeral-calculation-and-bounded-cases]]: Q decides every closed arithmetic atomic formula and every closed bounded formula. For every external $n$, it proves $x\le\bar n\to\bigvee_{i=0}^n x=\bar i$ and $x\le\bar n\lor\overline{n+1}\le x$. These are metatheoretic schemes; induction on $n$ here is not an induction axiom in Q.

[F4] [[lem-interpretation-translates-finite-derivations]]: An interpretation as defined above sends every S-derivation of $\phi$ to a T-derivation of $G_{\mathrm{FV}(\phi)}\to\phi^I$. In particular a source contradiction gives a target contradiction, so external Con(T) implies Con(S). Effective certificate data gives an effective translation. A formal Con implication additionally follows in any base B that verifies a total map from S-contradiction certificates to T-contradiction certificates.

## Proof

**Given:** Consistent effective T and either a Q extension or the specified effective interpretation of Q.

1.1 In the extension case, apply F1 to obtain $R\leftrightarrow\forall p(\operatorname{Prf}_T(p,\ulcorner R\urcorner)\to\exists q\le p\operatorname{Prf}_T(q,\ulcorner\neg R\urcorner))$. The syntax and proof checks in F2 are numeralwise expressible in Q. If m proves R, consistency implies that no q proves not-R. In particular Q refutes the finitely many checks for $q\le m$; F3 combines them into a bounded universal. Q also proves the positive check at m. Therefore Q refutes the right side of the fixed point, giving not-R in T, a contradiction. [F1, F2, F3, given]

2.1 If n proves not-R, consistency implies that Q refutes every proof-of-R check for p at most n. F3 gives their bounded universal and splits arbitrary p into $p\le\bar n$ or $\overline{n+1}\le p$. The first case has false antecedent. In the second, the numeral order calculation in F3 gives $\bar n\le p$; the positive check at n witnesses the consequent. Q thus proves the right side for every p and hence proves R, again a contradiction. Neither R nor its negation is provable. [F2, F3, step 1.1]

3.1 For an interpretation I, define arithmetic predicates P(p,e) and N(p,e) to check proofs of the translated sentence with code e and its translated negation. The formula translation itself is primitive recursive from its finite syntactic data, so these are primitive-recursive checks; the supplied effective axiom-proof certificates are used only when translating Q theorems. Diagonalize the Rosser formula in Q using P,N. An actual proof of $R^I$ gives by the finite argument of step 1.1 a Q proof of not-R; F4 translates it to a T proof of $\neg R^I$. An actual proof of $\neg R^I$ is a proof of $(\neg R)^I$, since translation commutes with negation; step 2.1 gives a Q proof of R, which F4 translates. Thus both alternatives contradict consistency in this case as well. [F1, F2, F3, F4, step 1.1, step 2.1] ∎

