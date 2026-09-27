---
id: "thm-unramified-diagonal-open-immersion"
kind: "theorem"
title: "An unramified morphism has an open diagonal"
status: draft
origin: "pipeline"
deps: ["def-unramified-morphism-finite-type", "lem-differentials-diagonal-ideal-square", "def-diagonal-morphism-scheme", "thm-affine-fibre-product-tensor-ring", "def-open-immersion-schemes", "lem-determinant-trick-for-nakayama", "thm-affine-closed-immersions-quotient-rings", "lem-sheaf-differentials-affine-compatibility", "def-locally-finite-type-and-finite-type-morphism", "thm-formally-unramified-differentials-zero", "lem-morphism-schemes-local-on-source-target", "lem-idempotent-gives-clopen-spectrum-partition"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Stacks Morphisms, Lemma 29.36.13 (tag 02GE) and Stacks Algebra, Lemma 10.151.4"
      url: "https://stacks.math.columbia.edu/tag/02GE"
---

## Statement

Let $f\colon X\to S$ be a morphism of schemes and let
$\Delta=\Delta_{X/S}\colon X\to X\times_SX$ be its diagonal
([[def-diagonal-morphism-scheme]]).

1. If $f$ is unramified ([[def-unramified-morphism-finite-type]]) then
   $\Delta$ is an open immersion ([[def-open-immersion-schemes]]).
2. Conversely, if $f$ is locally of finite type and $\Delta$ is an open
   immersion, then $f$ is unramified.

No separatedness hypothesis is needed in either direction: the diagonal of an
unramified morphism need not be closed, and the diagonal need not be a closed
immersion for the argument. Only local finite type is used, never finite
presentation or flatness.

## Facts & Assumptions

**Given:** A morphism $f\colon X\to S$ with diagonal $\Delta\colon X\to X\times_SX$.

[F1] [[def-unramified-morphism-finite-type]] and [[thm-formally-unramified-differentials-zero]]: $f$ is unramified if and only if $f$ is locally of finite type and $\Omega_{X/S}=0$; equivalently if and only if $f$ is locally of finite type and formally unramified.

[F2] [[def-locally-finite-type-and-finite-type-morphism]]: over affine opens $\operatorname{Spec}B\subseteq X$ and $\operatorname{Spec}A\subseteq S$ with $f(\operatorname{Spec}B)\subseteq\operatorname{Spec}A$, the induced ring map $A\to B$ exhibits $B$ as a finitely generated $A$-algebra.

[F3] [[def-diagonal-morphism-scheme]] and [[thm-affine-fibre-product-tensor-ring]]: on affine charts $U=\operatorname{Spec}B$ over $V=\operatorname{Spec}A$ the diagonal restricts to $U\to U\times_VU=\operatorname{Spec}(B\otimes_AB)$, the morphism induced by the multiplication $\mu\colon B\otimes_AB\to B$; it is a closed immersion by [[thm-affine-closed-immersions-quotient-rings]] because $\mu$ is surjective, with $J=\ker\mu$.

[F4] [[lem-differentials-diagonal-ideal-square]]: $J/J^2\cong\Omega_{B/A}$.

[F5] [[lem-determinant-trick-for-nakayama]]: if $M$ is a finitely generated module over a commutative ring $C$ and $IM=M$ for an ideal $I$, then there is $a\in I$ with $(1-a)M=0$.

[F6] [[def-open-immersion-schemes]]: an open immersion identifies its source isomorphically with an open subscheme of its target. A morphism which is injective on points and restricts, over the members of an open cover of its source, to isomorphisms onto open subschemes of the target is an open immersion; morphisms glue by [[lem-morphism-schemes-local-on-source-target]].

[F7] [[lem-sheaf-differentials-affine-compatibility]] and [[lem-idempotent-gives-clopen-spectrum-partition]]: $\Omega_{X/S}$ vanishes if and only if $\Omega_{B/A}=0$ on every affine chart; an idempotent $e$ of a ring $C$ gives a clopen partition $\operatorname{Spec}C=D(e)\sqcup D(1-e)$ with $V(e)=D(1-e)$, and for an idempotent the restriction ring is $C_{1-e}\cong C/(e)$.

## Proof

**Proof technique:** direct.

1.1 Chart description. Let $U=\operatorname{Spec}B\subseteq X$ be affine over an affine open $V=\operatorname{Spec}A\subseteq S$, and write $C=B\otimes_AB$, $J=\ker\mu$ for the multiplication $\mu\colon C\to B$. By [F3] the diagonal restricts to the morphism $\Delta_U\colon U\to U\times_VU=\operatorname{Spec}C$ induced by $\mu$, a closed immersion with ideal $J$. The elements $1\otimes b-b\otimes1$ for $b$ in a generating set of $B$ over $A$ generate $J$ as a $C$-module, so if $B$ is a finitely generated $A$-algebra, $J$ is a finitely generated $C$-module; and by [F4] $J/J^2\cong\Omega_{B/A}$. [F2, F3, F4, given]

2.1 Unramified implies finite generation and $\Omega=0$ on charts. If $f$ is unramified then by [F1] it is locally of finite type and $\Omega_{X/S}=0$, so $B$ is a finitely generated $A$-algebra and $\Omega_{B/A}=0$ on every chart; hence $J$ is a finitely generated $C$-module with $J=J^2$ by [F4]. Applying [F5] inside the ring $C$ to the ideal $J$ and the $C$-module $J$, we find $e\in J$ with $(1-e)J=0$; then $e^2=e$, since $e\in J$, and $J=eC$: indeed $j=ej\in eC$ for $j\in J$ and $eC\subseteq J$ as $J$ is an ideal. [F1, F4, F5, step 1.1]

2.2 Conversely, assume $f$ locally of finite type and $\Delta$ an open immersion. Let $U=\operatorname{Spec}B$ be an affine chart over $V=\operatorname{Spec}A$ as in step 1.1. Since $\Delta^{-1}(U\times_VU)\supseteq U$, the restriction $\Delta_U\colon U\to U\times_VU$ is again an open immersion, and by [F3] it is also the closed immersion induced by the surjection $\mu\colon C\to B$ with kernel $J$. Its image is therefore open and closed in $\operatorname{Spec}C$. [F3, F6, step 1.1]

3.1 The chart diagonal is an open immersion when $f$ is unramified. With $e$ as in step 2.1, $J=eC$ has radical $\sqrt{(e)}$, so the image $V(J)$ of the closed immersion $\Delta_U$ equals $V(e)=D(1-e)$, which is open in $\operatorname{Spec}C$ by [F7]. Moreover $C/J=C/eC\cong C/(e)\cong C_{1-e}$ is exactly the ring of the open subscheme $D(1-e)$, and $\Delta_U$ is the morphism $C\to C/J$ over $\operatorname{Spec}C$; hence $\Delta_U$ identifies $U$ isomorphically with the open subscheme $D(1-e)$ of $U\times_VU$, so $\Delta_U$ is an open immersion. [F3, F6, F7, step 2.1]

3.2 The image is a principal open. Let $\Delta_U(U)=V(I)$ for the radical ideal $I$ of the closed image and $\operatorname{Spec}C\setminus\Delta_U(U)=V(K)$. Since these closed sets are complementary, $I+K=C$ and $IK\subseteq\operatorname{nil}(C)$ because $V(IK)=\operatorname{Spec}C$. Choose $i\in I$ and $k\in K$ with $i+k=1$, and choose $m\ge1$ with $(ik)^m=0$. Expanding $1=(i+k)^{2m-1}$, every monomial is divisible by either $i^m$ or $k^m$, so $1=ai^m+bk^m$ for some $a,b\in C$. Put $e=ai^m$; then $1-e=bk^m$ and $e(1-e)=ab(ik)^m=0$, hence $e^2=e$. Since $e\in I$ and $1-e\in K$, we have $\Delta_U(U)=V(I)\subseteq V(e)=D(1-e)\subseteq\operatorname{Spec}C\setminus V(K)=\Delta_U(U)$, so $\Delta_U(U)=D(1-e)$. [F7, step 2.2]

4.1 $\Delta$ is an open immersion when $f$ is unramified. The affine charts $U$ of step 3.1 cover $X$, and for each of them $\Delta|_U=\Delta_U$ is an isomorphism onto the open subset $D(1-e_U)$ of $U\times_VU\subseteq X\times_SX$. The diagonal is injective on points, since $\Delta(x)=(x,x)$ determines $x$, and an open immersion is exactly a morphism which is locally on the source an isomorphism onto an open subscheme and injective on points; by [F6] the local isomorphisms glue to an isomorphism of $X$ with the open subscheme $\Delta(X)=\bigcup_U\Delta(U)$ of $X\times_SX$. Hence $\Delta$ is an open immersion. [F6, step 3.1]

4.2 The conormal module vanishes. The open immersion $\Delta_U$ identifies $U$ with the open subscheme $D(1-e)$, whose ring is $C/(e)$ by [F7]; since the structure map of $\Delta_U$ is $C\to C/J$, the two descriptions of the same ring map give $J=(e)$. Hence $J^2=(e^2)=(e)=J$, so $J/J^2=0$ and [F4] gives $\Omega_{B/A}=0$. As the charts cover $X$ and $B$ was an arbitrary chart, [F7] gives $\Omega_{X/S}=0$; with $f$ locally of finite type, [F1] makes $f$ unramified. [F1, F4, F7, step 3.2]

5.1 Conclusion. Steps 2.1, 3.1 and 4.1 prove that an unramified $f$ has open diagonal, and steps 2.2, 3.2 and 4.2 prove that a locally finite type $f$ with open diagonal is unramified. No separatedness assumption was made: the diagonal is used as a closed immersion only on affine charts, where the multiplication $B\otimes_AB\to B$ is surjective, and the open condition comes from the idempotent splitting $J=eC$. [step 4.1, step 4.2] ∎
