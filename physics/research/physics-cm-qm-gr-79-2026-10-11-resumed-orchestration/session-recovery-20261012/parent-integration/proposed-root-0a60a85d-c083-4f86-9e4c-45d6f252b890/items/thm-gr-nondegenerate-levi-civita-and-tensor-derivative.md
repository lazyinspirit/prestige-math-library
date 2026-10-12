---
id: thm-gr-nondegenerate-levi-civita-and-tensor-derivative
kind: theorem
title: "Existence and uniqueness of the metric-selected connection of a nondegenerate metric, and its extension to tensor fields"
status: draft
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-metric-selected-connection, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-affine-connection-on-a-smooth-manifold, def-christoffel-symbols-of-an-affine-connection, def-torsion-tensor-of-an-affine-connection, def-lie-bracket-of-smooth-vector-fields, prop-leibniz-rules-for-the-lie-bracket-with-function-multiples, prop-coordinate-formula-for-the-lie-bracket, prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components, prop-a-vector-field-acts-as-a-derivation-of-smooth-functions, def-gr-inverse-metric-and-musical-isomorphisms, lem-gr-inverse-metric-is-smooth, lem-gr-connection-conditions-in-chart-components, def-dual-connection, def-product-connection-on-tensor-and-hom-bundles, def-gr-tensor-fields-and-components, def-contraction-of-a-mixed-tensor, lem-gr-contraction-of-smooth-tensor-fields, def-smooth-vector-field-as-a-tangent-bundle-section, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, def-countable-choice]
dependency_roles:
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-torsion-tensor-of-an-affine-connection: mathematical-premise
  def-lie-bracket-of-smooth-vector-fields: mathematical-premise
  prop-leibniz-rules-for-the-lie-bracket-with-function-multiples: mathematical-premise
  prop-coordinate-formula-for-the-lie-bracket: mathematical-premise
  prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components: mathematical-premise
  prop-a-vector-field-acts-as-a-derivation-of-smooth-functions: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  lem-gr-inverse-metric-is-smooth: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  def-dual-connection: mathematical-premise
  def-product-connection-on-tensor-and-hom-bundles: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-contraction-of-a-mixed-tensor: mathematical-premise
  lem-gr-contraction-of-smooth-tensor-fields: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 3.2: the theorem, the Koszul-type derivation (3.23)-(3.29) and the Christoffel formula (3.31)-(3.33), printed pp. 35-37 (PDF pp. 36-38)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3 'covariant derivatives and connections': metric compatibility (3.19) and the Christoffel-symbol solution (3.21)-(3.23), printed pp. 59-61 (PDF pp. 66-68); covariant derivatives of one-forms and tensors (3.13)-(3.15), printed pp. 57-58 (PDF pp. 64-65)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.2.3 and equation (3.17), printed pp. 109-111 (PDF pp. 116-118)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $M$ be a smooth four-manifold without boundary and let $g$ be a smooth
symmetric covariant $2$-tensor field on $M$ such that $g_p$ is nondegenerate at
every $p\in M$ ([[def-gr-smooth-covariant-two-tensor-field]],
[[def-gr-inverse-metric-and-musical-isomorphisms]]). This holds in particular
when $(M,g,N)$ is a time-oriented smooth Lorentzian four-manifold and $g$ is
its metric ([[def-gr-smooth-lorentzian-objects]]). For smooth vector fields
$X,Y,Z$ put

$$K(X,Y,Z):=X\bigl(g(Y,Z)\bigr)+Y\bigl(g(Z,X)\bigr)-Z\bigl(g(X,Y)\bigr)+g([X,Y],Z)+g([Z,X],Y)-g([Y,Z],X),$$

with brackets as in [[def-lie-bracket-of-smooth-vector-fields]].

**(a) Existence and formulas.** There is exactly one affine connection
$\nabla$ on $M$ ([[def-affine-connection-on-a-smooth-manifold]]) satisfying

