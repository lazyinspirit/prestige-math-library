---
id: lem-csm-frontier-fk-independent-cluster-animal-envelope
kind: lemma
title: "Independent connected-set envelopes and a greedy lattice-animal bound"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-tdmath-measure-integral
  - thm-tdmath-monotone-convergence
dependency_roles:
  def-tdmath-measure-integral: mathematical-premise
  thm-tdmath-monotone-convergence: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Beffara and Duminil-Copin, The self-dual point of the two-dimensional random-cluster model is critical for q >= 1"
      url: https://arxiv.org/pdf/1006.5073
      locator: "Section 4, proof of Theorem 2, pp. 20–21, independent cluster envelopes and lattice animals; complete elementary replacements for the cited auxiliary animal results are proved here."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $(\Omega,\mathcal F,P)$ be a given probability space. For each $y\in\mathbb Z^2$, let $S_y$ be a measurable random finite nearest-neighbor-connected vertex set containing $y$, with the discrete sigma-algebra on the countable collection of such sets. Assume the sets $S_y-y$ are independent and identically distributed and that $\mathbb E|S_0|^r<\infty$ for every real $r>0$. A lattice animal is a finite nearest-neighbor-connected vertex set containing $0$. Define the extended measurable envelope
$$M_z=\sup\{|S_y|:y\in\mathbb Z^2,\ z\in S_y\}.$$
Almost surely every $M_z$ is a finite maximum, and there is a deterministic finite constant $K_0$ such that, almost surely, every sufficiently large lattice animal $\Gamma$ satisfies
$$\sum_{z\in\Gamma}M_z\leq K_0|\Gamma|.$$
More generally, for any given independent identically distributed field $X_y\geq1$ with finite moments of every positive order, there is a deterministic finite $K$ such that almost surely $\sum_{y\in\Gamma}X_y\leq K|\Gamma|$ for every sufficiently large lattice animal. The random cutoff may depend on the realization. This result assumes the stated random family on a probability space; it does not construct an infinite product law or require a choice axiom to supply that law.

## Statement references

[[def-tdmath-measure-integral]]

[[thm-tdmath-monotone-convergence]]

## Facts & Assumptions

**Given:** The stated probability space and random families, with independence meaning factorization for every finite list of distinct sites.

[F1] Nonnegative integrals and their monotonicity are those of [[def-tdmath-measure-integral]].

[F2] Integrals commute with increasing nonnegative limits, so expectations of nonnegative countable sums are the sums of their expectations ([[thm-tdmath-monotone-convergence]]).

## Proof

1.1 Every supremum defining $M_z$ is measurable because the roots are countable and each $S_y$ has countably many possible finite values. Translation of the common set law and [F2] give $\sum_yP(z\in S_y,|S_y|>u)=\mathbb E[|S_0|\mathbf1_{\{|S_0|>u\}}]$. This tail tends to zero: for example it is at most $u^{-1}\mathbb E|S_0|^2$. The union bound therefore shows $P(M_z>u)\to0$, hence $M_z<\infty$ almost surely. At least $S_z$ contains $z$, and every size is a positive integer, so a finite supremum is attained. Taking the countable union of the null exceptional events proves this simultaneously for all $z$. No independence of the $M_z$ is asserted. [F1, F2, given, algebra]

