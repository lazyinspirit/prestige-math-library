---
id: thm-gts-fredholm-and-generic-transversality-for-simple-curves
kind: theorem
title: Wendl generic regularity for somewhere-injective closed curves
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 8
deps:
  - lem-gts-closed-surface-real-cauchy-riemann-fredholm-index-and-adjoint
  - lem-gts-local-domain-slices-and-compact-simple-curve-exhaustion
  - thm-baire-category-for-complete-metric-spaces
  - def-gts-symplectic-and-almost-complex-curve-data
  - def-axiom-of-choice
  - def-nowhere-dense-meagre-and-residual-subsets
  - def-fredholm-maps-and-regular-values-on-countable-banach-manifolds
  - thm-sard-smale-residual-regular-values-for-fredholm-maps
  - thm-inverse-function-theorem-for-banach-spaces
  - thm-implicit-function-theorem-for-banach-spaces
dependency_roles:
  lem-gts-closed-surface-real-cauchy-riemann-fredholm-index-and-adjoint: mathematical-premise
  lem-gts-local-domain-slices-and-compact-simple-curve-exhaustion: mathematical-premise
  thm-baire-category-for-complete-metric-spaces: mathematical-premise
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-nowhere-dense-meagre-and-residual-subsets: mathematical-premise
  def-fredholm-maps-and-regular-values-on-countable-banach-manifolds: mathematical-premise
  thm-sard-smale-residual-regular-values-for-fredholm-maps: mathematical-premise
  thm-inverse-function-theorem-for-banach-spaces: mathematical-premise
  thm-implicit-function-theorem-for-banach-spaces: mathematical-premise
axiom_use: The full Axiom of Choice is assumed through the imported Sard–Smale theorem. Its proof uses AC; no weaker choice strength is claimed here.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Chris Wendl, Lectures on Holomorphic Curves in Symplectic and Contact Geometry, version 3.2
      url: https://arxiv.org/pdf/1011.1690v2
      locator: Theorems 4.8 and 4.12; §§4.3–4.4, especially Proposition 4.55, Lemmas 4.56–4.59, printed pp. 143–155
    - title: Stephen Smale, An Infinite Dimensional Version of Sard's Theorem
      url: https://people.math.harvard.edu/~dafr/M392C-2018-MorseTheory/Readings/Smale.pdf
      locator: Theorem 1.3; exact imported theorem and proof are linked below
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume the full Axiom of Choice. Let $(M,\omega)$ be a symplectic manifold without boundary, let $U\subset M$ be open with compact closure, and fix an $\omega$-compatible almost-complex structure $J_{\mathrm{fix}}$. In the space of $\omega$-compatible almost-complex structures equal to $J_{\mathrm{fix}}$ off $U$, a residual subset has the property that, for each $J$ in it, the moduli space of closed $J$-holomorphic curves with an injective point mapping into $U$ is a smooth finite-dimensional manifold. Here an injective point is a point $z$ with $du_z\ne0$ and $u^{-1}(u(z))=\{z\}$. For $\dim_\mathbb R M=2n$, its genus-$g$, $m$-marked, class-$A$ locus has dimension $(n-3)(2-2g)+2\langle c_1(TM,J),A\rangle+2m$. If $M$ is compact, one may take $U=M$.

## Statement references

[[lem-gts-closed-surface-real-cauchy-riemann-fredholm-index-and-adjoint]]

[[lem-gts-local-domain-slices-and-compact-simple-curve-exhaustion]]

## Facts & Assumptions

**Given:** Full AC and the entire original symplectic, perturbation-region and compatible-structure data in the Statement. Put $\mathcal J_U=\{J:J\text{ is smooth and compatible},\ J=J_{\mathrm{fix}}\text{ off }U\}$ with its smooth compact-open topology. Curves are connected closed smooth Riemann surfaces with maps, modulo orientation-preserving biholomorphic reparametrizations, with ordered distinct smooth markings in the marked locus. Distances to an empty complement are interpreted as infinity.

[F1] Compatible structures have the metric $g_J(v,w)=\omega(v,Jw)$; their infinitesimal variations satisfy $YJ+JY=0$ and are $g_J$-symmetric. [[def-gts-symplectic-and-almost-complex-curve-data]]

[F2] The actual arbitrary-genus vector Cauchy–Riemann operator has real index $2n(1-g)+2c_1(A)$, closed range, smooth adjoint annihilators with unique continuation, and the exact higher-range and finite-augmentation properties. [[lem-gts-closed-surface-real-cauchy-riemann-fredholm-index-and-adjoint]]

