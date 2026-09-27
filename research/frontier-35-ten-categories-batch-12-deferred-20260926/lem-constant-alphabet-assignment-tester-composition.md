---
id: lem-constant-alphabet-assignment-tester-composition
kind: lemma
title: "Constant-alphabet assignment testers compose with controlled rejection"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-exponential-base-assignment-tester-from-quadratic-oracles, def-assignment-tester-and-rejection-ratio, def-explicit-constant-rate-constant-distance-code]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification, §5 Definition 5.1 and Lemma 1.8 (Composition), printed pp. 17-19."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Ben-Sasson, Goldreich, Harsha, Sudan and Vadhan, Robust PCPs of proximity, Theorem 3.7, as cited by Dinur §9."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
---

## Statement

Let $P_{\rm out}$ be an assignment tester with finite alphabet $\Sigma$ of size $s:=|\Sigma|\ge2$, arity bound $q$, rejection ratio $\varepsilon>0$, whose input coordinates are labeled by two designated symbols of $\Sigma$ identified with the bits $0,1$, and whose constraints are binary relations over $\Sigma$ on ordered variable tuples. Let $P_{\rm in}$ be an assignment tester with alphabet $\Sigma_0=\{0,1\}$, arity bound $q'\ge2$, rejection ratio $\varepsilon'>0$ and the property that on every input circuit with at most $qs$ input bits its output system has at most $B$ constraints, where $B<\infty$ depends only on $P_{\rm in}$ and $s$. Put
$$\rho_{\rm enc}:=\min\Bigl\{\tfrac{2}{s},\,1\Bigr\}=\frac2s,\qquad \beta_3:=\frac{\varepsilon'\rho_{\rm enc}}{2q}=\frac{\varepsilon'}{qs}>0 .$$
Then there is an assignment tester $P_{\rm out}\circ P_{\rm in}$, the **composition**, with

