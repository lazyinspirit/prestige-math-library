---
id: lem-yangian-rtt-spectral-rescaling
kind: lemma
title: "The rational i-normalization is the standard RTT normalization after rescaling"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-yangian-gl-n-rtt-presentation, def-yangian-evaluation-module]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. I. Molev, M. L. Nazarov, and G. I. Olshanski, Yangians and classical Lie algebras"
      url: "https://arxiv.org/pdf/hep-th/9409025"
      locator: "§§1.4 and 1.8: the conventional Yang R-matrix R_0(z)=zI-P and its RTT presentation."
    - title: "A. P. Isaev, Lectures on Quantum Groups and Yang-Baxter Equations"
      url: "https://arxiv.org/pdf/2206.08902"
      locator: "§3.9, equations (3.9.16)–(3.9.18): the rational Yangian R-matrix and RTT coproduct convention."
---

## Statement

Let $R_i(x)=xI+iP_N$ be the normalization of [[def-yangian-gl-n-rtt-presentation]], and define the standard polynomial Yang matrix $R_0(z)=zI-P_N$. The change of spectral variable $z=iu$, with $\widetilde T(z)=T(-iz)$, converts the RTT relation for $R_i$ to the standard RTT relation for $R_0$. Under this change the evaluation parameter $a$ becomes $ia$.

## Facts & Assumptions

**Given:** $N\ge2$, $R_i(x)=xI+iP_N$, the RTT relation, and the evaluation-module formula of [[def-yangian-evaluation-module]].

[F1] [[def-yangian-gl-n-rtt-presentation]]: $R_i(x)=xI+iP_N$ and $R_i(u-v)T_1(u)T_2(v)=T_2(v)T_1(u)R_i(u-v)$.

[F2] [[def-yangian-evaluation-module]]: $t_{ij}(u)=\delta_{ij}I-i\rho(E_{ij})/(u-a)$.

## Proof

1.1 Direct substitution gives $R_i(-i(z-w))=-i((z-w)I-P_N)=-iR_0(z-w)$. [given, F1, algebra]

2.1 Substitute $u=-iz$ and $v=-iw$ in the RTT relation [F1]. By step 1.1, each side has the same nonzero scalar factor $-i$, which cancels; the resulting relation is $R_0(z-w)\widetilde T_1(z)\widetilde T_2(w)=\widetilde T_2(w)\widetilde T_1(z)R_0(z-w)$. [given, F1, step 1.1, algebra]

3.1 In the evaluation module, substitute $u=-iz$ into [F2]. Since $-iz-a=-i(z-ia)$, one obtains $t_{ij}(-iz)=\delta_{ij}I+\rho(E_{ij})/(z-ia)$. Thus the shifted standard evaluation parameter is exactly $ia$. [given, F2, algebra] ∎