$$2g(\nabla_XY,Z)=K(X,Y,Z)\qquad\text{for all smooth }X,Y,Z .$$

It is torsion-free and $g$-compatible, so it is a metric-selected connection
for $(M,g)$ ([[def-gr-metric-selected-connection]]); in every smooth chart its
Christoffel symbols are

$$\Gamma^a{}_{bc}=\tfrac12\,g^{ad}\bigl(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc}\bigr),$$

with $g^{ad}$ the inverse-metric components
([[def-gr-inverse-metric-and-musical-isomorphisms]],
[[def-christoffel-symbols-of-an-affine-connection]]).

**(b) Uniqueness.** If an affine connection $\nabla'$ on $M$ is torsion-free
and $g$-compatible, then $\nabla'=\nabla$. Consequently the class
$\operatorname{LC}(M,g)$ of metric-selected connections has exactly one
element; it is the **Levi–Civita connection** of $g$.

**(c) Induced derivative on tensor fields.** Let $\nabla^*$ be the dual
connection on $T^*M$ and let the product connection of
[[def-product-connection-on-tensor-and-hom-bundles]] act on the tensor bundles
of [[def-gr-tensor-fields-and-components]]. Then, in every smooth chart, for
every smooth tensor field $T$ of type $(r,s)$,

$$T^{a_1\cdots a_r}{}_{b_1\cdots b_s;c}=\partial_cT^{a_1\cdots a_r}{}_{b_1\cdots b_s}+\sum_{i=1}^{r}\Gamma^{a_i}{}_{dc}\,T^{a_1\cdots d\cdots a_r}{}_{b_1\cdots b_s}-\sum_{j=1}^{s}\Gamma^{d}{}_{b_jc}\,T^{a_1\cdots a_r}{}_{b_1\cdots d\cdots b_s},$$

where the slot marked $d$ replaces the named index; this derivative commutes
with every contraction in the sense of [[def-contraction-of-a-mixed-tensor]],
and it annihilates the metric and the inverse metric:

$$g_{ab;c}=0,\qquad g^{ab}{}_{;c}=0 .$$

## Facts & Assumptions

**Given:** A smooth four-manifold $M$ without boundary, a smooth symmetric nondegenerate covariant $2$-tensor field $g$, and smooth vector fields $X,Y,Z$.

[L1] An affine connection assigns $\nabla_XY$ to smooth vector fields and is real-bilinear, function-linear in $X$, and satisfies $\nabla_X(fY)=X(f)Y+f\nabla_XY$ ([[def-affine-connection-on-a-smooth-manifold]]). Torsion is $T(X,Y)=\nabla_XY-\nabla_YX-[X,Y]$ and $g$-compatibility is $X(g(Y,Z))=g(\nabla_XY,Z)+g(Y,\nabla_XZ)$ ([[def-torsion-tensor-of-an-affine-connection]], [[def-gr-metric-selected-connection]]).

[L2] Smooth vector fields act as derivations of $C^\infty(M)$; the bracket satisfies $[X,fY]=f[X,Y]+X(f)Y$ and $[fX,gY]=fg[X,Y]+f(Xg)Y-g(Yf)X$, and is itself a smooth vector field with coordinate formula $[X,Y]^j=\sum_i(X^i\partial_iY^j-Y^i\partial_iX^j)$ ([[prop-a-vector-field-acts-as-a-derivation-of-smooth-functions]], [[prop-leibniz-rules-for-the-lie-bracket-with-function-multiples]], [[def-lie-bracket-of-smooth-vector-fields]], [[prop-coordinate-formula-for-the-lie-bracket]], [[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]]).

