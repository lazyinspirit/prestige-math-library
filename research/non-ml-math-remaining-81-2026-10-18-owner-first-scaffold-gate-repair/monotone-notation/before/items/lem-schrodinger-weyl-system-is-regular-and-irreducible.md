---
id: lem-schrodinger-weyl-system-is-regular-and-irreducible
kind: lemma
title: The Schrödinger Weyl system is regular and irreducible
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-heisenberg-group-of-a-symplectic-vector-space
  - def-regular-weyl-system-on-a-symplectic-vector-space
  - def-hilbert-space
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-countable-choice
  - thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity
  - thm-dominated-convergence
  - thm-l-one-fourier-inversion
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-holder-inequality-for-integrals
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
proof_strategy: direct
axiom_use: "Countable Choice is used only through translation continuity on L² and L¹ Fourier inversion. The group law, scalar phase, and Fubini–Tonelli contradiction are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roland Speicher, Mathematical Aspects of Quantum Mechanics, Lecture Notes"
      url: "https://www.uni-saarland.de/fileadmin/upload/lehrstuhl/speicher/Math_of_QM/MathematicalAspects.pdf"
    - title: "Amritanshu Prasad, An Easy Proof of the Stone-von Neumann-Mackey Theorem"
      url: "https://arxiv.org/pdf/0912.0574"
---
## Statement



Let $n\ge0$, $\lambda\in\mathbb R\setminus\{0\}$, and use the symplectic
form $\omega((q,p),(q',p'))=q\cdot p'-p\cdot q'$ on $\mathbb R^{2n}$. On
$L^2(\mathbb R^n)$ define

$$\big(S_\lambda(q,p,t)f\big)(x) =e^{i\lambda t+i\lambda p\cdot(x-q/2)}f(x-q).$$
Then $S_\lambda$ is a strongly continuous unitary representation of [[def-heisenberg-group-of-a-symplectic-vector-space]], has central character $t\mapsto e^{i\lambda t}$, and its Weyl operators form an irreducible regular Weyl system with phase $e^{-i\lambda\omega/2}$.

## Facts & Assumptions

**Given:** $n\ge0$, $\lambda\ne0$, the standard symplectic form on $\mathbb R^{2n}$, and the displayed operators on $L^2(\mathbb R^n)$.

[F1] The Heisenberg group has product $(v,t)(w,s)=(v+w,t+s-\omega(v,w)/2)$ ([[def-heisenberg-group-of-a-symplectic-vector-space]]).

[F2] A Weyl system has relation $W(v)W(w)=e^{-i\lambda\omega(v,w)/2}W(v+w)$; regularity means strong continuity on every real line ([[def-regular-weyl-system-on-a-symplectic-vector-space]]).

