---
id: lem-ample-divisor-positive-intersection-on-smooth-projective-surface
kind: lemma
title: "Ample divisors meet nonzero effective divisors positively"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
  - cor-affine-domain-maximal-ideal-height-equals-dimension
  - cor-height-plus-quotient-dimension-affine-domain
  - cor-minimal-prime-over-a-nonzerodivisor-has-height-one
  - def-ample-invertible-sheaf
  - def-axiom-of-choice
  - def-degree-invertible-sheaf-proper-dimension-one
  - def-dimension-noetherian-topological-space
  - def-divisor-intersection-number-on-smooth-projective-surface
  - def-effective-cartier-divisor
  - def-euler-characteristic-coherent-sheaf
  - def-hilbert-function-sheaf-projective
  - def-integral-scheme
  - def-invertible-sheaf
  - def-section-zero-scheme-invertible-sheaf
  - def-very-ample-invertible-sheaf-relative
  - lem-closed-immersion-projection-formula-invertible
  - lem-global-section-effective-divisor
  - lem-very-ample-implies-ample
  - thm-ample-powers-very-ample-proper-base
  - thm-hilbert-polynomial-coherent-sheaf
  - thm-hilbert-polynomial-degree-support-dimension
  - thm-intersection-with-curve-as-degree-of-restriction
  - thm-irreducible-closed-subsets-and-prime-ideals
  - thm-projective-morphism-proper
  - thm-serre-vanishing
  - thm-surface-intersection-product-bilinear-and-symmetric
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Varieties, Section 33.45 (Numerical intersections)"
      url: "https://stacks.math.columbia.edu/tag/0BEL"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let
$X$ be an integral smooth projective surface over $k$
([[def-divisor-intersection-number-on-smooth-projective-surface]]) and let $H$
be an ample invertible $\mathcal O_X$-module ([[def-ample-invertible-sheaf]]).

1. If $D\subseteq X$ is a nonzero effective Cartier divisor
   ([[def-effective-cartier-divisor]]), then $H\cdot D>0$.
2. Consequently $H\cdot H>0$.
3. If $\mathcal M$ is an invertible $\mathcal O_X$-module
   ([[def-invertible-sheaf]]) and $s\in\Gamma(X,\mathcal M)$ is a nonzero
   global section with zero scheme $Z(s)$
   ([[def-section-zero-scheme-invertible-sheaf]]), then
   $\mathcal M\cdot H\ge0$, and $\mathcal M\cdot H>0$ unless $Z(s)=\varnothing$
   and $\mathcal M\cong\mathcal O_X$. In particular, if
   $h^0(X,\mathcal M)>0$ and $\mathcal M$ is not numerically trivial, then
   $\mathcal M\cdot H>0$.

## Facts & Assumptions

**Given:** a field $k$, an integral smooth projective surface $X$ over $k$, an ample invertible $\mathcal O_X$-module $H$, a nonzero effective Cartier divisor $D\subseteq X$, and (for part 3) an invertible sheaf $\mathcal M$ with a nonzero global section $s$.

[F1] $X$ is projective over $k$ in the H-projective convention, hence proper over $k$ ([[thm-projective-morphism-proper]]) and of finite type, so it is Noetherian and locally Noetherian; coherent $\mathcal O_X$-modules have finite-dimensional cohomology and a well-defined Euler characteristic $\chi$ ([[def-euler-characteristic-coherent-sheaf]], [[def-divisor-intersection-number-on-smooth-projective-surface]]). The intersection product on invertible sheaves and Cartier divisors is symmetric and $\mathbb Z$-bilinear, vanishes against $\mathcal O_X$, and depends only on the isomorphism classes of the entries ([[def-divisor-intersection-number-on-smooth-projective-surface]], [[thm-surface-intersection-product-bilinear-and-symmetric]]).

[F2] For an effective Cartier divisor $C$ on $X$ and any Cartier divisor $E$ one has $C\cdot E=\deg_C(\mathcal O_X(E)|_C)$, the degree being $\deg_C(\mathcal N)=\chi(C,\mathcal N)-\chi(C,\mathcal O_C)$ of [[def-degree-invertible-sheaf-proper-dimension-one]] on the proper curve $C$ ([[thm-intersection-with-curve-as-degree-of-restriction]]).

