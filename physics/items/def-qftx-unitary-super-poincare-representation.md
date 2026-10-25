---
id: def-qftx-unitary-super-poincare-representation
kind: definition
title: Positive unitary super-Poincare representation with spectral-domain covariance
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-super-poincare-algebra-4d
  - def-complex-numbers-and-arithmetic
  - thm-complex-numbers-form-a-field
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-real-and-complex-inner-product-space
  - def-hilbert-space
  - def-countable-choice
  - def-projection-valued-measure
  - def-unbounded-linear-operator-domain-and-graph
  - def-densely-defined-closed-and-closable-operator
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - def-unbounded-integral-against-a-pvm
  - lem-unbounded-pvm-integral-is-well-defined-and-closed
  - thm-pvm-integral-is-a-star-homomorphism
  - thm-bounded-borel-pvm-integral
dependency_roles:
  def-qftx-super-poincare-algebra-4d: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  lem-unbounded-pvm-integral-is-well-defined-and-closed: mathematical-premise
  thm-pvm-integral-is-a-star-homomorphism: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
dependency_level: 1
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§§1, 2, and 3.1, printed pp. 5–6, 13–16, and 18–21; the source distinguishes canonical charges from superspace differential operators."
    - title: "S. J. Gates Jr., M. T. Grisaru, M. Roček and W. Siegel, Superspace, or One Thousand and One Lessons in Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0108200"
      locator: "§§3.2–3.3, printed pp. 62–73; the local statement adds explicit joint spectral and operator-domain data."
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice. Use the complex Hilbert-space convention that the inner product is linear in its first variable and conjugate-linear in its second. Let $\eta=\operatorname{diag}(-1,1,1,1)$, $\sigma^0=I_2$, $\sigma^1=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\sigma^2=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$, and $\sigma^3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$. Define $\operatorname{Herm}_2(\mathbb C)=\{H\in M_2(\mathbb C):H^\dagger=H\}$ and $\Phi:\mathbb R^{1,3}\to\operatorname{Herm}_2(\mathbb C)$ by $\Phi(x)=-\sigma^\mu x_\mu$. For $g\in\mathrm{SL}(2,\mathbb C)=\{g\in M_2(\mathbb C):\det g=1\}$, define $\Lambda_g$ by $\Phi(\Lambda_gx)=g\Phi(x)g^\dagger$; the real-linear map $\Phi$ is an isomorphism because $I_2,\sigma^1,\sigma^2,\sigma^3$ form a basis of $\operatorname{Herm}_2(\mathbb C)$. Since $\det g=1$, $\det(g\Phi(x)g^\dagger)=\det g\,\det\Phi(x)\,\overline{\det g}=\det\Phi(x)$; with $\det\Phi(x)=-\eta_{\mu\nu}x^\mu x^\nu$, this proves determinant and Lorentz-form preservation. These maps satisfy $\Lambda_{I_2}=I$ and $\Lambda_g\Lambda_h=\Lambda_{gh}$: applying $\Phi$ to the left side gives $gh\Phi(x)h^\dagger g^\dagger=(gh)\Phi(x)(gh)^\dagger$, and injectivity of $\Phi$ gives the equality; in particular $\Lambda_{g^{-1}}=\Lambda_g^{-1}$. Thus $g\mapsto\Lambda_g$ is a group action, so it defines the semidirect-product structure below. Congruence by $g$ preserves positive-semidefinite Hermitian matrices, so $\Lambda_g$ preserves the chosen future cone. Let $\Lambda_g^\vee$ be the dual action on covectors, $(\Lambda_g^\vee p)(x)=p(\Lambda_g^{-1}x)$. The spin-cover Poincare group is $\mathcal P=\mathrm{SL}(2,\mathbb C)\ltimes_\Lambda\mathbb R^{1,3}$ with product $(g,a)(h,b)=(gh,a+\Lambda_gb)$.

