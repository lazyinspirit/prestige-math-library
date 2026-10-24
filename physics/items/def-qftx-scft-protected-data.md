---
id: def-qftx-scft-protected-data
kind: definition
title: Four-Dimensional SCFT and Protected Observable Data
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 8
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-scft-and-frontier
deps:
  - post-qftx-n4-super-yang-mills-model
  - def-qftx-instanton-number-and-asd-sector
  - def-axiom-of-choice
dependency_roles:
  post-qftx-n4-super-yang-mills-model: formulation-prerequisite
  def-qftx-instanton-number-and-asd-sector: formulation-prerequisite
  def-axiom-of-choice: mathematical-premise
physical_scope: "Source-qualified four-dimensional N=4 SU(2) super-Yang-Mills model and associated SCFT/index/duality data. The classical model is adopted; the quantum SCFT, path-integral measure, continuum construction, and S-duality equivalence are not proved here."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Supersymmetric Field Theory"
      url: "https://www.damtp.cam.ac.uk/user/tong/susy/susy.pdf"
      locator: "§§2.2–2.4, §4.4.2, and §6.4.2, printed pp. 23–46, 128–129, and 193–194."
    - title: "Justin Kinney, Juan Maldacena, Shiraz Minwalla, and Suvrat Raju, An Index for 4 Dimensional Super Conformal Theories"
      url: "https://arxiv.org/pdf/hep-th/0510251v1"
      locator: "§2.1, printed pp. 3–4, for radial-quantization adjoints; §3, printed pp. 12–15, equations (3.1)–(3.3); §4.1, printed pp. 16–19."
    - title: "Anton Kapustin and Edward Witten, Electric-Magnetic Duality and the Geometric Langlands Program"
      url: "https://arxiv.org/pdf/hep-th/0604151v3"
      locator: "§2.1, printed pp. 7–10, for anti-Hermitian trace and gauge-action normalization and the theta term; §2.2, printed pp. 10–12, for the coupling and explicit S-duality conjecture; §4.2, printed pp. 47–48, for the Euclidean theta term and instanton sign conventions."
    - title: "Ofer Aharony, Nathan Seiberg, and Yuji Tachikawa, Reading between the Lines of Four-Dimensional Gauge Theories"
      url: "https://arxiv.org/pdf/1305.0318v5"
      locator: "§§1.1–1.2, printed pp. 2–5, and §2.4, printed pp. 17–18, for su(2) line spectra and S/T action."
proof_strategy: definition
verification:
  precheck: pending
---

## Definition

Use natural units $c=\hbar=1$. The selected classical model is the rigid four-dimensional $\mathcal N=4$ Yang--Mills model with spacetime $M=\mathbb R^{1,3}$, metric $\eta=\operatorname{diag}(-1,1,1,1)$, and global gauge group $G=SU(2)$ rather than $SO(3)$. Its field data are one $SU(2)$ connection, six real adjoint scalars, and four adjoint Weyl fermions, with the coupling and action normalization fixed by the selected model data. The gauge coupling $g>0$ is dimensionless in four dimensions. The model's sixteen-supercharge invariance is adopted as part of that classical model; this definition does not add a proof of invariance, a quantum measure, or a continuum construction.

A four-dimensional $\mathcal N=4$ SCFT state-space datum used here consists of a $\mathbb Z_2$-graded complex Hilbert space $\mathcal H=\mathcal H^{\bar 0}\oplus\mathcal H^{\bar 1}$ with positive inner product, a common invariant dense domain $\mathcal D$, and a representation on $\mathcal D$ of the real Lie superalgebra $\mathfrak{psu}(2,2|4)$. For homogeneous matrices its bracket is the graded commutator $[X,Y]_{\mathrm s}=XY-(-1)^{|X||Y|}YX$. This algebra is the quotient by its central real line $\mathbb R\,iI_{4|4}$ of the real form of the supertrace-zero $4|4$ matrix Lie superalgebra preserving a Hermitian form of signature $(2,2)$ on the even block and positive signature on the odd block; for a block-diagonal matrix $A\oplus D$, the supertrace is $\operatorname{tr}A-\operatorname{tr}D$. Its even part is $\mathfrak{su}(2,2)\oplus\mathfrak{su}(4)_R$, with $\mathfrak{su}(2,2)\cong\mathfrak{so}(4,2)$; its odd generators are the Poincar\'e supercharges $Q,\bar Q$ and the special superconformal charges $S,\bar S$. The conformal generators include translations $P_\mu$, Lorentz transformations $M_{\mu\nu}$, dilations $D$, and special conformal transformations $K_\mu$.

