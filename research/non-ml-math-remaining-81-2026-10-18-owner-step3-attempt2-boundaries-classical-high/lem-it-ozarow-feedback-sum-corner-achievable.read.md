---
id: lem-it-ozarow-feedback-sum-corner-achievable
kind: lemma
title: Ozarow linear feedback scheme achieves the two-user Gaussian sum point
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-it-two-user-real-awgn-mac-code, def-it-two-user-real-awgn-mac-feedback-code, lem-it-awgn-feedback-estimation-covariance-update]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; the code uses finite message grids and explicitly defined Gaussian densities.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 18, AWGN MAC with feedback
      url: https://arxiv.org/pdf/1001.3404v3
    - title: Amos Lapidoth and Michèle Wigger, On the AWGN MAC with Imperfect Feedback, Appendix C and perfect-feedback discussion
      url: https://www.isiweb.ee.ethz.ch/papers/docu/alap-mwig-2010-2.pdf
---

## Statement

Let $P_1,P_2,N>0$ and write $s_j=P_j/N$. There is a unique $\rho_\star\in(0,1)$ satisfying
$$(1+s_1(1-\rho_\star^2))(1+s_2(1-\rho_\star^2))=1+s_1+s_2+2\rho_\star\sqrt{s_1s_2}.$$
For the perfect-feedback channel of [[def-it-two-user-real-awgn-mac-feedback-code]], the rate pair
$$\left(\frac12\ln(1+s_1(1-\rho_\star^2)),\frac12\ln(1+s_2(1-\rho_\star^2))\right)$$
is achievable under the expected average-power constraints. The two rates sum to $\frac12\ln(1+s_1+s_2+2\rho_\star\sqrt{s_1s_2})$.

## Facts & Assumptions

**Given:** Positive user powers $P_1,P_2$, positive noise variance $N$, two independent private messages and noiseless causal common output feedback.

[F1] [[def-it-two-user-real-awgn-mac-code]]: the channel is $Y_i=X_{1i}+X_{2i}+Z_i$ with independent Gaussian noise of variance $N$ and expected average input powers at most $P_j$.

[F2] [[def-it-two-user-real-awgn-mac-feedback-code]]: each encoder is a deterministic function of its own message and the shared output history strictly before the current use.

[F3] [[lem-it-awgn-feedback-estimation-covariance-update]]: after observing a sum of two correlated Gaussian inputs plus independent Gaussian noise, conditional error variances and the opposite-sign normalized correlation update have the displayed covariance formulas.

## Proof

1.1 Put $a(r)=1-r^2$ and $F(r)=(1+s_1a(r))(1+s_2a(r))-(1+s_1+s_2+2r\sqrt{s_1s_2})$. Then $F(0)=s_1s_2>0$, $F(1)<0$, and $$F'(r)=-2r[s_1(1+s_2a(r))+s_2(1+s_1a(r))]-2\sqrt{s_1s_2}<0.$$ Continuity and strict decrease give a unique root $\rho_\star\in(0,1)$. Taking logarithms of its equation proves the rate-sum identity. [given, algebra, algebra]

1.2 Choose any positive rates $0<R_j<\frac12\ln(1+s_ja(\rho_\star))$. By continuity of the unique root and rate expressions in $(P_1,P_2)$, choose temporary powers $0<P'_j<P_j$ close enough to $P_j$ that these strict inequalities still hold for $s'_j=P'_j/N$ and their root $\rho'$. Continuity follows because every convergent subsequence of roots solves the limiting strictly decreasing equation, whose root is unique. Write $\widetilde Z_i=Z_i/\sqrt N$ and $\widetilde Y_i=Y_i/\sqrt N$, so $\widetilde Y_i=V_{1i}+V_{2i}+\widetilde Z_i$ and $\operatorname{Var}\widetilde Z_i=1$. Use midpoint grids $\theta_j(m)=-1+(2m-1)/M_j$ in $[-1,1]$, $M_j=\lceil e^{nR_j}\rceil$. The three startup transmissions in normalized units are $(V_{1,-2},V_{2,-2})=(0,\theta_2)$, $(V_{1,-1},V_{2,-1})=(\theta_1,0)$ and $(V_{1,0},V_{2,0})=(0,0)$. User 1 learns $\widetilde Z_{-1}$ by subtracting its own point from $\widetilde Y_{-1}$; user 2 similarly learns $\widetilde Z_{-2}$, and both learn $\widetilde Z_0=\widetilde Y_0$ by feedback. [F1, F2, F3, choose, construct]

