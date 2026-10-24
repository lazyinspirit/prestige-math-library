---
id: thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree
kind: theorem
title: "Proper cohomology and functorial mixed Hodge weights"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 21
deps: [cor-cohomology-over-a-field-is-dual-to-homology-over-that-field,
       def-analytic-topology-and-finite-smooth-algebraic-stratifications,
       def-axiom-of-choice, def-borel-moore-homology,
       def-cohomological-mixed-hodge-complex, def-godement-resolution,
       def-rational-mixed-hodge-structure,
       lem-borel-moore-homology-of-compact-spaces,
       lem-finite-simplicial-open-stars-have-explicit-conical-product-charts,
       lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology,
       lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights,
       lem-morphisms-of-mixed-hodge-structures-are-strict,
       lem-smooth-projective-analytification-has-rational-kahler-polarization,
       prop-cap-product-naturality-and-projection-formula,
       thm-a-compact-hausdorff-space-is-regular-and-normal,
       thm-choice-implies-dependent-implies-countable-choice,
       thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms,
       thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology,
       thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures,
       thm-poincare-duality-for-oriented-topological-manifolds,
       thm-proper-hypercovers-compute-constructible-derived-cohomology,
       thm-proper-varieties-admit-smooth-projective-hyperresolutions,
       cor-compact-hausdorff-partitions-of-unity,
       thm-every-independent-set-extends-to-a-basis,
       thm-godement-resolution-flasque]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge III, Publ. Math. IHES 44 (1974) 5-77, (8.1.10)-(8.2.4)"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
      locator: "printed pp. 31-35, (8.1.10)-(8.1.20), and pp. 38-39, (8.2.1)-(8.2.4): the mixed Hodge structure on the cohomology of a separated finite-type scheme via a proper hypercover, independence of the diagram, functoriality and the bound p+q<=n for proper varieties"
    - title: "Andrzej Weber, Notes on Mixed Hodge Structures (Srni, January 2005), Sections 4.3"
      url: "https://www.mimuw.edu.pl/~aweber/ps/mhs.pdf"
      locator: "the mixed Hodge complex of a smooth compact simplicial variety, the induced structure and the weight spectral sequence, printed pp. 10-11"
---

## Statement

Assume AC. The rational cohomology $H^n(Y,\mathbb Q)$ of every proper complex
algebraic variety has a functorial mixed Hodge structure
([[def-rational-mixed-hodge-structure]]) with weights at most $n$. For a
morphism $g:Y\to U$ with $Y$ proper and $U$ smooth quasiprojective, its pullback
$H^n(U)\to H^n(Y)$ is a mixed Hodge morphism for the logarithmic structure on
$U$. If $Y\to X$ is proper with $X$ smooth projective of pure dimension $d$, the
proper homological class map
$$H_i^{\mathrm{BM}}(Y,\mathbb Q)=H_i(Y,\mathbb Q)\longrightarrow H^{2d-i}(X,\mathbb Q)(d)$$
is a mixed Hodge morphism after the indicated Tate twist. Its image, and
consequently the untwisted image in $H^{2d-i}(X)$, is a pure Hodge substructure.
No smoothness of $Y$ is assumed. For an ambient $X$ with components of
different dimensions, the class map is the direct sum of these maps on
$Y\times_X X_c\to X_c$, using each component dimension $d_c$ separately.

## Facts & Assumptions

**Given:** The Axiom of Choice and a proper complex algebraic variety $Y$; morphisms $g:Y\to U$ to a smooth quasiprojective $U$ and $h:Y\to X$ to a smooth projective $X$ of pure dimension $d$ where these are named.

[F1] [[thm-proper-varieties-admit-smooth-projective-hyperresolutions]]: every proper complex variety $Y$ admits a split simplicial proper hypercover $a:Y_\bullet\to Y$ with all $Y_p$ smooth projective; two such hypercovers are dominated by a third smooth projective one; every morphism of proper varieties lifts to a morphism of such hypercovers after refining the source; and degree-$n$ cohomology uses only the skeleton through degree $n+1$.

