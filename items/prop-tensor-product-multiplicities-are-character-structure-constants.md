---
id: prop-tensor-product-multiplicities-are-character-structure-constants
kind: proposition
title: Tensor-product multiplicities are character structure constants
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
proof_strategy: direct
deps:
  - def-tensor-product-multiplicity-for-highest-weight-modules
  - def-axiom-of-choice
  - def-formal-character-of-a-finite-dimensional-weight-module
  - prop-formal-characters-are-additive-and-multiplicative
  - def-completed-formal-character-ring-for-downward-cones
  - prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces
  - def-weight-and-weight-space-of-a-lie-algebra-representation
  - lem-highest-weight-modules-have-weights-below-the-top-weight
  - def-partial-order-on-weights
  - thm-highest-weight-classification-of-finite-dimensional-irreducible-representations
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lecture notes"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§27.1, printed p. 145 (characters multiply in tensor products and the multiplicities are read off from the product of characters); §26.1--26.3, printed pp. 138--142 (formal characters and weight multiplicities)."
    - title: "R. Goodman and N. R. Wallach, Symmetry, Representations, and Invariants, Graduate Texts in Mathematics 255, Springer 2009"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/goodwallx.pdf"
      locator: "Ch. 7 §7.1 Corollaries 7.1.6--7.1.7, printed pp. 333--334 (multiplicity extraction from the character and the tensor-product multiplicity formula, complete proofs)."
---

## Statement

Assume the Axiom of Choice. In the notation of
[[def-tensor-product-multiplicity-for-highest-weight-modules]], for all
$\lambda,\mu\in\Lambda^+$ the following hold in the completed character ring
$\mathcal R$ of [[def-completed-formal-character-ring-for-downward-cones]]:

(i) $\operatorname{ch}(L(\lambda)\otimes L(\mu))=\sum_{\nu\in\Lambda^+}c^\nu_{\lambda\mu}\operatorname{ch}L(\nu)$,
a finite sum;
(ii) if $V$ is any finite-dimensional $\mathfrak g$-module and
$\operatorname{ch}V=\sum_{\nu\in\Lambda^+}a_\nu\operatorname{ch}L(\nu)$ with
integers $a_\nu$ (finitely many nonzero), then $a_\nu=[V:L(\nu)]$ for every
$\nu$, so the expansion coefficients of the character are exactly the
composition multiplicities and the elements $\operatorname{ch}L(\nu)$,
$\nu\in\Lambda^+$, are linearly independent in $\mathcal R$;
(iii) for every weight $\gamma\in\mathfrak h^*$ one has the weight-multiplicity
formula
$$\dim\bigl(L(\lambda)\otimes L(\mu)\bigr)_\gamma=\sum_{\sigma+\tau=\gamma}m_\lambda(\sigma)m_\mu(\tau),$$
a finite sum, where $m_\lambda(\sigma)=\dim L(\lambda)_\sigma$ and
$m_\mu(\tau)=\dim L(\mu)_\tau$
([[def-formal-character-of-a-finite-dimensional-weight-module]],
[[def-weight-and-weight-space-of-a-lie-algebra-representation]]).

## Facts & Assumptions

**Given:** AC and dominant integral weights $\lambda,\mu\in\Lambda^+$, with the decomposition $L(\lambda)\otimes L(\mu)\cong\bigoplus_\nu L(\nu)^{\oplus c^\nu_{\lambda\mu}}$ of [[def-tensor-product-multiplicity-for-highest-weight-modules]].

[F1] Every finite-dimensional $\mathfrak g$-module is the direct sum of its weight spaces, the tensor product of two finite-dimensional modules has weight spaces $(V\otimes W)_\gamma=\bigoplus_{\sigma+\tau=\gamma}V_\sigma\otimes W_\tau$, and the formal character is additive over direct sums and multiplicative over tensor products in the completed ring $\mathcal R$ ([[prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces]], [[def-weight-and-weight-space-of-a-lie-algebra-representation]], [[prop-formal-characters-are-additive-and-multiplicative]], [[def-completed-formal-character-ring-for-downward-cones]]).

