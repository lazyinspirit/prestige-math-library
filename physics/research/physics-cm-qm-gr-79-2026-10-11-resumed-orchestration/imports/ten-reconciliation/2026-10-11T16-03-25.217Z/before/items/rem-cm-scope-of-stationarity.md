---
id: rem-cm-scope-of-stationarity
kind: remark
title: "Scope of stationarity: stationary is not minimum, and no second-variation theory is developed here"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-time-dependent-lagrangian-and-action, thm-cm-stationarity-iff-euler-lagrange]
dependency_roles:
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  thm-cm-stationarity-iff-euler-lagrange: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 5.1 (Introduction to the Calculus of Variations: stationary values versus extrema)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.1 (the remark that the principle of least action is a misnomer: the path may be a minimum or a saddle), printed pages 10-13"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: n/a
---

## Remarks

- Stationarity, as defined in [[def-cm-time-dependent-lagrangian-and-action]] and characterised
  by [[thm-cm-stationarity-iff-euler-lagrange]], is the vanishing of the first variation for all
  fixed-endpoint variations. It is *not* the statement that $q$ minimizes the action, nor that it
  is a local minimum. The companion page exhibits an explicit quadratic model in which a stationary
  curve is not a local minimum: for the Lagrangian $\mathcal L(q,v)=\tfrac12(v^2-4q^2)$ on
  $[0,\pi]$ and the stationary curve $q_*(t)=\sin 2t$, the exact identity
  $S(q_*+\epsilon\sin)-S(q_*)=-\tfrac{3\pi}{4}\epsilon^2$ shows that every nearby element of the
  one-parameter family has strictly smaller action.

- No second variation, and no convexity or coercivity hypothesis, is introduced on this page. The
  Euler–Lagrange equation is a necessary condition for a fixed-endpoint extremum under the stated
  regularity, and the theorem is stated in that direction only; a sufficient condition would
  require additional structure (for instance convexity of the integrand in $(q,v)$), which is not
  developed here.

- The finite-interval chart statements on this page concern $C^2$ data and a fixed interval
  $[a,b]$. They make no claim about minimizers in a Sobolev or absolutely continuous class, about
  broken extremals, or about boundary conditions other than fixed endpoints; those belong to the
  calculus-of-variations development of the mathematical library.
