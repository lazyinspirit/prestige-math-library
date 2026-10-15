---
id: pthm-td-countable-canonical-identities
kind: physics-theorem
domain: physics
title: Countable canonical identities under a local moment envelope
status: published
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
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: pass
---

## Statement

Under the canonical sampling assumption [[post-td-canonical-sampling]], let $I$ be a specified nonempty countable microstate list with finite energies $E_i$ in joules, counted once ($g_i=1$), and let $J_\beta\subset(0,\infty)$ be an open inverse-temperature interval in $\mathrm{J^{-1}}$. Set $E_*=1\,\mathrm J$, $e_i=E_i/E_*\in\mathbb R$, $b=E_*\beta$, and $J_b=E_*J_\beta\subset(0,\infty)$; $e_i$ and $b$ are dimensionless numerical coordinates. For $\beta\in J_\beta$, define $Z(\beta)=\sum_i e^{-\beta E_i}$ and, when $0<Z(\beta)<\infty$, $p_i(\beta)=e^{-\beta E_i}/Z(\beta)$. Suppose every compact interval $K\subset J_\beta$ admits a summable sequence $a_i\ge0$ with $(1+|e_i|^2)e^{-\beta E_i}=(1+|e_i|^2)e^{-be_i}\le a_i$ for all $i$ and $\beta\in K$. Define $\bar E_\beta=\sum_i p_iE_i$ and $\operatorname{Var}_\beta(E)=\sum_i p_i(E_i-\bar E_\beta)^2$. Then these moments are finite, $Z$ is $C^2$, $-\partial_\beta\log Z=\bar E_\beta$, $\partial_\beta^2\log Z=\operatorname{Var}_\beta(E)$, and the dimensionless Gibbs entropy
$$s_\beta:=-\sum_i p_i\log p_i=\log Z+\beta\bar E_\beta$$
is finite. Define the physical Gibbs entropy by $S_\beta:=k_{\mathrm B}s_\beta$ in $\mathrm{J\,K^{-1}}$. Then $F_{\mathrm{stat}}:=-k_{\mathrm B}T\log Z=\bar E_\beta-TS_\beta$ for $\beta=(k_{\mathrm B}T)^{-1}$. A lower bound on the energies alone does not supply the summable envelope or finite partition function.

## Facts & Assumptions

**Given:** A specified countable energy list, a positive finite canonical partition sum on $J_\beta$, and the local summable second-moment envelope.

[F1] [[def-tdmath-countable-canonical-model]]: use its real energy coordinates $e_i$, real parameter $b\in J_b$, and $g_i=1$. Its nonnegative series is the supremum of finite subsums; normalized probabilities and absolute-moment expectations are defined only at positive finite $\widetilde Z(b)=\sum_i e^{-be_i}=Z(b/E_*)$.

[F2] [[post-td-canonical-sampling]]: for this normalized countable model, $p_i=e^{-\beta E_i}/Z$ is the adopted preparation law.

[L1] [[thm-tdmath-summable-canonical-differentiation]] (current batch 11 draft): for real $e_i,b$ and $g_i=1$, the local envelope $(1+|e_i|^2)e^{-be_i}\le a_i$ on each compact interval implies positive finite $\widetilde Z\in C^2$, $-\partial_b\log\widetilde Z=\langle e\rangle_b$, $\partial_b^2\log\widetilde Z=\operatorname{Var}_b(e)$, and absolutely convergent entropy $s=\log\widetilde Z+b\langle e\rangle_b$. The current proof is supplied in that draft; its status is not publication acceptance.

[F3] [[def-td-si-quantities]]: $E_i$ and $\bar E_\beta$ are in joules, $T$ is in kelvins, and $k_{\mathrm B}$ is in $\mathrm{J\,K^{-1}}$, so $\beta$ is in $\mathrm{J^{-1}}$.

[A1] The energy list and degeneracy convention are fixed while $\beta$ varies; every compact interval in $J_\beta$ has the stated summable envelope.

## Proof

**Given:** The countable model and its local envelope on the open interval $J_\beta$.

1.1 Apply [L1] to the real coordinates $e_i,b$ of [F1] with $g_i=1$. For any compact interval $K_b\subset J_b$, its inverse image $K_b/E_*\subset J_\beta$ is compact, and the stated dimensionless envelope becomes exactly $(1+|e_i|^2)e^{-be_i}\le a_i$ there. Thus [L1] gives $0<\widetilde Z(b)<\infty$ and finite first and second numerical energy moments on $J_b$. Because $be_i=\beta E_i$, the normalized probabilities are precisely the adopted counted-once law [F2]. Multiplication by $E_*$ gives $\bar E_\beta=E_*\langle e\rangle_b$ and $\operatorname{Var}_\beta(E)=E_*^2\operatorname{Var}_b(e)$. [F1, F2, F3, L1, A1, algebra]

2.1 Since $Z(\beta)=\widetilde Z(E_*\beta)$, substituting $\Delta b=E_*\Delta\beta$ in the derivative difference quotients gives $\partial_\beta\log Z=E_*\partial_b\log\widetilde Z$ and $\partial_\beta^2\log Z=E_*^2\partial_b^2\log\widetilde Z$. The derivatives are continuous by [L1], hence $Z\in C^2$ and the stated joule and joule-squared mean and variance identities follow. The same probabilities have absolutely convergent entropy $s_\beta=\log\widetilde Z+b\langle e\rangle_b=\log Z+\beta\bar E_\beta$. Defining $S_\beta=k_{\mathrm B}s_\beta$ and using $\beta k_{\mathrm B}=1/T$ gives $F_{\mathrm{stat}}=\bar E_\beta-TS_\beta=-k_{\mathrm B}T\log Z$. These are conditional model identities using the stated envelope and current draft mathematical supplier. [F2, F3, L1, step 1.1, algebra] ∎
