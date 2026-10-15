---
id: thm-likelihood-contributions-under-censoring-and-delayed-entry
kind: theorem
title: Likelihood contributions under censoring, truncation, and delayed entry
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-event-time-observation-schemes
  - def-statistical-experiment
  - def-scientific-statistical-model-contract
  - def-parametric-statistical-model
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-standard-borel-space
  - def-law-or-distribution-of-a-random-element
  - def-measure-kernel-and-probability-kernel
  - def-conditional-law-given-a-random-element
  - thm-existence-of-regular-conditional-distributions-for-standard-borel-targets
  - lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable
  - def-conditional-independence-given-a-sigma-algebra
  - thm-rationals-countable
  - thm-product-of-countable
  - thm-seven-generators-of-the-borel-sigma-algebra-on-r
  - thm-dynkin-pi-lambda
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-distribution-function-of-a-borel-measure-on-r
  - thm-lebesgue-stieltjes-correspondence-with-distribution-functions
  - thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures
  - def-axiom-of-choice
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
proof_strategy: direct
sources:
  references:
    - title: "Qiqing Yu, Survival Analysis (Lecture Notes), §§1.1–1.3, 1.5, 1.7–1.8 and 2.1–2.2, PDF pp. 1–11"
      url: "https://people.math.binghamton.edu/qyu/ftp/surv5.pdf"
    - title: "Lu Tian, STAT331 Unit 2: Likelihood Construction, Inference for Parametric Survival Distributions, §§2.1–2.2, PDF pp. 1–17"
      url: "https://web.stanford.edu/~lutian/coursepdf/unit2.pdf"
    - title: "Jeff Lin, NTPU, Chapter 2: Survival Function, Censoring and Truncation, likelihood construction slides 92–110"
      url: "https://web.ntpu.edu.tw/~stou/class/tku/07EN02SurvBasicPPT.pdf"
---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice. Let $Z,T,C$ be random elements, with $Z$ taking values in a standard-Borel space ([[def-standard-borel-space]]) and $T,C$ taking values in $[0,\infty)$ with its Borel sigma-algebra. Consider the conditional experiment given the observed covariate $Z=z$. For each $(\theta,\eta)$ in a product parameter space $\Theta\times H$, let $K^T_\theta(z,\cdot)$ and $K^C_\eta(z,\cdot)$ be the specified conditional event-time and censor-time laws. Assume $T\perp\!\!\!\perp C\mid\sigma(Z)$ under each parameter pair. Assume $K^T_\theta(z,dt)=f_\theta(t\mid z)\,dt$ with a jointly measurable density in $(z,t)$, and that every $K^C_\eta(z,\cdot)$ is dominated by one fixed sigma-finite measure $\nu$ with a jointly measurable density $g_\eta(z,c)$. The event law depends only on $\theta$ and the censor law only on $\eta$. All displayed conditional identities hold for $P_{Z;\theta,\eta}$-almost every $z$ under each fixed parameter pair $(\theta,\eta)$, where $P_{Z;\theta,\eta}$ is the marginal law of $Z$ under that pair as in [[def-law-or-distribution-of-a-random-element]]. All density equalities are in their almost-everywhere versions for that pair; no common exceptional set over an uncountable parameter set is asserted.

For right-censored data $(U,\delta)$, define the reference measure $\rho$ on $[0,\infty)\times\{0,1\}$ by $\rho(B\times\{1\})=\operatorname{Leb}(B)$ and $\rho(B\times\{0\})=\nu(B)$. Put $S_\theta(u\mid z)=K^T_\theta(z,(u,\infty))$ and $G_\eta(u\mid z)=K^C_\eta(z,[u,\infty))$. In the scientific model contract of [[def-scientific-statistical-model-contract]], one analysis unit is one subject; the full-data random quantities are $T,C$, and the observation map records $(Z,U,\delta)=(Z,\min(T,C),1\{T\le C\})$, so the record contains the minimum and status rather than both full times. This theorem conditions on observed $Z$ and asserts no target-population estimand or empirical adequacy. The conditional density of $(U,\delta)$ with respect to $\rho$ is

$$h_{\theta,\eta}(u,1\mid z)=f_\theta(u\mid z)G_\eta(u\mid z),\qquad h_{\theta,\eta}(u,0\mid z)=S_\theta(u\mid z)g_\eta(z,u).$$

