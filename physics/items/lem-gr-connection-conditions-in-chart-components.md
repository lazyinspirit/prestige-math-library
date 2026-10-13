---
id: lem-gr-connection-conditions-in-chart-components
kind: lemma
title: "Torsion freedom and metric compatibility in chart components"
status: published
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-metric-selected-connection, def-gr-smooth-lorentzian-objects, def-christoffel-symbols-of-an-affine-connection, def-affine-connection-on-a-smooth-manifold, def-torsion-tensor-of-an-affine-connection, lem-torsion-is-c-infinity-bilinear-and-skew-symmetric, prop-coordinate-vector-fields-commute, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, def-gr-smooth-covariant-two-tensor-field, def-smooth-vector-field-as-a-tangent-bundle-section, def-countable-choice, lem-chart-bump-at-a-point-with-prescribed-support, prop-connection-laws-in-directional-form]
dependency_roles:
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  def-torsion-tensor-of-an-affine-connection: mathematical-premise
  lem-torsion-is-c-infinity-bilinear-and-skew-symmetric: mathematical-premise
  prop-coordinate-vector-fields-commute: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-chart-bump-at-a-point-with-prescribed-support: mathematical-premise
  prop-connection-laws-in-directional-form: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), the torsion (3.16) and the derivation of the Christoffel formula (3.19)-(3.21), printed pp. 59-60 (PDF pp. 66-67)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), equations (3.23)-(3.33) in section 3.2, printed pp. 36-37 (PDF pp. 37-38)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.2, printed pp. 100-107 (PDF pp. 107-114)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]), let $\nabla$ be an affine connection on
$M$ ([[def-affine-connection-on-a-smooth-manifold]]) and let $(U,x)$ be a
smooth chart, with Christoffel symbols $\nabla_{\partial_b}\partial_c=\sum_a
\Gamma^a{}_{bc}\partial_a$ ([[def-christoffel-symbols-of-an-affine-connection]])
and metric components $g_{ab}=g(\partial_a,\partial_b)$. Then:

1. $\nabla$ is torsion-free ([[def-torsion-tensor-of-an-affine-connection]])
   if and only if $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$ for all $a,b,c$ in every
   smooth chart.
2. $\nabla$ is $g$-compatible ([[def-gr-metric-selected-connection]]) if and
   only if, in every smooth chart,

$$\partial_ag_{bc}=\sum_{d=0}^{3}\bigl(\Gamma^d{}_{ab}g_{dc}+\Gamma^d{}_{ac}g_{bd}\bigr) \qquad(a,b,c=0,1,2,3).$$

Thus $\nabla$ is metric-selected for $(M,g)$ if and only if both displayed
conditions hold in every smooth chart.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$, an affine
connection $\nabla$, and a smooth chart $(U,x)$.

[L1] The Christoffel symbols in a chart are the unique smooth functions with $\nabla_{\partial_b}\partial_c=\sum_a\Gamma^a{}_{bc}\partial_a$ ([[def-christoffel-symbols-of-an-affine-connection]]).

[L2] Torsion is $T(X,Y)=\nabla_XY-\nabla_YX-[X,Y]$, and it is $C^\infty(M)$-bilinear and skew-symmetric ([[def-torsion-tensor-of-an-affine-connection]], [[lem-torsion-is-c-infinity-bilinear-and-skew-symmetric]]).

[L3] Coordinate vector fields commute: $[\partial_b,\partial_c]=0$ in any smooth chart ([[prop-coordinate-vector-fields-commute]]).

[L4] $\nabla$ is torsion-free when $T=0$, and $g$-compatible when $X(g(Y,Z))=g(\nabla_XY,Z)+g(Y,\nabla_XZ)$ for all smooth $X,Y,Z$ ([[def-gr-metric-selected-connection]]).

[L5] The coordinate derivations $\partial_0|_p,\dots,\partial_3|_p$ form a basis of $T_pM$, so a field that vanishes on all coordinate fields in a chart vanishes there ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]).

[L6] An affine connection is real-linear in the second argument and satisfies $\nabla_X(fY)=X(f)Y+f\nabla_XY$, and is function-linear in $X$ ([[def-affine-connection-on-a-smooth-manifold]]).

[L7] The metric components $g_{ab}=g(\partial_a,\partial_b)$ are smooth functions in every chart of a smooth covariant $2$-tensor field ([[def-gr-smooth-covariant-two-tensor-field]]).

[L8] For a point $p$ in an open chart domain $U$, there is a smooth $\rho:M\to[0,1]$ with $\rho(p)=1$ and support contained in $U$, where support is the closure of the nonzero locus ([[lem-chart-bump-at-a-point-with-prescribed-support]]). The directional connection laws extend to local fields independently of their extensions; the cutoff construction and germ-locality argument are proved in [[prop-connection-laws-in-directional-form]], Proof 1.2-3.1.

## Proof

**Proof technique:** direct.

1.1 In the chart, [L1] and [L3] give $T(\partial_b,\partial_c)=\nabla_{\partial_b}\partial_c-\nabla_{\partial_c}\partial_b-[\partial_b,\partial_c]=\sum_a(\Gamma^a{}_{bc}-\Gamma^a{}_{cb})\partial_a$. [L1, L2, L3, algebra]

