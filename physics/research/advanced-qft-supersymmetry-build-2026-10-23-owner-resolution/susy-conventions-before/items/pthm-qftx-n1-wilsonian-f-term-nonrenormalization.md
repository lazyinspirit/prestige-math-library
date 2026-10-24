---
id: pthm-qftx-n1-wilsonian-f-term-nonrenormalization
kind: physics-theorem
title: N=1 Wilsonian F-Term Nonrenormalization
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 4
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-ward-and-nonrenormalization
deps:
  - def-qftx-wilsonian-n1-action-data
  - def-qftx-n1-chiral-superfield
  - def-qftx-nonabelian-brst-complex
  - lem-qftx-nonabelian-brst-nilpotence
dependency_roles:
  def-qftx-wilsonian-n1-action-data: formulation-prerequisite
  def-qftx-n1-chiral-superfield: mathematical-premise
  def-qftx-nonabelian-brst-complex: mathematical-premise
  lem-qftx-nonabelian-brst-nilpotence: mathematical-premise
physical_scope: "Formal perturbative Wilsonian deductions for rigid four-dimensional N=1 gauge theories with a symmetry-preserving regulator, at nonzero Wilsonian scale and in the topologically trivial sector. The result makes no nonperturbative, arbitrary 1PI, continuum-existence, or empirical claim."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Steven Weinberg, Non-Renormalization Theorems in Non-Renormalizable Theories"
      url: "https://arxiv.org/pdf/hep-th/9803099v1"
      locator: "Equations (1)–(12), pp. 2–7, for the complete spurion, symmetry, and graph-counting proof; pp. 7–8 for the U(1) Fayet–Iliopoulos argument. The local proof derives the one-vertex C_2 count directly from Eq. (12), because the following case enumeration appears to conflict with that equation."
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§§4.7 and 4.10, printed pp. 41 and 48–49, for holomorphic F terms and real Kähler/gauge-kinetic data; §6.5, printed pp. 66–67, for wave-function anomalous dimensions and canonical-coupling running."
verification:
  precheck: pending
---

## Statement

Let a local rigid four-dimensional N=1 superspace action datum have the form fixed above, including its canonical matter kinetic term, with finite-dimensional unitary matter representations of a fixed compact gauge group, an additional real D-term integrand $G$, a holomorphic gauge-invariant F-term integrand $F(\Phi,W)$, and a formal Wilsonian cutoff prescription at a nonzero scale $0<\lambda<\Lambda_0$. Assume the selected prescription supplies the one-particle-irreducible cutoff vertex functional and a local derivative expansion coefficientwise in formal perturbation theory around the topologically trivial background, as specified above. Let $\langle\cdot\rangle_\lambda$ be the normalized coefficientwise expectation of the selected regulated formal expansion. Assume its rigid N=1 and BRST changes of variables obey $\langle\delta_{\epsilon,\bar\epsilon}\mathcal O\rangle_\lambda=\langle\mathcal O\,\delta_{\epsilon,\bar\epsilon}S_\lambda\rangle_\lambda$ and $\langle s\mathcal O\rangle_\lambda=0$ for every local insertion $\mathcal O$, with counterterms satisfying the same identities and no local gauge anomaly. Then the Wilsonian chiral integrand is unchanged coefficientwise, $F_\lambda(\Phi,W)=F(\Phi,W)$; the holomorphic gauge-coupling parameters may receive one-loop corrections, but no higher-loop corrections. If an unbroken U(1) factor is present, a Fayet–Iliopoulos parameter can receive a correction only at one loop, and that correction is proportional to the sum of the U(1) charges of all left-chiral multiplets, including multiplicities; it vanishes when this charge sum is zero. The theorem imposes no nonrenormalization condition on the additional real D-term integrand $G_\lambda$, the Kähler data, or coefficients expressed after a scale-dependent chiral-field rescaling that normalizes a positive real quadratic kinetic form. It is only a formal perturbative Wilsonian statement at nonzero cutoff: it does not assert nonperturbative exactness, a result for an arbitrary one-particle-irreducible functional, or existence of a continuum interacting quantum field theory.

## Statement references

