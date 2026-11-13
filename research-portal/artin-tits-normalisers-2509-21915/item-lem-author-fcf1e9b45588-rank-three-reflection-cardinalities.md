---
title: Reflection cardinalities of the three connected finite rank-three types
status: draft
research_item: lem-author-fcf1e9b45588-rank-three-reflection-cardinalities
dependency_level: 2
---

## Prerequisites

- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)
- [math:thm-cg-finite-parabolic-longest-element-and-opposition](https://alphabetamath.cc/item/thm-cg-finite-parabolic-longest-element-and-opposition)
- [math:lem-cg-classical-coxeter-spectra-from-reflection-models](https://alphabetamath.cc/item/lem-cg-classical-coxeter-spectra-from-reflection-models)
- [math:lem-cg-exceptional-coxeter-spectra-from-exact-certificates](https://alphabetamath.cc/item/lem-cg-exceptional-coxeter-spectra-from-exact-certificates)
- [math:lem-cg-steinberg-bipartite-root-enumeration](https://alphabetamath.cc/item/lem-cg-steinberg-bipartite-root-enumeration)
- [math:thm-cg-finite-coxeter-classification-including-h-and-dihedral](https://alphabetamath.cc/item/thm-cg-finite-coxeter-classification-including-h-and-dihedral)
- [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness)


## Statement

For a Coxeter system of type $A_3$, $B_3$ or $H_3$, let $T=\{wsw^{-1}:w\in W,\ s\in S\}$ be its set of Coxeter reflections, using [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers). Then $|T|$ is respectively $6$, $9$ or $15$.

## Facts & Assumptions

[F1] $|T|=|\Phi_+|$ for a finite Coxeter system ([math:thm-cg-finite-parabolic-longest-element-and-opposition](https://alphabetamath.cc/item/thm-cg-finite-parabolic-longest-element-and-opposition), part (1)(ii)).

[F2] For irreducible finite type of rank $n\ge2$ and bipartite Coxeter element of order $h$, $|\Phi_+|=nh/2$ ([math:lem-cg-steinberg-bipartite-root-enumeration](https://alphabetamath.cc/item/lem-cg-steinberg-bipartite-root-enumeration), part (3)).

[F3] For the bipartite Coxeter element $c$, the complexified canonical operator $\rho_{\mathbb C}(c)$ has exact order $n+1$ in type $A_n$ ($n\ge1$) and $2n$ in type $B_n$ ($n\ge2$) ([math:lem-cg-classical-coxeter-spectra-from-reflection-models](https://alphabetamath.cc/item/lem-cg-classical-coxeter-spectra-from-reflection-models), Statement). The real canonical operator $\rho(c)$ has exact order $10$ in type $H_3$ ([math:lem-cg-exceptional-coxeter-spectra-from-exact-certificates](https://alphabetamath.cc/item/lem-cg-exceptional-coxeter-spectra-from-exact-certificates), Statement, $H_3$ case).

[F4] The standard diagrams $A_3$, $B_3$ and $H_3$ are three-vertex paths with successive edge labels $(3,3)$, $(3,4)$ and $(3,5)$, respectively; each defines a finite irreducible Coxeter system ([math:thm-cg-finite-coxeter-classification-including-h-and-dihedral](https://alphabetamath.cc/item/thm-cg-finite-coxeter-classification-including-h-and-dihedral), part (1)).

[F5] For a Coxeter system with finite $S$, its canonical reflection homomorphism $\rho$ is injective ([math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness), part (3)).

## Proof

**Given:** A Coxeter system of one of the stated rank-three types, its canonical representation $\rho$, roots $\Phi$ and reflection set $T$ as in [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers). **Goal:** Evaluate $|T|$ using exact supplier statements.

**Proof technique:** direct.

1.1 By [F4] each diagram is connected with three vertices, and its Coxeter group is finite. Thus the system is irreducible finite type with $n=3\ge2$. Number the path vertices $1,2,3$ in order. The classes $J=\{s_1,s_3\}$ and $K=\{s_2\}$ form a bipartition. Since the endpoints are not joined, $m(s_1,s_3)=2$ and the Coxeter relations give $s_1s_3=s_3s_1$. Hence $c=(s_1s_3)s_2$ is a bipartite Coxeter element in the convention of the spectrum and root-enumeration suppliers. Reversing the two classes replaces $ab$ by $ba=a^{-1}(ab)a$, so it does not change the order. [given, F4, algebra]

2.1 The operators in [F3] therefore have exact orders $q=4,6,10$, respectively. For the classical cases, complexification has the same real matrix entries in the simple-root basis, so $\rho_{\mathbb C}(c)^k=I$ if and only if $\rho(c)^k=I$ for every positive integer $k$. For all three cases, $|S|=3$ permits [F5], and injectivity gives $\rho(c)^k=I$ if and only if $c^k=1$. Consequently the group element has exact order $h=\operatorname{ord}(c)=q$, namely $4$, $6$ or $10$. [step 1.1, F3, F5, algebra]

3.1 By [F1] and [F2], $|T|=|\Phi_+|=3h/2$. Substitution gives $3\cdot4/2=6$, $3\cdot6/2=9$ and $3\cdot10/2=15$. The use of canonical roots only evaluates the abstract conjugate set $T$; it does not assume an unproved identification of the original arrangement with a canonical representation. [step 1.1, step 2.1, F1, F2, algebra] ∎
