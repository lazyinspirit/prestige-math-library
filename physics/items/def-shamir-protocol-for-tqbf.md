---
id: def-shamir-protocol-for-tqbf
kind: definition
title: "The Shamir interactive protocol for TQBF"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-qbf-arithmetization-operators, def-multilinearization-operator, lem-multilinearization-preserves-boolean-values, lem-efficient-prime-field-for-a-polynomial-soundness-budget, def-interactive-proof-transcript-round-and-strategy, def-quantified-boolean-formula-and-tqbf, lem-formula-arithmetization-degree-and-evaluation-cost, thm-z-mod-p-is-a-field, def-arithmetization-of-a-boolean-formula]
justified_by: []
aliases: []
landmark: true
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-27
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "A. Shen, IP = PSPACE: Simplified Proof, JACM 39(4) 1992, pp. 878–880, §2 (protocol B and its three cases A, E, R)"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/IP_Pspace2.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §8.5.3 and Remark 8.19, author-hosted draft"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

Let $\Phi=Q_1x_1\,Q_2x_2\cdots Q_nx_n\,\psi$ be a closed prenex quantified Boolean formula ([[def-quantified-boolean-formula-and-tqbf]]) whose quantifier-free matrix $\psi$ has $L$ syntax nodes, let $b:=P_\psi$ be the arithmetization of the matrix ([[def-arithmetization-of-a-boolean-formula]]), and put
$$D:=\max\{L,2\},\qquad T:=n(n+3)/2.$$
Let $N:=\max\{2,12TD+1\}$. If $T=0$, put $p:=3$; if $T\ge1$, let $p$ be the first admissible integer of the search of [[lem-efficient-prime-field-for-a-polynomial-soundness-budget]]. In either case $p$ is prime and $12TD<p<2N$; put $F:=\mathbb Z/p$, a field with the residue operations ([[thm-z-mod-p-is-a-field]]), and $k:=2\lceil\log_2p\rceil$. Let $N_1,N_2,\dots,N_T$ be the operator list of the multilinearized ordered arithmetization of $\Phi$ in application order, with $N_t$ acting in its active variable, and let
$$G_0:=b,\qquad G_t:=N_t(G_{t-1})\quad(t=1,\dots,T),$$
so that $G_T$ is the arithmetized value of $\Phi$ ([[def-multilinearization-operator]], [[def-qbf-arithmetization-operators]]). Recall that each node is either a reduction $R_{X_i}$ or the quantifier operator $O_j$ of a block $j$, and that the operator list ends with $R_{X_1},O_1$. The operators make the individual degree of the node polynomials bounded by $D$ in the following sense: for every $t$ and every substitution of arbitrary field elements for all variables of $G_{t-1}$ other than its active variable, the resulting univariate polynomial over $F$ has degree at most $D$ ([[lem-multilinearization-preserves-boolean-values]]).

**The Shamir protocol for $\Phi$.** The protocol runs for $T$ rounds. The verifier $V$ holds two pieces of state: a *claim* $c\in F$ and a *current point* $\sigma$, a partial function from $\{1,\dots,n\}$ to $F$; initially
$$c:=1\quad\text{and}\quad \sigma:=\varnothing,$$
the empty assignment. On an input that is not the encoding of a closed prenex quantified Boolean formula, $V$ rejects immediately; this convention makes $V$ total.

*Round $t$.* The rounds run for $t=T,T-1,\dots,1$, so that the nodes are processed in the reverse of the application order; let $M:=N_t$ and let $x_i$ be the active variable of $M$.

1. *Prover message.* The prover sends a list $(a_0,a_1,\dots,a_D)\in F^{D+1}$ of field elements, read as the coefficient vector of the univariate polynomial
   $$s(X):=a_0+a_1X+\cdots+a_DX^D.$$
   A message that is not such a list, or a list whose entries are not elements of $F$, is rejected.
2. *Verifier check.* If $M$ is the quantifier node $O_j$ of block $j$, then $V$ tests
   $$c=s(0)\,s(1)\quad\text{when }Q_j=\forall,\qquad c=s(0)+s(1)-s(0)s(1)\quad\text{when }Q_j=\exists.$$
   If $M$ is a reduction $R_{X_i}$, then $V$ tests
   $$c=(1-a)\,s(0)+a\,s(1)\qquad\text{where }a:=\sigma(i),$$
   and if $\sigma(i)$ is undefined, $V$ rejects. If the applicable test fails, $V$ rejects and the exchange stops.
