---
id: thm-empirical-process-functional-clt
kind: theorem
title: Functional central limit theorem by bracketing entropy
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps: [def-axiom-of-choice, def-asymptotic-distribution, def-donsker-class-and-asymptotic-equicontinuity, def-empirical-process-and-rademacher-process, def-countable-choice, def-covering-packing-bracketing-number-and-metric-entropy, def-metric-completion, def-metric-space, def-multivariate-normal-law, def-polish-space, def-standard-borel-space, def-borel-sigma-algebra, def-tight-family-of-probability-measures, cor-first-borel-cantelli-lemma-for-events, cor-markov-inequality-for-random-variables, lem-countable-uniformly-dense-tests-on-a-compact-metric-space, lem-empirical-process-asymptotic-equicontinuity-from-bracketing-entropy, lem-characteristic-function-of-a-normal-law, lem-probability-measure-basic-identities, thm-c-k-complete-in-the-sup-metric, thm-complete-and-totally-bounded-implies-compact, thm-cramer-wold-device, thm-dominated-convergence, thm-every-borel-probability-on-a-polish-space-is-tight, thm-euclidean-space-complete, thm-kolmogorov-extension-for-standard-borel-coordinate-spaces, thm-metric-completion-exists, thm-multivariate-iid-central-limit-theorem, thm-rationals-countable, lem-rat-embeds-dense, thm-uniqueness-of-a-law-from-its-characteristic-function, thm-dudley-entropy-integral, cor-cauchy-schwarz-inequality-for-l-two, def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, thm-integration-against-a-density, thm-substitution, thm-continuous-implies-integrable, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-monotone-convergence-for-the-integral]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1, §§2 and 7"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
    - title: "David Pollard, Empirical Processes: Theory and Applications, Sections 9–10"
      url: "http://www.stat.yale.edu/~pollard/Books/Iowa/Iowa-notes.pdf"
---

## Statement

For a class $\mathcal H$ of measurable real functions under a probability measure $Q$, an **envelope** $H$ means a nonnegative measurable function with $|h|\le H$ $Q$-almost surely for every $h\in\mathcal H$. Cauchy–Schwarz [[cor-cauchy-schwarz-inequality-for-l-two]] gives $QH\le\|H\|_{Q,2}<\infty$ when $H\in L^2(Q)$.

Assume the Axiom of Choice. Let $X_1,X_2,\ldots$ be iid with law $P$ on a measurable space, and let $\mathcal F$ be a nonempty pointwise-measurable class of measurable real functions with a measurable envelope $F\ge0$ satisfying $PF^2<\infty$. If $\|F\|_{P,2}=0$, the empirical process is the zero process almost surely. Otherwise assume

$$\int_0^1\sqrt{\log N_{[]}\bigl(\epsilon\|F\|_{P,2},\mathcal F,L^2(P)\bigr)}\,d\epsilon<\infty,$$

where $N_{[]}(r,\mathcal F,L^2(P))$ is the least number of measurable brackets $[l,u]$ with $l\le f\le u$ $P$-almost surely and $\|u-l\|_{P,2}\le r$ that cover $\mathcal F$. Then $\mathcal F$ is $P$-Donsker in the sense of [[def-donsker-class-and-asymptotic-equicontinuity]]: the empirical process $\mathbb G_n=\sqrt n(P_n-P)$ converges weakly in outer expectation in $\ell^\infty(\mathcal F)$ to a tight centered Gaussian bridge with covariance

$$K(f,g)=P[(f-Pf)(g-Pg)].$$

The $L^2(P)$ bracketing number and width use [[def-covering-packing-bracketing-number-and-metric-entropy]].

## Facts & Assumptions

**Given:** Assume AC. Let $X_i$ be iid with law $P$, let $\mathcal F$ be pointwise measurable with envelope $F\in L^2(P)$, and assume the displayed bracketing entropy integral is finite.

[A1] AC supplies Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]). AC is used by the multivariate iid CLT, the consistent Gaussian-process extension, and tightness of the Gaussian law; Countable Choice is used by metric completion and compactness constructions.

