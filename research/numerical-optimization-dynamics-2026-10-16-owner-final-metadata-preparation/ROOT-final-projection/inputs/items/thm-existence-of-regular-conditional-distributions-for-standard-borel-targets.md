---
id: "thm-existence-of-regular-conditional-distributions-for-standard-borel-targets"
kind: "theorem"
title: "Existence of regular conditional distributions for standard borel targets"
deps: ["def-regular-conditional-distribution", "lem-rational-conditional-distribution-functions-produce-real-regular-kernels", "lem-simultaneous-rational-conditional-distribution-function-versions", "def-standard-borel-space", "lem-bounded-remetrisation", "def-product-topology", "thm-geometric-series", "thm-reals-cauchy-complete", "thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta", "lem-hilbert-cube-has-a-bimeasurable-real-coding", "thm-seven-generators-of-the-borel-sigma-algebra-on-r", "thm-dynkin-pi-lambda", "thm-rationals-countable", "thm-countable-union-of-countable", "def-countable-choice", "lem-rat-embeds-dense", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Varadhan, Probability Theory, Chapter 4"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. Let $X:(\Omega,\mathcal F,P)\to(E,\mathcal S)$ be a measurable random element with standard-Borel target, and let $\mathcal G\subseteq\mathcal F$ be any sub-sigma-algebra. There exists a regular conditional distribution of $X$ given $\mathcal G$. Every section is a probability measure, including at exceptional sample points, and no countable-generation or completeness assumption on $\mathcal G$ is required.

For this necessarily nonempty target, the construction also supplies a bimeasurable bijection $c:E\to B$ onto a Borel set $B\subseteq[0,1]$, and a countable algebra $\mathcal A$ which generates $\mathcal S$, separates points, and determines finite measures.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] An everywhere probability kernel is a regular conditional distribution precisely when all conditioning-event identities hold. [[def-regular-conditional-distribution]].

[F2] A real random variable has an everywhere probability kernel with every Borel conditional identity, using the locally repaired integral interface. [[lem-rational-conditional-distribution-functions-produce-real-regular-kernels]], [[lem-simultaneous-rational-conditional-distribution-function-versions]].

[F3] A standard-Borel presentation is a measurable isomorphism with a Polish space; bounded remetrisation preserves its topology. [[def-standard-borel-space]], [[lem-bounded-remetrisation]].

[F4] Finite-coordinate cylinders generate the cube topology, and the relevant geometric series converge. [[def-product-topology]], [[thm-geometric-series]], [[thm-reals-cauchy-complete]].

[F5] Under DC, a completely metrizable subspace of a metric space is $G_\delta$. [[thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta]].

[F6] The Hilbert cube has an explicit bimeasurable coding onto a Borel subset of $[0,1]$. [[lem-hilbert-cube-has-a-bimeasurable-real-coding]].

