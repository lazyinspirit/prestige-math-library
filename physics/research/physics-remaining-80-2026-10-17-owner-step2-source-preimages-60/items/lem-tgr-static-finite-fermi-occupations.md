---
id: lem-tgr-static-finite-fermi-occupations
kind: lemma
title: "Supplied static finite-mode Fermi occupation identity"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - lem-qsm-models-diagonal-occupation-trace
  - def-countable-choice
dependency_roles:
  lem-qsm-models-diagonal-occupation-trace: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Pierre-Henri Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas"
      url: "https://arxiv.org/pdf/1908.10806"
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
proof_strategy: direct
verification:
  precheck: pass
dependency_level: 3
---

## Statement

This is a finite-mode conditional construction. Assume the Axiom of Countable Choice and the exact current interface for the batch-45 draft [[lem-qsm-models-diagonal-occupation-trace]], whose Statement matches its planned manifest entry on [[qsm-bose-fermi-gases]]. Its current carrier has a complete authored proof and precheck, plus a Step-1 ready authoring record; those records do not assert independent review approval. Let $J=\{1,\ldots,M\}$ be a nonempty finite set of supplied modes, let $m,c>0$, let $\mathcal N_j>0$ be supplied dimensionless lapse values, and let $\hat p_j\in\mathbb R^3$ be supplied mode momenta. Put
$$\epsilon_j=\sqrt{m^2c^4+c^2|\hat p_j|^2},\qquad E_j=\mathcal N_j\epsilon_j,\qquad \mathcal H_F=\mathbb C^{2^M},$$
with occupation basis $|n_1,\ldots,n_M\rangle$, $n_j\in\{0,1\}$, and diagonal operators $H|n\rangle=(\sum_jE_jn_j)|n\rangle$, $N|n\rangle=(\sum_jn_j)|n\rangle$. For $\beta_K>0$ and finite $\mu_K\in\mathbb R$, conditional on that exact supplier result,
$$\Xi_F=\operatorname{Tr}e^{-\beta_K(H-\mu_KN)} =\prod_{j=1}^M\left(1+e^{-\beta_K(E_j-\mu_K)}\right)<\infty,$$
and the normalized diagonal state has occupation mean
$$\mathbb E[n_j]=\frac1{e^{\beta_K(E_j-\mu_K)}+1}.$$
With $\beta_j=\beta_K\mathcal N_j$ and $\mu_j=\mu_K/\mathcal N_j$, this is exactly
$$\mathbb E[n_j]=\frac1{e^{\beta_j(\epsilon_j-\mu_j)}+1}.$$
No arbitrary curved-space Dirac spectrum or self-consistent quantum-gravity state is asserted.

## Facts & Assumptions

**Given:** A finite supplied mode set, positive finite mode energies, $\beta_K>0$, $\mu_K\in\mathbb R$, positive lapse values, and the named conditional supplier interface.

[A1] The current batch-45 draft supplier [[lem-qsm-models-diagonal-occupation-trace]] assumes $\mathrm{AC}_\omega$; for fermionic modes it assumes $q_j>0$, $\sum_jq_j<\infty$, and only finitely many gaps $\epsilon_j-\mu$ are negative, and concludes $\Xi_F=\operatorname{Tr}G_{\beta,\mu}=\prod_j(1+q_j)<\infty$ with normalized diagonal state whose finite-mode occupation probabilities are $P(n_j=1)=q_j/(1+q_j)$. Its exact current Statement matches the planned batch-45 manifest; its authored proof and precheck are present and its Step-1 record says ready, but this is not independent review approval. For our finite set the summability and negative-gap hypotheses hold automatically. We apply the supplier with its mode energy set equal to $\{E_j\}$ and its chemical potential equal to $\mu_K$; its interface also allows countably many modes under the stated conditions. ([[lem-qsm-models-diagonal-occupation-trace]])

[A2] The Axiom of Countable Choice, $\mathrm{AC}_\omega$, is the stated assumption used by the current batch-45 QSM draft supplier. ([[def-countable-choice]])

## Proof

1.1 For each finite mode, $E_j-\mu_K$ is real and finite, so $q_j=e^{-\beta_K(E_j-\mu_K)}>0$. A finite family of positive numbers has finite sum, and it has only finitely many negative energy gaps. Therefore the finite-mode hypotheses of [A1] hold under [A2]; conditional on the supplier's stated result, which is not independently approved here, it gives the exact trace product and normalized diagonal state. [given, A1, A2]

1.2 The supplier's finite fermion marginal is $\mathbb E[n_j]=q_j/(1+q_j)=1/(e^{\beta_K(E_j-\mu_K)}+1)$ by substituting $q_j$. Since $E_j=\mathcal N_j\epsilon_j$, this exponent is $\beta_K(\mathcal N_j\epsilon_j-\mu_K)$. [A1, algebra]

2.1 The definitions $\beta_j=\beta_K\mathcal N_j$ and $\mu_j=\mu_K/\mathcal N_j$ give $\beta_j(\epsilon_j-\mu_j)=\beta_K(\mathcal N_j\epsilon_j-\mu_K)$. Substitution proves the displayed local-parameter form exactly for each supplied mode. The statement uses only this finite regulator and makes no claim about an unprovided continuum mode spectrum. [given, step 1.2, algebra] ∎
