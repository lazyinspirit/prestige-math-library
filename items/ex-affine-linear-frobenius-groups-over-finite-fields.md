---
id: ex-affine-linear-frobenius-groups-over-finite-fields
kind: example
title: "Affine linear Frobenius groups over finite fields"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-finite-field-and-its-order, def-field, def-group, def-subgroup, def-normal-subgroup, def-internal-semidirect-product, def-group-isomorphism-and-automorphism, prop-frobenius-groups-and-fixed-point-free-actions, cor-frobenius-semidirect-product-decomposition, def-frobenius-complement-and-frobenius-group, def-group-action, def-conjugacy-class-and-centralizer, thm-conjugation-is-an-automorphism, lem-group-inverse-laws, lem-subgroup-criterion, thm-lagrange, cor-order-of-a-quotient-group, thm-product-rule, def-finite-cardinality, def-symmetric-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Alex Bartel, Introduction to Representation Theory of Finite Groups, §6.1"
      url: "https://www.maths.gla.ac.uk/~abartel/docs/reptheory.pdf"
      locator: "§6.1, printed pp. 28–30"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Example

Let $F$ be a finite field with $q:=|F|$ elements, where $q>2$
([[def-finite-field-and-its-order]], [[def-field]]), with additive group
$F^{+}=(F,+)$ and multiplicative group $F^{\times}=(F\setminus\{0\},\cdot)$
([[def-field]]). Let

$$G:=\{\,f_{a,b}:F\to F\mid f_{a,b}(x)=ax+b,\ a\in F^{\times},\ b\in F\,\}$$

be the set of affine maps of $F$, with composition as operation
([[def-symmetric-group]]). Then:

1. $G$ is a subgroup of $\operatorname{Sym}(F)$ of order $q(q-1)$;
2. the translation set $K:=\{f_{1,b}:b\in F\}$ is a normal subgroup of $G$
   isomorphic to $F^{+}$, the dilation set $H:=\{f_{a,0}:a\in F^{\times}\}$ is a
   subgroup isomorphic to $F^{\times}$, and $G=K\rtimes H$ is an internal
   semidirect product ([[def-internal-semidirect-product]],
   [[def-group-isomorphism-and-automorphism]]);
3. $H$ is a Frobenius complement of $G$ and its Frobenius kernel is $K$
   ([[def-frobenius-complement-and-frobenius-group]]).

Thus the affine group $F^{+}\rtimes F^{\times}$ acting on $F$ by
$x\mapsto ax+b$ is a Frobenius group whose kernel is the translation group and
whose complement is the group of nontrivial dilations; the hypothesis $q>2$ is
exactly what makes $H$ nontrivial, and $q=2$ is the excluded boundary case in
which the action is regular.

## Facts & Assumptions

**Given:** A finite field $F$ with $|F|=q>2$, its additive group $F^{+}$ and multiplicative group $F^{\times}$, and the set $G$ of affine maps $f_{a,b}$.

[F1] Field arithmetic ([[def-field]]): $0\ne1$; $(F,+)$ is an abelian group with identity $0$, so $F^{+}=(F,+)$ is a group with $|F^{+}|=q$; $(F\setminus\{0\},\cdot)$ is an abelian group with identity $1$, so $F^{\times}=(F\setminus\{0\},\cdot)$ is a group, where $a\in F^{\times}$ means $a\ne0$ and then $a$ has a multiplicative inverse $a^{-1}$ with $aa^{-1}=1$; multiplication distributes over addition, so $a(x+y)=ax+ay$ and $(a+c)x=ax+cx$; from $a\ne1$ and $(a-1)b=0$ it follows that $b=0$, because $a-1\ne0$ is invertible; and $|F^{\times}|=q-1$ because $F^{\times}=F\setminus\{0\}$ has the $q$ elements of $F$ except $0$.

[F2] Composition and inversion of affine maps: for $a,c\in F^{\times}$ and $b,d\in F$, $f_{a,b}\circ f_{c,d}=f_{ac,\,ad+b}$, and $f_{a,b}$ is a bijection with two-sided inverse $f_{a^{-1},\,-a^{-1}b}$; in particular $f_{1,0}=\operatorname{id}_F$ ([[def-symmetric-group]], [[def-field]]).

[F3] Subgroup criterion: a nonempty subset of a group closed under products and inverses is a subgroup ([[lem-subgroup-criterion]], [[def-subgroup]], [[lem-group-inverse-laws]]).

[F4] Cardinalities: $|F|=q$, $|F^{\times}|=q-1$, $|F^{\times}\times F|=|F^{\times}|\cdot|F|=(q-1)q$, and $|F^{+}|=q$ ([[def-finite-cardinality]], [[thm-product-rule]], [F1]).

[F5] Normal subgroups and internal semidirect products: $K\mathrel{\trianglelefteq}G$ means $gKg^{-1}=K$ for all $g\in G$; if $K,H\le G$ with $K\mathrel{\trianglelefteq}G$, $G=KH$ and $K\cap H=\{1\}$, then $G=K\rtimes H$ is an internal semidirect product ([[def-normal-subgroup]], [[def-internal-semidirect-product]], [[def-subgroup]]).

