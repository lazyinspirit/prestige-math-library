---
id: lem-hellinger-ratio-controls-kl-moments
kind: lemma
title: "A bounded likelihood ratio controls KL and log-square moments by Hellinger distance"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-hellinger-distance-between-density-laws
  - def-kullback-leibler-divergence
  - def-axiom-of-choice
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Posterior convergence rates of Dirichlet mixtures at smooth densities, Lemma 8"
      url: "https://arxiv.org/pdf/0708.1885"
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Fundamentals of Nonparametric Bayesian Inference, Lemma 6.13"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/bayesianstatistics"
---

## Statement

Let $p,q$ be probability densities relative to one measure $\mu$, assume
$p\,d\mu\ll q\,d\mu$, let
$h^2:=\int(\sqrt p-\sqrt q)^2d\mu$, and suppose
$R:=\operatorname*{ess,sup}_{q\,d\mu}(p/q)<\infty$, with $p/q=0$ on
$\{q=0,p=0\}$. Then $p\ll q$ and for a universal constant $C$,
$$\mathrm{KL}(p\,d\mu\Vert q\,d\mu)\le C h^2(1+\log^+R),\qquad \int p\left[\log(p/q)\right]^2d\mu\le C h^2(1+\log^+R)^2.$$
The logarithm is assigned value zero on $\{p=0\}$; the moment integrand is
also set to zero there.

## Facts & Assumptions

**Given:** Two probability densities $p,q$ relative to one measure, $p\,d\mu\ll q\,d\mu$, and finite $R$ as in the Statement.

[A1] Assume AC for the library directional KL convention. [[def-axiom-of-choice]] [[def-kullback-leibler-divergence]]

[F1] [[def-hellinger-distance-between-density-laws]]: $h^2=\int(\sqrt p-\sqrt q)^2d\mu$.

[F2] [[def-kullback-leibler-divergence]]: when $p\,d\mu\ll q\,d\mu$, the directional KL divergence is the integral of $\log(p/q)$ against $p\,d\mu$.

[F3] [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], and [[thm-logarithm-derivative-and-integral]]: $\log$ is continuous on $(0,\infty)$, $\log'(x)=1/x$, and $\log x=\int_1^x dt/t$.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Put $u=p/q$ on $\{q>0\}$. The absolute-continuity premise gives $p=0$ $\mu$-almost everywhere on $\{q=0\}$. Define $g(u)=(\sqrt u-1)^2$ and $a(u)=(u\log u-u+1)/g(u)$, $b(u)=u(\log u)^2/g(u)$ for $u\ne1$, with their limiting values at $u=1$ and $u=0$. At zero, set $s=1/u$; for $s\ge1$, [F3] gives $0\le\log s\le\int_1^s t^{-3/4}dt\le4s^{1/4}$. Hence $u\log u=-(\log s)/s\to0$ and $u(\log u)^2=(\log s)^2/s\le16s^{-1/2}\to0$, so $a(0)=1$ and $b(0)=0$. At one, $\log u/(u-1)\to1$ by [F3], $g(u)/(u-1)^2=1/(\sqrt u+1)^2\to1/4$, and $u(\log u)^2/(u-1)^2\to1$. Also $u\log u-u+1=\int_1^u\log t\,dt$, so $[u\log u-u+1]/(u-1)^2\to1/2$; therefore $a(1)=2$ and $b(1)=4$. Thus $a,b$ are continuous on $[0,2]$ and bounded there. [A1, F3, given, algebra]

2.1 For $u\ge2$, $g(u)=u(1-u^{-1/2})^2\ge u(1-2^{-1/2})^2$, while $0\le u\log u-u+1\le u\log u$ and $u(\log u)^2$ retain their displayed forms. Hence $a(u)\le C\log u$ and $b(u)\le C(\log u)^2$ for a universal $C$. Combining with step 1.1, for every $0\le u\le R$, $u\log u-u+1\le Cg(u)(1+\log^+R),\qquad u(\log u)^2\le Cg(u)(1+\log^+R)^2.$ [F3, step 1.1, algebra]

3.1 Integrating the first inequality in step 2.1 against $q\,d\mu$ gives the KL bound, since $\int q(u\log u-u+1)d\mu=\int p\log(p/q)d\mu$ by $\int p=\int q=1$ and [F2]. Integrating the second gives the log-square bound. Finally $\int qg\,d\mu=h^2$ by [F1], so both right sides have the claimed factors of $h^2$. [A1, F1, F2, step 2.1, algebra] ∎
