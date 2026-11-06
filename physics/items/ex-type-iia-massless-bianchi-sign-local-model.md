---
id: ex-type-iia-massless-bianchi-sign-local-model
kind: example
title: Local Type Iia Potential Model Detecting the RR Bianchi Sign
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 9
domain: physics
library: physics
deps:
  - post-type-iia-two-derivative-supergravity-action
  - pthm-type-iia-rr-bianchi-from-potentials
  - thm-the-exterior-derivative-is-a-graded-derivation
  - thm-the-exterior-derivative-squares-to-zero
dependency_roles:
  post-type-iia-two-derivative-supergravity-action: physical-assumption
  pthm-type-iia-rr-bianchi-from-potentials: physical-result
  thm-the-exterior-derivative-is-a-graded-derivation: mathematical-premise
  thm-the-exterior-derivative-squares-to-zero: mathematical-premise
physical_scope: "A smooth local potential configuration on a contractible coordinate patch that distinguishes the correct negative massless RR Bianchi sign from the inconsistent positive sign. It is a kinematic sign check only; it asserts no solution of the supergravity equations, global string background, or empirical realization."
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§6.1, potential definitions and Theorem 6.2(e), whose printed sign is checked against the local potentials."
    - title: "Joseph Polchinski, String Theory, Volume II: Superstring Theory and Beyond"
      url: "https://library.institutpendidikan.ac.id/wp-content/uploads/2024/08/Joseph-Polchinski-_String-Theory-Volume-II-Superstring-Theory-and-Beyond_.pdf"
      locator: "§12.1.5 and §12.1.8, printed pp. 86–89, massless IIA field-strength redefinition."
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

## Example

Let $\ell>0$ have length dimension and $U=(-\ell,\ell)^{10}$ have coordinates $x^0,\ldots,x^9$ of length dimension, orientation $dx^0\wedge\cdots\wedge dx^9$, flat Lorentzian metric $\eta=\operatorname{diag}(-1,1,\ldots,1)$, and constant dilaton $\Phi=0$. Set
$$B_2=\frac{x^1}{\ell}\,dx^2\wedge dx^3,\qquad C_1=\frac{x^4}{\ell}\,dx^5,\qquad C_3=0.$$
These smooth potentials give
$$H_3=\ell^{-1}dx^1\wedge dx^2\wedge dx^3,\quad G_2=\ell^{-1}dx^4\wedge dx^5,\quad G_4=0,\quad \widetilde G_4=\frac{x^4}{\ell^2}\,dx^1\wedge dx^2\wedge dx^3\wedge dx^5.$$
The potential components are dimensionless, while the field-strength components have dimension length$^{-1}$. Direct differentiation yields $d\widetilde G_4=-\ell^{-2}dx^1\wedge dx^2\wedge dx^3\wedge dx^4\wedge dx^5=-H_3\wedge G_2$, a nonzero five-form. Thus the plus-sign formula $d\widetilde G_4=+H_3\wedge G_2$ fails for this configuration.

## Example references

[M. J. D. Hamilton, §6.1, Theorem 6.2(e)](https://arxiv.org/pdf/1607.00327v3)

[Joseph Polchinski, §12.1.5 and §12.1.8](https://library.institutpendidikan.ac.id/wp-content/uploads/2024/08/Joseph-Polchinski-_String-Theory-Volume-II-Superstring-Theory-and-Beyond_.pdf)

[[pthm-type-iia-rr-bianchi-from-potentials]]

## Facts & Assumptions

**Given:** $U$, its coordinates and orientation, the flat metric and constant dilaton above, and the three smooth potentials above.

[A1] [[post-type-iia-two-derivative-supergravity-action]] defines $H_3=dB_2$, $G_2=dC_1$, $G_4=dC_3$, and $\widetilde G_4=G_4-C_1\wedge H_3$ in the massless, source-free convention. This adopted postulate supplies the declared field definitions; no deductive proof of the action is used.

[F1] [[pthm-type-iia-rr-bianchi-from-potentials]]: for these local potentials with $dH_3=0$, the correct identity is $d\widetilde G_4=-H_3\wedge G_2$. Its local proof is complete and the example is conditional on this adopted massless convention.

[F2] [[thm-the-exterior-derivative-is-a-graded-derivation]] and [[thm-the-exterior-derivative-squares-to-zero]]: $d$ obeys the signed product rule and $d^2=0$.

## Verification

1.1 Differentiating the potentials gives $H_3=\ell^{-1}dx^1\wedge dx^2\wedge dx^3$, $G_2=\ell^{-1}dx^4\wedge dx^5$, $G_4=0$, $dH_3=0$, and $dG_2=0$. Since $C_1\wedge H_3=-x^4\ell^{-2}dx^1\wedge dx^2\wedge dx^3\wedge dx^5$ (moving $dx^5$ past three one-forms changes sign), the definition in [A1] gives the displayed positive $\widetilde G_4$. [given, A1, F2, algebra]

2.1 Differentiating $\widetilde G_4$ gives $$d\widetilde G_4=\ell^{-2}dx^4\wedge dx^1\wedge dx^2\wedge dx^3\wedge dx^5 =-\ell^{-2}dx^1\wedge dx^2\wedge dx^3\wedge dx^4\wedge dx^5.$$ The minus sign occurs when $dx^4$ is moved across $dx^1,dx^2,dx^3$. On the other hand $H_3\wedge G_2=+\ell^{-2}dx^1\wedge dx^2\wedge dx^3\wedge dx^4\wedge dx^5$, so $d\widetilde G_4=-H_3\wedge G_2\neq+H_3\wedge G_2$. The coordinate five-form is nonzero because these coordinate one-forms are linearly independent throughout $U$. [given, F1, step 1.1, algebra]

3.1 The potentials are smooth on the contractible patch and $dH_3=0$, so they meet the hypotheses of [F1] and realize its negative-sign identity explicitly. This example distinguishes the erroneous plus sign; it does not assert that these fields solve the Euler–Lagrange equations. [given, A1, F1, step 1.1, step 2.1] ∎