[F2] [[thm-proper-hypercovers-compute-constructible-derived-cohomology]]: for a proper hypercover $X_\bullet\to X$ of finite-type complex varieties and a bounded constructible coefficient complex $F\in D^b_c(X;k)$ over a field, with cochain lower bound $a$, the augmentation is a quasi-isomorphism $F\xrightarrow{\sim}\operatorname{Tot}_pRa_{p*}a_p^*F$, giving $R\Gamma(X,F)\xrightarrow{\sim}\operatorname{Tot}_pR\Gamma(X_p,a_p^*F)$ and a strongly convergent spectral sequence $E_1^{p,q}=H^q(X_p,a_p^*F)\Rightarrow H^{p+q}(X,F)$ whose diagonal $p+q=m$ is finite and determined by levels $p\le m-a+1$, and all refinements induce the same comparison. For the constant rational complex $F=\mathbb Q_X$ the lower bound is $a=0$ and the spectral sequence is first-quadrant.

[F3] [[lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights]] and [[def-cohomological-mixed-hodge-complex]]: part (ii) turns a cosimplicial system of weight-zero rational Hodge complexes concentrated in nonnegative bidegrees, with strict differentials and pure cohomology of weight $q$ in bidegree $(p,q)$, into a rational cohomological mixed Hodge complex whose simple complex carries a mixed Hodge structure with $\operatorname{Gr}^W_qH^n\cong E_2^{n-q,q}$, so that all weights of $H^n$ are at most $n$ when only nonnegative cosimplicial degrees occur.

[F4] [[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]] and [[lem-smooth-projective-analytification-has-rational-kahler-polarization]]: a smooth projective complex scheme $Z$ of pure dimension has analytification $Z^{\mathrm{an}}$ a compact Hausdorff second-countable complex manifold carrying a Kähler form from any ample class, and $H^q(Z,\mathbb Q)$ is pure of weight $q$ with functorial rational structure and strict Hodge filtration; for a finite disjoint union of such schemes the statements hold componentwise and sum.

[F5] [[lem-morphisms-of-mixed-hodge-structures-are-strict]]: mixed Hodge morphisms are strict for both filtrations, their kernels, images and cokernels carry mixed Hodge structures, and a morphism from a structure of weights at least $n$ to a structure of weights at most $n$ has pure image of weight $n$.

[F6] [[lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology]], [[thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology]], [[lem-finite-simplicial-open-stars-have-explicit-conical-product-charts]], [[def-analytic-topology-and-finite-smooth-algebraic-stratifications]], [[thm-a-compact-hausdorff-space-is-regular-and-normal]], [[cor-compact-hausdorff-partitions-of-unity]] and [[thm-choice-implies-dependent-implies-countable-choice]]: the analytic topology of a complex algebraic variety is fixed by the cited definition; the triangulation theorem provides finite compatible smooth Whitney refinements and triangulations of quasi-projective charts; open stars of simplices have explicit conical product charts and are contractible; a compact Hausdorff space is normal, has subordinate continuous partitions of unity under AC and its DC consequence; and the metric comparison identifies derived constant-sheaf cohomology with singular cohomology on every open subset once the metric and contractible-open basis are constructed in step 2.1.

[F7] [[thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures]]: for smooth quasiprojective $U$ with an SNC smooth projective compactification $j:U\hookrightarrow X$, the logarithmic de Rham complex with its pole-count weight filtration constructs a functorial rational mixed Hodge structure on $H^n(U,\mathbb Q)$ of weights at least $n$, independent of the compactification, with $W_nH^n(U,\mathbb Q)=\operatorname{im}(H^n(X,\mathbb Q)\to H^n(U,\mathbb Q))$.

