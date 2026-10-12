---
id: thm-gr-local-geometric-uniqueness
kind: theorem
title: "Local geometric uniqueness of developments of constrained initial data via the harmonic gauge map"
status: draft
origin: session
domain: mathematics
dependency_level: 14
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-harmonic-gauge-and-reduced-equations, lem-gr-harmonic-initial-data-construction, thm-gr-reduced-einstein-local-existence, thm-gr-harmonic-constraint-propagation, thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability, thm-gr-local-symmetric-hyperbolic-well-posedness, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-c-r-and-smooth-maps-between-smooth-manifolds, def-christoffel-symbols-of-an-affine-connection, thm-smooth-inverse-function-theorem-on-manifolds]
dependency_roles:
  def-gr-harmonic-gauge-and-reduced-equations: mathematical-premise
  lem-gr-harmonic-initial-data-construction: mathematical-premise
  thm-gr-reduced-einstein-local-existence: mathematical-premise
  thm-gr-harmonic-constraint-propagation: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability: mathematical-premise
  thm-gr-local-symmetric-hyperbolic-well-posedness: mathematical-premise
  lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 5.2 (Uniqueness): geometric uniqueness up to diffeomorphism, proved by putting two developments into the same harmonic-map gauge and invoking the uniqueness theorem for the reduced symmetric hyperbolic system"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Let $\Sigma$ be a smooth three-manifold, let $h$ be a smooth Riemannian metric