[L3] The pairing $g(V,W)$ of smooth vector fields is a smooth function; $g$ is symmetric, and $g_p$ is nondegenerate, so $g_p(v,\cdot)=0$ implies $v=0$, and every linear functional on $T_pM$ is $g_p(v,\cdot)$ for a unique $v$ ([[def-gr-smooth-covariant-two-tensor-field]], [[def-gr-smooth-lorentzian-objects]], [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L4] In a chart, the coordinate derivations $\partial_a$ form a basis of $T_pM$ at every $p$ of the chart, and smooth vector fields are exactly those with smooth coordinate components; the Christoffel symbols are the smooth functions with $\nabla_{\partial_b}\partial_c=\sum_a\Gamma^a{}_{bc}\partial_a$ ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]], [[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]], [[def-christoffel-symbols-of-an-affine-connection]]).

[L5] The components $g^{ab}$ of the inverse metric are smooth and satisfy $g^{ac}g_{cb}=\delta^a{}_b$ ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[lem-gr-inverse-metric-is-smooth]]). Metric compatibility is equivalent in every chart to $\partial_ag_{bc}=\sum_d\bigl(\Gamma^d{}_{ab}g_{dc}+\Gamma^d{}_{ac}g_{bd}\bigr)$ ([[lem-gr-connection-conditions-in-chart-components]]).

[L6] The dual connection is characterized by $(\nabla^*_X\omega)(Y)=X(\omega(Y))-\omega(\nabla_XY)$, and the product connection on tensor bundles extends the connections on the factors by the Leibniz rule and is uniquely determined by it ([[def-dual-connection]], [[def-product-connection-on-tensor-and-hom-bundles]]).

[L7] A type $(r,s)$ tensor field is a smooth section with smooth chart components, and contraction over one upper and one lower slot is the basis-independent operation $\sum_iT^{\cdots i\cdots}{}_{\cdots i\cdots}$ ([[def-gr-tensor-fields-and-components]], [[def-contraction-of-a-mixed-tensor]], [[lem-gr-contraction-of-smooth-tensor-fields]]).

## Proof

**Proof technique:** direct.

1.1 The functional $K$ is additive in each of its three arguments, and expanding its six terms with [L2] gives the three scalar rules $$K(fX,Y,Z)=fK(X,Y,Z),\qquad K(X,Y,fZ)=fK(X,Y,Z),$$ $$K(X,fY,Z)=fK(X,Y,Z)+2X(f)g(Y,Z)$$ for every smooth function $f$: in the first, the terms containing $Y(f)$ and $Z(f)$ produced by $[fX,Y]$ and $[fZ,X]$ cancel against $-Y(g(Z,fX))$ and $-Z(g(fX,Y))$; in the second, the derivative terms cancel in pairs by symmetry of $g$; in the third, the terms $X(f)g(Y,Z)$ occur twice and all other derivative terms cancel. [L2, L3, algebra]

2.1 For fixed smooth $X,Y$, the rule of step 1.1 and bilinearity of $g$ show that the equation $2g(V,Z)=K(X,Y,Z)$ for all smooth $Z$ is equivalent, in a chart, to the single set of identities $2g(V,\partial_c)=K(X,Y,\partial_c)$ for $c=0,1,2,3$: writing $Z=\sum_cZ^c\partial_c$ on the chart gives $K(X,Y,Z)=\sum_cZ^cK(X,Y,\partial_c)$. [step 1.1, L3, L4, algebra]

