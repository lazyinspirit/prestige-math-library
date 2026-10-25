---
id: def-aqft-two-group-symmetry-realization
kind: definition
title: Finite 2-group symmetry realization and background coupling
status: "published"
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - def-aqft-p-form-global-symmetry
  - def-aqft-topological-defect
  - def-aqft-two-group-background
  - thm-aqft-two-group-background-consistency
  - def-aqft-finite-background-two-groupoid
  - thm-aqft-finite-background-two-groupoid-coherence
dependency_roles:
  def-aqft-p-form-global-symmetry: formulation-prerequisite
  def-aqft-topological-defect: formulation-prerequisite
  def-aqft-two-group-background: formulation-prerequisite
  thm-aqft-two-group-background-consistency: formulation-prerequisite
  def-aqft-finite-background-two-groupoid: formulation-prerequisite
  thm-aqft-finite-background-two-groupoid-coherence: formulation-prerequisite
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: Finite-regulator Euclidean models on closed oriented triangulated d-manifolds with finite discrete 2-group backgrounds. This is a model-data interface; it asserts no QFT realization, anomaly absence, continuum limit, or empirical result.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: "Christopher J. Schommer-Pries, Tori Detect Invertibility of Topological Field Theories"
      url: https://msp.org/gt/2018/22-5/gt-v22-n5-p05-s.pdf
      locator: "§1.1, printed p. 2714, lift diagram and footnotes 5–6; chosen classifying map and tangential-structure lift."
    - title: "Francesco Benini, Clay Córdova, and Po-Shen Hsin, On 2-Group Global Symmetries and Their Anomalies"
      url: https://arxiv.org/pdf/1803.09336
      locator: "§2.3, printed pp. 18–20 / PDF pp. 19–21, equations (2.14)–(2.23); §§1.2–1.3 on backgrounds and the Postnikov/anomaly distinction"
    - title: "Sakura Schäfer-Nameki, ICTP Lectures on (Non-)Invertible Generalized Symmetries"
      url: https://arxiv.org/pdf/2305.18296v2
      locator: "§2.5, printed pp. 23–25, and §2.8.1, printed pp. 28–32"
---

## Definition

Fix an integer $d\geq2$, a closed compact oriented smooth $d$-manifold $M$, and a finite ordered triangulation $K$ of $M$, meaning a finite vertex-ordered simplicial complex whose geometric realization is $M$. The model specifies its **tangential structure** as follows. Write $BO(d)=\operatorname{Gr}_d(\mathbb R^\infty)$ for the space of $d$-dimensional linear subspaces of $\mathbb R^\infty=\bigcup_N\mathbb R^N$, with the direct-limit topology, and $\gamma_d\to BO(d)$ for the vector bundle whose fiber at a plane is that plane. Fix a continuous map $\tau_M:M\to BO(d)$ and a vector-bundle isomorphism $TM\cong\tau_M^*\gamma_d$. Fix a topological space $X$ and a continuous map $\xi:X\to BO(d)$ with the homotopy lifting property: for every topological space $Y$, continuous $u:Y\to X$ and continuous $H:Y\times[0,1]\to BO(d)$ satisfying $H(y,0)=\xi(u(y))$, there is a continuous $\widetilde H:Y\times[0,1]\to X$ with $\widetilde H(y,0)=u(y)$ and $\xi\circ\widetilde H=H$. Such a map is called a fibration here. Specify a continuous lift $\theta:M\to X$ satisfying $\xi\circ\theta=\tau_M$, and an orientation of $\theta^*\xi^*\gamma_d$ inducing the chosen orientation of $TM$. Pullback here gives the bundle with fiber $(\gamma_d)_{\xi(\theta(m))}$ at $m\in M$. These maps, bundle identification and orientation are specified data and remain fixed under the internal background gauge arrows below; the existence of a lift is an admissibility condition, not asserted for arbitrary $M$ and $\xi$. For orientation alone, one may take $X$ to be the space of oriented $d$-planes and $\xi$ the map forgetting their orientations; additional lifting requirements must instead be encoded by the specified $X$, $\xi$ and $\theta$. A **selected finite-regulator Euclidean model** on $K$ specifies its exact symmetry groups, field representations, finite field-value sets $X_\sigma$ for cells $\sigma\in K$, constraints, and configuration spaces $\Phi_x\subseteq\prod_{\sigma\in K}X_\sigma$ for each background $x$. It also specifies a dimensionless Euclidean action $S_x:\Phi_x\to\mathbb R$, finite measure weights $\mu_x:\Phi_x\to\mathbb C$, and a unital complex subalgebra $\mathcal O_x\subseteq\operatorname{Fun}(\Phi_x,\mathbb C)$ of model-defined observables. For a subcomplex $L\subseteq K$, write $\mathcal O_x(L)$ for the subalgebra of functions depending only on field variables on $L$; an observable is **local** if it belongs to $\mathcal O_x(L)$ for some specified $L$. A line observable has support on a one-dimensional subcomplex. Write $W_x(\phi):=\mu_x(\phi)e^{-S_x(\phi)}$. For local insertion functions $o_{j,x}:\Phi_x\to\mathbb C$, define the unnormalized correlator by $C_x(O_1,\ldots,O_n):=\sum_{\phi\in\Phi_x}W_x(\phi)\prod_{j=1}^n o_{j,x}(\phi)$; the empty tuple has value $Z_x=C_x()$. Use natural units $c=\hbar=1$; cochain labels, action phases, and the partition weight are dimensionless. The model separately assigns dimensions to any continuous field quantities or observables it includes. No continuum limit or Lorentzian continuation is part of this definition.

