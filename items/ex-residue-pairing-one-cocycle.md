---
id: ex-residue-pairing-one-cocycle
kind: example
title: "One cocycle carried through the residue realization of Serre duality"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-h1-line-bundle-dual-sections
  - def-axiom-of-choice
  - def-canonical-line-bundle-curve
  - def-perfect-field
  - def-relative-projective-space-standard-charts
  - def-residue-pairing-principal-parts
  - def-residue-rational-differential-curve-point
  - def-twisting-sheaf-proj
  - lem-principal-parts-cech-h1-presentation
  - rem-duality-trace-normalization
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-serre-duality-curves-line-bundles
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "John Tate, Residues of differentials on curves, Ann. Sci. E.N.S. (4) 1 (1968) 149-159"
      url: "http://www.numdam.org/article/ASENS_1968_4_1_1_149_0.pdf"
    - title: "MIT 18.725 Algebraic Geometry (Fall 2015) course notes, Lectures 24-25"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
verification:
  precheck: pass

---

## Example

Assume the Axiom of Choice as inherited from the cited duality, residue and
cohomology suppliers ([[def-axiom-of-choice]]). Let $k$ be a perfect field,
let $C=\mathbb P^1_k$ have coordinate $t=x_1/x_0$ on $U_0$, fix $d\ge0$, and
put $\mathcal L=\mathcal O(-d-2)$. Its dual canonical twist is
$\omega_C\otimes\mathcal L^{-1}\cong\mathcal O(d)$.

For $1\le j\le d+1$, the local tail in the $U_0$ frame of $\mathcal L$,
$$c_j=[t^{-j}\otimes x_0^{-d-2}]\in H^1(C,\mathcal L),$$
is a finite-support principal-part class. For $0\le m\le d$, the section of
the dual twist is
$$\sigma_m=t^m dt\otimes x_0^{d+2}\quad\text{on }U_0,\qquad \sigma_m=-s^{d-m}ds\otimes x_1^{d+2}\quad\text{on }U_1,$$
where $s=1/t$. The second expression shows it is regular at infinity and
corresponds to $x_0^{d-m}x_1^m$ under $\omega_C\cong\mathcal O(-2)$.

The positive residue pairing evaluates at the supported rational point:
$$\langle c_j,\sigma_m\rangle=\operatorname{res}_0(t^{m-j}dt)=\delta_{j,m+1}.$$
With rows $j=1,\ldots,d+1$ and columns $m=0,\ldots,d$, this is the
diagonal identity matrix. Reversing the section order to $m=d,\ldots,0$
makes it anti-diagonal. Since the sections form a basis, this invertible
matrix also proves that the classes $c_j$ form a basis. The fixed normalized
Serre pairing is its negative, so its matrix has entries $-\delta_{j,m+1}$;
it is perfect. At $d=0$ its
value on $c_1$ and $\sigma_0$ is $-1$, which equals $1$ in characteristic
two.

The Axiom of Choice enters through the cited suppliers; the displayed
computations make no additional choices.

## Facts & Assumptions

**Given:** the Axiom of Choice, a perfect field $k$, $C=\mathbb P^1_k$ with
coordinate $t=x_1/x_0$, an integer $d\ge0$, and
$\mathcal L=\mathcal O(-d-2)$.

[F1] The Axiom of Choice is inherited through the duality, residue and
projective-cohomology suppliers; this computation makes no further selection.
([[def-axiom-of-choice]])

[F2] The canonical bundle is $\omega_C\cong\mathcal O(-2)$. Under the
standard charts, $dt=-s^{-2}ds$ and the canonical-bundle identification sends
$dt$ to $x_0^{-2}$ and $ds$ to $-x_1^{-2}$. The sheaves $\mathcal O(r)$ are
invertible, satisfy $\mathcal O(r)^{-1}\cong\mathcal O(-r)$, and their frames
obey $x_0^r=s^r x_1^r$ on the overlap. ([[def-canonical-line-bundle-curve]], [[def-twisting-sheaf-proj]])

