---
id: lem-positive-square-root-of-a-compact-positive-operator
kind: lemma
title: Positive square root of a compact positive operator
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-spectral-theorem-for-compact-self-adjoint-operators, lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal, def-self-adjoint-positive-unitary-and-normal-operator, thm-hilbert-adjoint-properties, def-hilbert-space-adjoint, def-compact-linear-operator, lem-finite-rank-operators-are-compact, thm-norm-limit-of-compact-operators-is-compact, thm-orthogonal-decomposition-by-a-closed-subspace, lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums, lem-finite-bessel-inequality, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-square-summable-family-on-an-arbitrary-index-set, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-orthogonality-and-orthogonal-complement, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, thm-complex-spectral-theorem-for-normal-endomorphisms, def-real-and-complex-inner-product-space, def-hilbert-space, def-operator-norm, def-bounded-linear-operator, thm-bounded-linear-operator-equivalences, def-metric-convergence, def-banach-space, def-linear-subspace, def-kernel-and-image-of-a-linear-map, def-countable, thm-countable-union-of-countable, cor-archimedean-reciprocal, def-countable-choice, thm-hilbert-space-fourier-expansion]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.2 (support decomposition) and §3.5 (absolute value of a compact operator)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §§2 and 5"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
real or complex Hilbert space ([[def-hilbert-space]]) and let
$T\in\mathcal B(H)$ be a compact self-adjoint positive operator
([[def-compact-linear-operator]],
[[def-self-adjoint-positive-unitary-and-normal-operator]],
[[def-bounded-linear-operator]]), so that $\langle Tx,x\rangle$ is a
nonnegative real for every $x$. Then there is a compact self-adjoint positive
operator $S\in\mathcal B(H)$ with $S^{2}=T$, and it is unique: if
$R\in\mathcal B(H)$ is compact and positive
([[def-self-adjoint-positive-unitary-and-normal-operator]]) with $R^{2}=T$,
then $R=S$. The root acts by multiplication by $\sqrt\lambda$ on each positive
eigenspace $E_\lambda(T)=\ker(T-\lambda I)$, $\lambda>0$, and by zero on
$\ker T$; in particular $S$ is the operator denoted $\sqrt T$ or $T^{1/2}$.

## Facts & Assumptions

**Given:** Countable Choice, a real or complex Hilbert space $H$, a compact self-adjoint positive $T$, the set $\Sigma=\{\lambda>0:\lambda$ is an eigenvalue of $T\}$, the eigenspaces $E_\lambda$, and $M:=\overline{\operatorname{span}}\bigcup_{\lambda\in\Sigma}E_\lambda$.

