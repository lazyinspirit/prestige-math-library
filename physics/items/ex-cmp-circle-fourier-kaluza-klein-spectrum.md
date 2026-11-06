---
id: ex-cmp-circle-fourier-kaluza-klein-spectrum
kind: example
title: Normalized Fourier spectrum on a flat Kaluza–Klein circle
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
page: cmp-kaluza-klein-reduction-and-effective-theory-examples
dependency_level: 7
physical_scope: "Exact quadratic spectrum of a free real scalar on flat $(d+1)$-dimensional Minkowski spacetime with one compact spacelike circle. The external field configurations have compact support. No interacting truncation, string winding calculation, warping, or empirical claim is included."
deps:
  - def-cmp-kaluza-klein-reduction-ansatz-and-frames
  - lem-st-c2-periodic-fourier-expansion
dependency_roles:
  def-cmp-kaluza-klein-reduction-ansatz-and-frames: formulation-prerequisite
  lem-st-c2-periodic-fourier-expansion: mathematical-premise
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alex S. Arvanitakis, Olaf Hohm, Chris Hull, and Victor Lekeu, Homotopy Transfer and Effective Field Theory II: Strings and Double Field Theory, arXiv:2106.08343v2"
      url: "https://arxiv.org/pdf/2106.08343v2"
      locator: "§4, PDF pp. 25–29; distinction between toroidal string momentum/winding states and field-mode truncations"
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, University of Cambridge Part III lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§8.1.1, circle compactification from spacetime; scalar Fourier modes and the n²/R² Kaluza–Klein mass contribution"
    - title: "Barton Zwiebach, A First Course in String Theory, second edition, Cambridge University Press, 2009"
      url: "https://pierre.ag.gerard.web.ulb.be/textbooks/books/A_First_Course_In_String_Theory.pdf"
      locator: "§2.7 on compact extra dimensions and §§17.2, 17.6, especially equations (17.42), (17.57), and (17.65), for circle momentum and distinct winding sectors"
---

## Example

Let $M_d=\mathbb R^{1,d-1}$ have the flat Minkowski metric $\eta_d=\operatorname{diag}(-,+,\ldots,+)$, let $D=d+1$, and let $y\sim y+2\pi R$ be a flat spacelike circle of radius $R>0$. Take a real free scalar $\Phi\in C_c^\infty(M_d\times S^1_R,\mathbb R)$ with nonnegative mass parameter $m_0\geq0$ and action
$$S=-\frac12\int_{\mathbb R^{1,d-1}}d^dx\int_0^{2\pi R}dy\left(\eta^{\mu\nu}\partial_\mu\Phi\partial_\nu\Phi+(\partial_y\Phi)^2+m_0^2\Phi^2\right),$$
in units $\hbar=c=1$. Here $[x^\mu]=[y]=[R]=\mathrm{length}$, $[m_0]=(\mathrm{length})^{-1}$, $[\Phi]=(\mathrm{length})^{-(D-2)/2}=(\mathrm{length})^{-(d-1)/2}$, and the normalized basis $u_n(y)=(2\pi R)^{-1/2}e^{iny/R}$ has dimension $(\mathrm{length})^{-1/2}$. The mode coefficient $\phi_n$ therefore has dimension $(\mathrm{length})^{-(d-2)/2}$, making $S$ dimensionless. Set
$$\Phi(x,y)=\sum_{n\in\mathbb Z}\phi_n(x)u_n(y),\qquad \phi_n(x)=\int_0^{2\pi R}dy\,u_n(y)^*\Phi(x,y).$$
Then $\int_0^{2\pi R}u_n^*u_m\,dy=\delta_{nm}$, reality gives $\phi_{-n}=\overline{\phi_n}$, and the quadratic action is
$$S=-\frac12\int_{\mathbb R^{1,d-1}}d^dx\sum_{n\in\mathbb Z}\left(\eta^{\mu\nu}\partial_\mu\phi_n\partial_\nu\phi_{-n}+(m_0^2+n^2/R^2)\phi_n\phi_{-n}\right).$$
Thus the free mode masses obey $m_n^2=m_0^2+n^2/R^2$. The $n$ and $-n$ coefficients are conjugates and represent two real fields for each $n>0$, not two independent complex scalars. This exact quadratic calculation does not assert that discarding nonzero modes is an interacting consistent truncation or that field momentum modes include string winding states.