A **positive unitary super-Poincare representation** in this item is the following data. It includes a nonzero complex Hilbert space $\mathcal H$ and a bounded self-adjoint grading operator $\Gamma$ with $\Gamma^2=I$; write $\mathcal H^\pm=\ker(\Gamma\mp I)$. Give $\mathcal P=\mathrm{SL}(2,\mathbb C)\ltimes_\Lambda\mathbb R^{1,3}$ the product topology from the usual matrix topology and Euclidean topology. Let $\mathcal U(\mathcal H)=\{V\in\mathcal B(\mathcal H):V^*V=VV^*=I\}$. The data include a map $U:\mathcal P\to\mathcal U(\mathcal H)$ satisfying $U(1,0)=I$ and $U((g,a)(h,b))=U(g,a)U(h,b)$ for all $(g,a),(h,b)\in\mathcal P$, with $U(g,a)\Gamma=\Gamma U(g,a)$. Require the orbit map $(g,a)\mapsto U(g,a)\psi$ to be norm-continuous for every $\psi\in\mathcal H$; this is strong continuity. The data also include a regular projection-valued measure $E$ on the Borel subsets of the covector space $(\mathbb R^{1,3})^*$ such that

$$U(1,a)=\Phi_E(p\mapsto e^{i p(a)}),\qquad U(g,0)E(B)U(g,0)^*=E(\Lambda_g^\vee B),\qquad E(\mathcal C_+^*)=I,$$

where $\Phi_E$ is the bounded Borel PVM integral, $\mathcal C_+^*=\{p:p^0=-p_0\ge |\vec p|\}$ is the closed future cone in covector coordinates, and $p(a)=p_\mu a^\mu$. The PVM functional calculus makes every translation unitary commute with every $E(B)$. For each coordinate define the self-adjoint translation generator

$$P_\mu=p_\mu(E),\qquad D(P_\mu)=\left\{\psi\in\mathcal H:\int |p_\mu|^2\,dE_\psi(p)<\infty\right\},\qquad E_\psi(B)=\langle E(B)\psi,\psi\rangle.$$

Here $p_\mu(E)$ is the unbounded PVM integral with its truncation domain; the real-valued integral is self-adjoint under Countable Choice. Thus $P^0=\eta^{0\nu}P_\nu$ is nonnegative. The joint PVM is part of the representation data; no joint spectral measure is inferred from formal commutators on a dense domain.

For each $I,\alpha$, the supercharge $Q^I_\alpha$ is a closed densely defined operator on $\mathcal H$ and $\bar Q_{\dot\alpha I}=(Q^I_\alpha)^*$ is its actual Hilbert adjoint, with exactly the adjoint domain. Require the grading to preserve each actual charge domain and each closed charge to be odd there: $\Gamma D(Q^I_\alpha)=D(Q^I_\alpha)$ and $Q^I_\alpha\Gamma\psi=-\Gamma Q^I_\alpha\psi$ for every $\psi\in D(Q^I_\alpha)$, with the same two conditions for $(Q^I_\alpha)^*$ on $D((Q^I_\alpha)^*)$. The central generators $Z^{IJ}$ and $\bar Z_{IJ}$, which belong to the even part of the algebra, are represented by closed densely defined operators with $\bar Z_{IJ}=(Z^{IJ})^*$ as an actual Hilbert adjoint; require $\Gamma D(Z^{IJ})=D(Z^{IJ})$ and $Z^{IJ}\Gamma\psi=\Gamma Z^{IJ}\psi$ on $D(Z^{IJ})$, with the corresponding conditions for $\bar Z_{IJ}$ on its actual domain. On a common dense graded linear domain $\mathcal D$, contained in the domains of every generator product in the bracket table, the operator supercommutator is the displayed algebra bracket. In particular,

$$\{Q^I_\alpha,\bar Q_{\dot\beta J}\}=-2\sigma^\mu_{\alpha\dot\beta}P_\mu\delta^I{}_J,\qquad \{Q^I_\alpha,Q^J_\beta\}=2\epsilon_{\alpha\beta}Z^{IJ},\qquad \{\bar Q_{\dot\alpha I},\bar Q_{\dot\beta J}\}=2\epsilon_{\dot\alpha\dot\beta}\bar Z_{IJ}.$$

