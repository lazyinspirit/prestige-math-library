---
id: lem-nrqm-composites-compatible-luders-repeatability
aliases: [nrqm-composites-compatible-luders-repeatability]
kind: lemma
domain: mathematics
title: "Compatible Lüders repeatability"
status: draft
origin: pipeline
dependency_level: 2
deps: [thm-nrqm-composites-joint-pvm-construction, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-nuclear-bounded-cyclicity, thm-trace-is-absolutely-convergent-and-basis-independent, def-hilbert-orthogonal-projection, def-countable-choice]
dependency_roles:
  thm-nrqm-composites-joint-pvm-construction: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §1.4 p. 15 (ideal measurement) and §6.1.1 pp. 108-109"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 4 'Dirac's Bra and Ket Notation' (projective measurements)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/4de6d044fa9d7e5b8998c5f8ca984a42_MIT8_05F13_Chap_04.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a nonzero complex Hilbert space, let $E,F$ be regular projection-valued measures on the Borel $\sigma$-algebra of $\mathbb R$ with $E(B)F(C)=F(C)E(B)$ for all Borel $B,C\subseteq\mathbb R$, and let $G$ be the joint projection-valued measure on the Borel $\sigma$-algebra of $\mathbb R^2$ with $G(B\times C)=E(B)F(C)$ and marginals $E,F$ ([[thm-nrqm-composites-joint-pvm-construction]]). Fix finite families of Borel sets $B_1,\dots,B_n$ with $B_i\cap B_k=\varnothing$ for $i\ne k$ and $C_1,\dots,C_m$ with $C_j\cap C_l=\varnothing$ for $j\ne l$, put

$$P_i:=E(B_i),\qquad Q_j:=F(C_j),\qquad R_{ij}:=P_iQ_j ,$$

and let $\rho$ be a density operator on $H$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]](a)). The listed projections are stipulated to be outcomes of ideal Lüders instruments, with outcome probabilities $\operatorname{tr}(\rho P_i)$ and post-measurement states $\rho_i:=P_i\rho P_i/\operatorname{tr}(\rho P_i)$ when $\operatorname{tr}(\rho P_i)>0$, and likewise for $(Q_j)$. If either listed family fails to sum to the identity, include its complementary projection $I-\sum_iP_i$ or $I-\sum_jQ_j$ as an additional outcome; only probabilities for the listed outcomes are displayed below. A sequential run measures the first instrument and then the second on the resulting state. Then:

(a) $P_i,Q_j$ and $R_{ij}$ are orthogonal projections ([[def-hilbert-orthogonal-projection]]), $R_{ij}=Q_jP_i=G(B_i\times C_j)$, and $P_iP_k=0$ for $i\ne k$, $Q_jQ_l=0$ for $j\ne l$, $R_{ij}R_{kl}=0$ whenever $(i,j)\ne(k,l)$.

(b) The probability of the listed ordered outcome pair $(i\ \text{then}\ j)$ equals, when $\operatorname{tr}(\rho P_i)>0$, $\operatorname{tr}(P_i\rho P_iQ_j)/\operatorname{tr}(\rho P_i)\cdot\operatorname{tr}(\rho P_i)=\operatorname{tr}(\rho R_{ij})$, and is zero if the first outcome has zero probability; the same number is obtained in the reversed order, so the sequential order of the two compatible sharp measurements gives the same masses to all listed outcome pairs:
$$\operatorname{tr}\bigl(P_i\rho P_iQ_j\bigr)=\operatorname{tr}\bigl(Q_j\rho Q_jP_i\bigr)=\operatorname{tr}(\rho R_{ij})=\operatorname{tr}\bigl(\rho\,G(B_i\times C_j)\bigr).$$

(c) If $\operatorname{tr}(\rho R_{ij})>0$, the conditional state after the pair is order-independent:
$$\frac{Q_jP_i\rho P_iQ_j}{\operatorname{tr}(\rho R_{ij})}=\frac{P_iQ_j\rho Q_jP_i}{\operatorname{tr}(\rho R_{ij})}=\frac{R_{ij}\,\rho\,R_{ij}}{\operatorname{tr}(\rho R_{ij})},$$
and it is a density operator.

