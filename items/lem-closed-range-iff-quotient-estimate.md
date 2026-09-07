---
id: lem-closed-range-iff-quotient-estimate
kind: lemma
title: "Closed range is equivalent to a quotient estimate"
status: draft
origin: pipeline
deps: ["def-transpose-of-a-bounded-operator", "thm-quotient-of-banach-by-closed-subspace-is-banach", "thm-universal-property-of-the-normed-quotient", "lem-closed-subspace-of-a-banach-space-is-banach", "thm-bounded-inverse-theorem", "thm-bounded-below-iff-injective-with-closed-range"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Theorem 4.16(ii)–(iii), pp.178–179"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "The induced map X/ker T -> ran T is bounded and bijective; if the range is closed use bounded inverse. Conversely its map into Y is bounded below from a Banach domain, giving closed range. The kernel is closed by continuity."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. Assume DC. For a bounded linear map $T:X\to Y$ between Banach spaces, $$\operatorname{ran}T\text{ is norm closed}\quad\Longleftrightarrow\quad\exists C>0\ \forall x\in X:\ \operatorname{dist}(x,\ker T)\le C\|Tx\|.$$

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F2] From [[thm-quotient-of-banach-by-closed-subspace-is-banach]], with its stated hypotheses: Assume the Axiom of Countable Choice (def-countable-choice). Let $X$ be a Banach space and let $M \le X$ be a closed linear subspace. Then $X/M$ is Banach for the quotient norm.

[F3] From [[thm-universal-property-of-the-normed-quotient]], with its stated hypotheses: Let $X$ and $Y$ be normed spaces over the same scalar field, let $M \le X$ be a closed linear subspace, let $q:X\to X/M$ be the quotient map, and let $T:X\to Y$ be a bounded linear operator with $M \subseteq \ker T$. Then there is a unique bounded linear operator $\overline T:X/M\to Y$ such that $\overline T \circ q = T,$ and moreover $\|\overline T\| = \|T\|$.

[F4] From [[lem-closed-subspace-of-a-banach-space-is-banach]], with its stated hypotheses: Let $V$ be a Banach space and let $W\subseteq V$ be a closed linear subspace, equipped with the restricted norm. Then $W$ is a Banach space.

[F5] From [[thm-bounded-inverse-theorem]], with its stated hypotheses: Assume DC. A bounded bijective linear map $T:X\to Y$ between Banach spaces has a bounded linear inverse $T^{-1}:Y\to X$.

[F6] From [[thm-bounded-below-iff-injective-with-closed-range]], with its stated hypotheses: Assume the Axiom of Dependent Choice (def-dependent-choice). Let $X$ and $Y$ be Banach spaces over the same scalar field, and let $T:X\to Y$ be a bounded linear operator. Then $T$ is bounded below if and only if it is injective and has closed range.

## Proof

1.1 The kernel $N=\ker T$ is closed: $x_j\to x$ with $Tx_j=0$ implies $Tx=0$ by boundedness. DC supplies the countable choice required for quotient completeness, so $Z=X/N$ is Banach. The quotient universal property gives a bounded injective $A:Z\to Y$, $A(x+N)=Tx$, with range $\operatorname{ran}T$. [F2, F3]

2.1 If that range is closed, it is Banach. View $A$ as a bounded bijection onto this range and use bounded inverse to obtain $\|x+N\|\le C\|Tx\|$ with a positive $C$ (enlarge a zero bound if necessary). This is the required distance estimate. [F4, F5, step 1.1]

3.1 Conversely the estimate is $\|z\|\le C\|Az\|$ for every $z\in Z$, so $A$ is bounded below. Since $Z$ and $Y$ are Banach, the bounded-below criterion makes its range closed. If $T=0$, then $Z=0$ and the estimate is $0\le0$ for any positive $C$; all steps cover this case. [F6, step 1.1, given] ∎
