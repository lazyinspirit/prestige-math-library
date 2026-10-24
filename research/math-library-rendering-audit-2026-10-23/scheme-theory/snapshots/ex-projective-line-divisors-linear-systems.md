---
id: ex-projective-line-divisors-linear-systems
kind: example
title: Divisors and complete linear systems on the projective line
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
- cor-morphisms-equal-on-dense-open-reduced-source
- cor-polynomial-ring-over-a-field-is-a-pid
- def-axiom-of-choice
- def-base-point-linear-system
- def-complete-linear-system
- def-degree-divisor-proper-curve
- def-divisor-smooth-proper-curve
- def-invertible-sheaf-of-cartier-divisor
- def-order-codimension-one-rational-function
- def-projective-line-two-affine-cover-and-twisting-sheaf
- def-relative-projective-space-standard-charts
- def-riemann-roch-space-of-divisor
- def-veronese-map
- lem-projective-line-curve-and-divisor-basics
- lem-veronese-map-well-defined-closed-immersion
- thm-base-point-free-linear-system-morphism
- thm-cartier-weil-divisors-curves-agree
- thm-choice-implies-dependent-implies-countable-choice
- thm-line-bundle-sections-define-projective-map
- thm-principal-ideal-domains-are-unique-factorisation-domains
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8
      url: https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf
    - title: The Stacks Project, Algebraic Curves (tag 0BRV)
      url: https://stacks.math.columbia.edu/download/curves.pdf
    - title: Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf
verification:
  audited: 2026-10-02
---


## Example

Assume the Axiom of Choice for the current divisor, cohomology, and
projective-space supplier routes ([[def-axiom-of-choice]]). On $\mathbb P^1_k$ with affine
coordinate $t$ and point at infinity $\infty$
([[def-projective-line-two-affine-cover-and-twisting-sheaf]],
[[def-relative-projective-space-standard-charts]]), a nonzero polynomial
$p(t)$ of degree $m$, viewed as a rational function, has divisor
$$\operatorname{div}(p)=Z(p)-m[\infty],$$
where $Z(p)$ is the effective divisor of its affine zeros, of degree $m$; the
Riemann-Roch space $L(d[\infty])$
([[def-riemann-roch-space-of-divisor]]) consists exactly of the polynomials of
degree at most $d$ together with $0$. Consequently $\deg_k(d[\infty])=d$, the
space $L(d[\infty])$ has dimension $d+1$ for $d\ge0$ and is zero for $d<0$,
the complete linear system $|d[\infty]|$
([[def-complete-linear-system]]) is the set of effective divisors of degree
$d$ for $d\ge0$, and is empty for $d<0$. For $d\ge0$ this set is identified
with the set of $k$-lines in $L(d[\infty])$, equivalently the $k$-rational
points of the projective scheme of lines $\mathbb P(L(d[\infty]))$; the linear
system is a set, while $\mathbb P^d_k$ below is a scheme. For $d\ge1$, the
morphism associated with the base-point-free system $L(d[\infty])$
([[thm-base-point-free-linear-system-morphism]]) is the degree-$d$ Veronese
closed immersion of schemes $\mathbb P^1_k\to\mathbb P^d_k$
([[def-veronese-map]]). For $d=0$, the single generator $1$ of $L(0)$ gives
the constant structure morphism $\mathbb P^1_k\to\mathbb P^0_k$, which is
not an embedding; for $d<0$, $L(d[\infty])=0$ and there is no associated
projective morphism.

**Current supplier interfaces.** The current
[[lem-projective-line-curve-and-divisor-basics]] body gives the closed-
point degree and divisor classification used in steps 1.1 and 3.1. The
current [[def-invertible-sheaf-of-cartier-divisor]] and the projective-map
suppliers in [F4]–[F5] give the sheaf and section construction; the current
[[thm-cartier-weil-divisors-curves-agree]] body identifies Cartier and Weil
divisors, with its Dependent Choice premise supplied from AC through
[[thm-choice-implies-dependent-implies-countable-choice]]. These supplier
files are present. Their current decisions remain separate from the
computations recorded here.

