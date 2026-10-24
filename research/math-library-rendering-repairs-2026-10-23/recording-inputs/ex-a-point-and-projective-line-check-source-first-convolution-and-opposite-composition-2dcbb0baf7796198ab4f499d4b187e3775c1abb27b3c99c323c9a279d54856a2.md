---
id: ex-a-point-and-projective-line-check-source-first-convolution-and-opposite-composition
kind: example
title: "A point and projective-line check of source-first convolution and opposite composition"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 26
deps: [cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary,
       def-axiom-of-choice,
       def-complex-projective-space-and-holomorphic-charts,
       def-cw-complex-with-closure-finiteness-and-weak-topology,
       def-equivariant-borel-moore-homology-and-correspondence-convolution,
       def-equivariant-constructible-derived-category-for-complex-algebraic-varieties,
       def-schubert-cells-in-real-and-complex-grassmannians,
       def-stiefel-space-grassmannian-and-tautological-bundle,
       lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports,
       lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology,
       thm-cellular-cochains-compute-cohomology-with-local-coefficients,
       thm-projective-space-proper-over-base,
       thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product,
       thm-schubert-cells-give-the-stable-grassmannian-cw-structure,
       thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "A. Hatcher, Algebraic Topology (Cambridge University Press, 2002); author-hosted complete PDF, Example 0.6 (CW structure of CP^n, printed pp. 6-7, PDF pp. 15-16), SS2.2 (cellular homology and the no-adjacent-cells computation, printed pp. 138-141) and SS3.2 (cohomology of CP^n, printed pp. 220-222)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "V. Ginzburg, Geometric methods in the representation theory of Hecke algebras and quantum groups, arXiv:math/9802004v3; 1997 Montreal lectures (57-page PDF)"
      url: "https://arxiv.org/pdf/math/9802004"
---

## Example

Assume the Axiom of Choice as inherited from the cited constructible and cellular suppliers. In
the point/projective-line geometry with $E=\mathrm{pt}$, $X_1=\mathrm{pt}$, $X_2=\mathbb P^1$,
$d_1=0$, $d_2=1$ and $L_1=k$, $L_2=R\Gamma(\mathbb P^1,k)[1]$ in the setting of
[[def-equivariant-borel-moore-homology-and-correspondence-convolution]], let
$\alpha\in\operatorname{Ext}^{-1}(L_1,L_2)$ be the unit $k\to R\Gamma(\mathbb P^1,k)$ and let
$\beta\in\operatorname{Ext}^{1}(L_2,L_1)$ be point evaluation
$R\Gamma(\mathbb P^1,k)[1]\to k[1]$, that is, evaluation $H^0(\mathbb P^1,k)\to k$ shifted by
$1$ and extended by zero on $H^2$. Then
$\alpha*\beta=\beta[-1]\circ\alpha=\operatorname{id}_k$ in the source-first convention of
[[def-equivariant-borel-moore-homology-and-correspondence-convolution]], and under the
correspondence isomorphism of
[[thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product]] one has
$[\mathbb P^1]*[\mathrm{pt}]=[\mathrm{pt}]$: the refined diagonal intersection of the fundamental
class of $\mathbb P^1$ with the point class is the point class, and proper pushforward to the
point corner gives its generator.

## Facts & Assumptions

**Given:** the Axiom of Choice; the trivial group $G=1$; the base $E=\mathrm{pt}$; the sources $X_1=\mathrm{pt}$ and $X_2=\mathbb P^1$ with $d_1=0$, $d_2=1$; the proper maps $f_1:\mathrm{pt}\to\mathrm{pt}$ and $f_2:\mathbb P^1\to\mathrm{pt}$; the objects $L_1=k$ and $L_2=R\Gamma(\mathbb P^1,k)[1]$; the unit $\alpha:k\to R\Gamma(\mathbb P^1,k)$ and the evaluation $\beta:R\Gamma(\mathbb P^1,k)[1]\to k[1]$; and the conventions of [[def-equivariant-borel-moore-homology-and-correspondence-convolution]].

[F1] [[thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product]] supplies natural isomorphisms $\Phi_{ij}^r:\operatorname{Hom}(L_i,L_j[r])\xrightarrow{\sim}H^{\mathrm{BM},G}_{d_i+d_j-r}(Z_{ij};k)$ for all $r$ and $(i,j)$, and [[def-equivariant-borel-moore-homology-and-correspondence-convolution]] fixes the source-first product $a*b=h_*\Delta_{X_j}^!(a\boxtimes b)$ with degree drop $2d_j$, the corner degrees and the normalized diagonal class.

[F2] [[thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution]] supplies $\Phi_{ik}^{r+s}(\beta[r]\circ\alpha)=\Phi_{ij}^r(\alpha)*\Phi_{jk}^s(\beta)$ for composable morphisms, with the identity mapped to $[\Delta_{X_i}]$.

[F3] The projective line $\mathbb P^1$ is smooth of complex dimension $1$ ([[def-complex-projective-space-and-holomorphic-charts]]) and proper over $\operatorname{Spec}\mathbb C$ ([[thm-projective-space-proper-over-base]]); under $\mathbb P^1=\operatorname{Gr}_1(\mathbb C^2)$ the Schubert cells of [[def-stiefel-space-grassmannian-and-tautological-bundle]], [[def-schubert-cells-in-real-and-complex-grassmannians]] and [[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]] give a finite CW structure with one cell in real dimension $0$ and one in real dimension $2$.

[F4] With no cells in adjacent dimensions every cellular differential vanishes and $H_n\cong C_n^{\mathrm{cell}}$ ([[cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary]]), and cellular cochains compute cohomology with local coefficients ([[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]).

[F5] [[lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports]] fixes the positive complex orientation and the normalization of the diagonal Thom intersection: the positive generator is the one evaluating to $+1$ on positively oriented normal fibers, and the refined operation is independent of transversality.

[F6] Under AC, constant-sheaf cohomology on a metric space with a contractible-open neighborhood basis equals singular cohomology ([[lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology]]). The projective-line charts and its Hermitian-projector embedding in [F3] supply those hypotheses.

[A1] The Axiom of Choice is inherited through the cited constructible and cellular suppliers; the explicit finite computations below are choice-free ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 The geometry and the cohomology of the projective line. The fiber products are $Z_{12}=Z_{21}=\mathbb P^1$. By [F3] its Schubert CW structure has one $0$-cell and one $2$-cell, so the cellular cochain complex is $k\oplus k[-2]$. By [F4] it computes singular cohomology, and [F6] identifies this with constant-sheaf cohomology. Choosing cocycles representing the two generators gives a quasi-isomorphism $k\oplus k[-2]\to R\Gamma(\mathbb P^1,k)$. Hence $L_2\simeq k[1]\oplus k[-1]$ and $L_1=k$. [F3, F4, F6, algebra]

2.1 The two classes and their composites. The unit $\alpha:k\to R\Gamma(\mathbb P^1,k)$ includes the degree-zero summand, generating $\operatorname{Ext}^{-1}(L_1,L_2)=k$. Evaluation at a point projects to that summand; its shift $\beta:L_2\to k[1]$ generates $\operatorname{Ext}^1(L_2,L_1)=k$, since $\operatorname{Hom}(k[-2],k)=0$. Therefore $\beta[-1]\circ\alpha=\operatorname{id}_k$. The reverse composite $\alpha[1]\circ\beta$ is also nonzero: it is the projector of $L_2=k[1]\oplus k[-1]$ onto $k[1]$, and is neither zero nor $\operatorname{id}_{L_2}$. [step 1.1, algebra]

3.1 The convolution check. Apply [F2] with $(i,j,k)=(1,2,1)$ and degrees $r=-1$, $s=1$ to the composable pair $\alpha:L_1\to L_2[r]$ and $\beta:L_2\to L_1[s]$: since $\beta[r]\circ\alpha=\beta[-1]\circ\alpha=\operatorname{id}_k$ by step 2.1, the product theorem gives $\Phi_{11}^{0}(\operatorname{id}_k)=\Phi_{12}^{-1}(\alpha)*\Phi_{21}^{1}(\beta)$, so $\alpha*\beta=\operatorname{id}_k$ in the source-first convention, and the right-hand side is the convolution product of [F1]. The corner degrees are $d_1+d_2-r=2$ for $\alpha$ and $d_2+d_1-s=0$ for $\beta$. [F1, F2, step 1.1, step 2.1]

4.1 The geometric product. The adjunction chain of [F1] sends $\alpha$ to $\operatorname{id}_{k_{\mathbb P^1}}$, hence to the positive fundamental class $[\mathbb P^1]$. Write $i:\mathrm{pt}\hookrightarrow\mathbb P^1$ for the evaluation point. Evaluation is the global-sections image of $k_{\mathbb P^1}\to i_*k$, and its adjoint under $R\Gamma\dashv a^!$, $a:\mathbb P^1\to\mathrm{pt}$, is the composite $k_{\mathbb P^1}\to i_*k=i_*i^!\omega_{\mathbb P^1}\to\omega_{\mathbb P^1}$, with the last arrow the proper trace. Thus $\Phi_{21}^{1}(\beta)=i_*[\mathrm{pt}]$ with coefficient $+1$. Geometrically $\mathbb P^1\times\{i\}$ meets the middle diagonal of $\mathbb P^1\times\mathbb P^1$ transversely at $(i,i)$; the map from its tangent line to the complex normal line of the diagonal is an isomorphism, preserving the real orientation. The positive Thom cap of [F5] therefore gives that point with multiplicity $+1$, and proper pushforward to $Z_{11}=\mathrm{pt}$ gives $[\mathrm{pt}]$. This computes $[\mathbb P^1]*[\mathrm{pt}]=[\mathrm{pt}]$, with middle degree drop $2$ and no permutation sign, agreeing with step 3.1. It verifies a transverse instance of the calculus, not its general nontransverse case. AC is inherited through [A1]. [A1, F1, F2, F5, step 2.1, step 3.1] ∎


## Remarks

The two rows below distinguish the source-first product from the reverse
composite. The splitting is the one in steps 1.1–2.1: the upper row includes
and projects the $H^0$ summand before shifting, while the lower row projects
and includes the shifted $H^0$ summand. Thus the lower composite kills
$k[-1]$; it is not the identity of $L_2$.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\large}]
\node (a) at (0,0) {$k=L_1$};
\node (b) at (5,0) {$L_2[-1]\simeq k\oplus k[-2]$};
\node (c) at (10,0) {$k=L_1$};
\draw[->] (a) -- node[above] {$\alpha$} (b);
\draw[->] (b) -- node[above] {$\beta[-1]$} (c);
\draw[->] (a.south) to[bend right=25] node[below] {$\alpha*\beta=\beta[-1]\circ\alpha=\mathrm{id}_k$} (c.south);
\node (d) at (0,-3) {$L_2$};
\node (e) at (5,-3) {$k[1]$};
\node (f) at (10,-3) {$L_2$};
\draw[->] (d) -- node[above] {$\beta$} (e);
\draw[->] (e) -- node[above] {$\alpha[1]$} (f);
\draw[->] (d.south) to[bend right=25] node[below] {$\alpha[1]\circ\beta=\mathrm{pr}_{k[1]}\ne 0,\mathrm{id}_{L_2}$} (f.south);
\end{tikzpicture}
```

For the geometric row, $i:\mathrm{pt}\hookrightarrow\mathbb P^1$ is the
chosen point and $a:\mathbb P^1\to\mathrm{pt}$ is proper. The next picture
is a schematic of two **complex** curves in the complex surface
$\mathbb P^1\times\mathbb P^1$, not a real-dimensional model. In a local
coordinate centered at $i$, the normal coordinate $z_1-z_2$ to the diagonal
restricts to $z_1$ on $\mathbb P^1\times\{i\}$. This is a complex-linear
isomorphism, hence preserves real orientation and gives multiplicity $+1$
by [F5] and step 4.1.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\large}]
\draw[rounded corners] (-2.5,-1.7) rectangle (2.7,2.3);
\node at (0.1,2.75) {$\mathbb P^1\times\mathbb P^1$};
\draw[thick] (-2,0) -- (2,0);
\node at (0.9,-1.05) {$\mathbb P^1\times\{i\}$};
\draw[thick] (-1.4,-1.4) -- (1.8,1.8);
\node[above left] at (1.5,1.5) {$\Delta_{\mathbb P^1}$};
\fill (0,0) circle (2pt);
\node[above left] at (0,0) {$(i,i)$};
\draw[->] (2.9,0.6) -- node[above] {$\Delta^!$} (5,0.6);
\node at (4,-0.4) {$2+0-2=0$};
\node at (6.3,0.6) {$[(i,i)]$};
\node at (6.3,-0.1) {multiplicity $+1$};
\draw[->] (7.4,0.6) -- node[above] {$h_*$} (9,0.6);
\node at (10,0.6) {$[\mathrm{pt}]$};
\node at (10,-0.1) {$Z_{11}=\mathrm{pt}$};
\end{tikzpicture}
```

Here the input to $\Delta^!$ is $[\mathbb P^1]\boxtimes[\mathrm{pt}]$,
and $h$ forgets the middle point. The degree drop is $2d_2=2$, with no
permutation of the middle factors (step 3.1 and [F1]). The diagrams illustrate
steps 1.1–4.1; the verification above is independent of them.
