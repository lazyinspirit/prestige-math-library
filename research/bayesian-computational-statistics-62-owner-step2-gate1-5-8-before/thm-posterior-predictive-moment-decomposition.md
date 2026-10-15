---
id: thm-posterior-predictive-moment-decomposition
kind: theorem
title: Posterior-predictive mean and variance decomposition
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-posterior-predictive-law
  - thm-posterior-predictive-mixture-is-a-kernel
  - def-moments-variance-and-covariance
  - def-measure-kernel-and-probability-kernel
  - def-regular-conditional-distribution
  - def-conditional-expectation-given-a-sigma-algebra
  - thm-conditional-integration-through-a-regular-conditional-law
  - def-random-element-and-real-random-variable
  - def-axiom-of-choice
  - thm-measurability-of-integration-against-a-kernel
justified_by: []
proof_strategy: direct
axiom_use: "The kernel-moment identities are choice-free; AC is used only for the optional conditional-expectation equivalence-class interpretation inherited from the cited supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §2.5"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 8 §8.3"
      url: "https://www.bayesrulesbook.com/chapter-8.html"
---

## Statement

Let $\Pi_y$ be a supplied posterior probability measure on $\Theta$ and $Q_\theta$ a future probability kernel on $\mathbb R$. Put
$$s_2(\theta)=\int_{\mathbb R}z^2\,Q_\theta(dz),$$and assume $\int_\Theta s_2(\theta)\,\Pi_y(d\theta)<\infty$. On the full-measure set $E_y=\{\theta:s_2(\theta)<\infty\}$, define$$\mu(\theta)=\int z\,Q_\theta(dz),\qquad v(\theta)=\operatorname{Var}_{Q_\theta}(Z),$$and set $\mu=v=0$ off $E_y$ when integrating them against $\Pi_y$. Then$$\int z\,Q_y^{\mathrm{pred}}(dz)=\int\mu(\theta)\,\Pi_y(d\theta),$$
$$\operatorname{Var}_{Q_y^{\mathrm{pred}}}(Z)=\int v(\theta)\,\Pi_y(d\theta)+\operatorname{Var}_{\Pi_y}(\mu).$$
These kernel identities are choice-free. For the conditional interpretation, suppose a joint probability space $(\Omega,\mathcal F,P)$ carries measurable random elements $Y$ (data), $X$ (parameter), and $Z$ (future observation). Let $\mathcal G\subseteq\mathcal H\subseteq\mathcal F$ be sub-sigma-algebras such that $Y$ is $\mathcal G$-measurable and $X$ is $\mathcal H$-measurable. Assume $\Pi_{Y}$ is a regular conditional distribution of $X$ given $\mathcal G$ and $Q_X$ is a regular conditional distribution of $Z$ given $\mathcal H$. Thus the future law given the information in $\mathcal H$ is assumed to depend on it through $X$ alone. If $\mathbb E[Z^2]<\infty$, then $Q^{\mathrm{pred}}_Y$ is a regular conditional distribution of $Z$ given $\mathcal G$, and the displayed identities give the corresponding conditional-mean and conditional-variance versions almost surely. Here conditional variance means a version of the conditional expectation of the squared deviation from the corresponding conditional-mean version, using [[def-conditional-expectation-given-a-sigma-algebra]]. Identifying those versions with conditional-expectation equivalence classes uses AC, as stated below. Values on null data fibers remain version-dependent.

## Facts & Assumptions

**Given:** A posterior probability measure $\Pi_y$, a future probability kernel $Q_\theta$ on $\mathbb R$, and the finite mixture second moment in the Statement. For the conditional interpretation, also assume the joint-model and global second-moment hypotheses stated there.

[A1] Assume AC only for the optional conditional-expectation-class reading; AC is the assertion that every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] The posterior predictive law is $Q_y^{\mathrm{pred}}(B)=\int Q_\theta(B)\Pi_y(d\theta)$. [[def-posterior-predictive-law]]

[F2] The posterior-predictive mixture integrates every nonnegative measurable future function by iterated integration. [[thm-posterior-predictive-mixture-is-a-kernel]]

[F3] A square-integrable real variable has mean $\mathbb E Z$ and variance $\mathbb E[(Z-\mathbb E Z)^2]$. [[def-moments-variance-and-covariance]]

