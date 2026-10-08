---
id: cex-cg-rank-two-inversion-set-violating-closure
kind: counterexample
title: "A set of two reflections of A2 that fails both closure and the segment criterion"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 18
deps:
  - def-hh-coxeter-matrix-word-group-and-length
  - def-cg-geometric-inversion-set
  - def-cg-real-coxeter-form-and-reflection
  - lem-cg-finite-dihedral-subsystems-and-canonical-roots
  - lem-cg-finite-rank-two-inversion-set-recognition
  - thm-cg-root-inversion-formulas-and-strong-exchange
proof_strategy: direct
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722"
      locator: "Section 2.4, Lemma 2.17, printed p. 14 (rank-two initial/final-segment criterion; the paper cites an earlier proof)"
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Chapter 4, Section 4.4, printed pp. 101-102 (root definition, positive/negative roots and unit normalization); corroborative background only"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $(W,S)$ be the Coxeter system of type $A_2$, with $S=\{s,t\}$ and
$m(s,t)=3$. Its reflections and corresponding positive roots in angular order are
$$u_1=s,\quad u_2=sts,\quad u_3=t,\qquad \beta_{u_1}=e_s,\quad \beta_{u_2}=e_s+e_t,\quad \beta_{u_3}=e_t$$
([[lem-cg-finite-dihedral-subsystems-and-canonical-roots]] (2),
[[def-cg-real-coxeter-form-and-reflection]] (2),
[[thm-cg-root-inversion-formulas-and-strong-exchange]] (1)). Put
$$I:=\{e_s,e_t\}\subseteq\Phi_+.$$

**(i)** $I$ is not $N(w)$ for any $w\in W$; explicitly,
$$N(1)=\emptyset,\quad N(s)=\{e_s\},\quad N(t)=\{e_t\},\quad N(st)=\{e_t,e_s+e_t\},\quad N(ts)=\{e_s,e_s+e_t\},\quad N(sts)=\Phi_+.$$

**(ii)** A set is closed under positive rank-two combinations when it contains
every root $a\alpha+b\beta\in\Phi_+$ with $a,b>0$ and $\alpha,\beta$ in the
set. Then $I$ is not closed: it contains $e_s,e_t$ but omits their root
$e_s+e_t$. Its complement $\Phi_+\setminus I=\{e_s+e_t\}$ is closed.

**(iii)** $I$ is neither an initial nor a final segment of
$(\beta_{u_1},\beta_{u_2},\beta_{u_3})$. Thus the rank-two segment criterion of
[[lem-cg-finite-rank-two-inversion-set-recognition]] (1)(ii) rejects $I$.

**(iv)** By contrast, $I':=\{e_s,e_s+e_t\}$ is the initial segment
$(\beta_{u_1},\beta_{u_2})$ and equals $N(ts)$.

**(v)** The complement $I^{\mathrm c}:=\{e_s+e_t\}$ is closed under positive rank-two combinations but is not an inversion set. Thus closure of a set alone is insufficient.

## Facts & Assumptions

**Given:** The type-$A_2$ Coxeter system, its canonical real reflection representation, the positive roots and angular order in the Statement, and the inversion-set map $N$.

[F1] For a two-dimensional root plane with $m=3$, the canonical angular list has three positive roots ([[lem-cg-finite-dihedral-subsystems-and-canonical-roots]] (2)); the extreme-root rays here are $\mathbb R_{>0}e_s$ and $\mathbb R_{>0}e_t$.

[F2] The reflection subgroup is dihedral of order $6$ ([[lem-cg-finite-dihedral-subsystems-and-canonical-roots]] (3)); in this rank-two ambient system $P=V$ and the face point is $x=0$, so that subgroup is $W$.

[F3] $B(e_s,e_s)=B(e_t,e_t)=1$ and $B(e_s,e_t)=-\tfrac12$ ([[def-cg-real-coxeter-form-and-reflection]] (2)).

[F4] For $a\in\{s,t\}$, $\rho(a)v=v-2B(v,e_a)e_a$ ([[def-cg-real-coxeter-form-and-reflection]] (3)).

[F5] $N(w)=\{\alpha\in\Phi_+:\rho(w)\alpha\in\Phi_-\}$ ([[def-cg-geometric-inversion-set]] (1)).

