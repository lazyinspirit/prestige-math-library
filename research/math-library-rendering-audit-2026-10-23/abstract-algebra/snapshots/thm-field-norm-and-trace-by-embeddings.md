---
id: thm-field-norm-and-trace-by-embeddings
kind: theorem
title: "Norm and trace from embeddings, with the inseparable exponent in the norm formula"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-field-norm-and-trace, def-separable-elements-and-separable-extensions, thm-dedekind-linear-independence-of-characters, def-separable-degree, def-inseparable-degree, thm-separable-degree-is-the-degree-of-the-separable-closure, thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure, thm-purely-inseparable-extension-characterizations, cor-degree-factors-into-separable-and-inseparable-degrees, def-extension-degree-and-finite-extension]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Corollary 5.45 and Remark 5.47"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "B. Conrad, Norm and trace, Theorems 2.3 and 3.2"
      url: "https://virtualmath1.stanford.edu/~conrad/248APage/handouts/normtrace.pdf"
pipeline_run: null
---

## Statement

Let $K/F$ be a finite field extension, let $\Omega/F$ be an algebraic closure,
let $\Sigma=\operatorname{Hom}_F(K,\Omega)$, and let
$[K:F]_i$ be the inseparable degree ([[def-inseparable-degree]]). Then for every
$a\in K$,

$$\operatorname{Tr}_{K/F}(a)=[K:F]_i\sum_{\sigma\in\Sigma}\sigma(a),$$

and

$$N_{K/F}(a)=\left(\prod_{\sigma\in\Sigma}\sigma(a)\right)^{[K:F]_i}.$$

In particular, when $K/F$ is separable these are the ordinary sum and product
over the distinct $F$-embeddings of $K$ into $\Omega$; and when
$[K:F]_i>1$ in characteristic $p>0$, the trace map is identically zero because
$[K:F]_i$ is a power of $p$.

## Facts & Assumptions
**Given:** A finite extension $K/F$, an algebraic closure $\Omega/F$, the set $\Sigma=\operatorname{Hom}_F(K,\Omega)$ of $F$-embeddings, an element $a\in K$, the separable closure $K_s$ of $F$ in $K$, and the inseparable degree $[K:F]_i$.

[F1] Norm and trace are defined from the multiplication operator $m_a\colon x\mapsto ax$ on the finite-dimensional $F$-vector space $K$ ([[def-field-norm-and-trace]]).

[L1] The distinct automorphisms of a field are linearly independent after restriction to the multiplicative group, and the same evaluation-matrix argument applies to the distinct $F$-embeddings of a finite separable extension ([[thm-dedekind-linear-independence-of-characters]]).

[L2] The separable degree counts the $F$-embeddings into $\Omega$, the inseparable degree is the quotient $[K:F]/[K:F]_s$, and $[K:F]=[K:F]_s[K:F]_i$ ([[def-separable-degree]], [[def-inseparable-degree]], [[cor-degree-factors-into-separable-and-inseparable-degrees]]).

[L3] If $K_s$ is the separable closure of $F$ in $K$, then $[K:F]_s=[K_s:F]$ and $K/K_s$ is purely inseparable ([[thm-separable-degree-is-the-degree-of-the-separable-closure]], [[thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure]]).

