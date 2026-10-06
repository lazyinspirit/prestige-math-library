---
id: cex-critical-trace-compactness-fails-by-tangential-dilation
kind: counterexample
title: "Critical traces fail compactness under boundary dilation"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-l-p-space-as-a-quotient-by-null-functions, def-sobolev-space-wkp-and-its-norm, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, thm-linear-change-of-variables-for-lebesgue-measure, thm-lp-trace-operator-on-a-bounded-c-one-domain, def-surface-integral-on-a-compact-c-one-hypersurface, cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences, lem-sobolev-trace-agrees-with-continuous-boundary-values, def-countable-choice, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations, full graduate notes"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Section 3.7, Theorem 3.14, printed pp. 62-64 (trace); Section 3.9, Exercise 3.24, printed p. 78 (critical scaling)."
    - title: "Juha Kinnunen, Sobolev Spaces, complete 168-page 2026 notes"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 Section 3.6, Theorem 3.44, Remark 3.45 and Example 3.46, printed pp. 85-90."
---

## Statement refuted

**Refuted claim.** The Sobolev trace is compact at its critical boundary
exponent: for a bounded $C^1$ domain $\Omega\subset\mathbb R^n$ the trace map
$T:W^{1,p}(\Omega)\to L^{q_\partial}(\partial\Omega)$,
$1<p<n$, $n\ge2$, and $q_\partial=\frac{p(n-1)}{n-p}$, would send every bounded sequence to a
sequence with a strongly convergent subsequence.

The witness is a boundary bubble: one fixed smooth boundary profile dilated
by the factor $j$, with the bulk amplitude scaled so that the $W^{1,p}$ norm
stays bounded and the critical trace norm stays fixed while the support
shrinks to a single boundary point.

## Facts & Assumptions

**Given:** the Axiom of Choice; $n\ge2$; $1<p<n$; $q_\partial=\frac{p(n-1)}{n-p}$; a bounded $C^1$ domain $\Omega\subset\mathbb R^n$ with the following explicit flat boundary patch. Start with $B(e_n,1)$, whose lower boundary near $0$ is $t=h(y)=1-\sqrt{1-|y|^2}$. Choose $a\in C_c^\infty(\mathbb R^{n-1})$ equal to $h$ near $0$, using an interior cutoff. The global smooth diffeomorphism $F(y,t)=(y,t-a(y))$ has inverse $(y,t)\mapsto(y,t+a(y))$ and determinant $1$. Set $\Omega=F(B(e_n,1))$. It is bounded with smooth boundary and locally $\Omega=\{x_n>0\}$, $\partial\Omega=\{x_n=0\}$; and a nonzero $\psi\in C_c^\infty(\mathbb R^n)$ supported in a sufficiently small ball inside that patch, with boundary restriction $g(x'):=\psi(x',0)$ not identically $0$. Write $\mathbb R^n_+:=\{y\in\mathbb R^n:y_n>0\}$. For large $j$ put $u_j(x):=j^{(n-p)/p}\psi(jx)$.

[F1] *The trace operator.* $T:W^{1,p}(\Omega)\to L^p(\partial\Omega)$ is bounded and $Tu=u|_{\partial\Omega}$ for every $u$ continuous on $\overline\Omega$ and in $W^{1,p}(\Omega)$. ([[thm-lp-trace-operator-on-a-bounded-c-one-domain]])

[F2] *Surface measure on the flat patch.* On the patch $\{x_n=0\}\cap\{\text{small }|x'|\}$ the surface measure of [[def-surface-integral-on-a-compact-c-one-hypersurface]] is $(n-1)$-dimensional Lebesgue measure; $\psi$ compactly supported in the patch gives a compactly supported, smooth boundary restriction $g$. ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]])

[F3] *Scaling.* For measurable nonnegative $h$ and $j>0$, $\int h(jz)j^m\,dz=\int h$ on $\mathbb R^m$ for each $m$. ([[thm-linear-change-of-variables-for-lebesgue-measure]])

[F4] *Almost-everywhere subsequences.* Every $L^q$-convergent sequence, $1\le q<\infty$, has a subsequence converging almost everywhere to a representative of its limit. ([[cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]])

[F5] *Class norms.* $L^q$ norms are computed on almost-everywhere classes and are continuous under strong convergence; $W^{1,p}$ carries the norm of [[def-sobolev-space-wkp-and-its-norm]]. ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-sobolev-space-wkp-and-its-norm]])

## Counterexample

**Proof technique:** direct.

1.1 For all sufficiently large $j$, the support of $\psi(j\cdot)$ on $\Omega$ lies inside the flat patch, where $\Omega$ is the upper half-space; the restriction of the ambient smooth function is therefore smooth up to the boundary and belongs to $W^{1,p}(\Omega)$. By [F3] and the change of variables over that half-space, $\|u_j\|_{L^p(\Omega)}=j^{(n-p)/p}j^{-n/p}\|\psi\|_{L^p(\mathbb R^n_+)}=j^{-1}\|\psi\|_{L^p(\mathbb R^n_+)}$ and $\|Du_j\|_{L^p(\Omega)}=j^{(n-p)/p}j^{1-n/p}\|D\psi\|_{L^p(\mathbb R^n_+)}=\|D\psi\|_{L^p(\mathbb R^n_+)}$, so $\sup_j\|u_j\|_{W^{1,p}(\Omega)}<\infty$ (discarding the finitely many initial indices if needed). [F3, F5, given]

1.2 By [F1] and [F2], $Tu_j$ is the restriction of $u_j$ to $\partial\Omega$, which equals $j^{(n-p)/p}g(jx')$ on the flat patch and $0$ elsewhere. By [F2] and [F3] with $m=n-1$, $\|Tu_j\|_{L^{q_\partial}(\partial\Omega)}^{q_\partial}=j^{(n-p)q_\partial/p}j^{-(n-1)}\|g\|_{L^{q_\partial}}^{q_\partial}=\|g\|_{L^{q_\partial}}^{q_\partial}>0$, because $\frac{(n-p)q_\partial}{p}=n-1$; and $Tu_j(x')\to0$ for every $x'\neq0$ on the patch, since $g$ is compactly supported, while off the patch $Tu_j=0$ for all large $j$. [F1, F2, F3, given]

2.1 Suppose a subsequence of $(Tu_j)$ converged strongly in $L^{q_\partial}(\partial\Omega)$ to some $v$. Then $\|v\|_{L^{q_\partial}}=\|g\|_{L^{q_\partial}}>0$ by continuity of the norm [F5], while by [F4] a further subsequence converges almost everywhere to a representative of $v$; since the traces converge to $0$ at every boundary point except the single point $0$, which has surface measure zero, that representative vanishes almost everywhere, so $\|v\|=0$ by [F5], a contradiction. Hence the bounded $W^{1,p}$-sequence $(u_j)$ has no subsequence whose traces converge strongly at the critical boundary exponent, and the refuted compactness claim is false. The Axiom of Choice is inherited through the trace interface [F1]. [F1, F4, F5, step 1.1, step 1.2] ∎ 
