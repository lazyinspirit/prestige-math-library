---
id: lem-projective-normal-surface-grauert-riemenschneider-vanishing
kind: lemma
title: "Grauert\u2013Riemenschneider vanishing for the required normal surface modifications"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 9
deps: [
          def-axiom-of-choice, def-dependent-choice,
                    def-normal-surface-modification-and-normalized-point-blowup,
                    lem-local-normal-surface-modification-dimension-and-projective-cohomology,
                    lem-normal-surface-modification-no-derived-residue-map,
                    lem-normal-projective-surface-dualizing-module-over-regular-local-base,
                    lem-finite-length-duality-over-a-regular-local-base,
                    lem-finite-regular-base-algebra-dualizing-biduality, thm-proper-pushforward-coherent,
                    lem-finite-over-projective-noetherian-affine-base-is-projective]
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
---

## Statement

Assume AC and DC. Let $R$ be regular Noetherian local of dimension two, $A$ a finite normal local $R$-domain of dimension two with $R\hookrightarrow A$ local, and $X\to\operatorname{Spec}A$ a projective normal modification, in the permitted finite-type/completion class. For its normalized dualizing module $\omega_X$ over $\omega_A=\operatorname{Hom}_R(A,R)$, $H^1(X,\omega_X)=0$.

## Facts & Assumptions

**Given:** A regular Noetherian local ring $R$ of dimension two, a finite normal local $R$-domain $A$ of dimension two with $R\hookrightarrow A$ local, a projective normal modification $X\to\operatorname{Spec}A$ in the permitted class, and $\omega_A=\operatorname{Hom}_R(A,R)$ with normalized dualizing module $\omega_X$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-normal-surface-modification-and-normalized-point-blowup.* **Normal schemes.** A locally Noetherian scheme is *normal* if every local ring $\mathcal O_{X,x}$ is an integrally closed domain (def-normal-noetherian-ring). This is a local condition on the local rings and is checked on an affine open cover; it does not require the global section ring to be a domain. The empty scheme is normal vacuously. ([[def-normal-surface-modification-and-normalized-point-blowup]])

[F4] *lem-local-normal-surface-modification-dimension-and-projective-cohomology.* Assume AC and DC. Let $(A,\mathfrak m)$ be a normal Noetherian local domain of dimension two and $f:X\to\operatorname{Spec}A$ an integral modification. Then $X$ has dimension two, all closed points have local dimension two, $f$ is an isomorphism off the closed point, $f_*\mathcal O_X=\mathcal O_{\operatorname{Spec}A}$, and its special fibre has dimension at most one. ([[lem-local-normal-surface-modification-dimension-and-projective-cohomology]])

[F5] *lem-normal-surface-modification-no-derived-residue-map.* Assume AC and DC. For $A,X$ as in the preceding injection lemma, with residue field $\kappa$, $\operatorname{Hom}_{D(A)}(\kappa[-1],R\Gamma(X,\mathcal O_X))=0$. ([[lem-normal-surface-modification-no-derived-residue-map]])

[F6] *lem-normal-projective-surface-dualizing-module-over-regular-local-base.* Assume AC and DC. Let $R$ be a regular Noetherian local ring of dimension two, let $A$ be a finite normal local $R$-domain of dimension two, with $R\hookrightarrow A$ local, and let $X$ be a normal integral scheme of dimension two projective over $R$, with a proper birational map $f:X\to\operatorname{Spec}A$. Put $\omega_A=\operatorname{Hom}_R(A,R)$. ([[lem-normal-projective-surface-dualizing-module-over-regular-local-base]])

[F7] *lem-finite-length-duality-over-a-regular-local-base.* Assume AC and DC. Let $(R,\mathfrak m)$ be regular Noetherian local of dimension $d$ and let $(B,\mathfrak n)$ be a module-finite local $R$-algebra with the map local. For finite-length $B$-modules put $T(M)=\operatorname{Ext}_R^d(M,R)$ with its natural $B$-action. ([[lem-finite-length-duality-over-a-regular-local-base]])

[F8] *lem-finite-regular-base-algebra-dualizing-biduality.* Assume AC and DC. Let $R$ be a regular Noetherian ring of finite dimension $d$, and let $B\ne0$ be a module-finite $R$-algebra. For any integer $s$, $D_B=R\operatorname{Hom}_R(B,R[s])$ is a dualizing complex over $B$. ([[lem-finite-regular-base-algebra-dualizing-biduality]])

[F9] *thm-proper-pushforward-coherent.* Assume the Axiom of Choice and the Axiom of Dependent Choice, inherited from the affine localization theorem, the Čech comparison and the dévissage lemma cited below ([[def-axiom-of-choice]], [[def-dependent-choice]]). ([[thm-proper-pushforward-coherent]])

[F10] Finite schemes over a projective scheme with Noetherian affine base are projective, and finite compositions of these projective morphisms are projective. ([[lem-finite-over-projective-noetherian-affine-base-is-projective]])

## Proof

1.1 The finite map $\operatorname{Spec}A\to\operatorname{Spec}R$ is projective by [F10], applied with $\operatorname{Spec}R=\mathbb P_R^0$. Composing with the projective map $X\to\operatorname{Spec}A$ makes $X$ projective over $R$, so [F6] applies to the specified injective local regular base and two-dimensional $A$. The dimension and cohomology helper gives that $X$ has no cohomology of the dualizing module above degree one, and proper coherence together with the isomorphism off the closed point makes $H^1(X,\omega_X)$ a finite-length $A$-module. [F3, F4, F6, F9, F10, given]

2.1 If that module were nonzero, Nakayama and a residue-field functional would give a nonzero map $\alpha\colon R\Gamma(X,\omega_X[2])\to\kappa[1]$. [F4, step 1.1]

3.1 Finite-base coherent biduality makes derived dualization with $D_A=\omega_A[2]$ faithful on bounded finite complexes; finite-length duality takes the simple residue module to a simple module with the same annihilator, hence to $\kappa$ up to isomorphism, and projective surface duality with homothety identifies the dual of $R\Gamma(X,\omega_X[2])$ with $R\Gamma(X,\mathcal O_X)$. [F6, F7, F8, step 2.1]

4.1 The dual of $\alpha$ is therefore a nonzero map $\kappa[-1]\to R\Gamma(X,\mathcal O_X)$, contradicting the derived-residue-map lemma; hence $H^1(X,\omega_X)=0$, with every duality arrow the actual evaluation and trace pairing over the regular subring. The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, F5, step 3.1] ∎

## Remarks

- The proof is a duality argument: a nonzero H1 would dualize to a forbidden derived map from the residue module into structure cohomology.
- No general proper duality theorem is cited in place of its proof.
