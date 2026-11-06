---
id: def-cft-r5-positive-2d-renormalizable-rg-theory
kind: definition
title: Positive local two-dimensional renormalizable RG theory
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: physics
library: physics
deps:
  - def-axiom-of-choice
  - def-tempered-distribution
  - def-schwartz-space-and-its-seminorms
  - def-smooth-manifold
  - def-cft-r5-full-local-cft-data
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-tempered-distribution: formulation-prerequisite
  def-schwartz-space-and-its-seminorms: formulation-prerequisite
  def-smooth-manifold: formulation-prerequisite
  def-cft-r5-full-local-cft-data: formulation-prerequisite
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - source_key: S03
      title: A. B. Zamolodchikov, Irreversibility of the Flux of the Renormalization Group in a 2D Field Theory, JETP Letters 43(12) (1986), 730–732
      url: https://img.atwiki.jp/sakurazemi/pub/reference/Zamolodchikov1986.pdf
      locator: "pp. 730–732: action and cutoff, RG parameter flow, stress tensor, trace identity, and two-point functions in Eqs. (1), (4)–(8)."
      source_limit: The three-page article supplies the stress/trace and coupling-space Ward framework. The local conventions below explicitly use squared-length RG time and the negative mixed stress component so the displayed Ward coefficients agree; they do not identify a cutoff action with a constructed measure.
    - source_key: S20
      title: Satoshi Nawata, Runkai Tao, Daisuke Yokoyama, An Introduction to 2d Conformal Field Theory, arXiv:2208.05180v5
      url: https://arxiv.org/pdf/2208.05180v5
      locator: "§6.1, printed pp. 78–83, for cutoff scaling, beta functions, trace identity and Callan–Symanzik conventions; §6.2, printed pp. 84–86, for the stress-tensor c-function derivation."
      source_limit: The lecture notes give a framework derivation under their stated unitary and RG assumptions; they do not prove that every local action realizes those assumptions.
    - source_key: S21
      title: Andrea Cappelli, Daniel Friedan, José I. Latorre, c-Theorem and Spectral Representation, Nuclear Physics B352 (1991), 616–670
      url: https://www.physics.rutgers.edu/~friedan/papers/Nucl_Phys_B352_616-670_1991.pdf
      locator: "§2.1, printed pp. 620–623: positive stress-tensor spectral density and the endpoint c-sum rule for flows between conformal theories."
      source_limit: Equation2.3 and AppendixA identify the positive stress spectral representation; later endpoint sum rules use additional endpoint hypotheses. The local two-point proof derives the measure and pointwise positivity without those endpoint assumptions, and retains an explicit additional trace-clustering hypothesis.
    - source_key: S22
      title: John Cardy, Notes on the c-theorem
      url: https://www-thphys.physics.ox.ac.uk/people/JohnCardy/cft14/ctheoremnotes.pdf
      locator: 'Pages1–2: literal tensor conservation, full-trace convention and radial derivative. The conversion of that convention is explicit below.'
    - source_key: S23
      title: Stephen Summers, A Perspective on Constructive Quantum Field Theory
      url: https://arxiv.org/pdf/1203.3991
      locator: 'Section3, PDFp10: clustering and regularity are separate from reflection positivity. Only this source passage is used; no full OS reconstruction proof is imported.'
physical_scope: A specified Euclidean local positive two-dimensional renormalizable QFT data package with connected tempered reflection-positive stress correlators, source-normalized trace and squared-length RG conventions, an explicit trace-clustering condition excluding invariant trace fluctuations, and a nondegenerate physical coupling metric. The trace-clustering condition is additional to reflection positivity. No global RG trajectory or conformal endpoint is assumed.
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Work under AC for the Hilbert and spectral constructions. A model has a specified Euclidean local action $S(g,a)=\int_{\mathbb R^2}\sigma(g,a;x)\,d^2x$ and ultraviolet cutoff $a>0$. The coordinates $x^1,x^2$ and $a$ have units of length; the scalar density $\sigma$ has units $[\mathrm{length}]^{-2}$; and the couplings are dimensionless.