The ordinary-observable sum above is the no-defect sector of the model's **complete insertion functional**. For each background $x$, the model declares a set $\mathcal I_x$ of admissible inputs $I=(b;D;X_1,\ldots,X_n)$: $b$ specifies all remaining geometric and boundary data (there is no physical boundary for the closed $M$ here); $D$ is a finite decorated defect network; and each $X_j$ is a typed local, line, or other model-admitted insertion, possibly another decorated network. A network has finitely many smooth locally closed strata whose closures obey the frontier condition, the complete incidence relation, and model-specified field, orientation, coorientation, framing, and ordered junction data on each stratum, as in the topological-defect definition. The model states all disjointness, incidence, and label admissibility conditions. For every $I\in\mathcal I_x$ it supplies a finite set $\Omega_x(I)$ of field configurations, including any defect or junction variables and modified constraints, and a complex weight $w_x(I;\omega)$ with its declared normalization. Its unnormalized complete correlator is

$$
\widehat C_x(I):=\sum_{\omega\in\Omega_x(I)}w_x(I;\omega)\in\mathbb C.
$$

For no defect and a tuple of ordinary local insertions this must reduce to $\Omega_x(I)=\Phi_x$ and $w_x(I;\phi)=W_x(\phi)\prod_j o_{j,x}(\phi)$, so $\widehat C_x(I)=C_x(O_1,\ldots,O_n)$. The empty network, empty insertion tuple has value $Z_x$. This is conditional finite model data, not a construction of defect correlators from the ordinary observable algebra or from the 2-group labels.

The regulator includes a precise support-move convention. Defect supports at the displayed regulator inputs are represented by subcomplexes, with their smooth strata and decorations specified. A permitted decorated isotopy preserves strata, incidence and ordered junctions, transports every label and framing, fixes $b$ and the background, and avoids all other insertions. A claim of topologicality along such a smooth path requires the model to supply complete correlators at every intermediate support and comparisons with the endpoint regulator inputs; if subdivisions or other regulator presentations are used, their field sums and comparison maps must be supplied. The model must verify equality of the complete correlators under these comparisons. At a fixed triangulation the same requirement applies to each declared discrete support move, with its exact transport of complete inputs. A path through supports not represented by subcomplexes is not evaluated merely by writing the fixed-$K$ ordinary sum. These extra assignments do not assert a continuum limit or triangulation independence.

