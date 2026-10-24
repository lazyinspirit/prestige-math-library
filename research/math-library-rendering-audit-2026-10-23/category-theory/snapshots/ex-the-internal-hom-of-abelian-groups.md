---
id: ex-the-internal-hom-of-abelian-groups
kind: example
title: "The internal hom of abelian groups"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-the-internal-hom-and-its-evaluation-morphism, thm-hom-tensor-adjunction-for-modules]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Example 4.4.15"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "Hom-tensor adjunction for modules"
      url: "https://math.mit.edu/~hrm/palestine/barr-acyclic-models.pdf"
generation:
  role: example
---

## Example

In $\mathbf{Ab}$, viewed as $\mathbf{Z}\text{-}\mathbf{Mod}$, the internal hom from $B$ to $C$ is the abelian group $\operatorname{Hom}_{\mathbf Z}(B,C)$.

## Facts & Assumptions

**Given:** Abelian groups $A,B,C$.

[L1] In a right-closed monoidal category, an internal hom is determined by its evaluation-transposition bijection ([[def-the-internal-hom-and-its-evaluation-morphism]]).

[L2] The Hom-tensor adjunction holds for modules over a commutative ring, hence for abelian groups ([[thm-hom-tensor-adjunction-for-modules]]).

## Verification

**Proof technique:** direct.

1.1 The evaluation morphism is the group homomorphism $\operatorname{ev}:\operatorname{Hom}_{\mathbf Z}(B,C)\otimes_{\mathbf Z}B\to C$, $\phi\otimes b\mapsto\phi(b)$. It is bilinear, so it is well defined. [given, algebra]

2.1 By [[thm-hom-tensor-adjunction-for-modules]], for every abelian group $A$ there is a natural isomorphism $\operatorname{Hom}(A\otimes B,C)\cong\operatorname{Hom}(A,\operatorname{Hom}(B,C))$. This is exactly the transposition property from [[def-the-internal-hom-and-its-evaluation-morphism]]. [step 1.1, L1, L2]

3.1 Therefore $\operatorname{Hom}_{\mathbf Z}(B,C)$ is the internal hom in $\mathbf{Ab}$. [step 2.1, L1] ∎
