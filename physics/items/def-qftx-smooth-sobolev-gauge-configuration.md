---
id: def-qftx-smooth-sobolev-gauge-configuration
kind: definition
title: Smooth and Sobolev configuration and reduced gauge spaces
status: "published"
origin: pipeline
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF plus the full Axiom of Choice. The Sobolev and quotient constructions below inherit this strength through the listed suppliers."
deps:
  - def-qftx-nonabelian-gauge-data
  - def-qftx-principal-connection-form
  - def-qftx-associated-covariant-derivative
  - def-qftx-lie-algebra-valued-form-bracket
  - def-gauge-group-of-a-smooth-principal-bundle
  - def-principal-connection-and-vertical-curvature
  - def-axiom-of-choice
  - thm-higher-order-sobolev-embedding
  - def-equivalence-relation
  - prop-gauge-transformations-act-on-principal-connections
  - lem-formal-adjoints-of-differential-operators-exist-and-are-unique
  - ex-unitary-and-special-unitary-lie-groups
justified_by:
  - lem-qftx-gauge-sobolev-calculus
dependency_roles:
  def-qftx-nonabelian-gauge-data: mathematical-premise
  def-qftx-principal-connection-form: mathematical-premise
  def-qftx-associated-covariant-derivative: mathematical-premise
  def-qftx-lie-algebra-valued-form-bracket: mathematical-premise
  def-gauge-group-of-a-smooth-principal-bundle: mathematical-premise
  def-principal-connection-and-vertical-curvature: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-higher-order-sobolev-embedding: mathematical-premise
  def-equivalence-relation: mathematical-premise
  prop-gauge-transformations-act-on-principal-connections: mathematical-premise
  lem-formal-adjoints-of-differential-operators-exist-and-are-unique: mathematical-premise
  ex-unitary-and-special-unitary-lie-groups: mathematical-premise
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Thomas Walpuski, Differential Geometry III: Gauge Theory (full lecture notes)"
      url: "https://walpuski.com/Teaching/WS2324/DifferentialGeometry3/GaugeTheoryS.pdf"
      locator: "§§5.13.1–5.13.2, PDF pp. 113–115: Sobolev bundles, connections, gauge transformations, and the right-action formula."
    - title: "Brian Williams, Geometry, Spin, and Seiberg-Witten Theory (full expository manuscript)"
      url: "https://ufdcimages.uflib.ufl.edu/AA/00/05/72/86/00001/brianwilliams-SW.pdf"
      locator: "§§4.2–4.4, PDF pp. 25–36: Sobolev configuration, gauge action, properness interface, and local slice setup; abelian scope is recorded in the coverage disposition."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Assume the Axiom of Choice. Fix an integer $N\ge2$. Write $\operatorname{Mat}_N(\mathbb C)$ for the complex $N\times N$ matrices, $U^*=\overline U^{\mathsf T}$ for conjugate transpose, and $I_N$ for the identity matrix. Define the special unitary matrix group

$$SU(N):=\{U\in\operatorname{Mat}_N(\mathbb C):U^*U=I_N,\ \det U=1\},$$

with matrix multiplication and the following real embedded smooth structure. Identify $\operatorname{Mat}_N(\mathbb C)$ with $\mathbb R^{2N^2}$ by the real and imaginary matrix entries, and let $\operatorname{Herm}_N=\{H:H^*=H\}$ have its induced real vector-space structure. Equip $U(N)=\{U:U^*U=I_N\}$ with the embedded regular-level-set structure at $I_N$ of the smooth map $F:\operatorname{GL}_N(\mathbb C)\to\operatorname{Herm}_N$, $F(U)=U^*U$, where $\operatorname{GL}_N(\mathbb C)=\{U:\det U\ne0\}$. Equip $S^1=\{z\in\mathbb C:|z|=1\}$ with its embedded circle structure and $SU(N)$ with the embedded regular-level-set structure at $1$ of $\det:U(N)\to S^1$. These are the embedded structures in the stated real matrix space. Its real Lie algebra is $\mathfrak{su}(N):=\{X\in\operatorname{Mat}_N(\mathbb C):X^*=-X,\ \operatorname{tr}X=0\}$ with bracket $[X,Y]=XY-YX$. The standard unitary representation is the map $\rho:SU(N)\to U(\mathbb C^N,h)$ defined by $\rho(U)v=Uv$, where $h(v,w)=\sum_{j=1}^N\overline{v_j}w_j$ and $U(\mathbb C^N,h)$ consists of the complex-linear maps preserving $h$. Conjugation is $\operatorname{Ad}_U z=UzU^{-1}$ for either $z\in SU(N)$ or $z\in\mathfrak{su}(N)$.

