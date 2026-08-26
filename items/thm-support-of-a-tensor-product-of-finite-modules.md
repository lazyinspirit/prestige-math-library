---
id: thm-support-of-a-tensor-product-of-finite-modules
kind: theorem
title: "Support of a tensor product of finite modules is the intersection of the supports"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-support-and-annihilator-of-a-finite-module, thm-localisation-of-modules-is-tensor-product, thm-localisation-at-a-prime-is-local, cor-residue-field-of-a-localisation-at-a-prime, cor-tensor-products-of-finite-free-modules-and-dimension, thm-right-exactness-of-tensor-products, thm-adjugate-identity-over-a-commutative-ring, def-generated-cyclic-finitely-generated-and-free-modules]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition 13.30"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Lemma 10.40.9"
      url: "https://stacks.math.columbia.edu/tag/080S"
pipeline_run: null
---

## Statement

If $M$ and $N$ are finitely generated left $R$-modules, then
$$
\operatorname{Supp}_R(M \otimes_R N)=\operatorname{Supp}_R(M)\cap\operatorname{Supp}_R(N).
$$

## Facts & Assumptions

**Given:** A commutative ring $R$ and finitely generated left $R$-modules $M,N$.

[L1] For a finite module, the support is the set of primes containing its annihilator ([[thm-support-and-annihilator-of-a-finite-module]]).

[L2] Localisation is naturally tensoring with the localised ring, so $(M \otimes_R N)_{\mathfrak p}\cong M_{\mathfrak p}\otimes_{R_{\mathfrak p}}N_{\mathfrak p}$ ([[thm-localisation-of-modules-is-tensor-product]]).

[L3] The ring $R_{\mathfrak p}$ is local with maximal ideal $\mathfrak pR_{\mathfrak p}$, and its residue field is $k(\mathfrak p)=R_{\mathfrak p}/\mathfrak pR_{\mathfrak p}$ ([[thm-localisation-at-a-prime-is-local]], [[cor-residue-field-of-a-localisation-at-a-prime]]).

[L4] Tensoring preserves surjections, and nonzero finite-dimensional vector spaces over a field have nonzero tensor product ([[thm-right-exactness-of-tensor-products]], [[cor-tensor-products-of-finite-free-modules-and-dimension]]).

[L5] A finitely generated module admits finite generators, and for a positive-size square matrix $A$ over a commutative ring one has $A\operatorname{adj}(A)=\det(A)I$ ([[def-generated-cyclic-finitely-generated-and-free-modules]], [[thm-adjugate-identity-over-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 Because $M$ and $N$ are finite, $M \otimes_R N$ is finite: if $m_1,\dots,m_r$ generate $M$ and $n_1,\dots,n_s$ generate $N$, then the tensors $m_i \otimes n_j$ generate $M \otimes_R N$. If $\mathfrak p \in \operatorname{Supp}_R(M \otimes_R N)$, then [L1] gives $\operatorname{Ann}_R(M \otimes_R N)\subseteq\mathfrak p$. Every element of $\operatorname{Ann}_R(M)$ and every element of $\operatorname{Ann}_R(N)$ annihilates every elementary tensor, so $\operatorname{Ann}_R(M)+\operatorname{Ann}_R(N)\subseteq\operatorname{Ann}_R(M \otimes_R N)$. Thus $\mathfrak p$ contains both annihilators, and [L1] gives $\mathfrak p \in \operatorname{Supp}_R(M)\cap\operatorname{Supp}_R(N)$. [L1, given, algebra]

1.2 Conversely, let $\mathfrak p \in \operatorname{Supp}_R(M)\cap\operatorname{Supp}_R(N)$. By [L2], it is enough to prove $M_{\mathfrak p}\otimes_{R_{\mathfrak p}}N_{\mathfrak p}\neq0$. Put $A=R_{\mathfrak p}$, $\mathfrak m=\mathfrak pA$, and $k=A/\mathfrak m$; by [L3], $A$ is a local ring with residue field $k$. [L2, L3]

1.3 If $X$ is a finite nonzero $A$-module, then $X/\mathfrak mX\neq0$. Indeed, if $X=\mathfrak mX$, choose generators $x_1,\dots,x_t$ of $X$ and coefficients $a_{ij}\in\mathfrak m$ with $x_i=\sum_j a_{ij}x_j$. Writing $B=(a_{ij})$ and $x=(x_1,\dots,x_t)^T$, this says $(I-B)x=0$. By [L5], $\det(I-B)x=0$. The determinant has the form $1-a$ with $a\in\mathfrak m$, so $1-a\notin\mathfrak m$ and therefore is a unit in the local ring $A$. Hence $x=0$ and $X=0$, a contradiction. [L3, L5, algebra]

2.1 Apply step 1.3 to $M_{\mathfrak p}$ and $N_{\mathfrak p}$. Since $\mathfrak p$ lies in both supports, these local modules are nonzero, so the $k$-vector spaces $M_{\mathfrak p}/\mathfrak mM_{\mathfrak p}$ and $N_{\mathfrak p}/\mathfrak mN_{\mathfrak p}$ are nonzero. Tensoring the quotient maps with [L4] gives a surjection $M_{\mathfrak p}\otimes_A N_{\mathfrak p}\twoheadrightarrow (M_{\mathfrak p}/\mathfrak mM_{\mathfrak p})\otimes_A(N_{\mathfrak p}/\mathfrak mN_{\mathfrak p})$, and the target is the same as the tensor product over $k$, hence nonzero by [L4]. Therefore $M_{\mathfrak p}\otimes_A N_{\mathfrak p}\neq0$. [L4, step 1.3]

3.1 Step 2.1 and [L2] give $\mathfrak p \in \operatorname{Supp}_R(M \otimes_R N)$. Together with step 1.1, this proves the support-intersection formula. [L2, step 1.1, step 2.1] ∎