1.2 The connection is also local in its differentiated field: if a global field $S$ vanishes near $p$, take a cutoff $\chi$ supported there with $\chi(p)=1$ from [L8]. Since $\chi S=0$, [L6] gives $0=(\nabla_X(\chi S))_p=X(\chi)_pS_p+\chi(p)(\nabla_XS)_p=(\nabla_XS)_p$. Thus fields agreeing near $p$ have the same differentiated value there; locality in the direction and cutoff extensions are supplied by [L8]. To localize [L4], define on local fields the scalar defect $D(X,Y,Z):=X(g(Y,Z))-g(\nabla_XY,Z)-g(Y,\nabla_XZ)$. By [L6], $D(fX,Y,Z)=fD(X,Y,Z)$. Expanding $D(X,fY,Z)$, the term $X(f)g(Y,Z)$ from the derivative cancels the same term from $\nabla_X(fY)$, so $D(X,fY,Z)=fD(X,Y,Z)$; the identical cancellation in the third slot gives $D(X,Y,fZ)=fD(X,Y,Z)$. Fix $p\in U$ and take $\rho$ from [L8]. The fields $\rho X,\rho Y,\rho Z$ on $U$, extended by zero on $M\setminus\operatorname{supp}(\rho)$, are smooth global fields: these two open domains cover $M$ and the fields agree on their overlap. If $\nabla$ is globally $g$-compatible, [L4] gives $D(\rho X,\rho Y,\rho Z)_p=0$; locality in [L8] and the three function-linear identities identify this with $\rho(p)^3D(X,Y,Z)_p=D(X,Y,Z)_p$. Thus compatibility holds for all local fields at every chart point. Apply it to $X=\partial_a$, $Y=\partial_b$, $Z=\partial_c$ and substitute [L1] to obtain $\partial_ag_{bc}=\sum_d(\Gamma^d{}_{ab}g_{dc}+\Gamma^d{}_{ac}g_{bd})$. No simultaneous family of cutoffs is chosen. [L1, L4, L6, L8, algebra]

1.3 Conversely, assume the displayed identity holds in every chart of a cover, let $X,Y,Z$ be smooth vector fields and let $p\in M$. On a chart around $p$ write $X=\sum_aX^a\partial_a$, $Y=\sum_bY^b\partial_b$, $Z=\sum_cZ^c\partial_c$. Using [L6] and [L1], $\nabla_XY=\sum_{a,b}\bigl(X^aY^b\nabla_{\partial_a}\partial_b+X^a\partial_a(Y^b)\partial_b\bigr)=\sum_{a,b,d}X^aY^b\Gamma^d{}_{ab}\partial_d+\sum_bX(Y^b)\partial_b$, and likewise $\nabla_XZ=\sum_{a,c,d}X^aZ^c\Gamma^d{}_{ac}\partial_d+\sum_cX(Z^c)\partial_c$. Evaluating $g$ on these fields and using bilinearity gives $g(\nabla_XY,Z)+g(Y,\nabla_XZ)=\sum_{a,b,c}X^aY^bZ^c\bigl(\Gamma^d{}_{ab}g_{dc}+\Gamma^d{}_{ac}g_{bd}\bigr)+X(Y^b)Z^cg_{bc}+Y^bX(Z^c)g_{bc}$ at the point, with the index $d$ summed. [L1, L6, algebra]

2.1 If $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$ in the charts of a cover of $M$, then by step 1.1 the torsion vanishes on pairs of coordinate fields in every chart; for arbitrary smooth fields $X=\sum_bX^b\partial_b$, $Y=\sum_cY^c\partial_c$ on a chart domain, [L2] expands $T(X,Y)=\sum_{b,c}X^bY^cT(\partial_b,\partial_c)=0$. Hence $T=0$ and $\nabla$ is torsion-free by [L4]. [step 1.1, L2, L4, algebra]

2.2 Conversely, if $\nabla$ is torsion-free, then, at each chart point, extend the coordinate fields using the cutoff of [L8]; the pointwise tensoriality [L2] identifies their global torsion value with $T(\partial_b,\partial_c)$, so $T(\partial_b,\partial_c)=0$ in every chart, so step 1.1 and the basis property [L5] give $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$. This proves claim 1. [step 1.1, L2, L4, L5, L8]

3.1 On the other hand, since $g(Y,Z)=\sum_{b,c}Y^bZ^cg_{bc}$ and $X$ is a derivation, $X(g(Y,Z))=\sum_{b,c}\bigl(X(Y^b)Z^cg_{bc}+Y^bX(Z^c)g_{bc}+Y^bZ^cX(g_{bc})\bigr)$ with $X(g_{bc})=\sum_aX^a\partial_ag_{bc}$. Substituting the assumed identity for $\partial_ag_{bc}$ turns the last sum into exactly the bracket-free part of step 1.3, so the two sides of $X(g(Y,Z))=g(\nabla_XY,Z)+g(Y,\nabla_XZ)$ agree at $p$. Since $p$ and the fields were arbitrary, $\nabla$ is $g$-compatible by [L4]; together with step 1.2 this proves claim 2. [step 1.2, step 1.3, L4, L7, algebra] ∎

## Remarks

**Choice convention.** The smooth vector fields of this item are the
tangent-bundle sections of
[[def-smooth-vector-field-as-a-tangent-bundle-section]], whose canonical smooth
structure on $TM$ assumes the axiom $\mathrm{AC}_\omega$ of
[[def-countable-choice]]; this item inherits that assumption and uses no
further choice principle.
