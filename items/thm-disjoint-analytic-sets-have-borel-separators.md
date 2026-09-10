---
id: thm-disjoint-analytic-sets-have-borel-separators
kind: theorem
title: "Borel separation of disjoint analytic sets"
status: draft
origin: pipeline
deps: ["thm-analytic-closed-projection-and-continuous-image-equivalence", "def-countable-borel-hierarchy", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Theorem 4.13, printed p37, complete proof"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZFC, if $A,B$ are disjoint analytic subsets of a Polish space $X$, a Borel $C\subseteq X$ satisfies $A\subseteq C$ and $C\cap B=\varnothing$.

## Facts & Assumptions

[F1] [[thm-analytic-closed-projection-and-continuous-image-equivalence]] parametrizes every nonempty analytic set continuously by $\mathcal N$.

[F2] [[def-countable-borel-hierarchy]] makes opens Borel and gives Borel closure under complements and countable unions.

[A1] Assume [[def-axiom-of-choice]].

## Proof

**Given:** The disjoint analytic pair in the statement.

1.1 If $A=\varnothing$ take $C=\varnothing$; if $B=\varnothing$ take $C=X$. Otherwise by F1, licensed by A1, fix continuous $f,g:\mathcal N\to X$ with images $A,B$. For finite words $s,t$ write $A_s=f[N_s]$ and $B_t=g[N_t]$. [F1, F2, A1]

1.2 Suppose every child pair $A_{s^\frown n},B_{t^\frown m}$ has a Borel separator. A1 selects separators $C_{nm}$ from the nonempty subsets of $\mathcal P(X)$ satisfying this property. Then $C=\bigcup_n\bigcap_m C_{nm}$ is Borel by F2 and De Morgan's identity. Every point of $A_s$ lies in a child $A_{s^\frown n}$ and hence in every $C_{nm}$ for that n, so in $C$. Every point of $B_t$ lies in some $B_{t^\frown m}$ and hence outside $C_{nm}$ for each n, so outside $C$. Thus $C$ separates the parent pair. [F2, A1]

2.1 If $A,B$ were inseparable, step 1.2 implies that each inseparable pair has an inseparable child pair. Recursively take the least such pair of child indices in a fixed enumeration of $\mathbb N^2$. This produces words $s_n,t_n$ of length n whose image pairs remain inseparable. Let $a=\bigcup_n s_n$ and $b=\bigcup_n t_n$. Disjointness gives $f(a)\ne g(b)$. Choose disjoint metric open neighbourhoods $U,V$ of these points. Continuity gives a common n with $f[N_{s_n}]\subseteq U$ and $g[N_{t_n}]\subseteq V$. Then Borel $U$ separates this pair, a contradiction. Therefore a Borel separator exists. The two branches $a,b$ have been constructed independently; no equality between them is assumed. QED. [F2, step 1.1, step 1.2]
