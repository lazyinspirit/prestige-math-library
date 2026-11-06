---
id: rem-cmp4-moduli-stabilization-alternatives-and-status
kind: remark
title: Alternative stabilization and uplift families with model-specific status
status: published
origin: pipeline
domain: physics
library: physics
category: string-theory
page: cmp-stabilization-control-frontier
dependency_level: 0
deps: []
dependency_roles: {}
physical_scope: "A scope map of named four-dimensional N=1 effective-field-theory mechanisms for moduli stabilization or uplift in string compactifications. It asserts neither a common microscopic string realization nor a universal existence or no-go theorem."
sources:
  references:
    - title: "Arthur Hebecker, Naturalness, String Landscape and Multiverse: A Modern Introduction with Exercises, Springer book author version v5, arXiv:2008.10625v5"
      url: "https://arxiv.org/pdf/2008.10625v5"
      locator: "§§6.4–6.6 and §8.5, printed pp. 166–176 and 228–230. Independent pedagogical treatment of KKLT, LVS, uplift assumptions, and de Sitter status."
    - title: "Liam McAllister and Fernando Quevedo, Moduli Stabilization in String Theory, arXiv:2310.20559v1"
      url: "https://arxiv.org/pdf/2310.20559v1"
      locator: "§3.5, eq. (21), printed pp. 9–10; §§4.1–4.3, including eqs. (127), (131)–(136), printed pp. 20–41; §5.2, pp. 49–51. Review of the N=1 F-term potential, KKLT/LVS, nilpotent multiplets, D-terms, T-branes, and heterotic gaugino condensation."
    - title: "Shehu AbdusSalam, Christopher Hughes, Fernando Quevedo, and Andreas Schachner, Coexisting Flux String Vacua from Numerical Kähler Moduli Stabilisation, arXiv:2507.00615v1"
      url: "https://arxiv.org/pdf/2507.00615v1"
      locator: "Abstract and introduction; §3.3, printed pp. 9–10; §4.1; §§4.4–4.5, pp. 17–20; §6, pp. 24–25. Non-exhaustive Kähler-sector scan with fixed complex-structure/dilaton inputs and chosen corrections/uplift terms."
    - title: "George K. Leontaris and Pramod Shukla, Stabilising all Kähler moduli in perturbative LVS, arXiv:2203.03362v3"
      url: "https://arxiv.org/pdf/2203.03362v3"
      locator: "§§2–4, printed pp. 3–18; §§6.1–6.2, pp. 23–25; §7, pp. 28–29. Specific perturbative type-IIB EFT mechanism including higher-derivative F^4 contributions; its concrete global model and unknown coefficients remain model-specific."
    - title: "Daniel Junghans, Control Problem of de Sitter Vacua with T-brane Uplift, arXiv:2609.35985v1"
      url: "https://arxiv.org/pdf/2609.35985v1"
      locator: "§§1, 3, 6–8, printed pp. 1–4 and 22–45. Exact T-brane control analysis and its model-specific limitations."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Use a four-dimensional Lorentzian spacetime $M_4$ and reduced Planck units $M_P=1$. Let $\mathcal M$ be a complex $n$-dimensional scalar manifold, with retained classical scalar configurations $z:M_4\to\mathcal M$ of class $C^2$. In a holomorphic chart $z^i$, a chiral multiplet is the superfield $\Phi^i=z^i+\sqrt2\,\theta\psi^i+\theta^2F^i$, where $z^i$ is its scalar, $\psi^i$ its Weyl fermion, and $F^i$ its algebraic auxiliary field. A two-derivative $N=1$ supergravity EFT on a stated field domain is specified by a real local Kähler potential $K$, a holomorphic superpotential $W$, any holomorphic gauge kinetic matrix $f_{ab}$ and gauged symmetries, and a cutoff below the omitted modes. Its Kähler metric is $g_{i\bar j}=\partial_i\partial_{\bar j}K$ and is required to be positive definite on the retained domain. A critical point is a point where the first derivatives of the full retained real-scalar potential vanish; this condition says nothing by itself about fields above the cutoff.

