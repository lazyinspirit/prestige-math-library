---
id: lem-projective-regular-local-base-coherent-duality-by-embedding
kind: lemma
title: "Projective coherent duality over a regular local base"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps: [
          def-axiom-of-choice, def-dualizing-complex-on-projective-cm-scheme,
                    lem-relative-projective-space-derived-duality-regular-local-base,
                    lem-finite-closed-immersion-derived-coinduction-adjunction,
                    lem-regular-quotient-dualizing-complex-and-biduality,
                    thm-localisation-and-polynomial-extension-of-regular-rings, def-dependent-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, 54.7.8 and 54.8.8: relative duality import (proved locally in the projective regular-base case)"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. Let $R$ be regular Noetherian local of dimension $d$, let $X$ be projective over $R$, and fix $i:X\hookrightarrow P=\mathbb P^N_R$. Put $D_X=i^!(\mathcal O_P(-N-1)[N+d])$. Then $D_X$ is a dualizing complex on $X$, with coherent biduality. For every bounded coherent complex $K$ on $X$, trace/evaluation gives $R\Gamma(X,\mathcal R\!Hom_X(K,D_X))\cong R\operatorname{Hom}_R(R\Gamma(X,K),R[d])$. The pairing, not just its vector-space shadow, is canonical for the supplied embedding.

## Facts & Assumptions

**Given:** A regular Noetherian local ring $R$ of dimension $d$, a projective $R$-scheme $X$ with a fixed closed immersion $i\colon X\hookrightarrow P=\mathbb P^N_R$, the complex $D_X=i^!(\mathcal O_P(-N-1)[N+d])$, and a bounded coherent complex $K$ on $X$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dualizing-complex-on-projective-cm-scheme.* A dualizing complex on a Noetherian scheme $X$ is an object $D_X\in D^b_{\mathrm{Coh}}(X)$ such that, locally on affine open neighborhoods $U=\operatorname{Spec}B$, its corresponding complex has finite injective dimension over $B$ and the homothety map $B\to R\operatorname{Hom}_B(D_X|_U,D_X|_U)$ is an isomorphism. ([[def-dualizing-complex-on-projective-cm-scheme]])

[F3] *lem-relative-projective-space-derived-duality-regular-local-base.* Assume AC and DC. Let $R$ be regular Noetherian local of finite dimension and $P=\mathbb P^N_R$. Write $W=\mathcal O_P(-N-1)$. Laurent residue gives $t:R\Gamma(P,W[N])\to R$. For every $K\in D^b_{\mathrm{Coh}}(P)$, evaluation followed by $t$ gives a natural quasi-isomorphism $R\Gamma(P,\mathcal R\!Hom_P(K,W[N]))\cong R\operatorname{Hom}_R(R\Gamma(P,K),R)$. ([[lem-relative-projective-space-derived-duality-regular-local-base]])

[F4] *lem-finite-closed-immersion-derived-coinduction-adjunction.* Assume AC. For a finite homomorphism $A\to B$ of Noetherian rings and $G\in D^+(A)$, the complex $f^!G=R\operatorname{Hom}_A(B,G)$ has its natural $B$-action and is right adjoint to restriction of scalars. ([[lem-finite-closed-immersion-derived-coinduction-adjunction]])

[F5] *lem-regular-quotient-dualizing-complex-and-biduality.* Assume AC. Let $A$ be a regular Noetherian ring of finite dimension $n$, let $L$ be an invertible $A$-module, and let $B=A/I$ be nonzero. For any integer $s$, $D_B=R\operatorname{Hom}_A(B,L[s])$ is a dualizing complex over $B$. ([[lem-regular-quotient-dualizing-complex-and-biduality]])

[F6] *thm-localisation-and-polynomial-extension-of-regular-rings.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Localizations and finite polynomial extensions of a commutative regular Noetherian ring are regular. Regularity can equivalently be tested at maximal ideals. For every nonzero such ring, $\operatorname{gldim}R=\dim R$, allowing infinity. ([[thm-localisation-and-polynomial-extension-of-regular-rings]])

[F7] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

## Proof

1.1 On an affine chart $\operatorname{Spec}A$ of $P$ the ring $A$ is a regular finite-dimensional polynomial ring over $R$ and $X$ is cut out by an ideal $I$ with $X\cap\operatorname{Spec}A=\operatorname{Spec}A/I$; the ambient twist is invertible, so the regular-quotient biduality supplier applies over $A$ and shows that $i^!$ produces a local dualizing complex with coherent biduality. [F5, F6, given]

2.1 The coinduction adjunction for the closed immersion uses the natural quotient action and evaluation at one, so the local chart complexes and their biduality structures glue to a global dualizing complex $D_X$ on $X$. [F4, F5, step 1.1]

3.1 Uniform finite twist resolutions over $P$ bound the coherence degrees of $i^!$ applied to the finite twists, so $D_X$ is bounded with coherent cohomology. [F3, step 2.1]

4.1 Closed-immersion internal Hom adjunction identifies $i_*\mathcal R\!\operatorname{Hom}_X(K,D_X)$ with $\mathcal R\!\operatorname{Hom}_P(i_*K,\mathcal O_P(-N-1)[N+d])$, and closed-immersion cohomology comparison identifies the global sections of the two sides. [F4, step 3.1]

5.1 Applying the relative projective-space duality, shifted by $d$, gives the natural quasi-isomorphism $R\Gamma(X,\mathcal R\!\operatorname{Hom}_X(K,D_X))\cong R\operatorname{Hom}_R(R\Gamma(X,K),R[d])$; its trace is the coinduction counit followed by the Laurent residue, so it is the actual compatible composition pairing. Coherent biduality holds locally by step 1.1 and hence globally, and the Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, F3, F7, step 4.1] ∎

## Remarks

- The dualizing complex is defined from the fixed embedding; the statement is canonical for that embedding, not independent of it.
- The concentration of this complex into a single dualizing module on a normal surface modification is not asserted here.
