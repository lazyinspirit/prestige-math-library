---
id: lem-states-of-a-concretely-represented-c-star-algebra-are-weak-star-limits-of-vector-states
kind: lemma
title: States of a concretely represented C star algebra are weak star limits of finite sums of vector states
deps:
  - def-state-on-a-c-star-algebra
  - lem-value-of-a-state-at-a-self-adjoint-element-lies-between-the-spectral-bounds
  - lem-quadratic-form-of-a-self-adjoint-operator-attains-the-norm
  - cor-closed-convex-set-is-an-intersection-of-closed-half-spaces
  - def-weak-star-convergence
  - lem-spectral-permanence-for-unital-c-star-subalgebras
  - lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units
  - thm-minimal-c-star-unitization
  - lem-bounded-hilbert-operators-form-a-c-star-algebra
  - lem-c-star-positive-calculus-and-order-estimates
  - def-axiom-of-choice
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, used for the geometric separation step and inherited from the approximate-unit, spectral and PVM suppliers; no further choice is used."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix C, §C.5: Theorem C.5.5 (convex hulls of extreme positive type functions are dense, the group case of this approximation)"
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.A (states and the weak-* topology on the dual of a C*-algebra); Chapter 8, §8.B, Remark 8.B.5"
status: draft
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $B\subseteq\mathcal B(K)$ be a C\*-algebra
acting nondegenerately on a complex Hilbert space $K$, and let
$V=\{b\mapsto\langle b\eta,\eta\rangle:\eta\in K,\ \|\eta\|=1\}$ be its set
of normalized vector states
([[def-state-on-a-c-star-algebra]],
[[lem-bounded-hilbert-operators-form-a-c-star-algebra]]). Then every state
$\omega$ of $B$ belongs to the weak-* closed convex hull of $V$ in $B^*$: for
every finite list $b_1,\dots,b_n\in B$ and every $\epsilon>0$ there are unit
vectors $\eta_1,\dots,\eta_m$ and weights $\lambda_j\ge0$ with
$\sum_j\lambda_j=1$ and
$$\Bigl|\omega(b_i)-\sum_{j=1}^m\lambda_j\langle b_i\eta_j,\eta_j\rangle\Bigr|<\epsilon\qquad(i=1,\dots,n)$$
([[def-weak-star-convergence]]).

## Facts & Assumptions

**Given:** AC; a nondegenerate C\*-algebra $B\subseteq\mathcal B(K)$; the set $V$ of normalized vector functionals on $B$; the weak-* topology on $B^*$.

[F1] $B$ has a two-sided approximate unit $(u_\lambda)$ of positive contractions ([[lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units]]); positive elements of $B$ are exactly the algebraically positive ones ([[lem-c-star-positive-calculus-and-order-estimates]] — used only through this identification and $\|u_\lambda\|\le1$).

[F2] Quadratic-form detection: for self-adjoint $S\in\mathcal B(K)$, $\|S\|=\sup_{\|\eta\|=1}|\langle S\eta,\eta\rangle|$ and, for $S\ge0$, $\|S\|=\sup_{\|\eta\|=1}\langle S\eta,\eta\rangle$; moreover $\sup_{\|\eta\|=1}\langle S\eta,\eta\rangle=\max\sigma(S)$ for self-adjoint $S$, since $S+cI\ge0$ for $c\ge\|S\|$ and $\langle(S+cI)\eta,\eta\rangle=\langle S\eta,\eta\rangle+c$ ([[lem-quadratic-form-of-a-self-adjoint-operator-attains-the-norm]]).

[F3] State values at self-adjoint elements lie between the spectral bounds; spectra of elements of a nonunital $B$ are computed in its unitization, and for $h=h^*\in B$ the spectrum in $B$ (or its unitization) agrees with the operator spectrum in $\mathcal B(K)$: the algebraic unitization $B+\mathbb CI$ is a unital C\*-subalgebra of $\mathcal B(K)$ with the same identity $I$, so spectral permanence applies and uniqueness of the unitization norm identifies the two conventions ([[lem-value-of-a-state-at-a-self-adjoint-element-lies-between-the-spectral-bounds]], [[lem-spectral-permanence-for-unital-c-star-subalgebras]], [[thm-minimal-c-star-unitization]]).

[F4] In a finite-dimensional real normed space, a point outside a nonempty closed convex set is strictly separated from it by a continuous linear functional. This is the closed-half-space separation theorem applied in $\mathbb R^n$ ([[cor-closed-convex-set-is-an-intersection-of-closed-half-spaces]]); step 1.4 transfers it to the weak-* topology using finitely many evaluations, rather than applying a norm-topology theorem directly there.

## Proof

**Proof technique:** direct.

**Given:** AC, a nondegenerate C\*-algebra $B\subseteq\mathcal B(K)$, its approximate unit $(u_\lambda)$, the set $V$ of normalized vector functionals, and a state $\omega$ of $B$.

1.1 $u_\lambda\to I$ in the strong operator topology. For $b\in B$ one has $\|u_\lambda b-b\|\to0$ by [F1], hence $u_\lambda(b\eta)\to b\eta$ for every $\eta\in K$; the vectors $b\eta$ span a dense subspace because $B$ acts nondegenerately, and $\|u_\lambda\|\le1$ uniformly, so $u_\lambda\xi\to\xi$ for every $\xi\in K$. [F1]