[F8] [[thm-every-independent-set-extends-to-a-basis]], [[def-borel-moore-homology]], [[lem-borel-moore-homology-of-compact-spaces]], [[thm-poincare-duality-for-oriented-topological-manifolds]], [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]] and [[prop-cap-product-naturality-and-projection-formula]]: under AC an independent set extends to a basis; locally finite chains define Borel-Moore homology, which agrees with ordinary singular homology for compact spaces; for compact spaces and field coefficients cohomology is dual to homology via the Kronecker pairing; and on a compact oriented $2d$-manifold cap product with the fundamental class is an isomorphism $H^{2d-i}\to H_i$ compatible with the cup product and the trace.

[F9] [[def-axiom-of-choice]]: the standing hypothesis, inherited from the hyperresolution, descent and logarithmic suppliers, including the sheaf-singular comparison of [F6]. AC also makes the products in the Godement construction exact and supplies the linear complements used in steps 1.1 and 3.2. AC also supplies the partition of unity in step 2.1 (and implies its DC hypothesis).

[F10] [[def-godement-resolution]] and [[thm-godement-resolution-flasque]]: the germ map into $C^0(A)(V)=\prod_{x\in V}A_x$, followed by iteration on its cokernels, defines a functorial resolution $C^\bullet(A)$; under AC its terms are flasque and its global-section complex computes sheaf cohomology. Exactness as a functor of $A$ and pullback between spaces are verified in step 1.1.

## Proof

1.1 (Actual cosimplicial Hodge complexes.) Choose the smooth projective proper hypercover $a:Y_\bullet\to Y$ of [F1]. For sheaves of rational or complex vector spaces, construct the Godement resolution of [F10]. Its first functor $C^0$ is exact because stalks are exact and products of surjective linear maps are surjective under AC. In a short exact sequence of sheaves, the corresponding germ embeddings into $C^0$ form a diagram with exact rows and columns; the kernel-cokernel exact sequence makes the three cokernels short exact. Iteration proves that every successive cokernel functor, every $C^t$ and every $\Gamma C^t$ is exact, the last again being a product of stalks. In particular resolutions and global sections preserve filtration levels, their finite intersections and associated gradings. Their first-quadrant totals compute derived global sections: termwise flasque acyclicity from [F10] applies to each sheaf of the bounded de Rham complex, and each total diagonal is finite. Apply this construction on every $Y_p$ and put $K_{\mathbb Q}^{p,q}=\Gamma(Y_p,C^q(\mathbb Q_{Y_p}))$ and $K_{\mathbb C}^{p,q}=\bigoplus_{k+t=q}\Gamma(Y_p,C^t(\Omega^k_{Y_p}))$, for $p,q\ge0$, with $F^b$ given by $k\ge b$. These are the resolved global de Rham complexes, not the complex of global holomorphic forms. Godement pullback along each face is induced by pulling a germ collection at a point to the stalk over its image; the successive cokernels preserve these maps, so their composites obey the simplicial identities and preserve $F$. The constant inclusion $\mathbb Q\otimes\mathbb C\to\Omega^0$ gives the functorial rational comparison; on cohomology it is the scalar-extension comparison of [F4]. Exactness and acyclicity of the resolution show $H^q(K_{\mathbb C}^p)=H^q(Y_p;\mathbb C)$, with the holomorphic-degree image filtration, and $H^q(K_{\mathbb Q}^p)=H^q(Y_p;\mathbb Q)$. The compact Hodge theorem [F4] gives pure weight $q$ and Hodge-de Rham $E_1$ degeneration on each smooth projective component. The latter makes the actual internal differential $F$-strict: if $dx\in F^b$, degeneration lifts the leading lower-filtration class of $x$ to a cycle up to a higher-filtration term and a boundary; subtracting the cycle and boundary raises the preimage filtration without changing $dx$, and finite induction supplies a preimage in $F^b$. This proves differential strictness directly. Thus every level is an actual weight-zero rational Hodge complex. Each internal total diagonal is finite, and $F^{q+1}K^{p,q}=0$, so [F3] applies to its first-quadrant simple complex, giving the mixed Hodge structure and $E_1^{p,q}=H^q(Y_p;\mathbb Q)$, $E_2$ degeneration and $\operatorname{Gr}^W_qH^n(sK)=E_2^{n-q,q}$. The terms have $p=n-q\ge0$, so weights are at most $n$, and the finitely many $E_1^{p,q}$ entries on every total diagonal are finite-dimensional by [F4]. Descent [F2] identifies the rational simple cohomology naturally with $H^n(Y;\mathbb Q)$, carrying this structure. [F1, F2, F3, F4, F9, F10, construct, algebra]

