---
id: def-blowup-fractional-ideal
kind: definition
title: "Invariance of the blowup under invertible (fractional) rescaling of the ideal"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-blowup-scheme-along-ideal
  - def-relative-proj-quasi-coherent-graded-algebra
  - def-rees-algebra-ideal-sheaf
  - def-invertible-sheaf
  - def-cartier-divisor
  - def-effective-cartier-divisor
  - def-rational-section-line-bundle
  - def-integral-scheme
  - lem-blowup-local-on-base-scheme
  - def-axiom-of-choice
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Lemmas 31.33.7 and 31.33.12, Cartier centers and product blowups; fractional rescaling is proved degreewise here"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "Exercise 19.4.G on nonreduced centers, p. 392, and the discussion of the blow-up of an ideal up to invertible rescaling"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-2.md"
      - "research/frontier-38-owner-30-alpha-batch-2-5a.md"
      - "research/frontier-38-owner-30-step5-hash-2-post.json"
    reviewed_raw_sha256: "5cd2918f14c724ded3b91d88585c4417ed4c64e9c24e1e87f96b529876cc66b1"
    content_sha256: "50602967265eabd5823b06b39c0dc5dede3f83f7ed6613a494b5895575f2869b"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Definition

Assume the Axiom of Choice. Let $X$ be integral, let $\mathcal I\subseteq
\mathcal O_X$ be a quasi-coherent ideal of finite type, and let
$J\subseteq\mathcal K_X$ be an invertible fractional ideal. Its product
$F=J\mathcal I$ is a subsheaf of $\mathcal K_X$; it need not be contained in
$\mathcal O_X$. Define its **fractional Rees algebra** and blowup by
$$\mathcal R(F)=\bigoplus_{n\ge0}F^n,\qquad F^0=\mathcal O_X, \qquad \operatorname{Bl}_{F}X=\operatorname{Proj}_X\mathcal R(F).$$
Here $F^n\cong J^{\otimes n}\otimes\mathcal I^n$, with multiplication induced
inside $\mathcal K_X$, so the algebra is quasi-coherent and generated in degree
one. When $F\subseteq\mathcal O_X$, this is the ordinary ideal blowup of
[[def-blowup-scheme-along-ideal]].

On a nonempty affine open $U=\operatorname{Spec}A$ trivializing $J$, choose
$g\in\operatorname{Frac}(A)^\times$ with $J|_U=gA$. Multiplication by $g^n$
is an $A$-module isomorphism $I^n\to(gI)^n$ for every $n$, with inverse division
by $g^n$. These maps respect multiplication and give a graded algebra
isomorphism $R(I)\to R(gI)$. The inverse of its contravariantly induced Proj
map defines
$$\rho_{\mathcal I,J}|_U:\operatorname{Bl}_{\mathcal I}U \longrightarrow\operatorname{Bl}_{J\mathcal I}U.$$
No assertion that $g\in A$ is needed.

Replacing $g$ by $ug$, $u\in A^\times$, changes the degree-$n$ map by $u^n$.
This automorphism induces the identity on Proj: on any homogeneous
localization, numerator and denominator of a degree-zero fraction acquire the
same power of $u$, which cancels. Thus the local maps agree on overlaps and
glue to a canonical isomorphism of $X$-schemes
$$\rho_{\mathcal I,J}:\operatorname{Bl}_{\mathcal I}X \xrightarrow{\sim}\operatorname{Bl}_{J\mathcal I}X.$$
Division by $g^n$ gives its inverse, including when the original ideal is zero
and both blowups are empty. This construction uses relative Proj and is
compatible with restriction to opens.

## Remarks

An invertible sheaf $L$ on an integral scheme can be realized as an invertible
fractional ideal by choosing a nonzero basis of its generic fiber: local
sections inject into that fiber, since locally $L$ is free and the coordinate
rings are domains. Consequently the algebra
$\bigoplus_{n\ge0}\mathcal I^n\otimes L^{\otimes n}$ has the same relative
Proj as $\mathcal R(\mathcal I)$. In particular one may use an ample twist
that makes $\mathcal I\otimes L$ globally generated, without treating that
sheaf as an ordinary ideal. For $J=(1/x)$ and $\mathcal I=\mathcal O$
on an affine domain containing a nonunit $x$, the product is fractional,
illustrating why the distinction is necessary.

The ordinary effective Cartier rescaling also works without integrality of $X$. For any scheme $X$, a quasi-coherent ideal $\mathcal I$ and an effective Cartier divisor with ideal $J$ ([[def-effective-cartier-divisor]]), use here the Rees Proj $\operatorname{Proj}_X(\bigoplus_{n\ge0}\mathcal I^n)$ even if $\mathcal I$ is not of finite type: ideal powers commute with affine localization, so this is a quasi-coherent graded algebra to which [[def-relative-proj-quasi-coherent-graded-algebra]] applies. Write $J=g\mathcal O$ locally, where $g$ is a nonzerodivisor. Multiplication by $g^n$ is an isomorphism $I^n\to g^nI^n$ in every degree, with inverse on its image, so it gives a graded Rees algebra isomorphism and a local blowup isomorphism. On overlaps $g$ changes by a unit; the same degree-zero cancellation proves that these isomorphisms glue canonically to $\operatorname{Bl}_{\mathcal I}X\cong\operatorname{Bl}_{J\mathcal I}X$. Thus multiplying the center ideal by an effective Cartier ideal leaves the blowup scheme canonically unchanged on arbitrary $X$, including $I=0$. This assertion concerns the blowup object; the center and the open complement used to define a strict transform may change.
