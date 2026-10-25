---
id: "def-grothendieck-group-and-character-of-category-o"
kind: "definition"
title: "The Grothendieck group and character of O"
deps: ["thm-category-o-is-abelian-and-extension-closed", "prop-equivalent-support-description-of-category-o"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "§2 Definition 2.4 and paragraph after Lemma 2.5, p.3"
      url: "https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
status: published
origin: "pipeline"
---

## Definition

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

For the abelian category [[thm-category-o-is-abelian-and-extension-closed]], define $K_0(\mathcal O)$ as the free abelian group on isomorphism classes $[M]$, modulo $[B]=[A]+[C]$ for every short exact sequence $0\to A\to B\to C\to0$. A set of representatives suffices: every finitely generated $U(\mathfrak g)$-module is a quotient of some $U(\mathfrak g)^n$, and those quotients form a set up to isomorphism.

Define the formal character by $\operatorname{ch}M=\sum_\mu(\dim M_\mu)e^\mu$. By [[prop-equivalent-support-description-of-category-o]], its integer coefficients are finite and supported in finitely many downward cones. Let $\mathscr R$ be the group of all such integer coefficient families, with pointwise addition. It is a ring with $e^\mu e^\nu=e^{\mu+\nu}$: at a fixed resulting weight, in any pair of cones the equation $\beta+\gamma=\eta$ with $\beta,\gamma\in Q^+$ has finitely many solutions, since every simple-root coefficient is bounded. Taking weight spaces is exact, so character gives a well-defined homomorphism $K_0(\mathcal O)\to\mathscr R$. The zero object's class and character are zero.
