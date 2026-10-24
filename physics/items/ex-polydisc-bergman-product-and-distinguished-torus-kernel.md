---
id: ex-polydisc-bergman-product-and-distinguished-torus-kernel
kind: example
title: The polydisc Bergman product and the different distinguished-torus Hardy kernel
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 6
proof_strategy: direct
deps:
  - def-balls-and-polydiscs-in-complex-euclidean-space
  - def-countable-choice
  - def-szego-kernel-smooth-bounded-domain
  - def-the-one-dimensional-torus-and-normalized-haar-integral
  - ex-polydisc-boundary-and-the-smooth-szego-hypotheses
  - lem-monomial-bases-of-bergman-spaces-of-disc-ball-and-polydisc
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables
  - lem-sphere-and-torus-monomial-integrals
  - thm-bergman-basis-expansion-and-closedness
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-geometric-series
  - thm-hilbert-space-fourier-expansion
  - thm-absolute-convergence-of-complex-series
  - thm-model-domain-bergman-and-szego-kernels
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  precheck: pass
sources:
  references:
    - title: Jiří Lebl, Tasty Bits of Several Complex Variables (book)
      url: https://www.jirka.org/scv/scv.pdf
      locator: >-
        §5.2, Exercise 5.2.8, printed p. 164: the polydisc Bergman kernel as a
        product; §5.3, printed pp. 165–166: the Hardy boundary space is
        constructed for a smooth boundary, which the polydisc boundary is not
        when $m\ge2$.
    - title: Zbigniew Błocki, The Bergman Kernel and Metric (lecture notes)
      url: https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf
      locator: >-
        §1, printed p. 4: the product formula
        $K_{\Omega_1\times\Omega_2}((z_1,z_2),(w_1,w_2))=K_{\Omega_1}(z_1,w_1)K_{\Omega_2}(z_2,w_2)$.
        The distinguished-torus kernel is the classical polydisc Szegő kernel
        against product Haar measure; the local argument checks it from the
        torus orthonormality.
---

## Example

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) and let $m\ge1$. The Bergman kernel of the polydisc is the product of disc kernels,

$$K_{\mathbb D^m}(z,w)=\prod_{j<m}K_{\mathbb D}(z_j,w_j)=\frac{1}{\pi^m}\prod_{j<m}\frac{1}{(1-z_j\overline{w_j})^2}.$$

If instead one uses the **distinguished torus** $\mathbb T^m$ with product
normalized Haar measure as the boundary, the monomials are orthonormal and the
corresponding reproducing kernel is

$$\Sigma(z,w)=\sum_{\alpha\in\mathbb N^m}z^\alpha\overline{w^\alpha}=\prod_{j<m}\frac{1}{1-z_j\overline{w_j}},$$

with reciprocal power $1$ instead of the Bergman kernel’s $2$. For $m\ge2$, this uses a proper subset of the topological boundary and its product Haar measure; the library’s smooth-hypersurface Szegő definition does not apply to that polydisc. For $m=1$, the torus is the circle and $\Sigma$ is precisely the disc Szegő kernel for normalized surface measure.

## Facts & Assumptions

[A1] The only choice assumption is $\mathrm{AC}_\omega$ ([[def-countable-choice]]), inherited through the Bergman, Hardy and Hilbert-space suppliers; no full Axiom of Choice is used.

[F1] The monomials form complete orthogonal systems of $A^2(\mathbb D)$ and of $A^2(\mathbb D^m)$ with squared norms $\pi/(k+1)$ and $\pi^m/\prod_{j<m}(\alpha_j+1)$ respectively; dividing each monomial by its norm gives a complete orthonormal system ([[lem-monomial-bases-of-bergman-spaces-of-disc-ball-and-polydisc]]).

[F2] For any complete orthonormal system $(e_\alpha)$ of a Bergman space one has $K_\Omega(z,w)=\sum_\alpha e_\alpha(z)\overline{e_\alpha(w)}$, the finite-subset sums converging in $A^2(\Omega)$ ([[thm-bergman-basis-expansion-and-closedness]]).

[F3] The disc kernel is $K_{\mathbb D}(\zeta,\eta)=\frac{1}{\pi(1-\zeta\overline\eta)^2}$, and the polydisc kernel is the displayed product formula ([[thm-model-domain-bergman-and-szego-kernels]]).

[F5] The monomials are orthonormal on the distinguished torus: $\int_{\mathbb T^m}\zeta^\alpha\overline{\zeta^\beta}\,dm_{\mathbb T^m}=\delta_{\alpha\beta}$ ([[lem-sphere-and-torus-monomial-integrals]]).

[F6] For a complete orthonormal family, the finite-subset Fourier sums converge in norm to each vector ([[thm-hilbert-space-fourier-expansion]]).

[F7] For real $0\le r<1$, $\sum_{k\ge0}r^k=\frac{1}{1-r}$ ([[thm-geometric-series]]).