Here “renormalizable” is a data-level condition: each declared cutoff change is represented by a map on the specified coupling space that preserves separated correlation functions with the stated operator-basis transformation. The maps and covariance equations below give this condition precisely. This terminology does not assert perturbative power-counting renormalizability or construct a continuum limit.

For finitely many couplings, the coupling space is a smooth real $N$-manifold $\mathcal G$ in the sense of [[def-smooth-manifold]]: a topological $N$-manifold equipped with a maximal smooth atlas. Choose an open chart domain $U\subseteq\mathcal G$ and its chart map $\varphi:U\to V$, where $V\subseteq\mathbb R^N$ is open; the coordinates $g^1,\ldots,g^N$ are the component functions of $\varphi$, and $\partial_i$ denotes differentiation in the $i$th chart coordinate. The local maps $R_s$ below act on declared open subsets of this coupling chart.

For a countable family of couplings, instead specify a finite- or countable-dimensional real locally convex topological vector space $E$, its topology, and an open coupling domain $Q\subseteq E$. Here a real locally convex topological vector space means a real vector space with a Hausdorff topology for which addition $E\times E\to E$ and scalar multiplication $\mathbb R\times E\to E$ are continuous and $0$ has a neighborhood basis of open convex sets. A subset $C\subseteq E$ is convex when $(1-t)x+ty\in C$ for all $x,y\in C$ and $0\le t\le1$. The same convention applies to the declared locally convex codomain below. Differentiability of maps $F_0:Q\to F$ into a declared locally convex space $F$ uses the Bastiani convention: $dF_0(x;h)=\lim_{t\to0}(F_0(x+th)-F_0(x))/t$ must exist in $F$, and $(x,h)\mapsto dF_0(x;h)$ must be jointly continuous; higher differentiability iterates this condition for higher directional derivatives. Whenever component notation $g^i,\partial_i,\beta^i$ is used, the data also specify the coordinate functionals and the topology in which the corresponding expansions converge. Without such a coordinate system, the formulas are read in their directional form, with each derivative and contraction explicitly supplied as a continuous map on $E$. In either case, all maps, derivative domains, and convergence of every sum and contraction used below are part of the model data.

Write $\mathscr U=U$ in the finite-dimensional case and $\mathscr U=Q$ in the countable locally convex case.

For a coupling point $g$, the real coupling insertion in a tangent direction $v\in T_g\mathcal G$ (or $v\in E$ in the countable locally convex case) is $\Phi_g[v](x)=D_v\sigma(g,a;x)$. In a chart basis this is $\Phi_i=\partial_i\sigma$ in a fixed renormalization scheme, with units $[\mathrm{length}]^{-2}$. A bosonic symmetric Euclidean stress tensor $\mathsf T_{ab}$ is supplied on $\mathbb R^2$, with $\partial_a:=\partial/\partial x^a$, Euclidean metric $\delta_{ab}$, and $\partial^a:=\delta^{ab}\partial_b$. It satisfies $\partial^a\mathsf T_{ab}=0$ away from contact insertions; contact terms in correlators are distributions supported where insertion points coincide, and no smoothness or conservation across those diagonals is assumed. Use $z=x^1+ix^2$ and define
$$T=\mathsf T_{zz},\qquad\bar T=\mathsf T_{\bar z\bar z},\qquad\Theta=-\mathsf T_{z\bar z}.$$
Define $\partial=\tfrac12(\partial_{x^1}-i\partial_{x^2})$ and $\bar\partial=\tfrac12(\partial_{x^1}+i\partial_{x^2})$. The minus sign is explicit: tensor conservation is $\bar\partial T-\partial\Theta=0$, not $\bar\partial T+\partial\Theta=0$ for this symbol $\Theta$. The separate source-normalized trace identity is stated after the cutoff beta vector has been defined.

