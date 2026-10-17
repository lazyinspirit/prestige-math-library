---
id: thm-csm-lattice-van-hove-pressure
kind: theorem
title: "Bounded lattice pressure on van Hove sets"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps: ["def-csm-finite-range-lattice-interaction", "thm-tdmath-finite-range-lattice-pressure-limit"]
justified_by: []
dependency_roles: {"def-csm-finite-range-lattice-interaction": "mathematical-premise", "thm-tdmath-finite-range-lattice-pressure-limit": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  scraped: []
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author PDF, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Appendix, PDF pp. 329–332."
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections (complete 99-page seminar notes)"
      url: "https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf"
      locator: "PDF pp. 20–24, 31–43, and 52–55."
---

## Statement

Let $d\geq1$, $A$ be finite nonempty, and let a bounded translation-invariant finite-range interaction on $A^{\mathbb Z^d}$ be as in [[def-csm-finite-range-lattice-interaction]]. Fix $\beta>0$, set $C_L=\{1,\ldots,L\}^d$ for each integer $L\geq1$, and define $Z_L=\sum_{\sigma\in A^{C_L}}e^{-\beta H_{C_L}^{\rm free}(\sigma)}$ and $p_L=|C_L|^{-1}\log Z_L$. For a van Hove sequence of finite sets $\Lambda_n\subset\mathbb Z^d$, meaning $|\Lambda_n|\to\infty$ and $|\{x\in\Lambda_n:\operatorname{dist}_\infty(x,\Lambda_n^c)\leq r\}|/|\Lambda_n|\to0$ for every fixed $r$, the free-boundary pressure
$$p_{\Lambda_n}=\frac{1}{|\Lambda_n|}\log\sum_{\sigma\in A^{\Lambda_n}}e^{-\beta H_{\Lambda_n}^{\rm free}(\sigma)}$$
and the cubic sequence $p_L$ both converge to the same finite limit $p$. Bounded finite-range interactions are essential; this statement does not concern continuum particles or long-range models.

## Facts & Assumptions

**Given:** A finite alphabet, a bounded translation-invariant finite-range interaction, $\beta>0$, and a van Hove sequence.

[A1] The shape list, translated terms, range and free-volume energy are exactly those of [[def-csm-finite-range-lattice-interaction]].

[F1] For a finite alphabet and bounded finite-range interaction list on supports contained in a fixed coordinate box, the free cubic log-partition density has a finite limit; a uniform energy perturbation bounded by $C_bL^{d-1}$ preserves it ([[thm-tdmath-finite-range-lattice-pressure-limit]]). The local interaction convention in [[def-csm-finite-range-lattice-interaction]] is a special case: its shapes contain $0$ and have diameter at most $R$, hence lie in $[-R,R]^d$, and its translated terms and free-volume energy have the same form. Thus [F1] supplies the limit $p$ defined in the Statement.

## Proof
1.1 Fix an integer block side $\ell>2R$ and tile the lattice by disjoint $\ell$-cubes. For $\Lambda_n$, retain only cubes fully contained in $\Lambda_n$ and denote their number by $m_n$; the leftover sites lie within distance at most $\ell$ of $\Lambda_n^c$, so $|\Lambda_n\setminus\text{(full cubes)}|=o(|\Lambda_n|)$ and $m_n\ell^d/|\Lambda_n|\to1$. [A1, given]

2.1 Erase each interaction term whose support crosses a grid seam or touches a leftover site. At fixed $\ell$, leftover-touching anchors are $o(|\Lambda_n|)$ by the van Hove condition. Each full $\ell$-cube has at most $C_R\ell^{d-1}$ anchors within distance $R$ of one of its seams, so seam-crossing anchors total at most $C_R|\Lambda_n|/\ell+o(|\Lambda_n|)$; here $C_R$ depends only on the finite shape list, $R$, and dimension. Since each term is bounded, the original and cut energies differ uniformly by at most $C|\Lambda_n|/\ell+o(|\Lambda_n|)$. [A1, step 1.1, algebra]

3.1 If two energies on a finite state set differ uniformly by at most $D$, their partition functions differ by factors between $e^{-\beta D}$ and $e^{\beta D}$, so their log partition functions differ by at most $\beta D$. The cut partition function is $Z_\ell^{m_n}|A|^{|\Lambda_n|-m_n\ell^d}$, where $Z_\ell$ is the free cubic partition function. Dividing by $|\Lambda_n|$ and taking $n\to\infty$ shows that the limsup and liminf of $p_{\Lambda_n}$ each differ from $\ell^{-d}\log Z_\ell$ by at most $C\beta/\ell$. [given, step 2.1, algebra]

4.1 By [F1], $\ell^{-d}\log Z_\ell$ tends to the cubic pressure as $\ell\to\infty$. Sending $\ell\to\infty$ in the bound from step 3.1 makes the limsup and liminf of $p_{\Lambda_n}$ equal to that same value, proving convergence. [F1, step 3.1] ∎ 
