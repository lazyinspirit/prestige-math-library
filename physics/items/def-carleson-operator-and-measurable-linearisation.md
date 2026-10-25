---
id: "def-carleson-operator-and-measurable-linearisation"
kind: "definition"
title: "Carleson operator and measurable linearisation"
deps: ["def-fourier-transform-on-l-one-of-rn", "def-schwartz-space-and-its-seminorms", "lem-l-one-fourier-transform-is-well-defined", "thm-fourier-transform-maps-schwartz-space-continuously-to-itself", "lem-schwartz-functions-and-all-derivatives-are-integrable", "def-axiom-of-choice"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: 'Lacey, Carleson’s Theorem: Proof, Complements, Variations'
      url: https://arxiv.org/pdf/math/0307008
      locator: Sections 1–2, equations 1.3, 2.7
provenance:
  statement: literature-derived
  proof: not-applicable
status: published
origin: "pipeline"
---

## Definition

Assume [[def-axiom-of-choice]] for the countable-choice hypotheses of the Schwartz Fourier and integrability suppliers. Use the transform $\widehat f(\xi)=\int f(x)e^{-2\pi ix\xi}\,dx$ of [[def-fourier-transform-on-l-one-of-rn]], with absolute convergence and representative independence from [[lem-l-one-fourier-transform-is-well-defined]]. For $f\in\mathcal S(\mathbb R)$ as in [[def-schwartz-space-and-its-seminorms]], [[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]] and [[lem-schwartz-functions-and-all-derivatives-are-integrable]] give $f,\widehat f\in L^1$. Define
$$T_af(x)=\int_{-\infty}^a\widehat f(\xi)e^{2\pi ix\xi}\,d\xi,\qquad C_{\mathbb R}f(x)=\sup_{a\in\mathbb R}|T_af(x)|.$$
These integrals converge absolutely at every x and satisfy $|T_af(x)|\le\|\widehat f\|_1$. The cutoff function is continuous in a: since $\widehat f$ is bounded, $|T_af(x)-T_bf(x)|\le\|\widehat f\|_\infty|a-b|$. Hence the supremum equals the supremum over rational a.

For fixed a, $T_af$ is continuous in x. To check this without an unproved interchange, first truncate its absolutely integrable frequency tail beyond $|\xi|>R$ to make that tail contribution to any difference less than a prescribed epsilon. On the remaining interval, $|e^{2\pi ix\xi}-e^{2\pi iy\xi}|\le2\pi R|x-y|$, so the integral difference is bounded by $2\pi R|x-y|\|\widehat f\|_1$. Thus the countable rational supremum is measurable.

For a nonempty finite list of rational cutoffs $q_1,\ldots,q_M$, put $C_Mf=\max_{1\le j\le M}|T_{q_j}f|$. Choose the **least** maximizing index j(x); its level sets are finite intersections of measurable comparison sets, so $a_f(x)=q_{j(x)}$ is measurable. Then $C_Mf(x)=|T_{a_f(x)}f(x)|$. For a fixed measurable selector a, the map $f\mapsto T_{a(x)}f(x)$ is linear; when the selector was chosen from f, it is frozen before invoking a uniform operator estimate. No single selector is claimed to attain the unrestricted real supremum.

For $h(x)=T_{a_f(x)}f(x)$ put $u(x)=h(x)/|h(x)|$ when $h(x)\ne0$ and $u(x)=1$ otherwise. This is a measurable unimodular phase and $h\overline u=|h|$. Thus, on a measurable finite-measure testing set E, pairing h with $u\mathbf1_E$ gives $\int_E|h|$. The phase at zero is fixed explicitly. All finite selectors use least-index rules; AC is inherited from the stated analytic suppliers, not from selecting maximizers.
