---
id: def-kac-moody-formal-character-completion
kind: definition
title: Kac Moody formal character completion
deps: ["def-kac-moody-category-o", "def-kac-moody-root-lattice-height-and-positive-cone"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, Section 9.2
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras, Section 10.7
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: published
origin: pipeline
---

## Definition

Use the independent simple roots and cone $Q^+$ of [[def-kac-moody-root-lattice-height-and-positive-cone]]. Let $\mathcal E$ be the complex vector space of formal sums $f=\sum_{\mu\in\mathfrak h^*}c_\mu e^\mu$ whose support is contained in a finite union $\bigcup_{j=1}^s(\lambda_j-Q^+)$. Coefficients, rather than numerical exponentials, specify these sums. Addition and scalar multiplication are coefficientwise. Define
$$e^\lambda e^\mu=e^{\lambda+\mu},\qquad [e^\eta](fg)=\sum_{\mu+\nu=\eta}c_\mu d_\nu.$$

The last sum is finite. For a fixed pair of cone tops $\lambda_j,\kappa_k$, a contributing pair is $\mu=\lambda_j-\beta$, $\nu=\kappa_k-\gamma$ with $\beta,\gamma\in Q^+$ and $\beta+\gamma=\lambda_j+\kappa_k-\eta$. If the right side is not in $Q^+$ there are none. Otherwise write it as $\sum_i n_i\alpha_i$; each coordinate of $\beta$ is an integer between $0$ and $n_i$, and it determines $\gamma$. There are at most $\prod_i(n_i+1)$ pairs. There are finitely many top pairs, so the entire coefficient sum is finite and the product is supported below their sums. The same coordinate bound for triples proves associativity by regrouping a finite coefficient sum. Commutativity is immediate, and the unit is $e^0$. Empty support gives the zero element.

For $V\in\mathcal O$ as in [[def-kac-moody-category-o]], its **formal character** is $\operatorname{ch}V=\sum_\mu(\dim V_\mu)e^\mu\in\mathcal E$. The category supplies both finite dimensions and the finite cone support. Character is additive on short exact sequences: submodules and quotients decompose into their weight spaces, and finite-dimensional dimensions add at each weight. The zero module has character zero.

For a series $1+u$ with $u$ supported in $-Q^+\setminus\{0\}$, the inverse $\sum_{k\ge0}(-u)^k$ is defined coefficientwise: at depth $N$ only $k\le N$ can contribute. Finite telescoping proves it is an inverse. This is the only sense of completion or infinite summation intended here. A Weyl transformation need not preserve the support condition for an arbitrary element of $\mathcal E$; no global Weyl action on this algebra is asserted. All finiteness arguments are coordinate bounds, requiring no AC.