[F3] The cohomology of the twists gives $H^1(\mathcal O(-d-2))$ the Laurent
basis $x_0^{e_0}x_1^{e_1}$ with $e_0,e_1<0$ and $e_0+e_1=-d-2$, and gives
$H^0(\mathcal O(d))$ the basis $x_0^{d-m}x_1^m$, $0\le m\le d$. ([[thm-cohomology-projective-space-twisting-sheaves]])

[F4] Principal parts compute $H^1$ as finite-support local tails modulo
principal parts of global meromorphic sections (including zero); in particular each tail $t^{-j}$ in the frame
$x_0^{-d-2}$ represents the class $c_j$. ([[lem-principal-parts-cech-h1-presentation]])

[F5] At a rational point with parameter $t$, residue is the coefficient of
$t^{-1}dt$. Over a perfect field, the positive residue pairing is the sum of
these local residues. ([[def-residue-rational-differential-curve-point]], [[def-residue-pairing-principal-parts]], [[def-perfect-field]])

[F6] Over a perfect field, the fixed normalized Serre pairing is the negative
of the positive residue pairing. ([[thm-serre-duality-curves-line-bundles]], [[rem-duality-trace-normalization]])

[F7] For a smooth proper geometrically integral curve,
$h^1(C,\omega_C)=h^0(C,\mathcal O_C)$. ([[cor-h1-line-bundle-dual-sections]])

## Verification

**Proof technique:** represent the tails and global sections in their actual
line-bundle frames, evaluate the positive local coefficient, and apply the
fixed-trace sign comparison.

1.1 By [F2], $\omega_C\otimes\mathcal L^{-1}\cong\mathcal O(d)$, and [F3] gives $\dim_kH^1(C,\mathcal L)=\dim_kH^0(C,\mathcal O(d))=d+1$. For each $1\le j\le d+1$, the tail $t^{-j}$ in the $U_0$ frame has finite support at the rational origin and represents $c_j$ by [F4]. [F1, F2, F3, F4]

2.1 The standard section $x_0^{d-m}x_1^m$ is $t^m x_0^d$ on $U_0$, so under $dt\mapsto x_0^{-2}$ it is represented by $\sigma_m=t^m dt\otimes x_0^{d+2}$. With $s=1/t$, $dt=-s^{-2}ds$ and $x_0^{d+2}=s^{d+2}x_1^{d+2}$, this becomes $-s^{d-m}ds\otimes x_1^{d+2}$, regular for $0\le m\le d$. Thus the $\sigma_m$ form the displayed section basis. [F1, F2, F3, step 1.1]

3.1 Multiplying the local representative of $c_j$ by $\sigma_m$ cancels the line-bundle frames and gives $t^{m-j}dt$ at the origin. By [F5], its positive residue is $1$ when $m-j=-1$ and $0$ otherwise, namely $\delta_{j,m+1}$. By [F6], the fixed normalized Serre value is $-\delta_{j,m+1}$. [F1, F5, F6, step 1.1, step 2.1]

4.1 For ascending section order $m=0,\ldots,d$, the matrix $\delta_{j,m+1}$ is diagonal; for reversed order $m=d,\ldots,0$ it is anti-diagonal. Since the sections form a basis by step 2.1, invertibility of this positive residue matrix proves that the $c_j$ are independent; their number is $d+1=\dim_kH^1(C,\mathcal L)$ by step 1.1, so they form a basis. The normalized matrix is its negative and is invertible, so both pairings are perfect. [F1, F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 For $d=0$, [F7] gives $h^1(C,\omega_C)=1$, and step 3.1 gives normalized trace $-1$ on $[t^{-1}\otimes x_0^{-2}]$ paired with $dt\otimes x_0^2$. In characteristic two this value is $1$. [F1, F2, F6, F7, step 3.1] ∎
