---
id: ex-haar-normalisations-on-a-finite-abelian-group-and-its-dual
kind: example
title: Haar normalisations on a finite abelian group and its dual
dependency_level: 1
deps:
- lem-duals-of-finite-products-and-discrete-direct-sums
- lem-additive-characters-are-one-dimensional-complex-representations
- thm-finite-abelian-groups-decompose-into-indecomposable-subgroups
- cor-indecomposable-finite-abelian-groups-are-cyclic-prime-power
- def-complex-exponential
- thm-kernel-and-fibres-of-complex-exponential
- def-left-haar-integral-and-left-haar-measure
- def-radon-measure-on-an-lch-space
- def-fourier-transform-on-an-lca-group
- def-pontryagin-dual-and-compact-open-topology
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
  - title: "Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C.2-C.3 (course-hosted full text)"
    url: "https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"
  - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Concentration (course text)"
    url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/169/2018/04/fadc.pdf"
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Let $G$ be a finite abelian group with its probability Haar measure $m_G(E)=|E|/|G|$ and let $\widehat G$ be its dual group. The compatible dual Haar measure is counting measure on $\widehat G$, so for $f:G\to\mathbb C$ the inversion formula is
$$f(x)=\sum_{\gamma\in\widehat G}\widehat f(\gamma)\,\gamma(x),\qquad \widehat f(\gamma)=\frac1{|G|}\sum_{x\in G}f(x)\overline{\gamma(x)}, \qquad\text{i.e.}\qquad f=\frac1{|G|}\sum_{\gamma\in\widehat G}\Bigl(\sum_{x\in G}f(x)\overline{\gamma(x)}\Bigr)\gamma .$$
Writing $N:=|G|$, the unitary discrete Fourier transform on the counting-measure spaces is
$$Uf(\gamma):=N^{-1/2}\sum_{x\in G}f(x)\overline{\gamma(x)}=N^{1/2}\widehat f(\gamma),\qquad f(x)=N^{-1/2}\sum_{\gamma\in\widehat G}Uf(\gamma)\gamma(x).$$
Thus, for the same input $f$, passage from the probability-Haar transform to the unitary DFT multiplies the output by $N^{1/2}$. The factor $N^{-1/2}$ is the coefficient in the unitary forward and inverse sums.

## Facts & Assumptions

**Given:** A finite abelian group $G$ written additively, its dual $\widehat G$ equipped with the compact-open topology, and the LCA Fourier transform normalized by the probability Haar measure $m_G(E)=|E|/|G|$.

[F1] A finite group is compact and discrete. The measure $m_G(E)=|E|/|G|$ is a left-invariant probability measure by finite counting, so $\int f\,dm_G=|G|^{-1}\sum_{x\in G}f(x)$ ([[def-left-haar-integral-and-left-haar-measure]]).

[F2] Counting measure $\#(E)=|E|$ on a finite discrete group is a nonzero Radon measure invariant under every translation, and hence is Haar ([[def-radon-measure-on-an-lch-space]], [[def-left-haar-integral-and-left-haar-measure]]).

[F3] A nontrivial finite abelian group is an internal direct product of indecomposable subgroups, and each indecomposable factor is cyclic of prime-power order; the trivial group is the empty product ([[thm-finite-abelian-groups-decompose-into-indecomposable-subgroups]], [[cor-indecomposable-finite-abelian-groups-are-cyclic-prime-power]]). The dual of a finite product is the product of the duals (the finite-product clause of [[lem-duals-of-finite-products-and-discrete-direct-sums]], [[def-pontryagin-dual-and-compact-open-topology]]). The character group of $\mathbb Z/N\mathbb Z$ is $\mathbb Z/N\mathbb Z$: a character is determined by the $N$-th root of unity $z=\chi([1])$, and the kernel theorem for the complex exponential gives $z=\exp(2\pi ik/N)$ for a unique $k\in\mathbb Z/N\mathbb Z$ ([[def-complex-exponential]], [[thm-kernel-and-fibres-of-complex-exponential]], [[lem-additive-characters-are-one-dimensional-complex-representations]]).

[F4] The dual group is an abelian group under pointwise multiplication ([[def-pontryagin-dual-and-compact-open-topology]]), so translation $\gamma\mapsto\gamma_0\gamma$ is a bijection of $\widehat G$; moreover the local cyclic characters of [F3] separate the points of $G$: under the product decomposition every nonzero $z\in G$ has a nonzero coordinate in some cyclic factor, and the character of that factor with frequency $k=1$, extended to $G$ through the product duality of [F3], takes a value different from $1$ at $z$.

