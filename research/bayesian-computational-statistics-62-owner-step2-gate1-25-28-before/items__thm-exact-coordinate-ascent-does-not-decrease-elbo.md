---
id: thm-exact-coordinate-ascent-does-not-decrease-elbo
kind: theorem
title: "Exact coordinate updates are monotone and finite sweeps have a call bound"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - alg-coordinate-ascent-variational-inference
  - def-axiom-of-choice
  - def-kullback-leibler-divergence
  - def-variational-family-and-elbo
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-integration-against-a-density
  - thm-kullback-leibler-is-nonnegative
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
axiom_use: "AC is used only for the library KL definition and the BCS-20 KL nonnegativity theorem. The product-integral and factor-entropy arguments are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David M. Blei, Alp Kucukelbir, and Jon D. McAuliffe, Variational Inference: A Review for Statisticians (2017)"
      url: "https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2017.pdf"
      locator: "§2.4, equations (17)–(18), PDF pp. 5–6"
    - title: "Michael I. Jordan, Zoubin Ghahramani, Tommi S. Jaakkola, and Lawrence K. Saul, An Introduction to Variational Methods for Graphical Models (1999)"
      url: "https://people.eecs.berkeley.edu/~jordan/papers/variational-intro.pdf"
      locator: "§6.3, printed pp. 217–220, PDF pp. 35–38"
---

## Statement

Assume AC and the hypotheses of [[alg-coordinate-ascent-variational-inference]]. At a coordinate $j$, suppose the conditional expectation $h_j$ has the stated finite-valued version, $0<c_j=\int e^{h_j}d\mu_j<\infty$, and $q_j^*q_{-j}$ is admissible. Then $q_j^*=e^{h_j}/c_j$ attains the maximum of $\operatorname{ELBO}(r_jq_{-j})$ over all admissible coordinate replacements $r_j$. In particular, replacing the current factor by $q_j^*$ does not decrease the ELBO. This is a single-update claim; it gives no convergence or global-optimum conclusion.

For the finite-sweep procedure with finite inputs $m\ge1$ and $N\ge0$, count one call whenever a coordinate-update block is entered, treating evaluation of its integrals and admissibility decision as part of that call. If each entered call returns either an update or the unavailable status, the procedure halts after at most $Nm$ calls, hence has $O(Nm)$ update-call complexity in this model. This is not a bound on the work required to evaluate an integral or decide admissibility.

## Facts & Assumptions

**Given:** A finite product of sigma-finite reference spaces, a measurable $\gamma\ge0$ with finite positive normalizer, an admissible mean-field product, a coordinate $j$, and the normalizer and admissibility conditions in the Statement. Assume AC for the library KL clause.

[A2] For the call-count claim, each entered coordinate-update block returns either an accepted update or the unavailable status, and one such block is the unit of cost; its internal integral calculations are not separately costed.

[F1] [[def-variational-family-and-elbo]]: admissibility requires $q=0$ $\mu$-a.e. on $\{\pi=0\}$ and $\int q(|\log\gamma|+|\log q|)d\mu<\infty$.

[F2] [[def-variational-family-and-elbo]]: $\operatorname{ELBO}(q)=\int q(\log\gamma-\log q)d\mu$.

[F3] [[alg-coordinate-ascent-variational-inference]]: $h_j=\int q_{-j}\log\gamma\,d\mu_{-j}$, $q_j^*=e^{h_j}/c_j$, and the update is made only when the normalizer and resulting-admissibility checks pass.

[F4] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: the finite product reference measure exists, has the rectangle formula, and is unique.

[F5] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative product-measurable functions have measurable section integrals and equal iterated integrals.

[F6] [[thm-integration-against-a-density]]: integrating a nonnegative function against a density measure $f\,d\mu$ equals integrating its product with $f$ against $\mu$.

[F7] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: for an absolutely integrable function on the sigma-finite product, almost-everywhere section integrals exist and the iterated integrals agree.

[F8] [[def-kullback-leibler-divergence]]: for probability measures $P\ll R$, under AC, $D(P\|R)=\int\log(dP/dR)dP$ in this direction.

[F9] [[thm-kullback-leibler-is-nonnegative]]: for probability measures $P,R$ under AC, $D(P\|R)\ge0$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. AC is used only through [F8] and [F9].

## Proof

