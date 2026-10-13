---
id: thm-gr-curvature-tensoriality-and-coordinate-formula
kind: theorem
title: "Tensoriality of the curvature, its coordinate formula and its point-normal metric formula"
status: published
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-curvature-tensor-and-derived-tensors, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-affine-connection-on-a-smooth-manifold, def-lie-bracket-of-smooth-vector-fields, prop-coordinate-formula-for-the-lie-bracket, def-christoffel-symbols-of-an-affine-connection, lem-gr-connection-conditions-in-chart-components, def-gr-inverse-metric-and-musical-isomorphisms, thm-gr-point-normal-and-exponential-coordinate-charts, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, thm-clairaut-schwarz-mixed-partials, def-gr-tensor-fields-and-components]
dependency_roles:
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  def-lie-bracket-of-smooth-vector-fields: mathematical-premise
  prop-coordinate-formula-for-the-lie-bracket: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  thm-gr-point-normal-and-exponential-coordinate-charts: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: the commutator [nabla_mu,nabla_nu]V^rho, the Riemann tensor (3.65)-(3.67), and its evaluation in Riemann normal coordinates, printed pp. 75-77 and 79-80 (PDF pp. 82-84 and 86-87)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 4.4 and equation (4.29): the Riemann tensor in normal coordinates, R_{mu nu rho sigma} = (1/2)(g_{mu sigma,nu rho}+g_{nu rho,mu sigma}-g_{nu sigma,mu rho}-g_{mu rho,nu sigma}) at p, printed pp. 45-49 (PDF pp. 46-50)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 3.3.2 and 3.4: the Riemann tensor (3.39) and its normal-coordinate form, printed pp. 119-121 and 130 (PDF pp. 126-128 and 137)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), and let $R$ be
the curvature operator of [[def-gr-curvature-tensor-and-derived-tensors]],
with components $R^a{}_{bcd}$ in a chart.

**(a) Tensoriality.** For all smooth functions $f$ on $M$ and smooth vector
fields $X,Y,Z$ on a common domain, $R(X,Y)Z=-R(Y,X)Z$ and
$$R(fX,Y)Z=fR(X,Y)Z,\qquad R(X,fY)Z=fR(X,Y)Z,\qquad R(X,Y)(fZ)=fR(X,Y)Z .$$
Consequently, for every $p\in M$, the value $R(X,Y)Z|_p$ depends only on
$X_p,Y_p,Z_p$, and $R$ is a smooth tensor field of type $(1,3)$ on $M$ whose
components in every smooth chart are the functions $R^a{}_{bcd}$ of
[[def-gr-curvature-tensor-and-derived-tensors]] clause (b).

**(b) Coordinate formula.** In every smooth chart $(U,x)$ with Christoffel
symbols $\Gamma^a{}_{bc}$ of $\nabla$
([[def-christoffel-symbols-of-an-affine-connection]]),
$$R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb} +\sum_e\bigl(\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}\bigr)$$
on $U$, for all $a,b,c,d\in\{0,1,2,3\}$.

**(c) Point-normal formula.** If the chart is point-normal at $p$, that is
$g_{ab}(p)=\eta_{ab}$, $\partial_ag_{bc}(p)=0$ and $\Gamma^a{}_{bc}(p)=0$
([[thm-gr-point-normal-and-exponential-coordinate-charts]]), then, writing
$g_{ad,bc}:=\partial_b\partial_cg_{ad}$,
$$R_{abcd}(p)=\tfrac12\bigl(g_{ad,bc}+g_{bc,ad}-g_{bd,ac}-g_{ac,bd}\bigr)(p) .$$
Equivalently, $R^a{}_{bcd}(p)=\tfrac12\,g^{ae}(p)\bigl(\partial_b\partial_cg_{ed}
+\partial_e\partial_dg_{bc}-\partial_e\partial_cg_{bd}-\partial_b\partial_dg_{ec}\bigr)(p)$.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with metric-selected connection $\nabla$, its curvature operator $R$, a chart $(U,x)$, and a point $p$ with a point-normal chart as in the claims.

All field calculations below are made on a common open domain $U$, using the
restriction of the connection to local fields there. The function-linearity
identities are proved for every $f\in C^\infty(U)$; the Statement's global
smooth functions are their restrictions, and step 3.1 uses these same local
identities for its chart coefficient functions.

[L1] The curvature operator is $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ for smooth fields, is a smooth field, and its components in a chart are defined by $R(\partial_c,\partial_d)\partial_b=\sum_aR^a{}_{bcd}\partial_a$ ([[def-gr-curvature-tensor-and-derived-tensors]]).

[L2] On every common open domain $U$, the restricted affine connection is real bilinear on local fields, function-linear in its first argument, satisfies $\nabla_X(fY)=X(f)Y+f\nabla_XY$ for $f\in C^\infty(U)$, and takes smooth local fields to smooth local fields ([[def-affine-connection-on-a-smooth-manifold]]).

