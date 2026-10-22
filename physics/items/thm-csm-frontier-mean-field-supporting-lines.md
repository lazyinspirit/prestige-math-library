---
id: thm-csm-frontier-mean-field-supporting-lines
kind: theorem
title: Finite-alphabet mean-field ensembles and upper supporting lines
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-frontier-mean-field-ensemble
  - thm-csm-frontier-compact-laplace-tilt
  - thm-heine-borel-rn
  - thm-closed-subspace-of-a-compact-space-is-compact
  - thm-compactness-under-continuous-maps
  - thm-it-finite-alphabet-sanov-theorem
  - lem-it-finite-relative-entropy-continuity-on-simplex
  - lem-it-finite-classical-kl-nonnegative-equality
dependency_roles:
  def-csm-frontier-mean-field-ensemble: mathematical-premise
  thm-csm-frontier-compact-laplace-tilt: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-closed-subspace-of-a-compact-space-is-compact: mathematical-premise
  thm-compactness-under-continuous-maps: mathematical-premise
  thm-it-finite-alphabet-sanov-theorem: mathematical-premise
  lem-it-finite-relative-entropy-continuity-on-simplex: mathematical-premise
  lem-it-finite-classical-kl-nonnegative-equality: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all minima are on compact finite-dimensional simplexes."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Hugo Touchette, The large deviation approach to statistical mechanics
      url: https://arxiv.org/pdf/0804.0327
      locator: Section IV.B, printed pp. 26–27; Sections V.B–V.E, printed pp. 39–54.
    - title: Julien Poisat, Introduction to Large Deviations, complete author-hosted lecture notes
      url: https://www.ceremade.dauphine.fr/~poisat/files/M2-largedeviations/lecturenotes.pdf
      locator: Section 2, Theorem 2.1, printed pp. 4–6; Sections 3.1 and 3.4, printed pp. 8–11.
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $\mathcal A$ be finite and nonempty, let $p(a)>0$ for every $a\in\mathcal A$, and let $h:\Delta(\mathcal A)\to\mathbb R$ be continuous, where $\Delta(\mathcal A)$ is the probability simplex with its $\ell^1$ topology. Let $L_n$ be the empirical probability vector of an $n$-word drawn from $p^{\otimes n}$, and use $D(q\|p)=\sum_{a:q(a)>0}q(a)\ln(q(a)/p(a))$ with zero-mass terms omitted. For $\beta\in\mathbb R$, the canonical word law weights $x^n$ proportionally to $p^{\otimes n}(x^n)e^{-n\beta h(L_n(x^n))}$.

The canonical macrostate law of $L_n$ satisfies a speed-$n$ large-deviation principle with rate
$$R_\beta(q)=D(q\|p)+\beta h(q)-m_\beta,\qquad m_\beta:=\min_{r\in\Delta(\mathcal A)}\bigl[D(r\|p)+\beta h(r)\bigr].$$
Thus its canonical equilibrium macrostate set is $\mathcal M_\beta=\operatorname*{argmin}_{q\in\Delta(\mathcal A)}[D(q\|p)+\beta h(q)]$.

For $u\in h(\Delta(\mathcal A))$, let $d(u):=\min_{h(q)=u}D(q\|p)$, $s(u):=-d(u)$, and $\mathcal M_u:=\operatorname*{argmin}_{h(q)=u}D(q\|p)$. If there is a sequence $\delta_j\downarrow0$ for which
$$\inf_{|h(q)-u|<\delta_j}D(q\|p)=\inf_{|h(q)-u|\leq\delta_j}D(q\|p)\quad\text{for every }j,$$
then the iterated microcanonical shell limit exists and is
$$\lim_{j\to\infty}\lim_{n\to\infty}\frac1n\ln p^{\otimes n}\!\left(|h(L_n)-u|<\delta_j\right)=s(u).$$
In the same iterated limit, for every open neighborhood $U$ of $\mathcal M_u$,
$$\lim_{j\to\infty}\limsup_{n\to\infty}p^{\otimes n}\!\left(L_n\notin U\mid |h(L_n)-u|<\delta_j\right)=0.$$
Finally,
$$h(\mathcal M_\beta)=\operatorname*{argmax}_{v\in h(\Delta(\mathcal A))}\bigl[s(v)-\beta v\bigr],$$
and a macrostate $q$ is canonical at $\beta$ exactly when $q\in\mathcal M_{h(q)}$ and $h(q)$ maximizes $s(v)-\beta v$. Equivalently, $u$ is a canonical energy at $\beta$ exactly when $v\mapsto s(u)+\beta(v-u)$ is an upper supporting affine function for $s$ on the whole energy range. An energy with no upper supporting line for any slope is not realized by a canonical ensemble.