(d) *Repeatability.* Under the positive-probability hypothesis $\operatorname{tr}(\rho R_{ij})>0$ of (c), with $\sigma:=R_{ij}\rho R_{ij}/\operatorname{tr}(\rho R_{ij})$ one has $\operatorname{tr}(\sigma R_{ij})=1$ and $\operatorname{tr}(\sigma P_i)=\operatorname{tr}(\sigma Q_j)=1$, and the Lüders update by $R_{ij}$, $P_i$ or $Q_j$ leaves $\sigma$ unchanged: $R_{ij}\sigma R_{ij}/\operatorname{tr}(\sigma R_{ij})=P_i\sigma P_i/\operatorname{tr}(\sigma P_i)=Q_j\sigma Q_j/\operatorname{tr}(\sigma Q_j)=\sigma$. Thus immediate repetition of the compatible pair, or of either single sharp measurement, reproduces the same outcomes with certainty.

(e) If $\bigcup_jC_j=\mathbb R$ then $\sum_j\operatorname{tr}(\rho R_{ij})=\operatorname{tr}(\rho P_i)$, and if $\bigcup_iB_i=\mathbb R$ then $\sum_i\operatorname{tr}(\rho R_{ij})=\operatorname{tr}(\rho Q_j)$: the joint law has the sharp-bin marginals.

(f) *Scope.* All of this is a conditional calculation for the stipulated ideal Lüders instrument and the joint PVM $G$; no claim is made that a laboratory apparatus realizes the Lüders instrument or the joint measurement, and no dynamical time development is described.
## Facts & Assumptions

**Given:** A nonzero complex Hilbert space $H$; regular PVMs $E,F$ with $E(B)F(C)=F(C)E(B)$; the joint PVM $G$; Borel sets $B_1,\dots,B_n$ and $C_1,\dots,C_m$ pairwise disjoint within each family; a density operator $\rho$; the projections $P_i,Q_j,R_{ij}$.

[F1] An orthogonal projection on $H$ is a bounded operator $P$ with $P^2=P=P^*$; for a PVM $E$ every value $E(B)$ is an orthogonal projection, $E(\varnothing)=0$, $E(\mathbb R)=I$, $E(B\cap C)=E(B)E(C)$, and $E$ is strongly countably additive ([[def-hilbert-orthogonal-projection]], [[thm-nrqm-composites-joint-pvm-construction]]).

[F2] $G$ is a regular PVM on the Borel $\sigma$-algebra of $\mathbb R^2$ with $G(B\times C)=E(B)F(C)$ for Borel rectangles and marginals $G(B\times\mathbb R)=E(B)$, $G(\mathbb R\times C)=F(C)$; it is the unique such PVM and every value $G(S)$ is an orthogonal projection with $0\le G(S)\le I$ ([[thm-nrqm-composites-joint-pvm-construction]]).

[F3] A density operator is a self-adjoint positive trace-class $\rho$ with $\operatorname{tr}\rho=1$; for every PVM $E$ on a measurable space the set function $\mu_\rho(S):=\operatorname{tr}(\rho E(S))$ is a probability measure, and in every expansion $\rho=\sum_nw_nT_{u_n,u_n}$ with orthonormal $(u_n)$ and weights $w_n\ge0$, $\sum_nw_n=1$, one has $\mu_\rho(S)=\sum_nw_n\|E(S)u_n\|^2$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]](a),(b)).

[F4] For bounded $B$ and trace-class $T$: $BT$ and $TB$ are trace class, $\operatorname{tr}(BT)=\operatorname{tr}(TB)$, $\operatorname{tr}$ is linear on trace-class operators, and $|\operatorname{tr}(BT)|\le\|B\|\,\|T\|_1$ ([[lem-nrqm-composites-nuclear-bounded-cyclicity]](b), [[thm-trace-is-absolutely-convergent-and-basis-independent]]).

