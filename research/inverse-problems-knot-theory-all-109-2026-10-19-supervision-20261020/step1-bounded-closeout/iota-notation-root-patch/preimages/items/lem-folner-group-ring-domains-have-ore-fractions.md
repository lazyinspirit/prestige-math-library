---
id: lem-folner-group-ring-domains-have-ore-fractions
kind: lemma
title: Finite Folner sets give both Ore conditions and a constructed skew field
  of fractions
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-group-ring
  - thm-group-ring-is-a-unital-algebra-with-basis-g
  - def-folner-set-and-folner-condition
  - def-ring
  - def-division-ring
  - thm-rank-nullity
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Tim D. Cochran, Kent E. Orr, and Peter Teichner, Knot concordance,
        Whitney towers and L²-signatures, §2.1
      url: https://arxiv.org/pdf/math/9908117
    - title: "C. Löh, Geometric Group Theory: An Introduction"
      url: https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf
dependency_level: 0
---

## Statement

Let $k$ be a commutative field and let $G$ satisfy the finite left Folner condition. If $k[G]$ has no zero divisors, then it satisfies both Ore conditions: for nonzero $a,b\in k[G]$ there exist nonzero $x,y$ with $ax=by$, and nonzero $u,v$ with $ua=vb$. Moreover it embeds as a unital subring in a division ring $D$ in which each element has the form $as^{-1}$ for $a\in k[G]$ and $0\ne s\in k[G]$. Thus this is a skew field of fractions, rather than only a ring in which some denominators are invertible. The construction uses no choice axiom.

## Statement references

[[def-group-ring]]

[[thm-group-ring-is-a-unital-algebra-with-basis-g]]

[[def-folner-set-and-folner-condition]]

[[def-division-ring]]

## Facts & Assumptions

**Given:** The commutative field $k$, group $G$, and ring $R=k[G]$ with no zero divisors.

[F1] The group ring has the group elements as a $k$-basis and its product is induced by the group law ([[def-group-ring]], [[thm-group-ring-is-a-unital-algebra-with-basis-g]]).

[F2] For every finite $S\subseteq G$ and $\delta>0$ there is finite nonempty $F\subseteq G$ with $|sF\triangle F|<\delta|F|$ for all $s\in S$ ([[def-folner-set-and-folner-condition]]).

[F4] A linear map with finite-dimensional source satisfies rank-nullity ([[thm-rank-nullity]]).

[F3] A division ring is a unital ring with $1\ne0$ in which every nonzero element has a two-sided inverse ([[def-ring]], [[def-division-ring]]).



## Proof

**Proof technique:** direct.

**Given:** The data in the Statement. A right ideal below is an additive subgroup closed under right multiplication by $R$; its homomorphisms are additive maps commuting with that multiplication.

1.1 Fix nonzero $a,b\in R$ and let $S$ contain the identity and both finite supports. Choose $F$ by [F2] with $\delta=1/(2|S|)$. The union bound gives $|SF|\le |F|+\sum_{s\in S}|sF\setminus F|<(3/2)|F|<2|F|$. Let $kF$ and $k(SF)$ denote the subspaces with the indicated group bases. The linear map $kF\oplus kF\to k(SF)$ defined by $(x,y)\mapsto ax-by$ has source dimension $2|F|$ and strictly smaller target dimension, so rank-nullity [F4] gives a nonzero kernel vector. Neither component of that vector is zero, since $R$ has no zero divisors and $a,b\ne0$. Its common product is also nonzero. Thus $aR\cap bR$ contains a nonzero element, proving the right Ore condition. [F1, F2, F4, given, algebra, construct]

2.1 The $k$-linear map $\iota(\sum_gc_gg)=\sum_gc_gg^{-1}$ satisfies $\iota(rs)=\iota(s)\iota(r)$ and $\iota^2=1$, by [F1] and commutativity of the coefficient field. Apply step 1.1 to $\iota(a),\iota(b)$, and then apply $\iota$ to the resulting nonzero common right multiple. This gives a nonzero common left multiple $\iota(x)a=\iota(y)b$. Hence the left Ore condition holds as well. [F1, step 1.1, algebra]

2.2 We construct the fraction division ring for any unital ring $R$ with $1\ne0$, no zero divisors and the right Ore condition just proved. Any two nonzero right ideals $I,J$ intersect nontrivially: choose $0\ne s\in I$, $0\ne t\in J$, and a nonzero common right multiple in $sR\cap tR\subseteq I\cap J$. Finite intersections remain nonzero by induction. Every right-linear map $f:I\to R$ on a nonzero right ideal is either the zero map or injective. To see this, if $f(s)\ne0$ but $0\ne t\in\ker f$, choose $0\ne su=tv$ by the right Ore condition; here $u\ne0$. Right linearity gives $f(s)u=f(t)v=0$, contradicting absence of zero divisors. [step 1.1, algebra, construct]

