---
id: thm-multivariate-method-of-moments-for-a-determinate-limit
kind: theorem
title: "The multivariate method of moments for a determinate limit"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
proof_strategy: direct
deps: [def-weak-convergence-of-borel-probability-measures, def-tight-family-of-probability-measures, thm-prokhorov-tightness-theorem-on-polish-spaces, cor-tightness-extracts-a-weakly-convergent-subsequence, cor-markov-inequality-for-random-variables, thm-skorokhod-representation-on-polish-spaces, thm-almost-everywhere-convergence-implies-convergence-in-measure-on-finite-measure-spaces, thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces, def-uniformly-integrable-family, cor-cauchy-schwarz-for-random-variables, def-multivariate-normal-law, lem-characteristic-function-of-a-multivariate-normal-law, thm-cramer-wold-device, thm-multinomial-theorem, lem-gaussian-even-moment-bound-for-brownian-increments, lem-standard-gaussian-is-determined-by-its-moments, def-axiom-of-choice, thm-euclidean-space-complete, thm-heine-borel-rn, def-polish-space, lem-probability-measure-basic-identities, thm-rationals-countable, lem-rat-embeds-dense, cor-expectation-linearity-monotonicity-and-modulus-bound]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Vladimir Ivanov and Grigori Olshanski, Kerov's central limit theorem for the Plancherel measure on Young diagrams, arXiv:math/0304010; survey-paper version in Symmetric Functions 2001, NATO Science Series II 74 (2002), 93-151"
      url: "https://arxiv.org/pdf/math/0304010"
      locator: "Prop. 6.4 and its sketch of proof, printed p. 31 (vector form of the moment method; the proof here supplies tightness, uniform integrability and determinacy)"
    - title: "Dan Romik, The Surprising Mathematics of Longest Increasing Subsequences, Cambridge University Press 2015; author-hosted manuscript of 20 August 2014 (363 pp.)"
      url: "https://danromik.com/resources/books/the-surprising-mathematics-of-longest-increasing-subsequences.pdf"
      locator: "§0.1, printed pp. 1-2 (convergence in distribution)"
---

## Statement

Assume AC. Let $d\ge1$, let $X_n$ be $\mathbb R^d$-valued random vectors with laws $\mu_n$, let $\mu$ be a Borel probability on $\mathbb R^d$ with all mixed moments finite, and suppose:

(i) for every multi-index $\alpha$, $\mathbb E[\prod_ix_i^{\alpha_i}]$ evaluated at $X_n$ converges to $\int\prod_ix_i^{\alpha_i}\,d\mu$;

(ii) $\mu$ is determined among Borel probabilities with finite moments by its mixed moments.

Then $\mu_n\Rightarrow\mu$ weakly. In particular every multivariate Gaussian law $N_d(m,\Sigma)$ is moment-determinate: a Borel probability with the same mixed moments as $N_d(m,\Sigma)$ equals it.

## Facts & Assumptions

**Given:** AC; a positive integer $d$; $\mathbb R^d$-valued random vectors $X_n$, $n\ge1$, with laws $\mu_n$; a Borel probability $\mu$ on $\mathbb R^d$ with $\int\prod_i|x_i|^{\alpha_i}\,d\mu<\infty$ for every multi-index $\alpha\in\mathbb N^d$, which satisfies (i) and (ii) of the Statement. For a multi-index $\alpha$ write $|\alpha|=\alpha_1+\cdots+\alpha_d$ and $w^\alpha=\prod_iw_i^{\alpha_i}$.

[F1] $\mu_n\Rightarrow\mu$ means $\int f\,d\mu_n\to\int f\,d\mu$ for every bounded continuous real $f$; a family is tight when one compact set captures mass $1-\varepsilon$ from every member; a tight sequence of Borel probabilities on a Polish space has a weakly convergent subsequence, and a Polish space is a complete separable metric space ([[def-weak-convergence-of-borel-probability-measures]], [[def-tight-family-of-probability-measures]], [[thm-prokhorov-tightness-theorem-on-polish-spaces]], [[cor-tightness-extracts-a-weakly-convergent-subsequence]]).