The domain $\mathcal D$ is invariant under those generators and under $U(\mathcal P)$. Explicitly, these restrictions define the complex-linear supertranslation representation $\rho_{\mathcal D}:\mathfrak t\to\operatorname{End}_{\mathbb C}(\mathcal D)$: it sends the abstract $p_\mu$ to $P_\mu|_{\mathcal D}$ and each abstract supercharge or central generator to its named operator restricted to $\mathcal D$. Invariance of $\mathcal D$ makes these endomorphisms, and the assumed bracket identities make $\rho_{\mathcal D}$ bracket-preserving. In particular, $\rho_{\mathcal D}(T_{\alpha\dot\beta})=\sigma^\mu_{\alpha\dot\beta}P_\mu|_{\mathcal D}$ and $-i\rho_{\mathcal D}(ip_\mu)=P_\mu|_{\mathcal D}$. The even group acts on the charge domains exactly: for every $g\in\mathrm{SL}(2,\mathbb C)$, conjugation by $U(g,0)$ sends each closed charge to the corresponding fundamental or dotted spinor transform as an equality of operators, including equality of domains. The central generators transform as Lorentz scalars, commute with translations, and commute on $\mathcal D$ with all supercharges; these relations also include their domain invariance.

For every Borel set $B\subseteq(\mathbb R^{1,3})^*$ and every charge $Q$ or $Q^*$, require the reducing-projection/domain conditions

$$E(B)D(Q)\subseteq D(Q),\qquad Q E(B)\psi=E(B)Q\psi\quad(\psi\in D(Q)),$$

and the same conditions with $Q^*$ in place of $Q$. Require also $\Gamma E(B)=E(B)\Gamma$ for every Borel $B$. In particular this supplies integrated translation covariance with domain invariance; a relation $[P_\mu,Q]=0$ on a common core alone is not substituted for it. A closed complex-linear subspace $K$ is graded when $\Gamma K=K$, equivalently $K=(K\cap\mathcal H^+)\oplus(K\cap\mathcal H^-)$. Such a subspace is invariant when $U(g,a)K=K$ for all $(g,a)\in\mathcal P$ and each charge and adjoint maps $D(Q)\cap K$ into $K$, with those intersections dense in $K$. The representation is irreducible when its only such invariant subspaces are $\{0\}$ and $\mathcal H$.

## Definition references

[Martin, §§1–4.4](https://arxiv.org/pdf/hep-ph/9709356v7).

[Gates et al., §§3.2–3.4](https://arxiv.org/pdf/hep-th/0108200).

Four-dimensional real extended super-Poincare algebra: [[def-qftx-super-poincare-algebra-4d]].

The complex numbers as $\mathbb R[x]/(x^2+1)$, with the real embedding and imaginary unit $i$: [[def-complex-numbers-and-arithmetic]].

$\mathbb C=\mathbb R[x]/(x^2+1)$ is a field, every element is uniquely $a+bi$, and every nonzero element has inverse $(a-bi)/(a^2+b^2)$: [[thm-complex-numbers-form-a-field]].

Real and imaginary parts, complex conjugation, and modulus: [[def-complex-conjugate-real-imaginary-part-and-modulus]].

Real and complex inner-product spaces and their induced length: [[def-real-and-complex-inner-product-space]].

Hilbert space: [[def-hilbert-space]].

The Axiom of Countable Choice ($\mathrm{AC}_\omega$): [[def-countable-choice]].

Projection valued measure: [[def-projection-valued-measure]].

Unbounded linear operators: domain, graph and extension: [[def-unbounded-linear-operator-domain-and-graph]].

Densely defined, closed and closable operators, and cores: [[def-densely-defined-closed-and-closable-operator]].

Adjoint of a densely defined operator: [[def-adjoint-of-a-densely-defined-unbounded-operator]].

Symmetric, self-adjoint and essentially self-adjoint operators: [[def-symmetric-self-adjoint-and-essentially-self-adjoint]].

Integral of a measurable function against a projection-valued measure: [[def-unbounded-integral-against-a-pvm]].

The unbounded PVM integral is densely defined, closed and normal: [[lem-unbounded-pvm-integral-is-well-defined-and-closed]].

Pvm integral is a star homomorphism: [[thm-pvm-integral-is-a-star-homomorphism]].

Bounded borel pvm integral: [[thm-bounded-borel-pvm-integral]].
