# Frontier-16 batch 4 — Step-2 scaffold notes

## Scope and design check

The owned pair is `trigonometric-and-oscillatory-examples-in-one-variable` at order `288.00023` with companion order `288.00024`. Before dependency closure, the design and `research/plan-spec.json` agreed exactly on order, title, companion, category, and the four stated prerequisites. The item-level proof pass exposed two additional page prerequisites, `connectedness` and `further-trigonometric-identities-and-inverses`; they are proposed in the manifest rather than silently assumed. The in-memory overlay of the manifest on the current spec validates cleanly, but the actual spec remains untouched and Step 4 remains authoritative.

The write-boundary list in the dispatch names three artifacts but the same dispatch and the canonical workflow require `research/frontier-16-batch-4.coverage.json` as a hard Step-2 artifact. The coverage file was therefore written as the required fourth namespaced artifact. No plan, item, library, prose-design, or other batch file was changed.

## Applyable prose-scaffold amendments

### Amendment RA4-1 — declare the prerequisites the actual proofs use

File: `research/plan-realanalysis-completion-track.md`

Section: `#### RC-12 Trigonometric and Oscillatory Examples in One Variable — level 23`

Exact old text:

> `requires`: `the-complex-exponential-and-eulers-formula`, `approximation-and-compactness-in-ck`, `darboux-lhopital-and-taylor`, `arc-length-and-rectifiable-curves`.

Exact new text:

> `requires`: `the-complex-exponential-and-eulers-formula`, `approximation-and-compactness-in-ck`, `darboux-lhopital-and-taylor`, `arc-length-and-rectifiable-curves`, `connectedness`, `further-trigonometric-identities-and-inverses`.

Reason: the topologist’s sine curve uses connected images, closure preservation, product projections, and path connectedness from `connectedness`; the tangent example uses the principal tangent/arctangent homeomorphism from `further-trigonometric-identities-and-inverses`. The four original prerequisites do not transitively reach either page. Declining this amendment leaves `undeclared-prereq` errors.

### Amendment RA4-2 — make the A-page machinery dependency-complete

File: `research/plan-realanalysis-completion-track.md`

Section: `#### RC-12 Trigonometric and Oscillatory Examples in One Variable — level 23`

Exact old text:

> **B-heavy pair.** The A page carries only what the examples need as theorems:
> the Weierstrass $M$-test applied to the classical series, the modulus estimates
> $\lvert\sin x - \sin y\rvert \le \lvert x-y\rvert$, and a `rem-` ledger naming, for
> each trig-free substitute already published, the classical form it stood in for
> and the item that now supplies it.

Exact new text:

> **B-heavy pair.** The A page carries the machinery consumed by the examples:
> the unit Lipschitz estimates for sine and cosine; the classical Weierstrass
> series, its uniform convergence, and separate probe-point, low-frequency, and
> tail estimates for the nowhere-differentiability proof; the continuous
> Riemann–Lebesgue lemma; the finite sine-harmonic sum formula; and a `rem-`
> ledger linking each published trigonometry-free substitute to its classical
> counterpart without making an examples-page item a logical dependency.

Reason: the original paragraph hid the proof obligations for the main Weierstrass theorem, the oscillatory-integral claim for `sin(nx)`, and the pointwise convergence proof for the harmonic sine series. The added results are source-backed and actually consumed.

### Amendment RA4-3 — correct the `sin(nx)` convergence claim

File: `research/plan-realanalysis-completion-track.md`

Section: `#### RC-12 Trigonometric and Oscillatory Examples in One Variable — level 23`

Exact old text:

> $\sin(nx)$ on $[0,\pi]$: pointwise divergent, not equicontinuous, no uniformly convergent subsequence, and its integrals against a fixed continuous function tend to zero.

Exact new text:

> For positive integers $n$, the sequence $f_n(x)=\sin(nx)$ on $[0,\pi]$ does not converge pointwise on the whole interval — it already diverges at $x=\pi/2$ — is not equicontinuous, has no uniformly convergent subsequence, and satisfies $\int_0^\pi g(x)\sin(nx)\,dx\to0$ for every fixed continuous $g$.

Reason: “pointwise divergent” can mean divergence at every point, which is false at $0$, $\pi$, and other points. The replacement states the exact quantified claim and names the test-function hypothesis.

### Amendment RA4-4 — reuse the classical items already published

File: `research/plan-realanalysis-completion-track.md`

Section: `#### RC-12 Trigonometric and Oscillatory Examples in One Variable — level 23`

Exact old text:

> The classical oscillator family: $\sin(1/x)$ has no limit at $0$;
> $x\sin(1/x)$ is continuous but not of bounded variation; $x^2\sin(1/x)$ is
> differentiable with discontinuous derivative; $x^2\sin(1/x^2)$ has an unbounded
> non-integrable derivative.

Exact new text:

> The correspondence ledger links the already-published
> `cex-sine-of-one-over-x-has-no-limit-at-zero`,
> `cex-graph-of-x-sin-one-over-x-is-not-rectifiable`, and
> `ex-x-squared-sine-of-one-over-x-is-differentiable` rather than replanning
> them. A new corollary records that the zero extension of $x\sin(1/x)$ is not
> differentiable at zero, and a new example proves that the zero extension of
> $x^2\sin(1/x^2)$ is differentiable with an unbounded derivative and hence has
> no Riemann-integrable derivative on $[0,1]$.

Reason: item ids are immutable and Step 4 forbids placing an existing item on a second plan page. Moreover, an item homed on a B page cannot become a dependency. The new proofs use A-page facts or earlier same-B items and the remark’s links are orientation only.

### Amendment RA4-5 — state what is actually new on the companion

File: `research/plan-realanalysis-completion-track.md`

Section: `#### RC-12 Trigonometric and Oscillatory Examples in One Variable — level 23`

Exact old text:

> **B page.** Each of the above as its own item, plus: the topologist's sine curve
> as a connected non-path-connected set; the arc length of $\sin$ on a period as an
> elliptic integral that is not elementary; $\tan$ as a homeomorphism
> $(-\pi/2,\pi/2)\to\mathbb{R}$ showing boundedness and completeness are not
> topological; $\sum \sin(n x)/n$ converging pointwise but not uniformly.

Exact new text:

> **B page.** The companion gives a concrete admissible Weierstrass parameter
> choice and the associated false differentiability claim; the missing
> differentiability fact for $x\sin(1/x)$; the
> $x^2\sin(1/x^2)$ derivative example; the sine harmonics and their
> Arzelà–Ascoli failure; a connectedness lemma and the non-path-connected
> topologist’s sine curve; the sine-period arc length as a complete elliptic
> integral together with a separately marked non-elementarity record; tangent
> as a homeomorphism between a bounded incomplete interval and the unbounded
> complete line; the pointwise but nonuniform harmonic sine series; and the
> false implications named in the ledger. Already-published classical examples
> are linked from the A-page correspondence remark and are not assigned a
> second home.

Reason: this replacement preserves every landmark while respecting immutable ids, the B-leaf rule, and the external-dependency marker.

### Amendment RA4-6 — make the elliptic non-elementarity claim honest

File: `research/plan-realanalysis-completion-track.md`

Section: `#### RC-12 Trigonometric and Oscillatory Examples in One Variable — level 23`

Exact old text:

> the arc length of $\sin$ on a period as an elliptic integral that is not elementary

Exact new text:

> the locally proved identity $L=4\sqrt2\,E(1/\sqrt2)$ for one sine period, followed by a source-checked `rem-` item marked `proved_here: false` recording that the corresponding second-kind elliptic integral has no elementary antiderivative

Reason: the length reduction is elementary and closes from published arc-length and trigonometric dependencies. Proving non-elementarity requires Liouville/differential-algebra machinery not available in the declared prerequisite closure, so combining both claims in one locally proved example would be dishonest.

## Exact A-page summary for Step 5

Sine and cosine are available with derivative, period, and inverse-function laws, while uniform convergence and polynomial approximation supply the M-test, the uniform-limit theorem, the Arzelà–Ascoli framework, and a route to oscillatory integral decay. Bounded variation and rectifiability identify when a continuous graph has finite length, and connectedness distinguishes continuous images and closures from path-connected spaces.

The development proves unit Lipschitz estimates for sine and cosine, constructs the classical Weierstrass series, and isolates probe-point, low-frequency, and tail estimates that force nowhere differentiability under Weierstrass’s original parameter condition. It also proves a continuous Riemann–Lebesgue lemma and a finite sine-sum identity. The companion applies this machinery to reciprocal oscillators, sine harmonics, the topologist’s sine curve, elliptic arc length, tangent as a homeomorphism, a conditionally convergent sine series, and the corresponding false implications.

The B page must have no authored summary body.

## Web-research ledger

Every source below was opened as a substantive full-text page or PDF through the web-research channel. The repository fetcher could not resolve any hostname in this sandbox and therefore could not create `fetch_verified` stamps; that unresolved mechanical gate is recorded under final checks.

