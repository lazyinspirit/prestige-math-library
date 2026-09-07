---
id: thm-banach-closed-range-theorem
kind: theorem
title: "Banach closed-range theorem"
status: published
origin: pipeline
deps: ["lem-closed-range-iff-quotient-estimate", "lem-transpose-range-membership-by-domination", "thm-surjective-iff-transpose-is-bounded-below", "lem-elementary-kernel-range-annihilator-identities", "thm-dual-of-a-closed-subspace-is-a-dual-quotient", "cor-distance-to-annihilator-is-restriction-norm", "lem-annihilators-are-closed-subspaces", "lem-transpose-is-bounded-and-has-the-same-norm", "thm-bounded-operator-space-is-banach", "lem-closed-subspace-of-a-banach-space-is-banach"]
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
    - title: "Bühler–Salamon, Functional Analysis, Theorem 4.16, pp.178–181"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "Forward: EST bounds every f annihilating ker T by C||f||||Tx||; FAC yields the exact transpose range, which is norm closed. Reverse: apply EST to T* (both duals Banach), set Y0=closure ran T and S:T:X->Y0. Restriction Y*->Y0* is onto with kernel ker T*. Its quotient norm is the distance to ker T*, so the estimate on T* gives ||h||<=C||S*h||. SUR makes S onto Y0. Finish primal identity with E. No reflexivity or weak-star closure is assumed."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. Assume DC and let $T:X\to Y$ be bounded linear between Banach spaces. The following are equivalent: $\operatorname{ran}T$ is norm closed; $\operatorname{ran}T^*$ is norm closed; and there is $C>0$ such that $\operatorname{dist}(x,\ker T)\le C\|Tx\|$ for all $x\in X$. In that case $$\operatorname{ran}T={}^\perp(\ker T^*),\qquad \operatorname{ran}T^*=(\ker T)^\perp.$$

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[lem-closed-range-iff-quotient-estimate]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Assume DC. For a bounded linear map $T:X\to Y$ between Banach spaces, $\operatorname{ran}T\text{ is norm closed}\quad\Longleftrightarrow\quad\exists C>0\ \forall x\in X:\ \operatorname{dist}(x,\ker T)\le C\|Tx\|.$

[F2] From [[lem-transpose-range-membership-by-domination]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $T:X\to Y$ be bounded linear between normed spaces and $f\in X^*$. Then $f\in\operatorname{ran}T^*\quad\Longleftrightarrow\quad\exists C\ge0\ \forall x\in X:\ |f(x)|\le C\|Tx\|.$ For any such $C$, a representing $g\in Y^*$ can be chosen with $\|g\|\le C$.

[F3] From [[thm-surjective-iff-transpose-is-bounded-below]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Assume DC. For a bounded linear $T:X\to Y$ between Banach spaces, $T\text{ is onto}\quad\Longleftrightarrow\quad\exists C>0\ \forall g\in Y^*:\ \|g\|\le C\|T^*g\|.$

[F4] From [[lem-elementary-kernel-range-annihilator-identities]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a bounded linear $T:X\to Y$ between normed spaces, $(\operatorname{ran}T)^\perp=\ker T^*,\qquad {}^\perp(\operatorname{ran}T^*)=\ker T,\qquad \overline{\operatorname{ran}T}^{\|\cdot\|}={}^\perp(\ker T^*).$ The closure in the last identity is in $Y$.

[F5] From [[thm-dual-of-a-closed-subspace-is-a-dual-quotient]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $X$ be normed and $M\le X$ closed. Restriction $R:X^*\to M^*$ induces a linear isometric bijection $\widetilde R:X^*/M^\perp\longrightarrow M^*,\qquad f+M^\perp\longmapsto f|_M.$ Also $\|R\|\le1$; its norm is $1$ when $M\ne\{0\}$ and $0$ when $M=\{0\}$.

[F6] From [[cor-distance-to-annihilator-is-restriction-norm]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. If $M$ is a closed linear subspace of a normed $X$ and $f\in X^*$, then $\operatorname{dist}(f,M^\perp)=\|f|_M\|.$

[F7] From [[lem-annihilators-are-closed-subspaces]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For any normed $X$ and arbitrary $M\subseteq X$, $N\subseteq X^*$, both $M^\perp\subseteq X^*$ and ${}^\perp N\subseteq X$ are norm-closed linear subspaces. Moreover $\overline N^{\|\cdot\|}\subseteq({}^\perp N)^\perp$.

[F8] From [[lem-transpose-is-bounded-and-has-the-same-norm]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a bounded linear $T:X\to Y$ between normed spaces, $T^*:Y^*\to X^*$ is bounded linear and $\|T^*\|=\|T\|$.

[F9] From [[thm-bounded-operator-space-is-banach]], with its stated hypotheses: Let $X$ and $Y$ be normed spaces over the same scalar field. If $Y$ is Banach, then $\mathcal B(X,Y)$ is Banach for the operator norm.

[F10] From [[lem-closed-subspace-of-a-banach-space-is-banach]], with its stated hypotheses: Let $V$ be a Banach space and let $W\subseteq V$ be a closed linear subspace, equipped with the restricted norm. Then $W$ is a Banach space.

## Proof

1.1 The quotient-estimate lemma equates closedness of $\operatorname{ran}T$ with the stated estimate. Suppose these hold, and write $N=\ker T$. If $f\in N^\perp$, then for every $n\in N$, $|f(x)|=|f(x+n)|\le\|f\|\|x+n\|$; infimizing gives $|f(x)|\le C\|f\|\|Tx\|$. [F1]

1.2 For the reverse implication, assume $\operatorname{ran}T^*$ is norm closed. Both duals are Banach because the scalar field is Banach, and $T^*$ is bounded. The quotient-estimate lemma applied to $T^*:Y^*\to X^*$ therefore supplies $C>0$ with $\operatorname{dist}(g,\ker T^*)\le C\|T^*g\|$. [F1, F8, F9]

1.3 Let $Y_0=\overline{\operatorname{ran}T}\le Y$; it is Banach as a closed subspace. The bounded map $S:X\to Y_0$, $Sx=Tx$, has dense range. The elementary identity and continuity give $Y_0^\perp=\ker T^*$. [F4, F10]

2.1 Domination yields $f\in\operatorname{ran}T^*$. Conversely every $T^*g$ vanishes on $N$ by evaluation. Thus $\operatorname{ran}T^*=N^\perp$, which is norm closed. [F2, F4, F7, step 1.1]

2.2 For any $h\in Y_0^*$, the restriction quotient isometry supplies an extension $g\in Y^*$ with $g|_{Y_0}=h$. The distance formula gives $\|h\|=\operatorname{dist}(g,Y_0^\perp)$. Direct evaluation gives $S^*h=T^*g$, so step 1.2 implies $\|h\|\le C\|S^*h\|$. [F5, F6, step 1.2, step 1.3]

3.1 The separately proved surjectivity criterion makes $S$ onto $Y_0$. Hence $\operatorname{ran}T=Y_0$ is norm closed, proving the reverse implication. The elementary primal closure identity now yields $\operatorname{ran}T={}^\perp\ker T^*$; step 2.1 supplies the dual identity. [F3, F4, step 2.1, step 2.2]

4.1 If $T=0$, its two ranges are zero and the primal estimate is $\operatorname{dist}(x,X)=0$. Both identities reduce to the same zero spaces by the elementary identities. The quotient and restriction steps allow $Y_0=0$, so no nonzero-range assumption has entered either implication. [F4, step 1.1, step 3.1] ∎
