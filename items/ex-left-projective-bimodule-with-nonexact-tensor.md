---
id: ex-left-projective-bimodule-with-nonexact-tensor
kind: example
title: A left-projective tensor bimodule need not be right-flat
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-bimodule-tensor-exactness-and-projective-preservation, def-graded-balanced-tensor-product-and-homogeneous-hom, def-graded-ring-module-bimodule-and-internal-shift, lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Stacks Project, Algebra, §10.12, tag 00CV"
      url: "https://stacks.math.columbia.edu/tag/00CV"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, ch. 3, §3.2, printed pp. 68-69"
      url: "https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf"
generation:
  role: example
verification:
  precheck: pass
---

## Example

Let $k$ be a field, let $B=k$ with its trivial grading and let
$A=k[\varepsilon]/(\varepsilon^2)$ with $\varepsilon$ in degree $0$. Let
$\pi:A\twoheadrightarrow k$ be the augmentation with $\pi(\varepsilon)=0$, and let
$M=k$ be the graded $(B,A)$-bimodule concentrated in degree $0$ whose left
$B$-action is ordinary multiplication and whose right $A$-action is
$m\cdot a:=\pi(a)m$.

Then $M$ is finite projective as a left $B$-module, but $M\otimes_A-$ is not
exact: it destroys the monomorphism $(\varepsilon)\hookrightarrow A$ in the exact
sequence $0\to(\varepsilon)\to A\to k\to0$ of graded left $A$-modules, because the
induced map $k\otimes_A(\varepsilon)\to k\otimes_AA$ is the zero map while its
source is a copy of $k$.

## Facts & Assumptions

**Given:** A field $k$, the graded $k$-algebras $B=k$ and $A=k[\varepsilon]/(\varepsilon^2)$ concentrated in degree $0$, the augmentation $\pi:A\to k$, and the graded $(B,A)$-bimodule $M=k$ with $b\cdot m=bm$ and $m\cdot a=\pi(a)m$.

[L1] Graded algebras, graded modules, degree-zero maps and graded submodules are defined in [[def-graded-ring-module-bimodule-and-internal-shift]]; all modules here are concentrated in degree $0$, so all module maps are degree-zero.

[L2] The tensor product carries the total-degree grading and the outer actions, in particular $(m\otimes a)c=m\otimes(ac)$ and $b(m\otimes a)=(bm)\otimes a$ ([[def-graded-balanced-tensor-product-and-homogeneous-hom]]).

[L3] $\operatorname{GrMod}_0(A)$ is abelian with degreewise exactness, so a sequence concentrated in degree $0$ is exact exactly when the underlying sequence of $A$-modules is ([[lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise]]).

[L4] If $M$ is flat as a right $A$-module then $M\otimes_A-$ is exact, and if $M$ is finite graded projective as a left $B$-module then $M\otimes_A-$ preserves finite graded projectives ([[thm-bimodule-tensor-exactness-and-projective-preservation]]).

## Verification

1.1 The two actions on $M$ commute, since $(b\cdot m)\cdot a=\pi(a)bm=b\cdot(m\cdot a)$, and are additive and unital, so $M$ is a $(B,A)$-bimodule; both preserve degree $0$, so $M$ is graded. [L1]

1.2 $M=k=B$ is the free left $B$-module of rank one, hence a finite direct sum of shifts $B\{0\}$ and therefore a finite graded projective left $B$-module. [L1, L4]

1.3 In $A=k[\varepsilon]/(\varepsilon^2)$ the ideal $(\varepsilon)=k\varepsilon$ has $\varepsilon^2=0$, so $a\varepsilon=\pi(a)\varepsilon$ for every $a\in A$; hence $(\varepsilon)$ is isomorphic to $k=A/(\varepsilon)$ as a left $A$-module by $1\mapsto\varepsilon$, and the sequence $0\to(\varepsilon)\to A\xrightarrow{\pi}k\to0$ is exact with all maps degree-zero and $A$-linear. [L1, L3]

2.1 Tensoring the sequence of step 1.3 with $M$: the unit isomorphisms identify $M\otimes_AA\cong M=k$ and $M\otimes_Ak\cong k$, and by step 1.3 also $M\otimes_A(\varepsilon)\cong M\otimes_Ak\cong k$. The induced map $M\otimes_A(\varepsilon)\to M\otimes_AA$ sends $1\otimes\varepsilon$ to $1\otimes\varepsilon=(1\cdot\varepsilon)\otimes1=0$, by the balancing relation and the right action $1\cdot\varepsilon=\pi(\varepsilon)=0$ on $M$. So the induced map is zero while its source is $k\ne0$, and it is not injective. [step 1.2, step 1.3, L2]

3.1 By step 2.1 the functor $M\otimes_A-$ fails to preserve the monomorphism $(\varepsilon)\to A$, so it is not exact and $M$ is not flat as a right $A$-module; by step 1.2 $M$ is nevertheless finite graded projective over $B$. Hence finite left $B$-projectivity of a bimodule does not imply right $A$-flatness, the hypothesis that the exactness clause of [L4] requires. [step 1.2, step 2.1, L4]

4.1 The example therefore exhibits a bimodule that is finite projective on the tensoring-out side but whose tensor functor is not exact. ∎ [step 3.1]
