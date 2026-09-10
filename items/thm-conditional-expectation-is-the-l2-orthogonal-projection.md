---
id: thm-conditional-expectation-is-the-l2-orthogonal-projection
kind: theorem
title: "Conditional expectation is the l2 orthogonal projection"
status: published
origin: pipeline
deps: [cor-conditional-lp-contraction, lem-conditioning-a-known-variable-and-an-independent-variable, thm-taking-out-what-is-known, cor-cauchy-schwarz-inequality-for-l-two, thm-riesz-fischer-completeness-of-l-p, def-axiom-of-choice, thm-basic-algebra-and-order-properties-of-conditional-expectation]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC. Real $L^2(\Omega,\mathcal G,P|_{\mathcal G})$ embeds isometrically as a closed subspace of real $L^2(\Omega,\mathcal F,P)$. For $X\in L^2(P)$, $U=E[X\mid\mathcal G]$ is its orthogonal projection onto this subspace. It uniquely minimizes $E[(X-Z)^2]$ over $Z\in L^2(\mathcal G)$ as an almost-sure class.

## Facts & Assumptions

**Given:** AC, a probability space, a sub-sigma-algebra G, and real $X\in L^2(P)$.

[F1] The conditional mean of an $L^2$ input belongs to $L^2$(G). ([[cor-conditional-lp-contraction]])

[F2] Under countable choice $L^2$ on every measure space is complete. ([[thm-riesz-fischer-completeness-of-l-p]])

[F3] AC supplies countable choice for Riesz–Fischer, including representatives, and the inherited RN existence choices. ([[def-axiom-of-choice]])

[F4] $L^2$ products are integrable, with $E|AB|\le\|A\|_2\|B\|_2$. ([[cor-cauchy-schwarz-inequality-for-l-two]])

[F5] A G-measurable finite factor can be taken out whenever the input and its product are integrable. ([[thm-taking-out-what-is-known]])

[F6] Conditional expectation fixes G-measurable integrable variables. ([[lem-conditioning-a-known-variable-and-an-independent-variable]])

[F7] Conditional expectation preserves ordinary expectation. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

## Proof

**Proof technique:** direct.

1.1 The inclusion sends the class of a $\mathcal G$-measurable function to its ambient class. Two such functions agree almost surely for the restricted measure exactly when they do for P; their squared integrals are identical. Thus inclusion is well defined, injective, linear and isometric. If a sequence in its image converges in ambient $L^2$, its preimages are Cauchy, converge by [F2] under [F3], and their images converge to the same ambient limit by the isometry and uniqueness of metric limits. Hence the image is closed. [F2, F3]

1.2 By [F1], $U\in L^2(\mathcal G)$. Fix $Z\in L^2(\mathcal G)$. Both $ZX$ and $ZU$ are integrable by [F4]. Taking-out [F5] gives $E[ZX\mid\mathcal G]=ZU$. Taking ordinary expectations by [F7] yields $E[ZX]=E[ZU]$, hence $E[Z(X-U)]=0$. This establishes orthogonality for every Z directly, and in particular for bounded G-measurable tests, without a density argument. [F1, F4, F5, F7]

2.1 For every $Z\in L^2(\mathcal G)$, expand $X-Z=(X-U)+(U-Z)$. All products are integrable by [F4], and step 1.2 annihilates the cross term. Therefore $E[(X-Z)^2]=E[(X-U)^2]+E[(U-Z)^2]$. The last term is nonnegative and is zero exactly when $U=Z$ as an $L^2$ class, since $L^2$ is a normed space. The minimizer is therefore unique. Finally [F6] fixes every member of the subspace, so the conditional map is indeed the projection onto it. [step 1.1, step 1.2, F4, F6] ∎

## Source notes

Durrett Theorem 4.1.15 and geometric remark, printed p.213; van der Vaart Lemma 1.8 and proof, printed p.3. The product-integrability route proves orthogonality for all $L^2$ tests directly; closedness is separately established from the restricted $L^2$ completeness interface.
