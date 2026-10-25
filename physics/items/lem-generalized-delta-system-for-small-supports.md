---
id: lem-generalized-delta-system-for-small-supports
kind: lemma
title: Generalized delta systems for small supports
status: published
origin: pipeline
deps: [def-finite-delta-system, thm-cofinality-basics, cor-cardinal-absorption, thm-transfinite-recursion, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Kunen, Set Theory, generalized delta-system lemma", url: "https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf"}
---

## Statement

In ZFC, let $\kappa$ be infinite and $\theta>\kappa$ regular with $|\alpha|^{<\kappa}<\theta$ for every $\alpha<\theta$. Every $\theta$-sized family of sets of cardinality below $\kappa$ has a $\theta$-sized delta subsystem. In particular, if $\kappa$ is regular and $\rho=2^{<\kappa}$, a family of $\rho^+$ many below-$\kappa$ subsets has a $\rho^+$-sized delta subsystem.

## Facts & Assumptions

**Given:** AC and the stated cardinal hypotheses.

[F1] [[def-finite-delta-system]] fixes the common-root conclusion.

[F2] [[thm-cofinality-basics]] and [[cor-cardinal-absorption]] give regular-cardinal thinning and union bounds.

[F3] [[thm-transfinite-recursion]] supplies the recursive thinning.

## Proof

1.1 Well-order the family as $\langle x_\xi:\xi<\theta\rangle$. Its union has cardinality at most $\theta\cdot\kappa=\theta$, so transport its elements into $\theta$. Since $\theta$ is regular and there are only $\kappa<\theta$ possible order types below $\kappa$, thin to constant order type $\eta<\kappa$ and enumerate each remaining set increasingly as $x_\xi=\{x_\xi(i):i<\eta\}$. [F2]

1.2 Fewer than $\theta$ members of the thinned family can lie wholly below any fixed $\alpha<\theta$, because there are only $|\alpha|^{<\kappa}<\theta$ such sets. Its union is therefore unbounded in $\theta$, so some coordinate $i<\eta$ has unbounded values; let $i_0$ be least. For every $i<i_0$ the coordinate values are bounded, and regularity gives $$\alpha_0=\sup\{x_\xi(i)+1:\xi<\theta,\ i<i_0\}<\theta.$$ Recursively choose $x_{\xi_\mu}$ for $\mu<\theta$ so that $x_{\xi_\mu}(i_0)$ exceeds $\alpha_0$ and every element of the earlier chosen sets. The unboundedness of the $i_0$th values makes each choice possible. Consequently distinct chosen sets meet only below $\alpha_0$. [F2, F3]

2.1 There are at most $|\alpha_0|^{<\kappa}<\theta$ possible intersections $x_{\xi_\mu}\cap\alpha_0$. Regularity therefore yields a set $J\subseteq\theta$ of size $\theta$ on which this intersection is one fixed $r$. Step 1.2 then gives $x_{\xi_\mu}\cap x_{\xi_\nu}=r$ for distinct $\mu,\nu\in J$. AC was used to well-order, enumerate, choose recursively, and thin. [F1, F2, step 1.2]

3.1 Suppose now that $\kappa$ is regular, $\rho=2^{<\kappa}$, and $\theta=\rho^+$. For every $\mu<\kappa$, a function $\mu\to\rho$ uses fewer than $\kappa$ members of the union $\rho=\bigcup_{\nu<\kappa}{}^\nu2$; regularity bounds all their lengths below one $\nu<\kappa$. Coding the function by a binary array of size below $\kappa$ shows $\rho^\mu\le2^{<\kappa}=\rho$. Thus $\rho^{<\kappa}=\rho$, and for $\alpha<\theta$ one has $|\alpha|^{<\kappa}\le\rho^{<\kappa}=\rho<\theta$. The main clause applies. [F2] ∎
