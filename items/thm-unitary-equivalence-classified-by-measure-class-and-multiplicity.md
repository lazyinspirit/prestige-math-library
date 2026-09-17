---
id: thm-unitary-equivalence-classified-by-measure-class-and-multiplicity
kind: theorem
title: Unitary equivalence classified by measure class and multiplicity
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-spectral-multiplicity-function-in-the-separable-case, lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension, thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem, thm-cyclic-spectral-representation, thm-integration-against-a-radon-nikodym-derivative, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, def-spectrum-and-resolvent-of-a-bounded-operator, def-separable-space, def-hilbert-space, def-self-adjoint-positive-unitary-and-normal-operator, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John B. Conway, A Course in Functional Analysis, 2nd ed., Theorems 10.20 and 10.21, printed pp.299–301"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2017_09_30%2112_00_39_PM.pdf"
    - title: "Andreas Kriegl, Funktionalanalysis, Theorem 8.64 and Proposition 8.66, printed pp.198–200"
      url: "https://www.mat.univie.ac.at/~kriegl/Skripten/2019SSe.pdf"
---

## Statement

Assume AC. Let $T$ be a bounded normal operator on a nonzero separable complex
Hilbert space $H$ and let $T'$ be a bounded normal operator on a nonzero
separable complex Hilbert space $H'$, with multiplicity data $(\mu,m)$ and
$(\nu,m')$ obtained from countable cyclic decompositions as in
[[def-spectral-multiplicity-function-in-the-separable-case]]. Then $T$ and
$T'$ are **unitarily equivalent** — there is a unitary $V:H\to H'$ with
$VTV^*=T'$ — if and only if

1. $\sigma(T)=\sigma(T')$ as subsets of $\mathbb C$, and on this common compact
   set the scalar measures are in the same class, $[\mu]=[\nu]$ (mutual absolute
   continuity);
2. the multiplicity functions agree almost everywhere for that class,
   $m=m'$ $\mu$-almost everywhere, equivalently $\nu$-almost everywhere.

No change of spectral coordinate is allowed: the identification of the two
scalar measure classes is an equality of measures on the common set
$\sigma(T)=\sigma(T')$, not an identification after a homeomorphism of spectra.
The zero Hilbert space is a separate trivial class: it carries the zero
operator, whose spectrum is empty, and no regular projection valued measure on
the empty set is used anywhere above.

## Facts & Assumptions

[A1] The multiplicity data $(\mu,m)$ live on $\sigma(T)$, with $\mu$ a nonzero finite positive regular Borel measure and $m\ge1$ $\mu$-almost everywhere; the standard model $L^2(\mu,m)$ is unitarily equivalent to $\bigoplus_jL^2(\sigma(T),\mu_j)$ for the cyclic decomposition with scalar measures $\mu_j=E_{x_j}$ and the identification intertwines the multiplications on both sides ([[def-spectral-multiplicity-function-in-the-separable-case]]).

[A2] $T$ is unitarily equivalent to multiplication by the coordinate on the orthogonal sum of the cyclic summands, hence, via $[\mathrm{A1}]$, to $M_z$ on $L^2(\mu,m)$ ([[thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem]], [[thm-cyclic-spectral-representation]], [[def-spectral-multiplicity-function-in-the-separable-case]]).

[A3] If $\lambda$ is any finite positive measure equivalent to $\mu$ that dominates all $\mu_j$, the same construction applies with $\lambda$ in place of $\mu$ and produces a model canonically unitarily equivalent to $L^2(\mu,m)$: the Radon–Nikodym ratio $d\mu/d\lambda$ is positive $\lambda$-almost everywhere and multiplication by its square root is a unitary intertwining all multiplications ([[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]], [[thm-integration-against-a-radon-nikodym-derivative]], [[def-spectral-multiplicity-function-in-the-separable-case]]).

[A4] A unitary intertwiner between two standard models preserves the class of the dominating measure and the multiplicity function almost everywhere ([[lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension]]).

[A5] Unitary equivalence preserves the spectrum: $\lambda\notin\sigma(T)$ exactly when $\lambda I-T$ is bijective with bounded inverse, and conjugating by a unitary carries this property to $T'$; more generally conjugating by a unitary is an isometric isomorphism of $\mathcal B(H)$ onto $\mathcal B(H')$ ([[def-spectrum-and-resolvent-of-a-bounded-operator]], [[def-self-adjoint-positive-unitary-and-normal-operator]], [[def-hilbert-space]]).

[A6] AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Bounded normal operators $T,T'$ on nonzero separable complex Hilbert spaces with multiplicity data $(\mu,m)$ on $\sigma(T)$ and $(\nu,m')$ on $\sigma(T')$.

1.1 Unitary invariance of the spectrum: if $V:H\to H'$ is unitary with $VTV^*=T'$, then for every $\lambda$ the operator $\lambda I-T$ is bijective with bounded inverse exactly when $\lambda I-T'=V(\lambda I-T)V^*$ is, so $\rho(T)=\rho(T')$ and $\sigma(T)=\sigma(T')$; in particular the two spectra are compared on a common compact subset of $\mathbb C$. [A5]

1.2 Direct implication: suppose $VTV^*=T'$. By the definitional identification, $T$ is unitarily equivalent to $M_z$ on $L^2(\mu,m)$ and $T'$ to $M_z$ on $L^2(\nu,m')$; composing these equivalences with $V$ gives a unitary $U:L^2(\mu,m)\to L^2(\nu,m')$ with $UM_z=M_zU$. [A1, A2, A4]

1.3 Converse: suppose $\sigma(T)=\sigma(T')=:\Lambda$, $[\mu]=[\nu]$ and $m=m'$ $\mu$-almost everywhere, and put $\lambda:=\mu$. Then $\nu\sim\lambda$ and, by clause (2), $m=m'$ $\lambda$-almost everywhere, so the standard models $L^2(\lambda,m)$ and $L^2(\lambda,m')$ are the same space with the same multiplication operators: the level sets $A_r=\{m\ge r\}$ and $A'_r=\{m'\ge r\}$ differ by $\lambda$-null sets, so each $L^2(\lambda|_{A_r})$ equals $L^2(\lambda|_{A'_r})$ as a subspace of $L^2(\lambda)$. [A1, A3]

2.1 Hence $[\mu]=[\nu]$ and $m=m'$ almost everywhere for that class by the intertwiner lemma, which proves the "only if" implication together with $\sigma(T)=\sigma(T')$. [step 1.1, step 1.2, A4]

2.2 The model of $T'$ with dominating measure $\nu$ is canonically unitarily equivalent to the model with dominating measure $\lambda$; hence $T$ and $T'$ are both unitarily equivalent to $M_z$ on $L^2(\lambda,m)$, and composing one equivalence with the inverse of the other gives a unitary $H\to H'$ conjugating $T$ to $T'$. [step 1.3, A1, A2, A3]

3.1 Therefore $T$ and $T'$ are unitarily equivalent exactly when the spectra agree and, on the common spectrum, the scalar measure classes agree and the multiplicity functions agree almost everywhere; the zero space is the excluded trivial case carrying the zero operator and no PVM. [step 2.1, step 2.2, A6] ∎
