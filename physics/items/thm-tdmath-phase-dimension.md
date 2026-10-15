---
id: thm-tdmath-phase-dimension
kind: theorem
title: "Regular rank form of the finite-component phase dimension count"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
proof_strategy: direct
deps:
  - def-c-one-map-and-local-inverse
  - thm-algebra-of-total-derivatives
  - thm-tdmath-local-implicit-rank
dependency_roles:
  def-c-one-map-and-local-inverse: mathematical-premise
  thm-algebra-of-total-derivatives: mathematical-premise
  thm-tdmath-local-implicit-rank: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Faye Jackson, MATH 395 notes, Implicit Function Theorem, pp. 99–106 and 127–132"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
    - title: "K. C. Border, Notes on the Implicit Function Theorem, Theorems 3–5"
      url: "https://kcborder.caltech.edu/Courses/Notes/IFT.pdf"
    - title: "J. Lebl, Basic Analysis II, Theorem 8.5.6"
      url: "https://www.jirka.org/ra/html/sec_svinvfuncthm.html"
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

Let $C\ge1$ be the number of components and $P\ge1$ the number of phases. Use common positive real coordinates $T,p$, expressed in fixed units if they are given a physical interpretation, and, for each phase $\alpha$, an interior composition vector

$$x^\alpha\in\Omega_C:=\{x\in\mathbb R^{C-1}:x_i>0,\ \sum_{i=1}^{C-1}x_i<1\},$$

with the convention $\mathbb R^0=\{0\}$ and $\Omega_1=\{0\}$. The final component fraction is $1-\sum_{i<C}x_i>0$. The ambient coordinate domain $U=(0,\infty)^2\times\Omega_C^P$ is open in $\mathbb R^n$, where $n=2+P(C-1)$. For each phase $\alpha$ and component $i$, let $\mu_i^\alpha(T,p,x^\alpha)$ be a real-valued $C^1$ coordinate function; these are mathematical maps and no thermodynamic potential or physical realization is assumed.

For $P\ge2$, define the $q=C(P-1)$ coexistence equations

$$F_{i,\alpha}(T,p,x^1,\ldots,x^P)=\mu_i^\alpha(T,p,x^\alpha)-\mu_i^1(T,p,x^1)=0\quad(1\le i\le C,\ 2\le\alpha\le P).$$

At a solution $z_*\in U$, assume some $q\times q$ derivative minor of $F:U\to\mathbb R^q$ is invertible. Then the local solution set is a graph of dimension

$$n-q=2+P(C-1)-C(P-1)=C-P+2.$$

For $P=1$ there are no coexistence equations and the coordinate domain itself has dimension $n=C+1=C-P+2$. In a specified reactive variant with $R\ge1$, let $\nu^1,\ldots,\nu^R\in\mathbb R^C$ be linearly independent dimensionless stoichiometric vectors and add the $R$ affinity equations $A_r=\sum_{i=1}^C\nu_i^r\mu_i^1=0$. If the combined equation map has an invertible $(q+R)\times(q+R)$ derivative minor at a solution and $q+R\le n$, its local zero set has dimension

$$n-q-R=C-P+2-R.$$

These are conditional local dimensions under the displayed nonsingular-minor assumptions. No dimension formula follows at singular solutions, on composition boundaries, or from equation counting alone; no empirical or general physical phase rule is asserted.

## Facts & Assumptions

**Given:** The finite integers, open coordinate domain, $C^1$ chemical-potential coordinate functions, coexistence equations, and nonsingular-minor assumptions in the Statement.

[F1] [[def-c-one-map-and-local-inverse]]: $C^1$ means total differentiability with continuous derivative-matrix entries.

[L1] [[thm-tdmath-local-implicit-rank]]: for an open $V\subseteq\mathbb R^n$, a $C^1$ map $H:V\to\mathbb R^k$, $1\le k\le n$, and a zero $z_*\in V$ with an invertible $k\times k$ derivative minor, the local zero set is a $C^1$ graph over $n-k$ coordinates when $k<n$, and an isolated point when $k=n$.

[L2] [[thm-algebra-of-total-derivatives]]: if $f,g$ are totally differentiable at $z$ and $c\in\mathbb R$, then $f+g$ and $cf$ are totally differentiable there, with $D(f+g)(z)=Df(z)+Dg(z)$ and $D(cf)(z)=cDf(z)$. Repeated application gives the derivative of every finite linear combination; continuity of its derivative entries must also be checked to establish $C^1$ regularity.

## Proof

**Proof technique:** direct.

1.1 For each phase let $\pi_\alpha:U\to(0,\infty)^2\times\Omega_C$ select $(T,p,x^\alpha)$, and write $\widetilde\mu_i^\alpha=\mu_i^\alpha\circ\pi_\alpha$. The same coordinate selection on increments is linear and satisfies $\|\pi_\alpha h\|_2\le\|h\|_2$. Substituting $\pi_\alpha h$ into the first-order expansion of $\mu_i^\alpha$ gives derivative $D\widetilde\mu_i^\alpha(z)=D\mu_i^\alpha(\pi_\alpha z)\pi_\alpha$ and remainder $o(\|h\|_2)$, with zero remainder when $\pi_\alpha h=0$. Its derivative entries are selected entries of $D\mu_i^\alpha(\pi_\alpha z)$ or zero; they are continuous because $\pi_\alpha$ does not increase distances and the original entries are continuous. For $P\ge2$, $F$ has $q=C(P-1)$ scalar components, each a difference of these lifted maps. By [L2] their derivative rows are $D\widetilde\mu_i^\alpha-D\widetilde\mu_i^1$; the entries are continuous since the increment of each difference is bounded by the sum of the two entry increments. The finitely many scalar remainders assemble to a vector remainder $o(\|h\|_2)$, since its norm is at most $\sqrt q$ times their largest absolute value. Thus $F$ is $C^1$ by [F1]. The assumed $q\times q$ minor entails $1\le q\le n$, so [L1] gives local graph dimension $n-q=2+P(C-1)-C(P-1)=C-P+2$, including an isolated point if $q=n$. [F1, L1, L2, given, algebra, construct]

1.2 If $P=1$, no phase-equality equations are indexed because there is no $\alpha\ge2$. The local solution set is all of the open domain $U$, which has $n=2+(C-1)=C+1=C-P+2$ coordinates. [given, algebra]

2.1 In the reactive variant put $q=0$ if $P=1$. The lifted maps constructed in step 1.1 are $C^1$ for every $P\ge1$. By [L2], $DA_r(z)=\sum_{i=1}^C\nu_i^rD\widetilde\mu_i^1(z)$. For each derivative entry, its increment is bounded by the finite sum of $|\nu_i^r|$ times the corresponding continuous entry increments, which tends to zero. Thus the affinity derivative entries are continuous. As in step 1.1, the finitely many scalar remainders assemble to a vector remainder $o(\|h\|_2)$, so the combined map is $C^1$ by [F1] and has $q+R$ scalar equations. Since $1\le q+R\le n$, its stated minor lets [L1] give graph dimension $n-q-R=C-P+2-R$, with an isolated point if $q+R=n$. Linear independence of the $\nu^r$ identifies $R$ distinct reaction directions, while the nonsingular derivative minor remains a separate assumption. [step 1.1, F1, L1, L2, given, algebra] ∎
