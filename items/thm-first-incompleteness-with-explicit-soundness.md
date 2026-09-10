---
id: thm-first-incompleteness-with-explicit-soundness
kind: theorem
title: "Gödel sentence with separated consistency assumptions"
status: draft
origin: pipeline
deps: [thm-arithmetic-diagonal-lemma, def-arithmetic-provability-and-consistency, lem-q-numeral-calculation-and-bounded-cases]
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
    - title: "Moschovakis, Lecture Notes in Logic (2014) — 4A.10 pp144–145 and 4B.14 p149; local consistency/omega-consistency separation"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
    - title: "Avigad, Computability and Incompleteness (2007) — Theorem 4.6.1 and proof, pp110–111"
      url: "https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf"
---


## Statement

Let T be an effective extension of Q and choose $G\leftrightarrow\neg\operatorname{Prov}_T(\ulcorner G\urcorner)$. If T is consistent, it does not prove G, and G is true in the standard natural-number structure (with any additional signature symbols interpreted). If T is omega-consistent, it also does not prove $\neg G$. Here omega-consistency forbids a formula A(x) for which T proves $\exists xA(x)$ while proving $\neg A(\bar n)$ for every external n. Standard-model soundness implies this property.

## Facts & Assumptions

[F1] [[thm-arithmetic-diagonal-lemma]]: For every formula $\psi(v)$ with no other free variables in an effective signature extending arithmetic, there is a sentence $\theta$ such that Q in that signature proves $\theta\leftrightarrow\psi(\ulcorner\theta\urcorner)$. The construction is effective and requires neither consistency nor soundness.

[F2] [[def-arithmetic-provability-and-consistency]]: For a fixed effective theory T, let $\operatorname{Prf}_T(p,a)$ be the chosen numeralwise arithmetic representation of certified proof checking, with proof code first. Use lem-primitive-recursive-syntax-and-proof-checking and the strengthened representation constructed in thm-primitive-recursive-numeralwise-representability. Retain also the finite PA proof of equivalence to its syntactic $\Sigma_1$ computation form. Thus “Sigma1” for this chosen predicate may mean PA-Sigma1; it does not assert Q equivalence.

Put $\operatorname{Prov}_T(a):=\exists p\operatorname{Prf}_T(p,a)$ and $\operatorname{Con}(T):=\neg\operatorname{Prov}_T(\ulcorner\bot\urcorner)$, where $\bot=\exists v_0\neg(v_0=v_0)$ is in the appropriate signature and corner brackets denote the numeral of a code. External consistency means that there is no actual finite T-refutation; the displayed Con is an arithmetic formula.

For theories extending Q, $0=1$ may replace the fixed contradiction: Q proves $0\ne S0$, so from $0=S0$ explosion gives $\bot$; conversely reflexivity refutes $\bot$ and explosion gives $0=S0$. Appending these fixed finite proof blocks gives primitive-recursive transformations between refutation certificates, verified in PA. We use the fixed $\bot$ throughout. Correctness only on standard numerals is insufficient to replace this predicate in a derivability or second-incompleteness theorem.

## Proof

**Given:** Effective T extending Q, the standard certified predicate, and the stated separate consistency assumptions.

1.1 F1 supplies the displayed fixed point, and F2 fixes a numeralwise correct proof predicate. If p were an actual T-proof of G, Q would prove $\operatorname{Prf}_T(\bar p,\ulcorner G\urcorner)$, hence T would prove Prov(G). Its proof of G and the fixed-point implication would also give not-Prov(G), contradicting consistency. Thus no such p exists. [F1, F2, given]

2.1 For every actual natural p, the proof check therefore fails, and Q proves its negative numeral instance by F2. In the standard natural-number structure every element is such a numeral value, so $\neg\operatorname{Prov}_T(\ulcorner G\urcorner)$ is true. The Q fixed-point theorem is true there: zero, successor, addition and multiplication satisfy each displayed Q axiom, and each logical proof rule preserves truth. Hence G is true. Additional signature symbols play no role in this proof predicate. [F2, step 1.1]

3.1 If T proved not-G, the fixed-point biconditional and classical logic would give $\exists p\operatorname{Prf}_T(p,\ulcorner G\urcorner)$. Step 2.1 gives a T-refutation of every numeral instance of its matrix, violating the stated omega-consistency condition. A sound theory cannot have that pattern, since any standard witness to the existential is one of those numeral values. Consistency alone was used only for the unprovability and truth of G. [step 1.1, step 2.1] ∎
