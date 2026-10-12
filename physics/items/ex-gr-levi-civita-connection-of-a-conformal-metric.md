---
id: ex-gr-levi-civita-connection-of-a-conformal-metric
kind: example
title: "The metric-selected connection of a conformal metric, verified by the defining identities"
status: draft
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-metric-selected-connection, def-gr-smooth-lorentzian-objects, def-christoffel-symbols-of-an-affine-connection, lem-gr-connection-conditions-in-chart-components, lem-gr-inverse-metric-is-smooth, def-gr-inverse-metric-and-musical-isomorphisms]
dependency_roles:
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  lem-gr-inverse-metric-is-smooth: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: the Christoffel symbols from the metric (3.21)-(3.23) and metric compatibility (3.19), printed pp. 59-61 (PDF pp. 66-68)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 3.2: the Christoffel formula (3.33), printed pp. 35-37 (PDF pp. 36-38)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.2.3: the Levi-Civita connection and its components (3.16)-(3.17), printed pp. 109-111 (PDF pp. 116-118)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Example

Let $U\subseteq\mathbb R^4$ be open, let $\varphi:U\to\mathbb R$ be smooth, put
$\Omega:=e^{\varphi}>0$ and consider the conformal metric

$$g_{ab}=\Omega^2\,\eta_{ab}=e^{2\varphi}\eta_{ab},\qquad \eta=\operatorname{diag}(-1,1,1,1),$$

on $U$, with the identity chart and the time orientation $N=\partial_0$
([[def-gr-smooth-lorentzian-objects]]). Define, in this chart,

$$\Gamma^a{}_{bc}:=\delta^a{}_b\,\partial_c\varphi+\delta^a{}_c\,\partial_b\varphi-\eta_{bc}\,\eta^{ad}\partial_d\varphi .$$

Then:

1. $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$, so the resulting connection is
   torsion-free.
2. The compatibility identity
   $\partial_ag_{bc}=\sum_d\bigl(\Gamma^d{}_{ab}g_{dc}+\Gamma^d{}_{ac}g_{bd}\bigr)$
   holds identically on $U$.
3. By the uniqueness part of
   [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], this connection
   is the metric-selected connection of $g$ on $U$; hence the displayed
   formula is the Levi–Civita connection of every conformally flat metric in
   these coordinates.

As a finite check, for the special choice $\varphi(x)=\lambda x^1$ and
$\lambda\neq0$ the nonzero symbols are
$$\Gamma^0{}_{01}=\Gamma^0{}_{10}=\lambda,\quad \Gamma^1{}_{00}=\Gamma^1{}_{11}=\lambda,\quad \Gamma^1{}_{22}=\Gamma^1{}_{33}=-\lambda,\quad \Gamma^2{}_{12}=\Gamma^2{}_{21}=\Gamma^3{}_{13}=\Gamma^3{}_{31}=\lambda.$$
For $\lambda=0$ all symbols vanish. The identity of claim 2 is verified on
the components $(a,b,c)=(1,0,0)$ and $(0,0,0)$ below.

## Facts & Assumptions

**Given:** An open set $U\subseteq\mathbb R^4$ with the identity chart, a smooth $\varphi:U\to\mathbb R$, the metric $g_{ab}=e^{2\varphi}\eta_{ab}$, and the coefficients $\Gamma^a{}_{bc}=\delta^a{}_b\partial_c\varphi+\delta^a{}_c\partial_b\varphi-\eta_{bc}\eta^{ad}\partial_d\varphi$.

[L1] The metric $g=e^{2\varphi}\eta$ with $e^{2\varphi}>0$ is a smooth Lorentzian metric of signature $(-,+,+,+)$ on $U$, and its inverse-metric components are $g^{ab}=e^{-2\varphi}\eta^{ab}$ with $\eta^{ad}\eta_{db}=\delta^a{}_b$ ([[def-gr-smooth-lorentzian-objects]], [[def-gr-inverse-metric-and-musical-isomorphisms]], [[lem-gr-inverse-metric-is-smooth]]).

[L2] Torsion freedom of a connection in a chart is the symmetry $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$, and metric compatibility is the identity $\partial_ag_{bc}=\sum_d(\Gamma^d{}_{ab}g_{dc}+\Gamma^d{}_{ac}g_{bd})$, both in the sense of [[lem-gr-connection-conditions-in-chart-components]] and [[def-gr-metric-selected-connection]].

