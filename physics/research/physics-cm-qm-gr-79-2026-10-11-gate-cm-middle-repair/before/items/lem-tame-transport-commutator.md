---
id: lem-tame-transport-commutator
kind: lemma
title: "The transport term is orthogonal to itself and the tame commutator estimate $\\|[\\Lambda^m,u\\cdot\\nabla]u\\|_{L^2}\\le C_m\\|u\\|_{H^m}\\|u\\|_{H^s}$"
status: draft
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

[F2] Discrete Young: $\|a*b\|_{\ell^2}\le\|a\|_{\ell^1}\|b\|_{\ell^2}$ for $a\in\ell^1,a\in\ell^2$ ([[lem-discrete-young-and-sobolev-product]], claim 1), and $H^s$ is a Banach algebra for $s>3/2$ in the sense of the product bound $C_s$ ([[lem-discrete-young-and-sobolev-product]], claim 2).

[F3] $H^m$ is a real Hilbert space with $\langle f,g\rangle=\sum_k\widehat f(k)\cdot\overline{\widehat g(k)}$, $w_k\ge\max(1,2\pi|k|_j)$, $\|u\|_{H^0}=|u|_{L^2}$ and $\|\partial_j v\|_{H^{m-1}}\le\|v\|_{H^m}$ ([[def-periodic-vector-sobolev-space-and-leray-projection]], [[thm-fourier-basis-and-parseval-on-the-n-torus]]).

[F4] Trigonometric polynomials are dense in $H^m$ ([[def-periodic-vector-sobolev-space-and-leray-projection]]); for trigonometric polynomials $f,g$ one has $\int_{\mathbb T^3}e^{2\pi ik\cdot x}dx=\delta_{k0}$ and hence $\int(\partial_jf)\cdot g\,dx=-\int f\cdot(\partial_jg)\,dx$ by bilinear extension of the character computation ([[thm-fourier-basis-and-parseval-on-the-n-torus]]).

[F5] A continuous function $f$ on $\mathbb T^3$ with $\sum_k|\widehat f(k)|_2<\infty$ satisfies $\|f\|_{L^\infty}\le\sum_k|\widehat f(k)|_2$ ([[lem-fourier-lattice-sobolev-embedding]], claim 1).

## Proof


**Proof technique:** direct; integrate by parts for trigonometric polynomials and pass to the limit by density, then estimate the commutator coefficientwise by the weight comparison and discrete Young.

**Given:** Countable choice, $m\ge s>5/2$, $u\in H^m$ divergence-free, and the facts [F1]-[F5].

1.1 For trigonometric polynomials $u,w$ with $\operatorname{div}u=0$, integration by parts [F4] gives $\int((u\cdot\nabla)w)\cdot w\,dx=\sum_{i,j}\int u_j(\partial_jw_i)w_i\,dx=\frac12\sum_j\int u_j\partial_j|w|^2dx=-\frac12\int(\operatorname{div}u)|w|^2dx=0$. The map $(u,w)\mapsto\int((u\cdot\nabla)w)\cdot w\,dx$ is continuous on $H^m\times H^m$: indeed, $\bigl|\int((u\cdot\nabla)w)\cdot w\,dx\bigr|\le\|u\|_{L^\infty}\|\nabla w\|_{L^2}\|w\|_{L^2}\le C_m\|u\|_{H^m}\|w\|_{H^m}^2$ by the embedding bound [F5] and [F3]; since trigonometric polynomials are dense in $H^m$ [F4], the identity extends from polynomials to all $u,w\in H^m$, proving claim 1. [F3, F4, F5]

1.2 **Weight comparison.** For all $k,l\in\mathbb Z^3$ and $m\ge1$ one has $\bigl|w_k^m-w_l^m\bigr|\le m\,2\pi\,2^{m-2}\,|k-l|_2\bigl(w_{k-l}^{m-1}+w_l^{m-1}\bigr)$: along the segment $s\mapsto l+s(k-l)$ the mean value theorem gives $|w_k^m-w_l^m|\le m\sup_s w_{l+s(k-l)}^{m-1}\,|{\nabla w}|\,|k-l|$, with $|\nabla w|\le2\pi$ and $w_{l+s(k-l)}\le w_l+|k-l|_2\le w_l+w_{k-l}$; convexity of $t^{m-1}$ then gives the displayed bound. [algebra]

