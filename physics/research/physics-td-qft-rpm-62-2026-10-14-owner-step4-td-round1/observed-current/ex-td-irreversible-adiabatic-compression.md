---
id: ex-td-irreversible-adiabatic-compression
kind: example
title: Entropy increase in an idealized adiabatic compression
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: A conditional one-mole monatomic ideal-gas model with positive initial temperature and volume, a sudden constant-load compression to a stated final volume, dissipative settling, and no empirical claim.
deps: [def-td-process-and-protocol, def-td-reversible-process, def-td-si-quantities, post-td-first-law-energy, post-td-concave-fundamental-entropy, def-natural-logarithm, thm-natural-logarithm-laws]
dependency_roles:
  def-td-process-and-protocol: formulation-prerequisite
  def-td-reversible-process: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  post-td-first-law-energy: physical-assumption
  post-td-concave-fundamental-entropy: physical-assumption
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §2.6, ideal-gas entropy and adiabatic examples
      url: https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf
    - title: David Tong, Statistical Physics, Chapter 4 of the complete author-hosted lecture notes, §§4.3.3–4.3.4
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§II.F and IV.A
      url: https://arxiv.org/pdf/cond-mat/9708200v2
dependency_level: 5
---

## Example

This is a conditional model calculation, not a report of an observed compression. The gas is taken to have one mole, $n=1\,\mathrm{mol}$, of a model whose state variables are a positive temperature $T$ in kelvins, volume $V$ in cubic metres, and uniform pressure $p$ in pascals. The model is monatomic and ideal in the explicit sense that its molar constant-volume heat capacity is $C_V=3R/2$, its internal energy is $U=nC_VT$, and its equation of state is $pV=nRT$. Its entropy difference is

$$S(T,V)-S(T_0,V_0)=nC_V\ln(T/T_0)+nR\ln(V/V_0),$$

for positive reference values $T_0$ in K and $V_0$ in $\mathrm{m^3}$. At initial equilibrium let $T_i>0$ and $V_i>0$. A piston protocol suddenly raises the external pressure from the initial value $p_i$ to a constant final load $p_f$, compresses the gas adiabatically to $V_f=(9/10)V_i$, and dissipatively settles it to a final equilibrium state. The protocol admits no reverse record, so it is irreversible by [[def-td-reversible-process]]. The idealization assumes no change in the included load's entropy; all numerical behavior is a model assumption and deduction, not an empirical measurement.

## Facts & Assumptions

**Given:** The process and sign conventions of [[def-td-process-and-protocol]], the closed-record first-law postulate [[post-td-first-law-energy]], and the stated ideal-gas model.

[F1] A process record is adiabatic exactly when $Q[P]=0$; $W_{\mathrm{on}}>0$ denotes work done on the system ([[def-td-process-and-protocol]]).

[F2] For every admitted closed record in the stated class, $U(x_P^+)-U(x_P^-)=Q[P]+W_{\mathrm{on}}[P]$ ([[post-td-first-law-energy]]).

[F3] The adopted entropy is a finite scalar state function with values measured in $\mathrm{J\,K^{-1}}$ ([[post-td-concave-fundamental-entropy]]).

[L1] $\log$ is strictly increasing, $\log 1=0$, and $\log(xy)=\log x+\log y$ for positive $x,y$ ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]]).

[A1] The ideal-gas equations and entropy difference are exactly those stated in the Example; $R>0$ has units $\mathrm{J\,mol^{-1}\,K^{-1}}$ and $C_V=3R/2$.

[A2] The gas is the system inside the declared outer boundary: no matter crosses it, its material constitution is fixed, and its mechanical model supplies a total mass $M>0$ and center-of-mass velocities in the fixed chart of [[def-td-process-and-protocol]]. The gas center of mass is at rest at both endpoint preparations, so $\Delta K_{\mathrm{cm}}=0$; no separately tracked external-field potential energy changes (the model may take that term to be absent), so $\Delta U_{\mathrm{ext}}=0$. Thus the admitted record is in $\mathcal P_{\mathrm{cl}}(s)$ as defined by [[def-td-process-and-protocol]]. Its protocol has $Q[P]=0$, a constant external load $p_f$ during compression, and $W_{\mathrm{on}}[P]=p_f(V_i-V_f)$. The final equilibrium obeys $p_fV_f=nRT_f$, and the initial equilibrium obeys $p_iV_i=nRT_i$. The apparatus is stipulated to dissipatively settle and to have zero entropy change.

## Verification

**Given:** $n=1\,\mathrm{mol}$, $V_f/V_i=9/10$, the premises [F1]–[F3], the logarithm laws [L1], and the model/protocol assumptions [A1]–[A2].

1.1 Put $\lambda:=p_f/p_i$. The equilibrium equations give $T_f/T_i=\lambda(9/10)$. The first-law balance gives $nC_V(T_f-T_i)=p_f(V_i-V_f)$, hence $(3/2)(\lambda(9/10)-1)=\lambda(1/10)$. Solving yields $\lambda=6/5$ and $T_f/T_i=27/25$. [given, F1, F2, A1, A2, algebra]

2.1 The entropy difference is therefore $\Delta S=nR[(3/2)\ln(27/25)+\ln(9/10)]$. By [L1], $2\Delta S/(nR)=\ln\!\left((27/25)^3(9/10)^2\right)=\ln(1594323/1562500)>0$, since $1594323>1562500$ and $\log$ is strictly increasing with $\log 1=0$. Since $nR>0$, $\Delta S>0$. [given, F3, L1, A1, step 1.1, algebra] ∎