[F8] The inner product is continuous in its second variable: $|\langle f,g\rangle|\le\|f\|_2\|g\|_2$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F9] The polydisc and its distinguished torus are $\mathbb D^m=\{z:|z_j|<1\}$ and $\mathbb T^m$ with product normalized Haar measure ([[def-balls-and-polydiscs-in-complex-euclidean-space]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[F10] For $m\ge2$ the topological boundary of the polydisc is not a $C^1$ hypersurface, so the library's surface-measure Szegő definition does not apply to it; the distinguished torus is a proper subset of that boundary ([[ex-polydisc-boundary-and-the-smooth-szego-hypotheses]], [[def-szego-kernel-smooth-bounded-domain]]).

[F12] Under $\mathrm{AC}_\omega$, complex $L^2$ is Hilbert; a closed linear subspace is therefore complete ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F13] A locally uniform limit of holomorphic functions is holomorphic ([[thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables]]).

[F14] Every absolutely convergent complex series converges ([[thm-absolute-convergence-of-complex-series]]).

## Verification

**Proof technique:** direct, from the complete polydisc monomial system and torus orthonormality.

**Given:** $\mathrm{AC}_\omega$, the unit polydisc $\mathbb D^m$ with Lebesgue measure, and the distinguished torus $\mathbb T^m$ with product normalized Haar measure.

1.1 By [F1] and [F2], the complete monomial expansion is $K_{\mathbb D^m}(z,w)=\pi^{-m}\sum_{\alpha\in\mathbb N^m}\prod_{j<m}(\alpha_j+1)(z_j\overline{w_j})^{\alpha_j}$. The model theorem [F3] identifies this sum as $\pi^{-m}\prod_{j<m}(1-z_j\overline{w_j})^{-2}$, and its disc formula identifies each factor as $K_{\mathbb D}(z_j,w_j)$. This is the stated Bergman product. [A1, F1, F2, F3]

1.2 The monomial classes are orthonormal by [F5]. Let $H^2_\partial$ be their closed linear span in the Hilbert space [F12]; they form a complete orthonormal system there by construction. For $z\in\mathbb D^m$, [F7] gives $\sum_\alpha|z^\alpha|^2=\prod_{j<m}(1-|z_j|^2)^{-1}<\infty$. More strongly, $\sum_\alpha|z^\alpha|=\prod_{j<m}(1-|z_j|)^{-1}<\infty$: box partial sums of the nonnegative family factor as products of finite geometric sums, and every finite index set lies in a box. Thus $\Sigma(z,\zeta):=\sum_\alpha z^\alpha\overline{\zeta^\alpha}$ converges absolutely and uniformly for $\zeta\in\mathbb T^m$. For complex $|t|<1$, absolute convergence follows from $\sum_{k\ge0}|t|^k<\infty$, so [F14] supplies the complex sum. The finite telescoping identity $(1-t)\sum_{k=0}^Nt^k=1-t^{N+1}$ gives $\sum_{k\ge0}t^k=(1-t)^{-1}$, since the real geometric convergence in [F7] makes $|t|^{N+1}\to0$. Applying this identity coordinatewise and taking limits of finite box products gives $\Sigma(z,\zeta)=\prod_{j<m}(1-z_j\overline{\zeta_j})^{-1}$. Haar measure has mass one, so uniform convergence implies $L^2$ convergence; conjugating the polynomial sums shows $k_z:=\overline{\Sigma(z,\cdot)}\in H^2_\partial$, with $\|k_z\|_2^2=\sum_\alpha|z^\alpha|^2$. [A1, F5, F7, F9, F12, F14, algebra]

2.1 Let $f\in H^2_\partial$. By [F6] its Fourier sums $p_N(\zeta)=\sum_{|\alpha|\le N}c_\alpha\zeta^\alpha$, with $c_\alpha=\langle f,\zeta^\alpha\rangle$, converge in $L^2$ to $f$; degree cutoffs contain every finite index set eventually. Orthogonality gives $\sum_\alpha|c_\alpha|^2=\|f\|_2^2$ by passing to the limit in $\|p_N\|_2^2$. Cauchy–Schwarz and step 1.2 show that $\widetilde f(z):=\sum_\alpha c_\alpha z^\alpha$ is absolutely convergent. On $|z_j|\le r_j<1$, the degree tail is bounded by $(\sum_{|\alpha|>N}|c_\alpha|^2)^{1/2}\prod_{j<m}(1-r_j^2)^{-1/2}$, which tends to zero uniformly. The polynomial extensions therefore converge locally uniformly, and [F13] makes $\widetilde f$ holomorphic. Pairing the finite sums with $k_z$ and passing to the norm limit gives $\langle f,k_z\rangle=\widetilde f(z)$ and $|\widetilde f(z)|\le\|f\|_2\prod_{j<m}(1-|z_j|^2)^{-1/2}$. The extension of $k_w$ has coefficients $\overline{w^\alpha}$, so its value at $z$ is $\Sigma(z,w)$, the displayed reproducing kernel. [A1, F5, F6, F8, F12, F13, step 1.2]

3.1 The Bergman product in step 1.1 has reciprocal powers $2$, whereas the torus kernel in steps 1.2–2.1 has powers $1$. For $m\ge2$, [F10] shows that the distinguished torus is a proper subset of the nonsmooth topological boundary, so the surface-measure Szegő definition does not apply to $\mathbb D^m$. For $m=1$, the torus is $\partial\mathbb D$ and [F3] gives the same normalized-circle Szegő kernel $(1-z\overline w)^{-1}$. These are exactly the asserted comparisons. [F3, F9, F10, step 1.1, step 1.2, step 2.1] ∎
