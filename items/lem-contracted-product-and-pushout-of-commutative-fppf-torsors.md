---
id: lem-contracted-product-and-pushout-of-commutative-fppf-torsors
kind: lemma
title: "Contracted products and pushouts of commutative fppf torsors"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-fppf-h1-of-commutative-group-sheaves-as-torsors
  - def-fppf-sheaf-and-sheafification
  - def-fppf-topology-on-schemes
  - def-axiom-of-choice
  - lem-fppf-sheafification-exists
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "The Stacks Project, Cohomology on Sites, Section 21.4, Lemma 21.4.3"
      url: "https://stacks.math.columbia.edu/tag/03AJ"
      locator: "The canonical torsor-class interpretation of H^1; contracted-product and pushout identities are proved locally below."
---

## Statement

Assume the Axiom of Choice. Let $K$ be a field, let $\mathcal C_K=(\mathit{Sch}/\operatorname{Spec}K)_{fppf}$ be its big fppf site, let $\mathcal G$ and $\mathcal H$ be sheaves of abelian groups on this site, and let $\mathcal P,\mathcal Q$ be right $\mathcal G$-torsors. Define $\mathcal P\otimes^{\mathcal G}\mathcal Q$ as the sheafification of the presheaf quotient by the orbits of $(p,q)\cdot g=(p+g,q-g)$, with right $\mathcal G$-action induced by $[p,q]+h=[p,q+h]$. This sheaf is a right $\mathcal G$-torsor. Its contracted product operation makes the set $H^1_{fppf}(K,\mathcal G)$ of torsor classes an abelian group, with identity the trivial torsor and inverse of $\mathcal P$ represented by the same sheaf with action $p\star g=p-g$. For every homomorphism $\varphi:\mathcal G\to\mathcal H$, define $\mathcal P\times^{\mathcal G,\varphi}\mathcal H$ as the sheafification of the presheaf quotient of $\mathcal P\times\mathcal H$ by the orbits of $(p,h)\cdot g=(p+g,h-\varphi(g))$; its right $\mathcal H$-action is induced by addition in the second factor, it is an $\mathcal H$-torsor, and its isomorphism class depends only on $[\mathcal P]$. The resulting map on torsor classes is a group homomorphism; for every integer $n\ge1$, pushout along multiplication $[n]:\mathcal G\to\mathcal G$ represents the $n$-fold contracted product and hence multiplication by $n$ on $H^1_{fppf}(K,\mathcal G)$.

## Statement references