Let $G$ be the selected finite discrete internal $0$-form symmetry group. Its action on the model's local field and observable data is specified by group homomorphisms into the corresponding automorphism groups. Let $A$ be the selected finite discrete abelian $1$-form symmetry group, written additively, with the exact support, charge, and background conventions of the selected p-form symmetry model. The Abelian group $A$ is the ordinary local invertible $1$-form branch of the p-form definition. The $0$-form group $G$ may be non-Abelian, and its action on $A$ and the Postnikov data below retain the mixed 2-group structure; this does not replace $A$ by a non-Abelian local $1$-form label group. The group is effective in the selected model: elements inducing identical actions in every admitted correlator, observable, and background are identified. Each generator $U_a(\Sigma)$ is a defect insertion with support $j(\Sigma)$, where $\Sigma$ is a smooth manifold without boundary and $j:\Sigma\hookrightarrow M$ is a smooth embedding with closed codimension-two image represented by a subcomplex of $K$; the insertion includes the model-specified local field or operator data and any required orientation, coorientation, framing, or junction data on that image. It is topological when $\widehat C_x$ is invariant for every complete admissible input under the permitted decorated support isotopies and regulator comparisons just specified, avoiding all other insertions. The generators fuse by $U_aU_{a'}=U_{a+a'}$. Following the selected p-form symmetry model, a **genuine line observable** is supported on a closed embedded one-dimensional submanifold, represented here by a one-dimensional subcomplex of $K$, and is defined without an attached higher-dimensional support; the model specifies its crossing junction and action. If, for a nonzero genuine line observable $O_\gamma$, the crossing maps restrict to a complex-linear representation $R:A\to\operatorname{GL}(\mathbb C O_\gamma)$, write $R_a(O_\gamma)=\chi_\gamma(a)O_\gamma$. Then $\chi_\gamma:A\to\mathbb C^\times$ is a homomorphism. Since $A$ is finite, every $a\in A$ has finite order $m$, so $\chi_\gamma(a)^m=\chi_\gamma(0)=1$ and $|\chi_\gamma(a)|=1$. Thus $\chi_\gamma$ is a character in $\widehat A:=\operatorname{Hom}(A,U(1))$; it is continuous because $A$ is finite and discrete. Sweeping $U_a(\Sigma)$ once across the line in the chosen positive orientation multiplies the correlator by $\chi_\gamma(a)$. Other line observables need not carry a scalar character. The selected $0$-form symmetry acts on these defect labels through a specified left action $\rho:G\to\operatorname{Aut}(A)$.

Here the representation condition means $R_{a+a'}=R_aR_{a'}$ and $R_0=\operatorname{id}$; $\mathbb C^\times=\mathbb C\setminus\{0\}$ and $U(1)=\{z\in\mathbb C:|z|=1\}$. The unit-modulus conclusion uses finiteness of $A$ and this representation law, not a Hilbert-space inner product.

Choose a normalized inhomogeneous $3$-cocycle $\beta:G^3\to A$ for this left action; normalized means it vanishes if any argument is the identity, and the cocycle equation is

$$
\rho_g\beta(h,k,l)-\beta(gh,k,l)+\beta(g,hk,l)-\beta(g,h,kl)+\beta(g,h,k)=0.
$$

For a normalized $2$-cochain $c:G^2\to A$, set

$$
(\delta_\rho c)(g,h,k):=\rho_g c(h,k)-c(gh,k)+c(g,hk)-c(g,h).
$$

Two normalized $3$-cocycles represent the same Postnikov class when their difference is $\delta_\rho c$ for such a normalized $c$; $[\beta]$ denotes this equivalence class. The skeletal associator convention is directed from $(gh)k$ to $g(hk)$. A discrete background is nondynamical model data and is not summed over. It is an object $x=(a,B)$ of the finite background gauge $2$-groupoid on $K$: $a_{ij}\in G$ is a flat edge cochain, $a_{ij}a_{jk}=a_{ik}$ on every ordered triangle; $B_{ijk}\in A$ is a face cochain at its first vertex; and on every ordered tetrahedron

$$
(\delta_a B)_{ijkl}:=\rho_{a_{ij}}B_{jkl}-B_{ikl}+B_{ijl}-B_{ijk}=\beta(a_{ij},a_{jk},a_{kl})=(a^*\beta)_{ijkl}.
$$

Thus the two background fields are constrained and are not independent. A $1$-gauge arrow is given by vertex labels $g_i\in G$ and edge labels $\lambda_{ij}\in A$, with

$$
a'_{ij}=g_i a_{ij}g_j^{-1},\qquad \zeta^g_{ijk}=-\beta(g_i,a_{ij},a_{jk})+\beta(a'_{ij},g_j,a_{jk})-\beta(a'_{ij},a'_{jk},g_k),
$$

