---
id: lem-nrqm-measurement-selective-luders-update
aliases: [nrqm-measurement-selective-luders-update]
kind: lemma
domain: mathematics
title: "The selective Lueders update by an orthogonal projection"
status: draft
origin: pipeline
dependency_level: 2
deps: [def-countable-choice, def-hilbert-orthogonal-projection, def-hilbert-space, def-non-negative-and-positive-operator, def-trace-class-operator, def-trace-of-a-trace-class-operator, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-nuclear-bounded-cyclicity, lem-nrqm-composites-rank-one-operator-calculus, thm-trace-class-is-a-two-sided-banach-operator-ideal]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-non-negative-and-positive-operator: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter 3 'Foundations II: Measurement and Evolution' (updated July 2015), Section 3.1.2, printed pages 8-11 (measurement operators, outcome probabilities (3.26)-(3.29) and post-measurement states (3.27))"
      url: "https://preskill.caltech.edu/ph219/chap3_15.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.3, printed pages 76-77 (Born rule, collapse and the degenerate-spectrum update)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a nonzero complex Hilbert space ([[def-hilbert-space]]), let $P$ be an orthogonal projection on $H$ ([[def-hilbert-orthogonal-projection]]) and let $\rho$ be a density operator with $p:=\operatorname{tr}(\rho P)>0$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a)). Define the **selective update**
$$\rho_{P}:=\frac{P\rho P}{p}.$$
Then:

(a) $P\rho P$ is a positive trace-class operator with $\operatorname{tr}(P\rho P)=p$, so $\rho_{P}$ is a density operator;

(b) $\operatorname{tr}(\rho_{P}P)=1$ and
$$P\rho_{P}P=\rho_{P}=P\rho_{P}=\rho_{P}P;$$
in particular $\rho_{P}$ commutes with $P$ and is fixed by compression with $P$;

(c) if $Q$ is an orthogonal projection with $QP=0$, then $\operatorname{tr}(\rho_{P}Q)=0$ and $Q\rho_{P}Q=0$;

(d) if $\rho=T_{u,u}$ for a unit vector $u$ with $Pu\ne0$, where $T_{u,u}x=\langle x,u\rangle u$ ([[lem-nrqm-composites-rank-one-operator-calculus]]), then $\rho_{P}=T_{Pu,Pu}/\|Pu\|^{2}$, the pure state of the normalized vector $Pu$; the value depends only on the ray of $Pu$.

No physical interpretation of the update is asserted.

## Facts & Assumptions

**Given:** A nonzero complex Hilbert space $H$; an orthogonal projection $P$ on $H$; a density operator $\rho$ with $p=\operatorname{tr}(\rho P)>0$; an orthogonal projection $Q$ with $QP=0$; a unit vector $u$ with $Pu\ne0$.

[F1] **Orthogonal projections.** An orthogonal projection $P$ on $H$ is a bounded linear operator with $P^{2}=P=P^{*}$, $\|P\|\le1$ and $\langle Px,y\rangle=\langle x,Py\rangle$ for all $x,y\in H$ ([[def-hilbert-orthogonal-projection]]).

[F2] **Density operators.** A density operator $\rho$ is self-adjoint, positive and trace class with $\operatorname{tr}\rho=1$, and it admits an expansion $\rho=\sum_{n}w_{n}T_{u_{n},u_{n}}$ with $(u_{n})$ a finite or countable orthonormal family and weights $w_{n}\ge0$, $\sum_{n}w_{n}=1$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a)).

[F3] **Rank-one calculus.** $T_{u,v}x=\langle x,v\rangle u$ is trace class with $\operatorname{tr}(T_{u,v})=\langle u,v\rangle$ and $\|T_{u,v}\|_{1}=\|u\|\,\|v\|$; $T_{x,x}\ge0$ with $\operatorname{tr}(T_{x,x})=\|x\|^{2}$; and for bounded $B$ one has $BT_{u,v}=T_{Bu,v}$ and $T_{u,v}B=T_{u,B^{*}v}$ ([[lem-nrqm-composites-rank-one-operator-calculus]] clauses (b), (c) and (d)).

