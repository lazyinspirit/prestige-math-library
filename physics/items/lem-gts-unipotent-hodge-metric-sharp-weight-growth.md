---
id: lem-gts-unipotent-hodge-metric-sharp-weight-growth
kind: lemma
title: "Sharp monodromy-weight growth of the Hodge metric"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF + full AC inherited from the polarized Hodge and nilpotent linear-algebra suppliers."
deps:
  - def-gts-polarized-variation-of-hodge-structure-and-period-map
  - lem-gts-horizontal-period-map-distance-decreasing
  - lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual
dependency_roles:
  def-gts-polarized-variation-of-hodge-structure-and-period-map: mathematical-premise
  lem-gts-horizontal-period-map-distance-decreasing: mathematical-premise
  lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Claude Sabbah and Christian Schnell, Degenerating complex variations of Hodge structure in dimension one, arXiv:2206.08166v1"
      url: "https://arxiv.org/pdf/2206.08166v1"
      locator: 'Sections 132–142, especially §§137, 139–142 and Theorem 141 / estimate (142.1): invariant-vector boundedness, flat Hom comparison, the $\mathfrak{sl}_2$ model and the rescaled Hodge-form estimate.'
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let a polarized real variation of pure Hodge structure on the punctured disk have unipotent marking action $T=\exp N$, and write $t=\exp(2\pi iz)$, $z=x+iy$. A real variation here means a flat real vector bundle with holomorphic Hodge filtration, real bilinear polarization and Griffiths transversality, without requiring an integral lattice. Let $W(N)$ be the zero-centred monodromy weight filtration. A **grading** $H$ of $W(N)$ is a real semisimple endomorphism of the flat real vector space with integral eigenvalues and decomposition $V_{\mathbb R}=\bigoplus_l E_l(H)$ satisfying $W_j(N)=\bigoplus_{l\le j}E_l(H)$. Assume $[H,N]=-2N$, and choose a fixed positive metric making its complexified eigenspaces orthogonal. On a bounded interval of $x$ and for $y$ sufficiently large, there exist $c,C>0$ such that, for all flat vectors $v$,

$c \sum _{l} y^{l}||v_{l}||^{2} ≤ h_{x+iy}(v,v) ≤ C \sum _{l} y^{l}||v_{l}||^{2}$,

where $v=\sum _{l} v_{l}$ is the H eigendecomposition. For every nonzero flat vector $v, v∈W_{l}(N)\setminus W_{l−1}(N)$ if and only if its squared Hodge norm is bounded above and below by positive multiples of $y^{l}$. No integrality or rationality of N is needed.

## Statement references

[[lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual]]

## Facts & Assumptions

**Given:** The analytic polarized real variation, N,H and fixed positive metric in the Statement.

[F1] The horizontal curvature argument gives ||A||≤C/y for $θ=A$ dz ([[lem-gts-horizontal-period-map-distance-decreasing]]). Its finite connection/trace/max-principle proof requires no lattice, so applies to the real data specified here.

[F2] The canonical nilpotent weight filtration has a finite primitive string decomposition ([[lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual]]). A homogeneous grading H with N-degree −2 makes that decomposition H-homogeneous.

## Proof

**Proof technique:** direct.

1.1 On the universal cover write the Hodge splitting as $E^p=F^p\cap\overline{F}^{k-p}$ and the flat connection as $\nabla=D+A\,dz+A^\dagger d\bar z$, where $D$ preserves the positive Hodge metric $h$ and $A$ lowers Hodge degree by one. These are the actual-variation identities proved in the horizontal-period-map supplier. If $v$ is flat, metric compatibility and $\nabla v=0$ give $\partial_z h(v,v)=-2h(Av,v)$ and $\partial_z\partial_{\bar z}h(v,v)=2(\|Av\|^2+\|A^\dagger v\|^2)$. [F1, F2, given, algebra]

2.1 For $v\ne0$, set $u=\log h(v,v)$. The two derivative identities and Cauchy–Schwarz show $\partial_z\partial_{\bar z}u\ge0$ and $|du|\le C\|A\|$. If $v$ is monodromy invariant, $u$ is 1-periodic in $x$. The horizontal bound $\|A\|\le C/y$ therefore gives $|du|\le C'/y$. The period average $u_0(y)=\int_0^1u(x,y)\,dx$ satisfies $u_0''\ge0$ and $|u_0'|\le C'/y$; hence $u_0'$ increases to $0$, is nonpositive, and $u_0$ is bounded above. The $x$-derivative bound then gives $|u-u_0|\le C'/y$ on a period. Thus every invariant flat vector has uniformly bounded Hodge norm near the puncture. [F1, F2, step 1.1, given, algebra]

3.1 If two polarized complex variations have isomorphic flat bundles, their Hodge metrics are uniformly mutually bounded near the puncture: apply step 2.1 to the invariant flat isomorphism in the Hom variation and to its inverse. The Hom polarization gives the Hilbert–Schmidt metric, which dominates the operator norm, so these two bounds compare the metrics on every vector. [step 2.1, given, algebra]

