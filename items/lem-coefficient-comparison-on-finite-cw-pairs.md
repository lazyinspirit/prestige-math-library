---
id: "lem-coefficient-comparison-on-finite-cw-pairs"
kind: "lemma"
title: "Coefficient comparison on finite cw pairs"
deps: ["lem-subdivision-compatible-continuous-polyhedral-homology-comparison", "lem-oriented-simplex-comparison-for-an-ordinary-homology-theory", "lem-finite-cw-pairs-admit-finite-simplicial-homotopy-models", "def-coefficient-normalized-morphism-of-ordinary-homology-theories", "thm-singular-homology-satisfies-dimension-and-arbitrary-additivity"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, 15§2, uniqueness theorem pp.119–120"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "15§2, uniqueness theorem pp.119–120"
    - title: "Hatcher, Algebraic Topology, Theorem 2C.5 pp.182–184; Axioms for Homology p.161"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Theorem 2C.5 pp.182–184; Axioms for Homology p.161"
status: "draft"
origin: "pipeline"
proof_strategy: "Compare each theory with simplicial chains using the specified coefficients and transport along a finite simplicial homotopy model. Independence and continuous naturality follow by comparing two models via their homotopy equivalences and the continuous polyhedral comparison. A normalized natural morphism is forced on relative simplices by boundaries, then on the exact diagram, proving uniqueness."
---

## Statement

For ordinary homology theories $h,k$ and a specified isomorphism $u:h_0(*)\to k_0(*)$, there is a unique natural equivalence on finite CW pairs normalized by $u$ and commuting with connecting homomorphisms.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] The ordered-simplex comparison for an ordinary homology theory on finite simplicial pairs is unchanged by finite subdivision. It is natural for every continuous map of finite simplicial pairs and commutes with pair connecting homomorphisms. ([[lem-subdivision-compatible-continuous-polyhedral-homology-comparison]])

[F2] Every finite CW pair $(X,A)$ is homotopy equivalent as a pair to a finite simplicial pair $(|K|,|L|)$. In particular there are maps of pairs in both directions whose composites are homotopic to the identities through maps preserving the designated subspaces. ([[lem-finite-cw-pairs-admit-finite-simplicial-homotopy-models]])

[F3] For ordinary theories $h,k$ as in def-unreduced-homology-theory-on-cw-pairs, a **morphism** $\eta:h\to k$ consists of homomorphisms $\eta_n(X,A):h_n(X,A)\to k_n(X,A)$, natural for all maps of CW pairs and all $n\in\mathbb Z$, satisfying $\partial^k\eta_n=\eta_{n-1}\partial^h$. For a specified homomorphism $u:h_0(*)\to k_0(*)$, the morphism is **coefficient-normalized by $u$** if $\eta_0(*)=u$. A comparison equivalence has every component invertible and is normalized by a specified coefficient isomorphism. Neither the existence nor uniqueness of such an extension is part of this definition. ([[def-coefficient-normalized-morphism-of-ordinary-homology-theories]])

[F4] For any abelian group $G$, $H_0(*;G)\cong G$ and $H_n(*;G)=0$ for every integer $n\ne0$. For every set-indexed family of pairs the canonical map $$\bigoplus_\alpha H_n(X_\alpha,A_\alpha;G)\longrightarrow H_n\left(\bigsqcup_\alpha X_\alpha,\bigsqcup_\alpha A_\alpha;G\right)$$ is an isomorphism. Together with the structural axioms, singular homology is an ordinary theory with coefficient group $G$. ([[thm-singular-homology-satisfies-dimension-and-arbitrary-additivity]])

[F5] For finite simplicial pairs $(K,L)$ and any ordinary theory $h$ with coefficient group $G$, ordered simplex classes identify $$C_*^h(K,L)\cong C_*^{\mathrm{simp}}(K,L;\mathbb Z)\otimes G,$$ with the alternating face differential. Consequently they give a coefficient-normalized isomorphism $h_n(|K|,|L|)\to H_n(|K|,|L|;G)$, natural for simplicial maps and compatible with pair boundaries. No flatness of $G$ is assumed. ([[lem-oriented-simplex-comparison-for-an-ordinary-homology-theory]])

## Proof

1.1 Let $G=h_0(*)$, $G'=k_0(*)$. Singular homology with either coefficient is an ordinary theory by F4. On a finite simplicial pair, F5 supplies coefficient-normalized isomorphisms from $h$ and $k$ to singular homology with $G$ and $G'$. By F1 these isomorphisms are natural for all continuous maps of finite simplicial pairs, not only simplicial maps, and commute with pair boundaries. The coefficient chain map $1\otimes u$ is invertible and commutes with the boundary because the latter uses integer coefficients. Composing these comparisons gives $\eta$ normalized by $u$ on finite simplicial pairs. [F1, F3, F4, F5]

2.1 For a finite CW pair choose a finite simplicial homotopy model $a:P\to(X,A)$ with pair homotopy inverse $b$, by F2, and define $\eta_{X,A}=k(a)\eta_P h(b)$. Homotopy invariance makes $h(a),k(a)$ isomorphisms. If $a':P'\to(X,A)$ is another model, compare by the continuous pair map $b'a:P\to P'$. Naturality on polyhedra and the homotopy-inverse identities imply the two transported maps agree. [F1, F2, step 1.1]

3.1 For a continuous map $f:(X,A)\to(Y,B)$, insert the pair map $b_Yfa_X$ between the models in the preceding formula. Polyhedral naturality cancels the intervening homotopy-inverse composites and gives $k(f)\eta_{X,A}=\eta_{Y,B}h(f)$. Pair-boundary compatibility follows in the same way by applying naturality of each pair sequence to $a$ and $b$. [F1, F3, step 2.1]

4.1 A normalized boundary-compatible morphism is forced on relative ordered simplices by their boundary isomorphisms and its prescribed value on vertices. It is then forced on direct sums of those cell groups by the inclusion maps, and on a finite simplicial pair by the skeletal lift rule: $\rho(y)$ must map to the corresponding $\rho$ of the image lift. Thus it coincides with the constructed comparison there. Transport along a model forces it on every finite CW pair. The empty pair gives only the zero map and a point gives exactly $u$. [F1, F2, F3, step 1.1, step 2.1] ∎
