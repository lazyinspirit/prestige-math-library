---
id: thm-multiplicative-type-groups-and-galois-character-modules
kind: theorem
title: "Multiplicative type groups and Galois character modules"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups, corrected 2022 edition"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "SGA 3, Expose VIII, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp8-8nov09.pdf
    - title: "SGA 3, Expose X, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Expo10-8nov09.pdf
deps: ["def-continuous-galois-character-module", "def-axiom-of-choice", "lem-diagonalizable-character-antiequivalence", "lem-multiplicative-type-groups-split-separably", "lem-finite-galois-descent-for-multiplicative-hopf-algebras", "thm-fundamental-theorem-of-finite-galois-theory", "thm-separable-closures-exist-and-are-isomorphic-over-the-base"]
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Over an arbitrary field $k$, $G\mapsto X^*(G)$ is a contravariant equivalence between finite-type group schemes of multiplicative type over $k$ and finitely generated abelian groups with continuous $\Gamma_k$-action. Its inverse sends $M$ to the group with coordinate algebra $(k_s[M])^{\Gamma_k}$ for the action $\sigma(c e_m)=\sigma(c)e_{\sigma m}$. In particular, naturally,
$$\operatorname{Hom}_{k\text{-groups}}(G,H)\cong\operatorname{Hom}_{\Gamma_k}(X^*(H),X^*(G)).$$
No smoothness, connectedness, perfection, or characteristic-zero hypothesis is required.

## Facts & Assumptions

[A1] Assume [[def-axiom-of-choice]], used through F3 to descend affineness from a splitting cover; and through F6 to extend finite separable embeddings; the Hopf and finite Galois descent steps use finite lists.

[F1] Continuous Galois modules and transport on characters are in [[def-continuous-galois-character-module]].

[F2] The split character dictionary is [[lem-diagonalizable-character-antiequivalence]].

[F3] Every finite-type multiplicative group splits over a finite Galois extension: [[lem-multiplicative-type-groups-split-separably]].

[F4] Semilinear Hopf algebras and their maps descend effectively and uniquely: [[lem-finite-galois-descent-for-multiplicative-hopf-algebras]].

[F5] Finite Galois extensions and their intermediate fields obey [[thm-fundamental-theorem-of-finite-galois-theory]].

[F6] Assuming AC, separable closures are base-isomorphic: [[thm-separable-closures-exist-and-are-isomorphic-over-the-base]]. Applied to $k_s$ as a separable closure of a finite subfield $L$, with one $L$-structure twisted by an automorphism of $L$, this extends every such automorphism to $k_s$. For finite Galois $L/k$, restriction therefore gives $\Gamma_k/\operatorname{Gal}(k_s/L)=\operatorname{Gal}(L/k)$. Moreover $k_s^{\operatorname{Gal}(k_s/L)}=L$: if $a\notin L$, take the finite normal closure of $L(a)/L$, use F5 to find an automorphism moving $a$, and extend it by the same closure-isomorphism argument.

## Proof

**Given:** $k,k_s,\Gamma_k$ and the two categories in the statement.

1.1 If $M$ is finitely generated and the action is continuous, intersect the open stabilizers of a finite generating list. That intersection fixes every element of $M$, so is the kernel of the action and is open and normal. A Krull-open subgroup contains $\operatorname{Gal}(k_s/L)$ for a finite Galois $L/k$: take the normal closure of the finite extension defining a basic open neighborhood. Thus the action factors through the finite group $\operatorname{Gal}(L/k)$. Conversely an action factoring through this group is continuous. For $G$, F3 and F2 show $X^*(G)$ is finitely generated, and its basis characters under a splitting isomorphism over $L$ are fixed by $\operatorname{Gal}(k_s/L)$, so its action is continuous. [A1, F1, F2, F3, F5, F6, algebra]

2.1 Given $M$, choose $L$ as in step 1.1. The action on $L[M]$ respects multiplication and all Hopf maps. By F4, $A=L[M]^{\operatorname{Gal}(L/k)}$ is a finite-type Hopf algebra with $L\otimes A\cong L[M]$. Hence $D(M)=\operatorname{Spec}A$ is of multiplicative type. Its character module identifies with $M$ by F2, and the identification is equivariant because $e_m$ transforms to $e_{\sigma m}$. The fixed algebra equals $(k_s[M])^{\Gamma_k}$: invariance under $\operatorname{Gal}(k_s/L)$ means every coefficient lies in $L$, since this subgroup fixes every monomial; taking the remaining finite-group invariants gives $A$. Thus the construction is independent of the chosen $L$. [step 1.1, F2, F4, F5, F6, algebra]

3.1 For $G$, the evaluation map $k_s[X^*(G)]\to\mathcal O(G)\otimes k_s$ sends $e_\chi$ to its character function and is an equivariant Hopf isomorphism by F2 and F3. The finitely many images of a Hopf generating set of $k_s[X^*(G)]$ and of their antipodes involve finitely many coefficients in $k_s$, hence lie over a common finite Galois extension. Restricting the evaluation isomorphism to $\Gamma_k$-fixed elements identifies its source with $(k_s[X^*(G)])^{\Gamma_k}=\mathcal O(D(X^*(G)))$ and its target with $(\mathcal O(G)\otimes k_s)^{\Gamma_k}=\mathcal O(G)$, the latter because a fixed element is defined over one finite Galois subextension, where F4's canonical fixed-algebra clause computes the invariants. Hence $\mathcal O(D(X^*(G)))\cong\mathcal O(G)$, and so $G\cong D(X^*(G))$. Given $G,H$, take a common finite Galois splitting extension. F2 identifies every group map there with a reversed character-module map; this identification respects the actions. F4 says precisely the equivariant maps descend uniquely, giving the displayed bijection. The evaluation identifications commute with maps because both send a monomial to the corresponding pulled-back character. They are therefore natural and prove the anti-equivalence. [F2, F3, F4, step 2.1, algebra] ∎
