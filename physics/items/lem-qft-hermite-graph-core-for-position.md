---
id: lem-qft-hermite-graph-core-for-position
kind: lemma
title: Hermite functions form a graph core for position multiplication
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-countable-choice
  - def-complex-exponential
  - def-unbounded-linear-operator-domain-and-graph
  - def-densely-defined-closed-and-closable-operator
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - def-fourier-transform-on-l-one-of-rn
  - def-orthogonality-and-orthogonal-complement
  - cor-uniqueness-of-the-l-one-fourier-transform
  - lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-dominated-convergence
  - thm-double-orthogonal-complement-is-closure
  - thm-nrqm-oscillator-hermite-recurrence
  - lem-complex-exponential-series-converges-everywhere
dependency_roles:
  def-countable-choice: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  def-orthogonality-and-orthogonal-complement: mathematical-premise
  cor-uniqueness-of-the-l-one-fourier-transform: mathematical-premise
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-double-orthogonal-complement-is-closure: mathematical-premise
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  lem-complex-exponential-series-converges-everywhere: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Gerald Teschl, Mathematical Methods in Quantum Mechanics, §8.3 (the harmonic oscillator)
      url: https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf
      locator: Complete 317-page book; §8.3, printed pp. 178–179.
    - title: Semyon Dyatlov, Lecture Notes for MIT 18.155, §§11.1.1, 11.1.4–11.1.5 (Schwartz functions and Fourier inversion)
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: Full 266-page lecture notes; printed pp. 120–125.
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume the Axiom of Countable Choice [[def-countable-choice]]. Let
$H=L^2(\mathbb R,dx;\mathbb C)$ with its first-variable-linear integral pairing,
and let $Qf(x)=xf(x)$ on
$D(Q)=\{f\in H:xf\in H\}$. Let $(g_n)_{n\ge0}$ be the Hermite functions of
[[thm-nrqm-oscillator-hermite-recurrence]]. Then $Q$ is self-adjoint on $D(Q)$,
and the finite linear span of the $g_n$ is a core for $Q$: it is dense in
$D(Q)$ for the graph norm
$\|f\|_Q=(\|f\|_2^2+\|Qf\|_2^2)^{1/2}$.

## Facts & Assumptions

**Given:** Countable Choice; the complex Hilbert space $L^2(\mathbb R)$; the
real multiplication map $Qf=xf$ on its maximal domain; and the Hermite
functions from [[thm-nrqm-oscillator-hermite-recurrence]].

[A1] Assume the Axiom of Countable Choice. [[def-countable-choice]]

[F1] $L^2(\mathbb R)$ is complete for its integral pairing and satisfies
Cauchy–Schwarz. [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]

[F2] The oscillator functions have the form
$g_n=H_ng_0/\sqrt{2^nn!}$, where $g_0(x)=\pi^{-1/4}e^{-x^2/2}$, each $H_n$
has degree $n$ with nonzero leading coefficient, and
$\sqrt2\,xg_n=\sqrt n\,g_{n-1}+\sqrt{n+1}\,g_{n+1}$.
[[thm-nrqm-oscillator-hermite-recurrence]]

[F3] The $L^1$ Fourier transform uses
$\widehat h(\xi)=\int h(x)e^{-2\pi i\xi x}\,dx$; under Countable Choice it is
injective on $L^1(\mathbb R)$. [[def-fourier-transform-on-l-one-of-rn]]
[[cor-uniqueness-of-the-l-one-fourier-transform]]

[F4] The complex exponential is given by its everywhere convergent power
series, and dominated convergence applies to integrable majorants.
[[def-complex-exponential]]
[[lem-complex-exponential-series-converges-everywhere]]
[[thm-dominated-convergence]]

