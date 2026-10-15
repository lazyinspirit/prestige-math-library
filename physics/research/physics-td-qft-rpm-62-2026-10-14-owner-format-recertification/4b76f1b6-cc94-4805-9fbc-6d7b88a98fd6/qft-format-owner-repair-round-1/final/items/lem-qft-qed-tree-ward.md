---
id: lem-qft-qed-tree-ward
kind: lemma
title: Off-shell free Dirac Ward telescoping and tree currents
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 5
deps:
  - def-qft-dirac-projections
  - def-qft-scalar-mass-shell
  - def-countable-choice
  - lem-qft-qed-formal-matrix-ward
dependency_roles:
  def-qft-dirac-projections: mathematical-premise
  def-qft-scalar-mass-shell: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qft-qed-formal-matrix-ward: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, §§6.3.1 and 6.4
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted Chapter 6 HTML; charged Dirac current, free propagator symbols, and explicit tree-level current contractions.
    - title: Mark Srednicki, Quantum Field Theory, §§67–68
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page author-hosted draft; QED current Ward identities and exact propagator/vertex relation, printed pp. 400–404. The local result is restricted to rational finite matrices and on-shell tree currents.
---

## Statement

Use the $(-+++)$ coordinate convention, $h=-\eta=\operatorname{diag}(1,-1,-1,-1)$, and the Clifford matrices of [[def-qft-dirac-projections]]; the shell parameter $\mu>0$ has inverse-length units as in [[def-qft-scalar-mass-shell]]. For $p=(p^0,\mathbf p)\in\mathbb R^4$, write
$$ \Gamma(p):=\gamma^0p^0-\sum_{j=1}^3\gamma^jp_j,\qquad K(p):=\Gamma(p)-\mu I_4. $$
When $h(p,p)\ne\mu^2$, define the finite rational inverse
$$ S_0(p):=\frac{\Gamma(p)+\mu I_4}{h(p,p)-\mu^2}. $$
For $p,p+k$ with both denominators nonzero,
$$ S_0(p+k)\Gamma(k)S_0(p)=S_0(p)-S_0(p+k). $$
For any finite chain of off-shell momenta, the corresponding insertion differences telescope with both endpoint terms retained. If $u(p),u(p')$ satisfy $(\Gamma(p)-\mu)u(p)=0$, $(\Gamma(p')-\mu)u(p')=0$ and $p,p'$ lie on the future shell, then $\bar u(p')\Gamma(p-p')u(p)=0$, where $\bar u=u^\dagger\beta$. If $v(q)$ satisfies $(\Gamma(q)+\mu)v(q)=0$ on the future shell, then $\bar v(q)\Gamma(p+q)u(p)=0$. These are finite rational/tree identities; no Feynman boundary value, singular distribution product, loop theorem, or all-diagram gauge-independence claim is included.

## Facts & Assumptions

**Given:** $\mu>0$, the real $(-+++)$ momentum convention, and the finite matrix and spinor data in the Statement.

[A1] Countable Choice is included because [[def-qft-dirac-projections]] states its mathematical convention under that hypothesis; no additional choice is used in the finite matrix calculations. [[def-countable-choice]]

[A2] The external spinors in the current clauses satisfy exactly the displayed positive- and negative-energy equations; these are hypotheses, not claims about a constructed scattering state.

[F1] [[def-qft-dirac-projections]] defines $\beta,\gamma^0,\gamma^j$, $\bar z=z^\dagger\beta$, and $\Gamma(p)=\gamma^0p^0-\sum_j\gamma^jp_j$ with the stated $(-+++)$ convention.

[F2] [[def-qft-scalar-mass-shell]] fixes $\eta=\operatorname{diag}(-1,1,1,1)$, $h=-\eta$, $\mu$ and momentum in inverse-length units, and the future-shell condition $p^0=\sqrt{|\mathbf p|^2+\mu^2}$.

[F3] [[lem-qft-qed-formal-matrix-ward]]: finite invertible matrices obey the resolvent identity $B^{-1}(B-A)A^{-1}=A^{-1}-B^{-1}$, and the formal inverse variation is coefficientwise.

## Proof

1.1 From the displayed Pauli matrices in [F1], direct multiplication gives $\sigma_j^\dagger=\sigma_j$, $\sigma_j^2=I_2$, and $\sigma_i\sigma_j+\sigma_j\sigma_i=0$ for $i\ne j$. The block formulas then give $\beta^2=I_4$, $\beta^\dagger=\beta$, $\gamma^{0\dagger}=\gamma^0$, $\gamma^{j\dagger}=-\gamma^j$, and $\{\gamma^a,\gamma^b\}=2h^{ab}I_4$. Consequently $\Gamma(p)^2=h(p,p)I_4$ and $\beta\Gamma(p)^\dagger\beta=\Gamma(p)$ for every real $p$. [A1, F1, F2, algebra]

2.1 Multiplying $\Gamma(p)-\mu I_4$ and $\Gamma(p)+\mu I_4$ in either order gives $(h(p,p)-\mu^2)I_4$ by [step 1.1]. Thus $K(p)$ is invertible off shell and its inverse is exactly $S_0(p)$. [F1, F2, step 1.1, algebra]

2.2 If $K(p)u(p)=0$, then taking the adjoint and using $\beta K(p)^\dagger\beta=K(p)$ from [step 1.1] gives $\bar u(p)K(p)=0$. The same calculation applied to $(\Gamma(q)+\mu)v(q)=0$ gives $\bar v(q)(\Gamma(q)+\mu)=0$. [A2, F1, step 1.1, algebra]

3.1 Since $\Gamma(p+k)-\Gamma(p)=\Gamma(k)$, the resolvent identity [F3] with $A=K(p)$, $B=K(p+k)$ gives $S_0(p+k)\Gamma(k)S_0(p)=S_0(p)-S_0(p+k)$. [F3, step 2.1, algebra]

4.1 For off-shell $p_0,\ldots,p_N$, put $k_j=p_{j+1}-p_j$. Applying [step 3.1] at each adjacent pair yields $S_0(p_{j+1})\Gamma(k_j)S_0(p_j)=S_0(p_j)-S_0(p_{j+1})$; summing $j=0,\ldots,N-1$ cancels each interior term and leaves $S_0(p_0)-S_0(p_N)$. [step 3.1, algebra]

5.1 For $k=p-p'$, $\Gamma(k)=\Gamma(p)-\Gamma(p')$; the right equation for $u(p)$ and left equation for $\bar u(p')$ from [step 2.2] therefore give $\bar u(p')\Gamma(k)u(p)=\mu\bar u(p')u(p)-\mu\bar u(p')u(p)=0$. For $k=p+q$, $\Gamma(k)=\Gamma(p)+\Gamma(q)$; the right $u$ equation and left $v$ equation give $\bar v(q)\Gamma(k)u(p)=\mu\bar v(q)u(p)-\mu\bar v(q)u(p)=0$. [A2, F1, step 2.2, algebra] ∎
