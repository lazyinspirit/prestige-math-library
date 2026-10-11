---
id: ex-equivariant-constructible-ext-on-a-point-is-degreewise-finite-not-total-finite
kind: example
title: "Equivariant Ext of a point is degreewise finite and not total finite"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 24
deps: [lem-field-module-sheaves-have-injective-derived-models, lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology, def-axiom-of-choice, def-cw-complex-with-closure-finiteness-and-weak-topology,
       def-invertible-matrix-and-general-linear-group,
       def-stiefel-space-grassmannian-and-tautological-bundle,
       def-equivariant-constructible-derived-category-for-complex-algebraic-varieties,
       lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom,
       thm-cellular-cochains-compute-cohomology-with-local-coefficients,
       thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars,
       def-algebraic-group-action-and-scheme-theoretic-stabilizer,
       def-complex-projective-space-and-holomorphic-charts]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph Bernstein and Valery Lunts, Equivariant Sheaves and Functors, Lecture Notes in Mathematics 1578, Part I (Derived category and functors)"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
      locator: "2.7.2 (the classifying-space description of D^b_G(pt)) and 3.1 (Stiefel resolutions)"
    - title: "A. Hatcher, Algebraic Topology (Cambridge University Press, 2002); author-hosted complete PDF, cited sections read in the extracted text"
      url: "https://www.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Example 0.6 and Section 3.2 (cellular structure and cohomology of the complex projective spaces)"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and let
$G=\mathbb C^\times=\operatorname{GL}_1(\mathbb C)$ act trivially on the point
$X=\operatorname{pt}$, in the setting of
[[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]]
([[def-invertible-matrix-and-general-linear-group]],
[[def-algebraic-group-action-and-scheme-theoretic-stabilizer]]). Let $k$ be a
field of characteristic zero and let $k$ also denote the constant equivariant
object. Then
$$\operatorname{Ext}_G^m(k,k)\cong\begin{cases}k,&m\ge0\text{ even},\\0,&\text{otherwise}.\end{cases}$$
Hence the Ext groups are degreewise finite-dimensional but their total direct
sum $\bigoplus_m\operatorname{Ext}_G^m(k,k)$ is infinite-dimensional. The
forgetful restriction to the ordinary point is not derived fully faithful.

## Facts & Assumptions

**Given:** The Axiom of Choice; the coefficient field $k$ of characteristic zero; the group $G=\mathbb C^\times$ acting trivially on the point; the finite Stiefel approximations of [[lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom]] with $U_N=\mathbb C^N\setminus\{0\}$, $B_N=\operatorname{Gr}_1(\mathbb C^N)$, $r_N=2(N-1)$ and $X_N=U_N/\mathbb C^\times$.

[F1] For the trivial action on the point, $U_N=\operatorname{Inj}(\mathbb C,\mathbb C^N)$ is the full-rank frame space and $X_N=(U_N\times\operatorname{pt})/G=U_N/\mathbb C^\times$ is the associated quotient; the map $U_N\to X_N$ is the $\mathbb C^\times$-bundle of the construction, and $Q_N(k)$ is the constant sheaf $k_{X_N}$ ([[lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom]], [[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]]).

[F2] The bounded Hom comparison gives $\operatorname{Ext}_G^m(k,k)\cong\operatorname{Hom}_{X_N}(Q_N(k),Q_N(k)[m])$ whenever $m\le r_N$ ([[lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom]]).

[F3] The graph charts identify $\operatorname{Gr}_1(\mathbb C^N)$ with $\mathbb P^{N-1}$ ([[def-stiefel-space-grassmannian-and-tautological-bundle]], [[def-complex-projective-space-and-holomorphic-charts]]). The cell construction needed by [[def-cw-complex-with-closure-finiteness-and-weak-topology]] is given explicitly in step 1.2; it is not supplied by either definition.

