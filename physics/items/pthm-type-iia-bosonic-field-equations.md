---
id: pthm-type-iia-bosonic-field-equations
kind: physics-theorem
title: Type Iia Bosonic Field Equations
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 9
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - post-ten-dimensional-ns-ns-supergravity-action
  - post-type-iia-two-derivative-supergravity-action
  - pthm-type-iia-rr-bianchi-from-potentials
  - def-countable-choice
  - thm-general-stokes-theorem
  - thm-the-exterior-derivative-is-a-graded-derivation
  - thm-the-exterior-derivative-squares-to-zero
  - lem-supergravity-compact-test-coefficient-vanishing
  - lem-supergravity-lorentzian-variations-realize-all-directions
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-ten-dimensional-ns-ns-supergravity-action: formulation-prerequisite
  post-type-iia-two-derivative-supergravity-action: physical-assumption
  pthm-type-iia-rr-bianchi-from-potentials: physical-result
  def-countable-choice: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
  thm-the-exterior-derivative-is-a-graded-derivation: mathematical-premise
  thm-the-exterior-derivative-squares-to-zero: mathematical-premise
  lem-supergravity-compact-test-coefficient-vanishing: mathematical-premise
  lem-supergravity-lorentzian-variations-realize-all-directions: mathematical-premise
physical_scope: "Local Euler–Lagrange equations of the named massless source-free two-derivative action. Variations are smooth and compactly supported in an oriented coordinate patch. The equations are model deductions, not empirical claims, and include no localized currents or higher-derivative corrections."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§6.1, Theorem 6.2(a)–(e), including its displayed metric variation and trace; the metric coefficient in Eq. (a) and the RR Bianchi sign in Eq. (e) were checked against the stated action and potential definitions."
    - title: "Joseph Polchinski, String Theory, Volume II: Superstring Theory and Beyond"
      url: "https://library.institutpendidikan.ac.id/wp-content/uploads/2024/08/Joseph-Polchinski-_String-Theory-Volume-II-Superstring-Theory-and-Beyond_.pdf"
      locator: "§12.1, printed pp. 86–89, IIA string-frame action and field-strength conventions."
verification:
  precheck: pending
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
proof_strategy: direct
---

## Statement

On a smooth contractible oriented Lorentzian coordinate patch $U\subset\mathbb R^{1,9}$ with no sources, stationarity under arbitrary smooth compactly supported variations of $g_s,\Phi,B_2,C_1,C_3$ for the separately adopted massless type IIA action gives the following equations. Use $\Box\Phi=\nabla^M\nabla_M\Phi$, $|F_p|^2=F_{M_1\ldots M_p}F^{M_1\ldots M_p}/p!$, and
$$\langle i_MF_p,i_NF_p\rangle=\frac1{(p-1)!}F_{M A_2\ldots A_p}F_N{}^{A_2\ldots A_p},\qquad T^{(p)}_{MN}(F_p)=\langle i_MF_p,i_NF_p\rangle-\frac12(g_s)_{MN}|F_p|^2.$$
With $G_{MN}=R_{MN}-\tfrac12R(g_s)_{MN}$, the metric equation is
$$G_{MN}=-2\nabla_M\nabla_N\Phi+(2\Box\Phi-2|d\Phi|^2)(g_s)_{MN} +\frac12T^{(3)}_{MN}(H_3)+\frac12e^{2\Phi}\bigl(T^{(2)}_{MN}(G_2)+T^{(4)}_{MN}(\widetilde G_4)\bigr).$$
The raw dilaton equation is
$$R+4\Box\Phi-4|d\Phi|^2-\frac12|H_3|^2=0.$$
Under the metric equation displayed above, this raw equation is equivalent to the trace-reduced equation
$$\Box\Phi=2|d\Phi|^2-\frac12|H_3|^2+\frac34e^{2\Phi}|G_2|^2+\frac14e^{2\Phi}|\widetilde G_4|^2.$$
The form equations are
$$d(*G_2)=H_3\wedge *\widetilde G_4,\qquad d(*\widetilde G_4)=-H_3\wedge\widetilde G_4,$$
$$d(e^{-2\Phi}*H_3)=\frac12\widetilde G_4\wedge\widetilde G_4-G_2\wedge *\widetilde G_4.$$
The potential Bianchi identities are $dH_3=0$, $dG_2=0$, $d\widetilde G_4=-H_3\wedge G_2$, as in the source-free potential-Bianchi theorem. The Lorentzian Hodge star is characterized by $\alpha\wedge *\beta=\langle\alpha,\beta\rangle_{g_s}\operatorname{vol}_{g_s}$ for $p$-forms, where $\operatorname{vol}_{g_s}$ is the oriented Lorentzian volume form and the inner product is induced by $g_s$, including its one negative direction. No positive-definite Hodge-star convention is used. $R_{MN}$ uses Hamilton’s curvature sign, equivalently the sign fixed by variation identity [F5] below.

