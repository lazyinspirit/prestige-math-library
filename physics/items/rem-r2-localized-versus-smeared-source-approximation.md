---
id: rem-r2-localized-versus-smeared-source-approximation
kind: remark
title: Localized currents and smeared source approximations
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 3
deps:
  - def-r2-compact-de-rham-current-of-a-source-cycle
  - lem-r2-exact-top-current-has-zero-total-charge
dependency_roles:
  def-r2-compact-de-rham-current-of-a-source-cycle: mathematical-premise
  lem-r2-exact-top-current-has-zero-total-charge: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "A source-backed distinction between distributional brane/orientifold currents and smooth averaging models on a fixed compact internal space. Equal total charge preserves the constant-test-function charge pairing; it does not establish equality of local field equations, weighted warp integrals, near-source geometry, or exact localization."
sources:
  references:
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, arXiv:hep-th/0105097v2"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
      locator: "§2.1, equations (2.23)–(2.24) and normalization footnote, PDF p. 8; the source coefficient is adopted separately from current mathematics."
    - title: "Mariana Graña, Flux compactifications in string theory: a comprehensive review, arXiv:hep-th/0509003v3"
      url: "https://arxiv.org/pdf/hep-th/0509003v3"
      locator: "§4.1, integrated Einstein/no-go equations; §4.2, equations (4.18)–(4.35), localized Bianchi sources and warp/source constraints."
    - title: "Oliver DeWolfe, Alexander Giryavets, Shamit Kachru, and Washington Taylor, Type IIA Moduli Stabilization, arXiv:hep-th/0505160v3"
      url: "https://arxiv.org/pdf/hep-th/0505160v3"
      locator: "§§2–5, especially the constant-mode/averaged O6 model and the conclusion's full-profile limitation."
    - title: "Niccolò Cribiori, Daniel Junghans, Vincent Van Hemelryck, Thomas Van Riet, and Timm Wrase, Scale-separated AdS4 vacua of IIA orientifolds and M-theory, arXiv:2107.00019v1"
      url: "https://arxiv.org/pdf/2107.00019v1"
      locator: "§§3–4, smeared solutions and first-order localization away from source cores; §7 conclusions."
    - title: "Johan Blåbäck, Ulf H. Danielsson, Daniel Junghans, Thomas Van Riet, Timm Wrase, and Marco Zagermann, Smeared versus localised sources in flux compactifications, arXiv:1009.1877v2"
      url: "https://arxiv.org/pdf/1009.1877v2"
      locator: "§§3–4 on BPS source localization; §5.3, equations (5.16)–(5.23), for the specified non-BPS D3/anti-D3 ansatz."
    - title: "Thomas Van Riet and Gianluca Zoccarato, Beginners lectures on flux compactifications and related Swampland topics, arXiv:2305.01722"
      url: "https://arxiv.org/pdf/2305.01722"
      locator: "§4.2, equations (4.35)–(4.50), and §5.3, discussion of smeared sources and their limitations."
---

## Statement

Use natural units $\hbar=c=1$, length-valued coordinates, and $\alpha'>0$ of dimension length squared. Let $X$ be a compact oriented smooth six-manifold without boundary, fixed throughout as one smooth internal integration space; all source multiplicities and flux integrals refer to this same space. Model the internal charge of branes filling the four external dimensions by a finite signed degree-six current $\rho_{\mathrm{loc}}=\sum_a q_a\delta_{p_a}$, where $\langle\delta_{p_a},\psi\rangle=\psi(p_a)$ for $\psi\in C^\infty(X,\mathbb R)$. The coefficients $q_a$ are dimensionless signed D3-charge numbers in units $\mu_3=(2\pi)^{-3}\alpha'^{-2}$: a positively oriented D3 has $q_a=1$, and any O3-plane coefficients and cover/quotient multiplicities are separately specified source-model data. Thus $Q=\langle\rho_{\mathrm{loc}},1\rangle=\sum_a q_a$ is dimensionless, and $\mu_3Q$ is the charge in this normalization. This physical interpretation is an adopted source convention, not a consequence of the mathematical current definition.

Specifically adopt the current-valued Bianchi law $dJ_5=\mathcal B_6+c\rho_{\mathrm{loc}}$, where $J_5$ is a degree-five current representing the internal gauge-invariant five-form, $\mathcal B_6$ is a specified degree-six current representing $H_3\wedge F_3$, and $c=2\kappa_0^2\mu_3=(2\pi)^4\alpha'^2$ with $2\kappa_0^2=(2\pi)^7\alpha'^4$. Here $F_3,H_3$ are real three-form field strengths with coordinate components of dimension length$^{-1}$; for smooth fields $\langle\mathcal B_6,\psi\rangle=\int_X\psi H_3\wedge F_3$, and singular fields require a separately specified continuous current extension. The pairings $\langle\mathcal B_6,1\rangle$ and $cQ$ both have dimension length$^4$; a smooth representative of the dimensionless source current has coordinate coefficients of dimension length$^{-6}$. The Bianchi law, its sign and coefficient are conditional physical inputs. No field equation is asserted to hold smoothly through a point source. A smeared model replaces it by a smooth degree-six form $\rho_{\mathrm{sm}}$ with $\int_X\rho_{\mathrm{sm}}=Q$. This replacement preserves the source's contribution when the Bianchi identity is paired with the constant test function $1$, so it preserves that integrated charge constraint when the other terms are held fixed. It does not generally preserve the source as a distribution or a local sourced Bianchi equation. For any specified smooth dimensionless weight $w:X\to\mathbb R$, define $(w\rho)(\psi)=\rho(w\psi)$; equal total charge need not give equal $\langle\rho,w\rangle$. Thus it need not preserve an adopted warp equation's source term if that term involves this weighted pairing. For singular weights a multiplication or extension prescription is additionally required; equality of total charge supplies none. Source stress and charge are separate data, so this argument assumes no universal equality between tension and charge. In particular, equal total charge alone does not imply that a smeared solution is an exact localized ten-dimensional solution.