[A1] **Spectral theorem for $T$.** $\Sigma$ is finite or countably infinite, each $E_\lambda$ has finite dimension and an orthonormal basis, distinct eigenspaces are orthogonal, $M=(\ker T)^\perp=\overline{\operatorname{ran}T}$, and $H=M\oplus\ker T$ with $Tx=\sum_{\lambda\in\Sigma}\lambda P_\lambda x$ in norm for $x\in H$, where $P_\lambda$ is the orthogonal projection onto $E_\lambda$ ([[thm-spectral-theorem-for-compact-self-adjoint-operators]], [[lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal]], [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[A2] **Stability data.** The $P_\lambda$ are finite sums of rank-one maps $x\mapsto\langle x,e\rangle e$ and satisfy $\langle P_\lambda x,y\rangle=\langle x,P_\lambda y\rangle$ and $P_\lambda x\in E_\lambda$; the family $(P_\lambda x)_\lambda$ is orthogonal with $\sum_\lambda\|P_\lambda x\|^2\le\|x\|^2$ (Bessel) and the expansion of $x$ over the union of orthonormal bases of the $E_\lambda$ converges to the component of $x$ in $M$ ([[lem-finite-bessel-inequality]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[thm-hilbert-space-fourier-expansion]], [[def-orthogonality-and-orthogonal-complement]], [[def-real-and-complex-inner-product-space]]).

[A3] **Square-summable orthogonal families.** If $(x_i)$ is an orthogonal family in a Hilbert space with $\sum_i\|x_i\|^2<+\infty$, then the finite-subset net of $\sum_i x_i$ converges and the limit $s$ satisfies $\|s\|^2=\sum_i\|x_i\|^2$ ([[lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums]], [[def-square-summable-family-on-an-arbitrary-index-set]]).

[A4] **Orthogonal decomposition.** For a closed subspace $M$ one has $H=M\oplus M^\perp$ with $M^\perp$ closed and $M\oplus M^\perp$ direct, and a bounded linear operator that vanishes on $M$ and on $M^\perp$ is zero; limits of convergent sequences are unique ([[thm-orthogonal-decomposition-by-a-closed-subspace]], [[def-linear-subspace]], [[def-metric-convergence]], [[def-hilbert-space]], [[def-banach-space]]).

[A5] **Compactness and finite rank.** A finite-rank bounded operator is compact; under $\mathrm{AC}_\omega$ a norm limit of compact operators into a Banach space is compact; scalar multiples and images of compact sets under continuous maps are compact ([[lem-finite-rank-operators-are-compact]], [[thm-norm-limit-of-compact-operators-is-compact]], [[def-compact-linear-operator]], [[def-operator-norm]], [[thm-bounded-linear-operator-equivalences]]).

[A6] **Adjoints.** $(aR+bS)^*=\overline aR^*+\overline bS^*$, $(RS)^*=S^*R^*$ and $R^{**}=R$, so for compact $R$ the operators $A=(R+R^*)/2$ and $K=(R-R^*)/2$ satisfy $A^*=A$, $K^*=-K$ and $R=A+K$, with $R^2=A^2+AK+KA+K^2$ while $R^{*2}=A^2-AK-KA+K^2$ ([[thm-hilbert-adjoint-properties]], [[def-hilbert-space-adjoint]], [[def-self-adjoint-positive-unitary-and-normal-operator]]).

[A7] **Cardinality and order.** $\Sigma$ is at most countable with $|\lambda|\ge\varepsilon$ for only finitely many $\lambda$ per $\varepsilon>0$, so a nonincreasing enumeration of the distinct elements of $\Sigma$ exists and tends to $0$ ([[thm-spectral-theorem-for-compact-self-adjoint-operators]], [[thm-countable-union-of-countable]], [[def-countable]], [[cor-archimedean-reciprocal]], [[def-countable-choice]]).

[A8] **Finite-dimensional self-adjoint operators.** A self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal eigenbasis, and a normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]], [[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]], [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, the compact self-adjoint positive $T$, its positive eigenvalues $\Sigma$, the eigenspaces $E_\lambda$ and the projections $P_\lambda$, and $M=\overline{\operatorname{span}}\bigcup_{\lambda\in\Sigma}E_\lambda$.

1.1 **Construction of the root.** Positivity forces $\lambda\ge0$ for every eigenvalue $\lambda$ of $T$, because for a unit eigenvector $e$ one has $\lambda=\langle Te,e\rangle\ge0$; hence $\Sigma$ consists of positive numbers and $0$ is an eigenvalue only in the form of the kernel [A1]. For $x\in H$ set $Sx:=\sum_{\lambda\in\Sigma}\sqrt\lambda\,P_\lambda x$, a finite-subset net over the at most countable index set $\Sigma$. The family $(\sqrt\lambda P_\lambda x)_\lambda$ is orthogonal with $\sum_\lambda\|\sqrt\lambda P_\lambda x\|^2=\sum_\lambda\lambda\|P_\lambda x\|^2=\langle Tx,x\rangle\le\|T\|\,\|x\|^2<+\infty$, using the expansion, orthogonality and Bessel [A1, A2]; so [A3] makes the net converge, $S$ is well defined with $\|Sx\|^2=\sum_\lambda\lambda\|P_\lambda x\|^2=\langle Tx,x\rangle\le\|T\|\|x\|^2$, and $S$ is linear with $\|S\|\le\sqrt{\|T\|}$. Moreover $\langle Sx,x\rangle=\sum_\lambda\sqrt\lambda\,\langle P_\lambda x,x\rangle=\sum_\lambda\sqrt\lambda\|P_\lambda x\|^2\ge0$, because $P_\lambda$ is self-adjoint and $P_\lambda x\perp(x-P_\lambda x)$ [A2]; and $S$ is self-adjoint, since $\langle Sx,y\rangle=\sum_\lambda\sqrt\lambda\langle P_\lambda x,y\rangle=\sum_\lambda\sqrt\lambda\langle x,P_\lambda y\rangle=\langle x,Sy\rangle$ by absolute convergence and self-adjointness of each $P_\lambda$. Finally $S^2=T$: on $E_\lambda$ one has $S=\sqrt\lambda I$ whence $S^2=\lambda I=T$, both operators are continuous and agree on the linear span of $\bigcup E_\lambda$, hence on $M$ by continuity, and both vanish on $\ker T$ (for $x\in\ker T$, $P_\lambda x=0$ for all $\lambda$ because $E_\lambda\perp\ker T$ and $x$ is in every $E_\lambda^\perp$), so $S^2=T$ on $H=M\oplus\ker T$ by [A4]. [A1, A2, A3, A4]

1.2 **The root is compact.** Order the distinct eigenvalues increasingly in modulus, $\lambda^{(1)}>\lambda^{(2)}>\cdots>0$, a nonincreasing enumeration whose terms tend to $0$ [A7], and put $S_N:=\sum_{k\le N}\sqrt{\lambda^{(k)}}P_{\lambda^{(k)}}$, a finite-rank bounded operator because each $P_{\lambda^{(k)}}$ has finite-dimensional range [A1], hence compact [A5]. For $\|x\|\le1$ one has $\|(S-S_N)x\|^2=\sum_{k>N}\lambda^{(k)}\|P_{\lambda^{(k)}}x\|^2\le\lambda^{(N+1)}\sum_k\|P_{\lambda^{(k)}}x\|^2\le\lambda^{(N+1)}\|x\|^2$ by orthogonality and Bessel [A2], so $\|S-S_N\|\le\sqrt{\lambda^{(N+1)}}\to0$; as $H$ is a Banach space, the norm-limit theorem [A5] makes $S$ compact. [A1, A2, A5, A7]

1.3 **Every compact positive square root is self-adjoint and kills the kernel.** Let $R$ be compact and positive with $R^2=T$, and write $A:=(R+R^*)/2$, $K:=(R-R^*)/2$, so that $R=A+K$, $A^*=A$, $K^*=-K$, $A$ and $K$ are compact, and the quadratic form of $A$ equals that of $R$, so $A\ge0$ [A6]. From $R^2=T=T^*=R^{*2}$ and the two expansions of [A6] we get $AK+KA=0$; applying the spectral theorem [A1] to the compact self-adjoint $A\ge0$ shows that its nonzero eigenvalues are positive, that the closed span of its nonzero eigenspaces is $(\ker A)^\perp$, and that $H=(\ker A)^\perp\oplus\ker A$. If $x\in E_\mu(A)$ with $\mu>0$ then $A(Kx)=-K(Ax)=-\mu\,Kx$, so $Kx\in E_{-\mu}(A)=\{0\}$ (a negative eigenvalue of $A\ge0$ is impossible, since $\langle Ay,y\rangle=\nu\|y\|^2\ge0$ for an eigenvector $y$ of eigenvalue $\nu$), hence $K$ vanishes on each such eigenspace and, being bounded, on $(\ker A)^\perp$. If $x\in\ker A$ then $A(Kx)=-K(Ax)=0$, so $K$ maps $\ker A$ into itself, and on $\ker A$ the identity $T=A^2+K^2=K^2$ gives $0\le\langle Tx,x\rangle=\langle K^2x,x\rangle=-\|Kx\|^2\le0$, whence $Kx=0$; thus $K=0$ on $H=(\ker A)^\perp\oplus\ker A$ and $R=A=A^*$. Consequently $RT=R\,R^2=R^3=R^2R=TR$, so $R$ preserves every eigenspace $E_\lambda(T)$ with $\lambda>0$; and for $x\in\ker T$ one has $\|Rx\|^2=\langle R^2x,x\rangle=\langle Tx,x\rangle=0$, so $Rx=0$. [A1, A2, A6]

2.1 **A positive square root acts diagonally.** Let $R$ be as in [step 1.3] and let $\lambda\in\Sigma$. By [step 1.3] the finite-dimensional space $E_\lambda(T)$ is $R$-invariant and $R$ is self-adjoint there, while $R^2=\lambda I$ on it; by the finite-dimensional spectral theorem [A8] $R|_{E_\lambda(T)}$ has an orthonormal eigenbasis with real eigenvalues $\mu$, each satisfying $\mu^2=\lambda$, so $\mu=\pm\sqrt\lambda$; positivity of $R$ forces $\mu=\langle Rv,v\rangle\ge0$ for a unit eigenvector $v$, hence $\mu=\sqrt\lambda$ and $R=\sqrt\lambda I$ on $E_\lambda(T)$. [step 1.3, A8, algebra]

2.2 **Existence.** By [step 1.1] and [step 1.2] the operator $S$ is a compact self-adjoint positive operator with $S^2=T$, and by construction it acts as $\sqrt\lambda I$ on each $E_\lambda(T)$, $\lambda\in\Sigma$, and as $0$ on $\ker T$. [step 1.1, step 1.2]

3.1 **Uniqueness.** Let $R$ be compact and positive with $R^2=T$. By [step 1.3] $R$ vanishes on $\ker T$, by [step 2.1] it equals $\sqrt\lambda I$ on each $E_\lambda(T)$, and by [step 2.2] the same two descriptions hold for $S$; hence the bounded operator $R-S$ vanishes on $\ker T$ and on each $E_\lambda(T)$. Since $H$ is the closed linear span of $\ker T\cup\bigcup_{\lambda\in\Sigma}E_\lambda(T)$ by [A1], continuity gives $R-S=0$. [step 1.3, step 2.1, step 2.2, A1, A4]

4.1 **Conclusion.** The operator $S$ of [step 1.1] is compact, self-adjoint and positive with $S^2=T$ by [step 2.2], and [step 3.1] shows that every compact positive $R$ with $R^2=T$ equals $S$; the action of $S$ on the positive eigenspaces and on the kernel is stated in [step 2.2]. This proves the lemma, including the uniqueness among compact positive square roots. [step 2.2, step 3.1, A4] ∎