1.2 If $K=0$, then $B=0$ has no state and the statement is vacuous. For $K\ne0$ and self-adjoint $S\in\mathcal B(K)$, $\sup_{\|\eta\|=1}\langle S\eta,\eta\rangle=\max\sigma(S)$, and this equals the supremum of $|\langle S\eta,\eta\rangle|$ over unit vectors when $S\ge0$. For $c\ge\|S\|$ the operator $S+cI$ is positive, so [F2] gives $\|S+cI\|=\sup_{\|\eta\|=1}\langle(S+cI)\eta,\eta\rangle=\sup_{\|\eta\|=1}\langle S\eta,\eta\rangle+c$; since $\|S+cI\|=c+\max\sigma(S)$ for the self-adjoint operator $S+cI$, the claim follows, using the norm and spectral image formulas of the calculus in $\mathcal B(K)$ from [F1]. [F1, F2]

1.3 For $h=h^*\in B$ the spectrum computed in $B$ (in $B$ itself if unital, in its minimal unitization otherwise) equals the operator spectrum $\sigma_{\mathcal B(K)}(h)$, hence $\max\sigma_B(h)=\max\sigma_{\mathcal B(K)}(h)$. If $B$ is unital then nondegeneracy forces its unit to be $I$: the unit is a projection $p$ with $B K\subseteq pK$, so $pK$ is dense and closed, hence $p=I$. If $B$ is nonunital, $B+\mathbb CI$ is closed: $d=\operatorname{dist}(I,B)>0$, and $|z_n-z_m|d\le\|(b_n+z_nI)-(b_m+z_mI)\|$ makes both terms of every Cauchy sequence converge separately. Thus it is a unital C\*-subalgebra of $\mathcal B(K)$ with identity $I$ containing $B$, and its norm on the algebraic unitization restricts to the given norm on $B$, so by the uniqueness clause of the minimal unitization it is the minimal unitization of $B$. In both cases [F3] gives the claim. [F3]

1.4 Let $C$ be the weak-* closed convex hull of $V$ and suppose $\omega\notin C$. A finite-evaluation weak-* neighbourhood of $\omega$ is disjoint from $C$. Thus, for some $b_1,\ldots,b_n\in B$, the map $L(\psi)=(\operatorname{Re}\psi(b_i),\operatorname{Im}\psi(b_i))_{i=1}^n$ into $\mathbb R^{2n}$ sends $\omega$ outside $\overline{L(C)}$. Applying finite-dimensional closed-convex separation [F4] to this nonempty closed convex set gives a real linear combination of the coordinates that is strictly larger at $\omega$ than its supremum over $L(C)$. Such a combination is $\operatorname{Re}\psi(h_0)$ for some $h_0\in B$. Write $h_0=h+ik$ with $h,k$ self-adjoint. On $V$, $\operatorname{Re}\psi(h_0)=\psi(h)$ because both quadratic forms at $h,k$ are real; the identity extends by linearity and weak-* continuity to $C$. For $\omega$ the same identity follows from [F3]. Therefore $\omega(h)>\sup_{\psi\in C}\psi(h)=\sup_{\|\eta\|=1}\langle h\eta,\eta\rangle$, the equality holding because evaluation is continuous and linear on the closed convex hull. [F3, F4]

2.1 Each $\eta$ with $\|\eta\|=1$ defines a state $\omega_\eta(b):=\langle b\eta,\eta\rangle$ of $B$: positivity is $\omega_\eta(b^*b)=\|b\eta\|^2\ge0$, and the norm is one because $\omega_\eta(u_\lambda)=\langle u_\lambda\eta,\eta\rangle\to\|\eta\|^2=1$ by step 1.1 and $\|u_\lambda\|\le1$, so $\|\omega_\eta\|\ge1$ while $|\omega_\eta(b)|\le\|b\|$ gives $\|\omega_\eta\|\le1$. Hence $V\subseteq$ the state space of $B$. [F1, step 1.1]

2.2 No state lies outside $C$: if $\omega\notin C$, step 1.4 gives $h=h^*$ with $\omega(h)>\sup_{\|\eta\|=1}\langle h\eta,\eta\rangle=\max\sigma_{\mathcal B(K)}(h)=\max\sigma_B(h)$ by steps 1.2 and 1.3, contradicting the state spectral bound $\omega(h)\le\max\sigma_B(h)$ of [F3]. Therefore every state of $B$ belongs to the weak-* closed convex hull of $V$. [F3, step 1.2, step 1.3, step 1.4]

3.1 Let $\omega$ be a state of $B$, so $\omega\in C$ by step 2.2. By definition of the weak-* closure of the convex hull, every basic weak-* neighbourhood of $\omega$ meets the convex hull of $V$; a basic neighbourhood is given by finitely many $b_1,\dots,b_n$ and $\epsilon>0$, and an element of the convex hull is a finite convex combination $\sum_j\lambda_j\omega_{\eta_j}$ with unit vectors $\eta_j$. This is exactly the displayed approximation, so the lemma follows. [step 2.2]

4.1 The Axiom of Choice is used for the geometric separation of step 1.4 and is inherited from the approximate-unit and spectral suppliers of [F1]–[F3]; the remaining estimates use no further choice ([[def-axiom-of-choice]]). [given, F4] ∎ 
