---
id: lem-normal-surface-fibre-divisor-conormal-degree-positive
kind: lemma
title: "Positive conormal degree for a fibre divisor on a normal surface"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
deps: [
          def-axiom-of-choice, def-dependent-choice,
                    def-normal-surface-modification-and-normalized-point-blowup,
                    lem-local-normal-surface-modification-dimension-and-projective-cohomology,
                    lem-normal-domain-implies-s-two, cor-regular-quotient-cohen-macaulay-equivalence,
                    cor-cohen-macaulay-modules-have-no-embedded-associated-primes,
                    thm-one-dimensional-regular-local-rings-are-dvrs, lem-normal-domain-implies-r-one,
                    lem-nonzero-section-vanishing-at-a-point-has-positive-degree, cor-degree-additive-proper-curve]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Lemmas 54.7.3\u20138 (complete proofs read; normal-surface arguments reconstructed)"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. Let $A$ be a normal Noetherian local domain of dimension two and $f:X\to\operatorname{Spec}A$ a normal integral modification. For any nonempty effective Cartier divisor $Z$ supported in the special fibre, some integral component $C$ of $Z$ satisfies $\deg_C(\mathcal O_X(-Z)|_C)>0$. In particular its conormal bundle is not trivial.

## Facts & Assumptions

**Given:** A normal Noetherian local domain $A$ of dimension two, a normal integral modification $f\colon X\to\operatorname{Spec}A$, and a nonempty effective Cartier divisor $Z$ supported in the special fibre.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-normal-surface-modification-and-normalized-point-blowup.* **Normal schemes.** A locally Noetherian scheme is *normal* if every local ring $\mathcal O_{X,x}$ is an integrally closed domain (def-normal-noetherian-ring). This is a local condition on the local rings and is checked on an affine open cover; it does not require the global section ring to be a domain. The empty scheme is normal vacuously. ([[def-normal-surface-modification-and-normalized-point-blowup]])

[F4] *lem-local-normal-surface-modification-dimension-and-projective-cohomology.* Assume AC and DC. Let $(A,\mathfrak m)$ be a normal Noetherian local domain of dimension two and $f:X\to\operatorname{Spec}A$ an integral modification. Then $X$ has dimension two, all closed points have local dimension two, $f$ is an isomorphism off the closed point, $f_*\mathcal O_X=\mathcal O_{\operatorname{Spec}A}$, and its special fibre has dimension at most one. ([[lem-local-normal-surface-modification-dimension-and-projective-cohomology]])

[F5] *lem-normal-domain-implies-s-two.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every commutative Noetherian integrally closed domain satisfies $(S_2)$. ([[lem-normal-domain-implies-s-two]])

[F6] *cor-regular-quotient-cohen-macaulay-equivalence.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Under the hypotheses of `lem-regular-quotient-preserves-depth-dimension-gap`, $M$ is Cohen--Macaulay if and only if $M/xM$ is Cohen--Macaulay. ([[cor-regular-quotient-cohen-macaulay-equivalence]])

[F7] *cor-cohen-macaulay-modules-have-no-embedded-associated-primes.* Under the hypotheses of `lem-associated-primes-of-cohen-macaulay-module-have-full-dimension`, every associated prime of $M$ is minimal in $\operatorname{Supp}_R(M)$. Thus $M$ has no embedded associated primes. ([[cor-cohen-macaulay-modules-have-no-embedded-associated-primes]])

[F8] *thm-one-dimensional-regular-local-rings-are-dvrs.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). A nonzero Noetherian local ring of dimension one is regular if and only if it is a discrete valuation ring. Fields are excluded from the term DVR. ([[thm-one-dimensional-regular-local-rings-are-dvrs]])

[F9] *lem-normal-domain-implies-r-one.* Every commutative Noetherian integrally closed domain satisfies $(R_1)$. ([[lem-normal-domain-implies-r-one]])

[F10] *lem-nonzero-section-vanishing-at-a-point-has-positive-degree.* Assume the Axiom of Choice. Let $k$ be a field, let $C$ be an integral proper $k$-scheme of dimension one and let $\mathcal L$ be an invertible $\mathcal O_C$-module with a nonzero global section $s\in\Gamma(C,\mathcal L)$. If $s$ vanishes at some closed point of $C$, then $\deg_C(\mathcal L)>0$ for the degree of def-degree-invertible-sheaf-proper-dimension-one. ([[lem-nonzero-section-vanishing-at-a-point-has-positive-degree]])

[F11] *cor-degree-additive-proper-curve.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field and let $C$ be a proper $k$-scheme (def-proper-morphism) whose underlying topological space has dimension at most one (def-dimension-noetherian-topological-space). For all invertible $\mathcal O_C$-modules $\mathcal L$ and $\mathcal M$ (def-invertible-sheaf): 1. ([[cor-degree-additive-proper-curve]])

## Proof

1.1 Write the one-dimensional fibre components as $C_j$ and choose closed points $x_j$ on $C_j$ lying on no other component; these exist because each is a proper finite-type curve over the residue field of $A$. [F3, F4, given]

2.1 Choose $g_j\in\mathfrak m_{X,x_j}$ with nonzero image in $\mathcal O_{C_j,x_j}$; in the common function field write $g_j=a_j/b_j$ with $a_j,b_j\in A$ and put $u=\prod_ja_j$. Each $a_j$ lies in the maximal ideal, since otherwise $g_jb_j=a_j$ would make $g_j$ a unit; hence $u$ has positive orders $e_j$ at the generic discrete valuation rings of the fibre curves and factors as $u=g_jh_j$ near $x_j$. [F3, F8, F9, step 1.1]

3.1 Write $d_j=v_{C_j}(Z)$, choose $i$ maximizing $d_i/e_i$, and rescale $u\mapsto u^{d_i}$, $Z\mapsto e_iZ$; then $v_{C_j}(u)\ge v_{C_j}(Z)$ for every $j$ with equality at $i$. [F8, step 2.1]

4.1 Normal surface local rings are Cohen--Macaulay, and their effective Cartier quotients are Cohen--Macaulay because a nonzerodivisor extends to a parameter tuple by the support-dimension argument; such quotients therefore have no embedded associated points. The section $u$ vanishes at the generic point of every component of $Z$, hence at every associated point, so $u$ is zero in $\mathcal O_Z$ and belongs to the Cartier ideal $I=\mathcal O_X(-Z)$; its restriction to $C_i$ is nonzero at the generic point by equality of orders at $i$. [F5, F6, F7, step 3.1]

5.1 Near $x_i$ only the component $C_i$ occurs in $Z$, and the factor $g_i$ (raised to the rescaling power) is nonzero at the unique associated generic point of $\mathcal O_Z$ there, so it is a nonzerodivisor on $\mathcal O_Z$; if $I=(t)$, then $g_ih_i\in(t)$ implies $h_i\in(t)$, whence the section coefficient $u/t=g_i(h_i/t)$ vanishes at $x_i$. [F6, F7, step 4.1]

6.1 The proper integral-curve section criterion applied to the nonzero section $u/t$ of $I|_{C_i}$ vanishing at the closed point $x_i$ gives positive degree for the rescaled conormal bundle, and additivity of degree under tensor powers divides out the positive rescaling factor, giving $\deg_{C_i}(\mathcal O_X(-Z)|_{C_i})>0$; the Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, F10, F11, step 5.1] ∎

## Remarks

- This is the normal-surface version of the regular-surface conormal computation; the Cohen-Macaulay quotient property replaces the use of regularity of the ambient ring.
- The rescaling step is what allows the section to vanish at all components while staying nonzero on the chosen one.
