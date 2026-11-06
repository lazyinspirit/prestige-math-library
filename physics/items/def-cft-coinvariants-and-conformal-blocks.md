---
id: def-cft-coinvariants-and-conformal-blocks
kind: definition
title: Coinvariants and conformal blocks on a pointed curve
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: mathematics
library: mathematics
deps:
  - def-cft-pointed-curve-with-formal-coordinates
  - def-cft-coordinate-independent-chiral-algebra
  - def-cft-outgoing-mode-algebra-action
  - lem-cft-outgoing-mode-action-well-defined
  - def-cft-integrally-graded-conformal-module
  - def-vertex-algebra-module
  - def-axiom-of-choice
dependency_roles:
  def-cft-pointed-curve-with-formal-coordinates: mathematical-premise
  def-cft-coordinate-independent-chiral-algebra: mathematical-premise
  def-cft-outgoing-mode-algebra-action: mathematical-premise
  lem-cft-outgoing-mode-action-well-defined: mathematical-premise
  def-cft-integrally-graded-conformal-module: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Beilinson and Drinfeld, Chiral Algebras, preliminary Chapter 4, §§4.4.4–4.4.5
      url: https://math.uchicago.edu/~drinfeld/langlands/chiral/cha_ch4.pdf
      locator: Coinvariants as the quotient by the global Lie-algebra action.
    - title: Bin Gui, Lectures on Vertex Operator Algebras and Conformal Blocks, arXiv:2305.03822v1, §§11.10–11.18
      url: https://arxiv.org/pdf/2305.03822v1
      locator: Residue action, algebraic coinvariants, and the conformal-block dual; the analytic strong-residue equivalence is not asserted here.
    - title: Frenkel, Vertex Algebras and Algebraic Curves, Bourbaki survey, §§5.1–5.3
      url: https://math.berkeley.edu/~frenkel/BOOK/bourbaki.pdf
      locator: Global Lie-algebra coinvariants and invariant functionals.
---

## Definition

Assume full AC as carried by the pointed-curve definition. Let $V$ be a conformal VOA of CFT type on a pointed curve $(X,p_i,t_i)$, and let $M_i$ be integrally graded conformal $V$-modules. No finite-dimensionality of their $L_0$-eigenspaces is assumed. Let $\mathfrak g_{\mathrm{out}}$ be the image and action defined above. On the algebraic tensor product $M_\bullet:=M_1\otimes_{\mathbb C}\cdots\otimes_{\mathbb C}M_n$, set
$$C_X(M_\bullet):=M_\bullet/\operatorname{span}_{\mathbb C}\{x\cdot m:x\in\mathfrak g_{\mathrm{out}},\ m\in M_\bullet\}.$$
The **algebraic conformal-block space** is $B_X(M_\bullet):=\operatorname{Hom}_{\mathbb C}(C_X(M_\bullet),\mathbb C)$, equivalently the linear functionals on $M_\bullet$ that annihilate every $\mathfrak g_{\mathrm{out}}$-action. The quotient-dual equivalence is proved in the following lemma. For a pointed family $\pi:\mathcal X\to S$ with the disjoint sections and relative formal coordinates specified in the pointed-curve definition, the relative construction requires the supplied relative chiral bundle, relative connection and finite-energy, finite-pole sheaves of the outgoing-mode definition. Explicitly, write $D_i=s_i(S)$ and let $V_{\le N,\mathcal X/S}^r$ denote its supplied finite-stage relative bundle, tensored with the relative one-form line; put
$$\mathscr F:=\varinjlim_{N,k_1,\ldots,k_n}\pi_*\bigl(V_{\le N,\mathcal X/S}^r(\sum_i k_iD_i)\bigr),\qquad \mathscr E:=\varinjlim_{N,k_1,\ldots,k_n}\pi_*\bigl(V_{\le N,\mathcal X/S}^r(\sum_i k_iD_i)\otimes\mathcal T_{\mathcal X/S}\bigr),$$
where all indices are nonnegative integers, $\mathcal T_{\mathcal X/S}$ is the relative tangent line, and $\pi_*\mathscr A(W):=\mathscr A(\pi^{-1}W)$ for open $W\subseteq S$. The direct limits are in sheaves of $\mathcal O_S$-modules. Require the relative right derivative $d^r:\mathscr E\to\mathscr F$, compatible Laurent expansion maps at the sections, and their induced outgoing Lie-algebra sheaf $\mathscr G_{\mathrm{out}}$, defined as the image of $\operatorname{coker}(d^r)$ in the product of relative local mode quotients. For the chosen $V$-modules $M_i$, put $\mathscr M_i:=\mathcal O_S\otimes_{\mathbb C}M_i$ (sheaf tensor product) and $\mathscr M_\bullet:=\bigotimes_{\mathcal O_S,i}\mathscr M_i$, with $\mathscr M_\bullet=\mathcal O_S$ when $n=0$. Require the compatible $\mathcal O_S$-bilinear summed residue action
$$\alpha:\mathscr G_{\mathrm{out}}\otimes_{\mathcal O_S}\mathscr M_\bullet\longrightarrow\mathscr M_\bullet.$$
For these supplied relative data, define the **relative coinvariant sheaf** to be $\mathscr C:=\operatorname{coker}_{\mathcal O_S}(\alpha)$, namely the sheaf associated to the presheaf $W\mapsto\mathscr M_\bullet(W)/\operatorname{im}(\alpha(W))$. The existence of the required relative structures is not inferred merely from the definition of a family. No finite rank, local freeness, or automatic base-change claim follows from this definition.

This definition is algebraic. It does not assert equivalence to the analytic conformal-block definition via the strong residue theorem, nor finite dimensionality, local freeness, convergence, or a moduli-stack construction.

## Definition references

[[def-cft-pointed-curve-with-formal-coordinates]]

[[def-cft-coordinate-independent-chiral-algebra]]

[[def-cft-outgoing-mode-algebra-action]]

[[lem-cft-outgoing-mode-action-well-defined]]

[[def-cft-integrally-graded-conformal-module]]

[[def-vertex-algebra-module]]

[[def-axiom-of-choice]]
