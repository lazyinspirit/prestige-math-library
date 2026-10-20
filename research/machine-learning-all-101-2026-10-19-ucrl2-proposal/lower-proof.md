# Independent lower-bound reconstruction

This is a proof proposal, not an acceptance receipt or an edit to the approved theorem. I read `CLAUDE.md`, the local average-regret and diameter definitions, the current lower-bound item, and the complete lower-bound section of `/tmp/batch83-jaksch10a.txt` (including its parameter transfer). The Codex setting was checked narrowly: automatic compaction is 500000 tokens, scope `total`. No settings were changed.

## Exact original statement is false

There are two separate defects beyond the paper's constant transfer.

1. The original scope permits an empty MDP class. Take integer parameters $S=10$, $A=10^{40}$ and $D=1/2$. Then $20\log_A S=1/2$, but no MDP with ten states has diameter at most $1/2$: hitting a distinct state takes at least one step. The repository's normalized diameter is also always at least one. Any integer $T\ge DSA$ is admissible in the original statement, so its existential conclusion is false.
2. The phrase “some MDP ... forces every learning algorithm” has quantifier order $\exists M\,\forall\mathcal A$, whereas the minimax conclusion is $\forall\mathcal A\,\exists M$. A fixed MDP admits a learning rule that hardcodes one of its optimal policies; the word “learning” does not exclude such a rule. The corrected result below has the usual minimax quantifiers. It does not establish the reversed quantifiers.

The original item should therefore retain an explicit unresolved/refuted-scope record until the owner approves a corrected statement. Merely improving the paper's calculation cannot establish the literal original statement.

## Corrected minimax statement with the exact requested constant

For all integers $S,A\ge10$, all real $D\ge\max\{1,20\log_A S\}$, and all integers $T\ge DSA$, **for every learning algorithm** there is an MDP with exactly $S$ states, exactly $A$ actions in each state, rewards in $[0,1]$, diameter at most $D$, and an initial state, such that

$$\mathbb E[T\rho^*-R_T]\ge0.015\sqrt{DSAT}.$$

The following elementary proof is independent of the paper's deficient final constant transfer. In fact both branches below give a strict margin above $0.015$.

## Finite-history testing calculation

We use the proved local Pinsker inequality and the total-variation bound for expectations. All remaining probability calculations are supplied here. Write $\operatorname{kl}(p,q)$ for Bernoulli relative entropy. For $0<p<p+e<1$,

$$\operatorname{kl}(p,p+e)=\int_p^{p+e}\frac{x-p}{x(1-x)}\,dx\le\frac{e^2}{2p(1-p-e)}.$$

Indeed, differentiating $p\log(p/x)+(1-p)\log((1-p)/(1-x))$ gives the integrand, and $x(1-x)\ge p(1-p-e)$ on the integration interval.

Suppose two environments differ only at a single state-action pair $j$, at which one Bernoulli observation parameter changes from $p$ to $p+e$. Let $P_0$ and $P_j$ be their complete histories through the $T$th transition/reward, and let $N_j$ count uses of pair $j$. Their likelihood ratio is the product of the changed Bernoulli likelihood ratios at those uses. The initial law and all conditional action kernels are identical and cancel, including for randomized algorithms. Taking logarithms, conditioning on each past history and selected action, and summing gives exactly

$$\operatorname{KL}(P_0\Vert P_j)=\mathbb E_0[N_j]\operatorname{kl}(p,p+e).$$

There is no absolute-continuity issue because both Bernoulli parameters lie strictly between zero and one and every unchanged kernel has the same support. The displayed identity also follows directly by expanding the finite history probabilities; all rewards used below have finite support. Since $0\le N_j\le T$, Pinsker implies

$$\mathbb E_jN_j\le\mathbb E_0N_j+T\sqrt{\operatorname{KL}(P_0\Vert P_j)/2}.$$

For a family of $K$ candidate pairs with $n_j=\mathbb E_0N_j$ and $\sum_j n_j\le mT$, Cauchy–Schwarz gives $K^{-1}\sum_j\sqrt{n_j}\le\sqrt{mT/K}$. These arguments hold for every algorithm without a deterministic-policy reduction.

## Large-diameter branch: $D\ge16$

Set

$$k=\lfloor S/2\rfloor,\qquad b=\lfloor A/3\rfloor,\qquad B=A-b-1,\qquad K=kB,\qquad p=\frac8{3D},\qquad e=\frac7{20}\sqrt{\frac{pK}{T}}.$$

