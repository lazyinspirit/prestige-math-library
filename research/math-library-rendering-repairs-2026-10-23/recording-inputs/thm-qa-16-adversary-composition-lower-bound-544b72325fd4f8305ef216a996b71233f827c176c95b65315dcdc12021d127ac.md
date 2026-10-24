---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-qa-16-adversary-composition-lower-bound.json
  precheck: pass
id: thm-qa-16-adversary-composition-lower-bound
kind: theorem
title: Nonnegative and signed adversary bounds compose from below
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
deps:
  - def-qa-16-boolean-query-domain
  - def-qa-16-general-adversary-bound
  - def-qa-16-nonnegative-adversary-bound
  - def-qa-16-input-mismatch-matrices
  - thm-singular-value-decomposition
  - thm-operator-norm-is-the-largest-singular-value
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Høyer, Lee, and Špalek, Negative Weights Make Adversaries Stronger, Theory of Computing 3 (2007), §§6.1–6.2"
      url: "https://arxiv.org/pdf/quant-ph/0611054"
---

## Statement


Let $f:D_f\to\{0,1\}$ be a finite partial Boolean function on $N$ bits and let $g:D_g\to\{0,1\}$ be a finite partial Boolean function on $m$ bits. Define the block domain and composed function by
$$D_h=\{(x_1,\ldots,x_N)\in D_g^N:(g(x_1),\ldots,g(x_N))\in D_f\},\qquad h=f\circ g^N.$$
Assume $D_h\ne\varnothing$, as required for $h$ to be a Boolean query problem under [[def-qa-16-boolean-query-domain]]. Then both adversary bounds satisfy
$$\operatorname{Adv}^{\pm}(h)\ge\operatorname{Adv}^{\pm}(f)\operatorname{Adv}^{\pm}(g),\qquad \operatorname{Adv}(h)\ge\operatorname{Adv}(f)\operatorname{Adv}(g).$$

## Facts & Assumptions

**Given:** Finite partial Boolean functions $f$ and $g$ with disjoint input blocks in the composition $h=f\circ g^N$.



[F1] [[def-qa-16-general-adversary-bound]]: finite nonconstant functions have an attained signed adversary matrix.

[F2] [[def-qa-16-nonnegative-adversary-bound]]: the same statement holds with entrywise nonnegative matrices.

[F3] [[def-qa-16-input-mismatch-matrices]]: $\Delta_i$ marks a mismatch at bit $i$ and filters matrices entrywise.

[F4] [[thm-singular-value-decomposition]]: every finite real matrix has orthonormal left/right singular vectors and singular values.

[F5] [[thm-operator-norm-is-the-largest-singular-value]]: its operator norm is its largest singular value.

[F6] [[def-qa-16-boolean-query-domain]]: a Boolean query problem has a finite nonempty domain and a positive input length.

## Proof

1.1 Let $f:D_f\to\{0,1\}$ be a nonconstant Boolean function on $N$ bits and $g:D_g\to\{0,1\}$ a nonconstant Boolean function on $m$ bits. The composed partial function $h=f\circ g^N$ has domain $D_h=\{(x_1,\ldots,x_N)\in D_g^N:(g(x_1),\ldots,g(x_N))\in D_f\}$. This domain is nonempty: choose one $z\in D_f$ and fixed preimages in $D_g$ of $0$ and $1$, which exist because $g$ is nonconstant, then lift the coordinates of $z$ blockwise. Choose optimal matrices $\Gamma_f,\Gamma_g$ normalized so $\max_i\|\Gamma_f\circ\Delta_i\|=\max_j\|\Gamma_g\circ\Delta_j\|=1$; write $a=\|\Gamma_g\|=\operatorname{Adv}^{\pm}(g)$. [given, F1, F2, F3, F6]

1.2 Decompose each adversary matrix by output classes, $\Gamma_g=\begin{pmatrix}0&B_g\\B_g^T&0\end{pmatrix}$. For $a,b\in\{0,1\}$, let $G^{ab}$ be the $(a,b)$ block of $\Gamma_g$ when $a\ne b$ and let $G^{aa}=aI$ on $D_g^a$. For $x,y\in D_h$ put $\tilde x=(g(x_1),\ldots,g(x_N))$ and define $(\Gamma_h)_{xy}=(\Gamma_f)_{\tilde x,\tilde y}\prod_{j=1}^N G^{\tilde x_j,\tilde y_j}_{x_j,y_j}$. This matrix is real symmetric and vanishes whenever $h(x)=h(y)$; if $\Gamma_f,\Gamma_g$ are entrywise nonnegative, so is $\Gamma_h$. [given, F1, F2, F3, construct]

