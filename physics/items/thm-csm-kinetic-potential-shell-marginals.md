---
id: thm-csm-kinetic-potential-shell-marginals
kind: theorem
title: "Kinetic-plus-potential shell marginals and moments"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-phase-space-reference
  - thm-csm-regular-shell-coarea
  - def-axiom-of-choice
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-dominated-convergence
  - lem-finite-measure-uniqueness-on-a-pi-system
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  def-csm-phase-space-reference: mathematical-premise
  thm-csm-regular-shell-coarea: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  lem-finite-measure-uniqueness-on-a-pi-system: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text, §4.2.2"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
    - title: "David Tong, Statistical Physics, complete author-hosted lecture-note chapter 1, §1.2"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
---

## Statement

Let integers $d,N\ge1$ satisfy $n=dN\ge3$. Choose a basis
$b_1,\ldots,b_d$ of $\mathbb R^d$ and the full-rank lattice
$\Lambda:=\sum_{i=1}^d\mathbb Zb_i$. The one-particle flat torus is
$Q:=\mathbb R^d/\Lambda$ with its quotient Euclidean metric and
translation-invariant volume $V:=|\det(b_1,\ldots,b_d)|$. Write
$\Lambda^N:=\Lambda\times\cdots\times\Lambda$ ($N$ factors) and set
$Q_N:=Q^N\cong\mathbb R^n/\Lambda^N$, whose position volume is $V^N$.
Use the global parallel cotangent trivialization $\Gamma_N\cong Q_N\times
\mathbb R^n$ and the product of quotient Lebesgue volume $dq$ with fibre
Lebesgue measure $dp$ in the canonical reference
$m_N=c_Ndq\,dp$ of [[def-csm-phase-space-reference]]. Let $m_j>0$ for
$1\le j\le n$, and let $U:Q_N\to\mathbb R$ be bounded with a smooth lift
$\widetilde U:\mathbb R^n\to\mathbb R$ satisfying
$\widetilde U(x+\lambda)=\widetilde U(x)$ for all $x\in\mathbb R^n$ and
$\lambda\in\Lambda^N$. Set
$$H(q,p)=\sum_{j=1}^n\frac{p_j^2}{2m_j}+U(q),\qquad \alpha=n/2,\qquad C_m=\prod_{j=1}^n\sqrt{2m_j}.$$
Let $B_n$ be the Euclidean volume of the unit ball in $\mathbb R^n$. Fix
an energy $E$ that is a regular value of $H$ and whose shell
$\Sigma_E=H^{-1}(\{E\})$ is nonempty. For every continuous $g:Q_N\to\mathbb R$,
the coarea shell measure from [[thm-csm-regular-shell-coarea]] satisfies
$$\mu_E(g\circ\pi_N)=c_N C_m\alpha B_n\int_{Q_N}g(q)(E-U(q))_+^{\alpha-1}\,dq,$$
where $x_+=\max(x,0)$. Thus the position marginal of $P_E$ has density
proportional to $(E-U)_+^{\alpha-1}$. In the scaled momentum coordinates
$r_j=p_j/\sqrt{2m_j}$, the coarea shell measure over each $q$ with
$E>U(q)$ has fiber factor $dA_r/(2|r|)$ on the sphere
$|r|=\sqrt{E-U(q)}$. Define $\sigma_{E,q}$ as Euclidean surface area on
that sphere divided by its total area. It satisfies
$$\int \frac{p_j^2}{2m_j}\,d\sigma_{E,q}=\frac{E-U(q)}{n},\qquad \int \sum_j\frac{p_j^2}{2m_j}\,dP_E=\int(E-U(q))\,dP_E(q).$$
The result concerns the full kinetic-plus-potential shell; it does not replace
it by a shell of potential energy alone.

## Facts & Assumptions

**Given:** The flat compact configuration torus, positive masses, bounded smooth potential, regular nonempty full shell, and full AC for the coarea supplier.

[A1] Assume the Axiom of Choice required by [[thm-csm-regular-shell-coarea]] and its published Euclidean supplier ([[def-axiom-of-choice]]).

[A2] $Q_N$ is compact, $U$ is smooth, and $E$ is a regular value; therefore $\Sigma_E$ is a compact smooth shell and a compact energy band exists around $E$.

[F1] The phase reference is $c_Ndq\,dp$ in canonical coordinates ([[def-csm-phase-space-reference]]).

[F2] The compact-band shell measure disintegrates phase volume over energy and equals the coarea density ([[thm-csm-regular-shell-coarea]]).

