---
id: lem-nrqm-photons-transverse-fock-total-momentum
kind: lemma
domain: mathematics
title: "Total momentum multipliers on transverse symmetric Fock sectors"
status: published
origin: session
dependency_level: 5
deps:
  - def-countable-choice
  - def-axiom-of-choice
  - def-hilbert-space
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-projection-valued-measure
  - def-unbounded-integral-against-a-pvm
  - lem-nrqm-composites-hilbert-tensor-construction
  - lem-nrqm-composites-bounded-tensor-maps
  - lem-nrqm-composites-permutation-sector-projections
  - lem-nrqm-composites-euclidean-l2-product-unitary
  - thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators
  - thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction
  - lem-nrqm-observables-l2-multiplication-spectral-measure
  - lem-unbounded-pvm-integral-is-well-defined-and-closed
  - thm-bounded-borel-pvm-integral
  - thm-monotone-convergence-for-the-integral
  - lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus
  - lem-nrqm-fock-and-equilibrium-fock-sector-projections
dependency_roles:
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  lem-nrqm-composites-euclidean-l2-product-unitary: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction: mathematical-premise
  lem-nrqm-observables-l2-multiplication-spectral-measure: mathematical-premise
  lem-unbounded-pvm-integral-is-well-defined-and-closed: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus: mathematical-premise
  lem-nrqm-fock-and-equilibrium-fock-sector-projections: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes 2017/18),
        Section 1.4: second-quantized one-particle operators; transverse
        signed-multiplier domains proved locally here"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenote\
        s2017AQT.pdf"
---

## Statement

Assume Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]), carrying the actual hypotheses of the multiplier and Fock suppliers. Fix a positive real parameter $\hbar$ and let
$$G=L^2(\mathbb R^3;\mathbb C^3),\qquad \mathfrak h=\{f\in G:k\cdot f(k)=0\text{ for a.e. }k\},\qquad \Pi(k)=I-|k|^{-2}kk^{\mathsf T}\ (k\ne0),\quad \Pi(0)=0.$$
Use the Hilbert tensor powers of [[lem-nrqm-composites-hilbert-tensor-construction]], the symmetric projections $P_+^{(n)}$ of [[lem-nrqm-composites-permutation-sector-projections]], and the Fock space of [[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]], with sectors $\mathfrak H_n=\operatorname{ran}P_+^{(n)}\subset\mathfrak h^{\otimes n}$ for $n\ge1$ and $\mathfrak H_0=\mathbb C$.

For $n\ge1$ there is a canonical isometric embedding
$$I_n:\mathfrak H_n\longrightarrow L_n:=L^2(\mathbb R^{3n};(\mathbb C^3)^{\otimes n}),$$
obtained by inclusion into $G^{\otimes n}$ followed by the iterated finite-component Euclidean product unitary of [[lem-nrqm-composites-euclidean-l2-product-unitary]]. On elementary tensors before symmetrization that unitary sends $f_1\otimes\cdots\otimes f_n$ to $(k_1,\ldots,k_n)\mapsto f_1(k_1)\otimes\cdots\otimes f_n(k_n)$. Write $K_n=I_n\mathfrak H_n$, a closed subspace. For $j\in\{1,2,3\}$ put
$$p_{j,n}(k_1,\ldots,k_n)=\hbar\sum_{i=1}^n(k_i)_j,\qquad D(P_{j,n})=\{u\in\mathfrak H_n:p_{j,n}I_nu\in L_n\},\qquad P_{j,n}u=I_n^{-1}(p_{j,n}I_nu).$$
The displayed product always lies in $K_n$ whenever it lies in $L_n$, so this action is well-defined. Set $P_{j,0}=0$ on $\mathbb C$. Then:

**(a) Sector self-adjointness and spectral measure.** Every $P_{j,n}$ is densely defined and self-adjoint on its sector. For Borel $B\subset\mathbb R$, its regular spectral PVM is
$$E_{j,n}(B)u=I_n^{-1}(\mathbf1_{p_{j,n}^{-1}(B)}I_nu)\quad(n\ge1),\qquad E_{j,0}(B)=\mathbf1_B(0)I_{\mathbb C}.$$
In particular $D(P_{j,n})$ is exactly the square-integrability domain of the signed summed multiplier, without requiring the individual summands to be square integrable separately.

