---
id: "ex-unramified-closed-point-immersion"
kind: "example"
title: "A closed point immersion is unramified"
status: draft
origin: "pipeline"
pipeline_run: frontier-35-ten-categories
generation:
  role: example
deps: ["def-unramified-morphism-finite-type", "thm-conormal-sequence-closed-immersion", "def-closed-immersion-schemes", "thm-formally-unramified-differentials-zero", "thm-sheaf-differentials-universal-property", "def-locally-finite-type-and-finite-type-morphism", "def-finite-type-and-module-finite-algebras", "thm-affine-closed-immersions-quotient-rings", "lem-zariski-closed-set-axioms", "cor-polynomial-ring-over-a-domain-is-a-domain"]
proof_strategy: "direct"
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "Stacks Morphisms 29.36.8"
      url: "https://stacks.math.columbia.edu/download/morphisms.pdf"
---

## Example

Let $k$ be a field and let $i\colon\operatorname{Spec}k\hookrightarrow
\mathbb A^{1}_{k}=\operatorname{Spec}k[t]$ be the closed immersion induced by
$k[t]\to k$, $t\mapsto0$, whose image is the closed point $V(t)=\{(t)\}$. Then
$$\Omega_{\operatorname{Spec}k/\mathbb A^{1}_{k}}=0$$
and $i$ is unramified, although it is not an open immersion. More generally
every closed immersion is unramified under the locally finite type convention
used on the category page: it is locally of finite type, and its relative
differentials vanish because the conormal sequence of a closed immersion
receives the vanishing $\Omega_{Y/Y}$ of the identity of the target.

## Facts & Assumptions

**Given:** A field $k$, the affine line $Y=\mathbb A^{1}_{k}=\operatorname{Spec}k[t]$, the point $X=\operatorname{Spec}k$ and the closed immersion $i\colon X\to Y$ induced by $k[t]\to k$, $t\mapsto0$.

[F1] [[thm-conormal-sequence-closed-immersion]]: for a closed immersion $i\colon X\to Y$ of $S$-schemes with ideal sheaf $\mathcal I$, the sequence $\mathcal I/\mathcal I^{2}\to i^{*}\Omega_{Y/S}\to\Omega_{X/S}\to0$ of $\mathcal O_X$-modules is exact, $\alpha$ sending the class of a local section $t$ of $\mathcal I$ to $1\otimes\mathrm d_{Y/S}(t)$; injectivity of $\alpha$ is not asserted.

[F2] [[thm-sheaf-differentials-universal-property]]: for every morphism $X\to S$ and every $\mathcal O_X$-module $\mathcal F$, composition with $\mathrm d_{X/S}$ is a bijection $\operatorname{Hom}_{\mathcal O_X}(\Omega_{X/S},\mathcal F)\to\operatorname{Der}_S(\mathcal O_X,\mathcal F)$.

[F3] [[thm-formally-unramified-differentials-zero]]: a morphism of schemes is formally unramified if and only if its sheaf of relative differentials vanishes.

[F4] [[def-unramified-morphism-finite-type]]: a morphism is unramified when it is locally of finite type and formally unramified; equivalently it is locally of finite type with $\Omega_{X/S}=0$.

[F5] [[def-locally-finite-type-and-finite-type-morphism]]: a morphism $f\colon X\to S$ is locally of finite type when every point of $X$ has an affine open neighbourhood $U=\operatorname{Spec}B$ with $f(U)$ inside an affine open $V=\operatorname{Spec}A$ such that $A\to B$ is of finite type.

[F6] [[def-finite-type-and-module-finite-algebras]]: an $R$-algebra $A$ is of finite type when it is a quotient of a polynomial algebra $R[x_1,\dots,x_n]$ for some $n$, equivalently when it is generated as an $R$-algebra by finitely many elements; in particular a quotient of $R$ itself ($n=0$) is of finite type over $R$.

[F7] [[thm-affine-closed-immersions-quotient-rings]]: for a ring $A$, closed immersions $Z\to\operatorname{Spec}A$ are, up to unique isomorphism over $\operatorname{Spec}A$, precisely the morphisms $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$ for ideals $I\subseteq A$.

[F8] [[def-closed-immersion-schemes]]: a morphism is a closed immersion when its underlying map is a homeomorphism onto a closed subset and $\mathcal O_Y\to i_*\mathcal O_X$ is surjective.

[F9] [[lem-zariski-closed-set-axioms]]: the vanishing sets $V(I)$, for $I$ ranging over the ideals of a commutative ring $R$, are the closed sets of a topology on $\operatorname{Spec}(R)$; hence a subset of $\operatorname{Spec}(R)$ is open exactly when it is the complement of some $V(I)$.

[F10] [[cor-polynomial-ring-over-a-domain-is-a-domain]]: $k[t]$ is an integral domain because $k$ is a field, so the zero ideal $(0)$ is a prime of $k[t]$.

## Verification

1.1 The image of $i$ is the set of primes of $k[t]$ containing the kernel $(t)$ of $k[t]\to k$, namely $\{(t)\}=V(t)$; in particular $(t)$ is the image point. The assertion to be verified has four parts: $\Omega_{X/Y}=0$, formal unramifiedness of $i$, local finite type of $i$, and the failure of openness. [given]

