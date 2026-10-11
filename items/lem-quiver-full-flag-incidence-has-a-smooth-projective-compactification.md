---
id: lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification
kind: lemma
title: "Quiver full-flag incidence has a smooth projective compactification"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [cor-projective-variety-product-exists,
       def-axiom-of-choice,
       def-projective-bundle-scheme,
       lem-grassmannian-standard-affine-charts,
       thm-plucker-image-closed,
       thm-projective-morphism-proper]
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
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. Varagnolo, E. Vasserot, Canonical bases and KLR-algebras, arXiv:0901.3992v2, Sec. 1.1"
      url: "https://arxiv.org/pdf/0901.3992"
      locator: "the representation space $E_V$, the group $G_V$, the flag variety of type $y$, the variety of $x$-stable flags and its proper first projection; decreasing flags in the source"
    - title: "T. Bozec, Quivers with loops and perverse sheaves, arXiv:1401.5302v4, Sec. 1.1"
      url: "https://arxiv.org/pdf/1401.5302"
      locator: "increasing flags $F_{i,a}$, the incidence of pairs $(x,W)$ with $x_h(W)\\subseteq W$, and the proper projection $\\pi_{i,a}$"
    - title: "J. S. Milne, Algebraic Geometry, Secs. 6.m-6.n"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
      locator: "printed pp. 149-152: Plucker realization of the Grassmannian, complementary-subspace charts, and the flag variety as a closed subset of a product of Grassmannians"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) as inherited from the
relative Proj and scheme-properness suppliers. Let $\Gamma$ be a finite loopless
quiver, with arbitrary finitely many arrows between two distinct vertices. Let
$V=\bigoplus_iV_i$ be a finite-dimensional complex graded vector space,
$\beta_i=\dim V_i$, $E_V=\bigoplus_{h:i\to j}\operatorname{Hom}(V_i,V_j)$ and
$G_V=\prod_i\operatorname{GL}(V_i)$. Let $\nu=(\nu_1,\ldots,\nu_m)$ be a word
with $\beta_i$ occurrences of $i$. Let $\mathcal F_\nu$ be the variety of
increasing full graded flags $0=F^0\subset F^1\subset\cdots\subset F^m=V$ with
$F^r/F^{r-1}$ of color $\nu_r$. Then
$X_\nu=\{(x,F):x_hF_i^r\subset F_j^r\text{ for all }h:i\to j,r\}$ is a
$G_V$-equivariant vector subbundle $W_\nu$ of $E_V\times\mathcal F_\nu$. Its rank
is $\sum_{h:i\to j}\#\{(p,q):\nu_p=i,\nu_q=j,q<p\}$ and its dimension is that
rank plus $\sum_i\beta_i(\beta_i-1)/2$. The map $\pi_\nu:X_\nu\to E_V$ is
projective.

Put $\mathbb P_{\rm lines}(U)=\operatorname{Proj}\operatorname{Sym}(U^\vee)$.
Then the bundle inclusion defines a $G_V$-equivariant projective map
$\bar\pi_\nu:\mathbb P_{\rm lines}(W_\nu\oplus\mathcal O)\to\mathbb P_{\rm lines}(E_V\oplus\mathbb C)$
whose source is smooth projective and whose restriction over the affine chart
$t\ne0$ is exactly $\pi_\nu$. The analogous associated-bundle construction over
any finite product of complex Grassmannians formed from tautological bundles is
a projective map between smooth projective varieties, restricting over its
affine chart to the associated incidence map.

## Facts & Assumptions

**Given:** the Axiom of Choice, the finite loopless quiver, the finite-dimensional graded space $V$ with its dimension vector, the word $\nu$, and the increasing full graded flag convention of the Statement.

[F1] Projective bundles in the quotient convention ([[def-projective-bundle-scheme]]): for a finite locally free module $E$ of rank $r$ the bundle $\mathbb P_S(E)=\operatorname{Proj}_S\operatorname{Sym}(E)$ represents surjections of the pullback of $E$ onto invertible sheaves; over a frame $E|_U\cong\mathcal O_U^r$ it is $\mathbb P^{r-1}_U$ with homogeneous coordinates the coefficients, and the rank-zero case is empty. Frame charts are smooth over a smooth base, and the same description applies to $\mathbb P_{\rm lines}(U)=\operatorname{Proj}\operatorname{Sym}(U^\vee)$ with $U^\vee$ in place of $E$, where the represented quotients are the lines contained in $U$.