2.1 Singular comparison. The point map $Y_0^{\mathrm{an}}\to Y^{\mathrm{an}}$ is a continuous surjection: a nonempty finite-type fibre over a complex point has a complex closed point, as in the residue-field argument of [F4]'s analytification supplier. Thus $Y^{\mathrm{an}}$ is compact. A finite affine cover makes it second-countable, and separatedness makes its diagonal closed in the products of these affine point loci; hence it is Hausdorff. The topology of a nonreduced scheme is that of its reduction. On each affine chart [F6] supplies a finite deleted-boundary triangulation. At a point of a retained simplex, its open star is $\operatorname{relint}|\sigma|\times c_{<1}(L)$. Small convex neighbourhoods of the point in the first factor and small radial cones in the second give a contractible open neighbourhood basis: compactness of the link gives a uniform radial bound at the apex. To obtain a metric, take a finite partition of unity $\phi_j$ subordinate to the affine charts, with supports contained in the charts, using [F6]. If $z_j$ are the finite affine coordinate vectors, define $\Phi(y)=(\phi_j(y),\phi_j(y)z_j(y))_j$, extending each product by zero outside its chart. These extensions are continuous because the supports are closed and contained in their charts. If $\Phi(y)=\Phi(y')$, choose $j$ with $\phi_j(y)>0$; equality of the scalar coordinates puts both points in that chart with equal positive $\phi_j$, and equality of the product coordinates gives $z_j(y)=z_j(y')$, hence $y=y'$. A continuous injection from this compact space to Hausdorff Euclidean space is a homeomorphism onto its image: images of closed subsets are compact and therefore closed. Pulling back the Euclidean metric gives the analytic topology. The sheaf-singular comparison of [F6] now identifies the descended cohomology with $H^n_{\mathrm{sing}}(Y^{\mathrm{an}};\mathbb Q)$, naturally in $Y$. The partition and comparison consume their stated AC hypotheses; no claim of a DC-only construction is made. [F4, F6, step 1.1, construct, algebra]

3.1 Independence and functoriality. If $a':Y'_\bullet\to Y$ is a second split proper hypercover with smooth projective terms, [F1] supplies a third such hypercover dominating both; the two refinements give filtered comparison maps between the corresponding cosimplicial systems and hence morphisms of the mixed Hodge complexes of step 1.1, and by [F2] both simple complexes compute the constant-sheaf cohomology of $Y$, so the induced maps on $H^n(Y,\mathbb Q)$ are the identity; strictness [F5] upgrades this to an isomorphism of mixed Hodge structures, so the structure is independent of the diagram. A morphism $g:Y\to Y'$ of proper varieties lifts, after refining the source hypercover, to a morphism of the chosen hypercovers [F1], pullback of holomorphic forms along it is a morphism of the cosimplicial mixed Hodge complexes compatible with the comparisons, and independence of the hypercovers makes the induced map $g^*:H^n(Y',\mathbb Q)\to H^n(Y,\mathbb Q)$ well defined and compatible with identities and composition. [F1, F2, F5, step 1.1, step 2.1, construct]

