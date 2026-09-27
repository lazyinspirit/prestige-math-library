---
id: cex-scheme-not-determined-by-underlying-space
kind: counterexample
title: "A scheme is not determined by its underlying topological space"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-scheme-spectrum, def-dual-numbers-scheme, def-reduced-affine-scheme, cor-prime-spectrum-insensitive-to-nilpotents, def-polynomial-ring-over-a-commutative-ring, def-quotient-ring]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "James S. Milne, Algebraic Geometry, 10.28"
      url: "https://www.jmilne.org/math/CourseNotes/AG10.pdf"
---
## Statement refuted

“The underlying topological space determines a scheme.”

## Facts & Assumptions

**Given:** A field $k$.

[F1] Points of $\operatorname{Spec}A$ are prime ideals of $A$ ([[def-affine-scheme-spectrum]]). A field has exactly one proper ideal, $(0)$, and it is prime.

[F2] The dual-numbers scheme is $\operatorname{Spec}D$ for $D=k[\epsilon]/(\epsilon^2)$ ([[def-dual-numbers-scheme]], [[def-polynomial-ring-over-a-commutative-ring]], [[def-quotient-ring]]). Passing to the quotient by the nilradical does not change the prime spectrum or its topology ([[cor-prime-spectrum-insensitive-to-nilpotents]]). An affine scheme is reduced exactly when its coordinate ring is reduced ([[def-reduced-affine-scheme]]).

## Counterexample

**Proof technique:** direct.

1.1 Every element of $D$ has a unique form $a+b\epsilon$ with $a,b\in k$ and $\epsilon^2=0$. Such an element is nilpotent exactly when $a=0$, since its image under $D\to D/(\epsilon)\cong k$ must then be nilpotent in a field, and every $b\epsilon$ is square-zero. Thus $\operatorname{Nil}(D)=(\epsilon)$ and $D/\operatorname{Nil}(D)\cong k$. By [F2], $\operatorname{Spec}D$ is homeomorphic to $\operatorname{Spec}k$, which has one point by [F1]. [F1, F2, algebra]

2.1 The first scheme is reduced because a field has no nonzero nilpotents. The second is not reduced: $\epsilon$ is nonzero in $D$ because the polynomial $\epsilon$ does not belong to $(\epsilon^2)$, but its square is zero. [F2, step 1.1, algebra]

3.1 Scheme isomorphisms preserve affine coordinate rings up to isomorphism and hence reducedness, so these schemes are not isomorphic. [step 1.1, step 2.1] ∎
 
