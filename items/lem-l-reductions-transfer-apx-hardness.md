---
id: lem-l-reductions-transfer-apx-hardness
kind: lemma
title: "L-reductions compose and transfer PTAS and APX-hardness"
status: draft
origin: pipeline
deps:
  - def-l-reduction
  - def-ptas-fptas-and-apx
  - def-apx-hardness-and-apx-completeness
  - def-optimization-problem-and-approximation-ratio
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Williamson and Shmoys, The Design of Approximation Algorithms, §16.2 Theorems 16.5–16.6 with proofs, printed p. 414"
      url: "https://designofapproxalgs.com/book.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $\Pi$ and $\Gamma$ be finite-instance optimization problems with
polynomially bounded feasible encodings, polynomial-time feasibility and value
operations, attained optima, and nonnegative objective values. If $\Pi$
L-reduces to $\Gamma$ with constants $a,b>0$, then for
$\operatorname{OPT}_\Gamma>0$ a feasible $\Gamma$ solution with relative error
at most $\epsilon$ decodes to a $\Pi$ solution with relative error at most
$ab\epsilon$. If $\operatorname{OPT}_\Gamma=0$, the appropriate minimization or
maximization ratio guarantee and nonnegative feasible values force the $\Gamma$
value to be zero, and the L-reduction error bound forces the decoded $\Pi$
solution to be optimal. Thus an L-reduction transfers PTAS membership.
L-reductions compose: constants $(a,b)$ followed by $(a',b')$ give constants
$(aa',bb')$. Consequently, if $\Pi$ is APX-hard under L-reductions and $\Pi$
L-reduces to $\Gamma$, then $\Gamma$ is APX-hard under L-reductions.

## Facts & Assumptions

**Given:** Two finite-instance optimization problems $\Pi$ and $\Gamma$ with the stated model properties, and an L-reduction $(f,g,a,b)$ from $\Pi$ to $\Gamma$.

[F1] An L-reduction from $\Pi$ to $\Gamma$ consists of a polynomial-time instance map $f$, a polynomial-time feasible-solution map $g$ defined on instances $x$ of $\Pi$ and feasible solutions $y$ of $f(x)$, and constants $a,b>0$ with $\operatorname{OPT}_\Gamma(f(x))\le a\operatorname{OPT}_\Pi(x)$ and $|\operatorname{OPT}_\Pi(x)-\operatorname{val}_\Pi(g(x,y))|\le b|\operatorname{OPT}_\Gamma(f(x))-\operatorname{val}_\Gamma(y)|$ for all such $x,y$. ([[def-l-reduction]])

[F2] In the finite-instance model each problem has a polynomially bounded feasible-solution encoding, polynomial-time feasibility and value operations, at least one feasible solution per instance, attained optima, and nonnegative rational objective values computable in polynomial time. ([[def-optimization-problem-and-approximation-ratio]])

[F3] An $H$-approximation ratio guarantee in the value-inequality sense means $\operatorname{val}\le H\operatorname{OPT}$ for minimization, respectively $\operatorname{val}\ge H\operatorname{OPT}$ for maximization; a PTAS is a family $(A_\epsilon)_{0<\epsilon<1}$ with polynomial running time for each fixed $\epsilon$ and these value guarantees for $H=1+\epsilon$ and $H=1-\epsilon$. ([[def-optimization-problem-and-approximation-ratio]], [[def-ptas-fptas-and-apx]])

[F4] Under the selected convention, $\Gamma$ is APX-hard when every problem in the locally defined class APX has an L-reduction to $\Gamma$, and APX is the class of finite-instance problems admitting one polynomial-time fixed-factor approximation. ([[def-apx-hardness-and-apx-completeness]], [[def-ptas-fptas-and-apx]])

## Proof

**Proof technique:** direct.

1.1 Fix an instance $x$ of $\Pi$, write $x'=f(x)$, and let $y$ be a feasible solution of $x'$. By [F1] the maps $f$ and $g$ are polynomial time, the defining inequalities are $\operatorname{OPT}_\Gamma(x')\le a\operatorname{OPT}_\Pi(x)$ and $|\operatorname{OPT}_\Pi(x)-\operatorname{val}_\Pi(g(x,y))|\le b|\operatorname{OPT}_\Gamma(x')-\operatorname{val}_\Gamma(y)|$, and by [F2] all optima and values are attained nonnegative rationals, so each of these expressions is a finite nonnegative difference and all values are computed in polynomial time. [F1, F2, given, construct]

