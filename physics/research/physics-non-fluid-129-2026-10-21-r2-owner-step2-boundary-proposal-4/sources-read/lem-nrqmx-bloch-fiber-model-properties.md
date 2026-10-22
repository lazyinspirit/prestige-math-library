---
id: lem-nrqmx-bloch-fiber-model-properties
kind: lemma
domain: mathematics
library: mathematics
title: Exact Bloch transform and regularity of gapped band projectors
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
deps:
  - def-nrqmx-bloch-fiber-model
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - thm-parseval-equivalences-for-a-complete-orthonormal-family
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-cauchy-integral-formula-circle
  - def-countable-choice
dependency_roles:
  def-nrqmx-bloch-fiber-model: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  thm-cauchy-integral-formula-circle: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: János K. Asbóth, László Oroszlány, and András Pályi, A Short Course on Topological Insulators
      url: https://arxiv.org/pdf/1509.02295
      locator: Chapter 2, §§2.1.1, 2.3.1, and 2.3.4.
    - title: David Tong, Applications of Quantum Mechanics, University of Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf
      locator: Chapter 2, §§2.1.1 and 2.3.1.
---

## Statement

Assume Countable Choice and the data of [[def-nrqmx-bloch-fiber-model]]. The finite-range operator $H_0$ extends uniquely to a bounded self-adjoint operator $H$ on $\ell^2(\mathbb Z^d;\mathbb C^r)$, and $\mathcal F_0$ extends uniquely to a unitary map $\mathcal F:\mathcal H\to L^2(\mathbb T^d_{2\pi};\mathbb C^r)$. For every $k$, $h(k)$ is Hermitian, $\|h(k)\|\le\sum_{\delta\in S}\|T_\delta\|$, and

$$ (\mathcal F H\mathcal F^{-1}f)(k)=h(k)f(k) $$

as an equality in $L^2$. The matrix family $h$ is $C^\infty$. If a nonempty consecutive eigenvalue block is separated from its complement by a uniform gap $\gamma>0$, its orthogonal spectral projector $P(k)$ is $C^\infty$ and is locally the Riesz projection

$$ P(k)=\frac{1}{2\pi i}\oint_\Gamma(zI-h(k))^{-1}\,dz, $$

where $\Gamma$ is a fixed finite union of positively oriented circles separating the selected eigenvalues from the others on the neighborhood in question.

## Statement references

[[def-nrqmx-bloch-fiber-model]]

[[thm-fourier-basis-and-parseval-on-the-n-torus]]

[[thm-parseval-equivalences-for-a-complete-orthonormal-family]]

[[thm-complex-spectral-theorem-for-normal-endomorphisms]]

