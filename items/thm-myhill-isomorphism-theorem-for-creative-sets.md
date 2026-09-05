---
id: thm-myhill-isomorphism-theorem-for-creative-sets
kind: theorem
title: "Myhill's isomorphism theorem for creative sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-productive-and-creative-set, thm-nonhalting-is-productive-and-halting-is-creative, thm-recursion-theorem-with-parameters, prop-fixed-machine-coding-is-acceptable]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Robert I. Soare, Turing Computability: Theory and Applications"
      url: "https://www.scribd.com/document/620633428/Theory-and-Applications-of-Computability-In-cooperation-with-the-association-Computability-in-Europe-Robert-I-Soare-Turing-Computability-Theory"
---

## Statement

Work with the fixed machine-coding acceptable numbering of
[[prop-fixed-machine-coding-is-acceptable]]. If $A,B\subseteq\mathbb N$ are
creative, then there exists a computable
permutation $h$ of $\mathbb N$ such that
$$ x\in A \iff h(x)\in B \qquad(x\in\mathbb N). $$
In particular, every creative set is computably isomorphic to the diagonal
halting set $K$.

## Facts & Assumptions

**Given:** Creative sets $A,B\subseteq\mathbb N$.

[L1] A creative set is c.e. and has productive complement. For the fixed acceptable machine coding, the productive-function normalization recorded in [[def-productive-and-creative-set]] permits a total computable one-one productive witness.

[L2] The diagonal halting set $K$ is creative, by [[thm-nonhalting-is-productive-and-halting-is-creative]].

[L3] The recursion theorem with parameters gives a uniform fixed-point map for total computable binary transformers, by [[thm-recursion-theorem-with-parameters]].

## Proof

**Proof technique:** direct.

1.1 Every c.e. set one-one reduces to $K$. If $C=W_e$, let $m_e(x)$ be the code of a machine that ignores its actual input, enumerates $W_e$, and halts exactly when $x$ appears. Add to its finite description an unreachable chain of states whose length encodes $x$. This does not change its behaviour, and the fixed injective machine coding makes $x\mapsto m_e(x)$ total computable and one-one. Thus $$x\in C\iff m_e(x)\in K.$$ [given, construct]

1.2 Let $C$ be creative, put $P=\mathbb N\setminus C$, and choose a normalized total one-one productive function $p$ from [L1]. The fixed coding supplies a total computable padding map $\operatorname{pad}(e,y)$: it builds a machine simulating program $e$ and adds an unreachable state chain encoding the pair $(e,y)$. Hence $\varphi_{\operatorname{pad}(e,y)}=\varphi_e$, and $\operatorname{pad}$ is one-one in the pair. Apply [L3] to the transformer that, from $(y,e)$, returns an index whose domain is $\{p(\operatorname{pad}(e,y))\}$ if program $y$ halts on $y$, and is empty otherwise. We obtain a total computable $q$ satisfying this fixed-point equation. Put $$n(y):=\operatorname{pad}(q(y),y),\qquad g(y):=p(n(y)).$$ Then $n$, and therefore $g$, is one-one, and padding gives $$W_{n(y)}=W_{q(y)}=\begin{cases}\{g(y)\},&y\in K,\\ \varnothing,&y\notin K.\end{cases}$$ If $y\in K$ and $g(y)\in P$, productivity applied to $W_{n(y)}\subseteq P$ would force $g(y)\notin W_{n(y)}$, a contradiction. If $y\notin K$, then $W_{n(y)}=\varnothing\subseteq P$, so productivity gives $g(y)\in P$. Therefore $$y\in K\iff g(y)\in C,$$ and $g$ is a one-one computable reduction $K\le_1C$. [L1, L3, construct]

2.1 Applying step 1.1 to $A$ and then step 1.2 to $B$ gives a one-one reduction $A\le_1 B$ by composition. Reversing the roles of $A$ and $B$ gives $B\le_1 A$. [step 1.1, step 1.2]

3.1 Let $f$ witness $A\le_1B$ and let $g$ witness $B\le_1A$. Build finite membership-preserving partial bijections $h_s$ by stages. At a domain stage, choose the least $x\notin\operatorname{dom}h_s$ and start with $y_0=f(x)$. While $y_i\in\operatorname{rng}h_s$, set $x_{i+1}=h_s^{-1}(y_i)$ and $y_{i+1}=f(x_{i+1})$. This search must leave the finite range: otherwise a repeated $y_i$ and injectivity of $f$ would eventually put the original unused $x$ in $\operatorname{dom}h_s$. Pair $x$ with the first unused $y_i$. Each passage through $f$ and $h_s^{-1}$ preserves and reflects membership, so the new pair does too. [step 2.1, choose, construct]

4.1 At the alternating range stage, choose the least $y\notin\operatorname{rng}h_s$ and start with $x_0=g(y)$. While $x_i\in\operatorname{dom}h_s$, set $y_{i+1}=h_s(x_i)$ and $x_{i+1}=g(y_{i+1})$. The symmetric injectivity argument finds an unused $x_i$ after finitely many steps. Pair that $x_i$ with $y$; again all traversed maps preserve and reflect membership. Thus every stage effectively extends the finite membership-preserving partial bijection. [step 2.1, step 3.1, construct]

5.1 Let $h:=\bigcup_sh_s$. The alternating least-unused choices put every natural number eventually into both its domain and range, so $h$ is a bijection. It is computable because, on input $x$, one simulates stages until $x$ is paired. Every stage preserves $x\in A\iff h(x)\in B$, hence this equivalence holds for all $x$. [step 3.1, step 4.1, construct]

6.1 So $h$ is a computable permutation sending $A$ onto $B$. Taking $B=K$ and using [L2] gives the final clause. [L2, step 5.1] ∎