[L3] On every common open domain $U$, the Lie bracket satisfies $[fX,Y]=f[X,Y]-Y(f)X$ and $[X,fY]=X(f)Y+f[X,Y]$ for $f\in C^\infty(U)$, $[Y,X]=-[X,Y]$, and $[\partial_c,\partial_d]=0$ for coordinate fields ([[def-lie-bracket-of-smooth-vector-fields]], [[prop-coordinate-formula-for-the-lie-bracket]]).

[L4] In a chart, $\nabla_{\partial_b}\partial_c=\sum_a\Gamma^a{}_{bc}\partial_a$, and torsion freedom of $\nabla$ gives $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$ ([[def-christoffel-symbols-of-an-affine-connection]], [[lem-gr-connection-conditions-in-chart-components]] clauses 1, [[def-gr-metric-selected-connection]]).

[L5] The Christoffel symbols of the metric-selected connection satisfy $\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$ in every chart, and $g_{ae}g^{eb}=\delta_a^b$ ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] clause (a), [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L6] For every $p$ there is a smooth chart with $g_{ab}(p)=\eta_{ab}$, $\partial_ag_{bc}(p)=0$ and $\Gamma^a{}_{bc}(p)=0$ ([[thm-gr-point-normal-and-exponential-coordinate-charts]] clause (a)).

[L7] A smooth vector field on a chart domain is a finite sum $\sum_af^a\partial_a$ with smooth coefficients $f^a$, and $\sum_af^a\partial_a$ vanishes at a point whenever every $f^a$ does ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]).

[L8] Mixed partial derivatives of a smooth function commute ([[thm-clairaut-schwarz-mixed-partials]]).

[L9] A smooth tensor field of type $(1,3)$ is a family of multilinear maps with $C^\infty$ components in every chart ([[def-gr-tensor-fields-and-components]] clauses (a)-(b)).

## Proof

**Proof technique:** direct.

1.1 (Function-linearity in the first slot.) Let $f$ be smooth. Using [L3] for the bracket and [L2] for the connection, $R(fX,Y)Z=\nabla_{fX}\nabla_YZ-\nabla_Y\nabla_{fX}Z-\nabla_{[fX,Y]}Z=f\nabla_X\nabla_YZ-\nabla_Y(f\nabla_XZ)-\nabla_{f[X,Y]-Y(f)X}Z=f\nabla_X\nabla_YZ-Y(f)\nabla_XZ-f\nabla_Y\nabla_XZ-f\nabla_{[X,Y]}Z+Y(f)\nabla_XZ=fR(X,Y)Z$, the two $Y(f)\nabla_XZ$ terms cancelling. [L1, L2, L3, algebra]

1.2 (Function-linearity in the third slot.) Expanding with [L2] and [L3], $\nabla_X\nabla_Y(fZ)=\nabla_X\bigl(Y(f)Z+f\nabla_YZ\bigr)=X(Y(f))Z+Y(f)\nabla_XZ+X(f)\nabla_YZ+f\nabla_X\nabla_YZ$, while $\nabla_Y\nabla_X(fZ)=Y(X(f))Z+X(f)\nabla_YZ+Y(f)\nabla_XZ+f\nabla_Y\nabla_XZ$, and $\nabla_{[X,Y]}(fZ)=[X,Y](f)Z+f\nabla_{[X,Y]}Z$. Subtracting the second and third displays from the first, the $X(f)$, $Y(f)$ and $Z$-coefficient terms cancel in pairs and the remaining scalar coefficient is $X(Y(f))-Y(X(f))-[X,Y](f)=0$ by definition of the bracket, so $R(X,Y)(fZ)=fR(X,Y)Z$. [L1, L2, L3, algebra]

2.1 (Skew-symmetry and the second slot.) Directly from [L1] and $[Y,X]=-[X,Y]$, $R(Y,X)Z=-R(X,Y)Z$; combining this with step 1.1, $R(X,fY)Z=-R(fY,X)Z=-fR(Y,X)Z=fR(X,Y)Z$. [step 1.1, L1, L3, algebra]

