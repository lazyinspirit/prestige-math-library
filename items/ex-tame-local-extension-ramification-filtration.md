---
id: ex-tame-local-extension-ramification-filtration
kind: example
title: "A tame local extension and its ramification filtration"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-lower-ramification-groups-of-a-local-galois-extension
  - thm-local-different-exponent-as-ramification-group-sum
  - def-herbrand-function-and-upper-ramification-numbering
  - lem-local-integers-of-finite-separable-local-extension-are-monogenic
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-extension-degree-and-finite-extension
  - def-countable-choice
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - def-finite-galois-extension-and-galois-group
  - def-number-field
  - thm-ring-of-integers-of-a-quadratic-field
  - def-tame-and-wild-ramification
  - thm-different-exponent-in-tame-and-wild-ramification
  - def-completion-of-a-number-field-at-a-prime
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-number-field-integral-ideal-factorisation-in-zf
  - def-ramification-index
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, 'Ramification groups'"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "J. Neukirch, Algebraic Number Theory, Chapter II, Section 10 and Chapter III, Section 2"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
    - title: "Keith Conrad, The Different Ideal, Theorem 4.13"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf"
verification: {}
---

## Example

Assume the Axiom of Choice to take $K=\mathbb Q_7$ with valuation ring
$\mathbb Z_7$, uniformizer $7$, and residue field $\mathbb F_7$. Let
$L=K(\pi)$ where $\pi^2=7$. Then $L/K$ is Galois of degree $2$, with group
$G=\{1,\sigma\}$ and $\sigma(\pi)=-\pi$. The element $\pi$ is a
uniformizer, the residue field of $L$ is $\mathbb F_7$, and $e(L/K)=2$.
Because the residue characteristic $7$ does not divide $e(L/K)=2$, the
extension is tame in the local sense that the residue characteristic does not
divide the ramification index. Its lower groups, Herbrand function, and upper groups are
$$G_0=G,\qquad G_i=\{1\}\ (i\ge1),\qquad \varphi_{L/K}(u)= \begin{cases} u,&-1\le u\le0,\\ u/2,&u\ge0, \end{cases} \qquad G^v= \begin{cases} G,&-1\le v\le0,\\ \{1\},&v>0. \end{cases}$$
The local different exponent is $1$. Separately, for the number field
$E=\mathbb Q(\sqrt7)$, the prime $\mathfrak p=(\sqrt7)$ lies above $7$ and
$(7)=\mathfrak p^2$, so the published global tame different theorem gives
$v_{\mathfrak p}(\mathfrak D_E)=1$.

The local filtration is drawn below; the arrow indicates subgroup inclusion
as the integer index increases.

\begin{tikzpicture}[>=stealth, line width=0.8pt]
\node (a) at (0,0) {$G_0=G$};
\node (b) at (4,0) {$G_i=\{1\},\ i\ge1$};
\draw[->] (a) -- node[above]{inclusion} (b);
\end{tikzpicture}

## Example references

[[def-lower-ramification-groups-of-a-local-galois-extension]]

[[thm-local-different-exponent-as-ramification-group-sum]]

[[def-tame-and-wild-ramification]]