For each $(g,a)$, the supplied correlator model includes a unital complex $*$-algebra $\mathcal P_{g,a}$ of finite polynomials in smeared local-field insertions, its antilinear reflection operation, and a normalized complex-linear functional $\omega_{g,a}:\mathcal P_{g,a}\to\mathbb C$ with $\omega_{g,a}(1)=1$. This functional is invariant under the declared translations and rotations of the Euclidean plane. For $f\in C_c^\infty(\mathbb R^2;\mathbb C)$, the components $\mathsf T_{ab}(f)=\int \mathsf T_{ab}(x)f(x)\,d^2x$ and the coupling insertions $\Phi_i(f)=\int\Phi_i(x)f(x)\,d^2x$ (or $\Phi_g[v](f)$ in a coordinate-free chart) are elements of this algebra; products of these smeared insertions are defined there. For $A,B\in\{T,\bar T,\Theta,\Phi_i\}$ the bilinear maps
$$
(f,h)\longmapsto \omega_{g,a}(A(f)B(h))-\omega_{g,a}(A(f))\omega_{g,a}(B(h))
$$
extend to connected distributions $W^c_{AB}\in\mathcal D'(\mathbb R^2\times\mathbb R^2)$. The same requirement applies to the declared directional insertions $\Phi_g[v]$ in a coordinate-free coupling model, continuously in the directions. Translation invariance makes each such distribution a kernel depending on $x-y$; $\langle A(x)B(y)\rangle_c$ denotes its separated-point value, taken by the reflected-mollifier limit required below. This defines the field and test-polynomial insertions, and the domain and codomain of the normalized correlation functional, used in the displayed pairings. The action/correlator framework is supplied physical data; this definition does not claim that a formal path integral constructs it.

For every pair in $C,H_i,G_{ij}$, angle brackets mean **connected** two-point functions,
$$\langle A(x)B(0)\rangle_c=\langle(A(x)-\langle A\rangle)(B(0)-\langle B\rangle)\rangle.$$
We suppress the subscript $c$ in those three functions. The normalization radius $r=x_0$ satisfies $r\gg a$. Thus
$$C(r,g)=2z^4\langle T(x)T(0)\rangle_c,\quad H_i(r,g)=z^2r^2\langle T(x)\Phi_i(0)\rangle_c,\quad G_{ij}(r,g)=r^4\langle\Phi_i(x)\Phi_j(0)\rangle_c,$$
at $x=(r,0)$, $z=r>0$. These functions are twice continuously differentiable in couplings at each claimed point; all contractions are finite.
The notation $\langle\cdot\rangle$ here uses $\omega_{g,a}$ and suppresses its subscripts; likewise $C,H_i,G_{ij}$ suppress the fixed current cutoff $a$. Their stipulated covariance under changing $a$ is stated below.

In the countable locally convex case without component coordinates, for $v,w\in E$ define
$$H(r,g;v)=z^2r^2\langle T(x)\Phi_g[v](0)\rangle_c,\qquad G(r,g;v,w)=r^4\langle\Phi_g[v](x)\Phi_g[w](0)\rangle_c.$$
The data require these to be continuous linear and bilinear forms, respectively, on the declared coupling directions. These are the coordinate-free versions of the same contractions.

The required two-point regularity is explicit. Connected component correlators of the tensor, and the scalar pairings used above, extend to tempered distributions, in the sense of [[def-tempered-distribution]] on the Schwartz test space of [[def-schwartz-space-and-its-seminorms]]. Their finite separated point values are joint limits of reflected smooth mollifications. Euclidean covariance includes the tensor transformation law; the tensor has the reflected-adjoint reality specified below. No parity assumption equates its two chiral sectors. Reflection is $\vartheta(x^1,x^2)=(-x^1,x^2)$. Write $\mathcal J$ for the supplied antilinear reflected adjoint. Each real coupling insertion is a reflection-even scalar: for every real tangent direction $v$ and $f\in C_c^\infty(\mathbb R^2;\mathbb C)$ require $\mathcal J(\Phi_g[v](f))=\Phi_g[v](\overline f\circ\vartheta)$, and extend antilinearly to complex combinations of directions. This law is an additional reality condition on the insertion data; it is not inferred from the notation $D_v\sigma$. The model obeys reflection positivity for the finite field/test polynomials used here. In the spin basis $(T,\bar T,\Theta)$, the reflected adjoint fixes each label, so the induced two-point form is exactly
$$\sum_{A,B}\int\overline{f_A(t,x)}S_{AB}(t+s,y-x)f_B(s,y)\,dt\,dx\,ds\,dy\ge0\quad(\operatorname{supp}f\subset\{t>0\}).$$
Here $S_{AB}$ is the connected two-point distribution; centering is justified by adjoining the constant field to reflection positivity and subtracting its projection. This is a condition on actual correlation data, not a spectral-measure postulate or a full OS reconstruction assertion.