[F5] The Lüders instrument and the sequential protocol of the Statement are stipulated; the conditional state is defined only when the corresponding probability is positive.

## Proof

1.1 [Sharp bins and their products are projections] By [F1], $P_i=E(B_i)$ and $Q_j=F(C_j)$ are orthogonal projections; $P_iP_k=E(B_i)E(B_k)=E(B_i\cap B_k)=E(\varnothing)=0$ for $i\ne k$ and $Q_jQ_l=0$ for $j\ne l$; the commutation hypothesis and [F2] give $P_iQ_j=E(B_i)F(C_j)=G(B_i\times C_j)=F(C_j)E(B_i)=Q_jP_i$, so $R_{ij}=P_iQ_j=Q_jP_i$ is self-adjoint ($R_{ij}^*=Q_j^*P_i^*=Q_jP_i=R_{ij}$) and idempotent ($R_{ij}^2=P_iQ_jP_iQ_j=P_i(P_iQ_j)Q_j=P_i^2Q_j^2=P_iQ_j$), hence an orthogonal projection; also $R_{ij}R_{kl}=P_iQ_jP_kQ_l=P_iP_kQ_jQ_l$ using commutation, which vanishes unless $i=k$ and $j=l$. [F1, F2, given, algebra]

1.2 [Trace and Born rules] For every bounded operator $B$ one has $\operatorname{tr}(\rho B)=\operatorname{tr}(B\rho)$, and $\operatorname{tr}(\rho\cdot)$ is linear in its bounded argument with $|\operatorname{tr}(\rho B)|\le\|B\|$; for every PVM and Borel set $S$ the number $\operatorname{tr}(\rho E(S))$ lies in $[0,1]$ and equals $\sum_nw_n\|E(S)u_n\|^2$ in any expansion of [F3], so $\operatorname{tr}(\rho R_{ij})=\operatorname{tr}(\rho G(B_i\times C_j))=\sum_nw_n\|G(B_i\times C_j)u_n\|^2$ and $\operatorname{tr}(\rho P_i)=\sum_nw_n\|P_iu_n\|^2$ are nonnegative and at most $1$. [F3, F4, algebra]

2.1 [Sequential Lüders probability] If $\operatorname{tr}(\rho P_i)>0$, measuring the first instrument gives listed outcome $i$ with probability $\operatorname{tr}(\rho P_i)$ and state $\rho_i=P_i\rho P_i/\operatorname{tr}(\rho P_i)$ (stipulated, [F5]); measuring then the second gives conditional probability $\operatorname{tr}(\rho_iQ_j)=\operatorname{tr}(P_i\rho P_iQ_j)/\operatorname{tr}(\rho P_i)$. Cyclicity and $P_iQ_j=Q_jP_i$, $P_i^2=P_i$ give $\operatorname{tr}(P_i\rho P_iQ_j)=\operatorname{tr}(\rho P_iQ_jP_i)=\operatorname{tr}(\rho P_iQ_j)$, so the probability of the listed pair is $\operatorname{tr}(\rho P_iQ_j)=\operatorname{tr}(\rho R_{ij})$ by step 1.1. When $\operatorname{tr}(\rho Q_j)>0$, the reversed order gives conditional probability $\operatorname{tr}(Q_j\rho Q_jP_i)/\operatorname{tr}(\rho Q_j)=\operatorname{tr}(\rho Q_jP_i)/\operatorname{tr}(\rho Q_j)=\operatorname{tr}(\rho R_{ij})/\operatorname{tr}(\rho Q_j)$; multiplying by the probability of the first outcome gives the same joint probability. If a listed first outcome has zero probability, then $0\le R_{ij}\le P_i,Q_j$ and the positive density expansion [F3] give $\operatorname{tr}(\rho R_{ij})=0$, so the listed pair has probability zero and no division is taken. [step 1.1, step 1.2, F3, F4, F5, algebra]

