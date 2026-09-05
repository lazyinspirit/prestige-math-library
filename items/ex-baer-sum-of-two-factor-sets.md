---
id: ex-baer-sum-of-two-factor-sets
kind: example
title: "Baer sum of two factor sets"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-baer-sum-of-abelian-kernel-extensions, thm-baer-sum-agrees-with-addition-in-h-two]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Example

Let $G=C_2$ and $M=C_2$ with trivial action. If $f$ is the normalized cocycle
with $f(t,t)=1$, then the Baer sum of the corresponding extension with itself
has class

$$[f]+[f]=[0].$$

## Facts & Assumptions

**Given:** $G=M=C_2$ with trivial action and the cocycle $f(t,t)=1$.

[F1] The Baer sum is the extension-side operation
([[def-baer-sum-of-abelian-kernel-extensions]]).

[L1] Under the classification bijection, Baer sum agrees with addition in
$H^2$
([[thm-baer-sum-agrees-with-addition-in-h-two]]).

## Verification

**Proof technique:** direct.

1.1 Because $M=C_2$ is written additively, the cocycle sum satisfies $(f+f)(t,t)=1+1=0$. So $f+f=0$ as a cocycle. [given, algebra]

2.1 By [L1], the Baer sum of the extension class of $f$ with itself corresponds to the cohomology class of $f+f$, which step 1.1 identified with $0$. Thus the self-Baer-sum is the split class. [F1, L1, step 1.1]

3.1 So this example realizes a nontrivial class whose double is zero. [step 2.1] ∎
