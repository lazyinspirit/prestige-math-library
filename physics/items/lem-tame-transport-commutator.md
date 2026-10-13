---
id: lem-tame-transport-commutator
kind: lemma
title: "The transport term is orthogonal to itself and the tame commutator estimate $\\|[\\Lambda^m,u\\cdot\\nabla]u\\|_{L^2}\\le C_m\\|u\\|_{H^m}\\|u\\|_{H^s}$"
status: published
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-periodic-vector-sobolev-space-and-leray-projection, lem-cm-lattice-shell-count-and-weight-sums, lem-discrete-young-and-sobolev-product, lem-fourier-lattice-sobolev-embedding, def-countable-choice, thm-fourier-basis-and-parseval-on-the-n-torus, def-nonnegative-extended-series]
dependency_roles:
  def-periodic-vector-sobolev-space-and-leray-projection: mathematical-premise
  lem-cm-lattice-shell-count-and-weight-sums: mathematical-premise
  lem-discrete-young-and-sobolev-product: mathematical-premise
  lem-fourier-lattice-sobolev-embedding: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  def-nonnegative-extended-series: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "A. J. Majda and A. L. Bertozzi, Vorticity and Incompressible Flow (CUP 2002), Lemma 3.4 and estimate (3.32) (commutator calculus inequalities in Sobolev spaces) with Subsection 3.2.3 and Proposition 3.7 (the energy estimate d/dt||v||_m ≤ c_m|∇v|_{L∞}||v||_m)"
      url: "http://inis.jinr.ru/sl/P_Physics/PC_Classical%20physics/PCfm_Fluid%20mechanics/Majda,%20Bertozzi.%20Vorticity%20and%20incompressible%20flow%20(CUP,%202002)(558s).pdf"
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universität Ulm, WS 2018/19), Section 4.2 (the H^m energy identity, the vanishing transport term after integration by parts and the Sobolev estimates bounding the commutator)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
verification:
  precheck: pass
---

## Statement

**Assume the Axiom of Countable Choice** $\mathrm{AC}_\omega$ ([[def-countable-choice]]), used through the lattice and embedding suppliers. Work with the operators $\Lambda^m$, $\partial_j$, the weight family $w_k$ and the divergence-free subspaces of [[def-periodic-vector-sobolev-space-and-leray-projection]].

1. **Vanishing transport integral.** Let $m>5/2$, let $u\in H^m$ with $\operatorname{div}u=0$, and let $w\in H^m$. Then $(u\cdot\nabla)w\in L^2$ and
$$\int_{\mathbb T^3}\bigl((u\cdot\nabla)w\bigr)\cdot w\,dx=0 .$$
2. **Tame commutator.** Let $m\ge s>5/2$ and $u\in H^m$ with $\operatorname{div}u=0$. Then the field
$$[\Lambda^m,u\cdot\nabla]u:=\Lambda^m\bigl((u\cdot\nabla)u\bigr)-(u\cdot\nabla)(\Lambda^m u)$$
belongs to $L^2$, and with $W'_s=(\sum_k(2\pi|k|_2)^2w_k^{-2s})^{1/2}$ of [[lem-cm-lattice-shell-count-and-weight-sums]] and $C_m:=4\pi^2m2^{m-2}(W'_s+1)$,
$$\bigl\|[\Lambda^m,u\cdot\nabla]u\bigr\|_{L^2}\;\le\;C_m\|u\|_{H^m}\|u\|_{H^s}.$$
3. **Commutation identity for the energy estimate.** If moreover $u\in H^{2m}$ and $\operatorname{div}u=0$, then
$$\bigl\langle (u\cdot\nabla)u,\Lambda^{2m}u\bigr\rangle=\bigl\langle [\Lambda^m,u\cdot\nabla]u,\Lambda^mu\bigr\rangle,$$
where $\langle f,g\rangle=\int_{\mathbb T^3}f\cdot g\,dx$.

## Facts & Assumptions

**Given:** The weight family $w_k$, the operators of [[def-periodic-vector-sobolev-space-and-leray-projection]], and $m\ge s>5/2$.

[F1] The lattice sum bound: $\sum_k|c(k)|_2\le W_s\bigl(\sum_kw_k^{2s}|c(k)|_2^2\bigr)^{1/2}$ and $\sum_k2\pi|k|_2|c(k)|_2\le W'_s\bigl(\sum_kw_k^{2s}|c(k)|_2^2\bigr)^{1/2}$ for $s>5/2$ ([[lem-cm-lattice-shell-count-and-weight-sums]], claim 4).

