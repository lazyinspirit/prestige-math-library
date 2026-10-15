---
id: lem-hh-coefficient-extension-and-finite-tensor-separation
kind: lemma
title: "Coefficient separation for an independent family of vectors, with explicit Choice assumptions"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 2
deps: [def-hh-scalar-and-tensor-conventions, lem-hh-tensor-injections-quotients-and-kernels-over-a-field, def-axiom-of-choice, thm-dimension-of-a-linear-subspace, thm-unique-coordinates-with-respect-to-an-ordered-basis, prop-functoriality-of-module-tensor-products, def-linear-combination-and-span]
justified_by: []
axiom_use: 'In infinite dimension AC enters only through the injection lemma [[lem-hh-tensor-injections-quotients-and-kernels-over-a-field]], applied to the inclusion of the span of the independent list; the finite-dimensional case uses only the choice-free basis extension and is choice-free.'
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Keith Conrad, Tensor products (University of Connecticut expository notes, 60 pp.)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/tensorprod.pdf"
      locator: "Theorem 4.15, printed pp. 18–19: uniqueness of coefficients in a tensor product with a free factor"
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $v_1,\dots,v_n\in V$ be linearly independent vectors in a $k$-vector space $V$ and let $w_1,\dots,w_n\in W$ satisfy $\sum_{i=1}^n v_i\otimes w_i=0$ in $V\otimes W$. Then $w_i=0$ for every $i$; equivalently, the linear map $W^n\to V\otimes W$, $(w_i)\mapsto\sum_iv_i\otimes w_i$, is injective.

If $V$ is finite-dimensional the same conclusion is proved without the Axiom of Choice.

## Facts & Assumptions

**Given:** A field $k$, a $k$-vector space $V$ with linearly independent vectors $v_1,\dots,v_n$, a $k$-vector space $W$, and elements $w_1,\dots,w_n\in W$ with $\sum_iv_i\otimes w_i=0$ in $V\otimes W$.

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[F1] The tensor product conventions: $V\otimes W$ has the universal property, every element is a finite sum of elementary tensors, and the empty tensor $k$ is identified with the tensor unit through the unit isomorphisms, so $k\otimes W\to W$, $c\otimes w\mapsto cw$, is an isomorphism ([[def-hh-scalar-and-tensor-conventions]]).

[F2] Under [A1], for every injective linear map $f:V\to V'$ and every $k$-vector space $W$ the map $f\otimes\mathrm{id}_W$ is injective ([[lem-hh-tensor-injections-quotients-and-kernels-over-a-field]]).

[F3] The span of a set is the smallest linear subspace containing it ([[def-linear-combination-and-span]]); in particular $\operatorname{span}(v_1,\dots,v_n)$ is a linear subspace containing each $v_i$, and since it is a subspace it contains every finite linear combination of the $v_i$.

[F4] The span of a finite list consists of its linear combinations. A finite list is an ordered basis exactly when every vector has a unique expansion in it; addition and scaling of the unique coordinate lists show that its coordinate functionals are linear ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[F5] In a finite-dimensional space every linearly independent subset is contained in a basis, with no choice principle used ([[thm-dimension-of-a-linear-subspace]]).

[F6] Functoriality supplies an additive map $f\otimes g$ with $(f\otimes g)(v\otimes w)=f(v)\otimes g(w)$ and respects composition ([[prop-functoriality-of-module-tensor-products]]). For linear $f,g$ over $k$, this map is $k$-linear: the scalar action of [F1] gives $(f\otimes g)(c(v\otimes w))=f(cv)\otimes g(w)=c(f(v)\otimes g(w))$, and additivity extends this identity to every finite tensor sum.

## Proof

**Proof technique:** direct.

1.1 Arbitrary dimension, under [A1]. Put $V_0:=\operatorname{span}(v_1,\dots,v_n)$, a linear subspace of $V$ containing every $v_i$ by [F3]; the inclusion $\iota:V_0\hookrightarrow V$ is injective and linear, so $\iota\otimes\mathrm{id}_W:V_0\otimes W\to V\otimes W$ is injective by [F2]. Since $(\iota\otimes\mathrm{id}_W)(\sum_iv_i\otimes w_i)=\sum_iv_i\otimes w_i=0$ by [F6], injectivity gives $\sum_iv_i\otimes w_i=0$ in $V_0\otimes W$. Every element of $V_0$ is a linear combination of the finite list $(v_i)$ by the span clause of [F4], so the list $(v_1,\dots,v_n)$ spans $V_0$, and it is linearly independent by hypothesis, so it is an ordered basis of $V_0$ with linear coordinate functionals $\varphi_i:V_0\to k$ satisfying $\varphi_i(v_j)=\delta_{ij}$ by [F4]. For each $i$, functoriality [F6] gives the linear map $\varphi_i\otimes\mathrm{id}_W:V_0\otimes W\to k\otimes W$, and applying it to the relation yields $0=\sum_j(\varphi_i\otimes\mathrm{id}_W)(v_j\otimes w_j)=\sum_j\varphi_i(v_j)\otimes w_j=1\otimes w_i$; the unit isomorphism of [F1] sends $1\otimes w_i$ to $w_i$, so $w_i=0$. [given, A1, F1, F2, F3, F4, F6, algebra]

1.2 Finite dimension, without Choice. If $V$ is finite-dimensional, the vectors $v_1,\dots,v_n$ are distinct and form a linearly independent finite subset of $V$, so by [F5] this subset is contained in a basis $B$ of $V$; listing the finite set $B$ with $v_1,\dots,v_n$ in the first $n$ positions gives an ordered basis $(b_1,\dots,b_m)$ with $b_j=v_j$ for $j\le n$ whose coordinate functionals $\psi_1,\dots,\psi_m$ are linear by [F4] and satisfy $\psi_j(v_k)=\delta_{jk}$ for $j,k\le n$. Applying $\psi_i\otimes\mathrm{id}_W$ to the relation in $V\otimes W$ by [F6] gives $0=1\otimes w_i$, hence $w_i=0$ by the unit isomorphism of [F1]; no complement or Zorn extension is used, only the finite-dimensional extension of [F5]. [given, F1, F4, F5, F6, algebra]

2.1 Both cases give $w_i=0$ for all $i$: step 1.1 under the Axiom of Choice in arbitrary dimension and step 1.2 in finite dimension without it; the map $W^n\to V\otimes W$ with $(w_i)\mapsto\sum_iv_i\otimes w_i$ is linear by bilinearity of elementary tensors [F1] and has trivial kernel, so subtracting two tuples with the same image proves injectivity, which is the equivalent form of the claim. [step 1.1, step 1.2, given, F1] ∎

## Remarks

The proof uses AC through the tensor-injection lemma in arbitrary ambient dimension and avoids it when $V$ is finite-dimensional. It establishes sufficiency of these assumptions, not necessity of AC or a sharp boundary between choice principles.
