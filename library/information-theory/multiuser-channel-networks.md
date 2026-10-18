---
page: multiuser-channel-networks
title: "Multiuser Channel Networks"
status: draft
requires: [lossy-source-coding-with-side-information]
items:
  - def-it-real-differential-entropy
  - def-it-two-user-real-awgn-mac-code
  - def-it-two-user-real-awgn-mac-feedback-code
  - lem-it-finite-gaussian-mixture-entropy-bounds
  - def-it-physically-degraded-dm-broadcast-channel
  - def-it-two-user-discrete-memoryless-mac
  - lem-it-awgn-feedback-estimation-covariance-update
  - def-it-finite-dmc-feedback-code
  - def-it-physically-degraded-dm-broadcast-code
  - def-it-two-user-discrete-memoryless-mac-code
  - def-it-two-user-discrete-memoryless-mac-feedback-code
  - lem-it-fano-for-finite-message-density-observations
  - lem-it-ozarow-feedback-sum-corner-achievable
  - def-it-two-correlated-iid-sources-over-dm-mac-code
  - lem-it-awgn-feedback-rate-splitting-achievable
  - thm-it-cover-leung-feedback-mac-inner-bound
  - thm-it-two-user-real-awgn-mac-capacity-region
  - lem-it-cover-elgamal-salehi-conditional-packing
  - thm-it-ozarow-awgn-mac-feedback-capacity-region
  - thm-it-cover-el-gamal-salehi-correlated-source-mac-sufficient-condition
  - thm-it-finite-dmc-feedback-does-not-increase-capacity
  - thm-it-physically-degraded-dm-broadcast-capacity-region
  - thm-it-two-user-discrete-memoryless-mac-capacity-region
examples: []
---

This page develops exact capacity results for a few carefully specified multiuser channel models and two feedback/source-channel inner bounds. All alphabets and message sets are finite for the discrete channels; the Gaussian channels are real, memoryless, have independent $N(0,N)$ noise with $N>0$, and use expected average block-power constraints. Rates and entropies use natural logarithms and nats per use. For channel-coding results, error means average joint message error; for the correlated-source code, it means average joint source-block error. Capacity regions are closures of achievable rates; the proofs first construct strict interior rates and handle boundary cases by closure or singleton-message codes.

The independent-private-message, no-feedback DM-MAC region uses conditional product inputs given a public finite time-sharing variable. The Gaussian MAC proof is separate and handles continuous densities and power constraints directly. A physically degraded broadcast channel is fixed by the factorization $W_1(y_1|x)W_2(y_2|y_1)$, with receiver 1 stronger. Perfect output feedback does not enlarge point-to-point finite-DMC capacity, while for positive powers it enlarges the two-user AWGN-MAC region, exactly characterized by the Ozarow correlation parameter. The Cover–Leung expression is only an inner bound for general DM-MAC feedback. The Cover–El Gamal–Salehi condition is only sufficient for transmitting correlated IID sources; no general network capacity formula is claimed.

The first diagram gives the two-user MAC interfaces. Solid arrows show message-to-encoder and encoder-to-channel paths. Dashed arrows indicate the optional noiseless causal feedback used only in the feedback-code definitions; removing them gives the no-feedback model. The second diagram records the physical degradation order in the broadcast factorization. The third diagram separates correlated source observations and their encoders before they enter a common MAC decoder. The diagrams summarize code interfaces and are not used as proof steps.

```tikz
\begin{tikzpicture}[>=stealth, node distance=1.7cm]
\node (m1) {$M_1$};
\node[draw,right of=m1] (e1) {encoder 1};
\node (x1) [right of=e1] {$X_1$};
\node (m2) [below of=m1] {$M_2$};
\node[draw,right of=m2] (e2) {encoder 2};
\node (x2) [right of=e2] {$X_2$};
\node[draw,right of=x1,yshift=-.85cm] (ch) {$W(y|x_1,x_2)$};
\node (y) [right of=ch] {$Y$};
\node[draw,right of=y] (dec) {joint decoder};
\draw[->] (m1)--(e1); \draw[->] (e1)--(x1); \draw[->] (m2)--(e2); \draw[->] (e2)--(x2);
\draw[->] (x1)--(ch); \draw[->] (x2)--(ch); \draw[->] (ch)--(y); \draw[->] (y)--(dec);
\draw[->,dashed,bend left=30] (y) to node[above] {$Y^{i-1}$} (e1);
\draw[->,dashed,bend right=30] (y) to node[below] {$Y^{i-1}$} (e2);
\end{tikzpicture}
```

```tikz
\begin{tikzpicture}[>=stealth, node distance=2.2cm]
\node (x) {$X$};
\node[draw,right of=x] (w1) {$W_1(y_1|x)$};
\node (y1) [right of=w1] {$Y_1$};
\node[draw,right of=y1] (w2) {$W_2(y_2|y_1)$};
\node (y2) [right of=w2] {$Y_2$};
\draw[->] (x)--(w1); \draw[->] (w1)--(y1); \draw[->] (y1)--(w2); \draw[->] (w2)--(y2);
\end{tikzpicture}
```

```tikz
\begin{tikzpicture}[>=stealth, node distance=1.8cm]
\node (s1) {$S_1^n$}; \node[draw,right of=s1] (f1) {$f_1$}; \node (x1) [right of=f1] {$X_1^n$};
\node (s2) [below of=s1] {$S_2^n$}; \node[draw,right of=s2] (f2) {$f_2$}; \node (x2) [right of=f2] {$X_2^n$};
\node[draw,right of=x1,yshift=-.85cm] (w) {$W^n$}; \node (y) [right of=w] {$Y^n$}; \node[draw,right of=y] (g) {$g$};
\draw[->] (s1)--(f1); \draw[->] (f1)--(x1); \draw[->] (s2)--(f2); \draw[->] (f2)--(x2);
\draw[->] (x1)--(w); \draw[->] (x2)--(w); \draw[->] (w)--(y); \draw[->] (y)--(g);
\end{tikzpicture}
```
