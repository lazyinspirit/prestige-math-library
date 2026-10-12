---
id: def-gr-development-and-data-fixing-isometry
kind: definition
title: "Smooth developments of constrained initial data, data-fixing isometries, development embeddings and maximality"
status: draft
origin: session
domain: mathematics
dependency_level: 24
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-dependent-choice, def-countable-choice, thm-gr-dust-local-evolution, thm-gr-barotropic-fluid-local-evolution, thm-gr-scalar-field-local-evolution, def-gr-smooth-lorentzian-objects, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-causal-curves-and-reachability, def-gr-spacelike-initial-data-and-constraints, thm-gr-constraint-equations-in-normal-frame, thm-gr-local-geometric-development, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form, def-gr-scalar-field-matter-model, def-gr-perfect-fluid-matter-model, def-gr-dust-matter-model, def-smooth-manifold]
dependency_roles:
  def-dependent-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-gr-dust-local-evolution: mathematical-premise
  thm-gr-barotropic-fluid-local-evolution: mathematical-premise
  thm-gr-scalar-field-local-evolution: mathematical-premise
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

**Data.** Fix $\kappa>0$, $\Lambda\in\mathbb R$, a smooth three-manifold $\Sigma$ without boundary, a smooth Riemannian metric $h$ and smooth symmetric covariant $2$-tensor $K$. The normal convention is $K(V,W)=g(\nabla_Vn,W)$ for the future unit normal. Specify one fixed covariant matter model, consisting of a finite list of smooth tensor fields $\psi$, fixed equations $\mathcal E(g,\psi)=0$ and a fixed stress expression $\mathcal T(g,\psi)$, with pullback by local diffeomorphisms commuting with the equations and stress. Fix its complete smooth Cauchy data $d$: these determine all independent matter initial variables, not only the normal stress projections. Initial tensors with normal directions are specified on the abstract bundle $\mathcal V=\mathbb R\nu\oplus T\Sigma$ with metric $g_0(a\nu+X,b\nu+Y)=-ab+h(X,Y)$. In a development, identify $a\nu+X$ with $an+dj(X)$.

An admissible fixed coupled model is one satisfying the complete initialization, hyperbolic reduction, recovery and comparison hypotheses of [[thm-gr-local-geometric-development]], or a specified independent local existence and uniqueness reduction such as the dust branch below. The same fixed model, complete data and admissibility conditions are used in every comparison and at every restart. Admissibility includes the applicability of its supplied complete-data local existence and geometric uniqueness theorem to the data realized on each spacelike restart surface of the compared solutions. This must be checked for the actual model and surface; it is not inferred from stress conservation. This class includes the following four concrete branches; they do not exhaust it.

1. **Vacuum:** no matter fields, $\mathcal T=0$, and empty matter data.
2. **Scalar field:** fix one smooth potential $V$ and one normalization $K_\phi>0$. The field is $\varphi$, its equation is $\Box_g\varphi-V'(\varphi)=0$, its stress is the expression in [[def-gr-scalar-field-matter-model]] clause (c), and its complete data are $(\varphi_0,\pi_0)$ with $\pi_0=n(\varphi)|_\Sigma$. The fixed potential has no sign restriction ([[thm-gr-scalar-field-local-evolution]]).
3. **Strict barotropic fluid:** fix a smooth EOS $P:J\to\mathbb R$ on an open interval with $\epsilon+P(\epsilon)>0$ and $0<P'(\epsilon)<1$. The fields are $\epsilon\in J$ and future unit velocity $u$, the stress is $(\epsilon+P(\epsilon))u^\flat\otimes u^\flat+P(\epsilon)g$, and the equations are the continuity and Euler equations of [[def-gr-perfect-fluid-matter-model]] clause (c), with this fixed EOS. Complete data are $(\epsilon_0,v_0)$, where $\epsilon_0:\Sigma\to J$ and $h(v_0,v_0)<1$, equivalently the bundle velocity $U_0=(1-h(v_0,v_0))^{-1/2}(\nu+v_0)$. No small-tilt restriction is imposed ([[thm-gr-barotropic-fluid-local-evolution]]).
4. **Geodesic nonnegative dust:** the fields are an energy-coefficient density $\varepsilon\ge0$ and a smooth future unit timelike field $u$, including on $\{\varepsilon=0\}$. Set $\mathcal T=\varepsilon u^\flat\otimes u^\flat$ and require both $\nabla_u u=0$ and $u(\varepsilon)+\varepsilon\nabla_a u^a=0$ everywhere. Complete data are $(\varepsilon_0,U_0)$, with $\varepsilon_0\ge0$ and prescribed smooth future unit bundle velocity $U_0$, equivalently arbitrary smooth subluminal tilt. On positive-density regions this is [[def-gr-dust-matter-model]] with its density parameter equal to $\varepsilon$. Through empty regions the geodesic velocity is separately prescribed and matched; conservation of stress alone is not substituted for this full system. For a fixed $c>0$, the mass-normalized theorem [[thm-gr-dust-local-evolution]] applies with $\rho_0=\varepsilon_0/c^2$ and reconstructs $\varepsilon=c^2\rho$.

