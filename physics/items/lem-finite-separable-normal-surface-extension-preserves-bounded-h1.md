---
id: lem-finite-separable-normal-surface-extension-preserves-bounded-h1
kind: lemma
title: "Separable finite surface extensions preserve bounded modification cohomology"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 9
deps: [
          def-axiom-of-choice, def-dependent-choice,
                    def-rational-normal-surface-singularity-and-bounded-modification-h1,
                    lem-finite-domination-of-surface-modifications-via-relative-hilbert-scheme,
                    lem-normal-surface-modification-leray-short-exact-sequence,
                    lem-normal-surface-modification-uniform-principal-torsion-bound,
                    lem-trace-pairing-for-a-finite-separable-extension, thm-long-exact-sequence-sheaf-cohomology]
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

Assume AC and DC. Let $A\subset B$ be a finite injective local extension of permitted normal local surface domains with separable fraction-field extension. If modification H1 over $A$ is uniformly bounded, so is modification H1 over $B$.

## Facts & Assumptions

**Given:** A finite injective local extension $A\subset B$ of permitted normal local surface domains with separable fraction-field extension $L/K$ of degree $n$, assuming modification H1 over $A$ is uniformly bounded.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-rational-normal-surface-singularity-and-bounded-modification-h1.* Assume AC and DC. A normal two-dimensional Noetherian local domain $A$ essentially of finite type over a field or complete equicharacteristic local base defines a rational singularity if $H^1(Y,\mathcal O_Y)=0$ for every normal integral proper modification $Y\to\operatorname{Spec}A$. Bounded modification H1 means these modules have uniformly bounded $A$-length. ([[def-rational-normal-surface-singularity-and-bounded-modification-h1]])

[F4] *lem-finite-domination-of-surface-modifications-via-relative-hilbert-scheme.* Assume AC and DC. Let $A$ be a normal Noetherian local domain of dimension two essentially of finite type over a field or a complete equicharacteristic Noetherian local ring. Let $B$ be a finite normal local $A$-domain, and let $Y\to\operatorname{Spec}B$ be a normal integral modification. ([[lem-finite-domination-of-surface-modifications-via-relative-hilbert-scheme]])

[F5] *lem-normal-surface-modification-leray-short-exact-sequence.* Assume AC and DC. Let $A$ be a normal local domain of dimension two in the field/complete-equicharacteristic finite-type class, and $X'\xrightarrow gX\to\operatorname{Spec}A$ normal integral modifications. Then $g_*\mathcal O_{X'}=\mathcal O_X$ and $H^1(X,\mathcal O_X)\to H^1(X',\mathcal O_{X'})$ is injective. ([[lem-normal-surface-modification-leray-short-exact-sequence]])

[F6] *lem-normal-surface-modification-uniform-principal-torsion-bound.* Assume AC and DC. For a normal local surface domain $A$ in the permitted finite-type class and $0\ne a\in A$, the lengths of $H^1(X,\mathcal O_X)[a]$ are uniformly bounded over all normal projective modifications $X\to\operatorname{Spec}A$. ([[lem-normal-surface-modification-uniform-principal-torsion-bound]])

[F7] *lem-trace-pairing-for-a-finite-separable-extension.* Let $L/F$ be a finite separable field extension. Then the bilinear pairing $L\times L\to F$, $(x,y)\mapsto\operatorname{Tr}_{L/F}(xy)$, is nondegenerate. ([[lem-trace-pairing-for-a-finite-separable-extension]])

[F8] *thm-long-exact-sequence-sheaf-cohomology.* Assume the Axiom of Choice. Let $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$ be a short exact sequence of abelian sheaves on a topological space $X$, and let $H^q(X,-)$ be sheaf cohomology computed from the supplied functorial injective resolution datum $I$ on $\mathrm{Ab}(X)$ (def-sheaf-cohomology-derived-global-sections). ([[thm-long-exact-sequence-sheaf-cohomology]])

## Proof

1.1 Choose $b_1,\dots,b_n\in B$ forming a $K$-basis of $L$; the trace Gram determinant $d=\det(\operatorname{Tr}(b_ib_j))$ lies in $A$ and is nonzero because the trace pairing of a separable extension is nondegenerate. [F7, given]

2.1 For a normal projective modification $Y$ over $B$ the Hilbert finite-domination helper produces a dominating normal projective $Y'$ finite over a normal projective modification $X$ over $A$, and the Leray injection embeds $H^1(Y,\mathcal O_Y)$ into $H^1(Y',\mathcal O_{Y'})$. [F4, F5, given, step 1.1]

3.1 Normality of the target affine algebras makes the field trace of every integral element regular there, so the trace map $\Phi\colon\pi_*\mathcal O_{Y'}\to\mathcal O_X^n$, $s\mapsto(\operatorname{Tr}(b_is))$, is an injection of sheaves whose Gram matrix is the trace pairing; the adjugate shows that $d$ annihilates the cokernel. The long exact sequence therefore bounds $H^1(Y')$ modulo its $d$-torsion by $H^1(X)^n$, and the kernel contributions are killed by $d$. [F7, F8, step 2.1]

4.1 The uniform principal-torsion lemma over $B$ bounds the $d$-torsion independently of $Y'$; the $A$-length of $H^1(X)^n$ is at most $n$ times the assumed bound, and for finite local $B/A$ the $A$-length of a finite-length $B$-module is the residue-degree multiple of its $B$-length. Hence the bound is uniform over $Y'$, and general normal proper modifications are reduced to projective ones by domination and the Leray injection. The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, F3, F6, step 3.1] ∎

## Remarks

- The trace pairing converts the degree-n extension into n copies of the base cohomology up to d-torsion, and the principal-torsion bound controls that torsion.
- Finiteness of the local extension enters in the length comparison.