[F4] Kernel integrals of nonnegative product-measurable functions are measurable, and signed integrals are measurable on their finite-absolute-integral domains. [[thm-measurability-of-integration-against-a-kernel]]

[F5] For a supplied regular conditional distribution, kernel integrals give conditional-expectation versions; the version identity is choice-free, while identifying conditional-expectation classes uses AC. [[thm-conditional-integration-through-a-regular-conditional-law]]

[F6] A regular conditional distribution is a supplied probability kernel satisfying the conditioning-event identities. [[def-regular-conditional-distribution]]

[F7] A random element is a measurable map from a probability space into a measurable space. [[def-random-element-and-real-random-variable]]

[F8] A conditional-expectation version is a measurable integrable function satisfying the integral identity on every event of the conditioning sigma-algebra. [[def-conditional-expectation-given-a-sigma-algebra]]

[F9] A probability kernel has pointwise probability-measure sections and measurable event evaluations. [[def-measure-kernel-and-probability-kernel]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Let $s_2(\theta)=\int z^2Q_\theta(dz)$. It is measurable by [F4]. Since $\int s_2\,d\Pi_y<\infty$, the set $E_y=\{s_2<\infty\}$ is measurable and has $\Pi_y(E_y)=1$. On $E_y$, $|z|\le 1+z^2$ gives a finite first absolute moment, so $\mu(\theta)$ is finite and measurable by [F4]. Expanding the square in the variance definition [F3] gives $v(\theta)=s_2(\theta)-\mu(\theta)^2\ge0$, hence $\mu(\theta)^2\le s_2(\theta)$; therefore $\mu$ is square-integrable under $\Pi_y$ and $v$ is integrable. [given, F3, F4, algebra]

2.1 By [F1], $Q_y^{\mathrm{pred}}$ is the mixture defined from $Q_\theta$ and $\Pi_y$. Apply [F2] to $g(z)=z^2$ to obtain $\int z^2Q_y^{\mathrm{pred}}(dz)=\int s_2\,d\Pi_y<\infty$. Apply [F2] to $|z|$ and use $|z|\le1+z^2$ to see that $Q_y^{\mathrm{pred}}$ has finite first absolute moment. Applying [F2] to the nonnegative positive and negative parts of $z$ and subtracting their finite integrals gives $\int zQ_y^{\mathrm{pred}}(dz)=\int\mu\,d\Pi_y$. [given, F1, F2, step 1.1, algebra]

2.2 For the joint-model hypotheses in the Statement, let $B$ be a measurable future event and $G\in\mathcal G$. The function $\theta\mapsto Q_\theta(B)$ is measurable by [F9]. Apply [F5] to the posterior conditional law and this bounded function to obtain $\int_G Q^{\mathrm{pred}}_Y(B)\,dP=\int_G Q_X(B)\,dP$. Since $G\in\mathcal G\subseteq\mathcal H$, apply [F5] again to the conditional law $Q_X$ to get $\int_G Q_X(B)\,dP=P(G\cap\{Z\in B\})$. By [F2], the mixture has probability-measure sections and measurable evaluations; these event identities therefore make $Q^{\mathrm{pred}}_Y$ a regular conditional distribution of $Z$ given $\mathcal G$ under [F6]. [given, F2, F5, F6, F9]

3.1 On $E_y$, $s_2=v+\mu^2$, and off $E_y$ the set is $\Pi_y$-null. By [F3] and step 2.1, $\operatorname{Var}_{Q_y^{\mathrm{pred}}}(Z)=\int s_2\,d\Pi_y-(\int\mu\,d\Pi_y)^2=\int v\,d\Pi_y+\int\mu^2\,d\Pi_y-(\int\mu\,d\Pi_y)^2=\int v\,d\Pi_y+\operatorname{Var}_{\Pi_y}(\mu)$. This proves both displayed kernel identities without choosing conditional-expectation representatives. [F3, step 1.1, step 2.1, algebra]

4.1 Apply [F5] to $z$ and $z^2$ under $Q_X$. Writing $m:=\mu(X)$ and $s:=s_2(X)$, their conditional-integration identities give $\mathbb E[1_A Z]=\mathbb E[1_A m]$ and $\mathbb E[1_A Z^2]=\mathbb E[1_A s]$ for every $A\in\mathcal H$, and $\mathbb E[s]=\mathbb E[Z^2]<\infty$. Applying [F5] to $s_2$ under $\Pi_Y$ gives a conditional version of $s$ with expectation $\mathbb E[s]$; hence $D:=\{y:\int s_2(\theta)\Pi_y(d\theta)<\infty\}$ has full probability. Take the zero-filled representative $\bar s(Y):=\int s_2(\theta)\Pi_y(d\theta)$ on $D$ and zero elsewhere. Then $\mathbb E[\bar s(Y)]=\mathbb E[s]=\mathbb E[Z^2]<\infty$ and $\Pi_Y(E)=1$ almost surely for $E=\{\theta:s_2(\theta)<\infty\}$. The conditioning identity for $X$ then gives $P(X\in E)=1$. By step 1.1, $m^2\le s$ and $0\le v(X)\le s$ almost surely; hence $m\in L^2$ and $v(X)$ is integrable, with $v(X)=s-m^2$ almost surely. Because $X$ is $\mathcal H$-measurable and these moment functions are measurable, $m,s,v(X)$ are $\mathcal H$-measurable. The first event identity extends from bounded simple $\mathcal H$-measurable multipliers to $1_A m$ by simple approximation and truncation; $2|mZ|\le m^2+Z^2$ and $m^2\in L^1$ justify the limits. Thus $\mathbb E[1_A mZ]=\mathbb E[1_A m^2]$, and expansion gives $\mathbb E[1_A(Z-m)^2]=\mathbb E[1_A(s-m^2)]=\mathbb E[1_Av(X)]$ for every $A\in\mathcal H$. This proves eventwise that $m$ is the conditional-mean version of $Z$ and $v(X)$ is the conditional-variance version given $\mathcal H$. [given, F5, F6, F8, step 1.1]

4.2 On the full-measure data domain where $b(Y):=\int s_2\,d\Pi_Y<\infty$, set $c(Y):=\int\mu\,d\Pi_Y$, $d(Y):=\int\mu^2\,d\Pi_Y$, and $e(Y):=\int v\,d\Pi_Y$, and extend $b,c,d,e$ by zero on its null complement, using the signed zero-filled extension for $c$. By [F5] and the kernel identities in steps 2.1 and 3.1, $c,b$ are conditional first- and second-moment versions of $Z$ given $\mathcal G$, while $c,d,e$ are conditional moments of $m,m^2,v(X)$ given $\mathcal G$. Since $Y$ is $\mathcal G$-measurable, these functions of $Y$ are $\mathcal G$-measurable. Also $\mathbb E[b(Y)]=\mathbb E[Z^2]<\infty$, $c^2\le b$ almost surely since $b-c^2=\operatorname{Var}_{Q^{\mathrm{pred}}_Y}(Z)\ge0$, and $d\le b<\infty$ almost surely since $\mu^2\le s_2$. [given, F3, F5, step 2.1, step 2.2, step 3.1]

4.3 For each $A\in\mathcal G$, the same simple-multiplier and truncation argument as in step 4.1, now applied to $m$ with center $c(Y)$ and to $Z$ with that same center, gives $\mathbb E[1_A(m-c(Y))^2]=\mathbb E[1_A(d-c(Y)^2)]$ and $\mathbb E[1_A(Z-c(Y))^2]=\mathbb E[1_A(b(Y)-c(Y)^2)]$; the bounds $2|c m|\le c^2+m^2$ and $2|cZ|\le c^2+Z^2$ justify the respective truncations. Thus $d-c^2$ and $b-c^2$ are the conditional-variance versions of $m$ and $Z$ given $\mathcal G$. The kernel identity in step 3.1 gives $b-c^2=e+(d-c^2)$, so the conditional variance of $Z$ given $\mathcal G$ is the expected conditional variance given $\mathcal H$ plus the conditional variance of the conditional mean. These event-identity versions are choice-free; under [A1] they may also be read as conditional-expectation equivalence classes by [F5], while [F8] gives the eventwise version convention. No value on a null data fiber is thereby made canonical. [A1, F3, F5, F8, step 3.1, step 4.1, step 4.2] ∎
