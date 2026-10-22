---
id: thm-qftx-photon-rotations-helicity
kind: theorem
title: Transverse rotations preserve helicity and generate total angular momentum
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-qftx-photon-helicity-bundle
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - thm-heine-cantor-metric
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-stone-one-parameter-unitary-groups
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qftx-photon-helicity-bundle: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  thm-stone-one-parameter-unitary-groups: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 6, section 6.2.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Full author-hosted HTML chapter; section 6.2.1, equations 6.511–6.523, for the transverse photon modes and projector.
    - title: Eric Palmerduca and Hong Qin, Photon topology, arXiv:2308.11147v2
      url: https://arxiv.org/pdf/2308.11147
      locator: Full 66-page PDF retrieved; section IV, equations 134–142, for helicity-preserving bundle rotations and irreducible helicity fibers.
    - title: Konstantin Y. Bliokh, Miguel A. Alonso, Elena A. Ostrovskaya, and Andrea Aiello, Angular Momenta and Spin-Orbit Interaction of Nonparaxial Light in Free Space
      url: https://arxiv.org/pdf/1006.3876
      locator: Full 8-page PDF retrieved; section I, equation 1, and section II, equations 6–9, for the total vector angular-momentum expression and helicity Berry connection. The source sets hbar=c=1.
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume the Axiom of Choice, fix a real parameter $\hbar>0$, and use the transverse Hilbert space, helicity projectors, and dense domain $\mathcal D$ defined above. Let $e_1,e_2,e_3$ be the standard coordinate basis of $\mathbb R^3$. Let $SO(3)=\{R\in M_3(\mathbb R):R^TR=I,\det R=1\}$ with the topology inherited from the Frobenius matrix norm $\|A\|_F=(\sum_{i,j=1}^3|A_{ij}|^2)^{1/2}$. For $R\in SO(3)$ define $U(R)f(\mathbf k)=R f(R^{-1}\mathbf k)$. Then $U$ is a strongly continuous unitary representation on $\mathcal H_T^\nu$, and $P_\sigma(\mathbf k/|\mathbf k|)\,U(R)=U(R)\,P_\sigma(\mathbf k/|\mathbf k|)$ for $\sigma=\pm1$. For $\mathbf a\in\mathbb R^3$ with $|\mathbf a|=1$, define $[\mathbf a]_\times v=\mathbf a\times v$ and, for $B\in M_3(\mathbb R)$, define the matrix exponential by the absolutely convergent Frobenius-norm series $\exp(B)=\sum_{m=0}^\infty B^m/m!$; put $R_{\mathbf a}(t)=\exp(t[\mathbf a]_\times)$. Define $(S_{\mathbf a})_{ij}=-i\sum_{\ell=1}^3a_\ell\epsilon_{\ell ij}$, $L_{\mathbf a}=-i\hbar\,(\mathbf a\times\mathbf k)\cdot\nabla_{\mathbf k}$, where $\nabla_{\mathbf k}$ differentiates each vector component, and $S_{\mathbf a}^{\mathrm{op}}=\hbar S_{\mathbf a}$. The unique self-adjoint Stone generator $J_{\mathbf a}$ specified by $U(R_{\mathbf a}(t))=\exp(-itJ_{\mathbf a}/\hbar)$ acts on $\mathcal D$ as $J_{\mathbf a}=L_{\mathbf a}+S_{\mathbf a}^{\mathrm{op}}$; here the operator exponential is defined by the Borel functional calculus in Stone's theorem. This total generator preserves transversality, while its orbital and spin terms generally do not separately preserve the transverse space. The stated self-adjoint operators are the Stone generators; the differential expression is their restriction to $\mathcal D$.

## Statement references

[[def-qftx-photon-helicity-bundle]]

## Facts & Assumptions

**Given:** The Axiom of Choice; $\hbar>0$; the weighted transverse Hilbert space and dense domain $\mathcal D$; the standard Euclidean dot and cross products; and the matrix topology on $SO(3)$.

[A1] Assume the Axiom of Choice. [[def-axiom-of-choice]]

[F1] $\mathrm{AC}$ implies $\mathrm{AC}_\omega$, so the countable-choice hypothesis of the transverse-space definition is available. [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]]

