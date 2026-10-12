---
id: pthm-nrqm-many-body-one-body-readout-law
aliases: [nrqm-many-body-one-body-readout-law]
kind: physics-theorem
domain: physics
title: "The one-body readout law: sector means of summed bounded one-particle quantities and their reduced forms"
status: draft
origin: pipeline
dependency_level: 11
deps: [def-nrqm-many-body-framework-one-body-reduced-operator, lem-nrqm-many-body-one-body-reduction-trace-law, def-nrqm-identical-particles-framework-species-sectors-and-preparations, def-nrqm-identical-particles-framework-orbital-occupation-model, def-nrqm-observables-framework-observable-and-outcome-law, pthm-nrqm-observables-preparation-moments, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-identical-particles-and-spin, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-rank-one-operator-calculus, thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation, lem-nrqm-composites-permutation-sector-projections, lem-nrqm-composites-hilbert-tensor-construction, thm-cyclicity-of-the-trace, prop-trace-is-linear, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-countable-choice, def-axiom-of-choice, def-nrqm-framework-quantities-and-units]
dependency_roles:
  def-nrqm-many-body-framework-one-body-reduced-operator: formulation-prerequisite
  lem-nrqm-many-body-one-body-reduction-trace-law: mathematical-premise
  def-nrqm-identical-particles-framework-species-sectors-and-preparations: formulation-prerequisite
  def-nrqm-identical-particles-framework-orbital-occupation-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  pthm-nrqm-observables-preparation-moments: physical-result
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  thm-cyclicity-of-the-trace: mathematical-premise
  prop-trace-is-linear: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The conditional one-body readout law of the declared finite-mode many-body model: for a bounded self-adjoint one-particle quantity the summed sector operator is an assigned sharp observable, its mean in every declared sector preparation exists and is N times the pairing of the one-body reduced preparation with the quantity, and for declared Slater and orthonormal-mode symmetric preparations the reduced preparation is the equal-weight mixture of the occupied modes. The theorem is conditional on P1, P2 and P6, the adopted finite-mode idealization and the declared preparation; it asserts no measured mean, no individual-particle property, no separability of the sector state and no spatial (infinite-mode) reduction."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 6.2-6.3 and 10.1 printed pages 116-126 and 226-230 (PDF pages 124-134 and 234-238): local operators on a composite system, the reduced density operator of one factor, and identical-particle exchange symmetry with the two-particle example"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Section 1.4.2 pp. 8-10: single-particle operators as sums over particle labels (46)-(48) and their second-quantised form (49)-(52)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate P1
([[post-nrqm-framework-state-and-composition]]), the observable and
probability postulate P2 ([[post-nrqm-framework-observable-and-probability]])
and the identical-particle and spin postulate P6
([[post-nrqm-framework-identical-particles-and-spin]]) in the readings of
[[def-nrqm-identical-particles-framework-species-sectors-and-preparations]]
and [[def-nrqm-observables-framework-observable-and-outcome-law]], and assume
the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]) as the choice hypotheses
of the cited tensor, permutation and trace suppliers. Work in the finite-mode
realization of [[def-nrqm-many-body-framework-one-body-reduced-operator]]:
one-particle space $K$ of finite dimension $d\ge1$ with modes
$(f_1,\dots,f_d)$, integer $N\ge1$ with nonzero sector space
$\mathfrak H_N^\sigma=\operatorname{ran}P_\sigma^{(N)}$, and the slot
operators $O^{(i)}$, sum $\Sigma(O)$ and one-body reduced preparation
$\gamma_\rho$ of that definition. Let $O\in\mathcal B(K)$ be self-adjoint
with declared unit $u_O$ in the sense of
[[def-nrqm-framework-quantities-and-units]]. Then:

