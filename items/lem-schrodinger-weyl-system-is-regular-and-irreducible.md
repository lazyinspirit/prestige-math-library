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
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-countable-choice
  - thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity
  - thm-dominated-convergence
  - thm-l-one-fourier-inversion
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-holder-inequality-for-integrals
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-lebesgue-measure-under-dilations-and-reflections
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure
  - thm-completion-measurable-functions-have-base-measurable-representatives
  - lem-borel-representatives-make-the-convolution-integrand-borel-measurable
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
proof_strategy: direct
axiom_use: "Countable Choice is used through L² completeness, translation continuity, L¹ Fourier inversion, Lebesgue sigma-finiteness and reflection invariance, the Borel-representative theorem, and the minimizing-sequence argument that supplies a nonzero orthogonal vector for a proper closed subspace. The group law and scalar phase are choice-free; the Tonelli contradiction is choice-free after these choice-dependent inputs are supplied."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Roland Speicher, Mathematical Aspects of Quantum Mechanics, Lecture Notes"
      url: "https://www.uni-saarland.de/fileadmin/upload/lehrstuhl/speicher/Math_of_QM/MathematicalAspects.pdf"
    - title: "Amritanshu Prasad, An Easy Proof of the Stone-von Neumann-Mackey Theorem"
      url: "https://arxiv.org/pdf/0912.0574"
---
## Statement

Assume Countable Choice. Let $n\ge0$, $\lambda\in\mathbb R\setminus\{0\}$, and use the symplectic
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

[F6] For $n\ge1$, Countable Choice makes Lebesgue measure on $\mathbb R^n$ sigma-finite; Tonelli allows either order of integration for a nonnegative function measurable for the product sigma-algebra ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F7] The product of two $L^2$ functions is in $L^1$ by Hölder's inequality ([[thm-holder-inequality-for-integrals]]).

[F8] For $n\ge1$, under Countable Choice, [[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]] identifies Lebesgue measure as the completion of its Borel restriction. The completion-measurable representative theorem gives Borel representatives for the real and imaginary parts of each $L^2$ function; any infinite values can be reset to zero on their Borel null sets. Changing to these representatives preserves each fixed-translation almost-everywhere section assertion by translation invariance. For Borel representatives, the convolution-integrand lemma, applied to their squared moduli and composed with the continuous map $(x,q)\mapsto(2x-q,x)$, makes $(x,q)\mapsto |g(x)|^2|f(x-q)|^2$ Borel measurable. The Borel-product theorem identifies this with product Borel measurability, and the Borel factors lie in the Lebesgue sigma-algebras by the completion corollary, so the integrand is measurable for Tonelli's product measure ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]], [[thm-completion-measurable-functions-have-base-measurable-representatives]], [[lem-borel-representatives-make-the-convolution-integrand-borel-measurable]], [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]).

[F9] For $n\ge1$, under Countable Choice, reflection $q\mapsto-q$ and translations preserve Lebesgue measure, and integration of a nonnegative measurable function is invariant under measure-preserving maps. Thus for fixed $x$, $\int_{\mathbb R^n}|\tilde f(x-q)|^2\,dq=\|f\|_2^2$ ([[thm-lebesgue-measure-under-dilations-and-reflections]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[thm-integrals-are-invariant-under-measure-preserving-maps]]).

[F10] Under Countable Choice, $L^2(\mathbb R^n)$ with the integral pairing is a complex Hilbert space ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[A1] Countable Choice is assumed by [F3], [F5], [F6], [F8], and [F9] ([[def-countable-choice]]); it is also used in the minimizing-sequence argument below.

## Proof



**Proof technique:** direct.

**Given:** The data in the Statement.

1.1 If $n=0$, $L^2(\mathbb R^0)=\mathbb C$ with unit mass and $S_\lambda(0,0,t)=e^{i\lambda t}I$, which is a strongly continuous irreducible representation with the asserted central character. Assume $n\ge1$. Write $T_qf(x)=f(x-q)$ and $M_pf(x)=e^{i\lambda p\cdot x}f(x)$. These are unitaries because translations preserve Lebesgue measure and the multiplier has modulus one. The formula is $S_\lambda(q,p,t)=e^{i\lambda(t-q\cdot p/2)}M_pT_q$. [given, F1, F10, algebra]