## Statement references

[[def-csm-frontier-mean-field-ensemble]]

[[thm-csm-frontier-compact-laplace-tilt]]

[[thm-heine-borel-rn]]

[[thm-closed-subspace-of-a-compact-space-is-compact]]

[[thm-compactness-under-continuous-maps]]

[[thm-it-finite-alphabet-sanov-theorem]]

[[lem-it-finite-relative-entropy-continuity-on-simplex]]

[[lem-it-finite-classical-kl-nonnegative-equality]]

## Facts & Assumptions

**Given:** A finite nonempty alphabet, a full-support reference probability $p$, a continuous energy-density map $h$, the finite product laws, and $\beta\in\mathbb R$.

[F1] [[def-csm-frontier-mean-field-ensemble]]: $\Delta(\mathcal A)$ is the $\ell^1$ probability simplex, $L_n$ is the empirical type under $p^{\otimes n}$, $D(q\|p)$ has the finite full-support convention in the Statement, the canonical word law is the normalized weight $p^{\otimes n}e^{-n\beta h(L_n)}$, and the shell event is $|h(L_n)-u|<\delta$.

[F2] [[thm-it-finite-alphabet-sanov-theorem]]: if $S=\operatorname{supp}(p)$ and $\Delta(S)$ is its support simplex, the empirical type laws under $p^{\otimes n}$ satisfy the open-set lower and closed-set upper large-deviation bounds at speed $n$ with rate $D(q\|p)$; because $p$ has full support, $S=\mathcal A$.

[F3] [[thm-csm-frontier-compact-laplace-tilt]]: for a speed-$n$ LDP with rate $I$ on a compact metric space and continuous $F$, $n^{-1}\ln\int e^{nF}\,d\mu_n\to\sup(F-I)$, and the normalized exponential tilt has rate $I-F+\sup(F-I)$.

[F4] [[lem-it-finite-relative-entropy-continuity-on-simplex]]: for a finite alphabet and a full-support reference $p$, $q\mapsto D(q\|p)$ is finite and continuous on the whole simplex, including its boundary.

[F5] [[lem-it-finite-classical-kl-nonnegative-equality]]: for probability vectors $q,p$ on a finite set, $D(q\|p)\geq0$, with equality exactly when $q=p$.

[F6] [[thm-heine-borel-rn]]: a closed and bounded subset of Euclidean $\mathbb R^d$, for $d\geq1$, is compact.

[F7] [[thm-closed-subspace-of-a-compact-space-is-compact]]: a closed subset of a compact topological space is compact.

[F8] [[thm-compactness-under-continuous-maps]]: a continuous image of a compact space is compact, and a continuous real-valued function on a nonempty compact space attains its minimum and maximum.

## Proof
1.1 Enumerate $\mathcal A=\{a_1,\ldots,a_d\}$, with $d\geq1$, and identify $\mathbb R^{\mathcal A}$ with Euclidean $\mathbb R^d$. Write $\|x\|_1:=\sum_{i=1}^d|x_i|$ and $\|x\|_2:=(\sum_{i=1}^dx_i^2)^{1/2}$; the declared $\ell^1$ topology on the simplex is the topology from $\|\cdot\|_1$. The simplex is closed because it is the intersection of the closed coordinate constraints $0\leq q(a_i)\leq1$ and the closed affine constraint $\sum_iq(a_i)=1$; these are closed since coordinate maps and their finite sum are continuous. It is bounded because $\|q\|_2^2=\sum_iq(a_i)^2\leq\sum_iq(a_i)=1$. By [F6] it is compact in the Euclidean topology. For every $x\in\mathbb R^d$, $\|x\|_2\leq\|x\|_1$ because $(\sum_i|x_i|)^2\geq\sum_ix_i^2$, and $\|x\|_1\leq d\|x\|_2$ because $\sum_i|x_i|\leq d\max_i|x_i|\leq d\|x\|_2$. These inequalities show that the Euclidean and $\ell^1$ metrics have the same open sets, so the simplex is compact in its declared topology. By continuity of $h$ and $D$, each fiber $h^{-1}(\{u\})$ and each sublevel set $\{q:D(q\|p)\leq r\}$ is closed in the simplex and hence compact by [F7]. The continuous-image and extreme-value conclusions in [F8] therefore apply to these sets. In particular, [F4] makes $q\mapsto D(q\|p)+\beta h(q)$ continuous on the compact simplex, so it attains a finite minimum $m_\beta$. The rate $D$ is nonnegative by [F5]. The empirical macrostate law under $p^{\otimes n}$ has rate $D(q\|p)$ by [F2]. For every Borel $B\subseteq\Delta(\mathcal A)$, the canonical macrostate probability is exactly
$$p_{n,\beta}(L_n\in B)=\frac{\int_Be^{-n\beta h(q)}\,d\mu_n(q)}{\int_{\Delta(\mathcal A)}e^{-n\beta h(q)}\,d\mu_n(q)},$$
where $\mu_n$ is the base law of $L_n$; this follows by summing the word weights in [F1] over the fiber $L_n^{-1}(B)$. Thus it is the tilt in [F3] with $F=-\beta h$, and its rate is $D+\beta h-m_\beta$. Its zero set is $\mathcal M_\beta$. Let $U$ be any open neighborhood of $\mathcal M_\beta$ and put $C:=\Delta(\mathcal A)\setminus U$. If $C=\varnothing$, the probability of the complement is zero. Otherwise $C$ is a nonempty closed subset of the compact simplex, hence compact by [F7]. The continuous rate is positive at every point of $C$ because its zero set is $\mathcal M_\beta\subset U$; by [F8] it attains a strictly positive minimum on $C$, and the LDP upper bound makes the canonical macrostate probability of that complement exponentially small. [F1, F2, F3, F4, F5, F6, F7, F8, algebra]

