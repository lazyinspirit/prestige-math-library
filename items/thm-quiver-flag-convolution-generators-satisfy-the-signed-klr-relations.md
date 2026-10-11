---
id: thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations
kind: theorem
title: "Quiver-flag convolution generators satisfy the signed KLR relations"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 29
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

**Given:** the Axiom of Choice; a characteristic-zero field $k$; a finite loopless quiver $\Gamma$, a dimension vector $\beta$, a word $\nu$ of length $m$, the incidence varieties $X_\nu,F_\nu,Z_{\eta,\nu}$, the algebra $\mathfrak A$ with generators $e_\nu,x_r,\tau_r$ and the intrinsic signed presentation $S_\Gamma(\beta)$ of [[def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators]], and the faithful module $P=\bigoplus_\nu H_G^\bullet(X_\nu;k)[d_\nu]$.

[F1] Assume AC. [[def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators]] fixes the generators as the diagonals $e_\nu=[\Delta_{X_\nu}]$, the dots $x_re_\nu=(\Delta_{X_\nu})_*(x_r\cap[X_\nu])$ with $x_r=c_1^G(F^r/F^{r-1})$, and the normalized elementary classes $\sigma_re_\nu=(-1)^{d_{s_r\nu}-\dim_{\mathbb C}C_{s_r\nu,\nu}}[C_{s_r\nu,\nu}]$, $\tau_r=\sigma_r$ for equal colors and $\tau_r=(-1)^{h_{ij}}\sigma_r$ for distinct colors, lists the relations of $S_\Gamma(\beta)$, and defines the grading $\deg e_\nu=0$, $\deg x_re_\nu=2$, $\deg\tau_re_\nu=-a_{\nu_r\nu_{r+1}}$.

[F2] Assume AC. [[thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis]] supplies the module structure of $\mathfrak A$ on $P$ and proves that the action is faithful, so operator identities valid on all of $P$ are identities in $\mathfrak A$.

[F3] Assume AC. [[lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus]] supplies the oriented proper correspondence calculus on the incidence spaces, including complex-oriented flag-bundle operations and Euler self-intersection. The elementary correspondences and their quotient bundles are determined below from the incidence equations.

[F4] Assume AC. [[lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports]] computes supported convolution as cap product with the refined middle-diagonal Thom class and identifies zero-section self-intersection with the oriented Euler class, compatibly with ordered iterated diagonals.

[F5] [[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]]: for complex lines over a path-connected CW base, $c_1(L\otimes M)=c_1(L)+c_1(M)$, $c_1(L^*)=-c_1(L)$; in the split flag model the arrow entry $\operatorname{Hom}(D_a,D_b)$ has first Chern class $\chi_b-\chi_a$.

[F6] [[thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle]]: for a numerable complex rank-$n$ bundle over a path-connected CW complex, $c_n(E)=e(E_{\mathbb R})$ with the complex orientation.

[A1] The Axiom of Choice is consumed exactly through [F1]–[F4], which declare it for their equivariant-descent and duality constructions; the polynomial identities, divisibility and degree bookkeeping below are choice-free ([[def-axiom-of-choice]]).



## Proof

**Proof technique:** direct.

1.1 By [F2] the diagonal classes are orthogonal idempotents with sum $1$, acting as the summand projections on $P$. The dot classes act by cup product, so $x_re_\nu=e_\nu x_r$ and all dots commute. We compute the crossings independently before using their dot slides. [F1, F2, given]

1.2 For adjacent distinct colors $i=\nu_r$, $j=\nu_{r+1}$, forgetting the order of the two graded lines identifies the two flag bases: the intermediate graded subspaces are uniquely recovered. In adapted bases every stable-arrow condition agrees except for the entries between these lines. The common stable-arrow space sets both directions' entries to zero, so its quotient in the first-coordinate space $X_{s_r\nu}$ consists of $h_{ij}$ copies of $\operatorname{Hom}(D_{r+1},D_r)$; its dimension is $d_{s_r\nu}-h_{ij}$. At a split fixed flag its positive tangent Euler factor is $(x_r-x_{r+1})^{h_{ij}}$ by [F5, F6]. The fixed-point action formula established in [F2] gives this quotient Euler factor times $s_r(f)$: the Euler factors of the common space cancel between its fundamental class and the output's fundamental class. Thus the standard class acts by $(x_r-x_{r+1})^{h_{ij}}s_r$, $\sigma_r$ multiplies it by $(-1)^{h_{ij}}$, and $\tau_r$ cancels that sign. Composing with the reverse crossing gives $\tau_r^2e_\nu=(x_{r+1}-x_r)^{h_{ij}}(x_r-x_{r+1})^{h_{ji}}e_\nu=Q_{ij}(x_r,x_{r+1})e_\nu$. Moreover $M_Cs_rM_f=M_{s_rf}M_Cs_r$ for every polynomial $f$, proving all distinct-color dot slides, including both adjacent ones; other dots are fixed by $s_r$. [F1, F2, F3, F4, F5, F6, algebra]

