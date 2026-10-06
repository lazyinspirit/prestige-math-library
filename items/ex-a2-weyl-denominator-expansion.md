---
id: ex-a2-weyl-denominator-expansion
kind: example
title: The A2 Weyl denominator expansion
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
justified_by: []
aliases: []
deps: [def-axiom-of-choice, thm-weyl-denominator-identity, def-weyl-alternation-operator, prop-root-systems-of-the-classical-complex-lie-algebras, def-classical-complex-matrix-lie-algebras, thm-the-root-set-is-a-reduced-crystallographic-root-system, prop-weyl-length-equals-positive-root-inversion-number, def-weyl-vector-rho-for-a-chosen-positive-system]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lectures"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.2, printed pp. 139--141 (Proposition 26.3 and Corollary 26.5, with the remark that the formula reduces to the Vandermonde determinant for sl_n)"
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Ch. V §6, printed p. 320 (Weyl denominator formula and the finite expansion for a fixed root system)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Take
$\mathfrak g=\mathfrak{sl}_3$ with simple roots $\alpha_1,\alpha_2$ realized
as in [[prop-root-systems-of-the-classical-complex-lie-algebras]], positive
roots $\Phi^+=\{\alpha_1,\alpha_2,\alpha_1+\alpha_2\}$, Weyl vector
$\rho=\alpha_1+\alpha_2$ and Weyl group
$W=S_3=\{1,s_1,s_2,s_1s_2,s_2s_1,w_0\}$ with lengths $0,1,1,2,2,3$. Expanding
both sides of the denominator identity
([[thm-weyl-denominator-identity]]) gives
$$e^{\rho}(1-e^{-\alpha_1})(1-e^{-\alpha_2})(1-e^{-\alpha_1-\alpha_2})=e^{\rho}-e^{s_1\rho}-e^{s_2\rho}+e^{s_1s_2\rho}+e^{s_2s_1\rho}-e^{w_0\rho}=A(\rho),$$
a finite identity between polynomials. The left side expands over the eight
subsets $S\subseteq\Phi^+$ with signs $(-1)^{|S|}e^{\rho-\sum_{\alpha\in S}\alpha}$,
and the unit terms from $S=\{\alpha_1,\alpha_2\}$ and
$S=\{\alpha_1+\alpha_2\}$ cancel; the remaining monomials are
$e^{\rho}-e^{\alpha_2}-e^{\alpha_1}+e^{-\alpha_1}+e^{-\alpha_2}-e^{-\rho}$,
which agrees term by term with the six Weyl translates
$\rho,\alpha_2,\alpha_1,-\alpha_1,-\alpha_2,-\rho$ of the right side.

## Facts & Assumptions

**Given:** The Axiom of Choice, the realization of $\mathfrak{sl}_3$ with
diagonal Cartan subalgebra and roots $\pm\alpha_1,\pm\alpha_2,\pm(\alpha_1+\alpha_2)$,
the positive system $\Phi^+=\{\alpha_1,\alpha_2,\alpha_1+\alpha_2\}$, the Weyl
vector $\rho$, the Weyl group $W=S_3$ with its elements and lengths, and the
alternant $A(\rho)$.

[A1] The Axiom of Choice is assumed; it enters through the root-system and
denominator suppliers below ([[def-axiom-of-choice]]).

[F1] In this realization the positive roots are $\alpha_1,\alpha_2$ and
$\alpha_1+\alpha_2$, the Weyl group acts by the simple reflections
$s_1,s_2$ with $s_1\alpha_1=-\alpha_1$, $s_1\alpha_2=\alpha_1+\alpha_2$,
$s_2\alpha_2=-\alpha_2$, $s_2\alpha_1=\alpha_1+\alpha_2$, so $s_1\rho=\alpha_2$,
$s_2\rho=\alpha_1$, $s_1s_2\rho=-\alpha_1$, $s_2s_1\rho=-\alpha_2$ and
$w_0\rho=-\rho$, while
$\rho=\tfrac12\sum_{\alpha\in\Phi^+}\alpha=\alpha_1+\alpha_2$
([[prop-root-systems-of-the-classical-complex-lie-algebras]],
[[def-classical-complex-matrix-lie-algebras]],
[[def-weyl-vector-rho-for-a-chosen-positive-system]],
[[thm-the-root-set-is-a-reduced-crystallographic-root-system]]).

[F2] The Weyl group of $A_2$ is $S_3=\{1,s_1,s_2,s_1s_2,s_2s_1,w_0\}$ with
lengths $0,1,1,2,2,3$, length being the number of inversions and the least
number of simple reflections in an expression
([[prop-weyl-length-equals-positive-root-inversion-number]]).

[F3] The denominator identity states
$A(\rho)=e^{\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})$, and
$A(\nu)=\sum_{w\in W}(-1)^{\ell(w)}e^{w\nu}$
([[thm-weyl-denominator-identity]],
[[def-weyl-alternation-operator]]).

## Verification

1.1 The right side of the identity is the alternant $A(\rho)=\sum_{w\in W}(-1)^{\ell(w)}e^{w\rho}=e^{\rho}-e^{s_1\rho}-e^{s_2\rho}+e^{s_1s_2\rho}+e^{s_2s_1\rho}-e^{w_0\rho}$ by [F3] and the length table [F2], and substituting the translates computed in [F1] gives $A(\rho)=e^{\rho}-e^{\alpha_2}-e^{\alpha_1}+e^{-\alpha_1}+e^{-\alpha_2}-e^{-\rho}$. [F1, F2, F3, A1]

1.2 The left side $e^{\rho}(1-e^{-\alpha_1})(1-e^{-\alpha_2})(1-e^{-\alpha_1-\alpha_2})$ expands over the eight subsets $S$ of $\Phi^+$ as $\sum_S(-1)^{|S|}e^{\rho-\sum_{\alpha\in S}\alpha}$; the exponents are $\rho$ for $S=\emptyset$, $\alpha_2$ for $S=\{\alpha_1\}$, $\alpha_1$ for $S=\{\alpha_2\}$, $0$ for $S=\{\alpha_1+\alpha_2\}$ and for $S=\{\alpha_1,\alpha_2\}$, $-\alpha_1$ for $S=\{\alpha_1,\alpha_1+\alpha_2\}$, $-\alpha_2$ for $S=\{\alpha_2,\alpha_1+\alpha_2\}$ and $-\rho$ for $S=\Phi^+$, with the signs $+,-,-,-,+,+,+,-$ in this order. [F1, algebra]

2.1 The two unit contributions in step 1.2, namely $-e^0$ from $S=\{\alpha_1+\alpha_2\}$ and $+e^0$ from $S=\{\alpha_1,\alpha_2\}$, cancel, so the left side equals $e^{\rho}-e^{\alpha_2}-e^{\alpha_1}+e^{-\alpha_1}+e^{-\alpha_2}-e^{-\rho}$, the same six monomials with the same signs as the right side computed in step 1.1; hence both sides of the denominator identity agree term by term in $\mathbb Z[P]$. [F3, step 1.1, step 1.2, algebra] ∎ 