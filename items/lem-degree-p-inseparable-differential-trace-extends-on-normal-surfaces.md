---
id: lem-degree-p-inseparable-differential-trace-extends-on-normal-surfaces
kind: lemma
title: "Degree-p differential trace extends across normal surface valuations"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps: [
          def-axiom-of-choice, def-dependent-choice, def-kahler-differentials-algebra, def-sheaf-relative-differentials,
                    lem-regular-surface-reflexive-modules-and-codimension-one-lattices,
                    lem-surface-modification-isomorphism-in-codimension-one, thm-conormal-exact-sequence-algebra,
                    thm-height-one-localisation-of-normal-noetherian-domain-is-dvr, thm-nakayama-lemma]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Lemmas 54.2.1\u201354.2.2 and Sections 54.8\u201354.9"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
      locator: "Lemmas 54.2.1 (tag 0ADZ) and 54.2.2 (tag 0AX5): the degree-p differential trace and its generator independence; Sections 54.8\u201354.9: extension across normal surface valuations."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. Let $S$ be a scheme and let $Y\xrightarrow\pi X$ be a finite dominant $S$-morphism of normal integral Noetherian schemes of characteristic $p$ whose function fields have purely inseparable degree $p$. If $\Omega_{X/S}$ is coherent ([[def-sheaf-relative-differentials]]), then for $q\ge1$ the generic differential trace extends canonically to $\pi_*\wedge^q\Omega_{Y/S}\to(\wedge^q\Omega_{X/S})^{**}$. For a monogenic algebra $B=A[z]/(z^p-f)$ it kills forms pulled back from $A$ and sends $\eta\wedge z^i dz$ to zero for $i<p-1$ and to $\eta\wedge df$ for $i=p-1$.

## Facts & Assumptions

**Given:** A base scheme $S$ and a finite dominant $S$-morphism $\pi\colon Y\to X$ of normal integral Noetherian schemes of characteristic $p$ with function fields of purely inseparable degree $p$, with $\Omega_{X/S}$ coherent and $q\ge1$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-kahler-differentials-algebra.* Let $A\xrightarrow{\varphi}B$ be a homomorphism of commutative rings and let $\operatorname{Der}_A(B,-)$ be the derivation functor of def-derivation-algebra. ([[def-kahler-differentials-algebra]])

[F4] *lem-regular-surface-reflexive-modules-and-codimension-one-lattices.* Assume AC and DC. On a regular Noetherian surface a coherent reflexive module is locally free. For a finite module $M$ over a normal Noetherian domain, a generic vector belonging to $M^{**}$ at every height-one localization belongs to $M^{**}$. For a coherent generic-rank-$r$ module on a regular surface, $(\wedge^rM)^{**}$ is the determinant line of $M^{**}$. ([[lem-regular-surface-reflexive-modules-and-codimension-one-lattices]])

[F5] *lem-surface-modification-isomorphism-in-codimension-one.* Assume AC. Let $f:X\to S$ be a modification of integral Noetherian schemes and let $S$ be normal of dimension two. Then $f$ is an isomorphism over an open subset containing every point of codimension at most one in $S$. The complement is a finite set of closed points. If every fibre is zero-dimensional, $f$ is an isomorphism. ([[lem-surface-modification-isomorphism-in-codimension-one]])

[F6] *thm-conormal-exact-sequence-algebra.* Let $A\to P$ be a homomorphism of commutative rings, let $I\subseteq P$ be an ideal and let $B=P/I$, with quotient map $\pi\colon P\to B$. ([[thm-conormal-exact-sequence-algebra]])

[F7] *thm-height-one-localisation-of-normal-noetherian-domain-is-dvr.* Let $R$ be a Noetherian integrally closed domain, and let $\mathfrak p$ be a prime ideal of height $1$. Then the localisation $R_{\mathfrak p}$ is a discrete valuation ring. ([[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]])

[F8] *thm-nakayama-lemma.* Assume the Axiom of Choice. Let $R$ be a commutative ring, let $I \trianglelefteq R$ satisfy $I \subseteq J(R)$, and let $M$ be a finitely generated left $R$-module. If $IM=M$, then $M=0$. ([[thm-nakayama-lemma]])

[F9] Relative differentials $\Omega_{X/S}$ are defined for a supplied structure morphism $X\to S$; an $S$-morphism $Y\to X$ gives compatible structure maps and the corresponding maps of differential sheaves. ([[def-sheaf-relative-differentials]])