1.2 Suppose a nonzero proper closed subspace $M\subset L^2(\mathbb R^n)$ is invariant under every $W_\lambda(q,p)$. To obtain $g\ne0$ in $M^\perp$, choose $x\notin M$ and set $d=\inf_{m\in M}\|x-m\|$. Countable Choice selects $m_k\in M$ with $\|x-m_k\|^2<d^2+1/(k+1)$. If $d=0$, then $m_k\to x$, contradicting closedness; hence $d>0$. Since $(m_k+m_l)/2\in M$, the parallelogram identity gives $\|m_k-m_l\|^2\le2/(k+1)+2/(l+1)$, so $m_k\to m\in M$ and $\|x-m\|=d$. Minimality, applied to $m\pm th$ and $m\pm tih$ for real $t$ and $h\in M$, gives $g:=x-m\perp M$; also $g\ne0$ since $d>0$. Choose $0\ne f\in M$. Invariance under the unitaries and their inverses makes $M^\perp$ invariant too. For every $q,p$, orthogonality and the formula for $S_\lambda$ give$0=\langle W_\lambda(q,p)f,g\rangle =e^{-i\lambda p\cdot q/2}\int f(x-q)\overline{g(x)}e^{i\lambda p\cdot x}\,dx.$For fixed $q$, $h_q(x)=f(x-q)\overline{g(x)}$ lies in $L^1$ by [F7]. As $p$ ranges over $\mathbb R^n$ and $\lambda\ne0$, the last integral is its Fourier transform at every frequency (up to the fixed sign and $2\pi$ normalization). It vanishes everywhere, so [F5] gives $h_q=0$ almost everywhere for each $q$. [A1, F5, F7, F10, given, choose]

2.1 For $q,p,q',p'$, applying the formula twice gives$S_\lambda(q,p,t)S_\lambda(q',p',s)f(x) =e^{i\lambda(t+s+(p+p')\cdot x-p\cdot q/2-p'\cdot q'/2-p'\cdot q)}f(x-q-q').$On the other hand, the phase in $S_\lambda(q+q',p+p',t+s-\omega((q,p),(q',p'))/2)$ is the same, since $\omega((q,p),(q',p'))=q\cdot p'-p\cdot q'$. Thus $S_\lambda(g)S_\lambda(h)=S_\lambda(gh)$ for all $g,h\in H$; the identity and inverse laws follow from [F1], so the unitary operators form a group representation. [F1, step 1.1, algebra]

2.2 By [F3], $q\mapsto T_q$ is strongly continuous. For fixed $f\in L^2$,$\|M_pf-M_{p_0}f\|_2^2 =\int_{\mathbb R^n}|e^{i\lambda(p-p_0)\cdot x}-1|^2|f(x)|^2\,dx\longrightarrow0$as $p\to p_0$: the integrand converges pointwise to zero and is bounded by $4|f|^2$, so [F4] applies. Scalar multiplication by $e^{i\lambda t}$ is continuous. A finite product of strongly continuous unitaries is jointly strongly continuous, by inserting and subtracting one factor at a time and using that each factor has norm one. Therefore $(q,p,t)\mapsto S_\lambda(q,p,t)$ is strongly continuous. [A1, F3, F4, step 1.1]

2.3 By [F8], choose finite-valued Borel representatives $\tilde f$ and $\tilde g$ of $f$ and $g$, and put $G(x,q)=|\tilde g(x)|^2|\tilde f(x-q)|^2$. For each fixed $q$, the representative discrepancies, including the translated discrepancy for $f(x-q)$, are null sets, so step 1.2 still gives $\int_{\mathbb R^n}G(x,q)\,dx=0$. The integrand is product-measurable by [F8], so Tonelli [F6] gives $\int_{\mathbb R^n}\int_{\mathbb R^n}G(x,q)\,dx\,dq=0$. Reversing the order and using the measure-preserving change $q\mapsto x-q$ from [F9] gives instead$\int_{\mathbb R^n}|\tilde g(x)|^2\left(\int_{\mathbb R^n}|\tilde f(x-q)|^2\,dq\right)dx =\|g\|_2^2\|f\|_2^2>0,$ a contradiction. Hence no such $M$ exists and the Weyl system is irreducible. [F3, F6, F8, F9, step 1.2, algebra]

3.1 Set $W_\lambda(q,p):=S_\lambda(q,p,0)$. Step 2.1 gives the Weyl relation with phase $e^{-i\lambda\omega/2}$ by [F1]. The full strong continuity just proved implies regularity on every line. Also $S_\lambda(0,0,t)=e^{i\lambda t}I$, so the central character is as stated. [F1, F2, step 2.1]

4.1 Steps 1.1–3.1 prove the unitary representation, central character, strong continuity and Weyl relation; step 2.3 proves irreducibility. These are exactly the asserted properties. [step 1.1, step 2.1, step 3.1, step 2.3] ∎