on $\Sigma$, let $K$ be a smooth symmetric covariant $2$-tensor on $\Sigma$, and
let $\mathcal D$ be fixed smooth initial data for a symmetric $2$-tensor $T$ on
$\Sigma$ (its value and the value of its normal derivative in the models below).
Let $(M,g,N)$ and $(M',g',N')$ be two time-oriented smooth Lorentzian
four-manifolds with spacelike embeddings $j,j'$ of $\Sigma$ inducing the
same $(h,K)$, carrying smooth symmetric tensors $T,T'$ satisfying the field
equations
$$G_{ab}+\Lambda g_{ab}=\kappa T_{ab},\qquad G'_{ab}+\Lambda g'_{ab}=\kappa T'_{ab}$$
on neighborhoods of the images of $\Sigma$, with $\nabla^aT_{ab}=0$,
$\nabla'^aT'_{ab}=0$ there and with equal initial data $\mathcal D$ for
$T,T'$ (transported by the embeddings).

Then there are open neighborhoods $U$ of $j(\Sigma)$ and $U'$ of
$j'(\Sigma)$ and a smooth diffeomorphism $\varphi:U\to U'$ such that:

1. $\varphi(j(\sigma))=j'(\sigma)$ for every $\sigma\in\Sigma$;
2. $\varphi^*(g')=g$ and $\varphi^*(T')=T$ on $U$;
3. $\varphi$ carries the time orientation of $N$ to that of $N'$.

Thus any two solutions of the field equation arising from the same constrained
geometric data are locally isometric near the initial surface by a
data-fixing time-orientation-preserving isometry. Here an **isometry fixing the
data** means a smooth diffeomorphism satisfying (2) (the definition is given
explicitly by these equations; no separate notion of Lorentzian isometry is
presupposed).

## Facts & Assumptions

**Given:** the surface data $(h,K,\mathcal D)$, the two developments with their embeddings, metric tensors and matter tensors, all smooth, and the field equations with $\nabla T=\nabla'T'=0$.

[L1] Normal-coordinate data construction: on each side, in a normal time coordinate $s$ with spacelike slices and a background metric $\bar g=-ds^2+(h\text{-extension})$, the metric jet on $\Sigma$ forced by $(h,K)$ and the condition $H=0$ is $g_{ij}=h_{ij}$, $g_{00}=-1$, $g_{0i}=0$, $\partial_sg_{ij}=2K_{ij}$, $\partial_sg_{0i}=0$, $\partial_sg_{00}=-2\operatorname{tr}_hK$, and it makes the gauge vector vanish initially ([[lem-gr-harmonic-initial-data-construction]]).

[L2] Reduced local existence: these data determine a reduced solution near $\Sigma$ with respect to the chosen background, and a reduced solution satisfying the constraint equations automatically solves the field equation ([[thm-gr-reduced-einstein-local-existence]], [[thm-gr-harmonic-constraint-propagation]]).

[L3] Uniqueness for the reduced system: on a common manifold with a common background and a common solution class, two reduced solutions with the same Cauchy data at $\Sigma$ and the same $H=0$ initial gauge coincide on a neighborhood of $\Sigma$, and the same holds for the matter tensors when their equations have a symmetric hyperbolic reduction with Lipschitz zeroth-order coupling ([[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]], [[thm-gr-local-symmetric-hyperbolic-well-posedness]] clause (c)).

[L4] Wave-map system and its tension. For smooth maps $\psi:(U,\bar g)\to(M,g)$ the harmonic-map (tension-field) equation is a semilinear system whose principal part is the scalar wave operator $\Box_{\bar g}$, hence a semilinear symmetric hyperbolic system with positive time matrix $-g^{00}I$ in an orthogonal chart ([[def-christoffel-symbols-of-an-affine-connection]], [[thm-gr-local-symmetric-hyperbolic-well-posedness]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]). Its tension in common coordinates $(y^c)$ on source and target is
$$\tau(\psi)^c=\bar g^{ab}\Bigl(\partial_a\partial_b\psi^c-\bar\Gamma^e{}_{ab}\,\partial_e\psi^c+\bigl(\Gamma^c{}_{de}\circ\psi\bigr)\partial_a\psi^d\partial_b\psi^e\Bigr),$$
so at a point where $\psi$ is the identity map and the target coordinates equal the source coordinates, $\partial_a\psi^d=\delta_a{}^d$ and $\partial_a\partial_b\psi^c=0$, and therefore
$$\tau(\psi)^c=\bar g^{ab}\bigl(\Gamma^c{}_{ab}(\psi^*g)-\bar\Gamma^c{}_{ab}\bigr)=H^c(\psi^*g,\bar g) .$$
In particular, a solution of the tension equation that is the identity to first order on $\Sigma$ has $H(\psi^*g,\bar g)=0$ on $\Sigma$. The same computation with a second target metric $g'$ identifies the corresponding gauge vector of $\psi'{}^*g'$.

[L5] Inverse function theorem, in the form that a smooth map whose differential at a point is invertible restricts to a local diffeomorphism near that point ([[thm-smooth-inverse-function-theorem-on-manifolds]]).

## Proof

**Proof technique:** direct.

1.1 (Common normal coordinates.) Identify a neighborhood of $j(\Sigma)$ in $M$ and a neighborhood of $j'(\Sigma)$ in $M'$ with a common manifold $U_0$ by the normal exponential maps of $n$ and $n'$ along $\Sigma$ (both are diffeomorphisms onto neighborhoods of $\Sigma$ for small normal time), so that in the common normal coordinate $s$ the embeddings become the same inclusion and the data $(h,K)$ coincide; fix the background $\bar g=-ds^2+h_0$ of [L1] on $U_0$. [L1, algebra]

1.2 (The two gauge maps.) On the second side solve the tension equation $\tau(\psi_2)=0$ for a map $\psi_2:U_0\to M'$ with Cauchy data $\psi_2|_\Sigma=j'\circ j^{-1}$ on $\Sigma$ and normal derivative matching the normals, and on the first side solve $\tau(\psi_1)=0$ for $\psi_1:U_0\to M$ with the corresponding data for $g$. By [L4] the equations are semilinear symmetric hyperbolic systems, so [L4]'s well-posedness gives smooth solutions near $\Sigma$; their differentials at points of $\Sigma$ are invertible (the identity on $T\Sigma$, with the respective unit normal in the transverse direction), so by [L5] the maps are local diffeomorphisms after shrinking $U_0$. [L4, L5, construct]

2.1 (The pulled-back data coincide.) Each $\psi_j$ is the identity to first order on $\Sigma$, so $\psi_j^*g_j$ induces $h$ and second fundamental form $K$ on $\Sigma$ and $\psi_j^*T_j$ has the initial data $\mathcal D$; by the tension identity [L4] and $\tau(\psi_j)=0$ one has $H(\psi_j^*g_j,\bar g)=0$ on $\Sigma$ for $j=1,2$. Hence the two pulled-back metric germs have the same normal-coordinate jet of [L1] and the two pulled-back matter tensors have the same Cauchy data. [step 1.2, L1, L4, algebra]

3.1 (Reduced uniqueness and the isometry.) Each pulled-back pair $(\psi_j^*g_j,\psi_j^*T_j)$ satisfies the field equation near $\Sigma$, so its constraint residuals vanish; since its gauge vector vanishes on $\Sigma$ by step 2.1, [[thm-gr-harmonic-constraint-propagation]] gives $H(\psi_j^*g_j,\bar g)=0$ on a neighborhood of $\Sigma$, so both are reduced solutions with respect to $\bar g$ satisfying the same Cauchy data; by the uniqueness clause [L3] they agree on a neighborhood of $\Sigma$, and the same argument gives $\psi_1^*T=\psi_2^*T'$. Hence $\varphi:=\psi_2\circ\psi_1^{-1}$ is a smooth diffeomorphism from a neighborhood $U$ of $j(\Sigma)$ onto a neighborhood $U'$ of $j'(\Sigma)$ with $\varphi^*(g')=g$ and $\varphi^*(T')=T$; it maps the future normal $n$ to the future normal $n'$ because both gauge maps match the normals, so it preserves the time orientation, and it fixes the data in the sense of clauses 1--3. [step 2.1, L2, L3, algebra] ∎


## Remarks

- **Role.** This removes the dependence of E1's reduced solutions on the background metric and on the extension choices: two developments of the same geometric data agree up to a data-fixing isometry, which is the form in which E3 reads off Einstein-matter developments.
