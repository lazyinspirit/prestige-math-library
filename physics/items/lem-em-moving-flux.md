---
id: lem-em-moving-flux
kind: lemma
title: "Transport of flux through a moving patch"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-em-moving-patch, lem-em-parameter-integrals, lem-the-divergence-and-curl-of-a-cross-product, thm-the-classical-stokes-theorem-for-a-c2-surface-patch, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, def-positive-orientation-for-elementary-region-boundaries, def-the-induced-boundary-chain-of-a-c2-surface-patch, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-divergence-and-curl-of-a-c1-vector-field, def-cross-product-in-r3, def-euclidean-inner-product, def-ck-euclidean-maps-and-diffeomorphisms, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, def-countable-choice, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-clairaut-schwarz-mixed-partials, def-surface-area-and-scalar-surface-integral-of-a-patch, thm-surface-area-density-is-cross-product-norm, lem-rigidity-of-alternating-multilinear-matrix-functions, def-multilinear-alternating-normalized-and-antisymmetric-matrix-functions, thm-greens-theorem-for-finite-unions-of-elementary-regions, lem-a-vector-line-integral-pulls-back-to-the-parameter-region, lem-the-stokes-integrand-identity-on-a-c2-patch, lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]
dependency_roles:
  def-em-moving-patch: mathematical-premise
  lem-em-parameter-integrals: mathematical-premise
  lem-the-divergence-and-curl-of-a-cross-product: mathematical-premise
  thm-the-classical-stokes-theorem-for-a-c2-surface-patch: mathematical-premise
  def-scalar-and-vector-line-integrals-along-piecewise-c1-paths: mathematical-premise
  def-positive-orientation-for-elementary-region-boundaries: mathematical-premise
  def-the-induced-boundary-chain-of-a-c2-surface-patch: mathematical-premise
  def-oriented-unit-normal-and-flux-of-a-surface-patch: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  def-surface-area-and-scalar-surface-integral-of-a-patch: mathematical-premise
  thm-surface-area-density-is-cross-product-norm: mathematical-premise
  lem-rigidity-of-alternating-multilinear-matrix-functions: mathematical-premise
  def-multilinear-alternating-normalized-and-antisymmetric-matrix-functions: mathematical-premise
  thm-greens-theorem-for-finite-unions-of-elementary-regions: mathematical-premise
  lem-a-vector-line-integral-pulls-back-to-the-parameter-region: mathematical-premise
  lem-the-stokes-integrand-identity-on-a-c2-patch: mathematical-premise
  lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "I. Galili, D. Kaplan, Y. Lehavi, Teaching Faraday's law of electromagnetic induction in an introductory physics course, Am. J. Phys. 74, 337 (2006), Appendix"
      url: "http://materias.df.uba.ar/f3Aa2013c1/files/2012/07/FaradayLaw-AJP000337.pdf"
    - title: "J. Feldman, A. Rechnitzer, E. Yeager, CLP-4 Vector Calculus (UBC), §4.4 (Theorem 4.4.1)"
      url: "https://personal.math.ubc.ca/~clp/CLP4/clp_4_vc/sec_StokesThm.html"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$, [[def-countable-choice]]). In the setting of [[def-em-moving-patch]]: $D\subseteq\mathbb R^2$ is a finite elementary Green region with positive boundary chain $\partial D$, $I\subseteq\mathbb R$ is an interval, $r:D\times I\to\mathbb R^3$ extends to a $C^2$ map on a neighbourhood of $D\times I$ with $r_u\times r_v\ne0$ on $D^\circ\times I^\circ$, $(W,v)$ is a $C^1$ velocity field with $v(r(p,t),t)=r_t(p,t)$, and $B$ is a $C^1$ field on an open set containing the swept graph $\Sigma=\{(r(p,t),t):p\in D,t\in I\}\subseteq\mathbb R^4$, with flux

$$\Phi(t)=\int_D\bigl\langle B(r(p,t),t),\,r_u(p,t)\times r_v(p,t)\bigr\rangle\,dp .$$

For nondegenerate $I$, $\Phi$ is differentiable at interior times and relatively differentiable at included endpoints. Empty $I$ gives no flux values, and singleton $I$ gives one flux value but no derivative determined by that value. If the spatial divergence $\operatorname{div}B=0$, then for every time of such a nondegenerate $I$ whose slice has rank two, that is $r_u(p,t)\times r_v(p,t)\ne0$ for all $p\in D^\circ$,

