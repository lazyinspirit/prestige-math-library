---
id: thm-author-c5b0693f4fc3-top-torsion-artin-affine
kind: theorem
title: External affine étale vanishing at invertible primes
status: published
domain: mathematics
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Artin affine étale vanishing, as explicitly stated and applied in
        Elmanto’s published Zero cycles report
      url: https://ems.press/content/serial-article-files/52244
      locator: Theorem4 proof, printed1995/PDF47, and affine application
        printed1996/PDF48; cited primary source SGA4 tome3, Exposé XIV
        Corollaire3.2
      hypotheses: Affine finite-type X over an algebraically closed field, ℓ
        invertible, torsion étale coefficients of order prime to characteristic
        (here µ_ℓ^⊗j).
      statement: H^i_et(X,µ_ℓ^⊗j)=0 for i>dim(X).
      reading_limits: Read the exact statement/application in the published report;
        original SGA4 proof not read or reconstructed. The substantial Artin
        result is explicitly imported through this authoritative primary
        application. A Milne EC1.pdf download attempt returned404 and supplies
        no reading credit.
    - title: J.S. Milne, Lectures on Étale Cohomology, version2.21 (22 March2013)
      url: https://www.jmilne.org/math/CourseNotes/LEC.pdf
      locator: Theorem15.1, p.105; nilpotent invariance of the étale category, p.22
      statement: For a variety over an algebraically closed field, cd(X)<=2dim(X), and
        if X is affine cd(X)<=dim(X); nilpotent thickenings do not change the
        etale category.
      hypotheses: Algebraically closed base field, affine finite-type variety;
        nilpotent thickening comparison extends to nonreduced finite-type
        schemes; only invertible-prime torsion coefficients used here.
      reading_limits: Read full Theorem15.1 statement and opening discussion, and the
        full nilpotent-invariance statement p22. Did not reconstruct its
        field/cohomological-dimension proof or claim original SGA4 proof
        reading.
dependency_level: 0
---

## Statement
If $X$ is affine of finite type and dimension $d$ over an algebraically closed field, $\ell$ is invertible on $X$, and $j\geq0$, then
$$H^i_{\acute et}(X,\mu_\ell^{\otimes j})=0\qquad(i>d).$$
No smoothness or reducedness hypothesis is required.

## External input
This is the precise Artin affine étale vanishing input cited as SGA4 XIV Corollary3.2 and used in the published report Theorem4 proof and its affine application. It is imported, not proved here. The twist is an étale torsion local system, so is among the coefficients of Artin's theorem.
