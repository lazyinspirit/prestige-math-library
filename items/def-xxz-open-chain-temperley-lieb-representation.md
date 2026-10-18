---
id: def-xxz-open-chain-temperley-lieb-representation
kind: definition
title: "Open XXZ spin-half generators and Hamiltonian convention"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-temperley-lieb-generator-presentation
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "A. Nichols, The Temperley-Lieb Algebra and its Generalizations in the Potts and XXZ Models"
      url: "https://arxiv.org/pdf/hep-th/0509069"
      locator: "§2.1.1, equation (2.3), PDF p. 4: q = e^(i gamma), the open spin-half local generator and its Pauli expansion; equation (2.2) for H_TL = -sum e_i."
    - title: "Vaughan F. R. Jones, Planar Algebras, I"
      url: "https://arxiv.org/pdf/math/9909027"
      locator: "§2.1, printed pp. 27–29: the Temperley–Lieb generator convention and diagram algebra."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Fix $L\ge2$, $\gamma\in\mathbb R$, $q=e^{i\gamma}$, and loop parameter $\delta=q+q^{-1}=2\cos\gamma$. Let $\mathcal H_L=(\mathbb C^2)^{\otimes L}$ with ordered one-site basis $|\uparrow\rangle,|\downarrow\rangle$ and two-site basis $|\uparrow\uparrow\rangle,|\uparrow\downarrow\rangle,|\downarrow\uparrow\rangle,|\downarrow\downarrow\rangle$. With the standard Pauli matrices $X,Y,Z$, define
$$e_i=I^{\otimes(i-1)}\otimes U(q)\otimes I^{\otimes(L-i-1)},\quad 1\le i<L,$$
where
$$U(q)=\begin{pmatrix}0&0&0&0\\0&q^{-1}&-1&0\\0&-1&q&0\\0&0&0&0\end{pmatrix}=-\frac12\bigl(X\otimes X+Y\otimes Y+\cos\gamma\,Z\otimes Z-\cos\gamma\,I_4+i\sin\gamma\,(Z\otimes I_2-I_2\otimes Z)\bigr).$$
The open-chain Temperley–Lieb Hamiltonian convention is $H_L=-\sum_{i=1}^{L-1}e_i$. No wrap-around term couples site $L$ to site $1$. This defines local operators; the following result proves their Temperley–Lieb relations.

## Remarks

The loop convention is that $e_i^2=\delta e_i$. The basis order and the sign in the off-diagonal matrix entries are fixed as displayed; changing either changes the parameter comparison.