[F3] Concrete local domain/map quotient charts include nonstable domains, subtract $a$ map-normalization directions and add $b$ domain directions, with $b-a=6g-6$. They are smooth when the full universal derivative is onto. Countably many compact smooth-slice pieces with quantitative injectivity and first-derivative/image bounds cover all curves in question and are sequentially compact for smoothly converging $J$. [[lem-gts-local-domain-slices-and-compact-simple-curve-exhaustion]]

[F4] The arbitrary-Banach inverse and implicit theorems give the local zero charts after the derivative is restricted to its kernel complement, as explicitly implemented in [F3]. Sard–Smale gives residual regular values for a smooth Fredholm projection between countable-base Banach manifolds; finite-dimensional manifolds are included. [[thm-inverse-function-theorem-for-banach-spaces]] [[thm-implicit-function-theorem-for-banach-spaces]] [[thm-sard-smale-residual-regular-values-for-fredholm-maps]] [[def-fredholm-maps-and-regular-values-on-countable-banach-manifolds]]

[F5] Countable intersections of open dense sets are dense in a complete metric space and in its open subsets. Full AC is available. [[thm-baire-category-for-complete-metric-spaces]] [[def-axiom-of-choice]] [[def-nowhere-dense-meagre-and-residual-subsets]]

## Proof

1.1 We first verify the compatible-variation pointwise argument. In a Hermitian symplectic vector space, identify $J$ with $i$ using a unitary basis. A $g_J$-symmetric real map anticommuting with $i$ has the form $Yz=A\bar z$ with $A^{\mathsf T}=A$. Given $v\ne0$ and any $w$, choose a unitary basis with $v=r e_1$, $r>0$, set the first column of $A$ to $w/r$, its first row to the transpose of that column, and its other entries to zero. Then $Yv=w$. This also verifies the tangent constraints in [F1] directly. A smooth unitary frame on a target coordinate ball extends any such value to a smooth compatible tangent variation; multiply by a nonnegative smooth bump supported in that ball, and extend by zero. [F1, given, construct, algebra]

2.1 Let $u:(\Sigma,j)\to(M,J)$ have an injective point in $U$, and let $P=D_u$ on unrestricted $H^1$ map sections. The derivative of $\tfrac12(du+Jduj)$ in the target-structure direction is $K(Y)=\tfrac12Y(u)duj$. By [F2], $P(H^1)+\{K(Y):Y\text{ smooth, supported in }U\}$ is closed. A nonzero $L^2$ annihilator would be a smooth adjoint section $\eta$ with unique continuation. The injective-point set is open by [F3], so it contains a point $p$ where $\eta(p)\ne0$. Choose a source unit vector $e$ and set $v=du_p(j e)\ne0$. Step 1.1 gives $Y$ whose value sends $v$ to the nonzero form coefficient $\eta_p(e)$, producing a strictly positive real pairing at $p$. Shrink the target ball around $u(p)$ until its entire preimage lies in the embedded source neighborhood and the pairing stays positive there before applying the bump. This is possible because the compact complement has image separated from $u(p)$. The bumped pairing vanishes elsewhere and has positive integral, contradicting annihilation. Thus the augmented range is all $L^2$. Since the fixed-operator cokernel is finite dimensional, finitely many such smooth variations $Y_1,\ldots,Y_N$ already span its quotient; [F2] gives surjectivity and a bounded right inverse at every higher Sobolev level for this finite augmentation. [F1, F2, F3, step 1.1, construct, algebra]

3.1 These are derivatives of actual compatible structures with the prescribed support. Put $Y(t)=\sum t_\nu Y_\nu$, $B(t)=\tfrac12JY(t)$, $S(t)=\exp B(t)$ and $J_t=S(t)JS(t)^{-1}$. The symmetric anticommuting tangent conditions imply $B(t)$ is infinitesimally symplectic, so $S(t)$ is symplectic and $J_t$ compatible. Moreover $[\tfrac12JY,J]=Y$, hence $dJ_t|_0=Y(t)$, and $J_t=J$ off $U$. This is a finite smooth family arbitrarily close to $J$ in ALL prescribed finitely many smooth seminorms when $t$ is small. In [F3]'s source/map slices, the universal derivative remains onto: adding domain directions cannot reduce the range, and the removed $a$ directions are $du(V_j)\subset\ker D_u$, since reparametrization by a holomorphic flow preserves the equation. Thus [F2] and [F3] give an actual smooth finite-dimensional universal zero manifold. [F1, F2, F3, step 2.1, construct, algebra]