- alphabet $\Sigma_0=\{0,1\}$ and arity bound $\max\{q',2\}$, both constant;
- the same named input coordinates as $P_{\rm out}$, labeled by bits;
- perfect completeness, and rejection ratio at least $\varepsilon\beta_3$;
- output size at most $c\cdot M_{\rm out}$, where $M_{\rm out}$ is the number of constraints of the outer output and $c:=s+B$ is a constant depending only on $s$ and $P_{\rm in}$;

and if $P_{\rm out}$ and $P_{\rm in}$ are computed by algorithms running in time polynomial in the bit length of their inputs and outputs, then the composition is computed in time polynomial in the bit length of the outer output.

## Facts & Assumptions

**Given:** assignment testers $P_{\rm out}$ and $P_{\rm in}$ as in the statement, with $s=|\Sigma|$, a circuit $C$ with named inputs $X$, and the outer system $G=P_{\rm out}(C,X)$ of arity $q$ over $\Sigma$ whose variables include $X$; write $E$ for the constraint list of $G$, $M=|E|$, and $\delta:=\delta(x,\operatorname{SAT}(C))$ for a fixed input $x$.

[F1] The outer system has variables $V\supseteq X$, constraints $(v_1,\dots,v_k)$ with $k\le q$ and relations $R_e\subseteq\Sigma^k$, and for the fixed input $x$ every labeling $\sigma$ of $G$ with $\sigma|_X=x$ satisfies $\operatorname{UNSAT}_\sigma(G)\ge\varepsilon\,\delta(x,\operatorname{SAT}(C))$, while if $x\in\operatorname{SAT}(C)$ some labeling has $\operatorname{UNSAT}=0$ ([[def-assignment-tester-and-rejection-ratio]]).

[F2] The inner system $P_{\rm in}(D,Y)$ of a circuit $D$ with named inputs $Y$ has at most $B$ constraints when $|Y|\le qs$, arity at most $q'$, alphabet $\{0,1\}$, contains $Y$ among its variables, and satisfies the completeness and proximity-soundness clauses of [[def-assignment-tester-and-rejection-ratio]] with ratio $\varepsilon'$; the exponential base tester [[lem-exponential-base-assignment-tester-from-quadratic-oracles]] is such a $P_{\rm in}$ with $B=2^{\operatorname{poly}(qs)}$ and $\varepsilon'=1/500$.

[F3] A code $e:\Sigma\to\{0,1\}^s$ given by the unit vectors, $e(a)_b=1$ if and only if $a=b$, is injective, every two distinct codewords differ in exactly two coordinates, and hence the relative distance of $e$ is exactly $\rho_{\rm enc}=2/s>0$; the identity encoding of $\{0,1\}$ has relative distance $1$ ([[def-assignment-tester-and-rejection-ratio]]).

[F4] For a fixed word $w\in\{0,1\}^m$ and a nonempty set $S\subseteq\{0,1\}^m$ of codewords, the relative Hamming distance $\operatorname{rdist}(w,S)=\min_{u\in S}\operatorname{dist}(w,u)$; for every codeword $u$ of the code of [F3] one has $\operatorname{dist}(w,S)\ge\operatorname{dist}(w,\Lambda)$ where $\Lambda$ is the set of codewords of the block, and $\operatorname{dist}(u,u')\ge\rho_{\rm enc}$ for distinct codewords $u\ne u'$ ([[def-explicit-constant-rate-constant-distance-code]]).

## Proof

**Proof technique:** constructive.

1.1 **Blocks.** Replace each non-input variable $v\in V\setminus X$ by a block $[v]$ of $s$ fresh Boolean coordinates, and keep each input coordinate $x_i\in X$ as a single coordinate (its identity encoding, since its labels are bits). Thus the composed variable set is $\bigl(\bigcup_{v\notin X}[v]\bigr)\cup X$, and the number of block coordinates is at most $s|V\setminus X|$. [F3, given, construct]

2.1 **Robustized circuits.** For each outer constraint $e$ with tuple $(v_1,\dots,v_k)$, $k\le q$, and relation $R_e\subseteq\Sigma^k$, let $\tilde c_e$ be the Boolean circuit on the block coordinates of $v_1,\dots,v_k$ of step 1.1 — at most $ks\le qs$ input bits — that outputs $1$ exactly when there are $a_1,\dots,a_k\in\Sigma$ with $(a_1,\dots,a_k)\in R_e$ and each block equal to the codeword $e(a_j)$, the coordinates in $X$ being their own codewords. Since $\Sigma$ and $q$ are fixed, $\tilde c_e$ has constant size and is built by listing the at most $|\Sigma|^q$ tuples of $R_e$, so $\tilde c_e$ accepts exactly the legal encodings of the satisfying tuples of $R_e$. [F3, step 1.1, construct]

3.1 **The composed system.** Apply $P_{\rm in}$ to each robustized circuit $\tilde c_e$ of step 2.1, with named inputs the block coordinates of $e$, obtaining systems $G_e$ over $\{0,1\}$ with at most $B$ constraints each and arity at most $q'$, whose auxiliary variables are taken fresh for each $e$. Let $G\circ P_{\rm in}$ be the constraint system whose variables are the blocks together with all auxiliary variables and whose constraint list is the union of the lists of the $G_e$, each family first padded to exactly $B$ constraints by adding tautological unary constraints with the full relation $\{0,1\}$, which every labeling satisfies. The construction is explicit — it enumerates the at most $B$ constraints of each constant-size inner system — so $G\circ P_{\rm in}$ has at most $s|V\setminus X|+B|E|\le cM$ constraints with $c=s+B$, over the alphabet $\{0,1\}$ and with arity at most $\max\{q',1\}$, and it is computed in time polynomial in the bit length of the outer output whenever the two testers are. [F2, step 1.1, step 2.1, construct, algebra]

4.1 **Perfect completeness.** Let $x\in\operatorname{SAT}(C)$ and let $\sigma$ be an outer labeling with $\sigma|_X=x$ and $\operatorname{UNSAT}_\sigma(G)=0$, which exists by [F1]. Label each block $[v]$ by the codeword $e(\sigma(v))$; then for every outer constraint $e$ the block labeling satisfies the robustized circuit $\tilde c_e$ of step 2.1, so by the completeness clause of the inner tester of [F2] there is an auxiliary labeling of $G_e$'s non-input variables with $\operatorname{UNSAT}=0$, and the tautological padding is satisfied by every labeling. The auxiliary variable sets of distinct constraints $e$ are disjoint and only the blocks are shared, so these extensions fit together into a single labeling of $G\circ P_{\rm in}$ with $\operatorname{UNSAT}=0$. [F1, F2, step 2.1, step 3.1, algebra]

4.2 **Soundness.** Fix an input $x$ and any labeling $\sigma'$ of $G\circ P_{\rm in}$ of step 3.1. For every non-input variable $v$ let $\Lambda=\{e(a):a\in\Sigma\}$ be the code, $\eta_v:=\operatorname{dist}(\sigma'([v]),\Lambda)$ the relative distance of its block to $\Lambda$, and $a_v\in\Sigma$ a nearest codeword, ties broken by the fixed order on $\Sigma$; for $v\in X$ put $a_v:=\sigma'(v)\in\{0,1\}$, so that its block has distance $0$ from $e(a_v)$ under the identity encoding. This defines an outer labeling $\sigma$ with $\sigma|_X=x$, and by [F1] the set $F$ of outer constraints violated by $\sigma$ satisfies $|F|/M\ge\varepsilon\,\delta(x,\operatorname{SAT}(C))$. Now fix $e\in F$ with tuple $(v_1,\dots,v_k)$ and let $S_e\subseteq\{0,1\}^{ks}$ be the set of block assignments satisfying $\tilde c_e$, so every element of $S_e$ consists of codewords $e(a'_1),\dots,e(a'_k)$ with $(a'_1,\dots,a'_k)\in R_e$. Since $(a_{v_1},\dots,a_{v_k})\notin R_e$, every element of $S_e$ has some coordinate $j$ with $a'_j\ne a_{v_j}$, and then $\operatorname{dist}(\sigma'([v_j]),e(a'_j))\ge\max\{\eta_{v_j},\,\rho_{\rm enc}-\eta_{v_j}\}\ge\rho_{\rm enc}/2$ by [F4], the first lower bound from the minimality of $\eta_{v_j}$ and the second from the triangle inequality and the code distance. Dividing by the total number $ks$ of coordinates of the restriction gives $\operatorname{rdist}(\sigma'|_e,S_e)\ge\rho_{\rm enc}/(2k)\ge\rho_{\rm enc}/(2q)$, so by the proximity-soundness clause of [F2] the fraction of constraints of $G_e$ violated by $\sigma'$ is at least $\varepsilon'\rho_{\rm enc}/(2q)=\beta_3$, and the same holds for the padded family because the padding adds only satisfied tautologies. Summing over the equal-sized families gives that the fraction of all constraints of $G\circ P_{\rm in}$ violated by $\sigma'$ is at least $\frac1M\sum_{e\in F}\beta_3=\beta_3|F|/M\ge\beta_3\varepsilon\,\delta(x,\operatorname{SAT}(C))$. [F1, F2, F3, F4, step 1.1, step 3.1, algebra]

5.1 Steps 4.1 and 4.2 give the completeness and proximity-soundness clauses with the positive ratio $\varepsilon\beta_3=\varepsilon\varepsilon'/(qs)$, step 3.1 gives the alphabet $\{0,1\}$, the arity bound $\max\{q',1\}$ and the size bound $cM$ with $c=s+B$, and step 1.1 keeps the named input coordinates $X$ as variables labeled by bits; the construction is deterministic, so $P_{\rm out}\circ P_{\rm in}$ is an assignment tester with the claimed parameters and the same named input coordinates, computable in polynomial time in the outer output whenever its two factors are. [F1, F2, step 1.1, step 3.1, step 4.1, step 4.2, discharge-construct] ∎

## Remarks

- **Where the constant loss comes from.** The factor $\beta_3=\varepsilon'/(qs)$ collects three constants: the relative distance $2/s$ of the unit-vector encoding, the factor $1/(2q)$ from the fact that a violated $q$-ary constraint can hide its distance in one of $q$ blocks, and the inner rejection ratio $\varepsilon'$. None of them depends on the size of the outer system, which is why the composition multiplies the size by the constant $c=s+B$ and the rejection ratio by the constant $\beta_3$.
- **Input coordinates are not blocked.** The named input coordinates are labeled by bits, and the identity encoding of a bit has relative distance one, so no consistency constraint between a block and a raw input is needed: the robustized circuit reads the input coordinate itself. This is what preserves the named coordinates exactly and why the composition can be iterated by [[thm-constant-query-assignment-tester]] without renaming the inputs.
- **Sharing and consistency.** The blocks are shared between the families of all constraints incident to their variable, so the composed system is a union with a genuinely shared variable set rather than a disjoint sum; the analysis of 4.2–4.4 handles this by decoding each block once and using the decoded labeling for every incident constraint. The auxiliary variables, in contrast, are fresh per family, which is what makes completeness fit together.
