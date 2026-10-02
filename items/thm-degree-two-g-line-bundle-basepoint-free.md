---
id: thm-degree-two-g-line-bundle-basepoint-free
kind: theorem
title: "Line bundles of degree at least 2g are base-point-free"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-degree-descends-picard-curve
  - cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two
  - cor-rr-exact-high-degree-formula
  - def-axiom-of-choice
  - def-base-point-linear-system
  - def-complete-linear-system
  - def-degree-divisor-proper-curve
  - def-divisor-smooth-proper-curve
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - def-flat-morphism-schemes
  - def-globally-generated-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-pullback-cartier-divisor
  - def-relative-projective-space-standard-charts
  - lem-add-one-point-exact-sequence-line-bundle
  - lem-flat-morphisms-stable-base-change
  - lem-proper-cohomology-field-extension
  - lem-pullback-cartier-divisor-line-bundle
  - prop-modules-over-a-field-are-projective-flat-and-injective
  - thm-base-point-free-linear-system-morphism
  - thm-artinian-ring-has-finite-length
  - thm-cartier-weil-divisors-curves-agree
  - thm-dvr-ideal-and-module-length
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-local-ring-smooth-curve-dvr
  - thm-right-exactness-of-tensor-products
  - thm-structure-theorem-for-artinian-rings
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Ch. 8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "MIT 18.725 Algebraic Geometry (Fall 2015) course notes, Lectures 24-25"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the duality suppliers. Let $C$ be
a smooth proper geometrically integral curve over a field $k$ of genus $g$ and
let $L$ be an invertible $\mathcal O_C$-module with $\deg(L)\ge2g$. Then $L$ is
base-point-free: for every closed point $p$ of $C$ there is a global section
$s$ of $L$ with $s$ not vanishing at $p$; equivalently the evaluation morphism
$\mathcal O_C^{h^0(C,L)}\to L$ is surjective, and the complete linear system
$|L|$ defines a $k$-morphism $\phi_L:C\to\mathbf P^{h^0(C,L)-1}_k$ with
$\phi_L^*\mathcal O(1)\cong L$. Over an algebraically closed field the sharper
statement $h^0(C,L)-h^0(C,L(-p))=1$ holds at every closed point $p$.

## Facts & Assumptions

**Given:** A field $k$; a smooth proper geometrically integral curve $C$ over $k$ of genus $g$; an invertible $\mathcal O_C$-module $L$ with $\deg(L)\ge2g$; an algebraic closure $\bar k$ and the base change $C_{\bar k}$.

[F1] For an invertible sheaf $\mathcal E$ with $\deg(\mathcal E)>2g-2$ one has
$H^1(C,\mathcal E)=0$ and $h^0(C,\mathcal E)=\deg(\mathcal E)+1-g$.
([[cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two]],
[[cor-rr-exact-high-degree-formula]])

[F2] On the smooth curve $C$ every invertible sheaf is
$\mathcal O_C(D)$ for a divisor $D$ well defined modulo linear equivalence, with
$\deg(L)=\deg_k(D)$; degrees of divisors are additive,
$\deg_k(D-p)=\deg_k(D)-[\kappa(p):k]$ for a closed point $p$, and
$\mathcal O_C(D-p)\cong\mathcal O_C(D)\otimes\mathcal O_C(-p)$ is the sheaf of
$L$ twisted by the point.
([[thm-cartier-weil-divisors-curves-agree]],
[[def-degree-divisor-proper-curve]],
[[def-invertible-sheaf-of-cartier-divisor]],
[[thm-line-bundle-rational-section-cartier-divisor]])

[F3] For a divisor $D$ and a closed point $p$ with residue degree
$d=[\kappa(p):k]$ the inclusion $\mathcal O_C(D)\to\mathcal O_C(D+p)$ sits in a
short exact sequence
$0\to\mathcal O_C(D)\to\mathcal O_C(D+p)\to i_*(\mathcal O_C(D+p)|_p)\to0$
whose cokernel is the skyscraper at $p$ with
$H^0\cong\kappa(p)$ of dimension $d$ and $H^q=0$ for $q\ge1$; equivalently
$0\to L(-p)\to L\to L|_p\to0$ with $H^0(L|_p)=\kappa(p)$.
([[lem-add-one-point-exact-sequence-line-bundle]])

[F4] A linear system $|D|$ is base-point-free when no closed point lies in
every member, equivalently when its evaluation map is surjective, that is when
$\mathcal O_C(D)$ is globally generated. A base-point-free subspace of $L(D)$
of dimension $r+1\ge1$ defines a morphism to $\mathbf P^r_k$ whose pullback of
$\mathcal O(1)$ is $\mathcal O_C(D)$; projective space has its standard
charts. ([[def-base-point-linear-system]], [[def-complete-linear-system]],
[[def-globally-generated-sheaf]],
[[thm-base-point-free-linear-system-morphism]],
[[def-relative-projective-space-standard-charts]])