[F2] Discrete Young: $\|a*b\|_{\ell^2}\le\|a\|_{\ell^1}\|b\|_{\ell^2}$ for $a\in\ell^1,b\in\ell^2$ ([[lem-discrete-young-and-sobolev-product]], claim 1), and $H^s$ is a Banach algebra for $s>3/2$ in the sense of the product bound $C_s$ ([[lem-discrete-young-and-sobolev-product]], claims 2 and 3).

[F3] $H^m$ is a real Hilbert space with weighted inner product $\langle f,g\rangle_{H^m}=\sum_kw_k^{2m}\widehat f(k)\cdot\overline{\widehat g(k)}$, while the unweighted pairing $\langle f,g\rangle$ used in the statement is the $L^2$ pairing, $w_k\ge\max(1,2\pi|k|_j)$, $\|u\|_{H^0}=|u|_{L^2}$ and $\|\partial_j v\|_{H^{m-1}}\le\|v\|_{H^m}$ ([[def-periodic-vector-sobolev-space-and-leray-projection]], [[thm-fourier-basis-and-parseval-on-the-n-torus]]).

[F4] Define the truncation by $\widehat{P_Nv}(k)=\widehat v(k)$ for $|k|_\infty\le N$ and zero otherwise. It preserves conjugate symmetry and $k\cdot\widehat v(k)=0$, and $\|P_Nv-v\|_{H^m}^2=\sum_{|k|_\infty>N}w_k^{2m}|\widehat v(k)|^2\to0$. Thus divergence-free trigonometric polynomials are dense in the divergence-free subspace, and trigonometric polynomials are dense in $H^m$ ([[def-periodic-vector-sobolev-space-and-leray-projection]]); for trigonometric polynomials $f,g$ one has $\int_{\mathbb T^3}e^{2\pi ik\cdot x}dx=\delta_{k0}$ and hence $\int(\partial_jf)\cdot g\,dx=-\int f\cdot(\partial_jg)\,dx$ by bilinear extension of the character computation ([[thm-fourier-basis-and-parseval-on-the-n-torus]]).

[F5] A continuous function $f$ on $\mathbb T^3$ with $\sum_k|\widehat f(k)|_2<\infty$ satisfies $\|f\|_{L^\infty}\le\sum_k|\widehat f(k)|_2$ ([[lem-fourier-lattice-sobolev-embedding]], claim 1).

## Proof


**Proof technique:** direct; integrate by parts for trigonometric polynomials and pass to the limit by density, then estimate the commutator coefficientwise by the weight comparison and discrete Young.

**Given:** Countable choice, $m\ge s>5/2$, $u\in H^m$ divergence-free, and the facts [F1]-[F5].

1.1 For trigonometric polynomials $u,w$ with $\operatorname{div}u=0$, integration by parts [F4] gives $\int((u\cdot\nabla)w)\cdot w\,dx=\sum_{i,j}\int u_j(\partial_jw_i)w_i\,dx=\frac12\sum_j\int u_j\partial_j|w|^2dx=-\frac12\int(\operatorname{div}u)|w|^2dx=0$. The map $(u,w)\mapsto\int((u\cdot\nabla)w)\cdot w\,dx$ is continuous on $H^m\times H^m$: indeed, $\bigl|\int((u\cdot\nabla)w)\cdot w\,dx\bigr|\le\|u\|_{L^\infty}\|\nabla w\|_{L^2}\|w\|_{L^2}\le C_m\|u\|_{H^m}\|w\|_{H^m}^2$ by the embedding bound [F5] and [F3]; since $P_Nu$ is divergence-free and $P_Nu\to u$, $P_Nw\to w$ in $H^m$ by [F4], the identity extends from polynomials to all $u,w\in H^m$, proving claim 1. [F3, F4, F5]

1.2 **Weight comparison.** Extend $w$ to $\mathbb R^3$ by $w(x)=(1+4\pi^2|x|_2^2)^{1/2}$. Its gradient has norm at most $2\pi$, and $w(l+tv)\le w(l)+2\pi|v|_2\le w_l+w_v$ for $0\le t\le1$. Since here $m>5/2$, the convexity inequality $(a+b)^{m-1}\le2^{m-2}(a^{m-1}+b^{m-1})$ applies. Integrating the derivative of $w(l+tv)^m$ for $v=k-l$ gives $|w_k^m-w_l^m|\le m2\pi2^{m-2}|v|_2(w_v^{m-1}+w_l^{m-1})$. [given, algebra]

