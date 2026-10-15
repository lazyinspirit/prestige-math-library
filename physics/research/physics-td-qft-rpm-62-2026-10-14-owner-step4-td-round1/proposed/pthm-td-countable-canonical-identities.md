---
id: pthm-td-countable-canonical-identities
kind: physics-theorem
domain: physics
title: Countable canonical identities under a local moment envelope
status: draft
origin: pipeline
library: physics
dependency_level: 5
deps: [def-td-si-quantities, def-tdmath-countable-canonical-model, post-td-canonical-sampling, thm-tdmath-summable-canonical-differentiation]
dependency_roles:
  def-td-si-quantities: formulation-prerequisite
  def-tdmath-countable-canonical-model: mathematical-premise
  post-td-canonical-sampling: physical-assumption
  thm-tdmath-summable-canonical-differentiation: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: Discrete countable energy lists with a specified enumeration and a uniform local summable second-moment envelope on an open positive inverse-temperature interval; no lower-energy-bound-only or arbitrary trace claim is made.
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §§1.3.1–1.3.4 (printed pp. 18–26)
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.2–4.4 (printed pp. 192–208)
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
verification:
  precheck: pass
---

## Statement

Let $I$ be a specified nonempty countable microstate list with energies $E_i$ in joules, counted once, and let $J_\beta\subset(0,\infty)$ be open. Fix $E_*=1\,\mathrm J$, define numerical energies $e_i:=E_i/E_*$ and dimensionless parameter $b:=E_*\beta$, and write $J_b:=E_*J_\beta$. The mathematical series supplier is applied to $(e_i,b)$ with weights $g_i=1$. For $\beta\in J_\beta$, define $Z(\beta)=\sum_i e^{-\beta E_i}$ and, when $0<Z(\beta)<\infty$, $p_i(\beta)=e^{-\beta E_i}/Z(\beta)$. Suppose every compact interval $K\subset J_\beta$ admits a summable sequence $a_i\ge0$ with $(1+|e_i|^2)e^{-\beta E_i}\le a_i$ for all $i$ and $\beta\in K$. Then $Z$ is $C^2$, $-\partial_\beta\log Z=\bar E_\beta$, $\partial_\beta^2\log Z=\operatorname{Var}_\beta(E)$, and the dimensionless Gibbs entropy
$$s_\beta:=-\sum_i p_i\log p_i=\log Z+\beta\bar E_\beta$$
is finite. Define the physical Gibbs entropy by $S_\beta:=k_{\mathrm B}s_\beta$ in $\mathrm{J\,K^{-1}}$. Then $F_{\mathrm{stat}}:=-k_{\mathrm B}T\log Z=\bar E_\beta-TS_\beta$ for $\beta=(k_{\mathrm B}T)^{-1}$. A lower bound on the energies alone does not supply the summable envelope or finite partition function.

## Facts & Assumptions

**Given:** A specified countable energy list, a positive finite canonical partition sum on $J_\beta$, and the local summable second-moment envelope.

[F1] [[def-tdmath-countable-canonical-model]]: $I$ has a specified enumeration, $Z=\sum_i e^{-\beta E_i}$ uses the nonnegative series convention, and $p_i$ and expectations are defined only when $0<Z<\infty$.

[F2] [[post-td-canonical-sampling]]: for this normalized countable model, $p_i=e^{-\beta E_i}/Z$ is the adopted preparation law.

[L1] [[thm-tdmath-summable-canonical-differentiation]] (current batch 11 draft): under the numerical envelope $(1+|e_i|^2)e^{-b e_i}\le a_i$ on each compact interval in $J_b$, the normalized series has the stated $C^2$, mean, variance, and entropy identities. Its full current proof was inspected; its draft status remains conditional.

[F3] [[def-td-si-quantities]]: $E_i$ and $\bar E_\beta$ are in joules, $T$ is in kelvins, and $k_{\mathrm B}$ is in $\mathrm{J\,K^{-1}}$, so $\beta$ is in $\mathrm{J^{-1}}$.

[A1] The energy list and degeneracy convention are fixed while $\beta$ varies; every compact interval in $J_\beta$ has the stated summable envelope.

## Proof

**Given:** The countable model and its local envelope on the open interval $J_\beta$.

1.1 Put $\widetilde Z(b)=\sum_i e^{-be_i}$. Since $\beta E_i=be_i$, $Z(\beta)=\widetilde Z(E_*\beta)$. Multiplication by $E_*>0$ takes compact parameter intervals bijectively to compact intervals in $J_b$, so the dimensionless envelope in the Statement is exactly [L1]'s envelope for numerical energy $e_i$ and parameter $b$; the weights are counting weights, so each listed state contributes one factor $e^{-\beta E_i}$. By [F2], their normalized law is the adopted canonical preparation, and [F3] gives the SI dimensions. [F1, F2, F3, L1, A1]

2.1 Apply [L1] to $(e_i,b)$: $\widetilde Z\in C^2$, $-\partial_b\log\widetilde Z=\langle e\rangle$ and $\partial_b^2\log\widetilde Z=\operatorname{Var}(e)$. The linear parameter change gives $-\partial_\beta\log Z=E_*\langle e\rangle=\bar E_\beta$ and $\partial_\beta^2\log Z=E_*^2\operatorname{Var}(e)=\operatorname{Var}_\beta(E)$, and the absolutely convergent entropy sum gives $s_\beta=\log Z+\beta\bar E_\beta$. By definition $S_\beta=k_{\mathrm B}s_\beta$; since $\beta k_{\mathrm B}=1/T$, this yields $F_{\mathrm{stat}}=\bar E_\beta-TS_\beta=-k_{\mathrm B}T\log Z$. The claim remains conditional on the draft supplier's proof and the envelope. [F2, F3, L1, step 1.1, algebra] ∎
