---
id: def-covering-packing-bracketing-number-and-metric-entropy
kind: definition
title: "Covering, packing, bracketing numbers, and metric entropy"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-probability-measure
  - def-real-power
  - lem-real-power-preserves-measurability
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-minkowski-inequality-for-integrals
  - thm-real-power-laws
justified_by: [lem-packing-covering-number-comparison]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "David Pollard, Empirical Processes: Theory and Applications, Chapter 3, Definition 3.3"
      url: "http://www.stat.yale.edu/~pollard/Books/Iowa/Iowa-notes.pdf"
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1, Sections 5–6"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
---

## Definition

A pseudometric $d$ on a set $T$ is a nonnegative symmetric function $d:T\times T\to[0,\infty)$ with $d(t,t)=0$ and $d(s,t)\le d(s,u)+d(u,t)$; distinct points may have distance zero. For a nonempty subset $\mathcal F\subseteq T$ and $\epsilon>0$, the covering number $N(\epsilon,\mathcal F,d)$ is the least finite $k$ for which there are centers $f_1,\ldots,f_k\in\mathcal F$ such that every $f\in\mathcal F$ satisfies $d(f,f_j)\le\epsilon$ for some $j$. It is $+\infty$ if no finite cover exists. Set $N(\epsilon,\varnothing,d)=1$.

The packing number $D(\epsilon,\mathcal F,d)$ is the largest size of a finite subset $\{f_1,\ldots,f_k\}\subseteq\mathcal F$ whose distinct members have pairwise distance strictly greater than $\epsilon$. If the sizes of such finite subsets are unbounded, put $D=+\infty$; put $D(\epsilon,\varnothing,d)=0$. These conventions give the radius comparison proved in [[lem-packing-covering-number-comparison]]. The metric entropy is $H(\epsilon,\mathcal F,d):=\log N(\epsilon,\mathcal F,d)$ for nonempty classes, with $\log(+\infty)=+\infty$.

For a probability measure $Q$ on $(\mathcal X,\mathcal A)$ and a measurable real function $g$, set $\|g\|_{Q,r}:=(\int |g|^r\,dQ)^{1/r}$ for $1\le r<\infty$ when the integral is finite, using the real-power convention, including $0^{1/r}=0$, of [[def-real-power]]. If the integral is $+\infty$, define $\|g\|_{Q,r}:=+\infty$ directly. The function $|g|$ is measurable by [[thm-arithmetic-and-lattice-operations-preserve-measurability]], and [[lem-real-power-preserves-measurability]] makes $|g|^r$ measurable, so this nonnegative extended integral is well-defined. On a class of functions with finite such norms, $d_{Q,r}(f,g):=\|f-g\|_{Q,r}$ is a pseudometric: nonnegativity, symmetry, and zero diagonal follow from the absolute value, and the triangle inequality is [[thm-minkowski-inequality-for-integrals]]. Functions that agree $Q$-almost everywhere have distance zero. We write $N(\epsilon,\mathcal F,L^r(Q))$ for this covering number.

For measurable real endpoints $\ell\le u$ $Q$-almost everywhere, the bracket $[\ell,u]$ is the set of measurable functions $f$ satisfying $\ell\le f\le u$ $Q$-almost everywhere. Its $L^r(Q)$ width is $\|u-\ell\|_{Q,r}$. The bracketing number $N_{[]} (\epsilon,\mathcal F,L^r(Q))$ is the least number of such brackets of width at most $\epsilon$ that cover $\mathcal F$, or $+\infty$ if no finite cover exists; for the empty class set it equal to $1$. Centers of metric covers are in $\mathcal F$; bracket endpoints need not be.