[F4] **Trace-class ideal and cyclicity.** If $T$ is trace class and $B$ bounded, then $BT$ and $TB$ are trace class with $\operatorname{tr}(BT)=\operatorname{tr}(TB)$ and $\operatorname{tr}$ linear and trace-norm continuous ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]], [[lem-nrqm-composites-nuclear-bounded-cyclicity]] clause (b)).

[F5] **Positivity of quadratic forms.** If $S\ge0$ then $\langle Sx,x\rangle\ge0$ for every $x$; sums of positive operators are positive, and $\rho=T_{u,u}$ with $\|u\|=1$ is a density operator ([[def-non-negative-and-positive-operator]], [F2], [F3]).

## Proof

1.1 [The unnormalized update] Since $P=P^{*}$ and $\rho=\rho^{*}$ by [F1] and [F2], $(P\rho P)^{*}=P^{*}\rho^{*}P^{*}=P\rho P$, so $P\rho P$ is self-adjoint. For $x\in H$, $\langle P\rho Px,x\rangle=\langle\rho Px,Px\rangle\ge0$ by [F1] and [F5], so $P\rho P\ge0$. With $P$ bounded and $\rho$ trace class, $\rho P$ and then $P(\rho P)=P\rho P$ are trace class by [F4], and $\operatorname{tr}(P\rho P)=\operatorname{tr}(\rho PP)=\operatorname{tr}(\rho P)=p$ by cyclicity [F4] and $P^{2}=P$ [F1]. [given, F1, F2, F4, F5, algebra]

2.1 [Clause (a)] Since $p>0$, the operator $\rho_{P}=P\rho P/p$ is self-adjoint and positive with trace $p/p=1$, hence a density operator by [F2]; this is (a). [step 1.1, F2, algebra]

2.2 [Clause (b)] By $P^{2}=P$ and cyclicity [F4], $\operatorname{tr}(\rho_{P}P)=\operatorname{tr}(P\rho PP)/p=\operatorname{tr}(\rho PPP)/p=\operatorname{tr}(\rho P)/p=1$. Moreover $P\rho_{P}P=P(P\rho P)P/p=P\rho P/p=\rho_{P}$ and $P\rho_{P}=PP\rho P/p=\rho_{P}=\rho_{P}PP=\rho_{P}P$; thus $\rho_{P}$ commutes with $P$ and is fixed by compression with $P$. This is (b). [step 1.1, F1, F4, algebra]

2.3 [Clause (c)] If $QP=0$ then $Q\rho_{P}Q=QP\rho PQ/p=0$ as an operator identity, and $\operatorname{tr}(\rho_{P}Q)=\operatorname{tr}(P\rho PQ)/p=\operatorname{tr}(QP\rho P)/p=0$ by cyclicity [F4]. This is (c). [step 1.1, F4, algebra]

3.1 [Clause (d)] Let $\rho=T_{u,u}$ with $\|u\|=1$. By [F3], $P\rho P=PT_{u,u}P=T_{Pu,u}P=T_{Pu,Pu}$, whose trace is $\|Pu\|^{2}>0$, and $p=\operatorname{tr}(T_{u,u}P)=\operatorname{tr}(PT_{u,u})=\langle Pu,u\rangle=\|Pu\|^{2}$ by [F3] and cyclicity [F4]; hence $\rho_{P}=T_{Pu,Pu}/\|Pu\|^{2}$. For $z\in\mathbb C\setminus\{0\}$ the identity $T_{zPu,zPu}=|z|^{2}T_{Pu,Pu}$ from the conjugate-linearity of $(u,v)\mapsto T_{u,v}$ [F3] shows that the state depends only on the ray of $Pu$. This is (d). [step 1.1, F3, F4, algebra] ∎