1.2 Vanishing of $\Omega_{Y/Y}$: apply [F2] to the identity morphism $f=\mathrm{id}_Y$ with $X=S=Y$; for every $\mathcal O_Y$-module $\mathcal F$ the universal property gives $\operatorname{Hom}_{\mathcal O_Y}(\Omega_{Y/Y},\mathcal F)\cong\operatorname{Der}_Y(\mathcal O_Y,\mathcal F)$. A $Y$-derivation $D$ of $\mathcal O_Y$ annihilates the image of the structure map of the identity, namely all local sections of $\mathcal O_Y$, so $\operatorname{Der}_Y(\mathcal O_Y,\mathcal F)=0$ and hence $\operatorname{Hom}_{\mathcal O_Y}(\Omega_{Y/Y},\mathcal F)=0$ for every $\mathcal F$. Taking $\mathcal F=\Omega_{Y/Y}$ and the identity endomorphism as the element of the Hom set shows that the identity of $\Omega_{Y/Y}$ is zero, so $\Omega_{Y/Y}=0$. [F2, given]

2.1 The conormal sequence of the closed immersion $i$, taken over the base $S=Y$, reads $\mathcal I/\mathcal I^{2}\to i^{*}\Omega_{Y/Y}\to\Omega_{X/Y}\to0$ and is exact by [F1]; since $\Omega_{Y/Y}=0$ by step 1.2, the middle term $i^{*}\Omega_{Y/Y}$ is the zero module, and exactness at $\Omega_{X/Y}$ then forces $\Omega_{X/Y}=0$: the image of the zero module is $0$, so $\Omega_{X/Y}=\operatorname{im}(0)=0$. In the affine model $A=k[t]$, $I=(t)$, $B=k[t]/(t)=k$ the same conclusion is the algebraic conormal sequence with middle term $B\otimes_{A}\Omega_{A/A}=0$. [F1, step 1.2]

2.2 Not open: suppose the image $V(t)$ of $i$ were an open subset of $\operatorname{Spec}k[t]$. By [F9] the closed subsets are exactly the vanishing sets $V(J)$ for ideals $J\subseteq k[t]$, so there would be an ideal $J$ with $V(J)=\operatorname{Spec}k[t]\smallsetminus V(t)$, that is, $V(J)$ misses exactly the point $(t)$. The zero ideal $(0)$ is a prime of $k[t]$ by [F10] and $(0)\neq(t)$, so $(0)$ is not the point missed by $V(J)$; hence $(0)\in V(J)$, which by definition means $J\subseteq(0)$, so $J=(0)$. But then $V(J)=V((0))=\operatorname{Spec}k[t]$, since every prime of $k[t]$ contains $0$; this contradicts $V(J)=\operatorname{Spec}k[t]\smallsetminus\{(t)\}$, because $(t)$ is a prime of $k[t]$ while $\operatorname{Spec}k[t]\smallsetminus\{(t)\}\neq\operatorname{Spec}k[t]$. Therefore the image is not open, and $i$ is not an open immersion. [F9, F10, step 1.1]

3.1 Formal unramifiedness: by [F3], $\Omega_{X/Y}=0$ is equivalent to $i$ being formally unramified; combined with step 2.1 this gives the formal unramifiedness of $i$ without any finiteness hypothesis. [F3, step 2.1]

3.2 The general closed immersion: let $i\colon X\to Y$ be any closed immersion. By the global argument of steps 1.2 and 2.1 with $Y$ in place of the affine line — $\Omega_{Y/Y}=0$ by [F2], and the conormal sequence over the base $Y$ by [F1] — one gets $\Omega_{X/Y}=0$, hence formal unramifiedness of $i$ by [F3]. [F1, F2, F3, step 1.2, step 2.1]

4.1 For local finite type, pass to an affine chart $\operatorname{Spec}A\subseteq Y$: the restriction of a closed immersion to an open subscheme of the target is again a closed immersion by [F8], because the image becomes the intersection with the open set and the surjection of structure sheaves restricts; by [F7] that chart is $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$ for an ideal $I\subseteq A$, and $A/I$ is a finitely generated $A$-algebra by [F6], so the affine-local condition of [F5] is satisfied on that chart. [F5, F6, F7, F8, step 3.2]

4.2 Local finite type: the morphism $i$ is affine, and its coordinate map $k[t]\to k$ is surjective with $k=k[t]/(t)$, so $k$ is a quotient of the polynomial algebra $k[t]$, hence a finitely generated $k[t]$-algebra by [F6], and the affine-local condition of [F5] is satisfied (the single chart $Y$ itself suffices). By [F4] the map $i$ is therefore unramified, being locally of finite type and formally unramified by step 3.1. [F4, F5, F6, step 3.1]

5.1 Hence by [F4] every closed immersion is unramified under the locally finite type convention, being locally of finite type by step 4.1 and formally unramified by step 3.2. [F4, step 3.2, step 4.1]

6.1 For the displayed example this gives $\Omega_{\operatorname{Spec}k/\mathbb A^{1}_{k}}=0$ by step 2.1, unramifiedness by step 4.2, and non-openness by step 2.2; the example is thus an immersion that is closed but not open and still unramified, and the general statement of steps 3.2, 4.1 and 5.1 covers all closed immersions. [step 2.1, step 4.2, step 2.2, step 5.1] ∎
