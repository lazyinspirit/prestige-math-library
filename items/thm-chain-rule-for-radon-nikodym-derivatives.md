---
id: thm-chain-rule-for-radon-nikodym-derivatives
kind: theorem
title: "Radon-Nikodym derivatives satisfy the chain rule along nu << mu << lambda"
status: draft
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-finite-complex-measures-admit-integrable-radon-nikodym-densities, def-radon-nikodym-derivative, prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures, thm-absolute-continuity-is-equivalent-for-a-signed-or-complex-measure-its-variation-and-its-jordan-data, thm-integration-against-a-density, thm-jordan-decomposition-for-signed-measures, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 13.8"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "John K. Hunter, Measure Theory, §6.8"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $\lambda$ and $\mu$ be sigma-finite positive measures and let $\nu$ be a
signed measure or a finite complex measure on the same measurable space.
Assume there is an increasing measurable exhaustion $(X_n)_{n\in\mathbb N}$
with $\bigcup_nX_n=X$, $\lambda(X_n)<+\infty$, $\mu(X_n)<+\infty$, and
$|\nu|(X_n)<+\infty$ for every $n$, and assume $\nu\ll\mu\ll\lambda$. Then
$$\frac{d\nu}{d\lambda}=\frac{d\nu}{d\mu}\frac{d\mu}{d\lambda}\qquad\lambda\text{-almost everywhere.}$$

## Facts & Assumptions

**Given:** Measures $\lambda,\mu,\nu$ with the common finite-exhaustion hypothesis and $\nu\ll\mu\ll\lambda$.

[L1] A nonnegative density composes through another density: if $\eta(E)=\int_E h\,d\mu$ and $\mu(E)=\int_E k\,d\lambda$ with $h,k\ge0$, then $\eta(E)=\int_E hk\,d\lambda$. ([[thm-integration-against-a-density]])

[L2] The Radon-Nikodym density is unique up to almost-everywhere equality. ([[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]])

[L3] If a signed measure is absolutely continuous with respect to $\mu$, then its Jordan parts are too. ([[thm-absolute-continuity-is-equivalent-for-a-signed-or-complex-measure-its-variation-and-its-jordan-data]])

[L4] Jordan decomposition writes a signed measure as $\nu=\nu^+-\nu^-$. ([[thm-jordan-decomposition-for-signed-measures]])

[L5] The real and imaginary parts of a finite complex measure are finite signed measures. ([[prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures]])

## Proof

**Proof technique:** direct.

1.1 First assume that $\nu$ is a positive measure. Choose the nonnegative representatives $h$ of $d\nu/d\mu$ and $k$ of $d\mu/d\lambda$ furnished by the positive-measure case of the Radon-Nikodym theorem. For every measurable set $E$, that theorem gives $$\nu(E)=\int_E h\,d\mu,\qquad \mu(E)=\int_E k\,d\lambda.$$ Applying [L1] to the nonnegative density $h$ therefore yields $$\nu(E)=\int_E hk\,d\lambda\qquad(E\in\mathcal A).$$ Hence [L2] gives $d\nu/d\lambda=hk$ $\lambda$-almost everywhere in the positive case. [L1, L2, choose]

2.1 Now assume that $\nu$ is a signed measure. By [L4], write $\nu=\nu^+-\nu^-$. Because $\nu\ll\mu$, [L3] gives $\nu^\pm\ll\mu$. Apply step 1.1 to $\nu^+$ and $\nu^-$ separately to obtain nonnegative representatives $h^+,h^-$ with $$\frac{d\nu^+}{d\lambda}=h^+k,\qquad \frac{d\nu^-}{d\lambda}=h^-k\qquad\lambda\text{-almost everywhere.}$$ Then $h:=h^+-h^-$ represents $d\nu/d\mu$, while $(h^+-h^-)k$ represents $d\nu/d\lambda$. Uniqueness from [L2] therefore gives $$\frac{d\nu}{d\lambda}=hk=\frac{d\nu}{d\mu}\frac{d\mu}{d\lambda}\qquad\lambda\text{-almost everywhere.}$$ [L2, L3, L4, step 1.1, algebra]

3.1 Finally assume that $\nu$ is a finite complex measure, and choose a representative $h=u+iv$ of $d\nu/d\mu$. By [L5], the finite signed measures $\operatorname{Re}\nu$ and $\operatorname{Im}\nu$ are both absolutely continuous with respect to $\mu$, and the measurable-set identity for $h$ shows that $u$ and $v$ represent $d(\operatorname{Re}\nu)/d\mu$ and $d(\operatorname{Im}\nu)/d\mu$. Applying step 2.1 to those signed measures gives $$\frac{d(\operatorname{Re}\nu)}{d\lambda}=u\frac{d\mu}{d\lambda},\qquad \frac{d(\operatorname{Im}\nu)}{d\lambda}=v\frac{d\mu}{d\lambda}\qquad\lambda\text{-almost everywhere.}$$ Therefore, for every measurable set $E$, $$\nu(E)=\operatorname{Re}\nu(E)+i\,\operatorname{Im}\nu(E)=\int_Eu\frac{d\mu}{d\lambda}\,d\lambda+i\int_Ev\frac{d\mu}{d\lambda}\,d\lambda=\int_Eh\frac{d\mu}{d\lambda}\,d\lambda.$$ So $h(d\mu/d\lambda)$ represents $d\nu/d\lambda$, and [L2] yields $$\frac{d\nu}{d\lambda}=h\frac{d\mu}{d\lambda}=\frac{d\nu}{d\mu}\frac{d\mu}{d\lambda}\qquad\lambda\text{-almost everywhere.}$$ [L2, L5, step 2.1, choose, algebra] ∎
