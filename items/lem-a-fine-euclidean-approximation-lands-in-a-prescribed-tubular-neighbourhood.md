---
id: lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood
kind: lemma
title: "A fine Euclidean approximation lands in a prescribed tubular neighbourhood"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-positive-continuous-error-function-for-strong-approximation,
       def-tubular-neighbourhood-of-an-embedded-submanifold,
       lem-distance-to-set-is-lipschitz]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: certify
    date: 2026-09-09
    scope: owner-authorized-local-empty-complement-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Smooth Approximation of Maps Between Manifolds"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $j:N\hookrightarrow\mathbb R^m$ be a closed embedded smooth submanifold with
tubular neighbourhood $U$, and let $F:M\to N$ be continuous. Then there exists
a positive continuous error function $\varepsilon$ on $M$ such that every smooth
map $\widetilde H:M\to\mathbb R^m$ satisfying
$$ \|\widetilde H(p)-j(F(p))\|<\varepsilon(p) $$
for all $p$ has image contained in $U$.

## Facts & Assumptions

**Given:** A continuous map $F:M\to N$ and a tubular neighbourhood $U$ of the embedded image $j(N)\subseteq\mathbb R^m$.

[F1] A positive continuous error function is a continuous map into $(0,\infty)$ ([[def-positive-continuous-error-function-for-strong-approximation]]).

[L1] The prescribed tubular neighbourhood is open and contains $j(N)$.
([[def-tubular-neighbourhood-of-an-embedded-submanifold]])

[L2] Distance to a fixed nonempty set is a finite nonnegative real-valued
$1$-Lipschitz function. ([[lem-distance-to-set-is-lipschitz]])

## Proof
**Proof technique:** direct.

1.1 Put $C=\mathbb R^m\setminus U$. If $C=\varnothing$, take [given, F1, L1]
$\varepsilon\equiv1$. It is positive and continuous, and every map into
$\mathbb R^m=U$ already has the required image. This also covers $m=0$.
If $M$ is empty the unique error function and the conclusion are vacuous.

1.2 Suppose $C\ne\varnothing$. Set [given, F1, L1, L2, construct]
$$\varepsilon(p)=\min\{1,\tfrac12 d(j(F(p)),C)\}.$$
The distance is a finite real number by [L2]. For each $p$, openness of $U$
gives a ball of some radius $r>0$ about $j(F(p))$ contained in $U$;
every point of $C$ is therefore at distance at least $r$. Thus
$d(j(F(p)),C)\ge r>0$. By [L2] the distance function is continuous;
composing with $j\circ F$ and taking its minimum with $1$ preserves
continuity. Explicitly, $|\min(1,a)-\min(1,b)|\le|a-b|$ by the three
cases $a,b\le1$, $a,b\ge1$, and one on each side. Hence $\varepsilon$
is positive, finite, continuous and at most $1$, without making any
simultaneous choices of the pointwise radii.

2.1 If $\widetilde H(p)\in C$, the defining infimum gives [step 1.2, L2]
$d(j(F(p)),C)\le\|\widetilde H(p)-j(F(p))\|$.
This contradicts the assumed bound, since
$\varepsilon(p)\le d(j(F(p)),C)/2<d(j(F(p)),C)$.
Thus $\widetilde H(p)\in U$ for every $p$.

3.1 Therefore every approximation with the specified error bound lands in [step 1.1, step 2.1]
the prescribed $U$. The construction is choice-free and uses neither an
approximation existence theorem nor a new tubular neighbourhood. ∎
