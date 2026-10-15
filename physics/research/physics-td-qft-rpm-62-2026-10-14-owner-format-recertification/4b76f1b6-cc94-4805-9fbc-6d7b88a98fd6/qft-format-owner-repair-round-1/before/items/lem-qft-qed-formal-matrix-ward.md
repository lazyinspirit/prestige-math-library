---
id: lem-qft-qed-formal-matrix-ward
kind: lemma
title: Finite/formal gauge covariance and matrix Ward identity
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - def-qft-qed-formal-ring
  - def-qft-qed-finite-graph-gauge-data
  - def-qft-qed-gauge-data
dependency_roles:
  def-qft-qed-formal-ring: mathematical-premise
  def-qft-qed-finite-graph-gauge-data: mathematical-premise
  def-qft-qed-gauge-data: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, §§6.1.1 and 6.4
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted Chapter 6 HTML; gauge transformation and finite QED propagator context.
    - title: Mark Srednicki, Quantum Field Theory, §§67–68
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete author-hosted draft; Ward identities in QED, printed pp. 400–404. The local item proves only finite/formal matrix identities.
---

## Statement

Let $K(z;\zeta)=K_0(\zeta)+zV(\zeta)$ and $S(z;\zeta)$ be the finite-dimensional formal matrices of [[def-qft-qed-formal-ring]], with $d\ge1$, $K_0(\zeta)$ invertible, and both coefficient matrices covariant under the vertex phase angles of [[def-qft-qed-finite-graph-gauge-data]]. Then $S$ is a two-sided inverse of $K$ in $M_d(\mathbb C\llbracket z\rrbracket)$, and
$$ S(z;\zeta^\theta)=D_\theta S(z;\zeta)D_\theta^{-1} $$
coefficientwise. For a differentiable phase path $D_s=e^{is\Theta}$, where the real vertex-angle path is $s\theta$, the variations satisfy
$$ \delta K=i[\Theta,K],\qquad \delta S=i[\Theta,S]=-S(\delta K)S . $$
For ordinary finite matrices $A,B\in GL_d(\mathbb C)$, the corresponding resolvent identity is $B^{-1}(B-A)A^{-1}=A^{-1}-B^{-1}$. These are formal or finite algebraic statements; they assert no convergence of a perturbation series, continuum limit, or loop Ward identity.

## Facts & Assumptions

**Given:** $d\ge1$, an invertible finite base $K_0$, link matrices $V(\zeta)$, the phase action $D_\theta$, covariance of both coefficient matrices, and the coefficientwise formal-series operations.

[A1] The coefficient matrices are covariant for every vertex phase angle; along the path $\theta(s)=s\theta$, they vary differentiably by conjugation. The base is invertible. These are hypotheses of the Statement, not conclusions of the proof.

[F1] [[def-qft-qed-formal-ring]]: $K=K_0+zV$ and $S=\sum_{n\ge0}(-zK_0^{-1}V)^nK_0^{-1}$ are defined in the formal power-series ring $\mathbb C\llbracket z\rrbracket$; each coefficient of $S$ is a finite matrix.

[F2] [[def-qft-qed-finite-graph-gauge-data]]: $\zeta_e^\theta=e^{i(\theta_{s(e)}-\theta_{t(e)})}\zeta_e$ and $D_\theta=\operatorname{diag}_x(e^{i\theta_x}I_r)$; the hopping blocks are $T_e\zeta_e$.

[F3] [[def-qft-qed-gauge-data]]: the local charged-field phase is $e^{ig\alpha_x}$. In the finite graph action of [F2], identify $\theta_x=g\alpha_x$. The draft carrier exists, but the current qft-mg01 manifest has no item inventory and no Step 1 readiness record; this interface is used conditionally. The algebraic proof itself requires only the phase action in [F2].

## Proof

1.1 Put $B:=K_0^{-1}V$. The coefficient of $z^n$ in $S$ is $(-B)^nK_0^{-1}$, a finite matrix, so the series defines an element of $M_d(\mathbb C\llbracket z\rrbracket)$ without an analytic convergence assumption. [given, F1, algebra]

1.2 Since $K=K_0(I+zB)$, multiplication gives $KS=K_0(I+zB)\sum_{n\ge0}(-zB)^nK_0^{-1}$. In the product $(I+zB)\sum_{n\ge0}(-zB)^n$, the constant coefficient is $I$ and the two contributions to every positive-degree coefficient cancel; hence $KS=I$. [A1, F1, step 1.1, algebra]

1.3 Also $K_0^{-1}K=I+zB$, so $SK=\sum_{n\ge0}(-zB)^n(I+zB)=I$ by the same coefficientwise cancellation. Thus $S$ is the two-sided formal inverse. [A1, F1, step 1.1, algebra]

2.1 Each link block transforms as $T_e\zeta_e^\theta=e^{i\theta_{s(e)}}(T_e\zeta_e)e^{-i\theta_{t(e)}}$; summing links in each block gives $V(\zeta^\theta)=D_\theta V(\zeta)D_\theta^{-1}$. With [A1], the assumed covariance of $K_0$ gives the same conjugation for each coefficient of $K$; the QED phase interpretation is exactly $\theta_x=g\alpha_x$ from [F3]. [A1, F1, F2, F3, algebra]

2.2 Substituting the conjugated $K_0,V$ into the defining series for $S$ conjugates each finite coefficient by $D_\theta$, proving $S(z;\zeta^\theta)=D_\theta S(z;\zeta)D_\theta^{-1}$. [F1, step 2.1, algebra]

3.1 Differentiate $K_sS_s=I$ coefficientwise at $s=0$. This gives $(\delta K)S+K(\delta S)=0$, hence $\delta S=-S(\delta K)S$ using $K^{-1}=S$. [F1, step 1.2, step 1.3, algebra]

3.2 From $D_s=e^{is\Theta}$, direct differentiation gives $\delta K=i[\Theta,K]$. Therefore $-S\,i[\Theta,K]\,S=-iS\Theta KS+iSK\Theta S=-iS\Theta+i\Theta S=i[\Theta,S]$. [A1, step 1.2, step 1.3, step 3.1, algebra] ∎