| Source | Exact range read | Planned material supported |
|---|---|---|
| John K. Hunter, *An Introduction to Real Analysis* — `https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf` | Examples 6.10, 8.9–8.10; Theorem 9.22; Example 9.24 | reciprocal sine limits and derivatives; M-test; Weierstrass convergence and classical nowhere-differentiable example |
| Jeff Calder, *Weierstrass’s Non-Differentiable Function* — `https://www-users.cse.umn.edu/~jwcalder/104F14/weierstrass-function.pdf` | Theorem 1 and proof, pp. 1–5 | exact condition $ab>1+3\pi/2$; cosine modulus estimate; probe construction; low/tail bounds; nowhere differentiability |
| Jiří Lebl, *Basic Analysis I* — `https://jirka.org/ra/realanal.pdf` | Exercise 5.2.18 | continuous Riemann–Lebesgue lemma |
| Jiří Lebl, *Basic Analysis II*, draft v2.0 — `https://www.jirka.org/ra/realanal2-draft-v2.0.pdf` | §11.8.2 finite Dirichlet-kernel calculation | finite sine-harmonic sum formula |
| John Hutchinson, *Introduction to Analysis* — `https://maths-people.anu.edu.au/~john/Assets/Analysis%201.pdf` | §15.7, Remark 15.7.2 | `sin(nx)` boundedness, failure of equicontinuity, and absence of uniformly convergent subsequences |
| Gary Gruenhage and Mark Guest, *Topology Course Notes* — `https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf` | §2.3.1, Example 111 | topologist’s sine curve connectedness and failure of path connectedness |
| L. M. Hall, *Special Functions* — `https://web.mst.edu/_disabled/lmhall/SPFNS/spfns.pdf` | §3.1, Example 3.1.2 | complete elliptic integral of the second kind and its non-elementarity outside degenerate moduli |
| HKUST Department of Mathematics, *Calculus: Rigor, Concision, Clarity* — `https://www.math.hkust.edu.hk/~majhu/Math023/Notes_2007.pdf` | §7.1.1, pp. 193–194 | sine-period arc length and the ellipse/elliptic-integral reduction |
| Coffman–Pan–Zhang, “Continuous solutions of nonlinear Cauchy–Riemann equations and pseudoholomorphic curves in normal coordinates” — `https://users.pfw.edu/zhangyu/Coffman-Pan-Zhang-2015.pdf` | Remark 3.6 | $x^2\sin(1/x^2)$ differentiable with unbounded derivative |
| Terence Tao, *An Epsilon of Room I* — `https://citeseerx.ist.psu.edu/document?doi=797aaf81819bc8ff2625b1ba3aaec2a10dfc3e30&repid=rep1&type=pdf` | Example 1.6.28 | tangent homeomorphism; boundedness and completeness not topological |
| Baris Coskunuzer, Math 302 Problem Set 8 — `https://personal.utdallas.edu/~coskunuz/courses/math302_S11/files/PS_8.pdf` | Problem 7 | local uniform convergence of the harmonic sine series away from period endpoints |
| NCSU MA 401 course text, Chapter 5 — `https://zhilin.math.ncsu.edu/TEACHING/MA401/pde_book_chap1_5.pdf` | Example 5.18 | pointwise and nonuniform behaviour of $\sum\sin(nx)/n$ |
| Jerry L. Kazdan, Math 361 Problem Set 10 — `https://www2.math.upenn.edu/~kazdan/361F15/hw/hw10.pdf` | Problem 2 | nonrectifiability of the graph of $x\sin(1/x)$ |

### Convention disagreements

- Hunter’s displayed Weierstrass example uses a rescaled cosine series, while Calder and the design use $a^n\cos(b^n\pi x)$. The scaffold follows the design and Calder.
- Calder records Weierstrass’s sufficient condition $ab>1+3\pi/2$ and mentions Hardy’s sharper $ab\ge1$. The page proves the original restrictive theorem only; the sharper result is deferred to `owner-decision`.
- A commonly reproduced parameter pair $a=1/2$, $b=11$ does **not** satisfy $ab>1+3\pi/2$. The generated companion example uses $b=15$, and proves its admissibility from the library’s elementary bound $\pi<4$.
- Natural indices in the library begin at zero. The Weierstrass sum deliberately begins at $n=0$. The sine harmonics and harmonic sine series use positive mathematical indices and are authored internally as $k+1$, so no term $1/0$ is formed.
- “Pointwise divergent” is not used to mean divergence at every point. The sine-harmonic sequence is stated not to converge pointwise on the whole interval and is witnessed at $\pi/2$.
- The complete elliptic integral is written with the modulus convention $E(k)=\int_0^{\pi/2}\sqrt{1-k^2\sin^2t}\,dt$. Sources that use the parameter $m=k^2$ are translated explicitly.
- “Non-integrable derivative” for $x^2\sin(1/x^2)$ means not Riemann/Darboux integrable on the compact interval because it is unbounded. No Lebesgue-integrability assertion is made.
- The non-elementarity record concerns an indefinite elementary antiderivative. The definite arc length is still exactly represented by the special value $4\sqrt2E(1/\sqrt2)$.
- Sources define the topologist’s sine curve with either $x>0$ or $0<x\le1$. The scaffold uses the bounded graph $0<x\le1$ plus the full vertical limit segment; the connected/non-path-connected proof is unchanged.

## Component provenance and source/edit rationale

