---
id: ex-r5-spectator-axions-string-inflation-pbh-2026
kind: example
title: 2026 Fibre Inflation axion-assisted primordial black-hole model study
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 16
deps:
  - def-cmp4-compactification-derived-moduli-eft-data
  - def-cmp4-nonperturbative-moduli-superpotential-sector
  - def-r5-cosmology-4d-scalar-eft-data
  - def-r5-inflation-cmb-observables
  - def-r5-string-axion-data
dependency_roles:
  def-cmp4-compactification-derived-moduli-eft-data: formulation-prerequisite
  def-cmp4-nonperturbative-moduli-superpotential-sector: formulation-prerequisite
  def-r5-cosmology-4d-scalar-eft-data: formulation-prerequisite
  def-r5-inflation-cmb-observables: formulation-prerequisite
  def-r5-string-axion-data: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: Source-specific numerical study of a finite-field Type IIB Fibre Inflation EFT with spectator axions. The quoted PBH criterion and model output are theoretical calculations, not observations; no globally consistent compactification, tadpole cancellation, reheating history, or PBH dark-matter abundance is established.
sources:
  references:
    - title: "M. Cicoli, D. L. Lorenzoni, E. McDonough and F. G. Pedro, Spectator Axions in String Inflation and Primordial Black Holes, arXiv:2607.27361v1"
      url: "https://arxiv.org/pdf/2607.27361v1"
      locator: "35-page arXiv v1 PDF. The relevant passages checked are §§2–3, article pp. 3–10, for the three-modulus EFT, parameter sets and adopted PBH criterion; §§4–6, article pp. 10–22, for background evolution, perturbation conventions, PyTransport spectra and the Success model; §7, article pp. 22–24, for the unresolved global compactification, tadpole and reheating questions. This locator records those relevant passages, not a claim that every page was read."
    - title: "K. Lehnert, Hitchhiker’s Guide to the Swampland: The Cosmologist’s Handbook to the string-theoretical Swampland Programme, arXiv:2509.02632v1"
      url: "https://arxiv.org/pdf/2509.02632v1"
      locator: "Selected review pages only: pp. 1–8, 11–15, 39–40, 51, 65–66, 84 and 94–96, used only as a status map; the numerical model claims below are supported by Cicoli et al."
---

## Example

The source's **spectator axions** are periodic scalar fields in a regime of subdominant background axion energy, specified below. This designation permits an effect on the background trajectory as well as on perturbations. **Fibre Inflation** here denotes the source's Type IIB K3-fibred Calabi–Yau inflation model. Write its three scalar fields as $\widetilde\phi^I(\mathbf x,t)=\phi^I(t)+\delta\phi^I(\mathbf x,t)$, $I=1,2,3$, with background coordinates $\phi^I=(\varphi,\chi_1,\chi_2)$, positive diagonal field-space metric $G_{IJ}$ with $G_{\varphi\varphi}=1$, and $H_{\rm Hub}=\dot a/a$. On an interval where $\dot\sigma:=(G_{IJ}\dot\phi^I\dot\phi^J)^{1/2}>0$, set $\hat\sigma^I=\dot\phi^I/\dot\sigma$, lower its index by $\hat\sigma_I=G_{IJ}\hat\sigma^J$, define $Q^I=\delta\phi^I+(\dot\phi^I/H_{\rm Hub})\psi$ with $\psi$ the scalar spatial-metric perturbation on equal-time slices, and define $\mathcal R:=H_{\rm Hub}\hat\sigma_IQ^I/\dot\sigma$. The source's dimensionless curvature spectrum is $\mathcal P_{\mathcal R}(k,N):=k^3|\mathcal R_k(N)|^2/(2\pi^2)$ for comoving wavenumber $k$ in its Fourier convention, where the source's number of e-folds remaining is $N(t):=\int_t^{t_{\rm end}}H_{\rm Hub}(s)\,ds=\log[a(t_{\rm end})/a(t)]$ on its expanding inflationary interval, with $a>0$, $H_{\rm Hub}>0$ and declared end time $t_{\rm end}$. Thus $dN/dt=-H_{\rm Hub}$ and $N(t_{\rm end})=0$. The quoted $N_{\rm CMB}=53$ labels horizon exit of the CMB pivot mode, not the slice at which the final spectrum is evaluated; the source evaluates that spectrum at $N=0$. Its isocurvature perturbation is $Q_s^I:=(\delta^I{}_J-\hat\sigma^I\hat\sigma_J)Q^J$, which has two independent components orthogonal to the three-field trajectory.

