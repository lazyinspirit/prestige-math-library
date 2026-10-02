---
id: cor-degree-three-line-bundle-embeds-genus-one-plane-cubic
kind: corollary
title: "A genus-one curve with a rational point embeds as a plane cubic"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two
  - cor-projective-plane-bezout-length-form
  - cor-rr-exact-high-degree-formula
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-degree-projective-hypersurface
  - def-divisor-smooth-proper-curve
  - def-little-l-divisor
  - def-rational-section-line-bundle
  - def-very-ample-invertible-sheaf-relative
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
  - thm-affine-domain-dimension-transcendence-degree
  - thm-base-point-free-linear-system-morphism
  - thm-cartier-weil-divisors-curves-agree
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - thm-degree-two-g-plus-one-line-bundle-very-ample
  - thm-dimension-formula-for-affine-domains
  - thm-dvr-element-normal-form
  - thm-dvr-ideal-and-module-length
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-local-ring-smooth-curve-dvr
  - thm-principal-divisor-degree-zero-proper-curve
  - thm-twisting-sheaf-invertible-standard-graded
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Ch. 8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "MIT 18.725 Algebraic Geometry (Fall 2015) course notes, Lectures 24-25"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from cohomology, linear systems,
smooth-curve DVR and divisor theory, projective-space, affine-dimension, and
Bezout suppliers. Let $C$ be a smooth proper geometrically integral curve of genus one
over a field $k$ that has a rational point $p_0$ (equivalently, a degree-one
divisor), and let $L$ be an invertible sheaf of degree three on $C$, for
instance $L=\mathcal O_C(3p_0)$. Then $h^0(C,L)=3$, the sheaf $L$ is very
ample, and $\phi_L:C\to\mathbf P^2_k$ is a closed immersion whose image is a
plane cubic curve, that is, a curve of degree three in $\mathbf P^2_k$; in
particular every genus-one curve with a rational point is isomorphic to a plane
cubic.

## Facts & Assumptions

**Given:** A field $k$; a smooth proper geometrically integral curve $C$ over $k$ of genus one with a rational point $p_0$, equivalently a degree-one divisor; an invertible sheaf $L$ of degree three on $C$.

[F1] For an invertible sheaf $\mathcal E$ of degree greater than $2g-2$,
$H^1(C,\mathcal E)=0$ and
$h^0(C,\mathcal E)=\deg(\mathcal E)+1-g$. In particular, for $g=1$ and
$\deg(L)=3$, these give $H^1(C,L)=0$ and $h^0(C,L)=3$.
([[cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two]],
[[cor-rr-exact-high-degree-formula]])

[F2] For an invertible sheaf $L$ of degree at least $2g+1$ the base-point-free
morphism $\phi_L:C\to\mathbf P^{h^0(C,L)-1}_k$ is a closed immersion with
$\phi_L^*\mathcal O(1)\cong L$, and $L$ is closed H-very ample relative to
$\operatorname{Spec}k$; for $g=1$ and $\deg(L)=3=2g+1$ this applies.
([[thm-degree-two-g-plus-one-line-bundle-very-ample]],
[[def-very-ample-invertible-sheaf-relative]])

[F3] When the complete linear system $|L|$ is base-point-free, its section space has dimension $h^0(C,L)=r+1\ge1$, its projective dimension is $r$, and it defines $\phi_L:C\to\mathbf P^r_k$ with
$\phi_L^*\mathcal O(1)\cong L$ and with the members of $|L|$ as pullbacks of
hyperplanes; here $r=h^0(C,L)-1$.
([[thm-base-point-free-linear-system-morphism]])

