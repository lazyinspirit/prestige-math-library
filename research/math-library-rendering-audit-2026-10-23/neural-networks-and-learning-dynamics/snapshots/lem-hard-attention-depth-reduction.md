---
id: lem-hard-attention-depth-reduction
kind: lemma
title: "Hard-attention depth reduction under input restrictions"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-hahn-hard-soft-attention-sequence-model
  - thm-asymmetric-lovasz-local-lemma
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Hahn, Theoretical Limitations of Self-Attention in Neural Sequence Models, §5.1"
      url: "https://aclanthology.org/2020.tacl-1.11.pdf"
---

## Statement

Fix a finite content alphabet $\Sigma$ with $s=|\Sigma|\ge2$, a hard-attention model with fixed $H\ge1$ heads per position and $L\ge1$ layers, and an integer $c\ge1$. At length $n$, the model input is $(x_1,\ldots,x_{n-1},\mathtt{eos})$, with the end marker fixed at position $n$. An input restriction assigns each content position $i<n$ either $*$ (free) or a fixed symbol of $\Sigma$; its free positions are precisely the content positions marked $*$. Say that a layer-zero activation, including the activation at the end-marker position, depends on at most $c$ free positions if, with the restriction fixed, its value is determined by at most $c$ of the remaining free input symbols. Suppose the current restriction leaves at least $Cn$ content positions free for every sufficiently large $n$, where $0<C\le1$, and every layer-zero activation depends on at most $c$ free positions. For every $0<C'<C$, there are an integer $c'\ge1$ and a refinement, for every sufficiently large $n$, that leaves at least $C'n$ content positions free and preserves the model's output on every completion, while absorbing the first remaining attention layer into new layer-zero activations that each depend on at most $c'$ original content positions. Repeating this conclusion through the fixed $L$ layers gives a restriction with at least $C'n$ free content positions on which the output depends on at most a constant number of original content positions. The constants and the length threshold may depend on the fixed model, $c,C,C'$, but not on $n$.

## Statement references

