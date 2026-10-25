---
id: pthm-qftx-global-susy-vacuum-energy
kind: physics-theorem
title: Vacuum energy and global supersymmetry invariance
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 3
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-breaking-and-phenomenology
axiom_base: "ZF + ACω"
deps:
  - def-qftx-global-susy-vacuum-state
  - def-qftx-super-poincare-algebra-4d
  - def-qftx-unitary-super-poincare-representation
  - def-countable-choice
dependency_roles:
  def-qftx-global-susy-vacuum-state: formulation-prerequisite
  def-qftx-super-poincare-algebra-4d: mathematical-premise
  def-qftx-unitary-super-poincare-representation: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: "Conditional operator-algebra deduction for an existing rest-frame ground-state vector in an adopted positive unitary representation of the four-dimensional extended super-Poincare algebra. The result identifies zero energy with supercharge invariance; it does not establish vacuum existence, construct a QFT, or infer a nonzero vacuum energy from a field-potential calculation."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§7.1, printed p. 72, equations (7.1.1)–(7.1.2): the N=1 vacuum-energy sum-of-norms identity and positive-energy criterion; the local proof gives the extended-algebra operator-domain version."
    - title: "Adel Bilal, Introduction to Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0101055"
      locator: "§6.1, printed pp. 35–36: the vacuum energy as a sum of supercharge norms and the vanishing-energy criterion."
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice and a positive unitary representation of the four-dimensional extended super-Poincare algebra with metric $\eta=\operatorname{diag}(-1,1,1,1)$, $\sigma^0=I_2$, natural units $\hbar=c=1$, common invariant product domain $\mathcal D$, and actual Hilbert adjoints $(Q^I_\alpha)^*$. Let $N\ge1$, and let $\Omega\in\mathcal D$ satisfy $\|\Omega\|=1$, $P^0\Omega=E_\Omega\Omega$ for a real number $E_\Omega$, $P^j\Omega=0$ for $j=1,2,3$, and $\langle P^0\psi,\psi\rangle\ge E_\Omega\|\psi\|^2$ for every $\psi\in D(P^0)$. Say that $\Omega$ is supersymmetry-invariant when $Q^I_\alpha\Omega=(Q^I_\alpha)^*\Omega=0$ for every $I,\alpha$, and supersymmetry-noninvariant when at least one of these vectors is nonzero; say it is boundary-neutral when $Z^{IJ}\Omega=\bar Z_{IJ}\Omega=0$ for every central generator. Then

$$4N E_\Omega=\sum_{I=1}^N\sum_{\alpha=1}^2\left(\|Q^I_\alpha\Omega\|^2+\|(Q^I_\alpha)^*\Omega\|^2\right)\ge0.$$

Consequently, $E_\Omega=0$ if and only if $\Omega$ is supersymmetry-invariant, and every supersymmetry-noninvariant such state has $E_\Omega>0$. The identity holds whether or not the state is boundary-neutral. The energy is an eigenvalue, not an energy density. The theorem is conditional on the representation and state data; it proves neither existence of a vacuum state nor existence of a quantum field theory realizing that representation.

## Statement references

[Stephen P. Martin, *A Supersymmetry Primer*, §7.1, equations (7.1.1)–(7.1.2)](https://arxiv.org/pdf/hep-ph/9709356v7).

[Adel Bilal, *Introduction to Supersymmetry*, §6.1](https://arxiv.org/pdf/hep-th/0101055).

Four-dimensional real extended super-Poincare algebra, including $\{Q^I_\alpha,(Q^J_\beta)^*\}=-2\sigma^\mu_{\alpha\dot\beta}P_\mu\delta^I{}_J$: [[def-qftx-super-poincare-algebra-4d]].

Positive unitary representation with a common product domain and actual Hilbert adjoints: [[def-qftx-unitary-super-poincare-representation]].

Global supersymmetry vacuum state, its ground-state condition, and the definitions of boundary-neutrality and supersymmetry invariance: [[def-qftx-global-susy-vacuum-state]].

The Axiom of Countable Choice: [[def-countable-choice]].

## Facts & Assumptions

**Given:** The hypotheses in the Statement, in particular $\Omega\in\mathcal D$, $\|\Omega\|=1$, $P^0\Omega=E_\Omega\Omega$, and the exact operator adjoints on the common invariant product domain.

[A1] [[def-countable-choice]]: every sequence of nonempty sets admits a choice function; this is the choice assumption included in the representation supplier.

[F1] [[def-qftx-super-poincare-algebra-4d]]: $\{Q^I_\alpha,\bar Q_{\dot\beta J}\}=-2\sigma^\mu_{\alpha\dot\beta}P_\mu\delta^I{}_J$, with $P_0=-P^0$, $\operatorname{tr}\sigma^0=2$, and $\operatorname{tr}\sigma^j=0$ for $j=1,2,3$.

[F2] [[def-qftx-unitary-super-poincare-representation]]: $\bar Q_{\dot\alpha I}=(Q^I_\alpha)^*$ is the actual Hilbert adjoint, and every product in the bracket table is defined on the common invariant domain $\mathcal D$.

[F3] [[def-qftx-global-susy-vacuum-state]]: $\Omega\in\mathcal D$ is normalized and satisfies $P^j\Omega=0$, $P^0\Omega=E_\Omega\Omega$; it is supersymmetry-invariant exactly when every $Q^I_\alpha\Omega$ and $(Q^I_\alpha)^*\Omega$ vanishes.

## Proof

**Given:** [A1], [F1]–[F3], and $N\ge1$.

1.1 In the Countable-Choice representation setup [A1, F2], sum the mixed anticommutator in [F1] over the equal spinor labels $\alpha=\dot\beta$ and over $I=1,\ldots,N$. The Kronecker delta leaves one copy for each flavor, and the Pauli-matrix traces give $\sum_{I=1}^{N}\sum_{\alpha=1}^{2}\{Q^I_\alpha,(Q^I_\alpha)^*\}=-2N\sum_{\mu=0}^{3}\operatorname{tr}(\sigma^\mu)P_\mu=-4N P_0=4N P^0$. The last equality uses $P_0=-P^0$ for the stated metric. [A1, F1, F2, algebra]

2.1 Apply the operator identity from step 1.1 to $\Omega$ and take its inner product with $\Omega$. The common product domain in [F2] makes both products defined. Since the inner product is linear in its first variable and $(Q^I_\alpha)^*$ is the actual adjoint, $\langle Q^I_\alpha(Q^I_\alpha)^*\Omega,\Omega\rangle=\|(Q^I_\alpha)^*\Omega\|^2$ and $\langle (Q^I_\alpha)^*Q^I_\alpha\Omega,\Omega\rangle=\|Q^I_\alpha\Omega\|^2$. The right side is $4N\langle P^0\Omega,\Omega\rangle=4NE_\Omega$ by [F3] and normalization. This proves the asserted sum-of-norms identity. [F2, F3, step 1.1, algebra]

3.1 Every summand in step 2.1 is nonnegative, so $E_\Omega\ge0$. A finite sum of nonnegative real numbers is zero exactly when every summand is zero; hence $E_\Omega=0$ exactly when all $Q^I_\alpha\Omega$ and $(Q^I_\alpha)^*\Omega$ vanish, which is precisely supersymmetry invariance by [F3]. If the state is noninvariant, at least one squared norm is strictly positive, so the identity and $4N>0$ imply $E_\Omega>0$. The argument contains no boundary-neutrality assumption. [F3, step 2.1, algebra] ∎

