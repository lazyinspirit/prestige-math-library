---
id: lem-tdmath-reference-strip-coordinate
kind: lemma
title: A unique reference coordinate inside a thermal strip
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 9
deps: [def-tdmath-forward-sector-hypotheses, def-tdmath-thermal-contact-hypotheses, def-tdmath-forward-signed-comparison, lem-tdmath-forward-spectator-cancellation, lem-tdmath-thermal-scaling-invariance, thm-tdmath-sector-nesting]
dependency_roles:
  def-tdmath-forward-sector-hypotheses: mathematical-premise
  def-tdmath-thermal-contact-hypotheses: mathematical-premise
  def-tdmath-forward-signed-comparison: mathematical-premise
  lem-tdmath-forward-spectator-cancellation: mathematical-premise
  lem-tdmath-thermal-scaling-invariance: mathematical-premise
  thm-tdmath-sector-nesting: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §IV.B.1, pp. 54–56"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 4, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
---

## Statement

Let a simple domain and its finite thermal joins satisfy [[def-tdmath-forward-sector-hypotheses]] and [[def-tdmath-thermal-contact-hypotheses]]. Let $x_0\prec\prec x_1$ with $x_0\sim_T x_1$, and let $x$ satisfy $x_0\prec\prec x\prec\prec x_1$. For $0\le\lambda\le1$, write $R_\lambda$ for the compound state $((1-\lambda)x_0,\lambda x_1)$, omitting a zero coefficient at the endpoints. Then there is a unique $\lambda\in(0,1)$ with $R_\lambda\sim x$ in the common accessibility relation.

## Facts & Assumptions

**Given:** The compound axioms A1–A6, thermal-join axioms T1–T3 with the equal-state split, strict strip endpoints, and join closure.

[A1] [[def-tdmath-forward-sector-hypotheses]]: compounds have the preorder, consistency, positive scaling, splitting, and stability assumptions; CH is not part of this definition.

[F1] [[def-tdmath-thermal-contact-hypotheses]] and [[lem-tdmath-thermal-scaling-invariance]]: an equal-state split is reversible, thermal equivalence is transitive, and scaling either member of a thermal-equilibrium pair preserves thermal equivalence.

[F2] [[def-tdmath-forward-signed-comparison]] and [[lem-tdmath-forward-spectator-cancellation]]: equal-total signed maps compare by their positive and negative parts; cancellation is valid under A1–A6 without CH.

[F3] [[thm-tdmath-sector-nesting]]: every pair of states in each finite join domain is comparable.

## Proof

**Given:** [A1], [F1]–[F3], and $x_0\prec\prec x\prec\prec x_1$.

1.1 For $0\le\lambda<\mu\le1$, the signed difference $R_\mu-R_\lambda=(\mu-\lambda)(\mathsf{J}(x_1)-\mathsf{J}(x_0))$ has positive part $(\mu-\lambda)\mathsf{J}(x_1)$ and negative part $(\mu-\lambda)\mathsf{J}(x_0)$. Since $x_0\prec x_1$, positive scaling and [F2] give $R_\lambda\prec R_\mu$. A reverse comparison would, by [F2] and inverse positive scaling, give $x_1\prec x_0$, contrary to strictness. Thus the reference states are strictly ordered by parameter. [A1, F2, algebra]

1.2 For $0<\lambda<1$, [F1] makes $(1-\lambda)x_0$ and $\lambda x_1$ thermally equivalent. By the definition of thermal equivalence, their compound is reversible with its join state. The equal-state split makes $((1-\lambda)x,\lambda x)$ reversible with its join state and with $x$. Both join states belong to the join of two scaled copies of the same simple domain, so [F3] compares them. The endpoint cases use $R_0=x_0$ and $R_1=x_1$ directly. Hence $R_\lambda$ and $x$ are comparable for every $\lambda\in[0,1]$. [F1, F3, given]

2.1 Let $L=\{\lambda\in[0,1]:R_\lambda\prec x\}$. The strict endpoint comparison $x_0\prec x$ puts $0$ in $L$. Step 1.1 and transitivity make $L$ downward closed. Let $s=\sup L$. If $s>0$, then $s-1/n\in L$ for every sufficiently large $n$. Since $R_{s-1/n}+(1/n)x_1=R_s+(1/n)x_0$, consistency yields $R_s+(1/n)x_0\prec x+(1/n)x_1$. Stability with bases $R_s,x$ and fixed spectators $x_0,x_1$ gives $R_s\prec x$. If $s=0$, this comparison is the given $x_0\prec x$. [A1, F2, step 1.1, choose]

3.1 If $s<1$, then $s+1/n\notin L$ for every sufficiently large $n$. Step 1.2 gives comparability and the definition of $L$ excludes $R_{s+1/n}\prec x$, so $x\prec R_{s+1/n}$. The identity $R_{s+1/n}+(1/n)x_0=R_s+(1/n)x_1$ and stability yield $x\prec R_s$. If $s=1$, the strict strip gives $x\prec R_1$; together with step 2.1 this would imply $x_1\prec x$, contrary to $x\prec\prec x_1$. Thus $s<1$, and step 2.1 and the preceding stability comparison give $R_s\sim x$. [A1, F2, step 1.2, step 2.1]

4.1 The equivalence $R_s\sim x$ also excludes $s=0$, because $R_0=x_0$ and $x_0\not\sim x$, and excludes $s=1$ by strictness of $x\prec\prec x_1$. If $R_t\sim x$ for another $t$, transitivity gives $R_s\sim R_t$; step 1.1 then forces $s=t$. Hence the parameter is unique and lies in $(0,1)$. [F2, step 1.1, step 3.1, algebra] ∎
