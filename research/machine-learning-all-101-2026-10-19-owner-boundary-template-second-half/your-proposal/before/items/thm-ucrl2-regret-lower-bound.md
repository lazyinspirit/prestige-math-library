---
id: thm-ucrl2-regret-lower-bound
kind: theorem
title: "Expected regret lower bound for communicating MDPs"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps: [def-average-reward-and-regret, def-communicating-mdp-and-diameter, thm-pinsker, thm-total-variation-bounds-for-expectations, def-kullback-leibler-divergence, def-axiom-of-choice]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - {title: "Thomas Jaksch, Ronald Ortner, and Peter Auer, Near-optimal Regret Bounds for Reinforcement Learning", url: "https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf", locator: "Theorem 5 (PDF lines 342–347); §6, two-state/tree construction (PDF lines 2247–2449); Appendix E, proof of Lemma 13 (PDF lines 4506–4944)."}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice inherited by the probability and Pinsker suppliers. Here a learning algorithm is not given the unknown MDP's reward or transition laws and, at each time, uses a fixed measurable probability kernel from the observed finite history to the admissible actions, the same kernel in every environment; its action randomization is independent of unexposed MDP samples. For all integers $S,A\ge10$, all real $D\ge\max\{1,20\log_A S\}$, all integers $T\ge DSA$, every such learning algorithm, and every prescribed initial state label, there exists a finite communicating MDP with exactly $S$ states including that label, exactly $A$ actions in each state, rewards in $[0,1]$, and normalized diameter at most $D$, such that the algorithm's expected regret from that initial state satisfies
$$\mathbb E[T\rho^*-R_T]\ge0.015\sqrt{DSAT}.$$
The MDP may depend on the algorithm, parameters, and prescribed initial state. The original planned statement with reversed minimax quantifiers and no feasibility condition $D\ge1$ is false; it is retained and refuted below.

## Statement references

[[def-average-reward-and-regret]].

[[def-communicating-mdp-and-diameter]].

[[thm-pinsker]].

[[thm-total-variation-bounds-for-expectations]].

[[def-kullback-leibler-divergence]].

[Jaksch, Ortner, and Auer](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf), Theorem 5, Section 6, and Appendix E. The exact constant and parameter transfer below use a strengthened local construction; the paper's displayed $0.015\sqrt{D'kA'T}$ line alone does not prove the constant under its full parameter substitution.

[Axiom of Choice](../items/def-axiom-of-choice.md): assumed for the probability and Pinsker suppliers.

## Facts & Assumptions

**Given:** The parameters, arbitrary algorithm (including measurable randomized action kernels), and prescribed initial state label in the Statement.

[F1] [[def-average-reward-and-regret]]: expected regret is $T\rho^*-\mathbb E R_T$.

[F2] [[def-communicating-mdp-and-diameter]]: hitting time starts at zero, and normalized diameter is the maximum of one and the raw ordered-pair hitting diameter.

[F3] [[thm-pinsker]]: event-supremum total variation is at most $\sqrt{\operatorname{KL}(P\Vert Q)/2}$.

[F4] [[thm-total-variation-bounds-for-expectations]]: a function in $[0,T]$ has expectation difference at most $T$ times event-supremum total variation.

[F5] [[def-kullback-leibler-divergence]]: relative entropy uses natural logarithms.

[A1] [[def-axiom-of-choice]]: AC is inherited for path laws and [F3]. All constructions and testing calculations below have finite state/action/reward histories.

## Proof

