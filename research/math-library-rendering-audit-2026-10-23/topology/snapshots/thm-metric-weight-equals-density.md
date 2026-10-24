---
id: thm-metric-weight-equals-density
kind: theorem
title: "Under choice, every metrizable space has $w(X)=d(X)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-basic-cardinal-function-inequalities, def-metrizable-space, def-metric-topology, thm-rationals-countable, lem-rat-embeds-dense, def-cardinal-arithmetic, cor-cardinal-absorption, def-axiom-of-choice]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "D. H. Fremlin, Measure Theory, Chapter 5A"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf"
pipeline_run: null
---
## Statement
Assuming choice, every metrizable space satisfies $w(X)=d(X)$ under the raw convention.
## Facts & Assumptions
**Given:** The Axiom of Choice, a metric inducing the topology of $X$, and a dense set $D$ of least cardinality $\kappa=d(X)$.

[L1] $d(X)\le w(X)$ ([[thm-basic-cardinal-function-inequalities]]).

[L2] The rationals are countably infinite and lie densely between reals ([[thm-rationals-countable]], [[lem-rat-embeds-dense]]).

[L3] If $\kappa$ is infinite, then $\kappa\cdot\aleph_0=\kappa$ ([[def-cardinal-arithmetic]], [[cor-cardinal-absorption]]).
## Proof

**Proof technique:** direct.

1.1 Suppose first that $\kappa$ is infinite. The family $$\mathcal B=\{B(d,q):d\in D,\ q\in\mathbb Q,\ q>0\}$$ has cardinality at most $\kappa\cdot\aleph_0=\kappa$ by [L2] and [L3]. It is a basis: if $x\in U$ with $U$ open, choose $\varepsilon>0$ with $B(x,\varepsilon)\subseteq U$, choose $d\in D$ with $d(x,d)<\varepsilon/3$, and then by [L2] choose a positive rational $q$ with $d(x,d)<q<\varepsilon-d(x,d)$. Thus $x\in B(d,q)\subseteq B(x,\varepsilon)\subseteq U$. Hence $w(X)\le\kappa=d(X)$. [given, L2, L3]

1.2 Suppose $\kappa$ is finite. If $D=\varnothing$, density forces $X=\varnothing$ and both raw invariants are $0$. Otherwise $X=D$: if $x\notin D$, the finitely many positive distances $d(x,a)$ for $a\in D$ have a positive minimum, and a smaller ball about $x$ misses $D$, contradicting density. A finite metric space is discrete, since at each point a ball smaller than all distances to the other finitely many points is a singleton. The singleton family is a basis of size $|X|$, and every basis of a discrete space must contain each singleton; also every dense set must contain every point. Therefore $w(X)=|X|=d(X)=\kappa$. [given]

2.1 Step 1.1 handles infinite density and step 1.2 handles finite density; combining the resulting upper bound with [L1] gives $w(X)=d(X)$ in every case. [step 1.1, step 1.2, L1] ∎
