---
id: thm-finite-generation-is-equivalent-to-uniform-representation-stability
kind: theorem
title: "Finite generation is equivalent to uniform representation stability"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 7
deps: [thm-fi-modules-over-a-noetherian-q-algebra-form-a-noetherian-category,
       def-uniform-representation-stability-for-consistent-sn-sequences,
       lem-free-fi-modules-have-explicit-weight-and-stability-bounds,
       lem-generation-degree-bounds-surjectivity-degree-and-weight,
       prop-weight-and-stability-degree-give-uniform-representation-stability-range,
       lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules,
       def-injectivity-surjectivity-and-stability-degree-of-an-fi-module,
       def-fi-coinvariant-functors-and-transition-maps,
       def-weight-of-a-characteristic-zero-fi-module,
       def-finite-generation-and-generation-degree-of-an-fi-module,
       def-free-fi-module-generated-by-an-sm-module,
       def-fi-category-and-fi-module]
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
      locator: "Theorem 1.13 and its complete proof, printed pp. 21–23: finite generation is equivalent to uniform representation stability together with finite-dimensional values"
    - title: "Thomas Church, Jordan S. Ellenberg, Benson Farb and Rohit Nagpal, “FI-modules over Noetherian rings”, Geom. Topol. 18 (2014) 2951–2984; author-hosted full text"
      url: "https://www.math.uchicago.edu/~farb/papers/FImodNoetherian.pdf"
      locator: "Remark 1.2, printed p. 3: the same equivalence in the Noetherian-rings context"
---

## Statement

Let $k$ be a field of characteristic $0$ and let $V$ be an FI-module over $k$
with finite-dimensional values
([[def-fi-category-and-fi-module]]). Then $V$ is finitely generated if and only
if the consistent sequence $(V_n,\varphi_n)$ determined by $V$ is uniformly
representation stable
([[def-uniform-representation-stability-for-consistent-sn-sequences]],
[[def-finite-generation-and-generation-degree-of-an-fi-module]]). No choice
principle is used.

## Facts & Assumptions

**Given:** A characteristic-zero field $k$, an FI-module $V$ over $k$ with finite-dimensional values, and the consistent sequence $(V_n,\varphi_n)$ with $\varphi_n$ induced by the standard inclusion $[n]\hookrightarrow[n+1]$ ([[def-uniform-representation-stability-for-consistent-sn-sequences]]).

[F1] A consistent sequence is uniformly representation stable with stable range $n\ge N$ when $\varphi_n$ is injective for all $n\ge N$, the $S_{n+1}$-span of $\varphi_n(V_n)$ is $V_{n+1}$ for all $n\ge N$, and all multiplicities $c_{\lambda,n}$ are independent of $n$ for $n\ge N$; the sequence is uniformly representation stable when this holds for some $N$ ([[def-uniform-representation-stability-for-consistent-sn-sequences]]).

[F2] $\operatorname{span}_V(V_{\le d})$ is the smallest sub-FI-module containing all values of $V$ in degrees $\le d$, its value at $T$ being the $k$-span of the elements $f_*(v)$ with $v\in V_S$, $|S|\le d$ and $f\colon S\to T$ an injection; $V$ is generated in degree $\le d$ when this span is $V$, equivalently when there is a surjection $\bigoplus_{i\in I}M(m_i)\twoheadrightarrow V$ with all $m_i\le d$, and finitely generated modules admit such a surjection with finite $I$; the free module $M(m)=M(k[S_m])$ is generated in degree $\le m$ by its value at $[m]$ ([[def-finite-generation-and-generation-degree-of-an-fi-module]], [[lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules]], [[def-free-fi-module-generated-by-an-sm-module]]).

[F3] Generation in degree $\le d$ implies $\operatorname{surj-deg}(V)\le d$, and over characteristic zero it implies $\operatorname{weight}(V)\le d$; weight is inherited by subquotients, and surjectivity degree is inherited by quotients through the quotient bound $\operatorname{surj-deg}(W)\le\operatorname{surj-deg}(V)$ for $V\twoheadrightarrow W$ ([[lem-generation-degree-bounds-surjectivity-degree-and-weight]], [[def-injectivity-surjectivity-and-stability-degree-of-an-fi-module]]).

[F4] For every FB-module $W$ the free FI-module $M(W)$ has $\operatorname{inj-deg}(M(W))=0$; in particular $\operatorname{inj-deg}(M(m))=0$ for every $m\ge0$ ([[lem-free-fi-modules-have-explicit-weight-and-stability-bounds]]).

[F5] Every sub-FI-module of a finitely generated FI-module over a commutative Noetherian ring containing $\mathbb Q$ is finitely generated ([[thm-fi-modules-over-a-noetherian-q-algebra-form-a-noetherian-category]]).

[F6] $\Phi_a$ is a functor to graded $k[T]$-modules, exact over fields of characteristic $0$, and its transition map $T$ is natural; $\Phi_a$ preserves finite direct sums ([[def-fi-coinvariant-functors-and-transition-maps]]).

[F7] $\operatorname{inj-deg}(V)$ is the least $s$ such that $T\colon\Phi_a(V)_n\to\Phi_a(V)_{n+1}$ is injective for all $a$ and all $n\ge s$; $\operatorname{surj-deg}$ is the analogous bound with surjectivity; $\operatorname{stab-deg}(V)=\max(\operatorname{inj-deg}(V),\operatorname{surj-deg}(V))$ ([[def-injectivity-surjectivity-and-stability-degree-of-an-fi-module]]).