2.1 **Meaning and coefficients of the commutator.** Put $u_N=P_Nu$, the Fourier truncation, which converges to $u$ in $H^m$ and $H^s$ by [F4]. For polynomials the commutator has coefficients $c_k=\sum_l(w_k^m-w_l^m)(\widehat u(k-l)\cdot2\pi il)\widehat u(l)$ by finite convolution. The same series for general $u$ is absolutely convergent: the convolution bounds below apply also to the sum of absolute values, and each convolution of an $\ell^2$ family with an $\ell^1$ family is finite at each coordinate by [F2]. The two terms in the displayed commutator need not separately lie in $L^2$. They are interpreted in $H^{-1}$: the first lies there because $(u\cdot\nabla)u\in H^{m-1}$ by the transport product bound [F2], and the second is $\sum_j\partial_j(u_j\Lambda^mu)$ since $\operatorname{div}u=0$. Here $u_j$ is bounded by [F5], $\Lambda^mu\in L^2$, and differentiation maps $L^2$ to $H^{-1}$ coefficientwise because $2\pi|k_j|/w_k\le1$. Products and these derivatives are defined by limits of the truncated fields; $u_N\to u$ uniformly and $\Lambda^mu_N\to\Lambda^mu$ in $L^2$, so the limits exist and agree with the stated products. Thus the difference is well defined in $H^{-1}$ and its coefficients are the series just displayed. [step 1.2, F1, F2, F3, F4, F5]

3.1 For $v=k-l$ define $P_v:=|v|_2w_v^{m-1}|\widehat u(v)|_2$, $Q_l:=2\pi|l|_2|\widehat u(l)|_2$, $A_v:=|v|_2|\widehat u(v)|_2$ and $B_l:=2\pi|l|_2w_l^{m-1}|\widehat u(l)|_2$. Step 1.2 bounds $|c_k|$ by $m2\pi2^{m-2}[(P*Q)(k)+(A*B)(k)]$. Since $2\pi|k|_2\le w_k$, $\|P\|_2\le(2\pi)^{-1}\|u\|_{H^m}$ and $\|B\|_2\le\|u\|_{H^m}$; [F1] gives $\|Q\|_1\le W'_s\|u\|_{H^s}$ and $\|A\|_1\le(2\pi)^{-1}W'_s\|u\|_{H^s}$. Young [F2] therefore gives $\|c\|_2\le m2^{m-1}W'_s\|u\|_{H^m}\|u\|_{H^s}\le C_m\|u\|_{H^m}\|u\|_{H^s}$ with the unchanged $C_m=4\pi^2m2^{m-2}(W'_s+1)$. The same calculation for the bilinear coefficient expression with different inputs $a,b$ bounds it by $m2^{m-2}W'_s(\|a\|_{H^m}\|b\|_{H^s}+\|a\|_{H^s}\|b\|_{H^m})$. Applying this to $u_N-u$ and $u_N,u$ shows convergence of the truncated commutators in $\ell^2$. Parseval [F3] supplies their $L^2$ limit, which is the $H^{-1}$ difference of step 2.1. This proves claim 2 without strengthening its $H^m$ hypothesis. [step 1.2, step 2.1, F1, F2, F3, F4]

4.1 For claim 3, apply step 1.1 with $w:=\Lambda^mu$: $\bigl\langle (u\cdot\nabla)\Lambda^mu,\Lambda^mu\bigr\rangle=0$, so $\bigl\langle (u\cdot\nabla)u,\Lambda^{2m}u\bigr\rangle=\bigl\langle \Lambda^m((u\cdot\nabla)u),\Lambda^mu\bigr\rangle=\bigl\langle (u\cdot\nabla)\Lambda^mu,\Lambda^mu\bigr\rangle+\bigl\langle[\Lambda^m,u\cdot\nabla]u,\Lambda^mu\bigr\rangle=\bigl\langle[\Lambda^m,u\cdot\nabla]u,\Lambda^mu\bigr\rangle$, using that $\Lambda^{2m}$ and $\Lambda^m$ are self-adjoint and $\Lambda^{2m}=\Lambda^m\Lambda^m$ [F3]. [step 1.1, F3] ∎

## Remarks

- Claim 3 is the algebraic heart of the higher-order energy estimate: the transport term contributes only through the commutator, while the plainly transported term is orthogonal to itself.
- The estimate in claim 2 is "tame" in that it costs one factor at the high order $m$ and one at the base order $s$ only; the constant $C_m$ grows with $m$ and with the lattice constants $W'_s$ but is independent of $u$.
