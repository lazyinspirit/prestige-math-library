---
id: ex-aqft-soft-breaking-effective-operator
kind: example
title: Heavy-Chiral Threshold and a Spurion Soft Trilinear
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: aqft-susy-effective-theories-examples
dependency_level: 8
deps:
  - def-aqft-susy-wilsonian-action
  - pthm-aqft-supersymmetric-threshold-matching
  - pthm-aqft-wilsonian-superpotential-nonrenormalization
  - def-qftx-n1-chiral-superfield
  - def-qftx-superspace-grassmann-algebra
  - def-axiom-of-choice
dependency_roles:
  def-aqft-susy-wilsonian-action: formulation-prerequisite
  pthm-aqft-supersymmetric-threshold-matching: physical-result
  pthm-aqft-wilsonian-superpotential-nonrenormalization: physical-result
  def-qftx-n1-chiral-superfield: mathematical-premise
  def-qftx-superspace-grassmann-algebra: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
forward_refs: []
axiom_base: "ZF + full Axiom of Choice adopted as a sufficient ambient assumption for the selected action data; the explicit coefficient-extraction calculation uses no choice."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: "One formal rigid N=1 light-singlet EFT below a declared heavy-singlet threshold, with one fixed higher-dimensional chiral-spurion insertion. No phenomenological value, numerical smallness, loop protection after SUSY breaking, continuum result, or empirical observation is asserted."
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§5.1, printed pp. 52–53, for the positive-mass-dimension scalar trilinear soft term; §7.6, equations (7.6.1)–(7.6.5), printed pp. 82–83, for chiral spurions and component soft terms."
    - title: "Aneesh V. Manohar, Introduction to Effective Field Theories"
      url: "https://arxiv.org/pdf/1804.05863"
      locator: "Chapter 5, §§5.5–5.7, for the finite-order low-energy expansion after a heavy threshold."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Take one light gauge-singlet chiral superfield $\Phi$ and one heavy gauge-singlet chiral superfield $X$, with canonical quadratic D-terms, in the rigid flat-space $\mathcal N=1$ convention of the Wilsonian action definition. Let $M>0$ be the heavy threshold mass, let $g,y,\kappa\in\mathbb C$ be dimensionless, and choose

$$W_+(\Phi,X)=\frac12MX^2+\frac g2X\Phi^2+\frac y6\Phi^3.$$

Adopt full Axiom of Choice as a sufficient ambient assumption for the action data. Use the tree-level zero-supercovariant-derivative matching prescription at external energies $E_{\mathrm{ext}}\ll M$. Select high-energy holomorphic representatives containing $X^2,X\Phi^2,\Phi^3$ and a low-energy span containing $\Phi^3,\Phi^4$, with a linear projection $P_-$ fixing both latter monomials. Supply action-to-scheme identifications with these same holomorphic coefficients, suppression factors and unrescaled light field; no term of $W_L$ or $J^2/(2M)$ is discarded. The matched holomorphic Wilsonian superpotential coefficient is

$$W_-(\Phi)=\frac y6\Phi^3-\frac{g^2}{8M}\Phi^4.$$

In the low-energy EFT, choose a fixed nondynamical chiral spurion background $\mathcal X=2\theta^1\theta^2 F_{\mathcal X}$ with $[\mathcal X]=1$ and constant $[F_{\mathcal X}]=2$, and add the single local operator

$$\Delta W=\frac{\kappa}{6\Lambda_{\mathrm{op}}}\mathcal X\Phi^3,$$

where $\Lambda_{\mathrm{op}}>0$ is an operator-suppression scale distinct from $M$. After fixing this background, the added component term is $\frac{A_{\mathrm{soft}}}{6}\phi^3+\mathrm{h.c.}$ with $A_{\mathrm{soft}}=\kappa F_{\mathcal X}/\Lambda_{\mathrm{op}}$ and mass dimension one. Here a soft scalar trilinear means a scalar cubic interaction with a positive-mass-dimension coefficient. This is an explicit spurion insertion, not an observed value or a consequence of the supersymmetric threshold theorem. No numerical smallness bound on $A_{\mathrm{soft}}$ is asserted; omitting additional spurion insertions requires separate power-counting input.

## Example references

[[def-aqft-susy-wilsonian-action|Rigid $N=1$ Wilsonian action, field content, and scale conventions]]

[[pthm-aqft-supersymmetric-threshold-matching|Leading heavy-chiral Wilsonian superpotential match]]

[[def-qftx-n1-chiral-superfield|Smooth chiral superfields and component expansion]]

[[def-qftx-superspace-grassmann-algebra|Ordered Berezin integration by coefficient extraction]]

