---
id: lem-finite-torsionfree-modules-over-dedekind-domains-are-projective
kind: lemma
title: "Finite torsion-free modules over Dedekind domains are projective"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-field-of-fractions, lem-dedekind-localisation-at-nonzero-prime-is-dvr, cor-finitely-generated-torsion-free-modules-over-a-pid-are-free, thm-localisation-of-modules-is-exact, thm-projective-module-characterizations, thm-proper-ideal-contained-in-maximal-ideal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, §20"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Lemma 15.22.11"
      url: "https://stacks.math.columbia.edu/tag/0AUW"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every finite torsion-free module over a Dedekind domain is projective.

## Facts & Assumptions

**Given:** A Dedekind domain $R$ and a finitely generated torsion-free $R$-module $M$.

[L1] Localising a Dedekind domain at a nonzero prime gives a DVR ([[lem-dedekind-localisation-at-nonzero-prime-is-dvr]]).

[L2] Every finitely generated torsion-free module over a PID is free ([[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]]).

[L3] Localisation of modules is exact ([[thm-localisation-of-modules-is-exact]]).

[L4] A module is projective exactly when some free cover splits ([[thm-projective-module-characterizations]]).

[L5] Every proper ideal is contained in a maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]]).

## Proof

**Proof technique:** direct.

1.1 Choose a surjection $\pi:F\to M$ from a finite free module $F$. For a maximal ideal $\mathfrak m$, the localisation $R_{\mathfrak m}$ is a DVR by [L1], hence a PID, and $M_{\mathfrak m}$ is still finitely generated and torsion-free by [L3]. Therefore [L2] makes $M_{\mathfrak m}$ a free $R_{\mathfrak m}$-module. Thus the localised surjection $\pi_{\mathfrak m}:F_{\mathfrak m}\to M_{\mathfrak m}$ splits, and clearing the finitely many denominators in one local section yields $t_{\mathfrak m}\notin\mathfrak m$ and a global map $u_{\mathfrak m}:M\to F$ such that $\pi u_{\mathfrak m}=t_{\mathfrak m}\operatorname{id}_M$. [L1, L2, L3, given, choose]

2.1 Let $J:=\{r\in R:\text{there exists }u:M\to F\text{ with }\pi u=r\operatorname{id}_M\}$. This is an ideal of $R$, and step 1.1 shows that for every maximal ideal $\mathfrak m$ one has $t_{\mathfrak m}\in J\setminus\mathfrak m$. Therefore $J$ is not contained in any maximal ideal. By [L5], $J$ cannot be proper, so $1\in J$. Choose $u:M\to F$ with $\pi u=\operatorname{id}_M$. Then $\pi$ splits, and [L4] makes $M$ projective. [L4, L5, step 1.1, choose, algebra] ∎