2.1 Set $\lambda^2=\rho'/(1-\rho')$, $U_1=\widetilde Z_{-1}+\lambda\widetilde Z_0$, $U_2=\widetilde Z_{-2}+\lambda\widetilde Z_0$, and $V_{j1}=\sqrt{s'_j/(1+\lambda^2)}\,U_j$. Then both $U_j$ are known to their respective senders, have variance $1+\lambda^2$, and correlation $\rho'$, so $V_{j1}$ has variance $s'_j$ and the pair has correlation $\rho'$. For $i\ge2$ define the causal innovations $E_{j,i-1}=V_{j,i-1}-\mathbb E[V_{j,i-1}\mid \widetilde Y_1^{i-1}]$ using only the recursive outputs, and transmit $V_{1i}=\sqrt{s'_1/\mathbb E E_{1,i-1}^2}\,E_{1,i-1}$ and $V_{2i}=-\sqrt{s'_2/\mathbb E E_{2,i-1}^2}\,E_{2,i-1}$. Gaussian conditional means are affine functions of the observed histories, so these finite-message encoder maps are Borel-measurable; they are causal because the normalized history is an invertible rescaling of the physical output history. [F2, step 1.2, algebra]

3.1 The initial pair is jointly Gaussian and independent of the empty recursive history. Inductively, if the current pair is centered Gaussian with variances $s'_1,s'_2$, correlation $r$, and independent of the earlier recursive outputs, its observation is the pair's sum plus fresh unit Gaussian noise. The Gaussian residual after conditioning on this observation is independent of the observation and earlier history. Formula [F3] therefore gives the next normalized opposite-sign correlation $$r_{\rm new}=\frac{\sqrt{s'_1s'_2}(1-r^2)-r}{\sqrt{(1+s'_1(1-r^2))(1+s'_2(1-r^2))}},$$ with both marginal variances restored to $s'_j$ by the chosen scales. [F1, F3, step 2.1, algebra]

4.1 At $r=\rho'$, the denominator in step 3.1 is $\sqrt{D}$, where $D=1+s'_1+s'_2+2\rho'\sqrt{s'_1s'_2}$. Expanding the root equation gives $$(\sqrt{s'_1s'_2}(1-\rho'^2)-\rho')^2=\rho'^2D.$$ The unsquared numerator is positive: let $r_0$ be the unique root of $r=\sqrt{s'_1s'_2}(1-r^2)$. Substitution gives $F(r_0)=r_0^2(1-s'_1-s'_2)-2r_0\sqrt{s'_1s'_2}<0$; if $s'_1+s'_2<1$, use $r_0<\sqrt{s'_1s'_2}$, and otherwise both terms are nonpositive with the second strictly negative. Since $F$ is strictly decreasing, $\rho'<r_0$, so $\sqrt{s'_1s'_2}(1-\rho'^2)-\rho'>0$. Thus $r_{\rm new}=\rho'$, and induction proves the same correlation and powers at every recursive use. [step 1.1, step 3.1, algebra, cases]

5.1 Conditional on the recursive past, the two current inputs are centered jointly Gaussian with variances $s'_j$ and correlation $\rho'$. Thus $\widetilde Y_i\mid\widetilde Y_1^{i-1}$ is Gaussian with variance $D$, while $\widetilde Y_i\mid(U_j,\widetilde Y_1^{i-1})$ is Gaussian with variance $v_j:=1+s'_{3-j}(1-\rho'^2)$ because $V_{ji}$ is determined by $(U_j,\widetilde Y_1^{i-1})$. Define the conditional information here as the expectation of the log ratio of these two conditional Gaussian densities. Integrating their log densities, whose centered quadratic terms have expectation one, gives $I(U_j;\widetilde Y_i\mid\widetilde Y_1^{i-1})=\frac12\ln(D/v_j)$. The root equation then gives $$I(U_j;\widetilde Y_i\mid\widetilde Y_1^{i-1})=\frac12\ln\frac{D}{1+s'_{3-j}(1-\rho'^2)}=\frac12\ln(1+s'_j(1-\rho'^2)).$$ Factoring the positive conditional Gaussian densities over time and summing their log ratios gives the chain rule directly, so $I(U_j;\widetilde Y_1^n)=\frac n2\ln(1+s'_j(1-\rho'^2))$. Since $(U_j,\widetilde Y_1^n)$ is jointly Gaussian, the same density-ratio calculation gives $I(U_j;\widetilde Y_1^n)=\frac12\ln\!\left(\operatorname{Var}(U_j)/\operatorname{Var}(U_j\mid\widetilde Y_1^n)\right)$: the conditional Gaussian variance is constant in the observed value, and the log-density ratio expectation is the difference of the two Gaussian entropies. Therefore $\operatorname{Var}(U_j\mid\widetilde Y_1^n)=\operatorname{Var}(U_j)e^{-2I(U_j;\widetilde Y_1^n)}$. [F3, step 4.1, algebra]

6.1 The receiver observes $\widetilde Y_{-1}+\lambda\widetilde Y_0=\theta_1+U_1$ and $\widetilde Y_{-2}+\lambda\widetilde Y_0=\theta_2+U_2$. It estimates $\theta_j$ by subtracting $\mathbb E[U_j\mid \widetilde Y_1^n]$. The estimation error variance is the conditional variance from step 5.1. Since the adjacent grid spacing is $2/M_j$, decode to a nearest grid point and resolve any tie by choosing the least-indexed point. Chebyshev's inequality makes the decoding error tend to zero whenever $R_j<\frac12\ln(1+s'_j(1-\rho'^2))$. [step 1.2, step 5.1, algebra]

7.1 The $n$ recursive symbols use expected physical power $P'_j$ each, and the one nonzero startup symbol for user $j$ has physical energy at most $N$. Thus total expected energy is at most $nP'_j+N$, which is at most $(n+3)P_j$ for all sufficiently large $n$ because $P'_j<P_j$. The block has $n+3$ uses and rates $nR_j/(n+3)\to R_j$. Letting $P'_j\uparrow P_j$ and then closing the strict rates proves achievability of the stated corner. [F1, step 1.2, step 6.1, algebra] ∎