[The Stacks Project, First Cohomology and Torsors, Lemma 21.4.3](https://stacks.math.columbia.edu/tag/03AJ)

## Facts & Assumptions

**Given:** The Axiom of Choice, a field $K$, its big fppf site, abelian sheaves $\mathcal G,\mathcal H$, a homomorphism $\varphi:\mathcal G\to\mathcal H$, and right $\mathcal G$-torsors $\mathcal P,\mathcal Q$.

[A1] [[def-axiom-of-choice]]: the Axiom of Choice supplies a choice function for every family of nonempty sets.

[F1] [[def-fppf-h1-of-commutative-group-sheaves-as-torsors]]: a right $\mathcal G$-torsor is a sheaf whose action map is an isomorphism and which has sections locally for fppf coverings; $H^1_{fppf}(K,\mathcal G)$ is the set of its isomorphism classes.

[F2] [[def-fppf-topology-on-schemes]]: fppf coverings are stable under base change and composition, so fiber products of two covering families give a common covering refinement.

[F3] [[lem-fppf-sheafification-exists]]: under AC every presheaf on the fppf site has a sheafification satisfying the universal property, the unit is an isomorphism for an already-sheaf presheaf, and sheafification is functorial, preserves finite limits, and is computed by the two-step plus construction.

[F4] [[def-fppf-sheaf-and-sheafification]]: a sheaf identifies sections over an object with compatible local sections on any covering, so local equality and local isomorphism can be checked by gluing.

## Proof

1.1 For $\mathcal P\otimes^{\mathcal G}\mathcal Q$, let $R$ be the presheaf of orbit sets in the Statement. On any object $U$, torsor local nonemptiness in [F1] gives covers trivializing $\mathcal P$ and $\mathcal Q$; their fiber-product refinement is a cover by [F2]. On a member $V$ of this refinement, choose sections $p_0,q_0$. The torsor action isomorphisms identify $\mathcal P(W)$ and $\mathcal Q(W)$ with $\mathcal G(W)$ for every $W\to V$. Under these coordinates the orbit action is $(a,b)\cdot g=(a+g,b-g)$. The sum map $[(a,b)]\mapsto a+b$ is invariant, surjective since $s=[(0,s)]$, and injective since equality $a+b=a'+b'$ gives $g=a'-a$ and $b'=b-g$. Thus $R|_V$ is the presheaf $\mathcal G|_V$. Every fppf cover of an object $W$ equipped with a map to $V$ is an ambient fppf cover of $W$, and each member maps to $V$ by composition. Therefore the plus construction in [F3] uses the same covering families on these objects as on the big site; since $\mathcal G|_V$ is already a sheaf, the sheafified quotient is locally isomorphic to $\mathcal G$. [A1, F1, F2, F3, given, construct]

2.1 The diagonal orbit relation is preserved by adding $h$ in the second coordinate, so it induces the action in the Statement on the quotient and, by functoriality and finite-limit preservation in [F3], on its sheafification. In the local coordinates of 1.1 this action is $(s,h)\mapsto s+h$ on $\mathcal G$. Its action map is an isomorphism locally, with inverse $(s,t)\mapsto(s,t-s)$, and the zero section gives a local section. A morphism of sheaves that is an isomorphism on a cover is an isomorphism globally: injectivity follows from uniqueness in [F4], and local inverse images of a section agree on overlaps by that injectivity and glue by [F4]. Applying this to the action map proves the global torsor condition. [F1, F3, F4, step 1.1, construct]

3.1 Isomorphisms of input torsors induce isomorphisms of their orbit presheaves and sheafifications, so the product is well-defined on isomorphism classes. By the sheafification universal property in [F3], a map from the sheafified orbit presheaf to any sheaf is exactly a map from the product whose values agree on each orbit. Since [F3] also preserves finite products, maps from either iterated product of three torsors to any sheaf are exactly maps from $\mathcal P\times\mathcal Q\times\mathcal R$ whose values agree under each of the displayed orbit generators. The left-bracketed quotient has generators $(p,q,r)\mapsto(p+g,q-g,r)$ and $(p,q,r)\mapsto(p,q+h,r-h)$; the right-bracketed quotient has the second generator and $(p,q,r)\mapsto(p+g,q,r-g)$. The latter is obtained by applying the first left-bracketed generator with $g$ and then the second with $h=g$; conversely the first is obtained by applying the right-bracketed generator with $g$ and then the second with $h=-g$. Thus the two iterated quotients impose exactly the same orbit relation, so $[(p,q),r]\mapsto[p,(q,r)]$ is well-defined and invertible by the stated universal property. Swapping a pair sends its orbit generator $(p+g,q-g)$ to $(q-g,p+g)$, the orbit by $-g$ of $(q,p)$, so $[p,q]\mapsto[q,p]$ is well-defined. The map $\mathcal P\otimes^{\mathcal G}\mathcal G\to\mathcal P$, $[p,g]\mapsto p+g$, is unchanged by $(p,g)\mapsto(p+h,g-h)$ and commutes with the right actions; $\mathcal G$ itself is a torsor because translation has inverse $(x,y)\mapsto(x,y-x)$ and its zero section is global. Put $\mathcal P^{-1}=\mathcal P$ with action $p\star g=p-g$; this is a torsor since its action map has inverse $(p,q)\mapsto(p,p-q)$ and its local sections are those of $\mathcal P$. Its product orbit generator is $(p,q)\mapsto(p+g,q+g)$. The torsor action isomorphism gives a unique $d$ with $q=p-d$, and this $d$ is unchanged by the common translation, so $[p,q]\mapsto d$ descends to the quotient. On a common cover trivializing all torsors, the associator, commutor, unit map, and inverse map are respectively $(a+b)+c=a+(b+c)$, $a+b=b+a$, $a+g$, and $a-b$, so each commutes with the right actions and is an isomorphism locally and globally by step 2.1. These associator, commutor, unit, and inverse isomorphisms prove the stated abelian group structure on isomorphism classes. [F1, F2, F3, F4, step 2.1, construct, algebra]

3.2 For $\varphi:\mathcal G\to\mathcal H$, the orbit relation $(p,h)\cdot g=(p+g,h-\varphi(g))$ is preserved by right addition in $\mathcal H$, and functorial sheafification gives the stated action. On a cover where $\mathcal P$ has a section $p_0$, write $p=p_0+a$; the map $[p_0+a,h]\mapsto h+\varphi(a)$ is invariant and surjective. If $h+\varphi(a)=h'+\varphi(a')$, then for $g=a'-a$ one has $(a',h')=(a+g,h-\varphi(g))$, so the two pairs lie in the same orbit. This identifies the orbit quotient with $\mathcal H$. As in step 1.1, sheafification restricts to this local sheaf, so the pushout is locally an $\mathcal H$-torsor; the action map is globally an isomorphism by the argument of step 2.1. An isomorphism of input torsors induces an isomorphism of quotient presheaves and then of their sheafifications, so the output class depends only on $[\mathcal P]$. [A1, F1, F2, F3, step 1.1, step 2.1, given, construct]