Let $M$ be a compact, connected, oriented, boundaryless smooth manifold of dimension $d\in\{3,4\}$ with a smooth Riemannian metric, and fix a smooth right principal $SU(N)$-bundle $\pi:P\to M$, a smooth connection $A_0$, and a point $p_m\in P$ over $x_m\in M$. Use the representation $\rho$ and the invariant positive inner product $\langle X,Y\rangle=-\operatorname{tr}(XY)$ on $\mathfrak{su}(N)$. Define the adjoint vector bundle $\operatorname{ad}P=P\times_{\operatorname{Ad}}\mathfrak{su}(N)$ and the adjoint group bundle $\operatorname{Ad}P=P\times_{\operatorname{Ad}}SU(N)$ with associated-bundle relation $[pg,z]=[p,\operatorname{Ad}_g z]$.

Choose one finite smooth bundle atlas of local sections $(U_\alpha,s_\alpha)$ whose coordinate images are bounded balls, and a subordinate partition of unity with each cutoff compactly supported in its chart. On an overlap write $s_\beta=s_\alpha g_{\alpha\beta}$ for its smooth transition map $g_{\alpha\beta}:U_\alpha\cap U_\beta\to SU(N)$. Local representatives of an adjoint section $\xi$ and an adjoint group section $u$ are defined by $\xi(x)=[s_\alpha(x),\xi_\alpha(x)]$ and $u(x)=[s_\alpha(x),u_\alpha(x)]$. They obey the transition rules $\xi_\beta=\operatorname{Ad}_{g_{\alpha\beta}^{-1}}\xi_\alpha$ and $u_\beta=g_{\alpha\beta}^{-1}u_\alpha g_{\alpha\beta}$.

For each integer $k>d/2+1$, define $H^k(T^*M\otimes\operatorname{ad}P)$ and $H^{k+1}(\operatorname{ad}P)$ by completion of smooth sections in the resulting finite-atlas norms, using weak derivatives of their local coefficients. Define $H^{k+1}(\operatorname{Ad}P)$ as the corresponding completion of smooth group-bundle sections, represented locally by matrix-valued $H^{k+1}$ maps satisfying the stated transition rule. After localization by the partition of unity and extension by zero to the coordinate balls, the higher-order Sobolev embedding gives unique continuous representatives (indeed $C^1$); the group-valued representatives take values in the closed subgroup $SU(N)$ everywhere. This embedding is the point-evaluation convention used below. If $p\in P$ lies over $x$ and $p=s_\alpha(x)h$, define $u(p):=h^{-1}u_\alpha(x)h$. The transition rule makes this independent of the chosen local section, and $u(x)=[p,u(p)]$. In particular, if $p_m=s_\alpha(x_m)h_{\alpha m}$, then $u(p_m)=h_{\alpha m}^{-1}u_\alpha(x_m)h_{\alpha m}$ is the value in the $p_m$-trivialization. The map $\widetilde u:P\to P$ defined by $\widetilde u(p):=p\,u(p)$ is a $C^1$ bundle automorphism over $\operatorname{id}_M$, with inverse $\widetilde{u^{-1}}$; it is smooth when $u$ is smooth. Conversely, if $\Phi:P\to P$ is a $C^1$ bundle automorphism over $\operatorname{id}_M$ commuting with the right $SU(N)$ action, write $\Phi(p)=p\,g_p$ for the unique $g_p\in SU(N)$. Equivariance gives $g_{ph}=h^{-1}g_ph$, so $u(x):=[p,g_p]$ for $p\in P_x$ is a well-defined $C^1$ adjoint-group section. These assignments are inverse; in the smooth case they identify smooth sections with the smooth gauge group defined by principal-bundle automorphisms.

