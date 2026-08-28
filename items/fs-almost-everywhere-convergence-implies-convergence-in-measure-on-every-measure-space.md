---
id: fs-almost-everywhere-convergence-implies-convergence-in-measure-on-every-measure-space
kind: false-statement
title: "FALSE: almost-everywhere convergence implies convergence in measure on every measure space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-convergence-almost-everywhere-relative-to-a-measure, def-convergence-in-measure]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 2.4, Example (ii)"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Terence Tao, 245A Notes 4: Modes of convergence, Example 4"
      url: "https://terrytao.wordpress.com/2010/10/02/245a-notes-4-modes-of-convergence/"
---

## Statement refuted

almost-everywhere convergence implies convergence in measure on every measure
space.

## Facts & Assumptions

**Given:** Lebesgue measure on $\mathbb R$ and the sequence $f_n:=\chi_{[n,n+1]}$.

[L1] Almost-everywhere convergence means pointwise convergence off a measurable null set. ([[def-convergence-almost-everywhere-relative-to-a-measure]])

[L2] Convergence in measure means that for every real $\varepsilon>0$, $\mu(\{|f_n-f|>\varepsilon\}) \to 0$. ([[def-convergence-in-measure]])

## Refutation

**Proof technique:** direct.

1.1 Fix $x \in \mathbb R$. If $n>x+1$, then $x \notin [n,n+1]$, so $f_n(x)=0$. Thus $f_n(x)\to0$ for every $x \in \mathbb R$, hence almost everywhere by [L1]. [given, L1]

1.2 For every $n$ one has $\{|f_n-0|>1/2\}=[n,n+1]$, whose Lebesgue measure is $1$. So the bad-set measures do not tend to $0$, and [L2] fails. [given, L2]

2.1 This single sequence satisfies the premise and violates the conclusion, so the claim is false. [step 1.1, step 1.2] ∎