In these Planck units, $K$, the scalar coordinates, $W$, and the scalar potential are dimensionless; restoring dimensions gives $K$ dimension two, $W$ dimension three, and $V$ dimension four in powers of mass. Define $D_iW=\partial_iW+K_iW$. The two-derivative F-term potential is

$$V_F=e^K\left(g^{i\bar j}D_iW\,\overline{D_jW}-3|W|^2\right),$$

where $g^{i\bar j}$ is the inverse Kähler metric. A Kähler-uplift ansatz specifies $K=K_0+\Delta K$ and $W$, and obtains its potential by substituting this corrected $K$ and $W$ into $V_F$; a positive-energy critical point is an outcome to be checked, not part of the definition.

For each racetrack, choose a stated coordinate range $U_T\subset\mathbb C$ and a dimensionless chiral field $T:M_4\to U_T$ of class $C^2$, with $\tau=\operatorname{Re}T$ and $\rho=\operatorname{Im}T$. Its axion shift lattice is part of the model and must make each instanton exponential single-valued. In the Type-IIB Kähler-modulus example, let $X$ be the compact Calabi–Yau threefold, $J_E$ its ten-dimensional Einstein-frame Kähler form, $D\subset X$ the specified divisor, and $L_s=2\pi\sqrt{\alpha'}$ the length unit. Choose the tree-level normalization $\tau=(2L_s^4)^{-1}\int_DJ_E\wedge J_E$; $\rho$ is the correspondingly normalized $C_4$ period over $D$. After any spectator fields are fixed, a racetrack superpotential has at least two nonperturbative terms with distinct positive dimensionless exponents, for example

$$W=W_0+A_1e^{-a_1T}+A_2e^{-a_2T},\qquad a_1\ne a_2,\quad a_1,a_2>0.$$

Here $W_0,A_1,A_2\in\mathbb C$ are dimensionless in Planck units; if spectator fields remain, these coefficients may instead be holomorphic functions of them. This form does not by itself assert a critical point or stabilization.

Loop/$F^4$ perturbative stabilization means that specified string-loop corrections enter $K$ and the component action also contains a higher-derivative term of the schematic form $C_{i\bar j k\bar l}(z,\bar z)F^i\bar F^{\bar j}F^k\bar F^{\bar l}$, with $C_{i\bar j k\bar l}$ a stated coefficient tensor. Eliminating the auxiliary fields changes the scalar potential. The symbol $F^4$ here refers to four chiral auxiliary fields, not a four-form field strength.

A nilpotent-goldstino model adds a chiral superfield $X=x+\sqrt2\,\theta\psi_X+\theta^2F_X$ constrained by $X^2=0$. With this component convention and $F_X\ne0$, the constraint gives $x=\psi_X\psi_X/(2F_X)$, so $x$ is composite rather than an independent propagating scalar; $\psi_X$ is the goldstino in the supersymmetry-breaking regime represented by this EFT.

For a gauge-invariant D-term sector, let a gauge group $G$ act on $(\mathcal M,\omega)$ by holomorphic isometries, where $\omega=i g_{i\bar j}\,dz^i\wedge d\bar z^{\bar j}$ is the Kähler form. For a Lie-algebra generator $t_a$, let $k_a$ be its real fundamental vector field. A global moment map is a single-valued, equivariant real function $\mu:\mathcal M\to\mathfrak g^*$, with components $\mu_a$, satisfying the convention $d\mu_a=\iota_{k_a}\omega$. The gauged superpotential and gauge kinetic matrix must obey the chosen gauge symmetry, and $\operatorname{Re}f_{ab}$ must be positive definite. In the normalization where the D auxiliary equals $\mu_a$, integrating it out gives

$$V_D=\frac12(\operatorname{Re}f)^{-1\,ab}\mu_a\mu_b.$$

This definition requires the global moment map on the stated scalar domain; a formula available only in one coordinate chart is not enough.

For a stack of D7-branes wrapping a smooth complex surface $D$ with rank-$N$ holomorphic gauge bundle $E\to D$, use the holomorphically twisted convention in which the world-volume Higgs field is a section $\Phi\in\Gamma(D,\operatorname{End}(E)\otimes K_D)$, where $K_D=\Lambda^{2,0}T^*D$ is the canonical holomorphic line bundle. In a local trivialization of $K_D$, a T-brane configuration has a fibre endomorphism $\Phi_y:E_y\to E_y$ that is non-diagonalizable at generic $y\in D$; a nilpotent field satisfying $\Phi^q=0$ for some integer $q\ge2$ is a special case provided $\Phi_y\ne0$ on a dense open subset of $D$ (the meaning of generic here). The power $\Phi^q$ is a section of $\operatorname{End}(E)\otimes K_D^{\otimes q}$, using composition in $\operatorname{End}(E)$. Indeed, a nilpotent complex endomorphism has only zero eigenvalues, so if it were diagonalizable it would be zero. Nilpotence and non-diagonalizability are unchanged by the nonzero scalar rescaling between local trivializations of $K_D$. Such a configuration is not specified by mutually commuting eigenvalues alone.

Heterotic gaugino condensation here means strong dynamics in a specified four-dimensional asymptotically free $N=1$ gauge sector obtained from a heterotic compactification, with a nonzero expectation value $\langle\operatorname{tr}\lambda\lambda\rangle$ of the adjoint Weyl fermion $\lambda$ in its gauge multiplet. In a pure gauge example this generates a nonperturbative superpotential term of the form $A e^{-a f_h}$, where $f_h$ is the holomorphic gauge kinetic function, $a>0$ is fixed by the beta-function and normalization conventions, and $A$ is a threshold prefactor; at tree level in the heterotic dilaton sector, $S$ denotes the chiral dilaton field and one often has $f_h=S$.

Racetrack superpotentials, Kähler uplift, loop/$F^4$ perturbative stabilization, nilpotent-goldstino F-term models, gauge-invariant D-term sectors, T-brane uplift and heterotic gaugino condensation are distinct EFT constructions with distinct geometric, zero-mode, flux, gauging and correction assumptions. Each requires its own specified field domain, $K$, $W$, gauge/source data, truncation range and validity regime. A formal or numerical critical point in a chosen truncation does not imply that the corresponding complete ten-dimensional string compactification exists, that omitted corrections are small, or that one family supplies a universal stabilization theorem.

## Statement references

[Hebecker, *Naturalness, String Landscape and Multiverse*, §§6.4–6.6 and §8.5](https://arxiv.org/pdf/2008.10625v5)

[McAllister and Quevedo, *Moduli Stabilization in String Theory*, §3.5 eq. (21); §§4.1–4.3, especially §§4.3.2–4.3.3 eqs. (127), (131)–(136); §5.2](https://arxiv.org/pdf/2310.20559v1)

[AbdusSalam et al., *Coexisting Flux String Vacua from Numerical Kähler Moduli Stabilisation*, §§3–4 and §6](https://arxiv.org/pdf/2507.00615v1)

[Leontaris and Shukla, *Stabilising all Kähler moduli in perturbative LVS*, §§4 and 6](https://arxiv.org/pdf/2203.03362v3)

[Junghans, *Control Problem of de Sitter Vacua with T-brane Uplift*, §§1, 3, 6–8](https://arxiv.org/pdf/2609.35985v1)

## Scope note

The cited numerical scan fixes complex-structure and dilaton data before exploring the Kähler sector, and is explicitly non-exhaustive. Its minima therefore illustrate distinct EFT ansätze and parameter choices; they do not constitute a survey of fully backreacted ten-dimensional solutions. This remark is a scope map, not a proof that any listed family succeeds or fails in every compactification.