Require the constraints for the initial stress $T_0$ computed from this complete data on $\mathcal V$:
$$S_h+(\operatorname{tr}_hK)^2-|K|_h^2=2\Lambda+2\kappa T_0(\nu,\nu),\qquad \operatorname{div}_hK-d\operatorname{tr}_hK=\kappa T_0(\nu,\cdot).$$
These use the convention of [[thm-gr-constraint-equations-in-normal-frame]]. Equality of data includes equality of the model, constants, potential or EOS, and every component of $d$.

The local Cauchy-development and uniqueness suppliers for vacuum, scalar and strict fluid are the fixed-model theorem [[thm-gr-local-geometric-development]] and the two concrete branch theorems above. Its harmonic route requires the same fixed extraction/reconstruction rules and smooth symmetric-hyperbolic coefficient family for every compared physical solution, a positive time matrix on an admissible open state set, complete compatible initialization from $(h,K,d)$, propagation of auxiliary compatibility with recovery of the full matter equations on the reduced solution, and stress conservation on that reduced solution before Einstein recovery. These are the three explicit hypotheses of that theorem; conservation alone does not supply a Cauchy evolution law. Dust uses its independent common-flow/parallel-frame initialization, hyperbolic reduction, subsidiary recovery and uniqueness of [[thm-gr-dust-local-evolution]], rather than being asserted to satisfy the harmonic metric-first-derivative matter contract. Countable Choice and Dependent Choice are carried wherever these local theorems are invoked. Every additional fixed coupled model must supply the same complete-data local existence, admissibility, recovery and uniqueness obligations before it is used. This definition makes no local or global existence assertion.

**(a) Development.** A **development** of this data is a tuple
$(M,g,N,j,\psi)$ consisting of:

1. a time-oriented smooth Lorentzian four-manifold $(M,g,N)$
   ([[def-gr-smooth-lorentzian-objects]]);
2. a smooth embedding $j:\Sigma\to M$ whose image $j(\Sigma)$ is a spacelike
   embedded hypersurface ([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]
   clause (a));
3. the smooth tensor fields $\psi$ of the fixed model over $M$;
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
   the initial data of $\psi$ on $j(\Sigma)$ transported by $j$ equal $d$.

No completeness of $(M,g)$, no inextendibility of $M$, and no claim that the
equations hold beyond $M$ are part of the definition. Whether a development is
globally hyperbolic is not part of the definition either; by clause 5 it
follows from [[thm-gr-cauchy-surface-implies-globally-hyperbolic]].

**(b) Data-fixing isometry.** A **data-fixing isometry** between developments
$(M,g,N,j,\psi)$ and $(M',g',N',j',\psi')$ of the same data is a smooth
diffeomorphism $\varphi:M\to M'$ such that

1. $\varphi^*(g')=g$;
2. $g'_{\varphi(p)}(d\varphi_pN_p,N'_{\varphi(p)})<0$ for every $p\in M$: the isometry carries the future cone of $N$ onto that of $N'$;
3. $\varphi\circ j=j'$;
4. $\varphi^*\psi'=\psi$, with the natural pullback action on every listed tensor type (and the inverse differential on contravariant slots). Equality includes every listed field, including the prescribed dust velocity at zero density.

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
status of $(h,K,d)$ as initial data of a model of nature are supplied by
the framework postulates of the physics library, not here; and no existence,
uniqueness or maximality assertion is made by this definition.

## Remarks

Two developments of the same data are compared only through maps that fix the
initial manifold pointwise (clause (b)3), so a data-fixing isometry is
determined by its action away from $j(\Sigma)$ only after its action on
$j(\Sigma)$ is prescribed. The direction of a development embedding is from
the smaller development to the larger one: clause (d) embeds every development
into a maximal one.

The field $N$ represents the future cone and is not an additional dynamical field. Replacing it by any smooth timelike field in the same future cone does not change which maps are data-fixing. An isometry preserving that cone carries the future unit normal of the initial surface to the future unit normal of its image; no equality between the arbitrary representing fields is needed.