For the source's potential splitting $V=V_{\rm inf}(\varphi)+V_{\rm ax}(\varphi,\chi_1,\chi_2)$, define $K_{\rm inf}:=\dot\varphi^2/2$ and $K_{\rm ax}:=\frac12\sum_{i=1}^2G_{\chi_i\chi_i}\dot\chi_i^2$, and set $\rho_{\rm inf}:=K_{\rm inf}+V_{\rm inf}$ and $\rho_{\rm ax}:=K_{\rm ax}+V_{\rm ax}$. These are energy densities in cosmic time. The source restricts to $\rho_{\rm ax}\ll\rho_{\rm inf}$ with $\rho_{\rm inf}>0$; a quantitative use of this regime requires a declared small tolerance $\delta_{\rm spec}\in(0,1)$ and $0\leq\rho_{\rm ax}/\rho_{\rm inf}\leq\delta_{\rm spec}$ over the stated interval. No numerical tolerance is supplied by the source or certified here. This energy restriction does not impose $K_{\rm ax}\ll K_{\rm inf}$: axion motion may temporarily determine the direction of the background field velocity while the inflaton potential dominates the energy. The source discusses such trajectory changes in its illustrative dynamics; they are not excluded by its use of “spectator”.

Cicoli, Lorenzoni, McDonough and Pedro numerically study two spectator axions in a finite-field Type IIB Fibre Inflation EFT. For their “Success” point they use the single-field P2 potential parameters of their Table 1 with $V_0$ rescaled to $2.07\times10^{-9}$, axion masses $M_1=M_2=8\times10^{-7}M_{\rm Pl}$, decay constants $f_1=0.1M_{\rm Pl}$ and $f_2=0.5M_{\rm Pl}$, and initial fields $\chi_{i}=0.1\pi f_i$; their discussion requires an exponentially small nonperturbative prefactor $A_2\simeq10^{-6}$. They integrate the background and linear curvature/isocurvature perturbation equations and use PyTransport for the reported final spectra, with the CMB pivot exiting $N_{\rm CMB}=53$ e-folds before the end of inflation. With their adopted PBH-seeding criterion $\mathcal P_{\mathcal R}(k_{\rm PBH})>10^{-3}$, the axion model has reported peak $\mathcal P_{\mathcal R}=3.5\times10^{-3}$ and model-inferred $M_{\rm PBH}=2.5\times10^{21}\,\mathrm g$, while the underlying single-field P2 case remains below the criterion; most of the scanned $f_i\lesssim0.1M_{\rm Pl}$ cases have negligible spectral impact. The authors explicitly leave a globally consistent K3-fibred compactification, the required large gauge rank/tadpole cancellation, and reheating unresolved. This is a finite-EFT numerical result, not an observed PBH signal or a global string construction.

## Facts & Assumptions

**Given:** The source paper’s finite-field Type IIB Fibre Inflation ansatz, its specified P2 base parameters and axion data, the paper’s linear perturbation solver and its stated PBH-seeding criterion. Planck units and the authors’ conventions are retained.

[F1] [[def-cmp4-compactification-derived-moduli-eft-data]]: the actual draft statement specifies retained chiral coordinates, Kähler potential, superpotential, gauge-kinetic functions, Einstein-frame normalization, truncation range/cutoff and omitted KK, warped-throat, string and open-string modes. Its current Step 1 readiness record is missing. Its proof remains conditional on the O3/O7 chiral-coordinate and large-volume Kähler/gauge interfaces, whose item files exist outside the current run manifest without current Step 1 records, and on two $N=1$ suppliers with escalated Step 1 records.

[F2] [[def-cmp4-nonperturbative-moduli-superpotential-sector]]: the actual draft statement admits a semiclassical instanton term only with the two universal fermion modes, all additional modes absent/lifted/saturated, a nonzero holomorphic determinant, and gauge-invariant quantized axion charge; gaugino condensation separately requires its specified low-energy gauge dynamics. Its current Step 1 readiness record is missing and it depends on [F1].

[F3] [[def-r5-cosmology-4d-scalar-eft-data]]: the four-dimensional scalar data declare the Einstein frame, fields, potential, units, cutoff, omitted modes and approximation domain, without asserting a global string realization.

[F4] [[def-r5-inflation-cmb-observables]]: primordial scalar/tensor observables are defined for a specified perturbation model and pivot; likelihoods and observations are separate.

[F5] [[def-r5-string-axion-data]]: axion periods, kinetic matrix, canonical normalization, nonperturbative charge/action data and periodic potential are explicit; a monodromy branch is separate data.

