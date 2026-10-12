---
id: ex-one-color-quiver-full-flags-need-not-be-semismall
kind: example
title: "One-color quiver full flags need not be semismall"
status: draft
origin: session
deps: ["lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Assume the Axiom of Choice as inherited from the cited geometry suppliers. Take the loopless quiver with a single vertex and no arrows, $\dim V=n\ge2$, and its unique word. Then $E_V=0$ and $X_\nu=\operatorname{Flag}(V)$. The proper incidence map to the point need not be semismall: in this example its defect $2\dim(\text{fiber})+\dim(\text{image})-\dim X_\nu$ is positive.

## Verification

**Given:** the data and choice assumption in the Example.

1.1 The incidence lemma [[lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification]] gives rank zero and $\dim X_\nu=n(n-1)/2$. All of $X_\nu$ is the fiber over the point. [given, algebra]

2.1 Its defect is therefore $2n(n-1)/2-n(n-1)/2=n(n-1)/2>0$. For $n=0$ or $1$ the flag space is a point and the defect is zero. Thus a general quiver-flag decomposition proof must allow the non-semismall case. [step 1.1, algebra] ∎
