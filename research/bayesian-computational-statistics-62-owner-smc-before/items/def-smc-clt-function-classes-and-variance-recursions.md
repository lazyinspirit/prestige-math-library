---
id: def-smc-clt-function-classes-and-variance-recursions
kind: definition
title: "Finite-horizon SMC CLT classes and variance recursions"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-feynman-kac-path-targets-and-normalizers
  - thm-feynman-kac-path-radon-nikodym-weight
  - alg-sequential-importance-resampling
  - alg-multinomial-and-residual-offspring-resampling
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, §§2.1–2.3"
      url: "https://arxiv.org/pdf/math/0508594"
    - title: "Hans R. Künsch, Recursive Monte Carlo Filters: Algorithms and Theoretical Analysis, §4"
      url: "https://arxiv.org/pdf/math/0602211"
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §3.6"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
    - title: "Simo Särkkä and Lennart Svensson, Bayesian Filtering and Smoothing, 2nd ed., Chapter 11"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
axiom_use: "AC is inherited only through the finite-horizon Feynman–Kac path-law and Radon–Nikodym suppliers. The finite-particle conditional limit calculations add no selection axiom."
---

## Definition

Fix a finite horizon $T$. At each $0\le t\le T$, let $\pi_t$ be a probability law on a measurable particle space $\Theta_t$. Let $\widetilde\pi_0$ be an initial proposal with $\pi_0\ll\widetilde\pi_0$, and fix $\upsilon_0=d\pi_0/d\widetilde\pi_0$. For $1\le t\le T$, let $k_t$ be a probability kernel from $\Theta_{t-1}$ to $\Theta_t$, and put
$$\widetilde\pi_t(A)=\int_{\Theta_{t-1}}k_t(x,A)\,\pi_{t-1}(dx).$$
Assume $\pi_t\ll\widetilde\pi_t$ and fix a nonnegative Radon–Nikodym version $\upsilon_t=d\pi_t/d\widetilde\pi_t$, so $\widetilde\pi_t(\upsilon_t)=1$. The BCS-41 sequential importance-resampling algorithm [[alg-sequential-importance-resampling]] is this scheme on path spaces when $k_t$ appends a proposal transition and $\upsilon_t$ is the normalized Feynman–Kac path weight supplied by [[thm-feynman-kac-path-radon-nikodym-weight]].

For a measurable vector function $\phi:\Theta_t\to\mathbb R^d$, write $\mu(\phi)=\int\phi\,d\mu$ and
$$\operatorname{Cov}_{\mu}(\phi)=\int(\phi-\mu(\phi))(\phi-\mu(\phi))^\top\,d\mu,$$
when the second moment is finite. Also write $k_t\phi(x)=\int\phi(z)k_t(x,dz)$ and
$$\operatorname{Cov}_{k_t}(\phi)(x)=\int(\phi(z)-k_t\phi(x))(\phi(z)-k_t\phi(x))^\top k_t(x,dz).$$

The source recursive test classes are
$$\Phi_0^{(d)}=\{\phi:\widetilde\pi_0(\|\phi\|^2)<\infty\},$$
and, for $t\ge1$,
$$\Phi_t^{(d)}=\left\{\phi:\text{ for some }\delta>0,\ \widetilde\pi_t(\|\upsilon_t\phi\|^{2+\delta})<\infty\ \text{ and }\ x\mapsto k_t(\upsilon_t\phi)(x)\in\Phi_{t-1}^{(d)}\right\}.$$
Assume $1\in\Phi_t^{(1)}$ for every $t$. This is the source theorem's explicit normalizing-weight condition. For the recursive post-resampling CLTs proved on this page, use the stronger classes $\Psi_t^{(d)}$. At $t=0$, let $\Psi_0^{(d)}$ consist of the $\phi\in\Phi_0^{(d)}$ for which, for some $\epsilon>0$, $\widetilde\pi_0(\|\upsilon_0(\phi-\pi_0(\phi))\|^{2+\epsilon})<\infty$ and $\pi_0(\|\phi\|^{2+\epsilon})<\infty$. The initial normalizing denominator needs only its finite first moment $\widetilde\pi_0(\upsilon_0)=1$. For $t\ge1$, let $\Psi_t^{(d)}$ consist of the $\phi\in\Phi_t^{(d)}$ for which, for some $\epsilon>0$, $\pi_t(\|\phi\|^{2+\epsilon})<\infty$ and $x\mapsto E_t(\phi-\pi_t(\phi))(x)\in\Psi_{t-1}^{(d)}$. Here $E_t h=k_t(\upsilon_t h)$ is the operator defined below. The recursive target moments supply the offspring variance at every earlier selection used in the induction. The source $\Phi_t$ conditions alone need not imply them. The source condition $1\in\Phi_t$ and these recursive target moments are the stated hypotheses for the CLT induction; no higher initial normalizer moment is required.

