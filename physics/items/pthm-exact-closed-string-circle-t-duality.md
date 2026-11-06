---
id: pthm-exact-closed-string-circle-t-duality
kind: physics-theorem
title: Free Closed String Graded Spectrum Under Radius Inversion
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps: [def-compact-free-string-circle-spectrum]
dependency_roles:
  def-compact-free-string-circle-spectrum: formulation-prerequisite
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Exact algebraic duality of the flat free closed compact-boson graded oscillator spectrum, weights, and level matching only; it excludes full CFT/operator, cocycle, partition-function, sewing, curved-background, S-duality, and U-duality equivalence."
sources:
  references:
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture II §2.1, equations (2.4)–(2.8), PDF pp. 9–11: the zero-mode exchange and right-moving reflection."
    - title: "A. Giveon, M. Porrati, and E. Rabinovici, Target Space Duality in String Theory, arXiv:hep-th/9401139v1"
      url: "https://arxiv.org/pdf/hep-th/9401139v1"
      locator: "§2.2, equations (2.2.5)–(2.2.12), PDF pp. 14–15: left/right momenta, Virasoro weights, and the radius inversion."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For the free compact-boson sector defined in the preceding item, set $R'=\alpha'/R$, $n'=w$, and $w'=n$. Then $p'_L=p_L$ and $p'_R=-p_R$; in the supplied $\tau-\sigma$/$\tau+\sigma$ convention, reflect the right-moving compact-coordinate modes by $\alpha_m\mapsto-\alpha_m$ for $m\in\mathbb Z$ and leave the left-moving modes $\widetilde\alpha_m$ fixed. This induces a bijection on occupation states and preserves $N,\bar N$, so $h$ and $\bar h$ are unchanged. Also $n'w'=nw$, hence level matching $nw+N-\bar N=0$ is unchanged. Thus the perturbative free-circle graded oscillator state-space weights and level matching are preserved under radius inversion and momentum-winding exchange. This calculation does not establish vertex-operator locality or OPE equivalence, lattice cocycles, partition-function or sewing equivalence, or full worldsheet CFT/operator equivalence.

## Statement references

[Polchinski, Chaudhuri, and Johnson, Lecture II §2.1](https://arxiv.org/pdf/hep-th/9602052v2)

[Giveon, Porrati, and Rabinovici, §2.2](https://arxiv.org/pdf/hep-th/9401139v1)

## Facts & Assumptions

**Given:** $R>0$, $\alpha'>0$, integers $n,w$, fixed left/right grades $N,\bar N$, and the free-circle spectrum conventions.

[F1] [[def-compact-free-string-circle-spectrum]]: $p_L=n/R+wR/\alpha'$, $p_R=n/R-wR/\alpha'$, $h=\alpha'p_L^2/4+N$, $\bar h=\alpha'p_R^2/4+\bar N$, and $h-\bar h=nw+N-\bar N$. In its mode convention, $\alpha_m$ are the right-moving $\tau-\sigma$ modes and $\widetilde\alpha_m$ the left-moving $\tau+\sigma$ modes; the occupation labels and their grades are defined there.

## Proof

1.1 Define $R'=\alpha'/R$, $n'=w$, and $w'=n$. Since $R,\alpha'>0$, also $R'>0$. Substitution into [F1] gives $p'_L=n'/R'+w'R'/\alpha'=wR/\alpha'+n/R=p_L$ and $p'_R=n'/R'-w'R'/\alpha'=wR/\alpha'-n/R=-p_R$. [given, F1, algebra]

2.1 Let $\mathscr H_R$ be [F1]'s Hilbert space at radius $R$ and define $\mathscr H_{R'}$ by the same construction with $R$ replaced by $R'$. On basis states define $\mathcal T_R|n,w;\mathbf r_L,\mathbf r_R\rangle_R:=(-1)^{\sum_{k\ge1}r_{R,k}}|w,n;\mathbf r_L,\mathbf r_R\rangle_{R'}$. This signed permutation maps the orthonormal basis of $\mathscr H_R$ onto that of $\mathscr H_{R'}$. Its inverse is the same construction $\mathcal T_{R'}$, so it is unitary and $\mathcal T_{R'}\mathcal T_R=I$. On the common occupation labels this gives $\mathcal T_R\alpha_{-k,R}=-\alpha_{-k,R'}\mathcal T_R$ and $\mathcal T_R\widetilde\alpha_{-k,R}=\widetilde\alpha_{-k,R'}\mathcal T_R$ for every $k\ge1$; taking adjoints gives the same signs on annihilation modes. By [F1], $\alpha_{0,R}=\sqrt{\alpha'/2}\,p_R$ and $\widetilde\alpha_{0,R}=\sqrt{\alpha'/2}\,p_L$, so step 1.1 gives $\mathcal T_R\alpha_{0,R}=-\alpha_{0,R'}\mathcal T_R$ and $\mathcal T_R\widetilde\alpha_{0,R}=\widetilde\alpha_{0,R'}\mathcal T_R$. It fixes the left/right occupation sequences and spectator labels, hence preserves $N$ and $\bar N$. [given, F1, step 1.1, construct, algebra]

3.1 By step 1.1, $p_L'^2=p_L^2$ and $p_R'^2=p_R^2$; by step 2.1, $N'=N$ and $\bar N'=\bar N$. Thus both weights in [F1] are preserved. The exchanged integers satisfy $n'w'=wn=nw$, so the formula in [F1] gives the same level-matching condition on both sides. [given, F1, step 1.1, step 2.1, algebra] ∎

## Remarks

The radius/momentum/winding map is an involution on this kinematic sector. The cited sources use different names for their left/right oscillator modes; here the reflection is assigned by the explicitly stated $\tau-\sigma$/$\tau+\sigma$ convention of [F1]. No operator-product or global worldsheet conclusion follows from this graded-state calculation.