2.1 Composition: suppose in addition that $(f',g',a',b')$ is an L-reduction from $\Gamma$ to a third problem $\Delta$. Define $F(x):=f'(f(x))$ and $G(x,z):=g(x,g'(f(x),z))$ for every instance $x$ of $\Pi$ and feasible $\Delta$-solution $z$ of $F(x)$; these are compositions of polynomial-time maps and produce feasible solutions. The two defining inequalities give $\operatorname{OPT}_\Delta(F(x))\le a'\operatorname{OPT}_\Gamma(f(x))\le a'a\operatorname{OPT}_\Pi(x)$ and $|\operatorname{OPT}_\Pi(x)-\operatorname{val}_\Pi(G(x,z))|\le b|\operatorname{OPT}_\Gamma(f(x))-\operatorname{val}_\Gamma(g'(f(x),z))|\le bb'|\operatorname{OPT}_\Delta(F(x))-\operatorname{val}_\Delta(z)|$, so $(F,G,a'a,bb')$ is an L-reduction from $\Pi$ to $\Delta$ by [F1]. [F1, step 1.1, algebra]

2.2 Relative-error transfer for positive target optimum: suppose $\operatorname{OPT}_\Gamma(x')>0$ and the feasible solution $y$ satisfies $\operatorname{val}_\Gamma(y)\le(1+\epsilon)\operatorname{OPT}_\Gamma(x')$ in the minimization direction or $\operatorname{val}_\Gamma(y)\ge(1-\epsilon)\operatorname{OPT}_\Gamma(x')$ in the maximization direction, that is, its relative error in $\Gamma$'s direction is at most $\epsilon$ in the value sense of [F3]. Since $\operatorname{OPT}_\Gamma(x')$ is an attained minimum in the first case, $\operatorname{val}_\Gamma(y)\ge\operatorname{OPT}_\Gamma(x')$ there, and since it is an attained maximum in the second case, $\operatorname{val}_\Gamma(y)\le\operatorname{OPT}_\Gamma(x')$ there; in both cases $|\operatorname{OPT}_\Gamma(x')-\operatorname{val}_\Gamma(y)|\le\epsilon\operatorname{OPT}_\Gamma(x')$. [F2, F3, step 1.1, algebra]

3.1 APX-hardness transfer: assume $\Pi$ is APX-hard under the selected convention [F4] and let $\Lambda$ be any problem in APX. By APX-hardness of $\Pi$ there is an L-reduction from $\Lambda$ to $\Pi$ with constants $(a',b')$; composing it with the reduction $(f,g,a,b)$ of step 1.1 by the construction of step 2.1 gives an L-reduction from $\Lambda$ to $\Gamma$ with constants $(a'a,bb')$. Since $\Lambda\in\mathrm{APX}$ was arbitrary, every problem in APX L-reduces to $\Gamma$, so $\Gamma$ is APX-hard by [F4]. [F1, F4, step 2.1, algebra]

3.2 Error bound: applying the second L-reduction inequality of step 1.1 to the solution $y$ of step 2.2 and then the optimum bound of [F1], $|\operatorname{OPT}_\Pi(x)-\operatorname{val}_\Pi(g(x,y))|\le b|\operatorname{OPT}_\Gamma(x')-\operatorname{val}_\Gamma(y)|\le b\epsilon\operatorname{OPT}_\Gamma(x')\le ab\epsilon\operatorname{OPT}_\Pi(x)$. If $\operatorname{OPT}_\Pi(x)>0$, dividing by it bounds the relative error in $\Pi$'s direction by $ab\epsilon$; if $\operatorname{OPT}_\Pi(x)=0$, the displayed chain gives $|\operatorname{val}_\Pi(g(x,y))|\le0$, so the decoded solution is optimal. [F1, step 1.1, step 2.2, algebra]

4.1 Zero target optimum: suppose $\operatorname{OPT}_\Gamma(x')=0$. If $\Gamma$ is a minimization problem, the ratio guarantee gives $\operatorname{val}_\Gamma(y)\le(1+\epsilon)\cdot0=0$ and [F2] gives $\operatorname{val}_\Gamma(y)\ge0$, so $\operatorname{val}_\Gamma(y)=0$; if $\Gamma$ is a maximization problem, $\operatorname{OPT}_\Gamma(x')=0$ is the largest feasible value and all values are nonnegative, so again $\operatorname{val}_\Gamma(y)=0$. Then the L-reduction error inequality gives $|\operatorname{OPT}_\Pi(x)-\operatorname{val}_\Pi(g(x,y))|\le b\cdot0=0$, so the decoded $\Pi$-solution is optimal. The same conclusion holds when $\operatorname{OPT}_\Pi(x)=0$, because then $\operatorname{OPT}_\Gamma(x')\le a\cdot0=0$ and nonnegativity give $\operatorname{OPT}_\Gamma(x')=0$, reducing to the case just treated. [F1, F2, F3, step 3.2, algebra]

5.1 PTAS transfer: let $(A_\epsilon)_{0<\epsilon<1}$ be a PTAS for $\Gamma$ by [F3] and let $\eta\in(0,1)$ be a rational tolerance for $\Pi$. Choose a rational $\epsilon$ with $0<\epsilon<\min(1/2,\eta/(2ab))$, which is possible because $ab>0$ and $\eta>0$, so that $ab\epsilon<\eta$ and $ab\epsilon<1/2$. Run $A_\epsilon$ on $x'=f(x)$ to obtain a feasible $y$, then decode $g(x,y)$. If $\operatorname{OPT}_\Gamma(x')>0$, step 3.2 bounds the relative error of the decoded solution by $ab\epsilon<\eta$; if $\operatorname{OPT}_\Gamma(x')=0$, step 4.1 shows the decoded solution is optimal, a relative error of $0<\eta$. The running time is polynomial in $|x|$, being a composition of the polynomial map $f$, the fixed-$\epsilon$ polynomial algorithm $A_\epsilon$, and the polynomial map $g$; hence $\Gamma\in\mathrm{PTAS}$ implies $\Pi\in\mathrm{PTAS}$. [F1, F3, step 3.2, step 4.1, construct]

6.1 Consequently an L-reduction transfers relative-error guarantees and PTAS membership, L-reductions compose with constants $(aa',bb')$, and by step 3.1 the APX-hardness of a problem transfers to any L-reduction target under the selected convention. These conclusions rest on the value inequalities and polynomial maps of [F1]; a PCP gap bound or a no-PTAS theorem alone proves no APX-hardness statement and is not used here. [F1, step 3.1, step 5.1, algebra] ∎