[F6] A finite positive-root set is an inversion set exactly when its restriction to every noncommutative generalized rank-two subsystem is empty, an initial segment, or a final segment ([[lem-cg-finite-rank-two-inversion-set-recognition]] (1)).

[F7] For a root $\alpha$, $t_{\rho(w)\alpha}=w t_\alpha w^{-1}$, and the positive roots are in bijection with reflections ([[thm-cg-root-inversion-formulas-and-strong-exchange]] (1)).

[F8] [[def-hh-coxeter-matrix-word-group-and-length]]: the type-$A_2$ presentation has $s^2=t^2=(st)^3=1$.

## Proof

**Proof technique:** compute the six group actions on the three positive roots, then check closure and the segment condition directly. This is a finite calculation; no Axiom of Choice (AC) is used.

1.1 Finite setup and root order. From [F8], $sts=tst$; canceling equal adjacent letters and replacing $stst$ by $ts$ and $tsts$ by $st$ reduces every word to one of $1,s,t,st,ts,sts$. Hence $W$ is finite and the finite-type suppliers [F1],[F2] apply. Since $m(s,t)=3$, [F3, F4] give $\rho(s)e_s=-e_s$, $\rho(s)e_t=e_s+e_t$, $\rho(t)e_s=e_s+e_t$, and $\rho(t)e_t=-e_t$; by linearity $\rho(s)(e_s+e_t)=e_t$ and $\rho(t)(e_s+e_t)=e_s$. The orbit definition makes $e_s+e_t$ a positive root, and [F1] gives exactly three positive roots in the plane. The extreme rays of $V_+$ are generated by $e_s,e_t$, so their angular order is $(e_s,e_s+e_t,e_t)$. By [F7], $t_{e_s+e_t}=s t_{e_t}s=sts$, while $t_{e_s}=s$ and $t_{e_t}=t$; hence the reflection order is $(s,sts,t)$. [F1, F3, F4, F7, F8]

1.2 Closure. The roots $e_s,e_t$ belong to $I$, and their positive combination $e_s+e_t$ is a root missing from $I$, so $I$ is not closed. The complement contains only $e_s+e_t$; the positive-root list has no other root on that ray, so every positive combination of two complement members that is a root is again $e_s+e_t$. Hence the complement is closed. [F1]

2.1 Exhaustive inversion-set calculation. The rank-two presentation gives the six normal forms $1,s,t,st,ts,sts$ for $W$ by [F2]. Applying step 1.1 with the rightmost generator acting first, the images of $(e_s,e_s+e_t,e_t)$ under those elements are $(e_s,e_s+e_t,e_t)$, $(-e_s,e_t,e_s+e_t)$, $(e_s+e_t,e_s,-e_t)$, $(e_t,-e_s,-e_s-e_t)$, $(-e_s-e_t,-e_t,e_s)$, and $(-e_t,-e_s-e_t,-e_s)$, respectively. By [F5], their inversion sets are $\emptyset$, $\{e_s\}$, $\{e_t\}$, $\{e_s+e_t,e_t\}$, $\{e_s,e_s+e_t\}$, and $\Phi_+$. These six elements exhaust $W$ by [F2], and none of these sets is $I$. [F2, F3, F4, F5]

3.1 Segment criterion. In the order $(e_s,e_s+e_t,e_t)$, the initial segments are $\emptyset,\{e_s\},\{e_s,e_s+e_t\},\Phi_+$ and the final segments are $\emptyset,\{e_t\},\{e_s+e_t,e_t\},\Phi_+$. The set $I=\{e_s,e_t\}$ is neither. By [F6] it fails the rank-two criterion, agreeing with the exhaustive calculation in step 2.1. [F1, F6]

3.2 A valid two-root segment. Step 2.1 gives $N(ts)=\{e_s,e_s+e_t\}=I'$, the initial segment consisting of the first two roots in the displayed order. [F1, F5, step 2.1]

3.3 The closed non-inversion set. Step 1.2 proves that $I^{\mathrm c}=\{e_s+e_t\}$ is closed, and the exhaustive list in step 2.1 contains no such singleton inversion set. This proves (v). [step 1.2, step 2.1]

4.1 Conclusion. Steps 1.1-3.3 establish (i)-(v) by finite matrix and set calculations. No witness is selected from an infinite family, so AC is not used. [F1, F2, F5, F6, F7, step 1.2, step 2.1, step 3.1, step 3.2, step 3.3] ∎
