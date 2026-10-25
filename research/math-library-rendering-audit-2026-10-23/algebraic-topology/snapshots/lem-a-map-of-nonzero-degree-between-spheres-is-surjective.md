---
id: "lem-a-map-of-nonzero-degree-between-spheres-is-surjective"
kind: "lemma"
title: "A map of nonzero degree between spheres is surjective"
deps: ["def-degree-of-a-self-map-of-an-oriented-sphere", "cor-contractible-nonempty-spaces-have-the-homology-of-a-point", "thm-singular-homology-satisfies-dimension-and-arbitrary-additivity"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Degree property (b), p.134"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Degree property (b), p.134"
status: published
origin: "pipeline"
proof_strategy: "If a point is omitted, give the stereographic homeomorphism of its complement with R^n and linear contraction; the top homology map factors through zero."
---

## Statement

A continuous map between oriented $n$-spheres, $n\ge1$, whose degree is nonzero must be surjective.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] Let $n\ge1$. Choose a generator $[S^n]$ of $H_n(S^n;\mathbb Z)\cong\mathbb Z$, using cor-homology-of-spheres. For a continuous self-map $f:S^n\to S^n$, its **degree** is the unique integer satisfying $$f_*[S^n]=\deg(f)[S^n].$$ The induced map is furnished by prop-relative-homology-is-functorial-for-maps-of-pairs with empty subspaces. Replacing the same generator in source and target by its negative does not change the integer. For a map between separately oriented copies of $S^n$, use their separately specified generators; reversing just one orientation changes the sign. The unreduced definition here is restricted to $n\ge1$. ([[def-degree-of-a-self-map-of-an-oriented-sphere]])

[F2] If $X$ is a nonempty contractible topological space, then for every $n\geq 0$ and every abelian group $G$, $$H_n^{\mathrm{sing}}(X;G)\cong H_n^{\mathrm{sing}}(\ast;G),$$ where $\ast$ denotes a one-point space. ([[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]])

[F3] For any abelian group $G$, $H_0(*;G)\cong G$ and $H_n(*;G)=0$ for every integer $n\ne0$. For every set-indexed family of pairs the canonical map $$\bigoplus_\alpha H_n(X_\alpha,A_\alpha;G)\longrightarrow H_n\left(\bigsqcup_\alpha X_\alpha,\bigsqcup_\alpha A_\alpha;G\right)$$ is an isomorphism. Together with the structural axioms, singular homology is an ordinary theory with coefficient group $G$. ([[thm-singular-homology-satisfies-dimension-and-arbitrary-additivity]])

## Proof

1.1 Suppose a target point $p$ is omitted. After an orthogonal coordinate change put $p=(0,\ldots,0,1)$. Stereographic projection sends $(u,t)$ in its complement to $u/(1-t)\in\mathbb R^n$; its inverse is $z\mapsto(2z,|z|^2-1)/(1+|z|^2)$. Direct substitution verifies both inverses. Linear contraction in $\mathbb R^n$ shows the complement is nonempty and contractible. [given, algebra]

2.1 The induced map in degree $n$ factors through $H_n(S^n\setminus\{p\};\mathbb Z)=H_n(*;\mathbb Z)=0$, by F2 and F3. Hence its degree is zero by F1. This proves that omission of any point contradicts the assumed nonzero degree. [F1, F2, F3, step 1.1] ∎