Consequently, up to the censor-only factor, the event-model likelihood contribution is $f_\theta(U\mid Z)^\delta S_\theta(U\mid Z)^{1-\delta}$, where the two cases mean $f_\theta(U\mid Z)$ when $\delta=1$ and $S_\theta(U\mid Z)$ when $\delta=0$. This is a conditional likelihood given $Z$; a parameter-dependent marginal law of $Z$ would supply a separate factor.

For an arbitrary conditional event-time law $\mu_{\theta,z}$ on $[0,\infty)$ with distribution function $F_\theta(t\mid z)=\mu_{\theta,z}((-\infty,t])$, for $0\le L\le R<\infty$,

$$P(L<T\le R\mid Z=z)=F_\theta(R\mid z)-F_\theta(L\mid z),\qquad P(T\le L\mid Z=z)=F_\theta(L\mid z),$$

and $P(T=t\mid Z=z)=F_\theta(t\mid z)-F_\theta(t^-\mid z)$. For fixed inspection endpoints, or endpoints conditionally independent of $T$ given $Z$ under a law with no event parameter $\theta$, these are the event factors for interval and left-censored observations. In current-status observation at a fixed inspection time $c$, the event contribution is $F_\theta(c\mid z)^\delta S_\theta(c\mid z)^{1-\delta}$, with $S_\theta(c\mid z)=P(T>c\mid Z=z)$ and $\delta=1\{T\le c\}$. An informative inspection process requires its own joint model.

For delayed entry at $L$, let $W$ denote all pre-entry covariates; take $Z=W$ when $L$ is fixed by design and $Z=(W,L)$ when random $L$ is observed. In the random-entry case, assume that before selection the conditional joint law of $(T,L)$ given $W=w$ factors as $K^T_\theta(w,dt)Q_\eta(w,d\ell)$, where the entry kernel $Q_\eta$ does not depend on the event parameter $\theta$. Thus $L\perp\!\!\!\perp T\mid W$ under this parameter-distinct entry model, and the event law given $Z=(W,L)$ remains $K^T_\theta(W,\cdot)$. For each parameter pair, require $S_\theta(L\mid W)>0$ for almost every $(W,L)$ under its pre-selection law, select only units with $T>L$, and assume post-entry right censoring satisfies $T\perp\!\!\!\perp C\mid\sigma(Z)$ with $C\ge L$. Conditional on inclusion $T>L$, the event density and survivor terms are $f_\theta(u\mid W)/S_\theta(L\mid W)$ for an event and $S_\theta(u\mid W)/S_\theta(L\mid W)$ for censoring, for $u>L$. Thus the right-censored event contribution is divided by $S_\theta(L\mid W)$. An event branch has $u>L$, while a censoring branch may have $u=L$ when the censoring law has an atom at entry; the survivor ratio $S_\theta(u\mid W)/S_\theta(L\mid W)$ applies for every $u\ge L$.

For right truncation at fixed $R$, or at an observed threshold conditionally independent of $T$ given $Z$ under a law with no event parameter $\theta$, inclusion is conditional on $T<R$ with $P(T<R\mid Z=z)>0$. Its conditional event-time law is $\mu_{\theta,z}(A\cap(-\infty,R))/P(T<R\mid Z=z)$; in the continuous-density case the selected-sample density is $f_\theta(t\mid z)/F_\theta(R^-\mid z)$ for $t<R$. This selection likelihood is distinct from the right-censoring likelihood. Independence of censoring, inspection, or entry is a model assumption, not a theorem about an empirical study.

## Facts & Assumptions

**Given:** The standard-Borel conditional event and censoring model, the stated product parameter space and domination, and either the right-censoring observation $(U,\delta)$, a fixed/noninformative interval or current-status observation, delayed entry, or right-truncation selection described in the Statement.

[F1] The observation schemes and endpoint conventions are defined as above; in particular $U=\min(T,C)$, $\delta=1\{T\le C\}$, and delayed entry selects only $T>L$. [[def-event-time-observation-schemes]]

[F2] A statistical experiment is a measurable sample space and a family of sampling probability laws; its parametric model is the parameter-to-law map. [[def-statistical-experiment]], [[def-parametric-statistical-model]]

[F10] A scientific statistical model contract records the observation space and record, unit/index roles, target, observation mechanism, support/law, conditioning convention, and status of adequacy assumptions; it proves no empirical applicability. [[def-scientific-statistical-model-contract]]

[F3] Domination uses one fixed sigma-finite measure for every law, and a likelihood density is a selected Radon–Nikodym representative evaluated at fixed data; its value is only defined up to the corresponding null sets. [[def-dominated-statistical-experiment]], [[def-likelihood-density]]