**(b) Total momentum.** On $F(\mathfrak h)=\bigoplus_{n\ge0}\mathfrak H_n$ define
$$D(P_j)=\{\psi:\psi_n\in D(P_{j,n})\text{ for every }n,\ \sum_{n\ge0}\|P_{j,n}\psi_n\|^2<\infty\},\qquad (P_j\psi)_n=P_{j,n}\psi_n.$$
Then $P_j$ is densely defined and self-adjoint on precisely this domain. Equivalently its domain is given by
$$\sum_{n\ge1}\int_{\mathbb R^{3n}}|p_{j,n}(k)|^2\|I_n\psi_n(k)\|^2\,d^{3n}k<\infty.$$
Its regular spectral PVM is the sectorwise direct sum
$$E_j(B)=\bigoplus_{n\ge0}E_{j,n}(B),\qquad P_j=\int_{\mathbb R}t\,dE_j(t).$$
For every $\psi\in F(\mathfrak h)$, without a domain assumption, its scalar spectral measure is
$$\langle E_j(B)\psi,\psi\rangle=\mathbf1_B(0)|\psi_0|^2+\sum_{n\ge1}\int_{p_{j,n}^{-1}(B)}\|I_n\psi_n(k)\|^2\,d^{3n}k.$$
Thus it is the sum of the sectorwise push-forward measures and the vacuum atom. The vacuum belongs to $D(P_j)$ and $P_j\Omega=0$. On the one-particle sector the operator is the restricted multiplier $f\mapsto\hbar k_jf$ on its maximal square-integrability domain.

These are mathematical operator/domain statements. They adopt no photon assignment, probability law, dispersion relation, dynamical law or relation between momentum, energy and number operators.

## Facts & Assumptions

**Slot convention.** For $\ell\ge1$, $S_\ell$ acts on $\{0,\dots,\ell-1\}$ as in [[lem-nrqm-composites-permutation-sector-projections]]. On one-based tuple positions use $\widehat{\pi}(k):=1+\pi(k-1)$ for $1\le k\le\ell$. Conjugation by $k\mapsto k-1$ gives $\widehat{\pi\sigma}=\widehat{\pi}\circ\widehat{\sigma}$ and $\widehat{\pi^{-1}}=\widehat{\pi}^{-1}$; thus the supplier's tensor action becomes $U_\pi(v_1\otimes\cdots\otimes v_\ell)=v_{\widehat{\pi}^{-1}(1)}\otimes\cdots\otimes v_{\widehat{\pi}^{-1}(\ell)}$. The parameters of $U_\pi$ and $\operatorname{sgn}(\pi)$ remain canonical zero-based permutations.

**Given:** CC and AC; $\hbar>0$; $G,\mathfrak h,\Pi$, the tensor powers, sectors and $F(\mathfrak h)$ as above; $j\in\{1,2,3\}$.

[F1] The completed tensor construction gives density of elementary tensors and the product inner product; bounded tensor maps have their product/adjoint identities. The finite-component Euclidean product unitary has exactly the elementary product formula and is onto ([[lem-nrqm-composites-hilbert-tensor-construction]], [[lem-nrqm-composites-bounded-tensor-maps]] clauses (a)–(c), [[lem-nrqm-composites-euclidean-l2-product-unitary]], Statement and proof 1.1–3.1).

[F2] The permutation unitary acts by $U_\pi(f_1\otimes\cdots\otimes f_n)=f_{\widehat{\pi}^{-1}(1)}\otimes\cdots\otimes f_{\widehat{\pi}^{-1}(n)}$; its average is the orthogonal projection on invariant tensors ([[lem-nrqm-composites-permutation-sector-projections]] clauses (a)–(c)).

[F3] A real finite-valued Euclidean scalar multiplier is self-adjoint on its maximal multiplication domain ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clause (a)). Its regular spectral PVM is multiplication by the inverse-image indicators ([[lem-nrqm-observables-l2-multiplication-spectral-measure]] clauses (b),(c)). Finite vector components follow by finite orthogonal sums; a restriction to a closed transverse/symmetric subspace will be proved below, not inferred from an unstated restriction clause of the real-multiplier supplier.

[F4] Bounded PVM integrals are linear and satisfy the norm estimate. The integral of a real Borel function is self-adjoint on exactly its square-integrability domain and is the limit of bounded spectral truncations ([[thm-bounded-borel-pvm-integral]], [[def-unbounded-integral-against-a-pvm]], [[lem-unbounded-pvm-integral-is-well-defined-and-closed]], Statement). A self-adjoint operator has a unique regular representing PVM ([[lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus]], Statement and proof 6.2).

