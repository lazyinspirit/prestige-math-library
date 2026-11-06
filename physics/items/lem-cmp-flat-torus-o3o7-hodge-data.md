---
id: lem-cmp-flat-torus-o3o7-hodge-data
kind: lemma
title: "Flat complex three-torus O3/O7 parity data"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
category: string-theory
axiom_strength: ZF; the Fourier and lattice arguments use no choice principle.
deps:
  - lem-cmp-o3o7-geometric-parity-consequences
dependency_roles:
  lem-cmp-o3o7-geometric-parity-consequences: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Mariana Graña, Athanasia Ksagoni, Praxitelis Ntokos, and Hagen Triendl, String Theory Compactifications, SpringerBriefs in Physics (2017)"
      url: "https://djvu.online/file/qufswWArYbwIP"
      locator: "§6.2, printed pp. 64–65; the factorized six-torus, its Hodge numbers, and the O3 involution."
    - title: "Thomas W. Grimm and Jan Louis, The effective action of N=1 Calabi-Yau orientifolds, arXiv:hep-th/0403067v3"
      url: "https://arxiv.org/pdf/hep-th/0403067v3"
      locator: "§3.1, PDF pp. 8–10; harmonic-form parity and the O3/O7 cohomology split."
---

## Statement

Let $E=\mathbb C/(\mathbb Z+i\mathbb Z)$ and $X=E^3$. Write $z_j=x_j+i y_j$ for the coordinates on the covering space, with $x_j,y_j$ of period $1$, and give $X$ the descended flat metric $g=\sum_{j=1}^3(dx_j^2+dy_j^2)$, Kähler form $J=\sum_{j=1}^3dx_j\wedge dy_j=\frac{i}{2}\sum_{j=1}^3dz_j\wedge d\bar z_j$, and nowhere-zero holomorphic form $\Omega=dz_1\wedge dz_2\wedge dz_3$. Use the Hodge-space definitions of the preceding lemma `lem-cmp-o3o7-geometric-parity-consequences`: on smooth complex-valued $(p,q)$-forms $\mathcal A^{p,q}(X)$, $H^{p,q}(X)=\ker(\bar\partial:\mathcal A^{p,q}\to\mathcal A^{p,q+1})/\operatorname{im}(\bar\partial:\mathcal A^{p,q-1}\to\mathcal A^{p,q})$. The map $\sigma([z_1,z_2,z_3])=[-z_1,-z_2,-z_3]$ is a holomorphic isometric involution with $\sigma^*J=J$ and $\sigma^*\Omega=-\Omega$. It has exactly $64$ fixed points. For every $0\le p,q\le3$, the Dolbeault cohomology has dimension $h^{p,q}(X)=\binom{3}{p}\binom{3}{q}$, and $\sigma^*$ acts on it by $(-1)^{p+q}$. In particular, $h^{1,1}_+=9$, $h^{1,1}_-=0$, $h^{2,1}_+=0$, and $h^{2,1}_-=9$.

## Statement references

[[lem-cmp-o3o7-geometric-parity-consequences]]

