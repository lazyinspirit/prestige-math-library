---
id: lem-rudin-bounded-cofinality-hull-transfer
kind: lemma
title: Elementary hull transfer for bounded cofinality strata
status: published
origin: pipeline
deps: [def-rudin-ambient-ordinal-box-space, thm-downward-lowenheim-skolem-with-parameters, thm-tarski-vaught-set-structure-test, thm-transfinite-recursion, thm-membership-rank-and-hierarchy-levels, prop-cumulative-hierarchy-transitivity-and-growth, thm-regularity-of-the-alephs, thm-cofinality-basics, cor-cardinal-absorption, def-axiom-of-choice]
proof_strategy: construction
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "K. P. Hart, Set-Theoretic Methods in General Topology, Chapter 6 section 2, Exercises 5–7, printed p. 37; rank-level and finite-level domination details supplied here"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf
---

## Statement

Assume AC. Let $x\in Y_B$, $1\le m<\omega$, and $\kappa=\aleph_m$. Given finitely many set parameters, for every sufficiently large regular cardinal $\theta$ there are a set $M\prec(V_\theta,\in)$ of size $\kappa$, containing those parameters and $x$ as elements and containing every ordinal below $\kappa$, and a point $\widehat x\in X_R(B)$ such that

$$\widehat x(n)=\begin{cases}x(n),&\operatorname{cf}(x(n))\le\kappa,\\ \sup(M\cap x(n)),&\operatorname{cf}(x(n))>\kappa.\end{cases}$$

In the second case $\operatorname{cf}(\widehat x(n))=\kappa$ and $\widehat x(n)<x(n)$. For every ordinal function $v\in P_B$ with $v<\widehat x$ pointwise, there is $z\in M\cap P_B$ with $v<z<\widehat x$ pointwise. If $u\in M\cap P_B$, $u\le x$ pointwise, and $\operatorname{cf}(u(n))\le\kappa$ for every $n\in B$, then $u\le\widehat x$ pointwise. No assertion that $V_\theta$ satisfies ZFC is required.

## Facts & Assumptions

**Given:** The displayed hypotheses and finitely many parameters. All function inequalities below are pointwise.

[F1] The ambient space has countably infinite coordinate set $B$; its points have uncountable coordinate cofinalities, and $X_R(B)$ imposes a uniform finite-aleph bound ([[def-rudin-ambient-ordinal-box-space]]).

[F2] A set structure in a finite language with at least $\kappa$ elements has an elementary substructure of size $\kappa$ containing any specified subset of size at most $\kappa$, under AC ([[thm-downward-lowenheim-skolem-with-parameters]]).

[F3] A nonempty substructure is elementary exactly when every existential instance true in the larger structure with parameters from it has a witness in it ([[thm-tarski-vaught-set-structure-test]]).

[F4] Specified set-valued rules recurse along a well-order ([[thm-transfinite-recursion]]).

[F5] Membership in $V_\theta$ is equivalent to rank less than $\theta$ ([[thm-membership-rank-and-hierarchy-levels]]).

[F6] $V_\theta$ is transitive and contains exactly the ordinals below $\theta$ ([[prop-cumulative-hierarchy-transitivity-and-growth]]).

[F7] Under AC every finite positive aleph and every successor cardinal is regular ([[thm-regularity-of-the-alephs]]).

[F8] Limit-ordinal cofinality is a regular infinite cardinal; a cofinal subset has size at least that cofinality, and a cofinal subset of that size exists ([[thm-cofinality-basics]]).

[F9] Sums and nonzero products of infinite cardinals absorb smaller cardinals ([[cor-cardinal-absorption]]).

[A1] AC permits simultaneous choices from sets of nonempty witness sets ([[def-axiom-of-choice]]).

## Proof