3.1 Form the set of pairs $(I,f)$ with $I$ a nonzero right ideal and $f:I\to R$ right-linear. Identify two pairs when their maps agree on some nonzero right ideal contained in both domains. Reflexivity and symmetry are immediate, and transitivity follows by intersecting the two nonzero agreement ideals using step 2.2. This defines a quotient set $D$. Denote the class of a map by $[f]$. The class is zero exactly when its map is identically zero: a nonzero map is injective by step 2.2 and cannot vanish on a nonzero ideal. Define addition by the sum on the intersection of domains, and define $[f][g]=[f\circ g]$ on $g^{-1}(I)$ if $I$ is the domain of $f$ and $J$ is the domain of $g$. That preimage is a right ideal. It is nonzero if $g=0$, when it is all $J$; otherwise choose $t\in J$ with $g(t)\ne0$ and a nonzero element $g(t)r\in g(t)R\cap I$. Then $tr\ne0$ belongs to the preimage. Thus multiplication is always represented on a nonzero right ideal. [step 2.2, algebra, construct]

4.1 These operations are independent of representatives. For addition, intersect the two agreement ideals and all relevant domains. For multiplication, if $f=f'$ on a nonzero ideal $U$ and $g=g'$ on a nonzero ideal $V$, restrict to $V\cap g^{-1}(U)$. This is nonzero by step 2.2 and the preimage argument of step 3.1, and both composites agree there. Zero maps cause no exception: they may be represented by the zero map on all $R$, and equivalent maps representing zero are actually zero on their domains. Thus addition and multiplication are well-defined. The additive zero is the zero map on $R$, additive inverse is $-f$, and the multiplicative identity is the identity map on $R$. [step 2.2, step 3.1, algebra]

5.1 The ring identities hold on nonzero common restriction ideals, hence in $D$. For addition and its commutativity and associativity, use the intersection of all three domains and the ordinary additive identities of $R$. For multiplication of nonzero representatives $f,g,h$, the two associative composites agree on the nonzero ideal of those $x$ for which $h(x)$ lies in the domain of $g$ and $g(h(x))$ lies in the domain of $f$; successive preimages are nonzero because the maps are injective and the preimage argument of step 3.1 applies. If a representative is zero, both composites are zero. For $f(g+h)=fg+fh$, restrict first to the common domain of $g,h$, then to the intersection of the preimages of the domain of $f$ under each nonzero one of $g,h$. These are nonzero ideals and their intersection is nonzero; zero summands impose no restriction. Both $g(x),h(x)$ and their sum then lie in the domain of $f$, and additivity of $f$ proves equality there. For $(f+g)h=fh+gh$, restrict to the preimage under $h$ of the intersection of the domains of $f,g$; the same argument applies. Identity and zero laws hold by their defining maps. This verifies every unital ring axiom without a formal-fraction associativity assumption. [F3, step 2.2, step 3.1, step 4.1, algebra]

6.1 Map $r\in R$ to the class of left multiplication $L_r:R\to R$, $L_r(x)=rx$. This is a unital ring homomorphism, since $L_r+L_s=L_{r+s}$ and $L_r\circ L_s=L_{rs}$. It is injective: for $r\ne0$, its restriction to every nonzero ideal is nonzero by absence of zero divisors, so its class is not zero by step 3.1. In particular $1\ne0$ in $D$. For a nonzero class $[f]$, the representative $f:I\to R$ is injective by step 2.2 and its image $f(I)$ is a nonzero right ideal. The inverse function $f^{-1}:f(I)\to I\subseteq R$ is right-linear. Its two composites with $f$ are the identity maps on $I$ and $f(I)$ respectively, hence represent $1$ in $D$. Thus every nonzero class has a two-sided inverse, and [F3] makes $D$ a division ring. [F3, step 2.2, step 3.1, step 5.1, algebra, construct]

7.1 Finally choose $0\ne s\in I$ for a representative $f:I\to R$ and put $a=f(s)$. The composite $f\circ L_s$ is defined on all $R$, because $sR\subseteq I$, and sends $x$ to $ax$. Thus $[f]L_s=L_a$, and in the embedded-ring notation $[f]=as^{-1}$. Every element of $D$ is therefore a right fraction and every nonzero original denominator is invertible. All maps, ideals and equivalence classes used above form sets over the fixed underlying set $R$. The only selections were finitely many elements in individual nonempty sets at each proof step; no choice function on an infinite family was used. Together with steps 1.1 and 2.1 this proves every assertion. [step 1.1, step 2.1, step 6.1, algebra] ∎
