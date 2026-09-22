---
id: ex-pvm-of-a-diagonal-normal-operator
kind: example
title: Pvm of a diagonal normal operator
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-borel-functional-calculus-for-bounded-normal-operators, thm-spectral-theorem-for-bounded-normal-operators-pvm-form, def-borel-functional-calculus-for-a-bounded-normal-operator, thm-bounded-borel-pvm-integral, lem-scalar-and-complex-measures-from-a-pvm, def-square-summable-family-on-an-arbitrary-index-set, thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-spectrum-and-resolvent-of-a-bounded-operator, def-operator-norm, def-hilbert-space, def-self-adjoint-positive-unitary-and-normal-operator, def-axiom-of-choice, def-hilbert-space-adjoint, thm-complex-plane-is-complete, def-projection-valued-measure]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.6–5.7, printed pp.273–296"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
verification:
  audited: 2026-09-22
---

## Example

Assume AC. Let $I$ be a nonempty set, let $(\lambda_i)_{i\in I}$ be a bounded family of
complex numbers with $M:=\sup_i|\lambda_i|<\infty$, and let
$$T:\ell^2(I;\mathbb C)\to\ell^2(I;\mathbb C),\qquad (Tx)_i:=\lambda_ix_i ,$$
be the associated diagonal operator. Then $T$ is a bounded normal operator with
$\sigma(T)=\overline{\{\lambda_i:i\in I\}}$, its spectral projection valued
measure $E$ on the Borel $\sigma$-algebra of $\sigma(T)$ is
$$E(B)x=\bigl(\mathbf 1_B(\lambda_i)x_i\bigr)_{i\in I},$$
and the bounded Borel functional calculus is $f(T)x=\bigl(f(\lambda_i)x_i\bigr)_{i\in I}$
for every bounded Borel $f$ on $\sigma(T)$.

## Facts & Assumptions

[A1] $\ell^2(I;\mathbb C)$ is the space of square-summable families with inner product $\langle x,y\rangle=\sum_ix_i\overline{y_i}$; the vectors $e_i$ form an orthonormal family with $\langle x,e_i\rangle=x_i$ for square-summable $x$, and completeness will be proved directly below using coordinate completeness of $\mathbb C$ ([[thm-complex-plane-is-complete]]) ([[def-square-summable-family-on-an-arbitrary-index-set]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-hilbert-space]]).

[A2] $z\in\rho(T)$ exactly when $zI-T$ is bijective with bounded inverse; a bounded operator that is not bounded below is not bijective with bounded inverse ([[def-spectrum-and-resolvent-of-a-bounded-operator]], [[def-operator-norm]]).

[A3] For a bounded normal operator on a nonzero complex Hilbert space, the spectrum is nonempty compact and the spectral PVM $E$ is the unique regular PVM on $\sigma(T)$ with $\int z\,dE=T$, and for bounded Borel $f$ one has $\langle f(T)x,y\rangle=\int f\,dE_{x,y}$ with $E_{x,y}(B)=\langle E(B)x,y\rangle$ ([[thm-spectral-theorem-for-bounded-normal-operators-pvm-form]], [[thm-bounded-borel-pvm-integral]], [[def-borel-functional-calculus-for-a-bounded-normal-operator]]).

[A4] Normal means $T^*T=TT^*$ ([[def-self-adjoint-positive-unitary-and-normal-operator]]). The adjoint is characterized by $\langle Tx,y\rangle=\langle x,T^*y\rangle$ ([[def-hilbert-space-adjoint]]). The PVM and scalar regularity conditions are those of [[def-projection-valued-measure]].

[A5] AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

**Given:** A bounded family $(\lambda_i)_{i\in I}$ with $M=\sup_i|\lambda_i|<\infty$, the diagonal operator $Tx=(\lambda_ix_i)$ on $\ell^2(I;\mathbb C)$, and the map $E(B)x:=(\mathbf 1_B(\lambda_i)x_i)$ for Borel $B\subseteq\sigma(T)$.

1.1 The space $\ell^2(I;\mathbb C)$ is complete. If $(x^{(n)})$ is Cauchy in its norm, each coordinate is Cauchy since $|x_i^{(n)}-x_i^{(m)}|\le\|x^{(n)}-x^{(m)}\|_2$, so let $x_i$ be its unique complex limit. A Cauchy sequence is norm bounded, say by $C$. For finite $F$, passage to the limit in the finite sum gives $\sum_{i\in F}|x_i|^2\le C^2$; taking suprema shows $x\in\ell^2(I)$. Given $\varepsilon>0$, choose $N$ such that $\|x^{(n)}-x^{(m)}\|_2<\varepsilon$ for $m,n\ge N$. For fixed $n\ge N$, passage to coordinate limits on every finite $F$ gives $\sum_{i\in F}|x_i^{(n)}-x_i|^2\le\varepsilon^2$; taking suprema gives $\|x^{(n)}-x\|_2\le\varepsilon$. Thus the sequence converges (use half a prescribed tolerance). Unique coordinate limits require no choice. Since $I$ is nonempty and $e_i$ has norm one, this Hilbert space is nonzero. [A1]

