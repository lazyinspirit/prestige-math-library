---
id: ex-emgmath-lorentz-star
kind: example
title: "Lorentz star square and constant two-form"
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-countable-choice, def-exterior-derivative-by-the-invariant-vector-field-formula, def-emg-lorentzian-forms, def-gr-inverse-metric-and-musical-isomorphisms, lem-emg-lorentz-hodge-calculus, prop-differential-forms-form-a-graded-commutative-algebra, thm-local-coordinate-formula-for-the-exterior-derivative]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-exterior-derivative-by-the-invariant-vector-field-formula: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  prop-differential-forms-form-a-graded-commutative-algebra: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, sections 2.4.2 and 3.1.3, equations (2.87) and (3.97)-(3.98)"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S2.html"
      locator: "Section 2.4.2, equation (2.87): two-form component convention. The example's Lorentzian star signs are supplied by the local Hodge lemma."
    - title: "H. S. Reall, Part III General Relativity, Cambridge, October 12 2022 revision, sections 8.1 and 8.5, equations (8.1) and (8.55)-(8.56)"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "Section 8.1, equation (8.1): wedge normalization; section 8.5, equations (8.55)-(8.56): Hodge star convention and Lorentzian star-square sign."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

On $\mathbb R^4$ take the metric $g=\operatorname{diag}(-1,1,1,1)$, the orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, and the time-orientation field $N:=\partial_0$. Then $n:=\partial_0$ is an observer because $g(n,n)=-1$ and $g(n,N)=-1<0$. For constants $c>0$ and $E_0,B_0\in\mathbb R$, let

$$F=-\frac{E_0}{c}\,dx^0\wedge dx^1+B_0\,dx^2\wedge dx^3.$$

This constant two-form has

$$\star_gF=\frac{E_0}{c}\,dx^2\wedge dx^3+B_0\,dx^0\wedge dx^1,\qquad \star_g^2F=-F,$$

$$F_{ab}F^{ab}=2(B_0^2-E_0^2/c^2),\qquad F\wedge F=-\frac{2E_0B_0}{c}\,\mathrm{vol}_g.$$

The calculation concerns the mathematical Lorentzian Hodge operator and a smooth two-form. It does not assert that a physical field was measured or that a Maxwell model was adopted.

## Facts & Assumptions

**Given:** The oriented Minkowski metric and two-form in the Example, with real $E_0,B_0$ and $c>0$.

[F1] In an oriented orthonormal coframe, $\star_ge^{01}=-e^{23}$, $\star_ge^{23}=e^{01}$, and $\star_g^2=-\operatorname{id}$ on two-forms. ([[lem-emg-lorentz-hodge-calculus]])

[F2] The component formula for the exterior derivative is $(dF)_{abc}=3\partial_{[a}F_{bc]}$. ([[def-exterior-derivative-by-the-invariant-vector-field-formula]], [[thm-local-coordinate-formula-for-the-exterior-derivative]])

[F3] The wedge product is graded-commutative, so two-forms commute under $\wedge$. ([[prop-differential-forms-form-a-graded-commutative-algebra]])

[F4] Index raising uses the inverse Lorentz metric of the Example. ([[def-gr-inverse-metric-and-musical-isomorphisms]])

[A1] The constants are formal real parameters; no physical unit or empirical value is used.

## Verification

1.1 Under the formal-parameter assumption [A1], apply [F1] to $dx^0\wedge dx^1$ and $dx^2\wedge dx^3$. Linearity gives $\star_gF=(E_0/c)dx^2\wedge dx^3+B_0dx^0\wedge dx^1$. Applying [F1] again gives $\star_g^2F=(E_0/c)dx^0\wedge dx^1-B_0dx^2\wedge dx^3=-F$. [F1, given, A1, algebra]

1.2 By [F4] and the diagonal metric, $F^{01}=E_0/c$ and $F^{23}=B_0$. Antisymmetry counts the $01$ and $23$ pairs twice, so $F_{ab}F^{ab}=2(-E_0^2/c^2+B_0^2)$. [given, F4, algebra]

2.1 The only nonzero wedge contribution is the cross term between $-(E_0/c)dx^0\wedge dx^1$ and $B_0dx^2\wedge dx^3$. By [F3] it occurs twice and equals $-2E_0B_0\,\mathrm{vol}_g/c$. The coefficients of $F$ are constant, so [F2] also gives $dF=0$. These are mathematical identities, with no Maxwell or empirical premise. [F2, F3, given, algebra] ∎