[Weinberg, equations (1)–(12) and the Fayet–Iliopoulos argument](https://arxiv.org/pdf/hep-th/9803099v1)

[Martin, §§4.7, 4.10, and 6.5](https://arxiv.org/pdf/hep-ph/9709356v7)

[[def-qftx-wilsonian-n1-action-data|local N=1 Wilsonian action data]]

## Facts & Assumptions

**Given:** A local rigid N=1 action datum, a formal high-mode split at $0<\lambda<\Lambda_0$, and the perturbative, locality, symmetry-preservation, and anomaly-free hypotheses in the statement.

[F1] [[def-qftx-wilsonian-n1-action-data]]: the bare density contains the canonical matter kinetic term $\sum_i\Phi_i^\dagger e^{-V_i}\Phi_i$, an additional real gauge-invariant $G$, and the chiral term $\tau\operatorname{Tr}(W^\alpha W_\alpha)/(8\pi i)+F(\Phi,W)$; the selected cutoff prescription explicitly assumes a local derivative expansion and one-particle-irreducible vertex coefficients, without proving generic partial integration has either property.

[F2] [[def-qftx-nonabelian-brst-complex]]: the component gauge/ghost convention is $sA_\mu=\partial_\mu c+[A_\mu,c]$, $sc=-\tfrac12[c,c]$, and $s\Phi_i=-\rho_{i*}(c)\Phi_i$, extended as an odd derivation to finite jets.

[F3] [[lem-qftx-nonabelian-brst-nilpotence]]: for the stated finite-dimensional Lie algebra and representation data, the declared BRST differential satisfies $s^2=0$ on the finite-jet algebra.

[F4] [[def-qftx-n1-chiral-superfield]]: the supersymmetry generators are $Q_\alpha=\partial^L_{\theta^\alpha}-i\sum_{\mu,\dot\alpha}\sigma^\mu_{\alpha\dot\alpha}\bar\theta^{\dot\alpha}\partial_\mu$ and $\bar Q_{\dot\alpha}=-\partial^L_{\bar\theta^{\dot\alpha}}+i\sum_{\mu,\alpha}\theta^\alpha\sigma^\mu_{\alpha\dot\alpha}\partial_\mu$; for external odd parameters, $\delta_{\epsilon,\bar\epsilon}\Phi=\epsilon^\alpha Q_\alpha\Phi+\bar\epsilon^{\dot\alpha}\bar Q_{\dot\alpha}\Phi$.

[F5] [[def-qftx-wilsonian-n1-action-data]]: in a two-derivative scalar sector, $K(\phi,\bar\phi)$ is a real Kähler potential and $g_{i\bar j}=\partial^2K/(\partial\phi_i\partial\bar\phi_j)$ is its Hermitian metric; both are real D-term data, not holomorphic F-term data.

[A1] The perturbative expansion is formal and coefficientwise about the topologically trivial sector; no instanton or other nonperturbative contribution is included. The topological-angle density is treated as a total derivative under the stated boundary convention.

[A2] At every perturbative order the regulated local counterterms lie in the declared superspace action class and preserve the rigid supersymmetry and BRST/gauge Ward identities. Explicitly, for the normalized coefficientwise expectation, $\langle\delta_{\epsilon,\bar\epsilon}\mathcal O\rangle_\lambda=\langle\mathcal O\,\delta_{\epsilon,\bar\epsilon}S_\lambda\rangle_\lambda$ and $\langle s\mathcal O\rangle_\lambda=0$ for every local insertion $\mathcal O$. The selected quantum measure has no local gauge anomaly.

[A3] For the spurion selection argument, each independent coefficient of $F$ and $\tau$ may be promoted to a constant nondynamical chiral superfield, and each real coefficient of $G$ to a constant nondynamical real superfield whose scalar component varies in a nonempty positive open domain. Formal graph coefficients are analytic in these parameters there. A possible anomalous spurion Jacobian is retained as a chiral gauge-kinetic contribution and is counted below.

[A4] For each U(1) qualification, the perturbative background leaves that factor unbroken. The FI parameter means the field-independent coefficient of $\int d^4\theta\,V_1$; any separately specified field-dependent D-term, including a real linear-multiplet coupling, remains distinct data in $G_\lambda$. The charge sum includes every left-chiral multiplet with its representation multiplicity.

## Proof

1.1 By [F1], [F4], and [A2], the local Wilsonian density at every perturbative order has the same superspace and gauge-invariant decomposition into the fixed canonical matter kinetic term, an additional real D-term, a chiral F-term, and the separately displayed holomorphic gauge-kinetic term. The BRST differential used to state gauge invariance is well-defined and nilpotent by [F2] and [F3]; this is a premise about the local gauge algebra, not a proof of quantum anomaly cancellation. [given, F1, F2, F3, F4, A2]

2.1 Promote the holomorphic coefficients in $F$ to independent chiral spurions and the coefficients in $G$ to real spurions, as in [A3]. On a local open set where a real spurion $P$ has positive scalar component $p_0$, write $P=p_0(1+N)$, where $N$ is nilpotent in the finite Grassmann algebra. The finite logarithm $V_P=\log(P/p_0)$ is real, so the constant chiral spurion $Z=\sqrt{p_0}$ gives $P=Z^\dagger Z e^{V_P}$. The change $Z\mapsto e^{i\alpha}Z$ leaves $P$ and the original action fixed. A local chiral integrand is holomorphic, so it cannot depend on $Z^\dagger$; phase invariance therefore forbids nonconstant dependence on this independent $Z$. The only possible failure of this selection rule from a local Jacobian is a chiral gauge-kinetic term, which is retained in $\tau_\lambda$. Analyticity in [A3] extends the resulting identity from the positive open set to the formal coefficient domain. Thus no coefficient of $G$ enters $F_\lambda$. [A3, algebra, step 1.1]

3.1 Assign the bookkeeping R charges $R(\theta^\alpha)=1$, $R(\bar\theta^{\dot\alpha})=-1$, $R(\Phi)=R(V)=R(\tau)=0$, and $R(f_r)=2-r$ to a coefficient $f_r$ multiplying a term with $r$ field-strength superfields; then $R(W_\alpha)=1$ and the chiral density must have total R charge two. Also, the shift $\tau\mapsto\tau+\zeta$ for real constant $\zeta$ changes the topological-angle contribution by a multiple of $\int\operatorname{Tr}(F_A\wedge F_A)=\int d\operatorname{Tr}(A\wedge dA+\tfrac23A\wedge A\wedge A)$. This is a total derivative in the perturbative trivial sector with the boundary convention in [A1]. Hence a possible correction to the full chiral density has the form $\Delta_\lambda=c_\lambda\tau\operatorname{Tr}(W^\alpha W_\alpha)+H_\lambda(\Phi,W,f)$, where $H_\lambda$ is independent of $\tau$. [A1, A3, step 2.1, algebra]

4.1 Consider a connected graph contributing to this chiral density, with $E_V$ external left-handed gaugino lines and $I_V$ internal vector lines. Let $A_m$ count pure-gauge vertices from the quadratic $W^\alpha W_\alpha$ term with $m\geq3$ vector lines; let $B_{mr}$ count vertices from an F-term containing $r$ field strengths and $m\geq r$ vector lines; and let $C_m$ count vertices from the fixed canonical matter kinetic term with two chiral lines and $m\geq1$ vector lines. Counting vector-line ends gives $2I_V+E_V=\sum_{m\geq3}mA_m+\sum_r\sum_{m\geq r}mB_{mr}+\sum_{m\geq1}mC_m$. The R-charge condition gives $\sum_r\sum_{m\geq r}(2-r)B_{mr}=2-E_V$. Each vector propagator contributes one factor $\tau^{-1}$ and each pure-gauge vertex one factor $\tau$, so $N_\tau=\sum_{m\geq3}A_m-I_V$; eliminating $E_V$ and $I_V$ yields $N_\tau=1-\tfrac12[\sum_{m\geq3}(m-2)A_m+\sum_r\sum_{m\geq r}(2-r+m)B_{mr}+\sum_{m\geq1}mC_m]$. [F1, A2, A3, step 3.1, algebra]

5.1 Every coefficient inside the square brackets is a positive integer. A graph contributing to the $\tau$-independent part $H_\lambda$ must have $N_\tau=0$, so the bracket equals two. The positive-integer solutions are two cubic or one quartic pure-gauge vertices, one $B_{mr}$ vertex with $m=r$, two $C_1$ vertices, one $C_2$ vertex, or the mixed case with one cubic gauge vertex and one $C_1$ vertex. For the $B_{mr}$ case, [step 4.1]'s R-charge equation gives $E_V=r=m$; the vector-end equation then gives $I_V=0$. It is the original single tree insertion. In the $A_3=2$ pure-gauge case the R-charge equation gives $E_V=2$ and the vector-end equation is $2I_V+2=6$, so $I_V=2$ and $L=2-2+1=1$. In the $A_4=1$ case it is $2I_V+2=4$, so $I_V=1$ and $L=1-1+1=1$. Both are one-particle-irreducible contributions to the gauge-kinetic term. For either matter-only case, the R-charge equation gives $E_V=2$ and the vector-end equation gives $2I_V+2=2$, so $I_V=0$. Each $C_m$ vertex contains one chiral and one antichiral matter line. A contribution to a holomorphic F-term cannot have an external antichiral line; with no other vertex type present, the two $C_1$ vertices therefore contract their two antichiral ends with their two chiral ends, giving $I_\Phi=2$, while the one $C_2$ vertex contracts its own chiral/antichiral pair, giving $I_\Phi=1$. Thus in each case the total internal-line count equals the vertex count and $L=1$; no matter line is external, so these graphs correct only the field-independent gauge-kinetic term. In the mixed case the end equation is $2I_V+2=3+1=4$, so $I_V=1$; the single $C_1$ vertex contracts its chiral/antichiral pair, giving $I_\Phi=1$. Hence $I=2$, $N_{\rm vert}=2$, and $L=1$. Its sole vector line is a bridge separating the gauge vertex from the matter vertex, so it is one-particle-reducible and excluded by the vertex convention in [F1]. Therefore the only tree contribution is the original $F$, every other allowed contribution is a one-loop gauge-kinetic correction that shifts the separately displayed $\tau_\lambda$, and no higher-loop correction is possible. A graph contributing to an additional $c_\lambda\tau W^2$ term would require $N_\tau=1$, hence a zero bracket and no vertices, which cannot form a graph with external fields; therefore $c_\lambda=0$. [F1, A2, step 4.1, algebra]

6.1 For an unbroken U(1) factor, the prepotential shifts by $V_1\mapsto V_1-\Lambda_1-\bar\Lambda_1$. A constant coefficient $\xi$ multiplying $\int d^4x\,d^4\theta\,V_1$ is gauge invariant because the Berezin integral of the chiral and anti-chiral shifts vanishes under the boundary condition in [F1]. For a field-independent coefficient promoted to a real spurion $S$, the variation contains $\int d^2\theta\,(-\tfrac14\bar D^2S)\Lambda_1$ and its conjugate; invariance for arbitrary chiral $\Lambda_1$ forces the spurion components relevant to this operator to be constant. A separately specified field-dependent linear-multiplet coupling is not this FI coefficient and remains part of $G_\lambda$ by [A4]. Therefore a correction to the constant FI coefficient must be independent of the coupling spurions in [A3]. The only such candidate is the matter tadpole from the canonical kinetic vertex. Since all masses and interactions are spurions, this coupling-independent regulated integral is the same for each chiral component; the representation enters only through its charge. Writing its common value as $C_\lambda$, the correction is $\delta\xi^{(1)}=C_\lambda\sum_i q_i$. This is a one-loop graph, so the correction vanishes when the charge sum is zero and there are no higher-loop FI graphs. [F1, A2, A3, A4, step 5.1]

7.1 The argument constrains the chiral integrand and the FI tadpole only; it places no equality requirement on the arbitrary real function $G_\lambda$ in [F1] or on the real Kähler data in [F5]. Since the high-mode split retains momenta below $\lambda$ and [A1] excludes nonperturbative sectors, no conclusion follows for an arbitrary one-particle-irreducible functional, instanton corrections, coefficients after field rescaling, or a continuum limit. These are exactly the qualifications in the statement. [F1, F5, A1, step 1.1, step 5.1, step 6.1] ∎