1.2 Let $q\in\mathcal M_\beta$ and put $u=h(q)$. If $r\in H_u$, then $D(r)+\beta u\geq D(q)+\beta u$, so $q\in\mathcal M_u$ and $D(q)=d(u)$. For any $v$ in the energy range, minimizing over $H_v$ gives $d(v)+\beta v\geq d(u)+\beta u$, equivalently $s(v)-\beta v\leq s(u)-\beta u$. Thus $u$ maximizes the stated entropy-minus-energy expression. [F1, algebra]

2.1 The fiber $H_u:=\{q\in\Delta(\mathcal A):h(q)=u\}$ is nonempty and closed, hence compact by step 1.1 and [F7], because $u$ is in the range of continuous $h$. By [F4] and [F8], $D$ attains its finite minimum $d(u)$ on $H_u$, so $\mathcal M_u$ is nonempty. For fixed $\delta>0$, put $B_\delta:=\{q:|h(q)-u|<\delta\}$; it is open and contains $H_u$. By [F2],
$$-\inf_{B_\delta}D\leq\liminf_n\frac1n\ln p^{\otimes n}(L_n\in B_\delta)\leq\limsup_n\frac1n\ln p^{\otimes n}(L_n\in B_\delta)\leq-\inf_{\overline B_\delta}D.$$
For each matching radius $\delta_j$ in the Statement the two infima agree, so the inner limit exists and equals their negative common value. The lower bound is finite because $B_{\delta_j}$ contains a finite-rate point of $H_u$; hence the conditioning event has positive probability for all sufficiently large $n$. [F1, F2, F4, F7, F8, given, algebra]

3.1 Write $d_\delta:=\inf_{\overline B_\delta}D$ for any $\delta>0$; since $H_u\subseteq\overline B_\delta$, $d_\delta\leq d(u)$. Fix $\varepsilon>0$ and let $K_\varepsilon:=\{q\in\Delta(\mathcal A):D(q\|p)\leq d(u)-\varepsilon\}$. By [F4], this set is closed and hence compact by [F7]; it is disjoint from $H_u$ by the definition of $d(u)$. Thus its compact image $h(K_\varepsilon)$ does not contain $u$ by [F8]. If it is nonempty, the continuous function $v\mapsto|v-u|$ on that compact image attains a positive minimum by [F8]; continuity follows from $\big||v-u|-|w-u|\big|\leq|v-w|$. Therefore the image is separated from $u$; if it is empty the conclusion is immediate. For every sufficiently small $\delta$, the closed shell $\overline B_\delta$ misses $K_\varepsilon$, so $d_\delta\geq d(u)-\varepsilon$. Together with $d_\delta\leq d(u)$, this proves $d_\delta\to d(u)$ as $\delta\downarrow0$, in particular along the matching sequence $\delta_j$. Step 2.1 now gives the iterated shell limit $-d(u)=s(u)$. [F1, F4, F7, F8, step 2.1, algebra]

