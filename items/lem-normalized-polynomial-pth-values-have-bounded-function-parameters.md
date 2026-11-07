---
dependency_level: 0
id: lem-normalized-polynomial-pth-values-have-bounded-function-parameters
kind: lemma
title: Normalized polynomial pth-power values have bounded function parameters
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - def-derivation-algebra
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - lem-normal-noetherian-domain-intersection-of-height-one-localizations
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - thm-line-bundle-rational-section-cartier-divisor
  - cor-projective-cohomology-finite-dimensional-field
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. F. Voloch, A Diophantine problem on algebraic curves over function fields of positive characteristic, Theorem 1 proof, printed pp. 122–123; bounded-vector-space replacement for finite constants"
      url: https://numdam.org/item/BSMF_1991__119_1_121_0.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ have characteristic $p>0$, let $B$ be a normal
integral projective $k$-scheme of positive dimension with function field
$K$, and let $\delta:K\to K$ be a $k$-derivation. Suppose
$$r(T)=T^n+r_2T^{n-2}+\cdots+r_n\in K[T],\qquad p\nmid n,$$
and $r^\delta$, obtained by applying $\delta$ to the coefficients, is
nonzero. Then there are finite-dimensional $k$-subspaces $W,U,V\subseteq K$
with the following properties for all $a,y\in K$ satisfying $y^p=r(a)$
and $r'(a)\ne0$:

- $\delta a\in W$;
- $a=u/c$ for some $u,c\in U$ with $c\ne0$;
- for every such representation $a=u/c$ with $u,c\in U$, the element
  $c^n y$ belongs to $V$.

The spaces depend on $B,\delta,r$, not on $a,y$. No finiteness of $k$
and no dimension-one hypothesis on $B$ is imposed. The assumed
$r^\delta\ne0$ excludes $n=1$ automatically.

## Facts & Assumptions

**Given:** AC and the model, derivation and normalized polynomial of the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] Derivations obey the product, quotient and chain rules and kill
$p$th powers in characteristic $p$.
[[def-derivation-algebra]]

