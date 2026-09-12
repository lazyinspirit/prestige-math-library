---
id: "thm-uniform-finite-order-bounds-for-pointwise-bounded-distributions"
kind: "theorem"
title: "Uniform finite order bounds for pointwise bounded distributions"
deps: ["thm-local-finite-order-characterization-of-distributions", "lem-fixed-support-test-function-spaces-are-complete", "thm-baire-category-for-complete-metric-spaces", "def-dependent-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume Dependent Choice. If $\mathcal U\subseteq\mathcal D'(\Omega)$ is pointwise bounded, meaning $\sup_{u\in\mathcal U}|u(\varphi)|<\infty$ for every test $\varphi$, then for each compact $K\subseteq\Omega$ there are $m\ge0,C\ge0$ with
$$|u(\varphi)|\le Cp_m(\varphi)\qquad(u\in\mathcal U,\ \varphi\in\mathcal D_K).$$
Every pointwise limit of a net drawn from this family is a distribution. In particular the pointwise limit of any pointwise convergent sequence of distributions is a distribution. The pointwise-bounded-family hypothesis is not silently discarded for arbitrary nets.

## Facts & Assumptions

[F1] A linear functional with compactwise finite-order bounds is a distribution ([[thm-local-finite-order-characterization-of-distributions]]).

[F2] Each $\mathcal D_K$ is complete metrizable with its increasing derivative seminorms ([[lem-fixed-support-test-function-spaces-are-complete]]).

[F3] Under Dependent Choice, a nonempty complete metric space covered by countably many closed sets has one such set with nonempty interior ([[thm-baire-category-for-complete-metric-spaces]]).

[F4] The assumed axiom is [[def-dependent-choice]].

## Proof

**Given:** Dependent Choice and a pointwise bounded family $\mathcal U$.

1.1 Fix compact $K$. For integers $j\ge1$ put $E_j=\{\varphi\in\mathcal D_K:|u(\varphi)|\le j\text{ for every }u\in\mathcal U\}$. It is closed as an intersection of inverse images of closed disks under continuous restrictions. Pointwise boundedness implies $\mathcal D_K=\bigcup_{j\ge1}E_j$. The space contains zero, so it is nonempty, and F2–F4 give an $E_j$ with nonempty interior. [given, F2, F3, F4]

2.1 Take $\varphi_0$ and a neighborhood $\varphi_0+\{h:p_m(h)<\varepsilon\}\subseteq E_j$ for some $m\ge0,\varepsilon>0$. Then $\varphi_0\in E_j$ and for $p_m(h)<\varepsilon$, linearity gives $|u(h)|\le |u(\varphi_0+h)|+|u(\varphi_0)|\le2j$ for all $u$. For $p_m(h)>0$, scale $h$ by $\varepsilon/(2p_m(h))$ to obtain $|u(h)|\le(4j/\varepsilon)p_m(h)$. If $p_m(h)=0$, every positive multiple is in the neighborhood, forcing $u(h)=0$ by the same uniform bound. This gives the claimed estimate for the fixed $K$. [step 1.1, algebra]

3.1 Let a net from $\mathcal U$ converge pointwise to a scalar-valued map $v$ on tests. Passing to limits in addition and scalar multiplication shows $v$ is complex-linear. Passing to the limit in the bound from step 2.1 gives $|v(\varphi)|\le Cp_m(\varphi)$ on each $\mathcal D_K$. F1 proves $v$ is a distribution. The witnesses are obtained for one compact at a time, with no additional choice principle. [step 2.1, F1]

4.1 For a pointwise convergent sequence, every scalar sequence of evaluations is bounded: its convergent tail is bounded and its remaining finite set has a finite maximum. Thus its range is a pointwise bounded family, and step 3.1 applies. A general convergent scalar net need not be bounded over all its indices, so that reasoning is used only for sequences. For empty $\mathcal U$ take $C=m=0$; empty $K$ has zero test space and the same choice works. Dependent Choice was used precisely in F3 for the Baire step. $\square$ [step 3.1, step 2.1, F3, F4]