3. *Challenge and update.* If the test passes, $V$ reads the next $k$ bits of its random tape, forming the block $U_t\in\{0,1\}^k$, sets
   $$r_t:=\text{(the integer denoted by }U_t\text{) mod }p,\qquad \sigma(i):=r_t,\qquad c:=s(r_t),$$
   and proceeds to the next round. Assigning $\sigma(i):=r_t$ replaces any value assigned to $x_i$ earlier in the exchange.

*Terminal step.* After round $t=1$, $V$ evaluates the matrix arithmetization $b$ at the point $\sigma$, using the arithmetic circuit of the formula $\psi$ and $O(L)$ operations in $F$ ([[lem-formula-arithmetization-degree-and-evaluation-cost]]), and
$$V\text{ accepts}\iff c=b(\sigma).$$
This terminal evaluation is the only place in the protocol where the formula $\psi$ and the polynomial $b$ are used; every earlier test involves only the claim, the current point and the prover's last message.

**The honest prover.** In the round with node $M=N_t$ and active variable $x_i$, the honest prover $P_h$ sends the coefficient vector of
$$q_i(X):=G_{t-1}\big|_{x_j:=\sigma(j)\ \text{for}\ j\ne i,\ x_i:=X},$$
the restriction of the current node polynomial $G_{t-1}$ to the current point, in the variable $X$ ranging over $F$. By the degree bound recalled above, $q_i$ has degree at most $D$, so this is a legal message; $P_h$'s choice depends only on the messages exchanged so far, which determine $\sigma$ and $c$.

## Remarks

- A run has at most $T$ prover messages and at most $T$ verifier challenges $r_T,r_{T-1},\dots,r_1$; a failed check stops before its challenge is drawn, while a run that passes every check has all $T$ challenges and then the terminal step. The residue challenges are sent to the prover, so its strategy uses the public residue transcript. This residue protocol does not reveal the full random blocks $U_t$; the public-coin variant of [[thm-tqbf-has-a-polynomial-round-interactive-proof]] sends each whole block.
- The order of the rounds is the reverse of the operator list, which is what makes the checks local: each check relates the current claim to the received polynomial at the two Boolean points $0,1$, and, for a reduction, to the current value $a$ of the reduced variable. Processing $O_j$ before the reductions of block $j$ is what lets the reductions of a block see a value for $x_j$; the reductions of block $j$ then overwrite $x_j,x_{j-1},\dots,x_1$, so at the end every variable carries the last challenge drawn for it.
- The verifier never evaluates the matrix before the terminal step, and the prover is never required to be efficient: only the number of rounds, the message lengths and the verifier's work are bounded, as required by [[def-completeness-and-soundness]].
- Both displayed forms of the existential test agree, since $s(0)+s(1)-s(0)s(1)=1-(1-s(0))(1-s(1))$ in every field; the second is the form used in [[def-qbf-arithmetization-operators]] for the operator $E_{X_j}$, and the first is the form used by Shen.
- For $n=0$ the operator list is empty, $T=0$, there are no messages, $\sigma$ is the empty assignment and the protocol reduces to the test $1=b$, where $b$ is the constant value of the arithmetization of a quantifier-free closed formula. For $n=1$, $T=2$ and the two rounds process first the quantifier node $O_1$ and then the reduction $R_{X_1}$; both cases are covered by the statements below.
- The prime $p$ is a function of the input alone: $D$ and $T$ depend only on the formula and the search of [[lem-efficient-prime-field-for-a-polynomial-soundness-budget]] is deterministic, so the verifier makes no choice here. The only randomness in the protocol is at most $Tk$ bits of the random tape, read in blocks of $k$ bits only after passed checks; by the point-mass bound of that lemma every residue is sampled with probability at most $2/p$, and the challenge is drawn after the prover's message has been fixed.
- The degree bound $D$ is the cap the verifier enforces on the received polynomial; the honest prover always meets it, and a prover that sends a longer or malformed list is rejected before any test is made. The factorization of the verifier's work into $O(TD)$ field operations for the rounds and $O(L)$ for the terminal evaluation, and the completeness and soundness of the protocol, are established in [[lem-honest-prover-maintains-the-claim-invariant]], [[lem-each-round-has-polynomial-communication]], [[lem-shamir-protocol-has-perfect-completeness]], [[lem-first-false-claim-survives-with-root-bound-probability]], [[lem-total-soundness-follows-by-union-bound]] and [[lem-shamir-qbf-verifier-runs-in-polynomial-time]].