[F2] Grassmannian charts ([[lem-grassmannian-standard-affine-charts]]): for every $r$-subset $I$ of a basis of an $n$-dimensional space the locus $p_I\ne0$ in $\operatorname{Gr}(r,W)$ is an affine space of dimension $r(n-r)$, these loci cover, and the transitions are regular.

[F3] Plucker projectivity ([[thm-plucker-image-closed]]): the Plucker image of $\operatorname{Gr}(r,W)$ is a closed projective algebraic set in $\mathbf P(\Lambda^rW)$, cut out by the Plucker relations.

[F4] Projective products ([[cor-projective-variety-product-exists]]): nonempty projective varieties have a product realized as their Segre image, and that product is a projective variety.

[F5] Projective implies proper ([[thm-projective-morphism-proper]]): under AC, every projective morphism in the finite-dimensional H-projective convention is proper, with empty source and base and the case $n=0$ included.

[A1] AC holds ([[def-axiom-of-choice]]) and is used exactly through the relative Proj convention of [F1] and the properness conversion of [F5]; every adapted basis and chart below is chosen on fixed finite-dimensional data.

## Proof

**Proof technique:** direct: identify the flag variety, exhibit the incidence as a vector subbundle, and compactify both the source and the target by adjoining a trivial line.

1.1 For each vertex $i$, forgetting the repeated colors identifies the flag data of colors in $V_i$ with a single full flag of $V_i$, so $\mathcal F_\nu$ is identified with $\prod_i\operatorname{Flag}(V_i)$: a graded increasing flag with successive colors $\nu_1,\ldots,\nu_m$ is exactly a choice, for every occurrence of $i$ in $\nu$, of a strictly increasing chain of subspaces of $V_i$ ending at $V_i$. The full flag variety of a $\beta$-dimensional space $W$ is the closed incidence locus of successive inclusions of tautological subspaces inside $\prod_{d=1}^{\beta-1}\operatorname{Gr}(d,W)$: over the product of Grassmannians the composite of the tautological monomorphism $S_d\hookrightarrow W$ with the tautological quotient $W\twoheadrightarrow W/S_{d'}$ for $d<d'$ vanishes exactly on the pairs of subspaces with $S_d\subseteq S_{d'}$, a closed condition. Each Grassmannian is projective by [F2] and [F3], finite products of nonempty projective varieties are projective by [F4], so $\operatorname{Flag}(W)$ is a nonempty projective algebraic set. It is irreducible: $\operatorname{GL}(W)$, the nonvanishing-determinant open of a matrix affine space, is irreducible and maps surjectively to the flag set by transporting a fixed flag, since every flag admits an adapted basis. Thus it is a projective variety; empty products and $\beta\in\{0,1\}$ give a point. [F2, F3, F4, given]

2.1 Successively choosing a line in the remaining quotient exhibits $\operatorname{Flag}(W)$ as an iterated projective-space bundle with relative dimensions $\beta-1,\beta-2,\ldots,1$: the step adding the next subspace has fibre the projective space of lines in the quotient by the previously chosen subspace, and the standard charts of [F2] trivialize each step algebraically. Hence $\operatorname{Flag}(W)$ is smooth of dimension $\beta(\beta-1)/2$, and the chart computations give algebraic local bases adapted to the tautological flag, in which the flag is the span of the first $r$ basis vectors. Applied factorwise this makes $\mathcal F_\nu=\prod_i\operatorname{Flag}(V_i)$ a smooth projective variety of dimension $\sum_i\beta_i(\beta_i-1)/2$, covered by charts carrying an adapted local basis of $V$. [F1, F2, step 1.1, construct]

3.1 On such an adapted-basis chart, label each basis vector $e_p$ by its occurrence $p$ in $\nu$, so $F^r$ is spanned by the $e_p$ with $p\le r$. Stability says that the coefficient of $e_q$ in $x_he_p$ vanishes whenever $q>p$; a loopless arrow has distinct source and target colors, so $q=p$ never occurs, and the free coefficients are exactly the pairs with $\nu_p=i$, $\nu_q=j$, $q<p$ for an arrow $h:i\to j$, in the number $r_\nu=\sum_{h:i\to j}\#\{(p,q):\nu_p=i,\nu_q=j,q<p\}$ of the Statement. These defining equations are linear in the representation coordinates with $r_\nu$ independent free coordinates, so on the chart the incidence is the product of the chart with a linear subspace of $E_V$; changes of adapted basis preserve the conditions and act linearly on the coordinates, so the local kernels glue to a vector subbundle $W_\nu\subseteq E_V\times\mathcal F_\nu$ with locally free quotient, whose total space is exactly $X_\nu$. Consequently $\dim X_\nu=r_\nu+\sum_i\beta_i(\beta_i-1)/2$ by step 2.1, and the action of $g\in G_V$ on matrices and on flags by translation preserves the incidence equations, so $W_\nu$ is $G_V$-equivariant. [step 2.1, given, algebra]

4.1 By step 1.1 the flag variety $\mathcal F_\nu$ is a closed subvariety of a product of projective spaces, hence of some $\mathbb P^N$, and $E_V\times\mathcal F_\nu$ is closed in the relative projective space $\mathbb P^N_{E_V}$. Since $X_\nu\subseteq E_V\times\mathcal F_\nu$ is closed by step 3.1, the map $\pi_\nu$ is a closed immersion followed by that projection, hence projective, and proper by [F5], which consumes the assumed AC as recorded in [A1]. No paving or semismallness hypothesis enters this argument. [F5, A1, step 1.1, step 3.1, given]

4.2 Definition of the compactification: $\mathbb P_{\rm lines}(U)=\operatorname{Proj}\operatorname{Sym}(U^\vee)$ is the instance of the quotient convention of [F1] for the dual bundle, so on a local frame it is again a projective-space bundle with homogeneous coordinates the coefficients of a vector. The inclusion $W_\nu\oplus\mathcal O\hookrightarrow(E_V\oplus\mathbb C)\times\mathcal F_\nu$ of vector bundles over $\mathcal F_\nu$ induces a closed immersion of line projectivizations $\mathbb P_{\rm lines}(W_\nu\oplus\mathcal O)\hookrightarrow\mathbb P_{\rm lines}(E_V\oplus\mathbb C)\times\mathcal F_\nu$ over $\mathcal F_\nu$, because on a local frame the equations are the same homogeneous linear equations with the extra coordinate $t$ unconstrained. Composing with the projection to $\mathbb P_{\rm lines}(E_V\oplus\mathbb C)$ gives the $G_V$-equivariant map $\bar\pi_\nu$, which is projective; its source is projective by its displayed closed embedding into the product of projective varieties [F4], and smooth because [F1] gives local products of the smooth base $\mathcal F_\nu$ with $\mathbb P^{r_\nu}$, including $r_\nu=0$. The affine chart $t\ne0$ of the target consists of the lines spanned by vectors $(w,1)$ with $w\in E_V$, and its inverse image under the closed immersion consists of the $(w,1)$ with $w\in W_{\nu,F}$, so as a set and scheme-theoretically it is exactly $X_\nu$, with $\bar\pi_\nu(w,F)=w=\pi_\nu(w,F)$ there. [F1, F4, step 2.1, step 3.1, construct]

4.3 For the finite associated version fix $N_i\ge\beta_i$ and put $B_N=\prod_{\beta_i>0}\operatorname{Gr}(\beta_i,N_i)$ with tautological subbundles $S_i\subseteq\mathcal O^{N_i}$ for $\beta_i>0$, setting $S_i=0$ for $\beta_i=0$, and $E_N=\bigoplus_{h:i\to j}\mathcal Hom(S_i,S_j)$ over $B_N$. Let $\mathcal F_{\nu,N}$ be the relative full flag variety over $B_N$ whose points over $(S_i)_i$ are the increasing full graded flags of $\bigoplus_iS_i$ with successive colors $\nu_r$, recording the terminal $\beta_i$-plane $S_i\subseteq\mathbb C^{N_i}$. Recording all intermediate subspaces and the terminal $S_i$ realizes this variety as the product, over $\beta_i>0$, of the closed inclusion loci in $\prod_{d=1}^{\beta_i}\operatorname{Gr}(d,N_i)$; hence it is projective by [F3] and [F4]. Over a Grassmannian frame chart it is a product of that chart with $\prod_i\operatorname{Flag}(\mathbb C^{\beta_i})$, so by [F2] and step 2.1 it is smooth and irreducible, of dimension $s_N+f$, where $s_N=\sum_i\beta_i(N_i-\beta_i)$ and $f=\sum_i\beta_i(\beta_i-1)/2$. The adapted-basis computation of step 3.1 applies verbatim to $E_N$ and to the chains inside the $S_i$, so the associated incidence is the total space of a vector subbundle $W_{\nu,N}\subseteq E_N\times_{B_N}\mathcal F_{\nu,N}$ of the same rank $r_\nu$. [F2, F3, F4, step 1.1, step 2.1, step 3.1, construct]

5.1 Absolute projectivity of the target needs no general compactification theorem. Arrows with a zero-dimensional endpoint contribute the zero Hom bundle and may be omitted. Put $D=\bigotimes_{\beta_i>0}\det S_i$ (the trivial line for the empty product); for each remaining arrow, $S_i^\vee\otimes\det S_i\cong\bigwedge^{\beta_i-1}S_i$, so $\mathcal Hom(S_i,S_j)\otimes D\cong\bigwedge^{\beta_i-1}S_i\otimes S_j\otimes\bigotimes_{l\ne i}\det S_l$, and $D$ itself is a tensor product of the $\det S_l$. Each $S_i\subseteq\mathcal O^{N_i}$ is a subbundle with locally free quotient, hence so are its exterior powers, and tensor products of such subbundles are again subbundles of finite trivial bundles with locally free quotients; therefore $(E_N\oplus\mathcal O)\otimes D$ is a subbundle of a finite trivial bundle $\mathcal O^M$. Since $D$ is a line bundle, twisting identifies $\mathbb P_{\rm lines}((E_N\oplus\mathcal O)\otimes D)=\mathbb P_{\rm lines}(E_N\oplus\mathcal O)$, which is thus a closed subvariety of the smooth projective $B_N\times\mathbb P^{M-1}$ by [F1] and [F4], hence projective. It is smooth by its projective-space-bundle charts over smooth $B_N$, not merely by closedness. [F1, F4, step 4.3, algebra, construct]

6.1 The incidence inclusion of step 3.1 embeds $\mathbb P_{\rm lines}(W_{\nu,N}\oplus\mathcal O)$ closed in $\mathbb P_{\rm lines}(E_N\oplus\mathcal O)\times_{B_N}\mathcal F_{\nu,N}$ over $B_N$, exactly as in step 4.2 with base $B_N$. The fiber product is closed in the product of the two smooth projective varieties, being the inverse image of the closed diagonal of $B_N$, so the source is projective by step 5.1, and smooth by its projective-space-bundle charts over the smooth $\mathcal F_{\nu,N}$ of step 4.3. The induced map $\bar\pi_{\nu,N}$ is projective: its graph is closed in the product of its projective source with the target, since the target has closed diagonal, and a projective embedding of the source gives a closed immersion of the graph into a relative projective space over the target. Thus it is a projective map between smooth projective varieties. Its inverse image of the affine chart $t\ne0$ is, by the same unique-representative argument as in step 4.2, the total space of $W_{\nu,N}$ over $\mathcal F_{\nu,N}$, mapped to $E_N$ by $(w,b,F)\mapsto w$, which is the associated incidence map. The empty dimension, zero arrow and arbitrary finite multiplicity cases are included throughout, since they only remove factors or arrows from the constructions above. [step 4.2, step 4.3, step 5.1, given] ∎

## Remarks

- **Conventions.** The library and Bozec use increasing flags; for an increasing flag an arrow $h:i\to j$ contributes the pairs $q<p$ with $\nu_q=j$, $\nu_p=i$, and looplessness is exactly what makes the diagonal $q=p$ impossible, so the rank formula has no diagonal term.
- **Why the extra trivial line.** Adjoining $\mathcal O$ before projectivizing keeps every bundle involved of rank at least one, in accordance with the empty rank-zero case of [F1]; the affine chart $t\ne0$ then recovers the original incidence, and this is the only role of the added coordinate.
- **Boundary cases.** Empty dimension vectors, zero arrows, multiplicities and $\beta_i\in\{0,1\}$ are all covered: the flag factors at such a vertex are points. A zero-dimensional endpoint makes its arrow Hom space zero; one-dimensional endpoints can still contribute free coefficients according to the order $q<p$.
