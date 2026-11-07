---
id: lem-prescribed-face-isotopies-correct-finite-three-manifold-regluings
kind: lemma
title: "Prescribed face isotopies correct finite marked regluings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-quotient-topology
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bruno Martelli, An Introduction to Geometric Topology, Version 4, September 2025"
      url: https://people.dm.unipi.it/martelli/Geometric_topology.pdf
      locator: "Section 1.7.4, printed pp.39–40, gluing portions of boundaries; the simultaneous labeled-face correction is proved explicitly below."
axiom_use: "No choice principle is used: all piece maps, finitely many collars and face isotopies are supplied as data."
---

## Statement

Let $C$ and $C'$ be finite disjoint unions of compact three-manifolds with corners. Specify finitely many paired compact boundary faces $(F_e^-,F_e^+)$ of $C$, pairing homeomorphisms $a_e:F_e^-\to F_e^+$, corresponding faces of $C'$ with pairings $a'_e$, and product collars of these faces. Distinct face interiors are disjoint; face boundaries may meet. The quotient spaces obtained by these pairings are denoted $M$ and $M'$. Assume these specified gluings are manifolds, equipped with the given face-gluing PL structures when the PL conclusion is used. Let $g:C\to C'$ be a homeomorphism carrying each specified face to its corresponding face, and write $g_e^\pm$ for its restrictions. Assume that on every positive target face the discrepancy
$$k_e=(a'_e g_e^-)(g_e^+a_e)^{-1}:F_e^{\prime+}\longrightarrow F_e^{\prime+}$$
is supplied with an isotopy $k_{e,t}$ from the identity to $k_e$, equal to the identity on one common neighborhood of that face's boundary for all $t$. Then $g$ can be changed by an isotopy of $C'$ supported in collars of positive-face interiors to a homeomorphism $\widetilde g$ satisfying
$$\widetilde g_e^+a_e=a'_e\widetilde g_e^-$$
for all $e$. It consequently descends to a homeomorphism $M\to M'$. The correction fixes all residual boundary faces pointwise, so any prescribed residual-boundary map of $g$ and every transported annulus, torus, square, or marked-subset label there are retained. If the given collar data, maps and isotopies are jointly PL, the correction and descended map are PL. With oriented pieces and orientation-preserving piece maps, the descended map preserves orientation. The construction also applies inductively to every finite collection of prescribed hierarchy gluings. It asserts neither existence of the face isotopies nor a homotopy-equivalence-to-homeomorphism theorem.

## Statement references

[[def-quotient-topology]]

## Facts & Assumptions

**Given:** All finite cut-piece, face, collar, homeomorphism and isotopy data in the Statement.

[F1] A map from a quotient is continuous exactly when its composite with the quotient projection is continuous. This follows directly from the definition of the quotient topology by preimages of open sets. [[def-quotient-topology]]

## Proof

**Given:** The data in the Statement; a product collar has coordinates $(x,r)$ with its boundary face at $r=0$.

1.1 For a fixed $e$, choose a continuous scalar cutoff $\lambda:[0,\epsilon]\to[0,1]$ equal to one near zero and zero near $\epsilon$. On its positive target collar set $K_e(x,r)=(k_{e,\lambda(r)}(x),r)$. This is a homeomorphism: its inverse is $(y,r)\mapsto(k_{e,\lambda(r)}^{-1}(y),r)$. The inverse family is jointly continuous because $(x,t)\mapsto(k_{e,t}(x),t)$ is a continuous bijection of the compact face times the interval onto itself, hence is a homeomorphism: it sends closed sets to compact sets, which are closed in the Hausdorff target. The assumption that all $k_{e,t}$ fix a common neighborhood of $\partial F_e^{\prime+}$ makes $K_e$ the identity near the collar's side boundary, and its cutoff makes it the identity near the inner collar boundary. It thus extends by the identity to all of $C'$. For $0\le s\le1$, put $L(s,r)=\min\{s,\lambda(r)\}$ and replace $\lambda(r)$ by $L(s,r)$ in the formula for $K_e$. Each time slice is a homeomorphism by the same inverse argument. Since $L(0,r)=0$, $L(1,r)=\lambda(r)$, $L(s,0)=s$ and $L(s,r)=0$ on the inner collar, this gives the correction isotopy from the identity with exactly the same supports and relative conditions. [given, construct, algebra]

2.1 The supports of the finitely many face isotopies lie in compact subsets of their open face interiors. They are separated from all other boundary faces. Shrink the supplied collar depths over these compact sets so their correction supports are mutually disjoint; finitely many distinct compact interior-face subsets have disjoint sufficiently small collar neighborhoods. Extend the corrections from step 1.1 in these collars. Their finite composition $K$ is a homeomorphism isotopic to the identity, restricts to $k_e$ on each positive face, and is the identity on every negative face and every residual boundary face. Put $\widetilde g=Kg$. [step 1.1, construct]

3.1 On a paired face the discrepancy formula now gives $\widetilde g_e^+a_e=k_e g_e^+a_e=a'_e g_e^-=a'_e\widetilde g_e^-$. Hence $\widetilde g$ carries every generating paired-point relation of $M$ to one of $M'$. Its inverse has the same compatibility in reverse, so it carries whole equivalence classes bijectively to equivalence classes. There is a bijection $\overline g:M\to M'$ whose composite with the first quotient projection equals the second quotient projection composed with $\widetilde g$. It is continuous by [F1], and its inverse is continuous by the same argument using $\widetilde g^{-1}$. Thus it is a homeomorphism. This proof applies also when face boundaries meet: compatibility on each generator gives compatibility on their transitive equivalence classes. [F1, step 2.1, algebra]

4.1 The correction fixes the residual boundary pointwise, so $\widetilde g$ agrees there exactly with $g$, including all given labels and specified marked subsets. In the PL case choose piecewise linear $\lambda$. On every rectangle of a finite subdivision of the $(s,r)$ parameter square the function $\min\{s,\lambda(r)\}$ is affine on the two sides of the line $s=\lambda(r)$; triangulating these pieces makes $L$ jointly PL. Thus $(x,s,r)\mapsto(k_{e,L(s,r)}(x),s,r)$ is PL by composition with the supplied jointly PL isotopy after finite common subdivisions. This is a bijection of the collar times the parameter interval; its inverse is PL by restricting to its finitely many linear simplices. The endpoint corrections and their entire isotopy are therefore PL, with no bilinear parameter cutoff. The descended map is PL in the specified face-gluing structures. An isotopy from the identity preserves orientation on each oriented interior, so orientation-preserving piece maps give the orientation-preserving glued map. Finally repeat the same construction at each of the finitely many prescribed reconstruction levels, using the maps and face isotopies provided at that level. No compatibility or isotopy absent from the data is inferred by this induction. These conclusions prove all assertions. [step 1.1, step 2.1, step 3.1, construct] ∎
