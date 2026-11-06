---
id: op-cmp4-controlled-kklt-uplift
kind: open-problem
title: Controlled localized anti-D3 uplift to a full type-IIB de Sitter solution
status: published
origin: pipeline
domain: physics
library: physics
category: string-theory
page: cmp-stabilization-control-frontier
dependency_level: 0
deps: []
dependency_roles: {}
physical_scope: "Type-IIB string theory compactified on a compact Calabi–Yau orientifold with quantized three-form flux and a localized anti-D3 source in a warped throat. The question distinguishes a minimum in a truncated four-dimensional effective potential from a complete, quantitatively controlled compactification."
sources:
  references:
    - title: "Arthur Hebecker, Naturalness, String Landscape and Multiverse: A Modern Introduction with Exercises, Springer book author version v5, arXiv:2008.10625v5"
      url: "https://arxiv.org/pdf/2008.10625v5"
      locator: "§§6.4–6.5, printed pp. 166–174; §8.5, printed pp. 228–230. Historical pedagogical treatment of the one-modulus KKLT EFT, warped anti-D3 uplift and the distinction between a proposed mechanism and a full construction."
    - title: "Liam McAllister and Fernando Quevedo, Moduli Stabilization in String Theory, arXiv:2310.20559v1"
      url: "https://arxiv.org/pdf/2310.20559v1"
      locator: "§§4.1–4.3, printed pp. 20–22 and 29–39. Review treatment of KKLT, LVS, uplift models and the control questions."
    - title: "Liam McAllister, Jakob Moritz, Richard Nally, and Andreas Schachner, Candidate de Sitter Vacua, arXiv:2406.13751v2"
      url: "https://arxiv.org/pdf/2406.13751v2"
      locator: "§1, printed pp. 2–3; §§3.3–3.4, pp. 27–30; §4.5, pp. 40–41; §§6–7, pp. 62–64. Explicit orientifolds and quantized flux with positive-energy minima in the leading-order four-dimensional EFT; the authors retain subleading corrections and flux quantization as open control work."
    - title: "Daniel Junghans, Control Problem of de Sitter Vacua with T-brane Uplift, arXiv:2609.35985v1"
      url: "https://arxiv.org/pdf/2609.35985v1"
      locator: "§1, printed pp. 1–4; §3, pp. 22–24; §6, pp. 39–41; §§7–8, pp. 42–45. Model-specific T-brane uplift bounds and caveats; this is not a universal no-go and is not an anti-D3 construction."
    - title: "Arthur Hebecker, Severin Lüst, Andreas Schachner, and Simon Schreyer, Effective potentials, warping, and implications for F-term uplifting, arXiv:2512.17995v2"
      url: "https://arxiv.org/pdf/2512.17995v2"
      locator: "§1, printed pp. 2–5; §§5.4–5.5, pp. 39–45; §6, pp. 46–48. A separate F-term uplift analysis; its mechanism and hypotheses do not settle the localized anti-D3 problem."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6-luna; native-step3-independent-reader; delegated by /root under owner authorization
---

## Open problem

Use units $c=\hbar=1$. A Calabi–Yau threefold here is a smooth, compact complex manifold $X$ of complex dimension three with a Kähler metric and trivial canonical bundle. The Type-IIB compactification data include a specified involution of $X$ combined with world-sheet parity, its fixed-plane and brane sources, and the resulting flux lattice. Quantized three-form flux means that the periods of $F_3$ and $H_3$ lie in the lattice allowed by those data. Tadpole cancellation means that the integrated Bianchi identity for the self-dual five-form is satisfied after including flux-induced charge and all localized and curvature D3-charge contributions.

A localized anti-D3-brane is a source supported at a specified internal position, with positive tension and D3-charge opposite to that of a D3-brane. Let the ten-dimensional spacetime have product topology $M_4\times X$, with coordinates $x^\mu$ on $M_4$ and $y^m$ on $X$. Use ten-dimensional Einstein-frame metric $g^{(10,E)}_{MN}=e^{-\Phi/2}g^{(10,s)}_{MN}$, where $g^{(10,s)}$ is the string-frame metric and $\Phi$ is the dilaton. Away from localized sources, use the warped ansatz

$$ds^2_{10,E}=e^{2A(y)}g^{(4,E)}_{\mu\nu}(x)\,dx^\mu dx^\nu+e^{-2A(y)}\widetilde g_{mn}(y)\,dy^m dy^n,$$

where $\widetilde g$ is a Riemannian reference metric on $X$, $A:X\to\mathbb R$ is the dimensionless warp function, and $g^{(4,E)}$ is normalized to the four-dimensional Einstein frame. Write $h(y)=e^{-4A(y)}$. For this question, a warped throat is a connected internal region $U_{\rm th}\subset X$ with compact closure, a tip $y_{\rm tip}\in\overline U_{\rm th}$ at which $A$ attains its minimum, and a fixed bulk reference region $B\subset X$ of positive $\widetilde g$-volume, for which the stated redshift

