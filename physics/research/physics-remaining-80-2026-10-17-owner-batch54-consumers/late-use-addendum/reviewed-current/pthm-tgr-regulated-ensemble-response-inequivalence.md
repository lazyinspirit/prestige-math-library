---
id: pthm-tgr-regulated-ensemble-response-inequivalence
kind: physics-theorem
title: "Regulated gravitational preparations have different responses"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps:
  - post-tgr-kepler-microcanonical-volume-preparation
  - post-tgr-kepler-canonical-preparation
  - thm-tgr-regulated-kepler-negative-capacity
  - lem-tgr-relative-shell-canonical-response
dependency_roles:
  post-tgr-kepler-microcanonical-volume-preparation: physical-assumption
  post-tgr-kepler-canonical-preparation: physical-assumption
  thm-tgr-regulated-kepler-negative-capacity: mathematical-premise
  lem-tgr-relative-shell-canonical-response: mathematical-premise
justified_by: []
physical_scope: "Same fixed relative Kepler Hamiltonian and radial shell, with Gibbs-volume microcanonical versus canonical preparation. At E=−A/(32r0), R>32r0, and 2A/(μr0c²)≤δNR≪1, the microcanonical branch is slow-motion and has CG<0; the canonical model has CK≥0 but retains unbounded momentum tails. No equivalence or thermalization is asserted."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
      locator: "Complete 41-page manuscript retrieved; §3, PDF pp. 13–17, discusses negative heat capacity and ensemble inequivalence for specified self-gravitating preparations. The exact regulated relative-shell signs here follow from the mathematical suppliers, not the source's mean-field calculations."
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
      locator: "Complete 191-page notes retrieved; §§1.3.1–1.3.3, PDF pp. 24–30, for canonical variance response and distinct ensemble distributions. No thermodynamic-limit equivalence is invoked."
proof_strategy: direct
verification:
  precheck: pass
---



## Statement

Use the same positive relative parameters $\mu,A,r_0,R,h_*$ and fixed Hamiltonian $h(q,p)=|p|^2/(2\mu)-A/|q|$ for both preparations in [[post-tgr-kepler-microcanonical-volume-preparation]] and [[post-tgr-kepler-canonical-preparation]]. Let $R>32r_0$, choose $E=-e=-A/(32r_0)$, and assume the microcanonical physical applicability condition
$$\frac{2A}{\mu r_0c^2}\le\delta_{\rm NR}\ll1.$$
Then the Gibbs-volume microcanonical response satisfies $C_G(E)<0$, while the separate canonical preparation has $C_K(\beta)\ge0$ for every $\beta>0$. For its density $p_\beta$, define $\langle g\rangle_\beta:=\int g p_\beta\,d\nu_{\rm rel}$ and $\operatorname{Var}_\beta(h):=\int(h-\langle h\rangle_\beta)^2p_\beta\,d\nu_{\rm rel}$. The microcanonical energy lies on the strictly negative-capacity branch and obeys the stated uniform slow-speed bound. The canonical model has unbounded momentum support, so this theorem makes no whole-ensemble slow-speed claim about it. The signs concern different finite-system preparations and do not contradict one another; neither sign establishes that nature realizes the model or that either preparation is dynamically attained.

## Facts & Assumptions

**Given:** The two adopted preparations use the same $\mu,A,r_0,R,h_*$ and fixed relative Hamiltonian; $R>32r_0$; $E=-A/(32r_0)$; and the stated $\delta_{\rm NR}$ condition.

[A1] The microcanonical preparation adopts the finite energy shell, Gibbs-volume entropy, and $C_G=dE/dT_G$ convention. ([[post-tgr-kepler-microcanonical-volume-preparation]])

[A2] The canonical preparation uses the same fixed relative Hamiltonian and shell, canonical $\beta>0$, and $T_K=(k_B\beta)^{-1}$. ([[post-tgr-kepler-canonical-preparation]])

[A3] Its relative density is $p_\beta=Z_{\rm rel}^{-1}e^{-\beta h}$ on $r_0\le|q|\le R$ and all $p\in\mathbb R^3$, with $Z_{\rm rel}>0$. ([[post-tgr-kepler-canonical-preparation]])

[L1] The canonical expectation and variance in the Statement are integrals relative to the normalized density $p_\beta$ and measure $d\nu_{\rm rel}$.

[F1] On the mathematical branch $E=-e$, $A/R<e\le A/(16r_0)$, the Gibbs-volume heat capacity is strictly negative. ([[thm-tgr-regulated-kepler-negative-capacity]])

[F2] For the same relative Hamiltonian with the canonical preparation, $Z_{\rm rel}$ is positive and finite and $C_K=k_B\beta^2\operatorname{Var}_\beta(h)\ge0$ for every $\beta>0$. ([[lem-tgr-relative-shell-canonical-response]])

## Proof

1.1 Set $e=A/(32r_0)$. Since $R>32r_0$, $A/R<A/(32r_0)=e$, while $e<A/(16r_0)$, so [F1] applies with $\delta=er_0/A=1/32$. It gives $C_G(E)<0$ for the adopted Gibbs-volume convention. [given, A1, F1, algebra]

2.1 On the microcanonical energy surface $h=-e$, $|p|^2/(2\mu)=A/|q|-e\le A/r_0$. Hence $(|p|/\mu)^2\le2A/(\mu r_0)\le\delta_{\rm NR}c^2$. Thus the selected microcanonical branch has the uniform slow-speed qualification stated in the theorem. [given, A1, step 1.1, algebra]

2.2 The canonical preparation keeps the same $h$ and shell fixed while varying $\beta$. By [F2], its response is $C_K=k_B\beta^2\operatorname{Var}_\beta(h)\ge0$. This sign uses the canonical variance [L1] and the $T_K$ convention, not the Gibbs-volume derivative. [A2, F2, L1, step 1.1, algebra]

3.1 To check the support qualification, fix any momentum threshold $P_*>0$ and width $\Delta p>0$. The shell $Q=\{q:r_0\le|q|\le R\}$ and momentum annulus $A=\{p:P_*<|p|<P_*+\Delta p\}$ both have positive finite Lebesgue measure. On $Q\times A$, $h(q,p)\le(P_*+\Delta p)^2/(2\mu)$, so [A3] gives $p_\beta(q,p)\ge Z_{\rm rel}^{-1}e^{-\beta(P_*+\Delta p)^2/(2\mu)}>0$. Therefore this annulus has positive canonical probability for every $P_*$; the momentum support is unbounded. The two response signs use distinct preparations and do not entail equality of response functions. [A3, F2, construct, step 2.2, algebra] ∎