Define the affine configuration space $\mathcal A_k:=A_0+H^k(T^*M\otimes\operatorname{ad}P)$ and the set $\mathcal G_{k+1}:=H^{k+1}(\operatorname{Ad}P)$ of Sobolev gauge sections. Its based subset is $\mathcal G_{k+1,m}:=\{u\in\mathcal G_{k+1}:u(p_m)=e\}$, equivalently the sections whose associated bundle automorphism fixes $p_m$. Let $Z_N=\{zI_N:z^N=1\}$ be the center of $SU(N)$, viewed as constant gauge sections. Indeed, if $Z=(z_{ij})$ is central and $D=\operatorname{diag}(t_1,\ldots,t_N)\in SU(N)$, then $(t_j-t_i)z_{ij}=0$. For each $i\ne j$ one can choose such a diagonal matrix with $t_i\ne t_j$, so $Z$ is diagonal. Commuting with the determinant-one unitary rotation whose block on the $(i,j)$ coordinates is $\begin{pmatrix}\cos t&\sin t\\-\sin t&\cos t\end{pmatrix}$ for $t\notin\pi\mathbb Z$ forces the $i$th and $j$th diagonal entries equal. Hence $Z=zI_N$; determinant one gives $z^N=1$, and conversely every such scalar is central. Write $\bar{\mathcal G}_{k+1}$ for the set of $Z_N$-cosets with quotient topology and multiplication $[u][v]=[uv]$, well-defined since $Z_N$ is central.

Specify its Hilbert Lie structure as follows, using the Hilbert Lie structure on $\mathcal G_{k+1}$ established by the calculus lemma. Let $q:\mathcal G_{k+1}\to\bar{\mathcal G}_{k+1}$ be the coset projection. Since $Z_N$ is finite and the group is Hausdorff, choose an identity chart neighborhood $V$ with $V^{-1}V\cap Z_N=\{e\}$, by continuity of $(v,w)\mapsto v^{-1}w$ at $(e,e)$. The map $q$ is open because $q^{-1}(q(O))=\bigcup_{z\in Z_N}Oz$ for every open $O$. Consequently $q|_{uV}:uV\to q(uV)$ is a homeomorphism for each $u$, and transport the translated Hilbert charts through these maps. On an overlap, two lifts differ locally by multiplication by a fixed element of the discrete group $Z_N$, so chart changes are smooth. Distinct cosets have disjoint open neighborhoods: if $v^{-1}w\notin Z_N$, continuity and finiteness give neighborhoods $O_v,O_w$ with $O_v^{-1}O_w\cap Z_N=\varnothing$, and their images under $q$ are disjoint. Thus the quotient is Hausdorff. Its countable base descends from that of the Sobolev section space by the open map $q$. Multiplication and inversion are smooth in these charts because they lift locally to the corresponding smooth operations on $\mathcal G_{k+1}$. This defines a Hilbert Lie group with the stated quotient topology, and $q$ is a local diffeomorphism.

Let $\mathcal A_\infty:=A_0+\Omega^1(M,\operatorname{ad}P)$ and let $\mathcal G_\infty:=\Gamma^\infty(\operatorname{Ad}P)$ be the group of smooth adjoint-group sections under pointwise multiplication, identified above with the smooth gauge group. Give it the $C^\infty$ section topology generated by all finite-atlas derivative seminorms. Define $\bar{\mathcal G}_\infty:=\mathcal G_\infty/Z_N$. For a connection form $\omega$, write $A_\alpha=s_\alpha^*\omega$ for its local form. The right-principal convention gives $A_\beta=g_{\alpha\beta}^{-1}A_\alpha g_{\alpha\beta}+g_{\alpha\beta}^{-1}dg_{\alpha\beta}$. The right gauge action is locally $A_\alpha^u:=u_\alpha^{-1}A_\alpha u_\alpha+u_\alpha^{-1}du_\alpha$. For smooth $u$, this is the pullback by $\widetilde u$: for $X\in T_xM$, $d(\widetilde u\circ s_\alpha)_xX=d(R_{u_\alpha(x)})_{s_\alpha(x)}\,ds_\alpha(X)+(u_\alpha^{-1}du_\alpha(X))_P(s_\alpha(x)u_\alpha(x))$, and the connection equivariance and vertical reproduction identities give the displayed formula. For Sobolev $u$, the calculus lemma verifies that the local forms patch under the stated transition rules and define a smooth action on the Sobolev spaces above. For an adjoint section $\xi$, set $d_A\xi:=d\xi+[A,\xi]$ using the degree-one Lie-algebra-valued-form bracket. In local coordinates and an orthonormal adjoint frame, define the formal adjoint on an adjoint-valued one-form $a$ by $(d_A^*a)=-g^{ij}(\nabla_i^{\mathrm{LC}}a_j+[A_i,a_j])$, where $\nabla^{\mathrm{LC}}$ differentiates the covector index. This is the $L^2$ adjoint for the Riemannian volume and stated fiber metric; its local coefficient formula defines a distribution at Sobolev regularity.

