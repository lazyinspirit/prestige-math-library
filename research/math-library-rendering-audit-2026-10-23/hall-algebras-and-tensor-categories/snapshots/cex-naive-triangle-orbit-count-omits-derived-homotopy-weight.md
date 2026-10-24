---
id: cex-naive-triangle-orbit-count-omits-derived-homotopy-weight
kind: counterexample
title: "Unweighted triangle-orbit counts miss the derived homotopy factor"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-toen-derived-hall-algebra
  - thm-toen-derived-hall-number-formula
  - def-toen-locally-finite-dg-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bertrand Toën, Derived Hall algebras, arXiv:math/0501343v4, §§1 and 5"
      url: "https://arxiv.org/pdf/math/0501343v4"
    - title: "Olivier Schiffmann, Lectures on Hall algebras, arXiv:math/0611617v2, §5.6"
      url: "https://arxiv.org/pdf/math/0611617v2"
---

## Statement refuted

For every locally finite dg-enhancement and all perfect modules $x,y,z$, the unweighted triangle-orbit count
$$
n^z_{x,y}:=\frac{|[x,z]_y|}{|\operatorname{Aut}(x)|}
$$
equals the Toën derived Hall coefficient $g^z_{x,y}$.

## Facts & Assumptions

**Given:** A finite field $k=\mathbb F_q$, the bounded derived category of finite-dimensional $k$-vector spaces with its standard dg-enhancement, and the coefficient formula of [[thm-toen-derived-hall-number-formula]].

[F1] The Toën coefficient has the extra factor $\prod_{i>0}|\operatorname{Ext}^{-i}(x,z)|^{(-1)^i}|\operatorname{Ext}^{-i}(x,x)|^{(-1)^{i+1}}$ ([[thm-toen-derived-hall-number-formula]]).

## Counterexample

1.1 Let $S=k$ concentrated in degree $0$, let $x=S$, $y=S[1]$, and $z=S\oplus S[1]$. Since $\operatorname{Hom}(S,S[1])=0$ and $\operatorname{Hom}(S,S)=k$, every map $f:S\to z$ is $f_a=(a,0)$ for a unique $a\in k$. Its cone is isomorphic to $S[1]$ exactly when $a\ne0$: for $a\ne0$ the first component is an isomorphism and cancels in the cone, while for $a=0$ the cone has nonzero degree-zero cohomology. Hence $|[x,z]_y|=q-1$ and $|\operatorname{Aut}(x)|=q-1$, so $n^z_{x,y}=1$. [given, choose]

2.1 In this category $\operatorname{Ext}^{-1}(x,z)=\operatorname{Hom}(S,z[-1])\cong k$, while $\operatorname{Ext}^{-i}(x,z)=0$ for $i\ge2$ and $\operatorname{Ext}^{-i}(x,x)=0$ for all $i>0$. Thus the higher-Ext factor in [F1] is $q^{-1}$ and the Toën coefficient is $g^z_{x,y}=q^{-1}\ne1=n^z_{x,y}$. The claimed equality is false. [F1, step 1.1, algebra] ∎
