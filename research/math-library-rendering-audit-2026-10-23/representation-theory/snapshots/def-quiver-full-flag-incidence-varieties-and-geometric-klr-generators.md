---
id: def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators
kind: definition
title: "Quiver full-flag incidence varieties and signed geometric KLR generators"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 27
deps: [def-equivariant-borel-moore-homology-and-correspondence-convolution,
       def-equivariant-constructible-derived-category-for-complex-algebraic-varieties,
       lem-flag-variety-of-a-vector-space,
       lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus,
       prop-first-chern-class-of-tensor-dual-and-conjugate-lines,
       def-axiom-of-choice]
justified_by: [thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis,
               thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations]
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "M. Varagnolo, E. Vasserot, Canonical bases and KLR-algebras, arXiv:0901.3992; complete 30-page article retrieved and read at the cited sections."
      url: "https://arxiv.org/pdf/0901.3992"
    - title: "R. Rouquier, Quiver Hecke algebras and 2-Lie algebras, arXiv:1112.3619; complete 48-page article retrieved and read at the cited sections."
      url: "https://arxiv.org/pdf/1112.3619"
    - title: "R. Rouquier, 2-Kac-Moody algebras, arXiv:0812.5023; complete 66-page article retrieved and read at the cited section 3.2."
      url: "https://arxiv.org/pdf/0812.5023"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]) as inherited from the equivariant
constructible, flag-variety and line-bundle suppliers below. Fix a finite loopless quiver
$\Gamma$ with vertex set $I$, with $h_{ij}\ge0$ arrows $i\to j$ for $i\ne j$ (parallel arrows
and pairs of opposite arrows are allowed, and there are no loops), a dimension vector
$\beta\in\mathbb N^I$, and a field $k$ of characteristic zero. Put $V=\bigoplus_iV_i$ with
$\dim_{\mathbb C}V_i=\beta_i$, $G=\prod_i\mathrm{GL}(V_i)$ and
$E=\bigoplus_{h:i\to j}\operatorname{Hom}(V_i,V_j)$.

**Incidence varieties.** For a word $\nu=(\nu_1,\dots,\nu_m)$ with content $\beta$ (so
$m=\sum_i\beta_i$) let $F_\nu$ be the variety of increasing full $I$-graded complete flags
$0=F^0\subset\dots\subset F^m=V$ whose successive quotient $F^r/F^{r-1}$ is concentrated in
color $\nu_r$, and set
$$X_\nu=\{(x,F)\in E\times F_\nu:\ x_h(F^r_i)\subseteq F^r_j\ \text{for all }h:i\to j\text{ and all }r\},\qquad \pi_\nu(x,F)=x.$$
Because $\Gamma$ is loopless the stability condition is equivalent to
$x_h(F^r_i)\subseteq F^{r-1}_j$ for all $r$, so on a split flag exactly the matrix entries
$\operatorname{Hom}(D_a,D_b)$ with $a>b$ are allowed; accordingly
$$d_\nu=\sum_i\frac{\beta_i(\beta_i-1)}2+\sum_{a>b}h_{\nu_a\nu_b}=\dim_{\mathbb C}F_\nu+\operatorname{rank}(X_\nu\to F_\nu)=\dim_{\mathbb C}X_\nu,$$
and $L_\nu=\pi_{\nu!}k[d_\nu]\in D^b_{G,c}(E;k)$ lies in the equivariant constructible derived
category of [[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]].
Define $Z_{\eta,\nu}=X_\eta\times_EX_\nu$ with first coordinate the categorical source, and write
$\mathfrak A=\bigoplus_{\eta,\nu}\operatorname{Ext}_G(L_\eta,L_\nu)$ for the convolution algebra,
so that $e_\eta\mathfrak Ae_\nu=\operatorname{Ext}_G(L_\eta,L_\nu)$; for homogeneous
$a:L_\eta\to L_\nu[n]$ and $b:L_\nu\to L_\rho[m]$ the algebra product is the
opposite-composition product $a*b=b[n]\circ a$, and $\operatorname{Ext}$ degree $n$ is the
convolution component of BM degree $d_\eta+d_\nu-n$
([[def-equivariant-borel-moore-homology-and-correspondence-convolution]]).

