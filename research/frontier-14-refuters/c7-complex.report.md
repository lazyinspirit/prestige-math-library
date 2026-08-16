<!-- Recovered by Alpha-a from research/frontier-14-dispatch/refuter-refuter-c7-complex.log (stdout summary; no numbered block emitted). -->

## Fatal

1. `def-self-adjoint-complex-function-algebra` — Definition, line 27

The sentence says \(C(X,\mathbb C)\) is equipped with the metric from `def-complex-metric-convergence-and-continuity`. That citation defines only
\[
d_{\mathbb C}:\mathbb C\times\mathbb C\to\mathbb R,\qquad d_{\mathbb C}(z,w)=|z-w|,
\]
not a metric on the function space. See [the definition](/Users/ianx/Projects/prestige-math-library/items/def-complex-metric-convergence-and-continuity.md:27). The actual function-space uniform metric is
\[
\bar\rho(f,g)=\sup_{x\in X}\min\{d(f(x),g(x)),1\},
\]
defined in [def-topology-of-uniform-convergence](/Users/ianx/Projects/prestige-math-library/items/def-topology-of-uniform-convergence.md:53).

This is not load-bearing for the algebraic notions of complex function algebra or self-adjointness, and the later component estimates use \(d_{\mathbb C}\) correctly. It is, however, the only apparent attempted foundation in this chain for treating \(C(X,\mathbb C)\) as a metric space: the complex theorem’s Statement and steps 2.2–4.1 use “uniform closure” and “uniformly dense,” but neither it nor the Definition depends on the function-space uniform-topology item. Thus the Definition contains an ill-typed claim and the downstream closure terminology lacks its declared function-space structure, even though the explicit epsilon estimates establish the intended true theorem.

**Severity: fatal** — a mathematical Definition makes a false metric-scope claim, with downstream interface use.

## Nonfatal

2. `lem-real-part-of-a-self-adjoint-complex-function-algebra` — steps 1.2 and 2.1

Step 1.2 declares \(A_{\mathbb R}\) a real function algebra, which requires \(A_{\mathbb R}\subseteq C(X,\mathbb R)\) by [the cited real-algebra definition](/Users/ianx/Projects/prestige-math-library/items/def-unital-separating-real-function-algebra-general.md:27). It proves algebraic closure but not that members are continuous as maps into \(\mathbb R\). Step 2.1 identifies \(u=\operatorname{Re}f\), \(v=\operatorname{Im}f\), and gives component inequalities, but merely calls them “consistent with their continuity”; it never draws the continuity conclusion. Moreover, [L5] defines metric continuity only for maps between subsets of \(\mathbb C\), whereas \(X\) is an arbitrary topological space.

The gap is routine: \(u,v\in A\) are continuous as \(\mathbb C\)-valued maps, their ranges lie in \(\mathbb R\), and the restricted complex metric on \(\mathbb R\) is the usual real metric, so their corestrictions are continuous. This is comfortably within the 30-second rule.

**Severity: nonfatal.**

3. `thm-complex-stone-weierstrass-self-adjoint` — step 4.1

[Step 4.1](/Users/ianx/Projects/prestige-math-library/items/thm-complex-stone-weierstrass-self-adjoint.md:66) invokes approximation “within \(\varepsilon/2\)” without introducing \(\varepsilon>0\) in the common-zero branch. The \(\varepsilon\) introduced in step 2.1 belongs to the distinct dense alternative. Formally the converse inclusion needs: “Let \(F\in I^{\mathbb C}_{x_0}\) and \(\varepsilon>0\).”

With that routine quantifier supplied, both component approximations exist and step 3.1 proves the inclusion. The converse is therefore substantively proved, not assumed.

**Severity: nonfatal.**

No other fatal defect found. In particular:

- The repaired real-part title matches its Statement and genuinely uses point separation.
- The generated-algebra corollary’s `[L1]` states exactly the density conclusion of the complex theorem; conjugation stability of all finite algebraic expressions is valid.
- The real unitization \(A^+=A+\mathbb R1\) is defined before use and is an algebra. Its product calculation is correct, its cases are exhaustive and exclusive, and both \(\varepsilon\)-estimates close, including \(c=0\).
- For \(X=\varnothing\), all five items reduce correctly to the unique empty function. On a singleton, the zero algebra realizes the unique-common-zero branch, while any unital algebra realizes the full branch; the corollary also works with \(S=\varnothing\), since point separation is vacuous.
- No assigned dependency target has an `ai-generated` Statement or Construction.

Coverage: I read all five assigned items fully, the relevant four proof-contract entries and every boundary row, the containing A-page prose, and all fifteen unique direct dependency items fully. No required on-disk item was sampled or left unchecked. The two external source PDFs did not yield extractable web content, but dependency fidelity was checked against the exact repository items as required.
