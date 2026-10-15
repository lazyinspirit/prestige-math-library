---
id: lem-qft-second-quantized-spectrum
kind: lemma
title: Second-quantized multipliers, joint spectral measure and exact domains
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-qft-fock-and-test-spaces
  - def-countable-choice
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - def-unbounded-linear-operator-domain-and-graph
  - def-densely-defined-closed-and-closable-operator
  - def-projection-valued-measure
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - def-finite-sigma-finite-and-semifinite-measures
  - def-product-measure-on-sigma-finite-spaces
  - def-completed-product-measure
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-dominated-convergence
  - thm-fatou-lemma
  - lem-nrqm-composites-hilbert-tensor-construction
  - lem-nrqm-composites-permutation-sector-projections
  - lem-qft-l2-product-tensor-identification
dependency_roles:
  def-qft-fock-and-test-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  def-finite-sigma-finite-and-semifinite-measures: mathematical-premise
  def-product-measure-on-sigma-finite-spaces: mathematical-premise
  def-completed-product-measure: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-fatou-lemma: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  lem-qft-l2-product-tensor-identification: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jan Dereziński, Mathematical Introduction to Quantum Field Theory, §§5.4–5.6 and 5.9
      url: https://www.fuw.edu.pl/~derezins/qft-lectures.pdf
      locator: Full 136-page author-hosted notes; particle sectors and second quantization, PDF pp. 35–40.
    - title: David Tong, Quantum Field Theory, §§2.2–2.4
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qft.pdf
      locator: Complete 155-page author-hosted notes; oscillator Hamiltonian, multiparticle states, number operator and formal mode discussion, printed pp. 23–25 and 29–30.
---

## Statement

Assume Countable Choice [[def-countable-choice]]. Let
$(X,\mathcal A,\mu)$ be a sigma-finite measure space and let
$\boldsymbol\omega=(\omega_1,\ldots,\omega_d):X\to\mathbb R^d$ be a
finite-valued measurable map, where $d\ge1$. Put
$H=L^2(X,\mu;\mathbb C)$ with the second-variable-linear pairing of
[[def-qft-fock-and-test-spaces]], and form the bosonic Fock space
$\mathcal F_s(H)$. For $n\ge1$, identify $H_s^{(n)}$ with the symmetric
subspace of $L^2(X^n,\overline{\mu^{\times n}};\mathbb C)$ by iterating
[[lem-qft-l2-product-tensor-identification]]. Set $X^0=\{\star\}$,
$s_0(\star)=0$, and for $n\ge1$ set
$$s_n(x_1,\ldots,x_n)=\sum_{r=1}^n\boldsymbol\omega(x_r)\in\mathbb R^d.$$
For $1\le j\le d$, define $H_j$ by multiplication by the $j$th coordinate
$s_{n,j}$ on sector $n$, with exact domain
$$D(H_j)=\left\{\Psi=(\Psi_n): \sum_{n\ge1}\int_{X^n}|s_{n,j}|^2|\Psi_n|^2\,d\overline{\mu^{\times n}}<\infty\right\}.$$
Each $H_j$ is self-adjoint, and $\mathcal D_{\rm fin}\cap D(H_j)$ is a
graph core. The joint projection-valued measure
[[def-projection-valued-measure]] on $\mathbb R^d$ is
$$(E(B)\Psi)_n=\mathbf1_{s_n^{-1}(B)}\Psi_n\quad(n\ge1),\qquad (E(B)\Psi)_0=\mathbf1_B(0)\Psi_0.$$
For $\theta\in\mathbb R^d$, let $H_\theta$ be multiplication on sector $n$
by $\theta\cdot s_n$, with its maximal square-integrability domain. Then
$$U_\theta(t)\Psi:=\bigl(e^{it\theta\cdot s_n}\Psi_n\bigr)_{n\ge0}$$
is a strongly continuous unitary group on all of Fock space, and its norm
derivative at zero exists exactly for $\Psi\in D(H_\theta)$, where it is
$iH_\theta\Psi$. The zero-particle sector is the vacuum eigenvector at joint
value $0$.