## Facts & Assumptions

**Given:** A field $k$, the projective line $\mathbb P^1_k$ with standard charts $U_0=\operatorname{Spec}k[t]$ and $U_1=\operatorname{Spec}k[u]$, $tu=1$, point at infinity $\infty=[0:1]$ the pole of $t$, and an integer $d\in\mathbb Z$.

[F1] The current in-run item [[lem-projective-line-curve-and-divisor-basics]] states that $\mathbb P^1_k$ is a smooth proper geometrically integral curve of genus $0$, that a closed point $V(g)$ attached to a monic irreducible $g\in k[t]$ of degree $e$ has residue degree $e$ and $\operatorname{div}(g)=[V(g)]-e[\infty]$, and that every divisor $D$ on $\mathbb P^1_k$ is linearly equivalent to $\deg_k(D)[\infty]$; it also identifies $\mathcal O(1)\cong\mathcal O(\infty)$.

[F2] On a smooth curve divisors are finite $\mathbb Z$-combinations of closed points, $\deg_k(\sum_xn_x[x])=\sum_xn_x[\kappa(x):k]$, effectivity is nonnegativity of all coefficients, the order function $\operatorname{ord}_x$ is additive with $\operatorname{ord}_x(f^{-1})=-\operatorname{ord}_x(f)$, $\operatorname{div}(fg)=\operatorname{div}(f)+\operatorname{div}(g)$, principal divisors have degree zero, and linearly equivalent divisors have equal degree. ([[def-divisor-smooth-proper-curve]], [[def-order-codimension-one-rational-function]], [[def-degree-divisor-proper-curve]])

[F3] $L(D)=\{f\in k(C)^\times:\operatorname{div}(f)+D\ge0\}\cup\{0\}$ is a $k$-subspace of the function field, and the complete linear system $|D|=\{\,D'\text{ effective}:D'\sim D\,\}$ is in bijection with the set $P(L(D))$ of $k$-lines in $L(D)$ via $f\mapsto\operatorname{div}(f)+D$; when $L(D)$ is finite-dimensional, this is the $k$-rational point set of its projective scheme of lines. In particular $|D|=\varnothing$ exactly when $L(D)=0$. ([[def-riemann-roch-space-of-divisor]], [[def-complete-linear-system]])

[F4] Under Choice, generating global sections $s_0,\dots,s_n$ of an invertible sheaf $L$ on an $S$-scheme $X$ determine a unique $S$-morphism $\varphi:X\to\mathbb P^n_S$ with $\varphi^*\mathcal O(1)\cong L$, $\varphi^*x_i=s_i$, and chart formula $x^{(i)}_j\circ\varphi=s_j/s_i$ on the locus $X_{s_i}$ where $s_i$ is invertible; a closed point $x$ is a base point of a subspace $V\subseteq L(D)$ exactly when every nonzero $f\in V$ vanishes at $x$, i.e. $x\in\operatorname{Supp}(\operatorname{div}(f)+D)$ for all such $f$, and base-point-freeness is equivalent to the corresponding sections generating $\mathcal O_C(D)$. ([[thm-line-bundle-sections-define-projective-map]], [[def-base-point-linear-system]], [[def-invertible-sheaf-of-cartier-divisor]])

[F5] A base-point-free subspace $V\subseteq L(D)$ of dimension $r+1\ge1$ determines a $k$-morphism $\varphi_V:C\to\mathbb P^r_k$ with $\varphi_V^*\mathcal O(1)\cong\mathcal O_C(D)$ under which the coordinate sections pull back to a basis of $V$, and the members of $P(V)$ are exactly the pullbacks of hyperplanes. ([[thm-base-point-free-linear-system-morphism]])

