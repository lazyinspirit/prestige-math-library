---
page: fourier-multipliers-and-sobolev-characterisations-examples
title: "Fourier Multipliers and Sobolev Characterisations — Examples"
status: draft
items: []
examples: [ex-heat-and-poisson-semigroups-as-fourier-multipliers,
           ex-translation-and-differentiation-multiplier-symbols,
           rem-fefferman-ball-multiplier-obstruction,
           rem-jump-multipliers-can-be-bounded-outside-mihlin,
           ex-negative-sobolev-order-containing-a-dirac-mass]
---

These examples and recorded leaves exercise the multiplier and Sobolev
conventions of the companion page, all in the negative-sign $2\pi$
normalization with complex scalars and Countable Choice as declared on the
individual items.

The heat semigroup multiplies the Fourier transform by $e^{-4\pi^2t|\xi|^2}$
and the Poisson semigroup by $e^{-2\pi t|\xi|}$; both are bounded $L^2$
multiplier extensions with norm one, compose as semigroups, and solve their
distributional evolution equations for $t>0$. Translation has the unimodular
symbol $e^{-2\pi ia\cdot\xi}$ and so extends to an $L^2$ isometry, whereas the
distributional derivative $\partial_j$ has the unbounded symbol
$2\pi i\xi_j$; explicit frequency-localized bumps show that no bounded $L^2$
extension exists, which is the sharp contrast between bounded and unbounded
multiplier symbols.

Two recorded leaves are orientation only and are not proved here. The ball
indicator is an $L^2$ multiplier of norm one, but Fefferman's theorem records
that for $n\ge2$ it is an $L^p$ multiplier only at $p=2$; and the shifted
signum symbol $\operatorname{sgn}(\xi-1)$ is a bounded jump multiplier on
$\mathbb R$ outside the punctured-domain Mihlin class, its $L^p$ bound for
$1<p<\infty$ being the Hilbert-transform theorem deferred to the later
singular-integral page. Neither leaf is used as a supplier anywhere.

The final example evaluates the weighted Fourier criterion at a Dirac mass:
since $\mathcal F\delta_0=1$, the membership $\delta_0\in H^s(\mathbb R^n)$
is equivalent to the finiteness of $\int_{\mathbb R^n}\langle\xi\rangle^{2s}
\,d\xi$, which polar coordinates reduce to a real $p$-series block
comparison. The outcome is the strict criterion
$\delta_0\in H^s\Longleftrightarrow s<-n/2$, with the borderline
$s=-n/2$ failing through the logarithmic divergence of
$\int_1^R r^{-1}\,dr$.