**Given:** The hypotheses in the Statement.

1.1 Fix any admissible replacement $r_j$ and form $u=r_jq_{-j}$. Tonelli [F5] gives $\int u\,d\mu=1$, and the product rectangle formula [F4] gives $\mathbb P_u:=u\mu=\bigotimes_{k=1}^m(u_k\mu_k)$ is the product probability. Each coordinate density $u_k$ is positive and finite almost surely under its factor law; put $X_k=\log u_k(Z_k)$ and $S=\log u(Z)=\sum_{k=1}^mX_k$. By [F1], $\mathbb E_u|S|=\int u|\log u|d\mu<\infty$. Fix $j$ and put $R=\sum_{k\ne j}X_k$, which is finite almost surely under the product of the other factor laws. Since $\{|R|\le n\}$ increases to a full-measure set, choose an integer $K$ for which $p:=\mathbb P_u(|R|\le K)>0$. Product integration from [F5] and [F6] then gives $p\int u_j|\log u_j|d\mu_j=\int_{\{|R|\le K\}}|X_j|\,d\mathbb P_u\le\int|S|d\mathbb P_u+Kp<\infty$, using $|X_j|\le|S|+|R|$ on that event. Thus every factor log is integrable; the same argument applies to the current factor and to $q_j^*$ because their products are admissible. [F1, F4, F5, F6, choose, construct, algebra]

2.1 For each admissible replacement $u_j$, [F1] makes $u\log\gamma$ absolutely integrable. Fubini [F7] applies also to $u|\log\gamma|$, so $\int u_j|h_j|d\mu_j<\infty$ and exchanging the $j$ and $-j$ integrals gives $\int u\log\gamma d\mu=\int u_jh_jd\mu_j$. By step 1.1, all factor log terms are integrable, so $\log u=\log u_j+\log q_{-j}$ almost surely and $\operatorname{ELBO}(u_jq_{-j})=\int u_jh_jd\mu_j-\int u_j\log u_jd\mu_j-\int q_{-j}\log q_{-j}d\mu_{-j}$. The final term is constant over coordinate replacements. [F1, F2, F3, F7, step 1.1, algebra]

3.1 Write $q_j^*=e^{h_j}/c_j$. If $q_j^*=0$, then $h_j=-\infty$ almost everywhere on that set. For any admissible $r_j$, step 2.1 makes $\int r_j|h_j|d\mu_j<\infty$, hence $r_j=0$ almost everywhere there. Thus $r_j\mu_j\ll q_j^*\mu_j$. On $\{q_j^*>0\}$ the ratio $r_j/q_j^*$ is measurable, and for every measurable $A$, $\int_A(r_j/q_j^*)d(q_j^*\mu_j)=\int_{A\cap\{q_j^*>0\}}r_jd\mu_j=\int_Ar_jd\mu_j$, so it is the Radon–Nikodym density. [F1, F3, step 2.1, algebra]

3.2 By [A1] and [F8], $D(r_j\mu_j\|q_j^*\mu_j)=\int r_j\log(r_j/q_j^*)d\mu_j=\int r_j\log r_jd\mu_j-\int r_jh_jd\mu_j+\log c_j$. All terms are finite by step 1.1 and step 2.1. Also $\int q_j^*h_j-\int q_j^*\log q_j^*=\log c_j$. Subtracting the ELBO expressions in step 2.1 therefore gives $\operatorname{ELBO}(q_j^*q_{-j})-\operatorname{ELBO}(r_jq_{-j})=D(r_j\mu_j\|q_j^*\mu_j)\ge0$ by [F9]. Hence $q_j^*$ is an attained exact coordinate maximizer. [A1, F8, F9, step 1.1, step 2.1, algebra]

4.1 The current factor $q_j$ is itself an admissible replacement. Taking $r_j=q_j$ in step 3.2 proves that the update does not decrease ELBO. [step 3.2, given]

5.1 By [F3], the procedure has at most $N$ sweeps and at most $m$ coordinate-update blocks in each sweep. An unavailable result returns immediately, so every run is either a prefix ending at that branch or a run through all $N$ sweeps. Since $N$ and $m$ are finite, under [A2] it returns after at most $Nm$ calls. The call-count complexity is therefore $O(Nm)$; no cost for evaluating an individual call is asserted. [F3, A2, algebra] ∎