[F2] The weighted transverse space is Hilbert, $\mathcal D$ is dense, the multiplier $Wf=f/\sqrt{2|\mathbf k|}$ is unitary to the Lebesgue transverse space, orthogonal maps preserve $d\nu$, and every radial annulus has finite $\nu$-measure. [[def-qftx-photon-helicity-bundle]]

[F3] A strongly continuous one-parameter unitary group on a complex Hilbert space has a unique self-adjoint Stone generator: $V(t)=e^{itT}$ and $\frac{d}{dt}V(t)x|_{t=0}=iTx$ exactly for $x\in D(T)$. This theorem assumes $\mathrm{AC}$. [[thm-stone-one-parameter-unitary-groups]]

[F4] Closed and bounded subsets of finite-dimensional Euclidean space are compact, and continuous maps from compact metric spaces to metric spaces are uniformly continuous. [[thm-heine-borel-rn]] [[thm-heine-cantor-metric]]

[F5] There is a smooth compactly supported bump that equals $1$ on a smaller ball inside a prescribed larger ball. [[lem-smooth-bump-between-concentric-euclidean-balls]]

[F6] A continuous real-valued function on a nonempty compact metric space attains its minimum and maximum. [[thm-extreme-value-metric]]

## Proof

**Given:** [A1], [F1]–[F6], $\hbar>0$, $R\in SO(3)$, and $f\in\mathcal H_T^\nu$.

1.1 By [F1], the Axiom of Choice [A1] supplies the Countable Choice hypothesis of [F2]. Choose a measurable representative of $f$ and let $N\subset M$ be a $\nu$-null set outside which $\mathbf k\cdot f(\mathbf k)=0$. Invariance of $\nu$ gives $\nu(RN)=0$. For $\mathbf k\notin RN$, $$\mathbf k\cdot Rf(R^{-1}\mathbf k)=(R^{-1}\mathbf k)\cdot f(R^{-1}\mathbf k)=0,$$ so $U(R)f$ is transverse almost everywhere. If the representative is changed on a null set $N'$, its rotated composition changes only on $RN'$, also null; hence $U(R)$ is well-defined on $L^2$ equivalence classes. Since $R$ preserves $d\nu$ by [F2] and preserves the Hermitian norm on $\mathbb C^3$, change of variables gives $\|U(R)f\|_\nu=\|f\|_\nu$. The same formula with $R^{-1}$ is an inverse, so $U(R)$ is unitary. [A1, F1, F2, given, algebra]

1.2 On the Lebesgue transverse space write $U_0(R)u(\mathbf k)=Ru(R^{-1}\mathbf k)$. Since $|R^{-1}\mathbf k|=|\mathbf k|$, the multiplier $W$ satisfies $$W(U(R)f)(\mathbf k)=\frac{Rf(R^{-1}\mathbf k)}{\sqrt{2|\mathbf k|}}=R\frac{f(R^{-1}\mathbf k)}{\sqrt{2|R^{-1}\mathbf k|}}=U_0(R)(Wf)(\mathbf k).$$ Thus the weighted and Lebesgue rotation actions are unitarily intertwined. [F2, given, algebra]

1.3 For $R\in SO(3)$, $(R\mathbf n)\times(Rv)=R(\mathbf n\times v)$: pairing both sides with any real $w$ reduces the equality to invariance of the oriented scalar triple product under $R$. Hence $P(R\mathbf n)=RP(\mathbf n)R^{-1}$, $h(R\mathbf n)=Rh(\mathbf n)R^{-1}$, and $P_\sigma(R\mathbf n)=RP_\sigma(\mathbf n)R^{-1}$. Substituting $\mathbf n=R^{-1}\mathbf k/|R^{-1}\mathbf k|$ proves that the multiplication projector $P_\sigma$ commutes with $U(R)$. [F2, given, algebra]

