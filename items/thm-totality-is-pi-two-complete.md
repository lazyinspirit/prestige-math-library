---
id: thm-totality-is-pi-two-complete
kind: theorem
title: "The totality set is Pi_2^0-complete"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sigma-n-pi-n-and-delta-n-sets, def-arithmetical-level-completeness, def-kleene-t-predicate-and-output-function, thm-smn-parameter-theorem, def-computable-many-one-reduction]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Example 1.5"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

$\mathrm{TOT}=\{e:(\forall x)\,\varphi_e(x)\downarrow\}$ is $\Pi_2^0$-complete.

## Facts & Assumptions

**Given:** an acceptable numbering and a $\Pi_2^0$ set $A$.

## Proof

**Proof technique:** direct.

1.1 The condition $e\in\mathrm{TOT}$ is $\forall x\exists s\,T(e,x,s)$, hence is $\Pi_2^0$. [given, construct]

2.1 Write $z\in A\iff\forall x\exists y\,R(z,x,y)$ with $R$ primitive recursive. Uniformly produce a program which on input $x$ searches for such a $y$ and halts when one appears. By s-m-n its index is a total computable function of $z$, and that program is total exactly when $z\in A$. [step 1.1, construct] ∎
