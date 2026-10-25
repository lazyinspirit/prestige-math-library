---
id: ex-ip-robust-ellipsoid-minimax-shift-rate
kind: example
title: Worst-law ellipsoid recovery has no training-size rate
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
axiom_use: No additional choice axiom is used; the laws, finite predictors and
  explicit constructions are supplied.
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Floor van Maarschalkerwaart, Subhadip Mukherjee, Christoph Brune, and
        Marcello Carioni, A Distributionally Robust Framework for Learned
        Reconstructions in Inverse Problems (2026)
      url: https://arxiv.org/pdf/2606.30230v1
      locator: "Theorem 4.2 and its complete proof: explicit worst-case squared-risk
        bound for conditional measurement-law perturbations with a fixed truth
        marginal; §4.3 discusses truth-marginal perturbations."
    - title: "Hongkai Zheng et al., InverseBench: Benchmarking Plug-and-Play Diffusion
        Priors for Inverse Problems in Physical Sciences, ICLR 2025"
      url: https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf
      locator: "Full 29-page proceedings paper, §§4.3–5 and Appendix C: selected
        empirical prior-shift and out-of-distribution behaviors; no uniform
        recovery modulus is proved."
    - title: Guillaume Bal, Introduction to Inverse Problems, E6901 Lecture Notes,
        full 132-page text
      url: https://www.stat.uchicago.edu/~guillaumebal/COURSES/E6901/LectureNotesIP.pdf
      locator: "§1.1 and §§8.2–8.3, PDF pp. 3–4 and 91–97: forward models, noise,
        prior assumptions, regularization, Bayesian inverse problems, and
        computational limits."
---

## Example

For the robust minimax value $\mathfrak R_N(\rho_X,\rho_A)$ in the original question reproduced below, fix $p,s>0$, $R,\sigma>0$, $N\ge1$, $\rho_X\ge0$ and $0\le\rho_A<1/2$. Put
$$Q_{p,s}(R,\sigma)=R^2\min\left\{1,(\sigma/R)^{4s/(2s+2p+1)}\right\}.$$
There is $c_{p,s}>0$, depending only on $p,s$, such that
$$c_{p,s}\bigl(Q_{p,s}(R,\sigma)+R^2\rho_A^2\bigr)\le\mathfrak R_N(\rho_X,\rho_A)\le\min\left\{R^2,2Q_{p,s}(R,\sigma)+R^2\rho_A^2\right\}.$$
These bounds hold for every training size and truth-law shift radius. For fixed positive $p,s,R$, along any sequence of the remaining parameters the risk tends to zero if and only if both $\sigma\to0$ and $\rho_A\to0$. In particular, increasing $N$ with fixed positive noise does not force the worst-law risk to zero. The original question, including both distinct shift classes, is retained verbatim under Original question.

## Example references