For example, orient the unit flat torus $X=\mathbb R^6/\mathbb Z^6$ by $dy^1\wedge\cdots\wedge dy^6$, let $p$ be a point, $q>0$, and let $\nu$ be its volume form normalized by $\int_X\nu=1$. Set $\rho_{\mathrm{loc}}=q\delta_p$ and $\rho_{\mathrm{sm}}=q\nu$. These mathematical currents have equal total coefficient but are unequal distributions; this example assigns no physical units to $q$.

Smeared compactification calculations can still provide controlled approximations when a stated model and scaling limit bound localized backreaction in a specified region away from source cores. Such control is model-dependent; a first-order profile or a smeared zero-mode solution does not by itself resolve the core or establish exact localization. Results about failure to localize are restricted to the source type and ansatz studied in the cited work.

## Statement references

[[def-r2-compact-de-rham-current-of-a-source-cycle]]

[Giddings, Kachru, and Polchinski, equations (2.23)–(2.24)](https://arxiv.org/pdf/hep-th/0105097v2)

[Graña, §§4.1–4.2](https://arxiv.org/pdf/hep-th/0509003v3)

[DeWolfe et al., §§2–5](https://arxiv.org/pdf/hep-th/0505160v3)

[Cribiori et al., §§3–4](https://arxiv.org/pdf/2107.00019v1)

[Blåbäck et al., §5.3](https://arxiv.org/pdf/1009.1877v2)

[Van Riet and Zoccarato, §§4.2 and 5.3](https://arxiv.org/pdf/2305.01722)

## Facts & Assumptions

**Given:** A compact oriented smooth six-manifold $X$, its smooth volume form $\nu$ normalized to unit integral, and the source distributions in the Statement.

[F1] [[def-r2-compact-de-rham-current-of-a-source-cycle]]: a degree-six current on $X$ acts on smooth functions; a point source satisfies $\langle\delta_p,\psi\rangle=\psi(p)$, and a smooth six-form $\alpha$ acts by $\langle T_\alpha,\psi\rangle=\int_X\alpha\psi$.

[F2] [[lem-r2-exact-top-current-has-zero-total-charge]]: on compact boundaryless $X$, an exact degree-six current has zero pairing with the constant function $1$.

[A1] A smearing prescription replaces a localized source by a smooth density with the same pairing against $1$. This is a modeling choice, not a consequence of the current definition or of a field equation.

[A2] Adopt exactly the dimensionless source normalization and the current law $dJ_5=\mathcal B_6+c\rho$ in the Statement, with $c=(2\pi)^4\alpha'^2$ fixed when comparing sources. This is the convention of Giddings–Kachru–Polchinski, equations (2.23)–(2.24) and its normalization footnote. For the physical source-context comparisons, the cited papers' own field equations, orientifold conventions, perturbative regimes, and scaling assumptions are retained. They are not identified as one common exact solution or common source basis.

## Proof

1.1 From [F1], $\langle q\delta_p,1\rangle=q$ and $\langle q\nu,1\rangle=q\int_X\nu=q$. Thus the example currents have the same total coefficient, as asserted; this calculation alone assigns no brane charge to $q$. [F1, given, algebra]

1.2 Choose a nonnegative smooth function $\psi$ supported in a coordinate ball whose closure avoids $p$, with $\psi$ not identically zero. Then $\langle q\delta_p,\psi\rangle=q\psi(p)=0$, whereas $\langle q\nu,\psi\rangle=q\int_X\psi\nu>0$, since $q>0$, $\nu$ is positive, and $\psi$ is positive on a nonempty open set. Hence the currents are unequal. In general, equality of their pairings with $1$ asserts equality of total charge only; it does not assert equality on all smooth test functions. [F1, given, algebra]

2.1 Pair the adopted law [A2] with $1$. By [F2] this gives $0=\langle\mathcal B_6,1\rangle+cQ$. With $c$ and $\mathcal B_6$ held fixed, replacing $\rho_{\mathrm{loc}}$ by $\rho_{\mathrm{sm}}$ preserves this integrated constraint. At fixed $\mathcal B_6$ the two local right-hand sides differ by $c(\rho_{\mathrm{loc}}-\rho_{\mathrm{sm}})$, a nonzero current in the example since $c>0$ and step 1.2 distinguishes the sources. The same smooth function $\psi$ in step 1.2 is a weight with different source pairings, so equality on $1$ alone cannot preserve all smooth weighted source terms. This applies to any adopted warp equation containing such a term; it derives no warp equation or tension-charge relation. The source literature accordingly treats smearing and localization as distinct solution procedures and qualifies any localization control by the model, approximation order, and region; the cited non-BPS failure is for its specific ansatz. [A1, A2, F1, F2, step 1.1, step 1.2] ∎
