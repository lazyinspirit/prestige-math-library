---
id: pthm-qftx-n1-gauge-matter-off-shell-invariance
kind: physics-theorem
title: Off-shell supersymmetry of the rigid $N=1$ gauge-matter superspace action
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 6
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-n1-superspace-and-actions
axiom_base: "ZF + AC_omega inherited through the selected gauge-data definition; the superspace variation adds no choice principle."
deps:
  - post-qftx-n1-gauge-matter-model
  - def-qftx-n1-vector-superfield
  - def-qftx-n1-chiral-superfield
  - lem-qftx-n1-chiral-superspace-identities
  - def-qftx-superspace-grassmann-algebra
dependency_roles:
  post-qftx-n1-gauge-matter-model: physical-assumption
  def-qftx-n1-vector-superfield: formulation-prerequisite
  def-qftx-n1-chiral-superfield: mathematical-premise
  lem-qftx-n1-chiral-superspace-identities: mathematical-premise
  def-qftx-superspace-grassmann-algebra: mathematical-premise
proof_strategy: direct
physical_scope: "Conditional classical global N=1 supersymmetry invariance of the adopted SU(2) gauge-matter action on flat four-dimensional Minkowski spacetime, for the full real vector prepotential and smooth compactly supported vector/matter component fluctuations. The proof does not fix Wess–Zumino gauge, establish gauge-anomaly cancellation, or assert a quantum continuum theory or empirical result."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§§4.2, 4.8–4.9, printed pp. 33–48: supertranslations, superspace total derivatives, and gauge-matter D/F terms."
    - title: "Adel Bilal, Introduction to Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0101055"
      locator: "§§4.3, 5.1–5.2, printed pp. 21–31: total-derivative invariance, chiral field strengths, and the N=1 gauge-matter superspace action."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

For the adopted rigid $N=1$ SU(2) gauge-matter superspace action, use the full real vector prepotential $V$ and the chiral matter superfields $\Phi^a$ without fixing Wess–Zumino gauge. Use the full formal coefficient fields and the explicit order-reversing involution inherited from the gauge-matter postulate, with even scalar/auxiliary and odd fermion coefficients. Assume coefficientwise smooth compactly supported vector and matter component fluctuations on spacetime in the local trivializing regions used for the variation. The complex bosonic slice used for a scalar-potential calculation is not imposed during this off-shell variation. Under the global supertranslation $\delta=(\epsilon^\alpha Q_\alpha+\bar\epsilon^{\dot\alpha}\bar Q_{\dot\alpha})$ with constant Grassmann-odd parameters, the variation of every full-superspace D-term is a sum of odd-coordinate derivatives and a spacetime divergence. The same is true of the chiral F-terms built from the gauge-invariant holomorphic superpotential and the chiral vector field strength. Compact support removes the spacetime boundary contributions, so the complete action is invariant. This is a conditional classical invariance statement for the full superspace fields; it does not assert that Wess–Zumino gauge is preserved by an uncompensated supersymmetry transformation.

## Statement references

