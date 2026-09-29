---
id: thm-finite-morphism-integral-closed
kind: theorem
title: Finite morphisms are integral and universally closed
status: draft
origin: pipeline
deps:
  - def-finite-morphism-schemes
  - thm-integrality-and-finite-module-equivalences
  - def-integral-element-and-algebraic-integer
  - thm-lying-over
  - lem-finite-stable-base-change-composition
  - def-affine-scheme-spectrum
  - lem-zariski-closed-set-axioms
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.45.4 (tag 01WG) and Lemma 29.44.4"
      url: https://stacks.math.columbia.edu/tag/01WG
    - title: "Vakil, The Rising Sea, §8.3.6 and Exercise 8.3.M"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Statement

Assume the Axiom of Choice. Let $f:X\to S$ be a finite morphism of schemes.
Then every ring map $A\to B$ induced by $f$ on an affine chart
$U=\operatorname{Spec}A\subseteq S$ with $f^{-1}(U)=\operatorname{Spec}B$ is
integral. Moreover $f$ is universally closed: for every morphism $T\to S$ the
base-changed projection $X\times_ST\to T$ is a closed map, so the image of
$X\times_ST$ and of every closed subset of it is closed in $|T|$.

## Facts & Assumptions

**Given:** A finite morphism $f:X\to S$, an affine chart $U=\operatorname{Spec}A\subseteq S$ with $f^{-1}(U)=\operatorname{Spec}B$, and an arbitrary base-change morphism $T\to S$.

[F1] $f$ is **finite** when for every affine open $U=\operatorname{Spec}A\subseteq S$ the inverse image is affine, $f^{-1}(U)=\operatorname{Spec}B$, and the induced $A$-algebra $B$ is module-finite over $A$; the zero ring is allowed. ([[def-finite-morphism-schemes]])

[F2] Let $A\subseteq B$ be commutative rings with $A\ne0$ and $b\in B$. Then $b$ is integral over $A$ if and only if there is a faithful $A[b]$-module that is finitely generated over $A$. ([[thm-integrality-and-finite-module-equivalences]])

[F3] An element $b$ of a commutative $A$-algebra $B$ is **integral over $A$** when it is a root of a monic polynomial in $A[X]$; the algebra is integral when every element is integral. Reducing a monic relation modulo an ideal $J\subseteq B$ gives a monic relation for the image, so a quotient of an integral $A$-algebra is integral over $A$. ([[def-integral-element-and-algebraic-integer]])

[F4] Assume AC. Let $A\to B$ be an integral ring map and let $\mathfrak p\in\operatorname{Spec}(A)$ with $\ker(A\to B)\subseteq\mathfrak p$. Then there exists $\mathfrak q\in\operatorname{Spec}(B)$ with $\mathfrak q\cap A=\mathfrak p$. ([[thm-lying-over]])

[F5] Assume AC. For every finite morphism $Y\to S$ and every morphism $T\to S$ the projection $Y\times_ST\to T$ is finite. ([[lem-finite-stable-base-change-composition]])

[F6] For a commutative ring $A$ the sets $V(I)=\{\mathfrak p:I\subseteq \mathfrak p\}$ are the closed subsets of $\operatorname{Spec}A$. ([[def-affine-scheme-spectrum]], [[lem-zariski-closed-set-axioms]])

[F7] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct: finite module algebras are integral, and integral extensions have closed images by lying over.

1.1 Work on the affine chart $U=\operatorname{Spec}A$ with $f^{-1}(U)=\operatorname{Spec}B$, so that $B$ is a finite $A$-module by [F1]. If $A=0$ then $U$ is empty and there is nothing to check. Let $A'=\operatorname{im}(A\to B)\subseteq B$. If $A'=0$, unitality forces $B=0$, and the map is integral vacuously. Otherwise, a finite $A$-module generating list for $B$ also generates $B$ over $A'$, because every coefficient acts through its image in $A'$. For any $b\in B$, the module $B$ is an $A'[b]$-module, finite over $A'$, and faithful over $A'[b]$: if $r\in A'[b]$ satisfies $rB=0$, then $r=r\cdot1=0$. The inclusion version of [F2], applied to $A'\subseteq B$, makes $b$ integral over $A'$. Lift the coefficients of that monic relation along the surjection $A\to A'$; the same relation in $B$ proves that $b$ is integral over $A$. Since $b$ was arbitrary, the ring map $A\to B$ is integral by [F3]. [F1, F2, F3]

2.1 Let $J\subseteq B$ be an ideal and let $Z=V(J)\subseteq \operatorname{Spec}B$ be the corresponding closed subset, every closed subset of $\operatorname{Spec}B$ being of this form by [F6]. The composite $A\to B\to B/J$ is integral: an element of $B/J$ is the image of some $b\in B$, and reducing a monic relation for $b$ over $A$ modulo $J$ exhibits a monic relation for its image, by [F3]. Put $I=\ker(A\to B/J)$ and let $\varphi:\operatorname{Spec}B\to\operatorname{Spec}A$ be the map induced by $A\to B$. The image $\varphi(Z)$ equals $V(I)$: if $\mathfrak q\supseteq J$ then $\mathfrak q\cap A\supseteq I$; conversely, if $\mathfrak p\supseteq I$ then $I =\ker(A\to B/J)\subseteq\mathfrak p$, so [F4] applied to the integral map $A\to B/J$ produces a prime of $B/J$ contracting to $\mathfrak p$, that is a prime $\mathfrak q\supseteq J$ of $B$ with $\mathfrak q\cap A=\mathfrak p$. By [F6] the set $V(I)$ is closed in $\operatorname{Spec}A$. Thus every affine chart of a finite morphism maps closed subsets onto closed subsets. [F3, F4, F6, step 1.1]

3.1 Consequently every finite morphism $g:Y\to S$ is closed. Let $Z\subseteq Y$ be closed and let $S=\bigcup_iU_i$ be an affine open cover with $U_i=\operatorname{Spec}A_i$ and $g^{-1}(U_i)=\operatorname{Spec}B_i$ affine. For each $i$ the trace $Z\cap g^{-1}(U_i)$ is closed in the open subspace $g^{-1}(U_i)$, and $g(Z)\cap U_i=g(Z\cap g^{-1}(U_i))$ is closed in $U_i$ by step 2.1. A subset of $S$ whose trace in every member of an open cover is closed in that member is closed, since its complement has open trace in every $U_i$. Hence $g(Z)$ is closed in $S$. [F1, step 2.1]

4.1 Now let $T\to S$ be arbitrary. By [F5] the base change $f_T:X\times_ST\to T$ is again finite, so step 3.1 applied to the finite morphism $f_T$ shows that $f_T$ is a closed map. Since $T\to S$ was arbitrary, $f$ is universally closed. [F5, step 3.1]

5.1 Step 1.1 shows that the induced ring maps on all affine charts are integral, and step 4.1 shows that $f$ is universally closed, in particular that the image of $X\times_ST$ and the image of any closed subset are closed in $|T|$. The Axiom of Choice is used exactly through [F4], which supplies primes over primes for the integral map $A\to B/J$, and [F5], which provides the base-changed finite morphism; no other selection occurs. If $B=0$ the chart is empty, the closed subset $Z$ is empty and its image is empty and closed, so the same argument applies through the zero ring case of step 1.1. [F1, F4, F5, F7, step 1.1, step 4.1] ∎
