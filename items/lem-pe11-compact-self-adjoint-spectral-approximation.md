---
id: lem-pe11-compact-self-adjoint-spectral-approximation
kind: lemma
title: Spectral convergence under collectively compact positive approximations
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - thm-spectral-theorem-for-compact-self-adjoint-operators
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - thm-rank-nullity
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - def-countable-choice
  - thm-bolzano-weierstrass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Peter Monk, Finite Element Methods for Maxwell's Equations, Oxford
        University Press, 2003
      url: https://djvu.online/file/jcJa2PquKRPxA
      locator: "§2.3.4, Theorem 2.52: isolated eigenvalue clusters for collectively
        compact operator approximation."
    - title: Daniele Boffi, Finite element approximation of eigenvalue problems,
        complete Pavia course notes, 2017
      url: https://www-dimat.unipv.it/boffi/download/pavia2017.pdf
      locator: "Slides/pages 102–108: compact solution operators, discrete
        eigenproblems, absence of spurious eigenvalues, full multiplicity and
        eigenspace-gap convergence."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Let $H$ be a real Hilbert space. Let $T:H\to H$
and $T_n:H\to H$ be compact, self-adjoint, nonnegative operators. Assume
$T_nx\to Tx$ in norm for every $x\in H$, $\sup_n\|T_n\|<\infty$, and the
family is sequentially collectively compact: for every strictly increasing
sequence $(n_j)$ and every bounded sequence $(x_j)$, the sequence
$(T_{n_j}x_j)$ has a norm-convergent subsequence. Then:

1. For every strictly increasing sequence $(n_j)_{j\ge1}$ in $\mathbb N$, if
   $\mu_j>0$ is an eigenvalue of $T_{n_j}$ and $\mu_j\to\mu>0$, then $\mu$
   is an eigenvalue of $T$. Thus no positive spectral limit is spurious.
2. If $\mu>0$ is an isolated eigenvalue of $T$ with multiplicity
   $m=\dim\ker(T-\mu I)$, then for all sufficiently large $n$ the open
   interval $I=(\mu-\delta,\mu+\delta)$, chosen so that
   $\mu-\delta>0$ and $\overline I\cap\sigma(T)=\{\mu\}$, contains exactly
   $m$ eigenvalues of $T_n$, counted with multiplicity. Their distance to
   $\mu$ tends to zero, and the associated eigenspaces converge to
   $\ker(T-\mu I)$ in symmetric $H$-gap.

Here $\sigma(T)$ denotes the spectrum, and the symmetric gap between
finite-dimensional subspaces $E,F$ is
$$\max\left\{\sup_{x\in E,\,\|x\|=1}\operatorname{dist}(x,F),\ \sup_{y\in F,\,\|y\|=1}\operatorname{dist}(y,E)\right\}.$$

## Facts & Assumptions

**Given:** Countable Choice; a real Hilbert space $H$; compact nonnegative self-adjoint operators $T,T_n$ satisfying the strong-convergence, uniform operator-bound and sequential collective-compactness hypotheses.

[A1] Countable Choice is assumed in the compact self-adjoint spectral theorem and selects the eigenvectors and cluster vectors used in the sequential contradictions below. ([[def-countable-choice]])

[F1] A compact self-adjoint operator has finite-dimensional eigenspaces for nonzero eigenvalues, and its nonzero spectral subspace is the orthogonal sum of those eigenspaces; for every $\varepsilon>0$, only finitely many nonzero eigenvalues have absolute value at least $\varepsilon$. ([[thm-spectral-theorem-for-compact-self-adjoint-operators]])

[F2] A linear map from an $m$-dimensional space to a space of dimension less than $m$ has a nonzero kernel. ([[thm-rank-nullity]])

[F3] A closed subspace of a Hilbert space has an orthogonal projection, and the distance to it is the norm of the orthogonal residual. ([[thm-orthogonal-decomposition-by-a-closed-subspace]])

[F4] Every bounded real sequence has a convergent subsequence. ([[thm-bolzano-weierstrass]])

## Proof

**Given:** The data in the statement, an isolated positive eigenvalue $\mu$ of $T$, and a closed interval $\overline I\subset(0,\infty)$ containing no point of $\sigma(T)$ other than $\mu$.

1.1 Let $n_1<n_2<\cdots$ and let $\mu_j>0$ be eigenvalues of $T_{n_j}$ converging to $\nu>0$, and choose unit eigenvectors $x_j$ with $T_{n_j}x_j=\mu_jx_j$. Sequential collective compactness gives a subsequence for which $T_{n_j}x_j\to y$. Since $\mu_j\to\nu>0$, $x_j\to x:=y/\nu$ and $\|x\|=1$. The uniform operator bound gives $\|T_{n_j}(x_j-x)\|\le (\sup_n\|T_n\|)\|x_j-x\|\to0$; strong convergence gives $T_{n_j}x\to Tx$. Hence $Tx=y=\nu x$, so $\nu$ is an eigenvalue of $T$. [A1, given, choose, algebra]