1.3 If the adjacent colors agree, forgetting $F^r$ gives a projective-line bundle: all arrow stability conditions at that stage follow from the neighboring stages, since there are no loops and the other colors' subspaces do not change across these two steps. Thus $X_\nu$ is the pullback of the stable-arrow bundle on the partial flag base, and $C=X_\nu\times_{X_{\mathrm{partial}}}X_\nu$ has dimension $d_\nu+1$. The standard class acts by pullback after integration along that projective line. At the fixed point whose tautological line has class $x_r$, its tangent is $\operatorname{Hom}(D_r,D_{r+1})$, of Euler class $x_{r+1}-x_r$; at the other fixed point the Euler class is reversed. The cellwise localization calculation of [F2] therefore gives $f/(x_{r+1}-x_r)+s_rf/(x_r-x_{r+1})=(s_rf-f)/(x_r-x_{r+1})$ for the standard class. The sign $(-1)^{d_\nu-(d_\nu+1)}=-1$ makes $\tau_r=D_r=(1-s_r)/(x_r-x_{r+1})$. The numerator vanishes when the variables coincide, so division is polynomial. $D_rf$ is symmetric in these variables, giving $D_r^2=0$; expansion gives $D_rM_{x_r}-M_{x_{r+1}}D_r=1$ and $D_rM_{x_{r+1}}-M_{x_r}D_r=-1$. Unaffected variables commute with $D_r$. [F1, F2, F3, F4, F5, F6, algebra]

2.1 Disjoint crossings commute, since neither their variables nor their colors affect the other crossing. For three distinct colors both triple products cross the same three labeled pairs exactly once with the same oriented factors, so they coincide. Write $x=x_r$, $y=x_{r+1}$, $z=x_{r+2}$ and $D_1=(1-s_1)/(x-y)$, $D_2=(1-s_2)/(y-z)$ in the three-variable calculation. For colors $(i,i,j)$ and $a=h_{ij}$, the two products are $D_2M_gs_1s_2$ and $M_gs_1s_2D_1$, where $g=(x-y)^a(x-z)^a$. Since $g$ is symmetric in $y,z$, $D_2M_g=M_gD_2$; also $D_2s_1s_2=s_1s_2D_1$, so the products agree. For $(j,i,i)$ put $b=h_{ji}$ and $g'=(y-z)^b(x-z)^b$. The products are $M_{g'}s_2s_1D_2$ and $D_1M_{g'}s_2s_1$; symmetry in $x,y$ and $D_1s_2s_1=s_2s_1D_2$ again give equality. Relabeling $i,j$ covers every exactly-adjacent repeated-color pattern. For three equal colors, direct expansion of either $D_2D_1D_2$ or $D_1D_2D_1$, using $sM_f=M_{sf}s$, gives $\sum_{w\in S_3}(-1)^{\ell(w)}w/((x-y)(x-z)(y-z))$ in the skew group algebra. Thus its braid difference is zero as well. [F1, step 1.2, step 1.3, algebra]

3.1 The outer-equal multiedge correction. It remains to consider colors $i,j,i$ with $i\ne j$; put $a=h_{ij}$, $b=h_{ji}$, $N=a+b$, $x=x_r$, $y=x_{r+1}$, $z=x_{r+2}$. Expanding the two triple products in the skew group algebra using step 1.2 for the distinct-color crossings and step 1.3 for the middle equal-color crossing gives $\tau_2\tau_1\tau_2e_\nu=[(y-z)^a(z-y)^b-(y-z)^a(x-y)^bw_0]/(x-z)$ and $\tau_1\tau_2\tau_1e_\nu=[(x-y)^b(y-x)^a-(x-y)^b(y-z)^aw_0]/(x-z)$ with $w_0$ the longest permutation; the permutation terms agree and cancel, and the difference of the two remaining terms is $\bigl[Q_{ij}(x,y)-Q_{ij}(z,y)\bigr]/(z-x)$, which is the stated correction with full multiplicities $a,b$. When $a=b=0$ the correction is zero, and when $i=j$ the nil-Hecke case of step 2.1 supplies the zero correction, so every relation of $S_\Gamma(\beta)$ of braid type holds. [F1, step 1.2, step 1.3]

4.1 Homogeneity of the generators. For distinct colors, the operator $\tau_r$ raises the unshifted polynomial degree by $2h_{ij}$ and changes the summand by $d_\nu-d_{s_r\nu}=h_{ji}-h_{ij}$, so on the shifted summands it is homogeneous of degree $2h_{ij}+h_{ji}-h_{ij}=h_{ij}+h_{ji}=-a_{ij}$; for equal colors the divided difference has shifted degree $-2=-a_{ii}$, and the dots and idempotents have degrees $2$ and $0$. Each defining relation of [F1] is therefore homogeneous: the square relation has both sides of degree $-2a_{ij}$ on the $\nu$-summand, the mixed relations have both sides of degree $0$, and the braid correction has degree $2(h_{ij}+h_{ji}-1)$ on the outer-equal-color summand, matching the degree of the two triple products, which is $-a_{ij}-a_{ji}-2=2(h_{ij}+h_{ji})-2$. Hence the assignment is graded. [F1, step 2.1, step 3.1]

5.1 Transfer to the convolution algebra. The displayed operator identities of steps 1.2–3.1 hold on every shifted polynomial summand, and by step 1.1 the assignment $e_\nu\mapsto e_\nu$, $x_r\mapsto x_r$, $\tau_r\mapsto\tau_r$ respects all remaining relations; since by [F2] the action of $\mathfrak A$ on $P$ is faithful, the identities hold in $\mathfrak A$ itself, so the assignment is a well-defined graded $k$-algebra homomorphism $S_\Gamma(\beta)\to\mathfrak A$. The Axiom of Choice entered only through [A1]. [A1, F2, step 4.1] ∎