[F5] $F(\mathfrak h)$ is the Hilbert direct sum of the symmetric sectors, with norm square $\sum_n\|\psi_n\|^2$ and mutually orthogonal sector projections whose strong sum is $I$ ([[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]] clauses (a)-(d), [[lem-nrqm-fock-and-equilibrium-fock-sector-projections]]).

## Proof

**Given:** The data of the statement and [F1]–[F5].

1.1 [Explicit transverse tensor embedding] The measurable matrices $\Pi(k)$ are orthogonal projections with norm at most one. Hence $M_\Pi$ is a bounded orthogonal projection on $G$, with range exactly $\mathfrak h$, because $\Pi(k)f(k)=f(k)$ is equivalent to $k\cdot f(k)=0$ off the null point $0$. In particular $\mathfrak h$ is closed and Hilbert. The inclusion $\mathfrak h\to G$ induces an isometric inclusion of every finite tensor power: its elementary-tensor inner products agree by [F1], and density extends that isometry to the completion. Its closed range is the range of $(M_\Pi)^{\otimes n}$, since the latter projection maps the dense elementary span onto elementary transverse tensors. Iterating [F1] with dimensions $3,3(n-1)$ and finite components gives a unitary $\Theta_n:G^{\otimes n}\to L_n$ with the stated product formula. Under it $(M_\Pi)^{\otimes n}$ becomes multiplication by $Q_n(k)=\Pi(k_1)\otimes\cdots\otimes\Pi(k_n)$: both bounded maps agree on all elementary tensors, hence on their dense span. No undocumented product-measure or tensor-subspace identification is used. [given, F1, construct, algebra]

2.1 [Symmetry includes polarization permutations] Define the unitary $\tau_\pi$ on $(\mathbb C^3)^{\otimes n}$ by the same tensor-factor permutation as in [F2]. The conjugated ambient permutation is $(C_\pi u)(k_1,\ldots,k_n)=\tau_\pi u(k_{\widehat{\pi}(1)},\ldots,k_{\widehat{\pi}(n)})$: substitution into the elementary product formula verifies this identity, and the bounded maps agree everywhere by density. Its average $S_n=(n!)^{-1}\sum_\pi C_\pi$ is the orthogonal symmetry projection. The tensor projection $(M_\Pi)^{\otimes n}$ commutes with every ambient permutation, as is verified on elementary tensors, so $M_{Q_n}$ commutes with $S_n$. Their product $R_n=M_{Q_n}S_n$ is an orthogonal projection, whose range is exactly the image of the symmetric transverse tensor sector. Thus $K_n=\operatorname{ran}R_n$ and $I_n=\Theta_n$ restricted to that sector is an isometry onto $K_n$. Every bounded scalar multiplier $b(p_{j,n})$ commutes with $M_{Q_n}$ pointwise and with $C_\pi$, since $p_{j,n}$ is invariant under permutations; therefore it commutes with $R_n$ and preserves $K_n$. [step 1.1, F1, F2, algebra]

3.1 [Sector PVM and regularity] The scalar function $p=p_{j,n}$ is real, measurable and finite on $\mathbb R^{3n}$. By [F3], multiplication by $\mathbf1_{p^{-1}(B)}$ is its spectral projection in each scalar component of $L_n$; the finite component sum is a regular PVM there. It commutes with $R_n$ by step 2.1. Its restriction to $K_n$, transported by $I_n$, is therefore an orthogonal projection for every $B$, with total projection $I$, product law and strong countable additivity inherited from the ambient PVM. Its scalar measure at $u$ is exactly $\int_{p^{-1}(B)}\|I_nu\|^2$, the sum of its finite component measures, so it is regular and is the push-forward of $\|I_nu\|^2d^{3n}k$. This defines the sector PVM $E_{j,n}$. For $n=0$, the indicated atom at zero is a regular PVM on $\mathbb C$. [step 2.1, F3, algebra]

4.1 [Exact signed sector domain and self-adjointness] For the PVM of step 3.1, push-forward integration gives $\int t^2\,dE_{j,n,u}(t)=\int |p(k)|^2\|I_nu(k)\|^2\,d^{3n}k$: it holds first for indicators and simple nonnegative functions and then for increasing nonnegative simple approximations. By [F4], $\int t\,dE_{j,n}(t)$ is densely defined and self-adjoint on exactly the displayed multiplier domain. For bounded Borel $b$, indicator/simple-function approximation and the norm estimate of [F4] show that $b(E_{j,n})$ is the restriction of multiplication by $b(p)$, transported by $I_n$. In particular the defining truncations for the identity function act as $p\mathbf1_{|p|\le L}I_nu$. If $pI_nu\in L_n$, these converge to $pI_nu$ in norm, because the integrable squared tail $\int_{|p|>L}|p|^2\|I_nu\|^2$ tends to zero. Every truncation lies in the closed $K_n$, so its limit lies there also. Thus the PVM integral is exactly $P_{j,n}$ with the stated action and domain. Spectral uniqueness [F4] identifies $E_{j,n}$ as its spectral PVM; $P_{j,0}=0$ is the corresponding vacuum operator. The sign of $p$ played no role in this squared-integrability argument. [step 2.1, step 3.1, F4, algebra]

