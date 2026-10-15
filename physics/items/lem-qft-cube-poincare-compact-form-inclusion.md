---
id: lem-qft-cube-poincare-compact-form-inclusion
kind: lemma
domain: mathematics
title: Cube mean estimate and compact form inclusion
status: published
origin: pipeline
dependency_level: 2
deps: [lem-qft-coercive-polynomial-form-domain, def-compact-linear-operator, thm-cauchy-schwarz-in-an-inner-product-space, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]
dependency_roles:
  lem-qft-coercive-polynomial-form-domain: mathematical-premise
  def-compact-linear-operator: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §2.3, pp.76–83"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations — Lecture Notes, Chapter 8, pp.48–50"
      url: "https://arxiv.org/pdf/1203.2344v1"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume the finite-dimensional coercive form data and Hilbert space $Q$ of
[[lem-qft-coercive-polynomial-form-domain]]. The inclusion
$J:Q\hookrightarrow H_N$ is compact: the closure in $H_N$ of the image of
every bounded subset of $Q$ is compact in the metric topology. The proof below
uses an explicit cube-mean approximation for each finite $N$ and does not
assume a general Rellich theorem.

## Facts & Assumptions

**Given:** $N\ge1$, the form domain $Q$, its norm, and the injection
$J:Q\to H_N$.

[F1] [[lem-qft-coercive-polynomial-form-domain]]: $Q$ is complete and injects densely into the complete Hilbert space $H_N$; for $u\in Q$, its weak derivatives and weighted function are in $L^2$ and
$$\|u\|_Q^2=\sum_{j=1}^N a_j\|\partial_j u\|_2^2+\|\sqrt{W+1}\,u\|_2^2,$$
with $W(q)\ge1+c|q|^2$.

[F2] [[def-compact-linear-operator]]: a linear map is compact when the closure of the image of every bounded set is compact; it suffices to check the closed unit ball.

[F3] [[thm-cauchy-schwarz-in-an-inner-product-space]]: on each $L^2$ space, $|\int f\overline g|\le\|f\|_2\|g\|_2$.

[F4] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: integrable functions on sigma-finite products have equal iterated integrals; the continuous cube integrands used below are integrable.

## Proof

**Proof technique:** direct.

**Given:** Countable Choice as inherited through [F1], the finite data, and an arbitrary $Q$-bounded set.

1.1 Let $C$ be a cube of side $\delta>0$ and $u\in C_c^\infty(\mathbb R^N;\mathbb C)$, with $u_C:=|C|^{-1}\int_Cu$. Expanding the square and using Fubini on the finite cube gives
$$\int_C|u-u_C|^2=\frac1{2|C|}\int_C\int_C|u(x)-u(y)|^2\,dx\,dy.$$
Telescope $u(x)-u(y)$ through the $N$ coordinate changes and use $|\sum_{j=1}^Nz_j|^2\le N\sum_j|z_j|^2$. For the $j$th change, the fundamental theorem of calculus and Cauchy–Schwarz give $|D_j(x,y)|^2\le\delta\int_{\min(x_j,y_j)}^{\max(x_j,y_j)}|\partial_ju|^2$. For fixed values of the other coordinates and fixed $s\in[0,\delta]$, the measure of pairs $(x_j,y_j)$ whose segment contains $s$ is $2s(\delta-s)\le\delta^2/2$; integrating the displayed bound over the cube variables and dividing by $2|C|$ therefore yields the safe estimate
$$\|u-u_C\|_{L^2(C)}^2\le N\delta^2\sum_{j=1}^N\|\partial_j u\|_{L^2(C)}^2.$$
It applies to complex $u$ because the squared-modulus Cauchy–Schwarz inequality is used. [F3, F4, algebra]

1.2 For $R>0$ and $u\in Q$, the coercive weight gives
$$\int_{|q|>R}|u(q)|^2\,dq\le\frac1{cR^2}\int_{|q|>R}c|q|^2|u(q)|^2\,dq\le\frac1{cR^2}\|u\|_Q^2.$$
Thus the $L^2$ tails of the $Q$ unit ball are uniformly small for large $R$. [F1, algebra]