$$w=\exp\!\left(A(y_{\rm tip})-A_B\right)\ll1,\qquad A_B=\frac{1}{\operatorname{Vol}_{\widetilde g}(B)}\int_B A\,d\operatorname{vol}_{\widetilde g},$$

is small. A local proper energy at $y$ is redshifted relative to the bulk four-dimensional Einstein-frame observer by $\exp(A(y)-A_B)$. The metric, warp function and other supergravity fields are required to be regular only away from localized sources; an idealized delta-function source requires distributional field equations and matching data, or else a resolved source core, rather than an assumption of smoothness through the source.

For the four-dimensional Einstein-frame description, use signature $(-,+,+,+)$ and the curvature convention for which de Sitter space has $R_{\mu\nu}=3H^2g_{\mu\nu}$. Let $\mathcal M_{\rm ret}$ be the smooth real $n$-dimensional field manifold of retained scalar degrees of freedom, with local dimensionless coordinates $\phi^A$, $A=1,\ldots,n$. A classical scalar configuration is a $C^2$ map $\phi:M_4\to\mathcal M_{\rm ret}$. The field-space metric $G_{AB}$ is a $C^2$ positive-definite metric on the stated retained-field regime, and the Einstein-frame potential $V_E:\mathcal M_{\rm ret}\to\mathbb R$ is $C^2$. With $M_P$ the reduced four-dimensional Planck mass, $G_{AB}$ has mass dimension two and $V_E$ mass dimension four. The two-derivative scalar action is

$$S_4=\int d^4x\sqrt{-g}\left[\frac{M_P^2}{2}R_4-\frac12G_{AB}(\phi)\partial_\mu\phi^A\partial^\mu\phi^B-V_E(\phi)\right],$$

At a stationary point with constant $\phi^A$ and $V_E>0$, the Einstein equations give $R_{\mu\nu}=3H^2g_{\mu\nu}$ and $3M_P^2H^2=V_E$. The retained mass-squared eigenvalues are those of $G^{AC}\nabla_C\nabla_BV_E$ at the stationary point, with $\nabla$ the Levi-Civita connection of $G$. All retained scalar directions are stabilized at quadratic order when these eigenvalues are positive. Metastability additionally requires that all physically allowed decay channels be enumerated or bounded as absent, and that a semiclassical decay-rate or lifetime estimate be supplied for each allowed channel, with its bounce and prefactor assumptions stated; no universal lifetime threshold is imposed here.

The omitted-mode comparison requires the following spectral data at the proposed solution. After imposing the linearized constraints and quotienting gauge directions, specify a positive Hilbert space $\mathcal H$ of physical internal fluctuation profiles, its kinetic inner product, and a densely defined self-adjoint mass-squared operator $\mathsf K:D(\mathsf K)\subset\mathcal H\to\mathcal H$. These data must come from the quadratic fluctuation theory in the same four-dimensional Einstein-frame units as $S_4$. A mass here is the mass parameter in the canonically normalized covariant four-dimensional free-field equation; specify each spin sector and its curvature-coupling convention. No global time-translation generator on de Sitter space is assumed. In a generalized internal eigenproblem $\mathsf L u=\lambda\mathsf W u$, give the actual operators, positive kinetic weight $\mathsf W$, Hilbert completion, operator domain, orientifold projections, and source-core boundary or matching conditions determining the self-adjoint realization. Here $\lambda$ has mass dimension two. Kaluza–Klein modes are the internal-profile modes of ten-dimensional fields; throat modes belong to this same problem and are concentrated in $U_{\rm th}$, rather than forming an independent duplicate spectrum. Include physical brane fluctuations and string oscillator sectors beyond supergravity, with their quadratic spectral description or justified lower spectral bounds and error estimates.

Specify a finite-rank orthogonal projection $P_{\rm ret}:\mathcal H\to\mathcal H$, meaning a bounded operator with $P_{\rm ret}^2=P_{\rm ret}=P_{\rm ret}^*$, satisfying $P_{\rm ret}D(\mathsf K)\subset D(\mathsf K)$ and $\mathsf KP_{\rm ret}u=P_{\rm ret}\mathsf Ku$ for every $u\in D(\mathsf K)$. Its range must be exactly the retained fluctuation sector, including any retained gravity, vector and fermion modes as well as the scalars in $\mathcal M_{\rm ret}$; its scalar restriction must reproduce the retained Hessian masses. The retained masses $m_j$ are the nonnegative square roots of the eigenvalues of this finite-dimensional restriction, which must therefore be nonnegative. Set $\mathcal H_{\rm om}=(I-P_{\rm ret})\mathcal H\ne\{0\}$ and $\mathsf K_{\rm om}=\mathsf K|_{\mathcal H_{\rm om}}$, with domain $D(\mathsf K)\cap\mathcal H_{\rm om}$. Define $\sigma(\mathsf K_{\rm om})$ to be the set of real $\lambda$ for which $\mathsf K_{\rm om}-\lambda I$ has no everywhere-defined bounded inverse, and set