For $A\in\mathcal A_k$, parallel transport of its $C^1$ connection form around piecewise smooth loops based at $p_m$ defines a subgroup $\operatorname{Hol}_{p_m}(A)\subseteq SU(N)$. Call $A$ irreducible when this subgroup leaves no nonzero proper complex subspace of $\mathbb C^N$ invariant; changing the chosen frame conjugates the subgroup and leaves this condition unchanged. Write $\mathcal A_k^*$ and $\mathcal A_\infty^*$ for the irreducible loci. Once the calculus lemma verifies the group action, define orbit equivalence by $A\sim B$ exactly when $B=A^u$ for some gauge section $u$; all resulting quotients carry the quotient topology, whose open sets are those with open inverse image under the orbit projection.
## Definition references

[[ex-unitary-and-special-unitary-lie-groups|Embedded unitary and special-unitary matrix groups and their Lie algebras]]

[Walpuski, Sobolev connections and gauge transformations](https://walpuski.com/Teaching/WS2324/DifferentialGeometry3/GaugeTheoryS.pdf)

[Williams, the Sobolev gauge action](https://ufdcimages.uflib.ufl.edu/AA/00/05/72/86/00001/brianwilliams-SW.pdf)

[[def-qftx-nonabelian-gauge-data|Specified compact gauge group, bundle, and representation data]]

[[def-qftx-principal-connection-form|Right-action principal connection convention]]

[[def-qftx-associated-covariant-derivative|Associated covariant derivative]]

[[def-qftx-lie-algebra-valued-form-bracket|Lie-algebra-valued form bracket convention]]

[[def-gauge-group-of-a-smooth-principal-bundle|Gauge transformations as bundle automorphisms]]

[[def-principal-connection-and-vertical-curvature|Smooth principal connection]]

[[def-equivalence-relation|Orbit equivalence relation and quotient set]]

[[prop-gauge-transformations-act-on-principal-connections|Gauge action preserves principal connections]]

[[lem-formal-adjoints-of-differential-operators-exist-and-are-unique|Formal adjoint convention]]

[[def-axiom-of-choice|Full Axiom of Choice]]

[[thm-higher-order-sobolev-embedding|Continuous representatives and point evaluation for the Sobolev sections]]

[[lem-qftx-gauge-sobolev-calculus|Well-defined Sobolev gauge group and action]]

[SU(N) gauge-data and Lie algebra]([[def-qftx-nonabelian-gauge-data]])

[Principal connection form convention]([[def-qftx-principal-connection-form]])

[Associated covariant derivative]([[def-qftx-associated-covariant-derivative]])

[Lie-algebra-valued form bracket]([[def-qftx-lie-algebra-valued-form-bracket]])

[Smooth principal-bundle gauge group]([[def-gauge-group-of-a-smooth-principal-bundle]])

[Principal connection and curvature]([[def-principal-connection-and-vertical-curvature]])

[Axiom of Choice]([[def-axiom-of-choice]])

[Equivalence relation]([[def-equivalence-relation]])

[Gauge transformations on principal connections]([[prop-gauge-transformations-act-on-principal-connections]])

[Formal adjoints of differential operators]([[lem-formal-adjoints-of-differential-operators-exist-and-are-unique]])
