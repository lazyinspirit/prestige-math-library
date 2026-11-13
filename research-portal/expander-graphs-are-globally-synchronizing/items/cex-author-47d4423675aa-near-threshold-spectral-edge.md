---
id: cex-author-47d4423675aa-near-threshold-spectral-edge
title: A near-threshold counterexample to the reported constant-two spectral bound
kind: counterexample
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-erdos-renyi
  - def-expander-sync-centered-matrices
  - def-expander-prereq-asymptotic-quantifiers
  - lem-author-47d4423675aa-loop-free-mean
  - lem-author-47d4423675aa-rank-one-lower-edge
  - lem-author-47d4423675aa-entropy-rational-gap
  - lem-author-47d4423675aa-critical-degree-root
  - lem-author-47d4423675aa-outlier-error-transfer
dependency_roles:
  def-expander-sync-erdos-renyi: mathematical-premise
  def-expander-sync-centered-matrices: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  lem-author-47d4423675aa-loop-free-mean: mathematical-premise
  lem-author-47d4423675aa-rank-one-lower-edge: mathematical-premise
  lem-author-47d4423675aa-entropy-rational-gap: mathematical-premise
  lem-author-47d4423675aa-critical-degree-root: mathematical-premise
  lem-author-47d4423675aa-outlier-error-transfer: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 31, Section 6, equation (6.1) and the following p=gamma log n/n
        paragraph; p. 6 for centering
      statement: The article attributes to Peche and Soshnikov the estimate
        ||Delta_A||<=2 sqrt(np(1-p))+o(n^(-1/44)) with high probability and
        infers alpha=(2+epsilon)/sqrt(np); the near-threshold discussion takes
        p=gamma log n/n, gamma>1, and Delta_A=A-pJ.
      hypotheses: Loop-free G(n,p), reference degree d*=np; the page discusses
        spectral expansion near the connectivity threshold. This citation
        records the exact original attribution challenged, not independent
        proof.
      reading_limits: Read the Section 6 opening and PDF p.31 in extracted text and
        rendered page image, and the current authored centering and graph-law
        definitions. No claim about failure of subsequent synchronization
        theorems is made.
    - title: Johannes Alt, Raphael Ducatez and Antti Knowles, Extremal eigenvalues of
        critical Erdos-Renyi graphs
      url: https://www.unige.ch/~knowles/er_critical.pdf
      locator: "Section 2, PDF pp. 4-6: model, Theorem 2.1, definition of beta_l(d)
        preceding Corollary 2.4, and Corollary 2.4(i)"
      statement: Let A be the zero-diagonal adjacency matrix of G(N,d/N). Fix
        0<kappa<1/2 and kappa<=theta<5/2, and assume (log
        N)^(4/(5-2theta))<=d<=N/2. Let a=1/2-kappa and let beta_l(d)>=1 solve
        d(beta log beta-beta+1)+(1/2)log(2 pi beta d)=log(N/l). For indices l
        with beta_l(d)>=2+(log d)^(-a), Corollary 2.4(i) bounds
        |lambda_(l+1)(A)-sqrt(d)Lambda(beta_l(d))|+|lambda_(N+1-l)(A)+sqrt(d)Lambda(beta_l(d))|
        by C(d^(-c(Lambda(beta_l(d))-2))+d^(-theta/2))sqrt(d), with probability
        1-o(1), where Lambda(t)=t/sqrt(t-1), c>0 is universal and C depends on
        kappa.
      hypotheses: "Simple undirected graph: A=A*, A_xx=0; independent Bernoulli(d/N)
        variables for x<y. Fixed kappa in (0,1/2), kappa<=theta<5/2; displayed
        d-range; l within the deterministic L(d) set defined immediately before
        Corollary 2.4. For beta_l definition l<=N/(C sqrt d). The application
        uses kappa=theta=1/10, d=(3/2)log N, l=1; all conditions hold for
        sufficiently large N."
      reading_limits: Read PDF pp.1-7, focusing on Section 2 model, full Theorem 2.1,
        full Corollary 2.3, beta_l definition, full Corollary 2.4 and Remarks
        2.5-2.6. Inspected rendered images of PDF pp.4-6 to disambiguate
        centered versus uncentered A and the error exponent. Proofs in Sections
        4-9 and Appendix D were not reconstructed or read in full. Only the
        explicitly stated lower-eigenvalue part of Corollary 2.4 is imported.
dependency_level: 8
---

## Statement refuted

The assertion under examination is that, for every sequence $p_n=\gamma\log n/n$ with fixed $\gamma>1$, the simple graph $G(n,p_n)$ satisfies $\|A_n-p_nJ\|\le2\sqrt{np_n(1-p_n)}+r_n$ with high probability for some deterministic $r_n=o(n^{-1/44})$. A counterexample is $p_n=3\log n/(2n)$ for all sufficiently large $n$ (define the finitely many earlier probabilities arbitrarily in $[0,1]$). With $g=9/(2\sqrt5)-2>0$, this law instead has $\|A_n-p_nJ\|\ge(2+g/2)\sqrt{np_n}$ with high probability. This refutes the displayed spectral assertion throughout that near-threshold range; it asserts no failure of a synchronization theorem.

