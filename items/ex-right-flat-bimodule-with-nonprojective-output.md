---
id: ex-right-flat-bimodule-with-nonprojective-output
kind: example
title: A right-flat tensor bimodule can have nonprojective output
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-bimodule-tensor-exactness-and-projective-preservation, thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules, def-graded-ring-module-bimodule-and-internal-shift, def-graded-balanced-tensor-product-and-homogeneous-hom]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §§2a-2b, author pp. 8-9"
      url: "https://arxiv.org/pdf/math/0006056"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, ch. 3, §3.2, printed pp. 68-69"
      url: "https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf"
generation:
  role: example
verification:
  precheck: pass
---

## Example

Let $k$ be a field, let $A=k$ with its trivial grading and let
$B=k[\varepsilon]/(\varepsilon^2)$ with $\varepsilon$ placed in degree $0$, so
that $B$ is a graded $k$-algebra concentrated in degree $0$. Let
$\pi:B\twoheadrightarrow k$ be the augmentation with $\pi(\varepsilon)=0$, and
let $M=k$ be the graded $(B,A)$-bimodule concentrated in degree $0$ whose left
$B$-action is $b\cdot m:=\pi(b)m$ and whose right $k$-action is ordinary
multiplication.

Then $M$ is flat as a right $k$-module, so $M\otimes_k-$ is exact, but the left
$B$-module $M\otimes_kk\cong k$ is not projective. Thus right $A$-flatness of the
bimodule does not imply that its tensor functor carries finite graded projectives
to projective outputs.

## Facts & Assumptions

**Given:** A field $k$, the graded $k$-algebras $A=k$ and $B=k[\varepsilon]/(\varepsilon^2)$ in degree $0$, the augmentation $\pi:B\to k$, and the graded $(B,A)$-bimodule $M=k$ with $b\cdot m=\pi(b)m$ and $m\cdot\lambda=m\lambda$.

[L1] Graded algebras, graded modules and degree-zero maps are defined in [[def-graded-ring-module-bimodule-and-internal-shift]]; since every module here is concentrated in degree $0$, all module maps are degree-zero.

[L2] The tensor product of graded modules carries the total-degree grading and the outer action $b(m\otimes n)=(bm)\otimes n$ ([[def-graded-balanced-tensor-product-and-homogeneous-hom]]).

[L3] If $M$ is flat as a right $A$-module then $M\otimes_A-$ is exact, and if $M$ is finite graded projective as a left $B$-module then $M\otimes_A-$ preserves finite graded projectives ([[thm-bimodule-tensor-exactness-and-projective-preservation]]).

[L4] Projective objects have the lifting property, and a finite direct sum of shifts $B\{s_1\}\oplus\cdots\oplus B\{s_n\}$ is finite graded projective ([[thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules]]).

## Verification

1.1 The two actions on $M$ commute: $(b\cdot m)\cdot\lambda=\pi(b)m\lambda=b\cdot(m\lambda)$, and each is additive and unital, so $M$ is a $(B,A)$-bimodule; both actions preserve the degree-$0$ part because $\pi$ and the scalar action do, so $M$ is a graded bimodule. [L1]

1.2 $M=k$ is a free right $k$-module of rank one, hence flat, so $M\otimes_k-$ is exact; equivalently the functor is $k\otimes_k-$, which is naturally the identity on $k$-vector spaces. [L3]

1.3 The unit isomorphism $M\otimes_AA\to M$, $m\otimes\lambda\mapsto m\lambda$, identifies $M\otimes_kk$ with $k$, and under this identification the left $B$-action is $b\cdot(m\otimes\lambda)=bm\otimes\lambda$, i.e. the action of $B$ on $k$ through $\pi$; so $M\otimes_kk\cong k$ as graded left $B$-modules. [L2]

1.4 The module $k=B/(\varepsilon)$ is not projective as a left $B$-module. The quotient map $\pi:B\twoheadrightarrow k=B/(\varepsilon)$ is $B$-linear and degree-zero; if $k$ were projective, its lifting property against $\pi$ and the identity of $k$ would produce a $B$-linear section $s:k\to B$ with $\pi s=1_k$. Writing $u:=s(1)$ one has $\pi(u)=1$, so $u=1+c\varepsilon$ for some $c\in k$, and $B$-linearity gives $\varepsilon u=s(\varepsilon\cdot1)=s(0)=0$, whereas $\varepsilon u=\varepsilon+c\varepsilon^2=\varepsilon\ne0$. This contradiction shows that no such section exists, so $k$ is not projective over $B$. [L1, L3, L4]

2.1 Steps 1.2 and 1.3 give a right-flat bimodule $M$ whose tensor functor is exact and whose value on the finite graded projective left $A$-module $A=k$ is $M\otimes_kk\cong k$; by step 1.4 that output is not projective as a left $B$-module, and it is not a finite graded projective module either. Hence the exactness hypothesis of [L3] does not deliver its projectivity conclusion, which is why that conclusion carries the separate hypothesis that $M$ be finite graded projective over $B$ — a hypothesis $M$ fails by step 1.4. [step 1.2, step 1.3, step 1.4, L3, L4]

3.1 The example therefore exhibits a right-flat tensor bimodule whose tensor functor is exact but which produces a nonprojective, non-finite-projective output from a finite graded projective input. ∎ [step 2.1]
