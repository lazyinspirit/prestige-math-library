---
id: lem-finite-measure-sets-are-approximable-by-a-generating-algebra
kind: lemma
title: Approximation in symmetric difference by a generating algebra
deps: [thm-continuity-from-below-for-measures, thm-finite-and-countable-subadditivity-of-measures, def-generated-sigma-algebra,
  thm-generated-sigma-algebra-exists-and-is-minimal, def-algebra-of-subsets]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: E–W Proposition 2.15 proof and Exercise 2.7.3
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
  scraped: []
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

If $\mu(X)<\infty$ and an algebra $\mathcal C$ of subsets of X generates $\mathcal A$, then for every $E\in\mathcal A$ and $\varepsilon>0$ there is $C\in\mathcal C$ with $\mu(E\mathbin\triangle C)<\varepsilon$.

## Facts & Assumptions

[F1] An algebra contains X and is closed under complements and finite unions [[def-algebra-of-subsets]].

[F2] The measure of an increasing union is the supremum of the measures [[thm-continuity-from-below-for-measures]].

[F3] Union errors are bounded by the sum of their measures [[thm-finite-and-countable-subadditivity-of-measures]].

[F4] The generated sigma-algebra is the smallest sigma-algebra containing its generators [[thm-generated-sigma-algebra-exists-and-is-minimal]].

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Let $\mathcal D=\{E\in\mathcal A:\text{for every }\varepsilon>0\text{ some }C\in\mathcal C\text{ has }\mu(E\mathbin\triangle C)<\varepsilon\}$. Every $C\in\mathcal C$ lies in $\mathcal D$ by using itself. For complements, $(X\setminus E)\mathbin\triangle(X\setminus C)=E\mathbin\triangle C$, and $X\setminus C\in\mathcal C$. Thus $\mathcal D$ contains X and is closed under complements. [F1]

2.1 Let $E_j\in\mathcal D$ and $E=\bigcup_{j\ge1}E_j$. For $H_m=\bigcup_{j=1}^mE_j$, continuity from below gives $\mu(H_m)\uparrow\mu(E)<\infty$. By additivity on $E=H_m\sqcup(E\setminus H_m)$, some $m\ge1$ satisfies $\mu(E\setminus H_m)<\varepsilon/2$. Choose finitely many $C_j\in\mathcal C$ with $\mu(E_j\mathbin\triangle C_j)<\varepsilon/(2m)$. Then $C=\bigcup_{j=1}^m C_j\in\mathcal C$ and $\mu(E\mathbin\triangle C)\le\mu(E\setminus H_m)+\sum_{j=1}^m\mu(E_j\mathbin\triangle C_j)<\varepsilon$. [F1, F2, F3, step 1.1]

3.1 Thus $\mathcal D$ is a sigma-algebra containing $\mathcal C$. By the minimality of $\sigma(\mathcal C)=\mathcal A$, $\mathcal A\subseteq\mathcal D$, and the reverse inclusion is built into its definition. This proves the approximation assertion. [F4, step 1.1, step 2.1] ∎
