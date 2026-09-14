---
id: lem-moore-club-extension-for-minimal-walks
kind: lemma
title: "Moore's club extension lemma"
status: published
origin: pipeline
deps:
  - def-minimal-walk-weights-and-coherent-functions
  - lem-minimal-walk-trace-concatenation-and-limit-control
  - lem-minimal-walk-functions-are-coherent-and-finite-to-one
  - thm-countable-elementary-submodels-and-transitive-collapses
  - def-club-subsets-of-ordinals
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
sources:
  references:
    - title: "Moore, A solution to the L space problem, Section 4, Lemma 4.2 and Facts 6–9, printed pp. 10–13"
      url: https://arxiv.org/pdf/math/0501524
---

## Statement

Let $1\leq k,l<\omega$, and let $A\subseteq[\omega_1]^k$ and
$B\subseteq[\omega_1]^l$ be uncountable pairwise-disjoint families.  Regard
each member as its increasing enumeration, and write $A\setminus\delta$ for
$\{a\in A:(\forall i<k)\,\delta\leq a(i)\}$, and similarly for $B$.

For functions $s,t$ with ordinal domains, put

$$\Delta(s,t)=\min\bigl(\{\xi<\min(\operatorname{dom}s,\operatorname{dom}t):s(\xi)\neq t(\xi)\}\cup\{\min(\operatorname{dom}s,\operatorname{dom}t)\}\bigr).$$

There is a club $D\subseteq\omega_1$ such that, whenever $\delta\in D$,
$a\in A\setminus\delta$, $b\in B\setminus\delta$, and
$R\in\{=,>\}$, there are $a^+\in A\setminus\delta$,
$b^+\in B\setminus\delta$, and one nonempty finite set $L^+$, independent of
$i,j$, for which every $i<k$ and $j<l$ satisfy:

1. every $\xi\in L(\delta,b(j))$ is below both
   $\Delta(e_{a(i)},e_{a^+(i)})$ and
   $\Delta(e_{b(j)},e_{b^+(j)})$;
2. $L(\delta,b(j))<L^+$ and
   $L(\delta,b^+(j))=L(\delta,b(j))\cup L^+$;
3. $e_{a^+(i)}(\xi)\mathrel R e_{b^+(j)}(\xi)$ for $\xi\in L^+$;
4. $\mu(\delta,b(j))$ is the restriction of $\mu(\delta,b^+(j))$ to
   $L(\delta,b(j))$; and
5. $\mu(\delta,b^+(j))(\min L^+)=w_\delta$.

This formulation of clause 1 also covers $b(j)=\delta$, when the old lower
trace is empty. Pairwise disjointness is required within each family; no disjointness between an
$A$-member and a $B$-member is asserted.

## Facts & Assumptions

**Given:** ZFC, the fixed minimal-walk data, positive $k,l$, and families $A,B$ as in the statement.

[F1] [[lem-minimal-walk-functions-are-coherent-and-finite-to-one]] says that the $e_\beta$ are finite-to-one and pairwise coherent on common domains.

[F2] [[lem-minimal-walk-trace-concatenation-and-limit-control]] gives lower trace concatenation under separation and makes $\min L(\xi,\delta)$ tend to a limit $\delta$.

[F3] [[def-minimal-walk-weights-and-coherent-functions]] defines the labelled trace $\mu$, fixes the bookkeeping sequence $\langle w_\xi\rangle$, and proves the first-label law $$\mu(\xi,\eta)(\min L(\xi,\eta))=w_\eta\qquad(0<\xi<\eta<\omega_1).$$

[F4] [[thm-countable-elementary-submodels-and-transitive-collapses]] supplies countable elementary submodels containing any specified countable parameter set; its proof uses [[def-axiom-of-choice]].

[F5] [[def-club-subsets-of-ordinals]] gives the closed-unbounded convention.

## Proof

**Proof technique:** elementary-submodel reflection, separately for $R={}$ and $R=>$.  Here $R={}$ denotes equality; the extra braces only prevent the relation symbol from being read as punctuation.

