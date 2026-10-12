---
id: lem-q-one-toral-specialization-identifies-the-classical-cartan-generators
kind: lemma
title: "The q=1 toral specialization identifies the classical Cartan generators"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integrable-kac-moody-module, def-kac-moody-integral-and-dominant-integral-weights, def-lusztig-divided-power-integral-form, def-quantum-integers-factorials-and-divided-powers-at-q-i, def-quantum-weight-module-and-integrability, lem-divided-power-and-toral-quantum-binomial-reordering-identities, lem-rational-local-quantum-halves-and-torus-specialize-at-q-one]
justified_by: []
aliases: []
dependency_level: 4
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Math 263C Quantum Groups (Stanford, 2022), lecture slides 'Lusztig's quantum group. Tilting modules. The Fusion Category in Action'"
      url: "http://sporadic.stanford.edu/quantum/lecture16.pdf"
      locator: "Slides 'Certain important elements' and its proof slide: the toral binomials and the reduction recursion at $v\\mapsto1$ used to identify the classical Cartan generators in the positive quotient."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§1, printed pp. 5-6, displays (1.4)-(1.6): the Drinfeld-Jimbo commutator relations whose integral forms are specialized on label-graded lattices."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "Ch. 33, §33.1.2, printed p. 258: the specialization at $q=1$ and the comparison with the classical enveloping algebra (read via the owner's recorded OCR pass)."
---

## Statement

Let $(I,A,D,P,P^{\vee},q)$ be a finite symmetrizable Cartan datum, let
$U_A$ be the integral form with toral part $U_A^0$
([[def-lusztig-divided-power-integral-form]]) and let $k$ be a
characteristic-zero field regarded as an $A$-algebra by $q\mapsto1$.
Write $H_i:=T_{i,0,1}$ and $\bar x$ for the image of $x$ in a specialization.

(a) **Algebra level.** The positive toral quotient
$U_A^0\otimes_Ak/(K_h-1:h\in P^{\vee})$ is the polynomial algebra
$k[H_i:i\in I]$, and in it $\bar T_{i,c,t}=\binom{H_i+c}{t}$ for all
$c\in\mathbb Z$, $t\ge0$
([[lem-rational-local-quantum-halves-and-torus-specialize-at-q-one]](c)).
No residual $K_h$-ambiguity remains after this quotient — the ideal
$(K_h-1:h\in P^{\vee})$ is exactly the kernel of the comparison with
$k[H_i]$ — but it is *not* claimed that $K_h=1$ in the unquotiented
specialization $U_A^0\otimes_Ak$.

(b) **Label-graded lattices.** Let $M$ be a $P$-graded type-one
$U_q(\mathfrak g)$-module with label grading $M=\bigoplus_{\mu\in P}M_\mu$
([[def-quantum-weight-module-and-integrability]]), and let
$M_A=\bigoplus_{\mu\in P}(M_A\cap M_\mu)$ be a $U_A$-stable $A$-submodule that
is graded in the *lattice's own* sense, i.e. it is the direct sum of its
intersections with the label spaces. Then, on $M_A\otimes_Ak$, the operators
induced by $E_i,F_i$ (and all of $U_A$) satisfy: $\bar K_h=\mathrm{id}$ for
every $h\in P^{\vee}$; $\bar T_{i,c,t}$ acts on the image of $M_A\cap M_\mu$ by
the integer $\binom{\langle\mu,h_i\rangle+c}{t}$; and
$[\bar E_i,\bar F_j]=\delta_{ij}\bar H_i$,
$[\bar H_i,\bar E_j]=a_{ij}\bar E_j$,
$[\bar H_i,\bar F_j]=-a_{ij}\bar F_j$, where $\bar H_i$ acts on the image of
$M_A\cap M_\mu$ by the integer $\langle\mu,h_i\rangle$.

The grading hypothesis in (b) is a real hypothesis on the lattice: it is not
inferred from the mere fact that $M_A$ spans a weight module. All divisions
that occur are performed inside the DVR
$R=\mathbb Q[q]_{(q-1)}$ (units $[r]_i!$ and $q_i^{\pm1}$); no vanishing
denominator $q_i^s-q_i^{-s}$ is substituted by $q=1$.

## Facts & Assumptions

**Given:** The integral form $U_A$, a label-graded type-one module $M$, a
$U_A$-stable graded lattice $M_A$, and the specialization $A\to k$, $q\mapsto1$.

[F1] The positive toral quotient is $k[H_i:i\in I]$ with
$\bar T_{i,c,t}=\binom{H_i+c}{t}$; the localized toral $R$-basis
$\{K_c\prod_iK_i^{\delta_i}H_i^{t_i}\}$ exists, and
$T_{c,1}=K_i[c]_i+T_{i,0,1}$; the kernel statement is the equality
$U_A^0\otimes_Ak/(K_h-1)\cong k[H_i]$ of the cited lemma
([[lem-rational-local-quantum-halves-and-torus-specialize-at-q-one]](b),(c)).

[F2] On $M_\mu$, $K_h$ acts by $q^{\langle\mu,h\rangle}$ and $T_{i,c,t}$ acts
by the Gaussian binomial $\binom{\langle\mu,h_i\rangle+c}{t}_i$; the mixed and
shifted relations $E_iF_j-F_jE_i=\delta_{ij}T_{i,0,1}$ and
$T_{i,0,1}E_j=E_jT_{i,a_{ij},1}$, $T_{i,0,1}F_j=F_jT_{i,-a_{ij},1}$ hold as
operators on $M$, and $E_i,F_i,K_h^{\pm1},T_{i,c,t}$ preserve $M_A$
([[def-quantum-weight-module-and-integrability]],
[[lem-divided-power-and-toral-quantum-binomial-reordering-identities]],
[[def-lusztig-divided-power-integral-form]]).

[F3] For an integer $M\in\mathbb Z$,
$\binom{M}{t}_i=\prod_{s=1}^{t}[M-s+1]_i/[s]_i$ is a Laurent polynomial in
$q_i$; its value at $q_i=1$ is the generalized binomial coefficient
$\binom{M}{t}=\prod_{s=1}^{t}(M-s+1)/s!$, an integer, including when $M<0$
([[def-quantum-integers-factorials-and-divided-powers-at-q-i]],
[[def-quantum-weight-module-and-integrability]]). Likewise
$q^{\langle\mu,h\rangle}|_{q=1}=1$, and the labels
$\langle\mu,h_i\rangle$ are integers
([[def-kac-moody-integral-and-dominant-integral-weights]],
[[def-integrable-kac-moody-module]]).

[F4] If a graded lattice is the direct sum of its label pieces, then an
$A$-linear operator acts on $M_A\otimes_Ak$ through its values on the pieces:
$K_h$ acts by the scalars $q^{\langle\mu,h\rangle}$ on the pieces, which
specialize to $1$; the scalar operators required in (b) are therefore
well-defined on the whole specialization. [[def-quantum-weight-module-and-integrability]]
is used for the grading convention.



## Verification

**Proof technique:** quote the algebra-level positive quotient from the rational-local theorem, evaluate the diagonal scalars on the graded lattice at q=1, and reduce the integral operator identities modulo q-1.

1.1 The algebra-level statement. Part (a) is the toral clause of [[lem-rational-local-quantum-halves-and-torus-specialize-at-q-one]](c): the localized basis $\{K_c\prod_iK_i^{\delta_i}H_i^{t_i}\}$ of $U_A^0$ specializes so that every $K$ becomes $1$, leaving the freely generated polynomial algebra $k[H_i]$, and the integral recursion $T_{c+1,t}=z^tT_{c,t}+K^{-1}z^{-c+t-1}T_{c,t-1}$ with $T_{c,1}=K_i[c]_i+T_{i,0,1}$ specializes to the Pascal recursion with value $\binom{H_i+c}{t}$; the kernel of $U_A^0\otimes_Ak\twoheadrightarrow k[H_i]$ is exactly $(K_h-1:h\in P^{\vee})$. Nothing here is a statement about the unquotiented specialization. [F1, algebra]

1.2 Scalar operators on a label-graded lattice. Let $\mu\in P$ and $x\in M_A\cap M_\mu$. By [F2], $K_hx=q^{\langle\mu,h\rangle}x$ and $T_{i,c,t}x=\binom{\langle\mu,h_i\rangle+c}{t}_ix$. Here $\langle\mu,h_i\rangle\in\mathbb Z$ by the integrality of the labels [F3], so the binomial is a Laurent polynomial in $q_i$, and after tensoring with $k$ its value is the integer $\binom{\langle\mu,h_i\rangle+c}{t}$ of [F3]; the scalar $q^{\langle\mu,h\rangle}$ specializes to $1$. Since $M_A=\bigoplus_\mu(M_A\cap M_\mu)$ by the grading hypothesis, these piecewise scalars define honest operators on all of $M_A\otimes_Ak$: $\bar K_h=\mathrm{id}$ and $\bar T_{i,c,t}$ acting by $\binom{\langle\mu,h_i\rangle+c}{t}$ on the image of each piece. In particular these scalar operators are integer-valued, and $\bar H_i$ acts by $\langle\mu,h_i\rangle$. If the lattice is not graded in this sense, a general lattice element may have weight components outside $M_A$ and the scalar operators need not descend; this is the caveat of the statement. [F2, F3, F4, algebra]

2.1 The classical Cartan commutators. All generators $E_i,F_j,H_i,K_h$ preserve $M_A$ by [F2], so the integral operator identities descend to $M_A\otimes_Ak$. The mixed relation gives $\bar E_i\bar F_j-\bar F_j\bar E_i=\delta_{ij}\bar T_{i,0,1}=\delta_{ij}\bar H_i$; the shifted toral relations give $\bar H_i\bar E_j=\bar E_j\binom{\bar H_i+a_{ij}}{1}=\bar E_j(\bar H_i+a_{ij})$ and $\bar H_i\bar F_j=\bar F_j(\bar H_i-a_{ij})$, because on the image of $M_A\cap M_\mu$ both sides act by the scalars $\langle\mu,h_i\rangle$ resp. $\langle\mu,h_i\rangle+a_{ij}$ and $T_{i,a_{ij},1}$ specializes to $\binom{\langle\mu,h_i\rangle+a_{ij}}{1}=\langle\mu,h_i\rangle+a_{ij}$ by step 1.2. Hence the specialized operators satisfy the classical Cartan commutators of (b). No step divides by $q_i^s-q_i^{-s}$ after specializing. The factors $[r]_i!$ and $q_i^{\pm1}$ are units in the local DVR; quantum-integer and binomial ratios are evaluated through their Laurent-polynomial identities, not by treating the vanishing $q_i-q_i^{-1}$ as a unit. [F1, F2, step 1.2, algebra] ∎
