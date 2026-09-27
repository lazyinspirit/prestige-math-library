---
id: prop-restriction-and-extension-of-scalars-on-graded-module-categories
kind: proposition
title: Restriction and extension along a graded algebra map
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-bimodule-tensor-exactness-and-projective-preservation, thm-graded-bimodule-tensor-hom-adjunction, thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules, def-graded-ring-module-bimodule-and-internal-shift, def-graded-balanced-tensor-product-and-homogeneous-hom, lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Stacks Project, Algebra, §10.12, tag 00CV"
      url: "https://stacks.math.columbia.edu/tag/00CV"
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §§2a-2b, author pp. 8-9"
      url: "https://arxiv.org/pdf/math/0006056"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, ch. 3, §3.2, printed pp. 68-69"
      url: "https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf"
verification:
  precheck: pass
---

## Statement

Let $A$ and $B$ be graded $k$-algebras and let $f:A\to B$ be a unital $k$-algebra
homomorphism with $f(A_i)\subseteq B_i$ for all $i$, so that $f$ is degree-zero.
Regard $B$ as a graded $(B,A)$-bimodule by left multiplication and the right
action $b\cdot a:=bf(a)$.

1. **Restriction** $(-)|_A:\operatorname{GrMod}_0(B)\to\operatorname{GrMod}_0(A)$,
   sending a graded left $B$-module $Y$ to the same graded $k$-module with
   $a\cdot y:=f(a)y$, is exact.
2. **Adjunction.** Extension $B\otimes_A-:\operatorname{GrMod}_0(A)\to
   \operatorname{GrMod}_0(B)$ is left adjoint to restriction,
   $$\operatorname{Hom}_{B,0}(B\otimes_AX,Y)\cong \operatorname{Hom}_{A,0}\bigl(X,Y|_A\bigr)$$
   naturally in the graded left $A$-module $X$ and the graded left $B$-module
   $Y$.
3. **Exactness of extension.** $B\otimes_A-$ is exact if $B$ is flat as a right
   $A$-module.
4. **Projectives.** $B\otimes_A-$ always carries finite graded projective left
   $A$-modules to finite graded projective left $B$-modules. Restriction carries
   finite graded projective left $B$-modules to finite graded projective left
   $A$-modules if $B$ is finite graded projective as a left $A$-module.

## Facts & Assumptions

**Given:** Graded $k$-algebras $A,B$, a unital degree-zero $k$-algebra homomorphism $f:A\to B$, a graded left $A$-module $X$, a graded left $B$-module $Y$, and the graded $(B,A)$-bimodule structure $b\cdot a=bf(a)$ on $B$.

[L1] Graded modules, degree-zero maps, degree-zero algebra homomorphisms and internal shifts are defined in [[def-graded-ring-module-bimodule-and-internal-shift]].

[L2] The graded tensor product, its total-degree grading and the outer actions $(b(m\otimes x)=(bm)\otimes x)$ are defined in [[def-graded-balanced-tensor-product-and-homogeneous-hom]].

[L3] Tensor–Hom adjunction: $\operatorname{Hom}_{B,0}(M\otimes_AX,Y)\cong\operatorname{Hom}_{A,0}(X,\operatorname{HOM}_B(M,Y))$ naturally, for every graded $(B,A)$-bimodule $M$ ([[thm-graded-bimodule-tensor-hom-adjunction]]).

[L4] For a graded $(B,A)$-bimodule $M$, right $A$-flatness of $M$ makes $M\otimes_A-$ exact, and finite graded projectivity of $M$ over $B$ makes $M\otimes_A-$ preserve finite graded projectives ([[thm-bimodule-tensor-exactness-and-projective-preservation]]).

[L5] Finite graded projectivity is equivalent to being a degree-zero direct summand of a finite direct sum of shifts, and the closures used below — finite direct sums and degree-zero direct summands of finite graded projectives are again finite graded projective — are proved there ([[thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules]]).

[L6] $\operatorname{GrMod}_0(A)$ and $\operatorname{GrMod}_0(B)$ are abelian with degreewise kernels, cokernels and exactness ([[lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise]]).

## Proof

**Proof technique:** direct.

