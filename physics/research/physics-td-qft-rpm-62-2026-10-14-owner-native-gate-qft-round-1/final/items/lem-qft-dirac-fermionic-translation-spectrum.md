---
id: lem-qft-dirac-fermionic-translation-spectrum
kind: lemma
title: Fermionic Dirac translation generators and positive spectrum
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-qft-dirac-projections
  - lem-qft-dirac-projection-matrices
  - def-qft-fock-and-test-spaces
  - def-countable-choice
  - lem-qft-l2-product-tensor-identification
  - def-projection-valued-measure
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - def-unbounded-linear-operator-domain-and-graph
  - def-densely-defined-closed-and-closable-operator
  - def-sine-and-cosine-by-power-series
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-sine-and-cosine-addition-formulas
  - thm-sine-and-cosine-derivatives
  - cor-mean-value-theorem
  - thm-dominated-convergence
  - thm-fatou-lemma
  - cor-triangle-inequality-for-inner-product-norm
dependency_roles:
  def-qft-dirac-projections: mathematical-premise
  lem-qft-dirac-projection-matrices: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qft-l2-product-tensor-identification: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-fatou-lemma: mathematical-premise
  cor-triangle-inequality-for-inner-product-norm: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 5, quantizing the Dirac field
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qft.pdf
      locator: Complete 155-page author-hosted notes; Chapter 5 §§5.2–5.4, fermionic modes, antiparticles, and positive-energy Fock interpretation.
    - title: Niklas Beisert, Quantum Field Theory I, ETH Zürich 2025 HS complete lecture notes
      url: https://people.phys.ethz.ch/~nbeisert/lectures/QFT1-25HS-Notes.pdf
      locator: Complete 194-page official course notes; Chapter 5 §§5.1, 5.2, 5.4–5.6, printed 5.1–5.6 and 5.10–5.18, for Clifford algebra, spinor covariance, Hamiltonian form and fermionic quantization. The exact local conventions and domains are proved in the library.
---

## Statement

Assume Countable Choice [[def-countable-choice]] and use [[def-qft-dirac-projections]] and [[lem-qft-dirac-projection-matrices]]. Define $\chi(s)=\cos s+i\sin s$ for real $s$, using [[def-sine-and-cosine-by-power-series]]. Let $X=(\{+\}\times\mathbb R^3)\sqcup(\{-\}\times\mathbb R^3)$ carry counting measure on the species label and $d^3\mathbf k/(2\pi)^3$ on each copy. The fiber $\mathcal V_x$ is $\mathbb C^4$ for $x=(+,\mathbf k)$ and $\overline{\mathbb C^4}$ for $x=(-,\mathbf k)$; $L^2(X;\mathcal V)$ denotes measurable sections with square-integrable fiber norm, and is the direct sum $L^2(\mathbb R^3;\mathbb C^4)\oplus L^2(\mathbb R^3;\overline{\mathbb C^4})$. Identify $\mathcal K=\mathcal H_+\oplus\overline{\mathcal H_-}$ with the closed subspace whose $+$ fibers lie in $\operatorname{ran}P_+(\mathbf k)$ and whose $-$ fibers lie in $\overline{\operatorname{ran}P_-(\mathbf k)}$; form its antisymmetric Fock space $\mathcal F_a(\mathcal K)$ using [[def-qft-fock-and-test-spaces]]. For $x=(+,\mathbf k)$ set $q(x)=(\omega(\mathbf k),\mathbf k)$, and for $x=(-,\mathbf k)$ set $q(x)=(\omega(\mathbf k),-\mathbf k)$. The one-particle translation multipliers $V(a)u(x)=\chi(q^0(x)a^0-\mathbf q(x)\cdot\mathbf a)u(x)$ preserve $\mathcal K$ and lift to a strongly continuous unitary representation on $\mathcal F_a(\mathcal K)$. Write $U_j(t)$ for its Fock lift along the $j$th coordinate axis of $\mathbb R^4$.