1.2 By [F1], $E:=\ker(T-\mu I)$ is finite-dimensional; write $m=\dim E$. Choose $\delta>0$ so that $I=(\mu-\delta,\mu+\delta)$ has $\mu-\delta>0$ and $\overline I\cap\sigma(T)=\{\mu\}$. Let $E_n$ be the orthogonal sum of the eigenspaces of $T_n$ whose eigenvalues lie in $I$. This sum is finite-dimensional because [F1] permits only finitely many eigenvalues outside a neighborhood of zero, and $I$ stays away from zero. [F1, given, choose]

2.1 If $\dim E_n<m$ for infinitely many $n$, the orthogonal projection $P_n:H\to E_n$ restricts to a linear map from $E$ to a space of dimension less than $m$. By [F2] choose a unit $x_n\in E$ with $P_nx_n=0$. The compact self-adjoint spectral expansion of $T_n$ then gives $\|(T_n-\mu I)x_n\|\ge\delta$, since every spectral value in the orthogonal complement of $E_n$ is at distance at least $\delta$ from $\mu$. Strong convergence is uniform on the finite-dimensional unit sphere of $E$: for an orthonormal basis $e_1,\ldots,e_m$, write $x=\sum_i c_ie_i$ and bound $\|(T_n-T)x\|\le\sum_i|c_i|\|(T_n-T)e_i\|$. Since $Tx_n=\mu x_n$, this uniform convergence contradicts the lower bound. Therefore $\dim E_n\ge m$ for all sufficiently large $n$. [A1, F1, F2, given, step 1.2, algebra]

3.1 If $\dim E_n\ge m+1$ for infinitely many $n$, select $m+1$ orthonormal eigenvectors $x_{n,1},\ldots,x_{n,m+1}$ in $E_n$. Apply [F4] successively to these finitely many eigenvalue sequences to obtain one subsequence on which all converge in $\overline I$. By step 1.1 every such limit is in $\sigma(T)$, hence equals $\mu$. Sequential collective compactness, applied successively to the finite list of sequences $T_nx_{n,i}$, gives a subsequence on which all these images converge. Their eigenvalues stay bounded away from zero, so all $x_{n,i}$ converge in norm. Their limits remain orthonormal and, by step 1.1, lie in $E$, contradicting $\dim E=m$. Thus $\dim E_n\le m$ for all sufficiently large $n$, and together with step 2.1 the dimension equals $m$. [A1, F1, F4, step 1.1, step 2.1, algebra]

4.1 The eigenvalues of $T_n$ in $I$ all converge to $\mu$: otherwise a subsequence stays a positive distance from $\mu$ and has a convergent subsequence in $\overline I$ by [F4]; step 1.1 makes its limit a spectral point of $T$, while $\overline I\cap\sigma(T)=\{\mu\}$. Let $E_n$ continue to denote the $m$-dimensional cluster subspace. If unit vectors $x_n\in E_n$ had $\operatorname{dist}(x_n,E)\ge\varepsilon>0$, the convergence just proved would give $\|(T_n-\mu I)x_n\|\to0$. Collective compactness yields a subsequence with $T_nx_n$ convergent; then $x_n$ converges to a unit $x$ and the argument of step 1.1 gives $Tx=\mu x$, contradicting the distance bound. Thus $\sup_{x\in E_n,\|x\|=1}\operatorname{dist}(x,E)\to0$. [A1, F4, given, step 1.1, step 3.1, algebra]

5.1 For $x\in E$, let $P_n$ be the orthogonal projection onto $E_n$. On $E_n^\perp$, the spectrum of $T_n$ stays at distance at least $\delta$ from $\mu$. The spectral expansion therefore gives $\|x-P_nx\|\le\delta^{-1}\|(T_n-\mu I)x\|$. Strong convergence of $T_n$ to $T$ is uniform on the finite-dimensional space $E$, and $Tx=\mu x$ there, so the right side tends uniformly to zero for unit $x\in E$. Hence $\sup_{x\in E,\|x\|=1}\operatorname{dist}(x,E_n)\to0$. Combined with the directed-gap limit proved in step 4.1, this is symmetric-gap convergence. The multiplicity and no-pollution conclusions follow. [F1, F3, given, step 4.1, algebra] ∎

## Source notes

Boffi's complete course notes develop compact solution operators, absence of spurious modes, full multiplicity and eigenspace-gap convergence in the general Galerkin setting (slides 102–108). This carrier proves the self-adjoint positive operator version locally; the source does not replace that argument.