[F8] If an FI-module over a characteristic-zero field has finite-dimensional values, finite weight $d$ and finite stability degree $s$, then its consistent sequence is uniformly representation stable with stable range $n\ge d+s$ ([[prop-weight-and-stability-degree-give-uniform-representation-stability-range]]).

## Proof

**Proof technique:** direct.

1.1 $(\Rightarrow)$ Assume that $V$ is finitely generated, say generated in degree $\le g$. By [F3] $\operatorname{surj-deg}(V)\le g$, and by [F2] there is a finite surjection $M:=\bigoplus_{i=0}^{g}M(i)^{\oplus b_i}\twoheadrightarrow V$; let $K$ be its kernel. The module $M$ is finitely generated (each $M(i)$ is generated in degree $\le i$ by [F2]), so $K$ is finitely generated by [F5] applied over the field $k$; say $K$ is generated in degree $\le r$. These data will bound the injectivity degree of $V$ below. [F2, F3, F5]

1.2 $(\Leftarrow)$ Conversely, assume that $(V_n,\varphi_n)$ is uniformly representation stable with range $n\ge N$. For $n\ge N$ condition (II) says that the $S_{n+1}$-span of $\varphi_n(V_n)$ is all of $V_{n+1}$, and every injection $f\colon[n]\to[n+1]$ equals $\sigma\circ f_0$ for the standard inclusion $f_0$ and some $\sigma\in S_{n+1}$, so $V_{n+1}$ is spanned by the images $f_*(V_n)$ over all injections $f\colon[n]\to[n+1]$. The values in degrees $\le N$ lie in $\operatorname{span}_V(V_{\le N})$ by [F2], and if $V_m\subseteq\operatorname{span}_V(V_{\le N})_m$ for some $m\ge N$, then every $f_*(V_m)$ lies in $\operatorname{span}_V(V_{\le N})_{m+1}$ because the span is a sub-FI-module; the displayed spanning property of condition (II) then gives $V_{m+1}\subseteq\operatorname{span}_V(V_{\le N})_{m+1}$. By induction $V_m\subseteq\operatorname{span}_V(V_{\le N})_m$ for every $m\ge0$, hence $V=\operatorname{span}_V(V_{\le N})$. Each $V_{[m]}$ with $m\le N$ is finite-dimensional, hence generated by finitely many elements; let $\Sigma$ be the finite union of these finitely many finite generating sets, so that $\operatorname{span}_V(\Sigma)\supseteq V_{[m]}$ for every $m\le N$. For a finite set $S$ with $|S|=m\le N$ and a bijection $\beta\colon[m]\to S$ one has $V_S=\beta_*(V_{[m]})\subseteq\operatorname{span}_V(\Sigma)_S$, so $\operatorname{span}_V(\Sigma)\supseteq V_{\le N}$ and therefore $\operatorname{span}_V(\Sigma)=V$; thus $V$ is finitely generated. [F1, F2, given]

2.1 Returning to $(\Rightarrow)$: for every $a$, the exactness of $\Phi_a$ over the characteristic-zero field $k$ gives an exact sequence $0\to\Phi_a(K)\to\Phi_a(M)\to\Phi_a(V)\to0$ by [F6]. The module $M$ is a finite direct sum of copies of the free modules $M(i)$, each of injectivity degree $0$ by [F4], so $T\colon\Phi_a(M)_n\to\Phi_a(M)_{n+1}$ is injective for all $n$ by [F6] and [F7]; and $T\colon\Phi_a(K)_n\to\Phi_a(K)_{n+1}$ is surjective for $n\ge r$ by [F3]. Hence $T\colon\Phi_a(V)_n\to\Phi_a(V)_{n+1}$ is injective for $n\ge r$: a lift $\tilde x\in\Phi_a(M)_n$ of $x$ with $Tx=0$ has $T\tilde x$ in the image of $\Phi_a(K)$, so $T\tilde x=T\tilde y$ for some $\tilde y\in\Phi_a(K)_n$, and injectivity on $\Phi_a(M)$ gives $\tilde x=\tilde y$, whence $x=0$. Therefore $\operatorname{inj-deg}(V)\le r$ by [F7], and $\operatorname{stab-deg}(V)\le\max(g,r)$ since $\operatorname{surj-deg}(V)\le g$. [F3, F4, F6, F7, step 1.1]

3.1 Under the assumption of step 1.1 the weight is finite, indeed $\operatorname{weight}(V)\le g$ by [F3] over the characteristic-zero field $k$, and $\operatorname{stab-deg}(V)\le\max(g,r)<\infty$ by step 2.1. By [F8] the sequence $(V_n,\varphi_n)$ is uniformly representation stable, with stable range $n\ge g+\max(g,r)$. [F3, F8, step 2.1]

4.1 Steps 1.1, 2.1 and 3.1 prove that finite generation implies uniform representation stability (through finiteness of stability degree and weight and the preceding proposition), and step 1.2 proves the converse; hence for an FI-module with finite-dimensional values over a characteristic-zero field the two properties are equivalent. [step 1.1, step 1.2, step 2.1, step 3.1] ∎