$$\Phi'(t)=\int_{S(t)}\partial_tB\cdot n\,dS-\oint_{\partial S(t)}(v\times B)\cdot d\mathbf r .$$

By the standing hypothesis the slice has rank two at every interior time. At an included endpoint the displayed normal notation is used only if its slice also has rank two. Here $S(t)$ means the parametrized family $(D,r(\cdot,t))$, and $n$ means the parameter normal $N(p,t)=(r_u\times r_v)/\lVert r_u\times r_v\rVert_2$ on $D^\circ$. Define $\int_{S(t)}H\cdot n\,dS:=\int_D\langle H(r(p,t),t),r_u\times r_v\rangle\,dp$, including multiplicity; similarly $\int_{S(t)}(v\cdot n)\operatorname{div}B\,dS:=\int_D\langle v(r(p,t),t),r_u\times r_v\rangle\operatorname{div}B(r(p,t),t)\,dp$. These agree with the ordinary flux definitions when the slice meets [[def-admissible-regular-parametrized-surface-patch]] (through [[def-em-moving-patch]]); no image-wide normal or injectivity is assumed. If $\partial D=(\sigma_1,\ldots,\sigma_m)$, define $\oint_{\partial S(t)}G\cdot d\mathbf r:=\sum_{\ell=1}^m\int_{r(\sigma_\ell,t)}G(\cdot,t)\cdot d\mathbf r$ using [[def-positive-orientation-for-elementary-region-boundaries]] and [[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]. Without the hypothesis $\operatorname{div}B=0$ the additional term

$$\int_{S(t)}(v\cdot n)\,\operatorname{div}B\,dS$$

appears on the right-hand side. The identity is local in $t$ and is a statement about the parametrized mathematical object; no electromagnetic interpretation is asserted.

## Facts & Assumptions

**Given:** The data $(D,I,r,v,B,\Phi)$ of the Statement, a nondegenerate $I$ and times $t\in I$ that are interior or whose slice has rank two (the two cases needed below), and the notation $w:=r_u\times r_v$, $N:=w/\lVert w\rVert_2$ on $D^\circ$ at a rank-two slice, and $\tilde v(p,t):=r_t(p,t)=v(r(p,t),t)$.

[F1] Moving patch: the flux is the integral displayed in the Statement over the compact Jordan measurable region $D$; the velocity field is $C^1$ on an open spacetime neighbourhood of the swept graph and satisfies $v(r(p,t),t)=r_t(p,t)$; $r$ extends $C^2$ to a neighbourhood of $D\times I$ ([[def-em-moving-patch]]).

[F2] Differentiation under the integral sign over the compact measurable set $D$: if a real-valued function and its partial $t$-derivative are continuous on a neighbourhood of $D\times[a,b]$, then $t\mapsto\int_Df(p,t)\,dp$ is differentiable with the stated relative endpoint derivatives and derivative $\int_D\partial_tf(p,t)\,dp$ ([[lem-em-parameter-integrals]]). To apply its Lebesgue formulation to this Riemann flux, use [[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]] on the bounded Borel zero extension from the compact Jordan set $D$ to a bounding box; it is Riemann integrable by the flux definition and the same is true of the continuous derivative integrand.

[F3] Calculus rules: chain rule for total derivatives, the product rule, equality of mixed partials for $C^2$ maps, and the $C^k$ conventions ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-clairaut-schwarz-mixed-partials]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F4] Cross product and mixed product: $u\times v$ is bilinear and alternating and $\langle u\times v,w\rangle=\det[u\ v\ w]$, so the scalar triple product is multilinear and alternating in its three arguments ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]]); the Euclidean inner product is that of [[def-euclidean-inner-product]].

[F5] Rigidity of alternating column-multilinear matrix functions: if $F:M_3(\mathbb R)\to\mathbb R$ is column-multilinear in the sense of [[def-multilinear-alternating-normalized-and-antisymmetric-matrix-functions]] and alternating (it vanishes whenever two columns are equal), then $F(M)=F(I_3)\det(M)$ for every $M$; in particular a column-multilinear alternating $F$ with $F(I_3)=0$ vanishes identically ([[lem-rigidity-of-alternating-multilinear-matrix-functions]]).

[F6] Cross-product differential identity: for $C^1$ fields $F,G$, $\operatorname{curl}(F\times G)=(\operatorname{div}G)F-(\operatorname{div}F)G+DF\,G-DG\,F$ with divergence and curl of [[def-divergence-and-curl-of-a-c1-vector-field]] ([[lem-the-divergence-and-curl-of-a-cross-product]]).

