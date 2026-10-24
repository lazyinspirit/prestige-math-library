---
id: pthm-aqft-supersymmetric-threshold-matching
kind: physics-theorem
title: Leading Wilsonian Superpotential Match at a Supersymmetric Chiral Threshold
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: aqft-susy-effective-theories
dependency_level: 7
deps:
  - def-aqft-susy-wilsonian-action
  - def-aqft-threshold-matching-map
  - def-qftx-n1-chiral-superfield
  - def-qftx-superspace-grassmann-algebra
  - def-axiom-of-choice
dependency_roles:
  def-aqft-susy-wilsonian-action: formulation-prerequisite
  def-aqft-threshold-matching-map: formulation-prerequisite
  def-qftx-n1-chiral-superfield: mathematical-premise
  def-qftx-superspace-grassmann-algebra: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
forward_refs: []
axiom_base: "ZF + full Axiom of Choice adopted as a sufficient ambient assumption for the action data; the chiral elimination algebra itself uses no choice."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: "Tree-level, zero-supercovariant-derivative Wilsonian superpotential matching for one declared massive gauge-singlet chiral multiplet in a rigid four-dimensional N=1 EFT. No full amplitude match, loop correction, nonperturbative effect, continuum theory, or empirical result is asserted."
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§4.7, equations (4.7.5)–(4.7.9), printed pp. 41–42: chiral superspace action, superfield equation of motion, and derivative terms."
    - title: "Aneesh V. Manohar, Introduction to Effective Field Theories"
      url: "https://arxiv.org/pdf/1804.05863"
      locator: "Chapter 5, §§5.5–5.7, printed pp. 38–41: finite-order matching and the low-energy expansion; Chapter 7, §7.2, printed pp. 59–61: a declared threshold match and higher-dimension terms."
    - title: "C. P. Burgess, Introduction to Effective Field Theory"
      url: "https://arxiv.org/pdf/hep-th/0701053"
      locator: "§4.1.4, printed pp. 44–47: threshold matching of selected light-particle amplitudes with fixed mass and scheme data."
verification:
  precheck: pass
---

## Statement

Adopt full Axiom of Choice as a sufficient ambient assumption for the action data. Use natural units $c=\hbar=1$ and the rigid four-dimensional $\mathcal N=1$ Wilsonian EFT data in the action definition. Let $\Phi$ be a finite collection of light chiral superfields and let $X$ be one heavy gauge-singlet chiral superfield with canonical physical D-term $[X^\dagger X]_D$. Suppose the derivative-free holomorphic high-energy superpotential is

$$W_+(\Phi,X)=W_L(\Phi)+\frac12 M X^2+XJ(\Phi),$$

where $M>0$ has mass dimension one, $[\Phi_i]=[X]=1$, $W_L$ is a gauge-invariant holomorphic function of mass dimension three, and $J$ is a gauge-singlet holomorphic function of mass dimension two. Both functions are defined on the supplied open light-scalar domain $\mathcal D\subseteq\mathbb C^n$, where $n$ counts the light scalar components; their values on even Grassmann-valued fields use their finite Taylor extensions about the scalar bodies in $\mathcal D$. The model identifies the physical heavy threshold mass with this positive coefficient $M$. Let $\Pi_0$ denote the projection in the supplied formal superspace-derivative expansion onto degree zero in $\partial_\mu,D_\alpha,\bar D_{\dot\alpha}$, with each $D$ and $\bar D$ assigned degree $1/2$; this is a formal truncation and gives no numerical remainder bound. Assume the declared tree-level threshold prescription varies the full local action, including any additional real D-term, takes the $\Pi_0$ projection of its chiral Euler equation, and substitutes that stationary solution into $W_+$, at external energies $E_{\mathrm{ext}}\ll M$.

Fix finite operator bases and truncations that retain $W_+$ in the high-energy theory and both $W_L$ and $J^2/(2M)$ in the low-energy theory. Precisely, let $P_-$ be the supplied linear projection from the space of admitted holomorphic light-field functions onto the finite span of retained derivative-free F-term representatives, with their supplied coefficient normalizations; require $P_-W_L=W_L$ and $P_-(J^2/(2M))=J^2/(2M)$. Thus the field-degree, engineering-dimension, and inverse-mass cutoffs discard no term of these two functions. Use the action definition's action-to-scheme identifications with a specified holomorphic coordinate block representing these same F-term coefficients, including suppression-scale factors, in the same unrescaled light fields. Then, in these Wilsonian action coordinates, the holomorphic coefficient component of the declared tree-level threshold prescription is