[F2] If $Y\ge0$ and $a>0$ then $\mathbb P(Y\ge a)\le\mathbb E[Y]/a$ ([[cor-markov-inequality-for-random-variables]]).

[F3] If $\mu_k\Rightarrow\mu$ on a Polish $S$, there are random elements on a common probability space with laws $\mu_k,\mu$ and converging almost surely ([[thm-skorokhod-representation-on-polish-spaces]]).

[F4] On a finite measure space, almost sure convergence implies convergence in measure ([[thm-almost-everywhere-convergence-implies-convergence-in-measure-on-finite-measure-spaces]]), and if $f_k\to f$ in measure with $\{f_k\}$ uniformly integrable then $f_k\to f$ in $L^1$, so $f$ is integrable and the expectations converge ([[thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces]], [[def-uniformly-integrable-family]]); moreover a family bounded in $L^2$ is uniformly integrable according to that definition, because $\int_{\{|f|>M\}}|f|\le M^{-1}\sup_k\mathbb E f_k^2$.

[F5] If $X,Y\in L^2$ then $\mathbb E|XY|\le(\mathbb E X^2)^{1/2}(\mathbb E Y^2)^{1/2}$ ([[cor-cauchy-schwarz-for-random-variables]]).

[F6] For a multivariate normal $Y\sim N_d(m,\Sigma)$ and $u\in\mathbb R^d$, the projection $u\cdot Y$ is normal with mean $u\cdot m$ and variance $u^{\mathsf T}\Sigma u$, its characteristic function is $\exp(i\,t\,u\cdot m-\tfrac12t^2u^{\mathsf T}\Sigma u)$, and two Borel probabilities on $\mathbb R^d$ whose one-dimensional projections all have the same laws are equal ([[def-multivariate-normal-law]], [[lem-characteristic-function-of-a-multivariate-normal-law]], [[thm-cramer-wold-device]]).

[F7] If $Z\sim N(0,1)$ then $\mathbb E[Z^{2k}]=(2k-1)!!<\infty$ for $k\ge1$, so $\mathbb E|Z|^k<\infty$ for every $k$ ([[lem-gaussian-even-moment-bound-for-brownian-increments]]; for odd $k$ use $|Z|^k\le 1+Z^{k+1}$ and the even bound at $k+1$).

[F8] If $Y$ has all moments and $\mathbb E[Y^k]=\mathbb E[Z^k]$ for all $k$ with $Z\sim N(0,1)$, then $Y\sim N(0,1)$ ([[lem-standard-gaussian-is-determined-by-its-moments]]).

[F9] Multinomial expansion: $(\sum_{i=1}^du_i)^{\!k}=\sum_{|\alpha|=k}\binom{k}{\alpha}u^\alpha$, with $\binom{k}{\alpha}=\frac{k!}{\alpha!}$, for all real $u_i$ ([[thm-multinomial-theorem]]).

[F10] Euclidean $\mathbb R^d$ is complete ([[thm-euclidean-space-complete]]) and separable: the rational coordinates have an enumeration ([[thm-rationals-countable]]), and their $d$-tuples can be enumerated by listing for each integer $M$ the finitely many tuples of enumeration indices at most $M$. These vectors are dense: choose each rational coordinate within $\varepsilon/\sqrt d$ of the given coordinate using [[lem-rat-embeds-dense]], giving Euclidean distance less than $\varepsilon$. Hence it is Polish ([[def-polish-space]]). Closed cubes are compact by [[thm-heine-borel-rn]], and finite probability union bounds are supplied by [[lem-probability-measure-basic-identities]].

