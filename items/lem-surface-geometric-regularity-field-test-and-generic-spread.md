---
id: lem-surface-geometric-regularity-field-test-and-generic-spread
kind: lemma
title: Surface geometric regularity field test and generic spread
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
- def-axiom-of-choice
- def-dependent-choice
- lem-ag-standard-smooth-flatness
- lem-ag-standard-smooth-regular-geometric-fibres
- lem-flat-local-ascent-of-regularity
- thm-localisation-and-polynomial-extension-of-regular-rings
- thm-primitive-element-theorem-for-finite-separable-extensions
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'The Stacks Project: full proof imports for normal-surface resolution, lemma-make-separably-generated,
      lemma-geometrically-regular, lemma-geometrically-regular-descent'
    url: https://stacks.math.columbia.edu/download/algebra.pdf
  - title: Stacks Lemmas 10.42.4 (04KM) and 10.166.1 (0381), field enlargement and field test
    url: https://stacks.math.columbia.edu/tag/0381
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. For a Noetherian $k$-algebra $T$, call $T$ geometrically regular if $T\otimes_kE$ is regular for every finitely generated field extension $E/k$. It suffices to test finite purely inseparable $E/k$. Geometric regularity is stable under finitely generated field extension. If $K/k$ is finitely generated, finite purely inseparable enlargements $K'/K$ and $k'/k$ make $K'/k'$ separably generated. A separably generated generic fraction-field extension of finite-type domains spreads to a nonempty standard smooth open after localizing the base and source.

## Facts & Assumptions

**Given:** A Noetherian $k$-algebra $T$ (the ring to be tested) and a finitely generated field extension $K/k$ of finite-type domains used in the spread.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F3] *lem-ag-standard-smooth-flatness.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R$ be a commutative ring and let $S$ be a standard smooth $R$-algebra (def-ag-standard-smooth-algebra), so that $S\cong\bigl(R[x_1,\dots,x_n]/(f_1,\dots,f_c)\bigr)_g$ for some $n\ge c\ge0$, some $f_1,\dots,f_c,g\in R[x_1,\dots,x_n]$, and with the leading $c\times c$ Jacobian minor  ([[lem-ag-standard-smooth-flatness]])

[F4] *lem-ag-standard-smooth-regular-geometric-fibres.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R$ be a commutative ring and let $S$ be a standard smooth $R$-algebra (def-ag-standard-smooth-algebra), presented as $S\cong\bigl(R[x_1,\dots,x_n]/(f_1,\dots,f_c)\bigr)_g$ with leading $c\times c$ Jacobian minor $h$ mapping to a unit of $S$. ([[lem-ag-standard-smooth-regular-geometric-fibres]])

[F5] *lem-flat-local-ascent-of-regularity.* Assume the Axiom of Choice. For a flat local map $(R,\mathfrak m)\to(S,\mathfrak n)$ of nonzero Noetherian local rings: if $R$ and $S/\mathfrak mS$ are regular, then $S$ is regular. Conversely, regularity of $S$ implies regularity of $R$. ([[lem-flat-local-ascent-of-regularity]])

[F6] *thm-localisation-and-polynomial-extension-of-regular-rings.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Localizations and finite polynomial extensions of a commutative regular Noetherian ring are regular. Regularity can equivalently be tested at maximal ideals. For every nonzero such ring, $\operatorname{gldim}R=\dim R$, allowing infinity. ([[thm-localisation-and-polynomial-extension-of-regular-rings]])

[F7] *thm-primitive-element-theorem-for-finite-separable-extensions.* Let $E=F(\alpha_1,\ldots,\alpha_r)$ be a finite extension. If all but possibly one of the generators are separable over $F$, then $E/F$ is simple. In particular, every finite separable extension is simple. ([[thm-primitive-element-theorem-for-finite-separable-extensions]])

## Proof

1.1 In characteristic $p>0$, choose a transcendence basis $y$ for $K/k$ and let $M$ be the maximal separable subextension of the finite extension $K/k(y)$. If $K\ne M$, choose $\beta\in K\setminus M$ with $\alpha=\beta^p\in M$. Adjoin to $k$ the $p$th roots of the finitely many coefficients occurring in the numerator and denominator polynomials of the coefficients of the separable minimal polynomial of $\alpha$ over $k(y)$, and adjoin $y^{1/p}$ to the upper field. This gives finite purely inseparable enlargements. In the separable compositum, that polynomial has $p$th-power coefficients; taking their roots gives a separable polynomial for a root whose $p$th power is $\alpha$. Uniqueness of a $p$th root in a field puts $\beta$ in the enlarged separable subfield. Thus the remaining inseparable degree strictly decreases. Induction makes the upper extension separably generated; characteristic zero needs no enlargement. [F1, F7, given, algebra]

1.2 A separably generated field extension $E/k$ is finite separable over $k(y)$ for a separating transcendence basis $y$. By the primitive-element theorem write $E=k(y)(\theta)$. Clear the coefficients of its monic minimal polynomial by localizing $k[y]$, and invert its nonzero derivative at $\theta$; this gives a standard smooth domain with fraction field $E$. For a finite-type domain map $R\to C$ whose fraction-field extension is separably generated, the same construction is over $R$ after inverting finitely many nonzero base elements. The resulting smooth algebra and $C$ have the same fraction field and agree after further localization: express each finite generating family rationally in the other and invert all the denominators. This supplies a nonempty standard smooth source open over a localized base. [F3, F4, F7, construct]

2.1 Suppose $T\otimes_k k'$ is regular for every finite purely inseparable $k'/k$. Given a finitely generated $E/k$, step 1.1 gives finite purely inseparable $k'/k$ and $E'/E$ with $E'/k'$ separably generated. Choose the standard smooth model of $E'/k'$ from step 1.2. Its base change to the regular ring $T\otimes_k k'$ is flat with regular geometric fibres by [F3] and [F4]; [F5] makes it regular locally. Localizing to its fraction field gives regularity of $T\otimes_k E'$. [F3, F4, F5, F6, step 1.1, step 1.2]

3.1 The map $T\otimes_k E\to T\otimes_k E'$ is faithfully flat. At every prime of the source choose a prime above it; [F5] descends regularity of the corresponding target local ring, so $T\otimes_k E$ is regular. This proves sufficiency of the purely inseparable test; necessity follows because such extensions are finitely generated. [F5, step 2.1]

4.1 If $T$ is geometrically regular and $E/k$ is finitely generated, then every finitely generated extension $F/E$ is finitely generated over $k$. Hence $(T\otimes_k E)\otimes_E F=T\otimes_k F$ is regular, proving stability under the stated field extensions. The generic-spread assertion is step 1.2. [given, step 1.2, step 3.1]

5.1 AC is inherited from the cited regularity and basis suppliers; the finite inseparable induction and the denominator choices introduce no additional choice hypothesis. [F1, step 4.1] ∎

## Remarks

- The two halves of the item are the field-theoretic preparation (finite purely inseparable enlargement making the extension separably generated) and the algebraic spreading of a separably generated generic extension to a standard smooth open.
- Only finitely many coefficients and denominators are adjusted in step 1.1, which is why the enlargement can be taken finite.