1.1 Fix a sufficiently large regular $\Theta$ and Skolem functions for $H(\Theta)$.  The ordinals $\delta=M\cap\omega_1$ obtained from countable $M\prec H(\Theta)$ containing $A,B$ and all fixed walk data contain a club: Skolem hulls of successively larger countable ordinal sets give unboundedly many such cuts, while the union of an increasing $\omega$-chain of such hulls is elementary and has cut the supremum of their cuts.  This is the standard club-of-cuts refinement of [F4], and is closed and unbounded in the sense of [F5].  Fix such $M$ and put $\delta=M\cap\omega_1$.  Notice that every $x\in M\cap\omega_1$ is below $\delta$, while $\delta\notin M$. [F4, F5, given]

1.2 Suppose first that $R$ is equality, and fix $a\in A\setminus\delta$, $b\in B\setminus\delta$.  By coherence in [F1], there is $\gamma_0<\delta$ above every $L(\delta,b(j))$ and above all disagreements below $\delta$ among the finitely many pairs $e_{a(i)},e_{b(j)}$.  Hence $e_{a(i)}(\xi)=e_{b(j)}(\xi)$ whenever $\gamma_0<\xi<\delta$.  By the limit clause of [F2], choose $\gamma<\delta$ so that $\gamma<\xi<\delta$ implies $\gamma_0<\min L(\xi,\delta)$. [F1, F2, given]

2.1 We repeatedly use the following reflection observation.  If $X\subseteq\omega_1$ belongs to $M$ and $\delta\in X$, then $X$ is uncountable: otherwise elementarity provides in $M$ an enumeration of $X$ by $\omega$, whence $X\subseteq M$ and $\delta\in M$, a contradiction.  Thus $X$ is unbounded in $\omega_1$.  Likewise, an uncountable $X\in M$ has $X\cap\delta$ unbounded in $\delta$, by elementarity applied to arbitrarily large members of $X$. [F4, step 1.1]

2.2 For the strict branch, let $E$ be the set of limit $\nu<\omega_1$ with the following property: for every $a^0\in A\setminus\nu$, $\nu_0<\nu$, $\varepsilon<\omega_1$, $n<\omega$, and finite $K\subseteq\omega_1\setminus\nu$, some $a^1\in A\setminus\varepsilon$ satisfies $\nu_0\leq\Delta(e_{a^0(i)},e_{a^1(i)})$ and $e_{a^1(i)}(\xi)>n$ for every $i<k$ and $\xi\in K$.  This set is definable from $A$ and the fixed sequence, so $E\in M$. [F1, F4, step 1.1]

3.1 Let $X$ consist of those $\delta^+<\omega_1$ for which some $a^+\in A\setminus\delta^+$ and $b^+\in B\setminus\delta^+$ simultaneously preserve each $e_{a(i)}$ and $e_{b(j)}$ below $\gamma_0$, agree coordinatewise on $(\gamma_0,\delta^+)$, satisfy $\gamma_0<\min L(\xi,\delta^+)$ and $\mu(\xi,\delta^+)(\min L(\xi,\delta^+))=w_{\delta^+}=w_\delta$ for $\gamma<\xi<\delta^+$, and satisfy $\mu(\delta^+,b^+(j))=\mu(\delta,b(j))$ for every $j<l$.  All parameters in this definition belong to $M$.  The space $C(2^\omega,\omega)$ is countable and belongs to $M$, so $w_\delta\in M$.  Each $L(\delta,b(j))$ and labelled trace $\mu(\delta,b(j))$ is finite with ordinal entries below $\delta$ and labels in that countable space, hence is an element of $M$.  Finally the restrictions of the $e$-functions below $\gamma_0$ are finite modifications, by [F1], of restrictions coded in $M$. Thus $X\in M$ without using either $\delta$ or $b$ itself as a parameter. Taking $\delta^+=\delta$, $a^+=a$, and $b^+=b$ shows $\delta\in X$; the trace and label requirements are [F2] and the first-label clause retained in [F3]. By step 2.1 choose $\delta^+\in X$ above $\delta$, with witnesses $a^+,b^+$. [F1, F2, F3, step 1.2, step 2.1]