[A2] [[def-countable-choice]] defines Countable Choice and states that AC implies it. In particular, the metric-completion construction below has its stated choice hypothesis.

[L1] [[def-empirical-process-and-rademacher-process]]: $P_nf=n^{-1}\sum_{i=1}^n f(X_i)$, $Pf=\int f\,dP$, $\mathbb G_n(f)=\sqrt n(P_nf-Pf)$, and uncountable suprema use the stated outer-probability/outer-expectation convention unless a countable separable version applies.

[L2] [[def-covering-packing-bracketing-number-and-metric-entropy]]: an $L^2(P)$ bracket has measurable endpoints $l\le f\le u$ $P$-almost everywhere and width $\|u-l\|_{P,2}$.

[L3] [[cor-cauchy-schwarz-inequality-for-l-two]]: on a probability space, $PF\le\|F\|_{P,2}$ for nonnegative $F\in L^2(P)$.

[F1] [[def-asymptotic-distribution]]: for a finite-dimensional random vector, an asymptotic distribution is a weak limit of its laws; this does not assert moment convergence.

[F2] [[thm-multivariate-iid-central-limit-theorem]]: under AC, iid vectors with finite second moment converge after centering and $n^{-1/2}$ scaling to a centered multivariate normal vector whose covariance matrix is the original covariance matrix, including singular matrices.

[F3] [[def-multivariate-normal-law]]: under AC, a positive-semidefinite covariance matrix specifies an existing centered multivariate normal law, including in singular directions.

[F4] [[thm-kolmogorov-extension-for-standard-borel-coordinate-spaces]]: under AC, consistent finite-dimensional laws on standard Borel coordinate spaces extend to a probability law on their cylinder sigma-algebra.

[F5] [[thm-dudley-entropy-integral]]: for a separable sub-Gaussian process with totally bounded index pseudometric and finite entropy integral, the expected supremum of increments from a base point is bounded by the corresponding entropy integral.

[F6] [[lem-empirical-process-asymptotic-equicontinuity-from-bracketing-entropy]]: the stated square-integrable-envelope and fixed-$P$ bracketing integral imply asymptotic equicontinuity of $\mathbb G_n$ in $\rho_P(f,g)=\{P[(f-g)-P(f-g)]^2\}^{1/2}$.

[F7] [[thm-dominated-convergence]]: pointwise convergence dominated by an integrable function implies convergence in $L^1$.

[F8] [[thm-metric-completion-exists]]: under Countable Choice, a metric space embeds isometrically and densely in a complete metric space; [[thm-complete-and-totally-bounded-implies-compact]] makes the completion of a totally bounded space compact.

[F9] [[thm-c-k-complete-in-the-sup-metric]] and [[lem-countable-uniformly-dense-tests-on-a-compact-metric-space]]: for compact metric $T$, $C(T,\mathbb R)$ is complete and separable in the supremum norm.

[F10] [[def-polish-space]]: a separable completely metrizable space is Polish. [[thm-every-borel-probability-on-a-polish-space-is-tight]]: under AC, every Borel probability on a Polish space is tight.

[F11] [[cor-markov-inequality-for-random-variables]]: for nonnegative $Y$ and $a>0$, $P(Y>a)\le EY/a$. [[cor-first-borel-cantelli-lemma-for-events]]: if event probabilities are summable, only finitely many of the events occur almost surely.

[F12] [[lem-characteristic-function-of-a-normal-law]] and [[thm-uniqueness-of-a-law-from-its-characteristic-function]]: a centered normal variable of variance $\sigma^2$ has characteristic function $e^{-t^2\sigma^2/2}$, and equal characteristic functions determine real probability laws.

[F13] [[thm-euclidean-space-complete]] makes the usual real line complete. [[thm-rationals-countable]] makes $\mathbb Q$ countable, and [[lem-rat-embeds-dense]] embeds it in $\mathbb R$ with a rational strictly between any two distinct reals. Thus every open ball contains an embedded rational, so this image is a countable dense subset. By [[def-polish-space]], [[def-borel-sigma-algebra]], and [[def-standard-borel-space]], the usual real line is Polish and its Borel measurable space is standard Borel.