## Example references

[[def-cmp-kaluza-klein-reduction-ansatz-and-frames]]

[[lem-st-c2-periodic-fourier-expansion]]

## Facts & Assumptions

**Given:** Fixed unwarped product $M_d\times S^1_R$, $R>0$, and the real scalar action displayed in the statement.

[F1] [[def-cmp-kaluza-klein-reduction-ansatz-and-frames]]: a product metric and coordinate period are declared ansatz data. The particular flat circle here is a model specialization.

[F2] [[lem-st-c2-periodic-fourier-expansion]]: for every $C^2$ $2\pi$-periodic function, normalized Fourier exponentials are orthonormal, the Fourier series reconstructs it absolutely and uniformly, and the symmetric derivative partial sums converge in normalized $L^2$. Applied to $f_x(\theta)=\Phi(x,R\theta)$ and its external derivatives, this justifies the mode expansion and the quadratic circle integrals.

[A1] The field and all its external derivatives are smooth and compactly supported in $x$, so the external action integral is finite. For each fixed $x$, the field and its external derivatives are smooth periodic functions of $y$; the Fourier lemma's $C^2$ and $L^2$ conclusions justify the circle expansions and quadratic integrals. Circle integrations are exact and have no boundary term by periodicity. The mass-squared parameter satisfies $m_0^2\geq0$.

## Verification

1.1  Rescale $\theta=y/R$. Then $f_x(\theta)=\Phi(x,R\theta)$ is $2\pi$-periodic, and its Fourier coefficient is
$$c_n(x)=\frac1{2\pi}\int_0^{2\pi}f_x(\theta)e^{-in\theta}d\theta =\frac1{2\pi R}\int_0^{2\pi R}\Phi(x,y)e^{-iny/R}dy =\frac{\phi_n(x)}{\sqrt{2\pi R}}.$$
Thus [F2] yields precisely $\Phi=(2\pi R)^{-1/2}\sum_n\phi_ne^{iny/R}$. Also, for integers $n,m$, direct integration gives
$$\int_0^{2\pi R}u_n^*u_mdy=\frac1{2\pi R}\int_0^{2\pi R}e^{i(m-n)y/R}dy=\delta_{nm},$$
because the integral is $2\pi R$ when $m=n$ and otherwise its antiderivative has equal endpoint values. [given, F2, A1, algebra]

2.1  Since $\Phi$ is real, conjugating its coefficient integral gives $\overline{\phi_n}=\int u_n\Phi dy=\phi_{-n}$. The same orthogonality gives the nonconjugated identity $\int u_nu_mdy=\delta_{n,-m}$. Substituting the Fourier expansion into the external kinetic and mass terms therefore pairs modes $n$ and $-n$ as $\partial\phi_n\partial\phi_{-n}$ and $m_0^2\phi_n\phi_{-n}$. [given, F2, A1, step 1.1, algebra]

3.1  Differentiating $u_n$ gives $\partial_yu_n=(in/R)u_n$. Hence
$$\int_0^{2\pi R}(\partial_y\Phi)^2dy =\sum_{n,m}\phi_n\phi_m\frac{in}{R}\frac{im}{R}\int_0^{2\pi R}u_nu_mdy =\sum_n\frac{n^2}{R^2}\phi_n\phi_{-n},$$
where $m=-n$ in each surviving term. This proves the stated action and mass formula. [given, A1, step 2.1, algebra]

4.1  For $n>0$ write $\phi_n=(a_n+ib_n)/\sqrt2$ and $\phi_{-n}=(a_n-ib_n)/\sqrt2$ with real $a_n,b_n$. The two terms indexed by $n$ and $-n$ in the full sum, including its overall $1/2$, combine to the canonical kinetic and mass terms for $a_n$ and $b_n$ once; the zero mode $\phi_0$ is real and appears once. This verifies that the complex sum does not double-count independent degrees of freedom. [given, A1, step 2.1, step 3.1, algebra]

5.1  The calculation used only the free quadratic operator. A nonlinear interaction can multiply retained harmonics and source omitted harmonics, while string winding states are separate string sectors rather than Fourier components of this scalar field. Therefore the mass eigenvalues alone imply neither consistent truncation nor a winding spectrum. [given, F1, A1, step 3.1, algebra] ∎
