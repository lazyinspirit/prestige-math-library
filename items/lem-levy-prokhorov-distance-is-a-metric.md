---
id: lem-levy-prokhorov-distance-is-a-metric
kind: lemma
title: Levy prokhorov distance is a metric
deps: ["def-levy-prokhorov-metric", "thm-continuity-from-above-for-measures", "thm-dynkin-pi-lambda", "lem-distance-to-set-is-lipschitz"]
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: van Gaans, Theorem 4.1, pp. 9–10
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

The closed-set definition of $\pi$ is a metric on Borel probabilities on any metric space, and $0\le\pi\le1$. It equals the infimum obtained by testing all Borel B and using open enlargements $B^\varepsilon=\{x:d(x,B)<\varepsilon\}$, with empty enlargement empty.

## Facts & Assumptions

[F1] [[def-levy-prokhorov-metric]]: For Borel probabilities $\mu$,$\nu$ on a metric space S, put $F^{[\varepsilon]}=\{x:d(x,F)\le\varepsilon\}$ for nonempty closed F, and $\varnothing^{[\varepsilon]}=\varnothing$. Define $\pi(\mu,\nu)$ as the infimum of $\varepsilon$>0 such that, for every closed F, both $\mu(F)\le\nu(F^{[\varepsilon]})+\varepsilon$ and $\nu(F)\le\mu(F^{[\varepsilon]})+\varepsilon$. The admissible set contains every $\varepsilon$>=1 and is bounded below by zero, so its real infimum exists by thm-infimum-property. Enlargements are closed because distance to a nonempty set is continuous. The metric assertion is proved in the following lemma.

[F2] [[lem-distance-to-set-is-lipschitz]]: Let $(X,d)$ be a metric space (def-metric-space), let $A \subseteq X$ be
nonempty and let $x, y \in X$. Then

$$|d(x,A) - d(y,A)| \le d(x,y),$$

with $d(\cdot,A)$ the distance to a nonempty set (def-metric-bounded-diameter).
Thus the real-valued function $u \mapsto d(u,A)$ changes by at most $d(u,v)$
between $u$ and $v$: it is **$1$-Lipschitz**.

[F3] [[thm-continuity-from-above-for-measures]]: Let $(E_n)_{n\in\mathbb N}$ be a decreasing sequence of measurable sets for a measure $\mu$. If $\mu(E_{n_0})<+\infty$ for some $n_0$, then

$$\mu\left(\bigcap_{n\in\mathbb N}E_n\right)=\inf_{n\in\mathbb N}\mu(E_n).$$

[F4] [[thm-dynkin-pi-lambda]]: Let $\mathcal P$ be a $\pi$-system on $X$. Then
$\lambda_X(\mathcal P)=\sigma_X(\mathcal P)$. Consequently, if $\mathcal D$ is
any lambda-system on $X$ with $\mathcal P\subseteq\mathcal D$, then
$\sigma_X(\mathcal P)\subseteq\mathcal D$.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 By F1, $0\le\pi\le1$ and symmetry holds. Since $F\subseteq F^{[\varepsilon]}$, every positive $\varepsilon$ is admissible for equal measures, giving self-distance zero. Admissibility is upward closed because larger radii enlarge sets and increase the error. [F1]

1.2 If $\pi$($\mu$,$\nu$)=0, for each positive integer m the upward-closure observation makes 1/m admissible. For nonempty closed F the sets $F^{[1/m]}$ are closed by F2 and decrease to F. F3 gives $\mu$(F)<=$\nu$(F) and, symmetrically, the reverse. Equality also holds on the empty set. The sets on which the two probabilities agree form a lambda-system; closed sets form a generating $\pi$-system, so F4 yields $\mu$=$\nu$. [F2, F3, F4]

1.3 If a is admissible between $\mu$ and $\nu$, and b between $\nu$ and $\sigma$, then for every closed F, $\mu(F)\le\nu(F^{[a]})+a\le\sigma((F^{[a]})^{[b]})+a+b\le\sigma(F^{[a+b]})+a+b$. The last inclusion follows from the metric triangle inequality by approximating each infimum within any positive slack and then taking its infimum; empty F is separate. The reverse inequality interchanges $\mu$ and $\sigma$. Thus a+b is admissible, and taking a and b arbitrarily close above their infima proves the triangle inequality. [given, algebra]

2.1 If $\varepsilon$ is admissible in the all-Borel open convention, it is admissible for closed sets and closed enlargements, since $F^\varepsilon\subseteq F^{[\varepsilon]}$. Conversely, if a is admissible in the closed convention, any Borel B satisfies $\mu(B)\le\mu(\overline B)\le\nu((\overline B)^{[a]})+a\le\nu(B^{a+\delta})+a+\delta$ for every $\delta$>0, because distance to B and its closure agree. Interchanging the measures gives the other inequality. Infima and arbitrary positive slack prove equality of the two conventions. [given, algebra] ∎