[F5] The transform on the finite group is $\widehat f(\gamma)=|G|^{-1}\sum_{x\in G}f(x)\overline{\gamma(x)}$ ([[def-fourier-transform-on-an-lca-group]]). A Haar measure on the finite dual is compatible when this inversion formula holds with that measure.

## Proof

**Proof technique:** direct.

1.1 (Order and topology of the dual.) If $G$ is trivial, take the empty product; otherwise [F3] writes $G\cong Z_1\oplus\dots\oplus Z_k$ with $Z_j=\mathbb Z/N_j\mathbb Z$. The local computation in [F3] shows $\widehat{Z_j}\cong\mathbb Z/N_j\mathbb Z$, so by the finite-product duality $\widehat G\cong\prod_j\mathbb Z/N_j\mathbb Z$ and $|\widehat G|=\prod_jN_j=|G|$. The same statement holds for the trivial group, whose dual is trivial. Thus $\widehat G$ is finite and discrete, and by [F2] counting measure is a Haar measure of total mass $|\widehat G|=|G|$. [F1, F2, F3]

2.1 (Orthogonality.) For $z\in G$, if $z=0$ then $\gamma(z)=1$ for every $\gamma$ and $\sum_{\gamma\in\widehat G}\gamma(z)=|\widehat G|=|G|$. If $z\ne0$, step 1.1 and [F4] provide $\gamma_0$ with $\gamma_0(z)\ne1$; since $\gamma\mapsto\gamma_0\gamma$ is a bijection of $\widehat G$, $\sum_\gamma\gamma(z)=\sum_\gamma(\gamma_0\gamma)(z)=\gamma_0(z)\sum_\gamma\gamma(z)$, hence $\sum_{\gamma\in\widehat G}\gamma(z)=0$. Therefore $\sum_{\gamma\in\widehat G}\gamma(x-y)=|G|\delta_{x,y}$ for all $x,y\in G$, which is the displayed orthogonality relation. [F4, step 1.1]

3.1 (Inversion.) For $f:G\to\mathbb C$ and $\gamma\in\widehat G$, the transform is $\widehat f(\gamma)=|G|^{-1}\sum_{x\in G}f(x)\overline{\gamma(x)}$ by [F5]. Hence, using the orthogonality of step 2.1, $$\sum_{\gamma\in\widehat G}\widehat f(\gamma)\gamma(x)=\frac1{|G|}\sum_{y\in G}f(y)\sum_{\gamma\in\widehat G}\gamma(x-y)=\frac1{|G|}\sum_{y\in G}f(y)|G|\delta_{x,y}=f(x),$$ which is the displayed inversion formula. [F5, step 2.1]

4.1 (The compatible measure is counting measure.) Counting measure on the finite group $\widehat G$ is Haar. Any Haar measure $\nu$ on this finite group assigns the same mass $c$ to every point by translation invariance, so $\nu=c\#$. If $\nu$ is compatible with the transform, applying inversion to $\delta_0$ gives $1=\int_{\widehat G}\widehat{\delta_0}(\gamma)\,d\nu(\gamma)=c|\widehat G|/|G|=c$, using $|\widehat G|=|G|$ from step 1.1. Thus counting measure is the unique compatible dual Haar measure. [F2, step 1.1, step 3.1, algebra]

4.2 (Unitary normalisation.) Set $N:=|G|$ and $Uf(\gamma):=N^{-1/2}\sum_xf(x)\overline{\gamma(x)}=N^{1/2}\widehat f(\gamma)$. By step 3.1, $$N^{-1/2}\sum_{\gamma\in\widehat G}Uf(\gamma)\gamma(x)=\sum_{\gamma\in\widehat G}\widehat f(\gamma)\gamma(x)=f(x).$$ Expanding the finite sum and using step 2.1 gives $$\sum_{\gamma\in\widehat G}|Uf(\gamma)|^2=N^{-1}\sum_{x,y\in G}f(x)\overline{f(y)}\sum_{\gamma\in\widehat G}\gamma(y-x)=\sum_{x\in G}|f(x)|^2.$$ Hence $U$ is a linear isometry for the counting-measure norms; the displayed inversion and $|\widehat G|=|G|$ make it bijective, so it is unitary. Its relation to the probability-Haar transform is $Uf=N^{1/2}\widehat f$. [step 1.1, step 2.1, step 3.1, algebra]

5.1 Step 2.1 gives the orthogonality relation, step 3.1 gives the nonunitary inversion formula, step 4.1 identifies counting measure as the compatible dual Haar measure, and step 4.2 gives the unitary DFT, its inverse coefficient $|G|^{-1/2}$ and the output conversion $Uf=|G|^{1/2}\widehat f$. [step 2.1, step 3.1, step 4.1, step 4.2] ∎
