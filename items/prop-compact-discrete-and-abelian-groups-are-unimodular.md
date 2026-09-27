---
id: prop-compact-discrete-and-abelian-groups-are-unimodular
kind: proposition
title: "Compact, discrete and abelian groups are unimodular"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-unimodular-locally-compact-group, def-modular-function-of-a-locally-compact-group, thm-the-modular-function-is-a-continuous-homomorphism, cor-normalized-haar-probability-on-a-compact-group, def-left-haar-integral-and-left-haar-measure, thm-uniqueness-of-left-haar-measure-up-to-scale, lem-counting-measure-on-a-discrete-group, def-axiom-of-choice]
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
    - title: "Lynn Loomis, An Introduction to Abstract Harmonic Analysis, §§30–31"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
      locator: "§§30A–30B, printed pp. 115–118"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Assume AC for the general Haar interface. Every compact, discrete, or abelian
LCH group is unimodular.

## Facts & Assumptions

**Given:** An LCH group $G$, a left Haar measure $\mu$ on $G$, the modular function $\Delta_G$ ([[def-modular-function-of-a-locally-compact-group]]), and AC.

[F1] For every $g$ there is a unique $c(g)>0$ with $\int_Gf(xg)\,d\mu(x)=c(g)\int_Gf\,d\mu(x)$ for all $f\in C_c(G)$, and $\Delta_G(g)=c(g^{-1})$; consequently $G$ is unimodular exactly when $c(g)=1$ for every $g$, i.e. exactly when $\mu$ is right invariant ([[def-modular-function-of-a-locally-compact-group]], [[def-unimodular-locally-compact-group]]).

[F2] A compact Hausdorff group has a left Haar probability measure, and that measure is right invariant ([[cor-normalized-haar-probability-on-a-compact-group]]).

[F3] For a left Haar measure $\mu$, $\mu(aE)=\mu(E)$ for every Borel $E$ and every $a\in G$; in an abelian group $xg=gx$ for all $x,g$ ([[def-left-haar-integral-and-left-haar-measure]]).

[F4] Any two left Haar measures on an LCH group are positive scalar multiples on every Borel set ([[thm-uniqueness-of-left-haar-measure-up-to-scale]]).

[F5] On an LCH group with the discrete topology, counting measure is a left Haar measure and a right Haar measure, and every left Haar measure on it is a positive multiple of counting measure ([[lem-counting-measure-on-a-discrete-group]]).

[A1] AC is assumed in the choice-function form of the cited definition ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Compact case. By [F2] and [A1] there is a left Haar probability $\lambda$ on $G$ that is right invariant, so $\int_Gf(xg)\,d\lambda(x)=\int_Gf\,d\lambda(x)$ for every $f\in C_c(G)$ and every $g$; by [F4] there is $t>0$ with $\lambda=t\mu$ on Borel sets. Hence $\int_Gf(xg)\,d\mu(x)=t^{-1}\int_Gf(xg)\,d\lambda(x)=t^{-1}\int_Gf\,d\lambda(x)=\int_Gf\,d\mu(x)$ for every $f\in C_c(G)$, so the scalar attached to $\mu$ by [F1] satisfies $c(g)=1$ by its uniqueness, hence $\Delta_G(g)=c(g^{-1})=1$ for every $g$ and $G$ is unimodular by [F1]. [A1, F1, F2, F4]

1.2 Abelian case. Fix $g\in G$ and $f\in C_c(G)$. Since $xg=gx$ and $\mu$ is left invariant, $\int_Gf(xg)\,d\mu(x)=\int_Gf(gx)\,d\mu(x)=\int_Gf(x)\,d\mu(x)$, so $c(g)=1$ by the uniqueness in [F1]; as $g$ was arbitrary, $\Delta_G\equiv1$ and $G$ is unimodular. [F1, F3]

1.3 Discrete case. Let $G$ be discrete and let $\nu$ be counting measure. By [F5] the measure $\nu$ is a left Haar measure and a right Haar measure on $G$, and the fixed left Haar measure $\mu$ equals $c\,\nu$ for some $c>0$; since $\nu$ is right invariant, so is $\mu$, hence $c(g)=1$ for every $g$ by the uniqueness in [F1] and $\Delta_G\equiv1$. [F1, F5]

2.1 Every compact, discrete or abelian LCH group therefore falls under one of steps 1.1–1.3 and is unimodular. ∎ [step 1.1, step 1.2, step 1.3]

## Remarks

- **Alternative compact argument.** By [[thm-the-modular-function-is-a-continuous-homomorphism]] the image $\Delta_G(G)$ is a compact subgroup of the multiplicative group $\mathbb R_{>0}$. If $t\in\Delta_G(G)$ then both $t^n$ and $t^{-n}$ belong to $\Delta_G(G)$ for every $n\in\mathbb N$; boundedness of this compact image forces $t=1$; hence $\Delta_G\equiv1$ for compact $G$ as well.
- **Choice cost.** Only the compact case invokes the general Haar interface, which is where AC enters through [A1]; the discrete case rests on [[lem-counting-measure-on-a-discrete-group]], whose proportionality constant is pinned to $\mu(\{e\})$ without AC, and the abelian computation uses the fixed measure only.