$$
B'_{ijk}=\rho_{g_i}B_{ijk}+\zeta^g_{ijk}+\rho_{a'_{ij}}\lambda_{jk}-\lambda_{ik}+\lambda_{ij}.
$$

A $2$-arrow between $1$-arrows with the same vertex labels $g$ and edge labels $\lambda,\lambda'$ is a vertex $A$-cochain $t$ satisfying $\lambda'-\lambda=\delta_{a'}t$, where $(\delta_{a'}t)_{ij}=\rho_{a'_{ij}}t_j-t_i$; vertical composition adds these cochains. For consecutive $1$-arrows $(g,\lambda)$ then $(h,\mu)$, their composite has vertex labels $hg$ and edge labels $\nu_{ij}=\rho_{h_i}\lambda_{ij}+\mu_{ij}+\tau_{ij}$, where $\tau_{ij}=\beta(h_i,g_i,a_{ij})-\beta(h_i,a'_{ij},g_j)+\beta(a''_{ij},h_j,g_j)$ and $a''_{ij}=h_i a'_{ij}h_j^{-1}$. Horizontal composition sends $2$-arrow cochains $t,s$ to $s+\rho_h t$. For three consecutive arrows with vertex labels $g,h,k$, the associator is the vertex cochain $\sigma_i=\beta(k_i,h_i,g_i)$; identity arrows have vertex labels $e$ and edge labels $0$, and unit constraints are identity $2$-arrows. The pentagon and triangle coherence equations are those of this finite background gauge $2$-groupoid.

A **finite model fiber** is a tuple $D_x=(\Phi_x,\mathcal O_x,W_x,\{\mathcal O_x(L)\}_{L\subseteq K})$ as specified above. Let $\mathfrak M$ be the strict $2$-category whose objects are these fibers. A $1$-morphism $F=(T,\alpha):D_x\to D_y$ consists of a bijection $T:\Phi_x\to\Phi_y$ and a unital complex-algebra isomorphism $\alpha:\mathcal O_x\to\mathcal O_y$ such that $(\alpha O)(T\phi)=O(\phi)$ for all $O\in\mathcal O_x$ and $\phi\in\Phi_x$, and such that $\alpha$ preserves the declared local subalgebras. It must also transport weights by a configuration-independent nonzero scalar: there exists $c_F\in\mathbb C^\times$ with $W_y(T\phi)=c_FW_x(\phi)$ for every $\phi\in\Phi_x$. The scalar is not additional morphism data; it is unique when $W_x$ is not identically zero, while no uniqueness is asserted for zero-weight or empty fibers. The phase-law case requires a model-specified choice in $U(1)$, with the coherence stipulated below. Composition is $(S,\gamma)\circ(T,\alpha)=(S\circ T,\gamma\circ\alpha)$ and the identity is $(\operatorname{id}_{\Phi_x},\operatorname{id}_{\mathcal O_x})$. A $2$-morphism $(J,j):(T,\alpha)\Rightarrow(T',\alpha')$ has target-fiber data $J:\Phi_y\to\Phi_y$ a bijection and $j:\mathcal O_y\to\mathcal O_y$ a unital complex-algebra automorphism, with $T'=J\circ T$, $\alpha'=j\circ\alpha$, $j(O)=O\circ J^{-1}$ for every $O\in\mathcal O_y$, $j$ preserving the declared local subalgebras, and $W_y(J\psi)=W_y(\psi)$ for every $\psi\in\Phi_y$. Identity $2$-morphisms are identity pairs; vertical composition is $(J',j')\circ(J,j)=(J'\circ J,j'\circ j)$. If $(J,j):F\Rightarrow F'$ and $(Q,q):H\Rightarrow H'$ with $F=(T,\alpha):D_x\to D_y$ and $H=(S,\gamma):D_y\to D_z$, their horizontal composite is $(Q\circ S\circ J\circ S^{-1},\ q\circ\gamma\circ j\circ\gamma^{-1}):H\circ F\Rightarrow H'\circ F'$. These formulas define the target's identity and composition laws.