4.1 For $\mathcal P,\mathcal Q$, the formula $[(p,h_1),(q,h_2)]\mapsto[(p,q),h_1+h_2]$ defines a map commuting with the right $\mathcal H$ actions from $(\mathcal P\times^{\mathcal G,\varphi}\mathcal H)\otimes^{\mathcal H}(\mathcal Q\times^{\mathcal G,\varphi}\mathcal H)$ to $(\mathcal P\otimes^{\mathcal G}\mathcal Q)\times^{\mathcal G,\varphi}\mathcal H$. The outer $\mathcal H$-orbit preserves $h_1+h_2$. Replacing $(p+g,h_1)$ by $(p,h_1+\varphi(g))$ in the first pushout changes the target representative from $[(p+g,q),h_1+h_2]$ to $[(p,q),h_1+h_2+\varphi(g)]$: indeed $[p+g,q]=[p,q]+g$, and this is exactly the target pushout relation. The second pushout orbit is verified by the same calculation with $q$. On a common trivializing cover, this map is the identity of $\mathcal H$ in the coordinates $h_1+h_2+\varphi(a+b)$, so it is an isomorphism by step 2.1. Therefore pushout preserves contracted products and induces a group homomorphism on torsor classes. [F1, F2, F3, step 2.1, step 3.2, construct]

5.1 For $n\ge1$, let $\mathcal P^{\otimes n}$ be the iterated contracted product and let $d_n:\mathcal P\to\mathcal P^{\otimes n}$ send $p$ to $[p,\ldots,p]$. On a cover trivializing $\mathcal P$, local coordinates show $d_n(p+g)=d_n(p)+ng$, so the equality holds as sheaf morphisms by [F4]. Consequently $[p,h]\mapsto d_n(p)+h$ respects the pushout orbit $(p+g,h)\sim(p,h+ng)$ and gives a map from the pushout along $[n]$ to $\mathcal P^{\otimes n}$. On the same cover its coordinate is $h+na$, the coordinate of the pushout quotient and of $\mathcal P^{\otimes n}$, so it is an isomorphism by step 2.1. Its class is the $n$-fold contracted product, which is multiplication by $n$ in the abelian group from step 3.1. [F1, F2, F4, step 2.1, step 3.1, step 3.2, step 4.1, construct, algebra] ∎
