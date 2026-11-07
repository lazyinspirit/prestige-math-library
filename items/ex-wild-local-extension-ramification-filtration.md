---
id: ex-wild-local-extension-ramification-filtration
kind: example
title: "A wild local extension and its nontrivial higher groups"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-lower-ramification-groups-of-a-local-galois-extension
  - def-herbrand-function-and-upper-ramification-numbering
  - lem-local-integers-of-finite-separable-local-extension-are-monogenic
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-extension-degree-and-finite-extension
  - def-countable-choice
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - def-finite-galois-extension-and-galois-group
  - def-integral-element-and-algebraic-integer
  - cor-integral-elements-form-a-subring
  - thm-valuation-ring-is-integrally-closed
  - thm-splitting-fields-exist-for-nonzero-polynomials
  - thm-finite-galois-extension-characterizations
  - def-completion-of-a-number-field-at-a-prime
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Sections 'Totally ramified extensions' and 'Ramification groups'"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "J. Neukirch, Algebraic Number Theory, Chapter II, Section 10"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
verification: {}
---

## Example

Assume the Axiom of Choice to take $K=\mathbb Q_2$ with valuation ring
$\mathbb Z_2$, uniformizer $2$, and residue field $\mathbb F_2$. Let $\pi$ be
a root of
$$P(T)=(T+1)^4+1=T^4+4T^3+6T^2+4T+2,$$
and put $L=K(\pi)$ and $\zeta=1+\pi$. Then $P$ is irreducible over $K$,
$[L:K]=4$, and $\zeta$ is a primitive eighth root of unity. The extension is
Galois with group $G\cong(\mathbb Z/8\mathbb Z)^\times\cong C_2\times C_2$,
where $\sigma_a(\zeta)=\zeta^a$ for $a=1,3,5,7$. The element $\pi$ is a
uniformizer, the residue field of $L$ is $\mathbb F_2$, and the ramification
index is $4$, so it is wildly ramified in the local sense that the residue
characteristic $2$ divides the ramification index. Its lower groups are
$$G_0=G_1=G,\qquad G_2=G_3=\{1,\sigma_5\},\qquad G_i=\{1\}\quad(i\ge4).$$
The Herbrand function and upper groups are
$$\varphi_{L/K}(u)= \begin{cases} u,&-1\le u\le1,\\ 1+(u-1)/2,&1\le u\le3,\\ 2+(u-3)/4,&u\ge3, \end{cases} \qquad G^v= \begin{cases} G,&-1\le v\le1,\\ \{1,\sigma_5\},&1<v\le2,\\ \{1\},&v>2. \end{cases}$$
The filtration is illustrated below; arrows indicate subgroup inclusion as the
integer index increases.

\begin{tikzpicture}[>=stealth, line width=0.8pt]
\node (a) at (0,0) {$G_0=G_1=G$};
\node (b) at (4,0) {$G_2=G_3=\langle\sigma_5\rangle$};
\node (c) at (8,0) {$G_i=\{1\},\ i\ge4$};
\draw[->] (a) -- node[above]{inclusion} (b);
\draw[->] (b) -- node[above]{inclusion} (c);
\end{tikzpicture}

## Example references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-lower-ramification-groups-of-a-local-galois-extension]]

