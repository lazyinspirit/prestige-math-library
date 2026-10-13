---
id: thm-gr-flat-cylinder-closed-timelike-and-no-cauchy-set
kind: theorem
title: "The flat cylinder model: closed timelike curves, total viciousness and no Cauchy set"
status: published
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [lem-gr-quotient-by-isometric-free-proper-action, def-gr-causal-curves-and-reachability, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-spacelike-hypersurfaces-and-cauchy-sets, lem-gr-flat-inertial-cone-criterion-and-sums, def-gr-flat-minkowski-model-and-inertial-charts, def-time-orientation-and-future-causal-sets, thm-gr-curvature-tensoriality-and-coordinate-formula, def-gr-curvature-tensor-and-derived-tensors, def-christoffel-symbols-of-an-affine-connection, lem-gr-connection-conditions-in-chart-components, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-free-and-proper-lie-group-actions, def-smooth-manifold, def-differential-of-a-smooth-map]
dependency_roles:
  lem-gr-quotient-by-isometric-free-proper-action: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  lem-gr-flat-inertial-cone-criterion-and-sums: mathematical-premise
  def-gr-flat-minkowski-model-and-inertial-charts: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-free-and-proper-lie-group-actions: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: closed timelike curves and vicious spacetimes (Proposition 4.18 and Definition 4.19 printed p. 113); causality conditions and their failure, sections 4.2-4.3 printed pp. 111-137"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007): not every spacetime admits a Cauchy surface; spacetimes with closed timelike curves do not, section 3.2.1 printed p. 39"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Misner space and closed timelike curves produced by identification, printed pp. 126-127 (PDF pp. 133-134)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Let $A:=\mathbb R^4$ carry the flat structure $(\eta,N)$ of
[[def-gr-flat-minkowski-model-and-inertial-charts]], with global inertial
chart $x=(x^0,z)$ and translations $\tau_\lambda(p)=p+\lambda$ of clause (d),
and write $e_0:=(1,0,0,0)\in A$. Fix $L>0$, let
$\Lambda:=\{nLe_0:n\in\mathbb Z\}\subseteq A$ act on $A$ by the translations
$\tau_\lambda(p)=p+\lambda$ and fix $o\in A$
(the action of the discrete group $\mathbb Z$, equipped with its discrete
smooth structure, is a special case of the actions of
[[def-free-and-proper-lie-group-actions]]). Let $(M,g,N)$ be the quotient
time-oriented Lorentzian four-manifold produced by
[[lem-gr-quotient-by-isometric-free-proper-action]], with orbit map
$q:A\to M$. Then:

**(a)** $q$ is a local isometry: $g_{q(p)}(dq_pV,dq_pW)=\eta_p(V,W)$ for all
$p\in A$ and $V,W\in T_pA$; and $(M,g)$ is flat, in the sense that every
point has a chart in which the metric components are the constants
$\operatorname{diag}(-1,1,1,1)$ and the curvature tensor of the
metric-selected connection vanishes identically.

**(b)** The curve $\gamma:\mathbb R\to M$, $\gamma(s):=q(o+se_0)$, is a
nonconstant smooth future timelike curve with $\gamma(s+L)=\gamma(s)$ for
all $s$; hence $(M,g,N)$ is neither chronological nor causal, and it
possesses a closed future timelike curve.

**(c)** Every two points $p,q\in M$ (equal or distinct) satisfy $p\ll q$:
the model is totally vicious. Consequently no subset of $M$ with two
distinct points is achronal or acausal.

**(d)** $M$ admits no Cauchy set and hence no Cauchy hypersurface in the
sense of [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]].

## Facts & Assumptions

**Given:** The flat model $(A,\eta,N)$ of [[def-gr-flat-minkowski-model-and-inertial-charts]], the vector $e_0$, the number $L>0$, the translation group $\Lambda$, and the quotient of the descent lemma.

