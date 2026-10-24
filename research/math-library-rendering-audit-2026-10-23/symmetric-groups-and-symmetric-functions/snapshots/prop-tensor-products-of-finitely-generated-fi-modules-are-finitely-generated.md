---
id: prop-tensor-products-of-finitely-generated-fi-modules-are-finitely-generated
kind: proposition
title: "Tensor products of finitely generated FI-modules are finitely generated"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [def-finite-generation-and-generation-degree-of-an-fi-module,
       def-free-fi-module-generated-by-an-sm-module,
       lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules,
       def-tensor-product-of-modules-by-generators-and-relations,
       thm-right-exactness-of-tensor-products,
       thm-tensor-product-basis-from-bases,
       thm-tensor-products-commute-with-arbitrary-direct-sums]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, “FI-modules and stability for representations of symmetric groups”, arXiv:1204.4533v4 (2014); published in Duke Math. J. 164 (2015) 1833–1910"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "Proposition 2.3.6 with its proof, printed p. 14: $V\\otimes W$ is finitely generated, and generated in degree $m_1+m_2$ when $V$ and $W$ are generated in degrees $m_1$ and $m_2$"
    - title: "Thomas Church, Jordan S. Ellenberg, Benson Farb and Rohit Nagpal, “FI-modules over Noetherian rings”, Geom. Topol. 18 (2014) 2951–2984; author-hosted full text"
      url: "https://www.math.uchicago.edu/~farb/papers/FImodNoetherian.pdf"
      locator: "Proposition 2.3 and §2.1, printed pp. 9–10: finite generation via surjections from free FI-modules"
---

## Statement

Let $V$ and $W$ be FI-modules over a commutative ring $k$, with pointwise
tensor product $(V\otimes W)_S:=V_S\otimes_kW_S$ and transition maps
$f_*\otimes f_*$. If $V$ and $W$ are finitely generated, then $V\otimes W$ is
finitely generated; more precisely, if $V$ is generated in degree $\le m_1$
and $W$ in degree $\le m_2$
([[def-finite-generation-and-generation-degree-of-an-fi-module]]), then
$V\otimes W$ is generated in degree $\le m_1+m_2$. No choice principle is
used.

## Facts & Assumptions

**Given:** FI-modules $V,W$ over $k$ and the pointwise tensor product $V\otimes W$.

[F1] For an FI-module $U$, $\operatorname{span}_U(\Sigma)_T$ is the $k$-span of the elements $f_*(u)$ with $(S,u)\in\Sigma$ and $f\colon S\to T$ an injection; $U$ is generated in degree $\le d$ when $\operatorname{span}_U(U_{\le d})=U$ ([[def-finite-generation-and-generation-degree-of-an-fi-module]]).

[F2] $M(m)_S$ has as $k$-basis the injections $[m]\hookrightarrow S$ ([[def-free-fi-module-generated-by-an-sm-module]]); if $M$ has basis $(x_i)$ and $N$ has basis $(y_j)$ then $M\otimes_kN$ has basis $(x_i\otimes y_j)$ ([[thm-tensor-product-basis-from-bases]]).

[F3] $V$ is generated in degree $\le d$ if and only if there is a surjection $\bigoplus_{i\in I}M(m_i)\twoheadrightarrow V$ with all $m_i\le d$; in particular finitely generated modules admit finite surjections $\bigoplus_{i=1}^rM(m_i)\twoheadrightarrow V$ ([[lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules]]).

[F4] Tensoring a surjection with the identity of a module yields a surjection, and tensor products distribute over direct sums: $\bigl(\bigoplus_iA_i\bigr)\otimes_k\bigl(\bigoplus_jB_j\bigr)\cong\bigoplus_{i,j}(A_i\otimes_kB_j)$ naturally, so a tensor product of sums of surjections is a surjection from the sum of the pairwise tensor products ([[thm-right-exactness-of-tensor-products]], [[thm-tensor-products-commute-with-arbitrary-direct-sums]], [[def-tensor-product-of-modules-by-generators-and-relations]]).

## Proof

**Proof technique:** direct.

1.1 $V\otimes W$ is an FI-module: $(V\otimes W)(\mathrm{id}_S)=\mathrm{id}_{V_S}\otimes\mathrm{id}_{W_S}=\mathrm{id}_{V_S\otimes W_S}$, and $(g\circ f)_*\otimes(g\circ f)_*=(g_*\otimes g_*)(f_*\otimes f_*)$ for composable injections; the pointwise tensor product of $k$-linear maps and the functor axioms in each variable give the claim. [given, algebra]

2.1 Let $U:=M(m_1)\otimes M(m_2)$, with $(U)_S$ having $k$-basis the pairs $(f_1,f_2)$ of injections $f_1\colon[m_1]\hookrightarrow S$, $f_2\colon[m_2]\hookrightarrow S$ [F2]. For a basis element $(f_1,f_2)$, put $T:=\operatorname{im}(f_1)\cup\operatorname{im}(f_2)\subseteq S$, so $|T|\le m_1+m_2$; the maps $f_i$ factor as $f_i=\iota\circ g_i$ with $g_i\colon[m_i]\hookrightarrow T$ injective and $\iota\colon T\hookrightarrow S$ the inclusion, and functoriality gives $(f_1,f_2)=(\iota_*\otimes\iota_*)(g_1,g_2)$ with $(g_1,g_2)\in U_T$. Hence every basis element of $U_S$ lies in the span of the images of the $U_T$ with $|T|\le m_1+m_2$, so $\operatorname{span}_U(U_{\le m_1+m_2})=U$ by [F1]: $U$ is generated in degree $\le m_1+m_2$. [F1, F2, step 1.1]

2.2 Now let $V$ be generated in degree $\le m_1$ and $W$ in degree $\le m_2$, so that by [F3] there are surjections $\bigoplus_{i\in I}M(m_i)\twoheadrightarrow V$ and $\bigoplus_{j\in J}M(n_j)\twoheadrightarrow W$ with $m_i\le m_1$, $n_j\le m_2$. Tensoring them pointwise and distributing the direct sums [F4] gives a surjection $\bigoplus_{i,j}\bigl(M(m_i)\otimes M(n_j)\bigr)\twoheadrightarrow V\otimes W$. [F3, F4, step 1.1]

3.1 Each summand $U_{ij}:=M(m_i)\otimes M(n_j)$ is generated in degree $\le m_i+n_j\le m_1+m_2$ by step 2.1, hence so is their direct sum; and a quotient of a module generated in degree $\le d$ is generated in degree $\le d$, because the image of $\operatorname{span}(U_{\le d})=U$ under a surjective map of FI-modules is $\operatorname{span}$ of the images of $U_{\le d}$, which is the whole quotient. Therefore $V\otimes W$, being a quotient of the sum of the $U_{ij}$, is generated in degree $\le m_1+m_2$. [F1, step 2.1, step 2.2]

4.1 If $V$ and $W$ are finitely generated, they are generated in degrees $\le m_1$ and $\le m_2$ for suitable finite $m_1,m_2$, and [F3] allows finite index sets $I,J$ in step 2.2. For each pair $(i,j)$, the finitely many basis pairs of injections into the finitely many sets $[t]$ with $t\le m_i+n_j$ generate $M(m_i)\otimes M(n_j)$ by step 2.1 and transport by a bijection $[|T|]\to T$. Their union over the finite $I\times J$ is finite and its image generates $V\otimes W$; hence $V\otimes W$ is finitely generated, with the stated degree bound. [F1, F3, step 3.1] ∎
