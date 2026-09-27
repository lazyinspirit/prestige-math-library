---
id: lem-right-translation-scales-left-haar-measure
kind: lemma
title: "Right translation scales left Haar measure"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [cor-existence-of-left-and-right-haar-measures, thm-uniqueness-of-left-haar-measure-up-to-scale, lem-translations-preserve-compactly-supported-continuous-functions, def-left-haar-integral-and-left-haar-measure, def-borel-sigma-algebra, thm-compactness-under-continuous-maps, thm-monotone-convergence-for-the-integral, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan’s Property (T), Appendix A §§A.3–A.4"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix A §§A.3–A.4, printed pp. 316–323"
    - title: "Emmanuel Kowalski, Representation Theory of Groups, §§5.2–5.3"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§§5.2–5.3 and Lemma 5.5.2, printed pp. 212–230, 238–239"
verification:
  precheck: pass
---

## Statement

Assume AC. For a fixed left Haar measure $\mu$ on an LCH group $G$ and
$g\in G$, the functional $f\mapsto\int_G f(xg)\,d\mu(x)$ is integration against
a left Haar measure, hence equals a unique positive scalar
$c(g)\int_G f\,d\mu$ on $C_c(G)$.

## Facts & Assumptions

**Given:** An LCH group $G$, a left Haar measure $\mu$ on $G$, an element $g\in G$, and AC.

[F1] A left Haar measure is a nonzero Borel measure that is left invariant, finite on compact sets, outer regular on Borel sets and inner regular on open sets; a left Haar integral is a nonzero positive left-invariant functional on $C_c(G;\mathbb R)$ with complexification by real and imaginary parts ([[def-left-haar-integral-and-left-haar-measure]]).

[F2] A continuous map $T:X\to Y$ between topological spaces is Borel measurable: the sets $B\subseteq Y$ with $T^{-1}B\in\mathcal B(X)$ form a sigma-algebra containing every open set, and hence contain $\mathcal B(Y)$ by its generated-sigma-algebra definition. Applying this to a homeomorphism and its inverse shows that it transports Borel sets in both directions ([[def-borel-sigma-algebra]]).

[F3] The continuous image of a compact set is compact ([[thm-compactness-under-continuous-maps]]).

[F4] Right translation preserves $C_c$: for $f\in C_c(G)$ and $a\in G$ one has $R_af(x)=f(xa)$ in $C_c(G)$ with $\operatorname{supp}(R_af)=(\operatorname{supp}f)a^{-1}$; left translation is the same statement with a left translate of the support ([[lem-translations-preserve-compactly-supported-continuous-functions]]).

[F5] Any two left Haar measures on an LCH group are positive scalar multiples on every Borel set ([[thm-uniqueness-of-left-haar-measure-up-to-scale]]).

[F6] Monotone convergence passes increasing limits of nonnegative measurable functions through the integral ([[thm-monotone-convergence-for-the-integral]]).

[A1] AC is assumed in the choice-function form of the cited definition ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Fix $g\in G$ and define $\nu_g(E):=\mu(Eg^{-1})$ for every Borel set $E$. The map $\theta_g(x):=xg$ is a homeomorphism of $G$ with inverse $x\mapsto xg^{-1}$, so it carries Borel sets to Borel sets by [F2] and compact sets to compact sets by [F3]. Hence $\nu_g$ is a nonzero Borel measure (it is nonzero because $\mu$ is, by [F1]) that is finite on compact sets: if $K$ is compact then $Kg^{-1}$ is compact by [F3] and $\nu_g(K)=\mu(Kg^{-1})<\infty$ by [F1]. It is outer regular on Borel sets, since the homeomorphism gives a bijection $W\mapsto Wg$ from open supersets of $Eg^{-1}$ to open supersets of $E$, and therefore $\nu_g(E)=\mu(Eg^{-1})=\inf_{W\supseteq Eg^{-1}\text{ open}}\mu(W)=\inf_{U\supseteq E\text{ open}}\nu_g(U)$, also when the value is infinite. Finally it is inner regular on open sets: for open $V$ the set $Vg^{-1}$ is open, so inner regularity of $\mu$ gives $\nu_g(V)=\mu(Vg^{-1})=\sup\{\mu(L):L\subseteq Vg^{-1}\text{ compact}\}$, and $L\mapsto Lg$ is a bijection between the compact subsets of $Vg^{-1}$ and those of $V$ with $\mu(L)=\nu_g(Lg)$; hence $\nu_g(V)=\sup\{\nu_g(K):K\subseteq V\text{ compact}\}$. Thus $\nu_g$ is a Radon measure. [F1, F2, F3]

1.2 For $f\in C_c(G)$ define $N_g(f):=\int_G f(xg)\,d\mu(x)$. By [F4] the function $x\mapsto f(xg)$ lies again in $C_c(G)$, so it is integrable against the compact-finite measure $\mu$ by [F1]; thus $N_g$ is a real-linear functional on $C_c(G;\mathbb R)$, and it is positive, because $f\ge0$ implies $f(xg)\ge0$ for every $x$ and hence $N_g(f)\ge0$. [F1, F4]

2.1 The measure $\nu_g$ of step 1.1 represents $N_g$. Indeed, for the indicator of a Borel set $E$ the definitions give $\nu_g(E)=\mu(Eg^{-1})=\int_G\mathbf 1_E(xg)\,d\mu(x)$; both sides are additive, so linearity extends the identity to nonnegative simple functions, [F6] extends it to all nonnegative Borel functions, and taking real and imaginary parts extends it to all of $C_c(G)$. In particular the Radon measure $\nu_g$ is the one attached to the positive functional $N_g$, and $\nu_g\ne0$ by step 1.1. [F1, F6, step 1.1, step 1.2]

2.2 $\nu_g$ is left invariant: for $a\in G$ and Borel $E$, $\nu_g(aE)=\mu(aEg^{-1})=\mu(Eg^{-1})=\nu_g(E)$, using left invariance of $\mu$ in the middle step. With step 1.1 this makes $\nu_g$ a left Haar measure in the sense of [F1]. [F1, step 1.1]

3.1 Since $\mu$ and $\nu_g$ are both left Haar measures, [F5] (whose choice hypothesis is discharged by [A1]) provides a scalar $c(g)>0$ with $\nu_g(E)=c(g)\mu(E)$ for every Borel set $E$. The scalar is unique: if also $c'\mu=\nu_g$ then $(c-c')\mu(E)=0$ for every Borel $E$, and some Borel set $E$ has $0<\mu(E)<\infty$, since $\mu\ne0$ together with outer and inner regularity of $\mu$ produces a compact set of positive finite measure by [F1]. [A1, F1, F5, step 2.2]