[[def-herbrand-function-and-upper-ramification-numbering]]

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, “Ramification groups”](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

[J. Neukirch, *Algebraic Number Theory*, Chapter II, Section 10](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, the 2-adic completion $K=\mathbb Q_2$, a root $\pi$ of $P$, and the indicated extension $L=K(\pi)$.

[A1] [[def-axiom-of-choice]]: AC supplies the number-field place/completion interface used to instantiate $\mathbb Q_2$.

[F1] [[def-completion-of-a-number-field-at-a-prime]]: For the prime $(2)$ of $\mathbb Z$, its completion has valuation ring with residue field $\mathbb Z/(2)=\mathbb F_2$ and the normalized valuation has $v_K(2)=1$.

[F2] [[thm-choice-implies-dependent-implies-countable-choice]]: AC implies Countable Choice.

[F3] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]: Under Countable Choice, $[L:K]=e(L/K)f(L/K)$ and $v_L|_K=e(L/K)v_K$.

[F4] [[def-integral-element-and-algebraic-integer]]: A root of a monic polynomial over $\mathcal O_K$ is integral over $\mathcal O_K$.

[F5] [[cor-integral-elements-form-a-subring]]: Sums and products of integral elements are integral.

[F6] [[thm-valuation-ring-is-integrally-closed]]: The valuation ring $\mathcal O_K$ is integrally closed in $K$.

[F7] [[thm-splitting-fields-exist-for-nonzero-polynomials]]: A nonzero polynomial over a field has a splitting field.

[F8] [[thm-finite-galois-extension-characterizations]]: A finite extension that is a splitting field of a separable polynomial is Galois, and its Galois group has order its degree.

[F9] [[lem-local-integers-of-finite-separable-local-extension-are-monogenic]]: Under Countable Choice, if residue fields agree then every uniformizer of the upper field generates its valuation ring over the lower one.

[F10] [[def-lower-ramification-groups-of-a-local-galois-extension]]: $G_i$ consists of the automorphisms whose differences on every integral element have valuation at least $i+1$; $G_0$ is the kernel of the residue action.

[F11] [[def-herbrand-function-and-upper-ramification-numbering]]: Real groups use $G_t=G_{\lceil t\rceil}$ for $t>-1$ and $G^v=G_{\psi(v)}$, where $\psi=\varphi^{-1}$.

## Verification

**Given:** The data above, with Countable Choice following from AC.

1.1 The polynomial $P$ is monic with coefficients in $\mathbb Z_2$. Suppose $P=AB$ with monic positive-degree polynomials $A,B\in K[T]$. In a splitting field, every root of $A$ or $B$ is a root of $P$, hence is integral over $\mathbb Z_2$ by [F4]. Their elementary symmetric expressions show that the coefficients of $A$ and $B$ are integral by [F5]; since these coefficients lie in $K$, [F6] puts them in $\mathbb Z_2$. Reducing modulo $2$ gives $\bar A\bar B=T^4$ in $\mathbb F_2[T]$. Both monic positive-degree factors of $T^4$ have zero constant term, so $4$ divides the constant term $2$ of $P$, a contradiction. Therefore $P$ is irreducible and $[L:K]=4$. [A1, F4, F5, F6, F7, given, algebra]

2.1 The equation $\zeta^4=-1$ implies $\zeta^8=1$ and $\zeta^4\ne1$, so $\zeta$ has order $8$. The four distinct roots of $X^4+1$ are $\zeta^a$ for $a=1,3,5,7$, and therefore the four roots $\zeta^a-1$ of $P$ lie in $L$. Thus $L$ is the splitting field of the separable polynomial $P$ over $K$, so [F8] gives that $L/K$ is Galois of degree $4$. Each root gives a $K$-embedding $L\to L$ by evaluation at that root; as an injective linear map of a four-dimensional $K$-space to itself, it is surjective. Composition satisfies $\sigma_a\sigma_b(\zeta)=\zeta^{ab}$, and every odd residue class modulo $8$ squares to $1$, so these automorphisms identify $G$ with $(\mathbb Z/8\mathbb Z)^\times\cong C_2\times C_2$. [F7, F8, step 1.1, construct, algebra]

2.2 Since $P(T)\bmod2=T^4$, the residue of its integral root $\pi$ is zero, so $t:=v_L(\pi)$ is a positive integer. Write $e=e(L/K)$ and $f=f(L/K)$. By [F3], using Countable Choice from [A1,F2], $v_L(2)=e$ and $4=ef$, hence $e\le4$. The five terms of $P(\pi)=0$ have valuations $4t$, $2e+3t$, $e+2t$, $2e+t$, and $e$, respectively; here $v_L(6)=e$ because $3$ is a $2$-adic unit. If $4t<e$, the term $\pi^4$ has uniquely smallest valuation; if $4t>e$, the constant term $2$ has uniquely smallest valuation. Either case contradicts the ultrametric inequality for a zero sum, so $4t=e$. Since $t\ge1$ and $e\le4$, $t=1$, $e=4$, and $f=1$. Therefore $\pi$ is a uniformizer and the residue fields agree. [A1, F1, F2, F3, step 1.1, algebra]

3.1 By [F9] and Countable Choice from [A1,F2], $\mathcal O_L=\mathbb Z_2[\pi]$. For any $\sigma\in G$, factoring $\sigma(\pi)^j-\pi^j$ shows that the minimum of $v_L(\sigma x-x)$ over $x\in\mathcal O_L$ is attained at $x=\pi$. Direct calculations give $i(\sigma_3)=v_L(\zeta(\zeta^2-1))=v_L(\pi(\zeta+1))=2$, $i(\sigma_5)=v_L(\zeta(\zeta^4-1))=v_L(2\zeta)=4$, and $i(\sigma_7)=v_L(\zeta(\zeta^6-1))=v_L(\zeta(\zeta^2+1))=2$. Indeed $\zeta+1=\pi+2$ has valuation $1$ because $v_L(\pi)=1$ and $v_L(2)=4$, and $\zeta^2+1=\pi(\zeta+1)+2$ has valuation $2$. The residue field is $\mathbb F_2$, so all automorphisms act trivially on it and $G_0=G$. [A1, F2, F3, F9, F10, step 2.2, algebra]

4.1 By [F10], a nonidentity $\sigma$ lies in $G_i$ exactly when $i(\sigma)\ge i+1$. The three computed values therefore give $G_1=G$, $G_2=G_3=\{1,\sigma_5\}$, and $G_i=\{1\}$ for $i\ge4$, with $G_0=G$ from step 3.1. [F10, step 3.1, algebra]

5.1 On $0<u\le1$ the real lower groups have order $4$, on $1<u\le3$ they have order $2$, and on $u>3$ they have order $1$. Integrating their slopes $|G_u|/|G_0|$ from [F11], and using $\varphi(u)=u$ for $-1\le u\le0$, gives the displayed piecewise formula. Its breakpoints are $\varphi(1)=1$ and $\varphi(3)=2$. Applying $G^v=G_{\psi(v)}$ gives $G^v=G$ through $v=1$, the subgroup $\{1,\sigma_5\}$ for $1<v\le2$, and the identity group for $v>2$. [F11, step 4.1, algebra] ∎
