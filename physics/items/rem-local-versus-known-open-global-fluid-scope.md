---
id: rem-local-versus-known-open-global-fluid-scope
kind: remark
title: "Scope of the local periodic result: what is proved, what is not, and the known open global problem"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 9
deps: [thm-local-smooth-periodic-euler-viscous-solution, thm-fluid-uniqueness-and-continuous-dependence]
dependency_roles:
  thm-local-smooth-periodic-euler-viscous-solution: mathematical-premise
  thm-fluid-uniqueness-and-continuous-dependence: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universität Ulm, WS 2018/19), Section 4.5 (blow-up and the Beale-Kato-Majda criterion) and Chapter 1 (the state-of-the-art table on existence, uniqueness and regularity in dimension three)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
    - title: "A. J. Majda and A. L. Bertozzi, Vorticity and Incompressible Flow (CUP 2002), Section 3.3 with Corollary 3.2 (maximal time of existence and the global-existence criterion in terms of vorticity accumulation)"
      url: "http://inis.jinr.ru/sl/P_Physics/PC_Classical%20physics/PCfm_Fluid%20mechanics/Majda,%20Bertozzi.%20Vorticity%20and%20incompressible%20flow%20(CUP,%202002)(558s).pdf"
verification:
  precheck: pass
---

## Scope of the local statement

[[thm-local-smooth-periodic-euler-viscous-solution]] and
[[thm-fluid-uniqueness-and-continuous-dependence]] are mathematical statements
about the model equations
$\partial_tu+P((u\cdot\nabla)u)=\nu\Delta u$ on the flat three-torus, for a real
viscosity parameter $\nu\ge0$, smooth divergence-free data, and an integer
$s\ge4$. They establish, and only establish:

- existence of a smooth solution on the **finite** interval
  $[0,T]$ with $T=(2C_s\|u_0\|_{H^s})^{-1}$ when $\|u_0\|_{H^s}>0$ (and
  $T=1$ in the trivial case $u_0=0$);
- the uniform $H^m$ bounds $\|u(t)\|_{H^m}\le\|u_0\|_{H^m}e^{4C_mY_0T}$ on that
  interval, for every $m\ge s$;
- uniqueness among smooth solutions on the common interval and Hölder-$1/s$
  continuity of the solution map on $H^s$-bounded data in the $H^{s-1}$ norm;
- reconstruction of the pressure with the standard sign convention and its
  uniqueness under the zero-mean normalization.

The following are explicitly **not** claimed, and are not consequences of the
argument:

1. **No global-in-time smooth conclusion from this construction.** The existence time decreases as $\|u_0\|_{H^s}$ grows, and the proof supplies no all-time bound for either $\nu>0$ or $\nu=0$. This is a statement about this proof, not a certification of the current global status of fluid equations. On 11 September 2026 the Clay Mathematics Institute announced that the Navier-Stokes Millennium Problem concerning three-dimensional Euclidean space had “apparently been settled” and said that its evaluation process is deliberately unhurried ([CMI announcement](https://www.claymath.org/news/navier-stokes-announcement/)). That announcement was read here; no new announced proof has been audited here, and no implication from a Euclidean, forced or otherwise different problem to the unforced periodic $\mathbb T^3$ equations of this page has been established. The older cited sources describe open problems as of their publication dates; they do not justify an unqualified present-day assertion that all these global questions remain open, nor does an announcement alone establish a theorem in this library.
2. **No general continuation criteria.** The elementary restarting argument
   extends a solution as long as an $H^s$ bound persists, but no Beale-Kato-Majda
   type criterion, no vortex-stretching criterion and no partial regularity
   theorem is proved.
3. **No other data class, domain or system.** The data are smooth,
   divergence-free and periodic; the equation is incompressible with constant
   viscosity and no forcing. Rough data, weak solutions, bounded domains with
   walls or boundary layers, free surfaces, compressible systems, shocks,
   non-Newtonian constitutive laws and turbulence statistics are outside the
   scope of these two items; the companion page
   `cm-math-continuum` supplies some separate model items for those regimes and
   records its own limitations.
4. **No empirical content.** All items of this page carry
   `domain: mathematics`; the equations are studied as explicit model
   equations. Nothing here asserts that any fluid, at any scale, is described
   by these equations, and no measurement is used.

The structural reason for the locality is visible in the energy inequality
$\frac{d}{dt}\|u\|_{H^m}^2\le2C_m\|u\|_{H^s}\|u\|_{H^m}^2$: the bound on the
solution is exponential in time with a rate proportional to the $H^s$ norm, so
the construction loses control once that norm could grow without bound. A global conclusion would need additional estimates or a separate theorem for the exact unforced periodic model; it is not an omitted routine step of the local proof.
