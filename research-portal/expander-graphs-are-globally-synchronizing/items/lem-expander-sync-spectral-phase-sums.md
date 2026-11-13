---
id: lem-expander-sync-spectral-phase-sums
title: Spectral estimates for phase Fourier sums
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-graph-notation
  - def-expander-sync-adjacency-expander
  - def-expander-sync-daido
  - def-expander-sync-matrix-order
  - def-expander-sync-centered-matrices
  - prop-expander-prereq-constant-projection
  - def-expander-prereq-phasor-calculus
  - math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
dependency_roles:
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-sync-adjacency-expander: mathematical-premise
  def-expander-sync-daido: mathematical-premise
  def-expander-sync-matrix-order: mathematical-premise
  def-expander-sync-centered-matrices: mathematical-premise
  prop-expander-prereq-constant-projection: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
  math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  math:def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 12–13, proof of Lemma 2.1; p. 18, Section 3
      statement: The proof estimates the quadratic forms for the first and second
        phase phasors and the constant vector, and derives a lower bound for the
        ordered sum of squared cosines. It also asserts an equality when the
        number of edges is d*n/2.
      hypotheses: The article considers an expander and a stable state, with the
        connected-graph and phase conventions stated before Lemma 2.1. Section 3
        counts a self-loop once in the degree.
      reading_limits: The cited article text was inspected for attribution and for the
        loop convention. The local proof below uses the declared mathematical
        suppliers; it does not use the article's claim as a premise.
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 4
---

## Statement

Let $G=(V,E)$ be a finite undirected $(n,d^*,\alpha)$-expander with $n=|V|>0$, symmetric binary adjacency matrix $A$, and possible self-loops. Thus $\Delta_A=A-(d^*/n)J$ and $\|\Delta_A\|\leq\alpha d^*$, where $J$ is the all-ones matrix. Let $\theta_x$ be phases modulo $2\pi$, and put $\rho_k=n^{-1}\sum_{x\in V}e^{ik\theta_x}$ for $k=1,2$. With $f(x)=e^{i\theta_x}$, $g(x)=e^{2i\theta_x}$ and $h(x)=1$, and with $\langle u,v\rangle=\sum_x\overline{u(x)}v(x)$, one has

$$|\langle f,Af\rangle-d^*n|\rho_1|^2|\leq\alpha d^*n,\quad |\langle g,Ag\rangle-d^*n|\rho_2|^2|\leq\alpha d^*n,\quad |\langle h,Ah\rangle-d^*n|\leq\alpha d^*n.$$

Consequently,

$$\sum_{x,y\in V}A_{xy}\cos^2(\theta_x-\theta_y)\geq\frac{d^*n}{2}(1+|\rho_2|^2)-\alpha d^*n.$$

If $\sum_{x,y}A_{xy}=d^*n$, the constant-vector estimate is an equality with zero error, and the last lower bound improves to $d^*n(1+|\rho_2|^2)/2-\alpha d^*n/2$. This equality holds for a $d^*$-regular graph. If $\ell$ is the number of self-loops, then $\sum_{x,y}A_{xy}=2|E|-\ell$; in particular $|E|=d^*n/2$ implies the required equality when $\ell=0$.

## Facts & Assumptions

[F1] The expander definition gives $\Delta_A=A-(d^*/n)J$ and $\|\Delta_A\|\leq\alpha d^*$; graph notation makes $A$ real symmetric and counts a loop once in a row sum ([[def-expander-sync-adjacency-expander]], [[def-expander-sync-centered-matrices]], [[def-expander-sync-graph-notation]]).

[F2] The vertex inner product and matrix action are as stated, and $u^*Ju=|\sum_x u(x)|^2$ for every vertex vector $u$ ([[def-expander-sync-matrix-order]], [[prop-expander-prereq-constant-projection]]).

[F3] The Daido parameters are the stated averages, independent of phase lifts. Unit phasors have modulus one, obey the exponential addition law, and have real part equal to cosine ([[def-expander-sync-daido]], [[def-expander-prereq-phasor-calculus]]).

[F4] Cauchy–Schwarz and the induced operator norm imply $|\langle u,\Delta_Au\rangle|\leq\|\Delta_A\|\,\|u\|^2$ for every vertex vector $u$ ([[math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[def-expander-sync-matrix-order]]).

## Proof

**Given:** The graph, expander bound and phase configuration in the statement.

**Goal:** Establish the three estimates, the cosine-square bound and the corrected equality cases.

**Proof technique:** direct.

1.1 By [F1], $A=(d^*/n)J+\Delta_A$. By [F2] and [F3], for $u=f,g$ respectively, $u^*Ju=n^2|\rho_k|^2$ with $k=1,2$, and $\|u\|^2=n$; for $u=h$, $h^*Jh=n^2$ and $\|h\|^2=n$. Applying [F4] and the bound in [F1] to these three vectors gives all three displayed quadratic-form estimates. [given, F1, F2, F3, F4, algebra]

2.1 Matrix expansion and the phasor identities give $\operatorname{Re}\langle g,Ag\rangle=\sum_{x,y}A_{xy}\cos(2\theta_x-2\theta_y)$. Since $A$ is real symmetric, $\langle g,Ag\rangle$ is real. The identities in [F3] also give $2\cos^2 t=1+\cos(2t)$: write $z=e^{it}$, use $z+\overline z=2\cos t$, $z\overline z=1$, and $\operatorname{Re}z^2=\cos(2t)$. Thus twice the cosine-square sum equals $\langle h,Ah\rangle+\langle g,Ag\rangle$. Taking the two lower estimates from step 1.1 proves the stated bound. [F1, F2, F3, step 1.1, algebra]

3.1 If the ordered entry sum is $d^*n$, then $\langle h,Ah\rangle=d^*n$ by [F2], so using that equality in step 2.1 gives the improved bound. For a $d^*$-regular graph every row sum is $d^*$, giving the ordered sum $d^*n$. Each non-loop edge contributes two ordered entries and each loop one, so the ordered sum is $2|E|-\ell$; the stated loop-free edge-count case follows. These calculations also complete the equality assertions. [given, F1, F2, step 2.1, algebra] ∎

## Source notes

The estimates and the edge-count comparison are attributed to the proof of Lemma 2.1 in [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF pages 12–13. The loop correction follows from the graph convention stated above; the article is not a proof premise.