Every mathematical-content item receives component provenance at Step 5. “AI-altered” below means the statement or proof is materially adapted into the library’s conventions and dependency vocabulary from the named source; it does not mean the source statement is uncertain.

| Item | `provenance.statement` | `provenance.proof` | Source/edit-history rationale |
|---|---|---|---|
| `cor-sine-and-cosine-are-one-lipschitz` | literature-derived | ai-altered | Calder equation (2) gives cosine; the identical bounded-derivative route gives sine. Proof uses published derivative and Lipschitz items. |
| `def-classical-weierstrass-function` | literature-derived | not-applicable | Calder Theorem 1; notation follows the design exactly. |
| `thm-classical-weierstrass-series-converges-uniformly` | literature-derived | ai-altered | Hunter Theorem 9.22/Example 9.24 and Calder’s continuity paragraph; proof is rewritten through published M-test and uniform-limit items. |
| `lem-weierstrass-probe-points` | ai-altered | ai-altered | Calder equations (4)–(6), with nearest integer made canonical through the published floor lemma. |
| `lem-weierstrass-low-frequency-difference-quotient-bound` | ai-altered | ai-altered | Calder proof step 1, separated as a reusable audit boundary and written with the new Lipschitz corollary. |
| `lem-weierstrass-tail-difference-quotient-bound` | ai-altered | ai-altered | Calder proof step 2, separated from the low-frequency estimate. |
| `thm-classical-weierstrass-function-nowhere-differentiable` | literature-derived | ai-altered | Calder Theorem 1; proof combines the two focused estimates in phase form. |
| `cor-uniform-limit-of-smooth-functions-need-not-be-differentiable` | literature-derived | ai-altered | Calder’s discussion of smooth partial sums and Hunter Example 9.24; local proof names the published smoothness definition. |
| `thm-riemann-lebesgue-lemma-for-continuous-functions` | literature-derived | ai-altered | Lebl Exercise 5.2.18; proof uses polynomial approximation and integration by parts. |
| `lem-finite-sine-harmonic-sums` | literature-derived | ai-altered | Lebl’s Dirichlet-kernel calculation, shortened to the sine formula actually consumed. |
| `rem-classical-counterparts-for-trigonometry-free-oscillators` | ai-altered | not-applicable | Editorial correspondence assembled from the design, published substitute items, Hunter, and Calder; no generated substitute is made load-bearing. |
| `ex-weierstrass-function-with-one-half-and-fifteen` | ai-generated | ai-generated | The parameter pair is locally selected and checked against the source-backed theorem. It must carry `generation.role: example` and may not be a dependency target. |
| `fs-a-continuous-function-is-differentiable-somewhere` | literature-derived | ai-altered | Calder states the historical continuous-implies-some-differentiability belief; the refutation applies the proved theorem. |
| `cor-x-sine-of-one-over-x-is-not-differentiable-at-zero` | literature-derived | ai-altered | Hunter Example 8.9; proof is rebuilt from A-page trigonometric and limit facts because published examples-page items cannot be dependencies. |
| `ex-x-squared-sine-of-one-over-x-squared` | literature-derived | ai-altered | Coffman–Pan–Zhang Remark 3.6; proof computes the derivative and explicit unbounded sequence. |
| `fs-a-differentiable-function-has-a-continuous-derivative` | ai-altered | ai-altered | Standard false converse represented by Hunter Example 8.10; refutation uses the earlier same-B $x^2\sin(1/x^2)$ example. |
| `ex-sine-harmonics-pointwise-bounded-without-uniform-subsequence` | literature-derived | ai-altered | Hutchinson Remark 15.7.2 plus Lebl’s oscillatory-integral exercise. |
| `fs-a-pointwise-bounded-sequence-of-continuous-functions-has-a-uniformly-convergent-subsequence` | literature-derived | ai-altered | Hutchinson frames exactly the failure of boundedness without equicontinuity; proof cites the preceding same-B example. |
| `lem-topologists-sine-curve-is-connected` | literature-derived | ai-altered | Gruenhage–Guest Example 111; connectedness is separated from the path obstruction. |
| `cex-topologists-sine-curve-connected-not-path-connected` | literature-derived | ai-altered | Gruenhage–Guest Example 111; proof consumes the preceding connectedness lemma and isolates the last-axis-time contradiction. |
| `ex-sine-period-arc-length-as-a-complete-elliptic-integral` | literature-derived | ai-altered | HKUST §7.1.1 and Hall Example 3.1.2; local proof derives the exact special value. |
| `rem-sine-period-arc-length-integrand-is-nonelementary` | literature-derived | not-supplied | Hall Example 3.1.2; future item is `proved_here: false` with a structured external-dependency record. |
| `ex-tangent-homeomorphism-between-bounded-and-unbounded-spaces` | literature-derived | ai-altered | Tao Example 1.6.28, rebuilt from the published arctangent and completeness dictionary. |
| `ex-sine-harmonic-series-pointwise-not-uniform` | literature-derived | ai-altered | UTD Problem 7 and NCSU Example 5.18; proof uses Dirichlet cancellation and an explicit uniform-Cauchy obstruction. |
| `fs-a-continuous-function-on-a-compact-interval-has-a-rectifiable-graph` | ai-altered | ai-altered | Universal false claim distilled from Kazdan Problem 2 and the published classical witness; proof is rebuilt locally to respect the B-leaf rule. |

