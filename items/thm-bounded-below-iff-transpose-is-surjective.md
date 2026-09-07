---
id: thm-bounded-below-iff-transpose-is-surjective
kind: theorem
title: "Bounded below is equivalent to surjectivity of the transpose"
status: published
origin: pipeline
deps: ["thm-banach-closed-range-theorem", "lem-elementary-kernel-range-annihilator-identities", "lem-transpose-range-membership-by-domination", "thm-bounded-below-iff-injective-with-closed-range"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Corollary 4.17(ii), p.181"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "Bounded below gives injective closed range, so the closed-range identity makes T* onto. Conversely onto implies ker T=0 by E and ran T closed by CR; apply the published bounded-below criterion."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. Assume DC. If $T:X\to Y$ is bounded linear between Banach spaces, then $$\bigl(\exists c>0\ \forall x\in X:\|Tx\|\ge c\|x\|\bigr)\quad\Longleftrightarrow\quad T^*:Y^*\to X^*\text{ is onto}.$$

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[thm-banach-closed-range-theorem]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Assume DC and let $T:X\to Y$ be bounded linear between Banach spaces. The following are equivalent: $\operatorname{ran}T$ is norm closed; $\operatorname{ran}T^*$ is norm closed; and there is $C>0$ such that $\operatorname{dist}(x,\ker T)\le C\|Tx\|$ for all $x\in X$. In that case $\operatorname{ran}T={}^\perp(\ker T^*),\qquad \operatorname{ran}T^*=(\ker T)^\perp.$

[F2] From [[lem-elementary-kernel-range-annihilator-identities]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a bounded linear $T:X\to Y$ between normed spaces, $(\operatorname{ran}T)^\perp=\ker T^*,\qquad {}^\perp(\operatorname{ran}T^*)=\ker T,\qquad \overline{\operatorname{ran}T}^{\|\cdot\|}={}^\perp(\ker T^*).$ The closure in the last identity is in $Y$.

[F3] From [[lem-transpose-range-membership-by-domination]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $T:X\to Y$ be bounded linear between normed spaces and $f\in X^*$. Then $f\in\operatorname{ran}T^*\quad\Longleftrightarrow\quad\exists C\ge0\ \forall x\in X:\ |f(x)|\le C\|Tx\|.$ For any such $C$, a representing $g\in Y^*$ can be chosen with $\|g\|\le C$.

[F4] From [[thm-bounded-below-iff-injective-with-closed-range]], with its stated hypotheses: Assume the Axiom of Dependent Choice (def-dependent-choice). Let $X$ and $Y$ be Banach spaces over the same scalar field, and let $T:X\to Y$ be a bounded linear operator. Then $T$ is bounded below if and only if it is injective and has closed range.

## Proof

1.1 If $T$ is bounded below with constant $c>0$, every $f\in X^*$ satisfies $|f(x)|\le\|f\|\|x\|\le (\|f\|/c)\|Tx\|$. Domination gives $f\in\operatorname{ran}T^*$, proving surjectivity. [F3]

1.2 If $T^*$ is onto, its range $X^*$ is closed. Closed range duality makes $\operatorname{ran}T$ closed. Also $\ker T={}^\perp X^*=\{0\}$: the elementary identity applied to the identity operator on $X$ gives the last equality. Thus $T$ is injective with closed range, and the Banach bounded-below criterion applies. [F1, F2, F4]

2.1 When $X=0$, the lower bound holds for any positive $c$ and $T^*$ maps onto $X^*=0$. The preceding arguments cover this case without choosing a unit vector or dividing by its norm. [step 1.1, step 1.2] ∎
