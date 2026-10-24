---
id: thm-plancherel-young-diagrams-converge-to-the-limit-shape
kind: theorem
title: "Plancherel Young diagrams converge to the limit shape"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
proof_strategy: direct
deps: [prop-scaled-plancherel-profile-moments-converge-in-probability, lem-rsk-union-bound-localizes-plancherel-profiles, lem-bounded-lipschitz-profile-moments-control-uniform-distance, def-logan-shepp-vershik-kerov-limit-profile, def-convergence-in-probability, lem-probability-measure-basic-identities, def-plancherel-measure-on-partitions, prop-plancherel-weights-sum-to-one, def-russian-profile-and-sqrt-n-scaling-of-a-young-diagram]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vladimir Ivanov and Grigori Olshanski, Kerov's central limit theorem for the Plancherel measure on Young diagrams, arXiv:math/0304010; survey-paper version in Symmetric Functions 2001, NATO Science Series II 74 (2002), 93-151"
      url: "https://arxiv.org/pdf/math/0304010"
      locator: "Thm. 5.5 and its proof, printed pp. 28-29; Lemma 5.7 (the weak-versus-uniform topology of bounded Lipschitz profiles) with Lemma 5.6 replaced by the local RSK union bound"
---

## Statement

Let $\lambda$ range over $Y_n$ under the Plancherel measure $P_n$ and let $\bar\lambda$ be the $\sqrt n$-scaled Russian profile of [[def-russian-profile-and-sqrt-n-scaling-of-a-young-diagram]]. Then
$$\sup_{x\in\mathbb R}\bigl|\bar\lambda(x)-\Omega(x)\bigr|\longrightarrow0\qquad\text{in probability as }n\to\infty,$$
where $\Omega$ is the limit profile of [[def-logan-shepp-vershik-kerov-limit-profile]].

## Facts & Assumptions

**Given:** the probability space $(Y_n,P_n)$ ([[def-plancherel-measure-on-partitions]], [[prop-plancherel-weights-sum-to-one]]); the profiles $\bar\lambda$ and $\Omega$ and their $\sigma$-functions $\sigma_\omega=\tfrac12(\omega-|x|)$ ([[def-russian-profile-and-sqrt-n-scaling-of-a-young-diagram]], [[def-logan-shepp-vershik-kerov-limit-profile]]); a constant $C>e$.

