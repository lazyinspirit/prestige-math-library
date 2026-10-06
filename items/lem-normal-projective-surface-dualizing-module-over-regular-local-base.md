---
id: lem-normal-projective-surface-dualizing-module-over-regular-local-base
kind: lemma
title: "Dualizing modules and trace pairing for normal projective surface modifications"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
deps: [
          def-axiom-of-choice, def-dependent-choice,
                    def-normal-surface-modification-and-normalized-point-blowup,
                    lem-cm-local-codimension-and-regular-quotient-ext-concentration,
                    lem-projective-regular-local-base-coherent-duality-by-embedding,
                    lem-finite-regular-base-algebra-dualizing-biduality,
                    lem-finite-closed-immersion-derived-coinduction-adjunction, lem-normal-domain-implies-s-two,
                    cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module,
                    thm-auslander-buchsbaum-formula, thm-quotient-and-lifting-regularity-across-a-regular-element,
                    thm-localisation-and-polynomial-extension-of-regular-rings,
                    cor-field-finite-type-over-a-field-is-a-finite-extension,
                    cor-dimension-of-a-finite-polynomial-ring-over-a-field]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, 54.7.7\u20138 and 54.8.8: dualizing module and relative duality support"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. Let $R$ be a regular Noetherian local ring of dimension two, let $A$ be a finite normal local $R$-domain of dimension two, with $R\hookrightarrow A$ local, and let $X$ be a normal integral scheme of dimension two projective over $R$, with a proper birational map $f:X\to\operatorname{Spec}A$. Put $\omega_A=\operatorname{Hom}_R(A,R)$. The regular-base projective dualizing complex is canonically $D_X=\omega_X[2]$ with $\omega_X$ a coherent CM torsion-free module of generic rank one, and $D_A=\omega_A[2]$. Evaluation gives $R\Gamma(X,\omega_X)\cong R\operatorname{Hom}_A(R\Gamma(X,\mathcal O_X),\omega_A)$. Its trace to $\omega_A$ is the dual of $A\to R\Gamma(X,\mathcal O_X)$; these are pairings of complexes with their natural $A$-actions.

## Facts & Assumptions

**Given:** A regular Noetherian local ring $R$ of dimension two, a finite normal local $R$-domain $A$ of dimension two with $R\hookrightarrow A$ local, and a normal integral surface $X$ projective over $R$ with a proper birational map $f\colon X\to\operatorname{Spec}A$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-normal-surface-modification-and-normalized-point-blowup.* **Normal schemes.** A locally Noetherian scheme is *normal* if every local ring $\mathcal O_{X,x}$ is an integrally closed domain (def-normal-noetherian-ring). This is a local condition on the local rings and is checked on an affine open cover; it does not require the global section ring to be a domain. The empty scheme is normal vacuously. (def-normal-surface-modification-and-normalized-point-blowup)

[F4] *lem-cm-local-codimension-and-regular-quotient-ext-concentration.* Assume the Axiom of Choice and the Axiom of Dependent Choice, inherited from the resolution and Ext suppliers below ([[def-axiom-of-choice]], [[def-dependent-choice]]). Let $(R,\mathfrak m)$ be a Noetherian Cohen--Macaulay local ring of dimension $D$. ([[lem-cm-local-codimension-and-regular-quotient-ext-concentration]])

[F5] *lem-projective-regular-local-base-coherent-duality-by-embedding.* Assume AC and DC. Let $R$ be regular Noetherian local of dimension $d$, let $X$ be projective over $R$, and fix $i:X\hookrightarrow P=\mathbb P^N_R$. Put $D_X=i^!(\mathcal O_P(-N-1)[N+d])$. Then $D_X$ is a dualizing complex on $X$, with coherent biduality. ([[lem-projective-regular-local-base-coherent-duality-by-embedding]])

[F6] *lem-finite-regular-base-algebra-dualizing-biduality.* Assume AC and DC. Let $R$ be a regular Noetherian ring of finite dimension $d$, and let $B\ne0$ be a module-finite $R$-algebra. For any integer $s$, $D_B=R\operatorname{Hom}_R(B,R[s])$ is a dualizing complex over $B$. ([[lem-finite-regular-base-algebra-dualizing-biduality]])

[F7] *lem-finite-closed-immersion-derived-coinduction-adjunction.* Assume AC. For a finite homomorphism $A\to B$ of Noetherian rings and $G\in D^+(A)$, the complex $f^!G=R\operatorname{Hom}_A(B,G)$ has its natural $B$-action and is right adjoint to restriction of scalars. ([[lem-finite-closed-immersion-derived-coinduction-adjunction]])