[Hahn, §5.1: hard-attention depth reduction by input restrictions](https://aclanthology.org/2020.tacl-1.11.pdf)

## Facts & Assumptions

**Given:** A fixed hard-attention model, a current input restriction, and the free-input and $c$-dependence hypotheses in the Statement.

[F1] Every hard-attention head selects the earliest key position attaining its maximal score, and each positionwise update is shared across positions and depends on its skip input and selected head values ([[def-hahn-hard-soft-attention-sequence-model]]).

[F2] For a finite event family with dependency digraph $D$, if $0\le x_i<1$ and $\mathbb P(A_i)\le x_i\prod_{j\in N_D^+(i)}(1-x_j)$ for every event, then the probability that all events are avoided is positive ([[thm-asymmetric-lovasz-local-lemma]]).

[A1] In the probabilistic restriction stage, every still-free input symbol is independently fixed to each $a\in\Sigma$ with probability $q/s$, and left as $*$ with probability $1-q$; the finite input-coordinate sample space has the corresponding product law.

## Proof

1.1 Choose $0<\eta<1/4$ so that $(1-2\eta)C>C'$, then choose $0<\delta<1$ and $0<q<1/(1+\delta)$ so that $(1-(1+\delta)q)(1-2\eta)C>C'$. Put $D=\lceil c/(\eta C)\rceil$ and regard $k\ge1$ as an integer parameter whose finitely many lower bounds will be fixed after the local-lemma estimates. For each position $j$, choose a support $S_j$ of at most $c$ currently free input positions determining its layer-zero activation. There are at most $cn$ incidences between supports and positions. Fix every free input position occurring in more than $D$ supports, using any fixed symbol. At most $cn/D\le\eta Cn$ positions are fixed; afterwards every free input position belongs to at most $D$ supports. [given, construct, choose, algebra]

2.1 For a current restriction and query triple $(i,h,z)$, where $h$ is a head at position $i$ and $z$ is a possible layer-zero activation at $i$, at most $cD$ key positions have supports intersecting $S_i$; call these exceptional. For every other key position $j$, its support is disjoint from $S_i$, so the maximum score $m_j$ for query value $z$ is attainable by assigning its free support. Order these eligible positions by decreasing $m_j$, breaking ties by position, and put $R=\lceil cD(k+1)\rceil$. For all sufficiently large $n$, at least $R$ eligible positions exist. Greedily select $k$ among the first $R$ with pairwise disjoint supports: each choice removes at most $cD$ candidates because its support has at most $c$ symbols and each symbol occurs in at most $D$ supports. Record for each selected position a support assignment attaining its maximum. [step 1.1, F1, construct, algebra]

3.1 If a selected support is fixed to its recorded maximum-attaining assignment, that key's score is at least $m_R$. Every eligible position after the first $R$ has maximum score at most $m_R$; equality is resolved in favor of a position among the first $R$ by the chosen tie order. Hence a head's winner lies among the exceptional positions or the first $R$ eligible positions. The first-layer output at position $i$ is therefore determined by $S_i$ and the supports of at most $Hs^c(cD+R)$ candidate key positions, one set for each possible query activation, head, and key. It depends on at most $c'=c+Hs^c c(cD+R)$ original input positions. [step 2.1, F1, algebra]

3.2 Starting from the restriction in step 1.1, repeatedly recompute the candidate sets in step 2.1 for every still-uncaptured triple. When a triple is captured, retain its current exceptional set and first-$R$ eligible positions as its candidate set. Its assigned cutoff key remains at least as highly scored as every later position in the old eligible ordering, since refinements leave its score fixed and can only decrease other attainable maxima; any position that later leaves the eligible set was already in the retained exceptional set. If some key activation is selected in more than $s^c kH$ uncaptured triples, one of its at most $s^c$ possible values is a recorded maximum for more than $kH$ of them. Fix its at most $c$ free input symbols to a support assignment producing that value. The query values of those triples remain unchanged, so all become captured. There are at most $s^cHn$ triples, so this process has at most $s^c n/k$ refinements and fixes at most $s^c c n/k$ additional symbols. Require $k$ large enough that $s^c c/k\le\eta C$. At termination at least $(1-2\eta)Cn$ inputs remain free, and each key activation is selected in at most $T=s^c kH$ uncaptured triples. [step 1.1, step 2.1, algebra, choose]

4.1 For each uncaptured triple $t=(i,h,z)$, let $X_t$ be the event that none of its $k$ selected supports is fixed to its recorded maximum-attaining assignment by the random restriction [A1]. An assignment on $r\le c$ free symbols has probability $(q/s)^r\ge(q/s)^c$. The selected supports are pairwise disjoint, so these assignment events are independent and $\mathbb P(X_t)\le a^k$, where $a=1-(q/s)^c<1$. [step 2.1, step 3.2, A1, algebra]

4.2 Let $m$ be the number of free inputs after step 3.2 and let $X_0$ be the event that more than $(1+\delta)qm$ of them are fixed by [A1]. For $Z\sim\operatorname{Binomial}(m,q)$ and $\mu=mq$, exponential Markov at $t=\log(1+\delta)$ gives $\mathbb P(Z\ge(1+\delta)\mu)\le e^{-t(1+\delta)\mu}(1-q+qe^t)^m\le e^{-\mu((1+\delta)\log(1+\delta)-\delta)}\le e^{-\delta^2\mu/3}$. The middle inequality uses $1+u\le e^u$. For the last, $g(\delta)=(1+\delta)\log(1+\delta)-\delta-\delta^2/3$ has $g(0)=0$ and $g'(\delta)=\log(1+\delta)-2\delta/3\ge0$ on $[0,1]$, since $\log(1+\delta)\ge2\delta/(2+\delta)\ge2\delta/3$. Consequently $\mathbb P(X_0)\le e^{-\alpha n}$, where $\alpha=\delta^2q(1-2\eta)C/3>0$. [given, step 3.2, A1, algebra]

5.1 For each event $X_t$, take its defining-coordinate set to be the union of its query support and its $k$ selected key supports. Join two $X_t$ events when these sets overlap, and join $X_0$ to every $X_t$. Each coordinate occurs in at most $DHs^c$ query supports: at most $D$ position supports contain it, and each such position has at most $Hs^c$ head-and-query-value triples. It occurs in at most $Ds^cT$ selected key supports: each of at most $D$ position supports has at most $s^c$ possible key activations, and each activation is selected in at most $T$ triples by step 3.2. Each event uses at most $c(k+1)$ coordinates, so its degree is at most $f=1+c(k+1)D(Hs^c+s^cT)=O(k^2)$. Non-neighbours' defining-coordinate sets are disjoint from the event's set; product independence therefore gives independence from every conjunction of their complements, as required by [F2]. Set $x_{X_0}=1/2$ and $x_{X_t}=1/k^2$. Since $a=1-(q/s)^c<1$ and $f=O(k^2)$, the quantity $k^{-2}(1/2)(1-k^{-2})^f$ is bounded below by a positive constant times $k^{-2}$ for large $k$, whereas $a^k$ decays exponentially. Thus the local-lemma condition holds for every $X_t$ once $k$ is sufficiently large. [step 4.1, step 4.2, A1, F2, algebra, choose]

6.1 There are at most $s^cHn$ events other than $X_0$. Its local-lemma condition follows if $e^{-\alpha n}\le\tfrac12(1-k^{-2})^{s^cHn}$. Choose $k$ large enough that $s^cH[-\log(1-k^{-2})]<\alpha$; the inequality then holds for all sufficiently large $n$. The stage-two, local-event, and $X_0$ requirements are finitely many eventual lower bounds on $k$, so they hold simultaneously for sufficiently large $k$. By [F2], a refinement avoiding $X_0$ and every $X_t$ exists. [step 3.2, step 4.2, step 5.1, F2, algebra, choose]

7.1 Avoiding $X_0$ leaves at least $(1-(1+\delta)q)m\ge(1-(1+\delta)q)(1-2\eta)Cn>C'n$ free inputs by the choices in step 1.1. Avoiding every $X_t$ captures each remaining triple. For a captured triple, its retained cutoff key and candidate set from step 3.2 continue to block every later eligible position; for an uncaptured triple, step 6.1 fixes a cutoff key from its final candidate set. Step 3.1 therefore confines each head's winner to at most $cD+R$ candidate positions for each query value. Taking the union over at most $s^c$ query values and $H$ heads, together with the query support, gives the dependence bound $c'=c+Hs^c c(cD+R)$. Replacing each layer-zero activation by its first-layer output absorbs one layer while preserving the model's restricted computation. [step 1.1, step 3.1, step 3.2, step 6.1, given, algebra]

8.1 Apply the one-layer reduction successively to the fixed $L$ layers, choosing intermediate fractions $C=C_0>C_1>\cdots>C_L=C'$. Each stage has a finite dependence bound and a finite length threshold. Since $L$ is finite, their maximum threshold is finite; beyond it, the final restriction leaves at least $C'n$ inputs free and the final output depends on a bounded number of original inputs. This proves the Statement. [step 7.1, induction, choose, discharge-induction] ∎