1.1 Put $L_r=\{n\in B:\operatorname{cf}(x(n))=\aleph_r\}$ for $1\le r\le m$ and $H=\{n\in B:\operatorname{cf}(x(n))>\kappa\}$. They partition $B$: by F1 and F8 the cofinalities at issue are infinite cardinals greater than $\omega$, and the cardinals in $(\omega,\aleph_m]$ are precisely $\aleph_1,\ldots,\aleph_m$. For $n\in L_r$ choose a strictly increasing cofinal function $C_n:\aleph_r\longrightarrow x(n)$. To obtain this from the cofinal subset of F8, enumerate that subset and recursively choose increasing ordinals above the earlier choices and the next enumerated value; fewer than $\aleph_r$ earlier ordinals are bounded in $x(n)$ by F8, and $x(n)$ is a limit. A1 fixes the resulting family $C$. Empty $L_r$ requires no choice. [F1, F4, F8, A1]

1.2 Choose an ordinal $\rho>\kappa$ above the ranks of all specified parameters, $x,B,P_B,C,H$, the finite tuple $(L_r)_{1\le r\le m}$, and $\kappa$, with an additional $\omega$ of rank room. Fix any regular cardinal $\theta>\rho$; all these objects belong to $V_\theta$ by F5. For any $S\subseteq V_\theta$ of size at most $\kappa$, regularity and $\kappa<\theta$ bound the at most $\kappa$ ranks of its members below $\theta$; their supremum plus one is still below the infinite cardinal $\theta$. Hence $S\in V_\theta$ by F5. Transitivity F6 makes bounded membership statements absolute: induction on formulas proves this, since a quantifier bounded by $a\in V_\theta$ ranges over exactly the actual members of $a$, and equality and membership are restrictions of the actual relations. In particular function evaluation, ordinal comparison, ordinal successor, intersections, and unions agree with the actual operations whenever the resulting objects are in $V_\theta$. Finite tuples and the ordinal functions used below have ranks bounded by the fixed parameters' ranks plus a finite ordinal, so they too are in $V_\theta$. Thus the rest of the construction works for every regular $\theta$ above the single threshold $\rho$. [F5, F6]

2.1 The language $\{\in\}$ is finite, and $V_\theta$ contains $\kappa$, so F2 applies. Choose $M_0\prec V_\theta$ of size $\kappa$ containing the objects of step 1.2 and all ordinals below $\kappa$. At successors choose $M_{\alpha+1}\prec V_\theta$ of size $\kappa$ containing $M_\alpha\cup\{M_\alpha\}$. The latter is a subset of $V_\theta$ by step 1.2 and has size $\kappa$ by F9. Fix such hull choices on the set of all size-at-most-$\kappa$ subsets of $V_\theta$ before recursion, using F2 and A1. At a nonzero limit $\delta\le\kappa$ put $M_\delta=\bigcup_{\alpha<\delta}M_\alpha$. Its size is $\kappa$: it contains $M_0$, and A1 and F9 bound a union of at most $\kappa$ size-$\kappa$ sets by $\kappa$. It is elementary by F3. Indeed every finite tuple in this union lies in a single stage; an existential instance true in $V_\theta$ with that tuple has a witness at that elementary stage, hence in the union. There are no function or constant symbols to require further substructure closure. These rules and F4 construct the chain through $\kappa$. Put $M=M_\kappa$. Thus $M\prec V_\theta$, $|M|=\kappa$, and $\kappa\subseteq M$. [step 1.2, F2, F3, F4, F9, A1]

3.1 For $\alpha<\kappa$ and $n\in H$ set $h_\alpha(n)=\sup(M_\alpha\cap x(n))$. Since $|M_\alpha|=\kappa<\operatorname{cf}(x(n))$, F8 gives $h_\alpha(n)<x(n)$. The function $h_\alpha$ is in $V_\theta$ by the rank bounds in step 1.2 and is uniquely defined there from $M_\alpha,x,H$ by intersection and union: $h_\alpha(n)=\bigcup\{\xi\in x(n):\xi\in M_\alpha\}$. Those parameters belong to $M_{\alpha+1}$, so elementarity puts $h_\alpha$ in $M_{\alpha+1}$. Here and below uniqueness in $V_\theta$ makes its elementary witness the actual object, by the absoluteness established in step 1.2. Every $n\in B$ is below $\kappa$ and thus in every stage. Evaluation gives $h_\alpha(n)\in M_{\alpha+1}$, and its successor is there as well. Because $x(n)$ is a limit, $h_\alpha(n)+1<x(n)$. Consequently $h_{\alpha+1}(n)\ge h_\alpha(n)+1>h_\alpha(n)$. The chain inclusions also give monotonicity between arbitrary stages. [step 1.2, step 2.1, F1, F8]