There are $k$ paired bad/good states $(x_i,y_i)$. If $S$ is odd, include one additional bare routing state. Arrange the bad states and the optional bare state into a breadth-first rooted $b$-ary tree of height $h$. At each bad state, $B$ useful actions have reward zero and move to its good partner with probability $p$, otherwise staying put. The remaining $b+1$ actions route deterministically toward the parent or one of the $b$ child slots, with missing slots giving self-loops; their rewards are zero. At each good state all $A$ actions have reward one and move to the paired bad state with probability $p$, otherwise staying put. At the optional bare state use the same routing actions and duplicate them to obtain exactly $A$ actions, all with reward zero. This uses exactly $S$ states and exactly $A$ actions per state.

For each of the $K$ useful pairs $j$, environment $M_j$ changes just that pair's probability of entering its good state from $p$ to $p+e$. The baseline $M_0$ has no change. Fix the initial state at the bad root. Every environment is communicating.

### Tree height and diameter

For every integer $A\ge10$,

$$B\ge\frac7{12}A,\qquad B\le\frac23 A,\qquad b\ge A^{2/5},\qquad 2b^2\ge A^{6/5}.$$

For the first inequality, $A\ge12$ gives $B\ge2A/3-1\ge7A/12$, and $A=10,11$ are immediate. The second follows from $\lfloor A/3\rfloor\ge(A-2)/3$. For the last inequality, check $A=10,11,12,13$ directly; for $A\ge14$, $b\ge A/4$ and $A^{4/5}\ge8$, so $2b^2\ge A^2/8\ge A^{6/5}$. This last inequality implies $b\ge A^{2/5}$ because $A^{1/5}\ge\sqrt2$.

The number of tree vertices is $n=\lceil S/2\rceil$. If $h=2$, breadth-first filling implies $n\ge b+2$, so $S\ge2b+3\ge2A/3\ge A^{4/5}$ and hence $h\le(5/2)\log_A S$. If $h\ge3$, it implies $S\ge2b^{h-1}$, so

$$S\ge(2b^2)b^{h-3}\ge A^{6/5}A^{(2/5)(h-3)}=A^{2h/5}.$$

Thus always $h\le\max\{1,(5/2)\log_A S\}\le D/8$. The final inequality uses $D\ge16$ and $D\ge20\log_A S$. To hit a target good state from any state, first leave an initial good state if necessary (mean at most $1/p$), follow the tree path (at most $2h$ steps), and repeatedly take a useful action at the target bad state (mean at most $1/p$). Hitting bad or bare targets takes no longer. Consequently

$$\operatorname{diam}(M_j)\le\frac2p+2h\le\frac{3D}{4}+\frac D4=D.$$

### Optimal average reward and exact finite-horizon identity

In $M_j$ the optimal average reward is

$$\rho^*=\frac{p+e}{2p+e}=\frac12+\frac{e}{4p+2e}.$$

To prove this, take the function $v$ equal to $1/(2p+e)$ at every good state and zero elsewhere. At every state-action pair, $r+Pv-v\le\rho^*$: equality holds at good states and the special useful pair, ordinary useful pairs give $p/(2p+e)$, and routes give zero. Summing this inequality in conditional expectation gives average reward at most $\rho^*$, because $v$ is bounded. Routing to the special bad state and then always using its special action realizes the two-state chain with transitions $p+e$ and $p$, whose invariant good-state mass is $(p+e)/(2p+e)$. Its convergence in Cesàro mean follows directly from the two-state recurrence; the finite expected routing/hitting transient changes no average reward. This proves the formula.

Let $G_t$ be the indicator that the current state is good, let $U_t$ indicate a useful action at a bad state, and let $Q_t$ indicate a routing action (including every action at the bare state). Then $G_t+U_t+Q_t=1$ and

$$\mathbb E_j[G_{t+1}-G_t\mid\text{history, action}]=pU_t+e\mathbf1\{j\text{ used at }t\}-pG_t.$$

Rewards equal $G_t$. Since $G_1=0$, summing the equality gives the exact identity

$$\mathbb E_jR_T=\frac T2-\frac12\mathbb E_j\sum_{t=1}^TQ_t+\frac e{2p}\mathbb E_jN_j-\frac{\mathbb E_jG_{T+1}}{2p}.$$

In particular,

$$\mathbb E_j[T\rho^*-R_T]\ge\frac{eT}{4p+2e}-\frac e{2p}\mathbb E_jN_j.$$

There is no adverse additive initial-transient term. In the baseline, the same identity with $e=0$ yields

$$\sum_{j=1}^K\mathbb E_0N_j=\mathbb E_0\sum_tU_t=\frac T2-\frac12\mathbb E_0\sum_tQ_t+\frac{\mathbb E_0G_{T+1}}{2p}\le\frac T2+\frac1{2p}.$$