Use radial quantization throughout the representation-theoretic data below. The closures of the generators have Hilbert adjoints $P_\mu^\dagger=K_\mu$, $M_{\mu\nu}^\dagger=M_{\mu\nu}$, and $D^\dagger=D$; the chosen Hermitian generators of the compact $SU(4)_R$ and Lorentz $SU(2)$ subgroups are self-adjoint. The radial Hamiltonian is $E=D$, self-adjoint with spectrum bounded below. Thus translations $P_\mu$ are not asserted to be self-adjoint on the radial Hilbert space. A unitary representation here means that the inner product is positive, the generators have the common invariant dense domain just specified, and the displayed adjoint relations hold as operator equalities. A superconformal primary is a vector annihilated by all $K_\mu$ and all special superconformal charges; its descendants are obtained by applying $P_\mu$ and Poincar\'e supercharges. A scalar superconformal primary is such a nonzero vector that is a simultaneous eigenvector of $D$ and $R$ and transforms trivially under both Lorentz $SU(2)$ factors, so $J_1=J_2=0$. This is only the representation-theoretic data used here; it does not define a local operator algebra or assert a continuum quantum field theory construction.

For the scalar-primary sector, use the selected $\mathcal N=1$ subalgebra and normalize its $U(1)_R$ generator $R$ so that the three adjoint chiral superfields have scalar charge $2/3$. Write $d_{\mathcal O}$ for the eigenvalue of the dilation generator on a scalar superconformal primary $|\mathcal O\rangle$ and $r_{\mathcal O}$ for its $R$ charge. The scalar unitarity bound in this convention is $d_{\mathcal O}\geq 3|r_{\mathcal O}|/2$; equality in the positive-charge branch is the chiral-primary shortening condition. The local conditional norm argument is given by the chiral-primary unitarity item on this page; no classification of all $\mathfrak{psu}(2,2|4)$ representations is asserted here.

For the superconformal index, use Euclidean radial quantization on a unit three-sphere, defined by writing the punctured Euclidean space as $(t,\Omega)=(\log |x|,x/|x|)\in\mathbb R\times S^3$. Let $\mathcal H(S^3)$ be the resulting graded Hilbert space, $E$ its dimensionless radial Hamiltonian, $J_1$ one chosen Lorentz $SU(2)$ Cartan generator, $F$ fermion parity, and $Q$ the selected supercharge with radial Hilbert adjoint $S=Q^\dagger$. In this normalization the superconformal algebra gives the nonnegative operator

$$\delta=2\{S,Q\}=E-2J_1-\frac32R.$$

Use the convention in which $Q$ is the component whose scalar chiral-primary branch has $d_{\mathcal O}-3r_{\mathcal O}/2$ as its anticommutator eigenvalue. For its conjugate component $\bar Q$ with radial adjoint $\bar S=\bar Q^\dagger$, write $J_2$ for the other Lorentz $SU(2)$ Cartan; its conjugate anticommutator is $2\{\bar S,\bar Q\}=E-2J_2+3R/2$. On a scalar superconformal primary both Cartan eigenvalues are zero, so these are the two scalar-primary positivity bounds used on this page.

For the index sector require the closed odd operator $D_Q=\sqrt2(Q+S)$ to be self-adjoint with $D_Q^2=\delta$ as a closed composition equality. Require also $\delta=2(SQ+QS)$ as an equality on the full intersection of the two composition domains, not merely as an extension of an identity on test vectors. Supply an orthonormal basis of simultaneous eigenvectors of $\delta,J_1',\ldots,J_k'$ and $(-1)^F$, with real energy/charge labels $(\lambda,\mathbf j)$, parity label $\varepsilon\in\{+1,-1\}$, and maximal diagonal self-adjoint domains. The joint $(\lambda,\mathbf j)$ subspace includes the basis vectors of both parity labels; write $P_{\lambda,\mathbf j}$ for its orthogonal projection. Here $\lambda\ge0$, the joint energy/charge labels form a supplied countable set, and entire gap eigenspaces, including the protected kernel, may be infinite-dimensional. Require $P_{\lambda,\mathbf j}D(T)\subset D(T)$ and $TP_{\lambda,\mathbf j}\psi=P_{\lambda,\mathbf j}T\psi$ for $T=Q,S,D_Q$ on $D(T)$. These combined-parity projections are the reducing projections; parity-specific projections are not required to commute with odd operators. The grading preserves each joint $(\lambda,\mathbf j)$ subspace and anticommutes with the odd operators on their domains. These reducing-domain conditions specify the actual spectral compatibility; common-domain commutators alone are insufficient.