[F3] A nonzero effective Cartier divisor $D$ on the surface $X$ is nonempty and has pure dimension one. Nonemptiness: the vanishing subscheme is empty exactly for the zero divisor ([[def-effective-cartier-divisor]]). Dimension: on an affine chart $U=\operatorname{Spec}A$ meeting $\operatorname{Supp}D$, the coordinate ring $A$ is a finite-type $k$-domain of dimension two, and at a closed point $x\in U$ with maximal ideal $\mathfrak m_x$ one has $\operatorname{ht}(\mathfrak m_x)=\dim A=2$ ([[cor-affine-domain-maximal-ideal-height-equals-dimension]]); the local equation $f_x$ of $D$ at $x$ is a nonzerodivisor and a nonunit, so every prime minimal over $(f_x)$ has height one ([[cor-minimal-prime-over-a-nonzerodivisor-has-height-one]]) and $\dim A/\mathfrak p=\dim A-\operatorname{ht}(\mathfrak p)=1$ ([[cor-height-plus-quotient-dimension-affine-domain]]); hence $\operatorname{Supp}D$ has dimension one, and it has dimension at most one everywhere by the same height computation on the remaining charts ([[def-dimension-noetherian-topological-space]], [[thm-irreducible-closed-subsets-and-prime-ideals]]). Thus $D$ is a proper $k$-scheme of pure dimension one ([[thm-projective-morphism-proper]]), and for the very ample embedding used below the coherent sheaf $\mathcal F=i_*\mathcal O_D$ is nonzero with $\dim\operatorname{Supp}\mathcal F=1$ ([[def-integral-scheme]]).

[F4] Very ample powers: since $\operatorname{Spec}k$ is Noetherian, $X\to\operatorname{Spec}k$ is proper of finite type and $H$ is ample, there is an integer $m\ge1$ such that $H^{\otimes m}$ is closed H-very ample relative to $\operatorname{Spec}k$ ([[thm-ample-powers-very-ample-proper-base]]); by definition this means that for some $N\ge0$ there is a closed immersion $i:X\hookrightarrow\mathbb P^N_k$ with $i^*\mathcal O_{\mathbb P^N}(1)\cong H^{\otimes m}$ ([[def-very-ample-invertible-sheaf-relative]]). Fix such $m,i,N$ and write $\mathcal O_X(1):=H^{\otimes m}$ for the embedding $i$.

[F5] Hilbert polynomial: for a coherent $\mathcal O_X$-module $\mathcal F$ and the twist $\mathcal F(n)=\mathcal F\otimes\mathcal O_X(1)^{\otimes n}$ the function $n\mapsto\chi(X,\mathcal F(n))$ is a polynomial $P_{\mathcal F}$ of degree $\dim\operatorname{Supp}\mathcal F$, with exact degree and nonzero leading coefficient when $\mathcal F\ne0$, and $P_{\mathcal F}(n)=h^0(X,\mathcal F(n))$ for $n\gg0$ ([[def-hilbert-function-sheaf-projective]], [[thm-hilbert-polynomial-coherent-sheaf]], [[thm-hilbert-polynomial-degree-support-dimension]]). Moreover for $n\gg0$ all higher cohomology of $\mathcal F(n)$ vanishes ([[thm-serre-vanishing]]).

[F6] For a closed immersion $j:D\hookrightarrow X$ and an invertible sheaf $A$ on $X$, the projection formula gives $A^{\otimes n}\otimes j_*\mathcal O_D\cong j_*(A^{\otimes n}|_D)$ and $\chi(X,j_*(A^{\otimes n}|_D))=\chi(D,A^{\otimes n}|_D)$ for every integer $n$ ([[lem-closed-immersion-projection-formula-invertible]]).

[F7] A nonzero global section of an invertible sheaf on the integral scheme $X$ is a regular section, its zero scheme $Z(s)$ is an effective Cartier divisor with $\mathcal O_X(Z(s))\cong\mathcal M$ and $Z(s)=\varnothing$ exactly when $s$ is nowhere vanishing, in which case $\mathcal M\cong\mathcal O_X$ ([[lem-global-section-effective-divisor]], [[def-section-zero-scheme-invertible-sheaf]]).

[F8] The Axiom of Choice is inherited from the cohomology, Hilbert-polynomial and ample-embedding suppliers of [F4]–[F6]; the divisor $D$, the section $s$ and the embedding $i$ are given data, and only finitely many sheaves and Hilbert-polynomial values are used below.



## Proof
**Proof technique:** direct: replace $H$ by a very ample power, express its intersection with the curve $D$ as the first difference of the Hilbert polynomial of $\mathcal O_D$, and read positivity off the leading coefficient.

