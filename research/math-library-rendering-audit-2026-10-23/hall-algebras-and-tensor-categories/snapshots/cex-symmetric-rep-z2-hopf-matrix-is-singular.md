---
id: cex-symmetric-rep-z2-hopf-matrix-is-singular
kind: counterexample
title: "Symmetric Rep(Z/2) has singular Hopf-link matrix"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-modular-ribbon-category-and-hopf-link-data, def-fusion-and-multifusion-category, def-braiding]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, §8.13"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §3.1"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
---

## Statement

The complex symmetric fusion category $\operatorname{Rep}(\mathbb Z/2)$, with its usual spherical structure and symmetric braiding, is not modular under the Hopf-link convention of [[def-modular-ribbon-category-and-hopf-link-data]].

## Facts & Assumptions

**Given:** The group $\mathbb Z/2=\{0,1\}$ and its category of finite-dimensional complex representations.

[F1] A finite-dimensional representation of $\mathbb Z/2$ is a complex vector space $V$ with an involution $T$; morphisms commute with the involutions, and tensor product has involution $T\otimes U$. The unit is the trivial one-dimensional representation. Use ordinary vector-space duality, evaluation and coevaluation, the canonical pivotal map $V\to V^{**}$, and identity twist. The terminology “fusion category” is that of [[def-fusion-and-multifusion-category]]; its hypotheses for this example are verified below.

[F2] In complex representations the braiding is the flip $v\otimes w\mapsto w\otimes v$; applying the reverse flip gives the identity. The braiding and double-braiding convention are those of [[def-braiding]] and [[def-modular-ribbon-category-and-hopf-link-data]].

## Proof

**Given:** The data in the Statement.

1.1 The projectors $(1+T)/2$ and $(1-T)/2$ split every representation as $V=V_+\oplus V_-$, with $T=+1$ on $V_+$ and $T=-1$ on $V_-$. Choosing finite bases decomposes these spaces into copies of the one-dimensional trivial representation $1$ and sign representation $\varepsilon$. They are nonisomorphic simples, their endomorphism rings are $\mathbb C$, and $\varepsilon\otimes\varepsilon\cong1$ since $(-1)^2=1$. Thus the category is finite semisimple with simple unit; ordinary duality and flip make it symmetric ribbon with the stated spherical structure. Contraction of the ordinary evaluation and coevaluation is the ordinary linear trace, so both simple dimensions are one. By [F2], for any simple labels $i,j$, $s_{ij}=\operatorname{tr}(1_{i\otimes j})=d_i d_j=1$. In the ordered basis $(1,\varepsilon)$ this gives $s=\begin{pmatrix}1&1\\1&1\end{pmatrix}.$ [F1, F2, given, algebra]

2.1 The two rows coincide, and $\det(s)=1\cdot1-1\cdot1=0$. Therefore $s$ is not invertible and the category is not modular. This shows why nondegeneracy must be a hypothesis or separately proved. [step 1.1, algebra] ∎
