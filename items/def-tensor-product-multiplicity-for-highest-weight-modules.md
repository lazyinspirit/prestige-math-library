---
id: def-tensor-product-multiplicity-for-highest-weight-modules
kind: definition
title: Tensor-product multiplicities for finite-dimensional simple modules
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
justified_by: []
deps:
  - def-axiom-of-choice
  - thm-weyls-complete-reducibility-theorem
  - thm-highest-weight-classification-of-finite-dimensional-irreducible-representations
  - prop-direct-sum-dual-hom-and-tensor-representations
  - lem-highest-weight-modules-have-weights-below-the-top-weight
  - def-partial-order-on-weights
  - def-finite-weyl-root-system-lattice-and-chamber-conventions
  - def-integral-dominant-and-strictly-dominant-weights
  - cor-schurs-lemma-for-irreducible-lie-algebra-representations
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lecture notes"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§27.1 tensor products of fundamental representations, printed p. 145 (state space of the tensor product and multiplicities), together with §26.1--26.2 for the character conventions; complete lecture notes pp. 145--164 consulted."
    - title: "R. Goodman and N. R. Wallach, Symmetry, Representations, and Invariants, Graduate Texts in Mathematics 255, Springer 2009"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/goodwallx.pdf"
      locator: "Ch. 5 §5.5.4 Theorem 5.5.22, printed pp. 273--275 (classification of irreducible rational representations of $GL_n$ by dominant weights); Ch. 7 §7.1 Corollaries 7.1.6--7.1.7, printed pp. 333--334 (multiplicity extraction)."
---

## Definition

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra with Cartan subalgebra $\mathfrak h$, positive system
$\Phi^+$ with base $\alpha_1,\dots,\alpha_r$, positive cone
$Q_+=\sum_i\mathbb Z_{\ge0}\alpha_i$, Weyl vector $\rho$, weight lattice $P$
and set of dominant integral weights
$\Lambda^+=\{\lambda\in P:\langle\lambda,\alpha_i^\vee\rangle\ge0\ \text{for all }i\}$
([[def-finite-weyl-root-system-lattice-and-chamber-conventions]],
[[def-integral-dominant-and-strictly-dominant-weights]]).

For $\lambda\in\Lambda^+$ let $L(\lambda)$ denote the finite-dimensional
simple $\mathfrak g$-module of highest weight $\lambda$
([[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]]),
and let $L(\lambda)\otimes L(\mu)$ carry the tensor-product action
$x\cdot(v\otimes w)=xv\otimes w+v\otimes xw$
([[prop-direct-sum-dual-hom-and-tensor-representations]]). By Weyl's complete
reducibility theorem ([[thm-weyls-complete-reducibility-theorem]]) and the
classification of finite-dimensional simple modules there is a decomposition
$$L(\lambda)\otimes L(\mu)\cong\bigoplus_{\nu\in\Lambda^+}L(\nu)^{\oplus c^\nu_{\lambda\mu}}$$
with uniquely determined integers $c^\nu_{\lambda\mu}\ge0$. The direct sum is
finite because $L(\lambda)\otimes L(\mu)$ is finite-dimensional, so its
completely reducible decomposition has only finitely many nonzero simple
summands. Each constituent highest weight is a weight and lies below
$\lambda+\mu$ in the partial order of weights: every tensor-product weight is
a sum of a weight of $L(\lambda)$, which lies in $\lambda-Q_+$, and a weight
of $L(\mu)$, which lies in $\mu-Q_+$
([[lem-highest-weight-modules-have-weights-below-the-top-weight]]).

The integers $c^\nu_{\lambda\mu}=[L(\lambda)\otimes L(\mu):L(\nu)]$ are the
**tensor-product multiplicities** of $\mathfrak g$. More generally, for a
finite-dimensional completely reducible $\mathfrak g$-module $V$ we write
$[V:L(\nu)]$ for the number of summands isomorphic to $L(\nu)$ in any
decomposition of $V$ into simple modules; this number does not depend on the
chosen decomposition. By Schur's lemma
([[cor-schurs-lemma-for-irreducible-lie-algebra-representations]]) the
multiplicity has the equivalent hom-space description
$$c^\nu_{\lambda\mu}=\dim\operatorname{Hom}_{\mathfrak g}\bigl(L(\nu),L(\lambda)\otimes L(\mu)\bigr).$$