## Theorem references

[[post-type-iia-two-derivative-supergravity-action]]

[[pthm-type-iia-rr-bianchi-from-potentials]]

## Facts & Assumptions

**Given:** A smooth contractible oriented Lorentzian coordinate patch $U\subset\mathbb R^{1,9}$ with signature $(-+\cdots+)$, smooth fields $g_s,\Phi,B_2,C_1,C_3$, $dH_3=0$, and arbitrary compactly supported smooth field variations. Here $g_s=G^{(s)}$ is the string-frame metric, coordinates have length dimension, the metric and $\Phi$ are dimensionless, the potential components are dimensionless, and the field-strength components have dimension length$^{-1}$, as fixed in [[post-type-iia-two-derivative-supergravity-action]]. All actions and p-form norms are those of that item.

[A1] [[def-supergravity-conventions-and-normalizations]] (current batch-56 carrier and current ready Step 1 record inspected; its stated hypotheses match this use): the signature is $(-+\cdots+)$, $|F_p|^2=F^2/p!$, $\alpha'>0$, and $2\kappa_0^2=(2\pi)^7\alpha'^4>0$; the string and Einstein metrics are distinct and this variation uses $g_s$.

[A2] [[post-ten-dimensional-ns-ns-supergravity-action]] (current batch-56 carrier and current ready Step 1 record inspected; its stated hypotheses match this use): the NS action is $(2\kappa_0^2)^{-1}\int\sqrt{-g_s}e^{-2\Phi}(R+4|d\Phi|^2-\tfrac12|H_3|^2)\,d^{10}x$, with $H_3=dB_2$.

[A3] [[post-type-iia-two-derivative-supergravity-action]] adopts the added terms $-\frac1{4\kappa_0^2}\int\sqrt{-g_s}(|G_2|^2+|\widetilde G_4|^2)\,d^{10}x-\frac1{4\kappa_0^2}\int B_2\wedge G_4\wedge G_4$, with $G_2=dC_1$, $G_4=dC_3$, and $\widetilde G_4=G_4-C_1\wedge H_3$.

[F1] [[def-countable-choice]]: assume $\mathrm{AC}_\omega$, the axiom that every countable family of nonempty sets has a choice function.

[F2] [[thm-general-stokes-theorem]]: under $\mathrm{AC}_\omega$, on an oriented smooth manifold without boundary, $\int_U d\eta=0$ for every compactly supported smooth 9-form $\eta$. Thus all integrations by parts below have no boundary contribution.

[F3] [[thm-the-exterior-derivative-is-a-graded-derivation]] and [[thm-the-exterior-derivative-squares-to-zero]]: $d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^{\deg\alpha}\alpha\wedge d\beta$, and $d^2=0$.

