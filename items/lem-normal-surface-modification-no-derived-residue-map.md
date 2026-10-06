---
id: lem-normal-surface-modification-no-derived-residue-map
kind: lemma
title: "No derived residue map into structure cohomology of a normal surface modification"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 8
deps: [
          def-axiom-of-choice, def-dependent-choice,
                    def-normal-surface-modification-and-normalized-point-blowup,
                    lem-local-normal-surface-modification-dimension-and-projective-cohomology,
                    lem-projective-normal-surface-modification-h1-injects-off-special-fibre,
                    lem-r-one-s-two-intersection-of-height-one-localisations, lem-normal-domain-implies-s-two,
                    thm-completion-of-a-noetherian-local-ring]
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

Assume AC and DC. For $A,X$ as in the preceding injection lemma, with residue field $\kappa$, $\operatorname{Hom}_{D(A)}(\kappa[-1],R\Gamma(X,\mathcal O_X))=0$.

## Facts & Assumptions

**Given:** A normal two-dimensional Noetherian local domain $A$ essentially of finite type over a field or complete equicharacteristic local base with residue field $\kappa$, and a projective normal modification $X\to\operatorname{Spec}A$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-normal-surface-modification-and-normalized-point-blowup.* **Normal schemes.** A locally Noetherian scheme is *normal* if every local ring $\mathcal O_{X,x}$ is an integrally closed domain (def-normal-noetherian-ring). This is a local condition on the local rings and is checked on an affine open cover; it does not require the global section ring to be a domain. The empty scheme is normal vacuously. ([[def-normal-surface-modification-and-normalized-point-blowup]])

[F4] *lem-local-normal-surface-modification-dimension-and-projective-cohomology.* Assume AC and DC. Let $(A,\mathfrak m)$ be a normal Noetherian local domain of dimension two and $f:X\to\operatorname{Spec}A$ an integral modification. Then $X$ has dimension two, all closed points have local dimension two, $f$ is an isomorphism off the closed point, $f_*\mathcal O_X=\mathcal O_{\operatorname{Spec}A}$, and its special fibre has dimension at most one. ([[lem-local-normal-surface-modification-dimension-and-projective-cohomology]])

[F5] *lem-projective-normal-surface-modification-h1-injects-off-special-fibre.* Assume AC and DC. Let $A$ be a normal two-dimensional Noetherian local domain essentially of finite type over a field or complete equicharacteristic local base, and let $X\to\operatorname{Spec}A$ be a projective normal modification. If $U$ is the inverse image of the punctured spectrum, $H^1(X,\mathcal O_X)\to H^1(U,\mathcal O_U)$ is injective. ([[lem-projective-normal-surface-modification-h1-injects-off-special-fibre]])

[F6] *lem-r-one-s-two-intersection-of-height-one-localisations.* Assume the Axiom of Choice. If $R$ is a commutative Noetherian domain satisfying $(S_2)$, then inside its fraction field $K$ one has $R=\bigcap_{\operatorname{ht}\mathfrak p=1}R_{\mathfrak p}$. For a field the empty intersection is interpreted as $K=R$. ([[lem-r-one-s-two-intersection-of-height-one-localisations]])

[F7] *lem-normal-domain-implies-s-two.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every commutative Noetherian integrally closed domain satisfies $(S_2)$. ([[lem-normal-domain-implies-s-two]])

[F8] *thm-completion-of-a-noetherian-local-ring.* Assume the Axiom of Choice. Let $(R,\mathfrak m)$ be a Noetherian local ring, and let $\widehat R$ be its $\mathfrak m$-adic completion. 1. $\widehat R$ is a Noetherian local ring with maximal ideal $\mathfrak m\widehat R$. 2. The residue field is unchanged: $ \widehat R/\mathfrak m\widehat R \cong R/\mathfrak m. $ 3. The completion map $R \to \widehat R$ is faithfully flat. ([[thm-completion-of-a-noetherian-local-ring]])

## Proof

1.1 Let $P$ be a degreewise finite free resolution of $\kappa$ over $A$; sheafifying and applying global-section Hom adjunction termwise against a bounded-below injective resolution of $\mathcal O_X$ identifies the asserted group with $\operatorname{Hom}_{D(X)}(K,\mathcal O_X)$, where $K=Lf^*\kappa[-1]$. Here $H^i(K)=0$ for $i>1$, $H^1(K)=\mathcal O_{X_s}$, and $H^0(K)=\operatorname{Tor}^A_1(\mathcal O_X,\kappa)$ is annihilated by $\mathfrak m$; higher Tor sheaves may occur in negative degrees. [F4, given]

2.1 The negative truncation $\tau_{\le-1}K$ and its shift by $1$ have no maps to $\mathcal O_X$ by the derived-category degree bounds. Thus the truncation triangle identifies $\operatorname{Hom}(K,\mathcal O_X)$ with $\operatorname{Hom}(\tau_{\ge0}K,\mathcal O_X)$. The sheaf $H^0(K)$ has no maps to $\mathcal O_X$: a nonzero element of $\mathfrak m$ annihilates it and is regular on the integral $X$. Also $\operatorname{Hom}(H^0(K)[1],\mathcal O_X)=0$. The remaining truncation triangle therefore identifies the group with $\operatorname{Ext}^1_X(\mathcal O_{X_s},\mathcal O_X)$. Regard a class as an extension $0\to\mathcal O_X\to E\to\mathcal O_{X_s}\to0$. [F4, step 1.1]

3.1 Pulling the extension back along $\mathcal O_X\twoheadrightarrow\mathcal O_{X_s}$ gives an extension of $\mathcal O_X$ by itself which is split off the special fibre; the preceding injection lemma forces it to split globally, so the element $1$ of $\mathcal O_{X_s}$ lifts to a global section $s$ of $E$. [F5, step 2.1]

4.1 Multiplying $s$ by the fibre ideal $I$ gives a map $I\to\mathcal O_X$; since global structure functions are $A$ and global fibre-ideal functions are its maximal ideal, this induces $\mathfrak m\to A$, which is multiplication by an element of the fraction field lying in every height-one localization and hence in $A$ by the $S_2$ intersection property. Subtracting that element makes the lift annihilated by $I$, producing a splitting $\mathcal O_{X_s}\to E$ of the original extension. [F6, F7, step 3.1]

5.1 Hence every class in the group is zero, giving $\operatorname{Hom}_{D(A)}(\kappa[-1],R\Gamma(X,\mathcal O_X))=0$; the extension correspondence used is the usual injective-resolution description, which needs only enough injectives, not projective module sheaves. The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, F3, F8, step 4.1] ∎

## Remarks

- The geometric input is the splitting off the special fibre supplied by the H1-injection lemma.
- The normalization of the trace uses S2 intersection, which is where normality of A enters.