Define the mutation covariance operators recursively. At time zero,
$$\widetilde V_0(\phi)=\operatorname{Cov}_{\widetilde\pi_0}(\phi).$$
For $t\ge1$,
$$\widetilde V_t(\phi)=\widehat V_{t-1}(k_t\phi)+\int\operatorname{Cov}_{k_t}(\phi)(x)\,\pi_{t-1}(dx).$$
The weighted-estimator covariance is
$$V_t(\phi)=\widetilde V_t\!\left(\upsilon_t(\phi-\pi_t(\phi))\right).$$
For a measurable vector function $h$ on $\Theta_t$, define the forward operator from $\Theta_{t-1}$ by
$$E_t h(x)=k_t(\upsilon_t h)(x)=\int\upsilon_t(z)h(z)\,k_t(x,dz).$$
For $k<t$, write $E_{k+1:t}=E_{k+1}\circ\cdots\circ E_t$; set $E_{t+1:t}$ to the identity operator.
For multinomial offspring resampling set
$$\widehat V_t^{\mathrm{multi}}(\phi)=V_t(\phi)+\operatorname{Cov}_{\pi_t}(\phi).$$
For residual offspring resampling, let $r(u)=u-\lfloor u\rfloor$. When $c_t=\widetilde\pi_t(r(\upsilon_t))>0$, define the formal source candidate
$$R_t^{\mathrm{cand}}(\phi)=\widetilde\pi_t\!\left(r(\upsilon_t)\phi\phi^\top\right)-\frac{\widetilde\pi_t(r(\upsilon_t)\phi)\,\widetilde\pi_t(r(\upsilon_t)\phi)^\top}{c_t}.$$
Set $R_t=R_t^{\mathrm{cand}}$ and $\widehat V_t^{\mathrm{res}}=V_t+R_t$ only when $\widetilde\pi_t(\upsilon_t\in\{1,2,\ldots\})=0$; then $c_t>0$ and the finite-sample floor discontinuities are avoided. If $\upsilon_t=1$ $\widetilde\pi_t$-almost everywhere, all normalized weights are exactly equal and residual offspring are deterministic; in that special case put $R_t=0$. No residual covariance is assigned when $c_t=0$ but $\upsilon_t$ is not almost everywhere one: the finite-sample normalization can move positive integer weights across floor boundaries. The B-page counterexamples show why the general positive-integer-atom branch remains unassigned.

## Remarks

The classes and recursions are definitions. The fixed-horizon CLT proofs below establish finiteness where their stated hypotheses apply. In particular, the source class $\Phi_t^{(d)}$ alone does not ensure $\operatorname{Cov}_{\pi_t}(\phi)<\infty$; the recursive target-moment class $\Psi_t^{(d)}$ is used for the stated post-resampling conclusions. The residual formula requires a separate continuity condition at positive integer weights; the B-page records finite-state failures without it. For an arbitrary weighted initial proposal, the source class $\Phi_0=L^2(\widetilde\pi_0)$ is not by itself enough: the displayed initial weighted-numerator and target moments in $\Psi_0$ are imposed explicitly.
