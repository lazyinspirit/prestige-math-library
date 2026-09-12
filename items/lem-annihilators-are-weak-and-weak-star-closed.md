---
id: "lem-annihilators-are-weak-and-weak-star-closed"
kind: "lemma"
title: "Annihilators are weak and weak star closed"
deps: ["def-annihilator-and-preannihilator", "lem-basic-weak-neighborhoods", "lem-basic-weak-star-neighborhoods", "thm-bipolar-closure-for-linear-subspaces", "thm-relative-hahn-banach-geometric-separation", "def-hahn-banach-extension-principle-relative"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Teschl, Topics in Real and Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For subsets $M\subseteq X$, $N\subseteq X^*$ of a real or complex normed dual pair, $M^\perp$ is a weak-star closed linear subspace and ${}^\perp N$ is a weakly closed linear subspace, in ZF. For linear subspaces, $({}^\perp N)^\perp=\overline N^{w^*}$. Under HB ([[def-hahn-banach-extension-principle-relative]]), also ${}^\perp(M^\perp)=\overline M^{\|\cdot\|}=\overline M^w$ for linear $M$.

## Facts & Assumptions

[F1] Annihilators mean vanishing on every member of the specified subset ([[def-annihilator-and-preannihilator]]).

[F2] Bounded primal functionals and dual evaluations are respectively weakly and weak-star continuous ([[lem-basic-weak-neighborhoods]], [[lem-basic-weak-star-neighborhoods]]).

[F3] The weak-star double-annihilator identity for linear $N$ is the first identity in [[thm-bipolar-closure-for-linear-subspaces]]. Only this identity is used here.

[F4] Under HB, each exterior point of a nonempty closed convex set is strictly separated by a bounded scalar-linear functional's real part ([[thm-relative-hahn-banach-geometric-separation]]).

## Proof

**Given:** the stated subsets; assume linearity of $M,N$ for the identities and HB only for the primal identity.

1.1 By F1, $M^\perp$ is the intersection over $m\in M$ of the kernels of $f\mapsto f(m)$, and ${}^\perp N$ is the intersection over $f\in N$ of $\ker f$. Each kernel is a linear subspace and closed in the corresponding topology by F2 and closedness of $\{0\}\subseteq\mathbb K$. Intersections preserve both properties; empty intersections give the whole ambient spaces. [given, F1, F2]

2.1 For linear $N$, F3 yields $({}^\perp N)^\perp=\overline N^{w^*}$ with no primal norming used. For linear $M$, every functional vanishing on $M$ also vanishes on its norm closure, by norm continuity. Thus $\overline M^{\|\cdot\|}\subseteq{}^\perp(M^\perp)$. Step 1.1 also implies $\overline M^w\subseteq{}^\perp(M^\perp)$. [step 1.1, F3, F1]

3.1 Assume HB and fix $x\notin K=\overline M^{\|\cdot\|}$. The set $K$ is a nonempty closed linear subspace: addition and scalar multiplication preserve closure by their norm estimates. By F4 there is $f\in X^*$ whose real part is bounded above on $K$ and strictly larger at $x$. Since $K$ is a real linear subspace, scaling forces $\operatorname{Re}f=0$ on $K$. In the complex case $ik\in K$ forces $\operatorname{Im}f(k)=0$ too. Hence $f\in M^\perp$ and $f(x)\ne0$, excluding $x$ from ${}^\perp(M^\perp)$. The open set $\{y:|f(y)|>|f(x)|/2\}$ also excludes $x$ from $\overline M^w$. Norm closure is contained in weak closure because weak-open sets are norm open; all three sets therefore coincide. $\square$ [step 2.1, F4, F2, algebra]