[[thm-cauchy-integral-formula-circle]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice and the finite set of matrices and transforms in the Definition.

[A1] Countable Choice is the principle in [[def-countable-choice]]; it is an explicit hypothesis of the two Fourier suppliers used here.

[F1] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: under Countable Choice, the characters $e_n(x)=e^{2\pi i n\cdot x}$ form a complete orthonormal family in scalar $L^2(\mathbb T^d)$. Its scalar pairing is $\int f\overline g$ (linear in the first variable); orthonormality and completeness are unchanged when the pairing is conjugated.

[F2] [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]: for a complete orthonormal family, Parseval's equality gives the squared norm as the sum of squared Fourier coefficients. The norm identity is the same under either Hermitian-inner-product convention.

[F3] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: every finite-dimensional complex Hermitian endomorphism has an orthonormal eigenbasis with real eigenvalues.

[F4] [[thm-cauchy-integral-formula-circle]]: for a scalar $\lambda$ inside a positively oriented circle $\Gamma$, $(2\pi i)^{-1}\oint_\Gamma(z-\lambda)^{-1}dz=1$. The exterior value zero is proved directly in step 2.1.

## Proof

**Given:** [A1], [F1]–[F4], and the data in the Definition.

1.1 For finitely supported $\psi$, each shift $\psi_n\mapsto\psi_{n-\delta}$ preserves the $\ell^2$ norm, so the triangle inequality gives $\|H_0\psi\|_2\le(\sum_{\delta\in S}\|T_\delta\|)\|\psi\|_2$. Hence $H_0$ extends uniquely to a bounded operator $H$. For finitely supported $\psi,\phi$, reindexing the finite sum gives $\langle H_0\psi,\phi\rangle=\sum_{m,\delta}\langle T_\delta\psi_m,\phi_{m+\delta}\rangle=\sum_{m,\delta}\langle\psi_m,T_\delta^*\phi_{m+\delta}\rangle=\langle\psi,H_0\phi\rangle$, because $T_\delta^*=T_{-\delta}$ and $S=-S$. Density and boundedness extend symmetry to all of $\mathcal H$, so $H=H^*$. [given, algebra]

1.2 Under $k=2\pi x$, the functions $e^{-ik\cdot n}$ are the characters $e_{-n}(x)$. For each internal coordinate $a$, the corresponding scalar character family is complete and Parseval by [F1] and [F2]; summing the $r$ coordinate norm identities proves $\|\mathcal F_0\psi\|_{\mathcal K}=\|\psi\|_{\mathcal H}$. This norm identity agrees with the conjugate-linear-first pairings fixed in the Definition. The range contains every vector-valued trigonometric polynomial, a dense subspace of $\mathcal K$ by [F1] coordinatewise. Hence $\mathcal F_0$ extends uniquely to an isometry $\mathcal F:\mathcal H\to\mathcal K$. Its range is closed because $\mathcal H$ is complete, and contains a dense subspace, so it is all of $\mathcal K$. Therefore $\mathcal F$ is unitary. [A1, F1, F2, given]

1.3 Direct substitution and the change of index $m=n-\delta$ give, for finitely supported $\psi$, $\mathcal F_0(H_0\psi)(k)=\sum_{\delta\in S}T_\delta e^{-ik\cdot\delta}\sum_m\psi_m e^{-ik\cdot m}=h(k)\mathcal F_0\psi(k)$. The finite sum defining $h$ is continuous and satisfies $\sup_k\|h(k)\|\le\sum_{\delta\in S}\|T_\delta\|$, so multiplication by $h$ is bounded on $L^2$. Extending the identity from the dense finitely supported sequences proves the claimed unitary equivalence. Also, $h(k)^*=\sum_\delta T_\delta^*e^{ik\cdot\delta}=\sum_\delta T_{-\delta}e^{-ik\cdot(-\delta)}=h(k)$, and its entries are trigonometric polynomials, hence smooth. [given, algebra]

1.4 Write the eigenvalues of $h(k)$ in nondecreasing order as $\lambda_1(k)\le\cdots\le\lambda_r(k)$. For a Hermitian matrix $A$ with eigenbasis $e_1,\ldots,e_r$, its $j$th eigenvalue satisfies $\lambda_j(A)=\max_{\dim L=r-j+1}\min_{\|v\|=1,\,v\in L}\langle Av,v\rangle$: every such $L$ intersects $\operatorname{span}(e_1,\ldots,e_j)$ nontrivially, while $L=\operatorname{span}(e_j,\ldots,e_r)$ attains the value. Since every unit-vector Rayleigh quotient changes by at most $\|A-B\|$ when $A$ is replaced by $B$, this formula gives $|\lambda_j(A)-\lambda_j(B)|\le\|A-B\|$. Thus each $\lambda_j(k)$ is continuous. [F3, given, algebra]

2.1 Fix $k_0$. The gap and continuity in step 1.4 let us choose disjoint small circles around the distinct eigenvalues in the selected block at $k_0$ so that, on some neighborhood of $k_0$, all selected eigenvalues stay inside their union and all complementary eigenvalues stay outside. The inverse matrix $(zI-h(k))^{-1}$ is $C^\infty$ in $k$ on this fixed contour: differentiating the inverse gives $\partial_j(zI-h)^{-1}=(zI-h)^{-1}(\partial_jh)(zI-h)^{-1}$, and repeated differentiation gives finite sums of products of smooth matrices. Therefore its contour integral is $C^\infty$. At each $k$, [F3] diagonalizes $h(k)$ and [F4] gives $2\pi i$ for an eigenvalue inside a component circle. For an exterior eigenvalue $\lambda$, write that circle as $z=c+Re^{it}$ and put $q=R/|\lambda-c|<1$. The finite geometric identity gives $(z-\lambda)^{-1}=-\sum_{j=0}^N(z-c)^j/(\lambda-c)^{j+1}+r_N(z)$ with $\sup|r_N|\le q^{N+1}/(|\lambda-c|(1-q))$. Each polynomial term integrates to zero because $\oint(z-c)^jdz=iR^{j+1}\int_0^{2\pi}e^{i(j+1)t}dt=0$, and the remainder integral is bounded by $2\pi R\sup|r_N|\to0$. Thus the scalar exterior integral is zero. Summing the component circles gives coefficient $1$ on the selected eigenvalues and $0$ on their complement, proving that the matrix contour integral is exactly the selected orthogonal projector. On overlaps the local definitions project onto the same selected eigenspaces, so they agree and define the asserted global projector. [F3, F4, step 1.4, given, algebra] ∎