[F6] Cicoli et al., arXiv:2607.27361v1, relevant passages in §§2–7, article pp. 3–24: §4 Eqs. (33)–(37) define the energy split and impose subdominant axion energy, while Fig. 5 and §5.2 describe temporary axion dominance of the field velocity. Figure 5 uses the Illustrative parameters of Table 3, not the Success parameters of Table 4. P2 has $(V_0,C_2,C_3,C_4,C_5,C_6)=(1.89\times10^{-9},0.5,0.2661400,7.00\times10^{-7},0.03911680,0.03575230)$ before the stated Success-point rescaling. In §5.1 the source writes $\phi^I(x,t)=\phi^I(t)+\delta\phi^I$ and defines $Q^I=\delta\phi^I+(\dot\phi^I/H_{\rm Hub})\psi$, where $H_{\rm Hub}=\dot a/a$ and $\psi$ is the scalar spatial-metric perturbation on equal-time slices. For positive field-space metric $G_{IJ}$, it sets $\dot\sigma=(G_{IJ}\dot\phi^I\dot\phi^J)^{1/2}$ and $\hat\sigma^I=\dot\phi^I/\dot\sigma$. Indices on $\hat\sigma$ are lowered with $G$. For the three-field Success model, $I=1,2,3$ and the orthogonal projector is $P^I{}_J=\delta^I{}_J-\hat\sigma^I\hat\sigma_J$. The source’s §5.1 Eqs. (5.3)–(5.6) define $Q_s^I=P^I{}_JQ^J$, $\mathcal R=H_{\rm Hub}\hat\sigma_IQ^I/\dot\sigma$ and $S^I=H_{\rm Hub}Q_s^I/\dot\sigma$. There are two independent entropy components, since $\hat\sigma_IS^I=0$; in a chosen $G$-orthonormal normal basis $e_a^I$, $a=1,2$, they are $S_a=G_{IJ}e_a^IS^J$. The later coupled equations for a single $S$ in §5.1 concern the separate two-field limit, not this whole three-field model. Table 5 labels its Success isocurvature output $\beta_{\rm iso}=0.0001$ at $N_{\rm CMB}=53$. The inspected formalism and table do not specify how that scalar label aggregates the two entropy spectra or its normalization; it remains a source-reported solver label here, without identifying it with a single-$S$ power fraction or deriving an independent three-field isocurvature bound. Figure 1 and §3 use the number of e-folds before the end of inflation, with $N(t)=\log[a(t_{\rm end})/a(t)]$; §3 evaluates the spectrum at $N=0$, while Tables 4–5 identify the CMB exit by $N_{\rm CMB}=53$. With its Fourier convention it defines $\mathcal P_{\mathcal R}(k,N)=k^3|\mathcal R_k(N)|^2/(2\pi^2)$ and evaluates the spectrum at the end of inflation. The Fourier modes are defined on the source’s flat FLRW slices; $\mathcal R$ is its comoving curvature perturbation and is not identified here with the uniform-density curvature $\zeta$ of [F4]. It uses $\mathcal P_{\mathcal R}(k_{\rm PBH})>10^{-3}$ as its adopted PBH-seeding criterion and converts $k_{\rm PBH}$ to a formation mass with $\gamma=0.2$ and $g_*=106.75$. Tables 4 and 5 give the Success parameters and outputs. These are model calculations; the threshold is not an observed event or universal PBH theorem.

[A1] The paper’s finite truncation, flux-dependent coefficients, initial conditions, spectator treatment, linear perturbations and reported numerical solver outputs are adopted only for this model study. No underlying compactification is assumed to exist unless separately constructed.

## Verification

1.1 The model is specified as a four-dimensional Einstein-frame field datum [F3], with primordial observables interpreted under [F4] and two periodic source/kinetic sectors of [F5]. The actual draft definitions [F1–F2] state the compactification-specific inputs a realization requires, but their current Step 1 readiness records are missing; [F1]'s O3/O7 interface files are outside the current run manifest, and its $N=1$ inputs remain escalated. Therefore the example is conditional on the source's finite EFT data and does not claim that those geometric, zero-mode or global-control conditions have been accepted or established locally. [given, F1, F2, F3, F4, F5, A1]

1.2 The paper’s Table 4 gives the stated Success-point masses, decay constants and initial fields, and its discussion gives $A_2\simeq10^{-6}$; Table 5 reports $\mathcal P_{\mathcal R,\rm peak}=3.5\times10^{-3}$ and the model-inferred mass $2.5\times10^{21}\,\mathrm g$. Since $3.5\times10^{-3}>10^{-3}$, the reported Success spectrum exceeds the paper’s adopted PBH-seeding threshold. This comparison reproduces the paper’s numerical criterion; it is not a detection or an independent recalculation of its perturbation solver. [F6, A1, algebra]

2.1 The same study reports negligible impact for most scanned sub-Planckian decay constants and identifies the tuned large-$f_2$, small-prefactor region as the enhancing case; its §7 leaves the global high-rank/tadpole construction and reheating for future work. The conclusion therefore remains restricted to that finite-EFT numerical study. [F6, A1, step 1.2] ∎