[F2] For each $\nu\in\Lambda^+$ the module $L(\nu)$ is the unique simple module of highest weight $\nu$, its highest weight space is one-dimensional, and every weight of $L(\nu)$ lies in $\nu-Q_+$, so $\nu$ is the maximum of the weights of $L(\nu)$ in the root order; moreover every finite-dimensional module is completely reducible ([[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]], [[lem-highest-weight-modules-have-weights-below-the-top-weight]], [[def-partial-order-on-weights]], [[def-tensor-product-multiplicity-for-highest-weight-modules]]).

## Proof

1.1 Part (i) is the multiplicativity and additivity of the formal character applied to the decomposition: the tensor product distributes over the direct sum, so $\operatorname{ch}(L(\lambda)\otimes L(\mu))=\sum_\nu c^\nu_{\lambda\mu}\operatorname{ch}L(\nu)$ in $\mathcal R$; the sum is finite by [[def-tensor-product-multiplicity-for-highest-weight-modules]]. [F1, given, algebra]

1.2 Part (ii), comparison of coefficients. Let $V$ be finite-dimensional with decomposition $V\cong\bigoplus_\nu L(\nu)^{\oplus a'_\nu}$, $a'_\nu=[V:L(\nu)]$. Then $\operatorname{ch}V=\sum_\nu a'_\nu\operatorname{ch}L(\nu)$. Suppose also $\operatorname{ch}V=\sum_\nu a_\nu\operatorname{ch}L(\nu)$ with integers $a_\nu$, both sums finite. Let $\nu_0$ be maximal in the root order among the indices with $a_{\nu_0}\ne a'_{\nu_0}$ (if there is none, the two families are equal). Evaluating both characters in the weight $\nu_0$ and using that $m_\eta(\nu_0)=0$ unless $\nu_0\le\eta$ with equality only for $\eta=\nu_0$, while $m_{\nu_0}(\nu_0)=1$ [F2], gives $$0=\dim V_{\nu_0}-\dim V_{\nu_0}=\sum_{\eta\ge\nu_0}(a_\eta-a'_\eta)m_\eta(\nu_0)=(a_{\nu_0}-a'_{\nu_0})\ne0,$$ a contradiction. Hence $a_\nu=a'_\nu=[V:L(\nu)]$ for all $\nu$. [F1, F2, given, algebra]

2.1 Part (ii), linear independence. Suppose $\sum_{\nu\in F}b_\nu\operatorname{ch}L(\nu)=0$ with a finite nonempty set $F$ and integers $b_\nu$, not all zero. Split at the $\nu$ with $b_\nu>0$ and $b_\nu<0$ and let $V^+=\bigoplus_{\nu\in F,\ b_\nu>0}L(\nu)^{\oplus b_\nu}$ and $V^-=\bigoplus_{\nu\in F,\ b_\nu<0}L(\nu)^{\oplus(-b_\nu)}$; the vanishing of the alternating sum gives $\operatorname{ch}V^+=\operatorname{ch}V^-$ in $\mathcal R$. Both are characters of finite-dimensional modules, so by step 1.2 the multiplicity families $(b_\nu)_{\nu:\,b_\nu>0}$ and $(-b_\nu)_{\nu:\,b_\nu<0}$ agree on every $\nu$, forcing $b_\nu=0$ against the choice of $F$. Hence the characters $\operatorname{ch}L(\nu)$ are linearly independent. [F1, F2, step 1.1, step 1.2, algebra]

3.1 Part (iii): by the tensor-product weight-space formula of [F1], $(L(\lambda)\otimes L(\mu))_\gamma=\bigoplus_{\sigma+\tau=\gamma}L(\lambda)_\sigma\otimes L(\mu)_\tau$, and taking dimensions gives $\dim(L(\lambda)\otimes L(\mu))_\gamma=\sum_{\sigma+\tau=\gamma}m_\lambda(\sigma)m_\mu(\tau)$; only the finitely many pairs of weights of $L(\lambda)$ and $L(\mu)$ can contribute, so the sum is finite. [F1, given, algebra] ∎