5.1 [The Fock PVM and push-forward sum] For each Borel $B$, define $E_j(B)=\bigoplus_{n\ge0}E_{j,n}(B)$. It is a bounded orthogonal projection with the product law and total projection $I$. Strong countable additivity follows sectorwise and then on the full sum: first retain finitely many sectors, where convergence is already known, and bound the omitted squared tail by $\sum_{n>N}\|\psi_n\|^2$, which tends to zero uniformly in the partial union, using [F5]. Its scalar measure at $\psi$ is [step 3.1, step 4.1, F3, F5, algebra]
$$E_{j,\psi}(B)=\mathbf 1_B(0)|\psi_0|^2+\sum_{n\ge1}\int_{p_{j,n}^{-1}(B)}\|I_n\psi_n(k)\|^2\,d^{3n}k.$$
This is a finite Borel measure of mass $\|\psi\|^2$. It is regular: given $\epsilon>0$, choose finitely many sector measures leaving total tail mass below $\epsilon/2$; approximate the set from inside by compact sets for those finitely many regular measures and take their finite union, or from outside by open sets and take their finite intersection, allocating the remaining error among those measures. The vacuum measure is supported on the compact singleton $\{0\}$ and is regular. Thus $E_j$ is a regular PVM and the scalar push-forward formula in (b) holds. [step 3.1, step 4.1, F3, F5, algebra]

6.1 [Total operator, exact domain and self-adjointness] For the scalar measure of step 5.1, nonnegative simple approximation and monotone convergence give [step 3.1, step 4.1, step 5.1, F4, F5, algebra]
$$\int_{\mathbb R}t^2\,dE_{j,\psi}(t)=\sum_{n\ge1}\int_{\mathbb R^{3n}}|p_{j,n}(k)|^2\|I_n\psi_n(k)\|^2\,d^{3n}k=\sum_{n\ge1}\|P_{j,n}\psi_n\|^2,$$
with the vacuum contribution zero; the monotone convergence step uses [[thm-monotone-convergence-for-the-integral]]. By [F4], $A_j:=\int t\,dE_j(t)$ is self-adjoint on the domain where this second moment is finite, exactly the domain $D(P_j)$ in (b). For bounded Borel functions, the PVM integral acts sectorwise: this holds for indicators by the definition of $E_j$, for simple functions by linearity, and for bounded Borel functions by bounded approximation and the norm estimate in [F4]. In particular the truncations $t\mathbf 1_{\{|t|\le L\}}(E_j)$ act on sector $n$ as the corresponding truncations of $P_{j,n}$. On $D(P_j)$ these converge to $P_{j,n}\psi_n$ in each sector, and their squared total error is bounded by $\sum_n\|P_{j,n}\psi_n\|^2$; truncating the sector tail and then taking $L\to\infty$ in the finitely many retained sectors proves convergence in $F(\mathfrak h)$. Hence $A_j\psi=(P_{j,n}\psi_n)_n=P_j\psi$ on precisely $D(P_j)$. This proves self-adjointness of the displayed total operator directly, with the vacuum sector $P_{j,0}=0$ included, and identifies $E_j$ as its spectral PVM by uniqueness. [step 3.1, step 4.1, step 5.1, F4, F5, algebra]

7.1 [Vacuum, one-particle restriction and scope] The vacuum has only its zeroth component, where $P_{j,0}=0$, so it belongs to $D(P_j)$ and $P_j\Omega=0$. For $n=1$, $\Theta_1=I_G$ and the symmetric projection is the identity, so the sector construction gives exactly the maximal restricted multiplier $f\mapsto\hbar k_jf$ on $\mathfrak h$. Steps 1.1–6.1 establish all tensor embeddings, sector domains, self-adjointness and PVM formulas without importing any physical radiation postulate. CC and AC are the declared hypotheses of the actual mathematical suppliers; no positivity, dispersion relation, commutation between distinct unbounded observables or physical law was used. [step 1.1, step 2.1, step 4.1, step 5.1, step 6.1, algebra] ∎