4.1 At such a universal zero, write $D_x$ for the vertical derivative in domain/map slice variables and $D_t$ for the finite perturbation derivative. Surjectivity of $(D_x,D_t)$ makes the map $t\mapsto[D_tt]$ onto $\operatorname{coker}D_x$. A vector $t$ lifts to the tangent kernel exactly if $D_xx=-D_tt$ is soluble. Therefore the cokernel of the derivative of the zero-manifold projection to $\mathbb R^N$ is precisely $\operatorname{coker}D_x$. Regular values of the projection give precisely regular fixed-$J_t$ curves. This projection is smooth Fredholm of index $I=2n(1-g)+2c_1(A)+b-a$ between finite-dimensional, hence countable-base, manifolds. Apply [F4], taking a countable chart cover if only an open collection of universal charts is under consideration. [F2, F3, F4, step 3.1, construct, algebra]

5.1 For each compact exhaustion family $C_\ell(J)$ from [F3], let $G_\ell$ be the set of structures for which every curve in that family is regular in its domain/map quotient chart. This set is open: if $J_i\to J$ and irregular curves belonged to $C_\ell(J_i)$, [F3] would give a smoothly convergent subsequence to a curve in $C_\ell(J)$. Surjectivity of its Fredholm derivative is open in operator norm, because a bounded right inverse persists by a Neumann series. The concrete local charts identify the nearby derivatives continuously. Hence regularity at the limit rules out that sequence. [F2, F3, step 4.1, algebra]

5.2 The same $G_\ell$ is dense. Fix $J_0$ and any smooth neighborhood of it. The family $C_\ell(J_0)$ is compact. At each of its curves choose the finite perturbations of step 2.1; finitely many chart neighborhoods cover it, so their finite union gives one finite list of perturbations and the family in step 3.1. Onto derivatives persist near all those curves. For all sufficiently small $t$, EVERY curve of $C_\ell(J_t)$ lies in that union: otherwise a sequence $t\to0$ of counterexamples would converge by [F3] into $C_\ell(J_0)$, a contradiction. The universal zero sets in that open union have the smooth projection of step 4.1. Choose a regular $t$ arbitrarily near zero by [F4]; then $J_t\in G_\ell$ and lies in the prescribed smooth neighborhood. If $C_\ell(J_0)$ is empty, the same compactness argument gives an empty family for all nearby structures and density is immediate there. [F2, F3, F4, step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 The structure space $\mathcal J_U$ is locally Baire. A compatible Cayley chart identifies it locally with an open set in the Fréchet space of smooth symmetric anticommuting sections on $M$ vanishing off $U$. This is a closed subspace of the complete metrizable global smooth section space (use a countable compact target exhaustion and its derivative seminorms), hence complete; compact $\overline U$ makes positivity of the Cayley chart an open $C^0$ condition. [F5] applies in each such chart. Intersect the open dense sets $G_\ell$ over the countably many source slices, compact parameter pieces, derivative/injectivity bounds, image-exhaustion pieces and genera. The resulting residual set is dense locally in each structure chart and therefore in $\mathcal J_U$. Every curve with an injective point in $U$ belongs to one of these families by [F3], so every such curve is regular. No countability assertion about the homology group of a noncompact target is needed: all classes already occur in the countable map/domain chart exhaustion. [F3, F5, step 5.1, step 5.2, construct, algebra]

7.1 The regular zero charts from [F3] are finite-dimensional manifold charts on the unparametrized moduli, with smooth transitions and trivial isotropy. Their dimension is $I$ of step 4.1. Adding $m$ distinct ordered markings is the open configuration space in the $m$-fold fiber product of the smooth universal source surface, of real fiber dimension $2m$; chart transitions are the same smooth biholomorphisms from [F3]. Thus the genus-$g$, class-$A$, $m$-marked dimension is $2n(1-g)+2c_1(A)+6g-6+2m=(n-3)(2-2g)+2c_1(A)+2m$. A negative expected dimension has no regular zero, as its tangent kernel cannot have negative dimension. For compact $M$, $U=M$ is allowed. If there is no injective point in the selected region the moduli is empty and all assertions are vacuous. This proves the full Statement, with no compactification, multiple-cover, boundary or gluing claim. [F1, F2, F3, step 4.1, step 6.1, construct, algebra] ∎

## Proof status

Complete local reconstruction conditional only on the actual proved suppliers listed above. The two new local lemmas prove the former missing vector index/adjoint and nonstable-domain/exhaustion interfaces. Their exact source-context adoption and independent review remain owner decisions; no VFC, varying-domain degeneration or gluing theorem is used.