[F4] The norm convention in [A1] implies that variation of $-\tfrac12|F_p|^2\sqrt{-g_s}$ with $F_p$ held fixed contributes $-\tfrac12\sqrt{-g_s}T^{(p)}_{MN}(F_p)\,\delta g^{MN}$. This follows by varying each of the $p$ inverse metrics in $F_{A_1\ldots A_p}F^{A_1\ldots A_p}/p!$; each equal term gives the stated $(p-1)!$-normalized contraction, and the determinant contributes $+\tfrac14\sqrt{-g_s}g_{MN}|F_p|^2\delta g^{MN}$.

[F5] For $f=e^{-2\Phi}$, the curvature variation in the convention of Hamilton §2 is
$$\delta\int\sqrt{-g_s}fR =\int\sqrt{-g_s}\left[fG_{MN}+(g_s)_{MN}\Box f-\nabla_M\nabla_N f\right]\delta g^{MN}.$$
It follows from $\delta\sqrt{-g_s}=-\frac12\sqrt{-g_s}(g_s)_{MN}\delta g^{MN}$, $\delta R_{MN}=\nabla_P\delta\Gamma^P{}_{MN}-\nabla_N\delta\Gamma^P{}_{MP}$, $\delta\Gamma^P{}_{MN}=\frac12g^{PQ}(\nabla_M\delta g_{QN}+\nabla_N\delta g_{QM}-\nabla_Q\delta g_{MN})$, and [F2] applied to the compactly supported divergence terms.

[F6] [[pthm-type-iia-rr-bianchi-from-potentials]]: $dH_3=0$, $dG_2=0$, and $d\widetilde G_4=-H_3\wedge G_2$ for the potentials in [A3].

