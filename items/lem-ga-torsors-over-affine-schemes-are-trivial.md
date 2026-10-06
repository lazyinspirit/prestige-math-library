---
id: lem-ga-torsors-over-affine-schemes-are-trivial
kind: lemma
title: Torsors under the additive group over an affine scheme are trivial
dependency_level: 0
deps:
  - def-affine-scheme
  - def-axiom-of-choice
  - def-faithfully-flat-morphism-schemes
  - def-open-immersion-schemes
  - def-locally-finite-presentation-morphism
  - def-quasi-compact-and-quasi-separated-morphism
  - lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union
  - thm-affine-fibre-product-tensor-ring
  - prop-transitivity-of-flatness-under-change-of-rings
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Example 2.68 and Example 2.72 with the surrounding paragraph on torsors, printed pp. 54-61
    - title: The Stacks Project, Descent, Lemma 35.3.6 (exactness of the extended Amitsur complex)
      url: https://stacks.math.columbia.edu/tag/023M
---
## Statement

Assume the Axiom of Choice. Let $R$ be a commutative ring and let $S=\operatorname{Spec}R$. Let $\mathbf G_a=\operatorname{Spec}R[t]$ be the additive group scheme over $R$, with comultiplication $\Delta(t)=t\otimes1+1\otimes t$, counit $\varepsilon(t)=0$ and antipode $S(t)=-t$, so that $\mathbf G_a(T)=\mathcal O_T(T)$ as an additive group for every $S$-scheme $T$.

A **$\mathbf G_a$-torsor over $S$** is an $S$-scheme $\pi:X\to S$ that is faithfully flat and finitely presented, together with an action $\alpha:\mathbf G_a\times_SX\to X$ of $\mathbf G_a$ on $X$ over $S$ such that the shear morphism
$$\sigma:\mathbf G_a\times_SX\to X\times_SX,\qquad \sigma(g,x)=(g\cdot x,x)$$
is an isomorphism. Then $X$ is **trivial**: there is an isomorphism $X\cong\mathbf G_a\times_S S=\mathbf A^1_R$ of $S$-schemes, and in particular $\pi$ admits a section $S\to X$.

The Axiom of Choice enters through the fppf descent of scheme morphisms used below.

## Facts & Assumptions

**Given:** The Axiom of Choice, a commutative ring $R$, the affine base $S=\operatorname{Spec}R$, and a $\mathbf G_a$-torsor $\pi:X\to S$ with action $\alpha$ and shear isomorphism $\sigma$.

[F1] The given morphism $X\to S$ is flat, surjective, quasi-compact, and locally of finite presentation. An affine morphism is quasi-compact, and a flat surjective morphism is faithfully flat ([[def-faithfully-flat-morphism-schemes]], [[def-locally-finite-presentation-morphism]], [[def-quasi-compact-and-quasi-separated-morphism]]).

[F2] Open immersions are flat and locally of finite presentation; flatness and local finite presentation are preserved by composition; and a finite disjoint union of affine schemes is affine ([[def-open-immersion-schemes]], [[def-locally-finite-presentation-morphism]], [[prop-transitivity-of-flatness-under-change-of-rings]], [[lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union]]).

[F3] Fibre products of affine schemes over $S=\operatorname{Spec}R$ are affine with the tensor-product coordinate ring ([[thm-affine-fibre-product-tensor-ring]]).

[F4] For a faithfully flat ring map $R\to B$, the Amitsur complex
$$0\to R\to B\xrightarrow{d^0}B\otimes_RB\xrightarrow{d^1}B\otimes_RB\otimes_RB,\qquad d^0(b)=b\otimes1-1\otimes b,$$
is exact, where $d^1(c)=c\otimes1-c_{13}+1\otimes c$ in the three tensor slots. Thus every $1$-cocycle in $B\otimes_RB$ is $d^0(b)$ for some $b\in B$ (Stacks Project, Descent, Lemma 35.3.6, tag 023M; already recorded above as a source).

