---
id: lem-regular-base-surface-cartier-curve-canonical-adjunction
kind: lemma
title: "Canonical adjunction for a Cartier fibre curve"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 11
deps: [
          def-axiom-of-choice, def-dependent-choice, def-serre-r-k-and-s-k-conditions,
                    cor-serre-normality-criterion-two-directions,
                    lem-finite-closed-immersion-derived-coinduction-adjunction,
                    lem-finite-length-duality-over-a-regular-local-base,
                    lem-normal-projective-surface-dualizing-module-over-regular-local-base,
                    lem-regular-base-dualizing-traces-compose-on-rational-modifications,
                    thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Sections 54.8\u201354.9: complete source arguments with local prerequisite replacements"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. For a normal projective surface modification $X$ over a finite normal local domain $A$ of a regular two-dimensional local ring $R$, let $E$ be a Cartier closed fibre with residue field $\kappa$ and conormal $L=O_X(-E)|_E$. Then $\omega_E=\omega_X|_E\otimes L^{-1}$ is a projective-curve canonical module, up to the harmless one-dimensional residue-field normalization. At a regular point of $X$ the surface canonical module is invertible.

## Facts & Assumptions

**Given:** A regular Noetherian local ring $R$ of dimension two, a finite normal local $R$-domain $A$, a normal projective modification $X$ over $A$, a Cartier closed fibre $E\subseteq X$ with residue field $\kappa$ and conormal $L=\mathcal O_X(-E)|_E$, and the regular-base dualizing module $\omega_X$ of $X$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *lem-normal-projective-surface-dualizing-module-over-regular-local-base.* Assume AC and DC. Let $R$ be a regular Noetherian local ring of dimension two, let $A$ be a finite normal local $R$-domain of dimension two, with $R\hookrightarrow A$ local, and let $X$ be a normal integral scheme of dimension two projective over $R$, with a proper birational map $f:X\to\operatorname{Spec}A$. Put $\omega_A=\operatorname{Hom}_R(A,R)$. ([[lem-normal-projective-surface-dualizing-module-over-regular-local-base]])

[F4] *lem-finite-closed-immersion-derived-coinduction-adjunction.* Assume AC. For a finite homomorphism $A\to B$ of Noetherian rings and $G\in D^+(A)$, the complex $f^!G=R\operatorname{Hom}_A(B,G)$ has its natural $B$-action and is right adjoint to restriction of scalars. ([[lem-finite-closed-immersion-derived-coinduction-adjunction]])

[F5] *lem-finite-length-duality-over-a-regular-local-base.* Assume AC and DC. Let $(R,\mathfrak m)$ be regular Noetherian local of dimension $d$ and let $(B,\mathfrak n)$ be a module-finite local $R$-algebra with the map local. For finite-length $B$-modules put $T(M)=\operatorname{Ext}_R^d(M,R)$ with its natural $B$-action. ([[lem-finite-length-duality-over-a-regular-local-base]])

[F6] *thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme.* Assume AC. Let $k$ be a field and let $X$ be a projective, pure $d$-dimensional Cohen–Macaulay $k$-scheme. Let $D_X=\omega_X[d]$ be its normalized dualizing complex, and let $t_X:H^d(X,\omega_X)\to k$ be its trace. ([[thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme]])

[F7] *lem-regular-base-dualizing-traces-compose-on-rational-modifications.* Assume AC and DC. Let $R$ be regular local of dimension two, $A$ finite normal local over $R$, and let $g:X'\to X$ be a morphism of projective normal modifications over $A$. Their regular-base dualizing complexes are independent of the chosen projective embeddings up to the unique isomorphism preserving their duality pairings. ([[lem-regular-base-dualizing-traces-compose-on-rational-modifications]])

[F8] *def-serre-r-k-and-s-k-conditions.* For a commutative Noetherian ring $R$ and an integer $j\ge0$, condition $(R_j)$ means that $R_{\mathfrak p}$ is regular whenever $\operatorname{ht}\mathfrak p\le j$. Condition $(S_j)$ means that $\operatorname{depth}R_{\mathfrak p}\ge\min\{j,\dim R_{\mathfrak p}\}$ for every prime $\mathfrak p$. ([[def-serre-r-k-and-s-k-conditions]])

[F9] *cor-serre-normality-criterion-two-directions.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). A commutative Noetherian domain is normal if and only if it satisfies $(R_1)$ and $(S_2)$. Equivalently its integral closedness is characterized by these two conditions. ([[cor-serre-normality-criterion-two-directions]])

