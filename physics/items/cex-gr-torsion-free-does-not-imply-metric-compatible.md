---
id: cex-gr-torsion-free-does-not-imply-metric-compatible
kind: counterexample
title: "A torsion-free connection that is not metric-compatible"
status: published
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [ex-gr-flat-connection-is-metric-selected, ex-gr-minkowski-chart-as-a-lorentzian-manifold, def-gr-metric-selected-connection, lem-gr-connection-conditions-in-chart-components, def-affine-connection-on-a-smooth-manifold, def-christoffel-symbols-of-an-affine-connection]
dependency_roles:
  ex-gr-flat-connection-is-metric-selected: mathematical-premise
  ex-gr-minkowski-chart-as-a-lorentzian-manifold: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), torsion (3.16) and metric compatibility as independent requirements, printed pp. 59-60 (PDF pp. 66-67)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 3.2, both conditions imposed independently in the Levi-Civita theorem, printed pp. 36-37 (PDF pp. 37-38)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.2, printed pp. 100-107 (PDF pp. 107-114)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement refuted

Statement refuted: "every torsion-free affine connection on the flat
Lorentzian four-manifold $(M,A)$ of
[[ex-gr-minkowski-chart-as-a-lorentzian-manifold]] is compatible with the
metric $A$" ([[def-gr-metric-selected-connection]]).

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(M,A)$ with global chart $x$, so that $A_{ab}=\operatorname{diag}(-1,1,1,1)_{ab}$ are constant, and the coefficient data $\Gamma^0{}_{01}=\Gamma^0{}_{10}=1$, with all other $\Gamma^a{}_{bc}=0$.

[L1] An affine connection is $\mathbb R$-bilinear, function-linear in the first argument, and satisfies $\nabla_X(fY)=X(f)Y+f\nabla_XY$; the connection $\nabla_XY=\sum_bX(Y^b)\partial_b$ of [[ex-gr-flat-connection-is-metric-selected]] is an affine connection, its verification using exactly these rules ([[def-affine-connection-on-a-smooth-manifold]]).

[L2] The Christoffel symbols in a chart are the unique smooth functions with $\nabla_{\partial_b}\partial_c=\sum_a\Gamma^a{}_{bc}\partial_a$ ([[def-christoffel-symbols-of-an-affine-connection]]).

[L3] A connection is torsion-free if and only if $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$ in every chart, and compatible with the metric if and only if $\partial_ag_{bc}=\sum_d(\Gamma^d{}_{ab}g_{dc}+\Gamma^d{}_{ac}g_{bd})$ in every chart ([[lem-gr-connection-conditions-in-chart-components]]).

[L4] A metric-selected connection is one that is both torsion-free and metric-compatible ([[def-gr-metric-selected-connection]]).

## Counterexample

1.1 Define $\nabla_XY:=\sum_{a,b,c}X^aY^b\Gamma^c{}_{ab}\partial_c+\sum_bX(Y^b)\partial_b$ for smooth fields $X=\sum_aX^a\partial_a$, $Y=\sum_bY^b\partial_b$ in the global chart, with the given coefficients. Then $\nabla_{fX}Y=f\nabla_XY$ because the coefficients depend bilinearly on the components of $X,Y$, $\nabla_X(fY)=\sum_{a,b,c}X^a(fY)^b\Gamma^c{}_{ab}\partial_c+\sum_bX(fY^b)\partial_b=f\nabla_XY+X(f)Y$ by the product rule, and $\mathbb R$-bilinearity holds componentwise; hence $\nabla$ is an affine connection by [L1]. [L1, algebra]

1.2 By [L2] the Christoffel symbols of $\nabla$ in the global chart are the given $\Gamma^0{}_{01}=\Gamma^0{}_{10}=1$ and $\Gamma^a{}_{bc}=0$ otherwise; in particular $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$ for all $a,b,c$, so $\nabla$ is torsion-free by [L3]. [L2, L3]

2.1 The compatibility identity of [L3] fails at every point: for $(a,b,c)=(1,0,0)$ the left-hand side is $\partial_1A_{00}=0$ because $A_{00}=-1$ is constant, while the right-hand side is $\Gamma^0{}_{10}A_{00}+\Gamma^0{}_{10}A_{00}=1\cdot(-1)+1\cdot(-1)=-2\neq0$. By the equivalence [L3], $\nabla$ is not compatible with $A$; it is therefore not metric-selected by [L4]. [step 1.2, L3, L4, algebra]

3.1 The connection of steps 1.1-1.2 is an affine connection that is torsion-free but not $A$-compatible, so it refutes the displayed statement. Since it is not compatible it also shows that the two conditions in the definition of a metric-selected connection are independent in the sense that torsion freedom alone does not force compatibility. [step 1.1, step 1.2, step 2.1, L4] ∎

## Remarks

The companion example [[ex-gr-flat-connection-is-metric-selected]] shows that
the class $\operatorname{LC}(M,A)$ is nonempty: the coordinate connection with
vanishing coefficients is metric-selected. This counterexample shows that
torsion freedom alone is strictly weaker than the pair of conditions. It makes
no claim about the converse implication, that a compatible connection need not
be torsion-free, and no uniqueness claim about $\operatorname{LC}(M,A)$.
