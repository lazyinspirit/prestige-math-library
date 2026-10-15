---
id: lem-emg-conformal-hodge-multiplier
kind: lemma
title: "Conformal Hodge scaling in every degree"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-countable-choice, def-emg-lorentzian-forms, lem-emg-lorentz-hodge-calculus]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, section 3.1.3, The Hodge Dual, equations (3.97)-(3.98)"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html"
      locator: "Section 3.1.3, equations (3.97)-(3.98): Hodge star defined by the metric and oriented volume; the conformal multiplier is derived locally in the item."
    - title: "H. S. Reall, Part III General Relativity, Cambridge, October 12 2022 revision, section 8.5, equations (8.52)-(8.56)"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "Section 8.5, equations (8.52)-(8.56): metric volume and Hodge star in Lorentzian signature; the all-degree conformal scaling is derived locally."
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

Let $(M,g,N,o)$ be as in [[def-emg-lorentzian-forms]], let $\Omega:M\to(0,\infty)$ be a smooth dimensionless function, and set $\widetilde g=\Omega^2g$ with the same orientation $o$. For every smooth $k$-form $\beta$, $0\le k\le4$,

$$\star_{\widetilde g}\beta=\Omega^{4-2k}\star_g\beta.$$

In degree $2$ the Hodge star is unchanged. This is a statement about the Hodge operators of two conformally related Lorentz metrics; it asserts no conformal invariance of any curvature or field equation.

## Facts & Assumptions

**Given:** The oriented four-dimensional Lorentzian manifold, a smooth positive function $\Omega$, and a smooth $k$-form $\beta$.

[F1] The Hodge star is uniquely characterized by $\alpha\wedge\star_g\beta=\langle\alpha,\beta\rangle_g\mathrm{vol}_g$ for all $k$-forms $\alpha,\beta$. ([[lem-emg-lorentz-hodge-calculus]])

[A1] The smooth tangent-bundle background inherits $\mathrm{AC}_\omega$ from [[def-countable-choice]]; the pointwise scaling calculation below is finite-dimensional and uses no full Choice.

## Proof

1.1 On the inherited smooth manifold background [A1], since $\widetilde g=\Omega^2g$ and $\Omega>0$, its inverse is $\widetilde g^{-1}=\Omega^{-2}g^{-1}$. The exterior pairing of two $k$-forms contains exactly $k$ inverse-metric factors, so $\langle\alpha,\beta\rangle_{\widetilde g}=\Omega^{-2k}\langle\alpha,\beta\rangle_g$. In a positively oriented chart, $\det(\widetilde g_{ab})=\Omega^8\det(g_{ab})$; therefore the metric volume form scales as $\mathrm{vol}_{\widetilde g}=\Omega^4\mathrm{vol}_g$. [given, F1, A1, algebra]

2.1 Applying the defining identity in [F1] with $\widetilde g$ in place of $g$ and substituting step 1.1 gives, for every $k$-form $\alpha$, $\alpha\wedge\star_{\widetilde g}\beta=\Omega^{-2k}\langle\alpha,\beta\rangle_g\,\Omega^4\mathrm{vol}_g=\alpha\wedge\bigl(\Omega^{4-2k}\star_g\beta\bigr)$. For $k=0,1,2,3,4$ the multipliers are respectively $\Omega^4,\Omega^2,1,\Omega^{-2},\Omega^{-4}$, all smooth because $\Omega$ is smooth and positive. Thus the candidate is a smooth bundle map satisfying the defining identity for $\star_{\widetilde g}\beta$; uniqueness in [F1] gives $\star_{\widetilde g}\beta=\Omega^{4-2k}\star_g\beta$. [step 1.1, F1, algebra] ∎