[F7] Rational cuts generate the real Borel sigma-algebra, rationals are countable and separate reals, and pi-lambda proves finite-measure determination. [[thm-seven-generators-of-the-borel-sigma-algebra-on-r]], [[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[thm-dynkin-pi-lambda]].

[F8] Under countable choice, a countable union of finite sets is countable. [[thm-countable-union-of-countable]], [[def-countable-choice]].

[F9] AC supplies the metric and dense-set witnesses, their enumeration, DC, countable choice, and the choices in the real-kernel construction. [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

1.1 The probability space is nonempty, so the existence of $X$ makes $E$ nonempty. By [F3] fix a Borel isomorphism $h:E\to P$, where $P$ has a complete compatible metric $\rho$ and a countable dense set. Use [F9] to enumerate that set as $(p_n)$ and put $d=\min(1,\rho)$. A $d$-Cauchy sequence is eventually at $d$-distance below one, hence is $\rho$-Cauchy; its $\rho$-limit is also its $d$-limit. Thus $d$ is complete and compatible. Define $$e(x)=(d(x,p_n))_{n\ge0}\in Q=[0,1]^{\mathbb N}.$$ Each coordinate is one-Lipschitz. If $x\ne y$, choose $p_n$ with $d(x,p_n)<d(x,y)/3$; the reverse triangle inequality makes the $n$th distances different, so $e$ is injective. It is continuous by the initial description of the product topology. Its inverse on $e[P]$ is continuous: for $\varepsilon<1$, choose $p_n$ with $d(x,p_n)<\varepsilon/4$; if $z=e(y)$ and $|z_n-e(x)_n|<\varepsilon/2$, then $d(x,y)<\varepsilon$. Hence $e$ is a homeomorphism onto its image, with the inverse-continuity estimate explicit. [F3, F4, F7, F9]

2.1 On $Q$ set $D(u,v)=\sum_{n\ge0}2^{-(n+1)}|u_n-v_n|$. The geometric tail bound makes this finite; termwise separation and the triangle inequality make it a metric. A $D$-ball controls every prescribed finite set of coordinates because $|u_n-v_n|\le2^{n+1}D(u,v)$. Conversely, after choosing $N$ with $\sum_{n\ge N}2^{-(n+1)}<\varepsilon/2$, sufficiently small restrictions on the first $N$ coordinates force $D<\varepsilon$. Thus $D$ induces the product topology. A $D$-Cauchy sequence is Cauchy in every coordinate, whose limit lies in $[0,1]$ by completeness of the reals; a finite-head plus geometric-tail estimate proves convergence in $D$. Therefore $D$ is complete. The image $Y=e[P]$ is completely metrizable by transport of $d$. AC supplies DC by choosing a successor for every admissible finite history and iterating, so [F5] makes $Y$ a $G_\delta$, hence Borel, subset of $(Q,D)$. [step 1.1, F4, F5, F9]

3.1 Let $a:Q\to C\subseteq[0,1]$ be [F6]. Since $a^{-1}$ is measurable and $Y$ is Borel, $B=a[Y]=(a^{-1})^{-1}[Y]$ is Borel in $C$ and hence in $[0,1]$. Restricting $a$ and its inverse shows that $c=a\circ e\circ h:E\to B$ is bimeasurable. For $q\in\mathbb Q$, set $H_q=c^{-1}[B\cap(-\infty,q]]$. Let $\mathcal A_n$ be the finite Boolean algebra generated by the first $n$ rational cuts in a fixed enumeration and $\mathcal A=\bigcup_n\mathcal A_n$. By [F8] and [F9], $\mathcal A$ is countable; it is an algebra and generates $\mathcal S$ by [F7] and bimeasurability. Rational separation and injectivity of $c$ show that it separates points. If finite measures $\mu,\nu$ agree on $\mathcal A$, their equality class is a lambda-system: complements subtract from their common finite total and disjoint unions use countable additivity. It contains the pi-system $\mathcal A$, so [F7] gives equality on $\mathcal S$. This proves the two auxiliary conclusions without using either affected published standard-Borel interface. [step 1.1, step 2.1, F6, F7, F8, F9]

4.1 Fix $e_0\in E$ and put $Z=c\circ X$. By [F2] it has an everywhere real conditional probability kernel $\nu$. The evaluation $b(\omega)=\nu(\omega,B)$ is $\mathcal G$-measurable and $0\le b\le1$. Since $Z\in B$, its conditional identity gives $\int b\,dP=1$. The repaired finite-additivity interface in [F2] gives $\int(1-b)=0$; for each integer $k\ge1$, on $N_k=\{1-b\ge1/k\}$ monotonicity gives $P(N_k)/k\le0$. Thus $N=\{b\ne1\}=\bigcup_{k\ge1}N_k$ is measurable and null. Define $$K(\omega,A)=\begin{cases}\nu(\omega,c[A]),&\omega\notin N,\\ \mathbf1_A(e_0),&\omega\in N.\end{cases}$$ Bimeasurability makes $c[A]$ Borel in the real line, so every evaluation is measurable. Off $N$, injectivity and $\nu(\omega,B)=1$ give a probability on $E$; on $N$ the filler is Dirac. The two evaluations differ only on a measurable null set, and the local null-integral clause in [F2] gives $$\int_HK(\omega,A)\,dP=P(H\cap\{c(X)\in c[A]\})=P(H\cap\{X\in A\}).$$ By [F1], $K$ is the required everywhere regular conditional distribution. [step 3.1, F1, F2, F9] ∎
