---
id: cex-pa36-singular-localization-and-parabolic-kernel
kind: counterexample
title: At the singular SL2 twist global sections is not conservative
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - def-pa36-flag-tdo-and-module
  - def-sheaf-cohomology-derived-global-sections
  - lem-pa36-flag-tdo-pbw-and-twist
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - thm-minimal-parabolic-flag-projection-is-p1-bundle
  - thm-pa36-antidominant-singular-serre-quotient
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
      locator: "§§7.7 and 8.1, printed pp. 99–100; singular SL2 module and parabolic pushforward"
    - title: "Pavel Etingof, Representations of Lie Groups, MIT 18.757 (2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "§29.8, printed pp. 145–146; singular boundary example"
---

## Statement refuted

The global-sections functor is conservative for every antidominant twist,
including singular twists, and the corresponding simple-parabolic
pushforward detects every nonzero module.

## Facts & Assumptions

**Given:** $G=\mathrm{SL}_2$, $X=\mathbb P^1$, $\rho$ with $\rho(h)=1$,
$\kappa=0$, and the standard two-chart cover.

[F1] $\mathcal D_0=\operatorname{Diff}(\mathcal O_X(\rho))
=\operatorname{Diff}(\mathcal O_{\mathbb P^1}(-1))$
([[lem-pa36-flag-tdo-pbw-and-twist]]).

[F2] The ordered Cech complex of a finite affine cover computes cohomology of
a quasi-coherent sheaf on the separated scheme $\mathbb P^1$
([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]).

[F3] For $\mathrm{SL}_2$, the unique simple parabolic is $P_\alpha=G$ and
$G/P_\alpha$ is a point ([[def-complex-semisimple-algebraic-group-borel-and-flag-variety]],
[[thm-minimal-parabolic-flag-projection-is-p1-bundle]]).

## Counterexample

1.1 The twist parameter is $\kappa=0$, so
$\langle\kappa,\alpha^\vee\rangle=0$: it is antidominant and singular under
the definitions in [[def-pa36-flag-tdo-and-module]]. The line bundle
$\mathcal O(-1)$ is nonzero and is a $\mathcal D_0$-module by [F1].
[F1, given]

2.1 Let $z=y/x$ on $U_0$ and $w=x/y$ on $U_1$, with frames related by
$e_1=z^{-1}e_0$. The Cech complex has
$$C^0=\mathbb C[z]e_0\oplus\mathbb C[w]e_1,\qquad
C^1=\mathbb C[z,z^{-1}]e_0,$$
and differential $(f_0,f_1)\mapsto z^{-1}f_1(1/z)-f_0(z)$. A global section
would identify a polynomial in nonnegative powers of $z$ with a sum of
strictly negative powers, so $H^0=0$. In degree one the image contains all
nonnegative powers from $f_0$ and all negative powers from $z^{-1}f_1(1/z)$;
these span the Laurent polynomials, so $H^1=0$. [F2, algebra]

3.1 By [F3], $p_\alpha:X\to G/P_\alpha$ is the map to a point. Hence
$p_{\alpha*}\mathcal O(-1)=H^0(X,\mathcal O(-1))=0$, while
$\mathcal O(-1)\ne0$. The global-sections kernel and the parabolic-pushforward
kernel are therefore nonzero, contradicting the refuted assertion. This is
the singular Serre-kernel branch, not a counterexample to exactness: the
antidominant global-sections functor remains exact by
[[thm-pa36-flag-d-affinity]]. [F2, F3, step 1.1, step 2.1] ∎