2.1 By [F4,F5], choose a singular-vector basis of the cross block $B_g$. Pair its positive singular vectors across the two output classes, and pair equal numbers of left and right null vectors with singular value zero. If the null-space dimensions differ, each leftover null vector is a one-dimensional component supported on just one output class; its equal-output patch is $aI$ and its cross-output action is zero. For a paired singular value $s\le a$, the four restrictions $G^{00},G^{01},G^{10},G^{11}$ act as $a$ times $C_s=\begin{pmatrix}1&s/a\\s/a&1\end{pmatrix}$, which is positive semidefinite with unit diagonal. A leftover singleton is represented by $C_0=\operatorname{diag}(1,0)$ or $\operatorname{diag}(0,1)$, a positive semidefinite matrix with diagonal entries at most one. For each tuple of child components, the corresponding invariant subspace is indexed by the compatible outer output labels $b\in D_f$, and the restriction of $\Gamma_h$ is $a^N$ times the compression of $\Gamma_f\circ C$, where $C_{b,b'}$ is the product of the selected two-output factors. The tensor-product factor $C$ is positive semidefinite with diagonal entries at most one. Write $C_{b,b'}=\langle c_b|c_{b'}\rangle$ with $\|c_b\|\le1$; then $V|b\rangle=|b\rangle\otimes|c_b\rangle$ is a contraction and $V^*(\Gamma_f\otimes I)V=\Gamma_f\circ C$, so $\|\Gamma_f\circ C\|\le\|\Gamma_f\|$. The SVD components span every child input space, proving $\|\Gamma_h\|\le\|\Gamma_f\|a^N$. [given, F4, F5, step 1.2, algebra]

3.1 Choose top singular pairs $(u_f,v_f)$ and $(u_g,v_g)$ for the cross blocks of $\Gamma_f$ and $\Gamma_g$. The bipartite block form makes $\alpha_f=(u_f,v_f)/\sqrt2$ and $\alpha_g=(u_g,v_g)/\sqrt2$ eigenvectors with eigenvalues $\|\Gamma_f\|$ and $a$. For a fixed outer output tuple $b$, each child factor $G^{b_j,b'_j}$ sends the restricted $\alpha_g$ component in class $b'_j$ to $a$ times the corresponding component in class $b_j$, whether $b_j=b'_j$ (the patched $aI$ block) or $b_j\ne b'_j$ (the singular-vector equation for $B_g$). Substitution in the definition of $\Gamma_h$ therefore shows $\alpha_h(x)=\alpha_f(\tilde x)\prod_j\alpha_g(x_j)$ is an eigenvector with eigenvalue $\|\Gamma_f\|a^N$. Together with step 2.1 this gives $\|\Gamma_h\|=\|\Gamma_f\|a^N$. [given, F1, F4, F5, step 1.2, step 2.1, algebra]

3.2 Fix an input bit $q$ in block $j$ and put $d=\|\Gamma_g\circ\Delta_q\|$. If $d=0$, then every entry of $\Gamma_g\circ\Delta_q$ is zero, the equal-output patch $dI$ is zero, and the masked composed block is zero. Suppose $d>0$. In $\Gamma_h\circ\Delta_{j,q}$, if the outer block outputs agree at $j$, its factor $\Gamma_f\circ\Delta_j$ is zero; equivalently, the patched equal-output child block is diagonal in $x_j$ and is killed by the inner mismatch $\Delta_q$. If the outer outputs differ at $j$, the child cross block is exactly the corresponding block of $\Gamma_g\circ\Delta_q$. Thus the masked composite has the same entrywise construction as step 1.2 with outer matrix $\Gamma_f\circ\Delta_j$, child $j$ cross block from $\Gamma_g\circ\Delta_q$ patched by $dI$ on equal-output blocks, and every other child patched by $aI$. Repeating the invariant-subspace and correlation-compression argument of step 2.1 bounds its norm by $\|\Gamma_f\circ\Delta_j\|d a^{N-1}$. The paired, zero-singular, and singleton components are handled as in step 2.1; the outer and inner filtered norms are at most one by normalization, so $\|\Gamma_h\circ\Delta_{j,q}\|\le a^{N-1}$. [given, F3, F4, F5, step 1.2, step 2.1]

4.1 Therefore $\max_{j,q}\|\Gamma_h\circ\Delta_{j,q}\|\le a^{N-1}$, while $\|\Gamma_h\|=\operatorname{Adv}^{\pm}(f)a^N$ by step 3.1. Its ratio is at least $\operatorname{Adv}^{\pm}(f)a$, proving $\operatorname{Adv}^{\pm}(f\circ g^N)\ge\operatorname{Adv}^{\pm}(f)\operatorname{Adv}^{\pm}(g)$. If $\Gamma_f$ and $\Gamma_g$ are nonnegative, step 1.2 makes $\Gamma_h$ nonnegative, so the identical argument proves $\operatorname{Adv}(f\circ g^N)\ge\operatorname{Adv}(f)\operatorname{Adv}(g)$. If either function is constant, the asserted lower bound is the trivial zero bound. [given, F1, F2, step 1.2, step 3.1, step 3.2] ∎
