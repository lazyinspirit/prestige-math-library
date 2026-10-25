---
id: "lem-ag-polynomial-quotient-differentials"
kind: "lemma"
title: "Differentials of a polynomial quotient and the Jacobian cokernel"
status: published
origin: "pipeline"
deps: ["lem-ag-differentials-universal-property", "thm-right-exactness-of-tensor-products", "def-polynomial-ring-on-a-family-of-indeterminates"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Stacks Algebra 10.131.9, 14–15"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil §§22.2.3, 22.2.12, pp.575, 579"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Let $A$ be a commutative ring, let $P=A[x_1,\dots,x_n]$ be the polynomial ring
on finitely many variables $x_1,\dots,x_n$, and let $B=P/I$ for an ideal
$I\subseteq P$. Then:

1. $\Omega_{P/A}$ is a free $P$-module with basis $\mathrm{d}x_1,\dots,\mathrm{d}x_n$.
2. With $I/I^{2}$ regarded as a $B$-module, the sequence of $B$-modules
$$I/I^{2}\longrightarrow B\otimes_P\Omega_{P/A}\longrightarrow\Omega_{B/A}\longrightarrow0$$
is exact, where the first map sends the class of $f\in I$ to $1\otimes\mathrm{d}f$ and the second is induced by $P\to B$.
3. If $I=(f_1,\dots,f_c)$, then $\Omega_{B/A}$ is the cokernel of the
$B$-linear map $B^{c}\to B^{n}$ given by the Jacobian matrix
$\bigl(\tfrac{\partial f_j}{\partial x_i}\bigr)$, that is,
$\Omega_{B/A}\cong B^{n}\big/\sum_{j=1}^{c}B\cdot(\partial_i f_j)_i$.

The first map of (2) need not be injective; it is not claimed to be.

## Facts & Assumptions

**Given:** A commutative ring $A$, the polynomial ring $P=A[x_1,\dots,x_n]$, an ideal $I\subseteq P$ and the quotient $B=P/I$.

[F1] [[lem-ag-differentials-universal-property]]: for every $P$-module $M$, $g\mapsto g\circ\mathrm{d}$ is an isomorphism $\operatorname{Hom}_P(\Omega_{P/A},M)\cong\operatorname{Der}_A(P,M)$, naturally in $M$.

[F2] [[thm-right-exactness-of-tensor-products]]: for a commutative ring $R$ and an exact sequence $A'\to B'\to C'\to0$ of $R$-modules, the sequence $A'\otimes_RN\to B'\otimes_RN\to C'\otimes_RN\to0$ is exact for every $R$-module $N$.

[F3] [[def-polynomial-ring-on-a-family-of-indeterminates]]: $A[x_1,\dots,x_n]$ is the set of finitely supported functions from monomials to $A$, written as formal sums $\sum_a c_ax^a$; so each element of $P$ has a unique expression as a finite $A$-linear combination of monomials $x^a=x_1^{a_1}\cdots x_n^{a_n}$, and the product of monomials is $x^ax^{a'}=x^{a+a'}$.

## Proof

1.1 Define $\partial_i\colon P\to P$ on the monomial basis of [F3] by $\partial_i(x^a):=a_ix^{a-e_i}$ when $a_i\ge1$, and $\partial_i(x^a):=0$ when $a_i=0$, extended $A$-linearly. Since exponents add under multiplication and $\mathbb N$-multiplication distributes, $\partial_i(fg)=f\,\partial_i(g)+g\,\partial_i(f)$ for monomials and hence, by $A$-bilinearity of multiplication, for all $f,g\in P$; also $\partial_i(A)=0$. So each $\partial_i$ is an $A$-derivation of $P$. By [F1] there are $P$-linear $\alpha_i\colon\Omega_{P/A}\to P$ with $\alpha_i(\mathrm{d}x_j)=\partial_i(x_j)=\delta_{ij}$. The $P$-linear map $\Phi\colon P^{n}\to\Omega_{P/A}$, $\Phi(e_i)=\mathrm{d}x_i$, is surjective: by additivity and the Leibniz rule $\mathrm{d}(x^a)=\sum_i a_ix^{a-e_i}\mathrm{d}x_i$, and an arbitrary element of $P$ is a finite $A$-linear combination of monomials, so every $\mathrm{d}f$ lies in $\sum_iP\,\mathrm{d}x_i$, and these elements generate $\Omega_{P/A}$ by construction. The $P$-linear endomorphism $\Phi\circ(\alpha_1,\dots,\alpha_n)$ of $\Omega_{P/A}$ fixes each generator $\mathrm{d}x_j$, hence is the identity; therefore $\Phi$ is injective as well, and $\mathrm{d}x_1,\dots,\mathrm{d}x_n$ are a basis. [F1, F3, algebra]

2.1 Let $Q:=\operatorname{coker}\bigl(B\otimes_PI\to B\otimes_P\Omega_{P/A}\bigr)$ where the map sends $1\otimes f$ to $1\otimes\mathrm{d}f$. This is well defined: the map $I\to B\otimes_P\Omega_{P/A}$, $f\mapsto1\otimes\mathrm{d}f$, is $P$-linear, and the class of $1\otimes f$ depends only on $f$, so extension of scalars gives the displayed $B$-linear map. There is a $B$-linear surjection $B\otimes_P\Omega_{P/A}\to\Omega_{B/A}$ with $1\otimes\mathrm{d}f\mapsto\mathrm{d}(f+I)$, induced by the $A$-derivation $P\to\Omega_{B/A}$, $f\mapsto\mathrm{d}(f+I)$; it kills the image of $B\otimes_PI$ because $\mathrm{d}f$ maps to the class of $\mathrm{d}(f+I)$ with $f\in I$. Hence it factors through a surjection $Q\to\Omega_{B/A}$. Conversely define $D\colon B\to Q$ by $D(g+I):=$ the class of $1\otimes\mathrm{d}g$. This is well defined because $g\in I$ makes $1\otimes\mathrm{d}g$ lie in the image defining $Q$; it is additive, $A$-constant, and satisfies Leibniz because $\mathrm{d}$ does and the $B$-module structure on $B\otimes_P\Omega_{P/A}$ is that of $B$. By [F1] applied to the $A$-algebra $B$ and the $B$-module $Q$, $D$ induces a $B$-linear map $\Omega_{B/A}\to Q$, and the two displayed maps are inverse on the generating classes of $1\otimes\mathrm{d}x_i$ and of $\mathrm{d}x_i$. Therefore $\Omega_{B/A}\cong Q$, which is exactness of the sequence of (2); right exactness of $B\otimes_P-$ is the statement of [F2] applied to $I\to P\to B\to0$, and it is what makes $B\otimes_P\Omega_{P/A}$ the receptacle of this cokernel presentation. [F1, F2, step 1.1, algebra]

3.1 Suppose $I=(f_1,\dots,f_c)$. Since $I=\sum_jPf_j$, every class in $I/I^{2}$ is a $B$-linear combination of the classes of $f_1,\dots,f_c$: from $f=\sum_jg_jf_j$ and $I^{2}\ni$ (terms with two factors of $I$) one gets $f\equiv\sum_j(g_j+I)f_j$ modulo $I^{2}$. Hence the image of the first map of (2) is generated by the classes of $1\otimes\mathrm{d}f_j$, and $\mathrm{d}f_j=\sum_i\partial_if_j\,\mathrm{d}x_i$ by step 1.1 and the Leibniz rule. Under the basis identification of step 1.1, $1\otimes\mathrm{d}f_j$ corresponds to the $j$-th column $(\partial_if_j)_i$ of the Jacobian matrix, so the cokernel of $B^{c}\to B^{n}$, $e_j\mapsto(\partial_if_j)_i$, is exactly $Q\cong\Omega_{B/A}$ of step 2.1. [step 1.1, step 2.1, algebra]

4.1 The first map of (2) is not injective in general: take $A=\mathbb Z$, $P=\mathbb Z[x]$ and $I=(2)$. Then $I/I^{2}=2\mathbb Z[x]/4\mathbb Z[x]\cong\mathbb F_2[x]\ne0$, while $\mathrm{d}(2)=0$ in $\Omega_{P/A}$ because $2=\varphi(2)$ for the structure map $\varphi\colon\mathbb Z\to\mathbb Z[x]$, so the first map has nonzero kernel. This proves the final clause and, with steps 2.1 and 3.1, the whole statement. [step 2.1, step 3.1, given, algebra] ∎