## Statement references

[[def-expander-sync-erdos-renyi]]

[[def-expander-sync-centered-matrices]]

[[def-expander-prereq-asymptotic-quantifiers]]

[[lem-author-47d4423675aa-loop-free-mean]]

[[lem-author-47d4423675aa-rank-one-lower-edge]]

[[lem-author-47d4423675aa-entropy-rational-gap]]

[[lem-author-47d4423675aa-critical-degree-root]]

[[lem-author-47d4423675aa-outlier-error-transfer]]

## Facts & Assumptions

[F1] The original article reports equation (6.1) and discusses $p=\gamma\log n/n$ with $\gamma>1$ on PDF p. 31. This records attribution, not a premise establishing the estimate.

[F2] For $d_n=(3/2)\log n$ and $K=2\pi>0$, the deterministic root $\beta_n$ exists for large $n$, exceeds $9/4$, and $p_n=d_n/n\to0$. [[lem-author-47d4423675aa-critical-degree-root]]

[F3] The source lower-edge estimate in External input is Corollary 2.4(i) for the uncentered loop-free adjacency matrix; all its model and parameter hypotheses must hold.

[F4] The exact loop-free mean is $p(J-I)$, while the article reference centering is $\Delta=A-pJ$. The outlier transfer needs this latter matrix and gives a norm lower bound from a negative adjacency eigenvalue. [[lem-author-47d4423675aa-loop-free-mean]] [[lem-author-47d4423675aa-rank-one-lower-edge]] [[lem-author-47d4423675aa-outlier-error-transfer]]

## External input

Alt–Ducatez–Knowles, Section 2, Corollary 2.4(i), PDF p. 6, supplies the following independent input. For the zero-diagonal adjacency matrix $A$ of $G(n,d/n)$, take $\kappa=\theta=1/10$ and $a=1/2-\kappa=2/5$. If $(\log n)^{5/6}\le d\le n/2$, let $\beta_1(d)\ge1$ solve $dI(\beta_1)+(1/2)\log(2\pi\beta_1d)=\log n$. Whenever $\beta_1(d)\ge2+(\log d)^{-2/5}$, there are fixed constants $C,c>0$ such that, with probability $1-o(1)$, $|\lambda_{\min}(A)/\sqrt d+\Lambda(\beta_1(d))|\le C(d^{-c(\Lambda(\beta_1(d))-2)}+d^{-1/20})$. The source also requires $1\le n/(C_0\sqrt d)$ for the definition of $\beta_1$, with a fixed universal $C_0$; this holds in the application. This is an external premise, not a reconstructed proof.

## Counterexample

**Given:** The data and hypotheses in the Statement refuted.

**Goal:** Exhibit an applicable graph-law sequence for which the stated estimate fails.

1.1 Let $p_n=d_n/n$ with $d_n=(3/2)\log n$. By [F2], this is eventually a valid probability, $d_n\to\infty$, and $\beta_n>9/4$. For the source parameters $\kappa=\theta=1/10$, the degree requirement is $(\log n)^{5/6}\le d_n\le n/2$, which holds eventually. Also $n/\sqrt{d_n}\to\infty$, and $\beta_n>9/4>2+(\log d_n)^{-2/5}$ eventually, so $l=1$ is in the source index range. The simple graph model in the Statement is exactly the source model, including its zero diagonal. [F2, F3, algebra]

2.1 By [F3] and step 1.1, there are events $E_n$ with $\mathbb P(E_n)\to1$ on which the least adjacency eigenvalue has the error estimate in External input, with $\theta=1/10$. Apply [F4] and the outlier-error transfer to obtain $\|A_n-p_nJ\|\ge(2+g/2)\sqrt{d_n}$ with high probability. In particular the diagonal convention causes no loss: subtracting the positive semidefinite matrix $p_nJ$ only strengthens the negative quadratic-form lower bound for the norm. [F3, F4, step 1.1, algebra]

3.1 For any deterministic $r_n=o(n^{-1/44})$, one has $r_n/\sqrt{d_n}\to0$ and $2\sqrt{1-p_n}\le2$. Thus eventually $2\sqrt{d_n(1-p_n)}+r_n<(2+g/2)\sqrt{d_n}$. The event in the assertion refuted is then disjoint from the event in step 2.1, whose probability tends to one; its own probability tends to zero. This proves the counterexample for the article range $\gamma=3/2>1$. [F1, F2, step 2.1, algebra] ∎

## Source notes

The five preceding local lemmas supply the convention transfer, norm monotonicity, explicit entropy gap, deterministic degree root and decay of the source error. The substantial remaining spectral input is imported precisely from Alt–Ducatez–Knowles. The counterexample challenges only the spectral assertion attributed in original equation (6.1). The original-article final assessor must independently compare and classify this lead; this authoring proposal does not enter a defect report or supply independent review.
