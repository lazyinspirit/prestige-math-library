---
page: nonuniform-fast-fourier-transforms
title: Nonuniform fast fourier transforms
status: published
requires:
  - computed-fast-transforms-and-convolution
items:
  - def-nufft-finite-array-norms
  - def-nufft-periodized-gaussian-gridding-kernel
  - lem-nufft-finite-euclidean-norm-triangle
  - def-nufft-transform-types-and-mode-conventions
  - lem-nufft-gaussian-periodization-converges
  - lem-nufft-gaussian-image-tail-bound
  - lem-nufft-gaussian-periodization-fourier-series
  - lem-nufft-gaussian-spread-truncation-tail
  - lem-nufft-gaussian-grid-alias-identity-and-bound
  - alg-nufft-certified-gaussian-gridding-type1-type2
  - lem-nufft-certified-gaussian-gridding-returns-a-status
  - thm-nufft-gaussian-gridding-error-and-type2-adjoint
examples: []
---

## Scope and conventions

For type 1, finitely many weighted points on the period-one torus are mapped to integer Fourier modes. Type 2 is the matching conjugate-transpose map from modes back to the same points. Type 3 uses separately supplied real frequencies and has no implicit wrapping, frequency scaling, or type-1 complexity guarantee. The signs, domains and normalizations are fixed in [[def-nufft-transform-types-and-mode-conventions]].

The finite-array l1, Euclidean, and maximum norms used for data and certificates are fixed, including their empty-array convention, in [[def-nufft-finite-array-norms]].

## Gaussian gridding

The periodized Gaussian is defined and shown locally uniformly convergent in [[def-nufft-periodized-gaussian-gridding-kernel]] and [[lem-nufft-gaussian-periodization-converges]]. Its Fourier coefficients and uniform Fourier expansion are proved in [[lem-nufft-gaussian-periodization-fourier-series]]. The finite image sum has an explicit omitted-image bound, while the source-centered finite spread has its own tail bound; these are distinct truncations with different constants.

The factorization below names the operators used by the type-1 procedure. Here $S$ is the finite-width spread matrix, $Q$ is the grid DFT with coefficient $1/P$, and $D$ is the diagonal matrix of positive Gaussian mode multipliers. The type-2 procedure applies the conjugate transposes in reverse order. The diagram records the factorization only; all error estimates are proved algebraically in [[lem-nufft-gaussian-grid-alias-identity-and-bound]] and [[thm-nufft-gaussian-gridding-error-and-type2-adjoint]].

~~~tikz
\begin{tikzpicture}[>=stealth, node distance=2.1cm]
\node (c) {$c\in\mathbb C^N$};
\node[draw, rounded corners, right of=c] (spread) {$S$\; finite Gaussian spread};
\node[right of=spread] (grid) {$g\in\mathbb C^P$};
\node[draw, rounded corners, right of=grid] (dft) {$Q$\; normalized grid DFT};
\node[right of=dft] (modes) {$Qg$};
\node[draw, rounded corners, right of=modes] (deconv) {$D^{-1}$\; deconvolution};
\node[right of=deconv] (f) {$\widehat F$};
\draw[->] (c) -- (spread);
\draw[->] (spread) -- (grid);
\draw[->] (grid) -- (dft);
\draw[->] (dft) -- (modes);
\draw[->] (modes) -- (deconv);
\draw[->] (deconv) -- (f);
\end{tikzpicture}
~~~

The normalized grid transform in the diagram has entries $P^{-1}e^{-2\pi i k\cdot\ell/M}$, equivalently $P^{-1/2}$ times the unitary grid transform. Signed mode $k$ is extracted from, or embedded into, the FFT slot $\kappa(k)=(k_r\bmod M_r)_r$; $M_r>2K_r$ makes the slots distinct. The algorithm returns `inconclusive` when an interval, range, denominator, FFT, or twiddle check fails, and returns `inconclusive` with reason `requested-tolerance-not-met` when every finite candidate has valid bounds above the requested positive tolerance. Only a candidate whose complete outward error bound meets that tolerance is returned as certified. On successful candidates, the theorem separates the infinite-grid alias term, the finite-spread tail, and the finite-arithmetic radius. For fixed dimension and bounded width and image cutoffs, its scalar work is $O(P\log P+Nw^d)$ apart from the stated elementary-range evaluator work.

The prerequisite [[computed-fast-transforms-and-convolution]] supplies the computed FFT and its rigorous error bound. The published [[outward-rounded-interval-and-ball-arithmetic]] supplies the interval, outward-operation and elementary-range interfaces used directly by the certificate; these existing proved suppliers discharge the planned interval-arithmetic interface. The type-1 coordinate radii explicitly add the computed FFT's normwise error after unitary normalization and positive deconvolution, separately from uncertainty in the spread-grid centers.