[F14] [[thm-cramer-wold-device]]: Borel probability laws on a finite-dimensional Euclidean space are determined by all their one-dimensional projection laws.

[F15] [[lem-probability-measure-basic-identities]]: countable subadditivity implies that a countable union of null sets is null.

[F16] [[def-standard-normal-and-normal-laws]]: under AC, $N(0,\sigma^2)$ is the law of $x\mapsto\sigma x$ under the standard normal density law. [[lem-normal-density-has-total-mass-one]]: $\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$ is positive and Borel measurable with Lebesgue integral one.

[F17] [[thm-integration-against-a-density]]: integrating a nonnegative measurable function against a density measure equals integrating its product with the density.

[F18] [[thm-substitution]]: a differentiable change of variable with integrable derivative permits compact-interval substitution for a continuous integrand. [[thm-continuous-implies-integrable]] gives bounded Riemann integrability of continuous compact-interval functions; [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]] identifies these integrals with Lebesgue integrals under Countable Choice.

[F19] [[thm-monotone-convergence-for-the-integral]]: increasing nonnegative measurable functions have integrals increasing to the integral of their pointwise limit.

## Proof

**Given:** Assume AC and let $X_i$, $P$, $\mathcal F$, and $F$ satisfy the statement. Put $\rho_P(f,g)=\{P[(f-g)-P(f-g)]^2\}^{1/2}$ and $K(f,g)=P[(f-Pf)(g-Pg)]$.

1.1 If $\|F\|_{P,2}=0$, every member of a countable pointwise-dense subclass is zero $P$-almost surely. By [F15], countable subadditivity gives a probability-one event on which all those functions vanish at every observation. Pointwise approximation then makes every $f\in\mathcal F$ vanish at the observations; dominated convergence gives $Pf=0$ for each $f$. Thus $\mathbb G_n$ is the zero process in outer probability and the conclusion holds with the zero Gaussian bridge. [A1, L1, L3, F7, F15, given]

1.2 Assume $\|F\|_{P,2}>0$. The countable pointwise-dense subclass has a common measurable conull set on which its members are bounded by $F$; pointwise approximation extends that bound to every $f\in\mathcal F$ on the same set. By [F15], all observations lie in it on one measurable event of probability one. On that event, $\sup_{f\in\mathcal F}|\mathbb G_n(f)|\le\sqrt n(P_nF+PF)<\infty$ for every $n$, by [L3]. Set the entire empirical path to zero off that event, as required by the Donsker definition. Each finite $L^2(P)$ bracket of width $r$ has $\rho_P$-diameter at most $r$, because $\rho_P(f,g)\le\|f-g\|_{P,2}\le\|u-l\|_{P,2}$. The entropy integral being finite forces $N_{[]}(r,\mathcal F,L^2(P))<\infty$ for every $r>0$: if it were infinite at one positive scale, monotonicity would make the integral infinite on an interval below that scale. Therefore the quotient of $\mathcal F$ by zero $\rho_P$-distance is totally bounded. The countable pointwise-dense subclass is dense in this quotient, since $|f_k-f|^2\le4F^2$ and [F7] gives $\|f_k-f\|_{P,2}\to0$. [A1, L1, L2, L3, F7, F15, given, algebra]

2.1 Enumerate the countable dense subclass as $\mathcal F_0=\{f_j:j\in J\}$. For any finite list $f_{j_1},\ldots,f_{j_m}$, the covariance matrix $\Sigma_{ab}=K(f_{j_a},f_{j_b})$ is positive semidefinite, since $c^T\Sigma c=P[\sum_a c_a(f_{j_a}-Pf_{j_a})]^2\ge0$. [F3] supplies the centered Gaussian law $N_m(0,\Sigma)$. For any sublist, both the corresponding marginal and the Gaussian law constructed from its covariance have, in every direction, the same centered normal projection; [F14] makes the laws equal. Thus these finite-dimensional laws are consistent. [A1, L1, L3, F3, F14, given, algebra, step 1.2]

