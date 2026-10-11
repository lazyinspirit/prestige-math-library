---
id: def-tensor-product-of-crystals
kind: definition
title: "The tensor product crystal $B_1\\otimes B_2$ and its two-case convention"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-crystal-graph-epsilon-phi-and-weight, def-crystal-lattice-and-crystal-basis, def-kashiwara-crystal-operators, thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]
justified_by: []
aliases: []
landmark: false
dependency_level: 6
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§5, printed pp. 20-21, Theorem 5.2: the tensor product rule with $\\tilde e_i(b_1\\otimes b_2)=\\tilde e_ib_1\\otimes b_2$ if $\\varphi_i(b_1)\\ge\\varepsilon_i(b_2)$ and $\\tilde f_i(b_1\\otimes b_2)=\\tilde f_ib_1\\otimes b_2$ if $\\varphi_i(b_1)>\\varepsilon_i(b_2)$."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.3, printed p. 333, (13.3.0.19)-(13.3.0.20): the tensor formula with the strict/non-strict comparison split between the two operators."
    - title: "Mark Shimozono, Crystals for Dummies (lecture notes, 28 August 2005)"
      url: "https://www.aimath.org/WWN/kostka/crysdumb.pdf"
      locator: "§2.3.4 and Warning 2.18: the tensor product convention and the left-to-right comparison."
---

## Definition

Let $B_1$ and $B_2$ be crystals, meaning the data $(B,wt,\varepsilon_i,\varphi_i,\tilde e_i,\tilde f_i)$ attached to a crystal basis $(L,B)$ of an integrable module by [[def-crystal-graph-epsilon-phi-and-weight]] and [[def-crystal-lattice-and-crystal-basis]]: $wt:B\to P$ is the weight function, $\varepsilon_i(b)=\max\{n:\tilde e_i^nb\ne0\}$ and $\varphi_i(b)=\max\{n:\tilde f_i^nb\ne0\}$ are finite, $\varphi_i(b)=\varepsilon_i(b)+\langle h_i,wt(b)\rangle$, and $\tilde e_i,\tilde f_i$ are the partial maps $B\to B\cup\{0\}$ of [[def-kashiwara-crystal-operators]].

The **tensor product crystal** $B_1\otimes B_2$ is the following data on $B_1\times B_2$, whose elements are written $b_1\otimes b_2$:

(i) $wt(b_1\otimes b_2):=wt(b_1)+wt(b_2)$;

(ii) $\tilde f_i(b_1\otimes b_2):=\tilde f_ib_1\otimes b_2$ if $\varphi_i(b_1)>\varepsilon_i(b_2)$, and $\tilde f_i(b_1\otimes b_2):=b_1\otimes\tilde f_ib_2$ if $\varphi_i(b_1)\le\varepsilon_i(b_2)$;

(iii) $\tilde e_i(b_1\otimes b_2):=\tilde e_ib_1\otimes b_2$ if $\varphi_i(b_1)\ge\varepsilon_i(b_2)$, and $\tilde e_i(b_1\otimes b_2):=b_1\otimes\tilde e_ib_2$ if $\varphi_i(b_1)<\varepsilon_i(b_2)$.

By convention a product is $0$ as soon as the operator applied to the selected factor is $0$; the **left factor is preferred** exactly in the displayed cases, so the assignment is left-to-right, matching the left-to-right order of the module tensor product $M_1\otimes M_2$ under the coproduct of [[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]]. The **equality case** $\varphi_i(b_1)=\varepsilon_i(b_2)$ is split: $\tilde e_i$ acts on the first factor while $\tilde f_i$ acts on the second. The asymmetry is not free: with the same strict or non-strict comparison used for both operators the partial-inverse axiom fails, as the counterexample on the companion page records, while the displayed convention is internally consistent by the lemma on this page computing $\varepsilon_i,\varphi_i$ of $B_1\otimes B_2$.

The functions $\varepsilon_i,\varphi_i$ of $B_1\otimes B_2$ are read off from the two-case operators as maximal iterated powers, exactly as in [[def-crystal-graph-epsilon-phi-and-weight]]. This definition only fixes combinatorial data and asserts nothing about an arbitrary pair of crystals: it does not claim that every such datum arises from a module tensor product. When $B_1,B_2$ are the crystals of crystal bases of integrable modules, the tensor product theorem later on this page proves that $(L_1\otimes_{A_0}L_2,\,B_1\otimes B_2)$ is a crystal basis of $M_1\otimes M_2$ with these operators, and only through that theorem are the values finite and nonnegative a priori. No choice principle is used.