[Stephen P. Martin, *A Supersymmetry Primer*, §§4.2 and 4.8–4.9](https://arxiv.org/pdf/hep-ph/9709356v7).

[Adel Bilal, *Introduction to Supersymmetry*, §§4.3 and 5.1–5.2](https://arxiv.org/pdf/hep-th/0101055).

[[post-qftx-n1-gauge-matter-model]]

[[def-qftx-n1-vector-superfield]]

[[def-qftx-n1-chiral-superfield]]

[[lem-qftx-n1-chiral-superspace-identities]]

[[def-qftx-superspace-grassmann-algebra]]

## Facts & Assumptions

**Given:** The adopted gauge-matter action, full vector prepotential, and compactly supported matter fluctuations in the Statement.

[A1] [[post-qftx-n1-gauge-matter-model]]: the action is a finite sum of full-superspace terms $[\bar\Phi^a e^{2gV_{R_a}}\Phi^a]_D$ and chiral terms $[\frac{1}{4g^2}\kappa_\mathbb C(\mathcal W^\alpha,\mathcal W_\alpha)+W_G(\Phi)]_F+\mathrm{h.c.}$, $W_G$ is gauge invariant, and the field-dependent component fluctuations in the local trivializing regions used for the variation are smooth and compactly supported.

[F1] [[def-qftx-n1-chiral-superfield]]: $Q_\alpha$ and $\bar Q_{\dot\alpha}$ are the fixed odd first-order superspace differential operators, and chiral superfields have the unique shifted-coordinate expansion.

[F2] [[def-qftx-n1-vector-superfield]]: $V$ is a smooth even real matrix-valued superfield and $\mathcal W_\alpha$ is a chiral field-strength superfield.

[F3] [[lem-qftx-n1-chiral-superspace-identities]]: the supercharges preserve the chiral constraint and chiral fields are independent of $\bar\theta$ in $y=x+i\theta\sigma\bar\theta$ coordinates.

[F4] [[def-qftx-superspace-grassmann-algebra]]: left Grassmann derivatives are odd derivations and ordered Berezin integration extracts the top coefficient of the finite four-generator algebra.

## Proof
**Given:** [A1] and the superspace data and boundary convention in [F1]–[F4].

1.1 For an even smooth matrix-valued superspace integrand $X$, expand $\delta X$ using [F1]. The odd Leibniz rule and constancy of the parameters give $\delta X=-\partial^L_{\theta^\alpha}(\epsilon^\alpha X)+\partial^L_{\bar\theta^{\dot\alpha}}(\bar\epsilon^{\dot\alpha}X)+\partial_\mu(-i\epsilon^\alpha\sigma^\mu_{\alpha\dot\beta}\bar\theta^{\dot\beta}X+i\bar\epsilon^{\dot\alpha}\theta^\beta\sigma^\mu_{\beta\dot\alpha}X)$. The same identity holds entrywise for matrices because $Q$ acts by derivations. [F1, F4, algebra]

1.2 In a local unitary frame choose complex-linear coordinates $z^A$ on $V_{\mathrm{mat}}$ and write the chiral components as $\Phi^A$. The postulate defines $W_G(\Phi)$ by the finite Taylor polynomial at the body $v(x)$ with nilpotent increments $\nu^A=\Phi^A-v^A(x)$. Each $\Phi^A$ is chiral by [A1], so $\bar D_{\dot\alpha}\Phi^A=0$ by [F3]. Holomorphicity $\partial_{\bar z^A}W_G=0$ removes barred-coordinate terms from the multivariable chain rule. Applying $\bar D_{\dot\alpha}$ term-by-term to the finite Taylor polynomial and collecting the multi-index terms gives $\bar D_{\dot\alpha}W_G(\Phi)=\sum_A(\partial_{z^A}W_G)(\Phi)\bar D_{\dot\alpha}\Phi^A=0$. The vector field strength is chiral by [F2]. Therefore both $W_G(\Phi)$ and $\kappa_\mathbb C(\mathcal W^\alpha,\mathcal W_\alpha)$ are chiral even superfields. [A1, F2, F3, algebra]

2.1 For $X=\sum_a\bar\Phi^a e^{2gV_{R_a}}\Phi^a$, the finite Grassmann expansion has smooth coefficients, and the ordinary finite-dimensional matrix exponential is smooth in the body coefficients; hence step 1.1 applies. The odd-coordinate derivatives have no top Grassmann coefficient by [F4], so their D-term integrals vanish. The spacetime divergence integrates to zero under the compact-support or relative-action boundary condition in [A1]. The physical D bracket is the fixed multiple $-1/4$ of that raw integral, so every matter D-term is invariant. [A1, F2, F4, step 1.1]

2.2 For either chiral integrand $Y$ in step 1.2, change to $y=x+i\theta\sigma\bar\theta$. By [F1] and [F3], $Q_\alpha=\partial^L_{\theta^\alpha}|_y$ and $\bar Q_{\dot\alpha}=-\partial^L_{\bar\theta^{\dot\alpha}}|_y+2i\theta^\beta\sigma^\mu_{\beta\dot\alpha}\partial_{y^\mu}$. Since $Y$ is independent of $\bar\theta$, $\delta Y=\epsilon^\alpha\partial^L_{\theta^\alpha}Y+2i\bar\epsilon^{\dot\alpha}\theta^\beta\sigma^\mu_{\beta\dot\alpha}\partial_\mu Y$. The first term integrates to zero by Berezin coefficient extraction, and the second is a spacetime divergence with vanishing boundary contribution. The normalized physical F bracket multiplies this integral by $1/2$, so it also vanishes; the Hermitian-conjugate extracted action obeys the conjugate identity. [A1, F1, F3, F4, step 1.2]

3.1 The D-term and all chiral F-term variations in steps 2.1 and 2.2 integrate to zero. Their sum is the complete action in [A1], so $\delta S_{\mathrm{GM}}=0$. The argument uses only the declared superspace variation and auxiliary fields; it invokes no equations of motion, gauge fixing, or quantum construction. [A1, step 2.1, step 2.2] ∎