3.1 The coordinate space $\mathbb R$ with its Borel sigma-algebra is standard Borel by [F13], so [F4] extends the consistent Gaussian laws to a centered Gaussian process $\mathbb G_0$ indexed by $\mathcal F_0$, with covariance $K$. Each increment $\mathbb G_0(f)-\mathbb G_0(g)$ is centered normal with variance $\rho_P(f,g)^2$. [A1, F3, F4, F13, step 2.1]

4.1 For any centered normal $Y$ with variance $\sigma^2$, if $\sigma=0$ then [F16] makes $Y=0$ almost surely and $\mathbb E e^{\lambda Y}=1$. If $\sigma>0$, [F16]–[F17] give $$\mathbb E e^{\lambda Y}=\int_{\mathbb R}e^{\lambda\sigma x}\phi(x)\,dx=e^{\lambda^2\sigma^2/2}\int_{\mathbb R}\phi(x-\lambda\sigma)\,dx,$$ by completing the square. For $a=\lambda\sigma$ and positive integer $R>|a|$, apply [F18] to the translation $x\mapsto x-a$, whose derivative is the integrable constant one, and the continuous integrand $\phi$. Both compact integrands are continuous and bounded, so the Riemann–Lebesgue bridge in [F18], with Countable Choice from [A1], gives $\int_{[-R,R]}\phi(x-a)\,dx=\int_{[-R-a,R-a]}\phi(u)\,du$. These intervals increase to $\mathbb R$ as $R\to\infty$; [F19] on both sides and the normalization in [F16] give $\int_{\mathbb R}\phi(x-a)\,dx=1$. Thus every centered Gaussian increment with variance $\sigma^2$ has MGF proxy $\sigma^2$, as needed for chaining. [A1, F16, F17, F18, F19, step 3.1, algebra]