4.1 We construct the auxiliary metric used in step 3.1 explicitly. A complex polarized variation here means a flat complex bundle with a smooth grading $E^p$, a flat nondegenerate Hermitian form $B$, holomorphic filtration $F^p=\bigoplus_{a\ge p}E^a$, transverse connection, and positive metric $h|_{E^p}=(-1)^{k-p}B|_{E^p}$ for a fixed integer $k$. This auxiliary category need not have a real structure or a lattice. The calculation in [F1] applies to it: differentiating $B(E^p,E^{p-1})=0$ gives the same adjacent-adjoint identity, and flatness gives the same $D_{\bar z}A=0$ and $F_D=-[A,A^\dagger]$. Thus the derivative identities in step 1.1 and the invariant-vector argument in step 2.1 hold in this category. The complexification of the original real variation is in it with $B(u,v)=i^kQ(u,\bar v)$. Hom gradings are by degree difference; their flat trace Hermitian form has the corresponding alternating signs and positive Hilbert–Schmidt metric. Their Higgs operator acts by $f\mapsto A_2f-fA_1$, of norm at most $\|A_1\|+\|A_2\|$. Consequently step 3.1 applies whenever both original and auxiliary Higgs norms are $O(1/y)$, without requiring their flat identification to preserve either filtration or polarization. [F1, step 1.1, step 2.1, step 3.1, algebra]

5.1 On a complex two-dimensional space with basis $a,b$, let $Ya=b$, $Yb=0$, $Ha=a$, $Hb=-b$, and let $B$ have matrix $\begin{pmatrix}0&1\\1&0\end{pmatrix}$. Put $F^1=\mathbb Ca$, $F^0=\mathbb C^2$ and $F(z)=e^{-izY}F$. At $z=iy$ its two $B$-orthogonal lines are $\mathbb C(a+yb)$ and $\mathbb C(a-yb)$, with $B$ respectively positive and negative; this gives a polarized complex variation of weight one. Its positive metric in the basis $a,b$ is $\operatorname{diag}(y,y^{-1})$. Real translation acts by $e^{-ixY}$, a $B$-isometry, since $Y$ is $B$-self-adjoint. Holomorphicity and transversality follow by differentiating the displayed line, and its logarithmic monodromy is $-iY$. Differentiating the two normalized orthogonal lines gives Higgs norm a fixed multiple of $1/y$. [step 4.1, construct, algebra]

6.1 On $S_m=\operatorname{Sym}^m\mathbb C^2$, the monomial basis $a^{m-j}b^j$ is orthogonal at $iy$ and has squared norms $c_{mj}y^{m-2j}$, with fixed $c_{mj}>0$ from the symmetrized tensor metric. Its Higgs operator is the sum of the $m$ tensor Higgs operators, so is $O(1/y)$. Its Hodge indices may be shifted by tensoring a constant one-dimensional complex Hodge structure; choosing that line's Hermitian sign gives any common total weight $k$ without changing the positive metric. This changes neither the connection nor its Higgs bound. A homogeneous primitive-string decomposition for the supplied $N,H$ identifies each string with $S_m$: scale the monomial vectors successively so that $-iY$ becomes exactly $N$. Therefore their finite direct sum is a complex polarized auxiliary variation on the same flat bundle, with metric $\sum_l y^l\|v_l\|_*^2$ at $iy$, for a fixed positive $H$-orthogonal norm $\|\cdot\|_*$. [F2, step 5.1, construct, algebra]

7.1 Apply steps 2.1–4.1 to the invariant flat identification of this auxiliary bundle with the original bundle and to its inverse. Both Higgs bounds have been verified, so their two Hodge metrics are uniformly equivalent. On a bounded interval of $x$, the auxiliary metric is obtained by the flat factor $e^{-xN}$; conjugation by $y^{H/2}$ gives $y^{H/2}e^{-xN}y^{-H/2}=e^{-xN/y}$, uniformly bounded with bounded inverse for $y\ge1$. All fixed positive $H$-orthogonal norms are equivalent with constants independent of $y$. This proves the two-sided estimate uniformly in the stated strip, for all vectors simultaneously. [F1, F2, step 3.1, step 4.1, step 6.1, algebra]

8.1 In the positive sum $\sum_l y^l\|v_l\|^2$ for $v\ne0$, its largest nonzero index $l$ determines its order above and below. The grading identity $W_l=\bigoplus_{a\le l}E_a(H)$ identifies this index with $v\in W_l\setminus W_{l-1}$. Thus the asserted equivalence follows. The construction used finite strings, real polarized data and an auxiliary complex Hermitian variation, with no integrality assumption on $N$. [F2, step 7.1, algebra] ∎

## Source-reading limits

Sabbah–Schnell §§132–142 (PDF pp. 60–66) were read, including the proofs of the invariant-vector and Hom comparison statements and the model argument. The model, comparison and full-space norm estimates used here are reconstructed in steps 1.1–8.1; the cited theorem is not an external proof premise. No reading of the whole preprint is claimed.
