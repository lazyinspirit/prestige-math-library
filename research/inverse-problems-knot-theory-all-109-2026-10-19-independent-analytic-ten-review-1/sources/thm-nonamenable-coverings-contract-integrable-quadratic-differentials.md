---
id: thm-nonamenable-coverings-contract-integrable-quadratic-differentials
kind: theorem
title: Nonamenable finite-type surface coverings contract quadratic differentials
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-cauchy-integral-formula-circle
  - thm-laurent-expansion-annulus
  - thm-montel-theorem-for-holomorphic-functions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Curt McMullen, Amenability, Poincaré series and quasiconformal maps
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/amen/amen.pdf
      locator: Sections 2–8, printed pp.98–108; the finite-type contraction argument below avoids the externally quoted completeness of Poincaré series
---

## Statement

Assume AC. Let $X$ be a connected Riemann surface obtained from a compact Riemann surface by removing finitely many points, and let $p:Y\to X$ be a connected unbranched holomorphic covering. Let $Q(X)$ and $Q(Y)$ be their spaces of integrable holomorphic quadratic differentials, with norm $\|q\|_1=\int|q|$. Suppose a finite set of based loops generates $\pi_1(X)$ and its monodromy graph on a fiber of $p$ has positive vertex expansion: there is $\gamma>0$ such that
$$|b(V)|\ge\gamma|V|$$
for every finite set of vertices $V$, where $b(V)$ consists of vertices outside $V$ adjacent to $V$. This is the nonamenability hypothesis, stated for the actual covering rather than only for a deck group.

The pushforward
$$\Theta_p:Q(Y)\longrightarrow Q(X),\qquad \Theta_pq=\sum_{\text{local inverse branches }s}s^*q$$
is well defined and has operator norm strictly less than one. Thus there is $c=c(X,p)<1$ with $\|\Theta_pq\|_1\le c\|q\|_1$ for every $q$. No finite generation of $\pi_1(Y)$, regularity of the covering, or compactness of $Y$ is assumed. No bound uniform over varying complex structures on $X$ is asserted here.

## Facts & Assumptions

**Given:** AC, the finite-type surface, connected holomorphic covering, finite generating loops and their positive-expansion graph.

[A1] Full choice supplies the subsequences and finite chart selections below. [[def-axiom-of-choice]]

[F1] Cauchy's circle formula implies the holomorphic mean-value identity and the local bound by the average absolute value on a disk, by integrating the circle identities in the radius. [[thm-cauchy-integral-formula-circle]]

[F2] Holomorphic functions on a punctured disk have Laurent expansions with the circle coefficient formulas. [[thm-laurent-expansion-annulus]]

[F3] A locally bounded holomorphic family has locally uniformly convergent subsequences with holomorphic limits. [[thm-montel-theorem-for-holomorphic-functions]]

## Proof

1.1 The covering fiber is countable: it is a transitive monodromy set for the finitely generated, hence countable, fundamental group. On a relatively compact coordinate disk $D$ in $X$, the pullbacks of an integrable $q$ from its inverse sheets have total absolute integral at most $\|q\|_1$. By the local mean-value bound [F1], on any smaller disk their absolute values have summable uniform bounds. Their sum therefore converges normally and is holomorphic. Changing coordinates or sheet order gives the same sum, so it defines $\Theta_pq$. Integration of the pointwise triangle inequality over coordinate pieces, followed by summing the sheet integrals, gives $\|\Theta_pq\|_1\le\|q\|_1$. [A1, F1, given, construct, algebra]

1.2 We need a local qualitative rigidity fact. If holomorphic $h$ on the unit disk satisfies $\int|h|=1$ and $\operatorname{Re}\int h\ge1-\epsilon$, then $\|h-1/\pi\|_1\to0$ uniformly as $\epsilon\to0$. Indeed $|\operatorname{Im}h|^2\le2|h|(|h|-\operatorname{Re}h)$ gives $\int|\operatorname{Im}h|\le\sqrt{2\epsilon}$. By [F1], these functions are locally bounded and $\operatorname{Re}h(0)=\pi^{-1}\operatorname{Re}\int h\to1/\pi$. Every subsequential limit supplied by [F3] is therefore the real constant $1/\pi$. Thus the whole family converges locally uniformly to that constant. On a concentric radius-$r$ disk the absolute integral tends to $r^2$, so the integral outside it tends to $1-r^2$. Splitting the $L^1$ difference into these two pieces and then taking $r\uparrow1$ proves the claim. If uniformity failed, a sequence with $\epsilon\to0$ and distance bounded below would contradict this argument. Translation, dilation and multiplication by a constant phase give the same conclusion on any Euclidean disk, with normalized constant density. [F1, F3, algebra]