[F7] Parametric Stokes prerequisites, with no rank or injectivity hypothesis: [[lem-the-stokes-integrand-identity-on-a-c2-patch]] gives $\partial_uQ^*-\partial_vP^*=\langle\operatorname{curl}G\circ\varphi,\varphi_u\times\varphi_v\rangle$ for $P^*=\langle G\circ\varphi,\varphi_u\rangle$, $Q^*=\langle G\circ\varphi,\varphi_v\rangle$ on an open parameter neighbourhood. [[thm-greens-theorem-for-finite-unions-of-elementary-regions]] integrates this over any supplied finite elementary Green region, and [[lem-a-vector-line-integral-pulls-back-to-the-parameter-region]] identifies each resulting boundary arc integral with its image line integral.

[F8] Surface integrals: for a regular patch, $\int_Sq\,dS=\int_D(q\circ\varphi)J_\varphi$ with area density $J_\varphi=\lVert\varphi_u\times\varphi_v\rVert_2$, and the flux in the induced orientation is $\int_D\langle F\circ\varphi,\varphi_u\times\varphi_v\rangle$ ([[def-surface-area-and-scalar-surface-integral-of-a-patch]], [[thm-surface-area-density-is-cross-product-norm]], [[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

## Proof

**Proof technique:** direct; differentiate the parametrized flux under the integral sign, express the derivative of the area vector by the determinant identity, convert the resulting curl term into a boundary circulation by Stokes, and identify each term with the corresponding surface integral.

1.1 Preliminaries. The integrand $h(p,t):=\langle B(r(p,t),t),w(p,t)\rangle$ is defined for $(p,t)$ in a neighbourhood of $D\times I$ and is continuous there together with $\partial_th$: $r$ and its first derivatives are continuous, $B$ is $C^1$ on an open spacetime neighbourhood of the swept graph, and sums, products and compositions of continuous maps are continuous. Moreover $\tilde v(p,t)=r_t(p,t)=v(r(p,t),t)$ is $C^1$ in $(p,t)$, so $D_xv$ denotes the spatial Jacobian of the velocity field, evaluated at $r(p,t)$, and $\operatorname{div}v$ its spatial divergence; at an interior time or a rank-two endpoint slice the vector $w=r_u\times r_v$ does not vanish on $D^\circ$, so the unit normal $N=w/\lVert w\rVert_2$ is defined there. [given, F1, F3, algebra]

1.2 Algebraic identity for the area vector. For every $3\times3$ real matrix $A$ and all $B_0,u_1,u_2\in\mathbb R^3$, $\langle B_0,(Au_1)\times u_2\rangle+\langle B_0,u_1\times(Au_2)\rangle=\operatorname{tr}(A)\langle B_0,u_1\times u_2\rangle-\langle AB_0,u_1\times u_2\rangle$. To prove it, let $M=[m_1\ m_2\ m_3]$ range over $3\times3$ matrices and put $E(M):=\langle m_1,(Am_2)\times m_3\rangle+\langle m_1,m_2\times(Am_3)\rangle-\operatorname{tr}(A)\langle m_1,m_2\times m_3\rangle+\langle Am_1,m_2\times m_3\rangle$. Each of the four terms is linear in each column separately: the triple product is trilinear by [F4] and multiplication by the fixed matrix $A$ is linear, so $E$ is column-multilinear. Writing the four terms as the determinants $T_1=\det[m_1,Am_2,m_3]$, $T_2=\det[m_1,m_2,Am_3]$, $T_3=-\operatorname{tr}(A)\det[m_1,m_2,m_3]$ and $T_4=\det[Am_1,m_2,m_3]$ by [F4], each interchange of two of the columns $m_1,m_2,m_3$ carries every $T_i$ to $\pm$ one of the four terms in such a way that the total reverses sign: for example exchanging the first two columns sends $T_1$ to $-T_4$, $T_4$ to $-T_1$, and $T_2,T_3$ to their own negatives, so $E\mapsto-E$; the other two interchanges are verified by the same determinant expansion. Hence $E$ is alternating as well. Therefore [F5] gives $E(M)=E(I_3)\det(M)$ for every $M$, and $E(I_3)=A_{22}+A_{33}-\operatorname{tr}(A)+A_{11}=0$, because $\langle e_1,Ae_2\times e_3\rangle=A_{22}$, $\langle e_1,e_2\times Ae_3\rangle=A_{33}$ and $\langle Ae_1,e_2\times e_3\rangle=A_{11}$ computed from the coordinate formula of [F4]. Hence $E\equiv0$, which is the displayed identity at $(B_0,u_1,u_2)=(m_1,m_2,m_3)$. [given, F4, F5, algebra]

2.1 Differentiation of the flux. Since $h$ and $\partial_th$ are continuous on a neighbourhood of $D\times I$, use [F2] on any local compact time segment with $K=D$; its Riemann/Lebesgue bridge identifies both parameter integrals and gives that $\Phi$ is differentiable on $I$, with relative one-sided derivatives at included endpoints, and $\Phi'(t)=\int_D\partial_th(p,t)\,dp$. [step 1.1, F2, algebra]

2.2 The derivative of the integrand. Since $r_t=\tilde v$ and $\tilde v(p,t)=v(r(p,t),t)$, the chain rule [F3] gives $\partial_tr_u=\partial_u r_t=(D_xv)r_u$ and $\partial_tr_v=(D_xv)r_v$, so, using equality of mixed partials for the $C^2$ map $r$, $\partial_tw=((D_xv)r_u)\times r_v+r_u\times((D_xv)r_v)$; and $\partial_t\bigl[B(r(p,t),t)\bigr]=\partial_tB(r(p,t),t)+(D_xB)r_t$ by the chain rule. Hence, multiplying out and evaluating the spatial derivatives at $r(p,t)$, $\partial_th=\langle\partial_tB+(D_xB)\tilde v,w\rangle+\langle B,\partial_tw\rangle=\langle\partial_tB+(D_xB)v+(\operatorname{div}v)B-(D_xv)B,\ w\rangle$, the last equality by step 1.2 with $A:=D_xv$, $B_0:=B$, $(u_1,u_2):=(r_u,r_v)$. [step 1.2, F3, F4, algebra]

3.1 Conversion by the cross-product identity. By [F6] with $F:=v$ and $G:=B$, $\operatorname{curl}(v\times B)=(\operatorname{div}B)v-(\operatorname{div}v)B+(Dv)B-(DB)v$, where $(Dv)B=(D_xv)B$ and $(DB)v=(D_xB)v$; substituting into step 2.2 gives $\partial_th=\langle\partial_tB+v\,\operatorname{div}B-\operatorname{curl}(v\times B),\ w\rangle$. [step 2.2, F6, algebra]

4.1 Parametric Stokes and conclusion. Fix a time $t$ of the nondegenerate $I$. The spatial slices of $v,B$ are $C^1$ on the open slice of $W\cap V$ containing $r(D,t)$; hence $G=(v\times B)(\cdot,t)$ is $C^1$ there. Restrict the $C^2$ extension of $\varphi=r(\cdot,t)$ to an open neighbourhood $O\supseteq D$ mapping into that slice. The first supplier in [F7] makes $P^*,Q^*$ $C^1$ on $O$ with the displayed curl integrand. Green then gives its integral over $D$ as the positive boundary integral, and the pullback supplier identifies each arc integral with $\int_{\varphi\circ\sigma_\ell}G\cdot d\mathbf r$. Thus $\int_D\langle\operatorname{curl}(v\times B)(r,t),w\rangle\,dp=\oint_{\partial S(t)}(v\times B)\cdot d\mathbf r$ without requiring a published regular patch. Substituting into steps 2.1 and 3.1 gives the always-defined parameter identity $\Phi'(t)=\int_D\langle\partial_tB(r,t)+v(r,t)\operatorname{div}B(r,t),w\rangle\,dp-\oint_{\partial S(t)}(v\times B)\cdot d\mathbf r$. At a rank-two slice its first two integrals are exactly the surface shorthand defined in the Statement (and, for an ordinary regular patch, [F8]); if $\operatorname{div}B=0$ the middle term vanishes. This proves the stated identity with the minus sign, including relative endpoint derivatives whenever the normal shorthand applies. [step 2.1, step 3.1, F7, F8, algebra] ∎

## Remarks

- **Sign bookkeeping.** The boundary term appears with a minus sign because Stokes converts the flux of the curl into the circulation in the induced orientation; the additional term $(v\cdot n)\operatorname{div}B$ vanishes whenever the field is divergence-free. The example on the companion page checks both signs by direct computation.
- **Hypotheses used.** The $C^2$ regularity of $r$ is used for the equality of mixed partials, the single-valued $C^1$ velocity makes $\tilde v$ well defined, and the nonvanishing of $r_u\times r_v$ on the interior identifies the orientation; the velocity is given on one open neighbourhood of the whole swept graph, and boundary chains may have the corners permitted by the finite elementary decomposition.
