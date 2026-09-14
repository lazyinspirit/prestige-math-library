---
id: thm-pid-and-p-greater-than-omega-one-eliminate-s-spaces
kind: theorem
title: "PID plus p greater than omega-one eliminates S-spaces"
status: draft
origin: pipeline
deps: [def-p-ideals-pid-pseudointersection-number-and-s-spaces, def-axiom-of-choice]
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: contradiction
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Todorcevic, Combinatorial Dichotomies in Set Theory, Theorem 23.2 and preceding argument, pp.45-46"
      url: https://www.math.toronto.edu/~stevo/dichotomies4.pdf
    - title: "Todorcevic, Forcing with a coherent Souslin tree, Section 7, pp.20-22"
      url: https://www.math.toronto.edu/~stevo/todorcevic_chain_cond.pdf
---

## Statement

In ZFC plus PID and $\mathfrak p>\omega_1$, every regular Hausdorff
hereditarily separable space is hereditarily Lindel&ouml;f. Consequently no
S-space exists.

## Facts & Assumptions

**Given:** PID, $\mathfrak p>\omega_1$, and a regular Hausdorff hereditarily separable space $K$.

[F1] A P-ideal uses modulo-finite pseudounions; PID has the uncountable internally-small and countable orthogonal-cover alternatives; $\mathfrak p$ controls pseudointersections; and S-spaces use the stated hereditary topological conventions. [[def-p-ideals-pid-pseudointersection-number-and-s-spaces]]

[A1] AC supplies the omega-one recursion, countable enumerations, and all simultaneous finite-modulo and topological witness choices. [[def-axiom-of-choice]]

## Proof

1.1 Assume for contradiction that some subspace $W\subseteq K$ is not Lindel&ouml;f. Regularity, Hausdorffness, and hereditary separability pass to subspaces, so replace $K$ by $W$. Choose an open cover with no countable subcover. Recursively for $\alpha<\omega_1$, select a cover member $U_\alpha$ and $x_\alpha\in U_\alpha$ outside $\bigcup_{\beta<\alpha}U_\beta$. Let $X=\{x_\alpha:\alpha<\omega_1\}$ and relabel $U_{x_\alpha}=U_\alpha$; then $U_x\cap X$ is countable for every $x\in X$. By regularity choose open $V_x$ with $x\in V_x\subseteq\overline{V_x}\subseteq U_x$. Define $\mathcal I=\{A\in[X]^{\leq\omega}:(\forall x\in X)\ |A\cap\overline{V_x}|<\omega\}$. It is an ideal containing all finite sets. [F1, A1, Given, assume-contra]

2.1 We first derive the needed domination fact from $\mathfrak p$. If $\mathcal F\subseteq\omega^\omega$ has size less than $\mathfrak p$, consider, on the countable set $\omega^{<\omega}$, the sets $A_f=\{s:(\forall i<|s|)\ f(i)\leq s(i)\}$ for $f\in\mathcal F$ and $C_n=\{s:|s|\geq n\}$. Every finite intersection is infinite. A pseudointersection $B$ exists by the definition of $\mathfrak p$; thin it to distinct $s_n$ with $|s_n|>n$, and put $g(n)=s_n(n)$. Since $B\subseteq^*A_f$, $g$ eventually dominates every $f\in\mathcal F$. Now take $A_n\in\mathcal I$, replace them by their increasing finite unions, and enumerate each infinite $A_n$ as $\{a_{n,k}:k<\omega\}$. For each $x$, choose $f_x(n)$ past the finite set $A_n\cap\overline{V_x}$. As $|X|=\omega_1<\mathfrak p$, choose one eventual dominator $g$ for all $f_x$, and set $A=\bigcup_n\{a_{n,k}:k\geq g(n)\}$, ignoring finite $A_n$. Each $A_n\subseteq^*A$, while for fixed $x$ all sufficiently large rows avoid $\overline{V_x}$ and the finitely many remaining rows meet it finitely. Thus $A\in\mathcal I$, proving that $\mathcal I$ is a P-ideal. [F1, A1, step 1.1]

3.1 Apply PID to $\mathcal I$. In the first alternative take uncountable $Y\subseteq X$ with $[Y]^{\leq\omega}\subseteq\mathcal I$. For $y\in Y$, the set $Y\cap V_y$ must be finite; otherwise a countably infinite subset of it would belong to $\mathcal I$ yet meet $\overline{V_y}$ infinitely. Since the space is Hausdorff and hence $T_1$, delete the finitely many other points of $Y\cap V_y$ to obtain a relative open neighborhood isolating $y$. Thus $Y$ is an uncountable discrete subspace, which is not separable, contradicting hereditary separability. [F1, A1, step 2.1]

3.2 In PID's second alternative write $X=\bigcup_nY_n$ with every $Y_n\perp\mathcal I$. Some $Y=Y_n$ is uncountable, and hereditary separability gives a countable dense $D\subseteq Y$. The family $\{D\setminus\overline{V_x}:x\in X\}$ has the strong finite intersection property. Indeed, if $D\setminus\bigcup_{x\in F}\overline{V_x}$ were finite for some finite $F$, then $Y\subseteq\overline D\subseteq\bigcup_{x\in F}\overline{V_x}$ together with finitely many points. But every $\overline{V_x}\subseteq U_x$ and each $U_x\cap X$ is countable, forcing $Y$ countable, a contradiction. Since $|X|=\omega_1<\mathfrak p$, F1 gives an infinite pseudointersection $a\subseteq D$. Then $a\cap\overline{V_x}$ is finite for every $x$, so $a\in\mathcal I$; but $a\subseteq Y$ contradicts $Y\perp\mathcal I$. Thus the second alternative is impossible as well. [F1, A1, step 1.1, step 2.1]

4.1 Both PID alternatives contradict hereditary separability, so the assumed non-Lindel&ouml;f subspace $W$ cannot exist. Hence every subspace of the original $K$ is Lindel&ouml;f: $K$ is hereditarily Lindel&ouml;f. By the S-space definition in F1, no regular Hausdorff hereditarily separable non-Lindel&ouml;f space exists. AC is used exactly as recorded in A1. [F1, A1, step 3.1, step 3.2, discharge-contradiction: step 3.1, step 3.2] ∎