[van Maarschalkerwaart et al., full 2026 paper](https://arxiv.org/pdf/2606.30230v1)

[Zheng et al., ICLR 2025 InverseBench paper](https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf)

[Bal, full inverse-problems lecture notes](https://www.stat.uchicago.edu/~guillaumebal/COURSES/E6901/LectureNotesIP.pdf)

## Original question

Fix an integer $N\ge1$, parameters $p,s,R,\sigma>0$, a shift radius $\rho_X\ge0$, and an operator radius $0\le\rho_A<1/2$. Let $\mathcal H=\ell^2(\mathbb N)$, with norm $\|\theta\|_2^2=\sum_{j\ge1}\theta_j^2$, and define the compact truth class
$$\Theta_s(R)=\left\{\theta\in\mathcal H:\sum_{j\ge1}j^{2s}\theta_j^2\le R^2\right\},\qquad (A_p\theta)_j=j^{-p}\theta_j.$$
Let $\mathcal Y=\mathbb R^{\mathbb N}$ have its product Borel sigma-algebra. A sequence observation with forward operator $A$ is $Y_j=(A\theta)_j+\sigma\xi_j$, where the $\xi_j$ are independent $N(0,1)$ variables; this defines a probability law on $\mathcal Y$ even though the white-noise sequence need not lie in $\ell^2$. Write $\mathcal P(K)$ for the Borel probability laws on a Borel set $K$. For a Borel probability law $\mu_0$ on $\Theta_s(R)$, the training data are $D_N=((\theta_i,Y_i))_{i=1}^N$ with independent $\theta_i\sim\mu_0$ and $Y_i=A_p\theta_i+\sigma\xi_i$. At test time, $\theta\sim\mu$ for another Borel probability law $\mu$ on $\Theta_s(R)$ and the unknown forward operator is $A_{p,E}=A_p(I+E)$, where $E:\ell^2\to\ell^2$ is bounded linear and $\|E\|_{\mathrm{op}}\le\rho_A$. Write $\mathcal L(\ell^2)$ for the bounded linear operators from $\ell^2$ to itself. The learner receives $D_N$ and the test observation $Y$, but not $E$.

For probability laws $\mu,\mu_0$ on $\Theta_s(R)$, define their Wasserstein distance by
$$W_1(\mu,\mu_0)=\inf_{\Gamma\in\Pi(\mu,\mu_0)}\int_{\Theta_s(R)\times\Theta_s(R)}\|\theta-\theta_0\|_2\,\Gamma(d\theta,d\theta_0),$$
where $\Pi(\mu,\mu_0)$ is the set of couplings with those marginals. A learner is a Borel map $G_N:(\Theta_s(R)\times\mathcal Y)^N\times\mathcal Y\to\ell^2$. For fixed training data its test risk is
$$R_{\mu,E}(G_N\mid D_N)=E_{\theta\sim\mu,\,\xi}\left\|G_N(D_N,A_p(I+E)\theta+\sigma\xi)-\theta\right\|_2^2,$$
where $\xi$ is an independent standard Gaussian sequence. Define the robust minimax value
$$\mathfrak R_N(\rho_X,\rho_A)=\inf_{G_N}\sup_{\substack{\mu_0,\mu\in\mathcal P(\Theta_s(R)),\ W_1(\mu,\mu_0)\le\rho_X\\ E\in\mathcal L(\ell^2),\ \|E\|_{\mathrm{op}}\le\rho_A}}E_{D_N\sim(\mu_0,A_p)}R_{\mu,E}(G_N\mid D_N).$$
Determine matching upper and lower bounds for $\mathfrak R_N(\rho_X,\rho_A)$ as a function of $N,\rho_X,\rho_A,p,s,R,\sigma$, and identify necessary and sufficient joint regimes in which it tends to zero. In particular, the bound must distinguish source-to-test truth-law shift from perturbation of the conditional measurement law induced by $E$; no access to $E$ is available at deployment.

## Facts & Assumptions

**Given:** All data spaces, training laws, test laws, learners and shift classes in the original question. Let $e_j$ denote the jth coordinate vector. Let $\Phi$ be the standard normal distribution function and put $b=\Phi(-1)>0$.

[A1] A scalar observation $V=\delta U+\sigma G$ with $U$ uniform on $\{-1,1\}$ and independent standard Gaussian $G$ has minimum sign-testing error $\Phi(-\delta/\sigma)$ for $\delta>0$: the two Gaussian densities cross at zero, and choosing the larger density pointwise minimizes the error integral. Their ratio is $\exp(2\delta V/\sigma^2)$.

[A2] For vectors $x,a,b$ in a real Hilbert space, $\|x-a\|^2+\|x-b\|^2=2\|x-(a+b)/2\|^2+\|a-b\|^2/2$. This identity follows by expansion of the squares.

## Verification

**Given:** The original robust minimax model and [A1]–[A2].

1.1 The zero estimator gives risk at most $R^2$ for every allowed law and operator. If $\sigma<R$, put $t=(R/\sigma)^{2/(2s+2p+1)}>1$ and $k=\lfloor t\rfloor\ge1$. Use the Borel finite-coordinate estimator $\widehat\theta_j=j^pY_j$ for $j\le k$ and zero otherwise; it ignores the training data. Under any test truth its retained error is $P_kE\theta+(\sigma j^p\xi_j)_{j\le k}$ and its omitted error is $-(I-P_k)\theta$. These components are orthogonal, and the centered noise is independent of the truth. Hence its expected squared error is at most $R^2\rho_A^2+R^2(k+1)^{-2s}+\sigma^2\sum_{j=1}^k j^{2p}$. Because $k+1>t$ and $\sum_{j\le k}j^{2p}\le k^{2p+1}\le t^{2p+1}$, the last two terms are at most $2R^2t^{-2s}=2Q_{p,s}$. If $\sigma\ge R$, $Q_{p,s}=R^2$ and the zero estimator already gives the asserted upper bound. Taking the better of the zero and cutoff rules proves the displayed upper bound uniformly over both shift classes. [given, construct, algebra]

1.2 For the noise lower bound first suppose $\sigma\ge R$. Set $E=0$ and $\mu=\mu_0=(\delta_{Re_1}+\delta_{-Re_1})/2$. These laws have Wasserstein distance zero and are admissible at every $\rho_X$. The training sample is independent of the fresh test sign, and all other test coordinates are independent pure noise. Given those ancillary variables, testing the fresh sign reduces to [A1] with $\delta=R$. Thus any prediction of its first coordinate has squared error at least $R^2$ whenever its induced sign test is wrong, and its integrated risk is at least $R^2\Phi(-R/\sigma)\ge bR^2=bQ_{p,s}$. At a zero predicted coordinate, choose either sign; the squared error is still $R^2$. [A1, given, construct, algebra]

1.3 Put $r=\rho_A$. If $r>0$, define $a=R/(1+r)$, $b_0=R$ and take the same source and test law $\mu_0=\mu=(\delta_{ae_1}+\delta_{b_0e_1})/2$. Compare the two allowed operators $E_1=0$ and $E_2=-r(1+r)^{-1}P_1$, whose norms are at most $r$. In the first world, the test truth $ae_1$ has observation mean $ae_1$; in the second, truth $b_0e_1$ has the same mean because $(I+E_2)b_0e_1=ae_1$. The joint law of the full training sample and this conditional test observation is identical in the two cases, including every noisy coordinate. Calling that common law $H$, the corresponding two full test risks satisfy $R_1\ge\tfrac12E_H\|G-ae_1\|^2$ and $R_2\ge\tfrac12E_H\|G-b_0e_1\|^2$. Therefore [A2] gives $\max(R_1,R_2)\ge(b_0-a)^2/8=R^2r^2/[8(1+r)^2]\ge R^2r^2/18$. This holds for every Borel learner and all training sizes. If $r=0$, the asserted zero operator lower bound is immediate. [A2, given, construct, algebra]

2.1 If $\sigma<R$, use $t$ from step 1.1 and $k=\lceil t\rceil\le2t$. On the coordinate block $k\le j<2k$, put $a=2^{-s-1}Rk^{-s-1/2}$ and let $\mu_0=\mu$ be the uniform law on the $2^k$ vectors having independent coordinates $\theta_j=\pm a$ on this block and zero elsewhere. Each such vector lies in the ellipsoid because $\sum_jj^{2s}\theta_j^2\le k(2k)^{2s}a^2=R^2/4$. Again choose $E=0$. For every block coordinate, its test sign is independent of the whole training sample and of all other test coordinates. Its signal amplitude is $j^{-p}a\le k^{-p}a\le\sigma$, by the definition of $t$ and $k\ge t$. Applying the density-crossing argument in [A1], conditional on all ancillary data, gives sign error at least $b$. Summing the coordinate squared errors gives risk at least $bka^2=b2^{-2s-2}R^2k^{-2s}\ge b2^{-4s-2}Q_{p,s}$. Finite averaging over the sign prior and integration over the independent ancillary observations suffice; no choice of an unknown prior by the learner is being assumed. [A1, step 1.1, construct, algebra]

3.1 Steps 1.2 and 2.1 give $\mathfrak R_N\ge c_0Q_{p,s}$ with $c_0=b\min\{1,2^{-4s-2}\}>0$, and step 1.3 gives $\mathfrak R_N\ge R^2\rho_A^2/18$. The maximum of these bounds is at least $\tfrac12\min\{c_0,1/18\}(Q_{p,s}+R^2\rho_A^2)$, proving the lower bound with that explicit positive $c_{p,s}$. For fixed $p,s,R>0$, the upper bound tends to zero when $\sigma,\rho_A\to0$, and the lower bound forces both limits whenever the risk tends to zero. Both lower constructions have $\mu=\mu_0$, so they remain admissible even at zero truth-law shift; the upper construction ignores the training law entirely. This explains why $N$ and $\rho_X$ do not enter the matching-order rate for this worst-law formulation. [step 1.1, step 1.2, step 2.1, step 1.3, algebra] ∎

## Scope of the resolution

This gives matching-order upper and lower bounds for the exact original worst-law problem, including simultaneous unknown relative-operator shift and truth-law Wasserstein shift. It neither identifies the exact minimax constant nor says that finite-sample distribution learning is unimportant for a fixed restricted prior family. The source paper's conditional-law DRO bound is adjacent context; the two shift mechanisms and finite sign-prior proofs above are local and do not substitute its finite-dimensional hypotheses.