5.1 For $\delta>0$, index the Gaussian increment process by pairs $(f,g)\in\mathcal F_0^2$ with $\rho_P(f,g)\le\delta$, and write $Y_{f,g}=\mathbb G_0(f)-\mathbb G_0(g)$. Its canonical pseudometric is $d_Y((f,g),(f',g'))=\{E[(Y_{f,g}-Y_{f',g'})^2]\}^{1/2}$. The triangle inequality in $L^2(P)$ gives $d_Y\le\rho_P(f,f')+\rho_P(g,g')$, while every $Y_{f,g}$ has standard deviation at most $\delta$, so the $d_Y$-diameter of this pair set is at most $2\delta$. By step 4.1 its increments are centered sub-Gaussian with their $d_Y$-scale. A product of two $\epsilon/4$-nets of $\mathcal F_0$ covers the pair set within $d_Y$-distance $\epsilon/2$. Its centers might lie outside the restricted pair set; from each product ball that meets the pair set, choose one pair inside it. The triangle inequality then gives an $\epsilon$-net with centers in the pair set and cardinality at most $N(\epsilon/4,\mathcal F_0,\rho_P)^2$. Applying [F5] with the diagonal base point $(f_*,f_*)$ yields $E\sup_{f,g\in\mathcal F_0:\,\rho_P(f,g)\le\delta}|\mathbb G_0(f)-\mathbb G_0(g)|\le C\int_0^{C'\delta}\sqrt{\log N(\epsilon,\mathcal F_0,\rho_P)}\,d\epsilon,$ which tends to zero as $\delta\downarrow0$ by the bracketing cover bound in step 1.2. [F5, step 1.2, step 3.1, step 4.1, algebra]

6.1 Choose rational $\delta_k\downarrow0$ so that the expectation in step 5.1 is at most $2^{-3k}$. By [F11], the probability that the corresponding modulus exceeds $2^{-k}$ is at most $2^{-2k}$, and the first Borel–Cantelli lemma makes only finitely many such events occur almost surely. Thus the Gaussian sample paths are uniformly $\rho_P$-continuous on $\mathcal F_0$ almost surely. By [A2], Countable Choice is available for the metric-completion construction in [F8], so the metric quotient embeds densely in a complete metric completion $T$; compactness and the pathwise extension are established below. [A2, F8, F11, step 5.1, choose]

7.1 Fix $\varepsilon>0$ and take a finite $\varepsilon/2$-net in the totally bounded metric quotient from step 1.2. Its image in $T$ is still a finite $\varepsilon/2$-net for the dense embedded quotient. For any $x\in T$, density gives a quotient point $q$ with $d(x,q)<\varepsilon/2$, and some net point $y$ satisfies $d(q,y)\le\varepsilon/2$; hence $d(x,y)<\varepsilon$. Thus $T$ is totally bounded, and it is compact by its completeness from [F8] and the complete-plus-totally-bounded theorem in [F8]. To extend a path $G_0$ that is uniformly $\rho_P$-continuous on the listed dense subset $\mathcal F_0$, for each $x\in T$ and $n\ge1$ let $f_n(x)$ be the first listed point of $\mathcal F_0$ within $1/n$ of $x$. The sequence $G_0(f_n(x))$ is Cauchy by uniform continuity and therefore has a real limit by [F13]. Any two sequences from $\mathcal F_0$ converging to $x$ have pairwise distances tending to zero, so uniform continuity makes their value limits equal. Define $\overline G_0(x)$ by this common limit. To verify continuity, given $\eta>0$ choose $\tau>0$ so that $d(u,v)<\tau$ for $u,v\in\mathcal F_0$ implies $|G_0(u)-G_0(v)|<\eta/2$. If $d(x,y)<\tau/3$, approximating sequences $u_n\to x$ and $v_n\to y$ eventually satisfy $d(u_n,v_n)<\tau$; passing to their value limits gives $|\overline G_0(x)-\overline G_0(y)|\le\eta/2<\eta$. Density makes this extension unique. [A2, F8, F13, step 1.2, step 6.1, construct, algebra]

8.1 Uniform continuity on the countable set $\mathcal F_0$ is a measurable path event: for each integer $m$, the condition that some positive rational radius makes every coordinate increment below $1/m$ for pairs in $\mathcal F_0$ closer than that radius is a countable union and intersection of measurable coordinate events. By step 6.1 this event has probability one. On it use the extension from step 7.1, and define the function to be zero off it. The resulting map is a Borel random element of $C(T,\mathbb R)$: evaluations at the countable dense set $\mathcal F_0$ are measurable, and for continuous functions the supremum distance is the supremum over $\mathcal F_0$, so preimages of open balls are measurable; separability makes every open set a countable union of such balls. By [F9], $C(T,\mathbb R)$ is complete and separable; [F10] makes it Polish and its Gaussian law tight. For any finite list $f_1,\ldots,f_m\in\mathcal F$, choose pointwise approximants $f_{i,k}\in\mathcal F_0$ for each $i$. By [F7], $\|f_{i,k}-f_i\|_{P,2}\to0$. Fix coefficients $c_1,\ldots,c_m$ and put $S_k=\sum_i c_i\mathbb G_0(f_{i,k})$ and $S=\sum_i c_i\overline G_0([f_i])$. Step 7.1 gives $S_k\to S$ almost surely. Each $S_k$ is centered normal with variance $\sigma_k^2\to\sigma^2=\sum_{i,j}c_ic_jK(f_i,f_j)=P[\sum_i c_i(f_i-Pf_i)]^2\ge0$. Dominated convergence [F7] applied to $e^{itS_k}$, whose modulus is one, gives convergence of characteristic functions. By [F12], the limit is $e^{-t^2\sigma^2/2}$ and determines the centered normal law of variance $\sigma^2$. Every linear combination of the limiting vector is therefore centered normal; [F3] identifies that vector as multivariate normal with covariance $(K(f_i,f_j))$. This proves that the pathwise extension has the required Gaussian finite-dimensional laws. Define $R:C(T,\mathbb R)\to\ell^\infty(\mathcal F)$ by $R(z)(f)=z([f])$, where $[f]$ is the image of $f$ in the metric quotient and its completion. Since these images are dense in $T$ and $z-w$ is continuous, $\|R(z)-R(w)\|_{\mathcal F}=\sup_{f\in\mathcal F}|z([f])-w([f])|=\sup_{t\in T}|z(t)-w(t)|$, so $R$ is an isometry and is continuous. Its pushforward of the tight Borel law on $C(T,\mathbb R)$ is a tight Borel Gaussian bridge on $\ell^\infty(\mathcal F)$. [A1, A2, L3, F3, F7, F9, F10, F12, step 3.1, step 6.1, step 7.1]

9.1 Fix any finite $f_1,\ldots,f_m\in\mathcal F$. The vectors $(f_1(X_i)-Pf_1,\ldots,f_m(X_i)-Pf_m)$ are iid and have finite second moments, bounded in squared norm by $2m(F(X_i)^2+(PF)^2)$ almost surely. [F2] gives convergence of their normalized sums to $N_m(0,(K(f_a,f_b))_{a,b})$, the corresponding finite-dimensional law of the Gaussian bridge from step 8.1. This proves finite-dimensional convergence, with the asymptotic-distribution convention of [F1]. [F1, F2, L3, given, step 8.1]

10.1 By [F6], the empirical processes are asymptotically equicontinuous in $\rho_P$. For each $\epsilon>0$, the totally bounded quotient from step 1.2 has a finite $\epsilon/2$-net with centers in the dense subset $\mathcal F_0$; density then makes it an $\epsilon$-net for all of $\mathcal F$. List its finitely many centers and assign to each $f$ the first center within distance $\epsilon$, obtaining $\pi_\epsilon(f)$. Define $\mathbb G_{n,\epsilon}(f)=\mathbb G_n(\pi_\epsilon(f))$ and $\mathbb G_{\epsilon}(f)=\mathbb G_P(\pi_\epsilon(f))$. Their ranges lie in a finite-dimensional subspace of $\ell^\infty(\mathcal F)$; the linear map from the selected coordinate vector to that subspace is continuous in the supremum norm. Thus the finite-dimensional convergence in step 9.1, tested after composition with any bounded continuous functional, gives $\mathbb G_{n,\epsilon}\Rightarrow\mathbb G_\epsilon$ for each fixed $\epsilon$. [A1, F6, step 1.2, step 9.1, construct]

11.1 The sup-norm error $\|\mathbb G_n-\mathbb G_{n,\epsilon}\|_{\mathcal F}$ is bounded by the empirical-process modulus over pairs at $\rho_P$-distance at most $\epsilon$; it is therefore bounded by the modulus at radius $2\epsilon$ in [F6], which tends to zero in outer probability as $\epsilon\downarrow0$. Uniform continuity of the Gaussian paths gives $\|\mathbb G_P-\mathbb G_\epsilon\|_{\mathcal F}\to0$ almost surely. For bounded uniformly continuous $H$, put $\omega_H(r)=\sup_{\|x-y\|_{\mathcal F}\le r}|H(x)-H(y)|$, which tends to zero as $r\downarrow0$. If $Z,Z'$ are random elements and $P^*(\|Z-Z'\|>r)=p$, a measurable event of probability arbitrarily close to $p$ covers the exceptional set; outside it $|H(Z)-H(Z')|\le\omega_H(r)$, and everywhere the difference is at most $2\|H\|_\infty$. This gives $|E^*H(Z)-E^*H(Z')|\le\omega_H(r)+2\|H\|_\infty p$ by measurable majorants. Use the three-term bound $|E^*H(\mathbb G_n)-EH(\mathbb G_P)|\le|E^*H(\mathbb G_n)-E^*H(\mathbb G_{n,\epsilon})|+|EH(\mathbb G_{n,\epsilon})-EH(\mathbb G_\epsilon)|+|EH(\mathbb G_\epsilon)-EH(\mathbb G_P)|.$ For fixed $\epsilon$ the middle term tends to zero by step 10.1; then letting $\epsilon\downarrow0$ makes the other two terms vanish by the outer-probability approximation bound and $\omega_H(r)\to0$. This is the outer weak convergence in [[def-donsker-class-and-asymptotic-equicontinuity]], with the tight Gaussian bridge from step 8.1. AC is used in [F2], [F4], [F10], and the countable-choice completion in [F8]; no finite-dimensional limit is used as a substitute for the process-level equicontinuity step. [A1, F2, F4, F5, F6, F8, F9, F10, step 8.1, step 9.1, step 10.1, algebra] ∎
