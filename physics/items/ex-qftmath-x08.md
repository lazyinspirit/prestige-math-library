---
id: ex-qftmath-x08
kind: example
title: Hypothetical calibration error interval
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [lem-qft-example-deterministic-ratio-error]
dependency_roles:
  lem-qft-example-deterministic-ratio-error: mathematical-premise
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "X. Fan et al., Measurement of the Electron Magnetic Moment, Physical Review Letters 130, 071801 (2023), arXiv:2209.13084v2 (2022)"
      url: https://arxiv.org/html/2209.13084
    - title: "L. S. Brown and G. Gabrielse, Geonium theory: Physics of a single electron or ion in a Penning trap, Reviews of Modern Physics 58 (1986)"
      url: https://cfp.physics.northwestern.edu/documents/GeoniumTheoryReview.pdf
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

Take the stipulated nominal values $a=1\,\mathrm{Hz}$, $c=100\,\mathrm{Hz}$, and interval bounds $\epsilon_a=0.1\,\mathrm{Hz}$, $\epsilon_c=1\,\mathrm{Hz}$. The nominal ratio $R=1+a/c$ is dimensionless, and the exact absolute error bound is $11/9900$. These inputs are hypothetical interval values: they are not measurements, error bars, a standard error, or a confidence interval, and no reported Fan et al. data are used.

## Facts & Assumptions

**Given:** The four numerical values in the example are stipulated. Fix the formal unit $u=1\,\mathrm{Hz}$ and model frequency quantities as $\mathcal F_u=\{xu:x\in\mathbb R\}$, with addition $(xu)+(yu)=(x+y)u$ and real scalar multiplication $t(xu)=(tx)u$. The numerical-coordinate map is $n_u:\mathcal F_u\to\mathbb R$, $n_u(xu)=x$. Define $xu\le yu$ to mean $x\le y$, $|xu|:=|x|u$, and the dimensionless quotient $(xu)/(yu):=x/y$ for $y>0$. Thus the quantity expression $1+a/c$ means $R(n_u(a),n_u(c))$, where $R$ is the real function in [F1].

[A1] $a=1u$, $c=100u$, $\epsilon_a=\tfrac1{10}u$, and $\epsilon_c=1u$. Write $\alpha=n_u(a)=1$, $\gamma=n_u(c)=100$, $e_a=n_u(\epsilon_a)=1/10$, and $e_c=n_u(\epsilon_c)=1$. Allowed perturbations are $\delta a=su$, $\delta c=tu$, with $s,t\in\mathbb R$, $|s|\le e_a$, and $|t|\le e_c<\gamma$; these are exactly the stipulated quantity interval conditions under the given coordinate map.

[F1] [[lem-qft-example-deterministic-ratio-error]] (Statement): the current carrier is a draft lemma with a complete local proof but no independent acceptance stamp. Its exact bound is conditional input to this numerical verification, not a result certified by this example. It defines $R:\mathbb R\times(0,\infty)\to\mathbb R$ by $R(x,y)=1+x/y$ and gives, for real $\alpha,s,t$, $\gamma>0$, and nonnegative $e_a,e_c$, the bound $|R(\alpha+s,\gamma+t)-R(\alpha,\gamma)|\le(\gamma e_a+|\alpha|e_c)/(\gamma(\gamma-e_c))$ whenever $|s|\le e_a$ and $|t|\le e_c<\gamma$.

## Verification
1.1 Apply [F1] to the real coordinates in [A1]: $\gamma+t\ge100-1=99>0$, $\gamma e_a+|\alpha|e_c=100\cdot(1/10)+1\cdot1=11$, and $\gamma(\gamma-e_c)=100\cdot99=9900$. Hence every allowed perturbation satisfies $|R(\alpha+s,\gamma+t)-R(\alpha,\gamma)|\le11/9900$. By the given quotient definition, these are precisely the perturbed and nominal quantity ratios $1+(a+\delta a)/(c+\delta c)$ and $1+a/c$. [given, A1, F1, algebra]

2.1 The nominal value is $R(\alpha,\gamma)=1+1/100=101/100=1.01$. The coordinate and quotient definitions make both the ratio and its bound dimensionless. The bound is a deterministic calculation for the stated intervals only, with no empirical or statistical interpretation. [given, A1, step 1.1, algebra] ∎
