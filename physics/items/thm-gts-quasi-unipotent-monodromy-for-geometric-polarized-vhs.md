---
id: thm-gts-quasi-unipotent-monodromy-for-geometric-polarized-vhs
kind: theorem
title: "Quasi-unipotent monodromy for geometric polarized VHS"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF + full AC through the Hodge-variation and analytic metric suppliers."
deps:
  - def-gts-polarized-variation-of-hodge-structure-and-period-map
  - def-rational-mixed-hodge-structure
  - lem-gts-horizontal-period-map-distance-decreasing
  - def-axiom-of-choice
dependency_roles:
  def-gts-polarized-variation-of-hodge-structure-and-period-map: mathematical-premise
  def-rational-mixed-hodge-structure: mathematical-premise
  lem-gts-horizontal-period-map-distance-decreasing: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Claire Voisin, Hodge Structures and the Topology of Algebraic Varieties, Harvard CMSA revision"
      url: "https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf"
      locator: "§3.4.3, Theorem 3.18 and its proof, printed pp. 49–50: quasi-unipotence; the separate nilpotence bound in the source is not asserted here. The local norm proof uses y tending to infinity, correcting the direction typo in the source sketch."
    - title: "Eduardo Cattani and Aroldo Kaplan, Degenerating Variations of Hodge Structure, Astérisque 179–180 (1989)"
      url: "https://numdam.org/item/AST_1989__179-180__67_0.pdf"
      locator: "§§1–3, printed pp. 68–81, especially Remark (1.10)(i), p. 70: integral polarized variations and the monodromy theorem; §§2–3 supply nilpotent-orbit context, not an imported proof of quasi-unipotence."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $\mathbb V_{\mathbb Z}$ be a finite-rank integral polarized variation of Hodge structure of weight $k$ on a punctured disk $\Delta^*$, arising from an algebraic/projective family as specified in the geometric variation hypotheses. If $T\in\operatorname{GL}(\mathbb V_{\mathbb Z,s})$ is the local monodromy, then $T$ is quasi-unipotent: there exists $m\ge1$ such that $T^m$ is unipotent. After the base change $t=s^m$, the new local monodromy is $T^m$. No weight-dependent nilpotence bound is asserted.

## Statement references

[[def-gts-polarized-variation-of-hodge-structure-and-period-map]]

[[def-rational-mixed-hodge-structure]]

[[lem-gts-horizontal-period-map-distance-decreasing]]

[Voisin, Theorem 3.18](https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf)

[Cattani–Kaplan, §§1–3](https://numdam.org/item/AST_1989__179-180__67_0.pdf)

## Facts & Assumptions

**Given:** An integral polarized variation as in the Statement, its
finite-rank integral lattice, and its actual horizontal period map
$\Phi:\mathfrak H\to D$. Put $z=x+iy$ and $t=e^{2\pi iz}$.

[F1] [[def-gts-polarized-variation-of-hodge-structure-and-period-map]]
gives the finite-rank integral local system, flat real connection,
flat polarization and holomorphic horizontal Hodge filtration.

[F2] [[def-rational-mixed-hodge-structure]] gives the positive Hodge
metric $h_z(u,v)=Q(C_zu,\bar v)$, with $C_z$ scalar
$i^{2p-k}$ on $E^p_z=H_z^{p,k-p}$. Adjacent Hodge summands
have opposite Weil scalars and distinct summands are orthogonal.

[F3] [[lem-gts-horizontal-period-map-distance-decreasing]] proves,
for the induced Hilbert–Schmidt Hodge metric, that
$\|d\Phi(\partial_z)\|\le C/y$, with $C$ depending only on
the fixed Hodge numbers. Its proof constructs the metric connection
on the actual pulled-back Hodge bundle; the norm calculation needed
here is also spelled out below.

## Proof

1.1 Trivialize the pulled-back local system on $\mathfrak H$ and
write $E^p=F^p\cap\bar F^{k-p}$. The two filtrations and
transversality give
$\nabla^{1,0}E^p\subset E^p\oplus E^{p-1}$ and
$\nabla^{0,1}E^p\subset E^p\oplus E^{p+1}$.
Let $D$ be the diagonal part of $\nabla$ and write its lowering
part as $A\,dz$. The diagonal part preserves $h$: differentiate
$Q(Cu,\bar v)$ for two sections of one Hodge summand, use
$\nabla Q=0$, and note that off-diagonal terms are orthogonal.
For adjacent summands the derivative of their zero $Q(u,\bar v)$
pairing, together with the opposite Weil scalars in [F2], makes the
raising part exactly $A^\dagger d\bar z$. Thus
$$\nabla=D+A\,dz+A^\dagger d\bar z.$$
Differentiating the Hodge filtration in a flat marking identifies
$A$ with $d\Phi(\partial_z)$, so [F3] gives
$\|A\|_{\mathrm{HS}}\le C/y$. This construction uses the actual
polarized variation, not a transitivity or properness assertion about
a real Lie group. [given, F1, F2, F3, algebra]

2.1 Let $v$ be a nonzero flat section along a differentiable curve
$z(s)$. Since $D$ preserves $h$ and $\nabla v=0$,
$$\frac d{ds}\|v\|_{h_{z(s)}}^2=-2\operatorname{Re}h_{z(s)}\left((A z'(s)+A^\dagger\bar z'(s))v,v\right).$$
Finite-dimensional Cauchy–Schwarz and
$\|A\|_{\mathrm{op}}\le\|A\|_{\mathrm{HS}}$ give
$$\left|\frac d{ds}\log\|v\|_{h_{z(s)}}\right|\le2\|A\|_{\mathrm{HS}}|z'(s)|\le2C\frac{|z'(s)|}{\operatorname{Im}z(s)}.$$
For the horizontal segment from $z$ to $z+1$, integration yields,
for every vector in the fixed flat vector space,
$$e^{-2C/y}\|v\|_{h_z}\le\|v\|_{h_{z+1}}\le e^{2C/y}\|v\|_{h_z}.$$
The zero vector satisfies the same inequalities directly.
[F1, F2, F3, step 1.1, algebra]