For $\beta>0$ and finite real or complex chemical potentials $\boldsymbol\mu$, define the weighted exponential first on the finite joint-eigenvector span by the eigenvalues $\exp(-\beta\lambda+\sum_a\mu_a j_a)$. Require its closure to be bounded trace class for every $\beta>0$ at the chosen $\boldsymbol\mu$. This is the meaning of the exponential in the index observable, not an unspecified product of unbounded operators. Every joint block then has finite dimension: its weight is nonzero and infinitely many equal singular values would violate trace class. Infinite total gap multiplicities are permitted through infinitely many joint blocks. Define

$$\mathcal I(\beta,\boldsymbol\mu)=\operatorname{Tr}_{\mathcal H(S^3)}\left((-1)^F\exp\left[-\beta\delta+\sum_{a=1}^k\mu_aJ_a'\right]\right).$$

If the trace is not trace class, the same symbol may be used only for a specified formal series whose coefficients are defined; it does not denote a convergent partition function. The index is called protected against $\beta$-variation when the stated operator and trace hypotheses imply that positive-$\delta$ states cancel in the graded trace, as proved by the index-pair theorem on this page. A source's further claim of invariance under changing a coupling requires its own stated deformation hypotheses. A protected primary here means a named primary whose dimension is fixed by a specified shortening relation; the word alone asserts no deformation invariance.

For the quantum coupling family, use the source normalization

$$\tau=\frac{\theta}{2\pi}+\frac{4\pi i}{g^2},\qquad \operatorname{Im}\tau>0,$$

This is the physical component coupling family, not the formal Wilsonian coordinate $\tau_{\mathrm h}$ of the earlier zero-theta density bridge; no equality of the two parameter symbols is inferred. For the instanton-number statement, let $X$ be a nonempty compact, connected, oriented, smooth, Hausdorff, second-countable Riemannian four-manifold without boundary, with orientation fundamental class $[X]\in H_4(X;\mathbb Z)$. Let $\pi:P\to X$ be a smooth right principal $SU(2)$ bundle in a fixed bundle sector, meaning an isomorphism class of such bundles under smooth isomorphisms over $X$. Let $\omega$ be a smooth principal connection, and choose local sections $s_i:U_i\to P$ on an open cover $\{U_i\}$ of $X$. Set $A_i=s_i^*\omega\in\Omega^1(U_i;\mathfrak{su}(2))$ and $F_i=dA_i+\tfrac12[A_i\wedge A_i]\in\Omega^2(U_i;\mathfrak{su}(2))$. The local four-forms $\operatorname{tr}_2(F_i\wedge F_i)$ agree on overlaps by invariance of the defining-representation trace; denote the resulting global four-form by $\Omega_{\operatorname{tr}}$. On $\mathfrak{su}(2)$ use $B(U,V)=-\operatorname{tr}_2(UV)$ for $U,V\in\mathfrak{su}(2)$, and let $\Omega_B$ be the global four-form whose local expression is $B(F_i\wedge F_i)$, so $\Omega_B=-\Omega_{\operatorname{tr}}$. Assume full Axiom of Choice for the integral Chern-class comparison used here. For the associated Hermitian bundle $E=P\times_{SU(2)}\mathbb C^2$ with its standard Hermitian metric and integral second Chern class $c_2(E)\in H^4(X;\mathbb Z)$, the supplied trace-normalized instanton-number definition gives

$$k:=q_B(P,\omega)=\frac1{8\pi^2}\int_X\Omega_B=-\frac1{8\pi^2}\int_X\Omega_{\operatorname{tr}}=-\langle c_2(E),[X]\rangle\in\mathbb Z.$$

Thus this integrality statement is for the specified $SU(2)$ bundle and defining trace normalization. The physical $\theta$ angle weights its sectors by $e^{i\theta k}$. For the opposite, positive-ASD counting convention $k_{\mathrm A}=+\int_X\Omega_{\operatorname{tr}}/(8\pi^2)$ on the same oriented manifold, one has $k_{\mathrm A}=-k$ by definition. For the Euclidean continuation on $X$, let $F_\omega\in\Omega^2(X,\operatorname{ad}P)$ be the curvature represented locally by the $F_i$ above; contraction with the invariant form $B$ makes the following integral global. With real $\theta$, adopt the gauge-sector action and classical field weight

$$S_E^{\mathrm{gauge}}[\omega]=\frac{1}{g^2}\int_X B(F_\omega\wedge *_g F_\omega)-i\theta k,\qquad \text{weight }e^{-S_E^{\mathrm{gauge}}[\omega]}.$$

For a self-dual connection, $F_\omega=*_gF_\omega$ and $k=(8\pi^2)^{-1}\int_X B(F_\omega\wedge *_gF_\omega)$, so its classical action weight is $e^{-8\pi^2k/g^2+i\theta k}=q^k$. For an anti-self-dual connection, $F_\omega=-*_gF_\omega$, $k=-k_{\mathrm A}$, and $k_{\mathrm A}=(8\pi^2)^{-1}\int_X B(F_\omega\wedge *_gF_\omega)$, so its classical action weight is $e^{-8\pi^2k_{\mathrm A}/g^2-i\theta k_{\mathrm A}}=\bar q^{k_{\mathrm A}}$, where $q=e^{2\pi i\tau}$. These are classical action factors for the specified Euclidean fields; no measure or full partition-function contribution is asserted. A local ADHM/Nekrasov pole orientation and weight identification is separate data; it is not obtained by equating these signed charge symbols. The corresponding source-reported $S$ and $T$ parameter maps are $S:\tau\mapsto-1/\tau$ and $T:\tau\mapsto\tau+1$. The global form and line-operator spectrum are part of the theory data, not determined by the Lie algebra alone. In the $\mathfrak{su}(2)$ center-charge sector define $\mathcal C=\mathbb Z_2\times\mathbb Z_2$ with charge $(e,m)$ and mutual-locality pairing

$$\langle(e,m),(e',m')\rangle=em'-me'\pmod 2.$$

An electric Wilson line is parallel transport traced in a representation of the global gauge group; a magnetic 't Hooft line is specified by a magnetic singularity around the support curve; a dyonic line carries both charges. Their center-charge classes are $(e,m)\in\mathbb Z_2\times\mathbb Z_2$. An allowed center-charge set is a subgroup $L\subseteq\mathcal C$ on which the displayed pairing vanishes; the three maximal such subgroups are the line-spectrum data for $SU(2)$, $SO(3)_+$, and $SO(3)_-$. The source-reported charge maps are $S:(e,m)\mapsto(m,-e)$ and $T:(e,m)\mapsto(e+m,m)$, so these transformations may change the global form. Kapustin and Witten's 2007 source explicitly describes quantum $S$-duality as a conjecture; Aharony, Seiberg, and Tachikawa's 2013 article gives the source-reported line spectra and charge transformations, including their global-form distinctions. This dated source status is recorded without an exhaustive literature-status review, an open-problem classification, or a proof of equivalence between the theories.

## Definition references

[David Tong, *Supersymmetric Field Theory*, §§2.2–2.4, 4.4.2, and 6.4.2](https://www.damtp.cam.ac.uk/user/tong/susy/susy.pdf)

[Kinney, Maldacena, Minwalla, and Raju, *An Index for 4 Dimensional Super Conformal Theories*, §2.1, §3, and §4.1](https://arxiv.org/pdf/hep-th/0510251v1)

[Kapustin and Witten, *Electric-Magnetic Duality and the Geometric Langlands Program*, §§2.1–2.2 and §4.2](https://arxiv.org/pdf/hep-th/0604151v3)

[Aharony, Seiberg, and Tachikawa, *Reading between the Lines of Four-Dimensional Gauge Theories*, §§1.1–1.2 and 2.4](https://arxiv.org/pdf/1305.0318v5)

[[post-qftx-n4-super-yang-mills-model]]

[[def-qftx-instanton-number-and-asd-sector|Trace-normalized instanton number and self-dual sectors]]

[[def-axiom-of-choice|Full Axiom of Choice for the integral Chern-class comparison]]
