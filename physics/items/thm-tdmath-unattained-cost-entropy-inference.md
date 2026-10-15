---
id: thm-tdmath-unattained-cost-entropy-inference
kind: theorem
title: Catalyst-chain cost characterizes cross-type transitions
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 16
deps: [lem-tdmath-reciprocal-naturals-tend-zero, def-tdmath-forward-sector-hypotheses, thm-tdmath-arbitrary-family-calibration, def-tdmath-decorated-chain-costs, lem-tdmath-decorated-cost-algebra, lem-tdmath-forward-spectator-cancellation]
dependency_roles:
  lem-tdmath-reciprocal-naturals-tend-zero: mathematical-premise
  def-tdmath-forward-sector-hypotheses: mathematical-premise
  thm-tdmath-arbitrary-family-calibration: mathematical-premise
  def-tdmath-decorated-chain-costs: mathematical-premise
  lem-tdmath-decorated-cost-algebra: mathematical-premise
  lem-tdmath-forward-spectator-cancellation: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, Theorem 6.1 and proof, pp. 75–76"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapters 2 and 4, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
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

Assume the calibrated entropy family of [[thm-tdmath-arbitrary-family-calibration]], the cross-type accessibility axioms A1–A6 of [[def-tdmath-forward-sector-hypotheses]], and the decorated cost $F$ of [[def-tdmath-decorated-chain-costs]]. For every pair of types $\Gamma,\Gamma'$ with $m(\Gamma)=m(\Gamma')$, and states $x\in X_\Gamma$, $y\in X_{\Gamma'}$,

$$x\prec y\quad\Longleftrightarrow\quad \sigma_\Gamma(x)+F(\Gamma,\Gamma')\le \sigma_{\Gamma'}(y).$$

The infimum defining $F$ need not be attained. If $F=+\infty$, the right side is false; if $F=-\infty$, the right side is true.

## Facts & Assumptions

**Given:** The complete additive extensive entropy on every finite type, the finite-chain cost, and A1–A6 including stability.

[A1] [[def-tdmath-forward-sector-hypotheses]]: consistency permits running accessible edges with common spectators; stability removes fixed positive spectators whose common scale tends to zero.

[F1] [[thm-tdmath-arbitrary-family-calibration]]: every type and finite separated product has a finite real additive extensive entropy representing same-composition comparisons; its Statement fixes a strict meter pair $z_0\prec\prec z_1$.

[F2] [[def-tdmath-decorated-chain-costs]]: $F$ is the infimum of the real costs of finite chains with an arbitrary common catalyst.

[F3] [[lem-tdmath-decorated-cost-algebra]]: every actual decorated-chain witness has a finite real additive cost, and costs have no negative closed cycles.

[F4] [[lem-tdmath-forward-spectator-cancellation]]: common finite compound spectators can be cancelled under A1–A6.

[F5] [[lem-tdmath-reciprocal-naturals-tend-zero]]: with natural index $k$, the real sequence $\epsilon_k=1/\iota_{\mathbb N}(\sigma(k))$ is positive, strictly decreasing and converges to zero; its Facts F2–F3 explicitly interpret the Statement's denominator $k+1$ as $\iota_{\mathbb N}(\sigma(k))$.

## Proof

1.1 If $x\prec y$, the one-edge witness with an identity catalyst has cost $\sigma_{\Gamma'}(y)-\sigma_\Gamma(x)$. Hence $F(\Gamma,\Gamma')\le\sigma_{\Gamma'}(y)-\sigma_\Gamma(x)$, which is the forward inequality, including the case $F=+\infty$ where no such transition can exist. [F1, F2]

1.2 Conversely assume the displayed entropy inequality. It is impossible when $F=+\infty$. Fix an arbitrary natural index $n\in\mathbb N$, use $\epsilon_n$ from [F5] and choose a decorated witness of real cost $c_n\le\Delta\sigma+h\epsilon_n$, where $\Delta\sigma=\sigma_{\Gamma'}(y)-\sigma_\Gamma(x)$ and $h=\sigma(z_1)-\sigma(z_0)>0$ is the entropy gap of a fixed strict meter pair from [F1]. Such witnesses exist from the definition of infimum, also if $F=-\infty$. Write their types as $T_0=\Gamma\times C,T_1,\ldots,T_N=\Gamma'\times C$, their edges as $a_k\prec b_{k+1}$, and their endpoints as $a_0=(\widetilde x,c_0)$, $b_N=(\widetilde y,d_0)$. [F1, F2, F3, F5, choose]

2.1 Put $\delta_n=\epsilon_n$. In one finite compound type form
$L_n=(x,b_N,b_1,\ldots,b_{N-1},\delta_n z_0),\qquad R_n=(a_0,y,a_1,\ldots,a_{N-1},\delta_n z_1).$
These have the same composition: both contain $\Gamma$, $\Gamma'$, the catalyst $C$, every intermediate type $T_1,\ldots,T_{N-1}$, and one scaled meter state, up to reassociation and permutation. Additivity of $\sigma$ and the definition of chain cost give
$\sigma(R_n)-\sigma(L_n)=\Delta\sigma-c_n+\delta_n h\ge0.$
Thus the same-composition entropy representation [F1] gives $L_n\prec R_n$. [A1, F1, F3, F5, step 1.2, algebra]

3.1 Starting from $R_n$, use consistency on $a_0\prec b_1$ with $y,\delta_nz_1,a_1,\ldots,a_{N-1}$ as spectators. The result contains $b_1$ in place of $a_0$. Next use $a_1\prec b_2$ with $y,\delta_nz_1,b_1,a_2,\ldots,a_{N-1}$ as spectators, and continue in order. At stage $k$, the current compound contains $a_k$, the earlier outputs $b_1,\ldots,b_k$, all later inputs $a_{k+1},\ldots,a_{N-1}$, and the unchanged $y,\delta_nz_1$. After the last edge, transitivity gives $R_n\prec R'_n$, where $R'_n=(b_1,\ldots,b_N,y,\delta_nz_1)$. Compose this with $L_n\prec R_n$ from step 2.1. The compounds $L_n$ and $R'_n$ share the finite spectator $b_1+\cdots+b_N$; cancel it by [F4]. The result is $x+\delta_nz_0\prec y+\delta_nz_1$ for this $n$. Since $n$ was arbitrary, this comparison holds for every natural index; the chain witnesses need not be chosen simultaneously. [A1, F4, step 2.1]

4.1 By [F5], $\delta_n\downarrow0$, stability in [A1] with bases $x,y$ and fixed positive spectators $z_0,z_1$ yields $x\prec y$. This proves the reverse implication without assuming that any infimum is attained. [A1, F5, step 3.1] ∎