3.2 (The smooth-open clause and comparison compatibility.) Let $g:Y\to U$, and use the logarithmic mixed Hodge complex realizing [F7] on an SNC compactification $X\supset U$. On its complex side, pullback along $g_0=ga_0:Y_0\to U$ takes logarithmic forms to regular forms: a boundary equation pulls back to a nowhere-zero holomorphic function, whose $d\log$ is regular. Resolve this map by the pullback construction of step 1.1 and place it in cosimplicial degree zero of $sK_{\mathbb C}$. Its first alternating face differential vanishes because $g_0d_0=g_0d_1$ on $Y_1$, so this is a chain map preserving $F$ by form degree. Its cohomology map is $g^*\otimes\mathbb C$: on $U$, $\Omega_X^\bullet(\log D)$ restricts to $\Omega_U^\bullet$, and the constant-sheaf de Rham comparison in the logarithmic construction restricts to the usual natural comparison; descent and the augmentation then identify this degree-zero map with pullback to $Y$. To obtain a rational chain map, split each source and target cochain group into boundaries, representatives for cohomology, and a complement to cycles, under AC. The differential identifies the last summand with the next boundary summand. Send cohomology representatives by the actual rational $g^*$ and send the other two summands to zero. This is a chain map $K_{\mathbb Q}(U)\to(sK)_{\mathbb Q}$ inducing $g^*$. Its scalar extension and the complex map commute with the rational comparisons up to homotopy: their difference induces zero on cohomology, and the same decompositions contract each boundary-complement pair, giving a homotopy for any such zero-cohomology map. All these maps and homotopies preserve weight, since the source pole filtration is zero for $a<0$ and the target $L_a$ is the whole simple complex for $a\ge0$; no filtration constraint is placed on the chosen complements. Thus the two chain maps, with this weight-filtered comparison homotopy, are a morphism of the mixed Hodge complexes. By [F3] the actual rational $g^*$ is a mixed Hodge morphism. [F2, F3, F7, F9, step 1.1, step 2.1, construct, algebra]

4.1 The class map. Let $h:Y\to X$ be proper with $X$ smooth projective of pure dimension $d$. By step 2.1 and [F8], Borel-Moore homology of $Y$ equals ordinary homology. The Kronecker isomorphism $H^i(Y)=H_i(Y)^*$ and finite-dimensionality of $H^i(Y)$ imply that $H_i(Y)$ is finite-dimensional: any finite independent tuple extends to a basis by [F8] under AC and gives that many independent coordinate functionals, so its length is bounded by $\dim H^i(Y)$. Consequently evaluation identifies $H_i(Y)=H^i(Y)^*$ canonically. Give it the dual filtrations of [[def-rational-mixed-hodge-structure]]. Their weight-$a$ graded piece is $(\operatorname{Gr}^W_{-a}H^i(Y))^*$, with pure types $(p,q)$ changed to $(-p,-q)$; this proves the mixed Hodge axiom and the lower weight bound $-i$. Transposes of filtration-preserving maps preserve the annihilator filtrations. Naturality of the Kronecker pairing identifies $h_*$ with the transpose of $h^*$, a mixed Hodge morphism by step 3.1. For $X$, cup product preserves Hodge type by [F4], and the top cohomology on each connected component is of type $(d,d)$: forms with total degree $2d$ have only that possible type. Evaluation on the oriented fundamental classes therefore gives a Hodge morphism $H^{2d}(X)\to\mathbb Q(-d)$ (sum the component traces). Poincare duality and the cap/cup identity [F8] make the resulting cup/trace pairing $H^i(X)\otimes H^{2d-i}(X)\to\mathbb Q(-d)$ perfect. After twisting the second factor by $(d)$ it identifies $H^{2d-i}(X)(d)$ with $H^i(X)^*=H_i(X)$ as pure Hodge structures of weight $-i$: the complementary types become $(-p,-q)$ on the dual factor. The composite with $h_*$ is the asserted class map. By [F5] its image is pure of weight $-i$; untwisting gives weight $2d-i$. For mixed-dimensional $X$, apply this on its finitely many open-and-closed connected components and the corresponding inverse images in $Y$, obtaining the stated direct sum. [F4, F5, F8, F9, step 1.1, step 2.1, step 3.1, algebra]

