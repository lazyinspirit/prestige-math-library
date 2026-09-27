---
id: prop-frobenius-groups-and-fixed-point-free-actions
kind: proposition
title: "Frobenius groups and fixed point free actions"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [cor-frobenius-semidirect-product-decomposition, def-internal-semidirect-product, def-frobenius-complement-and-frobenius-group, def-normal-subgroup, def-subgroup, thm-frobenius-kernel-theorem]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Alex Bartel, Introduction to Representation Theory of Finite Groups, §6.1"
      url: "https://www.maths.gla.ac.uk/~abartel/docs/reptheory.pdf"
      locator: "§6.1, printed pp. 28–30"
    - title: "Hans Kurzweil and Bernd Stellmacher, The Theory of Finite Groups, §§7.1–7.2"
      url: "https://homes.psd.uchicago.edu/~sethi/Teaching/P342-W2017/Kurzweil-Stellmacher_Theory%20of%20finite%20groups.pdf"
      locator: "§§7.1–7.2, printed pp. 163–171"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $N$ and $H$ be subgroups of a finite group $G$ with $G=N\rtimes H$,
$1<N$ and $1<H$, and let $H$ act on $N$ by conjugation, $h\cdot n:=hnh^{-1}$.

1. If $G$ is a Frobenius group with complement $H$ (so that $N$ is its Frobenius
   kernel), then every $1\ne h\in H$ fixes only the identity of $N$: the
   conjugation action of $H$ on $N\setminus\{1\}$ is free.
2. Conversely, if the conjugation action of $H$ on $N\setminus\{1\}$ is free,
   then $H$ is a Frobenius complement of $G$.

## Facts & Assumptions

**Given:** A finite group $G$ with subgroups $N,H$ such that $N\mathrel{\trianglelefteq}G$, $G=NH$ and $N\cap H=\{1\}$, with $1<N$ and $1<H$, and the conjugation action $h\cdot n=hnh^{-1}$ of $H$ on $N$.

[F1] $N\mathrel{\trianglelefteq}G$, $G=NH$, $N\cap H=\{1\}$, and $H$ is called a complement to $N$; these are exactly the internal-semidirect-product conditions ([[def-internal-semidirect-product]]).

[F2] $N\mathrel{\trianglelefteq}G$ means $gNg^{-1}=N$ for every $g\in G$ ([[def-normal-subgroup]]).

[F3] A subgroup $\{1\}<H<G$ is a Frobenius complement exactly when $H\cap gHg^{-1}=\{1\}$ for every $g\notin H$ ([[def-frobenius-complement-and-frobenius-group]]).

[F4] For a finite Frobenius group with complement $H$ the kernel set $N$ is normal and $G=N\rtimes H$ with $N\cap H=\{1\}$ and $|N|=[G:H]$ ([[cor-frobenius-semidirect-product-decomposition]], [[thm-frobenius-kernel-theorem]]).

[F5] $H$ and $N$ are subgroups: each contains the identity, is closed under products, and is closed under inverses ([[def-subgroup]]).



## Proof

**Proof technique:** direct.

1.1 Suppose first that $G$ is a Frobenius group with complement $H$, so that $N$ is its Frobenius kernel, $N\mathrel{\trianglelefteq}G$ and $N\cap H=\{1\}$ by [F4]. Let $1\ne h\in H$ and $1\ne n\in N$ satisfy $h\cdot n=n$, that is $hnh^{-1}=n$. Then $hn=nh$ and therefore $h=n^{-1}hn\in H\cap n^{-1}Hn$. [F2, F4, given, algebra]

1.2 Suppose conversely that the conjugation action of $H$ on $N\setminus\{1\}$ is free. Let $g\in G\setminus H$. By [F1] write $g=nh$ with $n\in N$, $h\in H$; if $n=1$ then $g=h\in H$, so $n\ne1$. Conjugating, $gHg^{-1}=nhHh^{-1}n^{-1}=nHn^{-1}$, because $hHh^{-1}=H$: thus $H\cap gHg^{-1}=H\cap nHn^{-1}$. [F1, F5, assume-hyp, algebra]

1.3 Let $1\ne n\in N$ and suppose $1\ne x\in H\cap nHn^{-1}$. Then $y:=n^{-1}xn$ satisfies $y\in H$ and $x= nyn^{-1}$, so $xy^{-1}=xn^{-1}x^{-1}\,n$. Here $xn^{-1}x^{-1}\in N$ by [F2] and $n\in N$, so $xy^{-1}\in N$; as also $xy^{-1}\in H$, the triviality of $N\cap H$ forces $xy^{-1}=1$, that is $y=x$. Thus $n^{-1}xn=x$, i.e. $xn=nx$ and $x\cdot n=n$: the nonidentity element $x\in H$ fixes the nonidentity element $n\in N$. [F2, F5, assume-hyp, algebra]

2.1 In the situation of step 1.1 the element $n$ satisfies $n\notin H$: otherwise $n\in N\cap H=\{1\}$, contrary to $n\ne1$; hence also $n^{-1}\notin H$. The complement condition [F3] therefore gives $H\cap n^{-1}Hn=\{1\}$, so step 1.1 forces $h=1$, contradicting $h\ne1$. Hence no nonidentity $n\in N$ is fixed by a nonidentity $h\in H$, which is claim 1. [F3, F4, step 1.1, contradiction]

2.2 Step 1.3 contradicts freeness of the action on $N\setminus\{1\}$; therefore $H\cap nHn^{-1}=\{1\}$ for every $1\ne n\in N$. By step 1.2 every $g\notin H$ has $H\cap gHg^{-1}=H\cap nHn^{-1}$ for some $n\ne1$ in $N$, so $H\cap gHg^{-1}=\{1\}$ for every $g\notin H$. [step 1.2, step 1.3, contradiction]

3.1 Finally $1<H$ holds by hypothesis and $H\ne G$: if $H=G$ then $N=N\cap G=N\cap H=\{1\}$, contradicting $1<N$. Hence $\{1\}<H<G$ and $H\cap gHg^{-1}=\{1\}$ for all $g\notin H$, so $H$ is a Frobenius complement of $G$ by [F3], which is claim 2. ∎ [F1, F3, step 2.2, given]