**Geometric generators.** In the equivariant BM convolution algebra, with the standard positive
complex orientation, define the idempotents $e_\nu=[\Delta_{X_\nu}]$; the dots
$x_re_\nu=(\Delta_{X_\nu})_*(x_r\cap[X_\nu])$ for $x_r=c_1^G(F^r/F^{r-1})$
([[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]]); and, for the simple
transposition $s_r$, the standard fundamental class $[C_{s_r\nu,\nu}]$ of the closure of the
relative-position-$s_r$ stratum in $Z_{s_r\nu,\nu}$, together with
$\sigma_re_\nu=(-1)^{d_{s_r\nu}-\dim_{\mathbb C}C_{s_r\nu,\nu}}[C_{s_r\nu,\nu}]$ and
$\tau_re_\nu=\sigma_re_\nu$ if $\nu_r=\nu_{r+1}$, while
$\tau_re_\nu=(-1)^{h_{\nu_r\nu_{r+1}}}\sigma_re_\nu$ if $\nu_r\ne\nu_{r+1}$. This is a
generator normalization, not a change of the BM orientation: for distinct colors
$\sigma_r=(-1)^{h_{ij}}[C]_{\mathrm{standard}}$ and $\tau_r=[C]_{\mathrm{standard}}$, while
for equal colors $\sigma_r=\tau_r=-[C]_{\mathrm{standard}}$.

**The intrinsic signed presentation.** Define $S_\Gamma(\beta)$ as the free unital $k$-algebra
on word idempotents $e_\nu$, dots $x_r$ and crossings $\tau_r$ ($1\le r<m$) modulo the
relations: $e_\nu e_{\nu'}=\delta_{\nu\nu'}e_\nu$ with $\sum_\nu e_\nu=1$; the dots commute
and $x_re_\nu=e_\nu x_r$; $\tau_re_\nu=e_{s_r\nu}\tau_r$;
$\tau_r^2e_\nu=Q_{\nu_r\nu_{r+1}}(x_r,x_{r+1})e_\nu$, where $a_{ii}=2$, $a_{ij}=-h_{ij}-h_{ji}$
for $i\ne j$, $Q_{ii}=0$ and $Q_{ij}(u,v)=(-1)^{h_{ij}}(u-v)^{h_{ij}+h_{ji}}$; far crossings
commute; the distinct-color dot slides $(\tau_rx_t-x_{s_r(t)}\tau_r)e_\nu=0$ for every
$1\le t\le m$ when $\nu_r\ne\nu_{r+1}$ (in particular $\tau_rx_re_\nu=x_{r+1}\tau_re_\nu$ and
$\tau_rx_{r+1}e_\nu=x_r\tau_re_\nu$); the equal-color mixed relations
$(\tau_rx_r-x_{r+1}\tau_r)e_\nu=e_\nu$ and $(\tau_rx_{r+1}-x_r\tau_r)e_\nu=-e_\nu$ when $\nu_r=\nu_{r+1}$; other dots commute with $\tau_r$;
and, for $1\le r<m-1$, the braid relation $(\tau_{r+1}\tau_r\tau_{r+1}-\tau_r\tau_{r+1}\tau_r)e_\nu=0$ unless
$\nu_r=\nu_{r+2}$, in which case it equals
$\bigl[Q_{\nu_r\nu_{r+1}}(x_r,x_{r+1})-Q_{\nu_r\nu_{r+1}}(x_{r+2},x_{r+1})\bigr]e_\nu/(x_{r+2}-x_r)$.
Grade $S_\Gamma(\beta)$ by $\deg e_\nu=0$, $\deg x_re_\nu=2$, $\deg\tau_re_\nu=-a_{\nu_r\nu_{r+1}}$;
every defining relation is homogeneous for this grading, including the polynomial braid
quotient: in the outer-equal-color case the two distinct-color outer crossings contribute
$2(h_{ij}+h_{ji})$ and the middle equal-color crossing contributes $-2$, matching the degree
$2(h_{ij}+h_{ji}-1)$ of the correction.

**Well-formedness.** The smooth-flag incidence lemma
[[lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus]]
gives that $X_\nu\to F_\nu$ is a smooth complex algebraic vector bundle, that $\pi_\nu$ is
projective and hence proper, and that the displayed formula computes $\dim_{\mathbb C}X_\nu$;
$F_\nu=\prod_i\operatorname{Flag}(V_i)$ is smooth projective
([[lem-flag-variety-of-a-vector-space]]). The polynomial model
$H_G^\bullet(X_\nu;k)=k[x_1,\dots,x_m]$, with shifted avatar $P_\nu=H_G^\bullet(X_\nu;k)[d_\nu]$
in which the unit has degree $-d_\nu$, and the fact that the displayed geometric classes
realize the stated graded relations are discharged by
[[thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis]] and
[[thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations]]; these two results
are recorded in `justified_by` rather than in `deps` because both depend on this definition.
The listed relations define a quotient of a free algebra, so $S_\Gamma(\beta)$ is well posed as
a graded algebra, and the geometric generator normalization introduces no further choice: the
Axiom of Choice is consumed exactly through the AC-declared suppliers named above, while the
quiver, word and sign data are finite. This specialized presentation is internal and does not
replace the generic KLR definition.
