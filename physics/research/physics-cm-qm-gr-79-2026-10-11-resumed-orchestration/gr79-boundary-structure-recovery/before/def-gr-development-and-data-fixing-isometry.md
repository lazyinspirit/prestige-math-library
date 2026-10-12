---
id: def-gr-development-and-data-fixing-isometry
kind: definition
title: "Smooth developments of constrained initial data, data-fixing isometries, development embeddings and maximality"
status: draft
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-causal-curves-and-reachability, def-gr-spacelike-initial-data-and-constraints, thm-gr-constraint-equations-in-normal-frame, thm-gr-local-geometric-development, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form, def-gr-scalar-field-matter-model, def-gr-perfect-fluid-matter-model, def-gr-dust-matter-model, def-smooth-manifold]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-initial-data-and-constraints: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
  thm-gr-local-geometric-development: mathematical-premise
  lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form: mathematical-premise
  def-gr-scalar-field-matter-model: mathematical-premise
  def-gr-perfect-fluid-matter-model: mathematical-premise
  def-gr-dust-matter-model: mathematical-premise
  def-smooth-manifold: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): Definitions 2.1-2.4 (globally hyperbolic development, extension, common development) with Remark 2.5, printed pp. 11-12"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): Cauchy hypersurfaces and domains of dependence, Definitions 2.9.8 and 2.9.10 and Theorem 2.9.9, printed pp. 45-50"
      url: "https://arxiv.org/pdf/1110.6706"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision): the domain of dependence of a spacelike surface and the maximal Cauchy development, section 10.5 printed pp. 123-124 (PDF pp. 124-125)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: n/a
---

## Definition

**Data.** Let $\Sigma$ be a smooth three-manifold, so that $\Sigma$ is
Hausdorff, second countable and carries a maximal smooth atlas
([[def-smooth-manifold]]), let $h$ be a smooth Riemannian metric on $\Sigma$,
let $K$ be a smooth symmetric covariant $2$-tensor field on $\Sigma$
([[def-gr-spacelike-initial-data-and-constraints]]), let
$\Lambda\in\mathbb R$ and $\kappa>0$, and let a **matter sector** be specified
as in [[thm-gr-local-geometric-development]]: a finite list of tensor types
$r_1,\dots,r_s$, a smooth **stress-energy construction** $T(g,\psi)$, a smooth
covariant symmetric $2$-tensor field built from a Lorentzian metric $g$ and
fields $\psi=(\psi^1,\dots,\psi^s)$ of the listed types on a four-manifold
carrying $\Sigma$, and a system $E(g,\psi)=0$ such that in every chart the
combined system for $(\psi,g)$ with the metric variables of
[[lem-gr-reduced-einstein-principal-part]] is a first-order quasilinear
symmetric hyperbolic system coupled only through zeroth-order terms in the
first derivatives of the metric, and such that $\nabla^aT_{ab}=0$ is a
consequence of $E(g,\psi)=0$ on shell. Let smooth **matter initial data**
$\psi_0$ on $\Sigma$ be given so that the constraint equations
$$S_h+(\operatorname{tr}_hK)^2-|K|^2_h=2\Lambda+2\kappa\,T(n,n),\qquad \operatorname{div}_hK(Y)-\nabla^h_Y\operatorname{tr}_hK=\kappa\,T(n,Y)$$
of [[thm-gr-constraint-equations-in-normal-frame]] clause (d) hold on
$\Sigma$, with $n$ the future unit normal and $T$ determined by $(h,K,\psi_0)$.
The concrete sectors used later in this batch are the vacuum sector ($s=0$,
$T=0$), the scalar-field sector ([[def-gr-scalar-field-matter-model]]), the
strict barotropic perfect-fluid sector ([[def-gr-perfect-fluid-matter-model]])
and the geodesic-dust sector ([[def-gr-dust-matter-model]]); no other sector is
asserted here.

**(a) Development.** A **development** of this data is a tuple
$(M,g,N,j,\psi)$ consisting of:

1. a time-oriented smooth Lorentzian four-manifold $(M,g,N)$
   ([[def-gr-smooth-lorentzian-objects]]);
2. a smooth embedding $j:\Sigma\to M$ whose image $j(\Sigma)$ is a spacelike
   embedded hypersurface ([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]
   clause (a));
3. smooth sections $\psi^i$ of the tensor bundles over $M$ of the types
   $r_i$ of the sector;
4. the equations on $M$: $G_{ab}+\Lambda g_{ab}=\kappa\,T_{ab}(g,\psi)$ with
   the Einstein tensor of $g$ ([[def-gr-curvature-tensor-and-derived-tensors]])
   and $E(g,\psi)=0$;
5. the initial condition on $j(\Sigma)$: $j(\Sigma)$ is a Cauchy set of
   $(M,g,N)$ in the sense of [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]
   clause (c), that is, every inextendible causal curve of
   [[def-gr-causal-curves-and-reachability]] meets $j(\Sigma)$ in exactly one
   parameter value;
6. the induced data: $j^*(g)=h$, the second fundamental form of $j$ with
   respect to the future unit normal equals $K$ in the convention
   $K(V,W)=g(\nabla_Vn,W)$ of
   [[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]], and
   the initial data of $\psi$ on $j(\Sigma)$ transported by $j$ equal $\psi_0$.

No completeness of $(M,g)$, no inextendibility of $M$, and no claim that the
equations hold beyond $M$ are part of the definition. Whether a development is
globally hyperbolic is not part of the definition either; by clause 5 it
follows from [[thm-gr-cauchy-surface-implies-globally-hyperbolic]].

**(b) Data-fixing isometry.** A **data-fixing isometry** between developments
$(M,g,N,j,\psi)$ and $(M',g',N',j',\psi')$ of the same data is a smooth
diffeomorphism $\varphi:M\to M'$ such that

1. $\varphi^*(g')=g$;
2. $d\varphi_p(N_p)=N'_{\varphi(p)}$ for every $p\in M$, so $\varphi$ carries
   the time orientation of $N$ to that of $N'$;
3. $\varphi\circ j=j'$;
4. $\varphi^*\psi'=\psi$, that is, $\psi'{}^i(\varphi(p))=(d\varphi_p)^{\otimes}\psi^i(p)$
   for every $i$ and $p$, with the natural action on tensor fields of each
   listed type.

**(c) Development embedding.** A **development embedding** of $(M,g,N,j,\psi)$
into $(M',g',N',j',\psi')$ is a smooth map $\varphi:M\to M'$ that is a
diffeomorphism onto an open subset of $M'$ and satisfies clauses (b)1-4.
Development embeddings are isometric immersions by clause (b)1.

**(d) Maximality.** A development $(M,g,N,j,\psi)$ of the given data is
**maximal** when for every development $(M',g',N',j',\psi')$ of the same data
there exists a development embedding $\varphi:M'\to M$. A maximal development
is also called a **maximal globally hyperbolic development** of the data.

**(e) Scope.** This is a mathematical definition of the solution class used by
the Cauchy problem. The physical reading of $(M,g,N)$ and $\psi$ and the
status of $(h,K,\psi_0)$ as initial data of a model of nature are supplied by
the framework postulates of the physics library, not here; and no existence,
uniqueness or maximality assertion is made by this definition.

## Remarks

Two developments of the same data are compared only through maps that fix the
initial manifold pointwise (clause (b)3), so a data-fixing isometry is
determined by its action away from $j(\Sigma)$ only after its action on
$j(\Sigma)$ is prescribed. The direction of a development embedding is from
the smaller development to the larger one: clause (d) embeds every development
into a maximal one.
