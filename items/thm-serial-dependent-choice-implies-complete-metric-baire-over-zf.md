---
id: thm-serial-dependent-choice-implies-complete-metric-baire-over-zf
kind: theorem
title: "Serial Dependent Choice implies the complete-metric Baire principle over ZF"
status: draft
origin: pipeline
deps: [def-serial-relation-dependent-choice-principle-over-zf, lem-prescribed-start-and-starting-point-free-serial-choice-are-equivalent-in-zf, def-complete-metric-baire-principle-over-zf, lem-open-dense-and-closed-nowhere-dense-baire-forms-are-equivalent-in-zf, def-metric-ball, def-metric-topology, thm-metric-open-set-algebra, def-cauchy-in-metric, def-metric-convergence, cor-archimedean-reciprocal, thm-induction-principle, def-metric-space, def-complete-metric-space, def-axiom-schema-of-separation]
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Miller, Lecture notes on set theory without choice; Proposition 5.4(1) implies (2), pp.10\u201311"
      url: https://people.math.wisc.edu/~awmille1/old/m873-08/ac.pdf
    - title: "Karagila, Zornian Functional Analysis, Definition 4 and Chapter 2, pp. 4–5, 8–11"
      url: https://karagila.org/wp-content/uploads/2016/10/axiom-of-choice-in-analysis.pdf
---

## Statement

In ZF, assume [[def-serial-relation-dependent-choice-principle-over-zf|DC]].
Then [[def-complete-metric-baire-principle-over-zf|CM-Baire]] holds: for every
complete metric space $(X,d)$ and every sequence $(U_n)_{n\in\omega}$ of open
dense subsets, $\bigcap_n U_n$ is dense.

## Facts & Assumptions

**Given:** DC, a complete metric space $(X,d)$ and open dense sets $U_n$ for $n\in\omega$.

[F1] DC has the equivalent prescribed-start form for every nonempty serial set ([[lem-prescribed-start-and-starting-point-free-serial-choice-are-equivalent-in-zf]]).

[F2] Density is tested by nonempty open sets, and the four Baire formulations are equivalent in ZF ([[lem-open-dense-and-closed-nowhere-dense-baire-forms-are-equivalent-in-zf]]).

[F3] $B(c,r)=\{x:d(c,x)<r\}$ and $\bar B(c,r)=\{x:d(c,x)\le r\}$ for $r>0$ ([[def-metric-ball]]).

[F4] Open sets contain a positive-radius ball about each of their points ([[def-metric-topology]]); balls and finite intersections of open sets are open ([[thm-metric-open-set-algebra]]).

[F5] Given any positive real $\varepsilon$, some positive integer $t$ satisfies $1/t<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[F6] Metric symmetry and the triangle inequality hold, and $d(c,c)=0$ ([[def-metric-space]]).

[F7] A sequence is Cauchy if all distances on a sufficiently late tail are less than any positive rational tolerance ([[def-cauchy-in-metric]]).

[F10] In a complete metric space each Cauchy sequence has a limit in $X$ ([[def-complete-metric-space]]).

[F11] Convergence puts distances to the limit eventually below any positive rational tolerance ([[def-metric-convergence]]).

[F9] Separation forms a subset of a set by a formula with parameters ([[def-axiom-schema-of-separation]]).

[F8] Natural-number induction proves a property from its zero and successor cases ([[thm-induction-principle]]).

## Proof

1.1 If $X=\varnothing$, the intersection is empty and dense. Otherwise it suffices to meet an arbitrary nonempty open $V\subseteq X$. Set $C(c,r)=\bar B(c,r)$. For any nonempty open $W$, fix $c\in W$ and $\delta>0$ with $B(c,\delta)\subseteq W$. Given a bound $b>0$, take $t\ge1$ with $r=1/t<\min(\delta,b)$. Then $r$ is positive rational, $r\le b$, and $C(c,r)\subseteq B(c,\delta)\subseteq W$, directly from $d(c,x)\le r<\delta$. [F2, F3, F4, F5, given]

2.1 By ZF Separation, let $S$ consist of all triples $(n,c,r)\in\omega\times X\times\mathbb Q$ with $0<r\le1/(n+1)$ and $C(c,r)\subseteq V\cap U_n$. The set $V\cap U_0$ is nonempty by density and open. The preceding construction with $b=1$ gives an initial state $s_0=(0,c_0,r_0)\in S$. [F2, F4, F9, step 1.1]

3.1 Relate $(n,c,r)$ to $(n+1,c',r')$ when both lie in $S$ and $C(c',r')\subseteq B(c,r)\cap U_{n+1}$. For each state, $c\in B(c,r)$, so density of $U_{n+1}$ makes $W=B(c,r)\cap U_{n+1}$ nonempty; it is open. The construction with $b=1/(n+2)$ supplies $c',r'$. Since $B(c,r)\subseteq C(c,r)\subseteq V$, this triple belongs to $S$. Thus the displayed relation is serial on the nonempty set $S$. Only one centre and radius were fixed for this one existence assertion. [F2, F3, F4, F6, step 1.1, step 2.1]

4.1 Apply prescribed-start DC to $S$ with initial state $s_0$. The resulting chain has stage coordinate $n$ at position $n$: this holds at zero, and each relation step increments that coordinate by one. Write its states $(n,c_n,r_n)$ and $C_n=C(c_n,r_n)$. Then $C_{n+1}\subseteq B(c_n,r_n)\subseteq C_n$, $r_n\le1/(n+1)$, and $C_n\subseteq V\cap U_n$. This application is the proof's sequence-selection use of DC; centres are already components of the selected states. [F1, F3, F8, step 2.1, step 3.1]

5.1 For fixed $n$, induction on $m-n$ gives $C_m\subseteq C_n$ for all $m\ge n$: equality is the base, and the next containment follows from nesting. Since $c_m\in C_m$, for $m,k\ge n$ the triangle inequality gives $d(c_m,c_k)\le d(c_m,c_n)+d(c_n,c_k)\le2r_n\le2/(n+1)$. For any positive rational $\varepsilon$, choose $t\ge1$ with $1/t<\varepsilon/2$ and take $n=t$; then the displayed bound is less than $\varepsilon$. Hence $(c_n)$ is Cauchy. Completeness supplies a single limit $x\in X$. [F3, F5, F6, F7, F8, F10, step 4.1]

6.1 Fix $n$. If $d(x,c_n)>r_n$, put $\eta=d(x,c_n)-r_n>0$ and fix a positive reciprocal $e<\eta$. Convergence gives $m\ge n$ with $d(x,c_m)<e$. The tail bound and triangle inequality yield $d(x,c_n)\le d(x,c_m)+d(c_m,c_n)<e+r_n<\eta+r_n=d(x,c_n)$, which is impossible. Therefore $d(x,c_n)\le r_n$ and $x\in C_n$. In particular equality on a closed-ball boundary is allowed. [F3, F5, F6, F11, step 5.1]

7.1 Thus $x\in V\cap\bigcap_n U_n$. Since $V$ was an arbitrary nonempty open set, the intersection is dense. This proves CM-Baire, and hence also its equivalent category formulations. [F2, step 4.1, step 6.1, step 1.1] ∎