4.1 Let $U$ be an open neighborhood of $\mathcal M_u$ and put $C:=\Delta(\mathcal A)\setminus U$, which is closed and hence compact by step 1.1 and [F7]. If $C\cap H_u=\varnothing$, then $h(C)$ is compact by [F8] and does not contain $u$; if $C$ is nonempty, the continuous function $v\mapsto|v-u|$ attains a positive minimum there by [F8], using $\big||v-u|-|w-u|\big|\leq|v-w|$. Thus sufficiently small shells miss $C$; this is also immediate when $C=\varnothing$. Otherwise, $C\cap H_u$ is a nonempty closed subset of the compact simplex and is compact by [F7]. Continuity of $D$ and [F8] give $d_C:=\min_{C\cap H_u}D>d(u)$, since $C$ contains no constrained minimizer. Choose $0<\eta<d_C-d(u)$ and set $K:=\{q\in C:D(q\|p)\leq d(u)+\eta\}$; it is closed and hence compact by [F4] and [F7], and it is disjoint from $H_u$. Therefore $h(K)$ is compact by [F8] and does not contain $u$. If empty it is already separated from $u$; otherwise, the continuous distance function $v\mapsto|v-u|$ attains a positive minimum there by [F8], so $h(K)$ is separated from $u$. Hence for all sufficiently small $\delta$, $\inf_{C\cap\overline B_\delta}D\geq d(u)+\eta$. For every sufficiently small matching radius $\delta_j$, we also have $d_{\delta_j}<d(u)+\eta/2$. The LDP upper bound [F2] on the closed set $\overline{C\cap B_{\delta_j}}\subseteq C\cap\overline B_{\delta_j}$ bounds the numerator's logarithmic limsup exponent by $-d(u)-\eta$. By step 2.1 the denominator's logarithmic limit exponent is $-d_{\delta_j}$, so subtracting gives a conditional logarithmic limsup at most $d_{\delta_j}-d(u)-\eta<-\eta/2$. Thus for every sufficiently large $j$ the conditional probability tends to zero exponentially as $n\to\infty$, which gives the asserted iterated concentration limit. [F1, F2, F4, F7, F8, step 2.1, step 3.1, algebra]

5.1 Conversely, let $u$ maximize $s(v)-\beta v$ and let $q\in\mathcal M_u$. For any $r\in\Delta(\mathcal A)$, put $v=h(r)$. Then $D(r)+\beta v\geq d(v)+\beta v\geq d(u)+\beta u=D(q)+\beta u$, so $q\in\mathcal M_\beta$. This proves both the equality of energy sets and the macrostate criterion. Rearranging $s(v)-\beta v\leq s(u)-\beta u$ gives exactly $s(v)\leq s(u)+\beta(v-u)$; hence the criterion is the stated upper-supporting-line condition, with no formal inverse-transform assumption. [F1, step 1.2, algebra] ∎

## Remarks

For a probability law $\rho$ on a measurable space and a bounded measurable $G$, write $T_G(\rho)$ for the normalized exponential tilt $T_G(\rho)(B):=\int_B e^G\,d\rho/\int e^G\,d\rho$. Let $\Omega_n=\mathcal A^n$ with its discrete $\sigma$-algebra, and let $\mathcal P(X)$ denote Borel probability measures on $X$. Since $h$ is continuous on compact $\Delta(\mathcal A)$, the indicated tilts are finite and positive. The square records that tilting word probabilities by a weight depending only on the empirical macrostate commutes with pushing the law forward by $L_n$:

```tikzcd
\mathcal P(\Omega_n) \arrow[r, "(L_n)_*"] \arrow[d, "T_{-n\beta h\circ L_n}"'] & \mathcal P(\Delta(\mathcal A)) \arrow[d, "T_{-n\beta h}"] \\
\mathcal P(\Omega_n) \arrow[r, "(L_n)_*"'] & \mathcal P(\Delta(\mathcal A))
```

For an arbitrary probability law $\rho$ on the finite space $\Omega_n$ and every Borel $B\subseteq\Delta(\mathcal A)$, the two routes assign $B$ the same mass:
$$ \frac{\sum_{x^n:L_n(x^n)\in B}\rho(\{x^n\})e^{-n\beta h(L_n(x^n))}}{\sum_{x^n\in\Omega_n}\rho(\{x^n\})e^{-n\beta h(L_n(x^n))}} = \frac{\sum_{q\in L_n(\Omega_n)\cap B}(L_n)_*\rho(\{q\})e^{-n\beta h(q)}}{\sum_{q\in L_n(\Omega_n)}(L_n)_*\rho(\{q\})e^{-n\beta h(q)}}. $$
The equality follows by grouping the finite word sums into the fibers of $L_n$. In particular, setting $\rho=p^{\otimes n}$ gives the word-law identity used in step 1.1. The diagram summarizes the identity and is not used as a proof.
