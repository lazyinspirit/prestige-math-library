---
id: prop-kernels-images-and-first-isomorphism-theorem-for-lie-algebras
kind: proposition
title: Kernels, images, and the first isomorphism theorem for Lie algebras
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-quotient-lie-algebra, thm-first-isomorphism-theorem-modules, def-homomorphism-of-possibly-infinite-dimensional-lie-algebras]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, Lemma 5.17"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Statement

For a Lie-algebra homomorphism $f:\mathfrak g\to\mathfrak h$, the kernel is an
ideal, the image is a Lie subalgebra, and

$$\mathfrak g/\ker f\cong\operatorname{im}f$$

as Lie algebras via $x+\ker f\mapsto f(x)$.

## Facts & Assumptions

**Given:** A homomorphism $f:\mathfrak g\to\mathfrak h$ of Lie algebras over the same field.

[L1] Such an $f$ is linear and preserves brackets ([[def-homomorphism-of-possibly-infinite-dimensional-lie-algebras]]).

[L2] The underlying linear map induces the vector-space isomorphism $\mathfrak g/\ker f\to\operatorname{im}f$, $x+\ker f\mapsto f(x)$ ([[thm-first-isomorphism-theorem-modules]]).

[L3] Quotient brackets by ideals are those of [[def-quotient-lie-algebra]].

## Proof

**Proof technique:** direct.

1.1 Linearity makes $\ker f$ and $\operatorname{im}f$ linear subspaces. If $a\in\ker f$ and $x\in\mathfrak g$, then $f([x,a])=[f(x),f(a)]=[f(x),0]=0$, so $[x,a]\in\ker f$; hence the kernel is an ideal. [given, L1, algebra]

1.2 If $u=f(x)$ and $v=f(y)$ are in the image, then $[u,v]=[f(x),f(y)]=f([x,y])$ is again in the image. Thus the image is a Lie subalgebra. [L1, algebra]

1.3 Let $\bar f$ be the vector-space isomorphism of [L2]. By [L3], $\bar f([x+\ker f,y+\ker f])=f([x,y])=[f(x),f(y)]=[\bar f(x+\ker f),\bar f(y+\ker f)]$, so it preserves brackets. [L1, L2, L3]

2.1 A bijective bracket-preserving linear map has bracket-preserving inverse: for $u=f(x),v=f(y)$, the inverse sends $[u,v]=f([x,y])$ to $[x,y]$. Hence $\bar f$ is a Lie-algebra isomorphism. The zero map gives $\mathfrak g/\mathfrak g\cong0$, while an injective map gives $\mathfrak g/0\cong\operatorname{im}f$; these are included in the same proof. [step 1.3, L2] ∎