1.1 We use the proved local Pinsker inequality and the total-variation bound for expectations. All remaining probability calculations are supplied here. Write $\operatorname{kl}(p,q)$ for Bernoulli relative entropy. For $0<p<p+e<1$, $$\operatorname{kl}(p,p+e)=\int_p^{p+e}\frac{x-p}{x(1-x)}\,dx\le\frac{e^2}{2p(1-p-e)}.$$ Indeed, differentiating $p\log(p/x)+(1-p)\log((1-p)/(1-x))$ gives the integrand, and $x(1-x)\ge p(1-p-e)$ on the integration interval. Suppose two environments differ only at a single state-action pair $j$, at which one Bernoulli observation parameter changes from $p$ to $p+e$. Let $P_0$ and $P_j$ be their complete histories through the $T$th transition/reward, and let $N_j$ count uses of pair $j$. Their likelihood ratio is the product of the changed Bernoulli likelihood ratios at those uses. The initial law and all conditional action kernels are identical and cancel, including for randomized algorithms. Taking logarithms, conditioning on each past history and selected action, and summing gives exactly $$\operatorname{KL}(P_0\Vert P_j)=\mathbb E_0[N_j]\operatorname{kl}(p,p+e).$$ There is no absolute-continuity issue because both Bernoulli parameters lie strictly between zero and one and every unchanged kernel has the same support. The displayed identity also follows directly by expanding the finite history probabilities; all rewards used below have finite support. Since $0\le N_j\le T$, Pinsker implies $$\mathbb E_jN_j\le\mathbb E_0N_j+T\sqrt{\operatorname{KL}(P_0\Vert P_j)/2}.$$ For a family of $K$ candidate pairs with $n_j=\mathbb E_0N_j$ and $\sum_j n_j\le mT$, Cauchy–Schwarz gives $K^{-1}\sum_j\sqrt{n_j}\le\sqrt{mT/K}$. These arguments hold for every algorithm without a deterministic-policy reduction. [given, F3, F4, F5, A1, construct, algebra]

2.1 First suppose $D\ge16$. In this branch, set $$k=\lfloor S/2\rfloor,\qquad b=\lfloor A/3\rfloor,\qquad B=A-b-1,\qquad K=kB,\qquad p=\frac8{3D},\qquad e=\frac7{20}\sqrt{\frac{pK}{T}}.$$ There are $k$ paired bad/good states $(x_i,y_i)$. If $S$ is odd, include one additional bare routing state. Arrange the bad states and the optional bare state into a breadth-first rooted $b$-ary tree of height $h$. At each bad state, $B$ useful actions have reward zero and move to its good partner with probability $p$, otherwise staying put. The remaining $b+1$ actions route deterministically toward the parent or one of the $b$ child slots, with missing slots giving self-loops; their rewards are zero. At each good state all $A$ actions have reward one and move to the paired bad state with probability $p$, otherwise staying put. At the optional bare state use the same routing actions and duplicate them to obtain exactly $A$ actions, all with reward zero. This uses exactly $S$ states and exactly $A$ actions per state. For each of the $K$ useful pairs $j$, environment $M_j$ changes just that pair's probability of entering its good state from $p$ to $p+e$. The baseline $M_0$ has no change. Fix the initial state at the bad root. Every environment is communicating. [given, step 1.1, F2, construct, algebra]

3.1 For every integer $A\ge10$, $$B\ge\frac7{12}A,\qquad B\le\frac23 A,\qquad b\ge A^{2/5},\qquad 2b^2\ge A^{6/5}.$$ For the first inequality, $A\ge12$ gives $B\ge2A/3-1\ge7A/12$, and $A=10,11$ are immediate. The second follows from $\lfloor A/3\rfloor\ge(A-2)/3$. For the last inequality, check $A=10,11,12,13$ directly; for $A\ge14$, $b\ge A/4$ and $A^{4/5}\ge8$, so $2b^2\ge A^2/8\ge A^{6/5}$. This last inequality implies $b\ge A^{2/5}$ because $A^{1/5}\ge\sqrt2$. The number of tree vertices is $n=\lceil S/2\rceil$. If $h=2$, breadth-first filling implies $n\ge b+2$, so $S\ge2b+3\ge2A/3\ge A^{4/5}$ and hence $h\le(5/2)\log_A S$. If $h\ge3$, it implies $S\ge2b^{h-1}$, so $$S\ge(2b^2)b^{h-3}\ge A^{6/5}A^{(2/5)(h-3)}=A^{2h/5}.$$ Thus always $h\le\max\{1,(5/2)\log_A S\}\le D/8$. The final inequality uses $D\ge16$ and $D\ge20\log_A S$. To hit a target good state from any state, first leave an initial good state if necessary (mean at most $1/p$), follow the tree path (at most $2h$ steps), and repeatedly take a useful action at the target bad state (mean at most $1/p$). Hitting bad or bare targets takes no longer. Consequently $$\operatorname{diam}(M_j)\le\frac2p+2h\le\frac{3D}{4}+\frac D4=D.$$ [given, step 2.1, F2, construct, algebra]

