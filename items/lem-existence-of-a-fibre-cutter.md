---
id: lem-existence-of-a-fibre-cutter
kind: lemma
title: A function cutting the components of a special fibre
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
- def-axiom-of-choice
- def-local-ring
- def-stalk-of-presheaf
- lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: The Stacks Project, Resolution of Surfaces, Section 54.7 (Vanishing)
    url: https://stacks.math.columbia.edu/tag/0AX7
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice. Let $k$, $X$, $Y$, $f\colon X\to Y$ and $y\in Y$ be as in
[[lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces]], and assume $\dim f^{-1}(y)=1$
with components $C_1,\dots,C_r$. Then there exists a nonzero element $u\in\mathcal O_{Y,y}$ such that for every
$i$ there is a closed point $x_i\in C_i$ with $x_i\notin C_j$ for $j\neq i$ and a factorization
$u=g_ih_i$ in $\mathcal O_{X,x_i}$ under the local homomorphism $f^\sharp\colon \mathcal O_{Y,y}\to\mathcal O_{X,x_i}$
in which $g_i\in\mathfrak m_{X,x_i}$ maps to a nonzero element of $\mathcal O_{C_i,x_i}$ and $h_i\in\mathcal O_{X,x_i}$.

## Facts & Assumptions

**Given:** A field $k$, integral regular finite-type $k$-schemes $X,Y$ of pure dimension two, a proper birational morphism $f\colon X\to Y$, a closed point $y\in Y$ with $\dim f^{-1}(y)=1$ and components $C_1,\dots,C_r$ as in the fibre-components lemma.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-local-ring.* A **local ring** is a nonzero commutative ring $R$ with exactly one maximal ideal. That ideal is usually denoted $\mathfrak m_R$ or simply $\mathfrak m$. The quotient $R/\mathfrak m$, which is a field, is the **residue field** of the local ring. ([[def-local-ring]])

[F3] *def-stalk-of-presheaf.* Let $\mathcal F$ be a presheaf on a topological space $X$, and let $x\in X$. The **neighbourhood category of $x$** is the full subcategory $\mathcal N_x\subseteq \operatorname{Open}(X)$ whose objects are the open neighbourhoods of $x$. ([[def-stalk-of-presheaf]])

[F4] *lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces.* Assume the Axiom of Choice. Let $k$ be a field, let $X$ and $Y$ be integral regular finite-type $k$-schemes of pure dimension two, let $f\colon X\to Y$ be a proper birational morphism and let $y\in Y$ be a closed point. Put $F=f^{-1}(y)$. Then: 1. $F$ is a proper $\kappa(y)$-scheme with $\dim F\le 1$. 2. ([[lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces]])

## Proof

1.1 By part 2 of the fibre-components lemma choose for every $i$ a closed point $x_i\in C_i$ with $x_i\notin C_j$ for $j\ne i$, and choose any $g_i\in\mathfrak m_{X,x_i}$ whose image in the local ring $\mathcal O_{C_i,x_i}$ is nonzero; such an element exists because the quotient map $\mathcal O_{X,x_i}\to\mathcal O_{C_i,x_i}$ sends the maximal ideal onto the maximal ideal of the nonzero local ring $\mathcal O_{C_i,x_i}$. [F2, F3, F4, given]

2.1 The local homomorphism $f^{\sharp}\colon\mathcal O_{Y,y}\to\mathcal O_{X,x_i}$ is injective on local rings and becomes an isomorphism of fraction fields: by part 3 of the fibre-components lemma the function field of $Y$ is identified with the function field of $X$ under $f^{\sharp}$, so the germ $g_i$ can be written as a quotient $g_i=a_i/b_i$ with $a_i,b_i\in\mathcal O_{Y,y}$ and $b_i\ne0$. [F4, step 1.1]

3.1 Put $u:=\prod_ja_j\in\mathcal O_{Y,y}$, a nonzero element because each $a_j$ is nonzero and the local ring is a domain. Each $a_j$ is in the target maximal ideal: otherwise its pullback would be a unit, contradicting $a_j=g_jb_j$ with $g_j$ a nonunit. Thus $u$ lies in that maximal ideal and has positive valuation along every fibre curve; then in $\mathcal O_{X,x_i}$ one has $u=g_i\cdot h_i$ with $h_i:=b_i\prod_{j\ne i}a_j$, and by construction $g_i$ maps to a nonzero element of $\mathcal O_{C_i,x_i}$. [F2, step 2.1]

4.1 The element $u$ and the factorizations of step 3.1 are the required data; the Axiom of Choice is inherited from the cited fibre-components lemma. [F1, step 3.1] ∎

## Remarks

- The function $u$ is a concrete product of numerators obtained from the birational identification of function fields; no glueing or approximation argument is used.
- The points $x_i$ are closed points chosen to lie on no other component; smoothness of the components or these points is not assumed.
