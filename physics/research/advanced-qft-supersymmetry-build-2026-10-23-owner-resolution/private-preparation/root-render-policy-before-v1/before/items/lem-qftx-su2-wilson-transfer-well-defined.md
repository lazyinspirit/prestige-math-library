---
id: lem-qftx-su2-wilson-transfer-well-defined
kind: lemma
title: Finite SU(2) Wilson integrals and transfer-sector well-definedness
status: draft
origin: session
dependency_level: 2
axiom_base: "ZF + full AC; full AC supplies AC_omega to the finite lattice and Lie-group data interfaces, and no additional choice is used by the finite-product estimates."
domain: mathematics
library: physics
category: advanced-qft-and-supersymmetry
deps:
  - def-axiom-of-choice
  - cor-normalized-haar-probability-on-a-compact-group
  - thm-l-two-kernels-give-hilbert-schmidt-operators
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-qftx-nonabelian-lattice-gauge-data
  - lem-qftx-su2-compact-nonabelian-group
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  cor-normalized-haar-probability-on-a-compact-group: mathematical-premise
  thm-l-two-kernels-give-hilbert-schmidt-operators: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  def-qftx-nonabelian-lattice-gauge-data: mathematical-premise
  lem-qftx-su2-compact-nonabelian-group: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Michael Creutz, Quarks, Gluons and Lattices, Chapters 7 and 8"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/8BE1322C90332E2092E3945035525382/9781009290388c7_34-38.pdf/lattice_gauge_theory.pdf"
    - title: "Michael Creutz, Quarks, Gluons and Lattices, Chapter 8, Group integration"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/D249BE42514DA3218D7060836C8438ED/9781009290388c8_39-50.pdf/group_integration.pdf"
    - title: "Michael Creutz, Quarks, Gluons and Lattices, Chapter 15, The Hamiltonian approach"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/1B676F70F134E1133DD3D1E56C42C0D3/9781009290388c15_101-107.pdf/the-hamiltonian-approach.pdf"
    - title: "David Tong, Gauge Theory, Chapter 4, Lattice Gauge Theory"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge4.pdf"
verification:
  precheck: pending
---

## Statement

Assume full AC and use the finite non-Abelian lattice-data interface with global group $SU(2)$ and its smooth defining unitary representation on standard $\mathbb C^2$. Let $N_s,N_t\geq3$ be finite integers and let $a>0$, $\beta>0$. Use the finite periodic Euclidean lattice $\Lambda=(\mathbb Z/N_s\mathbb Z)^3\times(\mathbb Z/N_t\mathbb Z)$, with its finite oriented two-complex of vertices, positive spatial edges $(x,i,t)$, temporal edges $(x,t)$, and oriented plaquette boundary words. On every positive edge put an independent matrix in the compact Hausdorff Lie group

$$SU(2)=\{U\in M_2(\mathbb C):U^*U=I_2,\ \det U=1\},$$

and assign its inverse to reverse traversal. A vertex function $\Omega:\Lambda\to SU(2)$ acts on an oriented link $U_{vw}$ by $U_{vw}\mapsto\Omega_vU_{vw}\Omega_w^{-1}$. For each oriented plaquette $p$, let $U_p$ be the ordered product of its four boundary links, using inverse matrices for reverse traversals. Put

$$S_\Lambda(U)=\beta\sum_{p\in\mathcal P_\Lambda}\left(1-\tfrac12\operatorname{ReTr}_2U_p\right).$$

Let $dU$ be the unique normalized left Haar Borel probability measure on $SU(2)$, which is also right invariant, and use it as the bi-invariant link measure in the finite lattice-data interface. Let $d\mu_\Lambda$ be its finite product over all positive links, formed by the finite-product measure theorem. Define

$$Z_\Lambda=\int e^{-S_\Lambda(U)}\,d\mu_\Lambda(U).$$

For every bounded measurable function $O$ on the finite link configuration space, the integral $\int Oe^{-S_\Lambda}\,d\mu_\Lambda$ is finite; moreover $0<Z_\Lambda\leq1$, so its normalized expectation is defined.

For a spatial slice $u=(U_{x,i})$, define the spatial plaquette action $S_s(u)$ by restricting the displayed action to spatial plaquettes. For two adjacent slices $u',u$ and temporal links $\eta_x$, define $S_t(u',u;\eta)$ by summing the same plaquette term over $\eta_xU'_{x,i}\eta_{x+\hat i}^{-1}U_{x,i}^{-1}$. Let $d\mu_s,d\mu_V$ be the corresponding finite product Haar probabilities, let $\mathcal H_{\rm kin}=L^2(SU(2)^{E_s},d\mu_s)$, and for $h\in SU(2)^{V_s}$ set $(\mathcal U(h)\psi)(u)=\psi(h^{-1}\cdot u)$, with equality in $L^2$. Define $\mathcal H_{\rm phys}=\{\psi\in\mathcal H_{\rm kin}:\mathcal U(h)\psi=\psi\text{ for every }h\in SU(2)^{V_s}\}$.

