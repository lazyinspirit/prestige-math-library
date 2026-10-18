---
id: lem-pa36-singular-parabolic-kernel
kind: lemma
title: The singular simple-parabolic kernel on the flag variety
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-pa36-flag-tdo-and-module
  - def-sheaf-tensor-product
  - def-weyl-vector-rho-for-a-chosen-positive-system
  - lem-pa36-p1-line-bundle-cohomology
  - lem-pa36-flag-tdo-pbw-and-twist
  - lem-pa36-partial-flag-twist-product
  - thm-affine-morphism-higher-direct-images-qc-vanish
  - thm-minimal-parabolic-flag-projection-is-p1-bundle
  - thm-pa36-flag-d-affinity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)"
      url: "https://numdam.org/item/AST_1989__173-174__55_0.pdf"
      locator: "§§7.7 and 8.1–8.2, Lemma 7.7.1 and Proposition 8.2.1, printed pp. 99–101"
---

## Statement

Let $\kappa$ be antidominant and let $\alpha$ be a simple root with
$\langle\kappa,\alpha^\vee\rangle=0$. Put
$p_\alpha:X=G/B\to X_\alpha=G/P_\alpha$, a Zariski-locally trivial
$\mathbb P^1$-bundle, and let $\rho=\frac12\sum_{\beta\in\Phi^+}\beta$.
Use the partial TDO $\mathcal D^{\alpha}_{\kappa-\rho}$ and pullback module
$p_\alpha^\dagger N$ defined in
[[lem-pa36-partial-flag-twist-product]]. For every coherent
$\mathcal D_\kappa$-module $M$:

1. $R^q p_{\alpha*}M=0$ for every $q>0$;
2. $p_{\alpha*}M=0$ if and only if there is a unique coherent
   $\mathcal D^{\alpha}_{\kappa-\rho}$-module $N$ with
   $$M\cong\mathcal O_X(\rho)\otimes p_\alpha^\dagger N,$$
   where $N\cong p_{\alpha*}(\mathcal O_X(-\rho)\otimes M)$.

The proof below establishes the forward implication in (2) and reduces the
reverse implication to an explicit rank-one kernel classification; that
classification remains escalated and is not treated as proved here.

## Facts & Assumptions

**Given:** Antidominant $\kappa$, a simple root $\alpha$ with zero pairing,
the minimal parabolic projection $p_\alpha$, and a coherent
$\mathcal D_\kappa$-module $M$.

[F1] $p_\alpha$ is a Zariski-locally trivial $\mathbb P^1$-bundle and the
fiber is $\mathrm{SL}_2/B_{\mathrm{SL}_2}$ for the root subalgebra
([[thm-minimal-parabolic-flag-projection-is-p1-bundle]]).

[F2] On the local product charts, $\mathcal D_{\kappa-\rho}$ is the product
of the untwisted relative $\mathcal D_{\mathbb P^1}$ with the partial TDO,
and tensoring by $\mathcal O_X(\rho)$ shifts its parameter to $\kappa$;
$\mathcal O_X(\rho)$ restricts to $\mathcal O_{\mathbb P^1}(-1)$
([[lem-pa36-partial-flag-twist-product]]).

[F3] On a fiber, $H^0(\mathbb P^1,\mathcal O(-1))=H^1(\mathbb P^1,\mathcal O(-1))=0$;
the line is nevertheless nonzero ([[lem-pa36-p1-line-bundle-cohomology]]).

[F4] For the rank-one parameter $0$, higher cohomology of every
quasicoherent $\mathcal D_0$-module vanishes by antidominant D-affinity
([[thm-pa36-flag-d-affinity]]).

[F5] An affine morphism has no positive higher direct images on
quasicoherent sheaves ([[thm-affine-morphism-higher-direct-images-qc-vanish]]).

## Proof

1.1 On a Zariski product chart $p_\alpha^{-1}(U)\cong\mathbb P^1\times U$
from [F1], [F2] identifies the relative TDO with the singular rank-one
$\mathcal D_0=\operatorname{Diff}(\mathcal O_{\mathbb P^1}(-1))$. For an
affine open $W\subseteq U$, the projection
$q:\mathbb P^1\times W\to\mathbb P^1$ is affine. Thus $q_*M$ is
quasicoherent, its relative $\mathcal D_0$ action is defined, and
$R^r q_*M=0$ for $r>0$ by [F5]. Leray identifies
$H^q(\mathbb P^1\times W,M)$ with $H^q(\mathbb P^1,q_*M)$; this is zero
for $q>0$ by [F4] applied to the rank-one group. Since such $W$
form an affine basis of $X_\alpha$, $R^q p_{\alpha*}M=0$ for $q>0$. If
$M=\mathcal O_X(\rho)\otimes p_\alpha^\dagger N$, its underlying sheaf on
each product chart is $\mathcal O_{\mathbb P^1}(-1)\boxtimes N|_U$. Its
pushforward is zero by [F3]. This proves the vanishing assertion and the
forward implication in (2). [F1, F2, F3, F4, F5, construct]

2.1 Conversely, if $p_{\alpha*}M=0$, the same product trivialization reduces
the claimed isomorphism to the following rank-one assertion, with the
commuting base ring retained: every coherent relative
$\mathcal D_0$-module $Q$ on $\mathbb P^1$ with $\Gamma(\mathbb P^1,Q)=0$
is the relative tensor product of $\mathcal O_{\mathbb P^1}(-1)$ with a
unique base module, and this identification commutes with base change and
the transition maps of the $P_\alpha$-torsor. Kashiwara's Lemma 7.7.1
reduces this to the explicit induced-module exact sequence for the standard
two-dimensional $\mathfrak{sl}_2$ representation. The retained extracted
passage at printed p. 99 has that sequence and its maps OCR-garbled; the full
rank-one classification and its relative descent have not been independently
reconstructed here. No citation is used in place of the missing proof.
[F1, F2]

## Escalation

The missing supplier is the complete relative coherent $\mathcal D_0$-module
classification in the converse of step 2.1, including the explicit
induced-Verma map, proof that its quotient is exactly
$\mathcal O_{\mathbb P^1}(-1)$, and compatibility with arbitrary affine base
change. This blocks the equivalence in (2) and the dependent general
singular-parabolic filtration theorem
[[thm-pa36-singular-parabolic-kernel-filtration]]. The higher-direct-image
vanishing and the implication from the displayed pullback form to
$p_{\alpha*}M=0$ are proved in step 1.1. The SL2 kernel example itself is
independently verified in
[[cex-pa36-singular-localization-and-parabolic-kernel]].
