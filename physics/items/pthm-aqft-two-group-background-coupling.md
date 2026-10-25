---
id: pthm-aqft-two-group-background-coupling
kind: physics-theorem
title: Finite 2-group background coupling variation
status: "published"
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - def-aqft-two-group-symmetry-realization
  - def-aqft-two-group-background
  - thm-aqft-two-group-background-consistency
  - def-aqft-finite-background-two-groupoid
  - thm-aqft-finite-background-two-groupoid-coherence
dependency_roles:
  def-aqft-two-group-symmetry-realization: formulation-prerequisite
  def-aqft-two-group-background: mathematical-premise
  thm-aqft-two-group-background-consistency: mathematical-premise
  def-aqft-finite-background-two-groupoid: mathematical-premise
  thm-aqft-finite-background-two-groupoid-coherence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: Conditional finite change-of-variables result for Euclidean lattice models with finite 2-group background data on a closed oriented triangulated spacetime. It assigns no phase to an unspecified theory and proves no continuum limit.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: "Francesco Benini, Clay Córdova, and Po-Shen Hsin, On 2-Group Global Symmetries and Their Anomalies"
      url: https://arxiv.org/pdf/1803.09336
      locator: "§2.3, printed pp. 18–20 / PDF pp. 19–21; §1.3, printed pp. 8–9; §3 introduction, printed pp. 20–21 / PDF pp. 21–22"
    - title: "Sakura Schäfer-Nameki, ICTP Lectures on (Non-)Invertible Generalized Symmetries"
      url: https://arxiv.org/pdf/2305.18296v2
      locator: "§§2.8.1–2.8.2, printed pp. 28–33"
---

## Statement

Let $K$ be a finite ordered triangulation of a closed compact oriented smooth $d$-manifold, $d\geq2$, with its chosen tangential structure and finite 2-group background gauge $2$-groupoid as specified in the finite realization definition. For each background object $x$, let the selected Euclidean finite-regulator model have a finite configuration set $\Phi_x$, dimensionless action $S_x:\Phi_x\to\mathbb R$, measure weight $\mu_x:\Phi_x\to\mathbb C$, and total weight $W_x(\phi):=\mu_x(\phi)e^{-S_x(\phi)}$, in natural units $c=\hbar=1$. For an ordered tuple of $n\geq0$ local observable insertions $O_1,\ldots,O_n$, let $o_{j,x}:\Phi_x\to\mathbb C$ be the model's insertion function and define the unnormalized correlator

$$
C_x(O_1,\ldots,O_n):=\sum_{\phi\in\Phi_x}W_x(\phi)\prod_{j=1}^n o_{j,x}(\phi),
$$

where the empty product gives the partition function $Z_x=C_x()$. Suppose every $1$-gauge arrow $f:x\to y$ has a model-specified bijection $T_f:\Phi_x\to\Phi_y$, the observable transport satisfies $o_{j,y}(T_f\phi)=o_{j,x}(\phi)$, and the adopted action-and-measure law is

$$
W_y(T_f\phi)=\chi_f(x)W_x(\phi),
$$

with a model-specified phase $\chi_f(x)\in U(1)$ independent of $\phi$. Assume these phases are $1$ on identity arrows, multiply under composition, and agree on $2$-isomorphic arrows. Then for every such arrow and observable tuple,

$$
C_y(\alpha_fO_1,\ldots,\alpha_fO_n)=\chi_f(x)C_x(O_1,\ldots,O_n),\qquad Z_y=\chi_f(x)Z_x.
$$

If an allowed local background counterterm $L_x$ reweights the model by $e^{iL_x}$, the phase changes to $\chi'_f(x)=e^{iL_y}\chi_f(x)e^{-iL_x}$. By the stated anomaly convention, the residual anomaly is absent exactly when one permitted counterterm makes every phase $1$. The Postnikov cocycle $\beta$ fixes the allowed background cochains and gauge arrows but does not, by itself, specify $\chi_f$; that phase is determined by the selected model's action and measure. The result is confined to the stated finite regulator and does not assert a continuum QFT or a universal anomaly classification.

## Statement references

