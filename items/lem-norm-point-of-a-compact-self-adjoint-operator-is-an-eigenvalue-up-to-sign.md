---
id: lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign
kind: lemma
title: Norm point of a compact self adjoint operator is an eigenvalue up to sign
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form, def-self-adjoint-positive-unitary-and-normal-operator, thm-hilbert-adjoint-properties, def-hilbert-space-adjoint, def-compact-linear-operator, thm-compact-implies-the-other-compactness-forms, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-hilbert-space, def-operator-norm, def-bounded-linear-operator, thm-bounded-linear-operator-equivalences, def-metric-convergence, lem-metric-limits-unique, thm-recursion, thm-well-ordering-principle, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.2, Theorem 3.6 (printed pp. 73–74)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §2, Theorem 2.3"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
real or complex Hilbert space ([[def-hilbert-space]]) and let
$T\in\mathcal B(H)$ be a nonzero compact self-adjoint operator
([[def-compact-linear-operator]],
[[def-self-adjoint-positive-unitary-and-normal-operator]],
[[def-bounded-linear-operator]]). Then either $\|T\|$ or $-\|T\|$ is an
eigenvalue of $T$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]) and
possesses a unit eigenvector; here $\|T\|>0$.

## Facts & Assumptions

**Given:** Countable Choice, a nonzero compact self-adjoint operator $T$ on a Hilbert space $H$, and the quadratic form $q(x)=\langle Tx,x\rangle$.

[A1] **Norm formula and positivity of the norm.** $\|T\|=\sup\{|q(x)|:\|x\|=1\}$ with the empty-supremum convention; $T\ne0$ forces $H\ne\{0\}$ and $\|T\|>0$, and for every real $\varepsilon>0$ there is a unit vector $u$ with $|q(u)|>\|T\|-\varepsilon$ ([[lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form]], [[def-operator-norm]]).

[A2] **Self-adjointness.** $q$ is real-valued and $\langle Tx,y\rangle=\langle x,Ty\rangle$ for all $x,y$, so $\|Tv\|^{2}=\langle Tv,Tv\rangle=\langle T^{2}v,v\rangle$ for every $v\in H$ ([[def-self-adjoint-positive-unitary-and-normal-operator]], [[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]]).

[A3] **Compactness and ZF metrisation.** compactness of $T$ is tested on the closed unit ball: for compact $T$ the set $\overline{T(\overline B)}$ is a compact subset of $H$, and conversely a compact closure of that image forces $T$ to be compact, where $\overline B=\{x\in H:\|x\|\le1\}$ is the closed unit ball; a compact metric space is sequentially compact, and that implication is a theorem of ZF ([[def-compact-linear-operator]], [[thm-compact-implies-the-other-compactness-forms]]).

[A4] **Continuity, norms and limits.** Bounded linear operators are continuous and satisfy $\|Tv\|\le\|T\|\,\|v\|$ ([[def-bounded-linear-operator]], [[thm-bounded-linear-operator-equivalences]], [[def-operator-norm]]); limits of sequences in a metric space are unique, convergence of norms gives $\|x_n\|\to\|x\|$, and a continuous map carries convergent sequences to convergent sequences ([[def-metric-convergence]], [[lem-metric-limits-unique]]).

[A5] **Choice and enumeration.** Countable Choice supplies one unit vector for each $n\in\mathbb N$ from the nonempty set $\{u:\|u\|=1,\ |q(u)|>\|T\|-1/n\}$; the increasing enumeration of an infinite subset of $\mathbb N$ is defined by recursion and is choice-free ([[def-countable-choice]], [[thm-recursion]], [[thm-well-ordering-principle]]).

[A6] **Eigenvalues.** A scalar $\lambda$ is an eigenvalue of $T$ when $Tx=\lambda x$ for some $x\ne0$, and such an $x$ is a unit eigenvector when in addition $\|x\|=1$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, a nonzero compact self-adjoint $T$, its quadratic form $q$, and the closed unit ball $\overline B$.