### Generated-statement truth-risk obligation

Only `ex-weierstrass-function-with-one-half-and-fifteen` has an AI-generated construction. It is non-load-bearing: no item lists it in `deps`. Step 5 must independently recompute

$$\pi<4,\qquad 1+\frac{3\pi}{2}<7<\frac{15}{2},$$

confirm that $15$ is odd, and check the exact substituted series before writing `generation.role: example`. The counterexample search found no issue; the earlier candidate $b=13$ was mathematically admissible but was replaced by $b=15$ so the proof closes from the weaker published bound $\pi<4$ without depending on an examples-page item. No generated theorem, proposition, definition, lemma, false statement, or remark is planned.

## External fallback

`rem-sine-period-arc-length-integrand-is-nonelementary` is the sole external fallback.

- `source_url`: `https://web.mst.edu/_disabled/lmhall/SPFNS/spfns.pdf`
- Exact sourced statement: for nondegenerate modulus $0<k<1$, the complete elliptic integral of the second kind
  $$E(k)=\int_0^{\pi/2}\sqrt{1-k^2\sin^2\theta}\,d\theta$$
  cannot be evaluated in terms of elementary functions.
- Local proof attempted: `ex-sine-period-arc-length-as-a-complete-elliptic-integral` reduces the sine-period length to $k=1/\sqrt2$. Proving non-elementarity from there requires Liouville’s theorem on elementary antiderivatives or equivalent differential algebra, neither present in the declared closure and not a definition-or-lemma-sized prerequisite.
- Necessity: the design explicitly requires both the exact elliptic representation and its non-elementarity. Splitting the sourced non-elementarity into a `rem-` with `proved_here: false` keeps the exact length locally proved and the unavailable differential-algebra result reader-visible.
- Step-5 frontmatter must include `external_dependency.source_url`, `exact_statement`, `local_proof_attempt`, and `necessity` verbatim in substance; the URL must occur in `sources.references`. It has `verification.precheck: n/a`, no Proof section, and no judge block.

The same record is duplicated under `external_fallbacks` in the namespaced proof-contract artifact because the fallback remark itself is not proof-bearing and therefore is not in proof-contract `scope`.

## Proof decomposition, corollary pass, and boundary obligations

Both required passes were performed for this pair.

Long-proof decomposition:

- The classical Weierstrass proof is decomposed into `lem-weierstrass-probe-points`, `lem-weierstrass-low-frequency-difference-quotient-bound`, and `lem-weierstrass-tail-difference-quotient-bound`, followed by the main theorem.
- The topologist’s sine curve is decomposed into `lem-topologists-sine-curve-is-connected` and the counterexample whose remaining work is the path obstruction.
- The harmonic sine series uses `lem-finite-sine-harmonic-sums` before Dirichlet’s test instead of deriving the finite trigonometric identity inside the example.
- The sine-harmonic integral decay is isolated as `thm-riemann-lebesgue-lemma-for-continuous-functions`, rather than hidden inside the multi-claim example.
- The elliptic length computation and the non-elementarity record are separate so the local proof does not pretend to prove a differential-algebra theorem.

Useful corollaries added:

- `cor-sine-and-cosine-are-one-lipschitz` supplies the exact modulus estimate used by the Weierstrass proof.
- `cor-uniform-limit-of-smooth-functions-need-not-be-differentiable` records the immediate conceptual consequence of the classical construction.
- `cor-x-sine-of-one-over-x-is-not-differentiable-at-zero` closes a classical fact adjacent to the already-published continuity and variation examples.

No further corollary is proposed. In particular, Hardy’s sharp parameter range for the Weierstrass function is not cheap from the selected proof, and general Fourier convergence belongs to a different development.

The A page is far below the 60-item ceiling and the companion is also below it. No split is proposed and nothing was pruned to avoid a split.

The durable proof-contract artifact covers every proof-bearing item. The highest-risk boundaries are:

- the $n=0$ first term of the Weierstrass series and the empty low-frequency block at $m=0$;
- the nearest-integer tie $z_m=-1/2$ and strict positivity of every probe denominator;
- strict positivity of $2/3-\pi/(ab-1)$, not equality at the boundary;
- positive frequency indices in the Riemann–Lebesgue lemma and the harmonic sine series;
- the two branches $x\in2\pi\mathbb Z$ and $x\notin2\pi\mathbb Z$ in the finite sine-sum formula;
- the sequences for $x^2\sin(1/x^2)$ and $x\sin(1/x)$ use $k+1$, never a zero denominator;
- the topologist’s sine-curve zero-time set is nonempty and compact before its maximum is taken;
- the elliptic modulus is $1/\sqrt2$, strictly between the degenerate values;
- the tangent interval omits its Cauchy limit endpoint;
- the nonuniform harmonic-series tail is indexed consistently with the library’s zero-based function-series convention;
- both directions of rectifiable iff coordinatewise bounded variation are disposed in the final false statement.

No registered `finite_smoke` model applies to these analysis and topology claims. Each contract therefore has an empty `finite_smoke` array; no green finite-smoke result is claimed as evidence.

## Exact Step-5 clauses bound by same-batch proof-contract citations

The following clauses must occur verbatim in the authored source sections:

- `def-classical-weierstrass-function`: `Let $0<a<1$ and let $b>1$ be an odd integer.` and `$$W_{a,b}(x):=\sum_{n=0}^{\infty}a^n\cos(b^n\pi x).$$`
- `cor-sine-and-cosine-are-one-lipschitz`: `$|\cos u-\cos v|\le|u-v|$ for all real $u,v$.`
- `lem-weierstrass-probe-points`: `$0<x_m-x_0\le 3/(2b^m)$ and $x_m\to x_0$.` and `For every $n\ge m$, $\cos(b^n\pi x_m)=-(-1)^{k_m}$ and $\cos(b^n\pi x_0)=(-1)^{k_m}\cos(b^{n-m}z_m\pi)$.`
- `thm-classical-weierstrass-series-converges-uniformly`: `The series defining $W_{a,b}$ converges absolutely at every real point and uniformly on $\mathbb R$.`, `Its sum $W_{a,b}:\mathbb R\to\mathbb R$ is continuous.`, and `The partial sums converge uniformly to $W_{a,b}$ on $\mathbb R$.`
- `lem-weierstrass-low-frequency-difference-quotient-bound`: `$|A_m|<\pi(ab)^m(x_m-x_0)/(ab-1)$.`
- `lem-weierstrass-tail-difference-quotient-bound`: `$|B_m|\ge(2/3)(ab)^m(x_m-x_0)$.`
- `thm-classical-weierstrass-function-nowhere-differentiable`: `If $ab>1+3\pi/2$, then $W_{a,b}$ is continuous at every real point and differentiable at no real point.` and `Then $W_{a,b}$ is continuous at every real point and differentiable at no real point.`
- `thm-riemann-lebesgue-lemma-for-continuous-functions`: `For every continuous $g:[0,\pi]\to\mathbb R$, $\lim_{n\to\infty}\int_0^\pi g(x)\sin(nx)\,dx=0$.`
- `ex-sine-harmonics-pointwise-bounded-without-uniform-subsequence`: `The sequence $(f_n)$ is uniformly bounded, is not equicontinuous, and has no uniformly convergent subsequence.`
- `lem-topologists-sine-curve-is-connected`: `The topologist's sine curve $S=\{(x,\sin(1/x)):0<x\le1\}\cup(\{0\}\times[-1,1])$ is connected.`
- `lem-finite-sine-harmonic-sums`: `If $x\notin2\pi\mathbb Z$, then for every positive integer $N$, $|\sum_{n=1}^N\sin(nx)|\le1/|\sin(x/2)|$.`
- `ex-x-squared-sine-of-one-over-x-squared`: `The function $F$ is differentiable on $\mathbb R$, with $F'(0)=0$, and $F'$ is unbounded on every neighbourhood of zero.`

## Per-page item list

### `trigonometric-and-oscillatory-examples-in-one-variable` — 11 items

1. `cor-sine-and-cosine-are-one-lipschitz` — corollary — Sine and cosine are 1-Lipschitz on R
2. `def-classical-weierstrass-function` — definition — The classical Weierstrass function
3. `thm-classical-weierstrass-series-converges-uniformly` — theorem — The classical Weierstrass series converges uniformly to a continuous function
4. `lem-weierstrass-probe-points` — lemma — Nearest-integer probe points for the Weierstrass function
5. `lem-weierstrass-low-frequency-difference-quotient-bound` — lemma — Low-frequency bound for the Weierstrass difference quotient
6. `lem-weierstrass-tail-difference-quotient-bound` — lemma — The Weierstrass tail has one sign and dominates at the probe points
7. `thm-classical-weierstrass-function-nowhere-differentiable` — theorem — The classical Weierstrass function is continuous everywhere and differentiable nowhere
8. `cor-uniform-limit-of-smooth-functions-need-not-be-differentiable` — corollary — A uniform limit of smooth functions need not be differentiable anywhere
9. `thm-riemann-lebesgue-lemma-for-continuous-functions` — theorem — Riemann–Lebesgue lemma for continuous functions on a compact interval
10. `lem-finite-sine-harmonic-sums` — lemma — Finite sums of the sine harmonics
11. `rem-classical-counterparts-for-trigonometry-free-oscillators` — remark — Classical counterparts for the trigonometry-free oscillators

