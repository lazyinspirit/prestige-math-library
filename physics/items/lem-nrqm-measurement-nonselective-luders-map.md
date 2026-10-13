---
id: lem-nrqm-measurement-nonselective-luders-map
aliases: [nrqm-measurement-nonselective-luders-map]
kind: lemma
domain: mathematics
title: "The non-selective Lueders map and the discarded-outcome ensemble"
status: published
origin: pipeline
dependency_level: 3
deps: [def-countable-choice, def-hilbert-orthogonal-projection, def-hilbert-space, def-self-adjoint-positive-unitary-and-normal-operator, def-trace-class-operator, def-trace-of-a-trace-class-operator, lem-nrqm-composites-countable-kraus-normalization, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-nuclear-bounded-cyclicity, lem-nrqm-composites-rank-one-operator-calculus, lem-nrqm-measurement-selective-luders-update, thm-trace-class-is-a-two-sided-banach-operator-ideal]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  lem-nrqm-composites-countable-kraus-normalization: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-measurement-selective-luders-update: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter 3 'Foundations II: Measurement and Evolution' (updated July 2015), Section 3.2.1, printed pages 11-14 (the operator-sum map (3.32) obtained by failing to record the outcome)"
      url: "https://preskill.caltech.edu/ph219/chap3_15.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.3, printed pages 76-77 (measurement outcomes and the post-measurement state)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a nonzero complex Hilbert space ([[def-hilbert-space]]), let $(P_{a})_{a\in A}$ be a finite or countably infinite family of pairwise orthogonal orthogonal projections on $H$ ([[def-hilbert-orthogonal-projection]]) whose strong sum is the identity,
$$\sum_{a\in A}P_{a}x=x\qquad(x\in H),$$
let $\rho$ be a density operator ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a)), and put $p_{a}:=\operatorname{tr}(\rho P_{a})$. Define the **non-selective Lueders map**
$$\Phi(\rho):=\sum_{a\in A}P_{a}\rho P_{a}.$$
Then:

(a) the series converges in trace norm; $\Phi(\rho)$ is a positive trace-class operator with $\operatorname{tr}\Phi(\rho)=1$, hence a density operator, and $\Phi(\rho)=\sum_{a}P_{a}\Phi(\rho)P_{a}$;

(b) for every $b$, $P_{b}\Phi(\rho)=\Phi(\rho)P_{b}=P_{b}\Phi(\rho)P_{b}=P_{b}\rho P_{b}$; in particular $\Phi(\rho)$ commutes with every $P_{b}$;

(c) *discarded-outcome ensemble.* $\Phi(\rho)=\sum_{a:p_{a}>0}p_{a}\rho_{a}$, where $\rho_{a}=P_{a}\rho P_{a}/p_{a}$ is the selective update of [[lem-nrqm-measurement-selective-luders-update]]; the series converges in trace norm;

(d) if $B\in\mathcal B(H)$ is bounded and $P_{a}B=BP_{a}$ for every $a$, then $\operatorname{tr}(\Phi(\rho)B)=\operatorname{tr}(\rho B)$;

(e) if $\psi=\alpha u+\beta v$ with $u,v$ orthonormal, $u\in\operatorname{ran}P_{1}$, $v\in\operatorname{ran}P_{2}$ for distinct labels $1\ne2$, and $\rho=T_{\psi,\psi}$, then $\Phi(\rho)=|\alpha|^{2}T_{u,u}+|\beta|^{2}T_{v,v}$, and
$$\operatorname{tr}\bigl(\Phi(\rho)(T_{u,v}+T_{v,u})\bigr)=0,\qquad \operatorname{tr}\bigl(\rho\,(T_{u,v}+T_{v,u})\bigr)=2\operatorname{Re}(\alpha\overline{\beta});$$

(f) if $\rho=T_{\psi,\psi}$ for a nonzero $\psi$ then $\Phi(\rho)=\sum_{a:P_{a}\psi\ne0}\|P_{a}\psi\|^{2}\,T_{\nu(P_{a}\psi),\nu(P_{a}\psi)}$ where $\nu:H\setminus\{0\}\to H$ is the normalization map $\nu(x):=x/\|x\|$, the series converging in trace norm.

No physical interpretation of the map is asserted.

## Facts & Assumptions

**Given:** A nonzero complex Hilbert space $H$; pairwise orthogonal projections $(P_{a})_{a\in A}$ with strong sum $I$; a density operator $\rho$; probabilities $p_{a}=\operatorname{tr}(\rho P_{a})$; a bounded operator $B$ commuting with every $P_{a}$; a vector $\psi=\alpha u+\beta v$.

