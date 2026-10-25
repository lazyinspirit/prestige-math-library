---
id: thm-arithmetic-diagonal-lemma
kind: theorem
title: "The syntactic diagonal lemma"
status: published
origin: pipeline
deps: [thm-primitive-recursive-numeralwise-representability, lem-primitive-recursive-syntax-and-proof-checking]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) — 4B.14 p149, complete fixed-point proof"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
    - title: "Avigad, Computability and Incompleteness (2007) — Lemma 4.5.1 and complete proof, pp108–109"
      url: "https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf"
---


## Statement

For every formula $\psi(v)$ with no other free variables in an effective signature extending arithmetic, there is a sentence $\theta$ such that Q in that signature proves $\theta\leftrightarrow\psi(\ulcorner\theta\urcorner)$. The construction is effective and requires neither consistency nor soundness.

## Facts & Assumptions

[F1] [[lem-primitive-recursive-syntax-and-proof-checking]]: For the fixed effective signature and sentinel encoding, term/formula recognition, free-variable and free-for tests, capture-free substitution, numeral formation, negation, and certified derivation checking are primitive recursive. Invalid inputs return zero or false.

[F2] [[thm-primitive-recursive-numeralwise-representability]]: Every primitive-recursive function has a numeralwise unique-value representing formula in Q, and every primitive-recursive relation has positive and negative numeral proofs. The representations can simultaneously be chosen PA-provably total and single-valued, with PA-provably equivalent syntactic $\Sigma_1$ graphs. No Q equivalence to those syntactic forms is asserted.

## Proof

**Given:** A fixed formula $\psi(v)$ and an effective signature containing arithmetic; $\#\phi$ denotes a number and $\ulcorner\phi\urcorner$ its numeral.

1.1 By F1 define d(e) to be the code obtained by substituting the numeral of e in the designated free variable of formula e, with a fixed default for invalid inputs. It is primitive recursive. F2 supplies a formula D(x,y) numeralwise representing d uniquely in Q. Choose auxiliary y fresh from psi and from the designated variable x. [F1, F2, given]

2.1 Let $\eta(x)=\exists y(D(x,y)\land\psi(y))$, $e=\#\eta$ and $\theta=\eta(\bar e)$. By definition of d, $d(e)=\#\eta(\bar e)=\#\theta$. Thus Q proves $\forall y(D(\bar e,y)\leftrightarrow y=\ulcorner\theta\urcorner)$ by F2. The code e is a natural number; its numeral is the term used in theta. [F2, step 1.1]

3.1 From theta a witness y satisfies D and psi; the uniqueness equation in step 2.1 gives $y=\ulcorner\theta\urcorner$, hence $\psi(\ulcorner\theta\urcorner)$. Conversely D holds at that numeral by the same equation; conjoin it with psi at that numeral and introduce the existential to obtain theta. All replacements use fresh variables and licensed equality substitution. These finite syntactic operations prove the biconditional in Q effectively. [step 2.1, algebra] ∎