3.1 In each smooth chart $(U,x)$ put $V_U:=\tfrac12\sum_{a,b}g^{ab}K(X,Y,\partial_b)\,\partial_a$, a smooth field on $U$; by step 2.1 and $g_{ac}g^{ab}=\delta_c{}^b$ it satisfies $2g(V_U,\partial_c)=2\sum_bg_{ac}g^{ab}\tfrac12K(X,Y,\partial_b)=K(X,Y,\partial_c)$ for every $c$, hence $2g(V_U,Z)=K(X,Y,Z)$ for every smooth $Z$ on $U$. If $(U,x)$ and $(U',x')$ overlap, then $g(V_U-V_{U'},Z)=0$ for every smooth $Z$ there, so $V_U=V_{U'}$ pointwise by nondegeneracy; the local fields therefore patch to one smooth vector field $\nabla_XY$ on $M$ with $2g(\nabla_XY,Z)=K(X,Y,Z)$ for all $Z$. [step 2.1, L3, L4, L5, algebra]

4.1 $\nabla$ is an affine connection. Additivity and real homogeneity in $X$ and in $Y$ hold termwise for $K$; scalar linearity in $X$ is $K(fX,Y,Z)=fK(X,Y,Z)$; and $2g(\nabla_X(fY),Z)=K(X,fY,Z)=fK(X,Y,Z)+2X(f)g(Y,Z)=2g(X(f)Y+f\nabla_XY,Z)$ for all $Z$, so $\nabla_X(fY)=X(f)Y+f\nabla_XY$ by nondegeneracy. [step 3.1, L1, L3, algebra]

4.2 Torsion vanishes. Subtracting the definitions of $K(X,Y,Z)$ and $K(Y,X,Z)$ and using symmetry of $g$ and skew-symmetry of the bracket cancels the $X,Y,Z$-derivative terms and the four bracket terms except $g([X,Y],Z)-g([Y,X],Z)=2g([X,Y],Z)$; hence $2g(\nabla_XY-\nabla_YX-[X,Y],Z)=K(X,Y,Z)-K(Y,X,Z)-2g([X,Y],Z)=0$ for all $Z$, and $T(X,Y)=\nabla_XY-\nabla_YX-[X,Y]=0$ by nondegeneracy. [step 3.1, L1, L2, L3, algebra]

4.3 Metric compatibility holds. Adding $K(X,Y,Z)$ and $K(X,Z,Y)$ cancels the $Y$- and $Z$-derivative terms by symmetry of $g$ and cancels the bracket terms by skew-symmetry, leaving $K(X,Y,Z)+K(X,Z,Y)=2X(g(Y,Z))$; dividing by two and using the defining property of $\nabla$ gives $X(g(Y,Z))=g(\nabla_XY,Z)+g(Y,\nabla_XZ)$. [step 3.1, L1, L2, L3, algebra]

4.4 Any torsion-free $g$-compatible connection $\nabla'$ satisfies $2g(\nabla'_XY,Z)=K(X,Y,Z)$. Indeed, compatibility applied to the three pairings and torsion freedom written as $[X,Y]=\nabla'_XY-\nabla'_YX$, $[Z,X]=\nabla'_ZX-\nabla'_XZ$, $[Y,Z]=\nabla'_YZ-\nabla'_ZY$ turn the six terms of $K(X,Y,Z)$ into $\nabla'$-terms in which $g(\nabla'_XY,Z)$ occurs twice and every other term cancels in pairs. Hence $\nabla'=\nabla$ by the displayed defining property and nondegeneracy, proving claim (b) and the uniqueness assertion of (a). [step 3.1, L1, L3, algebra]

4.5 In a chart, the brackets of coordinate fields vanish by [L2], so evaluating $K$ on coordinate fields with [L2] and [L4] gives $K(\partial_b,\partial_c,\partial_a)=\partial_bg_{ca}+\partial_cg_{ba}-\partial_ag_{bc}$; substituting $\nabla_{\partial_b}\partial_c=\sum_e\Gamma^e{}_{bc}\partial_e$ into step 3.1 gives $\sum_eg_{ea}\Gamma^e{}_{bc}=\tfrac12(\partial_bg_{ca}+\partial_cg_{ba}-\partial_ag_{bc})$ and multiplying by $g^{ad}$ gives the displayed Christoffel formula, whose right side is smooth by [L5]. [step 3.1, L2, L4, L5, algebra]

5.1 (Dual and tensor components.) The dual connection of [L6] is a connection on $T^*M$, and its components are $(\nabla^*_a\omega)_b=\partial_a\omega_b-\sum_d\Gamma^d{}_{ab}\omega_d$: with $\omega=\sum_b\omega_bdx^b$, the characterizing identity gives $(\nabla^*_{\partial_a}\omega)(\partial_b)=\partial_a\omega_b-\omega(\nabla_{\partial_a}\partial_b)=\partial_a\omega_b-\sum_d\Gamma^d{}_{ab}\omega_d$. [step 4.5, L4, L6, algebra]

