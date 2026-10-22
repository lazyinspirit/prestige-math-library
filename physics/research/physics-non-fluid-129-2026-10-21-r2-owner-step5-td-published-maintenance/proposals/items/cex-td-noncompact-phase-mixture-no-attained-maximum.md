---
id: cex-td-noncompact-phase-mixture-no-attained-maximum
kind: counterexample
title: A noncompact phase domain with no attained mixture maximum
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: A constructed continuous entropy extension that is positive and concave on a convex ambient domain but restricted to a noncompact generator set omitting its maximizing barycenter; it makes no material claim.
dependency_level: 0
deps:
  - def-borel-sigma-algebra
  - def-probability-measure
  - def-tdmath-measure-integral
dependency_roles:
  def-borel-sigma-algebra: mathematical-premise
  def-probability-measure: mathematical-premise
  def-tdmath-measure-integral: mathematical-premise
relations:
  motivated_by:
    - pthm-td-compact-continuous-phase-mixture
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete lecture notes, §5.4.3"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S5
    - title: "Konstantin K. Likharev, Essential Graduate Physics: Statistical Mechanics, §4.1 First-order phase transitions"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/04%3A_Phase_Transitions/4.01%3A_First_order_phase_transitions
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement refuted

Let $d\ge1$, let $K\subseteq C\subseteq\mathbb R^d$ with $K$ noncompact and $C$ convex, and let $\mathcal P$ be a nonempty family of Borel probability measures on $K$ sharing a prescribed barycenter. Precisely, for the coordinate functions $x_j:K\to\mathbb R$, every $P\in\mathcal P$ has finite first coordinate moments $\int_K|x_j|\,dP<\infty$ for $1\le j\le d$, and its barycenter is the vector $b(P):=(\int_Kx_1\,dP,\ldots,\int_Kx_d\,dP)\in\mathbb R^d$. Sharing the prescribed barycenter $\bar x$ means $b(P)=\bar x$ for every $P\in\mathcal P$. The statement refuted is that $\sup_{P\in\mathcal P}\int_Ks\,dP$ is always attained whenever $s=\widetilde s|_K$ for a bounded, positive, continuous concave function $\widetilde s:C\to\mathbb R$. Here convexity of $C$ means $(1-t)x+ty\in C$ for $x,y\in C$ and $t\in[0,1]$, and concavity means
$$
\widetilde s((1-t)x+ty)\ge(1-t)\widetilde s(x)+t\widetilde s(y)\qquad(x,y\in C,\ t\in[0,1]).
$$

## Example

Let $K=(-1,0)\cup(0,1)$, which is noncompact: the open cover $U_n=(-1,-1/n)\cup(1/n,1)$ for $n\ge2$ has no finite subcover. Let $C=[-1,1]$ and use dimensionless coordinate $x$. For constants $s_0>a>0$ in $\mathrm{J\,mol^{-1}K^{-1}}$, define the ambient entropy extension and its restriction by
$$
\widetilde s(x)=s_0-a x^2\quad(x\in C),\qquad s=\widetilde s|_K.
$$
For $x,y\in C$ and $t\in[0,1]$,
$$
\widetilde s((1-t)x+ty)=(1-t)\widetilde s(x)+t\widetilde s(y)+a t(1-t)(x-y)^2\ge(1-t)\widetilde s(x)+t\widetilde s(y),
$$
so $\widetilde s$ is concave on the convex ambient domain. It is continuous, bounded, and positive since $s_0-a>0$. The admissible generator set $K$ excludes the maximizing point $x=0$. Declare all Borel probability measures $P$ on $K$ with $\int_Kx\,dP=0$ feasible, with entropy per mole $\int_Ks\,dP$. Here $\int_K|x|\,dP\le1$ because $|x|<1$ on $K$, so the signed integral is defined and this is exactly the prescribed barycenter $\bar x=0$. For $y\in K$, define the point mass $\delta_y(A)=1$ if $y\in A$ and $0$ otherwise for every Borel set $A\subseteq K$. It is countably additive because at most one set in a disjoint family can contain $y$, and $\delta_y(K)=1$.

## Facts & Assumptions

**Given:** The noncompact Borel domain $K$, the restricted entropy $s$, and all Borel probability measures on $K$ with mean zero as the feasible family.

[F1] [[def-borel-sigma-algebra]], [[def-probability-measure]], and [[def-tdmath-measure-integral]]: Feasible mixtures are countably additive Borel probability measures of total mass one, and their integrals use the stated measure convention.

## Counterexample

1.1 Since $0<s_0-a\le s(x)<s_0$ on $K$, every feasible $s$ is nonnegative and bounded. For $n\ge2$, put $A_n:=\{x\in K:|x|\ge1/n\}$. Each $A_n$ is Borel in $K$, the sets increase with $n$, and their union is $K$. Put $B_2=A_2$ and $B_n=A_n\setminus A_{n-1}$ for $n\ge3$. These are pairwise disjoint Borel sets with union $K$, so countable additivity gives $\sum_{n=2}^{\infty}P(B_n)=P(K)=1$. Some $P(B_n)$ is therefore positive. Since $A_n=B_n\sqcup(A_n\setminus B_n)$, finite additivity and nonnegativity give $P(A_n)\ge P(B_n)>0$ for that $n$. On $A_n$, $s\le s_0-a/n^2$, and on its complement $s\le s_0$. For any nonnegative simple function $\varphi\le s$, the measure integral definition [F1] therefore gives
$$
\int_K\varphi\,dP\le(s_0-a/n^2)P(A_n)+s_0P(K\setminus A_n)=s_0-aP(A_n)/n^2<s_0.
$$
Indeed, refine the finitely many level sets of $\varphi$ by $A_n$ and its complement; each simple-function coefficient is bounded by the corresponding pointwise bound on that piece, so the simple-integral formula [F1] gives the inequality. The strict upper bound is independent of $\varphi$, hence its supremum also satisfies $\int_Ks\,dP<s_0$. [given, F1, algebra]

2.1 For each $0<\epsilon<1$, the measure $P_\epsilon=\tfrac12\delta_{-\epsilon}+\tfrac12\delta_{\epsilon}$ is a Borel probability measure on $K$, has mean zero, and satisfies $\int_Ks\,dP_\epsilon=s_0-a\epsilon^2$. Letting $\epsilon\downarrow0$ shows that the supremum is $s_0$. Step 1.1 shows that no feasible measure attains it. Thus the false statement fails even with a bounded positive continuous concave extension, because the admissible generator set excludes its maximizing barycenter. [given, F1, step 1.1, algebra] ∎
