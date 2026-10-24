---
id: lem-normal-surface-trace-cokernel-dualizes-h1-and-bounds-it
kind: lemma
title: "Trace cokernels detect and bound normal surface H1"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 10
deps: [
          def-axiom-of-choice, def-dependent-choice,
                    def-rational-normal-surface-singularity-and-bounded-modification-h1,
                    lem-finite-length-duality-over-a-regular-local-base,
                    lem-normal-projective-surface-dualizing-module-over-regular-local-base,
                    lem-normal-surface-modification-uniform-principal-torsion-bound,
                    lem-projective-normal-surface-grauert-riemenschneider-vanishing]
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
---

## Statement

Assume AC and DC. Let $R$ be regular Noetherian local of dimension two and $A$ a finite normal local $R$-domain of dimension two with $R\hookrightarrow A$ local, in the permitted class. For a projective normal modification $X$, put $M=H^1(X,\mathcal O_X)$. There is a canonical exact sequence $0\to\Gamma(X,\omega_X)\xrightarrow{\operatorname{tr}}\omega_A\to\operatorname{Ext}_R^2(M,R)\to0$, and the last module has the same $A$-annihilator as $M$. If one fixed nonzero $d\in A$ annihilates every such trace cokernel, then $A$ has bounded modification H1. If $A$ is rational, the trace is an isomorphism and gives an adjoint evaluation $f^*\omega_A\to\omega_X$.

## Facts & Assumptions

**Given:** A regular Noetherian local ring $R$ of dimension two, a finite normal local $R$-domain $A$ of dimension two with $R\hookrightarrow A$ local, in the permitted class, and a projective normal modification $X\to\operatorname{Spec}A$ with $M=H^1(X,\mathcal O_X)$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-rational-normal-surface-singularity-and-bounded-modification-h1.* Assume AC and DC. A normal two-dimensional Noetherian local domain $A$ essentially of finite type over a field or complete equicharacteristic local base defines a rational singularity if $H^1(Y,\mathcal O_Y)=0$ for every normal integral proper modification $Y\to\operatorname{Spec}A$. Bounded modification H1 means these modules have uniformly bounded $A$-length. ([[def-rational-normal-surface-singularity-and-bounded-modification-h1]])

[F4] *lem-finite-length-duality-over-a-regular-local-base.* Assume AC and DC. Let $(R,\mathfrak m)$ be regular Noetherian local of dimension $d$ and let $(B,\mathfrak n)$ be a module-finite local $R$-algebra with the map local. For finite-length $B$-modules put $T(M)=\operatorname{Ext}_R^d(M,R)$ with its natural $B$-action. ([[lem-finite-length-duality-over-a-regular-local-base]])

[F5] *lem-normal-projective-surface-dualizing-module-over-regular-local-base.* Assume AC and DC. Let $R$ be a regular Noetherian local ring of dimension two, let $A$ be a finite normal local $R$-domain of dimension two, with $R\hookrightarrow A$ local, and let $X$ be a normal integral scheme of dimension two projective over $R$, with a proper birational map $f:X\to\operatorname{Spec}A$. Put $\omega_A=\operatorname{Hom}_R(A,R)$. ([[lem-normal-projective-surface-dualizing-module-over-regular-local-base]])

[F6] *lem-normal-surface-modification-uniform-principal-torsion-bound.* Assume AC and DC. For a normal local surface domain $A$ in the permitted finite-type class and $0\ne a\in A$, the lengths of $H^1(X,\mathcal O_X)[a]$ are uniformly bounded over all normal projective modifications $X\to\operatorname{Spec}A$. ([[lem-normal-surface-modification-uniform-principal-torsion-bound]])

[F7] *lem-projective-normal-surface-grauert-riemenschneider-vanishing.* Assume AC and DC. Let $R$ be regular Noetherian local of dimension two, $A$ a finite normal local $R$-domain of dimension two with $R\hookrightarrow A$ local, and $X\to\operatorname{Spec}A$ a projective normal modification, in the permitted finite-type/completion class. For its normalized dualizing module $\omega_X$ over $\omega_A=\operatorname{Hom}_R(A,R)$, $H^1(X,\omega_X)=0$. ([[lem-projective-normal-surface-grauert-riemenschneider-vanishing]])

## Proof

1.1 As verified by the projectivity argument of [F7], the finite map $\operatorname{Spec}A\to\operatorname{Spec}R$ and the projective modification make $X$ projective over $R$, so [F5] applies. The structure-sheaf cohomology of $X$ has $H^0=A$, $H^1=M$ of finite length and no other positive groups, so its truncation triangle is $A\to C\to M[-1]\to A[1]$; dualizing over $R$ uses that $A$ is finite free over the regular local ring $R$ and that finite-length duality is concentrated at $\operatorname{Ext}^2_R$. [F4, F5, F7, given]

2.1 The normal-surface relative duality identifies the middle dual with $R\Gamma(X,\omega_X)$, and Grauert--Riemenschneider vanishing makes that complex concentrated in degree zero; the long exact cohomology sequence is therefore exactly the short exact sequence $0\to\Gamma(X,\omega_X)\xrightarrow{\operatorname{tr}}\omega_A\to\operatorname{Ext}^2_R(M,R)\to0$, whose injection is the trace dual to $A\to C$. [F5, F7, step 1.1]

3.1 Finite-length duality gives equality of $A$-annihilators of $M$ and $\operatorname{Ext}^2_R(M,R)$; if one fixed nonzero $d\in A$ annihilates every such trace cokernel then it annihilates $M$, and the uniform principal-torsion bound bounds the length of $M$; normalized-point domination and the Leray injection extend the bound to all proper normal modifications. [F4, F6, step 2.1]

4.1 If $A$ is rational then $M=0$ and the trace is an isomorphism, whose inverse identifies $\omega_A$ with the global sections of $\omega_X$; the usual sheaf evaluation then produces the adjoint pullback map $f^*\omega_A\to\omega_X$. The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, F3, step 3.1] ∎

## Remarks

- All identifications are unit and evaluation pairings over the fixed regular base, not abstract module isomorphisms.
- The cokernel of the trace dualizes H1, and the principal-torsion bound is what converts an annihilation statement into a uniform length bound.