On the $n$-particle sector, let $s_n(x_1,\ldots,x_n)=\sum_{r=1}^n q(x_r)$ and set $s_0=0$ on the vacuum sector. The joint spectral measure is multiplication by $\mathbf1_{s_n^{-1}(B)}$ on each sector, restricted to its antisymmetric subspace. Its support is contained in the closed future cone $\{(E,\mathbf p):E\ge|\mathbf p|\}$. Define the time generator $H$ and spatial momentum components $P_j$ by $U(te_0)=\chi(tH)$ and $U(te_j)=\chi(-tP_j)$, where $e_\alpha$ are the coordinate vectors in translation space. Then $H$ and each $P_j$ are the maximal real multipliers by $s_{n,0}$ and $s_{n,j}$, respectively, with domains $\{\Psi:\sum_n\|s_{n,\alpha}\Psi_n\|^2<\infty\}$; the minus sign in spatial translation phases is the Minkowski pairing convention in $V(a)$. The vacuum is the unique zero-energy vector; for $\mu>0$ the nonvacuum spectrum has gap at least $\mu$, while for $\mu=0$ it has no positive gap.

## Facts & Assumptions

**Given:** Countable Choice; the two closed energy subspaces and their measure conventions; antisymmetric Fock sectors; and the exact product-tensor and spectral-measure definitions.

[A1] Countable Choice is assumed by the QFT Fock construction. [[def-countable-choice]]

[F1] $\omega^2=|\mathbf k|^2+\mu^2$, the projections $P_\pm$ are complementary orthogonal projections, and $\mathcal H_\pm=\operatorname{ran}P_\pm$ are closed. [[def-qft-dirac-projections]] [[lem-qft-dirac-projection-matrices]]

[F2] The fermionic Fock space is the square-summable direct sum of antisymmetric tensor sectors; the vacuum is sector zero. [[def-qft-fock-and-test-spaces]]

[F3] The completed tensor powers are identified with product $L^2$ spaces, and the antisymmetric sector is the range of the signed permutation average. [[lem-qft-l2-product-tensor-identification]] [[def-qft-fock-and-test-spaces]]

[F4] The joint projection-valued measure and maximal self-adjoint multiplication-domain terms use the definitions in [[def-projection-valued-measure]], [[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-unbounded-linear-operator-domain-and-graph]], and [[def-densely-defined-closed-and-closable-operator]].

[F5] Dominated convergence applies on the completed product measures and countable direct sum used below. [[thm-dominated-convergence]]

[F6] Sine and cosine are defined by power series, have unit-circle norm, obey the addition formulas, and have their usual derivatives; Fatou's lemma applies to nonnegative squared difference quotients. [[def-sine-and-cosine-by-power-series]] [[cor-trigonometric-parity-and-pythagorean-identity]] [[thm-sine-and-cosine-addition-formulas]] [[thm-sine-and-cosine-derivatives]] [[cor-mean-value-theorem]] [[thm-fatou-lemma]]

[F7] The Euclidean norm obeys the triangle inequality. [[cor-triangle-inequality-for-inner-product-norm]]

## Proof



1.1 Realize the one-particle space as the closed subspace of the direct sum $L^2(\mathbb R^3;\mathbb C^4)\oplus L^2(\mathbb R^3;\overline{\mathbb C^4})$ determined by $P_+$ and $\overline{P_-}$. In each fiber, $|\chi(s)|^2=\cos^2s+\sin^2s=1$ by [F6], so the phase multiplier preserves norms and both projected ranges. The addition formulas give $\chi(s+t)=\chi(s)\chi(t)$, hence $V(a)V(b)=V(a+b)$. [F1, F6, given, algebra]

