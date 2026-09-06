---
id: thm-kolmogorov-extension-for-standard-borel-coordinate-spaces
kind: theorem
title: "Assuming the Axiom of Choice, Kolmogorov extension for arbitrary families of standard Borel coordinate spaces"
status: draft
origin: pipeline
landmark: true
deps: [def-coordinate-maps-and-cylinder-sigma-algebra, lem-finite-coordinate-cylinders-form-a-pi-system, lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined, def-consistent-family-of-finite-dimensional-distributions, def-standard-borel-space, lem-finite-products-of-standard-borel-spaces-are-standard-borel, thm-borel-probability-measures-on-polish-spaces-are-inner-regular, thm-compact-implies-the-other-compactness-forms, def-axiom-of-choice, def-countable-choice, thm-caratheodory-extension-theorem, thm-dynkin-pi-lambda]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Biskup, MATH 275D notes, Theorem 2.4"
      url: "https://math.ucla.edu/~biskup/275d.1.25f/PDFs/ch2.pdf"
    - title: "Shalizi, Building Processes, Theorem 29"
      url: "https://www.stat.cmu.edu/~cshalizi/754/notes/lecture-02.pdf"
---

## Statement

Assume the Axiom of Choice. For any set $I$, standard-Borel coordinate spaces $(E_i,\mathcal E_i)$, and consistent finite-dimensional laws $(\mu_F)_{F\Subset I}$, there is a unique probability measure $\mu$ on $\mathcal C_I$ whose $F$-coordinate marginal is $\mu_F$ for each finite $F$.

## Facts & Assumptions

**Given:** AC, standard-Borel coordinates, and a consistent family $(\mu_F)$.

[F1] Consistency gives a well-defined finitely additive cylinder law. ([[lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined]])

[F2] After one Polish presentation is fixed on every coordinate, each finite
product has the corresponding product Polish presentation; coordinate
restrictions between such products are continuous. Its probability measures
admit compact inner approximations, and compact metric spaces are sequentially
compact. ([[def-standard-borel-space]],
[[lem-finite-products-of-standard-borel-spaces-are-standard-borel]],
[[thm-borel-probability-measures-on-polish-spaces-are-inner-regular]],
[[thm-compact-implies-the-other-compactness-forms]])

[F3] AC supplies both countable choice and values in every nonempty family of otherwise unconstrained coordinate spaces. ([[def-axiom-of-choice]], [[def-countable-choice]])

[F4] Assuming countable choice, a premeasure extends to its generated sigma-algebra. ([[thm-caratheodory-extension-theorem]])

## Proof

1.1 By AC, choose once and for all, for every $i\in I$, a Polish presentation $h_i:E_i\to P_i$ witnessing that $(E_i,\mathcal E_i)$ is standard Borel. Pull the topology and a complete compatible metric of $P_i$ back to $E_i$. The finite product topologies now used below come from these same coordinate presentations, so every restriction map between them is continuous. [F2, F3]

2.1 Let $C_n\downarrow\varnothing$ be cylinders and suppose their cylinder masses stayed above $\eta>0$. Enumerate the countable union of their finite supports. For each $n$, choose a nested finite support $H_n$ that contains both the original support of $C_n$ and the first $n$ active coordinates, and view $C_n$ as a cylinder over $H_n$. In the product presentation fixed in step 1.1, inner-regularly replace its $H_n$-base by a compact base, losing less than $\eta2^{-n-2}$. Finite intersections of the lifted compact cylinders then have positive cylinder mass. [F1, F2, F3, step 1.1]

3.1 For each $N$, choose a point in the intersection of the first $N$ lifted compact cylinders from step 2.1. For fixed $n$, all points with $N\ge n$ have their $H_n$-coordinates in the compact $n$th base. Sequential compactness successively supplies a subsequence converging on $H_1$, a further subsequence converging on $H_2$, and so on; take the diagonal subsequence. Because every restriction $\prod_{i\in H_{n+1}}E_i\to\prod_{i\in H_n}E_i$ is continuous by step 1.1, the successive limits restrict to the earlier limits. They therefore define one point on the union of the active coordinates. Each compact base is closed, so this point lies in every lifted compact cylinder. [F2, F3, step 1.1, step 2.1]

4.1 Use AC to fill the inactive coordinates. The resulting point lies in every $C_n$, a contradiction. Hence the cylinder law is continuous at the empty set and is a premeasure. [F3, step 3.1]

5.1 By [F4] it extends to $\mathcal C_I$ and has total mass one. Two such extensions agree on all cylinders; these are a pi-system, so Dynkin's pi-lambda theorem gives uniqueness on $\mathcal C_I$, and nowhere larger. [F4] ∎