3.1 [Order-independent conditional state] Assume $\operatorname{tr}(\rho R_{ij})>0$; running $(P_i)$ then $(Q_j)$ produces the product of the two stipulated denominator-normalizations, i.e. the state $Q_jP_i\rho P_iQ_j/\operatorname{tr}(\rho R_{ij})$ (by the computation of step 2.1), while the reversed order produces $P_iQ_j\rho Q_jP_i/\operatorname{tr}(\rho R_{ij})$; by step 1.1 both numerators equal $R_{ij}\rho R_{ij}$ and the denominators are the same positive number, so the two conditional states coincide and equal $R_{ij}\rho R_{ij}/\operatorname{tr}(\rho R_{ij})$, which is a density operator because $R_{ij}\rho R_{ij}$ is positive trace class with trace $\operatorname{tr}(\rho R_{ij})>0$ [F3, F4]. [step 1.1, step 2.1, F3, F4, algebra]

3.2 [Marginals of the joint law] If $\bigcup_jC_j=\mathbb R$, the finite additivity of a PVM gives $\sum_jQ_j=F(\bigcup_jC_j)=F(\mathbb R)=I$ [F1], so $\sum_j\operatorname{tr}(\rho P_iQ_j)=\operatorname{tr}(\rho P_i\sum_jQ_j)=\operatorname{tr}(\rho P_i)$ by linearity of $\operatorname{tr}(\rho\cdot)$ and the ideal property [F4]; symmetrically $\sum_i\operatorname{tr}(\rho P_iQ_j)=\operatorname{tr}(\rho Q_j)$ when $\bigcup_iB_i=\mathbb R$, so the joint law has the sharp-bin marginals. [step 1.1, step 2.1, F1, F4, algebra]

4.1 [Repeatability] Let $\sigma:=R_{ij}\rho R_{ij}/\operatorname{tr}(\rho R_{ij})$ from step 3.1. Then $\operatorname{tr}(\sigma R_{ij})=\operatorname{tr}(R_{ij}\rho R_{ij}R_{ij})/\operatorname{tr}(\rho R_{ij})=\operatorname{tr}(\rho R_{ij})/\operatorname{tr}(\rho R_{ij})=1$ since $R_{ij}^2=R_{ij}$ and $R_{ij}R_{ij}R_{ij}=R_{ij}$ [step 1.1, F4]; likewise $\operatorname{tr}(\sigma P_i)=\operatorname{tr}(P_iR_{ij}\rho R_{ij}P_i)/\operatorname{tr}(\rho R_{ij})=\operatorname{tr}(R_{ij}\rho R_{ij})/\operatorname{tr}(\rho R_{ij})=1$ because $P_iR_{ij}=R_{ij}=R_{ij}P_i$, and $\operatorname{tr}(\sigma Q_j)=1$ the same way. Hence the Lüders updates $R_{ij}\sigma R_{ij}/\operatorname{tr}(\sigma R_{ij})$, $P_i\sigma P_i/\operatorname{tr}(\sigma P_i)$ and $Q_j\sigma Q_j/\operatorname{tr}(\sigma Q_j)$ all return the same state: e.g. $R_{ij}\sigma R_{ij}=R_{ij}^3\rho R_{ij}^3/\operatorname{tr}(\rho R_{ij})=R_{ij}\rho R_{ij}/\operatorname{tr}(\rho R_{ij})=\sigma$ and the denominators equal $1$, and similarly $P_i\sigma P_i=P_iR_{ij}\rho R_{ij}P_i/\operatorname{tr}(\rho R_{ij})=R_{ij}\rho R_{ij}/\operatorname{tr}(\rho R_{ij})=\sigma$ and $Q_j\sigma Q_j=\sigma$. Thus an immediate repetition of the pair, or of either single sharp measurement, returns the same outcome with probability $1$. [step 1.1, step 3.1, F4, algebra]

5.1 [Scope] Steps 2.1-4.1 are conditional computations inside the stipulated Lüders instrument and the joint PVM $G$ of [F2]; they assert joint probabilities, order independence and repeatability for that ideal model only, with no laboratory realization, no nonselective statement beyond step 3.2, and no time development. [step 4.1, F2, F5, algebra] ∎