2.1 If $a_m\to a$, the multiplier phases converge pointwise by continuity of sine and cosine, and the squared difference applied to any $u\in\mathcal K$ is bounded by $4|u|^2$. Dominated convergence [F5] gives $\|V(a_m)u-V(a)u\|\to0$. On an elementary $n$-fold tensor, the difference of $V(a)^{\otimes n}$ and $V(b)^{\otimes n}$ is a sum of $n$ terms, each with one factor $(V(a)-V(b))u_r$ and all other factors of unchanged norm. Thus strong continuity holds on elementary tensors, then on each completed antisymmetric sector by density and the unit norm bound. Finite-sector truncations are dense in Fock space, so the direct-sum lift is strongly continuous on all of $\mathcal F_a(\mathcal K)$. [A1, F2, F3, F5, step 1.1, algebra]

2.2 The ambient one-particle space has two species and four complex fiber coordinates per species, so it is the finite orthogonal sum of eight scalar $L^2(\mathbb R^3)$ spaces. Distributing a finite $n$-fold Hilbert tensor over this sum gives a finite orthogonal sum indexed by the $n$ species/fiber-coordinate choices; applying the scalar product-tensor identification [F3] successively identifies each summand with scalar $L^2((\mathbb R^3)^n)$. The projected space $\mathcal K^{\widehat\otimes n}$ is a closed subspace of this product space, and its antisymmetric sector is the range of the signed permutation average. The function $s_n$ is measurable and permutation-invariant. Therefore multiplication by $\mathbf1_{s_n^{-1}(B)}$ preserves that sector and is an orthogonal projection. The direct sum over $n$, with vacuum multiplier $\mathbf1_B(0)$, satisfies $E(B)E(C)=E(B\cap C)$ and $E(\mathbb R^4)=I$. For disjoint $B_m$ with union $B$, the squared norm of the difference between $E(B)\Psi$ and $\sum_{m=0}^N E(B_m)\Psi$ is the integral of $|\Psi|^2$ over the decreasing remainder preimages; the indicators tend pointwise to zero and are bounded by one, so [F5] gives norm convergence. Hence $E$ is a strongly countably additive projection-valued measure. [F3, F4, F5, step 1.1, construct]

3.1 Fix one real coordinate multiplier $s_{n,j}$ on an antisymmetric sector. It is finite, measurable, real, and permutation-invariant. Its maximal domain is dense because the cutoffs $\Psi_n\mathbf1_{\{|s_{n,j}|\le N\}}$ are antisymmetric domain vectors converging in norm by [F5]; multiplication is symmetric because $s_{n,j}$ is real. If $\Psi_n$ is in the adjoint domain with adjoint value $Q_n$, then $v_N=(s_{n,j}\Psi_n-Q_n)\mathbf1_{\{|s_{n,j}|\le N\}}$ is antisymmetric and in the maximal domain. The adjoint identity gives $0=\langle s_{n,j}v_N,\Psi_n\rangle-\langle v_N,Q_n\rangle=\int_{\{|s_{n,j}|\le N\}}|s_{n,j}\Psi_n-Q_n|^2$. Letting $N\to\infty$ proves $Q_n=s_{n,j}\Psi_n\in L^2$; the converse adjoint inclusion follows from the same real-multiplier identity. Thus each sector multiplier is self-adjoint on its maximal domain. [F4, F5, step 2.2, algebra]

4.1 The direct-sum multiplier $A_j=\bigoplus_n M_{s_{n,j}}$ is symmetric on the displayed domain. If $\Psi$ belongs to $D(A_j^*)$ with adjoint value $Q$, testing the adjoint identity against vectors supported in one sector shows $\Psi_n\in D(M_{s_{n,j}}^*)$ and $(A_j^*\Psi)_n=M_{s_{n,j}}^*\Psi_n=s_{n,j}\Psi_n$, by step 3.1. Since $Q$ is in the Fock direct sum, $\sum_n\|s_{n,j}\Psi_n\|^2=\sum_n\|Q_n\|^2<\infty$, so $\Psi\in D(A_j)$. Conversely, if $\Psi\in D(A_j)$, sectorwise symmetry and Cauchy--Schwarz for the square-summable sector sequences give $\langle A_j\Phi,\Psi\rangle=\langle\Phi,A_j\Psi\rangle$ for every $\Phi\in D(A_j)$; hence $\Psi\in D(A_j^*)$ with $A_j^*\Psi=A_j\Psi$. Therefore $A_j=A_j^*$ with exactly the stated domain. Truncating both particle number and the multiplier to bounded level sets approximates each domain vector in graph norm by [F5], so finite-sector domain vectors form a graph core. [F4, F5, step 3.1, algebra]

