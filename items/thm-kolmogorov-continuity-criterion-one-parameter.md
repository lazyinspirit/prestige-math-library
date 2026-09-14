---
id: thm-kolmogorov-continuity-criterion-one-parameter
kind: theorem
title: "Kolmogorov continuity criterion in one parameter"
status: published
origin: pipeline
deps: [def-complete-metric-space, def-separable-space, cor-markov-inequality-for-random-variables, thm-finite-and-countable-subadditivity-of-measures, thm-geometric-series, lem-geometric-sequence-null, thm-rationals-countable, lem-rat-embeds-dense, cor-first-borel-cantelli-lemma-for-events, def-law-modification-and-indistinguishability-of-processes, thm-dominated-convergence]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, Theorem 7.1.3"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "Perla Sousi, Advanced Probability, Theorem 3.19"
      url: "https://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
    - title: "Nobuaki Yoshida, Probability Theory, Section 6.3"
      url: "https://www.math.nagoya-u.ac.jp/~noby/pdf/prob.pdf"
---

## Statement

Let $(S,d)$ be a complete separable metric space and let
$X=(X_t)_{t\ge0}$ be an $S$-valued process. Suppose $\alpha,\beta>0$ and a
family of finite constants $(C_T)_{T>0}$ are given such that
$$E[d(X_t,X_s)^\alpha]\le C_T|t-s|^{1+\beta}\qquad(0\le s,t\le T).$$
Then $X$ has a continuous modification $Y$. Moreover, one version can be
chosen such that, on one event of probability one, its paths are Hölder on
every compact interval for every exponent $0<\gamma<\beta/\alpha$.

## Facts & Assumptions

**Given:** The metric-space, process, exponent, constant-family, and moment-bound hypotheses in the Statement.

[F1] Completeness means every Cauchy sequence converges in $S$; separability
provides a countable dense subset. [[def-complete-metric-space]]
[[def-separable-space]]

[F2] For a nonnegative random variable $Z$ and $a>0$,
$P(Z\ge a)\le E[Z]/a$ on an arbitrary probability space.
[[cor-markov-inequality-for-random-variables]]

[F3] A finite or countable union has measure at most the sum of the member
measures. [[thm-finite-and-countable-subadditivity-of-measures]]

[F4] A geometric series of ratio strictly between zero and one converges.
[[thm-geometric-series]]

[F5] If the sum of event probabilities is finite, only finitely many events
occur almost surely. [[cor-first-borel-cantelli-lemma-for-events]]

[F6] Bounded almost-everywhere convergence of measurable indicators implies
convergence of their expectations. [[thm-dominated-convergence]]

[F7] A modification agrees with the original process almost surely at every
fixed time; this is weaker than indistinguishability.
[[def-law-modification-and-indistinguishability-of-processes]]

[F8] The rationals are countable, and strictly between two real numbers lies a
rational. [[thm-rationals-countable]] [[lem-rat-embeds-dense]]

[F9] The sequence $2^{-j}$ tends to zero.
[[lem-geometric-sequence-null]]

## Proof

**Proof technique:** direct.

1.1 Let $D=\{k2^{-n}:k,n\in\mathbb N_0\}$ be the nonnegative dyadic times. Fix an integer $N\ge1$ and a rational $\eta$ with $0<\eta<\beta/\alpha$. For $n\ge0$, let $E_{N,\eta,n}$ be the event that some adjacent level-$n$ dyadic pair $k2^{-n},(k+1)2^{-n}$ in $[0,N]$ has $d(X_{(k+1)2^{-n}},X_{k2^{-n}})>2^{-n\eta}$. These are measurable finite unions. [given]

2.1 Each of the at most $N2^n$ edges in step 1.1 has, by [F2] and the moment hypothesis, probability at most $C_N2^{-n(1+\beta-\alpha\eta)}$. Hence [F3] gives $$P(E_{N,\eta,n})\le NC_N2^{-n(\beta-\alpha\eta)}.$$ The exponent is positive, so [F4] makes the sum over $n$ finite and [F5] shows that, almost surely, only finitely many $E_{N,\eta,n}$ occur. [step 1.1, F2, F3, F4, F5]

3.1 Intersect the probability-one conclusions of step 2.1 over the countable set of integer $N\ge1$ and rational $\eta\in(0,\beta/\alpha)$, and call the resulting measurable event $H$. Countability follows from [F8], and its complement is a countable union of null sets and is null by [F3]. Fix $\omega\in H,N,\eta$. The eventual edge bound can be enlarged over its finitely many exceptional levels to a finite $K=K(\omega,N,\eta)$ satisfying $$d(X_{(k+1)2^{-n}}(\omega),X_{k2^{-n}}(\omega))\le K2^{-n\eta}$$ for every level-$n$ edge in $[0,N]$. [step 2.1, F3, F8]

