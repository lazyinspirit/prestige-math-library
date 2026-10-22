---
id: alg-ip-link-loss-em
kind: algorithm
title: "EM for active tree link-loss tomography"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-tree-probing-experiment
  - alg-expectation-maximization
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "B. Xi, G. Michailidis, and V. N. Nair, Estimating Network Loss Rates Using Active Tomography, Journal of the American Statistical Association 101 (2006), 1430–1448"
      url: "https://www.stat.purdue.edu/~xbw/research/xi_tomo_jasa1206.pdf"
      locator: "§4.2, PDF pp. 6–7 (printed pp. 1435–1436): latent link successes, conditional expectations, and expected-success/probe-count update"
    - title: "E. Lawrence, G. Michailidis, and V. N. Nair, Statistical Inverse Problems in Active Network Tomography, IMS Lecture Notes–Monograph Series 54 (2007), 24–44"
      url: "https://arxiv.org/pdf/0708.1079"
      locator: "§3.2, PDF pp. 6–7 (printed pp. 29–30): flexicast multinomial outcomes and the EM E/M steps"
---

## Definition

**Inputs.** Use a finite-tree multicast loss experiment with observed counts $n_{d,y}$, where $n_{d,y}\in\mathbb N_0$, $\sum_{y\in\{0,1\}^{C_d}}n_{d,y}=N_d$, and $p_e$ is the success probability for edge $e$. Supply an initial vector $p^{(0)}\in(0,1)^E$, a likelihood tolerance $\tau\ge0$, and an iteration cap $M\in\mathbb N_{>0}$. The data are admissible only when every pattern with positive count has $\Omega_{d,y}\ne\varnothing$ and every link is traversed by at least one probe, that is,
$$
N_e:=\sum_{d:e\in E_d}N_d>0\qquad(e\in E).
$$

For algorithm calculations, extend the finite law to candidate vectors in the closed cube as follows. For $a\in[0,1]$ and $z\in\{0,1\}$, let $b(a,z)=a$ if $z=1$ and $b(a,z)=1-a$ if $z=0$. For $p\in[0,1]^E$, set
$$
w^{\mathrm{cl}}_{p,d}(x):=\prod_{e\in E_d}b(p_e,x_e),\qquad Z_{d,y}(p):=P^{\mathrm{cl}}_{p,d}(y):=\sum_{x\in\Omega_{d,y}}w^{\mathrm{cl}}_{p,d}(x).
$$
The sets $\Omega_{d,y}$ partition the link-state space and $\sum_{x\in\{0,1\}^{E_d}} w^{\mathrm{cl}}_{p,d}(x)=\prod_{e\in E_d}((1-p_e)+p_e)=1$, so $P^{\mathrm{cl}}_{p,d}$ is a probability law for every $p\in[0,1]^E$.
For $p\in(0,1)^E$, $P^{\mathrm{cl}}_{p,d}(y)=P_{p,d}(y)$ from the tree-experiment definition. This closed-cube extension is used only to evaluate candidate iterates; the experiment's parameter space remains $(0,1)^E$. When $Z_{d,y}(p)>0$ define
$$
m_{e,d,y}(p):=\frac{\sum_{x\in\Omega_{d,y}}x_e w^{\mathrm{cl}}_{p,d}(x)}{Z_{d,y}(p)}\qquad(e\in E_d).
$$
The algorithm's observed log likelihood on the closed cube is
$$
\ell(p):=\sum_{d=1}^D\sum_{y:n_{d,y}>0}n_{d,y}\log Z_{d,y}(p),
$$
with $\ell(p)=-\infty$ if any positive-count pattern has zero probability.

**Output.** Return the finite iterate list and one status: `invalid-input`, `zero-likelihood-current`, `zero-likelihood-candidate`, `likelihood-tolerance-met`, or `iteration-cap-reached`. For admissible input, the list begins with $p^{(0)}$ and every later iterate lies in $[0,1]^E$. If an input check fails, the list is the one-element list $(p^{(0)})$ containing the supplied initial vector.

**Procedure.**

1. Validate the count constraints, pattern feasibility, interior initial vector, nonnegative tolerance, positive iteration cap, and $N_e>0$ for each link. If any check fails, return the one-element iterate list $(p^{(0)})$ and status `invalid-input`.

2. Initialize the list with $p^{(0)}$. At each current iterate $p^{(t)}$, compute $Z_{d,y}(p^{(t)})$ for every positive-count pattern. If any is zero, return the current iterate list, ending in $p^{(t)}$, with status `zero-likelihood-current`.

3. For each link $e$, compute its expected number of latent successes
$$
\widehat S_e^{(t)}=\sum_{d:e\in E_d}\sum_{y:n_{d,y}>0}n_{d,y}m_{e,d,y}(p^{(t)}).
$$
Set
$$
p_e^{(t+1)}=\widehat S_e^{(t)}/N_e\qquad(e\in E).
$$
This finite sum is the E-step conditional expectation of the complete-data success count; the displayed ratio is the M-step update instruction and lies in $[0,1]$ for each edge. Coordinates equal to $0$ or $1$ are allowed after an update.

4. Compute $\ell(p^{(t+1)})$. If any positive-count pattern has zero probability, return the current iterate list, ending in the last valid iterate $p^{(t)}$, with status `zero-likelihood-candidate`. Otherwise append $p^{(t+1)}$. If $|\ell(p^{(t+1)})-\ell(p^{(t)})|\le\tau$, return the list with status `likelihood-tolerance-met`. If not, continue from $p^{(t+1)}$ until $M$ updates have been made, then return the list with status `iteration-cap-reached`.

All state sums are finite, and the finite link-state conditional probabilities are calculated directly; the generic measure-space/KL branch of the EM procedure is not invoked. The status records only the stopping rule that fired; it asserts neither parameter convergence nor a global optimum.

## Definition references

[[def-ip-tree-probing-experiment|Finite-tree multicast loss experiments]]

[[alg-expectation-maximization|Expectation-maximization]]

[Xi, Michailidis, and Nair, §4.2](https://www.stat.purdue.edu/~xbw/research/xi_tomo_jasa1206.pdf)

[Lawrence, Michailidis, and Nair, §3.2](https://arxiv.org/pdf/0708.1079)