[F1] For $C>e$ there is $n_0$ such that for all $n\ge n_0$ the event $E_n:=\{\lambda_1\le C\sqrt n\ \text{and}\ \lambda'_1\le C\sqrt n\}$ satisfies $\mathbb P(E_n)\ge1-2(e^2/C^2)^{\lfloor C\sqrt n\rfloor-1}\to1$, and on $E_n$ the function $x\mapsto\bar\lambda(x)-|x|$ is supported in $[-C,C]$ ([[lem-rsk-union-bound-localizes-plancherel-profiles]]).

[F2] Fix $I=[a,b]$ and let $\Sigma_I$ be the set of real functions supported in $I$ with $|\sigma(x)-\sigma(y)|\le|x-y|$. For every $\varepsilon>0$ there are $K\in\mathbb N$ and $\delta>0$ such that every $\sigma\in\Sigma_I$ with $\bigl|\int_{\mathbb R}\sigma(x)x^k\,dx\bigr|\le\delta$ for $k=0,1,\dots,K$ satisfies $\sup_{x\in\mathbb R}|\sigma(x)|\le\varepsilon$ ([[lem-bounded-lipschitz-profile-moments-control-uniform-distance]]).

[F3] Every $\omega\in D_0$ has $\sigma_\omega=\tfrac12(\omega-|x|)$ $1$-Lipschitz; the support of $\sigma_\lambda$ is contained in $[-\lambda'_1,\lambda_1]$, and $\sigma_{\bar\lambda}(x)=n^{-1/2}\sigma_\lambda(n^{1/2}x)$, so $\sigma_{\bar\lambda}$ is supported in $[-\lambda'_1/\sqrt n,\lambda_1/\sqrt n]$ ([[def-russian-profile-and-sqrt-n-scaling-of-a-young-diagram]]); $\Omega\in D_0$ with $\sigma_\Omega$ supported in $[-2,2]$ ([[def-logan-shepp-vershik-kerov-limit-profile]]).

[F4] For every integer $k\ge0$, $\int_{\mathbb R}(\bar\lambda(x)-\Omega(x))x^k\,dx\to0$ in probability as $n\to\infty$ ([[prop-scaled-plancherel-profile-moments-converge-in-probability]]).

[F5] Probability is subadditive, $\mathbb P(\bigcup_jA_j)\le\sum_j\mathbb P(A_j)$ for finitely many events ([[lem-probability-measure-basic-identities]]); convergence in probability means for every $\varepsilon>0$, $\mathbb P(|X_n-X|>\varepsilon)\to0$ ([[def-convergence-in-probability]]).

## Proof

**Proof technique:** direct.

1.1 The test profile: put $I:=[-C,C]$ and $g:=\tfrac12(\sigma_{\bar\lambda}-\sigma_\Omega)=\tfrac14(\bar\lambda-\Omega)$. On $E_n$ the function $\sigma_{\bar\lambda}$ is supported in $[-\lambda'_1/\sqrt n,\lambda_1/\sqrt n]\subseteq I$ by [F1] and [F3], and $\sigma_\Omega$ is supported in $[-2,2]\subseteq I$ because $C>e>2$; hence $g$ is supported in $I$. Moreover by [F3] both $\sigma_{\bar\lambda}$ and $\sigma_\Omega$ are $1$-Lipschitz, so $|g(x)-g(y)|\le\tfrac12\bigl(|\sigma_{\bar\lambda}(x)-\sigma_{\bar\lambda}(y)|+|\sigma_\Omega(x)-\sigma_\Omega(y)|\bigr)\le|x-y|$; thus $g\in\Sigma_I$ on $E_n$. [given, F1, F3, algebra]

2.1 Deterministic containment: fix $\varepsilon>0$ and apply [F2] with tolerance $\varepsilon/4$ to obtain $K\in\mathbb N$ and $\delta>0$ such that $\sigma\in\Sigma_I$ and $\bigl|\int\sigma x^k\bigr|\le\delta$ for $k=0,\dots,K$ imply $\sup|\sigma|\le\varepsilon/4$. On $E_n$, if $\sup_x|\bar\lambda-\Omega|>\varepsilon$ then $\sup|g|=\tfrac14\sup|\bar\lambda-\Omega|>\varepsilon/4$, so by the contrapositive of the lemma there is $k\in\{0,\dots,K\}$ with $\bigl|\int gx^k\bigr|>\delta$, that is, $\bigl|\int(\bar\lambda-\Omega)x^k\bigr|>4\delta$ because $g=\tfrac14(\bar\lambda-\Omega)$; hence on $E_n$ the event $\{\sup_x|\bar\lambda-\Omega|>\varepsilon\}$ is contained in $\bigcup_{k=0}^K\{|\int_{\mathbb R}(\bar\lambda-\Omega)x^k\,dx|>4\delta\}$, and consequently $\{\sup_x|\bar\lambda-\Omega|>\varepsilon\}\subseteq E_n^c\cup\bigcup_{k=0}^K\{|\int_{\mathbb R}(\bar\lambda-\Omega)x^k\,dx|>4\delta\}$. [given, F2, step 1.1, algebra]

3.1 Probability bound: by [F5] and step 2.1, $\mathbb P\bigl(\sup_x|\bar\lambda-\Omega|>\varepsilon\bigr)\le\mathbb P(E_n^c)+\sum_{k=0}^{K}\mathbb P\bigl(\bigl|\int(\bar\lambda-\Omega)x^k\bigr|>4\delta\bigr)$. Here $\mathbb P(E_n^c)\le2(e^2/C^2)^{\lfloor C\sqrt n\rfloor-1}\to0$ by [F1], and each of the finitely many terms tends to $0$ by [F4] and the definition of convergence in probability in [F5]. Hence $\mathbb P\bigl(\sup_x|\bar\lambda-\Omega|>\varepsilon\bigr)\to0$; since $\varepsilon>0$ was arbitrary, $\sup_x|\bar\lambda-\Omega|\to0$ in probability. [given, F1, F4, F5, step 2.1, algebra] ∎ 