[L1] A translation $\tau_\lambda$ of $A$ preserves $\eta$: $\eta_{p+\lambda}(V,W)=\eta_p(V,W)$ for all $p,V,W$. Indeed, in the global chart $x$ the components of $\eta$ are the constants $\operatorname{diag}(-1,1,1,1)$, and the coordinate representative $u\mapsto u+x(\lambda)$ of $\tau_\lambda$ has the identity as its Jacobian, so the components of $\tau_\lambda^*\eta$ equal those of $\eta$ ([[def-gr-flat-minkowski-model-and-inertial-charts]] clauses (a), (b), (d)).

[L2] The action of $\Lambda$ on $A$ is smooth, free (no $n\ne0$ fixes a point, since $nLe_0\ne0$) and proper (for a compact $K$, the finitely many $\lambda$ with $(K+\lambda)\cap K\ne\emptyset$ are bounded by $\operatorname{diam}K$), and the field $N=\partial_0$ of the flat model is invariant under it ([[def-free-and-proper-lie-group-actions]], [[def-gr-flat-minkowski-model-and-inertial-charts]] clauses (a) and (c)).

[L3] The descent lemma applies: $M=A/\Lambda$ is a Hausdorff second-countable smooth four-manifold, $q$ is a smooth surjective local diffeomorphism and a local isometry for the descended metric, the descended field $N:=dq(\partial_0)$ is a time orientation, and smooth local sections of $q$ provide charts with $g=s^*\eta$ ([[lem-gr-quotient-by-isometric-free-proper-action]]).

[L4] Metric-selected connection in a constant-component chart. Let $(V,y)$ be a chart in which all metric components $g_{ab}$ are constant. On the open submanifold $V$ with the restricted nondegenerate metric, the coordinate connection $\nabla^{\mathrm c}$ with all Christoffel symbols zero is torsion-free and metric-compatible: its Christoffel symbols satisfy the symmetry $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$, and the compatibility identity $\partial_ag_{bc}=\Gamma^d{}_{ab}g_{dc}+\Gamma^d{}_{ac}g_{bd}$ has both sides zero ([[lem-gr-connection-conditions-in-chart-components]], [[def-christoffel-symbols-of-an-affine-connection]]). The metric-selected connection of a nondegenerate metric is the unique torsion-free metric-compatible affine connection ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] clause (b), [[def-gr-metric-selected-connection]]), so the Christoffel symbols of the metric-selected connection in $(V,y)$ all vanish. The coordinate formula for the curvature then gives $R^a{}_{bcd}=\partial_c\Gamma^a{}_{bd}-\partial_d\Gamma^a{}_{bc}+\Gamma^e{}_{bd}\Gamma^a{}_{ce}-\Gamma^e{}_{bc}\Gamma^a{}_{de}=0$ on $V$ ([[thm-gr-curvature-tensoriality-and-coordinate-formula]], [[def-gr-curvature-tensor-and-derived-tensors]]).

[L5] A straight path with displacement in $C^+=\{v:v^0>|v_s|_{\mathrm e}\}$ has constant nonzero future timelike tangent by [[lem-gr-flat-inertial-cone-criterion-and-sums]] clause (a). Its smooth coordinates are locally absolutely continuous by the bounded-derivative estimate, so it is a future timelike curve in [[def-gr-causal-curves-and-reachability]] clause (b). No global-hyperbolicity result is needed.


## Proof

**Proof technique:** direct.

1.1 (The quotient model.) By [L1] and [L2] the hypotheses of the descent lemma are satisfied, so [L3] gives the time-oriented Lorentzian four-manifold $(M,g,N)$, the local isometry identity of (a) and the local charts with constant components. In each such chart, [L4] shows that the Christoffel symbols of the metric-selected connection vanish on the chart and hence that its curvature vanishes there; since the charts of the descent lemma cover $M$, the curvature vanishes on $M$ and the model is flat in the asserted sense. This proves (a). [given, L1, L2, L3, L4]

