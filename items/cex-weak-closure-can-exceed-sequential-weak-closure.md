---
id: "cex-weak-closure-can-exceed-sequential-weak-closure"
kind: "counterexample"
title: "Weak closure can exceed sequential weak closure"
deps: ["def-conjugate-exponents", "rem-ell-p-is-l-p-of-counting-measure", "thm-holder-finite-real-exponents", "thm-weakly-convergent-sequences-are-norm-bounded", "thm-weak-topology-is-hausdorff", "lem-basic-weak-neighborhoods", "def-hahn-banach-extension-principle-relative", "def-countable-choice"]
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

## Statement refuted

Weak closure always consists of limits of sequences from the set. Assume HB ([[def-hahn-banach-extension-principle-relative]]) and Countable Choice ([[def-countable-choice]]). In real $\ell^2$ the set $A=\{\sqrt n\,e_n:n\ge1\}$ is sequentially weakly closed, but $0\in\overline A^w\setminus A$.

## Facts & Assumptions

[F1] The $\ell^2$ norm is the square-sum norm ([[rem-ell-p-is-l-p-of-counting-measure]]); the pair $(2,2)$ is conjugate ([[def-conjugate-exponents]]) and finite Hölder gives Cauchy–Schwarz ([[thm-holder-finite-real-exponents]]).

[F2] Finite functional disks form weak neighborhoods ([[lem-basic-weak-neighborhoods]]).

[F3] Under HB and Countable Choice weakly convergent sequences are norm bounded ([[thm-weakly-convergent-sequences-are-norm-bounded]]); under HB the weak topology is Hausdorff ([[thm-weak-topology-is-hausdorff]]).

## Counterexample

**Given:** the set $A$ above, with strictly positive indices.

1.1 For a bounded real functional $F$, put $b_n=F(e_n)$. Test $F$ on $v_N=\sum_{n=1}^N b_ne_n$. Then $B_N=\sum_{n=1}^Nb_n^2=F(v_N)\le\|F\|\sqrt{B_N}$, so $B_N\le\|F\|^2$, including $B_N=0$. Thus $(b_n)$ is square summable. Finite Hölder and passage to increasing finite sums show $\sum_n|x_nb_n|\le\|x\|_2\|b\|_2$, consistent with these tests. [given, F1]

2.1 Fix a basic weak neighborhood of zero given by $F_1,\ldots,F_m$ and $\varepsilon>0$. If it missed $A$, then for each $n\ge1$ some $j$ would have $\sqrt n|F_j(e_n)|\ge\varepsilon$. Therefore $\sum_j|F_j(e_n)|^2\ge\varepsilon^2/n$. Summing over $n$ contradicts the finite sum of square-summability bounds from step 1.1: the harmonic partial sums are unbounded since each block $2^r\le n<2^{r+1}$ contributes at least $1/2$. For $m=0$ the neighborhood is the whole space and already meets $A$. Thus every weak zero-neighborhood meets $A$, so $0\in\overline A^w$, while every member of $A$ has norm $\sqrt n>0$. [step 1.1, F2, algebra]

3.1 If a sequence in $A$ converges weakly, F3 bounds its norms by some finite $C$. Its indices therefore satisfy $n\le C^2$, so its range lies in a finite subset of $A$. A finite set is closed in a Hausdorff space: each singleton is closed because every other point has a disjoint neighborhood, and finite unions are closed. The weak limit lies in this finite set, hence in $A$. Thus $A$ is sequentially weakly closed but not weakly closed. $\square$ [step 2.1, F3]