[F2] Height-one local rings on a normal Noetherian integral scheme are
DVRs. A rational function regular at all height-one points of a normal
Noetherian scheme is globally regular; the same holds for a rational
section of an invertible sheaf in local frames.
[[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]
[[lem-normal-noetherian-domain-intersection-of-height-one-localizations]]

[F3] A finite collection of prime divisors on an integral projective
scheme is contained in an effective Cartier divisor, with arbitrarily
large prescribed finite multiplicities: embed the scheme projectively,
choose a homogeneous form vanishing on each divisor but not the whole
scheme, multiply them, and take a power. Rational functions with bounded
poles then identify with sections of that divisor's invertible sheaf.
[[thm-closed-subschemes-projective-space-homogeneous-ideals]]
[[thm-line-bundle-rational-section-cartier-divisor]]

[F4] Global sections of an invertible sheaf on a projective field
scheme are finite-dimensional.
[[cor-projective-cohomology-finite-dimensional-field]]

## Axiom use

AC is inherited from normal Hartogs and proper cohomology. All covers,
coefficient spans, prime-divisor lists and clearing bounds used below are
finite. No finite-dimensional space over $k$ is assumed to be a finite set.

## Proof

**Proof technique:** direct; bound derivative poles by the normalized
equation, scale a polynomial root by its leading coefficient, and use
normality to turn fixed pole bounds into finite coefficient spaces.

1.1 A derivation has uniformly bounded denominator order at every height-one local ring of $B$, and preserves all but finitely many of them. Indeed cover $B$ by finitely many affine charts with finitely generated coordinate domains $A_i\subseteq K$. Write the values of $\delta$ on finite algebra generators as fractions. Away from the finitely many prime divisors of these denominators, the derivation preserves the chart ring and all its localizations. At any remaining height-one point, let $v$ be its DVR valuation and $\pi$ a uniformizer. For some integer $c_v\ge0$, the finitely many generator derivatives have valuation at least $-c_v$. The product rule bounds every polynomial's derivative by the same lower bound, since its undifferentiated factors are integral and coefficients in $k$ have valuation zero. The quotient rule then gives $\delta\mathcal O_{B,v}\subseteq\pi^{-c_v}\mathcal O_{B,v}$, since localization denominators are units. For any $a=\pi^m b$ with $b$ a unit and $m\in\mathbb Z$, the product rule yields $v(\delta a)\ge m-c_v-1$, including negative $m$; if its integer coefficient vanishes in characteristic $p$, this only improves the bound. [F1, F2, given, algebra]

2.1 Differentiating $y^p=r(a)$ gives $r'(a)\delta a+r^\delta(a)=0$. Outside the finite prime-divisor set consisting of the denominator places in step 1.1 and the poles of the coefficients of $r$ and $r^\delta$, all coefficients are integral and $\delta$ preserves the valuation ring. If $v(a)\ge0$, then $v(\delta a)\ge0$. If $m=v(a)<0$, the leading term of $r'(a)$ has uniquely least valuation $(n-1)m$, since its coefficient $n$ is nonzero in $k$, whereas $r^\delta$ has degree at most $n-2$. Hence $v(\delta a)\ge-m>0$. At each of the finitely many remaining places, choose $b_v$ so large that for $m<-b_v$ the same leading term dominates $r'(a)$ and $v(r^\delta(a))\ge(n-2)m+\alpha_v$ with $\alpha_v$ the minimum of its fixed coefficient valuations. Increasing $b_v$ makes $-m+\alpha_v\ge0$. For $m\ge-b_v$, step 1.1 gives $v(\delta a)\ge-b_v-c_v-1$. Thus the poles of $\delta a$ are bounded along a fixed finite list of divisors, with fixed orders. By [F3] choose an effective Cartier divisor $H_0$ containing this bound. By [F2] and [F4], all $\delta a$ lie in the single finite-dimensional space $W=H^0(B,\mathcal O_B(H_0))\subseteq K$. [F1, F2, F3, F4, algebra, step 1.1]

3.1 Put $P_a(T)=r'(T)\delta a+r^\delta(T)$. It is never the zero polynomial: if $\delta a\ne0$, its degree-$n-1$ coefficient is $n\delta a\ne0$, while if $\delta a=0$ it is the fixed nonzero $r^\delta$. Its coefficients all lie in fixed finite-dimensional $k$-spaces by step 2.1. By [F3] choose an effective Cartier divisor $H$ bounding the poles of bases of all these spaces. For an actual root $a$, its degree $d$ is at least one; write its nonzero leading coefficient as $c=c_d$ and set $u=ca$. The equation becomes monic: $u^d+c_{d-1}u^{d-1}+c_{d-2}c\,u^{d-2}+\cdots+c_0c^{d-1}=0$. At a height-one place, write $h_v$ for the nonnegative coefficient of $H$. The coefficient of $u^i$ has valuation at least $-(d-i)h_v$. If $v(u)<-h_v$, its leading monic term has strictly smaller valuation than every other term, impossible in a zero sum. Thus $u$ has poles bounded by $H$, and $c$ does as well. Normal Hartogs in local frames and [F4] put both in $U=H^0(B,\mathcal O_B(H))$. This treats every possible degree $d\le n-1$ without requiring its leading coefficient fixed. [F2, F3, F4, construct, algebra, step 2.1]

4.1 Fix any representation $a=u/c$ with $u,c\in U$ and $c\ne0$, not necessarily the one constructed in step 3.1. Let $H_r$ be an effective Cartier divisor bounding the poles of the finitely many coefficients of $r$, using [F3]. For $v_0=c^n y$ one has $v_0^p=c^{np}r(u/c)$, whose summands are products of $np$ factors from $u,c$ and one fixed coefficient of $r$: the exponents of $c$ are nonnegative because $p\ge2$. Their poles are bounded by $npH+H_r$. The same effective divisor bounds the poles of $v_0$, since $p\,v(v_0)=v(v_0^p)$ at every height-one point. By [F2] and [F4], $v_0$ lies in $V=H^0(B,\mathcal O_B(npH+H_r))$. This proves the last assertion for every $U$-representation, which permits a later canonical normalization of the pair $(u,c)$. [F1, F2, F3, F4, given, construct, algebra, step 3.1] ∎


## Source qualification

Voloch works over a one-variable function field with finite constants and
uses finite cardinality of a divisor space. The present adapted lemma
proves fixed pole spaces in arbitrary base dimension and stops at
finite-dimensional coefficient bounds; it does not infer finiteness of
their elements or import his theorem over larger constant fields.