1.1 **Approximate maximisers.** By [A1], for every $n\ge1$ the set of unit vectors $u$ with $|q(u)|>\|T\|-1/n$ is nonempty (if $\|T\|>0$ the supremum in [A1] is approached by unit vectors, so such a vector exists whenever $\|T\|>1/n$, and when $\|T\|\le1/n$ it suffices to take a unit vector with $q(u)\ne0$, which exists because $\|T\|=\sup_{\|u\|=1}|q(u)|>0$; the self-adjoint operator $\operatorname{diag}(1,-1)$ shows that not every unit vector has $q(u)\ne0$ in the boundary case), so Countable Choice [A5] produces a sequence $(x_n)_{n\ge1}$ of unit vectors with $|q(x_n)|>\|T\|-1/n$ for all $n$. [A1, A5]

2.1 **A constant sign on a subsequence.** Put $P:=\{n\in\mathbb N:n\ge1\}$ and $A:=\{n\in P:q(x_n)\ge0\}$. Since the infinite set $P$ is the union of $A$ and $P\setminus A$, at least one of those two sets is infinite. If $A$ is infinite let $n_0<n_1<\cdots$ be its increasing enumeration and set $\lambda:=\|T\|$; otherwise let $n_0<n_1<\cdots$ enumerate the infinite set $P\setminus A$ and set $\lambda:=-\|T\|$. In either case every $n_k\ge1$, so $x_{n_k}$ is defined. Then $\lambda\in\{-\|T\|,\|T\|\}$ and for every $k$, because $q(x_{n_k})$ has the sign of $\lambda$ on this subsequence and $|\lambda|=\|T\|$, $\lambda q(x_{n_k})=\|T\|\,|q(x_{n_k})|\ge\|T\|(\|T\|-1/n_k)$ and $\lambda^{2}=\|T\|^{2}$. [step 1.1, A1, A5, algebra]

2.2 **A convergent image subsequence.** The set $C:=\overline{T(\overline B)}$ is compact by compactness of $T$ [A3], and $Tx_{n_k}\in C$ for every $k$ because $\|x_{n_k}\|=1$ by [step 1.1], so by sequential compactness of the compact metric space $C$ [A3] there are a strictly increasing sequence $k_0<k_1<\cdots$ and a point $y\in C$ with $Tx_{n_{k_j}}\to y$. [step 1.1, A3]

3.1 **The residual tends to zero.** For every $k$, using [A2], $\|x_{n_k}\|=1$ and [step 2.1], $\|(T-\lambda I)x_{n_k}\|^{2}=\|Tx_{n_k}\|^{2}-2\lambda q(x_{n_k})+\lambda^{2}\le\|T\|^{2}-2\|T\|(\|T\|-1/n_k)+\|T\|^{2}=2\|T\|/n_k$, the inequality using $\|Tx_{n_k}\|\le\|T\|$; since $n_k\ge k$ and $\|T\|$ is fixed, $\|(T-\lambda I)x_{n_k}\|\to0$. [step 2.1, step 2.2, A1, A2, A4, algebra]

4.1 **The approximating vectors converge.** For each $j$ the identity $x_{n_{k_j}}=\lambda^{-1}(Tx_{n_{k_j}}-(T-\lambda I)x_{n_{k_j}})$ holds because $\lambda\ne0$ (indeed $|\lambda|=\|T\|>0$ by [A1]); the first term converges to $\lambda^{-1}y$ by [step 2.2] and the second to $0$ by [step 3.1], so $x_{n_{k_j}}\to x:=\lambda^{-1}y$. [step 2.2, step 3.1, algebra]

5.1 **Conclusion.** By continuity of the norm and $\|x_{n_{k_j}}\|=1$ we get $\|x\|=1$ [A4], and by continuity of $T$ and uniqueness of limits $Tx_{n_{k_j}}\to Tx$ while also $Tx_{n_{k_j}}\to y=\lambda x$, so $Tx=\lambda x$; thus $\lambda\in\{-\|T\|,\|T\|\}$ is an eigenvalue of $T$ with the unit eigenvector $x$. [step 4.1, A4, A6] ∎
