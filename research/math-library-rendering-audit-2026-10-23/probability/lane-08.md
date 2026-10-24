# Probability diagram review — lane 08

## Coverage

Reviewed all assigned frozen titles and complete ItemBodies and individually opened every receipt-listed tile at original resolution. Source and tile hashes are bound in the JSON. No source edits were made.

- Items reviewed: 68 / 68.
- Receipt tiles opened: 118.
- Assignment source hashes match: True.
- Receipt diagnostics: zero KaTeX errors and zero diagram failures; no receipt-listed TikZ diagrams.
- Confirmed genuine rendering defects: none.

## High-likelihood missing diagrams

- **Brownian finite-dimensional density** — lines 27–33. Draw 0=t₀<t₁<⋯<tₙ and increments Δ_j=x_j−x_{j−1}, each labelled N(0,t_j−t_{j−1}), to explain the product density. Check ordered positive times, x₀=0, independent increment factors and triangular transformation determinant 1.

- **Communicating classes in a four-state chain** — lines 38–44. Draw the directed graph of the displayed 4×4 matrix: 0→0; 1↔2; 3→0 and 3→3, each with probability 1/2. Mark classes {0},{1,2},{3}; recurrent 0,1,2 and transient 3. Check arrows match matrix rows, loops are correct, and 0 cannot return to 3.

- **Dyadic conditional expectation martingale** — lines 26–29. Draw nested half-open dyadic partitions of (0,1], with each parent splitting into children and M_n as cell-average step function. Check interval endpoints (j/2^n,(j+1)/2^n], mass 2^(−n), cell averages, and refinement relation.

- **Two-sided Brownian exit probability** — lines 24–31. Draw interval a<x<b and first-hit boundaries a,b; label upper-exit probability (x−a)/(b−a) and lower exit (b−x)/(b−a). Check strict ordering, probabilities sum to one, numerator pairs with opposite boundary distance, and event is T_b<T_a.

## Uncertain/editorial diagrams

- **The Markov property can fail for a larger filtration** — lines 27–30. A two-time filtration sketch can show X₁ revealed in G₀, G₀=G₁, and natural filtration inclusion in G_n. Check adaptedness, K(X₀,{1})=1/2 versus P(X₁=1|G₀)=1_{X₁=1}, and failure on both positive-probability atoms.

- **Brownian one- and quadratic variation** — lines 20–34. A schematic path plus named dyadic-partition panel can distinguish divergent absolute increments from squared increments tending uniformly to elapsed time. Label the first as total-variation sums over refining partitions and the second only along the stated dyadic sequence; do not imply arbitrary-partition quadratic variation.

- **Distribution of a one-sided Brownian hitting time** — lines 22–39. A density/CDF plot can clarify support and endpoint facts. Check t>0, g(t)=a(2πt^3)^(-1/2)exp(-a²/(2t)), CDF 2(1−Φ(a/√t)), no atom at 0 or ∞, and total mass one; retain a>0.

- **Law of the Brownian maximum** — lines 22–42. A schematic path with maximum M_t and threshold x can illustrate the reflection-principle event and the law of |B_t|. Check P(M_t≤x)=2Φ(x/√t)−1 for x≥0 and zero for x<0; the sketch is not evidence.

- **Two-dimensional simple symmetric walk is recurrent** — lines 58–68. A square-lattice panel can display the four-neighbor kernel and parity of returns, with a separate return-series panel. Check distinct neighbors each have mass 1/4, odd-time returns vanish, p^(2n)(z,z) is translation-invariant, and recurrence follows from harmonic-series divergence.

- **Higher-dimensional simple symmetric walks are transient** — lines 49–58. A nearest-neighbor transition or dimension-versus-return-bound schematic may orient the statement. Check each ±e_j transition has probability 1/(2d), odd-time returns vanish, even returns satisfy O(n^(−d/2)), and summability uses d≥3.

- **A consistent family of finite-dimensional distributions** — lines 21–31. Project restriction maps: for finite F⊆G⊆I draw μ_G on the larger product mapping by p_{G,F} to μ_F. Check the arrow is pushforward under restriction, includes F=∅ as the unit law, and does not imply permutation invariance or equality on distinct subsets.

- **Ito integral for square-integrable predictable processes** — lines 20–98. A construction diagram can show elementary H^n approaching H in L²(dt⊗P), integrals converging in L²(P) to I_T(H), and truncation at each t. Check convergence is L², the limit is an a.s. class, approximation independence is explicit, and general linearity is deferred to its supplier.

- **Random walk on a finite undirected graph is reversible** — lines 30–38. A small undirected graph with vertex degrees and π(v)=deg(v)/(2|E|) may illustrate detailed balance. Check each edge has equal directed flux 1/(2|E|), nonedges zero flux, graph connected with an edge, and weights sum to one.

- **Brownian time inversion** — lines 28–33. A time-inversion schematic can plot t↦tB_{1/t}, with t=0 defined separately. Check covariance min(s,t), include continuity at zero as a separate conclusion, and do not infer path continuity from finite-dimensional laws.

- **Invariant initial law makes a Markov chain stationary** — lines 35–49. A time-index diagram can link initial law π fixed by K to shift invariance of cylinder coordinates. Check πK=π, gaps between sampled times stay unchanged after shift m, and path shift is θ(z)_n=z_{n+1}.

- **Kolmogorov construction of the canonical Gaussian process** — lines 26–34. A projective-family schematic can show consistent centered Gaussian finite-dimensional laws with covariance min(s,t) feeding the canonical coordinate process. Check construction yields only the prescribed finite-dimensional laws; it does not establish path continuity or Brownian motion.

## No diagram indicated
- `cex-an-adapted-process-need-not-be-a-martingale` — ItemBody lines 22–25; no spatial or structural claim benefits clearly from a figure.
- `cex-convergence-in-distribution-need-not-be-in-probability` — ItemBody lines 25–28; no spatial or structural claim benefits clearly from a figure.
- `cex-identical-distribution-without-independence-can-defeat-the-mean-law` — ItemBody lines 20–23; no spatial or structural claim benefits clearly from a figure.
- `cex-lp-convergence-need-not-imply-lq-convergence-for-p-less-than-q` — ItemBody lines 25–28; no spatial or structural claim benefits clearly from a figure.
- `cex-regular-conditional-laws-are-not-unique-on-null-conditioning-values` — ItemBody lines 26–34; no spatial or structural claim benefits clearly from a figure.
- `cor-absolute-value-and-powers-of-a-martingale-are-submartingales` — ItemBody lines 24–27; no spatial or structural claim benefits clearly from a figure.
- `cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable` — ItemBody lines 22–28; no spatial or structural claim benefits clearly from a figure.
- `cor-gamblers-ruin-hitting-probability-from-optional-stopping` — ItemBody lines 23–28; no spatial or structural claim benefits clearly from a figure.
- `def-almost-sure-convergence-of-a-random-series` — ItemBody lines 25–33; no spatial or structural claim benefits clearly from a figure.
- `def-characteristic-function-of-a-real-random-variable` — ItemBody lines 26–35; no spatial or structural claim benefits clearly from a figure.
- `def-cumulative-distribution-function-of-a-random-variable` — ItemBody lines 26–33; no spatial or structural claim benefits clearly from a figure.
- `def-germ-sigma-algebra-at-zero` — ItemBody lines 21–56; no spatial or structural claim benefits clearly from a figure.
- `def-martingale-submartingale-and-supermartingale` — ItemBody lines 24–31; no spatial or structural claim benefits clearly from a figure.
- `def-positive-definite-function-on-the-real-line` — ItemBody lines 25–29; no spatial or structural claim benefits clearly from a figure.
- `def-regular-conditional-distribution` — ItemBody lines 26–34; no spatial or structural claim benefits clearly from a figure.
- `def-standard-borel-space` — ItemBody lines 23–25; no spatial or structural claim benefits clearly from a figure.
- `def-total-row-variance-and-lindeberg-condition` — ItemBody lines 25–29; no spatial or structural claim benefits clearly from a figure.
- `ex-a-random-series-that-converges-conditionally-almost-surely` — ItemBody lines 26–29; no spatial or structural claim benefits clearly from a figure.
- `ex-covariance-of-two-deterministic-ito-integrals` — ItemBody lines 22–31; no spatial or structural claim benefits clearly from a figure.
- `ex-exponential-martingale-and-a-brownian-tail-bound` — ItemBody lines 22–32; no spatial or structural claim benefits clearly from a figure.
- `ex-global-lipschitz-scalar-ornstein-uhlenbeck-well-posedness` — ItemBody lines 34–43; no spatial or structural claim benefits clearly from a figure.
- `ex-integral-of-brownian-motion-against-itself-preview` — ItemBody lines 20–34; no spatial or structural claim benefits clearly from a figure.
- `ex-linear-combinations-of-brownian-values-are-gaussian` — ItemBody lines 24–33; no spatial or structural claim benefits clearly from a figure.
- `ex-normal-approximation-to-binomial-probabilities` — ItemBody lines 26–29; no spatial or structural claim benefits clearly from a figure.
- `ex-stopping-a-likelihood-ratio-martingale` — ItemBody lines 23–29; no spatial or structural claim benefits clearly from a figure.
- `ex-uniform-laws-on-expanding-finite-grids-converge-to-uniform-zero-one` — ItemBody lines 24–27; no spatial or structural claim benefits clearly from a figure.
- `lem-ac-supplies-sequential-choices-for-probability-constructions` — ItemBody lines 24–27; no spatial or structural claim benefits clearly from a figure.
- `lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times` — ItemBody lines 22–35; no spatial or structural claim benefits clearly from a figure.
- `lem-characteristic-function-of-a-normal-law` — ItemBody lines 22–25; no spatial or structural claim benefits clearly from a figure.
- `lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula` — ItemBody lines 24–27; no spatial or structural claim benefits clearly from a figure.
- `lem-cross-ito-isometry` — ItemBody lines 20–30; no spatial or structural claim benefits clearly from a figure.
- `lem-finite-coordinate-cylinders-form-a-pi-system` — ItemBody lines 24–27; no spatial or structural claim benefits clearly from a figure.
- `lem-iid-linear-truncation-occurs-only-finitely-often` — ItemBody lines 24–27; no spatial or structural claim benefits clearly from a figure.
- `lem-laws-commute-with-measurable-maps` — ItemBody lines 27–33; no spatial or structural claim benefits clearly from a figure.
- `lem-mgf-of-independent-finite-sum` — ItemBody lines 25–32; no spatial or structural claim benefits clearly from a figure.
- `lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences` — ItemBody lines 24–27; no spatial or structural claim benefits clearly from a figure.
- `lem-stopped-random-variable-is-measurable-at-the-stopping-time` — ItemBody lines 23–26; no spatial or structural claim benefits clearly from a figure.
- `lem-vanishing-tail-control-implies-small-truncated-second-moment` — ItemBody lines 24–29; no spatial or structural claim benefits clearly from a figure.
- `rem-general-inequalities-restrict-to-the-published-finite-ones` — ItemBody lines 1–36; no spatial or structural claim benefits clearly from a figure.
- `thm-a-stopped-martingale-is-a-martingale` — ItemBody lines 23–26; no spatial or structural claim benefits clearly from a figure.
- `thm-brownian-filtration-martingale-representation` — ItemBody lines 22–45; no spatial or structural claim benefits clearly from a figure.
- `thm-conditional-fatou-and-dominated-convergence` — ItemBody lines 20–23; no spatial or structural claim benefits clearly from a figure.
- `thm-convex-functions-of-martingales-are-submartingales` — ItemBody lines 24–27; no spatial or structural claim benefits clearly from a figure.
- `thm-doob-decomposition-of-an-integrable-adapted-process` — ItemBody lines 24–29; no spatial or structural claim benefits clearly from a figure.
- `thm-existence-of-continuous-brownian-motion` — ItemBody lines 26–32; no spatial or structural claim benefits clearly from a figure.
- `thm-gaussian-mixture-score-and-global-lipschitz-bound` — ItemBody lines 35–56; no spatial or structural claim benefits clearly from a figure.
- `thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity` — ItemBody lines 20–25; no spatial or structural claim benefits clearly from a figure.
- `thm-lindeberg-levy-iid-central-limit-theorem` — ItemBody lines 26–29; no spatial or structural claim benefits clearly from a figure.
- `thm-martingale-central-limit-theorem` — ItemBody lines 19–26; no spatial or structural claim benefits clearly from a figure.
- `thm-pairwise-independent-borel-cantelli-frequency-law` — ItemBody lines 25–35; no spatial or structural claim benefits clearly from a figure.
- `thm-recurrence-and-transience-are-class-properties` — ItemBody lines 46–59; no spatial or structural claim benefits clearly from a figure.
- `thm-stopping-an-ito-integral` — ItemBody lines 20–38; no spatial or structural claim benefits clearly from a figure.

