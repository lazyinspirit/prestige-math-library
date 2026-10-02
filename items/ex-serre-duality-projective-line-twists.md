---
id: ex-serre-duality-projective-line-twists
kind: example
title: "Serre duality on the projective line, twist by twist"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-canonical-degree-two-g-minus-two
  - cor-picard-projective-line-integers
  - def-axiom-of-choice
  - def-canonical-line-bundle-curve
  - def-degree-divisor-proper-curve
  - def-invertible-sheaf
  - def-relative-projective-space-standard-charts
  - def-residue-pairing-principal-parts
  - def-residue-rational-differential-curve-point
  - def-twisting-sheaf-proj
  - lem-principal-parts-cech-h1-presentation
  - lem-projective-line-divisors-classified-by-degree
  - lem-proper-cohomology-field-extension
  - lem-smooth-projective-embedding-gysin-trace-compatibility
  - rem-duality-trace-normalization
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-serre-duality-curves-line-bundles
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
verification:
  audited: 2026-10-02
  precheck: pass

---

## Example

Assume the Axiom of Choice as inherited from the cited cohomology and duality
suppliers ([[def-axiom-of-choice]]). Let $k$ be any field, let
$\mathbb P^1_k$ have homogeneous coordinates $x_0,x_1$ and affine coordinate
$t=x_1/x_0$ on $U_0$, fix $d\ge0$, and set
$\mathcal L=\mathcal O(-d-2)$.

The groups $H^1(\mathbb P^1_k,\mathcal L)$ and
$H^0(\mathbb P^1_k,\mathcal O(d))$ have dimension $d+1$; all other
cohomology groups of these two twists vanish. For $1\le j\le d+1$, let
$$c_j=[t^{-j}\otimes x_0^{-d-2}]\in H^1(\mathbb P^1_k,\mathcal L),$$
where the displayed expression is the local principal part in the frame
$x_0^{-d-2}$ on $U_0$. For $0\le m\le d$, the corresponding global section
of $\omega_{\mathbb P^1}\otimes\mathcal L^{-1}$ is
$$\sigma_m=t^m dt\otimes x_0^{d+2}\quad\text{on }U_0.$$
On $U_1$, with $s=1/t$, its expression is
$$\sigma_m=-s^{d-m}ds\otimes x_1^{d+2},$$
so it is regular for exactly the stated range $m\le d$; under
$dt\mapsto x_0^{-2}$ and $ds\mapsto -x_1^{-2}$ it corresponds to
$x_0^{d-m}x_1^m$.

At the rational origin, the positive local residue of the product is
$$[t^{-1}](t^{m-j})=\delta_{j,m+1}.$$
This is the identity matrix when the classes are ordered by
$j=1,\ldots,d+1$ and sections by $m=0,\ldots,d$. Reversing the section order
to $m=d,\ldots,0$ displays the same positive matrix as anti-diagonal. The
fixed normalized Serre pairing is the negative of this matrix. This remains
perfect over every field; for $d=0$ its value is $-1$, which equals $1$ in
characteristic two.

## Facts & Assumptions

**Given:** the Axiom of Choice, a field $k$, $\mathbb P^1_k$ with coordinate
$t=x_1/x_0$, an integer $d\ge0$, and $\mathcal L=\mathcal O(-d-2)$.

[F1] The Axiom of Choice is inherited from the projective cohomology,
principal-parts, field-extension, and duality suppliers, and is used to take
an algebraic closure in step 2.1. No other selection is made.
([[def-axiom-of-choice]])

[F2] On $\mathbb P^1_k$, $H^0(\mathcal O(d))$ has basis
$x_0^{d-m}x_1^m$ for $0\le m\le d$, and $H^1(\mathcal O(-d-2))$ has Laurent
basis $x_0^{e_0}x_1^{e_1}$ with $e_0,e_1<0$ and $e_0+e_1=-d-2$; both groups
have dimension $d+1$. ([[thm-cohomology-projective-space-twisting-sheaves]])

[F3] The standard frames satisfy $x_0^{d+2}=s^{d+2}x_1^{d+2}$ on the overlap,
$s=1/t$, and $dt=-s^{-2}ds$. Also $dt$ maps to $x_0^{-2}$ and $ds$ maps to
$-x_1^{-2}$ under $\omega_{\mathbb P^1}\cong\mathcal O(-2)$. Thus
$t^m dt\otimes x_0^{d+2}=-s^{d-m}ds\otimes x_1^{d+2}$ and corresponds to
$x_0^{d-m}x_1^m$. The sheaves $\mathcal O(r)$ are invertible and
$\mathcal O(r)^{-1}\cong\mathcal O(-r)$. ([[def-twisting-sheaf-proj]], [[def-relative-projective-space-standard-charts]], [[def-invertible-sheaf]], [[def-canonical-line-bundle-curve]])