[F4] The law of a random element is its pushforward probability; a conditional law given a random element is a probability kernel whose composition with that element is a regular conditional distribution. [[def-law-or-distribution-of-a-random-element]], [[def-measure-kernel-and-probability-kernel]], [[def-conditional-law-given-a-random-element]]

[F5] Under AC a standard-Borel target has an RCD, and with a standard-Borel conditioning variable the RCD factors through that variable as a kernel. [[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]], [[lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable]]

[F6] Conditional independence means the bounded conditional-product identity. [[def-conditional-independence-given-a-sigma-algebra]]

[F7] The rationals are countable, rational rays generate the Borel sigma-algebra, finite products of countable sets are countable, and equality on a generating pi-system extends to the generated sigma-algebra. [[thm-rationals-countable]], [[thm-seven-generators-of-the-borel-sigma-algebra-on-r]], [[thm-product-of-countable]], [[thm-dynkin-pi-lambda]]

[F8] The product of sigma-finite measures exists with the rectangle formula, and Tonelli integrates nonnegative product-measurable functions in either order. [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F9] A real Borel measure finite on compact sets has its distribution function/measure increments $F(b)-F(a)=\mu((a,b])$; under Countable Choice, $\mu(\{a\})=F(a)-F(a^-)$. [[def-distribution-function-of-a-borel-measure-on-r]], [[thm-lebesgue-stieltjes-correspondence-with-distribution-functions]], [[thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]]

[A1] AC is used for the regular conditional versions/factorization and the inherited likelihood-density convention. [[def-axiom-of-choice]]

[A2] Countable Choice is used for the Lebesgue–Stieltjes correspondence and atom formula in [F9]. [[def-countable-choice]]

## Proof

**Proof technique:** direct.

1.1 For fixed $(\theta,\eta)$, $[0,\infty)$ is closed in $\mathbb R$, and the max metric makes $[0,\infty)^2$ complete: a Cauchy sequence is Cauchy in each real coordinate, converges by completeness of $\mathbb R$, and its coordinate limits remain nonnegative. For $0\le x<y$, the Borel ray $(x,\infty)$ separates $x$ and $y$, so the rational-ray generators in [F7] include some $(q,\infty)$ that separates them, giving $x\le q<y$. Taking $y=x+\varepsilon$ gives rational approximations from above; applying this to both coordinates shows the countable set $(\mathbb Q\cap[0,\infty))^2$ is dense, with countability from [F7]. Thus $[0,\infty)$ and its square are Polish and standard Borel. By [F5] and [A1], take conditional-law kernels for $T$, $C$, and $(T,C)$ given $Z$. For each pair of rational half-lines $A,B$, [F6] applied to their indicators and the conditional-law identities in [F4] give $K_{T,C}(Z,A\times B)=K_T(Z,A)K_C(Z,B)$ almost surely. [given, F4, F5, F6, F7, A1]

1.2 If $L=R$, then $(L,R]$ is empty and both its probability and $F_\theta(R\mid z)-F_\theta(L\mid z)$ are zero. If $L<R$, the conditional event law is a Borel probability, hence finite on compact sets, and [F9] gives $\mu_{\theta,z}((L,R])=F_\theta(R\mid z)-F_\theta(L\mid z)$. The singleton formula in [F9] gives $\mu_{\theta,z}(\{t\})=F_\theta(t\mid z)-F_\theta(t^-\mid z)$. [given, F9, A2]

1.3 By the definition of $F_\theta$, $P(T\le L\mid z)=F_\theta(L\mid z)$ and $P(T>c\mid z)=S_\theta(c\mid z)=1-F_\theta(c\mid z)$. Splitting the two values of $\delta=1\{T\le c\}$ gives the current-status contribution. For random inspection endpoints conditionally independent of $T$ given $Z$, conditioning on the endpoints leaves these event probabilities unchanged, and their law has no $\theta$ factor. [given, F1, F9]

1.4 Since $T\ge0$ and the selected probability is positive, $R>0$. The open-right interval formula in [F9] gives $P(T<R\mid z)=F_\theta(R^-\mid z)$. Conditioning the event law on $T<R$ divides its restriction to $(-\infty,R)$ by this positive probability; for an observed threshold independent of $T$ given $Z$, the same conditional law applies given the threshold. When the original law has density, the selected density is $f_\theta(t\mid z)/F_\theta(R^-\mid z)$ for $t<R$. This uses a selection normalization and has no right-censor factor. [given, F1, F9, A2]