2.1 The estimate of step 1.1 passes to every $u\in Q$: approximate $u$ in the $Q$ norm by elements of $C_c^\infty$ (the defining completion), restrict to $C$, and use [F1] to pass the $L^2$ and derivative limits. [step 1.1, F1]

3.1 Fix $\varepsilon>0$. Choose $R$ so the squared tail in step 1.2 is below $\varepsilon^2/16$. For the $Q$ unit ball, [F1] gives $\sum_j\|\partial_j u\|_2^2\le\sum_j a_j^{-1}$. Choose an integer $M$ large enough that $\delta:=2R/M$ satisfies $N\delta^2\sum_j a_j^{-1}<\varepsilon^2/16$, and partition $[-R,R]^N$ into the resulting finitely many cubes of side $\delta$. Summing the squared estimates of step 2.1 over these disjoint cubes bounds the total mean-approximation error by $N\delta^2\sum_j\|\partial_j u\|_2^2<\varepsilon^2/16$. The squared error outside $[-R,R]^N$ is the tail from step 1.2; thus replacing $u$ on each cube by its mean and setting it to zero outside the large cube has total squared $L^2$ error below $\varepsilon^2/8$, hence norm error below $\varepsilon/2$. [step 2.1, step 1.2, F1, choose, algebra]

4.1 For the finite partition in step 3.1, the piecewise-constant mean function $m_u$ satisfies $\|m_u\|_2^2=\sum_C|C||u_C|^2\le\sum_C\|u\|_{L^2(C)}^2\le\|u\|_2^2\le1$ by Cauchy--Schwarz [F3]. Thus each mean coordinate has modulus at most $|C|^{-1/2}$, so the vectors of means lie in a bounded box in a finite-dimensional complex coordinate space. Subdivide its real-and-imaginary coordinates into finitely many boxes of sufficiently small side length so that the associated piecewise-constant functions approximate every mean vector to $L^2$ error below $\varepsilon/2$. Combining with step 3.1 gives a finite $\varepsilon$-net for the image of the $Q$ unit ball. Scaling shows that the image of every bounded $Q$ set is totally bounded. [step 3.1, F1, F3, algebra]

5.1 Let $K$ be the $H_N$ closure of the image of the $Q$ unit ball. It is complete because it is closed in the complete space $H_N$ [F1]. Suppose an open cover of $K$ has no finite subcover. For each $n\ge1$, step 4.1 supplies a finite $2^{-n-2}$-net for the image of the $Q$ unit ball with centers in $H_N$; the corresponding closed balls of radius $2^{-n-1}$ cover its closure $K$. Starting with $C_0=K$, choose the least ball index for which $C_n:=C_{n-1}\cap\overline B(p_n,2^{-n-1})$ has no finite subcover. Such an index exists, since otherwise finitely many finite subcovers would cover $C_{n-1}$. Each $C_n$ is nonempty, closed, nested, and has diameter at most $2^{-n}$. For $m>n$, any point of nonempty $C_m$ lies in both selected balls, so $\|p_m-p_n\|_2\le2^{-m-1}+2^{-n-1}$; hence $(p_n)$ is Cauchy and converges to some $p\in H_N$. Since $C_n$ is nonempty and is contained in both $K$ and $\overline B(p_n,2^{-n-1})$, the distance from $p_n$ to $K$ is at most $2^{-n-1}$. Therefore $\operatorname{dist}(p,K)\le\|p-p_n\|_2+2^{-n-1}\to0$; closedness of $K$ gives $p\in K$. For fixed $n$ and every $m>n$, nonempty $C_m\subseteq C_n$ has a point $y\in C_m$ with $\|p_m-y\|_2\le2^{-m-1}$. Thus there are points of $C_n$ arbitrarily close to $p$, and closedness gives $p\in C_n$. An open set of the cover containing $p$ contains $K\cap B(p,r)$ for some $r>0$; for large $n$, $\operatorname{diam}(C_n)<r$, so that one open set covers $C_n$, a contradiction. Thus $K$ is compact. All recursive ball choices are least admissible indices in finite lists. [step 4.1, F1, algebra]

6.1 Step 5.1 proves that the closed-unit-ball image under $J$ has compact closure; applying the equivalent criterion in [F2] to the linear inclusion proves that $J:Q\hookrightarrow H_N$ is compact. [step 5.1, F2] ∎