[F5] Polynomial multiples of a Gaussian and shifted Gaussian moments are
integrable. [[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]

[F6] In a Hilbert space, a subspace with zero orthogonal complement is dense.
[[def-orthogonality-and-orthogonal-complement]]
[[thm-double-orthogonal-complement-is-closure]]

## Proof

1.1 For $f\in H$, put $f_m=f\mathbf1_{[-m,m]}$. Then $f_m\in D(Q)$ because $|x|\le m$ on its support, and $f_m\to f$ in $L^2$ by dominated convergence applied to $|f_m-f|^2\le |f|^2$; hence $D(Q)$ is dense. For $f,g\in D(Q)$, $xf\overline g$ is integrable by Cauchy–Schwarz, and real-valuedness of $x$ gives $\langle Qf,g\rangle=\langle f,Qg\rangle$. [given, F1, F4, algebra]

1.2 Equip $\mathcal G=\{f:\int_{\mathbb R}(1+x^2)|f(x)|^2dx<\infty\}$ with the explicit weighted inner product $\langle f,g\rangle_{\mathcal G}:=\int_{\mathbb R}(1+x^2)f(x)\overline{g(x)}\,dx$. Multiplication by $\sqrt{1+x^2}$ is an onto isometry from $\mathcal G$ to $L^2(\mathbb R)$, with inverse multiplication by $(1+x^2)^{-1/2}$, so $\mathcal G$ is Hilbert. Its norm equals $\|f\|_Q$ on $D(Q)$. Suppose $f\in\mathcal G$ is orthogonal to every $g_n$ in this weighted inner product. Since the $H_n$ have successive degrees and nonzero leading coefficients [F2], their finite span is all polynomials. Therefore $h(x)=(1+x^2)f(x)g_0(x)$ lies in $L^1$ by Cauchy–Schwarz and $\int h(x)x^jdx=0$ for every $j\ge0$. [A1, F1, F2, F5, construct]

2.1 Let $g\in D(Q^*)$ and write $k=Q^*g$. For each $m$, the vector $f_m=(xg-k)\mathbf1_{[-m,m]}$ belongs to $D(Q)$ since $x$ is bounded there and $g,k\in L^2$. The adjoint identity for $f_m$ yields $0=\langle Qf_m,g\rangle-\langle f_m,k\rangle =\int_{-m}^m|xg-k|^2\,dx$. Thus $xg=k$ almost everywhere on every $[-m,m]$, hence on $\mathbb R$; since $k\in L^2$, $g\in D(Q)$ and $Q^*g=Qg$. Conversely, symmetry in step 1.1 gives $D(Q)\subseteq D(Q^*)$ and $Q^*f=Qf$. Therefore $Q=Q^*$. [step 1.1, F1, algebra]

2.2 Fix $\xi\in\mathbb R$ and let $S_N(x)=\sum_{j=0}^N(-2\pi i\xi x)^j/j!$. By [F4], $S_N(x)\to e^{-2\pi i\xi x}$ and $|S_N(x)|\le e^{2\pi|\xi||x|}$. The majorant $|h(x)|e^{2\pi|\xi||x|}$ is integrable: Cauchy–Schwarz bounds its integral by $\|f\|_{\mathcal G}\bigl(\int(1+x^2)g_0(x)^2e^{4\pi|\xi||x|}dx\bigr)^{1/2}$, and the latter integral is finite because completing the square gives $-x^2+4\pi|\xi||x|=-(|x|-2\pi|\xi|)^2+(2\pi|\xi|)^2$, so [F5] applies. Dominated convergence and the vanishing moments from step 1.2 imply $\widehat h(\xi)=\lim_N\int hS_N=0$. Since $\xi$ was arbitrary, $\widehat h$ vanishes identically. [step 1.2, F1, F3, F4, F5, algebra]

3.1 Fourier uniqueness [F3] gives $h=0$ almost everywhere. Since $1+x^2>0$ and $g_0(x)>0$ for every $x$, this implies $f=0$ in $\mathcal G$. Thus the orthogonal complement of the Hermite span in $\mathcal G$ is zero; [F6] makes that span dense in $\mathcal G$. Because the $\mathcal G$ norm is the graph norm of $Q$, the Hermite span is a graph core, proving the statement. [step 1.2, step 2.2, F2, F3, F6] ∎