### `trigonometric-and-oscillatory-examples-in-one-variable-examples` — 14 items

1. `ex-weierstrass-function-with-one-half-and-fifteen` — example — The Weierstrass function with a=1/2 and b=15
2. `fs-a-continuous-function-is-differentiable-somewhere` — false statement — Every continuous real function is differentiable somewhere
3. `cor-x-sine-of-one-over-x-is-not-differentiable-at-zero` — corollary — x sin(1/x) extended by zero is continuous but not differentiable at zero
4. `ex-x-squared-sine-of-one-over-x-squared` — example — x² sin(1/x²) has an unbounded, non-Riemann-integrable derivative
5. `fs-a-differentiable-function-has-a-continuous-derivative` — false statement — Every differentiable function has a continuous derivative
6. `ex-sine-harmonics-pointwise-bounded-without-uniform-subsequence` — example — The sine harmonics are pointwise bounded but have no uniformly convergent subsequence
7. `fs-a-pointwise-bounded-sequence-of-continuous-functions-has-a-uniformly-convergent-subsequence` — false statement — Every pointwise bounded sequence of continuous functions has a uniformly convergent subsequence
8. `lem-topologists-sine-curve-is-connected` — lemma — The topologist’s sine curve is connected
9. `cex-topologists-sine-curve-connected-not-path-connected` — counterexample — The topologist’s sine curve is connected but not path connected
10. `ex-sine-period-arc-length-as-a-complete-elliptic-integral` — example — The arc length of one sine period is 4√2 E(1/√2)
11. `rem-sine-period-arc-length-integrand-is-nonelementary` — remark — The sine-period arc-length integrand has no elementary antiderivative
12. `ex-tangent-homeomorphism-between-bounded-and-unbounded-spaces` — example — Tangent identifies a bounded incomplete interval with the unbounded complete real line
13. `ex-sine-harmonic-series-pointwise-not-uniform` — example — Σ sin(nx)/n converges pointwise but not uniformly
14. `fs-a-continuous-function-on-a-compact-interval-has-a-rectifiable-graph` — false statement — Every continuous function on a compact interval has a rectifiable graph

## New-id and reuse report

The exact collision command was a fixed-string `rg -F` over `items/` and `research/plan-spec.json` for every final id. All 25 ids in the two lists above reported `NEW`. Semantic searches covered Weierstrass cosine series and nowhere differentiability; sine Lipschitz estimates; `sin(1/x)` and both damped reciprocal oscillators; `sin(nx)` equicontinuity/subsequence claims; topologist’s sine curve; sine arc length and elliptic integrals; tangent homeomorphisms; the harmonic sine series; and rectifiable graphs.

Those searches found and caused reuse of the following published items rather than duplicate ids:

- `cex-sine-of-one-over-x-has-no-limit-at-zero`
- `ex-x-sine-of-one-over-x-tends-to-zero`
- `ex-x-squared-sine-of-one-over-x-is-differentiable`
- `cex-graph-of-x-sin-one-over-x-is-not-rectifiable`
- `cex-rudin-bounded-spikes-are-not-equicontinuous`
- `cex-a-function-with-a-primitive-that-is-not-integrable`
- `thm-takagi-function-is-continuous-and-nowhere-differentiable`
- `cex-boundedness-is-not-topological`
- `cex-completeness-is-not-topological`

The published examples-page items are linked for orientation but never used as load-bearing dependencies, because B pages are leaves. No published item was found under a synonymous id for any of the final new statements.

## Dependency closure, forward references, and cross-batch dependencies

The manifest has 74 distinct published external dependencies over 119 external edges and 23 same-batch edges. Every external item was opened from disk; each has `status: published`; 25 have `provenance.statement: literature-derived` and 49 have `provenance.statement: ai-altered`; none is AI-generated or legacy-unclassified. Thus no legacy confidence-route record is required. The proof-contract quote audit matches 93 published source clauses exactly and records 18 same-batch clauses for Step 5.

The in-memory overlay of this batch onto the current spec was passed through `validate-plan.mjs`. It reports no item-level cycle, B-page dependency, unresolved id, or undeclared prerequisite after adding `connectedness` and `further-trigonometric-identities-and-inverses`. This is a diagnostic overlay, not the authoritative Step-4 gate: `research/plan-spec.json` was not changed.

There are no load-bearing forward references. Every logical dependency is earlier on the same A or B page, on the A page when consumed by its companion, or published under the transitive closure of the proposed prerequisites.

The A-page correspondence remark needs one orientation-only `forward_refs` entry at Step 5:

- `ex-x-squared-sine-of-one-over-x-squared` on `trigonometric-and-oscillatory-examples-in-one-variable-examples`, because the design requires the A-page ledger to name the new classical item while examples stay on the companion. It must not appear in the remark’s `deps`.

No theorem or proof relies on that forward link.

This batch needs no item from another batch of `frontier-16`. The planned page `trigonometric-and-oscillatory-examples-in-several-variables` explicitly requires this A page and may use `cor-sine-and-cosine-are-one-lipschitz` or the locally proved Weierstrass/Riemann–Lebesgue machinery after this pair is authored. It must not depend on an item homed only on this pair’s B page.

## Findings for Step-3 Alpha

1. **Approve adding `connectedness` and `further-trigonometric-identities-and-inverses` to the A-page `requires`.** The exact proofs consume those pages and the four design prerequisites do not reach them. Declining leaves hard `undeclared-prereq` errors or forces deletion of the topologist/tangent landmarks.
2. **Approve Amendment RA4-3’s correction of “pointwise divergent.”** The sequence $\sin(nx)$ converges at some points of $[0,\pi]$ and fails to converge at others. Declining preserves an overbroad mathematical claim.
3. **Approve the B-leaf reuse plan in Amendments RA4-4 and RA4-5.** Published classical examples already have immutable homes on earlier B pages and cannot be dependencies. Declining either creates duplicate plan ownership or hard `b-leaf` errors.
4. **Approve the external fallback split in Amendment RA4-6.** The elliptic length identity is locally proved, while non-elementarity genuinely requires unavailable differential algebra. Declining forces either an unsupported claim or removal of a design requirement.
5. **Approve the Weierstrass proof decomposition.** Probe construction, low-frequency control, and the sign-aligned tail are distinct source proof stages and are independently auditable. Declining recreates a long monolithic proof.
6. **Approve the connectedness lemma before the topologist’s sine-curve counterexample.** Connectedness by closure and failure of path connectedness are independent conceptual moves. Declining makes the companion proof needlessly monolithic.
7. **Approve adding the continuous Riemann–Lebesgue theorem and finite sine-sum lemma to the A page.** The design’s integral-decay and harmonic-series claims otherwise rest on undeclared inline machinery. Declining leaves real proof obligations hidden.
8. **Approve the explicit parameter choice $a=1/2$, $b=15$.** It satisfies the restrictive theorem using only the published bound $\pi<4$ and is a checkable non-load-bearing generated example. Declining leaves the companion without a concrete instance; substituting $b=11$ would be false under the selected theorem.

These are independent decisions, ordered by mathematical/dependency severity before richness. No finding proposes a page split or a published-dependency repair.

## Confidence and what remains unverified

Mathematical confidence is high. The Weierstrass constants and signs were re-derived from Calder’s proof; the $n=0$ and $m=0$ cases were checked; the generated parameter inequality was checked; both the sine-harmonic no-subsequence proof and the harmonic-series uniform-Cauchy obstruction were reconstructed; the topologist’s sine-curve path obstruction was checked with an attained last zero; and the elliptic length constant was recomputed.

No load-bearing published claim appeared false. The existing classical-oscillator remark is awkwardly historical but not a current load-bearing falsehood, so no published repair is proposed.

What was not verified:

- `node tools/source-fetch-check.mjs --coverage ... --stamp` cannot resolve hostnames in this sandbox (`EAI_AGAIN` for every attempted source), so the otherwise full-text-read URLs are unstamped and the fetch-verification stage remains blocked.
- The strict proof-contract gate cannot run before the planned source items exist. The namespaced structural audit currently reports 22 scoped proof-bearing items, 22 contracts, every boundary disposition present, every citation source declared, 93 exact published quote matches, and 18 planned source clauses reserved for authoring.
- `validate-plan` and `depsource` have not run against the actual spliced `research/plan-spec.json`. Only the read-only in-memory overlay was validated.
- No finite-smoke registry entry applies, so no bounded model computation was run or claimed.

## Final Step-2 checks

- `coverage-checklist` reports one page, 35 harvested results, zero errors, and zero warnings.
- `content-policy --manifest-only` reports 25 scoped items, zero errors, and zero warnings.
- The manifest parses as 11 A items and 14 B items.
- The proof-contract artifact parses as 22 proof-bearing items and 22 contracts; all eight boundary cases occur exactly once per contract.
- The published citation audit reports 93 exact quote matches and zero misses.
- The read-only plan overlay reports no item-level cycles, B-page dependencies, unresolved ids, or undeclared prerequisites.
- The direct collision audit reports every final id new.
- There is no applied canonical embedding notation in the owned artifacts.
- No permission prompt or escalation was used.

No mathematical, dependency, size, cross-batch, generated-load-bearing, or published-falsehood blocker remains. The sole blocker is mechanical source stamping under sandbox DNS.