### Testing and constants

We have $k\ge5S/11$ (even $S$ is immediate, and odd $S\ge11$ gives $(S-1)/(2S)\ge5/11$), so

$$30\le K,\qquad \frac{35}{132}SA\le K\le\frac13 SA.$$

Because $pT\ge(8/3)SA$,

$$\frac ep\le\frac7{20\sqrt8}<\frac18,\qquad p\le\frac16,\qquad1-p-e\ge\frac{13}{16},\qquad\sum_j\mathbb E_0N_j\le\frac{51}{100}T.$$

For the last assertion $SA\ge100$ gives $1/(2pT)\le3/1600<1/100$. Applying the testing calculation and averaging over $j$ gives, with $m=51/100$,

$$\frac1K\sum_j\mathbb E_jN_j\le\frac{mT}{K}+\frac{Te}{2\sqrt{p(1-p-e)}}\sqrt{\frac{mT}{K}}.$$

Set $c=7/20$ and $L=\sqrt{KT/p}$. Combining the preceding inequalities yields

$$\frac1K\sum_j\mathbb E_j[T\rho^*-R_T]\ge L\left(\frac{c}{4+2e/p}-\frac{cm}{2K}-\frac{c^2}{4}\sqrt{\frac{m}{1-p-e}}\right).$$

Since $4+2e/p\le17/4$ and $\sqrt{(51/100)/(13/16)}<4/5$, the coefficient is greater than

$$\frac7{85}-\frac{119}{40000}-\frac{49}{2000}=0.054877941\ldots>\frac1{20}.$$

Therefore at least one $j$ satisfies

$$\mathbb E_j[T\rho^*-R_T]>\frac1{20}\sqrt{\frac{3D}{8}KT}\ge\frac1{20}\sqrt{\frac{35}{352}}\sqrt{DSAT}>0.015\sqrt{DSAT}.$$

The last coefficient is approximately $0.0157664$; alternatively square both positive sides to check it exactly.

## Small-diameter branch: $1\le D<16$

The parameter condition gives $A\ge S^{20/D}>S^{5/4}$, so $S/A<S^{-1/4}\le10^{-1/4}<3/5$. Put $B=A-S+1$ and $K=SB$; then $B>(2/5)A$ and $K>(2/5)SA\ge40$.

At each of the $S$ states give one deterministic action to every other state, using $S-1$ actions, and $B$ distinct self-loop actions. All rewards in the baseline are independent Bernoulli variables of mean $1/2$. For each of the $K$ self-loop pairs $j$, environment $M_j$ changes that pair's reward mean to $1/2+e$, where

$$e=\frac15\sqrt{K/T}\le\frac15.$$

The last inequality follows from $K\le SA\le T$ because $D\ge1$. Rewards may be generated independently conditional on state-action history; transitions are the same deterministic transitions in all environments. Every environment has diameter one and exactly the required numbers of states and actions. Its optimal average reward is $1/2+e$: no reward mean exceeds this, and the learner can reach the special state in at most one step and then repeatedly use its special self-loop. Start at any fixed state.

Here the testing calculation gives

$$\operatorname{KL}(P_0\Vert P_j)\le\frac{10}{3}e^2\mathbb E_0N_j,\qquad \frac1K\sum_j\mathbb E_jN_j\le\frac TK+Te\sqrt{\frac{5T}{3K}},$$

because $1/2-e\ge3/10$ and $\sum_j\mathbb E_0N_j\le T$. The expected regret in $M_j$ is exactly $e(T-\mathbb E_jN_j)$. Consequently

$$\frac1K\sum_j\mathbb E_j[T\rho^*-R_T]\ge\sqrt{KT}\left[\frac15\left(1-\frac1K\right)-\frac1{25}\sqrt{\frac53}\right]>\frac7{50}\sqrt{KT}.$$

Indeed, $K\ge40$ and $\sqrt{5/3}<13/10$ make the bracket at least $39/200-13/250=143/1000>7/50$. Thus at least one $j$ has regret greater than $(7/50)\sqrt{(2/5)SAT}$. Since $D<16$ and $(7/50)\sqrt{2/5}>0.06=4(0.015)$, this is greater than $0.015\sqrt{DSAT}$.

This completes the corrected minimax proof, including finite horizon, randomized algorithms, odd-state padding, exact action counts, both diameter ranges, and a constant strictly above the requested one. It does not authorize silently replacing the false original quantifiers or omitting the necessary diameter feasibility restriction.