6.1 The product connection of [L6] extends $\nabla$ and $\nabla^*$ to all tensor bundles and satisfies the Leibniz rule on tensor products. Its two elementary values are $\nabla_{\partial_c}\partial_b=\sum_d\Gamma^d{}_{bc}\partial_d$ and $\nabla_{\partial_c}dx^a=-\sum_d\Gamma^a{}_{dc}dx^d$: the second follows from step 5.1 and $dx^a(\partial_b)=\delta^a{}_b$. Expanding a smooth tensor field $T$ in the coordinate product frame as $T=\sum T^{a_1\cdots a_r}{}_{b_1\cdots b_s}\,\partial_{a_1}\otimes\cdots\otimes dx^{b_1}\otimes\cdots$ and applying the Leibniz rule, exactly one $+\Gamma$ term appears for each upper slot and one $-\Gamma$ term for each lower slot, and the coefficient derivative $\partial_cT^{\cdots}$ appears once; this yields the displayed component formula, the sum over $d$ replacing the slot index. [step 4.5, step 5.1, L4, L6, L7, algebra]

7.1 The induced derivative commutes with contraction. Let $T$ be of type $(r,s)$ with $r,s\ge1$, contract one upper slot $a_i$ with one lower slot $b_j$, and contract the derivative in the same slots. The $+\Gamma$ term for the upper slot contributes $\sum_d\Gamma^{d}{}_{ec}T^{\cdots e\cdots}{}_{\cdots d\cdots}$ and the $-\Gamma$ term for the lower slot contributes $-\sum_d\Gamma^{e}{}_{dc}T^{\cdots d\cdots}{}_{\cdots e\cdots}$; relabelling the dummy indices $(d,e)\mapsto(e,d)$ in the second sum makes the two contributions equal and opposite, while the remaining terms are exactly the derivative of the contracted components by step 6.1. Summing over $d$ is a finite index sum, so both orders give the same smooth function. [step 6.1, L7, algebra]

8.1 The metric and inverse metric are annihilated. By step 6.1 with $T=g$, writing the two lower slots explicitly, $g_{ab;c}=\partial_cg_{ab}-\sum_d\Gamma^d{}_{ac}g_{db}-\sum_d\Gamma^d{}_{bc}g_{ad}=0$ by the compatibility identity of [L5]. Differentiating $g^{ad}g_{db}=\delta^a{}_b$ in the direction $\partial_c$ and substituting the compatibility identity gives $\partial_cg^{af}+\sum_d\Gamma^f{}_{dc}g^{ad}+\sum_d\Gamma^a{}_{dc}g^{df}=0$, which is $g^{af}{}_{;c}=0$ by step 6.1. This proves claim (c) and completes the proof. [step 6.1, L5, algebra] ∎

## Remarks

- **Choice convention.** The smooth vector fields and tensor fields used here are the tangent-bundle and tensor-bundle sections of [[def-smooth-vector-field-as-a-tangent-bundle-section]] and [[def-gr-tensor-fields-and-components]]; their canonical smooth structures assume the axiom $\mathrm{AC}_\omega$ of [[def-countable-choice]], which is the only choice principle inherited. The construction itself is intrinsic and selects no frames beyond finitely many coordinate charts.

- **Relation to the Riemannian theorem.** The published Riemannian Levi–Civita theorem and the Koszul-formula lemma are stated for a positive-definite supplied metric and are not used above; the argument here uses only symmetry and nondegeneracy, and therefore applies to the Lorentzian metric of this library. The uniqueness clause is what makes the phrase "the metric-selected connection of $g$" well defined; it is not used to assume the conclusion in [[def-gr-metric-selected-connection]].