1.4 Put $A=[\mathbf a]_\times$, so $A^T=-A$. Cauchy–Schwarz gives $\|BC\|_F\le\|B\|_F\|C\|_F$, so $\|B^m/m!\|_F\le\|B\|_F^m/m!$ for every $m\ge1$; the $m=0$ term is $I$ with $\|I\|_F=\sqrt3$. Hence the matrix-exponential series converges absolutely. For $B=tA$ the same estimate gives uniform convergence on bounded $t$-intervals; its Cauchy product and the binomial identity give $R_{\mathbf a}(s)R_{\mathbf a}(t)=R_{\mathbf a}(s+t)$, while termwise transposition gives $R_{\mathbf a}(t)^T=R_{\mathbf a}(-t)$. Thus $R_{\mathbf a}(t)$ is orthogonal. It is continuous in $t$, so its determinant is the constant $1$ (it lies in $\{+1,-1\}$ and equals $1$ at $t=0$). Hence $R_{\mathbf a}(t)\in SO(3)$ and $t\mapsto R_{\mathbf a}(t)$ is a one-parameter subgroup. Termwise differentiation gives $R_{\mathbf a}'(0)=A$. [given, algebra]

2.1 For $R_1,R_2\in SO(3)$, $R_1R_2$ is again orthogonal with determinant $1$, and $R^{-1}=R^T$. Hence $$U(R_1)U(R_2)f(\mathbf k)=R_1R_2f(R_2^{-1}R_1^{-1}\mathbf k)=U(R_1R_2)f(\mathbf k),$$ and $U(I)=I$, so $U$ is a unitary representation. [given, step 1.1, algebra]

2.2 First let $f\in\mathcal D$ be nonzero. Its compact support is a compact subset of $M$, so [F6] applied to $\mathbf k\mapsto|\mathbf k|$ gives $0<r_0\le|\mathbf k|\le r_1<\infty$ on the support. Thus it lies in a radial annulus $K=\{r_0\le|\mathbf k|\le r_1\}$. The set $SO(3)\times K$ is closed and bounded in a finite-dimensional Euclidean space: the equations defining $SO(3)$ are closed and its matrix entries have absolute value at most $1$. Hence it is compact by [F4]. The map $(R,\mathbf k)\mapsto Rf(R^{-1}\mathbf k)$ is continuous there, so [F4] makes it uniformly continuous. Rotations preserve $K$ and $\nu(K)<\infty$ by [F2]; therefore $R\mapsto U(R)f$ is continuous in $L^2(d\nu)$. For $f=0$ this continuity is immediate. For general $f\in\mathcal H_T^\nu$, choose $g\in\mathcal D$ with $\|f-g\|_\nu<\varepsilon$ by [F2]. Unitarity gives $$\|U(R)f-U(R_0)f\|_\nu\le2\varepsilon+\|U(R)g-U(R_0)g\|_\nu,$$ so continuity on $\mathcal D$ extends to all $f$ as $R\to R_0$. [F2, F4, F6, step 1.1, algebra]

3.1 By steps 1.1, 2.1, 2.2, and 1.4, $t\mapsto U(R_{\mathbf a}(t))$ is a strongly continuous one-parameter unitary group. Applying Stone's theorem [F3] gives its unique self-adjoint generator $T_{\mathbf a}$ with $U(R_{\mathbf a}(t))=e^{itT_{\mathbf a}}$. Set $J_{\mathbf a}=-\hbar T_{\mathbf a}$; then $J_{\mathbf a}$ is self-adjoint and $U(R_{\mathbf a}(t))=e^{-itJ_{\mathbf a}/\hbar}$. [A1, F3, step 1.1, step 2.1, step 2.2, step 1.4]