2.1 The closed unit ball of $Q(X)$ is compact in its $L^1$ norm. First, at a removed point choose a puncture coordinate $z$. If $q=f(z)dz^2$ is integrable, put $M(r)=(2\pi)^{-1}\int_0^{2\pi}|f(re^{it})|dt$. Since $\int_0^{r_0}rM(r)dr<\infty$, some $r_j\downarrow0$ satisfy $r_j^2M(r_j)\to0$. The Laurent coefficient formula [F2] gives $|a_{-m}|\le r_j^mM(r_j)\to0$ for $m\ge2$. Thus $f=a_{-1}/z+h(z)$ with $h$ holomorphic across the puncture. For a unit-norm family, [F1] uniformly bounds $f$ on one fixed circle surrounding that puncture, since this circle has a compact neighborhood inside $X$. Its contour integral uniformly bounds $a_{-1}$; Cauchy's formula then bounds $h$ on the smaller disk. Consequently $\int_{|z|<r}|f(z)|\,dxdy\le C(r+r^2)$ uniformly. Away from the finitely many punctures, [F1] and [F3], applied in finitely many coordinate charts and then diagonally on an exhaustion, give locally uniformly convergent subsequences of any unit-ball sequence. Their limits agree under quadratic-differential coordinate changes. The uniform puncture-tail bound upgrades convergence to $L^1$ on all of $X$, with limiting norm at most one. This proves the asserted compactness. [A1, F1, F2, F3, step 1.1, algebra]

3.1 Suppose for contradiction that $\|\Theta_p\|=1$. Choose $q_n\in Q(Y)$ of norm one with $\|\Theta_pq_n\|_1\to1$. By step 2.1, after a subsequence $\Theta_pq_n\to\psi$ in $L^1$, where $\|\psi\|_1=1$. Set $\mu=\overline\psi/|\psi|$ away from its zeros and zero at its zeros; this is a Beltrami differential, so $q\mu$ is an integrable density. Then $$I_n=\int_Y\bigl(|q_n|-\operatorname{Re}(q_np^*\mu)\bigr)=1-\operatorname{Re}\int_X(\Theta_pq_n)\mu\longrightarrow0.$$ The integrand is everywhere nonnegative. The zeros of $\psi$ are discrete and its puncture extensions are meromorphic by step 2.1. Choose representatives of the finite generating loops avoiding those zeros. On their compact union the flat metric $|\psi|$ has a positive local coordinate radius: locally $\psi=dw^2$, by taking a local square root of its nonvanishing holomorphic coefficient and integrating it. Cover the generating loops by finitely many sufficiently small equal-radius flat disks $E_1,\ldots,E_J$, with connected union $U$, connected pairwise intersections whenever nonempty, and a common flat area $A>0$. The disks can be chosen with each radius less than one quarter of the minimum flat coordinate radius on a compact neighborhood of the loops. Intersecting disks then lie in one larger flat chart, so their intersection is the usual connected Euclidean lens. Their union carries every generating loop. [A1, step 2.1, step 1.2, construct, algebra]

4.1 Let $\mathcal G$ be the intersection graph of all lifted disks. It is connected because $U$ carries $\pi_1(X)$ and $Y$ is connected. Every vertex has degree at most $J-1$: a lift of one disk meets at most one lift of any other, because their base intersection is connected. Its vertex expansion is some $\gamma_0>0$. Here are the comparison details. Choose one disk as anchor. Paths through the finite base disk graph give a constant $C$ such that every lifted vertex is within $C$ graph edges of an anchor vertex. Each supplied generator loop gives a disk chain of length at most one common $L$ joining the anchor vertices related by that generator's monodromy. For a finite lifted vertex set $S$, let $T$ be the anchor vertices within distance $C$ of $S$. If $D=\max(2,J)$, then $|T|\ge |S|/D^{C+1}$. At least $\gamma|T|$ anchor vertices lie in its monodromy border. Each lies within $L+C$ edges of $b(S)$: join its neighboring anchor to $S$ by a path of length at most $C$, then follow the generator chain; its endpoint is outside $T$, so the combined path must exit $S$. Bounded degree implies $\gamma|T|\le D^{L+C+2}|b(S)|$. This gives a fixed positive $\gamma_0$, for example $\gamma D^{-(L+2C+3)}$. [given, step 3.1, construct, algebra]

