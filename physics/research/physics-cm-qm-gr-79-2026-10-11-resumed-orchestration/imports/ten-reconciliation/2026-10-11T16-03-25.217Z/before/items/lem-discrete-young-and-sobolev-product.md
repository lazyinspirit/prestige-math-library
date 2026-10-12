---
id: lem-discrete-young-and-sobolev-product
kind: lemma
title: "Discrete Young inequality, the Sobolev product bound, and the transport product bound on the torus"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-periodic-vector-sobolev-space-and-leray-projection, lem-cm-lattice-shell-count-and-weight-sums, lem-fourier-lattice-sobolev-embedding, def-countable-choice, def-nonnegative-extended-series, thm-cauchy-schwarz-finite, cor-bounded-convergence-on-a-finite-measure-space, thm-fourier-basis-and-parseval-on-the-n-torus]
dependency_roles:
  def-periodic-vector-sobolev-space-and-leray-projection: mathematical-premise
  lem-cm-lattice-shell-count-and-weight-sums: mathematical-premise
  lem-fourier-lattice-sobolev-embedding: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nonnegative-extended-series: mathematical-premise
  thm-cauchy-schwarz-finite: mathematical-premise
  cor-bounded-convergence-on-a-finite-measure-space: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "A. J. Majda and A. L. Bertozzi, Vorticity and Incompressible Flow (CUP 2002), Lemma 3.4 (calculus inequalities: products and commutators in H^m(R^N), the Banach-algebra property for s>N/2) with the appendix to Chapter 3"
      url: "http://inis.jinr.ru/sl/P_Physics/PC_Classical%20physics/PCfm_Fluid%20mechanics/Majda,%20Bertozzi.%20Vorticity%20and%20incompressible%20flow%20(CUP,%202002)(558s).pdf"
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universität Ulm, WS 2018/19), Section 2.1 and Section 4.2 (Fourier characterisation of H^s on T^3 and the product/transport estimates used in the H^m energy inequalities)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
verification:
  precheck: pass
---

## Statement

**Assume the Axiom of Countable Choice** $\mathrm{AC}_\omega$ ([[def-countable-choice]]), used through the two lattice and embedding suppliers quoted below. Work with the spaces $H^\sigma=H^\sigma(\mathbb T^3;\mathbb R^3)$, the weight family $w_k$ and the convolutions $\widehat{fg}=\widehat f*\widehat g$ of [[def-periodic-vector-sobolev-space-and-leray-projection]].

1. **Discrete Young.** Let $a\in\ell^1(\mathbb Z^3;\mathbb C)$, $b\in\ell^2(\mathbb Z^3;\mathbb C)$ and define $(a*b)(k):=\sum_{l\in\mathbb Z^3}a(k-l)b(l)$. The sum converges absolutely, and
$$\|a*b\|_{\ell^2}\;\le\;\|a\|_{\ell^1}\|b\|_{\ell^2}.$$
2. **Sobolev product.** Let $\sigma>3/2$ and $f,g\in H^\sigma$. Then the pointwise product $fg$ of the continuous representatives ([[lem-fourier-lattice-sobolev-embedding]]) belongs to $H^\sigma$, and with $W_\sigma=(\sum_kw_k^{-2\sigma})^{1/2}$ of [[lem-cm-lattice-shell-count-and-weight-sums]],
$$\|fg\|_{H^\sigma}\;\le\;C_\sigma\|f\|_{H^\sigma}\|g\|_{H^\sigma},\qquad C_\sigma:=2^\sigma W_\sigma .$$
3. **Transport product.** Let $\sigma>3/2$, $f\in H^\sigma$ and $g\in H^{\sigma+1}$. Then $(f\cdot\nabla)g:=\sum_{j=1}^{3}f_j\,\partial_jg$ belongs to $H^\sigma$ and
$$\|(f\cdot\nabla)g\|_{H^\sigma}\;\le\;3C_\sigma\|f\|_{H^\sigma}\|g\|_{H^{\sigma+1}}.$$