4.1 In $M_j$ the optimal average reward is $$\rho^*=\frac{p+e}{2p+e}=\frac12+\frac{e}{4p+2e}.$$ To prove this, take the function $v$ equal to $1/(2p+e)$ at every good state and zero elsewhere. At every state-action pair, $r+Pv-v\le\rho^*$: equality holds at good states and the special useful pair, ordinary useful pairs give $p/(2p+e)$, and routes give zero. Summing this inequality in conditional expectation gives average reward at most $\rho^*$, because $v$ is bounded. Routing to the special bad state and then always using its special action realizes the two-state chain with transitions $p+e$ and $p$, whose invariant good-state mass is $(p+e)/(2p+e)$. Its convergence in Cesàro mean follows directly from the two-state recurrence; the finite expected routing/hitting transient changes no average reward. This proves the formula. Let $G_t$ be the indicator that the current state is good, let $U_t$ indicate a useful action at a bad state, and let $Q_t$ indicate a routing action (including every action at the bare state). Then $G_t+U_t+Q_t=1$ and $$\mathbb E_j[G_{t+1}-G_t\mid\text{history, action}]=pU_t+e\mathbf1\{j\text{ used at }t\}-pG_t.$$ Rewards equal $G_t$. Since $G_1=0$, summing the equality gives the exact identity $$\mathbb E_jR_T=\frac T2-\frac12\mathbb E_j\sum_{t=1}^TQ_t+\frac e{2p}\mathbb E_jN_j-\frac{\mathbb E_jG_{T+1}}{2p}.$$ In particular, $$\mathbb E_j[T\rho^*-R_T]\ge\frac{eT}{4p+2e}-\frac e{2p}\mathbb E_jN_j.$$ There is no adverse additive initial-transient term. In the baseline, the same identity with $e=0$ yields $$\sum_{j=1}^K\mathbb E_0N_j=\mathbb E_0\sum_tU_t=\frac T2-\frac12\mathbb E_0\sum_tQ_t+\frac{\mathbb E_0G_{T+1}}{2p}\le\frac T2+\frac1{2p}.$$ [given, step 2.1, step 3.1, F1, construct, algebra]

5.1 We have $k\ge5S/11$ (even $S$ is immediate, and odd $S\ge11$ gives $(S-1)/(2S)\ge5/11$), so $$30\le K,\qquad \frac{35}{132}SA\le K\le\frac13 SA.$$ Because $pT\ge(8/3)SA$, $$\frac ep\le\frac7{20\sqrt8}<\frac18,\qquad p\le\frac16,\qquad1-p-e\ge\frac{13}{16},\qquad\sum_j\mathbb E_0N_j\le\frac{51}{100}T.$$ For the last assertion $SA\ge100$ gives $1/(2pT)\le3/1600<1/100$. Applying the testing calculation and averaging over $j$ gives, with $m=51/100$, $$\frac1K\sum_j\mathbb E_jN_j\le\frac{mT}{K}+\frac{Te}{2\sqrt{p(1-p-e)}}\sqrt{\frac{mT}{K}}.$$ Set $c=7/20$ and $L=\sqrt{KT/p}$. Combining the preceding inequalities yields $$\frac1K\sum_j\mathbb E_j[T\rho^*-R_T]\ge L\left(\frac{c}{4+2e/p}-\frac{cm}{2K}-\frac{c^2}{4}\sqrt{\frac{m}{1-p-e}}\right).$$ Since $4+2e/p\le17/4$ and $\sqrt{(51/100)/(13/16)}<4/5$, the coefficient is greater than $$\frac7{85}-\frac{119}{40000}-\frac{49}{2000}=0.054877941\ldots>\frac1{20}.$$ Therefore at least one $j$ satisfies $$\mathbb E_j[T\rho^*-R_T]>\frac1{20}\sqrt{\frac{3D}{8}KT}\ge\frac1{20}\sqrt{\frac{35}{352}}\sqrt{DSAT}>0.015\sqrt{DSAT}.$$ The last coefficient is approximately $0.0157664$; alternatively square both positive sides to check it exactly. [given, step 1.1, step 2.1, step 3.1, step 4.1, F1, F3, F4, F5, construct, algebra]