[F11] Expectations of integrable variables are linear, monotone for real variables, and satisfy $|\mathbb E U|\le\mathbb E|U|$ ([[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

## Proof
**Proof technique:** direct.

1.1 Gaussian projections: let $Y\sim N_d(m,\Sigma)$, $u\in\mathbb R^d$, $c:=u\cdot m$ and $s:=u^{\mathsf T}\Sigma u\ge0$. By [F6] the projection $u\cdot Y$ is normal with mean $c$ and variance $s$, and by [F7] the standard normal has moments of every order; hence $\mathbb E|u\cdot Y|^k<\infty$ for every $k$, and by [F9] and linearity of expectation, $\mathbb E[(u\cdot Y)^k]=\sum_{|\alpha|=k}\binom{k}{\alpha}u^\alpha\mathbb E[Y^\alpha]$, a finite sum of finite mixed moments. Indeed each coordinate has all absolute moments by [F7]; for a multi-index of total degree $q>0$, $\prod_i|Y_i|^{\alpha_i}\le\max_i|Y_i|^q\le\sum_i|Y_i|^q$, proving mixed absolute integrability. The degree-zero product is $1$. [given, F6, F7, F9, algebra, F11]

1.2 Tightness of the sequence: for each coordinate $i$, hypothesis (i) applied to the multi-index with a single $2$ in place of $i$ gives $\mathbb E[X_{n,i}^2]\to\int x_i^2\,d\mu$, so $C:=\max_i\sup_n\mathbb E[X_{n,i}^2]<\infty$. Fix $\varepsilon>0$ and choose $R>0$ with $dC/R^2<\varepsilon$; the cube $K:=[-R,R]^d$ is compact by [F10] and $\mathbb R^d\setminus K$ is contained in the union of the $d$ coordinate slabs $\{|x_i|>R\}$, so by [F2] and the union bound of [F10], $\mu_n(\mathbb R^d\setminus K)\le\sum_{i=1}^d\mu_n(\{|x_i|>R\})\le\sum_{i=1}^d\mathbb E[X_{n,i}^2]/R^2\le dC/R^2<\varepsilon$ for every $n$. Hence $\{\mu_n\}$ is tight. [given, F2, F10, algebra]

2.1 Matching of projection moments: let $\nu$ be a Borel probability on $\mathbb R^d$ with the same mixed moments as $Y$, i.e. $\int w^\alpha\,d\nu=\mathbb E[Y^\alpha]$ for every multi-index $\alpha$, and let $W\sim\nu$. Then for every $u\in\mathbb R^d$ and every $k\ge0$ the multinomial expansion [F9] gives $\mathbb E[(u\cdot W)^k]=\sum_{|\alpha|=k}\binom{k}{\alpha}u^\alpha\int w^\alpha\,d\nu=\sum_{|\alpha|=k}\binom{k}{\alpha}u^\alpha\mathbb E[Y^\alpha]=\mathbb E[(u\cdot Y)^k]$ by step 1.1; moreover $\mathbb E[(u\cdot W)^{2k}]=\mathbb E[(u\cdot Y)^{2k}]<\infty$, so [F5] gives $\mathbb E|u\cdot W|^k\le(\mathbb E[(u\cdot W)^{2k}])^{1/2}<\infty$. Thus all moments of the projection $u\cdot W$ are finite and equal those of $u\cdot Y$. [given, F5, F9, step 1.1, algebra, F11]

2.2 Extraction along any subsequence: let $(\mu_{n_k})$ be an arbitrary subsequence of $(\mu_n)$. By step 1.2 the subfamily $\{\mu_{n_k}\}$ is tight as well, so by [F1], applicable to the Polish space verified in [F10], it has a further subsequence $\mu_{n_{k_j}}$ converging weakly to some Borel probability $\mu''$ on $\mathbb R^d$; by [F3] there are random elements $Y_j,Y$ on a common probability space with laws $\mu_{n_{k_j}},\mu''$ and $Y_j\to Y$ almost surely. [given, F1, F3, F10, step 1.2]

3.1 Projections determine the Gaussian: keep the notation of steps 1.1 and 2.1 with $W\sim\nu$ and fix $u\in\mathbb R^d$. If $s=0$ then, by step 2.1 with $k=1,2$, $\mathbb E[u\cdot W]=c$ and $\mathbb E[(u\cdot W)^2]=\mathbb E[(u\cdot Y)^2]=s+c^2=c^2$, so $\operatorname{Var}(u\cdot W)=\mathbb E[(u\cdot W-c)^2]=0$ and $u\cdot W=c$ almost surely: by [F2], $\mathbb P(|u\cdot W-c|>1/l)=0$ for every integer $l\ge1$, and their countable union is the event $u\cdot W\ne c$, of probability zero by [F10]. This is the law of $u\cdot Y$. If $s>0$, put $Z':=(u\cdot W-c)/\sqrt s$; by step 2.1 its moments satisfy $\mathbb E[(Z')^k]=s^{-k/2}\sum_{j=0}^k\binom{k}{j}(-c)^{k-j}\mathbb E[(u\cdot W)^j]=s^{-k/2}\sum_{j=0}^k\binom{k}{j}(-c)^{k-j}\mathbb E[(u\cdot Y)^j]=\mathbb E[\zeta^k]$ for $\zeta\sim N(0,1)$, because $(u\cdot Y-c)/\sqrt s\sim N(0,1)$ by [F6]; and $\mathbb E|Z'|^k<\infty$ by step 2.1. [F8] therefore gives $Z'\sim N(0,1)$, so $u\cdot W\sim N(c,s)$, again the law of $u\cdot Y$. [given, F6, F8, step 1.1, step 2.1, algebra, F11, F2, F10]

3.2 Uniform integrability along the coupling: fix a multi-index $\alpha$ and let $f_j:=\prod_iY_{j,i}^{\alpha_i}$, so $f_j\to\prod_iY_i^{\alpha_i}$ almost surely by step 2.2. By hypothesis (i) applied to the multi-index $2\alpha$, $\mathbb E[f_j^2]=\mathbb E[\prod_iX_{n_{k_j},i}^{2\alpha_i}]\to\int\prod_ix_i^{2\alpha_i}\,d\mu$, so $\sup_j\mathbb E f_j^2<\infty$; hence $\int_{\{|f_j|>M\}}|f_j|\le M^{-1}\sup_j\mathbb E f_j^2$ tends to $0$ uniformly in $j$ as $M\to\infty$, and the family $\{f_j\}$ is uniformly integrable by [F4]. [given, F4, step 2.2, algebra]

4.1 Gaussian determinacy: if $\nu$ has the same mixed moments as $Y\sim N_d(m,\Sigma)$, then by step 3.1 every projection $u\cdot W$ of $W\sim\nu$ has the law of the projection $u\cdot Y$; by the Cramér-Wold clause of [F6] the laws of $W$ and $Y$ coincide, so $\nu=N_d(m,\Sigma)$. [given, F6, step 3.1]

4.2 Identification of the limit: with the notation of step 3.2, almost sure convergence implies convergence in measure on the finite measure space by [F4]; together with the uniform integrability of step 3.2, Vitali's theorem [F4] gives $\mathbb E[\prod_iY_{j,i}^{\alpha_i}]\to\mathbb E[\prod_iY_i^{\alpha_i}]$ and shows the limit is finite. The left-hand side equals $\mathbb E[\prod_iX_{n_{k_j},i}^{\alpha_i}]$, which tends to $\int\prod_ix_i^{\alpha_i}\,d\mu$ by hypothesis (i); hence $\int w^\alpha\,d\mu''=\int w^\alpha\,d\mu$ for every multi-index $\alpha$, $\mu''$ has finite mixed moments, and hypothesis (ii) gives $\mu''=\mu$. [given, step 2.2, step 3.2, algebra]

5.1 Convergence of the full sequence: let $(\mu_{n_k})$ be an arbitrary subsequence of $(\mu_n)$. Steps 2.2, 3.2 and 4.2 applied to it produce a further subsequence converging weakly to $\mu$. Hence $\mu_n\Rightarrow\mu$: otherwise there are a bounded continuous real function $f$ on $\mathbb R^d$, a real $\varepsilon>0$ and a subsequence with $\bigl|\int f\,d\mu_{n_k}-\int f\,d\mu\bigr|\ge\varepsilon$ for all $k$ ([[def-weak-convergence-of-borel-probability-measures]]), yet that subsequence has a further subsequence converging weakly to $\mu$, along which $\int f\,d\mu_{n_{k_j}}\to\int f\,d\mu$, a contradiction. [given, F1, step 4.2, algebra]

6.1 Conclusion: step 5.1 proves the convergence assertion from hypotheses (i) and (ii), and steps 1.1, 2.1, 3.1 and 4.1 prove that every multivariate Gaussian law is moment-determinate. AC was used exactly through the Polish-space existence theorems of [F1], [F3] and the determinacy lemma [F8]. [given, step 4.1, step 5.1] ∎ 