[F3] Translations $\tau_qf(x)=f(x-q)$ are strongly continuous isometries of $L^2(\mathbb R^n)$ under Countable Choice ([[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F4] Dominated convergence applies to the integrands bounded by $4|f|^2$ ([[thm-dominated-convergence]]).

[F5] If $h\in L^1(\mathbb R^n)$ and $\widehat h\in L^1$, Fourier inversion recovers $h$ almost everywhere at Lebesgue points; in particular $\widehat h=0$ implies $h=0$ almost everywhere ([[thm-l-one-fourier-inversion]]).

[F6] Tonelli's theorem allows either order of integration for the nonnegative product $|f(x-q)|^2|g(x)|^2$ ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F7] The product of two $L^2$ functions is in $L^1$ by Hölder's inequality ([[thm-holder-inequality-for-integrals]]).

[A1] Countable Choice is assumed by [F3] and [F5]
([[def-countable-choice]]).

## Proof



**Proof technique:** direct.

**Given:** The data in the Statement.

1.1 If $n=0$, $L^2(\mathbb R^0)=\mathbb C$ with unit mass and $S_\lambda(0,0,t)=e^{i\lambda t}I$, which is a strongly continuous irreducible representation with the asserted central character. Assume $n\ge1$. Write $T_qf(x)=f(x-q)$ and $M_pf(x)=e^{i\lambda p\cdot x}f(x)$. These are unitaries because translations preserve Lebesgue measure and the multiplier has modulus one. The formula is $S_\lambda(q,p,t)=e^{i\lambda(t-q\cdot p/2)}M_pT_q$. [given, F1, algebra]

1.2 Suppose a nonzero proper closed subspace $M\subset L^2(\mathbb R^n)$ is invariant under every $W_\lambda(q,p)$. Since these operators and their inverses preserve $M$, its orthogonal complement is invariant too. Choose nonzero $f\in M$ and $g\in M^\perp$. For every $q,p$, orthogonality and the formula for $S_\lambda$ give$0=\langle W_\lambda(q,p)f,g\rangle =e^{-i\lambda p\cdot q/2}\int f(x-q)\overline{g(x)}e^{i\lambda p\cdot x}\,dx.$For fixed $q$, the function $h_q(x)=f(x-q)\overline{g(x)}$ lies in $L^1$ by [F7]. As $p$ ranges over $\mathbb R^n$ and $\lambda\ne0$, the last integral is its Fourier transform at every frequency (up to the fixed sign and $2\pi$ normalization). It vanishes everywhere, so [F5] gives $h_q=0$ almost everywhere for each $q$. [F5, F7, given, choose]

2.1 For $q,p,q',p'$, applying the formula twice gives$S_\lambda(q,p,t)S_\lambda(q',p',s)f(x) =e^{i\lambda(t+s+(p+p')\cdot x-p\cdot q/2-p'\cdot q'/2-p'\cdot q)}f(x-q-q').$On the other hand, the phase in $S_\lambda(q+q',p+p',t+s-\omega((q,p),(q',p'))/2)$ is the same, since $\omega((q,p),(q',p'))=q\cdot p'-p\cdot q'$. Thus $S_\lambda(g)S_\lambda(h)=S_\lambda(gh)$ for all $g,h\in H$; the identity and inverse laws follow from [F1], so the unitary operators form a group representation. [F1, step 1.1, algebra]

2.2 By [F3], $q\mapsto T_q$ is strongly continuous. For fixed $f\in L^2$,$\|M_pf-M_{p_0}f\|_2^2 =\int_{\mathbb R^n}|e^{i\lambda(p-p_0)\cdot x}-1|^2|f(x)|^2\,dx\longrightarrow0$as $p\to p_0$: the integrand converges pointwise to zero and is bounded by $4|f|^2$, so [F4] applies. Scalar multiplication by $e^{i\lambda t}$ is continuous. A finite product of strongly continuous unitaries is jointly strongly continuous, by inserting and subtracting one factor at a time and using that each factor has norm one. Therefore $(q,p,t)\mapsto S_\lambda(q,p,t)$ is strongly continuous. [A1, F3, F4, step 1.1]

2.3 The nonnegative measurable function $G(x,q)=|g(x)|^2|f(x-q)|^2$ is zero almost everywhere in $x$ for every $q$ by step 1.2. Tonelli [F6] therefore gives $\int_{\mathbb R^n}\int_{\mathbb R^n} G(x,q)\,dx\,dq=0$. Reversing the order and using translation invariance of Lebesgue measure gives instead$\int_{\mathbb R^n}|g(x)|^2\left(\int_{\mathbb R^n}|f(x-q)|^2\,dq\right)dx =\|g\|_2^2\|f\|_2^2>0,$ a contradiction. Hence no such $M$ exists and the Weyl system is irreducible. [F3, F6, step 1.2, algebra]

3.1 Set $W_\lambda(q,p):=S_\lambda(q,p,0)$. Step 2.1 gives the Weyl relation with phase $e^{-i\lambda\omega/2}$ by [F1]. The full strong continuity just proved implies regularity on every line. Also $S_\lambda(0,0,t)=e^{i\lambda t}I$, so the central character is as stated. [F1, F2, step 2.1]

4.1 Steps 1.1–3.1 prove the unitary representation, central character, strong continuity and Weyl relation; step 2.3 proves irreducibility. These are exactly the asserted properties. [step 1.1, step 2.1, step 3.1, step 2.3] ∎