1.5 For $u\ge0$, put $a_n(u)=2^{-n}\lceil2^nu\rceil$ and $b_n(u)=2^{-n}\lfloor2^nu\rfloor$. For each $n$, the maps $(z,u)\mapsto K^T_\theta(z,(a_n(u),\infty))$ and $(z,u)\mapsto K^C_\eta(z,[b_n(u),\infty))$ are measurable: the threshold maps are countably valued Borel functions and each fixed rational-ray evaluation is measurable in $z$ by [F4]. As $a_n(u)\downarrow u$, the first ray sets increase to $(u,\infty)$; as $b_n(u)\uparrow u$, the second ray sets decrease to $[u,\infty)$. Countable additivity gives continuity from below and, for these probability sections, from above. Thus the maps converge pointwise to $S_\theta(u\mid z)$ and $G_\eta(u\mid z)$, so both tails are jointly measurable. [given, F4, algebra]

2.1 The rational rectangles form a countable pi-system generating the product Borel sigma-algebra by [F7]. Removing the countable union of their exceptional null sets makes the equality in step 1.1 simultaneous on this pi-system. The product measure exists by [F8], so [F7] gives $K_{T,C}(z,\cdot)=K_T(z,\cdot)\otimes K_C(z,\cdot)$ for almost every $z$. [step 1.1, F7, F8]

3.1 Under this product law, for every Borel $B\subseteq[0,\infty)$, Tonelli and the density of $K^T_\theta$ give $P(U\in B,\delta=1\mid z)=\int_B K^C_\eta(z,[t,\infty))f_\theta(t\mid z)\,dt$. Thus the density on the $\delta=1$ branch with respect to Lebesgue measure is $f_\theta(u\mid z)G_\eta(u\mid z)$; it is jointly measurable in $(z,u)$ by step 1.5 and the assumed measurability of $f_\theta$. [given, step 1.5, step 2.1, F1, F8]

3.2 On the $\delta=0$ branch, $T>C$ and $U=C$. Tonelli gives $P(U\in B,\delta=0\mid z)=\int_B K^T_\theta(z,(c,\infty))K^C_\eta(z,dc)=\int_B S_\theta(c\mid z)g_\eta(z,c)\,\nu(dc)$, and the resulting density is jointly measurable by step 1.5 and the assumed measurability of $g_\eta$. [given, step 1.5, step 2.1, F1, F8]

4.1 The two branch measures are dominated by $\rho$, so the displayed functions are their densities. The recorded object is one subject's $(Z,U,\delta)$ and the likelihood is conditional on $Z$, as explicitly declared in [F10]; this bookkeeping adds no scientific truth claim. The parametric experiment and likelihood conventions [F2]–[F3] therefore yield the stated likelihood. Because the parameter space is $\Theta\times H$ and the event and censor laws depend on $\theta$ and $\eta$ separately, the factors $f_\theta^\delta S_\theta^{1-\delta}$ and $G_\eta^\delta g_\eta^{1-\delta}$ separate; only the former depends on $\theta$. [given, step 3.1, step 3.2, F2, F3, F10, A1]

5.1 For fixed entry, the event kernel given the pre-entry covariates $W$ is $K^T_\theta(W,\cdot)$. For random entry, the stated factorization of the pre-entry conditional joint law gives the same event kernel given $Z=(W,L)$ before selection. In either case, conditional on $Z$ and the positive-probability inclusion event $T>L$, the event law assigns a set $A$ probability $K^T_\theta(W,A\cap(L,\infty))/S_\theta(L\mid W)$. Conditional independence of $T$ and $C$ given $Z$ means restricting their product law to $T>L$ leaves this truncated event law and the same censor law as a product. The event density is therefore $f_\theta(u\mid W)/S_\theta(L\mid W)$ for $u>L$, and the conditional survivor is $S_\theta(u\mid W)/S_\theta(L\mid W)$ for every $u\ge L$; at $u=L$ this equals $1$, including when the censoring law has an atom at entry. Applying the branch calculations from steps 3.1–4.1 under that product law yields the asserted denominator, once, in either event-status branch. [given, F1, step 2.1, step 3.1, step 3.2, step 4.1]

6.1 Every factorization above was conditional on the stated independence, domination, endpoint, and positivity assumptions. The calculations give no evidence that a real censoring, inspection, or entry mechanism satisfies them; an informative mechanism requires its own joint law. [given, step 4.1, step 1.3, step 5.1, step 1.4] ∎
