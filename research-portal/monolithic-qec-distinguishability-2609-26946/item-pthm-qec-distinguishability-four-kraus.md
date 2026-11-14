---
title: Exact four-level Kraus operators
status: published
research_item: pthm-qec-distinguishability-four-kraus
dependency_level: 3
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF pp. 6–7, Eqs. (12)–(14) and definitions following Eq. (14)
      statement: The article gives the three displayed Kraus operators and defines the
        functions and phase used in them.
      hypotheses: The article's four-level model with a coherent decay jump and
        degeneracy-lifting Hamiltonian.
      reading_limits: The supplied extracted text of PDF pages 6–7 was read for
        attribution. The citation is not used as proof of the channel formula.
---

PDF p. 6: ` Eqs. (12)–(14), continued on p. 7 `; PDF p. 7: ` Definitions following Eq. (14) `

## Prerequisites

- [post-qec-distinguishability-four-level-model](item-post-qec-distinguishability-four-level-model)
- [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)
- [lem-qec-prereq-trajectory-dyson-expansion](item-lem-qec-prereq-trajectory-dyson-expansion)
- [lem-qec-prereq-two-path-gram-spectrum](item-lem-qec-prereq-two-path-gram-spectrum)


## Statement

Assume the four-level model of [post-qec-distinguishability-four-level-model](item-post-qec-distinguishability-four-level-model), with $t\geq0$, $\gamma\geq0$ and real $\omega_0,\Delta$. For a set $X$ of basis labels put $\Pi_X=\sum_{i\in X}|i\rangle\langle i|$; write $\Pi_{01}$ for $X=\{0,1\}$ and $\Pi_j$ for $X=\{j\}$. Put $\Omega=\gamma+i\Delta$. When $\gamma>0$ and $t>0$, define $f_\pm(t)=\gamma|e^{\Omega t}-1|/|\Omega|\pm(e^{\gamma t}-1)$ and $u(t)=|\Omega(e^{t\Omega^*}-1)|/[\Omega(e^{t\Omega^*}-1)]$. Then the channel on the entire four-dimensional operator space has Kraus representation $\mathcal N_t(X)=\sum_{j=1}^3K_jXK_j^\dagger$, where

$$K_1=e^{-i\omega_0t}e^{-\gamma t/2+i\Delta t}\Pi_{01}+e^{i\Delta t}\Pi_2+\Pi_3,$$

$$K_2=e^{-\gamma t/2}\sqrt{f_+(t)/2}\,[u(t)|2\rangle\langle0|+|3\rangle\langle1|],$$

$$K_3=e^{-\gamma t/2}\sqrt{-f_-(t)/2}\,[-u(t)|2\rangle\langle0|+|3\rangle\langle1|].$$

The square roots are real and nonnegative. At $t=0$ or $\gamma=0$, use $K_2=K_3=0$ and the displayed $K_1$; this also specifies the channel when the printed phase or $\Omega$ is undefined. In particular, for $\Delta=0$ the representation reduces to $K_1=e^{-i\omega_0t}e^{-\gamma t/2}\Pi_{01}+\Pi_2+\Pi_3$, $K_2=\sqrt{1-e^{-\gamma t}}(|2\rangle\langle0|+|3\rangle\langle1|)$ and $K_3=0$.

## Facts & Assumptions

**Given:** The postulated model and parameters in the Statement.

**Goal:** Derive the displayed representation for every input operator, including the stated endpoints.

[F1] The model has $H=\omega_0\Pi_{01}+\Delta\Pi_3$, $L=\sqrt\gamma(|2\rangle\langle0|+|3\rangle\langle1|)$, and generator $\mathcal L(X)=-i[H,X]+LXL^\dagger-\{L^\dagger L,X\}/2$. [post-qec-distinguishability-four-level-model](item-post-qec-distinguishability-four-level-model)

[F2] The ordered orthonormal basis, adjoints, and outer products obey the finite operator conventions. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F3] For the finite GKSL generator, the channel has the convergent ordered-jump expansion with no-jump amplitude $E(t)=e^{t(-iH-L^\dagger L/2)}$ and one-jump amplitude $E(t-s)LE(s)$. [lem-qec-prereq-trajectory-dyson-expansion](item-lem-qec-prereq-trajectory-dyson-expansion)

[F4] A two-path branch with coefficient matrix $p\begin{pmatrix}1&\chi\\\overline\chi&1\end{pmatrix}$, where $p\geq0$ and $|\chi|\leq1$, has the orthogonal Kraus decomposition obtained from its two eigenvectors. [lem-qec-prereq-two-path-gram-spectrum](item-lem-qec-prereq-two-path-gram-spectrum)

## Proof

1.1 By [F1] and [F2], $L^\dagger L=\gamma\Pi_{01}$ and $E(s)=e^{(-i\omega_0-\gamma/2)s}\Pi_{01}+\Pi_2+e^{-i\Delta s}\Pi_3$. Since $L$ maps the excited span into the decay span and annihilates the latter, $LE(r)L=0$ for every $r\geq0$. Thus all terms with two or more jumps vanish in [F3]. Moreover $K_1=e^{i\Delta t}E(t)$, so its individual phase does not change the no-jump map. [given, F1, F2, F3, algebra]

2.1 Set $F_0=|2\rangle\langle0|$ and $F_1=|3\rangle\langle1|$. The one-jump amplitude is $\sqrt\gamma e^{(-i\omega_0-\gamma/2)s}[F_0+e^{-i\Delta(t-s)}F_1]$. Hence its integral acts on every four-level operator as $p(F_0XF_0^\dagger+F_1XF_1^\dagger)+cF_0XF_1^\dagger+\overline cF_1XF_0^\dagger$, with $p=1-e^{-\gamma t}$ and $c=\gamma\int_0^t e^{-\gamma s}e^{i\Delta(t-s)}\,ds$. This form includes inputs with coherences outside the excited span: both path operators annihilate the decay span. The triangle inequality gives $|c|\leq p$. [given, F2, F3, step 1.1, algebra]

3.1 For $\gamma>0$ and $t>0$, $p>0$, $\Omega\ne0$, and integration gives $c=\gamma(e^{i\Delta t}-e^{-\gamma t})/\Omega$. Its numerator is nonzero because $e^{-\gamma t}<1$. The displayed $u$ is $c/|c|$: indeed $c=\gamma e^{-\gamma t}(e^{\Omega t}-1)/\Omega$, and $\Omega(e^{\Omega^*t}-1)$ is the complex conjugate of $\Omega^*(e^{\Omega t}-1)$. Also $e^{-\gamma t}f_+=|c|+p$ and $-e^{-\gamma t}f_-=p-|c|$. Applying [F4] with $\chi=c/p$, then multiplying the minus eigenoperator by the harmless phase $-1$, gives exactly $K_2,K_3$. The bound $|c|\leq p$ makes both square roots nonnegative. [given, F4, step 2.1, algebra]

4.1 If $t=0$ or $\gamma=0$, the one-jump amplitude in step 2.1 vanishes and the stated zero operators together with $K_1$ give the channel. If $\Delta=0$ and $\gamma t>0$, then $c=p$, $u=1$, $f_-=0$ and $e^{-\gamma t}f_+/2=p$, giving the stated amplitude-damping form. The same form follows at the zero-decay endpoints. Combining these cases with steps 1.1, 2.1 and 3.1 proves the representation on the full operator space. [given, F3, step 1.1, step 2.1, step 3.1, algebra] ∎