[L4] For a purely inseparable extension, the inclusion into an algebraic closure is the only embedding over the base field ([[thm-purely-inseparable-extension-characterizations]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $K/F$ is separable. Choose an $F$-basis $u_1,\dots,u_n$ of $K$, list the embeddings as $\sigma_1,\dots,\sigma_n$, and form the evaluation matrix $A=(\sigma_i(u_j))_{i,j}$. By the same argument used in Artin's fixed-field lower bound, [L1] makes $A$ invertible. [L1, L2, choose]

1.2 For general $K/F$, let $K_s$ be the separable closure of $F$ in $K$. By [L3], the extension $K/K_s$ is purely inseparable of degree $[K:F]_i$, and the $F$-embeddings of $K$ are exactly the extensions of the embeddings of $K_s$, one extension for each embedding because [L4] gives uniqueness over $K_s$. Thus $\Sigma$ may be identified with $\operatorname{Hom}_F(K_s,\Omega)$, and its cardinality is $[K:F]_s$. [L2, L3, L4]

2.1 Let $M$ be the matrix of $m_a$ in the basis $u_1,\dots,u_n$. Because $\sigma_i(au_j)=\sigma_i(a)\sigma_i(u_j)$ for every $i,j$, one has $$AM=\operatorname{diag}(\sigma_1(a),\dots,\sigma_n(a))A.$$ Hence $$M=A^{-1}\operatorname{diag}(\sigma_1(a),\dots,\sigma_n(a))A,$$ so determinant and trace of [F1] give $$N_{K/F}(a)=\prod_i\sigma_i(a),\qquad \operatorname{Tr}_{K/F}(a)=\sum_i\sigma_i(a).$$ [F1, step 1.1, algebra]

3.1 Choose an $F$-basis $v_1,\dots,v_s$ of $K_s$ and a $K_s$-basis $b_1,\dots,b_i$ of $K$, where $i=[K:F]_i$. Writing $$ab_r=\sum_{q=1}^i c_{qr}b_q\qquad(c_{qr}\in K_s),$$ the matrix of $m_a$ on the product basis $(b_qv_j)$ is the block matrix $C^\sharp=(M(c_{qr}))_{q,r}$, where $M(c_{qr})$ is the matrix of multiplication by $c_{qr}$ on $K_s/F$. Conjugating each block by the separable evaluation matrix of step 1.1 for $K_s/F$ turns $C^\sharp$ into a block-diagonal matrix with diagonal blocks $\sigma(C)$ as $\sigma$ runs through $\Sigma$. Therefore $$N_{K/F}(a)=\prod_{\sigma\in\Sigma}\det(\sigma(C)),\qquad \operatorname{Tr}_{K/F}(a)=\sum_{\sigma\in\Sigma}\operatorname{tr}(\sigma(C)).$$ [F1, step 2.1, step 1.2, algebra]

4.1 Over $K_s$, the extension $K/K_s$ is purely inseparable of degree $i$, so every conjugate of $a$ over $K_s$ equals $a$. Accordingly the characteristic polynomial of the $K_s$-linear operator represented by $C$ is $(X-a)^i$, and therefore $$\det(C)=a^i,\qquad \operatorname{tr}(C)=ia.$$ Applying each $\sigma\in\Sigma$ in step 3.1 gives $$\det(\sigma(C))=\sigma(a)^i,\qquad \operatorname{tr}(\sigma(C))=i\,\sigma(a).$$ [step 3.1, L3, L4, algebra]

5.1 Substituting step 4.1 into step 3.1 yields $$N_{K/F}(a)=\prod_{\sigma\in\Sigma}\sigma(a)^i=\left(\prod_{\sigma\in\Sigma}\sigma(a)\right)^i,$$ and $$\operatorname{Tr}_{K/F}(a)=\sum_{\sigma\in\Sigma}i\,\sigma(a)=i\sum_{\sigma\in\Sigma}\sigma(a).$$ This is the stated formula, with the separable case already proved in step 2.1. [step 3.1, step 4.1, algebra]

6.1 If $\operatorname{char}F=p>0$ and $i>1$, then [L2] makes $i$ a positive power of $p$, so $i\cdot1_F=0$. The trace formula of step 5.1 is then identically zero. [step 5.1, L2, algebra] ∎

## Remarks




- **The inseparable exponent is load-bearing.** In the separable case the norm is the product over the embeddings and the trace is their sum; outside the separable case the product must be raised to $[K:F]_i$, and the trace may vanish identically.

- **The finite-field formulas on the earlier page are examples of this theorem.** When $K=\mathbb F_{q^n}$ over $\mathbb F_q$, the embeddings are the Frobenius powers and the product and sum become the familiar Frobenius norm and trace.
