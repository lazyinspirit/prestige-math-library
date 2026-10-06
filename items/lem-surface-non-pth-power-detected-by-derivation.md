---
id: lem-surface-non-pth-power-detected-by-derivation
kind: lemma
title: Surface non pth power detected by derivation
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
- cor-complete-local-domain-finite-over-a-regular-power-series-ring
- cor-noether-normalisation-module-finiteness
- def-axiom-of-choice
- def-dependent-choice
- def-derivation-algebra
- def-kahler-differentials-algebra
- lem-surface-p-basis-subfield-separation
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'The Stacks Project: full proof imports for normal-surface resolution, lemma-find-D, lemma-derivation-extends'
    url: https://stacks.math.columbia.edu/download/more-algebra.pdf
  - title: Stacks Lemma 15.49.5 (07PH), complete detecting-derivation proof
    url: https://stacks.math.columbia.edu/tag/07PH
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. Let $B$ be a domain of characteristic $p>0$ finite type over a complete equicharacteristic Noetherian local ring, and let $f\in B$ not be a $p$th power in $\operatorname{Frac}B$. There is a derivation $D:B\to B$ with $D(f)\ne0$.

## Facts & Assumptions

**Given:** A domain $B$ of characteristic $p>0$, finite type over a complete equicharacteristic Noetherian local ring, and $f\in B$ that is not a $p$th power in $\operatorname{Frac}B$.

[F1] *cor-complete-local-domain-finite-over-a-regular-power-series-ring.* Assume the Axiom of Choice. Let $(A,\mathfrak m)$ be a complete equicharacteristic Noetherian local domain of dimension $d$. Then there exists a coefficient field $k \subseteq A$ and an injective local homomorphism $k\llbracket X_1,\ldots,X_d\rrbracket \hookrightarrow A$ whose image is a regular complete local subring over which $A$ is module-finite. ([[cor-complete-local-domain-finite-over-a-regular-power-series-ring]])

[F2] *cor-noether-normalisation-module-finiteness.* Let $k$ be a field and let $A$ be a nonzero finite-type $k$-algebra. Then there exist algebraically independent elements $z_1,\ldots,z_d\in A$ such that $A$ is a module-finite algebra over the polynomial ring $k[z_1,\ldots,z_d]$. ([[cor-noether-normalisation-module-finiteness]])

[F3] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F4] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F5] *def-derivation-algebra.* Let $A\xrightarrow{\varphi}B$ be a homomorphism of commutative rings (def-commutative-ring), so that $B$ is an $A$-algebra, and let $M$ be a $B$-module (def-left-and-right-modules). ([[def-derivation-algebra]])

[F6] *def-kahler-differentials-algebra.* Let $A\xrightarrow{\varphi}B$ be a homomorphism of commutative rings and let $\operatorname{Der}_A(B,-)$ be the derivation functor of [[def-derivation-algebra]]. ([[def-kahler-differentials-algebra]])

[F7] *lem-surface-p-basis-subfield-separation.* Assume AC. Let $k$ have characteristic $p>0$, $A=k[\![X_1,\ldots,X_n]\!][Y_1,\ldots,Y_m]$ and $K=\operatorname{Frac}A$. Choose a possibly infinite $p$-basis $(b_i)_{i\in I}$ of $k/k^p$, meaning its restricted monomials of finite support form a $k^p$-basis. ([[lem-surface-p-basis-subfield-separation]])

## Proof

1.1 Replacing the base by its image gives a complete local domain, which is finite over a regular power-series subring; generic Noether normalisation then produces a polynomial subring $R[Y]\subseteq B'\subseteq B$ with $B'$ finite over $R[Y]$ and $B'_g=B_g$ for a nonzero $g\in R$, obtained by normalising over $\operatorname{Frac}(R)$ and clearing the finitely many monic equations of the algebra generators by multiplying them by powers of $g$. [F1, F2, given]

2.1 In $L=\operatorname{Frac}(B')$ the differential $df$ is nonzero: the kernel of the universal absolute derivation is the subfield $L^p$, so a nonzero $df$ is exactly the statement that $f$ is not a $p$th power, which is preserved when $f$ is multiplied by the $p$th power $g^{pN}$ used to move it into $B'$. [F6, F7, step 1.1]

3.1 Apply the separation lemma to $f\notin L^p=\bigcap_J L^pK_J$ to choose $J$ with $f\notin L^pK_J$. A finite relative $p$-basis of $L$ over $L^pK_J$ has restricted monomials as a basis; its coordinate derivations show that the kernel of $d:L\to\Omega_{L/K_J}$ is exactly $L^pK_J$. Thus $df\ne0$ in that finite-dimensional differential space; a linear functional on the finite-dimensional differential space nonzero on $df$ then defines a $K_J$-derivation of $L$ with nonzero value on $f$. Clearing denominators of its values on finitely many $A_J$-module generators of $B'$ produces a derivation $D'\colon B'\to B'$. [F5, F7, step 2.1]

4.1 Derivations extend through localization by the quotient rule, and multiplying $D'$ by $g^{N+1}$, where $g^N$ times each $B'$-algebra generator of $B$ lies in $B'$, gives a derivation $B\to B$; the initial multiplier $g^{pN}$ has zero derivative, so the resulting derivation still satisfies $D(f)\ne0$, as required. The Axiom of Choice and the Axiom of Dependent Choice are inherited from the normalisation and derivation suppliers. [F3, F4, F5, step 3.1] ∎

## Remarks

- The proof tracks a single element f through the normalisation and the p-basis separation; no statement about derivations of the whole ring is assumed.
- The multiplier g^{pN} is invisible to derivations and is used only to move f into the finite subalgebra.
