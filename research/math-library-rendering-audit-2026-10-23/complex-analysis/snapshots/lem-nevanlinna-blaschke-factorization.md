---
id: lem-nevanlinna-blaschke-factorization
kind: lemma
title: "Blaschke factorization of a Nevanlinna-class function"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-nevanlinna-class-on-the-disc, lem-nevanlinna-sup-mean-criterion, thm-hardy-zero-set-blaschke-condition, def-blaschke-product, thm-blaschke-product-boundary-values-and-zeros, thm-removable-singularity-characterizations, thm-algebra-of-complex-derivatives, thm-monotone-convergence-for-the-integral, thm-mean-value-property-for-plane-harmonic-functions, def-mean-value-property-for-plane-functions, cor-holomorphic-mean-value-property, def-the-one-dimensional-torus-and-normalized-haar-integral, thm-fatou-lemma, thm-jensen-formula-on-a-disc]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for lem-nevanlinna-blaschke-factorization and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-20; completed reader repair plus item-specific Alpha disposition. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"4d2dca633d2b6151c4e7eabaf690b17ada7d7a4fcca9a4101d27a72fd3db1e9f","evidence":["research/frontier-38-owner-30-reader-20.md","research/frontier-38-owner-30-reader-findings-20.json","research/frontier-38-owner-30-dispatch/reader-reader-20.result.json","research/frontier-38-owner-30-step5-hash-20-post-5a.json","research/frontier-38-owner-30-alpha-batch-20-5a-decisions.json","research/frontier-38-owner-30-dispatch/alpha-5a-batch-20.result.json"],"historical_binding":{"commit":"d90f26208","file":"items/lem-nevanlinna-blaschke-factorization.md","historical_raw_sha256":"9130e7d8bbe760473f9d228eebacbf1fab994d151d7c084309057d347a517278","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:34:44.642Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §5, Lemma 5.2"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "printed p. 66: for $f\\in N$, the Blaschke product $B$ of its zeros converges and $g=f/B\\in N$, with $\\log|g|$ the least harmonic majorant of $\\log|f|$."
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §6.3"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "The Nevanlinna (N) and Smirnov (N+) classes, printed pp. 64-69: Blaschke factorization inside $N$."
---

## Statement

Let $f\in N(\mathbb D)$ with $f\not\equiv0$, let $(a_n)_{n\ge1}$ be its zero
sequence repeated with multiplicity and let $B$ be the associated Blaschke
product. Then $(a_n)$ is a Blaschke sequence, so $B$ is a Blaschke product in
the sense of [[def-blaschke-product]], the quotient $g:=f/B$ extends
holomorphically to $\mathbb D$ (removable singularities at the $a_n$), $g$ has
no zeros in $\mathbb D$, $|f(z)|\le|g(z)|$ for every $z\in\mathbb D$, and
$g\in N(\mathbb D)$.

## Facts & Assumptions

**Given:** A function $f\in N(\mathbb D)$, $f\not\equiv0$, a harmonic majorant $h_0\ge0$ of $\log^+|f|$, the zero sequence $(a_n)$ with multiplicity, and the constants $N(r):=\#\{n:|a_n|<r\}$ and $S:=\sum_n(1-|a_n|)$.

[L1] Membership $f\in N(\mathbb D)$ means that $\log^+|f|$ has a harmonic majorant, and the equivalent sup-mean form holds; conversely a holomorphic $F$ with $\sup_{0<r<1}\int_{\mathbb T}\log^+|F(r\zeta)|\,dm(\zeta)<+\infty$ lies in $N(\mathbb D)$ ([[def-nevanlinna-class-on-the-disc]], [[lem-nevanlinna-sup-mean-criterion]]).

[L2] If $F\not\equiv0$ is holomorphic on $\mathbb D$ and $\liminf_{r\uparrow1}\int_{\mathbb T}\log|F(r\zeta)|\,dm(\zeta)<+\infty$, then the zero sequence of $F$ satisfies $\sum_n(1-|c_n|)<+\infty$ ([[thm-hardy-zero-set-blaschke-condition]]).

[L3] For a Blaschke sequence the product $B$ is holomorphic with zeros exactly the $a_n$ counted with multiplicity and $|B|\le1$ on $\mathbb D$ ([[def-blaschke-product]], [[thm-blaschke-product-boundary-values-and-zeros]]).

[L4] If $F$ is holomorphic on the punctured disc $0<|z-a|<\rho$ and bounded there, then $F$ extends holomorphically across $a$; a holomorphic function has a zero of finite order at an isolated zero, and $F/B$ is holomorphic off the zero set of $B$ ([[thm-removable-singularity-characterizations]], [[thm-algebra-of-complex-derivatives]], [[def-blaschke-product]]).

[L5] Mean value of the logarithm of a linear factor: for every $c\in\mathbb C$, $$\int_{\mathbb T}\log|\zeta-c|\,dm(\zeta)=\log^+|c|.$$ For $|c|<1$ this is $\int_{\mathbb T}\log|1-\overline c\zeta|\,dm(\zeta)$, the mean of the harmonic function $\log|1-\overline cw|$ over the unit circle, which equals its value $\log1=0$ at the centre; for $|c|>1$ it is $\log|c|+\int_{\mathbb T}\log|1-\zeta/c|\,dm(\zeta)=\log|c|$ by the same mean value property. For $|c|=1$, apply the boundary-zero limiting form of Jensen to $1-\overline c w$, whose value at zero is one; its boundary logarithm is $\log|\zeta-c|$. Here the harmonic functions are real parts of holomorphic functions on a neighbourhood of $\overline{\mathbb D}$, and the torus integral agrees with the circle average ([[thm-jensen-formula-on-a-disc]], [[cor-holomorphic-mean-value-property]], [[thm-mean-value-property-for-plane-harmonic-functions]], [[def-mean-value-property-for-plane-functions]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[L6] If $0\le g_1\le g_2\le\cdots$ are measurable with $g_n\uparrow g$ pointwise, then $\int g_n\,dm\uparrow\int g\,dm$; moreover for a sequence of nonnegative measurable functions Fatou's inequality $\int\liminf_n g_n\,dm\le\liminf_n\int g_n\,dm$ holds ([[thm-monotone-convergence-for-the-integral]], [[thm-fatou-lemma]]).

[L7] Elementary estimates: $\log(1/x)\le2(1-x)$ for $1/2\le x\le1$, and $\log(1/r)\le2(1-r)$ for $1/2\le r\le1$; $\log^+|g|\le\log^+|f|+\log(1/|B|)$ where $B\ne0$, when $g=f/B$ and $|B|\le1$. [algebra]



## Proof

**Proof technique:** direct.

1.1 The zero sequence satisfies the Blaschke condition. For every $0<r<1$, monotonicity of the integral and $\log|f|\le\log^+|f|\le h_0$ give $\int_{\mathbb T}\log|f(r\zeta)|\,dm(\zeta)\le\int_{\mathbb T}h_0(r\zeta)\,dm(\zeta)=h_0(0)<+\infty$ by the mean value property; hence the liminf hypothesis of [L2] holds and $\sum_n(1-|a_n|)<+\infty$, so $(a_n)$ is a Blaschke sequence and $B$ is a well-defined Blaschke product with $|B|\le1$. [given, L1, L2, L3, L5]

1.2 The logarithm of one factor. Let $a\in\mathbb D$ and $0<r<1$ with $r\ne|a|$. Since $|b_a(r\zeta)|=|a-r\zeta|/|1-\overline ar\zeta|$ and $\int_{\mathbb T}\log|1-\overline ar\zeta|\,dm(\zeta)=0$ by the mean value property of the zero-free harmonic function $\log|1-\overline arw|$ on a neighbourhood of $\overline{\mathbb D}$, [L5] gives $$\int_{\mathbb T}\log\frac1{|b_a(r\zeta)|}\,dm(\zeta)=\log\frac1r-\int_{\mathbb T}\log|\zeta-\tfrac ar|\,dm(\zeta)=\log\frac1r-\log^+\frac{|a|}{r}=\begin{cases}\log\frac1r,&|a|<r,\\[2pt]\log\frac1{|a|},&|a|>r.\end{cases}$$ [given, L5, algebra]

2.1 The quotient. Put $g:=f/B$, holomorphic on the complement of the zero set of $B$. At a point $a$ occurring $m\ge1$ times in the zero sequence, $B$ has a zero of order $m$ and $f$ a zero of order at least $m$ (the sequence lists all zeros with multiplicity), so $g$ is bounded near $a$ and extends holomorphically there by [L4]; hence $g$ extends holomorphically to all of $\mathbb D$. Since the zeros of $B$ are exactly the $a_n$ and $g$ is holomorphic at those points with $g\ne0$ there — the multiplicity of the numerator's zero is exactly exhausted when the sequence is repeated with multiplicity — $g$ has no zero in $\mathbb D$; and $|g|=|f|/|B|\ge|f|$ off that zero set because $|B|\le1$, with the inequality extending to the zeros by continuity. [step 1.1, L3, L4, algebra]

2.2 The mean of $-\log|B_r|$ at non-exceptional radii. Fix $0<r<1$ with $r\notin\{|a_n|\}$. The partial sums $\sum_{n\le N}-\log|b_{a_n}(r\zeta)|$ are nonnegative and increase to $-\log|B(r\zeta)|$ (the product converges and each factor has modulus $\le1$), so the monotone convergence theorem [L6] and step 1.2 give $$\int_{\mathbb T}\log\frac1{|B(r\zeta)|}\,dm(\zeta)=\sum_n\int_{\mathbb T}\log\frac1{|b_{a_n}(r\zeta)|}\,dm(\zeta)=N(r)\log\frac1r+\sum_{|a_n|>r}\log\frac1{|a_n|}=:R(r),$$ where $N(r)<+\infty$ because $(a_n)$ has no accumulation point in $\{|z|<r\}$ and the sum is finite: only finitely many zeros have $|a_n|<1/2$, while the remaining terms obey $\log\frac1{|a_n|}\le2(1-|a_n|)$ by [L7]. [step 1.2, L6, L7, algebra]

3.1 Bound at non-exceptional radii. For $r\ge1/2$, $R(r)\le2N(r)(1-r)+2S\le2S+2S=4S$, because $N(r)(1-r)\le\sum_{|a_n|<r}(1-|a_n|)\le S$ and by [L7]. [step 2.2, L7, algebra]

4.1 Exceptional radii. Let $r\in[1/2,1)$ be arbitrary and choose a sequence $r_k\downarrow r$ with $r<r_k<1$ and $r_k\notin\{|a_n|\}$ for all $k$ (the exceptional set is countable and has no accumulation point below $1$). The functions $\zeta\mapsto-\log|B(r_k\zeta)|$ are nonnegative and converge pointwise $m$-almost everywhere to $-\log|B(r\zeta)|$: for $\zeta$ outside the finite set where $B(r\zeta)=0$, continuity of $B$ gives $B(r_k\zeta)\to B(r\zeta)\ne0$. Fatou's inequality [L6] and step 3.1 therefore give $$\int_{\mathbb T}\log\frac1{|B(r\zeta)|}\,dm(\zeta)\le\liminf_k\int_{\mathbb T}\log\frac1{|B(r_k\zeta)|}\,dm(\zeta)\le4S .$$ [step 2.2, step 3.1, L6, algebra]

5.1 The quotient lies in $N(\mathbb D)$. Since $g=f/B$ and $|B|\le1$, [L7] gives $\log^+|g|\le\log^+|f|+\log(1/|B|)$. For $1/2\le r<1$, steps 2.2, 3.1 and 4.1 and the majorant bound of step 1.1 give $$\int_{\mathbb T}\log^+|g(r\zeta)|\,dm(\zeta)\le h_0(0)+4S;$$ for $0\le r\le1/2$ the holomorphic function $g$ is continuous on the compact disc $|z|\le1/2$, so $\int_{\mathbb T}\log^+|g(r\zeta)|\,dm(\zeta)\le\log^+\bigl(\sup_{|z|\le1/2}|g(z)|\bigr)<+\infty$. Hence $\sup_{0<r<1}\int_{\mathbb T}\log^+|g(r\zeta)|\,dm(\zeta)<+\infty$, and the sup-mean criterion [L1] shows that $\log^+|g|$ has a harmonic majorant, that is, $g\in N(\mathbb D)$. [step 2.1, step 4.1, L1, L7, algebra]

6.1 Assembly. Step 1.1 produces the Blaschke sequence and the product $B$; step 2.1 produces the holomorphic zero-free extension $g=f/B$ with $|f|\le|g|$; and steps 1.2–3.1 verify the sup-mean criterion for $g$, giving $g\in N(\mathbb D)$. [step 1.1, step 2.1, step 5.1] ∎