2.1 **Commutator coefficients.** For $u\in H^m$ the coefficient of $[\Lambda^m,u\cdot\nabla]u$ at $k$ is $c_k=\sum_l\bigl(w_k^m-w_l^m\bigr)\widehat u(k-l)\cdot(2\pi il)\widehat u(l)$, the series converging absolutely by [F1] (both $\sum|\widehat u|$ and $\sum 2\pi|l||\widehat u(l)|$ converge). By step 1.2, $|c_k|\le m2\pi2^{m-2}\sum_l|k-l|_2\bigl(w_{k-l}^{m-1}+w_l^{m-1}\bigr)|\widehat u(k-l)|_2\,2\pi|l|_2|\widehat u(l)|_2$. [step 1.2, F1]

3.1 Split the last sum with $v:=k-l$ into the convolution of $P_v:=|v|_2w_v^{m-1}|\widehat u(v)|_2$ with $Q_l:=2\pi|l|_2|\widehat u(l)|_2$, and the convolution of $P'_v:=2\pi|v|_2|\widehat u(v)|_2$ with $Q'_l:=w_l^{m-1}|l|_2|\widehat u(l)|_2$ (the factor $2\pi$ from $(2\pi il)$ placed on the first or second factor respectively). By [F1], $\|Q\|_{\ell^1}=\sum_l2\pi|l||\widehat u(l)|\le W'_s\|u\|_{H^s}$ and $\|Q'\|_{\ell^1}\le\sum_lw_l^m|\widehat u(l)|\le W_m\|u\|_{H^m}$; also $\|P\|_{\ell^2}\le\|u\|_{H^m}$ (as $|v|\le w_v$) and $\|P'\|_{\ell^2}\le\|u\|_{H^1}\le\|u\|_{H^s}$ (as $s>1$). With $\|\cdot\|_{\ell^2}$ denoting the $L^2$ norm of the coefficient family [F3] and Young [F2], $\bigl\|[\Lambda^m,u\cdot\nabla]u\bigr\|_{L^2}\le m4\pi^22^{m-2}(\|P\|_{\ell^2}\|Q\|_{\ell^1}+\|P'\|_{\ell^2}\|Q'\|_{\ell^1})\le C_m\|u\|_{H^m}\|u\|_{H^s}$ with $C_m=4\pi^2m2^{m-2}(W'_s+1)$; this is claim 2. [step 2.1, F1, F2, F3]

4.1 For claim 3, apply step 1.1 with $w:=\Lambda^mu$: $\bigl\langle (u\cdot\nabla)\Lambda^mu,\Lambda^mu\bigr\rangle=0$, so $\bigl\langle (u\cdot\nabla)u,\Lambda^{2m}u\bigr\rangle=\bigl\langle \Lambda^m((u\cdot\nabla)u),\Lambda^mu\bigr\rangle=\bigl\langle (u\cdot\nabla)\Lambda^mu,\Lambda^mu\bigr\rangle+\bigl\langle[\Lambda^m,u\cdot\nabla]u,\Lambda^mu\bigr\rangle=\bigl\langle[\Lambda^m,u\cdot\nabla]u,\Lambda^mu\bigr\rangle$, using that $\Lambda^{2m}$ and $\Lambda^m$ are self-adjoint and $\Lambda^{2m}=\Lambda^m\Lambda^m$ [F3]. [step 1.1, F3] ∎

## Remarks

- Claim 3 is the algebraic heart of the higher-order energy estimate: the transport term contributes only through the commutator, while the plainly transported term is orthogonal to itself.
- The estimate in claim 2 is "tame" in that it costs one factor at the high order $m$ and one at the base order $s$ only; the constant $C_m$ grows with $m$ and with the lattice constants $W'_s$ but is independent of $u$.
