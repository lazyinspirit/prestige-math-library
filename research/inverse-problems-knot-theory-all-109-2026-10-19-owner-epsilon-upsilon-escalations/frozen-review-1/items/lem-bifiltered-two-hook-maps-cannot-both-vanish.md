---
id: lem-bifiltered-two-hook-maps-cannot-both-vanish
kind: lemma
title: "The two bifiltered hook maps cannot both kill the threshold class"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: []
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The argument projects finitely supported chains onto explicitly specified basis subsets; no choice axiom is used."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jennifer Hom, The knot Floer complex and the smooth concordance group"
      url: "https://arxiv.org/pdf/1111.6635"
      locator: "Section3, maps F_s and G_s; the chain-level corner proof is supplied locally"
---

## Statement

Let $C$ be a free based chain complex over $\mathbb F_2[U,U^{-1}]$ with integer bifiltration $(i,j)$, multiplication by $U$ lowering both coordinates by one, and differential not increasing either coordinate. Chains have finite support. The filtration of a sum is the maximum of the coordinates of its supported basis monomials. Write $V=C\{i=0\}$ and, for an integer $s$, write $E_s=C\{\min(i,j-s)=0\}$ and $A_s=C\{\max(i,j-s)=0\}$. These are the subquotients supported on the vertical line, the northeast hook, and the southwest hook respectively. More precisely, $V=C\{i\le0\}/C\{i<0\}$; $E_s$ is the subcomplex supported on $i=0$ or $j=s$ in the quotient $C/C\{i<0\text{ or }j<s\}$; and $A_s=C\{i\le0,j\le s\}/C\{i<0,j<s\}$. Define $F_s:H(V)\to H(E_s)$ by quotienting the vertical line below $s$ and including the resulting upper ray into $E_s$. Define $G_s:H(A_s)\to H(V)$ by killing the strictly left ray and including the resulting lower vertical ray.

If a class $\xi\in H(V)$ has a cycle representative supported at $j\le s$ and satisfies $F_s(\xi)=0$, then $\xi$ belongs to the image of $G_s$. Consequently, if $H(V)$ is one-dimensional and $s$ is the least level representing its nonzero class, the two maps $F_s,G_s$ cannot both be zero.

## Statement references

[Hom, Section3](https://arxiv.org/pdf/1111.6635)

## Facts & Assumptions

**Given:** Exactly the based bifiltered complex and integer $s$ in the Statement. All differentials on the displayed regions mean the full differential followed by projection to the region's basis monomials.

[F1] A region cut out by simultaneous upper bounds is a subcomplex. The complement of simultaneous lower bounds is a subcomplex, so quotienting by that complement is a complex. On any such subquotient the differential squares to zero. These assertions follow directly from the assumption that neither coordinate increases.

## Proof

1.1 Choose a vertical cycle $z$ representing $\xi$ with support at $j\le s$, and denote its corner component at $(0,s)$ by $z_c$. Its image under the chain map defining $F_s$ is $z_c$. Since $F_s(\xi)=0$, there is a finite chain $w$ in $E_s$ with $\partial_{E_s}w=z_c$. Split $w=a+b$ by its basis monomials, where $a$ is on the vertical upper ray $i=0,j\ge s$, including the corner, and $b$ is on the strictly right ray $i>0,j=s$. These parts are disjoint, so this splitting is unique. View $a$ also as a chain in $V$ and $b$ as a chain in the horizontal quotient $H_s=C\{j=s\}$. [given, F1, construct]

2.1 The vertical differential $\partial_V a$ has zero component above $s$: on that ray the equation $\partial_{E_s}w=z_c$ has no contribution from $b$, since $b$ cannot increase $j$. The horizontal differential $\partial_{H_s}b$ has zero component strictly to the right: on that ray the same equation has no contribution from $a$, since $a$ cannot increase $i$. At the corner the equation reads $(\partial_Va)_c+(\partial_{H_s}b)_c=z_c$. Put $z'=z+\partial_Va$. It is a vertical cycle representing $\xi$, supported at $j\le s$, and its corner component is $(\partial_{H_s}b)_c$. Put $h=\partial_{H_s}b$; it is a horizontal cycle supported at $i\le0$. Decompose it as $h=z'_c+\ell$, where $\ell$ lies strictly to the left of the corner. [F1, step 1.1, given, construct, algebra]

3.1 The chain $y=z'+\ell$ belongs to $A_s$. Its differential in that hook is zero. Indeed the vertical component of $\partial_{A_s}z'$ is $\partial_Vz'=0$. Its only remaining component is the strictly left horizontal differential of $z'_c$: a vertical term below $s$ cannot increase $j$ to $s$. For $\ell$, every component of its hook differential is strictly left and horizontal, since its source has $i<0$ and it cannot increase $i$. The equation $\partial_{H_s}(z'_c+\ell)=\partial_{H_s}h=0$ cancels these two remaining components. Thus $y$ is a cycle, and the chain map defining $G_s$ sends it to $z'$. It follows that $G_s([y])=\xi$. [F1, step 2.1, given, construct, algebra]

4.1 If $H(V)$ is one-dimensional and $s$ is its least representing level, its nonzero class has such a representative by definition. When $F_s$ is zero, step 3.1 makes that nonzero class an image of $G_s$, so $G_s$ is nonzero. Therefore the zero/nonzero cases used to define epsilon are mutually exclusive and exhaustive. This conclusion uses no horizontal simplification theorem, rank assumption on horizontal homology, symmetry of the two filtrations, or analytic realization of $C$. [step 3.1, given, algebra] ∎