4.2 For every point of $X$, $q^0=\omega\ge|\mathbf q|$ by [F1]. For any finite list $q_1,\ldots,q_n$, the time component of their sum is nonnegative and $|\sum_r\mathbf q_r|\le\sum_r|\mathbf q_r|\le\sum_rq_r^0$ by [F7]. Thus every $s_n$ lies in the closed future cone, including $s_0=0$, so the spectral measure from step 2.2 is supported there. If $\mu>0$, then $s_{n,0}\ge n\mu\ge\mu$ for $n\ge1$. If $\mu=0$, $\omega(\mathbf k)>0$ except at the Lebesgue-null point $\mathbf k=0$; consequently $s_{n,0}>0$ almost everywhere on every $n\ge1$ product sector and the zero-energy projection has only the vacuum range. [F1, F4, F7, step 2.2, step 3.1, algebra]

5.1 If $\mu=0$ and $\varepsilon>0$, choose $\mathbf k_0$ with $0<|\mathbf k_0|<\varepsilon/4$. Since $P_+(\mathbf k_0)$ has rank two, choose $e\in\mathbb C^4$ with $P_+(\mathbf k_0)e\ne0$. Continuity of $P_+$ away from the origin gives a bounded open ball $B$ about $\mathbf k_0$, with closure avoiding zero and contained in $\{|\mathbf k|<\varepsilon/2\}$, on which $P_+(\mathbf k)e\ne0$. The measurable function $u=\mathbf1_B P_+e$ is square-integrable, nonzero, and supported where $0<\omega<\varepsilon$. Hence the one-particle spectral measure has nonzero mass below every $\varepsilon>0$, so there is no positive massless gap. [F1, F4, step 4.2, construct]

6.1 For real $r$, the mean value theorem and $|\cos s|\le1$ from [F6] give $|\sin r|\le|r|$, hence $|\chi(r)-1|=2|\sin(r/2)|\le|r|$. Also $\chi'(r)=i\chi(r)$ by the sine and cosine derivative formulas. For a coordinate translation set $\varepsilon_0=1$ and $\varepsilon_j=-1$ for $j=1,2,3$, and write $U_\alpha(t)=U(te_\alpha)$; on each sector this is multiplication by $\chi(\varepsilon_\alpha t s_{n,\alpha})$ by the definition of $V(a)$. If $\Psi$ is in the maximal multiplication domain, then $|(\chi(\varepsilon_\alpha t s_{n,\alpha})-1)/t|\le|s_{n,\alpha}|$; dominated convergence [F5] makes the norm derivative equal $i\varepsilon_\alpha s_{n,\alpha}\Psi$. Conversely, if the difference quotient has a norm limit, take $t_m=1/m$. Pointwise the quotient tends to $i\varepsilon_\alpha s_{n,\alpha}\Psi_n$, so Fatou's lemma [F6] gives $\sum_n\|s_{n,\alpha}\Psi_n\|^2\le\liminf_m\|(U_\alpha(t_m)-I)\Psi/t_m\|^2<\infty$. Thus the derivative domain is exactly the displayed maximal domain; the self-adjoint generator with convention $U(te_0)=\chi(tH)$ or $U(te_j)=\chi(-tP_j)$ is the multiplier $s_{n,\alpha}$. Applying the same argument to $a\mapsto U(ta)$ gives the maximal multiplier by $a^0s_{n,0}-\sum_j a^js_{n,j}$ for any real $a$. [F4, F5, F6, step 3.1, algebra] ∎