[Benini, Córdova, and Hsin, §2.3 and §3 introduction](https://arxiv.org/pdf/1803.09336)

[Schäfer-Nameki, §§2.8.1–2.8.2](https://arxiv.org/pdf/2305.18296v2)

## Facts & Assumptions

**Given:** finite background objects and gauge arrows with the fixed left-action, normalized-cocycle, local-coefficient and associator conventions; the selected finite-regulator model, its finite configuration sets, weights, observable insertions, bijections, and coherent phase law stated above; and its declared set of allowed local background counterterms.

[A1] Adopted model law: for each background $x$ the configuration set $\Phi_x$ is finite; for each $1$-arrow $f:x\to y$, $T_f$ is a bijection, the observables satisfy $o_{j,y}(T_f\phi)=o_{j,x}(\phi)$, and $W_y(T_f\phi)=\chi_f(x)W_x(\phi)$ with $\chi_f(x)$ independent of $\phi$. These are inputs from the selected model, not deductions from $\beta$.

[F1] [[def-aqft-two-group-symmetry-realization]]: each gauge $1$-arrow is assigned a configuration bijection and observable-algebra isomorphism transporting weights by a configuration-independent nonzero scalar; [A1] specifies the coherent phase-valued case; each $2$-arrow $\eta:f\Rightarrow f'$ is assigned a target-fiber pair $(J_\eta,j_\eta)$ with $T_{f'}=J_\eta\circ T_f$, $\alpha_{f'}=j_\eta\circ\alpha_f$, and weight preservation. The comparison $2$-morphisms and unit maps obey the stated pseudofunctor coherence equations. The residual phase is defined modulo the selected model's declared local counterterms.

[F2] [[def-aqft-two-group-background]]: $G$ is finite, $A$ finite abelian, $\rho$ is a left action, $\beta$ is a normalized $3$-cocycle with associator directed from $(gh)k$ to $g(hk)$, and backgrounds satisfy $\delta_aB=a^*\beta$ with the stated local-coefficient signs.

[F3] [[thm-aqft-two-group-background-consistency]]: under those finite cochain hypotheses, the stated $(g,\lambda)$ transformation preserves flatness and the twisted tetrahedron equation. Its complete current proof and current-ready Step 1 record were inspected.

[F4] [[def-aqft-finite-background-two-groupoid]]: backgrounds are objects; raw vertex/edge labels $(g,\lambda)$ are $1$-arrows; vertex cochains $t$ with $\lambda'-\lambda=\delta_b t$ are $2$-arrows; composition uses the displayed $\tau$ and associator uses $\sigma_i=\beta(k_i,h_i,g_i)$.

[F5] [[thm-aqft-finite-background-two-groupoid-coherence]]: for every finite ordered complex and the displayed $(G,A,\rho,\beta)$ data, these operations form a finite $2$-groupoid with the stated coherence and stabilizers. The result retains raw $1$-gauge labels and vertex $2$-gauge cochains.

## Proof

1.1 Fix a gauge arrow $f:x\to y$. Reindexing the finite sum over $\Phi_y$ by the bijection $T_f$ gives $C_y(\alpha_fO_1,\ldots,\alpha_fO_n)=\sum_{\phi\in\Phi_x}W_y(T_f\phi)\prod_{j=1}^n o_{j,y}(T_f\phi)$; every target configuration appears exactly once because $T_f$ is bijective. [given, A1, F1, construct, algebra]

2.1 Substitute the adopted weight law and covariance of each insertion from [A1]: each summand equals $\chi_f(x)W_x(\phi)\prod_j o_{j,x}(\phi)$. The phase is independent of $\phi$, so it factors out of the finite sum and yields $C_y(\alpha_fO_1,\ldots,\alpha_fO_n)=\chi_f(x)C_x(O_1,\ldots,O_n)$. Taking $n=0$ gives $Z_y=\chi_f(x)Z_x$. [A1, step 1.1, algebra]

3.1 Reweighting by an allowed counterterm multiplies the source and target weights by $e^{iL_x}$ and $e^{iL_y}$, respectively; applying step 2.1 to the reweighted sum therefore gives $\chi'_f(x)=e^{iL_y}\chi_f(x)e^{-iL_x}$. By the anomaly definition in [F1], the residual class is absent exactly when an allowed $L$ makes these phases all $1$. The mathematical suppliers [F2]–[F5] specify which backgrounds and coherent gauge arrows are in this calculation, while [A1] separately supplies the action-and-measure phase; hence no anomaly value for another model follows from $\beta$ alone. [A1, F1, F2, F3, F4, F5, step 2.1, algebra] ∎