[F7] [Hamilton, §6.1, Theorem 6.2(a)](https://arxiv.org/pdf/1607.00327v3) prints a metric equation with dilaton-gradient metric coefficient $-|d\Phi|^2g_{MN}$. The curvature sign used here is the one for which [F5] holds; the printed coefficient is checked against the action rather than imported as a premise.

[F8] [[lem-supergravity-compact-test-coefficient-vanishing]]: on an open Euclidean chart, if a finite tuple of continuous coefficient functions has zero integral pairing against every smooth compactly supported tuple of tests with a positive continuous weight, every coefficient vanishes pointwise.

[F9] [[lem-supergravity-lorentzian-variations-realize-all-directions]]: for a smooth Lorentzian metric on a smooth ten-manifold, each smooth compactly supported symmetric inverse-metric direction is realized by the derivative of a smooth family of Lorentzian metrics for all sufficiently small parameter values.

## Proof

1.1 Vary $g_s^{MN}$ with all forms and $\Phi$ fixed. For $f=e^{-2\Phi}$, $\nabla_M f=-2f\nabla_M\Phi$ and $\Box f=f(4|d\Phi|^2-2\Box\Phi)$. Substitution in [F5] gives $f[G_{MN}+2\nabla_M\nabla_N\Phi+(4|d\Phi|^2-2\Box\Phi)g_{MN}-4\nabla_M\Phi\nabla_N\Phi]$. The variation of $4f|d\Phi|^2\sqrt{-g_s}$ is $4f[\nabla_M\Phi\nabla_N\Phi-\tfrac12g_{MN}|d\Phi|^2]\sqrt{-g_s}\delta g^{MN}$. Adding these contributions cancels the rank-two gradient term and leaves $f[G_{MN}+2\nabla_M\nabla_N\Phi+(2|d\Phi|^2-2\Box\Phi)g_{MN}]$. [given, A1, A2, F1, F5, algebra]

1.2 Vary $\Phi$ while holding the other fields fixed. The terms are $-2f(R+4|d\Phi|^2-\tfrac12|H_3|^2)\delta\Phi$ and $8f\nabla^M\Phi\,\nabla_M\delta\Phi$. By [F2] and $\nabla_Mf=-2f\nabla_M\Phi$, the integral of the second term becomes $-8f(\Box\Phi-2|d\Phi|^2)\delta\Phi$. The sum is $-2f[R+4\Box\Phi-4|d\Phi|^2-\tfrac12|H_3|^2]\delta\Phi$. This coefficient is smooth; the coordinate weight is $\sqrt{-g_s}/(2\kappa_0^2)>0$ by [A1] and $f=e^{-2\Phi}>0$. Therefore [F8], applied to arbitrary compactly supported scalar tests, gives the raw dilaton equation pointwise. [given, A1, A2, F1, F2, F8, algebra]

1.3 Vary $C_1$, so $\delta G_2=d\delta C_1$ and $\delta\widetilde G_4=-\delta C_1\wedge H_3$. The kinetic variation is $$-\frac1{2\kappa_0^2}\int\left[d\delta C_1\wedge *G_2-\delta C_1\wedge H_3\wedge *\widetilde G_4\right].$$ By [F2], $\int d\delta C_1\wedge *G_2=\int\delta C_1\wedge d(*G_2)$. The resulting coefficient is smooth; its wedge pairing with the independent one-form components is a finite tuple of coordinate test pairings with positive weight $\sqrt{-g_s}/(2\kappa_0^2)$ by [A1]. The coordinate wedge pairing is nondegenerate, so [F8] makes the equation's coefficient vanish pointwise. The Chern–Simons term is independent of $C_1$. [given, A1, A3, F1, F2, F8, algebra]

1.4 Vary $C_3$, so $\delta G_4=\delta\widetilde G_4=d\delta C_3$. The kinetic term contributes $-\frac1{2\kappa_0^2}\int\delta C_3\wedge d(*\widetilde G_4)$ by [F2]. The Chern–Simons variation is $-\frac1{2\kappa_0^2}\int B_2\wedge d\delta C_3\wedge G_4$. Using $d(B_2\wedge\delta C_3\wedge G_4)=H_3\wedge\delta C_3\wedge G_4+B_2\wedge d\delta C_3\wedge G_4$, $dG_4=0$ by [F3] and $G_4=dC_3$, and compact support, this equals $-\frac1{2\kappa_0^2}\int\delta C_3\wedge H_3\wedge G_4$. The resulting coefficient is smooth; its wedge pairing with independent three-form components is a finite tuple of coordinate test pairings with positive weight $\sqrt{-g_s}/(2\kappa_0^2)$. Nondegeneracy of the coordinate wedge pairing and [F8] give the equation pointwise. Since $H_3\wedge C_1\wedge H_3=0$, $H_3\wedge\widetilde G_4=H_3\wedge G_4$, giving the displayed equation. [given, A1, A3, F1, F2, F3, F8, algebra]

2.1 Apply [F4] to the NS $H_3$ term and the two RR kinetic terms. The coefficient of $\delta g^{MN}$ in the full variation, after removing the common $\sqrt{-g_s}/(2\kappa_0^2)$, is $$f\left[G_{MN}+2\nabla_M\nabla_N\Phi+(2|d\Phi|^2-2\Box\Phi)g_{MN}-\frac12T^{(3)}_{MN}(H_3)\right] -\frac12\left[T^{(2)}_{MN}(G_2)+T^{(4)}_{MN}(\widetilde G_4)\right].$$ The Chern–Simons term has no metric dependence, since it is an integral of a top-degree form. By [F9], every compactly supported symmetric inverse-metric test direction is realized through Lorentzian metrics, so stationarity makes the pairing of each independent symmetric component of this coefficient vanish against every such test. The coefficient components are smooth and the volume weight $\sqrt{-g_s}/(2\kappa_0^2)$ is positive by [A1]. Apply [F8] to the finite list of independent symmetric components to conclude the coefficient vanishes pointwise. Since $f>0$, division by $f$ gives the displayed metric equation. [given, A1, A3, F4, F8, F9, step 1.1, algebra]

2.2 Vary $B_2$. The NS term contributes $+\frac1{2\kappa_0^2}\int\delta B_2\wedge d(e^{-2\Phi}*H_3)$. Since $\delta\widetilde G_4=-C_1\wedge d\delta B_2$, the RR kinetic term contributes $$\frac1{2\kappa_0^2}\int\delta B_2\wedge\left[G_2\wedge *\widetilde G_4-C_1\wedge d(*\widetilde G_4)\right],$$ using [F2] and compact support. The explicit Chern–Simons variation contributes $-\frac1{4\kappa_0^2}\int\delta B_2\wedge G_4\wedge G_4$. Substitute step 1.4, namely $d(*\widetilde G_4)=-H_3\wedge G_4$, to obtain $$d(e^{-2\Phi}*H_3)=\frac12G_4\wedge G_4-C_1\wedge H_3\wedge G_4-G_2\wedge *\widetilde G_4.$$ Because $(C_1\wedge H_3)\wedge(C_1\wedge H_3)=0$, the first two terms on the right equal $\tfrac12\widetilde G_4\wedge\widetilde G_4$. The resulting smooth equation pairs with the independent two-form variation components through the nondegenerate coordinate wedge pairing and positive weight $\sqrt{-g_s}/(2\kappa_0^2)$; [F8] therefore makes it hold pointwise. [given, A1, A3, F1, F2, F8, step 1.4, algebra]

3.1 Trace the metric equation of step 2.1 in ten dimensions. For each $p$-form, $g^{MN}\langle i_MF_p,i_NF_p\rangle=p|F_p|^2$, so $\operatorname{tr}T^{(p)}=(p-5)|F_p|^2$. Since $g^{MN}G_{MN}=-4R$, the trace gives $$R=-\frac92\Box\Phi+5|d\Phi|^2+\frac14|H_3|^2+\frac38e^{2\Phi}|G_2|^2+\frac18e^{2\Phi}|\widetilde G_4|^2.$$ Equating this with $R=-4\Box\Phi+4|d\Phi|^2+\tfrac12|H_3|^2$ from step 1.2 and rearranging yields the displayed trace-reduced dilaton equation. [given, step 2.1, step 1.2, algebra]

3.2 The potential definitions imply $dH_3=0$ and [F6] gives $dG_2=0$, $d\widetilde G_4=-H_3\wedge G_2$. Thus all field equations and Bianchi identities listed in the theorem have been obtained from the action or its potential definitions. The equations are conditional model deductions under the declared action and source-free hypotheses. [given, A3, F6, step 1.3, step 1.4, step 2.2]

4.1 Hamilton’s displayed metric equation [F7] contains $-|d\Phi|^2g_{MN}$ in place of the $-2|d\Phi|^2g_{MN}$ in the corrected equation above; direct variation in steps 1.1–1.2 gives the latter, and only that coefficient makes the trace calculation in step 3.1 consistent with the displayed raw dilaton equation. Hamilton’s printed plus sign for $d\widetilde G_4$ is likewise incompatible with the stated potential definition, as proved in [[pthm-type-iia-rr-bianchi-from-potentials]]. [given, F7, step 1.1, step 2.1, step 1.2, step 3.1, step 3.2] ∎

## Remarks

Hamilton’s Theorem 6.2(a) is transcribed with a metric coefficient that fails direct variation and its own trace/dilaton consistency check; this item records the locally derived corrected coefficient. The sign defect in Theorem 6.2(e) is separate. Neither source defect is silently adopted.

The factor $\mathrm{AC}_\omega$ enters only through the chosen general Stokes supplier for compactly supported integration by parts. The physical deduction otherwise uses local differential-form calculus and compact support.

## References

[M. J. D. Hamilton, §6.1, Theorem 6.2 and its proof](https://arxiv.org/pdf/1607.00327v3)

[Joseph Polchinski, §12.1](https://library.institutpendidikan.ac.id/wp-content/uploads/2024/08/Joseph-Polchinski-_String-Theory-Volume-II-Superstring-Theory-and-Beyond_.pdf)

[[post-type-iia-two-derivative-supergravity-action]]

[[pthm-type-iia-rr-bianchi-from-potentials]]