## Facts & Assumptions

**Given:** Countable Choice; a sigma-finite measure space $(X,\mathcal A,\mu)$;
a finite-valued measurable $\boldsymbol\omega:X\to\mathbb R^d$; and the
completed product measures and bosonic Fock construction.

[A1] Sigma-finite product measures exist, have the rectangle formula, and
their completions alter measurable sets only by null subsets.
[[def-finite-sigma-finite-and-semifinite-measures]]
[[def-product-measure-on-sigma-finite-spaces]]
[[def-completed-product-measure]] and uniqueness of the sigma-finite product
measure imply that finite products are independent of parenthesization and
invariant under coordinate permutations.
[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[A2] Set $X^0=\{\star\}$ with sigma-algebra $\{\varnothing,\{\star\}\}$
and unit mass $\mu_0(\{\star\})=1$. For one factor put
$\mathcal A_1=\mathcal A$ and $\mu_1=\mu$. For $n\ge2$, let
$\mathcal A^{\otimes n}$ be the recursively defined product sigma-algebra and
let $\mu_n$ be the completion of the $n$-fold product measure on it. Thus in
the Statement $\overline{\mu^{\times n}}$ means $\mu_n$ for $n\ge2$, and by
the one-factor base convention means $\mu$ for $n=1$; the vacuum component
uses $\mu_0$.

[A3] Equip $\mathbb R^d$ with its Borel sigma-algebra
$\mathcal B(\mathbb R^d)$. The map $\boldsymbol\omega$ is measurable from
$(X,\mathcal A)$ to $(\mathbb R^d,\mathcal B(\mathbb R^d))$, and the PVM
$E$ in the Statement is indexed by $\mathcal B(\mathbb R^d)$, as in
[[def-projection-valued-measure]].

[F1] The Fock space is the square-summable direct sum of its symmetric
sectors, with the second-variable-linear pairing fixed in
[[def-qft-fock-and-test-spaces]]. Each sector is the range of its orthogonal
permutation projection in a completed Hilbert tensor power for $n\ge1$;
$H_s^{(0)}=\mathbb C$.
[[def-qft-fock-and-test-spaces]]
[[lem-nrqm-composites-permutation-sector-projections]]

[F2] For $n\ge2$, the product-tensor unitary sends
$f_1\otimes\cdots\otimes f_n$ to $\prod_{r=1}^n f_r(x_r)$; iteration
identifies the full tensor power with the full completed product $L^2$ space.
For $n=1$ the identification is the identity on $L^2(X,\mu)$.
[[lem-qft-l2-product-tensor-identification]]

[F3] Coordinate permutations act unitarily, and the symmetric sector is the
range of their orthogonal averaging projection.
[[lem-nrqm-composites-hilbert-tensor-construction]]
[[lem-nrqm-composites-permutation-sector-projections]]

[F4] For a densely defined operator, its adjoint is characterized by the
inner-product identity; a symmetric operator is self-adjoint exactly when its
domain equals the adjoint domain. Use the reversed-pairing form of the
definitions for the second-variable-linear convention.
[[def-adjoint-of-a-densely-defined-unbounded-operator]]
[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]

[F5] A core for a closed operator is a subspace of its domain dense for the
graph norm $\|x\|_T=(\|x\|^2+\|Tx\|^2)^{1/2}$.
[[def-unbounded-linear-operator-domain-and-graph]]
[[def-densely-defined-closed-and-closable-operator]]

[F6] Dominated convergence and Fatou's lemma apply on each measure space
$(X^n,\mu_n)$ and on the countable disjoint union $(\Omega,\mu_\Omega)$;
these integral theorems do not require the measure spaces to be complete.
[[thm-dominated-convergence]]
[[thm-fatou-lemma]]

[F7] The complex exponential satisfies $|e^{itq}|=1$ for real $t,q$ and
$e^{itq}e^{isq}=e^{i(t+s)q}$.
[[def-complex-exponential]]
[[thm-complex-exponential-addition-and-real-extension]]

## Proof

1.1 For $n\ge1$, each sector $H_s^{(n)}$ is a closed subspace of its Hilbert
tensor power, because it is the range of an orthogonal projection [F3]; the
zero-particle sector $H_s^{(0)}=\mathbb C$ is also complete. To prove that the
Fock direct sum is complete for arbitrary $H$, let $(\Psi^{(k)})_{k\ge1}$ be
Cauchy in its square-sum norm. Each coordinate is Cauchy in the complete
sector $H_s^{(n)}$, so it has a limit $\Psi_n$. A Cauchy sequence in a normed
space is bounded (its tail lies within distance $1$ of one fixed term, and
its finite initial segment is bounded); taking limits of each finite partial sum
$\sum_{n=0}^N\|\Psi_n^{(k)}\|^2$ shows
$\sup_N\sum_{n=0}^N\|\Psi_n\|^2<\infty$, hence $\Psi=(\Psi_n)$ belongs to
the direct sum. Given $\varepsilon>0$, choose $K$ so that
$\|\Psi^{(k)}-\Psi^{(\ell)}\|\le\varepsilon$ for $k,\ell\ge K$; for fixed
$k\ge K$, take $\ell\to\infty$ in every finite coordinate sum to obtain
$\sum_{n=0}^N\|\Psi_n^{(k)}-\Psi_n\|^2\le\varepsilon^2$ for every $N$.
Taking the supremum over $N$ proves $\Psi^{(k)}\to\Psi$. Truncating the
coordinate sequence proves that $\mathcal D_{\rm fin}$ is dense.
For $n=1$ use the identity in [F2]. For $n\ge2$, iterate the product-tensor
unitary of [F2]; induction gives a unitary from $H^{\widehat\otimes n}$ to
the full completed-product $L^2(X^n,\mu_n)$. On elementary tensors the
permutation $U_\pi$ becomes coordinate permutation, so by density the
unitary intertwines $P_{s,n}$ with averaging over coordinate permutations
[F3]. Its restriction identifies $H_s^{(n)}$ with the closed symmetric
subspace. Each $s_n$ is Borel measurable by [A3], since it is a finite sum
of measurable coordinate maps, and is invariant under all permutations.
The $n=0$ sector is $\mathbb C$ by definition. [A1, A2, A3, F1, F2, F3, given, construct]

2.1 Let $\Omega=\bigsqcup_{n\ge0}X^n$ with the disjoint-union sigma-algebra and measure
$\mu_\Omega(C)=\sum_{n\ge0}\mu_n(C\cap X^n)$, using the conventions of [A2]; write $s_j$ for $s_{n,j}$ on component $n$. The Fock realization in step 1.1 is a closed subspace of $L^2(\Omega,\mu_\Omega)$ consisting of symmetric components. For $B\in\mathcal B(\mathbb R^d)$, define $E(B)$ by multiplication by $\mathbf1_{s^{-1}(B)}$. Since $s$ is invariant under permutations, this multiplier preserves the symmetric subspace. It is an orthogonal projection because its multiplier is real and idempotent; $E(\varnothing)=0$, $E(\mathbb R^d)=I$ and $E(B)E(C)=E(B\cap C)$ follow pointwise. For pairwise disjoint $B_k\in\mathcal B(\mathbb R^d)$ with union $B$, the squared norm of $E(B)\Psi-\sum_{k=0}^N E(B_k)\Psi$ is $$\sum_{n\ge0}\int_{X^n} \mathbf1_{s_n^{-1}(B\setminus\cup_{k=0}^N B_k)}|\Psi_n|^2\,d\mu_n.$$ The indicators tend pointwise to zero and the integrand is bounded by $|\Psi_n|^2$, whose total integral is $\|\Psi\|^2$; dominated convergence [F6] gives norm convergence. Hence $E$ is a strongly countably additive PVM on the Borel sets. [A2, A3, F1, F2, F3, F6, step 1.1, given, construct]

3.1 Fix a real measurable multiplier $f$ on $\Omega$ that is invariant under coordinate permutations, and define $M_f\Psi=f\Psi$ on the symmetric domain $D(M_f)=\{\Psi:f\Psi\in L^2(\Omega)\}$. This domain is dense: the symmetric cutoffs $\Psi\mathbf1_{|f|\le m}$ belong to it and converge in norm by dominated convergence. Reality of $f$ makes $M_f$ symmetric. If $\Psi\in D(M_f^*)$ and $K=M_f^*\Psi$, then for each $m$ the vector $v_m=(f\Psi-K)\mathbf1_{|f|\le m}$ is symmetric and lies in $D(M_f)$, since $f$ is bounded on its support. The adjoint identity gives $$0=\langle M_fv_m,\Psi\rangle_2-\langle v_m,K\rangle_2 =\int_{|f|\le m}|f\Psi-K|^2\,d\mu_\Omega.$$ Taking the union over $m$ shows $f\Psi=K$ almost everywhere, so $\Psi\in D(M_f)$ and $M_f^*\Psi=M_f\Psi$. Conversely, for every $\Psi\in D(M_f)$, reality of $f$ gives the adjoint identity against every domain vector, so $M_f^*\Psi=M_f\Psi$. Therefore $M_f$ is self-adjoint on its maximal multiplication domain. Apply this to $f=s_j$ to obtain each self-adjoint $H_j$, and to $f=\theta\cdot s$ to obtain $H_\theta$. [F4, F6, step 2.1, given, algebra]

4.1 For each $j$, the multiplier $s_j$ defines $H_j$ with the displayed component domain because the squared norm of $H_j\Psi$ is exactly $\sum_n\int|s_{n,j}|^2|\Psi_n|^2d\mu_n$; the vacuum term is zero. For $\theta$, the same calculation gives $D(H_\theta)=\{\Psi:\sum_n\int|\theta\cdot s_n|^2|\Psi_n|^2d\mu_n<\infty\}$. The PVM from step 2.1 has coordinate functions $s_j$, so its indicators give the joint spectral projections for all the $H_j$ and its scalar-coordinate multipliers have these exact domains. Truncating a vector in any such domain after sector $N$ makes both its norm tail and operator-image tail tend to zero; hence $\mathcal D_{\rm fin}\cap D(H_j)$ and $\mathcal D_{\rm fin}\cap D(H_\theta)$ are graph cores. [F5, step 2.1, step 3.1, given, algebra]

5.1 By [F6], $U_\theta(t)$ is unitary and $U_\theta(t+s)=U_\theta(t)U_\theta(s)$ on each component, including the vacuum where the phase is one. For any $\Psi$, the squared norm of $U_\theta(t)\Psi-U_\theta(t_0)\Psi$ is the integral over $\Omega$ of $|e^{it\theta\cdot s}-e^{it_0\theta\cdot s}|^2|\Psi|^2$; the integrand tends pointwise to zero and is bounded by $4|\Psi|^2$, so [F6] proves strong continuity. If $\Psi\in D(H_\theta)$, the pointwise difference quotient tends to $i(\theta\cdot s)\Psi$ and its squared error is bounded by $4|\theta\cdot s|^2|\Psi|^2$; dominated convergence proves norm convergence. Conversely, if the difference quotient has a norm limit as $t\to0$, take $t_m=1/m$. Fatou's lemma [F6] on the disjoint union gives $$\sum_n\int|\theta\cdot s_n|^2|\Psi_n|^2d\mu_n \le\liminf_m\left\|\frac{U_\theta(t_m)\Psi-\Psi}{t_m}\right\|^2<\infty,$$ so $\Psi\in D(H_\theta)$; the forward calculation identifies the limit as $iH_\theta\Psi$. This proves the exact derivative criterion and all claims. [F6, F7, step 3.1, step 4.1, given, algebra] ∎ 