[F4] Principal parts give the cokernel description of $H^1$; in particular,
each finite-support tail $t^{-j}$ in the frame $x_0^{-d-2}$ represents the
class $c_j$. ([[lem-principal-parts-cech-h1-presentation]])

[F5] At the rational origin with parameter $t$, the local residue of
$t^{m-j}dt$ is its $t^{-1}$ coefficient. Over a perfect field, the positive
residue pairing is the sum of these local residues. ([[def-residue-rational-differential-curve-point]], [[def-residue-pairing-principal-parts]])

[F6] For a smooth proper geometrically integral curve, the fixed normalized
Gysin trace and its Serre pairing are defined over every field. Over a perfect
field the trace pairing is the negative of the positive residue pairing.
([[thm-serre-duality-curves-line-bundles]], [[rem-duality-trace-normalization]])

[F7] For a proper scheme, coherent cohomology commutes with arbitrary field
extension. The fixed Gysin trace and its cup/evaluation pairing also commute
with extension of the base field. ([[lem-proper-cohomology-field-extension]], [[lem-smooth-projective-embedding-gysin-trace-compatibility]])

[F8] On $\mathbb P^1_k$, $\omega_{\mathbb P^1}\cong\mathcal O(-2)$: its
canonical degree is $-2$, and the Picard group is classified by degree.
([[cor-canonical-degree-two-g-minus-two]], [[cor-picard-projective-line-integers]], [[lem-projective-line-divisors-classified-by-degree]], [[def-degree-divisor-proper-curve]], [[def-canonical-line-bundle-curve]])

## Verification

**Proof technique:** identify the Laurent-tail and section bases, compute the
positive residue matrix at the rational origin, then descend the fixed-trace
sign from an algebraic closure.

1.1 By [F2], $H^1(\mathbb P^1,\mathcal L)$ and $H^0(\mathbb P^1,\mathcal O(d))$ have dimension $d+1$. For $1\le j\le d+1$, the single tail $t^{-j}$ in the frame $x_0^{-d-2}$ is a finite-support principal part at the rational origin, and by [F4] it represents the class $c_j$. [F2, F4]

1.2 By [F3], $\sigma_m=t^m dt\otimes x_0^{d+2}$ has $U_1$ expression $-s^{d-m}ds\otimes x_1^{d+2}$, hence is regular for $0\le m\le d$. Under $dt\mapsto x_0^{-2}$ and $ds\mapsto -x_1^{-2}$ it corresponds to $x_0^{d-m}x_1^m$, so these sections form the basis of the dual canonical twist. [F2, F3]

2.1 At the rational point $0$, the product of the local principal part and section is $t^{m-j}dt$, whose positive local residue is $\delta_{j,m+1}$ by [F5]. Choose an algebraic closure $K=\bar k$; it is perfect, so [F6] gives $t_{\mathbb P^1_K}(c_{j,K}\cup\sigma_{m,K})=-\delta_{j,m+1}$. The class and section defined over $k$ pull back to the same expressions over $K$. [F1, F5, F6, step 1.1, step 1.2]

3.1 By [F7], cohomology classes, cup products and the fixed Gysin trace commute with $k\to K$. Thus $t_{\mathbb P^1_k}(c_j\cup\sigma_m)$ maps to $-\delta_{j,m+1}$ in $K$; injectivity of $k\hookrightarrow K$ gives the same scalar over $k$. In ascending orders the normalized matrix is $-I_{d+1}$; reversing the section order to $m=d,\ldots,0$ makes it anti-diagonal with entries $-1$. Because the $\sigma_m$ form a basis by step 1.2, invertibility of this matrix proves that the $d+1$ classes $c_j$ are independent; their number equals $\dim_k H^1=d+1$ by step 1.1, so they form a basis. [F2, F7, step 1.1, step 1.2, step 2.1, algebra]

4.1 By [F8], $\omega_{\mathbb P^1}\otimes\mathcal L^{-1}\cong\mathcal O(d)$, so the bases above are those of the two Serre-dual spaces. The explicit normalized matrix is perfect, in agreement with the arbitrary-field duality pairing [F6]. For $d=0$ it is $[-1]$, and characteristic two identifies $-1$ with $1$. [F6, F8, step 1.1, step 1.2, step 3.1] ∎
