---
id: alg-qa-13-iterative-likelihood-amplitude-estimation
kind: algorithm
title: "Iterative no-QFT amplitude estimation by finite-grid likelihood"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-13-amplitude-estimation-task
  - def-qa-12-prepared-success-subspace
  - alg-qa-12-amplitude-amplification
  - lem-qa-13-grover-eigenphase-relation
  - def-qc-projective-measurement
  - def-qa-quantum-query-algorithm
  - lem-qa-13-real-cyclotomic-comparison
justified_by:
  - thm-qa-13-iterative-likelihood-query-count
axiom_use: "No choice axiom is used; all constructions and measurement schedules are finite, and the analytic estimates use the stated real-analysis suppliers."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Brassard, Høyer, Mosca, and Tapp, Quantum Amplitude Amplification and Estimation, complete article, §§4–5, Theorems 11–18"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, complete lecture notes, §§19.1–19.3"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, complete 239-page notes, §7.3"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Suzuki et al., Amplitude estimation without phase estimation, complete article, §§2–3.2"
      url: "https://arxiv.org/pdf/1904.10246"
---
## Definition

**Input.** An instance of the task [[def-qa-13-amplitude-estimation-task]] with the same $H,|0\rangle,A,\Pi_{\rm good}$ supplied under the prepared-success-subspace access contract of [[def-qa-12-prepared-success-subspace]]. That contract supplies and charges the uncontrolled calls to $A,A^*,S_0,S_{\rm good}$. Additionally require supplied access to the good/bad projective measurement $\{\Pi_{\rm good},I-\Pi_{\rm good}\}$ of [[def-qc-projective-measurement]], with each use charged in the measurement coordinate and any implementation costs charged separately; no controlled access is used. Also require integers $K,S,J\ge1$.

Set $m_0=0$ and $m_k=2^{k-1}$ for $1\le k\le K$. For each $k=0,\ldots,K$, perform $S$ repetitions: prepare a fresh $A|0\rangle$, apply exactly $m_k$ signed Grover iterates using [[alg-qa-12-amplitude-amplification]], measure the good/bad projective measurement, and record the outcome. Let $h_k$ be the number of good outcomes at scale $k$.

Set $s=2J$ and $\zeta_s=e^{2\pi i/s}$. For an integer $q$, let $\rho_s(q)$ be its least residue in $\{0,\ldots,s-1\}$. For grid labels $j=0,\ldots,J$, put $\theta_j=j\pi/(2J)$ and define the likelihood
$$L_j=\prod_{k=0}^K\sin^{2h_k}((2m_k+1)\theta_j)\cos^{2(S-h_k)}((2m_k+1)\theta_j),$$
where every zeroth power is $1$. For each label $j$ and scale $k=0,\ldots,K$, set
$$r_{kj}=\rho_s((2m_k+1)j),\qquad r'_{kj}=\rho_s(-r_{kj}),$$
and form the rational polynomials
$$U_{kj}(X)=\frac{2-X^{r_{kj}}-X^{r'_{kj}}}{4},\qquad V_{kj}(X)=\frac{2+X^{r_{kj}}+X^{r'_{kj}}}{4}.$$
Put $P_j(X)=\prod_{k=0}^K U_{kj}(X)^{h_k}V_{kj}(X)^{S-h_k}$, treating every zeroth power as $1$. The polynomials $P_j$ are the exact comparison inputs for the likelihoods $L_j$: compare $P_i(\zeta_s)$ and $P_j(\zeta_s)$ using [[lem-qa-13-real-cyclotomic-comparison]], and choose the least label $\widehat j$ attaining the maximum.

Set $E_{\widehat j}(X)=(2-X^{\widehat j}-X^{\rho_s(-\widehat j)})/4$ and return $\widetilde a=E_{\widehat j}(\zeta_s)$, encoded by the pair $(s,E_{\widehat j})$. Each shot uses a fresh state and ordinary measurement. This is a finite-grid likelihood procedure, not a finite-sample $\epsilon,\delta$ guarantee; no such guarantee is asserted here.
