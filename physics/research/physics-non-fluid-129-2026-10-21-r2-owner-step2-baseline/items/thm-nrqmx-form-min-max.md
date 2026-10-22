---
id: thm-nrqmx-form-min-max
kind: theorem
domain: mathematics
library: mathematics
title: Form min-max below the essential spectrum
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
deps:
  - thm-nrqmx-closed-form-representation
  - def-discrete-and-essential-spectrum-of-a-self-adjoint-operator
  - thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - thm-unbounded-borel-functional-calculus
  - thm-spectral-theorem-for-compact-self-adjoint-operators
  - def-compact-linear-operator
  - lem-compositions-with-a-compact-operator-are-compact
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  thm-nrqmx-closed-form-representation: mathematical-premise
  def-discrete-and-essential-spectrum-of-a-self-adjoint-operator: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
  thm-spectral-theorem-for-compact-self-adjoint-operators: mathematical-premise
  def-compact-linear-operator: mathematical-premise
  lem-compositions-with-a-compact-operator-are-compact: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Phan Thanh Nam, Functional Analysis II, lecture notes, Winter 2020-2021,
        Ludwig-Maximilians-Universität München
      url: https://www.math.lmu.de/~nam/LectureNotesFA2021.pdf
      locator: "Chapter 2, §2.3, printed pp.17-18: min-max theorem, essential-spectrum
        threshold, proof, and compact-resolvent eigenbasis criterion."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $H\ne\{0\}$ be a complex Hilbert space and
let $A$ be a self-adjoint operator with $A\ge-cI$ for some $c\ge0$. Let
$E_A$ be its spectral projection-valued measure, let
$Q(A)=D((A+cI)^{1/2})$, and define the associated form by
$$q_A[u]=\|(A+cI)^{1/2}u\|^2-c\|u\|^2\quad(u\in Q(A)).$$
Set $\alpha=\inf\sigma_{\mathrm{ess}}(A)$, with $\alpha=+\infty$ when the
essential spectrum is empty. For each integer $k\ge1$, put
$$\lambda_k(A)=\inf_{\substack{L\subseteq Q(A)\text{ linear},\ \dim L=k}}\ \sup_{\substack{u\in L\\\|u\|=1}}q_A[u],$$
where the infimum of an empty family is $+\infty$. Then $\lambda_k(A)$ is the
$k$th eigenvalue below $\alpha$, counted with multiplicity, when at least $k$
such eigenvalues exist; otherwise $\lambda_k(A)=\alpha$. If the inclusion
$Q(A)\hookrightarrow H$ is compact in the form norm
$\|u\|_{Q(A)}^2=q_A[u]+(c+1)\|u\|^2$, then $A$ has a complete orthonormal
eigenbasis; every eigenvalue has finite multiplicity, and the only possible
accumulation is at $+\infty$.

## Statement references

[[thm-nrqmx-closed-form-representation]]

[[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]]

## Facts & Assumptions

**Given:** Choice, a nonzero complex Hilbert space $H$, a self-adjoint
$A\ge-cI$, its spectral PVM $E_A$, and the form domain $Q(A)$.

[A1] The Axiom of Choice supplies the unbounded spectral theorem and Borel
calculus for $A$ ([[def-axiom-of-choice]],
[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]],
[[thm-unbounded-borel-functional-calculus]]).

[F1] The associated form is closed, has domain $D((A+cI)^{1/2})$, and satisfies
$q_A[u]=\int(\lambda+c)\,dE_u(\lambda)-c\|u\|^2$; its form norm with one
additional unit shift is $\|(A+cI+I)^{1/2}u\|$
([[thm-nrqmx-closed-form-representation]],
[[thm-unbounded-borel-functional-calculus]]).

[F2] The discrete spectrum consists of isolated eigenvalues of finite
multiplicity; the essential spectrum is its complement. For each real $s$,
$\lambda\in\sigma_{\mathrm{ess}}(A)$ exactly when every interval about
$\lambda$ has infinite-rank spectral projection, and $\sigma_{\mathrm{ess}}(A)$
is closed ([[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]]).

[F3] The spectral PVM is carried by $\sigma(A)$, and its increasing interval
projections converge strongly to $I$; bounded real Borel functions of $A$
obey the product and norm identities
([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]],
[[thm-unbounded-borel-functional-calculus]]).

[F4] A positive compact self-adjoint operator has finite-dimensional nonzero
eigenspaces, only finitely many eigenvalues outside any neighborhood of zero,
and the closed span of its nonzero eigenspaces is the orthogonal complement of
its kernel ([[thm-spectral-theorem-for-compact-self-adjoint-operators]]).

[F5] A compact inclusion followed by a bounded operator is compact; compact
resolvents are bounded compact operators on $H$
([[def-compact-linear-operator]],
[[lem-compositions-with-a-compact-operator-are-compact]]).

## Proof

**Given:** [A1] and the operator, PVM, and form in the Statement.

1.1 By Choice [A1], [F1] and the spectral calculus give, for $u\in Q(A)$, $q_A[u]=\int\lambda\,dE_u(\lambda)$; the lower bound ensures this integral is finite after the stated shift. The form norm in the Statement is exactly $\|(A+(c+1)I)^{1/2}u\|$. [A1, F1, F3, given]

