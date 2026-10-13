---
id: ex-gr-perfect-fluid-energy-conditions
kind: example
title: "Energy-condition verdicts for dust, radiation and the cosmological effective fluid"
status: draft
origin: session
domain: physics
dependency_level: 14
physical_scope: "Pointwise algebraic reading of the four energy conditions for prescribed perfect-fluid models in a rest frame, including the effective fluid associated with a cosmological parameter in the adopted field law. No dynamics, no solution of any field equation, no measurement and no claim about nature is asserted; the example records the inequalities alone."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [pthm-gr-einstein-consistency-and-energy-conditions, def-gr-energy-conditions, def-gr-perfect-fluid-matter-model, post-gr-einstein-field-law, def-gr-si-unit-and-coordinate-conventions, def-gr-smooth-lorentzian-objects, def-gr-inverse-metric-and-musical-isomorphisms]
dependency_roles:
  pthm-gr-einstein-consistency-and-energy-conditions: physical-result
  def-gr-energy-conditions: formulation-prerequisite
  def-gr-perfect-fluid-matter-model: formulation-prerequisite
  post-gr-einstein-field-law: formulation-prerequisite
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.7: the perfect-fluid energy conditions and the cosmological-constant case, printed pp. 194-198 (PDF pp. 201-205)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the Weak Energy Condition and the perfect-fluid specialization, printed pp. 117-118 (PDF pp. 124-125)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Example

Adopt a perfect-fluid model $(\varepsilon,p,n,T)$ in the classical framework
([[def-gr-perfect-fluid-matter-model]]) and use the rest-frame equivalences of
[[pthm-gr-einstein-consistency-and-energy-conditions]] clause (f): at a point
with rest frame $(e_0,e_1,e_2,e_3)$, $e_0=n$, the four conditions of
[[def-gr-energy-conditions]] read

$$\mathrm{WEC}\iff\varepsilon\ge0\ \text{and}\ \varepsilon+p\ge0,\qquad \mathrm{NEC}\iff\varepsilon+p\ge0,\qquad \mathrm{DEC}\iff\varepsilon\ge|p|,\qquad \mathrm{SEC}\iff\varepsilon+3p\ge0\ \text{and}\ \varepsilon+p\ge0 .$$

Then:

1. **Dust** ($p=0$, $\varepsilon>0$): WEC, NEC, DEC and SEC all hold.
2. **Radiation** ($p=\varepsilon/3$, $\varepsilon>0$): WEC, NEC, DEC and SEC all
   hold.
3. **Positive cosmological effective fluid** ($\varepsilon>0$,
   $p=-\varepsilon$, as for the term $-\Lambda g_{ab}/\kappa$ with
   $\Lambda>0$ in [[post-gr-einstein-field-law]]): WEC, NEC and DEC hold (with
   equality in the non-strict inequalities) and SEC fails.
4. **Negative cosmological effective fluid** ($\varepsilon<0$,
   $p=-\varepsilon$, $\Lambda<0$): WEC and DEC fail, NEC holds with equality
   and SEC holds. Together with clause 3, this shows that WEC and SEC are
   incomparable by implication.

## Facts & Assumptions

**Given:** A perfect-fluid model with rest energy density $\varepsilon$ and pressure $p$, and the four equivalences displayed above.

[L1] The rest-frame equivalences for the four conditions are the equivalences of [[pthm-gr-einstein-consistency-and-energy-conditions]] clause (f), derived there from the tensor form $T_{ab}=(\varepsilon+p)n_an_b+pg_{ab}$.

[L2] The stress-energy tensor of the field-law term $-\Lambda g_{ab}/\kappa$ has the perfect-fluid form with $\varepsilon=\Lambda/\kappa$ and $p=-\Lambda/\kappa$: $T_{ab}=-(\Lambda/\kappa)g_{ab}=(\varepsilon+p)n_an_b+pg_{ab}$ with $\varepsilon+p=0$ ([[post-gr-einstein-field-law]] clause (i), [[def-gr-perfect-fluid-matter-model]], [[def-gr-si-unit-and-coordinate-conventions]]).

## Verification

**Proof technique:** direct substitution into the four equivalences.

1.1 (Dust and radiation.) By [L1] the four conditions are read off from the displayed inequalities. For $p=0$ and $\varepsilon>0$: $\varepsilon\ge0$, $\varepsilon+p=\varepsilon>0$, $\varepsilon\ge|p|=0$ and $\varepsilon+3p=\varepsilon>0$, so all four right-hand sides hold. For $p=\varepsilon/3$ and $\varepsilon>0$: $\varepsilon\ge0$, $\varepsilon+p=\tfrac43\varepsilon>0$, $\varepsilon\ge|p|=\varepsilon/3$, and $\varepsilon+3p=2\varepsilon>0$, so all four hold. These are clauses 1 and 2. [L1, given, algebra]

1.2 (Positive effective fluid.) By [L1] and [L2], let $\varepsilon>0$, $p=-\varepsilon$. Then $\varepsilon\ge0$ and $\varepsilon+p=0\ge0$: WEC holds; $\varepsilon+p=0$: NEC holds; $\varepsilon\ge|p|=\varepsilon$: DEC holds; but $\varepsilon+3p=-2\varepsilon<0$, so SEC fails. This is clause 3. [L1, L2, algebra]

2.1 (Negative effective fluid.) By [L1] and [L2], let $\varepsilon<0$, $p=-\varepsilon>0$. Then $\varepsilon\ge0$ fails, so WEC fails; $\varepsilon\ge|p|=-\varepsilon$ fails (an inequality $t\ge|t|$ with $t<0$ is false), so DEC fails; $\varepsilon+p=0\ge0$, so NEC holds; and $\varepsilon+3p=-2\varepsilon>0$ together with $\varepsilon+p=0$ gives SEC. This is clause 4 and shows that SEC need not imply WEC or DEC. Clause 3 shows that WEC need not imply SEC, so WEC and SEC are incomparable. These examples are consistent with the implications DEC $\Rightarrow$ WEC $\Rightarrow$ NEC and SEC $\Rightarrow$ NEC proved in [[def-gr-energy-conditions]]. [L1, L2, algebra] ∎

## Remarks

- **Not a solution claim.** The verdicts concern the pointwise inequalities for prescribed values of $\varepsilon$ and $p$; they do not assert that the corresponding fluid model solves the field equation or that the cosmological parameter has either sign.

- **Convention dependence.** The equivalences use the strict-timelike convention of [[def-gr-energy-conditions]]; the proof obtains boundary inequalities by limits of timelike vectors, using continuity of this tensor.
