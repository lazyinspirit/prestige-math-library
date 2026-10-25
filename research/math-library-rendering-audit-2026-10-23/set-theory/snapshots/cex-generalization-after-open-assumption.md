---
id: cex-generalization-after-open-assumption
kind: counterexample
title: "The deduction theorem needs its free-variable restriction"
status: published
origin: pipeline
deps: [def-set-coded-terms-and-formulas, thm-set-structure-satisfaction-recursion]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014), Theorem 1H.8 and Theorem 1H.9, printed p.37, sentence side condition; explicit two-element refutation."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

Unrestricted generalization followed by unrestricted discharge of an open assumption would produce the invalid formula $P(x)\to\forall xP(x)$. Thus those unrestricted rules cannot together be sound for truth under assignments.

## Facts & Assumptions

**Given:** Work in ZF in the language with one unary predicate $P$.

[F1] $\forall x\phi$ abbreviates $\neg\exists x\neg\phi$ and $\phi\to\psi$ abbreviates $\neg(\phi\land\neg\psi)$. ([[def-set-coded-terms-and-formulas]])

[F2] Existential quantification ranges over all elements with the assignment updated; negation and conjunction use classical truth values. ([[thm-set-structure-satisfaction-recursion]])

## Proof

1.1 Let the carrier be $M=\{0,1\}$ with $0\ne1$, and interpret $P$ by $\{0\}$. Set the assignment $s(v)=0$ for every variable $v$. Then $\mathcal M,s\models P(x)$. But $s[x:=1]$ does not satisfy $P(x)$, so it does satisfy $\neg P(x)$. Consequently $\mathcal M,s\models\exists x\neg P(x)$ and $\mathcal M,s\not\models\forall xP(x)$ by F1. The implication $P(x)\to\forall xP(x)$ has true antecedent and false consequent at $s$, so its expanded negated conjunction is false. [F1, F2]

2.1 The purported unrestricted inference is explicit: start with the open assumption $P(x)$; generalize the very variable $x$ to obtain $\forall xP(x)$; discharge that assumption to obtain $P(x)\to\forall xP(x)$. Step 1.1 refutes this final formula in a nonempty set structure. Thus a deduction theorem used after generalization must retain the restriction on free variables of discharged assumptions; replacing the open assumption by a sentence removes this particular offending free variable. This counterexample establishes invalidity directly and does not assume any completeness theorem. [step 1.1] ∎