[F6] Conjugation is an automorphism and $c\in C_G(R)$ centralizes every element of a subgroup $R$; $f\in G$ fixes an element $k\in K$ under conjugation exactly when $fkf^{-1}=k$ ([[thm-conjugation-is-an-automorphism]], [[def-conjugacy-class-and-centralizer]], [[lem-group-inverse-laws]]).

[F7] Free-action criterion and kernel uniqueness: if $N,H\le G$ with $G=N\rtimes H$, $1<N$, $1<H$ and every $1\ne h\in H$ fixes only the identity of $N$ under conjugation, then $H$ is a Frobenius complement of $G$; and for a Frobenius group $G$ with complement $H$ and kernel $N$ one has $N\mathrel{\trianglelefteq}G$, $G=NH$, $N\cap H=\{1\}$ and $N$ is the unique normal subgroup $M$ with $MH=G$ and $M\cap H=\{1\}$ ([[prop-frobenius-groups-and-fixed-point-free-actions]], [[cor-frobenius-semidirect-product-decomposition]], [[def-normal-subgroup]]).




## Verification

**Proof technique:** direct.

1.1 By [F2], each $f_{a,b}$ is a bijection $F\to F$, so $G\subseteq\operatorname{Sym}(F)$; $G$ contains $\operatorname{id}_F=f_{1,0}$, is closed under composition and under inverses by the formulas of [F2] (with $ac\in F^{\times}$ and $a^{-1}\in F^{\times}$), so $G$ is a subgroup of $\operatorname{Sym}(F)$ by [F3]. The map $F^{\times}\times F\to G$, $(a,b)\mapsto f_{a,b}$, is bijective: it is surjective by the definition of $G$, and if $f_{a,b}=f_{c,d}$ then evaluating at $0$ gives $b=d$ and then evaluating at $1$ gives $a=c$. Hence $|G|=|F^{\times}\times F|=(q-1)q$ by [F4]. This is assertion 1. [F2, F3, F4, given]

1.2 The maps $\tau:F^{+}\to K$, $\tau(b)=f_{1,b}$, and $\delta:F^{\times}\to H$, $\delta(a)=f_{a,0}$, are bijections; by the composition formula [F2], $f_{1,b}\circ f_{1,c}=f_{1,b+c}$ and $f_{a,0}\circ f_{c,0}=f_{ac,0}$, while $\tau(0)=f_{1,0}=\operatorname{id}_F=\delta(1)$ is the common identity; so $\tau$ and $\delta$ are group isomorphisms onto $K$ and $H$, and $K\le G$, $H\le G$ are subgroups. [F2, F3, F5, given]

1.3 For $g=f_{a,c}\in G$ and $f_{1,b}\in K$ we compute, using [F2] twice, $g\,f_{1,b}\,g^{-1}=f_{a,\,ab+c}\circ f_{a^{-1},\,-a^{-1}c}=f_{1,\,a(-a^{-1}c)+ab+c}=f_{1,ab}$, which lies in $K$; since conjugation by $g$ is a bijection $G\to G$ and $K$ is a subgroup, $K^{g}=K$ for every $g\in G$, that is $K\mathrel{\trianglelefteq}G$ by [F5]. [F2, F5, F6, given]

1.4 Also $K\cap H=\{\operatorname{id}_F\}$: if $f_{1,b}=f_{a,0}$, evaluating at $0$ gives $b=0$ and then evaluating at $1$ gives $1=a$, so $f_{1,b}=f_{1,0}$. Moreover $G=KH$: for $f_{a,b}\in G$ we have $f_{a,b}=f_{a,0}\circ f_{1,a^{-1}b}$ by [F2], and $f_{a,0}\in H$, $f_{1,a^{-1}b}\in K$. Finally $1<|K|=q$ and $1<|H|=q-1$, because $q>2$. So $G=K\rtimes H$ is an internal semidirect product by [F5], which completes assertion 2. [F2, F4, F5, given]

2.1 We verify that the conjugation action of $H$ on $K\setminus\{\operatorname{id}\}$ is free. Let $h=f_{a,0}\in H$ with $h\ne\operatorname{id}_F$, so $a\ne1$, since $f_{a,0}(1)=a$ while $\operatorname{id}_F(1)=1$; and let $k=f_{1,b}\in K$ with $k\ne\operatorname{id}_F$, so $b\ne0$. By step 1.3 with $c=0$, $hkh^{-1}=f_{1,ab}$, and $ab\ne b$ because $(a-1)b\ne0$ by [F1]; hence $hkh^{-1}\ne k$, that is, $h$ fixes no nonidentity element of $K$. [F1, F6, step 1.2, step 1.3]

3.1 By [F7] applied to the internal semidirect product $G=K\rtimes H$ of step 1.4 and the free action of step 2.1, the subgroup $H$ is a Frobenius complement of $G$; and by the uniqueness statement of [F7], applied to the normal subgroup $K$ with $KH=G$ and $K\cap H=\{1\}$, the Frobenius kernel of $G$ with respect to $H$ is $K$. This is assertion 3. ∎ [F7, step 1.4, step 2.1]