1.2 The formula $Tx=(\lambda_ix_i)$ defines a bounded linear operator with $\|Tx\|^2=\sum_i|\lambda_i|^2|x_i|^2\le M^2\|x\|^2$, so $\|T\|\le M$, and $\|T\|\ge\sup_i|\lambda_i|=M$ by testing on the basis vectors, so $\|T\|=M$; the adjoint is $T^*y=(\overline{\lambda_i}y_i)$ because $\langle Tx,y\rangle=\sum_i\lambda_ix_i\overline{y_i}=\sum_ix_i\overline{\overline{\lambda_i}y_i}$, so $T^*T=TT^*$ is diagonal with entries $|\lambda_i|^2$ and $T$ is normal. [A1, A2, A4]

1.3 The map $E$ takes values in orthogonal projections: for square-summable $x$ the family $(\mathbf 1_B(\lambda_i)x_i)$ is square-summable with $\|E(B)x\|^2=\sum_i\mathbf 1_B(\lambda_i)|x_i|^2$, so $\|E(B)\|\le1$ and $E(B)^2=E(B)=E(B)^*$ because the identity holds coordinatewise and the formula is symmetric. [A1, algebra]

2.1 $\sigma(T)=\overline{\{\lambda_i\}}$: if $z$ is outside the closure then $\delta:=\inf_i|z-\lambda_i|>0$, the diagonal operator with entries $(z-\lambda_i)^{-1}$ is bounded with norm at most $\delta^{-1}$ and is a two-sided inverse of $zI-T$, so $z\in\rho(T)$; if $z\in\overline{\{\lambda_i\}}$ pick a sequence $\lambda_{i_k}\to z$, so $\|(T-zI)e_{i_k}\|=|\lambda_{i_k}-z|\to0$ and $T-zI$ is not bounded below, whence $z\in\sigma(T)$. [step 1.2, A1, A2]

3.1 The projection identities, $E(\varnothing)=0$, $E(\sigma(T))=I$, and $E(B\cap C)=E(B)E(C)$ hold coordinatewise. For disjoint $(B_n)_{n\ge0}$ with union $B$, fix $x$ and $\varepsilon>0$ and choose a finite coordinate set $F$ with $\sum_{i\notin F}|x_i|^2<\varepsilon^2$, using the small-tail property in [A1]. Choose $N$ so every $\lambda_i\in B$ with $i\in F$ belongs to some $B_n$ with $n\le N$ (a finite maximum suffices). Then the difference $E(B)x-\sum_{n\le N}E(B_n)x$ vanishes on $F$ and has other coordinates of modulus at most $|x_i|$, so its squared norm is less than $\varepsilon^2$. This proves strong countable additivity. For regularity of $E_x$, choose finite $F$ with squared tail less than $\varepsilon$. Given Borel $B$, set $K=\{\lambda_i:i\in F,\lambda_i\in B\}$ and $U=\sigma(T)\setminus\{\lambda_i:i\in F,\lambda_i\notin B\}$. Then $K$ is compact, $U$ is open, $K\subseteq B\subseteq U$, and both $E_x(B\setminus K)$ and $E_x(U\setminus B)$ are at most the tail. Thus every finite positive scalar measure is inner and outer regular; it is locally finite since its total mass is $\|x\|^2$. The spectrum is compact Hausdorff by [A3], so this is exactly a regular PVM. [step 1.1, step 1.3, step 2.1, A1, A3, A4]

4.1 For every $x$, every $i\in I$ and Borel $B$, the scalar measure $E_{x,e_i}$ equals $x_i\delta_{\lambda_i}$, since $\langle E(B)x,e_i\rangle=\mathbf 1_B(\lambda_i)x_i$. Integration against this measure gives $\int f\,dE_{x,e_i}=f(\lambda_i)x_i$: first for indicators and simple functions, then for bounded Borel functions by uniform simple approximation and finite variation. By the bounded PVM integral's pairing formula, $(\Phi_E(f)x)_i=f(\lambda_i)x_i$. This family is square summable since $f$ is bounded. In particular $\Phi_E(z)x=Tx$ coordinatewise. [step 3.1, A1, A3]

5.1 The regular PVM on $\sigma(T)$ just constructed has $\Phi_E(z)=T$, so uniqueness in the spectral theorem identifies it as the spectral PVM of $T$. Its bounded Borel calculus therefore has $(f(T)x)_i=f(\lambda_i)x_i$ by step 4.1. [step 1.1, step 1.2, step 4.1, A3, A5]

6.1 The diagonal operator is therefore bounded normal with $\sigma(T)=\overline{\{\lambda_i\}}$, its spectral projections act by $\mathbf 1_B$ on the coordinates, and its bounded Borel calculus acts by the scalar values $f(\lambda_i)$. [step 1.2, step 2.1, step 5.1, A5] ∎