## Proof

1.1 Since $E$ is an effective Cartier divisor, the ideal sequence $0\to\mathcal O_X(-E)\to\mathcal O_X\to\mathcal O_E\to0$ is a length-one resolution by invertible sheaves; applying $\mathcal R\!Hom_X(-,D_X)$ with $D_X=\omega_X[2]$ and using that $\omega_X$ is Cohen--Macaulay and torsion-free, so multiplication by a local equation of $E$ is injective, identifies the dualizing complex $\mathcal R\!Hom_X(\mathcal O_E,D_X)$ of $E$ with a single-degree shift of $\omega_X(E)|_E$. [F3, F4, given]

2.1 Its underlying sheaf is $\omega_X(E)|_E=\omega_X|_E\otimes L^{-1}$ because $\mathcal O_X(E)|_E=L^{-1}$, and finite closed-immersion coinduction exhibits on it the $R$-valued duality pairing inherited from the evaluation pairing of $X$, canonically and compatibly with the regular-base traces. [F4, F7, step 1.1]

3.1 The normal two-dimensional scheme $X$ satisfies Serre's condition $(S_2)$, so its local rings are Cohen--Macaulay; a Cartier divisor in an $(S_2)$ scheme satisfies $(S_1)$, and a one-dimensional $(S_1)$ scheme is Cohen--Macaulay, so $E$ is a projective pure one-dimensional Cohen--Macaulay $\kappa$-scheme. [F8, F9, given, step 1.1, step 2.1]

4.1 The Koszul resolution of the residue field by a regular parameter sequence of $R$ together with finite-length duality identifies $R\!\operatorname{Hom}_R(\kappa,R[2])$ with a one-dimensional $\kappa$-module concentrated in a single degree; fixing one nonzero identification of that line with $\kappa$ turns the coinduced pairing into the $\kappa$-valued pairing of Serre duality, so for every coherent sheaf $F$ on $E$ one has $\operatorname{Ext}^{1-i}_E(F,\omega_E)\cong H^i(E,F)^\vee$ with $\omega_E=\omega_X|_E\otimes L^{-1}$, which is therefore a projective-curve canonical module; the only choice made is the harmless one-dimensional residue-field normalization. [F5, F6, step 2.1, step 3.1]

5.1 At a regular point $x\in X$, embed an affine neighbourhood in $\mathbb P^N_R$ and let $T$ be the ambient local ring, $B=\mathcal O_{X,x}$ its regular quotient; lifting a minimal generating set of the kernel of $\mathfrak m_T/\mathfrak m_T^2\to\mathfrak m_B/\mathfrak m_B^2$ gives $c=\dim T-\dim B$ elements of the defining ideal that extend to regular parameters of $T$, and the quotient by them is a regular local domain of dimension $\dim B$ surjecting onto $B$, whose remaining prime kernel has height zero and hence is zero; the defining ideal is thus generated by a regular sequence, its Koszul dual $R\!\operatorname{Hom}_T(B,T)$ is free of rank one over $B$, and $\omega_X$ is invertible at $x$; localization proves invertibility at every regular point. [F3, F4, given, step 4.1]

6.1 The Axiom of Choice and the Axiom of Dependent Choice are inherited from the duality, coinduction and resolution suppliers, no additional selection being made. [F1, F2, step 4.1, step 5.1] ∎

## Remarks

- The formula $\omega_E=\omega_X|_E\otimes L^{-1}$ is the Cartier adjunction identity; the residue-field line is only a normalization.
- Cohen--Macaulayness of $E$ is used only to make Serre duality available on the fibre curve.
