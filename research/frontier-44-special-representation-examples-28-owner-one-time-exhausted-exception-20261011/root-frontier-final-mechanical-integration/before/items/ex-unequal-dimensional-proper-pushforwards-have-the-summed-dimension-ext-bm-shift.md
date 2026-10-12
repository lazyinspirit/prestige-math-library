---
id: ex-unequal-dimensional-proper-pushforwards-have-the-summed-dimension-ext-bm-shift
kind: example
title: "Unequal-dimensional proper pushforwards carry the summed-dimension Ext/Borel–Moore degree"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 23
deps: [cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary,
       def-axiom-of-choice,
       def-complex-projective-space-and-holomorphic-charts,
       def-cw-complex-with-closure-finiteness-and-weak-topology,
       def-equivariant-borel-moore-homology-and-correspondence-convolution,
       def-equivariant-constructible-derived-category-for-complex-algebraic-varieties,
       def-schubert-cells-in-real-and-complex-grassmannians,
       def-stiefel-space-grassmannian-and-tautological-bundle,
       lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom,
       thm-cellular-cochains-compute-cohomology-with-local-coefficients,
       thm-projective-space-proper-over-base,
       thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product,
       thm-schubert-cells-give-the-stable-grassmannian-cw-structure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "A. Hatcher, Algebraic Topology (Cambridge University Press, 2002); author-hosted complete PDF, Example 0.6 (CW structure of CP^n, PDF p. 7), SS2.2 (cellular homology and the no-adjacent-cells computation, printed pp. 138-141) and SS3.2 (cohomology of CP^n, printed pp. 220-222)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "V. Ginzburg, Geometric methods in representation theory, arXiv:math/9802004; lecture notes for the 1997 summer school (complete 30-page PDF)"
      url: "https://arxiv.org/pdf/math/9802004"
---

## Example

Assume the Axiom of Choice as inherited from the cited constructible and cellular suppliers. For
the trivial group $G$, $E=\mathrm{pt}$, $X_1=\mathrm{pt}$ and $X_2=\mathbb P^1$ with $d_1=0$,
$d_2=1$, put $L_1=k$ and $L_2=R\Gamma(\mathbb P^1,k)[1]$ in the setting of
[[def-equivariant-borel-moore-homology-and-correspondence-convolution]]. Then
$\operatorname{Ext}^r(L_1,L_2)$ is $k$ for $r=-1,1$ and zero otherwise, and the corresponding
summed-dimension Borel–Moore degrees $d_1+d_2-r$ are $2$ and $0$; the reverse corner
$\operatorname{Ext}^r(L_2,L_1)$ has the same two nonzero degrees. The unaugmented shifts
$2\dim_{\mathbb C}X_1-r=-r$ and $2\dim_{\mathbb C}X_2-r=2-r$ give the wrong degrees in at least
one corner, so the summed $d_1+d_2$ normalization of
[[thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product]] is the one
compatible with the two unequal source dimensions.

## Facts & Assumptions

**Given:** the Axiom of Choice; the trivial group $G=1$; the base $E=\mathrm{pt}$; the sources
$X_1=\mathrm{pt}$ with $d_1=0$ and $X_2=\mathbb P^1$ with $d_2=1$; the proper maps
$f_1:\mathrm{pt}\to\mathrm{pt}$ and $f_2:\mathbb P^1\to\mathrm{pt}$; the objects
$L_1=f_{1!}k_{\mathrm{pt}}[0]$ and $L_2=f_{2!}k_{\mathbb P^1}[1]$; and the normalization of
[[def-equivariant-borel-moore-homology-and-correspondence-convolution]].

[F1] Assume AC. For the equivariant correspondence data of [[def-equivariant-borel-moore-homology-and-correspondence-convolution]], [[thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product]] supplies natural isomorphisms $\Phi_{ij}^r:\operatorname{Hom}_{D^b_{G,c}(E;k)}(L_i,L_j[r])\xrightarrow{\sim}H^{\mathrm{BM},G}_{d_i+d_j-r}(Z_{ij};k)$ for every integer $r$ and every pair $(i,j)$, compatible with the Borel approximation.

[F2] In [[def-equivariant-borel-moore-homology-and-correspondence-convolution]], $H_j^{\mathrm{BM},G}(X;k)=\operatorname{Hom}_{D^b_{G,c}(X;k)}(k_X,\omega_X^G[-j])$, and ordinary Borel–Moore homology is $H_j^{\mathrm{BM}}(X;k)=\operatorname{Hom}(k_X,\omega_X[-j])$, which for smooth complex $X$ of pure dimension $d$, where $\omega_X=k_X[2d]$, equals $H^{2d-j}(X;k)$. For the trivial group the nerve of [[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]] is constant at $X$, the Cartesian condition is vacuous, and the category is the ordinary bounded constructible category, the identity Borel model being the one with $r_N=\infty$ and $Q_N=\mathrm{id}$ in [[lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom]].

[F3] The complex projective line $\mathbb P^1$ is a smooth complex manifold of complex dimension $1$ ([[def-complex-projective-space-and-holomorphic-charts]]), and its structure morphism $\mathbb P^1_{\mathbb C}\to\operatorname{Spec}\mathbb C$ is proper ([[thm-projective-space-proper-over-base]] with $S=\operatorname{Spec}\mathbb C$ and $n=1$). Under the standard identification $\mathbb P^1=\operatorname{Gr}_1(\mathbb C^2)$, the Schubert cells of [[def-stiefel-space-grassmannian-and-tautological-bundle]], [[def-schubert-cells-in-real-and-complex-grassmannians]] and [[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]] give a finite CW structure with exactly one cell in real dimension $0$ and one in real dimension $2$.

[F4] If a CW complex has no cells in adjacent dimensions, every cellular differential vanishes and $H_n(X;G)\cong C_n^{\mathrm{cell}}(X;G)$ ([[cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary]]); for a CW pair and local system the cellular cochain complex computes cohomology, $H^n(C^*_{\mathrm{cell}}(X,A;\mathcal L))\cong H^n(X,A;\mathcal L)$ ([[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]).

[A1] The Axiom of Choice is inherited through the cited constructible and cellular suppliers; the explicit finite CW and Hom computations below are choice-free ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 The two sources and the objects. The map $f_1:\mathrm{pt}\to\mathrm{pt}$ is proper with $d_1=0$ and $L_1=f_{1!}k_{\mathrm{pt}}[0]=k$, and the map $f_2:\mathbb P^1\to\mathrm{pt}$ is proper with $d_2=1$ and $L_2=f_{2!}k_{\mathbb P^1}[1]=R\Gamma(\mathbb P^1,k)[1]$, the last equality using $f_{2*}=f_{2!}$ for proper $f_2$. The fiber products are $Z_{12}=Z_{21}=\mathrm{pt}\times_{\mathrm{pt}}\mathbb P^1=\mathbb P^1$. [F2, F3, given]

1.2 The cohomology of the projective line. By [F3] the Schubert cells give $\mathbb P^1$ a finite CW structure with one $0$-cell and one $2$-cell and no cells in adjacent dimensions, so all cellular differentials vanish and the cellular cochain complex with constant coefficients $k$ is $k\oplus k[-2]$; by the cellular cochain theorem of [F4] this complex computes $H^*(\mathbb P^1,k)$, giving $H^0(\mathbb P^1,k)=k$, $H^1(\mathbb P^1,k)=0$ and $H^2(\mathbb P^1,k)=k$. Since $k$ is a field, a complex of $k$-vector spaces with this cohomology is quasi-isomorphic to $k\oplus k[-2]$: truncate to the degrees where cohomology is nonzero and split the surjection from the cocycles onto cohomology, which is possible because $k$-vector spaces are projective; hence $R\Gamma(\mathbb P^1,k)\cong k\oplus k[-2]$ in the bounded derived category. [F3, F4, algebra]

2.1 The forward corner. For complexes of $k$-vector spaces one has $\operatorname{Hom}(k,C[n])=H^n(C)$, so $\operatorname{Ext}^r(L_1,L_2)=\operatorname{Hom}(k,R\Gamma(\mathbb P^1,k)[1+r])=H^{1+r}(\mathbb P^1,k)$, which by step 1.2 is $k$ for $r=-1$ and for $r=1$ and is zero otherwise; in particular both nonzero groups are one-dimensional. [step 1.2, algebra]

3.1 The reverse corner. Similarly $\operatorname{Ext}^r(L_2,L_1)=\operatorname{Hom}(R\Gamma(\mathbb P^1,k)[1],k[r])=\operatorname{Hom}(R\Gamma(\mathbb P^1,k),k[r-1])=\operatorname{Hom}(k\oplus k[-2],k[r-1])=\operatorname{Hom}(k,k[r-1])\oplus\operatorname{Hom}(k,k[r+1])$, which is $k$ exactly when $r=1$ or $r=-1$ and is zero otherwise; so both corners have the same two nonzero degrees. [step 1.2, step 2.1, algebra]

4.1 The degree check. By [F1] the isomorphism $\Phi^r_{12}$ identifies $\operatorname{Ext}^r(L_1,L_2)$ with $H^{\mathrm{BM}}_{d_1+d_2-r}(\mathbb P^1;k)=H^{\mathrm{BM}}_{1-r}(\mathbb P^1;k)$: the degree $r=-1$ corresponds to Borel–Moore degree $2$ and $r=1$ to Borel–Moore degree $0$, and the reverse corner $(2,1)$ gives the same two degrees. These values match the computation: by [F2] and step 1.2, $H^{\mathrm{BM}}_j(\mathbb P^1;k)=\operatorname{Hom}(k,k[2-j])=H^{2-j}(\mathbb P^1;k)$ is $k$ for $j=2$ and for $j=0$. The single-source shifts fail this comparison in both corners: $2\dim_{\mathbb C}X_1-r=-r$ is $1$ for $r=-1$ and $-1$ for $r=1$, and $2\dim_{\mathbb C}X_2-r=2-r$ is $3$ for $r=-1$ and $1$ for $r=1$, while the required degrees are $2$ and $0$. Hence the summed $d_1+d_2$ normalization is the one compatible with the two unequal source dimensions. [A1, F1, F2, step 1.2, step 3.1] ∎
