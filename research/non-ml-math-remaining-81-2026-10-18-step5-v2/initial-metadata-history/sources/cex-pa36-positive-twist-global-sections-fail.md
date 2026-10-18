---
id: cex-pa36-positive-twist-global-sections-fail
kind: counterexample
title: A positive integral SL2 twist is regular but not D-affine
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-pa36-flag-tdo-and-module
  - def-sheaf-cohomology-derived-global-sections
  - lem-pa36-flag-tdo-pbw-and-twist
  - lem-pa36-module-global-sections-derived-cohomology
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
verification:
  precheck: pass
sources:
  references:
    - title: "Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)"
      url: "https://numdam.org/item/AST_1989__173-174__55_0.pdf"
      locator: "§7.6, printed p. 98; the non-antidominant SL2 boundary"
    - title: "Pavel Etingof, Representations of Lie Groups, MIT 18.757 (2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "§29.8, printed pp. 145–146; regularity alone does not imply D-affinity"
---

## Statement refuted

Regularity of $\kappa$ alone implies that $\Gamma(X,-)$ is exact and
conservative for $\mathcal D_\kappa$-modules.

## Facts & Assumptions

**Given:** $G=\mathrm{SL}_2$, $X=\mathbb P^1$, $\rho$ with
$\rho(h)=1$, and an integer $c\ge1$.

[F1] For integral $\kappa=c\rho$,
$\mathcal D_{c\rho}=\operatorname{Diff}(\mathcal O_X((c+1)\rho))
=\operatorname{Diff}(\mathcal O_{\mathbb P^1}(-c-1))$
([[lem-pa36-flag-tdo-pbw-and-twist]]).

[F2] Cech cohomology on the two affine charts of $\mathbb P^1$ computes
sheaf cohomology ([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]).

[F3] For a sheaf of rings, the right-derived global sections on its module
category agree with sheaf cohomology of the underlying module sheaf
([[lem-pa36-module-global-sections-derived-cohomology]]).



## Proof

1.1 For $\alpha$ the unique positive root, $\langle\kappa,\alpha^\vee\rangle=c>0$, so $\kappa$ is regular and non-antidominant. By [F1], $M=\mathcal O(-c-1)$ is a left $\mathcal D_\kappa$-module, and it is nonzero because it is locally free of rank one. [F1, given]

1.2 With $z=y/x$, $w=x/y$ and transition $e_1=z^d e_0$ for $d=-c-1$, the Cech differential has image spanned by nonnegative powers $z^n$ and powers $z^{d-n}$ for $n\ge0$. The first summand gives every exponent $n\ge0$, the second every exponent $n\le -c-1$; the quotient has basis $z^{-c},z^{-c+1},\ldots,z^{-1}$, of size $c$. No exponent belongs to the intersection of those two ranges, so $H^0=0$. Thus $H^1(X,M)\cong\mathbb C^c$ and $\Gamma(X,M)=0$. [F2, algebra]

2.1 The nonzero module $M$ with zero global sections proves failure of conservativity. By [F3], $H^1(X,M)$ is the first right-derived functor of $\Gamma$ in the $\mathcal D_\kappa$-module category. An exact left-exact functor has zero positive right-derived functors; since this one is $\mathbb C^c\ne0$, $\Gamma$ is not exact. [F3, step 1.2, algebra] ∎
