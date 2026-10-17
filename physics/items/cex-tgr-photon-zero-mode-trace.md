---
id: cex-tgr-photon-zero-mode-trace
kind: counterexample
title: Zero-energy bosonic mode trace obstruction
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - def-countable-choice
  - def-trace-class-operator
  - lem-qsm-fock-occupation-basis-and-car-relations
  - thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null
  - thm-tgr-photon-planck-flux
dependency_roles:
  def-countable-choice: mathematical-premise
  def-trace-class-operator: mathematical-premise
  lem-qsm-fock-occupation-basis-and-car-relations: mathematical-premise
  thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null: mathematical-premise
  thm-tgr-photon-planck-flux: mathematical-premise
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
proof_strategy: direct
---

## Statement refuted

For a periodic bosonic box, deleting the zero wavevector only in the continuum
mode integral is sufficient to leave the actual finite-box Gibbs trace finite
even if the zero-energy mode remains in the discrete occupation space.

## Facts & Assumptions

**Given:** Assume Countable Choice [[def-countable-choice]] for the Fock basis and Lebesgue-null singleton suppliers. Let $I_0=(\mathbb Z^3\setminus\{0\})\times\{1,2\}$ be the enumerated base mode set of [[thm-tgr-photon-planck-flux]], with its stated max-norm shell and lexicographic ordering.

[A1] Form the ordered disjoint union $I'=\{0_\star\}\sqcup I_0$, placing the new label $0_\star$ first. Give $0_\star$ energy $\epsilon_{0_\star}=0$ and each $i=(n,s)\in I_0$ its energy from [[thm-tgr-photon-planck-flux]]. Let $\Omega'_B$ be the set of finite-support maps $m:I'\to\mathbb N_0$, let $E'(m)=\sum_{i\in I'}\epsilon_i m_i$, and set $\mathcal H'=\ell^2(\Omega'_B,\mathbb C)$ with its occupation basis. Define $H'$ by $(H'a)_m=E'(m)a_m$ on $D(H')=\{a\in\mathcal H':\sum_m E'(m)^2|a_m|^2<\infty\}$, and define the bounded positive diagonal multiplier $G_\beta$ by $G_\beta|m\rangle=e^{-\beta E'(m)}|m\rangle$. Its diagonal partition sum is $Z'_\beta:=\sum_{m\in\Omega'_B}e^{-\beta E'(m)}\in[0,+\infty]$. This is the stipulated extension of the finite-box diagonal model by one zero-energy bosonic mode, without a zero-point term.

[F1] [[lem-qsm-fock-occupation-basis-and-car-relations]], Statement: for a specified enumerated mode set, finite-support bosonic occupation configurations give an orthonormal basis of the bosonic Fock space. The current batch 45 evidence records this draft carrier as Step-1-ready; that is not independent review or proof acceptance, so the use remains conditional on its inspected interface.

[F2] [[def-trace-class-operator]], Definition: a trace-class operator is compact and its singular values have finite sum. The compactness condition uses the exact definition in def-compact-linear-operator: the image of every bounded set must have compact closure; compactness of that closure is the finite-open-subcover property in def-metric-compactness.

[F3] [[thm-tgr-photon-planck-flux]], Statement: the base model has nonzero wavevectors only and its corresponding diagonal Gibbs trace is finite under the explicitly stated summability conditions.

[F4] [[def-countable-choice]]: the Fock-basis supplier assumes $\mathrm{AC}_\omega$.

[F5] [[thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null]], Statement: assuming $\mathrm{AC}_\omega$, every proper linear subspace of $\mathbb R^3$ is Lebesgue measurable and null; in particular, $\{0\}$ is null.

## Counterexample

**Given:** The explicit extended mode and occupation model in [A1].

1.1 For each integer $r\ge0$, let $m^{(r)}\in\Omega'_B$ have occupation $r$ at $0_\star$ and occupation zero at every $i\in I_0$. These are distinct finite-support configurations, so [F1] makes $|m^{(r)}\rangle$ an orthonormal sequence in $\mathcal H'$. [given, A1, F1, F3, F4]

2.1 The diagonal multiplier satisfies $E'(m^{(r)})=r\epsilon_{0_\star}=0$, hence $G_\beta|m^{(r)}\rangle=|m^{(r)}\rangle$. Let $B=\{a\in\mathcal H':\|a\|\le1\}$ and let $K=\overline{G_\beta(B)}$. If $G_\beta$ were compact, its image of the bounded set $B$ would have compact closure $K$ by the compact-operator definition recorded in [F2]. All vectors $|m^{(r)}\rangle$ belong to $K$. The sets $K\cap\{x\in\mathcal H':\|x-y\|<1/2\}$, for $y\in K$, form an open cover of $K$. Distinct vectors $|m^{(r)}\rangle$ have distance $\sqrt2$, while every such ball has diameter at most $1$; no finite subfamily covers all these vectors. This contradicts compactness, so $G_\beta$ is not compact and therefore is not trace class by [F2]. The diagonal partition sum $Z'_\beta$ contains $\sum_{r=0}^\infty e^{-\beta r\epsilon_{0_\star}}=\sum_{r=0}^\infty1=\infty$. The continuum zero-mode set $\{0\}\subset\mathbb R^3$ has Lebesgue measure zero by [F5], but that fact does not remove the infinitely many discrete zero-mode occupation states. [given, A1, F2, F5, step 1.1, algebra] ∎