4.1 By step 1.4, $R_{\mathbf a}'(0)=[\mathbf a]_\times$. For $f\in\mathcal D$, differentiating $G(t,\mathbf k)=R_{\mathbf a}(t)f(R_{\mathbf a}(-t)\mathbf k)$ at $t=0$ gives $\partial_tG(0,\mathbf k)=(\mathbf a\times f)(\mathbf k)-(\mathbf a\times\mathbf k)\cdot\nabla_{\mathbf k}f(\mathbf k)$, which equals $-\frac{i}{\hbar}(L_{\mathbf a}+S_{\mathbf a}^{\mathrm{op}})f$ because $-iS_{\mathbf a}v=\mathbf a\times v$. If $f\ne0$, use the closed radial annulus $K$ from step 2.2 containing its compact support; for $t$ near zero each $G(t,\cdot)$ is supported in $K$. The product of a compact time interval and $K$ is a closed bounded subset of $\mathbb R^4$, hence compact by [F4], and $G$ and its $t$-derivative are continuous there. Thus [F4] makes $\partial_tG$ uniformly continuous. For each fixed $\mathbf k\in K$ and each of the six real coordinate functions $g(s)$ of $G(s,\mathbf k)\in\mathbb C^3\cong\mathbb R^6$, set $m=(g(t)-g(0))/t$ for $t\ne0$. The function $g(s)-ms$ has equal endpoint values on the compact interval between $0$ and $t$. If it is nonconstant, [F6] gives an interior maximum or minimum. Difference quotients from the two sides then have opposite weak signs, so differentiability forces its derivative there to be zero. If it is constant, its derivative is zero everywhere. Thus $m=g'(c)$ for some $c$ between $0$ and $t$. Uniform continuity and $|c|\le|t|$ imply that the difference quotients of $G$ converge uniformly on $K$ to $\partial_tG(0,\cdot)$. Since $\nu(K)<\infty$ by [F2], this gives convergence in $L^2(d\nu)$; the quotients lie in the closed subspace $\mathcal H_T^\nu$ by step 1.1, so the limit is the norm derivative in that space. For $f=0$ the derivative is immediate. By the Stone derivative characterization in step 3.1, $f\in D(J_{\mathbf a})$ and $J_{\mathbf a}f=(L_{\mathbf a}+S_{\mathbf a}^{\mathrm{op}})f$. [F2, F4, F6, step 1.1, step 1.4, step 2.2, step 3.1, algebra]

5.1 If $f\in\mathcal D$, then $(\mathbf a\times\mathbf k)\cdot\nabla_{\mathbf k}(\mathbf k\cdot f)=0$; expanding this derivative and using $\mathbf k\cdot f=0$ gives $\mathbf k\cdot L_{\mathbf a}f=i\hbar(\mathbf k\times f)\cdot\mathbf a$. The matrix definition of $S_{\mathbf a}$ gives $\mathbf k\cdot S_{\mathbf a}^{\mathrm{op}}f=-i\hbar(\mathbf k\times f)\cdot\mathbf a$. Their sum is zero, so step 4.1 shows that $J_{\mathbf a}$ preserves transversality on $\mathcal D$. [given, step 4.1, algebra]

6.1 The separate terms need not preserve transversality. For $\mathbf a=e_3$, choose by [F5] a smooth bump $\rho$ equal to $1$ on $B_{1/8}(0)$ and supported in $B_{1/4}(0)$, and translate it to $\chi(\mathbf k)=\rho(\mathbf k-e_1)$. Its support misses the $e_3$ axis. Put $f(\mathbf k)=\chi(\mathbf k)(e_3\times\mathbf k)$. Then $f\in\mathcal D$, while $(\mathbf k\times f)\cdot e_3=\chi(\mathbf k)(k_1^2+k_2^2)$ is nonzero near $e_1$. By the calculation in step 5.1, both $\mathbf k\cdot L_{e_3}f$ and $\mathbf k\cdot S_{e_3}^{\mathrm{op}}f$ are nonzero there, with opposite signs. This proves that neither term separately preserves the transverse space, whereas their sum does. [F2, F5, step 5.1, construct, algebra] ∎

## Remarks

For each $R\in SO(3)$, the unitary $W$ from the preceding measure-isometry lemma intertwines the weighted and Lebesgue realizations of this rotation action:

```tikzcd
\begin{tikzcd}
\mathcal H_T^\nu \arrow[r,"W"] \arrow[d,"U_\nu(R)"'] & \mathcal H_T^0 \arrow[d,"U_0(R)"]\\
\mathcal H_T^\nu \arrow[r,"W"] & \mathcal H_T^0
\end{tikzcd}
```

The vertical arrows are the actions $f(\mathbf k)\mapsto Rf(R^{-1}\mathbf k)$ in the indicated Hilbert spaces. The diagram records the identity $WU_\nu(R)=U_0(R)W$, proved by direct substitution in step 1.2 above; no step of the proof above relies on the diagram.