**Additional invariant-trace exclusion.** At every claimed coupling impose the two-point trace-clustering condition
$$\lim_{r\to\infty}\langle\Theta(r,0)\Theta(0)\rangle_c=0.$$
This condition is additional to the weaker reflection-positive package; it is not inferred from reflection positivity or from subtracting the one-point mean. Clustering here is weaker than a unique-vacuum assumption or clustering of the whole Schwinger hierarchy, and is not an assertion of an IR conformal fixed point.

Use **squared-length RG time** $s=\log(a^2/a_0^2)$ on a specified interval $I\subseteq\mathbb R$ containing $0$. For each $s\in I$, $R_s:\mathscr U_s\to\mathscr U$ is a differentiable local map on a declared open domain $\mathscr U_s\subseteq\mathscr U$; $R_0$ is the identity and $R_{s+t}=R_s\circ R_t$ wherever both sides are defined. The cutoff changes to $e^{s/2}a$, and $\beta_g=\left.\frac{d}{ds}R_s(g)\right|_{s=0}$ lies in $T_g\mathcal G$ in the finite-dimensional case and in $E$ in the countable locally convex case; $\beta^i=\left.\frac{d}{ds}(R_sg)^i\right|_{s=0}$ are its components whenever a coordinate system is specified. If $\ell=\log(a/a_0)$ is used instead, $\beta_{\ell}=2\beta$; the two beta conventions are not silently identified. These maps preserve separated physical correlation functions with the derivative-of-coupling transformation of the $\Phi_i$ basis. Simultaneous dilation of positions and cutoff uses their declared engineering units. Equivalently, after suppressing the fixed reference cutoff, their dimensionless two-point tensors obey
$$C(r,R_sg)=C(e^{s/2}r,g),$$
$$\frac{\partial R_s^j}{\partial g^i}H_j(r,R_sg)=H_i(e^{s/2}r,g),$$
$$\frac{\partial R_s^k}{\partial g^i}\frac{\partial R_s^l}{\partial g^j}G_{kl}(r,R_sg)=G_{ij}(e^{s/2}r,g).$$
These are the precise separated Callan–Symanzik covariance premises of the selected model: they say what cutoff equivalence and operator mixing mean, rather than asserting that every action has this property. In particular $D=\beta^i\partial_i$ agrees with $\dot{}=r^2\partial_{r^2}$ on the scalar stress functions; on covectors and tensors the corresponding Lie derivatives are used. A fixed point is a coupling $g_*$ for which $R_s(g_*)=g_*$ for all $s$ in a neighborhood of $0$, so $\beta_{g_*}=0$. No global existence of $R_s$ or limits of its trajectories is assumed.

**Source Ward normalization.** The model stipulates the renormalized trace identity
$$\Theta=\beta^i\Phi_i,$$
read as $\Theta=\Phi_g[\beta_g]$ when no coupling-coordinate basis is used. This identity is in the chosen stress/action normalization, modulo a scalar vacuum counterterm, and is not inferred for an arbitrary proposed action. Centering preserves it in connected pairings. The contractions $\beta^iH_i$ and $\beta^i\beta^jG_{ij}$ mean $H(r,g;\beta_g)$ and $G(r,g;\beta_g,\beta_g)$ in the coordinate-free case.

The scalar physical operator basis is quotiented by null fields and completed in its reflected Gram norm. Apply reflection positivity to centered coupling insertions mollified at $(r/2,0)$. The stated reflection law and translation invariance identify the limiting reflected Gram matrix at $(r/2,0),(-r/2,0)$ with $r^{-4}G_{ij}$; the stipulated joint point limits therefore give $\overline v^{,i}G_{ij}v^j\ge0$. On the declared quotient/completion there is no nonzero null vector, and $\beta_g$ belongs to this space with finite norm. Thus $G$ is positive definite on the physical beta vector. Vacuum-energy/identity directions, which vanish in connected pairings within a fixed vacuum sector, are not retained as nonzero physical directions.

