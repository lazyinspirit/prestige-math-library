---
id: cex-g-mod-h-need-not-have-an-invariant-measure
kind: counterexample
title: "A homogeneous quotient without invariant measure"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [cor-existence-of-left-and-right-haar-measures, def-axiom-of-choice, def-left-haar-integral-and-left-haar-measure, def-measure-with-density, def-modular-function-of-a-locally-compact-group, lem-right-translation-scales-left-haar-measure, prop-compact-discrete-and-abelian-groups-are-unimodular, prop-invariant-measure-on-g-mod-h-iff-modular-functions-agree, thm-integration-against-a-density, thm-lebesgue-measure-is-a-radon-measure-on-rn, thm-uniqueness-of-left-haar-measure-up-to-scale, thm-choice-implies-dependent-implies-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bekka–de la Harpe–Valette, Kazhdan’s Property (T), Appendices B and E"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Chapters 1 and 7"
      url: "https://ncatlab.org/nlab/files/Bruhat-LecturesOnLie.pdf"
    - title: "David Vogan, Unitary Representations of Locally Compact Groups and Induced Representations"
      url: "https://math.mit.edu/~dav/ind.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume AC. In the positive affine group $G=\mathbb R\rtimes\mathbb R_{>0}$ with $(b,a)(b',a')=(b+ab',aa')$, let $H=\{(0,a):a>0\}$. Then $G/H\cong\mathbb R$ has a quasi-invariant Radon measure class but no nonzero $G$-invariant Radon measure.

## Facts & Assumptions

**Given:** AC and the positive affine group and subgroup in the statement.

[F1] Every LCH group admits a nonzero left Haar Radon measure ([[cor-existence-of-left-and-right-haar-measures]]).

[F2] Any two left Haar measures on an LCH group are positive scalar multiples ([[thm-uniqueness-of-left-haar-measure-up-to-scale]]).

[F3] A nonnegative measurable density $w$ defines a measure $w\,d\mu$, with $\int f\,d(w\mu)=\int fw\,d\mu$ ([[def-measure-with-density]], [[thm-integration-against-a-density]]).

[F4] The modular function is characterized by $\int f(xg^{-1})\,d\mu(x)=\Delta_G(g)\int f\,d\mu$ ([[def-modular-function-of-a-locally-compact-group]], [[lem-right-translation-scales-left-haar-measure]]).

[F5] Every abelian LCH group is unimodular ([[prop-compact-discrete-and-abelian-groups-are-unimodular]]).

[F6] A nonzero invariant Radon measure on $G/H$ exists exactly when $\Delta_G|_H=\Delta_H$ ([[prop-invariant-measure-on-g-mod-h-iff-modular-functions-agree]]).

[F7] A left Haar measure is a nonzero Radon measure, finite on compact sets and invariant under left translations ([[def-left-haar-integral-and-left-haar-measure]]).

[F8] Lebesgue measure on $\mathbb R^2$ is Radon under countable choice ([[thm-lebesgue-measure-is-a-radon-measure-on-rn]]).

[A1] AC is assumed as stated in the invariant-measure criterion ([[def-axiom-of-choice]]).

[A2] AC implies countable choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

## Counterexample

**Proof technique:** direct.

1.1 The subgroup $H=\{(0,a):a>0\}$ is closed because it is the zero set of the continuous first-coordinate map, and it is a subgroup by the multiplication law. The map $(b,a)\mapsto b$ is continuous and constant on right $H$-cosets; its fibers are exactly those cosets, since $(b,a)(0,t)=(b,at)$. It therefore descends to a continuous bijection $\bar q:G/H\to\mathbb R$. The inverse $b\mapsto(b,1)H$ is continuous as a composition of the continuous section $b\mapsto(b,1)$ with the quotient map, so $\bar q$ is a homeomorphism. Under this identification the left action of $(b_0,a_0)$ is $T(x)=b_0+a_0x$. Let $m$ be a left Haar Radon measure on $(\mathbb R,+)$, supplied by [F1]. For each such $T$, the measure $\nu_T(E)=m(T^{-1}E)$ on Borel sets is Radon because $T$ is a homeomorphism. It is translation invariant: $T^{-1}(E+u)=T^{-1}(E)+u/a_0$, so left invariance of $m$ applies. Thus [F2] gives $\nu_T=c_Tm$ for some $c_T>0$. Hence every group translate scales $m$ by a positive finite constant, so its null sets are preserved and its Radon measure class is quasi-invariant. [A1, F1, F2, given, construct]

2.1 On the two-dimensional group manifold use the measure $d\mu_G(b,a)=a^{-2}\,db\,da$, defined by the positive continuous density in [F3] relative to two-dimensional Lebesgue measure. By [A1, A2], AC supplies countable choice, so [F8] makes the base measure Radon; the density is bounded above on each compact set, so the weighted measure is locally finite and inherits regularity from the base measure. Left multiplication by $(b_0,a_0)$ sends $(b,a)$ to $(b_0+a_0b,a_0a)$ with Jacobian $a_0^2$; substituting these coordinates gives $a^{-2}db\,da=(a_0a)^{-2}d(b_0+a_0b)\,d(a_0a)$, so $\mu_G$ is left invariant. Therefore it is a left Haar measure by [F7]. For $h=(0,t)\in H$, right multiplication sends $(b,a)$ to $(b,at)$; with $A=at$, $a^{-2}db\,da=tA^{-2}db\,dA$, and hence $\int_G f(xh)\,d\mu_G(x)=t\int_G f(x)\,d\mu_G(x)$ for $f\in C_c(G)$. Applying [F4] to $h^{-1}=(0,t^{-1})$ yields $\Delta_G(0,t)=t^{-1}$. On the other hand [F5] gives $\Delta_H(0,t)=1$, since $H$ is abelian. Taking any $t\ne1$, the modular functions disagree on $H$; [F6] rules out every nonzero invariant Radon measure on $G/H$. ∎ [A1, A2, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, choose, construct]
## Sources

Bekka–de la Harpe–Valette, *Kazhdan’s Property (T)*, Appendix B §B.1, Corollary B.1.7, PDF pp. 355–356. The invariant-measure criterion was checked against the full text; the affine-coordinate calculations are carried out directly here.