[F4] For a divisor $D$ one has
$l(D)=\dim_kL(D)=\dim_kH^0(C,\mathcal O_C(D))=h^0(D)$; on the curve, divisors
are finite sums of closed points with additive degree
$\deg_k(D)=\sum_xn_x[\kappa(x):k]$, and the degree of an invertible sheaf is
$\deg_k$ of any associated divisor. A nonzero rational section of an
invertible sheaf determines its Cartier divisor; on a smooth curve its
coefficient at a closed point is the order in the local DVR. Principal
divisors have degree zero, so this degree is independent of the section. In a
DVR, a nonzero local equation is a unit times a uniformizer power, and the
length of its quotient is that exponent.
([[def-little-l-divisor]], [[def-degree-divisor-proper-curve]],
[[def-divisor-smooth-proper-curve]], [[def-rational-section-line-bundle]],
[[thm-cartier-weil-divisors-curves-agree]],
[[thm-line-bundle-rational-section-cartier-divisor]],
[[thm-local-ring-smooth-curve-dvr]],
[[thm-principal-divisor-degree-zero-proper-curve]],
[[thm-dvr-element-normal-form]], [[thm-dvr-ideal-and-module-length]])

[F5] Every closed subscheme of projective space is represented by a unique
saturated homogeneous ideal. For an integral image, the homogeneous coordinate
ring injects degreewise into the section ring and is a domain. A height-one
prime in a finite-variable polynomial ring over a field is principal, and an
irreducible homogeneous generator gives the degree of its reduced
hypersurface. The projective twisting sheaves multiply as tensor powers, so
the section ring used here has the usual graded multiplication.
([[thm-closed-subschemes-projective-space-homogeneous-ideals]],
[[lem-finite-variable-polynomial-rings-over-fields-are-ufds]],
[[def-degree-projective-hypersurface]],
[[thm-twisting-sheaf-invertible-standard-graded]])

[F6] If $A$ is a finite-type $k$-domain, then
$\dim A=\operatorname{trdeg}_k\operatorname{Frac}(A)$. For a prime ideal
$\mathfrak p$ in a finite-type $k$-domain $R$,
$\operatorname{ht}(\mathfrak p)+\operatorname{trdeg}_k\operatorname{Frac}(R/\mathfrak p)
=\operatorname{trdeg}_k\operatorname{Frac}(R)$.
([[def-algebraic-curve-over-field]],
[[thm-affine-domain-dimension-transcendence-degree]],
[[thm-dimension-formula-for-affine-domains]])

[F7] The projective-plane Bezout formula identifies the sum of local
intersection lengths weighted by residue degrees with the product of the
degrees of two coprime positive-degree homogeneous forms. It holds over any
field. ([[cor-projective-plane-bezout-length-form]])

[F8] The Axiom of Choice is inherited from the cohomology, projective-space,
dimension, and Bezout suppliers above. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct; Riemann--Roch and the very-ampleness threshold
give the embedding, and the saturated homogeneous ideal, UFD height-one
argument, and weighted Bezout identify its scheme-theoretic image as a cubic.

1.1 (Degree-one divisor.) A rational point $p_0$ gives the divisor $[p_0]$ of degree one. Conversely, let $D$ be any divisor of degree one, not assumed effective. Since $1>2g-2=0$, [F1] gives $h^0(C,\mathcal O_C(D))=l(D)=1$. A nonzero section has an effective divisor $E$ linearly equivalent to $D$; the degree conventions in [F4] give $\deg_k(E)=1$. In $\deg_k(E)=\sum_x n_x[\kappa(x):k]$, each $n_x$ is a nonnegative integer and each residue degree is a positive integer, so $E=[p]$ for one $k$-rational point $p$. Thus the parenthetical equivalence in the Statement holds also for signed divisors. The same degree convention gives $\deg(\mathcal O_C(3p_0))=3$. [F1, F4, given]

1.2 (Cohomology.) Since $\deg(L)=3>2g-2=0$, [F1] gives $H^1(C,L)=0$ and $h^0(C,L)=3+1-1=3$. [F1, given]

2.1 (Very ampleness.) The degree satisfies $\deg(L)=3=2g+1$, so [F2] applies. The complete linear system morphism of [F3] is a closed immersion $\phi_L:C\to\mathbf P^{h^0(C,L)-1}_k=\mathbf P^2_k$ and $\phi_L^*\mathcal O(1)\cong L$. [F2, F3, step 1.2]

