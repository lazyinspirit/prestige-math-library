---
id: def-quadratic-covariation-of-brownian-ito-processes
kind: definition
title: "Quadratic covariation of Brownian Ito processes"
status: draft
origin: pipeline
deps: [def-quadratic-variation-along-a-partition-sequence, def-convergence-in-probability, def-continuity-real, def-partition-and-refinement]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Aad van der Vaart, Martingales, Diffusions and Financial Mathematics (preliminary notes), Definition 5.62 and Theorem 5.64"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Definition

Fix continuous real processes $X=(X_t)_{t\ge0}$ and $Y=(Y_t)_{t\ge0}$: for every
$\omega$ in a measurable event of probability one the paths $t\mapsto X_t$
and $t\mapsto Y_t$ are continuous on $[0,\infty)$
[[def-continuity-real]]. Fix $T>0$ and a deterministic partition sequence
$(\pi_n)$ of $[0,T]$ with mesh tending to $0$
[[def-quadratic-variation-along-a-partition-sequence]]. For each $n$ write
$\pi_n=(m_n,s^{(n)})$ and form the two families of **cross-increment partial
sums**
$$S^{\mathrm{step}}_n(t):=\sum_{\substack{1\le k\le m_n\\s^{(n)}_k\le t}}\bigl(X_{s^{(n)}_k}-X_{s^{(n)}_{k-1}}\bigr)\bigl(Y_{s^{(n)}_k}-Y_{s^{(n)}_{k-1}}\bigr),$$
$$S^{\mathrm{part}}_n(t):=S^{\mathrm{step}}_n(t)+\bigl(X_t-X_{s^{(n)}_{k(t)}}\bigr)\bigl(Y_t-Y_{s^{(n)}_{k(t)}}\bigr)\quad(k(t)<m_n),$$
with $S^{\mathrm{part}}_n(T):=S^{\mathrm{step}}_n(T)$ and $k(t)$ the largest
index with $s^{(n)}_{k(t)}\le t$; these are the cross sums corresponding to the
two conventions of
[[def-quadratic-variation-along-a-partition-sequence]] specialized to the pair
$(X,Y)$, and both are $0$ at $t=0$.

1. **Existence and value of the covariation.** We say that the **quadratic
   covariation $[X,Y]$ exists on $[0,T]$** when there is a real process
   $t\mapsto[X,Y]_t$ on $[0,T]$ such that for *every* deterministic partition
   sequence $(\pi_n)$ of $[0,T]$ with mesh tending to $0$ both families
   converge to it uniformly in probability on $[0,T]$:
   $$\sup_{0\le t\le T}\bigl|S^{\mathrm{step}}_n(t)-[X,Y]_t\bigr|\longrightarrow0, \qquad \sup_{0\le t\le T}\bigl|S^{\mathrm{part}}_n(t)-[X,Y]_t\bigr|\longrightarrow0,$$
   the convergence being convergence in probability
   [[def-convergence-in-probability]]. The two displayed requirements are part
   of one condition: the same process $[X,Y]$ must arise for every admissible
   sequence and for both conventions. When the condition holds we call
   $[X,Y]_t$ the **quadratic covariation of $X$ and $Y$ at time $t$**, and we
   write $[X]:=[X,X]$ and call it the **quadratic variation of $X$**. Since
   probability limits are unique, $[X,Y]$ is then uniquely determined as a
   process on $[0,T]$ up to indistinguishability; the definition is applied
   separately on each finite horizon, and when the covariations on all
   horizons are compatible we write the resulting process on $[0,\infty)$
   again as $[X,Y]$.

2. **Symmetry and polarization.** Exchanging the two factors does not change
   the definition, so $[X,Y]=[Y,X]$ whenever either side exists. The
   identities
   $$[X+Y]=[X]+2[X,Y]+[Y],\qquad [X-Y]=[X]-2[X,Y]+[Y]$$
   hold on the domain where all covariations appearing in them exist: the
   cross-increment sums are bilinear in the pair, so the displayed identities
   are exact at the level of partial sums for every partition, and probability
   limits pass through finite algebraic identities. In particular
   $[X,Y]=\tfrac12\bigl([X+Y]-[X]-[Y]\bigr)$ and
   $4[X,Y]=[X+Y]-[X-Y]$ on that domain.

3. **Bilinearity and insensitivity to constants.** If the covariations
   $[X_1,Y]$, $[X_2,Y]$ and $[X_1+X_2,Y]$ exist on $[0,T]$, then
   $[X_1+X_2,Y]=[X_1,Y]+[X_2,Y]$ there, and $[cX,Y]=c[X,Y]$ for real $c$;
   moreover $[X+c,Y]=[X,Y]$ for every real constant $c$, because the
   increments of a constant process are zero. These are again exact
   identities of partial sums plus uniqueness of limits.

4. **Zero covariation with a continuous finite-variation process.** Let
   $A=(A_t)$ be continuous on a full-measure event and admit, for every
   $\omega$ in that event, a representation $A_t(\omega)=\int_0^ta_s(\omega)\,ds$
   for a pathwise Lebesgue-integrable $a$ on every finite interval. Then for
   each $T$ and each admissible partition sequence, the cross sums of $A$
   against any continuous process $Y$ satisfy
   $$\Bigl|\sum_k\bigl(A_{s_k}-A_{s_{k-1}}\bigr)\bigl(Y_{s_k}-Y_{s_{k-1}}\bigr)\Bigr| \le\Bigl(\max_k\sup_{u,v\in[s_{k-1},s_k]}|Y_u-Y_v|\Bigr)\int_0^T|a_s|\,ds,$$
   because the triangle inequality for the pathwise Lebesgue integral gives $\sum_k|A_{s_k}-A_{s_{k-1}}|\le\int_0^T|a_s|\,ds$; the
   maximum tends to $0$ along vanishing meshes by uniform continuity of the
   continuous path $Y$ on the compact interval $[0,T]$. Hence $[A,Y]$ exists
   and equals the zero process for every such $A$ and every continuous $Y$,
   and in particular $[A,A']=0$ for two such processes. In the notation of the
   page this says that **continuous finite-variation parts contribute nothing
   to quadratic covariation**.

5. **Scope and choice.** The definition is purely about continuous paths and
   deterministic partition sequences; no adaptedness, no measurability of the
   processes beyond path continuity on a full-measure event, and no filtration
   is used. Consequently no choice principle is consumed by this definition or
   by its clauses 2--4: partitions are given finite lists, the sums are finite
   sums of real numbers, and the limits are probability limits of real random
   variables. The definition detects existence rather than postulating it;
   existence for Brownian Ito processes is the content of the following
   theorem, and no symbol $[X,Y]$ may be used before that existence has been
   established for the processes at hand.