1.1 The right action $b\cdot a=bf(a)$ makes $B$ a graded $(B,A)$-bimodule: it is additive in $b$ and in $a$, satisfies $(bb')\cdot a=b(b'\cdot a)$, $b\cdot(aa')=bf(aa')=(bf(a))f(a')=(b\cdot a)\cdot a'$ and $b\cdot1_A=b$, and it is homogeneous because $B_iB_j\subseteq B_{i+j}$ and $f(A_j)\subseteq B_j$ give $B_i\cdot A_j\subseteq B_{i+j}$. [L1]

1.2 Evaluation $\mathrm{ev}:\operatorname{HOM}_B(B,Y)\to Y|_A$, $g\mapsto g(1_B)$, is a degree-zero isomorphism of graded $A$-modules, where $\operatorname{HOM}_B(B,Y)$ carries $(a\cdot g)(b)=g(ba)=g(bf(a))$. For $g\in\operatorname{Hom}_{B,j}(B,Y)$ one has $g(1_B)\in Y_j$, so $\mathrm{ev}$ is degree-zero and $A$-linear, since $(a\cdot g)(1_B)=g(f(a))=f(a)g(1_B)=a\cdot g(1_B)$; it is injective because $g$ is $B$-linear and hence $g(b)=bg(1_B)$, and surjective because for $y\in Y_j$ the map $b\mapsto by$ is $B$-linear, homogeneous of degree $j$, and has value $y$ at $1_B$. [L1, L2]

2.1 Restriction is a functor: for a graded left $B$-module $Y$ the formula $a\cdot y=f(a)y$ makes $Y$ a graded left $A$-module, since $A_i\cdot Y_j=f(A_i)Y_j\subseteq B_iY_j\subseteq Y_{i+j}$; a degree-zero $B$-linear map $u:Y\to Z$ is degree-zero $A$-linear because $u(a\cdot y)=u(f(a)y)=f(a)u(y)=a\cdot u(y)$. [step 1.1, L1]

2.2 Extension is left adjoint to restriction: applying [L3] to the graded $(B,A)$-bimodule $B$ of step 1.1 gives a natural bijection $\operatorname{Hom}_{B,0}(B\otimes_AX,Y)\cong\operatorname{Hom}_{A,0}(X,\operatorname{HOM}_B(B,Y))$, and composing with the natural isomorphism of step 1.2 gives the displayed natural bijection $\operatorname{Hom}_{B,0}(B\otimes_AX,Y)\cong\operatorname{Hom}_{A,0}(X,Y|_A)$. [step 1.1, step 1.2, L3]

2.3 If $B$ is flat as a right $A$-module, then $B\otimes_A-$ is exact by [L4] applied to the graded $(B,A)$-bimodule $B$. [step 1.1, L4]

2.4 $B\otimes_A-$ always preserves finite graded projectives: $B=B\{0\}$ is a finite direct sum of shifts of $B$, hence finite graded projective as a left $B$-module by [L5], so [L4] applied to $M=B$ gives the claim for every finite graded projective left $A$-module. [step 1.1, L4, L5]

3.1 Restriction is exact. For a degree-zero $B$-linear $u:Y\to Z$, [L6] computes $\ker u$ and $\operatorname{coker}u$ degreewise on the underlying $k$-modules, and the underlying graded submodule $\ker u$ and quotient $Z/u(Y)$ carry the $A$-action induced by $f$; with these actions they are the kernel and cokernel of $u$ in $\operatorname{GrMod}_0(A)$, because the universal properties of the kernel and quotient are those of the underlying modules. Hence restriction preserves kernels and cokernels, and a sequence is exact in $\operatorname{GrMod}_0(B)$ exactly when its restriction is exact in $\operatorname{GrMod}_0(A)$. [step 2.1, L6]

3.2 Assume $B$ is finite graded projective as a left $A$-module, and let $Y$ be a finite graded projective left $B$-module. By [L5] there are degree-zero maps $i:Y\to F$, $p:F\to Y$ with $pi=1_Y$, where $F=B\{s_1\}\oplus\cdots\oplus B\{s_n\}$; restricting the same underlying maps and the same shifts makes $Y|_A$ a degree-zero direct summand of $F|_A=B\{s_1\}|_A\oplus\cdots\oplus B\{s_n\}|_A$. Each $B\{s_j\}|_A$ is finite graded projective over $A$, being a shift of the finite graded projective left $A$-module $B$ by hypothesis; by [L5] their finite direct sum is finite graded projective, and again by [L5] its degree-zero direct summand $Y|_A$ is finite graded projective. [step 2.1, L1, L5]

4.1 Steps 3.1, 2.2, 2.3, 2.4 and 3.2 give the four clauses: restriction is exact and right adjoint to extension, extension is exact when $B$ is right $A$-flat and always preserves finite graded projectives, and restriction preserves finite graded projectives when $B$ is finite graded projective over $A$. ∎ [step 3.1, step 2.2, step 2.3, step 2.4, step 3.2]
