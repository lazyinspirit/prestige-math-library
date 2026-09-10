---
id: ex-finite-boolean-quotient-and-dual-map
kind: example
title: A finite quotient and its dual inclusion
status: draft
origin: pipeline
deps: [lem-boolean-quotient-congruence, def-boolean-homomorphism-and-quotient, def-stone-ultrafilter-space-and-clopens, lem-finite-boolean-algebras-are-powersets-of-atoms]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Tressl, Stone Duality for Boolean Algebras, 4.1 (inverse-image map); local three-point quotient calculation"
      url: https://personalpages.manchester.ac.uk/staff/Marcus.Tressl/papers/StoneDualityBooleanAlgebras.pdf
---

## Example

Let $B=\mathcal P(\{0,1,2\})$ and $I=\mathcal P(\{2\})=\{\varnothing,\{2\}\}$. Restriction to $\{0,1\}$ identifies $B/I$ with $\mathcal P(\{0,1\})$. The dual map is the inclusion of points $0,1$ into the three-point Stone space. This calculation is in ZF.

## Facts & Assumptions

[F1] [[def-boolean-homomorphism-and-quotient]] defines the ideal equivalence using symmetric difference.

[F2] [[lem-boolean-quotient-congruence]] supplies the Boolean quotient and its factorization.

[F3] [[lem-finite-boolean-algebras-are-powersets-of-atoms]] describes the finite ultrafilters by atoms.

[F4] [[def-stone-ultrafilter-space-and-clopens]] defines the basic clopens of the ultrafilter space.

## Verification

**Given:** The displayed algebra $B$ and ideal $I$.

1.1 The family $I$ contains zero, is downward closed and is closed under union; it omits $\{0,1,2\}$, so is proper. The condition $A\triangle A'\subseteq\{2\}$ is equivalent to $A\cap\{0,1\}=A'\cap\{0,1\}$: membership at $0,1$ must agree, while membership at $2$ is unrestricted. The four classes are $\{\varnothing,\{2\}\}$, $\{\{0\},\{0,2\}\}$, $\{\{1\},\{1,2\}\}$ and $\{\{0,1\},\{0,1,2\}\}$. [F1, given, algebra]

2.1 Define $r(A)=A\cap\{0,1\}$. It preserves unions and intersections, sends the two bounds to $\varnothing$ and $\{0,1\}$, and satisfies $r(\{0,1,2\}\setminus A)=\{0,1\}\setminus r(A)$. Its zero fibre is $I$. F2 factors it through $B/I$; step 1.1 shows the factor sends the four classes bijectively to $\varnothing,\{0\},\{1\},\{0,1\}$. Thus it is the asserted Boolean isomorphism. [F2, step 1.1, algebra]

3.1 The atoms of each powerset algebra are its singletons, so F3 identifies its ultrafilters with point filters. For $i=0,1$, the inverse image of the point filter $V_i$ in $\mathcal P(\{0,1\})$ is $r^{-1}[V_i]=\{A:i\in r(A)\}=\{A:i\in A\}=U_i$ in $B$. Its image contains exactly $U_0,U_1$, omitting $U_2$. By F4 the preimage of any basic clopen $[A]$ is the set of those $V_i$ with $i\in A\cap\{0,1\}$, explicitly the clopen $[r(A)]$. This is the stated two-point inclusion with its discrete topology. QED. [F3, F4, step 2.1, algebra]
