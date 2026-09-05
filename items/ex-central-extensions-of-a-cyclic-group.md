---
id: ex-central-extensions-of-a-cyclic-group
kind: example
title: "Central extensions of a cyclic group"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-central-extensions-are-classified-by-h-two-with-trivial-action]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Example

Let $G=C_n=\langle x\rangle$ and let $A$ be an abelian group with trivial
$C_n$-action. A central extension class is represented by a relation

$$\widetilde x^n=a\in A,$$

and changing the lift $\widetilde x$ by $b\in A$ changes $a$ to $a+nb$.
Hence the extension classes are parametrized by $A/nA$.

## Facts & Assumptions

**Given:** A cyclic quotient $C_n=\langle x\rangle$ and a trivial-action
abelian kernel $A$.

[L1] Central extensions are classified by $H^2(C_n,A)$
([[cor-central-extensions-are-classified-by-h-two-with-trivial-action]]).

## Verification

**Proof technique:** direct.

1.1 In any central extension, choose a lift $\widetilde x$ of the generator $x$. Since the quotient has order $n$, the element $\widetilde x^n$ lies in the kernel $A$. That kernel is central, so the extension is determined by the parameter $a:=\widetilde x^n$. [L1, given, choose, algebra]

2.1 Replacing $\widetilde x$ by $b\widetilde x$ with $b\in A$ changes the parameter to $(b\widetilde x)^n=nb+\widetilde x^n$ because $A$ is central and written additively. Thus two parameters define equivalent extensions exactly when they differ by an element of $nA$. [step 1.1, algebra]

3.1 So the central extension classes are parametrized by $A/nA$, which is the familiar description of $H^2(C_n,A)$ from [L1]. [L1, step 2.1] ∎