2.1 (The closed timelike curve.) Define $\gamma(s):=q(o+se_0)$. Since $s\mapsto o+se_0$ is smooth and $q$ is smooth, $\gamma$ is smooth, and $\gamma(s+L)=q(o+(s+L)e_0)=q(o+se_0+Le_0)=q(o+se_0)=\gamma(s)$ because $Le_0\in\Lambda$. Its velocity is $\gamma'(s)=dq_{o+se_0}(\partial_0)$ by the chain rule, and by the local isometry identity $g(\gamma',\gamma')=\eta(\partial_0,\partial_0)=-1<0$ and $g(\gamma',N)=g(\gamma',dq(\partial_0))=\eta(\partial_0,\partial_0)=-1<0$; so every tangent is future timelike and the curve is a future timelike causal curve in the class of [[def-gr-causal-curves-and-reachability]]. It is nonconstant: if $\gamma(s)=\gamma(0)=q(o)$ then $se_0\in\Lambda$, so $s=nL$ for some integer $n$, and for $0<s<L$ no such integer exists. Hence $\gamma|_{[0,L]}$ is a nonconstant closed future timelike curve, and by [[def-gr-causal-conditions-and-global-hyperbolicity]] clause (a) the model is neither chronological nor causal. This proves (b). [step 1.1, given, L3]

3.1 (Total viciousness.) Let $p,q\in M$ and choose lifts $\tilde p,\tilde q\in A$ of them, so that $q(\tilde p)=p$ and $q(\tilde q)=q$; such lifts exist because $q$ is surjective. Choose $n\in\mathbb Z$ with $nL>|z(\tilde q)-z(\tilde p)|_{\mathrm e}-\bigl(x^0(\tilde q)-x^0(\tilde p)\bigr)$ in the global inertial chart $x$; possible because $L>0$ and the left side tends to $+\infty$. The displacement $(\tilde q+nLe_0)-\tilde p$ has time coordinate larger than the Euclidean norm of its spatial part, so it lies in the open future cone $C^+$; by [L5] the straight path $s\mapsto\tilde p+s\bigl((\tilde q+nLe_0)-\tilde p\bigr)$, $s\in[0,1]$, is a future timelike curve of the flat model, and composing with $q$ gives a smooth future timelike curve from $p$ to $q(\tilde q+nLe_0)=q(\tilde q)=q$, since $nLe_0\in\Lambda$. Hence $p\ll q$; taking $q=p$ exhibits the closed orbits, and taking $p\ne q$ shows that no two distinct points are achronal or acausal. This proves (c). [step 2.1, given, L5]

3.2 (No Cauchy set.) The periodic timelike curve $\gamma(s)=q(o+se_0)$ of step 2.1 is inextendible. Indeed, for integers $n\to+\infty$ the sequences of parameter values $nL$ and $nL+L/2$ both tend to $+\infty$, while their curve values are the distinct fixed points $q(o)$ and $q(o+(L/2)e_0)$; the points are distinct because $(L/2)e_0\notin\Lambda$. The same two phase sequences with $n\to-\infty$ show that $\gamma$ has no limit as $s\to-\infty$. By clause (d) of [[def-gr-causal-curves-and-reachability]], it is inextendible. Let $S\subseteq M$ be a Cauchy set. The inextendible curve $\gamma$ must meet $S$ at a parameter $s_0$. Periodicity gives $\gamma(s_0+L)=\gamma(s_0)\in S$, so its preimage of $S$ contains the two distinct parameters $s_0$ and $s_0+L$. This contradicts the defining singleton-preimage condition. Thus no Cauchy set exists, and in particular no Cauchy hypersurface exists. This proves (d). [step 2.1, given, algebra]

4.1 (Conclusion.) Part (a) is step 1.1, part (b) is step 2.1, part (c) is step 3.1, and part (d) is step 3.2; this completes the proof. [step 1.1, step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **What the example shows.** Smoothness, flatness and time orientability of a Lorentzian four-manifold do not imply causality, and a flat model need not admit a Cauchy hypersurface; the identification changes the global causal structure while leaving the local metric flat. This is the flat analogue of the Misner-space warning recorded by Carroll.
- **What it does not show.** The model is a quotient of the flat model by a discrete translation group and is not the flat model itself; the theorem asserts nothing about the physical applicability of such identifications.
