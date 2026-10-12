---
id: ex-nrqm-controlled-dynamics-gap-closing-failure
aliases:
- nrqm-controlled-dynamics-example-gap-closing-failure
kind: example
domain: mathematics
title: Gap-closing failure
status: draft
origin: pipeline
dependency_level: 2
deps:
- thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate
- thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness
- prop-nrqm-orbital-and-spin-finite-spin-matrices
- def-bounded-linear-operator
- def-operator-norm
- def-hilbert-space
dependency_roles:
  thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate: mathematical-premise
  thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted
      course text), Two-State System pp. 153-155 (level crossing and breakdown of
      adiabatic tracking)
    url: https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf
  - title: T. Kato, Perturbation Theory for Linear Operators, Chapter II.4 (the uniform-gap
      hypothesis is essential in the adiabatic theorem)
    url: https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf
---

## Example

Let $\sigma_z=\operatorname{diag}(1,-1)$ on $\mathbb C^2$, with orthonormal basis $e_\uparrow=(1,0)$, $e_\downarrow=(0,1)$. Let $H(s)=s\sigma_z$ for $s\in[-1,1]$, and let $U_T$ solve $iU_T'=TH(s)U_T$, $U_T(-1)=I$, for $T>0$. For $s\ne0$ define $P_+(s)$ to be the spectral projection onto the **ordered upper eigenvalue** $E_+(s)=|s|$.

(a) The eigenvalues are $s$ and $-s$, so their separation $2|s|$ closes at $0$. The uniform positive-gap hypothesis of [[thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate]] fails.

(b) The ordered upper projection is $P_+(s)=\operatorname{diag}(0,1)$ for $s<0$ and $P_+(s)=\operatorname{diag}(1,0)$ for $s>0$. Its distinct one-sided limits preclude a continuous extension through $0$. At the crossing $H(0)=0$, the spectral projection for its only eigenvalue is $I$, not a distinguished rank-one projection. Assigning any rank-one projection at the crossing does not repair the unequal one-sided limits.

(c) The exact propagator is $U_T(s)=\exp[-iT\sigma_z(s^2-1)/2]$, so $U_T(1)=I$ and

$$\|(I-P_+(1))U_T(1)P_+(-1)\|=1\qquad(T>0).$$

Thus upper-energy tracking fails maximally at the endpoints. This is the ordered branch for which the leakage assertion is made.

(d) There is nevertheless a continuous constant rank-one branch $P_\downarrow=\operatorname{diag}(0,1)$ whose vectors obey $H(s)e_\downarrow=-s e_\downarrow$ for every $s$. It starts at energy $+1$ at $s=-1$, ends at energy $-1$ at $s=1$, and satisfies $(I-P_\downarrow)U_T(s)P_\downarrow=0$ for every $s,T$. At $s=0$ this is a subprojection of the degenerate eigenspace; it is not the rank-two full spectral projection $E_{H(0)}(\{0\})$. The original claim that no continuous rank-one eigenbranch can pass through this crossing was false.

## Verification

**Given:** the explicit diagonal matrices, $s\in[-1,1]$ and $T>0$, with $P_+$ defined only for $s\ne0$ and its endpoint values as above.

[F1] Direct matrix multiplication gives $H(s)e_\uparrow=s e_\uparrow$, $H(s)e_\downarrow=-s e_\downarrow$, and $\sigma_z^2=I$; these agree with [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] (e).

[F2] The explicit matrix exponential can be differentiated entrywise. If $V$ and $W$ both solve $iZ'=TH(s)Z$ with the same initial matrix, their difference $D$ has $(D^*D)'=iD^*THD-iD^*THD=0$, so $D=0$. This supplies the uniqueness actually needed here without consuming the defective generic Dyson ordering.

1.1 The two scalar eigenvalues in [F1] have distance $2|s|$, which tends to zero at the crossing. For $s<0$ the larger one is $-s$ with eigenspace $\mathbb Ce_\downarrow$; for $s>0$ it is $s$ with eigenspace $\mathbb Ce_\uparrow$. Their orthogonal projections differ by $\operatorname{diag}(1,-1)$ in norm $1$, so no choice at $s=0$ gives a continuous ordered-upper projection. The zero matrix at $0$ has only the full eigenspace $\mathbb C^2$ as its nonzero spectral projection. [F1, algebra]

2.1 Set $V_T(s)=\operatorname{diag}(e^{-iT(s^2-1)/2},e^{iT(s^2-1)/2})$. Entrywise differentiation gives $iV_T'=Ts\sigma_zV_T$ and $V_T(-1)=I$. Hence [F2] identifies $U_T=V_T$. At $s=1$ both phases are $1$, and $(I-P_+(1))U_T(1)P_+(-1)=\operatorname{diag}(0,1)$, an orthogonal projection of norm $1$. This proves the full leakage assertion for every $T>0$. [F1, F2, step 1.1, algebra]

3.1 The constant projection $P_\downarrow$ has $H(s)P_\downarrow=-sP_\downarrow$ by [F1], commutes with $U_T(s)$ by step 2.1, and gives zero leakage out of its fixed range. It therefore exhibits the continuous eigenvector counterbranch through the crossing and disproves the old unqualified no-continuous-rank-one-branch assertion, while preserving the ordered-upper failure just proved. [F1, step 2.1, algebra] ∎