3.1 (The homogeneous ideal of the image.) Put $Y=\phi_L(C)$, $R=k[X_0,X_1,X_2]$, and let $J\subset R$ be the unique saturated homogeneous ideal with $Y=V_+(J)$, given by [F5]. The scheme $Y$ is integral because it is isomorphic to $C$. For every degree, restriction to $Y$ embeds $S=R/J$ into the section ring $\bigoplus_{n\ge0}H^0(Y,\mathcal O_Y(n))$: a homogeneous form maps to its restricted section, and if that section is zero then it vanishes on every standard projective chart, so the saturation criterion in [F5] puts the form in $J$. The section ring is a domain: a nonzero section of an invertible sheaf on an integral scheme remains nonzero at the generic point, since on a trivializing affine open its coefficient belongs to a domain embedded in the function field. At the generic point, the product of two nonzero homogeneous sections is the tensor product of two nonzero vectors over $k(Y)$, hence is nonzero; the grading then shows that products of arbitrary nonzero sums are nonzero by considering their least nonzero degrees. Thus $S$ is a domain and $J$ is prime. Each coordinate section is a nonzero member of the basis defining the complete linear system, so $X_i\notin J$. [F3, F5, step 2.1]

4.1 (The homogeneous ideal has height one.) Fix an index $i$ and write $A=(S_{X_i})_0$. This is the coordinate ring of the nonempty affine chart $Y\cap D_+(X_i)$; it is a finite-type domain of dimension one because $Y$ is an integral curve. Since $S$ is standard graded and $X_i$ has degree one, $S_{X_i}\cong A[X_i,X_i^{-1}]$: a homogeneous fraction is its degree-zero part times the corresponding power of $X_i$, and the grading makes this decomposition direct. Therefore $\operatorname{trdeg}_k\operatorname{Frac}(S)=2$ by [F6]. Apply the dimension formula of [F6] to $J\subset R$; it gives $\operatorname{ht}(J)+2=3$, so $J$ has height one. By [F5], $J=(F)$ for an irreducible element $F$. Because $J$ is homogeneous, each homogeneous component of $F$ belongs to $(F)$. If $F$ had more than one degree, a nonzero component of degree smaller than $\deg F$ would equal $F G$ for some polynomial $G$, which is impossible by additivity of total degree in the polynomial domain. Thus $F$ is homogeneous. Therefore $Y=V_+(F)$ scheme-theoretically, and $F$ is square-free. [F5, F6, step 3.1]

5.1 (The degree.) The irreducible homogeneous form $F$ has positive degree, and [F5] identifies the degree of its reduced hypersurface with $\deg F$. Choose a linear form $\ell$ whose restriction to $Y$ is nonzero; when $\deg F=1$, choose one not proportional to $F$, and when $\deg F>1$ any nonzero linear form is coprime to $F$. The zero scheme of $s=\ell|_C\in H^0(C,L)$ is scheme-theoretically $Y\cap V_+(\ell)$ under $\phi_L$. For each closed point $x$ in that intersection, the local ring of $C$ is a DVR by [F4]. If the local equation of $s$ is $u t^n$ with $u$ a unit and $t$ a uniformizer, then $\operatorname{length}_{\mathcal O_{C,x}}\mathcal O_{C,x}/(s)=n$, exactly the coefficient of the zero divisor of $s$. Consequently the weighted sum of the intersection lengths in [F7] is $\deg(L)=3$ by [F4]. The forms $F$ and $\ell$ are coprime, so the same sum is $\deg(F)$ by [F7]. Hence $\deg(F)=3$, and $Y$ is a plane cubic as claimed. [F4, F5, F7, step 4.1]

6.1 The very ample sheaf $L$ embeds every given genus-one curve into $\mathbf P^2_k$ as a scheme-theoretic cubic by steps 1.2, 2.1, and 3.1--5.1. Taking $L=\mathcal O_C(3p_0)$ when a rational point is given proves that every such curve is isomorphic to a plane cubic. The Axiom of Choice is inherited through the cohomology, projective-space, affine-dimension, and Bezout suppliers cited above; no unmentioned rational intersection points are chosen. [F1, F2, F3, F5, F6, F7, F8, step 1.1, step 1.2, step 2.1, step 5.1] ∎
