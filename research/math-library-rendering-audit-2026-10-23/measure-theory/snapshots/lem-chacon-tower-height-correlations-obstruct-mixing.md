---
id: "lem-chacon-tower-height-correlations-obstruct-mixing"
kind: "lemma"
title: "Chacon tower height correlations obstruct mixing"
deps: ["def-chacon-three-cut-one-spacer-towers", "lem-chacon-partial-maps-extend-to-an-invertible-map-mod-null-sets", "lem-chacon-levels-approximate-measurable-sets", "def-strong-and-weak-mixing", "def-axiom-of-choice"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Peter Varju, Topics in Ergodic Theory, Michaelmas 2016, section 11 pp.36–40 (complete Chacon argument; public mirror)
      url: https://www.scribd.com/document/345852025/ergodic
    - title: Katok–Thouvenot Theorem 5.12 proof p.697
      url: https://akatok.s3.amazonaws.com/pub/KT-spectral.pdf
    - title: Sarig Problem 3.10 p.101
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
    - title: Creutz Theorem 6.11 p.42
      url: https://www.dcreutz.com/publications/Ergodic_Theory_of_Group_Actions.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. For the fixed set $A=L_{1,0}=[0,2/9)$ and every $r\ge1$, $\mu(A\cap T^{-h_r}A)\ge2/27>4/81=\mu(A)^2$. Consequently Chacon is not strongly mixing. More generally, every measurable $E\subseteq[0,1)$ satisfies $\liminf_{r\to\infty}\mu(E\cap T^{-h_r}E)\ge\mu(E)/3$.

## Facts & Assumptions

[F1] The next Chacon tower stacks left thirds, middle thirds, one spacer and right thirds in that order, with $h_r=(3^{r+1}-1)/2$ [[def-chacon-three-cut-one-spacer-towers]].

[F2] The limiting probability transformation agrees with finite tower arrows off a fixed null set [[lem-chacon-partial-maps-extend-to-an-invertible-map-mod-null-sets]].

[F3] Every measurable set has tower-level-union approximants with symmetric-difference error tending to zero [[lem-chacon-levels-approximate-measurable-sets]].

[F4] Strong mixing requires convergence of every fixed set-pair correlation to the product of the measures [[def-strong-and-weak-mixing]].

[F5] Assume AC [[def-axiom-of-choice]].

## Proof

**Given:** The normalized Chacon towers and their transformation under AC.

1.1 If $Q$ is any union of levels at stage $r$, let $Q^{(0)}$ be the union of their left thirds. These disjoint thirds have total measure $\mu(Q)/3$. F1's ordering and F2 show $T^{h_r}Q^{(0)}$ is the union of the corresponding middle thirds, modulo the fixed null set. Both unions lie in $Q$, so $Q^{(0)}\subseteq Q\cap T^{-h_r}Q$ modulo null sets, and $\mu(Q\cap T^{-h_r}Q)\ge\mu(Q)/3$. [F1, F2, F5]

2.1 The stage-one base is the left third of $[0,2/3)$, hence $A=[0,2/9)$ with measure $2/9$. At every later stage it is exactly the union of all its descendant levels, since each old level partitions into three retained thirds. Step 1.1 gives the bound $\mu(A)/3=2/27$ for every $r\ge1$. But $\mu(A)^2=4/81$ and $2/27-4/81=2/81>0$. The heights $h_r\to\infty$ by F1. Thus this one fixed pair $(A,A)$ fails F4's limit, proving failure of strong mixing. [F1, F4, step 1.1]

3.1 For measurable $E$, F3 gives stage-$r$ level unions $Q_r$ with $\eta_r=\mu(E\mathbin\triangle Q_r)\to0$. The symmetric difference of $E\cap T^{-h_r}E$ and $Q_r\cap T^{-h_r}Q_r$ lies in $(E\mathbin\triangle Q_r)\cup T^{-h_r}(E\mathbin\triangle Q_r)$. Measure preservation bounds its measure by $2\eta_r$, while $\mu(Q_r)\ge\mu(E)-\eta_r$. Step 1.1 therefore yields $\mu(E\cap T^{-h_r}E)\ge\mu(E)/3-(7/3)\eta_r$. Taking the liminf proves the general assertion. AC is inherited from F1–F3 and permits the countable choice of approximants; the estimate remains valid for null or conull $E$ without division. [F2, F3, F5, step 1.1] ∎