5.1 For a lifted disk $B$ define its mass $m_n(B)=\int_B|q_n|$ and inefficiency $i_n(B)=m_n(B)^{-1}\int_B(|q_n|-\operatorname{Re}(q_np^*\mu))$. A zero-mass disk would make $q_n$ identically zero on connected $Y$, so no such disk occurs. Let $a>0$ be the minimum, over the finitely many nonempty base lenses, of their flat area divided by $A$. On each lifted disk, step 1.2 says that if $i_n(B)<\epsilon$, then $q_n$ is within $\eta m_n(B)$ in $L^1$ of $(m_n(B)/A)p^*\psi$, where $\eta\to0$ uniformly with $\epsilon$. Thus neighboring efficient disks have mass ratio at least $(a-\eta)/(a+\eta)$ in either direction, by integrating their two errors on the common lens. If only $B$ is efficient, its neighbor $B'$ still has mass at least $(a-\eta)m_n(B)$, because it contains that lens. Choose $\eta<a/2$ small enough that $\lambda=(a-\eta)/(a+\eta)$ satisfies $\lambda^{-1}-1<\gamma_0/2$, and choose a fixed $\epsilon>0$ that ensures this error bound. These choices are independent of $n$. [step 1.2, step 3.1, step 4.1, algebra]

6.1 We spell out the weighted expansion estimate used on this graph. For a vertex subset $V$ and an integrable positive function $m$ on it with neighboring ratios at least $\lambda$, put $F(w)=\sup\{m(v):v\in V,\ v\sim w\}$ for $w\notin V$. Layer-cake integration of $|b(\{v\in V:m(v)>t\})|\ge\gamma_0|\{v\in V:m(v)>t\}|$ gives $$\sum_{w\notin V}F(w)\ge\bigl(\gamma_0-(\lambda^{-1}-1)\bigr)\sum_{v\in V}m(v).$$ Indeed an outside vertex contributes at most $F(w)$ to the integrated border. An inside vertex with value $m(v)$ can belong to that border only for $m(v)\le t<\lambda^{-1}m(v)$, so its contribution is at most $(\lambda^{-1}-1)m(v)$. Each positive superlevel set is finite because $m$ is summable; integrating the counting inequalities and interchanging nonnegative sums proves the formula, also for infinite $V$. [step 4.1, step 5.1, algebra]

7.1 Apply step 6.1 to the efficient vertices $V_n=\{B:i_n(B)<\epsilon\}$ and $m=m_n$. Summability holds because a point lies in at most $J$ lifted disks and $\|q_n\|_1=1$. Every vertex in $b(V_n)$ is inefficient and, by step 5.1, has mass at least $(a-\eta)F(w)$. Hence, writing $W_n$ for all inefficient vertices, $$\sum_{B\in W_n}m_n(B)\ge (a-\eta)\gamma_0\sum_{B\in V_n}m_n(B)/2.$$ On the other hand, since the nonnegative inefficiency integrand is counted at most $J$ times, $$J I_n\ge\sum_{B\in W_n}m_n(B)i_n(B)\ge\epsilon\sum_{B\in W_n}m_n(B).$$ As $I_n\to0$, both the inefficient and, by the first inequality, efficient mass sums tend to zero. But their total is at least $\int_{p^{-1}U}|q_n|\ge\int_U|\Theta_pq_n|$, which tends to $\int_U|\psi|>0$. This contradiction proves $\|\Theta_p\|<1$. If $Q(X)=0$, the operator is zero and the assertion holds immediately; otherwise the preceding contradiction covers every possibility. All constants may depend on $X$, its generating net and the actual covering, as allowed. [step 1.1, step 3.1, step 5.1, step 6.1, algebra] ∎

## Reading and remaining scope

The complete actual Cauchy, Laurent and Montel supplier proofs were read. McMullen's complete cached 34-page paper, printed pp.95–127 including the appendix and references, was read from recovered OCR; the directly used argument is Sections 2–8, printed pp.98–108. His Section 12 also explicitly notes that the nonamenable argument can avoid completeness. His externally quoted completeness of Poincaré series is unnecessary for this finite-type statement: step 3.1 takes an $L^1$ limit of the actual pushforwards and pairs with that limit. The theorem establishes the stated quadratic-differential operator bound. Identifying it with a Teichmüller coderivative, obtaining continuity uniform over moduli, proving the amenable-mass degeneration alternative, and completing geometric gluing are separate obligations.