6.1 Now suppose $1\le D<16$, the remaining allowed diameter range. The parameter condition gives $A\ge S^{20/D}>S^{5/4}$, so $S/A<S^{-1/4}\le10^{-1/4}<3/5$. Put $B=A-S+1$ and $K=SB$; then $B>(2/5)A$ and $K>(2/5)SA\ge40$. At each of the $S$ states give one deterministic action to every other state, using $S-1$ actions, and $B$ distinct self-loop actions. All rewards in the baseline are independent Bernoulli variables of mean $1/2$. For each of the $K$ self-loop pairs $j$, environment $M_j$ changes that pair's reward mean to $1/2+e$, where $$e=\frac15\sqrt{K/T}\le\frac15.$$ The last inequality follows from $K\le SA\le T$ because $D\ge1$. Rewards may be generated independently conditional on state-action history; transitions are the same deterministic transitions in all environments. Every environment has diameter one and exactly the required numbers of states and actions. Its optimal average reward is $1/2+e$: no reward mean exceeds this, and the learner can reach the special state in at most one step and then repeatedly use its special self-loop. Start at any fixed state. Here the testing calculation gives $$\operatorname{KL}(P_0\Vert P_j)\le\frac{10}{3}e^2\mathbb E_0N_j,\qquad \frac1K\sum_j\mathbb E_jN_j\le\frac TK+Te\sqrt{\frac{5T}{3K}},$$ because $1/2-e\ge3/10$ and $\sum_j\mathbb E_0N_j\le T$. The expected regret in $M_j$ is exactly $e(T-\mathbb E_jN_j)$. Consequently $$\frac1K\sum_j\mathbb E_j[T\rho^*-R_T]\ge\sqrt{KT}\left[\frac15\left(1-\frac1K\right)-\frac1{25}\sqrt{\frac53}\right]>\frac7{50}\sqrt{KT}.$$ Indeed, $K\ge40$ and $\sqrt{5/3}<13/10$ make the bracket at least $39/200-13/250=143/1000>7/50$. Thus at least one $j$ has regret greater than $(7/50)\sqrt{(2/5)SAT}$. Since $D<16$ and $(7/50)\sqrt{2/5}>0.06=4(0.015)$, this is greater than $0.015\sqrt{DSAT}$. Label the bad root in the large-diameter construction by the prescribed initial state; in the small-diameter construction any prescribed initial state works. Thus both branches prove the stated quantifiers. [given, step 1.1, step 5.1, F1, F2, F3, F4, F5, construct, algebra] ∎

## Original planned statement

There is a universal constant $c=0.015$ such that for every $S,A\ge10$, every $D\ge20\log_A S$, and every integer $T\ge DSA$, some finite communicating MDP with $S$ states, exactly $A$ actions per state, rewards in $[0,1]$, and diameter at most $D$ forces every learning algorithm to have expected regret at least $c\sqrt{DSAT}$.

## Refutation

7.1 Take $S=10$, $A=10^{40}$, $D=1/2$, and any integer $T\ge DSA$. These parameters satisfy $S,A\ge10$ and $D=20\log_A S$. For any two distinct states $x,y$, the hitting time $\tau_y$ from $x$ is at least one on every path, so its expectation under every policy is at least one. Thus every ten-state communicating MDP has raw diameter at least one, and [F2] also makes its normalized diameter at least one. [given, F2, construct, algebra, step 6.1]

8.1 No MDP with the required state count has diameter at most $1/2$. Consequently the existential MDP in the original planned statement does not exist for the admissible parameters of step 7.1, regardless of the algorithm or the constant. This refutes the exact original statement. Its phrase “some MDP ... every learning algorithm” additionally reverses the minimax quantifiers: the proof above establishes an MDP chosen after the learning rule, not a single environment hard for all rules. [given, F2, step 7.1, algebra] ∎

## Remarks

The lower bound is for expected regret. It asserts no high-probability lower-tail event. The coefficient $0.015$ is retained: the large-diameter calculation gives more than $\frac1{20}\sqrt{35/352}\sqrt{DSAT}>0.015\sqrt{DSAT}$, with the small-diameter calculation stronger still. The explicit feasibility restriction and minimax quantifiers repair a false original statement; they are not inferences from the primary proof's deficient constant-transfer line.