In the target $2$-category, locality preservation means $\alpha(\mathcal O_x(L))=\mathcal O_y(L)$ for each subcomplex $L\subseteq K$, and $j(\mathcal O_y(L))=\mathcal O_y(L)$ for each target-side $2$-morphism. Every $2$-morphism compares $1$-morphisms with the same source and target fibers. The identity $1$-morphism has scalar $1$, a composite $H\circ F$ has an admissible scalar $c_Hc_F$, and the inverse pair $(T^{-1},\alpha^{-1})$ has scalar $c_F^{-1}$. Thus $1$-morphisms are closed under these operations, including when some configuration weights vanish. Vertical composites and inverses of $2$-morphisms preserve the target weight and local algebras.

For horizontal closure, put $\psi=S\xi\in\Phi_z$. Since $W_z(S\xi)=c_HW_y(\xi)$ and $J$ preserves $W_y$, one has $W_z(SJS^{-1}\psi)=c_HW_y(J\xi)=c_HW_y(\xi)=W_z(\psi)$. Composing with $Q$ still preserves $W_z$. The algebra component is pullback by the inverse of the resulting configuration bijection and preserves each local subalgebra, because $q$, $\gamma$, $j$, and their inverses do so. Its source and target are correct since $(QSJS^{-1})(ST)=QSJT=S'T'$ and $(q\gamma j\gamma^{-1})(\gamma\alpha)=q\gamma j\alpha=\gamma'\alpha'$. Here $S'=QS$, $T'=JT$, $\gamma'=q\gamma$, and $\alpha'=j\alpha$.

Finally, for fixed parallel $1$-morphisms $(T,\alpha)$ and $(T',\alpha')$, any $2$-morphism is uniquely forced to have $J=T'T^{-1}$ and $j=\alpha'\alpha^{-1}$; it exists precisely when this pair meets the stated conditions. Consequently the hom categories have at most one arrow between any two objects. The displayed $1$-composition is strictly associative and unital. Every iterated horizontal composition, horizontal identity law, and either side of the interchange equation is now a well-typed $2$-morphism with the same source and target as its counterpart, so uniqueness proves the required equalities. This verifies that $\mathfrak M$ is a strict $2$-category.

A **finite 2-group background coupling** is a pseudofunctor $F:\mathcal B(K)\to\mathfrak M$, where $\mathcal B(K)$ denotes the finite background gauge $2$-groupoid on $K$ defined above. Explicitly, it assigns a model fiber $D_x$ to each background object, a $1$-morphism $(T_f,\alpha_f)$ to each $1$-arrow, and a target-fiber $2$-morphism $(J_\eta,j_\eta)$ to each $2$-arrow $\eta:f\Rightarrow f'$. It preserves identity $2$-arrows and vertical composition. It also supplies invertible comparison $2$-morphisms $\kappa_{g,f}:F(g)\circ F(f)\Rightarrow F(g\circ f)$ and unit $2$-morphisms $\iota_x:\operatorname{id}_{D_x}\Rightarrow F(\operatorname{id}_x)$. For composable $2$-arrows $\eta:f\Rightarrow f'$ and $\theta:g\Rightarrow g'$, horizontal naturality requires

$$
F(\theta\ast\eta)\circ\kappa_{g,f}=\kappa_{g',f'}\circ(F(\theta)\ast F(\eta)).
$$

For the background associator $a_{h,g,f}: (h\circ g)\circ f\Rightarrow h\circ(g\circ f)$, the comparison maps obey

$$
F(a_{h,g,f})\circ\kappa_{h\circ g,f}\circ(\kappa_{h,g}\ast\operatorname{id}_{F(f)})=\kappa_{h,g\circ f}\circ(\operatorname{id}_{F(h)}\ast\kappa_{g,f}).
$$

For the left and right unitors $\ell_f:\operatorname{id}_y\circ f\Rightarrow f$ and $r_f:f\circ\operatorname{id}_x\Rightarrow f$, they obey

$$
F(\ell_f)\circ\kappa_{\operatorname{id}_y,f}\circ(\iota_y\ast\operatorname{id}_{F(f)})=\operatorname{id}_{F(f)},\qquad F(r_f)\circ\kappa_{f,\operatorname{id}_x}\circ(\operatorname{id}_{F(f)}\ast\iota_x)=\operatorname{id}_{F(f)}.
$$