3.1 (Pointwise dependence.) Let $p\in M$ and let $(V,x)$ be a chart around $p$. By [L7], fields $X',Y',Z'$ with $X'_p=X_p$, $Y'_p=Y_p$, $Z'_p=Z_p$ have the form $X'=X+\sum_af^a\partial_a$, $Y'=Y+\sum_bg^b\partial_b$, $Z'=Z+\sum_ch^c\partial_c$ on a possibly smaller chart neighborhood, with $f^a(p)=g^b(p)=h^c(p)=0$. By additivity of $R$ in each field argument and the three function-linearity steps, expanding $R(X',Y',Z')$ yields $R(X,Y,Z)$ plus a finite sum of terms each carrying at least one of the smooth coefficients $f^a,g^b,h^c$ (a term with $k$ such factors expands, by steps 1.1, 2.1 and 1.2, into $k$-fold products of coefficients times $R$ evaluated on coordinate fields). Every such term vanishes at $p$ because all coefficients do, so $R(X',Y',Z')|_p=R(X,Y,Z)|_p$: the value depends only on the pointwise data. [step 1.1, step 2.1, step 1.2, L7, algebra]

4.1 (Smooth tensor field.) By step 3.1 the assignment descends to a map $R_p:T_pM\times T_pM\times T_pM\to T_pM$, $(v,w,u)\mapsto R(X,Y)Z|_p$ for any smooth local extensions, which is $\mathbb R$-multilinear because the field-level assignment is additive over $\mathbb R$ and function-linear. In a chart, $R(\partial_c,\partial_d)\partial_b$ is a smooth field by [L1], so its coefficients $R^a{}_{bcd}$ in the coordinate frame are $C^\infty$ functions on the chart domain. By [L9] these data constitute a smooth tensor field of type $(1,3)$ whose components are exactly $R^a{}_{bcd}$. This proves (a). [step 3.1, L1, L9]

5.1 (Coordinate formula.) In the chart, [L3] gives $[\partial_c,\partial_d]=0$, so [L1] gives $R(\partial_c,\partial_d)\partial_b=\nabla_{\partial_c}\nabla_{\partial_d}\partial_b-\nabla_{\partial_d}\nabla_{\partial_c}\partial_b$. By [L4], $\nabla_{\partial_d}\partial_b=\sum_e\Gamma^e{}_{db}\partial_e$, so [L2] gives $\nabla_{\partial_c}\bigl(\sum_e\Gamma^e{}_{db}\partial_e\bigr)=\sum_e\bigl(\partial_c\Gamma^e{}_{db}\bigr)\partial_e+\sum_{e,a}\Gamma^e{}_{db}\Gamma^a{}_{ce}\partial_a$; exchanging $c,d$ and subtracting yields $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\sum_e(\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb})$. This proves (b). [step 4.1, L1, L2, L3, L4, algebra]

6.1 (Point-normal derivative of the Christoffel symbols.) In the point-normal chart of [L6], differentiate the Christoffel formula of [L5]. The derivative of the factor $g^{ae}$ multiplies the bracket $(\partial_bg_{ed}+\partial_dg_{eb}-\partial_eg_{db})$, which vanishes at $p$ because $\partial g(p)=0$, so only the bracket's derivative survives: $\partial_c\Gamma^a{}_{db}(p)=\tfrac12g^{ae}(p)\bigl(\partial_c\partial_bg_{ed}+\partial_c\partial_dg_{eb}-\partial_c\partial_eg_{db}\bigr)(p)$, and likewise $\partial_d\Gamma^a{}_{cb}(p)=\tfrac12g^{ae}(p)\bigl(\partial_d\partial_bg_{ec}+\partial_d\partial_cg_{eb}-\partial_d\partial_eg_{cb}\bigr)(p)$. Since $\Gamma(p)=0$, formula (b) of step 5.1 reduces at $p$ to the difference of these two derivatives, in which the terms $\partial_c\partial_dg_{eb}$ and $\partial_d\partial_cg_{eb}$ agree by [L8] and cancel: $R^a{}_{bcd}(p)=\tfrac12g^{ae}(p)\bigl(\partial_b\partial_cg_{ed}-\partial_c\partial_eg_{db}-\partial_b\partial_dg_{ec}+\partial_d\partial_eg_{cb}\bigr)(p)$. [step 5.1, L5, L6, L8, algebra]

7.1 (Lowering and final form.) Lowering the first index with [L5], $R_{abcd}(p)=g_{ae}(p)R^e{}_{bcd}(p)=\tfrac12\bigl(\partial_b\partial_cg_{ad}-\partial_c\partial_ag_{db}-\partial_b\partial_dg_{ac}+\partial_d\partial_ag_{cb}\bigr)(p)$. Using [L8] to commute the mixed partials and the symmetry $g_{db}=g_{bd}$, $g_{cb}=g_{bc}$ of the metric, this is $\tfrac12\bigl(g_{ad,bc}+g_{bc,ad}-g_{bd,ac}-g_{ac,bd}\bigr)(p)$, and raising back with $g^{ae}(p)$ recovers the equivalent raised display. This proves (c) and completes the proof. [step 6.1, L5, L8, algebra] ∎

## Remarks

- **What is used where.** Clause (a) uses only the connection rules and the bracket identity; the coordinate formula (b) uses in addition the symmetry of the Christoffel symbols, which is torsion freedom; the point-normal formula (c) uses the Christoffel formula, that is metric compatibility and nondegeneracy. No positive-definite or Riemannian hypothesis is used anywhere. The result is stated for a Lorentzian metric only because that is the ambient framework; the computation is signature-independent.

- **Tensoriality of $\Gamma$ is not claimed.** The formula of (b) contains the non-tensorial chart functions $\Gamma^a{}_{bc}$, but its left-hand side is tensorial by (a); this is exactly why (b) cannot be used to conclude that vanishing of $\Gamma$ at a point implies vanishing of curvature. Clause (c) shows that curvature is precisely the second-order metric information that a point-normal chart cannot remove.