$$K(u',u)=e^{-\frac12S_s(u')-\frac12S_s(u)}\int e^{-S_t(u',u;\eta)}\,d\mu_V(\eta),\qquad (T\psi)(u')=\int K(u',u)\psi(u)\,d\mu_s(u).$$

Then $\mathcal H_{\rm phys}$ is closed and contains the nonzero constant function. $T$ is a bounded operator on $\mathcal H_{\rm kin}$ with $\|T\|\leq1$ and maps $\mathcal H_{\rm kin}$ into $\mathcal H_{\rm phys}$. The cyclic product of $N_t$ kernels integrates to $Z_\Lambda$; insertion of any bounded slice observable gives the corresponding finite-volume unnormalized expectation. No self-adjointness, positivity as a quadratic form, Hamiltonian limit, or continuum statement is asserted.

## Statement references

[[def-axiom-of-choice|Axiom of Choice used for normalized Haar probability]]

[[cor-normalized-haar-probability-on-a-compact-group|Normalized Haar probability on a compact Hausdorff group]]

[[lem-qftx-su2-compact-nonabelian-group|Compact non-Abelian Lie-group structure and defining representation of SU(2)]]

[[def-qftx-nonabelian-lattice-gauge-data|Finite non-Abelian lattice-data interface]]

[Creutz, *Quarks, Gluons and Lattices*, Chapter 7, pp. 34–38](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/8BE1322C90332E2092E3945035525382/9781009290388c7_34-38.pdf/lattice_gauge_theory.pdf)

[Creutz, *Quarks, Gluons and Lattices*, Chapter 8, pp. 39–43](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/D249BE42514DA3218D7060836C8438ED/9781009290388c8_39-50.pdf/group_integration.pdf)

[Creutz, *Quarks, Gluons and Lattices*, Chapter 15, pp. 101–107](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/1B676F70F134E1133DD3D1E56C42C0D3/9781009290388c15_101-107.pdf/the-hamiltonian-approach.pdf)

[Tong, *Gauge Theory*, Chapter 4, §§4.2.1–4.2.3, pp. 206–215](https://davidtong.org/pdfs/teaching/gauge-theory/gauge4.pdf)

## Facts & Assumptions

**Given:** Full AC; finite $N_s,N_t\geq3$, $a,\beta>0$; the finite oriented lattice and compact-group link-data convention stated above.

[A1] Full AC, written as the choice-function axiom, is used for normalized Haar existence and the Hilbert-space kernel-operator supplier. [[def-axiom-of-choice]]

[F1] [[cor-normalized-haar-probability-on-a-compact-group]]: under full AC, a compact Hausdorff group has a unique normalized left Haar probability, also right invariant.

[F2] [[lem-qftx-su2-compact-nonabelian-group]]: the displayed matrix group is a compact Hausdorff non-Abelian finite-dimensional real Lie group; its defining matrix representation is smooth and unitary, and $\tfrac12\operatorname{ReTr}_2V\in[-1,1]$.

[F3] [[def-qftx-nonabelian-lattice-gauge-data]]: the actual finite-lattice interface takes a finite oriented two-complex and a supplied compact noncommutative finite-dimensional Lie group with smooth unitary representation; it assigns group elements to positively oriented edges, uses inverses on reversed edges, defines the vertex gauge action and ordered face holonomies, chooses a normalized bi-invariant Borel probability and its finite product, and uses continuous conjugation- and inverse-invariant face potentials.

[F4] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] makes parameter integrals of nonnegative measurable product functions measurable and permits the iterated finite-lattice integrations.

[F5] [[thm-l-two-kernels-give-hilbert-schmidt-operators]]: under full AC and sigma-finite factor measures, a square-integrable kernel defines a bounded operator between the complex $L^2$ spaces with operator norm at most the kernel $L^2$ norm; those $L^2$ spaces have the required Hilbert structure.

[F6] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: for sigma-finite factor measures, the product measure exists and has the rectangle formula. Applying this two-factor theorem successively to the finite list of Haar probability factors gives the finite product measure; at each stage its total mass is one by the rectangle formula.

## Proof

1.1 For $V\in SU(2)$, the parametrization in [F2] gives $\tfrac12\operatorname{ReTr}_2V\in[-1,1]$ and a real trace. Thus $\Phi(V)=\beta(1-\tfrac12\operatorname{ReTr}_2V)$ is continuous. Cyclicity of trace gives $\operatorname{Tr}_2(gVg^{-1})=\operatorname{Tr}_2V$; unitarity gives $\operatorname{Tr}_2(V^{-1})=\overline{\operatorname{Tr}_2V}=\operatorname{Tr}_2V$. Hence each plaquette potential is conjugation- and inverse-invariant as required by [F3]. [given, F2, F3, algebra]

2.1 Each plaquette term therefore lies in $[0,2]$. Since $\mathcal P_\Lambda$ is finite, $0\leq S_\Lambda\leq2\beta|\mathcal P_\Lambda|$, and consequently $e^{-2\beta|\mathcal P_\Lambda|}\leq e^{-S_\Lambda}\leq1$. [given, step 1.1, algebra]

2.2 The actions $S_s,S_t$ are sums of nonnegative plaquette terms by step 1.1, so $0\leq K(u',u)\leq1$. Matrix multiplication, inversion on $SU(2)$, and trace are continuous, so the temporal-action integrand is nonnegative and product-measurable. The slice and vertex product Haar measures are probabilities by [F1,F6], hence sigma-finite; Tonelli [F4] makes the $\eta$-integral $K$ measurable in $(u',u)$. Each slice Haar product is a probability by [F6], so $\int|K|^2\,d(\mu_s\times\mu_s)\leq1$. [given, F1, F3, F4, F6, step 1.1, algebra]

3.1 The compact Hausdorff group in [F2] has its normalized Haar probability by [F1]. Apply the two-factor product-measure theorem [F6] successively along the finite ordered link set; the rectangle formula at each stage gives total mass one, and [F3] identifies this iterated product with $d\mu_\Lambda$. Integrating the bounds in step 2.1 gives $e^{-2\beta|\mathcal P_\Lambda|}\leq Z_\Lambda\leq1$. For bounded $O$, $\left|\int Oe^{-S_\Lambda}\,d\mu_\Lambda\right|\leq\|O\|_\infty Z_\Lambda<\infty$; division by the positive lower bound for $Z_\Lambda$ defines its normalized expectation. [given, A1, F1, F2, F3, F6, step 2.1, algebra]

3.2 The slice measures are finite and hence sigma-finite. Under full AC [A1], apply [F5] to the square-integrable kernel $K$ from step 2.2 to obtain a well-defined bounded integral operator $T$ on the complex slice $L^2$ spaces, with $\|T\|\leq\|K\|_2\leq1$. [given, A1, F3, F5, step 2.2]

4.1 Each spatial-link transformation is a left and right translation, so it preserves its Haar factor by [F1]; the rectangle formula and uniqueness in [F6] then show the product slice measure $d\mu_s$ is preserved. Under independent gauge transformations $h,h'$ of the incoming and outgoing slices, change temporal-link variables by $\eta_x\mapsto h_x\eta_x(h'_x)^{-1}$. Each such coordinate map also preserves Haar factors by [F1], and thus preserves $d\mu_V$ by [F6]. Substitution in $Q_{x,i}=\eta_xU'_{x,i}\eta_{x+\hat i}^{-1}U_{x,i}^{-1}$ cancels the neighboring $h'$ matrices and gives $Q_{x,i}\mapsto h_xQ_{x,i}h_x^{-1}$; each spatial plaquette is likewise conjugated at its base vertex. Trace invariance therefore preserves $S_t,S_s$, and the temporal integration gives $K(h'\cdot u',h\cdot u)=K(u',u)$ for every pair $(h',h)$. In particular, setting $h=1$ gives $K(h'\cdot u',u)=K(u',u)$. The integral representation in [F5], applied almost everywhere, then gives $(T\psi)(h'\cdot u')=(T\psi)(u')$ almost everywhere for each fixed $h'$, so $T\psi\in\mathcal H_{\rm phys}$. The constant function has norm one because $d\mu_s$ is a probability and is fixed by every gauge transformation, so it is a nonzero physical vector. [given, A1, F1, F3, F5, F6, step 3.2, algebra]

5.1 Each $\mathcal U(h)$ is unitary by measure preservation from step 4.1; the Hilbert structure follows from [F5] under full AC [A1]. Its fixed space is the kernel of the bounded operator $\mathcal U(h)-I$, hence is closed; the intersection over all $h$ is $\mathcal H_{\rm phys}$, so $\mathcal H_{\rm phys}$ is closed. [given, A1, F5, step 4.1, algebra]

6.1 In the cyclic product of kernels, each time slice contributes one half of $S_s(u_t)$ from the incoming factor and one half from the outgoing factor, summing to the full spatial action. Each temporal-link integral contributes exactly $e^{-S_t(u_{t+1},u_t;\eta_t)}$. Therefore the product integrand before temporal-link integration is the full $e^{-S_\Lambda}$; finite-product Tonelli [F4] gives the cyclic-kernel integral $Z_\Lambda$. For a bounded slice observable $O(u_0)$, the absolute value of its inserted integrand is bounded by $\|O\|_\infty e^{-S_\Lambda}\leq\|O\|_\infty$ on the finite product probability space [F6], so it is integrable. Applying [F4] to the positive and negative parts of its real and imaginary components justifies exchanging the integrations; the result is the corresponding unnormalized finite-volume expectation. [given, F3, F4, F6, step 2.1, step 3.1, algebra] ∎
