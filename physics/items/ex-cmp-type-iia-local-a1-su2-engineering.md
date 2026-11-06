---
id: ex-cmp-type-iia-local-a1-su2-engineering
kind: example
title: Local A1-Fibered Calabi–Yau Engineering of Pure $N=2$ SU(2)
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 10
domain: physics
library: physics
category: string-theory
deps:
  - def-axiom-of-choice
  - def-cmp-n2-special-kahler-period-data
  - def-cmp-type-iia-local-cy3-geometric-engineering
  - def-supergravity-conventions-and-normalizations
  - post-type-iia-two-derivative-supergravity-action
  - post-type-ii-dp-brane-dbi-wz-action
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-cmp-n2-special-kahler-period-data: formulation-prerequisite
  def-cmp-type-iia-local-cy3-geometric-engineering: formulation-prerequisite
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-type-iia-two-derivative-supergravity-action: physical-assumption
  post-type-ii-dp-brane-dbi-wz-action: physical-assumption
justified_by: []
forward_refs: []
aliases: []
axiom_strength: "Full AC is inherited only through the conditional compact N=2 period/Hodge supplier; no local period theorem is inferred from compact Hodge theory."
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
physical_scope: "The source-reported local Type IIA A1-fibered pure N=2 SU(2) branch, with a static single-Abelian D2 probe and the stated scale limits. It is not a globally compact vacuum, and its remaining threshold conditions are explicit inputs rather than a reconstructed full spectrum."
empirical_premises: []
sources:
  references:
    - title: "Sheldon Katz, Albrecht Klemm, and Cumrun Vafa, Geometric Engineering of Quantum Field Theories, arXiv:hep-th/9609239v2"
      url: "https://arxiv.org/pdf/hep-th/9609239v2"
      locator: "§2 and §2.1, equation (2.1), PDF pp. 4–6; A1 fiber, wrapped D2 W± states, and the pure SU(2) decoupling scaling."
    - title: "Peter Mayr, Geometric Construction of N=2 Gauge Theories, arXiv:hep-th/9807096v1"
      url: "https://arxiv.org/pdf/hep-th/9807096v1"
      locator: "§2, equations (2.6), (2.7), (2.11), and (2.12); base-volume gauge coupling, base-sector caveat, and string/fiber/base limits."
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture II §2.5, equation (2.19), PDF p. 15; DBI density and the source's tension notation. The local postulate fixes the numeric convention used here."
---

## Example