5.1 Boundaries and Choice accounting. For $Y=\varnothing$ every group is zero with the trivial structure and all clauses are vacuous; the degree $n=0$ case has all weights equal to $0$, consistent with the bound; the smooth hypercover terms of differing dimensions are handled componentwise in [F4], without assuming that the singular components of $Y$ are disjoint; and the case $Y=X$ of pure dimension $d$ reduces the class map to Poincare duality itself. The Axiom of Choice [F9] is inherited from [F1], [F2] and [F7], including the sheaf-singular comparison; the exact Godement resolutions of step 1.1 and the comparison homotopy in step 3.2 use AC for products and linear complements; it also licenses the partition in step 2.1 and the duality argument in step 4.1. [F1, F2, F6, F7, F9, F10, step 1.1, step 3.2, given, cases: empty zero one degenerate endpoints] ∎

## Remarks

The construction uses the hyperresolution only through its descent and Hodge theory; the mixed Hodge structure is independent of the chosen diagram by strictness, which is why no splitting or additional structure is transported to the cohomology. The singular comparison is local on affine charts because the proper $Y$ need not be quasi-projective; the metrization is constructed rather than assumed. The class map is stated for Borel-Moore homology, which agrees with ordinary homology for the compact analytic space underlying a proper variety; the identification makes the statement a theorem about ordinary homology without requiring smoothness of $Y$.

The first levels of the hypercover and the corresponding row of its
cohomological spectral sequence are shown below. In the top row only the
augmentation and face maps are drawn; degeneracies and higher levels are
omitted. Each face $d_i:Y_{p+1}\to Y_p$ induces a pullback in the opposite
direction. For fixed $q\ge0$, the lower row consists of $E_1^{p,q}$ terms,
with $d_1=\sum_{i=0}^{p+1}(-1)^i d_i^*$ on the arrow from column $p$ to
column $p+1$; this row is not asserted to be exact.

```tikz
\begin{tikzpicture}[>=stealth]
\node (Y) at (0,0) {$Y$};
\node (Y0) at (2.6,0) {$Y_0$};
\node (Y1) at (5.6,0) {$Y_1$};
\node (Y2) at (8.6,0) {$Y_2$};
\draw[->] (Y0) -- node[above] {$a_0$} (Y);
\draw[->] ([yshift=5pt]Y1.west) -- node[above] {$d_0$} ([yshift=5pt]Y0.east);
\draw[->] ([yshift=-5pt]Y1.west) -- node[below] {$d_1$} ([yshift=-5pt]Y0.east);
\draw[->] ([yshift=20pt]Y2.west) -- node[above] {$d_0$} ([yshift=20pt]Y1.east);
\draw[->] (Y2.west) -- node[above] {$d_1$} (Y1.east);
\draw[->] ([yshift=-20pt]Y2.west) -- node[below] {$d_2$} ([yshift=-20pt]Y1.east);
\node at (9.8,0) {$\cdots$};
\node (H0) at (2.6,-2) {$H^q(Y_0;\mathbb Q)$};
\node (H1) at (5.6,-2) {$H^q(Y_1;\mathbb Q)$};
\node (H2) at (8.6,-2) {$H^q(Y_2;\mathbb Q)$};
\node at (0,-2) {$E_1^{p,q}:$};
\draw[->] (H0) -- node[above] {$d_0^*-d_1^*$} (H1);
\draw[->] (H1) -- node[above] {$d_0^*-d_1^*+d_2^*$} (H2);
\node at (9.8,-2) {$\cdots$};
\node at (0,-2.8) {total degree:};
\node at (2.6,-2.8) {$q$};
\node at (5.6,-2.8) {$q+1$};
\node at (8.6,-2.8) {$q+2$};
\end{tikzpicture}
```

Every displayed cohomology term has pure weight $q$ by [F4], whereas its
total degree is $p+q$. By [F3] and step 1.1,
$\operatorname{Gr}^W_q H^n(Y;\mathbb Q)\cong E_2^{n-q,q}$.
Thus a nonzero weight-graded piece must have $p=n-q\ge0$, giving $q\le n$.
The picture records this degree bookkeeping and pullback convention; the
proof, including descent and functoriality, is independent of it.