[L3] A smooth symmetric nondegenerate metric has exactly one metric-selected connection, characterized by torsion freedom and metric compatibility ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-christoffel-symbols-of-an-affine-connection]]).

## Verification

**Proof technique:** direct.

1.1 The coefficients are smooth functions of $x$ because $\varphi$ is smooth, and they satisfy $\Gamma^a{}_{bc}-\Gamma^a{}_{cb}=\bigl(\delta^a{}_b\partial_c\varphi+\delta^a{}_c\partial_b\varphi\bigr)-\bigl(\delta^a{}_c\partial_b\varphi+\delta^a{}_b\partial_c\varphi\bigr)-\bigl(\eta_{bc}-\eta_{cb}\bigr)\eta^{ad}\partial_d\varphi=0$ by symmetry of $\eta$. Hence the connection they define is torsion-free by [L2]. [given, L2, algebra]

2.1 For the compatibility identity, multiply the candidate by the metric: $\sum_d\Gamma^d{}_{ab}g_{dc}=e^{2\varphi}\sum_d\Gamma^d{}_{ab}\eta_{dc}=e^{2\varphi}\bigl(\partial_b\varphi\,\eta_{ac}+\partial_a\varphi\,\eta_{bc}-\eta_{ab}\partial_c\varphi\bigr)$, using $\delta^d{}_a\eta_{dc}=\eta_{ac}$, $\delta^d{}_b\eta_{dc}=\eta_{bc}$ and $\eta^{de}\eta_{dc}=\delta^e{}_c$. Adding the analogous expression with $b$ and $c$ interchanged gives $e^{2\varphi}\bigl(2\partial_a\varphi\,\eta_{bc}+\partial_b\varphi\,\eta_{ac}-\partial_b\varphi\,\eta_{ac}+\eta_{ab}\partial_c\varphi-\eta_{ab}\partial_c\varphi\bigr)=2\partial_a\varphi\,e^{2\varphi}\eta_{bc}=\partial_a\bigl(e^{2\varphi}\eta_{bc}\bigr)=\partial_ag_{bc}$, since $\partial_a\eta_{bc}=0$ and $\partial_ae^{2\varphi}=2\partial_a\varphi\,e^{2\varphi}$. [step 1.1, L1, L2, algebra]

3.1 Steps 1.1 and 2.1 verify the two hypotheses of [L3] for the connection with coefficients $\Gamma$; hence this connection is the unique metric-selected connection of $g$ on the chart domain, and since the identity chart covers $U$ it is that connection on $U$. [step 1.1, step 2.1, L3, algebra]

4.1 (Finite check for $\varphi=\lambda x^1$.) Here $\partial_d\varphi=\lambda\delta^1{}_d$, so $\Gamma^a{}_{bc}=\lambda\bigl(\delta^a{}_b\delta^1{}_c+\delta^a{}_c\delta^1{}_b-\eta_{bc}\eta^{a1}\bigr)$. Substitution gives exactly the symbols listed in the Example: the first two arise from the Kronecker-delta terms with $a=0$; for $a=1$ the diagonal cases $(b,c)=(0,0),(1,1),(2,2),(3,3)$ give respectively $\lambda,\lambda,-\lambda,-\lambda$; and for $a=2,3$ the delta terms give respectively the symmetric pairs $(1,2),(1,3)$ with value $\lambda$. All other cases vanish by the displayed formula. If $\lambda=0$ every coefficient is zero. For $(a,b,c)=(1,0,0)$ the identity of claim 2 reads $\partial_1g_{00}=2\Gamma^0{}_{10}g_{00}=2\lambda(-e^{2\lambda x^1})=-2\lambda e^{2\lambda x^1}$, which equals $\partial_1(-e^{2\lambda x^1})$; for $(a,b,c)=(0,0,0)$ both sides vanish. [step 2.1, algebra] ∎

## Remarks

The example shows that the Koszul construction of
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] is effective: the
two defining identities alone identify the connection, with no frame field or
curvature computation. Nothing here is a statement about the curvature of
$g=e^{2\varphi}\eta$; the conformal factor is an arbitrary positive smooth
function and may or may not come from a coordinate transformation of the flat
metric.