Let $Y_\epsilon$ be the source-specified resolved local Type IIA Calabi–Yau threefold, with a holomorphic map $\pi_\epsilon:Y_\epsilon\to B$ to $B=\mathbb P^1_b$. A selected smooth K3 fiber contains an exceptional holomorphic curve $C_f\cong\mathbb P^1_f$ in the chosen local resolution of the quotient surface germ $\mathbb C^2/\{I,-I\}$, where $-I$ acts by $(z_1,z_2)\mapsto(-z_1,-z_2)$; the exceptional curve is the inverse image of the quotient point. This is the local $A_1$ surface singularity and its resolution. A K3 fiber means a compact simply connected smooth complex surface with trivial canonical bundle. Let $C_b\cong B$ be the selected base curve in the local threefold. Write $A_f(\epsilon)$ and $A_b(\epsilon)$ for the areas induced by the string-frame Kähler form, and set $t_f=A_f/\alpha'$ and $t_b=A_b/\alpha'$. Use natural units, $\ell_s=\sqrt{\alpha'}=\epsilon\downarrow0$, a fixed dimensionless string coupling $g_{\mathrm{str}}=e^{\Phi_\infty}>0$, and fixed positive energy parameters $a$ and $\Lambda$, where $a$ is the selected Coulomb-branch scalar coordinate and $\Lambda$ the strong scale. Suppose the source-normalized limits satisfy $t_f/(\epsilon a)\to c_f>0$ and $e^{-t_b}/(\epsilon^4\Lambda^4)\to c_b>0$. The selected field theory is pure four-dimensional $N=2$ $SU(2)$ gauge theory, meaning a theory with eight real supercharges, gauge group $SU(2)=\{U\in M_2(\mathbb C):U^*U=I,\det U=1\}$, and no matter hypermultiplets. The source model assigns oppositely oriented D2-branes on $C_f$ to $W^\pm$ BPS states, with $M_W=|Z(W^\pm)|$; take a static fiber probe $\iota_f:W_f=\mathbb R_t\times C_f\hookrightarrow X^{10}$, where $X^{10}$ is the ten-dimensional background spacetime, with induced string-frame metric $-dt^2\oplus h_f$, constant $\Phi=\Phi_\infty$, vanishing pulled-back $B_2$ and $C_3$, zero worldvolume curvature $F_A$, and no backreaction. For the base-wrapped sector take a static probe $\iota_b:W_b=\mathbb R_t\times C_b\hookrightarrow X^{10}$ with induced metric $-dt^2\oplus h_b$ and the same constant-dilaton, zero-pullback, zero-curvature, and no-backreaction assumptions. Adopt the source's six-dimensional gauge zero-mode sector on $M_4\times B$ and the fixed strong scale $\Lambda$. The field-theory energy cutoff is $E_{\mathrm{FT}}:=\max\{a,\Lambda\}$; assume $M_{\mathrm{Pl}}(\epsilon)/E_{\mathrm{FT}}\to\infty$ and $M_q(\epsilon)/E_{\mathrm{FT}}\to\infty$ for every other unwanted threshold $M_q$ not calculated here. Under the stated DBI normalization, the fiber D2 rest mass tends $c_fa/((2\pi)^2g_{\mathrm{str}})$, $t_f\to0$, $t_b\to\infty$, the string scale and base-wrapped D2 threshold diverge, and the bare string-scale gauge coupling tends zero. This source-specific local limit does not assert a compact completion satisfying global flux and brane consistency conditions.

## Example references

[[def-cmp-type-iia-local-cy3-geometric-engineering]]

[[def-cmp-n2-special-kahler-period-data]]

[[def-supergravity-conventions-and-normalizations]]

[[post-type-iia-two-derivative-supergravity-action]]

[[post-type-ii-dp-brane-dbi-wz-action]]

[[def-axiom-of-choice]]

[Katz–Klemm–Vafa, §2 and §2.1](https://arxiv.org/pdf/hep-th/9609239v2)

[Mayr, §2](https://arxiv.org/pdf/hep-th/9807096v1)

[Polchinski, Chaudhuri, and Johnson, Lecture II §2.5](https://arxiv.org/pdf/hep-th/9602052v2)

## Facts & Assumptions

**Given:** The local fibration and source-reported pure $N=2$ SU(2) dictionary in the Example; $\ell_s=\epsilon\downarrow0$; fixed $g_{\mathrm{str}}>0$, $a>0$, and $\Lambda>0$; the two stated source-normalized area limits; and the stated probe and six-dimensional gauge-sector hypotheses.

[F1] [[def-cmp-type-iia-local-cy3-geometric-engineering]] defines the local smooth/resolved geometry, dimensionless curve areas, charge map, field-theory data, and explicit decoupling requirements. It does not assert existence of a family satisfying them.

[F2] [[def-cmp-n2-special-kahler-period-data]] states compact special-Kähler period data under smooth proper compact Kähler CY3, locally constant Hodge-number, locally free relative-filtration, flat rational polarization, and marked torsion-free degree-three lattice hypotheses. Its carrier exists, but its current Step 1 decision is `escalated`: that record cites an escalated four-dimensional $N=2$ postulate whose own blocker says the conventions carrier is absent, although that conventions carrier and its current ready record are present. This example uses only the actual compact-family statement as a conditional scope boundary, not as an accepted proof of a local period result; its local $a$ and charge dictionary are source-model inputs.

[F3] [[def-supergravity-conventions-and-normalizations]] fixes $\alpha'$ as a length-squared parameter and $\ell_s=\sqrt{\alpha'}$ in natural units; it identifies the dimensionless coupling $g_{\mathrm{str}}=e^{\Phi_\infty}$ separately from the string-frame metric.

[A1] Adopt the Axiom of Choice (AC): every family of nonempty sets has a choice function, as defined in [[def-axiom-of-choice]]. It is inherited through the compact period/Hodge supplier [F2]; no choice argument is used in the DBI or limit calculations.

[A2] [[post-type-iia-two-derivative-supergravity-action]] is the source-free leading bulk Type IIA model. It supplies the string-frame bulk context only; the D2 probe action is a separate physical input.

[A3] [[post-type-ii-dp-brane-dbi-wz-action]] adopts a single-Abelian D$p$-brane probe action with Dirac–Born–Infeld (DBI) term $-\mu_p\int_W e^{-\Phi}\sqrt{-\det(P[g^{(s)}]+\mathcal F)}$ and Wess–Zumino (WZ) term, where $F_A=dA$, $\mathcal F=2\pi\alpha'F_A-P[B_2]$, $\mu_p=((2\pi)^p\alpha'^{(p+1)/2})^{-1}$, and the constant-dilaton tension is $T_p=\mu_p/g_{\mathrm{str}}$. Here $g^{(s)}$ denotes the string-frame metric and $g_{\mathrm{str}}=e^{\Phi_\infty}$ the dimensionless coupling; these are the same metric and coupling that the supplier now denotes separately by $G^{(s)}$ and $g_{\mathrm{str}}$. With $p=2$ this is the D2 probe used here. The WZ contribution vanishes for the explicitly assumed zero pullbacks and zero curvature; the supplier's explicit local RR-potential crosswalk is unused because this WZ contribution is zero.

[A4] Katz–Klemm–Vafa and Mayr supply the physical model dictionary: the fiber D2 orientations are the $W^\pm$ states, the base-wrapped D2 states belong to the extra $SU(2)_{\mathrm{Base}}$ sector, the fiber area sets the W mass, the base volume controls the four-dimensional bare coupling, and the pure asymptotically-free SU(2) limit holds $\Lambda$ and the Coulomb parameter fixed. Here asymptotically free means that the gauge coupling decreases as energy increases. The source's $b=0$ conformal case is excluded.

[A5] For the base-coupling calculation, adopt the source's six-dimensional Yang–Mills zero-mode sector on $M_4\times B$, with product metric and a gauge field $A_\mu(x)$ independent of $B$, where $M_4$ is the four-dimensional spacetime and the curvature is $F=dA+A\wedge A$. Its action and normalization are
$$S_6=-\frac{1}{4g_6^2}\int_{M_4\times B}d^4x\,d^2y\,\sqrt{-g_4}\sqrt{h_b}\,\operatorname{Tr}(F_{\mu\nu}F^{\mu\nu}),\qquad g_6^2=\widehat g_6^2\ell_s^2,$$
where $\widehat g_6=1$ is the adopted source-matched dimensionless normalization, and the trace has the same fixed gauge-generator normalization as the four-dimensional coupling in the Definition. The coefficient obtained after integrating this zero mode is the bare coupling evaluated at $M_s$; this convention gives $g_4^{-2}=t_b$, matching the coupling normalization in the source scaling [A4]. This is the scoped source input behind Mayr's equation (2.6), not a consequence of the source-free ten-dimensional bulk action. A different fixed six-dimensional normalization would require changing the exponential fixed-$\Lambda$ scaling in the Statement consistently.

[A6] The source's $M_{\mathrm{Pl}}(\epsilon)/E_{\mathrm{FT}}\to\infty$ limit and the condition $M_q(\epsilon)/E_{\mathrm{FT}}\to\infty$ for every remaining unmodeled threshold are adopted hypotheses. This example calculates the string scale and the named base/fiber D2 thresholds only; it does not reconstruct the full Kaluza–Klein spectrum or a compact global completion.

## Verification

**Proof technique:** conditional DBI determinant and dimensional-reduction calculations followed by direct asymptotic limits.

**Given:** The local $A_1$ fibration, $A_f=\ell_s^2t_f$, $A_b=\ell_s^2t_b$, static D2 probe and source dictionary [A3]–[A6], with the units and local-model boundary in [F1]–[F3].

1.1 By the source-specific input [A4], the two orientations of the exceptional fiber curve label $W^\pm$ in the selected pure SU(2) theory; this is a model assignment, not a consequence of broad CY data [F1]. The compact supplier [F2] applies only to its smooth proper compact-family hypotheses, so it supplies no unproved local period matching in this example. [F1, F2, A1, A4, given]

1.2 For $p=2$, [A3] gives $\mu_2=((2\pi)^2\ell_s^3)^{-1}$ and $T_2=\mu_2/g_{\mathrm{str}}$. Since $F_A=0$ and the pulled-back $B_2$ and $C_3$ vanish, $\mathcal F=0$ and the WZ contribution is zero under [A3]. On the static worldvolume the induced metric is $-dt^2\oplus h_f$, so $-\det P[g^{(s)}]=\det h_f$ and the DBI action per unit time is $-T_2\int_{C_f}dA_s=-T_2A_f$. Thus the rest energy is $M_W=T_2A_f=t_f/((2\pi)^2g_{\mathrm{str}}\ell_s)$; the source-free bulk action [A2] alone does not supply this localized probe action, and no higher-derivative correction enters this calculation. [A2, A3, A4, F3, given, algebra]

2.1 Since $\ell_s=\epsilon$ and $t_f/(\epsilon a)\to c_f>0$, the formula in step 1.2 gives $M_W\to c_fa/((2\pi)^2g_{\mathrm{str}})$, which is finite and positive, while $M_s=\epsilon^{-1}\to\infty$. Also $e^{-t_b}/(\epsilon^4\Lambda^4)\to c_b>0$ and $\epsilon^4\Lambda^4\to0$, hence $e^{-t_b}\to0$ and $t_b=-\log(e^{-t_b})\to+\infty$. [F3, A4, step 1.2, given, algebra]

2.2 The base probe has the same stated DBI assumptions as the fiber probe, so its rest energy is $M_b=T_2A_b=t_b/((2\pi)^2g_{\mathrm{str}}\epsilon)$. Because $t_b\to\infty$ and $\epsilon\downarrow0$, $M_b\to\infty$; this explicitly realizes the source's decoupling of the base-wrapped $SU(2)_{\mathrm{Base}}$ states in the asymptotically-free branch. [A3, A4, step 1.2, algebra]

3.1 For the zero mode independent of the base, integrating the declared six-dimensional gauge action [A5] over $B$ multiplies the four-dimensional gauge kinetic term by $A_b$: $g_4^{-2}=A_b/g_6^2=(\ell_s^2t_b)/(\ell_s^2)=t_b$. This is the source normalization $g^{-2}=t_b$ used in the fixed-$\Lambda$ scaling [A4]. Hence $g_4(M_s)\to0$ as $t_b\to\infty$. The fixed $\Lambda$ is a separate input; it is not the bare coupling at $M_s$. [A4, A5, step 2.1, algebra]

4.1 The remaining $M_{\mathrm{Pl}}$ and unmodeled-threshold conditions are exactly the explicit hypotheses [A6] required by [F1]. The calculations above verify the listed string and base/fiber D2 scales only; they do not prove a compact completion, global flux and brane-charge cancellation, or a complete Kaluza–Klein (KK) mass spectrum for modes associated with the internal dimensions. [F1, A6, step 2.1, step 2.2, step 3.1] ∎

## Remarks

The fixed quantity is the low-energy gauge-theory data, especially $\Lambda$; the bare coupling at the string scale runs to zero in this asymptotically-free branch. For a conformal $b=0$ theory, Mayr notes that a large-base limit does not decouple the base-wrapped sector, so that branch is outside this example.

```tikzcd
Y_\epsilon \arrow[d, "\pi_\epsilon"] \\
B\simeq\mathbb{P}^1_b
```

This diagram records only the specified holomorphic map to the base. The exceptional curve $C_f$ lies in the chosen resolved fiber over a selected base point; the diagram does not assert a product fibration or a compact global completion, and no proof step uses it.