The coupling also specifies a bijective transport $f_*:\mathcal I_x\to\mathcal I_y$ of complete admissible inputs along each gauge arrow $f:x\to y$, including its action on $b$, all support decorations, and junctions, together with a bijection $\widetilde T_{f,I}:\Omega_x(I)\to\Omega_y(f_*I)$. On the ordinary sector these reduce to the specified observable transport and $T_f$. For a $2$-arrow $\eta:f\Rightarrow f'$, the model supplies a bijection of target input data sending $f_*I$ to $f'_*I$ and a configuration bijection $\widetilde J_{\eta,I}:\Omega_y(f_*I)\to\Omega_y(f'_*I)$ with $\widetilde T_{f',I}=\widetilde J_{\eta,I}\widetilde T_{f,I}$ and preservation of the complete integrand. Comparison maps similarly run from $g_*(f_*I)$ to $(g\circ f)_*I$, with configuration maps from $\Omega_z(g_*f_*I)$ to $\Omega_z((g\circ f)_*I)$; unit maps run from $I$ to $(\operatorname{id}_x)_*I$. On each such fiber these maps obey the identity, vertical, horizontal, associator and unit equations displayed above, using their stated source and target inputs, and they intertwine every declared support move. Their weight transformation law is additional model data. In the coherent phase-law setting on complete inputs the model must in particular verify

$$
w_y(f_*I;\widetilde T_{f,I}\omega)=\chi_f(x)w_x(I;\omega)
$$

for every admitted $I$ and $\omega$, with the same configuration-independent phase and identity, composition and $2$-isomorphism conditions as below. This implies $\widehat C_y(f_*I)=\chi_f(x)\widehat C_x(I)$ by finite reindexing; ordinary-sector covariance alone does not establish this extension. Likewise, every claimed internal symmetry action on observables and defects includes a bijection on the complete typed insertion and combined background/boundary data, preserving admissibility and the complete correlator after that simultaneous transport; a specified anomalous background gauge transformation instead has its stated phase law. Crossing actions and their junctions must be defined on these complete inputs before a defect-charge relation is asserted.

Here $\ast$ denotes horizontal composition or whiskering of $2$-morphisms. These equations give the precise identity, vertical, horizontal, associator, and unit coherence required of the model assignment. The action and measure are model inputs; the finite 2-group data alone do not choose them or determine their transformation phase.

A permitted background counterterm is a model-declared dimensionless functional $L_x\in\mathbb R/(2\pi\mathbb Z)$ that is a finite sum of functions, each depending only on cochain labels in one simplex or a specified finite cluster of simplices; it reweights the model by $e^{iL_x}$. If under a gauge arrow $f:x\to y$ all unnormalized correlators transform by a common phase $\chi_f(x)\in U(1)$, coherence requires $\chi_{\mathrm{id}_x}(x)=1$, $\chi_{g\circ f}(x)=\chi_g(y)\chi_f(x)$ for composable arrows, and equal phases for $2$-isomorphic arrows. The residual background anomaly is the class of these phases under $\chi_f(x)\mapsto e^{iL_y}\chi_f(x)e^{-iL_x}$ for the permitted counterterms. The anomaly is absent in the selected scheme exactly when an allowed counterterm makes every such phase $1$. The Postnikov class specifies the background constraint and gauge transformations; it is not itself the model's transformation phase or anomaly. It may enter an anomaly calculation for a specified action and measure.

## Definition references

[Schommer-Pries, §1.1, p. 2714, tangential-structure lift and footnotes 5–6](https://msp.org/gt/2018/22-5/gt-v22-n5-p05-s.pdf)

[Benini, Córdova, and Hsin, §2.3 and §§1.2–1.3](https://arxiv.org/pdf/1803.09336)

[Schäfer-Nameki, §2.5 and §2.8.1](https://arxiv.org/pdf/2305.18296v2)

[[def-aqft-two-group-background]]

[[def-aqft-p-form-global-symmetry]]

[[def-aqft-topological-defect]]

[[thm-aqft-two-group-background-consistency]]

[[def-aqft-finite-background-two-groupoid]]

[[thm-aqft-finite-background-two-groupoid-coherence]]