3.1 Let $S$ denote the period-map deck operator, so $\Phi(z+1)=S\Phi(z)$. The action on the reference space in a flat marking is the inverse of parallel transport; equivalently some monodromy-action conventions name that inverse itself $T$. Thus $S$ is represented by $T^{-1}$ or $T$ under these conventions. The conclusion about moduli of eigenvalues is the same for both. Since $S$ is real and preserves $Q$, its transport of the Weil operator gives $C_{z+1}=SC_zS^{-1}$, hence $\|Sv\|_{h_{z+1}}=\|v\|_{h_z}$.
Apply step 2.1 to $Sv$ and use this identity to obtain
$\|Sv\|_{h_z}\le e^{2C/y}\|v\|_{h_z}$.
Applying step 2.1 to $v$ and using
$\|v\|_{h_{z+1}}=\|S^{-1}v\|_{h_z}$ gives the identical
bound for $S^{-1}$. For a complex eigenvector of the fixed
complexification of $S$, positivity of $h_z$ therefore gives
$$e^{-2C/y}\le|\lambda|\le e^{2C/y}.$$
Let $y\to+\infty$. Every eigenvalue of $S$, and therefore every eigenvalue of $T$, has modulus one.
No subsequence, compact-stabilizer lift or homogeneous-space metric
comparison is needed. [F1, F2, step 2.1, algebra]

4.1 Put $n=\operatorname{rank}\mathbb V_{\mathbb Z}$. If $n=0$
the assertion holds with exponent one. Otherwise choose an integral
basis, and for each positive integer $j$ form the characteristic
polynomial $P_j(X)=\det(XI-T^j)$. It is monic of degree $n$ with
integer coefficients. Its roots, with multiplicity, are
$\lambda_1^j,\ldots,\lambda_n^j$, where the $\lambda_i$ are
the eigenvalues of $T$; triangularizing over $\mathbb C$ proves
this even when $T$ is not diagonalizable. By step 3.1, the coefficient
of $X^{n-r}$ has absolute value at most $\binom nr$.
There are only finitely many possible integer coefficient lists,
so $P_a=P_b$ for some integers $1\le a<b$.
Equality of their finite multisets of roots supplies a permutation
$\sigma$ with $\lambda_i^a=\lambda_{\sigma(i)}^b$.
Inductively $\lambda_i^{a^q}=\lambda_{\sigma^q(i)}^{b^q}$;
if $q$ is a positive cycle length of $i$, this becomes
$\lambda_i^{a^q}=\lambda_i^{b^q}$. Since $T$ is invertible,
$\lambda_i\ne0$, so $\lambda_i$ is a root of unity.
This finite integer-matrix argument requires no separate theorem
about algebraic conjugates. [F1, step 3.1, algebra]

5.1 Choose a positive integer $m$ divisible by the finitely many
orders just obtained. Every eigenvalue of $T^m$ is one, so its
characteristic polynomial is $(X-1)^n$. Cayley–Hamilton gives
$(T^m-I)^n=0$, proving that $T^m$ is unipotent.
Finally a positively oriented loop under the cover $t=s^m$ winds
$m$ times around the original puncture; composition of parallel
transport therefore gives precisely $T^m$ as the new monodromy.
This proves the entire original assertion without a weight-dependent
nilpotence claim. [F1, step 4.1, algebra] ∎

## Remarks

The proof compares Hodge norms of actual flat vectors and derives
quasi-unipotence from finitely many bounded integer characteristic
polynomials. The period-domain metric supplier is proved locally.
No real-group transitivity/properness theorem or unproved degeneration
result is used as an input, and no geometric or analytic hypothesis
is added to the public Statement.