[F5] For any field extension $K/k$ and coherent sheaf $\mathcal F$ on $C$,
$H^q(C_K,\mathcal F_K)\cong H^q(C,\mathcal F)\otimes_kK$ for all $q\ge0$.
Thus the genus and the dimensions of global sections are preserved. The
evaluation map on $C_K$ is the base change of the evaluation map on $C$,
because the displayed cohomology isomorphism identifies its source. If its
cokernel becomes zero over $K$, then on each affine open its module $M$ has
$M\otimes_kK=0$. For a nonzero $M$, the inclusion of a one-dimensional
$k$-subspace remains injective after tensoring with the flat $k$-module $K$,
and that subspace tensors to $K\ne0$; hence $M=0$. This proves descent of
global generation. ([[lem-proper-cohomology-field-extension]],
[[def-flat-and-faithfully-flat-modules-and-ring-maps]],
[[prop-modules-over-a-field-are-projective-flat-and-injective]],
[[thm-right-exactness-of-tensor-products]])

[F6] **Degree after arbitrary field extension.** Let $K/k$ be any field
extension and let $x$ be a closed point of $C$, with finite residue field
$E=\kappa(x)$. The pullback point scheme is
$x_K=\operatorname{Spec}(E\otimes_kK)$. A finite $k$-basis of $E$ tensors to
a $K$-basis, so this finite-dimensional $K$-algebra has dimension $[E:k]$ and
is Artinian: a descending chain of ideals is a descending chain of
finite-dimensional $K$-subspaces and therefore stabilizes. By the structure
theorem for Artinian rings, it is the finite product of its localizations at
its maximal ideals. Write $E\otimes_kK=\prod_y A_y$ over those factors. Each
$A_y$ is an Artinian local ring, so its regular module has finite composition
length. Every simple factor is its residue field $\kappa(y)$, and additivity
of $K$-dimension along that composition series gives
$$\dim_K A_y=\operatorname{length}_{A_y}(A_y)[\kappa(y):K].$$
The dimension of a finite product is the sum of the dimensions of its factors,
so
$$[E:k]=\sum_y\operatorname{length}_{A_y}(A_y)[\kappa(y):K].$$
The projection $C_K\to C$ is flat: $K$ is flat over $k$ by
[[def-flat-and-faithfully-flat-modules-and-ring-maps]], and flatness of
morphisms is preserved by base change. The closed point $x$ is an effective Cartier
divisor on the smooth curve; its pullback is $x_K$. At each $y$, the local
ring of $C_K$ is a DVR, and if a local equation for $x_K$ has order $e$, its
quotient has length $e$. Thus the coefficient of $y$ in the pulled-back
divisor is $\operatorname{length}_{A_y}(A_y)$, and
$$\deg_K(x_K)=\sum_y\operatorname{length}_{A_y}(A_y)[\kappa(y):K]=[E:k]=\deg_k(x).$$
By additivity, $\deg_K(D_K)=\deg_k(D)$ for every divisor
$D=\sum_xn_x[x]$, with no separability hypothesis and including negative
coefficients. Every invertible sheaf is $\mathcal O_C(D)$ for a divisor
$D$ by taking a nonzero rational section. Flat pullback gives
$\mathcal O_{C_K}(D_K)\cong\mathcal O_C(D)_K$; the Cartier/Weil
identification and the degree homomorphism on the Picard group therefore give
$$\deg(\mathcal F_K)=\deg(\mathcal F)$$
for every invertible sheaf $\mathcal F$ on $C$. In particular this holds for
$K=\bar k$. ([[def-degree-divisor-proper-curve]],
[[def-divisor-smooth-proper-curve]], [[def-flat-morphism-schemes]],
[[def-flat-and-faithfully-flat-modules-and-ring-maps]],
[[lem-flat-morphisms-stable-base-change]],
[[prop-modules-over-a-field-are-projective-flat-and-injective]],
[[thm-local-ring-smooth-curve-dvr]],
[[thm-structure-theorem-for-artinian-rings]],
[[thm-artinian-ring-has-finite-length]],
[[thm-dvr-ideal-and-module-length]],
[[thm-line-bundle-rational-section-cartier-divisor]],
[[def-pullback-cartier-divisor]],
[[lem-pullback-cartier-divisor-line-bundle]],
[[thm-cartier-weil-divisors-curves-agree]],
[[cor-degree-descends-picard-curve]])

