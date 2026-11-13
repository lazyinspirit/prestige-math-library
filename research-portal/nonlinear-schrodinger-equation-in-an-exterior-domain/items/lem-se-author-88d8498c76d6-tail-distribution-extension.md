---
id: lem-se-author-88d8498c76d6-tail-distribution-extension
kind: lemma
domain: mathematics
title: Zero extension of a free exterior tail by distribution tests
status: draft
deps:
  - math:def-axiom-of-choice
  - lem-se-author-88d8498c76d6-bounded-collar-h2
  - math:def-sobolev-space-wkp-and-its-norm
  - math:def-locally-integrable-function-as-a-regular-distribution
  - math:def-distributional-derivative
  - math:lem-weak-leibniz-rule-with-a-smooth-factor
  - math:lem-test-function-cutoffs-and-euclidean-localization
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-se-author-88d8498c76d6-bounded-collar-h2: mathematical-premise
  math:def-sobolev-space-wkp-and-its-norm: mathematical-premise
  math:def-locally-integrable-function-as-a-regular-distribution: mathematical-premise
  math:def-distributional-derivative: mathematical-premise
  math:lem-weak-leibniz-rule-with-a-smooth-factor: mathematical-premise
  math:lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement

Assume AC and let $\Omega,\eta$ be as in [[lem-se-author-88d8498c76d6-bounded-collar-h2]]. For $u\in H^1(\Omega)$ with $\Delta u=g\in L^2(\Omega)$, define $v=(1-\eta)u$ on $\Omega$ and $v=0$ on $\Theta$. Then $v\in H^1(\mathbb R^n)$, and its distributional Laplacian is the zero extension of
$$h=(1-\eta)g-2\nabla\eta\cdot\nabla u-(\Delta\eta)u.$$
In particular $\|v\|_{H^1(\mathbb R^n)}+\|\Delta v\|_2\le C_\eta(\|u\|_{H^1(\Omega)}+\|g\|_2)$. The support of $v$ need not be bounded.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [[math:def-axiom-of-choice]]; in particular its countable and dependent instances are available.

[F2] [[lem-se-author-88d8498c76d6-bounded-collar-h2]] fixes a smooth $\eta$ equal to $1$ on a neighborhood of $\Theta$; all terms multiplied by $1-\eta$ or derivatives of $\eta$ vanish on a smaller such neighborhood.

[F3] Weak derivatives and Sobolev classes use [[math:def-sobolev-space-wkp-and-its-norm]], with compactly supported tests even though the function itself may have an unbounded tail.

[F4] [[math:lem-weak-leibniz-rule-with-a-smooth-factor]] supplies cutoff first derivatives, while [[math:lem-test-function-cutoffs-and-euclidean-localization]] supplies compact test cutoffs separating the obstacle from a given test support.

[F5] For an open set $U$ and $f\in L^1_{\mathrm{loc}}(U)$, [[math:def-locally-integrable-function-as-a-regular-distribution]] supplies the regular distribution $T_f(\phi)=\int_U f\phi$, with a bilinear pairing and no conjugation. Using [[math:def-distributional-derivative]], write $\Delta f=\sum_{j=1}^n\partial_j^2T_f$. Thus $\Delta f=q$ for $q\in L^1_{\mathrm{loc}}(U)$ means $\sum_{j=1}^n\partial_j^2T_f=T_q$, equivalently $\int_U f\Delta\phi=\int_U q\phi$ for every $\phi\in C_c^\infty(U)$. This convention applies on both $\Omega$ and $\mathbb R^n$. The $L^2$ classes used here have locally integrable representatives by the Sobolev conventions in [F3]; the assumed AC includes the Countable Choice required by the regular-distribution supplier.

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Prove the conclusions in the statement under its stated hypotheses.

1.1 The asserted fields $v$, the zero extensions of $(1-\eta)\partial_j u-(\partial_j\eta)u$, and the zero extension of $h$ have the claimed $L^2$ bounds by boundedness of the cutoff and its derivatives. All vanish near $\Theta$, so assigning zero on $\Theta$ gives well-defined almost-everywhere classes; no values of a representative on a boundary are used. [F2, F3, F4, given]

2.1 Fix $\phi\in C_c^\infty(\mathbb R^n)$. The product $(1-\eta)\phi$ belongs to $C_c^\infty(\Omega)$, so the weak first-derivative identity on $\Omega$ gives $\int_{\mathbb R^n}v\,\partial_j\phi=-\int_\Omega((1-\eta)\partial_j u-(\partial_j\eta)u)\phi$. Thus the fields from the previous step really are the global weak derivatives, proving $v\in H^1(\mathbb R^n)$. [F2, F3, F4, step 1.1]

3.1 Testing $\Delta u=g$ against $(1-\eta)\phi$ and expanding its Laplacian gives $\int v\Delta\phi=\int_\Omega((1-\eta)g+(\Delta\eta)u)\phi+2\int_\Omega u\nabla\eta\cdot\nabla\phi$. Integrate the last term once in distributions, with $u\nabla\eta$ supported away from $\Theta$, to obtain $\int v\Delta\phi=\int_\Omega h\phi$. This is the global Laplacian identity and proves its $L^2$ bound. Every test is compactly supported; no integration by parts at infinity or compact-support extension theorem is invoked. [F2, F3, F4, F5, step 1.1, algebra] ∎