[F3] A nonnegative $C^1$ change of variables transforms Euclidean integrals by the absolute Jacobian under the stated choice premise ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[def-axiom-of-choice]]).

[F4] Dominated convergence permits differentiation limits with one integrable majorant ([[thm-dominated-convergence]]).

[F5] Finite measures agreeing on a generating $\pi$-system agree on its generated sigma-algebra ([[lem-finite-measure-uniqueness-on-a-pi-system]]).

[F6] Nonnegative product integrals may be evaluated by Tonelli on sigma-finite factors ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

## Proof

**Given:** [A1]–[A2] and the phase-volume, coarea, change-of-variables, convergence, uniqueness and product-integration facts [F1]–[F6].

1.1 Put $r_j=p_j/\sqrt{2m_j}$, so $dp=C_m\,dr$ and the kinetic energy is $|r|^2$. For $t\ge0$, scalar dilation $r=\sqrt t\,u$ has Jacobian $t^{n/2}$, so the $r$-volume of $\{|r|^2\le t\}$ is $B_nt^\alpha$. Integrating over $q$ therefore gives the sublevel volume $$m_N\{H<E\}=c_NC_mB_n\int_{Q_N}(E-U(q))_+^\alpha\,dq.$$ The level boundary has zero phase volume: in each finite regular graph chart, every one-dimensional vertical section is empty or a singleton, so [F6] gives zero ambient measure; finitely many charts cover the shell. [A1, A2, F1, F3, F6, algebra]

2.1 Choose $E_-<E$ in $J$ and vary the upper endpoint $E$ in a compact subinterval of $J$. The coarea disintegration [F2], applied to the compact band $H^{-1}([E_-,E])$, gives the volume of $\{E_-<H<E\}$ as $\int_{E_-}^E\mu_s(1)\,ds$. The explicit sublevel formula in step 1.1 makes this band volume $F(E)-F(E_-)$, where $F(E)=c_NC_mB_n\int(E-U)_+^\alpha dq$. Its difference quotients are bounded on compact $E$ intervals by a finite constant because $Q_N$ is compact and $U$ bounded; [F4] gives $F'(E)=c_NC_m\alpha B_n\int(E-U)_+^{\alpha-1}dq$. The finite graph-chart formula in [F2], with $|\partial_iH|$ bounded below on smaller compact chart supports, makes $s\mapsto\mu_s(1)$ continuous by [F4]. The fundamental theorem of calculus therefore gives $F'(E)=\mu_E(1)$ at every regular $E$. [A2, F2, F4, step 1.1]

3.1 Repeating the radial calculation in step 1.1 and the local energy-derivative argument in step 2.1 with the bounded factor $g(q)$ gives the displayed identity for every continuous $g$. The two finite Borel measures on $Q_N$ consequently agree on continuous test functions; approximating indicators of closed sets by $q\mapsto\max(0,1-k\,\mathrm{dist}(q,F))$ and applying dominated convergence shows they agree on closed sets, and [F5] extends equality to all Borel sets. Dividing by the positive total shell mass proves the position-marginal assertion. [A2, F2, F4, F5, step 2.1, algebra]

4.1 Fix $q$ with $E>U(q)$ and put $R=\sqrt{E-U(q)}$. On a sphere chart where $r_j\ne0$, solve $r_j=h(q,r',E)$ with $|r|=R$. Implicit differentiation gives $|\partial_Eh|=1/(2|r_j|)$ and $\nabla_{(q,r')}h=(-\nabla U/(2r_j),-r'/r_j)$. Consequently the full graph-area factor is $\sqrt{1+|\nabla_{(q,r')}h|^2}=|\nabla_{q,r}H|/(2|r_j|)$, while its fixed-$q$ sphere-area factor is $\sqrt{1+|\nabla_{r'}h|^2}=R/|r_j|$. Thus $dA_{\rm full}/|\nabla H|=dq\,dr'/(2|r_j|)=dq\,dA_r/(2R)$, so the local chart coarea expression [F2], up to the common factor $c_NC_m$, has the asserted fiber factor. Orthogonal coordinate permutations preserve Euclidean surface area by their unit tangent Jacobian, so all $r_j^2$ have equal averages under normalized area $\sigma_{E,q}$. Their sum is the constant $R^2$, hence each average is $R^2/n=(E-U(q))/n$. Since $p_j^2/(2m_j)=r_j^2$, this proves the first fiber identity. The total kinetic energy equals $E-U(q)$ pointwise on $\Sigma_E$, and integration against $P_E$ proves the last identity. [A2, F2, F3, step 3.1, algebra] ∎

