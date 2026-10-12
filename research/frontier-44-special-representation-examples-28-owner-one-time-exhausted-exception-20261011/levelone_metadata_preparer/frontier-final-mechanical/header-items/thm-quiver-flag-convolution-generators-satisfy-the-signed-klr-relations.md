---
id: thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations
kind: theorem
title: "Quiver-flag convolution generators satisfy the signed KLR relations"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 30
deps: [def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators,
       thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis,
       lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus,
       lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports,
       prop-first-chern-class-of-tensor-dual-and-conjugate-lines,
       thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle,
       def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. Varagnolo, E. Vasserot, Canonical bases and KLR-algebras, arXiv:0901.3992; complete 30-page article retrieved and read at the cited sections."
      url: "https://arxiv.org/pdf/0901.3992"
    - title: "R. Rouquier, Quiver Hecke algebras and 2-Lie algebras, arXiv:1112.3619; complete 48-page article retrieved and read at the cited sections."
      url: "https://arxiv.org/pdf/1112.3619"
---

## Statement

Assume the Axiom of Choice as inherited. In the setting of
[[def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators]], the geometric
classes $e_\nu$, $x_r$ and $\tau_r$ satisfy every relation of the intrinsic signed presentation
$S_\Gamma(\beta)$. They act on the shifted polynomial summands of
[[thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis]] by
$e_\nu$-projection, multiplication by $x_r$, the equal-color formula
$\tau_r(f)=(f-s_rf)/(x_r-x_{r+1})$ when $\nu_r=\nu_{r+1}$, and the distinct-color formula
$\tau_r(f)=(x_r-x_{r+1})^{h_{ij}}s_r(f)$ for $i=\nu_r\ne j=\nu_{r+1}$ on the $\nu$-summand with
values in the $s_r\nu$-summand, where $s_r$ simultaneously swaps the two variables and the two
letters. With the unit of $P_\nu$ in degree $-d_\nu$ and the variables in degree $2$, the
generators $e_\nu$, $x_r$, $\tau_r$ are homogeneous of degrees $0$, $2$,
$-a_{\nu_r\nu_{r+1}}$. Consequently the generator assignment is a graded $k$-algebra
homomorphism $S_\Gamma(\beta)\to\mathfrak A$ to the BM convolution algebra.

## Facts & Assumptions

**Given:** the Axiom of Choice; a characteristic-zero field $k$; a finite loopless quiver
$\Gamma$, a dimension vector $\beta$, a word $\nu$ of length $m$, the incidence varieties
$X_\nu,F_\nu,Z_{\eta,\nu}$, the algebra $\mathfrak A$ with generators $e_\nu,x_r,\tau_r$ and
the intrinsic signed presentation $S_\Gamma(\beta)$ of
[[def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators]], and the faithful
module $P=\bigoplus_\nu H_G^\bullet(X_\nu;k)[d_\nu]$.

[F1] Assume AC. [[def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators]]
fixes the generators as the diagonals $e_\nu=[\Delta_{X_\nu}]$, the dots
$x_re_\nu=\Delta_{X_\nu}^!\,x_r$ with $x_r=c_1^G(F^r/F^{r-1})$, and the normalized elementary
classes $\sigma_re_\nu=(-1)^{d_{s_r\nu}-\dim_{\mathbb C}C_{s_r\nu,\nu}}[C_{s_r\nu,\nu}]$,
$\tau_r=\sigma_r$ for equal colors and $\tau_r=(-1)^{h_{ij}}\sigma_r$ for distinct colors,
lists the relations of $S_\Gamma(\beta)$, and defines the grading $\deg e_\nu=0$,
$\deg x_re_\nu=2$, $\deg\tau_re_\nu=-a_{\nu_r\nu_{r+1}}$.

[F2] Assume AC. [[thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis]]
supplies the module structure of $\mathfrak A$ on $P$ and proves that the action is faithful,
so operator identities valid on all of $P$ are identities in $\mathfrak A$.

[F3] Assume AC. [[lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus]]
supplies the oriented proper correspondence calculus on the incidence spaces, in particular
that every elementary correspondence is a fibered push–pull operation along a flag-bundle
projection and that the middle self-intersection is cap product with the Euler class of the
normal bundle.

[F4] Assume AC. [[lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports]]
computes supported convolution as cap product with the refined middle-diagonal Thom class and
identifies zero-section self-intersection with the oriented Euler class, compatibly with
ordered iterated diagonals.

[F5] [[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]]: for complex lines over a
path-connected CW base, $c_1(L\otimes M)=c_1(L)+c_1(M)$, $c_1(L^*)=-c_1(L)$; in the split
flag model the arrow entry $\operatorname{Hom}(D_a,D_b)$ has first Chern class
$\chi_b-\chi_a$.

[F6] [[thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle]]: for a numerable
complex rank-$n$ bundle over a path-connected CW complex, $c_n(E)=e(E_{\mathbb R})$ with the
complex orientation.

[A1] The Axiom of Choice is consumed exactly through [F1]–[F4], which declare it for their
equivariant-descent and duality constructions; the polynomial identities, divisibility and
degree bookkeeping below are choice-free ([[def-axiom-of-choice]]).



## Proof

**Proof technique:** direct.

1.1 The action on the generators, units, idempotents and dots. By the convolution product of [F1] the diagonal classes $e_\nu$ are orthogonal idempotents with $\sum_\nu e_\nu=1$, acting on $P$ as the projections onto the summands $P_\nu$; the dots satisfy $x_re_\nu=e_\nu x_r$ and commute with each other, because on the polynomial model of [F2] they act by cup product with the first Chern classes $x_r$, and the only step needing care, the slide $\tau_rx_t-x_{s_r(t)}\tau_r=0$ for $t\notin\{r,r+1\}$ when the colors at $r,r+1$ differ, follows from the correspondence form $M_Cs_r$ of the elementary class: $M_Cs_rM_f=M_CM_{s_rf}s_r=M_{s_rf}M_Cs_r$ because the polynomial algebra is commutative. [F1, F2, given]

1.2 Unequal colors: the Euler class and the square relation. The stable-arrow quotient of an elementary correspondence with $i=\nu_r\ne j=\nu_{r+1}$ consists of $h_{ij}$ copies of $\operatorname{Hom}(D_{r+1},D_r)$: after the swap the arrow source $i$ sits at position $r+1$ and its target $j$ at position $r$, so by [F5] the standard Euler class is $(x_r-x_{r+1})^{h_{ij}}$, the Euler class of a complex bundle being its top Chern class by [F6]. In the standard fixed-point formula for the correspondence action of [F4] this gives $[C_{s_r\nu,\nu}]_{\mathrm{standard}}\cdot f=(x_r-x_{r+1})^{h_{ij}}s_r(f)$; the normalized $\sigma_r=(-1)^{h_{ij}}[C]_{\mathrm{standard}}$ acts by $(x_{r+1}-x_r)^{h_{ij}}s_r(f)$, and the additional factor $(-1)^{h_{ij}}$ in $\tau_r$ cancels it, so $\tau_r(f)=(x_r-x_{r+1})^{h_{ij}}s_r(f)$ exactly as stated. Composing the two oriented crossings and using $s_r(x_r-x_{r+1})^{h_{ij}}=(x_{r+1}-x_r)^{h_{ij}}$ gives $\tau_r^2e_\nu=(x_{r+1}-x_r)^{h_{ij}}(x_r-x_{r+1})^{h_{ji}}e_\nu=(-1)^{h_{ij}}(x_r-x_{r+1})^{h_{ij}+h_{ji}}e_\nu=Q_{\nu_r\nu_{r+1}}(x_r,x_{r+1})e_\nu$. [F1, F3, F4, F5, F6]

1.3 Equal colors: the divided difference and the mixed relations. If $\nu_r=\nu_{r+1}$ there is no arrow quotient; the elementary correspondence is the push–pull along the partial flag forgetting $F^r$, whose fiber is a projective line. At the two torus-fixed points of that fiber the tangent Euler classes are $x_r-x_{r+1}$ and $x_{r+1}-x_r$ by the self-intersection computation of [F4], and the fiber integral of the tautological first Chern class is $-1$, so the standard class acts by $(s_rf-f)/(x_r-x_{r+1})$ and the normalized class $\sigma_r=\tau_r=-[C]_{\mathrm{standard}}$ acts by $\tau_r(f)=(f-s_rf)/(x_r-x_{r+1})$, which is polynomial because $f-s_rf$ is antisymmetric and hence divisible by $x_r-x_{r+1}$. Direct evaluation on polynomials gives $\tau_r^2=0=Q_{ii}e_\nu$, $\tau_rx_r-x_{r+1}\tau_r=1$ and $\tau_rx_{r+1}-x_r\tau_r=-1$, the latter two also being the defining relations of the divided difference; other dots commute with $\tau_r$ because they involve disjoint variables. [F1, F3, F4, F5, F6]

2.1 Disjoint, all-distinct and equal-outer patterns. Crossings at positions with disjoint variable pairs commute, because their operators involve disjoint variables and neither changes the colors seen by the other; this gives the far-commutation relation. If the three consecutive colors are all distinct, both triple products cross the same three labeled line pairs once, with the same oriented factor attached to each pair, so the two products are equal and the braid difference vanishes; the cases $i,i,j$ and $j,i,i$ reduce to this after applying the equal-color formula of step 1.3 to the repeated letter, and the all-equal case is the nil-Hecke identity, whose two triple products both equal $\sum_{w\in S_3}(-1)^{\ell(w)}w/((x_r-x_{r+1})(x_r-x_{r+2})(x_{r+1}-x_{r+2}))$ in the skew group algebra, hence are equal. [F1, F4, step 1.2, step 1.3]

3.1 The outer-equal multiedge correction. It remains to consider colors $i,j,i$ with $i\ne j$; put $a=h_{ij}$, $b=h_{ji}$, $N=a+b$, $x=x_r$, $y=x_{r+1}$, $z=x_{r+2}$. Expanding the two triple products in the skew group algebra using step 1.2 for the distinct-color crossings and step 1.3 for the middle equal-color crossing gives $\tau_2\tau_1\tau_2e_\nu=[(y-z)^a(z-y)^b-(y-z)^a(x-y)^bw_0]/(x-z)$ and $\tau_1\tau_2\tau_1e_\nu=[(x-y)^b(y-x)^a-(x-y)^b(y-z)^aw_0]/(x-z)$ with $w_0$ the longest permutation; the permutation terms agree and cancel, and the difference of the two remaining terms is $\bigl[Q_{ij}(x,y)-Q_{ij}(z,y)\bigr]/(z-x)$, which is the stated correction with full multiplicities $a,b$. When $a=b=0$ the correction is zero, and when $i=j$ the nil-Hecke case of step 2.1 supplies the zero correction, so every relation of $S_\Gamma(\beta)$ of braid type holds. [F1, step 1.2, step 1.3]

4.1 Homogeneity of the generators. For distinct colors, the operator $\tau_r$ raises the unshifted polynomial degree by $2h_{ij}$ and changes the summand by $d_\nu-d_{s_r\nu}=h_{ji}-h_{ij}$, so on the shifted summands it is homogeneous of degree $2h_{ij}+h_{ji}-h_{ij}=h_{ij}+h_{ji}=-a_{ij}$; for equal colors the divided difference lowers the shifted degree by $2=-a_{ii}$, and the dots and idempotents have degrees $2$ and $0$. Each defining relation of [F1] is therefore homogeneous: the square relation has both sides of degree $-2a_{ij}$ on the $\nu$-summand, the mixed relations have both sides of degree $0$, and the braid correction has degree $2(h_{ij}+h_{ji}-1)$ on the outer-equal-color summand, matching the degree of the two triple products, which is $-a_{ij}-a_{ji}-2=2(h_{ij}+h_{ji})-2$. Hence the assignment is graded. [F1, step 2.1, step 3.1]

5.1 Transfer to the convolution algebra. The displayed operator identities of steps 1.2–3.1 hold on every shifted polynomial summand, and by step 1.1 the assignment $e_\nu\mapsto e_\nu$, $x_r\mapsto x_r$, $\tau_r\mapsto\tau_r$ respects all remaining relations; since by [F2] the action of $\mathfrak A$ on $P$ is faithful, the identities hold in $\mathfrak A$ itself, so the assignment is a well-defined graded $k$-algebra homomorphism $S_\Gamma(\beta)\to\mathfrak A$. The Axiom of Choice entered only through [A1]. [A1, F2, step 4.1] ∎