[F7] The Axiom of Choice: every family of nonempty sets has a choice function.
([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct; test generation point by point over the algebraic
closure using the point exact sequence and high-degree Riemann-Roch, then
descend along the flat field extension.

1.1 (Set-up.) By [F2] there is a divisor $D$ on $C$ with $L\cong\mathcal O_C(D)$ and $\deg(L)=\deg_k(D)\ge2g$; consequently also $\deg(L)>2g-2$, so the high-degree formulas of [F1] apply to $L$ and give $h^0(C,L)=\deg(L)+1-g\ge g+1\ge1$. [F1, F2, given]

2.1 (Base change.) Let $\bar k$ be an algebraic closure and $C_{\bar k}$ the base change. By [F6], $\deg(L_{\bar k})=\deg(L)\ge2g$; by [F5], the genus of $C_{\bar k}$ is $g$, dimensions of cohomology are preserved, and generation of $L$ by global sections descends from $L_{\bar k}$. Every closed point of $C_{\bar k}$ is $\bar k$-rational. [F5, F6, step 1.1]

3.1 (Point computation over the closure.) Let $p$ be a closed point of $C_{\bar k}$. By [F3] applied to the divisor $D_{\bar k}$ and the point $p$ there is a short exact sequence $0\to L_{\bar k}(-p)\to L_{\bar k}\to L_{\bar k}|_p\to0$ with $H^0(L_{\bar k}|_p)=\kappa(p)$ of dimension $1$; by [F2] the twist $L_{\bar k}(-p)$ has degree $\deg(L)-1\ge2g-1>2g-2$, so [F1] gives $h^1(L_{\bar k}(-p))=0$ and $h^0(L_{\bar k}(-p))=(\deg(L)-1)+1-g=\deg(L)-g$, while $h^0(L_{\bar k})=\deg(L)+1-g$. [F1, F2, F3, step 2.1]

4.1 (Generation at every point of the closure.) The long exact cohomology sequence of the sequence of step 3.1 begins $0\to H^0(L_{\bar k}(-p))\to H^0(L_{\bar k})\to H^0(L_{\bar k}|_p)\to H^1(L_{\bar k}(-p))$, and the last term vanishes by step 3.1, so the evaluation map $H^0(L_{\bar k})\to\kappa(p)=L_{\bar k}|_p$ is surjective. Choose a section whose value is nonzero in this one-dimensional residue fiber. In a local frame of $L_{\bar k,p}$ its coefficient has nonzero residue, hence is a unit in the local ring; that section therefore generates the stalk $(L_{\bar k})_p$. This holds for every closed point $p$; at the generic point, a nonzero global section exists by $h^0(L_{\bar k})=h^0(L)>0$ and is nonzero because $C_{\bar k}$ is integral. Thus $L_{\bar k}$ is globally generated in the sense of [F4]. [F1, F3, F4, F5, step 1.1, step 3.1]

4.2 (Sharper statement over an algebraically closed field.) If $k$ is algebraically closed, then $C=C_{\bar k}$ and the residue degree of every closed point $p$ is one; the computation of steps 2.1 and 3.1 then gives $h^0(C,L)-h^0(C,L(-p))=(\deg(L)+1-g)-(\deg(L)-g)=1$ at every closed point $p$, which is the sharper statement. [F1, F3, step 3.1]

5.1 (Descent.) By [F5] and step 4.1 the sheaf $L$ itself is generated by its global sections, so the evaluation morphism $\mathcal O_C^{h^0(C,L)}\to L$ is surjective and, equivalently, the complete linear system $|L|$ is base-point-free: for every closed point $p$ some global section $s$ of $L$ does not vanish at $p$. [F4, F5, step 4.1]

6.1 (The morphism.) Since $|L|$ is base-point-free and $h^0(C,L)=\deg(L)+1-g\ge g+1\ge1$ by [F1] and step 1.1, [F4] applied to the base-point-free system $|L|=P(L(D))$ gives a $k$-morphism $\phi_L:C\to\mathbf P^{h^0(C,L)-1}_k$, well defined up to the standard projective-linear action, with $\phi_L^*\mathcal O(1)\cong\mathcal O_C(D)\cong L$. [F1, F4, step 5.1]

7.1 Steps 4.1, 5.1 and 6.1 prove the base-point-freeness, the evaluation-surjectivity and morphism clauses, and the sharper algebraically closed statement; the Axiom of Choice [F7] is used exactly through the duality, divisor and projective-space suppliers cited above. [F7, step 5.1, step 6.1, step 4.2] ∎
