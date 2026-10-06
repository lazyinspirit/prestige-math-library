---
id: lem-regular-surface-point-blowup-canonical-transform
kind: lemma
title: "Canonical modules transform by the exceptional divisor at a regular point blowup"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 11
deps: [
          def-axiom-of-choice, def-dependent-choice, lem-affine-point-blowup-pushforward-vanishing,
                    lem-finite-closed-immersion-derived-coinduction-adjunction,
                    lem-normal-projective-surface-dualizing-module-over-regular-local-base,
                    lem-regular-base-dualizing-traces-compose-on-rational-modifications,
                    lem-relative-projective-space-derived-duality-regular-local-base]
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

Assume AC and DC. For the point blowup $b:X'\to X$ of a regular Noetherian surface in the fixed regular-base dualizing setting, with exceptional divisor $E$, there is a canonical generic-compatible identification $\omega_{X'}=b^*\omega_X\otimes O_{X'}(E)$.

## Facts & Assumptions

**Given:** The point blowup $b\colon X'\to X$ of a regular Noetherian surface $X$ at a closed point $x$ in the fixed regular-base dualizing setting, with exceptional divisor $E$, and $\omega_X$ the regular-base canonical module.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *lem-affine-point-blowup-pushforward-vanishing.* Assume the Axiom of Choice, inherited from the Proj construction and from the cohomology suppliers ([[def-axiom-of-choice]]). ([[lem-affine-point-blowup-pushforward-vanishing]])

[F4] *lem-relative-projective-space-derived-duality-regular-local-base.* Assume AC and DC. Let $R$ be regular Noetherian local of finite dimension and $P=\mathbb P^N_R$. Write $W=\mathcal O_P(-N-1)$. Laurent residue gives $t:R\Gamma(P,W[N])\to R$. For every $K\in D^b_{\mathrm{Coh}}(P)$, evaluation followed by $t$ gives a natural quasi-isomorphism $R\Gamma(P,\mathcal R\!Hom_P(K,W[N]))\cong R\operatorname{Hom}_R(R\Gamma(P,K),R)$. ([[lem-relative-projective-space-derived-duality-regular-local-base]])

[F5] *lem-finite-closed-immersion-derived-coinduction-adjunction.* Assume AC. For a finite homomorphism $A\to B$ of Noetherian rings and $G\in D^+(A)$, the complex $f^!G=R\operatorname{Hom}_A(B,G)$ has its natural $B$-action and is right adjoint to restriction of scalars. ([[lem-finite-closed-immersion-derived-coinduction-adjunction]])

[F6] *lem-normal-projective-surface-dualizing-module-over-regular-local-base.* Assume AC and DC. Let $R$ be a regular Noetherian local ring of dimension two, let $A$ be a finite normal local $R$-domain of dimension two, with $R\hookrightarrow A$ local, and let $X$ be a normal integral scheme of dimension two projective over $R$, with a proper birational map $f:X\to\operatorname{Spec}A$. Put $\omega_A=\operatorname{Hom}_R(A,R)$. ([[lem-normal-projective-surface-dualizing-module-over-regular-local-base]])

[F7] *lem-regular-base-dualizing-traces-compose-on-rational-modifications.* Assume AC and DC. Let $R$ be regular local of dimension two, $A$ finite normal local over $R$, and let $g:X'\to X$ be a morphism of projective normal modifications over $A$. Their regular-base dualizing complexes are independent of the chosen projective embeddings up to the unique isomorphism preserving their duality pairings. ([[lem-regular-base-dualizing-traces-compose-on-rational-modifications]])

## Proof

1.1 The assertion is local at the centre, so let $T=\mathcal O_{X,x}$ with regular parameters $u,v$ and trivialize $\omega_X$ near $x$; over $\operatorname{Spec}T$ the blowup is realized as the Cartier hypersurface $uV-vU=0$ in $\mathbb P^1_T$ with two affine charts, and the tautological twisting sheaf satisfies $\mathcal O(1)=\mathcal O(-E)$ on $X'$. [F3, given]

2.1 Relative Laurent duality on $\mathbb P^1_T$ identifies its relative dualizing complex with $\mathcal O(-2)[1]$ over the base dualizing module $T[2]$, with the Laurent residue as trace and with the evaluation identities natural in the tested complex; shifts and tensor twists are respected. [F2, F4, step 1.1]

3.1 The hypersurface $X'$ is cut out by the invertible ideal $\mathcal O(-1)$, so Cartier coinduction applied to the resolution $0\to\mathcal O(-1)\to\mathcal O\to\mathcal O_{X'}\to0$ multiplies the relative canonical line by $\mathcal O(1)$ and subtracts one shift; using $\mathcal O(1)=\mathcal O(-E)$ gives the local identification $\omega_{X'}=b^*\omega_X\otimes\mathcal O_{X'}(E)$, i.e. the canonical line of the surface $X'$ is the pulled-back base line twisted by the exceptional divisor. [F5, step 2.1]

4.1 Outside the centre $b$ is an isomorphism and the identification is the tautological one; on overlaps the two local identifications induce the same identification of duality pairings, so by the representing-property uniqueness of the regular-base dualizing module they glue to a canonical generic-compatible identification $\omega_{X'}=b^*\omega_X\otimes\mathcal O_{X'}(E)$ on all of $X'$, compatible with the traces along further blowups. [F6, F7, step 3.1]

5.1 The Axiom of Choice and the Axiom of Dependent Choice are inherited from the duality, coinduction and blowup suppliers; this is a local Koszul/Laurent computation and does not assert any formula for a blowup at a singular point. [F1, F2, step 4.1] ∎

## Remarks

- The identification is generic-compatible: it restricts to the fixed trivialization of $\omega_X$ over the punctured neighbourhood.
- Only regular centres are treated; the singular-centre case is deliberately excluded.