At a claimed conformal fixed point, the model must supply full local two-dimensional CFT data in the state-space/OPE presentation of [[def-cft-r5-full-local-cft-data]]. In particular, this supplies a complete Hausdorff locally convex state space $\mathcal H$, a dense common invariant domain $\mathcal D$, and commuting left/right Virasoro actions $L_n,\bar L_n$ on $\mathcal D$ with central charges $c_L,c_R$ in the displayed $L_m$ convention. Thus, on $\mathcal D$,
$$[L_m,L_n]=(m-n)L_{m+n}+\frac{c_L}{12}(m^3-m)\delta_{m+n,0}I,\qquad [\bar L_m,\bar L_n]=(m-n)\bar L_{m+n}+\frac{c_R}{12}(m^3-m)\delta_{m+n,0}I,\qquad [L_m,\bar L_n]=0.$$
The model also supplies an identification of its stress components with chiral CFT stress fields on that common domain. With dimensionless coordinate $w=z/\ell_{\rm ref}$ for a specified reference length $\ell_{\rm ref}>0$, their radial mode expansions in matrix coefficients on $\mathcal D$ are $T_{\rm CFT}(w)=\sum_{n\in\mathbb Z}L_nw^{-n-2}$ and $\bar T_{\rm CFT}(\bar w)=\sum_{n\in\mathbb Z}\bar L_n\bar w^{-n-2}$ on the declared radial domains, with convergence in matrix coefficients required there, and $T_{\rm CFT}(w)=\ell_{\rm ref}^2T(z)$, $\bar T_{\rm CFT}(\bar w)=\ell_{\rm ref}^2\bar T(\bar z)$. Write $\widetilde c:=c_L$ for the holomorphic central charge in the normalization used by the c-function. The fixed-point convention is
$$
\langle T_{\rm CFT}(w)T_{\rm CFT}(0)\rangle_c=\frac{\widetilde c}{2w^4}=\frac{c_L}{2w^4},\qquad \langle\bar T_{\rm CFT}(\bar w)\bar T_{\rm CFT}(0)\rangle_c=\frac{c_R}{2\bar w^4}.
$$
Equivalently, in the lengthful coordinates used in this definition, $\langle T(z)T(0)\rangle_c=c_L/(2z^4)$ and $\langle\bar T(\bar z)\bar T(0)\rangle_c=c_R/(2\bar z^4)$. The field identification and normalization are supplied fixed-point data; neither follows for an arbitrary action, and this definition does not construct such a model or prove that a flow reaches such a point.

## Definition references

[[def-smooth-manifold]]

[[def-cft-r5-full-local-cft-data]]

## Remarks

For context, under the exact hypotheses of [[lem-cft-two-point-rp-stress-spectral-representation]], the local spectral representation identifies the trace-clustering condition above with absence of the zero-energy, zero-momentum trace atom. This spectral interpretation is not a logical prerequisite for the definition; the clustering condition itself remains an additional model assumption.

The trace sign and RG-time conventions above are chosen to make the geometric Ward equations and the displayed coefficient−12 refer to the same quantities. Explicitly, Cardy's full trace is $\Theta_{\rm C}=4\mathsf T_{z\bar z}=-4\Theta$. His combination $2F-G_{\rm C}-3H_{\rm C}/8$ becomes $2F+4B-6H$ with $G_{\rm C}=-4B$, $H_{\rm C}=16H$, and his radial identity becomes $\dot c=-12H$. Thus this is an explicit conversion of a stated source convention, rather than treating the literal component $\mathsf T_{z\bar z}$ as its negative. The newly explicit trace-clustering assumption is a genuine additional physical qualification. A centered random constant scalar gives a conserved reflection-positive trace with a nonzero invariant atom, so connected subtraction alone would not justify the positive c-function. Temperateness and tensor reflection positivity are also actual hypotheses of the two-point spectral construction; they are not inferred from a list of finite coupling contractions. No finite UV/IR conformal endpoint, global population of trajectories, or assumed Källén–Lehmann density is introduced.
