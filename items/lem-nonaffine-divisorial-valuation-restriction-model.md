---
id: lem-nonaffine-divisorial-valuation-restriction-model
kind: lemma
title: "A divisorial valuation restricts to a divisorial valuation or the trivial valuation"
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-height-one-localisation-of-normal-noetherian-domain-is-dvr, lem-nonaffine-rational-map-normal-to-proper-codimension-two, thm-valuative-criterion-properness, thm-affine-domain-dimension-transcendence-degree, cor-transcendence-degree-tower-additivity, thm-projective-space-proper-over-base, thm-integral-closure-finite-finite-type-domain-over-field, lem-finite-normalization-compatible-with-principal-opens]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Brion–Samuel–Uma, Lectures on the structure of algebraic groups, Lemma 2.3.5, pp.30–31"
      url: https://www-fourier.univ-grenoble-alpes.fr/~mbrion/chennai.pdf
---

## Statement

Assume the Axiom of Choice. Let $X$ be a normal integral variety over an algebraically closed field $k$, $D\subset X$ a prime divisor, $Y$ a proper integral variety, and $f:X\dashrightarrow Y$ a dominant rational map. Identify $K=k(Y)\subset L=k(X)$ by $f^\#$. Let $v$ be the divisorial valuation of $D$ and $w=v|_{K^*}$. Either $w=0$ and $f|_D$ is dominant, or $w$ is a nontrivial discrete valuation with $\operatorname{trdeg}_k\kappa(w)=\dim Y-1$. In the second case there is a proper normal variety $Y'$ and a proper birational morphism $Y'\to Y$ such that the induced map $X\dashrightarrow Y'$ is defined at the generic point of $D$ and maps $D$ dominantly onto a prime divisor of $Y'$.

## Facts & Assumptions

[F1] A height-one normal local ring is a DVR; rational maps from normal varieties to proper varieties extend at height-one points. ([[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]], [[lem-nonaffine-rational-map-normal-to-proper-codimension-two]])

[F2] Properness gives extension of a function-field morphism across a valuation ring. Projective space is proper. ([[thm-valuative-criterion-properness]], [[thm-projective-space-proper-over-base]])

[F3] Dimension of an integral finite-type variety is its function-field transcendence degree; transcendence degrees add in towers. ([[thm-affine-domain-dimension-transcendence-degree]], [[cor-transcendence-degree-tower-additivity]])

[F4] Normalization of a finite-type variety over a field is finite and glues through localization. ([[thm-integral-closure-finite-finite-type-domain-over-field]], [[lem-finite-normalization-compatible-with-principal-opens]])

## Proof

**Given:** AC, $X$, $D$, $Y$, $f$, $K\subset L$, and $v$ as above; put $m=\dim X$ and $n=\dim Y$.

1.1 By [F1], the valuation ring of $v$ is $\mathcal O_{X,\eta_D}$, with residue field $k(D)$ of transcendence degree $m-1$. Its intersection with $K$ is the valuation ring of $w$, whose residue field embeds in $k(D)$. If $w$ is trivial, that intersection is $K$ itself. The extension given by [F2] therefore specializes the generic point of $Y$ to the generic point under $D\dashrightarrow Y$, so this map is dominant. Conversely, dominance of $D\dashrightarrow Y$ implies that every nonzero rational function of $Y$ has nonzero residue in $k(D)$, hence value zero. If nontrivial, the subgroup $w(K^*)\subset\mathbb Z$ is $d\mathbb Z$ for a positive integer $d$; rescaling gives a discrete valuation. [F1, F2, F3, given, algebra]

2.1 For any finite family $\overline h_1,\ldots,\overline h_t\in\kappa(v)$ algebraically independent over $\kappa(w)$, lift them to $h_i\in\mathcal O_v$. They are algebraically independent over $K$: a polynomial relation with coefficients in $K$ can be divided by a coefficient of smallest $w$-value; its coefficients then belong to $\mathcal O_w$ and at least one is a unit. Reduction gives a nonzero polynomial relation among the $\overline h_i$, a contradiction. Thus $t\le\operatorname{trdeg}_K L=m-n$. The residue fields form a tower over $k$, so [F3] gives $\operatorname{trdeg}_k\kappa(w)\ge n-1$. In the nontrivial case choose $t_0\in K$ of positive $w$-value. Any lifts $f_1,\ldots,f_r$ of algebraically independent residues, together with $t_0$, are algebraically independent over $k$: in a putative polynomial relation expanded in powers of $t_0$, the nonzero coefficient of the smallest power has value zero, whereas all subsequent terms have larger value. Therefore $r+1\le n$. It follows that $\operatorname{trdeg}_k\kappa(w)=n-1$. [F3, step 1.1, algebra]

3.1 In the nontrivial case choose $f_1,\ldots,f_{n-1}\in\mathcal O_w$ with algebraically independent residues and let $Z$ be the reduced closure of the graph of $Y\dashrightarrow\mathbb P^{n-1}$ given by $[1:f_1:\cdots:f_{n-1}]$ (for $n=1$ take $\mathbb P^0$). The projection $Z\to Y$ is proper by [F2], and birational because it is the graph over a dense open. Normalize $Z$ to obtain $Y'$; [F4] makes this a finite proper normal modification. By [F1] the induced rational map $f':X\dashrightarrow Y'$ is defined at $\eta_D$. Its image closure $B$ maps dominantly to $\mathbb P^{n-1}$ because the specialized coordinates are the chosen algebraically independent residues, hence $\dim B\ge n-1$ by [F3]. The centre of $w$ cannot be the generic point of $Y'$: the local ring at that point is $K$, which is not contained in its nontrivial valuation ring. Thus $B\ne Y'$ and $\dim B\le n-1$. Therefore $B$ is a prime divisor, and $f'|_D$ dominates it. AC is inherited from the stated suppliers and the choices of transcendence bases. [F1, F2, F3, F4, step 1.1, step 2.1, construct] ∎