[Martin, §5.1 and §7.6](https://arxiv.org/pdf/hep-ph/9709356v7)

[Manohar, Chapter 5, §§5.5–5.7](https://arxiv.org/pdf/1804.05863)

## Facts & Assumptions

**Given:** Full AC; the fixed high-energy superpotential and matching regime in the Example; the tree-level threshold prescription; and the fixed chiral spurion background and operator truncation.

[F1] [[def-aqft-susy-wilsonian-action]]: light and heavy chiral multiplets are smooth classical $N=1$ superfields with fixed engineering dimensions; the Wilsonian F-term is distinct from real D-term data, and operator-suppression and threshold scales are separate.

[F2] [[pthm-aqft-supersymmetric-threshold-matching]]: for $W_+=W_L+\tfrac12MX^2+XJ(\Phi)$ with the stated leading derivative-free tree prescription, and with a retained projection fixing $W_L$ and $J^2/(2M)$ and compatible action-to-scheme holomorphic coordinates, the matched holomorphic coefficient is $W_L-J^2/(2M)$.

[F3] [[def-qftx-n1-chiral-superfield]]: $\Phi$ and $X$ are smooth classical chiral superfields; their lowest components are the scalar fields $\phi$ and $x$.

[F4] [[def-qftx-superspace-grassmann-algebra]]: $\int d^2\theta$ extracts the coefficient of the ordered monomial $\theta^1\theta^2$, and $[\theta^\alpha]=-\tfrac12$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. Full AC is adopted as a sufficient ambient assumption for the selected action data; the regulated equivalence supplier requires no additional full-Choice premise; the arithmetic and Berezin extraction below use no choice.

[A2] The spurion is nondynamical and fixed after writing the supersymmetric chiral operator; its scalar and spinor components vanish and its physical auxiliary component is the constant $F_{\mathcal X}$, with raw top coefficient $2F_{\mathcal X}$.

[A3] The operator is retained as one specified term in the finite EFT truncation. Any claim that omitted spurion insertions are small requires an additional bound and is not assumed.

[F5] [[pthm-aqft-wilsonian-superpotential-nonrenormalization]]: its perturbative holomorphic-coefficient conclusion assumes a rigid-supersymmetry-preserving regulator and Ward identities; it does not assert protection after a fixed supersymmetry-breaking background is imposed.

## Verification

1.1 In the threshold theorem set $W_L(\Phi)=y\Phi^3/6$ and $J(\Phi)=g\Phi^2/2$. The selected $P_-$ fixes $\Phi^3$ and $\Phi^4$, so it fixes $W_L$ and $J^2/(2M)$; the supplied coordinate identifications use their same coefficients. Then $J^2/(2M)=g^2\Phi^4/(8M)$, which gives the displayed retained $W_-(\Phi)$. [given, F2, algebra]

1.2 Since $\mathcal X=2\theta^1\theta^2F_{\mathcal X}$, the raw coefficient of $\theta^1\theta^2$ in $\mathcal X\Phi^3$ is $2F_{\mathcal X}\phi^3$: [F3] gives the lowest component $\phi$ of $\Phi$, while every positive-$\theta$ component of $\Phi^3$ multiplies a repeated odd generator and vanishes. The physical F bracket supplied by [F1] is one-half the raw ordered integral in [F4], and therefore gives $[\Delta W]_F=\kappa F_{\mathcal X}\phi^3/(6\Lambda_{\mathrm{op}})$. [given, F1, F3, F4, A2, algebra]

2.1 With $[\phi]=1$, $[F_{\mathcal X}]=2$, and $[\Lambda_{\mathrm{op}}]=1$, the coefficient $A_{\mathrm{soft}}=\kappa F_{\mathcal X}/\Lambda_{\mathrm{op}}$ has dimension one and the scalar cubic term has dimension four. For $F_{\mathcal X}\ne0$, the left derivative gives $Q_1(2\theta^1\theta^2F_{\mathcal X})=2\theta^2F_{\mathcal X}\ne0$, so fixing this background breaks rigid supersymmetry. The Ward-identity hypothesis of [F5] then fails, and that theorem supplies no protection claim for the fixed soft coefficient. Full AC is the adopted sufficient ambient assumption [A1]; no choice is used in this component calculation. No estimate of the soft coefficient's size follows from its dimension. [F1, F5, A1, A2, A3, step 1.2, algebra] ∎

## Remarks

The Wilsonian tree-level F-term and the fixed soft spurion insertion are separate pieces of the example. For $F_{\mathcal X}\ne0$, fixing the spurion violates the rigid-supersymmetry premise used by the nonrenormalization theorem. If $F_{\mathcal X}=0$, the insertion vanishes and this supersymmetry-breaking conclusion does not apply.