## Facts & Assumptions

**Given:** The weight family $w_k=(1+4\pi^2|k|_2^2)^{1/2}\ge1$ and the operators of [[def-periodic-vector-sobolev-space-and-leray-projection]], with $w_k\le w_{k-l}+w_l$ and $2\pi|k_j|\le w_k$; the coefficient $\ell^1$ bound and the continuous representatives of [[lem-cm-lattice-shell-count-and-weight-sums]] and [[lem-fourier-lattice-sobolev-embedding]].

[F1] Let $c:\mathbb Z^3\times\mathbb Z^3\to[0,+\infty]$. Then the iterated nonnegative extended sums agree with the supremum over finite rectangles,
$$\sum_{k}\sum_{l}c(k,l)=\sup_{\substack{F,G\subseteq\mathbb Z^3\\ F,G\ \mathrm{finite}}}\ \sum_{k\in F}\sum_{l\in G}c(k,l)=\sum_l\sum_kc(k,l),$$
directly from the definition of the nonnegative extended sum as the supremum of finite partial sums and the monotonicity of suprema ([[def-nonnegative-extended-series]]).

[F2] For finitely many nonnegative reals $x_i,y_i$, $\sum_ix_iy_i\le\bigl(\sum_ix_i^2\bigr)^{1/2}\bigl(\sum_iy_i^2\bigr)^{1/2}$ ([[thm-cauchy-schwarz-finite]]); and $(u+v)^2\le2u^2+2v^2$ for reals.

[F3] If $\sigma>3/2$ then $\sum_kw_k^{2\sigma}|c(k)|^2<+\infty$ implies $\sum_kw_k^{\sigma}|c(k)|<\infty$, with $\sum_kw_k^{\sigma}|c(k)|\le W_\sigma\bigl(\sum_kw_k^{2\sigma}|c(k)|^2\bigr)^{1/2}$, and $\sum_k|c(k)|\le W_\sigma(\cdots)^{1/2}$ ([[lem-cm-lattice-shell-count-and-weight-sums]], claims 3 and 4).

[F5] If $\sigma>3/2$, then $f,g\in H^\sigma$ are continuous, the product $fg$ is continuous, and its Fourier coefficients are the convolution $\widehat{fg}(k)=\sum_l\widehat f(l)\widehat g(k-l)$, the sum converging absolutely: this is the coefficient identification of [[lem-fourier-lattice-sobolev-embedding]] applied to the continuous field $fg$, combined with the absolute convergence $\sum_{l,m}|\widehat f(l)|\,|\widehat g(m)|<\infty$ from [F3] and termwise integration of the uniformly convergent product series [F4].

## Proof


**Proof technique:** direct; prove Young's inequality by Cauchy-Schwarz at each frequency and Tonelli-style reindexing of nonnegative sums, then apply it to the weighted coefficient families of a product.

**Given:** The weight family, the two suppliers, and the facts [F1]-[F5].

1.1 Let $A,B:\mathbb Z^3\to[0,+\infty)$ be nonnegative with $A\in\ell^1$, $B\in\ell^2$. For each $k$, Cauchy-Schwarz [F2] gives $\bigl(\sum_lA(k-l)B(l)\bigr)^2\le\bigl(\sum_lA(k-l)\bigr)\bigl(\sum_lA(k-l)B(l)^2\bigr)\le\|A\|_{\ell^1}\sum_lA(k-l)B(l)^2$. Summing over $k$ and reindexing by [F1] (all terms nonnegative) yields $\sum_k(\sum_lA(k-l)B(l))^2\le\|A\|_{\ell^1}\sum_lB(l)^2\sum_kA(k-l)=\|A\|_{\ell^1}^2\|B\|_{\ell^2}^2$, because $\sum_kA(k-l)=\sum_mA(m)=\|A\|_{\ell^1}$ for each fixed $l$. Hence $\|A*B\|_{\ell^2}\le\|A\|_{\ell^1}\|B\|_{\ell^2}$. [F1, F2]

