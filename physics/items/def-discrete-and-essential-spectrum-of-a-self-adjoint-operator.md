---
id: def-discrete-and-essential-spectrum-of-a-self-adjoint-operator
kind: definition
title: "Discrete and essential spectrum of a self-adjoint operator"
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-projection-valued-measure, lem-unbounded-pvm-integral-is-well-defined-and-closed, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-axiom-of-choice]
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 6.4, (6.29)-(6.30), p.170; local projection proof supplied here"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Definition 6.13 (compact resolvent), Sec. 6.1.2"
verification:
  audited: 2026-09-22
---

## Definition

Assume the Axiom of Choice. Let $A$ be a self-adjoint operator on a complex Hilbert space $H$ with
spectral projection valued measure $E$ on $\mathbb R$
([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]). The **discrete
spectrum** $\sigma_{\mathrm d}(A)$ is the set of eigenvalues of $A$ that are
isolated points of $\sigma(A)$ and whose eigenspace is finite dimensional; the
**essential spectrum** is
$$\sigma_{\mathrm{ess}}(A):=\sigma(A)\setminus\sigma_{\mathrm d}(A),$$
with $\sigma(A)$ as in [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]].

For $H=\{0\}$ use its unique PVM directly: the spectrum and both parts
are empty and every projection has rank zero. Below suppose $H\ne\{0\}$,
as required by the cited spectral theorem.

**Spectral-projection description, with proofs.** Fix $\lambda\in\mathbb R$ and write
$P_\varepsilon:=E((\lambda-\varepsilon,\lambda+\varepsilon))$ for
$\varepsilon>0$.

Here rank means the algebraic dimension of the range when finite; rank
$=\infty$ means the range is not finite dimensional. The calculus
[[thm-unbounded-borel-functional-calculus]] gives the support facts:
$E(\mathbb R\setminus\sigma(A))=0$, and every open interval about a
spectral point has nonzero projection. Projections on disjoint sets have
orthogonal ranges, and $E(B)E(C)=E(B\cap C)$
[[def-projection-valued-measure]].

1. *$E(\{\lambda\})$ is the projection onto $\ker(A-\lambda)$.* If
   $x=E(\{\lambda\})x$, its scalar measure $E_x$ is supported on
   $\{\lambda\}$ by the projection identity. Thus
   $\int\mu^2dE_x=\lambda^2\|x\|^2<\infty$, so $x\in D(A)$, and
   $$\|(A-\lambda)x\|^2=\int|\mu-\lambda|^2dE_x=0.$$
   The domain and norm identities are supplied by the unbounded calculus and
   [[lem-unbounded-pvm-integral-is-well-defined-and-closed]]. Hence $Ax=\lambda x$.
   Conversely, for an eigenvector (or the zero vector) the same norm identity
   gives zero integral. On $\{|\mu-\lambda|\ge1/n\}$ this bounds the measure
   by $n^2$ times that zero integral; taking the countable union shows
   $E_x(\mathbb R\setminus\{\lambda\})=0$.
   Since $\|(I-E(\{\lambda\}))x\|^2$ equals this scalar measure,
   $E(\{\lambda\})x=x$.
2. *A finite-rank interval contains only finitely many spectral points.*
   If $P_\varepsilon$ has rank $r<\infty$ and its interval contained $r+1$
   distinct spectral points, choose disjoint small open intervals about those
   finitely many points, all contained in the given interval. Each has a
   nonzero projection by support. Choose one unit vector in each range.
   They are orthonormal vectors in $\operatorname{ran}P_\varepsilon$, hence
   linearly independent (take inner products with each vector), contradicting
   its dimension $r$. Thus there are at most $r$ spectral points there.
   In particular any $\lambda\in\sigma(A)$ with such a finite-rank
   $P_\varepsilon$ is isolated: take a smaller interval around $\lambda$
   excluding the other finitely many points. For that interval the projection
   is $E(\{\lambda\})$ by support, is nonzero by support, and has finite rank
   since its range lies in $\operatorname{ran}P_\varepsilon$. By item 1,
   $\lambda$ is an eigenvalue of finite multiplicity.
3. *The two rank characterizations.* If $\lambda\in\sigma_{\mathrm d}(A)$,
   an isolating interval has projection $E(\{\lambda\})$, of finite rank
   by item 1. Conversely, if $\lambda$ is an eigenvalue and some
   $P_\varepsilon$ has finite rank, item 2 proves it discrete. Hence
   $$\lambda\in\sigma_{\mathrm d}(A)\quad\Longleftrightarrow\quad\lambda\text{ is an eigenvalue and some }P_\varepsilon\text{ has finite rank}.$$
   If $\lambda\in\sigma_{\mathrm{ess}}(A)$, item 2 excludes every finite-rank
   interval. Conversely, if every $P_\varepsilon$ has infinite rank, each is
   nonzero, so support puts $\lambda$ in $\sigma(A)$, and the just-proved
   discrete characterization excludes it from $\sigma_{\mathrm d}(A)$.
   Therefore
   $$\lambda\in\sigma_{\mathrm{ess}}(A)\quad\Longleftrightarrow\quad\operatorname{rank}P_\varepsilon=\infty\text{ for every }\varepsilon>0.$$
4. *$\sigma_{\mathrm{ess}}(A)$ is closed.* If $\lambda_n\in
   \sigma_{\mathrm{ess}}(A)$ and $\lambda_n\to\lambda$, then for every
   $\varepsilon>0$ some $n$ has $(\lambda_n-\varepsilon/2, \lambda_n+
   \varepsilon/2)\subseteq(\lambda-\varepsilon,\lambda+\varepsilon)$, so
   $\operatorname{rank}P_\varepsilon\ge\operatorname{rank}P_{\varepsilon/2}^{(n)}
   =\infty$ and $\lambda\in\sigma_{\mathrm{ess}}(A)$ by item 3.

The closure conclusion is in $\mathbb R$, and also in $\mathbb C$ since
$\mathbb R$ is closed there. A spectral accumulation point has infinitely
many spectral points in every surrounding interval, so item 2 forces infinite
rank. An isolated eigenvalue of infinite multiplicity has its infinite-dimensional
eigenspace inside every interval range by item 1. Consequently an accumulation point of $\sigma(A)$ and an isolated eigenvalue of
infinite multiplicity both lie in $\sigma_{\mathrm{ess}}(A)$, and $\sigma(A)$
is the disjoint union of $\sigma_{\mathrm d}(A)$ and
$\sigma_{\mathrm{ess}}(A)$.