4.1 On $H$ put $\widehat x(n)=\sup(M\cap x(n))=\sup_{\alpha<\kappa}h_\alpha(n)$. Its value is below $x(n)$ by $|M|=\kappa$ and F8. The strictly increasing sequence of step 3.1 is cofinal in $\widehat x(n)$, so its cofinality is at most $\kappa$. If a cofinal subset had size $\mu<\kappa$, choose for each of its members a stage whose $h$ value exceeds it. F7 bounds these $\mu$ stages below one $\beta<\kappa$; then $h_\beta(n)<\widehat x(n)$ bounds that supposedly cofinal subset, a contradiction. Thus the cofinality is exactly $\kappa$. On $L_r$ define $\widehat x(n)=x(n)$. All its coordinate cofinalities now lie in $\{\aleph_1,\ldots,\aleph_m\}$, so $\widehat x\in X_R(B)$ by F1 with the strict uniform bound $\aleph_{m+1}$. This also proves $h_\alpha(n)<\widehat x(n)$ on $H$ for every $\alpha<\kappa$, since there is a later, larger value. [step 1.1, step 2.1, step 3.1, F1, F7, F8, A1]

5.1 Let $v\in P_B$ and $v<\widehat x$. On each nonempty $L_r$, cofinality of $C_n$ gives a least $\xi_n<\aleph_r$ with $v(n)<C_n(\xi_n)$. Regularity of uncountable $\aleph_r$ and countability of $B$ give $\gamma_r=\sup_{n\in L_r}(\xi_n+1)<\aleph_r$. Thus $v(n)<C_n(\gamma_r)<x(n)=\widehat x(n)$. Every $\gamma_r$ is below $\kappa$ and belongs to $M$, including when $r=m$. On nonempty $H$, cofinality of the $h_\alpha(n)$ gives a least stage $\alpha_n$ with $v(n)<h_{\alpha_n}(n)$. Similarly choose $\alpha<\kappa$ above all these countably many stages using F7 and F8. Define $z(n)=C_n(\gamma_r)$ on $L_r$ and $z(n)=h_\alpha(n)$ on $H$. If $H$ is empty omit the latter parameter; omit parameters for empty $L_r$ as well. The finite tuple of chosen $\gamma_r$, the fixed finite partition and $C$ belong to $M$, and $h_\alpha\in M$ by step 3.1. Unique definition, elementarity, and the rank and absoluteness checks in step 1.2 give $z\in M$. The displayed inequalities and step 4.1 give $v<z<\widehat x\le x$, so $z\in P_B$. This proves the strict interpolation even when $H$ or all the low strata are empty. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, F7, F8]

6.1 Suppose $u\in M\cap P_B$, $u\le x$, and all its coordinate cofinalities are at most $\kappa$. On $L_r$ immediately $u(n)\le x(n)=\widehat x(n)$. On $H$, equality $u(n)=x(n)$ would give both $\operatorname{cf}(u(n))\le\kappa$ and $\operatorname{cf}(x(n))>\kappa$, so $u(n)<x(n)$. Since $u,n\in M$, evaluation and successor put $u(n)$ and $u(n)+1$ in $M$. The limit property of $x(n)$ gives $u(n)+1<x(n)$, hence $u(n)<\sup(M\cap x(n))=\widehat x(n)$. Thus $u\le\widehat x$ in every coordinate, including zero or successor values of $u$. QED. [step 1.1, step 1.2, step 2.1, step 4.1, F1]
