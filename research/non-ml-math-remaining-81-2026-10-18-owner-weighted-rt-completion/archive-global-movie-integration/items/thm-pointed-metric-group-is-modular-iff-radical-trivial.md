---
id: thm-pointed-metric-group-is-modular-iff-radical-trivial
kind: theorem
title: "A pointed metric-group category is modular exactly when its radical is trivial"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-modular-ribbon-category-and-hopf-link-data, def-pointed-metric-group-ribbon-category]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, Example 8.13.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §3.1"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
---

## Statement

Let $(G,\omega,r,q)$ be pointed ribbon data as in [[def-pointed-metric-group-ribbon-category]], and let $b(g,h)=r(g,h)r(h,g)$. The associated pointed ribbon fusion category is modular if and only if

$$\operatorname{rad}(b)=\{g\in G:b(g,h)=1\text{ for every }h\in G\}=\{0\}.$$

## Facts & Assumptions

**Given:** Finite abelian pointed ribbon data $(G,\omega,r,q)$ and the modularity convention of [[def-modular-ribbon-category-and-hopf-link-data]].

[F1] The simple objects are the grades $g\in G$, all have dimension $1$, and their double braiding is the scalar $b(g,h)$ ([[def-pointed-metric-group-ribbon-category]]).

[F2] The cocycle data and the two hexagon equations are those in [[def-pointed-metric-group-ribbon-category]].

## Proof

**Given:** The data in the Statement.

1.1 The two hexagon equations in [F2] give $b(a+b,c)=b(a,c)b(b,c)$ after multiplying the formula for $r(a+b,c)$ by that for $r(c,a+b)$ and cancelling the three $\omega$ factors. Since $b(a,c)=b(c,a)$ by definition, it is multiplicative in the second variable as well. For $r\in\operatorname{rad}(b)$ nonzero, the rows indexed by $0$ and $r$ in [F1] coincide, since $b(r,h)=1=b(0,h)$ for every $h$. Thus $s$ is singular. [F1, F2, given, algebra]

1.2 Because $G$ is finite and $b$ is a bicharacter, every $b(g,h)$ is a root of unity, so $\overline{b(g,h)}=b(g,h)^{-1}$. If $\operatorname{rad}(b)=\{0\}$, the characters $h\mapsto b(g,h)$ are pairwise distinct. For $g\ne k$, $\chi(h)=b(g-k,h)$ is nontrivial; choose $t$ with $\chi(t)\ne1$, and translating the finite sum gives $\sum_h\chi(h)=\chi(t)\sum_h\chi(h)$, hence $\sum_h\chi(h)=0$. Thus distinct rows of $s$ are orthogonal and each row has squared norm $|G|$, so $ss^\dagger=|G|I$. Therefore $s$ is invertible and the category is modular. [F1, step 1.1, choose, algebra] ∎
