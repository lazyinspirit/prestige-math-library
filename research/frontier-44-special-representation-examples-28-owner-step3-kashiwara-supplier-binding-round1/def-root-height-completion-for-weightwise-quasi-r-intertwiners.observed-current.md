---
id: def-root-height-completion-for-weightwise-quasi-r-intertwiners
kind: definition
title: "The root-height completion for weightwise quasi-$R$ intertwiners"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-bar-lattice-and-integral-lattice-of-a-based-module, def-positive-negative-and-toral-quantum-subalgebras, lem-lusztig-and-kashiwara-normalizations-match-by-root-color]
justified_by: []
aliases: []
landmark: false
dependency_level: 8
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jonathan Brundan, Dual Canonical Bases and Kazhdan–Lusztig Polynomials, arXiv:math/0509700v2 (Transform. Groups 14 (2009), 535–558)"
      url: "https://arxiv.org/pdf/math/0509700v2"
      locator: "§3, printed pp. 7–8: $\\Theta=\\sum_\\lambda\\Theta_\\lambda$ as an element of the completion $(U_n\\otimes U_n)^\\wedge$ with $\\Theta_\\lambda\\in U^+_\\lambda\\otimes U^-_\\lambda$, acting on polynomial representations by weight considerations; (3.1) for the tensor bar."
    - title: "Antoine Lacabanne, Drinfeld Double of Quantum Groups, Tilting Modules and Z-Modular Data Associated to Complex Reflection Groups, arXiv:1807.00770v2"
      url: "https://arxiv.org/pdf/1807.00770v2"
      locator: "§1.7, printed pp. 8–10: the completed tensor square $D_q(\\mathfrak g)\\hat\\otimes D_q(\\mathfrak g)$ with respect to the filtration by $\\operatorname{ht}(\\mu)\\ge N$ and the element $\\Theta=\\sum_\\mu\\Theta_\\mu$."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "§§4.1.1–4.1.2 printed34–35/PDF43–44: root-graded field completion and coevaluation, transported by the local normalization supplier."
---

## Definition

For the fixed library coproduct use the **diagonal root-height completion**
$$\widehat C=\prod_{\nu\in Q_+}U^+[\nu]\otimes U^-[-\nu],$$
with multiplication $(AB)_\nu=\sum_{\beta+\gamma=\nu}A_\beta B_\gamma$; each component sum is finite because $I$ is finite and the root coefficients of $\beta,\gamma\in Q_+$ are nonnegative integers. For intertwining with $\Delta$, use the ambient completed tensor square obtained from the source completion by the exact presentation map of [[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]] ( $v=q^{-1}$, $K_h\mapsto K_{-h}$ ) followed by the tensor flip; equivalently, every generator identity is read coefficientwise in the root grading. The tensor orientation is **positive first, negative second** ([[def-positive-negative-and-toral-quantum-subalgebras]]).

A family $A\in\widehat C$ **acts** on $m_\mu\otimes n_\eta$ by its finite sum whenever $U^+[\nu]m_\mu\otimes U^-[-\nu]n_\eta$ vanishes for all sufficiently high $\nu$. This holds if the first factor has finite-union bounded-above support, or if the second factor is a lowest module with bounded-below support. For both factors in the finite-weight-space category $\mathcal O_{\mathrm{int}}$ the relevant fixed total-weight subspace is finite dimensional, and every tail beyond a finite degree acts as $0$ there. An infinite series is not evaluated on a two-sided-unbounded pair without this explicit finiteness condition.

This completion and the normalization $\Theta_0=1$ are field-level data of the based-module theory of [[def-the-bar-lattice-and-integral-lattice-of-a-based-module]]; no universal $R$-matrix, no braiding and no integral coefficient property is asserted here.

## Remarks

The distinction between the diagonal completion $\prod_\nu U^+[\nu]\otimes U^-[-\nu]$ and the ordinary tensor product is essential: an element of the completion may have infinitely many nonzero components, and its action is defined only under the stated support hypotheses. The tensor flip in the convention transport is the one that converts the source's opposite-coproduct intertwining into the library's $\Delta$-intertwining of [[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]], clause (ii).