[[thm-different-exponent-in-tame-and-wild-ramification]]

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, “Ramification groups”](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

[J. Neukirch, *Algebraic Number Theory*, Chapter II, Section 10 and Chapter III, Section 2](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

[Keith Conrad, *The Different Ideal*, Theorem 4.13](https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, the 7-adic completion $K=\mathbb Q_7$, $L=K(\pi)$ with $\pi^2=7$, and the number field $E=\mathbb Q(\sqrt7)$.

[A1] [[def-axiom-of-choice]]: AC supplies the number-field place/completion interface used to instantiate $\mathbb Q_7$.

[F1] [[def-completion-of-a-number-field-at-a-prime]]: The completion at $(7)\subset\mathbb Z$ has valuation ring with residue field $\mathbb Z/(7)=\mathbb F_7$ and normalized valuation $v_K(7)=1$.

[F2] [[thm-choice-implies-dependent-implies-countable-choice]]: AC implies Countable Choice.

[F3] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]: Under Countable Choice, $[L:K]=e(L/K)f(L/K)$ and $v_L|_K=e(L/K)v_K$.

[F4] [[lem-local-integers-of-finite-separable-local-extension-are-monogenic]]: Under Countable Choice, if residue fields agree then every uniformizer of the upper field generates its valuation ring over the lower one.

[F5] [[thm-local-different-exponent-as-ramification-group-sum]]: The local different exponent is $\sum_{i\ge0}(|G_i|-1)$.

[F6] [[def-lower-ramification-groups-of-a-local-galois-extension]]: $G_i$ is determined by $v_L(\tau x-x)\ge i+1$ for every $x\in\mathcal O_L$, and $G_0$ is the residue-action kernel.

[F7] [[def-herbrand-function-and-upper-ramification-numbering]]: Real groups use $G_t=G_{\lceil t\rceil}$ for $t>-1$, $\varphi(u)=\int_0^u|G_0|^{-1}|G_t|dt$, and $G^v=G_{\psi(v)}$.

[F8] [[def-number-field]]: $E=\mathbb Q(\sqrt7)$ is a number field.

[F9] [[thm-ring-of-integers-of-a-quadratic-field]]: For squarefree $d\not\equiv1\pmod4$, $\mathcal O_{\mathbb Q(\sqrt d)}=\mathbb Z[\sqrt d]$.

[F10] [[thm-number-field-integral-ideal-factorisation-in-zf]]: Every nonzero ideal of a number-field ring of integers factors uniquely into prime ideals.

[F11] [[def-ramification-index]]: For a prime above $7$, its ramification index is its exponent in the prime-ideal factorization of $(7)$.

[F12] [[def-tame-and-wild-ramification]]: A number-field prime above rational $p$ is tame when $p$ does not divide its ramification index.

[F13] [[thm-different-exponent-in-tame-and-wild-ramification]]: For a number-field prime above $p$, tame ramification gives global different exponent $e-1$.


## Verification

**Given:** The data above, with Countable Choice following from AC.

1.1 The element $7$ is not a square in $K$: if $x^2=7$, then $2v_K(x)=v_K(7)=1$, impossible because $v_K(x)\in\mathbb Z$. Thus $T^2-7$ is irreducible and $[L:K]=2$. Its two roots $\pi,-\pi$ lie in $L$ and are distinct, so $L/K$ is Galois with the automorphism stated in the Example. [A1, F1, given, algebra]

1.2 The integer $7$ is squarefree and $7\not\equiv1\pmod4$, so [F9] gives $\mathcal O_E=\mathbb Z[\sqrt7]$. The map $a+b\sqrt7\mapsto a\bmod7$ from $\mathcal O_E$ onto $\mathbb F_7$ has kernel $(\sqrt7)$, so $\mathfrak p=(\sqrt7)$ is prime and contracts to $(7)$. Also $(7)=(\sqrt7)^2=\mathfrak p^2$; uniqueness of factorization [F10] and [F11] give $e(\mathfrak p/7)=2$. [F8, F9, F10, F11, given, algebra]

2.1 Put $t=v_L(\pi)$. Since $\pi^2=7$ has positive valuation, $t\ge1$. By [F3], using Countable Choice from [A1,F2], $2t=e(L/K)$ and $2=e(L/K)f(L/K)$, so $e(L/K)\le2$; hence $t=1$, $e(L/K)=2$, and $f(L/K)=1$. Thus $\pi$ is a uniformizer and the residue fields agree. [A1, F1, F2, F3, step 1.1, algebra]

3.1 By [F4] and Countable Choice from [A1,F2], $\mathcal O_L=\mathbb Z_7[\pi]$. Every $x\in\mathcal O_L$ is a polynomial in $\pi$ over $\mathbb Z_7$, and factoring $(-\pi)^j-\pi^j$ shows $v_L(\sigma x-x)\ge v_L(-2\pi)=1$; equality holds at $x=\pi$ because $2$ is a unit in $\mathbb Z_7$. Hence $i(\sigma)=1$. By step 2.1, the residue fields agree, so every $K$-automorphism acts trivially on the residue field and $G_0=G$. The condition $i(\sigma)=1$ excludes $\sigma$ from every $G_i$ for $i\ge1$, proving $G_i=\{1\}$ there. [A1, F2, F4, F6, step 2.1, algebra]

4.1 The lower groups in step 3.1 give $\varphi(u)=u/2$ for $u\ge0$: for every $u>0$, $G_u=G_{\lceil u\rceil}=\{1\}$ and $|G_0|=2$. On $[-1,0]$ the Herbrand definition is the identity. Its inverse satisfies $\psi(v)=2v$ for $v\ge0$, which yields the displayed upper groups, including $G^0=G_0$. [F7, step 3.1, algebra]

4.2 Since $|G_0|=2$ and all higher groups are trivial, [F5] gives local different exponent $d_{L/K}=1$. [F5, step 3.1]

5.1 Since $7\nmid2$, the prime is tame by [F12]. Applying [F13] with $e=2$ gives the separate global different exponent $v_{\mathfrak p}(\mathfrak D_E)=e-1=1$, as asserted. [F12, F13, step 1.2] ∎