## Item and tile coverage

The JSON records each frozen title, complete-body review, source and receipt diagnostics, exact source lines, and per-tile original-resolution view attestation and hash. Screenshot links are relative to this report.

### The Markov property can fail for a larger filtration (`cex-a-process-with-the-right-transition-probabilities-relative-to-its-natural-filtration-may-fail-for-a-larger-filtration`)
Source `items/cex-a-process-with-the-right-transition-probabilities-relative-to-its-natural-filtration-may-fail-for-a-larger-filtration.md` (SHA256 `0257a8c4c7e9de1195463036aee013763f41642f11e9658aabe0e3253f93d770`); ItemBody lines 25–31. Diagram check: **uncertain-editorial**, claim lines 27–30.
- Viewed original 1200x1400: [cex-a-process-with-the-right-transition-probabilities-relative-to-its-natural-filtration-may-fail-for-a-larger-filtration--01.png](../screenshots/cex-a-process-with-the-right-transition-probabilities-relative-to-its-natural-filtration-may-fail-for-a-larger-filtration--01.png) — SHA256 `838a858351c35ea7e84521a4ea026a1c7a77bf7621939bfa1ade0723a6feb267` (receipt match: True).
### An adapted process need not be a martingale (`cex-an-adapted-process-need-not-be-a-martingale`)
Source `items/cex-an-adapted-process-need-not-be-a-martingale.md` (SHA256 `01d998ac797c5c183182c7f574800b75ea4a5e19a1aa43a67356af2b59bb7d87`); ItemBody lines 22–25. Diagram check: **not-indicated**, claim lines 22–25.
- Viewed original 1200x1400: [cex-an-adapted-process-need-not-be-a-martingale--01.png](../screenshots/cex-an-adapted-process-need-not-be-a-martingale--01.png) — SHA256 `2d4d2597a960fb2fa843ddc494c4ca74ad94c66d0da1f9ff46431eb1bd8c88fb` (receipt match: True).
### Convergence in distribution need not be convergence in probability (`cex-convergence-in-distribution-need-not-be-in-probability`)
Source `items/cex-convergence-in-distribution-need-not-be-in-probability.md` (SHA256 `db21b0502a161775b1342329cdec2a6cc37e04646d95e7b7035cc4fac866f29f`); ItemBody lines 25–29. Diagram check: **not-indicated**, claim lines 25–28.
- Viewed original 1200x1400: [cex-convergence-in-distribution-need-not-be-in-probability--01.png](../screenshots/cex-convergence-in-distribution-need-not-be-in-probability--01.png) — SHA256 `4331c55e4dd99f8675354ff2a61adef979458b9653249c079b04eebe73c2dae2` (receipt match: True).
### Identical distribution without independence can defeat the mean law (`cex-identical-distribution-without-independence-can-defeat-the-mean-law`)
Source `items/cex-identical-distribution-without-independence-can-defeat-the-mean-law.md` (SHA256 `b33b5e6adbd2c3b8c4d72c51c1f71a78ede08e7ae5dad5340105f59efab87df8`); ItemBody lines 20–23. Diagram check: **not-indicated**, claim lines 20–23.
- Viewed original 1200x1400: [cex-identical-distribution-without-independence-can-defeat-the-mean-law--01.png](../screenshots/cex-identical-distribution-without-independence-can-defeat-the-mean-law--01.png) — SHA256 `d07e59bdae19220cf147d907ae594ad69f601c0ceca9f782b0fa3d34500fc1ed` (receipt match: True).
### $L^p$ convergence need not imply $L^q$ convergence when $p<q$ (`cex-lp-convergence-need-not-imply-lq-convergence-for-p-less-than-q`)
Source `items/cex-lp-convergence-need-not-imply-lq-convergence-for-p-less-than-q.md` (SHA256 `f3cf36605cb662a6099f45edad7be88d57081f5e3439e4b9a1b32a32a3084ec8`); ItemBody lines 25–29. Diagram check: **not-indicated**, claim lines 25–28.
- Viewed original 1200x1400: [cex-lp-convergence-need-not-imply-lq-convergence-for-p-less-than-q--01.png](../screenshots/cex-lp-convergence-need-not-imply-lq-convergence-for-p-less-than-q--01.png) — SHA256 `7e0cffe7a7468990176bad7eb7f0b047b81edca5dea2a22482b84c0456ee2e61` (receipt match: True).
### Regular conditional laws are not unique on null conditioning values (`cex-regular-conditional-laws-are-not-unique-on-null-conditioning-values`)
Source `items/cex-regular-conditional-laws-are-not-unique-on-null-conditioning-values.md` (SHA256 `2df49736a6aed5e353427f84ed05abd1bc8831627dbc5dd268e75242052c2ccc`); ItemBody lines 26–34. Diagram check: **not-indicated**, claim lines 26–34.
- Viewed original 1200x1400: [cex-regular-conditional-laws-are-not-unique-on-null-conditioning-values--01.png](../screenshots/cex-regular-conditional-laws-are-not-unique-on-null-conditioning-values--01.png) — SHA256 `6dac4d502e398ae4da996bd55449e92d419760143ebe35d7af1a037bc03e6bb4` (receipt match: True).
- Viewed original 1200x228: [cex-regular-conditional-laws-are-not-unique-on-null-conditioning-values--02.png](../screenshots/cex-regular-conditional-laws-are-not-unique-on-null-conditioning-values--02.png) — SHA256 `1849e58a981bf4aa4a78e5c34588d82b075fee5c072cd71e6800030de1a2219b` (receipt match: True).
### Absolute value and powers of a martingale are submartingales (`cor-absolute-value-and-powers-of-a-martingale-are-submartingales`)
Source `items/cor-absolute-value-and-powers-of-a-martingale-are-submartingales.md` (SHA256 `423719fc7c0d9017c6639e2dedd8d867385f8332880b4747326b1e2b0997ee67`); ItemBody lines 24–27. Diagram check: **not-indicated**, claim lines 24–27.
- Viewed original 1200x1400: [cor-absolute-value-and-powers-of-a-martingale-are-submartingales--01.png](../screenshots/cor-absolute-value-and-powers-of-a-martingale-are-submartingales--01.png) — SHA256 `776f6fd715910826ab1e37fb301ed4bd3168d577223e29da09a3470349ef5c65` (receipt match: True).
### Brownian one- and quadratic variation (`cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation`)
Source `items/cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation.md` (SHA256 `687f531256fd29e30245462db29c56f69db38b46fb066fae5202719f77f6ad58`); ItemBody lines 20–34. Diagram check: **uncertain-editorial**, claim lines 20–34.
- Viewed original 1200x1400: [cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation--01.png](../screenshots/cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation--01.png) — SHA256 `95373bb82fdae94967ca1405105e7742e67c78a81ce6a7efbac0bb2316ea4536` (receipt match: True).
- Viewed original 1200x409: [cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation--02.png](../screenshots/cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation--02.png) — SHA256 `56cde42f907a954982884159c5cbaf37ff58270090246006e57486570200b2b8` (receipt match: True).
### Conditional expectation as a measurable function of the conditioning variable (`cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable`)
Source `items/cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable.md` (SHA256 `9289aa391f7a72bc6f47c8797039bd46f5df902ab144ea69e7e6f3b46ae92e54`); ItemBody lines 22–28. Diagram check: **not-indicated**, claim lines 22–28.
- Viewed original 1200x1400: [cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable--01.png](../screenshots/cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable--01.png) — SHA256 `6999c58dd8fbde2a2bcaf36e992312d7ed3cb9ceddf6f667c308954decce162b` (receipt match: True).
### Distribution of a one-sided Brownian hitting time (`cor-distribution-of-a-one-sided-brownian-hitting-time`)
Source `items/cor-distribution-of-a-one-sided-brownian-hitting-time.md` (SHA256 `d886d0e2343ff5fe291582683fbd4e0463bbc9c5337ecbd414f1ec85bfbef50a`); ItemBody lines 22–39. Diagram check: **uncertain-editorial**, claim lines 22–39.
- Viewed original 1200x1400: [cor-distribution-of-a-one-sided-brownian-hitting-time--01.png](../screenshots/cor-distribution-of-a-one-sided-brownian-hitting-time--01.png) — SHA256 `f5609c49d5c5afdfa3f25c2d56b168989361d1160814a948081ed9345fd4ff99` (receipt match: True).
- Viewed original 1200x1400: [cor-distribution-of-a-one-sided-brownian-hitting-time--02.png](../screenshots/cor-distribution-of-a-one-sided-brownian-hitting-time--02.png) — SHA256 `69b6c98479032e0c10faf36b3f7c555f08dd29bc0d9fd414f1a612bf325b3ef4` (receipt match: True).
- Viewed original 1200x319: [cor-distribution-of-a-one-sided-brownian-hitting-time--03.png](../screenshots/cor-distribution-of-a-one-sided-brownian-hitting-time--03.png) — SHA256 `23eb2a3ed620d477dfe02275581351ab8e4c329611e4e0a42a07272082317b89` (receipt match: True).
### Gambler's ruin hitting probability from optional stopping (`cor-gamblers-ruin-hitting-probability-from-optional-stopping`)
Source `items/cor-gamblers-ruin-hitting-probability-from-optional-stopping.md` (SHA256 `a0e5087fb372e0c7cf5e1d87304221f7abb2317d8a35bfd3fadf5298dce351cb`); ItemBody lines 23–28. Diagram check: **not-indicated**, claim lines 23–28.
- Viewed original 1200x1400: [cor-gamblers-ruin-hitting-probability-from-optional-stopping--01.png](../screenshots/cor-gamblers-ruin-hitting-probability-from-optional-stopping--01.png) — SHA256 `f779a08c73863b973407de87d7cce9ebfd3d094577fbfa013488d6d20e9a6385` (receipt match: True).
### Law of the Brownian maximum (`cor-law-of-the-brownian-maximum`)
Source `items/cor-law-of-the-brownian-maximum.md` (SHA256 `ab9c748c8c3bf150df982be5e7a86341f446403f162392fab76581eab9d8dfab`); ItemBody lines 22–42. Diagram check: **uncertain-editorial**, claim lines 22–42.
- Viewed original 1200x1400: [cor-law-of-the-brownian-maximum--01.png](../screenshots/cor-law-of-the-brownian-maximum--01.png) — SHA256 `31dff5404060cd494d43e8bcd2871b99502b6236e95a944f0a9ff34a5ca37e82` (receipt match: True).
- Viewed original 1200x744: [cor-law-of-the-brownian-maximum--02.png](../screenshots/cor-law-of-the-brownian-maximum--02.png) — SHA256 `c4070bfa9f7c82936bde3d2f460a88eb2006557aeca4c9d8b03f549ad06a76a8` (receipt match: True).
### Two-dimensional simple symmetric walk is recurrent (`cor-recurrence-of-the-two-dimensional-simple-symmetric-random-walk`)
Source `items/cor-recurrence-of-the-two-dimensional-simple-symmetric-random-walk.md` (SHA256 `31706900be92bb1e23e866d79ab5682c73d64d6dd874d815aef8cf6a21954a20`); ItemBody lines 58–68. Diagram check: **uncertain-editorial**, claim lines 58–68.
- Viewed original 1200x1400: [cor-recurrence-of-the-two-dimensional-simple-symmetric-random-walk--01.png](../screenshots/cor-recurrence-of-the-two-dimensional-simple-symmetric-random-walk--01.png) — SHA256 `d317ea2bcf33c31ef5e4fa2237c497347a07d45ae7cd4f3021a98a4773e0c726` (receipt match: True).
- Viewed original 1200x1400: [cor-recurrence-of-the-two-dimensional-simple-symmetric-random-walk--02.png](../screenshots/cor-recurrence-of-the-two-dimensional-simple-symmetric-random-walk--02.png) — SHA256 `2968238a06ac84ca803a61acf674bbff6174fad4b8cb5b4f4c2746e6412499d6` (receipt match: True).
- Viewed original 1200x1400: [cor-recurrence-of-the-two-dimensional-simple-symmetric-random-walk--03.png](../screenshots/cor-recurrence-of-the-two-dimensional-simple-symmetric-random-walk--03.png) — SHA256 `81f542bbc55213a466e5292f54010a48507e7886bd3e4ed09e09d57a51ddb7f3` (receipt match: True).
- Viewed original 1200x874: [cor-recurrence-of-the-two-dimensional-simple-symmetric-random-walk--04.png](../screenshots/cor-recurrence-of-the-two-dimensional-simple-symmetric-random-walk--04.png) — SHA256 `98a43ec5744634b13fa26107c7d690b19f0f3f0613fdc8b3ec03183849aed065` (receipt match: True).
### Higher-dimensional simple symmetric walks are transient (`cor-transience-of-simple-symmetric-random-walk-in-dimension-at-least-three`)
Source `items/cor-transience-of-simple-symmetric-random-walk-in-dimension-at-least-three.md` (SHA256 `afbeb0d45437f3589101396c7c1f202029cde71d6389ee8c052a8c849f5c566c`); ItemBody lines 49–58. Diagram check: **uncertain-editorial**, claim lines 49–58.
- Viewed original 1200x1400: [cor-transience-of-simple-symmetric-random-walk-in-dimension-at-least-three--01.png](../screenshots/cor-transience-of-simple-symmetric-random-walk-in-dimension-at-least-three--01.png) — SHA256 `4c86ae579c83d710732690b83687dec9c35494a5a667aa5a373d2213005efd84` (receipt match: True).
- Viewed original 1200x1400: [cor-transience-of-simple-symmetric-random-walk-in-dimension-at-least-three--02.png](../screenshots/cor-transience-of-simple-symmetric-random-walk-in-dimension-at-least-three--02.png) — SHA256 `ed90b27738cb5d966e8309f56e325270036a6598d3c35d9918079122e632dc6d` (receipt match: True).
- Viewed original 1200x1400: [cor-transience-of-simple-symmetric-random-walk-in-dimension-at-least-three--03.png](../screenshots/cor-transience-of-simple-symmetric-random-walk-in-dimension-at-least-three--03.png) — SHA256 `66873c3888e2f8dc465235531f63168e08934061f000c2b463c47f3513432b5e` (receipt match: True).
- Viewed original 1200x773: [cor-transience-of-simple-symmetric-random-walk-in-dimension-at-least-three--04.png](../screenshots/cor-transience-of-simple-symmetric-random-walk-in-dimension-at-least-three--04.png) — SHA256 `af15a3177cdaf326f6c1a947057810185107677ed5809f212b0980ca05b694fa` (receipt match: True).
### Almost-sure convergence of a random series (`def-almost-sure-convergence-of-a-random-series`)
Source `items/def-almost-sure-convergence-of-a-random-series.md` (SHA256 `1a21141f5a27b94d862831fbc1459e508e21c0ad425dd2a6b015db3b0548f9d5`); ItemBody lines 25–33. Diagram check: **not-indicated**, claim lines 25–33.
- Viewed original 1200x1400: [def-almost-sure-convergence-of-a-random-series--01.png](../screenshots/def-almost-sure-convergence-of-a-random-series--01.png) — SHA256 `226957fb2de7853d6b91914ec7d2dd6565ccb1c537818bf64de92e184e84a9f4` (receipt match: True).
### Characteristic function of a real random variable (`def-characteristic-function-of-a-real-random-variable`)
Source `items/def-characteristic-function-of-a-real-random-variable.md` (SHA256 `0deab443b560eb4b6aa5ef9f6049e011b734ef97259d9ec755045f4b2e349f55`); ItemBody lines 26–35. Diagram check: **not-indicated**, claim lines 26–35.
- Viewed original 1200x1400: [def-characteristic-function-of-a-real-random-variable--01.png](../screenshots/def-characteristic-function-of-a-real-random-variable--01.png) — SHA256 `1433a0973ec4ca2b1b4f63a199886be0910582901ca67f5dc8bcca3cd733dc55` (receipt match: True).
### A consistent family of finite-dimensional distributions (`def-consistent-family-of-finite-dimensional-distributions`)
Source `items/def-consistent-family-of-finite-dimensional-distributions.md` (SHA256 `8d0b9a8d5b3dfc39c2423a3dfde0368829675a08f77fefa0f2fb6b6e3da09eb5`); ItemBody lines 19–41. Diagram check: **uncertain-editorial**, claim lines 21–31.
- Viewed original 1200x1400: [def-consistent-family-of-finite-dimensional-distributions--01.png](../screenshots/def-consistent-family-of-finite-dimensional-distributions--01.png) — SHA256 `57be9ce8da85402db9749a266736b8f212e98f432975e3c90ef288f14b6e6c03` (receipt match: True).
### Cumulative distribution function of a real random variable (`def-cumulative-distribution-function-of-a-random-variable`)
Source `items/def-cumulative-distribution-function-of-a-random-variable.md` (SHA256 `c93752c6df0947d7b8f36e9e2297b597f73b6f89889f671db9ed5b247266038f`); ItemBody lines 26–33. Diagram check: **not-indicated**, claim lines 26–33.
- Viewed original 1200x1400: [def-cumulative-distribution-function-of-a-random-variable--01.png](../screenshots/def-cumulative-distribution-function-of-a-random-variable--01.png) — SHA256 `e83d3b292bc2f97856a65816b47657b4d44624dba75f8ff10460278ceddbac59` (receipt match: True).
### The Brownian germ sigma-algebra at zero (`def-germ-sigma-algebra-at-zero`)
Source `items/def-germ-sigma-algebra-at-zero.md` (SHA256 `e215213ea376f0de5eb42b2a8e02c82aae0c441b93b2c08f3d6e93c918cbc48f`); ItemBody lines 21–56. Diagram check: **not-indicated**, claim lines 21–56.
- Viewed original 1200x1400: [def-germ-sigma-algebra-at-zero--01.png](../screenshots/def-germ-sigma-algebra-at-zero--01.png) — SHA256 `c357324c05c270735591ca7fffea71be2315608f80f8e1316b2c766a29571e40` (receipt match: True).
### Ito integral for square-integrable predictable processes (`def-ito-integral-for-square-integrable-predictable-processes`)
Source `items/def-ito-integral-for-square-integrable-predictable-processes.md` (SHA256 `35ab400c28b0af3497ceda69162b3e72259d0c91d2f96f3d62236d71f20f0a7e`); ItemBody lines 20–98. Diagram check: **uncertain-editorial**, claim lines 20–98.
- Viewed original 1200x1400: [def-ito-integral-for-square-integrable-predictable-processes--01.png](../screenshots/def-ito-integral-for-square-integrable-predictable-processes--01.png) — SHA256 `f2106e509733461fab5d0cb4532fd0a414aa92d6824ad2311801d9c5788461b0` (receipt match: True).
- Viewed original 1200x181: [def-ito-integral-for-square-integrable-predictable-processes--02.png](../screenshots/def-ito-integral-for-square-integrable-predictable-processes--02.png) — SHA256 `16684f57cc2f410d8c98350bc09898c27ac0f548b4ba63ed3fdfeba606b32829` (receipt match: True).
### Martingale submartingale and supermartingale (`def-martingale-submartingale-and-supermartingale`)
Source `items/def-martingale-submartingale-and-supermartingale.md` (SHA256 `e89dd8cd1b283c6b651efe91e697ce933825964103beac3c26ba7e0c694c131d`); ItemBody lines 24–31. Diagram check: **not-indicated**, claim lines 24–31.
- Viewed original 1200x1400: [def-martingale-submartingale-and-supermartingale--01.png](../screenshots/def-martingale-submartingale-and-supermartingale--01.png) — SHA256 `6d7a8b5ad07629fc21f2be242409222520f2f5cc68460c8aeca76aeed9658729` (receipt match: True).
### Positive definite function on the real line (`def-positive-definite-function-on-the-real-line`)
Source `items/def-positive-definite-function-on-the-real-line.md` (SHA256 `e64e42192d21ade55f1b9dea76c9970159b6b8bc5191e89344092888dc6ca546`); ItemBody lines 25–29. Diagram check: **not-indicated**, claim lines 25–29.
- Viewed original 1200x1400: [def-positive-definite-function-on-the-real-line--01.png](../screenshots/def-positive-definite-function-on-the-real-line--01.png) — SHA256 `3dbb16125be8006d0f4c09ee6dc170d6d8a6cf422c37320a9b98f1d3931b4c45` (receipt match: True).
### Regular conditional distribution (`def-regular-conditional-distribution`)
Source `items/def-regular-conditional-distribution.md` (SHA256 `57e1b2a6abf869e30934500fbfe45bf053bab058484739fe1fefe27a0e68d58c`); ItemBody lines 26–34. Diagram check: **not-indicated**, claim lines 26–34.
- Viewed original 1200x1400: [def-regular-conditional-distribution--01.png](../screenshots/def-regular-conditional-distribution--01.png) — SHA256 `dd45bb3c3acf717cad3fcc01a1ad152894c255dc1d2d4c3bb7f3284faf28b27d` (receipt match: True).
### Standard Borel spaces (`def-standard-borel-space`)
Source `items/def-standard-borel-space.md` (SHA256 `0290a2b8b809df65d5847d635a881022b6876edf23cd7807519e4aa805b677b2`); ItemBody lines 23–25. Diagram check: **not-indicated**, claim lines 23–25.
- Viewed original 1200x1400: [def-standard-borel-space--01.png](../screenshots/def-standard-borel-space--01.png) — SHA256 `9d6cb47291a60e3d779762c255ebbb36ce3c892309dc21e39744d502719f95f7` (receipt match: True).
### Total row variance and the Lindeberg condition (`def-total-row-variance-and-lindeberg-condition`)
Source `items/def-total-row-variance-and-lindeberg-condition.md` (SHA256 `fdbc02634196ec74c3527599657ba4db5cfffd37568ae9964fcf2d2ee9413978`); ItemBody lines 25–29. Diagram check: **not-indicated**, claim lines 25–29.
- Viewed original 1200x1400: [def-total-row-variance-and-lindeberg-condition--01.png](../screenshots/def-total-row-variance-and-lindeberg-condition--01.png) — SHA256 `4e271b14046e47200510afe581e44255e111c86e9defb191f5c229cb09f54122` (receipt match: True).
### Almost-sure conditional convergence (`ex-a-random-series-that-converges-conditionally-almost-surely`)
Source `items/ex-a-random-series-that-converges-conditionally-almost-surely.md` (SHA256 `3f2bf58601eb313c4455c2dcaae68fdd13c014a961a874fd9177883a2749285c`); ItemBody lines 26–29. Diagram check: **not-indicated**, claim lines 26–29.
- Viewed original 1200x1400: [ex-a-random-series-that-converges-conditionally-almost-surely--01.png](../screenshots/ex-a-random-series-that-converges-conditionally-almost-surely--01.png) — SHA256 `341c2dbc543a53107c4f584718f26fba6194299ab4e176b2d1fa7425ef768fc1` (receipt match: True).
### Brownian finite-dimensional density (`ex-brownian-finite-dimensional-density`)
Source `items/ex-brownian-finite-dimensional-density.md` (SHA256 `964a803b035cadc21166908e7ae5b5a5c7d1b0b5025e7ccdceb235b5bf02cc72`); ItemBody lines 25–33. Diagram check: **high-likelihood**, claim lines 27–33.
- Viewed original 1200x1400: [ex-brownian-finite-dimensional-density--01.png](../screenshots/ex-brownian-finite-dimensional-density--01.png) — SHA256 `14a39efc3b488e46b1dc4343be6a59a46568bae821b79f959322541dfe4074c8` (receipt match: True).
- Viewed original 1200x1355: [ex-brownian-finite-dimensional-density--02.png](../screenshots/ex-brownian-finite-dimensional-density--02.png) — SHA256 `27d4f8c46aa5290ff56a1dc4dc7135dc29a98d3cf1ff74abffe9f15eaed3858d` (receipt match: True).
### Communicating classes in a four-state chain (`ex-communicating-classes-of-a-finite-chain`)
Source `items/ex-communicating-classes-of-a-finite-chain.md` (SHA256 `a6826258c5d99252d81331c37a86862c876d9c677813bac96c98e772d76e2394`); ItemBody lines 36–45. Diagram check: **high-likelihood**, claim lines 38–44.
- Viewed original 1200x1400: [ex-communicating-classes-of-a-finite-chain--01.png](../screenshots/ex-communicating-classes-of-a-finite-chain--01.png) — SHA256 `c463ac7494a756fa51bab471edfb06e14dd335d557e4278d3e990112cc9bff24` (receipt match: True).
- Viewed original 1200x720: [ex-communicating-classes-of-a-finite-chain--02.png](../screenshots/ex-communicating-classes-of-a-finite-chain--02.png) — SHA256 `c469cc2a08f67ddb7a0678ee8b81b5c216b727f6d10d3c28b976e28a4dd45343` (receipt match: True).
### Covariance of deterministic Ito integrals (`ex-covariance-of-two-deterministic-ito-integrals`)
Source `items/ex-covariance-of-two-deterministic-ito-integrals.md` (SHA256 `dcb994a59e6848374740406e45fb7ee8d5f5ef45c28b8214141f6979c0fe14cf`); ItemBody lines 22–31. Diagram check: **not-indicated**, claim lines 22–31.
- Viewed original 1200x1400: [ex-covariance-of-two-deterministic-ito-integrals--01.png](../screenshots/ex-covariance-of-two-deterministic-ito-integrals--01.png) — SHA256 `4b353876c318741989ae499914abe9bbf8d4653148ad97b7a8132247e53b13f7` (receipt match: True).
### Dyadic conditional expectation martingale (`ex-dyadic-conditional-expectation-martingale`)
Source `items/ex-dyadic-conditional-expectation-martingale.md` (SHA256 `bd23a310e1e1f920f0d31235443997ed0d47f505a243dec8146964079ec3a736`); ItemBody lines 24–29. Diagram check: **high-likelihood**, claim lines 26–29.
- Viewed original 1200x1400: [ex-dyadic-conditional-expectation-martingale--01.png](../screenshots/ex-dyadic-conditional-expectation-martingale--01.png) — SHA256 `01905db6e7550b90577bf8cab123c01b2c36a0b683f6abcfc51f1c98114b5e46` (receipt match: True).
- Viewed original 1200x378: [ex-dyadic-conditional-expectation-martingale--02.png](../screenshots/ex-dyadic-conditional-expectation-martingale--02.png) — SHA256 `62eef6e040a8a226bc59c7bd0daecb1eed2651562dc19183a2e6a0f3cc11dc78` (receipt match: True).
### Exponential martingale Brownian tail bound (`ex-exponential-martingale-and-a-brownian-tail-bound`)
Source `items/ex-exponential-martingale-and-a-brownian-tail-bound.md` (SHA256 `69a422843a99e73a978ad30566c5e8928bfde724256fe512f524aa9ea5ff23b3`); ItemBody lines 22–32. Diagram check: **not-indicated**, claim lines 22–32.
- Viewed original 1200x1400: [ex-exponential-martingale-and-a-brownian-tail-bound--01.png](../screenshots/ex-exponential-martingale-and-a-brownian-tail-bound--01.png) — SHA256 `130d942d62ee471480bb1bffb15157c6a3ad275aaa52f1e5a110b3a8b22a7223` (receipt match: True).
- Viewed original 1200x744: [ex-exponential-martingale-and-a-brownian-tail-bound--02.png](../screenshots/ex-exponential-martingale-and-a-brownian-tail-bound--02.png) — SHA256 `f50cd813369a3357cc11b7e4d5cb9aed37dd6496d1ac4745b32b9a2e969fd5ba` (receipt match: True).
### A scalar Ornstein–Uhlenbeck SDE satisfies the strong well-posedness hypotheses (`ex-global-lipschitz-scalar-ornstein-uhlenbeck-well-posedness`)
Source `items/ex-global-lipschitz-scalar-ornstein-uhlenbeck-well-posedness.md` (SHA256 `ec620e8fac2dfc07dc4e4b1feaaa206c7bd2cbf7ad19e6dc7db10d09fca6fac0`); ItemBody lines 34–43. Diagram check: **not-indicated**, claim lines 34–43.
- Viewed original 1200x1400: [ex-global-lipschitz-scalar-ornstein-uhlenbeck-well-posedness--01.png](../screenshots/ex-global-lipschitz-scalar-ornstein-uhlenbeck-well-posedness--01.png) — SHA256 `b113814fc22ff8f96a424e25c7a50a55a2504229f81bccd43528e8b0ba23972c` (receipt match: True).
### Integral of Brownian motion against itself (`ex-integral-of-brownian-motion-against-itself-preview`)
Source `items/ex-integral-of-brownian-motion-against-itself-preview.md` (SHA256 `caf3361a03ca009f40a84b504ccc430c0e36eb8fdff6729fa8b1037407308987`); ItemBody lines 20–34. Diagram check: **not-indicated**, claim lines 20–34.
- Viewed original 1200x1400: [ex-integral-of-brownian-motion-against-itself-preview--01.png](../screenshots/ex-integral-of-brownian-motion-against-itself-preview--01.png) — SHA256 `979cc8163730fe2f00940d1c77ed518ba0b916aaa6a4574a70d9efd1d84e755d` (receipt match: True).
- Viewed original 1200x1320: [ex-integral-of-brownian-motion-against-itself-preview--02.png](../screenshots/ex-integral-of-brownian-motion-against-itself-preview--02.png) — SHA256 `57c557f719559400a66fb2c7e49ac1e479b2fed5187d8ebc0590729d00d62ded` (receipt match: True).
### Linear combinations of Brownian values are Gaussian (`ex-linear-combinations-of-brownian-values-are-gaussian`)
Source `items/ex-linear-combinations-of-brownian-values-are-gaussian.md` (SHA256 `1ad9c72a694c1be067e254ffcfdf49c144603ee28ec71e302647d1b78828eabe`); ItemBody lines 24–33. Diagram check: **not-indicated**, claim lines 24–33.
- Viewed original 1200x1400: [ex-linear-combinations-of-brownian-values-are-gaussian--01.png](../screenshots/ex-linear-combinations-of-brownian-values-are-gaussian--01.png) — SHA256 `ddc903233503eb60cf7ade06752f9cf5527d3f3ff18e67e00ee780f952f2f704` (receipt match: True).
- Viewed original 1200x354: [ex-linear-combinations-of-brownian-values-are-gaussian--02.png](../screenshots/ex-linear-combinations-of-brownian-values-are-gaussian--02.png) — SHA256 `7e8545628f15960a0dede0d8c3e6413e8984cfb7e7a70373755c74551bcee31f` (receipt match: True).
### Normal approximation to binomial probabilities (`ex-normal-approximation-to-binomial-probabilities`)
Source `items/ex-normal-approximation-to-binomial-probabilities.md` (SHA256 `7f143e329b31cd7fe3636f2b09d77f159a23adbf4cb4e3ef5d5180e08f3d32a0`); ItemBody lines 26–29. Diagram check: **not-indicated**, claim lines 26–29.
- Viewed original 1200x1400: [ex-normal-approximation-to-binomial-probabilities--01.png](../screenshots/ex-normal-approximation-to-binomial-probabilities--01.png) — SHA256 `fe37e9ccf2c153502d9c1d5c674a44dbce4ddd2c4f8cba0edacc1fc45144f1ac` (receipt match: True).
### Random walk on a finite undirected graph is reversible (`ex-random-walk-on-a-finite-undirected-graph-is-reversible`)
Source `items/ex-random-walk-on-a-finite-undirected-graph-is-reversible.md` (SHA256 `5f574f0f36183e484944ae9561024f634c566deec35bce38bfd469e366cf7fd0`); ItemBody lines 28–39. Diagram check: **uncertain-editorial**, claim lines 30–38.
- Viewed original 1200x1400: [ex-random-walk-on-a-finite-undirected-graph-is-reversible--01.png](../screenshots/ex-random-walk-on-a-finite-undirected-graph-is-reversible--01.png) — SHA256 `6c64034775fe8c8f3a295e1b869205b56263d2c3f2ef5b87875dd1ea7a695a5a` (receipt match: True).
- Viewed original 1200x994: [ex-random-walk-on-a-finite-undirected-graph-is-reversible--02.png](../screenshots/ex-random-walk-on-a-finite-undirected-graph-is-reversible--02.png) — SHA256 `be5a9be323a21c4b5646fd8d40972e45bfa81bce7f3292c10cc7229a006dd2bf` (receipt match: True).
### Stopping a likelihood-ratio martingale (`ex-stopping-a-likelihood-ratio-martingale`)
Source `items/ex-stopping-a-likelihood-ratio-martingale.md` (SHA256 `d21b45b785e82cbe00312f08b14cad8a179b054cdafb420651fa1b465c69b459`); ItemBody lines 23–29. Diagram check: **not-indicated**, claim lines 23–29.
- Viewed original 1200x1400: [ex-stopping-a-likelihood-ratio-martingale--01.png](../screenshots/ex-stopping-a-likelihood-ratio-martingale--01.png) — SHA256 `7bf05255fd08515f0cf3a23b6f450e65d645ec9b4dbea07ad352993f32e106be` (receipt match: True).
### Uniform laws on expanding finite grids converge to uniform zero one (`ex-uniform-laws-on-expanding-finite-grids-converge-to-uniform-zero-one`)
Source `items/ex-uniform-laws-on-expanding-finite-grids-converge-to-uniform-zero-one.md` (SHA256 `16b20e787fa19c1c4144e015266f3efbbaf33f9dfabaeb15fee2a1c63a3a487a`); ItemBody lines 24–27. Diagram check: **not-indicated**, claim lines 24–27.
- Viewed original 1200x1400: [ex-uniform-laws-on-expanding-finite-grids-converge-to-uniform-zero-one--01.png](../screenshots/ex-uniform-laws-on-expanding-finite-grids-converge-to-uniform-zero-one--01.png) — SHA256 `4924f0ac486c8e6e3e63002e4952be17b3a3f90d80497c8df521c44448912e16` (receipt match: True).
- Viewed original 1200x730: [ex-uniform-laws-on-expanding-finite-grids-converge-to-uniform-zero-one--02.png](../screenshots/ex-uniform-laws-on-expanding-finite-grids-converge-to-uniform-zero-one--02.png) — SHA256 `a9f8a9b6c95394cb8717f2db7c6a2a217b2a7855703d26e3e9b9f5b2b96a7a2b` (receipt match: True).
### AC supplies countable selections and prescribed serial paths (`lem-ac-supplies-sequential-choices-for-probability-constructions`)
Source `items/lem-ac-supplies-sequential-choices-for-probability-constructions.md` (SHA256 `9148ac23f39dfd8e755e23226e5ce615ebbea63dcd6543490d8acd6508237508`); ItemBody lines 24–27. Diagram check: **not-indicated**, claim lines 24–27.
- Viewed original 1200x1400: [lem-ac-supplies-sequential-choices-for-probability-constructions--01.png](../screenshots/lem-ac-supplies-sequential-choices-for-probability-constructions--01.png) — SHA256 `c1b3a779485901dab556f537c0dbf8c067c7dc77ea164d45780926bad1e890b6` (receipt match: True).
### Brownian closed-set hitting times are stopping times (`lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times`)
Source `items/lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times.md` (SHA256 `071033afd4999ba1e2a48380531980e000287d6630e5a79b46147caeb4a8ad9b`); ItemBody lines 22–35. Diagram check: **not-indicated**, claim lines 22–35.
- Viewed original 1200x1400: [lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times--01.png](../screenshots/lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times--01.png) — SHA256 `ada02299d5a3ea576baede6a1dd42c3e46ae6edd62abf8460fe7bac18e9cff82` (receipt match: True).
- Viewed original 1200x750: [lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times--02.png](../screenshots/lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times--02.png) — SHA256 `767a26cc320891fd1783efe2e684ee382b488b172bf82709746ccdc984d5ac3f` (receipt match: True).
### Characteristic function of a normal law (`lem-characteristic-function-of-a-normal-law`)
Source `items/lem-characteristic-function-of-a-normal-law.md` (SHA256 `3a10bf1a5af9cc447669473ecee494f45226a283bd177ad563712d44171e18a9`); ItemBody lines 22–25. Diagram check: **not-indicated**, claim lines 22–25.
- Viewed original 1200x1400: [lem-characteristic-function-of-a-normal-law--01.png](../screenshots/lem-characteristic-function-of-a-normal-law--01.png) — SHA256 `fc54b5faff29a9105c29d6a2838e8d42bfedea9dfa0a290d8eda377b58f0fe1f` (receipt match: True).
- Viewed original 1200x1400: [lem-characteristic-function-of-a-normal-law--02.png](../screenshots/lem-characteristic-function-of-a-normal-law--02.png) — SHA256 `f0d45bbb48c1626888843757f74126adaff7e605368f12b23885560d0cea98b3` (receipt match: True).
- Viewed original 1200x689: [lem-characteristic-function-of-a-normal-law--03.png](../screenshots/lem-characteristic-function-of-a-normal-law--03.png) — SHA256 `d0123d510f09637ade48c7bb26887dc7a9029731c146cbec401cb05f58d6bb32` (receipt match: True).
### Conditional variance is well-defined and has the second-moment formula (`lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula`)
Source `items/lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula.md` (SHA256 `b10ee6fc69f48d8e7051b8dab266fe6ae06e6394646d27b0deab4379ee4f9dc3`); ItemBody lines 24–27. Diagram check: **not-indicated**, claim lines 24–27.
- Viewed original 1200x1400: [lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula--01.png](../screenshots/lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula--01.png) — SHA256 `00dfde6822477c5d4bf4b8b4f1e06e4eccb057aad31d11cf17a96e179f26b6d6` (receipt match: True).
- Viewed original 1200x252: [lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula--02.png](../screenshots/lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula--02.png) — SHA256 `8d807d9959ae68cb20a8afafd2eb347e4e392af40376dcf9abbaa5d911cfb3be` (receipt match: True).
### Cross Ito isometry (`lem-cross-ito-isometry`)
Source `items/lem-cross-ito-isometry.md` (SHA256 `097dbf0303f52c042146c5ffd3dcb1fd7cb6c4477c0c511b7c1e0e3364c2316e`); ItemBody lines 20–30. Diagram check: **not-indicated**, claim lines 20–30.
- Viewed original 1200x1400: [lem-cross-ito-isometry--01.png](../screenshots/lem-cross-ito-isometry--01.png) — SHA256 `51c385c59bf3a1e34f1ec78ae68ae896e8e84a885cbe34c2e6510f75ffce697d` (receipt match: True).
- Viewed original 1200x372: [lem-cross-ito-isometry--02.png](../screenshots/lem-cross-ito-isometry--02.png) — SHA256 `e28fbff94c3570d480d2fa12d3aebf17bf3e6d99267335b9d8ec096925181b84` (receipt match: True).
### Finite-coordinate cylinders form a $\pi$-system (`lem-finite-coordinate-cylinders-form-a-pi-system`)
Source `items/lem-finite-coordinate-cylinders-form-a-pi-system.md` (SHA256 `840434a28a3ae5d4a76133825bf9743703ec404ec4dba37236b2561e002a5eb2`); ItemBody lines 24–27. Diagram check: **not-indicated**, claim lines 24–27.
- Viewed original 1200x1400: [lem-finite-coordinate-cylinders-form-a-pi-system--01.png](../screenshots/lem-finite-coordinate-cylinders-form-a-pi-system--01.png) — SHA256 `c0a2297af601a8612212f5445dc692beb9252bdfde4cf6e00fee07441803d9c6` (receipt match: True).
### Iid linear truncation occurs only finitely often (`lem-iid-linear-truncation-occurs-only-finitely-often`)
Source `items/lem-iid-linear-truncation-occurs-only-finitely-often.md` (SHA256 `08a74f8be58c886bc0dc2c376cd7232c2588301edcc0ca30a42f6eafd2ddedf6`); ItemBody lines 24–27. Diagram check: **not-indicated**, claim lines 24–27.
- Viewed original 1200x1400: [lem-iid-linear-truncation-occurs-only-finitely-often--01.png](../screenshots/lem-iid-linear-truncation-occurs-only-finitely-often--01.png) — SHA256 `a89aa11cd6c14b31c1f3310b787cdf3539266b93562b17ca427c49bfc11b8f6d` (receipt match: True).
### Laws commute with measurable maps (`lem-laws-commute-with-measurable-maps`)
Source `items/lem-laws-commute-with-measurable-maps.md` (SHA256 `9f5c3f476f0a55b83d79b0e98ca3268105bcab56d324f95454952df2b2674d31`); ItemBody lines 27–33. Diagram check: **not-indicated**, claim lines 27–33.
- Viewed original 1200x1400: [lem-laws-commute-with-measurable-maps--01.png](../screenshots/lem-laws-commute-with-measurable-maps--01.png) — SHA256 `9b3d081ed10db305f2aa07283489d1fde5d2454c710cfa4334cc256181d325c4` (receipt match: True).
### The moment generating function of a finite sum of independent variables is the product of their moment generating functions (`lem-mgf-of-independent-finite-sum`)
Source `items/lem-mgf-of-independent-finite-sum.md` (SHA256 `f4250e91e3dcb65f73d7110145ce300ae26285818fcdee02f27f87f94debc147`); ItemBody lines 25–33. Diagram check: **not-indicated**, claim lines 25–32.
- Viewed original 1200x1400: [lem-mgf-of-independent-finite-sum--01.png](../screenshots/lem-mgf-of-independent-finite-sum--01.png) — SHA256 `cc8b4adc583535caebf6ac7fa0f202b0eba06ab1e17f80f3a797c533dd544da5` (receipt match: True).
- Viewed original 1200x584: [lem-mgf-of-independent-finite-sum--02.png](../screenshots/lem-mgf-of-independent-finite-sum--02.png) — SHA256 `020cb0929b0ad5185082db3936c379814f0c742a4e768bcc8af5fb741a983bc9` (receipt match: True).
### Probability laws on a compact metric space have weakly convergent subsequences (`lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences`)
Source `items/lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences.md` (SHA256 `e20e5642c75beddd53cc6e5bc8b500b2eea5bebfcbbf757c0c72f9e983eca517`); ItemBody lines 24–27. Diagram check: **not-indicated**, claim lines 24–27.
- Viewed original 1200x1400: [lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences--01.png](../screenshots/lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences--01.png) — SHA256 `508e096a122b9fe3d625c4aa3657405edf6b26992a9ffccc42dd1d26e06bcef5` (receipt match: True).
### A stopped random variable is measurable at the stopping time (`lem-stopped-random-variable-is-measurable-at-the-stopping-time`)
Source `items/lem-stopped-random-variable-is-measurable-at-the-stopping-time.md` (SHA256 `ddfc76d3987e03955de10e0c02b94c01279d49af409b7c3d754f8c65d0a0ad0e`); ItemBody lines 23–26. Diagram check: **not-indicated**, claim lines 23–26.
- Viewed original 1200x1400: [lem-stopped-random-variable-is-measurable-at-the-stopping-time--01.png](../screenshots/lem-stopped-random-variable-is-measurable-at-the-stopping-time--01.png) — SHA256 `021c4ac9bd8373a671eed826f79896eeb5b0767cb050d5b4968a9448d2ccc4df` (receipt match: True).
### Vanishing tail control bounds truncated second moments (`lem-vanishing-tail-control-implies-small-truncated-second-moment`)
Source `items/lem-vanishing-tail-control-implies-small-truncated-second-moment.md` (SHA256 `d40c8cc53c716752fc38c49d693c48bb1df990da06ab8d6e0814f967a748fe4d`); ItemBody lines 24–29. Diagram check: **not-indicated**, claim lines 24–29.
- Viewed original 1200x1400: [lem-vanishing-tail-control-implies-small-truncated-second-moment--01.png](../screenshots/lem-vanishing-tail-control-implies-small-truncated-second-moment--01.png) — SHA256 `aa5fcea3e8e5308729c1d4a338e72f4e6731de7c99d740af536914c60623a6ac` (receipt match: True).
### The general inequalities compare cleanly with the published finite ones (`rem-general-inequalities-restrict-to-the-published-finite-ones`)
Source `items/rem-general-inequalities-restrict-to-the-published-finite-ones.md` (SHA256 `ec335887bf709469db69cee738f2e10ca96b2cc57c86b6f943522173b4169663`); ItemBody lines 1–36. Diagram check: **not-indicated**, claim lines 1–36.
- Viewed original 1200x1400: [rem-general-inequalities-restrict-to-the-published-finite-ones--01.png](../screenshots/rem-general-inequalities-restrict-to-the-published-finite-ones--01.png) — SHA256 `10b10452c6393564578e7b2e3f5ddbe70e88cc6c84fd97ecafc3404effb3e68c` (receipt match: True).
### A stopped martingale is a martingale (`thm-a-stopped-martingale-is-a-martingale`)
Source `items/thm-a-stopped-martingale-is-a-martingale.md` (SHA256 `3d6fe5569ce1a4390df8a95206cd16cb9954ce88f0516d9309ab8e86e3dedb68`); ItemBody lines 23–26. Diagram check: **not-indicated**, claim lines 23–26.
- Viewed original 1200x1400: [thm-a-stopped-martingale-is-a-martingale--01.png](../screenshots/thm-a-stopped-martingale-is-a-martingale--01.png) — SHA256 `e4369d76953953e33708cc65ce3a76d0d562877a2a2129a10c6134a089e2fb34` (receipt match: True).
### Brownian-filtration martingale representation (`thm-brownian-filtration-martingale-representation`)
Source `items/thm-brownian-filtration-martingale-representation.md` (SHA256 `bab0911772cfdc169714bec655b62c9fc9e4d4cac121f2c4d2e7b32950d0f925`); ItemBody lines 22–45. Diagram check: **not-indicated**, claim lines 22–45.
- Viewed original 1200x1400: [thm-brownian-filtration-martingale-representation--01.png](../screenshots/thm-brownian-filtration-martingale-representation--01.png) — SHA256 `faebbbe2334439350f1804f4c847a8915d31eddbdf6bc19f89d4f24ecabf1023` (receipt match: True).
- Viewed original 1200x1400: [thm-brownian-filtration-martingale-representation--02.png](../screenshots/thm-brownian-filtration-martingale-representation--02.png) — SHA256 `1a86ea2fdd6858618b7c96ce6939da4b37d93c459847bc693d36562392de085c` (receipt match: True).
- Viewed original 1200x1400: [thm-brownian-filtration-martingale-representation--03.png](../screenshots/thm-brownian-filtration-martingale-representation--03.png) — SHA256 `721998d315e4c0b9449dacb18b213a71fbf4c243a275cdfed50570213196a958` (receipt match: True).
- Viewed original 1200x1400: [thm-brownian-filtration-martingale-representation--04.png](../screenshots/thm-brownian-filtration-martingale-representation--04.png) — SHA256 `242bde5253db30216a7d6b2b5069b28297ec57f58e2409bdfa1558e712c2c977` (receipt match: True).
- Viewed original 1200x1400: [thm-brownian-filtration-martingale-representation--05.png](../screenshots/thm-brownian-filtration-martingale-representation--05.png) — SHA256 `7f2671f46f45b47c40470aa147399f0fdebffe172e8d5ce26231945bc62559f8` (receipt match: True).
- Viewed original 1200x363: [thm-brownian-filtration-martingale-representation--06.png](../screenshots/thm-brownian-filtration-martingale-representation--06.png) — SHA256 `7e11b8c9ef55c8e51139a14ea189c70bb99ee5ad0f43b6e02aeb2fa0695d8c4f` (receipt match: True).
### Brownian time inversion (`thm-brownian-time-inversion`)
Source `items/thm-brownian-time-inversion.md` (SHA256 `9d69fe754decefd870d61dff68419766e1143f4a8bb92fef1b61207de2b6ee00`); ItemBody lines 26–34. Diagram check: **uncertain-editorial**, claim lines 28–33.
- Viewed original 1200x1400: [thm-brownian-time-inversion--01.png](../screenshots/thm-brownian-time-inversion--01.png) — SHA256 `e900c8ed0b00ebbeba657165d35c68c6ab2a0108c015b19eecc071a1e4f2dfe2` (receipt match: True).
- Viewed original 1200x1000: [thm-brownian-time-inversion--02.png](../screenshots/thm-brownian-time-inversion--02.png) — SHA256 `ae7b24faf5185892b488152216553c0723fc76ab75227596a4c4a5434d395b75` (receipt match: True).
### Conditional fatou and dominated convergence (`thm-conditional-fatou-and-dominated-convergence`)
Source `items/thm-conditional-fatou-and-dominated-convergence.md` (SHA256 `caec75e9b10c23e7c97ce6cb75a0e76fbd66ebe7b487a76673d8ca52280848e3`); ItemBody lines 20–23. Diagram check: **not-indicated**, claim lines 20–23.
- Viewed original 1200x1400: [thm-conditional-fatou-and-dominated-convergence--01.png](../screenshots/thm-conditional-fatou-and-dominated-convergence--01.png) — SHA256 `741555ebbff9dea5a05966f9a01651f1e1830a48749d7b6db3f1b2af424baeda` (receipt match: True).
- Viewed original 1200x196: [thm-conditional-fatou-and-dominated-convergence--02.png](../screenshots/thm-conditional-fatou-and-dominated-convergence--02.png) — SHA256 `0ae2f0bd49b476da7a8261861d50611914345d6a9bc3de8c6bdbf1bbf960806a` (receipt match: True).
### Convex functions of martingales are submartingales (`thm-convex-functions-of-martingales-are-submartingales`)
Source `items/thm-convex-functions-of-martingales-are-submartingales.md` (SHA256 `bf43c8b0e4d704de5c322107924052e4a9c7fa680e5eb3d4ea992e3849d74b65`); ItemBody lines 24–27. Diagram check: **not-indicated**, claim lines 24–27.
- Viewed original 1200x1400: [thm-convex-functions-of-martingales-are-submartingales--01.png](../screenshots/thm-convex-functions-of-martingales-are-submartingales--01.png) — SHA256 `15354f85bab19443b81a1a97e7bb71f0ef5271eb940e43998a73e6a97eb4b280` (receipt match: True).
### Doob decomposition of an integrable adapted process (`thm-doob-decomposition-of-an-integrable-adapted-process`)
Source `items/thm-doob-decomposition-of-an-integrable-adapted-process.md` (SHA256 `27a2e071a675d72e6010e44af95ca45447f9be1fd22a2a021b07438ea1bcbb5d`); ItemBody lines 24–29. Diagram check: **not-indicated**, claim lines 24–29.
- Viewed original 1200x1400: [thm-doob-decomposition-of-an-integrable-adapted-process--01.png](../screenshots/thm-doob-decomposition-of-an-integrable-adapted-process--01.png) — SHA256 `d7adad7c7e266e443293aa8dd6d24dfa0d261ae0ede61e4de7c65d1c65133924` (receipt match: True).
- Viewed original 1200x715: [thm-doob-decomposition-of-an-integrable-adapted-process--02.png](../screenshots/thm-doob-decomposition-of-an-integrable-adapted-process--02.png) — SHA256 `803d0827602eb24d51e276d48224ba4366135e62f66b7c258bd8a7a632883cf2` (receipt match: True).
### Existence of continuous Brownian motion (`thm-existence-of-continuous-brownian-motion`)
Source `items/thm-existence-of-continuous-brownian-motion.md` (SHA256 `4455a9fee59cd6e72652a20a69493cd89fe2737981ac0808b968eb131c1ebb3a`); ItemBody lines 26–33. Diagram check: **not-indicated**, claim lines 26–32.
- Viewed original 1200x1400: [thm-existence-of-continuous-brownian-motion--01.png](../screenshots/thm-existence-of-continuous-brownian-motion--01.png) — SHA256 `2ad588e7a7069e999deb68f9c22da5fa1d8eb5a4333fae72794c646c7f1d01bd` (receipt match: True).
- Viewed original 1200x476: [thm-existence-of-continuous-brownian-motion--02.png](../screenshots/thm-existence-of-continuous-brownian-motion--02.png) — SHA256 `9e0f831721d2fd98dfe2b1620faf1aee4f49861aa5d6f7cea8ca2751b6795c2e` (receipt match: True).
### Gaussian-mixture score identities and a global Lipschitz bound (`thm-gaussian-mixture-score-and-global-lipschitz-bound`)
Source `items/thm-gaussian-mixture-score-and-global-lipschitz-bound.md` (SHA256 `3c8cacc7c3d14455dda7be5cbe2d17f666896e1b03c2432fe7bd250feec5fe5c`); ItemBody lines 35–56. Diagram check: **not-indicated**, claim lines 35–56.
- Viewed original 1200x1400: [thm-gaussian-mixture-score-and-global-lipschitz-bound--01.png](../screenshots/thm-gaussian-mixture-score-and-global-lipschitz-bound--01.png) — SHA256 `494ff829b3eb94dea7315fc7b0b637618612024d7f1c044183ffcb2cabf75f7f` (receipt match: True).
- Viewed original 1200x929: [thm-gaussian-mixture-score-and-global-lipschitz-bound--02.png](../screenshots/thm-gaussian-mixture-score-and-global-lipschitz-bound--02.png) — SHA256 `2275c21e0ae426c7c09295585a4526313ba529360687857828e7a894056e8c54` (receipt match: True).
### Invariant initial law makes a Markov chain stationary (`thm-invariant-initial-law-makes-the-chain-stationary`)
Source `items/thm-invariant-initial-law-makes-the-chain-stationary.md` (SHA256 `cfa4d50af0931953380a0a57cb548f7bea6ccb13c789ffb94886dcf44b834c36`); ItemBody lines 33–49. Diagram check: **uncertain-editorial**, claim lines 35–49.
- Viewed original 1200x1400: [thm-invariant-initial-law-makes-the-chain-stationary--01.png](../screenshots/thm-invariant-initial-law-makes-the-chain-stationary--01.png) — SHA256 `544c696c87446e8232a95a220379f3fb446b6c8988f39e48482293657e2269ef` (receipt match: True).
- Viewed original 1200x1400: [thm-invariant-initial-law-makes-the-chain-stationary--02.png](../screenshots/thm-invariant-initial-law-makes-the-chain-stationary--02.png) — SHA256 `2c745d274be3993b29ad8c2ca6b41c748cb6c450d38039529e5f099f12a9ec76` (receipt match: True).
- Viewed original 1200x208: [thm-invariant-initial-law-makes-the-chain-stationary--03.png](../screenshots/thm-invariant-initial-law-makes-the-chain-stationary--03.png) — SHA256 `4f399e35c822d2623b286489030336e05c1bcf348355b10037f95c18d7c8d38d` (receipt match: True).
### Kolmogorov construction of the canonical Gaussian process (`thm-kolmogorov-construction-of-the-canonical-gaussian-process`)
Source `items/thm-kolmogorov-construction-of-the-canonical-gaussian-process.md` (SHA256 `eee01af39d48c478c77d271069e5f76142a95b0cbdb5ad4eabc83aa14e190941`); ItemBody lines 26–34. Diagram check: **uncertain-editorial**, claim lines 26–34.
- Viewed original 1200x1400: [thm-kolmogorov-construction-of-the-canonical-gaussian-process--01.png](../screenshots/thm-kolmogorov-construction-of-the-canonical-gaussian-process--01.png) — SHA256 `b8bc0e2e5bfa6edbdec22aeab9a7ca45e9ff57492dd87046dabcb855c340e6eb` (receipt match: True).
- Viewed original 1200x275: [thm-kolmogorov-construction-of-the-canonical-gaussian-process--02.png](../screenshots/thm-kolmogorov-construction-of-the-canonical-gaussian-process--02.png) — SHA256 `0f309fcb5a16e2fcce2d13b77097dcde29270fac145a29bc06eafa8d1db0eaab` (receipt match: True).
### Brownian law of the iterated logarithm at infinity (`thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity`)
Source `items/thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity.md` (SHA256 `1163e5a81d0e935bba7184f2b42dfbd6bfe49946ca46d4f7458c474d2774eef6`); ItemBody lines 20–25. Diagram check: **not-indicated**, claim lines 20–25.
- Viewed original 1200x1400: [thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity--01.png](../screenshots/thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity--01.png) — SHA256 `e7d66373535699dab1fdc40efe26abaabeaeb2e800e98a991c0a550edd149e45` (receipt match: True).
- Viewed original 1200x1400: [thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity--02.png](../screenshots/thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity--02.png) — SHA256 `899adea3029b991df35e6319d9a33d048fa00f2b52da5da15e16e3c162c8ad43` (receipt match: True).
- Viewed original 1200x130: [thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity--03.png](../screenshots/thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity--03.png) — SHA256 `63d6b2eb60d3bed3ab2e66acfe54e4771bcb9b6aeeb22083e9630b47603b896e` (receipt match: True).
### Lindeberg-Levy iid central limit theorem (`thm-lindeberg-levy-iid-central-limit-theorem`)
Source `items/thm-lindeberg-levy-iid-central-limit-theorem.md` (SHA256 `e67eb49d671d71f1f818f268f9ac3c54abfc7ffce90b8b98834da053e8afeef4`); ItemBody lines 26–29. Diagram check: **not-indicated**, claim lines 26–29.
- Viewed original 1200x1400: [thm-lindeberg-levy-iid-central-limit-theorem--01.png](../screenshots/thm-lindeberg-levy-iid-central-limit-theorem--01.png) — SHA256 `8ff961707836c1d06de589a4df07d950a64dd289341ca98f3a743ac1835c65b2` (receipt match: True).
- Viewed original 1200x115: [thm-lindeberg-levy-iid-central-limit-theorem--02.png](../screenshots/thm-lindeberg-levy-iid-central-limit-theorem--02.png) — SHA256 `c61333862d39f0529603708422f42ca96f59d6dc42d9a1fb07aef625441d7d8a` (receipt match: True).
### Martingale central limit theorem (`thm-martingale-central-limit-theorem`)
Source `items/thm-martingale-central-limit-theorem.md` (SHA256 `dbffe6cb4041aa167e50353d8ac2cc7e139b7653ec411e4a46c48a73a3daac67`); ItemBody lines 19–26. Diagram check: **not-indicated**, claim lines 19–26.
- Viewed original 1200x1400: [thm-martingale-central-limit-theorem--01.png](../screenshots/thm-martingale-central-limit-theorem--01.png) — SHA256 `78b405f4543336aa0c52c247ccc1143c0d5fbb854e8f4c5b460f4e306740f470` (receipt match: True).
- Viewed original 1200x719: [thm-martingale-central-limit-theorem--02.png](../screenshots/thm-martingale-central-limit-theorem--02.png) — SHA256 `591ff7bdcf5d2f73444b60a4aad7f7aac485b9df8be86571b8cea0e9b416ff81` (receipt match: True).
### Pairwise-independent Borel-Cantelli frequency law (`thm-pairwise-independent-borel-cantelli-frequency-law`)
Source `items/thm-pairwise-independent-borel-cantelli-frequency-law.md` (SHA256 `5d3db172e67a5214b22ac5b87c14abae7f9c45a75ffbeb5347f8a150c2066058`); ItemBody lines 25–35. Diagram check: **not-indicated**, claim lines 25–35.
- Viewed original 1200x1400: [thm-pairwise-independent-borel-cantelli-frequency-law--01.png](../screenshots/thm-pairwise-independent-borel-cantelli-frequency-law--01.png) — SHA256 `164eb4f4829975bea480a30922014c4aaee693b2fa7df0af18e146338ab549de` (receipt match: True).
- Viewed original 1200x815: [thm-pairwise-independent-borel-cantelli-frequency-law--02.png](../screenshots/thm-pairwise-independent-borel-cantelli-frequency-law--02.png) — SHA256 `74ca8e2cbb9bb60cf00154f2921118c7cbd0e1157e1e78965ad8117a7be6e530` (receipt match: True).
### Recurrence and transience are class properties (`thm-recurrence-and-transience-are-class-properties`)
Source `items/thm-recurrence-and-transience-are-class-properties.md` (SHA256 `617c3e32c769cd817d7fb10ed94c4b44c968206c854438b42b6547f07d6f37f7`); ItemBody lines 46–59. Diagram check: **not-indicated**, claim lines 46–59.
- Viewed original 1200x1400: [thm-recurrence-and-transience-are-class-properties--01.png](../screenshots/thm-recurrence-and-transience-are-class-properties--01.png) — SHA256 `0762010c6aeada019c2f9e8ccd1c24fe0171944e5f064bb7b2272abda5dbf920` (receipt match: True).
- Viewed original 1200x1400: [thm-recurrence-and-transience-are-class-properties--02.png](../screenshots/thm-recurrence-and-transience-are-class-properties--02.png) — SHA256 `2f462fcb52df96295b9f2fce1bcb4185b8035e2de3c54d315ceb2c64e39b65ed` (receipt match: True).
- Viewed original 1200x1400: [thm-recurrence-and-transience-are-class-properties--03.png](../screenshots/thm-recurrence-and-transience-are-class-properties--03.png) — SHA256 `509190af0223abeb58e6a1fe47dfe09f4666df2a4aaf29c967bd39da219a3aeb` (receipt match: True).
- Viewed original 1200x184: [thm-recurrence-and-transience-are-class-properties--04.png](../screenshots/thm-recurrence-and-transience-are-class-properties--04.png) — SHA256 `9dc8c2265cf54524d36b35257a34ca69babf454b28fef2c040b59f26ed87a6be` (receipt match: True).
### Stopping an Ito integral (`thm-stopping-an-ito-integral`)
Source `items/thm-stopping-an-ito-integral.md` (SHA256 `b9602817facf9017799ecab4208266783f71876d20c3b2c7b6332668eb118017`); ItemBody lines 20–38. Diagram check: **not-indicated**, claim lines 20–38.
- Viewed original 1200x1400: [thm-stopping-an-ito-integral--01.png](../screenshots/thm-stopping-an-ito-integral--01.png) — SHA256 `21f9c3ecf421672f799c06c5fef0c768f96e59155ab75a0f22d119fcf0fcfecf` (receipt match: True).
- Viewed original 1200x1015: [thm-stopping-an-ito-integral--02.png](../screenshots/thm-stopping-an-ito-integral--02.png) — SHA256 `af8180428fc988cbffeee1abaff50a560c7f28c495dae7d08df615916aac1b17` (receipt match: True).
### Two-sided Brownian exit probability (`thm-two-sided-exit-probability-for-brownian-motion`)
Source `items/thm-two-sided-exit-probability-for-brownian-motion.md` (SHA256 `c9e0295b4524190f2672b0c61f22f34a1ff0c9a5cd232c7f2dbd157f7232803a`); ItemBody lines 22–31. Diagram check: **high-likelihood**, claim lines 24–31.
- Viewed original 1200x1400: [thm-two-sided-exit-probability-for-brownian-motion--01.png](../screenshots/thm-two-sided-exit-probability-for-brownian-motion--01.png) — SHA256 `7138e4ebfc221419852614b42d46b0c23cea5ff99539b449ef27c6f520dfe3fd` (receipt match: True).
- Viewed original 1200x1400: [thm-two-sided-exit-probability-for-brownian-motion--02.png](../screenshots/thm-two-sided-exit-probability-for-brownian-motion--02.png) — SHA256 `82099494962d253beb10c1283bdd909bbdc91878b3b8be83a472cd8046937103` (receipt match: True).
- Viewed original 1200x288: [thm-two-sided-exit-probability-for-brownian-motion--03.png](../screenshots/thm-two-sided-exit-probability-for-brownian-motion--03.png) — SHA256 `d841bdfd4ebd0341ea2855a15b63e4fd34ccea0a2ad9e33598b2c5b9c59de527` (receipt match: True).