[F4] Cellular cochains with local coefficients compute singular cohomology ([[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]); on a CW complex with cells only in even dimensions the cellular cochain differential is zero, so $H^m(\mathbb P^{N-1};k)\cong k$ for even $m$ with $0\le m\le 2(N-1)$ and vanishes otherwise.

[F5] The equivariant Ext theorem gives degreewise finiteness and vanishing in sufficiently negative degrees for bounded constructible objects, and its range bookkeeping is the same finite-resolution comparison ([[thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars]]).

[F6] On the ordinary point, $\operatorname{Hom}_{D^b(\operatorname{pt})}(k,k[m])\cong k$ for $m=0$ and vanishes otherwise: a bounded complex of finite-dimensional vector spaces concentrated in degree zero has Hom complex concentrated in degree zero.

[F7] For a metric space with contractible-open neighbourhood basis, constant $k$-sheaf cohomology agrees with singular cohomology ([[lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology]]). Also $\operatorname{Hom}(k_X,F)=\Gamma(X,F)$: a sheaf map is determined by the image of $1$, and that section gives a map by locally constant scalar multiplication. Applying a $k$-linear injective replacement therefore gives $\operatorname{Hom}_{D(X)}(k_X,k_X[m])=H^m(X,k_X)$ ([[lem-field-module-sheaves-have-injective-derived-models]]).

[A1] AC is present only because the consumed suppliers [F1], [F2], [F4], [F5] and [F7] assume it; the projective-space cell computation is finite and choice-free ([[def-axiom-of-choice]]).



**Proof technique:** direct.

## Verification

1.1 The group $\mathbb C^\times$ acts trivially on $\operatorname{pt}$, and the frame space is $U_N=\mathbb C^N\setminus\{0\}$; the quotient $U_N/\mathbb C^\times$ is the space of complex lines in $\mathbb C^N$, i.e. $\mathbb P^{N-1}$. Under the resolution triple, the constant equivariant object $k$ corresponds to the pair $(k,\ k_{\mathbb P^{N-1}})$ because the pullback of $k$ along $U_N\to\operatorname{pt}$ is the constant sheaf $k_{U_N}$, which descends along the $\mathbb C^\times$-bundle to $k_{\mathbb P^{N-1}}$. So $Q_N(k)=k_{X_N}=k_{\mathbb P^{N-1}}$. [F1]

1.2 **The finite cells.** Use the filtration $\mathbb P^0\subset\mathbb P^1\subset\cdots\subset\mathbb P^{N-1}$ by coordinate subspaces. For $j\ge1$, the map from the closed unit ball in $\mathbb C^j$ to $\mathbb P^j$ given by $v\mapsto[v:\sqrt{1-\lVert v\rVert^2}]$ sends its boundary to $\mathbb P^{j-1}$ by $v\mapsto[v:0]$, and is a homeomorphism on the interior to the affine chart complementary to $\mathbb P^{j-1}$; its inverse chart coordinate is $z\mapsto z/\sqrt{1+\lVert z\rVert^2}$. The adjunction space formed by attaching this ball to $\mathbb P^{j-1}$ maps continuously and bijectively to $\mathbb P^j$. It is compact and the target is Hausdorff by [F3], so this map is a homeomorphism. Induction gives a finite CW structure with one cell in each degree $0,2,\ldots,2(N-1)$ and no odd cells. Its cellular cochain differentials vanish; [F4] consequently gives singular cohomology $k$ in those even degrees and zero otherwise. Projective space is metrizable (embed a line as its orthogonal projection matrix) and its smooth ball charts give contractible-open bases; [F7] identifies this computation with constant-sheaf cohomology and hence with $\operatorname{Hom}(k,k[m])$. [F3, F4, F7]

2.1 Fix $m\ge0$. Choose $N$ with $r_N=2(N-1)\ge m$, so that the comparison range of [F2] applies; then $\operatorname{Ext}_G^m(k,k)\cong\operatorname{Hom}_{\mathbb P^{N-1}}(k,k[m])\cong H^m(\mathbb P^{N-1};k)$ by [F7] and step 1.2, which is $k$ for even $m$ and $0$ for odd $m$. For $m<0$ choose any $N$ with $2(N-1)\ge|m|$; the same comparison applies and $H^m(\mathbb P^{N-1};k)=0$ because a CW complex has no negative cohomology. Hence $\operatorname{Ext}_G^m(k,k)\cong k$ for even $m\ge0$ and vanishes otherwise, which is the displayed computation. [F2, F4, F5, F7, step 1.2]

3.1 The computation of step 2.1 is degreewise finite: each group is either $k$ or $0$. Infinitely many even degrees are nonzero, namely all $m=2j$ with $j\ge0$, so the total direct sum $\bigoplus_m\operatorname{Ext}_G^m(k,k)$ contains a copy of $k$ in infinitely many degrees and is infinite-dimensional. [F5, step 2.1]

4.1 On the ordinary point, [F6] gives $\operatorname{Hom}_{D^b(\operatorname{pt})}(k,k[2])=0$, while the equivariant group $\operatorname{Ext}_G^2(k,k)$ is $k$ by step 2.1. The restriction functor to the ordinary point would have to induce the comparison map $\operatorname{Ext}_G^2(k,k)\to\operatorname{Hom}_{\operatorname{pt}}(k,k[2])$ on these Hom groups, and this map cannot be injective because its target is zero and its source is nonzero; hence restriction is not derived fully faithful. This proves all three assertions. AC is present only as recorded in [A1]. [given, A1, F6, step 2.1] ∎

## Remarks

- The example exhibits exactly the two phenomena the equivariant Ext theorem separates: degreewise finiteness holds, while total finiteness fails already for the trivial action of $\mathbb C^\times$ on a point, where $\operatorname{Ext}_G^{2j}(k,k)\cong k$ for every $j\ge0$.

- Restriction to the ordinary point is conservative but not derived fully faithful; the class in $\operatorname{Ext}_G^2(k,k)$ is invisible after forgetting the group action.