1.2 For $f,g\in H^\sigma$ with $\sigma>3/2$, define the nonnegative families $A_l:=w_l^\sigma|\widehat f(l)|$, $B_m:=|\widehat g(m)|$, $A'_l:=|\widehat f(l)|$, $B'_m:=w_m^\sigma|\widehat g(m)|$. By the subadditivity $w_k\le w_{k-l}+w_l$ and convexity of $t\mapsto t^\sigma$ for $\sigma\ge1$, one has $w_k^\sigma\le2^{\sigma-1}\bigl(w_{k-l}^\sigma+w_l^\sigma\bigr)$; multiplying the coefficient identity of [F5] by $w_k^\sigma$ and applying the triangle inequality therefore gives, for every $k$, the coefficient bound $w_k^\sigma\bigl|\widehat{fg}(k)\bigr|\le2^{\sigma-1}\bigl((A*B)(k)+(A'*B')(k)\bigr)$. [F5, algebra]

2.1 For complex $a,b$ the same bound holds: pointwise $|(a*b)(k)|\le(|a|*|b|)(k)$, so $\|a*b\|_{\ell^2}\le\||a|*|b|\|_{\ell^2}\le\||a|\|_{\ell^1}\||b|\|_{\ell^2}=\|a\|_{\ell^1}\|b\|_{\ell^2}$ by step 1.1 and the triangle inequality in $\ell^2$. This is claim 1. [step 1.1, algebra]

3.1 Applying $\ell^2$-norms to step 1.2 and the Young inequality (claim 1) to each term gives $\|fg\|_{H^\sigma}\le2^{\sigma-1}\bigl(\|A*B\|_{\ell^2}+\|A'*B'\|_{\ell^2}\bigr)\le2^{\sigma-1}\bigl(\|A\|_{\ell^2}\|B\|_{\ell^1}+\|A'\|_{\ell^2}\|B'\|_{\ell^1}\bigr)$. Now $\|A\|_{\ell^2}=\|f\|_{H^\sigma}$, $\|A'\|_{\ell^2}\le\|f\|_{H^\sigma}$, and by [F3] both $\|B\|_{\ell^1}=\sum_m|\widehat g(m)|$ and $\|B'\|_{\ell^1}=\sum_mw_m^\sigma|\widehat g(m)|$ are at most $W_\sigma\|g\|_{H^\sigma}$; hence $\|fg\|_{H^\sigma}\le2^\sigma W_\sigma\|f\|_{H^\sigma}\|g\|_{H^\sigma}=C_\sigma\|f\|_{H^\sigma}\|g\|_{H^\sigma}<+\infty$, which also shows $fg\in H^\sigma$. This is claim 2. [step 1.2, step 2.1, F3]

4.1 For claim 3 write $(f\cdot\nabla)g=\sum_{j=1}^3f_j\partial_jg$. Since $g\in H^{\sigma+1}$, each $\partial_jg\in H^\sigma$ with $\|\partial_jg\|_{H^\sigma}\le\|g\|_{H^{\sigma+1}}$, and each component $f_j$ of $f$ lies in $H^\sigma$ with $\|f_j\|_{H^\sigma}\le\|f\|_{H^\sigma}$. Claim 2 applied to the pair $(f_j,\partial_jg)$ gives $\|f_j\partial_jg\|_{H^\sigma}\le2W_\sigma\|f\|_{H^\sigma}\|g\|_{H^{\sigma+1}}$; summing the three components with the triangle inequality gives claim 3. [step 3.1, algebra] ∎

## Remarks

- The constant $C_\sigma=2^\sigma W_\sigma$ is not optimized; only finiteness and the exact dependence on $\|f\|_{H^\sigma}\|g\|_{H^\sigma}$ matter below.
- Claim 2 is the torus version of the Banach-algebra property of $H^\sigma$ for $\sigma>3/2$, and claim 3 is the estimate that bounds the convective term by one extra derivative.