[F6] For $d\ge1$ the degree-$d$ Veronese map is $\nu_{1,d}:\mathbb P^1_k\to\mathbb P^d_k$, $[x_0:x_1]\mapsto[x_0^d:x_0^{d-1}x_1:\dots:x_1^d]$, and it is a well-defined closed immersion. ([[def-veronese-map]], [[lem-veronese-map-well-defined-closed-immersion]])

[F7] Under Choice, two $S$-morphisms from a reduced scheme to a separated $S$-scheme agreeing on a dense open subscheme are equal. ([[cor-morphisms-equal-on-dense-open-reduced-source]])

[F8] $k[t]$ is a principal ideal domain and a unique factorisation domain; every nonzero polynomial is a unit multiple of a product of monic irreducibles. ([[cor-polynomial-ring-over-a-field-is-a-pid]], [[thm-principal-ideal-domains-are-unique-factorisation-domains]])

[F9] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct; factor the divisors of polynomials, solve the effectivity inequalities for $L(d[\infty])$, and identify the associated morphism with the Veronese map on a dense chart.

1.1 Divisors of polynomials. By [F1] a monic irreducible $g\in k[t]$ of degree $e$ has $\operatorname{div}(g)=[V(g)]-e[\infty]$, in particular $\operatorname{div}(t)=[V(t)]-[\infty]$; factor a nonzero $p\in k[t]$ as $p=c\prod_ig_i^{e_i}$ with monic irreducibles $g_i$ and $c\in k^\times$ [F8]. Additivity of $\operatorname{ord}$ and $\operatorname{div}(fg)=\operatorname{div}(f)+\operatorname{div}(g)$ [F2] give $$\operatorname{div}(p)=\sum_ie_i[V(g_i)]-\Bigl(\sum_ie_i\deg g_i\Bigr)[\infty]=Z(p)-(\deg p)[\infty],$$ where $Z(p)=\sum_ie_i[V(g_i)]$ is effective with $\deg_kZ(p)=\sum_ie_i\deg(g_i)=\deg p$ and is supported away from $\infty$; for a constant $p=c$ this reads $\operatorname{div}(c)=0$. [F1, F2, F8]

2.1 The Riemann-Roch spaces of $d[\infty]$. Let $f=P/Q\ne0$ with coprime $P,Q\in k[t]$ [F8]; by step 1.1, $\operatorname{div}(f)=Z(P)-Z(Q)+(\deg Q-\deg P)[\infty]$, and $f\in L(d[\infty])$ means $\operatorname{div}(f)+d[\infty]\ge0$ [F3]. If $Q=c\,t^m$ then $\operatorname{div}(f)+d[\infty]=Z(P)-m[0]+(m-\deg P+d)[\infty]$, where $0=V(t)$ is the origin and $t\nmid P$ by coprimality; effectivity forces $m=0$, so $f=P\in k[t]$ and $\deg P\le d$. If $Q$ has an irreducible factor $g\ne t$, then $\operatorname{div}(f)$ has the strictly negative coefficient $-e$ at $V(g)\ne\infty$, so $\operatorname{div}(f)+d[\infty]$ is not effective. Hence $$L(d[\infty])=\{P\in k[t]:P=0\text{ or }\deg P\le d\},$$ the polynomials of degree at most $d$ together with $0$: a $k$-vector space with basis $1,t,\dots,t^d$ for $d\ge0$, of dimension $d+1$, and the zero space for $d<0$. Moreover $\deg_k(d[\infty])=d\cdot[\kappa(\infty):k]=d$ because $\kappa(\infty)=k$ [F2]. [F1, F2, F3, F8]