(a) *the readout is an assigned observable*: the sector operator
$A_O=\Sigma(O)|_{\mathfrak H_N^\sigma}$ is bounded and self-adjoint, so the
pair $(A_O,u_O)$ is an assigned sharp observable of the sector in the sense
of [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (a);

(b) *the mean law*: for every declared sector preparation $\rho$ the mean of
the outcome law of $(A_O,u_O)$ in $\rho$ exists and equals
$$m_\rho(A_O)=N\operatorname{tr}\bigl(\gamma_\rho\,O\bigr);$$

(c) *product-type preparations*: if $u_1,\dots,u_N\in K$ are pairwise
orthonormal and $\rho=T_{\Psi,\Psi}$ with $\Psi:=S(u_1,\dots,u_N)$ the Slater
vector of [[thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation]]
clause (a) for $\sigma=-$, or $\Psi:=\sqrt{N!}\,P_+^{(N)}(u_1\otimes\cdots\otimes u_N)$
for $\sigma=+$ (both unit vectors of the sector), then
$\gamma_\rho=N^{-1}\sum_{j=1}^NT_{u_j,u_j}$ and
$$m_\rho(A_O)=\sum_{j=1}^N\langle Ou_j,u_j\rangle;$$

(d) *scope*: the theorem is conditional on the adopted sector of P6, on the
declared finite-mode idealization and on the declared preparation; it asserts
no measured mean, no property of an individual labelled particle, no
separability of $\rho$, no result for spatial infinite-mode models, and no
sampling or detection model. The equality $m_\rho(A_O)=N\operatorname{tr}(\gamma_\rho O)$
is exact within the model.

## Facts & Assumptions

**Given:** the finite-mode sector data of the statement, the self-adjoint $O\in\mathcal B(K)$ with unit $u_O$, and a declared sector preparation $\rho$.

[F1] **Sector vocabulary.** $\mathfrak H_N^\sigma=\operatorname{ran}P_\sigma^{(N)}$ is a closed subspace of $K^{\otimes N}$; every permutation unitary $U_\pi$ preserves it and acts there as the scalar $\operatorname{sgn}_\sigma(\pi)$; a declared sector preparation is a density operator on $\mathfrak H_N^\sigma$ ([[def-nrqm-identical-particles-framework-species-sectors-and-preparations]] clauses (c)-(d), [[lem-nrqm-composites-permutation-sector-projections]] clause (c)).

[F2] **Slot operators and reduction.** For $O\in\mathcal B(K)$ and $i\in\{1,\dots,N\}$ the slot operator $O^{(i)}$ satisfies $O^{(i)}(v_1\otimes\cdots\otimes v_N)=v_1\otimes\cdots\otimes Ov_i\otimes\cdots\otimes v_N$, is bounded with $\|O^{(i)}\|\le\|O\|$, and $(O^{(i)})^*=(O^*)^{(i)}$; $\Sigma(O)=\sum_iO^{(i)}$ commutes with every $U_\pi$ and with $P_\sigma^{(N)}$, preserves the sectors, and for every sector preparation $\rho$ with zero extension $\widetilde\rho$ one has $\operatorname{tr}(\widetilde\rho\,\Sigma(O))=N\operatorname{tr}(\gamma_\rho O)$, where $\gamma_\rho$ is a density operator on $K$ ([[lem-nrqm-many-body-one-body-reduction-trace-law]] clauses (a), (c), (d), (e)).

[F3] **Observable reading and moments.** An assigned sharp observable $(A,u_A)$ has outcome law $\mu^A_\rho(B)=\operatorname{tr}(\rho E_A(B))$; for a bounded self-adjoint $A$ and every preparation $\rho$ the mean exists and equals $\operatorname{tr}(\rho A)$, and for a pure preparation of a unit vector $\psi$ it equals $\langle A\psi,\psi\rangle$ ([[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (a), (b), [[pthm-nrqm-observables-preparation-moments]] clauses (a), (d), [[prop-trace-is-linear]], [[thm-cyclicity-of-the-trace]]).

[F4] **Slater and symmetric product vectors.** For pairwise orthonormal $u_1,\dots,u_N$ the Slater vector $S(u_1,\dots,u_N)=N!^{-1/2}\sum_{\sigma\in S_N}\operatorname{sgn}(\sigma)u_{\sigma(1)}\otimes\cdots\otimes u_{\sigma(N)}$ has norm one and equals $\sqrt{N!}\,P_-^{(N)}(u_1\otimes\cdots\otimes u_N)$ ([[thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation]] clauses (a), (b)); setting $x:=u_1\otimes\cdots\otimes u_N$, orthonormality gives $\langle P_+^{(N)}x,x\rangle=\frac1{N!}\sum_{\sigma\in S_N}\langle U_\sigma x,x\rangle=\frac1{N!}\langle x,x\rangle=\frac1{N!}$, so $\Psi:=\sqrt{N!}\,P_+^{(N)}x$ is a unit vector of the symmetric sector with $P_+^{(N)}\Psi=\Psi$ ([[lem-nrqm-composites-permutation-sector-projections]] clauses (b), (c), [[lem-nrqm-composites-hilbert-tensor-construction]]).

[F5] **Rank-one pairing.** $T_{u,v}x=\langle x,v\rangle u$ is bounded with $\operatorname{tr}(T_{u,v})=\langle u,v\rangle$ and $T_{u,v}^*=T_{v,u}$; the map $(u,v)\mapsto T_{u,v}$ is linear in $u$ and conjugate-linear in $v$ ([[lem-nrqm-composites-rank-one-operator-calculus]] clauses (a), (b), (c)).

## Proof

**Proof technique:** direct; read the sector sum as a bounded observable, apply the supplied reduction identity, and evaluate the product-type cases by orthonormality of the mode family.

**Given:** the data of the statement and [F1]-[F5].

1.1 [The readout is a bounded self-adjoint sector observable] By [F2] each slot operator is bounded with $\|O^{(i)}\|\le\|O\|$, so $\Sigma(O)$ is bounded with $\|\Sigma(O)\|\le N\|O\|$; since $O=O^*$, [F2] gives $O^{(i)*}=O^{(i)}$ for every $i$ and $\Sigma(O)^*=\Sigma(O)$. By [F2] $\Sigma(O)$ commutes with $P_\sigma^{(N)}$, hence preserves $\mathfrak H_N^\sigma$ and its orthogonal complement, and the restriction $A_O=\Sigma(O)|_{\mathfrak H_N^\sigma}$ is a bounded self-adjoint operator on the sector space; with the unit $u_O$ the pair $(A_O,u_O)$ is therefore an assigned sharp observable in the sense of [F3]. [F2, F3, def. bounded, algebra]

1.2 [Reduced preparation of product-type states] Let $u_1,\dots,u_N$ be pairwise orthonormal, put $x:=u_1\otimes\cdots\otimes u_N$ and let $\Psi$ be the unit vector of clause (c) for $\sigma=-$ or $\sigma=+$; both satisfy $P_\sigma^{(N)}\Psi=\Psi$ by [F4], and both equal $\sqrt{N!}\,P_\sigma^{(N)}x$. Since $\Sigma(O)$ commutes with $P_\sigma^{(N)}$ and $P_\sigma^{(N)}$ is self-adjoint, $\langle\Sigma(O)\Psi,\Psi\rangle=N!\langle\Sigma(O)P_\sigma^{(N)}x,P_\sigma^{(N)}x\rangle=N!\langle P_\sigma^{(N)}\Sigma(O)P_\sigma^{(N)}x,x\rangle=N!\cdot\frac1{N!}\sum_{\tau\in S_N}\operatorname{sgn}_\sigma(\tau)\langle\Sigma(O)U_\tau x,x\rangle$, with $\operatorname{sgn}_+=1$ and $\operatorname{sgn}_-=\operatorname{sgn}$. For fixed $\tau$, $\langle\Sigma(O)U_\tau x,x\rangle=\sum_{i=1}^N\langle Ou_{\tau^{-1}(i)},u_i\rangle\prod_{k\ne i}\langle u_{\tau^{-1}(k)},u_k\rangle$ by [F1] and the elementary-tensor pairing, and orthonormality makes every factor $\delta_{\tau^{-1}(k),k}$ vanish unless $\tau=\mathrm{id}$; hence only the identity permutation contributes and $\langle\Sigma(O)\Psi,\Psi\rangle=\sum_{i=1}^N\langle Ou_i,u_i\rangle$. [F1, F2, F4, algebra]

2.1 [The mean law] Let $\rho$ be a declared sector preparation with zero extension $\widetilde\rho$ and let $A_O$ be the readout of step 1.1. Since $A_O$ is bounded, [F3] gives $m_\rho(A_O)=\operatorname{tr}(\rho A_O)$, and by steps 1.1 and [F2], $\operatorname{tr}(\rho A_O)=\operatorname{tr}(\widetilde\rho\,\Sigma(O))=N\operatorname{tr}(\gamma_\rho O)$. This proves (a) and (b). [F2, F3, step 1.1, algebra]

3.1 [Product-type means and the reduced preparation] In the situation of step 1.2, the mean is $m_\rho(A_O)=\langle\Sigma(O)\Psi,\Psi\rangle=\sum_{j=1}^N\langle Ou_j,u_j\rangle$, while the mean law of step 2.1 gives $m_\rho(A_O)=N\operatorname{tr}(\gamma_\rho O)$. Testing the resulting identity $\operatorname{tr}(\gamma_\rho O)=N^{-1}\sum_{j=1}^N\langle Ou_j,u_j\rangle$ against $O=T_{u,v}$ and using [F5], $\operatorname{tr}(\gamma_\rho T_{u,v})=\langle\gamma_\rho u,v\rangle$ and $N^{-1}\sum_j\langle T_{u,v}u_j,u_j\rangle=N^{-1}\sum_j\langle u_j,v\rangle\langle u,u_j\rangle$; the identity for all $u,v$ therefore gives $\gamma_\rho=N^{-1}\sum_{j=1}^NT_{u_j,u_j}$, since two endomorphisms of a finite-dimensional space with equal pairings against every rank-one operator are equal. This proves (c). [F5, step 1.2, step 2.1, algebra]

4.1 [Conclusion and scope] Steps 1.1-2.1 prove (a) and (b) and step 3.1 proves (c). Every quantity is a spectral datum of the declared finite-mode sector model and the argument used only P1, P2, P6 and the finite-dimensional tensor and trace calculus; no measured mean, individual-particle property, separability statement or spatial reduction entered, which is (d). [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- **The factor $N$ and the normalization of $\gamma_\rho$.** The reduced preparation is normalized as a probability state on the one-particle space, while $A_O$ sums $N$ slot terms; the product-type case shows the two conventions consistently: a Slater determinant of $N$ orthonormal modes has reduced preparation the equal-weight mixture of those modes.
- **No separability claim.** The mean law holds for arbitrary sector preparations, entangled or not; nothing in the argument factors $\rho$, and the product-type clause is a special case.
