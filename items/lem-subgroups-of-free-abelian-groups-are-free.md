---
id: lem-subgroups-of-free-abelian-groups-are-free
kind: lemma
title: "Subgroups of free abelian groups are free"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-free-module-on-a-set-and-standard-basis, cor-submodules-of-finite-free-pid-modules-are-free]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

Assume the Axiom of Choice. Every subgroup of a free abelian group is free
abelian.

## Facts & Assumptions

**Given:** A free abelian group $F$ with a basis, a subgroup $H\leq F$, and the Axiom of Choice. By the well-ordering theorem, index the basis as $(e_\alpha)_{\alpha<\kappa}$.

## Proof

**Proof technique:** direct.

1.1 Put $F_\alpha=\langle e_\beta:\beta<\alpha\rangle$ and $H_\alpha=H\cap F_\alpha$. At a successor stage, $H_{\alpha+1}/H_\alpha$ is a subgroup of $F_{\alpha+1}/F_\alpha\cong\mathbb Z$, hence is free; the finite-free PID result [[cor-submodules-of-finite-free-pid-modules-are-free]] supplies the required one-generator extension. [given, construct]

2.1 If $H_{\alpha+1}/H_\alpha$ is nonzero, choose a lift $x_\alpha$ of its positive generator. Since the quotient is free, the short exact sequence splits and a basis of $H_\alpha$ extends by $x_\alpha$ to one of $H_{\alpha+1}$. At a limit stage $H_\lambda=\bigcup_{\alpha<\lambda}H_\alpha$, and the nested union of the previously chosen bases is a basis. Transfinite induction through the terminal stage $\kappa$ therefore gives a basis of $H_\kappa=H\cap F_\kappa=H$. This also covers $\kappa=0$, when $H=0$ has the empty basis. [step 1.1, algebra] ∎