1.1 Reduction to a very ample power. Fix $m\ge1$, $N$ and the closed immersion $i:X\hookrightarrow\mathbb P^N_k$ with $i^*\mathcal O(1)\cong H^{\otimes m}$ supplied by [F4], and put $A:=H^{\otimes m}$. Since the intersection product is $\mathbb Z$-bilinear, $A\cdot D=m\,(H\cdot D)$ for every Cartier divisor $D$; hence $H\cdot D=m^{-1}(A\cdot D)$, and for part 1 it suffices to prove $A\cdot D>0$ for every nonzero effective Cartier divisor $D$. [F1, F4]

1.2 The Hilbert polynomial of the curve. Let $j:D\hookrightarrow X$ be the nonzero effective Cartier divisor and put $\mathcal F=j_*\mathcal O_D$, a nonzero coherent sheaf on $X$ with support of dimension one by [F3]. For the fixed embedding with $\mathcal O_X(1)=A$, [F5] and [F6] give $$P_{\mathcal F}(n)=\chi(X,\mathcal F\otimes A^{\otimes n})=\chi(D,A^{\otimes n}|_D)$$ for every integer $n$. This polynomial has exact degree one, so $P_{\mathcal F}(n)=cn+b$ with $c\ne0$. For large $n$ it equals $h^0(X,\mathcal F\otimes A^{\otimes n})\ge0$, so $c>0$. [F3, F5, F6]

2.1 The intersection number is the leading coefficient. Since $P_{\mathcal F}$ is linear, $c=P_{\mathcal F}(1)-P_{\mathcal F}(0)$. By step 1.2, $P_{\mathcal F}(1)=\chi(D,A|_D)$ and $P_{\mathcal F}(0)=\chi(D,\mathcal O_D)$; by the degree formula of [F2] applied to the effective Cartier divisor $D$, $$A\cdot D=\deg_D(A|_D)=\chi(D,A|_D)-\chi(D,\mathcal O_D)=c>0.$$ This proves part 1 for $A$ and hence, by step 1.1, for the given ample $H$: $H\cdot D=m^{-1}(A\cdot D)>0$. [F2, step 1.1, step 1.2]

2.2 Positive self-intersection. Apply [F5] to $\mathcal O_X$ with the same embedding and $A=\mathcal O_X(1)$. Its support is the surface $X$, so its Hilbert polynomial $P(n)=\chi(X,A^{\otimes n})$ has exact degree two, say $P(n)=cn^2+bn+a$ with $c\ne0$. Since $P(n)=h^0(X,A^{\otimes n})\ge0$ for large $n$, one has $c>0$. The defining intersection expression gives $$A\cdot A=\chi(X,\mathcal O_X)-2\chi(X,A^{\vee})+\chi(X,A^{\vee\otimes2})=P(0)-2P(-1)+P(-2)=2c>0.$$ Bilinearity then gives $H\cdot H=m^{-2}(A\cdot A)>0$. This proves part 2 over every field without choosing a rational point or a hyperplane through one. [F1, F5, step 1.1]

3.1 The section criterion. Let $\mathcal M$ be invertible with a nonzero global section $s$. By [F7] the zero scheme $Z(s)$ is an effective Cartier divisor with $\mathcal O_X(Z(s))\cong\mathcal M$. If $Z(s)\ne\varnothing$, then $Z(s)$ is a nonzero effective Cartier divisor and part 1 gives $\mathcal M\cdot H=Z(s)\cdot H=H\cdot Z(s)>0$ by symmetry. If $Z(s)=\varnothing$, then $s$ is nowhere vanishing, so $s$ trivialises $\mathcal M$, $\mathcal M\cong\mathcal O_X$, and $\mathcal M\cdot H=0$; in this case $\mathcal M$ is numerically trivial. Hence $\mathcal M\cdot H\ge0$ always, with equality only in the stated case, and if $h^0(X,\mathcal M)>0$ for a numerically nontrivial $\mathcal M$ then any nonzero section has nonempty zero scheme and $\mathcal M\cdot H>0$. [F1, F7, step 2.1]

4.1 Choice accounting and conclusion. Steps 1.1 and 2.1 prove part 1, step 2.2 proves part 2, and step 3.1 proves part 3. The Axiom of Choice is used through the cohomology, Serre-vanishing and Hilbert-polynomial suppliers recorded in [F8], which underlie the very ample embedding and the finiteness of cohomology; the divisors and the section $s$ are single given objects, and no family is selected. [F8, step 2.1, step 2.2, step 3.1] ∎