[F5] Under AC, a morphism $f':X'\to Z$ descends uniquely along a faithfully flat, quasi-compact, locally finitely presented map $p:X'\to X$ exactly when its two pullbacks to $X'\times_XX'$ agree ([[lem-nonaffine-fppf-descent-of-scheme-morphisms]], [[def-axiom-of-choice]]).

[F6] The action satisfies $\alpha(g,\alpha(g',x))=\alpha(g+g',x)$, and the shear isomorphism gives a unique group element carrying one point of a fibre to another. Also $\mathbf G_a(T)=\mathcal O_T(T)$ by the group-scheme description in the Statement.

## Proof

**Given:** The Axiom of Choice, a commutative ring $R$, and the $\mathbf G_a$-torsor $\pi:X\to S$ with action $\alpha$ and shear isomorphism $\sigma(g,x)=(g\cdot x,x)$.

1.1 If $S=\varnothing$, faithful flatness forces $X=\varnothing$ and the claim is immediate. Otherwise $X$ is quasi-compact because $X\to S$ is of finite presentation, so choose a finite affine open cover $\{U_i\}$ of $X$. Its finite disjoint union $U=\coprod_iU_i=\operatorname{Spec}B$ is affine by [F2]. The map $p:U\to S$ is flat because each $U_i\to X$ is an open immersion and $X\to S$ is flat; it is surjective because the $U_i$ cover $X$ and $X\to S$ is surjective; and it is locally of finite presentation by composition. It is quasi-compact because it is affine. Thus $p$ is faithfully flat, quasi-compact, and locally of finite presentation. Write $S=\operatorname{Spec}R$, so $R\to B$ is faithfully flat by [F1], and [F3] identifies the affine fibre products of $U$ over $S$ with the corresponding tensor products. Let $u:U\to X$ be the covering morphism. [F1, F2, F3]

2.1 On $U\times_SU$, let $u_1,u_2$ be the two pullbacks of $u$. The shear isomorphism gives a unique morphism $\delta:U\times_SU\to\mathbf G_a$ with $u_2=\delta\cdot u_1$. By [F3], $\delta$ is an element of $B\otimes_RB$. On $U\times_SU\times_SU$, uniqueness and the group law give $\delta_{13}=\delta_{12}+\delta_{23}$, so $d^1(\delta)=0$ in the Amitsur complex of [F4]. Exactness gives $b\in B$ with $\delta=b\otimes1-1\otimes b$, where the two tensor slots correspond to the first and second copies of $U$. [step 1.1, F3, F4, F6]

3.1 Regard $b\in B=\mathcal O_U(U)$ as a morphism $U\to\mathbf G_a$ and set $v=b\cdot u:U\to X$. On $U\times_SU$, $v_2=b_2\cdot u_2=(b_2+\delta_{12})\cdot u_1=b_1\cdot u_1=v_1$, since $\delta_{12}=b_1-b_2$. Hence the two pullbacks of $v$ agree. By [F5], $v$ descends to a morphism $s:S\to X$; since $\pi\circ v=p$, uniqueness in [F5] gives $\pi\circ s=\operatorname{id}_S$. Thus $s$ is a section. [F4, F5, step 2.1, F6]

4.1 Define $\Phi:\mathbf G_a\times_SS\to X$ by $\Phi(g,z)=g\cdot s(z)$. Applying $\sigma^{-1}$ to the morphism $X\to X\times_SX$, $y\mapsto(y,s(\pi(y)))$, gives a morphism $y\mapsto(g(y),s(\pi(y)))$ with $g(y)\in\mathbf G_a$. The map $y\mapsto(g(y),\pi(y))$ is inverse to $\Phi$: one composite is the identity by the defining equation $g(y)\cdot s(\pi(y))=y$, and the other by uniqueness in the shear isomorphism. Therefore $X\cong\mathbf A^1_R$ over $S$, and $s$ is the required section. [F6, step 3.1] ∎ 