[Graña, Ksagoni, Ntokos, and Triendl, §6.2](https://djvu.online/file/qufswWArYbwIP)

[Grimm and Louis, §3.1](https://arxiv.org/pdf/hep-th/0403067v3)

## Facts & Assumptions

**Given:** The additive lattice $\Lambda=(\mathbb Z+i\mathbb Z)^3\subset\mathbb C^3$, the quotient complex structure on $X=\mathbb C^3/\Lambda$, its induced flat metric, and $\sigma([z])=[-z]$.

[F1] [[lem-cmp-o3o7-geometric-parity-consequences]] proves that a holomorphic isometric involution with $\sigma^*\Omega=-\Omega$ preserves Hodge type and splits cohomology and harmonic forms into its $+1$ and $-1$ eigenspaces.

## Proof

**Proof technique:** direct quotient, Fourier, and eigenspace calculation.

**Given:** The quotient and involution in the Statement; use the complex orientation and the standard Euclidean metric on $\mathbb C^3$.

1.1 The six vectors $e_j,ie_j$ form a real basis of $\mathbb C^3$, so $\Lambda$ is a discrete full-rank lattice. Its translation action is free. For each compact $K\subset\mathbb C^3$, any translate $K+\lambda$ meeting $K$ has $\lambda\in K-K$, a bounded set containing only finitely many lattice points, so the action is properly discontinuous. The closed unit fundamental parallelepiped is compact and maps onto $X$. Small balls of radius below half the shortest nonzero lattice length give quotient charts with translation transition maps; these are holomorphic. Thus $X$ is a smooth compact complex threefold, the metric descends, $J$ is positive and closed, and $\Omega$ descends nowhere zero. [given, construct, algebra]

1.2 Write $q=(x_1,y_1,x_2,y_2,x_3,y_3)$ for the unit-torus coordinates, let $\Delta=\sum_{j=1}^6\partial_{q_j}^2$, and for $k\in\mathbb Z^6$ put $\widehat f(k)=\int_{[0,1]^6}f(q)e^{-2\pi i k\cdot q}\,dq$. Periodic integration by parts gives $(1+4\pi^2|k|^2)^N\widehat f(k)=\widehat{(1-\Delta)^Nf}(k)$ for every integer $N\ge0$, hence $|\widehat f(k)|\le\|(1-\Delta)^Nf\|_{L^1}(1+4\pi^2|k|^2)^{-N}$. Here $|k|^2=\sum_{j=1}^6k_j^2$ and $|k|_\infty=\max_j|k_j|$. For $m\ge1$, the shell $m\le|k|_\infty<m+1$ has $(2m+1)^6-(2m-1)^6\le728m^5$ points. Thus for each derivative order $r$, choosing $N$ with $2N-r>6$ makes the Fourier series $\sum_k\widehat f(k)e^{2\pi i k\cdot q}$ and its termwise derivatives of order at most $r$ absolutely and uniformly convergent. Uniform convergence of all these differentiated series, together with the fundamental theorem of calculus along coordinate segments, gives a smooth sum. To show it equals $f$, the kernels $F_N(t)=(N+1)^{-1}|\sum_{j=0}^Ne^{2\pi ijt}|^2$ on $\mathbb R/\mathbb Z$ are nonnegative and have integral one by expansion of the finite square. The geometric-sum formula gives $F_N(t)\le((N+1)\sin^2(\pi\delta))^{-1}$ whenever the distance from $t$ to $\mathbb Z$ is at least $\delta\in(0,1/2)$. Their sixfold products have mass outside the cube where all coordinate distances are less than $\delta$ at most the sum of the six one-dimensional tail masses, which tends to zero. Uniform continuity of $f$ therefore makes convolution with these product kernels converge uniformly to $f$. Expanding the finite squares shows each convolution is a trigonometric polynomial with coefficients given by finite Fejér weights times $\widehat f(k)$; consequently a continuous periodic function with all Fourier coefficients zero is zero. Termwise integration shows the uniformly convergent Fourier series has the same coefficients as $f$, so its sum is $f$. Applying the same argument to every derivative proves convergence in $C^\infty$, componentwise for smooth $(p,q)$-forms. [given, algebra]

2.1 Every smooth $(p,q)$-form on $X$ therefore has a Fourier expansion with constant $(p,q)$-form coefficients multiplying $e_k(x,y)=\exp(2\pi i\sum_j(m_jx_j+n_jy_j))$, for $k=(m,n)\in\mathbb Z^6$. On the $k$th mode, $\bar\partial$ is wedge multiplication by $\xi_k^{0,1}=\pi\sum_j(i m_j-n_j)d\bar z_j$. If $k\ne0$, write $\lambda_j=\pi(i m_j-n_j)$ and set $v_k=\sum_j\bar\lambda_j(\sum_\ell|\lambda_\ell|^2)^{-1}\partial/\partial\bar z_j$; then $\xi_k^{0,1}(v_k)=1$ and $\|v_k\|=O(\|k\|^{-1})$. Contraction satisfies $\iota_{v_k}(\xi_k^{0,1}\wedge\eta)+\xi_k^{0,1}\wedge\iota_{v_k}\eta=\eta$ for each constant coefficient form $\eta$; hence every $\bar\partial$-closed nonzero Fourier mode is $\bar\partial$-exact. The rapid coefficient decay in step 1.2 and the bound on $\|v_k\|$ show that the resulting primitive series and all its derivatives converge uniformly, so it is a smooth primitive. [given, step 1.2, algebra]

2.2 Negation preserves the lattice and the flat metric, squares to the identity, and pulls back every $dz_j$ and $d\bar z_j$ to its negative. It therefore preserves $J$ and sends $\Omega$ to $(-1)^3\Omega=-\Omega$. [given, step 1.1, algebra]

3.1 A fixed point satisfies $2z_j\in\mathbb Z+i\mathbb Z$ for each $j$. In one factor $E$, the four solutions modulo the lattice are $0$, $\frac12$, $\frac{i}{2}$, and $\frac{1+i}{2}$. The three coordinates are independent, so $|\operatorname{Fix}(\sigma)|=4^3=64$. Each is isolated because $D\sigma=-I$ has no $+1$ eigenvector; by [F1] this agrees with the complex-dimension-zero case of the fixed-locus conclusion. [given, F1, step 2.2, algebra]

4.1 The zero Fourier modes are constant forms and are $\bar\partial$-closed. The average of a $\bar\partial$ of a periodic form is zero, so no nonzero constant form is exact. Thus constant forms give all of $H^{p,q}(X)$. A basis consists of wedges of $p$ distinct $dz_j$ and $q$ distinct $d\bar z_j$, giving dimension $\binom{3}{p}\binom{3}{q}$. Negation multiplies each basis form by $(-1)^{p+q}$, so the stated parity dimensions follow; in particular the four listed dimensions are $9,0,0,9$. [given, step 2.1, algebra] ∎

## Remarks

This is a mathematical calculation of the geometry and parity eigenspaces. Interpreting the $64$ isolated fixed points as O3-plane loci uses the Type IIB orientifold convention in the paired physical definition; this item itself asserts no source charge, tadpole cancellation, or string background solution.
