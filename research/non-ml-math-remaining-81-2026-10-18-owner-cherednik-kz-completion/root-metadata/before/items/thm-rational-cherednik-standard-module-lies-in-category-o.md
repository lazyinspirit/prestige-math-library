---
id: thm-rational-cherednik-standard-module-lies-in-category-o
kind: theorem
title: "Standard modules lie in rational Cherednik category O"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-rational-cherednik-category-o
  - def-rational-cherednik-standard-module
  - def-rational-cherednik-algebra
  - thm-rational-cherednik-pbw-theorem
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof and Xiaoguang Ma, Lecture Notes on Cherednik Algebras"
      url: "https://arxiv.org/pdf/1001.0432"
      locator: "§3.5–3.7, PDF pp. 16–18."
    - title: "Victor Ginzburg, Nicolas Guay, Eric Opdam, and Raphael Rouquier, On the category O for rational Cherednik algebras"
      url: "https://arxiv.org/pdf/math/0212036"
      locator: "§§2.3 and 3.2, PDF pp. 4 and 11–12."
---

## Statement

For every finite-dimensional $W$-module $E$, the standard module $\Delta_c(E)$ of [[def-rational-cherednik-standard-module]] belongs to category O of [[def-rational-cherednik-category-o]].

## Facts & Assumptions

**Given:** $W,\mathfrak h,c$, the algebra $H_{1,c}(W,\mathfrak h)$, and a finite-dimensional $W$-module $E$.

[F1] [[def-rational-cherednik-category-o]]: membership in $\mathcal O_c(W,\mathfrak h)$ means finite generation over $\mathbb C[\mathfrak h^*]$ and local nilpotence of the augmentation ideal of $S(\mathfrak h)$.

[F2] [[def-rational-cherednik-standard-module]]: $\Delta_c(E)=H_{1,c}\otimes_{\mathbb C[\mathfrak h]\rtimes\mathbb C W}E$, with $\mathfrak h$ acting by zero on $E$; PBW identifies it with $\mathbb C[\mathfrak h^*]\otimes E$.

[F3] [[def-rational-cherednik-algebra]]: $[\mathfrak h,\mathfrak h^*]$ lies in $\mathbb C W$, and $W$ preserves polynomial degree on $\mathbb C[\mathfrak h^*]$.

## Proof

**Proof technique:** direct.

**Given:** [F1]–[F3].

1.1 Since $E$ is finite dimensional, a finite basis of $E$ generates $\mathbb C[\mathfrak h^*]\otimes E$ as a $\mathbb C[\mathfrak h^*]$-module. By [F2] this is $\Delta_c(E)$, so the finite-generation condition in [F1] holds. [F1, F2, choose]

1.2 Give $\mathbb C[\mathfrak h^*]\otimes E$ its polynomial-degree filtration. For $y\in\mathfrak h$, commute $y$ past one factor $x\in\mathfrak h^*$ by $yx=xy+[y,x]$. The first term preserves the number of polynomial factors after applying $y$ to the remaining factors; the commutator term replaces that $x$ by an element of $\mathbb C W$, which preserves degree and acts on the remaining polynomial. Since $y$ kills $E$, induction on polynomial degree shows that $y$ maps degree at most $d$ into degree at most $d-1$. [F2, F3, induction]

2.1 A product of $N$ elements of $\mathfrak h$ therefore maps every polynomial of degree at most $d$ to zero when $N>d$. Each element of $\Delta_c(E)$ is a finite sum of such polynomial-degree vectors, so a sufficiently high-degree element of the augmentation ideal $S(\mathfrak h)_{>0}$ kills it. This is the local-nilpotence condition in [F1]. Both conditions hold, hence $\Delta_c(E)\in\mathcal O_c(W,\mathfrak h)$. [F1, step 1.1, step 1.2, algebra] ∎