$$W_-^{(0)}(\Phi)=W_L(\Phi)-\frac{J(\Phi)^2}{2M}.$$

The Wilsonian scale $\mu_W$, renormalization scale $\mu$, $M$, $E_{\mathrm{ext}}$, regulator cutoff $\Lambda_{\mathrm{reg}}$, and operator-suppression scale $\Lambda_{\mathrm{op}}$ remain distinct inputs; no equality among them is inferred. This result gives the leading derivative-free F-term coordinate only. If a smaller truncation does not satisfy the retention condition, the algebraic substituted superpotential is still the displayed function, but its retained representative is only $P_-(W_L-J^2/(2M))$; a discarded operator has no retained coordinate. The matching definition's equality for selected renormalized amplitudes or Green functions, its common infrared regulator, and its retained truncation must still be checked as supplied matching data. No loop, arbitrary one-particle-irreducible, nonperturbative, or continuum statement follows.

## Statement references

[[def-aqft-susy-wilsonian-action|Finite N=1 Wilsonian action and threshold data]]

[[def-aqft-threshold-matching-map|Finite-order matching coordinates and amplitude conditions]]

[[def-qftx-n1-chiral-superfield|Smooth N=1 chiral superfields and covariant derivatives]]

[[def-qftx-superspace-grassmann-algebra|Ordered Berezin measures and coefficient-extraction integration]]

[[def-axiom-of-choice|Full Axiom of Choice adopted as a sufficient ambient assumption]]