2.2 The associated morphism is the Veronese embedding. Let $d\ge1$ and let $V=L(d[\infty])$, a $(d+1)$-dimensional subspace of $L(d[\infty])$ [F3]. No point of $\mathbb P^1_k$ is a base point of $V$: at a closed point $x\ne\infty$ the constant function $1$ does not vanish, since $\operatorname{div}(1)+d[\infty]=d[\infty]$ is supported at $\infty$, while at $x=\infty$ the polynomial $t^d$ does not vanish, since $\operatorname{div}(t^d)+d[\infty]=d[0]$ is supported at the origin $0$ [F4, step 1.1]. So $V$ is base-point-free, and [F5] attaches to it a $k$-morphism $\varphi_V:\mathbb P^1_k\to\mathbb P^d_k$ whose pullback of the coordinate sections is the basis $1,t,\dots,t^d$ of $V$ and whose hyperplane pullbacks are the members of $|d[\infty]|$; the same morphism is obtained from the generating sections $1,t,\dots,t^d$ of the invertible sheaf $\mathcal O(d[\infty])$ by the universal property [F4]. On the chart $x_0\ne0$ of $\mathbb P^d_k$ the chart formula of [F4] gives $x^{(0)}_j\circ\varphi_V=t^j$ on the open where the section $1$ is invertible, which is $\mathbb P^1_k\smallsetminus\{\infty\}$; hence $\varphi_V([1:t])=[1:t:t^2:\dots:t^d]$ for every $t\ne\infty$. The degree-$d$ Veronese map $\nu_{1,d}$ of [F6] reads $[x_0:x_1]\mapsto[x_0^d:x_0^{d-1}x_1:\dots:x_1^d]=[1:t:\dots:t^d]$ on the same chart $\{x_0\ne0\}=\mathbb P^1_k\smallsetminus\{\infty\}$. Since $\mathbb P^1_k$ is reduced and $\mathbb P^d_k$ is separated over $k$, [F7] gives $\varphi_V=\nu_{1,d}$; by [F6] this morphism is a closed immersion, the degree-$d$ Veronese embedding. [F4, F5, F6, F7, F9, step 1.1]

3.1 The complete linear system of $d[\infty]$. For $d\ge0$ let $D'$ be an effective divisor of degree $d$ on $\mathbb P^1_k$; by [F1] every divisor on $\mathbb P^1_k$ is linearly equivalent to $\deg_k(D')[\infty]=d[\infty]$, so $D'\in|d[\infty]|$ [F3]. Conversely every $D'\in|d[\infty]|$ is effective by definition and has $\deg_kD'=\deg_k(d[\infty])=d$, since linearly equivalent divisors have equal degree [F2]. Hence $$|d[\infty]|=\{\,D'\text{ effective on }\mathbb P^1_k:\deg_kD'=d\,\}$$ for $d\ge0$, a set parametrised by $P(L(d[\infty]))$ and hence by the projective space $\mathbb P^d$ of $k$-lines in the $(d+1)$-dimensional space $L(d[\infty])$; for $d<0$ the space $L(d[\infty])$ is zero by step 2.1, so $|d[\infty]|=\varnothing$. [F1, F2, F3, step 2.1]

4.1 Conclusion. For every nonzero polynomial $p(t)$ of degree $m$ one has $\operatorname{div}(p)=Z(p)-m[\infty]$ with $Z(p)$ effective of degree $m$ (step 1.1); the space $L(d[\infty])$ is exactly the space of polynomials of degree at most $d$ together with $0$, of dimension $d+1$ for $d\ge0$ and zero for $d<0$ (step 2.1); the complete linear system $|d[\infty]|$ is the set of effective divisors of degree $d$ for $d\ge0$ and is empty for $d<0$ (step 3.1). Its set of members is the set of $k$-lines in $L(d[\infty])$, identified for $d\ge0$ with the $k$-rational points of its projective scheme of lines. For $d\ge1$ the associated morphism is the degree-$d$ Veronese closed immersion; for $d=0$ it is the constant map to $\mathbb P^0_k$; and for $d<0$ there is no associated projective morphism. Choice enters through the current divisor, cohomology, Cartier/Weil and projective-space suppliers [F1], [F4], [F5], [F7], [F8] and [F9]; AC supplies DC for the Cartier-to-Weil interface. No further selection occurs. [F1, F4, F5, F7, F8, F9, step 1.1, step 2.1, step 3.1, step 2.2] ∎