1.2 We first prove the assertion for the independent field $X$. Suppose sites are independently marked with probability $r$. If an animal of size at most $m$ contains $k$ distinct marked sites, a depth-first traversal of a spanning tree of that animal, rooted at $0$, visits them in some order using at most $2m$ steps. The successive displacement vectors $v_1,\ldots,v_k\in\mathbb Z^2$, starting at $0$, have total $\ell^1$ length at most $2m$. There are at most $2^{2k}\binom{2m+2k}{2k}\leq(Cm/k)^{2k}$ such ordered lists for $1\leq k\leq m$: choose signs of their two coordinates and distribute at most $2m$ units among $2k$ nonnegative coordinate magnitudes. Repeated sites and zero coordinates only cause overcounting. For a list of distinct visited sites, all its sites are marked with probability $r^k$. Thus $P(\text{some animal of size at most }m\text{ has }k\text{ marked sites})\leq(C' r m^2/k^2)^k$. This counts marked-site lists rather than all animals and is uniform over all their shapes. [given, construct, algebra]

2.1 Put $m=2^l$, $r_j=P(X_0\geq2^j)$ and fix $\epsilon=1/4$. Choose a deterministic $a$ such that $C'/a^2\leq e^{-2}$, and a fixed $B\geq2$. For $0\leq j\leq\lfloor\epsilon\log_2m\rfloor$ set $k_j=\lceil\max\{am\sqrt{r_j},B\log m\}\rceil$. If $k_j>m$ the corresponding forbidden event is empty; otherwise step 1.2 bounds its probability by $e^{-2k_j}\leq m^{-2B}$. The union over these $O(\log m)$ values of $j$ is summable along dyadic $m$. For a moment order $Q>2/\epsilon$, the elementary inequality $P(X_0>v)\leq v^{-Q}\mathbb E X_0^Q$ and the fact that every size-at-most-$m$ animal lies in $\Lambda_m=[-m,m]^2\cap\mathbb Z^2$ give $P(\max_{\Lambda_m}X_y>m^\epsilon)\leq(2m+1)^2\mathbb E X_0^Q m^{-\epsilon Q}$, also summable in $l$. [F1, step 1.2, choose, algebra]

3.1 If events $E_l$ have summable probabilities, then $P(\bigcup_{l\geq L}E_l)\leq\sum_{l\geq L}P(E_l)\to0$; countable additivity implies that only finitely many $E_l$ occur almost surely. Apply this elementary argument to the failures in step 2.1. Almost surely, for every sufficiently large dyadic $m$, all weights in $\Lambda_m$ are at most $m^\epsilon$, and every size-at-most-$m$ animal has fewer than $k_j$ sites with $X_y\geq2^j$ at each relevant level. The pointwise layer bound $X_y\leq1+\sum_{j\geq0}2^{j+1}\mathbf1_{\{X_y\geq2^j\}}$ then gives, for every animal with $m/2<|\Gamma|\leq m$, $|\Gamma|^{-1}\sum_{y\in\Gamma}X_y\leq1+4a\sum_{j\geq0}2^j\sqrt{r_j}+O(m^{\epsilon-1}\log m)$. Levels above $\epsilon\log_2m$ contribute zero; the error comes from the additive $B\log m+1$ in $k_j$. The constants are deterministic. [F1, step 2.1, algebra]

4.1 A fixed moment order $Q>2$ gives $\sqrt{r_j}\leq(\mathbb E X_0^Q)^{1/2}2^{-Qj/2}$, so the series in step 3.1 converges. Its value is deterministic, and the error tends to zero. Choose $K$ larger than $2+4a\sum_{j\geq0}2^j\sqrt{r_j}$. Every sufficiently large animal belongs to one of the dyadic size ranges in step 3.1. Thus almost surely its average $X$-weight is at most this same $K$, proving the general independent-field assertion. [F1, step 3.1, choose, algebra]

5.1 Apply step 4.1 to $X_y=|S_y|^2$, which is an independent identically distributed field with all moments. Work on the probability-one event where its large-animal bound holds and all $M_z$ are finite. Let $\Gamma$ be any sufficiently large animal, $m=|\Gamma|$, $A=\sum_{z\in\Gamma}M_z$, and $t=A/(2m)>0$. For each of the finitely many $z\in\Gamma$ with $M_z>t$, choose a root $y(z)$ attaining its maximum; to avoid even a selection convention take the first such root in a fixed enumeration of $\mathbb Z^2$. Let $Y$ be the distinct chosen roots, $s_y=|S_y|$, $U=\sum_{y\in Y}s_y^2$, and $V=\sum_{y\in Y}s_y$. Low-weight sites contribute at most $A/2$, and at most $s_y$ sites can be assigned to a given $S_y$. Hence $U\geq A/2=mt$. Since $s_y>t$ for chosen roots, $V\leq U/t$. [step 1.1, step 4.1, construct, algebra]

6.1 The set $\Delta=\Gamma\cup\bigcup_{y\in Y}S_y$ is a finite connected animal containing every root in $Y$, because every chosen set meets $\Gamma$ and is connected. Its size is at least $m$ and at most $m+V$. Therefore the same large-animal bound gives $U\leq\sum_{y\in\Delta}|S_y|^2\leq K|\Delta|\leq K(m+U/t)$. If $t>2K$, this would imply $U<2Km$ while step 5.1 gives $U\geq mt>2Km$, a contradiction. Thus $t\leq2K$ and $A\leq4Km$. Taking the deterministic constant $K_0=4K$ proves the envelope assertion uniformly over every sufficiently large animal. Only the given probability laws and countable additivity were used, without constructing any new infinite family. [step 4.1, step 5.1, algebra] ∎