## Proof

1.1 For a monogenic algebra $B=A[z]/(z^p-f)$ the differential presentation is $(\Omega_{A/S}\otimes_AB\oplus B\,dz)/(B\,df)$, so modulo forms pulled back from $A$ the algebra is $(\wedge^{q-1}(\Omega_{A/S}/A\,df))\otimes\Omega_{B/A}$; define the trace by wedging a lift $\eta$ with $df$ and taking the coefficient of $z^{p-1}dz$. Changing the lift by a multiple of $df$ does not change the wedge, which proves well-definedness and the stated formula on $\eta\wedge z^idz$. [F3, F6, F9, given]

2.1 Independence of the choice of $z$ follows from a universal coefficient calculation. Write $z=\sum_{i=0}^{p-1}\lambda_iw^i$, with $w^p=g$; then $f=z^p=\sum_i\lambda_i^pg^i$. Terms in $dz$ involving $d\lambda_i$ are pulled-back base forms and are killed by the trace. The coefficient of $w^{p-1}dw$ in the remaining part of $z^jdz$ is the coefficient of $w^{p-1}$ in $z^jz'(w)$ after reduction by $w^p=g$. If $j<p-1$, then $z^jz'(w)=(j+1)^{-1}(z^{j+1})'(w)$; a derivative term can reduce to $w^{p-1}$ only from an original exponent divisible by $p$, whose derivative coefficient is zero in characteristic $p$. For $j=p-1$, first take universal coefficients in $\mathbb F_p[b,\lambda_0,\ldots,\lambda_{p-1}]$ and lift them to $\mathbb Z[b,\lambda_0,\ldots,\lambda_{p-1}]$. There $Z^{p-1}Z'=(1/p)(Z^p)'$ for $Z=\sum_i\lambda_iw^i$. In the expansion of $Z^p$, the coefficient of $w^{ip}$ is congruent modulo $p$ to $\lambda_i^p$; every other contribution to a reduced $w^{p-1}$ coefficient has coefficient divisible by $p$ and vanishes after division and reduction modulo $p$. Thus the coefficient of $w^{p-1}$ in $z^{p-1}z'$ after $w^p=g$ is $\sum_{i=1}^{p-1}i\lambda_i^pg^{i-1}$. Multiplying by $dg$ gives $df$, so the trace formula is unchanged under the generator change. This polynomial identity holds after every coefficient specialization and uses no division by $p$ in characteristic $p$. [F3, step 1.1]

3.1 To extend over $X$ test at height-one localizations $A=\mathcal O_{X,x}$, which are discrete valuation rings by normality. The integral closure $B$ in the degree-$p$ field extension is a local discrete valuation ring because purely inseparable extensions have a unique prime, and it is a finite torsion-free $A$-module, hence free of rank $p$. [F7, given, step 2.1]

4.1 Writing $e$ for the ramification index and $f_{\operatorname{res}}$ for the residue degree, the length of $B/\pi_AB$ is $p=ef_{\operatorname{res}}$; hence either $e=p,f_{\operatorname{res}}=1$, in which case a uniformizer $z$ with $z^p\in A$ generates $B$ over $A$ by Nakayama, or $e=1,f_{\operatorname{res}}=p$, in which case a lift $z$ of a residue-field primitive element has $z^p\in A$ by normality and Nakayama again gives $B=A[z]$. [F8, step 3.1]

5.1 In both cases of step 4.1 the monogenic formula of steps 1.1 and 2.1 applies at every height-one localization, taking regular relative forms to elements of $\Omega_{A/S}$; coherent relative differentials on $Y$ follow from the exact conormal sequence and finiteness. [F3, F6, step 1.1, step 2.1, step 4.1]

6.1 The double-dual codimension-one lattice criterion for reflexive modules now extends the generic map $\pi_*\wedge^q\Omega_{Y/S}\to(\wedge^q\Omega_{X/S})^{**}$, and the extension is canonical because its target injects into the generic module; the argument supplies the discrete-valuation-ring basis and coordinate-invariance details required for the trace extension. The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, F4, F5, step 5.1] ∎

## Remarks

- The two cases at a height-one localization correspond to total ramification and to residue-field extension of degree p; Nakayama identifies the extension of discrete valuation rings with a monogenic algebra in both cases.
- The stated formula for the trace is derived from the universal monogenic computation and then propagated to the normal surface by the codimension-one lattice criterion.