4.1 Consequently, for every $f\in C_c(G)$, the representation in step 2.1 and the proportionality in step 3.1 give
$$\int_G f(xg)\,d\mu(x)=N_g(f)=\int_G f\,d\nu_g=c(g)\int_G f\,d\mu ,$$
which is the asserted identity; the case $f=ix$ with $i$ the imaginary unit is handled by applying the real identity to $\operatorname{Re}f$ and $\operatorname{Im}f$. The scalar $c(g)$ is positive and unique by step 3.1, and $c(e)=1$ because $\nu_e=\mu$. [step 2.1, step 3.1] ∎

## Remarks

- **Borel-level form.** The proof upgrades the identity to measures: $\nu_g$ is the Radon measure $E\mapsto\mu(Eg^{-1})$, so for every nonnegative Borel $F$ and every $\mu$-integrable $F$,
  $$\int_G F(xg)\,d\mu(x)=\int_G F\,d\nu_g=c(g)\int_G F\,d\mu ,$$
  because the integral of a nonnegative Borel function is determined by the measure it integrates against.
- **Existence is not assumed.** The lemma is conditional on a given left Haar measure; under AC such a measure exists for every LCH group by [[cor-existence-of-left-and-right-haar-measures]], so the modular function defined on the next item is available for every LCH group.
- **Terminology.** The scalar $c(g)$ is the reciprocal normalization of the modular function defined on the next item, $\Delta_G(g)=c(g^{-1})$; the affine computation of the companion page displays that convention concretely.