[F1] **Countable Kraus normalization.** If $(M_{a})$ is a finite or countable family of bounded operators with $\sum_{a}M_{a}^{*}M_{a}\to I$ strongly, then $\sum_{a}\|M_{a}x\|^{2}=\|x\|^{2}$ for every $x$; for every positive trace-class $\rho$ the series $\sum_{a}M_{a}\rho M_{a}^{*}$ converges in trace norm to a positive trace-class operator with trace $\operatorname{tr}\rho$; the map extends uniquely to a trace-preserving linear positive map of the trace-class operators, and it maps density operators to density operators ([[lem-nrqm-composites-countable-kraus-normalization]] clauses (a)-(c)).

[F2] **Orthogonal projections and orthogonality.** Each $P_{a}$ satisfies $P_{a}^{2}=P_{a}=P_{a}^{*}$ and $P_{a}P_{b}=0$ for $a\ne b$; $\|P_{a}\|\le1$; the hypothesis of the Statement is that the finite partial sums $\sum_{a\le N}P_{a}$ converge strongly to $I$ ([[def-hilbert-orthogonal-projection]]).

[F3] **Zero-probability summands vanish.** If $p_{a}=\operatorname{tr}(\rho P_{a})=0$, then $P_{a}\rho P_{a}=0$. Indeed, using the expansion [F3'] and trace-norm continuity of left and right multiplication by $P_{a}$, $P_{a}\rho P_{a}=\sum_{n}w_{n}T_{P_{a}u_{n},P_{a}u_{n}}$ with trace $\sum_{n}w_{n}\|P_{a}u_{n}\|^{2}=\operatorname{tr}(\rho P_{a})=0$ ([[lem-nrqm-composites-rank-one-operator-calculus]] clauses (b) and (d)); every summand is nonnegative, so each summand vanishes and the series is $0$.

[F3'] **Expansion of a density operator.** $\rho=\sum_{n}w_{n}T_{u_{n},u_{n}}$ with $(u_{n})$ a finite or countable orthonormal family and $w_{n}\ge0$, $\sum_{n}w_{n}=1$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a)).

[F4] **Rank-one calculus.** $T_{u,v}x=\langle x,v\rangle u$ is trace class with $\operatorname{tr}(T_{u,v})=\langle u,v\rangle$; for bounded $B$, $BT_{u,v}=T_{Bu,v}$ and $T_{u,v}B=T_{u,B^{*}v}$ ([[lem-nrqm-composites-rank-one-operator-calculus]] clauses (b)-(d)). For every $x,y\in H$, $T_{x,x}^{*}=T_{x,x}$ and $\langle T_{x,x}y,y\rangle=|\langle y,x\rangle|^{2}\ge0$, so $T_{x,x}$ is positive by [[def-self-adjoint-positive-unitary-and-normal-operator]].

[F5] **Trace-class ideal and cyclicity.** For bounded $B$ and trace-class $T$, $BT$ and $TB$ are trace class with $\operatorname{tr}(BT)=\operatorname{tr}(TB)$ ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]], [[lem-nrqm-composites-nuclear-bounded-cyclicity]] clause (b)).

[F6] **Selective update.** For a single projection $P$ with $\operatorname{tr}(\rho P)>0$ the operator $\rho_{P}=P\rho P/\operatorname{tr}(\rho P)$ is a density operator with $P\rho_{P}P=\rho_{P}$ and $Q\rho_{P}Q=0$ for every projection $Q$ with $QP=0$ ([[lem-nrqm-measurement-selective-luders-update]] clauses (a)-(c)).

## Proof

1.1 [The map is the projection Kraus map] For each $a$, $P_{a}^{*}P_{a}=P_{a}^{2}=P_{a}$ by [F2], so $\sum_{a\le N}P_{a}^{*}P_{a}=\sum_{a\le N}P_{a}\to I$ strongly: the hypothesis of [F1] holds with $M_{a}=P_{a}$. Therefore $\Phi(\rho)=\sum_{a}P_{a}\rho P_{a}$ converges in trace norm, is positive trace class with $\operatorname{tr}\Phi(\rho)=\operatorname{tr}\rho=1$, and is a density operator. This proves the first part of (a). [given, F1, F2, algebra]

2.1 [The compressed identity] Fix $b$. Left and right multiplication by the bounded operator $P_{b}$ are continuous in trace norm, since $\|P_{b}T\|_{1}\le\|P_{b}\|\,\|T\|_{1}$ and $\|TP_{b}\|_{1}\le\|P_{b}\|\,\|T\|_{1}$ for trace-class $T$ ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]]); applying this to the trace-norm convergent series of step 1.1 gives $P_{b}\Phi(\rho)=\sum_{a}P_{b}P_{a}\rho P_{a}$ and $\Phi(\rho)P_{b}=\sum_{a}P_{a}\rho P_{a}P_{b}$. Since $P_{b}P_{a}=0$ for $a\ne b$ and $P_{b}^{2}=P_{b}$ [F2], all summands vanish except $a=b$, and that summand is $P_{b}\rho P_{b}$; hence $P_{b}\Phi(\rho)=P_{b}\rho P_{b}=\Phi(\rho)P_{b}$ and therefore $P_{b}\Phi(\rho)P_{b}=P_{b}\rho P_{b}$. Summing the identity $P_{b}\Phi(\rho)P_{b}=P_{b}\rho P_{b}$ over $b$ and using step 1.1 once more gives $\Phi(\rho)=\sum_{b}P_{b}\Phi(\rho)P_{b}$. This proves (a) and (b). [step 1.1, F1, F2, F5, algebra]