1.2 Fix $t<\alpha$. Since $A\ge-cI$, the spectral points in $(-\infty,t]$ lie in the compact interval $[-c,t]$. If this interval contained infinitely many spectral points, compactness of the interval and closedness of $\sigma(A)$ would give an accumulation point $s\le t$ in $\sigma(A)$. Such an accumulation point is essential by [F2], contradicting $s\le t<\alpha$. Thus there are finitely many spectral points below $t$, each isolated with finite multiplicity. By [F3], $E_A((-\infty,t))$ is supported on their eigenspaces, so it has finite rank. [F2, F3, given, algebra]

1.3 Now assume the form-domain inclusion is compact. The map $(A+(c+1)I)^{-1}:H\to Q(A)$ is bounded because $\|(A+(c+1)I)^{1/2}(A+(c+1)I)^{-1}f\|\le\|f\|$ by [F3]. Composing with the compact inclusion $Q(A)\hookrightarrow H$ shows that this resolvent is compact by [F5]. It is positive, self-adjoint and injective. By [F4], its nonzero eigenspaces have finite dimension and span $H$. On each such subspace, $A=(A+(c+1)I)- (c+1)I$ has eigenvalue $r^{-1}-(c+1)$ when the resolvent eigenvalue is $r>0$. The compact spectral theorem says these $r$ can accumulate only at zero; therefore the resulting eigenvalues of $A$ have finite multiplicity and can accumulate only at $+\infty$. This proves the compact-embedding conclusion. [F3, F4, F5, given, algebra]

2.1 Define $\nu_k=\inf\{t\in\mathbb R:\operatorname{rank}E_A((-\infty,t))\ge k\}$, with $\inf\emptyset=+\infty$. If there are at least $k$ eigenvalues below $\alpha$, their finite-rank spectral projections show that $\nu_k$ is the $k$th such eigenvalue counted with multiplicity. If fewer exist, no $t<\alpha$ has rank at least $k$. When $\alpha<\infty$, closedness of $\sigma_{\mathrm{ess}}(A)$ gives $\alpha\in\sigma_{\mathrm{ess}}(A)$, so every $t>\alpha$ contains an interval about $\alpha$ inside $(-\infty,t)$ whose spectral projection has infinite rank by [F2]; hence $\nu_k=\alpha$. When $\alpha=+\infty$, the spectrum consists only of discrete eigenvalues; if fewer than $k$ exist, their finite-dimensional eigenspaces span $H$ by [F3], so $\dim H<k$, no $k$-dimensional subspace exists, and $\nu_k=+\infty$. Thus $\nu_k$ has exactly the target value in every case. [F2, F3, step 1.2, algebra]

3.1 Let $L\subset Q(A)$ have dimension $k$, and set $m_L=\sup_{u\in L,\,\|u\|=1}q_A[u]$. By finite-dimensional Gram--Schmidt, choose an orthonormal basis $e_1,\ldots,e_k$ of $L$. For a unit vector $u=\sum_i a_i e_i$, each $|a_i|\le1$ and $q_A[u]=\sum_{i,j}a_i\overline{a_j}q_A(e_i,e_j)$, so $|q_A[u]|\le\sum_{i,j}|q_A(e_i,e_j)|<\infty$ uniformly on the unit sphere. Thus $m_L<\infty$. For any $t>m_L$, if $\operatorname{rank}E_A(( -\infty,t))<k$, the projection restricted to $L$ has a nonzero kernel; choose a unit $u\in L$ with $E_A(( -\infty,t))u=0$. Its spectral measure is supported in $[t,\infty)$, so [F1] gives $q_A[u]\ge t>m_L$, a contradiction. Hence $\operatorname{rank}E_A(( -\infty,t))\ge k$, so $\nu_k\le t$ for every $t>m_L$ and therefore $\nu_k\le m_L$. Taking the infimum over $L$ yields $\nu_k\le\lambda_k(A)$. [F1, step 2.1, algebra]

4.1 If $\nu_k<\infty$ and $t>\nu_k$, monotonicity of the interval projections gives some $s<t$ with $\operatorname{rank}E_A((-\infty,s))\ge k$. Choose a $k$-dimensional subspace $L$ of this range. Its spectral support is bounded below by $-c$ and above by $s$, hence $L\subset Q(A)$; [F1] also gives $q_A[u]\le s\|u\|^2$ on $L$. Thus $\lambda_k(A)\le s<t$; letting $t$ decrease to $\nu_k$ gives $\lambda_k(A)\le\nu_k$. If $\nu_k=+\infty$, Step 2.1 shows $\dim H<k$, so the variational infimum is also $+\infty$. Combining with Step 3.1 gives $\lambda_k(A)=\nu_k$, proving the min-max identity and its spectral interpretation. [F1, F3, step 2.1, step 3.1, algebra]

5.1 Steps 1.1-4.1 establish the form min-max characterization, including the essential-spectrum threshold and the empty-spectrum convention; Step 1.3 proves the complete discrete eigenbasis under compact form-domain embedding. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 1.3] ∎