[F8] *lem-normal-domain-implies-s-two.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every commutative Noetherian integrally closed domain satisfies $(S_2)$. ([[lem-normal-domain-implies-s-two]])

[F9] *cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every system of parameters of a nonzero finite Cohen--Macaulay module over a Noetherian local ring is a regular sequence on that module. ([[cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module]])

[F10] *thm-auslander-buchsbaum-formula.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). For a nonzero finite module $M$ of finite projective dimension over a nonzero Noetherian local ring $R$, $\operatorname{pd}_RM+\operatorname{depth}_RM=\operatorname{depth}R$. Consequently such an $M$ with $\operatorname{depth}M=\operatorname{depth}R$ is free. ([[thm-auslander-buchsbaum-formula]])

[F11] *thm-quotient-and-lifting-regularity-across-a-regular-element.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(R,\mathfrak m)$ be nonzero Noetherian local. If $x\in\mathfrak m$ is a nonzerodivisor and $R/(x)$ is regular, then $R$ is regular and $x\notin\mathfrak m^2$. For every nonzerodivisor $x\in\mathfrak m$, $\dim(R/(x))=\dim R-1$. ([[thm-quotient-and-lifting-regularity-across-a-regular-element]])

[F12] *thm-localisation-and-polynomial-extension-of-regular-rings.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Localizations and finite polynomial extensions of a commutative regular Noetherian ring are regular. Regularity can equivalently be tested at maximal ideals. For every nonzero such ring, $\operatorname{gldim}R=\dim R$, allowing infinity. ([[thm-localisation-and-polynomial-extension-of-regular-rings]])

[F13] *cor-field-finite-type-over-a-field-is-a-finite-extension.* Let $k\subseteq K$ be a field extension. If $K$ is finitely generated as a $k$-algebra, then $K$ is a finite field extension of $k$. ([[cor-field-finite-type-over-a-field-is-a-finite-extension]])

[F14] *cor-dimension-of-a-finite-polynomial-ring-over-a-field.* Let $k$ be a field and let $n\ge0$. Then $ \dim k[x_1,\ldots,x_n]=n. $ ([[cor-dimension-of-a-finite-polynomial-ring-over-a-field]])

## Proof

1.1 The $S_2$ condition of normality makes all local rings of $A$ and of $X$ Cohen--Macaulay, since their dimensions are at most two; a regular parameter pair of $R$ generates an ideal primary to the maximal ideal of the finite local algebra $A$, hence is a system of parameters there and is $A$-regular, so $\operatorname{depth}_RA=2$ and Auslander--Buchsbaum makes $A$ finite free over $R$. [F8, F9, F10, given]

2.1 By the finite-base biduality lemma the dualizing complex of $A$ over $R$ is $\operatorname{Hom}_R(A,R)[2]=\omega_A[2]$; fixing a projective embedding of $X$ and applying the projective coherent duality over $R$, Ext concentration at a closed point makes the dualizing complex of $X$ equal to $\omega_X[2]$ with $\omega_X$ a coherent module concentrated in degree minus two. [F4, F5, F6, F11, F12, step 1.1]

3.1 At a closed point of $X$ the ambient polynomial local ring has dimension $N+2$ and the prime defining the chart of $X$ has height $N$, by the dimension and residue-field computations; the codimension formula then gives local dimension two on $X$, and every point of the proper Noetherian scheme specializes to a closed point, so the cohomology of the dualizing complex vanishes outside degree minus two globally. [F4, F13, F14, step 2.1]

4.1 The same Ext argument shows that $\omega_X$ is Cohen--Macaulay with full support; the full-dimension associated-prime property on its local Cohen--Macaulay stalks makes it torsion-free on the normal integral surface, and at the generic point homothety identifies its endomorphisms with the function field, so its generic vector space has rank one. [F4, F8, step 3.1]

5.1 Applying the projective regular-base complex duality to $K=\mathcal O_X$, then finite-ring coinduction and cancellation of the common shift two, gives the displayed quasi-isomorphism $R\Gamma(X,\omega_X)\cong R\operatorname{Hom}_A(R\Gamma(X,\mathcal O_X),\omega_A)$; all arrows are evaluation and coinduction pairings, so the trace is exactly dual to the unit of structure-sheaf cohomology and is $A$-linear. The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, F5, F7, step 4.1] ∎

## Remarks

- The concentration of the dualizing complex into a single coherent Cohen-Macaulay module uses the two-dimensionality of the modification and may fail in higher dimensions.
- No smoothness of X and no perfectness of the residue field is assumed; the ground ring is only regular local.
