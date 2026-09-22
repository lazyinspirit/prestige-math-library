---
id: ex-canonical-least-ball-selection-in-separable-baire-proof
kind: example
title: "Canonical least-ball selection removes choice"
status: published
origin: pipeline
deps: [thm-separable-complete-metric-baire-in-zf, def-metric-ball, def-metric-topology, def-separable-space, def-countable, def-natural-numbers, thm-n-cross-n-countable, thm-metric-open-set-algebra, thm-well-ordering-principle, thm-recursion, def-metric-space, cor-archimedean-reciprocal]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  scraped: []
  references:
    - title: "Marianne Morillon, Synthese"
      url: "https://lim.univ-reunion.fr/staff/mar/mem-HDR.pdf"
      locator: "Section 2.1, p. 5: unrestricted Baire/DC context only; this example is computed here"
---

## Example

A coded least-pair rule is an alternative to the lexicographic rule in
[[thm-separable-complete-metric-baire-in-zf]]. Given a nonempty open $G$ and
$\rho>0$, call $(k,m)$ admissible when $m\ge1$, $1/m\le\rho$ and
$\bar B(s(k),1/m)\subseteq G$. Choose the admissible pair of least code under
$P(k,m)=2^k(2m+1)-1$. The following three-stage calculation permits repetitions
in the dense enumeration and spends no choice.

## Facts & Assumptions

**Given:** Work in ZF. Let $(X,d)$ be a nonempty separable complete metric space,
let $s:\mathbb N\to X$ have dense range, let $(U_n)_{n\in\mathbb N}$ be a
specified sequence of dense open subsets of $X$, and let $W$ be nonempty open.
Set $G_0=W\cap U_0$ and use radius bound $2^{-(n+2)}$ at stage $n$.

[F1] Positive-radius balls contain their centers; open balls are open and finite
intersections of open sets are open ([[def-metric-ball]],
[[def-metric-topology]], [[thm-metric-open-set-algebra]]).

[F2] Density of the range of $s$ means it meets every nonempty open set
([[def-separable-space]]). The metric triangle inequality and symmetry hold
([[def-metric-space]]); for every $\varepsilon>0$ some integer $m\ge1$ has
$1/m<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[F3] The explicit $P=\sigma^{-1}\circ J$ in [[thm-n-cross-n-countable]] is a
bijection $\mathbb N^2\to\mathbb N$. Every nonempty subset of $\mathbb N$ has a
least element ([[thm-well-ordering-principle]]), so the least element of $P[A]$
decodes to a unique member of every nonempty admissible set $A$.

[F4] A specified self-map of a set and an initial state determine a unique
natural-number sequence by [[thm-recursion]].

## Verification

1.1 For nonempty open $G$ and $\rho>0$, fix $y\in G$ and $r>0$ with $B(y,r)\subseteq G$. By [F2] take $m\ge1$ with $1/m<\min(r/3,\rho)$ and $k$ with $s(k)\in B(y,1/m)$. For $z\in\bar B(s(k),1/m)$ the triangle inequality gives $d(z,y)\le d(z,s(k))+d(s(k),y)<2/m<r$. Thus $\bar B(s(k),1/m)\subseteq G$, proving the admissible set nonempty. This is one finite existence argument for arbitrary $G,\rho$, not a simultaneous choice of witnesses. [given, F1, F2]

2.1 Density of $U_0$ makes $G_0$ nonempty, and it is open. Thus step 1.1 with bound $1/4$ supplies an admissible pair. [given, F1, step 1.1]

3.1 Decode the least code to $(k_0,m_0)$ and put $x_0=s(k_0)$, $r_0=1/m_0$. Then $\bar B(x_0,r_0)\subseteq G_0$. The set $G_1=B(x_0,r_0)\cap U_1$ is nonempty by density of $U_1$, because the open ball contains $x_0$; it is open by finite intersection. [step 2.1, F1, F3, given]

4.1 Apply the same rule to $G_1$ with bound $1/8$, and then to $G_2=B(x_1,r_1)\cap U_2$ with bound $1/16$. At each stage density of the specified next $U_n$ keeps $G_n$ nonempty open, and step 1.1 and [F3] supply the unique next pair. Repeated values of $s$ do not affect uniqueness of the index-radius pair. [step 1.1, step 3.1, F1, F3, given]

5.1 For a concrete example take $X=\{p\}$, $d(p,p)=0$, $s(k)=p$ for every $k$, and $W=U_n=X$ for every $n$. The metric axioms hold, every sequence converges to $p$, and the range of $s$ is dense, so the given hypotheses hold. All positive-radius open and closed balls equal $X$. At stages $n=0,1,2$ admissibility is exactly $m\ge 2^{n+2}$. Since $P(k,m)\ge2m$, with equality exactly when $k=0$, the least pairs are $(0,4),(0,8),(0,16)$, with codes $8,16,32$ and radii $1/4,1/8,1/16$. All centers are the same point $p$, as required for an enumeration with repetitions. [step 4.1, F1, F3, construct]

6.1 For the general recursion use the set of states $(n,G)$ with $G$ nonempty open, together with a default state. The unique least-code pair defines the successor state $(n+1,B(s(k),1/m)\cap U_{n+1})$ on each such state; let the default state map to itself. The preceding nonemptiness argument makes this a total self-map. Apply [F4] from $(0,G_0)$ and take the uniquely defined centers and radii. This is set recursion, not a choice of points from an arbitrary family; it gives the same closed-ball inclusions and radius bounds needed in the cited theorem, though its pairs need not equal the lexicographically least pairs there. [step 1.1, step 2.1, step 3.1, step 4.1, F3, F4] ∎