2.2 [The discarded-outcome mixture] For a label $a$ with $p_{a}>0$, [F6] gives $P_{a}\rho P_{a}=p_{a}\rho_{a}$ with $\rho_{a}$ a density operator, and [F3] gives $P_{a}\rho P_{a}=0$ for a label with $p_{a}=0$. Hence the summands with $p_{a}=0$ vanish and, reindexing the trace-norm convergent series of step 1.1 over the subfamily $\{a:p_{a}>0\}$, $\Phi(\rho)=\sum_{a:p_{a}>0}p_{a}\rho_{a}$. This is (c). [step 1.1, F3, F6, algebra]

2.3 [Invariance under compatible bounded quantities] Let $B$ be bounded with $P_{a}B=BP_{a}$ for every $a$. Then $P_{a}B\rho P_{a}=BP_{a}\rho P_{a}$ and, using the trace-norm continuity of left multiplication by $B$ together with step 1.1, $B\Phi(\rho)=\sum_{a}P_{a}(B\rho)P_{a}$. The right-hand side is the Kraus map of [F1] evaluated at the trace-class operator $B\rho$, so $\operatorname{tr}(B\Phi(\rho))=\operatorname{tr}\Phi(B\rho)=\operatorname{tr}(B\rho)$ by trace preservation; since $\operatorname{tr}(\Phi(\rho)B)=\operatorname{tr}(B\Phi(\rho))$ [F5], this gives $\operatorname{tr}(\Phi(\rho)B)=\operatorname{tr}(\rho B)$. This is (d). [step 1.1, F1, F5, algebra]

3.1 [Coherence destruction] Let $\psi=\alpha u+\beta v$ with $u,v$ orthonormal, $u\in\operatorname{ran}P_{1}$ and $v\in\operatorname{ran}P_{2}$, $1\ne2$, and $\rho=T_{\psi,\psi}$. For $a\notin\{1,2\}$ one has $P_{a}u=P_{a}P_{1}u=0$ and $P_{a}v=P_{a}P_{2}v=0$ by [F2], so $P_{a}\psi=0$; and $P_{1}\psi=\alpha u$, $P_{2}\psi=\beta v$. Hence the series has only two nonzero summands, and [F4] gives $P_{1}\rho P_{1}=T_{P_{1}\psi,P_{1}\psi}=|\alpha|^{2}T_{u,u}$ and $P_{2}\rho P_{2}=|\beta|^{2}T_{v,v}$, so $\Phi(\rho)=|\alpha|^{2}T_{u,u}+|\beta|^{2}T_{v,v}$. For the pairing with $T_{u,v}$: $\operatorname{tr}(T_{u,u}T_{u,v})=\langle T_{u,u}u,v\rangle=\langle u,v\rangle=0$ and $\operatorname{tr}(T_{v,v}T_{u,v})=\langle T_{v,v}u,v\rangle=\langle u,v\rangle\langle v,v\rangle=0$, and conjugating gives the same vanishing for $T_{v,u}$; hence $\operatorname{tr}(\Phi(\rho)(T_{u,v}+T_{v,u}))=0$. For the coherent state, $\operatorname{tr}(\rho T_{u,v})=\langle T_{\psi,\psi}u,v\rangle=\langle u,\psi\rangle\langle\psi,v\rangle=\overline{\alpha}\beta$ and $\operatorname{tr}(\rho T_{v,u})=\overline{\langle u,\psi\rangle\langle\psi,v\rangle}=\alpha\overline{\beta}$, so the cross term is $2\operatorname{Re}(\alpha\overline{\beta})$. This is (e). [step 2.2, F2, F4, algebra]

4.1 [The pure-state formula] Let $\rho=T_{\psi,\psi}$ with $\psi\ne0$. By step 1.1 with $\rho=T_{\psi,\psi}$ and the rank-one rules [F4], $P_{a}\rho P_{a}=T_{P_{a}\psi,P_{a}\psi}$, and $T_{P_{a}\psi,P_{a}\psi}=\|P_{a}\psi\|^{2}T_{\nu(P_{a}\psi),\nu(P_{a}\psi)}$ when $P_{a}\psi\ne0$, while both sides vanish when $P_{a}\psi=0$; the trace-norm convergence of the resulting series is that of step 1.1. This is (f). [step 1.1, F4, algebra] ∎
