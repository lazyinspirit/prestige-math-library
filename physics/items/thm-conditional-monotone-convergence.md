---
id: thm-conditional-monotone-convergence
kind: theorem
title: "Conditional monotone convergence"
status: published
verification:
  audited: 2026-09-10
origin: pipeline
deps: [def-conditional-expectation-for-nonnegative-variables, lem-conditional-expectation-is-unique-almost-surely, thm-basic-algebra-and-order-properties-of-conditional-expectation, thm-monotone-convergence-for-the-integral, prop-closure-properties-of-measurable-functions-used-by-the-integral, def-axiom-of-choice, cor-integral-over-a-null-set-vanishes]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC. For nonnegative measurable $X$ (possibly infinite), $E[X\mid\mathcal G]$ is the unique almost-sure class of nonnegative $\mathcal G$-measurable $Y$ satisfying $\int_A Y\,dP=\int_A X\,dP$ for every $A\in\mathcal G$. If $0\le X_n\uparrow X$ almost surely, then $E[X_n\mid\mathcal G]\uparrow E[X\mid\mathcal G]$ almost surely. Every increasing integrable nonnegative approximation to $X$ gives the same class. For integrable real $V_n\downarrow V$ almost surely with $V_0,V\in L^1$, $E[V_n\mid\mathcal G]\downarrow E[V\mid\mathcal G]$ almost surely.

## Facts & Assumptions

**Given:** AC and nonnegative measurable inputs X and $0\le X_n\uparrow X$ almost surely; for the decreasing clause, real $V_n\downarrow V$ with $V_0,V\in L^1$.

[F1] The extended version is the increasing truncation limit. ([[def-conditional-expectation-for-nonnegative-variables]])

[F2] Integrable versions preserve order and finite linear combinations. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F3] Ordinary MCT applies to nonnegative increasing functions. ([[thm-monotone-convergence-for-the-integral]])

[F4] Positive/negative parts, level sets and increasing limits are measurable. ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]])

[F5] Integrals of nonnegative functions on measurable null sets vanish. ([[cor-integral-over-a-null-set-vanishes]])

[F6] AC selects countably many versions and covers inherited existence choices. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct.

1.1 For the ordered nonnegative versions $U_n$ of [F1], ordinary MCT on each event gives $\int_A\lim_n U_n=\lim_n\int_A U_n=\lim_n\int_A(X\wedge n)=\int_A X$. Changes on the common measurable null set have zero event integral by [F5]. Thus the limit has the stated event characterization. If inputs are changed almost surely, their nonnegative integrals also agree by splitting each event into its part in and outside the measurable exceptional null set. [F1, F3, F5, F6]

2.1 For uniqueness, let $Y,Z$ be two characterized versions and set $A_{k,m}=\{Y\ge Z+1/k,\ Z\le m\}$ for positive integers $k,m$. This is in $\mathcal G$: the difference is formed only on the finite-Z set. On $A_{k,m}$, $\int Z\le m$, and the event identities give $\int Y=\int Z<\infty$. Integration of $Y\ge Z+1/k$ there yields $P(A_{k,m})/k\le0$. Their countable union is $\{Y>Z\}$, since strict extended inequality forces the smaller value to be finite. Thus $P(Y>Z)=0$; interchanging the two variables gives equality almost surely. No infinite integrals are subtracted. [step 1.1, F4]

3.1 More generally, if $X\le X^{\ast}$ almost surely and $Y,Z$ are their characterized versions, then $\int_A Y\le\int_A Z$ on all $\mathcal G$ events. On the same $A_{k,m}$ as in step 2.1, the right integral is finite and the inequality forces $P(A_{k,m})=0$. Thus $Y\le Z$ almost surely. This extends order to the nonnegative classes, including infinite values. [step 1.1, step 2.1]

4.1 Choose versions $Y_n$ for the given $X_n$ using [F6]. By step 3.1 remove one $\mathcal G$-null union of consecutive order-exception sets and set all $Y_n$ to zero there. Their limit $Y$ is measurable by [F4]. MCT and the event identities give $\int_A Y=\lim_n\int_A X_n=\int_A X$. For almost-sure input monotonicity the common ambient measurable null set can be removed from the inputs using [F5]; this does not require that set to belong to $\mathcal G$. Step 2.1 now identifies $Y$ with $E[X\mid\mathcal G]$. The same argument works for any increasing integrable nonnegative approximations. [step 1.1, step 2.1, step 3.1, F3, F4, F5, F6]

5.1 Finally $0\le V_0-V_n\uparrow V_0-V$ almost surely, and all these variables are integrable because $|V_n|\le|V_0|+|V|$. Apply step 4.1 and linearity [F2] to obtain $E[V_0\mid\mathcal G]-E[V_n\mid\mathcal G]\uparrow E[V_0\mid\mathcal G]-E[V\mid\mathcal G]$. The fixed first term is finite almost surely, so subtraction gives the claimed decreasing convergence. [step 4.1, F2] ∎

## Source notes

Van der Vaart Lemma 1.10(i), printed p.4; Durrett Theorem 4.1.9(c) and its decreasing-limit remark, printed pp.210–211. Extended uniqueness and order are supplied locally by finite-level localization; the decreasing clause preserves the coverage promise.