$$\lambda_{\rm om}=\inf\sigma(\mathsf K_{\rm om}),\qquad m_{\rm om}=\sqrt{\lambda_{\rm om}}\quad\hbox{when }\lambda_{\rm om}>0.$$

A claimed omitted-mode gap must establish $\lambda_{\rm om}>0$ and $m_j<m_{\rm om}$ for every retained mass $m_j$ in the specified truncation. A negative or zero spectral bottom fails this requirement; continuous spectrum is included and the infimum need not be attained. An unidentified sector or uncontrolled spectral error leaves the comparison unestablished. Constructing these model-derived data and bounding mixing and approximation errors are part of the requested solution, rather than assumptions that the named excitation classes already determine a spectrum.

For this question, “quantitatively controlled” requires more than a named small parameter. Write the four-dimensional potential as a retained contribution plus specified omitted corrections, $V_E=V_{\rm kept}+\sum_r\delta V_r$. On a stated compact field-space neighborhood $N$ of the proposed critical point, choose a reference energy $V_{\rm ref}>0$ and a radius $L>0$ in the dimensionless metric $\widehat G=G/M_P^2$. With $v_r=\delta V_r/M_P^4$ and $v_{\rm ref}=V_{\rm ref}/M_P^4$, require explicit bounds

$$\sum_r\sup_{\phi\in N}\left(|v_r|+L\|dv_r\|_{\widehat G^{-1}}+L^2\|\widehat\nabla^2v_r\|_{\widehat G}\right)\le\epsilon v_{\rm ref},$$

where $\widehat\nabla$ is the Levi-Civita connection of $\widehat G$, $\epsilon$ is stated, and the tensor norms are induced by $\widehat G$. The analysis must also bound the resulting displacement of the critical point and changes in its energy and mass eigenvalues, and show that these bounds leave positive energy, positive retained masses, and the claimed mass gap. Separately state the bounds on the relevant local expansion parameters, including $\alpha'\|\mathrm{Rm}_s\|$ and $e^\Phi$, and on the warp-induced corrections in the source-free region. Localized backreaction means the changes $\delta g=g_{\rm full}-g_{\rm bg}$, $\delta\Phi=\Phi_{\rm full}-\Phi_{\rm bg}$ and $\delta F=F_{\rm full}-F_{\rm bg}$ in the metric, dilaton and flux relative to the specified background. On a stated source-excised region, bound quantities such as $\|\delta g\|_{g_{\rm bg}}$, $|\delta\Phi|$, $\alpha'\|\mathrm{Rm}_s(g_{\rm full})-\mathrm{Rm}_s(g_{\rm bg})\|_{g_{\rm bg}}$, and $\|\delta F\|/F_{\rm ref}$ using stated nonzero reference scales for each flux component; give core-resolution or matching conditions at the excised source. No universal numerical tolerance is built into this open problem: the proposed model must supply the bounds and demonstrate that they are below its stability and omitted-mode margins.

For at least one explicit type-IIB Calabi–Yau orientifold with its specified involution, allowed quantized flux, tadpole cancellation, and localized anti-D3 state, determine whether the full ten-dimensional equations and their four-dimensional Einstein-frame reduction admit a metastable positive-energy solution satisfying the definitions and control bounds above, with every retained mass below the lightest omitted mode. This is the target of the question, not an assertion that such a solution exists. A local minimum of a truncated four-dimensional potential alone does not answer it.

## Open problem references

[Hebecker, *Naturalness, String Landscape and Multiverse*, §§6.4–6.5 and §8.5](https://arxiv.org/pdf/2008.10625v5)

[McAllister and Quevedo, *Moduli Stabilization in String Theory*, §§4.1–4.3](https://arxiv.org/pdf/2310.20559v1)

[McAllister et al., *Candidate de Sitter Vacua*, §§6–7](https://arxiv.org/pdf/2406.13751v2)

[Junghans, *Control Problem of de Sitter Vacua with T-brane Uplift*, §§1, 3, 6–8](https://arxiv.org/pdf/2609.35985v1)

[Hebecker et al., *Effective potentials, warping, and implications for F-term uplifting*, §§5.4–5.5](https://arxiv.org/pdf/2512.17995v2)

## Status

Status checked on 2026-10-26. On the bounded search recorded for this batch, the retrieved literature does not establish a fully controlled ten-dimensional solution for any explicit localized anti-D3 model, and it does not prove a universal no-go. *Candidate de Sitter Vacua* constructs explicit positive-energy minima only in its leading-order four-dimensional effective theories and explicitly leaves subleading corrections and complete flux-quantization control unresolved.

The 2026 T-brane analysis finds control problems in its studied models, while the 2026 warped F-term analysis concerns a different uplift mechanism. These results are relevant warnings about model-specific control, but neither resolves the anti-D3 existence question stated here. A local effective-theory extremum and a fully localized string solution remain distinct claims.