3.2 The cut $\delta$ belongs to $E$.  Indeed, for given data at $\delta$, finite-to-one behavior lets us enlarge $\nu_0<\delta$ above every $\xi<\delta$ at which some $e_{a^0(i)}(\xi)\leq n$.  The restriction tuple $\langle e_{a^0(i)}\restriction\nu_0:i<k\rangle$ belongs to $M$ by coherence.  The definable set of ordinals $\eta$ for which some $a^1\in A\setminus\eta$ has these restrictions and has all values above $n$ on $(\nu_0,\eta)$ belongs to $M$ and contains $\delta$ with witness $a^0$. Step 2.1 makes it unbounded, so choose such $\eta$ above $\varepsilon$ and $\max K$ (with no maximum needed when $K$ is empty).  Its witness $a^1$ proves the defining demand.  Hence $\delta\in E$, and step 2.1 also makes $E$ uncountable. [F1, step 2.1, step 2.2]

4.1 Put $L^+=L(\delta,\delta^+)$.  It is nonempty because $\delta<\delta^+$.  Its minimum exceeds $\gamma_0$, and [F2] splices it above the common old trace $L(\delta^+,b^+(j))=L(\delta,b(j))$.  Preservation below $\gamma_0$ gives the two strict $\Delta$ bounds; agreement on $L^+$ gives clause 3.  The equality of the old labelled traces gives clause 4, and the label at the new minimum is $w_{\delta^+}=w_\delta$, giving clause 5.  Thus all five conclusions hold in the equality branch. [F2, F3, step 3.1]

4.2 Fix $a\in A\setminus\delta$ and $b\in B\setminus\delta$.  Choose $\gamma_0\in E\cap\delta$ above every old trace $L(\delta,b(j))$, possible by steps 2.1 and 3.2, and then choose $\gamma<\delta$ by [F2] as in step 1.2. Reflecting exactly the finite restrictions, trace-tail and labelled-trace type used in step 3.1, but requiring the candidate cut to be a limit, gives a limit $\delta^+>\delta$ and $b^+\in B\setminus\delta^+$ such that the $e_b$-restrictions below $\gamma_0$ agree, $\gamma_0<\min L(\xi,\delta^+)$ with first label $w_{\delta^+}=w_\delta$ for $\gamma<\xi<\delta^+$, and $\mu(\delta^+,b^+(j))=\mu(\delta,b(j))$. [F1, F2, F3, step 2.1, step 3.2]

5.1 Put $L^+=L(\delta,\delta^+)$ and let $n$ be the maximum of the finitely many values $e_{b^+(j)}(\xi)$ for $j<l$ and $\xi\in L^+$.  Apply the defining property of $\gamma_0\in E$ with $a^0=a$, a bound $\nu_0<\gamma_0$ above every old trace, $K=L^+$, and $\varepsilon=\delta$.  It gives $a^+\in A\setminus\delta$ preserving every $e_{a(i)}$ on the old trace and satisfying $e_{a^+(i)}(\xi)>n\geq e_{b^+(j)}(\xi)$ on $L^+$.  The preservation of $b$ below $\gamma_0$, the splice calculation, and the label calculation from step 4.1 now verify clauses 1, 2, 4 and 5; the displayed strict inequality verifies clause 3. [F2, F3, step 2.2, step 4.1, step 4.2]

6.1 The completed equality and strict branches cover the two and only two allowed relations.  The club of cuts from step 1.1 is independent of the later choices of $a,b,R$, so it is the required $D$.  No choice is used after selecting the Skolem functions and fixed data; those ZFC selections are precisely the declared AC dependency. [F4, F5, step 1.1, step 4.1, step 5.1] ∎
