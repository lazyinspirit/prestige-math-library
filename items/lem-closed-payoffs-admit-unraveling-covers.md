---
id: lem-closed-payoffs-admit-unraveling-covers
kind: lemma
title: "Closed and open payoffs admit unraveling covers"
status: draft
origin: pipeline
deps: ["def-game-covering-and-k-covering", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Lemma 7, complete proof"
      url: "https://arxiv.org/html/2401.09659v1"
    - title: "Lemma 2.1.7, printed pp70–76"
      url: "https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf"
    - title: "Lemma 3, printed pp452–453 (independent pruned/quasistrategy construction)"
      url: "https://www.math.ucla.edu/~dam/booketc/purely_inductive.pdf"
---
## Statement

In ZFC, for every taboo tree $T$, each open or closed $A\subseteq[T]$ and every $k\in\mathbb N$, there is a $k$-covering unraveling $A$. Its alphabet is a set but need not be countable.

## Facts & Assumptions

[F1] [[def-game-covering-and-k-covering]] specifies position reflection, total strategy locality, lifts and unraveling.

[A1] Assume [[def-axiom-of-choice]] for fixed legal defaults and witness selectors.

## Proof

**Given:** A taboo tree $T$, a requested depth $k$, and first a closed payoff $A$.

1.1 Increase $k$ to an even $K\geq k$ and keep the tree and all labels unchanged through $K$. For each nonterminal $p$ of length $K$ and legal $a$, put $q=p^\frown a$. Let $Z_{p,a}$ consist of nonterminal strict extensions $r$ of $q$ whose branch cylinders miss $A$, minimal among such strict extensions. Distinct members of $Z_{p,a}$ are incomparable. At $p$, the new I moves are $(a,X)$ for $X\subseteq Z_{p,a}$. If $q$ is terminal, the decorated node is terminal with its original label. Otherwise II can accept with $(1,b)$ for any legal $b$ at $q$, or challenge with $(2,r,b)$ for $r\in X$ and $b=r(K+1)$. All these move collections are sets. [given]

2.1 After acceptance copy the original continuation until its first original terminal or its first $r\in Z_{p,a}$. Keep an original terminal's label; make a reached $r$ taboo for II when $r\in X$ and taboo for I otherwise, and keep no descendants of this new terminal. After challenge force the intervening history through $r$, then copy the original tree and taboos beyond $r$. This is prefix closed, and no forced proper prefix of $r$ is an original terminal. Every retained node not assigned a taboo has a child: use an original legal move in the copy, the next forced move in a challenge, or an acceptance response after a nonterminal decorated move. Erasing decorations therefore defines a length/prefix preserving map $\pi$ reflecting each original taboo. [step 1.1, F1]

3.1 An infinite accepting play cannot meet $Z_{p,a}$. If its projection were outside closed $A$, some prefix cylinder would miss $A$; extending that prefix if necessary past $q$ gives a nonterminal such prefix on this infinite branch. The first such strict extension belongs to $Z_{p,a}$, a contradiction. Hence every infinite accepting play projects into $A$. Every infinite challenging play extends its challenged $r\in Z_{p,a}$ and projects outside $A$. Thus $\pi^{-1}(A)$ consists exactly of the infinite accepting plays. Acceptance versus challenge is decided at depth $K+2$, so this subset and its complement are unions of cylinders and are open. [given, step 1.1, step 2.1]

3.2 Fix legal defaults on $T$ with A1. For a source I strategy $\sigma$, play its identical moves before depth $K$, erase its decoration $(a,X)$ at that depth, and thereafter simulate its accepting continuation. If a first $r\in Z_{p,a}\setminus X$ is reached, use defaults thereafter. If a first $r\in X$ is reached, replace the accepting simulation by the challenging simulation for this $r$ and follow $\sigma$ beyond it. The earlier portion of this challenging lift is consistent: after the challenge all its moves up to $r$ are forced to be the very history already played. Every consistent maximal target play either has its exact accepting lift, ends with its original terminal label, has the finite I-taboo accepting lift at $r\notin X$, or has its exact challenging lift at $r\in X$. These are precisely the alternatives in F1. [F1, A1, step 1.1, step 2.1]

4.1 For a source II strategy $\tau$, follow its moves before $K$. At a target nonterminal $q=p^\frown a$ define $Y=\{r\in Z_{p,a}:\text{no response of }\tau\text{ to any }(a,X)\text{ challenges }r\}$. Its response to $(a,Y)$ must accept: a challenge to $r$ would require $r\in Y$ while witnessing $r\notin Y$. Simulate that response and the resulting accepting continuation. At a first $r\in Y$, use defaults. At a first $r\notin Y$, the set of $X\subseteq Z_{p,a}$ whose response challenges $r$ is nonempty; use a fixed selector to choose $X_r$ and switch to that challenging simulation beyond $r$. Its preceding forced segment agrees with the target history. The target play has an exact accepting lift if no $Z$ node is reached, a finite II-taboo accepting lift if $r\in Y$, or an exact challenging lift using $X_r$ otherwise. Original terminal cases retain their labels, including terminals before decoration. Hence II lifting also holds. [A1, F1, step 1.1, step 2.1, step 3.2]

5.1 The selectors just used can be fixed independently of $\sigma,\tau$: A1 chooses, for each $(p,a)$, a choice function on the nonempty subsets of $\mathcal P(Z_{p,a})$. The family of all these required nonempty subsets is a set. At every position of length $m<K$, define the image strategy to equal the source strategy at that identical position, even when the position is inconsistent with earlier own prescriptions. At positions of length $m\geq K$ inconsistent with earlier own prescriptions, assign the fixed legal default; at the remaining positions use the simulations above. Consistency is decided from the strictly earlier prescriptions, so this defines total strategies by recursion over length. At a position of length $m$, every simulated strategy value is queried at length at most $m$; for II's $Y$ and $X_r$ tables the only extra queries have length $K+1\leq m$. Selectors are fixed, so equal source strategies below $n$ have equal images below $n$. Before $K$ the strategies and position maps are literal identities. We have proved all F1 requirements for a $K$-covering, hence a $k$-covering. [F1, A1, step 3.2, step 4.1]

6.1 Step 3.1 proves that this covering unravels closed $A$, including empty and whole payoffs. If $A$ is open, apply the construction to the closed complement $[T]\setminus A$. Its lifted complement is clopen, so its relative complement $\pi^{-1}(A)$ is clopen too. Thus the same covering unravels $A$, proving the open case as well. QED. [F1, step 3.1, step 5.1]
