---
id: thm-r2-conifold-dual-period-logarithm
kind: theorem
title: "Logarithmic dual period near a conifold degeneration"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 4
deps:
  - def-r2-conifold-smoothing-and-period-conventions
  - def-gts-polarized-variation-of-hodge-structure-and-period-map
  - thm-gts-gaussmanin-connection-and-griffiths-transversality
  - lem-r2-standard-conifold-residue-periods
  - lem-r2-conifold-period-normalization
  - lem-r2-conifold-dual-cycle-monodromy
  - thm-removable-singularity-characterizations
dependency_roles:
  def-r2-conifold-smoothing-and-period-conventions: mathematical-premise
  def-gts-polarized-variation-of-hodge-structure-and-period-map: mathematical-premise
  thm-gts-gaussmanin-connection-and-griffiths-transversality: mathematical-premise
  lem-r2-standard-conifold-residue-periods: mathematical-premise
  lem-r2-conifold-period-normalization: mathematical-premise
  lem-r2-conifold-dual-cycle-monodromy: mathematical-premise
  thm-removable-singularity-characterizations: mathematical-premise
physical_scope: null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, hep-th/0105097v2, §3, equations (3.3), (3.8)–(3.9)"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
      locator: "§3, equations (3.3), (3.8)–(3.9), PDF pp. 16–17; coefficient statement and period normalization; no analytic proof is supplied."
    - title: "Hossein Movasati, A Course in Hodge Theory With Emphasis on Multiple Integrals, §§6.4–6.6"
      url: "https://w3.impa.br/~hossein/myarticles/hodgetheory.pdf"
      locator: "§§6.4–6.6, printed pp. 71–75; full vanishing-thimble and meridian convention, with the general PL proof referred to another source."
---

## Statement

For the one-node smoothing and cycle/holomorphic-form conventions of R2-CONIFOLD-DEF-001, the dual period has the form integral_(B_z) Omega_z=(z/(2 pi i)) log z+f(z), where f is holomorphic at z=0 on the chosen branch. The coefficient is fixed by the Picard–Lefschetz monodromy and the intersection pairing; changing the branch or cycle orientations changes only the corresponding integral-period convention.

## Facts & Assumptions

**Given:** The normalized compact one-node family and oriented cycles of [[def-r2-conifold-smoothing-and-period-conventions]], over a disk $|z|<\epsilon$ with $z=0$ the only singular parameter.

[F1] [[def-r2-conifold-smoothing-and-period-conventions]]: $\int_{A_z}\Omega_z=z$; outside a local ODP neighborhood the family and form extend smoothly and holomorphically across zero, with the dual cycle represented by the local relative chain plus a fixed flat cap.

[F2] [[def-gts-polarized-variation-of-hodge-structure-and-period-map]]: homology classes form a flat integral local system over the smooth base and their periods are the pairings with the holomorphic relative form.

[F3] [[thm-gts-gaussmanin-connection-and-griffiths-transversality]]: for a smooth proper holomorphic submersion with compact Kähler fibers, locally constant Hodge numbers and the stated relative de Rham base-change hypotheses, the Gauss–Manin connection is flat and the Hodge filtration is holomorphic.

[F4] [[lem-r2-standard-conifold-residue-periods]]: the local standard dual-chain integral has a logarithmic term whose coefficient equals the vanishing period divided by $2\pi i$.

[F5] [[lem-r2-conifold-period-normalization]]: the normalized local form is a holomorphic unit times the standard residue, so its local coefficient is bounded on compact subsets of the local chart.

[F6] [[lem-r2-conifold-dual-cycle-monodromy]]: a positive meridian fixes $A$ and sends $B$ to $B+A$ in the declared pairing convention.

[F7] [[thm-removable-singularity-characterizations]]: a bounded holomorphic function on a punctured disk extends holomorphically across its center.

[A1] Choose a slit disk $0<|z|<\epsilon$ cut along the negative real ray, with $\log z$ real for positive $z$. The local relative chain is represented by the standard $B_R^{\rm loc}$ in this chart, and its cap period is holomorphic at zero by [F1]. The family on the punctured disk satisfies the polarization, locally constant Hodge-number, locally free relative-filtration and base-change hypotheses of [F3], as stipulated in [F1].

## Proof

**Given:** The family, normalized holomorphic three-form, flat cycles and branch in [F1]–[A1].

1.1 Restrict the compact family to the punctured disk. By [A1] it is a smooth proper holomorphic submersion and satisfies every additional hypothesis in [F3]. The relative form gives a holomorphic section of $F^3$; in a local flat frame the coefficients of this section are holomorphic by [F3], while a flat cycle has constant dual coordinates. Their pairing $\Pi_B(z):=\int_{B_z}\Omega_z$ is therefore holomorphic on the punctured disk. [F1, F2, F3, A1]

1.2 On the slit disk, write the local form as $H(w,z)\omega_z$, with $H$ holomorphic and bounded on a fixed compact local chart. The residue and relative-chain parameterization are given by [F4]. Set $s:=|z|$ and use $|z+r^2|\ge|s-r^2|$. For $s<R^2/4$, split the integral at $r=\sqrt{s/2}$ and $r=\sqrt{2s}$. On the first interval, $|s-r^2|\ge s/2$, so the integral of $r^2/\sqrt{|z+r^2|}$ is at most a constant times $s$. On the middle interval, substitute $r=\sqrt{s}\,u$; the bound is $s\int_{1/\sqrt2}^{\sqrt2}u^2/\sqrt{|1-u^2|}\,du$, a finite constant times $s$ because the singularity at $u=1$ is integrable. On the last interval, $|s-r^2|\ge r^2/2$, so the integrand is at most $\sqrt2 r$ and its integral is at most $R^2/\sqrt2$. Thus the local-chain period is uniformly bounded as $z\to0$ throughout the slit disk. The cap period is holomorphic at zero by [A1], so $\Pi_B$ is bounded there. [F1, F4, F5, A1, algebra]

1.3 After a positive loop, [F6] gives $\Pi_B\mapsto\Pi_B+\int_A\Omega=\Pi_B+z$, whereas $z$ returns to itself and $\log z$ increases by $2\pi i$. Therefore $G(z):=\Pi_B(z)-\frac{z}{2\pi i}\log z$ is single-valued and holomorphic on the punctured disk. [F1, F2, F6, given, algebra]

2.1 Since $z\log z\to0$ at the origin and $\Pi_B$ is bounded on a fundamental slit sector, the single-valued function $G$ is bounded near zero. By [F7], it extends holomorphically to $z=0$. Calling that extension $f$ gives $\Pi_B(z)=\frac{z}{2\pi i}\log z+f(z)$ on the chosen branch. [F7, step 1.2, step 1.3, algebra] ∎

## Remarks

Giddings–Kachru–Polchinski state this formula in §3, equation (3.9), without deriving the analytic continuation or holomorphic remainder. The proof here gets the coefficient from the explicit one-node monodromy and obtains holomorphicity of the remainder from a local integrable bound and the removable-singularity theorem. It does not use the separate GTS nilpotent-orbit/limiting-MHS supplier, whose current proof remains escalated and whose conclusion is stronger than required here. The formula concerns a chosen local compact gluing; it is not evidence that an arbitrary local conifold admits such a compactification.