4.1 If $p,q\in D\cap[0,N]$ and $2^{-(m+1)}<|p-q|\le2^{-m}$, compare each point with its level-$m$ dyadic floor. Successive binary floors differ by at most one edge of level $j+1$, so step 3.1 and [F4] bound each tail by $K\sum_{j\ge m}2^{-(j+1)\eta}=K2^{-(m+1)\eta}/(1-2^{-\eta})$; the two level-$m$ floors differ by at most one level-$m$ edge. Therefore $$d(X_p(\omega),X_q(\omega))\le K\!\left(1+\frac{2^{1-\eta}}{1-2^{-\eta}}\right)2^{-m\eta}\le K'|p-q|^\eta.$$ Equality $p=q$ is trivial. Thus the sample values on the dense dyadic set are locally Hölder. [step 3.1, F4, algebra]

5.1 For $t\ge0$, let $q_j(t)$ be the largest level-$j$ dyadic not exceeding $t$; then $0\le t-q_j(t)<2^{-j}\to0$ by [F9]. On $H$, step 4.1 makes $(X_{q_j(t)}(\omega))_j$ Cauchy on any integer compact containing $t$, so [F1] gives a unique limit. Define $Y_t(\omega)$ to be this limit on $H$ and $X_0(\omega)$ on $H^c$. Equivalently, the measurable maps $Z_j^t=X_{q_j(t)}$ on $H$ and $Z_j^t=X_0$ on $H^c$ converge pointwise to $Y_t$. [step 4.1, F1, F9]

6.1 Each $Y_t$ is a Borel random element. Indeed, for a nonempty closed $F\subseteq S$, continuity of $x\mapsto d(x,F)$ and step 5.1 give $$\{Y_t\in F\}=\bigcap_{r\ge1}\bigcup_{J\ge1}\bigcap_{j\ge J}\{d(Z_j^t,F)<1/r\};$$ the formula is also correct in the limiting direction because $F$ is closed, while the empty closed set has empty inverse image. Thus inverse images of closed, hence Borel, sets are measurable. No point of $S$ was selected: the already given $X_0(\omega)$ supplies the value on $H^c$. [step 5.1]

6.2 Letting dyadic $p,q$ tend to arbitrary $s,t\in[0,N]$ in step 4.1 shows on $H$ that $d(Y_s,Y_t)\le K'|s-t|^\eta$. Hence every path of $Y$ on $H$ is continuous and is locally $\eta$-Hölder for every rational $\eta<\beta/\alpha$. For arbitrary $0<\gamma<\beta/\alpha$, [F8] supplies one rational $\eta$ strictly between them; on $[0,N]$, the $\eta$-bound implies the $\gamma$-bound after multiplying its constant by $\max(1,N^{\eta-\gamma})$. This gives all exponents simultaneously on the single event $H$. [step 4.1, step 5.1, F8, algebra]

7.1 Fix $t$ and an integer $N>t$. The moment hypothesis and [F2] give $P(d(X_{q_j(t)},X_t)>\varepsilon)\le C_N\varepsilon^{-\alpha}|q_j(t)-t|^{1+\beta}\to0$. Since $Z_j^t=X_{q_j(t)}$ off only the null event $H^c$, the same convergence holds with $Z_j^t$. On the other hand, $Z_j^t\to Y_t$ pointwise, so [F6] applied to $\mathbf1_{\{d(Z_j^t,Y_t)>\varepsilon\}}$ makes the corresponding probabilities tend to zero. The triangle inequality now gives $$P(d(X_t,Y_t)>2\varepsilon)\le P(d(X_t,Z_j^t)>\varepsilon)+P(d(Z_j^t,Y_t)>\varepsilon)\to0.$$ The left side is independent of $j$, hence is zero; intersecting over $\varepsilon=1/r$ gives $X_t=Y_t$ almost surely. Thus [F7] makes $Y$ a modification of $X$, and step 6.2 supplies all promised path regularity. The constants $(C_T)$ were supplied as data, and every other construction was canonical or countably intersected, so no choice axiom is used. [step 5.1, step 6.2, F2, F6, F7] ∎

## Source notes

Durrett's Theorem 7.1.3, printed pp. 356–358, and Sousi's Theorem 3.19 give
the complete dyadic Markov--Borel--Cantelli and chaining argument. The local
proof also supplies the complete-target extension, Borel measurability of its
pointwise metric limit, and the fixed-time modification argument. Yoshida
Section 6.3 gives the same Hölder exponent threshold.