[Martin, §4.7, equations (4.7.5)–(4.7.9)](https://arxiv.org/pdf/hep-ph/9709356v7)

[Manohar, Chapter 5, §§5.5–5.7, and Chapter 7, §7.2](https://arxiv.org/pdf/1804.05863)

[Burgess, §4.1.4](https://arxiv.org/pdf/hep-th/0701053)

## Facts & Assumptions

**Given:** Full AC; the local rigid N=1 action and finite Wilson-coefficient data; a positive heavy mass $M$; the stated leading derivative-free tree-level matching prescription; and the retained holomorphic representatives and coordinate identifications.

[F1] [[def-aqft-susy-wilsonian-action]]: the high- and low-energy actions use smooth classical N=1 chiral fields and a derivative-free holomorphic F-term, with real D-term data kept separate; all Wilsonian, renormalization, threshold, external-energy, regulator, and operator-suppression scales are supplied independently.

[F2] [[def-qftx-n1-chiral-superfield]]: a chiral superfield is a smooth finite-Grassmann-valued field obeying $\bar D_{\dot\alpha}X=0$; the superspace derivatives and natural-unit dimensions are fixed.

[F3] [[def-qftx-superspace-grassmann-algebra]]: the ordered Berezin measures are coefficient-extraction integrals, and compact-support or stated boundary conditions permit the corresponding superspace and spacetime integrations by parts.

[F4] [[def-aqft-threshold-matching-map]]: a finite-order matching map compares only selected high- and low-energy renormalized amplitudes or Green functions with the same infrared regulator, external data, and declared loop, operator, and mass truncations; this definition calculates no matching coefficient.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. Full AC is adopted as a sufficient ambient assumption for the action data; the supplied regulated equivalence theorem requires no additional full-Choice premise, and the scalar equation and substitution below use no choice.

[A2] The heavy-field elimination prescription is the degree-zero projection $\Pi_0$ of the full chiral Euler equation of the selected local action, including the variation of any $X$-dependent additional real D-term $G_\lambda$. The omitted supercovariant-derivative terms, higher derivative operators, and all loop corrections are outside this tree-level statement.

[A3] All admitted fields, variations, and currents obey the compact-support or vanishing-boundary convention of the selected action data.

[A4] The finite holomorphic projection $P_-$ fixes $W_L$ and $J^2/(2M)$ individually. The action-to-scheme identifications specify the same holomorphic coefficient block with its normalization factors and unrescaled light fields. These are supplied retention and coordinate conditions, not consequences of $\Pi_0$ or of amplitude matching.

## Proof

**Given:** [F1]–[F4] and [A1]–[A4].

1.1 Vary $X$ as a chiral superfield, independently of its conjugate variation, and define the local superspace Euler derivative $\mathcal E_X(G_\lambda)$ by $\delta_X\int d^4x\,[G_\lambda]_D=\int d^4x\,[\delta X\,\mathcal E_X(G_\lambda)]_D$ after integrating spacetime and superspace derivatives off $\delta X$. This identity is valid under [A3]; locality of the action data makes $\mathcal E_X(G_\lambda)$ a formal local expression with only nonnegative derivative degrees. At fixed chiral coordinates, $P_{\mathrm{raw}}=\partial^L_{\bar\theta^{\dot2}}\partial^L_{\bar\theta^{\dot1}}|_{\bar\theta=0}$ extracts the top barred coefficient, so $I_D(U)=I_F(P_{\mathrm{raw}}U)$ up to the spacetime total derivatives removed by [A3]. Since $[U]_D=-I_D(U)/4$ and $[Y]_F=I_F(Y)/2$, the physical transfer is the integrated identity $\int d^4x\,[U]_D=\int d^4x\,[P_{\mathrm{phys}}U]_F$ under [A3], with $P_{\mathrm{phys}}=-P_{\mathrm{raw}}/2=+\bar D^{\dot\alpha}\bar D_{\dot\alpha}/4$, equivalently the minus-one-quarter formula with LOWER-FIRST contraction $\bar D_{\dot\alpha}\bar D^{\dot\alpha}$. As $\bar D_{\dot\alpha}\delta X=0$, both barred derivatives act only on the remaining factor in this transfer. The integrated variation of the full real D-term is therefore $\int d^4x\,[\delta X P_{\mathrm{phys}}(X^\dagger+\mathcal E_X(G_\lambda))]_F$, while varying $W_+$ gives $\int d^4x\,[\delta X(MX+J)]_F$. Hence the full physical chiral Euler equation is $P_{\mathrm{phys}}(X^\dagger+\mathcal E_X(G_\lambda))+MX+J=0$. [given, F1, F2, F3, A2, A3, algebra]

2.1 Each $\bar D_{\dot\alpha}$ has degree $1/2$, so $P_{\mathrm{phys}}$ has degree one. The formal superspace derivative algebra preserves this nonnegative degree, and both $X^\dagger$ and $\mathcal E_X(G_\lambda)$ have no negative-degree terms. Consequently $\Pi_0(P_{\mathrm{phys}}(X^\dagger+\mathcal E_X(G_\lambda)))=0$, including the contribution of every allowed local $G_\lambda$. Applying $\Pi_0$ to the equation in step 1.1 gives $MX+J(\Phi)=0$. Because $M>0$, this scalar linear equation has the unique solution $X_*=-J(\Phi)/M$. The chain rule gives $\bar D_{\dot\alpha}J(\Phi)=\sum_i (\partial_iJ)(\Phi)\bar D_{\dot\alpha}\Phi_i=0$, so $X_*$ is again an even chiral field on the supplied domain. [given, F1, F2, A2, step 1.1, algebra]

3.1 Substitute $X_*$ into the displayed high-energy superpotential. The even chiral fields commute, so the quadratic and linear heavy terms become $\tfrac12M(J^2/M^2)-J^2/M=-J^2/(2M)$, giving $W_+(\Phi,X_*)=W_L(\Phi)-J(\Phi)^2/(2M)$, with mass dimension $2[J]-[M]=3$ for the induced term. By linearity and [A4], $P_-(W_L-J^2/(2M))=W_L-J^2/(2M)$. Thus this entire function has retained F-term coordinates, and the stipulated identifications express this same result in the declared scheme block. Without [A4]'s retention condition only its $P_-$ projection has retained coordinates. [given, A4, step 2.1, algebra]

4.1 Full AC is an adopted ambient assumption [A1]; the representative calculation in step 3.1 is choice-free. The coordinate identifications in [F1] and [A4] connect this computed F-term component to the declared actions. By [F4], a full matching map still requires the selected amplitude equality; this calculation establishes neither that equality nor the low-energy matching of D-term or derivative coefficients or any estimate for discarded orders. [A1, A4, F1, F4, step 3.1] ∎
