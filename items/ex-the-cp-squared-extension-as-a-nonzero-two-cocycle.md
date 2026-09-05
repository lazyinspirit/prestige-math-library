---
id: ex-the-cp-squared-extension-as-a-nonzero-two-cocycle
kind: example
title: "The C_p^2 extension as a nonzero two-cocycle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-an-extension-determines-a-well-defined-h-two-class, thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action]
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

For the nonsplit extension

$$0\to C_p\to C_{p^2}\to C_p\to0$$

with trivial action on the kernel, a normalized section yields the cocycle

$$f(i,j)=\begin{cases}0,& i+j<p,\\1,& i+j\ge p,\end{cases}$$

for $0\le i,j<p$. This cocycle is nonzero in $H^2(C_p,C_p)$.

## Facts & Assumptions

**Given:** The quotient map $\mathbb Z/p^2\mathbb Z\to\mathbb Z/p\mathbb Z$ and
the section $s(i)=i$ for $0\le i<p$.

[L1] An extension determines a well-defined class in $H^2$
([[cor-an-extension-determines-a-well-defined-h-two-class]]).

[L2] $H^2$ classifies extensions with fixed abelian kernel action
([[thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action]]).

## Verification

**Proof technique:** direct.

1.1 In $\mathbb Z/p^2\mathbb Z$, adding two chosen lifts $i$ and $j$ either stays below $p$ or crosses the first multiple of $p$. Therefore $$s(i)+s(j)-s(i+j\bmod p)=pf(i,j),$$ with $f(i,j)$ given by the carry function above. [given, algebra]

2.1 The kernel is central, so [L1] identifies this carry function with the extension class. If it were a coboundary, then [L2] would make the extension split, but $C_{p^2}$ has no subgroup of order $p$ complementary to its unique subgroup of order $p$. [L1, L2, step 1.1, algebra]

3.1 Hence the displayed cocycle represents a nonzero class in $H^2(C_p,C_p)$. [step 2.1] ∎
