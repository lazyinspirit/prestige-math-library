---
id: thm-a-connected-covering-space-of-a-connected-lie-group-carries-a-unique-lifted-lie-group-structure
kind: theorem
title: A connected cover with a chosen lifted identity has a unique lifted Lie-group structure
status: draft
origin: pipeline
deps: [thm-covering-space-lifting-criterion, thm-uniqueness-of-lifts-from-a-connected-space, lem-loop-products-in-a-topological-group-agree-up-to-homotopy, lem-connected-covers-of-smooth-manifolds-have-a-canonical-smooth-structure, thm-product-of-connected-spaces, thm-connected-and-locally-path-connected-implies-path-connected]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Proposition 3.5 and proof, printed page 26
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Let $p:\widetilde G\to G$ be a covering map with $\widetilde G$ connected and
$G$ a connected Lie group. For a chosen $\widetilde e\in p^{-1}(e)$, there is
a unique Lie-group structure on the given topological space $\widetilde G$
whose identity is $\widetilde e$ and for which $p$ is a covering
homomorphism.

## Facts & Assumptions

**Given:** The covering $p:\widetilde G\to G$, the stated connectedness
hypotheses, and one chosen point $\widetilde e$ over the identity $e$ of $G$.

[F1] The covering gives $\widetilde G$ a unique smooth-manifold structure for
which $p$ is a local diffeomorphism.
[[lem-connected-covers-of-smooth-manifolds-have-a-canonical-smooth-structure]].

[F2] A based map from a path-connected locally path-connected space lifts
through a covering exactly when its induced fundamental-group image lies in
the covering subgroup; the based lift is unique.
[[thm-covering-space-lifting-criterion]].

[F3] Two lifts from a connected space that agree at one point agree
everywhere. [[thm-uniqueness-of-lifts-from-a-connected-space]].

[F4] Pointwise multiplication of loops in a topological group represents
their fundamental-group product.  Pointwise inversion therefore represents
the inverse class.
[[lem-loop-products-in-a-topological-group-agree-up-to-homotopy]].

[F5] Finite products of connected spaces are connected.
[[thm-product-of-connected-spaces]].

[F6] Connected locally path-connected spaces are path connected.
[[thm-connected-and-locally-path-connected-implies-path-connected]].

## Proof

**Proof technique:** lift multiplication and inversion and use uniqueness of
lifts for the group laws.

1.1 Give $\widetilde G$ the canonical smooth structure of [F1]. Its finite products are connected by [F5], and are locally path connected as products of manifold coordinate domains; hence they are path connected by [F6]. [F1, F5, F6]

2.1 Consider the based map $f=m\circ(p\times p):(\widetilde G^2,(\widetilde e,\widetilde e))\to(G,e)$. For a based loop $\gamma=(\alpha,\beta)$ in $\widetilde G^2$, [F4] gives $[f\circ\gamma]=[p\circ\alpha][p\circ\beta]$. Both factors lie in the subgroup $p_*\pi_1(\widetilde G,\widetilde e)$, so their product does also. The criterion [F2] therefore supplies a unique based lift $\widetilde m:\widetilde G^2\to\widetilde G$ satisfying $p(\widetilde m(a,b))=p(a)p(b)$ and $\widetilde m(\widetilde e,\widetilde e)=\widetilde e$. [F2, F4, step 1.1]

2.2 Similarly, the based map $a\mapsto p(a)^{-1}$ lifts to a unique based map $\widetilde{\operatorname{inv}}:\widetilde G\to\widetilde G$. Indeed, [F4] identifies the class of the pointwise inverse of $p\circ\alpha$ with $[p\circ\alpha]^{-1}$, which remains in the subgroup $p_*\pi_1(\widetilde G,\widetilde e)$. [F2, F4, step 1.1]

3.1 The two maps $(a,b,c)\mapsto\widetilde m(\widetilde m(a,b),c)$ and $(a,b,c)\mapsto\widetilde m(a,\widetilde m(b,c))$ are lifts through $p$ of the same map $(a,b,c)\mapsto p(a)p(b)p(c)$, and they agree at $(\widetilde e,\widetilde e,\widetilde e)$. Their connected domain and [F3] give associativity. Likewise $a\mapsto\widetilde m(\widetilde e,a)$, $a\mapsto\widetilde m(a,\widetilde e)$, and $a\mapsto a$ are lifts of $p$ agreeing at $\widetilde e$, so $\widetilde e$ is a two-sided identity. [F3, F5, step 2.1]

4.1 The maps $a\mapsto\widetilde m(\widetilde{\operatorname{inv}}(a),a)$ and $a\mapsto\widetilde m(a,\widetilde{\operatorname{inv}}(a))$ both project to the constant map with value $e$ and agree at $\widetilde e$ with the constant map having value $\widetilde e$. By [F3] they are that constant map, so $\widetilde{\operatorname{inv}}(a)$ is the two-sided inverse of $a$. Thus $(\widetilde G,\widetilde m,\widetilde{\operatorname{inv}},\widetilde e)$ is a group and $p$ is a group homomorphism. [F3, step 2.1, step 2.2, step 3.1]

5.1 The lifted maps are smooth. Around any source point choose a neighborhood whose image under a lift lies in one sheet over a smooth coordinate domain; there the lift is the composite of its smooth projection to $G$ with the smooth local inverse of $p$ supplied by [F1]. This applies to $\widetilde m$ and $\widetilde{\operatorname{inv}}$, so the group is a Lie group and $p$ is a covering homomorphism. [F1, step 2.1, step 2.2, step 4.1]

6.1 Any other such Lie-group structure has the same smooth structure by [F1]. Its multiplication and inversion are based lifts of the two maps used in steps 2.1 and 2.2, so [F2] makes them equal to $\widetilde m$ and $\widetilde{\operatorname{inv}}$. This proves uniqueness. Subgroup closure is the exact property used in steps 2.1 and 2.2, and uniqueness of based lifts supplies every group law. The only choice is the one explicitly chosen basepoint $\widetilde e$; no choice principle is invoked. [F1, F2, step 2.1, step 2.2, step 5.1] ∎
